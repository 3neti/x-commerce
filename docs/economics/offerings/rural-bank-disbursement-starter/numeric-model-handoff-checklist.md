# Disbursement Starter Numeric Model Handoff Checklist

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: handoff checklist scaffold.

No values are entered, authorized, calculated, or exported by this document.

This checklist is used after Level 1 Markdown outputs exist and before implementing or unblocking the formula-backed `.xlsx` workbook.

## Purpose

This checklist answers:

```text
Is the canonical Disbursement Level 1 model ready to hand off to the workbook generator?
```

## Required Documents Before Handoff

All must be complete:

- [provisional-input-register-level-1.md](provisional-input-register-level-1.md);
- [offering-economics-level-1.md](offering-economics-level-1.md);
- [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md);
- [workbook-parity-validation.md](workbook-parity-validation.md);
- [level-1-output-table-map.md](level-1-output-table-map.md).

## Handoff Checklist

| Check | Required result | Status |
| --- | --- | --- |
| Provisional input IDs exist | Every numeric input has a `DSP-PI-L1-*` or equivalent ID | Pending Level 1 |
| Scenario values exist | Conservative, Base, Accelerated values or blocked treatment | Pending Level 1 |
| Units exist | Every numeric value has a unit | Pending Level 1 |
| Authorization status exists | Every input says draft-authorized, authorized, sensitivity-only, blocked, or excluded | Pending Level 1 |
| `DSP-VOL-001` is derived | No independent primitive value | Pending Level 1 |
| Core Disbursement is separated | Optional notification not merged into headline core outputs | Pending Level 1 |
| Pass-through excluded | Disbursement funding not in revenue or contribution | Pending Level 1 |
| Blocked outputs visible | NetBank, tax, royalty, financing, investor, and partner blockers visible | Pending Level 1 |
| Parity rows populated | Canonical sample rows contain Markdown values | Pending Level 1 |
| Workbook source lineage possible | Every workbook output can cite source document and input IDs | Pending Level 1 |

## Workbook Implementation Inputs

The workbook generator may consume:

| Source | Required content |
| --- | --- |
| `provisional-input-register-level-1.md` | Input values, IDs, units, status, warnings. |
| `offering-economics-level-1.md` | Canonical formulas and numeric outputs. |
| `five-year-revenue-projection-summary.md` | Normalized labels and interpretation. |
| `workbook-parity-validation.md` | Parity values and match expectations. |
| `disbursement_starter_level1_manifest.json` | Formula-family structure. |
| `disbursement_starter_numeric_workbook_manifest.json` | Workbook export and validation requirements. |

## Handoff Decision

Use one:

| Decision | Meaning |
| --- | --- |
| Ready for formula-backed workbook implementation | Workbook builder can be implemented/unblocked. |
| Ready for partial workbook implementation | Some sheets can be formula-backed; blocked sheets remain scaffolded. |
| Requires Level 1 model revision | Markdown model must be corrected first. |
| Requires authorization revision | Provisional input register must be corrected first. |
| Not ready | Handoff cannot proceed. |

Current scaffold decision:

```text
Not ready
```

Reason:

```text
Disbursement Level 1 numeric model has not been populated.
```

## Build Commands After Handoff

Only after the handoff decision is ready or partially ready should these commands be implemented or unblocked:

```text
node scripts/finance/build_disbursement_starter_model.mjs --build-level-1-xlsx --output artifacts/x-commerce-disbursement-starter-financial-model.xlsx
node scripts/finance/build_disbursement_starter_model.mjs --validate-level-1-xlsx --input artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

## Stop Conditions

Do not hand off if:

- any required input is `Open`;
- any numeric input lacks authorization status;
- any workbook output would require a value not present in Markdown;
- blocked assumptions are being represented as zero;
- optional notification is required to make Core Disbursement work;
- the workbook would contain independent economics not present in the canonical model.

## Next Step

Complete candidate values, authorization, and Level 1 Markdown outputs before using this checklist.

