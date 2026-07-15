# Disbursement Starter Candidate-Value Reuse Decision Log

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: reuse decision log scaffold.

No values are reused, proposed, or authorized by this document.

This log controls whether any candidate value, method, or cost basis from Payroll Starter or another governed source may be reused for Disbursement Starter.

## Purpose

The next candidate-value population pass must not casually copy Payroll values into Disbursement.

This log answers:

```text
Which assumptions may reuse an existing governed method, which require a new Disbursement-specific candidate, and which must remain blocked?
```

## Reuse Decision Values

Use exactly one:

| Decision | Meaning |
| --- | --- |
| Reuse method only | The formula or structure may be reused, but values must be Disbursement-specific. |
| Reuse value candidate | A value candidate may be reused with documented rationale and warning. |
| New Disbursement candidate required | Payroll or shared values are not sufficiently relevant. |
| Evidence required before reuse | Reuse cannot occur without provider, bank, sponsor, or formal evidence. |
| Remain blocked | No responsible reuse or candidate is allowed yet. |
| Not applicable | The assumption does not apply to the initial Disbursement Level 1 model. |

## Core Reuse Review

| Assumption ID | Reuse question | Current reuse decision | Notes |
| --- | --- | --- | --- |
| `ADP-002` | Can Payroll active-bank assumptions inform Disbursement active banks? | New Disbursement candidate required | Disbursement sponsors and use cases may differ from employer payroll. |
| `ADP-003` | Can Payroll active-month timing be reused? | Reuse method only | Cohort logic may transfer; timing values require Disbursement-specific review. |
| `DSP-CUS-001` | Can Payroll customers-per-bank inform sponsors-per-bank? | New Disbursement candidate required | Sponsors are not equivalent to payroll employers. |
| `DSP-CUS-002` | Can payroll runs per employer inform disbursement batches per sponsor? | New Disbursement candidate required | Disbursement batch cadence may be program-driven. |
| `DSP-CUS-003` | Can payroll recipients per run inform disbursement recipients per batch? | New Disbursement candidate required | Recipient groups may differ materially. |
| `DSP-VOL-002` | Can payroll completion rate inform disbursement completion rate? | Evidence required before reuse | Event definitions, sponsor rules, and recipient readiness may differ. |
| `DSP-PRICE-001` | Can employer onboarding price inform sponsor onboarding price? | New Disbursement candidate required | Sponsor onboarding scope may differ. |
| `DSP-PRICE-002` | Can employer monthly service fee inform sponsor service fee? | New Disbursement candidate required | Sponsor program-service value differs from payroll service value. |
| `DSP-PRICE-003` | Can payroll recipient fee inform disbursement recipient fee? | New Disbursement candidate required | Pricing may differ by sponsor type and payout purpose. |
| `DSP-RB-001` | Can Payroll Rural Bank retention formula inform Disbursement retention? | Reuse method only | Constraint logic can transfer; retained amount/formula needs review. |
| `DSP-ODTI-001` | Can Payroll ODTI support-cost method inform Disbursement support cost? | Reuse method only | Support categories may transfer; workload values require Disbursement review. |
| `DSP-ODTI-002` | Can Payroll implementation-cost method inform Disbursement implementation cost? | Reuse method only | Work breakdown may transfer; value requires Disbursement scope. |
| `OPS-003` | Can DevOps direct cost be reused? | Evidence required before reuse | Shared environment operations may be similar, but scope and capacity must be confirmed. |
| `CLD-001` | Can cloud cost be reused? | Reuse method only | Bank-owned cloud boundary can transfer; usage allocation requires review. |
| `RISK-002` | Can Payroll non-collection risk be reused? | New Disbursement candidate required | Sponsor collection behavior differs from employer payroll. |

## Optional Notification Reuse Review

| Assumption ID | Reuse question | Current reuse decision | Notes |
| --- | --- | --- | --- |
| `DSP-ATT-001` | Can Payroll SMS attachment rate inform Disbursement notification attachment? | New Disbursement candidate required | Sponsor use case and recipient communication needs differ. |
| `DSP-VAS-001` | Can Payroll SMS customer-facing price be reused? | Evidence required before reuse | Pricing may be similar only if same notification channel and billing unit apply. |
| `DSP-CST-001` | Can Payroll SMS wholesale provider price be reused? | Evidence required before reuse | Requires same provider, channel, route, and billing unit. |
| `SMS-001` | Can SMS delivery-success assumptions be reused? | Evidence required before reuse | Requires provider performance data and route comparability. |
| `SMS-003` | Can failed-message billing treatment be reused? | Evidence required before reuse | Requires provider contract terms. |
| `SMS-004` | Can consent/privacy treatment be reused? | Evidence required before reuse | Disbursement sponsor data and recipient consent may differ. |

## Blocked Reuse

Do not reuse or infer:

- NetBank fee basis;
- tax treatment;
- 3neti royalty basis;
- financing assumptions;
- investor returns;
- business-development partner allocation.

These remain governed by their own future evidence or decision process.

## Completion Gate

Before candidate values are populated:

- every reused method must cite the source method;
- every reused value candidate must explain why it is valid for Disbursement;
- every non-reused value must receive a Disbursement-specific candidate or blocked treatment;
- no Payroll value may be copied silently.

