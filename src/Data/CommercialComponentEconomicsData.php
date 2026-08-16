<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialComponentEconomicsData
{
    /** @param list<string> $capabilityReferences */
    public function __construct(
        public string $componentReference,
        public ?string $billingUnit,
        public ?string $billableEventReference,
        public ?string $recognitionPolicyReference,
        public array $capabilityReferences,
        public ?CommercialComponentAllocationScheduleData $allocationSchedule,
        public ?string $nonBillableReason = null,
    ) {
        if (trim($this->componentReference) === '') {
            throw new CommercialWaterfallInvariantViolation('Component economics requires a catalog item reference.');
        }

        $capabilityReferences = array_map('trim', $this->capabilityReferences);
        if (in_array('', $capabilityReferences, true) || count($capabilityReferences) !== count(array_unique($capabilityReferences))) {
            throw new CommercialWaterfallInvariantViolation('Component capability references must be non-empty and unique.');
        }

        if ($this->allocationSchedule instanceof CommercialComponentAllocationScheduleData) {
            if (trim((string) $this->billingUnit) === ''
                || trim((string) $this->billableEventReference) === ''
                || trim((string) $this->recognitionPolicyReference) === ''
                || $this->nonBillableReason !== null) {
                throw new CommercialWaterfallInvariantViolation('Billable component economics requires billing, event, and recognition policy references only.');
            }

            return;
        }

        if (trim((string) $this->nonBillableReason) === ''
            || $this->billingUnit !== null
            || $this->billableEventReference !== null
            || $this->recognitionPolicyReference !== null) {
            throw new CommercialWaterfallInvariantViolation('Non-billable component economics requires an explicit reason and no billing policy.');
        }
    }

    public function isBillable(): bool
    {
        return $this->allocationSchedule instanceof CommercialComponentAllocationScheduleData;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            'component_reference' => $this->componentReference,
            'billing_unit' => $this->billingUnit,
            'billable_event_reference' => $this->billableEventReference,
            'recognition_policy_reference' => $this->recognitionPolicyReference,
            'capability_references' => array_values($this->capabilityReferences),
            'allocation_schedule' => $this->allocationSchedule?->toArray(),
            'non_billable_reason' => $this->nonBillableReason,
        ];
    }

    /** @param array<string, mixed> $payload */
    public static function fromArray(array $payload): self
    {
        $schedule = $payload['allocation_schedule'] ?? null;

        return new self(
            componentReference: (string) ($payload['component_reference'] ?? ''),
            billingUnit: isset($payload['billing_unit']) ? (string) $payload['billing_unit'] : null,
            billableEventReference: isset($payload['billable_event_reference']) ? (string) $payload['billable_event_reference'] : null,
            recognitionPolicyReference: isset($payload['recognition_policy_reference']) ? (string) $payload['recognition_policy_reference'] : null,
            capabilityReferences: array_values(array_map('strval', (array) ($payload['capability_references'] ?? []))),
            allocationSchedule: is_array($schedule) ? CommercialComponentAllocationScheduleData::fromArray($schedule) : null,
            nonBillableReason: isset($payload['non_billable_reason']) ? (string) $payload['non_billable_reason'] : null,
        );
    }
}
