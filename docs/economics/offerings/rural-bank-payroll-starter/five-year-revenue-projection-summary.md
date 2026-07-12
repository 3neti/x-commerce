# Rural Bank Payroll Starter Five-Year Revenue Projection Summary

## Controlled Placeholder Model

Internal Stakeholder Discussion Draft

Offering: `OFR-RB-PAYROLL-STARTER`

Source model: [offering-economics-level-1.md](offering-economics-level-1.md)

Provisional inputs: [provisional-input-register-level-1.md](provisional-input-register-level-1.md)

Assumptions register: [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md)

Economic-treatment decision: [0003: Payroll Starter economic treatment](../../../decisions/0003-payroll-starter-economic-treatment.md)

## Required Warnings

> **This summary uses provisional management candidates and controlled placeholders. It is not a forecast, approved budget, provider quote, institutional commitment, investment representation, contract, or factual operating result.**

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

## Executive Summary

Payroll Starter is modeled as an incremental commercial offering operating on rural-bank-owned digital infrastructure.

Core Payroll is the primary projection. SMS is an optional enhancement and is shown separately.

The provisional model suggests:

- Conservative remains weak and never becomes positive on a consolidated Core Payroll basis.
- Base is slightly negative in Year 1 and becomes incrementally positive from Year 2 onward before blocked items.
- Accelerated is positive from Year 1 before blocked items.
- Full-cost stand-alone Payroll remains negative because shared modernization costs are too large for one payroll offering to carry at current candidate volumes.
- Employer onboarding and employer monthly payroll-service fees are the main revenue engine.
- Recipient transaction fees are secondary.
- Rural Bank true profitability remains incomplete because `RB-002` is blocked.
- ODTI results remain Pre-Tax, Pre-Royalty, and NetBank-Fee-Blocked.

## Revenue Architecture

The Level 1 model uses these commercial units:

```text
Rural Bank platform activation
+
Annual platform subscription
+
Employer onboarding
+
Employer monthly payroll service
+
Per-successful-recipient disbursement
+
Optional SMS
```

The employer funds payroll value. Payroll value remains pass-through and is not revenue.

Employer commercial fees create external revenue. Rural Bank-to-ODTI, Rural Bank-to-DevOps, and similar stakeholder payments are internal transfers for consolidation purposes.

## Scenario Summary

| Scenario | Year 1 active banks | Year 5 active banks | Year 1 active employers | Year 5 active employers | Year 1 successful payroll transactions | Year 5 successful payroll transactions | First year with positive Core consolidated contribution | Interpretation |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| Conservative | 1 | 12 | 2 | 24 | 147.2 | 3,532.8 | None | Too small to cover payroll-specific costs under current candidates. |
| Base | 3 | 32 | 12 | 128 | 4,032.0 | 86,016.0 | Year 2 | Plausible internal discussion case, but Year 1 remains weak. |
| Accelerated | 7 | 60 | 42 | 360 | 29,635.2 | 423,360.0 | Year 1 | Stronger scale case, dependent on faster adoption and larger employer portfolios. |

## Core Payroll Five-Year Revenue

SMS is excluded from this headline table.

| Scenario | Year | Consolidated Core External Revenue | Consolidated Core Contribution Before Blocked Items |
| --- | --- | ---: | ---: |
| Conservative | Year 1 | PHP 8,547.20 | PHP -43,880.16 |
| Conservative | Year 2 | PHP 20,462.40 | PHP -94,560.72 |
| Conservative | Year 3 | PHP 38,745.60 | PHP -169,191.68 |
| Conservative | Year 4 | PHP 57,849.60 | PHP -241,042.88 |
| Conservative | Year 5 | PHP 76,132.80 | PHP -315,673.84 |
| Base | Year 1 | PHP 111,048.00 | PHP -3,672.96 |
| Base | Year 2 | PHP 274,579.20 | PHP 24,087.62 |
| Base | Year 3 | PHP 477,158.40 | PHP 67,615.23 |
| Base | Year 4 | PHP 793,833.60 | PHP 132,956.93 |
| Base | Year 5 | PHP 1,209,024.00 | PHP 234,843.52 |
| Accelerated | Year 1 | PHP 674,270.40 | PHP 463,527.70 |
| Accelerated | Year 2 | PHP 1,500,633.60 | PHP 1,085,627.26 |
| Accelerated | Year 3 | PHP 2,695,622.40 | PHP 1,984,666.18 |
| Accelerated | Year 4 | PHP 4,282,704.00 | PHP 3,183,876.96 |
| Accelerated | Year 5 | PHP 5,946,720.00 | PHP 4,447,252.80 |

## Base Scenario Spotlight

The Base scenario is the most useful internal discussion case because it shows the transition from early weakness to incremental positive contribution.

| Year | Core External Revenue | Core Contribution Before Blocked Items |
| --- | ---: | ---: |
| Year 1 | PHP 111,048.00 | PHP -3,672.96 |
| Year 2 | PHP 274,579.20 | PHP 24,087.62 |
| Year 3 | PHP 477,158.40 | PHP 67,615.23 |
| Year 4 | PHP 793,833.60 | PHP 132,956.93 |
| Year 5 | PHP 1,209,024.00 | PHP 234,843.52 |

The main drivers are active employers, employer monthly payroll-service fees, and bank activation. Recipient transaction fees are present, but they are not the primary economics.

Unresolved items include Rural Bank internal payroll-support cost, tax, 3neti royalty, NetBank fees, provider contracts, and actual pilot performance.

## Rural Bank View

Rural Bank revenue in the Core Payroll model comes from:

- share of employer onboarding fees;
- share of employer monthly payroll-service fees;
- retained recipient-disbursement economics.

Optional SMS margin is shown separately.

| Scenario | Year 5 Core Rural Bank Revenue | Year 5 Rural Bank Contribution Before Internal Bank Payroll-Support Cost | Year 5 Full-Cost Stand-Alone Stress Result |
| --- | ---: | ---: | ---: |
| Conservative | PHP 39,874.46 | PHP 39,874.46 | PHP -2,284,125.54 |
| Base | PHP 653,667.84 | PHP 653,667.84 | PHP -6,106,332.16 |
| Accelerated | PHP 3,162,075.84 | PHP 3,162,075.84 | PHP -9,337,924.16 |

Rural Bank true incremental profitability remains blocked until `RB-002` is evidenced or provisionally authorized.

Interpretation:

- Payroll may be attractive incrementally.
- Payroll does not alone justify the full digital platform at current volumes.
- Modernization economics should be evaluated across multiple offerings.

## ODTI View

ODTI revenue includes:

- platform activation revenue;
- annual platform subscription revenue;
- ODTI share of employer onboarding;
- ODTI share of employer monthly payroll service;
- ODTI transaction-platform revenue.

| Scenario | Year 5 ODTI Core Revenue Including Access | Year 5 ODTI Pre-Tax/Pre-Royalty/NetBank-Fee-Blocked Contribution |
| --- | ---: | ---: |
| Conservative | PHP 762,451.70 | PHP 374,451.70 |
| Base | PHP 2,631,175.68 | PHP 1,681,175.68 |
| Accelerated | PHP 6,725,176.96 | PHP 5,285,176.96 |

Final ODTI economics are incomplete because tax, royalty, NetBank fees, and final legal/accounting treatment remain unresolved.

## DevOps Provider View

DevOps revenue includes setup and recurring managed-operations fees paid by the Rural Bank.

| Scenario | Year 5 Active Banks | Year 5 DevOps Revenue | Year 5 DevOps Contribution Before Setup Direct Cost, Overhead, Tax, And Escalation Burden |
| --- | ---: | ---: | ---: |
| Conservative | 12 | PHP 1,210,000.00 | PHP 442,000.00 |
| Base | 32 | PHP 3,700,000.00 | PHP 1,780,000.00 |
| Accelerated | 60 | PHP 7,000,000.00 | PHP 4,000,000.00 |

Cloud remains owned and paid by the rural bank. DevOps revenue is an internal ecosystem transfer in consolidation. Setup direct cost, staffing, overhead, escalation, and tax still require evidence.

## Optional SMS Increment

SMS improves the offering but is not the primary revenue engine.

Baseline provider-payment assumption: the wholesale SMS provider charge remains payable for qualifying SMS activity regardless of whether the employer's customer-facing SMS fee is collected.

| Scenario | Year 5 SMS-Attached Delivered Transactions | Year 5 SMS Customer-Facing Revenue | Year 5 Collected SMS Revenue | Year 5 Wholesale SMS Provider Cost | Year 5 Rural Bank SMS Margin | Year 5 Consolidated SMS Contribution |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Conservative | 794.9 | PHP 794.88 | PHP 755.14 | PHP 556.42 | PHP 198.72 | PHP 198.72 |
| Base | 40,857.6 | PHP 40,857.60 | PHP 40,040.45 | PHP 20,428.80 | PHP 19,611.65 | PHP 19,611.65 |
| Accelerated | 287,461.4 | PHP 287,461.44 | PHP 284,586.83 | PHP 114,984.58 | PHP 169,602.25 | PHP 169,602.25 |

Under the current baseline, Rural Bank SMS margin equals consolidated SMS contribution because no ODTI SMS allocation exists and the SMS wholesale cost is the external outflow.

Provider-payment terms remain subject to provider-contract evidence. Failed-message billing, retry billing, provider credits, refunds, and collection-contingent wholesale charges remain unresolved.

## Consolidated External Revenue

| Flow | Consolidation treatment |
| --- | --- |
| Employer commercial fees | External inflow |
| Rural Bank to ODTI | Internal transfer |
| Rural Bank to DevOps Provider | Internal transfer |
| Rural Bank to SMS Provider | Internal transfer when SMS Provider is inside the modeled boundary; provider outflow when treated outside the boundary |
| Payroll funding | Pass-through |

Consolidated external revenue counts employer commercial fees once and does not add internal stakeholder revenue columns together.

## What The Model Says

1. Employer-level recurring fees matter more than recipient transaction fees.
2. Payroll can become incrementally positive.
3. Payroll remains unattractive as the sole bearer of modernization costs.
4. ODTI can become viable under Base and Accelerated conditions before blocked items.
5. DevOps may be commercially attractive, subject to validating real delivery costs.
6. SMS is economically secondary.
7. Conservative conditions remain commercially difficult.
8. Broader multi-offering platform economics remain important.

## What The Model Does Not Yet Say

The model does not yet resolve:

- true Rural Bank net contribution after `RB-002`;
- tax-adjusted results;
- 3neti royalty;
- NetBank fees;
- investor return;
- business-development partner allocation;
- final provider contracts;
- actual pilot performance;
- actual bank and employer adoption;
- final legal and accounting treatment.

## Stakeholder Interpretation

### Rural Bank

The model shows potential incremental payroll revenue, employer relationships, and modernization capability. True profitability remains blocked until internal bank payroll-support cost is measured.

### ODTI

The model shows activation, recurring platform, employer-service, and transaction revenue before tax, royalty, and NetBank fees.

### 3neti

Future royalty or license economics remain blocked pending `ROY-001`.

### DevOps Provider

The model shows setup and recurring managed operations revenue, with direct recurring cost provisionally represented and setup direct cost still unresolved.

### Employer

The employer pays for a completed payroll outcome. Administrative burden reduction remains an evidence question, not a concluded value claim.

### RBAP

The model can help evaluate member capability development and a repeatable modernization approach, but it is not a member-bank forecast.

### Investor

The model demonstrates traceable commercial architecture. It is not an approved investment projection.

### Regulator And Public Interest

The model separates pass-through payroll value from revenue, identifies internal transfers, and preserves blocked legal, tax, accounting, and NetBank items.

## Next Step

Create stakeholder-specific financial briefs derived from the same normalized Level 1 model. Do not create separate numbers for each brief.
