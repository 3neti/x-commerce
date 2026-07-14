# Normalization Review: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffolded normalization review.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

This document records the first normalization gate for the non-numeric Disbursement Starter model. It does not approve values, create assumptions, create projections, or authorize a workbook.

## Scope

Review the instantiated non-numeric offering model for:

- exact counterparty references;
- one controlled consolidation treatment per line;
- pass-through treatment for sponsor-funded disbursement value;
- derived-output treatment for retained amounts, margins, and contribution views;
- optional notification separation;
- NetBank blocked treatment;
- tax and royalty blocked treatment;
- deferred government, remittance, collections, merchant payments, and KYC variants;
- no numeric projections.

## Controlled Consolidation Vocabulary

Every Disbursement Starter line must use exactly one of:

```text
Internal elimination
External inflow
External outflow
Pass-through
Financing
Tax or government amount
Non-financial
```

No line should contain conditional consolidation language in the `Consolidation treatment` field. Variant treatment belongs in notes or deferred-variant sections.

## Derived Output Rule

Derived totals, margins, retained economics, contribution lines, readiness indicators, and public-interest indicators are reporting outputs. They are not new external inflows or outflows.

Under the current controlled vocabulary, derived financial reporting outputs use:

```text
Consolidation treatment: Non-financial
```

This is imperfect but prevents double counting until a future `Derived output` vocabulary is approved.

## Initial Structural Checks

| Check | Result | Notes |
| --- | --- | --- |
| Sponsor-funded disbursement value is pass-through | Pass | `SPONSOR-PASS-001` mirrors `RB-PASS-001`. |
| Sponsor commercial fees are external inflows | Pass | Sponsor onboarding, service, transaction, and optional notification fees enter through Rural Bank lines. |
| Rural Bank-to-ODTI transfers are internal eliminations | Pass | Onboarding, service, and transaction-platform obligations mirror ODTI revenue lines. |
| Rural Bank-to-DevOps transfer is internal elimination | Pass | Applies where Disbursement carries shared or incremental DevOps cost. |
| Rural Bank-to-Value-Added Provider transfer is internal elimination | Pass | External carrier or aggregator cost remains separate. |
| ODTI-to-3neti royalty is internal elimination | Pass | Blocked by `ROY-001`. |
| NetBank fee basis is blocked | Pass | No NetBank revenue is recognized without `NET-001`. |
| Taxes are blocked | Pass | `TAX-001` controls tax or government amounts. |
| Optional notification is separated | Pass | Notification lines are conditionally ready. |
| No numeric projections are introduced | Pass | The model is non-numeric. |

## Known Normalization Follow-Ups

- Candidate `DSP-*` assumption IDs must be governed before projections.
- Reusable assumptions such as `ATT-001`, `VAS-001`, `CST-001`, `SMS-*`, `OPS-*`, `NET-*`, `ROY-001`, and `TAX-001` need explicit reuse decisions.
- Sponsor-facing commercial units need pricing and evidence governance.
- Disbursement completion, failure, reversal, and exception treatment need a canonical event definition.
- Shared platform cost allocation must not change actual payer identity.

## Gate Result

The non-numeric Disbursement Starter model is structurally ready for the next slice:

```text
Expand or scaffold the Disbursement assumptions register update.
```

