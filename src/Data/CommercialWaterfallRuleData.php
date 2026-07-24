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

        if ($this->lineType === CommercialWaterfallLineType::Residual && $this->fixedAmountMinor !== null) {
            throw new CommercialWaterfallInvariantViolation('A residual waterfall rule cannot define a fixed amount.');
        }

        if ($this->lineType !== CommercialWaterfallLineType::Residual
            && ($this->fixedAmountMinor === null || $this->fixedAmountMinor < 1)) {
            throw new CommercialWaterfallInvariantViolation('A fixed waterfall rule amount must be positive.');
        }
    }

    /**
     * @return array{
     *     reference:string,
     *     sequence:int,
     *     line_type:string,
     *     category:string,
     *     recipient_reference:string,
     *     fixed_amount_minor:int|null
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
        );
    }
}
