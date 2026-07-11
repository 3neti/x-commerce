# Controlled-Placeholder Authorization Worksheet

## Purpose

Support Level 1 modeling by governing provisional inputs for `OFR-RB-PAYROLL-STARTER`.

This worksheet supports both:

- `Blocked` assumptions receiving controlled placeholders;
- `Active` working assumptions being used provisionally.

Use the shared provenance block in [README.md](README.md).

Do not fill values unless an authorized reviewer explicitly approves them.

## Model Context

```text
Offering:
Model version:
Scenario:
Purpose:
Permitted audience:
Permitted use:
Prohibited use:
```

## Provisional Input Register

Controlled `Input classification` values:

```text
Active working assumption
Controlled placeholder
Sensitivity-only input
Evidence-supported provisional input
```

Controlled `Assumption role` values:

```text
Primitive input
Derived input
Validation-only input
```

Derived canonical assumptions must not receive independent provisional values when their component assumptions are used to derive them in the same model.

The model must select one calculation mode. It may not use both simultaneously.

## Input Record

```text
Provisional Input ID:
Assumption ID:
Assumption name:
Current status:
Evidence status:
Input classification:
Assumption role:
Derivation formula:
Component assumption IDs:
Calculation method:
Alternative method considered:
Reason for selected method:
Validation assumption IDs:
Conflict-resolution rule:
Proposed value:
Unit:
Range interpretation:
Range period:
Range population:
Range exclusions:
Expected central value, if any:
Scenario:
Rationale:
Source:
Evidence limitations:
Risk if wrong:
Affected formulas:
Affected line items:
Affected stakeholder views:
Outputs blocked or qualified:
```

## Volume Method

Select exactly one method for each scenario set:

```text
Volume method:
- Component-derived
- Independently controlled aggregate
```

Preferred baseline:

```text
CUS-001
x CUS-002
x CUS-003
x VOL-002
= VOL-001
```

When `Component-derived` is selected, do not authorize `VOL-001` independently. Authorize or evidence `CUS-001`, `CUS-002`, `CUS-003`, and `VOL-002`, then record `VOL-001` as a derived value.

When `Independently controlled aggregate` is selected, `CUS-001`, `CUS-002`, `CUS-003`, and `VOL-002` may be used only for validation or sensitivity, not to drive the same volume calculation.

## Derived-Value Record

```text
Derived assumption ID:
Derived value:
Scenario:
Formula:
Component assumption IDs:
Component input versions:
Calculation date:
Model version:
Reviewer:
Validation result:
Status:
```

If a validation-only aggregate materially conflicts with the component-derived result, stop the model and record the discrepancy. Do not average the two values or select one silently.

## Authorization

```text
Prepared by:
Reviewed by:
Approved by:
Approval date:
Expiry date or review trigger:
Replacement evidence required:
Status:
```

## Standard Provisional Warning

Every provisional input and every output using one or more provisional inputs must include:

> This input is provisional and is used only to test commercial-model structure, scenario behavior, affordability, or sensitivity. It is not an approved price, provider quote, institutional commitment, contract, factual operating result, budget, or forecast unless explicitly stated otherwise.

## Output Conditions

Every output using a provisional input must:

- cite the Provisional Input ID;
- carry the standard provisional warning;
- state which outputs remain blocked;
- be labeled `Controlled Placeholder Model`;
- be labeled `Provisional`;
- be labeled `Non-Forecast`;
- be labeled `Not Investment-Grade`;
- be labeled `Not Contract-Grade`;
- not be used for contracts, public claims, regulatory filings, or investor commitments.

## P0 Coverage Checklist

Every P0 assumption must have one of:

- Approved input;
- evidence-supported Active input;
- authorized provisional input;
- explicit block preventing Level 1 use.

P0 assumptions requiring this worksheet if no better evidence exists:

- `ADP-001`;
- `ADP-002`;
- `ADP-003`;
- `CUS-001`;
- `CUS-002`;
- `CUS-003`;
- `VOL-001`;
- `VOL-002`;
- `LIC-004`;
- `LIC-005`;
- `PRC-001`;
- `RB-001`;
- `ODTI-001`;
- `ODTI-002`;
- `OPS-001`;
- `OPS-002`;
- `OPS-003`;
- `CLD-001`;
- `RISK-002`.

## Reviewer Notes

- Evidence quality:
- Known limitations:
- Follow-up required:
