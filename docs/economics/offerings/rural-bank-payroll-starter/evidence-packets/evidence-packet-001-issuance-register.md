# Evidence Packet 001 Issuance Register

Status: Prepared; dispatch blocked pending named recipients and reviewers

Offering: `OFR-RB-PAYROLL-STARTER`

Packet: [Evidence Packet 001: Core Model Inputs](evidence-packet-001-core-model-inputs.md)

## Purpose

This register controls dispatch and response tracking for Evidence Packet 001. It does not treat a prepared instrument as sent and does not treat a response as accepted evidence.

## Dispatch Gate

A row may move to `Sent` only when all fields below are recorded:

- named responding organization;
- named respondent or controlled respondent identifier;
- respondent role;
- named evidence owner;
- named reviewer;
- dispatch date;
- response due date;
- confidentiality route;
- permitted submission channel;
- supporting-attachment request.

## Dispatch Register

| Request ID | Instrument | Assumptions | Required respondent | Required reviewer | Required attachments | Dispatch status |
| --- | --- | --- | --- | --- | --- | --- |
| `EP001-REQ-01` | [Rural Bank and RBAP Questionnaire](../evidence-instruments/rural-bank-and-rbap-questionnaire.md) | `ADP-002`, `ADP-003`, `CUS-001` | Pilot-bank operations or commercial respondent and RBAP liaison | ODTI commercial owner and implementation owner | Readiness list, anonymized payroll portfolio, activation schedule | Blocked - named recipients and reviewers not recorded |
| `EP001-REQ-02` | [Employer Payroll Questionnaire](../evidence-instruments/employer-payroll-questionnaire.md) | `CUS-002`, `CUS-003`, `VOL-002`, `EMP-001`, `EMP-002` | Employer payroll or finance respondent from each selected target segment | ODTI commercial owner and operations owner | Payroll schedule, anonymized recipient counts, exception data, pricing constraints | Blocked - sample and named recipients not recorded |
| `EP001-REQ-03` | [ODTI and 3neti Commercial Decision Worksheet](../evidence-instruments/odti-3neti-commercial-decision-worksheet.md) | `EMP-001`, `EMP-002`, `RB-001`, `ODTI-001`, `ODTI-002`, `RISK-002` | ODTI commercial, operations, implementation, and finance owners | Designated management and finance reviewers | Pricing rationale, implementation work breakdown, support model, collection policy | Blocked - named decision owners and reviewers not recorded |
| `EP001-REQ-04` | [DevOps and Cloud Estimate Request](../evidence-instruments/devops-and-cloud-estimate-request.md) | `OPS-003`, `CLD-001` | DevOps provider and cloud-cost owner | Rural Bank infrastructure owner and finance reviewer | Work breakdown, tooling schedule, cloud calculator export or quote | Blocked - named provider and reviewers not recorded |
| `EP001-REQ-05` | [NetBank Information Request](../evidence-instruments/netbank-information-request.md) | `VOL-002`; `NET-001` and `NET-002` for Packet 002 | NetBank or banking-partner operations and commercial owner | ODTI operations owner and NetBank relationship owner | Status definitions, reconciliation sample, role description, fee schedule where available | Blocked - participating institution and reviewers not recorded |
| `EP001-REQ-06` | [Legal, Accounting, Tax, Privacy, And Security Handoff](../evidence-instruments/legal-accounting-tax-privacy-handoff.md) | `RB-001`, `RISK-002`; later `NET-001`, `TAX-001`, `ROY-001` | Assigned legal, accounting, and tax reviewers | Finance owner and x-legal owner | Factual responses, proposed decisions, draft terms, line-item mapping | Blocked - professional reviewers not recorded |

## Dispatch Record Template

```text
Request ID:
Responding organization:
Respondent name or controlled identifier:
Respondent role:
Evidence owner:
Reviewer:
Dispatch date:
Response due date:
Submission channel:
Confidentiality route:
Permitted sharing:
Requested attachments:
Dispatch status:
Response status:
Follow-up date:
Notes:
```

## Current Finding

No request is recorded as sent. No completed response, supporting attachment, respondent provenance block, or acceptance review is present in the repository.
