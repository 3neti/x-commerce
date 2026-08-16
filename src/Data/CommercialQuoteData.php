<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

final readonly class CommercialQuoteData
{
    /**
     * @param  list<CommercialQuoteLineData>  $lines
     */
    public function __construct(
        public string $reference,
        public string $sourceCommercialEventReference,
        public CommercialCatalogData $catalogSnapshot,
        public CommercialWaterfallPolicyData $waterfallPolicySnapshot,
        public CommercialAttributionSnapshotData $attributionSnapshot,
        public array $lines,
        public int $totalPriceMinor,
        public string $currency,
        public CommercialAllocationPlanData $allocationPlan,
        public ?CommercialOfferingData $offeringSnapshot = null,
        public ?CommercialComponentEconomicsSetData $componentEconomicsSnapshot = null,
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        $snapshot = [
            'reference' => $this->reference,
            'source_commercial_event_reference' => $this->sourceCommercialEventReference,
            'catalog_snapshot' => $this->catalogSnapshot->toArray(),
            'waterfall_policy_snapshot' => $this->waterfallPolicySnapshot->toArray(),
            'attribution_snapshot' => $this->attributionSnapshot->toArray(),
            'lines' => array_map(
                static fn (CommercialQuoteLineData $line): array => $line->toArray(),
                $this->lines,
            ),
            'total_price_minor' => $this->totalPriceMinor,
            'currency' => $this->currency,
            'allocation_plan' => $this->allocationPlan->toArray(),
        ];

        if ($this->offeringSnapshot !== null) {
            $snapshot['offering_snapshot'] = $this->offeringSnapshot->toArray();
        }

        if ($this->componentEconomicsSnapshot !== null) {
            $snapshot['component_economics_snapshot'] = $this->componentEconomicsSnapshot->toArray();
        }

        return $snapshot;
    }
}
