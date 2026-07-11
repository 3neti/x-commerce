# Economic Coherence Review: Rural Bank Payroll Starter

## Status

Current status: internal economic-coherence and cost-allocation review.

Offering: `OFR-RB-PAYROLL-STARTER`.

This document uses the current unapproved management candidates in [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md). It does not authorize provisional inputs, change assumption statuses, create a forecast, resolve tax, resolve royalties, resolve NetBank fees, calculate investor return, or produce the final Level 1 five-year projection.

All calculations in this review are:

```text
Internal management candidate
Not authorized
Not evidence-supported
Not a forecast
Not investment-grade
Not contract-grade
```

## Review Question

This review answers:

```text
Under what cost-allocation and commercial structure can Rural Bank Payroll Starter become economically coherent for the Rural Bank, ODTI, DevOps Provider, and the broader ecosystem?
```

## Current Finding

The current Base candidates produce:

```text
VOL-001
= 268.8 successful payroll disbursements
  per active rural bank per month
```

The Rural Bank's candidate retained transaction economics are:

```text
268.8 transactions
x PHP 0.50 retained per transaction
= PHP 134.40 per month
```

The modeled fixed monthly Rural Bank costs include:

```text
Annual platform subscription:
PHP 60,000 / 12
= PHP 5,000 per month

Managed DevOps:
PHP 10,000 per month

Cloud:
approximately PHP 3,000 per month
```

Illustrative monthly fixed cost:

```text
PHP 18,000 per month
```

Before internal Rural Bank support, NetBank fees, taxes, implementation costs, setup costs, compliance costs, and other bank costs, transaction retention of approximately PHP 134.40 per month cannot recover approximately PHP 18,000 in monthly fixed cost.

This is not a defect in the model. It is the first substantive commercial conclusion produced by the model.

## Interpretation

This finding does not prove Payroll Starter is commercially impossible.

It may instead show that the current model is asking one narrow offering to carry costs that belong to a broader rural-bank digital platform.

The rural-bank deployment is expected eventually to support more than payroll, including possible future offerings such as:

- remittance;
- collections;
- merchant payments;
- government payouts;
- ayuda;
- petty cash;
- reimbursements;
- incentives;
- other Pay Code-supported services.

Payroll Starter is the first modeled offering. It may not be the sole economic justification for the entire deployment.

## Candidate Inputs Used

| Input | Conservative | Base | Accelerated |
| --- | ---: | ---: | ---: |
| Successful payroll transactions per active bank per month, `VOL-001` | 36.8 | 268.8 | 705.6 |
| Customer transaction fee, `PRC-001` | PHP 1.00 | PHP 1.50 | PHP 2.00 |
| Rural Bank retained amount, `RB-001` | PHP 0.40 | PHP 0.50 | PHP 0.60 |
| ODTI transaction-platform amount | PHP 0.60 | PHP 1.00 | PHP 1.40 |
| Annual platform subscription, `LIC-005` | PHP 60,000 | PHP 60,000 | PHP 60,000 |
| Managed DevOps fee, `OPS-002` | PHP 10,000/month | PHP 10,000/month | PHP 10,000/month |
| Cloud cost, `CLD-001` | PHP 4,000/month | PHP 3,000/month | PHP 2,500/month |
| ODTI support cost, `ODTI-001` | PHP 8,000/month | PHP 6,000/month | PHP 5,000/month |
| DevOps direct cost, `OPS-003` | PHP 8,000/month | PHP 6,000/month | PHP 5,000/month |
| Bad debt or non-collection, `RISK-002` | 5% | 2% | 1% |

## Per-Bank Unit Economics

### Payroll Activity And Transaction Fees

| Scenario | Successful payroll transactions per month | Successful payroll transactions per full active year | Employer transaction fees per month | Rural Bank retained amount per month | ODTI transaction-platform amount per month |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | 36.8 | 441.6 | PHP 36.80 | PHP 14.72 | PHP 22.08 |
| Base | 268.8 | 3,225.6 | PHP 403.20 | PHP 134.40 | PHP 268.80 |
| Accelerated | 705.6 | 8,467.2 | PHP 1,411.20 | PHP 423.36 | PHP 987.84 |

### Rural Bank Full-Cost Stand-Alone View

This view asks Payroll Starter to carry the full platform subscription, full recurring DevOps fee, and full cloud cost.

| Scenario | Rural Bank retained transaction economics per year | Annual platform subscription | Annual DevOps fee | Annual cloud cost | Rural Bank contribution before setup, tax, NetBank, and internal bank cost |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | PHP 176.64 | PHP 60,000 | PHP 120,000 | PHP 48,000 | PHP -227,823.36 |
| Base | PHP 1,612.80 | PHP 60,000 | PHP 120,000 | PHP 36,000 | PHP -214,387.20 |
| Accelerated | PHP 5,080.32 | PHP 60,000 | PHP 120,000 | PHP 30,000 | PHP -204,919.68 |

If first-year activation and DevOps setup fees are also carried by the rural bank, subtract an additional PHP 100,000 per newly deployed bank from the first-year rural-bank view.

This confirms that a PHP 0.40 to PHP 0.60 retained amount per recipient disbursement cannot finance a dedicated rural-bank deployment at the modeled volumes.

### ODTI Contribution Before Blocked Items

This view uses subscription, activation, transaction-platform amount, ODTI support cost, and ODTI implementation cost. It excludes tax, royalty, NetBank fees, and other unresolved obligations.

| Scenario | ODTI transaction-platform amount per full active year | ODTI steady-state contribution before blocked items | ODTI first-year contribution including activation and implementation | ODTI first-year contribution after candidate non-collection |
| --- | ---: | ---: | ---: | ---: |
| Conservative | PHP 264.96 | PHP -35,735.04 | PHP -20,735.04 | PHP -26,248.29 |
| Base | PHP 3,225.60 | PHP -8,774.40 | PHP 16,225.60 | PHP 13,961.09 |
| Accelerated | PHP 11,854.08 | PHP 11,854.08 | PHP 41,854.08 | PHP 40,635.54 |

Interpretation:

- Conservative ODTI economics are negative even after activation contribution.
- Base ODTI economics depend materially on activation contribution; steady-state support is not fully covered by subscription plus transaction contribution.
- Accelerated ODTI economics become positive before blocked items.
- Royalty, tax, NetBank, legal, accounting, and broader operating costs remain excluded.

### DevOps Provider Contribution Before Unresolved Setup Cost

This view keeps cloud separate because the baseline states that the Rural Bank owns and pays the cloud account.

| Scenario | Monthly DevOps revenue | Monthly DevOps direct cost | Monthly recurring DevOps contribution | Annual recurring DevOps contribution |
| --- | ---: | ---: | ---: | ---: |
| Conservative | PHP 10,000 | PHP 8,000 | PHP 2,000 | PHP 24,000 |
| Base | PHP 10,000 | PHP 6,000 | PHP 4,000 | PHP 48,000 |
| Accelerated | PHP 10,000 | PHP 5,000 | PHP 5,000 | PHP 60,000 |

DevOps setup revenue is PHP 50,000 per bank, but direct setup cost is not yet separately modeled. DevOps setup contribution therefore remains unresolved.

## Program-Level Candidate Illustration

This table shows annual successful transactions from the existing candidate pack. It is not a revenue projection.

| Scenario | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | 147.2 | 662.4 | 1,545.6 | 2,649.6 | 3,532.8 |
| Base | 4,032.0 | 15,052.8 | 30,105.6 | 53,222.4 | 86,016.0 |
| Accelerated | 29,635.2 | 90,316.8 | 177,811.2 | 296,352.0 | 423,360.0 |

### Program-Level Flow Interpretation

External commercial inflows under the current core transaction unit are employer-paid transaction fees. Rural Bank payments to ODTI and DevOps Provider are internal transfers inside the modeled ecosystem. Payroll funding is pass-through and not operating revenue.

| Scenario | Year 1 active banks | Year 1 annual successful transactions | Year 1 employer transaction fees | Year 1 Rural Bank retained transaction economics | Year 1 ODTI transaction-platform amount |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | 1 | 147.2 | PHP 147.20 | PHP 58.88 | PHP 88.32 |
| Base | 3 | 4,032.0 | PHP 6,048.00 | PHP 2,016.00 | PHP 4,032.00 |
| Accelerated | 7 | 29,635.2 | PHP 59,270.40 | PHP 17,781.12 | PHP 41,489.28 |

These transaction inflows are far smaller than the modeled platform, DevOps, and cloud costs. That is the key economic signal.

## Break-Even Thresholds

### Rural Bank Transaction Break-Even

Formula:

```text
Required successful transactions
=
Rural Bank fixed and allocated cost
/
Rural Bank retained amount per transaction
```

Monthly fixed cost used:

```text
Annual platform subscription / 12
+
monthly DevOps fee
+
monthly cloud cost
```

| Scenario | Monthly fixed cost | Rural Bank retained amount | Break-even transactions per month | Break-even transactions per year | Implied payroll employers required | Implied recipients per run across employer portfolio |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Conservative | PHP 19,000 | PHP 0.40 | 47,500.0 | 570,000.0 | 2,581.5 | 51,630.4 |
| Base | PHP 18,000 | PHP 0.50 | 36,000.0 | 432,000.0 | 535.7 | 18,750.0 |
| Accelerated | PHP 17,500 | PHP 0.60 | 29,166.7 | 350,000.0 | 248.0 | 14,881.0 |

The implied employer and recipient counts are far above the current management candidates. Therefore Payroll Starter does not stand alone under the current retained-transaction model.

### ODTI Break-Even

Steady-state formula:

```text
Required annual transaction contribution
=
annual ODTI support cost
-
annual platform subscription
```

First-year formula:

```text
Required annual transaction contribution
=
annual ODTI support cost
-
annual platform subscription
-
(activation fee - implementation cost)
```

| Scenario | Steady-state annual support gap after subscription | Transaction contribution per disbursement | Steady-state break-even transactions per active bank per year | First-year break-even transactions per newly activated bank |
| --- | ---: | ---: | ---: | ---: |
| Conservative | PHP 36,000 | PHP 0.60 | 60,000.0 | 35,000.0 |
| Base | PHP 12,000 | PHP 1.00 | 12,000.0 | 0.0 |
| Accelerated | PHP 0 | PHP 1.40 | 0.0 | 0.0 |

ODTI has a clearer path to coherence than the Rural Bank because it receives activation and subscription revenue. However, Base steady-state economics still depend on either more transaction volume, lower support cost, additional revenue units, or shared operating leverage.

### DevOps Break-Even

Formula:

```text
DevOps recurring contribution
=
OPS-002
-
OPS-003
```

| Scenario | Monthly recurring contribution | Interpretation |
| --- | ---: | --- |
| Conservative | PHP 2,000 | Positive before setup direct cost, overhead, tax, and escalation burden. |
| Base | PHP 4,000 | Positive before setup direct cost, overhead, tax, and escalation burden. |
| Accelerated | PHP 5,000 | Positive before setup direct cost, overhead, tax, and escalation burden. |

The DevOps model still requires a separate direct setup-cost assumption and capacity analysis for staffing, on-call, tooling, incident response, and handover.

### Employer Value Test

Employer-level break-even remains blocked because customer operational-value assumptions are not yet candidate-authorized:

- `CUS-004` employer administrative labor cost;
- `CUS-005` employer time saved;
- `CUS-006` failed-payment handling cost;
- `PUB-002` recipient satisfaction indicator;
- `PUB-003` employer administrative-burden reduction.

Do not invent customer value to justify the offering. The commercial claim that "payments take seconds; work takes days" still requires employer evidence.

## Cost Classification

| Cost or value | Classification | Notes |
| --- | --- | --- |
| Payroll-specific ODTI implementation work | Offering-Specific Cost | Captured by `ODTI-002` until more granular payroll implementation assumptions exist. |
| Payroll-specific support and reconciliation work | Offering-Specific Cost | Currently approximated inside `ODTI-001`, but may need employer- or activity-based refinement. |
| Rural-bank platform subscription | Shared Bank-Platform Cost | Supports Payroll Starter and future offerings; may not belong entirely to payroll. |
| Managed DevOps recurring fee | Shared Bank-Platform Cost | Common operations capability for the rural-bank deployment. |
| DevOps setup fee | Shared Bank-Platform Cost / Institutional Modernization Cost | Enables the environment, not only payroll. |
| Public cloud cost | External Provider Cost / Shared Bank-Platform Cost | External outflow paid by Rural Bank under bank-owned cloud model. |
| Domain, DNS, certificates, backups, monitoring | Shared Bank-Platform Cost | Supports common deployment readiness. |
| Bank readiness, governance, staff training | Institutional Modernization Cost | Should not automatically be recovered from one offering. |
| SMS wholesale provider charge | External Provider Cost | Optional SMS variant; provider cost must remain visible. |
| NetBank fee | External Provider Cost or internal elimination depending on boundary | Blocked until NetBank role and fee basis are known. |
| Payroll funding value | Pass-Through | Not revenue. |
| Taxes and withholding | Tax or Government Amount | Blocked. |
| Investor capital | Financing | Not operating revenue. |
| Rural Bank contribution and ODTI contribution | Derived Reporting Output | Do not aggregate as new money flows. |

## Cost-Allocation Views

### View A: Full-Cost Stand-Alone Payroll

Payroll Starter carries:

- full platform subscription;
- full DevOps setup and recurring cost;
- full cloud cost;
- all payroll-specific cost.

Purpose:

- worst-case stand-alone economics;
- tests whether Payroll alone can justify a dedicated deployment.

Finding:

```text
Commercially unattractive at current candidate volumes.
```

The Rural Bank's transaction-retention economics are deeply negative after shared fixed costs. Do not force this view to become positive.

### View B: Incremental Payroll Economics

Payroll Starter carries only costs introduced specifically by Payroll.

Shared infrastructure and modernization costs are excluded from Payroll contribution and shown separately.

Purpose:

- determine whether adding Payroll to an existing rural-bank digital platform is commercially attractive;
- identify Payroll's incremental contribution.

Finding:

```text
Potentially coherent, but payroll-specific cost assumptions are too coarse.
```

The current model needs to separate ODTI support and implementation into:

- payroll-specific implementation;
- payroll-specific support;
- shared program support;
- activity-based support;
- employer onboarding support.

### View C: Shared Platform Allocation

Payroll Starter carries an explicit allocation of shared platform costs.

Candidate allocation rules for review:

| Allocation rule | Strength | Weakness |
| --- | --- | --- |
| Equal allocation across active offerings | Simple and easy to explain | Can overburden low-revenue offerings and undercharge high-usage offerings. |
| Transaction-volume allocation | Ties cost to usage | Requires multi-offering volume data and may penalize low-margin high-volume offerings. |
| Revenue-weighted allocation | Ties cost to commercial yield | May under-allocate costs to strategically important low-price services. |
| Hybrid fixed-plus-usage allocation | Separates platform access from activity load | More complex and requires more assumptions. |

Illustrative Base shared-cost test:

```text
Full monthly fixed platform cost:
PHP 18,000

If shared equally across 4 active offerings:
Payroll allocation = PHP 4,500/month

Required transactions at PHP 0.50 retained:
9,000/month
```

Even with a four-offering allocation, Payroll Starter still requires much higher volume or additional commercial units if the Rural Bank relies only on PHP 0.50 per disbursement.

### View D: Bank Modernization Investment View

Some common infrastructure may be a Rural Bank modernization investment rather than a Payroll Starter cost.

Measure separately:

- upfront investment;
- annual operating cost;
- portfolio of offerings needed;
- expected institutional benefits;
- payback across the digital-service portfolio.

Payroll Starter contributes to the modernization case but does not alone carry it.

Relevant non-transactional benefits include:

- employer relationships;
- depositor retention;
- digital relevance;
- capability to launch later offerings;
- institutional readiness;
- future remittance, collection, merchant, government payout, and reimbursement offerings.

Do not monetize these benefits without assumptions.

## True Commercial Unit Review

The current transaction unit is:

```text
successful recipient payroll disbursement
```

That remains valid for the transaction layer, but it is not sufficient to carry the full platform cost at current candidate volumes.

Additional commercial units likely need review:

| Unit | Purpose | Status |
| --- | --- | --- |
| Employer onboarding | Recover configuration, setup, training, and employer activation work. | Candidate commercial unit; no price approved. |
| Employer monthly payroll service | Reflect recurring employer relationship, reporting, support, and workflow value. | Candidate commercial unit; no price approved. |
| Payroll batch | Charge per completed payroll run rather than only per recipient. | Candidate commercial unit; no price approved. |
| Recipient disbursement | Preserve existing per-successful-recipient fee. | Existing transaction layer candidate. |
| Rural Bank platform access | Preserve activation and annual subscription. | Existing bank-level access layer candidate. |
| Optional capability attachment | Charge for SMS or other value-added services. | Optional variant. |

Possible future product structure:

```text
Employer onboarding
+
Employer monthly service
+
Payroll batch
+
Recipient disbursement
+
Optional capability
```

This structure is not approved. It is a candidate commercial architecture for review.

## Rural Bank Revenue Layers

The Rural Bank business case should not be reduced to PHP 0.40 to PHP 0.60 retained per disbursement.

Possible direct offering revenue:

- employer onboarding revenue;
- employer monthly payroll-service fee;
- payroll batch fee;
- retained recipient transaction fee;
- optional capability fee share, if approved.

Possible relationship value:

- account relationship;
- employer deposit relationship;
- employee depositor acquisition;
- remittance relationships;
- merchant and collections opportunities;
- future offering expansion;
- customer retention;
- institutional capability.

Do not count deposits, settlement balances, customer funds, or payroll funding as revenue. Do not invent a deposit-income model.

## ODTI Revenue And Cost Structure

ODTI economics may require more than activation, annual subscription, and per-recipient platform fee.

Possible ODTI revenue layers:

- activation revenue;
- annual bank subscription;
- per-bank support fee;
- per-employer fee;
- payroll batch fee;
- per-recipient platform fee;
- implementation revenue;
- managed service coordination;
- capability markup.

`ODTI-001` may eventually need to vary by:

- number of employer customers;
- number of transactions;
- support incidents;
- number of active offerings;
- reporting and reconciliation complexity.

Current `ODTI-001` as a flat cost per active bank is useful for the first model but too crude for long-term commercial design.

## Shared-Cost Ownership

The baseline remains:

```text
The DevOps provider operates.
The Rural Bank owns.
```

Therefore:

- Rural Bank owns and pays the cloud account;
- DevOps fee is payment for managed operations;
- cloud cost is an external Rural Bank outflow;
- DevOps internal cost remains separate;
- Payroll cost allocation does not alter infrastructure ownership.

Do not move cloud cost to ODTI or DevOps merely to improve Rural Bank economics. Only the allocation view changes, not the actual payer, unless a future commercial variant explicitly changes it.

## Candidate Cost-Allocation Assumptions

The review reveals possible future assumptions:

| Candidate ID | Concept | Why it may be needed |
| --- | --- | --- |
| `ALLOC-001` | Payroll share of shared platform cost | Needed if Payroll carries only a defined share of common infrastructure. |
| `ALLOC-002` | Cost-allocation method | Needed to select equal, transaction, revenue, hybrid, or other allocation method. |
| `EMP-001` | Employer onboarding fee | Needed if employer setup becomes a commercial unit. |
| `EMP-002` | Employer monthly payroll-service fee | Needed if recurring employer service becomes a commercial unit. |
| `BAT-001` | Payroll batch fee | Needed if payroll runs are charged separately from recipient disbursements. |
| `PLT-001` | Number of active offerings sharing platform cost | Needed for shared platform allocation. |

Do not add these to the Assumptions Register yet. They should be added only after cost-allocation and commercial-unit decisions stabilize.

## Economic Coherence Tests

### Rural Bank

Result:

```text
Not coherent as a stand-alone payroll-only deployment under current candidate values.
```

Reasons:

- contribution is negative before blocked items in all scenarios;
- fixed cost recovery through transaction retention alone requires far higher volume;
- stand-alone payback is not visible at current candidate volumes;
- portfolio-level interpretation is likely required.

### ODTI

Result:

```text
Partially coherent, but scenario-sensitive.
```

Observations:

- annual subscription does not cover support in Conservative or Base steady state;
- activation can cover implementation in Base and Accelerated first-year views;
- transaction revenue creates positive incremental contribution, but only becomes material at much higher volume;
- ODTI contribution is sensitive to Rural Bank retention, support cost, and active-bank count.

### DevOps Provider

Result:

```text
Recurring model is directionally coherent before unresolved setup cost and overhead.
```

Observations:

- recurring DevOps fee exceeds direct recurring cost in all scenarios;
- setup direct cost remains unmodeled;
- staffing, on-call, tooling, handover, and incident assumptions still require evidence.

### Employer

Result:

```text
Commercial value remains evidence-blocked.
```

Employer fees are small in transaction-only terms, but the value thesis depends on administrative work saved, failed-payment cost avoided, reconciliation improvement, and employee experience. Those assumptions are not yet evidenced.

### Consolidated Ecosystem

Result:

```text
Flow logic remains coherent, but commercial architecture is incomplete.
```

Controls:

- external inflows counted once;
- internal transfers eliminated;
- payroll funds remain pass-through;
- shared costs can be allocated without changing payer identity;
- derived contributions remain reporting outputs.

## Candidate Conclusions

Current conclusion:

```text
Payroll Starter is not economically coherent as a full-cost stand-alone offering at current candidate volumes and retained transaction economics.
```

Likely companion conclusions:

```text
Payroll may be economically coherent as an incremental offering on shared infrastructure.
```

```text
Payroll likely requires additional employer-level commercial units.
```

```text
Payroll requires materially greater volume if transaction retention remains the primary Rural Bank revenue layer.
```

```text
The current pricing architecture is insufficient for a payroll-only deployment.
```

```text
The Rural Bank modernization business case must be evaluated across multiple offerings.
```

Do not force a positive conclusion. The current candidates have revealed an important design constraint.

## Candidate Revision Policy

Do not overwrite the original candidate values merely because they produce negative economics.

Preserve:

- original management candidates;
- calculated result;
- reason for concern;
- alternative candidate structures;
- recommended revision.

Any future revised candidate should be labeled:

```text
Economic-coherence revision candidate
Not authorized
Not evidence-supported
```

## Authorization Readiness Verdict

Current verdict:

```text
Ready for partial authorization of structural inputs,
but not commercial economics.
```

Structural inputs that may be ready for authorization review include:

- component-derived volume method;
- adoption cohort conventions;
- core-versus-SMS separation;
- exclusion of tax, royalty, and NetBank fee outputs;
- pass-through treatment of payroll funding.

Commercial economics require revision before authorization:

- Rural Bank retained economics;
- employer-level commercial units;
- shared platform cost allocation;
- ODTI support-cost structure;
- DevOps setup direct-cost treatment;
- cloud cost allocation view;
- customer operational-value evidence.

## Evidence Still Required

- Rural Bank/RBAP evidence for adoption and payroll portfolio.
- Employer evidence for payroll frequency, recipients, administrative work, time saved, and willingness to pay.
- DevOps estimate for recurring and setup direct cost.
- Cloud estimate tied to target architecture.
- SMS provider quote and service-performance data if SMS variant proceeds.
- Legal, accounting, tax, privacy, and NetBank role review.
- Commercial decision on whether Payroll is stand-alone, incremental, shared-cost, or modernization-portfolio.

## Recommended Next Task

Decide the intended commercial structure before authorizing provisional inputs:

1. stand-alone payroll;
2. incremental payroll on existing platform;
3. shared platform allocation;
4. bank modernization portfolio.

Then decide which additional commercial units belong in the Payroll Starter offering:

- employer onboarding;
- employer monthly service;
- payroll batch;
- recipient disbursement;
- optional capability.

After those decisions, update the candidate pack and only then complete the controlled-placeholder authorization worksheet.

## Non-Goals

Do not use this review to:

- authorize provisional inputs;
- update assumption statuses;
- produce the final five-year projection;
- create a public forecast;
- claim evidence exists;
- resolve taxes;
- resolve royalties;
- resolve NetBank fees;
- calculate investor return;
- introduce partner allocation;
- change infrastructure ownership;
- create software;
- modify x-change.
