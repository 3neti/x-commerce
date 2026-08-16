<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Services;

use LBHurtado\XCommerce\Contracts\CommercialTaxAllocationCalculatorContract;
use LBHurtado\XCommerce\Data\CommercialAllocationLineData;
use LBHurtado\XCommerce\Data\CommercialAllocationPlanData;
use LBHurtado\XCommerce\Data\CommercialTaxProfileData;
use LBHurtado\XCommerce\Enums\CommercialAllocationDestinationKind;
use LBHurtado\XCommerce\Enums\CommercialTaxCalculationBasis;
use LBHurtado\XCommerce\Enums\CommercialTaxCollectionMethod;
use LBHurtado\XCommerce\Enums\CommercialTaxRoundingMethod;
use LBHurtado\XCommerce\Enums\CommercialTaxRoundingScope;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final class DeterministicCommercialTaxAllocationCalculator implements CommercialTaxAllocationCalculatorContract
{
    public function calculate(CommercialAllocationPlanData $plan, array $profiles): CommercialAllocationPlanData
    {
        $lines = [];
        $sequence = 0;

        foreach ($plan->lines as $line) {
            if ($line->taxPolicyReference === null) {
                $lines[] = new CommercialAllocationLineData(
                    ...$line->constructorArguments(sequence: ++$sequence),
                );

                continue;
            }

            $profile = $profiles[$line->taxPolicyReference] ?? null;

            if (! $profile instanceof CommercialTaxProfileData) {
                throw new CommercialWaterfallInvariantViolation(
                    "Commercial Tax Profile [{$line->taxPolicyReference}] is required by the allocation plan.",
                );
            }

            $this->assertSupported($line, $profile);
            $taxAmountMinor = intdiv(($line->amountMinor * $profile->rateBasisPoints) + 5_000, 10_000);
            $netAmountMinor = $line->amountMinor - $taxAmountMinor;

            $lines[] = $this->derivedLine(
                source: $line,
                sequence: ++$sequence,
                suffix: 'net',
                category: $line->category,
                recipientReference: $line->recipientReference,
                amountMinor: $netAmountMinor,
                destinationKind: $line->destinationKind,
                profile: $profile,
                preserveRecipientAuthority: true,
            );
            $lines[] = $this->derivedLine(
                source: $line,
                sequence: ++$sequence,
                suffix: 'tax',
                category: 'tax_payable',
                recipientReference: $profile->taxRecipientReference,
                amountMinor: $taxAmountMinor,
                destinationKind: CommercialAllocationDestinationKind::TaxAuthority,
                profile: $profile,
                preserveRecipientAuthority: false,
            );
        }

        $result = new CommercialAllocationPlanData(
            sourceCommercialEventReference: $plan->sourceCommercialEventReference,
            policyReference: $plan->policyReference,
            policyVersion: $plan->policyVersion,
            currency: $plan->currency,
            allocationBaseMinor: $plan->allocationBaseMinor,
            lines: $lines,
        );

        if ($result->totalAllocatedMinor() !== $plan->allocationBaseMinor) {
            throw new CommercialWaterfallInvariantViolation('Tax allocation does not conserve the Commercial allocation plan.');
        }

        return $result;
    }

    private function assertSupported(
        CommercialAllocationLineData $line,
        CommercialTaxProfileData $profile,
    ): void {
        if ($line->destinationKind !== CommercialAllocationDestinationKind::ExternalRecipient) {
            throw new CommercialWaterfallInvariantViolation('Tax withholding may only split an external recipient allocation.');
        }

        if ($line->currency !== $profile->currency) {
            throw new CommercialWaterfallInvariantViolation('Commercial Tax Profile currency must match the allocation currency.');
        }

        if ($profile->calculationBasis !== CommercialTaxCalculationBasis::GrossExternalAllocation
            || $profile->roundingMethod !== CommercialTaxRoundingMethod::HalfUpMinor
            || $profile->roundingScope !== CommercialTaxRoundingScope::LineTotal
            || $profile->collectionMethod !== CommercialTaxCollectionMethod::DeductFromRecipient) {
            throw new CommercialWaterfallInvariantViolation('Commercial Tax Profile uses an unsupported calculation policy.');
        }
    }

    private function derivedLine(
        CommercialAllocationLineData $source,
        int $sequence,
        string $suffix,
        string $category,
        string $recipientReference,
        int $amountMinor,
        ?CommercialAllocationDestinationKind $destinationKind,
        CommercialTaxProfileData $profile,
        bool $preserveRecipientAuthority,
    ): CommercialAllocationLineData {
        return new CommercialAllocationLineData(
            policyRuleReference: $source->policyRuleReference.'::'.$suffix,
            sequence: $sequence,
            lineType: CommercialWaterfallLineType::Allocation,
            category: $category,
            recipientReference: $recipientReference,
            amountMinor: $amountMinor,
            currency: $source->currency,
            componentReference: $source->componentReference,
            componentScheduleReference: $source->componentScheduleReference,
            componentScheduleVersion: $source->componentScheduleVersion,
            componentRuleReference: $source->componentRuleReference.'::'.$suffix,
            componentRuleLineType: CommercialWaterfallLineType::Allocation,
            destinationKind: $destinationKind,
            participantRole: $preserveRecipientAuthority ? $source->participantRole : 'tax_authority',
            agreementReference: $preserveRecipientAuthority ? $source->agreementReference : null,
            designationReference: $preserveRecipientAuthority ? $source->designationReference : null,
            taxPolicyReference: $profile->reference,
            quantity: $source->quantity,
            parentPolicyRuleReference: $source->policyRuleReference,
            grossAmountMinor: $source->amountMinor,
            taxProfileVersion: $profile->version,
            taxProfileSnapshotHash: $profile->snapshotHash(),
        );
    }
}
