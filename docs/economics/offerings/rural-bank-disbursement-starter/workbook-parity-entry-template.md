# Disbursement Starter Workbook Parity Entry Template

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: parity-entry template scaffold.

No numeric parity values are entered by this document.

This template defines how canonical Level 1 Markdown outputs should be copied into [workbook-parity-validation.md](workbook-parity-validation.md) before validating the formula-backed workbook.

## Purpose

The workbook must not become the place where canonical numbers are invented.

This template answers:

```text
Which canonical outputs must be copied from the populated Level 1 Markdown model into parity rows, and how should match status be recorded?
```

## Required Sources

Parity values may be entered only after:

- [provisional-input-register-level-1.md](provisional-input-register-level-1.md) is populated;
- [offering-economics-level-1.md](offering-economics-level-1.md) contains Level 1 numeric outputs;
- [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md) has been normalized.

## Parity Row Format

Use this format in [workbook-parity-validation.md](workbook-parity-validation.md):

```text
Canonical output:
Scenario:
Year:
Markdown model value:
Workbook value:
Difference:
Match status:
Source table:
Assumption IDs:
Provisional Input IDs:
Notes:
```

## Match Status Values

Use exactly one:

| Status | Meaning |
| --- | --- |
| Match | Workbook value equals canonical Markdown value. |
| Difference | Workbook value differs from canonical Markdown value. |
| Blocked | Canonical output remains blocked. |
| Excluded | Output is intentionally outside the initial Level 1 model. |
| Not yet generated | Workbook value does not exist yet. |

## Required Initial Parity Rows

| Canonical output | Scenario | Year | Source table in Level 1 model | Workbook sheet |
| --- | --- | --- | --- | --- |
| Active banks | Conservative | Year 1 | Adoption table | `04_Adoption` |
| Active banks | Base | Year 5 | Adoption table | `04_Adoption` |
| Active sponsors | Base | Year 5 | Sponsor relationship table | `04_Adoption` |
| `DSP-VOL-001` | Base | Not applicable | Activity table | `05_Disbursement_Activity` |
| Annual successful disbursements | Base | Year 5 | Activity table | `05_Disbursement_Activity` |
| Core external revenue | Base | Year 5 | Core revenue table | `07_Revenue` |
| Rural Bank qualified contribution | Base | Year 5 | Rural Bank table | `10_Rural_Bank_View` |
| ODTI qualified contribution | Base | Year 5 | ODTI table | `11_ODTI_View` |
| DevOps contribution | Base | Year 5 | DevOps table | `12_DevOps_View` |
| Consolidated contribution before blocked items | Base | Year 5 | Consolidated table | `14_Consolidated_View` |

## Optional Additional Parity Rows

Add rows for:

- Conservative Year 5 core external revenue;
- Accelerated Year 5 core external revenue;
- Base Year 1 consolidated contribution;
- Base Year 5 optional notification contribution, if optional notification is included;
- pass-through disbursement funding, if presented;
- blocked outputs, if they must remain visibly blocked in the workbook.

## Blocking Rules

Do not enter numeric parity rows for:

- true Rural Bank net contribution after `DSP-RB-002`;
- NetBank-fee-adjusted results;
- tax-adjusted results;
- 3neti royalty-adjusted results;
- NPV or IRR without `FIN-001` and cash-flow basis;
- investor returns;
- business-development partner allocations.

Use `Blocked` or `Excluded`.

## Workbook Validation Handoff

The future `--validate-level-1-xlsx` command should fail if:

- any `Match` row has a non-zero difference;
- any required parity row is missing;
- workbook output exists where Markdown model says `Blocked`;
- workbook treats a blocked value as zero;
- workbook uses optional notification inside Core Disbursement outputs.

## Next Step

After Level 1 Markdown outputs exist, populate this template into [workbook-parity-validation.md](workbook-parity-validation.md), then implement workbook validation against those rows.

