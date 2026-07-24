<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialQuoteLineInputData
{
    public function __construct(
        public string $catalogItemReference,
        public int $quantity = 1,
        public ?string $sourceInstructionReference = null,
    ) {
        if (trim($this->catalogItemReference) === '' || $this->quantity < 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial quote line requires an item reference and positive quantity.');
        }
    }
}
