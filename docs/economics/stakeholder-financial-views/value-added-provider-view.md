# Value-Added Provider Financial View Template

## Stakeholder

Value-added service provider.

## View Purpose

This view explains qualifying usage, attachment behavior, provider revenue, delivery cost, support cost, service success, and provider margin for one offering.

Distinguish:

- `VAS-*` pricing assumptions;
- `ATT-*` attachment behavior.

View types may include:

- `Revenue`;
- `Cost`;
- `Contribution`;
- `Cash Flow`;
- `Volume`;
- `Operational Value`;
- `Risk`;
- `Memo`.

## Required Assumption IDs

Required assumption IDs:

- offering definition IDs;
- value-added service pricing IDs such as `VAS-001`, `VAS-002`, `VAS-003`, or `VAS-004`;
- attachment IDs such as `ATT-001` or `ATT-002`;
- provider cost IDs such as `CST-001` or `CST-002`;
- transaction volume IDs such as `VOL-001`;
- service success/failure, refund, reversal, privacy, and support IDs.

Blocked assumption IDs:

- list all required blocked assumptions.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until service price, attachment behavior, direct provider cost, billable unit, and legal/privacy dependencies are usable.

## Line-Item Groups

Possible line-item groups:

- qualifying usage;
- attachment rate;
- provider price;
- direct delivery cost;
- support cost;
- provider margin;
- service success rate;
- failed-service treatment;
- refund or reversal treatment;
- customer-facing price;
- ODTI markup where applicable;
- data, privacy, consent, or legal dependency.

## Template Line Items

### Provider Revenue

```text
Line-item ID: <OFFERING-ID>-VAS-REV-001
Line-item name: Provider revenue
Stakeholder: Value-Added Provider
View type: Revenue
Category: Value-added service usage
Description: Provider revenue from qualifying service usage attached to the offering.
Formula: Provider price or cost basis x qualifying usage
Input assumption IDs: VAS-001, VAS-002, VAS-003, VAS-004, ATT-001, ATT-002, VOL-001, CST-001, CST-002 as applicable
Scenario behavior: Follows transaction volume, attachment rate, and provider pricing.
Year applicability: Years 1-5
Cash or accrual relevance: Economic earning, invoicing, collection, recognition.
Recognition trigger: Service delivered or provider billing event.
Payment trigger: Provider invoice or settlement schedule.
Cash timing: May differ from customer billing.
Accounting review required: Yes.
Counterparty stakeholder: ODTI, Rural Bank, or Customer
Counterparty line-item reference: Required
Reconciliation basis: Provider revenue should mirror provider cost or pass-through in the payer's view.
Timing difference: Provider billing may precede customer collection.
Commercial Event: Offering-specific completed outcome or attached service event.
Billable Event: Service-specific billable event.
Commercial Right: Provider contractual right, if approved.
Commercial Attribution: Provider capability delivery.
Commercial Waterfall reference: Not applicable unless markup or participation is waterfall-based.
Legal or accounting dependency: Provider agreement, privacy, consent, identity/KYC or messaging rules where applicable.
Tax dependency: Required.
Blocked inputs: Required if provider cost, attachment rate, billable unit, or legal dependency is Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: Provider revenue, ODTI/Rural Bank cost reconciliation, offering consolidation.
Notes: Provider improves outcome capability; it does not own the transaction.
```

### Service Success Rate

```text
Line-item ID: <OFFERING-ID>-VAS-OPVAL-001
Line-item name: Service success rate
Stakeholder: Value-Added Provider
View type: Operational Value
Category: Capability performance
Description: Indicator showing whether the attached capability succeeds.
Formula: Successful service events / attempted service events
Input assumption IDs: <SERVICE-SUCCESS-ID>, ATT-001 or ATT-002 as applicable
Scenario behavior: May improve with provider maturity or degrade under volume pressure.
Year applicability: Years 1-5
Cash or accrual relevance: Not financial unless tied to refund, failure, or service-level penalties.
Recognition trigger: Service event outcome recorded.
Payment trigger: Not applicable unless service-level terms apply.
Cash timing: Not applicable
Accounting review required: No, unless monetized.
Counterparty stakeholder: ODTI, Rural Bank, Customer
Counterparty line-item reference: Optional
Reconciliation basis: Should explain support, refund, or failure treatment.
Timing difference: Not applicable
Commercial Event: Attached service event.
Billable Event: Service-specific, if applicable.
Commercial Right: Not applicable unless service-level credits apply.
Commercial Attribution: Provider capability delivery.
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Service-level and provider agreement.
Tax dependency: Not applicable
Blocked inputs: Required if service-success assumptions are Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: Provider performance and customer/public-interest indicators.
Notes: Service success may be more important than raw usage.
```

## Counterparty Reconciliation Notes

Provider revenue should mirror:

- ODTI provider cost, if ODTI contracts with the provider;
- Rural Bank provider cost, if the bank contracts directly;
- customer fee component, if customer pays the provider or pass-through.

## Double-Counting Controls

- Do not count customer-facing service price as ODTI revenue without separating provider cost.
- Do not mix `VAS-*` pricing assumptions with `ATT-*` attachment behavior.
- Do not treat failed service events as successful outcome improvements.

