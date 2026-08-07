<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialLegalTraceData
{
    /**
     * @param  list<string>  $decisionReferences
     * @param  list<string>  $invariantReferences
     * @param  list<string>  $traceReferences
     */
    public function __construct(
        public string $jurisdiction,
        public string $legalEntityReference,
        public string $profile,
        public string $profileVersion,
        public string $decision,
        public array $decisionReferences = [],
        public array $invariantReferences = [],
        public array $traceReferences = [],
    ) {
        foreach ([
            'jurisdiction' => $jurisdiction,
            'legal entity reference' => $legalEntityReference,
            'profile' => $profile,
            'profile version' => $profileVersion,
            'decision' => $decision,
        ] as $name => $value) {
            if (trim($value) === '') {
                throw new CommercialWaterfallInvariantViolation("Commercial legal trace {$name} is required.");
            }
        }

        if (preg_match('/^[A-Z]{2}$/', $jurisdiction) !== 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial legal trace jurisdiction must be an uppercase ISO country code.');
        }

        foreach ([...$decisionReferences, ...$invariantReferences, ...$traceReferences] as $reference) {
            if (trim($reference) === '') {
                throw new CommercialWaterfallInvariantViolation('Commercial legal trace references cannot be empty.');
            }
        }
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        return [
            'jurisdiction' => $this->jurisdiction,
            'legal_entity_reference' => $this->legalEntityReference,
            'profile' => $this->profile,
            'profile_version' => $this->profileVersion,
            'decision' => $this->decision,
            'decision_references' => $this->normalized($this->decisionReferences),
            'invariant_references' => $this->normalized($this->invariantReferences),
            'trace_references' => $this->normalized($this->traceReferences),
        ];
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    public static function fromArray(array $payload): self
    {
        return new self(
            jurisdiction: (string) ($payload['jurisdiction'] ?? ''),
            legalEntityReference: (string) ($payload['legal_entity_reference'] ?? ''),
            profile: (string) ($payload['profile'] ?? ''),
            profileVersion: (string) ($payload['profile_version'] ?? ''),
            decision: (string) ($payload['decision'] ?? ''),
            decisionReferences: array_values((array) ($payload['decision_references'] ?? [])),
            invariantReferences: array_values((array) ($payload['invariant_references'] ?? [])),
            traceReferences: array_values((array) ($payload['trace_references'] ?? [])),
        );
    }

    /**
     * @param  list<string>  $references
     * @return list<string>
     */
    private function normalized(array $references): array
    {
        $references = array_values(array_unique($references));
        sort($references);

        return $references;
    }
}
