# Rural Bank Digital Disbursement Starter Commercial Model

## Status

Current status: instantiated non-numeric commercial model.

This document defines the baseline commercial structure for `OFR-RB-DISBURSEMENT-STARTER`. It does not approve pricing, legal status, tax treatment, accounting treatment, provider costs, royalties, or forecasts.

## Outcome

A sponsor funds and authorizes a batch of approved disbursements through a participating rural bank, resulting in approved recipients receiving value with transaction evidence, reporting, and reconciliation support.

## Roles

| Role | Baseline definition |
| --- | --- |
| Buyer | Sponsor or institution seeking to complete approved payouts through a participating rural bank. |
| Payer of customer-facing fees | Sponsor. |
| Funder of disbursement value | Sponsor or funding institution. |
| Recipient | Approved beneficiary, member, claimant, payee, vendor, volunteer, participant, or other approved recipient. |
| Collection party | Rural Bank. |
| Customer-facing institution | Rural Bank. |
| Commercial operator | ODTI. |
| IP and technology steward | 3neti. |
| Infrastructure participant | NetBank or another approved banking, account, rail, API, or settlement participant where applicable. |
| Managed operations participant | DevOps Provider. |
| Optional capability provider | Notification provider. |
| Financing perspective | Investor. |
| Public-interest perspective | Regulator and public-interest view. |

## Commercial Event

Baseline Commercial Event:

```text
A qualifying disbursement is successfully completed for an approved recipient under an approved sponsor instruction.
```

The disbursement batch remains relevant for sponsor workflow, reporting, reconciliation, and funding controls. Recipient-level successful completion is the baseline Commercial Event because it is narrow enough to reconcile and can support per-recipient pricing where approved.

## Billable Events

Candidate transaction Billable Event:

```text
Each successful recipient disbursement.
```

Additional candidate billable events inside the offering:

- sponsor onboarding;
- sponsor monthly or program-service period;
- optional notification event;
- optional eligibility or KYC event if required;
- exception, reversal, or correction handling where approved.

Deferred billable events:

- completed disbursement batch;
- government-program audit package;
- remittance event;
- merchant collection event;
- recipient-paid access event.

## Pricing Layers

The pricing architecture to instantiate is:

```text
Sponsor onboarding
    +
Sponsor monthly or program-service fee
    +
Per-successful-recipient-disbursement fee
    +
Optional notification charge
```

Candidate assumption IDs to govern later:

- sponsor onboarding fee: `DSP-PRICE-001` candidate;
- sponsor monthly or program-service fee: `DSP-PRICE-002` candidate;
- per-successful-recipient-disbursement fee: `DSP-PRICE-003` candidate;
- rural-bank retained disbursement economics: `DSP-RB-001` candidate;
- notification attachment rate: `DSP-ATT-001` candidate or reusable `ATT-001` if canonicalized as cross-offering;
- notification customer-facing price: `DSP-VAS-001` candidate or reusable `VAS-001` if the same SMS product applies;
- notification provider price: `DSP-CST-001` candidate or reusable `CST-001` if the same wholesale SMS terms apply.

These candidate IDs are not yet added to the Assumptions Register and do not approve values.

## Collection Path

Baseline collection path:

```text
Sponsor
    |
    v
Rural Bank
    |
    +-- retains approved rural-bank economics
    |
    +-- owes ODTI platform and program obligations
    |
    +-- owes DevOps Provider managed operations fees where allocated
    |
    +-- owes notification provider charges, if notification is used
    |
    +-- owes NetBank or rail fees, if approved
    |
    +-- owes taxes, if applicable
```

The rural bank is the exact baseline collection party. Alternative collection structures are deferred variants.

## Cost-Bearing Structure

### Sponsor

Pays:

- sponsor onboarding fee, if approved;
- sponsor monthly or program-service fee, if approved;
- per-successful-recipient-disbursement fee, if approved;
- optional notification charge where selected;
- underlying disbursement funding value.

The underlying disbursement funding value is pass-through and must not be treated as platform revenue.

### Rural Bank

Collects:

- sponsor-facing commercial fees;
- optional notification charges;
- disbursement funding value for approved execution, subject to legal and operational structure.

Pays or owes:

- ODTI onboarding, program-service, transaction-platform, or reporting obligations where approved;
- DevOps Provider managed operations obligations where allocated;
- notification provider direct charges where notification is selected;
- NetBank or rail charges where approved;
- taxes where applicable.

Retains:

- only approved rural-bank economics.

### ODTI

Receives:

- approved ODTI share of sponsor onboarding fee;
- approved ODTI share of sponsor monthly or program-service fee;
- approved per-successful-recipient-disbursement platform revenue;
- approved reporting, reconciliation, or program administration revenue where later approved.

Pays or owes:

- 3neti license consideration or royalty if approved;
- support and commercial administration costs;
- provider costs borne by ODTI if a later variant selects that structure;
- taxes where applicable.

No business-development partner allocation is included in the baseline.

### 3neti

Receives:

- approved license consideration or royalty, if `ROY-001` or a successor is approved.

### DevOps Provider

Receives:

- deployment setup or recurring managed operations fees from Rural Bank where allocated to the disbursement program or shared platform.

The rural bank owns the production environment.

### Notification Provider

Receives:

- wholesale provider charge from Rural Bank based on qualifying notification attachment usage, unless a later variant selects ODTI as the contracting party.

The wholesale provider price must remain distinct from both the customer-facing notification price and the provider's internal delivery cost.

## Included Capabilities

Core offering:

- sponsor instruction;
- approved recipient list;
- funded disbursement batch;
- successful recipient disbursement;
- evidence;
- reporting;
- reconciliation support;
- exception visibility.

Optional modeled attachment:

- recipient notification.

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
- notification provider charges;
- NetBank or rail fees;
- taxes.

Not applicable:

- sponsor-funded disbursement value;
- recipient disbursement value;
- investor returns;
- Public Value.

## Deferred Variants

Deferred variants include:

- government-procured benefits and subsidies;
- inward remittance;
- domestic person-to-person remittance;
- merchant collections;
- merchant payments;
- recipient-paid fee structures;
- KYC-required disbursement;
- ODTI direct collection from sponsor;
- ODTI-managed DevOps resale;
- business-development partner participation;
- Channel Partner participation.

