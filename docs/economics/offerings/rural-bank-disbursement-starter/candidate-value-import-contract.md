# Disbursement Starter Candidate-Value Import Contract

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: import contract scaffold.

No values are entered or authorized by this document.

This contract defines how Conservative, Base, and Accelerated management candidates should be converted into workbook-ready provisional inputs after review.

## Purpose

The structural workbook can already be generated, but the populated workbook must not receive values directly from Excel.

Candidate values must flow through:

```text
provisional-input-candidate-pack.md
    ->
provisional-input-register-level-1.md
    ->
offering-economics-level-1.md
    ->
formula-backed workbook
```

This contract defines the fields required for that flow.

## Candidate Value Record

Every candidate value prepared for review must include:

| Field | Required? | Notes |
| --- | --- | --- |
| Assumption ID | Yes | Must be a canonical assumption ID. |
| Assumption name | Yes | Must match the Assumptions Register meaning. |
| Assumption role | Yes | `Primitive input`, `Derived input`, or `Validation-only input`. |
| Scenario | Yes | `Conservative`, `Base`, or `Accelerated`. |
| Candidate value | Yes, unless blocked | Use `Open` only when no candidate is being proposed. |
| Unit | Yes | Must match or refine the canonical unit. |
| Range interpretation | Yes | Must distinguish scenario design from observed range or negotiation range. |
| Proposed treatment | Yes | Candidate classification from the candidate pack. |
| Source | Yes | For this stage usually `Internal architecture and management scenario design`. |
| Evidence status | Yes | Usually `Not evidence-supported`. |
| Authorization status | Yes | Must remain `Not authorized` until moved into the provisional input register. |
| Rationale | Yes | Explain why the candidate is commercially coherent. |
| Risk if wrong | Yes | Identify affected outputs and stakeholder risks. |
| Affected formulas | Yes | Must reference formula families, not generic model names. |
| Affected stakeholder views | Yes | Must name affected stakeholder views. |
| Recommended approval authority | Yes | Identifies who may approve future provisional use. |

## Scenario Value Matrix

The candidate pack is the human-readable source for proposed scenario values.

The future workbook-ready import matrix must preserve this shape:

| Assumption ID | Conservative | Base | Accelerated | Unit | Role | Treatment | Authorization status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `ADP-002` | Open | Open | Open | Active banks | Primitive input | Controlled-placeholder candidate | Not authorized |
| `ADP-003` | Open | Open | Open | Weighted active months | Primitive input | Controlled-placeholder candidate | Not authorized |
| `DSP-CUS-001` | Open | Open | Open | Active sponsors per active bank | Primitive input | Controlled-placeholder candidate | Not authorized |
| `DSP-CUS-002` | Open | Open | Open | Batches per active sponsor per month | Primitive input | Controlled-placeholder candidate | Not authorized |
| `DSP-CUS-003` | Open | Open | Open | Recipients per batch | Primitive input | Controlled-placeholder candidate | Not authorized |
| `DSP-VOL-002` | Open | Open | Open | Completion percentage | Primitive input | Controlled-placeholder candidate | Not authorized |
| `DSP-VOL-001` | Derived | Derived | Derived | Successful disbursements per active bank per month | Derived input | Not independently eligible | Not independently authorized |

## Derived Assumption Rule

`DSP-VOL-001` must not be imported as an independent value while the component-derived method is selected.

Required derivation:

```text
DSP-VOL-001
=
DSP-CUS-001
x DSP-CUS-002
x DSP-CUS-003
x DSP-VOL-002
```

Annual successful disbursements must then derive as:

```text
ADP-002
x ADP-003
x DSP-VOL-001
```

If management later chooses an independently controlled aggregate volume method, that change requires a documented model-method decision before any workbook import.

## Workbook Import Readiness Checks

Before any numeric workbook can consume values, confirm:

- every P0 primitive input has Conservative, Base, and Accelerated values or explicit blocked treatment;
- every value has a unit;
- every value has an authorization status;
- every derived input has component references;
- no blocked exclusion is populated as zero;
- no optional notification input is required for Core Disbursement;
- no Payroll Starter value is copied without a reuse decision;
- every value can be traced to a provisional input record.

## Provisional Input ID Assignment

Values must not enter the numeric workbook until the provisional input register assigns IDs.

Suggested pattern:

```text
DSP-PI-L1-001
DSP-PI-L1-002
DSP-PI-L1-003
```

The exact numbering should be assigned in [provisional-input-register-level-1.md](provisional-input-register-level-1.md), not inside the workbook.

## Import Failure Conditions

The numeric workbook generator must fail or remain blocked if:

- a required input is `Open`;
- a required input has no provisional input ID;
- a required input has no authorization status;
- `DSP-VOL-001` is independently populated under component-derived mode;
- a blocked value is silently converted to zero;
- pass-through funding is included in revenue;
- optional notification values are forced into Core Disbursement;
- NetBank, tax, royalty, financing, investor, or partner economics are populated without source records.

## Next Slice

Define the Level 1 calculation manifest that maps authorized inputs to canonical Markdown outputs and then to workbook tabs.

