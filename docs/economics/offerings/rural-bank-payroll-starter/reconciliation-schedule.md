# Rural Bank Payroll Starter Reconciliation Schedule

## Status

Current status: non-numeric reconciliation schedule.

This schedule defines mirrored line-item relationships for `OFR-RB-PAYROLL-STARTER`. It contains no amounts.

## Reconciliation Records

### REC-001: Payroll Funding Value

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-001`

Source stakeholder: Customer

Source line-item ID: `OFR-RB-PAYROLL-STARTER-CUST-PASS-001`

Destination stakeholder: Rural Bank

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-RB-PASS-001`

Commercial basis: Employer funds underlying payroll value for execution.

Consolidation treatment: Pass-through

Timing difference: Possible funding, execution, settlement, and receipt timing difference.

Tax or withholding difference: Payroll-related tax or withholding questions are outside this commercial model and require legal/accounting review.

Blocked assumption IDs: `COL-001`, `VOL-002`

Status: Blocked for numeric timing; structurally ready.

Notes: Payroll funding value is not operating revenue.

### REC-002: Payroll Service Fee

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-002`

Source stakeholder: Customer

Source line-item ID: `OFR-RB-PAYROLL-STARTER-CUST-COST-001`

Destination stakeholder: Rural Bank

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-RB-REV-001`

Commercial basis: Employer pays customer-facing payroll service fee to Rural Bank.

Consolidation treatment: External inflow

Timing difference: Billing and collection timing unresolved.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `PRC-001`, `VOL-001`, `COL-001`, `TAX-001`

Status: Structurally ready; numeric calculation blocked.

Notes: This external inflow is later split into retained bank economics and obligations to other parties.

### REC-003: Optional SMS Fee

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-003`

Source stakeholder: Customer

Source line-item ID: `OFR-RB-PAYROLL-STARTER-CUST-COST-002`

Destination stakeholder: Rural Bank

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-RB-REV-002`

Commercial basis: Employer pays optional SMS charge to Rural Bank where SMS is selected.

Consolidation treatment: External inflow

Timing difference: Same as customer fee collection unless separately billed.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `ATT-001`, `VOL-001`, `TAX-001`

Status: Conditionally ready; numeric calculation blocked.

Notes: SMS is optional but instantiated.

### REC-004: Rural Bank Activation Obligation To ODTI

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-004`

Source stakeholder: Rural Bank

Source line-item ID: `OFR-RB-PAYROLL-STARTER-RB-COST-001`

Destination stakeholder: ODTI

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-ODTI-REV-001`

Commercial basis: Rural Bank owes ODTI activation charge under hybrid model.

Consolidation treatment: Internal elimination

Timing difference: Invoice, recognition, and collection timing unresolved.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `TAX-001`, `COL-001`

Status: Structurally ready; tax-adjusted totals blocked.

Notes: Uses `LIC-004`.

### REC-005: Rural Bank Annual Platform Subscription To ODTI

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-005`

Source stakeholder: Rural Bank

Source line-item ID: `OFR-RB-PAYROLL-STARTER-RB-COST-002`

Destination stakeholder: ODTI

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-ODTI-REV-002`

Commercial basis: Rural Bank owes ODTI annual platform subscription under hybrid model.

Consolidation treatment: Internal elimination

Timing difference: Subscription period, invoicing, collection, and recognition timing unresolved.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `ADP-002`, `TAX-001`, `COL-001`

Status: Structurally ready; numeric calculation blocked.

Notes: Uses `LIC-005`.

### REC-006: Rural Bank Transaction Platform Obligation To ODTI

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-006`

Source stakeholder: Rural Bank

Source line-item ID: `OFR-RB-PAYROLL-STARTER-RB-COST-003`

Destination stakeholder: ODTI

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-ODTI-REV-003`

Commercial basis: Rural Bank owes ODTI platform charge for successful recipient payroll disbursements.

Consolidation treatment: Internal elimination

Timing difference: Collection and remittance timing unresolved.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `VOL-001`, `PRC-001`, `TAX-001`, `COL-001`

Status: Structurally ready; numeric calculation blocked.

Notes: The exact split between rural-bank retained economics and ODTI transaction revenue requires `RB-001`.

### REC-007: DevOps Setup

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-007`

Source stakeholder: Rural Bank

Source line-item ID: `OFR-RB-PAYROLL-STARTER-RB-COST-004`

Destination stakeholder: DevOps Provider

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-DEVOPS-REV-001`

Commercial basis: Rural Bank pays DevOps Provider deployment setup fee under approved-provider model.

Consolidation treatment: Internal elimination

Timing difference: Setup completion, invoice, and payment timing unresolved.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `ADP-001`, `TAX-001`, `COL-001`

Status: Structurally ready; tax-adjusted totals blocked.

Notes: Uses `OPS-001`.

### REC-008: DevOps Managed Operations

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-008`

Source stakeholder: Rural Bank

Source line-item ID: `OFR-RB-PAYROLL-STARTER-RB-COST-005`

Destination stakeholder: DevOps Provider

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-DEVOPS-REV-002`

Commercial basis: Rural Bank pays recurring managed operations fee to DevOps Provider.

Consolidation treatment: Internal elimination

Timing difference: Monthly service period, invoicing, and payment timing unresolved.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `ADP-002`, `TAX-001`, `COL-001`

Status: Structurally ready; tax-adjusted totals blocked.

Notes: Uses `OPS-002`.

### REC-009: SMS Provider Charge

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-009`

Source stakeholder: Rural Bank

Source line-item ID: `OFR-RB-PAYROLL-STARTER-RB-COST-006`

Destination stakeholder: Value-Added Provider

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-VASP-REV-001`

Commercial basis: Rural Bank owes SMS Provider wholesale provider charge for qualifying SMS usage.

Consolidation treatment: Internal elimination

Timing difference: Message delivery, provider invoicing, and rural-bank payment timing unresolved.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `VOL-001`, `ATT-001`, `CST-001`, `SMS-001`, `TAX-001`

Status: Conditionally ready; numeric calculation blocked.

Notes: Provider cost must remain distinct from customer-facing SMS price.

### REC-010: NetBank Or Rail Fee

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-010`

Source stakeholder: Rural Bank

Source line-item ID: `OFR-RB-PAYROLL-STARTER-RB-COST-007`

Destination stakeholder: NetBank

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-NETBANK-REV-001`

Commercial basis: Possible approved account, API, rail, settlement, or transaction-service fee.

Consolidation treatment: Internal elimination

Timing difference: Service event, settlement, billing, and recognition timing unresolved.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `NET-001`, `VOL-001`, `TAX-001`

Status: Blocked.

Notes: No NetBank fee or revenue is recognized while structure remains unresolved.

### REC-011: ODTI Royalty Or License Payable To 3neti

Reconciliation ID: `OFR-RB-PAYROLL-STARTER-REC-011`

Source stakeholder: ODTI

Source line-item ID: `OFR-RB-PAYROLL-STARTER-ODTI-COST-001`

Destination stakeholder: 3neti

Destination line-item ID: `OFR-RB-PAYROLL-STARTER-3NETI-REV-001`

Commercial basis: Possible royalty or license consideration for use of 3neti IP.

Consolidation treatment: Internal elimination

Timing difference: Accrual, invoice, payable, and payment timing unresolved.

Tax or withholding difference: `TAX-001`

Blocked assumption IDs: `ROY-001`, `TAX-001`, `COL-001`

Status: Blocked.

Notes: No royalty amount should be calculated until `ROY-001` or a successor is approved.

## External And Non-Mirrored Lines

The following lines are intentionally not mirrored to another modeled stakeholder:

- `OFR-RB-PAYROLL-STARTER-RB-COST-008`: tax or government amount;
- `OFR-RB-PAYROLL-STARTER-ODTI-TAX-001`: tax or government amount;
- `OFR-RB-PAYROLL-STARTER-RB-COST-009`: public cloud vendor external outflow;
- non-financial customer, investor, and public-interest indicators.

These lines still require consolidation treatment.
