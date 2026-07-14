# Payroll Starter Evidence-to-Model Update Plan

Status: Scaffold

Offering: `OFR-RB-PAYROLL-STARTER`

Workbook: [artifacts/x-commerce-payroll-starter-financial-model.xlsx](../../../../artifacts/x-commerce-payroll-starter-financial-model.xlsx)

## Purpose

This plan governs how real evidence replaces provisional Level 1 inputs and then flows into the generated workbook.

The next phase is not a new model. It is a controlled update process for moving assumptions from provisional management candidates toward evidence-supported or approved inputs.

## Governance Rule

The repository remains the source of commercial truth.

The workbook calculates and presents governed inputs. It must not become the place where assumptions are silently changed.

No assumption value may be changed directly in the workbook as a source-of-truth edit. A value update must first be recorded in the relevant canonical documentation, provisional-input record, evidence record, or future governed assumptions artifact. The workbook is then regenerated from the repository.

## Source Documents

| Source | Role |
| --- | --- |
| [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md) | Canonical assumption IDs, statuses, owners, evidence states, and dependencies. |
| [evidence-acquisition-plan.md](evidence-acquisition-plan.md) | Evidence workstreams, priority, placeholder eligibility, and acquisition governance. |
| [evidence-instruments/README.md](evidence-instruments/README.md) | Shared evidence provenance fields and instrument index. |
| [provisional-input-register-level-1.md](provisional-input-register-level-1.md) | Level 1 provisional inputs and warning requirements. |
| [offering-economics-level-1.md](offering-economics-level-1.md) | Canonical Level 1 numeric model. |
| [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md) | Normalized stakeholder-facing summary. |
| [spreadsheet-financial-model.md](spreadsheet-financial-model.md) | Workbook design, sheet structure, validation, parity, and generation rules. |

## Update Lifecycle

1. Evidence is received through an approved instrument or documented source.
2. Evidence provenance is captured using the shared evidence block in [evidence-instruments/README.md](evidence-instruments/README.md).
3. The responsible owner reviews whether the evidence supports the intended modeling use.
4. The affected canonical assumption record is updated only through a governed documentation change.
5. The affected provisional-input record is replaced, retired, or reclassified.
6. Any workbook input data encoded in [scripts/finance/build_payroll_starter_model.mjs](../../../../scripts/finance/build_payroll_starter_model.mjs) is updated only after the canonical record is updated.
7. The workbook is regenerated using the approved builder.
8. Workbook validation and parity checks are run.
9. A review ZIP is created in `~/Downloads`.
10. The evidence update, workbook rebuild, and validation results are committed together unless the change is intentionally split.

## Initial Evidence Replacement Priorities

| Priority | Assumptions | Reason |
| --- | --- | --- |
| P0 | `ADP-002`, `ADP-003`, `CUS-001`, `CUS-002`, `CUS-003`, `VOL-002` | These drive active banks, active months, employer base, payroll frequency, recipients, completion, and transaction volume. |
| P0 | `EMP-001`, `EMP-002`, `RB-001`, `ODTI-001`, `ODTI-002`, `OPS-003`, `CLD-001`, `RISK-002` | These drive the first meaningful revenue split, cost backbone, contribution, and collection haircut. |
| P1 | `ADP-001`, `LIC-004`, `LIC-005`, `PRC-001`, `OPS-001`, `OPS-002`, `ATT-001`, `VAS-001`, `CST-001`, `SMS-001` | These improve commercial credibility and optional SMS quality but do not all block the Core Payroll operating view. |
| P2 | `RB-002`, `COL-001`, `NET-001`, `NET-002`, `TAX-001`, `ROY-001`, `FIN-001` | These are required for true bank contribution, cash timing, final net economics, capital budgeting, and investment-grade analysis. |

`RB-002`, `NET-*`, `TAX-001`, `ROY-001`, and `FIN-001` are commercially important even when a provisional operating view can proceed without them. They must remain visibly blocked or excluded until governed evidence exists.

## Evidence Workstreams

| Workstream | Primary assumptions | Evidence sources |
| --- | --- | --- |
| Rural Bank and RBAP | `ADP-001`, `ADP-002`, `ADP-003`, `CUS-001`, `RB-002` | Member surveys, pilot-bank interviews, payroll portfolio data, staffing interviews, readiness assessments. |
| Employers | `CUS-002`, `CUS-003`, `CUS-004`, `CUS-005`, `CUS-006`, `COL-001`, `ATT-001`, `PUB-002`, `PUB-003` | Employer payroll questionnaires, workflow interviews, payroll schedules, time-and-motion estimates, willingness-to-pay data. |
| ODTI and 3neti | `EMP-001`, `EMP-002`, `LIC-004`, `LIC-005`, `PRC-001`, `RB-001`, `ODTI-001`, `ODTI-002`, `ROY-001` | Commercial decision worksheet, implementation work breakdown, support plan, royalty decision paper, management approvals. |
| DevOps and Cloud | `OPS-001`, `OPS-002`, `OPS-003`, `CLD-001` | DevOps estimate, tool-cost schedule, cloud architecture estimate, cloud-provider pricing, on-call and support plan. |
| SMS Provider | `ATT-001`, `VAS-001`, `CST-001`, `SMS-001`, `SMS-002`, `SMS-003`, `SMS-004` | Provider quotation, billing unit, delivery reports, SLA definitions, retry and failed-message rules, privacy terms. |
| NetBank or Banking Partner | `NET-001`, `NET-002`, `VOL-002` where relevant | Role confirmation, fee schedule, API and settlement terms, account structure, reconciliation responsibilities. |
| Legal, Accounting, Tax, Privacy | `TAX-001`, `COL-001`, `NET-*`, `ROY-001`, `RB-001`, messaging consent dependencies | Legal characterization, revenue-recognition review, tax and withholding treatment, privacy review, customer-fund separation. |

## Evidence Acceptance Gate

An evidence update is ready to enter the model only when these items are recorded:

| Gate | Requirement |
| --- | --- |
| Assumption identity | A canonical assumption ID exists and is not duplicated. |
| Provenance | Evidence date, period, respondent, method, population, limitations, permitted use, and confidentiality are captured. |
| Authority | Owner and reviewer are recorded. |
| Status | Current status and evidence status are updated or explicitly left unchanged. |
| Modeling use | Permitted use states whether the value can support internal planning, sensitivity testing, contractual use, or only validation. |
| Replacement logic | Any provisional input being replaced is identified. |
| Downstream impact | Affected workbook tabs, stakeholder views, and blocked outputs are listed. |
| Expiry | Validity period or review trigger is recorded. |

## Workbook Update Controls

The workbook may be regenerated only after the source records are updated.

Standard commands:

```text
npm run finance:payroll:build-slice-7
npm run finance:payroll:validate-slice-7
```

The generated workbook path remains:

```text
artifacts/x-commerce-payroll-starter-financial-model.xlsx
```

The workbook must continue to preserve:

- Core Payroll separate from optional SMS;
- stakeholder revenue non-additivity warnings;
- payroll funding as pass-through;
- `VOL-001` as component-derived under the selected method;
- blocked `RB-002`, `NET-*`, `TAX-001`, `ROY-001`, and `FIN-001` where unresolved;
- consolidated external revenue counted once;
- internal transfers eliminated;
- workbook source lineage back to canonical assumptions and provisional inputs.

## Change Log Template

Each evidence-to-model update should include a record using this structure:

```text
Evidence Update ID:
Date:
Assumption ID:
Assumption name:
Prior input source:
Prior provisional input ID:
Replacement evidence:
Evidence status:
Current status after update:
Owner:
Reviewer:
Permitted modeling use:
Affected workbook sheets:
Affected stakeholder views:
Blocked outputs changed:
Workbook rebuild command:
Workbook validation result:
Review ZIP:
Notes:
```

## Recommended First Evidence Packet

The first packet should target the assumptions that most affect the workbook's credibility without requiring final legal, tax, royalty, or NetBank resolution.

Packet scaffold:

```text
evidence-packets/evidence-packet-001-core-model-inputs.md
```

Recommended packet:

| Packet area | Assumptions |
| --- | --- |
| Adoption and activity | `ADP-002`, `ADP-003`, `CUS-001`, `CUS-002`, `CUS-003`, `VOL-002` |
| Employer pricing and revenue split | `EMP-001`, `EMP-002`, `RB-001` |
| ODTI cost backbone | `ODTI-001`, `ODTI-002` |
| DevOps and cloud cost backbone | `OPS-003`, `CLD-001` |
| Collection risk | `RISK-002` |

This packet should make the Level 1 workbook substantially more evidence-grounded while preserving the unresolved exclusions for true bank support cost, NetBank fees, taxes, royalties, and capital-budgeting discount rate.

## Deferred Update Areas

| Area | Reason for deferral |
| --- | --- |
| `RB-002` | Requires bank operations evidence before true Rural Bank net contribution can be shown. |
| `NET-001` and `NET-002` | Requires NetBank or banking-partner role and fee evidence. |
| `TAX-001` | Requires tax review; should not be guessed. |
| `ROY-001` | Requires 3neti and ODTI commercial decision and related review. |
| `FIN-001` | Required for NPV, discounted payback, and discount-rate sensitivity; should be added through a governed assumptions slice. |
| SMS internal provider economics | `SMS-002` may remain outside the first model if the SMS provider is treated as an external provider and does not disclose internal cost. |

## Non-Goals

This scaffold does not:

- change any assumption value;
- update the workbook;
- authorize evidence;
- replace provisional inputs;
- create a forecast;
- resolve tax, royalty, NetBank, or investor-return treatment;
- create a new offering model;
- make the workbook the commercial source of truth.

## Next Task

Create the first evidence packet for adoption, activity, employer pricing, ODTI cost, DevOps cost, cloud cost, and collection risk. After the packet is reviewed, update the canonical records and regenerate the workbook through the Slice 7 builder.
