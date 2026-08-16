<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Tests\Unit\CommercialCatalog;

use LBHurtado\XCommerce\Data\CommercialTaxProfileData;
use LBHurtado\XCommerce\Enums\CommercialTaxCalculationBasis;
use LBHurtado\XCommerce\Enums\CommercialTaxCollectionMethod;
use LBHurtado\XCommerce\Enums\CommercialTaxRoundingMethod;
use LBHurtado\XCommerce\Enums\CommercialTaxRoundingScope;
use LBHurtado\XCommerce\Enums\CommercialTaxType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;
use LBHurtado\XCommerce\Tests\TestCase;

final class CommercialTaxProfileTest extends TestCase
{
    public function test_profile_round_trips_with_a_stable_hash(): void
    {
        $profile = $this->profile();
        $roundTrip = CommercialTaxProfileData::fromArray($profile->toArray());

        $this->assertSame($profile->toArray(), $roundTrip->toArray());
        $this->assertSame($profile->snapshotHash(), $roundTrip->snapshotHash());
        $this->assertSame(64, strlen($profile->snapshotHash()));
        $this->assertArrayNotHasKey('tin', $profile->toArray());
    }

    public function test_profile_rejects_invalid_rates_and_effective_ranges(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);

        $this->profile(rateBasisPoints: 0);
    }

    public function test_profile_rejects_an_inverted_effective_range(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);

        $this->profile(effectiveUntil: '2025-12-31T23:59:59+00:00');
    }

    private function profile(
        int $rateBasisPoints = 200,
        ?string $effectiveUntil = null,
    ): CommercialTaxProfileData {
        return new CommercialTaxProfileData(
            reference: 'tax-profile:3neti:ph:withholding:v1',
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
            effectiveUntil: $effectiveUntil,
        );
    }
}
