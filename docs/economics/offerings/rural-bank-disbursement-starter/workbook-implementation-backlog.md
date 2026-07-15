# Disbursement Starter Workbook Implementation Backlog

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: formula-backed workbook implementation backlog scaffold.

This backlog does not implement workbook formulas, populate values, or authorize inputs.

It defines the coding backlog for the future transition from structural scaffold workbook to formula-backed Level 1 workbook.

## Current Artifact

Current workbook:

```text
artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

Current mode:

```text
Structural scaffold
```

Allowed current command:

```text
node scripts/finance/build_disbursement_starter_model.mjs --build-scaffold-xlsx --output artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

Numeric workbook commands remain blocked:

```text
node scripts/finance/build_disbursement_starter_model.mjs --build-level-1-xlsx --output artifacts/x-commerce-disbursement-starter-financial-model.xlsx
node scripts/finance/build_disbursement_starter_model.mjs --validate-level-1-xlsx --input artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

## Implementation Prerequisites

Do not begin formula implementation until:

- [provisional-input-register-level-1.md](provisional-input-register-level-1.md) is populated;
- [offering-economics-level-1.md](offering-economics-level-1.md) contains canonical numeric outputs;
- [level-1-output-table-map.md](level-1-output-table-map.md) is satisfied;
- [workbook-parity-validation.md](workbook-parity-validation.md) contains numeric parity rows;
- blocked exclusions remain explicit.

## Backlog Items

### WB-DSP-001: Input Loader

Implement a structured input loader for:

- provisional input IDs;
- assumption IDs;
- scenario values;
- units;
- authorization status;
- evidence status;
- blocked rows.

Acceptance:

- missing P0 inputs cause failure;
- blocked values stay text-blocked;
- `DSP-VOL-001` is not loaded as an independent primitive input.

### WB-DSP-002: Activity Engine

Implement formula-backed `04_Adoption` and `05_Disbursement_Activity`.

Acceptance:

- active banks and weighted active months are visible;
- active sponsors derive from active banks and sponsors per bank;
- `DSP-VOL-001` derives from component inputs;
- annual successful disbursements derive from active banks, active months, and `DSP-VOL-001`.

### WB-DSP-003: Pricing And Revenue Engine

Implement `06_Pricing` and `07_Revenue`.

Acceptance:

- sponsor onboarding, recurring service, and recipient-disbursement fees are separate;
- Rural Bank retained economics do not exceed sponsor-facing transaction economics;
- pass-through disbursement funding is excluded from revenue;
- stakeholder revenue warning is visible.

### WB-DSP-004: Stakeholder Views

Implement:

- `10_Rural_Bank_View`;
- `11_ODTI_View`;
- `12_DevOps_View`;
- `13_Notification_Variant`.

Acceptance:

- Rural Bank label uses `Contribution Before Internal Bank Disbursement-Support Cost`;
- ODTI view is `Pre-Tax, Pre-Royalty, NetBank-Fee-Blocked`;
- DevOps cloud boundary remains bank-owned unless a later variant changes it;
- optional notification remains separate from Core Disbursement.

### WB-DSP-005: Consolidated View

Implement `14_Consolidated_View`.

Acceptance:

- external sponsor commercial fees counted once;
- internal transfers eliminated;
- pass-through funding shown separately;
- external provider outflows shown separately;
- blocked exclusions visible.

### WB-DSP-006: P&L, Cash Flow, And Capital Budgeting Shells

Implement:

- `08_Cost_of_Sales`;
- `09_Operating_Expenses`;
- `15_Profit_and_Loss`;
- `16_Cash_Flow`;
- `17_Capital_Budgeting`.

Acceptance:

- management P&L labels are provisional;
- formal accounting outputs remain qualified;
- NPV, IRR, and payback remain blocked unless `FIN-001` and cash-flow basis exist;
- cash timing is not assumed equal to revenue recognition unless authorized.

### WB-DSP-007: Scenario, Dashboard, Checks, And Lineage

Implement:

- `18_Sensitivity`;
- `19_Scenarios`;
- `20_Dashboard`;
- `21_Checks`;
- `22_Source_Lineage`.

Acceptance:

- dashboard warns that values are provisional;
- check sheet reports `OK`, `Blocked`, or `ERROR`;
- source lineage maps outputs to assumptions, provisional IDs, and source documents;
- parity rows compare workbook and Markdown outputs.

### WB-DSP-008: Numeric Export Validation

Implement `--validate-level-1-xlsx`.

Acceptance:

- all required sheets exist;
- no formula errors;
- parity rows match canonical Markdown outputs;
- no blocked value is treated as zero;
- no hidden external links or macros;
- `.xlsx` opens without repair warnings where available.

## CLI Backlog

Future commands:

```text
--build-level-1-xlsx
--validate-level-1-xlsx
--level-1-parity-check
--source-lineage-check
```

Current behavior should remain fail-closed until source documents are populated.

## Review ZIP Backlog

The first formula-backed workbook review ZIP should contain:

- generated `.xlsx`;
- `provisional-input-register-level-1.md`;
- `offering-economics-level-1.md`;
- `five-year-revenue-projection-summary.md`;
- `workbook-parity-validation.md`;
- builder script;
- relevant manifests.

The ZIP must be written to:

```text
~/Downloads
```

## Completion Definition

The backlog is complete when the workbook:

- is formula-backed;
- consumes canonical Level 1 inputs and outputs;
- passes parity validation;
- preserves blocked exclusions;
- has no workbook-only economics;
- is committed as a generated artifact.

