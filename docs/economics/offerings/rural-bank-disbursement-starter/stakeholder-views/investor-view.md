# Investor View: Rural Bank Digital Disbursement Starter

## Status

Current status: non-numeric stakeholder view.

Stakeholder: Investor or financing perspective.

## Line Items

| Line-item ID | Line-item name | View type | Category | Formula | Input assumption IDs | Counterparty stakeholder | Counterparty line-item reference | Consolidation treatment | Commercial Event | Billable Event | Legal/accounting/tax dependency | Blocked inputs | Line-item readiness | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `OFR-RB-DISBURSEMENT-STARTER-INV-FIN-001` | Capital requirement view | Financing | Financing | Capital required for development, evidence acquisition, rollout, and operations | Missing financing assumptions | Not applicable | Not applicable | Financing | Program investment decision | Not applicable | Financing instrument, accounting, tax, and governance unresolved | Missing financing assumptions, `FIN-001` | Blocked | Investment flows are financing, not offering revenue. |
| `OFR-RB-DISBURSEMENT-STARTER-INV-MEMO-001` | Adoption and recurring relationship indicator | Indicator | Non-financial | Sponsors, active banks, successful disbursements, repeat usage | `ADP-002`, `DSP-CUS-001`, `DSP-VOL-001` candidates | Not applicable | Not applicable | Non-financial | Aggregate offering events | Not applicable | None for non-financial indicator | `ADP-002`, `DSP-CUS-001`, `DSP-VOL-001` | Structurally Ready; value blocked | Tracks commercial traction without treating it as investor revenue. |
| `OFR-RB-DISBURSEMENT-STARTER-INV-MEMO-002` | Governance and model confidence indicator | Indicator | Non-financial | Assumption readiness, evidence quality, reconciliation completeness | `PUB-001` | Public Interest | `OFR-RB-DISBURSEMENT-STARTER-PUBLIC-PI-005` | Non-financial | Model governance event | Not applicable | None for non-financial indicator | `PUB-001` | Structurally Ready; value blocked | Investor should see traceability, not unsupported forecasts. |

