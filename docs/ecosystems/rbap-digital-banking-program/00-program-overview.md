# Program Overview

## Status

Current: first narrative slice for the proposed RBAP Digital Banking Program.

This document is a commercial architecture draft. It is not evidence of approval by RBAP, NetBank, ODTI, 3neti, any rural bank, any provider, or any regulator.

All prices, fees, participation models, adoption assumptions, and money-flow structures in this document are working assumptions or scenarios until approved through the appropriate commercial, legal, and governance process.

## Working Title

RBAP Digital Banking Program.

This working title refers to the first ecosystem documented by x-commerce. It should not make x-commerce structurally dependent on RBAP. The same commercial architecture should later support other ecosystems such as cooperative banks, thrift banks, cooperatives, microfinance institutions, government disbursement programs, enterprise payroll networks, remittance networks, merchant ecosystems, healthcare settlement networks, education and scholarship programs, and banking alliances.

## Executive Summary

The proposed program gives participating rural banks a practical path to offer rural-bank-branded digital transaction services without replacing their existing core banking systems.

The commercial thesis is outcome-centered:

> The instruction is the transaction.  
> The transaction is the product.  
> The product is the business.

The customer is purchasing an outcome, not a software feature.

For this program, commercially meaningful outcomes may include completed payroll disbursements, delivered remittances, verified subsidies, merchant settlements, KYC-qualified payouts, beneficiary notifications, post-transaction calls to action, and feedback-bearing transactions.

x-commerce documents how those outcomes may be packaged, priced, licensed, sold, metered, commissioned, shared, and sustained. It does not implement a commerce engine in this phase.

## Business Problem

Rural banks face increasing pressure to provide digital services while preserving their existing institutional identity, customer relationships, regulatory posture, and core banking investments.

Common constraints include:

- limited capital for full core banking replacement;
- fragmented vendor options;
- difficulty operating cloud infrastructure and integrations;
- customer demand for digital access, remittance, payout, merchant, collection, and notification services;
- limited internal DevOps capacity;
- uncertainty about which digital services are commercially sustainable;
- unclear stakeholder incentives across banks, program sponsors, technology owners, operators, settlement partners, providers, and channel partners.

The program opportunity is to package digital transaction outcomes in a way that participating rural banks can adopt incrementally.

## Proposed Program

The program would make a reusable set of digital transaction capabilities available to participating rural banks through a commercial operating structure led by ODTI and based on 3neti intellectual property.

The initial productization may include:

- branded digital transaction access;
- payroll disbursement;
- domestic remittance;
- inward remittance;
- bulk payouts;
- merchant payments;
- collections;
- government benefits and subsidies;
- Pay Code generation;
- beneficiary validation;
- identity verification;
- transaction notifications;
- feedback;
- surveys;
- post-transaction riders or calls to action;
- cloud deployment;
- integration;
- training;
- managed operations;
- reporting;
- audit and evidentiary services.

The phrase "online CASA" may be preserved as an origin concept, but external terminology remains subject to legal and regulatory analysis through x-legal. This document does not conclude that any arrangement is a deposit account, CASA product, electronic money product, exempt banking activity, payment system, agency model, or other regulated category.

## Commercial Chain

The current working premise is:

```text
3neti
    owns and develops the intellectual property
        |
ODTI
    licenses and commercially operates the technology
        |
Participating rural banks
    obtain licenses through ODTI
        |
Depositors, employers, remitters, merchants, government agencies,
and other customers consume rural-bank-branded digital services
```

This chain must preserve separate roles:

- 3neti owns and develops IP.
- ODTI is a licensee of 3neti and proposed commercial operator.
- Rural banks obtain licenses through ODTI.
- Customers consume rural-bank-branded outcomes.
- NetBank, providers, DevOps operators, channel partners, and business-development partners participate only under approved structures.

Do not collapse 3neti and ODTI into a single economic entity.

## Stakeholder Participation

The program should answer "What is in this for me?" for each stakeholder.

### Rural Bank Customers

Customers may receive more convenient access to digital transaction outcomes such as payouts, remittances, merchant payments, collections, notifications, validation, and program benefits.

They may contribute usage, identity information where required, fees where applicable, and feedback.

### Participating Rural Banks

Rural banks may receive branded digital transaction capability without full core replacement. They may earn or retain revenue from bank-approved services and may strengthen customer relationships.

They may incur license, subscription, maintenance, implementation, cloud, support, training, marketing, compliance, and settlement-related costs.

### RBAP

RBAP may help member banks access a coherent digital services program and may receive approved program, referral, sponsorship, or institutional participation economics if formally agreed.

No RBAP endorsement, acceptance, or compensation model is assumed.

### NetBank

NetBank may participate through settlement accounts, regulated rail access, banking services, or other approved roles.

NetBank economics must be modeled as approved banking, rail, settlement, referral, or participation economics. Pass-through settlement balances must not be treated as revenue.

### ODTI

ODTI may commercially operate the technology licensed from 3neti, contract with rural banks, coordinate providers, and earn revenue from approved licensing, subscription, transaction, value-added service, professional service, and managed operations models.

ODTI revenue must be shown net of provider costs, rail charges, royalties, commissions, taxes, bad debt, and operating costs where applicable.

### 3neti

3neti owns and develops the intellectual property. It may receive license consideration, royalties, or other approved returns from ODTI's commercial operation.

3neti economics must be shown separately from ODTI operating revenue.

### DevOps Provider

The DevOps provider may earn setup and recurring managed operations revenue for deployment, monitoring, backups, restoration exercises, patching, certificates, incident support, release support, and cloud operations.

The contracting model remains unresolved.

### Value-Added Service Providers

Providers may earn usage-based revenue for services such as SMS, email, KYC, OTP, digital signature, selfie, face match, location verification, feedback, surveys, document collection, fraud analysis, reporting, archival evidence, reconciliation, and premium support.

Provider costs must be separated from markup and net platform revenue.

### Investors And Partners

Investors, business-development partners, channel partners, and institutional partners may participate only under approved structures.

Mike, Dens, Obbie, Claire, and the DevOps partner should be treated as possible participation models, scenarios, or decision points until formal approval exists. No compensation percentage, ownership right, success fee, referral fee, or contractual entitlement is assumed.

### Regulators And Public Interest

Regulators and public-sector institutions may be relevant where the program touches banking, settlement, customer protection, data privacy, KYC, public disbursement, or inclusion objectives.

Legal characterization must be handed to x-legal.

## Productized Outcomes

The program should be presented as a menu of outcomes, not a list of software features.

| Outcome | Example buyer or sponsor | Commercial question |
| --- | --- | --- |
| Payroll disbursement | Employer or rural bank client | Is pricing per disbursement, per payroll file, or bundled? |
| Domestic remittance | Sender, rural bank, or sponsor | Which party pays the fee and which rail costs apply? |
| Inward remittance | Remittance partner or beneficiary flow | What regulated partner role is required? |
| Bulk payout | Company, institution, or agency | What evidence proves completion? |
| Merchant payment | Merchant or customer | Is pricing fixed fee, merchant fee, subscription, or bundle? |
| Collections | Merchant, school, cooperative, or institution | Who pays collection fees and how are reversals handled? |
| Government benefit or subsidy | Government agency or program sponsor | What audit evidence and public-sector rules apply? |
| Pay Code-supported transaction | Rural bank, sponsor, or customer | What legal characterization and x-change boundary applies? |
| Notification | Sponsor, bank, or customer | Is SMS or email pass-through, marked up, or bundled? |
| KYC-qualified payout | Sponsor, bank, or program | What provider cost and legal obligations apply? |
| Rider, CTA, feedback, or survey | Sponsor, merchant, or institution | Is pricing per transaction, campaign, response, or placement? |

## Pricing And Commercial Assumptions

The following are working assumptions only.

### Software And Licensing

Model A: perpetual license and maintenance.

- one-time rural-bank license around PHP 100,000;
- annual maintenance around 18% of license price.

Model B: annual subscription.

- annual subscription around PHP 60,000 to PHP 120,000.

Model C: hybrid.

- onboarding or activation around PHP 50,000;
- annual platform subscription around PHP 60,000.

The financial model should compare these alternatives rather than treating one as approved.

### Base Transaction Fee

Working assumption: around PHP 1 to PHP 2 per completed disbursement or qualifying transaction.

The model must define the billable event, paying party, refund treatment, rail cost, bank-retained revenue, ODTI charge, and 3neti royalty if applicable.

### Value-Added Services

Working assumptions:

- SMS notification: around PHP 1.00;
- email notification: around PHP 0.10;
- KYC: around PHP 25.00;
- rider URL or CTA: around PHP 50.00.

Each item must distinguish:

- customer-facing price;
- direct provider cost;
- gross markup;
- gross margin;
- revenue-share allocation;
- taxes;
- settlement or rail charges;
- bank-retained revenue;
- net platform revenue.

The full selling price of KYC, SMS, email, or other third-party services must not be treated as ODTI revenue.

## Managed Cloud And DevOps Model

Managed cloud operations should be treated as an independent commercial layer.

Working pricing assumptions:

- deployment setup around PHP 50,000 per bank;
- monthly maintenance around PHP 10,000 per bank;
- annual recurring total around PHP 120,000 per bank, excluding setup.

Potential responsibilities include cloud provisioning, CI/CD, secrets and environment management, deployment automation, uptime monitoring, backups, restoration exercises, logging, alerting, patching, certificate maintenance, incident response, release support, security hardening coordination, disaster-recovery procedures, cost monitoring, and capacity planning.

Three structures remain under analysis:

| Structure | Advantage | Risk | Margin implication |
| --- | --- | --- | --- |
| Rural bank contracts directly with DevOps provider | Clear provider relationship | ODTI has less control over operations | ODTI earns no cloud margin unless separately contracted |
| ODTI contracts and resells managed operations | Single commercial interface for bank | ODTI carries vendor accountability | ODTI may earn markup above provider cost |
| ODTI bundles managed hosting into subscription | Simpler offer | Cost overruns can erode subscription margin | Wholesale provider cost must be tracked against bundled price |

## Money-Flow Categories

Money-flow documentation must distinguish service fees, provider costs, settlement balances, pass-through funds, company revenue, bank-retained revenue, and customer funds.

### Licensing Flow

```text
Rural Bank
    -> ODTI
        -> 3neti royalty or license consideration
```

### Cloud Operations Flow

```text
Rural Bank
    -> DevOps Provider
```

or:

```text
Rural Bank
    -> ODTI
        -> DevOps Provider
```

### Transaction Revenue Flow

```text
Customer or sponsoring institution
    -> Rural Bank
        -> ODTI platform or transaction charge
            -> 3neti royalty, where applicable
```

### Value-Added Service Flow

```text
Customer or sponsoring institution
    -> Rural Bank or ODTI
        -> Third-party provider cost
        -> Remaining markup and revenue-share participants
```

### Rail And Settlement Economics

```text
Participating Rural Bank
    -> NetBank settlement account and regulated rail usage
        -> applicable banking or transaction charges
```

### Partner Participation

```text
ODTI or another contracting entity
    -> referral, commission, advisory, or success-based compensation
```

## Adoption And Five-Year Model

The program requires a reusable five-year projection framework. The model should support Conservative, Base, and Accelerated scenarios.

Minimum inputs:

- banks onboarded by year;
- active banks by year;
- implementation timing;
- transactions per bank;
- transaction growth;
- license model;
- onboarding revenue;
- annual maintenance;
- subscriptions;
- transaction markup;
- value-added service adoption rates;
- value-added provider costs;
- gross markup;
- cloud setup fees;
- recurring DevOps fees;
- ODTI operating costs;
- 3neti royalties;
- RBAP referral or program participation;
- partner commissions;
- professional services;
- churn;
- taxes;
- bad debt;
- support costs;
- contingency.

Required stakeholder views:

- participating rural bank;
- RBAP;
- NetBank;
- ODTI;
- 3neti;
- DevOps provider;
- value-added service providers;
- investors;
- business-development or channel partners.

No projection should be presented as guaranteed revenue.

## Adoption Phases

### Phase 0: Governance And Validation

Validate assumptions, legal terminology, commercial chain, DevOps options, stakeholder roles, and initial use cases.

### Phase 1: Pilot Bank Or Pilot Cohort

Select one or a small number of rural banks, define the first transaction outcome, confirm onboarding scope, and test operational support boundaries.

### Phase 2: Repeatable Program Package

Standardize licensing, onboarding, managed cloud, support, pricing sheets, value-added service menu, and stakeholder presentation materials.

### Phase 3: Network Expansion

Scale across additional rural banks, refine transaction and value-added service economics, and introduce partner or channel models where approved.

### Phase 4: Multi-Ecosystem Reuse

Adapt the commercial architecture to other ecosystems without making RBAP-specific assumptions part of the x-commerce package boundary.

## Risks And Dependencies

Key risks:

- working assumptions may be treated as approved prices;
- RBAP, NetBank, ODTI, 3neti, or rural bank approval may be implied before acceptance;
- pass-through funds may be mistaken for revenue;
- provider selling prices may be mistaken for platform revenue;
- DevOps responsibilities may be under-scoped;
- support cost may exceed maintenance or subscription revenue;
- legal labels may create unintended regulatory meaning;
- partner participation may be treated as a contractual right before formalization;
- adoption may be slower than the financial model assumes.

Key dependencies:

- x-legal review of terminology and legal characterization;
- provider cost quotes for value-added services;
- DevOps provider quote and service scope;
- rural-bank willingness-to-pay validation;
- NetBank role clarification;
- RBAP participation clarification;
- 3neti to ODTI license and royalty model;
- stakeholder-specific financial model.

## Unresolved Decisions

- Which rural-bank segment is the first target?
- Which use case launches first?
- Which pricing model should be used for the first proposal?
- Which fees are bank-facing, sponsor-facing, customer-facing, or provider-facing?
- Which entity contracts with rural banks?
- Which entity contracts with the DevOps provider?
- Which entity contracts with value-added service providers?
- What is the 3neti royalty basis?
- Does RBAP receive referral, program, sponsorship, or no commercial participation?
- What role does NetBank perform and how is it compensated?
- How are Mike, Dens, Obbie, Claire, and the DevOps partner formalized, if at all?
- Which terms require x-legal approval before external use?
- What evidence is required before projections can be used in stakeholder presentations?

## Documentation Roadmap

This overview should become the narrative source for:

- stakeholder-specific business cases;
- the first five-year financial model;
- money-flow diagrams;
- pricing comparison sheets;
- legal handoff questions;
- DevOps operating model comparison;
- partner participation decision records;
- RBAP presentation source material.

Recommended next documentation steps:

1. Build the assumptions register into a first five-year financial model.
2. Draft stakeholder-specific business cases for rural banks, ODTI, 3neti, RBAP, NetBank, and the DevOps provider.
3. Prepare legal handoff questions for x-legal before external terminology is used.

