# Rural Bank Financial View Template

## Stakeholder

Participating rural bank.

## View Purpose

This view explains the bank's commercial capability, costs, retained economics, and operational burden for one offering.

The rural bank receives commercial capability, not guaranteed adoption.

View types may include:

- `Revenue`;
- `Cost`;
- `Contribution`;
- `Cash Flow`;
- `Operational Value`;
- `Volume`;
- `Risk`;
- `Memo`.

## Required Assumption IDs

Required assumption IDs:

- offering definition IDs;
- license, subscription, or hybrid model IDs such as `LIC-001` through `LIC-005`;
- activation, implementation, DevOps, and cloud IDs such as `OPS-001` and `OPS-002`;
- adoption IDs such as `ADP-001` and `ADP-002`;
- transaction volume IDs such as `VOL-001`;
- customer-facing transaction fee IDs such as `PRC-001`;
- bank-retained fee or formula IDs;
- support, compliance, settlement, rail, and provider-cost IDs;
- churn, bad debt, reversal, tax, and contingency IDs.

Blocked assumption IDs:

- list required assumptions with `Current status: Blocked`.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until required assumptions are Active or Approved, or controlled placeholders are explicitly authorized.

## Line-Item Groups

Possible line-item groups:

- license or subscription cost;
- implementation or activation cost;
- DevOps and cloud cost;
- support and compliance cost;
- retained transaction fees;
- retained capability or service margin;
- payroll or remittance relationship value;
- active customers or employers;
- transaction activity;
- contribution by offering;
- payback period;
- net contribution;
- customer-retention indicators;
- deposits or settlement balances shown separately and never treated automatically as revenue.

## Template Line Items

### Platform Access Cost

```text
Line-item ID: <OFFERING-ID>-BANK-COST-001
Line-item name: Platform access cost
Stakeholder: Rural Bank
View type: Cost
Category: License, subscription, maintenance, or hybrid access
Description: Amount paid by the rural bank for access to the offering.
Formula: Selected access model assumption
Input assumption IDs: LIC-001, LIC-002, LIC-003, LIC-004, LIC-005, or offering-specific successor
Scenario behavior: May remain fixed across scenarios unless pricing or model varies.
Year applicability: Years 1-5
Cash or accrual relevance: Cash disbursement, invoicing, and possible expense recognition.
Recognition trigger: Contractual access period or activation event.
Payment trigger: Invoice or approved payment schedule.
Cash timing: Defined by contract.
Accounting review required: Yes.
Counterparty stakeholder: ODTI
Counterparty line-item reference: <OFFERING-ID>-ODTI-REV-001
Reconciliation basis: Bank platform cost should reconcile to ODTI access revenue, net of timing or tax differences.
Timing difference: Possible invoice/collection timing difference.
Commercial Event: Bank access enabled or subscription period active.
Billable Event: Access period or activation event.
Commercial Right: Not applicable unless downstream allocations are approved.
Commercial Attribution: Not applicable
Commercial Waterfall reference: Not applicable unless access revenue enters an approved waterfall.
Legal or accounting dependency: Contract, revenue recognition, tax.
Tax dependency: Required.
Blocked inputs: Required if selected access model is not approved.
Controlled placeholder: Required if access model remains unresolved.
Output use: Bank cost view, ODTI revenue view, offering consolidation.
Notes: Do not combine with DevOps setup unless explicitly bundled.
```

### Retained Transaction Economics

```text
Line-item ID: <OFFERING-ID>-BANK-REV-001
Line-item name: Bank-retained transaction economics
Stakeholder: Rural Bank
View type: Revenue
Category: Retained fee or margin
Description: Amount retained by the rural bank from qualifying transaction activity.
Formula: Qualifying volume x approved bank-retained amount or formula
Input assumption IDs: VOL-001, PRC-001, <BANK-RETAINED-FEE-ID>
Scenario behavior: Follows active banks, activity volume, and retained-fee assumptions.
Year applicability: Years 1-5
Cash or accrual relevance: Economic earning, collection, settlement, and possible revenue recognition.
Recognition trigger: Completed qualifying transaction or approved fee event.
Payment trigger: Customer collection or settlement event.
Cash timing: Defined by collection and settlement flow.
Accounting review required: Yes.
Counterparty stakeholder: Customer, ODTI, NetBank, or other collection party
Counterparty line-item reference: Required
Reconciliation basis: Fee retained should reconcile to customer fee paid and amounts passed through.
Timing difference: Possible settlement delay.
Commercial Event: Completed transaction outcome
Billable Event: Qualifying transaction
Commercial Right: Offering-specific
Commercial Attribution: Bank customer-facing role
Commercial Waterfall reference: Applicable if fee enters an approved waterfall.
Legal or accounting dependency: Fee disclosure, tax, banking/settlement characterization.
Tax dependency: Required.
Blocked inputs: Required if volume, billable event, retained amount, or legal treatment is Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: Bank contribution view.
Notes: Deposits, float, customer funds, settlement balances, and gross transaction value are not revenue.
```

## Counterparty Reconciliation Notes

Rural Bank lines should reconcile with:

- ODTI platform revenue;
- DevOps Provider revenue or ODTI DevOps resale/bundle lines;
- NetBank approved fee revenue, where applicable;
- customer fee paid;
- provider costs or pass-throughs;
- taxes and withholding.

## Double-Counting Controls

- Do not treat deposits, float, settlement balances, customer funds, or gross transaction value as bank revenue.
- Do not count a bank-retained fee again as ODTI revenue unless it is actually remitted to ODTI.
- Do not combine access cost, DevOps cost, and provider cost unless a bundled commercial model explicitly defines the bundle.

