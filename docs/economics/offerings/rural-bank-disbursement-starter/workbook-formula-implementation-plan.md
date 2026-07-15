# Disbursement Starter Workbook Formula Implementation Plan

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: formula implementation plan scaffold.

Workbook state: structural scaffold exists; formula-backed numeric workbook remains blocked.

This plan does not implement numeric formulas or populate workbook values. It defines the workbook implementation sequence after the canonical Level 1 Markdown model is populated.

## Purpose

This plan answers:

```text
How should the Disbursement scaffold workbook become a formula-backed Level 1 workbook without becoming an independent source of truth?
```

## Required Source Rule

The workbook generator must consume:

1. [provisional-input-register-level-1.md](provisional-input-register-level-1.md);
2. [offering-economics-level-1.md](offering-economics-level-1.md);
3. [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md);
4. [workbook-parity-validation.md](workbook-parity-validation.md);
5. `scripts/finance/disbursement_starter_level1_manifest.json`;
6. `scripts/finance/disbursement_starter_numeric_workbook_manifest.json`.

No values may be entered only in Excel.

## Implementation Phases

| Phase | Workbook area | Implementation responsibility | Gate |
| --- | --- | --- | --- |
| A | `00_Read_Me`, `01_Control`, `02_Assumptions`, `03_Assumption_Map` | Load authorized inputs and warnings. | Provisional input register populated. |
| B | `04_Adoption`, `05_Disbursement_Activity` | Build adoption and component-derived volume formulas. | Activity parity rows exist. |
| C | `06_Pricing`, `07_Revenue` | Build sponsor commercial fees and split checks. | Pricing and split assumptions authorized. |
| D | `10_Rural_Bank_View`, `11_ODTI_View`, `12_DevOps_View` | Build stakeholder entity views. | Stakeholder outputs exist in Level 1 Markdown. |
| E | `13_Notification_Variant` | Build optional notification increment separately. | Optional inputs authorized or blocked. |
| F | `14_Consolidated_View` | Build external inflow, outflow, elimination, pass-through, and blocked-output view. | Consolidation outputs exist in Markdown. |
| G | `08_Cost_of_Sales`, `09_Operating_Expenses`, `15_Profit_and_Loss`, `16_Cash_Flow` | Build management P&L and cash-flow shells. | Cash timing and blocked treatments are explicit. |
| H | `17_Capital_Budgeting`, `18_Sensitivity` | Build NPV/IRR/payback only where prerequisites exist; otherwise show blocked. | `FIN-001` and cash-flow basis governed. |
| I | `19_Scenarios`, `20_Dashboard`, `21_Checks`, `22_Source_Lineage` | Build scenario comparison, dashboard, checks, and source lineage. | Parity rows pass. |

## Required Formula Controls

The workbook must include visible checks for:

- `DSP-VOL-001` component-derived formula;
- active banks and active months;
- active sponsors and newly onboarded sponsor relationships;
- Rural Bank retained economics not exceeding sponsor-facing disbursement fee;
- sponsor commercial fees counted once as external inflows;
- optional notification separated from Core Disbursement;
- pass-through disbursement funding excluded from revenue;
- stakeholder revenue non-additivity;
- internal eliminations;
- blocked assumptions not used as zero;
- no formula errors.

## Sheet Implementation Notes

### `02_Assumptions`

Required columns:

```text
Assumption ID
Category
Description
Unit
Conservative
Base
Accelerated
Selected Scenario Value
Current Status
Evidence Status
Input Classification
Provisional Input ID
Source
Owner
Review Trigger
Notes
```

### `05_Disbursement_Activity`

`DSP-VOL-001` must be formula-driven:

```text
= DSP-CUS-001 * DSP-CUS-002 * DSP-CUS-003 * DSP-VOL-002
```

The workbook may use Excel-safe named ranges such as:

```text
DSP_CUS_001
DSP_CUS_002
DSP_CUS_003
DSP_VOL_002
DSP_VOL_001
```

The mapping from canonical IDs to named ranges must be documented on `22_Source_Lineage`.

### `07_Revenue`

Revenue must separate:

- external sponsor commercial fees;
- entity-level Rural Bank revenue;
- entity-level ODTI revenue;
- DevOps revenue;
- optional notification revenue;
- pass-through disbursement funding.

Entity revenue columns must carry a non-additive warning.

### `13_Notification_Variant`

Optional notification must have:

- attached notification volume;
- customer-facing revenue;
- collection effect where authorized;
- wholesale provider cost;
- Rural Bank or ODTI margin if authorized;
- blocked failed-message and privacy treatment if unresolved.

### `14_Consolidated_View`

Consolidated external revenue must not add stakeholder entity revenue.

It must count:

```text
Sponsor commercial fees
```

once, then separately show:

```text
External provider outflows
Internal eliminations
Pass-through disbursement funding
Blocked exclusions
```

## Numeric Export Commands

Future commands:

```text
node scripts/finance/build_disbursement_starter_model.mjs --build-level-1-xlsx --output artifacts/x-commerce-disbursement-starter-financial-model.xlsx
node scripts/finance/build_disbursement_starter_model.mjs --validate-level-1-xlsx --input artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

These commands must remain blocked until the Level 1 Markdown model and parity rows are populated.

## Visual QA Requirements

The future workbook validation should include:

- sheet existence check;
- key range inspection;
- formula error scan;
- source-lineage row count;
- dashboard visible-warning check;
- blocked-output visibility check;
- no hidden external links;
- no macros.

## Completion Gate

The formula-backed workbook implementation is complete only when:

- workbook values trace to provisional input IDs or formulas;
- canonical parity rows match;
- no blocked value is silently zero;
- checks return `OK` or explicitly `Blocked`;
- the `.xlsx` opens without repair warnings;
- the review ZIP is placed in `~/Downloads`.

## Next Slice

Populate management candidates, then run the authorization and Level 1 Markdown population gates before implementing formula-backed workbook export.

