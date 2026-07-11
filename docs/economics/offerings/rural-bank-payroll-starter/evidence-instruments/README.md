# Evidence Instruments: Rural Bank Payroll Starter

## Status

Current status: blank evidence-acquisition instrument index for `OFR-RB-PAYROLL-STARTER`.

These instruments collect evidence. They do not approve values, pricing, projections, contracts, legal characterization, tax treatment, accounting treatment, or software implementation.

## Shared Evidence Provenance Standard

Every completed evidence response should include this provenance block where applicable:

```text
Evidence date:
Evidence period:
Responding organization:
Respondent role:
Population or sample represented:
Method used:
Range interpretation:
Range period:
Range population:
Range exclusions:
Expected central value, if any:
Known exclusions:
Known limitations:
Confidentiality classification:
Confidentiality restrictions:
Permitted modeling use:
Permitted sharing:
Expiry or validity period:
Supporting attachment or reference:
Reviewer notes:
```

This block prevents weak evidence from being treated as stronger than it is. A provider quote is not permanent. One employer interview is not portfolio data. One-bank pilot data is not automatically representative of all RBAP members. Provider SLA language is not the same as observed performance. Confidential evidence may be usable internally but not in stakeholder-facing materials.

## Range Semantics

When a response provides a range, classify the range using one controlled `Range interpretation` value:

```text
Observed minimum and maximum
Expected operating range
Negotiation range
Confidence interval
Rough estimate
Scenario recommendation
Contractual range
Provider tier range
Other - explain
```

Also identify:

```text
Range period:
Range population:
Range exclusions:
Expected central value, if any:
```

This prevents a negotiated price range from being mistaken for observed operating variability, or a rough estimate from being treated as a contractual tier.

## Instrument Index

| Instrument | Primary assumptions | Primary respondent | Purpose |
| --- | --- | --- | --- |
| [rural-bank-and-rbap-questionnaire.md](rural-bank-and-rbap-questionnaire.md) | `ADP-001`, `ADP-002`, `ADP-003`, `CUS-001`, `RISK-001` | Rural Bank or RBAP | Adoption, payroll portfolio, readiness, infrastructure, and commercial appetite evidence. |
| [employer-payroll-questionnaire.md](employer-payroll-questionnaire.md) | `CUS-002`, `CUS-003`, `CUS-004`, `CUS-005`, `CUS-006`, `COL-001`, `ATT-001`, `PUB-002`, `PUB-003` | Employer or Outcome Sponsor | Payroll activity, current workflow, administrative burden, collection timing, and willingness-to-pay evidence. |
| [netbank-information-request.md](netbank-information-request.md) | `NET-001`, `NET-002`, `VOL-002` | NetBank or banking partner | Role, fees, settlement, API, reconciliation, service levels, and regulated responsibility evidence. |
| [devops-and-cloud-estimate-request.md](devops-and-cloud-estimate-request.md) | `OPS-001`, `OPS-002`, `OPS-003`, `OPS-004`, `OPS-005`, `CLD-001` | DevOps Provider and cloud-cost owner | Setup, recurring operations, internal cost, tooling, cloud cost, readiness, and ownership evidence. |
| [sms-provider-information-request.md](sms-provider-information-request.md) | `VAS-001`, `CST-001`, `ATT-001`, `SMS-001`, `SMS-002`, `SMS-003`, `SMS-004` | SMS Provider | Wholesale pricing, delivery semantics, performance, failed-message treatment, privacy, and internal cost evidence. |
| [odti-3neti-commercial-decision-worksheet.md](odti-3neti-commercial-decision-worksheet.md) | `LIC-004`, `LIC-005`, `PRC-001`, `RB-001`, `ODTI-001`, `ODTI-002`, `ROY-001`, `RISK-001`, `RISK-002` | ODTI and 3neti management | Commercial decisions, retained economics, ODTI cost structure, 3neti economics, and model-boundary decisions. |
| [legal-accounting-tax-privacy-handoff.md](legal-accounting-tax-privacy-handoff.md) | `TAX-001`, `ROY-001`, `COL-001`, `RB-001`, `NET-001`, `SMS-004`, `INV-002` | x-legal, accounting, tax, privacy, and security reviewers | Specific handoff questions for characterization, tax, accounting, privacy, security, and operations. |
| [controlled-placeholder-authorization-worksheet.md](controlled-placeholder-authorization-worksheet.md) | All P0 assumptions without Approved or evidence-supported Active inputs | Internal reviewer | Governed provisional-input records for Active working assumptions and Blocked assumptions with controlled placeholders. |

## Traceability Matrix

| Assumption ID | Instrument | Question section | Evidence owner | Priority |
| --- | --- | --- | --- | --- |
| `ADP-001` | Rural Bank and RBAP Questionnaire; Controlled-Placeholder Authorization Worksheet | Adoption Readiness | ODTI commercial owner and RBAP liaison | P0 |
| `ADP-002` | Rural Bank and RBAP Questionnaire; Controlled-Placeholder Authorization Worksheet | Adoption Readiness | ODTI commercial owner and RBAP liaison | P0 |
| `ADP-003` | Rural Bank and RBAP Questionnaire; Controlled-Placeholder Authorization Worksheet | Adoption Readiness | ODTI implementation owner | P0 |
| `CUS-001` | Rural Bank and RBAP Questionnaire; Controlled-Placeholder Authorization Worksheet | Payroll Portfolio | ODTI commercial owner and rural-bank relationship owner | P0 |
| `CUS-002` | Employer Payroll Questionnaire; Controlled-Placeholder Authorization Worksheet | Payroll Activity | ODTI commercial owner | P0 |
| `CUS-003` | Employer Payroll Questionnaire; Controlled-Placeholder Authorization Worksheet | Payroll Activity | ODTI commercial owner | P0 |
| `VOL-001` | Derived from `CUS-001`, `CUS-002`, `CUS-003`, and `VOL-002`; Controlled-Placeholder Authorization Worksheet only if aggregate method is explicitly selected | Derived-value record; not independently eligible under component-derived method | ODTI finance owner | P0 |
| `VOL-002` | NetBank Information Request; Employer Payroll Questionnaire; Pilot Measurement via Evidence Plan | Operational Information; Payroll Activity | ODTI operations owner | P0 |
| `LIC-004` | ODTI and 3neti Commercial Decision Worksheet; Controlled-Placeholder Authorization Worksheet | Offering Economics | ODTI commercial owner | P0 |
| `LIC-005` | ODTI and 3neti Commercial Decision Worksheet; Controlled-Placeholder Authorization Worksheet | Offering Economics | ODTI commercial owner | P0 |
| `PRC-001` | ODTI and 3neti Commercial Decision Worksheet; Employer Payroll Questionnaire; Controlled-Placeholder Authorization Worksheet | Offering Economics; Commercial Willingness | ODTI commercial owner | P0 |
| `RB-001` | ODTI and 3neti Commercial Decision Worksheet; Rural Bank and RBAP Questionnaire; Legal Handoff; Controlled-Placeholder Authorization Worksheet | Offering Economics; Commercial Appetite; Accounting | ODTI commercial owner and rural-bank commercial owner | P0 |
| `ODTI-001` | ODTI and 3neti Commercial Decision Worksheet; Controlled-Placeholder Authorization Worksheet | ODTI Cost Structure | ODTI operations owner | P0 |
| `ODTI-002` | ODTI and 3neti Commercial Decision Worksheet; Controlled-Placeholder Authorization Worksheet | ODTI Cost Structure | ODTI implementation owner | P0 |
| `OPS-001` | DevOps and Cloud Estimate Request; Controlled-Placeholder Authorization Worksheet | Setup Estimate | DevOps provider owner | P0 |
| `OPS-002` | DevOps and Cloud Estimate Request; Controlled-Placeholder Authorization Worksheet | Recurring Operations | DevOps provider owner | P0 |
| `OPS-003` | DevOps and Cloud Estimate Request; Controlled-Placeholder Authorization Worksheet | Recurring Operations | DevOps provider owner | P0 |
| `CLD-001` | DevOps and Cloud Estimate Request; Controlled-Placeholder Authorization Worksheet | Cloud Cost | Rural Bank infrastructure owner and DevOps Provider | P0 |
| `RISK-002` | ODTI and 3neti Commercial Decision Worksheet; Legal Handoff; Controlled-Placeholder Authorization Worksheet | Offering Economics; Accounting | ODTI finance owner | P0 |
| `COL-001` | Employer Payroll Questionnaire; Legal Handoff; Controlled-Placeholder Authorization Worksheet | Commercial Willingness; Accounting | Rural Bank commercial owner and ODTI finance owner | P1 |
| `NET-001` | NetBank Information Request; Legal Handoff | Commercial Information; Legal and Regulatory Information | NetBank relationship owner | P1 |
| `ROY-001` | ODTI and 3neti Commercial Decision Worksheet; Legal Handoff | 3neti Economics; Legal Characterization | 3neti and ODTI commercial owners | P1 |
| `TAX-001` | Legal Handoff | Tax | Finance and x-legal reviewers | P1 |
| `ATT-001` | Employer Payroll Questionnaire; SMS Provider Information Request | Commercial Willingness; Pricing | ODTI commercial owner | P1 |
| `VAS-001` | SMS Provider Information Request; ODTI and 3neti Commercial Decision Worksheet | Pricing; Offering Economics | ODTI commercial owner | P1 |
| `CST-001` | SMS Provider Information Request | Pricing | SMS provider owner and ODTI commercial owner | P1 |
| `SMS-001` | SMS Provider Information Request | Service Performance | SMS provider owner | P1 |
| `SMS-002` | SMS Provider Information Request | Internal Cost | SMS provider owner | P2 |
| `SMS-003` | SMS Provider Information Request | Failure and Refund Treatment | SMS provider owner and ODTI operations owner | P1 |
| `SMS-004` | SMS Provider Information Request; Legal Handoff | Privacy and Consent | ODTI privacy owner and x-legal reviewer | P1 |

No P0 assumption is intentionally left without an acquisition path.

## Use Rules

- Do not fill these instruments with invented responses.
- Do not ask a respondent to approve current working assumptions by agreeing with them.
- Ask for evidence, ranges, documents, and stated limitations.
- Preserve confidentiality restrictions.
- Route legal, accounting, tax, privacy, and security conclusions to the appropriate reviewer.
- Use the controlled-placeholder worksheet before any provisional value enters a Level 1 model.
