# Disbursement Starter Management-Candidate Review Worksheet

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: review worksheet scaffold.

No values are proposed, authorized, or imported by this document.

This worksheet is the next operating artifact after [candidate-value-entry-plan.md](candidate-value-entry-plan.md). It structures management review before any candidate values move into [provisional-input-register-level-1.md](provisional-input-register-level-1.md).

## Purpose

This worksheet should answer:

```text
Which Conservative, Base, and Accelerated Disbursement Starter candidate values are coherent enough to submit for provisional-input authorization?
```

It does not authorize candidate values.

## Required Warning

> Candidate values reviewed through this worksheet are internal management candidates only. They are not evidence-supported, not authorized, not forecasts, not budgets, not provider quotes, not institutional commitments, not contracts, and not investment-grade.

## Review Inputs

Reviewers must use:

- [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md);
- [candidate-value-entry-plan.md](candidate-value-entry-plan.md);
- [candidate-value-import-contract.md](candidate-value-import-contract.md);
- [management-candidate-completion-plan.md](management-candidate-completion-plan.md);
- [numeric-workbook-readiness-roadmap.md](numeric-workbook-readiness-roadmap.md).

## Review Roles

| Role | Review responsibility |
| --- | --- |
| ODTI management | Scenario coherence, pricing posture, ODTI cost, support model, commercial fit. |
| Rural Bank or pilot-bank reviewer | Sponsor relationship plausibility, support burden, collection path, bank retained economics. |
| DevOps reviewer | DevOps cost, cloud boundary, support scope, operational capacity. |
| Finance reviewer | Scenario consistency, bad-debt treatment, pass-through separation, blocked-output visibility. |
| Legal/accounting/tax reviewer | Identify values or outputs that must remain blocked until formal review. |

## Candidate Review Table

Each candidate assumption should be reviewed using this structure.

| Field | Review entry |
| --- | --- |
| Assumption ID | To be completed during candidate review. |
| Candidate values present? | Yes / No. |
| Conservative candidate coherent? | Yes / No / Needs revision. |
| Base candidate coherent? | Yes / No / Needs revision. |
| Accelerated candidate coherent? | Yes / No / Needs revision. |
| Unit confirmed? | Yes / No. |
| Source label confirmed? | Must remain `Internal architecture and management scenario design` unless evidence exists. |
| Evidence limitation confirmed? | Yes / No. |
| Authorization recommendation | Ready for authorization review / Revise candidate / Remain blocked / Sensitivity only. |
| Notes | Reviewer comments. |

## Core P0 Review Checklist

| Assumption ID | Review focus | Required outcome before authorization |
| --- | --- | --- |
| `ADP-002` | Active banks | Scenario path must be small-program coherent. |
| `ADP-003` | Weighted active months | Must remain within 0 to 12 and reflect rollout timing. |
| `DSP-CUS-001` | Sponsors per active bank | Must fit rural-bank relationship model. |
| `DSP-CUS-002` | Batches per sponsor per month | Must fit sponsor use case and batch cadence. |
| `DSP-CUS-003` | Recipients per batch | Must fit target sponsor profile. |
| `DSP-VOL-002` | Completion rate | Must define successful event and exclude failed/reversed events. |
| `DSP-PRICE-001` | Sponsor onboarding fee | Must represent real onboarding/configuration work. |
| `DSP-PRICE-002` | Sponsor monthly or program-service fee | Must represent recurring availability, reporting, and support. |
| `DSP-PRICE-003` | Recipient disbursement fee | Must remain distinct from pass-through disbursement funding. |
| `DSP-RB-001` | Rural Bank retained economics | Must not exceed sponsor-facing transaction fee. |
| `DSP-ODTI-001` | ODTI support cost | Must not duplicate DevOps or bank internal support. |
| `DSP-ODTI-002` | ODTI implementation cost | Must not duplicate sponsor onboarding revenue or DevOps setup. |
| `OPS-003` | DevOps direct cost | Must remain distinct from cloud cost. |
| `CLD-001` | Public-cloud cost | Must preserve bank-owned infrastructure boundary. |
| `RISK-002` | Collection risk | Must apply only to eligible commercial fees, not pass-through funding. |

## Optional Notification Review Checklist

Optional notification must not block Core Disbursement.

| Assumption ID | Review focus | Required outcome |
| --- | --- | --- |
| `DSP-ATT-001` | Attachment rate | Can be authorized only for optional variant. |
| `DSP-VAS-001` | Customer-facing notification price | Must not be merged into Core Disbursement headline revenue. |
| `DSP-CST-001` | Wholesale provider price | Should require provider quote or explicit placeholder authorization. |
| `SMS-001` | Delivery success | Must be performance-oriented, not pricing evidence. |
| `SMS-003` | Failed-message billing | Remain blocked unless provider terms exist. |
| `SMS-004` | Consent and privacy | Remain blocked unless legal/privacy review exists. |

## Scenario Coherence Review

Reviewers should confirm:

- Conservative does not assume strong adoption and weak volume inconsistently;
- Base is a practical internal planning case, not an approved forecast;
- Accelerated reflects operational capacity and support load, not just higher revenue;
- cost assumptions rise or fall coherently with operational scale;
- optional notification attachment does not become required for Core Disbursement viability;
- pass-through disbursement funding remains outside revenue.

## Authorization Recommendation Outcomes

Use one outcome per candidate:

| Outcome | Meaning |
| --- | --- |
| Ready for authorization review | Candidate can move to the provisional-input register for approval/draft approval. |
| Revise candidate | Candidate is incomplete, incoherent, or commercially unsupported. |
| Sensitivity only | Candidate may test structure but should not drive the base Level 1 model. |
| Remain blocked | Candidate must not be used until evidence or formal review exists. |
| Not required for initial Level 1 model | Candidate can remain outside the first numeric model. |

## Completion Gate

This worksheet is complete when:

- every Core P0 candidate has a review outcome;
- optional notification has a separate review outcome;
- blocked exclusions are explicitly preserved;
- `DSP-VOL-001` remains derived;
- no value has been authorized in this worksheet.

## Next Slice

Prepare the provisional-input authorization packet from reviewed candidates. Do not authorize values until the authorization packet is complete.

