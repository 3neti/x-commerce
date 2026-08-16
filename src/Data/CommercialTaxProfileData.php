<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use DateTimeImmutable;
use JsonException;
use LBHurtado\XCommerce\Enums\CommercialTaxCalculationBasis;
use LBHurtado\XCommerce\Enums\CommercialTaxCollectionMethod;
use LBHurtado\XCommerce\Enums\CommercialTaxRoundingMethod;
use LBHurtado\XCommerce\Enums\CommercialTaxRoundingScope;
use LBHurtado\XCommerce\Enums\CommercialTaxType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialTaxProfileData
{
    public function __construct(
        public string $reference,
        public int $version,
        public string $jurisdiction,
        public string $currency,
        public CommercialTaxType $taxType,
        public CommercialTaxCalculationBasis $calculationBasis,
        public int $rateBasisPoints,
        public CommercialTaxRoundingMethod $roundingMethod,
        public CommercialTaxRoundingScope $roundingScope,
        public CommercialTaxCollectionMethod $collectionMethod,
        public string $taxRecipientReference,
        public string $effectiveFrom,
        public ?string $effectiveUntil = null,
    ) {
        if (trim($this->reference) === '' || $this->version < 1) {
            throw new CommercialWaterfallInvariantViolation('A Commercial Tax Profile requires a reference and positive version.');
        }

        if (! preg_match('/^[A-Z]{2}$/', $this->jurisdiction)
            || ! preg_match('/^[A-Z]{3}$/', $this->currency)) {
            throw new CommercialWaterfallInvariantViolation('A Commercial Tax Profile requires canonical jurisdiction and currency codes.');
        }

        if ($this->rateBasisPoints < 1 || $this->rateBasisPoints > 10_000) {
            throw new CommercialWaterfallInvariantViolation('A Commercial Tax Profile rate must be between 1 and 10000 basis points.');
        }

        if (trim($this->taxRecipientReference) === '') {
            throw new CommercialWaterfallInvariantViolation('A Commercial Tax Profile requires an explicit tax recipient.');
        }

        $effectiveFrom = $this->date($this->effectiveFrom);
        $effectiveUntil = $this->effectiveUntil === null ? null : $this->date($this->effectiveUntil);

        if ($effectiveUntil !== null && $effectiveUntil <= $effectiveFrom) {
            throw new CommercialWaterfallInvariantViolation('A Commercial Tax Profile effective-until instant must follow its effective-from instant.');
        }
    }

    /** @return array<string, int|string|null> */
    public function toArray(): array
    {
        return [
            'reference' => trim($this->reference),
            'version' => $this->version,
            'jurisdiction' => $this->jurisdiction,
            'currency' => $this->currency,
            'tax_type' => $this->taxType->value,
            'calculation_basis' => $this->calculationBasis->value,
            'rate_basis_points' => $this->rateBasisPoints,
            'rounding_method' => $this->roundingMethod->value,
            'rounding_scope' => $this->roundingScope->value,
            'collection_method' => $this->collectionMethod->value,
            'tax_recipient_reference' => trim($this->taxRecipientReference),
            'effective_from' => $this->date($this->effectiveFrom)->format(DATE_ATOM),
            'effective_until' => $this->effectiveUntil === null
                ? null
                : $this->date($this->effectiveUntil)->format(DATE_ATOM),
        ];
    }

    /** @param array<string, mixed> $payload */
    public static function fromArray(array $payload): self
    {
        return new self(
            reference: (string) ($payload['reference'] ?? ''),
            version: (int) ($payload['version'] ?? 0),
            jurisdiction: (string) ($payload['jurisdiction'] ?? ''),
            currency: (string) ($payload['currency'] ?? ''),
            taxType: CommercialTaxType::from((string) ($payload['tax_type'] ?? '')),
            calculationBasis: CommercialTaxCalculationBasis::from((string) ($payload['calculation_basis'] ?? '')),
            rateBasisPoints: (int) ($payload['rate_basis_points'] ?? 0),
            roundingMethod: CommercialTaxRoundingMethod::from((string) ($payload['rounding_method'] ?? '')),
            roundingScope: CommercialTaxRoundingScope::from((string) ($payload['rounding_scope'] ?? '')),
            collectionMethod: CommercialTaxCollectionMethod::from((string) ($payload['collection_method'] ?? '')),
            taxRecipientReference: (string) ($payload['tax_recipient_reference'] ?? ''),
            effectiveFrom: (string) ($payload['effective_from'] ?? ''),
            effectiveUntil: isset($payload['effective_until']) ? (string) $payload['effective_until'] : null,
        );
    }

    /** @throws JsonException */
    public function snapshotHash(): string
    {
        return hash('sha256', json_encode(
            $this->toArray(),
            JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE,
        ));
    }

    private function date(string $value): DateTimeImmutable
    {
        try {
            return new DateTimeImmutable($value);
        } catch (\Throwable $exception) {
            throw new CommercialWaterfallInvariantViolation(
                'A Commercial Tax Profile requires valid effective instants.',
                previous: $exception,
            );
        }
    }
}
