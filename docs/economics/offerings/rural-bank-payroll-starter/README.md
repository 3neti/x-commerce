# Rural Bank Payroll Starter Offering Model

## Status

Current status: Level 1 controlled placeholder model created and normalized for stakeholder-facing summary preparation.

Offering ID: `OFR-RB-PAYROLL-STARTER`

Decision source: [0002: Select First Modeled Offering](../../../decisions/0002-select-first-modeled-offering.md)

This directory instantiates the first selected offering across stakeholder financial and value views and now includes the first numeric Level 1 controlled placeholder model. It does not approve prices, forecasts, legal characterization, accounting treatment, tax treatment, provider costs, royalties, partner allocations, or software implementation.

## Purpose

This offering model answers:

```text
How does one Rural Bank Payroll Starter offering appear from every participating stakeholder's financial or value perspective?
```

The model exists to prove that one offering can be described through:

- one commercial structure;
- one canonical assumption set;
- exact stakeholder line items;
- exact counterparty references;
- consolidation treatment;
- blocked-input visibility;
- non-financial public-interest indicators.

It is documentation only.

## Baseline Outcome

A participating employer funds and authorizes a payroll distribution through its participating rural bank, resulting in approved recipients receiving payroll value with transaction evidence, reporting, and reconciliation support.

The customer is purchasing a completed payroll outcome, not software, Pay Codes, APIs, SMS, or a banking product label.

## Baseline Commercial Structure

The pricing architecture to model is:

```text
Hybrid activation
    +
Annual platform subscription
    +
Per-successful-recipient-disbursement fee
    +
Optional capability charges
```

This is a modeling structure, not approved pricing.

## Baseline Collection Path

The concrete baseline collection path is:

```text
Employer
    |
    v
Pays customer-facing fees to the Rural Bank
    |
    v
Rural Bank retains approved rural-bank economics
    |
    v
Rural Bank records approved obligations to ODTI,
providers, infrastructure participants, taxes,
and other approved parties
```

The rural bank is the baseline collection party for customer-facing fees.

Deferred variants include:

- employer pays ODTI directly;
- ODTI bills the bank wholesale only;
- NetBank or another collection agent collects specific charges;
- sponsor-funded pricing;
- bundled pricing;
- ODTI-managed DevOps resale.

These variants are not part of this baseline model.

## Baseline Participants

Internal modeled participants:

- Rural Bank;
- ODTI;
- 3neti;
- DevOps Provider;
- Value-Added Provider for SMS;
- NetBank, structurally, even while fee treatment remains blocked.

External participants:

- Employer customer;
- employee or payroll recipients;
- public cloud vendor;
- government tax authorities;
- any provider not explicitly represented as a stakeholder view.

Consolidation treatment depends on this boundary. For example, Rural Bank-to-DevOps payment is an internal elimination because the DevOps Provider is included as a modeled stakeholder. Payroll funding value is pass-through because it belongs to recipients and is not operating revenue.

## Roles

| Role | Baseline treatment |
| --- | --- |
| Employer | Buyer, funder, sponsor, and payer of customer-facing fees. |
| Rural Bank | Customer-facing institution and baseline collection party. |
| Recipient or employee | Receives payroll value. |
| ODTI | Commercial operator and platform provider. |
| 3neti | IP owner and technology steward. |
| NetBank or infrastructure participant | Possible regulated banking, account, API, rail, or settlement participant; fee basis unresolved. |
| DevOps Provider | Operates rural-bank-owned environment under delegated authority. |
| SMS Provider | Optional value-added provider for modeled SMS attachment. |
| Investor | Ownership or financing perspective only. |
| Regulator and public interest | Non-financial public-interest perspective. |

## Core And Optional Capabilities

Core baseline:

- payroll distribution;
- employer instruction;
- approved recipient list;
- successful recipient disbursement;
- evidence;
- reporting;
- reconciliation support.

Optional selected modeling variant:

- SMS notification.

SMS is optional because the payroll offering can exist without it. It is instantiated because it tests attachment-rate, provider-cost, customer-facing price, and counterparty reconciliation discipline.

Not included in baseline:

- email;
- KYC;
- rider or CTA;
- feedback;
- OTP;
- enhanced reporting;
- other value-added capabilities.

## Readiness Status

The offering is structurally instantiated and numerically modeled at Level 1 using draft-authorized provisional inputs.

The Level 1 model remains not evidence-supported, not forecast-grade, not contract-grade, and not investment-grade. Its current limitations come from evidence maturity and unresolved blocked items, not from the absence of calculations.

Line-item readiness values used in this directory:

- `Structurally Ready`: the commercial relationship, formula shape, counterparty, assumption references, and consolidation treatment are defined. It does not mean the line is numerically calculable;
- `Conditionally Ready`: the line applies only when an optional capability or commercial variant is selected;
- `Blocked`: a structural or computational dependency remains unresolved;
- `Deferred`: the line is intentionally outside the baseline;
- `Not Applicable`: the concept does not apply to the line.

This readiness vocabulary applies to offering line items. It does not replace the Assumptions Register status vocabulary.

## Consolidation Rules

Every line item must use exactly one baseline consolidation value:

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

This does not mean the line lacks financial importance. It means the line is excluded from money-flow aggregation to avoid double counting. A future vocabulary pass may consider adding `Derived output` as a clearer consolidation treatment.

## Directory Map

| File | Purpose |
| --- | --- |
| [commercial-model.md](commercial-model.md) | Offering-specific commercial model. |
| [assumption-map.md](assumption-map.md) | Required, optional, blocked, not-applicable, and missing assumptions. |
| [evidence-acquisition-plan.md](evidence-acquisition-plan.md) | Evidence sources, placeholder governance, and readiness gates for blocked assumptions. |
| [evidence-instruments/README.md](evidence-instruments/README.md) | Evidence questionnaires, information requests, handoff templates, and provisional-input authorization worksheet. |
| [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md) | Internal review pack for candidate Level 1 provisional inputs. |
| [economic-coherence-review.md](economic-coherence-review.md) | Cost-allocation and unit-economics review before provisional-input authorization. |
| [provisional-input-register-level-1.md](provisional-input-register-level-1.md) | Draft internal authorization register for Level 1 controlled placeholder inputs. |
| [offering-economics-level-1.md](offering-economics-level-1.md) | First numeric Payroll Starter Offering Economics controlled placeholder model, normalized into Core Payroll, optional SMS increment, and combined variant views. |
| [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md) | Stakeholder-facing five-year revenue projection summary derived from the normalized Level 1 model. |
| [reconciliation-schedule.md](reconciliation-schedule.md) | Exact mirrored relationships between line items. |
| [consolidated-view.md](consolidated-view.md) | Non-numeric consolidation structure and double-counting controls. |
| [stakeholder-views/customer-view.md](stakeholder-views/customer-view.md) | Employer customer view. |
| [stakeholder-views/rural-bank-view.md](stakeholder-views/rural-bank-view.md) | Participating rural bank view. |
| [stakeholder-views/odti-view.md](stakeholder-views/odti-view.md) | ODTI view. |
| [stakeholder-views/3neti-view.md](stakeholder-views/3neti-view.md) | 3neti view. |
| [stakeholder-views/netbank-view.md](stakeholder-views/netbank-view.md) | NetBank or infrastructure participant view. |
| [stakeholder-views/devops-provider-view.md](stakeholder-views/devops-provider-view.md) | DevOps Provider view. |
| [stakeholder-views/value-added-provider-view.md](stakeholder-views/value-added-provider-view.md) | SMS Value-Added Provider view. |
| [stakeholder-views/investor-view.md](stakeholder-views/investor-view.md) | Investor ownership and financing view. |
| [stakeholder-views/public-interest-view.md](stakeholder-views/public-interest-view.md) | Public-interest view. |

No Business Development Partner view is instantiated in the baseline. That template becomes applicable only after `PAR-001` and valid Commercial Attribution are approved.

No Channel Partner view is created. Channel Partner remains deferred.

## Next Step

After this Level 1 model and stakeholder-facing summary are accepted, produce stakeholder-specific financial briefs derived from the normalized Level 1 model. The briefs should consume the canonical model without creating separate calculations.
