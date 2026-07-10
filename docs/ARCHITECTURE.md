# Architecture

This document separates current knowledge architecture from future software architecture. It does not claim that future interfaces already exist.

## Current Knowledge Architecture

Current: x-commerce is a documentation-first package organized around commercial reasoning artifacts:

- foundations for philosophy and package boundary;
- ecosystems for program-specific analysis;
- stakeholders for "What's in it for me?" views;
- economics for pricing, cost, revenue, and projection models;
- products for outcome-centered offerings;
- operations for implementation and managed service structures;
- legal for handoffs to x-legal;
- partners for informal and formal participation models;
- decisions for commercial architecture decisions;
- templates for repeatable analysis.

Current: x-commerce owns the knowledge structure and architectural definitions for commercial concepts. It does not yet own production software implementations of pricing, catalogs, checkout, subscriptions, invoices, metering, commissions, royalties, or revenue sharing.

## Documentation Sources And Projections

Current source artifacts include assumptions, model registers, stakeholder documents, decision records, and program documents.

Proposed projections include stakeholder presentations, commercial memoranda, pricing sheets, five-year financial views, board-level summaries, investor summaries, and partner proposals.

Every projection should retain links back to assumptions and source documents.

## Boundaries With Adjacent Packages

### x-change

Current boundary: execution domain.

x-change answers how a value-bearing instruction is represented, authorized, executed, completed, and evidenced.

x-commerce must not extract or modify x-change behavior during this phase.

### x-legal

Current boundary: legal characterization and regulatory traceability.

x-commerce records legal dependencies and handoff questions, but it does not settle whether a product is a deposit account, CASA product, electronic money, exempt banking activity, payment system, agency model, or another legal category.

### Applications

Current boundary: deployable customer products such as x-Payout.

Applications assemble capabilities into specific operating workflows. x-commerce should not become a customer application UI.

## Stakeholder Financial Model Structure

Proposed model dimensions:

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

Required scenario labels: Conservative, Base, and Accelerated.

Deferred: executable spreadsheet, database schema, billing engine, or projection API.

## Pricing And Revenue Model Concepts

Current concepts include:

- customer-facing price;
- direct provider cost;
- gross markup;
- gross margin;
- taxes;
- settlement or rail charges;
- bank-retained revenue;
- net platform revenue;
- royalty;
- commission;
- referral fee;
- revenue share;
- pass-through cost.

Third-party service selling prices must not be treated as ODTI revenue without separating provider cost, markup, tax, and revenue-share allocation.

## Future Software Architecture

Future and exploratory reusable software primitives may include:

```php
PriceProvider
PricingContext
PricedOffering
CommercialOffering
UsageMeter
BillableEvent
CommissionPolicy
RevenueSharePolicy
RoyaltyPolicy
Catalog
Cart
Checkout
Order
Invoice
Subscription
Entitlement
```

These names are exploratory. They are not implemented in this scaffold and do not represent current production ownership.

## Integration Boundaries

Deferred integrations:

- x-change execution events;
- NetBank settlement or rail usage;
- third-party KYC, SMS, email, OTP, signature, identity, fraud, archive, or reporting providers;
- accounting systems;
- tax systems;
- invoicing systems;
- customer-facing application flows.

## Extraction Discipline

Future extraction from x-change requires:

1. inventory commercial concepts currently implemented by x-change;
2. distinguish execution-domain logic from commercial-domain logic;
3. identify public APIs and compatibility constraints;
4. document ownership boundaries;
5. create characterization tests;
6. prepare an extraction decision record;
7. migrate incrementally without changing behavior.

Until then, x-commerce records the commercial architecture without claiming ownership of existing execution behavior.
