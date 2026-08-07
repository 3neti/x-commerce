<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Data;

use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;

final readonly class CommercialAttributionPolicyData
{
    /**
     * @param  list<string>  $eligibleRoles
     */
    public function __construct(
        public string $reference,
        public int $version,
        public array $eligibleRoles,
        public string $unattributedCommissionBehavior = 'skip_to_residual',
    ) {
        if (trim($reference) === '' || $version < 1) {
            throw new CommercialWaterfallInvariantViolation('Commercial attribution policy reference and positive version are required.');
        }

        if ($eligibleRoles === []) {
            throw new CommercialWaterfallInvariantViolation('Commercial attribution policy must declare eligible participant roles.');
        }

        foreach ($eligibleRoles as $role) {
            if (trim($role) === '') {
                throw new CommercialWaterfallInvariantViolation('Commercial attribution policy roles cannot be empty.');
            }
        }

        if ($unattributedCommissionBehavior !== 'skip_to_residual') {
            throw new CommercialWaterfallInvariantViolation('Unsupported unattributed commission behavior.');
        }
    }

    /**
     * @return array{reference:string, version:int, eligible_roles:list<string>, unattributed_commission_behavior:string}
     */
    public function toArray(): array
    {
        $roles = array_values(array_unique($this->eligibleRoles));
        sort($roles);

        return [
            'reference' => $this->reference,
            'version' => $this->version,
            'eligible_roles' => $roles,
            'unattributed_commission_behavior' => $this->unattributedCommissionBehavior,
        ];
    }

    /**
     * @param  array<string, mixed>  $payload
     */
    public static function fromArray(array $payload): self
    {
        return new self(
            reference: (string) ($payload['reference'] ?? ''),
            version: (int) ($payload['version'] ?? 0),
            eligibleRoles: array_values((array) ($payload['eligible_roles'] ?? [])),
            unattributedCommissionBehavior: (string) ($payload['unattributed_commission_behavior'] ?? ''),
        );
    }
}
