# DevOps Provider View: Rural Bank Digital Disbursement Starter

## Status

Current status: non-numeric stakeholder view.

Stakeholder: DevOps Provider.

## Line Items

| Line-item ID | Line-item name | View type | Category | Formula | Input assumption IDs | Counterparty stakeholder | Counterparty line-item reference | Consolidation treatment | Commercial Event | Billable Event | Legal/accounting/tax dependency | Blocked inputs | Line-item readiness | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `OFR-RB-DISBURSEMENT-STARTER-DEVOPS-REV-001` | DevOps managed operations revenue | Financial | Revenue | Approved DevOps setup, recurring, or allocation amount for Disbursement Starter | `OPS-001`, `OPS-002` | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-004` | Internal elimination | Bank-owned deployment supports offering | Managed operations period | Contract, tax, accounting, and shared-cost allocation unresolved | `OPS-001`, `OPS-002`, `TAX-001` | Conditionally Ready; value blocked | Applies only if Disbursement carries shared or incremental DevOps cost. |
| `OFR-RB-DISBURSEMENT-STARTER-DEVOPS-COST-001` | DevOps direct engineering and tooling cost | Financial | Cost view | Direct engineering, tooling, monitoring, backup, and support cost | `OPS-003` | Not applicable | Not applicable | Non-financial | Managed operations performed | Not applicable | Staffing, tooling, accounting, and tax treatment unresolved | `OPS-003`, `TAX-001` | Structurally Ready; value blocked | Excludes Rural Bank-owned cloud cost unless the provider bears it in a later variant. |
| `OFR-RB-DISBURSEMENT-STARTER-DEVOPS-CAP-001` | DevOps capacity and readiness indicator | Capacity | Non-financial | Banks, environments, incidents, support windows, and handover readiness | `OPS-003` | Public Interest | `OFR-RB-DISBURSEMENT-STARTER-PUBLIC-PI-004` | Non-financial | Bank-owned deployment operated | Not applicable | Security and operational scope unresolved | `OPS-003` | Structurally Ready; value blocked | Capability indicator, not revenue. |
| `OFR-RB-DISBURSEMENT-STARTER-DEVOPS-CONTRIB-001` | DevOps contribution view | Contribution | Derived reporting output | DevOps revenue less direct DevOps costs | `OPS-001`, `OPS-002`, `OPS-003`, `TAX-001` | Not applicable | Not applicable | Non-financial | Aggregate managed operations events | Not applicable | Tax, overhead, and accounting unresolved | `OPS-003`, `TAX-001` | Blocked | Derived output; excludes cloud under rural-bank-owned baseline. |

