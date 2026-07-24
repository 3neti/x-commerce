# 0008: Make x-commerce The Catalog And Quote Source Of Truth

## Status

Accepted

## Context

Rationalized Pay Code prices currently exist in execution applications and have also been used in projection work. Duplicated prices can drift, and a later price change can make an old sale impossible to reproduce unless the exact catalog, attribution, and Waterfall versions are preserved.

The commercial source of truth belongs in x-commerce. x-change remains responsible for instruction execution and must consume approved commercial results rather than independently authoring prices.

## Decision

x-commerce owns the versioned Pay Code commercial catalog using integer minor units.

A deterministic quote freezes:

- source Commercial Event reference;
- catalog reference, version, currency, item identity, and unit prices;
- selected instruction references and quantities;
- Commercial Waterfall policy snapshot;
- Commercial Attribution snapshot;
- calculated allocation plan;
- total commercial charge.

Accepting a quote creates a deterministic immutable sale snapshot that adds the buyer reference, acceptance-event reference, and caller-supplied acceptance timestamp.

The same normalized inputs produce the same quote and sale references. Price changes require a new catalog version.

Deprecated catalog items remain visible for compatibility but cannot create a new quote.

## Boundaries

The catalog is package configuration in this slice, not a tenant-editable database table.

Quote and sale snapshots are immutable in-memory objects, not durable orders, invoices, account debits, credits, payables, or settlement instructions.

x-change integration, persistence, authorization, accounting recognition, tax treatment, and Treasury posting remain separate decisions.

No commission, partner, royalty, or provider percentage is invented by this decision. Attribution is snapshotted for traceability, while actual allocation rules still require an approved Waterfall policy.

## Consequences

Future x-change pricing adapters must read x-commerce's catalog and remove their duplicate price authority after characterization tests prove parity.

Projection engines must consume the same catalog and Waterfall calculator instead of maintaining separate price formulas.
