# Assumption Map: Rural Bank Digital Disbursement Starter

## Status

Current status: non-numeric assumption map.

This map records assumptions discovered during instantiation of `OFR-RB-DISBURSEMENT-STARTER`. It does not create approved values, controlled placeholders, projections, or new Assumptions Register records.

## Classification Summary

| Classification | Meaning |
| --- | --- |
| Required | Required for a coherent non-numeric offering model and future Level 1 projection. |
| Optional | Required only when an optional capability or variant is selected. |
| Blocked | Structurally required but unresolved. |
| Not Applicable | Does not apply to the baseline. |
| Missing | Needs a canonical Assumptions Register record or explicit reuse decision. |

## Required Assumptions

| Assumption ID | Purpose in offering | Affected views | Readiness | Evidence needed |
| --- | --- | --- | --- | --- |
| `OFR-RB-DISBURSEMENT-STARTER` | Offering identity and model boundary. | All views | Structurally Ready | Decision 0005 accepted. |
| `ADP-001` | Banks onboarded for the selected offering. | Rural Bank, ODTI, DevOps, Investor, Public Interest | Structurally Ready; value blocked | Bank pipeline and onboarding plan. |
| `ADP-002` | Active banks generating disbursement activity. | Rural Bank, ODTI, DevOps, NetBank, Investor, Public Interest | Structurally Ready; value blocked | Active-bank readiness and go-live data. |
| `ADP-003` | Active months per bank by year. | Rural Bank, ODTI, DevOps, Consolidated | Structurally Ready; value blocked | Activation timing and rollout schedule. |
| `LIC-004` | Rural-bank activation fee if the shared platform access model applies. | Rural Bank, ODTI | Conditionally Ready | Decision whether Disbursement uses the same platform access fee or a distinct implementation fee. |
| `LIC-005` | Annual platform subscription if the shared platform access model applies. | Rural Bank, ODTI | Conditionally Ready | Decision whether Disbursement is bundled with existing platform subscription or separately charged. |
| `OPS-001` | DevOps setup fee where a dedicated deployment or setup applies. | Rural Bank, DevOps Provider | Conditionally Ready | DevOps scope and cost allocation decision. |
| `OPS-002` | Recurring DevOps managed operations fee where shared operations apply. | Rural Bank, DevOps Provider | Conditionally Ready | DevOps managed operations terms. |
| `OPS-003` | DevOps direct engineering and tooling cost. | DevOps Provider, Investor | Structurally Ready; value blocked | DevOps estimate and operating evidence. |
| `CLD-001` | Public-cloud cost for bank-owned deployment where allocated. | Rural Bank, Consolidated | Structurally Ready; value blocked | Cloud architecture and cost estimate. |
| `NET-001` | NetBank or rail fee basis. | Rural Bank, NetBank, ODTI, Consolidated | Blocked | NetBank role, fee schedule, and legal characterization. |
| `NET-002` | NetBank internal service cost basis, if NetBank is modeled financially. | NetBank | Blocked | NetBank operating-cost evidence. |
| `ROY-001` | 3neti royalty or license basis. | ODTI, 3neti, Consolidated | Blocked | 3neti-ODTI commercial decision and review. |
| `TAX-001` | Tax and withholding treatment. | All financial views | Blocked | Tax review. |
| `RISK-002` | Non-collection risk on sponsor commercial fees. | Sponsor, Rural Bank, ODTI, DevOps, VASP | Structurally Ready; value blocked | Sponsor billing and collection policy. |

## Missing Canonical Assumptions

These assumptions are needed before numeric modeling. Candidate IDs are proposed for discussion only.

| Candidate ID | Candidate name | Purpose | Affected line items | Evidence needed |
| --- | --- | --- | --- | --- |
| `DSP-CUS-001` | Sponsors per active rural bank | Sponsor count driving onboarding, recurring service, and activity. | Sponsor fee lines; Rural Bank and ODTI revenue; public reach indicators. | Rural-bank sponsor pipeline and institutional customer data. |
| `DSP-CUS-002` | Disbursement batches per sponsor per month | Frequency of sponsor payout activity. | Activity volume, support load, reporting burden. | Sponsor interviews, program schedules, historical payout data. |
| `DSP-CUS-003` | Average recipients per disbursement batch | Recipient volume per batch. | Transaction volume, pass-through value, notification usage. | Sponsor payout records and recipient-list profiles. |
| `DSP-VOL-001` | Successful disbursements per active bank per month | Derived activity driver. | Transaction revenue, NetBank volume, notification volume, public completion. | Derivation from sponsor, batch, recipient, and completion assumptions. |
| `DSP-VOL-002` | Disbursement completion rate | Percentage of attempted recipient disbursements that become successful qualifying events. | Billable events, exception burden, public-interest completion. | Pilot logs, settlement evidence, reversal and failure definitions. |
| `DSP-PRICE-001` | Sponsor onboarding fee | Sponsor-facing one-time onboarding price. | Sponsor cost, Rural Bank revenue, ODTI revenue. | Sponsor willingness-to-pay and commercial decision. |
| `DSP-PRICE-002` | Sponsor monthly or program-service fee | Sponsor-facing recurring fee. | Sponsor cost, Rural Bank revenue, ODTI revenue. | Sponsor willingness-to-pay, service scope, commercial decision. |
| `DSP-PRICE-003` | Per-successful-recipient-disbursement fee | Sponsor-facing recipient-level transaction fee. | Sponsor cost, Rural Bank transaction economics, ODTI platform revenue. | Pricing decision and affordability evidence. |
| `DSP-RB-001` | Rural-bank retained disbursement economics | Approved retention or allocation basis. | Rural Bank retained contribution; ODTI transaction revenue. | Rural Bank and ODTI commercial decision, accounting review. |
| `DSP-ODTI-001` | ODTI disbursement support cost | ODTI support and program administration cost for the offering. | ODTI cost and contribution. | ODTI support design and pilot effort. |
| `DSP-ODTI-002` | ODTI disbursement implementation cost | ODTI implementation, setup, training, and launch effort. | ODTI activation margin and staffing. | Implementation work breakdown. |
| `DSP-RB-002` | Rural Bank disbursement-specific internal support cost | Bank labor and operating cost for sponsor and recipient support. | Rural Bank true contribution. | Bank operations data and support ticket evidence. |
| `DSP-EXC-001` | Exception, reversal, and failed-disbursement handling cost | Cost or workload for non-successful events. | Sponsor value, Rural Bank support, ODTI support, public-interest evidence. | Exception definitions, pilot logs, operating process. |
| `DSP-FUND-001` | Average disbursement funding value | Pass-through amount for recipient value and settlement visibility. | Sponsor pass-through, Rural Bank pass-through, Public Interest. | Sponsor payout data. |
| `DSP-ATT-001` | Notification attachment rate | Optional notification usage. | Sponsor notification cost, provider revenue, public-interest indicators. | Sponsor preference and provider usage data. |
| `DSP-VAS-001` | Notification customer-facing price | Sponsor-facing notification price. | Sponsor cost, Rural Bank or ODTI margin. | Provider quote and pricing decision. |
| `DSP-CST-001` | Notification wholesale provider price | Wholesale provider charge. | Rural Bank or ODTI provider cost; VASP revenue. | Provider quote and contract. |

## Optional Assumptions

| Assumption ID | Optional capability | Readiness | Notes |
| --- | --- | --- | --- |
| `ATT-001` | SMS attachment rate, if reused across offerings. | Reuse decision required | Use only if SMS attachment behavior is genuinely shared across Payroll and Disbursement. |
| `VAS-001` | SMS customer-facing price, if reused. | Reuse decision required | Do not assume Payroll SMS price applies automatically. |
| `CST-001` | SMS wholesale provider price, if reused. | Reuse decision required | Use only if provider terms and billing unit match. |
| `SMS-001` | SMS delivery success rate, if SMS is selected. | Conditionally Ready; value blocked | Provider service data required. |
| `SMS-003` | Failed-message treatment. | Blocked | Provider contract and billing rules required. |
| `SMS-004` | Consent and privacy dependency. | Blocked | Privacy and legal review required. |

## Not Applicable To Baseline

| Assumption or concept | Reason |
| --- | --- |
| `EMP-001`, `EMP-002` | Payroll employer-specific assumptions; Disbursement needs sponsor-specific assumptions. |
| `CUS-002`, `CUS-003` payroll meanings | Payroll-run frequency and payroll recipients per run do not directly apply. |
| Payroll batch fee | Deferred from Disbursement baseline unless evidence shows separate batch-level pricing is needed. |
| Business Development Partner allocation | Deferred until `PAR-001` and valid attribution are approved. |
| Channel Partner economics | Deferred. |
| Government procurement assumptions | Deferred to a specific government-program variant. |
| Remittance-specific assumptions | Deferred to a remittance offering. |
| Merchant collections or merchant payments assumptions | Deferred to separate offerings. |

## Derived Activity Rule

Preferred future derivation:

```text
DSP-CUS-001
x DSP-CUS-002
x DSP-CUS-003
x DSP-VOL-002
= DSP-VOL-001
```

Then annual offering activity should be driven by:

```text
ADP-002
x ADP-003
x DSP-VOL-001
```

If a future model uses an independently controlled aggregate volume assumption, the component assumptions must become validation-only inputs for that model version. The model must not use both methods simultaneously.

## Blocked Outputs

The following outputs remain blocked until assumptions are governed:

- sponsor total cost;
- Rural Bank retained disbursement economics;
- ODTI disbursement revenue and contribution;
- DevOps allocated contribution;
- NetBank fee-adjusted results;
- tax-adjusted results;
- royalty-adjusted results;
- true Rural Bank contribution after internal support cost;
- optional notification economics;
- consolidated numeric contribution;
- capital budgeting, NPV, IRR, and payback.

