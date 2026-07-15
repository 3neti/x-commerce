# Disbursement Starter Numeric Workbook Readiness Roadmap

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current workbook state: structural scaffold `.xlsx` exists.

Target workbook state: formula-backed Level 1 controlled-placeholder workbook.

This roadmap does not authorize values, create projections, or revise the commercial architecture. It defines the gates required before the Disbursement workbook can move beyond the structural scaffold.

## Current Position

The repository can currently generate:

```text
artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

as a structural scaffold workbook.

That workbook contains:

- all planned workbook tabs;
- required warnings;
- source-lineage placeholders;
- blocked assumptions;
- validation checks;
- no authorized values;
- no Level 1 calculations;
- no five-year projections.

## Target Position

The populated workbook may be generated only after the canonical Disbursement model contains:

1. completed management candidate values;
2. draft-authorized or authorized provisional inputs;
3. Level 1 offering-economics outputs;
4. normalized five-year summary outputs;
5. parity rows that tie workbook outputs to canonical Markdown outputs;
6. blocked exclusions for unresolved NetBank, tax, royalty, financing, investor, and partner items.

## Required Gate Sequence

| Gate | Artifact | Purpose | Workbook effect |
| --- | --- | --- | --- |
| 1 | [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md) | Populate management candidates for Conservative, Base, and Accelerated scenarios. | Still no numeric workbook. |
| 2 | [candidate-value-entry-plan.md](candidate-value-entry-plan.md) | Control how candidate values are entered without authorization. | Enables review of proposed values only. |
| 3 | [provisional-input-register-level-1.md](provisional-input-register-level-1.md) | Authorize or draft-authorize Level 1 inputs. | Creates the input source the workbook may consume. |
| 4 | [offering-economics-level-1.md](offering-economics-level-1.md) | Produce canonical numeric outputs in Markdown. | Creates the parity source for workbook calculations. |
| 5 | [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md) | Normalize the stakeholder-facing summary. | Creates executive output labels and interpretation. |
| 6 | [workbook-parity-validation.md](workbook-parity-validation.md) | Define canonical-to-workbook parity checks. | Allows formula-backed workbook export validation. |
| 7 | `artifacts/x-commerce-disbursement-starter-financial-model.xlsx` | Generate the formula-backed workbook. | Replaces scaffold workbook with a populated workbook. |

## Numeric Workbook Entry Criteria

The workbook generator may move from scaffold mode to numeric mode only when:

- every workbook P0 input has an authorized value or explicit blocked treatment;
- `DSP-VOL-001` remains derived under component-derived mode;
- pass-through disbursement funding is excluded from revenue;
- Core Disbursement remains separate from optional notification;
- stakeholder revenue is labeled non-additive;
- internal transfers reconcile;
- blocked items are not silently treated as zero;
- the Level 1 Markdown model has enough outputs for parity validation.

## Required Source Hierarchy

The workbook must consume sources in this order:

1. [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md) for canonical IDs and status;
2. [../../../decisions/0005-select-second-modeled-offering.md](../../../decisions/0005-select-second-modeled-offering.md) and [../../../decisions/0006-disbursement-starter-economic-treatment.md](../../../decisions/0006-disbursement-starter-economic-treatment.md) for scope and economic treatment;
3. [provisional-input-register-level-1.md](provisional-input-register-level-1.md) for authorized workbook inputs;
4. [offering-economics-level-1.md](offering-economics-level-1.md) for canonical formulas and outputs;
5. [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md) for normalized summary outputs;
6. [workbook-parity-validation.md](workbook-parity-validation.md) for canonical parity rows.

## Blocked Until Evidence Or Authorization

The populated workbook must continue to block or qualify:

- `DSP-RB-002` Rural Bank internal support cost;
- `NET-001` and `NET-002` NetBank or infrastructure fees and costs;
- `TAX-001` tax and withholding treatment;
- `ROY-001` 3neti royalty or license basis;
- `FIN-001` discount rate and capital-budgeting basis;
- investor returns;
- business-development partner allocations;
- any optional notification cost or performance assumption without authorization.

## Workbook Modes

| Mode | Command family | Status |
| --- | --- | --- |
| Structural scaffold | `--build-scaffold-xlsx` and `--validate-scaffold-xlsx` | Available now. |
| Numeric readiness check | Future `--numeric-readiness-check` | May run before numeric export to report missing gates. |
| Formula-backed Level 1 workbook | Future `--build-level-1-xlsx` and `--validate-level-1-xlsx` | Blocked until gates are complete. |

## Next Slice

Define the candidate-value import contract so future management candidates can be converted into authorized provisional input records and workbook-ready inputs without ad hoc spreadsheet edits.

