# Provisional-Input Candidate Pack: Rural Bank Digital Disbursement Starter

## Status

Current status: candidate-completion scaffold aligned to canonical assumptions.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Approval status: Not authorized.

Model maturity target: Level 1 controlled placeholder model, later.

This pack is an internal review artifact. It does not authorize inputs, change assumption statuses, create projections, update the workbook, or approve prices.

Canonical assumption status: the Disbursement-specific `DSP-*` records have been promoted into [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md). This pack now consumes those identifiers rather than treating them as candidate IDs.

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

## Candidate Scenario Worksheet

This worksheet is the future working area for Conservative, Base, and Accelerated management candidates. It intentionally contains no values yet.

All future entries must be labeled:

```text
Internal management candidate
Not authorized
Not evidence-supported
Not a forecast
```

### Adoption And Activity Candidates

| Assumption ID | Conservative candidate | Base candidate | Accelerated candidate | Unit | Treatment | Candidate status |
| --- | --- | --- | --- | --- | --- | --- |
| `ADP-002` | Open | Open | Open | Active banks | Controlled-placeholder candidate | Requires management candidate |
| `ADP-003` | Open | Open | Open | Weighted active months per active bank | Controlled-placeholder candidate | Requires management candidate |
| `DSP-CUS-001` | Open | Open | Open | Active sponsors per active bank | Controlled-placeholder candidate | Requires management candidate |
| `DSP-CUS-002` | Open | Open | Open | Batches per active sponsor per month | Controlled-placeholder candidate | Requires management candidate |
| `DSP-CUS-003` | Open | Open | Open | Recipients per disbursement batch | Controlled-placeholder candidate | Requires management candidate |
| `DSP-VOL-002` | Open | Open | Open | Completion percentage | Controlled-placeholder candidate after event definition | Requires event-definition review |

### Pricing And Allocation Candidates

| Assumption ID | Conservative candidate | Base candidate | Accelerated candidate | Unit | Treatment | Candidate status |
| --- | --- | --- | --- | --- | --- | --- |
| `DSP-PRICE-001` | Open | Open | Open | PHP per newly onboarded sponsor | Sensitivity-only or controlled-placeholder candidate | Requires management pricing candidate |
| `DSP-PRICE-002` | Open | Open | Open | PHP per active sponsor per month or program period | Sensitivity-only or controlled-placeholder candidate | Requires management pricing candidate |
| `DSP-PRICE-003` | Open | Open | Open | PHP per successful recipient disbursement | Sensitivity-only or controlled-placeholder candidate | Requires management pricing candidate |
| `DSP-RB-001` | Open | Open | Open | Fixed amount, percentage, residual, or approved formula | Controlled-placeholder candidate | Requires split-basis candidate |

Pricing split invariant:

```text
Rural Bank retained recipient-disbursement economics
<=
Sponsor-facing recipient disbursement fee
```

If `DSP-RB-001` is percentage-based, the equivalent retained share must not exceed 100 percent of the sponsor-facing transaction fee.

### ODTI, DevOps, Cloud, And Risk Candidates

| Assumption ID | Conservative candidate | Base candidate | Accelerated candidate | Unit | Treatment | Candidate status |
| --- | --- | --- | --- | --- | --- | --- |
| `DSP-ODTI-001` | Open | Open | Open | PHP or effort per approved support basis | Controlled-placeholder candidate | Requires support-cost candidate |
| `DSP-ODTI-002` | Open | Open | Open | PHP, hours, or person-days per approved implementation basis | Controlled-placeholder candidate | Requires implementation-cost candidate |
| `OPS-003` | Open | Open | Open | PHP or engineering hours per approved basis | Controlled-placeholder candidate | Requires reuse or evidence decision |
| `CLD-001` | Open | Open | Open | PHP per bank per month/year or allocation basis | Controlled-placeholder candidate or excluded shared cost | Requires allocation treatment |
| `RISK-002` | Open | Open | Open | Non-collection rate, delayed-collection haircut, or approved risk basis | Controlled-placeholder candidate | Requires risk-basis candidate |

Cost separation rule:

```text
ODTI support and implementation costs
must remain separate from
DevOps managed operations and cloud infrastructure costs.
```

### Optional Notification Variant Candidates

Optional notification remains outside Core Disbursement headline economics.

| Assumption ID | Conservative candidate | Base candidate | Accelerated candidate | Unit | Treatment | Candidate status |
| --- | --- | --- | --- | --- | --- | --- |
| `DSP-ATT-001` | Open | Open | Open | Percentage of qualifying disbursement events | Controlled-placeholder candidate | Optional variant candidate needed |
| `DSP-VAS-001` | Open | Open | Open | PHP per qualifying notification or billable unit | Sensitivity-only or controlled-placeholder candidate | Optional pricing candidate needed |
| `DSP-CST-001` | Open | Open | Open | PHP per qualifying notification or billable unit | Provider-quote candidate | Provider-price evidence or placeholder decision needed |
| `SMS-001` | Open | Open | Open | Delivery-success percentage or approved performance measure | Evidence-supported or placeholder candidate | Performance evidence needed |
| `SMS-003` | Open | Open | Open | Failed-message billing treatment | Remain blocked unless provider terms exist | Provider contract required |
| `SMS-004` | Open | Open | Open | Consent/privacy readiness | Remain blocked unless review exists | Privacy/legal review required |

### Pass-Through And Presentation Candidates

| Assumption ID | Conservative candidate | Base candidate | Accelerated candidate | Unit | Treatment | Candidate status |
| --- | --- | --- | --- | --- | --- | --- |
| `DSP-FUND-001` | Open | Open | Open | PHP per recipient disbursement, batch, or approved funding unit | Presentation-only or blocked | Must remain pass-through |
| `DSP-EXC-001` | Open | Open | Open | PHP or effort per failed, reversed, disputed, or exception event | P1 or blocked | Not required for initial structural model unless included explicitly |

Pass-through invariant:

```text
Sponsor-funded disbursement value is not revenue.
Recipient value is not Rural Bank, ODTI, NetBank, or provider revenue.
```

## Derived Candidate Worksheet

Under the selected component-derived method, `DSP-VOL-001` is not an independent candidate input.

| Derived item | Conservative | Base | Accelerated | Formula | Status |
| --- | --- | --- | --- | --- | --- |
| `DSP-VOL-001` successful disbursements per active bank per month | Calculated later | Calculated later | Calculated later | `DSP-CUS-001 x DSP-CUS-002 x DSP-CUS-003 x DSP-VOL-002` | Not independently eligible |
| Annual successful disbursements | Calculated later | Calculated later | Calculated later | `ADP-002 x ADP-003 x DSP-VOL-001` | Blocked until component candidates exist |
| Active sponsors | Calculated later | Calculated later | Calculated later | `ADP-002 x DSP-CUS-001` | Blocked until component candidates exist |
| Newly onboarded sponsor relationships | Open | Open | Open | Requires onboarding convention | Needs candidate method |

Conflict rule:

```text
If an independent aggregate disbursement-volume estimate conflicts with component-derived `DSP-VOL-001`, stop and document the discrepancy. Do not average the two or silently choose one.
```

## Candidate Coherence Review

Before any candidates move to the provisional input register, review:

| Check | Required result | Status |
| --- | --- | --- |
| Active banks and weighted active months are coherent | Active months remain within 0 to 12 | Pending candidates |
| `DSP-VOL-001` is derived | No independent value is authorized under component-derived mode | Pending candidates |
| Sponsor onboarding and active sponsors are separate | Onboarding fees and recurring fees use the correct populations | Pending candidates |
| Rural Bank retained economics constraint holds | Retention does not exceed sponsor-facing transaction fee | Pending candidates |
| Core and optional notification are separate | Optional notification does not block Core Disbursement | Pending candidates |
| Pass-through funding is excluded from revenue | `DSP-FUND-001` is presentation-only or blocked | Pending candidates |
| ODTI costs are separate from DevOps and cloud | No cost category is double counted | Pending candidates |
| NetBank, tax, royalty, and true bank support cost remain blocked | `NET-*`, `TAX-001`, `ROY-001`, `DSP-RB-002` are visible exclusions | Pending candidates |

## Authorization Readiness Summary

| Candidate group | Authorization readiness | Reason |
| --- | --- | --- |
| Adoption and activity | Not ready | Values are still Open. |
| Pricing and allocation | Not ready | Values are still Open and sponsor-facing economics require review. |
| ODTI, DevOps, cloud, and risk | Not ready | Values are still Open and evidence/reuse decisions are unresolved. |
| Optional notification | Not ready | Provider price, service performance, and privacy/consent remain unresolved. |
| Pass-through and exception handling | Not ready | Pass-through value and exception burden require treatment decisions. |
| Blocked exclusions | Not ready for authorization | Must remain blocked unless separate evidence or decision exists. |

## Candidate-Pack Completion Gate

Before the first Disbursement workbook can be generated, this pack must be completed with management candidates or explicit blocked treatments for each P0 input.

Completion requires:

- every P0 assumption listed below has a proposed treatment;
- every proposed treatment names whether it is a primitive input, derived input, or validation-only input;
- `DSP-VOL-001` remains derived under component-derived mode;
- Core Disbursement inputs are separated from optional notification inputs;
- blocked NetBank, tax, royalty, and true Rural Bank support-cost outputs remain visible;
- no value is copied from Payroll Starter without a documented reuse decision.

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
| `DSP-FUND-001` | Presentation-only or blocked | Pass-through funding value can be shown separately but must not become revenue. |
| `DSP-EXC-001` | P1 or blocked | Needed for exception-adjusted contribution; not required for the first structural workbook if excluded visibly. |

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

First Level 1 model must distinguish:

- newly onboarded sponsor relationships from active sponsors;
- sponsor onboarding revenue from recurring service revenue;
- sponsor-paid commercial fees from pass-through disbursement value;
- Core Disbursement from optional notification;
- Rural Bank contribution before internal bank disbursement-support cost from true Rural Bank contribution.

It must continue to exclude or block:

- tax-adjusted results;
- 3neti royalty-adjusted entity results;
- NetBank fee-adjusted results;
- investor return;
- partner allocations;
- final legal and accounting conclusions.

## Next Slice

Use [candidate-value-entry-plan.md](candidate-value-entry-plan.md) to populate the `Open` cells above with Conservative, Base, and Accelerated management candidates for review. Do not authorize values in that slice.
