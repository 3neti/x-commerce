# Disbursement Starter Provisional Register Completion Checklist

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: completion checklist scaffold.

No provisional input IDs are issued by this document.

This checklist defines when [provisional-input-register-level-1.md](provisional-input-register-level-1.md) is ready to serve as the input source for the first Disbursement Level 1 model.

## Purpose

The provisional input register is the control point between reviewed management candidates and numeric modeling.

This checklist answers:

```text
What must be true before candidate values are allowed to drive Disbursement Level 1 calculations?
```

## Required Upstream Documents

The register should not be completed until these are available:

- populated [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md);
- completed [management-candidate-review-worksheet.md](management-candidate-review-worksheet.md);
- completed [provisional-authorization-packet.md](provisional-authorization-packet.md);
- satisfied [candidate-value-import-contract.md](candidate-value-import-contract.md).

## Register Completion Fields

Every authorized or draft-authorized row must include:

| Field | Required completion standard |
| --- | --- |
| Provisional Input ID | Issued using a stable `DSP-PI-L1-*` pattern. |
| Assumption ID | Canonical ID from the Assumptions Register. |
| Assumption name | Must match canonical meaning. |
| Assumption role | Primitive input, derived input, or validation-only input. |
| Scenario values | Conservative, Base, and Accelerated, or explicit blocked treatment. |
| Unit | Required; no unlabeled values. |
| Input classification | Controlled placeholder, active working assumption, evidence-supported provisional input, or sensitivity-only input. |
| Current assumption status | Must not silently override Assumptions Register status. |
| Evidence status | Must state whether evidence exists or value is not evidence-supported. |
| Authorization status | Must be one of the controlled authorization statuses. |
| Authorization basis | Management review, provider quote, evidence, or blocked decision. |
| Expiry or review trigger | Required for every provisional value. |
| Affected formulas | Must reference formula families. |
| Affected stakeholder views | Must name stakeholder views. |
| Warning | Required standard provisional warning. |

## Core Register Rows

The register is incomplete until each row below has either an authorization record or an explicit blocked/excluded treatment.

| Assumption ID | Required status before Level 1 | Notes |
| --- | --- | --- |
| `ADP-002` | Authorized or draft-authorized | Active banks. |
| `ADP-003` | Authorized or draft-authorized | Weighted active months. |
| `DSP-CUS-001` | Authorized or draft-authorized | Sponsors per active bank. |
| `DSP-CUS-002` | Authorized or draft-authorized | Batches per active sponsor. |
| `DSP-CUS-003` | Authorized or draft-authorized | Recipients per batch. |
| `DSP-VOL-002` | Authorized or draft-authorized | Completion rate with event definition. |
| `DSP-VOL-001` | Derived only | Must not have independent scenario values. |
| `DSP-PRICE-001` | Authorized, draft-authorized, or sensitivity-only | Sponsor onboarding fee. |
| `DSP-PRICE-002` | Authorized, draft-authorized, or sensitivity-only | Sponsor recurring service fee. |
| `DSP-PRICE-003` | Authorized, draft-authorized, or sensitivity-only | Recipient disbursement fee. |
| `DSP-RB-001` | Authorized or draft-authorized | Rural Bank retained economics. |
| `DSP-ODTI-001` | Authorized or draft-authorized | ODTI support cost. |
| `DSP-ODTI-002` | Authorized or draft-authorized | ODTI implementation cost. |
| `OPS-003` | Authorized, draft-authorized, or explicitly reused from governed source | DevOps direct cost. |
| `CLD-001` | Authorized, draft-authorized, or explicitly excluded from incremental view | Cloud cost. |
| `RISK-002` | Authorized or draft-authorized | Commercial-fee non-collection only. |

## Optional Notification Rows

Optional notification may remain excluded from the first Core Disbursement Level 1 model.

If included, complete:

| Assumption ID | Required status |
| --- | --- |
| `DSP-ATT-001` | Authorized or draft-authorized for optional variant only. |
| `DSP-VAS-001` | Authorized, draft-authorized, or sensitivity-only for optional variant only. |
| `DSP-CST-001` | Authorized, draft-authorized, or provider-quote pending with blocked treatment. |
| `SMS-001` | Authorized, draft-authorized, or excluded from provider-performance outputs. |
| `SMS-003` | Blocked unless provider billing terms exist. |
| `SMS-004` | Blocked unless legal/privacy review exists. |

## Blocked Items To Preserve

The register must visibly preserve:

```text
DSP-RB-002
NET-001
NET-002
TAX-001
ROY-001
FIN-001
Investor returns
Business-development partner allocations
```

Do not authorize management guesses for these without a separate decision.

## Register Completion Checks

Before Level 1 calculations begin:

- every workbook P0 value has a provisional input ID or blocked treatment;
- every value includes scenario, unit, source, limitation, reviewer, and expiry trigger;
- `DSP-VOL-001` is derived;
- optional notification is scoped separately;
- pass-through funding is excluded from revenue;
- no blocked value is represented as zero;
- no value exists only in the workbook.

## Failure Conditions

Stop the Level 1 build if:

- any P0 row remains `Open`;
- any numeric value lacks a provisional input ID;
- a row lacks authorization status;
- `DSP-VOL-001` receives independent scenario values;
- NetBank, tax, royalty, financing, investor, or partner outputs are populated without source authority.

## Next Step

After the register passes this checklist, populate [offering-economics-level-1.md](offering-economics-level-1.md) using [level-1-model-population-plan.md](level-1-model-population-plan.md).

