# Rural Bank View: Rural Bank Payroll Starter

## Status

Current status: instantiated non-numeric rural-bank view.

Stakeholder: Participating Rural Bank.

Baseline role: customer-facing institution, baseline collection party, and owner of the production environment.

## Boundary Reminder

The bank receives commercial capability, not guaranteed adoption.

The bank must not treat payroll funding value, customer funds, deposits, settlement balances, float, or gross transaction value as revenue.

## Line Items

### Payroll Funding Value Received For Execution

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-PASS-001
Line-item name: Payroll funding value received for execution
Stakeholder: Rural Bank
View type: Cash Flow
Category: Pass-through payroll value
Description: Payroll funding value received from the employer for approved execution to recipients.
Formula: Approved payroll funding value
Input assumption IDs: CUS-002, CUS-003, VOL-001, VOL-002, COL-001
Scenario behavior: Follows employer payroll activity and completion.
Year applicability: Years 1-5
Recognition trigger: Employer funds approved payroll instruction.
Payment trigger: Approved payroll execution and settlement process.
Cash timing: Funding, execution, settlement, and receipt timing require definition.
Counterparty stakeholder: Customer
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-CUST-PASS-001
Reconciliation basis: REC-001
Consolidation treatment: Pass-through
Commercial Event: Successful recipient payroll distribution
Billable Event: Not applicable to payroll value itself
Commercial Right: Not applicable
Commercial Attribution: Employer funding and bank execution role
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Settlement, custody, banking, and payroll funding treatment require review.
Tax dependency: Payroll-related tax or withholding questions are outside this commercial model.
Blocked inputs: CUS-002, CUS-003, VOL-001, VOL-002, COL-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Pass-through control and cash-flow view.
Notes: This is not Rural Bank revenue.
```

### Employer Payroll Service Fee Collected

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-REV-001
Line-item name: Employer payroll service fee collected
Stakeholder: Rural Bank
View type: Revenue
Category: Customer-facing commercial fee collection
Description: Customer-facing payroll service fee collected by the Rural Bank from the employer.
Formula: Successful recipient payroll disbursements x approved customer-facing fee
Input assumption IDs: PRC-001, VOL-001, COL-001, TAX-001
Scenario behavior: Follows payroll activity and approved pricing.
Year applicability: Years 1-5
Recognition trigger: Successful recipient payroll disbursement or approved billing event.
Payment trigger: Employer invoice, transaction collection, or approved payment terms.
Cash timing: Employer collection timing unresolved.
Counterparty stakeholder: Customer
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-CUST-COST-001
Reconciliation basis: REC-002
Consolidation treatment: External inflow
Commercial Event: Successful recipient payroll distribution
Billable Event: Successful recipient payroll disbursement
Commercial Right: Rural Bank collection right, subject to approved terms.
Commercial Attribution: Rural Bank customer-facing role
Commercial Waterfall reference: Not applicable unless later approved.
Legal or accounting dependency: Fee disclosure, customer contract, revenue recognition, and refund treatment require review.
Tax dependency: TAX-001
Blocked inputs: VOL-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Structurally Ready
Output use: Rural Bank collection view and consolidated external inflow.
Notes: This collection is not the same as retained Rural Bank economics.
```

### Optional SMS Charge Collected

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-REV-002
Line-item name: Optional SMS charge collected
Stakeholder: Rural Bank
View type: Revenue
Category: Optional value-added service collection
Description: Customer-facing SMS charge collected by the Rural Bank from the employer where SMS is selected.
Formula: Successful payroll events x SMS attachment rate x approved SMS customer-facing price
Input assumption IDs: VOL-001, ATT-001, VAS-001, COL-001, TAX-001
Scenario behavior: Follows payroll volume, SMS attachment rate, and approved SMS price.
Year applicability: Years 1-5
Recognition trigger: SMS attached to qualifying payroll event under approved terms.
Payment trigger: Employer invoice, transaction collection, or approved payment terms.
Cash timing: Same as customer-facing fee unless separately billed.
Counterparty stakeholder: Customer
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-CUST-COST-002
Reconciliation basis: REC-003
Consolidation treatment: External inflow
Commercial Event: Successful recipient payroll distribution with SMS attachment
Billable Event: SMS notification event, if approved
Commercial Right: Rural Bank collection right for optional SMS charge, subject to approved terms.
Commercial Attribution: Rural Bank offers optional SMS capability through payroll service.
Commercial Waterfall reference: Not applicable in baseline.
Legal or accounting dependency: Messaging consent, privacy, fee disclosure, refund treatment, and accounting review.
Tax dependency: TAX-001
Blocked inputs: VOL-001, ATT-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Conditionally Ready
Output use: Rural Bank SMS collection view and consolidated external inflow.
Notes: Customer-facing SMS price must remain separate from provider cost.
```

### Approved Rural-Bank Retained Transaction Economics

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-REV-003
Line-item name: Approved rural-bank retained transaction economics
Stakeholder: Rural Bank
View type: Contribution
Category: Retained economics
Description: Portion of customer-facing transaction economics retained by the Rural Bank after approved obligations.
Formula: Successful recipient payroll disbursements x approved Rural Bank retained amount or formula
Input assumption IDs: VOL-001, PRC-001, RB-001, TAX-001
Scenario behavior: Follows payroll activity and approved retained-fee formula.
Year applicability: Years 1-5
Recognition trigger: Successful recipient payroll disbursement and approved retained-economics rule.
Payment trigger: Customer collection and settlement or remittance process.
Cash timing: Collection and remittance timing unresolved.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Derived from RB-REV-001 after approved obligations; not a separate inter-stakeholder transfer.
Consolidation treatment: Non-financial
Commercial Event: Successful recipient payroll distribution
Billable Event: Successful recipient payroll disbursement
Commercial Right: Rural Bank retained economics, if approved.
Commercial Attribution: Rural Bank customer-facing role and collection role.
Commercial Waterfall reference: Applicable only if retained economics enter an ordered allocation.
Legal or accounting dependency: Revenue recognition, fee disclosure, and banking characterization require review.
Tax dependency: TAX-001
Blocked inputs: VOL-001, RB-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Rural Bank contribution view.
Notes: RB-REV-001 is the external inflow. RB-REV-003 is a derived rural-bank contribution view of that same inflow after approved obligations and must not be added again in consolidation. Requires a canonical retained-fee assumption. Do not infer retention from `PRC-001`.
```

### Activation Obligation To ODTI

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-COST-001
Line-item name: Activation obligation to ODTI
Stakeholder: Rural Bank
View type: Cost
Category: Hybrid activation
Description: Rural Bank obligation to ODTI for activation under the hybrid pricing architecture.
Formula: Active activation events x approved hybrid activation fee
Input assumption IDs: LIC-004, ADP-001, COL-001, TAX-001
Scenario behavior: Follows onboarding timing and approved activation terms.
Year applicability: Activation year per participating bank
Recognition trigger: Activation event or contract milestone.
Payment trigger: ODTI invoice or approved payment schedule.
Cash timing: Invoice and payment timing unresolved.
Counterparty stakeholder: ODTI
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-ODTI-REV-001
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
Output use: Rural Bank cost view and ODTI revenue view.
Notes: Do not combine with DevOps setup fee unless a later bundle is approved.
```

### Annual Platform Subscription Obligation To ODTI

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-COST-002
Line-item name: Annual platform subscription obligation to ODTI
Stakeholder: Rural Bank
View type: Cost
Category: Platform subscription
Description: Rural Bank annual platform subscription obligation to ODTI under the hybrid pricing architecture.
Formula: Active banks x approved annual platform subscription
Input assumption IDs: LIC-005, ADP-002, RISK-001, COL-001, TAX-001
Scenario behavior: Follows active banks, churn, and subscription terms.
Year applicability: Years 1-5
Recognition trigger: Active subscription period.
Payment trigger: ODTI invoice or approved payment schedule.
Cash timing: Invoice and payment timing unresolved.
Counterparty stakeholder: ODTI
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-ODTI-REV-002
Reconciliation basis: REC-005
Consolidation treatment: Internal elimination
Commercial Event: Active platform access period
Billable Event: Annual platform subscription period
Commercial Right: ODTI right to platform subscription consideration, subject to approved terms.
Commercial Attribution: ODTI commercial operator role.
Commercial Waterfall reference: Not applicable in baseline.
Legal or accounting dependency: Contract, subscription service obligation, revenue recognition, and tax treatment require review.
Tax dependency: TAX-001
Blocked inputs: ADP-002, RISK-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Structurally Ready
Output use: Rural Bank cost view and ODTI revenue view.
Notes: Subscription is separate from transaction-platform charges.
```

### Transaction Platform Obligation To ODTI

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-COST-003
Line-item name: Transaction platform obligation to ODTI
Stakeholder: Rural Bank
View type: Cost
Category: Transaction platform charge
Description: Rural Bank obligation to ODTI tied to successful recipient payroll disbursements.
Formula: Successful recipient payroll disbursements x approved ODTI transaction-platform formula
Input assumption IDs: VOL-001, PRC-001, RB-001, COL-001, TAX-001
Scenario behavior: Follows transaction volume and approved allocation between Rural Bank and ODTI.
Year applicability: Years 1-5
Recognition trigger: Successful recipient payroll disbursement.
Payment trigger: Customer collection, ODTI invoice, settlement process, or approved payment terms.
Cash timing: Collection and remittance timing unresolved.
Counterparty stakeholder: ODTI
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-ODTI-REV-003
Reconciliation basis: REC-006
Consolidation treatment: Internal elimination
Commercial Event: Successful recipient payroll distribution
Billable Event: Successful recipient payroll disbursement
Commercial Right: ODTI right to transaction-platform consideration, subject to approved terms.
Commercial Attribution: ODTI platform and commercial operation role.
Commercial Waterfall reference: Applicable only if ordered transaction allocation is approved.
Legal or accounting dependency: Fee disclosure, contract, revenue recognition, and tax treatment require review.
Tax dependency: TAX-001
Blocked inputs: VOL-001, RB-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Rural Bank cost view, ODTI revenue view, consolidation.
Notes: Requires a retained-fee and ODTI charge formula; do not infer the split from `PRC-001`.
```

### DevOps Setup Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-COST-004
Line-item name: DevOps setup cost
Stakeholder: Rural Bank
View type: Cost
Category: Managed operations setup
Description: Rural Bank payment to approved DevOps Provider for deployment setup.
Formula: Activated bank environments x approved DevOps setup fee
Input assumption IDs: OPS-001, ADP-001, COL-001, TAX-001
Scenario behavior: Follows bank onboarding and setup timing.
Year applicability: Activation year per participating bank
Recognition trigger: Setup completion or approved milestone.
Payment trigger: DevOps Provider invoice or approved payment schedule.
Cash timing: Invoice and payment timing unresolved.
Counterparty stakeholder: DevOps Provider
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-DEVOPS-REV-001
Reconciliation basis: REC-007
Consolidation treatment: Internal elimination
Commercial Event: Rural Bank environment deployed
Billable Event: Deployment setup event
Commercial Right: DevOps Provider right to setup fee, subject to approved terms.
Commercial Attribution: DevOps Provider managed operations role.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Service agreement, customer ownership, revenue recognition, and tax treatment require review.
Tax dependency: TAX-001
Blocked inputs: ADP-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Structurally Ready
Output use: Rural Bank cost view and DevOps Provider revenue view.
Notes: Rural Bank owns production assets; DevOps Provider operates under delegated authority.
```

### Recurring DevOps Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-COST-005
Line-item name: Recurring DevOps cost
Stakeholder: Rural Bank
View type: Cost
Category: Managed operations
Description: Rural Bank recurring payment to approved DevOps Provider for managed operations.
Formula: Active bank environments x approved monthly managed operations fee
Input assumption IDs: OPS-002, ADP-002, RISK-001, COL-001, TAX-001
Scenario behavior: Follows active banks, churn, and operations period.
Year applicability: Years 1-5
Recognition trigger: Managed operations service period.
Payment trigger: DevOps Provider invoice or approved payment schedule.
Cash timing: Invoice and payment timing unresolved.
Counterparty stakeholder: DevOps Provider
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-DEVOPS-REV-002
Reconciliation basis: REC-008
Consolidation treatment: Internal elimination
Commercial Event: Active managed operations period
Billable Event: Managed operations period
Commercial Right: DevOps Provider right to recurring managed operations fee, subject to approved terms.
Commercial Attribution: DevOps Provider operational responsibility.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Service agreement, delegated authority, revenue recognition, and tax treatment require review.
Tax dependency: TAX-001
Blocked inputs: ADP-002, RISK-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Structurally Ready
Output use: Rural Bank cost view and DevOps Provider revenue view.
Notes: Provider replaceability remains part of the model.
```

### SMS Provider Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-COST-006
Line-item name: SMS provider cost
Stakeholder: Rural Bank
View type: Cost
Category: Optional value-added provider cost
Description: Rural Bank direct provider cost for qualifying SMS notifications.
Formula: Successful payroll events x SMS attachment rate x SMS direct provider cost
Input assumption IDs: VOL-001, ATT-001, CST-001, SMS-001, COL-001, TAX-001
Scenario behavior: Follows payroll volume, attachment rate, provider cost, and delivery success.
Year applicability: Years 1-5
Recognition trigger: SMS provider delivers or bills qualifying SMS event under approved terms.
Payment trigger: SMS Provider invoice or approved payment terms.
Cash timing: Provider invoice and rural-bank payment timing unresolved.
Counterparty stakeholder: Value-Added Provider
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-VASP-REV-001
Reconciliation basis: REC-009
Consolidation treatment: Internal elimination
Commercial Event: Successful recipient payroll distribution with SMS attachment
Billable Event: SMS notification event, if approved
Commercial Right: SMS Provider right to provider charge, subject to approved terms.
Commercial Attribution: SMS Provider capability attachment.
Commercial Waterfall reference: Not applicable in baseline.
Legal or accounting dependency: Provider agreement, privacy, consent, revenue recognition, refund treatment.
Tax dependency: TAX-001
Blocked inputs: VOL-001, ATT-001, CST-001, SMS-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Conditionally Ready
Output use: Rural Bank SMS margin view and VASP revenue view.
Notes: Provider cost is distinct from customer-facing SMS price.
```

### NetBank Or Rail Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-COST-007
Line-item name: NetBank or rail cost
Stakeholder: Rural Bank
View type: Cost
Category: Infrastructure or rail cost
Description: Candidate Rural Bank obligation for account, API, settlement, rail, or transaction-service participation.
Formula: Qualifying activity x approved NetBank or rail fee basis
Input assumption IDs: NET-001, VOL-001, COL-001, TAX-001
Scenario behavior: Follows transaction activity and approved infrastructure fee basis.
Year applicability: Years 1-5
Recognition trigger: Approved infrastructure or rail service event.
Payment trigger: NetBank or infrastructure participant invoice, settlement, or approved payment terms.
Cash timing: Unresolved.
Counterparty stakeholder: NetBank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-NETBANK-REV-001
Reconciliation basis: REC-010
Consolidation treatment: Internal elimination
Commercial Event: Successful recipient payroll distribution, if rail or settlement service applies
Billable Event: Approved infrastructure or rail event
Commercial Right: Infrastructure participant right, if approved.
Commercial Attribution: NetBank or infrastructure role, if applicable.
Commercial Waterfall reference: Not applicable unless a later ordered allocation is approved.
Legal or accounting dependency: Banking, settlement, fee, revenue recognition, and regulatory characterization require review.
Tax dependency: TAX-001
Blocked inputs: NET-001, VOL-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Rural Bank cost view and NetBank structurally blocked view.
Notes: No NetBank fee is recognized while `NET-001` is missing.
```

### Rural Bank Tax Or Government Amount

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-COST-008
Line-item name: Rural Bank tax or government amount
Stakeholder: Rural Bank
View type: Cost
Category: Tax or government amount
Description: Taxes, withholding, duties, or government amounts applicable to Rural Bank lines.
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
Output use: Tax-adjusted Rural Bank and consolidated views.
Notes: Taxes remain separate from operating revenue and provider cost.
```

### Cloud Infrastructure Cost

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-COST-009
Line-item name: Cloud infrastructure cost
Stakeholder: Rural Bank
View type: Cost
Category: External infrastructure cost
Description: Public cloud cost paid by the Rural Bank for its owned production environment.
Formula: Active environments x approved cloud infrastructure cost basis
Input assumption IDs: CLD-001, ADP-002, RISK-001, COL-001, TAX-001
Scenario behavior: Follows active environments, usage, and cloud cost basis.
Year applicability: Years 1-5
Recognition trigger: Cloud service period or usage event.
Payment trigger: Cloud vendor invoice or billing cycle.
Cash timing: Cloud billing timing unresolved.
Counterparty stakeholder: Public cloud vendor
Counterparty line-item reference: Not modeled
Reconciliation basis: External vendor schedule required
Consolidation treatment: External outflow
Commercial Event: Active rural-bank production environment
Billable Event: Cloud service period or usage event
Commercial Right: Cloud vendor contractual right, outside modeled stakeholder set.
Commercial Attribution: Rural Bank infrastructure ownership
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Cloud contract, data protection, accounting, and tax review.
Tax dependency: TAX-001
Blocked inputs: CLD-001, ADP-002, RISK-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Rural Bank cost view and consolidated external outflow.
Notes: The DevOps Provider operates; the Rural Bank owns the production environment.
```

### Rural Bank Net Contribution

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-RB-CONTRIB-001
Line-item name: Rural Bank net contribution
Stakeholder: Rural Bank
View type: Contribution
Category: Net contribution
Description: Rural Bank contribution after retained economics, platform obligations, DevOps costs, SMS costs, infrastructure costs, support burden, and tax treatment.
Formula: Approved retained economics - approved costs - approved taxes
Input assumption IDs: RB-001, VOL-001, LIC-004, LIC-005, OPS-001, OPS-002, CLD-001, NET-001, TAX-001, RISK-002
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
Commercial Attribution: Rural Bank stakeholder view
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Accounting review required before formal financial statement use.
Tax dependency: TAX-001
Blocked inputs: RB-001, VOL-001, CLD-001, NET-001, TAX-001, RISK-002
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Rural Bank stakeholder view and scenario comparison.
Notes: This is not a formal accounting profit-and-loss statement.
```
