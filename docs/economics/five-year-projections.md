# Five-Year Projections

## Status

Current status: projection framework.

This document defines how five-year projections should be produced from one approved commercial offering and one governed set of assumptions.

It does not present numeric projections.

It is not a forecast, accounting standard, investment model, pricing approval, contract, legal opinion, tax analysis, or promise of revenue.

## Purpose

This document answers:

```text
How are five-year projections produced from one approved commercial offering
and one governed set of assumptions?
```

It does not answer:

```text
How much money will the ecosystem make?
```

The framework explains the method before any spreadsheet or model presents numbers.

## Governing Order

Five-year projections must follow this order:

```text
Offering
    |
    v
Commercial Model
    |
    v
Canonical Assumptions
    |
    v
Calculation Order
    |
    v
Stakeholder Financial Views
    |
    v
Scenario
```

Scenario should be applied only after the offering, commercial structure, assumptions, and calculations are defined.

The governing principle remains:

```text
The architecture drives the economics.
```

## First-Offering Constraint

Do not build the first numeric projection for the ecosystem as a whole.

The first projection must be tied to one concrete offering.

The likely candidate remains:

```text
OFR-RB-PAYROLL-STARTER
```

This framework does not automatically select that offering. The offering must pass the offering-selection gate before it can be modeled.

Ecosystem-wide projections may be created only by aggregating validated offering-level models.

The direction is:

```text
Offering Models
    |
    v
Stakeholder Views
    |
    v
Program View
    |
    v
Ecosystem View
```

Do not create one top-down ecosystem number and allocate it backward.

## Offering-Selection Gate

Before an offering can be modeled, confirm:

- target buyer;
- payer;
- recipient;
- sponsor, if different from buyer or payer;
- outcome;
- Commercial Event;
- Billable Event, if applicable;
- pricing structure;
- included capabilities;
- optional capabilities;
- infrastructure model;
- support model;
- stakeholder participants;
- Commercial Waterfall applicability;
- minimum assumptions readiness.

If these items are not defined, the offering remains a commercial idea, not a model-ready offering.

## Readiness Gate

Numeric projection is blocked until the selected offering satisfies this readiness check:

```text
Offering defined
    +
Required assumptions identified
    +
Canonical IDs assigned
    +
No unresolved duplicate assumptions
    +
Required inputs Active or Approved
    +
Controlled placeholders explicitly authorized
    =
Model Ready
```

A spreadsheet should not be able to bypass this gate.

If a required assumption remains `Blocked`, the model must:

1. stop;
2. request evidence;
3. or identify an explicitly controlled scenario placeholder.

A controlled scenario placeholder must be labeled as a placeholder. It is not an approved price, forecast, quote, contract, or factual input.

## Assumption Dependency

The Assumptions Register functions as the governed input layer.

The dependency pattern is:

```text
Assumption
    |
    v
Offerings
    |
    v
Calculations
    |
    v
Stakeholder Views
    |
    v
Scenarios
```

For each calculated line item, a future model should identify:

- formula;
- input assumption IDs;
- affected stakeholder;
- scenario behavior;
- legal or accounting dependency;
- output use.

Traceability is more important than spreadsheet formatting.

## Scenario Semantics

Scenarios describe coherent operating states.

They are not universal synonyms for low, medium, and high numeric values.

### Conservative

Conservative may mean:

- slower bank onboarding;
- fewer active banks;
- lower transaction activity;
- higher support burden;
- higher unit costs;
- weaker value-added attachment;
- higher churn;
- higher non-collection;
- slower customer adoption.

### Base

Base may mean:

- moderate adoption;
- expected transaction activity;
- manageable support;
- documented provider costs;
- practical value-added attachment rates;
- ordinary churn;
- realistic operating capacity.

### Accelerated

Accelerated may mean:

- faster adoption;
- higher activity;
- possible scale efficiencies;
- higher total operating requirements;
- lower unit cost where supported;
- wider capability attachment;
- stronger expansion;
- increased support and onboarding load during growth.

Not every assumption must vary across scenarios.

Some approved prices, contractual rates, fixed fees, provider quotes, or tax treatments may remain identical across Conservative, Base, and Accelerated.

## Calculation Architecture

The projection framework consumes the calculation order defined by the Commercial Model.

Minimum calculation order:

1. Select the offering.
2. Identify buyer, payer, recipient, and sponsor.
3. Identify participating stakeholders.
4. Identify Commercial Event.
5. Identify Billable Event, if applicable.
6. Retrieve customer-facing prices by canonical assumption ID.
7. Determine transaction or activity volume from canonical adoption and volume assumptions.
8. Separate gross transaction value and pass-through funds.
9. Apply taxes where appropriate.
10. Apply rail, settlement, and infrastructure costs.
11. Apply direct provider costs.
12. Apply DevOps and managed-operations costs.
13. Calculate markup and margin.
14. Calculate rural-bank retained economics.
15. Calculate ODTI operating economics.
16. Calculate 3neti royalty or license consideration if approved.
17. Apply approved Commercial Waterfalls.
18. Calculate support and operating costs.
19. Calculate stakeholder net contribution.
20. Report non-financial indicators.

Every input should cite a canonical assumption identifier from `docs/ASSUMPTIONS_REGISTER.md`.

## Line-Item Traceability

Each future calculated line item should be documented using this structure:

```text
Line item:
Stakeholder view:
Formula:
Input assumption IDs:
Scenario behavior:
Legal or accounting dependency:
Output use:
Blocked inputs:
```

If `Blocked inputs` is not empty, the model must not present the result as factual. It may only present a controlled placeholder result if that placeholder has been explicitly authorized for sensitivity testing.

## Required Model Outputs

For each year and scenario, a future offering-level model should eventually support:

- activity volume;
- gross transaction value, where relevant;
- collected fees;
- pass-through amounts;
- provider costs;
- rail or settlement costs;
- operating revenue;
- stakeholder allocations;
- operating costs;
- net contribution;
- non-financial indicators.

Do not populate these outputs while required assumptions remain blocked, unless controlled placeholders are explicitly authorized.

## Stakeholder Financial Views

The framework requires separate stakeholder outputs rather than one blended profit-and-loss table.

Not every view is a formal financial statement. Some are revenue views, cost views, contribution views, cash-flow views, operational-value views, or public-interest views.

Accounting conclusions remain subject to professional review.

### Depositor Or Customer

Focus on:

- fees paid;
- administrative cost;
- time saved;
- failures avoided;
- reconciliation effort;
- recipient outcomes;
- repeat-use indicators;
- operational value.

This view should not reduce customer value to platform revenue.

### Rural Bank

Focus on:

- license or subscription cost;
- implementation and operating cost;
- retained fee revenue;
- customer acquisition and retention value;
- support burden;
- payback;
- net contribution.

This view must separate deposits, customer funds, settlement balances, and pass-through amounts from earned revenue.

### ODTI

Focus on:

- access revenue;
- implementation revenue;
- transaction revenue;
- markup;
- provider costs;
- DevOps costs where resold;
- partner allocations;
- 3neti royalties;
- support costs;
- net operating contribution.

This view must not treat full provider selling price as ODTI revenue unless provider cost and accounting treatment are separately visible.

### 3neti

Focus on:

- license consideration;
- royalty revenue;
- R&D;
- stewardship;
- legal and IP cost;
- net contribution.

This view must not collapse ODTI operating revenue into 3neti income.

### NetBank

Focus on:

- approved fees;
- transaction activity;
- operating and compliance cost;
- recognized income;
- strict exclusion of deposits and settlement balances from revenue.

Legal characterization of NetBank's role belongs to x-legal.

### DevOps Provider

Focus on:

- setup revenue;
- recurring managed operations revenue;
- engineering cost;
- tooling;
- support burden;
- on-call cost;
- gross margin;
- staffing capacity.

This view must preserve the principle:

```text
The DevOps provider operates.
The rural bank owns.
```

### Value-Added Provider

Focus on:

- usage;
- attachment rate;
- provider price;
- delivery cost;
- support cost;
- provider margin;
- service success rate.

This view should distinguish value-added service pricing from capability attachment behavior.

### Business Development Partner

Focus on:

- qualifying Commercial Events;
- attribution;
- approved allocation;
- duration;
- relationship-development cost;
- payment timing;
- net contribution.

No partner allocation should arise from discretion, customer funds, settlement balances, or vague involvement.

### Investor

Focus on:

- company and ecosystem indicators;
- financing instrument;
- investor rights;
- capital requirements;
- potential return mechanism.

Investor return is not an operational Commercial Waterfall.

### Regulator And Public Interest

Focus on non-financial outputs:

- inclusion;
- accountability;
- transparency;
- completion;
- role clarity;
- provider-cost visibility;
- governance fidelity;
- public confidence.

Public Value should not be converted into company revenue.

## Financial Statements Versus Stakeholder Views

Avoid presenting every stakeholder view as a formal financial statement.

Use the correct view type:

- revenue view;
- cost view;
- contribution view;
- cash-flow view;
- operational-value view;
- public-interest view.

The framework is not an accounting standard. Accounting conclusions must be reviewed separately.

## Treatment Rules

### Provider Costs

Provider costs must be separated before markup or margin is represented.

Every provider-cost line should identify:

- provider;
- service;
- billable unit;
- direct provider cost assumption ID;
- customer-facing price assumption ID;
- markup or margin formula;
- tax or accounting dependency.

### Pass-Through Funds

Pass-through funds are not operating revenue.

The model must separately identify:

- customer funds;
- recipient funds;
- settlement balances;
- deposits;
- float;
- taxes collected for authorities;
- provider pass-through amounts;
- rail or settlement pass-through amounts.

### Royalties

3neti royalties or license consideration may be modeled only if the royalty or license basis is defined by a canonical assumption.

If `ROY-001` or its successor remains blocked, no royalty amount should be calculated except as a controlled placeholder.

### Commercial Waterfalls

Commercial Waterfalls apply only when approved commercial value must be allocated among participants according to explicit rules.

The model must identify:

- qualifying Commercial Event;
- Commercial Right;
- Commercial Attribution;
- allocation base;
- deduction order;
- allocation rule;
- duration;
- reversal or refund treatment.

Do not apply a Commercial Waterfall to investor returns, public-interest value, customer funds, deposits, settlement balances, or pass-through funds.

### Investor Returns

Investor returns arise from approved ownership or financing instruments, not ordinary operational allocation.

The model should not calculate investor return until the investment instrument, ownership rights, repayment terms, dividend policy, or other return mechanism is known.

### Taxes

Tax treatment must be controlled by canonical assumptions and professional review.

If tax treatment is blocked, the model must not silently assume a tax rate.

## Sensitivity Analysis

Sensitivity is separate from scenarios.

Scenarios describe coherent operating states.

Sensitivity asks how one assumption affects results.

Potential sensitivity tests include:

- transaction volume changes;
- active-bank count changes;
- SMS attachment changes;
- provider cost increase;
- churn increase;
- lower rural-bank retained fee;
- different 3neti royalty basis;
- delayed collections;
- higher support burden.

Sensitivity tests must identify:

- base scenario used;
- assumption varied;
- range tested;
- affected stakeholder views;
- interpretation limits.

Sensitivity results should not be presented as forecasts.

## Aggregation Rule

Program and ecosystem projections may be created only by aggregating validated offering-level models.

Aggregation must preserve:

- offering identity;
- canonical assumption IDs;
- stakeholder views;
- scenario definitions;
- pass-through exclusions;
- provider-cost visibility;
- Commercial Waterfall boundaries;
- legal and accounting dependencies.

If two offerings use the same assumption, they must reference the same canonical assumption ID unless the assumptions are genuinely different and separately recorded.

## Blocked Assumptions

Blocked assumptions protect model integrity.

Examples of blocked assumptions include:

- provider quote required;
- legal review required;
- billable unit unresolved;
- accounting treatment unresolved;
- offering scope unresolved;
- tax treatment unresolved;
- attribution rules unresolved;
- royalty basis unresolved.

A blocked assumption must not quietly become an informal spreadsheet estimate.

The model must either stop, request evidence, or use an explicitly controlled scenario placeholder.

## Controlled Scenario Placeholders

A controlled scenario placeholder is a temporary value used to test model structure while evidence remains incomplete.

It must identify:

- assumption ID;
- placeholder value;
- reason for placeholder;
- approving reviewer;
- expiry or review trigger;
- affected calculations;
- affected stakeholder views;
- warning text for any output using it.

Outputs using controlled placeholders must be labeled clearly. They are not factual projections.

## Minimum Readiness Checklist

Before the first numeric model is produced, the selected offering must satisfy the readiness checklist in `docs/ASSUMPTIONS_REGISTER.md`.

For `OFR-RB-PAYROLL-STARTER`, this includes readiness across:

- offering definition;
- adoption;
- customer and payroll activity;
- pricing and revenue;
- provider and infrastructure costs;
- attachment behavior;
- Commercial Waterfall inputs;
- risk and finance;
- public and non-financial indicators.

No first numeric projection should be produced until required assumptions are Active or Approved, or are explicitly identified as controlled scenario placeholders.

## Non-Goals

This document does not:

- calculate a five-year projection;
- select the first offering;
- approve `OFR-RB-PAYROLL-STARTER`;
- create an ecosystem-wide forecast;
- invent transaction volumes;
- invent active-bank counts;
- invent provider costs;
- invent attachment rates;
- approve royalties;
- approve partner allocations;
- approve taxes;
- create a spreadsheet;
- create software;
- create database schemas;
- modify x-change.

## Next Work

Recommended next steps:

1. Create stakeholder financial-view templates.
2. Select the first offering through a documented decision.
3. Identify the minimum required assumption IDs for that offering.
4. Resolve or explicitly control blocked assumptions.
5. Draft the first offering-specific Commercial Waterfall.
6. Produce the first numeric model only after readiness is satisfied.
7. Prepare the x-legal handoff for that concrete commercial model.

Do not skip directly to numeric projections.
