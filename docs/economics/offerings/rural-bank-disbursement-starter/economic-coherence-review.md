# Economic Coherence Review: Rural Bank Digital Disbursement Starter

## Status

Current status: scaffold.

Offering: `OFR-RB-DISBURSEMENT-STARTER`

This review will test whether Disbursement Starter can become economically coherent under the right cost-allocation and commercial-unit structure. It does not authorize inputs, create values, create projections, or revise the model to force a positive result.

## Review Question

```text
Under what cost-allocation and commercial structure can Rural Bank Digital Disbursement Starter become economically coherent for the Rural Bank, ODTI, DevOps Provider, Sponsor, and broader ecosystem?
```

## Cost Classification

Every material cost should be classified as one of:

```text
Offering-Specific Cost
Shared Bank-Platform Cost
Institutional Modernization Cost
External Provider Cost
Pass-Through
Tax or Government Amount
Financing
Derived Reporting Output
```

## Candidate Cost-Allocation Views

### View A: Full-Cost Stand-Alone Disbursement

Disbursement carries:

- full platform subscription or access cost;
- full DevOps setup and recurring cost;
- full cloud cost;
- all disbursement-specific implementation and support cost.

Purpose:

- stress test whether Disbursement alone can justify a dedicated rural-bank deployment.

### View B: Incremental Disbursement Economics

Disbursement carries only costs caused specifically by the offering.

Purpose:

- determine whether adding Disbursement to an existing rural-bank-owned platform is commercially attractive.

### View C: Shared Platform Allocation

Disbursement carries an explicit allocation of shared platform costs.

Candidate allocation bases:

- equal allocation across active offerings;
- transaction-volume allocation;
- revenue-weighted allocation;
- active sponsor or customer allocation;
- hybrid fixed-plus-usage allocation.

No allocation percentage is selected in this scaffold.

### View D: Bank Modernization Portfolio

Common infrastructure is evaluated as a broader rural-bank modernization investment.

Disbursement contributes to, but does not alone carry, the modernization case.

## Commercial Unit Review

The baseline units are:

```text
Sponsor onboarding
+
Sponsor monthly or program-service fee
+
Per-successful-recipient-disbursement fee
+
Optional notification attachment
```

The review should test whether these are sufficient or whether additional units are required:

- batch fee;
- reporting or audit package;
- exception handling fee;
- premium reconciliation service;
- sponsor implementation package.

Do not approve new prices in this review.

## Stakeholder Tests

### Sponsor

- Are fees plausible relative to administrative burden reduced?
- Does the sponsor understand onboarding, recurring service, and per-recipient fees?
- Does pass-through funding remain clearly separated?

### Rural Bank

- Does retained economics justify sponsor support?
- Does Disbursement help the bank use shared digital infrastructure?
- Does the bank need additional sponsor-level revenue layers?
- What remains blocked by `DSP-RB-002`?

### ODTI

- Does sponsor onboarding revenue cover implementation effort?
- Does recurring program-service revenue cover support?
- Does transaction revenue create positive incremental contribution?
- How sensitive is ODTI to support cost and Rural Bank retention?

### DevOps Provider

- Does incremental or allocated DevOps revenue cover direct cost?
- Is cloud cost separate under bank-owned infrastructure?
- Does Disbursement materially increase support burden?

### Consolidated Ecosystem

- Are sponsor commercial fees counted once?
- Is disbursement funding value pass-through?
- Are internal transfers eliminated?
- Are provider, cloud, tax, NetBank, and royalty items kept separate?

## Candidate Conclusions

The review may conclude any of:

```text
Disbursement is economically coherent as a stand-alone offering.
Disbursement is economically coherent only as an incremental offering on shared infrastructure.
Disbursement requires additional sponsor-level commercial units.
Disbursement requires materially greater volume.
The current pricing architecture is insufficient.
The bank-modernization case must be evaluated across multiple offerings.
```

Do not force a positive conclusion.

## New Assumption Candidates To Watch

| Candidate ID | Reason it may be needed |
| --- | --- |
| `DSP-BAT-001` | Batch fee if batch-level work is material. |
| `DSP-REP-001` | Reporting or audit package fee if sponsors need enhanced evidence. |
| `DSP-EXC-002` | Exception-handling fee if failed or corrected events create material support burden. |
| `ALLOC-001` | Disbursement share of shared platform cost. |
| `ALLOC-002` | Cost-allocation method. |
| `PLT-001` | Number of active offerings sharing platform cost. |

Do not add these to the Assumptions Register until the review establishes stable meanings.

## Authorization Readiness Verdict

The economic-coherence review should conclude whether the candidate pack is:

```text
Ready for authorization
Ready for partial authorization
Requires candidate revision
Requires evidence before authorization
```

Expected default before values exist:

```text
Requires candidate completion
```

## Next Slice

Create an economic-treatment decision record for Disbursement Starter after the coherence review is accepted.

