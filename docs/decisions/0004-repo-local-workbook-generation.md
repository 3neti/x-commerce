# 0004: Repo-Local Workbook Generation

## Status

Accepted

## Date

2026-07-13

## Decision Question

How should x-commerce generate the Payroll Starter spreadsheet workbook when the spreadsheet artifact runtime is unavailable?

## Context

The Payroll Starter spreadsheet scaffold originally required the Codex spreadsheet artifact runtime and `@oai/artifact-tool` for workbook generation.

The workbook specification, Slice 2 through Slice 7 manifests, and guarded builder all preserve the preferred artifact-tool path. However, the local project shell does not provide `@oai/artifact-tool`, so the `.xlsx` artifact cannot be generated from the repository alone.

The model itself is ready for a traditional workbook presentation. Blocking on a runtime that is not available in the repository prevents review of the first Slice 2 workbook artifact.

## Decision

Adopt a documented repo-local fallback workbook-generation path using `exceljs` for the Payroll Starter workbook.

The fallback generator may produce:

```text
artifacts/x-commerce-payroll-starter-financial-model.xlsx
```

from the canonical repository model and governed provisional inputs.

The artifact-tool path remains documented and guarded. The `exceljs` path is an intentional repository build path, not an ad hoc workaround.

## Rationale

This decision makes workbook generation reproducible from a normal repository checkout while preserving the source-of-truth hierarchy:

> The repository defines the commercial architecture. The spreadsheet calculates and presents it.

`exceljs` is acceptable for the first repo-local generator because:

- the existing builder is JavaScript;
- the first workbook slice is formula- and table-oriented;
- no macros are required;
- no external workbook links are required;
- deterministic workbook generation is more important than advanced Excel automation at this stage.

## Constraints

The repo-local generator must:

- consume canonical assumption IDs and provisional input IDs;
- preserve the Level 1 controlled-placeholder warnings;
- keep `VOL-001` component-derived;
- keep blocked assumptions visible;
- keep payroll funding out of revenue;
- keep Core Payroll separate from optional SMS in later slices;
- avoid macros and external links;
- avoid hidden hardcoded values in calculation areas;
- keep generated workbook artifacts deterministic;
- remain subordinate to the Markdown model and decision records.

The fallback generator must not:

- approve assumptions;
- create new commercial economics;
- replace the Assumptions Register;
- resolve blocked tax, royalty, NetBank, investor, or partner outputs;
- present provisional values as forecasts or commitments.

## Consequences

- The repository now owns a small Node-based workbook-generation toolchain.
- `exceljs` becomes a development dependency for finance artifact generation.
- Workbook compatibility and validation become repository responsibilities.
- The artifact-tool workflow remains available if the runtime is later provided.
- Generated `.xlsx` files remain artifacts, not the commercial source of truth.

## Implementation

Add:

```text
package.json
scripts/finance/build_payroll_starter_model.mjs
```

with an explicit `exceljs` generation command for Slice 2.

The first generated workbook should include:

- `00_Read_Me`;
- `01_Control`;
- `02_Assumptions`;
- `03_Assumption_Map`;
- `04_Adoption`;
- `05_Payroll_Activity`;
- `21_Checks`.

Later slices should extend the same repo-local generator without changing canonical economics.

## Non-Goals

This decision does not:

- create the full 23-tab workbook in one step;
- replace the canonical Markdown model;
- replace the artifact-tool path;
- add unsupported numerical assumptions;
- create a public forecast;
- approve pricing, costs, tax, royalty, NetBank, investor, or partner economics.

## Follow-Up

Implement and validate the deterministic `exceljs` Slice 2 workbook generator, then extend the workbook through later slices only after Slice 2 review.
