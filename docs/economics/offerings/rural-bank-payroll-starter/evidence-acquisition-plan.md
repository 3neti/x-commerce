# Evidence Acquisition Plan: Rural Bank Payroll Starter

## Status

Current status: evidence-acquisition and controlled-placeholder plan for `OFR-RB-PAYROLL-STARTER`.

This document contains no numeric values, forecasts, provider prices, approved placeholders, legal conclusions, tax conclusions, accounting conclusions, or software implementation.

## Purpose

This plan answers:

```text
Where will each blocked assumption come from, who is responsible for obtaining it, what evidence is sufficient, and what happens if the evidence is not yet available?
```

The plan moves the payroll offering from a structural model toward an evidence-supported model. It does not make the model numeric.

## Source Documents

This plan depends on:

- [commercial-model.md](commercial-model.md);
- [assumption-map.md](assumption-map.md);
- [reconciliation-schedule.md](reconciliation-schedule.md);
- [consolidated-view.md](consolidated-view.md);
- [../../../ASSUMPTIONS_REGISTER.md](../../../ASSUMPTIONS_REGISTER.md);
- [../../five-year-projections.md](../../five-year-projections.md);
- [../../commercial-model.md](../../commercial-model.md).

## Evidence Source Categories

Use only these evidence source categories unless the Assumptions Register later introduces another controlled category:

- `Rural Bank or RBAP`;
- `Employer Interview or Employer Data`;
- `NetBank or Banking Partner`;
- `Value-Added Provider`;
- `DevOps Provider`;
- `ODTI Management`;
- `3neti Management`;
- `Observed Pilot Data`;
- `Market Reference`;
- `Legal Review`;
- `Accounting Review`;
- `Tax Review`;
- `Privacy or Security Review`;
- `Controlled Scenario Placeholder`;
- `Not Required for Initial Model`.

An assumption may require more than one source category.

## Evidence Priority

| Priority | Meaning |
| --- | --- |
| `P0` | Blocks the first provisional numeric model unless an Active or Approved value, or an explicitly approved controlled placeholder, exists. |
| `P1` | Required for a credible base scenario or final net economics, but may be visibly blocked or excluded from a narrow Level 1 structural test. |
| `P2` | Required for stakeholder-specific refinement. |
| `P3` | Required for later validation, expansion, or non-core variants. |

## Placeholder Eligibility

Use only these placeholder eligibility values:

- `Eligible for controlled placeholder`;
- `Eligible only for sensitivity testing`;
- `Not eligible before external evidence`;
- `Not required for first provisional model`.

Controlled placeholders may test model structure. They are not approved prices, commitments, forecasts, contracts, or factual operating results.

## Assumption Records

Each row below applies this record structure:

```text
Assumption ID:
Assumption name:
Offering:
Current status:
Evidence source category:
Primary evidence source:
Secondary validation source:
Responsible owner:
Evidence required:
Minimum acceptable evidence:
Preferred evidence:
Acquisition method:
Target review trigger:
Affected stakeholder views:
Affected line items:
Outputs blocked:
Legal/accounting/tax dependency:
Placeholder eligibility:
Placeholder owner:
Placeholder approval required from:
Placeholder expiry or review trigger:
Risk if wrong:
Notes:
```

The table compresses repeated fields, but every assumption is governed by the full record structure above.

## Readiness Dashboard

| Assumption ID | Name | Current status | Evidence source category | Responsible owner | Evidence required | Minimum acceptable evidence | Preferred evidence | Affected views and line items | Outputs blocked | Dependency | Placeholder eligibility | Approval required | Review trigger | Risk if wrong | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `ADP-001` | Banks onboarded by year | Active | Rural Bank or RBAP; ODTI Management | ODTI commercial owner and RBAP liaison | Onboarding scenario and pipeline basis | Management-approved onboarding scenario | RBAP member survey, bank pipeline, and onboarding-capacity assessment | Rural Bank, ODTI, DevOps, Investor, Public Interest; `RB-COST-*`, `ODTI-REV-*`, `DEVOPS-REV-*` | Activation revenue, setup cost, adoption indicators | Operational capacity | Eligible for controlled placeholder | ODTI commercial lead | Before Level 1 model | Overstates setup activity and early revenue | P0 |
| `ADP-002` | Active banks by year | Blocked | Rural Bank or RBAP; Observed Pilot Data | ODTI commercial owner and RBAP liaison | Active-bank scenario tied to onboarding, activation, and churn | Approved active-bank working scenario | Pilot activation data plus bank-by-bank readiness status | All financial views; subscription, recurring operations, activity drivers | Recurring revenue, recurring costs, transaction activity | Activation timing and churn | Eligible for controlled placeholder | ODTI commercial lead and finance reviewer | Before Level 1 model | Overstates recurring activity and sustainability | P0 |
| `ADP-003` | Active months per bank by year | Blocked | Rural Bank or RBAP; ODTI Management | ODTI implementation owner | Active bank-month logic after onboarding | Approved activation-timing rule | Implementation plan and pilot go-live data | Rural Bank, ODTI, DevOps, Investor, Public Interest; recurring and activity lines | Annualized activity, recurring cost, subscription recognition | Onboarding schedule and go-live timing | Eligible for controlled placeholder | ODTI implementation and finance owners | Before Level 1 model | Assumes full-year activity from partial-year banks | P0 |
| `CUS-001` | Payroll customers per active rural bank | Blocked | Rural Bank or RBAP; Employer Interview or Employer Data | ODTI commercial owner and rural-bank relationship owner | Payroll employer base per active bank | Bank interview or management estimate | Rural-bank payroll portfolio and employer pipeline | Customer, Rural Bank, ODTI, NetBank, DevOps, VASP, Investor, Public Interest; `VOL-001` drivers | Activity volume, support load, provider usage | Bank portfolio data | Eligible for controlled placeholder | ODTI commercial lead | Before Level 1 model | Overstates employer demand | P0 |
| `CUS-002` | Payroll runs per customer per month | Blocked | Employer Interview or Employer Data | ODTI commercial owner | Payroll frequency by employer | Employer interview or documented payroll schedule | Employer payroll records or pilot logs | Customer, Rural Bank, ODTI, NetBank, VASP; `VOL-001` drivers | Transaction volume and activity frequency | Employer payroll policy | Eligible for controlled placeholder | ODTI commercial lead | Before Level 1 model | Misstates recurring activity | P0 |
| `CUS-003` | Average recipients per payroll run | Blocked | Employer Interview or Employer Data; Rural Bank or RBAP | ODTI commercial owner | Recipient count per payroll run | Employer interview or payroll-size estimate | Employer payroll records or pilot data | Customer, Rural Bank, ODTI, NetBank, VASP, Public Interest; `VOL-001` drivers | Recipient-level volume and reach | Employer payroll records and privacy review | Eligible for controlled placeholder | ODTI commercial lead | Before Level 1 model | Misstates billable events and public reach | P0 |
| `VOL-001` | Average successful payroll transactions per active bank per month | Blocked | Controlled Scenario Placeholder; Observed Pilot Data | ODTI finance owner | Derived canonical volume from `CUS-001`, `CUS-002`, `CUS-003`, and `VOL-002` | Component assumptions or explicitly approved aggregate placeholder | Pilot-calibrated derived volume | All transaction and SMS views; `CUST-COST-001`, `RB-REV-001`, `RB-COST-003`, `ODTI-REV-003`, `VASP-VOL-001` | Transaction revenue, provider usage, public completion | Component assumptions and x-change evidence | Eligible for controlled placeholder | ODTI finance owner | Before Level 1 model | Breaks every volume-driven output | P0 |
| `VOL-002` | Payroll completion rate | Blocked | Observed Pilot Data; NetBank or Banking Partner; x-change execution evidence when available | ODTI operations owner | Definition and rate of successful qualifying recipient disbursements | Approved completion definition and management scenario | Pilot completion logs and reconciliation evidence | Customer, Rural Bank, ODTI, NetBank, Public Interest; `VOL-001` and completion indicators | Successful billable events and exception burden | Attempted/successful/failed/reversed event definitions | Eligible for controlled placeholder | ODTI operations and finance owners | Before Level 1 model | Confuses attempted activity with successful billable events | P0 |
| `LIC-004` | Hybrid activation fee | Active | ODTI Management; Market Reference | ODTI commercial owner | Activation price decision | Management-approved working price | Approved commercial pricing decision | Rural Bank, ODTI, Investor; `RB-COST-001`, `ODTI-REV-001` | Activation economics | Pricing approval and tax review | Eligible only for sensitivity testing | ODTI commercial lead | Before external use | May be mistaken for approved pricing | P0 |
| `LIC-005` | Hybrid annual platform subscription | Active | ODTI Management; Market Reference | ODTI commercial owner | Annual platform price decision | Management-approved working price | Approved commercial pricing decision | Rural Bank, ODTI, Investor; `RB-COST-002`, `ODTI-REV-002` | Subscription economics | Pricing approval and tax review | Eligible only for sensitivity testing | ODTI commercial lead | Before external use | May misstate bank affordability | P0 |
| `PRC-001` | Base per-successful-recipient-disbursement fee | Active | ODTI Management; Employer Interview or Employer Data; Market Reference | ODTI commercial owner | Customer-facing transaction fee decision | Management-approved working fee | Approved commercial pricing decision validated by customer interviews | Customer, Rural Bank, ODTI, 3neti, Investor; `CUST-COST-001`, `RB-REV-001`, `RB-COST-003`, `ODTI-REV-003` | Transaction economics | Pricing approval, collection, tax | Eligible only for sensitivity testing | ODTI commercial lead | Before external use | May overstate willingness to pay | P0 |
| `RB-001` | Rural-bank retained transaction economics | Blocked | ODTI Management; Rural Bank or RBAP; Legal Review; Accounting Review; Tax Review | ODTI commercial owner and rural-bank commercial owner | Approved rural-bank retained basis | Documented allocation basis | Approved commercial terms and review | Rural Bank, ODTI, Consolidated View; `RB-REV-003`, `RB-COST-003`, `ODTI-REV-003` | Bank contribution and ODTI transaction revenue | Pricing, disclosure, accounting, tax | Eligible only for sensitivity testing | ODTI commercial lead and finance reviewer | Before Level 1 model | Double-counts or misallocates customer fee | P0 |
| `ODTI-001` | ODTI support cost per active bank | Blocked | ODTI Management; Observed Pilot Data | ODTI operations owner | Support design and recurring cost basis | Management support-cost estimate | Pilot effort log and staffing plan | ODTI, Investor; `ODTI-COST-002`, `ODTI-CONTRIB-001` | ODTI net contribution and staffing capacity | Employment/contractor, accounting, tax | Eligible for controlled placeholder | ODTI operations and finance owners | Before Level 1 model | Understates operating burden | P0 |
| `ODTI-002` | ODTI implementation effort or cost per bank | Blocked | ODTI Management; Observed Pilot Data | ODTI implementation owner | Implementation work breakdown | Management implementation estimate | Pilot implementation timesheet and launch checklist | ODTI, Rural Bank, Investor; `ODTI-COST-003`, `ODTI-CONTRIB-001` | Activation margin and staffing | Implementation scope and accounting | Eligible for controlled placeholder | ODTI implementation and finance owners | Before Level 1 model | Activation revenue may hide implementation loss | P0 |
| `OPS-001` | DevOps setup fee | Active | DevOps Provider; ODTI Management | DevOps provider owner | Setup-fee basis | Provider proposal or management working price | Signed or approved DevOps proposal | Rural Bank, DevOps Provider; `RB-COST-004`, `DEVOPS-REV-001` | DevOps setup economics | Contract and tax review | Eligible only for sensitivity testing | DevOps provider and ODTI reviewer | Before external use | May underprice deployment | P0 |
| `OPS-002` | DevOps monthly managed operations fee | Active | DevOps Provider; ODTI Management | DevOps provider owner | Recurring managed-operations fee basis | Provider proposal or management working price | Signed or approved DevOps proposal | Rural Bank, DevOps Provider; `RB-COST-005`, `DEVOPS-REV-002` | Recurring DevOps economics | Contract and tax review | Eligible only for sensitivity testing | DevOps provider and ODTI reviewer | Before external use | May underprice operations | P0 |
| `OPS-003` | DevOps direct engineering and tooling cost per bank | Blocked | DevOps Provider; Observed Pilot Data | DevOps provider owner | Direct engineering, tooling, monitoring, backup, and support-cost basis | DevOps estimate | Work breakdown, tool quotes, on-call model, and pilot time data | DevOps Provider, Rural Bank, Investor; `DEVOPS-COST-001`, `DEVOPS-CONTRIB-001` | DevOps gross margin and capacity | Staffing, contractor, tax, accounting | Eligible for controlled placeholder | DevOps provider and finance reviewer | Before Level 1 model | Masks unsustainable operations | P0 |
| `CLD-001` | Public-cloud infrastructure cost per bank | Blocked | DevOps Provider; Market Reference | Rural Bank infrastructure owner and DevOps Provider | Cloud architecture and cost estimate | Cloud-provider calculator or DevOps estimate | Cloud quote tied to target architecture | Rural Bank, DevOps, Consolidated View; `RB-COST-009` | External infrastructure outflow | Cloud account ownership and billing | Eligible for controlled placeholder | Rural Bank infrastructure owner and DevOps Provider | Before Level 1 model | Confuses cloud cost with DevOps revenue | P0 |
| `RISK-002` | Bad debt or non-collection | Blocked | ODTI Management; Accounting Review | ODTI finance owner | Collection and bad-debt policy | Management collection policy | Accounting-reviewed collection treatment | Rural Bank, ODTI, 3neti, DevOps, VASP, Investor; cash and contribution lines | Cash flow, payable timing, final contribution | Accounting and tax | Eligible for controlled placeholder | ODTI finance owner | Before Level 1 model | Treats invoiced amounts as collected cash | P0 |
| `COL-001` | Employer fee collection timing | Blocked | Employer Interview or Employer Data; Rural Bank or RBAP; Accounting Review | Rural Bank commercial owner and ODTI finance owner | Billing, collection, and remittance timing | Draft collection policy | Bank-approved billing terms and employer payment evidence | Customer, Rural Bank, ODTI, 3neti, DevOps, VASP; all cash-timing fields | Working capital, payment timing, bad debt | Contract terms, accounting, tax | Eligible for controlled placeholder | Rural Bank and ODTI finance owners | Before cash-flow model | Confuses earning with collection | P1 |
| `RISK-001` | Churn | Blocked | Rural Bank or RBAP; ODTI Management; Observed Pilot Data | ODTI commercial owner | Definition and rate of churn | Management churn scenario | Pilot renewal and inactivity evidence | Rural Bank, ODTI, DevOps, VASP, Investor | Recurring revenue and active-bank continuity | Contract and cancellation terms | Eligible for controlled placeholder | ODTI commercial lead | Before base scenario | Overstates recurring relationships | P1 |
| `ROY-001` | 3neti royalty or license basis | Blocked | 3neti Management; ODTI Management; Legal Review; Accounting Review; Tax Review | 3neti and ODTI commercial owners | Royalty or license basis | Draft decision paper | Approved 3neti-ODTI license agreement and related-party review | ODTI, 3neti, Investor; `ODTI-COST-001`, `3NETI-REV-001` | ODTI after-royalty contribution, 3neti income, consolidated eliminations | Legal, tax, accounting, related-party review | Not eligible before external evidence | 3neti and ODTI principals | Before final net economics | Mischaracterizes ownership economics | P1 |
| `TAX-001` | Tax, withholding, and accounting treatment | Blocked | Tax Review; Accounting Review; Legal Review | Finance and x-legal reviewers | Tax and accounting treatment | Professional question set and provisional issue list | Professional review or approved treatment | All financial views; tax lines and final payable lines | Tax-adjusted totals and final payables | Tax, accounting, legal | Not eligible before external evidence | Finance reviewer and x-legal reviewer | Before final net economics | Produces misleading final net results | P1 |
| `NET-001` | NetBank or infrastructure fee basis | Blocked | NetBank or Banking Partner; Legal Review | NetBank relationship owner and ODTI commercial owner | Approved infrastructure fee basis | NetBank proposal or information response | Approved fee schedule or contract | Rural Bank, NetBank, ODTI, Consolidated View; `RB-COST-007`, `NETBANK-REV-001` | NetBank revenue, bank rail cost, final contribution | NetBank role, settlement structure, legal characterization | Not eligible before external evidence | NetBank relationship owner | Before final infrastructure-inclusive model | Invents banking revenue or cost | P1 |
| `NET-002` | NetBank or infrastructure operating cost basis | Blocked | NetBank or Banking Partner | NetBank relationship owner | Infrastructure operating burden | NetBank estimate | NetBank operating-cost basis, if disclosed | NetBank, Rural Bank, ODTI, Investor; `NETBANK-COST-001` | NetBank contribution | NetBank internal-cost disclosure | Not required for first provisional model | NetBank relationship owner | Before NetBank margin view | May be unavailable or outside boundary | P2 |
| `ATT-001` | SMS attachment rate | Blocked | Employer Interview or Employer Data; ODTI Management; Observed Pilot Data | ODTI commercial owner | Employer willingness to attach SMS | Management attachment scenario | Employer interviews and pilot attachment data | Customer, Rural Bank, VASP, ODTI, Investor; SMS lines | SMS fees, provider usage, SMS public indicators | Consent and service design | Eligible for controlled placeholder | ODTI commercial lead | Before SMS variant model | Overstates optional capability value | P1 |
| `VAS-001` | Customer-facing SMS price | Active | ODTI Management; Value-Added Provider; Market Reference | ODTI commercial owner | Customer-facing SMS price decision | Management working price | Approved price validated by provider pricing and customer interviews | Customer, Rural Bank, VASP; `CUST-COST-002`, `RB-REV-002` | SMS customer charge and markup | Disclosure, tax, privacy | Eligible only for sensitivity testing | ODTI commercial lead | Before SMS external use | May be mistaken for approved pricing | P1 |
| `CST-001` | SMS wholesale provider price | Blocked | Value-Added Provider | SMS provider owner and ODTI commercial owner | Provider wholesale pricing | Provider quote or wholesale price schedule | Signed provider agreement or approved commercial proposal | Rural Bank, VASP, Investor; `RB-COST-006`, `VASP-REV-001`, `VASP-CONTRIB-001` | Rural Bank or ODTI SMS margin, VASP revenue | Provider contract, billing unit, tax | Not eligible before external evidence | ODTI commercial owner | Before SMS variant model | Confuses provider revenue with provider internal cost | P1 |
| `SMS-001` | SMS delivery success rate | Blocked | Value-Added Provider; Observed Pilot Data | SMS provider owner | Delivery performance evidence | Provider SLA and service-data definition | Pilot delivery logs and carrier report definitions | Customer, Rural Bank, VASP, Public Interest; `VASP-VOL-001`, `VASP-RISK-001`, `PUBLIC-PI-002` | SMS outcome quality and failed-message treatment | Delivery definition, SLA, privacy | Not eligible before external evidence | SMS provider owner and ODTI operations owner | Before SMS variant model | Price evidence is mistaken for performance evidence | P1 |
| `SMS-002` | SMS provider internal delivery cost | Blocked | Value-Added Provider | SMS provider owner | Provider internal delivery cost | Provider internal estimate, if disclosed | Carrier/aggregator pricing or provider operating data | VASP, Rural Bank, Investor; `VASP-COST-001`, `VASP-CONTRIB-001` | SMS Provider margin | Provider disclosure and accounting | Not required for first provisional model | SMS provider owner | Before provider-margin view | May be unavailable from external provider | P2 |
| `SMS-003` | SMS failed-message treatment | Blocked | Value-Added Provider; Legal Review; Accounting Review | SMS provider owner and ODTI operations owner | Failed-message billing, retry, refund, and support rules | Provider contract or SLA summary | Signed provider agreement and operational policy | Customer, Rural Bank, VASP, Public Interest; `VASP-RISK-001`, `VASP-CONTRIB-001` | SMS adjustments and support burden | Contract, SLA, privacy, accounting | Not eligible before external evidence | SMS provider owner | Before SMS variant model | Incorrectly bills failed or duplicate messages | P1 |
| `SMS-004` | SMS privacy and consent readiness | Blocked | Privacy or Security Review; Legal Review; Value-Added Provider | ODTI privacy owner and x-legal reviewer | Consent, disclosure, data handling, and provider controls | Privacy review issue list | Approved privacy and consent treatment | Customer, Rural Bank, VASP, Public Interest; `VASP-MEMO-001`, `PUBLIC-PI-002` | SMS eligibility and public-interest transparency | Privacy, consent, disclosure, data handling | Not eligible before external evidence | ODTI privacy owner and x-legal reviewer | Before SMS external use | Creates privacy and trust risk | P1 |
| `CUS-004` | Employer administrative labor cost per payroll cycle | Blocked | Employer Interview or Employer Data; Observed Pilot Data | ODTI customer-research owner | Current administrative labor and cost | Employer interview | Before-and-after workflow measurement | Customer, Public Interest, Investor; `CUST-OPVAL-*` | Customer operational value and cost of doing nothing | Employer data handling and privacy | Eligible for controlled placeholder | ODTI customer-research owner | Before operational-value model | Overstates customer savings | P2 |
| `CUS-005` | Employer time saved per payroll cycle | Blocked | Employer Interview or Employer Data; Observed Pilot Data | ODTI customer-research owner | Time saved after adopting offering | Employer interview | Pilot before-and-after process measurement | Customer, Public Interest; `CUST-OPVAL-*`, `PUBLIC-PI-*` | Operational value and adoption case | Measurement design | Eligible for controlled placeholder | ODTI customer-research owner | Before operational-value model | Turns anecdote into unsupported value | P2 |
| `CUS-006` | Failed-payment handling cost | Blocked | Employer Interview or Employer Data; Rural Bank or RBAP; Observed Pilot Data | ODTI customer-research owner | Cost and effort of exception handling | Employer or bank interview | Pilot exception tickets and labor records | Customer, Rural Bank, Public Interest; exception and support lines | Exception-cost value | Measurement and support taxonomy | Eligible for controlled placeholder | ODTI customer-research owner | Before exception-value model | Understates value of completion and evidence | P2 |
| `PUB-001` | Public-interest completion indicator | Blocked | Public-interest and Pilot Evidence; Observed Pilot Data | Public-interest reviewer and ODTI operations owner | Completion measurement definition | Draft indicator definition | Pilot completion report and reconciliation evidence | Customer, Rural Bank, RBAP, Public Interest, Investor; `PUBLIC-PI-*` | Public-interest outputs | Measurement design and x-legal review if disclosed | Eligible for controlled placeholder | Public-interest reviewer | Before public-interest reporting | Misstates public benefit | P2 |
| `PUB-002` | Recipient satisfaction indicator | Blocked | Observed Pilot Data; Employer Interview or Employer Data | Public-interest reviewer | Recipient experience measurement | Survey design or interview protocol | Pilot recipient survey | Customer, Rural Bank, Investor, Public Interest; `PUBLIC-PI-*` | Recipient Value indicators | Privacy and consent | Not required for first provisional model | Public-interest reviewer | Before recipient-value claims | Monetizes or overclaims recipient benefit | P3 |
| `PUB-003` | Employer administrative-burden reduction | Blocked | Employer Interview or Employer Data; Observed Pilot Data | Public-interest reviewer and ODTI customer-research owner | Measured work reduction | Employer interview | Before-and-after workflow study | Customer, Public Interest, Investor; `CUST-OPVAL-*`, `PUBLIC-PI-*` | Customer Value and Public Value indicators | Measurement design | Eligible for controlled placeholder | ODTI customer-research owner | Before operational-value claims | Weakens "Payments take seconds. Work takes days" evidence | P2 |
| `PUB-004` | Payroll outcome completion indicator | Blocked | Observed Pilot Data; NetBank or Banking Partner | Public-interest reviewer and ODTI operations owner | Public completion output definition | Draft indicator definition | Pilot completion report and reconciliation evidence | Customer, Public Interest, Investor; `PUBLIC-PI-*` | Public-interest completion output | x-change evidence and reconciliation | Eligible for controlled placeholder | Public-interest reviewer | Before public-interest reporting | Duplicates `VOL-002` or misstates completion | P2 |
| `OPS-004` | DevOps external tooling cost | Blocked | DevOps Provider; Market Reference | DevOps provider owner | External tooling price and scope | Tool quote or DevOps estimate | Approved tool stack and vendor pricing | DevOps Provider, Rural Bank, Investor; `DEVOPS-COST-002` | External outflow and DevOps margin | Vendor contract and tax | Eligible for controlled placeholder | DevOps provider owner | Before DevOps margin model | Hides external operating cost | P2 |
| `OPS-005` | DevOps operational readiness indicator | Blocked | DevOps Provider; Observed Pilot Data | DevOps provider owner | Uptime, recovery, backup, handover, monitoring readiness | Readiness checklist | Pilot operating evidence | DevOps Provider, Rural Bank, Public Interest, Investor; `DEVOPS-CAP-*` | Operational confidence and Public Value | Security and operational governance | Not required for first provisional model | DevOps provider owner | Before operational-readiness claims | Treats capability as available without evidence | P3 |
| `3NETI-001` | 3neti R&D cost basis | Blocked | 3neti Management; Accounting Review | 3neti owner | R&D cost basis | Management estimate | Accounting-reviewed cost basis | 3neti, ODTI, Investor; `3NETI-COST-001` | 3neti contribution | Accounting and related-party treatment | Eligible for controlled placeholder | 3neti owner | Before 3neti contribution view | Hides stewardship economics | P2 |
| `3NETI-002` | 3neti package stewardship and documentation cost basis | Blocked | 3neti Management; Accounting Review | 3neti owner | Stewardship and documentation cost basis | Management estimate | Timesheet or budget evidence | 3neti, ODTI, Investor; `3NETI-COST-002` | 3neti contribution | Accounting and related-party treatment | Eligible for controlled placeholder | 3neti owner | Before 3neti contribution view | Understates documentation burden | P2 |
| `3NETI-003` | 3neti external IP and legal-service cost basis | Blocked | 3neti Management; Legal Review | 3neti owner | External IP and legal service cost basis | Professional-service quote or estimate | Engagement letter or invoice | 3neti, ODTI, Investor; `3NETI-COST-003` | External legal/IP outflow | Legal and accounting | Eligible for controlled placeholder | 3neti owner | Before 3neti final contribution | Hides external governance cost | P2 |
| `INV-001` | Payroll offering capital requirement | Blocked | ODTI Management; 3neti Management; Investor | ODTI finance owner | Capital need categories | Management estimate | Board-approved capital plan | Investor, ODTI, 3neti; `INV-FIN-001` | Financing view | Securities, legal, accounting | Not required for first provisional model | ODTI finance owner | Before investor discussion | Treats financing as revenue | P3 |
| `INV-002` | Investor return mechanism | Blocked | Investor; Legal Review; Accounting Review; Tax Review | Investor-relations owner | Instrument and return mechanism | Draft financing term concept | Approved financing instrument | Investor; ownership and financing lines | Investor view | Securities, legal, tax, accounting | Not eligible before external evidence | Investor-relations owner | Before investor-return modeling | Confuses ownership economics with waterfall allocation | P3 |
| `INV-003` | Confidence and governance indicator | Blocked | Investor; Public-interest reviewer; ODTI Management | Investor-relations owner | Governance and confidence measurement | Draft indicator definition | Investor diligence feedback and governance checklist | Investor, Public Interest; `INV-MEMO-*`, `PUBLIC-PI-*` | Confidence indicators | Governance review | Not required for first provisional model | Investor-relations owner | Before confidence claims | Overstates investability | P3 |
| `PAR-001` | Business-development partner allocation | Blocked | Not Required for Initial Model; Legal Review | ODTI commercial owner | Partner allocation basis if later included | Not required for baseline | Approved attribution and allocation decision | Business Development Partner, ODTI; no baseline stakeholder view | No baseline output | Commercial Attribution, tax, legal | Not required for first provisional model | ODTI commercial lead | Only if partner participation is added | Prematurely creates compensation expectation | P3 |
| `ATT-002` | KYC attachment rate | Blocked | Not Required for Initial Model | ODTI commercial owner | Not required because KYC is excluded from baseline | Not applicable | Future KYC variant evidence | Deferred KYC views | No baseline output | KYC and legal review | Not required for first provisional model | ODTI commercial lead | If KYC variant is selected | Expands baseline scope | P3 |
| `VAS-002` | Customer-facing email price | Blocked | Not Required for Initial Model | ODTI commercial owner | Not required because email is excluded from baseline | Not applicable | Future email variant evidence | Deferred email views | No baseline output | Provider and privacy review | Not required for first provisional model | ODTI commercial lead | If email variant is selected | Expands baseline scope | P3 |
| `VAS-003` | Customer-facing KYC price | Blocked | Not Required for Initial Model | ODTI commercial owner | Not required because KYC is excluded from baseline | Not applicable | Future KYC variant evidence | Deferred KYC views | No baseline output | KYC and legal review | Not required for first provisional model | ODTI commercial lead | If KYC variant is selected | Expands baseline scope | P3 |
| `VAS-004` | Customer-facing rider or CTA price | Blocked | Not Required for Initial Model | ODTI commercial owner | Not required because rider or CTA is excluded from baseline | Not applicable | Future rider variant evidence | Deferred rider views | No baseline output | Messaging and privacy review | Not required for first provisional model | ODTI commercial lead | If rider variant is selected | Expands baseline scope | P3 |
| `CST-002` | KYC provider cost | Blocked | Not Required for Initial Model | ODTI commercial owner | Not required because KYC is excluded from baseline | Not applicable | Future KYC provider quote | Deferred KYC views | No baseline output | KYC and legal review | Not required for first provisional model | ODTI commercial lead | If KYC variant is selected | Expands baseline scope | P3 |

## SMS Economic Separation

The SMS assumptions intentionally separate three commercial layers:

```text
VAS-001
Customer-facing SMS price

CST-001
SMS wholesale provider price

SMS-002
SMS provider internal delivery cost
```

Rural Bank or ODTI SMS margin is:

```text
VAS-001 - CST-001
```

SMS Provider margin is:

```text
CST-001 - SMS-002
```

These margins must not be collapsed. They also must not be counted as additional ecosystem inflows. They are derived reporting outputs of different economic layers.

`SMS-001` requires performance evidence. A provider quote may support `CST-001`, but it does not prove delivery success, delivery-report definitions, carrier status definitions, retry behavior, or pilot performance.

`SMS-003` requires failed-message billing, retry, refund, and support evidence from provider contract terms, SLA documentation, billing rules, and operational policy.

`SMS-004` requires privacy, consent, recipient contact-data handling, customer-facing disclosure, and provider-control review.

## Semantic Collision Review

The following assumption pairs are intentionally separate and should not be merged:

| Pair | Separation |
| --- | --- |
| Provider price vs provider internal cost | `CST-001` is the wholesale SMS provider price charged to a contracting participant; `SMS-002` is the provider's own internal delivery cost. |
| Customer-facing price vs stakeholder retained amount | `PRC-001` and `VAS-001` describe customer-facing prices; `RB-001` describes the rural bank's retained economics derived from customer-paid fees. |
| Implementation price vs implementation cost | `LIC-004` is the activation price charged to the rural bank; `ODTI-002` is ODTI's implementation effort or cost. |
| DevOps fee vs cloud cost vs DevOps internal cost | `OPS-001` and `OPS-002` are customer-facing DevOps fees; `CLD-001` is external cloud cost; `OPS-003` is DevOps internal engineering and tooling cost. |
| NetBank fee vs NetBank internal cost | `NET-001` is the approved fee basis charged by the infrastructure participant; `NET-002` is its operating-cost basis if disclosed or modeled. |
| ODTI support cost vs DevOps support cost | `ODTI-001` covers commercial program support and administration; `OPS-003` covers managed technical operations. |
| Customer administrative cost vs time-saved indicator | `CUS-004` measures baseline administrative cost; `CUS-005` measures time saved after adoption. |
| Completion rate vs public completion indicator | `VOL-002` is an operational completion-rate driver; `PUB-004` is a public-interest completion indicator that may use `VOL-002` without duplicating it. |
| Royalty basis vs 3neti internal cost | `ROY-001` describes 3neti-ODTI license or royalty basis; `3NETI-001`, `3NETI-002`, and `3NETI-003` describe 3neti cost views. |

Implementation observation: identifiers beginning with a numeral, such as `3NETI-*`, may require a separate machine-safe key if the Assumptions Register is later represented in code, spreadsheet names, database fields, or structured configuration. The display identifier remains unchanged in documentation.

## Placeholder Policy

### Generally Eligible For Controlled Placeholder

Subject to documented approval:

- bank onboarding counts;
- active-bank counts;
- active months;
- payroll customers per bank;
- payroll runs per employer;
- recipients per run;
- completion rate;
- support hours or cost;
- implementation effort;
- employer labor cost;
- time saved;
- cloud cost;
- DevOps cost;
- attachment rate;
- churn;
- bad debt.

These values may test structure, reconciliation, and sensitivity. They must be visibly labeled.

### Eligible Only For Sensitivity Testing

Examples:

- rural-bank retained economics;
- transaction fee;
- activation price;
- annual platform price;
- SMS customer-facing price.

These may be varied to test affordability and sustainability, but they should not be presented as approved pricing.

### Not Eligible Without External Or Formal Evidence

Examples:

- NetBank approved fee;
- tax treatment;
- royalty basis if it creates legal or related-party obligations;
- legal characterization;
- messaging consent requirements;
- provider contract terms;
- investor return mechanism.

Management guesses must not be used for these in factual projections.

### Not Required For First Provisional Model

Examples:

- SMS provider internal delivery cost, if the provider is external and does not disclose it;
- investor-return assumptions;
- recipient-satisfaction monetization;
- business-development allocation;
- Channel Partner economics;
- KYC, email, rider, or other deferred capabilities.

When these are omitted, the affected stakeholder-specific outputs must remain unavailable or explicitly excluded.

## Controlled Placeholder Record

Future controlled placeholders should use this format:

```text
Placeholder ID:
Assumption ID:
Offering:
Scenario:
Value:
Unit:
Reason:
Source or rationale:
Approving reviewer:
Date authorized:
Expiry or review trigger:
Affected calculations:
Affected stakeholder views:
Warning:
Status:
```

No placeholder values are authorized by this document.

## Placeholder Warning

Every provisional output using placeholders must include:

> This value is a controlled scenario placeholder used to test model structure. It is not an approved price, provider quote, institutional commitment, forecast, contract, or factual operating result.

## Numeric Maturity Levels

| Level | Name | Description |
| --- | --- | --- |
| `Level 0` | Structural Model | Current state. Assumptions, line items, counterparties, and consolidation treatment exist, but no values are used. |
| `Level 1` | Controlled Placeholder Model | Uses explicitly approved placeholder values to test formulas, reconciliation, scenario sensitivity, and break-even relationships. It is not a forecast. |
| `Level 2` | Evidence-Supported Management Model | Uses provider quotes, management estimates, employer interviews, rural-bank interviews, DevOps estimates, and draft commercial decisions. Useful for internal planning. |
| `Level 3` | Pilot-Calibrated Model | Uses observed pilot data, exception rates, support tickets, delivery logs, and before-and-after operating evidence. |
| `Level 4` | Contract- And Operations-Calibrated Model | Uses signed contracts, approved pricing, actual costs, and operating evidence. Formal budgeting remains subject to accounting, tax, and legal review. |

## Evidence Acquisition Workstreams

### Workstream A: Rural Bank And RBAP

Collect adoption, active-bank, active-month, payroll-employer, readiness, and member-bank evidence.

Primary assumptions:

- `ADP-001`;
- `ADP-002`;
- `ADP-003`;
- `CUS-001`;
- `RISK-001`.

Primary instruments:

- rural-bank interview questionnaire;
- RBAP member readiness survey;
- rural-bank payroll portfolio request;
- onboarding-capacity assessment.

### Workstream B: Employers

Collect payroll frequency, recipient count, administrative burden, exception handling, reconciliation effort, fee tolerance, and collection behavior.

Primary assumptions:

- `CUS-002`;
- `CUS-003`;
- `CUS-004`;
- `CUS-005`;
- `CUS-006`;
- `COL-001`;
- `PUB-002`;
- `PUB-003`.

Primary instruments:

- employer payroll questionnaire;
- current-workflow observation guide;
- willingness-to-pay interview guide;
- before-and-after measurement plan.

### Workstream C: NetBank

Collect role, fee, account, API, rail, settlement, reconciliation, service-level, and operating-cost information.

Primary assumptions:

- `NET-001`;
- `NET-002`;
- `VOL-002`, where NetBank execution evidence helps define successful events.

Primary instruments:

- NetBank information request;
- settlement and account-structure question set;
- infrastructure fee-basis request.

### Workstream D: DevOps And Cloud

Collect setup effort, recurring operations cost, cloud cost, monitoring, backup, security, on-call, support scope, handover, and capacity evidence.

Primary assumptions:

- `OPS-001`;
- `OPS-002`;
- `OPS-003`;
- `OPS-004`;
- `OPS-005`;
- `CLD-001`.

Primary instruments:

- DevOps and cloud estimate request;
- target architecture cost worksheet;
- managed-operations scope checklist;
- operational readiness checklist.

### Workstream E: SMS Provider

Collect customer-facing pricing inputs, wholesale provider pricing, billing unit, delivery performance, carrier status definitions, failed-message treatment, SLA, privacy, and consent requirements.

Primary assumptions:

- `VAS-001`;
- `CST-001`;
- `ATT-001`;
- `SMS-001`;
- `SMS-002`;
- `SMS-003`;
- `SMS-004`.

Primary instruments:

- SMS provider quotation request;
- SMS service-data request;
- failed-message and billing-rule questionnaire;
- consent and privacy review checklist.

### Workstream F: ODTI And 3neti

Decide pricing architecture, retained economics, support model, implementation cost, royalty basis, stewardship cost, and capital needs.

Primary assumptions:

- `LIC-004`;
- `LIC-005`;
- `PRC-001`;
- `RB-001`;
- `ODTI-001`;
- `ODTI-002`;
- `ROY-001`;
- `3NETI-001`;
- `3NETI-002`;
- `3NETI-003`;
- `INV-001`.

Primary instruments:

- ODTI pricing decision worksheet;
- ODTI support and implementation work breakdown;
- rural-bank retained economics decision paper;
- 3neti-ODTI royalty decision paper;
- related-party review request.

### Workstream G: Legal, Accounting, Tax, Privacy, And Security

Review legal characterization, contract terms, tax, withholding, revenue recognition, customer-fund separation, messaging consent, royalties, collection timing, and investor rights.

Primary assumptions:

- `TAX-001`;
- `ROY-001`;
- `PAR-001`, if later included;
- `COL-001`;
- `RB-001`;
- `NET-001`;
- `SMS-004`;
- `INV-002`.

Primary instruments:

- legal handoff memorandum;
- accounting and tax question set;
- privacy and security review checklist;
- customer-fund separation question set.

### Workstream H: Pilot Measurement

Define evidence to collect once the offering runs.

Primary assumptions:

- `VOL-002`;
- `SMS-001`;
- `PUB-001`;
- `PUB-002`;
- `PUB-003`;
- `PUB-004`;
- `CUS-004`;
- `CUS-005`;
- `CUS-006`;
- `OPS-005`.

Primary instruments:

- pilot measurement plan;
- completion report template;
- exception and support-ticket taxonomy;
- recipient and employer survey templates;
- SMS delivery-log extraction request.

## First Provisional Model Gate

The Level 1 Offering Economics model may proceed only when:

1. every `P0` assumption has either an Active or Approved value, or an explicitly approved controlled placeholder;
2. all formulas and counterparty references remain valid;
3. placeholder warnings are attached to every provisional output using placeholders;
4. unresolved NetBank, royalty, and tax lines are visibly blocked or excluded from specific provisional totals;
5. no blocked assumption is silently guessed;
6. the output is labeled:
   - provisional;
   - placeholder-driven;
   - non-forecast;
   - not investment-grade.

The first Level 1 model may present pre-tax, pre-royalty, and infrastructure-fee-blocked views only if those exclusions are explicit on every affected output.

## Recommended First Numeric Output

After evidence collection or controlled-placeholder authorization, the first numeric artifact should be:

```text
Payroll Starter Offering Economics - Controlled Placeholder Model
```

It should show:

- Year 1 through Year 5;
- Conservative, Base, and Accelerated;
- Rural Bank view;
- ODTI view;
- DevOps view;
- 3neti view where possible;
- SMS view as an optional variant;
- consolidated external inflow and outflow;
- pass-through payroll value;
- blocked outputs;
- explicit placeholder register.

Do not call it a revenue forecast.

## Missing Evidence Instruments

The following instruments should be created before evidence acquisition begins:

1. Rural Bank and RBAP data questionnaire.
2. Employer payroll questionnaire.
3. NetBank information request.
4. DevOps and cloud estimate request.
5. SMS provider quotation and service-data request.
6. ODTI and 3neti commercial decision worksheet.
7. Legal, accounting, tax, privacy, and security handoff questionnaire.
8. Controlled-placeholder authorization worksheet.
9. Pilot measurement plan.
10. Provider-comparison sheet for SMS and future value-added services.

## Non-Goals

Do not use this plan to:

- assign placeholder values;
- create numeric projections;
- create spreadsheets;
- approve pricing;
- approve provider fees;
- approve rural-bank retained economics;
- approve royalties;
- approve taxes;
- perform legal analysis;
- make investment claims;
- modify x-change;
- create software.
