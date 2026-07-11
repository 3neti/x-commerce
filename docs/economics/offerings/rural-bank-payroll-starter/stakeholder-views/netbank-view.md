# NetBank View: Rural Bank Payroll Starter

## Status

Current status: structurally instantiated and financially blocked.

Stakeholder: NetBank or another approved infrastructure participant.

Baseline role: possible regulated banking, account, API, rail, settlement, or transaction-services participant.

## Boundary Reminder

No NetBank revenue is recognized while the infrastructure role, fee basis, legal characterization, and cost basis remain unresolved.

Deposits, settlement balances, float, customer funds, payroll value, and gross transaction value are not NetBank revenue.

## Line Items

### Transaction Activity Volume

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-NETBANK-VOL-001
Line-item name: Transaction activity volume
Stakeholder: NetBank
View type: Volume
Category: Infrastructure activity
Description: Payroll transaction activity that may require NetBank or infrastructure participation.
Formula: Successful recipient payroll disbursements requiring infrastructure participation
Input assumption IDs: VOL-001, NET-001, VOL-002
Scenario behavior: Follows successful payroll volume and approved infrastructure model.
Year applicability: Years 1-5
Recognition trigger: Payroll activity measured.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Activity driver for potential infrastructure fee, not inter-stakeholder transfer.
Consolidation treatment: Non-financial
Commercial Event: Successful recipient payroll distribution
Billable Event: Infrastructure event, if approved
Commercial Right: Not applicable
Commercial Attribution: NetBank or infrastructure role, if applicable.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Banking, settlement, API, rail, and service characterization require review.
Tax dependency: Not applicable unless fees are approved.
Blocked inputs: VOL-001, NET-001, VOL-002
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: NetBank readiness and possible fee model.
Notes: Activity volume is not revenue.
```

### Candidate Infrastructure Fee

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-NETBANK-REV-001
Line-item name: Candidate infrastructure fee
Stakeholder: NetBank
View type: Revenue
Category: Candidate infrastructure or rail fee
Description: Possible approved fee for account, API, rail, settlement, or transaction service participation.
Formula: Qualifying activity x approved NetBank or rail fee basis
Input assumption IDs: NET-001, VOL-001, COL-001, TAX-001
Scenario behavior: Follows transaction activity only after fee basis is approved.
Year applicability: Years 1-5
Recognition trigger: Approved infrastructure service event and legally characterized fee.
Payment trigger: Rural Bank payment, settlement process, invoice, or approved terms.
Cash timing: Unresolved.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-RB-COST-007
Reconciliation basis: REC-010
Consolidation treatment: Internal elimination
Commercial Event: Successful recipient payroll distribution, if infrastructure participation applies
Billable Event: Approved infrastructure or rail event
Commercial Right: NetBank or infrastructure fee right, if approved.
Commercial Attribution: Infrastructure role, if applicable.
Commercial Waterfall reference: Not applicable unless later ordered allocation is approved.
Legal or accounting dependency: Legal characterization, banking, settlement, contract, and revenue recognition review.
Tax dependency: TAX-001
Blocked inputs: NET-001, VOL-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: NetBank revenue view and Rural Bank cost view.
Notes: No fee is recognized until `NET-001` or a successor exists.
```

### Service, Compliance, And Reconciliation Burden

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-NETBANK-COST-001
Line-item name: Service, compliance, and reconciliation burden
Stakeholder: NetBank
View type: Cost
Category: Infrastructure operating burden
Description: Possible cost of account, API, rail, settlement, monitoring, compliance, exception handling, or reconciliation participation.
Formula: Approved infrastructure activity x approved infrastructure cost basis
Input assumption IDs: NET-002, VOL-001, VOL-002
Scenario behavior: Follows transaction activity and infrastructure complexity.
Year applicability: Years 1-5
Recognition trigger: Infrastructure service period or activity event.
Payment trigger: Cost incurred.
Cash timing: Cost-payment timing unresolved.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Internal NetBank operating cost, not inter-stakeholder transfer unless outsourced.
Consolidation treatment: Non-financial
Commercial Event: Infrastructure-supported payroll activity
Billable Event: Not applicable unless cost is directly tied to a billable event
Commercial Right: Not applicable
Commercial Attribution: NetBank infrastructure role, if applicable.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Compliance, banking, settlement, and accounting review.
Tax dependency: TAX-001, if applicable
Blocked inputs: NET-002, VOL-001, VOL-002
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: NetBank contribution and infrastructure readiness view.
Notes: Baseline NetBank operating burden is a stakeholder reporting line, not a new ecosystem cash flow. External outsourced costs should be represented by a separate external-outflow line if later modeled. Operating burden must be known before evaluating infrastructure participation.
```

### Recognized Income

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-NETBANK-REV-002
Line-item name: Recognized income
Stakeholder: NetBank
View type: Contribution
Category: Recognized income
Description: NetBank income recognized from approved fees after legal, accounting, tax, and collection treatment.
Formula: Approved infrastructure fee revenue - approved direct costs - taxes
Input assumption IDs: NET-001, NET-002, VOL-001, TAX-001, COL-001
Scenario behavior: Follows approved fee basis, activity, costs, tax, and collection treatment.
Year applicability: Years 1-5
Recognition trigger: Reporting period close after legal and accounting review.
Payment trigger: Not applicable
Cash timing: Requires collection and cost-payment timing.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Derived stakeholder total
Consolidation treatment: Non-financial
Commercial Event: Aggregate of approved infrastructure events
Billable Event: Aggregate of approved infrastructure billable events
Commercial Right: Not applicable
Commercial Attribution: NetBank stakeholder view
Commercial Waterfall reference: Not applicable unless later approved.
Legal or accounting dependency: Legal characterization and accounting review required.
Tax dependency: TAX-001
Blocked inputs: NET-001, NET-002, VOL-001, TAX-001, COL-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: NetBank stakeholder view.
Notes: Deposits, settlement balances, float, customer funds, and gross transaction value remain excluded.
```

### Non-Revenue Balances And Pass-Through Amounts

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-NETBANK-MEMO-001
Line-item name: Non-revenue balances and pass-through amounts
Stakeholder: NetBank
View type: Memo
Category: Non-revenue financial activity
Description: Deposits, settlement balances, customer funds, float, payroll value, or gross transaction value that may appear operationally but are not assumed revenue.
Formula: Not applicable
Input assumption IDs: NET-001, VOL-001, COL-001
Scenario behavior: May vary with transaction activity but remains non-revenue unless legally and contractually characterized otherwise.
Year applicability: Years 1-5
Recognition trigger: Operational visibility of balances or pass-through activity.
Payment trigger: Not applicable
Cash timing: Settlement timing unresolved.
Counterparty stakeholder: Rural Bank or recipient, depending on legally approved settlement structure
Counterparty line-item reference: Not applicable until settlement structure is legally defined
Reconciliation basis: Pass-through and balance-control schedule required
Consolidation treatment: Pass-through
Commercial Event: Successful recipient payroll distribution, if visible in infrastructure records
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Infrastructure custody or visibility, if applicable.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Legal characterization, custody, settlement, banking, and accounting review.
Tax dependency: Not applicable unless revenue is approved.
Blocked inputs: NET-001, COL-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Pass-through and regulatory transparency view.
Notes: This line prevents pass-through value from being mistaken for NetBank revenue.
```
