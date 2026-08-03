<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

final readonly class CommercialSaleSnapshotData
{
    public function __construct(
        public string $reference,
        public string $acceptanceEventReference,
        public string $buyerReference,
        public string $acceptedAt,
        public CommercialQuoteData $quoteSnapshot,
        public ?CommercialAccountingContextData $accountingContext = null,
    ) {}

    /**
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        $snapshot = [
            'reference' => $this->reference,
            'acceptance_event_reference' => $this->acceptanceEventReference,
            'buyer_reference' => $this->buyerReference,
            'accepted_at' => $this->acceptedAt,
            'quote_snapshot' => $this->quoteSnapshot->toArray(),
        ];

        if ($this->accountingContext !== null) {
            $snapshot['accounting_context'] = $this->accountingContext->toArray();
        }

        return $snapshot;
    }
}
