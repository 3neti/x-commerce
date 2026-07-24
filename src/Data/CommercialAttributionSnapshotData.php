<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialAttributionSnapshotData
{
    /**
     * @param  array<string, string>  $participants
     */
    public function __construct(
        public string $reference,
        public int $version,
        public array $participants = [],
    ) {
        if (trim($this->reference) === '' || $this->version < 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial attribution reference and positive version are required.');
        }

        foreach ($this->participants as $role => $participantReference) {
            if (trim((string) $role) === '' || trim($participantReference) === '') {
                throw new CommercialWaterfallInvariantViolation('Commercial attribution roles and participant references are required.');
            }
        }
    }

    /**
     * @return array{reference:string, version:int, participants:array<string, string>}
     */
    public function toArray(): array
    {
        $participants = $this->participants;
        ksort($participants);

        return [
            'reference' => $this->reference,
            'version' => $this->version,
            'participants' => $participants,
        ];
    }
}
