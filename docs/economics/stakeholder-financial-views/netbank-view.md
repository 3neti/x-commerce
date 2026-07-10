# NetBank Financial View Template

## Stakeholder

NetBank or another approved infrastructure participant.

## View Purpose

This view explains approved banking, settlement, rail, account, API, or transaction-service economics for one offering.

It must explicitly exclude from revenue unless legally and contractually recognized:

- deposits;
- float;
- settlement balances;
- customer funds;
- pass-through funds;
- gross transaction value.

View types may include:

- `Revenue`;
- `Cost`;
- `Contribution`;
- `Cash Flow`;
- `Volume`;
- `Capacity`;
- `Risk`;
- `Memo`.

## Required Assumption IDs

Required assumption IDs:

- offering definition IDs;
- activity volume IDs such as `VOL-001`;
- approved infrastructure, rail, settlement, API, or banking-service fee IDs;
- processing, compliance, reconciliation, and exception-cost IDs;
- legal-characterization dependencies;
- tax and accounting IDs.

Blocked assumption IDs:

- list all required blocked assumptions.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until NetBank role, approved fees, and legal dependencies are defined or controlled as placeholders.

## Line-Item Groups

Possible line-item groups:

- approved account, API, settlement, rail, or banking-service fees;
- transaction activity;
- service or processing cost;
- compliance cost;
- reconciliation cost;
- support and exception cost;
- recognized income;
- timing of collection;
- infrastructure capacity indicators;
- legal-characterization dependencies.

## Template Line Items

### Approved Infrastructure Fee

```text
Line-item ID: <OFFERING-ID>-NETBANK-REV-001
Line-item name: Approved infrastructure fee
Stakeholder: NetBank
View type: Revenue
Category: Approved banking, rail, settlement, API, or infrastructure fee
Description: Fee recognized by NetBank or another infrastructure participant under approved terms.
Formula: Approved fee basis x qualifying activity
Input assumption IDs: <NETBANK-FEE-ID>, VOL-001 or applicable volume ID
Scenario behavior: Follows approved fee basis and activity volume.
Year applicability: Years 1-5
Cash or accrual relevance: Economic earning, invoicing, collection, recognition.
Recognition trigger: Approved service event or period.
Payment trigger: Invoice, settlement cycle, or approved fee event.
Cash timing: Defined by infrastructure agreement.
Accounting review required: Yes.
Counterparty stakeholder: Rural Bank, ODTI, Customer, or other payer
Counterparty line-item reference: Required
Reconciliation basis: NetBank approved fee revenue should mirror another stakeholder's rail, settlement, or infrastructure cost.
Timing difference: Possible settlement or billing delay.
Commercial Event: Offering-specific
Billable Event: Approved infrastructure event
Commercial Right: NetBank contractual right, if approved.
Commercial Attribution: Infrastructure participant role.
Commercial Waterfall reference: Not applicable unless fee participates in an approved waterfall.
Legal or accounting dependency: Banking, settlement, rail, API, and fee characterization.
Tax dependency: Required.
Blocked inputs: Required if fee basis or legal characterization is Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: NetBank view and counterparty cost reconciliation.
Notes: Deposits, float, settlement balances, customer funds, pass-through funds, and gross transaction value are not revenue.
```

## Counterparty Reconciliation Notes

NetBank lines should reconcile with:

- Rural Bank rail or settlement cost;
- ODTI infrastructure cost, if ODTI bears it;
- customer fee allocation, if fees are customer-facing;
- pass-through schedules where NetBank handles settlement-related flows.

## Double-Counting Controls

- Do not count settlement balances as revenue.
- Do not count gross transaction value as infrastructure revenue.
- Do not count pass-through rail amounts as platform revenue.
- Do not imply legal characterization without x-legal review.

