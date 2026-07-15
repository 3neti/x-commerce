# Disbursement Starter Scaffold Workbook Generation Policy

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Artifact type: Structural workbook scaffold

Status: Allowed for workbook-interface review only

This policy creates a narrow exception to the normal workbook gate. It allows a deterministic `.xlsx` scaffold to be generated before Disbursement Level 1 numeric inputs are authorized.

It does not authorize provisional values, create projections, populate the Level 1 model, or change the canonical source-of-truth rules.

## Purpose

The scaffold workbook exists so reviewers can inspect:

- workbook tab order;
- workbook warnings;
- scenario-control layout;
- assumption-table structure;
- blocked-output presentation;
- source-lineage presentation;
- workbook validation mechanics;
- executive dashboard placeholders;
- future parity-check locations.

The scaffold workbook must not be used to evaluate Disbursement economics.

## Boundary

Allowed:

- create `artifacts/x-commerce-disbursement-starter-financial-model.xlsx`;
- include all planned workbook sheets;
- show `Open`, `Blocked`, `Deferred`, `Not authorized`, and `Not generated` values;
- include canonical source links;
- include workbook controls and validation placeholders;
- include integrity checks that distinguish scaffold-ready items from blocked numeric outputs.

Not allowed:

- populate Conservative, Base, or Accelerated candidate values;
- authorize provisional inputs;
- calculate Level 1 revenue, cost, contribution, cash flow, NPV, IRR, or break-even outputs;
- infer Disbursement economics from Payroll values;
- resolve NetBank, tax, royalty, financing, or Rural Bank internal support assumptions;
- present scaffold workbook output as a forecast, budget, contract-grade model, or investment-grade model.

## Canonical Source Rule

The repository remains the source of commercial truth.

The scaffold workbook consumes:

- [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md);
- [../../../decisions/0005-select-second-modeled-offering.md](../../../decisions/0005-select-second-modeled-offering.md);
- [../../../decisions/0006-disbursement-starter-economic-treatment.md](../../../decisions/0006-disbursement-starter-economic-treatment.md);
- [commercial-model.md](commercial-model.md);
- [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md);
- [provisional-input-register-level-1.md](provisional-input-register-level-1.md);
- [offering-economics-level-1.md](offering-economics-level-1.md);
- [workbook-parity-validation.md](workbook-parity-validation.md).

If the scaffold reveals a commercial inconsistency, the source document must be corrected through the documentation process before a numeric workbook is produced.

## Workbook Path

```text
artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

## Generation Commands

Build:

```text
node scripts/finance/build_disbursement_starter_model.mjs --build-scaffold-xlsx --output artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

Validate:

```text
node scripts/finance/build_disbursement_starter_model.mjs --validate-scaffold-xlsx --input artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

## Required Workbook Warnings

The scaffold workbook must state:

> This workbook is a structural scaffold for `OFR-RB-DISBURSEMENT-STARTER`. It contains no authorized values, no Level 1 numeric projections, and no forecast.

It must also state:

> The repository defines the commercial architecture. The workbook presents it. This scaffold must not become an independent source of commercial truth.

## Validation Gate

The scaffold workbook validation must verify:

- all planned sheets exist;
- required warnings are present;
- source-lineage sheet exists;
- assumptions remain `Open`, `Blocked`, `Deferred`, or `Not authorized`;
- no Level 1 numeric economics are populated;
- pass-through disbursement funding is not presented as revenue;
- NetBank, tax, royalty, financing, and Rural Bank internal support remain blocked;
- scenario names are constrained to `Conservative`, `Base`, and `Accelerated`;
- no unsupported workbook macros or external links are introduced.

## Transition To Numeric Workbook

The scaffold workbook does not replace the later Level 1 numeric workbook.

Numeric workbook generation remains blocked until:

1. management candidates are completed;
2. provisional inputs are authorized or draft-authorized;
3. `offering-economics-level-1.md` is populated;
4. `five-year-revenue-projection-summary.md` is normalized;
5. parity rows are available;
6. blocked exclusions are represented explicitly.

