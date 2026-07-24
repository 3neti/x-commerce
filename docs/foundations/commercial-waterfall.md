# Commercial Waterfall

## Status

Current status: implemented fixed-and-residual calculation contract with an x-change Treasury adapter.

This document records the commercial-governance model and the implemented calculation boundary. It is not a legal opinion, tax opinion, accounting standard, or blanket approval of any compensation plan.

The Business Development Partner stakeholder business case revealed the need for this concept, but the Commercial Waterfall is broader than business development. It may apply to royalties, platform participation, provider charges, managed operations, referral arrangements, institutional participation, marketplace participation, and other approved ecosystem relationships.

## Purpose

This document answers:

```text
How does value created by a commercial event become fairly, transparently,
and deterministically allocated among ecosystem participants?
```

The purpose of a Commercial Waterfall is to replace informal expectations with explicit commercial rules. It should make participation:

- understandable;
- traceable;
- repeatable;
- auditable;
- reviewable;
- and eventually executable, if future legal, accounting, commercial, and technical decisions approve execution.

The waterfall should make compensation explainable before it becomes executable. The implemented adapter executes only an explicitly versioned Pay Code policy and preserves its accepted snapshot.

## Implemented Runtime Boundary

The first runtime supports:

- immutable versioned catalogs;
- immutable quote, attribution, policy, and accepted-sale snapshots;
- integer-minor-unit fixed priority lines;
- exactly one final residual line;
- exact conservation of the quoted total;
- deterministic references;
- one atomic Client Funds charge and ordered Treasury allocation in x-change;
- replay protection; and
- append-only exact compensating reversals.

The runtime deliberately separates calculation from money movement:

```text
x-commerce catalog + policy + attribution
                 │
                 ▼
       immutable allocation plan
                 │
                 ▼
      x-change accepted sale record
                 │
                 ▼
  3neti/wallet Treasury Position operations
```

x-commerce never calls a provider and never receives bank credentials. A provider-cost allocation creates a classified payable Position; it is not evidence that the provider has already taken funds. A partner allocation records a payable and its snapshotted recipient reference; it is not an uncontrolled payment instruction.

Percentages, caps, tiers, taxes, royalties, participant master data, invoice collection, and payable discharge are not inferred from the version 1 policy. They require new versioned contracts and acceptance tests.

## Foundational Principles

Two emerging commercial-governance axioms guide this document:

```text
Compensation should be earned by commercial events, not by discretion.
```

```text
Commercial participation should be deterministic rather than discretionary.
```

These principles do not mean that every transaction automatically creates a payable amount. They mean that when an approved commercial model defines an event, attribution, allocation base, participants, and allocation rules, the resulting commercial participation should not depend on goodwill, verbal promises, manual judgment, settlement-account control, or accounting discretion.

## Why A Commercial Waterfall Exists

Commercial ecosystems often fail not because value is absent, but because participants cannot clearly determine:

- who created value;
- what event created the entitlement;
- which amount is available for allocation;
- who is entitled to participate;
- how much each participant receives;
- when the allocation becomes due;
- what costs must be deducted first;
- who can verify the calculation;
- whether payment depends on another participant's discretion.

The Commercial Waterfall exists to make these questions explicit before disputes arise.

Without a waterfall, a successful ecosystem may still produce unclear expectations, overlapping claims, hidden costs, inconsistent calculations, delayed payments, attribution conflicts, and mistrust. With a waterfall, participants can see how an approved commercial event becomes an approved allocation.

## Core Concepts

### Commercial Event

A Commercial Event is a successfully delivered outcome that may create commercial value.

Examples may include:

- successful disbursement;
- completed payroll;
- delivered remittance;
- completed onboarding;
- recurring subscription renewal;
- managed operations period;
- approved value-added service;
- customer expansion;
- another explicitly approved event.

A Commercial Event does not automatically mean that an amount is billable, collectible, payable, or distributable. It only identifies that an outcome occurred that may have commercial significance.

Execution evidence may come from x-change or another system, but the commercial meaning of the event belongs to x-commerce.

### Billable Event

A Billable Event is an event that an approved commercial model treats as chargeable.

A Billable Event may be related to a Commercial Event, but they are not identical:

- a successful disbursement may be both a Commercial Event and a Billable Event;
- a failed KYC attempt may be billable but not a successful customer outcome;
- a government-sponsored transaction may create value but be priced under a bundled, sponsored, or zero-fee model.

Commercial Event describes value creation. Billable Event describes chargeability.

### Commercial Right

A Commercial Right is an emerging concept.

A Commercial Right may arise when:

- a qualifying Commercial Event occurs;
- an approved commercial model exists;
- attribution is established;
- the participant satisfies applicable conditions.

The waterfall does not create a right arbitrarily. The qualifying event and approved commercial model create the basis for participation. The waterfall explains how that right is calculated, allocated, reported, and eventually paid.

This concept is not yet a PHP interface, database record, ledger entry, wallet balance, legal receivable, or accounting conclusion.

### Commercial Attribution

Commercial Attribution explains why a participant is entitled to participate in value created by a Commercial Event.

Possible attribution bases include:

- originating a customer;
- maintaining a commercial relationship;
- providing a value-added service;
- operating infrastructure;
- supplying regulated banking infrastructure;
- owning intellectual property;
- performing implementation;
- supporting a recurring program;
- satisfying another approved commercial role.

Attribution must be documented. Fairness requires more than vague phrases such as:

- helped with the account;
- was involved;
- introduced us;
- deserves something.

Those phrases may describe real effort, but they are not enough to support a repeatable commercial allocation. The waterfall needs traceable attribution, effective dates, approval authority, and conflict rules.

### Allocation Base

The Allocation Base is the amount against which allocations are calculated.

Possible allocation bases include:

- fixed fee per qualifying transaction;
- net platform revenue;
- subscription revenue;
- onboarding revenue;
- maintenance revenue;
- gross markup after provider cost;
- collected revenue;
- another explicitly approved basis.

The allocation base must be defined precisely. Ambiguous bases create disputes.

Unless expressly approved, lawful, and commercially documented, the allocation base should not be:

- gross transaction value;
- customer deposits;
- settlement balances;
- pass-through funds;
- provider selling price;
- uncollected invoices;
- float.

These amounts may move through the ecosystem, but movement of money is not the same as distributable revenue.

## Working Definition

A Commercial Waterfall is the ordered set of approved rules that determines how value arising from a qualifying commercial event is recognized, reduced by applicable costs and exclusions, attributed to participants, and allocated among them.

The waterfall should answer:

- What event occurred?
- What amount forms the allocation base?
- What amounts are excluded?
- What costs are deducted first?
- Who participates?
- What rule determines each allocation?
- What order applies?
- What caps, floors, or duration limits exist?
- When does the allocation become payable?
- What evidence supports it?
- What happens if the transaction is reversed, refunded, disputed, unpaid, or invalidated?

## Core Flow

Conceptual flow:

```text
Successful Outcome
        |
        v
Commercial Event
        |
        v
Billable Event, if applicable
        |
        v
Commercial Right Recognized
        |
        v
Commercial Attribution Confirmed
        |
        v
Allocation Base Determined
        |
        v
Provider Costs / Rail Fees / Taxes / Exclusions Applied
        |
        v
Commercial Waterfall
        |
        v
Approved Stakeholder Allocations
        |
        v
Reporting / Evidence / Payment
```

Not every Commercial Event proceeds through every stage. Some events create value but are not billable. Some billable items may not create stakeholder allocations. Some allocations may wait for collection, reconciliation, legal approval, or contract execution.

## Participants

A waterfall may eventually include different ecosystem roles, such as:

- participating rural bank;
- ODTI;
- 3neti;
- business development partner;
- RBAP, if formally approved;
- NetBank or another infrastructure partner;
- DevOps provider;
- value-added service provider;
- marketplace provider;
- program sponsor;
- other approved participants.

Not every participant receives an allocation from every Commercial Event. Participation depends on the approved commercial model for the specific program, offering, customer, event type, and time period.

## Deduction Order

Deduction order matters because allocation percentages can become misleading if costs are hidden until after stakeholder expectations have been created.

Possible deductions or exclusions may include:

1. taxes;
2. refunds or reversals;
3. rail or settlement charges;
4. direct provider costs;
5. cloud or managed operations costs;
6. bad debt or uncollected amounts;
7. mandatory reserves;
8. other approved costs.

This document does not prescribe one universal deduction order. Each commercial model must define its own order, including which amounts are excluded from the allocation base and which costs are deducted before participant allocations are calculated.

The waterfall should not promise a percentage of an undefined amount.

## Allocation Methods

Possible allocation methods include:

- fixed amount per qualifying event;
- percentage of approved revenue base;
- tiered percentage;
- milestone payment;
- recurring override;
- subscription participation;
- time-limited participation;
- capped participation;
- minimum guarantee, if formally approved;
- pooled allocation;
- residual allocation;
- priority waterfall;
- another approved formula.

Illustrative example only:

```text
Approved commercial allocation
        |
        v
PHP 0.50
        |
        v
Every qualifying disbursement
        |
        v
Reported under the Commercial Waterfall
```

PHP 0.50 is illustrative only.
It is not approved pricing or compensation.

The important idea is not the amount. The important idea is that the allocation is rule-based, documented, reviewable, and tied to a qualifying commercial event.

## Duration And Survival

A Commercial Right must define how long participation lasts.

Possible duration models include:

- one-time;
- for the first contract term;
- for a defined number of months;
- while the partner remains active;
- for as long as the originated customer remains active;
- through renewals;
- through expansion modules;
- capped at a maximum amount;
- terminated by breach or inactivity.

Duration must be explicit. The ecosystem should not allow lifetime commission, perpetual royalty, permanent referral, or indefinite participation assumptions to arise from silence.

Survival rules should also define what happens if a contract terminates, a customer transfers, a partner stops supporting the account, a provider is replaced, or a program is restructured.

## Attribution Conflicts

Attribution conflicts may arise when:

- two partners claim the same customer;
- one partner introduced the customer while another closed the contract;
- one partner originated the bank while another originated the use case;
- an institutional partner claims umbrella participation;
- the customer relationship changes over time;
- the partner stops supporting the account.

Each commercial model should require:

- attribution records;
- approval authority;
- conflict-resolution rules;
- effective dates;
- change history;
- no retroactive changes without documented approval.

The waterfall should not turn informal involvement into automatic entitlement. It should convert approved attribution into transparent participation.

## Reversals, Refunds, And Failed Events

Commercial models must define what happens when:

- a transaction is reversed;
- a fee is refunded;
- a bank does not pay;
- a customer disputes the charge;
- a provider event fails;
- the commercial event is later invalidated;
- revenue is recognized but not collected.

Possible treatments include:

- no allocation until collection;
- provisional allocation subject to reversal;
- clawback;
- offset against future amounts;
- reserve period;
- final settlement after reconciliation.

This document does not select one universal rule. Each commercial model must define how reversals, refunds, failed events, disputes, non-payment, and invalidation affect allocation.

## Deterministic Does Not Mean Automatic

Deterministic means:

- the result follows approved rules;
- the same facts produce the same allocation;
- participants can inspect the basis;
- discretion is minimized.

It does not yet mean:

- automatic software execution;
- real-time settlement;
- wallet crediting;
- blockchain;
- smart contracts;
- commission engine;
- ledger implementation.

x-commerce can define deterministic commercial rules before any automated system exists. Manual review may still be necessary in early phases, especially while legal, accounting, tax, and operational models remain under review.

## Relationship With x-commerce

x-commerce defines the commercial model.

For the Commercial Waterfall, x-commerce may define:

- qualifying commercial events;
- attribution;
- commercial rights;
- allocation bases;
- deduction order;
- stakeholder participation;
- waterfall rules;
- reporting requirements;
- evidence requirements;
- unresolved decisions and assumptions.

x-commerce does not need to implement a commission engine, ledger, wallet, database table, billing system, or settlement process in order to document the model.

## Relationship With x-change

x-change owns value-bearing instruction execution.

x-commerce may eventually define approved commercial allocations that x-change could execute as explicit value-bearing instructions, if future decisions approve that architecture.

Future direction only:

```text
Commercial Event recognized
        |
        v
Approved allocations calculated
        |
        v
x-change receives explicit allocation instructions
        |
        v
Execution and settlement
```

This document does not implement that relationship. It does not modify x-change. It does not assume that commercial allocations already exist as x-change instructions.

The boundary remains:

- x-commerce defines the commercial model;
- x-change may eventually execute approved value-bearing instructions that arise from the model.

## Relationship With x-legal

The Commercial Waterfall creates legal, accounting, tax, banking, custody, stored-value, agency, payment, and licensing questions.

Questions requiring x-legal or professional review include:

- Is an allocation a commission, royalty, rebate, service fee, or revenue share?
- When is the right legally earned?
- Who owes the amount?
- Is the participant a creditor?
- Can amounts accumulate in an account?
- Does an x-change account create wallet or stored-value implications?
- What tax withholding applies?
- What accounting recognition applies?
- Can customer funds ever fund the allocation?
- What contractual language is required?
- What happens in insolvency or non-payment?

x-commerce should identify these questions. It should not answer them as legal conclusions.

## Accounting And Tax Dependencies

This document is not an accounting standard.

However, each commercial model should distinguish:

- earned versus unearned;
- accrued versus paid;
- gross versus net;
- collected versus invoiced;
- provisional versus final;
- revenue versus payable;
- provider cost versus stakeholder allocation;
- liability versus expense;
- tax withholding.

The waterfall should not imply that a commercial allocation has been earned, accrued, paid, recognized, withheld, or reported until the relevant accounting, tax, legal, contractual, and operational rules are approved.

## Commercial Governance Principles

Emerging governance principles:

1. No allocation without an approved commercial model.
2. No entitlement without a qualifying event and valid attribution.
3. No use of customer funds, deposits, settlement balances, or pass-through amounts as distributable revenue unless expressly lawful and approved.
4. Provider costs must be separated before markup or margin is represented.
5. Duration, exclusions, caps, and reversal rules must be explicit.
6. The same facts should produce the same allocation.
7. Participants should be able to understand and verify the basis of their allocation.
8. Commercial rules should not be changed retroactively without documented authority.
9. x-commerce defines the model; x-change may eventually execute it.
10. Legal, tax, accounting, and regulatory characterization must be reviewed before production implementation.

These principles are intended to protect the ecosystem from discretionary allocation, vague promises, and collapsed money-flow categories.

## Fairness And Commercial Trust

The purpose of the Commercial Waterfall is not merely calculation efficiency. It is commercial trust.

Participants should not need to wonder:

- whether they will be paid;
- whether another participant can withhold payment arbitrarily;
- whether allocations are calculated consistently;
- whether successful events are visible;
- whether costs are being deducted fairly;
- whether the rules changed after the fact.

The system should not ask participants to trust discretion when it can provide transparent commercial rules.

The waterfall should make a participant's basis for participation visible without treating every participant as a settlement owner, customer owner, software owner, or bank.

## Business Development Partner Example

The business development partner is the clearest current illustration because partner participation often becomes disputed when attribution and duration are unclear.

Illustrative flow:

```text
Partner originates Rural Bank A
        |
        v
Attribution approved
        |
        v
Rural Bank A activates a qualifying Pay Code service
        |
        v
Successful qualifying disbursement occurs
        |
        v
Approved PHP 0.50 illustrative allocation recognized
        |
        v
Allocation reported under the Commercial Waterfall
```

This example does not approve PHP 0.50, Pay Code pricing, partner compensation, attribution duration, or payment timing.

The partner:

- does not own the customer;
- does not own the settlement account;
- does not receive customer funds;
- does not receive deposits or pass-through funds;
- does not gain pricing authority;
- does not gain legal or regulatory authority.

The partner's right, if any, arises from the approved commercial model. The amount, duration, exclusions, attribution, evidence, reversal treatment, and payment timing must be contractual or otherwise formally approved.

## Broader Ecosystem Applications

The same architecture may later apply to:

- 3neti royalties;
- ODTI operating allocations;
- rural-bank retained fees;
- DevOps managed operations;
- value-added provider charges;
- referral participation;
- marketplace participation;
- institutional participation;
- program sponsor participation;
- other approved ecosystem relationships.

The Commercial Waterfall is therefore not a commission model. It is a reusable commercial governance model for explaining how value created by Commercial Events may be distributed among approved participants.

## Risks

Risks include:

- confusing gross transaction value with distributable revenue;
- overpromising allocations before costs are known;
- attribution disputes;
- indefinite participation rights;
- unclear reversal treatment;
- changing rules retroactively;
- relying on manual spreadsheets without auditability;
- allowing a settlement-account owner to exercise discretion;
- using customer funds to satisfy commercial obligations;
- software implementation before legal and accounting review;
- complexity exceeding the value being allocated;
- participants optimizing for allocation rather than customer outcomes.

These risks should be addressed through explicit commercial models, decision records, legal handoffs, accounting review, evidence requirements, and disciplined money-flow separation.

## Open Questions

Open questions include:

- Which events create Commercial Rights?
- Does every Billable Event create a stakeholder allocation?
- What is the approved allocation base?
- Which deductions occur first?
- Which allocations are fixed versus percentage-based?
- What is the priority order?
- When is an allocation earned?
- When is it payable?
- Does payment wait for collection?
- What happens on reversal or refund?
- How are attribution conflicts resolved?
- How long does participation survive?
- What evidence is required?
- Who approves the waterfall?
- Who may amend it?
- Can x-change eventually execute the resulting instructions?
- What legal, tax, accounting, and regulatory treatment applies?

These questions should be resolved per commercial model. They should not be assumed globally.

## Candidate Grammar Concepts

The following concepts appear important enough to observe in future grammar work:

- Commercial Waterfall;
- Commercial Right;
- Commercial Attribution;
- Allocation Base;
- Allocation Rule;
- Deduction Order;
- Priority Allocation;
- Residual Allocation;
- Provisional Allocation;
- Final Allocation;
- Clawback;
- Attribution Conflict;
- Commercial Payable;
- Allocation Evidence.

Commercial Waterfall, Commercial Right, Commercial Attribution, Allocation Base, Allocation Rule, and Deduction Order appear mature enough for a future grammar refinement pass because this document depends on them structurally.

Priority Allocation, Residual Allocation, Provisional Allocation, Final Allocation, Clawback, Attribution Conflict, Commercial Payable, and Allocation Evidence remain useful candidate terms, but they need more repeated use across stakeholder models before they should become first-class grammar.

No grammar update is made by this document.

## Next Decisions

Recommended next decisions:

1. Decide whether Commercial Waterfall should be added to docs/GRAMMAR.md in a later grammar refinement pass.
2. Decide which first commercial model should receive a waterfall template.
3. Decide what evidence is required to recognize Commercial Events and attribution.
4. Decide which legal, tax, accounting, and regulatory questions should be handed to x-legal first.
5. Decide whether a future decision record is needed before x-change can execute approved commercial allocation instructions.

Do not implement software until these decisions have been documented, reviewed, and approved.
