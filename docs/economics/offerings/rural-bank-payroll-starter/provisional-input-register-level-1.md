# Provisional Input Register: Payroll Starter Level 1

## Status

Offering: `OFR-RB-PAYROLL-STARTER`

Model: Payroll Starter Offering Economics - Controlled Placeholder Model

Authorization status: Draft internal authorization.

Permitted use: internal Level 1 commercial-model testing only.

Prohibited use: contracts, customer proposals, provider commitments, regulatory filings, investor materials, public forecasts, approved budgets, or factual operating claims.

This register records provisional inputs for the first Level 1 numeric model. It does not change the current status of any canonical assumption in [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md).

## Standard Warning

> This input is provisional and is used only to test commercial-model structure, scenario behavior, affordability, or sensitivity. It is not an approved price, provider quote, institutional commitment, contract, factual operating result, budget, or forecast unless explicitly stated otherwise.

Every output using this register must be labeled:

```text
Controlled Placeholder Model
Provisional
Non-Forecast
Not Investment-Grade
Not Contract-Grade
```

## Approval Basis

Approving authority: x-commerce internal architecture model, pending formal management sign-off.

Source: [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md), [economic-coherence-review.md](economic-coherence-review.md), and [Decision 0003](../../../decisions/0003-payroll-starter-economic-treatment.md).

Evidence limitation: internal management candidates only unless a row explicitly states otherwise.

Expiry or review trigger: expires when replaced by provider quote, employer evidence, rural-bank evidence, ODTI/3neti management decision, NetBank proposal, tax/accounting/legal review, or observed pilot data.

## Calculation Method Controls

| Control | Selected Level 1 treatment |
| --- | --- |
| Economic view | Payroll Starter is primarily modeled as incremental payroll economics on a rural-bank-owned digital platform. |
| Modernization costs | Shown separately in the Rural Bank Modernization Portfolio view. |
| Stress test | Full-cost stand-alone Payroll remains visible and may remain negative. |
| Volume method | Component-derived. `VOL-001 = CUS-001 x CUS-002 x CUS-003 x VOL-002`. |
| `VOL-001` authorization | Not independently authorized. It is calculated from component inputs. |
| Revenue split source | [Decision 0003](../../../decisions/0003-payroll-starter-economic-treatment.md). |
| Tax | Blocked by `TAX-001`; excluded from Level 1 net results. |
| 3neti royalty | Blocked by `ROY-001`; excluded from Level 1 net results. |
| NetBank fee | Blocked by `NET-001`; excluded from Level 1 net results. |
| Investor return | Excluded. |
| Business-development allocation | Excluded until `PAR-001` and attribution are approved. |

## Provisional Inputs

### Adoption And Activity

| Provisional Input ID | Assumption ID | Assumption role | Conservative | Base | Accelerated | Unit | Input classification | Status |
| --- | --- | --- | ---: | ---: | ---: | --- | --- | --- |
| `PI-L1-001` | `ADP-001` | Primitive input | Y1 2; Y2 3; Y3 4; Y4 4; Y5 5 | Y1 5; Y2 7; Y3 8; Y4 10; Y5 10 | Y1 10; Y2 12; Y3 15; Y4 18; Y5 20 | Newly onboarded banks during year | Controlled placeholder | Draft internal authorization |
| `PI-L1-002` | `ADP-002` | Primitive input | Y1 1; Y2 3; Y3 6; Y4 9; Y5 12 | Y1 3; Y2 8; Y3 14; Y4 22; Y5 32 | Y1 7; Y2 16; Y3 28; Y4 42; Y5 60 | Active banks during year | Controlled placeholder | Draft internal authorization |
| `PI-L1-003` | `ADP-003` | Primitive input | Y1 4; Y2 6; Y3 7; Y4 8; Y5 8 | Y1 5; Y2 7; Y3 8; Y4 9; Y5 10 | Y1 6; Y2 8; Y3 9; Y4 10; Y5 10 | Weighted average active months per active bank | Controlled placeholder | Draft internal authorization |
| `PI-L1-004` | `CUS-001` | Primitive input | 2 | 4 | 6 | Payroll customers per active bank | Controlled placeholder | Draft internal authorization |
| `PI-L1-005` | `CUS-002` | Primitive input | 1 | 2 | 2 | Payroll runs per customer per month | Controlled placeholder | Draft internal authorization |
| `PI-L1-006` | `CUS-003` | Primitive input | 20 | 35 | 60 | Recipients per payroll run | Controlled placeholder | Draft internal authorization |
| `PI-L1-007` | `VOL-002` | Primitive input | 92% | 96% | 98% | Successful completion rate | Controlled placeholder | Draft internal authorization |
| `PI-L1-008` | `VOL-001` | Derived input | 36.8 | 268.8 | 705.6 | Successful payroll transactions per active bank per month | Derived from `PI-L1-004` through `PI-L1-007` | Draft internal authorization as derived value only |

### Commercial Pricing And Splits

| Provisional Input ID | Assumption ID or source | Conservative | Base | Accelerated | Unit | Input classification | Status |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| `PI-L1-009` | `EMP-001` | PHP 1,500 | PHP 3,000 | PHP 5,000 | Employer onboarding fee per newly onboarded employer | Controlled placeholder | Draft internal authorization |
| `PI-L1-010` | `EMP-002` | PHP 300 | PHP 750 | PHP 1,250 | Employer monthly payroll-service fee per active employer | Controlled placeholder | Draft internal authorization |
| `PI-L1-011` | `LIC-004` | PHP 50,000 | PHP 50,000 | PHP 50,000 | Rural-bank platform activation fee | Active working assumption used provisionally | Draft internal authorization |
| `PI-L1-012` | `LIC-005` | PHP 60,000 | PHP 60,000 | PHP 60,000 | Annual platform subscription per active bank | Active working assumption used provisionally | Draft internal authorization |
| `PI-L1-013` | `PRC-001` | PHP 1.00 | PHP 1.50 | PHP 2.00 | Fee per successful recipient disbursement | Active working assumption used provisionally | Draft internal authorization |
| `PI-L1-014` | `RB-001` | PHP 0.40 | PHP 0.50 | PHP 0.60 | Rural-bank retained amount per successful recipient disbursement | Controlled placeholder | Draft internal authorization |
| `PI-L1-015` | Decision 0003 | 40% Rural Bank / 60% ODTI | 40% Rural Bank / 60% ODTI | 40% Rural Bank / 60% ODTI | `EMP-001` split | Controlled placeholder | Draft internal authorization |
| `PI-L1-016` | Decision 0003 | 60% Rural Bank / 40% ODTI | 60% Rural Bank / 40% ODTI | 60% Rural Bank / 40% ODTI | `EMP-002` split | Controlled placeholder | Draft internal authorization |

### ODTI, DevOps, Cloud, And Risk

| Provisional Input ID | Assumption ID | Conservative | Base | Accelerated | Unit | Input classification | Status |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| `PI-L1-017` | `ODTI-001` | PHP 3,000 | PHP 2,500 | PHP 2,000 | Payroll-specific ODTI support cost per active bank-month | Controlled placeholder | Draft internal authorization |
| `PI-L1-018` | `ODTI-002` | PHP 20,000 | PHP 15,000 | PHP 12,000 | Payroll-specific ODTI implementation cost per newly onboarded bank | Controlled placeholder | Draft internal authorization |
| `PI-L1-019` | `OPS-001` | PHP 50,000 | PHP 50,000 | PHP 50,000 | DevOps setup fee per bank deployment | Active working assumption used provisionally | Draft internal authorization |
| `PI-L1-020` | `OPS-002` | PHP 10,000 | PHP 10,000 | PHP 10,000 | DevOps monthly managed operations fee per active bank-month | Active working assumption used provisionally | Draft internal authorization |
| `PI-L1-021` | `OPS-003` | PHP 8,000 | PHP 6,000 | PHP 5,000 | DevOps direct recurring cost per active bank-month | Controlled placeholder | Draft internal authorization |
| `PI-L1-022` | `CLD-001` | PHP 4,000 | PHP 3,000 | PHP 2,500 | Public-cloud cost per active bank-month | Controlled placeholder | Draft internal authorization |
| `PI-L1-023` | `RISK-002` | 5% | 2% | 1% | Non-collection rate on employer commercial fees | Controlled placeholder | Draft internal authorization |

### Optional SMS Variant

| Provisional Input ID | Assumption ID or source | Conservative | Base | Accelerated | Unit | Input classification | Status |
| --- | --- | ---: | ---: | ---: | --- | --- | --- |
| `PI-L1-024` | `ATT-001` | 25% | 50% | 70% | SMS attachment rate on successful payroll transactions | Controlled placeholder | Draft internal authorization |
| `PI-L1-025` | `VAS-001` | PHP 1.00 | PHP 1.00 | PHP 1.00 | Customer-facing SMS price | Active working assumption used provisionally | Draft internal authorization |
| `PI-L1-026` | `CST-001` | PHP 0.70 | PHP 0.50 | PHP 0.40 | SMS wholesale provider price | Controlled placeholder | Draft internal authorization |
| `PI-L1-027` | `SMS-001` | 90% | 95% | 97% | SMS delivery success rate | Controlled placeholder | Draft internal authorization |
| `PI-L1-028` | `SMS-003` | Delivered-only billing; failed attempts excluded | Delivered-only billing; failed attempts excluded | Delivered-only billing; failed attempts excluded | Failed-message treatment | Controlled placeholder | Draft internal authorization |
| `PI-L1-029` | `SMS-004` | Internal modeling only; no external SMS use until privacy review | Internal modeling only; no external SMS use until privacy review | Internal modeling only; no external SMS use until privacy review | Privacy and consent readiness | Controlled placeholder for model warning only | Draft internal authorization |
| `PI-L1-030` | Decision 0003 | Rural Bank retains gross SMS margin; ODTI markup is 0 | Rural Bank retains gross SMS margin; ODTI markup is 0 | Rural Bank retains gross SMS margin; ODTI markup is 0 | SMS margin split | Controlled placeholder | Draft internal authorization |

## Blocked Inputs Not Authorized In Level 1

| Assumption ID | Treatment |
| --- | --- |
| `TAX-001` | Blocked. No tax-adjusted results are produced. |
| `ROY-001` | Blocked. No 3neti royalty revenue or ODTI post-royalty contribution is produced. |
| `NET-001` | Blocked. No NetBank fee-adjusted results are produced. |
| `NET-002` | Blocked. No NetBank cost or contribution view is produced. |
| `PAR-001` | Excluded. No business-development partner allocation is included. |
| `SMS-002` | Excluded. SMS provider internal margin is not calculated. |
| `BAT-001` | Deferred candidate concept. No payroll batch fee is included. |
| `ALLOC-001`, `ALLOC-002`, `PLT-001` | Deferred until shared platform allocation is mature enough to govern. |

## Output Conditions

Every Level 1 output must:

- cite this register;
- cite the canonical assumption IDs;
- display the standard warning;
- label the model provisional, non-forecast, not investment-grade, and not contract-grade;
- state that formal management sign-off remains pending;
- show tax, royalty, and NetBank exclusions;
- keep payroll funding value as pass-through;
- keep incremental and modernization views separate;
- preserve negative full-cost stress-test results where produced.
