# ODTI View: Rural Bank Payroll Starter

## Status

Current status: instantiated non-numeric ODTI view.

Stakeholder: ODTI.

Baseline role: commercial operator and platform provider.

## Boundary Reminder

ODTI operating economics remain separate from 3neti IP and royalty economics.

Business-development partner allocations are absent from this baseline and remain deferred until `PAR-001` and Commercial Attribution are approved.

## Line Items

### Activation Revenue From Rural Bank

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-ODTI-REV-001
Line-item name: Activation revenue from Rural Bank
Stakeholder: ODTI
View type: Revenue
Category: Hybrid activation
Description: ODTI activation revenue from Rural Bank under the hybrid pricing architecture.
Formula: Activated bank environments x approved hybrid activation fee
Input assumption IDs: LIC-004, ADP-001, COL-001, TAX-001
Scenario behavior: Follows bank onboarding and activation timing.
Year applicability: Activation year per participating bank
Recognition trigger: Activation event or approved milestone.
Payment trigger: ODTI invoice or approved payment schedule.
Cash timing: Invoice, collection, and recognition timing unresolved.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-RB-COST-001
Reconciliation basis: REC-004
Consolidation treatment: Internal elimination
Commercial Event: Rural Bank activated for Payroll Starter
Billable Event: Activation event
Commercial Right: ODTI right to activation consideration, subject to approved terms.
Commercial Attribution: ODTI commercial operator role.
Commercial Waterfall reference: Not applicable in baseline.
Legal or accounting dependency: Contract, activation scope, revenue recognition, and tax treatment require review.
Tax dependency: TAX-001
Blocked inputs: ADP-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Structurally Ready
Output use: ODTI revenue view and Rural Bank cost view.
Notes: `LIC-004` is not approved pricing.
```

### Annual Platform Subscription Revenue From Rural Bank

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-ODTI-REV-002
Line-item name: Annual platform subscription revenue from Rural Bank
Stakeholder: ODTI
View type: Revenue
Category: Platform subscription
Description: ODTI annual platform subscription revenue from active Rural Banks.
Formula: Active banks x approved annual platform subscription
Input assumption IDs: LIC-005, ADP-002, RISK-001, COL-001, TAX-001
Scenario behavior: Follows active banks, churn, and subscription terms.
Year applicability: Years 1-5
Recognition trigger: Active subscription period.
Payment trigger: ODTI invoice or approved payment schedule.
Cash timing: Invoice and collection timing unresolved.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-RB-COST-002
Reconciliation basis: REC-005
Consolidation treatment: Internal elimination
Commercial Event: Active platform access period
Billable Event: Annual platform subscription period
Commercial Right: ODTI right to platform subscription consideration, subject to approved terms.
Commercial Attribution: ODTI commercial operator role.
Commercial Waterfall reference: Not applicable in baseline.
Legal or accounting dependency: Subscription contract, service obligations, revenue recognition, and tax treatment require review.
Tax dependency: TAX-001
Blocked inputs: ADP-002, RISK-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Structurally Ready
Output use: ODTI recurring revenue view and Rural Bank cost view.
Notes: `LIC-005` is not approved pricing.
```

### Transaction Platform Revenue

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-ODTI-REV-003
Line-item name: Transaction platform revenue
Stakeholder: ODTI
View type: Revenue
Category: Transaction platform charge
Description: ODTI platform revenue tied to successful recipient payroll disbursements.
Formula: Successful recipient payroll disbursements x approved ODTI transaction-platform formula
Input assumption IDs: VOL-001, PRC-001, RB-001, COL-001, TAX-001
Scenario behavior: Follows payroll volume and approved Rural Bank-to-ODTI allocation.
Year applicability: Years 1-5
Recognition trigger: Successful recipient payroll disbursement or approved billing event.
Payment trigger: Rural Bank payment, remittance, or approved collection process.
Cash timing: Rural Bank collection and remittance timing unresolved.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-RB-COST-003
Reconciliation basis: REC-006
Consolidation treatment: Internal elimination
Commercial Event: Successful recipient payroll distribution
Billable Event: Successful recipient payroll disbursement
Commercial Right: ODTI right to transaction-platform consideration, subject to approved terms.
Commercial Attribution: ODTI platform and commercial operation role.
Commercial Waterfall reference: Applicable only if ordered transaction allocation is approved.
Legal or accounting dependency: Contract, fee disclosure, revenue recognition, and tax treatment require review.
Tax dependency: TAX-001
Blocked inputs: VOL-001, RB-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: ODTI revenue view and Rural Bank cost view.
Notes: Requires an approved split between Rural Bank retained economics and ODTI charge.
```

### 3neti Royalty Or License Expense

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-ODTI-COST-001
Line-item name: 3neti royalty or license expense
Stakeholder: ODTI
View type: Cost
Category: 3neti license or royalty consideration
Description: Possible ODTI obligation to 3neti for use of 3neti IP and technology.
Formula: Approved royalty or license basis
Input assumption IDs: ROY-001, COL-001, TAX-001
Scenario behavior: Follows approved royalty basis, if any.
Year applicability: Years 1-5
Recognition trigger: Royalty or license right earned under approved 3neti-ODTI agreement.
Payment trigger: Invoice, payable date, settlement event, or approved payment terms.
Cash timing: Accrual, invoice, payable, and payment timing unresolved.
Counterparty stakeholder: 3neti
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-3NETI-REV-001
Reconciliation basis: REC-011
Consolidation treatment: Internal elimination
Commercial Event: Offering uses 3neti IP in approved commercial activity
Billable Event: Unresolved
Commercial Right: 3neti commercial right, if approved.
Commercial Attribution: 3neti IP ownership and stewardship.
Commercial Waterfall reference: Potentially applicable if royalty is structured through waterfall.
Legal or accounting dependency: 3neti-ODTI license agreement, related-party review, revenue recognition, withholding.
Tax dependency: TAX-001
Blocked inputs: ROY-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: ODTI net contribution and 3neti revenue view.
Notes: Do not infer a royalty percentage from ODTI revenue.
```

### ODTI Support Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-ODTI-COST-002
Line-item name: ODTI support cost
Stakeholder: ODTI
View type: Cost
Category: Support and operations
Description: ODTI support burden for banks, payroll customers, and offering administration.
Formula: Active banks or active payroll customers x approved support-cost basis
Input assumption IDs: ODTI-001, ADP-002, CUS-001, RISK-001
Scenario behavior: May increase with adoption and may decline per unit if operating practices mature.
Year applicability: Years 1-5
Recognition trigger: Support service period.
Payment trigger: Payroll or support cost incurred.
Cash timing: Payroll, contractor, or vendor timing unresolved.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Internal ODTI operating cost, not inter-stakeholder transfer unless outsourced.
Consolidation treatment: External outflow if paid to external staff or vendors; internal cost if within ODTI.
Commercial Event: Active offering support period
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: ODTI commercial operator role.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Accounting classification and tax review.
Tax dependency: TAX-001, if applicable
Blocked inputs: ODTI-001, ADP-002, CUS-001, RISK-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: ODTI contribution view.
Notes: Support cost must not be hidden inside platform revenue.
```

### Commercial Administration Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-ODTI-COST-003
Line-item name: Commercial administration cost
Stakeholder: ODTI
View type: Cost
Category: Commercial administration
Description: ODTI cost for contracting, billing, coordination, reporting, governance, and commercial administration.
Formula: Approved administration cost basis
Input assumption IDs: ODTI-002, ADP-001, ADP-002, COL-001
Scenario behavior: May increase with onboarding and active-bank count.
Year applicability: Years 1-5
Recognition trigger: Administration work performed or period completed.
Payment trigger: Cost incurred.
Cash timing: Cost-payment timing unresolved.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Internal ODTI operating cost, not inter-stakeholder transfer unless outsourced.
Consolidation treatment: External outflow if paid outside ODTI; otherwise internal operating cost.
Commercial Event: Active offering administration period
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: ODTI commercial operator role.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Accounting classification and tax review.
Tax dependency: TAX-001, if applicable
Blocked inputs: ODTI-002, ADP-001, ADP-002, COL-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: ODTI contribution view.
Notes: Business-development allocations are not included here.
```

### ODTI Tax Or Government Amount

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-ODTI-TAX-001
Line-item name: ODTI tax or government amount
Stakeholder: ODTI
View type: Cost
Category: Tax or government amount
Description: Taxes, withholding, or government amounts applicable to ODTI lines.
Formula: Approved taxable base x approved tax or withholding treatment
Input assumption IDs: TAX-001
Scenario behavior: Does not vary by scenario unless tax treatment changes by approved assumption.
Year applicability: Years 1-5
Recognition trigger: Taxable event or withholding obligation determined.
Payment trigger: Statutory deadline or approved tax process.
Cash timing: Tax payment timing unresolved.
Counterparty stakeholder: Government tax authority
Counterparty line-item reference: Not modeled
Reconciliation basis: External tax schedule required
Consolidation treatment: Tax or government amount
Commercial Event: Applicable taxable or withholding event
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Statutory obligation
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Tax and accounting review required.
Tax dependency: TAX-001
Blocked inputs: TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Tax-adjusted ODTI and consolidated views.
Notes: Taxes remain separate from operating revenue and provider cost.
```

### ODTI Net Operating Contribution

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-ODTI-CONTRIB-001
Line-item name: ODTI net operating contribution
Stakeholder: ODTI
View type: Contribution
Category: Net operating contribution
Description: ODTI contribution after platform revenues, royalty obligations, support costs, administration costs, tax treatment, and non-collection.
Formula: ODTI revenue - approved costs - approved royalty - taxes - bad debt
Input assumption IDs: LIC-004, LIC-005, PRC-001, VOL-001, RB-001, ROY-001, ODTI-001, ODTI-002, RISK-002, TAX-001
Scenario behavior: Follows all upstream revenue, cost, risk, and tax assumptions.
Year applicability: Years 1-5
Recognition trigger: Reporting period close after upstream lines are determined.
Payment trigger: Not applicable
Cash timing: Requires collection and payment timing.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Derived stakeholder total
Consolidation treatment: Non-financial
Commercial Event: Aggregate of offering events
Billable Event: Aggregate of billable events
Commercial Right: Not applicable
Commercial Attribution: ODTI stakeholder view
Commercial Waterfall reference: Not applicable unless approved allocations are introduced.
Legal or accounting dependency: Accounting review required before formal financial statement use.
Tax dependency: TAX-001
Blocked inputs: VOL-001, RB-001, ROY-001, ODTI-001, ODTI-002, RISK-002, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: ODTI stakeholder view and investor indicators.
Notes: This is not a formal accounting profit-and-loss statement.
```
