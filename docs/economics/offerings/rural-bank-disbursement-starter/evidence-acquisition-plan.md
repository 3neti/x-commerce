# Evidence Acquisition Plan: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

This plan defines how blocked Disbursement assumptions should move toward evidence-supported or approved inputs. It does not collect evidence, authorize placeholders, assign values, create projections, or update the workbook.

## Purpose

This plan answers:

```text
Where will each blocked Disbursement Starter assumption come from, who is responsible for obtaining it, what evidence is sufficient, and what happens if evidence is not available?
```

## Evidence Source Categories

Use these controlled evidence source categories:

```text
Rural Bank or RBAP
Sponsor Interview or Sponsor Data
NetBank or Banking Partner
Value-Added Provider
DevOps Provider
ODTI Management
3neti Management
Observed Pilot Data
Market Reference
Legal Review
Accounting Review
Tax Review
Privacy or Security Review
Controlled Scenario Placeholder
Not Required for Initial Model
```

## Evidence Priorities

| Priority | Meaning |
| --- | --- |
| `P0` | Blocks the first provisional numeric Disbursement model. |
| `P1` | Required for a credible base scenario or final net economics, but may be visibly blocked or excluded from a narrow Level 1 structural test. |
| `P2` | Required for stakeholder-specific refinement. |
| `P3` | Required for later validation or expansion. |

## Blocked Assumption Worklist

| Assumption ID | Assumption name | Source category | Owner | Placeholder eligibility | Priority | Blocks |
| --- | --- | --- | --- | --- | --- | --- |
| `ADP-002` | Active banks by year | Rural Bank or RBAP; ODTI Management | ODTI commercial owner and RBAP liaison | Eligible for controlled placeholder | P0 | Active-bank activity and recurring revenue/costs |
| `ADP-003` | Active months per bank by year | Rural Bank or RBAP; ODTI Management | ODTI implementation owner | Eligible for controlled placeholder | P0 | Annualized activity and recurring service periods |
| `DSP-CUS-001` | Sponsors per active rural bank | Rural Bank or RBAP; Sponsor Data | ODTI commercial owner | Eligible for controlled placeholder | P0 | Sponsor count and activity |
| `DSP-CUS-002` | Disbursement batches per sponsor per month | Sponsor Data | ODTI commercial owner | Eligible for controlled placeholder | P0 | Activity frequency |
| `DSP-CUS-003` | Average recipients per disbursement batch | Sponsor Data | ODTI commercial owner | Eligible for controlled placeholder | P0 | Recipient-level volume |
| `DSP-VOL-002` | Disbursement completion rate | Observed Pilot Data; NetBank or Banking Partner | ODTI operations owner | Eligible for controlled placeholder after event definitions | P0 | Successful billable events and exception burden |
| `DSP-PRICE-001` | Sponsor onboarding fee | Sponsor Interview; ODTI Management | ODTI commercial owner | Eligible only for sensitivity testing unless management-approved | P0 | Sponsor onboarding revenue |
| `DSP-PRICE-002` | Sponsor monthly or program-service fee | Sponsor Interview; ODTI Management | ODTI commercial owner | Eligible only for sensitivity testing unless management-approved | P0 | Recurring sponsor revenue |
| `DSP-PRICE-003` | Recipient disbursement fee | Sponsor Interview; ODTI Management | ODTI commercial owner | Eligible only for sensitivity testing unless management-approved | P0 | Transaction revenue |
| `DSP-RB-001` | Rural Bank retained disbursement economics | ODTI Management; Rural Bank or RBAP; Accounting Review | ODTI and Rural Bank commercial owners | Controlled placeholder candidate with commercial approval | P0 | Bank and ODTI revenue split |
| `DSP-ODTI-001` | ODTI disbursement support cost | ODTI Management; Observed Pilot Data | ODTI operations owner | Eligible for controlled placeholder | P0 | ODTI contribution |
| `DSP-ODTI-002` | ODTI disbursement implementation cost | ODTI Management; Observed Pilot Data | ODTI implementation owner | Eligible for controlled placeholder | P0 | Onboarding margin and staffing |
| `OPS-003` | DevOps direct engineering and tooling cost | DevOps Provider | DevOps provider owner | Eligible for controlled placeholder | P0 | DevOps contribution |
| `CLD-001` | Public-cloud cost | DevOps Provider; Market Reference | Rural Bank infrastructure owner | Eligible for controlled placeholder | P0 | External cloud outflow |
| `RISK-002` | Non-collection risk | ODTI Management; Accounting Review | ODTI finance owner | Eligible for controlled placeholder | P0 | Cash collection and bad debt |
| `DSP-RB-002` | Rural Bank internal disbursement support cost | Rural Bank or RBAP; Observed Pilot Data | Rural Bank operations owner | Eligible for controlled placeholder after support scope | P1 | True Rural Bank net contribution |
| `NET-001` | NetBank or rail fee basis | NetBank or Banking Partner; Legal Review | NetBank relationship owner | Not eligible before external evidence | P1 | NetBank-fee-adjusted results |
| `NET-002` | NetBank internal service cost | NetBank or Banking Partner | NetBank relationship owner | Not required for initial model | P2 | NetBank contribution |
| `ROY-001` | 3neti royalty or license basis | 3neti Management; Legal Review; Tax Review | 3neti and ODTI commercial owners | Not eligible without formal decision | P1 | 3neti and ODTI post-royalty results |
| `TAX-001` | Tax and withholding treatment | Tax Review | Finance and tax reviewers | Not eligible before review | P1 | Final net results |
| `DSP-ATT-001` | Notification attachment rate | Sponsor Interview; Value-Added Provider | ODTI commercial owner | Eligible for controlled placeholder | P1 | Optional notification volume |
| `DSP-VAS-001` | Notification customer-facing price | Value-Added Provider; ODTI Management | ODTI commercial owner | Eligible only for sensitivity testing unless management-approved | P1 | Optional notification revenue |
| `DSP-CST-001` | Notification wholesale provider price | Value-Added Provider | ODTI commercial owner | Not eligible before provider evidence for factual model | P1 | Provider cost and notification margin |
| `SMS-001` | SMS or notification delivery success | Value-Added Provider; Observed Pilot Data | ODTI operations owner | Eligible for controlled placeholder for structural test only | P2 | Notification performance indicators |
| `SMS-003` | Failed-message treatment | Value-Added Provider; Legal Review | ODTI operations owner | Not eligible before provider contract for factual model | P2 | Notification cost and refund treatment |
| `SMS-004` | Consent and privacy | Privacy or Security Review; Legal Review | Privacy owner | Not eligible before review | P1 | Notification legality and disclosure |

## Evidence Workstreams

### Workstream A: Rural Bank And RBAP

Collect evidence for:

- `ADP-002`;
- `ADP-003`;
- `DSP-CUS-001`;
- `DSP-RB-001`;
- `DSP-RB-002`.

Questions:

- Which banks can realistically offer sponsor-funded disbursements?
- When can they become active?
- How many sponsor customers can one bank serve?
- What support burden does the bank expect?
- What retained economics would make the offering worthwhile?

### Workstream B: Sponsors

Collect evidence for:

- `DSP-CUS-001`;
- `DSP-CUS-002`;
- `DSP-CUS-003`;
- `DSP-PRICE-001`;
- `DSP-PRICE-002`;
- `DSP-PRICE-003`;
- `DSP-ATT-001`;
- `DSP-FUND-001`;
- `DSP-EXC-001`.

Questions:

- How often do sponsors disburse?
- How many recipients are usually included?
- What setup, reporting, and reconciliation work matters?
- What fee structure is understandable and affordable?
- What evidence proves completion?
- What happens when a recipient disbursement fails?

### Workstream C: ODTI And 3neti

Collect evidence for:

- `DSP-PRICE-001`;
- `DSP-PRICE-002`;
- `DSP-PRICE-003`;
- `DSP-RB-001`;
- `DSP-ODTI-001`;
- `DSP-ODTI-002`;
- `ROY-001`;
- `RISK-002`.

Questions:

- What does ODTI need to implement and support Disbursement Starter?
- How should sponsor-facing fees split between Rural Bank and ODTI?
- Which costs are disbursement-specific versus shared platform costs?
- Does the 3neti royalty basis apply?

### Workstream D: DevOps And Cloud

Collect evidence for:

- `OPS-001`;
- `OPS-002`;
- `OPS-003`;
- `CLD-001`.

Questions:

- Does Disbursement Starter require incremental infrastructure?
- Is it a shared platform cost?
- What direct DevOps cost changes as the offering is added?
- What public-cloud cost is attributable to this offering, if any?

### Workstream E: NetBank Or Banking Partner

Collect evidence for:

- `NET-001`;
- `NET-002`;
- `DSP-VOL-002`.

Questions:

- What role does NetBank play?
- What fee basis applies?
- What event statuses prove successful completion?
- What reversal, failed, pending, or settlement statuses matter?

### Workstream F: Value-Added Provider

Collect evidence for:

- `DSP-ATT-001`;
- `DSP-VAS-001`;
- `DSP-CST-001`;
- `SMS-001`;
- `SMS-003`;
- `SMS-004`.

Questions:

- What notification unit is billable?
- What is delivered, accepted, failed, retried, or refunded?
- What privacy or consent requirements apply?
- Does the provider cost differ from Payroll SMS?

### Workstream G: Legal, Accounting, Tax, Privacy, And Security

Collect evidence for:

- `NET-001`;
- `ROY-001`;
- `TAX-001`;
- `RISK-002`;
- `DSP-RB-001`;
- `SMS-004`;
- fund-flow and pass-through treatment.

Questions:

- What is the legal characterization of sponsor fees and pass-through disbursement value?
- Who is principal versus agent?
- What tax or withholding treatment applies?
- What privacy obligations attach to recipient lists and notifications?

## Numeric Maturity Levels

| Level | Name | Meaning |
| --- | --- | --- |
| 0 | Structural model | Current non-numeric model. |
| 1 | Controlled placeholder model | Uses authorized provisional inputs for internal structure testing. |
| 2 | Evidence-supported management model | Uses provider quotes, management estimates, sponsor interviews, and bank evidence. |
| 3 | Pilot-calibrated model | Uses observed pilot operating data. |
| 4 | Contract- and operations-calibrated model | Uses contracts, approved pricing, and operating evidence. |

## First Provisional Model Gate

The first numeric Disbursement model may proceed only when every P0 assumption has:

- an Approved value;
- an evidence-supported Active value;
- or an explicitly authorized provisional input.

Active working assumptions remain provisional. They must not enter the model silently merely because their status is `Active`.

## Next Slice

Create the evidence-instrument layer for Disbursement Starter.

