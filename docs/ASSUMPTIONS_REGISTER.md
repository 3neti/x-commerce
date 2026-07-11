# Assumptions Register

## Status

Register status: governed financial-architecture register.

This register is the canonical source for financial and operating assumptions used by x-commerce economic models.

It is not a pricing sheet, forecast, contract, legal opinion, accounting policy, approved budget, investment model, or commitment by any stakeholder.

No assumption in this document is an approved price, approved compensation, approved royalty, approved tax treatment, approved legal characterization, or promised projection unless a future record explicitly identifies the approved authority.

## Purpose

The assumptions register exists so future financial models can remain traceable.

The governing pattern is:

```text
Assumption
    |
    v
Many Calculations
    |
    v
Many Stakeholder Views
```

The register should prevent this failure pattern:

```text
Many Assumptions
    |
    v
One Calculation
```

One assumption may affect many models, but it should have only one canonical identifier and one authoritative source.

For example, a single assumption describing:

```text
Average successful payroll transactions per active rural bank per month
```

may affect:

- Rural Bank economics;
- ODTI platform revenue;
- NetBank transaction volume;
- DevOps operational load;
- Value-Added Provider attachment volume;
- Business Development Partner participation;
- 3neti royalty calculations;
- Investor financial scenarios.

Those models should reference the same assumption ID. They should never duplicate it under different labels.

## Governance Principles

1. One assumption should not appear in multiple places under different names.
2. One assumption may affect many models, but it should have only one canonical identifier and one authoritative source.
3. Every material number should trace to a strategic assumption, provider quote, institutional proposal, signed contract, observed operating cost, market reference, or approved pricing decision.
4. Working assumptions are not approved prices.
5. Scenario values are not forecasts.
6. Projections are not promises.
7. Provider costs must remain separate from markups and margins.
8. Pass-through funds, deposits, settlement balances, float, and gross transaction value are not automatically revenue.
9. Investor return must remain separate from operational Commercial Waterfalls.
10. Legal, tax, accounting, banking, stored-value, securities, and regulatory questions must be handed to x-legal or professional review.
11. No stakeholder financial view may invent a local value when a canonical assumption already exists.
12. When an assumption changes, every affected calculation and stakeholder view must be reviewed.

## Relationship To The Commercial Model

The Commercial Model defines the economic structure.

This register defines the inputs used by future calculations.

The financial model must not create assumptions that are absent from this register. If a calculation needs an input, the input must first be recorded here with an identifier, owner, source, status, and affected models.

## First Offering Constraint

Do not build the first numeric five-year projection for the ecosystem as a whole.

The ecosystem is too broad for a first numeric model. Blended ecosystem-level assumptions would weaken traceability and make stakeholder economics harder to audit.

The first modeled offering should be one concrete commercial offering, such as:

```text
Rural Bank Payroll Starter
```

or another approved single offering.

Only after one offering has a coherent assumption set, calculation order, stakeholder financial views, and Commercial Waterfall should multiple offerings be aggregated into a broader ecosystem projection.

## Assumption Record Format

Every assumption should eventually use this structure.

```text
Identifier:
Category:
Description:
Unit of measure:
Conservative value:
Base value:
Accelerated value:
Source:
Evidence status:
Confidence level:
Owner:
Review date:
Affected offerings:
Affected stakeholders:
Affected calculations:
Legal or accounting dependency:
Current status:
Notes:
```

## Identifier Scheme

Recommended identifier prefixes:

| Prefix | Category |
| --- | --- |
| `OFR` | Offering definition |
| `ADP` | Adoption and onboarding |
| `VOL` | Transaction volume and activity |
| `CUS` | Customer, employer, payroll-account, and recipient-structure assumptions |
| `COL` | Billing, invoicing, collection, and payment timing |
| `PRC` | Pricing |
| `LIC` | License, maintenance, and subscription |
| `VAS` | Value-added service pricing, service definitions, and commercial terms |
| `ATT` | Capability or value-added service attachment rates |
| `OPS` | DevOps and managed operations |
| `CLD` | Public-cloud infrastructure cost |
| `RB` | Rural-bank retained economics and bank-specific operating inputs |
| `ODTI` | ODTI implementation, support, and operating-cost assumptions |
| `3NETI` | 3neti R&D, stewardship, IP, and legal-cost assumptions |
| `NET` | NetBank, rail, settlement, API, and infrastructure-fee assumptions |
| `SMS` | SMS delivery-quality and messaging-operation assumptions |
| `CST` | Provider, rail, support, and operating costs |
| `REV` | Revenue allocation and Commercial Waterfall inputs |
| `ROY` | 3neti royalty or license consideration |
| `PAR` | Partner, referral, commission, and participation |
| `TAX` | Tax, withholding, and accounting treatment |
| `RISK` | Churn, bad debt, refunds, reversals, and contingency |
| `PUB` | Public-interest and non-financial indicators |
| `INV` | Investor and capital assumptions |

Identifiers should be stable. If an assumption is retired, mark it retired instead of reusing its identifier.

`VAS-*` assumptions describe prices, service definitions, or value-added service commercial terms.

`ATT-*` assumptions describe how often a capability is attached to qualifying outcomes.

## Evidence Status Values

Use one of:

- `Open`;
- `Working assumption`;
- `Management estimate required`;
- `Management estimate`;
- `Institutional data required`;
- `Provider quote requested`;
- `Provider quote received`;
- `Institutional proposal`;
- `Market reference`;
- `Observed cost required`;
- `Observed cost`;
- `Approved pricing decision`;
- `Signed contract`;
- `Legal review required`;
- `Accounting review required`;
- `Tax review required`;
- `Retired`.

## Confidence Levels

Use one of:

- `Low`;
- `Medium`;
- `High`;
- `Approved`;
- `Not applicable`.

Low confidence does not mean the assumption is useless. It means the model must treat sensitivity seriously.

## Current Status Values

Current status describes whether an assumption is usable within a model. It is separate from evidence status and confidence level.

Use one of:

- `Draft`;
- `Active`;
- `Blocked`;
- `Approved`;
- `Superseded`;
- `Retired`.

Definitions:

- `Draft`: the assumption record exists but is not yet ready for model use.
- `Active`: the assumption is currently usable as a working assumption, subject to its confidence and evidence status.
- `Blocked`: the assumption is required but cannot be used until a dependency is resolved.
- `Approved`: the assumption is supported by an approved pricing decision, signed contract, approved authority, or equivalent governing source.
- `Superseded`: the assumption has been replaced by another canonical assumption but remains in the register for traceability.
- `Retired`: the assumption is no longer used and has no current replacement requirement.

Examples of blocked dependencies include provider quote required, legal review required, billable unit unresolved, accounting treatment unresolved, or offering scope unresolved.

## Scenario Values

Scenario values should use:

- `Conservative`;
- `Base`;
- `Accelerated`.

If no value is justified, use `Open`.

If a value is not scenario-dependent, repeat the same value and explain why.

If a value is already a range, preserve the range and identify what evidence is needed to narrow it.

Conservative, Base, and Accelerated do not universally mean low, medium, and high numeric values.

Scenario direction depends on the assumption category:

- Adoption: Accelerated may mean more banks, faster activation, or lower churn.
- Transaction volume: Accelerated may mean more transactions per active bank.
- Provider cost: Accelerated scale may mean lower unit cost but higher total provider cost because volume is larger.
- Support cost: Accelerated growth may mean higher total cost, lower cost per active bank, or temporarily higher onboarding burden.
- Pricing: the same approved price may apply across all scenarios.

The projection framework must interpret scenarios coherently rather than mechanically assuming that every Accelerated value is numerically higher.

## Offering References

Initial offering references:

| Offering ID | Offering | Status | Notes |
| --- | --- | --- | --- |
| `OFR-RB-PAYROLL-STARTER` | Rural Bank Payroll Starter | Selected first modeled offering | Selected by Decision 0002. Do not model numerically until required assumptions are ready. |
| `OFR-RB-DISBURSEMENT-STARTER` | Rural Bank Digital Disbursement Starter | Candidate first modeled offering | Alternative to payroll starter. |
| `OFR-RBAP-ECOSYSTEM` | RBAP Digital Banking Program ecosystem | Do not model first | Aggregate only after one concrete offering is modeled. |

## Initial Assumption Records

The following records preserve currently documented working assumptions and open inputs.

### `LIC-001` Perpetual Rural-Bank License Price

Identifier: `LIC-001`

Category: License, maintenance, and subscription.

Description: Working assumption for a one-time rural-bank license under a perpetual license model.

Unit of measure: PHP per participating rural bank.

Conservative value: PHP 100,000.

Base value: PHP 100,000.

Accelerated value: PHP 100,000.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, `OFR-RB-DISBURSEMENT-STARTER`, future rural-bank offerings.

Affected stakeholders: Rural Bank, ODTI, 3neti, Investor.

Affected calculations: onboarding economics, license revenue, bank payback, ODTI revenue, 3neti royalty basis if applicable.

Legal or accounting dependency: contract, revenue recognition, tax, license characterization.

Current status: Active.

Notes: Not an approved price. Compare against annual subscription and hybrid models.

### `LIC-002` Annual Maintenance Rate

Identifier: `LIC-002`

Category: License, maintenance, and subscription.

Description: Working assumption for annual maintenance as a percentage of perpetual license price.

Unit of measure: Percentage of license price per year.

Conservative value: 18%.

Base value: 18%.

Accelerated value: 18%.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: Future perpetual-license offerings.

Affected stakeholders: Rural Bank, ODTI, 3neti, Investor.

Affected calculations: annual maintenance revenue, support funding, ODTI operating revenue, 3neti royalty basis if applicable.

Legal or accounting dependency: maintenance scope, support obligation, revenue recognition, tax.

Current status: Active.

Notes: Must be tested against actual support, updates, and maintenance obligations.

### `LIC-003` Annual Subscription Range

Identifier: `LIC-003`

Category: License, maintenance, and subscription.

Description: Working assumption for annual rural-bank platform subscription under a subscription model.

Unit of measure: PHP per participating rural bank per year.

Conservative value: PHP 60,000.

Base value: PHP 90,000.

Accelerated value: PHP 120,000.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, `OFR-RB-DISBURSEMENT-STARTER`, future subscription offerings.

Affected stakeholders: Rural Bank, ODTI, 3neti, Investor.

Affected calculations: subscription revenue, bank annual cost, ODTI recurring revenue, 3neti royalty basis if applicable.

Legal or accounting dependency: subscription terms, revenue recognition, tax, service obligations.

Current status: Active.

Notes: The base value is a midpoint for scenario structure, not an approved price.

### `LIC-004` Hybrid Activation Fee

Identifier: `LIC-004`

Category: License, maintenance, and subscription.

Description: Working assumption for activation or onboarding fee under a hybrid model.

Unit of measure: PHP per participating rural bank.

Conservative value: PHP 50,000.

Base value: PHP 50,000.

Accelerated value: PHP 50,000.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, `OFR-RB-DISBURSEMENT-STARTER`, future hybrid offerings.

Affected stakeholders: Rural Bank, ODTI, 3neti, DevOps Provider, Investor.

Affected calculations: onboarding revenue, implementation cost recovery, bank initial cost, ODTI revenue, possible professional services allocation.

Legal or accounting dependency: activation scope, implementation scope, revenue recognition, tax.

Current status: Active.

Notes: Must be separated from DevOps setup fees and professional services.

### `LIC-005` Hybrid Annual Platform Subscription

Identifier: `LIC-005`

Category: License, maintenance, and subscription.

Description: Working assumption for annual platform subscription under a hybrid model.

Unit of measure: PHP per participating rural bank per year.

Conservative value: PHP 60,000.

Base value: PHP 60,000.

Accelerated value: PHP 60,000.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, `OFR-RB-DISBURSEMENT-STARTER`, future hybrid offerings.

Affected stakeholders: Rural Bank, ODTI, 3neti, Investor.

Affected calculations: annual platform revenue, bank annual cost, ODTI revenue, 3neti royalty basis if applicable.

Legal or accounting dependency: subscription terms, revenue recognition, tax.

Current status: Active.

Notes: Not approved. Should be compared with `LIC-001`, `LIC-002`, and `LIC-003`.

### `PRC-001` Base Transaction Fee Range

Identifier: `PRC-001`

Category: Pricing.

Description: Working assumption for base fee per completed disbursement or qualifying transaction.

Unit of measure: PHP per completed disbursement or qualifying transaction.

Conservative value: PHP 1.00.

Base value: PHP 1.50.

Accelerated value: PHP 2.00.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, `OFR-RB-DISBURSEMENT-STARTER`, transaction-based offerings.

Affected stakeholders: Depositor and Customer, Rural Bank, ODTI, 3neti, NetBank, Business Development Partner, Investor.

Affected calculations: transaction revenue, platform charge, bank-retained fee, ODTI revenue, royalty basis, partner allocation basis where approved.

Legal or accounting dependency: fee disclosure, tax, revenue recognition, transaction characterization, x-legal review.

Current status: Active.

Notes: The billable event, payer, reversal treatment, rail costs, and bank-retained amount must be defined per offering.

### `VAS-001` SMS Notification Customer-Facing Price

Identifier: `VAS-001`

Category: Value-added services.

Description: Working assumption for SMS notification customer-facing price.

Unit of measure: PHP per SMS notification or approved billable unit.

Conservative value: PHP 1.00.

Base value: PHP 1.00.

Accelerated value: PHP 1.00.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: Payroll, disbursement, remittance, collections, government payout, and notification-attached offerings.

Affected stakeholders: Depositor and Customer, Rural Bank, ODTI, Value-Added Service Provider, Investor.

Affected calculations: customer-facing price, provider cost, markup, attachment volume, net platform revenue, value-added provider revenue.

Legal or accounting dependency: provider agreement, tax, privacy, consent, messaging compliance.

Current status: Active.

Notes: Provider cost must be separately recorded under a provider-cost assumption before margin can be calculated.

### `VAS-002` Email Notification Customer-Facing Price

Identifier: `VAS-002`

Category: Value-added services.

Description: Working assumption for email notification customer-facing price.

Unit of measure: PHP per email notification or approved billable unit.

Conservative value: PHP 0.10.

Base value: PHP 0.10.

Accelerated value: PHP 0.10.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: Notification-attached offerings.

Affected stakeholders: Depositor and Customer, Rural Bank, ODTI, Value-Added Service Provider, Investor.

Affected calculations: customer-facing price, provider cost, markup, attachment volume, net platform revenue, value-added provider revenue.

Legal or accounting dependency: provider agreement, tax, privacy, consent, messaging compliance.

Current status: Active.

Notes: Provider cost may be small or bundled, but it cannot be assumed to be zero without evidence.

### `VAS-003` KYC Customer-Facing Price

Identifier: `VAS-003`

Category: Value-added services.

Description: Working assumption for KYC customer-facing price.

Unit of measure: PHP per KYC event or approved billable unit.

Conservative value: PHP 25.00.

Base value: PHP 25.00.

Accelerated value: PHP 25.00.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: KYC-qualified payout, payroll, government payout, remittance, and identity-attached offerings.

Affected stakeholders: Depositor and Customer, Rural Bank, ODTI, Value-Added Service Provider, NetBank, Regulator and Public Interest, Investor.

Affected calculations: customer-facing price, provider cost, markup, attachment volume, net platform revenue, value-added provider revenue, support and failure treatment.

Legal or accounting dependency: KYC sufficiency, identity obligations, privacy, consent, consumer protection, provider agreement, tax.

Current status: Active.

Notes: This does not conclude that any provider service satisfies legal KYC obligations.

### `VAS-004` Rider URL Or CTA Customer-Facing Price

Identifier: `VAS-004`

Category: Value-added services.

Description: Working assumption for rider URL, post-transaction CTA, or similar engagement item.

Unit of measure: Unresolved.

Conservative value: PHP 50.00.

Base value: PHP 50.00.

Accelerated value: PHP 50.00.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: Rider-attached offerings, campaign-attached offerings, feedback or engagement offerings.

Affected stakeholders: Depositor and Customer, Rural Bank, ODTI, Value-Added Service Provider, Business Development Partner, Investor.

Affected calculations: customer-facing price, provider cost, campaign revenue, markup, attachment volume, net platform revenue, possible partner allocation.

Legal or accounting dependency: advertising or campaign terms, consent, privacy, consumer protection, tax, revenue recognition.

Current status: Blocked.

Blocked reason: Billable unit unresolved.

Notes: Billable unit may be per transaction, per campaign, per placement, per response, or another approved model. Do not calculate projections until the billable unit is defined.

### `OPS-001` DevOps Deployment Setup Fee

Identifier: `OPS-001`

Category: DevOps, cloud, and managed operations.

Description: Working assumption for deployment setup fee per participating rural bank.

Unit of measure: PHP per bank deployment.

Conservative value: PHP 50,000.

Base value: PHP 50,000.

Accelerated value: PHP 50,000.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: Bank-deployed offerings requiring managed infrastructure.

Affected stakeholders: Rural Bank, ODTI, DevOps Provider, Investor.

Affected calculations: bank initial cost, DevOps provider revenue, ODTI resale or bundled margin if applicable, implementation economics.

Legal or accounting dependency: DevOps contracting model, revenue recognition, tax, service responsibility, ownership and delegated authority.

Current status: Active.

Notes: Must be separated from ODTI activation fees and cloud infrastructure costs.

### `OPS-002` DevOps Monthly Managed Operations Fee

Identifier: `OPS-002`

Category: DevOps, cloud, and managed operations.

Description: Working assumption for monthly managed operations per participating rural bank.

Unit of measure: PHP per bank per month.

Conservative value: PHP 10,000.

Base value: PHP 10,000.

Accelerated value: PHP 10,000.

Source: Program overview and initial package scaffold.

Evidence status: Working assumption.

Confidence level: Low.

Owner: x-commerce commercial architecture.

Review date: Open.

Affected offerings: Bank-deployed offerings requiring recurring managed operations.

Affected stakeholders: Rural Bank, ODTI, DevOps Provider, Investor.

Affected calculations: annual managed operations cost, DevOps provider revenue, ODTI resale or bundled margin if applicable, bank operating cost.

Legal or accounting dependency: DevOps contracting model, service-level scope, revenue recognition, tax, ownership and delegated authority.

Current status: Active.

Notes: Annual recurring total is PHP 120,000 per bank before setup, excluding cloud infrastructure charges unless a future model explicitly bundles them.

### `ADP-001` Banks Onboarded By Year

Identifier: `ADP-001`

Category: Adoption and onboarding.

Description: Number of rural banks onboarded by year for a selected offering.

Unit of measure: Banks onboarded per year.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Required first-offering model input.

Evidence status: Open.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, `OFR-RB-DISBURSEMENT-STARTER`.

Affected stakeholders: Rural Bank, RBAP, ODTI, 3neti, DevOps Provider, Investor.

Affected calculations: onboarding revenue, implementation workload, deployment setup fees, activation timing, active-bank conversion.

Legal or accounting dependency: onboarding contract terms, revenue recognition, tax.

Current status: Blocked.

Notes: Must be connected to active-bank assumption but not collapsed into it.

### `ADP-002` Active Banks By Year

Identifier: `ADP-002`

Category: Adoption and onboarding.

Description: Number of active participating rural banks by year for a selected offering.

Unit of measure: Active banks per year.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Required first-offering model input.

Evidence status: Open.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, `OFR-RB-DISBURSEMENT-STARTER`.

Affected stakeholders: Rural Bank, RBAP, ODTI, 3neti, NetBank, DevOps Provider, Value-Added Service Provider, Business Development Partner, Investor, Regulator and Public Interest.

Affected calculations: license revenue, subscription revenue, transaction volume, managed operations cost, provider volume, royalty basis, public-interest reach.

Legal or accounting dependency: none for count itself; downstream commercial treatment requires review.

Current status: Blocked.

Notes: Separate active banks from banks onboarded. An onboarded bank may not yet be active.

### `VOL-001` Average Successful Payroll Transactions Per Active Bank Per Month

Identifier: `VOL-001`

Category: Transaction volume and activity.

Description: Average successful payroll transactions per active participating rural bank per month for a payroll-focused offering. Intended to be derived from payroll customers, payroll runs, recipients per run, and completion rate once component assumptions exist.

Unit of measure: Successful payroll transactions per active bank per month.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Derived first-offering model input.

Evidence status: Open.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`.

Affected stakeholders: Depositor and Customer, Rural Bank, ODTI, 3neti, NetBank, DevOps Provider, Value-Added Service Provider, Business Development Partner, Investor, Regulator and Public Interest.

Affected calculations: transaction revenue, platform revenue, NetBank volume, support load, DevOps load, value-added attachment volume, partner participation, royalty calculations, public-interest indicators, and annual offering activity when combined with `ADP-002` and `ADP-003`.

Legal or accounting dependency: none for volume itself; downstream fee, tax, accounting, and legal treatment require review.

Current status: Blocked.

Notes: Preferred derivation is `CUS-001 x CUS-002 x CUS-003 x VOL-002 = VOL-001`. Annual offering activity is then driven by `ADP-002 x VOL-001 x ADP-003`. Stakeholder views must reference the derived canonical `VOL-001` value and must not independently recalculate or override it. No parallel direct transaction total may be used in the same scenario without a documented decision.

### `ATT-001` SMS Attachment Rate

Identifier: `ATT-001`

Category: Capability or value-added service attachment rates.

Description: Percentage of qualifying transactions that attach SMS notification.

Unit of measure: Percentage of qualifying transactions.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Required offering model input.

Evidence status: Open.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Open.

Affected offerings: Payroll, disbursement, remittance, and notification-attached offerings.

Affected stakeholders: Depositor and Customer, Rural Bank, ODTI, Value-Added Service Provider, Investor.

Affected calculations: SMS volume, provider revenue, ODTI markup, customer cost, support load, outcome evidence.

Legal or accounting dependency: messaging consent, privacy, provider agreement, tax.

Current status: Blocked.

Notes: Attachment rate should be modeled separately from transaction volume.

### `ATT-002` KYC Attachment Rate

Identifier: `ATT-002`

Category: Capability or value-added service attachment rates.

Description: Percentage of qualifying transactions or recipients that require KYC or identity service.

Unit of measure: Percentage of qualifying transactions, recipients, or other approved billable unit.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Required offering model input.

Evidence status: Open.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Open.

Affected offerings: KYC-qualified payout, government payout, remittance, payroll if applicable.

Affected stakeholders: Depositor and Customer, Rural Bank, ODTI, NetBank, Value-Added Service Provider, Regulator and Public Interest, Investor.

Affected calculations: KYC volume, provider revenue, provider cost, markup, support load, failure rate, legal review scope.

Legal or accounting dependency: KYC sufficiency, privacy, identity obligations, provider agreement, tax.

Current status: Blocked.

Notes: The billable unit must be defined before projections are calculated.

### `CST-001` SMS Direct Provider Cost

Identifier: `CST-001`

Category: Provider, rail, support, and operating costs.

Description: Direct provider cost for SMS notification.

Unit of measure: PHP per SMS or approved billable unit.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Provider quote required.

Evidence status: Provider quote requested.

Confidence level: Low.

Owner: Future provider-commercial owner.

Review date: Open.

Affected offerings: Notification-attached offerings.

Affected stakeholders: ODTI, Rural Bank, Value-Added Service Provider, Investor.

Affected calculations: gross markup, gross margin, provider revenue, ODTI net platform revenue.

Legal or accounting dependency: provider agreement, tax, revenue recognition.

Current status: Blocked.

Notes: Do not calculate SMS margin from `VAS-001` until this cost is known or explicitly assumed.

### `CST-002` KYC Direct Provider Cost

Identifier: `CST-002`

Category: Provider, rail, support, and operating costs.

Description: Direct provider cost for KYC or identity service.

Unit of measure: PHP per KYC event or approved billable unit.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Provider quote required.

Evidence status: Provider quote requested.

Confidence level: Low.

Owner: Future provider-commercial owner.

Review date: Open.

Affected offerings: KYC-qualified payout, identity-attached offerings.

Affected stakeholders: ODTI, Rural Bank, Value-Added Service Provider, NetBank, Regulator and Public Interest, Investor.

Affected calculations: gross markup, gross margin, provider revenue, ODTI net platform revenue, customer-facing price sensitivity.

Legal or accounting dependency: provider agreement, privacy, identity/KYC legal review, tax, revenue recognition.

Current status: Blocked.

Notes: Do not treat the full KYC customer-facing price as ODTI revenue.

### `ROY-001` 3neti Royalty Basis

Identifier: `ROY-001`

Category: 3neti royalty or license consideration.

Description: Basis on which 3neti may receive royalty or license consideration from ODTI.

Unit of measure: Unresolved.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: 3neti-ODTI agreement required.

Evidence status: Legal review required.

Confidence level: Low.

Owner: 3neti and ODTI commercial/legal owners.

Review date: Open.

Affected offerings: All offerings using 3neti IP.

Affected stakeholders: 3neti, ODTI, Investor.

Affected calculations: 3neti revenue, ODTI net contribution, investor scenarios, tax and accounting treatment.

Legal or accounting dependency: license agreement, royalty characterization, withholding tax, revenue recognition, related-party review.

Current status: Blocked.

Notes: Do not represent any percentage of ODTI revenue as 3neti income until this assumption is approved.

### `PAR-001` Business Development Partner Allocation Basis

Identifier: `PAR-001`

Category: Partner, referral, commission, and participation.

Description: Basis for possible business development partner allocation where a qualifying Commercial Event and attribution are approved.

Unit of measure: Unresolved.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Partner participation decision required.

Evidence status: Legal review required.

Confidence level: Low.

Owner: ODTI commercial owner and legal reviewer.

Review date: Open.

Affected offerings: Offerings with approved partner participation.

Affected stakeholders: Business Development Partner, ODTI, 3neti, Rural Bank, Investor.

Affected calculations: Commercial Waterfall, partner allocation, ODTI net contribution, attribution records.

Legal or accounting dependency: commission versus referral fee versus revenue share, tax withholding, contract language, attribution and duration rules.

Current status: Blocked.

Notes: Compensation should be earned by Commercial Events, not by discretion. No named individual has an approved allocation from this record.

### `RISK-001` Churn Rate

Identifier: `RISK-001`

Category: Churn, bad debt, refunds, reversals, and contingency.

Description: Rate at which active participating banks or customers stop using a selected offering.

Unit of measure: Percentage per year, with subject to be defined.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Required offering model input.

Evidence status: Open.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Open.

Affected offerings: All recurring offerings.

Affected stakeholders: Rural Bank, ODTI, 3neti, DevOps Provider, Value-Added Service Provider, Business Development Partner, Investor.

Affected calculations: active-bank count, recurring revenue, provider volume, support load, royalty basis, investor scenarios.

Legal or accounting dependency: contract termination terms, revenue recognition, refund rules.

Current status: Blocked.

Notes: Must define whether churn applies to banks, customers, sponsors, transactions, or modules.

### `RISK-002` Bad Debt Or Non-Collection Rate

Identifier: `RISK-002`

Category: Churn, bad debt, refunds, reversals, and contingency.

Description: Rate of invoiced revenue not collected or delayed beyond the modeled collection period.

Unit of measure: Percentage of invoiced amount.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Required offering model input.

Evidence status: Accounting review required.

Confidence level: Low.

Owner: Finance/accounting owner.

Review date: Open.

Affected offerings: All invoiced offerings.

Affected stakeholders: Rural Bank, ODTI, 3neti, DevOps Provider, Value-Added Service Provider, Business Development Partner, Investor.

Affected calculations: collected revenue, Commercial Waterfall timing, partner allocation timing, bad debt expense, cash flow.

Legal or accounting dependency: accounting policy, collection policy, contract terms, tax treatment.

Current status: Blocked.

Notes: Commercial allocations should define whether payment waits for collection.

### `TAX-001` Tax Treatment

Identifier: `TAX-001`

Category: Tax, withholding, and accounting treatment.

Description: Tax treatment applicable to each revenue category, provider cost, royalty, commission, and allocation.

Unit of measure: Tax rate or treatment by category.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Tax review required.

Evidence status: Tax review required.

Confidence level: Low.

Owner: Tax/accounting reviewer.

Review date: Open.

Affected offerings: All offerings.

Affected stakeholders: All stakeholders with revenue, cost, allocation, royalty, investment, or public-sector implications.

Affected calculations: net revenue, withholding, payable amounts, stakeholder financial views, Commercial Waterfalls.

Legal or accounting dependency: tax review, accounting review, legal characterization.

Current status: Blocked.

Notes: Do not embed tax rates in financial models without a canonical assumption record.

### `PUB-001` Public-Interest Completion Indicator

Identifier: `PUB-001`

Category: Public-interest and non-financial indicators.

Description: Non-financial indicator showing whether the selected offering improves completion, evidence, transparency, or access.

Unit of measure: To be defined per offering.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Public-interest model input.

Evidence status: Open.

Confidence level: Low.

Owner: Future public-interest reviewer.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, `OFR-RB-DISBURSEMENT-STARTER`, public-sector or inclusion-sensitive offerings.

Affected stakeholders: Depositor and Customer, Rural Bank, RBAP, Regulator and Public Interest, Investor.

Affected calculations: non-financial stakeholder views, public-interest narrative, regulator-facing evidence.

Legal or accounting dependency: none unless tied to regulated reporting or public-sector requirements.

Current status: Blocked.

Notes: Public Value should not be reduced to platform revenue.

### `ADP-003` Active Months Per Bank By Year

Identifier: `ADP-003`

Category: Adoption and onboarding.

Description: Number of months in each modeled year that an active bank contributes transaction activity after onboarding and activation.

Unit of measure: Active bank-months or active months per bank per year.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Institutional data required.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Before first numeric payroll model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future activated-bank offerings.

Affected stakeholders: Rural Bank, ODTI, DevOps Provider, Value-Added Service Provider, Investor, Regulator and Public Interest.

Affected calculations: annual transaction volume, annual subscription recognition, recurring DevOps cost, ODTI support cost, provider attachment volume, public-interest reach.

Affected line items: `OFR-RB-PAYROLL-STARTER-ODTI-REV-002`, `OFR-RB-PAYROLL-STARTER-RB-COST-002`, `OFR-RB-PAYROLL-STARTER-DEVOPS-REV-002`, `OFR-RB-PAYROLL-STARTER-VASP-VOL-001`.

Legal or accounting dependency: activation definition, subscription period, revenue recognition, service-period accounting.

Current status: Blocked.

Notes: Prevents the model from assuming every bank onboarded during a year contributes twelve full months of activity.

### `CUS-001` Payroll Customers Per Active Rural Bank

Identifier: `CUS-001`

Category: Customer, employer, payroll-account, and recipient-structure assumptions.

Description: Average number of active employer payroll customers served by one active participating rural bank.

Unit of measure: Active payroll customers per active bank.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Institutional data required.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Before first numeric payroll model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, 3neti, NetBank, DevOps Provider, Value-Added Service Provider, Investor, Regulator and Public Interest.

Affected calculations: `VOL-001` derivation, payroll activity, transaction volume, support load, customer-service burden, revenue, provider usage, infrastructure load, public reach.

Affected line items: `OFR-RB-PAYROLL-STARTER-INV-MEMO-001`, `OFR-RB-PAYROLL-STARTER-ODTI-COST-002`, `OFR-RB-PAYROLL-STARTER-ODTI-CONTRIB-001`.

Legal or accounting dependency: none for customer count itself; downstream pricing, privacy, contracting, and reporting treatment require review.

Current status: Blocked.

Notes: Evidence may come from bank payroll portfolio data, pilot target assumptions, management estimate, employer pipeline, or observed operating data.

### `CUS-002` Payroll Runs Per Customer Per Month

Identifier: `CUS-002`

Category: Customer, employer, payroll-account, and recipient-structure assumptions.

Description: Average number of payroll runs performed by one active employer customer per month.

Unit of measure: Payroll runs per active payroll customer per month.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Institutional data required.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Before first numeric payroll model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, NetBank, Value-Added Service Provider, Investor, Regulator and Public Interest.

Affected calculations: `VOL-001` derivation, transaction activity, operational load, notification usage, support requirements.

Affected line items: `OFR-RB-PAYROLL-STARTER-CUST-PASS-001`, `OFR-RB-PAYROLL-STARTER-RB-PASS-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-001`.

Legal or accounting dependency: none for frequency itself; downstream payroll, billing, and disclosure treatment require review.

Current status: Blocked.

Notes: Do not assume monthly payroll automatically equals one run. Frequency may be monthly, semi-monthly, weekly, irregular, or supplemental.

### `CUS-003` Average Recipients Per Payroll Run

Identifier: `CUS-003`

Category: Customer, employer, payroll-account, and recipient-structure assumptions.

Description: Average number of approved payroll recipients or employees included in one payroll run.

Unit of measure: Recipients per payroll run.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Institutional data required.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Before first numeric payroll model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, 3neti, NetBank, DevOps Provider, Value-Added Service Provider, Investor, Regulator and Public Interest.

Affected calculations: `VOL-001` derivation, employer transaction fees, recipient reach, SMS usage, NetBank or rail activity, infrastructure load, public-interest reach.

Affected line items: `OFR-RB-PAYROLL-STARTER-CUST-PASS-001`, `OFR-RB-PAYROLL-STARTER-RB-PASS-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-001`.

Legal or accounting dependency: privacy, recipient authorization, payroll documentation, and data handling require review.

Current status: Blocked.

Notes: Evidence may come from employer payroll-size data, pilot-employer profiles, rural-bank customer portfolios, or management estimate.

### `CUS-004` Employer Administrative Labor Cost Per Payroll Cycle

Identifier: `CUS-004`

Category: Customer, employer, payroll-account, and recipient-structure assumptions.

Description: Internal employer labor or administrative cost required to prepare, validate, coordinate, support, and reconcile one payroll cycle under the current or baseline process.

Unit of measure: PHP or labor hours per payroll cycle.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: Future customer-research owner.

Review date: Before first customer operational-value model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future employer-funded payout offerings.

Affected stakeholders: Employer / Customer, Rural Bank, Investor, Regulator and Public Interest.

Affected calculations: employer total cost of outcome, operational-value view, cost-of-doing-nothing comparison, payback and adoption rationale.

Affected line items: `OFR-RB-PAYROLL-STARTER-CUST-OPVAL-001`, `OFR-RB-PAYROLL-STARTER-CUST-RISK-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-005`.

Legal or accounting dependency: none unless monetized in formal financial statements or external claims.

Current status: Blocked.

Notes: Supports the customer-side thesis that administrative work may be the real cost around payments.

### `CUS-005` Employer Time Saved Per Payroll Cycle

Identifier: `CUS-005`

Category: Customer, employer, payroll-account, and recipient-structure assumptions.

Description: Administrative time saved after adopting the payroll offering compared with the approved baseline process.

Unit of measure: Hours per payroll cycle.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: Future customer-research owner.

Review date: Before first customer operational-value model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future employer-funded payout offerings.

Affected stakeholders: Employer / Customer, Rural Bank, Investor, Regulator and Public Interest.

Affected calculations: operational value, customer ROI, adoption evidence, investor and public-interest indicators.

Affected line items: `OFR-RB-PAYROLL-STARTER-CUST-OPVAL-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-005`.

Legal or accounting dependency: none unless externally reported or monetized in formal projections.

Current status: Blocked.

Notes: Evidence may come from before-and-after process measurement, pilot observation, employer interviews, or workflow analysis.

### `CUS-006` Failed-Payment Handling Cost

Identifier: `CUS-006`

Category: Customer, employer, payroll-account, and recipient-structure assumptions.

Description: Internal employer or rural-bank effort and cost associated with one failed or exception payroll transaction.

Unit of measure: PHP or labor hours per failed event.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: Future customer and operations research owner.

Review date: Before first exception-cost model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future transaction offerings with exception handling.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, NetBank, Investor, Regulator and Public Interest.

Affected calculations: customer operational cost, rural-bank support cost, impact of completion rate, value of improved evidence and reconciliation.

Affected line items: `OFR-RB-PAYROLL-STARTER-CUST-RISK-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-005`.

Legal or accounting dependency: none unless used in contractual service levels, penalties, or external claims.

Current status: Blocked.

Notes: Should be considered alongside `VOL-002` and reversal/refund treatment.

### `VOL-002` Payroll Completion Rate

Identifier: `VOL-002`

Category: Transaction volume and activity.

Description: Percentage of attempted recipient payroll disbursements that become successful qualifying payroll transactions.

Unit of measure: Percentage of attempted recipient disbursements.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Open.

Confidence level: Low.

Owner: Future offering model owner and x-change evidence owner.

Review date: Before first numeric payroll activity model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, 3neti, NetBank, DevOps Provider, Value-Added Service Provider, Investor, Regulator and Public Interest.

Affected calculations: `VOL-001` derivation, successful billable events, transaction fee revenue, provider attachment volume, support and exception burden, public-interest completion indicators.

Affected line items: `OFR-RB-PAYROLL-STARTER-CUST-PASS-001`, `OFR-RB-PAYROLL-STARTER-CUST-RISK-001`, `OFR-RB-PAYROLL-STARTER-CUST-OPVAL-002`, `OFR-RB-PAYROLL-STARTER-NETBANK-VOL-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-001`.

Legal or accounting dependency: definition of attempted event, definition of successful event, reversal treatment, failed-event treatment, reconciliation logic, x-change execution evidence, refund treatment.

Current status: Blocked.

Notes: Intended derivation relationship is `CUS-001 x CUS-002 x CUS-003 x VOL-002 = VOL-001`. Do not assign a value until event definitions and evidence sources are defined.

### `COL-001` Employer Fee Collection Timing

Identifier: `COL-001`

Category: Billing, invoicing, collection, and payment timing.

Description: Timing between employer billing, rural-bank collection, and availability of collected commercial fees for downstream obligations.

Unit of measure: Days, billing cycle, or collection period.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Accounting review required.

Confidence level: Low.

Owner: Future finance/accounting owner.

Review date: Before first cash-flow or payable model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future invoiced or collected offerings.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, 3neti, NetBank, DevOps Provider, Value-Added Service Provider, Investor.

Affected calculations: rural-bank cash receipt, ODTI payable timing, provider-payment timing, royalty-payment timing, bad debt, working capital, Commercial Waterfall timing if later applicable.

Affected line items: `OFR-RB-PAYROLL-STARTER-CUST-COST-001`, `OFR-RB-PAYROLL-STARTER-RB-REV-001`, `OFR-RB-PAYROLL-STARTER-RB-COST-003`, `OFR-RB-PAYROLL-STARTER-ODTI-REV-003`, `OFR-RB-PAYROLL-STARTER-ODTI-COST-001`, `OFR-RB-PAYROLL-STARTER-3NETI-REV-001`, `OFR-RB-PAYROLL-STARTER-VASP-REV-001`.

Legal or accounting dependency: contract terms, invoicing model, collection policy, accounting review, tax timing.

Current status: Blocked.

Notes: Commercial allocations should define whether payment waits for collection.

### `RB-001` Rural-Bank Retained Transaction Economics

Identifier: `RB-001`

Category: Rural-bank retained economics and bank-specific operating inputs.

Description: Approved basis by which the rural bank retains commercial value from the employer-paid payroll service fee.

Unit of measure: Fixed amount, percentage, margin formula, or another approved basis.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Legal review required.

Confidence level: Low.

Owner: ODTI commercial owner, Rural Bank commercial owner, and legal/accounting reviewers.

Review date: Before first Rural Bank or ODTI transaction economics model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future rural-bank transaction offerings.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, 3neti, Investor.

Affected calculations: Rural Bank retained contribution, Rural Bank payback, ODTI transaction revenue, employer customer-facing price allocation, consolidated offering economics.

Affected line items: `OFR-RB-PAYROLL-STARTER-RB-REV-003`, `OFR-RB-PAYROLL-STARTER-RB-COST-003`, `OFR-RB-PAYROLL-STARTER-ODTI-REV-003`, `OFR-RB-PAYROLL-STARTER-RB-CONTRIB-001`, `OFR-RB-PAYROLL-STARTER-ODTI-CONTRIB-001`.

Legal or accounting dependency: pricing decision, customer-facing disclosure, ODTI commercial terms, legal review, accounting review, tax treatment.

Current status: Blocked.

Notes: This is a derived allocation from the employer fee. It is not a second external inflow.

### `ODTI-001` ODTI Support Cost Per Active Bank

Identifier: `ODTI-001`

Category: ODTI implementation, support, and operating-cost assumptions.

Description: Recurring ODTI support, commercial administration, customer coordination, reporting, reconciliation, and program-operations cost attributable to one active rural bank.

Unit of measure: PHP per active bank per month or per year.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: ODTI operations and finance owner.

Review date: Before first ODTI contribution model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future ODTI-operated programs.

Affected stakeholders: ODTI, Rural Bank, 3neti, Investor.

Affected calculations: ODTI operating cost, ODTI net contribution, staffing needs, support capacity, investor view.

Affected line items: `OFR-RB-PAYROLL-STARTER-ODTI-COST-002`, `OFR-RB-PAYROLL-STARTER-ODTI-CONTRIB-001`, `OFR-RB-PAYROLL-STARTER-INV-FIN-001`.

Legal or accounting dependency: accounting classification, employment/contractor treatment, tax treatment.

Current status: Blocked.

Notes: Do not confuse this with DevOps managed-operations fees.

### `ODTI-002` ODTI Implementation Effort Or Cost Per Bank

Identifier: `ODTI-002`

Category: ODTI implementation, support, and operating-cost assumptions.

Description: ODTI implementation, configuration, training, commercial onboarding, coordination, and launch effort required for one rural bank.

Unit of measure: Hours, person-days, or PHP per bank.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: ODTI implementation and finance owner.

Review date: Before first activation economics model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future ODTI-implemented programs.

Affected stakeholders: ODTI, Rural Bank, 3neti, Investor.

Affected calculations: activation economics, implementation margin, staffing, first-year cost, payback, ODTI contribution.

Affected line items: `OFR-RB-PAYROLL-STARTER-ODTI-COST-003`, `OFR-RB-PAYROLL-STARTER-ODTI-CONTRIB-001`, `OFR-RB-PAYROLL-STARTER-INV-FIN-001`.

Legal or accounting dependency: implementation scope, training scope, standardization, bank readiness, legal and accounting treatment.

Current status: Blocked.

Notes: Keep separate from `LIC-004` activation price and `OPS-001` DevOps setup fee.

### `CLD-001` Public-Cloud Infrastructure Cost Per Bank

Identifier: `CLD-001`

Category: Public-cloud infrastructure cost.

Description: Direct public-cloud infrastructure cost for one rural-bank-owned deployment.

Unit of measure: PHP per bank per month or year.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Provider quote requested.

Confidence level: Low.

Owner: Rural Bank infrastructure owner and DevOps Provider.

Review date: Before first Rural Bank operating-cost model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future rural-bank-owned deployment offerings.

Affected stakeholders: Rural Bank, DevOps Provider, ODTI, Investor.

Affected calculations: Rural Bank operating cost, DevOps or managed-operations model, external outflow, ODTI bundle economics if later applicable, investor and scalability views.

Affected line items: `OFR-RB-PAYROLL-STARTER-RB-COST-009`, `OFR-RB-PAYROLL-STARTER-RB-CONTRIB-001`.

Legal or accounting dependency: cloud contract, data protection, accounting classification, tax treatment.

Current status: Blocked.

Notes: Under the baseline model, the rural bank owns the production environment and cloud billing relationship. Cloud cost is not automatically DevOps revenue.

### `NET-001` NetBank Or Infrastructure Fee Basis

Identifier: `NET-001`

Category: NetBank, rail, settlement, API, and infrastructure-fee assumptions.

Description: Approved fee basis for NetBank or another regulated banking, rail, API, account, settlement, or transaction-services participant.

Unit of measure: Unresolved.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Legal review required.

Confidence level: Low.

Owner: NetBank or infrastructure commercial owner, ODTI commercial owner, and x-legal reviewer.

Review date: Before first NetBank or rail economics model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future infrastructure-supported offerings.

Affected stakeholders: Rural Bank, NetBank, ODTI, 3neti, Investor, Regulator and Public Interest.

Affected calculations: Rural Bank cost, NetBank revenue, ODTI economics where applicable, consolidated internal elimination, transaction pricing, public-interest and infrastructure-readiness views.

Affected line items: `OFR-RB-PAYROLL-STARTER-RB-COST-007`, `OFR-RB-PAYROLL-STARTER-NETBANK-REV-001`, `OFR-RB-PAYROLL-STARTER-NETBANK-VOL-001`, `OFR-RB-PAYROLL-STARTER-NETBANK-MEMO-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-003`.

Legal or accounting dependency: exact NetBank role, regulated responsibility, account and settlement structure, contract, x-legal characterization, revenue recognition, tax.

Current status: Blocked.

Notes: Do not assign revenue merely because NetBank is structurally present.

### `NET-002` NetBank Or Infrastructure Operating Cost Basis

Identifier: `NET-002`

Category: NetBank, rail, settlement, API, and infrastructure-fee assumptions.

Description: Cost basis for NetBank or another infrastructure participant to provide account, API, rail, settlement, monitoring, compliance, exception handling, or reconciliation support.

Unit of measure: Unresolved.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` NetBank stakeholder view.

Evidence status: Institutional data required.

Confidence level: Low.

Owner: NetBank or infrastructure operating owner.

Review date: Before first NetBank contribution model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future infrastructure-supported offerings.

Affected stakeholders: NetBank, Rural Bank, ODTI, Investor, Regulator and Public Interest.

Affected calculations: NetBank service cost, compliance burden, reconciliation burden, recognized-income view, infrastructure-readiness view.

Affected line items: `OFR-RB-PAYROLL-STARTER-NETBANK-COST-001`, `OFR-RB-PAYROLL-STARTER-NETBANK-REV-002`.

Legal or accounting dependency: compliance, banking, settlement, and accounting review.

Current status: Blocked.

Notes: Operating burden must be understood before infrastructure participation is evaluated as revenue.

### `SMS-001` SMS Delivery Success Rate

Identifier: `SMS-001`

Category: SMS delivery-quality and messaging-operation assumptions.

Description: Percentage of attempted SMS notifications successfully delivered or accepted under the approved service definition.

Unit of measure: Percentage of attempted SMS notifications.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Provider quote requested.

Confidence level: Low.

Owner: SMS provider-commercial owner.

Review date: Before first SMS-attached payroll model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future SMS-attached offerings.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, Value-Added Service Provider, Investor, Regulator and Public Interest.

Affected calculations: successful SMS service volume, provider performance, failed-message treatment, customer value, support burden, Public Value indicators.

Affected line items: `OFR-RB-PAYROLL-STARTER-VASP-VOL-001`, `OFR-RB-PAYROLL-STARTER-VASP-REV-001`, `OFR-RB-PAYROLL-STARTER-RB-COST-006`, `OFR-RB-PAYROLL-STARTER-VASP-RISK-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-002`.

Legal or accounting dependency: provider definition of delivered, carrier reporting, retry policy, billing rule, failed-message refund rule, privacy and consent.

Current status: Blocked.

Notes: Do not confuse SMS attachment rate (`ATT-001`), SMS customer-facing price (`VAS-001`), SMS provider cost (`CST-001`), and SMS delivery success (`SMS-001`).

### `SMS-002` SMS Provider Delivery Cost Basis

Identifier: `SMS-002`

Category: SMS delivery-quality and messaging-operation assumptions.

Description: Cost incurred by the SMS Provider to deliver or attempt qualifying SMS notifications.

Unit of measure: PHP per SMS, carrier charge, aggregator charge, or another approved provider-cost basis.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` Value-Added Provider view.

Evidence status: Provider quote requested.

Confidence level: Low.

Owner: SMS provider-commercial owner.

Review date: Before first SMS provider-margin model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future SMS-attached offerings.

Affected stakeholders: Value-Added Service Provider, Rural Bank, ODTI, Investor.

Affected calculations: provider delivery cost, provider margin, external telecom outflow, failed-message treatment.

Affected line items: `OFR-RB-PAYROLL-STARTER-VASP-COST-001`, `OFR-RB-PAYROLL-STARTER-VASP-CONTRIB-001`.

Legal or accounting dependency: provider and carrier agreements, privacy, accounting, tax.

Current status: Blocked.

Notes: This may differ from `CST-001`, which describes the charge to the Rural Bank.

### `SMS-003` SMS Failed-Message Treatment

Identifier: `SMS-003`

Category: SMS delivery-quality and messaging-operation assumptions.

Description: Commercial and operational treatment of failed, delayed, duplicate, or undelivered SMS events.

Unit of measure: Failure rate, refund rule, credit rule, retry rule, or another approved treatment.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` Value-Added Provider view.

Evidence status: Provider quote requested.

Confidence level: Low.

Owner: SMS provider-commercial owner and ODTI commercial owner.

Review date: Before first SMS provider-margin model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future SMS-attached offerings.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, Value-Added Service Provider, Regulator and Public Interest.

Affected calculations: failed-message treatment, provider margin, Rural Bank SMS cost adjustment, customer value, support burden.

Affected line items: `OFR-RB-PAYROLL-STARTER-VASP-RISK-001`, `OFR-RB-PAYROLL-STARTER-VASP-CONTRIB-001`.

Legal or accounting dependency: provider agreement, refund treatment, privacy, accounting, tax.

Current status: Blocked.

Notes: If failed-message treatment creates a refund, credit, or payable adjustment, the offering model should add a separate internal-elimination line.

### `SMS-004` SMS Privacy And Consent Readiness

Identifier: `SMS-004`

Category: SMS delivery-quality and messaging-operation assumptions.

Description: Readiness of SMS notification consent, disclosure, recipient contact-data handling, and privacy controls.

Unit of measure: Approved readiness status, checklist, or other governance indicator.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` Value-Added Provider and Public Interest views.

Evidence status: Legal review required.

Confidence level: Low.

Owner: ODTI commercial owner, SMS provider owner, and x-legal reviewer.

Review date: Before SMS is included in external customer-facing material or numeric model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future SMS-attached offerings.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, Value-Added Service Provider, Regulator and Public Interest.

Affected calculations: SMS eligibility, public-interest transparency, provider participation, customer-facing disclosure.

Affected line items: `OFR-RB-PAYROLL-STARTER-VASP-MEMO-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-002`.

Legal or accounting dependency: privacy, consent, disclosure, data handling, and provider-contract review.

Current status: Blocked.

Notes: SMS should not be modeled as purely technical usage without consent and privacy review.

### `OPS-003` DevOps Direct Engineering And Tooling Cost Per Bank

Identifier: `OPS-003`

Category: DevOps and managed operations.

Description: Direct DevOps cost required to provision, monitor, maintain, back up, patch, support, and hand over one rural-bank environment.

Unit of measure: PHP or engineering hours per bank per month or year.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: DevOps Provider and ODTI operations owner.

Review date: Before first DevOps margin or staffing model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future managed operations offerings.

Affected stakeholders: DevOps Provider, Rural Bank, ODTI, Investor.

Affected calculations: DevOps gross margin, staffing capacity, setup economics, managed-operations sustainability, rural-bank total cost, investor operating view.

Affected line items: `OFR-RB-PAYROLL-STARTER-DEVOPS-COST-001`, `OFR-RB-PAYROLL-STARTER-DEVOPS-CONTRIB-001`.

Legal or accounting dependency: service agreement, accounting classification, tax.

Current status: Blocked.

Notes: Keep separate from `OPS-001` customer-facing setup fee, `OPS-002` recurring managed-operations fee, and `CLD-001` cloud infrastructure cost.

### `OPS-004` DevOps External Tooling Cost

Identifier: `OPS-004`

Category: DevOps and managed operations.

Description: External monitoring, backup, security, incident, documentation, automation, or similar tooling cost used by the DevOps Provider.

Unit of measure: PHP per environment, per month, per tool, or another approved basis.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` DevOps Provider view.

Evidence status: Provider quote requested.

Confidence level: Low.

Owner: DevOps Provider.

Review date: Before first DevOps cost model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future managed operations offerings.

Affected stakeholders: DevOps Provider, Rural Bank, ODTI, Investor.

Affected calculations: DevOps external outflow, DevOps margin, operating sustainability.

Affected line items: `OFR-RB-PAYROLL-STARTER-DEVOPS-COST-002`, `OFR-RB-PAYROLL-STARTER-DEVOPS-CONTRIB-001`.

Legal or accounting dependency: vendor contract, data protection, accounting, tax.

Current status: Blocked.

Notes: External tooling cost should remain separate from DevOps Provider revenue.

### `OPS-005` DevOps Operational Readiness Indicator

Identifier: `OPS-005`

Category: DevOps and managed operations.

Description: Operational readiness indicator for environments supported, uptime, incident response, backup verification, recovery time, and handover quality.

Unit of measure: Checklist, service-level indicator, percentage, time measure, or another approved operational measure.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` DevOps Provider and Public Interest views.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: DevOps Provider and ODTI operations owner.

Review date: Before external operating model or public-interest reporting.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future managed operations offerings.

Affected stakeholders: DevOps Provider, Rural Bank, ODTI, Investor, Regulator and Public Interest.

Affected calculations: operational readiness, public confidence, provider replaceability, governance fidelity, capacity planning.

Affected line items: `OFR-RB-PAYROLL-STARTER-DEVOPS-CAP-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-004`.

Legal or accounting dependency: service-level commitments, data protection, operational governance.

Current status: Blocked.

Notes: Operational reliability is part of commercial trust, but this indicator should not be monetized automatically.

### `3NETI-001` 3neti R&D Cost Basis

Identifier: `3NETI-001`

Category: 3neti R&D, stewardship, IP, and legal-cost assumptions.

Description: 3neti cost to improve reusable technology and architecture related to the payroll offering and future extracted package capabilities.

Unit of measure: PHP, hours, person-days, or another approved R&D basis.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` 3neti view.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: 3neti R&D owner.

Review date: Before first 3neti contribution or investor model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future offerings using 3neti IP.

Affected stakeholders: 3neti, ODTI, Investor.

Affected calculations: 3neti contribution, investor capital requirement, R&D sustainability.

Affected line items: `OFR-RB-PAYROLL-STARTER-3NETI-COST-001`, `OFR-RB-PAYROLL-STARTER-3NETI-CONTRIB-001`, `OFR-RB-PAYROLL-STARTER-INV-FIN-001`.

Legal or accounting dependency: accounting classification, IP capitalization or expensing review, tax.

Current status: Blocked.

Notes: Documentation continues to discover software; this should not trigger premature implementation.

### `3NETI-002` 3neti Package Stewardship And Documentation Cost Basis

Identifier: `3NETI-002`

Category: 3neti R&D, stewardship, IP, and legal-cost assumptions.

Description: 3neti cost of maintaining x-commerce documentation, assumptions, architecture, and traceability for the offering.

Unit of measure: PHP, hours, person-days, or another approved stewardship basis.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` 3neti view.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: 3neti architecture and documentation owner.

Review date: Before first 3neti contribution or investor model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future offerings requiring x-commerce stewardship.

Affected stakeholders: 3neti, ODTI, Investor.

Affected calculations: 3neti contribution, investor capital requirement, commercial-architecture sustainability.

Affected line items: `OFR-RB-PAYROLL-STARTER-3NETI-COST-002`, `OFR-RB-PAYROLL-STARTER-3NETI-CONTRIB-001`, `OFR-RB-PAYROLL-STARTER-INV-FIN-001`.

Legal or accounting dependency: accounting classification, IP/legal documentation review, tax.

Current status: Blocked.

Notes: Captures reusable commercial learning, not deployable customer operations.

### `3NETI-003` 3neti External IP And Legal-Service Cost Basis

Identifier: `3NETI-003`

Category: 3neti R&D, stewardship, IP, and legal-cost assumptions.

Description: External IP protection, license documentation, legal handoff, and related-party review cost.

Unit of measure: PHP, professional-service fee, or another approved legal-cost basis.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` 3neti view.

Evidence status: Legal review required.

Confidence level: Low.

Owner: 3neti legal/IP owner and x-legal reviewer.

Review date: Before first 3neti legal-cost or investor model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future offerings using 3neti IP.

Affected stakeholders: 3neti, ODTI, Investor.

Affected calculations: 3neti cost view, legal-handoff planning, investor capital requirement.

Affected line items: `OFR-RB-PAYROLL-STARTER-3NETI-COST-003`, `OFR-RB-PAYROLL-STARTER-3NETI-CONTRIB-001`, `OFR-RB-PAYROLL-STARTER-INV-FIN-001`.

Legal or accounting dependency: legal review required, accounting treatment, tax.

Current status: Blocked.

Notes: x-commerce identifies commercial architecture; x-legal determines legal characterization.

### `INV-001` Payroll Offering Capital Requirement

Identifier: `INV-001`

Category: Investor and capital assumptions.

Description: Capital potentially required to support offering development, launch readiness, governance, operations, or scale.

Unit of measure: PHP, funding tranche, or approved use-of-funds basis.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` Investor view.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: Future finance owner and investor-relations owner.

Review date: Before first investor financing model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future financed offerings.

Affected stakeholders: Investor, ODTI, 3neti, Rural Bank.

Affected calculations: capital requirement, use of funds, offering readiness, investor financing view.

Affected line items: `OFR-RB-PAYROLL-STARTER-INV-FIN-001`.

Legal or accounting dependency: securities, corporate, tax, accounting, and governance review.

Current status: Blocked.

Notes: Capital inflow must not be counted as operating revenue.

### `INV-002` Investor Return Mechanism

Identifier: `INV-002`

Category: Investor and capital assumptions.

Description: Possible mechanism by which investor return may arise, such as equity, dividends, appreciation, repayment, or conversion.

Unit of measure: Financing-instrument term, percentage, repayment term, conversion term, or another approved basis.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` Investor view.

Evidence status: Legal review required.

Confidence level: Low.

Owner: Future finance owner, corporate owner, and legal reviewer.

Review date: Before any investor return model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future financed offerings.

Affected stakeholders: Investor, ODTI, 3neti.

Affected calculations: investor ownership view, financing model, potential return mechanism.

Affected line items: `OFR-RB-PAYROLL-STARTER-INV-OWN-001`.

Legal or accounting dependency: securities, corporate, tax, accounting, and governance review.

Current status: Blocked.

Notes: Investor return is not an operational Commercial Waterfall allocation.

### `INV-003` Confidence And Governance Indicator

Identifier: `INV-003`

Category: Investor and capital assumptions.

Description: Indicator that the offering remains understandable, governed, traceable, reconcilable, and aligned with documented commercial architecture.

Unit of measure: Checklist, maturity rating, governance score, or another approved non-financial measure.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Instantiated `OFR-RB-PAYROLL-STARTER` Investor and Public Interest views.

Evidence status: Open.

Confidence level: Low.

Owner: x-commerce commercial architecture owner.

Review date: Before external investor or governance reporting.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future modeled offerings.

Affected stakeholders: Investor, ODTI, 3neti, Rural Bank, Regulator and Public Interest.

Affected calculations: investor confidence indicators, public-interest governance fidelity, provider replaceability, traceability maturity.

Affected line items: `OFR-RB-PAYROLL-STARTER-INV-MEMO-002`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-004`.

Legal or accounting dependency: none unless externally reported or used in financing documents.

Current status: Blocked.

Notes: Confidence Value is not operating revenue.

### `PUB-002` Recipient Satisfaction Indicator

Identifier: `PUB-002`

Category: Public-interest and non-financial indicators.

Description: Offering-specific indicator of recipient satisfaction, convenience, clarity, flexibility, or experience.

Unit of measure: Survey score, percentage, index, or another approved measure.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Open.

Confidence level: Low.

Owner: Future public-interest reviewer.

Review date: Before first public-interest or customer-value model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future recipient-facing offerings.

Affected stakeholders: Employer / Customer, Rural Bank, Investor, Regulator and Public Interest.

Affected calculations: customer value, recipient value, public-interest indicator, investor confidence.

Affected line items: `OFR-RB-PAYROLL-STARTER-CUST-OPVAL-002`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-005`.

Legal or accounting dependency: none unless externally reported, surveyed under regulated program rules, or used in public claims.

Current status: Blocked.

Notes: Do not monetize this automatically.

### `PUB-003` Employer Administrative-Burden Reduction

Identifier: `PUB-003`

Category: Public-interest and non-financial indicators.

Description: Measured reduction in payroll preparation, coordination, follow-up, exception handling, or reconciliation effort.

Unit of measure: Percentage, hours, or another approved operational measure.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Management estimate required.

Confidence level: Low.

Owner: Future public-interest reviewer and customer-research owner.

Review date: Before first public-interest or customer-value model.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future customer-work-reduction offerings.

Affected stakeholders: Employer / Customer, Rural Bank, Investor, Regulator and Public Interest.

Affected calculations: operational value, public-interest view, investor confidence, adoption rationale.

Affected line items: `OFR-RB-PAYROLL-STARTER-CUST-OPVAL-001`, `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-005`.

Legal or accounting dependency: none unless externally reported or monetized in formal projections.

Current status: Blocked.

Notes: Supports the thesis: Payments take seconds. Work takes days.

### `PUB-004` Payroll Outcome Completion Indicator

Identifier: `PUB-004`

Category: Public-interest and non-financial indicators.

Description: Non-financial indicator showing whether approved payroll value reaches intended recipients with evidence and reconciliation.

Unit of measure: Percentage, count, or approved completion measure.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Normalized `OFR-RB-PAYROLL-STARTER` offering model.

Evidence status: Open.

Confidence level: Low.

Owner: Future public-interest reviewer and x-change evidence owner.

Review date: Before first public-interest model or external reporting.

Affected offerings: `OFR-RB-PAYROLL-STARTER`, future payout and disbursement offerings.

Affected stakeholders: Employer / Customer, Rural Bank, ODTI, NetBank, Investor, Regulator and Public Interest.

Affected calculations: public-interest completion, customer outcome quality, governance reporting.

Affected line items: `OFR-RB-PAYROLL-STARTER-PUBLIC-PI-001`, `OFR-RB-PAYROLL-STARTER-CUST-OPVAL-002`.

Legal or accounting dependency: none unless tied to regulated reporting, public-sector reporting, or public claims.

Current status: Blocked.

Notes: May use `VOL-002` operationally but should remain a public-interest output definition rather than a duplicate volume assumption.

## Assumption Dependency Example

`VOL-001` is intended to be derived once its component assumptions are ready:

```text
CUS-001
    x CUS-002
    x CUS-003
    x VOL-002
    =
VOL-001
```

Annual offering activity is then driven by:

```text
ADP-002
    x VOL-001
    x ADP-003
```

No stakeholder view may independently override `VOL-001` once it is derived. A direct aggregate `VOL-001` placeholder may be used only in a later task if explicitly authorized as a controlled scenario placeholder.

`VOL-001` should be referenced by many calculations:

| Calculation | Uses `VOL-001` |
| --- | --- |
| Rural Bank transaction fee revenue | Yes |
| ODTI platform transaction revenue | Yes |
| NetBank transaction volume | Yes |
| DevOps operational load | Yes |
| SMS attachment count | Yes, with `ATT-001` |
| KYC attachment count | Yes, with `ATT-002` |
| Business Development Partner allocation | Yes, if `PAR-001` is approved |
| 3neti royalty calculation | Yes, if `ROY-001` uses transaction activity |
| Investor scenario view | Yes |
| Public-interest completion indicators | Possibly |

No stakeholder financial view should create a duplicate version of this assumption.

## Minimum Assumptions Required Before First Numeric Model

No first numeric projection should be produced until the minimum required assumptions are either Active or Approved, or are explicitly identified as controlled scenario placeholders.

A blocked assumption must not be silently replaced by a spreadsheet guess.

For a likely first modeled offering such as `OFR-RB-PAYROLL-STARTER`, the minimum readiness checklist is:

### Offering Definition

- approved offering scope;
- target buyer;
- payer;
- recipient;
- included modules;
- optional capabilities;
- launch pricing model.

### Adoption

- banks onboarded by year: `ADP-001`;
- active banks by year: `ADP-002`;
- active months or first-year activation timing: `ADP-003`;
- churn: `RISK-001`.

### Customer And Payroll Activity

- payroll customers per active bank: `CUS-001`;
- payroll runs per customer per month: `CUS-002`;
- average recipients or employees per payroll run: `CUS-003`;
- successful transactions per active bank per month: `VOL-001`;
- payroll completion rate: `VOL-002`;
- customer administrative labor cost: `CUS-004`;
- time saved per payroll cycle: `CUS-005`;
- failed-payment handling cost: `CUS-006`.

### Pricing And Revenue

- license, subscription, or hybrid model selected: `LIC-004`, `LIC-005`;
- customer-facing transaction fee: `PRC-001`;
- rural-bank retained amount or formula: `RB-001`;
- ODTI retained amount or formula: derived with `RB-001` and `PRC-001`;
- billable event definition: offering decision and `VOL-002`;
- payment and collection timing: `COL-001`.

### Provider And Infrastructure Costs

- NetBank or rail fee basis: `NET-001`;
- NetBank or infrastructure operating cost basis: `NET-002`;
- cloud infrastructure cost: `CLD-001`;
- DevOps setup and recurring customer-facing fees: `OPS-001`, `OPS-002`;
- DevOps direct engineering and tooling cost: `OPS-003`, `OPS-004`;
- DevOps operational readiness: `OPS-005`;
- ODTI support cost per bank: `ODTI-001`;
- ODTI implementation effort or cost: `ODTI-002`;
- SMS direct provider cost: `CST-001`;
- SMS delivery cost and failed-message treatment: `SMS-001`, `SMS-002`, `SMS-003`;
- SMS privacy and consent readiness: `SMS-004`;
- KYC direct provider cost, if included: `CST-002`.

### Attachments

- SMS attachment rate: `ATT-001`;
- SMS customer-facing price: `VAS-001`;
- SMS delivery success rate: `SMS-001`;
- KYC attachment rate, if applicable: `ATT-002`;
- billable unit for each attached capability: service-specific `VAS-*`, `ATT-*`, `SMS-*`, or `CST-*` records.

### Commercial Waterfall

- 3neti royalty or license basis: `ROY-001`;
- 3neti R&D, stewardship, and legal-cost assumptions: `3NETI-001`, `3NETI-002`, `3NETI-003`;
- business development partner allocation, if any: `PAR-001`;
- attribution basis;
- deduction order;
- reversal and refund treatment.

### Risk And Finance

- bad debt or collection timing: `RISK-002`, `COL-001`;
- taxes and withholding: `TAX-001`;
- refund or reversal assumptions;
- contingency;
- support burden.

### Public And Non-Financial Indicators

- customer preparation time and burden: `CUS-004`, `CUS-005`, `PUB-003`;
- transaction completion: `PUB-004`, supported operationally by `VOL-002`;
- reconciliation burden: `CUS-004`, `CUS-006`, `PUB-003`;
- recipient satisfaction or another approved Public Value indicator: `PUB-002`;
- investor confidence and governance indicators: `INV-001`, `INV-002`, `INV-003`.

## First Payroll Offering Readiness Summary

### Structurally Present But Blocked

- adoption: `ADP-001`, `ADP-002`, `ADP-003`;
- activity derivation: `CUS-001`, `CUS-002`, `CUS-003`, `VOL-001`, `VOL-002`;
- pricing allocation: `RB-001`;
- provider costs: `CST-001`, `SMS-001`, `SMS-002`, `SMS-003`, `SMS-004`;
- NetBank fees and operating burden: `NET-001`, `NET-002`;
- cloud costs: `CLD-001`;
- ODTI support and implementation costs: `ODTI-001`, `ODTI-002`;
- DevOps direct costs and readiness: `OPS-003`, `OPS-004`, `OPS-005`;
- tax: `TAX-001`;
- bad debt and collection timing: `RISK-002`, `COL-001`;
- royalty and 3neti stewardship costs: `ROY-001`, `3NETI-001`, `3NETI-002`, `3NETI-003`;
- customer operational-value indicators: `CUS-004`, `CUS-005`, `CUS-006`;
- public-interest indicators: `PUB-001`, `PUB-002`, `PUB-003`, `PUB-004`;
- investor indicators: `INV-001`, `INV-002`, `INV-003`.

### Active Working Assumptions

The following records remain Active working assumptions, not approved terms:

- `LIC-004`;
- `LIC-005`;
- `PRC-001`;
- `VAS-001`;
- `OPS-001`;
- `OPS-002`.

### Not Applicable To Baseline

The following remain outside the first payroll baseline:

- perpetual license and maintenance model: `LIC-001`, `LIC-002`;
- subscription-only model: `LIC-003`;
- email attachment: `VAS-002`;
- KYC attachment and pricing: `ATT-002`, `VAS-003`, `CST-002`;
- rider or CTA: `VAS-004`;
- business-development partner allocation: `PAR-001`;
- Channel Partner assumptions.

If any required assumption is still Blocked, the first numeric model must either pause or explicitly label the value as a controlled scenario placeholder approved for sensitivity testing. Controlled placeholders are not approved prices, forecasts, contracts, or commitments.

## Review Workflow

When adding or changing an assumption:

1. Check whether an equivalent assumption already exists.
2. If it exists, update the existing record instead of creating a duplicate.
3. If it does not exist, create a new identifier.
4. Identify affected offerings.
5. Identify affected stakeholders.
6. Identify affected calculations.
7. Identify legal, accounting, tax, or regulatory dependencies.
8. Assign an owner.
9. Set evidence status and confidence level.
10. Record review date or review trigger.
11. Update downstream financial models and stakeholder views.

## Retiring Assumptions

Do not delete an assumption merely because it becomes obsolete.

Mark it retired and explain:

- why it was retired;
- what replaced it;
- which models were affected;
- who approved the change;
- when the change took effect.

## Next Work

Recommended next task:

```text
Create an evidence-acquisition and controlled-placeholder plan for OFR-RB-PAYROLL-STARTER.
```

That plan should classify each blocked assumption by evidence source before any provisional numeric model is produced.
