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

`OFR-RB-PAYROLL-STARTER-RB-REV-003` is not listed here because it is a derived retained-economics view of `OFR-RB-PAYROLL-STARTER-RB-REV-001`, not another external inflow.

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

NetBank is structurally inside the baseline modeled ecosystem. Therefore any approved Rural Bank-to-NetBank fee and corresponding NetBank revenue are classified as `Internal elimination` in this baseline. A model that treats NetBank as external should be created as a separate variant.

## External Outflows

External outflows are payments to parties outside the modeled ecosystem.

Current external-outflow line items:

- `OFR-RB-PAYROLL-STARTER-RB-COST-009`: public cloud vendor cost;
- `OFR-RB-PAYROLL-STARTER-VASP-COST-001`: SMS delivery cost paid to external carriers or aggregators;
- `OFR-RB-PAYROLL-STARTER-DEVOPS-COST-002`: external DevOps tooling cost;
- `OFR-RB-PAYROLL-STARTER-3NETI-COST-003`: external legal or IP-service cost.

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

- `OFR-RB-PAYROLL-STARTER-RB-REV-003`: derived Rural Bank retained transaction economics;
- `OFR-RB-PAYROLL-STARTER-RB-CONTRIB-001`: derived Rural Bank net contribution;
- `OFR-RB-PAYROLL-STARTER-ODTI-CONTRIB-001`: derived ODTI net operating contribution;
- `OFR-RB-PAYROLL-STARTER-3NETI-COST-001`: internal 3neti R&D cost view;
- `OFR-RB-PAYROLL-STARTER-3NETI-COST-002`: internal 3neti stewardship cost view;
- `OFR-RB-PAYROLL-STARTER-3NETI-CONTRIB-001`: derived 3neti net contribution;
- `OFR-RB-PAYROLL-STARTER-NETBANK-COST-001`: internal NetBank operating-burden view;
- `OFR-RB-PAYROLL-STARTER-NETBANK-REV-002`: derived NetBank recognized-income view;
- `OFR-RB-PAYROLL-STARTER-DEVOPS-COST-001`: internal DevOps operating-cost view;
- `OFR-RB-PAYROLL-STARTER-DEVOPS-CONTRIB-001`: derived DevOps Provider gross margin;
- `OFR-RB-PAYROLL-STARTER-VASP-RISK-001`: SMS failed-message risk view;
- `OFR-RB-PAYROLL-STARTER-VASP-CONTRIB-001`: derived SMS Provider margin;
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

Derived totals, margins, retained amounts, and contribution lines are reporting outputs, not additional money flows. They remain financially meaningful, but they must not be aggregated as new inflows or outflows.

## Blocked Totals

The following consolidated outputs remain blocked:

- tax-adjusted consolidated contribution, blocked by `TAX-001`;
- ODTI contribution after royalty, blocked by `ROY-001`;
- consolidated output requiring royalty elimination, blocked by `ROY-001`;
- Rural Bank or ODTI SMS margin, blocked by `ATT-001`, `CST-001`, and `SMS-001`;
- SMS Provider margin, blocked by `CST-001`, `SMS-002`, `SMS-003`, `ATT-001`, and `SMS-001`;
- NetBank contribution, blocked by `NET-001`;
- cash-flow timing, blocked by `COL-001`;
- public-interest completion score, blocked by `PUB-001` and `VOL-002`.

## Double-Counting Controls

1. Employer payroll funding is Pass-through.
2. Employer fees are counted once as External inflow.
3. Payroll funding is Pass-through.
4. Rural-bank retained economics are derived outputs, not additional inflows.
5. Rural Bank-to-ODTI amounts are Internal eliminations.
6. ODTI-to-3neti royalty amounts are Internal eliminations.
7. Rural Bank-to-DevOps amounts are Internal eliminations while DevOps Provider is inside the model.
8. Rural Bank-to-SMS Provider amounts are Internal eliminations while the Value-Added Provider is inside the model.
9. External cloud, telecom, legal, and other vendor costs remain External outflows.
10. Taxes remain separate.
11. Investor capital remains Financing.
12. Public-interest indicators remain Non-financial.
13. Derived contribution and margin lines must not be aggregated as new money flows.

## No Numeric Results

This document intentionally contains no peso totals, transaction counts, margin percentages, forecasts, or controlled placeholder values.
