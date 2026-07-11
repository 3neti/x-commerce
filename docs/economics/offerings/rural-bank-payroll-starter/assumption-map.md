# Rural Bank Payroll Starter Assumption Map

## Status

Current status: non-numeric assumption map for `OFR-RB-PAYROLL-STARTER`.

This document maps canonical assumptions to the instantiated offering. It does not create values or resolve blocked inputs.

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

Until the component assumptions exist and are Active, Approved, or explicitly controlled placeholders, `VOL-001` remains blocked. The model must not produce both an independent aggregate volume and a derived volume for the same scenario.

## Required Assumptions

| Assumption ID | Purpose in offering | Affected line items | Affected stakeholder views | Readiness | Evidence needed |
| --- | --- | --- | --- | --- | --- |
| `OFR-RB-PAYROLL-STARTER` | Offering identity and scope. | All line items. | All views. | Structurally Ready | Decision 0002 is accepted. |
| `ADP-001` | Banks onboarded by year. | `RB-COST-*`, `ODTI-REV-*`, `DEVOPS-REV-*`, adoption indicators. | Rural Bank, ODTI, DevOps, Investor, Public Interest. | Blocked | Approved adoption scenario or controlled placeholder. |
| `ADP-002` | Active banks by year. | Subscription, operations, activity, public-interest reach. | Rural Bank, ODTI, 3neti, NetBank, DevOps, Investor, Public Interest. | Blocked | Active-bank scenario tied to onboarding and churn. |
| `VOL-001` | Successful payroll transactions per active bank per month, preferably derived from payroll customers, payroll runs, recipients, and completion rate. | Transaction fee, transaction platform obligation, SMS usage, NetBank volume, public completion. | Customer, Rural Bank, ODTI, 3neti, NetBank, VASP, Investor, Public Interest. | Blocked | Component assumptions `CUS-001`, `CUS-002`, `CUS-003`, `VOL-002`, and activation timing, or an explicitly controlled aggregate placeholder. |
| `LIC-004` | Hybrid activation fee. | `RB-COST-001`, `ODTI-REV-001`. | Rural Bank, ODTI, Investor. | Structurally Ready | Approved commercial price before numeric model. |
| `LIC-005` | Hybrid annual platform subscription. | `RB-COST-002`, `ODTI-REV-002`. | Rural Bank, ODTI, Investor. | Structurally Ready | Approved commercial price before numeric model. |
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
| `CST-001` | SMS direct provider cost. | `RB-COST-006`, `VASP-REV-001`, `VASP-CONTRIB-001`. | Rural Bank, VASP, Investor. | Blocked | Provider quote or approved provider cost. |

## Blocked Assumptions

The following currently block affected line items and downstream totals:

- `ADP-001`;
- `ADP-002`;
- `VOL-001`;
- `ATT-001`, if SMS is included;
- `CST-001`, if SMS is included;
- `ROY-001`;
- `RISK-001`;
- `RISK-002`;
- `TAX-001`;
- `PUB-001`;
- missing assumptions listed below.

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

## Missing Assumptions Discovered

The following canonical assumption records should be added before numeric modeling:

| Candidate ID | Assumption needed | Purpose | Affected views |
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

These records should be added in the next Assumptions Register slice without unsupported values.
