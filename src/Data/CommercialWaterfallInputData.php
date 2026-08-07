<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialWaterfallInputData
{
    /**
     * @param  array<string, string>  $participants
     */
    public function __construct(
        public string $sourceCommercialEventReference,
        public int $allocationBaseMinor,
        public array $participants = [],
    ) {
        if (trim($this->sourceCommercialEventReference) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall source event reference is required.');
        }

        if ($this->allocationBaseMinor < 0) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall allocation base cannot be negative.');
        }

        foreach ($this->participants as $role => $participantReference) {
            if (trim((string) $role) === '' || trim($participantReference) === '') {
                throw new CommercialWaterfallInvariantViolation('Commercial waterfall participant roles and references are required.');
            }
        }
    }

    /**
     * @return array{source_commercial_event_reference:string, allocation_base_minor:int, participants:array<string, string>}
     */
    public function toArray(): array
    {
        return [
            'source_commercial_event_reference' => $this->sourceCommercialEventReference,
            'allocation_base_minor' => $this->allocationBaseMinor,
            'participants' => $this->participants,
        ];
    }
}
