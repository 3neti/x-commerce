<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialWaterfallInputData
{
    public function __construct(
        public string $sourceCommercialEventReference,
        public int $allocationBaseMinor,
    ) {
        if (trim($this->sourceCommercialEventReference) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall source event reference is required.');
        }

        if ($this->allocationBaseMinor < 0) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall allocation base cannot be negative.');
        }
    }

    /**
     * @return array{source_commercial_event_reference:string, allocation_base_minor:int}
     */
    public function toArray(): array
    {
        return [
            'source_commercial_event_reference' => $this->sourceCommercialEventReference,
            'allocation_base_minor' => $this->allocationBaseMinor,
        ];
    }
}
