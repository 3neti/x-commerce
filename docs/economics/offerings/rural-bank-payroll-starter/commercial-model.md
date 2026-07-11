# Rural Bank Payroll Starter Commercial Model

## Status

Current status: instantiated non-numeric commercial model.

This document defines the baseline commercial structure for `OFR-RB-PAYROLL-STARTER`. It does not approve pricing, legal status, tax treatment, accounting treatment, provider costs, royalties, or forecasts.

## Outcome

A participating employer funds and authorizes a payroll distribution through its participating rural bank, resulting in approved recipients receiving payroll value with transaction evidence, reporting, and reconciliation support.

## Roles

| Role | Baseline definition |
| --- | --- |
| Buyer | Employer or payroll sponsor seeking to complete payroll through a participating rural bank. |
| Payer of customer-facing fees | Employer. |
| Funder of payroll value | Employer. |
| Sponsor | Employer in the baseline. |
| Recipient | Approved employee, worker, member, or beneficiary. |
| Collection party | Rural Bank. |
| Customer-facing institution | Rural Bank. |
| Commercial operator | ODTI. |
| IP and technology steward | 3neti. |
| Infrastructure participant | NetBank or another approved banking, account, rail, API, or settlement participant where applicable. |
| Managed operations participant | DevOps Provider. |
| Optional capability provider | SMS Provider. |
| Financing perspective | Investor. |
| Public-interest perspective | Regulator and public-interest view. |

## Commercial Event

Baseline Commercial Event:

```text
A qualifying payroll distribution is successfully completed for an approved recipient within an approved payroll batch.
```

The payroll batch remains relevant for employer reporting, reconciliation, and operational workflow. The recipient-level completion is the baseline Commercial Event because it is narrow enough for the first model.

## Billable Events

Baseline transaction Billable Event:

```text
Each successful recipient payroll disbursement.
```

Additional billable events inside the offering:

- rural-bank activation;
- annual platform subscription period;
- optional SMS notification event.

Deferred billable events:

- completed payroll batch;
- active employer month;
- active payroll customer;
- KYC event;
- email notification;
- rider or CTA;
- feedback or survey event.

## Pricing Layers

The pricing architecture to model is:

```text
Hybrid activation
    +
Annual platform subscription
    +
Per-successful-recipient-disbursement fee
    +
Optional SMS charge
```

Canonical assumptions:

- activation: `LIC-004`;
- annual platform subscription: `LIC-005`;
- transaction fee: `PRC-001`;
- SMS customer-facing price: `VAS-001`;
- SMS attachment rate: `ATT-001`;
- SMS wholesale provider price: `CST-001`.

These assumptions do not approve values. They provide traceability for future calculation.

## Collection Path

Baseline collection path:

```text
Employer
    |
    v
Rural Bank
    |
    +-- retains approved rural-bank economics
    |
    +-- owes ODTI platform obligations
    |
    +-- owes DevOps Provider managed operations fees
    |
    +-- owes SMS Provider wholesale provider charges, if SMS is used
    |
    +-- owes NetBank or rail fees, if approved
    |
    +-- owes taxes, if applicable
```

The rural bank is the exact baseline collection party. Alternative collection structures are deferred variants.

## Cost-Bearing Structure

### Employer

Pays:

- customer-facing payroll service charge;
- optional SMS charge where selected;
- underlying payroll funding value.

The underlying payroll funding value is pass-through and must not be treated as platform revenue.

### Rural Bank

Collects:

- customer-facing payroll service fees;
- optional SMS charges;
- payroll funding value for approved execution, subject to legal and operational structure.

Pays or owes:

- ODTI activation charge;
- ODTI annual platform subscription;
- ODTI per-successful-recipient-disbursement platform charge;
- DevOps Provider setup and recurring managed operations charges;
- SMS Provider direct charges where SMS is selected;
- NetBank or rail charges where approved;
- taxes where applicable.

Retains:

- only approved rural-bank economics.

### ODTI

Receives:

- activation revenue from Rural Bank;
- annual platform subscription revenue from Rural Bank;
- per-successful-recipient-disbursement platform revenue from Rural Bank.

Pays or owes:

- 3neti license consideration or royalty if approved;
- support and commercial administration costs;
- taxes where applicable.

No business-development partner allocation is included in the baseline.

### 3neti

Receives:

- approved license consideration or royalty, if `ROY-001` or a successor is approved.

### DevOps Provider

Receives:

- deployment setup fee from Rural Bank;
- recurring managed operations fee from Rural Bank.

The rural bank owns the production environment.

### SMS Provider

Receives:

- wholesale SMS provider charge from Rural Bank based on qualifying SMS attachment usage.

The wholesale provider price must remain distinct from both the customer-facing SMS price and the SMS provider's internal delivery cost.

## Included Capabilities

Core offering:

- employer payroll instruction;
- approved recipient list;
- successful disbursement;
- evidence;
- reporting;
- reconciliation support.

Optional modeled attachment:

- SMS notification.

## Infrastructure And DevOps Structure

Baseline model:

```text
Hybrid approved-provider model
```

The rural bank owns:

- cloud account;
- virtual servers;
- domains;
- DNS;
- SSL certificates;
- production databases;
- backups;
- production credentials;
- cloud billing relationship;
- business data.

The DevOps Provider operates under delegated authority.

## Commercial Waterfall Treatment

Potentially applicable:

- 3neti royalty or license allocation, if structured through a waterfall;
- future partner allocation after `PAR-001` and Commercial Attribution approval;
- future ODTI/rural-bank transaction allocation if an ordered allocation model is approved.

Direct contractual payment:

- DevOps service fees;
- SMS provider charges;
- NetBank or rail fees;
- taxes.

Not applicable:

- employer payroll funding;
- recipient payroll value;
- investor returns;
- Public Value.

## Deferred Variants

Deferred variants include:

- Rural Bank Digital Disbursement Starter;
- employer direct payment to ODTI;
- ODTI wholesale billing only;
- ODTI-managed DevOps resale;
- sponsor-funded pricing;
- KYC-attached payroll;
- email notification;
- rider or CTA;
- business-development partner allocation;
- channel-partner distribution.
