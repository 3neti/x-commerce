<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Tests\Unit\CommercialCatalog;

use LBHurtado\XCommerce\Data\CommercialAttributionPolicyData;
use LBHurtado\XCommerce\Data\CommercialAttributionSnapshotData;
use LBHurtado\XCommerce\Data\CommercialCatalogData;
use LBHurtado\XCommerce\Data\CommercialLegalTraceData;
use LBHurtado\XCommerce\Data\CommercialOfferingData;
use LBHurtado\XCommerce\Data\CommercialQuoteLineInputData;
use LBHurtado\XCommerce\Data\CommercialWaterfallPolicyData;
use LBHurtado\XCommerce\Data\CommercialWaterfallRuleData;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Services\DeterministicCommercialQuoteBuilder;
use LBHurtado\XCommerce\Services\DeterministicCommercialWaterfallCalculator;
use LBHurtado\XCommerce\Tests\TestCase;

final class CommercialOfferingTest extends TestCase
{
    public function test_offering_round_trips_with_legal_catalog_waterfall_and_attribution_provenance(): void
    {
        $offering = $this->offering();

        $this->assertSame(
            $offering->toArray(),
            CommercialOfferingData::fromArray($offering->toArray())->toArray(),
        );
        $this->assertSame(64, strlen($offering->snapshotHash()));
        $this->assertSame('06363fb312d9ee88f815fdcdadade55aef35bfd2996169a545055e73a17f61b5', $offering->snapshotHash());
        $this->assertArrayNotHasKey('component_economics', $offering->toArray());
        $this->assertSame('review_required', $offering->legalTrace->decision);
    }

    public function test_quote_and_sale_provenance_include_the_offering_snapshot(): void
    {
        $offering = $this->offering();
        $quote = (new DeterministicCommercialQuoteBuilder(
            new DeterministicCommercialWaterfallCalculator,
        ))->build(
            sourceCommercialEventReference: 'pay-code:PC-42:generation:v1',
            catalog: $offering->catalog,
            waterfallPolicy: $offering->waterfallPolicy,
            attribution: new CommercialAttributionSnapshotData(
                reference: 'attribution:PC-42',
                version: 1,
                participants: ['partner' => 'partner:approved-42'],
            ),
            lineInputs: [new CommercialQuoteLineInputData('cash.amount')],
            offering: $offering,
        );

        $this->assertSame($offering->toArray(), $quote->toArray()['offering_snapshot']);
        $this->assertSame('partner:approved-42', $quote->allocationPlan->lines[0]->recipientReference);
    }

    private function offering(): CommercialOfferingData
    {
        /** @var array{catalogs: array{pay_code: array<string, mixed>}} $config */
        $config = require $this->packageRoot('config/x-commerce.php');

        return new CommercialOfferingData(
            reference: 'commercial-offering:pay-code',
            version: 4,
            catalog: CommercialCatalogData::fromArray($config['catalogs']['pay_code']),
            waterfallPolicy: new CommercialWaterfallPolicyData(
                reference: 'pay-code-waterfall',
                version: 2,
                currency: 'PHP',
                rules: [
                    new CommercialWaterfallRuleData(
                        reference: 'partner-commission',
                        sequence: 10,
                        lineType: CommercialWaterfallLineType::Allocation,
                        category: 'partner_commission',
                        recipientReference: 'participant:partner',
                        fixedAmountMinor: null,
                        basisPoints: 500,
                        participantRole: 'partner',
                    ),
                    new CommercialWaterfallRuleData(
                        reference: 'commercial-residual',
                        sequence: 20,
                        lineType: CommercialWaterfallLineType::Residual,
                        category: 'commercial_revenue',
                        recipientReference: 'operator:x-change',
                        fixedAmountMinor: null,
                    ),
                ],
            ),
            attributionPolicy: new CommercialAttributionPolicyData(
                reference: 'pay-code-attribution',
                version: 1,
                eligibleRoles: ['partner', 'originator'],
            ),
            legalTrace: new CommercialLegalTraceData(
                jurisdiction: 'PH',
                legalEntityReference: 'legal-entity:x-change',
                profile: 'treasury-settlement-ph-v1',
                profileVersion: '2026-08.1',
                decision: 'review_required',
                decisionReferences: ['decision:0003'],
                invariantReferences: ['invariant:13'],
            ),
            effectiveAt: '2026-08-10T00:00:00+08:00',
        );
    }
}
