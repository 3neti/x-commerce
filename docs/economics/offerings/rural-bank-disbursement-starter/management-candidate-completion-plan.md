# Management-Candidate Completion Plan: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Purpose:

```text
Prepare the Disbursement Starter provisional-input candidate pack for management review without authorizing values, producing projections, or generating a workbook.
```

This document is the next gate between the non-numeric Disbursement scaffold and the first numeric Level 1 model. It does not assign values.

## Source Rule

Candidate values, when added later, must be recorded first in:

- [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md);
- [provisional-input-register-level-1.md](provisional-input-register-level-1.md), only after authorization;
- [offering-economics-level-1.md](offering-economics-level-1.md), only after authorization.

The workbook must not become the place where Disbursement assumptions are invented.

## Candidate Completion Objective

The next implementation slice should answer:

```text
Which provisional Conservative, Base, and Accelerated management candidates should be reviewed for the first controlled Disbursement Starter model?
```

The answer must remain:

```text
Internal management candidate
Not authorized
Not evidence-supported
Not a forecast
Not contract-grade
Not investment-grade
```

## Candidate Treatment Categories

Use exactly one proposed treatment for each assumption:

| Treatment | Use |
| --- | --- |
| Controlled-placeholder candidate | Candidate may be authorized for Level 1 internal modeling. |
| Management-estimate candidate | Candidate requires named management rationale before authorization. |
| Stakeholder-evidence candidate | Candidate should come from Rural Bank, sponsor, RBAP, NetBank, or provider evidence. |
| Provider-quote candidate | Candidate requires provider quote or commercial proposal. |
| Sensitivity-only candidate | Candidate may be varied for structure testing but not presented as a base input. |
| Derived input | Candidate must be calculated from primitive assumptions. |
| Remain blocked | Candidate must not be used in Level 1. |
| Not required for initial Level 1 model | Candidate can remain outside the first numeric model. |

## Core P0 Candidate Completion Table

| Assumption ID | Candidate role | Required completion action | Current gate |
| --- | --- | --- | --- |
| `ADP-002` | Primitive input | Propose active-bank scenario candidates or identify evidence requirement. | Open |
| `ADP-003` | Primitive input | Propose weighted active-month scenario candidates. | Open |
| `DSP-CUS-001` | Primitive input | Propose sponsors per active bank. | Open |
| `DSP-CUS-002` | Primitive input | Propose batches per active sponsor per month. | Open |
| `DSP-CUS-003` | Primitive input | Propose recipients per batch. | Open |
| `DSP-VOL-002` | Primitive input | Propose completion-rate candidates only after event definitions are clear. | Open |
| `DSP-VOL-001` | Derived input | Calculate only from `DSP-CUS-001 x DSP-CUS-002 x DSP-CUS-003 x DSP-VOL-002`. | Not independently eligible |
| `DSP-PRICE-001` | Primitive pricing input | Propose sponsor onboarding fee candidates or leave sensitivity-only. | Open |
| `DSP-PRICE-002` | Primitive pricing input | Propose sponsor monthly or program-service fee candidates. | Open |
| `DSP-PRICE-003` | Primitive pricing input | Propose recipient disbursement fee candidates. | Open |
| `DSP-RB-001` | Primitive allocation input | Propose Rural Bank retained economics basis. | Open |
| `DSP-ODTI-001` | Primitive cost input | Propose ODTI recurring support-cost basis. | Open |
| `DSP-ODTI-002` | Primitive cost input | Propose ODTI implementation-cost basis. | Open |
| `OPS-003` | Primitive cost input | Decide whether Payroll DevOps direct-cost logic can be reused or remains evidence-required. | Open |
| `CLD-001` | Primitive cost input | Decide whether shared cloud cost is allocated, excluded, or blocked. | Open |
| `RISK-002` | Primitive risk input | Propose non-collection or delayed-collection treatment. | Open |

## Optional Notification Candidate Completion

Optional notification must remain separate from Core Disbursement.

| Assumption ID | Candidate role | Required completion action | Current gate |
| --- | --- | --- | --- |
| `DSP-ATT-001` | Primitive optional input | Propose notification attachment candidates or leave blocked. | Open |
| `DSP-VAS-001` | Primitive optional price input | Propose customer-facing notification price or reuse only with documented decision. | Open |
| `DSP-CST-001` | Primitive provider-price input | Require provider quote or internal placeholder authorization. | Open |
| `SMS-001` | Primitive performance input | Require service-performance evidence or explicitly exclude from first model. | Open |
| `SMS-003` | Contract treatment input | Remain blocked until failed-message billing and retry rules are known. | Blocked |
| `SMS-004` | Privacy/legal input | Remain blocked until consent and disclosure review. | Blocked |

## Blocked Or Excluded Items

These should not receive management guesses in the candidate-completion slice unless a separate authorization decision changes their treatment:

| Assumption ID | Treatment |
| --- | --- |
| `NET-001` | Remain blocked; no NetBank revenue or fee expense without approved role and fee basis. |
| `NET-002` | Remain blocked unless NetBank internal cost view is required. |
| `TAX-001` | Remain blocked pending tax review. |
| `ROY-001` | Remain blocked pending 3neti and ODTI commercial decision. |
| `DSP-RB-002` | Remain blocked unless Rural Bank support-cost placeholder is explicitly authorized. |
| `DSP-FUND-001` | Presentation-only pass-through candidate; must not become revenue. |
| `FIN-001` | Remain blocked unless capital budgeting is included. |

## Scenario Coherence Requirements

Conservative, Base, and Accelerated candidates must represent coherent operating states.

The candidate pack should explain:

- why active banks and active months fit the rollout posture;
- why sponsor counts fit the bank relationship model;
- why batch and recipient counts fit the selected use case;
- why completion rate is plausible for a provisional model;
- why pricing is sponsor-facing and not copied from Payroll;
- why Rural Bank retention does not exceed sponsor transaction fees;
- how ODTI support and implementation costs scale;
- how optional notification remains additive rather than core.

## Authorization Handoff

After the candidate pack is completed, the next slice should prepare:

- provisional input IDs;
- approval status;
- warning language;
- expiry or review triggers;
- affected formulas;
- affected stakeholder views;
- outputs blocked or qualified.

No candidate becomes usable in a numeric model until it appears in [provisional-input-register-level-1.md](provisional-input-register-level-1.md) with explicit authorization.

## Workbook Impact

The workbook generator remains blocked until:

1. candidate values are completed;
2. candidates are reviewed;
3. selected inputs are authorized in the provisional input register;
4. [offering-economics-level-1.md](offering-economics-level-1.md) is populated;
5. [workbook-parity-validation.md](workbook-parity-validation.md) has numeric rows to validate.

## Next Slice

Complete [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md) with Conservative, Base, and Accelerated management candidates. Do not authorize them in that slice.
