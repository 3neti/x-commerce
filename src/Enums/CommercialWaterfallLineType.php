<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Enums;

enum CommercialWaterfallLineType: string
{
    case Deduction = 'deduction';
    case Allocation = 'allocation';
    case Residual = 'residual';
}
