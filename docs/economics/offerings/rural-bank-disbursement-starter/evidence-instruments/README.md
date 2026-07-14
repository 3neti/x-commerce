# Evidence Instruments: Rural Bank Digital Disbursement Starter

## Status

Current status: blank evidence-acquisition instrument index for `OFR-RB-DISBURSEMENT-STARTER`.

These instruments collect evidence. They do not approve values, pricing, projections, contracts, legal characterization, tax treatment, accounting treatment, or software implementation.

## Shared Evidence Provenance Standard

Every completed evidence response should include:

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

## Range Semantics

Use one controlled `Range interpretation` value:

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

## Instrument Index

| Instrument | Primary assumptions | Primary respondent | Purpose |
| --- | --- | --- | --- |
| [rural-bank-and-rbap-disbursement-questionnaire.md](rural-bank-and-rbap-disbursement-questionnaire.md) | `ADP-002`, `ADP-003`, `DSP-CUS-001`, `DSP-RB-001`, `DSP-RB-002` | Rural Bank or RBAP | Adoption, sponsor portfolio, readiness, and bank support evidence. |
| [sponsor-disbursement-questionnaire.md](sponsor-disbursement-questionnaire.md) | `DSP-CUS-001`, `DSP-CUS-002`, `DSP-CUS-003`, `DSP-PRICE-*`, `DSP-FUND-001`, `DSP-EXC-001` | Sponsor customer | Sponsor activity, recipient volume, value, pricing, and workflow evidence. |
| [netbank-disbursement-information-request.md](netbank-disbursement-information-request.md) | `NET-001`, `NET-002`, `DSP-VOL-002` | NetBank or banking partner | Role, fee, settlement, rail, API, event status, and completion evidence. |
| [devops-and-cloud-disbursement-estimate-request.md](devops-and-cloud-disbursement-estimate-request.md) | `OPS-001`, `OPS-002`, `OPS-003`, `CLD-001` | DevOps Provider and cloud-cost owner | Incremental or shared DevOps and cloud cost evidence. |
| [notification-provider-information-request.md](notification-provider-information-request.md) | `DSP-ATT-001`, `DSP-VAS-001`, `DSP-CST-001`, `SMS-001`, `SMS-003`, `SMS-004` | Value-Added Provider | Optional notification pricing, delivery, billing, failure, and privacy evidence. |
| [odti-3neti-disbursement-commercial-decision-worksheet.md](odti-3neti-disbursement-commercial-decision-worksheet.md) | `DSP-PRICE-*`, `DSP-RB-001`, `DSP-ODTI-*`, `ROY-001`, `RISK-002` | ODTI and 3neti management | Commercial units, splits, support cost, implementation cost, and royalty decisions. |
| [legal-accounting-tax-privacy-handoff.md](legal-accounting-tax-privacy-handoff.md) | `TAX-001`, `ROY-001`, `NET-001`, `DSP-RB-001`, `RISK-002`, `SMS-004` | Legal, accounting, tax, privacy, and security reviewers | Specific review questions for fund flow, pass-through treatment, revenue recognition, tax, privacy, and messaging. |
| [controlled-placeholder-authorization-worksheet.md](controlled-placeholder-authorization-worksheet.md) | All P0 assumptions without approved or evidence-supported Active inputs | Internal reviewer | Governed provisional-input records for the first Level 1 model. |

## Traceability Matrix

| Assumption ID | Instrument | Question section | Evidence owner | Priority |
| --- | --- | --- | --- | --- |
| `ADP-002` | Rural Bank and RBAP Questionnaire | Adoption Readiness | ODTI commercial owner and RBAP liaison | P0 |
| `ADP-003` | Rural Bank and RBAP Questionnaire | Adoption Timing | ODTI implementation owner | P0 |
| `DSP-CUS-001` | Rural Bank and RBAP Questionnaire; Sponsor Questionnaire | Sponsor Portfolio | ODTI commercial owner | P0 |
| `DSP-CUS-002` | Sponsor Questionnaire | Disbursement Activity | ODTI commercial owner | P0 |
| `DSP-CUS-003` | Sponsor Questionnaire | Recipient Population | ODTI commercial owner | P0 |
| `DSP-VOL-002` | Sponsor Questionnaire; NetBank Information Request | Completion And Exception Evidence | ODTI operations owner | P0 |
| `DSP-PRICE-001` | Sponsor Questionnaire; ODTI/3neti Worksheet | Commercial Willingness; Offering Economics | ODTI commercial owner | P0 |
| `DSP-PRICE-002` | Sponsor Questionnaire; ODTI/3neti Worksheet | Commercial Willingness; Offering Economics | ODTI commercial owner | P0 |
| `DSP-PRICE-003` | Sponsor Questionnaire; ODTI/3neti Worksheet | Commercial Willingness; Offering Economics | ODTI commercial owner | P0 |
| `DSP-RB-001` | Rural Bank Questionnaire; ODTI/3neti Worksheet; Legal Handoff | Retained Economics | Rural Bank and ODTI commercial owners | P0 |
| `DSP-ODTI-001` | ODTI/3neti Worksheet | ODTI Cost Structure | ODTI operations owner | P0 |
| `DSP-ODTI-002` | ODTI/3neti Worksheet | ODTI Cost Structure | ODTI implementation owner | P0 |
| `OPS-003` | DevOps and Cloud Request | Recurring Operations | DevOps provider owner | P0 |
| `CLD-001` | DevOps and Cloud Request | Cloud Cost | Rural Bank infrastructure owner | P0 |
| `RISK-002` | ODTI/3neti Worksheet; Legal Handoff | Collections Policy; Accounting | ODTI finance owner | P0 |

No P0 assumption is intentionally left without an acquisition path.

