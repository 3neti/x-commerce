# Value-Added Provider View: Rural Bank Digital Disbursement Starter

## Status

Current status: non-numeric stakeholder view.

Stakeholder: Value-Added Provider for optional notification.

## Line Items

| Line-item ID | Line-item name | View type | Category | Formula | Input assumption IDs | Counterparty stakeholder | Counterparty line-item reference | Consolidation treatment | Commercial Event | Billable Event | Legal/accounting/tax dependency | Blocked inputs | Line-item readiness | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `OFR-RB-DISBURSEMENT-STARTER-VASP-VOL-001` | Qualifying notification activity | Activity | Non-financial | Successful or qualifying disbursements x attachment rate | `DSP-VOL-001`, `DSP-ATT-001` candidates | Not applicable | Not applicable | Non-financial | Notification attached to disbursement | Optional notification event | Consent, privacy, provider billing, and failed-message rules unresolved | `DSP-VOL-001`, `DSP-ATT-001`, `SMS-003`, `SMS-004` | Conditionally Ready; value blocked | Activity indicator, not revenue. |
| `OFR-RB-DISBURSEMENT-STARTER-VASP-REV-001` | Notification provider revenue | Financial | Revenue | Qualifying notification activity x wholesale provider price | `DSP-ATT-001`, `DSP-CST-001` candidates | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-005` | Internal elimination | Notification attached to disbursement | Optional notification event | Provider contract, billing, tax, privacy unresolved | `DSP-ATT-001`, `DSP-CST-001`, `SMS-003`, `SMS-004`, `TAX-001` | Conditionally Ready; value blocked | Mirrors Rural Bank notification provider obligation. |
| `OFR-RB-DISBURSEMENT-STARTER-VASP-COST-001` | Notification provider external delivery cost | Financial | External provider cost | Carrier, aggregator, routing, retry, or delivery cost | `SMS-002`, `SMS-003` | External carrier or aggregator | Not applicable | External outflow | Notification delivery attempted or completed | Provider cost unit, if approved | Provider internal cost and billing treatment unresolved | `SMS-002`, `SMS-003`, `TAX-001` | Conditionally Ready; value blocked | Applies only if provider internal or external cost is modeled. |
| `OFR-RB-DISBURSEMENT-STARTER-VASP-CONTRIB-001` | Notification provider margin view | Contribution | Derived reporting output | Provider revenue less delivery cost | `DSP-CST-001`, `SMS-002`, `TAX-001` | Not applicable | Not applicable | Non-financial | Aggregate notification events | Not applicable | Provider internal cost, tax, and accounting unresolved | `DSP-CST-001`, `SMS-002`, `TAX-001` | Blocked | Derived output; not a new inflow. |

