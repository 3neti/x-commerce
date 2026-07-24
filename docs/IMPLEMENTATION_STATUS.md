# Implementation Status

## Current

- Composer package metadata exists.
- Laravel service provider exists.
- Documentation architecture exists.
- Boundary tests exist.
- A pure deterministic Commercial Waterfall calculator exists.
- Immutable in-memory policy, rule, input, allocation-line, and allocation-plan contracts exist.
- The calculator supports integer-minor-unit fixed priority lines and one exact residual line.

## Intentionally Empty

The service provider has no bootstrapping behavior because the Commercial Waterfall calculator is framework-independent and this package currently has no config, routes, migrations, commands, event listeners, views, translations, or integrations to register.

## Not Implemented

- pricing engine;
- catalogs;
- categories;
- carts;
- checkout;
- orders;
- invoices;
- subscriptions;
- licensing enforcement;
- usage metering;
- transaction billing;
- commissions;
- referrals;
- royalties;
- revenue sharing;
- marketplace items;
- x-change integration;
- bank integration;
- NetBank integration.

## Commercial Waterfall Boundary

The current calculator produces a deterministic allocation plan only. It does not persist an approved policy, establish legal entitlement, recognize revenue, create a payable, debit an account, credit a participant, execute a transfer, or settle an external provider obligation.

Durable policy publication, effective dating, attribution, percentage rules, caps, lifecycle states, reversals, payables, Treasury posting, and x-change execution remain separate future slices.
