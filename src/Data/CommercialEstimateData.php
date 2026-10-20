<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

final readonly class CommercialEstimateData
{
    /**
     * @param  list<array{reference:string, label:string, category:string, quantity:int, unit_price_minor:int, total_price_minor:int, expected_provider_cost_minor:int, expected_provider_cost_total_minor:int, expected_provider_cost_basis:string, currency:string}>  $lines
     */
    public function __construct(
        public string $reference,
        public CommercialCatalogData $catalog,
        public array $lines,
        public int $totalPriceMinor,
        public int $totalExpectedProviderCostMinor = 0,
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return [
            'reference' => $this->reference,
            'currency' => $this->catalog->currency,
            'catalog_reference' => $this->catalog->reference,
            'catalog_version' => $this->catalog->version,
            'catalog_snapshot_hash' => hash('sha256', json_encode($this->catalog->toArray(), JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES)),
            'lines' => $this->lines,
            'total_price_minor' => $this->totalPriceMinor,
            'total_expected_provider_cost_minor' => $this->totalExpectedProviderCostMinor,
            'acceptance' => 'protected-by-caller-domain',
        ];
    }
}
