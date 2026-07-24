<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialCatalogItemData
{
    public function __construct(
        public string $reference,
        public string $label,
        public string $category,
        public int $unitPriceMinor,
        public string $currency,
        public bool $deprecated = false,
    ) {
        if (trim($this->reference) === '' || trim($this->label) === '' || trim($this->category) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial catalog item identity, label, and category are required.');
        }

        if ($this->unitPriceMinor < 0) {
            throw new CommercialWaterfallInvariantViolation('Commercial catalog item price cannot be negative.');
        }

        if (preg_match('/^[A-Z]{3}$/', $this->currency) !== 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial catalog item currency must be an uppercase ISO 4217 code.');
        }
    }

    /**
     * @return array{
     *     reference:string,
     *     label:string,
     *     category:string,
     *     unit_price_minor:int,
     *     currency:string,
     *     deprecated:bool
     * }
     */
    public function toArray(): array
    {
        return [
            'reference' => $this->reference,
            'label' => $this->label,
            'category' => $this->category,
            'unit_price_minor' => $this->unitPriceMinor,
            'currency' => $this->currency,
            'deprecated' => $this->deprecated,
        ];
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    public static function fromArray(array $payload, ?string $reference = null, ?string $currency = null): self
    {
        return new self(
            reference: $reference ?? (string) ($payload['reference'] ?? ''),
            label: (string) ($payload['label'] ?? ''),
            category: (string) ($payload['category'] ?? ''),
            unitPriceMinor: (int) ($payload['unit_price_minor'] ?? $payload['price'] ?? -1),
            currency: $currency ?? (string) ($payload['currency'] ?? ''),
            deprecated: (bool) ($payload['deprecated'] ?? false),
        );
    }
}
