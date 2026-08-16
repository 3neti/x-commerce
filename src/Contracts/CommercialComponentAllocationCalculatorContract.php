<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Contracts;

use LBHurtado\XCommerce\Data\CommercialAllocationPlanData;
use LBHurtado\XCommerce\Data\CommercialCatalogData;
use LBHurtado\XCommerce\Data\CommercialComponentEconomicsSetData;
use LBHurtado\XCommerce\Data\CommercialQuoteLineData;

interface CommercialComponentAllocationCalculatorContract
{
    /** @param list<CommercialQuoteLineData> $quoteLines */
    public function calculate(
        string $sourceCommercialEventReference,
        CommercialCatalogData $catalog,
        CommercialComponentEconomicsSetData $componentEconomics,
        array $quoteLines,
    ): CommercialAllocationPlanData;
}
