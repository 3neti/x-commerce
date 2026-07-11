# Legal, Accounting, Tax, Privacy, And Security Handoff

## Purpose

Route specific questions for `OFR-RB-PAYROLL-STARTER` rather than asking broad questions such as "Is this legal?"

Use the shared provenance block in [README.md](README.md).

This handoff does not make legal, accounting, tax, privacy, or security conclusions.

## Commercial Structure

Baseline structure to review:

- employer pays rural bank;
- rural bank collects customer-facing fees;
- rural bank retains approved economics;
- rural bank records downstream obligations to ODTI and providers;
- payroll funding remains pass-through;
- SMS is optional;
- rural-bank-owned infrastructure is operated by the DevOps Provider under delegated authority.

Related assumptions: `COL-001`, `RB-001`, `NET-001`, `TAX-001`, `SMS-004`.

## Legal Characterization

Questions:

- How should customer-facing payroll fees be characterized?
- How should platform fees be characterized?
- How should 3neti royalties or license consideration be characterized?
- How should provider charges be characterized?
- Does any Commercial Right require contractual definition?
- Does any Commercial Waterfall create legal, agency, custody, or payment implications?
- How should customer funds, payroll funding, settlement balances, and pass-through amounts be separated?
- Are account, wallet, stored-value, custody, or agency implications created?

Related assumptions: `ROY-001`, `RB-001`, `NET-001`, `COL-001`, `PAR-001`, `INV-002`.

## Tax

Questions:

- What VAT or other indirect taxes apply?
- What withholding applies?
- How are royalty taxes handled?
- How are commissions, allocations, or provider payments handled if later added?
- How are related-party payments reviewed?
- How are foreign-provider or cloud costs treated?
- When does tax become due relative to billing, collection, or payment?

Related assumptions: `TAX-001`, `ROY-001`, `RB-001`, `NET-001`, `CST-001`, `CLD-001`.

## Accounting

Questions:

- When is revenue recognized?
- Which amounts are gross versus net?
- Who is principal and who is agent for each fee?
- Which amounts are deferred revenue?
- When are royalties accrued?
- When are partner allocations accrued if later included?
- How should collection timing be represented?
- How should bad debt be represented?
- How should pass-through payroll funding be presented?

Related assumptions: `TAX-001`, `COL-001`, `RISK-002`, `ROY-001`, `RB-001`, `NET-001`.

## Privacy And Messaging

Questions:

- What employer data is processed?
- What employee or recipient data is processed?
- What SMS consent is required?
- What message retention is allowed?
- What recipient disclosures are required?
- What data processing terms are required?
- What data-sharing agreements are required?
- What breach and incident obligations apply?

Related assumptions: `SMS-004`, `SMS-001`, `SMS-003`, `PUB-002`.

## Security And Operations

Questions:

- How should bank-owned credentials be governed?
- What delegated authority is required for DevOps access?
- What audit logs are required?
- What backup and restore controls are required?
- What incident-response obligations apply?
- What provider-replacement and access-removal controls are required?

Related assumptions: `OPS-005`, `CLD-001`, `NET-001`, `SMS-004`.

## Offering Line-Item Mapping

- Customer fee lines: `CUST-COST-001`, `CUST-COST-002`.
- Rural Bank fee and obligation lines: `RB-REV-*`, `RB-COST-*`.
- ODTI revenue and cost lines: `ODTI-REV-*`, `ODTI-COST-*`, `ODTI-TAX-001`.
- 3neti royalty line: `3NETI-REV-001`.
- NetBank lines: `NETBANK-*`.
- DevOps lines: `DEVOPS-*`.
- Value-Added Provider lines: `VASP-*`.

## Evidence Attachments

- Draft commercial structure:
- Draft contract terms:
- Privacy materials:
- Data-flow description:
- Tax question set:
- Accounting question set:
- Security controls:

## Reviewer Notes

- Evidence quality:
- Known limitations:
- Follow-up required:
