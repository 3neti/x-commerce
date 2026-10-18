# 0009: Versioned Pricing Management and Quote API

## Status

Accepted

## Decision

x-commerce is the commercial source of truth for versioned catalog prices and read-only quote estimates. A published catalog version is immutable and becomes effective immediately for new estimates. Quote acceptance, payment, issuance, and accounting remain owned by the consuming domain package.

The package exposes a throttled estimate endpoint at `POST /api/x/v1/quotes`. The endpoint accepts structured catalog line references and returns a deterministic estimate, catalog version, snapshot hash, and quote reference. It does not accept quotes or release funds.

x-change remains the Pay Code-specific facade. It translates voucher instructions into x-commerce catalog inputs and preserves the quote metadata on checkout, funding orders, receipts, and issuance records.

## Management

The host-facing Payment Operations console is the management entry point. Pricing changes are validated, previewed, and published as a complete new version. Existing quotes remain immutable; new quotes use the published version immediately.

Spreadsheet import/export and UI editing are supported by the consuming operations UI. The package owns the catalog and quote contracts, validation rules, and snapshot semantics.

## Boundaries

- x-commerce owns catalogs, prices, quote references, versions, and snapshots.
- x-change owns Pay Code instruction interpretation, issuance, funding, lifecycle, and evidence.
- Hosts own configuration, authentication wiring, branding, and deployment.
- A pricing estimate cannot authorize payment or issuance.
