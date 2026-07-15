# Rural Bank Digital Disbursement Starter Offering Model

## Status

Current status: non-numeric offering model instantiated.

Offering ID: `OFR-RB-DISBURSEMENT-STARTER`

Decision source: [0005: Select Second Modeled Offering](../../../decisions/0005-select-second-modeled-offering.md)

Accepted economic treatment: [0006: Disbursement Starter Economic Treatment](../../../decisions/0006-disbursement-starter-economic-treatment.md)

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
| [management-candidate-completion-plan.md](management-candidate-completion-plan.md) | Next-step plan for completing management candidate values before authorization. |
| [candidate-value-entry-plan.md](candidate-value-entry-plan.md) | Entry protocol for populating Conservative, Base, and Accelerated candidate values without authorization. |
| [candidate-value-population-workplan.md](candidate-value-population-workplan.md) | Execution workplan for populating management candidates without authorization. |
| [candidate-value-entry-ledger.md](candidate-value-entry-ledger.md) | Status ledger for tracking candidate-value entry and review readiness. |
| [candidate-value-reuse-decision-log.md](candidate-value-reuse-decision-log.md) | Controls whether Payroll or shared assumption methods may be reused for Disbursement candidates. |
| [scenario-coherence-checklist.md](scenario-coherence-checklist.md) | Coherence checks for Conservative, Base, and Accelerated candidate scenarios. |
| [management-candidate-review-worksheet.md](management-candidate-review-worksheet.md) | Review scaffold for deciding which management candidates are ready for authorization review. |
| [management-candidate-review-brief.md](management-candidate-review-brief.md) | Executive-style brief scaffold for reviewing populated management candidates. |
| [authorization-readiness-report.md](authorization-readiness-report.md) | Readiness report scaffold before completing provisional authorization records. |
| [candidate-value-import-contract.md](candidate-value-import-contract.md) | Required field and import contract for moving reviewed candidates toward workbook-ready inputs. |
| [provisional-authorization-packet.md](provisional-authorization-packet.md) | Authorization packet scaffold for future Disbursement Level 1 provisional inputs. |
| [provisional-register-completion-checklist.md](provisional-register-completion-checklist.md) | Completion gate for making the provisional input register model-ready. |
| [level-1-model-population-plan.md](level-1-model-population-plan.md) | Population sequence for the future canonical Level 1 Markdown model. |
| [level-1-output-table-map.md](level-1-output-table-map.md) | Required Level 1 output tables and workbook consumer mapping. |
| [numeric-workbook-readiness-roadmap.md](numeric-workbook-readiness-roadmap.md) | Gate sequence from structural scaffold workbook to formula-backed numeric workbook. |
| [level-1-build-runbook.md](level-1-build-runbook.md) | Operating runbook from candidate values through Level 1 workbook generation. |
| [economic-coherence-review.md](economic-coherence-review.md) | Cost-allocation and commercial-unit review scaffold before provisional-input authorization. |
| [provisional-input-register-level-1.md](provisional-input-register-level-1.md) | Blank future authorization register for Level 1 Disbursement controlled placeholders. |
| [offering-economics-level-1.md](offering-economics-level-1.md) | Scaffold for the future Level 1 numeric Disbursement model; all outputs remain blocked. |
| [level-1-normalization-plan.md](level-1-normalization-plan.md) | Future normalization gate for Level 1 numeric outputs before summaries or briefs. |
| [five-year-revenue-projection-summary.md](five-year-revenue-projection-summary.md) | Future stakeholder-facing summary scaffold; no numbers until Level 1 is authorized and normalized. |
| [stakeholder-financial-briefs/README.md](stakeholder-financial-briefs/README.md) | Future stakeholder-specific financial brief scaffolds; no independent calculations. |
| [spreadsheet-financial-model.md](spreadsheet-financial-model.md) | Future workbook specification scaffold; no `.xlsx` generated. |
| [scaffold-workbook-generation-policy.md](scaffold-workbook-generation-policy.md) | Narrow policy allowing a structural `.xlsx` scaffold before numeric Level 1 authorization. |
| [workbook-formula-implementation-plan.md](workbook-formula-implementation-plan.md) | Formula-backed workbook implementation plan for the future populated `.xlsx`. |
| [workbook-implementation-backlog.md](workbook-implementation-backlog.md) | Coding backlog for implementing the future formula-backed Disbursement workbook. |
| [workbook-slices.md](workbook-slices.md) | Future workbook implementation slice plan; no generator or workbook artifact. |
| [workbook-parity-validation.md](workbook-parity-validation.md) | Future workbook parity validation scaffold; blocked until numeric Level 1 outputs exist. |
| [workbook-parity-entry-template.md](workbook-parity-entry-template.md) | Template for entering canonical Markdown-to-workbook parity rows after Level 1 outputs exist. |
| [evidence-to-model-update-plan.md](evidence-to-model-update-plan.md) | Scaffold for replacing future provisional Disbursement inputs with governed evidence. |
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

Use [candidate-value-entry-plan.md](candidate-value-entry-plan.md) to populate [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md) with Conservative, Base, and Accelerated management candidates. Do not authorize inputs, create projections, or generate a workbook until candidate values are reviewed and the provisional input register is completed.
