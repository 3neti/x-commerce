# 0002: Select First Modeled Offering

## Status

Accepted

## Date

2026-07-11

## Decision Question

Which offering should be used to instantiate the first assumption-driven, stakeholder-reconciled, five-year commercial model?

This decision selects and defines the first offering to model. It does not approve pricing, forecasts, legal characterization, contracts, tax treatment, accounting treatment, software implementation, or x-change integration.

## Context

x-commerce now has:

- a canonical commercial model;
- a governed assumptions register;
- a five-year projection framework;
- stakeholder financial-view templates;
- a Commercial Waterfall foundation;
- stakeholder commercial theses.

The next step is to force that architecture to meet one real offering without jumping directly into numeric forecasting.

The first modeled offering should be narrow, repeatable, understandable, and traceable. It should make buyer, payer, recipient, outcome, Commercial Event, Billable Event, stakeholder participation, assumptions, and counterparty relationships explicit.

The first model should not be the entire RBAP Digital Banking Program. Ecosystem-wide projections may be created only by aggregating validated offering-level models.

## Candidate Comparison

| Candidate | Strengths | Risks or complexity |
| --- | --- | --- |
| Rural Bank Payroll Starter | Clear business outcome; identifiable employer or funding customer; recurring transaction pattern; familiar rural-bank use case; measurable administrative pain; clear customer and recipient groups; natural notification attachment; repeat-use indicators; strong fit with "Payments take seconds. Work takes days."; recurring commercial relationship potential. | Requires payroll-cycle assumptions; employer and employee counts; payroll correction handling; employment-related obligations; account or recipient eligibility; privacy and KYC analysis where applicable. |
| Rural Bank Digital Disbursement Starter | Broad applicability; usable for ayuda, incentives, petty cash, reimbursements, emergency support, and other payouts; may avoid some payroll-specific assumptions. | Too broad for a first model; buyer, payer, sponsor, and recipient may vary by use case; pricing, eligibility, evidence, and legal dependencies may differ; generic assumptions may hide incompatible transaction types. |

The decision prioritizes model clarity over market breadth.

## Decision

Select:

```text
OFR-RB-PAYROLL-STARTER
```

as the first fully modeled x-commerce offering.

The Rural Bank Payroll Starter is selected because it has the clearest first-model boundary:

- the buyer can be identified as an employer or payroll sponsor;
- the payer and funder can be separated from the recipient;
- the outcome is recurring and concrete;
- the Commercial Event can be tied to successful payroll completion;
- the Billable Event can be tested at the successful-recipient-disbursement level;
- the assumptions register already contains a payroll-specific volume assumption;
- stakeholder financial views can be reconciled without modeling the whole ecosystem.

The Rural Bank Digital Disbursement Starter remains deferred. It is important, but its breadth makes it a better second or later model after the payroll offering proves the modeling discipline.

## Selected Offering Definition

Offering ID: `OFR-RB-PAYROLL-STARTER`

Offering name: Rural Bank Payroll Starter

Status: Accepted as the first modeled offering. Not approved for launch, pricing, legal characterization, or numeric projection.

Primary outcome: A participating employer funds and authorizes a payroll distribution through a participating rural bank, resulting in approved recipients receiving payroll value with evidence, reporting, and reconciliation support.

Target buyer: Employer, business owner, cooperative, school, association, NGO, church, or similar institution that needs to complete payroll or payroll-like recurring distributions through a participating rural bank.

Payer: Baseline model assumes the employer or payroll sponsor pays customer-facing service fees. Rural-bank platform access fees are paid by the participating rural bank to ODTI under the selected pricing architecture.

Recipient: Approved payroll recipient, employee, worker, member, or beneficiary identified by the employer or payroll sponsor.

Sponsor, if different: Baseline model assumes the employer is also the sponsor and funder. Third-party sponsor, government, donor, or institutional-funding variants are deferred.

Participating rural bank role: Customer-facing financial institution that offers the approved payroll service under its own institutional identity, maintains the customer relationship, supports the employer, and participates in approved fee economics.

ODTI role: Commercial operator that packages, coordinates, implements, supports, and commercially administers the offering based on 3neti technology and approved provider relationships.

3neti role: Knowledge, architecture, and intellectual-property steward. Any 3neti license consideration or royalty remains subject to `ROY-001` or its successor.

NetBank or infrastructure role: Possible regulated banking, account, API, settlement, rail, or transaction-services participant where the offering requires that participation. Fees, responsibilities, and legal characterization remain unresolved.

DevOps role: Approved managed operations provider operating the rural-bank-owned production environment under delegated authority.

Value-added provider roles: Notification provider for optional SMS attachment in the first model. KYC, email, OTP, feedback, riders, and enhanced reporting remain optional or deferred variants unless required by the selected execution and legal model.

Business development partner role, if any: Not included in the baseline financial model unless attribution and `PAR-001` or its successor are approved. The role remains available as a controlled variant.

Investor relevance: Investor view should track company and ecosystem indicators, capital requirements, and potential return mechanisms. Investor return is not part of the operational Commercial Waterfall.

Public-interest relevance: Public-interest view should track completion, transparency, role clarity, evidence quality, customer freedom, provider replaceability, and governance fidelity. Public Value is not monetized merely to inflate the model.

## Outcome Definition

The customer is purchasing a completed payroll outcome, not payroll software, a Pay Code, an API, or a notification.

Working outcome definition:

> A participating employer funds and authorizes a payroll distribution through its rural bank, resulting in approved recipients receiving payroll value with evidence, reporting, reconciliation support, and optional attached capabilities.

This outcome is intentionally narrower than digital banking. It is one completed business result.

## Buyer, Payer, Recipient, And Sponsor

Baseline structure:

| Role | Baseline definition |
| --- | --- |
| Buyer | Employer or payroll sponsor seeking to complete payroll through a participating rural bank. |
| Payer of customer-facing fees | Employer or payroll sponsor. |
| Funder of underlying payroll value | Employer or payroll sponsor. |
| Recipient | Approved payroll recipient, employee, worker, member, or beneficiary. |
| Sponsor | Same as buyer and funder in the baseline model. |
| Rural-bank contracting relationship | Rural bank maintains the customer-facing relationship with the employer and obtains platform access through ODTI. |
| ODTI contracting relationship | ODTI contracts with the rural bank for platform access, implementation, and commercial operation, subject to final legal and commercial review. |
| Value-added service fee bearer | Employer or payroll sponsor in the baseline where optional capabilities are selected. Alternative fee-bearing structures are deferred. |
| DevOps or platform cost bearer | Rural bank pays platform access fees to ODTI and, under the baseline DevOps model, pays an approved DevOps provider directly for managed operations. |

Deferred variants:

- third-party sponsor funds payroll or benefit distribution;
- rural bank absorbs some fees as customer acquisition or retention cost;
- employer pays ODTI directly;
- employee or recipient pays a disclosed fee;
- ODTI bundles and resells DevOps;
- government or institutional program sponsor pays on behalf of employers or recipients.

These variants must not be blended into the first model.

## Commercial Event And Billable Event

### Commercial Event

Baseline Commercial Event:

> A qualifying payroll distribution is successfully completed for an approved recipient within an approved payroll batch.

The completed payroll batch may be used for reporting, reconciliation, and employer experience, but the first model should treat successful recipient-level completion as the primary Commercial Event because it is narrower and easier to reconcile.

### Billable Event

Baseline Billable Event for transaction pricing:

> Each successful recipient payroll disbursement.

Other billable events may exist in the same offering:

- activation or onboarding of a participating rural bank;
- annual platform subscription period;
- optional SMS notification event;
- optional KYC or identity event if included;
- future reporting, evidence, feedback, or rider events if approved.

Deferred billable-event alternatives:

- completed payroll batch;
- active employer per month;
- active payroll customer per bank;
- bundle of transactions;
- zero-fee or sponsor-paid transaction model.

Naming a Billable Event does not approve a fee. Pricing remains governed by the assumptions register and later commercial decisions.

## Included And Optional Capabilities

### Core Offering

The first model should include:

- participating rural-bank-branded payroll service;
- employer or sponsor instruction;
- approved payroll recipient list;
- successful disbursement to approved recipients;
- transaction evidence;
- payroll batch reporting;
- reconciliation support;
- support boundaries for failed, reversed, or corrected events.

### Optional Attachments For First Model

The first model may include SMS notification as the initial optional capability attachment.

SMS is useful because it is easy to understand, visible to customers and recipients, and already represented in the assumptions register through `VAS-001`, `ATT-001`, and `CST-001`.

### Deferred Or Conditional Attachments

The following are not part of the baseline model unless a later offering-specific decision includes them:

- KYC or identity services;
- email notification;
- OTP;
- recipient validation;
- feedback;
- rider or CTA;
- surveys;
- enhanced reporting;
- archival evidence;
- analytics.

KYC may become required if legal, regulatory, operational, or provider rules require it. Until then, it remains a conditional variant, not a baseline capability.

## Baseline Infrastructure And DevOps Model

The baseline operating model for the first financial model is:

```text
Hybrid approved-provider model
```

The model assumes:

- ODTI defines or approves operational standards for the offering;
- the rural bank selects an approved DevOps provider;
- the rural bank owns its production environment;
- the DevOps provider operates under delegated authority;
- the rural bank pays the DevOps provider directly for setup and managed operations in the baseline model.

The architectural invariant remains:

```text
The DevOps provider operates.
The rural bank owns.
```

The rural bank should own:

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

Deferred DevOps variants:

- direct rural-bank relationship without ODTI certification;
- ODTI-managed DevOps contract;
- ODTI resale or bundled managed operations;
- shared wholesale infrastructure model.

These variants may be modeled later, but they should not be mixed into the first baseline.

## Baseline Pricing Architecture To Test

The first model should test this pricing architecture:

```text
Hybrid activation
    +
Annual platform subscription
    +
Per-successful-recipient-disbursement fee
    +
Optional capability charges
```

This structure is selected for modeling because it separates:

- activation and implementation work;
- recurring platform access and support;
- transaction-aligned usage;
- optional value-added services.

It also allows bank affordability, ODTI operating sustainability, 3neti royalty treatment, provider costs, and optional capability attachment to be tested separately.

This decision does not approve any price, fee, percentage, markup, royalty, commission, or tax treatment.

Deferred pricing architectures:

- perpetual license plus annual maintenance;
- annual subscription only;
- transaction-only;
- employer-paid bundle;
- bank-paid bundle;
- ODTI-managed bundled DevOps;
- sponsor-paid or public-program pricing.

## Commercial Waterfall Applicability

Not every payment belongs in a Commercial Waterfall.

Baseline treatment:

| Relationship | Initial treatment |
| --- | --- |
| Employer customer-facing fee | External inflow into the offering model. Exact collection party must be selected in the instantiated model. |
| Rural-bank retained economics | Requires exact line-item definition and counterparty reconciliation. |
| ODTI platform access or transaction charge | Revenue to ODTI, mirrored as cost or payable to the paying stakeholder. |
| 3neti royalty or license consideration | Blocked until `ROY-001` or successor is approved. May use a Commercial Waterfall or separate contractual calculation later. |
| SMS provider cost | Direct provider cost, not automatically a Commercial Waterfall allocation. |
| NetBank or rail fee | Direct infrastructure or provider cost unless a later approved model defines a different arrangement. |
| DevOps setup and managed operations | Baseline direct rural-bank expense mirrored to DevOps Provider revenue. Not a Commercial Waterfall allocation. |
| Business development partner allocation | Not in baseline. If approved later, requires Commercial Attribution, `PAR-001` or successor, and likely a Commercial Waterfall. |
| Investor return | Ownership or financing mechanism, not operational Commercial Waterfall allocation. |
| Public Value | Non-financial output, not allocation. |

The first model should use Commercial Waterfall mechanics only where ordered stakeholder allocation is genuinely required.

## Canonical Assumption Map

### Required For Baseline Model

The first offering model requires the following canonical assumptions or successor records:

- `OFR-RB-PAYROLL-STARTER`
- `ADP-001`
- `ADP-002`
- `VOL-001`
- `LIC-004`
- `LIC-005`
- `PRC-001`
- `OPS-001`
- `OPS-002`
- `ROY-001`
- `RISK-001`
- `RISK-002`
- `TAX-001`
- `PUB-001`

The following required assumption records are missing and must be added before numeric modeling:

- payroll customers per active rural bank;
- payroll frequency;
- average recipients per payroll customer;
- payroll completion or failure rate;
- rural-bank retained amount or formula;
- ODTI retained amount or formula;
- NetBank or rail fee basis, if infrastructure participation is required;
- cloud infrastructure cost;
- ODTI support cost per active bank or active payroll customer;
- implementation effort or cost;
- payment, invoicing, and collection timing;
- reversal and refund treatment;
- customer preparation time;
- reconciliation burden;
- recipient satisfaction or equivalent outcome-quality indicator.

### Optional For Baseline Variants

Use these assumptions only if the related optional capability or participant is included:

- `ATT-001`
- `VAS-001`
- `CST-001`
- `ATT-002`
- `VAS-003`
- `CST-002`
- `PAR-001`

SMS is the preferred first optional attachment. If SMS is included, `ATT-001`, `VAS-001`, and `CST-001` are required for the SMS line items.

KYC is conditional. If KYC is included, `ATT-002`, `VAS-003`, and `CST-002` are required, and legal and privacy dependencies must be surfaced.

Business development partner participation is conditional. If included, `PAR-001` or a successor must be approved, and attribution must be documented.

### Not Applicable To Baseline

The following assumptions are not part of the selected baseline model:

- `LIC-001`
- `LIC-002`
- `LIC-003`
- `VAS-002`
- `VAS-004`

These may be used in later alternative pricing, email, rider, or CTA variants, but they should not be mixed into the first baseline model.

## Blocked Assumptions

The following currently block numeric modeling:

- `ADP-001`: banks onboarded by year;
- `ADP-002`: active banks by year;
- `VOL-001`: successful payroll transactions per active bank per month;
- `ATT-001`: SMS attachment rate, if SMS is included;
- `CST-001`: SMS direct provider cost, if SMS is included;
- `ATT-002`: KYC attachment rate, if KYC is included;
- `CST-002`: KYC direct provider cost, if KYC is included;
- `ROY-001`: 3neti royalty basis;
- `PAR-001`: business development partner allocation basis, if partner participation is included;
- `RISK-001`: churn;
- `RISK-002`: bad debt or non-collection;
- `TAX-001`: tax treatment;
- `PUB-001`: public-interest completion indicator;
- missing payroll-customer, payroll-frequency, recipients, failure-rate, retained-fee, infrastructure-cost, support-cost, collection-timing, reversal, and operational-value assumptions listed above.

A blocked assumption must not be replaced by a spreadsheet guess. It must be resolved, approved, or explicitly identified as a controlled scenario placeholder before any numeric projection is presented.

## Stakeholder Financial Views To Instantiate

Instantiate the following non-numeric stakeholder views for the first offering:

- customer view;
- rural-bank view;
- ODTI view;
- 3neti view;
- NetBank view;
- DevOps provider view;
- value-added provider view for SMS if SMS is included;
- investor view;
- public-interest view.

Do not instantiate the business-development partner view in the baseline until partner participation, attribution, duration, and `PAR-001` or successor are approved. Keep it as a controlled variant.

Do not instantiate a channel-partner view. Channel Partner remains deferred pending emergence of a genuine channel-distribution model.

## Exact Counterparty Requirement

The future instantiated offering model must not use ambiguous counterparty language.

Do not leave entries such as:

```text
Customer, ODTI, NetBank, or other collection party
```

Every inter-stakeholder amount must point to an exact counterparty line or be explicitly split into separate line items.

Examples:

- Rural Bank DevOps expense must mirror DevOps Provider managed operations revenue.
- Rural Bank platform subscription cost must mirror ODTI platform subscription revenue.
- ODTI royalty expense or payable must mirror 3neti royalty income or receivable, if `ROY-001` is approved.
- ODTI provider cost must mirror the Value-Added Provider revenue, if ODTI bears that cost.
- Employer-paid SMS fee must be split between provider cost, markup, tax, and any approved participant allocation.

If timing, legal structure, withholding, tax, or collection treatment creates differences, the difference must be shown rather than hidden.

## Consolidation Treatment

Every future offering line item must include:

```text
Consolidation treatment:
```

Allowed values:

| Treatment | Meaning |
| --- | --- |
| Internal elimination | Amount transferred between participants inside the modeled ecosystem. Eliminate from consolidated ecosystem contribution. |
| External inflow | Money received from outside the modeled ecosystem, such as customer-paid platform fees or sponsor payments. |
| External outflow | Money paid to a participant outside the modeled ecosystem, such as an external SMS provider, identity provider, or cloud vendor. |
| Pass-through | Amount collected or transferred without becoming operating revenue, such as customer funds, recipient value, settlement balances, or certain rail charges. |
| Financing | Capital, debt, investment, or ownership-related flow. Do not treat as operating revenue. |
| Tax or government amount | Tax, withholding, or government collection. Track separately from operating revenue. |
| Non-financial | Operational, customer, confidence, public-interest, or governance indicator. |

## Double-Counting Controls

The first offering model must preserve these controls:

1. Internal stakeholder transfers are not additional ecosystem revenue.
2. Customer funds and gross transaction value are not platform revenue.
3. Provider selling price is not ODTI revenue unless provider cost is separated.
4. Investor capital is not operating revenue.
5. Public Value is not monetized merely to increase total value.
6. Taxes and withholding remain separate.
7. One transaction fee should not be counted independently in every stakeholder view.

## Consequences

This decision narrows the next modeling task.

The package should next instantiate `OFR-RB-PAYROLL-STARTER` across the stakeholder financial-view templates without numeric values.

The instantiation should use:

- canonical assumption IDs;
- exact counterparty references;
- blocked-input visibility;
- consolidation treatment;
- Commercial Event and Billable Event definitions;
- Commercial Waterfall references where applicable.

Numeric modeling remains blocked until the required assumptions are Active, Approved, or explicitly authorized as controlled scenario placeholders.

## Deferred Work

Deferred work includes:

- modeling the Rural Bank Digital Disbursement Starter;
- selecting permanent ecosystem-wide DevOps commercial structure;
- approving pricing;
- approving 3neti royalty basis;
- approving partner participation;
- legal, tax, and accounting characterization;
- x-change execution handoff;
- software implementation.

## Non-Goals

This decision does not:

- create numeric projections;
- populate stakeholder financial views with values;
- approve pricing;
- approve transaction volume;
- approve provider costs;
- approve royalties;
- approve partner allocations;
- approve tax treatment;
- create a spreadsheet;
- create software;
- create database schemas;
- modify x-change;
- begin legal analysis;
- draft the x-legal handoff.
