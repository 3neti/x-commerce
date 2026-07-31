# x-commerce

**x-commerce is the commercial architecture and knowledge system for packaging, pricing, licensing, metering, and sustaining outcomes delivered through the x-change ecosystem.**

This package is the source of truth for versioned Pay Code pricing and deterministic commercial allocation. It also owns the commercial vocabulary, stakeholder incentives, projection assumptions, money-flow categories, and software boundaries needed to turn value-bearing executions into sustainable commercial offerings.

## Foundational Axioms

> The instruction is the transaction.  
> The transaction is the product.  
> The product is the business.

The customer is purchasing an outcome, not a software feature.

## What This Package Is

x-commerce is a reusable package for commercial architecture. Its runtime primitives quote instruction items, capture immutable sale snapshots, and calculate a first-class Commercial Waterfall. Consuming applications remain responsible for authorization, persistence, accounting entries, and money movement.

The first documented ecosystem is the proposed **RBAP Digital Banking Program**, a rural-bank digital services program introduced through the Rural Bankers Association of the Philippines. RBAP is the first subject, not the package boundary.

## What This Package Is Not

x-commerce is not:

- a deployable customer application;
- a catalog, cart, checkout, order, invoice, or billing system;
- a bank integration package;
- a NetBank integration package;
- a replacement for x-legal;
- a source of legal, regulatory, banking, accounting, or tax conclusions;
- evidence that RBAP, NetBank, ODTI, 3neti, or any rural bank has accepted a proposed arrangement.

## Relationship To Adjacent Systems

The current commercial chain is documented as a proposed architecture:

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

x-change answers how a value-bearing instruction is represented, authorized, executed, completed, and evidenced.

x-commerce answers how an outcome is packaged, priced, licensed, sold, metered, commissioned, and made commercially sustainable.

x-legal owns legal characterization, regulatory dependencies, legal traceability, and counsel-facing questions. x-commerce records commercial assumptions and hands legal questions to x-legal instead of settling them locally.

Applications such as x-Payout assemble execution capabilities and approved commercial primitives, once they exist, into deployable products for specific customers.

## Runtime Boundary

The package owns:

- the versioned Pay Code commercial catalog;
- deterministic instruction quotes;
- immutable commercial sale snapshots; and
- pure allocation plans for provider cost, product revenue, partner commission, commercial revenue, and beneficiary principal.

The package does not own:

- Account or Treasury Position posting;
- provider calls or settlement;
- mutable balances;
- issuance authorization; or
- delivery orchestration.

Those effects belong to the consuming settlement system. This keeps the same quote reproducible without allowing a pricing package to move money.

## Installation

```bash
composer require 3neti/x-commerce:^1.0
```

Laravel discovers `XCommerceServiceProvider` automatically. Publish the catalog only when the application intentionally needs to override it:

```bash
php artisan vendor:publish --tag=x-commerce-config
```

Catalog versions become immutable once referenced by an accepted sale snapshot. Create a new catalog version instead of rewriting historical prices.

## Compatibility

- PHP 8.2, 8.3, and 8.4
- Illuminate 11, 12, and 13

The calculation layer is framework-independent. Laravel integration is limited to package discovery and configuration.

## Documentation Map

- [Compass](docs/COMPASS.md): canonical orientation.
- [Architecture](docs/ARCHITECTURE.md): knowledge architecture and future software boundaries.
- [Grammar](docs/GRAMMAR.md): commercial vocabulary and usage discipline.
- [Assumptions Register](docs/ASSUMPTIONS_REGISTER.md): traceable working assumptions.
- [Commercial Model Register](docs/COMMERCIAL_MODEL_REGISTER.md): model inventory.
- [RBAP Digital Banking Program](docs/ecosystems/rbap-digital-banking-program/README.md): first ecosystem.
- [Stakeholders](docs/stakeholders/README.md): "What's in it for me?" views.
- [Economics](docs/economics/README.md): pricing, revenue, cost, and projection models.
- [Products](docs/products/README.md): outcome-centered productization.
- [Operations](docs/operations/README.md): deployment and managed operations.
- [Legal Dependencies](docs/legal/README.md): handoffs to x-legal.
- [Partner Participation](docs/partners/README.md): non-binding participation models.
- [Decisions](docs/decisions/README.md): commercial architecture decision records.
- [Templates](docs/templates): reusable drafting formats.
