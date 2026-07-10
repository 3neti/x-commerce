# Public-Interest View Template

## Stakeholder

Regulator and public-interest view.

## View Purpose

This view explains non-financial public-interest indicators for one offering.

It should show whether the offering improves inclusion, completion, transparency, accountability, role clarity, provider-cost visibility, governance fidelity, and public confidence.

Do not assign artificial peso values to Public Value merely to force it into a financial table.

View types may include:

- `Public Interest`;
- `Operational Value`;
- `Risk`;
- `Volume`;
- `Memo`.

## Required Assumption IDs

Required assumption IDs:

- offering definition IDs;
- public-interest indicator IDs such as `PUB-001`;
- completion, failure, complaint, dispute, reconciliation, role-clarity, and transparency IDs;
- provider-cost visibility IDs;
- Commercial Waterfall transparency IDs;
- legal, privacy, consumer-protection, and regulatory dependency IDs.

Blocked assumption IDs:

- list all required blocked assumptions.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until public-interest indicators and legal dependencies are defined or explicitly controlled.

## Line-Item Groups

Possible line-item groups:

- inclusion;
- completion;
- role clarity;
- transparency;
- provider-cost visibility;
- Commercial Waterfall transparency;
- customer freedom;
- provider replaceability;
- institutional resilience;
- evidence quality;
- complaint and dispute visibility;
- governance fidelity;
- public confidence.

## Template Line Items

### Completion And Evidence Indicator

```text
Line-item ID: <OFFERING-ID>-PUBLIC-PI-001
Line-item name: Completion and evidence indicator
Stakeholder: Regulator and Public Interest
View type: Public Interest
Category: Completion, evidence, and accountability
Description: Indicator showing whether the offering improves completed outcomes and evidence quality.
Formula: Offering-specific indicator definition
Input assumption IDs: PUB-001, <COMPLETION-ID>, <EVIDENCE-ID>
Scenario behavior: May improve with maturity or degrade with volume/support pressure.
Year applicability: Years 1-5
Cash or accrual relevance: Not a formal financial line.
Recognition trigger: Measurement period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Accounting review required: No, unless reported under a formal standard.
Counterparty stakeholder: Not applicable
Counterparty line-item reference: Not applicable
Reconciliation basis: Non-financial indicator; may be compared with customer and rural-bank operational views.
Timing difference: Not applicable
Commercial Event: Completed outcome
Billable Event: Not necessarily
Commercial Right: Not applicable
Commercial Attribution: Not applicable
Commercial Waterfall reference: Not applicable, but waterfall transparency may be reported separately.
Legal or accounting dependency: Legal and regulatory review if used externally.
Tax dependency: Not applicable
Blocked inputs: Required if public indicator definitions are Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: Public-interest view and regulator-facing narrative.
Notes: Public Value should not be monetized merely to inflate total value.
```

### Commercial Transparency Indicator

```text
Line-item ID: <OFFERING-ID>-PUBLIC-PI-002
Line-item name: Commercial transparency indicator
Stakeholder: Regulator and Public Interest
View type: Public Interest
Category: Role clarity, cost visibility, and governance fidelity
Description: Indicator showing whether the offering preserves clear roles, visible provider costs, and documented commercial rules.
Formula: Offering-specific checklist or scorecard
Input assumption IDs: <ROLE-CLARITY-ID>, <PROVIDER-COST-VISIBILITY-ID>, <WATERFALL-TRANSPARENCY-ID>
Scenario behavior: Should not vary mechanically with transaction volume.
Year applicability: Years 1-5
Cash or accrual relevance: Not financial.
Recognition trigger: Governance review completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Accounting review required: No.
Counterparty stakeholder: ODTI, Rural Bank, Providers, 3neti
Counterparty line-item reference: Optional
Reconciliation basis: Should align with documented Commercial Waterfall, provider cost, and stakeholder responsibility records.
Timing difference: Not applicable
Commercial Event: Not necessarily
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Not applicable
Commercial Waterfall reference: Applicable as transparency reference, not allocation.
Legal or accounting dependency: x-legal handoff where terms are external-facing.
Tax dependency: Not applicable
Blocked inputs: Required if transparency criteria are Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: Public-interest view, governance review, and x-legal handoff preparation.
Notes: Regulators should not be expected to repair unclear architecture after implementation.
```

## Counterparty Reconciliation Notes

Public-interest indicators usually do not mirror another stakeholder's revenue or cost.

They should reconcile narratively with:

- customer operational-value indicators;
- rural-bank responsibility and support indicators;
- ODTI provider-cost visibility;
- Commercial Waterfall documentation;
- legal handoff records.

## Double-Counting Controls

- Do not monetize Public Value merely to increase total ecosystem value.
- Do not count public-interest indicators as operating revenue.
- Do not imply regulatory approval.
- Do not treat role clarity as legal characterization.

