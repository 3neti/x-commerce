# Disbursement Starter Candidate-Value Entry Ledger

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: ledger scaffold.

No candidate values are entered by this document.

This ledger tracks progress from open management candidates to reviewed candidate records. It is an operational control for the future value-entry pass.

## Purpose

The ledger answers:

```text
Which Disbursement candidate inputs have been populated, reviewed, revised, blocked, or prepared for authorization?
```

It does not authorize inputs and must not become the source of numeric model values.

## Source Of Candidate Values

Candidate values must be entered in:

```text
provisional-input-candidate-pack.md
```

This ledger records status only.

## Ledger Status Values

Use exactly one status per row:

| Status | Meaning |
| --- | --- |
| Open | No candidate value or blocked treatment has been recorded. |
| Drafted | Candidate values have been entered for review. |
| Needs revision | Candidate values exist but are not coherent or complete. |
| Review-ready | Candidate values are ready for management review. |
| Recommended for authorization | Candidate values may move to the authorization packet. |
| Sensitivity only | Candidate values may be used for sensitivity, not headline Level 1. |
| Remain blocked | Candidate must not be used until evidence or formal review exists. |
| Not required for initial Level 1 | Candidate can remain outside the first Level 1 model. |

## Core Candidate Ledger

| Assumption ID | Candidate group | Required scenario cells | Current status | Review owner | Notes |
| --- | --- | --- | --- | --- | --- |
| `ADP-002` | Adoption | Conservative, Base, Accelerated | Open | ODTI management / Rural Bank reviewer | Active banks. |
| `ADP-003` | Adoption | Conservative, Base, Accelerated | Open | ODTI management / Rural Bank reviewer | Weighted active months. |
| `DSP-CUS-001` | Sponsor structure | Conservative, Base, Accelerated | Open | Rural Bank reviewer | Active sponsors per active bank. |
| `DSP-CUS-002` | Sponsor activity | Conservative, Base, Accelerated | Open | Sponsor / ODTI reviewer | Batches per active sponsor. |
| `DSP-CUS-003` | Recipient activity | Conservative, Base, Accelerated | Open | Sponsor / Rural Bank reviewer | Recipients per batch. |
| `DSP-VOL-002` | Completion | Conservative, Base, Accelerated | Open | ODTI / operations reviewer | Completion rate and event definition. |
| `DSP-VOL-001` | Derived activity | Derived only | Open | Finance reviewer | Must not be independently entered. |
| `DSP-PRICE-001` | Sponsor pricing | Conservative, Base, Accelerated | Open | ODTI management | Sponsor onboarding fee. |
| `DSP-PRICE-002` | Sponsor pricing | Conservative, Base, Accelerated | Open | ODTI management | Sponsor recurring service fee. |
| `DSP-PRICE-003` | Sponsor pricing | Conservative, Base, Accelerated | Open | ODTI management | Recipient disbursement fee. |
| `DSP-RB-001` | Rural Bank economics | Conservative, Base, Accelerated | Open | ODTI + Rural Bank reviewer | Retained economics basis. |
| `DSP-ODTI-001` | ODTI cost | Conservative, Base, Accelerated | Open | ODTI management | Support cost basis. |
| `DSP-ODTI-002` | ODTI cost | Conservative, Base, Accelerated | Open | ODTI management | Implementation cost basis. |
| `OPS-003` | DevOps cost | Conservative, Base, Accelerated | Open | DevOps reviewer | Direct engineering and tooling cost. |
| `CLD-001` | Cloud cost | Conservative, Base, Accelerated | Open | DevOps / Rural Bank reviewer | Public-cloud cost and payer boundary. |
| `RISK-002` | Collection risk | Conservative, Base, Accelerated | Open | Finance reviewer | Applies only to eligible commercial fees. |

## Optional Notification Ledger

| Assumption ID | Candidate group | Required scenario cells | Current status | Review owner | Notes |
| --- | --- | --- | --- | --- | --- |
| `DSP-ATT-001` | Optional notification | Conservative, Base, Accelerated | Open | ODTI / sponsor reviewer | Attachment rate. |
| `DSP-VAS-001` | Optional notification | Conservative, Base, Accelerated | Open | ODTI management | Customer-facing notification price. |
| `DSP-CST-001` | Optional notification | Conservative, Base, Accelerated | Open | Provider / ODTI reviewer | Wholesale provider price. |
| `SMS-001` | Optional notification | Conservative, Base, Accelerated | Open | Provider / operations reviewer | Delivery performance. |
| `SMS-003` | Optional notification | Blocked or treatment | Open | Provider / legal reviewer | Failed-message billing. |
| `SMS-004` | Optional notification | Blocked or treatment | Open | Legal/privacy reviewer | Consent and privacy. |

## Blocked And Excluded Ledger

| Item | Current status | Reason |
| --- | --- | --- |
| `DSP-RB-002` | Remain blocked | True Rural Bank support cost requires evidence or explicit authorization. |
| `NET-001` | Remain blocked | NetBank or infrastructure fee basis unresolved. |
| `NET-002` | Not required for initial Level 1 or blocked | NetBank internal cost not needed unless NetBank financial view is modeled. |
| `TAX-001` | Remain blocked | Tax review required. |
| `ROY-001` | Remain blocked | Royalty or license treatment unresolved. |
| `FIN-001` | Remain blocked | Discount rate and capital-budgeting basis unresolved. |
| Investor returns | Excluded | No investor-return mechanism in initial Disbursement Level 1. |
| Business-development partner allocations | Excluded | Partner participation remains deferred. |

## Completion Gate

This ledger is ready for management review when:

- all Core P0 rows are `Drafted`, `Review-ready`, `Sensitivity only`, `Remain blocked`, or `Not required for initial Level 1`;
- `DSP-VOL-001` remains derived;
- optional notification rows are not required for Core Disbursement;
- blocked exclusions remain blocked;
- no values exist only in this ledger.

