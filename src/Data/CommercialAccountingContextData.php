<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialAccountingContextData
{
    public function __construct(
        public int $schemaVersion,
        public string $provider,
        public string $connectionReference,
        public string $settlementRail,
        public string $currency,
        public string $productReference,
        public string $recognitionPolicyReference,
        public int $expectedProviderCostMinor,
        public ?string $partnerReference = null,
    ) {
        if ($this->schemaVersion < 2) {
            throw new CommercialWaterfallInvariantViolation(
                'Commercial accounting context requires schema version 2 or later.',
            );
        }

        foreach ([
            'provider' => $this->provider,
            'connection reference' => $this->connectionReference,
            'settlement rail' => $this->settlementRail,
            'product reference' => $this->productReference,
            'recognition policy reference' => $this->recognitionPolicyReference,
        ] as $field => $value) {
            if (trim($value) === '') {
                throw new CommercialWaterfallInvariantViolation(
                    "Commercial accounting {$field} is required.",
                );
            }
        }

        if (mb_strlen($this->currency) !== 3) {
            throw new CommercialWaterfallInvariantViolation(
                'Commercial accounting currency must use a three-letter code.',
            );
        }

        if ($this->expectedProviderCostMinor < 0) {
            throw new CommercialWaterfallInvariantViolation(
                'Expected provider cost cannot be negative.',
            );
        }

        if ($this->partnerReference !== null && trim($this->partnerReference) === '') {
            throw new CommercialWaterfallInvariantViolation(
                'Commercial accounting partner reference cannot be blank.',
            );
        }
    }

    /**
     * @return array{
     *     schema_version:int,
     *     provider:string,
     *     connection_reference:string,
     *     settlement_rail:string,
     *     currency:string,
     *     product_reference:string,
     *     recognition_policy_reference:string,
     *     expected_provider_cost_minor:int,
     *     partner_reference:string|null
     * }
     */
    public function toArray(): array
    {
        return [
            'schema_version' => $this->schemaVersion,
            'provider' => mb_strtolower(trim($this->provider)),
            'connection_reference' => trim($this->connectionReference),
            'settlement_rail' => mb_strtoupper(trim($this->settlementRail)),
            'currency' => mb_strtoupper(trim($this->currency)),
            'product_reference' => trim($this->productReference),
            'recognition_policy_reference' => trim($this->recognitionPolicyReference),
            'expected_provider_cost_minor' => $this->expectedProviderCostMinor,
            'partner_reference' => $this->partnerReference === null
                ? null
                : trim($this->partnerReference),
        ];
    }
}
