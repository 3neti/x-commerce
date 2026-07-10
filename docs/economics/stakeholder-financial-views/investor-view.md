# Investor Financial View Template

## Stakeholder

Investor, angel investor, strategic investor, institutional investor, family office, ecosystem investor, corporate partner, or other capital participant.

## View Purpose

This view explains investment instrument, capital timing, ownership or financing rights, company and ecosystem indicators, and potential return mechanism for one offering or program view.

This is not an ordinary operational stakeholder view.

Investor returns are not Commercial Waterfall allocations unless the investor separately performs an approved operational role with separately documented rights.

View types may include:

- `Investor Ownership`;
- `Cash Flow`;
- `Contribution`;
- `Risk`;
- `Memo`;
- `Operational Value`.

## Required Assumption IDs

Required assumption IDs:

- investment instrument IDs;
- capital contribution timing IDs;
- ownership, repayment, conversion, dividend, governance, or information-rights IDs;
- company-level cost, revenue, and cash requirement IDs;
- offering-level indicators that inform company value;
- relationship-capital and confidence indicators, if approved;
- legal, securities, tax, and accounting dependency IDs.

Blocked assumption IDs:

- list all required blocked assumptions.

Controlled placeholder IDs:

- list explicitly authorized placeholders only.

Model readiness:

- `Not ready` until investment instrument, rights, and legal dependencies are defined or explicitly controlled.

## Line-Item Groups

Possible line-item groups:

- investment instrument;
- capital contributed;
- timing of capital;
- ownership rights;
- repayment rights;
- conversion rights;
- dividend rights;
- governance rights;
- follow-on capital needs;
- company and ecosystem indicators;
- confidence indicators;
- relationship-capital indicators;
- potential return mechanism;
- liquidity assumptions;
- legal and securities dependencies.

## Template Line Items

### Capital Contribution

```text
Line-item ID: <OFFERING-ID>-INVESTOR-CF-001
Line-item name: Capital contribution
Stakeholder: Investor
View type: Cash Flow
Category: Investment capital
Description: Capital contributed by an investor under an approved financing instrument.
Formula: Approved investment amount and timing
Input assumption IDs: <INVESTMENT-INSTRUMENT-ID>, <CAPITAL-AMOUNT-ID>, <CAPITAL-TIMING-ID>
Scenario behavior: Usually financing-structure dependent, not transaction-volume dependent.
Year applicability: Offering-specific or company-level period
Cash or accrual relevance: Cash disbursement by investor and cash receipt by investee.
Recognition trigger: Investment closing or funding event.
Payment trigger: Approved funding condition.
Cash timing: Defined by investment documents.
Accounting review required: Yes.
Counterparty stakeholder: Investee entity
Counterparty line-item reference: Required in company-level or investee view.
Reconciliation basis: Investor capital outflow should mirror investee capital inflow, subject to costs and timing.
Timing difference: Possible closing/funding timing.
Commercial Event: Not an operational Commercial Event.
Billable Event: Not applicable
Commercial Right: Investor rights defined by investment instrument, not operational waterfall.
Commercial Attribution: Not applicable
Commercial Waterfall reference: Not applicable unless investor separately has approved operational role.
Legal or accounting dependency: Securities, corporate, tax, accounting, governance review.
Tax dependency: Required.
Blocked inputs: Required if instrument or terms are Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: Investor ownership view and capital planning.
Notes: Investor capital is not operating revenue.
```

### Potential Return Mechanism

```text
Line-item ID: <OFFERING-ID>-INVESTOR-OWN-001
Line-item name: Potential return mechanism
Stakeholder: Investor
View type: Investor Ownership
Category: Equity, repayment, conversion, dividend, appreciation, or other approved mechanism
Description: Mechanism through which investor return could arise.
Formula: Instrument-specific; do not calculate until terms are approved.
Input assumption IDs: <INVESTMENT-INSTRUMENT-ID>, <RETURN-MECHANISM-ID>
Scenario behavior: May be informed by company indicators but must follow investment terms.
Year applicability: Instrument-specific
Cash or accrual relevance: Potential return, cash distribution, repayment, conversion, or valuation event.
Recognition trigger: Instrument-specific.
Payment trigger: Instrument-specific.
Cash timing: Instrument-specific.
Accounting review required: Yes.
Counterparty stakeholder: Investee entity or other approved party
Counterparty line-item reference: Required if return is modeled.
Reconciliation basis: Investor return should mirror company distribution, repayment, or ownership event.
Timing difference: Likely.
Commercial Event: Not an operational Commercial Event.
Billable Event: Not applicable
Commercial Right: Investor right under financing documents.
Commercial Attribution: Capital stewardship, if relevant.
Commercial Waterfall reference: Not applicable.
Legal or accounting dependency: Securities, corporate, tax, accounting, governance review.
Tax dependency: Required.
Blocked inputs: Required if investment terms are Blocked.
Controlled placeholder: Required if placeholder is used.
Output use: Investor view and capital strategy.
Notes: Do not treat investor return as ODTI, rural-bank, provider, or partner operating allocation.
```

## Counterparty Reconciliation Notes

Investor lines should reconcile with:

- investee capital receipt;
- dividends, repayments, or distributions if approved;
- company-level financing schedules;
- legal and governance documents.

Investor views may use offering-level indicators, but they do not convert offering Commercial Waterfalls into investor returns.

## Double-Counting Controls

- Do not combine investor capital inflow with operating revenue.
- Do not treat investor return as Commercial Waterfall allocation.
- Do not count appreciation as cash income without an approved event or valuation basis.
- Do not convert confidence indicators into revenue.

