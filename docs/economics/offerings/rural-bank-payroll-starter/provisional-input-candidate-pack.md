# Provisional-Input Candidate Pack: Rural Bank Payroll Starter

## Status

Status: Internal candidate pack.

Approval status: Not authorized.

Model maturity target: Level 1.

Offering: `OFR-RB-PAYROLL-STARTER`.

This document proposes candidate inputs for internal review. It does not authorize values, change assumption statuses, create a forecast, create a spreadsheet, approve pricing, approve provider fees, approve taxes, approve royalties, resolve NetBank fees, or produce a numeric model.

Economic-coherence review: [economic-coherence-review.md](economic-coherence-review.md).

Authorization warning: this candidate pack should not be authorized until the economic-coherence and cost-allocation findings are reviewed.

## Standard Provisional Warning

> This input is provisional and is used only to test commercial-model structure, scenario behavior, affordability, or sensitivity. It is not an approved price, provider quote, institutional commitment, contract, factual operating result, budget, or forecast unless explicitly stated otherwise.

Any Level 1 output using one or more provisional inputs must also be labeled:

```text
Controlled Placeholder Model
Provisional
Non-Forecast
Not Investment-Grade
Not Contract-Grade
```

## Purpose

This candidate pack answers:

```text
What is the smallest coherent set of provisional inputs needed to calculate the first controlled Payroll Starter Offering Economics model, and what rationale supports each proposed input?
```

The pack does not decide whether any candidate should be approved. That decision belongs in the controlled-placeholder authorization worksheet.

## Model Target

Initial target:

```text
Payroll Starter Offering Economics
Pre-Tax
Pre-Royalty
NetBank-Fee-Blocked
Controlled Placeholder Model
```

This target may show partial economics while explicitly blocking unresolved outputs. It must not imply final profitability.

## Minimum Honest Model

### May Include

- bank adoption and activation;
- payroll activity;
- employer customer-facing fees;
- rural-bank retained economics;
- ODTI activation, subscription, and transaction economics;
- ODTI support and implementation costs;
- DevOps setup and recurring economics;
- cloud external cost;
- optional SMS economics;
- bad debt or collection effect;
- consolidated external inflows and outflows;
- pass-through payroll value shown separately;
- stakeholder contribution before unresolved exclusions.

### Must Remain Blocked Or Excluded

- final tax-adjusted results;
- 3neti royalty-adjusted net economics;
- NetBank fee-adjusted net economics;
- investor return;
- business-development partner allocation;
- final legal or accounting conclusions;
- KYC, email, rider, and other deferred capabilities.

Interpretation:

- `Pre-Tax` means gross economics before unresolved taxes and withholding. Tax-adjusted totals remain blocked and are not comparable to final net income.
- `Pre-Royalty` means ODTI results before unresolved 3neti royalty or license consideration. 3neti income remains blocked, and entity-specific results are incomplete.
- `NetBank-Fee-Blocked` means NetBank is structurally represented, but NetBank fee expense and income remain excluded or separately blocked. Rural Bank and ODTI economics are overstated until the fee basis is resolved.

## Candidate Treatment Vocabulary

Use one proposed treatment for each candidate:

- `Existing Active working assumption`;
- `Evidence-supported Active candidate`;
- `Management-estimate candidate`;
- `Stakeholder-evidence candidate`;
- `Provider-quote candidate`;
- `Controlled-placeholder candidate`;
- `Sensitivity-only candidate`;
- `Derived input`;
- `Remain blocked`;
- `Not required for initial Level 1 model`.

Treatment is not authorization.

## Assumption Roles

Use one `Assumption role` value:

- `Primitive input`;
- `Derived input`;
- `Validation-only input`.

Derived canonical assumptions must not receive independent provisional values when their component assumptions are used to derive them in the same model.

## Volume Method

Selected candidate method: `Component-derived`.

Preferred formula:

```text
CUS-001
x CUS-002
x CUS-003
x VOL-002
= VOL-001
```

Under this method:

- `CUS-001`, `CUS-002`, `CUS-003`, and `VOL-002` are primitive inputs;
- `VOL-001` is a derived input;
- `VOL-001` must not receive an independent provisional value;
- independent bank estimates of monthly payroll transactions per active bank may be used only as validation-only inputs;
- all stakeholder views must consume the same derived `VOL-001`.

If a validation-only aggregate materially conflicts with the component-derived result, the model must stop and record the discrepancy. It must not average the two values or select one silently.

## Recommended First-Model Boundary

### Included Internal Stakeholders

- Rural Bank;
- ODTI;
- DevOps Provider;
- optional SMS Provider.

### Structurally Present But Financially Blocked

- 3neti;
- NetBank.

### External Participants

- Employer;
- recipient;
- cloud provider;
- tax authorities;
- other external vendors.

### Excluded Operational Participant

- Business Development Partner.

Boundary effect:

- Rural Bank-to-ODTI and Rural Bank-to-DevOps lines remain internal eliminations.
- Employer-paid fees remain external inflows.
- Payroll funding remains pass-through.
- Cloud cost remains an external outflow.
- NetBank fee lines remain blocked.
- 3neti royalty lines remain blocked.
- Business-development allocations remain outside the baseline.

## Scenario Coherence

`Conservative`, `Base`, and `Accelerated` should describe coherent operating states, not mechanical low, medium, and high values.

Conservative may imply fewer active banks, later activation, fewer payroll customers per bank, smaller employers, lower completion, higher support cost, higher cloud or DevOps cost per bank, higher bad debt, and lower SMS attachment.

Base may imply moderate onboarding, ordinary activation timing, realistic payroll activity, manageable support, current working prices, moderate SMS attachment, and expected collection.

Accelerated may imply more active banks, earlier activation, more employer customers, larger payroll populations, possible unit-cost efficiencies, higher total support load, stronger SMS attachment, and lower churn or non-collection where justified.

Some prices may remain fixed across scenarios until pricing evidence or management decisions justify variation.

## Candidate Authority

Every candidate value in this pack has the same authority unless explicitly stated otherwise:

```text
Source: Internal architecture and management scenario design
Evidence status: Not evidence-supported
Authorization status: Not authorized
```

Each candidate exists only to test model structure, inspect scenario behavior, expose break-even relationships, identify unreasonable assumptions, and prepare authorization review.

## Core Versus Optional SMS Variant

### Core Payroll Starter Model

The smallest honest core model requires:

- adoption;
- activation timing;
- employer and payroll activity;
- completion rate;
- activation fee;
- annual platform subscription;
- transaction fee;
- rural-bank retained economics;
- ODTI implementation and support costs;
- DevOps setup, recurring fee, and direct cost;
- cloud cost;
- bad debt or collection haircut.

The core model must remain calculable without SMS.

### Optional SMS Variant

SMS is an optional attachment view. It uses:

- `ATT-001`;
- `VAS-001`;
- `CST-001`;
- `SMS-001`;
- `SMS-003`;
- `SMS-004`;
- `SMS-002` only if provider internal margin is modeled.

Missing SMS evidence must not block the core Payroll Starter model. SMS should be presented as a separate optional scenario or attachment view.

## Adoption Definitions And Cohort Logic

`ADP-001` means newly onboarded rural banks during the modeled year. It is not a cumulative year-end count.

`ADP-002` means participating rural banks that generate qualifying payroll activity during the modeled year.

Constraint:

```text
Active banks <= cumulative onboarded banks available by that point
```

`ADP-003` means weighted average active operating months contributed by active banks during the modeled year. It accounts for banks activating at different times.

Intended relationship:

```text
Beginning active banks
+
newly activated banks
-
churned or inactive banks
=
active banks during or at the end of the year
```

The first candidate pack uses this annual activity convention:

```text
Annual successful payroll activity
=
ADP-002
x ADP-003
x VOL-001
```

where:

- `ADP-002` is active banks;
- `ADP-003` is weighted average active months per active bank;
- `VOL-001` is successful payroll transactions per active bank per month.

The candidate pack does not double count newly onboarded cohorts.

## Candidate Summary Tables

Every row below is:

```text
Internal management candidate
Not authorized
Not evidence-supported
```

### Adoption And Activity

| Assumption ID | Conservative | Base | Accelerated | Unit | Treatment | Status |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `ADP-001` | Year 1: 2; Year 2: 3; Year 3: 4; Year 4: 4; Year 5: 5 | Year 1: 5; Year 2: 7; Year 3: 8; Year 4: 10; Year 5: 10 | Year 1: 10; Year 2: 12; Year 3: 15; Year 4: 18; Year 5: 20 | Newly onboarded banks during year | Controlled-placeholder candidate | Internal management candidate - not authorized |
| `ADP-002` | Year 1: 1; Year 2: 3; Year 3: 6; Year 4: 9; Year 5: 12 | Year 1: 3; Year 2: 8; Year 3: 14; Year 4: 22; Year 5: 32 | Year 1: 7; Year 2: 16; Year 3: 28; Year 4: 42; Year 5: 60 | Active banks during year | Controlled-placeholder candidate | Internal management candidate - not authorized |
| `ADP-003` | Year 1: 4; Year 2: 6; Year 3: 7; Year 4: 8; Year 5: 8 | Year 1: 5; Year 2: 7; Year 3: 8; Year 4: 9; Year 5: 10 | Year 1: 6; Year 2: 8; Year 3: 9; Year 4: 10; Year 5: 10 | Weighted average active months per active bank | Controlled-placeholder candidate | Internal management candidate - not authorized |
| `CUS-001` | 2 | 4 | 6 | Payroll customers per active bank | Stakeholder-evidence candidate | Internal management candidate - not authorized |
| `CUS-002` | 1 | 2 | 2 | Payroll runs per customer per month | Stakeholder-evidence candidate | Internal management candidate - not authorized |
| `CUS-003` | 20 | 35 | 60 | Recipients per payroll run | Stakeholder-evidence candidate | Internal management candidate - not authorized |
| `VOL-002` | 92% | 96% | 98% | Successful completion rate | Controlled-placeholder candidate | Internal management candidate - not authorized |

### Pricing And Retained Economics

| Assumption ID | Conservative | Base | Accelerated | Unit | Treatment | Status |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `LIC-004` | PHP 50,000 | PHP 50,000 | PHP 50,000 | Activation fee per rural bank | Existing Active working assumption | Provisional, not approved |
| `LIC-005` | PHP 60,000 | PHP 60,000 | PHP 60,000 | Annual platform subscription per rural bank | Existing Active working assumption | Provisional, not approved |
| `PRC-001` | PHP 1.00 | PHP 1.50 | PHP 2.00 | Customer-facing fee per successful disbursement | Existing Active working assumption | Provisional, not approved |
| `RB-001` | PHP 0.40 | PHP 0.50 | PHP 0.60 | Fixed rural-bank retained amount per successful disbursement | Controlled-placeholder candidate | Internal management candidate - not authorized |

Candidate transaction split:

| Scenario | PRC-001 customer-facing fee | RB-001 retained amount | Candidate ODTI transaction-platform amount before other allocations |
| --- | ---: | ---: | ---: |
| Conservative | PHP 1.00 | PHP 0.40 | PHP 0.60 |
| Base | PHP 1.50 | PHP 0.50 | PHP 1.00 |
| Accelerated | PHP 2.00 | PHP 0.60 | PHP 1.40 |

Invariant for fixed retained amount:

```text
RB-001 <= PRC-001
```

### ODTI Costs

| Assumption ID | Conservative | Base | Accelerated | Unit | Treatment | Status |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `ODTI-001` | PHP 8,000 | PHP 6,000 | PHP 5,000 | ODTI support cost per active bank per month | Management-estimate candidate | Internal management candidate - not authorized |
| `ODTI-002` | PHP 35,000 | PHP 25,000 | PHP 20,000 | ODTI implementation cost per newly onboarded bank | Management-estimate candidate | Internal management candidate - not authorized |

These costs exclude DevOps setup, DevOps managed operations, public-cloud cost, NetBank cost, provider cost, tax, royalty, and business-development allocation.

### DevOps And Cloud

| Assumption ID | Conservative | Base | Accelerated | Unit | Treatment | Status |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `OPS-001` | PHP 50,000 | PHP 50,000 | PHP 50,000 | DevOps setup fee per bank deployment | Existing Active working assumption | Provisional, not approved |
| `OPS-002` | PHP 10,000 | PHP 10,000 | PHP 10,000 | DevOps monthly managed-operations fee per bank | Existing Active working assumption | Provisional, not approved |
| `OPS-003` | PHP 8,000 | PHP 6,000 | PHP 5,000 | DevOps direct engineering and tooling cost per bank per month | Provider-quote candidate | Internal management candidate - not authorized |
| `CLD-001` | PHP 4,000 | PHP 3,000 | PHP 2,500 | External cloud cost per bank per month | Provider-quote candidate | Internal management candidate - not authorized |

Baseline distinction:

```text
OPS-003 excludes CLD-001
```

Under the baseline model, the rural bank owns and pays the cloud account. `CLD-001` is therefore a Rural Bank external outflow, not DevOps Provider revenue and not automatically a DevOps Provider cost.

### Risk And Collection

| Assumption ID | Conservative | Base | Accelerated | Unit | Treatment | Status |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `RISK-002` | 5% | 2% | 1% | Non-collection rate on eligible invoiced commercial fees | Management-estimate candidate | Internal management candidate - not authorized |
| `RISK-001` | 10% | 5% | 3% | Annual active-bank churn or inactivity rate for sensitivity | Controlled-placeholder candidate | Internal management candidate - not authorized |
| `COL-001` | 45 | 30 | 15 | Collection days for cash-flow timing | Controlled-placeholder candidate | Internal management candidate - not authorized |

`RISK-002` applies only to eligible invoiced commercial revenue. It does not apply to payroll funding, recipient value, settlement balances, or other pass-through amounts.

### Optional SMS Variant

| Assumption ID | Conservative | Base | Accelerated | Unit | Treatment | Status |
| --- | ---: | ---: | ---: | --- | --- | --- |
| `ATT-001` | 25% | 50% | 70% | SMS attachment rate on qualifying payroll transactions | Controlled-placeholder candidate | Internal management candidate - not authorized |
| `VAS-001` | PHP 1.00 | PHP 1.00 | PHP 1.00 | Customer-facing SMS price | Existing Active working assumption | Provisional, not approved |
| `CST-001` | PHP 0.70 | PHP 0.50 | PHP 0.40 | SMS wholesale provider price | Provider-quote candidate | Internal management candidate - not authorized; requires provider evidence before external use |
| `SMS-001` | 90% | 95% | 97% | SMS delivery success rate | Stakeholder-evidence candidate | Internal management candidate - not authorized |
| `SMS-003` | Delivered-only billing; failed attempts excluded | Delivered-only billing; failed attempts excluded | Delivered-only billing; failed attempts excluded | Failed-message billing treatment | Stakeholder-evidence candidate | Internal management candidate - not authorized |
| `SMS-004` | Internal modeling only; no external SMS use until privacy review | Internal modeling only; no external SMS use until privacy review | Internal modeling only; no external SMS use until privacy review | Consent and privacy readiness treatment | Remain blocked for external use | Internal management candidate - not authorized |

SMS provider internal margin remains excluded unless `SMS-002` is later evidenced or authorized.

## Derived Candidates

### `VOL-001` Candidate

Volume method: `Component-derived`.

Formula:

```text
VOL-001
= CUS-001
x CUS-002
x CUS-003
x VOL-002
```

| Scenario | CUS-001 | CUS-002 | CUS-003 | VOL-002 | VOL-001 calculated candidate |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | 2 | 1 | 20 | 92% | 36.8 |
| Base | 4 | 2 | 35 | 96% | 268.8 |
| Accelerated | 6 | 2 | 60 | 98% | 705.6 |

Status:

```text
Calculated candidate - not authorized
Not independently proposed
Not evidence-supported
```

Formula provenance: `CUS-001`, `CUS-002`, `CUS-003`, and `VOL-002`.

### Annual Activity Candidate Illustration

Label:

```text
Candidate activity illustration - not authorized and not a forecast
```

Formula:

```text
Annual successful payroll transactions
= ADP-002
x ADP-003
x VOL-001
```

| Scenario | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | 147.2 | 662.4 | 1,545.6 | 2,649.6 | 3,532.8 |
| Base | 4,032.0 | 15,052.8 | 30,105.6 | 53,222.4 | 86,016.0 |
| Accelerated | 29,635.2 | 90,316.8 | 177,811.2 | 296,352.0 | 423,360.0 |

This table checks volume coherence only. It is not a revenue projection, forecast, commitment, or approved operating plan.

## Candidate Records

### `ADP-001` Banks Onboarded By Year

```text
Assumption ID: ADP-001
Assumption name: Banks Onboarded By Year
Priority: P0
Assumption role: Primitive input
Calculation method: Direct scenario input
Current status: Blocked
Evidence status: Open
Proposed treatment: Controlled-placeholder candidate
Candidate Conservative value or range: Year 1: 2; Year 2: 3; Year 3: 4; Year 4: 4; Year 5: 5
Candidate Base value or range: Year 1: 5; Year 2: 7; Year 3: 8; Year 4: 10; Year 5: 10
Candidate Accelerated value or range: Year 1: 10; Year 2: 12; Year 3: 15; Year 4: 18; Year 5: 20
Unit: Newly onboarded banks during the modeled year
Range interpretation: Scenario recommendation
Rationale: Required to model activation, setup, and adoption using a deliberately modest rollout rather than national-scale adoption.
Existing source: Required first-offering model input
Evidence still required: Rural Bank/RBAP questionnaire, pipeline assessment, onboarding-capacity estimate
Risk if wrong: Overstates early implementation revenue, setup activity, and operational workload.
Affected formulas: Onboarding, setup, activation, implementation workload
Affected stakeholder views: Rural Bank, ODTI, DevOps Provider, Investor, Public Interest
Outputs affected: Activation revenue, setup cost, adoption indicators
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI commercial lead and finance reviewer
Recommendation: Include only after controlled placeholder authorization or rural-bank/RBAP evidence.
Authorization readiness: Ready for internal authorization review.
```

### `ADP-002` Active Banks By Year

```text
Assumption ID: ADP-002
Assumption name: Active Banks By Year
Priority: P0
Assumption role: Primitive input
Calculation method: Direct scenario input
Current status: Blocked
Evidence status: Open
Proposed treatment: Controlled-placeholder candidate
Candidate Conservative value or range: Year 1: 1; Year 2: 3; Year 3: 6; Year 4: 9; Year 5: 12
Candidate Base value or range: Year 1: 3; Year 2: 8; Year 3: 14; Year 4: 22; Year 5: 32
Candidate Accelerated value or range: Year 1: 7; Year 2: 16; Year 3: 28; Year 4: 42; Year 5: 60
Unit: Active banks per year
Range interpretation: Scenario recommendation
Rationale: Required to drive recurring subscription, operations, and annual transaction volume.
Existing source: Required first-offering model input
Evidence still required: Rural-bank readiness, activation timing, churn treatment, pilot activation evidence
Risk if wrong: Overstates recurring relationships and recurring economics.
Affected formulas: Annual activity, subscription, recurring DevOps, support load
Affected stakeholder views: Rural Bank, ODTI, 3neti, NetBank, DevOps Provider, Investor, Public Interest
Outputs affected: Recurring revenue, recurring cost, annual transaction activity
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI commercial lead and finance reviewer
Recommendation: Include only after controlled placeholder authorization or activation evidence. Active banks must not exceed cumulative available onboarded banks.
Authorization readiness: Ready for internal authorization review.
```

### `ADP-003` Active Months Per Bank By Year

```text
Assumption ID: ADP-003
Assumption name: Active Months Per Bank By Year
Priority: P0
Assumption role: Primitive input
Calculation method: Direct scenario input
Current status: Blocked
Evidence status: Institutional data required
Proposed treatment: Controlled-placeholder candidate
Candidate Conservative value or range: Year 1: 4; Year 2: 6; Year 3: 7; Year 4: 8; Year 5: 8
Candidate Base value or range: Year 1: 5; Year 2: 7; Year 3: 8; Year 4: 9; Year 5: 10
Candidate Accelerated value or range: Year 1: 6; Year 2: 8; Year 3: 9; Year 4: 10; Year 5: 10
Unit: Weighted average active operating months per active bank
Range interpretation: Scenario recommendation
Rationale: Prevents assuming each active bank contributes a full year of activity and reflects staggered cohort activation.
Existing source: Normalized payroll offering model
Evidence still required: Onboarding schedule, go-live timing, phased rollout assumptions
Risk if wrong: Overstates first-year volume and recurring economics.
Affected formulas: Annual activity, recurring subscription recognition, DevOps recurring cost
Affected stakeholder views: Rural Bank, ODTI, DevOps Provider, Investor, Public Interest
Outputs affected: Annual activity, recurring costs, recurring revenue
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI implementation owner and finance reviewer
Recommendation: Include only after controlled placeholder authorization or rollout evidence. Candidate values must remain between 0 and 12.
Authorization readiness: Ready for internal authorization review.
```

### `CUS-001` Payroll Customers Per Active Rural Bank

```text
Assumption ID: CUS-001
Assumption name: Payroll Customers Per Active Rural Bank
Priority: P0
Assumption role: Primitive input
Calculation method: Component-derived volume driver
Current status: Blocked
Evidence status: Institutional data required
Proposed treatment: Stakeholder-evidence candidate
Candidate Conservative value or range: 2
Candidate Base value or range: 4
Candidate Accelerated value or range: 6
Unit: Active payroll customers per active bank
Range interpretation: Expected operating range
Rationale: Required for explanatory payroll volume under the selected component-derived method.
Existing source: Normalized payroll offering model
Evidence still required: Rural-bank payroll portfolio, RBAP survey, employer pipeline
Risk if wrong: Overstates employer demand and all derived payroll volume.
Affected formulas: CUS-001 x CUS-002 x CUS-003 x VOL-002 = VOL-001
Affected stakeholder views: Customer, Rural Bank, ODTI, NetBank, DevOps Provider, SMS Provider, Investor, Public Interest
Outputs affected: Payroll activity, transaction revenue, support load, provider usage
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI commercial lead after rural-bank/RBAP evidence
Recommendation: Prefer stakeholder evidence; use placeholder only for structure testing.
Authorization readiness: Ready for internal authorization review.
```

### `CUS-002` Payroll Runs Per Customer Per Month

```text
Assumption ID: CUS-002
Assumption name: Payroll Runs Per Customer Per Month
Priority: P0
Assumption role: Primitive input
Calculation method: Component-derived volume driver
Current status: Blocked
Evidence status: Institutional data required
Proposed treatment: Stakeholder-evidence candidate
Candidate Conservative value or range: 1
Candidate Base value or range: 2
Candidate Accelerated value or range: 2
Unit: Payroll runs per active payroll customer per month
Range interpretation: Expected operating range
Rationale: Payroll frequency varies and must not be assumed to equal one run per month without evidence.
Existing source: Normalized payroll offering model
Evidence still required: Employer payroll questionnaire and payroll schedule evidence
Risk if wrong: Misstates recurring activity and billable events.
Affected formulas: CUS-001 x CUS-002 x CUS-003 x VOL-002 = VOL-001
Affected stakeholder views: Customer, Rural Bank, ODTI, NetBank, SMS Provider, Public Interest
Outputs affected: Payroll activity, transaction fees, SMS volume
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI commercial lead after employer evidence
Recommendation: Prefer employer evidence; use placeholder only for structure testing.
Authorization readiness: Ready for internal authorization review.
```

### `CUS-003` Average Recipients Per Payroll Run

```text
Assumption ID: CUS-003
Assumption name: Average Recipients Per Payroll Run
Priority: P0
Assumption role: Primitive input
Calculation method: Component-derived volume driver
Current status: Blocked
Evidence status: Institutional data required
Proposed treatment: Stakeholder-evidence candidate
Candidate Conservative value or range: 20
Candidate Base value or range: 35
Candidate Accelerated value or range: 60
Unit: Recipients per payroll run
Range interpretation: Expected operating range
Rationale: Determines recipient-level transaction activity and public reach.
Existing source: Normalized payroll offering model
Evidence still required: Employer payroll-size data, pilot-employer profile, rural-bank customer portfolio
Risk if wrong: Misstates billable events, recipient reach, and support load.
Affected formulas: CUS-001 x CUS-002 x CUS-003 x VOL-002 = VOL-001
Affected stakeholder views: Customer, Rural Bank, ODTI, NetBank, SMS Provider, Public Interest
Outputs affected: Transaction activity, SMS volume, public-interest reach
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI commercial lead after employer evidence
Recommendation: Prefer employer evidence; use placeholder only for structure testing.
Authorization readiness: Ready for internal authorization review.
```

### `VOL-002` Payroll Completion Rate

```text
Assumption ID: VOL-002
Assumption name: Payroll Completion Rate
Priority: P0
Assumption role: Primitive input
Calculation method: Component-derived volume driver
Current status: Blocked
Evidence status: Management estimate required
Proposed treatment: Controlled-placeholder candidate
Candidate Conservative value or range: 92%
Candidate Base value or range: 96%
Candidate Accelerated value or range: 98%
Unit: Percentage of attempted recipient disbursements
Range interpretation: Scenario recommendation
Rationale: Converts attempted recipient activity into successful qualifying payroll transactions.
Existing source: Normalized payroll offering model
Evidence still required: Successful event definition, failed-event treatment, reversal treatment, pilot completion logs, x-change execution evidence
Risk if wrong: Confuses attempted activity with successful Commercial Events and Billable Events.
Affected formulas: CUS-001 x CUS-002 x CUS-003 x VOL-002 = VOL-001
Affected stakeholder views: Customer, Rural Bank, ODTI, NetBank, SMS Provider, Public Interest
Outputs affected: Successful billable events, transaction revenue, provider attachment volume
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI operations and finance owners
Recommendation: Include only after controlled placeholder authorization or pilot evidence.
Authorization readiness: Ready for internal authorization review.
```

### `VOL-001` Average Successful Payroll Transactions Per Active Bank Per Month

```text
Assumption ID: VOL-001
Assumption name: Average Successful Payroll Transactions Per Active Bank Per Month
Priority: P0
Assumption role: Derived input
Calculation method: Component-derived
Current status: Blocked
Evidence status: Open
Proposed treatment: Derived input
Candidate Conservative value or range: Calculated candidate - not authorized, only after component candidates are authorized
Candidate Base value or range: Calculated candidate - not authorized, only after component candidates are authorized
Candidate Accelerated value or range: Calculated candidate - not authorized, only after component candidates are authorized
Unit: Successful payroll transactions per active bank per month
Range interpretation: Derived from component scenario recommendations
Rationale: `VOL-001` is the canonical volume consumed by stakeholder views, but it should be derived from components under the selected method.
Existing source: Assumptions Register derivation rule
Evidence still required: Evidence or authorized provisional inputs for `CUS-001`, `CUS-002`, `CUS-003`, and `VOL-002`
Risk if wrong: Contradictory transaction volumes across stakeholder views.
Affected formulas: Annual offering activity, transaction revenue, SMS volume, NetBank volume
Affected stakeholder views: All payroll transaction-driven views
Outputs affected: Transaction revenue, provider usage, public completion
Placeholder eligibility: Not independently eligible under component-derived method
Recommended approval authority: ODTI finance owner for method and derived-value record
Recommendation: Do not authorize independently. Use derived-value record after component inputs are authorized.
Authorization readiness: Ready for internal authorization review as a derived value only.
```

### `LIC-004` Hybrid Activation Fee

```text
Assumption ID: LIC-004
Assumption name: Hybrid Activation Fee
Priority: P0
Assumption role: Primitive input
Calculation method: Direct price input
Current status: Active
Evidence status: Working assumption
Proposed treatment: Existing Active working assumption
Candidate Conservative value or range: PHP 50,000
Candidate Base value or range: PHP 50,000
Candidate Accelerated value or range: PHP 50,000
Unit: PHP per participating rural bank
Range interpretation: Scenario recommendation from current working assumption
Rationale: Existing register value should be preserved for review rather than replaced.
Existing source: Program overview and initial package scaffold
Evidence still required: ODTI pricing decision, bank affordability validation, tax and accounting review
Risk if wrong: Activation economics may overstate implementation recovery or bank affordability.
Affected formulas: Rural Bank activation cost, ODTI activation revenue
Affected stakeholder views: Rural Bank, ODTI, Investor
Outputs affected: Activation economics
Placeholder eligibility: Sensitivity-only input unless approved
Recommended approval authority: ODTI commercial lead and finance reviewer
Recommendation: Carry as provisional working input only.
```

### `LIC-005` Hybrid Annual Platform Subscription

```text
Assumption ID: LIC-005
Assumption name: Hybrid Annual Platform Subscription
Priority: P0
Assumption role: Primitive input
Calculation method: Direct price input
Current status: Active
Evidence status: Working assumption
Proposed treatment: Existing Active working assumption
Candidate Conservative value or range: PHP 60,000
Candidate Base value or range: PHP 60,000
Candidate Accelerated value or range: PHP 60,000
Unit: PHP per participating rural bank per year
Range interpretation: Scenario recommendation from current working assumption
Rationale: Existing register value should be preserved for review rather than replaced.
Existing source: Program overview and initial package scaffold
Evidence still required: ODTI pricing decision, bank affordability validation, tax and accounting review
Risk if wrong: Recurring bank cost and ODTI recurring revenue may be misstated.
Affected formulas: Rural Bank subscription cost, ODTI subscription revenue
Affected stakeholder views: Rural Bank, ODTI, Investor
Outputs affected: Recurring platform economics
Placeholder eligibility: Sensitivity-only input unless approved
Recommended approval authority: ODTI commercial lead and finance reviewer
Recommendation: Carry as provisional working input only.
```

### `PRC-001` Base Transaction Fee Range

```text
Assumption ID: PRC-001
Assumption name: Base Transaction Fee Range
Priority: P0
Assumption role: Primitive input
Calculation method: Direct price input
Current status: Active
Evidence status: Working assumption
Proposed treatment: Existing Active working assumption
Candidate Conservative value or range: PHP 1.00
Candidate Base value or range: PHP 1.50
Candidate Accelerated value or range: PHP 2.00
Unit: PHP per completed disbursement or qualifying transaction
Range interpretation: Scenario recommendation from current working assumption
Rationale: Existing range should be preserved for review and sensitivity; billable event and allocation remain unresolved.
Existing source: Program overview and initial package scaffold
Evidence still required: ODTI pricing decision, employer willingness evidence, rural-bank retained economics, tax and accounting review
Risk if wrong: Misstates employer cost, bank retained economics, and ODTI transaction revenue.
Affected formulas: Customer fee, Rural Bank revenue, ODTI transaction platform obligation
Affected stakeholder views: Customer, Rural Bank, ODTI, 3neti, Investor
Outputs affected: Transaction economics
Placeholder eligibility: Sensitivity-only input unless approved
Recommended approval authority: ODTI commercial lead and finance reviewer
Recommendation: Carry as provisional working input only.
```

### `RB-001` Rural-Bank Retained Transaction Economics

```text
Assumption ID: RB-001
Assumption name: Rural-Bank Retained Transaction Economics
Priority: P0
Assumption role: Primitive input
Calculation method: Direct allocation input
Current status: Blocked
Evidence status: Management estimate required
Proposed treatment: Controlled-placeholder candidate
Candidate Conservative value or range: PHP 0.40 fixed retained amount per successful disbursement
Candidate Base value or range: PHP 0.50 fixed retained amount per successful disbursement
Candidate Accelerated value or range: PHP 0.60 fixed retained amount per successful disbursement
Unit: PHP per successful disbursement
Range interpretation: Scenario recommendation
Rationale: Needed to split employer-paid transaction fee into rural-bank retained economics and ODTI economics.
Existing source: Normalized payroll offering model
Evidence still required: ODTI decision, pilot rural-bank discussion, disclosure review, accounting and tax review
Risk if wrong: Double-counts customer fee or misallocates economic participation.
Affected formulas: Rural Bank retained contribution, ODTI transaction revenue
Affected stakeholder views: Rural Bank, ODTI, Consolidated View
Outputs affected: Bank contribution, ODTI contribution
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI plus pilot rural bank, with finance review
Recommendation: Include one controlled baseline rule for Level 1 and separately test sensitivity. Candidate rule must satisfy `RB-001 <= PRC-001`.
Authorization readiness: Ready for internal authorization review.
```

### `ODTI-001` ODTI Support Cost Per Active Bank

```text
Assumption ID: ODTI-001
Assumption name: ODTI Support Cost Per Active Bank
Priority: P0
Assumption role: Primitive input
Calculation method: Direct cost input
Current status: Blocked
Evidence status: Management estimate required
Proposed treatment: Management-estimate candidate
Candidate Conservative value or range: PHP 8,000
Candidate Base value or range: PHP 6,000
Candidate Accelerated value or range: PHP 5,000
Unit: PHP per active bank per month or per year
Range interpretation: Scenario recommendation
Rationale: Required to avoid showing ODTI revenue without operating burden.
Existing source: Normalized payroll offering model
Evidence still required: Support design, staffing plan, pilot effort, management estimate
Risk if wrong: ODTI contribution is overstated.
Affected formulas: ODTI operating cost and contribution
Affected stakeholder views: ODTI, Investor
Outputs affected: ODTI net operating contribution
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI operations and finance owners
Recommendation: Include only after management estimate or controlled placeholder authorization.
Authorization readiness: Ready for internal authorization review.
```

### `ODTI-002` ODTI Implementation Effort Or Cost Per Bank

```text
Assumption ID: ODTI-002
Assumption name: ODTI Implementation Effort Or Cost Per Bank
Priority: P0
Assumption role: Primitive input
Calculation method: Direct cost input
Current status: Blocked
Evidence status: Management estimate required
Proposed treatment: Management-estimate candidate
Candidate Conservative value or range: PHP 35,000
Candidate Base value or range: PHP 25,000
Candidate Accelerated value or range: PHP 20,000
Unit: Hours, person-days, or PHP per bank
Range interpretation: Scenario recommendation
Rationale: Required to compare activation revenue with implementation cost.
Existing source: Normalized payroll offering model
Evidence still required: Implementation work breakdown, training scope, pilot implementation effort
Risk if wrong: Activation revenue may hide implementation loss.
Affected formulas: ODTI implementation cost and activation margin
Affected stakeholder views: ODTI, Rural Bank, Investor
Outputs affected: Activation economics, staffing needs
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI implementation and finance owners
Recommendation: Include only after management estimate or controlled placeholder authorization.
Authorization readiness: Ready for internal authorization review.
```

### `OPS-001` DevOps Deployment Setup Fee

```text
Assumption ID: OPS-001
Assumption name: DevOps Deployment Setup Fee
Priority: P0
Assumption role: Primitive input
Calculation method: Direct price input
Current status: Active
Evidence status: Working assumption
Proposed treatment: Existing Active working assumption
Candidate Conservative value or range: PHP 50,000
Candidate Base value or range: PHP 50,000
Candidate Accelerated value or range: PHP 50,000
Unit: PHP per bank deployment
Range interpretation: Scenario recommendation from current working assumption
Rationale: Existing register value should be preserved for review pending DevOps estimate.
Existing source: Program overview and initial package scaffold
Evidence still required: DevOps provider estimate, scope definition, tax and contract review
Risk if wrong: DevOps setup economics and rural-bank upfront cost may be misstated.
Affected formulas: Rural Bank DevOps setup cost, DevOps Provider setup revenue
Affected stakeholder views: Rural Bank, DevOps Provider, Investor
Outputs affected: Setup economics
Placeholder eligibility: Sensitivity-only input unless approved
Recommended approval authority: DevOps provider plus ODTI review
Recommendation: Carry as provisional working input only.
```

### `OPS-002` DevOps Monthly Managed Operations Fee

```text
Assumption ID: OPS-002
Assumption name: DevOps Monthly Managed Operations Fee
Priority: P0
Assumption role: Primitive input
Calculation method: Direct price input
Current status: Active
Evidence status: Working assumption
Proposed treatment: Existing Active working assumption
Candidate Conservative value or range: PHP 10,000
Candidate Base value or range: PHP 10,000
Candidate Accelerated value or range: PHP 10,000
Unit: PHP per bank per month
Range interpretation: Scenario recommendation from current working assumption
Rationale: Existing register value should be preserved for review pending DevOps estimate.
Existing source: Program overview and initial package scaffold
Evidence still required: DevOps provider estimate, support scope, service-level review, tax and contract review
Risk if wrong: DevOps recurring economics and bank operating cost may be misstated.
Affected formulas: Rural Bank recurring DevOps cost, DevOps Provider recurring revenue
Affected stakeholder views: Rural Bank, DevOps Provider, Investor
Outputs affected: Recurring managed operations economics
Placeholder eligibility: Sensitivity-only input unless approved
Recommended approval authority: DevOps provider plus ODTI review
Recommendation: Carry as provisional working input only.
```

### `OPS-003` DevOps Direct Engineering And Tooling Cost Per Bank

```text
Assumption ID: OPS-003
Assumption name: DevOps Direct Engineering And Tooling Cost Per Bank
Priority: P0
Assumption role: Primitive input
Calculation method: Direct cost input
Current status: Blocked
Evidence status: Management estimate required
Proposed treatment: Provider-quote candidate
Candidate Conservative value or range: PHP 8,000
Candidate Base value or range: PHP 6,000
Candidate Accelerated value or range: PHP 5,000
Unit: PHP or engineering hours per bank per month or year
Range interpretation: Scenario recommendation
Rationale: Required to calculate DevOps provider margin and capacity.
Existing source: Normalized payroll offering model
Evidence still required: DevOps work breakdown, tooling cost, on-call model, pilot time data
Risk if wrong: Managed operations may appear sustainable when it is not.
Affected formulas: DevOps operating cost and gross margin
Affected stakeholder views: DevOps Provider, Rural Bank, Investor
Outputs affected: DevOps gross margin, staffing capacity
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: DevOps provider and finance reviewer
Recommendation: Prefer DevOps estimate before Level 1; otherwise controlled placeholder. Candidate excludes `CLD-001`.
Authorization readiness: Ready for internal authorization review.
```

### `CLD-001` Public-Cloud Infrastructure Cost Per Bank

```text
Assumption ID: CLD-001
Assumption name: Public-Cloud Infrastructure Cost Per Bank
Priority: P0
Assumption role: Primitive input
Calculation method: Direct cost input
Current status: Blocked
Evidence status: Provider quote requested
Proposed treatment: Provider-quote candidate
Candidate Conservative value or range: PHP 4,000
Candidate Base value or range: PHP 3,000
Candidate Accelerated value or range: PHP 2,500
Unit: PHP per bank per month or year
Range interpretation: Scenario recommendation
Rationale: Required to represent external cloud outflow under rural-bank-owned infrastructure.
Existing source: Normalized payroll offering model
Evidence still required: Target architecture, cloud-provider quote or calculator output, billing model
Risk if wrong: Cloud cost may be confused with DevOps revenue or omitted from ecosystem economics.
Affected formulas: Rural Bank operating cost, external outflow, DevOps operating context
Affected stakeholder views: Rural Bank, DevOps Provider, Consolidated View, Investor
Outputs affected: External outflows, bank operating cost
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: Rural Bank infrastructure owner and DevOps Provider
Recommendation: Prefer cloud estimate before Level 1; otherwise controlled placeholder. Baseline treats this as a Rural Bank external outflow.
Authorization readiness: Ready for internal authorization review.
```

### `RISK-002` Bad Debt Or Non-Collection

```text
Assumption ID: RISK-002
Assumption name: Bad Debt Or Non-Collection
Priority: P0
Assumption role: Primitive input
Calculation method: Direct risk input
Current status: Blocked
Evidence status: Accounting review required
Proposed treatment: Management-estimate candidate
Candidate Conservative value or range: 5%
Candidate Base value or range: 2%
Candidate Accelerated value or range: 1%
Unit: Non-collection rate on eligible invoiced commercial fees
Range interpretation: Scenario recommendation
Rationale: Required so invoiced amounts are not silently treated as collected cash.
Existing source: Required offering model input
Evidence still required: Collection policy, accounting review, bad-debt treatment, payment timing
Risk if wrong: Cash flow and payable timing are misleading.
Affected formulas: Collection, cash flow, contribution, payable timing
Affected stakeholder views: Rural Bank, ODTI, 3neti, DevOps Provider, SMS Provider, Investor
Outputs affected: Cash and contribution outputs
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI finance owner with accounting review
Recommendation: Include only after management policy or controlled placeholder authorization. Do not apply to payroll funding or recipient value.
Authorization readiness: Ready for internal authorization review.
```

## Additional Inputs For Optional SMS And Timing

### `RISK-001` Churn

```text
Assumption ID: RISK-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Controlled-placeholder candidate
Candidate Conservative value or range: 10%
Candidate Base value or range: 5%
Candidate Accelerated value or range: 3%
Unit: Annual active-bank churn or inactivity rate for sensitivity
Range interpretation: Scenario recommendation
Recommendation: Useful for Year 2-5 scenario credibility, but can remain excluded from a narrow initial Level 1 if `ADP-002` active banks are directly scenario-controlled.
Authorization readiness: Ready for internal authorization review as sensitivity input.
```

### `COL-001` Employer Fee Collection Timing

```text
Assumption ID: COL-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Controlled-placeholder candidate
Candidate Conservative value or range: 45
Candidate Base value or range: 30
Candidate Accelerated value or range: 15
Unit: Days, billing cycle, or collection period
Range interpretation: Scenario recommendation
Recommendation: Needed for cash-flow timing. A pre-cash-flow Level 1 may keep collection timing blocked.
Authorization readiness: Ready for internal authorization review as cash-flow timing input.
```

### `ATT-001` SMS Attachment Rate

```text
Assumption ID: ATT-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Controlled-placeholder candidate
Candidate Conservative value or range: 25%
Candidate Base value or range: 50%
Candidate Accelerated value or range: 70%
Unit: Percentage of qualifying transactions
Range interpretation: Scenario recommendation
Recommendation: Required only for SMS variant. Prefer employer evidence or controlled placeholder.
Authorization readiness: Ready for internal authorization review for optional SMS variant.
```

### `VAS-001` SMS Notification Customer-Facing Price

```text
Assumption ID: VAS-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Existing Active working assumption
Candidate Conservative value or range: PHP 1.00
Candidate Base value or range: PHP 1.00
Candidate Accelerated value or range: PHP 1.00
Unit: PHP per SMS notification or approved billable unit
Range interpretation: Scenario recommendation from current working assumption
Recommendation: Carry as provisional working input only for SMS variant.
```

### `CST-001` SMS Wholesale Provider Price

```text
Assumption ID: CST-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Provider-quote candidate
Candidate Conservative value or range: PHP 0.70
Candidate Base value or range: PHP 0.50
Candidate Accelerated value or range: PHP 0.40
Unit: PHP per qualifying SMS or approved billable unit
Range interpretation: Scenario recommendation
Recommendation: Do not guess for external use. Required for SMS margin; obtain provider quote or keep SMS provider cost blocked. Candidate may be used only as internal management candidate if authorized.
Authorization readiness: Requires evidence before authorization for external-use model; ready only for internal controlled-placeholder review.
```

### `SMS-001` SMS Delivery Success Rate

```text
Assumption ID: SMS-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Stakeholder-evidence candidate
Candidate Conservative value or range: 90%
Candidate Base value or range: 95%
Candidate Accelerated value or range: 97%
Unit: Percentage of attempted SMS notifications
Range interpretation: Scenario recommendation
Recommendation: Use provider service data or pilot delivery logs. A quote is not delivery-performance evidence.
Authorization readiness: Requires evidence before authorization for external-use model; ready only for internal controlled-placeholder review.
```

### `SMS-003` SMS Failed-Message Treatment

```text
Assumption ID: SMS-003
Priority: P1
Assumption role: Primitive input
Proposed treatment: Stakeholder-evidence candidate
Candidate Conservative value or range: Delivered-only billing; failed attempts excluded
Candidate Base value or range: Delivered-only billing; failed attempts excluded
Candidate Accelerated value or range: Delivered-only billing; failed attempts excluded
Unit: Failed-message billing treatment
Range interpretation: Scenario recommendation
Recommendation: Keep failed-message adjustments blocked until provider contract or SLA rules exist.
Authorization readiness: Requires evidence before authorization for external-use model; ready only for internal controlled-placeholder review.
```

### `SMS-004` SMS Privacy And Consent Readiness

```text
Assumption ID: SMS-004
Priority: P1
Assumption role: Primitive input
Proposed treatment: Remain blocked
Candidate Conservative value or range: Internal modeling only; no external SMS use until privacy review
Candidate Base value or range: Internal modeling only; no external SMS use until privacy review
Candidate Accelerated value or range: Internal modeling only; no external SMS use until privacy review
Unit: Approved readiness status, checklist, or governance indicator
Range interpretation: Scenario recommendation
Recommendation: Required before SMS external use. Do not use management guesses for consent and privacy.
Authorization readiness: Remain blocked for external use.
```

## Blocked Or Excluded Inputs

| Input | Treatment | Reason |
| --- | --- | --- |
| `TAX-001` | Remain blocked | Tax and withholding require professional review. The first model is explicitly Pre-Tax. |
| `ROY-001` | Remain blocked | Royalty or license basis requires 3neti-ODTI decision, legal, accounting, tax, and related-party review. The first model is explicitly Pre-Royalty. |
| `NET-001` | Remain blocked | NetBank fee basis requires NetBank or banking-partner evidence and legal characterization. The first model is NetBank-Fee-Blocked. |
| `NET-002` | Not required for initial Level 1 model | NetBank internal operating cost is useful for NetBank view but not required for a NetBank-fee-blocked model. |
| `SMS-002` | Not required for initial Level 1 model | SMS provider internal delivery cost may be unavailable if provider remains external; provider margin remains unavailable. |
| `PAR-001` | Not required for initial Level 1 model | Business-development participation is deferred. |
| `ATT-002`, `VAS-002`, `VAS-003`, `VAS-004`, `CST-002` | Not required for initial Level 1 model | KYC, email, rider, and other deferred capabilities are outside the baseline. |
| `INV-001`, `INV-002`, `INV-003` | Not required for initial Level 1 model | Investor view remains financing and confidence oriented, not operational revenue. |

## Provisional Input Register Preview

| Assumption ID | Proposed treatment | Candidate status | Approval needed | Included in Level 1? |
| --- | --- | --- | --- | --- |
| `ADP-001` | Controlled-placeholder candidate | Candidate values proposed | ODTI commercial lead and finance reviewer | Yes, if authorized |
| `ADP-002` | Controlled-placeholder candidate | Candidate values proposed | ODTI commercial lead and finance reviewer | Yes, if authorized |
| `ADP-003` | Controlled-placeholder candidate | Candidate values proposed | ODTI implementation and finance owners | Yes, if authorized |
| `CUS-001` | Stakeholder-evidence candidate | Candidate values proposed | ODTI commercial lead after rural-bank/RBAP evidence | Yes, if evidenced or authorized |
| `CUS-002` | Stakeholder-evidence candidate | Candidate values proposed | ODTI commercial lead after employer evidence | Yes, if evidenced or authorized |
| `CUS-003` | Stakeholder-evidence candidate | Candidate values proposed | ODTI commercial lead after employer evidence | Yes, if evidenced or authorized |
| `VOL-002` | Controlled-placeholder candidate | Candidate values proposed | ODTI operations and finance owners | Yes, if authorized |
| `VOL-001` | Derived input | Calculated later; not independently authorized | ODTI finance owner for derived-value record | Yes, as derived |
| `LIC-004` | Existing Active working assumption | Provisional value exists | ODTI commercial lead and finance reviewer | Yes, only as provisional |
| `LIC-005` | Existing Active working assumption | Provisional value exists | ODTI commercial lead and finance reviewer | Yes, only as provisional |
| `PRC-001` | Existing Active working assumption | Provisional range exists | ODTI commercial lead and finance reviewer | Yes, only as provisional |
| `RB-001` | Controlled-placeholder candidate | Candidate values proposed | ODTI plus pilot rural bank and finance reviewer | Yes, if authorized |
| `ODTI-001` | Management-estimate candidate | Candidate values proposed | ODTI operations and finance owners | Yes, if authorized |
| `ODTI-002` | Management-estimate candidate | Candidate values proposed | ODTI implementation and finance owners | Yes, if authorized |
| `OPS-001` | Existing Active working assumption | Provisional value exists | DevOps provider plus ODTI review | Yes, only as provisional |
| `OPS-002` | Existing Active working assumption | Provisional value exists | DevOps provider plus ODTI review | Yes, only as provisional |
| `OPS-003` | Provider-quote candidate | Candidate values proposed | DevOps provider and finance reviewer | Yes, if evidenced or authorized |
| `CLD-001` | Provider-quote candidate | Candidate values proposed | Rural Bank infrastructure owner and DevOps Provider | Yes, if evidenced or authorized |
| `RISK-002` | Management-estimate candidate | Candidate values proposed | ODTI finance owner with accounting review | Yes, if authorized |
| `ATT-001` | Controlled-placeholder candidate | Candidate values proposed | ODTI commercial lead | SMS variant only |
| `VAS-001` | Existing Active working assumption | Provisional value exists | ODTI commercial lead | SMS variant only, provisional |
| `CST-001` | Provider-quote candidate | Candidate values proposed | ODTI commercial owner and SMS provider | SMS variant only, if evidenced or authorized for internal model |
| `SMS-001` | Stakeholder-evidence candidate | Candidate values proposed | SMS provider owner and ODTI operations owner | SMS variant only, if evidenced or authorized for internal model |
| `SMS-003` | Stakeholder-evidence candidate | Candidate values proposed | SMS provider owner and ODTI operations owner | SMS variant only, if evidenced or authorized for internal model |
| `SMS-004` | Remain blocked | Internal-only candidate treatment proposed | ODTI privacy owner and x-legal reviewer | Required before SMS external use |
| `TAX-001` | Remain blocked | Open | Tax/accounting/legal reviewers | No, Pre-Tax only |
| `ROY-001` | Remain blocked | Open | 3neti and ODTI principals with review | No, Pre-Royalty only |
| `NET-001` | Remain blocked | Open | NetBank relationship owner | No, NetBank-Fee-Blocked only |

## Candidate-Coherence Checks

### Adoption

Status: Pass for candidate review.

- `ADP-001` is newly onboarded banks during the year, not cumulative banks.
- Cumulative onboarded banks remain greater than or equal to active banks in every scenario year.
- `ADP-003` is weighted average active months per active bank and remains between 0 and 12.
- Accelerated onboarding creates materially higher operating load and should require implementation-capacity review before authorization.

### Volume

Status: Pass for candidate review.

- `VOL-001` is derived from `CUS-001`, `CUS-002`, `CUS-003`, and `VOL-002`.
- `VOL-001` is not independently proposed.
- Annual activity uses `ADP-002 x ADP-003 x VOL-001`.
- No independent aggregate volume overrides the derived value.

### Pricing Split

Status: Pass for candidate review.

- `RB-001` does not exceed `PRC-001` in any scenario.
- Candidate ODTI transaction-platform amount remains non-negative in every scenario.
- Optional SMS price is separate from payroll transaction fee.
- Rural-bank retained economics are a derived allocation from customer-paid transaction fee, not a second external inflow.

### DevOps

Status: Pass for candidate review.

- `OPS-001` setup fee is separate from `OPS-002` monthly managed operations fee.
- `OPS-003` direct DevOps cost is distinct from `CLD-001` cloud cost.
- `OPS-003` excludes `CLD-001`.
- The rural bank retains infrastructure ownership under the baseline.

### Costs

Status: Pass for candidate review.

- ODTI implementation cost is separate from DevOps setup cost.
- ODTI support cost is separate from DevOps managed operations cost.
- Cloud cost remains an external outflow.
- SMS wholesale provider price remains visible and separate from SMS customer-facing price.

### Consolidation

Status: Pass for candidate review.

- Internal transfers eliminate.
- External inflows and outflows are counted once.
- Payroll funding remains pass-through.
- Derived contributions are reporting outputs, not new money flows.

### Exclusions

Status: Pass for candidate review.

- Tax remains blocked.
- Royalty remains blocked.
- NetBank fee remains blocked.
- Investor return remains excluded.
- Business-development partner allocation remains excluded.

## Break-Even Structural Preview

Label:

```text
Candidate structural preview - not authorized and not a forecast
```

These formulas may be used after provisional inputs are authorized. They are included to guide review, not to present business conclusions.

### ODTI Transaction Support Recovery

```text
Transactions required to recover annual ODTI support cost per active bank
=
(ODTI-001 x 12)
/
(PRC-001 - RB-001)
```

This preview isolates transaction-platform contribution before activation fees, annual subscription, implementation cost, bad debt, tax, royalty, NetBank fees, and other operating costs.

### Rural Bank Fixed-Cost Recovery

```text
Transactions required to recover annual rural-bank fixed participation cost
=
(LIC-005 + OPS-002 x 12 + CLD-001 x 12)
/
RB-001
```

This preview excludes activation fees, DevOps setup fees, internal bank labor, tax, NetBank fees, customer-retention value, deposits, and operational benefits.

### DevOps Provider Recurring Margin Preview

```text
Recurring DevOps contribution per bank per month
=
OPS-002
-
OPS-003
```

`CLD-001` is excluded under the baseline because the rural bank owns and pays the cloud account.

## Minimum Honest Level 1 Boundary

The first numeric model may include:

- customer-facing activation, subscription, and transaction fees;
- rural-bank retained economics;
- ODTI pre-tax and pre-royalty economics;
- DevOps setup and recurring economics;
- cloud external outflow;
- bad debt or collection haircut;
- optional SMS variant;
- consolidated external inflows and outflows;
- payroll value as pass-through.

It must continue to exclude or block:

- tax-adjusted net results;
- 3neti royalty-adjusted entity results;
- NetBank fee-adjusted results;
- investor return;
- partner allocations;
- final legal and accounting conclusions.

## Candidate Approval Recommendations

- Adoption and payroll structure: ODTI management after Rural Bank/RBAP and employer validation.
- Pricing: ODTI management, with affordability and evidence limitations disclosed.
- Rural-bank retained economics: ODTI plus pilot rural bank, with finance review.
- ODTI costs: ODTI management and finance review.
- DevOps and cloud costs: DevOps estimate plus ODTI and rural-bank infrastructure review.
- SMS pricing and performance: provider quote, service data, SLA, and privacy review.
- Bad debt and collection: ODTI finance, accounting review, and collection policy.
- Controlled placeholders: authorized reviewer using the controlled-placeholder authorization worksheet.

No approval is granted by this document.

## Model-Readiness Gap

### Ready For Candidate Authorization

- Existing Active working assumptions: `LIC-004`, `LIC-005`, `PRC-001`, `OPS-001`, `OPS-002`, `VAS-001`.
- Core controlled-placeholder candidates with proposed values: `ADP-001`, `ADP-002`, `ADP-003`, `CUS-001`, `CUS-002`, `CUS-003`, `VOL-002`, `RB-001`, `ODTI-001`, `ODTI-002`, `OPS-003`, `CLD-001`, `RISK-002`.
- Optional SMS candidates with proposed values: `ATT-001`, `CST-001`, `SMS-001`, `SMS-003`, `SMS-004`.
- Timing and churn candidates with proposed values: `COL-001`, `RISK-001`.
- Derived method selection: `VOL-001` as component-derived from `CUS-001`, `CUS-002`, `CUS-003`, and `VOL-002`.

These are still provisional unless authorized through the Provisional Input Register.

### Require Evidence Before Stronger Authorization

- `CUS-001`, `CUS-002`, `CUS-003`;
- `OPS-003`, `CLD-001`;
- `CST-001`, `SMS-001`, `SMS-003`, `SMS-004`;
- `NET-001`;
- `TAX-001`;
- `ROY-001`.

### May Remain Blocked In The First Model

- `TAX-001`, because the target is Pre-Tax;
- `ROY-001`, because the target is Pre-Royalty;
- `NET-001`, because the target is NetBank-Fee-Blocked;
- `PAR-001`, because Business Development Partner participation is deferred;
- `SMS-002`, if provider internal delivery cost is unavailable and provider margin is excluded.

### Minimum Approvals Required

Before generating the Level 1 model:

1. approve or authorize provisional P0 inputs;
2. confirm `Component-derived` volume method;
3. authorize the current Active working assumptions as provisional or replace them with evidence-supported inputs;
4. explicitly mark tax, royalty, and NetBank outputs as blocked or excluded;
5. attach standard provisional warnings to all outputs.

### Exact Next Action

Review this candidate pack and create the signed or formally approved Provisional Input Register using:

[evidence-instruments/controlled-placeholder-authorization-worksheet.md](evidence-instruments/controlled-placeholder-authorization-worksheet.md)

Only after that authorization should a Level 1 Payroll Starter Offering Economics model be calculated.

## Non-Goals

Do not use this candidate pack to:

- approve candidate values;
- update assumption values or statuses;
- create the numeric model;
- create a spreadsheet;
- contact stakeholders;
- claim evidence exists when it does not;
- resolve taxes;
- resolve royalties;
- resolve NetBank fees;
- calculate investor returns;
- create business-development allocations;
- modify x-change;
- create software.
