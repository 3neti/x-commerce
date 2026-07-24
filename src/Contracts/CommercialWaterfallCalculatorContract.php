<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Contracts;

use LBHurtado\XCommerce\Data\CommercialAllocationPlanData;
use LBHurtado\XCommerce\Data\CommercialWaterfallInputData;
use LBHurtado\XCommerce\Data\CommercialWaterfallPolicyData;

interface CommercialWaterfallCalculatorContract
{
    public function calculate(
        CommercialWaterfallPolicyData $policy,
        CommercialWaterfallInputData $input,
    ): CommercialAllocationPlanData;
}
