# 3neti View: Rural Bank Digital Disbursement Starter

## Status

Current status: non-numeric stakeholder view.

Stakeholder: 3neti.

## Line Items

| Line-item ID | Line-item name | View type | Category | Formula | Input assumption IDs | Counterparty stakeholder | Counterparty line-item reference | Consolidation treatment | Commercial Event | Billable Event | Legal/accounting/tax dependency | Blocked inputs | Line-item readiness | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `OFR-RB-DISBURSEMENT-STARTER-3NETI-REV-001` | 3neti royalty or license revenue | Financial | Revenue | Approved royalty or license basis | `ROY-001` | ODTI | `OFR-RB-DISBURSEMENT-STARTER-ODTI-COST-001` | Internal elimination | Royalty-triggering offering event, if approved | Commercial Waterfall or license event, if approved | Related-party, tax, accounting, royalty basis unresolved | `ROY-001`, `TAX-001` | Blocked | Mirrors ODTI royalty or license expense. |
| `OFR-RB-DISBURSEMENT-STARTER-3NETI-COST-001` | 3neti architecture and stewardship cost | Value and cost view | Operating cost view | Stewardship, documentation, architecture, and IP support effort | Missing 3neti cost assumptions | Not applicable | Not applicable | Non-financial | Offering architecture maintained | Not applicable | Accounting and allocation treatment unresolved | Missing 3neti stewardship assumptions | Structurally Ready; value blocked | Internal cost view; not an inter-stakeholder transfer. |
| `OFR-RB-DISBURSEMENT-STARTER-3NETI-CONTRIB-001` | 3neti contribution view | Contribution | Derived reporting output | 3neti royalty or license revenue less stewardship and IP costs | `ROY-001`, `TAX-001` | Not applicable | Not applicable | Non-financial | Aggregate offering events | Not applicable | Tax, accounting, and royalty treatment unresolved | `ROY-001`, `TAX-001` | Blocked | Derived output; no 3neti revenue while `ROY-001` is unresolved. |

