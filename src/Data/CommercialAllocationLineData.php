<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Enums\CommercialAllocationDestinationKind;
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
        public ?string $componentReference = null,
        public ?string $componentScheduleReference = null,
        public ?int $componentScheduleVersion = null,
        public ?string $componentRuleReference = null,
        public ?CommercialWaterfallLineType $componentRuleLineType = null,
        public ?CommercialAllocationDestinationKind $destinationKind = null,
        public ?string $participantRole = null,
        public ?string $agreementReference = null,
        public ?string $designationReference = null,
        public ?string $taxPolicyReference = null,
        public ?int $unitAmountMinor = null,
        public ?int $quantity = null,
    ) {}

    /** @return array<string, int|string|null> */
    public function toArray(): array
    {
        $line = [
            'policy_rule_reference' => $this->policyRuleReference,
            'sequence' => $this->sequence,
            'line_type' => $this->lineType->value,
            'category' => $this->category,
            'recipient_reference' => $this->recipientReference,
            'amount_minor' => $this->amountMinor,
            'currency' => $this->currency,
        ];

        if ($this->componentReference !== null) {
            $line['component_reference'] = $this->componentReference;
            $line['component_schedule_reference'] = $this->componentScheduleReference;
            $line['component_schedule_version'] = $this->componentScheduleVersion;
            $line['component_rule_reference'] = $this->componentRuleReference;
            $line['component_rule_line_type'] = $this->componentRuleLineType?->value;
            $line['destination_kind'] = $this->destinationKind?->value;
            $line['participant_role'] = $this->participantRole;
            $line['agreement_reference'] = $this->agreementReference;
            $line['designation_reference'] = $this->designationReference;
            $line['tax_policy_reference'] = $this->taxPolicyReference;
            $line['unit_amount_minor'] = $this->unitAmountMinor;
            $line['quantity'] = $this->quantity;
        }

        return $line;
    }
}
