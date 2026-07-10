# Assumptions Register

## Status

Current status: governed financial-architecture register.

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
| `PRC` | Pricing |
| `LIC` | License, maintenance, and subscription |
| `VAS` | Value-added services |
| `OPS` | DevOps, cloud, and managed operations |
| `CST` | Provider, rail, support, and operating costs |
| `REV` | Revenue allocation and Commercial Waterfall inputs |
| `ROY` | 3neti royalty or license consideration |
| `PAR` | Partner, referral, commission, and participation |
| `TAX` | Tax, withholding, and accounting treatment |
| `RISK` | Churn, bad debt, refunds, reversals, and contingency |
| `PUB` | Public-interest and non-financial indicators |
| `INV` | Investor and capital assumptions |

Identifiers should be stable. If an assumption is retired, mark it retired instead of reusing its identifier.

## Evidence Status Values

Use one of:

- `Open`;
- `Working assumption`;
- `Management estimate`;
- `Provider quote requested`;
- `Provider quote received`;
- `Institutional proposal`;
- `Market reference`;
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

## Scenario Values

Scenario values should use:

- `Conservative`;
- `Base`;
- `Accelerated`.

If no value is justified, use `Open`.

If a value is not scenario-dependent, repeat the same value and explain why.

If a value is already a range, preserve the range and identify what evidence is needed to narrow it.

## Offering References

Initial offering references:

| Offering ID | Offering | Status | Notes |
| --- | --- | --- | --- |
| `OFR-RB-PAYROLL-STARTER` | Rural Bank Payroll Starter | Candidate first modeled offering | Do not model numerically until offering scope is approved. |
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

Current status: Active working assumption.

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

Current status: Active working assumption.

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

Current status: Active working assumption.

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

Current status: Active working assumption.

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

Current status: Active working assumption.

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

Current status: Active working assumption.

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

Current status: Active working assumption.

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

Current status: Active working assumption.

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

Current status: Active working assumption.

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

Current status: Active working assumption with unresolved billable unit.

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

Current status: Active working assumption.

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

Current status: Active working assumption.

Notes: Annual recurring total is PHP 120,000 per bank before setup, excluding cloud infrastructure charges unless a future model explicitly bundles them.

### `VOL-001` Average Successful Payroll Transactions Per Active Bank Per Month

Identifier: `VOL-001`

Category: Transaction volume and activity.

Description: Average successful payroll transactions per active participating rural bank per month for a payroll-focused offering.

Unit of measure: Successful payroll transactions per active bank per month.

Conservative value: Open.

Base value: Open.

Accelerated value: Open.

Source: Required first-offering model input.

Evidence status: Open.

Confidence level: Low.

Owner: Future offering model owner.

Review date: Open.

Affected offerings: `OFR-RB-PAYROLL-STARTER`.

Affected stakeholders: Depositor and Customer, Rural Bank, ODTI, 3neti, NetBank, DevOps Provider, Value-Added Service Provider, Business Development Partner, Investor, Regulator and Public Interest.

Affected calculations: transaction revenue, platform revenue, NetBank volume, support load, DevOps load, value-added attachment volume, partner participation, royalty calculations, public-interest indicators.

Legal or accounting dependency: none for volume itself; downstream fee, tax, accounting, and legal treatment require review.

Current status: Open.

Notes: This is the example of one assumption affecting many models. Do not duplicate it in stakeholder financial views.

### `VOL-002` Active Banks By Year

Identifier: `VOL-002`

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

Current status: Open.

Notes: Separate active banks from banks onboarded. An onboarded bank may not yet be active.

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

Current status: Open.

Notes: Must be connected to active-bank assumption but not collapsed into it.

### `VAS-ATT-001` SMS Attachment Rate

Identifier: `VAS-ATT-001`

Category: Value-added services.

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

Current status: Open.

Notes: Attachment rate should be modeled separately from transaction volume.

### `VAS-ATT-002` KYC Attachment Rate

Identifier: `VAS-ATT-002`

Category: Value-added services.

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

Current status: Open.

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

Current status: Open.

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

Current status: Open.

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

Current status: Open.

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

Current status: Open.

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

Current status: Open.

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

Current status: Open.

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

Current status: Open.

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

Current status: Open.

Notes: Public Value should not be reduced to platform revenue.

## Assumption Dependency Example

`VOL-001` should be referenced by many calculations:

| Calculation | Uses `VOL-001` |
| --- | --- |
| Rural Bank transaction fee revenue | Yes |
| ODTI platform transaction revenue | Yes |
| NetBank transaction volume | Yes |
| DevOps operational load | Yes |
| SMS attachment count | Yes, with `VAS-ATT-001` |
| KYC attachment count | Yes, with `VAS-ATT-002` |
| Business Development Partner allocation | Yes, if `PAR-001` is approved |
| 3neti royalty calculation | Yes, if `ROY-001` uses transaction activity |
| Investor scenario view | Yes |
| Public-interest completion indicators | Possibly |

No stakeholder financial view should create a duplicate version of this assumption.

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

Recommended next document:

```text
docs/economics/five-year-projections.md
```

That document should define the projection framework and calculation order. It should not begin with numeric ecosystem projections.

After the projection framework exists, stakeholder financial-view templates should consume assumptions from this register rather than inventing local values.
