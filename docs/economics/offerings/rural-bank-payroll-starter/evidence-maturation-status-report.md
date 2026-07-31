# Payroll Starter Evidence Maturation Status Report

Status: Evidence intake pending

Review date: 2026-07-14

Offering: `OFR-RB-PAYROLL-STARTER`

Model: Payroll Starter Offering Economics - Level 1 Controlled Placeholder Model

## Purpose

This report records the evidence maturity of the accepted Payroll Starter Level 1 model. It does not redesign the architecture, change an assumption value, authorize evidence, create a projection, or update the workbook.

The repository remains the commercial source of truth. The workbook remains a generated consumer of governed model inputs.

## Executive Status

| Measure | Current result |
| --- | --- |
| Evidence Packet 001 target assumptions | 14 |
| Target assumptions with accepted evidence-supported or approved inputs | 0 |
| Target assumptions represented by controlled placeholders | 14 |
| Target assumptions still Blocked in the canonical Assumptions Register | 14 |
| Completed packet responses with respondent provenance | 0 |
| Target assumptions eligible for a value update now | 0 |
| Later blocked assumptions resolved | 0 |

The current repository state supports Level 1 formula testing and controlled scenario analysis. It does not yet support replacing any Evidence Packet 001 input with an evidence-supported or approved value.

The current numeric ranges have provisional-input lineage. That lineage is not equivalent to adoption evidence, customer evidence, a provider quote, observed operating data, a professional opinion, or management approval of a final input.

## Review Provenance

This provenance describes the repository review that produced this report. It is not evidence for an assumption value.

```text
Evidence date: 2026-07-14
Evidence period: Repository state reviewed on 2026-07-14
Responding organization: Not applicable - documentary repository review
Respondent role: Not applicable
Population or sample represented: Payroll Starter canonical assumptions, provisional Level 1 inputs, workbook specification, Evidence Packet 001, and available evidence instruments
Method used: Documentary trace from canonical assumption IDs to provisional inputs, evidence instruments, workbook sheets, and blocked outputs
Range interpretation: Not applicable
Range period: Not applicable
Range population: Not applicable
Range exclusions: No external respondent data, provider quotation, pilot log, contract, professional opinion, approval memo, or completed questionnaire was present
Expected central value, if any: None
Known exclusions: No independent validation of workbook values and no external evidence collection
Known limitations: A scaffolded instrument or packet proves an acquisition path, not the factual support for a model input
Confidentiality classification: Repository-internal review
Confidentiality restrictions: Follow repository access controls
Permitted modeling use: Evidence-maturation planning and governance review only
Permitted sharing: Internal repository stakeholders subject to repository access controls
Expiry or validity period: Re-review when an evidence response, attachment, approval, or canonical assumption update is added
Supporting attachment or reference: Evidence Packet 001 and the source documents listed below
Reviewer notes: No target assumption passed the evidence acceptance gate during this review
```

Primary reviewed sources:

- [evidence-to-model-update-plan.md](evidence-to-model-update-plan.md)
- [evidence-packets/evidence-packet-001-core-model-inputs.md](evidence-packets/evidence-packet-001-core-model-inputs.md)
- [evidence-instruments/README.md](evidence-instruments/README.md)
- [provisional-input-register-level-1.md](provisional-input-register-level-1.md)
- [offering-economics-level-1.md](offering-economics-level-1.md)
- [spreadsheet-financial-model.md](spreadsheet-financial-model.md)
- [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md)

## Evidence Packet 001 Maturity

All 14 target assumptions have an acquisition path and a controlled placeholder, but none has a completed evidence response or accepted replacement record.

| Assumption | Current evidence on file | Canonical evidence status | Current Level 1 treatment | Next acceptance evidence |
| --- | --- | --- | --- | --- |
| `ADP-002` | No bank, RBAP, pipeline, or pilot response; packet and questionnaire only | Open | `PI-L1-002` controlled placeholder | Bank-by-bank or cohort active-bank schedule tied to readiness, activation, and churn, with owner review |
| `ADP-003` | No activation-timing or go-live evidence; packet and questionnaire only | Institutional data required | `PI-L1-003` controlled placeholder | Activation dates or reviewed implementation schedule supporting weighted active months |
| `CUS-001` | No payroll portfolio or employer-pipeline data; packet and questionnaire only | Institutional data required | `PI-L1-004` controlled placeholder | Anonymized bank payroll portfolio, pipeline, or reviewed bank-level employer count |
| `CUS-002` | No employer payroll schedule or operating record; packet and questionnaire only | Institutional data required | `PI-L1-005` controlled placeholder | Employer payroll schedules or interviews with sample and segment provenance |
| `CUS-003` | No recipient-count evidence; packet and questionnaire only | Institutional data required | `PI-L1-006` controlled placeholder | Employer payroll records or bank portfolio evidence for recipients per run |
| `VOL-002` | No attempted, successful, failed, reversed, or reconciled event data | Open | `PI-L1-007` controlled placeholder | Approved event definitions plus pilot, reconciliation, or banking-partner execution evidence |
| `EMP-001` | Economic-treatment rationale and provisional range only; no employer pricing evidence | Management estimate required | `PI-L1-009` controlled placeholder | Employer evidence on onboarding work, value, affordability, and willingness to pay, followed by commercial review |
| `EMP-002` | Economic-treatment rationale and provisional range only; no recurring-price evidence | Management estimate required | `PI-L1-010` controlled placeholder | Employer evidence on recurring service value, monthly affordability, and willingness to pay, followed by commercial review |
| `RB-001` | Allocation principle and provisional retained amount only; no approved commercial or professional review | Legal review required | `PI-L1-014` controlled placeholder | Rural Bank and ODTI retained-economics decision reconciled to `PRC-001`, then accounting, legal, and tax review |
| `ODTI-001` | No support plan, effort log, staffing basis, or approved management estimate | Management estimate required | `PI-L1-017` controlled placeholder | Payroll-specific recurring support work breakdown separated from DevOps, cloud, and shared platform cost |
| `ODTI-002` | No implementation work breakdown, timesheet, or approved management estimate | Management estimate required | `PI-L1-018` controlled placeholder | Implementation activity and effort basis separated from `LIC-004` and `OPS-001` |
| `OPS-003` | No DevOps estimate, tool schedule, on-call model, or pilot log | Management estimate required | `PI-L1-021` controlled placeholder | Direct engineering, tooling, monitoring, backup, and on-call cost estimate separated from provider fees and cloud |
| `CLD-001` | No target-architecture calculator export, quote, or billing-owner confirmation | Provider service data required | `PI-L1-022` controlled placeholder | Cloud-cost estimate tied to target architecture and the bank-owned account model |
| `RISK-002` | No collection policy, aging data, comparable history, or accounting review | Accounting review required | `PI-L1-023` controlled placeholder | Commercial-fee collection policy and evidence, with confirmation that payroll pass-through is excluded |

### Current Classification

- **Evidence-supported or approved:** none of the 14 target assumptions.
- **Provisional:** all 14 target assumptions through `PI-L1-002` through `PI-L1-007`, `PI-L1-009`, `PI-L1-010`, `PI-L1-014`, and `PI-L1-017` through `PI-L1-023`.
- **Canonical status:** all 14 remain `Blocked` in the Assumptions Register until governed evidence and authority support a status change.
- **Derived value:** `VOL-001` remains component-derived from `CUS-001 x CUS-002 x CUS-003 x VOL-002`; it is not independently eligible for evidence replacement under the selected method.

## Instrument Coverage Status

The three identified acquisition-governance gaps were closed on 2026-07-14 without assigning assumption values.

| Gap | Resolution | Remaining evidence requirement |
| --- | --- | --- |
| `EMP-001` and `EMP-002` | Explicit onboarding-fee and monthly-service-fee questions, range semantics, scope, affordability, and evidence-basis fields were added to the Employer Payroll Questionnaire and ODTI worksheet | Employer responses and management review remain outstanding |
| `RB-002` | A payroll-support work, time, cost, and allocation section was added to the Rural Bank and RBAP questionnaire under the existing ID | Bank operations evidence and finance review remain outstanding |
| `FIN-001` | The canonical Blocked assumption and the Finance Capital-Budgeting Assumption Request were added without assigning a value | Finance evidence, cash-flow consistency, review, and approval remain outstanding |

These are evidence-governance gaps, not reasons to redesign the commercial model.

## Later Blocked Assumptions

| Assumption | Evidence maturity | Required next evidence or decision | Output that remains blocked |
| --- | --- | --- | --- |
| `RB-002` | Canonical, Blocked, no Level 1 value | Rural Bank operations interview, staffing and time-and-motion evidence, support-ticket or exception evidence, finance review | True Rural Bank incremental contribution, Rural Bank payback, and unqualified profitability claims |
| `NET-001` | Canonical, Blocked, no Level 1 value | NetBank or banking-partner role confirmation, fee schedule or proposal, settlement and account structure, legal and accounting review | NetBank-fee-adjusted Rural Bank, ODTI, consolidated, and final contribution results |
| `NET-002` | Canonical, Blocked, no Level 1 value | NetBank operating-burden estimate or disclosed cost basis, with scope and limitations | NetBank cost and contribution view |
| `TAX-001` | Canonical, Blocked, no Level 1 value | Professional tax treatment by revenue, provider payment, royalty, withholding, timing, and entity | Tax-adjusted revenue, tax payable, and final net income |
| `ROY-001` | Canonical, Blocked, no Level 1 value | 3neti-ODTI decision paper or agreement, related-party review, accounting review, and tax review | 3neti royalty revenue and ODTI post-royalty contribution |
| `FIN-001` | Canonical, Blocked, no Level 1 value | Finance evidence, approved capital-budgeting basis, review trigger, and permitted use | NPV, discounted payback, profitability index, and discount-rate sensitivity; capital-budgeting outputs also require valid cash flows |

`NET-*` currently means `NET-001` and `NET-002`. No additional NetBank assumption should be created merely to represent the same fee or operating-cost concepts.

## Evidence Instruments To Send Next

### Wave 1: Factual Evidence Collection

Send these in parallel after assigning named respondents and reviewers:

1. [evidence-instruments/rural-bank-and-rbap-questionnaire.md](evidence-instruments/rural-bank-and-rbap-questionnaire.md) to at least one pilot-bank source and the RBAP liaison for `ADP-002`, `ADP-003`, and `CUS-001`, requesting portfolio and readiness attachments rather than confirmation of current placeholders.
2. [evidence-instruments/employer-payroll-questionnaire.md](evidence-instruments/employer-payroll-questionnaire.md) to a documented sample across target employer segments for `CUS-002`, `CUS-003`, `VOL-002`, `EMP-001`, and `EMP-002`, after the explicit pricing-question gap is corrected.
3. [evidence-instruments/devops-and-cloud-estimate-request.md](evidence-instruments/devops-and-cloud-estimate-request.md) to the DevOps provider and cloud-cost owner for `OPS-003` and `CLD-001`, requiring a work breakdown and calculator export or quote.
4. [evidence-instruments/netbank-information-request.md](evidence-instruments/netbank-information-request.md) to the identified banking or infrastructure participant for `VOL-002` event semantics and, separately, `NET-001` and `NET-002` role, fee, and operating evidence.

### Wave 2: Management Synthesis

5. Send [evidence-instruments/odti-3neti-commercial-decision-worksheet.md](evidence-instruments/odti-3neti-commercial-decision-worksheet.md) after the factual responses are available. Use it to record management treatment for `EMP-001`, `EMP-002`, `RB-001`, `ODTI-001`, `ODTI-002`, `RISK-002`, and later `ROY-001`; do not use it to convert unsupported placeholders into facts.

### Wave 3: Professional Review

6. Send [evidence-instruments/legal-accounting-tax-privacy-handoff.md](evidence-instruments/legal-accounting-tax-privacy-handoff.md) with the factual responses, proposed commercial decisions, draft terms, and line-item mapping attached. The immediate review targets are `RB-001` and `RISK-002`; the later blocked review targets are `NET-001`, `TAX-001`, and `ROY-001`.

Every response must carry the shared provenance block. Responses without population, method, limitations, permitted use, authority, and validity period should remain evidence gaps rather than model inputs.

## Assumptions That Can Be Updated Now

No assumption value or canonical evidence status can be updated now.

The repository currently contains acquisition scaffolds and provisional-input lineage, not completed evidence that passes the acceptance gate. Instrument coverage was corrected and the missing canonical `FIN-001` record was added without a value. Future process records may be updated only when dispatch, receipt, review, or approval actually occurs.

After evidence is received, each assumption must be reviewed independently. Acceptance of one input does not authorize related inputs, and acceptance of a range does not automatically authorize its midpoint.

## Workbook Outputs That Would Change After Acceptance

No workbook change is authorized by this report. If evidence is later accepted and canonical records are updated first, the following generated outputs would change.

| Accepted assumption group | Direct workbook inputs and outputs | Downstream generated outputs |
| --- | --- | --- |
| `ADP-002`, `ADP-003`, `CUS-001` | `02_Assumptions`, `04_Adoption`; active banks, active bank-months, active employers, newly onboarded employer relationships | `05_Payroll_Activity`, all volume-driven revenue and cost views, scenarios, dashboard, break-even, and sensitivity outputs |
| `CUS-002`, `CUS-003`, `VOL-002` | `02_Assumptions`, `05_Payroll_Activity`; derived `VOL-001` and annual successful payroll transactions | `07_Revenue`, Rural Bank and ODTI transaction economics, optional SMS volume, consolidated view, P&L, scenarios, dashboard, and volume sensitivities |
| `EMP-001`, `EMP-002` | `02_Assumptions`, `06_Pricing`; employer onboarding and recurring service fees | `07_Revenue`, `10_Rural_Bank_View`, `11_ODTI_View`, `14_Consolidated_View`, `15_Profit_and_Loss`, `16_Cash_Flow` where timing is available, scenarios, dashboard, and fee sensitivities |
| `RB-001` | `02_Assumptions`, `06_Pricing`; Rural Bank retained amount and ODTI recipient transaction amount | Rural Bank contribution before `RB-002`, ODTI contribution, consolidated internal allocation, P&L, dashboard, and retained-amount sensitivity |
| `ODTI-001`, `ODTI-002` | `02_Assumptions`, `09_Operating_Expenses`; recurring support and implementation cost | `11_ODTI_View`, ODTI P&L and cash flow, contribution, break-even, scenarios, dashboard, and support-cost sensitivity |
| `OPS-003` | `02_Assumptions`, `09_Operating_Expenses`; DevOps direct recurring cost | `12_DevOps_View`, DevOps contribution, P&L, cash flow, scenarios, dashboard, and DevOps-cost sensitivity |
| `CLD-001` | `02_Assumptions`, `09_Operating_Expenses`; Rural Bank external cloud outflow | `10_Rural_Bank_View`, `14_Consolidated_View`, P&L, cash flow, full-cost stress result, scenarios, and dashboard; it remains outside DevOps contribution |
| `RISK-002` | `02_Assumptions`, `08_Cost_of_Sales`; commercial-fee non-collection | Collected Rural Bank and ODTI revenue, consolidated contribution, P&L, partial cash-flow outputs, scenarios, dashboard, and optional SMS collected revenue |

Every accepted update would also change evidence status and lineage in `02_Assumptions`, `03_Assumption_Map`, `21_Checks`, and `22_Source_Lineage`. The builder input must change only after the canonical and provisional-input records are governed.

## Outputs That Remain Blocked

Evidence Packet 001 can improve operating credibility without producing final net economics. These outputs remain blocked until their separate prerequisites are resolved:

| Output | Blocking assumptions or dependencies |
| --- | --- |
| Rural Bank true incremental contribution and unqualified Rural Bank profitability | `RB-002` |
| NetBank-fee-adjusted Rural Bank, ODTI, and consolidated results | `NET-001` |
| NetBank cost and contribution | `NET-002` |
| Tax-adjusted results, tax payable, and final net income | `TAX-001` |
| 3neti royalty revenue and ODTI post-royalty contribution | `ROY-001`, `TAX-001`, and related-party/accounting review |
| Ending cash and complete working-capital view | `COL-001`, beginning cash, financing assumptions, and payment-timing evidence |
| NPV, discounted payback, profitability index, and discount-rate sensitivity | Canonical `FIN-001` plus valid cash flows; final forms also depend on `COL-001`, `RB-002`, `NET-001`, `TAX-001`, and `ROY-001` as applicable |
| IRR | Valid cash-flow series with at least one negative and one positive flow plus the relevant unresolved cash-flow prerequisites |
| Investment-grade or contract-grade conclusions | Resolution and approval of all material provisional and blocked inputs, with authority and professional review where required |

Blocked cells must remain visibly blocked. They must not be populated with zero to make a result appear complete.

## Next Evidence Packet

`Evidence Packet 002: Blocked Net-Economics And Capital-Budgeting Preconditions` is now prepared but not issued. Evidence Packet 001 factual responses should be available where they affect support scope, pricing, collection, or transaction semantics.

Recommended scope:

| Packet area | Assumptions | Evidence objective |
| --- | --- | --- |
| Rural Bank internal operations | `RB-002` | Establish the payroll-specific labor, support, exception, reconciliation, reporting, and compliance cost basis |
| Banking and infrastructure role | `NET-001`, `NET-002` | Establish factual role, external fee basis, operating burden, settlement structure, and accounting boundary |
| Collection timing dependency | `COL-001` | Establish billing, collection, remittance, and provider-payment timing needed for cash flow |
| Tax and withholding | `TAX-001` | Obtain professional treatment by fee, entity, provider payment, royalty, and timing |
| 3neti consideration | `ROY-001` | Record the management decision and obtain legal, accounting, tax, and related-party review |
| Capital-budgeting rate | `FIN-001` | Approve the discount-rate basis and permitted use without inventing a rate |

Packet 002 should not begin by selecting values. It should first close the instrument gaps, assign owners and reviewers, collect factual evidence, and preserve unresolved items as blocked.

## Governance Verification

| Verification | Result |
| --- | --- |
| No architecture was redesigned | Confirmed. This report uses the accepted offering boundary, stakeholder views, component-derived volume method, pass-through treatment, and workbook structure. |
| No assumptions were duplicated | Confirmed. Existing canonical IDs are used. `VOL-001` remains derived, `NET-*` remains `NET-001` and `NET-002`, and `FIN-001` was added once under its previously reserved ID. |
| No workbook values were edited directly | Confirmed. The `.xlsx` and numeric generator inputs remain unchanged; only blocked-state metadata was aligned to canonical `FIN-001`. |
| Evidence provenance is captured | Confirmed for this repository review. The shared provenance standard remains mandatory for every future response; no assumption-level respondent provenance exists yet. |
| Blocked assumptions remain visible | Confirmed. `RB-002`, `NET-001`, `NET-002`, `TAX-001`, `ROY-001`, and canonical `FIN-001` remain explicitly Blocked. |
| Payroll remains the canonical Level 1 model | Confirmed. The current Payroll Starter Level 1 controlled-placeholder model remains canonical until a governed evidence update is accepted and propagated through the approved update lifecycle. |

The required update path remains:

```text
Evidence packet
-> evidence provenance review
-> canonical assumption or provisional-input record update
-> workbook generator input update
-> workbook regeneration
-> validation and review ZIP
```
