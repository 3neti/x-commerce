<?php

declare(strict_types=1);

return [
    'routes' => [
        'api_prefix' => 'api/x/v1',
    ],
    /*
    |--------------------------------------------------------------------------
    | Commercial Catalogs
    |--------------------------------------------------------------------------
    |
    | Prices use integer minor units. Catalog versions are immutable once used
    | by an accepted quote. Publish a new version instead of changing history.
    |
    */
    'catalogs' => [
        'pay_code' => [
            'reference' => 'pay-code',
            'version' => 4,
            'currency' => 'PHP',
            'items' => [
                'cash.amount' => [
                    'unit_price_minor' => 1_500,
                    'label' => 'Transaction Fee',
                    'category' => 'base',
                ],
                'flow_type.collectible' => [
                    'unit_price_minor' => 1_500,
                    'label' => 'Collection Instruction Fee',
                    'category' => 'base',
                ],
                'voucher_type.payable' => [
                    'unit_price_minor' => 500,
                    'label' => 'Payable Voucher',
                    'category' => 'base',
                ],
                'voucher_type.settlement' => [
                    'unit_price_minor' => 800,
                    'label' => 'Settlement Voucher',
                    'category' => 'base',
                ],
                'onboarding.enabled' => [
                    'unit_price_minor' => 1_000,
                    'label' => 'Account Onboarding',
                    'category' => 'onboarding',
                ],
                'inputs.fields.kyc' => [
                    'unit_price_minor' => 1_800,
                    'label' => 'KYC Verification',
                    'category' => 'input_fields',
                    'expected_provider_cost_minor' => 2_000,
                    'expected_provider_cost_basis' => 'configured:hyperverge',
                ],
                'inputs.fields.otp' => [
                    'unit_price_minor' => 200,
                    'label' => 'OTP Verification',
                    'category' => 'input_fields',
                ],
                'feedback.email' => [
                    'unit_price_minor' => 150,
                    'label' => 'Email Notification',
                    'category' => 'feedback',
                ],
                'feedback.mobile' => [
                    'unit_price_minor' => 120,
                    'label' => 'SMS Notification',
                    'category' => 'feedback',
                    'expected_provider_cost_minor' => 130,
                    'expected_provider_cost_basis' => 'configured:sms-provider',
                ],
                'feedback.webhook' => [
                    'unit_price_minor' => 50,
                    'label' => 'Webhook Notification',
                    'category' => 'feedback',
                ],
                'inputs.fields.selfie' => [
                    'unit_price_minor' => 300,
                    'label' => 'Selfie Photo',
                    'category' => 'input_fields',
                    'expected_provider_cost_minor' => 1,
                    'expected_provider_cost_basis' => 'provisional:cloud-storage',
                ],
                'inputs.fields.signature' => [
                    'unit_price_minor' => 150,
                    'label' => 'Digital Signature',
                    'category' => 'input_fields',
                    'expected_provider_cost_minor' => 1,
                    'expected_provider_cost_basis' => 'provisional:cloud-storage',
                ],
                'inputs.fields.location' => [
                    'unit_price_minor' => 100,
                    'label' => 'GPS Location',
                    'category' => 'input_fields',
                    'expected_provider_cost_minor' => 5,
                    'expected_provider_cost_basis' => 'provisional:mapbox-temporary-geocoding',
                ],
                'inputs.fields.email' => [
                    'unit_price_minor' => 50,
                    'label' => 'Email Address',
                    'category' => 'input_fields',
                    'expected_provider_cost_basis' => 'local:capture-and-persistence',
                ],
                'inputs.fields.mobile' => [
                    'unit_price_minor' => 50,
                    'label' => 'Mobile Number',
                    'category' => 'input_fields',
                    'expected_provider_cost_basis' => 'local:capture-and-persistence',
                ],
                'inputs.fields.name' => [
                    'unit_price_minor' => 30,
                    'label' => 'Full Name',
                    'category' => 'input_fields',
                    'expected_provider_cost_basis' => 'local:capture-and-persistence',
                ],
                'inputs.fields.address' => [
                    'unit_price_minor' => 50,
                    'label' => 'Full Address',
                    'category' => 'input_fields',
                    'expected_provider_cost_basis' => 'local:capture-and-persistence',
                ],
                'inputs.fields.birth_date' => [
                    'unit_price_minor' => 30,
                    'label' => 'Birth Date',
                    'category' => 'input_fields',
                    'expected_provider_cost_basis' => 'local:capture-and-persistence',
                ],
                'inputs.fields.gross_monthly_income' => [
                    'unit_price_minor' => 30,
                    'label' => 'Monthly Income',
                    'category' => 'input_fields',
                ],
                'inputs.fields.reference_code' => [
                    'unit_price_minor' => 30,
                    'label' => 'Reference Code',
                    'category' => 'input_fields',
                ],
                'cash.validation.secret' => [
                    'unit_price_minor' => 50,
                    'label' => 'Secret Code',
                    'category' => 'validation',
                ],
                'cash.validation.mobile' => [
                    'unit_price_minor' => 50,
                    'label' => 'Mobile Restriction',
                    'category' => 'validation',
                ],
                'validation.time' => [
                    'unit_price_minor' => 80,
                    'label' => 'Time Window Validation',
                    'category' => 'validation',
                ],
                'validation.location' => [
                    'unit_price_minor' => 120,
                    'label' => 'Location Validation',
                    'category' => 'validation',
                    'expected_provider_cost_minor' => 5,
                    'expected_provider_cost_basis' => 'provisional:mapbox-temporary-geocoding',
                ],
                'cash.validation.payable' => [
                    'unit_price_minor' => 200,
                    'label' => 'Vendor Alias (B2B)',
                    'category' => 'validation',
                ],
                'rider.message' => [
                    'unit_price_minor' => 200,
                    'label' => 'Rider Message',
                    'category' => 'rider',
                ],
                'rider.splash' => [
                    'unit_price_minor' => 2_000,
                    'label' => 'Rider Splash Screen',
                    'category' => 'rider',
                ],
                'rider.url' => [
                    'unit_price_minor' => 5_000,
                    'label' => 'Rider Redirect URL',
                    'category' => 'rider',
                ],
                'cash.validation.location' => [
                    'unit_price_minor' => 0,
                    'label' => 'Location String (Legacy)',
                    'category' => 'validation',
                    'deprecated' => true,
                ],
                'cash.validation.radius' => [
                    'unit_price_minor' => 0,
                    'label' => 'Radius String (Legacy)',
                    'category' => 'validation',
                    'deprecated' => true,
                ],
            ],
        ],
    ],
];
