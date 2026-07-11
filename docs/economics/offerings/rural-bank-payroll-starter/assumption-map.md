# Rural Bank Payroll Starter Assumption Map

## Status

Current status: assumption map for `OFR-RB-PAYROLL-STARTER`.

This document maps canonical assumptions to the instantiated offering. It does not create approved values or resolve blocked inputs. Level 1 draft internal placeholder values are recorded separately in [provisional-input-register-level-1.md](provisional-input-register-level-1.md).

## Governing Rule

One assumption may affect many model lines, but it should have one canonical identifier and one authoritative source.

Line items must reference canonical assumptions rather than inventing local values.

## Payroll Activity Derivation

The future numeric model should treat `VOL-001` as the canonical successful payroll transaction volume used by stakeholder views.

Preferred future derivation:

```text
VOL-001 =
    CUS-001 Payroll customers per active bank
    x CUS-002 Payroll runs per customer per month
    x CUS-003 Average recipients per payroll run
    x VOL-002 Payroll completion rate
```

Total program activity for the offering should then be derived from:

```text
ADP-002 Active banks
    x VOL-001 Successful payroll transactions per active bank per month
    x ADP-003 Active months or first-year activation timing
```

Precedence rule:

> When `VOL-001` is derived from component assumptions, stakeholder views must reference the derived canonical value and must not independently recalculate or override it.

Until the component assumptions are Active, Approved, or explicitly controlled placeholders, `VOL-001` remains blocked. The model must not produce both an independent aggregate volume and a derived volume for the same scenario.

## Required Assumptions

| Assumption ID | Purpose in offering | Affected line items | Affected stakeholder views | Readiness | Evidence needed |
| --- | --- | --- | --- | --- | --- |
| `OFR-RB-PAYROLL-STARTER` | Offering identity and scope. | All line items. | All views. | Structurally Ready | Decision 0002 is accepted. |
| `ADP-001` | Banks onboarded by year. | `RB-COST-*`, `ODTI-REV-*`, `DEVOPS-REV-*`, adoption indicators. | Rural Bank, ODTI, DevOps, Investor, Public Interest. | Blocked | Approved adoption scenario or controlled placeholder. |
| `ADP-002` | Active banks by year. | Subscription, operations, activity, public-interest reach. | Rural Bank, ODTI, 3neti, NetBank, DevOps, Investor, Public Interest. | Blocked | Active-bank scenario tied to onboarding and churn. |
| `VOL-001` | Successful payroll transactions per active bank per month, preferably derived from payroll customers, payroll runs, recipients, and completion rate. | Transaction fee, transaction platform obligation, SMS usage, NetBank volume, public completion. | Customer, Rural Bank, ODTI, 3neti, NetBank, VASP, Investor, Public Interest. | Blocked | Component assumptions `CUS-001`, `CUS-002`, `CUS-003`, `VOL-002`, and activation timing, or an explicitly controlled aggregate placeholder. |
| `LIC-004` | Hybrid activation fee. | `RB-COST-001`, `ODTI-REV-001`. | Rural Bank, ODTI, Investor. | Structurally Ready | Approved commercial price before numeric model. |
| `LIC-005` | Hybrid annual platform subscription. | `RB-COST-002`, `ODTI-REV-002`. | Rural Bank, ODTI, Investor. | Structurally Ready | Approved commercial price before numeric model. |
| `EMP-001` | Employer payroll onboarding fee. | Employer cost, Rural Bank revenue, ODTI revenue, onboarding payback. | Customer, Rural Bank, ODTI, Investor. | Blocked | Approved employer-facing price or controlled placeholder. |
| `EMP-002` | Employer monthly payroll-service fee. | Employer recurring cost, Rural Bank recurring revenue, ODTI recurring revenue, incremental payroll contribution. | Customer, Rural Bank, ODTI, Investor. | Blocked | Approved employer-facing price or controlled placeholder. |
| `PRC-001` | Base per-successful-recipient-disbursement fee. | `CUST-COST-001`, `RB-REV-001`, `RB-REV-003`, `RB-COST-003`, `ODTI-REV-003`. | Customer, Rural Bank, ODTI, 3neti, Investor. | Structurally Ready | Approved customer-facing fee and allocation basis before numeric model. |
| `OPS-001` | DevOps deployment setup fee. | `RB-COST-004`, `DEVOPS-REV-001`. | Rural Bank, DevOps Provider. | Structurally Ready | Provider quote or approved managed-operations commercial decision. |
| `OPS-002` | DevOps monthly managed operations fee. | `RB-COST-005`, `DEVOPS-REV-002`. | Rural Bank, DevOps Provider. | Structurally Ready | Provider quote or approved managed-operations commercial decision. |
| `ROY-001` | 3neti royalty or license basis. | `ODTI-COST-001`, `3NETI-REV-001`, ODTI and 3neti contribution. | ODTI, 3neti, Investor. | Blocked | 3neti-ODTI agreement, legal and accounting review. |
| `RISK-001` | Churn. | Active-bank continuity, recurring revenue, recurring costs. | Rural Bank, ODTI, DevOps, VASP, Investor. | Blocked | Defined churn subject and scenario basis. |
| `RISK-002` | Bad debt or non-collection. | Collection timing, payable timing, contribution. | Rural Bank, ODTI, 3neti, DevOps, VASP, Investor. | Blocked | Accounting and collection policy. |
| `TAX-001` | Tax, withholding, and accounting treatment. | Tax lines and final payable lines. | All financial views. | Blocked | Tax and accounting review. |
| `PUB-001` | Public-interest completion indicator. | `PUBLIC-PI-*`, `CUST-OPVAL-*`. | Customer, Rural Bank, RBAP, Public Interest, Investor. | Blocked | Public-interest measurement definition. |

## Optional Assumptions For SMS Variant

SMS is optional but instantiated as the first modeled optional attachment.

| Assumption ID | Purpose in offering | Affected line items | Affected stakeholder views | Readiness | Evidence needed |
| --- | --- | --- | --- | --- | --- |
| `ATT-001` | SMS attachment rate. | `CUST-COST-002`, `RB-REV-002`, `RB-COST-006`, `VASP-VOL-001`, `VASP-REV-001`. | Customer, Rural Bank, VASP, ODTI, Investor. | Blocked | Attachment-rate evidence or controlled placeholder. |
| `VAS-001` | Customer-facing SMS price. | `CUST-COST-002`, `RB-REV-002`. | Customer, Rural Bank, VASP. | Structurally Ready | Approved customer-facing SMS price before numeric model. |
| `CST-001` | SMS wholesale provider price. | `RB-COST-006`, `VASP-REV-001`, `VASP-CONTRIB-001`. | Rural Bank, VASP, Investor. | Blocked | Provider quote, wholesale pricing schedule, signed provider agreement, or approved commercial proposal. |

## Blocked Assumptions

The following currently block affected line items and downstream totals:

- `ADP-001`;
- `ADP-002`;
- `EMP-001`;
- `EMP-002`;
- `VOL-001`;
- `ATT-001`, if SMS is included;
- `CST-001`, if SMS is included;
- `ROY-001`;
- `RISK-001`;
- `RISK-002`;
- `TAX-001`;
- `PUB-001`;
- canonical blocked assumptions listed below.

Blocked assumptions do not block the structural model. They block calculation of affected values.

## Not Applicable To Baseline

| Assumption ID | Reason |
| --- | --- |
| `LIC-001` | Perpetual license model is not the selected baseline. |
| `LIC-002` | Annual maintenance under perpetual license is not the selected baseline. |
| `LIC-003` | Subscription-only model is not the selected baseline. |
| `ATT-002` | KYC is not part of the baseline. |
| `VAS-002` | Email is not part of the baseline. |
| `VAS-003` | KYC is not part of the baseline. |
| `VAS-004` | Rider or CTA is not part of the baseline and billable unit remains unresolved. |
| `CST-002` | KYC provider cost is not part of the baseline. |
| `PAR-001` | Business Development Partner participation is deferred. |

## Canonical Assumptions Added From Instantiation

The following canonical assumption records were identified during offering instantiation and should remain blocked until evidence or approved controlled placeholders exist:

| Assumption ID | Assumption needed | Purpose | Affected views |
| --- | --- | --- | --- |
| `CUS-001` | Payroll customers per active rural bank. | Convert active banks into employer demand. | Customer, Rural Bank, ODTI, Investor. |
| `CUS-002` | Payroll runs per customer per month. | Convert employers into payroll batches. | Customer, Rural Bank, ODTI, NetBank, Public Interest. |
| `CUS-003` | Average recipients per payroll run. | Support recipient-level transaction volume and completion indicators. | Customer, Rural Bank, ODTI, NetBank, Public Interest. |
| `VOL-002` | Payroll completion rate. | Derive successful recipient payroll transactions from payroll runs and recipients; separate attempted, successful, failed, reversed, and corrected payroll events. | Customer, Rural Bank, ODTI, NetBank, Public Interest. |
| `ADP-003` | First-year activation timing and active months. | Separate onboarded banks from active offering usage and convert active banks into active model months. | Rural Bank, ODTI, DevOps, Investor. |
| `COL-001` | Employer collection timing. | Distinguish billing, collection, cash receipt, and downstream payment. | Rural Bank, ODTI, 3neti, DevOps, VASP. |
| `RB-001` | Rural-bank retained fee amount or formula. | Calculate rural-bank retained economics. | Rural Bank, ODTI, Consolidated View. |
| `ODTI-001` | ODTI support cost per active bank or active payroll customer. | Model ODTI operating burden. | ODTI, Investor. |
| `ODTI-002` | Implementation effort. | Separate activation revenue from implementation cost. | ODTI, Rural Bank, Investor. |
| `CLD-001` | Public cloud cost. | Track external infrastructure outflow under rural-bank-owned environment. | Rural Bank, DevOps, Consolidated View. |
| `NET-001` | NetBank or rail fee basis. | Model infrastructure fee if approved. | Rural Bank, NetBank, ODTI, Consolidated View. |
| `SMS-001` | SMS delivery success rate. | Model failed-message treatment and outcome quality. | Customer, Rural Bank, VASP, Public Interest. |
| `OPS-003` | DevOps engineering and tooling cost. | Model DevOps gross margin and capacity. | DevOps Provider, Consolidated View. |
| `CUS-004` | Customer administrative labor cost. | Measure work avoided by payroll offering. | Customer, Public Interest, Investor. |
| `CUS-005` | Time saved per payroll cycle. | Measure operational value. | Customer, Public Interest. |
| `PUB-002` | Recipient satisfaction or access indicator. | Measure Recipient Value and Public Value. | Customer, Public Interest, Investor. |
| `CUS-006` | Failed-payment handling cost. | Measure exception burden and value of completion. | Customer, Rural Bank, Public Interest. |
| `PUB-003` | Employer administrative-burden reduction. | Measure work reduction as a public-interest and customer-value indicator. | Customer, Public Interest, Investor. |
| `PUB-004` | Payroll outcome completion indicator. | Define public-interest completion output without duplicating `VOL-002`. | Customer, Public Interest, Investor. |
| `NET-002` | NetBank or infrastructure operating cost basis. | Model infrastructure operating burden. | NetBank, Rural Bank, ODTI, Investor. |
| `SMS-002` | SMS provider internal delivery cost. | Model SMS provider internal delivery economics. | VASP, Rural Bank, Investor. |
| `SMS-003` | SMS failed-message treatment. | Model failed, delayed, duplicate, or undelivered SMS events. | Customer, Rural Bank, VASP, Public Interest. |
| `SMS-004` | SMS privacy and consent readiness. | Model SMS eligibility, disclosure, consent, and governance dependency. | Customer, Rural Bank, VASP, Public Interest. |
| `OPS-004` | DevOps external tooling cost. | Model external operational tooling cost. | DevOps Provider, Rural Bank, Investor. |
| `OPS-005` | DevOps operational readiness indicator. | Model uptime, recovery, backup, handover, and operational confidence. | DevOps Provider, Rural Bank, Public Interest, Investor. |
| `3NETI-001` | 3neti R&D cost basis. | Model reusable technology and architecture stewardship cost. | 3neti, ODTI, Investor. |
| `3NETI-002` | 3neti package stewardship and documentation cost basis. | Model x-commerce stewardship and traceability cost. | 3neti, ODTI, Investor. |
| `3NETI-003` | 3neti external IP and legal-service cost basis. | Model external legal and IP-service cost. | 3neti, ODTI, Investor. |
| `INV-001` | Payroll offering capital requirement. | Model capital need without treating financing as revenue. | Investor, ODTI, 3neti. |
| `INV-002` | Investor return mechanism. | Model ownership or financing rights separately from operational waterfalls. | Investor. |
| `INV-003` | Confidence and governance indicator. | Model investability, traceability, and governance fidelity. | Investor, Public Interest. |

These records are canonical inputs now, but they are not numeric-ready.

## Canonical Assumptions Added From Economic-Treatment Decision

Decision 0003 added employer-level commercial units for the Level 1 model.

| Assumption ID | Assumption needed | Purpose | Affected views |
| --- | --- | --- | --- |
| `EMP-001` | Employer payroll onboarding fee. | Model employer setup, payroll configuration, training, launch support, Rural Bank revenue, and ODTI onboarding economics. | Customer, Rural Bank, ODTI, Investor. |
| `EMP-002` | Employer monthly payroll-service fee. | Model recurring employer payroll-service revenue, support, reporting, reconciliation, and incremental payroll contribution. | Customer, Rural Bank, ODTI, Investor. |

These assumptions remain `Blocked` in the Assumptions Register. Their Level 1 use is controlled by [provisional-input-register-level-1.md](provisional-input-register-level-1.md).
