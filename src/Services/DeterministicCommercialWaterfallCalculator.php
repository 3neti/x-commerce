<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Services;

use LBHurtado\XCommerce\Contracts\CommercialWaterfallCalculatorContract;
use LBHurtado\XCommerce\Data\CommercialAllocationLineData;
use LBHurtado\XCommerce\Data\CommercialAllocationPlanData;
use LBHurtado\XCommerce\Data\CommercialWaterfallInputData;
use LBHurtado\XCommerce\Data\CommercialWaterfallPolicyData;
use LBHurtado\XCommerce\Data\CommercialWaterfallRuleData;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final class DeterministicCommercialWaterfallCalculator implements CommercialWaterfallCalculatorContract
{
    public function calculate(
        CommercialWaterfallPolicyData $policy,
        CommercialWaterfallInputData $input,
    ): CommercialAllocationPlanData {
        $remainingMinor = $input->allocationBaseMinor;
        $lines = [];

        foreach ($policy->orderedRules() as $rule) {
            $recipientReference = $rule->recipientReference;

            if ($rule->participantRole !== null) {
                $participantReference = $input->participants[$rule->participantRole] ?? null;

                if (! is_string($participantReference) || trim($participantReference) === '') {
                    continue;
                }

                $recipientReference = $participantReference;
            }

            $amountMinor = $this->amount($rule, $input->allocationBaseMinor, $remainingMinor);

            if ($amountMinor > $remainingMinor) {
                throw new CommercialWaterfallInvariantViolation(
                    'Commercial waterfall fixed allocations exceed the allocation base.'
                );
            }

            $remainingMinor -= $amountMinor;

            $lines[] = new CommercialAllocationLineData(
                policyRuleReference: $rule->reference,
                sequence: $rule->sequence,
                lineType: $rule->lineType,
                category: $rule->category,
                recipientReference: $recipientReference,
                amountMinor: $amountMinor,
                currency: $policy->currency,
            );
        }

        if ($remainingMinor !== 0) {
            throw new CommercialWaterfallInvariantViolation(
                'Commercial waterfall allocations do not reconcile to the allocation base.'
            );
        }

        return new CommercialAllocationPlanData(
            sourceCommercialEventReference: $input->sourceCommercialEventReference,
            policyReference: $policy->reference,
            policyVersion: $policy->version,
            currency: $policy->currency,
            allocationBaseMinor: $input->allocationBaseMinor,
            lines: $lines,
        );
    }

    private function amount(
        CommercialWaterfallRuleData $rule,
        int $allocationBaseMinor,
        int $remainingMinor,
    ): int {
        if ($rule->lineType === CommercialWaterfallLineType::Residual) {
            return $remainingMinor;
        }

        $amountMinor = $rule->fixedAmountMinor
            ?? intdiv($allocationBaseMinor * (int) $rule->basisPoints, 10_000);

        if ($rule->minimumAmountMinor !== null) {
            $amountMinor = max($amountMinor, $rule->minimumAmountMinor);
        }

        if ($rule->maximumAmountMinor !== null) {
            $amountMinor = min($amountMinor, $rule->maximumAmountMinor);
        }

        return $amountMinor;
    }
}
