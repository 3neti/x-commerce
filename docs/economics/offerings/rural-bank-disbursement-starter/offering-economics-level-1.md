# Disbursement Starter Offering Economics

## Status

Current status: calculation scaffold only.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Model maturity: Level 1, not yet authorized.

No numeric projections exist in this document.

Workbook readiness: not ready for `.xlsx` generation because the [provisional input register](provisional-input-register-level-1.md) contains no authorized scenario values.

## Required Warning

> This model scaffold is not a forecast, approved budget, provider quote, institutional commitment, contract, investment representation, or factual operating result. Numeric outputs remain blocked until provisional inputs are formally authorized.

## Model Boundary

Core Disbursement should be shown separately from optional notification.

Required future views:

- Core Disbursement;
- Optional Notification Increment;
- Core Disbursement + Notification Variant.

Economic treatment follows [Decision 0006](../../../decisions/0006-disbursement-starter-economic-treatment.md):

- primary operating view: Incremental Disbursement Economics;
- companion investment view: Rural Bank Modernization Portfolio;
- later allocation view: Shared Platform Allocation;
- stress-test view: Full-Cost Stand-Alone Disbursement.

## Projection Shell

When authorized, the model must present:

| Dimension | Required values | Current status |
| --- | --- | --- |
| Years | Year 1 through Year 5 | Scaffold only |
| Scenarios | Conservative, Base, Accelerated | Scaffold only |
| Core offering | Disbursement without optional notification | Scaffold only |
| Optional variant | Notification increment | Scaffold only |
| Combined variant | Core Disbursement + Notification | Scaffold only |

No row in this document may contain a numeric value unless it cites:

- canonical assumption ID;
- provisional input ID;
- derived formula; or
- blocked/excluded treatment.

## Activity Tables

Future tables must show:

| Driver | Formula or source | Status |
| --- | --- | --- |
| Active banks | `ADP-002` | Blocked |
| Weighted active months | `ADP-003` | Blocked |
| Sponsors per active bank | `DSP-CUS-001` | Blocked |
| Batches per sponsor per month | `DSP-CUS-002` | Blocked |
| Recipients per batch | `DSP-CUS-003` | Blocked |
| Completion rate | `DSP-VOL-002` | Blocked |
| Successful disbursements per active bank per month | `DSP-CUS-001 x DSP-CUS-002 x DSP-CUS-003 x DSP-VOL-002` | Derived; blocked |
| Annual successful disbursements | `ADP-002 x ADP-003 x DSP-VOL-001` | Derived; blocked |

Workbook parity key:

```text
DSP-VOL-001 = DSP-CUS-001 x DSP-CUS-002 x DSP-CUS-003 x DSP-VOL-002
Annual successful disbursements = ADP-002 x ADP-003 x DSP-VOL-001
```

`DSP-VOL-001` must not be entered independently while component-derived mode is active.

## Sponsor Revenue Tables

Future Core Disbursement revenue should include:

| Revenue source | Formula | Status |
| --- | --- | --- |
| Sponsor onboarding fees | Newly onboarded sponsors x `DSP-PRICE-001` | Blocked |
| Sponsor monthly or program-service fees | Active sponsors x active months x `DSP-PRICE-002` | Blocked |
| Recipient disbursement fees | Successful disbursements x `DSP-PRICE-003` | Blocked |
| Disbursement funding value | Pass-through; `DSP-FUND-001` | Blocked and excluded from revenue |

Optional notification revenue should remain separate:

| Revenue source | Formula | Status |
| --- | --- | --- |
| Notification customer-facing fees | Attached notifications x `DSP-VAS-001` | Blocked |
| Notification wholesale provider cost | Attached notifications x `DSP-CST-001` | Blocked |
| Notification margin | Collected notification revenue less wholesale provider cost | Blocked |

## Required Five-Year Output Tables

The future numeric version must include these exact output families so the workbook can validate parity:

| Output family | Core Disbursement | Optional notification | Combined variant | Current status |
| --- | --- | --- | --- | --- |
| Activity | Required | Required as attached notification count | Required | Blocked |
| Sponsor commercial fees | Required | Required separately | Required | Blocked |
| Rural Bank entity revenue | Required | Required separately if retained by Rural Bank | Required | Blocked |
| ODTI entity revenue | Required | Required separately if ODTI participates | Required | Blocked |
| DevOps entity revenue | Required where allocated | No default SMS effect | Required where allocated | Blocked |
| Consolidated external revenue | Required | Required separately | Required | Blocked |
| Consolidated contribution before blocked items | Required | Required separately | Required | Blocked |

## Rural Bank View

Future Rural Bank tables should show:

- sponsor onboarding share;
- sponsor monthly or program-service share;
- retained recipient-disbursement economics;
- optional notification margin, if retained by Rural Bank;
- contribution before internal Rural Bank disbursement support cost;
- blocked `DSP-RB-002`;
- modernization costs separately;
- full-cost stand-alone stress test.

Required label:

```text
Rural Bank Contribution Before Internal Bank Disbursement-Support Cost
```

## ODTI View

Future ODTI tables should show:

- ODTI share of sponsor onboarding;
- ODTI share of sponsor monthly or program-service fee;
- ODTI transaction-platform revenue;
- implementation cost;
- support cost;
- contribution.

Required qualifier:

```text
Pre-Tax
Pre-Royalty
NetBank-Fee-Blocked
```

## DevOps View

Future DevOps tables should show:

- setup or allocated revenue, if any;
- recurring managed-operations revenue, if allocated;
- direct DevOps cost;
- contribution;
- banks supported.

Cloud cost remains outside DevOps under the bank-owned infrastructure baseline unless a later approved variant changes the payer.

## Consolidated View

Future consolidated tables must separate:

- external sponsor commercial fees;
- pass-through disbursement funding value;
- external cloud and provider outflows;
- internal eliminations;
- blocked taxes;
- blocked royalties;
- blocked NetBank fees;
- financing items.

## Break-Even Tables

Future break-even tables should include:

- Rural Bank incremental break-even;
- Rural Bank full-cost stress-test break-even;
- ODTI break-even;
- DevOps break-even;
- sponsor value test where operational-value assumptions exist.

## Blocked Outputs

The following remain blocked:

- all five-year scenario outputs;
- Rural Bank true net contribution after `DSP-RB-002`;
- ODTI post-tax and post-royalty economics;
- NetBank-fee-adjusted results;
- tax-adjusted results;
- NPV, IRR, discounted payback;
- investor returns;
- partner allocations.

## Workbook Parity Requirements

The future workbook must match this document for:

| Canonical output | Required parity status |
| --- | --- |
| Active banks by scenario and year | Exact match after values are authorized |
| Active sponsors by scenario and year | Exact match after values are authorized |
| `DSP-VOL-001` by scenario | Exact formula match |
| Annual successful disbursements by scenario and year | Exact formula match |
| Core sponsor commercial fees | Exact match after values are authorized |
| Optional notification increment | Exact match after values are authorized |
| Rural Bank qualified contribution | Exact match after values are authorized |
| ODTI qualified contribution | Exact match after values are authorized |
| DevOps contribution | Exact match after values are authorized |
| Consolidated external revenue | Exact match after values are authorized |

Until this document contains authorized numeric outputs, workbook parity checks must report:

```text
Blocked: canonical numeric model not yet populated.
```

## Next Slice

Normalize the Level 1 model after numeric outputs exist. Until then, this document remains a calculation scaffold.
