# Disbursement Starter Candidate-Value Population Workplan

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: execution workplan scaffold.

No candidate values are added by this document.

This workplan converts the existing candidate-entry and review scaffolds into a concrete execution sequence for the next substantive task: populating Conservative, Base, and Accelerated management candidates without authorizing them.

## Objective

The next candidate-value population pass should answer:

```text
What internal management candidate values should be reviewed for the first Disbursement Starter Level 1 model?
```

Every populated value must remain:

```text
Internal management candidate
Not authorized
Not evidence-supported
Not a forecast
Not contract-grade
Not investment-grade
```

## Source Documents

Use these documents in order:

1. [management-candidate-completion-plan.md](management-candidate-completion-plan.md);
2. [candidate-value-entry-plan.md](candidate-value-entry-plan.md);
3. [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md);
4. [candidate-value-import-contract.md](candidate-value-import-contract.md);
5. [management-candidate-review-worksheet.md](management-candidate-review-worksheet.md).

## Population Scope

Populate candidate values only in:

```text
provisional-input-candidate-pack.md
```

Do not populate:

- [provisional-input-register-level-1.md](provisional-input-register-level-1.md);
- [offering-economics-level-1.md](offering-economics-level-1.md);
- the `.xlsx` workbook;
- the Assumptions Register.

## Required Candidate Groups

### Core P0 Inputs

The candidate population pass must propose values or explicit blocked treatments for:

```text
ADP-002
ADP-003
DSP-CUS-001
DSP-CUS-002
DSP-CUS-003
DSP-VOL-002
DSP-PRICE-001
DSP-PRICE-002
DSP-PRICE-003
DSP-RB-001
DSP-ODTI-001
DSP-ODTI-002
OPS-003
CLD-001
RISK-002
```

### Derived Inputs

`DSP-VOL-001` must be calculated later from:

```text
DSP-CUS-001
x DSP-CUS-002
x DSP-CUS-003
x DSP-VOL-002
```

Do not propose an independent value for `DSP-VOL-001`.

### Optional Notification Inputs

Optional notification candidates may be proposed separately for:

```text
DSP-ATT-001
DSP-VAS-001
DSP-CST-001
SMS-001
```

`SMS-003` and `SMS-004` should remain blocked unless provider terms or legal/privacy review exist.

## Scenario Coherence Rules

Scenarios should represent operating states, not arbitrary low/mid/high rows.

| Scenario | Candidate posture |
| --- | --- |
| Conservative | Fewer active banks, slower activation, fewer sponsors, smaller recipient batches, higher support or collection friction. |
| Base | Practical internal planning case with moderate adoption, activity, pricing, support burden, and collection risk. |
| Accelerated | Higher adoption or activity with coherent operational load, not simply optimistic revenue. |

Costs may increase in Accelerated if workload increases. Do not force all Accelerated values to be economically favorable.

## Candidate Value Record Requirements

For each populated row, include or preserve:

- assumption ID;
- scenario values;
- unit;
- proposed treatment;
- candidate status;
- range interpretation;
- source label;
- evidence limitation;
- rationale;
- risk if wrong;
- affected formulas;
- affected stakeholder views;
- recommended approval authority.

If the current table shape cannot hold all fields, add a short notes subsection below the table rather than losing governance details.

## Prohibited Shortcuts

Do not:

- copy Payroll Starter values without a reuse rationale;
- use zero as a placeholder for blocked values;
- turn pass-through disbursement funding into revenue;
- make optional notification part of Core Disbursement;
- authorize values;
- create Level 1 projections;
- update the workbook artifact;
- resolve NetBank, tax, royalty, financing, investor, or partner economics.

## Completion Checklist

The candidate-value population pass is complete when:

- every Core P0 input has a populated candidate or explicit blocked treatment;
- every candidate states source and evidence limitations;
- `DSP-VOL-001` remains derived;
- optional notification is separate;
- blocked exclusions remain blocked;
- [management-candidate-review-worksheet.md](management-candidate-review-worksheet.md) can be used for review without additional structural edits.

## Next Step After Population

Run management review through [management-candidate-review-worksheet.md](management-candidate-review-worksheet.md), then prepare selected candidates for [provisional-authorization-packet.md](provisional-authorization-packet.md).

