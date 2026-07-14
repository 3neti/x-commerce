# NetBank View: Rural Bank Digital Disbursement Starter

## Status

Current status: non-numeric stakeholder view.

Stakeholder: NetBank or approved infrastructure participant.

## Boundary Warning

NetBank is structurally included in the baseline model, but financial treatment is blocked.

Deposits are not revenue. Settlement balances are not revenue. Float is not assumed revenue. Sponsor-funded disbursement value and recipient value are not NetBank revenue. Gross transaction value is not NetBank revenue.

## Line Items

| Line-item ID | Line-item name | View type | Category | Formula | Input assumption IDs | Counterparty stakeholder | Counterparty line-item reference | Consolidation treatment | Commercial Event | Billable Event | Legal/accounting/tax dependency | Blocked inputs | Line-item readiness | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `OFR-RB-DISBURSEMENT-STARTER-NETBANK-VOL-001` | Candidate infrastructure transaction activity | Activity | Non-financial | Qualifying disbursement activity using NetBank, rail, API, account, or settlement services | `DSP-VOL-001`, `NET-001` | Not applicable | Not applicable | Non-financial | Infrastructure-supported disbursement | Not applicable | NetBank role and legal characterization unresolved | `DSP-VOL-001`, `NET-001` | Structurally Ready; value blocked | Activity indicator, not revenue. |
| `OFR-RB-DISBURSEMENT-STARTER-NETBANK-REV-001` | Candidate NetBank or infrastructure fee revenue | Financial | Revenue | Approved NetBank fee basis | `NET-001` | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-006` | Internal elimination | Infrastructure service used | Infrastructure service event, if approved | Regulated role, contract, settlement, tax, accounting unresolved | `NET-001`, `TAX-001` | Blocked | No revenue until fee basis is approved. |
| `OFR-RB-DISBURSEMENT-STARTER-NETBANK-COST-001` | Candidate NetBank service cost | Financial | Cost view | Cost of supporting approved infrastructure service | `NET-002` | Not applicable | Not applicable | Non-financial | Infrastructure service used | Not applicable | Internal cost, accounting, and allocation unresolved | `NET-002` | Blocked | Internal operating-cost view. |
| `OFR-RB-DISBURSEMENT-STARTER-NETBANK-MEMO-001` | Legal characterization dependency | Memo | Non-financial | Role, account, rail, API, settlement, custody, or payment characterization | `NET-001` | Public Interest | `OFR-RB-DISBURSEMENT-STARTER-PUBLIC-PI-003` | Non-financial | Infrastructure role defined | Not applicable | x-legal, regulatory, privacy, settlement, and contract review required | `NET-001` | Blocked | Controls whether and how NetBank appears financially. |

