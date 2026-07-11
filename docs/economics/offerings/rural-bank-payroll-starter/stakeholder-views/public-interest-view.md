# Public-Interest View: Rural Bank Payroll Starter

## Status

Current status: instantiated non-numeric public-interest view.

Stakeholder: Regulator and Public Interest.

Baseline role: non-financial view of completion, transparency, accountability, and governance.

## Boundary Reminder

This view is not a legal opinion, regulatory conclusion, lobbying paper, or compliance certification.

x-commerce identifies commercial architecture. x-legal determines legal characterization.

## Line Items

### Payroll Completion

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-PUBLIC-PI-001
Line-item name: Payroll completion
Stakeholder: Public Interest
View type: Public Interest
Category: Completion and access
Description: Indicator showing whether approved payroll recipients receive payroll value with evidence and reduced friction.
Formula: Completion indicator by approved payroll activity
Input assumption IDs: PUB-001, PUB-002, VOL-001, VOL-002
Scenario behavior: Should improve with reliable execution, evidence, support, and optional notification.
Year applicability: Years 1-5
Recognition trigger: Public-interest measurement period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Customer
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-CUST-OPVAL-002
Reconciliation basis: Shared non-financial indicator
Consolidation treatment: Non-financial
Commercial Event: Successful payroll outcome
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Public Value created by completed outcome
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: None unless externally reported or required by regulator.
Tax dependency: Not applicable
Blocked inputs: PUB-001, PUB-002, VOL-001, VOL-002
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Public-interest and customer-value view.
Notes: Do not assign peso value merely to increase total value.
```

### Role Clarity And Transparency

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-PUBLIC-PI-002
Line-item name: Role clarity and transparency
Stakeholder: Public Interest
View type: Public Interest
Category: Governance transparency
Description: Indicator that stakeholder roles, provider costs, optional SMS treatment, collection path, and legal handoffs remain explicit.
Formula: Governance review checklist
Input assumption IDs: PUB-001, SMS-004
Scenario behavior: Should improve as contracts, disclosures, and legal handoffs mature.
Year applicability: Years 1-5
Recognition trigger: Governance review period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Value-Added Provider
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-VASP-MEMO-001
Reconciliation basis: Shared privacy, consent, and transparency indicator
Consolidation treatment: Non-financial
Commercial Event: Offering governance period
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Public-interest review
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Legal handoff to x-legal required where characterization is needed.
Tax dependency: Not applicable
Blocked inputs: PUB-001, SMS-004
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Public-interest and regulatory-readiness view.
Notes: The ecosystem should make responsible regulation easier, not more ambiguous.
```

### Customer-Fund Separation

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-PUBLIC-PI-003
Line-item name: Customer-fund separation
Stakeholder: Public Interest
View type: Public Interest
Category: Fund separation
Description: Indicator that payroll funding value, customer funds, settlement balances, deposits, and pass-through value remain distinct from revenue.
Formula: Pass-through and revenue-separation controls
Input assumption IDs: NET-001, COL-001, TAX-001
Scenario behavior: Should remain stable across scenarios because it is a governance invariant.
Year applicability: Years 1-5
Recognition trigger: Governance and reconciliation review period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: NetBank
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-NETBANK-MEMO-001
Reconciliation basis: Shared pass-through and non-revenue balance control
Consolidation treatment: Non-financial
Commercial Event: Successful payroll outcome and related settlement activity
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Public-interest governance
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Custody, banking, settlement, accounting, and legal characterization review.
Tax dependency: TAX-001, if applicable
Blocked inputs: NET-001, COL-001, TAX-001
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Public-interest view and consolidation controls.
Notes: This line protects against treating pass-through funds as revenue.
```

### Provider Replaceability And Governance Fidelity

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-PUBLIC-PI-004
Line-item name: Provider replaceability and governance fidelity
Stakeholder: Public Interest
View type: Public Interest
Category: Operational governance
Description: Indicator that operational responsibility, infrastructure ownership, provider replaceability, and documented governance remain aligned.
Formula: Governance and operational-readiness indicators
Input assumption IDs: OPS-005, PUB-001, INV-003
Scenario behavior: Should remain strong as adoption grows; degradation signals governance risk.
Year applicability: Years 1-5
Recognition trigger: Governance and operations review period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: DevOps Provider
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-DEVOPS-CAP-001
Reconciliation basis: Shared operational-readiness and confidence indicator
Consolidation treatment: Non-financial
Commercial Event: Active managed operations period
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Public-interest review and DevOps operational responsibility
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: Service-level, data protection, and operational governance review.
Tax dependency: Not applicable
Blocked inputs: OPS-005, PUB-001, INV-003
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Public-interest, DevOps, and investor confidence views.
Notes: Documentation must remain faithful to operations.
```

### Reduced Administrative Burden

```text
Line-item ID: OFR-RB-PAYROLL-STARTER-PUBLIC-PI-005
Line-item name: Reduced administrative burden
Stakeholder: Public Interest
View type: Public Interest
Category: Customer and recipient benefit
Description: Indicator that the offering reduces administrative work for employers and improves recipient experience without obscuring responsibility.
Formula: Customer administrative work avoided and recipient satisfaction indicators
Input assumption IDs: CUS-004, CUS-005, PUB-001, PUB-002
Scenario behavior: Should improve with repeat use, better recipient data, reliable evidence, and support maturity.
Year applicability: Years 1-5
Recognition trigger: Public-interest measurement period completed.
Payment trigger: Not applicable
Cash timing: Not applicable
Counterparty stakeholder: Customer
Counterparty line-item reference: OFR-RB-PAYROLL-STARTER-CUST-OPVAL-001
Reconciliation basis: Shared customer operational-value indicator
Consolidation treatment: Non-financial
Commercial Event: Successful payroll outcome
Billable Event: Not applicable
Commercial Right: Not applicable
Commercial Attribution: Customer Value and Public Value created by completed outcome
Commercial Waterfall reference: Not applicable
Legal or accounting dependency: None unless externally reported.
Tax dependency: Not applicable
Blocked inputs: CUS-004, CUS-005, PUB-001, PUB-002
Controlled placeholder: None approved
Line-item readiness: Blocked
Output use: Public-interest and customer-value view.
Notes: People do not wake up wanting to send money; they wake up wanting to accomplish something.
```
