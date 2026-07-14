# Disbursement Starter Spreadsheet Financial Model Specification

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Slice: 1 - Workbook Specification scaffold.

Workbook status: Not generated.

Target workbook path, if later approved:

```text
artifacts/x-commerce-disbursement-starter-financial-model.xlsx
```

This document specifies a future workbook. It does not create a workbook, change the canonical model, authorize values, or introduce assumptions.

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

No generator is created in this slice.

A future Disbursement workbook generator should be deterministic, repository-local where possible, macro-free, and subordinate to canonical documents.

## Next Slice

Scaffold workbook implementation slices before generating any `.xlsx` artifact.

