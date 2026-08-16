<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use JsonException;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialOfferingData
{
    public function __construct(
        public string $reference,
        public int $version,
        public CommercialCatalogData $catalog,
        public CommercialWaterfallPolicyData $waterfallPolicy,
        public CommercialAttributionPolicyData $attributionPolicy,
        public CommercialLegalTraceData $legalTrace,
        public string $effectiveAt,
        public ?CommercialComponentEconomicsSetData $componentEconomics = null,
    ) {
        if (trim($reference) === '' || $version < 1 || trim($effectiveAt) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial Offering reference, positive version, and effective timestamp are required.');
        }

        if ($catalog->currency !== $waterfallPolicy->currency) {
            throw new CommercialWaterfallInvariantViolation('Commercial Offering catalog and Waterfall currencies must match.');
        }

        $this->componentEconomics?->assertMatchesCatalog($this->catalog);
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(): array
    {
        $snapshot = [
            'reference' => $this->reference,
            'version' => $this->version,
            'catalog' => $this->catalog->toArray(),
            'waterfall_policy' => $this->waterfallPolicy->toArray(),
            'attribution_policy' => $this->attributionPolicy->toArray(),
            'legal_trace' => $this->legalTrace->toArray(),
            'effective_at' => $this->effectiveAt,
        ];

        if ($this->componentEconomics instanceof CommercialComponentEconomicsSetData) {
            $snapshot['component_economics'] = $this->componentEconomics->toArray();
        }

        return $snapshot;
    }

    /**
     * @throws JsonException
     */
    public function snapshotHash(): string
    {
        return hash('sha256', json_encode(
            $this->toArray(),
            JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES,
        ));
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    public static function fromArray(array $payload): self
    {
        return new self(
            reference: (string) ($payload['reference'] ?? ''),
            version: (int) ($payload['version'] ?? 0),
            catalog: CommercialCatalogData::fromArray((array) ($payload['catalog'] ?? [])),
            waterfallPolicy: CommercialWaterfallPolicyData::fromArray((array) ($payload['waterfall_policy'] ?? [])),
            attributionPolicy: CommercialAttributionPolicyData::fromArray((array) ($payload['attribution_policy'] ?? [])),
            legalTrace: CommercialLegalTraceData::fromArray((array) ($payload['legal_trace'] ?? [])),
            effectiveAt: (string) ($payload['effective_at'] ?? ''),
            componentEconomics: isset($payload['component_economics'])
                ? CommercialComponentEconomicsSetData::fromArray((array) $payload['component_economics'])
                : null,
        );
    }
}
