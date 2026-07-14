# Level 1 Normalization Plan: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

This plan defines the normalization pass that must occur after the first numeric Level 1 Disbursement model is created. It does not create numbers or modify the current non-numeric model.

## Purpose

The normalization pass should make numeric outputs safe to read by distinguishing:

- Core Disbursement economics;
- optional notification economics;
- entity-level stakeholder revenue;
- consolidated external revenue;
- newly onboarded sponsor relationships;
- active sponsors;
- Rural Bank retained revenue;
- Rural Bank contribution before internal support cost;
- modernization costs versus incremental offering costs.

## Required Corrections To Check

### Core Versus Optional Notification

Primary headline tables must exclude optional notification.

Required layers:

```text
Core Disbursement
Optional Notification Increment
Core Disbursement + Notification Variant
```

### Non-Additive Stakeholder Revenue Warning

Every stakeholder revenue summary must state:

> Stakeholder revenue figures are entity-level views and include internal ecosystem transfers. They are not additive. Consolidated External Revenue counts external customer inflows once and eliminates internal transfers.

### Sponsor Onboarding Versus Active Sponsors

Use separate labels:

- Newly Onboarded Sponsor Relationships;
- Active Sponsors.

Onboarding fees use newly onboarded sponsor relationships. Recurring service fees and transaction activity use active sponsors.

### Rural Bank Contribution Label

Use the full label:

```text
Rural Bank Contribution Before Internal Bank Disbursement-Support Cost
```

until `DSP-RB-002` is evidenced or provisionally authorized.

### Pass-Through Control

Sponsor-funded disbursement value must remain pass-through and excluded from revenue, cost of sales, and operating contribution.

### Blocked Output Visibility

Keep these visible:

- `DSP-RB-002`;
- `NET-001`;
- `NET-002`;
- `TAX-001`;
- `ROY-001`;
- `FIN-001`;
- legal characterization;
- accounting treatment.

## Internal Elimination Checks

Verify:

1. sponsor commercial fees are counted once as external inflows;
2. sponsor-funded disbursement value is pass-through;
3. Rural Bank-to-ODTI transfers eliminate;
4. Rural Bank-to-DevOps transfers eliminate;
5. Rural Bank-to-Value-Added Provider transfers eliminate when the provider is inside the boundary;
6. ODTI-to-3neti royalty eliminates when included;
7. NetBank fees remain blocked until evidenced;
8. external cloud and carrier costs remain external outflows;
9. derived margins and contributions are not aggregated as new money flows.

## Arithmetic And Reconciliation Checks

Future numeric model must verify:

- `DSP-VOL-001` derives from component assumptions;
- annual successful disbursements derive from active banks, active months, and `DSP-VOL-001`;
- Rural Bank retained economics do not exceed the sponsor-facing recipient disbursement fee;
- ODTI transaction-platform amount is non-negative;
- notification margin applies non-collection correctly if provider cost remains payable;
- consolidated external revenue matches sponsor commercial fees only;
- pass-through funding value is excluded from revenue.

## Next Slice

Create the stakeholder-facing five-year summary only after numeric Level 1 outputs have been normalized.

