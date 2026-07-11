# 0003: Payroll Starter Economic Treatment

## Status

Accepted

## Date

2026-07-12

## Decision Question

How should the first numeric `OFR-RB-PAYROLL-STARTER` model treat payroll-specific economics, shared rural-bank platform costs, and modernization costs?

This decision approves the economic-treatment architecture for the Level 1 controlled placeholder model. It does not approve prices, provider quotes, tax treatment, NetBank fees, 3neti royalties, investor returns, legal characterization, accounting treatment, contracts, public forecasts, or software implementation.

## Context

The provisional candidate pack and economic-coherence review showed that transaction retention alone cannot support the full fixed cost of a dedicated rural-bank deployment at the current modeled payroll volumes.

The Base candidate produced approximately:

```text
268.8 successful payroll disbursements
per active rural bank per month
```

At the Base retained amount of:

```text
PHP 0.50 per successful disbursement
```

the Rural Bank would retain only:

```text
PHP 134.40 per month
```

from recipient transaction economics, before employer-level commercial units.

The same model carried fixed monthly modernization costs of approximately:

```text
PHP 18,000 per month
```

from annual platform subscription, managed DevOps, and cloud infrastructure before internal bank support, NetBank fees, taxes, implementation costs, setup costs, compliance costs, and other obligations.

This result does not mean Payroll Starter is commercially impossible. It means Payroll Starter should not be treated as the sole economic justification for the entire rural-bank-owned digital platform.

## Decision

Adopt the following economic treatment:

> Payroll Starter will be modeled primarily as an incremental commercial offering operating on a rural-bank-owned digital platform.

> Shared platform and institutional-modernization costs will be evaluated separately through a Rural Bank Modernization Portfolio view.

> Full-cost stand-alone Payroll economics will remain visible as a stress test, but will not be the primary operating model.

## Economic View Hierarchy

```text
Primary operating view:
Incremental Payroll Economics

Companion investment view:
Rural Bank Modernization Portfolio

Later management allocation view:
Shared Platform Allocation

Stress-test view:
Full-Cost Stand-Alone Payroll
```

## Rationale

Payroll Starter is the first modeled offering, not necessarily the sole user of the platform.

Cloud, DevOps, monitoring, backups, security, CI/CD, domains, certificates, observability, and common infrastructure can support future offerings such as remittance, collections, merchant payments, government payouts, ayuda, reimbursements, petty cash, incentives, and other Pay Code-supported services.

Forcing Payroll Starter alone to recover the full modernization cost would be commercially misleading unless Payroll is intentionally sold as a stand-alone deployment. The model should still show the full-cost view because it is a useful warning and stress test.

## Commercial Units For The Level 1 Model

The revised Payroll Starter model will use these commercial units:

| Commercial unit | Treatment |
| --- | --- |
| Rural Bank Platform Access | Rural Bank pays activation and annual platform subscription using `LIC-004` and `LIC-005`. This belongs to the modernization portfolio and ODTI access-revenue view. |
| Employer Onboarding | Employer pays a one-time onboarding fee represented by `EMP-001`. |
| Employer Monthly Payroll Service | Employer pays a recurring employer-level payroll-service fee represented by `EMP-002`. |
| Recipient Disbursement | Employer pays the per-successful-recipient-disbursement fee represented by `PRC-001`. |
| Optional SMS Attachment | Optional SMS uses `ATT-001`, `VAS-001`, `CST-001`, `SMS-001`, `SMS-003`, and `SMS-004`. |
| Payroll Batch Fee | Deferred from the first baseline. `BAT-001` remains a candidate concept but is not part of the Level 1 model. |

## Revenue Split For The Level 1 Model

The Level 1 model will use one explicit provisional split:

| Fee | Rural Bank provisional share | ODTI provisional share | Rationale |
| --- | ---: | ---: | --- |
| Employer onboarding fee, `EMP-001` | 40% | 60% | ODTI carries more setup, configuration, training, and launch work, while the Rural Bank owns the customer relationship. |
| Employer monthly payroll-service fee, `EMP-002` | 60% | 40% | Rural Bank owns the employer relationship and front-line support; ODTI supports platform operations, reporting, and reconciliation. |
| Recipient disbursement fee, `PRC-001` | Fixed retained amount through `RB-001` | Remainder after `RB-001` | Preserves the existing transaction split while making the employer-level fee layers explicit. |
| Optional SMS fee, `VAS-001` | SMS gross margin in the Level 1 baseline | 0% markup in the Level 1 baseline | Keeps the first optional attachment simple until provider pricing and commercial terms are evidenced. |

Business-development partner participation is not included. 3neti royalty remains blocked by `ROY-001`. NetBank fee remains blocked by `NET-001`. Tax remains blocked by `TAX-001`.

## Cost Treatment

### Incremental Payroll Costs

The primary operating model includes payroll-specific costs such as:

- payroll-specific ODTI implementation;
- payroll-specific ODTI support;
- employer onboarding work;
- payroll-specific reporting;
- payroll reconciliation;
- transaction-dependent costs;
- optional SMS wholesale cost;
- bad debt or non-collection on commercial fees;
- payroll-specific Rural Bank support where separately modeled.

### Shared Modernization Costs

The Rural Bank Modernization Portfolio view separately shows:

- annual platform subscription;
- platform activation;
- DevOps setup;
- recurring DevOps managed operations;
- public cloud;
- common monitoring;
- common backups;
- common security;
- common institutional readiness;
- infrastructure shared with future offerings.

The actual payer remains the Rural Bank. Separating the view does not change the cash payer.

### Stress-Test View

The full-cost stand-alone stress test allocates the shared modernization costs to Payroll Starter. It may remain negative. The model must not hide that result.

## Consequences

- The first Level 1 model may show Payroll Starter as incrementally coherent while still negative under a full-cost stand-alone stress test.
- Rural Bank modernization must eventually be evaluated across a portfolio of offerings, not by Payroll alone.
- Shared platform allocation remains deferred until at least one additional offering is instantiated.
- `EMP-001` and `EMP-002` should be added to the Assumptions Register before the Level 1 model is calculated.
- `ALLOC-001`, `ALLOC-002`, and `PLT-001` remain deferred until shared platform allocation is mature enough to govern.

## Non-Goals

This decision does not:

- authorize final pricing;
- authorize a provider fee;
- authorize NetBank economics;
- authorize 3neti royalty economics;
- authorize tax treatment;
- authorize investor returns;
- authorize public claims;
- create a contract;
- create software;
- modify x-change.

## Follow-Up

Produce the first Level 1 numeric Payroll Starter Offering Economics model using controlled placeholders, explicit warnings, and blocked exclusions.
