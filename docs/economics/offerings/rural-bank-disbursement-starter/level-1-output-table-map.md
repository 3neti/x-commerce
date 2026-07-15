# Disbursement Starter Level 1 Output Table Map

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: output table map scaffold.

No numeric outputs are created by this document.

This map defines the tables that [offering-economics-level-1.md](offering-economics-level-1.md) must eventually contain before the formula-backed `.xlsx` workbook can be generated.

## Purpose

The populated Level 1 Markdown model must be the canonical numeric source.

This map answers:

```text
Which Level 1 output tables must exist, and which workbook sheets consume them?
```

## Required Table Families

| Table family | Required table | Scenario coverage | Year coverage | Workbook consumer |
| --- | --- | --- | --- | --- |
| Input summary | Authorized provisional inputs | Conservative, Base, Accelerated | Not applicable | `02_Assumptions`, `22_Source_Lineage` |
| Adoption | Bank adoption and active months | Conservative, Base, Accelerated | Year 1-5 | `04_Adoption`, `19_Scenarios` |
| Sponsor relationships | Active sponsors and newly onboarded sponsor relationships | Conservative, Base, Accelerated | Year 1-5 | `04_Adoption`, `07_Revenue` |
| Activity | Component-derived successful disbursements | Conservative, Base, Accelerated | Year 1-5 | `05_Disbursement_Activity` |
| Pricing | Sponsor-facing prices and stakeholder splits | Conservative, Base, Accelerated | Not applicable or Year 1-5 if varied | `06_Pricing` |
| Core revenue | Sponsor onboarding, service, and recipient-disbursement revenue | Conservative, Base, Accelerated | Year 1-5 | `07_Revenue` |
| Rural Bank | Rural Bank revenue and qualified contribution | Conservative, Base, Accelerated | Year 1-5 | `10_Rural_Bank_View` |
| ODTI | ODTI revenue, costs, and qualified contribution | Conservative, Base, Accelerated | Year 1-5 | `11_ODTI_View` |
| DevOps | DevOps revenue, direct cost, contribution, and capacity notes | Conservative, Base, Accelerated | Year 1-5 | `12_DevOps_View` |
| Optional notification | Notification attachment, revenue, provider cost, and margin | Conservative, Base, Accelerated | Year 1-5 | `13_Notification_Variant` |
| Consolidated | External inflows, external outflows, internal eliminations, pass-through, blocked exclusions | Conservative, Base, Accelerated | Year 1-5 | `14_Consolidated_View` |
| P&L shell | Management P&L view and blocked accounting outputs | Conservative, Base, Accelerated | Year 1-5 | `15_Profit_and_Loss` |
| Cash-flow shell | Cash-flow rows and timing blockers | Conservative, Base, Accelerated | Year 1-5 | `16_Cash_Flow` |
| Capital budgeting | NPV, IRR, payback blocked or calculated where governed | Scenario-specific | Year 1-5 where applicable | `17_Capital_Budgeting` |
| Parity | Canonical-to-workbook parity rows | Selected samples | Selected years | `21_Checks`, `22_Source_Lineage` |

## Minimum Table Headers

For five-year tables, use this shape unless the table has a specific reason to differ:

```text
Line item | Assumption IDs | Provisional Input IDs | Conservative Y1 | Conservative Y2 | Conservative Y3 | Conservative Y4 | Conservative Y5 | Base Y1 | Base Y2 | Base Y3 | Base Y4 | Base Y5 | Accelerated Y1 | Accelerated Y2 | Accelerated Y3 | Accelerated Y4 | Accelerated Y5 | Notes
```

For scenario-only inputs:

```text
Assumption ID | Provisional Input ID | Unit | Conservative | Base | Accelerated | Source | Authorization status | Notes
```

## Mandatory Output Labels

Use these exact labels in Level 1 output tables:

- `Core Disbursement External Revenue`;
- `Optional Notification Increment`;
- `Core Disbursement + Notification Variant`;
- `Rural Bank Contribution Before Internal Bank Disbursement-Support Cost`;
- `ODTI Contribution: Pre-Tax, Pre-Royalty, NetBank-Fee-Blocked`;
- `DevOps Contribution Before Tax And Overhead`;
- `Consolidated External Revenue`;
- `Consolidated Contribution Before Blocked Items`;
- `Pass-Through Disbursement Funding`;
- `Blocked Exclusions`.

## Parity Sample Rows

The first populated Level 1 model must include these parity rows:

| Parity output | Scenario | Year | Required source |
| --- | --- | --- | --- |
| Active banks | Conservative | Year 1 | Adoption table |
| Active banks | Base | Year 5 | Adoption table |
| Active sponsors | Base | Year 5 | Sponsor relationship table |
| `DSP-VOL-001` | Base | Not applicable | Activity table |
| Annual successful disbursements | Base | Year 5 | Activity table |
| Core external revenue | Base | Year 5 | Core revenue table |
| Rural Bank qualified contribution | Base | Year 5 | Rural Bank table |
| ODTI qualified contribution | Base | Year 5 | ODTI table |
| DevOps contribution | Base | Year 5 | DevOps table |
| Consolidated contribution before blocked items | Base | Year 5 | Consolidated table |

## Blocked Output Presentation

Blocked outputs must appear as text, not zero:

```text
Blocked
```

or:

```text
Excluded from initial Level 1 model
```

Required blocked lines:

- true Rural Bank net contribution after `DSP-RB-002`;
- NetBank-fee-adjusted results;
- tax-adjusted results;
- 3neti royalty-adjusted results;
- NPV and IRR where `FIN-001` and cash-flow basis are missing;
- investor returns;
- business-development partner allocations.

## Workbook Handoff Rule

The workbook generator may consume the Level 1 Markdown model only after:

- every mandatory output table exists;
- every numeric row cites assumption IDs and provisional input IDs;
- every derived row cites formulas;
- blocked rows are text-blocked;
- parity rows are present.

## Next Step

Use this map when populating [offering-economics-level-1.md](offering-economics-level-1.md), then update [workbook-parity-validation.md](workbook-parity-validation.md) with the resulting parity values.

