# Disbursement Starter Authorization Readiness Report

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Current status: report scaffold.

Authorization status: Not authorized.

This report is completed after candidate values are entered and reviewed. It determines whether the candidate package is ready to move into [provisional-authorization-packet.md](provisional-authorization-packet.md).

## Purpose

This report answers:

```text
Are the reviewed Disbursement candidate values ready for provisional-input authorization?
```

It does not authorize values.

## Required Inputs

Before completing this report, review:

- [candidate-value-entry-ledger.md](candidate-value-entry-ledger.md);
- [provisional-input-candidate-pack.md](provisional-input-candidate-pack.md);
- [management-candidate-review-worksheet.md](management-candidate-review-worksheet.md);
- [candidate-value-import-contract.md](candidate-value-import-contract.md).

## Overall Readiness Verdict

Use exactly one:

| Verdict | Meaning |
| --- | --- |
| Ready for authorization packet | Candidate package can move to the provisional authorization packet. |
| Ready for partial authorization packet | Some inputs can move forward; others remain blocked or sensitivity-only. |
| Requires candidate revision | Candidate values need changes before authorization prep. |
| Requires evidence before authorization | Candidate values cannot be responsibly authorized without external or formal evidence. |
| Not ready | Candidate package remains incomplete. |

Current scaffold verdict:

```text
Not ready
```

Reason:

```text
Candidate values have not yet been populated.
```

## Readiness By Group

| Group | Current status | Required next action |
| --- | --- | --- |
| Adoption and activation | Not ready | Populate and review `ADP-002`, `ADP-003`. |
| Sponsor activity | Not ready | Populate and review `DSP-CUS-001`, `DSP-CUS-002`, `DSP-CUS-003`, `DSP-VOL-002`. |
| Derived activity | Not ready | Confirm `DSP-VOL-001` remains derived after component candidates exist. |
| Sponsor pricing | Not ready | Populate and review `DSP-PRICE-001`, `DSP-PRICE-002`, `DSP-PRICE-003`. |
| Rural Bank economics | Not ready | Populate and review `DSP-RB-001`; preserve `DSP-RB-002` as blocked unless separately authorized. |
| ODTI cost | Not ready | Populate and review `DSP-ODTI-001`, `DSP-ODTI-002`. |
| DevOps and cloud | Not ready | Populate and review `OPS-003`, `CLD-001`; preserve payer boundary. |
| Collection risk | Not ready | Populate and review `RISK-002`; apply only to eligible commercial fees. |
| Optional notification | Not ready | Decide whether optional notification is included, excluded, or sensitivity-only. |
| Blocked exclusions | Not ready | Preserve NetBank, tax, royalty, financing, investor, and partner blockers. |

## Required Checks Before Authorization Packet

| Check | Required result | Current scaffold status |
| --- | --- | --- |
| Every P0 input has candidate values or blocked treatment | Yes | Not ready |
| Every candidate has a unit | Yes | Not ready |
| Every candidate has a source label | Yes | Not ready |
| Every candidate has evidence limitation | Yes | Not ready |
| Every candidate has risk-if-wrong notes | Yes | Not ready |
| `DSP-VOL-001` is derived | Yes | Pending component values |
| Optional notification separate from Core Disbursement | Yes | Pending optional treatment |
| Pass-through funding excluded from revenue | Yes | Pending model population |
| Blocked exclusions remain blocked | Yes | Scaffolded |
| No workbook-only values exist | Yes | Scaffolded |

## Authorization Packet Handoff

If the verdict is `Ready for authorization packet` or `Ready for partial authorization packet`, the next artifact to complete is:

```text
provisional-authorization-packet.md
```

That packet must identify:

- provisional input IDs;
- authorized scenario values;
- unit;
- authorization status;
- source and evidence limitation;
- permitted use;
- expiry or review trigger;
- warning language.

## Stop Conditions

Do not proceed to authorization if:

- `DSP-VOL-001` has an independent candidate value under component-derived mode;
- pricing values are not reviewable by scenario;
- Rural Bank retained economics exceed sponsor-facing disbursement fee;
- pass-through funding is included as revenue;
- optional notification is required to make Core Disbursement readable;
- blocked NetBank, tax, royalty, financing, investor, or partner assumptions are silently replaced by management guesses.

## Next Step

After this report is completed, either revise the candidate pack or complete the provisional authorization packet.

