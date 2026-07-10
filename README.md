# x-commerce

**x-commerce is the commercial architecture and knowledge system for packaging, pricing, licensing, metering, and sustaining outcomes delivered through the x-change ecosystem.**

This package begins as a documentation-first Laravel package. It names the commercial vocabulary, stakeholder incentives, pricing assumptions, money-flow categories, and future software boundaries needed to turn value-bearing executions into sustainable commercial offerings.

## Foundational Axioms

> The instruction is the transaction.  
> The transaction is the product.  
> The product is the business.

The customer is purchasing an outcome, not a software feature.

## What This Package Is

x-commerce is a reusable package for commercial architecture. It describes how outcomes delivered through x-change can eventually be packaged, priced, licensed, sold, metered, commissioned, shared, and maintained.

The first documented ecosystem is the proposed **RBAP Digital Banking Program**, a rural-bank digital services program introduced through the Rural Bankers Association of the Philippines. RBAP is the first subject, not the package boundary.

## What This Package Is Not

x-commerce is not:

- a deployable customer application;
- a production pricing engine;
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

Applications such as x-Payout assemble execution and commercial primitives into deployable products for specific customers.

## Current Status

Current: documentation and commercial knowledge system.

Deferred: production commerce abstractions, x-change extraction, billing engines, licensing enforcement, bank integrations, routes, migrations, models, and UI.

No production commercial logic has yet been extracted from x-change.

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

## Recommended Next Task

Draft the complete RBAP program overview in `docs/ecosystems/rbap-digital-banking-program/00-program-overview.md`, using the scaffolded registers and stakeholder questions as constraints.

