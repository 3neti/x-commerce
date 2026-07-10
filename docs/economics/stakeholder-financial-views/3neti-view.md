# 3neti Financial View Template

## Stakeholder

3neti Research and Development OPC.

## View Purpose

This view explains 3neti's IP, royalty, license-consideration, R&D, stewardship, legal, and package-governance economics for one offering.

Preserve the distinction:

- 3neti owns and stewards reusable technology and knowledge.
- ODTI operates commercial programs.

View types may include:

- `Revenue`;
- `Cost`;
- `Contribution`;
- `Cash Flow`;
- `Investor Ownership`;
- `Memo`.

## Required Assumption IDs

Required assumption IDs:

- offering definition IDs;
- 3neti-ODTI license and royalty IDs such as `ROY-001`;
- ODTI revenue or activity IDs if the royalty basis depends on ODTI activity;
- R&D, stewardship, package maintenance, legal, and IP cost IDs;
- tax and withholding IDs such as `TAX-001`;
- related-party review dependencies.

Blocked assumption IDs:

- list all required blocked assumptions.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until royalty basis, license consideration, and related dependencies are Active or Approved, or controlled placeholders are explicitly authorized.

## Line-Item Groups

Possible line-item groups:

- license consideration;
- royalty revenue;
- R&D cost;
- package stewardship cost;
- architecture and documentation cost;
- IP and legal cost;
- support provided to ODTI;
- net contribution;
- royalty accrual versus payment;
- related-party review dependencies.

## Template Line Items

### Royalty Or License Consideration

```text
Line-item ID: <OFFERING-ID>-3NETI-REV-001
Line-item name: Royalty or license consideration
Stakeholder: 3neti
View type: Revenue
Category: IP/license economics
Description: Amount earned or receivable by 3neti under approved 3neti-ODTI terms.
Formula: Approved royalty or license basis
Input assumption IDs: ROY-001
Scenario behavior: Follows approved basis and related volume or revenue drivers.
Year applicability: Years 1-5
Cash or accrual relevance: Economic earning, receivable, payment, possible accrual.
Recognition trigger: Defined by license or royalty agreement.
Payment trigger: Defined by license or royalty agreement.
Cash timing: May differ from ODTI recognition or collection.
Accounting review required: Yes.
Counterparty stakeholder: ODTI
Counterparty line-item reference: <OFFERING-ID>-ODTI-COST-ROY-001
Reconciliation basis: 3neti royalty income/receivable should reconcile to ODTI royalty expense/payable, subject to timing and withholding differences.
Timing difference: Possible accrual, invoice, collection, or withholding difference.
Commercial Event: Agreement-specific
Billable Event: Agreement-specific
Commercial Right: 3neti approved IP/license right.
Commercial Attribution: 3neti knowledge and IP stewardship.
Commercial Waterfall reference: Only if royalty is waterfall-based.
Legal or accounting dependency: License agreement, IP review, related-party review, revenue recognition.
Tax dependency: Required.
Blocked inputs: ROY-001 while Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: 3neti financial view, ODTI reconciliation, investor view.
Notes: ODTI operating revenue is not automatically 3neti revenue.
```

### R&D And Stewardship Cost

```text
Line-item ID: <OFFERING-ID>-3NETI-COST-001
Line-item name: R&D and stewardship cost
Stakeholder: 3neti
View type: Cost
Category: R&D, architecture, package stewardship
Description: Cost of maintaining reusable technology, architecture, documentation, and IP governance tied to the offering.
Formula: Approved cost allocation or direct cost basis
Input assumption IDs: <R&D-COST-ID>, <STEWARDSHIP-COST-ID>
Scenario behavior: May not scale directly with transaction volume.
Year applicability: Years 1-5
Cash or accrual relevance: Expense, payable, cash disbursement.
Recognition trigger: Work performed or cost incurred.
Payment trigger: Vendor, payroll, or internal cost schedule.
Cash timing: Cost-specific.
Accounting review required: Yes.
Counterparty stakeholder: Not applicable unless charged to ODTI or another entity.
Counterparty line-item reference: Required if charged to another stakeholder.
Reconciliation basis: Direct cost or allocation basis.
Timing difference: Possible.
Commercial Event: Not directly tied unless offering-specific stewardship is allocated.
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: 3neti stewardship role.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: IP, capitalization versus expense, related-party allocation.
Tax dependency: Required if material.
Blocked inputs: Required if cost basis is Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: 3neti contribution and investor confidence view.
Notes: Do not force R&D into per-transaction economics unless approved.
```

## Counterparty Reconciliation Notes

3neti lines should reconcile with:

- ODTI royalty expense or payable;
- investor views where 3neti economics affect company value;
- related-party documents where cost sharing or support is charged.

## Double-Counting Controls

- Do not count ODTI revenue as 3neti revenue.
- Do not count ODTI royalty expense and 3neti royalty income twice in consolidated contribution.
- Do not treat IP value as cash income without an approved transaction or valuation basis.

