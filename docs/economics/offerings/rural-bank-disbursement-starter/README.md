# Rural Bank Digital Disbursement Starter Offering Model

## Status

Current status: non-numeric offering model instantiated.

Offering ID: `OFR-RB-DISBURSEMENT-STARTER`

Decision source: [0005: Select Second Modeled Offering](../../../decisions/0005-select-second-modeled-offering.md)

Economic-treatment proposal: [0006: Disbursement Starter Economic Treatment](../../../decisions/0006-disbursement-starter-economic-treatment.md)

This directory instantiates the second selected offering as a non-numeric, stakeholder-reconciled commercial model. It does not approve pricing, projections, legal characterization, accounting treatment, tax treatment, provider costs, NetBank fees, royalties, partner allocations, or software implementation.

## Purpose

This offering model answers:

```text
How does one Rural Bank Digital Disbursement Starter offering appear from every participating stakeholder's financial or value perspective?
```

The model exists to test whether the x-commerce architecture that worked for Payroll Starter can also describe a sponsor-funded payout offering without blending incompatible payout types into one generic model.

## Baseline Outcome

A sponsor funds and authorizes a batch of approved disbursements through a participating rural bank, resulting in approved recipients receiving value with transaction evidence, reporting, and reconciliation support.

The sponsor is purchasing a completed disbursement outcome, not software, Pay Codes, APIs, SMS, a banking product label, or a generic digital-wallet service.

## Baseline Commercial Structure

The pricing architecture to instantiate is:

```text
Sponsor onboarding
    +
Sponsor monthly or program-service fee
    +
Per-successful-recipient-disbursement fee
    +
Optional notification attachment
```

This is a modeling structure, not approved pricing.

A batch fee may be evaluated later if evidence shows that batch-level work is material and not covered by the sponsor service fee. It is not part of this first baseline.

## Baseline Collection Path

The concrete baseline collection path is:

```text
Sponsor
    |
    v
Pays customer-facing commercial fees to the Rural Bank
    |
    v
Rural Bank retains approved rural-bank economics
    |
    v
Rural Bank records approved obligations to ODTI,
providers, infrastructure participants, taxes,
and other approved parties
```

The rural bank is the baseline collection party for sponsor-facing commercial fees.

Deferred variants include:

- sponsor pays ODTI directly;
- ODTI bills the bank wholesale only;
- NetBank or another collection agent collects specific charges;
- recipient-paid fee structures;
- government procurement or public-sector sponsor structures;
- bundled pricing;
- ODTI-managed DevOps resale.

These variants are not part of the baseline model.

## Baseline Participants

Internal modeled participants:

- Rural Bank;
- ODTI;
- 3neti;
- DevOps Provider;
- Value-Added Provider for optional notification;
- NetBank, structurally, even while fee treatment remains blocked.

External participants:

- Sponsor customer;
- disbursement recipients;
- public cloud vendor;
- government tax authorities;
- any provider not explicitly represented as a stakeholder view.

Consolidation treatment depends on this boundary. Sponsor commercial fees are external inflows. Disbursement funding value is pass-through. Rural Bank-to-ODTI and Rural Bank-to-DevOps payments are internal eliminations when those stakeholders are inside the modeled boundary.

## Roles

| Role | Baseline treatment |
| --- | --- |
| Sponsor | Buyer, funder of disbursement value, and payer of customer-facing commercial fees. |
| Rural Bank | Customer-facing institution and baseline collection party. |
| Recipient | Approved beneficiary, member, claimant, payee, vendor, volunteer, participant, or other approved recipient. |
| ODTI | Commercial operator and platform provider. |
| 3neti | IP owner and technology steward. |
| NetBank or infrastructure participant | Possible regulated banking, account, API, rail, or settlement participant; fee basis unresolved. |
| DevOps Provider | Operates rural-bank-owned environment under delegated authority. |
| Value-Added Provider | Optional notification or other approved attachment provider. |
| Investor | Ownership or financing perspective only. |
| Regulator and public interest | Non-financial public-interest perspective. |

## Core And Optional Capabilities

Core baseline:

- sponsor instruction;
- approved recipient list;
- funded disbursement batch;
- successful recipient disbursement;
- transaction evidence;
- reporting;
- reconciliation support;
- exception visibility.

Optional selected modeling attachment:

- recipient notification.

Notification is optional because the disbursement offering can exist without it. It is instantiated as a value-added provider relationship so counterparty, provider-cost, and attachment-rate disciplines are visible.

Not included in baseline:

- KYC or eligibility service, unless later required by legal, regulatory, sponsor, or provider rules;
- email;
- OTP;
- rider or CTA;
- feedback;
- enhanced archival evidence;
- government-procurement variant;
- remittance variant;
- collections or merchant-payments variant.

## Readiness Status

The offering is structurally instantiated and not numerically modeled.

It is line-item ready for a future assumption-map and evidence pass, but it is not model-ready for projections. Required assumptions, provider costs, fee bases, legal characterization, tax treatment, NetBank treatment, and royalty treatment remain unresolved.

Line-item readiness values used in this directory:

- `Structurally Ready`: the commercial relationship, formula shape, counterparty, assumption references, and consolidation treatment are defined. It does not mean the line is numerically calculable;
- `Conditionally Ready`: the line applies only when an optional capability or commercial variant is selected;
- `Blocked`: a structural or computational dependency remains unresolved;
- `Deferred`: the line is intentionally outside the baseline;
- `Not Applicable`: the concept does not apply to the line.

This readiness vocabulary applies to offering line items. It does not replace the Assumptions Register status vocabulary.

## Consolidation Rules

Every line item uses one baseline consolidation value:

- `Internal elimination`;
- `External inflow`;
- `External outflow`;
- `Pass-through`;
- `Financing`;
- `Tax or government amount`;
- `Non-financial`.

Derived totals, margins, retained amounts, and contribution lines are reporting outputs, not additional money flows.

Under the current vocabulary, derived financial reporting outputs use:

```text
Consolidation treatment: Non-financial
```

This prevents double counting. A future vocabulary pass may consider adding `Derived output` as a clearer consolidation treatment.

## Directory Map

| File | Purpose |
| --- | --- |
| [commercial-model.md](commercial-model.md) | Offering-specific commercial model. |
| [normalization-review.md](normalization-review.md) | First normalization gate for consolidation, counterparty, blocked-output, and no-numeric discipline. |
| [assumption-map.md](assumption-map.md) | Required, optional, blocked, not-applicable, and missing assumptions discovered during instantiation. |
| [assumptions-register-expansion-plan.md](assumptions-register-expansion-plan.md) | Scaffold for the governed Assumptions Register update required before numeric modeling. |
| [evidence-acquisition-plan.md](evidence-acquisition-plan.md) | Evidence sources, priorities, owners, placeholder eligibility, and maturity gates for Disbursement assumptions. |
| [evidence-instruments/README.md](evidence-instruments/README.md) | Blank evidence questionnaires, information requests, handoff templates, and controlled-placeholder worksheet. |
| [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md) | Internal scaffold for future Disbursement Level 1 provisional input candidates. |
| [economic-coherence-review.md](economic-coherence-review.md) | Cost-allocation and commercial-unit review scaffold before provisional-input authorization. |
| [reconciliation-schedule.md](reconciliation-schedule.md) | Exact mirrored relationships between line items. |
| [consolidated-view.md](consolidated-view.md) | Non-numeric consolidation structure and double-counting controls. |
| [stakeholder-views/sponsor-view.md](stakeholder-views/sponsor-view.md) | Sponsor customer view. |
| [stakeholder-views/rural-bank-view.md](stakeholder-views/rural-bank-view.md) | Participating rural bank view. |
| [stakeholder-views/odti-view.md](stakeholder-views/odti-view.md) | ODTI view. |
| [stakeholder-views/3neti-view.md](stakeholder-views/3neti-view.md) | 3neti view. |
| [stakeholder-views/netbank-view.md](stakeholder-views/netbank-view.md) | NetBank or infrastructure participant view. |
| [stakeholder-views/devops-provider-view.md](stakeholder-views/devops-provider-view.md) | DevOps Provider view. |
| [stakeholder-views/value-added-provider-view.md](stakeholder-views/value-added-provider-view.md) | Optional notification provider view. |
| [stakeholder-views/investor-view.md](stakeholder-views/investor-view.md) | Investor ownership and financing view. |
| [stakeholder-views/public-interest-view.md](stakeholder-views/public-interest-view.md) | Public-interest view. |

No Business Development Partner view is instantiated in the baseline. That template becomes applicable only after `PAR-001` and valid Commercial Attribution are approved.

No Channel Partner view is created. Channel Partner remains deferred.

## Next Step

Normalize the Disbursement Starter assumption map into governed canonical assumptions. Do not create projections or a workbook until the non-numeric offering model is reviewed, assumption IDs are approved, and blocked inputs are visible.
