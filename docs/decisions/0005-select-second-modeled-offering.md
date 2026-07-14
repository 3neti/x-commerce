# 0005: Select Second Modeled Offering

## Status

Accepted

## Date

2026-07-14

## Decision Question

Which offering should become the second modeled x-commerce offering after `OFR-RB-PAYROLL-STARTER`?

This decision selects and scopes the second offering to model. It does not approve pricing, forecasts, launch, legal characterization, accounting treatment, tax treatment, provider participation, NetBank fees, 3neti royalties, contracts, software implementation, or x-change integration.

## Context

`OFR-RB-PAYROLL-STARTER` has now proven the documentation-first commercial architecture through:

- offering-level stakeholder views;
- governed assumptions;
- controlled provisional inputs;
- Level 1 numeric economics;
- a generated workbook;
- stakeholder financial briefs;
- evidence-packet scaffolding.

Payroll Starter is not finished in an evidence sense. It still requires evidence maturation for adoption, activity, employer pricing, ODTI cost, DevOps cost, cloud cost, collection risk, Rural Bank internal support cost, NetBank fees, tax, royalty, and capital-budgeting inputs.

However, Payroll Starter is architecturally complete enough to serve as the first canonical model. The next commercial question is which additional offering should be instantiated so x-commerce can begin testing the broader rural-bank-owned digital platform economics across more than one revenue source.

The second offering should be close enough to Payroll Starter to reuse the modeling discipline, but different enough to test a second revenue pattern.

## Candidate Comparison

| Candidate | Strengths | Risks or complexity |
| --- | --- | --- |
| Rural Bank Digital Disbursement Starter | Closest structural neighbor to Payroll Starter; clear sponsor or funder; clear beneficiary or recipient; strong fit for ayudas, incentives, reimbursements, petty cash, benefits, emergency support, association payouts, and other payout programs; reuses completion evidence, reporting, reconciliation, optional SMS, and possible KYC/eligibility logic; tests non-employer sponsor revenue. | Can become too broad if ayudas, incentives, reimbursements, government payouts, and emergency support are blended into one generic model; payer, eligibility, funding, evidence, and legal dependencies may vary by use case; needs careful scoping. |
| Collections Starter | Recurring revenue potential; useful to merchants, schools, associations, cooperatives, rural banks, and institutions; strong complement to payouts because it models money moving into a merchant or institution rather than out to recipients. | Customer, payer, settlement, reversal, dispute, and evidence logic differ materially from payout logic; may require merchant pricing, receivables, refunds, chargebacks, and channel-specific fees before it is narrow enough. |
| Merchant Payments Starter | Attractive rural-bank revenue lane; supports local merchants; can create transaction, subscription, dispute-evidence, and reporting economics; may support future merchant ecosystem expansion. | Merchant discount, fixed fee, wallet/account implications, dispute treatment, settlement timing, and regulatory terminology need more groundwork; may overlap with collections unless scoped carefully. |
| Remittance Starter | Strong revenue candidate; domestic and inward remittance can create sender-facing or sponsor-facing fees, rural-bank participation, NetBank or rail involvement, and optional notification economics. | Legal, regulatory, AML/KYC, rail, settlement, sender/receiver relationship, and NetBank dependencies are heavier; inward remittance may involve additional counterparties and foreign-provider economics. |
| Government Programs Starter | Potentially high-volume and public-interest aligned; supports benefits, subsidies, notices, and auditable public-sector payments; can demonstrate transparency and evidence value. | Procurement, audit, legal characterization, public-sector sponsor requirements, data sharing, disclosure, political timing, and public accountability make it too heavy for the second model unless narrowed to a specific program. |

## Decision

Select:

```text
OFR-RB-DISBURSEMENT-STARTER
```

as the second modeled x-commerce offering.

The offering name is:

```text
Rural Bank Digital Disbursement Starter
```

The selected second offering should be modeled as a narrow institutional-disbursement product, not as every possible payout use case.

## Scoped Offering Definition

Working outcome:

> A sponsor funds and authorizes a batch of approved disbursements through a participating rural bank, resulting in approved recipients receiving value with transaction evidence, reporting, and reconciliation support.

This definition is intentionally narrower than all digital payouts. It creates a common commercial structure for institutional disbursements while preserving future variants for government programs, remittance, collections, merchant payments, and other transaction services.

## Baseline Roles

| Role | Baseline definition |
| --- | --- |
| Buyer | Sponsor, institution, association, cooperative, NGO, school, employer-like payer, or organization needing to complete approved payouts. |
| Payer of customer-facing fees | Baseline model should assume the sponsor pays customer-facing commercial fees unless a later offering decision selects another party. |
| Funder of underlying disbursement value | Sponsor or funding institution. |
| Recipient | Approved beneficiary, member, employee-like recipient, claimant, payee, vendor, volunteer, participant, or other approved recipient. |
| Rural Bank | Customer-facing institution that supports the sponsor, helps execute approved disbursements, and participates in approved economics. |
| ODTI | Commercial operator and platform provider coordinating implementation, support, reporting, reconciliation, and provider relationships. |
| 3neti | IP owner and technology steward; royalty or license economics remain governed by `ROY-001` or a successor. |
| NetBank or infrastructure participant | Candidate account, API, rail, settlement, or regulated transaction participant; fees and legal characterization remain blocked until evidenced. |
| DevOps Provider | Operates the rural-bank-owned environment under delegated authority if the same deployment model applies. |
| Value-Added Provider | Optional notification, eligibility, KYC, reporting, or other attachment provider where selected and evidenced. |
| Public Interest | Tracks evidence, recipient access, completion, transparency, role clarity, and fund-separation discipline. |

## Candidate Use Cases Inside The Scope

The second model may use examples from:

- association or cooperative member payouts;
- incentives;
- reimbursements;
- petty cash replacement;
- emergency support;
- school, NGO, church, or institutional assistance;
- non-government benefit or aid distributions.

These examples are allowable use-case context, but the first `OFR-RB-DISBURSEMENT-STARTER` model should not merge incompatible payout categories into one numeric model.

## Deferred Variants

The following should remain variants until specifically selected:

- government-procured benefits or subsidy programs;
- inward remittance;
- domestic person-to-person remittance;
- merchant collections;
- merchant payments;
- recipient-paid fee structures;
- employee payroll;
- public-sector audit-heavy disbursement programs;
- KYC-required disbursement variants;
- business-development partner allocations;
- Channel Partner participation.

## Commercial Event And Billable Events

### Commercial Event

Baseline Commercial Event:

> A qualifying disbursement is successfully completed for an approved recipient under an approved sponsor instruction.

### Candidate Billable Events

Potential Billable Events include:

- sponsor onboarding;
- sponsor monthly or program-service fee;
- batch setup or payout-file processing;
- successful recipient disbursement;
- optional SMS or notification event;
- optional eligibility or KYC event if required;
- reporting or evidentiary archive event;
- exception, reversal, or correction handling where approved.

This decision does not approve any fee. It only identifies candidate billable-event layers that the next offering model should test.

## Recommended Baseline Commercial Units

The first Disbursement Starter model should evaluate these units before introducing more complexity:

```text
Sponsor onboarding
+
Sponsor monthly or program-service fee
+
Per-successful-recipient-disbursement fee
+
Optional notification attachment
```

A separate batch fee may be evaluated but should not be forced into the first baseline unless evidence shows that batch-level work is material and not covered by the sponsor service fee.

## Relationship To Payroll Starter

The Disbursement Starter should reuse Payroll Starter's modeling discipline, not its values.

Reusable architecture:

- stakeholder-view structure;
- exact counterparty references;
- consolidation treatment vocabulary;
- controlled placeholder discipline;
- component-derived activity logic where appropriate;
- Core versus optional attachment separation;
- non-additive stakeholder revenue warning;
- workbook-generation source-of-truth rule.

Do not reuse Payroll values unless a canonical assumption explicitly applies across both offerings.

## Why Not Collections Second?

Collections is important and may become a strong third modeled offering. It is deferred because it reverses the economic direction: the customer is collecting from payers rather than distributing to recipients. That introduces different questions around payer fees, settlement, reversals, disputes, receivables, evidence, and merchant or institutional pricing.

## Why Not Merchant Payments Second?

Merchant Payments is commercially attractive but requires more definition of merchant economics, merchant discount or fixed-fee structure, settlement, disputes, and channel-specific transaction costs. It may be easier to model after Disbursement has established a second payout-style revenue lane.

## Why Not Remittance Second?

Remittance can be valuable, but it likely requires heavier treatment of sender and receiver roles, AML/KYC, NetBank or rail fees, settlement, regulatory boundaries, and possible inward-remittance counterparties. It should not be the second model unless those dependencies are intentionally addressed first.

## Why Not Government Programs Second?

Government Programs may become a major public-interest and revenue opportunity, but public procurement, audit, beneficiary eligibility, data sharing, disclosures, and public accountability make it too complex for the second model. It should be modeled later as a specific program variant, not as a broad generic offering.

## Assumption Implications

The Disbursement Starter will likely need governed assumptions for:

- sponsor count per active bank;
- disbursement batches per sponsor per month;
- recipients per disbursement batch;
- completion rate;
- sponsor onboarding fee;
- sponsor monthly or program-service fee;
- per-successful-recipient-disbursement fee;
- rural-bank retained economics;
- ODTI support and implementation cost;
- DevOps and cloud allocation where shared infrastructure is used;
- NetBank or rail fee basis;
- notification attachment rate and provider cost;
- KYC or eligibility cost if required;
- exception, reversal, and failed-disbursement handling;
- collection or non-payment risk for sponsor fees;
- legal, accounting, tax, privacy, and fund-flow treatment.

This decision does not add those assumptions to the Assumptions Register. The next modeling slice should discover and propose them through a Disbursement Starter assumption-map pass.

## Consolidation And Cost Treatment

The second model should preserve the Level 1 Payroll discipline:

- sponsor commercial fees are external inflows;
- disbursement funding value is pass-through;
- internal transfers between Rural Bank, ODTI, DevOps Provider, 3neti, and modeled value-added providers are not additive;
- NetBank, rail, tax, and royalty items remain blocked until evidenced;
- shared rural-bank platform costs should be distinguished from offering-specific incremental disbursement costs;
- derived contribution and margin lines must not be treated as new money flows.

## Consequences

- x-commerce can begin testing multi-offering rural-bank platform economics without aggregating prematurely.
- Payroll evidence maturation can proceed in parallel.
- Disbursement Starter becomes the next offering-level modeling target.
- Collections, merchant payments, remittance, and government programs remain important later candidates.
- The next model should prove whether the architecture can handle a sponsor-funded payout offering distinct from employer payroll.

## Recommended Next Task

Instantiate `OFR-RB-DISBURSEMENT-STARTER` as a non-numeric offering model before creating projections.

The next slice should create:

```text
docs/economics/offerings/rural-bank-disbursement-starter/
```

with:

- `README.md`;
- `commercial-model.md`;
- `assumption-map.md`;
- `reconciliation-schedule.md`;
- `consolidated-view.md`;
- stakeholder views for Sponsor/Customer, Rural Bank, ODTI, 3neti, NetBank, DevOps Provider, Value-Added Provider where applicable, Investor, and Public Interest.

Do not create a numeric Disbursement workbook until the non-numeric offering model is coherent and reconciled.
