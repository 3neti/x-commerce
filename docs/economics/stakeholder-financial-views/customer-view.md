# Customer Financial View Template

## Stakeholder

Depositor, customer, employer, sponsor, family, institution, or future Outcome Sponsor funding or requesting the completed outcome.

## View Purpose

This view explains the customer's total cost and operational value for one offering.

The customer view is primarily:

- `Operational Value`;
- `Cost`;
- `Cash Flow`;
- `Risk`;
- `Memo`.

Do not treat customer value as platform revenue.

## Required Assumption IDs

Required assumption IDs:

- offering definition assumption IDs;
- buyer, payer, recipient, and sponsor IDs;
- transaction or activity volume IDs such as `VOL-001`, where applicable;
- pricing IDs such as `PRC-001`, `VAS-*`, or offering-specific price IDs;
- attachment IDs such as `ATT-001` or `ATT-002`, where applicable;
- failure, refund, reversal, and completion IDs;
- administrative effort or time-saving IDs;
- public or non-financial indicator IDs such as `PUB-001`, where applicable.

Blocked assumption IDs:

- list all required assumptions with `Current status: Blocked`.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until required assumptions are Active or Approved, or controlled placeholders are explicitly authorized.

## Line-Item Groups

Possible line-item groups:

- fees paid;
- internal preparation cost;
- administrative labor;
- recipient-data cleanup;
- failed-transaction handling;
- reconciliation effort;
- support effort;
- time saved;
- failures avoided;
- recipient satisfaction;
- completion rate;
- repeat-use value;
- optional value-added services;
- total cost of the outcome;
- cost of doing nothing.

## Template Line Items

### Customer Fee Paid

```text
Line-item ID: <OFFERING-ID>-CUSTOMER-COST-001
Line-item name: Customer fee paid
Stakeholder: Customer
View type: Cost
Category: Customer-facing fee
Description: Fee paid by the customer, employer, sponsor, or depositor for the selected outcome.
Formula: Customer-facing price x billable events
Input assumption IDs: <PRICE-ID>, <BILLABLE-EVENT-ID>, <VOLUME-ID>
Scenario behavior: Follows price and activity assumptions.
Year applicability: Years 1-5
Cash or accrual relevance: Cash disbursement and possible expense recognition.
Recognition trigger: Customer obligation created under approved terms.
Payment trigger: Invoice, transaction, subscription, or other approved collection event.
Cash timing: Defined by payment terms.
Accounting review required: Customer-specific.
Counterparty stakeholder: Rural Bank, ODTI, or other contracting party
Counterparty line-item reference: Required
Reconciliation basis: Fee paid should reconcile to retained, passed-through, or allocated amounts.
Timing difference: Possible collection/remittance delay.
Commercial Event: Offering-specific
Billable Event: Offering-specific
Commercial Right: Not applicable unless fee creates approved downstream rights.
Commercial Attribution: Not applicable
Commercial Waterfall reference: Applicable only if fee enters an approved waterfall.
Legal or accounting dependency: Fee disclosure, contract, tax, refund treatment.
Tax dependency: Required if taxes apply.
Blocked inputs: Required if price, volume, payer, or billable event remains Blocked.
Controlled placeholder: Required if any blocked input is temporarily modeled.
Output use: Customer cost and offering-level reconciliation.
Notes: Do not treat gross transaction value as customer fee.
```

### Administrative Work Avoided

```text
Line-item ID: <OFFERING-ID>-CUSTOMER-OPVAL-001
Line-item name: Administrative work avoided
Stakeholder: Customer
View type: Operational Value
Category: Administrative burden
Description: Estimated reduction in preparation, follow-up, reconciliation, and support effort.
Formula: Baseline effort - modeled effort after adoption
Input assumption IDs: <BASELINE-EFFORT-ID>, <POST-ADOPTION-EFFORT-ID>
Scenario behavior: May improve with repeat use and process maturity.
Year applicability: Years 1-5
Cash or accrual relevance: Not a formal accounting line unless later approved.
Recognition trigger: Operational measurement period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Accounting review required: No, unless monetized in a formal business case.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Operational indicator, not inter-stakeholder transfer.
Timing difference: Not applicable
Commercial Event: Completed outcome
Billable Event: Not necessarily
Commercial Right: Not applicable
Commercial Attribution: Not applicable
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: None unless reported externally.
Tax dependency: Not applicable
Blocked inputs: Required if effort assumptions are Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: Customer operational-value view and public-interest view.
Notes: This protects the insight that payments take seconds, while work can take days.
```

## Counterparty Reconciliation Notes

Customer fees should reconcile to:

- Rural Bank retained fees;
- ODTI platform revenue;
- provider costs;
- taxes;
- NetBank or rail fees;
- approved participant allocations;
- pass-through funds.

Customer time saved and recipient satisfaction are not mirrored as another stakeholder's revenue.

## Double-Counting Controls

- Do not add gross transaction value to platform revenue.
- Do not count avoided administrative work as revenue unless a separate approved monetization method exists.
- Do not count the same customer fee separately in Rural Bank, ODTI, provider, and partner views without elimination or reconciliation.

