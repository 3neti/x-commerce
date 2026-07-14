# Consolidated View: Rural Bank Digital Disbursement Starter

## Status

Current status: non-numeric consolidated structure.

This view defines how `OFR-RB-DISBURSEMENT-STARTER` should consolidate once assumptions are governed. It does not present numeric consolidated results.

## Model Boundary

Internal modeled participants:

- Rural Bank;
- ODTI;
- 3neti;
- DevOps Provider;
- Value-Added Provider for optional notification;
- NetBank, structurally, even while fee treatment remains blocked.

External participants:

- Sponsor customer;
- approved recipients;
- public cloud vendor;
- external carrier, aggregator, or notification delivery vendor where not modeled as the Value-Added Provider;
- government tax authorities;
- any provider not explicitly represented as a stakeholder view.

## External Inflows

External inflows are money entering the modeled ecosystem from the Sponsor.

| Flow | Source line | Destination line | Notes |
| --- | --- | --- | --- |
| Sponsor onboarding fee | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-COST-001` | `OFR-RB-DISBURSEMENT-STARTER-RB-REV-001` | External inflow once collected by Rural Bank. |
| Sponsor monthly or program-service fee | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-COST-002` | `OFR-RB-DISBURSEMENT-STARTER-RB-REV-002` | External inflow once collected by Rural Bank. |
| Per-successful-recipient-disbursement fee | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-COST-003` | `OFR-RB-DISBURSEMENT-STARTER-RB-REV-003` | Fee is external inflow; disbursement funding value is not revenue. |
| Optional notification fee | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-COST-004` | `OFR-RB-DISBURSEMENT-STARTER-RB-REV-004` | External inflow only when notification is selected. |

## Pass-Through Amounts

Pass-through amounts move through the model but are not operating revenue.

| Flow | Source line | Destination line | Notes |
| --- | --- | --- | --- |
| Sponsor-funded disbursement value | `OFR-RB-DISBURSEMENT-STARTER-SPONSOR-PASS-001` | `OFR-RB-DISBURSEMENT-STARTER-RB-PASS-001` | Recipient value. Not revenue, not cost of sales, and not platform income. |

Recipient receipt is tracked through public-interest and sponsor outcome lines rather than treated as stakeholder revenue.

## Internal Eliminations

These transfers are internal under the baseline model boundary.

| Transfer | Source line | Destination line |
| --- | --- | --- |
| Rural Bank-to-ODTI onboarding share | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-001` | `OFR-RB-DISBURSEMENT-STARTER-ODTI-REV-001` |
| Rural Bank-to-ODTI monthly or program-service share | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-002` | `OFR-RB-DISBURSEMENT-STARTER-ODTI-REV-002` |
| Rural Bank-to-ODTI transaction-platform amount | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-003` | `OFR-RB-DISBURSEMENT-STARTER-ODTI-REV-003` |
| Rural Bank-to-DevOps managed operations amount | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-004` | `OFR-RB-DISBURSEMENT-STARTER-DEVOPS-REV-001` |
| Rural Bank-to-Value-Added Provider notification charge | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-005` | `OFR-RB-DISBURSEMENT-STARTER-VASP-REV-001` |
| Rural Bank-to-NetBank or rail amount | `OFR-RB-DISBURSEMENT-STARTER-RB-COST-006` | `OFR-RB-DISBURSEMENT-STARTER-NETBANK-REV-001` |
| ODTI-to-3neti royalty or license consideration | `OFR-RB-DISBURSEMENT-STARTER-ODTI-COST-001` | `OFR-RB-DISBURSEMENT-STARTER-3NETI-REV-001` |

Stakeholder revenue figures are entity-level views and include internal transfers. They are not additive. Consolidated external revenue counts sponsor inflows once and eliminates internal transfers.

## External Outflows

External outflows include:

- public-cloud charges if allocated to this offering;
- external carrier or aggregator charges not represented as modeled stakeholder revenue;
- external legal, accounting, tax, or professional-service costs;
- other providers outside the modeled boundary.

## Tax Or Government Amounts

Taxes, duties, withholding, and government collections remain blocked by `TAX-001` and related legal or accounting review.

## Financing

Investor capital, loans, founder advances, or other capital flows are financing. They are not operating revenue from this offering.

## Non-Financial Indicators

Public-interest indicators include:

- recipient access;
- completion evidence;
- sponsor accountability;
- fund-flow clarity;
- exception visibility;
- provider replaceability;
- governance fidelity;
- reduced administrative burden.

These indicators are non-financial unless a later approved model monetizes them through governed assumptions.

## Double-Counting Controls

1. Sponsor-funded disbursement value is pass-through.
2. Sponsor commercial fees are counted once as external inflows.
3. Rural Bank-to-ODTI transfers are internal eliminations.
4. ODTI-to-3neti royalties are internal eliminations.
5. Rural Bank-to-DevOps amounts are internal eliminations where DevOps Provider is inside the model.
6. Rural Bank-to-Value-Added Provider amounts are internal eliminations where the provider is inside the model.
7. External carrier, cloud, legal, accounting, and professional-service charges remain external outflows.
8. Taxes remain separate.
9. Investor capital remains financing.
10. Public Value remains non-financial.
11. Derived contributions, retained amounts, and margins are reporting outputs, not new money flows.

## Blocked Consolidated Outputs

The following consolidated outputs remain blocked:

- consolidated contribution;
- tax-adjusted totals;
- royalty-adjusted entity economics;
- NetBank-fee-adjusted results;
- provider-cost-adjusted notification margin;
- cash-flow timing;
- working capital;
- NPV, IRR, and payback.

