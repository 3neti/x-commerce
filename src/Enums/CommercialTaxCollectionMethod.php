<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Enums;

enum CommercialTaxCollectionMethod: string
{
    case DeductFromRecipient = 'deduct_from_recipient';
}
