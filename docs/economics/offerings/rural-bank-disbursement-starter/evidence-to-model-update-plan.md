# Evidence-To-Model Update Plan: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

This plan governs how future evidence replaces provisional Disbursement inputs and then flows into any generated model or workbook. It does not change values, authorize evidence, create projections, or generate a workbook.

## Governance Rule

The repository remains the source of commercial truth.

Any evidence-backed change must flow through:

```text
Evidence packet
-> evidence provenance review
-> canonical assumption or provisional-input record update
-> model calculation update
-> workbook generator input update, if a workbook exists
-> workbook regeneration
-> validation and review ZIP
```

No `.xlsx` workbook may be edited directly as a source-of-truth change.

## Source Documents

| Source | Role |
| --- | --- |
| [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md) | Canonical assumption identifiers and statuses. |
| [assumptions-register-expansion-plan.md](assumptions-register-expansion-plan.md) | Candidate Disbursement assumptions awaiting governance. |
| [evidence-acquisition-plan.md](evidence-acquisition-plan.md) | Evidence workstreams, priorities, owners, and placeholder eligibility. |
| [evidence-instruments/README.md](evidence-instruments/README.md) | Shared evidence provenance and instrument index. |
| [provisional-input-register-level-1.md](provisional-input-register-level-1.md) | Future authorized provisional inputs. |
| [offering-economics-level-1.md](offering-economics-level-1.md) | Future Level 1 numeric model. |
| [spreadsheet-financial-model.md](spreadsheet-financial-model.md) | Future workbook design. |
| [workbook-slices.md](workbook-slices.md) | Future workbook implementation slice plan. |

## Update Lifecycle

1. Evidence is received through an approved instrument or documented source.
2. Evidence provenance is captured.
3. The owner reviews whether the evidence supports the intended modeling use.
4. The canonical assumption record is created or updated through a governed documentation change.
5. The provisional-input register is updated, replaced, retired, or reclassified.
6. The Level 1 model is recalculated only after source records change.
7. If a workbook exists, the workbook generator input is updated only after canonical sources are updated.
8. The workbook is regenerated through the approved builder.
9. Validation and parity checks are run.
10. A review ZIP is created in `~/Downloads`.
11. The evidence update and generated artifacts are committed in a controlled slice.

## Initial Evidence Replacement Priorities

| Priority | Assumptions | Reason |
| --- | --- | --- |
| P0 | `ADP-002`, `ADP-003`, `DSP-CUS-001`, `DSP-CUS-002`, `DSP-CUS-003`, `DSP-VOL-002` | Adoption and activity drive every revenue and cost view. |
| P0 | `DSP-PRICE-001`, `DSP-PRICE-002`, `DSP-PRICE-003`, `DSP-RB-001` | Sponsor pricing and revenue split drive stakeholder economics. |
| P0 | `DSP-ODTI-001`, `DSP-ODTI-002`, `OPS-003`, `CLD-001`, `RISK-002` | Cost backbone and collection risk drive contribution. |
| P1 | `DSP-RB-002`, `NET-001`, `TAX-001`, `ROY-001` | Required for final net economics and true Rural Bank contribution. |
| P2 | Optional notification assumptions and `FIN-001` | Required for notification variant and capital budgeting. |

## Evidence Acceptance Gate

An evidence update is ready to enter the model only when:

- assumption identity is canonical;
- evidence date and period are recorded;
- respondent or source is recorded;
- population and limitations are recorded;
- permitted modeling use is recorded;
- confidentiality restrictions are recorded;
- owner and reviewer are recorded;
- affected provisional input is identified;
- downstream outputs are identified;
- expiry or review trigger is recorded.

## Workbook Update Controls

No Disbursement workbook currently exists.

When one exists, standard update controls should include:

```text
npm run finance:disbursement:build
npm run finance:disbursement:validate
```

These commands do not exist yet and must not be assumed available until a future workbook-generation slice creates them.

## Change Log Template

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
Affected model sections:
Affected workbook sheets:
Blocked outputs changed:
Validation result:
Review ZIP:
Notes:
```

## Recommended First Evidence Packet

The first Disbursement evidence packet should target:

| Packet area | Assumptions |
| --- | --- |
| Adoption and sponsor base | `ADP-002`, `ADP-003`, `DSP-CUS-001` |
| Activity | `DSP-CUS-002`, `DSP-CUS-003`, `DSP-VOL-002` |
| Sponsor pricing and split | `DSP-PRICE-001`, `DSP-PRICE-002`, `DSP-PRICE-003`, `DSP-RB-001` |
| ODTI cost | `DSP-ODTI-001`, `DSP-ODTI-002` |
| DevOps and cloud | `OPS-003`, `CLD-001` |
| Collection risk | `RISK-002` |

## Deferred Update Areas

| Area | Reason |
| --- | --- |
| `DSP-RB-002` | Requires bank operations evidence. |
| `NET-001`, `NET-002` | Requires NetBank or banking-partner role and fee evidence. |
| `TAX-001` | Requires tax review. |
| `ROY-001` | Requires 3neti/ODTI commercial decision and review. |
| `FIN-001` | Required for capital budgeting, not initial operating model. |
| Optional notification internal economics | Depends on provider disclosure and model-boundary decision. |

## Non-Goals

This scaffold does not:

- change any assumption value;
- create Assumptions Register records;
- update the workbook;
- authorize evidence;
- replace provisional inputs;
- create a forecast;
- resolve tax, royalty, NetBank, or investor-return treatment;
- make a workbook the commercial source of truth.

## Next Task

Create Disbursement Evidence Packet 001 for adoption, activity, sponsor pricing, ODTI cost, DevOps cost, cloud cost, and collection risk.

