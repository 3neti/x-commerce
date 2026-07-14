# Workbook Parity Validation: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Workbook artifact status: not generated.

Parity status:

```text
Blocked: canonical numeric Level 1 Disbursement model is not yet populated.
```

This document defines how the future Disbursement workbook will be validated against the canonical repository model. It does not create a workbook, authorize values, or produce projections.

## Canonical Parity Sources

| Source | Parity role |
| --- | --- |
| [provisional-input-register-level-1.md](provisional-input-register-level-1.md) | Authorized scenario inputs and provisional input IDs. |
| [offering-economics-level-1.md](offering-economics-level-1.md) | Canonical calculations and five-year outputs. |
| [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md) | Normalized summary presentation after Level 1 outputs exist. |
| [spreadsheet-financial-model.md](spreadsheet-financial-model.md) | Workbook sheet, formula, and control specification. |
| [workbook-slices.md](workbook-slices.md) | Workbook implementation sequence and gates. |

## Required Parity Rows

The future workbook must include a parity table comparing workbook outputs to canonical Markdown outputs.

Minimum rows:

| Canonical output | Scenario | Year | Markdown model | Workbook | Match status |
| --- | --- | --- | ---: | ---: | --- |
| Active banks | Conservative | Year 1 | Blocked | Blocked | Blocked |
| Active banks | Base | Year 5 | Blocked | Blocked | Blocked |
| Active sponsors | Base | Year 5 | Blocked | Blocked | Blocked |
| `DSP-VOL-001` | Base | Not applicable | Blocked | Blocked | Blocked |
| Annual successful disbursements | Base | Year 5 | Blocked | Blocked | Blocked |
| Core external revenue | Base | Year 5 | Blocked | Blocked | Blocked |
| Rural Bank qualified contribution | Base | Year 5 | Blocked | Blocked | Blocked |
| ODTI qualified contribution | Base | Year 5 | Blocked | Blocked | Blocked |
| DevOps contribution | Base | Year 5 | Blocked | Blocked | Blocked |
| Consolidated contribution before blocked items | Base | Year 5 | Blocked | Blocked | Blocked |

Rows must become numeric only after the canonical Level 1 model is populated.

## Validation Commands

Current scaffold commands:

```text
node scripts/finance/build_disbursement_starter_model.mjs --parity-plan
node scripts/finance/build_disbursement_starter_model.mjs --parity-validation
```

Expected current result:

```text
Blocked: canonical numeric model not yet populated.
```

Future validation should fail if:

- workbook formulas produce values that differ from the canonical Level 1 model;
- `DSP-VOL-001` is entered independently under component-derived mode;
- pass-through disbursement funding appears in revenue;
- optional notification is merged into Core Disbursement headline tables;
- stakeholder entity revenue is added to compute consolidated external revenue;
- blocked tax, royalty, NetBank, investor, or partner outputs are silently treated as zero.

## Artifact Gate

The Disbursement `.xlsx` artifact may be created only after:

1. provisional inputs are authorized;
2. Level 1 economics are populated;
3. normalized summary outputs exist;
4. workbook generator can build formula-backed sheets;
5. parity validation passes;
6. blocked-output checks pass;
7. review ZIP is created in `~/Downloads`.

## Next Step

Complete the Disbursement provisional input candidate values and authorization path before implementing workbook build commands.
