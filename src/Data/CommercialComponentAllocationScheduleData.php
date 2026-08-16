<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialComponentAllocationScheduleData
{
    /** @param list<CommercialComponentAllocationRuleData> $rules */
    public function __construct(
        public string $reference,
        public int $version,
        public string $currency,
        public array $rules,
    ) {
        if (trim($this->reference) === '' || $this->version < 1) {
            throw new CommercialWaterfallInvariantViolation('Component allocation schedule reference and positive version are required.');
        }

        if (preg_match('/^[A-Z]{3}$/', $this->currency) !== 1) {
            throw new CommercialWaterfallInvariantViolation('Component allocation schedule currency must be an uppercase ISO 4217 code.');
        }

        if ($this->rules === []) {
            throw new CommercialWaterfallInvariantViolation('A billable component requires at least one explicit allocation rule.');
        }

        $references = [];
        $sequences = [];
        $residualCount = 0;

        foreach ($this->rules as $rule) {
            if (! $rule instanceof CommercialComponentAllocationRuleData) {
                throw new CommercialWaterfallInvariantViolation('Component allocation rules must use the public rule data contract.');
            }

            $references[] = $rule->reference;
            $sequences[] = $rule->sequence;
            $residualCount += $rule->lineType === CommercialWaterfallLineType::Residual ? 1 : 0;
        }

        if (count($references) !== count(array_unique($references))
            || count($sequences) !== count(array_unique($sequences))) {
            throw new CommercialWaterfallInvariantViolation('Component allocation rule references and sequences must be unique.');
        }

        if ($residualCount > 1) {
            throw new CommercialWaterfallInvariantViolation('A component allocation schedule may contain at most one residual rule.');
        }

        $orderedRules = $this->orderedRules();
        if ($residualCount === 1 && $orderedRules[array_key_last($orderedRules)]->lineType !== CommercialWaterfallLineType::Residual) {
            throw new CommercialWaterfallInvariantViolation('A component allocation residual rule must be last.');
        }
    }

    /** @return list<CommercialComponentAllocationRuleData> */
    public function orderedRules(): array
    {
        $rules = $this->rules;
        usort($rules, static fn (CommercialComponentAllocationRuleData $left, CommercialComponentAllocationRuleData $right): int => $left->sequence <=> $right->sequence);

        return array_values($rules);
    }

    public function assertConserves(int $allocationBaseMinor): void
    {
        if ($allocationBaseMinor < 1) {
            throw new CommercialWaterfallInvariantViolation('A billable component allocation base must be positive.');
        }

        $remainingMinor = $allocationBaseMinor;

        foreach ($this->orderedRules() as $rule) {
            $amountMinor = match ($rule->lineType) {
                CommercialWaterfallLineType::Residual => $remainingMinor,
                default => $rule->fixedAmountMinor ?? intdiv($allocationBaseMinor * (int) $rule->basisPoints, 10_000),
            };

            if ($amountMinor > $remainingMinor) {
                throw new CommercialWaterfallInvariantViolation('Component allocations exceed the catalog item price.');
            }

            $remainingMinor -= $amountMinor;
        }

        if ($remainingMinor !== 0) {
            throw new CommercialWaterfallInvariantViolation('Component allocations do not equal the catalog item price.');
        }
    }

    /** @return array{reference:string, version:int, currency:string, rules:list<array<string, int|string|null>>} */
    public function toArray(): array
    {
        return [
            'reference' => $this->reference,
            'version' => $this->version,
            'currency' => $this->currency,
            'rules' => array_map(
                static fn (CommercialComponentAllocationRuleData $rule): array => $rule->toArray(),
                $this->orderedRules(),
            ),
        ];
    }

    /** @param array<string, mixed> $payload */
    public static function fromArray(array $payload): self
    {
        return new self(
            reference: (string) ($payload['reference'] ?? ''),
            version: (int) ($payload['version'] ?? 0),
            currency: (string) ($payload['currency'] ?? ''),
            rules: array_map(
                static fn (array $rule): CommercialComponentAllocationRuleData => CommercialComponentAllocationRuleData::fromArray($rule),
                array_values((array) ($payload['rules'] ?? [])),
            ),
        );
    }
}
