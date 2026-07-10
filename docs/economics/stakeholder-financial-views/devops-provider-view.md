# DevOps Provider Financial View Template

## Stakeholder

Independent DevOps provider or managed operations participant.

## View Purpose

This view explains setup revenue, recurring managed operations revenue, operational cost, staffing capacity, and reliability indicators for one offering.

Preserve:

```text
The DevOps provider operates.
The rural bank owns.
```

View types may include:

- `Revenue`;
- `Cost`;
- `Contribution`;
- `Cash Flow`;
- `Capacity`;
- `Operational Value`;
- `Risk`;
- `Memo`.

## Required Assumption IDs

Required assumption IDs:

- offering definition IDs;
- DevOps setup and recurring fee IDs such as `OPS-001` and `OPS-002`;
- active-bank IDs such as `ADP-002`;
- contracting model IDs;
- engineering time, tooling, monitoring, backup, incident, on-call, and handover cost IDs;
- collection timing and tax IDs.

Blocked assumption IDs:

- list all required blocked assumptions.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until contracting model, ownership boundary, fee basis, and cost assumptions are usable.

## Line-Item Groups

Possible line-item groups:

- deployment setup revenue;
- recurring managed operations revenue;
- premium support revenue;
- engineering time;
- tooling cost;
- monitoring cost;
- backup cost;
- on-call burden;
- incident cost;
- handover cost;
- gross margin;
- staffing capacity;
- environments supported;
- uptime and recovery indicators;
- cash collection timing.

## Template Line Items

### Managed Operations Revenue

```text
Line-item ID: <OFFERING-ID>-DEVOPS-REV-001
Line-item name: Managed operations revenue
Stakeholder: DevOps Provider
View type: Revenue
Category: Setup or recurring managed operations
Description: Revenue earned by the DevOps provider for deployment setup or recurring managed operations.
Formula: Approved setup or monthly fee x applicable bank deployments or active-bank periods
Input assumption IDs: OPS-001, OPS-002, ADP-002
Scenario behavior: Follows active-bank count, deployment timing, and approved DevOps model.
Year applicability: Years 1-5
Cash or accrual relevance: Economic earning, invoicing, collection, revenue recognition.
Recognition trigger: Setup completed or managed operations period delivered.
Payment trigger: Invoice or recurring billing schedule.
Cash timing: Defined by DevOps contract.
Accounting review required: Yes.
Counterparty stakeholder: Rural Bank or ODTI
Counterparty line-item reference: Required
Reconciliation basis: DevOps provider revenue should mirror Rural Bank or ODTI DevOps expense.
Timing difference: Possible invoice/collection timing difference.
Commercial Event: Deployment setup or managed operations period.
Billable Event: Setup milestone or monthly service period.
Commercial Right: DevOps provider contractual right.
Commercial Attribution: Managed operations provider role.
Commercial Waterfall reference: Not applicable unless resale margin is waterfall-based.
Legal or accounting dependency: DevOps agreement, service-level model, tax, ownership/delegated authority documentation.
Tax dependency: Required.
Blocked inputs: Required if contracting model or fees are Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: DevOps provider contribution and ODTI/Rural Bank reconciliation.
Notes: Provider operation does not transfer infrastructure ownership.
```

### Operational Capacity

```text
Line-item ID: <OFFERING-ID>-DEVOPS-CAP-001
Line-item name: Operational capacity
Stakeholder: DevOps Provider
View type: Capacity
Category: Environments, support load, and staffing
Description: Capacity required to operate active bank environments.
Formula: Active environments x operational workload assumption
Input assumption IDs: ADP-002, <DEVOPS-WORKLOAD-ID>
Scenario behavior: Accelerated adoption may increase total capacity requirements even if unit cost falls.
Year applicability: Years 1-5
Cash or accrual relevance: Not necessarily financial unless tied to staffing cost.
Recognition trigger: Environment active.
Payment trigger: Not applicable unless tied to staffing or service contract.
Cash timing: Not applicable
Accounting review required: No, unless monetized.
Counterparty stakeholder: Rural Bank, ODTI
Counterparty line-item reference: Optional
Reconciliation basis: Capacity should explain support cost and service-level risk.
Timing difference: Not applicable
Commercial Event: Environment active.
Billable Event: Not necessarily.
Commercial Right: Not applicable.
Commercial Attribution: Managed operations provider role.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Service-level model.
Tax dependency: Not applicable
Blocked inputs: Required if workload assumptions are Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: DevOps capacity, support-risk, and staffing view.
Notes: Capacity is not revenue.
```

## Counterparty Reconciliation Notes

If ODTI resells DevOps services, require mirrored lines in both the ODTI and DevOps views.

If the rural bank contracts directly, DevOps provider revenue should mirror rural-bank DevOps expense.

## Double-Counting Controls

- Do not count ODTI DevOps resale revenue and DevOps provider revenue as separate ecosystem revenue without eliminating internal pass-through.
- Do not treat cloud infrastructure charges as DevOps provider revenue unless contractually resold.
- Do not treat bank-owned production assets as provider-owned assets.

