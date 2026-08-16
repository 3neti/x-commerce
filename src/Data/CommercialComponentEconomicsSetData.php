<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use JsonException;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialComponentEconomicsSetData
{
    public const Schema = '3neti.x-commerce.component-economics.v1';

    /** @param list<CommercialComponentEconomicsData> $components */
    public function __construct(
        public string $reference,
        public int $version,
        public string $catalogReference,
        public int $catalogVersion,
        public string $currency,
        public array $components,
    ) {
        if (trim($this->reference) === '' || $this->version < 1 || trim($this->catalogReference) === '' || $this->catalogVersion < 1) {
            throw new CommercialWaterfallInvariantViolation('Component economics and catalog references with positive versions are required.');
        }

        if (preg_match('/^[A-Z]{3}$/', $this->currency) !== 1) {
            throw new CommercialWaterfallInvariantViolation('Component economics currency must be an uppercase ISO 4217 code.');
        }

        $references = [];
        foreach ($this->components as $component) {
            if (! $component instanceof CommercialComponentEconomicsData) {
                throw new CommercialWaterfallInvariantViolation('Component economics entries must use the public data contract.');
            }
            $references[] = $component->componentReference;
        }

        if (count($references) !== count(array_unique($references))) {
            throw new CommercialWaterfallInvariantViolation('Component economics references must be unique.');
        }
    }

    public function assertMatchesCatalog(CommercialCatalogData $catalog): void
    {
        if ($this->catalogReference !== $catalog->reference
            || $this->catalogVersion !== $catalog->version
            || $this->currency !== $catalog->currency) {
            throw new CommercialWaterfallInvariantViolation('Component economics must reference the exact Commercial catalog identity and currency.');
        }

        $catalogItems = [];
        foreach ($catalog->items as $item) {
            $catalogItems[$item->reference] = $item;
        }
        $components = [];
        foreach ($this->components as $component) {
            $components[$component->componentReference] = $component;
        }

        $catalogReferences = array_keys($catalogItems);
        $componentReferences = array_keys($components);
        sort($catalogReferences, SORT_STRING);
        sort($componentReferences, SORT_STRING);

        if ($catalogReferences !== $componentReferences) {
            throw new CommercialWaterfallInvariantViolation('Every Commercial catalog item requires one explicit component economics entry.');
        }

        foreach ($catalogItems as $reference => $item) {
            $component = $components[$reference];
            $mustBeNonBillable = $item->deprecated || $item->unitPriceMinor === 0;

            if ($mustBeNonBillable !== ! $component->isBillable()) {
                throw new CommercialWaterfallInvariantViolation("Component economics [{$reference}] billability does not match its catalog item.");
            }

            if (! $component->isBillable()) {
                continue;
            }

            if ($component->allocationSchedule?->currency !== $item->currency) {
                throw new CommercialWaterfallInvariantViolation("Component economics [{$reference}] currency does not match its catalog item.");
            }

            $component->allocationSchedule->assertConserves($item->unitPriceMinor);
        }
    }

    /** @throws JsonException */
    public function snapshotHash(): string
    {
        return hash('sha256', json_encode(
            $this->toArray(),
            JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE,
        ));
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        $components = $this->components;
        usort($components, static fn (CommercialComponentEconomicsData $left, CommercialComponentEconomicsData $right): int => $left->componentReference <=> $right->componentReference);

        return [
            'schema' => self::Schema,
            'reference' => $this->reference,
            'version' => $this->version,
            'catalog_reference' => $this->catalogReference,
            'catalog_version' => $this->catalogVersion,
            'currency' => $this->currency,
            'components' => array_map(
                static fn (CommercialComponentEconomicsData $component): array => $component->toArray(),
                $components,
            ),
        ];
    }

    /** @param array<string, mixed> $payload */
    public static function fromArray(array $payload): self
    {
        if (($payload['schema'] ?? null) !== self::Schema) {
            throw new CommercialWaterfallInvariantViolation('Component economics schema is unsupported.');
        }

        return new self(
            reference: (string) ($payload['reference'] ?? ''),
            version: (int) ($payload['version'] ?? 0),
            catalogReference: (string) ($payload['catalog_reference'] ?? ''),
            catalogVersion: (int) ($payload['catalog_version'] ?? 0),
            currency: (string) ($payload['currency'] ?? ''),
            components: array_map(
                static fn (array $component): CommercialComponentEconomicsData => CommercialComponentEconomicsData::fromArray($component),
                array_values((array) ($payload['components'] ?? [])),
            ),
        );
    }
}
