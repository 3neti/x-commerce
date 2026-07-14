# Provisional-Input Candidate Pack: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Approval status: Not authorized.

Model maturity target: Level 1 controlled placeholder model, later.

This pack is an internal review artifact. It does not authorize inputs, change assumption statuses, create projections, update the workbook, or approve prices.

## Purpose

This pack will eventually answer:

```text
What is the smallest coherent set of provisional inputs needed to calculate the first controlled Disbursement Starter model, and what rationale supports each proposed input?
```

## Standard Warning

> Any candidate input added to this pack is an internal management candidate. It is not authorized, not evidence-supported, not a forecast, not a provider quote, not a budget, not a contract, not an institutional commitment, and not investment-grade.

## Initial Model Target

The first numeric model, when authorized later, should be labeled:

```text
Disbursement Starter Offering Economics
Pre-Tax
Pre-Royalty
NetBank-Fee-Blocked
Controlled Placeholder Model
```

## Volume Method

Preferred method:

```text
Component-derived
```

Formula:

```text
DSP-CUS-001
x DSP-CUS-002
x DSP-CUS-003
x DSP-VOL-002
= DSP-VOL-001
```

When component-derived volume is selected:

- authorize or evidence the component assumptions;
- calculate `DSP-VOL-001`;
- do not authorize `DSP-VOL-001` independently;
- use `DSP-VOL-001` consistently across stakeholder views;
- use independent aggregate volume estimates only as validation inputs.

## Candidate Input Classification

Each input should use one proposed treatment:

```text
Existing Active working assumption
Evidence-supported Active candidate
Management-estimate candidate
Stakeholder-evidence candidate
Provider-quote candidate
Controlled-placeholder candidate
Sensitivity-only candidate
Derived input
Remain blocked
Not required for initial Level 1 model
```

## Candidate Record Template

```text
Assumption ID:
Assumption name:
Priority:
Assumption role:
Calculation method:
Current status:
Evidence status:
Proposed treatment:
Candidate Conservative value or range:
Candidate Base value or range:
Candidate Accelerated value or range:
Unit:
Range interpretation:
Rationale:
Existing source:
Evidence still required:
Risk if wrong:
Affected formulas:
Affected stakeholder views:
Outputs affected:
Placeholder eligibility:
Recommended approval authority:
Recommendation:
```

Use `Open` where no responsible candidate can yet be proposed.

## Core P0 Inputs To Review

| Assumption ID | Role | Proposed treatment | Candidate status |
| --- | --- | --- | --- |
| `ADP-002` | Primitive input | Controlled-placeholder candidate | Open |
| `ADP-003` | Primitive input | Controlled-placeholder candidate | Open |
| `DSP-CUS-001` | Primitive input | Controlled-placeholder candidate | Open |
| `DSP-CUS-002` | Primitive input | Controlled-placeholder candidate | Open |
| `DSP-CUS-003` | Primitive input | Controlled-placeholder candidate | Open |
| `DSP-VOL-002` | Primitive input | Controlled-placeholder candidate after event definitions | Open |
| `DSP-VOL-001` | Derived input | Not independently eligible under component-derived method | Open |
| `DSP-PRICE-001` | Primitive input | Sensitivity-only or controlled-placeholder candidate after management review | Open |
| `DSP-PRICE-002` | Primitive input | Sensitivity-only or controlled-placeholder candidate after management review | Open |
| `DSP-PRICE-003` | Primitive input | Sensitivity-only or controlled-placeholder candidate after management review | Open |
| `DSP-RB-001` | Primitive allocation input | Controlled-placeholder candidate after commercial review | Open |
| `DSP-ODTI-001` | Primitive cost input | Controlled-placeholder candidate | Open |
| `DSP-ODTI-002` | Primitive cost input | Controlled-placeholder candidate | Open |
| `OPS-003` | Primitive cost input | Controlled-placeholder candidate | Open |
| `CLD-001` | Primitive cost input | Controlled-placeholder candidate | Open |
| `RISK-002` | Primitive risk input | Controlled-placeholder candidate | Open |

## Optional Notification Inputs

| Assumption ID | Role | Proposed treatment | Candidate status |
| --- | --- | --- | --- |
| `DSP-ATT-001` | Primitive optional input | Controlled-placeholder candidate | Open |
| `DSP-VAS-001` | Primitive optional price input | Sensitivity-only or controlled-placeholder candidate | Open |
| `DSP-CST-001` | Primitive optional provider-price input | Provider-quote candidate | Open |
| `SMS-001` | Primitive performance input | Evidence-supported Active candidate or placeholder for structural test | Open |
| `SMS-003` | Contract treatment input | Remain blocked until provider terms | Open |
| `SMS-004` | Legal/privacy input | Remain blocked until review | Open |

## Blocked Or Excluded From First Level 1 Draft

| Assumption ID | Treatment | Reason |
| --- | --- | --- |
| `TAX-001` | Remain blocked | Tax review required. |
| `ROY-001` | Remain blocked | 3neti/ODTI decision and review required. |
| `NET-001` | Remain blocked | NetBank or rail role and fee evidence required. |
| `NET-002` | Not required for initial Level 1 model | NetBank internal cost only matters if NetBank view is modeled financially. |
| `FIN-001` | Not required until capital budgeting | Discount-rate assumption must be governed before NPV. |
| `DSP-RB-002` | Remain blocked or P1 | True Rural Bank contribution needs bank support evidence. |

## Scenario Coherence Rules

Conservative, Base, and Accelerated scenarios should represent coherent operating states, not arbitrary low-medium-high toggles.

Potential dimensions:

- active banks;
- active months;
- sponsors per bank;
- batches per sponsor;
- recipients per batch;
- completion rate;
- support cost;
- implementation effort;
- cloud and DevOps cost;
- non-collection risk;
- optional notification attachment.

Do not assume every Accelerated value must be higher. Some costs may decline per unit while total workload rises.

## Minimum Honest Model Boundary

First Level 1 model may include:

- sponsor onboarding fees;
- sponsor monthly or program-service fees;
- recipient disbursement fees;
- Rural Bank retained economics;
- ODTI pre-tax and pre-royalty economics;
- DevOps economics where allocated;
- cloud external outflow where allocated;
- optional notification as a separate variant;
- pass-through disbursement value shown separately.

It must continue to exclude or block:

- tax-adjusted results;
- 3neti royalty-adjusted entity results;
- NetBank fee-adjusted results;
- investor return;
- partner allocations;
- final legal and accounting conclusions.

## Next Slice

Perform an economic-coherence review before authorizing provisional inputs.

