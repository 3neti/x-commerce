<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Tests\Unit\CommercialCatalog;

use LBHurtado\XCommerce\Data\CommercialAttributionSnapshotData;
use LBHurtado\XCommerce\Data\CommercialCatalogData;
use LBHurtado\XCommerce\Data\CommercialQuoteLineInputData;
use LBHurtado\XCommerce\Data\CommercialWaterfallPolicyData;
use LBHurtado\XCommerce\Data\CommercialWaterfallRuleData;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;
use LBHurtado\XCommerce\Services\DeterministicCommercialQuoteBuilder;
use LBHurtado\XCommerce\Services\DeterministicCommercialSaleFactory;
use LBHurtado\XCommerce\Services\DeterministicCommercialWaterfallCalculator;
use LBHurtado\XCommerce\Tests\TestCase;

final class CommercialCatalogQuoteTest extends TestCase
{
    public function test_pay_code_catalog_is_the_canonical_rationalized_price_source(): void
    {
        $catalog = $this->catalog();

        $this->assertSame(1_500, $catalog->item('cash.amount')->unitPriceMinor);
        $this->assertSame(1_800, $catalog->item('inputs.fields.kyc')->unitPriceMinor);
        $this->assertSame(120, $catalog->item('feedback.mobile')->unitPriceMinor);
        $this->assertSame(5_000, $catalog->item('rider.url')->unitPriceMinor);
        $this->assertTrue($catalog->item('cash.validation.location')->deprecated);
    }

    public function test_quote_snapshots_catalog_waterfall_attribution_lines_and_allocation_plan(): void
    {
        $quote = $this->builder()->build(
            sourceCommercialEventReference: 'pay-code:PC-123:generation:v1',
            catalog: $this->catalog(),
            waterfallPolicy: $this->residualPolicy(),
            attribution: $this->attribution(),
            lineInputs: [
                new CommercialQuoteLineInputData(
                    catalogItemReference: 'cash.amount',
                    sourceInstructionReference: 'instruction:cash.amount',
                ),
                new CommercialQuoteLineInputData(
                    catalogItemReference: 'inputs.fields.name',
                    quantity: 2,
                    sourceInstructionReference: 'instruction:inputs.fields.name',
                ),
            ],
        );

        $this->assertSame(1_560, $quote->totalPriceMinor);
        $this->assertSame(1_560, $quote->allocationPlan->totalAllocatedMinor());
        $this->assertSame(1_560, $quote->allocationPlan->residualMinor());
        $this->assertSame(1, $quote->catalogSnapshot->version);
        $this->assertSame(1, $quote->waterfallPolicySnapshot->version);
        $this->assertSame('partner:approved-42', $quote->attributionSnapshot->participants['originator']);
        $this->assertStringStartsWith('commercial-quote:', $quote->reference);
    }

    public function test_identical_quote_inputs_produce_an_identical_reference_and_snapshot(): void
    {
        $arguments = [
            'sourceCommercialEventReference' => 'pay-code:PC-123:generation:v1',
            'catalog' => $this->catalog(),
            'waterfallPolicy' => $this->residualPolicy(),
            'attribution' => $this->attribution(),
            'lineInputs' => [new CommercialQuoteLineInputData('cash.amount')],
        ];

        $first = $this->builder()->build(...$arguments);
        $second = $this->builder()->build(...$arguments);

        $this->assertSame($first->reference, $second->reference);
        $this->assertSame($first->toArray(), $second->toArray());
    }

    public function test_catalog_price_changes_require_a_new_version_to_change_the_quote_reference(): void
    {
        $catalogSnapshot = $this->catalog()->toArray();
        $catalogSnapshot['version'] = 2;
        $catalogSnapshot['items'] = array_column(
            $catalogSnapshot['items'],
            null,
            'reference',
        );
        $catalogSnapshot['items']['cash.amount']['unit_price_minor'] = 1_600;

        $first = $this->builder()->build(
            'pay-code:PC-123:generation:v1',
            $this->catalog(),
            $this->residualPolicy(),
            $this->attribution(),
            [new CommercialQuoteLineInputData('cash.amount')],
        );
        $second = $this->builder()->build(
            'pay-code:PC-123:generation:v1',
            CommercialCatalogData::fromArray($catalogSnapshot),
            $this->residualPolicy(),
            $this->attribution(),
            [new CommercialQuoteLineInputData('cash.amount')],
        );

        $this->assertNotSame($first->reference, $second->reference);
        $this->assertSame(1_500, $first->totalPriceMinor);
        $this->assertSame(1_600, $second->totalPriceMinor);
    }

    public function test_deprecated_items_fail_closed_instead_of_becoming_zero_price_sales(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('Deprecated commercial catalog item');

        $this->builder()->build(
            'pay-code:PC-123:generation:v1',
            $this->catalog(),
            $this->residualPolicy(),
            $this->attribution(),
            [new CommercialQuoteLineInputData('cash.validation.location')],
        );
    }

    public function test_accepting_a_quote_freezes_the_buyer_catalog_waterfall_and_attribution_snapshots(): void
    {
        $quote = $this->builder()->build(
            'pay-code:PC-123:generation:v1',
            $this->catalog(),
            $this->residualPolicy(),
            $this->attribution(),
            [new CommercialQuoteLineInputData('cash.amount')],
        );
        $factory = new DeterministicCommercialSaleFactory;

        $first = $factory->accept(
            quote: $quote,
            acceptanceEventReference: 'pay-code:PC-123:generated:v1',
            buyerReference: 'principal:account:issuer-5',
            acceptedAt: '2026-07-25T10:00:00+08:00',
        );
        $replay = $factory->accept(
            quote: $quote,
            acceptanceEventReference: 'pay-code:PC-123:generated:v1',
            buyerReference: 'principal:account:issuer-5',
            acceptedAt: '2026-07-25T10:00:00+08:00',
        );

        $this->assertSame($first->reference, $replay->reference);
        $this->assertSame($first->toArray(), $replay->toArray());
        $this->assertSame($quote->reference, $first->quoteSnapshot->reference);
        $this->assertSame(
            'partner:approved-42',
            $first->quoteSnapshot->attributionSnapshot->participants['originator'],
        );
    }

    private function builder(): DeterministicCommercialQuoteBuilder
    {
        return new DeterministicCommercialQuoteBuilder(
            new DeterministicCommercialWaterfallCalculator,
        );
    }

    private function catalog(): CommercialCatalogData
    {
        $config = require $this->packageRoot('config/x-commerce.php');

        return CommercialCatalogData::fromArray($config['catalogs']['pay_code']);
    }

    private function residualPolicy(): CommercialWaterfallPolicyData
    {
        return new CommercialWaterfallPolicyData(
            reference: 'pay-code-commercial-clearing',
            version: 1,
            currency: 'PHP',
            rules: [
                new CommercialWaterfallRuleData(
                    reference: 'commercial-clearing-residual',
                    sequence: 10,
                    lineType: CommercialWaterfallLineType::Residual,
                    category: 'commercial_clearing',
                    recipientReference: 'commercial-clearing:pay-code',
                    fixedAmountMinor: null,
                ),
            ],
        );
    }

    private function attribution(): CommercialAttributionSnapshotData
    {
        return new CommercialAttributionSnapshotData(
            reference: 'attribution:issuer-5:pay-code',
            version: 1,
            participants: [
                'originator' => 'partner:approved-42',
                'seller' => 'operator:odti',
            ],
        );
    }
}
