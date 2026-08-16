<?php

declare(strict_types=1);

namespace LBHurtado\XCommerce\Enums;

enum CommercialAllocationDestinationKind: string
{
    case ExternalRecipient = 'external_recipient';
    case InternalOwner = 'internal_owner';
    case TaxAuthority = 'tax_authority';
}
