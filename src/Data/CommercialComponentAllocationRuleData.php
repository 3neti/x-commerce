<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Enums\CommercialAllocationDestinationKind;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialComponentAllocationRuleData
{
    public function __construct(
        public string $reference,
        public int $sequence,
        public CommercialWaterfallLineType $lineType,
        public string $category,
        public CommercialAllocationDestinationKind $destinationKind,
        public string $recipientReference,
        public string $participantRole,
        public ?int $fixedAmountMinor,
        public ?int $basisPoints = null,
        public ?string $agreementReference = null,
        public ?string $designationReference = null,
        public ?string $taxPolicyReference = null,
    ) {
        if (trim($this->reference) === '' || $this->sequence < 1) {
            throw new CommercialWaterfallInvariantViolation('Component allocation rule reference and positive sequence are required.');
        }

        if (trim($this->category) === '' || trim($this->recipientReference) === '' || trim($this->participantRole) === '') {
            throw new CommercialWaterfallInvariantViolation('Component allocation category, recipient, and participant role are required.');
        }

        if (! in_array($this->lineType, [CommercialWaterfallLineType::Allocation, CommercialWaterfallLineType::Residual], true)) {
            throw new CommercialWaterfallInvariantViolation('Component economics supports allocation and residual rules only.');
        }

        if ($this->lineType === CommercialWaterfallLineType::Residual
            && ($this->fixedAmountMinor !== null || $this->basisPoints !== null)) {
            throw new CommercialWaterfallInvariantViolation('A residual component allocation cannot define an amount or basis points.');
        }

        if ($this->lineType !== CommercialWaterfallLineType::Residual
            && (($this->fixedAmountMinor === null) === ($this->basisPoints === null))) {
            throw new CommercialWaterfallInvariantViolation('A component allocation must define exactly one fixed amount or basis-point rate.');
        }

        if ($this->fixedAmountMinor !== null && $this->fixedAmountMinor < 1) {
            throw new CommercialWaterfallInvariantViolation('A fixed component allocation amount must be positive.');
        }

        if ($this->basisPoints !== null && ($this->basisPoints < 1 || $this->basisPoints > 10_000)) {
            throw new CommercialWaterfallInvariantViolation('Component allocation basis points must be between 1 and 10000.');
        }

        if ($this->destinationKind === CommercialAllocationDestinationKind::ExternalRecipient
            && (trim((string) $this->agreementReference) === '' || trim((string) $this->designationReference) === '')) {
            throw new CommercialWaterfallInvariantViolation('An external component allocation requires agreement and designation references.');
        }

        if ($this->destinationKind === CommercialAllocationDestinationKind::InternalOwner
            && ($this->agreementReference !== null || $this->designationReference !== null)) {
            throw new CommercialWaterfallInvariantViolation('An internal component allocation cannot use external agreement or designation references.');
        }

        if ($this->taxPolicyReference !== null && trim($this->taxPolicyReference) === '') {
            throw new CommercialWaterfallInvariantViolation('A component allocation tax policy reference cannot be empty.');
        }
    }

    /** @return array<string, int|string|null> */
    public function toArray(): array
    {
        return [
            'reference' => $this->reference,
            'sequence' => $this->sequence,
            'line_type' => $this->lineType->value,
            'category' => $this->category,
            'destination_kind' => $this->destinationKind->value,
            'recipient_reference' => $this->recipientReference,
            'participant_role' => $this->participantRole,
            'fixed_amount_minor' => $this->fixedAmountMinor,
            'basis_points' => $this->basisPoints,
            'agreement_reference' => $this->agreementReference,
            'designation_reference' => $this->designationReference,
            'tax_policy_reference' => $this->taxPolicyReference,
        ];
    }

    /** @param array<string, mixed> $payload */
    public static function fromArray(array $payload): self
    {
        return new self(
            reference: (string) ($payload['reference'] ?? ''),
            sequence: (int) ($payload['sequence'] ?? 0),
            lineType: CommercialWaterfallLineType::from((string) ($payload['line_type'] ?? '')),
            category: (string) ($payload['category'] ?? ''),
            destinationKind: CommercialAllocationDestinationKind::from((string) ($payload['destination_kind'] ?? '')),
            recipientReference: (string) ($payload['recipient_reference'] ?? ''),
            participantRole: (string) ($payload['participant_role'] ?? ''),
            fixedAmountMinor: isset($payload['fixed_amount_minor']) ? (int) $payload['fixed_amount_minor'] : null,
            basisPoints: isset($payload['basis_points']) ? (int) $payload['basis_points'] : null,
            agreementReference: isset($payload['agreement_reference']) ? (string) $payload['agreement_reference'] : null,
            designationReference: isset($payload['designation_reference']) ? (string) $payload['designation_reference'] : null,
            taxPolicyReference: isset($payload['tax_policy_reference']) ? (string) $payload['tax_policy_reference'] : null,
        );
    }
}
