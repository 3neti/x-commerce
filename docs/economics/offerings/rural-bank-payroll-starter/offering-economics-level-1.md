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

## Presentation Layers

This normalized model separates:

```text
Core Payroll Starter
```

from:

```text
Optional SMS Increment
```

and shows:

```text
Core Payroll Starter + SMS
```

only as a clearly labeled combined variant.

The primary five-year projection summary is the Core Payroll Starter view. SMS is optional and does not block the core Payroll economics.

## Non-Additive Stakeholder-Revenue Warning

> **Stakeholder revenue figures are entity-level views and include internal ecosystem transfers. They are not additive. Consolidated External Revenue counts external customer inflows once and eliminates internal transfers.**

This means:

```text
Rural Bank revenue
+
ODTI revenue
+
DevOps revenue
+
Provider revenue
does not equal
Consolidated external revenue
```

The consolidated external-revenue line is the proper measure of external commercial inflow.

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

## Employer Timing Terminology

Newly Onboarded Employer Relationships are employer relationships configured or established during the modeled year. They may generate employer onboarding fees, implementation activity, and configuration work. They do not automatically generate recurring payroll activity in the same period.

Active Employers are employers actually generating qualifying payroll activity during the modeled year. Recurring monthly payroll-service fees and recipient transaction activity are driven by Active Employers, not merely onboarded employers.

Timing rule:

> Employer onboarding revenue may occur before recurring payroll activity begins.

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

Core Payroll employer commercial fees are:

```text
EMP-001 employer onboarding fees
+
EMP-002 employer monthly payroll-service fees
+
PRC-001 recipient disbursement fees
```

Optional SMS fees are excluded from Core Payroll and shown separately.

Payroll funding value is pass-through and is not modeled as revenue. A payroll-value amount is blocked until a separate average payroll-value assumption exists.

## Blocked Exclusions

| Exclusion | Treatment |
| --- | --- |
| Rural Bank internal payroll-support cost | Blocked by `RB-002`; true Rural Bank incremental contribution is not produced. |
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

## Activity Tables

### Conservative

| Year | New banks | Cumulative banks | Active banks | Weighted months | Active employers | Newly onboarded employer relationships | `VOL-001` | Annual successful transactions |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | 2 | 2 | 1 | 4 | 2 | 4 | 36.8 | 147.2 |
| Year 2 | 3 | 5 | 3 | 6 | 6 | 6 | 36.8 | 662.4 |
| Year 3 | 4 | 9 | 6 | 7 | 12 | 8 | 36.8 | 1,545.6 |
| Year 4 | 4 | 13 | 9 | 8 | 18 | 8 | 36.8 | 2,649.6 |
| Year 5 | 5 | 18 | 12 | 8 | 24 | 10 | 36.8 | 3,532.8 |

### Base

| Year | New banks | Cumulative banks | Active banks | Weighted months | Active employers | Newly onboarded employer relationships | `VOL-001` | Annual successful transactions |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | 5 | 5 | 3 | 5 | 12 | 20 | 268.8 | 4,032.0 |
| Year 2 | 7 | 12 | 8 | 7 | 32 | 28 | 268.8 | 15,052.8 |
| Year 3 | 8 | 20 | 14 | 8 | 56 | 32 | 268.8 | 30,105.6 |
| Year 4 | 10 | 30 | 22 | 9 | 88 | 40 | 268.8 | 53,222.4 |
| Year 5 | 10 | 40 | 32 | 10 | 128 | 40 | 268.8 | 86,016.0 |

### Accelerated

| Year | New banks | Cumulative banks | Active banks | Weighted months | Active employers | Newly onboarded employer relationships | `VOL-001` | Annual successful transactions |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | 10 | 10 | 7 | 6 | 42 | 60 | 705.6 | 29,635.2 |
| Year 2 | 12 | 22 | 16 | 8 | 96 | 72 | 705.6 | 90,316.8 |
| Year 3 | 15 | 37 | 28 | 9 | 168 | 90 | 705.6 | 177,811.2 |
| Year 4 | 18 | 55 | 42 | 10 | 252 | 108 | 705.6 | 296,352.0 |
| Year 5 | 20 | 75 | 60 | 10 | 360 | 120 | 705.6 | 423,360.0 |

## Core Payroll Revenue Summary

**Stakeholder revenue figures are entity-level views and include internal ecosystem transfers. They are not additive. Consolidated External Revenue counts external customer inflows once and eliminates internal transfers.**

### Conservative

| Year | Rural Bank Core Revenue | ODTI Core Revenue Including Access | DevOps Revenue | Consolidated Core External Revenue |
| --- | ---: | ---: | ---: | ---: |
| Year 1 | PHP 3,703.94 | PHP 124,415.90 | PHP 140,000.00 | PHP 8,547.20 |
| Year 2 | PHP 9,827.71 | PHP 249,611.57 | PHP 330,000.00 | PHP 20,462.40 |
| Year 3 | PHP 19,511.33 | PHP 427,296.99 | PHP 620,000.00 | PHP 38,745.60 |
| Year 4 | PHP 30,190.85 | PHP 584,766.27 | PHP 920,000.00 | PHP 57,849.60 |
| Year 5 | PHP 39,874.46 | PHP 762,451.70 | PHP 1,210,000.00 | PHP 76,132.80 |

### Base

| Year | Rural Bank Core Revenue | ODTI Core Revenue Including Access | DevOps Revenue | Consolidated Core External Revenue |
| --- | ---: | ---: | ---: | ---: |
| Year 1 | PHP 51,955.68 | PHP 381,871.36 | PHP 400,000.00 | PHP 111,048.00 |
| Year 2 | PHP 139,087.87 | PHP 759,999.74 | PHP 910,000.00 | PHP 274,579.20 |
| Year 3 | PHP 249,951.74 | PHP 1,177,663.49 | PHP 1,520,000.00 | PHP 477,158.40 |
| Year 4 | PHP 422,390.98 | PHP 1,845,565.95 | PHP 2,480,000.00 | PHP 793,833.60 |
| Year 5 | PHP 653,667.84 | PHP 2,631,175.68 | PHP 3,700,000.00 | PHP 1,209,024.00 |

### Accelerated

| Year | Rural Bank Core Revenue | ODTI Core Revenue Including Access | DevOps Revenue | Consolidated Core External Revenue |
| --- | ---: | ---: | ---: | ---: |
| Year 1 | PHP 323,513.31 | PHP 1,054,014.39 | PHP 920,000.00 | PHP 674,270.40 |
| Year 2 | PHP 766,448.18 | PHP 1,959,179.08 | PHP 1,880,000.00 | PHP 1,500,633.60 |
| Year 3 | PHP 1,406,479.85 | PHP 3,272,186.32 | PHP 3,270,000.00 | PHP 2,695,622.40 |
| Year 4 | PHP 2,260,973.09 | PHP 4,978,903.87 | PHP 5,100,000.00 | PHP 4,282,704.00 |
| Year 5 | PHP 3,162,075.84 | PHP 6,725,176.96 | PHP 7,000,000.00 | PHP 5,946,720.00 |

## Core Payroll Contribution Summary

### Conservative

| Year | Rural Bank Contribution Before Internal Bank Payroll-Support Cost | ODTI Pre-Tax/Pre-Royalty/NetBank-Fee-Blocked Contribution | DevOps Contribution | Consolidated Core Contribution Before Blocked Items | Full-Cost Stand-Alone Stress Result |
| --- | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 3,703.94 | PHP 72,415.90 | PHP 108,000.00 | PHP -43,880.16 | PHP -272,296.06 |
| Year 2 | PHP 9,827.71 | PHP 135,611.57 | PHP 186,000.00 | PHP -94,560.72 | PHP -632,172.29 |
| Year 3 | PHP 19,511.33 | PHP 221,296.99 | PHP 284,000.00 | PHP -169,191.68 | PHP -1,178,488.67 |
| Year 4 | PHP 30,190.85 | PHP 288,766.27 | PHP 344,000.00 | PHP -241,042.88 | PHP -1,737,809.15 |
| Year 5 | PHP 39,874.46 | PHP 374,451.70 | PHP 442,000.00 | PHP -315,673.84 | PHP -2,284,125.54 |

### Base

| Year | Rural Bank Contribution Before Internal Bank Payroll-Support Cost | ODTI Pre-Tax/Pre-Royalty/NetBank-Fee-Blocked Contribution | DevOps Contribution | Consolidated Core Contribution Before Blocked Items | Full-Cost Stand-Alone Stress Result |
| --- | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 51,955.68 | PHP 269,371.36 | PHP 310,000.00 | PHP -3,672.96 | PHP -718,044.32 |
| Year 2 | PHP 139,087.87 | PHP 514,999.74 | PHP 574,000.00 | PHP 24,087.62 | PHP -1,568,912.13 |
| Year 3 | PHP 249,951.74 | PHP 777,663.49 | PHP 848,000.00 | PHP 67,615.23 | PHP -2,566,048.26 |
| Year 4 | PHP 422,390.98 | PHP 1,200,565.95 | PHP 1,292,000.00 | PHP 132,956.93 | PHP -4,141,609.02 |
| Year 5 | PHP 653,667.84 | PHP 1,681,175.68 | PHP 1,780,000.00 | PHP 234,843.52 | PHP -6,106,332.16 |

### Accelerated

| Year | Rural Bank Contribution Before Internal Bank Payroll-Support Cost | ODTI Pre-Tax/Pre-Royalty/NetBank-Fee-Blocked Contribution | DevOps Contribution | Consolidated Core Contribution Before Blocked Items | Full-Cost Stand-Alone Stress Result |
| --- | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 323,513.31 | PHP 850,014.39 | PHP 710,000.00 | PHP 463,527.70 | PHP -1,411,486.69 |
| Year 2 | PHP 766,448.18 | PHP 1,559,179.08 | PHP 1,240,000.00 | PHP 1,085,627.26 | PHP -2,673,551.82 |
| Year 3 | PHP 1,406,479.85 | PHP 2,588,186.32 | PHP 2,010,000.00 | PHP 1,984,666.18 | PHP -4,503,520.15 |
| Year 4 | PHP 2,260,973.09 | PHP 3,922,903.87 | PHP 3,000,000.00 | PHP 3,183,876.96 | PHP -6,889,026.91 |
| Year 5 | PHP 3,162,075.84 | PHP 5,285,176.96 | PHP 4,000,000.00 | PHP 4,447,252.80 | PHP -9,337,924.16 |

## Optional SMS Increment

SMS is an optional enhancement. It is not required for Core Payroll Starter economics.

**Stakeholder revenue figures are entity-level views and include internal ecosystem transfers. They are not additive. Consolidated External Revenue counts external customer inflows once and eliminates internal transfers.**

Formula:

```text
Delivered SMS
= Annual successful payroll transactions
x ATT-001
x SMS-001
```

The Level 1 baseline treats SMS provider wholesale cost as an external provider outflow. SMS provider internal margin is excluded because `SMS-002` is not authorized.

### Conservative SMS Increment

| Year | SMS-Attached Delivered Transactions | SMS Customer-Facing Revenue | Wholesale SMS Provider Cost | Rural Bank SMS Margin After Non-Collection | SMS Provider Revenue | Consolidated SMS Contribution |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | 33.1 | PHP 33.12 | PHP 23.18 | PHP 9.44 | PHP 23.18 | PHP 8.28 |
| Year 2 | 149.0 | PHP 149.04 | PHP 104.33 | PHP 42.48 | PHP 104.33 | PHP 37.26 |
| Year 3 | 347.8 | PHP 347.76 | PHP 243.43 | PHP 99.11 | PHP 243.43 | PHP 86.94 |
| Year 4 | 596.2 | PHP 596.16 | PHP 417.31 | PHP 169.91 | PHP 417.31 | PHP 149.04 |
| Year 5 | 794.9 | PHP 794.88 | PHP 556.42 | PHP 226.54 | PHP 556.42 | PHP 198.72 |

### Base SMS Increment

| Year | SMS-Attached Delivered Transactions | SMS Customer-Facing Revenue | Wholesale SMS Provider Cost | Rural Bank SMS Margin After Non-Collection | SMS Provider Revenue | Consolidated SMS Contribution |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | 1,915.2 | PHP 1,915.20 | PHP 957.60 | PHP 938.45 | PHP 957.60 | PHP 919.30 |
| Year 2 | 7,150.1 | PHP 7,150.08 | PHP 3,575.04 | PHP 3,503.54 | PHP 3,575.04 | PHP 3,432.04 |
| Year 3 | 14,300.2 | PHP 14,300.16 | PHP 7,150.08 | PHP 7,007.08 | PHP 7,150.08 | PHP 6,864.08 |
| Year 4 | 25,280.6 | PHP 25,280.64 | PHP 12,640.32 | PHP 12,387.51 | PHP 12,640.32 | PHP 12,134.71 |
| Year 5 | 40,857.6 | PHP 40,857.60 | PHP 20,428.80 | PHP 20,020.22 | PHP 20,428.80 | PHP 19,611.65 |

### Accelerated SMS Increment

| Year | SMS-Attached Delivered Transactions | SMS Customer-Facing Revenue | Wholesale SMS Provider Cost | Rural Bank SMS Margin After Non-Collection | SMS Provider Revenue | Consolidated SMS Contribution |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | 20,122.3 | PHP 20,122.30 | PHP 8,048.92 | PHP 11,952.65 | PHP 8,048.92 | PHP 11,872.16 |
| Year 2 | 61,325.1 | PHP 61,325.11 | PHP 24,530.04 | PHP 36,427.11 | PHP 24,530.04 | PHP 36,181.81 |
| Year 3 | 120,733.8 | PHP 120,733.80 | PHP 48,293.52 | PHP 71,715.88 | PHP 48,293.52 | PHP 71,232.94 |
| Year 4 | 201,223.0 | PHP 201,223.01 | PHP 80,489.20 | PHP 119,526.47 | PHP 80,489.20 | PHP 118,721.57 |
| Year 5 | 287,461.4 | PHP 287,461.44 | PHP 114,984.58 | PHP 170,752.10 | PHP 114,984.58 | PHP 169,602.25 |

## Combined Variant: Core Payroll Starter + SMS

The following tables are optional combined variants. They should not be treated as Core Payroll Starter headline outputs.

### Conservative Combined Variant

| Year | Combined External Revenue | Rural Bank Contribution Before Internal Bank Payroll-Support Cost | ODTI Contribution | DevOps Contribution | Combined Consolidated Contribution | Combined Full-Cost Stress Result |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 8,580.32 | PHP 3,713.38 | PHP 72,415.90 | PHP 108,000.00 | PHP -43,871.88 | PHP -272,286.62 |
| Year 2 | PHP 20,611.44 | PHP 9,870.19 | PHP 135,611.57 | PHP 186,000.00 | PHP -94,523.46 | PHP -632,129.81 |
| Year 3 | PHP 39,093.36 | PHP 19,610.44 | PHP 221,296.99 | PHP 284,000.00 | PHP -169,104.74 | PHP -1,178,389.56 |
| Year 4 | PHP 58,445.76 | PHP 30,360.75 | PHP 288,766.27 | PHP 344,000.00 | PHP -240,893.84 | PHP -1,737,639.25 |
| Year 5 | PHP 76,927.68 | PHP 40,101.00 | PHP 374,451.70 | PHP 442,000.00 | PHP -315,475.12 | PHP -2,283,899.00 |

### Base Combined Variant

| Year | Combined External Revenue | Rural Bank Contribution Before Internal Bank Payroll-Support Cost | ODTI Contribution | DevOps Contribution | Combined Consolidated Contribution | Combined Full-Cost Stress Result |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 112,963.20 | PHP 52,894.13 | PHP 269,371.36 | PHP 310,000.00 | PHP -2,753.66 | PHP -717,105.87 |
| Year 2 | PHP 281,729.28 | PHP 142,591.41 | PHP 514,999.74 | PHP 574,000.00 | PHP 27,519.65 | PHP -1,565,408.59 |
| Year 3 | PHP 491,458.56 | PHP 256,958.82 | PHP 777,663.49 | PHP 848,000.00 | PHP 74,479.31 | PHP -2,559,041.18 |
| Year 4 | PHP 819,114.24 | PHP 434,778.49 | PHP 1,200,565.95 | PHP 1,292,000.00 | PHP 145,091.64 | PHP -4,129,221.51 |
| Year 5 | PHP 1,249,881.60 | PHP 673,688.06 | PHP 1,681,175.68 | PHP 1,780,000.00 | PHP 254,455.17 | PHP -6,086,311.94 |

### Accelerated Combined Variant

| Year | Combined External Revenue | Rural Bank Contribution Before Internal Bank Payroll-Support Cost | ODTI Contribution | DevOps Contribution | Combined Consolidated Contribution | Combined Full-Cost Stress Result |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Year 1 | PHP 694,392.70 | PHP 335,465.96 | PHP 850,014.39 | PHP 710,000.00 | PHP 475,399.85 | PHP -1,399,534.04 |
| Year 2 | PHP 1,561,958.71 | PHP 802,875.29 | PHP 1,559,179.08 | PHP 1,240,000.00 | PHP 1,121,809.08 | PHP -2,637,124.71 |
| Year 3 | PHP 2,816,356.20 | PHP 1,478,195.73 | PHP 2,588,186.32 | PHP 2,010,000.00 | PHP 2,055,899.12 | PHP -4,431,804.27 |
| Year 4 | PHP 4,483,927.01 | PHP 2,380,499.55 | PHP 3,922,903.87 | PHP 3,000,000.00 | PHP 3,302,598.53 | PHP -6,769,500.45 |
| Year 5 | PHP 6,234,181.44 | PHP 3,332,827.94 | PHP 5,285,176.96 | PHP 4,000,000.00 | PHP 4,616,855.05 | PHP -9,167,172.06 |

## Break-Even Results

### Rural Bank Incremental Break-Even

The model has no authorized Rural Bank internal payroll-support cost. Therefore the Rural Bank line is:

```text
Rural Bank Contribution Before Internal Bank Payroll-Support Cost
```

The true Rural Bank incremental break-even remains blocked until `RB-002` is resolved. The visible Level 1 result is a contribution-before-bank-internal-cost view, not final Rural Bank profit.

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

## Interpretation

The provisional numbers suggest:

- employer onboarding and employer monthly service fees materially improve Payroll Starter economics compared with transaction retention alone;
- the Base Core Payroll consolidated view is weak in Year 1 but becomes positive from Year 2 before blocked Rural Bank internal support, tax, royalty, and NetBank items;
- the Conservative Core Payroll view remains negative across five years at the current candidates;
- the Accelerated Core Payroll view is positive across five years, but it depends on much higher adoption, employer density, completion, and lower unit costs;
- optional SMS improves the combined variant modestly, but it is not necessary to understand Core Payroll economics;
- Rural Bank full-cost stand-alone Payroll remains deeply negative in all scenarios because modernization costs are much larger than payroll-only contribution;
- ODTI total contribution is positive when platform access revenue is included, but incremental Payroll support is still sensitive to employer density and support cost;
- DevOps recurring economics are positive before unresolved setup direct cost, overhead, tax, and on-call escalation burden;
- transaction fees remain secondary to employer-level fees in the Level 1 model;
- broader platform offerings remain necessary to justify the rural-bank-owned deployment unless employer density or pricing changes materially.

## Negative Or Weak Findings Preserved

The model intentionally preserves weak results:

- Conservative Core Payroll consolidated contribution is negative every year.
- Base Core Payroll Year 1 consolidated contribution is negative.
- Rural Bank full-cost stand-alone results are negative in every year and every scenario.
- Rural Bank true contribution remains blocked by `RB-002`.
- ODTI results are pre-tax, pre-royalty, and NetBank-fee-blocked.
- DevOps setup contribution remains unresolved because setup direct cost is not separately authorized.

These results should drive evidence gathering and commercial refinement rather than spreadsheet adjustment.

## Reconciliation Controls

1. Employer Core Payroll fees are counted once as external inflows.
2. Employer SMS fees are counted once as optional external inflows.
3. Rural Bank-to-ODTI transfers eliminate.
4. Rural Bank-to-DevOps transfers eliminate.
5. Rural Bank or ODTI-to-SMS Provider transfers eliminate when the provider is inside the modeled boundary.
6. External carrier or messaging costs remain external outflows.
7. Payroll funding remains pass-through.
8. Derived margins and contributions are non-additive reporting outputs.
9. Tax, royalty, NetBank fees, investor return, and partner allocations remain blocked or excluded.

## Recommended Next Task

Produce a stakeholder-facing Five-Year Revenue Projection Summary derived from this normalized controlled model, preserving the same warnings and blocked exclusions.
