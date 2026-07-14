# Reconciliation Schedule: Rural Bank Digital Disbursement Starter

## Status

Current status: non-numeric reconciliation schedule.

No amounts are modeled. Each relationship identifies exact line-item references so later numeric models can reconcile counterparties without ambiguity.

## Reconciliation Pairs

| Reconciliation ID | Source stakeholder | Source line-item ID | Destination stakeholder | Destination line-item ID | Commercial basis | Consolidation treatment | Timing difference | Tax or withholding difference | Blocked assumption IDs | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DSP-REC-001 | Sponsor | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-PASS-001` | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-PASS-001` | Sponsor-funded disbursement value. | Pass-through | Funding and settlement timing unresolved. | Tax treatment not applied to pass-through unless legal review says otherwise. | `DSP-FUND-001`, `NET-001` | Structurally Ready; value blocked | Disbursement value is not revenue. |
| DSP-REC-002 | Sponsor | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-COST-001` | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-REV-001` | Sponsor onboarding fee. | External inflow | Billing and collection timing unresolved. | `TAX-001` | `DSP-PRICE-001`, `RISK-002`, `TAX-001` | Structurally Ready; value blocked | Customer-facing fee enters ecosystem once. |
| DSP-REC-003 | Sponsor | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-COST-002` | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-REV-002` | Sponsor monthly or program-service fee. | External inflow | Billing and collection timing unresolved. | `TAX-001` | `DSP-PRICE-002`, `RISK-002`, `TAX-001` | Structurally Ready; value blocked | Recurring service fee enters ecosystem once. |
| DSP-REC-004 | Sponsor | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-COST-003` | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-REV-003` | Per-successful-recipient-disbursement fee. | External inflow | Billing and collection timing unresolved. | `TAX-001` | `DSP-PRICE-003`, `DSP-VOL-001`, `RISK-002`, `TAX-001` | Structurally Ready; value blocked | Recipient value remains pass-through; fee is separate. |
| DSP-REC-005 | Sponsor | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-COST-004` | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-REV-004` | Optional notification fee. | External inflow | Billing and collection timing unresolved. | `TAX-001` | `DSP-ATT-001`, `DSP-VAS-001`, `RISK-002`, `TAX-001` | Conditionally Ready; value blocked | Applies only when notification is selected. |
| DSP-REC-006 | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-001` | ODTI | `OFR-RB-DISBURSEMENT-STARTER-ODTI-REV-001` | ODTI share of sponsor onboarding or implementation economics. | Internal elimination | Payment timing unresolved. | `TAX-001` | `DSP-PRICE-001`, `RISK-002`, `TAX-001` | Structurally Ready; value blocked | Exact split must be approved later. |
| DSP-REC-007 | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-002` | ODTI | `OFR-RB-DISBURSEMENT-STARTER-ODTI-REV-002` | ODTI share of sponsor monthly or program-service economics. | Internal elimination | Payment timing unresolved. | `TAX-001` | `DSP-PRICE-002`, `RISK-002`, `TAX-001` | Structurally Ready; value blocked | Exact split must be approved later. |
| DSP-REC-008 | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-003` | ODTI | `OFR-RB-DISBURSEMENT-STARTER-ODTI-REV-003` | ODTI transaction-platform amount after Rural Bank retained economics. | Internal elimination | Payment timing unresolved. | `TAX-001` | `DSP-PRICE-003`, `DSP-RB-001`, `DSP-VOL-001`, `TAX-001` | Structurally Ready; value blocked | Rural-bank retained amount is derived, not a second inflow. |
| DSP-REC-009 | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-004` | DevOps Provider | `OFR-RB-DISBURSEMENT-STARTER-DEVOPS-REV-001` | DevOps managed operations fee or allocated setup fee. | Internal elimination | Billing timing unresolved. | `TAX-001` | `OPS-001`, `OPS-002`, `OPS-003`, `CLD-001`, `TAX-001` | Conditionally Ready; value blocked | Applies where Disbursement bears shared or incremental DevOps cost. |
| DSP-REC-010 | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-005` | Value-Added Provider | `OFR-RB-DISBURSEMENT-STARTER-VASP-REV-001` | Wholesale notification provider charge. | Internal elimination | Provider billing timing unresolved. | `TAX-001` | `DSP-ATT-001`, `DSP-CST-001`, `SMS-003`, `TAX-001` | Conditionally Ready; value blocked | Baseline includes VASP inside modeled boundary. External carrier cost remains separate. |
| DSP-REC-011 | Rural Bank | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-006` | NetBank | `OFR-RB-DISBURSEMENT-STARTER-NETBANK-REV-001` | NetBank, rail, API, settlement, or account-service fee. | Internal elimination | Settlement and billing timing unresolved. | `TAX-001` | `NET-001`, `TAX-001` | Blocked | No NetBank revenue until role and fee basis are approved. |
| DSP-REC-012 | ODTI | `OFR-RB-DISBURSEMENT-STARTER-ODTI-COST-001` | 3neti | `OFR-RB-DISBURSEMENT-STARTER-3NETI-REV-001` | 3neti royalty or license consideration. | Internal elimination | Royalty payment timing unresolved. | `TAX-001` | `ROY-001`, `TAX-001` | Blocked | No 3neti revenue until royalty basis is approved. |
| DSP-REC-013 | Value-Added Provider | `OFR-RB-DISBURSEMENT-STARTER-VASP-COST-001` | External provider | Not modeled as stakeholder line | External carrier, aggregator, or message-delivery cost. | External outflow | Provider settlement timing unresolved. | `TAX-001` | `SMS-002`, `SMS-003`, `TAX-001` | Conditionally Ready; value blocked | Only applicable if provider internal/external cost is modeled. |

## Non-Mirrored Derived Lines

Derived contribution, retained economics, margin, readiness, public-interest, investor, and indicator lines do not require counterparty references unless they represent a real transfer or obligation. They are reporting outputs and must not be aggregated as new money flows.

