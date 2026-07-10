# ODTI Financial View Template

## Stakeholder

ODTI, proposed commercial operator.

## View Purpose

This view explains ODTI's operating revenue, provider costs, allocations, royalties, support burden, and net operating contribution for one offering.

It must expose ODTI's role as commercial operator without collapsing 3neti economics into it.

View types may include:

- `Revenue`;
- `Cost`;
- `Contribution`;
- `Cash Flow`;
- `Volume`;
- `Risk`;
- `Memo`.

## Required Assumption IDs

Required assumption IDs:

- offering definition IDs;
- access pricing IDs such as `LIC-*`;
- transaction pricing IDs such as `PRC-001`;
- adoption and volume IDs such as `ADP-*` and `VOL-001`;
- value-added pricing IDs such as `VAS-*`;
- attachment IDs such as `ATT-*`;
- provider cost IDs such as `CST-*`;
- DevOps cost or resale IDs such as `OPS-*`;
- royalty IDs such as `ROY-001`;
- partner allocation IDs such as `PAR-001`;
- tax, bad debt, support, and operating-cost IDs.

Blocked assumption IDs:

- list all required blocked assumptions.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until required assumptions are Active or Approved, or controlled placeholders are explicitly authorized.

## Line-Item Groups

Possible line-item groups:

- license or subscription revenue;
- activation and implementation revenue;
- transaction revenue;
- value-added markup;
- managed operations resale or bundle margin;
- provider costs;
- NetBank or rail costs where borne by ODTI;
- DevOps costs;
- support cost;
- customer acquisition and partner costs;
- business-development allocations;
- 3neti license consideration or royalties;
- taxes;
- bad debt;
- net operating contribution;
- cash collection timing;
- deferred or accrued obligations.

## Template Line Items

### Access Revenue

```text
Line-item ID: <OFFERING-ID>-ODTI-REV-001
Line-item name: Access revenue
Stakeholder: ODTI
View type: Revenue
Category: License, subscription, maintenance, or hybrid access
Description: ODTI revenue from bank access to the selected offering.
Formula: Selected access model assumption x eligible banks or periods
Input assumption IDs: LIC-001, LIC-002, LIC-003, LIC-004, LIC-005, ADP-002, or offering-specific successor
Scenario behavior: Follows selected access model and active-bank assumptions.
Year applicability: Years 1-5
Cash or accrual relevance: Economic earning, invoicing, collection, revenue recognition.
Recognition trigger: Access enabled, activation completed, or subscription period earned.
Payment trigger: Invoice or payment schedule.
Cash timing: Defined by contract and collection assumption.
Accounting review required: Yes.
Counterparty stakeholder: Rural Bank
Counterparty line-item reference: <OFFERING-ID>-BANK-COST-001
Reconciliation basis: ODTI access revenue should reconcile to Rural Bank platform access cost.
Timing difference: Possible invoicing and collection delay.
Commercial Event: Bank access period or activation
Billable Event: Access period or activation event
Commercial Right: ODTI contractual right under approved terms.
Commercial Attribution: ODTI commercial operator role.
Commercial Waterfall reference: Only if access revenue enters an approved waterfall.
Legal or accounting dependency: Contract, tax, revenue recognition.
Tax dependency: Required.
Blocked inputs: Required if access model or active-bank assumptions are Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: ODTI revenue view and offering consolidation.
Notes: ODTI revenue is not 3neti revenue.
```

### Provider Cost

```text
Line-item ID: <OFFERING-ID>-ODTI-COST-001
Line-item name: Provider cost
Stakeholder: ODTI
View type: Cost
Category: Direct provider cost
Description: Cost paid or owed by ODTI to a provider for a value-added or infrastructure service.
Formula: Provider unit cost x qualifying usage
Input assumption IDs: CST-001, CST-002, ATT-001, ATT-002, VOL-001, or service-specific successor
Scenario behavior: Follows usage, attachment, provider cost, and scenario volume.
Year applicability: Years 1-5
Cash or accrual relevance: Cost incurred, payable, payment, possible accrual.
Recognition trigger: Provider service delivered or provider invoice received.
Payment trigger: Provider invoice or payment schedule.
Cash timing: May precede or follow customer collection.
Accounting review required: Yes.
Counterparty stakeholder: Value-Added Provider, DevOps Provider, NetBank, or other provider
Counterparty line-item reference: Required
Reconciliation basis: ODTI provider cost should mirror provider revenue where ODTI is contracting party.
Timing difference: Possible provider billing and customer collection mismatch.
Commercial Event: Offering-specific
Billable Event: Provider service event
Commercial Right: Provider contractual right, if approved.
Commercial Attribution: Provider service delivery.
Commercial Waterfall reference: Not applicable unless markup allocation uses waterfall.
Legal or accounting dependency: Provider agreement, tax, privacy/security where applicable.
Tax dependency: Required.
Blocked inputs: Required if provider quote or usage assumption is Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: ODTI margin, provider reconciliation, offering consolidation.
Notes: Do not treat full customer-facing provider price as ODTI revenue without separating provider cost.
```

### 3neti Royalty Or License Consideration

```text
Line-item ID: <OFFERING-ID>-ODTI-COST-ROY-001
Line-item name: 3neti royalty or license consideration
Stakeholder: ODTI
View type: Cost
Category: Royalty, license consideration, or payable
Description: Amount owed by ODTI to 3neti under approved IP or license terms.
Formula: Approved royalty or license basis
Input assumption IDs: ROY-001
Scenario behavior: Follows approved royalty basis.
Year applicability: Years 1-5
Cash or accrual relevance: Expense or payable, payment, possible accrual.
Recognition trigger: Defined by 3neti-ODTI agreement.
Payment trigger: Defined by 3neti-ODTI agreement.
Cash timing: Defined by agreement and collection terms.
Accounting review required: Yes.
Counterparty stakeholder: 3neti
Counterparty line-item reference: <OFFERING-ID>-3NETI-REV-001
Reconciliation basis: ODTI royalty expense/payable should mirror 3neti royalty income/receivable, subject to timing and withholding differences.
Timing difference: Possible accrual/payment timing difference.
Commercial Event: Agreement-specific
Billable Event: Agreement-specific
Commercial Right: 3neti IP/license right, if approved.
Commercial Attribution: 3neti IP stewardship.
Commercial Waterfall reference: Applicable only if royalty is structured through a waterfall.
Legal or accounting dependency: License agreement, related-party review, tax, withholding, accounting.
Tax dependency: Required.
Blocked inputs: ROY-001 while Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: ODTI net contribution and 3neti reconciliation.
Notes: Do not calculate while royalty basis is Blocked except as controlled placeholder.
```

## Counterparty Reconciliation Notes

ODTI lines should reconcile with:

- Rural Bank access or platform expense;
- 3neti royalty income or receivable;
- DevOps Provider revenue where ODTI contracts or resells;
- Value-Added Provider revenue where ODTI pays provider costs;
- Business Development Partner allocation income or receivable;
- NetBank approved fee revenue where ODTI bears rail or infrastructure costs.

## Double-Counting Controls

- Do not count ODTI provider cost and provider revenue as separate ecosystem revenue.
- Do not count ODTI royalty expense and 3neti royalty income twice in consolidated contribution.
- Do not collapse ODTI and 3neti economics.
- Do not count customer funds, settlement balances, or gross transaction value as ODTI revenue.

