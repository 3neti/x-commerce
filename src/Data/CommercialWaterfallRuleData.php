<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialWaterfallRuleData
{
    public function __construct(
        public string $reference,
        public int $sequence,
        public CommercialWaterfallLineType $lineType,
        public string $category,
        public string $recipientReference,
        public ?int $fixedAmountMinor,
        public ?int $basisPoints = null,
        public ?int $minimumAmountMinor = null,
        public ?int $maximumAmountMinor = null,
        public ?string $participantRole = null,
    ) {
        if (trim($this->reference) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall rule reference is required.');
        }

        if ($this->sequence < 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall rule sequence must be positive.');
        }

        if (trim($this->category) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall rule category is required.');
        }

        if (trim($this->recipientReference) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall rule recipient reference is required.');
        }

        if ($this->lineType === CommercialWaterfallLineType::Residual
            && ($this->fixedAmountMinor !== null || $this->basisPoints !== null)) {
            throw new CommercialWaterfallInvariantViolation('A residual waterfall rule cannot define a fixed amount or basis points.');
        }

        if ($this->lineType !== CommercialWaterfallLineType::Residual
            && (($this->fixedAmountMinor === null) === ($this->basisPoints === null))) {
            throw new CommercialWaterfallInvariantViolation('A non-residual waterfall rule must define exactly one fixed amount or basis-point rate.');
        }

        if ($this->fixedAmountMinor !== null && $this->fixedAmountMinor < 1) {
            throw new CommercialWaterfallInvariantViolation('A fixed waterfall rule amount must be positive.');
        }

        if ($this->basisPoints !== null && ($this->basisPoints < 1 || $this->basisPoints > 10_000)) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall basis points must be between 1 and 10000.');
        }

        if ($this->minimumAmountMinor !== null && $this->minimumAmountMinor < 0) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall minimum amount cannot be negative.');
        }

        if ($this->maximumAmountMinor !== null && $this->maximumAmountMinor < 0) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall maximum amount cannot be negative.');
        }

        if ($this->minimumAmountMinor !== null && $this->maximumAmountMinor !== null
            && $this->minimumAmountMinor > $this->maximumAmountMinor) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall minimum amount cannot exceed its maximum.');
        }

        if ($this->participantRole !== null && trim($this->participantRole) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall participant role cannot be empty.');
        }
    }

    /**
     * @return array{
     *     reference:string,
     *     sequence:int,
     *     line_type:string,
     *     category:string,
     *     recipient_reference:string,
     *     fixed_amount_minor:int|null,
     *     basis_points:int|null,
     *     minimum_amount_minor:int|null,
     *     maximum_amount_minor:int|null,
     *     participant_role:string|null
     * }
     */
    public function toArray(): array
    {
        return [
            'reference' => $this->reference,
            'sequence' => $this->sequence,
            'line_type' => $this->lineType->value,
            'category' => $this->category,
            'recipient_reference' => $this->recipientReference,
            'fixed_amount_minor' => $this->fixedAmountMinor,
            'basis_points' => $this->basisPoints,
            'minimum_amount_minor' => $this->minimumAmountMinor,
            'maximum_amount_minor' => $this->maximumAmountMinor,
            'participant_role' => $this->participantRole,
        ];
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    public static function fromArray(array $payload): self
    {
        return new self(
            reference: (string) ($payload['reference'] ?? ''),
            sequence: (int) ($payload['sequence'] ?? 0),
            lineType: CommercialWaterfallLineType::from((string) ($payload['line_type'] ?? '')),
            category: (string) ($payload['category'] ?? ''),
            recipientReference: (string) ($payload['recipient_reference'] ?? ''),
            fixedAmountMinor: isset($payload['fixed_amount_minor'])
                ? (int) $payload['fixed_amount_minor']
                : null,
            basisPoints: isset($payload['basis_points'])
                ? (int) $payload['basis_points']
                : null,
            minimumAmountMinor: isset($payload['minimum_amount_minor'])
                ? (int) $payload['minimum_amount_minor']
                : null,
            maximumAmountMinor: isset($payload['maximum_amount_minor'])
                ? (int) $payload['maximum_amount_minor']
                : null,
            participantRole: isset($payload['participant_role'])
                ? (string) $payload['participant_role']
                : null,
        );
    }
}
