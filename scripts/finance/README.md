# Finance Workbook Scripts

This directory contains reproducible builders for spreadsheet artifacts derived from x-commerce documentation.

## Payroll Starter

Planned workbook:

```text
artifacts/x-commerce-payroll-starter-financial-model.xlsx
```

Builder scaffold:

```text
scripts/finance/build_payroll_starter_model.mjs
```

The builder consumes the accepted Level 1 Payroll Starter model. It must not introduce new commercial assumptions or replace the Markdown model as the source of truth.

Decision [0004](../../docs/decisions/0004-repo-local-workbook-generation.md) accepts a repo-local `exceljs` workbook-generation path when the spreadsheet artifact runtime is unavailable.

## Governance

- Canonical source: `docs/economics/offerings/rural-bank-payroll-starter/offering-economics-level-1.md`
- Provisional inputs: `docs/economics/offerings/rural-bank-payroll-starter/provisional-input-register-level-1.md`
- Workbook specification: `docs/economics/offerings/rural-bank-payroll-starter/spreadsheet-financial-model.md`

Run the scaffold validation with:

```text
node scripts/finance/build_payroll_starter_model.mjs --dry-run
```

Review the Slice 2 workbook-engine plan with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-2-plan
```

Review the Slice 2 export implementation scaffold with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-2-export-plan
```

Review the Slice 3 revenue and stakeholder-view plan with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-3-plan
```

Review the Slice 3 export implementation scaffold with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-3-export-plan
```

Review the Slice 4 cost, P&L, and cash-flow plan with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-4-plan
```

Review the Slice 5 capital-budgeting and sensitivity plan with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-5-plan
```

Build and validate the Slice 5 workbook with:

```text
npm run finance:payroll:build-slice-5
npm run finance:payroll:validate-slice-5
```

Review the Slice 6 scenario, dashboard, checks, and lineage plan with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-6-plan
```

Build and validate the Slice 6 workbook with:

```text
npm run finance:payroll:build-slice-6
npm run finance:payroll:validate-slice-6
```

Review the Slice 7 review and freeze plan with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-7-plan
```

Build and validate the Slice 7 review workbook with:

```text
npm run finance:payroll:build-slice-7
npm run finance:payroll:validate-slice-7
```

Workbook export is implemented through the repo-local `exceljs` fallback approved in Decision 0004. Slice 2 exports the assumptions and activity engine; Slice 3 extends the generated workbook with pricing, revenue, stakeholder views, SMS, consolidated view, and expanded checks.

The Slice 2 manifest is:

```text
scripts/finance/payroll_starter_slice2_manifest.json
```

Validate the manifest with:

```text
node scripts/finance/build_payroll_starter_model.mjs --manifest-check
```

The Slice 2 export implementation manifest is:

```text
scripts/finance/payroll_starter_slice2_export_manifest.json
```

Validate the Slice 2 export implementation manifest with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-2-export-manifest-check
```

This export manifest locks down workbook anchors, formula responsibilities, named-range strategy, and visual QA ranges for the assumptions and activity-engine export.

The Slice 3 manifest is:

```text
scripts/finance/payroll_starter_slice3_manifest.json
```

Validate the Slice 3 manifest with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-3-manifest-check
```

Slice 3 covers pricing, revenue, Rural Bank, ODTI, DevOps, optional SMS, consolidated view, and extended checks. The `exceljs` builder now creates these sheets as a formula-backed workbook expansion that consumes the Slice 2 assumptions and activity engine.

The Slice 3 export implementation manifest is:

```text
scripts/finance/payroll_starter_slice3_export_manifest.json
```

Validate the Slice 3 export implementation manifest with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-3-export-manifest-check
```

This export manifest locks down workbook dependencies, sheet anchors, formula responsibilities, canonical parity samples, and visual QA ranges for the first revenue and stakeholder-view workbook expansion.

Build and validate the Slice 3 workbook with:

```text
npm run finance:payroll:build-slice-3
npm run finance:payroll:validate-slice-3
```

The Slice 4 manifest is:

```text
scripts/finance/payroll_starter_slice4_manifest.json
```

Validate the Slice 4 manifest with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-4-manifest-check
```

Slice 4 covers cost of sales, operating expenses, management P&L views, cash-flow limitations, and extended checks. It preserves blocked outputs for `RB-002`, `TAX-001`, `ROY-001`, `NET-001`, `COL-001`, balance-sheet prerequisites, NPV, and IRR.

Build and validate the Slice 4 workbook with:

```text
npm run finance:payroll:build-slice-4
npm run finance:payroll:validate-slice-4
```

The Slice 5 manifest is:

```text
scripts/finance/payroll_starter_slice5_manifest.json
```

Validate the Slice 5 manifest with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-5-manifest-check
```

Slice 5 covers capital-budgeting gates and formula-based sensitivity scaffolding. It does not calculate NPV, IRR, discounted payback, or terminal value while cash-flow timing, investment basis, and discount-rate assumptions remain unavailable.

The Slice 6 manifest is:

```text
scripts/finance/payroll_starter_slice6_manifest.json
```

Validate the Slice 6 manifest with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-6-manifest-check
```

Slice 6 covers scenario comparison, executive dashboard, final checks, and source lineage. It completes the planned scaffold for the workbook presentation and audit layer without creating independent calculations.

The Slice 7 manifest is:

```text
scripts/finance/payroll_starter_slice7_manifest.json
```

Validate the Slice 7 manifest with:

```text
node scripts/finance/build_payroll_starter_model.mjs --slice-7-manifest-check
```

Slice 7 covers the review and freeze gate before the workbook is accepted as a review artifact. It requires approved-runtime confirmation, all manifest checks, workbook generation through the approved repository-local builder, structural workbook validation, canonical parity review, visual QA where available, a review ZIP in `~/Downloads`, and a clean freeze boundary.

The guarded export entry point is scaffolded as:

```text
node scripts/finance/build_payroll_starter_model.mjs --build-slice-2
```

It requires the spreadsheet artifact runtime dependency `@oai/artifact-tool`. If that runtime is unavailable, the command exits with an explicit dependency message rather than falling back to another workbook library.

The accepted repo-local ExcelJS export entry point is:

```text
node scripts/finance/build_payroll_starter_model.mjs --exceljs-runtime-check
node scripts/finance/build_payroll_starter_model.mjs --build-slice-2-exceljs --output artifacts/x-commerce-payroll-starter-financial-model.xlsx
node scripts/finance/build_payroll_starter_model.mjs --validate-slice-2-exceljs --input artifacts/x-commerce-payroll-starter-financial-model.xlsx
```

This path is intentionally separate from the artifact-tool path. It is allowed only because Decision 0004 documents the fallback architecture.

Runtime handoff commands:

```text
node scripts/finance/build_payroll_starter_model.mjs --runtime-check
node scripts/finance/build_payroll_starter_model.mjs --exceljs-runtime-check
node scripts/finance/build_payroll_starter_model.mjs --manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-2-export-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-3-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-3-export-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-4-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-5-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-6-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-7-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --runtime-handoff
node scripts/finance/build_payroll_starter_model.mjs --build-slice-2 --output artifacts/x-commerce-payroll-starter-financial-model.xlsx
node scripts/finance/build_payroll_starter_model.mjs --validate-slice-2 --input artifacts/x-commerce-payroll-starter-financial-model.xlsx
node scripts/finance/build_payroll_starter_model.mjs --build-slice-2-exceljs --output artifacts/x-commerce-payroll-starter-financial-model.xlsx
node scripts/finance/build_payroll_starter_model.mjs --validate-slice-2-exceljs --input artifacts/x-commerce-payroll-starter-financial-model.xlsx
```

`--validate-slice-2` is also guarded by `@oai/artifact-tool`. It is intended to run after the workbook exists and should confirm required Slice 2 sheets and scan for formula errors.

The next implementation action that actually creates an `.xlsx` artifact is either the runtime-backed `--build-slice-2` command or the accepted repo-local `--build-slice-2-exceljs` command. The ExcelJS path is the repository-local route when `@oai/artifact-tool` is unavailable.

## Disbursement Starter

Planned separate workbook:

```text
artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

Builder scaffold:

```text
scripts/finance/build_disbursement_starter_model.mjs
```

The Disbursement builder is currently a guarded scaffold. It exposes planning and parity commands, but it intentionally refuses to build an `.xlsx` artifact until:

- Disbursement provisional inputs are authorized;
- `offering-economics-level-1.md` contains canonical numeric outputs;
- five-year summary parity rows exist;
- blocked outputs are represented explicitly.

Review the current Disbursement scaffold with:

```text
node scripts/finance/build_disbursement_starter_model.mjs --dry-run
node scripts/finance/build_disbursement_starter_model.mjs --candidate-completion-plan
node scripts/finance/build_disbursement_starter_model.mjs --manifest-check
node scripts/finance/build_disbursement_starter_model.mjs --parity-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-2-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-3-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-4-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-5-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-6-plan
node scripts/finance/build_disbursement_starter_model.mjs --slice-7-plan
```

Do not merge Disbursement into the Payroll workbook until Disbursement has its own generated and validated workbook.
