# Provisional-Input Candidate Pack: Rural Bank Payroll Starter

## Status

Status: Internal candidate pack.

Approval status: Not authorized.

Model maturity target: Level 1.

Offering: `OFR-RB-PAYROLL-STARTER`.

This document proposes candidate inputs for internal review. It does not authorize values, change assumption statuses, create a forecast, create a spreadsheet, approve pricing, approve provider fees, approve taxes, approve royalties, resolve NetBank fees, or produce a numeric model.

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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Banks onboarded per year
Range interpretation: Scenario recommendation, once proposed
Rationale: Required to model activation, setup, and adoption, but no current evidence-backed candidate exists in the register.
Existing source: Required first-offering model input
Evidence still required: Rural Bank/RBAP questionnaire, pipeline assessment, onboarding-capacity estimate
Risk if wrong: Overstates early implementation revenue, setup activity, and operational workload.
Affected formulas: Onboarding, setup, activation, implementation workload
Affected stakeholder views: Rural Bank, ODTI, DevOps Provider, Investor, Public Interest
Outputs affected: Activation revenue, setup cost, adoption indicators
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI commercial lead and finance reviewer
Recommendation: Include only after controlled placeholder authorization or rural-bank/RBAP evidence.
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Active banks per year
Range interpretation: Scenario recommendation, once proposed
Rationale: Required to drive recurring subscription, operations, and annual transaction volume.
Existing source: Required first-offering model input
Evidence still required: Rural-bank readiness, activation timing, churn treatment, pilot activation evidence
Risk if wrong: Overstates recurring relationships and recurring economics.
Affected formulas: Annual activity, subscription, recurring DevOps, support load
Affected stakeholder views: Rural Bank, ODTI, 3neti, NetBank, DevOps Provider, Investor, Public Interest
Outputs affected: Recurring revenue, recurring cost, annual transaction activity
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI commercial lead and finance reviewer
Recommendation: Include only after controlled placeholder authorization or activation evidence.
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Active bank-months or active months per bank per year
Range interpretation: Scenario recommendation, once proposed
Rationale: Prevents assuming each active bank contributes a full year of activity.
Existing source: Normalized payroll offering model
Evidence still required: Onboarding schedule, go-live timing, phased rollout assumptions
Risk if wrong: Overstates first-year volume and recurring economics.
Affected formulas: Annual activity, recurring subscription recognition, DevOps recurring cost
Affected stakeholder views: Rural Bank, ODTI, DevOps Provider, Investor, Public Interest
Outputs affected: Annual activity, recurring costs, recurring revenue
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI implementation owner and finance reviewer
Recommendation: Include only after controlled placeholder authorization or rollout evidence.
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Active payroll customers per active bank
Range interpretation: Expected operating range, once proposed
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Payroll runs per active payroll customer per month
Range interpretation: Expected operating range, once proposed
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Recipients per payroll run
Range interpretation: Expected operating range, once proposed
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Percentage of attempted recipient disbursements
Range interpretation: Scenario recommendation, once proposed
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
Proposed treatment: Sensitivity-only candidate
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Fixed amount, percentage, margin formula, or another approved basis
Range interpretation: Negotiation range or scenario recommendation, once proposed
Rationale: Needed to split employer-paid transaction fee into rural-bank retained economics and ODTI economics.
Existing source: Normalized payroll offering model
Evidence still required: ODTI decision, pilot rural-bank discussion, disclosure review, accounting and tax review
Risk if wrong: Double-counts customer fee or misallocates economic participation.
Affected formulas: Rural Bank retained contribution, ODTI transaction revenue
Affected stakeholder views: Rural Bank, ODTI, Consolidated View
Outputs affected: Bank contribution, ODTI contribution
Placeholder eligibility: Eligible only for sensitivity testing
Recommended approval authority: ODTI plus pilot rural bank, with finance review
Recommendation: Do not include as approved. Use only as sensitivity or blocked line until decision.
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: PHP per active bank per month or per year
Range interpretation: Scenario recommendation, once proposed
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Hours, person-days, or PHP per bank
Range interpretation: Scenario recommendation, once proposed
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: PHP or engineering hours per bank per month or year
Range interpretation: Provider tier range or scenario recommendation, once proposed
Rationale: Required to calculate DevOps provider margin and capacity.
Existing source: Normalized payroll offering model
Evidence still required: DevOps work breakdown, tooling cost, on-call model, pilot time data
Risk if wrong: Managed operations may appear sustainable when it is not.
Affected formulas: DevOps operating cost and gross margin
Affected stakeholder views: DevOps Provider, Rural Bank, Investor
Outputs affected: DevOps gross margin, staffing capacity
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: DevOps provider and finance reviewer
Recommendation: Prefer DevOps estimate before Level 1; otherwise controlled placeholder.
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: PHP per bank per month or year
Range interpretation: Provider tier range or scenario recommendation, once proposed
Rationale: Required to represent external cloud outflow under rural-bank-owned infrastructure.
Existing source: Normalized payroll offering model
Evidence still required: Target architecture, cloud-provider quote or calculator output, billing model
Risk if wrong: Cloud cost may be confused with DevOps revenue or omitted from ecosystem economics.
Affected formulas: Rural Bank operating cost, external outflow, DevOps operating context
Affected stakeholder views: Rural Bank, DevOps Provider, Consolidated View, Investor
Outputs affected: External outflows, bank operating cost
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: Rural Bank infrastructure owner and DevOps Provider
Recommendation: Prefer cloud estimate before Level 1; otherwise controlled placeholder.
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
Candidate Conservative value or range: Open
Candidate Base value or range: Open
Candidate Accelerated value or range: Open
Unit: Percentage, days, reserve, or write-off assumption
Range interpretation: Scenario recommendation, once proposed
Rationale: Required so invoiced amounts are not silently treated as collected cash.
Existing source: Required offering model input
Evidence still required: Collection policy, accounting review, bad-debt treatment, payment timing
Risk if wrong: Cash flow and payable timing are misleading.
Affected formulas: Collection, cash flow, contribution, payable timing
Affected stakeholder views: Rural Bank, ODTI, 3neti, DevOps Provider, SMS Provider, Investor
Outputs affected: Cash and contribution outputs
Placeholder eligibility: Eligible for controlled placeholder
Recommended approval authority: ODTI finance owner with accounting review
Recommendation: Include only after management policy or controlled placeholder authorization.
```

## Additional Inputs For Optional SMS And Timing

### `RISK-001` Churn

```text
Assumption ID: RISK-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Controlled-placeholder candidate
Candidate values: Open
Unit: Churn definition unresolved
Recommendation: Useful for Base scenario credibility, but can remain excluded from a narrow initial Level 1 if active banks are directly scenario-controlled.
```

### `COL-001` Employer Fee Collection Timing

```text
Assumption ID: COL-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Controlled-placeholder candidate
Candidate values: Open
Unit: Days, billing cycle, or collection period
Recommendation: Needed for cash-flow timing. A pre-cash-flow Level 1 may keep collection timing blocked.
```

### `ATT-001` SMS Attachment Rate

```text
Assumption ID: ATT-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Controlled-placeholder candidate
Candidate values: Open
Unit: Percentage of qualifying transactions
Recommendation: Required only for SMS variant. Prefer employer evidence or controlled placeholder.
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
Candidate values: Open
Unit: PHP per qualifying SMS or approved billable unit
Recommendation: Do not guess. Required for SMS margin; obtain provider quote or keep SMS provider cost blocked.
```

### `SMS-001` SMS Delivery Success Rate

```text
Assumption ID: SMS-001
Priority: P1
Assumption role: Primitive input
Proposed treatment: Stakeholder-evidence candidate
Candidate values: Open
Unit: Percentage of attempted SMS notifications
Recommendation: Use provider service data or pilot delivery logs. A quote is not delivery-performance evidence.
```

### `SMS-003` SMS Failed-Message Treatment

```text
Assumption ID: SMS-003
Priority: P1
Assumption role: Primitive input
Proposed treatment: Stakeholder-evidence candidate
Candidate values: Open
Unit: Failure rate, refund rule, credit rule, retry rule, or approved treatment
Recommendation: Keep failed-message adjustments blocked until provider contract or SLA rules exist.
```

### `SMS-004` SMS Privacy And Consent Readiness

```text
Assumption ID: SMS-004
Priority: P1
Assumption role: Primitive input
Proposed treatment: Remain blocked
Candidate values: Open
Unit: Approved readiness status, checklist, or governance indicator
Recommendation: Required before SMS external use. Do not use management guesses for consent and privacy.
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
| `ADP-001` | Controlled-placeholder candidate | Open | ODTI commercial lead and finance reviewer | Yes, if authorized |
| `ADP-002` | Controlled-placeholder candidate | Open | ODTI commercial lead and finance reviewer | Yes, if authorized |
| `ADP-003` | Controlled-placeholder candidate | Open | ODTI implementation and finance owners | Yes, if authorized |
| `CUS-001` | Stakeholder-evidence candidate | Open | ODTI commercial lead after rural-bank/RBAP evidence | Yes, if evidenced or authorized |
| `CUS-002` | Stakeholder-evidence candidate | Open | ODTI commercial lead after employer evidence | Yes, if evidenced or authorized |
| `CUS-003` | Stakeholder-evidence candidate | Open | ODTI commercial lead after employer evidence | Yes, if evidenced or authorized |
| `VOL-002` | Controlled-placeholder candidate | Open | ODTI operations and finance owners | Yes, if authorized |
| `VOL-001` | Derived input | Calculated later; not independently authorized | ODTI finance owner for derived-value record | Yes, as derived |
| `LIC-004` | Existing Active working assumption | Provisional value exists | ODTI commercial lead and finance reviewer | Yes, only as provisional |
| `LIC-005` | Existing Active working assumption | Provisional value exists | ODTI commercial lead and finance reviewer | Yes, only as provisional |
| `PRC-001` | Existing Active working assumption | Provisional range exists | ODTI commercial lead and finance reviewer | Yes, only as provisional |
| `RB-001` | Sensitivity-only candidate | Open | ODTI plus pilot rural bank and finance reviewer | Yes, if sensitivity-only or authorized |
| `ODTI-001` | Management-estimate candidate | Open | ODTI operations and finance owners | Yes, if authorized |
| `ODTI-002` | Management-estimate candidate | Open | ODTI implementation and finance owners | Yes, if authorized |
| `OPS-001` | Existing Active working assumption | Provisional value exists | DevOps provider plus ODTI review | Yes, only as provisional |
| `OPS-002` | Existing Active working assumption | Provisional value exists | DevOps provider plus ODTI review | Yes, only as provisional |
| `OPS-003` | Provider-quote candidate | Open | DevOps provider and finance reviewer | Yes, if evidenced or authorized |
| `CLD-001` | Provider-quote candidate | Open | Rural Bank infrastructure owner and DevOps Provider | Yes, if evidenced or authorized |
| `RISK-002` | Management-estimate candidate | Open | ODTI finance owner with accounting review | Yes, if authorized |
| `ATT-001` | Controlled-placeholder candidate | Open | ODTI commercial lead | SMS variant only |
| `VAS-001` | Existing Active working assumption | Provisional value exists | ODTI commercial lead | SMS variant only, provisional |
| `CST-001` | Provider-quote candidate | Open | ODTI commercial owner and SMS provider | SMS variant only, if evidenced |
| `SMS-001` | Stakeholder-evidence candidate | Open | SMS provider owner and ODTI operations owner | SMS variant only, if evidenced |
| `SMS-003` | Stakeholder-evidence candidate | Open | SMS provider owner and ODTI operations owner | SMS variant only, if evidenced |
| `SMS-004` | Remain blocked | Open | ODTI privacy owner and x-legal reviewer | Required before SMS external use |
| `TAX-001` | Remain blocked | Open | Tax/accounting/legal reviewers | No, Pre-Tax only |
| `ROY-001` | Remain blocked | Open | 3neti and ODTI principals with review | No, Pre-Royalty only |
| `NET-001` | Remain blocked | Open | NetBank relationship owner | No, NetBank-Fee-Blocked only |

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
