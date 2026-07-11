# Investor View: Rural Bank Payroll Starter

## Status

Current status: instantiated non-numeric investor view.

Stakeholder: Investor.

Baseline role: ownership, financing, confidence, and governance perspective only.

## Boundary Reminder

Investor returns are not operational Commercial Waterfall allocations.

Investor capital is Financing, not operating revenue.

## Line Items

### Capital Requirement

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-INV-FIN-001
Line-item name: Capital requirement
Stakeholder: Investor
View type: Investor Ownership
Category: Financing
Description: Capital potentially required to support offering development, launch readiness, governance, operations, or scale.
Formula: Approved capital requirement by use of funds
Input assumption IDs: INV-001, ODTI-001, ODTI-002, 3NETI-001, 3NETI-002, 3NETI-003
Scenario behavior: May increase with adoption pace, operating support, R&D, and governance requirements.
Year applicability: Years 1-5
Recognition trigger: Financing plan approved.
Payment trigger: Investment agreement, drawdown, or funding schedule.
Cash timing: Financing timing unresolved.
Counterparty stakeholder: Investee entity to be defined
Counterparty line-item reference: Not modeled
Reconciliation basis: Financing schedule required
Consolidation treatment: Financing
Commercial Event: Not an operational commercial event
Billable Event: Not applicable
Commercial Right: Investor rights, if approved by financing instrument.
Commercial Attribution: Capital steward role, if applicable.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Securities, corporate, tax, accounting, and governance review.
Tax dependency: TAX-001, if applicable
Blocked inputs: INV-001, ODTI-001, ODTI-002, 3NETI-001, 3NETI-002, 3NETI-003
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Investor financing view.
Notes: Capital inflow must not be counted as operating revenue.
```

### Potential Return Mechanism

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-INV-OWN-001
Line-item name: Potential return mechanism
Stakeholder: Investor
View type: Investor Ownership
Category: Ownership or financing return
Description: Possible mechanism by which investor return may arise, such as equity, dividends, appreciation, repayment, or conversion.
Formula: Approved financing instrument terms
Input assumption IDs: INV-002, TAX-001
Scenario behavior: Depends on financing instrument and company-level performance, not directly on one operational waterfall.
Year applicability: Years 1-5 or financing-instrument term
Recognition trigger: Approved investor rights and governing instrument.
Payment trigger: Dividend, repayment, conversion, liquidity event, or other approved mechanism.
Cash timing: Financing-instrument timing unresolved.
Counterparty stakeholder: Investee entity to be defined
Counterparty line-item reference: Not modeled
Reconciliation basis: Financing and ownership schedule required
Consolidation treatment: Financing
Commercial Event: Not an operational commercial event
Billable Event: Not applicable
Commercial Right: Investor contractual or ownership right, if approved.
Commercial Attribution: Capital participation
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Securities, corporate, tax, accounting, and governance review.
Tax dependency: TAX-001
Blocked inputs: INV-002, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Investor view.
Notes: Do not treat investor return as transaction allocation.
```

### Offering Adoption Indicators

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-INV-MEMO-001
Line-item name: Offering adoption indicators
Stakeholder: Investor
View type: Memo
Category: Adoption and relationship indicators
Description: Indicators showing whether the offering is producing recurring commercial relationships.
Formula: Active banks, active payroll customers, successful payroll activity, repeat use
Input assumption IDs: ADP-001, ADP-002, CUS-001, VOL-001, RISK-001
Scenario behavior: Follows adoption, activation, usage, and churn assumptions.
Year applicability: Years 1-5
Recognition trigger: Measurement period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Non-financial and operating indicator set
Consolidation treatment: Non-financial
Commercial Event: Successful payroll outcomes and recurring usage
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Offering adoption
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: None unless externally reported.
Tax dependency: Not applicable
Blocked inputs: ADP-001, ADP-002, CUS-001, VOL-001, RISK-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Investor confidence and relationship-capital view.
Notes: Recurring revenue follows recurring commercial relationships.
```

### Confidence Indicators

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-INV-MEMO-002
Line-item name: Confidence indicators
Stakeholder: Investor
View type: Memo
Category: Confidence and governance
Description: Indicators that the offering remains understandable, governed, traceable, and aligned with documented architecture.
Formula: Governance, traceability, reconciliation, blocked-input discipline, and public-interest indicators
Input assumption IDs: PUB-001, INV-003
Scenario behavior: Should improve as assumptions, legal handoff, and operations become more mature.
Year applicability: Years 1-5
Recognition trigger: Governance review period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Public Interest
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-PUBLIC-PI-004
Reconciliation basis: Shared governance and confidence indicator
Consolidation treatment: Non-financial
Commercial Event: Offering governance period
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Investor stewardship and ecosystem governance
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: None unless externally reported.
Tax dependency: Not applicable
Blocked inputs: PUB-001, INV-003
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Investor confidence view and public-interest view.
Notes: Confidence Value is not operating revenue.
```
