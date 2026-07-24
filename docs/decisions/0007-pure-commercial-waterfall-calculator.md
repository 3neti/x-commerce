# 0007: Introduce The Pure Commercial Waterfall Calculator

## Status

Accepted

## Context

Decision 0001 established x-commerce as documentation-first and required a separate decision before commercial concepts became software. Repeated offering, stakeholder, provider-cost, commission, royalty, referral, and partner-attribution work has now established the Commercial Waterfall as a stable shared concept.

Runtime accounting and financial projections need one deterministic calculation grammar. Implementing wallet transfers, payables, pricing extraction, or settlement before that grammar exists would preserve the current ambiguity instead of resolving it.

## Decision

x-commerce will own a pure, framework-independent Commercial Waterfall calculator as its first reusable software primitive.

The first contract:

- accepts an immutable in-memory policy version;
- accepts one source Commercial Event reference and one allocation base;
- uses integer minor units and one uppercase ISO currency;
- applies fixed priority deduction or allocation lines in deterministic sequence;
- assigns the exact remainder to one final residual line;
- returns a stable immutable allocation plan;
- performs no I/O and reads no mutable global state.

The same policy and input must always produce the same normalized plan.

## Boundaries

The calculated plan:

- is not a legal Commercial Right;
- is not an accounting recognition;
- is not a receivable or payable;
- is not a wallet or Treasury position;
- is not a debit, credit, transfer, or provider settlement;
- does not authorize use of Pay Code principal, customer funds, deposits, settlement balances, float, or pass-through funds.

x-commerce must not depend on x-change or 3neti/wallet. Future dependency direction is from a consumer such as x-change to x-commerce's public contracts.

Durable policy publication, approval authority, effective dating, attribution storage, percentages, caps, provisional/final states, reversals, payables, Treasury posting, and execution adapters require separately tested slices.

## Consequences

Commercial Waterfall contracts and their serialized array shapes become public compatibility surfaces.

The calculator can be shared by future runtime posting and projection engines without duplicating commercial formulas.

Existing x-change pricing and direct Instruction Item wallet transfers remain unchanged until characterized and adapted in later decisions.
