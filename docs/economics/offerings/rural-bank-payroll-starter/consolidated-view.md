# Rural Bank Payroll Starter Consolidated View

## Status

Current status: non-numeric consolidated view.

This view defines how stakeholder lines will be consolidated for `OFR-RB-PAYROLL-STARTER`. It does not present numeric results.

## Consolidation Boundary

Internal modeled participants:

- Rural Bank;
- ODTI;
- 3neti;
- DevOps Provider;
- Value-Added Provider for SMS;
- NetBank, structurally, while financially blocked.

External participants:

- Employer customer;
- employee or payroll recipients;
- public cloud vendor;
- government tax authorities;
- any provider not explicitly represented as a stakeholder view.

## External Inflows

External inflows are money entering the modeled ecosystem from outside participants.

Current external inflow line items:

- `OFR-RB-PAYROLL-STARTER-CUST-COST-001` mirrored to `OFR-RB-PAYROLL-STARTER-RB-REV-001`;
- `OFR-RB-PAYROLL-STARTER-CUST-COST-002` mirrored to `OFR-RB-PAYROLL-STARTER-RB-REV-002`, if SMS is selected.

These are the customer-facing commercial fees. They are not approved amounts.

## Pass-Through Amounts

Pass-through amounts move through the commercial model but are not operating revenue.

Current pass-through line items:

- `OFR-RB-PAYROLL-STARTER-CUST-PASS-001`;
- `OFR-RB-PAYROLL-STARTER-RB-PASS-001`;
- `OFR-RB-PAYROLL-STARTER-NETBANK-MEMO-001`, if settlement balances, customer funds, or payroll value are visible in infrastructure records.

Payroll funding value, recipient value, deposits, float, settlement balances, and customer funds are not revenue.

## Internal Eliminations

Internal eliminations are transfers between internal modeled participants.

Current internal-elimination pairs:

- `OFR-RB-PAYROLL-STARTER-RB-COST-001` and `OFR-RB-PAYROLL-STARTER-ODTI-REV-001`;
- `OFR-RB-PAYROLL-STARTER-RB-COST-002` and `OFR-RB-PAYROLL-STARTER-ODTI-REV-002`;
- `OFR-RB-PAYROLL-STARTER-RB-COST-003` and `OFR-RB-PAYROLL-STARTER-ODTI-REV-003`;
- `OFR-RB-PAYROLL-STARTER-RB-COST-004` and `OFR-RB-PAYROLL-STARTER-DEVOPS-REV-001`;
- `OFR-RB-PAYROLL-STARTER-RB-COST-005` and `OFR-RB-PAYROLL-STARTER-DEVOPS-REV-002`;
- `OFR-RB-PAYROLL-STARTER-RB-COST-006` and `OFR-RB-PAYROLL-STARTER-VASP-REV-001`;
- `OFR-RB-PAYROLL-STARTER-RB-COST-007` and `OFR-RB-PAYROLL-STARTER-NETBANK-REV-001`, if NetBank fee basis is approved;
- `OFR-RB-PAYROLL-STARTER-ODTI-COST-001` and `OFR-RB-PAYROLL-STARTER-3NETI-REV-001`, if royalty basis is approved.

These transfers should not be counted as additional consolidated ecosystem revenue.

## External Outflows

External outflows are payments to parties outside the modeled ecosystem.

Current external-outflow line items:

- `OFR-RB-PAYROLL-STARTER-RB-COST-009`: public cloud vendor cost;
- external components of `OFR-RB-PAYROLL-STARTER-VASP-COST-001`, if the SMS Provider pays outside network or delivery providers;
- external components of `OFR-RB-PAYROLL-STARTER-DEVOPS-COST-002`, if the DevOps Provider uses external tooling.

External outflows require canonical cost assumptions before numeric modeling.

## Tax Or Government Amounts

Tax and government amounts remain separate from operating revenue and provider costs.

Current tax line items:

- `OFR-RB-PAYROLL-STARTER-RB-COST-008`;
- `OFR-RB-PAYROLL-STARTER-ODTI-TAX-001`.

Additional tax lines may be required for 3neti, DevOps Provider, Value-Added Provider, NetBank, or investor flows after tax review.

`TAX-001` blocks tax-adjusted totals.

## Financing

Investor flows are classified as Financing, not operating revenue.

Current financing line item:

- `OFR-RB-PAYROLL-STARTER-INV-FIN-001`.

Investor return is not an operational Commercial Waterfall allocation.

## Non-Financial Indicators

Non-financial indicators must not be monetized merely to increase total value.

Current non-financial line items include:

- customer administrative work avoided;
- customer cost of doing nothing;
- payroll completion;
- recipient access;
- role clarity;
- provider-cost visibility;
- Commercial Waterfall transparency;
- customer-fund separation;
- governance fidelity;
- public confidence.

## Blocked Totals

The following consolidated outputs remain blocked:

- tax-adjusted consolidated contribution, blocked by `TAX-001`;
- ODTI contribution after royalty, blocked by `ROY-001`;
- consolidated output requiring royalty elimination, blocked by `ROY-001`;
- SMS margin, blocked by `ATT-001`, `CST-001`, and `SMS-001`;
- NetBank contribution, blocked by `NET-001`;
- cash-flow timing, blocked by `COL-001`;
- public-interest completion score, blocked by `PUB-001` and `VOL-002`.

## Double-Counting Controls

1. Employer payroll funding is Pass-through.
2. Employer fees are counted once as External inflow.
3. Rural Bank-to-ODTI payments are Internal eliminations.
4. ODTI-to-3neti royalties are Internal eliminations.
5. Rural Bank-to-DevOps payments are Internal eliminations while DevOps Provider is inside the model.
6. Rural Bank-to-SMS Provider payments are Internal eliminations while the Value-Added Provider is inside the model.
7. External cloud charges remain External outflows.
8. Taxes remain separate.
9. Investor capital remains Financing.
10. Public Value remains Non-financial.

## No Numeric Results

This document intentionally contains no peso totals, transaction counts, margin percentages, forecasts, or controlled placeholder values.
