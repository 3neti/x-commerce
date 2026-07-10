# x-commerce Compass

x-commerce is the commercial Compass for the x-change ecosystem.

## Vision

The ecosystem should be able to explain how a value-bearing instruction becomes a commercially sustainable outcome without confusing product pricing, software licensing, pass-through funds, provider costs, commissions, royalties, or regulated banking activity.

## Purpose

x-commerce exists to make commercial reasoning explicit before it becomes code, contracts, investor claims, or stakeholder presentations.

It should answer:

```text
How is an outcome packaged, priced, licensed, sold, metered, commissioned,
and made commercially sustainable?
```

## Current State

Current: documentation-first Laravel package.

Current: package identity, documentation architecture, commercial vocabulary, registers, templates, and initial RBAP ecosystem map.

Current: no production commerce engine.

Current: no production commercial logic has yet been extracted from x-change.

## Foundational Axioms

> The instruction is the transaction.  
> The transaction is the product.  
> The product is the business.

> The customer is purchasing an outcome, not a software feature.

## Package Boundaries

x-change owns representation, authorization, execution, lifecycle, settlement, redemption or disbursement, execution state, and evidence for value-bearing instructions.

x-commerce owns commercial architecture: offerings, prices, rate cards, licensing plans, maintenance, subscriptions, usage billing, transaction charges, value-added service economics, marketplace participation, commissions, royalties, referrals, revenue sharing, and stakeholder business cases.

x-legal owns legal characterization, regulatory dependencies, legal traceability, and legal handoffs.

Applications such as x-Payout own deployable customer workflows.

## First Ecosystem

The first ecosystem is the proposed RBAP Digital Banking Program. It is a working program subject, not a structural dependency.

Future ecosystems may include cooperative banks, thrift banks, cooperatives, microfinance institutions, government disbursement programs, enterprise payroll networks, remittance networks, merchant ecosystems, healthcare settlement networks, education and scholarship programs, and banking alliances.

## Stakeholders

Initial stakeholder views include rural bank customers, participating rural banks, RBAP, NetBank, ODTI, 3neti, value-added service providers, the DevOps provider, investors, business-development partners, channel partners, regulators, and public-sector institutions.

Named early or informal participants such as Mike, Dens, Obbie, Claire, and the DevOps partner are recorded only as possible participation models, scenarios, or decision points until formal approval exists.

## Commercial Domains

- licensing and sublicensing;
- subscriptions and maintenance;
- onboarding and implementation;
- managed cloud operations;
- base transaction fees;
- value-added services;
- provider costs and markups;
- commissions, referrals, royalties, and revenue sharing;
- professional services;
- marketplace economics;
- stakeholder financial models;
- five-year projection frameworks;
- sensitivity and risk analysis.

## Documentation Map

The package is organized into foundations, ecosystems, stakeholders, economics, products, operations, legal dependencies, partners, decisions, and reusable templates.

## Invariants

- An idea is not an assumption. An assumption is not a price. A price is not a contract. A projection is not a promise.
- Availability is not authority; authority is not applicability; applicability is not implementation.
- Gross transaction value, pass-through funds, deposits, settlement balances, service fees, company revenue, provider costs, and net platform revenue must not be collapsed.
- Legal characterization belongs in x-legal.
- Execution behavior belongs in x-change.
- Deployable product behavior belongs in the relevant application.
- Stakeholder-specific documents must answer: "What is in this for me?"
- Every material number should eventually be traceable to a strategic assumption, provider quote, institutional proposal, signed contract, observed cost, market reference, or approved pricing decision.

## Non-Goals

This slice does not implement pricing, quotations, catalogs, carts, checkout, orders, invoices, licensing enforcement, transaction billing, bank integrations, NetBank integrations, routes, migrations, models, UI, or x-change extraction.

## Risks

- Stakeholders may interpret working assumptions as approved commercial terms.
- Legal terminology such as CASA, deposits, electronic money, or banking activity may be used too loosely.
- Pass-through funds or third-party service charges may be mistaken for platform revenue.
- Informal partner participation may be mistaken for contractual rights.
- RBAP, NetBank, ODTI, 3neti, or rural bank acceptance may be implied before approval.

## Unresolved Decisions

- Which rural-bank pricing model should be offered first?
- Whether managed cloud is contracted directly, resold, or bundled.
- How 3neti royalties are calculated and documented.
- Whether RBAP receives referral, program, or institutional participation economics.
- Whether NetBank economics are settlement fees, platform participation, referral value, or another approved structure.
- How early business-development participants are formalized.
- Which legal labels can be used externally after x-legal review.

## Phased Roadmap

Phase 1: documentation and commercial architecture.

Phase 2: stakeholder-specific financial models and presentation source material.

Phase 3: approved commercial contracts, pricing primitives, and package interfaces.

Phase 4: characterized extraction of commercial logic from x-change, if separately approved.

## Implementation Status

The PHP implementation is intentionally minimal. The package currently exposes only a Laravel service provider so it can be discovered as a package while the commercial architecture is documented.

## Recommended Next Task

Draft `docs/ecosystems/rbap-digital-banking-program/00-program-overview.md` as the complete RBAP program overview and use it to validate the stakeholder map, assumptions register, and five-year model template.

