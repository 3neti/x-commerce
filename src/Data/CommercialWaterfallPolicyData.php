<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialWaterfallPolicyData
{
    /**
     * @param  list<CommercialWaterfallRuleData>  $rules
     */
    public function __construct(
        public string $reference,
        public int $version,
        public string $currency,
        public array $rules,
    ) {
        if (trim($this->reference) === '') {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall policy reference is required.');
        }

        if ($this->version < 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall policy version must be positive.');
        }

        if (preg_match('/^[A-Z]{3}$/', $this->currency) !== 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall policy currency must be an uppercase ISO 4217 code.');
        }

        $this->validateRules();
    }

    /**
     * @return list<CommercialWaterfallRuleData>
     */
    public function orderedRules(): array
    {
        $rules = $this->rules;

        usort(
            $rules,
            static fn (CommercialWaterfallRuleData $left, CommercialWaterfallRuleData $right): int => $left->sequence <=> $right->sequence,
        );

        return array_values($rules);
    }

    /**
     * @return array{
     *     reference:string,
     *     version:int,
     *     currency:string,
     *     rules:list<array<string, int|string|null>>
     * }
     */
    public function toArray(): array
    {
        return [
            'reference' => $this->reference,
            'version' => $this->version,
            'currency' => $this->currency,
            'rules' => array_map(
                static fn (CommercialWaterfallRuleData $rule): array => $rule->toArray(),
                $this->orderedRules(),
            ),
        ];
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    public static function fromArray(array $payload): self
    {
        $rules = array_map(
            static fn (array $rule): CommercialWaterfallRuleData => CommercialWaterfallRuleData::fromArray($rule),
            array_values((array) ($payload['rules'] ?? [])),
        );

        return new self(
            reference: (string) ($payload['reference'] ?? ''),
            version: (int) ($payload['version'] ?? 0),
            currency: (string) ($payload['currency'] ?? ''),
            rules: $rules,
        );
    }

    private function validateRules(): void
    {
        if ($this->rules === []) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall policy must contain rules.');
        }

        foreach ($this->rules as $rule) {
            if (! $rule instanceof CommercialWaterfallRuleData) {
                throw new CommercialWaterfallInvariantViolation('Commercial waterfall policy rules must use the public rule data contract.');
            }
        }

        $references = array_map(
            static fn (CommercialWaterfallRuleData $rule): string => $rule->reference,
            $this->rules,
        );
        $sequences = array_map(
            static fn (CommercialWaterfallRuleData $rule): int => $rule->sequence,
            $this->rules,
        );

        if (count($references) !== count(array_unique($references))) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall rule references must be unique.');
        }

        if (count($sequences) !== count(array_unique($sequences))) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall rule sequences must be unique.');
        }

        $orderedRules = $this->orderedRules();
        $residualRules = array_values(array_filter(
            $orderedRules,
            static fn (CommercialWaterfallRuleData $rule): bool => $rule->lineType === CommercialWaterfallLineType::Residual,
        ));

        if (count($residualRules) !== 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall policy must contain exactly one residual rule.');
        }

        $lastRule = $orderedRules[array_key_last($orderedRules)];

        if ($lastRule->lineType !== CommercialWaterfallLineType::Residual) {
            throw new CommercialWaterfallInvariantViolation('Commercial waterfall residual rule must be last.');
        }
    }
}
