<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Services;

use JsonException;
use LBHurtado\XCommerce\Contracts\CommercialWaterfallCalculatorContract;
use LBHurtado\XCommerce\Data\CommercialAttributionSnapshotData;
use LBHurtado\XCommerce\Data\CommercialCatalogData;
use LBHurtado\XCommerce\Data\CommercialOfferingData;
use LBHurtado\XCommerce\Data\CommercialQuoteData;
use LBHurtado\XCommerce\Data\CommercialQuoteLineData;
use LBHurtado\XCommerce\Data\CommercialQuoteLineInputData;
use LBHurtado\XCommerce\Data\CommercialWaterfallInputData;
use LBHurtado\XCommerce\Data\CommercialWaterfallPolicyData;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final class DeterministicCommercialQuoteBuilder
{
    public function __construct(
        private readonly CommercialWaterfallCalculatorContract $waterfallCalculator,
    ) {}

    /**
     * @param  list<CommercialQuoteLineInputData>  $lineInputs
     *
     * @throws JsonException
     */
    public function build(
        string $sourceCommercialEventReference,
        CommercialCatalogData $catalog,
        CommercialWaterfallPolicyData $waterfallPolicy,
        CommercialAttributionSnapshotData $attribution,
        array $lineInputs,
        ?CommercialOfferingData $offering = null,
    ): CommercialQuoteData {
        if (trim($sourceCommercialEventReference) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial quote source event reference is required.');
        }

        if ($catalog->currency !== $waterfallPolicy->currency) {
            throw new CommercialWaterfallInvariantViolation('Commercial quote catalog and waterfall currencies must match.');
        }

        if ($offering !== null
            && ($offering->catalog->toArray() !== $catalog->toArray()
                || $offering->waterfallPolicy->toArray() !== $waterfallPolicy->toArray())) {
            throw new CommercialWaterfallInvariantViolation('Commercial quote catalog and Waterfall must match the Commercial Offering snapshot.');
        }

        $lines = [];
        $totalPriceMinor = 0;

        foreach ($lineInputs as $lineInput) {
            if (! $lineInput instanceof CommercialQuoteLineInputData) {
                throw new CommercialWaterfallInvariantViolation('Commercial quote lines must use the public input data contract.');
            }

            $item = $catalog->item($lineInput->catalogItemReference);

            if ($item->deprecated) {
                throw new CommercialWaterfallInvariantViolation(
                    "Deprecated commercial catalog item [{$item->reference}] cannot be quoted."
                );
            }

            $lineTotalMinor = $item->unitPriceMinor * $lineInput->quantity;
            $totalPriceMinor += $lineTotalMinor;

            $lines[] = new CommercialQuoteLineData(
                catalogItemReference: $item->reference,
                label: $item->label,
                category: $item->category,
                quantity: $lineInput->quantity,
                unitPriceMinor: $item->unitPriceMinor,
                totalPriceMinor: $lineTotalMinor,
                currency: $catalog->currency,
                sourceInstructionReference: $lineInput->sourceInstructionReference,
            );
        }

        $allocationPlan = $this->waterfallCalculator->calculate(
            $waterfallPolicy,
            new CommercialWaterfallInputData(
                sourceCommercialEventReference: $sourceCommercialEventReference,
                allocationBaseMinor: $totalPriceMinor,
                participants: $attribution->participants,
            ),
        );

        $snapshot = [
            'source_commercial_event_reference' => $sourceCommercialEventReference,
            'catalog_snapshot' => $catalog->toArray(),
            'waterfall_policy_snapshot' => $waterfallPolicy->toArray(),
            'attribution_snapshot' => $attribution->toArray(),
            'lines' => array_map(
                static fn (CommercialQuoteLineData $line): array => $line->toArray(),
                $lines,
            ),
            'total_price_minor' => $totalPriceMinor,
            'currency' => $catalog->currency,
            'allocation_plan' => $allocationPlan->toArray(),
        ];

        if ($offering !== null) {
            $snapshot['offering_snapshot'] = $offering->toArray();
        }

        return new CommercialQuoteData(
            reference: 'commercial-quote:'.hash(
                'sha256',
                json_encode($snapshot, JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES),
            ),
            sourceCommercialEventReference: $sourceCommercialEventReference,
            catalogSnapshot: $catalog,
            waterfallPolicySnapshot: $waterfallPolicy,
            attributionSnapshot: $attribution,
            lines: $lines,
            totalPriceMinor: $totalPriceMinor,
            currency: $catalog->currency,
            allocationPlan: $allocationPlan,
            offeringSnapshot: $offering,
        );
    }
}
