<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Services;

use LBHurtado\XCommerce\Contracts\CommercialWaterfallCalculatorContract;
use LBHurtado\XCommerce\Data\CommercialAllocationLineData;
use LBHurtado\XCommerce\Data\CommercialAllocationPlanData;
use LBHurtado\XCommerce\Data\CommercialWaterfallInputData;
use LBHurtado\XCommerce\Data\CommercialWaterfallPolicyData;
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
            $amountMinor = $rule->lineType === CommercialWaterfallLineType::Residual
                ? $remainingMinor
                : (int) $rule->fixedAmountMinor;

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
                recipientReference: $rule->recipientReference,
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
}
