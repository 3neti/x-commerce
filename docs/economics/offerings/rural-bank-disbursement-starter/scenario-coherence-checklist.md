# Disbursement Starter Scenario Coherence Checklist

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: checklist scaffold.

No candidate values are entered, changed, or authorized by this document.

This checklist is used after management candidates are entered and before the authorization-readiness report is completed.

## Purpose

This checklist answers:

```text
Do the Conservative, Base, and Accelerated Disbursement candidates describe coherent operating states?
```

## Scenario Definitions

| Scenario | Coherence principle |
| --- | --- |
| Conservative | Lower adoption or activity, slower activation, weaker collection, and higher support friction where relevant. |
| Base | Practical internal planning case with moderate adoption, sponsor activity, pricing, cost, and collection assumptions. |
| Accelerated | Higher adoption or activity with corresponding operational load, not merely higher revenue and lower costs. |

## Adoption Checks

| Check | Required result | Status |
| --- | --- | --- |
| Active banks are plausible for each scenario | Conservative <= Base <= Accelerated unless explained | Pending values |
| Weighted active months are between 0 and 12 | Always true | Pending values |
| Active months reflect rollout timing | Conservative should not imply instant full-year activity unless justified | Pending values |
| Active-bank path does not exceed onboarded capacity | Must reconcile when onboarding convention exists | Pending values |

## Sponsor And Activity Checks

| Check | Required result | Status |
| --- | --- | --- |
| Sponsors per bank match scenario posture | Conservative lower or more constrained than Base unless explained | Pending values |
| Batches per sponsor match use case | Cadence must fit sponsor type and payout purpose | Pending values |
| Recipients per batch match target sponsor profile | Recipient counts must be coherent with sponsor segment | Pending values |
| Completion rate reflects event definition | Successful, failed, reversed, and exception events are defined | Pending values |
| `DSP-VOL-001` is derived | No independent aggregate volume under component-derived method | Pending values |

## Pricing Checks

| Check | Required result | Status |
| --- | --- | --- |
| Sponsor onboarding fee matches setup work | Must represent real onboarding/configuration work | Pending values |
| Sponsor service fee matches recurring value | Must represent availability, reporting, support, or program service | Pending values |
| Recipient disbursement fee remains separate | Must not include pass-through funding | Pending values |
| Rural Bank retained economics constraint holds | `DSP-RB-001` must not exceed sponsor-facing transaction economics | Pending values |
| Pricing is not copied from Payroll without rationale | Reuse decision log must support any reuse | Pending values |

## Cost Checks

| Check | Required result | Status |
| --- | --- | --- |
| ODTI support cost does not duplicate DevOps cost | Separate commercial support from managed operations | Pending values |
| ODTI implementation cost does not duplicate sponsor onboarding fee | Costs and revenue can relate but must remain distinct | Pending values |
| DevOps direct cost excludes cloud unless payer variant changes | Preserve bank-owned cloud boundary | Pending values |
| Cloud cost treatment is explicit | Included, allocated, excluded, or blocked | Pending values |
| Accelerated costs reflect scale | Faster growth may increase total support load | Pending values |

## Risk And Collection Checks

| Check | Required result | Status |
| --- | --- | --- |
| `RISK-002` applies only to commercial fees | Not applied to pass-through disbursement funding | Pending values |
| Non-collection and delayed collection are not mixed | Choose one basis or document both separately | Pending values |
| Sponsor collection logic fits collection path | Sponsor pays Rural Bank in baseline | Pending values |

## Optional Notification Checks

| Check | Required result | Status |
| --- | --- | --- |
| Optional notification is not required for Core Disbursement | Core model remains readable without notification | Pending values |
| Attachment rate is plausible by scenario | Should reflect sponsor/recipient communication need | Pending values |
| Customer-facing notification price is separate | Not merged into recipient disbursement fee | Pending values |
| Wholesale provider price is separate | Not confused with provider internal cost | Pending values |
| Failed-message and privacy items remain blocked unless evidence exists | `SMS-003`, `SMS-004` visibly blocked where unresolved | Pending values |

## Consolidation Checks

| Check | Required result | Status |
| --- | --- | --- |
| Sponsor fees counted once as external inflow | Yes | Pending values |
| Rural Bank-to-ODTI transfers eliminate | Yes | Pending model population |
| Rural Bank-to-DevOps transfers eliminate where inside boundary | Yes | Pending model population |
| Pass-through funding excluded from revenue | Yes | Pending model population |
| Derived contributions are not counted as new money flows | Yes | Pending model population |

## Completion Gate

The candidate package is coherence-ready when:

- every check is `Pass`, `Explained`, `Blocked`, or `Not applicable`;
- no check remains `Pending values`;
- failed checks are revised before authorization;
- the authorization-readiness report can cite this checklist.

