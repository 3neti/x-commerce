# Business Development Partner Financial View Template

## Stakeholder

Business development partner or approved relationship participant.

## View Purpose

This view explains attributed relationships, qualifying Commercial Events, approved allocations, duration, payment timing, and partner net contribution for one offering.

Preserve:

```text
Compensation should be earned by commercial events, not by discretion.
```

View types may include:

- `Revenue`;
- `Cost`;
- `Contribution`;
- `Cash Flow`;
- `Operational Value`;
- `Risk`;
- `Memo`.

## Required Assumption IDs

Required assumption IDs:

- offering definition IDs;
- Commercial Event and Billable Event IDs;
- attribution basis IDs;
- partner allocation IDs such as `PAR-001`;
- transaction or activity volume IDs such as `VOL-001`;
- duration, cap, collection, reversal, and clawback IDs;
- partner cost IDs for relationship development, travel, proposal work, and support.

Blocked assumption IDs:

- list all required blocked assumptions.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until attribution, allocation basis, duration, deduction order, and payment timing are approved or controlled as placeholders.

## Line-Item Groups

Possible line-item groups:

- attributed customers or institutions;
- qualifying Commercial Events;
- approved allocation basis;
- allocation amount or formula;
- duration;
- provisional versus final allocation;
- collection dependency;
- payment timing;
- reversals or clawbacks;
- relationship-development cost;
- travel and proposal cost;
- net contribution;
- attribution conflicts;
- active relationship indicators.

## Template Line Items

### Partner Allocation

```text
Line-item ID: <OFFERING-ID>-BDP-REV-001
Line-item name: Partner allocation
Stakeholder: Business Development Partner
View type: Revenue
Category: Approved referral, commission, success fee, or participation allocation
Description: Amount allocated to a business development partner under approved commercial rules.
Formula: Approved allocation rule x qualifying Commercial Events or approved allocation base
Input assumption IDs: PAR-001, VOL-001, <ATTRIBUTION-ID>, <DURATION-ID>
Scenario behavior: Follows qualifying events, attribution, duration, and collection dependency.
Year applicability: Years 1-5 or approved duration
Cash or accrual relevance: Provisional allocation, final allocation, receivable, payment.
Recognition trigger: Qualifying Commercial Event and attribution confirmed.
Payment trigger: Defined by contract; may require collection first.
Cash timing: May differ from event recognition.
Accounting review required: Yes.
Counterparty stakeholder: ODTI, Rural Bank, or other contracting party
Counterparty line-item reference: Required
Reconciliation basis: Partner allocation should mirror contracting party expense or payable.
Timing difference: Possible provisional/final and collection/payment timing difference.
Commercial Event: Offering-specific qualifying event
Billable Event: Offering-specific, if applicable
Commercial Right: Partner right only if approved.
Commercial Attribution: Required.
Commercial Waterfall reference: Required if allocation is waterfall-based.
Legal or accounting dependency: Contract, tax withholding, commission/referral/revenue-share characterization.
Tax dependency: Required.
Blocked inputs: PAR-001 while Blocked, attribution, duration, and collection rules if unresolved.
Controlled placeholder: Required if placeholder is used.
Output use: Partner financial view and counterparty reconciliation.
Notes: No named person receives allocation unless formally approved.
```

### Relationship Development Cost

```text
Line-item ID: <OFFERING-ID>-BDP-COST-001
Line-item name: Relationship development cost
Stakeholder: Business Development Partner
View type: Cost
Category: Relationship development and customer support
Description: Partner cost to originate, maintain, or expand a relationship.
Formula: Approved cost basis or observed cost
Input assumption IDs: <PARTNER-COST-ID>
Scenario behavior: May increase with relationship-development effort or geographic coverage.
Year applicability: Years 1-5
Cash or accrual relevance: Partner expense and cash disbursement.
Recognition trigger: Cost incurred.
Payment trigger: Not applicable unless reimbursable.
Cash timing: Cost-specific.
Accounting review required: Partner-specific.
Counterparty stakeholder: Not applicable unless reimbursed.
Counterparty line-item reference: Required if reimbursed.
Reconciliation basis: Direct partner cost or reimbursable cost.
Timing difference: Possible.
Commercial Event: Not necessarily.
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Relationship activity may support attribution evidence but does not automatically create entitlement.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Expense/reimbursement treatment.
Tax dependency: Partner-specific.
Blocked inputs: Required if cost basis is Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: Partner net contribution.
Notes: Relationship effort alone is not entitlement.
```

## Counterparty Reconciliation Notes

Partner allocation should mirror:

- ODTI partner allocation expense or payable;
- Rural Bank expense or payable, if the bank is the contracting party;
- another approved contracting-party payable.

## Double-Counting Controls

- Do not allocate from customer funds, deposits, settlement balances, or gross transaction value unless expressly lawful and approved.
- Do not record partner revenue without a mirrored counterparty expense or payable.
- Do not allow vague involvement to create entitlement.

