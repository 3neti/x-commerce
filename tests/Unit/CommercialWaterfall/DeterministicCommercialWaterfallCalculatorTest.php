<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Tests\Unit\CommercialWaterfall;

use LBHurtado\XCommerce\Data\CommercialWaterfallInputData;
use LBHurtado\XCommerce\Data\CommercialWaterfallPolicyData;
use LBHurtado\XCommerce\Data\CommercialWaterfallRuleData;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Exceptions\CommercialWaterfallInvariantViolation;
use LBHurtado\XCommerce\Services\DeterministicCommercialWaterfallCalculator;
use LBHurtado\XCommerce\Tests\TestCase;

final class DeterministicCommercialWaterfallCalculatorTest extends TestCase
{
    public function test_it_allocates_fixed_priority_lines_and_the_exact_residual(): void
    {
        $plan = (new DeterministicCommercialWaterfallCalculator)->calculate(
            $this->policy(),
            new CommercialWaterfallInputData(
                sourceCommercialEventReference: 'pay-code:PC-123:generation:v1',
                allocationBaseMinor: 2_500,
            ),
        );

        $this->assertSame(2_500, $plan->allocationBaseMinor);
        $this->assertSame(2_500, $plan->totalAllocatedMinor());
        $this->assertSame(500, $plan->residualMinor());
        $this->assertSame(
            [1_000, 800, 200, 500],
            array_column($plan->toArray()['lines'], 'amount_minor'),
        );
        $this->assertSame(
            ['provider:netbank', 'product:pay-code', 'partner:approved-42', 'operator:odti'],
            array_column($plan->toArray()['lines'], 'recipient_reference'),
        );
    }

    public function test_the_same_policy_and_input_produce_identical_normalized_output(): void
    {
        $calculator = new DeterministicCommercialWaterfallCalculator;
        $input = new CommercialWaterfallInputData('pay-code:PC-123:generation:v1', 2_500);

        $this->assertSame(
            $calculator->calculate($this->policy(), $input)->toArray(),
            $calculator->calculate($this->policy(), $input)->toArray(),
        );
    }

    public function test_it_supports_a_zero_base_with_a_residual_only_policy(): void
    {
        $policy = new CommercialWaterfallPolicyData(
            reference: 'zero-value-commercial-event',
            version: 1,
            currency: 'PHP',
            rules: [
                new CommercialWaterfallRuleData(
                    reference: 'operator-residual',
                    sequence: 10,
                    lineType: CommercialWaterfallLineType::Residual,
                    category: 'operator_residual',
                    recipientReference: 'operator:odti',
                    fixedAmountMinor: null,
                ),
            ],
        );

        $plan = (new DeterministicCommercialWaterfallCalculator)->calculate(
            $policy,
            new CommercialWaterfallInputData('commercial-event:zero', 0),
        );

        $this->assertSame(0, $plan->totalAllocatedMinor());
        $this->assertSame(0, $plan->residualMinor());
    }

    public function test_it_rejects_fixed_allocations_that_exceed_the_base(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('fixed allocations exceed');

        (new DeterministicCommercialWaterfallCalculator)->calculate(
            $this->policy(),
            new CommercialWaterfallInputData('pay-code:PC-LOW:generation:v1', 500),
        );
    }

    public function test_it_rejects_a_negative_allocation_base(): void
    {
        $this->expectException(CommercialWaterfallInvariantViolation::class);
        $this->expectExceptionMessage('cannot be negative');

        new CommercialWaterfallInputData('pay-code:PC-NEG:generation:v1', -1);
    }

    public function test_it_allocates_basis_points_with_floor_cap_and_exact_residual(): void
    {
        $policy = new CommercialWaterfallPolicyData(
            reference: 'percentage-waterfall',
            version: 1,
            currency: 'PHP',
            rules: [
                new CommercialWaterfallRuleData(
                    reference: 'provider-cost',
                    sequence: 10,
                    lineType: CommercialWaterfallLineType::Deduction,
                    category: 'provider_cost',
                    recipientReference: 'provider:netbank',
                    fixedAmountMinor: null,
                    basisPoints: 1_000,
                    minimumAmountMinor: 200,
                    maximumAmountMinor: 1_000,
                ),
                new CommercialWaterfallRuleData(
                    reference: 'partner-commission',
                    sequence: 20,
                    lineType: CommercialWaterfallLineType::Allocation,
                    category: 'partner_commission',
                    recipientReference: 'participant:partner',
                    fixedAmountMinor: null,
                    basisPoints: 500,
                    participantRole: 'partner',
                ),
                new CommercialWaterfallRuleData(
                    reference: 'commercial-residual',
                    sequence: 30,
                    lineType: CommercialWaterfallLineType::Residual,
                    category: 'commercial_revenue',
                    recipientReference: 'operator:x-change',
                    fixedAmountMinor: null,
                ),
            ],
        );
        $plan = (new DeterministicCommercialWaterfallCalculator)->calculate(
            $policy,
            new CommercialWaterfallInputData(
                sourceCommercialEventReference: 'commercial-event:percentage',
                allocationBaseMinor: 2_750,
                participants: ['partner' => 'partner:approved-42'],
            ),
        );

        $this->assertSame([275, 137, 2_338], array_column($plan->toArray()['lines'], 'amount_minor'));
        $this->assertSame('partner:approved-42', $plan->lines[1]->recipientReference);
        $this->assertSame(2_750, $plan->totalAllocatedMinor());
    }

    public function test_missing_partner_attribution_skips_commission_and_leaves_it_in_the_residual(): void
    {
        $policy = new CommercialWaterfallPolicyData(
            reference: 'partner-conditional-waterfall',
            version: 1,
            currency: 'PHP',
            rules: [
                new CommercialWaterfallRuleData(
                    reference: 'partner-commission',
                    sequence: 10,
                    lineType: CommercialWaterfallLineType::Allocation,
                    category: 'partner_commission',
                    recipientReference: 'participant:partner',
                    fixedAmountMinor: null,
                    basisPoints: 500,
                    participantRole: 'partner',
                ),
                new CommercialWaterfallRuleData(
                    reference: 'commercial-residual',
                    sequence: 20,
                    lineType: CommercialWaterfallLineType::Residual,
                    category: 'commercial_revenue',
                    recipientReference: 'operator:x-change',
                    fixedAmountMinor: null,
                ),
            ],
        );
        $plan = (new DeterministicCommercialWaterfallCalculator)->calculate(
            $policy,
            new CommercialWaterfallInputData('commercial-event:direct', 2_750),
        );

        $this->assertCount(1, $plan->lines);
        $this->assertSame('commercial_revenue', $plan->lines[0]->category);
        $this->assertSame(2_750, $plan->lines[0]->amountMinor);
    }

    private function policy(): CommercialWaterfallPolicyData
    {
        return new CommercialWaterfallPolicyData(
            reference: 'pay-code-generation',
            version: 1,
            currency: 'PHP',
            rules: [
                new CommercialWaterfallRuleData(
                    reference: 'provider-cost',
                    sequence: 10,
                    lineType: CommercialWaterfallLineType::Deduction,
                    category: 'provider_cost',
                    recipientReference: 'provider:netbank',
                    fixedAmountMinor: 1_000,
                ),
                new CommercialWaterfallRuleData(
                    reference: 'product-revenue',
                    sequence: 20,
                    lineType: CommercialWaterfallLineType::Allocation,
                    category: 'product_revenue',
                    recipientReference: 'product:pay-code',
                    fixedAmountMinor: 800,
                ),
                new CommercialWaterfallRuleData(
                    reference: 'partner-commission',
                    sequence: 30,
                    lineType: CommercialWaterfallLineType::Allocation,
                    category: 'partner_commission',
                    recipientReference: 'partner:approved-42',
                    fixedAmountMinor: 200,
                ),
                new CommercialWaterfallRuleData(
                    reference: 'operator-residual',
                    sequence: 40,
                    lineType: CommercialWaterfallLineType::Residual,
                    category: 'operator_residual',
                    recipientReference: 'operator:odti',
                    fixedAmountMinor: null,
                ),
            ],
        );
    }
}
