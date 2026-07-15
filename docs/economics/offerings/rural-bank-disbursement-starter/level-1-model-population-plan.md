# Disbursement Starter Level 1 Model Population Plan

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: population plan scaffold.

No numeric Level 1 outputs are created by this document.

This plan defines how [offering-economics-level-1.md](offering-economics-level-1.md) should be populated after provisional inputs are authorized.

## Purpose

The Level 1 Markdown model must remain the canonical numeric source before the `.xlsx` workbook becomes formula-backed.

This plan answers:

```text
After provisional inputs are authorized, which Disbursement Level 1 tables must be populated, in what order, and with what controls?
```

## Required Pre-Conditions

Do not populate Level 1 numeric outputs until:

- [provisional-input-register-level-1.md](provisional-input-register-level-1.md) contains authorized or draft-authorized inputs;
- every numeric value has a provisional input ID or derived formula;
- [provisional-authorization-packet.md](provisional-authorization-packet.md) is complete;
- `DSP-VOL-001` is confirmed as derived;
- blocked exclusions remain visible.

## Population Order

| Step | Table family | Purpose | Workbook consumers |
| --- | --- | --- | --- |
| 1 | Input summary | List authorized inputs, provisional IDs, scenarios, units, and warnings. | `02_Assumptions`, `22_Source_Lineage` |
| 2 | Adoption and sponsor activity | Active banks, active months, active sponsors, newly onboarded sponsor relationships. | `04_Adoption`, `19_Scenarios` |
| 3 | Disbursement activity | `DSP-VOL-001`, annual successful disbursements, failed/exception activity where included. | `05_Disbursement_Activity` |
| 4 | Pricing and split | Sponsor prices, Rural Bank retention, ODTI transaction amount, constraints. | `06_Pricing` |
| 5 | Core revenue | Sponsor onboarding, recurring sponsor service, recipient-disbursement fees. | `07_Revenue` |
| 6 | Rural Bank view | Qualified contribution before `DSP-RB-002`, modernization separation, stress test. | `10_Rural_Bank_View` |
| 7 | ODTI view | Pre-tax, pre-royalty, NetBank-fee-blocked contribution. | `11_ODTI_View` |
| 8 | DevOps view | Setup/recurring revenue where modeled, direct cost, contribution, capacity notes. | `12_DevOps_View` |
| 9 | Optional notification | Separate optional notification volume, revenue, provider cost, margin. | `13_Notification_Variant` |
| 10 | Consolidated view | External inflows, external outflows, internal eliminations, pass-through, blocked outputs. | `14_Consolidated_View` |
| 11 | P&L and cash-flow shells | Management P&L and cash-flow outputs where supported; blocked where unsupported. | `15_Profit_and_Loss`, `16_Cash_Flow` |
| 12 | Capital budgeting shell | NPV/IRR/payback remain blocked unless `FIN-001` and cash-flow basis exist. | `17_Capital_Budgeting` |
| 13 | Parity rows | Canonical output rows for workbook comparison. | `21_Checks`, `22_Source_Lineage` |

## Required Table Labels

The Level 1 model must use these exact labels where applicable:

```text
Core Disbursement
Optional Notification Increment
Core Disbursement + Notification Variant
Rural Bank Contribution Before Internal Bank Disbursement-Support Cost
ODTI Contribution: Pre-Tax, Pre-Royalty, NetBank-Fee-Blocked
Consolidated External Revenue
Consolidated Contribution Before Blocked Items
Pass-Through Disbursement Funding
Blocked: NetBank, Tax, Royalty, Financing, Investor, Partner
```

## Formula Controls

### Derived Volume

```text
DSP-VOL-001
=
DSP-CUS-001
x DSP-CUS-002
x DSP-CUS-003
x DSP-VOL-002
```

### Annual Activity

```text
Annual successful disbursements
=
ADP-002
x ADP-003
x DSP-VOL-001
```

### Core Sponsor Commercial Fees

```text
Sponsor onboarding fees
=
newly onboarded sponsor relationships
x DSP-PRICE-001
```

```text
Sponsor recurring service fees
=
active sponsors
x weighted active months
x DSP-PRICE-002
```

```text
Recipient disbursement fees
=
annual successful disbursements
x DSP-PRICE-003
```

### Rural Bank Transaction Retention

```text
Rural Bank retained transaction economics
<=
recipient disbursement fees
```

The retained basis must follow the authorized `DSP-RB-001` formula.

### Pass-Through Control

```text
Sponsor-funded disbursement value
=
Pass-through
```

It must not appear in revenue, cost of sales, contribution, or consolidated external revenue.

## Parity Rows To Populate

At minimum, the populated Level 1 model must provide values for:

| Output | Scenario | Year |
| --- | --- | --- |
| Active banks | Conservative | Year 1 |
| Active banks | Base | Year 5 |
| Active sponsors | Base | Year 5 |
| `DSP-VOL-001` | Base | Not applicable |
| Annual successful disbursements | Base | Year 5 |
| Core external revenue | Base | Year 5 |
| Rural Bank qualified contribution | Base | Year 5 |
| ODTI qualified contribution | Base | Year 5 |
| DevOps contribution | Base | Year 5 |
| Consolidated contribution before blocked items | Base | Year 5 |

These parity rows should be mirrored in [workbook-parity-validation.md](workbook-parity-validation.md) before numeric workbook export.

## Blocking Rules

Do not populate:

- tax-adjusted outputs without `TAX-001`;
- NetBank-fee-adjusted outputs without `NET-001`;
- 3neti royalty-adjusted outputs without `ROY-001`;
- true Rural Bank net contribution without `DSP-RB-002`;
- NPV, IRR, or discounted payback without `FIN-001` and cash-flow basis;
- investor return or business-development partner allocation.

## Completion Gate

This population step is complete when:

- all input values cite provisional input IDs;
- all derived outputs cite formulas;
- all blocked outputs remain blocked;
- parity rows are populated;
- workbook-source lineage can be built from the Markdown model;
- no workbook-only values exist.

## Next Slice

Implement the workbook formula plan only after the Level 1 Markdown model contains authorized or draft-authorized outputs.

