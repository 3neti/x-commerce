<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Contracts;

use LBHurtado\XCommerce\Data\CommercialAllocationPlanData;
use LBHurtado\XCommerce\Data\CommercialTaxProfileData;

interface CommercialTaxAllocationCalculatorContract
{
    /** @param array<string, CommercialTaxProfileData> $profiles */
    public function calculate(CommercialAllocationPlanData $plan, array $profiles): CommercialAllocationPlanData;
}
