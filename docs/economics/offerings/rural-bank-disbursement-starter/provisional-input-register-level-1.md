# Provisional Input Register Level 1: Rural Bank Digital Disbursement Starter

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Authorization status: Draft internal authorization.

Permitted use: Level 1 internal controlled-placeholder model only.

This register authorizes draft placeholder inputs for the first Disbursement Starter workbook and Markdown Level 1 model. These inputs are not evidence-supported, not approved prices, not provider quotes, not institutional commitments, not contracts, not forecasts, and not investment-grade.

## Standard Warning

> This input is provisional and is used only to test commercial-model structure, scenario behavior, affordability, or sensitivity. It is not an approved price, provider quote, institutional commitment, contract, factual operating result, budget, forecast, investment representation, or public claim.

## Model Context

| Field | Value |
| --- | --- |
| Offering | `OFR-RB-DISBURSEMENT-STARTER` |
| Model version | Level 1 draft |
| Scenario set | Conservative, Base, Accelerated |
| Volume method | Component-derived |
| Authorization basis | Draft internal management-model authorization |
| Approving reviewer | Management-model authorization pending formal sign-off |
| Expiry trigger | Replace or reapprove after sponsor, rural-bank, DevOps, cloud, provider, legal, accounting, tax, or pilot evidence is obtained. |
| Workbook path | `artifacts/x-commerce-disbursement-starter-financial-model.xlsx` |

## Draft-Authorized Scenario Inputs

| Provisional Input ID | Assumption ID | Assumption role | Conservative | Base | Accelerated | Unit | Input classification | Authorization status |
| --- | --- | --- | ---: | ---: | ---: | --- | --- | --- |
| `DSP-PI-L1-001` | `ADP-002` | Primitive input | See annual table | See annual table | See annual table | Active banks | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-002` | `ADP-003` | Primitive input | See annual table | See annual table | See annual table | Weighted active months per active bank | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-003` | `DSP-CUS-001` | Primitive input | 2 | 3 | 5 | Active sponsors per active bank | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-004` | `DSP-CUS-002` | Primitive input | 1.0 | 1.5 | 2.0 | Disbursement batches per active sponsor per month | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-005` | `DSP-CUS-003` | Primitive input | 75 | 150 | 250 | Recipients per batch | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-006` | `DSP-VOL-002` | Primitive input | 92% | 96% | 98% | Successful completion rate | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-007` | `DSP-VOL-001` | Derived input | 138.0 | 648.0 | 2450.0 | Successful disbursements per active bank per month | Derived input | Calculated; not independently authorized |
| `DSP-PI-L1-008` | `DSP-PRICE-001` | Primitive pricing input | 2500 | 5000 | 7500 | PHP per newly onboarded sponsor | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-009` | `DSP-PRICE-002` | Primitive pricing input | 1000 | 2000 | 3000 | PHP per active sponsor per active month | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-010` | `DSP-PRICE-003` | Primitive pricing input | 1.50 | 2.00 | 2.50 | PHP per successful recipient disbursement | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-011` | `DSP-RB-001` | Primitive allocation input | 0.50 | 0.75 | 1.00 | PHP retained by Rural Bank per successful disbursement | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-012` | `DSP-ODTI-001` | Primitive cost input | 5000 | 7000 | 9000 | PHP ODTI support cost per active bank-month | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-013` | `DSP-ODTI-002` | Primitive cost input | 15000 | 20000 | 25000 | PHP ODTI implementation cost per newly active bank | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-014` | `OPS-003` | Primitive cost input | 6000 | 5000 | 4500 | PHP DevOps direct cost per active bank-month | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-015` | `CLD-001` | Primitive cost input | 3000 | 3000 | 3500 | PHP cloud cost per active bank-month | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-016` | `RISK-002` | Primitive risk input | 5% | 2% | 1% | Non-collection rate on commercial fees | Controlled placeholder | Draft internal authorization |
| `DSP-PI-L1-017` | `OPS-001` | Primitive revenue input | 50000 | 50000 | 50000 | PHP DevOps setup fee per newly active bank | Active working assumption reused provisionally | Draft internal authorization |
| `DSP-PI-L1-018` | `OPS-002` | Primitive revenue input | 10000 | 10000 | 10000 | PHP DevOps recurring fee per active bank-month | Active working assumption reused provisionally | Draft internal authorization |

## Annual Adoption Inputs

| Scenario | Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | Newly active banks | 1 | 1 | 1 | 1 | 1 |
| Conservative | Active banks | 1 | 2 | 3 | 4 | 5 |
| Conservative | Weighted active months | 3 | 6 | 8 | 9 | 10 |
| Base | Newly active banks | 2 | 2 | 2 | 2 | 2 |
| Base | Active banks | 2 | 4 | 6 | 8 | 10 |
| Base | Weighted active months | 5 | 8 | 9 | 10 | 11 |
| Accelerated | Newly active banks | 3 | 3 | 4 | 4 | 4 |
| Accelerated | Active banks | 3 | 6 | 10 | 14 | 18 |
| Accelerated | Weighted active months | 6 | 9 | 10 | 11 | 11 |

## Optional Notification Draft Inputs

| Provisional Input ID | Assumption ID | Conservative | Base | Accelerated | Unit | Authorization status |
| --- | --- | ---: | ---: | ---: | --- | --- |
| `DSP-PI-L1-019` | `DSP-ATT-001` | 25% | 40% | 60% | Share of successful disbursements receiving notification | Draft internal authorization for optional variant only |
| `DSP-PI-L1-020` | `DSP-VAS-001` | 1.00 | 1.00 | 1.00 | PHP customer-facing notification fee | Draft internal authorization for optional variant only |
| `DSP-PI-L1-021` | `DSP-CST-001` | 0.50 | 0.50 | 0.50 | PHP wholesale notification provider price | Draft internal authorization for optional variant only |
| `DSP-PI-L1-022` | `SMS-001` | 95% | 96% | 97% | Delivery-success indicator | Draft internal authorization for optional variant only |

`SMS-003` failed-message billing and `SMS-004` consent/privacy remain blocked until provider and legal/privacy review exist.

## Revenue Split Rules

Draft split for Level 1 internal modeling only:

- Rural Bank retains 40% of sponsor onboarding fees.
- ODTI receives 60% of sponsor onboarding fees.
- Rural Bank retains 50% of sponsor monthly or program-service fees.
- ODTI receives 50% of sponsor monthly or program-service fees.
- Rural Bank retained recipient-disbursement economics are governed by `DSP-RB-001`.
- ODTI receives the remainder of the sponsor-facing recipient-disbursement fee.
- Rural Bank retains optional notification margin in this draft.

## Blocked Exclusions

| Assumption ID | Treatment | Reason |
| --- | --- | --- |
| `DSP-RB-002` | Blocked | Rural Bank internal support cost evidence required. |
| `NET-001` | Blocked | NetBank or rail role and fee basis required. |
| `NET-002` | Blocked | NetBank internal cost evidence required if modeled. |
| `TAX-001` | Blocked | Tax review required. |
| `ROY-001` | Blocked | Royalty or license decision required. |
| `FIN-001` | Blocked | Discount rate and capital-budgeting assumption not governed. |
| Investor returns | Excluded | No investor-return mechanism in Level 1. |
| Business-development partner allocations | Excluded | Partner participation remains deferred. |
