# Assumptions Register Expansion Plan: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

This plan identifies the governed assumptions needed before Disbursement Starter can become numerically model-ready. It does not add records to [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md), assign values, authorize placeholders, or create projections.

## Objective

Create one canonical assumption record for every unresolved Disbursement Starter input before numeric modeling begins.

The next governed register update should answer:

```text
What canonical assumptions must exist before OFR-RB-DISBURSEMENT-STARTER can become numerically model-ready?
```

## Identifier Families To Confirm Or Add

| Prefix | Purpose | Status |
| --- | --- | --- |
| `DSP` | Disbursement-specific sponsor, activity, pricing, funding, exception, and support assumptions. | Candidate |
| `ADP` | Cross-offering bank adoption and activation. | Existing |
| `OPS` | DevOps and managed operations. | Existing |
| `CLD` | Public-cloud infrastructure. | Existing |
| `NET` | NetBank, rail, settlement, API, and infrastructure fees. | Existing |
| `SMS` | SMS or notification delivery quality and operation. | Existing |
| `ATT` | Attachment rate where cross-offering behavior is truly shared. | Existing; reuse decision required |
| `VAS` | Customer-facing value-added service pricing. | Existing; reuse decision required |
| `CST` | Provider wholesale price or direct provider cost. | Existing; reuse decision required |
| `FIN` | Capital budgeting and discount-rate assumptions. | Candidate from Payroll workbook scaffold |

Do not reuse a Payroll-specific assumption merely because the field looks similar. Reuse requires equivalent meaning, unit, evidence basis, and scenario behavior.

## Required New Canonical Records

| Candidate ID | Assumption name | Unit | Current status when added | Purpose | Primary affected views |
| --- | --- | --- | --- | --- | --- |
| `DSP-CUS-001` | Sponsors per active rural bank | Active sponsors per active bank | Blocked | Drives sponsor base, onboarding, recurring service, and activity. | Sponsor, Rural Bank, ODTI, Investor, Public Interest |
| `DSP-CUS-002` | Disbursement batches per sponsor per month | Batches per active sponsor per month | Blocked | Drives batch frequency and operational load. | Sponsor, Rural Bank, ODTI, NetBank, Public Interest |
| `DSP-CUS-003` | Average recipients per disbursement batch | Recipients per batch | Blocked | Drives recipient-level successful disbursements. | Sponsor, Rural Bank, ODTI, NetBank, Public Interest |
| `DSP-VOL-001` | Successful disbursements per active bank per month | Successful recipient disbursements per active bank per month | Blocked | Derived canonical activity value. | All transaction-driven views |
| `DSP-VOL-002` | Disbursement completion rate | Percentage of attempted recipient disbursements | Blocked | Converts attempted recipient disbursements to qualifying successful events. | Sponsor, Rural Bank, ODTI, NetBank, Public Interest |
| `DSP-PRICE-001` | Sponsor onboarding fee | PHP per onboarded sponsor | Blocked | Sponsor-facing one-time commercial fee. | Sponsor, Rural Bank, ODTI |
| `DSP-PRICE-002` | Sponsor monthly or program-service fee | PHP per active sponsor per month | Blocked | Sponsor-facing recurring service fee. | Sponsor, Rural Bank, ODTI |
| `DSP-PRICE-003` | Recipient disbursement fee | PHP per successful recipient disbursement | Blocked | Sponsor-facing transaction fee. | Sponsor, Rural Bank, ODTI |
| `DSP-RB-001` | Rural Bank retained disbursement economics | Fixed amount, percentage, residual, or approved formula | Blocked | Approved Rural Bank share or retention basis. | Rural Bank, ODTI, Consolidated |
| `DSP-RB-002` | Rural Bank disbursement-specific internal support cost | Unresolved | Blocked | Bank labor and operations cost for sponsor support, recipient questions, exceptions, and reconciliation. | Rural Bank, Investor |
| `DSP-ODTI-001` | ODTI disbursement support cost | PHP or effort per active bank, sponsor, batch, or month | Blocked | ODTI support, reporting, reconciliation, and program administration. | ODTI, Investor |
| `DSP-ODTI-002` | ODTI disbursement implementation cost | PHP, hours, or person-days per bank or sponsor | Blocked | ODTI setup, configuration, training, and launch effort. | ODTI, Rural Bank |
| `DSP-EXC-001` | Exception, reversal, and failed-disbursement handling cost | PHP or effort per failed or exception event | Blocked | Handles failed, reversed, corrected, or exception events. | Sponsor, Rural Bank, ODTI, Public Interest |
| `DSP-FUND-001` | Average disbursement funding value | PHP per recipient disbursement or batch | Blocked | Pass-through funding value and public-interest scale indicator. | Sponsor, Rural Bank, Public Interest |
| `DSP-ATT-001` | Notification attachment rate | Percentage of qualifying disbursement events | Blocked | Optional notification usage. | Sponsor, Rural Bank, Value-Added Provider, Public Interest |
| `DSP-VAS-001` | Notification customer-facing price | PHP per notification or approved billable unit | Blocked | Sponsor-facing optional notification price. | Sponsor, Rural Bank |
| `DSP-CST-001` | Notification wholesale provider price | PHP per notification or approved billable unit | Blocked | Provider charge paid by Rural Bank or approved contracting party. | Rural Bank, Value-Added Provider |

## Reuse Decisions Required

| Existing assumption | Reuse question | Default treatment |
| --- | --- | --- |
| `ADP-001`, `ADP-002`, `ADP-003` | Are bank adoption and active-month assumptions shared across Payroll and Disbursement, or offering-specific? | Reuse structure; evidence may differ by offering. |
| `LIC-004`, `LIC-005` | Does Disbursement use the same rural-bank platform access economics as Payroll or a separate access model? | Blocked until commercial decision. |
| `OPS-001`, `OPS-002`, `OPS-003` | Does Disbursement carry incremental DevOps cost, shared platform allocation, or no direct allocation in Level 1? | Blocked until economic-treatment decision. |
| `CLD-001` | Is cloud cost shared platform cost or allocated to Disbursement? | Blocked until cost-allocation decision. |
| `ATT-001`, `VAS-001`, `CST-001`, `SMS-*` | Is optional notification identical to Payroll SMS in product, provider, unit, and contract? | Do not reuse automatically. |
| `NET-001`, `NET-002` | Does the same NetBank role and fee basis apply to disbursements? | Blocked until NetBank role is evidenced. |
| `ROY-001` | Does the existing 3neti royalty basis apply to Disbursement? | Blocked until royalty decision. |
| `TAX-001` | Does the same tax treatment apply? | Blocked until tax review. |
| `FIN-001` | Is the future discount-rate assumption shared across offerings? | Candidate; do not use until governed. |

## Derived-Assumption Rule

Preferred activity derivation:

```text
DSP-CUS-001
x DSP-CUS-002
x DSP-CUS-003
x DSP-VOL-002
= DSP-VOL-001
```

Annual successful disbursement activity should then use:

```text
ADP-002
x ADP-003
x DSP-VOL-001
```

`DSP-VOL-001` must not receive an independent placeholder value when the component-derived method is selected.

## Minimum Readiness Gate For Numeric Modeling

Numeric Disbursement modeling remains blocked until each P0 assumption has one of:

- Approved value;
- evidence-supported Active value;
- explicitly authorized provisional input.

Active working assumptions remain provisional unless their evidence status supports the intended use.

## Not To Add In This Slice

Do not add:

- numeric values;
- controlled placeholders;
- projections;
- workbook inputs;
- government-program assumptions;
- remittance assumptions;
- collections assumptions;
- merchant-payment assumptions;
- business-development partner allocations;
- Channel Partner assumptions.

## Next Slice

Create the Disbursement Starter evidence acquisition plan, mapping these assumptions to sources, owners, evidence instruments, priorities, and placeholder eligibility.

