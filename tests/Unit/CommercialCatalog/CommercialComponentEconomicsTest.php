<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Tests\Unit\CommercialCatalog;

use LBHurtado\XCommerce\Data\CommercialAttributionPolicyData;
use LBHurtado\XCommerce\Data\CommercialCatalogData;
use LBHurtado\XCommerce\Data\CommercialCatalogItemData;
use LBHurtado\XCommerce\Data\CommercialComponentAllocationRuleData;
use LBHurtado\XCommerce\Data\CommercialComponentAllocationScheduleData;
use LBHurtado\XCommerce\Data\CommercialComponentEconomicsData;
use LBHurtado\XCommerce\Data\CommercialComponentEconomicsSetData;
use LBHurtado\XCommerce\Data\CommercialLegalTraceData;
use LBHurtado\XCommerce\Data\CommercialOfferingData;
use LBHurtado\XCommerce\Data\CommercialWaterfallPolicyData;
use LBHurtado\XCommerce\Data\CommercialWaterfallRuleData;
use LBHurtado\XCommerce\Enums\CommercialAllocationDestinationKind;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;
use LBHurtado\XCommerce\Tests\TestCase;

final class CommercialComponentEconomicsTest extends TestCase
{
    public function test_component_economics_round_trips_in_canonical_component_and_rule_order(): void
    {
        $offering = $this->offering($this->economics());
        $roundTrip = CommercialOfferingData::fromArray($offering->toArray());

        $this->assertSame($offering->toArray(), $roundTrip->toArray());
        $this->assertSame($offering->snapshotHash(), $roundTrip->snapshotHash());
        $this->assertSame(64, strlen($offering->componentEconomics->snapshotHash()));
        $this->assertSame(
            ['inputs.fields.legacy', 'inputs.fields.selfie'],
            array_column($offering->toArray()['component_economics']['components'], 'component_reference'),
        );
        $this->assertSame(
            ['3neti-service-share', 'institution-retained-share'],
            array_column($offering->toArray()['component_economics']['components'][1]['allocation_schedule']['rules'], 'reference'),
        );
    }

    public function test_every_catalog_item_requires_one_explicit_economics_entry(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('Every Commercial catalog item');

        $economics = $this->economics();
        $this->offering(new CommercialComponentEconomicsSetData(
            reference: $economics->reference,
            version: $economics->version,
            catalogReference: $economics->catalogReference,
            catalogVersion: $economics->catalogVersion,
            currency: $economics->currency,
            components: [$economics->components[0]],
        ));
    }

    public function test_allocations_must_equal_the_catalog_item_price_exactly(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('exceed the catalog item price');

        $this->offering($this->economics(secondaryAmountMinor: 105));
    }

    public function test_under_allocation_is_rejected_without_an_explicit_residual(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('do not equal the catalog item price');

        $this->offering($this->economics(secondaryAmountMinor: 95));
    }

    public function test_zero_price_and_deprecated_items_must_be_explicitly_non_billable(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('billability does not match');

        $economics = $this->economics();
        $this->offering(new CommercialComponentEconomicsSetData(
            reference: $economics->reference,
            version: $economics->version,
            catalogReference: $economics->catalogReference,
            catalogVersion: $economics->catalogVersion,
            currency: $economics->currency,
            components: [
                $economics->components[0],
                new CommercialComponentEconomicsData(
                    componentReference: 'inputs.fields.legacy',
                    billingUnit: 'claim',
                    billableEventReference: 'claim.completed',
                    recognitionPolicyReference: 'recognition:claim:v1',
                    capabilityReferences: [],
                    allocationSchedule: $this->allocationSchedule(100),
                ),
            ],
        ));
    }

    public function test_external_recipients_require_agreement_and_designation_references(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('requires agreement and designation');

        new CommercialComponentAllocationRuleData(
            reference: 'anonymous-payable',
            sequence: 10,
            lineType: CommercialWaterfallLineType::Allocation,
            category: 'service_provider_payable',
            destinationKind: CommercialAllocationDestinationKind::ExternalRecipient,
            recipientReference: 'counterparty:3neti',
            participantRole: 'service_aggregator',
            fixedAmountMinor: 300,
        );
    }

    public function test_internal_owner_is_explicit_and_cannot_masquerade_as_an_external_payable(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('cannot use external agreement');

        new CommercialComponentAllocationRuleData(
            reference: 'institution-retained-share',
            sequence: 20,
            lineType: CommercialWaterfallLineType::Allocation,
            category: 'institution_owned_funds',
            destinationKind: CommercialAllocationDestinationKind::InternalOwner,
            recipientReference: 'institution-owned-funds:deploying-institution',
            participantRole: 'deploying_institution',
            fixedAmountMinor: 100,
            agreementReference: 'agreement:not-applicable',
        );
    }

    public function test_deduction_rules_cannot_hide_value_outside_the_explicit_component_allocations(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('allocation and residual rules only');

        new CommercialComponentAllocationRuleData(
            reference: 'hidden-deduction',
            sequence: 10,
            lineType: CommercialWaterfallLineType::Deduction,
            category: 'provider_cost',
            destinationKind: CommercialAllocationDestinationKind::ExternalRecipient,
            recipientReference: 'counterparty:provider',
            participantRole: 'service_provider',
            fixedAmountMinor: 100,
            agreementReference: 'agreement:provider:v1',
            designationReference: 'designation:provider:v1',
        );
    }

    public function test_one_counterparty_can_hold_distinct_explicit_commercial_roles(): void
    {
        $first = new CommercialComponentAllocationRuleData(
            reference: 'service-share',
            sequence: 10,
            lineType: CommercialWaterfallLineType::Allocation,
            category: 'service_provider_payable',
            destinationKind: CommercialAllocationDestinationKind::ExternalRecipient,
            recipientReference: 'counterparty:3neti',
            participantRole: 'service_aggregator',
            fixedAmountMinor: 200,
            agreementReference: 'agreement:kyc:v1',
            designationReference: 'designation:kyc-service:v1',
        );
        $second = new CommercialComponentAllocationRuleData(
            reference: 'revenue-share',
            sequence: 20,
            lineType: CommercialWaterfallLineType::Allocation,
            category: 'revenue_share_payable',
            destinationKind: CommercialAllocationDestinationKind::ExternalRecipient,
            recipientReference: 'counterparty:3neti',
            participantRole: 'platform_operator',
            fixedAmountMinor: 100,
            agreementReference: 'agreement:platform:v1',
            designationReference: 'designation:platform-revenue:v1',
        );

        $this->assertSame($first->recipientReference, $second->recipientReference);
        $this->assertNotSame($first->participantRole, $second->participantRole);
        $this->assertNotSame($first->designationReference, $second->designationReference);
    }

    public function test_tax_is_only_a_governed_policy_reference_in_the_economics_snapshot(): void
    {
        $snapshot = $this->offering($this->economics())->toArray();
        $encoded = json_encode($snapshot, JSON_THROW_ON_ERROR);

        $this->assertStringContainsString('tax-policy:ph:withholding:v1', $encoded);
        $this->assertStringNotContainsString('"tin":', strtolower($encoded));
        $this->assertStringNotContainsString('tax_identification_number', $encoded);
    }

    public function test_unsupported_component_economics_schema_fails_closed(): void
    {
        $payload = $this->economics()->toArray();
        $payload['schema'] = 'unsupported.component-economics.v9';

        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('schema is unsupported');

        CommercialComponentEconomicsSetData::fromArray($payload);
    }

    private function offering(CommercialComponentEconomicsSetData $economics): CommercialOfferingData
    {
        return new CommercialOfferingData(
            reference: 'commercial-offering:pay-code',
            version: 5,
            catalog: $this->catalog(),
            waterfallPolicy: new CommercialWaterfallPolicyData(
                reference: 'pay-code-waterfall',
                version: 2,
                currency: 'PHP',
                rules: [
                    new CommercialWaterfallRuleData(
                        reference: 'commercial-residual',
                        sequence: 10,
                        lineType: CommercialWaterfallLineType::Residual,
                        category: 'commercial_revenue',
                        recipientReference: 'operator:x-change',
                        fixedAmountMinor: null,
                    ),
                ],
            ),
            attributionPolicy: new CommercialAttributionPolicyData(
                reference: 'pay-code-attribution',
                version: 1,
                eligibleRoles: ['service_aggregator'],
            ),
            legalTrace: new CommercialLegalTraceData(
                jurisdiction: 'PH',
                legalEntityReference: 'legal-entity:institution',
                profile: 'commercial-component-offering',
                profileVersion: 'v1',
                decision: 'review_required',
            ),
            effectiveAt: '2026-08-16T00:00:00+08:00',
            componentEconomics: $economics,
        );
    }

    private function catalog(): CommercialCatalogData
    {
        return new CommercialCatalogData(
            reference: 'commercial-catalog:pay-code',
            version: 1,
            currency: 'PHP',
            items: [
                new CommercialCatalogItemData('inputs.fields.selfie', 'Selfie', 'input_fields', 300, 'PHP'),
                new CommercialCatalogItemData('inputs.fields.legacy', 'Legacy Field', 'input_fields', 0, 'PHP', true),
            ],
        );
    }

    private function economics(int $secondaryAmountMinor = 100): CommercialComponentEconomicsSetData
    {
        return new CommercialComponentEconomicsSetData(
            reference: 'component-economics:pay-code',
            version: 1,
            catalogReference: 'commercial-catalog:pay-code',
            catalogVersion: 1,
            currency: 'PHP',
            components: [
                new CommercialComponentEconomicsData(
                    componentReference: 'inputs.fields.selfie',
                    billingUnit: 'pay_code',
                    billableEventReference: 'pay_code.issued_with_selfie',
                    recognitionPolicyReference: 'recognition:pay-code-issuance:v1',
                    capabilityReferences: ['claim-evidence:selfie'],
                    allocationSchedule: $this->allocationSchedule($secondaryAmountMinor),
                ),
                new CommercialComponentEconomicsData(
                    componentReference: 'inputs.fields.legacy',
                    billingUnit: null,
                    billableEventReference: null,
                    recognitionPolicyReference: null,
                    capabilityReferences: [],
                    allocationSchedule: null,
                    nonBillableReason: 'Deprecated zero-price compatibility item.',
                ),
            ],
        );
    }

    private function allocationSchedule(int $secondaryAmountMinor): CommercialComponentAllocationScheduleData
    {
        return new CommercialComponentAllocationScheduleData(
            reference: 'allocation:selfie',
            version: 1,
            currency: 'PHP',
            rules: [
                new CommercialComponentAllocationRuleData(
                    reference: 'institution-retained-share',
                    sequence: 20,
                    lineType: CommercialWaterfallLineType::Allocation,
                    category: 'institution_owned_funds',
                    destinationKind: CommercialAllocationDestinationKind::InternalOwner,
                    recipientReference: 'institution-owned-funds:deploying-institution',
                    participantRole: 'deploying_institution',
                    fixedAmountMinor: $secondaryAmountMinor,
                ),
                new CommercialComponentAllocationRuleData(
                    reference: '3neti-service-share',
                    sequence: 10,
                    lineType: CommercialWaterfallLineType::Allocation,
                    category: 'service_provider_payable',
                    destinationKind: CommercialAllocationDestinationKind::ExternalRecipient,
                    recipientReference: 'counterparty:3neti',
                    participantRole: 'service_aggregator',
                    fixedAmountMinor: 200,
                    agreementReference: 'agreement:institution-3neti:v1',
                    designationReference: 'designation:3neti:service-aggregator:v1',
                    taxPolicyReference: 'tax-policy:ph:withholding:v1',
                ),
            ],
        );
    }
}
