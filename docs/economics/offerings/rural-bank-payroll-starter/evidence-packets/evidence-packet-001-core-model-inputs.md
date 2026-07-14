# Evidence Packet 001: Core Model Inputs

Status: Scaffolded

Offering: `OFR-RB-PAYROLL-STARTER`

Packet purpose: collect the first evidence set needed to improve the Level 1 Payroll Starter workbook without changing workbook values yet.

This packet covers adoption, activity, employer pricing, ODTI cost, DevOps cost, cloud cost, and collection risk.

## Warning

This packet does not authorize values, update assumptions, update the workbook, or create a forecast.

Any evidence collected through this packet must pass through the governed update path in [../evidence-to-model-update-plan.md](../evidence-to-model-update-plan.md) before the workbook can be regenerated.

## Target Outcome

The packet should produce enough reviewed evidence to decide whether the current Level 1 provisional inputs should be:

- retained as provisional;
- replaced by evidence-supported Active inputs;
- replaced by approved inputs;
- narrowed into evidence-supported ranges;
- left blocked;
- or flagged for commercial revision.

## Packet Scope

Included:

- active-bank adoption and timing;
- payroll employer base;
- payroll frequency;
- recipients per payroll run;
- completion rate;
- employer onboarding and monthly service pricing;
- Rural Bank retained transaction economics;
- ODTI implementation and support cost;
- DevOps direct operating cost;
- public-cloud cost;
- commercial-fee non-collection risk.

Excluded:

- tax treatment;
- 3neti royalty;
- NetBank fees;
- Rural Bank internal payroll-support cost `RB-002`;
- discount rate `FIN-001`;
- SMS provider pricing and service performance;
- investor return;
- business-development partner allocation;
- any workbook value update.

## Assumption Coverage

| Assumption ID | Provisional input ID | Evidence objective | Primary source | Secondary source | Owner | Acceptance target |
| --- | --- | --- | --- | --- | --- | --- |
| `ADP-002` | `PI-L1-002` | Active banks by year tied to realistic onboarding, activation, and churn. | Rural Bank or RBAP | ODTI management | ODTI commercial owner and RBAP liaison | Evidence-supported active-bank schedule or reviewed management scenario. |
| `ADP-003` | `PI-L1-003` | Weighted average active months per active bank by year. | Rural Bank or RBAP | ODTI implementation owner | ODTI implementation owner | Activation-timing basis that avoids assuming full-year activity for partial-year banks. |
| `CUS-001` | `PI-L1-004` | Payroll customers per active rural bank. | Rural Bank or RBAP | Employer pipeline data | ODTI commercial owner and rural-bank relationship owner | Bank-level payroll employer portfolio or pipeline basis. |
| `CUS-002` | `PI-L1-005` | Payroll runs per customer per month. | Employer data | Rural Bank payroll portfolio | ODTI commercial owner | Evidence of payroll frequency across target employers. |
| `CUS-003` | `PI-L1-006` | Average recipients per payroll run. | Employer data | Rural Bank payroll portfolio | ODTI commercial owner | Evidence of target employer payroll size. |
| `VOL-002` | `PI-L1-007` | Successful completion rate for qualifying recipient disbursements. | Pilot or operational data | NetBank or banking partner where relevant | ODTI operations owner | Definition of attempted, successful, failed, reversed, and qualifying events plus rate evidence or reviewed placeholder. |
| `EMP-001` | `PI-L1-009` | Employer payroll onboarding fee support. | Employer interviews | ODTI commercial decision worksheet | ODTI commercial owner | Evidence of onboarding value, affordability, and commercial decision basis. |
| `EMP-002` | `PI-L1-010` | Employer monthly payroll-service fee support. | Employer interviews | ODTI commercial decision worksheet | ODTI commercial owner | Evidence of recurring service value, affordability, and commercial decision basis. |
| `RB-001` | `PI-L1-014` | Rural Bank retained transaction economics. | ODTI and Rural Bank commercial review | Legal and accounting review | ODTI commercial owner and rural-bank commercial owner | Explicit retained-economics rule that reconciles with `PRC-001` and does not double count customer fees. |
| `ODTI-001` | `PI-L1-017` | ODTI payroll-specific support cost per active bank-month. | ODTI management | Pilot effort log | ODTI operations owner | Support-cost basis separated from DevOps, cloud, and shared platform costs. |
| `ODTI-002` | `PI-L1-018` | ODTI payroll-specific implementation cost per newly onboarded bank. | ODTI implementation owner | Pilot implementation evidence | ODTI implementation owner | Implementation work breakdown separated from `LIC-004` activation price and DevOps setup. |
| `OPS-003` | `PI-L1-021` | DevOps direct recurring engineering and tooling cost per active bank-month. | DevOps Provider | Tool quotes and pilot support logs | DevOps provider owner | Direct-cost estimate separated from `OPS-001`, `OPS-002`, and `CLD-001`. |
| `CLD-001` | `PI-L1-022` | Public-cloud cost per active bank-month. | DevOps Provider or cloud-cost owner | Cloud provider calculator or quote | Rural Bank infrastructure owner and DevOps Provider | Cloud architecture estimate under rural-bank-owned account model. |
| `RISK-002` | `PI-L1-023` | Non-collection rate on employer commercial fees. | ODTI finance | Accounting review | ODTI finance owner | Collection policy and risk basis that applies only to commercial fees, not payroll pass-through value. |

## Required Instruments

| Instrument | Packet use |
| --- | --- |
| [../evidence-instruments/rural-bank-and-rbap-questionnaire.md](../evidence-instruments/rural-bank-and-rbap-questionnaire.md) | Collect `ADP-002`, `ADP-003`, and `CUS-001` evidence. |
| [../evidence-instruments/employer-payroll-questionnaire.md](../evidence-instruments/employer-payroll-questionnaire.md) | Collect `CUS-002`, `CUS-003`, `EMP-001`, and `EMP-002` evidence. |
| [../evidence-instruments/odti-3neti-commercial-decision-worksheet.md](../evidence-instruments/odti-3neti-commercial-decision-worksheet.md) | Collect `EMP-001`, `EMP-002`, `RB-001`, `ODTI-001`, `ODTI-002`, and `RISK-002` management evidence. |
| [../evidence-instruments/devops-and-cloud-estimate-request.md](../evidence-instruments/devops-and-cloud-estimate-request.md) | Collect `OPS-003` and `CLD-001` evidence. |
| [../evidence-instruments/netbank-information-request.md](../evidence-instruments/netbank-information-request.md) | Collect event-definition and execution evidence relevant to `VOL-002` where NetBank or a banking partner participates. |
| [../evidence-instruments/legal-accounting-tax-privacy-handoff.md](../evidence-instruments/legal-accounting-tax-privacy-handoff.md) | Review `RB-001` and `RISK-002` implications where accounting, disclosure, collection, or tax treatment affects use. |

## Evidence Request Blocks

### Block A: Rural Bank And RBAP Adoption

Target assumptions: `ADP-002`, `ADP-003`, `CUS-001`

Required evidence:

- list or count of candidate participating banks by readiness stage;
- activation timing assumptions by bank or cohort;
- current employer payroll customers per candidate bank;
- expected active employer conversion;
- onboarding and go-live constraints;
- causes of inactive or delayed banks;
- known limits on branch, operations, compliance, and IT capacity.

Minimum acceptable evidence:

- structured management scenario reviewed with at least one rural-bank or RBAP source;
- explicit distinction between onboarded banks and active banks;
- weighted active-month basis.

Preferred evidence:

- bank-by-bank readiness list;
- anonymized payroll portfolio data;
- pilot go-live schedule;
- observed activation timing.

### Block B: Employer Payroll Activity

Target assumptions: `CUS-002`, `CUS-003`, `VOL-002`

Required evidence:

- payroll runs per month by employer type;
- recipients per payroll run;
- supplemental or irregular payroll frequency;
- attempted recipient disbursements;
- successful recipient disbursements;
- failed, reversed, corrected, or exception events;
- event definitions used to calculate completion.

Minimum acceptable evidence:

- employer interview evidence or rural-bank payroll portfolio evidence with stated limitations;
- explicit definition of a qualifying successful payroll transaction.

Preferred evidence:

- employer payroll records;
- pilot transaction logs;
- reconciliation reports;
- banking or rail execution status evidence.

### Block C: Employer Pricing And Revenue Split

Target assumptions: `EMP-001`, `EMP-002`, `RB-001`

Required evidence:

- employer view of onboarding work and value;
- employer view of recurring payroll-service value;
- willingness-to-pay evidence or affordability feedback;
- Rural Bank retained-economics preference;
- ODTI retained-economics requirement;
- customer disclosure and fee structure implications;
- confirmation that retained economics are derived from employer-paid fees, not additional inflows.

Minimum acceptable evidence:

- management-reviewed pricing rationale plus employer or rural-bank feedback;
- explicit split or retained-economics rule that reconciles to employer-paid amounts.

Preferred evidence:

- employer interview set across target segments;
- rural-bank commercial approval;
- documented ODTI commercial decision;
- accounting review for gross/net and collection treatment.

### Block D: ODTI Cost Backbone

Target assumptions: `ODTI-001`, `ODTI-002`

Required evidence:

- payroll-specific implementation work breakdown;
- training and configuration effort;
- commercial onboarding effort;
- reporting and reconciliation work;
- recurring support model;
- staffing or contractor assumptions;
- separation from DevOps, cloud, and shared modernization costs.

Minimum acceptable evidence:

- ODTI management estimate with work categories and owner review;
- unit basis tied to active bank-months or newly onboarded banks.

Preferred evidence:

- pilot timesheets;
- implementation checklist with effort by activity;
- support ticket history;
- staffing plan.

### Block E: DevOps And Cloud Cost Backbone

Target assumptions: `OPS-003`, `CLD-001`

Required evidence:

- direct engineering and tooling cost per active bank-month;
- monitoring, backup, security, certificate, and on-call cost basis;
- public-cloud architecture and monthly cost estimate;
- distinction between bank-owned cloud account and DevOps managed-operations fee;
- provider replacement and handover assumptions.

Minimum acceptable evidence:

- DevOps estimate with cost categories separated from customer-facing fees;
- cloud-cost estimate tied to target architecture.

Preferred evidence:

- tool quotes;
- cloud provider calculator export or quote;
- pilot support logs;
- incident and on-call staffing model.

### Block F: Collection Risk

Target assumption: `RISK-002`

Required evidence:

- collection policy;
- invoicing and payment cycle;
- treatment of late payment and non-payment;
- whether bad debt applies to Rural Bank, ODTI, DevOps, or provider payments;
- confirmation that non-collection does not reduce payroll pass-through value;
- accounting review where collection and revenue recognition differ.

Minimum acceptable evidence:

- management collection policy and accounting-review requirement;
- explicit statement that `RISK-002` applies to commercial fees only.

Preferred evidence:

- actual collection history from pilot or comparable services;
- aging analysis;
- accounting-reviewed bad-debt treatment.

## Evidence Provenance Checklist

Every packet response must include the shared provenance block from [../evidence-instruments/README.md](../evidence-instruments/README.md):

```text
Evidence date:
Evidence period:
Responding organization:
Respondent role:
Population or sample represented:
Method used:
Range interpretation:
Range period:
Range population:
Range exclusions:
Expected central value, if any:
Known exclusions:
Known limitations:
Confidentiality classification:
Confidentiality restrictions:
Permitted modeling use:
Permitted sharing:
Expiry or validity period:
Supporting attachment or reference:
Reviewer notes:
```

## Review Outcomes

For each assumption, the reviewer should select one outcome:

| Outcome | Meaning |
| --- | --- |
| Evidence-supported Active candidate | Evidence is sufficient for internal Level 1 modeling but not final approval. |
| Approved input candidate | Evidence and authority support an approved input, subject to formal record update. |
| Retain provisional input | Evidence is insufficient to replace the current controlled placeholder. |
| Narrow provisional range | Evidence supports narrowing the placeholder range but not replacing it fully. |
| Remain blocked | Evidence does not support use. |
| Requires commercial decision | Evidence exists, but management must choose the commercial structure. |
| Requires legal/accounting/tax review | Evidence exists, but professional treatment controls use. |

## Workbook Update Gate

This packet is complete only when:

1. every target assumption has a response or a documented evidence gap;
2. every response includes provenance;
3. owner and reviewer are identified;
4. values, if any, are marked as evidence, estimate, range, or management judgment;
5. confidentiality and permitted modeling use are recorded;
6. affected provisional input IDs are identified;
7. replacement recommendations are documented;
8. canonical records are not changed inside this packet;
9. workbook values are not changed inside this packet;
10. the next governed update task is explicitly identified.

## Expected Next Action After Packet Review

After this packet is reviewed, create a governed evidence-update slice that:

1. updates the relevant canonical assumption records or evidence statuses;
2. updates or replaces affected provisional input records;
3. updates workbook generator inputs only after source documents change;
4. regenerates the workbook with `npm run finance:payroll:build-slice-7`;
5. validates it with `npm run finance:payroll:validate-slice-7`;
6. creates a review ZIP in `~/Downloads`.
