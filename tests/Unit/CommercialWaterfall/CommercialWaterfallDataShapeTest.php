<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Tests\Unit\CommercialWaterfall;

use LBHurtado\XCommerce\Contracts\CommercialWaterfallCalculatorContract;
use LBHurtado\XCommerce\Data\CommercialWaterfallInputData;
use LBHurtado\XCommerce\Data\CommercialWaterfallPolicyData;
use LBHurtado\XCommerce\Data\CommercialWaterfallRuleData;
use LBHurtado\XCommerce\Enums\CommercialWaterfallLineType;
use LBHurtado\XCommerce\Services\DeterministicCommercialWaterfallCalculator;
use LBHurtado\XCommerce\Tests\TestCase;

final class CommercialWaterfallDataShapeTest extends TestCase
{
    public function test_policy_serialization_round_trips_without_losing_public_provenance(): void
    {
        $policy = new CommercialWaterfallPolicyData(
            reference: 'pay-code-generation',
            version: 7,
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

        $this->assertSame($policy->toArray(), CommercialWaterfallPolicyData::fromArray($policy->toArray())->toArray());
        $this->assertSame(7, $policy->toArray()['version']);
        $this->assertIsInt($policy->toArray()['rules'][0]['sequence']);
    }

    public function test_plan_shape_preserves_policy_event_currency_and_integer_amounts(): void
    {
        $policy = new CommercialWaterfallPolicyData(
            reference: 'pay-code-generation',
            version: 7,
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
            new CommercialWaterfallInputData('pay-code:PC-123:generation:v1', 2_500),
        )->toArray();

        $this->assertSame('pay-code:PC-123:generation:v1', $plan['source_commercial_event_reference']);
        $this->assertSame('pay-code-generation', $plan['policy_reference']);
        $this->assertSame(7, $plan['policy_version']);
        $this->assertSame('PHP', $plan['currency']);
        $this->assertIsInt($plan['allocation_base_minor']);
        $this->assertIsInt($plan['lines'][0]['amount_minor']);
    }

    public function test_calculator_implements_the_public_contract(): void
    {
        $this->assertInstanceOf(
            CommercialWaterfallCalculatorContract::class,
            new DeterministicCommercialWaterfallCalculator,
        );
    }
}
