<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Tests\Unit\CommercialCatalog;

use LBHurtado\XCommerce\Services\CommercialCatalogEstimateService;
use LBHurtado\XCommerce\Tests\TestCase;

final class CommercialCatalogEstimateServiceTest extends TestCase
{
    public function test_it_builds_a_deterministic_estimate_from_catalog_line_inputs(): void
    {
        $catalog = [
            'reference' => 'pay-code',
            'version' => 4,
            'currency' => 'PHP',
            'items' => [
                'cash.amount' => [
                    'label' => 'Transaction Fee',
                    'category' => 'base',
                    'unit_price_minor' => 1_500,
                ],
            ],
        ];
        $service = new CommercialCatalogEstimateService(
            static fn (string $key): mixed => str_ends_with($key, 'pay_code') ? $catalog : null,
        );

        $estimate = $service->estimate([
            'catalog_reference' => 'pay_code',
            'currency' => 'PHP',
            'lines' => [['reference' => 'cash.amount', 'quantity' => 2]],
        ]);

        $this->assertSame(3_000, $estimate->totalPriceMinor);
        $this->assertSame(4, $estimate->catalog->version);
        $this->assertSame('PHP', $estimate->toArray()['currency']);
        $this->assertStringStartsWith('commercial-estimate:', $estimate->reference);
    }
}
