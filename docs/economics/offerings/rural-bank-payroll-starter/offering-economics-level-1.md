# Payroll Starter Offering Economics

## Controlled Placeholder Model

Offering: `OFR-RB-PAYROLL-STARTER`

Model level: Level 1

Authorization status: Draft internal authorization

Projection period: Year 1 through Year 5

Scenarios: Conservative, Base, Accelerated

Input register: [provisional-input-register-level-1.md](provisional-input-register-level-1.md)

Economic-treatment decision: [0003: Payroll Starter economic treatment](../../../decisions/0003-payroll-starter-economic-treatment.md)

## Required Warning

> This model uses provisional management candidates and controlled placeholders. It is not a forecast, approved budget, provider quote, institutional commitment, contract, investment representation, or factual operating result.

This model is:

```text
Provisional
Controlled Placeholder
Non-Forecast
Not Investment-Grade
Not Contract-Grade
```

No number in this document should be used externally unless it is replaced by evidence-supported or approved assumptions and reviewed for legal, accounting, tax, and commercial treatment.

## Model Boundary

The primary operating view is:

```text
Incremental Payroll Economics
```

The companion investment view is:

```text
Rural Bank Modernization Portfolio
```

The stress-test view is:

```text
Full-Cost Stand-Alone Payroll
```

The model keeps these views separate. Separating the views does not change the cash payer: under the baseline, the Rural Bank still pays platform access, DevOps, and cloud costs.

## Inputs And Formulas

All numeric inputs come from [provisional-input-register-level-1.md](provisional-input-register-level-1.md).

`VOL-001` is derived:

```text
VOL-001
= CUS-001
x CUS-002
x CUS-003
x VOL-002
```

Annual successful payroll transactions are derived:

```text
Annual successful payroll transactions
= ADP-002
x ADP-003
x VOL-001
```

Employer commercial fees are:

```text
EMP-001 employer onboarding fees
+
EMP-002 employer monthly payroll-service fees
+
PRC-001 recipient disbursement fees
+
optional VAS-001 SMS fees
```

Payroll funding value is pass-through and is not modeled as revenue. A payroll-value amount is blocked until a separate average payroll-value assumption exists.

## Blocked Exclusions

| Exclusion | Treatment |
| --- | --- |
| Tax | Blocked by `TAX-001`; no tax-adjusted results are produced. |
| 3neti royalty | Blocked by `ROY-001`; no 3neti royalty revenue or ODTI post-royalty contribution is produced. |
| NetBank fee | Blocked by `NET-001`; no NetBank fee-adjusted result is produced. |
| Investor return | Excluded; financing is not operational revenue. |
| Business-development partner allocation | Excluded until `PAR-001` and attribution are approved. |
| Payroll funding value | Pass-through; not revenue. |
| Final legal and accounting treatment | Not concluded. |

## Derived Volume

| Scenario | `CUS-001` employers per active bank | `CUS-002` runs per employer per month | `CUS-003` recipients per run | `VOL-002` completion | Derived `VOL-001` successful transactions per active bank per month |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | 2 | 1 | 20 | 92% | 36.8 |
| Base | 4 | 2 | 35 | 96% | 268.8 |
| Accelerated | 6 | 2 | 60 | 98% | 705.6 |

## Conservative Scenario

### Activity

| Year | New banks | Cumulative onboarded banks | Active banks | Weighted active months | Employers per active bank | Active employers | New employers | `VOL-001` | Annual successful transactions |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | 2 | 2 | 1 | 4 | 2 | 2 | 4 | 36.8 | 147.2 |
| Year 2 | 3 | 5 | 3 | 6 | 2 | 6 | 6 | 36.8 | 662.4 |
| Year 3 | 4 | 9 | 6 | 7 | 2 | 12 | 8 | 36.8 | 1,545.6 |
| Year 4 | 4 | 13 | 9 | 8 | 2 | 18 | 8 | 36.8 | 2,649.6 |
| Year 5 | 5 | 18 | 12 | 8 | 2 | 24 | 10 | 36.8 | 3,532.8 |

### Employer Revenue

| Year | Employer onboarding fees | Employer monthly service fees | Recipient disbursement fees | Optional SMS fees | Total employer commercial fees | Payroll funding value |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Year 1 | PHP 6,000.00 | PHP 2,400.00 | PHP 147.20 | PHP 33.12 | PHP 8,580.32 | Pass-through; amount blocked |
| Year 2 | PHP 9,000.00 | PHP 10,800.00 | PHP 662.40 | PHP 149.04 | PHP 20,611.44 | Pass-through; amount blocked |
| Year 3 | PHP 12,000.00 | PHP 25,200.00 | PHP 1,545.60 | PHP 347.76 | PHP 39,093.36 | Pass-through; amount blocked |
| Year 4 | PHP 12,000.00 | PHP 43,200.00 | PHP 2,649.60 | PHP 596.16 | PHP 58,445.76 | Pass-through; amount blocked |
| Year 5 | PHP 15,000.00 | PHP 57,600.00 | PHP 3,532.80 | PHP 794.88 | PHP 76,927.68 | Pass-through; amount blocked |

### Stakeholder Summary

| Year | Rural Bank revenue after non-collection | Rural Bank incremental contribution before internal bank support cost | Rural Bank modernization cost | Rural Bank full-cost stress result | ODTI revenue including access | ODTI incremental contribution | ODTI total pre-tax/pre-royalty contribution | DevOps revenue | DevOps contribution before setup direct cost | SMS Provider revenue | Consolidated incremental contribution before blocked items |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 3,713.38 | PHP 3,713.38 | PHP 276,000.00 | PHP -272,286.62 | PHP 124,415.90 | PHP -47,584.10 | PHP 72,415.90 | PHP 140,000.00 | PHP 108,000.00 | PHP 23.18 | PHP -43,871.88 |
| Year 2 | PHP 9,870.19 | PHP 9,870.19 | PHP 642,000.00 | PHP -632,129.81 | PHP 249,611.57 | PHP -104,388.43 | PHP 135,611.57 | PHP 330,000.00 | PHP 186,000.00 | PHP 104.33 | PHP -94,523.46 |
| Year 3 | PHP 19,610.44 | PHP 19,610.44 | PHP 1,198,000.00 | PHP -1,178,389.56 | PHP 427,296.99 | PHP -188,703.01 | PHP 221,296.99 | PHP 620,000.00 | PHP 284,000.00 | PHP 243.43 | PHP -169,104.74 |
| Year 4 | PHP 30,360.75 | PHP 30,360.75 | PHP 1,768,000.00 | PHP -1,737,639.25 | PHP 584,766.27 | PHP -271,233.73 | PHP 288,766.27 | PHP 920,000.00 | PHP 344,000.00 | PHP 417.31 | PHP -240,893.84 |
| Year 5 | PHP 40,101.00 | PHP 40,101.00 | PHP 2,324,000.00 | PHP -2,283,899.00 | PHP 762,451.70 | PHP -355,548.30 | PHP 374,451.70 | PHP 1,210,000.00 | PHP 442,000.00 | PHP 556.42 | PHP -315,475.12 |

## Base Scenario

### Activity

| Year | New banks | Cumulative onboarded banks | Active banks | Weighted active months | Employers per active bank | Active employers | New employers | `VOL-001` | Annual successful transactions |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | 5 | 5 | 3 | 5 | 4 | 12 | 20 | 268.8 | 4,032.0 |
| Year 2 | 7 | 12 | 8 | 7 | 4 | 32 | 28 | 268.8 | 15,052.8 |
| Year 3 | 8 | 20 | 14 | 8 | 4 | 56 | 32 | 268.8 | 30,105.6 |
| Year 4 | 10 | 30 | 22 | 9 | 4 | 88 | 40 | 268.8 | 53,222.4 |
| Year 5 | 10 | 40 | 32 | 10 | 4 | 128 | 40 | 268.8 | 86,016.0 |

### Employer Revenue

| Year | Employer onboarding fees | Employer monthly service fees | Recipient disbursement fees | Optional SMS fees | Total employer commercial fees | Payroll funding value |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Year 1 | PHP 60,000.00 | PHP 45,000.00 | PHP 6,048.00 | PHP 1,915.20 | PHP 112,963.20 | Pass-through; amount blocked |
| Year 2 | PHP 84,000.00 | PHP 168,000.00 | PHP 22,579.20 | PHP 7,150.08 | PHP 281,729.28 | Pass-through; amount blocked |
| Year 3 | PHP 96,000.00 | PHP 336,000.00 | PHP 45,158.40 | PHP 14,300.16 | PHP 491,458.56 | Pass-through; amount blocked |
| Year 4 | PHP 120,000.00 | PHP 594,000.00 | PHP 79,833.60 | PHP 25,280.64 | PHP 819,114.24 | Pass-through; amount blocked |
| Year 5 | PHP 120,000.00 | PHP 960,000.00 | PHP 129,024.00 | PHP 40,857.60 | PHP 1,249,881.60 | Pass-through; amount blocked |

### Stakeholder Summary

| Year | Rural Bank revenue after non-collection | Rural Bank incremental contribution before internal bank support cost | Rural Bank modernization cost | Rural Bank full-cost stress result | ODTI revenue including access | ODTI incremental contribution | ODTI total pre-tax/pre-royalty contribution | DevOps revenue | DevOps contribution before setup direct cost | SMS Provider revenue | Consolidated incremental contribution before blocked items |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 52,894.13 | PHP 52,894.13 | PHP 770,000.00 | PHP -717,105.87 | PHP 381,871.36 | PHP -55,628.64 | PHP 269,371.36 | PHP 400,000.00 | PHP 310,000.00 | PHP 957.60 | PHP -2,753.66 |
| Year 2 | PHP 142,591.41 | PHP 142,591.41 | PHP 1,708,000.00 | PHP -1,565,408.59 | PHP 759,999.74 | PHP -115,000.26 | PHP 514,999.74 | PHP 910,000.00 | PHP 574,000.00 | PHP 3,575.04 | PHP 27,519.65 |
| Year 3 | PHP 256,958.82 | PHP 256,958.82 | PHP 2,816,000.00 | PHP -2,559,041.18 | PHP 1,177,663.49 | PHP -182,336.51 | PHP 777,663.49 | PHP 1,520,000.00 | PHP 848,000.00 | PHP 7,150.08 | PHP 74,479.31 |
| Year 4 | PHP 434,778.49 | PHP 434,778.49 | PHP 4,564,000.00 | PHP -4,129,221.51 | PHP 1,845,565.95 | PHP -289,434.05 | PHP 1,200,565.95 | PHP 2,480,000.00 | PHP 1,292,000.00 | PHP 12,640.32 | PHP 145,091.64 |
| Year 5 | PHP 673,688.06 | PHP 673,688.06 | PHP 6,760,000.00 | PHP -6,086,311.94 | PHP 2,631,175.68 | PHP -418,824.32 | PHP 1,681,175.68 | PHP 3,700,000.00 | PHP 1,780,000.00 | PHP 20,428.80 | PHP 254,455.17 |

## Accelerated Scenario

### Activity

| Year | New banks | Cumulative onboarded banks | Active banks | Weighted active months | Employers per active bank | Active employers | New employers | `VOL-001` | Annual successful transactions |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | 10 | 10 | 7 | 6 | 6 | 42 | 60 | 705.6 | 29,635.2 |
| Year 2 | 12 | 22 | 16 | 8 | 6 | 96 | 72 | 705.6 | 90,316.8 |
| Year 3 | 15 | 37 | 28 | 9 | 6 | 168 | 90 | 705.6 | 177,811.2 |
| Year 4 | 18 | 55 | 42 | 10 | 6 | 252 | 108 | 705.6 | 296,352.0 |
| Year 5 | 20 | 75 | 60 | 10 | 6 | 360 | 120 | 705.6 | 423,360.0 |

### Employer Revenue

| Year | Employer onboarding fees | Employer monthly service fees | Recipient disbursement fees | Optional SMS fees | Total employer commercial fees | Payroll funding value |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Year 1 | PHP 300,000.00 | PHP 315,000.00 | PHP 59,270.40 | PHP 20,122.30 | PHP 694,392.70 | Pass-through; amount blocked |
| Year 2 | PHP 360,000.00 | PHP 960,000.00 | PHP 180,633.60 | PHP 61,325.11 | PHP 1,561,958.71 | Pass-through; amount blocked |
| Year 3 | PHP 450,000.00 | PHP 1,890,000.00 | PHP 355,622.40 | PHP 120,733.80 | PHP 2,816,356.20 | Pass-through; amount blocked |
| Year 4 | PHP 540,000.00 | PHP 3,150,000.00 | PHP 592,704.00 | PHP 201,223.01 | PHP 4,483,927.01 | Pass-through; amount blocked |
| Year 5 | PHP 600,000.00 | PHP 4,500,000.00 | PHP 846,720.00 | PHP 287,461.44 | PHP 6,234,181.44 | Pass-through; amount blocked |

### Stakeholder Summary

| Year | Rural Bank revenue after non-collection | Rural Bank incremental contribution before internal bank support cost | Rural Bank modernization cost | Rural Bank full-cost stress result | ODTI revenue including access | ODTI incremental contribution | ODTI total pre-tax/pre-royalty contribution | DevOps revenue | DevOps contribution before setup direct cost | SMS Provider revenue | Consolidated incremental contribution before blocked items |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 335,465.96 | PHP 335,465.96 | PHP 1,735,000.00 | PHP -1,399,534.04 | PHP 1,054,014.39 | PHP 140,014.39 | PHP 850,014.39 | PHP 920,000.00 | PHP 710,000.00 | PHP 8,048.92 | PHP 475,399.85 |
| Year 2 | PHP 802,875.29 | PHP 802,875.29 | PHP 3,440,000.00 | PHP -2,637,124.71 | PHP 1,959,179.08 | PHP 319,179.08 | PHP 1,559,179.08 | PHP 1,880,000.00 | PHP 1,240,000.00 | PHP 24,530.04 | PHP 1,121,809.08 |
| Year 3 | PHP 1,478,195.73 | PHP 1,478,195.73 | PHP 5,910,000.00 | PHP -4,431,804.27 | PHP 3,272,186.32 | PHP 578,186.32 | PHP 2,588,186.32 | PHP 3,270,000.00 | PHP 2,010,000.00 | PHP 48,293.52 | PHP 2,055,899.12 |
| Year 4 | PHP 2,380,499.55 | PHP 2,380,499.55 | PHP 9,150,000.00 | PHP -6,769,500.45 | PHP 4,978,903.87 | PHP 922,903.87 | PHP 3,922,903.87 | PHP 5,100,000.00 | PHP 3,000,000.00 | PHP 80,489.20 | PHP 3,302,598.53 |
| Year 5 | PHP 3,332,827.94 | PHP 3,332,827.94 | PHP 12,500,000.00 | PHP -9,167,172.06 | PHP 6,725,176.96 | PHP 1,285,176.96 | PHP 5,285,176.96 | PHP 7,000,000.00 | PHP 4,000,000.00 | PHP 114,984.58 | PHP 4,616,855.05 |

## Optional SMS Economics

SMS is optional and does not block the core Payroll Starter model.

Formula:

```text
Delivered SMS
= Annual successful payroll transactions
x ATT-001
x SMS-001
```

SMS customer-facing fee:

```text
Delivered SMS x VAS-001
```

SMS wholesale provider revenue:

```text
Delivered SMS x CST-001
```

The Level 1 baseline treats SMS provider wholesale cost as an external provider outflow. SMS provider internal margin is excluded because `SMS-002` is not authorized.

## Break-Even Results

### Rural Bank Incremental Break-Even

The model has no separate authorized Rural Bank internal payroll-support cost. Therefore the incremental Rural Bank contribution is shown before internal bank support cost.

This means the true Rural Bank incremental break-even remains blocked until a rural-bank payroll-support cost assumption exists. The visible Level 1 result is a contribution-before-bank-internal-cost view, not final Rural Bank profit.

### Rural Bank Full-Cost Stress-Test Break-Even

Monthly modernization cost includes:

```text
LIC-005 / 12
+
OPS-002
+
CLD-001
```

| Scenario | Monthly modernization cost | Monthly contribution per employer from `EMP-002` and transaction retention | Employers required to cover modernization cost | Transactions required if relying only on retained transaction economics |
| --- | ---: | ---: | ---: | ---: |
| Conservative | PHP 19,000.00 | PHP 177.99 | 106.7 | 50,000.0 |
| Base | PHP 18,000.00 | PHP 473.93 | 38.0 | 36,734.7 |
| Accelerated | PHP 17,500.00 | PHP 812.35 | 21.5 | 29,461.3 |

Interpretation: employer-level fees materially improve the Rural Bank economics, but full-cost stand-alone Payroll still requires far more employer density or transaction activity than the current candidates provide.

### ODTI Break-Even

| Scenario | ODTI monthly contribution per employer from monthly service and transactions | Employers required per active bank to cover payroll-specific support | Employer onboarding revenue per employer to ODTI after non-collection | Employers required to recover payroll-specific implementation cost |
| --- | ---: | ---: | ---: | ---: |
| Conservative | PHP 124.49 | 24.1 | PHP 855.00 | 23.4 |
| Base | PHP 359.86 | 6.9 | PHP 1,764.00 | 8.5 |
| Accelerated | PHP 657.99 | 3.0 | PHP 2,970.00 | 4.0 |

Interpretation: ODTI incremental support is covered only when employer density is sufficient. The Base candidate has four employers per active bank, below the 6.9 employer support break-even before activation/platform access revenue. ODTI total contribution becomes positive because activation and platform access are included in the total view, but that result remains pre-tax, pre-royalty, and NetBank-fee-blocked.

### DevOps Break-Even

| Scenario | Monthly DevOps revenue per active bank | Monthly DevOps direct cost per active bank | Monthly contribution per active bank |
| --- | ---: | ---: | ---: |
| Conservative | PHP 10,000.00 | PHP 8,000.00 | PHP 2,000.00 |
| Base | PHP 10,000.00 | PHP 6,000.00 | PHP 4,000.00 |
| Accelerated | PHP 10,000.00 | PHP 5,000.00 | PHP 5,000.00 |

DevOps setup revenue is included in the annual DevOps view, but setup direct cost remains unresolved. DevOps contribution is therefore before setup direct cost, overhead, tax, and escalation burden.

## Five-Year Revenue Summary

### Conservative

| Year | Rural Bank Revenue | ODTI Revenue | DevOps Revenue | SMS Provider Revenue | Consolidated External Revenue |
| --- | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 3,713.38 | PHP 124,415.90 | PHP 140,000.00 | PHP 23.18 | PHP 8,580.32 |
| Year 2 | PHP 9,870.19 | PHP 249,611.57 | PHP 330,000.00 | PHP 104.33 | PHP 20,611.44 |
| Year 3 | PHP 19,610.44 | PHP 427,296.99 | PHP 620,000.00 | PHP 243.43 | PHP 39,093.36 |
| Year 4 | PHP 30,360.75 | PHP 584,766.27 | PHP 920,000.00 | PHP 417.31 | PHP 58,445.76 |
| Year 5 | PHP 40,101.00 | PHP 762,451.70 | PHP 1,210,000.00 | PHP 556.42 | PHP 76,927.68 |

| Year | Rural Bank Incremental Contribution | ODTI Pre-Tax/Pre-Royalty Contribution | DevOps Contribution | Consolidated Contribution Before Blocked Items |
| --- | ---: | ---: | ---: | ---: |
| Year 1 | PHP 3,713.38 | PHP 72,415.90 | PHP 108,000.00 | PHP -43,871.88 |
| Year 2 | PHP 9,870.19 | PHP 135,611.57 | PHP 186,000.00 | PHP -94,523.46 |
| Year 3 | PHP 19,610.44 | PHP 221,296.99 | PHP 284,000.00 | PHP -169,104.74 |
| Year 4 | PHP 30,360.75 | PHP 288,766.27 | PHP 344,000.00 | PHP -240,893.84 |
| Year 5 | PHP 40,101.00 | PHP 374,451.70 | PHP 442,000.00 | PHP -315,475.12 |

### Base

| Year | Rural Bank Revenue | ODTI Revenue | DevOps Revenue | SMS Provider Revenue | Consolidated External Revenue |
| --- | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 52,894.13 | PHP 381,871.36 | PHP 400,000.00 | PHP 957.60 | PHP 112,963.20 |
| Year 2 | PHP 142,591.41 | PHP 759,999.74 | PHP 910,000.00 | PHP 3,575.04 | PHP 281,729.28 |
| Year 3 | PHP 256,958.82 | PHP 1,177,663.49 | PHP 1,520,000.00 | PHP 7,150.08 | PHP 491,458.56 |
| Year 4 | PHP 434,778.49 | PHP 1,845,565.95 | PHP 2,480,000.00 | PHP 12,640.32 | PHP 819,114.24 |
| Year 5 | PHP 673,688.06 | PHP 2,631,175.68 | PHP 3,700,000.00 | PHP 20,428.80 | PHP 1,249,881.60 |

| Year | Rural Bank Incremental Contribution | ODTI Pre-Tax/Pre-Royalty Contribution | DevOps Contribution | Consolidated Contribution Before Blocked Items |
| --- | ---: | ---: | ---: | ---: |
| Year 1 | PHP 52,894.13 | PHP 269,371.36 | PHP 310,000.00 | PHP -2,753.66 |
| Year 2 | PHP 142,591.41 | PHP 514,999.74 | PHP 574,000.00 | PHP 27,519.65 |
| Year 3 | PHP 256,958.82 | PHP 777,663.49 | PHP 848,000.00 | PHP 74,479.31 |
| Year 4 | PHP 434,778.49 | PHP 1,200,565.95 | PHP 1,292,000.00 | PHP 145,091.64 |
| Year 5 | PHP 673,688.06 | PHP 1,681,175.68 | PHP 1,780,000.00 | PHP 254,455.17 |

### Accelerated

| Year | Rural Bank Revenue | ODTI Revenue | DevOps Revenue | SMS Provider Revenue | Consolidated External Revenue |
| --- | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 335,465.96 | PHP 1,054,014.39 | PHP 920,000.00 | PHP 8,048.92 | PHP 694,392.70 |
| Year 2 | PHP 802,875.29 | PHP 1,959,179.08 | PHP 1,880,000.00 | PHP 24,530.04 | PHP 1,561,958.71 |
| Year 3 | PHP 1,478,195.73 | PHP 3,272,186.32 | PHP 3,270,000.00 | PHP 48,293.52 | PHP 2,816,356.20 |
| Year 4 | PHP 2,380,499.55 | PHP 4,978,903.87 | PHP 5,100,000.00 | PHP 80,489.20 | PHP 4,483,927.01 |
| Year 5 | PHP 3,332,827.94 | PHP 6,725,176.96 | PHP 7,000,000.00 | PHP 114,984.58 | PHP 6,234,181.44 |

| Year | Rural Bank Incremental Contribution | ODTI Pre-Tax/Pre-Royalty Contribution | DevOps Contribution | Consolidated Contribution Before Blocked Items |
| --- | ---: | ---: | ---: | ---: |
| Year 1 | PHP 335,465.96 | PHP 850,014.39 | PHP 710,000.00 | PHP 475,399.85 |
| Year 2 | PHP 802,875.29 | PHP 1,559,179.08 | PHP 1,240,000.00 | PHP 1,121,809.08 |
| Year 3 | PHP 1,478,195.73 | PHP 2,588,186.32 | PHP 2,010,000.00 | PHP 2,055,899.12 |
| Year 4 | PHP 2,380,499.55 | PHP 3,922,903.87 | PHP 3,000,000.00 | PHP 3,302,598.53 |
| Year 5 | PHP 3,332,827.94 | PHP 5,285,176.96 | PHP 4,000,000.00 | PHP 4,616,855.05 |

## Interpretation

The provisional numbers suggest:

- employer onboarding and employer monthly service fees materially improve Payroll Starter economics compared with transaction retention alone;
- the Base incremental consolidated view is weak in Year 1 but becomes positive from Year 2 before blocked tax, royalty, and NetBank items;
- the Conservative incremental view remains negative across five years at the current candidates;
- the Accelerated incremental view is positive across five years, but it depends on much higher adoption, employer density, completion, and lower unit costs;
- Rural Bank full-cost stand-alone Payroll remains deeply negative in all scenarios because modernization costs are much larger than payroll-only contribution;
- ODTI total contribution is positive when platform access revenue is included, but incremental Payroll support is still sensitive to employer density and support cost;
- DevOps recurring economics are positive before unresolved setup direct cost, overhead, tax, and on-call escalation burden;
- transaction fees remain secondary to employer-level fees in the Level 1 model;
- broader platform offerings remain necessary to justify the rural-bank-owned deployment unless employer density or pricing changes materially.

## Negative Or Weak Findings Preserved

The model intentionally preserves weak results:

- Conservative consolidated incremental contribution is negative every year.
- Base Year 1 consolidated incremental contribution is negative.
- Rural Bank full-cost stand-alone results are negative in every year and every scenario.
- Rural Bank contribution is before internal bank payroll-support cost because no canonical input is authorized for that cost.
- ODTI results are pre-tax, pre-royalty, and NetBank-fee-blocked.
- DevOps setup contribution remains unresolved because setup direct cost is not separately authorized.

These results should drive evidence gathering and commercial refinement rather than spreadsheet adjustment.

## Recommended Next Task

Produce a stakeholder-facing Five-Year Revenue Projection Summary derived from this controlled model, but only as a simplified provisional summary with the same warnings and blocked exclusions.
