# Provisional Input Register Level 1: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Authorization status: Not authorized.

No values are authorized in this document.

This register will eventually record the controlled placeholder inputs used for the first numeric Disbursement Starter model. It does not create projections, update assumptions, or approve pricing.

## Standard Warning

> This register may contain provisional inputs used only to test commercial-model structure, scenario behavior, affordability, or sensitivity. Provisional inputs are not approved prices, provider quotes, institutional commitments, contracts, factual operating results, budgets, or forecasts unless explicitly stated otherwise.

## Model Context

| Field | Current scaffold value |
| --- | --- |
| Offering | `OFR-RB-DISBURSEMENT-STARTER` |
| Model version | Level 1, future |
| Model status | Not yet authorized |
| Scenario set | Conservative, Base, Accelerated, future |
| Volume method | Component-derived by default |
| Projection status | Not created |
| Workbook status | Not created |

## Volume Method

Preferred formula:

```text
DSP-CUS-001
x DSP-CUS-002
x DSP-CUS-003
x DSP-VOL-002
= DSP-VOL-001
```

`DSP-VOL-001` must not receive an independent provisional value while component-derived volume is selected.

## Provisional Input Record Template

| Field | Description |
| --- | --- |
| Provisional Input ID | Unique record ID, to be issued later. |
| Assumption ID | Canonical assumption ID. |
| Assumption role | Primitive input, derived input, or validation-only input. |
| Scenario values | Conservative, Base, and Accelerated values if approved. |
| Unit | Approved unit. |
| Input classification | Active working assumption, controlled placeholder, sensitivity-only input, or evidence-supported provisional input. |
| Source | Evidence, management rationale, provider quote, or decision record. |
| Evidence limitation | Why the value remains provisional. |
| Approval | Reviewer and status. |
| Expiry or review trigger | When the input must be replaced or reapproved. |
| Affected outputs | Views and formulas affected. |
| Warning | Required warning for outputs using the input. |

## P0 Register Slots

| Provisional Input ID | Assumption ID | Assumption role | Scenario values | Unit | Input classification | Authorization status |
| --- | --- | --- | --- | --- | --- | --- |
| To be issued | `ADP-002` | Primitive input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `ADP-003` | Primitive input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `DSP-CUS-001` | Primitive input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `DSP-CUS-002` | Primitive input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `DSP-CUS-003` | Primitive input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `DSP-VOL-002` | Primitive input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `DSP-VOL-001` | Derived input | Calculated later only | Successful disbursements per active bank per month | Derived input | Not independently authorized |
| To be issued | `DSP-PRICE-001` | Primitive input | Not authorized | To be defined | Sensitivity-only or controlled placeholder candidate | Not authorized |
| To be issued | `DSP-PRICE-002` | Primitive input | Not authorized | To be defined | Sensitivity-only or controlled placeholder candidate | Not authorized |
| To be issued | `DSP-PRICE-003` | Primitive input | Not authorized | To be defined | Sensitivity-only or controlled placeholder candidate | Not authorized |
| To be issued | `DSP-RB-001` | Primitive allocation input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `DSP-ODTI-001` | Primitive cost input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `DSP-ODTI-002` | Primitive cost input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `OPS-003` | Primitive cost input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `CLD-001` | Primitive cost input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |
| To be issued | `RISK-002` | Primitive risk input | Not authorized | To be defined | Controlled placeholder candidate | Not authorized |

## Blocked Exclusions

| Assumption ID | Treatment | Reason |
| --- | --- | --- |
| `TAX-001` | Blocked | Tax review required. |
| `ROY-001` | Blocked | Royalty or license decision required. |
| `NET-001` | Blocked | NetBank or rail role and fee basis required. |
| `NET-002` | Blocked | NetBank internal cost evidence required if modeled. |
| `DSP-RB-002` | Blocked | Rural Bank internal support cost evidence required. |
| `FIN-001` | Blocked | Discount rate and capital-budgeting assumption not governed. |

## Authorization Gate

No Level 1 Disbursement model may be calculated until:

1. P0 inputs have authorized values or explicitly approved exclusions;
2. derived-volume method is selected;
3. placeholder warnings are attached;
4. blocked outputs are visible;
5. no value is silently inferred from Payroll Starter.

## Next Slice

Produce the first Level 1 numeric offering economics only after this register is completed and authorized.

