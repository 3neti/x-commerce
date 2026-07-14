# Disbursement Starter Offering Economics

## Status

Current status: scaffold only.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Model maturity: Level 1, not yet authorized.

No numeric projections exist in this document.

## Required Warning

> This model scaffold is not a forecast, approved budget, provider quote, institutional commitment, contract, investment representation, or factual operating result. Numeric outputs remain blocked until provisional inputs are formally authorized.

## Model Boundary

Core Disbursement should be shown separately from optional notification.

Required future views:

- Core Disbursement;
- Optional Notification Increment;
- Core Disbursement + Notification Variant.

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

## Next Slice

Normalize the Level 1 model after numeric outputs exist. Until then, this document remains a scaffold.

