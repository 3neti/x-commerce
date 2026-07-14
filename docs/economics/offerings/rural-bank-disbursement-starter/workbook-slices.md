# Workbook Slices: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold with manifest run commands.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

No workbook generator or `.xlsx` artifact is created in this slice.

## Purpose

This document breaks the future Disbursement workbook into implementation slices. The workbook must remain a compiled presentation of the canonical repository model.

## Slice 1: Workbook Specification

Status: scaffolded in [spreadsheet-financial-model.md](spreadsheet-financial-model.md).

Scope:

- workbook tabs;
- source lineage;
- formula conventions;
- checks;
- blocked outputs;
- no workbook artifact.

## Slice 2: Assumptions And Activity Engine

Future scope:

- `00_Read_Me`;
- `01_Control`;
- `02_Assumptions`;
- `03_Assumption_Map`;
- `04_Adoption`;
- `05_Disbursement_Activity`;
- `21_Checks` initial.

Required parity checks:

- assumption IDs unique;
- `DSP-VOL-001` component-derived;
- pass-through disbursement value excluded from revenue;
- active sponsors derive from active banks and sponsors per bank;
- annual successful disbursements derive from active banks, active months, and `DSP-VOL-001`.

Scaffold command:

```text
node scripts/finance/build_disbursement_starter_model.mjs --slice-2-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-2-manifest-check
```

## Slice 3: Revenue And Stakeholder Views

Future scope:

- `06_Pricing`;
- `07_Revenue`;
- `10_Rural_Bank_View`;
- `11_ODTI_View`;
- `12_DevOps_View`;
- `13_Notification_Variant`;
- `14_Consolidated_View`;
- extended `21_Checks`.

Required parity checks:

- sponsor fees counted once as external revenue;
- stakeholder revenue not additive;
- Rural Bank-to-ODTI transfers eliminated;
- Rural Bank-to-DevOps transfers eliminated;
- optional notification separate from Core Disbursement.

Scaffold command:

```text
node scripts/finance/build_disbursement_starter_model.mjs --slice-3-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-3-manifest-check
```

## Slice 4: P&L And Cash Flow

Future scope:

- `08_Cost_of_Sales`;
- `09_Operating_Expenses`;
- `15_Profit_and_Loss`;
- `16_Cash_Flow`;
- extended `21_Checks`.

Required blocks:

- tax-adjusted net income;
- post-royalty ODTI results;
- NetBank-fee-adjusted results;
- true Rural Bank contribution after `DSP-RB-002`;
- cash timing while collection timing is unresolved.

Scaffold command:

```text
node scripts/finance/build_disbursement_starter_model.mjs --slice-4-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-4-manifest-check
```

## Slice 5: Capital Budgeting And Sensitivity

Future scope:

- `17_Capital_Budgeting`;
- `18_Sensitivity`;
- extended `21_Checks`.

Required blocks:

- NPV until cash-flow and discount-rate assumptions are governed;
- IRR until valid cash-flow series exists;
- discounted payback until `FIN-001` or equivalent exists.

Potential sensitivity grids:

- active banks versus sponsors per bank;
- sponsor monthly fee versus sponsor count;
- recipient fee versus disbursement volume;
- Rural Bank retention versus volume;
- ODTI support cost versus active banks;
- DevOps cost versus bank count;
- notification attachment versus notification margin.

Scaffold command:

```text
node scripts/finance/build_disbursement_starter_model.mjs --slice-5-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-5-manifest-check
```

## Slice 6: Dashboard And Lineage

Future scope:

- `19_Scenarios`;
- `20_Dashboard`;
- final `21_Checks`;
- `22_Source_Lineage`.

Dashboard must show:

- selected scenario;
- active banks;
- active sponsors;
- annual successful disbursements;
- consolidated Core external revenue;
- Rural Bank contribution before internal bank disbursement-support cost;
- ODTI pre-tax, pre-royalty, NetBank-fee-blocked contribution;
- DevOps contribution;
- optional notification increment;
- blocked-input count;
- check `ERROR` count.

Scaffold command:

```text
node scripts/finance/build_disbursement_starter_model.mjs --slice-6-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-6-manifest-check
```

## Slice 7: Review And Freeze

Future scope:

- workbook generation gate;
- validation;
- canonical parity review;
- blocked-output review;
- visual or structural QA;
- review ZIP in `~/Downloads`;
- freeze boundary before commit.

Scaffold command:

```text
node scripts/finance/build_disbursement_starter_model.mjs --slice-7-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-7-manifest-check
```

## Current Manifest Scaffold

The current manifest family is:

```text
scripts/finance/disbursement_starter_slice2_manifest.json
scripts/finance/disbursement_starter_slice3_manifest.json
scripts/finance/disbursement_starter_slice4_manifest.json
scripts/finance/disbursement_starter_slice5_manifest.json
scripts/finance/disbursement_starter_slice6_manifest.json
scripts/finance/disbursement_starter_slice7_manifest.json
```

All manifests remain build-gated. They are not authorization to generate an `.xlsx` artifact.

## Non-Goals

Do not:

- generate the workbook before assumptions and provisional inputs are authorized;
- create a workbook that changes assumptions;
- create macros;
- create external links;
- model tax, royalty, NetBank, or investor returns without governed inputs;
- import Payroll values without a reuse decision.

## Next Slice

Create the Disbursement evidence-to-model update plan.
