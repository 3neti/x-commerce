# Stakeholder Financial Views

## Status

Current status: reusable financial-view template layer.

These templates define how one commercial offering can produce traceable stakeholder views before any numeric model is created.

They are not spreadsheets, forecasts, accounting standards, legal opinions, contracts, or software designs.

## Purpose

This directory answers:

```text
How does one commercial offering produce a traceable, internally reconcilable
view for each stakeholder?
```

The templates must not become independent mini-models. They are different views of the same commercial activity.

The governing pattern is:

```text
One Offering
    |
    v
One Commercial Model
    |
    v
One Canonical Assumption Set
    |
    v
One Calculation Architecture
    |
    v
Multiple Stakeholder Views
```

No stakeholder view may invent its own assumptions or commercial logic.

## Governing Sequence

Financial views should follow this sequence:

```text
Offering
    |
    v
Commercial Model
    |
    v
Canonical Assumptions
    |
    v
Calculated Line Items
    |
    v
Counterparty Reconciliation
    |
    v
Stakeholder Views
    |
    v
Scenario
```

Scenarios are applied after the offering, assumptions, calculations, and reconciliation structure are defined.

## Why Stakeholder Views Are Separate

Stakeholders do not experience the same commercial activity in the same way.

Examples:

- a customer may experience fees paid, time saved, fewer failures, and better completion;
- a rural bank may experience retained fees, operating costs, and customer retention;
- ODTI may experience platform revenue, provider costs, royalties, support costs, and partner allocations;
- 3neti may experience royalties, R&D cost, and IP stewardship cost;
- a DevOps provider may experience setup revenue, monthly operations revenue, staffing load, and tooling cost;
- a regulator or public-interest reader may experience no revenue view at all, but may need public-interest indicators.

Separate views make those differences visible without allowing each stakeholder to invent a separate model.

## View Type Vocabulary

Every line item should identify a controlled view type.

Recommended values:

- `Revenue`;
- `Cost`;
- `Contribution`;
- `Cash Flow`;
- `Operational Value`;
- `Public Interest`;
- `Investor Ownership`;
- `Volume`;
- `Capacity`;
- `Risk`;
- `Memo`.

Do not imply that every stakeholder view is an income statement.

Examples:

- Customer time saved: `Operational Value`.
- ODTI transaction charge: `Revenue`.
- DevOps on-call burden: `Cost` or `Capacity`.
- Investor equity return: `Investor Ownership`.
- Regulatory role clarity: `Public Interest`.

## Canonical Line-Item Record

Every financial or non-financial line item should use this structure unless a field is clearly not applicable.

```text
Line-item ID:
Line-item name:
Stakeholder:
View type:
Category:
Description:
Formula:
Input assumption IDs:
Scenario behavior:
Year applicability:
Cash or accrual relevance:
Recognition trigger:
Payment trigger:
Cash timing:
Accounting review required:
Counterparty stakeholder:
Counterparty line-item reference:
Reconciliation basis:
Timing difference:
Commercial Event:
Billable Event:
Commercial Right:
Commercial Attribution:
Commercial Waterfall reference:
Legal or accounting dependency:
Tax dependency:
Blocked inputs:
Controlled placeholder:
Output use:
Notes:
```

Do not remove traceability fields merely for convenience. If a field does not apply, state `Not applicable` and explain where helpful.

## Shared Line-Item Identifiers

Future line-item IDs should use a stable pattern:

```text
<Offering ID>-<Stakeholder Code>-<Category>-<Sequence>
```

Example only:

```text
OFR-RB-PAYROLL-STARTER-ODTI-REV-001
OFR-RB-PAYROLL-STARTER-DEVOPS-REV-001
```

Do not populate offering-specific IDs until an offering is selected. Template examples may use placeholders such as:

```text
<OFFERING-ID>-ODTI-REV-001
```

## Stakeholder Codes

Suggested stakeholder codes:

| Code | Stakeholder |
| --- | --- |
| `CUSTOMER` | Depositor, customer, employer, sponsor, or Outcome Sponsor |
| `BANK` | Participating rural bank |
| `ODTI` | ODTI |
| `3NETI` | 3neti Research and Development OPC |
| `NETBANK` | NetBank or infrastructure participant |
| `DEVOPS` | DevOps provider |
| `VAS` | Value-added service provider |
| `BDP` | Business development partner |
| `INVESTOR` | Investor |
| `PUBLIC` | Regulator and public-interest view |

Do not create a Channel Partner template because Channel Partner remains intentionally deferred.

## Cash And Accrual Timing

Each financially relevant line item should expose timing questions.

A line item may involve:

- economic earning;
- accounting recognition;
- invoicing;
- collection;
- payment;
- cash receipt;
- cash disbursement;
- provisional allocation;
- final allocation.

Do not assume cash timing equals economic earning.

Examples:

- ODTI may invoice a subscription before collection.
- A 3neti royalty may accrue before payment.
- A partner allocation may be provisionally earned but payable only after collection.
- A provider cost may be incurred before customer billing.
- A bank may collect a customer fee before remitting other stakeholder amounts.

The template exposes these issues. It does not make final accounting conclusions.

## Counterparty Reconciliation

Every inter-stakeholder amount should have a mirrored counterparty reference.

Examples:

- ODTI DevOps expense <-> DevOps Provider revenue.
- ODTI royalty expense or payable <-> 3neti royalty income or receivable.
- Customer fee paid <-> amounts retained or passed through to Rural Bank, ODTI, NetBank, providers, taxes, and approved participants.
- ODTI partner allocation expense or payable <-> Business Development Partner allocation income or receivable.
- Rural Bank platform expense <-> ODTI platform revenue.
- ODTI provider cost <-> Value-Added Provider revenue.
- Rural Bank rail cost <-> NetBank approved fee revenue, where applicable.

Do not force perfect accounting symmetry where taxes, timing, legal structure, or third-party arrangements create differences. Expose the reason for the difference.

## Shared Reconciliation Schedule

Use this schedule for inter-stakeholder reconciliation:

```text
Reconciliation ID:
Source stakeholder:
Source line-item ID:
Source amount:
Destination stakeholder:
Destination line-item ID:
Destination amount:
Difference:
Reason for difference:
Timing difference:
Tax or withholding difference:
Legal/accounting dependency:
Status:
```

This schedule should support review of:

- gross-to-net allocation;
- provider costs;
- royalties;
- partner allocations;
- rail costs;
- DevOps costs;
- taxes;
- collected versus unpaid amounts.

Do not create actual numbers in the templates.

## Offering-Level Consolidation

Stakeholder views eventually combine into one offering-level commercial view:

```text
Customer Cost / Value
    +
Rural Bank Economics
    +
ODTI Economics
    +
3neti Economics
    +
Infrastructure And Provider Economics
    +
Partner Allocations
    +
Investor View, where applicable
    +
Public-Interest Indicators
    =
Offering-Level Commercial View
```

This is not simple arithmetic. Some views are non-financial. Inter-stakeholder lines must be eliminated or reconciled rather than added twice.

## Double-Counting Controls

Controls:

1. Do not count ODTI's DevOps expense and the DevOps provider's revenue as separate ecosystem revenue.
2. Do not count ODTI's royalty expense and 3neti's royalty income twice in consolidated ecosystem contribution.
3. Do not count customer funds or gross transaction value as platform revenue.
4. Do not count provider selling price as ODTI revenue without separating provider cost.
5. Do not combine investor capital inflow with operating revenue.
6. Do not monetize Public Value merely to increase total value.
7. Do not count the same transaction fee independently in every stakeholder view.
8. Reconcile taxes and withholding separately.

## Blocked-Assumption Controls

Every template should include:

```text
Required assumption IDs:
Blocked assumption IDs:
Controlled placeholder IDs:
Model readiness:
```

A template may exist while inputs remain blocked.

A numeric stakeholder view may not be presented as factual until readiness rules are satisfied.

## Template Index

- [customer-view.md](customer-view.md)
- [rural-bank-view.md](rural-bank-view.md)
- [odti-view.md](odti-view.md)
- [3neti-view.md](3neti-view.md)
- [netbank-view.md](netbank-view.md)
- [devops-provider-view.md](devops-provider-view.md)
- [value-added-provider-view.md](value-added-provider-view.md)
- [business-development-partner-view.md](business-development-partner-view.md)
- [investor-view.md](investor-view.md)
- [public-interest-view.md](public-interest-view.md)

## Non-Goals

Do not:

- select the first offering;
- introduce numeric projections;
- fill blocked assumptions;
- create a spreadsheet;
- create formulas with invented values;
- implement models or migrations;
- build accounting software;
- define final cash or accrual treatment;
- create a general ledger;
- modify x-change;
- draft the x-legal handoff.

## Recommended Next Task

After these templates are accepted, select the first commercial offering through a documented decision record.

The likely candidate remains:

```text
OFR-RB-PAYROLL-STARTER
```

Do not select it from this template layer.
