# Customer View: Rural Bank Payroll Starter

## Status

Current status: instantiated non-numeric customer view.

Stakeholder: Employer, payroll sponsor, or future Outcome Sponsor.

Baseline role: buyer, funder, sponsor, and payer of customer-facing fees.

## Line Items

### Payroll Funding Value

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-CUST-PASS-001
Line-item name: Payroll funding value
Stakeholder: Customer
View type: Cash Flow
Category: Payroll funding value
Description: Underlying payroll amount funded by the employer for approved recipients.
Formula: Approved payroll value funded by employer
Input assumption IDs: CUS-002, CUS-003, VOL-001, VOL-002, COL-001
Scenario behavior: Follows payroll activity, recipient count, completion, and collection timing.
Year applicability: Years 1-5
Recognition trigger: Employer approves payroll funding instruction.
Payment trigger: Funding deadline or approved payroll execution process.
Cash timing: Funding, execution, settlement, and recipient receipt timing require definition.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-RB-PASS-001
Reconciliation basis: REC-001
Consolidation treatment: Pass-through
Commercial Event: Successful recipient payroll distribution
Billable Event: Not applicable to payroll value itself
Commercial Right: Not applicable
Commercial Attribution: Employer funds payroll value
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Payroll funding, settlement, custody, and employment-related treatment require review.
Tax dependency: Payroll-related tax or withholding questions are outside this commercial model.
Blocked inputs: CUS-002, CUS-003, VOL-001, VOL-002, COL-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Pass-through control and customer cash-flow view.
Notes: Payroll funding is not platform revenue, customer fee revenue, NetBank revenue, or Rural Bank retained economics.
```

### Payroll Service Fee Paid

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-CUST-COST-001
Line-item name: Payroll service fee paid
Stakeholder: Customer
View type: Cost
Category: Customer-facing payroll service fee
Description: Customer-facing commercial fee paid by the employer to the Rural Bank for successful payroll outcomes.
Formula: Successful recipient payroll disbursements x approved customer-facing fee
Input assumption IDs: PRC-001, VOL-001, COL-001, TAX-001
Scenario behavior: Follows transaction volume and approved pricing; tax treatment may vary after review.
Year applicability: Years 1-5
Recognition trigger: Successful recipient payroll disbursement or approved billing event.
Payment trigger: Rural Bank invoice, transaction collection, or approved payment terms.
Cash timing: Employer collection timing unresolved.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-RB-REV-001
Reconciliation basis: REC-002
Consolidation treatment: External inflow
Commercial Event: Successful recipient payroll distribution
Billable Event: Successful recipient payroll disbursement
Commercial Right: Rural Bank right to collect customer-facing fee, subject to approved terms.
Commercial Attribution: Rural Bank customer-facing role
Commercial Waterfall reference: Not applicable unless later approved allocation requires waterfall treatment.
Legal or accounting dependency: Fee disclosure, customer contract, refund treatment, and accounting recognition require review.
Tax dependency: TAX-001
Blocked inputs: VOL-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Structurally Ready
Output use: Customer cost view, Rural Bank collection view, consolidated external inflow.
Notes: `PRC-001` is a working assumption record, not approved pricing.
```

### Optional SMS Fee Paid

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-CUST-COST-002
Line-item name: Optional SMS fee paid
Stakeholder: Customer
View type: Cost
Category: Optional value-added service
Description: Customer-facing SMS charge paid by the employer to the Rural Bank where SMS attachment is selected.
Formula: Successful payroll events x SMS attachment rate x approved SMS customer-facing price
Input assumption IDs: VOL-001, ATT-001, VAS-001, COL-001, TAX-001
Scenario behavior: Follows payroll volume, SMS attachment behavior, and approved SMS price.
Year applicability: Years 1-5
Recognition trigger: SMS notification is attached to a qualifying payroll event under approved terms.
Payment trigger: Rural Bank invoice, transaction collection, or approved payment terms.
Cash timing: Same as customer-facing collection unless SMS is separately billed.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-RB-REV-002
Reconciliation basis: REC-003
Consolidation treatment: External inflow
Commercial Event: Successful recipient payroll distribution with SMS attachment
Billable Event: SMS notification event, if approved
Commercial Right: Rural Bank right to collect optional SMS charge, subject to approved terms.
Commercial Attribution: Employer selected SMS attachment through Rural Bank offering.
Commercial Waterfall reference: Not applicable in baseline; provider payment is direct contractual obligation.
Legal or accounting dependency: Messaging consent, privacy, refund treatment, and fee disclosure require review.
Tax dependency: TAX-001
Blocked inputs: VOL-001, ATT-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Conditionally Ready
Output use: Customer cost view, SMS attachment view, Rural Bank collection view.
Notes: SMS is optional but instantiated. `VAS-001` is not approved pricing.
```

### Administrative Work Avoided

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-CUST-OPVAL-001
Line-item name: Administrative work avoided
Stakeholder: Customer
View type: Operational Value
Category: Administrative burden
Description: Reduction in payroll preparation, recipient-data collection, follow-up, failed-payment handling, and reconciliation work.
Formula: Baseline administrative effort - post-adoption administrative effort
Input assumption IDs: CUS-004, CUS-005, PUB-001
Scenario behavior: May improve with repeat use and process maturity.
Year applicability: Years 1-5
Recognition trigger: Operational measurement period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Operational indicator, not inter-stakeholder transfer.
Consolidation treatment: Non-financial
Commercial Event: Successful payroll outcome
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Customer operational improvement
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: None unless monetized or externally reported.
Tax dependency: Not applicable
Blocked inputs: CUS-004, CUS-005, PUB-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Customer operational-value view and public-interest view.
Notes: This preserves the insight that payments take seconds while work takes days.
```

### Failed-Payment And Support Burden Avoided

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-CUST-RISK-001
Line-item name: Failed-payment and support burden avoided
Stakeholder: Customer
View type: Risk
Category: Operational risk reduction
Description: Reduction in support, correction, and follow-up effort caused by failed, reversed, delayed, or unclear payroll delivery.
Formula: Baseline failure burden - modeled failure burden
Input assumption IDs: VOL-002, RISK-002, CUS-004, PUB-001
Scenario behavior: Improves only if completion and evidence quality improve.
Year applicability: Years 1-5
Recognition trigger: Failed-payment and support events measured.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Operational risk indicator, not inter-stakeholder transfer.
Consolidation treatment: Non-financial
Commercial Event: Successful or failed payroll outcome
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Customer operational experience
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: None unless used in contractual service levels.
Tax dependency: Not applicable
Blocked inputs: VOL-002, RISK-002, CUS-004, PUB-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Customer risk view and public-interest indicators.
Notes: Revenue is not the KPI for this line; reduced work is.
```

### Completion And Recipient Satisfaction

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-CUST-OPVAL-002
Line-item name: Completion and recipient satisfaction
Stakeholder: Customer
View type: Operational Value
Category: Outcome quality
Description: Customer-facing indicator that payroll recipients received value with less friction and better evidence.
Formula: Completion indicator and recipient satisfaction indicator
Input assumption IDs: PUB-001, PUB-002, VOL-002
Scenario behavior: Should improve with reliable execution, evidence, support, and optional notifications.
Year applicability: Years 1-5
Recognition trigger: Outcome-quality measurement period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Public Interest
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-PUBLIC-PI-001
Reconciliation basis: Shared non-financial indicator
Consolidation treatment: Non-financial
Commercial Event: Successful payroll outcome
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Customer and recipient outcome quality
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: None unless externally reported or used in service commitments.
Tax dependency: Not applicable
Blocked inputs: PUB-001, PUB-002, VOL-002
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Customer value and public-interest view.
Notes: This line should not be converted into peso value without an approved method.
```
