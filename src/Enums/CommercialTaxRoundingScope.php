<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Enums;

enum CommercialTaxRoundingScope: string
{
    case LineTotal = 'line_total';
}
