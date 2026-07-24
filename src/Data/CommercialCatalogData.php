<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialCatalogData
{
    /**
     * @param  list<CommercialCatalogItemData>  $items
     */
    public function __construct(
        public string $reference,
        public int $version,
        public string $currency,
        public array $items,
    ) {
        if (trim($this->reference) === '' || $this->version < 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial catalog reference and positive version are required.');
        }

        if (preg_match('/^[A-Z]{3}$/', $this->currency) !== 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial catalog currency must be an uppercase ISO 4217 code.');
        }

        $references = [];

        foreach ($this->items as $item) {
            if (! $item instanceof CommercialCatalogItemData) {
                throw new CommercialWaterfallInvariantViolation('Commercial catalog items must use the public item data contract.');
            }

            if ($item->currency !== $this->currency) {
                throw new CommercialWaterfallInvariantViolation('Commercial catalog item currency must match its catalog.');
            }

            $references[] = $item->reference;
        }

        if (count($references) !== count(array_unique($references))) {
            throw new CommercialWaterfallInvariantViolation('Commercial catalog item references must be unique.');
        }
    }

    public function item(string $reference): CommercialCatalogItemData
    {
        foreach ($this->items as $item) {
            if ($item->reference === $reference) {
                return $item;
            }
        }

        throw new CommercialWaterfallInvariantViolation("Commercial catalog item [{$reference}] is not available.");
    }

    /**
     * @return array{
     *     reference:string,
     *     version:int,
     *     currency:string,
     *     items:list<array<string, bool|int|string>>
     * }
     */
    public function toArray(): array
    {
        $items = $this->items;

        usort(
            $items,
            static fn (CommercialCatalogItemData $left, CommercialCatalogItemData $right): int => $left->reference <=> $right->reference,
        );

        return [
            'reference' => $this->reference,
            'version' => $this->version,
            'currency' => $this->currency,
            'items' => array_map(
                static fn (CommercialCatalogItemData $item): array => $item->toArray(),
                $items,
            ),
        ];
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    public static function fromArray(array $payload): self
    {
        $currency = (string) ($payload['currency'] ?? '');
        $items = [];

        foreach ((array) ($payload['items'] ?? []) as $reference => $item) {
            if (! is_array($item)) {
                throw new CommercialWaterfallInvariantViolation('Commercial catalog item payloads must be arrays.');
            }

            $items[] = CommercialCatalogItemData::fromArray(
                $item,
                is_string($reference) ? $reference : null,
                $currency,
            );
        }

        return new self(
            reference: (string) ($payload['reference'] ?? ''),
            version: (int) ($payload['version'] ?? 0),
            currency: $currency,
            items: $items,
        );
    }
}
