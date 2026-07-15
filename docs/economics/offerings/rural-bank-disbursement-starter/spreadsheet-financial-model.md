# Disbursement Starter Spreadsheet Financial Model Specification

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Slice: 1 - Workbook Specification scaffold, separate Disbursement workbook path.

Workbook status: Numeric workbook not generated. A structural scaffold workbook is permitted by [scaffold-workbook-generation-policy.md](scaffold-workbook-generation-policy.md).

Target workbook path:

```text
artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

This document specifies the workbook architecture. It does not change the canonical model, authorize values, or introduce assumptions.

The only `.xlsx` allowed before Level 1 numeric authorization is a structural scaffold workbook. That scaffold may show workbook layout, warnings, source lineage, blocked outputs, and validation controls, but it must not populate Disbursement projections.

Architecture decision for this track:

> Build a separate Disbursement workbook first. Do not merge Disbursement into the Payroll workbook until Disbursement has its own canonical Level 1 model and workbook parity checks.

## Governing Principle

> The repository defines the commercial architecture. The spreadsheet calculates and presents it.

The workbook must consume canonical sources. It must not become an independent commercial source of truth.

## Canonical Sources

| Source | Workbook use |
| --- | --- |
| [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md) | Canonical assumption identifiers, status, evidence quality, and blocked inputs. |
| [../../../decisions/0005-select-second-modeled-offering.md](../../../decisions/0005-select-second-modeled-offering.md) | Selected second modeled offering and scope. |
| [../../../decisions/0006-disbursement-starter-economic-treatment.md](../../../decisions/0006-disbursement-starter-economic-treatment.md) | Proposed economic treatment; must be accepted before numeric workbook. |
| [commercial-model.md](commercial-model.md) | Disbursement commercial structure, roles, billable events, and collection path. |
| [assumption-map.md](assumption-map.md) | Required, optional, blocked, not-applicable, and missing assumptions. |
| [provisional-input-register-level-1.md](provisional-input-register-level-1.md) | Future Level 1 provisional input register. |
| [offering-economics-level-1.md](offering-economics-level-1.md) | Future canonical Level 1 calculations and outputs. |
| [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md) | Future stakeholder-facing summary. |
| [workbook-parity-validation.md](workbook-parity-validation.md) | Future parity validation rows and artifact gate. |

## Required Workbook Warning

Every executive-facing sheet must include or link to:

> This workbook uses provisional management candidates and controlled placeholders only after they are authorized. It is not an approved budget, forecast, provider quote, institutional commitment, contract, regulatory filing, investment representation, or factual operating result.

Every stakeholder revenue sheet must also include:

> Stakeholder revenue figures are entity-level views and include internal transfers. They are not additive. Consolidated External Revenue counts external inflows once.

## Planned Sheet Order

| # | Sheet | Purpose |
| ---: | --- | --- |
| 0 | `00_Read_Me` | Use instructions, warnings, legend, sources, limitations. |
| 1 | `01_Control` | Scenario, notification toggle, cost view, volume method, model version. |
| 2 | `02_Assumptions` | Governed assumptions and provisional inputs. |
| 3 | `03_Assumption_Map` | Dependency lineage from assumptions to formulas and output tabs. |
| 4 | `04_Adoption` | Active banks, active months, sponsors, sponsor onboarding. |
| 5 | `05_Disbursement_Activity` | Sponsors, batches, recipients, completion, successful disbursements. |
| 6 | `06_Pricing` | Sponsor-facing prices, Rural Bank retention, ODTI split, notification pricing. |
| 7 | `07_Revenue` | External revenue and entity revenue views. |
| 8 | `08_Cost_of_Sales` | Direct and variable costs, optional notification wholesale cost. |
| 9 | `09_Operating_Expenses` | Rural Bank, ODTI, DevOps, shared modernization costs. |
| 10 | `10_Rural_Bank_View` | Rural Bank economics and stress tests. |
| 11 | `11_ODTI_View` | ODTI economics. |
| 12 | `12_DevOps_View` | DevOps economics. |
| 13 | `13_Notification_Variant` | Optional notification economics. |
| 14 | `14_Consolidated_View` | External inflows, outflows, eliminations, pass-through, blocked items. |
| 15 | `15_Profit_and_Loss` | Management P&L view; not GAAP/PFRS statements. |
| 16 | `16_Cash_Flow` | Cash timing; blocked while collection timing is unresolved. |
| 17 | `17_Capital_Budgeting` | NPV, IRR, payback; blocked until cash-flow and discount-rate inputs exist. |
| 18 | `18_Sensitivity` | Formula-based sensitivity scaffolds. |
| 19 | `19_Scenarios` | Conservative, Base, Accelerated comparison. |
| 20 | `20_Dashboard` | Executive dashboard. |
| 21 | `21_Checks` | Model integrity controls. |
| 22 | `22_Source_Lineage` | Workbook outputs traced to repository documents. |

## Separate-Workbook Boundary

The first Disbursement `.xlsx` artifact must be independent from:

- `artifacts/x-commerce-payroll-starter-financial-model.xlsx`;
- Payroll workbook manifests;
- Payroll provisional input IDs;
- Payroll scenario values.

The Disbursement workbook may reuse workbook architecture patterns from Payroll, including sheet order, checks, warnings, and `exceljs` generation conventions, but it must not reuse Payroll values unless a source document explicitly authorizes a shared assumption.

Future multi-offering portfolio workbook:

```text
Deferred until Payroll and Disbursement each have stable, independently validated workbook outputs.
```

## Formula Conventions

Future formulas must:

- reference assumption cells or prior calculation tabs;
- avoid embedded unexplained constants;
- use explicit month/year conversions;
- keep `DSP-VOL-001` component-derived unless another method is approved;
- keep pass-through disbursement value out of revenue;
- keep Core Disbursement separate from optional notification;
- keep stakeholder revenue non-additive;
- preserve blocked values as blocked, not zero.

## Required Checks

`21_Checks` must include:

- active banks do not exceed available banks;
- active months remain within valid month bounds;
- sponsors reconcile to active banks and sponsors per bank;
- `DSP-VOL-001` derives from components;
- annual disbursements derive from active banks, active months, and `DSP-VOL-001`;
- Rural Bank retained economics do not exceed sponsor-facing transaction fee;
- sponsor commercial fees are counted once;
- pass-through disbursement funding is excluded from revenue;
- internal transfers eliminate;
- optional notification is optional;
- blocked assumptions remain visible;
- no circular references.

## Capital Budgeting Governance

NPV and IRR must remain blocked until:

- cash-flow timing assumptions are governed;
- investment basis is governed;
- discount-rate assumption exists, likely `FIN-001`;
- cash-flow series supports IRR.

Do not force an IRR result.

## Generation Approach

The future generator should use the repo-local workbook-generation approach accepted for Payroll when the spreadsheet artifact runtime is unavailable.

Suggested script path:

```text
scripts/finance/build_disbursement_starter_model.mjs
```

Suggested manifest family:

```text
scripts/finance/disbursement_starter_slice2_manifest.json
scripts/finance/disbursement_starter_slice3_manifest.json
scripts/finance/disbursement_starter_slice4_manifest.json
scripts/finance/disbursement_starter_slice5_manifest.json
scripts/finance/disbursement_starter_slice6_manifest.json
scripts/finance/disbursement_starter_slice7_manifest.json
```

Numeric workbook generation remains blocked until:

- provisional inputs are authorized;
- Level 1 economics are populated;
- parity rows exist;
- blocked outputs are represented explicitly.

Structural scaffold workbook generation is allowed under [scaffold-workbook-generation-policy.md](scaffold-workbook-generation-policy.md) with:

```text
node scripts/finance/build_disbursement_starter_model.mjs --build-scaffold-xlsx --output artifacts/x-commerce-disbursement-starter-financial-model.xlsx
node scripts/finance/build_disbursement_starter_model.mjs --validate-scaffold-xlsx --input artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

The Disbursement workbook generator should be deterministic, repository-local where possible, macro-free, and subordinate to canonical documents.

## Initial Workbook Modes

The generator should support these modes before it writes any `.xlsx` artifact:

```text
--dry-run
--slice-2-plan
--slice-3-plan
--slice-4-plan
--slice-5-plan
--slice-6-plan
--slice-7-plan
--manifest-check
--parity-plan
--parity-validation
```

Numeric build commands should remain guarded until numeric authorization exists. Scaffold workbook commands may run before numeric authorization because they do not calculate economics.

## Next Slice

Scaffold workbook implementation slices before generating any `.xlsx` artifact.
