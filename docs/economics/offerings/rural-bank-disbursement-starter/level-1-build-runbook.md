# Disbursement Starter Level 1 Build Runbook

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: build runbook scaffold.

No values are populated and no workbook formulas are implemented by this document.

This runbook orders the remaining work required to produce the first formula-backed Disbursement Level 1 workbook.

## Current State

Available now:

- non-numeric Disbursement offering model;
- Disbursement assumptions promoted to the Assumptions Register;
- evidence and candidate scaffolds;
- structural `.xlsx` scaffold;
- numeric workbook manifest;
- workbook formula implementation plan;
- blocked numeric workbook commands.

Still missing:

- management candidate values;
- management review outcome;
- provisional input authorization;
- populated Level 1 Markdown model;
- populated parity rows;
- formula-backed workbook generator.

## Build Sequence

### Step 1: Populate Management Candidates

Primary file:

```text
provisional-input-candidate-pack.md
```

Control files:

- [candidate-value-population-workplan.md](candidate-value-population-workplan.md);
- [candidate-value-entry-ledger.md](candidate-value-entry-ledger.md);
- [candidate-value-entry-plan.md](candidate-value-entry-plan.md).

Output:

```text
Internal management candidates
Not authorized
Not evidence-supported
Not a forecast
```

Do not update the workbook.

### Step 2: Review Candidates

Primary files:

- [management-candidate-review-worksheet.md](management-candidate-review-worksheet.md);
- [authorization-readiness-report.md](authorization-readiness-report.md).

Output:

```text
Ready for authorization packet
Ready for partial authorization packet
Requires candidate revision
Requires evidence before authorization
Not ready
```

Do not issue provisional input IDs yet.

### Step 3: Complete Authorization Packet

Primary file:

```text
provisional-authorization-packet.md
```

Output:

- selected candidate values;
- authorization status;
- permitted use;
- expiry trigger;
- warning language;
- provisional input ID recommendations.

Still do not update the workbook.

### Step 4: Populate Provisional Input Register

Primary file:

```text
provisional-input-register-level-1.md
```

Control file:

```text
provisional-register-completion-checklist.md
```

Output:

```text
Draft-authorized or authorized Level 1 inputs
```

This becomes the input source for the Level 1 Markdown model and later workbook.

### Step 5: Populate Level 1 Markdown Model

Primary file:

```text
offering-economics-level-1.md
```

Control files:

- [level-1-model-population-plan.md](level-1-model-population-plan.md);
- [level-1-output-table-map.md](level-1-output-table-map.md);
- `scripts/finance/disbursement_starter_level1_manifest.json`.

Output:

- five-year scenario tables;
- Core Disbursement tables;
- optional notification increment tables if included;
- stakeholder contribution tables;
- consolidated view;
- blocked outputs;
- parity source rows.

### Step 6: Normalize Summary And Parity

Primary files:

- [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md);
- [workbook-parity-validation.md](workbook-parity-validation.md).

Control file:

```text
workbook-parity-entry-template.md
```

Output:

- normalized reader-facing outputs;
- canonical parity rows for workbook validation.

### Step 7: Implement Formula-Backed Workbook

Primary files:

- [workbook-formula-implementation-plan.md](workbook-formula-implementation-plan.md);
- [workbook-implementation-backlog.md](workbook-implementation-backlog.md);
- `scripts/finance/build_disbursement_starter_model.mjs`;
- `scripts/finance/disbursement_starter_numeric_workbook_manifest.json`.

Future commands:

```text
node scripts/finance/build_disbursement_starter_model.mjs --build-level-1-xlsx --output artifacts/x-commerce-disbursement-starter-financial-model.xlsx
node scripts/finance/build_disbursement_starter_model.mjs --validate-level-1-xlsx --input artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

Output:

```text
Formula-backed Level 1 Disbursement workbook
```

## Current Commands

Check readiness:

```text
node scripts/finance/build_disbursement_starter_model.mjs --numeric-readiness-check
```

Validate current scaffold workbook:

```text
node scripts/finance/build_disbursement_starter_model.mjs --validate-scaffold-xlsx --input artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

Review formula plan:

```text
node scripts/finance/build_disbursement_starter_model.mjs --workbook-formula-plan
```

## Stop Conditions

Stop if:

- candidate values are requested inside the workbook before Markdown authorization;
- `DSP-VOL-001` is independently populated under component-derived mode;
- optional notification is merged into Core Disbursement;
- pass-through disbursement funding becomes revenue;
- blocked NetBank, tax, royalty, financing, investor, or partner assumptions are treated as zero;
- workbook values diverge from canonical Markdown outputs.

## Recommended Immediate Next Task

Stop scaffolding and populate:

```text
provisional-input-candidate-pack.md
```

with Conservative, Base, and Accelerated internal management candidates, following [candidate-value-population-workplan.md](candidate-value-population-workplan.md).

Do not authorize those values in the same task.

