<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Tests\Unit\CommercialCatalog;

use LBHurtado\XCommerce\Data\CommercialAllocationLineData;
use LBHurtado\XCommerce\Data\CommercialAllocationPlanData;
use LBHurtado\XCommerce\Data\CommercialTaxProfileData;
use LBHurtado\XCommerce\Enums\CommercialAllocationDestinationKind;
use LBHurtado\XCommerce\Enums\CommercialTaxCalculationBasis;
use LBHurtado\XCommerce\Enums\CommercialTaxCollectionMethod;
use LBHurtado\XCommerce\Enums\CommercialTaxRoundingMethod;
use LBHurtado\XCommerce\Enums\CommercialTaxRoundingScope;
use LBHurtado\XCommerce\Enums\CommercialTaxType;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;
use LBHurtado\XCommerce\Services\DeterministicCommercialTaxAllocationCalculator;
use LBHurtado\XCommerce\Tests\TestCase;

final class CommercialTaxAllocationTest extends TestCase
{
    public function test_it_splits_gross_external_value_into_net_and_tax_payable_exactly(): void
    {
        $result = (new DeterministicCommercialTaxAllocationCalculator)->calculate(
            $this->plan(amountMinor: 10_005),
            ['tax-profile:3neti:ph:v1' => $this->profile(rateBasisPoints: 200)],
        );

        $this->assertSame(10_005, $result->totalAllocatedMinor());
        $this->assertCount(2, $result->lines);
        $this->assertSame(9_805, $result->lines[0]->amountMinor);
        $this->assertSame('service_provider_payable', $result->lines[0]->category);
        $this->assertSame(200, $result->lines[1]->amountMinor);
        $this->assertSame('tax_payable', $result->lines[1]->category);
        $this->assertSame(CommercialAllocationDestinationKind::TaxAuthority, $result->lines[1]->destinationKind);
        $this->assertSame('tax-authority:ph:bir', $result->lines[1]->recipientReference);
        $this->assertSame('component::recipient', $result->lines[0]->parentPolicyRuleReference);
        $this->assertSame(10_005, $result->lines[1]->grossAmountMinor);
        $this->assertSame($this->profile()->snapshotHash(), $result->lines[1]->taxProfileSnapshotHash);
    }

    public function test_it_rounds_half_up_in_minor_units_and_retains_zero_centavo_tax_lines(): void
    {
        $calculator = new DeterministicCommercialTaxAllocationCalculator;
        $profile = $this->profile(rateBasisPoints: 5_000);

        $oneCentavo = $calculator->calculate($this->plan(amountMinor: 1), [$profile->reference => $profile]);
        $twoCentavos = $calculator->calculate($this->plan(amountMinor: 2), [$profile->reference => $profile]);

        $this->assertSame([0, 1], array_column($oneCentavo->lines, 'amountMinor'));
        $this->assertSame([1, 1], array_column($twoCentavos->lines, 'amountMinor'));
    }

    public function test_it_leaves_untaxed_lines_unchanged(): void
    {
        $plan = $this->plan(amountMinor: 300, taxPolicyReference: null);
        $result = (new DeterministicCommercialTaxAllocationCalculator)->calculate($plan, []);

        $this->assertSame($plan->toArray(), $result->toArray());
    }

    public function test_it_fails_closed_for_missing_profiles_or_non_external_allocations(): void
    {
        $calculator = new DeterministicCommercialTaxAllocationCalculator;

        try {
            $calculator->calculate($this->plan(), []);
            $this->fail('Missing governed profile should fail.');
        } catch (CommercialWaterfallInvariantViolation $exception) {
            $this->assertStringContainsString('is required', $exception->getMessage());
        }

        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('external recipient');

        $calculator->calculate(
            $this->plan(destinationKind: CommercialAllocationDestinationKind::InternalOwner),
            ['tax-profile:3neti:ph:v1' => $this->profile()],
        );
    }

    private function plan(
        int $amountMinor = 300,
        ?string $taxPolicyReference = 'tax-profile:3neti:ph:v1',
        CommercialAllocationDestinationKind $destinationKind = CommercialAllocationDestinationKind::ExternalRecipient,
    ): CommercialAllocationPlanData {
        return new CommercialAllocationPlanData(
            sourceCommercialEventReference: 'commercial-event:tax-test',
            policyReference: 'economics:tax-test',
            policyVersion: 1,
            currency: 'PHP',
            allocationBaseMinor: $amountMinor,
            lines: [new CommercialAllocationLineData(
                policyRuleReference: 'component::recipient',
                sequence: 1,
                lineType: CommercialWaterfallLineType::Allocation,
                category: 'service_provider_payable',
                recipientReference: 'counterparty:3neti',
                amountMinor: $amountMinor,
                currency: 'PHP',
                componentReference: 'inputs.fields.selfie',
                componentScheduleReference: 'schedule:selfie',
                componentScheduleVersion: 1,
                componentRuleReference: 'recipient',
                componentRuleLineType: CommercialWaterfallLineType::Allocation,
                destinationKind: $destinationKind,
                participantRole: 'service_aggregator',
                agreementReference: $destinationKind === CommercialAllocationDestinationKind::ExternalRecipient
                    ? 'agreement:institution-3neti:v1'
                    : null,
                designationReference: $destinationKind === CommercialAllocationDestinationKind::ExternalRecipient
                    ? 'designation:3neti:v1'
                    : null,
                taxPolicyReference: $taxPolicyReference,
                unitAmountMinor: $amountMinor,
                quantity: 1,
            )],
        );
    }

    private function profile(int $rateBasisPoints = 200): CommercialTaxProfileData
    {
        return new CommercialTaxProfileData(
            reference: 'tax-profile:3neti:ph:v1',
            version: 1,
            jurisdiction: 'PH',
            currency: 'PHP',
            taxType: CommercialTaxType::Withholding,
            calculationBasis: CommercialTaxCalculationBasis::GrossExternalAllocation,
            rateBasisPoints: $rateBasisPoints,
            roundingMethod: CommercialTaxRoundingMethod::HalfUpMinor,
            roundingScope: CommercialTaxRoundingScope::LineTotal,
            collectionMethod: CommercialTaxCollectionMethod::DeductFromRecipient,
            taxRecipientReference: 'tax-authority:ph:bir',
            effectiveFrom: '2026-01-01T00:00:00+00:00',
        );
    }
}
