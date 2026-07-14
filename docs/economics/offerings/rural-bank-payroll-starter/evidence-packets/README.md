# Payroll Starter Evidence Packets

These packets organize evidence-gathering work for `OFR-RB-PAYROLL-STARTER`.

They do not change assumption values, authorize provisional inputs, update the workbook, or create new projections. They define what evidence must be collected before the canonical model and generated workbook can be updated.

## Governance Rule

Evidence packets are intake and review artifacts.

The source-of-truth update path remains:

```text
Evidence packet
-> evidence provenance review
-> canonical assumption or provisional-input record update
-> workbook generator input update
-> workbook regeneration
-> validation and review ZIP
```

No workbook value may be changed directly from an evidence packet.

## Packet Index

| Packet | Purpose | Status |
| --- | --- | --- |
| [evidence-packet-001-core-model-inputs.md](evidence-packet-001-core-model-inputs.md) | First evidence packet for adoption, activity, employer pricing, ODTI cost, DevOps cost, cloud cost, and collection risk. | Scaffolded |
