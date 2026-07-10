# 0001: Documentation-First Package

## Status

Accepted

## Context

x-commerce is the commercial architecture and reusable package for packaging, pricing, licensing, metering, and sustaining outcomes delivered through the x-change ecosystem.

The immediate need is not a production pricing engine. The immediate need is a durable commercial knowledge system that can distinguish assumptions, proposals, price models, pass-through costs, stakeholder incentives, partner participation, legal dependencies, and future implementation boundaries.

The first concrete subject is the proposed RBAP Digital Banking Program. That program is important, but it should not define the package boundary.

## Decision

x-commerce begins as a reusable Laravel package with documentation-first scope.

The package establishes:

- package identity and vocabulary;
- documentation architecture;
- commercial assumptions;
- stakeholder maps;
- revenue and cost model templates;
- money-flow categories;
- decision records;
- risks;
- open questions;
- roadmap.

Production commerce abstractions remain deferred.

Commercial extraction from x-change remains deferred.

Future extraction will require characterization, public API review, compatibility constraints, tests, ownership-boundary documentation, and a separate decision record.

Financial assumptions must remain traceable.

Stakeholder models must not be represented as binding commitments.

## Consequences

The initial PHP implementation remains intentionally minimal.

This package does not yet contain pricing engines, catalogs, carts, checkout, orders, invoices, licensing enforcement, transaction billing, bank integrations, NetBank integrations, or x-change integrations.

RBAP program documents may be used to develop stakeholder presentations, but they must clearly label proposals, assumptions, scenarios, risks, and unresolved decisions.

The package can evolve into software only after commercial decisions and boundaries are mature enough to justify implementation.
