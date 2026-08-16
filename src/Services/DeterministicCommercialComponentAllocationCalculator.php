<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Services;

use LBHurtado\XCommerce\Contracts\CommercialComponentAllocationCalculatorContract;
use LBHurtado\XCommerce\Data\CommercialAllocationLineData;
use LBHurtado\XCommerce\Data\CommercialAllocationPlanData;
use LBHurtado\XCommerce\Data\CommercialCatalogData;
use LBHurtado\XCommerce\Data\CommercialComponentAllocationRuleData;
use LBHurtado\XCommerce\Data\CommercialComponentEconomicsData;
use LBHurtado\XCommerce\Data\CommercialComponentEconomicsSetData;
use LBHurtado\XCommerce\Data\CommercialQuoteLineData;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final class DeterministicCommercialComponentAllocationCalculator implements CommercialComponentAllocationCalculatorContract
{
    public function calculate(
        string $sourceCommercialEventReference,
        CommercialCatalogData $catalog,
        CommercialComponentEconomicsSetData $componentEconomics,
        array $quoteLines,
    ): CommercialAllocationPlanData {
        if (trim($sourceCommercialEventReference) === '') {
            throw new CommercialWaterfallInvariantViolation('Component allocation source event reference is required.');
        }

        $componentEconomics->assertMatchesCatalog($catalog);
        $components = [];
        foreach ($componentEconomics->components as $component) {
            $components[$component->componentReference] = $component;
        }

        $allocationBaseMinor = 0;
        $sequence = 0;
        $lines = [];

        foreach ($quoteLines as $quoteLine) {
            if (! $quoteLine instanceof CommercialQuoteLineData) {
                throw new CommercialWaterfallInvariantViolation('Component allocations require canonical Commercial quote lines.');
            }

            $component = $components[$quoteLine->catalogItemReference] ?? null;
            if (! $component instanceof CommercialComponentEconomicsData) {
                throw new CommercialWaterfallInvariantViolation("Component economics [{$quoteLine->catalogItemReference}] is missing.");
            }

            $allocationBaseMinor += $quoteLine->totalPriceMinor;
            if (! $component->isBillable()) {
                if ($quoteLine->totalPriceMinor !== 0) {
                    throw new CommercialWaterfallInvariantViolation('A priced quote line cannot use non-billable Component Economics.');
                }

                continue;
            }

            $schedule = $component->allocationSchedule;
            $schedule->assertConserves($quoteLine->unitPriceMinor);
            $remainingUnitMinor = $quoteLine->unitPriceMinor;

            foreach ($schedule->orderedRules() as $rule) {
                $unitAmountMinor = $this->unitAmount($rule, $quoteLine->unitPriceMinor, $remainingUnitMinor);
                if ($unitAmountMinor > $remainingUnitMinor) {
                    throw new CommercialWaterfallInvariantViolation('Component allocations exceed the quoted unit price.');
                }

                $remainingUnitMinor -= $unitAmountMinor;
                $sequence++;
                $lines[] = new CommercialAllocationLineData(
                    policyRuleReference: $component->componentReference.'::'.$rule->reference,
                    sequence: $sequence,
                    lineType: CommercialWaterfallLineType::Allocation,
                    category: $rule->category,
                    recipientReference: $rule->recipientReference,
                    amountMinor: $unitAmountMinor * $quoteLine->quantity,
                    currency: $schedule->currency,
                    componentReference: $component->componentReference,
                    componentScheduleReference: $schedule->reference,
                    componentScheduleVersion: $schedule->version,
                    componentRuleReference: $rule->reference,
                    componentRuleLineType: $rule->lineType,
                    destinationKind: $rule->destinationKind,
                    participantRole: $rule->participantRole,
                    agreementReference: $rule->agreementReference,
                    designationReference: $rule->designationReference,
                    taxPolicyReference: $rule->taxPolicyReference,
                    unitAmountMinor: $unitAmountMinor,
                    quantity: $quoteLine->quantity,
                );
            }

            if ($remainingUnitMinor !== 0) {
                throw new CommercialWaterfallInvariantViolation('Component allocations do not reconcile to the quoted unit price.');
            }
        }

        $plan = new CommercialAllocationPlanData(
            sourceCommercialEventReference: $sourceCommercialEventReference,
            policyReference: $componentEconomics->reference,
            policyVersion: $componentEconomics->version,
            currency: $componentEconomics->currency,
            allocationBaseMinor: $allocationBaseMinor,
            lines: $lines,
        );

        if ($plan->totalAllocatedMinor() !== $allocationBaseMinor) {
            throw new CommercialWaterfallInvariantViolation('Component allocations do not reconcile to the Commercial quote total.');
        }

        return $plan;
    }

    private function unitAmount(
        CommercialComponentAllocationRuleData $rule,
        int $unitPriceMinor,
        int $remainingUnitMinor,
    ): int {
        return $rule->lineType === CommercialWaterfallLineType::Residual
            ? $remainingUnitMinor
            : ($rule->fixedAmountMinor ?? intdiv($unitPriceMinor * (int) $rule->basisPoints, 10_000));
    }
}
