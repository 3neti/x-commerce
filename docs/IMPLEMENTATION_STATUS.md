# Implementation Status

## Current

- Composer package metadata exists.
- Laravel service provider exists.
- Documentation architecture exists.
- Boundary tests exist.
- A pure deterministic Commercial Waterfall calculator exists.
- Immutable in-memory policy, rule, input, allocation-line, and allocation-plan contracts exist.
- The calculator supports integer-minor-unit fixed priority lines and one exact residual line.
- The versioned Pay Code catalog is the canonical source for rationalized instruction prices.
- Deterministic quote and accepted-sale snapshots preserve catalog, waterfall, attribution, line, and allocation-plan provenance.
- x-change consumes the catalog for both Pay Code estimates and accepted sales.
- x-change persists the immutable accepted-sale snapshot and posts its exact plan through purpose-bound `3neti/wallet` Treasury Positions.
- Commercial charge, allocation, replay protection, and append-only compensating reversal are covered by package tests.

## Package Boundary

The x-commerce service provider publishes the canonical catalog configuration. The calculator, catalog, quote, sale, attribution, and allocation-plan contracts remain framework-light and perform no ledger or provider I/O.

Durable sales and accounting operations belong to the consuming settlement product. x-change currently owns the persistence adapter and `3neti/wallet` owns the purpose-bound Treasury runtime.

## Not Implemented

- persisted or tenant-managed pricing engine;
- persisted catalog publication;
- categories;
- carts;
- checkout;
- orders;
- invoices;
- subscriptions;
- licensing enforcement;
- usage metering;
- percentage, tiered, capped, or time-limited pricing rules;
- payable-discharge and partner-payment workflows;
- referrals;
- royalties;
- revenue sharing;
- marketplace items;
- bank integration;
- NetBank integration.

## Commercial Waterfall Boundary

The calculator still produces a deterministic allocation plan only. In the current x-change adapter, an accepted Pay Code sale snapshots that plan and posts it to classified Treasury Positions. This technical posting does not by itself establish a legal entitlement, settle a partner payable, execute an external bank transfer, or decide tax treatment.

Durable policy publication, effective dating, percentage rules, caps, participant master data, payable discharge, and external settlement remain separate future slices. Existing version 1 snapshots are immutable.
