# Disbursement Starter Provisional Authorization Packet

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: authorization packet scaffold.

Authorization status: Not authorized.

No provisional input IDs are issued by this document.

This packet prepares the authorization process for Level 1 Disbursement inputs after management candidates have been reviewed.

## Purpose

This packet should answer:

```text
Which reviewed candidate inputs are permitted to enter the first Level 1 Disbursement model, under what authority, with what warning, and with what expiry trigger?
```

The packet does not itself authorize values until completed and approved.

## Required Inputs Before Use

This packet may be completed only after:

- [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md) contains candidate values or explicit blocked treatments;
- [management-candidate-review-worksheet.md](management-candidate-review-worksheet.md) records review outcomes;
- [candidate-value-import-contract.md](candidate-value-import-contract.md) is satisfied;
- `DSP-VOL-001` remains derived under component-derived mode;
- blocked exclusions remain visible.

## Authorization Record Format

Each authorized or draft-authorized input must use this record shape.

```text
Provisional Input ID:
Assumption ID:
Assumption name:
Offering:
Input scope:
Assumption role:
Scenario values:
Unit:
Input classification:
Current assumption status:
Evidence status:
Authorization status:
Authorization basis:
Source:
Evidence limitation:
Rationale:
Risk if wrong:
Affected formulas:
Affected workbook sheets:
Affected stakeholder views:
Outputs blocked or qualified:
Permitted use:
Prohibited use:
Expiry or review trigger:
Approving reviewer:
Warning:
```

## Provisional Input ID Reservation Table

IDs should be issued only when values are approved or draft-approved for Level 1 internal modeling.

| Proposed ID | Assumption ID | Scope | Role | Current authorization status |
| --- | --- | --- | --- | --- |
| `DSP-PI-L1-001` | `ADP-002` | Core Disbursement | Primitive input | Reserved only; not issued |
| `DSP-PI-L1-002` | `ADP-003` | Core Disbursement | Primitive input | Reserved only; not issued |
| `DSP-PI-L1-003` | `DSP-CUS-001` | Core Disbursement | Primitive input | Reserved only; not issued |
| `DSP-PI-L1-004` | `DSP-CUS-002` | Core Disbursement | Primitive input | Reserved only; not issued |
| `DSP-PI-L1-005` | `DSP-CUS-003` | Core Disbursement | Primitive input | Reserved only; not issued |
| `DSP-PI-L1-006` | `DSP-VOL-002` | Core Disbursement | Primitive input | Reserved only; not issued |
| `DSP-PI-L1-007` | `DSP-VOL-001` | Core Disbursement | Derived input | Derived only; not independently issued |
| `DSP-PI-L1-008` | `DSP-PRICE-001` | Core Disbursement | Primitive pricing input | Reserved only; not issued |
| `DSP-PI-L1-009` | `DSP-PRICE-002` | Core Disbursement | Primitive pricing input | Reserved only; not issued |
| `DSP-PI-L1-010` | `DSP-PRICE-003` | Core Disbursement | Primitive pricing input | Reserved only; not issued |
| `DSP-PI-L1-011` | `DSP-RB-001` | Core Disbursement | Primitive allocation input | Reserved only; not issued |
| `DSP-PI-L1-012` | `DSP-ODTI-001` | Core Disbursement | Primitive cost input | Reserved only; not issued |
| `DSP-PI-L1-013` | `DSP-ODTI-002` | Core Disbursement | Primitive cost input | Reserved only; not issued |
| `DSP-PI-L1-014` | `OPS-003` | Shared operations | Primitive cost input | Reserved only; not issued |
| `DSP-PI-L1-015` | `CLD-001` | Shared infrastructure | Primitive cost input | Reserved only; not issued |
| `DSP-PI-L1-016` | `RISK-002` | Core Disbursement | Primitive risk input | Reserved only; not issued |
| `DSP-PI-L1-017` | `DSP-ATT-001` | Optional notification | Primitive optional input | Reserved only; not issued |
| `DSP-PI-L1-018` | `DSP-VAS-001` | Optional notification | Primitive optional price input | Reserved only; not issued |
| `DSP-PI-L1-019` | `DSP-CST-001` | Optional notification | Primitive provider-price input | Reserved only; not issued |
| `DSP-PI-L1-020` | `SMS-001` | Optional notification | Primitive performance input | Reserved only; not issued |

## Standard Warning

Every authorized provisional input must carry:

> This input is provisional and is used only to test commercial-model structure, scenario behavior, affordability, or sensitivity. It is not an approved price, provider quote, institutional commitment, contract, factual operating result, budget, forecast, investment representation, or public claim.

## Draft Authorization Status

Allowed authorization statuses:

| Status | Meaning |
| --- | --- |
| Not authorized | May not be used in the Level 1 numeric model. |
| Draft internal authorization | May be used only in a clearly labeled draft internal Level 1 model. |
| Approved for Level 1 internal modeling only | May be used in the controlled placeholder model with warnings. |
| Sensitivity only | May be used only in sensitivity tables, not headline cases. |
| Blocked | Must not be populated. |

## Blocking Rules

The packet must not authorize:

- `DSP-VOL-001` as an independent input under component-derived mode;
- pass-through disbursement funding as revenue;
- NetBank fees without `NET-001`;
- tax-adjusted outputs without `TAX-001`;
- 3neti royalty outputs without `ROY-001`;
- NPV, IRR, or investor return outputs without `FIN-001` and cash-flow basis;
- business-development partner allocations.

## Workbook Handoff

After completion, this packet should be transcribed into:

- [provisional-input-register-level-1.md](provisional-input-register-level-1.md);
- [offering-economics-level-1.md](offering-economics-level-1.md);
- the future workbook `02_Assumptions` and `22_Source_Lineage` sheets.

The workbook must not consume this packet directly if the provisional input register is incomplete.

## Next Slice

Prepare the Level 1 model population plan that maps authorized provisional inputs to Markdown output tables and workbook parity rows.

