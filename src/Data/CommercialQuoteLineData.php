<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

final readonly class CommercialQuoteLineData
{
    public function __construct(
        public string $catalogItemReference,
        public string $label,
        public string $category,
        public int $quantity,
        public int $unitPriceMinor,
        public int $totalPriceMinor,
        public string $currency,
        public ?string $sourceInstructionReference = null,
    ) {}

    /**
     * @return array{
     *     catalog_item_reference:string,
     *     label:string,
     *     category:string,
     *     quantity:int,
     *     unit_price_minor:int,
     *     total_price_minor:int,
     *     currency:string,
     *     source_instruction_reference:string|null
     * }
     */
    public function toArray(): array
    {
        return [
            'catalog_item_reference' => $this->catalogItemReference,
            'label' => $this->label,
            'category' => $this->category,
            'quantity' => $this->quantity,
            'unit_price_minor' => $this->unitPriceMinor,
            'total_price_minor' => $this->totalPriceMinor,
            'currency' => $this->currency,
            'source_instruction_reference' => $this->sourceInstructionReference,
        ];
    }
}
