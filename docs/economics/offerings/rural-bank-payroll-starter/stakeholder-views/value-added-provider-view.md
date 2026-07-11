# Value-Added Provider View: Rural Bank Payroll Starter

## Status

Current status: instantiated non-numeric SMS provider view.

Stakeholder: Value-Added Provider for SMS.

Baseline role: optional SMS capability provider attached to payroll outcomes.

## Boundary Reminder

The SMS Provider does not own the payroll transaction. It attaches a communication capability to the payroll outcome.

Customer-facing SMS price must remain distinct from SMS direct provider cost.

## Line Items

### SMS Attachment Volume

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-VASP-VOL-001
Line-item name: SMS attachment volume
Stakeholder: Value-Added Provider
View type: Volume
Category: Capability attachment
Description: Number of qualifying payroll events with SMS attached.
Formula: Successful payroll events x SMS attachment rate
Input assumption IDs: VOL-001, ATT-001, SMS-001
Scenario behavior: Follows payroll volume, attachment behavior, and delivery eligibility.
Year applicability: Years 1-5
Recognition trigger: SMS attachment activity measured.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Activity driver for provider revenue and Rural Bank SMS provider cost.
Consolidation treatment: Non-financial
Commercial Event: Successful recipient payroll distribution with SMS attachment
Billable Event: SMS notification event, if approved
Commercial Right: Not applicable
Commercial Attribution: SMS capability attachment.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Messaging consent, privacy, provider agreement.
Tax dependency: Not applicable unless converted to fee.
Blocked inputs: VOL-001, ATT-001, SMS-001
Controlled placeholder: None approved
Line-item readiness: Conditionally Ready
Output use: SMS provider revenue, Rural Bank SMS cost, and public-interest evidence.
Notes: Attachment rate is separate from transaction volume.
```

### SMS Provider Revenue

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-VASP-REV-001
Line-item name: SMS provider revenue
Stakeholder: Value-Added Provider
View type: Revenue
Category: SMS provider charge
Description: SMS Provider revenue from Rural Bank for qualifying SMS notification usage.
Formula: SMS attachment volume x approved SMS direct provider charge
Input assumption IDs: VOL-001, ATT-001, CST-001, SMS-001, COL-001, TAX-001
Scenario behavior: Follows payroll volume, attachment rate, provider cost, and delivery success.
Year applicability: Years 1-5
Recognition trigger: SMS delivered or billable SMS event recognized under approved provider agreement.
Payment trigger: Provider invoice or approved payment terms.
Cash timing: Provider invoice and Rural Bank payment timing unresolved.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-RB-COST-006
Reconciliation basis: REC-009
Consolidation treatment: Internal elimination
Commercial Event: Successful recipient payroll distribution with SMS attachment
Billable Event: SMS notification event, if approved
Commercial Right: SMS Provider right to provider charge, subject to approved terms.
Commercial Attribution: SMS capability attachment.
Commercial Waterfall reference: Not applicable in baseline.
Legal or accounting dependency: Provider agreement, privacy, consent, revenue recognition, refund treatment.
Tax dependency: TAX-001
Blocked inputs: VOL-001, ATT-001, CST-001, SMS-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Conditionally Ready
Output use: VASP revenue view and Rural Bank SMS cost view.
Notes: `CST-001` is blocked until provider quote or approved cost basis exists.
```

### Provider Delivery Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-VASP-COST-001
Line-item name: Provider delivery cost
Stakeholder: Value-Added Provider
View type: Cost
Category: SMS delivery cost
Description: Cost incurred by the SMS Provider to deliver or attempt qualifying SMS notifications.
Formula: SMS attachment volume x approved provider delivery cost basis
Input assumption IDs: SMS-002, VOL-001, ATT-001, SMS-001
Scenario behavior: Follows attachment volume, delivery success, and wholesale delivery cost.
Year applicability: Years 1-5
Recognition trigger: SMS delivery or attempted delivery event.
Payment trigger: External carrier, aggregator, or operating cost incurred.
Cash timing: Cost-payment timing unresolved.
Counterparty stakeholder: External SMS carrier or aggregator
Counterparty line-item reference: Not modeled
Reconciliation basis: External provider-cost schedule required
Consolidation treatment: External outflow
Commercial Event: Successful recipient payroll distribution with SMS attachment
Billable Event: SMS notification event, if approved
Commercial Right: External carrier right, if applicable.
Commercial Attribution: SMS delivery capability.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Provider and carrier agreements, privacy, and accounting review.
Tax dependency: TAX-001, if applicable
Blocked inputs: SMS-002, VOL-001, ATT-001, SMS-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: VASP margin and consolidated external outflow.
Notes: This cost may differ from `CST-001`, which is the charge to Rural Bank.
```

### Failed-Message Treatment

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-VASP-RISK-001
Line-item name: Failed-message treatment
Stakeholder: Value-Added Provider
View type: Risk
Category: Delivery failure
Description: Treatment of failed, delayed, duplicate, or undelivered SMS events.
Formula: SMS attachment volume x failed-message rate and approved commercial treatment
Input assumption IDs: SMS-001, SMS-003, RISK-002
Scenario behavior: May improve with provider quality, retry rules, and recipient-data quality.
Year applicability: Years 1-5
Recognition trigger: Failed-message event measured.
Payment trigger: Refund, credit, retry, or no-charge event if approved.
Cash timing: Refund or credit timing unresolved.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-RB-COST-006
Reconciliation basis: Adjustment to REC-009 if failed-message treatment affects billing.
Consolidation treatment: Non-financial
Commercial Event: Successful recipient payroll distribution with SMS attachment
Billable Event: SMS notification event, if approved
Commercial Right: Depends on provider agreement.
Commercial Attribution: SMS delivery responsibility.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Provider agreement, refund treatment, privacy, and accounting review.
Tax dependency: TAX-001, if applicable
Blocked inputs: SMS-001, SMS-003, RISK-002
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: VASP risk view and Rural Bank SMS cost adjustment.
Notes: This risk line is not a cash flow. If failed-message treatment creates a credit, refund, or payable adjustment, that adjustment should be represented as a separate internal-elimination line.
```

### SMS Provider Margin

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-VASP-CONTRIB-001
Line-item name: SMS Provider margin
Stakeholder: Value-Added Provider
View type: Contribution
Category: Provider margin
Description: SMS Provider contribution after provider revenue, delivery cost, failed-message treatment, support cost, and tax treatment.
Formula: SMS provider revenue - delivery cost - adjustments - taxes
Input assumption IDs: CST-001, SMS-002, SMS-003, VOL-001, ATT-001, TAX-001
Scenario behavior: Follows attachment volume, provider charge, delivery cost, failure treatment, and tax treatment.
Year applicability: Years 1-5
Recognition trigger: Reporting period close after upstream lines are determined.
Payment trigger: Not applicable
Cash timing: Requires collection and cost-payment timing.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Derived stakeholder total
Consolidation treatment: Non-financial
Commercial Event: Aggregate SMS-attached payroll events
Billable Event: Aggregate SMS notification events
Commercial Right: Not applicable
Commercial Attribution: SMS Provider stakeholder view
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Accounting review required before formal financial statement use.
Tax dependency: TAX-001
Blocked inputs: CST-001, SMS-002, SMS-003, VOL-001, ATT-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: VASP stakeholder view.
Notes: Customer-facing SMS price is not provider margin.
```

### Privacy And Consent Dependency

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-VASP-MEMO-001
Line-item name: Privacy and consent dependency
Stakeholder: Value-Added Provider
View type: Memo
Category: Privacy and consent
Description: Non-financial dependency for SMS notification consent, data handling, recipient contact data, and disclosure.
Formula: Not applicable
Input assumption IDs: SMS-004
Scenario behavior: Does not vary by scenario unless consent process or provider requirements change.
Year applicability: Years 1-5
Recognition trigger: SMS capability included in offering.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Public Interest
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-PUBLIC-PI-002
Reconciliation basis: Shared governance and transparency indicator
Consolidation treatment: Non-financial
Commercial Event: SMS-attached payroll event
Billable Event: SMS notification event, if approved
Commercial Right: Not applicable
Commercial Attribution: SMS Provider capability role.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Privacy, consent, disclosure, and provider-contract review.
Tax dependency: Not applicable
Blocked inputs: SMS-004
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: VASP governance view and public-interest view.
Notes: SMS should not be modeled as purely technical usage without consent and privacy review.
```
