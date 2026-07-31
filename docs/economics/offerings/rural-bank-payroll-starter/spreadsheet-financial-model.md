# Payroll Starter Spreadsheet Financial Model Specification

## Status

Offering: `OFR-RB-PAYROLL-STARTER`

Slice: 7 - Review and Freeze completed

Workbook status: Generated through the repo-local `exceljs` path accepted in Decision 0004.

Target workbook path: `artifacts/x-commerce-payroll-starter-financial-model.xlsx`

Target generation script: `scripts/finance/build_payroll_starter_model.mjs`

This document specifies the Excel workbook. It does not create the workbook, change the canonical model, authorize new values, or introduce new assumptions.

## Governing Principle

> The repository defines the commercial architecture. The spreadsheet calculates and presents it.

The workbook will be a compiled presentation of the accepted Level 1 Payroll Starter model. It must consume the canonical sources listed below and must not become an independent commercial source of truth.

## Canonical Sources

| Source | Workbook use |
| --- | --- |
| [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md) | Canonical assumption identifiers, status, evidence quality, and blocked inputs. |
| [../../../decisions/0002-select-first-modeled-offering.md](../../../decisions/0002-select-first-modeled-offering.md) | Selected first modeled offering. |
| [../../../decisions/0003-payroll-starter-economic-treatment.md](../../../decisions/0003-payroll-starter-economic-treatment.md) | Incremental Payroll, modernization portfolio, and full-cost stress-test treatment. |
| [commercial-model.md](commercial-model.md) | Payroll Starter commercial structure, roles, billable events, and collection path. |
| [assumption-map.md](assumption-map.md) | Required, optional, blocked, not-applicable, and missing payroll assumptions. |
| [provisional-input-register-level-1.md](provisional-input-register-level-1.md) | Level 1 provisional input values and blocked exclusions. |
| [offering-economics-level-1.md](offering-economics-level-1.md) | Canonical Level 1 calculations and five-year outputs. |
| [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md) | Normalized stakeholder-facing summary and interpretation. |
| [stakeholder-financial-briefs/README.md](stakeholder-financial-briefs/README.md) | Presentation-layer governance rule for stakeholder views. |

## Required Workbook Warning

Every executive-facing sheet must include or link to this warning:

> This workbook uses provisional management candidates and controlled placeholders. It is not an approved budget, forecast, provider quote, institutional commitment, contract, regulatory filing, investment representation, or factual operating result.

Every stakeholder revenue sheet must also include:

> Stakeholder revenue figures are entity-level views and include internal transfers. They are not additive. Consolidated External Revenue counts external inflows once.

## Workbook Scope

Included:

- `OFR-RB-PAYROLL-STARTER` only.
- Conservative, Base, and Accelerated scenarios.
- Core Payroll Starter.
- Optional SMS variant, separately controlled.
- Incremental Payroll Economics.
- Rural Bank Modernization Portfolio cost view.
- Full-Cost Stand-Alone Payroll stress test.
- Management P&L views.
- Cash-flow framework.
- NPV, IRR, payback, and sensitivity framework, with blocked outputs where prerequisites are missing.

Excluded or blocked:

- final tax-adjusted profit;
- 3neti royalty;
- NetBank fee and NetBank contribution;
- investor return distributions;
- business-development partner allocations;
- KYC, email, rider, and other deferred capabilities;
- full balance sheet;
- macros or VBA.

## Workbook Sheet Order

| # | Sheet | Purpose |
| ---: | --- | --- |
| 0 | `00_Read_Me` | Use instructions, warnings, legend, sources, limitations. |
| 1 | `01_Control` | Scenario, SMS, cost view, volume method, discount rate, model version. |
| 2 | `02_Assumptions` | Spreadsheet representation of governed assumptions and provisional inputs. |
| 3 | `03_Assumption_Map` | Dependency lineage from assumptions to formulas and output tabs. |
| 4 | `04_Adoption` | Bank and employer adoption over five years. |
| 5 | `05_Payroll_Activity` | Derived payroll activity and optional SMS-attached activity. |
| 6 | `06_Pricing` | Commercial units, splits, retained amounts, and SMS price/cost. |
| 7 | `07_Revenue` | External revenue and entity revenue views. |
| 8 | `08_Cost_of_Sales` | Direct costs, non-collection, SMS wholesale cost, blocked direct costs. |
| 9 | `09_Operating_Expenses` | Rural Bank, ODTI, DevOps, and modernization costs. |
| 10 | `10_Rural_Bank_View` | Rural Bank economics, modernization view, full-cost stress test. |
| 11 | `11_ODTI_View` | ODTI Pre-Tax, Pre-Royalty, NetBank-Fee-Blocked view. |
| 12 | `12_DevOps_View` | DevOps setup, recurring revenue, direct cost, contribution. |
| 13 | `13_SMS_Variant` | Optional SMS volume, revenue, cost, and margin. |
| 14 | `14_Consolidated_View` | External inflows, external outflows, internal eliminations, pass-through. |
| 15 | `15_Profit_and_Loss` | Provisional management P&L views. |
| 16 | `16_Cash_Flow` | Cash timing view, blocked timing inputs, working-capital limitations. |
| 17 | `17_Capital_Budgeting` | NPV, IRR, payback, and investment cash-flow prerequisites. |
| 18 | `18_Sensitivity` | Formula-based sensitivity grids. |
| 19 | `19_Scenarios` | Conservative, Base, and Accelerated comparison. |
| 20 | `20_Dashboard` | Executive dashboard. |
| 21 | `21_Checks` | Workbook integrity checks. |
| 22 | `22_Source_Lineage` | Traceability to documents, assumptions, and provisional input IDs. |

## Calculation Order

The workbook must calculate in this order:

1. `01_Control` selects scenario, SMS inclusion, cost view, volume method, and discount rate.
2. `02_Assumptions` returns selected scenario values from governed inputs.
3. `03_Assumption_Map` documents which assumptions drive each calculation.
4. `04_Adoption` calculates bank and employer adoption.
5. `05_Payroll_Activity` derives `VOL-001` and annual successful payroll transactions.
6. `06_Pricing` calculates commercial splits and validates price constraints.
7. `07_Revenue` calculates external and entity revenue views.
8. `08_Cost_of_Sales` and `09_Operating_Expenses` calculate costs.
9. `10_Rural_Bank_View`, `11_ODTI_View`, `12_DevOps_View`, and `13_SMS_Variant` calculate stakeholder views.
10. `14_Consolidated_View` eliminates internal transfers and preserves pass-through separation.
11. `15_Profit_and_Loss` presents provisional management P&L views.
12. `16_Cash_Flow` presents cash timing where assumptions allow and blocks unsupported outputs.
13. `17_Capital_Budgeting` calculates NPV, IRR, and payback only when cash-flow prerequisites exist.
14. `18_Sensitivity`, `19_Scenarios`, and `20_Dashboard` present model outputs.
15. `21_Checks` and `22_Source_Lineage` validate and document the model.

## Input And Formula Styling

The workbook should use restrained, professional formatting.

| Cell type | Visual treatment | Label requirement |
| --- | --- | --- |
| User control | Light blue fill | Must show allowed values. |
| Provisional input | Light yellow fill | Must show provisional input ID. |
| Active working assumption | Light orange fill | Must show evidence limitation. |
| Approved input | Light green fill | Reserved for future approved assumptions. |
| Blocked input | Light gray fill | Must display `Blocked`, not zero. |
| Formula | White fill | Must reference cells, not hidden constants. |
| Derived output | White fill with italic label | Must identify source formula. |
| Warning/check | Light red fill if error | Must display `OK`, `ERROR`, `Blocked`, or `Not meaningful`. |

Do not rely only on color. Each input area must include status and evidence labels.

## Scenario Controls

`01_Control` should include:

| Control | Proposed cell | Allowed values | Default | Notes |
| --- | --- | --- | --- | --- |
| Selected scenario | `B4` | Conservative, Base, Accelerated | Base | Data validation required. |
| Model start year | `B5` | Whole number | Year 1 | Label output years as Year 1 to Year 5. |
| Projection horizon | `B6` | 5 | 5 | Fixed for Level 1. |
| Include optional SMS | `B7` | Yes, No | No | Core Payroll remains primary. |
| Cost view | `B8` | Incremental Payroll, Full-Cost Stress Test | Incremental Payroll | Shared Platform Allocation is disabled until later supported. |
| Volume method | `B9` | Component-derived | Component-derived | Independently controlled aggregate is disabled until authorized. |
| Discount rate | `B10` | Blocked or provisional future input | Blocked | Requires a future canonical assumption. |
| Terminal value method | `B11` | Disabled | Disabled | Deferred. |
| Model version | `B12` | Text | Level 1 | Must match source documents. |

## Assumption Table Design

`02_Assumptions` should contain a structured table named `tbl_assumptions`.

Required columns:

| Column | Purpose |
| --- | --- |
| Assumption ID | Canonical ID or documented decision source. |
| Category | Adoption, activity, pricing, cost, risk, SMS, blocked, decision. |
| Description | Plain-language description. |
| Unit | Unit from the Provisional Input Register or Assumptions Register. |
| Conservative | Scenario value or five-year vector. |
| Base | Scenario value or five-year vector. |
| Accelerated | Scenario value or five-year vector. |
| Selected Scenario Value | Formula driven from `01_Control!B4`. |
| Current Status | From canonical assumption or decision record. |
| Evidence Status | Working assumption, controlled placeholder, blocked, excluded. |
| Input Classification | Primitive input, derived input, active working assumption, controlled placeholder, decision source. |
| Provisional Input ID | `PI-L1-*`, where applicable. |
| Source | Source document. |
| Confidence | Existing confidence where available; otherwise `Not evidence-supported`. |
| Owner | Existing owner where available; otherwise `Open`. |
| Review Trigger | Replacement evidence or review trigger. |
| Offering | `OFR-RB-PAYROLL-STARTER`. |
| Notes | Warnings, exclusions, or dependencies. |

Annual vector assumptions may be represented in helper tables on the relevant calculation tabs, but each vector must trace to a single `tbl_assumptions` row and provisional input ID.

## Named Range Convention

Excel names should use machine-safe versions of assumption IDs:

```text
ADP-002 -> ADP_002
CUS-001 -> CUS_001
EMP-002 -> EMP_002
VOL-001 -> VOL_001
```

Identifiers beginning with a numeral require a separate machine-safe name if later used. Documentation display IDs should remain unchanged.

## Level 1 Numeric Assumptions

These are the currently used Level 1 numeric inputs. The workbook must not replace them or introduce alternate values.

### Adoption And Activity

| Assumption ID | Provisional Input ID | Conservative | Base | Accelerated | Role |
| --- | --- | --- | --- | --- | --- |
| `ADP-001` | `PI-L1-001` | Y1 2; Y2 3; Y3 4; Y4 4; Y5 5 | Y1 5; Y2 7; Y3 8; Y4 10; Y5 10 | Y1 10; Y2 12; Y3 15; Y4 18; Y5 20 | Newly onboarded banks during year. |
| `ADP-002` | `PI-L1-002` | Y1 1; Y2 3; Y3 6; Y4 9; Y5 12 | Y1 3; Y2 8; Y3 14; Y4 22; Y5 32 | Y1 7; Y2 16; Y3 28; Y4 42; Y5 60 | Active banks during year. |
| `ADP-003` | `PI-L1-003` | Y1 4; Y2 6; Y3 7; Y4 8; Y5 8 | Y1 5; Y2 7; Y3 8; Y4 9; Y5 10 | Y1 6; Y2 8; Y3 9; Y4 10; Y5 10 | Weighted average active months. |
| `CUS-001` | `PI-L1-004` | 2 | 4 | 6 | Payroll customers per active bank. |
| `CUS-002` | `PI-L1-005` | 1 | 2 | 2 | Payroll runs per customer per month. |
| `CUS-003` | `PI-L1-006` | 20 | 35 | 60 | Recipients per payroll run. |
| `VOL-002` | `PI-L1-007` | 92% | 96% | 98% | Completion rate. |
| `VOL-001` | `PI-L1-008` | 36.8 | 268.8 | 705.6 | Derived value only. |

### Pricing And Splits

| Assumption ID or source | Provisional Input ID | Conservative | Base | Accelerated | Role |
| --- | --- | ---: | ---: | ---: | --- |
| `EMP-001` | `PI-L1-009` | PHP 1,500 | PHP 3,000 | PHP 5,000 | Employer onboarding fee. |
| `EMP-002` | `PI-L1-010` | PHP 300 | PHP 750 | PHP 1,250 | Employer monthly payroll-service fee. |
| `LIC-004` | `PI-L1-011` | PHP 50,000 | PHP 50,000 | PHP 50,000 | Platform activation fee. |
| `LIC-005` | `PI-L1-012` | PHP 60,000 | PHP 60,000 | PHP 60,000 | Annual platform subscription. |
| `PRC-001` | `PI-L1-013` | PHP 1.00 | PHP 1.50 | PHP 2.00 | Recipient disbursement fee. |
| `RB-001` | `PI-L1-014` | PHP 0.40 | PHP 0.50 | PHP 0.60 | Rural Bank retained amount. |
| Decision 0003 | `PI-L1-015` | 40% / 60% | 40% / 60% | 40% / 60% | `EMP-001` split, Rural Bank / ODTI. |
| Decision 0003 | `PI-L1-016` | 60% / 40% | 60% / 40% | 60% / 40% | `EMP-002` split, Rural Bank / ODTI. |

### Cost, Risk, And SMS

| Assumption ID or source | Provisional Input ID | Conservative | Base | Accelerated | Role |
| --- | --- | ---: | ---: | ---: | --- |
| `ODTI-001` | `PI-L1-017` | PHP 3,000 | PHP 2,500 | PHP 2,000 | ODTI support cost per active bank-month. |
| `ODTI-002` | `PI-L1-018` | PHP 20,000 | PHP 15,000 | PHP 12,000 | ODTI implementation cost per newly onboarded bank. |
| `OPS-001` | `PI-L1-019` | PHP 50,000 | PHP 50,000 | PHP 50,000 | DevOps setup fee. |
| `OPS-002` | `PI-L1-020` | PHP 10,000 | PHP 10,000 | PHP 10,000 | DevOps monthly managed operations fee. |
| `OPS-003` | `PI-L1-021` | PHP 8,000 | PHP 6,000 | PHP 5,000 | DevOps direct recurring cost. |
| `CLD-001` | `PI-L1-022` | PHP 4,000 | PHP 3,000 | PHP 2,500 | Public-cloud cost. |
| `RISK-002` | `PI-L1-023` | 5% | 2% | 1% | Non-collection rate on employer commercial fees. |
| `ATT-001` | `PI-L1-024` | 25% | 50% | 70% | SMS attachment rate. |
| `VAS-001` | `PI-L1-025` | PHP 1.00 | PHP 1.00 | PHP 1.00 | Customer-facing SMS price. |
| `CST-001` | `PI-L1-026` | PHP 0.70 | PHP 0.50 | PHP 0.40 | SMS wholesale provider price. |
| `SMS-001` | `PI-L1-027` | 90% | 95% | 97% | SMS delivery success rate. |
| `SMS-003` | `PI-L1-028` | Delivered-only billing | Delivered-only billing | Delivered-only billing | Failed-message treatment. |
| `SMS-004` | `PI-L1-029` | Internal modeling only | Internal modeling only | Internal modeling only | Privacy and consent warning. |
| Decision 0003 | `PI-L1-030` | Rural Bank retains gross SMS margin | Rural Bank retains gross SMS margin | Rural Bank retains gross SMS margin | SMS margin split. |

## Derived Values

The workbook must calculate these values from source assumptions.

| Derived item | Formula | Source |
| --- | --- | --- |
| `VOL-001` | `CUS-001 x CUS-002 x CUS-003 x VOL-002` | [provisional-input-register-level-1.md](provisional-input-register-level-1.md) |
| Annual successful payroll transactions | `ADP-002 x ADP-003 x VOL-001` | [offering-economics-level-1.md](offering-economics-level-1.md) |
| Active employers | `ADP-002 x CUS-001` | Existing Level 1 activity tables. |
| Newly onboarded employer relationships | `ADP-001 x CUS-001` | Existing Level 1 activity tables. |
| Employer onboarding revenue | Newly onboarded employer relationships x `EMP-001` | Core Payroll model. |
| Employer monthly service revenue | Active employers x active months x `EMP-002` | Core Payroll model. |
| Recipient disbursement revenue | Annual successful transactions x `PRC-001` | Core Payroll model. |
| Rural Bank transaction retention | Annual successful transactions x `RB-001` | Rural Bank view. |
| ODTI transaction revenue | Annual successful transactions x (`PRC-001` - `RB-001`) | ODTI view. |
| Delivered SMS | Annual successful transactions x `ATT-001` x `SMS-001` | Optional SMS model. |
| Collected SMS revenue | SMS customer-facing revenue x (1 - `RISK-002`) | Optional SMS model. |
| Rural Bank SMS margin | Collected SMS revenue - wholesale SMS provider cost | Optional SMS model. |
| Modernization cost | `LIC-005 / 12 + OPS-002 + CLD-001` | Full-cost stress-test view. |

## Blocked And Excluded Outputs

These must remain visible as blocked or excluded. The workbook must not insert zero values to force output.

| Assumption or output | Workbook treatment |
| --- | --- |
| `RB-002` | Block true Rural Bank internal support cost and true Rural Bank net contribution. |
| `TAX-001` | Block tax-adjusted results and final net income. |
| `ROY-001` | Block 3neti royalty revenue and ODTI post-royalty contribution. |
| `NET-001` | Block NetBank-fee-adjusted results. |
| `NET-002` | Block NetBank cost and contribution view. |
| `PAR-001` | Exclude business-development partner allocation. |
| `SMS-002` | Exclude SMS Provider internal margin. |
| `BAT-001` | Defer payroll batch fee. |
| `ALLOC-001`, `ALLOC-002`, `PLT-001` | Defer shared platform allocation until additional offerings exist. |
| Payroll funding value | Pass-through only, not revenue and not cost of sales. |
| Full balance sheet | Deferred until accounting and working-capital assumptions exist. |

## Sheet Specifications

### `00_Read_Me`

Must include:

- workbook title;
- version: Level 1 Controlled Placeholder Model;
- generation date;
- permitted and prohibited use;
- required warnings;
- color legend;
- source documents;
- blocked outputs;
- no-macro statement;
- user instructions for `01_Control`.

### `01_Control`

Must include the controls defined in the Scenario Controls section.

Data validation required:

- selected scenario;
- include optional SMS;
- cost view;
- volume method.

The workbook must not allow `Independently controlled aggregate` volume mode in Level 1 except as disabled text.

### `02_Assumptions`

Must include every Level 1 input and blocked item. The `Selected Scenario Value` column should be formula-driven from `01_Control!B4`.

For five-year vector inputs, the workbook may use helper tables in the same sheet or in the relevant calculation sheet, but the lineage must remain tied to the single canonical assumption ID and provisional input ID.

### `03_Assumption_Map`

Minimum records:

| Assumption ID | Used by | Formula / role | Output tabs | Status |
| --- | --- | --- | --- | --- |
| `CUS-001` | `VOL-001`, Active employers | Component input | `04_Adoption`, `05_Payroll_Activity` | Provisional |
| `CUS-002` | `VOL-001` | Component input | `05_Payroll_Activity` | Provisional |
| `CUS-003` | `VOL-001` | Component input | `05_Payroll_Activity` | Provisional |
| `VOL-002` | `VOL-001` | Component input | `05_Payroll_Activity` | Provisional |
| `VOL-001` | Annual transactions | Derived input only | `05_Payroll_Activity`, revenue tabs | Derived |
| `ADP-002` | Annual transactions, active employers | Primitive input | `04_Adoption`, `05_Payroll_Activity` | Provisional |
| `ADP-003` | Annual transactions | Primitive input | `04_Adoption`, `05_Payroll_Activity` | Provisional |

Check required:

```text
If volume method = Component-derived, then VOL-001 independent input must be blank or disabled.
```

### `04_Adoption`

Rows:

- newly onboarded banks;
- cumulative onboarded banks;
- active banks;
- weighted active months;
- payroll customers per active bank;
- active employers;
- newly onboarded employer relationships.

Checks:

- active banks less than or equal to cumulative onboarded banks;
- weighted active months between 0 and 12;
- active employers equal active banks x payroll customers per active bank;
- newly onboarded employer relationships equal newly onboarded banks x payroll customers per active bank;
- onboarding revenue uses newly onboarded employer relationships;
- recurring service revenue uses active employers and weighted active months.

### `05_Payroll_Activity`

Rows:

- payroll customers per active bank;
- payroll runs per employer per month;
- recipients per payroll run;
- completion rate;
- derived `VOL-001`;
- active banks;
- weighted active months;
- annual successful payroll transactions;
- failed or uncompleted transactions, blocked until attempted transaction basis is available;
- optional SMS-attached delivered transactions.

### `06_Pricing`

Rows:

- `EMP-001` employer onboarding fee;
- `EMP-002` employer monthly payroll-service fee;
- `PRC-001` recipient disbursement fee;
- `RB-001` Rural Bank retained transaction amount;
- ODTI retained transaction amount;
- `LIC-004`;
- `LIC-005`;
- `OPS-001`;
- `OPS-002`;
- `VAS-001`;
- `CST-001`.

Checks:

- `RB-001 <= PRC-001`;
- ODTI transaction amount non-negative;
- `EMP-001` split sums to 100%;
- `EMP-002` split sums to 100%;
- SMS margin formula equals collected SMS revenue less wholesale cost.

### `07_Revenue`

Separate sections:

1. External revenue:
   - employer onboarding fees;
   - employer monthly payroll-service fees;
   - recipient disbursement fees;
   - optional SMS fees, if enabled.
2. Entity revenue views:
   - Rural Bank;
   - ODTI;
   - DevOps Provider;
   - SMS Provider, optional;
   - 3neti, blocked;
   - NetBank, blocked.

Warning required: entity revenue views are not additive.

### `08_Cost_of_Sales`

Rows:

- bad debt or non-collection on employer commercial fees;
- SMS wholesale provider cost;
- other direct provider costs, blocked;
- payroll-specific variable support cost, blocked if no input exists;
- pass-through payroll funding, shown outside cost of sales.

### `09_Operating_Expenses`

Sections:

- Rural Bank incremental payroll operating costs, with `RB-002` blocked;
- ODTI implementation and support costs;
- DevOps direct recurring cost;
- shared modernization costs: `LIC-005`, `OPS-001`, `OPS-002`, `CLD-001`;
- blocked or excluded costs.

Incremental Payroll and modernization costs must remain separated.

### `10_Rural_Bank_View`

Must use the full label:

```text
Rural Bank Contribution Before Internal Bank Payroll-Support Cost
```

Sections:

- Core Payroll revenue;
- optional SMS margin;
- incremental contribution before `RB-002`;
- modernization costs;
- full-cost stand-alone stress result;
- employer and transaction break-even;
- blocked `RB-002` note.

### `11_ODTI_View`

Must use the qualifier:

```text
Pre-Tax, Pre-Royalty, NetBank-Fee-Blocked
```

Sections:

- activation revenue;
- annual subscription revenue;
- employer onboarding share;
- employer monthly service share;
- transaction-platform revenue;
- implementation cost;
- support cost;
- non-collection;
- contribution;
- blocked `TAX-001`, `ROY-001`, and `NET-001`.

### `12_DevOps_View`

Sections:

- setup revenue;
- recurring managed-operations revenue;
- direct recurring cost;
- contribution;
- banks supported;
- monthly contribution per active bank;
- setup direct cost blocked or unresolved.

Public-cloud cost remains outside DevOps under the baseline bank-owned cloud model.

### `13_SMS_Variant`

Sections:

- SMS-attached delivered transactions;
- customer-facing SMS revenue;
- collected SMS revenue;
- wholesale provider cost;
- Rural Bank SMS margin;
- SMS Provider revenue;
- `SMS-002` provider internal margin blocked.

The baseline formula must be:

```text
Rural Bank SMS margin = Collected SMS revenue - Wholesale SMS provider cost
```

The wholesale provider cost remains payable for qualifying SMS activity unless a provider contract later says otherwise.

### `14_Consolidated_View`

Sections:

- external inflows;
- external outflows;
- internal eliminations;
- pass-through payroll funding;
- blocked items;
- consolidated external revenue;
- consolidated contribution before blocked items;
- full-cost stress-test result.

The SMS wholesale provider cost is an external provider outflow in the current Level 1 model boundary.

### `15_Profit_and_Loss`

Create management P&L views, not formal GAAP/PFRS statements.

Required structure:

```text
Revenue
Less: Cost of Sales
Gross Profit
Less: Operating Expenses
Operating Contribution
Less: Depreciation / Amortization - Blocked or Not modeled
EBIT - Blocked where accounting treatment is unresolved
Less: Interest - Not modeled
Pre-Tax Result
Tax - Blocked
Net Income - Blocked
```

Separate views:

- Rural Bank, qualified by `RB-002`;
- ODTI;
- DevOps Provider;
- consolidated offering.

### `16_Cash_Flow`

The workbook should show cash timing separately from economic recognition.

Rows:

- employer collections;
- Rural Bank receipts;
- ODTI receipts;
- provider payments;
- DevOps receipts and payments;
- cloud payments;
- implementation cash flows;
- working-capital effects;
- bad debt;
- ending cash, blocked unless beginning cash and financing assumptions exist.

Do not assume revenue equals cash receipt. `COL-001` and related timing assumptions remain unresolved.

### `17_Capital_Budgeting`

Views:

- Rural Bank Modernization Investment;
- ODTI Program Investment.

Metrics:

- initial investment;
- annual incremental cash flow;
- NPV;
- IRR;
- simple payback;
- discounted payback;
- profitability index.

Governance:

- NPV must use cash flows, not accounting revenue.
- IRR must show `Not meaningful` if the cash-flow pattern lacks at least one negative and one positive flow.
- Discount rate remains blocked under canonical `FIN-001 - Discount Rate For Level 1 Capital Budgeting` until finance evidence and approval authorize a value.
- Terminal value is disabled by default.

### `18_Sensitivity`

Use formula-based grids, not macros.

Minimum sensitivity grids:

- active banks versus active employers per bank;
- employer monthly fee versus employer count;
- recipient fee versus transaction volume;
- Rural Bank retained amount versus volume;
- ODTI support cost versus active banks;
- DevOps cost versus bank count;
- discount rate versus NPV, blocked until discount rate is authorized;
- shared modernization allocation versus Rural Bank contribution, blocked until allocation assumptions exist.

### `19_Scenarios`

Compare Conservative, Base, and Accelerated side by side for:

- adoption;
- activity;
- external revenue;
- stakeholder revenue views;
- contribution;
- break-even;
- cash, where not blocked;
- NPV and IRR, where not blocked.

Scenarios must remain coherent operating states.

### `20_Dashboard`

Dashboard metrics:

- active banks;
- active employers;
- successful transactions;
- consolidated external revenue;
- Rural Bank Contribution Before Internal Bank Payroll-Support Cost;
- ODTI Pre-Tax, Pre-Royalty, NetBank-Fee-Blocked Contribution;
- DevOps contribution;
- cash requirement, blocked if cash-flow prerequisites are missing;
- break-even year;
- NPV, blocked until cash-flow and discount-rate prerequisites exist;
- IRR, blocked or not meaningful until prerequisites exist;
- blocked input count;
- check error count.

Charts:

- five-year external revenue;
- five-year contribution;
- active banks and active employers;
- successful transaction volume;
- Core Payroll versus Optional SMS;
- incremental versus full-cost stress result;
- scenario comparison.

### `21_Checks`

Each check must display `OK`, `ERROR`, `Blocked`, or `Not meaningful`.

Minimum checks:

| Check | Expected result |
| --- | --- |
| Active banks not greater than cumulative onboarded banks | `OK` |
| Weighted active months between 0 and 12 | `OK` |
| Active employers reconcile | `OK` |
| Newly onboarded employer relationships reconcile | `OK` |
| `VOL-001` equals component-derived formula | `OK` |
| No independent `VOL-001` input used in component-derived mode | `OK` |
| `RB-001 <= PRC-001` | `OK` |
| Employer onboarding split sums to 100% | `OK` |
| Employer monthly service split sums to 100% | `OK` |
| SMS margin equals collected SMS revenue less wholesale provider cost | `OK` |
| Payroll funding excluded from revenue | `OK` |
| Entity revenue not added into consolidated external revenue | `OK` |
| Internal transfers eliminated | `OK` |
| Blocked items visibly blocked | `OK` |
| NPV uses cash flows only | `Blocked` until cash-flow prerequisites exist |
| IRR has valid sign pattern | `Blocked` or `Not meaningful` until cash-flow prerequisites exist |
| No formula errors | `OK` |

Dashboard must show total `ERROR` count.

### `22_Source_Lineage`

Minimum columns:

| Workbook Item | Assumption IDs | Source Document | Section | Provisional Input IDs |
| --- | --- | --- | --- | --- |

Minimum mapped items:

- adoption;
- volume;
- employer fees;
- recipient disbursement fee;
- Rural Bank retained economics;
- ODTI transaction revenue;
- platform activation and subscription;
- ODTI support and implementation cost;
- DevOps setup, recurring fee, and direct cost;
- public cloud;
- SMS price, cost, delivery, and attachment;
- non-collection;
- blocked tax, royalty, NetBank, Rural Bank support, SMS provider margin, and partner allocation.

## Canonical Figure Parity Requirements

The generated workbook must include a parity table comparing workbook outputs to the Markdown model. At minimum:

| Canonical Output | Year | Scenario | Markdown Model | Workbook | Match |
| --- | --- | --- | ---: | ---: | --- |
| Core External Revenue | Year 1 | Conservative | PHP 8,547.20 | Formula result | Required |
| Core External Revenue | Year 5 | Conservative | PHP 76,132.80 | Formula result | Required |
| Core Contribution Before Blocked Items | Year 5 | Conservative | PHP -315,673.84 | Formula result | Required |
| Core External Revenue | Year 1 | Base | PHP 111,048.00 | Formula result | Required |
| Core External Revenue | Year 5 | Base | PHP 1,209,024.00 | Formula result | Required |
| Core Contribution Before Blocked Items | Year 1 | Base | PHP -3,672.96 | Formula result | Required |
| Core Contribution Before Blocked Items | Year 5 | Base | PHP 234,843.52 | Formula result | Required |
| ODTI Contribution | Year 5 | Base | PHP 1,681,175.68 | Formula result | Required |
| DevOps Revenue | Year 5 | Base | PHP 3,700,000.00 | Formula result | Required |
| Rural Bank Contribution Before Internal Bank Payroll-Support Cost | Year 5 | Base | PHP 653,667.84 | Formula result | Required |
| SMS Consolidated Contribution | Year 5 | Base | PHP 19,611.65 | Formula result | Required |
| Core External Revenue | Year 1 | Accelerated | PHP 674,270.40 | Formula result | Required |
| Core External Revenue | Year 5 | Accelerated | PHP 5,946,720.00 | Formula result | Required |
| Core Contribution Before Blocked Items | Year 5 | Accelerated | PHP 4,447,252.80 | Formula result | Required |

The workbook-generation validation must fail if any required parity row does not match within the workbook rounding policy.

## Formula Conventions

Rules:

- formulas must reference assumption cells or prior calculation tabs;
- no hidden hardcoded constants in calculation areas;
- monthly and annual unit conversions must be explicit;
- use whole pesos for executive outputs and appropriate decimals for unit economics;
- show years as Year 1 through Year 5;
- avoid volatile functions;
- avoid circular references;
- no external workbook links;
- no macros or VBA.

Cross-sheet references should quote sheet names:

```text
='02_Assumptions'!B5
```

## P&L Governance

The workbook may present management P&L views, but it must not imply formal accounting conclusions.

Labels required:

- Management P&L View;
- Provisional Operating Contribution;
- Not GAAP/PFRS Financial Statements;
- Pre-Tax where taxes are blocked;
- Pre-Royalty where `ROY-001` is blocked;
- NetBank-Fee-Blocked where `NET-001` is blocked.

## Cash-Flow Governance

Cash-flow sheets must distinguish:

- economic revenue;
- invoicing;
- collection;
- payment;
- cash receipt;
- cash disbursement;
- blocked working-capital inputs.

Where collection timing is missing, the workbook may show a structural row with `Blocked`, but must not assume immediate collection unless that assumption is explicitly authorized.

## NPV And IRR Governance

NPV and IRR are not automatically available in Slice 2 or Slice 3.

Prerequisites:

- cash-flow timing inputs;
- initial investment inputs;
- discount rate assumption;
- working-capital treatment;
- terminal value method if terminal value is used;
- a valid IRR sign pattern.

If a prerequisite is missing:

```text
NPV: Blocked
IRR: Blocked
```

or:

```text
IRR: Not meaningful
```

Canonical blocked assumption:

| Assumption ID | Name | Purpose | Current treatment |
| --- | --- | --- | --- |
| `FIN-001` | Discount Rate For Level 1 Capital Budgeting | Required for NPV and discounted payback. | Canonical and Blocked; no value is authorized. |

## Balance Sheet Scope

Do not build a full balance sheet in the first workbook.

Reason: the canonical model does not yet define receivables, payables, cash balances, deferred revenue, debt, fixed assets, depreciation, or capital structure sufficiently for a reliable balance sheet.

The workbook may include a working-capital schedule with blocked items and a note:

> Full balance-sheet modeling is deferred until accounting treatment and working-capital assumptions are sufficiently defined.

## Sensitivity Governance

Sensitivity is separate from scenarios.

Scenarios describe coherent operating states.

Sensitivity changes one or two assumptions at a time to expose model behavior.

No sensitivity case may be presented as a new forecast or approved scenario.

## Generation Approach

The workbook should be generated reproducibly.

Preferred script:

```text
scripts/finance/build_payroll_starter_model.mjs
```

Requirements:

- deterministic output;
- artifact-tool JavaScript workbook generation;
- no proprietary Excel automation;
- no VBA;
- no external links;
- formulas visible in workbook;
- structural validation after generation;
- source values encoded in a structured data section with assumption IDs and provisional input IDs;
- future migration path to machine-readable assumptions.

For the first generated workbook, it is acceptable for the script to encode the accepted Level 1 provisional inputs directly, provided every entry cites:

- canonical assumption ID or decision source;
- provisional input ID;
- source document;
- evidence status;
- scenario values.

Current scaffold commands:

```text
node scripts/finance/build_payroll_starter_model.mjs --dry-run
node scripts/finance/build_payroll_starter_model.mjs --slice-2-plan
node scripts/finance/build_payroll_starter_model.mjs --slice-2-export-plan
node scripts/finance/build_payroll_starter_model.mjs --slice-3-plan
node scripts/finance/build_payroll_starter_model.mjs --slice-3-export-plan
node scripts/finance/build_payroll_starter_model.mjs --slice-4-plan
node scripts/finance/build_payroll_starter_model.mjs --slice-5-plan
node scripts/finance/build_payroll_starter_model.mjs --slice-6-plan
node scripts/finance/build_payroll_starter_model.mjs --slice-7-plan
node scripts/finance/build_payroll_starter_model.mjs --manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-2-export-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-3-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-3-export-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-4-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-5-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-6-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --slice-7-manifest-check
node scripts/finance/build_payroll_starter_model.mjs --runtime-check
node scripts/finance/build_payroll_starter_model.mjs --runtime-handoff
node scripts/finance/build_payroll_starter_model.mjs --build-slice-2
node scripts/finance/build_payroll_starter_model.mjs --validate-slice-2
```

The scaffold validates Level 1 input records, blocked/excluded records, planned sheets, split constraints, component-derived `VOL-001`, and annual payroll activity parity. The guarded export and workbook-validation entry points require the spreadsheet artifact runtime dependency `@oai/artifact-tool`; they must not fall back to another workbook library.

Decision [0004: Repo-local workbook generation](../../../decisions/0004-repo-local-workbook-generation.md) accepts a separate repository-local `exceljs` path when the spreadsheet artifact runtime is unavailable. The ExcelJS path is intentional, documented, and subordinate to the same canonical source documents.

The Slice 2 manifest is:

```text
scripts/finance/payroll_starter_slice2_manifest.json
```

It records required Slice 2 sheets, canonical activity parity targets, blocked or excluded inputs, required checks, and runtime validation steps.

The Slice 2 export implementation manifest is:

```text
scripts/finance/payroll_starter_slice2_export_manifest.json
```

It records the concrete export scaffold for the first runtime-backed `.xlsx` generation:

- worksheet anchors;
- formula responsibilities;
- named-range strategy;
- visual QA targets;
- runtime validation expectations.

This manifest is the bridge between the documentation-first workbook design and the guarded artifact-tool export. It must pass before `--build-slice-2` is run in the spreadsheet runtime.

The Slice 3 manifest is:

```text
scripts/finance/payroll_starter_slice3_manifest.json
```

It records the revenue and stakeholder-view implementation scope:

- `06_Pricing`;
- `07_Revenue`;
- `10_Rural_Bank_View`;
- `11_ODTI_View`;
- `12_DevOps_View`;
- `13_SMS_Variant`;
- `14_Consolidated_View`;
- extended `21_Checks`.

The Slice 3 manifest also records canonical parity samples for Conservative, Base, and Accelerated Year 1 and Year 5 outputs. These samples cover core external revenue, Rural Bank core revenue, ODTI core revenue, DevOps revenue, consolidated core contribution, and SMS margin.

Slice 3 must consume the Slice 2 assumptions and activity engine. It must not independently recalculate adoption, activity, or `VOL-001`.

The Slice 3 export implementation manifest is:

```text
scripts/finance/payroll_starter_slice3_export_manifest.json
```

It records the concrete export scaffold for the first revenue and stakeholder-view workbook expansion:

- workbook dependencies on `02_Assumptions`, `04_Adoption`, `05_Payroll_Activity`, and `21_Checks`;
- worksheet anchors;
- formula responsibilities;
- canonical parity samples;
- visual QA targets.

Slice 3 export must not create an independent activity engine. It must consume the Slice 2 workbook outputs and keep Core Payroll separate from the optional SMS variant.

## Workbook Validation Plan

After workbook generation, validation must:

1. Open the workbook programmatically.
2. Confirm all required sheets exist.
3. Confirm formulas exist where expected.
4. Confirm no formulas contain invalid references.
5. Confirm assumption IDs are unique.
6. Confirm scenario values reconcile with the Provisional Input Register.
7. Confirm Base five-year figures match the Level 1 model.
8. Confirm parity rows match across Conservative, Base, and Accelerated.
9. Confirm entity revenue is not added into consolidated external revenue.
10. Confirm SMS is optional.
11. Confirm SMS margin uses collected revenue less wholesale provider cost.
12. Confirm blocked values remain visibly blocked.
13. Confirm payroll funding is excluded from revenue.
14. Confirm `21_Checks` has zero `ERROR` rows.
15. Confirm blocked checks are marked `Blocked`, not `ERROR`.
16. Confirm workbook opens without repair warnings where compatible spreadsheet validation is available.

The Slice 2 validation scaffold performs the first runtime checks:

- confirm the workbook can be opened through the selected workbook runtime;
- confirm all required Slice 2 sheets exist;
- scan for visible formula errors;
- preserve structural validation from `--dry-run` and `--slice-2-plan`.

Full visual render verification remains required once compatible spreadsheet rendering is available.

The Slice 3 `exceljs` workbook expansion currently performs formula-backed workbook checks for:

- pricing split integrity;
- customer-facing revenue counted once;
- stakeholder revenue non-additivity;
- Core Payroll exclusion of SMS;
- optional SMS margin using collected SMS revenue less wholesale provider cost;
- ODTI pre-tax, pre-royalty, NetBank-fee-blocked treatment;
- DevOps cloud-cost separation;
- Rural Bank contribution qualified by blocked `RB-002`;
- internal transfer elimination requirements;
- blocked tax, royalty, NetBank, investor, and partner items.

The Slice 3 workbook can be generated and validated with:

```text
npm run finance:payroll:build-slice-3
npm run finance:payroll:validate-slice-3
```

The generated Slice 3 workbook contains the Slice 2 engine plus:

- `06_Pricing`;
- `07_Revenue`;
- `10_Rural_Bank_View`;
- `11_ODTI_View`;
- `12_DevOps_View`;
- `13_SMS_Variant`;
- `14_Consolidated_View`;
- extended `21_Checks`.

The Slice 4 manifest is:

```text
scripts/finance/payroll_starter_slice4_manifest.json
```

It records the cost, operating-expense, management P&L, and cash-flow implementation scope:

- `08_Cost_of_Sales`;
- `09_Operating_Expenses`;
- `15_Profit_and_Loss`;
- `16_Cash_Flow`;
- extended `21_Checks`.

Slice 4 must preserve the distinction between economic recognition and cash timing. It may present management P&L views, but it must not imply formal GAAP/PFRS statements. It must also keep these outputs blocked unless later governed assumptions support them:

- Rural Bank true incremental net contribution after `RB-002`;
- tax-adjusted net income;
- post-royalty ODTI contribution;
- NetBank-fee-adjusted results;
- full balance sheet;
- ending cash;
- working-capital roll-forward;
- NPV and IRR.

Slice 4 must not treat blocked costs or timing inputs as zero. `COL-001` remains the governing cash-timing dependency for employer collection, downstream payment timing, and working-capital presentation.

The Slice 4 `exceljs` workbook expansion can be generated and validated with:

```text
npm run finance:payroll:build-slice-4
npm run finance:payroll:validate-slice-4
```

The generated Slice 4 workbook contains the Slice 2 and Slice 3 sheets plus:

- `08_Cost_of_Sales`;
- `09_Operating_Expenses`;
- `15_Profit_and_Loss`;
- `16_Cash_Flow`;
- extended `21_Checks`.

The Slice 5 manifest is:

```text
scripts/finance/payroll_starter_slice5_manifest.json
```

It records the capital-budgeting and sensitivity implementation scope:

- `17_Capital_Budgeting`;
- `18_Sensitivity`;
- extended `21_Checks`.

Slice 5 must not convert provisional operating contribution into investment returns unless the required cash-flow prerequisites exist. In particular:

- NPV must use cash flows, not revenue or accounting contribution;
- IRR must be blocked or marked `Not meaningful` unless the cash-flow series contains at least one negative and one positive cash flow;
- discounted payback requires a governed discount rate;
- terminal value remains disabled by default;
- discount-rate sensitivity remains blocked while canonical `FIN-001` has no approved value and governed cash-flow basis.

The Slice 5 sensitivity layer may define formula-based operating sensitivities using existing drivers such as `ADP-002`, `CUS-001`, `EMP-002`, `PRC-001`, `RB-001`, `ODTI-001`, and `OPS-003`. It must not paste static sensitivity outputs or introduce new assumptions.

The Slice 5 `exceljs` workbook expansion can be generated and validated with:

```text
npm run finance:payroll:build-slice-5
npm run finance:payroll:validate-slice-5
```

The Slice 6 manifest is:

```text
scripts/finance/payroll_starter_slice6_manifest.json
```

It records the scenario comparison, dashboard, final checks, and source-lineage implementation scope:

- `19_Scenarios`;
- `20_Dashboard`;
- final `21_Checks`;
- `22_Source_Lineage`.

Slice 6 is the presentation and audit layer. It must consume model outputs from earlier sheets and must not create independent calculations. The dashboard must surface:

- selected scenario;
- active banks;
- active employers;
- annual successful payroll transactions;
- consolidated Core external revenue;
- consolidated Core contribution before blocked items;
- Rural Bank contribution before internal bank payroll-support cost;
- ODTI pre-tax, pre-royalty, NetBank-fee-blocked contribution;
- DevOps contribution;
- optional SMS increment;
- full-cost stand-alone stress result;
- blocked-input count;
- `ERROR` count.

The source-lineage sheet must identify the source document, assumption IDs, provisional input IDs, and decision records behind every material workbook output. It must never describe the workbook as the commercial source of truth.

The Slice 6 `exceljs` workbook expansion can be generated and validated with:

```text
npm run finance:payroll:build-slice-6
npm run finance:payroll:validate-slice-6
```

The Slice 7 manifest is:

```text
scripts/finance/payroll_starter_slice7_manifest.json
```

It records the final review and freeze gate:

- approved workbook runtime dependency confirmation;
- all manifest parity checks;
- workbook generation only through the approved workbook builder;
- workbook structural validation;
- canonical parity review against the Markdown Level 1 model;
- visual QA of rendered sheets or representative ranges;
- review ZIP in `~/Downloads`;
- freeze boundary before commit.

Slice 7 does not add workbook calculations. It decides whether the generated workbook is reviewable, traceable, visually legible, and separated cleanly from future commercial-documentation edits.

The Slice 7 review workbook can be generated and validated with:

```text
npm run finance:payroll:build-slice-7
npm run finance:payroll:validate-slice-7
```

In the repo-local `exceljs` fallback, visual QA is structural unless a compatible rendering runtime is available. The freeze validation still checks workbook presence, sheet coverage, formula-reference text, canonical parity, dashboard status, lineage coverage, blocked-output visibility, and review ZIP packaging.

## Slice Plan

| Slice | Scope | Output |
| --- | --- | --- |
| 1 | Workbook specification | This document. |
| 2 | Assumptions and activity engine | `00_Read_Me` through `05_Payroll_Activity`, plus checks. |
| 3 | Revenue and stakeholder views | `06_Pricing` through `14_Consolidated_View`. |
| 4 | P&L and cash flow | `08_Cost_of_Sales`, `09_Operating_Expenses`, `15_Profit_and_Loss`, `16_Cash_Flow`. |
| 5 | Capital budgeting | `17_Capital_Budgeting` and `18_Sensitivity`. |
| 6 | Dashboard and lineage | `19_Scenarios`, `20_Dashboard`, `21_Checks`, `22_Source_Lineage`. |
| 7 | Review and freeze | Runtime confirmation, workbook generation gate, parity review, visual QA, review ZIP, separate commit. |

The first `.xlsx` artifact is generated during the runtime-backed workbook-generation step after scaffold acceptance, beginning with:

```text
node scripts/finance/build_payroll_starter_model.mjs --build-slice-2 --output artifacts/x-commerce-payroll-starter-financial-model.xlsx
```

That command must fail fast if `@oai/artifact-tool` is unavailable. It must not fall back to `openpyxl`, `xlsxwriter`, Office automation, or a manually edited binary workbook.

When the artifact-tool runtime is unavailable, Decision 0004 permits this repo-local generation path:

```text
node scripts/finance/build_payroll_starter_model.mjs --exceljs-runtime-check
node scripts/finance/build_payroll_starter_model.mjs --build-slice-2-exceljs --output artifacts/x-commerce-payroll-starter-financial-model.xlsx
node scripts/finance/build_payroll_starter_model.mjs --validate-slice-2-exceljs --input artifacts/x-commerce-payroll-starter-financial-model.xlsx
```

The ExcelJS path does not change the commercial source of truth. It only changes the workbook-rendering implementation.

## Slice 1 Completion Criteria

This Slice 1 specification is complete when:

- the workbook tabs are defined;
- calculation sequence is defined;
- assumption-to-workbook mapping is defined;
- scenario controls are defined;
- P&L, cash-flow, NPV, IRR, and sensitivity governance are defined;
- blocked items are preserved;
- canonical parity requirements are stated;
- generation and validation approach are specified;
- no workbook is generated yet.

## Current Slice 1 Finding

No canonical-model inconsistency was identified while drafting this specification.

The main implementation constraint for Slice 2 is that the workbook must treat `VOL-001` as a derived value under component-derived volume mode and must not allow an independent aggregate volume input unless a later decision explicitly changes the method.
