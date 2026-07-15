# Disbursement Starter Offering Economics

## Status

Offering: `OFR-RB-DISBURSEMENT-STARTER`

Model maturity: Level 1 draft controlled-placeholder model.

Authorization status: Draft internal authorization.

Workbook path: `artifacts/x-commerce-disbursement-starter-financial-model.xlsx`

## Required Warning

> This model uses draft-authorized management candidates and controlled placeholders. It is not a forecast, approved budget, provider quote, institutional commitment, contract, investment representation, public claim, or factual operating result.

## Model Boundary

Core Disbursement is shown separately from the optional notification variant.

The primary operating view is Incremental Disbursement Economics. Shared modernization, NetBank, tax, royalty, financing, investor, and partner outputs remain blocked or excluded as stated below.

## Derived Activity

Formula:

```text
DSP-VOL-001
=
DSP-CUS-001
x DSP-CUS-002
x DSP-CUS-003
x DSP-VOL-002
```

| Scenario | Sponsors per bank | Batches per sponsor/month | Recipients per batch | Completion rate | `DSP-VOL-001` |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | 2 | 1.0 | 75 | 92% | 138.0 |
| Base | 3 | 1.5 | 150 | 96% | 648.0 |
| Accelerated | 5 | 2.0 | 250 | 98% | 2450.0 |

## Core Disbursement Activity

Annual successful disbursements:

```text
ADP-002 x ADP-003 x DSP-VOL-001
```

| Scenario | Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | Active banks | 1 | 2 | 3 | 4 | 5 |
| Conservative | Active sponsors | 2 | 4 | 6 | 8 | 10 |
| Conservative | Annual successful disbursements | 414 | 1656 | 3312 | 4968 | 6900 |
| Base | Active banks | 2 | 4 | 6 | 8 | 10 |
| Base | Active sponsors | 6 | 12 | 18 | 24 | 30 |
| Base | Annual successful disbursements | 6480 | 20736 | 34992 | 51840 | 71280 |
| Accelerated | Active banks | 3 | 6 | 10 | 14 | 18 |
| Accelerated | Active sponsors | 15 | 30 | 50 | 70 | 90 |
| Accelerated | Annual successful disbursements | 44100 | 132300 | 245000 | 377300 | 485100 |

## Core External Revenue And Contribution

`Core Disbursement External Revenue` is gross sponsor commercial fees before non-collection. Pass-through disbursement funding is excluded.

`Consolidated Contribution Before Blocked Items` is collected sponsor commercial fees less ODTI implementation/support cost, DevOps direct cost, and cloud cost. It excludes NetBank fees, tax, royalty, financing, investor returns, partner allocations, and true Rural Bank internal support cost.

| Scenario | Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | Core Disbursement External Revenue | 11621 | 31484 | 57968 | 84452 | 115350 |
| Conservative | Consolidated Contribution Before Blocked Items | -45960 | -153090 | -295930 | -438771 | -605417 |
| Base | Core Disbursement External Revenue | 102960 | 263472 | 423984 | 613680 | 832560 |
| Base | Consolidated Contribution Before Blocked Items | -89099 | -261797 | -434496 | -638594 | -874091 |
| Accelerated | Core Disbursement External Revenue | 492750 | 1253250 | 2262500 | 3403250 | 4332750 |
| Accelerated | Consolidated Contribution Before Blocked Items | 106823 | 247718 | 439875 | 651218 | 823423 |

## Rural Bank View

Label:

```text
Rural Bank Contribution Before Internal Bank Disbursement-Support Cost
```

| Scenario | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | 4947 | 14087 | 26273 | 38460 | 52678 |
| Base | 45923 | 121081 | 196239 | 285062 | 387551 |
| Accelerated | 221859 | 576477 | 1044450 | 1576377 | 2009799 |

True Rural Bank net contribution remains blocked until `DSP-RB-002` is evidenced or separately authorized.

## ODTI View

Qualifier:

```text
Pre-Tax
Pre-Royalty
NetBank-Fee-Blocked
```

| Scenario | Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | ODTI Revenue | 6093 | 15823 | 28796 | 41770 | 56905 |
| Conservative | ODTI Contribution | -23907 | -59177 | -106204 | -153230 | -208095 |
| Base | ODTI Revenue | 54978 | 137122 | 219265 | 316344 | 428358 |
| Base | ODTI Contribution | -55022 | -126878 | -198735 | -283656 | -381642 |
| Accelerated | ODTI Revenue | 265964 | 664241 | 1195425 | 1792841 | 2279624 |
| Accelerated | ODTI Contribution | 28964 | 103241 | 195425 | 306841 | 397624 |

## DevOps View

Cloud cost remains outside DevOps under the bank-owned cloud boundary.

| Scenario | Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | DevOps Revenue | 80000 | 170000 | 290000 | 410000 | 550000 |
| Conservative | DevOps Contribution Before Tax And Overhead | 62000 | 98000 | 146000 | 194000 | 250000 |
| Base | DevOps Revenue | 200000 | 420000 | 640000 | 900000 | 1200000 |
| Base | DevOps Contribution Before Tax And Overhead | 150000 | 260000 | 370000 | 500000 | 650000 |
| Accelerated | DevOps Revenue | 330000 | 690000 | 1200000 | 1740000 | 2180000 |
| Accelerated | DevOps Contribution Before Tax And Overhead | 249000 | 447000 | 750000 | 1047000 | 1289000 |

## Optional Notification Increment

Optional notification is not part of Core Disbursement headline economics.

| Scenario | Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Conservative | Attached notifications | 104 | 414 | 828 | 1242 | 1725 |
| Conservative | Notification margin | 47 | 186 | 373 | 559 | 776 |
| Base | Attached notifications | 2592 | 8294 | 13997 | 20736 | 28512 |
| Base | Notification margin | 1244 | 3981 | 6718 | 9953 | 13686 |
| Accelerated | Attached notifications | 26460 | 79380 | 147000 | 226380 | 291060 |
| Accelerated | Notification margin | 12965 | 38896 | 72030 | 110926 | 142619 |

## Blocked Outputs

| Output | Treatment |
| --- | --- |
| Rural Bank true net contribution after `DSP-RB-002` | Blocked |
| NetBank-fee-adjusted results | Blocked |
| Tax-adjusted results | Blocked |
| 3neti royalty-adjusted results | Blocked |
| NPV, IRR, discounted payback | Blocked pending `FIN-001` and cash-flow basis |
| Investor returns | Excluded |
| Business-development partner allocations | Excluded |

## Interpretation

The draft placeholder model suggests:

- Conservative and Base remain weak before blocked items.
- Accelerated becomes positive on consolidated contribution before blocked items.
- Sponsor-level fees drive more revenue than the per-recipient fee alone.
- DevOps appears positive before tax and overhead, but direct costs require evidence.
- ODTI remains negative in Conservative and Base under the current draft placeholders.
- Core Disbursement remains separate from optional notification.
