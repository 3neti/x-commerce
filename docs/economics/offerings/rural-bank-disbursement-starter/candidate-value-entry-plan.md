# Candidate Value Entry Plan: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

This plan defines how the Open candidate worksheet cells in [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md) should be populated in the next slice.

It does not add values, authorize values, create projections, or generate a workbook.

## Objective

The next slice should populate the candidate pack with:

```text
Conservative
Base
Accelerated
```

management candidates for the first Disbursement Level 1 review.

Every populated value must remain:

```text
Internal management candidate
Not authorized
Not evidence-supported
Not a forecast
Not contract-grade
Not investment-grade
```

## Entry Rule

No candidate value should be entered unless its row also records:

- assumption ID;
- scenario values or explicit `Open`;
- unit;
- treatment;
- range interpretation;
- source or rationale;
- evidence still required;
- risk if wrong;
- affected formulas;
- affected stakeholder views;
- outputs affected;
- recommended approval authority;
- authorization readiness.

## Required Candidate Groups

### Core Activity

Populate or explicitly leave Open:

| Assumption ID | Required basis |
| --- | --- |
| `ADP-002` | Active banks by scenario. |
| `ADP-003` | Weighted active months per active bank. |
| `DSP-CUS-001` | Active sponsors per active bank. |
| `DSP-CUS-002` | Disbursement batches per sponsor per month. |
| `DSP-CUS-003` | Recipients per disbursement batch. |
| `DSP-VOL-002` | Completion rate after event-definition review. |

### Core Pricing And Allocation

Populate or explicitly leave Open:

| Assumption ID | Required basis |
| --- | --- |
| `DSP-PRICE-001` | Sponsor onboarding fee. |
| `DSP-PRICE-002` | Sponsor monthly or program-service fee. |
| `DSP-PRICE-003` | Recipient disbursement fee. |
| `DSP-RB-001` | Rural Bank retained disbursement economics. |

### Core Costs And Risk

Populate or explicitly leave Open:

| Assumption ID | Required basis |
| --- | --- |
| `DSP-ODTI-001` | ODTI recurring support cost. |
| `DSP-ODTI-002` | ODTI implementation cost. |
| `OPS-003` | DevOps direct engineering and tooling cost. |
| `CLD-001` | Public-cloud infrastructure cost or allocation treatment. |
| `RISK-002` | Non-collection or delayed-collection treatment. |

### Optional Notification

Populate only as an optional variant:

| Assumption ID | Required basis |
| --- | --- |
| `DSP-ATT-001` | Notification attachment rate. |
| `DSP-VAS-001` | Customer-facing notification price. |
| `DSP-CST-001` | Wholesale notification provider price. |
| `SMS-001` | Delivery success or performance basis. |
| `SMS-003` | Failed-message billing treatment, if known. |
| `SMS-004` | Consent/privacy readiness, if known. |

### Pass-Through And Exception Treatment

Populate only if needed for presentation or sensitivity:

| Assumption ID | Required basis |
| --- | --- |
| `DSP-FUND-001` | Pass-through funding value, never revenue. |
| `DSP-EXC-001` | Exception burden, only if included in first model. |

## Derived Inputs

Do not enter an independent value for `DSP-VOL-001`.

Use:

```text
DSP-VOL-001
=
DSP-CUS-001
x DSP-CUS-002
x DSP-CUS-003
x DSP-VOL-002
```

Annual successful disbursements must later use:

```text
ADP-002
x ADP-003
x DSP-VOL-001
```

## Scenario Coherence Review

After candidate values are entered, verify:

| Check | Required result |
| --- | --- |
| Conservative scenario | Lower or slower activity, weaker completion, higher risk, or higher unit burden where appropriate. |
| Base scenario | Plausible internal planning case, not an approved forecast. |
| Accelerated scenario | Higher or faster activity where coherent, not automatically lower cost everywhere. |
| Pricing | Sponsor-facing fees remain explainable and not copied from Payroll without a reuse decision. |
| Rural Bank retention | Retention never exceeds sponsor-facing transaction fee. |
| ODTI economics | Support and implementation costs remain separate. |
| DevOps and cloud | DevOps cost and cloud cost remain separate from each other and from ODTI cost. |
| Notification | Optional notification does not block Core Disbursement. |
| Pass-through value | Recipient disbursement value remains outside revenue. |
| Blocked items | `NET-*`, `TAX-001`, `ROY-001`, `DSP-RB-002`, and `FIN-001` remain blocked unless separately authorized. |

## Output Of The Next Slice

The next slice should produce:

- completed candidate tables in [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md);
- a derived candidate table for `DSP-VOL-001` if component values are entered;
- an annual activity candidate illustration if component values are entered;
- no provisional input IDs;
- no authorized values;
- no Level 1 economics projection;
- no workbook artifact.

## Handoff To Authorization

After candidate values are reviewed, the following slice should prepare [provisional-input-register-level-1.md](provisional-input-register-level-1.md) for authorization.

The candidate pack alone is not sufficient to build the `.xlsx`.

## Next Slice

Populate the candidate pack using this entry plan. Do not authorize values.
