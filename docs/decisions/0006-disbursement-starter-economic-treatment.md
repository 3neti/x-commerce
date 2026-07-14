# 0006: Disbursement Starter Economic Treatment

## Status

Proposed

## Date

2026-07-14

## Decision Question

How should the first numeric `OFR-RB-DISBURSEMENT-STARTER` model treat offering-specific economics, shared rural-bank platform costs, modernization costs, and optional notification economics?

This decision is scaffolded for review. It does not approve pricing, forecasts, legal characterization, accounting treatment, tax treatment, NetBank fees, 3neti royalties, investor returns, contracts, public claims, or software implementation.

## Context

Decision 0005 selected `OFR-RB-DISBURSEMENT-STARTER` as the second modeled offering and scoped it as a narrow sponsor-funded institutional disbursement product.

The non-numeric offering model now defines:

- sponsor as buyer, payer, and funder;
- Rural Bank as customer-facing collection party;
- ODTI as commercial operator;
- 3neti as IP steward;
- NetBank as structurally present but financially blocked;
- DevOps Provider as managed operations provider;
- optional notification as a value-added attachment;
- disbursement funding value as pass-through.

Payroll Starter showed that forcing a narrow first offering to carry full modernization cost can be commercially misleading. Disbursement should be evaluated carefully before numeric modeling begins.

## Proposed Decision

Use the same economic-view hierarchy as Payroll Starter unless the Disbursement economic-coherence review proves a different treatment is required:

```text
Primary operating view:
Incremental Disbursement Economics

Companion investment view:
Rural Bank Modernization Portfolio

Later management allocation view:
Shared Platform Allocation

Stress-test view:
Full-Cost Stand-Alone Disbursement
```

This proposed treatment recognizes that Disbursement Starter may operate on the same rural-bank-owned digital platform as Payroll Starter and future offerings.

## Proposed Commercial Units

The first Level 1 candidate model should test:

| Commercial unit | Proposed treatment |
| --- | --- |
| Sponsor onboarding | One-time sponsor setup, configuration, training, and launch economics. |
| Sponsor monthly or program-service fee | Recurring sponsor-level service economics. |
| Recipient disbursement fee | Per-successful-recipient-disbursement transaction economics. |
| Optional notification | Separate optional attachment; not part of Core Disbursement headline economics. |
| Batch fee | Deferred unless the economic-coherence review shows batch-level work is not covered by the sponsor service fee. |

## Proposed Cost Treatment

### Incremental Disbursement Costs

The primary operating model should include costs caused specifically by Disbursement Starter:

- sponsor onboarding and configuration;
- disbursement-specific ODTI implementation;
- disbursement-specific ODTI support;
- disbursement reporting and reconciliation;
- exception and reversal handling;
- optional notification wholesale cost;
- non-collection risk on commercial fees.

### Shared Modernization Costs

The companion modernization view should keep these separate unless an explicit allocation is approved:

- platform subscription or access cost;
- DevOps setup;
- recurring DevOps managed operations;
- public cloud;
- common monitoring;
- common backups;
- common security;
- common platform governance.

Actual payer identity does not change merely because a cost-allocation view is used.

## Proposed Revenue Split Questions

The future Level 1 model must decide:

- Rural Bank share of sponsor onboarding fee;
- ODTI share of sponsor onboarding fee;
- Rural Bank share of sponsor monthly or program-service fee;
- ODTI share of sponsor monthly or program-service fee;
- Rural Bank retained amount or percentage from recipient disbursement fee;
- ODTI transaction-platform amount;
- optional notification margin holder.

No split is approved in this proposed decision.

## Blocked Items

The first model should remain visibly blocked for:

- `NET-001` NetBank or rail fee basis;
- `NET-002` NetBank internal cost basis;
- `ROY-001` 3neti royalty or license basis;
- `TAX-001` tax and withholding treatment;
- `DSP-RB-002` Rural Bank internal support cost;
- `FIN-001` discount rate and capital-budgeting input if NPV is attempted;
- legal characterization of pass-through disbursement value and provider roles.

## Acceptance Criteria

This decision should not become `Accepted` until the economic-coherence review confirms:

- whether Incremental Disbursement Economics is the primary operating view;
- whether sponsor monthly/program-service fees are required;
- whether a batch fee is needed;
- whether shared platform costs should remain in a modernization portfolio view;
- how optional notification is separated from Core Disbursement;
- which outputs must remain blocked in Level 1.

## Consequences If Accepted Later

- Disbursement can proceed to Level 1 provisional-input authorization.
- Sponsor-facing commercial units become the first numeric candidate structure.
- Full-cost stand-alone Disbursement remains a stress test, not the primary operating view.
- Shared-platform allocation remains deferred until multi-offering aggregation is ready.

## Recommended Next Task

Complete the Disbursement provisional-input candidate pack with management candidates only after this proposed treatment is reviewed. Do not authorize values or create projections until a separate provisional-input register exists.

