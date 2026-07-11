# 3neti View: Rural Bank Payroll Starter

## Status

Current status: instantiated non-numeric 3neti view.

Stakeholder: 3neti Research and Development OPC.

Baseline role: IP owner, technology steward, and reusable commercial-architecture steward.

## Boundary Reminder

3neti owns and develops the intellectual property. ODTI operates the commercial program. This view must not collapse those roles.

## Line Items

### License Consideration Or Royalty Revenue

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-3NETI-REV-001
Line-item name: License consideration or royalty revenue
Stakeholder: 3neti
View type: Revenue
Category: License or royalty consideration
Description: Possible 3neti revenue from ODTI for use of 3neti IP in the offering.
Formula: Approved royalty or license basis
Input assumption IDs: ROY-001, COL-001, TAX-001
Scenario behavior: Follows approved royalty basis, if any.
Year applicability: Years 1-5
Recognition trigger: Royalty or license right earned under approved 3neti-ODTI agreement.
Payment trigger: Invoice, payable date, settlement event, or approved payment terms.
Cash timing: Accrual, invoice, payable, and payment timing unresolved.
Counterparty stakeholder: ODTI
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-ODTI-COST-001
Reconciliation basis: REC-011
Consolidation treatment: Internal elimination
Commercial Event: Offering uses 3neti IP in approved commercial activity
Billable Event: Unresolved
Commercial Right: 3neti commercial right, if approved.
Commercial Attribution: 3neti IP ownership and technology stewardship.
Commercial Waterfall reference: Potentially applicable if royalty is structured through waterfall.
Legal or accounting dependency: 3neti-ODTI license agreement, related-party review, revenue recognition, withholding.
Tax dependency: TAX-001
Blocked inputs: ROY-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: 3neti revenue view, ODTI cost view, consolidated internal elimination.
Notes: Do not infer a royalty percentage from ODTI revenue.
```

### R&D Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-3NETI-COST-001
Line-item name: R&D cost
Stakeholder: 3neti
View type: Cost
Category: Research and development
Description: 3neti cost to improve reusable technology and architecture related to the offering.
Formula: Approved R&D cost basis
Input assumption IDs: 3NETI-001
Scenario behavior: May vary by roadmap, release obligations, and ecosystem expansion.
Year applicability: Years 1-5
Recognition trigger: R&D work performed or period completed.
Payment trigger: Cost incurred.
Cash timing: Payroll, contractor, or vendor timing unresolved.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Internal 3neti cost, not inter-stakeholder transfer unless outsourced.
Consolidation treatment: Non-financial
Commercial Event: Not directly tied to individual payroll event
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: 3neti technology stewardship
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Accounting classification and IP capitalization or expensing review.
Tax dependency: TAX-001, if applicable
Blocked inputs: 3NETI-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: 3neti contribution and investor view.
Notes: Internal R&D cost is a stakeholder reporting line, not a new ecosystem cash flow. External contractor costs should be represented by a separate external-outflow line if later modeled.
```

### Package Stewardship And Documentation Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-3NETI-COST-002
Line-item name: Package stewardship and documentation cost
Stakeholder: 3neti
View type: Cost
Category: Knowledge and architecture stewardship
Description: Cost of maintaining x-commerce documentation, assumptions, architecture, and traceability for the offering.
Formula: Approved stewardship cost basis
Input assumption IDs: 3NETI-002
Scenario behavior: May increase as offering documentation, governance, and model maintenance mature.
Year applicability: Years 1-5
Recognition trigger: Stewardship work performed or period completed.
Payment trigger: Cost incurred.
Cash timing: Cost-payment timing unresolved.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Internal 3neti cost, not inter-stakeholder transfer unless outsourced.
Consolidation treatment: Non-financial
Commercial Event: Not directly tied to individual payroll event
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: 3neti knowledge stewardship
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Accounting classification and IP/legal documentation review.
Tax dependency: TAX-001, if applicable
Blocked inputs: 3NETI-002, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: 3neti contribution and investor view.
Notes: Internal stewardship cost is a stakeholder reporting line, not a new ecosystem cash flow. External documentation or advisory services should be represented by a separate external-outflow line if later modeled.
```

### IP And Legal Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-3NETI-COST-003
Line-item name: IP and legal cost
Stakeholder: 3neti
View type: Cost
Category: IP and legal stewardship
Description: Cost of IP protection, license documentation, legal handoff, and related-party review.
Formula: Approved IP and legal cost basis
Input assumption IDs: 3NETI-003, TAX-001
Scenario behavior: May vary with legal review scope and agreement complexity.
Year applicability: Years 1-5
Recognition trigger: Legal or IP work performed.
Payment trigger: Professional fee invoice or internal cost incurred.
Cash timing: Legal-service payment timing unresolved.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: External professional service schedule if outsourced.
Consolidation treatment: External outflow
Commercial Event: Not directly tied to individual payroll event
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: 3neti IP ownership and stewardship
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Legal review required.
Tax dependency: TAX-001, if applicable
Blocked inputs: 3NETI-003, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: 3neti cost view and legal-handoff planning.
Notes: This baseline line represents external legal or IP-service cost. Internal 3neti stewardship remains represented separately as non-financial stakeholder reporting output. x-commerce identifies commercial architecture; x-legal determines legal characterization.
```

### 3neti Net Contribution

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-3NETI-CONTRIB-001
Line-item name: 3neti net contribution
Stakeholder: 3neti
View type: Contribution
Category: Net contribution
Description: 3neti contribution after approved license or royalty income and stewardship costs.
Formula: Approved 3neti revenue - approved 3neti costs - taxes
Input assumption IDs: ROY-001, 3NETI-001, 3NETI-002, 3NETI-003, TAX-001
Scenario behavior: Follows approved royalty basis and stewardship-cost assumptions.
Year applicability: Years 1-5
Recognition trigger: Reporting period close after upstream lines are determined.
Payment trigger: Not applicable
Cash timing: Requires royalty payment and cost-payment timing.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Derived stakeholder total
Consolidation treatment: Non-financial
Commercial Event: Aggregate of offering events
Billable Event: Aggregate of billable events
Commercial Right: Not applicable
Commercial Attribution: 3neti stakeholder view
Commercial Waterfall reference: Not applicable unless royalty is structured through waterfall.
Legal or accounting dependency: Accounting review required before formal financial statement use.
Tax dependency: TAX-001
Blocked inputs: ROY-001, 3NETI-001, 3NETI-002, 3NETI-003, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: 3neti stakeholder view and investor indicators.
Notes: This is not a formal accounting profit-and-loss statement.
```
