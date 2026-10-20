<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Services;

use Closure;
use JsonException;
use LBHurtado\XCommerce\Data\CommercialCatalogData;
use LBHurtado\XCommerce\Data\CommercialEstimateData;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final class CommercialCatalogEstimateService
{
    /**
     * @param  (Closure(string):mixed)|null  $catalogResolver
     */
    public function __construct(private readonly ?Closure $catalogResolver = null) {}

    /**
     * @param  array{catalog_reference?:string, currency?:string, lines?:list<array{reference:string, quantity?:int}>}  $input
     *
     * @throws JsonException
     */
    public function estimate(array $input): CommercialEstimateData
    {
        $catalogReference = (string) ($input['catalog_reference'] ?? 'pay_code');
        $configured = ($this->catalogResolver ?? static fn (string $key): mixed => config($key))(
            "x-commerce.catalogs.{$catalogReference}",
        );

        if (! is_array($configured)) {
            throw new CommercialWaterfallInvariantViolation("Commercial catalog [{$catalogReference}] is not available.");
        }

        $catalog = CommercialCatalogData::fromArray([
            ...$configured,
            'reference' => $configured['reference'] ?? $catalogReference,
            'currency' => strtoupper((string) ($configured['currency'] ?? ($input['currency'] ?? 'PHP'))),
        ]);
        $requestedCurrency = strtoupper((string) ($input['currency'] ?? $catalog->currency));

        if ($requestedCurrency !== $catalog->currency) {
            throw new CommercialWaterfallInvariantViolation('Commercial quote currency must match the selected catalog.');
        }
        $lines = [];
        $total = 0;
        $totalExpectedProviderCost = 0;

        foreach ((array) ($input['lines'] ?? []) as $line) {
            if (! is_array($line)) {
                throw new CommercialWaterfallInvariantViolation('Commercial quote lines must be arrays.');
            }

            $reference = (string) ($line['reference'] ?? '');
            $quantity = (int) ($line['quantity'] ?? 1);

            if ($quantity < 1) {
                throw new CommercialWaterfallInvariantViolation('Commercial quote line quantity must be positive.');
            }

            $item = $catalog->item($reference);
            if ($item->deprecated) {
                throw new CommercialWaterfallInvariantViolation("Deprecated commercial catalog item [{$reference}] cannot be quoted.");
            }

            $lineTotal = $item->unitPriceMinor * $quantity;
            $lineExpectedProviderCost = $item->expectedProviderCostMinor * $quantity;
            $total += $lineTotal;
            $totalExpectedProviderCost += $lineExpectedProviderCost;
            $lines[] = [
                'reference' => $item->reference,
                'label' => $item->label,
                'category' => $item->category,
                'quantity' => $quantity,
                'unit_price_minor' => $item->unitPriceMinor,
                'total_price_minor' => $lineTotal,
                'expected_provider_cost_minor' => $item->expectedProviderCostMinor,
                'expected_provider_cost_total_minor' => $lineExpectedProviderCost,
                'expected_provider_cost_basis' => $item->expectedProviderCostBasis,
                'currency' => $item->currency,
            ];
        }

        $snapshot = ['catalog' => $catalog->toArray(), 'lines' => $lines, 'total' => $total];

        return new CommercialEstimateData(
            reference: 'commercial-estimate:'.hash('sha256', json_encode($snapshot, JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES)),
            catalog: $catalog,
            lines: $lines,
            totalPriceMinor: $total,
            totalExpectedProviderCostMinor: $totalExpectedProviderCost,
        );
    }
}
