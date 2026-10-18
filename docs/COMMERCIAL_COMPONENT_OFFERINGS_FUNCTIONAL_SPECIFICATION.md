# Commercial Component Offerings Functional Specification

## Document status

| Field | Value |
| --- | --- |
| Status | Proposed functional specification |
| Primary domain owner | `3neti/x-commerce` |
| Execution owner | `3neti/x-change` |
| Recipient-provisioning owner | `3neti/x-provisioning` |
| Identity onboarding owner | `3neti/onboarding` |
| Evidence owner | `3neti/x-journal` |
| Legal characterization | `3neti/x-legal` and qualified institutional counsel |
| Initial reference case | KYC Verification attached to a Pay Code |

This specification describes the intended end-to-end behavior of **Commercials** for priced instruction components. It is a target-state functional specification, not a statement that every model, contract, workflow, or user interface described here already exists.

It must be read together with the current package boundaries and implementation status. In particular:

- x-commerce currently owns deterministic catalogs, quotes, accepted-sale snapshots, a throttled read-only quote estimate endpoint, and a pure Commercial Waterfall calculation;
- x-change currently owns durable commercial governance, Treasury posting, settlement operations, and execution integration;
- x-provisioning owns governed authority offers and acceptance, but commercial Counterparty profiles and recipient designations require an explicit integration plan; and
- legal, accounting, tax, provider, and contractual conclusions remain subject to institutional approval and qualified review.

### Current implementation gate

The package now provides the first executable pricing boundary for this specification:

- catalog selection is versioned and immutable for an accepted snapshot;
- estimates are deterministic and include a quote reference, catalog version, and snapshot hash;
- `POST /api/x/v1/quotes` is read-only and throttled;
- x-change remains the Pay Code-specific facade that translates instructions, accepts payment, and persists the quote metadata; and
- the host Payment Operations console is the management surface for publishing a complete new catalog version.

Spreadsheet import/export and the host-specific pricing editor remain application concerns. They must publish a validated complete catalog version and must never mutate historical snapshots.

## 1. Executive summary

Commercials allows a bank or other authorized deploying institution to sell instruction components as part of a Pay Code or another value-bearing instruction.

An instruction component can have:

- a customer-facing price;
- a billing unit;
- a precisely defined Billable Event;
- an immutable Revenue Allocation Schedule;
- one or more external Commercial Recipients;
- an internal Product Revenue owner;
- accounting classifications and Treasury mappings;
- cancellation, refund, dispute, tax, and settlement policies; and
- effective dates, legal references, approval evidence, and version history.

The reference KYC offering is:

```text
Commercial Component Offering: KYC Verification v1

Component Rate:       ₱50.00 per billable unit
Billable Event:       pay_code.issued_with_kyc

Revenue Allocation:
  HyperVerge          ₱25.00  Service Provider Payable
  3neti               ₱12.50  Revenue Share Payable
  Deploying bank      ₱12.50  Product Revenue
                     ───────
  Total               ₱50.00
```

When an issuer creates a ₱10,000 Pay Code with that KYC instruction, and the configured Billable Event is recognized, the intended economic result is:

```text
Issuer available Client Funds             -₱10,050.00
Pay Code Outstanding Principal             +₱10,000.00
Service Provider Payable: HyperVerge           +₱25.00
Revenue Share Payable: 3neti                   +₱12.50
Bank Product Revenue                           +₱12.50
```

The commercial allocation is immediate, balanced, append-only, deterministic, and idempotent. It creates classified internal entitlements and revenue. It does not imply that three external bank transfers occurred.

External payable settlement is a later operation requiring verified recipient designations, maker-checker control, provider evidence, and reconciliation.

## 2. Rationale

### 2.1 The instruction is the transaction

x-change allows a Pay Code to carry more than principal. It can request KYC, OTP, notifications, document collection, signatures, location evidence, feedback, riders, insurance, and other controlled outcomes.

These are not merely technical switches. Each instruction can represent:

- a third-party service cost;
- bank product revenue;
- platform or intellectual-property revenue;
- a partner commission or revenue share;
- a tax consequence; and
- an evidence and settlement obligation.

Commercials makes those economics explicit and reproducible.

### 2.2 Pricing must be separated from principal

The Pay Code principal belongs to the beneficiary instruction. The Instruction Service Charge is a separately disclosed commercial amount.

For the reference case:

```text
Pay Code principal                         ₱10,000.00
KYC Instruction Service Charge                 ₱50.00
                                            ─────────
Total issuer debit                         ₱10,050.00
```

Only the ₱50 charge may enter the KYC Revenue Allocation Schedule. The ₱10,000 principal must never be classified as provider cost, revenue, commission, royalty, or tax merely because it shares a Treasury connection with the charge.

### 2.3 Allocation is not settlement

Commercial recognition answers:

> Who has earned or owns each part of the accepted charge?

Settlement answers:

> Has the institution actually discharged a verified payable through an authoritative external transfer?

The two must remain separate. A payable may accumulate for a day, week, month, invoice period, minimum threshold, or another approved cycle without losing its identity or provenance.

### 2.4 Provisioning is not pricing

x-provisioning establishes who accepted an approved relationship, role, responsibility, or authority.

x-commerce establishes what is sold, when it becomes billable, and how much each allocation receives.

x-change Treasury records and settles the resulting economic effect.

The governing boundary is:

> Provisioning establishes who. Commercials establishes what, when, why, and how much. Treasury establishes where the value is posted and how a payable is settled.

### 2.5 Why versioning is mandatory

Prices, providers, recipients, tax profiles, contracts, and revenue-sharing terms change. Historical Pay Codes must remain explainable using the exact terms accepted when they were issued.

Therefore, an activated Commercial Component Offering is immutable. A change creates a new version with a new effective period and approval lifecycle. Existing Commercial Sales and recognized allocations retain their original snapshot and hash.

## 3. Scope

### 3.1 In scope

- Instruction Component catalog and identity;
- customer-facing Component Rates;
- Billing Units and Billable Events;
- versioned Commercial Component Offerings;
- deterministic Revenue Allocation Schedules;
- external Commercial Recipient Designations;
- internal Product Revenue ownership;
- quote and issuer acceptance;
- Commercial Sale snapshots;
- immediate or deferred recognition according to policy;
- Treasury accounting mappings and clearing positions;
- payable accumulation;
- cancellation, refund, reversal, dispute, and supersession behavior;
- maker-checker governance;
- tax and withholding integration points;
- payable settlement and external reconciliation;
- Cockpit operating surfaces;
- append-only evidence and operational reporting;
- lifecycle scenario and regression-test expectations.

### 3.2 Out of scope

- deciding whether any arrangement constitutes deposit-taking, electronic money, payment-system operation, trust activity, or another regulated activity;
- deciding the correct tax rate or legal incidence for a Counterparty;
- replacing an accounting system of record;
- treating a dashboard balance as provider evidence;
- allowing x-commerce to move money or mutate Treasury Positions;
- allowing x-provisioning to credit Accounts, call providers, or create liquidity;
- giving the non-interactive System Principal human login credentials;
- allowing bearer possession of a provisioning Pay Code to redirect proceeds;
- silently changing historical prices or recipients;
- allowing a missing recipient to fall through to an anonymous payable;
- implementing provider-specific behavior in x-commerce; and
- issuing real cash or executing live provider calls in automated tests.

## 4. Canonical vocabulary

| Term | Definition |
| --- | --- |
| Commercials | The governed product area covering offerings, prices, billable events, allocations, recipients, accruals, and settlement. |
| Instruction Component | A selectable or automatically attached service or outcome, such as KYC Verification or OTP Delivery. |
| Commercial Component Offering | The immutable, versioned aggregate that combines an Instruction Component, Charging Policy, Revenue Allocation Schedule, legal trace, and lifecycle policies. |
| Component Rate | Customer-facing price for one Billing Unit, expressed in integer minor units and one currency. |
| Billing Unit | The measurable unit to which the Component Rate applies. |
| Billable Event | A business event that an approved policy treats as chargeable. Execution success and billability are not automatically equivalent. |
| Recognition Policy | The rule deciding when an accepted charge and its allocations are recognized. |
| Revenue Allocation Schedule | Ordered, deterministic rules that conserve the allocation base exactly. “Waterfall” remains acceptable technical shorthand. |
| Allocation Destination | Generic destination of an allocation line. It may be an external Commercial Recipient or an internal economic owner. |
| Commercial Recipient | An external Counterparty potentially entitled to a Service Provider Payable, Revenue Share Payable, Commission Payable, Royalty Payable, or similar amount. |
| Commercial Recipient Designation | Approved, accepted, effective authority linking a Counterparty to a commercial role, agreement, and verified settlement destination. |
| Internal Economic Owner | Institutional owner of an internal revenue position, such as the deploying bank’s Product Revenue. |
| Component Fee Clearing Position | Temporary Treasury control position through which a component charge is classified. It should normally return to zero after a complete allocation. |
| Commercial Sale | Immutable acceptance of a governed quote, including catalog, offering, allocation, attribution, and legal provenance. |
| Commercial Accrual | Durable recognition of an allocation into a payable, revenue, or other approved Position. |
| Payable Settlement | Governed discharge of an accrued payable through approved external evidence and reconciliation. |
| Provisioning Pay Code | Non-monetary, scoped, one-time invitation used to offer a provisioning relationship or designation. |
| Settlement Pay Code | Value-bearing instrument issued after settlement approval to discharge a payable through an authorized claim flow. |

## 5. Package and authority boundaries

### 5.1 x-commerce

x-commerce owns reusable commercial definitions and deterministic calculation contracts:

- Instruction Components;
- Commercial Component Offerings;
- Component Rates and Billing Units;
- Billable Event and Recognition Policy references;
- Revenue Allocation Schedules;
- quote and accepted-sale snapshots;
- the structured quote estimate contract and read-only HTTP endpoint;
- allocation categories and participant roles;
- pure deterministic calculation;
- commercial vocabulary and functional policy.

x-commerce must remain incapable of:

- posting to an Account or Treasury Position;
- calling NetBank, Paynamics, HyperVerge, an OTP provider, or another external provider;
- authenticating Cockpit operators;
- creating or settling payables; and
- deciding legal, tax, or accounting treatment by itself.

The quote endpoint is intentionally not a checkout endpoint. It returns a price decision that a consuming domain may present to a user, but it does not reserve principal, accept payment, create an order, or authorize issuance.

### 5.2 x-provisioning

x-provisioning owns the governed lifecycle that establishes recipient participation:

- provisioning request and immutable revision;
- maker submission and independent checker approval;
- opaque offer and claim credential;
- recipient acceptance;
- evidence verification;
- activation, rejection, expiry, revocation, and supersession;
- actor, represented organization, subject, and activation evidence;
- immutable authority-envelope output.

The expected future provisioning profiles are:

```text
commercial_counterparty_enrollment
commercial_recipient_designation
```

x-provisioning must not calculate prices, post accruals, or settle the recipient.

### 5.3 onboarding

onboarding establishes a person’s identity, Account link, verified mobile or email, and credentials when those are required.

It must not infer that an authenticated representative may bind a legal organization. The represented Counterparty and the human actor remain distinct.

### 5.4 x-change

x-change owns application orchestration and financial execution:

- Cockpit UI;
- quote and issuance integration;
- offering persistence and activation;
- Commercial Sale persistence;
- billable-event intake;
- Treasury charge, clearing, allocation, and reversal postings;
- payable accumulation;
- settlement batching and maker-checker operations;
- provider execution and reconciliation;
- operational projections and lifecycle scenarios.

### 5.5 voucher and instruction

`3neti/voucher` owns the Pay Code lifecycle and immutable instruction snapshot.

`3neti/instruction` owns typed references or DTOs for provisioning and other instruction families. A provisioning Pay Code should be explicit and non-monetary rather than a fabricated zero-value cash voucher.

### 5.6 x-journal

x-journal owns append-only evidence for:

- offering governance;
- provisioning request, offer, acceptance, activation, revocation, and supersession;
- quote acceptance and Commercial Sale;
- Billable Event receipt and recognition;
- charge, allocation, reversal, dispute, and settlement;
- maker, checker, executor, Counterparty, agreement, policy, and provider correlations.

Secrets, raw credentials, full bank-account details, and unnecessary personal data must not enter journal metadata.

### 5.7 x-legal and institutional review

x-legal records legal dependencies, decision traces, and counsel-facing questions. Qualified institutional counsel and accountants determine contractual privity, tax treatment, withholding responsibility, invoicing, custody characterization, and regulatory obligations.

## 6. Domain model

### 6.1 Instruction Component

An Instruction Component is stable product identity, not a price.

Minimum conceptual fields:

```text
reference
name
description
category
unit-of-measure vocabulary
compatible instruction types
provider-capability requirements
status
```

Examples:

```text
kyc.verification
otp.delivery
feedback.sms
feedback.email
identity.selfie
identity.signature
```

Deprecating a component stops new selection but does not invalidate historical sales.

### 6.2 Charging Policy

A Charging Policy defines:

```text
component reference
component rate in integer minor units
currency
billing unit
quantity rule
Billable Event reference
Recognition Policy reference
refundability
cancellation policy
retry and duplicate treatment
effective period
```

The initial KYC example uses one unit per Pay Code issued with KYC. That is a commercial choice, not a universal KYC rule.

If the provider charges only after accepting or completing a KYC request, the Billable Event must reflect that fact instead.

### 6.3 Revenue Allocation Schedule

A Revenue Allocation Schedule is the versioned Commercial Waterfall policy for one allocation base.

Each ordered rule contains:

```text
rule reference
sequence
line type
category
fixed amount or basis-point rate
minimum and maximum, when applicable
participant role or fixed destination reference
required designation type
accounting classification
legal-policy reference
```

The schedule must:

- use integer minor units;
- conserve the allocation base exactly;
- contain one declared residual rule where the current calculator requires it;
- have deterministic rounding behavior;
- reject missing mandatory participants;
- preserve the exact recipient or internal-owner reference resolved at acceptance; and
- never infer a legal entitlement from a display label.

### 6.4 Allocation Destination

An allocation may resolve to either:

#### External Commercial Recipient

Examples:

- HyperVerge as KYC service provider;
- 3neti as revenue-share recipient;
- a referral partner;
- a royalty recipient;
- a bank nominee that is a separate legal entity.

The allocation must reference an active Commercial Recipient Designation.

#### Internal Economic Owner

Examples:

- deploying bank Product Revenue;
- institutional Commercial Revenue;
- an approved internal business-unit revenue owner.

The owner resolves to an institution-controlled Position. It is not automatically a payable or an externally withdrawable balance.

### 6.5 Commercial Recipient Designation

The designation is the bridge from x-provisioning into Commercials.

Minimum authority envelope:

```text
provisioning request reference
Counterparty reference
commercial role
component scope
agreement reference
settlement designation reference
tax-profile reference or version
effective from
effective until
accepted snapshot hash
activation reference
activated by
activated at
revocation or supersession reference, when applicable
```

One Counterparty may hold several independent designations. For example, 3neti may be both a KYC revenue-share recipient and an OTP service provider. Those roles must remain separately attributable even if they use the same destination.

### 6.6 Commercial Component Offering

The aggregate snapshot contains:

```text
offering reference and version
Instruction Component reference
Charging Policy
Revenue Allocation Schedule
Attribution Policy
Legal Trace
Accounting Mapping
effective period
governance origin
maker and checker evidence
publication and activation evidence
snapshot hash
```

An Offering may be published but inactive. Activation is the controlled instant when new quotes begin resolving it.

### 6.7 Accounting Mapping

The commercial definition identifies economic categories. x-change maps those categories to purpose-bound Treasury Positions.

Initial categories include:

```text
service_provider_payable
revenue_share_payable
partner_commission_payable
royalty_payable
provider_cost_payable
product_revenue
commercial_revenue
tax_withholding_payable
```

Provider transfer costs and value-added service-provider costs must not be collapsed merely because both are external costs.

HyperVerge KYC cost should normally be classified as a Service Provider Payable, not as the settlement provider’s transfer-cost payable.

### 6.8 Component Fee Clearing Position

For operational clarity, x-change may post the accepted charge through a component-specific clearing control:

```text
Commercial Fee Clearing
└── KYC Fee Clearing
```

After a complete ₱50 allocation:

```text
KYC Fee Clearing received                  ₱50.00
HyperVerge payable                        -₱25.00
3neti revenue-share payable               -₱12.50
Bank Product Revenue                      -₱12.50
                                           ──────
KYC Fee Clearing closing balance            ₱0.00
```

The direction shown is a functional value-flow illustration, not a prescribed general-ledger debit/credit conclusion. The consuming bank’s approved chart of accounts controls formal accounting treatment.

## 7. Actors

| Actor | Responsibility |
| --- | --- |
| System Principal | Non-interactive institutional economic principal and owner of system Positions. It cannot act as a human maker or checker. |
| Commercial Maker | Drafts components, offerings, recipients, destinations, and settlement requests under explicit capability. |
| Commercial Checker | Independently approves the exact submitted snapshot. |
| Provisioning Recipient | Human acting for self or as an authorized representative of a Counterparty. |
| Counterparty | Legal person or organization that may receive a commercial designation. |
| Issuer | Account holder accepting the quote and funding principal plus disclosed charges. |
| Executor | Submits an already approved external settlement. |
| Reconciler | Obtains and evaluates authoritative provider evidence. It may be automated with exception review. |
| DevOps Operator | Deploys and operates infrastructure but does not invent commercial authority or approve financial activity. |

No actor should be able to create, approve, execute, reconcile, and conceal the same financial operation.

## 8. Functional journeys

### 8.1 Commercial commissioning

1. DevOps installs the approved package release.
2. The package-defined immutable baseline may be provisioned under the existing commissioning authority.
3. Named maker and checker operators are authorized through explicit, time-bounded capabilities.
4. Instruction Components are made available.
5. Counterparties are enrolled or linked.
6. Required Commercial Recipient Designations are offered, accepted, verified, and activated.
7. A maker drafts the Commercial Component Offering.
8. The draft resolves every required allocation destination.
9. The system validates price conservation, currency, effective dates, legal trace, active recipient designations, and accounting mappings.
10. A different checker approves and publishes the immutable version.
11. An authorized activation operation makes the Offering effective for new quotes.
12. Commissioning and strict diagnostics report whether the component is ready for issuance.

The system must fail closed when a mandatory recipient, agreement, destination, accounting mapping, or approval is missing.

### 8.2 HyperVerge provisioning

1. A maker creates a `commercial_counterparty_enrollment` request for HyperVerge.
2. A checker approves the exact request snapshot.
3. x-change issues a non-monetary provisioning Pay Code through the voucher boundary.
4. An authorized HyperVerge representative claims the invitation.
5. onboarding verifies the human identity when required.
6. HyperVerge supplies or confirms entity, representative, tax, invoice, and destination evidence.
7. Evidence is verified through configured adapters.
8. The Counterparty enrollment is activated.
9. A separate `commercial_recipient_designation` binds HyperVerge to the KYC service-provider role under a named agreement.
10. The designation is independently activated and becomes eligible for future Offering versions.

Claiming the provisioning Pay Code does not itself activate a payable and does not transfer money.

### 8.3 3neti provisioning

3neti is enrolled once and may then accept several designations:

```text
3neti R&D OPC
├── KYC revenue-share recipient
├── OTP service-provider recipient
└── platform-license or royalty recipient
```

Every designation has an independent commercial role, agreement reference, effective period, tax profile, and accounting classification.

### 8.4 Bank ownership

The deploying bank’s own share normally resolves to an internal Product Revenue owner established during commissioning. It does not require an external payout designation.

If a separate subsidiary, affiliate, or nominee is entitled to the amount, that entity must be provisioned as an external Commercial Recipient and the allocation must use an appropriate payable category.

### 8.5 KYC-enabled Pay Code issuance

Preconditions:

- the issuer is authorized and sufficiently funded;
- the KYC component is available;
- an active Commercial Component Offering resolves for the issuance context;
- every mandatory destination remains valid for the Offering version;
- the quote distinguishes principal and charges;
- the issuer accepts the exact quote and snapshot hash; and
- the idempotency reference is new or an exact replay.

Flow:

1. The issuer requests a ₱10,000 Pay Code with KYC.
2. x-commerce produces a deterministic quote for principal and the ₱50 KYC component.
3. The issuer confirms the ₱10,050 total.
4. x-change freezes the Commercial Sale snapshot.
5. The Pay Code and immutable instruction snapshot are created.
6. The configured `pay_code.issued_with_kyc` Billable Event is emitted once.
7. x-change validates the Commercial Sale, Offering hash, Billable Event, and idempotency reference.
8. x-change atomically debits the issuer and posts principal plus commercial allocations.
9. x-journal records the accepted sale, Billable Event, charge, and each allocation.
10. The resulting payables and Product Revenue appear in authorized operational projections.

Expected value flow:

```text
Issuer Client Funds                       -₱10,050.00
Pay Code Outstanding Principal             ₱10,000.00
KYC Fee Clearing                               ₱50.00 in / ₱50.00 out
Service Provider Payable: HyperVerge           ₱25.00
Revenue Share Payable: 3neti                   ₱12.50
Bank Product Revenue                           ₱12.50
```

### 8.6 OTP component

OTP uses the same engine, not an OTP-specific accounting path.

Example:

```text
Instruction Component: OTP Delivery
Component Rate:        approved amount
Billable Event:        otp.delivered
Recipient:             3neti as service provider
Internal owner:        deploying bank, if applicable
```

The same 3neti Counterparty may be reused, but the OTP recipient designation must be distinct from the KYC revenue-share designation.

### 8.7 Deferred recognition

If the customer is charged before the Billable Event occurs, the Offering must explicitly define interim treatment.

Possible approved patterns include:

- recognize at issuance;
- reserve or defer the charge in an Unearned Instruction Charge position;
- charge only when the provider accepts the request;
- charge only on successful completion; or
- split the fee into separately recognized components.

The system must not create a Service Provider Payable before the provider has earned it under the applicable agreement.

### 8.8 Cancellation and reversal

Every Offering version must define what happens when the Pay Code is cancelled or the service fails.

Supported policy outcomes may include:

- principal returned; charge retained;
- principal and full charge returned;
- principal returned; only unconsumed component charges returned;
- charge retained but payable allocation reversed because the provider did not earn it; or
- dispute state requiring review.

Corrections must use append-only compensating entries. Existing Commercial Sales, Billable Events, and allocations are never deleted or rewritten.

### 8.9 Payable accumulation

Payables accumulate by at least:

```text
Counterparty
commercial role
agreement
Instruction Component
Offering version
currency
tax profile
settlement destination eligibility
recognition period
status
```

An operational view may aggregate these dimensions, but the underlying provenance must remain recoverable.

### 8.10 Payable settlement

1. Eligible recognized allocations enter a proposed settlement batch.
2. Provider statements, invoices, tax documents, service evidence, disputes, and prior settlements are matched.
3. A maker submits the exact batch snapshot.
4. A different checker approves or rejects it.
5. The system calculates net payable, withholding, and other authorized deductions using an approved external policy or accounting adapter.
6. An executor submits a direct provider transfer or issues a restricted Settlement Pay Code.
7. The provider returns pending, completed, rejected, or ambiguous evidence.
8. Reconciliation obtains authoritative final evidence.
9. Completed settlement reduces the payable and Provider Inventory exactly once.
10. Rejection retains the payable and Inventory while preserving attempt evidence.

Allocation never serves as proof of completed settlement.

### 8.11 Destination change and revocation

An activated destination or recipient designation is never edited in place.

A change requires:

- a new provisioning request;
- fresh evidence and recipient acceptance;
- independent activation approval;
- a superseding designation; and
- prospective activation in a new or amended Offering version where required.

Revocation prevents new allocations from resolving the designation. Historical accrued obligations remain linked to the designation effective at recognition unless a separately governed dispute or correction says otherwise.

## 9. Functional requirements

### 9.1 Component catalog

- **COM-CAT-001:** The system shall identify every Instruction Component by a stable machine reference.
- **COM-CAT-002:** Labels and descriptions may change without changing historical identity.
- **COM-CAT-003:** Component prices shall use integer minor units and an uppercase ISO 4217 currency.
- **COM-CAT-004:** A deprecated component shall remain readable for historical snapshots.
- **COM-CAT-005:** Component availability shall be distinct from commercial authority and active pricing.

### 9.2 Offering governance

- **COM-OFF-001:** Every Commercial Component Offering shall have a reference, positive version, effective period, immutable snapshot, and cryptographic hash.
- **COM-OFF-002:** Drafting, submission, approval, publication, activation, retirement, and supersession shall be separate attributable operations.
- **COM-OFF-003:** The maker and checker shall be different named human actors and neither shall be the System Principal.
- **COM-OFF-004:** Publication shall not automatically activate an Offering unless an explicitly approved commissioning profile allows that exact behavior.
- **COM-OFF-005:** A change to price, Billable Event, allocation, recipient, agreement, accounting category, refund policy, or effective period shall create a new version.
- **COM-OFF-006:** New quotes shall resolve exactly one active Offering for the commercial profile and context or fail closed.

### 9.3 Recipient provisioning

- **COM-PROV-001:** External allocation destinations shall resolve through active Commercial Recipient Designations.
- **COM-PROV-002:** A Counterparty enrollment shall be reusable across multiple designations.
- **COM-PROV-003:** Human actor, represented organization, provisioning subject, and economic recipient shall remain distinct.
- **COM-PROV-004:** Claiming a provisioning Pay Code shall record acceptance but shall not by itself move money or activate authority.
- **COM-PROV-005:** Offer credentials shall be opaque, single-use, expiring, audience-scoped when possible, and stored only as secure hashes.
- **COM-PROV-006:** Settlement destination changes shall require a new governed lifecycle.
- **COM-PROV-007:** Revocation and supersession shall be prospective and append-only.

### 9.4 Quote and sale acceptance

- **COM-QUOTE-001:** The quote shall show principal, each Instruction Service Charge, and total issuer debit separately.
- **COM-QUOTE-002:** The issuer shall accept the exact catalog, Offering, allocation, attribution, legal-trace, and price snapshot used by issuance.
- **COM-QUOTE-003:** Estimates and accepted sales shall use the same deterministic pricing contracts.
- **COM-QUOTE-004:** Reusing an idempotency reference with different content shall fail closed.
- **COM-QUOTE-005:** Later Offering changes shall not affect an accepted Commercial Sale.

### 9.5 Billable events

- **COM-EVT-001:** Every recognized charge shall reference a declared Billable Event and Recognition Policy.
- **COM-EVT-002:** Event identity shall be stable and idempotent across retries and queues.
- **COM-EVT-003:** A technical execution event shall not be treated as billable unless the active policy explicitly maps it.
- **COM-EVT-004:** Duplicate delivery shall not produce duplicate charges or allocations.
- **COM-EVT-005:** Event payloads shall carry immutable references and hashes rather than relying on mutable configuration or `auth()`.
- **COM-EVT-006:** Unknown, stale, mismatched, or ambiguous events shall fail closed and create reviewable evidence without financial mutation.

### 9.6 Revenue allocation

- **COM-ALLOC-001:** Every allocation plan shall conserve its allocation base exactly.
- **COM-ALLOC-002:** Allocation shall be deterministic for the same immutable inputs.
- **COM-ALLOC-003:** Mandatory participant roles shall not be skipped silently.
- **COM-ALLOC-004:** Every line shall retain policy rule, category, amount, currency, recipient or internal-owner reference, agreement or legal trace, and source Commercial Event.
- **COM-ALLOC-005:** External service cost, settlement-provider cost, revenue share, commission, royalty, Product Revenue, and residual Commercial Revenue shall remain distinguishable.
- **COM-ALLOC-006:** Allocation creates an economic classification, not proof of external payment.

### 9.7 Treasury posting

- **COM-ACC-001:** Principal and Instruction Service Charges shall be posted separately.
- **COM-ACC-002:** Posting shall be atomic and idempotent.
- **COM-ACC-003:** Component clearing shall reconcile to zero after a complete allocation unless an approved deferred-recognition policy intentionally retains a balance.
- **COM-ACC-004:** Every Position operation shall correlate to the Commercial Sale, Billable Event, Offering version, and allocation line.
- **COM-ACC-005:** Reversal shall use compensating entries and shall not delete or rewrite history.
- **COM-ACC-006:** Provider Inventory shall change only on authoritative cash-movement evidence, not merely because a Commercial Accrual was posted.

### 9.8 Tax and withholding

- **COM-TAX-001:** Tax treatment shall be driven by approved tax policy, Counterparty profile, agreement, invoice, jurisdiction, and settlement context.
- **COM-TAX-002:** A universal withholding percentage shall not be embedded in a generic Revenue Allocation Schedule without an approved legal and accounting basis.
- **COM-TAX-003:** Gross payable, net cash settlement, and Tax/Withholding Payable shall remain separately visible.
- **COM-TAX-004:** Withholding certificates, invoice references, and remittance evidence shall be correlated but sensitive documents shall remain outside ordinary logs and public projections.
- **COM-TAX-005:** The system shall support tax-policy versioning and historical reproducibility.

### 9.9 Settlement

- **COM-SET-001:** Only eligible, recognized, unsettled allocations may enter a settlement batch.
- **COM-SET-002:** A settlement batch shall have an immutable snapshot and hash.
- **COM-SET-003:** Maker, checker, and executor responsibilities shall be separately attributable.
- **COM-SET-004:** The checker shall approve the exact destination, gross amount, deductions, net amount, currency, and evidence references.
- **COM-SET-005:** Provider submission shall be explicitly invoked after approval; approval alone shall not call the provider.
- **COM-SET-006:** Ambiguous provider responses shall remain pending or review-required; the system shall not invent success.
- **COM-SET-007:** Final settlement shall reduce the payable and Provider Inventory exactly once.
- **COM-SET-008:** Rejected settlement shall preserve the payable, Inventory, attempt, and reason.
- **COM-SET-009:** A Settlement Pay Code shall be restricted to the approved Counterparty and permitted destinations.

### 9.10 Journal and audit

- **COM-AUD-001:** Every material transition shall produce append-only, correlated evidence.
- **COM-AUD-002:** Journal evidence shall distinguish automatic policy execution from named human actions.
- **COM-AUD-003:** No secret, raw token, full payout destination, provider credential, or unnecessary personal data shall be journaled.
- **COM-AUD-004:** The system shall reconstruct the accepted price, allocation, recipients, event, accounting effect, settlement attempts, and final disposition from durable evidence.
- **COM-AUD-005:** Replay, reversal, revocation, supersession, dispute, and recovery shall remain observable.

### 9.11 Operations and diagnostics

- **COM-OPS-001:** Commissioning shall report component readiness, Offering provenance, recipient readiness, governance mode, and blocking reasons.
- **COM-OPS-002:** Strict diagnostics shall fail when required maker-checker authority, active recipients, accounting mappings, queues, scheduler, or snapshot parity is missing.
- **COM-OPS-003:** Diagnostics shall never fabricate approvals or mutate financial state merely to become green.
- **COM-OPS-004:** External-provider capability and settlement readiness shall be observable separately from commercial Offering readiness.
- **COM-OPS-005:** All repair operations shall default to dry run and require specific authoritative evidence before commit.

### 9.12 Cockpit

The proposed top-level section is **Commercials**, containing:

```text
Commercials
├── Components
├── Offerings and Pricing
├── Revenue Allocations
├── Recipients
├── Agreements
├── Accruals
└── Settlements
```

- **COM-UI-001:** Ordinary Account holders shall see only their quote, accepted charges, and appropriate transaction evidence.
- **COM-UI-002:** Institutional Commercial controls shall require explicit operator capability.
- **COM-UI-003:** UI shall say “payable,” “accrued,” “pending settlement,” and “settled” accurately; it shall not call an allocation “paid.”
- **COM-UI-004:** Sensitive recipient destination data shall be masked.
- **COM-UI-005:** Offering revisions shall show before/after price, event, allocation, recipient, policy, and effective-date changes.
- **COM-UI-006:** Settlement approval shall show gross, deductions, net, recipient, destination summary, and evidence references.

## 10. State models

### 10.1 Commercial Component Offering

```text
draft
  → submitted
  → approved
  → published
  → active
  → retired

submitted → rejected
draft/submitted → withdrawn
active → superseded by a separately activated version
```

Published and active are distinct. Only active versions resolve for new work.

### 10.2 Commercial Recipient Designation

The designation should use x-provisioning’s governed lifecycle and retain explicit activation evidence:

```text
draft
  → awaiting approval
  → approved
  → offered
  → activation pending
  → activated

terminal or exceptional:
  rejected
  withdrawn
  expired
  revoked
  superseded
  activation failed
```

### 10.3 Billable Event recognition

Conceptual lifecycle:

```text
received
  → validated
  → recognized
  → posted

received/validated → rejected
recognized/posted → reversed by compensation
recognized/posted → disputed
disputed → released or corrected
```

### 10.4 Payable settlement

```text
accrued
  → eligible
  → batch drafted
  → submitted by maker
  → approved by checker
  → submitted to provider
  → pending
  → completed and reconciled

submitted by maker → rejected
submitted to provider/pending → provider rejected
submitted to provider/pending → review required
```

## 11. Accounting examples

### 11.1 Immediate KYC recognition

Assumptions:

- funded issuer Account;
- ₱10,000 Pay Code principal;
- ₱50 KYC Component Rate;
- one KYC Billing Unit;
- `pay_code.issued_with_kyc` is contractually billable and non-refundable;
- no other instruction charge in the example.

Functional posting:

| Classification | Amount |
| --- | ---: |
| Issuer Client Funds debit | ₱10,050.00 |
| Pay Code Outstanding Principal | ₱10,000.00 |
| HyperVerge Service Provider Payable | ₱25.00 |
| 3neti Revenue Share Payable | ₱12.50 |
| Bank Product Revenue | ₱12.50 |

The exact ledger debit and credit orientation must follow the approved Treasury model and chart of accounts. The invariant is value conservation and purpose classification.

### 11.2 Hypothetical withholding at settlement

If an approved tax policy requires a hypothetical 2% withholding from a ₱25 HyperVerge gross payable:

```text
Gross Service Provider Payable             ₱25.00
Cash settlement                             ₱24.50
Tax/Withholding Payable                      ₱0.50
                                            ──────
Gross obligation discharged                 ₱25.00
```

This is illustrative only. The real tax basis, rate, timing, certificate, and withholding agent require approved professional determination.

### 11.3 Cancellation before KYC consumption

If the Offering instead recognizes KYC only at `kyc.provider_accepted`, cancellation before that event should not create or retain the HyperVerge payable.

The system may return the reserved or unearned charge according to the snapshotted cancellation policy. It must not infer a refund from current configuration.

## 12. Security and control requirements

### 12.1 System Principal

The System Principal owns institutional economic Positions but is non-interactive. It must not:

- receive a usable password, PIN, reset flow, personal token, or human session;
- act as maker or checker;
- approve its own recipient or destination;
- conceal the human who changed prices or authorized settlement.

Automatic postings may use the System Principal as economic principal while separately recording the policy engine and originating human or execution evidence.

### 12.2 Maker-checker

Dual control applies to at least:

- Offering changes;
- recipient enrollment and designation activation;
- settlement-destination changes;
- agreement and tax-profile changes affecting settlement;
- payout batches;
- manual reversals or corrective postings;
- operator-authority grants and revocations.

Automatic recognition of an already approved Offering does not require a human approval for each transaction. The authority comes from the immutable activated policy and accepted quote.

### 12.3 Idempotency

Stable idempotency identities are required for:

- quote acceptance;
- Pay Code issuance;
- Billable Event ingestion;
- Commercial Accrual posting;
- compensating reversal;
- settlement-batch creation;
- provider submission; and
- provider reconciliation.

An exact replay returns the prior result. Reusing a reference with different content fails closed.

### 12.4 Queue provenance

Queued work must carry immutable actor, principal, Counterparty, Offering, sale, event, designation, agreement, and snapshot references. It must not depend on a later web session or `auth()` state.

### 12.5 Destination security

- destination details encrypted at rest;
- only masked summaries in UI and journals;
- provider tokens stored outside immutable public evidence;
- changes require fresh verification;
- optional cooling period or heightened review for high-risk changes;
- Settlement Pay Codes restricted to the approved Counterparty and policy-permitted destinations.

## 13. Failure behavior

The system must fail closed without a financial mutation when:

- no active Offering resolves;
- multiple active Offerings resolve;
- the Offering hash differs from the stored snapshot;
- the quote and issuance content differ;
- the issuer lacks sufficient Client Funds;
- the allocation does not conserve the charge;
- a mandatory recipient designation is missing, inactive, expired, revoked, or outside its effective period;
- the Counterparty, agreement, role, component, or destination scope does not match;
- the event is duplicated with different content;
- the accounting mapping is unknown;
- a provider response is ambiguous; or
- settlement evidence does not reconcile exactly.

The failure should produce sanitized diagnostic and journal evidence sufficient for authorized review.

## 14. Reporting requirements

Authorized reporting should answer:

- Which Offering version priced this Pay Code?
- Which components and quantities were charged?
- Which Billable Event recognized each charge?
- Which Counterparty and designation received each payable allocation?
- Which amount belongs to internal Product Revenue?
- Which allocations are accrued, disputed, approved for settlement, pending, rejected, or settled?
- Which agreement and tax-policy version applied?
- Which human made and checked each governed change?
- Which provider evidence proves external settlement?
- Did clearing, Inventory, Positions, and journals reconcile?

Reports must not collapse:

- principal and commercial charges;
- provider Inventory and internal attribution;
- payable and completed payment;
- gross payable and net cash settlement;
- service-provider cost and settlement-rail cost;
- Product Revenue and Revenue Share Payable.

## 15. Test strategy

### 15.1 x-commerce unit tests

- stable component and Offering snapshots;
- exact snapshot hashes;
- integer-minor-unit pricing;
- fixed and basis-point allocation;
- minimum, maximum, residual, and rounding behavior;
- exact conservation;
- missing mandatory participant rejection;
- different roles for the same Counterparty;
- deterministic replay;
- invalid currency, effective period, and policy references.

### 15.2 x-provisioning feature tests

- Counterparty enrollment offer and acceptance;
- Commercial Recipient Designation profile;
- actor versus represented organization;
- independent request checker and activation checker;
- opaque token hashing and one-time use;
- expiry, rejection, withdrawal, revocation, and supersession;
- destination change requiring a new request;
- immutable authority-envelope output;
- no Treasury, provider, Passport, or Cockpit dependency.

### 15.3 x-change integration tests

- quote shows principal and component charges separately;
- ₱10,000 plus ₱50 produces a ₱10,050 affordability requirement;
- KYC Billable Event produces ₱25/₱12.50/₱12.50 allocations;
- component clearing returns to zero;
- principal remains separate;
- exact replay produces no duplicate charge;
- unknown or revoked designation prevents new issuance or recognition according to policy;
- later designation change does not rewrite historical allocations;
- cancellation produces the configured compensation;
- settlement maker and checker differ;
- rejected or ambiguous provider result retains payable and Inventory;
- reconciled completion reduces payable and Inventory exactly once;
- journal evidence is complete and redacted.

### 15.4 Lifecycle scenario

A safe rollback-only scenario should demonstrate:

1. Counterparty and designation fixtures;
2. active KYC Offering;
3. funded test issuer;
4. ₱10,000 Pay Code with ₱50 KYC charge;
5. exact allocations;
6. payable accumulation;
7. maker-checker settlement using an in-memory provider;
8. success, rejection, replay, and cancellation evidence;
9. Inventory and Position reconciliation;
10. journal completeness and redaction;
11. `external_provider_calls=false`;
12. complete database rollback.

No automated test may issue a live Pay Code, call a real provider, capitalize Treasury, or move real funds.

## 16. Acceptance criteria

The first production-capable KYC slice is acceptable only when:

1. HyperVerge and 3neti resolve through active, independently approved Commercial Recipient Designations.
2. The deploying bank resolves through an explicit internal Product Revenue owner or a separately provisioned nominee.
3. The active KYC Offering has an immutable price, Billable Event, allocation, legal trace, accounting mapping, effective period, and hash.
4. The issuer sees and accepts ₱10,000 principal plus ₱50 KYC charge as a ₱10,050 total debit.
5. One recognized KYC unit creates exactly ₱25 HyperVerge payable, ₱12.50 3neti payable, and ₱12.50 bank Product Revenue.
6. Every centavo is conserved and component clearing returns to zero.
7. Replay does not create a second charge or allocation.
8. Historical sales remain reproducible after a new Offering or designation version activates.
9. Cancellation follows the accepted snapshot rather than current configuration.
10. Allocation is never presented as external payment.
11. Settlement requires maker-checker and authoritative reconciliation.
12. Tax and withholding remain policy-driven and separately evidenced.
13. System Principal remains non-interactive.
14. Journal evidence identifies policy, sale, event, actors, recipient, accounting, and settlement without leaking secrets.
15. Focused package tests and rollback-only lifecycle evidence pass.

## 17. Recommended implementation sequence

The agent planning implementation should characterize current x-commerce and x-change behavior before creating new abstractions. Work should proceed in dependency order and in separately tested package slices.

### Slice 0: Current-state characterization

- inventory existing Commercial Offering, catalog, Waterfall, Commercial Sale, Partner, payout destination, Treasury Position, and settlement behavior;
- identify which concepts already exist under different names;
- capture current KYC and OTP pricing behavior;
- prove existing issuance, allocation, replay, reversal, and settlement behavior with characterization tests;
- identify public compatibility constraints.

### Slice 1: x-provisioning contracts

- confirm polymorphic Counterparty and represented-organization support;
- add or plan `commercial_counterparty_enrollment` and `commercial_recipient_designation` profiles;
- expose immutable activation and revocation envelopes;
- preserve the package’s no-payment boundary;
- add package-boundary and lifecycle tests.

### Slice 2: x-commerce component contracts

- model Instruction Component identity;
- model Charging Policy, Billing Unit, Billable Event, and Recognition Policy references;
- extend Commercial Offering snapshots without breaking existing version 1 sales;
- model required participant roles and internal economic owners;
- retain pure deterministic calculation and no I/O;
- add schema-version compatibility and migration guidance for consumers.

### Slice 3: durable governance in x-change

- persist and govern component Offering versions;
- integrate recipient designation read models through contracts;
- validate all mandatory destinations before publication and activation;
- add Cockpit read-only projections first;
- preserve existing commissioning baseline and recovery behavior.

### Slice 4: Billable Event and accrual execution

- define event contracts and stable idempotency identities;
- integrate KYC issuance as the first event only after the business trigger is approved;
- post principal, charge, clearing, payables, and Product Revenue atomically;
- add compensation and dispute states;
- hand off complete x-journal evidence.

### Slice 5: generalized payable settlement

- aggregate payable classes by Counterparty and agreement;
- ingest invoice, provider, tax, and dispute evidence;
- add maker-checker batch approval;
- support direct transfer and restricted Settlement Pay Code adapters;
- reconcile authoritative provider evidence;
- retain safe defaults with live calls disabled.

### Slice 6: Cockpit and lifecycle proof

- add Commercials navigation and role-gated workspaces;
- provide storyboards using synthetic data;
- add rollback-only terminal and browser lifecycle scenarios;
- verify desktop and mobile behavior;
- publish no production mutation without explicit operational approval.

Each slice should be committed separately in its owning package. Do not begin with a cross-package rewrite.

## 18. Decisions required before live implementation

The following questions must remain explicit rather than being guessed by code:

1. Is KYC billable when the Pay Code is issued, when KYC begins, when the provider accepts it, when it completes, or when HyperVerge marks it billable?
2. Is the ₱50 charge refundable on Pay Code cancellation, failed KYC, timeout, or provider rejection?
3. Which entity contracts directly with HyperVerge: the bank, 3neti, another operator, or multiple parties?
4. Does the bank owe HyperVerge directly, or does it owe 3neti an amount from which 3neti separately pays HyperVerge?
5. Is the 3neti amount a revenue share, royalty, service fee, license fee, or another contractual classification?
6. Does the bank retain Product Revenue internally, or is a separate nominee entitled to it?
7. Which entity is the withholding agent, and which tax policies and documents apply to each Counterparty?
8. Are customer prices VAT-inclusive or VAT-exclusive?
9. Are payables settled per event, by threshold, periodically, against invoice, or by another rule?
10. May a Commercial Recipient claim a Settlement Pay Code to any verified account, or only a pre-approved designation?
11. How are disputes, provider credits, chargebacks, and invoice differences handled?
12. Which Account or Client Funds source funds the principal and charges?
13. What happens if a recipient designation is revoked after a sale but before recognition or settlement?
14. Which currencies and cross-currency conversions, if any, are permitted?
15. Which operations require bank-specific integration rather than reusable package behavior?

## 19. Handoff instructions for the x-provisioning agent

The x-provisioning agent should not immediately implement this entire specification. It should:

1. Read the current x-provisioning lifecycle, migrations, contracts, tests, and recent commits.
2. Identify which required recipient-provisioning concepts are already supported.
3. Produce a gap matrix for Counterparty enrollment, represented organizations, Commercial Recipient Designations, destination references, effective periods, activation envelopes, revocation, and supersession.
4. Preserve x-provisioning’s rule that provisioning is not payment.
5. Propose the smallest upstream contract slice needed by x-commerce and x-change.
6. Identify any required contract package for Counterparty identity instead of assuming a local `User` model.
7. Specify dependency order across x-provisioning, x-commerce, instruction/voucher, x-change, and the host.
8. Add focused tests before each implementation slice.
9. Stop before live provider, Treasury, deployment, release, or financial mutation unless separately authorized.
10. Return a phased plan with compatibility, migration, rollback, publication, and lifecycle-scenario steps.

## 20. Architectural invariants summary

1. Principal is not a commercial charge.
2. Provisioning is not payment.
3. An allocation is not a completed settlement.
4. A successful execution is not automatically a Billable Event.
5. An authenticated human is not automatically authorized to represent an organization.
6. A Counterparty is not necessarily a platform User.
7. A Product Revenue owner is not necessarily an external Commercial Recipient.
8. A price is not a contract, and a Waterfall calculation alone does not establish legal entitlement.
9. Every accepted price and allocation is immutable and reproducible.
10. Every centavo is conserved using integer minor units.
11. Every external allocation resolves to an active, scoped recipient designation.
12. Historical obligations retain their original recipient and policy provenance.
13. Financial corrections are append-only and idempotent.
14. Provider Inventory changes only with authoritative cash evidence.
15. The System Principal is non-interactive and cannot be a human maker or checker.
16. Secrets and full payout destinations never appear in ordinary journals or projections.
17. Missing or ambiguous authority fails closed.
18. Package ownership follows contract package → implementation package → x-change → host adoption.

The intended product principle is:

> Provisioning establishes the approved participant. Commercials establishes the accepted economics. Treasury recognizes and settles the resulting obligation under institutional control.
