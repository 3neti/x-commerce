# Public-Interest View: Rural Bank Digital Disbursement Starter

## Status

Current status: non-numeric stakeholder view.

Stakeholder: Regulator and public-interest perspective.

## Line Items

| Line-item ID | Line-item name | View type | Category | Formula | Input assumption IDs | Counterparty stakeholder | Counterparty line-item reference | Consolidation treatment | Commercial Event | Billable Event | Legal/accounting/tax dependency | Blocked inputs | Line-item readiness | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `OFR-RB-DISBURSEMENT-STARTER-PUBLIC-PI-001` | Disbursement completion and evidence indicator | Public-interest | Non-financial | Approved recipients receiving value with evidence | `DSP-VOL-002`, `PUB-001` | Sponsor | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-OUTCOME-001` | Non-financial | Successful recipient disbursement | Not applicable | Evidence, reporting, and legal characterization unresolved | `DSP-VOL-002`, `PUB-001` | Structurally Ready; value blocked | Tracks outcome reliability. |
| `OFR-RB-DISBURSEMENT-STARTER-PUBLIC-PI-002` | Recipient access and clarity indicator | Public-interest | Non-financial | Recipient access, message clarity, exception visibility | Missing recipient experience assumptions | Not applicable | Not applicable | Non-financial | Recipient receives or attempts to receive value | Not applicable | Privacy, disclosure, and messaging review unresolved | Missing recipient experience assumptions, `SMS-004` | Structurally Ready; value blocked | Do not monetize without assumptions. |
| `OFR-RB-DISBURSEMENT-STARTER-PUBLIC-PI-003` | Fund-flow and role clarity indicator | Public-interest | Non-financial | Sponsor funds, pass-through value, fees, and stakeholder roles separated | `NET-001`, `TAX-001` | NetBank | `OFR-RB-DISBURSEMENT-STARTER-NETBANK-MEMO-001` | Non-financial | Fund-flow role defined | Not applicable | Legal, regulatory, settlement, tax, and accounting unresolved | `NET-001`, `TAX-001` | Blocked | Prevents treating recipient value or settlement balances as revenue. |
| `OFR-RB-DISBURSEMENT-STARTER-PUBLIC-PI-004` | Operational accountability and replaceability indicator | Public-interest | Non-financial | Bank ownership, provider operation, handover, audit logs, incident handling | `OPS-003`, `CLD-001` | DevOps Provider | `OFR-RB-DISBURSEMENT-STARTER-DEVOPS-CAP-001` | Non-financial | Bank-owned deployment operated | Not applicable | Security, privacy, and operations review unresolved | `OPS-003`, `CLD-001` | Structurally Ready; value blocked | Preserves "provider operates; bank owns." |
| `OFR-RB-DISBURSEMENT-STARTER-PUBLIC-PI-005` | Governance fidelity indicator | Public-interest | Non-financial | Assumption traceability, reconciliation, blocked-output visibility | `PUB-001` | Investor | `OFR-RB-DISBURSEMENT-STARTER-INV-MEMO-002` | Non-financial | Model governance event | Not applicable | None for non-financial indicator | `PUB-001` | Structurally Ready; value blocked | Tracks whether the offering remains governable. |

