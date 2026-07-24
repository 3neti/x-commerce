<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;

final readonly class CommercialAllocationPlanData
{
    /**
     * @param  list<CommercialAllocationLineData>  $lines
     */
    public function __construct(
        public string $sourceCommercialEventReference,
        public string $policyReference,
        public int $policyVersion,
        public string $currency,
        public int $allocationBaseMinor,
        public array $lines,
    ) {}

    public function totalAllocatedMinor(): int
    {
        return array_sum(array_map(
            static fn (CommercialAllocationLineData $line): int => $line->amountMinor,
            $this->lines,
        ));
    }

    public function residualMinor(): int
    {
        foreach ($this->lines as $line) {
            if ($line->lineType === CommercialWaterfallLineType::Residual) {
                return $line->amountMinor;
            }
        }

        return 0;
    }

    /**
     * @return array{
     *     source_commercial_event_reference:string,
     *     policy_reference:string,
     *     policy_version:int,
     *     currency:string,
     *     allocation_base_minor:int,
     *     total_allocated_minor:int,
     *     residual_minor:int,
     *     lines:list<array<string, int|string>>
     * }
     */
    public function toArray(): array
    {
        return [
            'source_commercial_event_reference' => $this->sourceCommercialEventReference,
            'policy_reference' => $this->policyReference,
            'policy_version' => $this->policyVersion,
            'currency' => $this->currency,
            'allocation_base_minor' => $this->allocationBaseMinor,
            'total_allocated_minor' => $this->totalAllocatedMinor(),
            'residual_minor' => $this->residualMinor(),
            'lines' => array_map(
                static fn (CommercialAllocationLineData $line): array => $line->toArray(),
                $this->lines,
            ),
        ];
    }
}
