<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Services;

use JsonException;
use LBHurtado\XCommerce\Data\CommercialQuoteData;
use LBHurtado\XCommerce\Data\CommercialSaleSnapshotData;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final class DeterministicCommercialSaleFactory
{
    /**
     * @throws JsonException
     */
    public function accept(
        CommercialQuoteData $quote,
        string $acceptanceEventReference,
        string $buyerReference,
        string $acceptedAt,
    ): CommercialSaleSnapshotData {
        foreach ([
            'acceptance event reference' => $acceptanceEventReference,
            'buyer reference' => $buyerReference,
            'acceptance timestamp' => $acceptedAt,
        ] as $field => $value) {
            if (trim($value) === '') {
                throw new CommercialWaterfallInvariantViolation("Commercial sale {$field} is required.");
            }
        }

        $snapshot = [
            'acceptance_event_reference' => $acceptanceEventReference,
            'buyer_reference' => $buyerReference,
            'accepted_at' => $acceptedAt,
            'quote_snapshot' => $quote->toArray(),
        ];

        return new CommercialSaleSnapshotData(
            reference: 'commercial-sale:'.hash(
                'sha256',
                json_encode($snapshot, JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES),
            ),
            acceptanceEventReference: $acceptanceEventReference,
            buyerReference: $buyerReference,
            acceptedAt: $acceptedAt,
            quoteSnapshot: $quote,
        );
    }
}
