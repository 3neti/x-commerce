<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;

final readonly class CommercialAllocationLineData
{
    public function __construct(
        public string $policyRuleReference,
        public int $sequence,
        public CommercialWaterfallLineType $lineType,
        public string $category,
        public string $recipientReference,
        public int $amountMinor,
        public string $currency,
    ) {}

    /**
     * @return array{
     *     policy_rule_reference:string,
     *     sequence:int,
     *     line_type:string,
     *     category:string,
     *     recipient_reference:string,
     *     amount_minor:int,
     *     currency:string
     * }
     */
    public function toArray(): array
    {
        return [
            'policy_rule_reference' => $this->policyRuleReference,
            'sequence' => $this->sequence,
            'line_type' => $this->lineType->value,
            'category' => $this->category,
            'recipient_reference' => $this->recipientReference,
            'amount_minor' => $this->amountMinor,
            'currency' => $this->currency,
        ];
    }
}
