#!/usr/bin/env node

import fs from "node:fs/promises";
import process from "node:process";

const scenarios = ["Conservative", "Base", "Accelerated"];
const years = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

const sourceDocuments = {
  provisionalInputs:
    "docs/economics/offerings/rural-bank-payroll-starter/provisional-input-register-level-1.md",
  level1Model:
    "docs/economics/offerings/rural-bank-payroll-starter/offering-economics-level-1.md",
  summary:
    "docs/economics/offerings/rural-bank-payroll-starter/five-year-revenue-projection-summary.md",
  specification:
    "docs/economics/offerings/rural-bank-payroll-starter/spreadsheet-financial-model.md",
};

const defaultWorkbookPath = "artifacts/x-commerce-payroll-starter-financial-model.xlsx";
const slice2ManifestPath = "scripts/finance/payroll_starter_slice2_manifest.json";
const slice2ExportManifestPath = "scripts/finance/payroll_starter_slice2_export_manifest.json";
const slice3ManifestPath = "scripts/finance/payroll_starter_slice3_manifest.json";
const slice3ExportManifestPath = "scripts/finance/payroll_starter_slice3_export_manifest.json";
const slice4ManifestPath = "scripts/finance/payroll_starter_slice4_manifest.json";
const slice5ManifestPath = "scripts/finance/payroll_starter_slice5_manifest.json";
const slice6ManifestPath = "scripts/finance/payroll_starter_slice6_manifest.json";
const slice7ManifestPath = "scripts/finance/payroll_starter_slice7_manifest.json";

const workbookSheets = [
  "00_Read_Me",
  "01_Control",
  "02_Assumptions",
  "03_Assumption_Map",
  "04_Adoption",
  "05_Payroll_Activity",
  "06_Pricing",
  "07_Revenue",
  "08_Cost_of_Sales",
  "09_Operating_Expenses",
  "10_Rural_Bank_View",
  "11_ODTI_View",
  "12_DevOps_View",
  "13_SMS_Variant",
  "14_Consolidated_View",
  "15_Profit_and_Loss",
  "16_Cash_Flow",
  "17_Capital_Budgeting",
  "18_Sensitivity",
  "19_Scenarios",
  "20_Dashboard",
  "21_Checks",
  "22_Source_Lineage",
];

const slice2Sheets = [
  "00_Read_Me",
  "01_Control",
  "02_Assumptions",
  "03_Assumption_Map",
  "04_Adoption",
  "05_Payroll_Activity",
  "21_Checks",
];

const slice3Sheets = [
  "06_Pricing",
  "07_Revenue",
  "10_Rural_Bank_View",
  "11_ODTI_View",
  "12_DevOps_View",
  "13_SMS_Variant",
  "14_Consolidated_View",
  "21_Checks",
];

const slice4Sheets = [
  "08_Cost_of_Sales",
  "09_Operating_Expenses",
  "15_Profit_and_Loss",
  "16_Cash_Flow",
  "21_Checks",
];

const slice5Sheets = [
  "17_Capital_Budgeting",
  "18_Sensitivity",
  "21_Checks",
];

const slice6Sheets = [
  "19_Scenarios",
  "20_Dashboard",
  "21_Checks",
  "22_Source_Lineage",
];

const slice2SheetPlan = [
  {
    sheet: "00_Read_Me",
    purpose: "Workbook instructions, warnings, source documents, legend, blocked outputs, and permitted use.",
    inputs: [],
    outputs: ["User-facing workbook governance"],
    validation: ["Required warnings present", "Canonical sources listed"],
  },
  {
    sheet: "01_Control",
    purpose: "Scenario, SMS inclusion, cost view, volume method, and blocked capital-budgeting controls.",
    inputs: ["Scenario list", "Model version", "Volume method"],
    outputs: ["Selected scenario control", "Core workbook control values"],
    validation: ["Scenario must be Conservative, Base, or Accelerated", "Volume method must remain Component-derived"],
  },
  {
    sheet: "02_Assumptions",
    purpose: "Spreadsheet representation of Level 1 provisional inputs and blocked items.",
    inputs: ["PI-L1-001 through PI-L1-030", "Blocked/excluded input list"],
    outputs: ["Assumption table", "Selected scenario values", "Blocked-input rows"],
    validation: ["Assumption IDs unique", "Provisional input IDs unique", "Blocked rows display Blocked or Excluded"],
  },
  {
    sheet: "03_Assumption_Map",
    purpose: "Dependency lineage for adoption, volume, pricing, SMS, and blocked outputs.",
    inputs: ["Assumption IDs", "Provisional Input IDs", "Source documents"],
    outputs: ["Assumption-to-output map", "Derived-volume governance row"],
    validation: ["VOL-001 marked Derived input", "No independent VOL-001 input under Component-derived mode"],
  },
  {
    sheet: "04_Adoption",
    purpose: "Five-year bank and employer adoption engine.",
    inputs: ["ADP-001", "ADP-002", "ADP-003", "CUS-001"],
    outputs: ["Cumulative onboarded banks", "Active employers", "Newly onboarded employer relationships"],
    validation: [
      "Active banks <= cumulative onboarded banks",
      "Weighted active months between 0 and 12",
      "Active employers = active banks x CUS-001",
    ],
  },
  {
    sheet: "05_Payroll_Activity",
    purpose: "Component-derived payroll activity engine.",
    inputs: ["CUS-001", "CUS-002", "CUS-003", "VOL-002", "ADP-002", "ADP-003", "ATT-001", "SMS-001"],
    outputs: ["VOL-001", "Annual successful payroll transactions", "SMS-attached delivered transactions"],
    validation: ["VOL-001 parity", "Annual transaction parity", "SMS activity optional"],
  },
  {
    sheet: "21_Checks",
    purpose: "Initial model integrity checks for Slice 2.",
    inputs: ["Controls", "Assumptions", "Adoption outputs", "Payroll activity outputs"],
    outputs: ["Check status table", "ERROR count", "Blocked check count"],
    validation: ["All Slice 2 structural checks return OK or Blocked", "No ERROR rows before Slice 3"],
  },
];

const slice2ExportPlan = [
  {
    sheet: "00_Read_Me",
    tableAnchor: "A1",
    layout: "Title, warnings, source documents, style legend, permitted use, and prohibited use.",
    formulaResponsibilities: ["No calculations", "Source links and warnings only"],
    formatting: ["Title band", "Warning fill", "Readable source-document table"],
    validation: ["Required warning text present", "Canonical source documents listed"],
  },
  {
    sheet: "01_Control",
    tableAnchor: "A1",
    layout: "Controlled scenario, model status, optional SMS, cost view, volume method, and runtime dependency rows.",
    formulaResponsibilities: ["Selected scenario drives selected assumption values", "Volume method remains Component-derived"],
    formatting: ["Input cells blue", "Blocked controls yellow", "Validation lists where runtime supports them"],
    validation: ["Scenario is one of Conservative, Base, Accelerated", "Aggregate volume mode disabled"],
  },
  {
    sheet: "02_Assumptions",
    tableAnchor: "A1",
    layout: "Canonical assumption rows with scenario columns, selected value, current status, evidence status, provisional input ID, and source.",
    formulaResponsibilities: ["Selected Scenario Value references 01_Control", "Blocked assumptions show Blocked or Excluded"],
    formatting: ["Scenario value columns typed as numeric where applicable", "Blocked rows visibly flagged"],
    validation: ["Assumption IDs unique", "Provisional input IDs unique", "No hidden default values for blocked assumptions"],
  },
  {
    sheet: "03_Assumption_Map",
    tableAnchor: "A1",
    layout: "Dependency map from assumptions to formulas, stakeholder tabs, outputs, and status.",
    formulaResponsibilities: ["VOL-001 documented as derived", "No independent VOL-001 input in Component-derived mode"],
    formatting: ["Formula/role column wrapped", "Blocked dependencies visible"],
    validation: ["CUS-001 x CUS-002 x CUS-003 x VOL-002 = VOL-001 row present"],
  },
  {
    sheet: "04_Adoption",
    tableAnchor: "A1",
    layout: "Scenario-by-year adoption engine with bank cohorts and employer relationships.",
    formulaResponsibilities: [
      "Cumulative onboarded banks = running sum of ADP-001",
      "Active employers = ADP-002 x CUS-001",
      "Newly onboarded employer relationships = ADP-001 x CUS-001",
    ],
    formatting: ["Year headers", "Scenario section rows", "Counts formatted as counts"],
    validation: ["Active banks <= cumulative onboarded banks", "Weighted active months between 0 and 12"],
  },
  {
    sheet: "05_Payroll_Activity",
    tableAnchor: "A1",
    layout: "Component-derived payroll activity and optional SMS activity.",
    formulaResponsibilities: [
      "VOL-001 = CUS-001 x CUS-002 x CUS-003 x VOL-002",
      "Annual successful payroll transactions = ADP-002 x ADP-003 x VOL-001",
      "SMS-attached delivered transactions = annual transactions x ATT-001 x SMS-001",
    ],
    formatting: ["Activity counts with one decimal where needed", "Derived rows labeled"],
    validation: ["VOL-001 parity", "Annual transaction parity", "SMS remains optional"],
  },
  {
    sheet: "21_Checks",
    tableAnchor: "A1",
    layout: "Check register with actual, expected, difference, status, and notes columns.",
    formulaResponsibilities: ["Each check produces OK, Blocked, or ERROR", "ERROR count is visible"],
    formatting: ["OK/Blocked/ERROR status colors", "Notes wrapped"],
    validation: ["No Slice 2 ERROR rows", "Known unsupported outputs marked Blocked"],
  },
];

const slice2NamedRangeStrategy = [
  ["ScenarioSelected", "01_Control!B2", "Selected scenario control"],
  ["VolumeMethod", "01_Control!B7", "Must remain Component-derived in Level 1"],
  ["AssumptionTable", "02_Assumptions!A1:Q200", "Governed assumption rows"],
  ["VOL_001_Derived", "05_Payroll_Activity derived row", "Machine-safe name for VOL-001"],
  ["AnnualSuccessfulTransactions", "05_Payroll_Activity annual transaction row", "Derived activity output"],
];

const slice2FormulaBlueprints = [
  "Selected assumption values must reference the scenario selected on 01_Control.",
  "Cumulative onboarded banks must be a running sum of ADP-001.",
  "Active employers must equal active banks multiplied by CUS-001.",
  "Newly onboarded employer relationships must equal newly onboarded banks multiplied by CUS-001.",
  "VOL-001 must equal CUS-001 multiplied by CUS-002, CUS-003, and VOL-002.",
  "Annual successful payroll transactions must equal ADP-002 multiplied by ADP-003 and derived VOL-001.",
  "SMS-attached delivered transactions must equal annual successful payroll transactions multiplied by ATT-001 and SMS-001.",
  "Checks must surface OK, Blocked, or ERROR rather than silently treating unavailable values as zero.",
];

const slice2VisualQaTargets = [
  "00_Read_Me!A1:H25",
  "01_Control!A1:D12",
  "02_Assumptions!A1:Q45",
  "03_Assumption_Map!A1:E20",
  "04_Adoption!A1:G20",
  "05_Payroll_Activity!A1:G12",
  "21_Checks!A1:F20",
];

const slice3SheetPlan = [
  {
    sheet: "06_Pricing",
    purpose: "Convert Level 1 provisional prices and allocation decisions into workbook-ready pricing rows.",
    inputs: ["EMP-001", "EMP-002", "PRC-001", "RB-001", "LIC-004", "LIC-005", "VAS-001", "CST-001"],
    outputs: ["Customer-facing prices", "Stakeholder allocation rows", "Provider price rows"],
    validation: ["RB-001 <= PRC-001", "EMP-001 split sums to 100%", "EMP-002 split sums to 100%"],
  },
  {
    sheet: "07_Revenue",
    purpose: "Calculate external revenue and entity revenue views without adding stakeholder revenue columns together.",
    inputs: ["04_Adoption", "05_Payroll_Activity", "06_Pricing", "RISK-002"],
    outputs: ["Core external revenue", "Entity revenue views", "Optional SMS revenue"],
    validation: ["External revenue counts employer fees once", "Stakeholder revenue marked non-additive"],
  },
  {
    sheet: "10_Rural_Bank_View",
    purpose: "Present Rural Bank core revenue, optional SMS margin, and contribution before internal bank payroll-support cost.",
    inputs: ["EMP-001 split", "EMP-002 split", "RB-001", "RISK-002", "RB-002"],
    outputs: ["Rural Bank core revenue", "Rural Bank SMS margin", "Full-cost stress-test result"],
    validation: ["RB-002 remains blocked", "Qualified Rural Bank contribution label used"],
  },
  {
    sheet: "11_ODTI_View",
    purpose: "Present ODTI platform access, employer-level, transaction-platform revenue, and pre-tax/pre-royalty contribution.",
    inputs: ["LIC-004", "LIC-005", "EMP-001 split", "EMP-002 split", "PRC-001", "RB-001", "ODTI-001", "ODTI-002"],
    outputs: ["ODTI core revenue", "ODTI contribution", "Blocked royalty and NetBank qualifiers"],
    validation: ["ROY-001 blocked", "NET-001 blocked", "Contribution uses payroll-specific ODTI costs"],
  },
  {
    sheet: "12_DevOps_View",
    purpose: "Present DevOps setup and recurring managed-operations economics while keeping cloud outside DevOps.",
    inputs: ["OPS-001", "OPS-002", "OPS-003", "ADP-001", "ADP-002", "ADP-003"],
    outputs: ["DevOps revenue", "DevOps contribution", "Supported active-bank months"],
    validation: ["CLD-001 not included in DevOps cost", "Setup direct cost limitation disclosed"],
  },
  {
    sheet: "13_SMS_Variant",
    purpose: "Show optional SMS economics separately from Core Payroll.",
    inputs: ["ATT-001", "VAS-001", "CST-001", "SMS-001", "RISK-002", "SMS-002"],
    outputs: ["Delivered SMS volume", "Collected SMS revenue", "Wholesale SMS cost", "Rural Bank SMS margin"],
    validation: ["SMS remains optional", "SMS margin = collected SMS revenue - wholesale provider cost", "SMS-002 excluded"],
  },
  {
    sheet: "14_Consolidated_View",
    purpose: "Eliminate internal transfers and present consolidated Core and SMS-enhanced contribution before blocked items.",
    inputs: ["07_Revenue", "11_ODTI_View", "13_SMS_Variant", "Blocked input list"],
    outputs: ["Consolidated core external revenue", "Consolidated core contribution", "Optional SMS contribution", "Blocked exclusions"],
    validation: ["Internal transfers eliminated", "Payroll funding excluded", "Tax, royalty, and NetBank remain blocked"],
  },
  {
    sheet: "21_Checks",
    purpose: "Extend workbook integrity checks for revenue, stakeholder views, SMS, and consolidation.",
    inputs: ["06_Pricing", "07_Revenue", "10_Rural_Bank_View", "11_ODTI_View", "12_DevOps_View", "13_SMS_Variant", "14_Consolidated_View"],
    outputs: ["Slice 3 check statuses", "ERROR count", "Blocked check count"],
    validation: ["No Slice 3 ERROR rows", "Known blocked rows marked Blocked, not OK"],
  },
];

const slice3ExportPlan = [
  {
    sheet: "06_Pricing",
    tableAnchor: "A1",
    layout: "Customer-facing prices, stakeholder splits, provider prices, and pricing checks.",
    formulaResponsibilities: [
      "Pull EMP-001, EMP-002, PRC-001, RB-001, LIC-004, LIC-005, VAS-001, and CST-001 from 02_Assumptions",
      "Show EMP-001 and EMP-002 split rows from Decision 0003",
      "Calculate ODTI recipient transaction amount as PRC-001 less RB-001",
    ],
    validation: ["RB-001 <= PRC-001", "EMP-001 split sums to 100%", "EMP-002 split sums to 100%"],
  },
  {
    sheet: "07_Revenue",
    tableAnchor: "A1",
    layout: "Core external revenue and non-additive entity revenue views by scenario and year.",
    formulaResponsibilities: [
      "Consume newly onboarded employer relationships from 04_Adoption",
      "Consume active employers and active months from 04_Adoption",
      "Consume annual successful transactions from 05_Payroll_Activity",
      "Calculate core external revenue before SMS",
    ],
    validation: ["External revenue counts employer fees once", "Stakeholder revenue warning visible"],
  },
  {
    sheet: "10_Rural_Bank_View",
    tableAnchor: "A1",
    layout: "Rural Bank core revenue, optional SMS margin reference, and qualified contribution labels.",
    formulaResponsibilities: [
      "Calculate Rural Bank onboarding, monthly service, and transaction retention after non-collection",
      "Keep contribution label qualified by blocked RB-002",
      "Show full-cost stress-test references without resolving modernization portfolio economics",
    ],
    validation: ["RB-002 remains blocked", "Rural Bank contribution label remains qualified"],
  },
  {
    sheet: "11_ODTI_View",
    tableAnchor: "A1",
    layout: "ODTI access, employer-service, transaction-platform revenue, support cost, and contribution.",
    formulaResponsibilities: [
      "Calculate activation and annual subscription revenue",
      "Calculate ODTI employer and transaction revenue after non-collection",
      "Subtract payroll-specific ODTI implementation and support costs",
    ],
    validation: ["Contribution label remains pre-tax, pre-royalty, NetBank-fee-blocked", "ROY-001 and NET-001 remain blocked"],
  },
  {
    sheet: "12_DevOps_View",
    tableAnchor: "A1",
    layout: "DevOps setup revenue, recurring managed-operations revenue, direct cost, and contribution.",
    formulaResponsibilities: [
      "Calculate setup revenue from newly onboarded banks",
      "Calculate recurring revenue from active bank-months",
      "Subtract OPS-003 direct recurring cost only",
    ],
    validation: ["CLD-001 remains outside DevOps cost", "Cloud remains Rural Bank external outflow"],
  },
  {
    sheet: "13_SMS_Variant",
    tableAnchor: "A1",
    layout: "Optional SMS delivered volume, customer-facing revenue, collected revenue, wholesale cost, and SMS margin.",
    formulaResponsibilities: [
      "Consume annual successful transactions from 05_Payroll_Activity",
      "Calculate delivered SMS volume using ATT-001 and SMS-001",
      "Calculate SMS margin as collected customer-facing SMS revenue less wholesale provider cost",
    ],
    validation: ["SMS remains optional", "Wholesale SMS cost is not reduced by non-collection", "SMS-002 remains excluded"],
  },
  {
    sheet: "14_Consolidated_View",
    tableAnchor: "A1",
    layout: "Consolidated core external revenue, internal eliminations, SMS increment, and blocked exclusions.",
    formulaResponsibilities: [
      "Count employer-paid core fees once as external inflows",
      "Eliminate Rural Bank-to-ODTI and Rural Bank-to-DevOps transfers",
      "Show SMS increment separately from Core Payroll",
    ],
    validation: ["Internal transfers eliminated", "Payroll funding excluded", "Tax, royalty, NetBank, investor, and partner outputs remain blocked"],
  },
  {
    sheet: "21_Checks",
    tableAnchor: "A20",
    layout: "Append Slice 3 revenue, stakeholder-view, SMS, and consolidation checks below Slice 2 checks.",
    formulaResponsibilities: ["Surface OK, Blocked, or ERROR for each Slice 3 validation", "Keep ERROR count visible"],
    validation: ["No Slice 3 ERROR rows", "Known blocked rows marked Blocked, not OK"],
  },
];

const slice3FormulaBlueprints = [
  "Employer onboarding revenue = newly onboarded employer relationships x EMP-001.",
  "Employer monthly service revenue = active employers x weighted active months x EMP-002.",
  "Recipient disbursement fee revenue = annual successful transactions x PRC-001.",
  "Core external revenue = employer onboarding revenue + employer monthly service revenue + recipient disbursement fee revenue.",
  "Rural Bank core revenue = Rural Bank share of employer fees and RB-001 transaction retention, after RISK-002 non-collection.",
  "ODTI core revenue = activation revenue + annual subscription revenue + ODTI share of employer fees and transaction-platform revenue, after RISK-002 where applicable.",
  "DevOps revenue = OPS-001 setup revenue + OPS-002 recurring managed-operations revenue.",
  "SMS margin = SMS customer-facing revenue x (1 - RISK-002) - CST-001 wholesale SMS provider cost.",
  "Consolidated core contribution excludes internal transfers and keeps tax, royalty, NetBank, investor, and partner outputs blocked.",
];

const slice3WorkbookDependencies = [
  "02_Assumptions",
  "04_Adoption",
  "05_Payroll_Activity",
  "21_Checks",
];

const slice3VisualQaTargets = [
  "06_Pricing!A1:H30",
  "07_Revenue!A1:H35",
  "10_Rural_Bank_View!A1:H35",
  "11_ODTI_View!A1:H35",
  "12_DevOps_View!A1:H30",
  "13_SMS_Variant!A1:H35",
  "14_Consolidated_View!A1:H35",
  "21_Checks!A1:F40",
];

const slice4SheetPlan = [
  {
    sheet: "08_Cost_of_Sales",
    purpose: "Classify direct offering costs and variable provider costs without treating payroll funding as cost of sales.",
    inputs: ["13_SMS_Variant", "CST-001", "RISK-002", "NET-001", "TAX-001"],
    outputs: ["SMS wholesale cost", "Bad-debt or non-collection effect", "Blocked provider and tax cost rows"],
    validation: ["Payroll funding excluded from cost of sales", "SMS wholesale cost remains unreduced by non-collection", "NET-001 and TAX-001 remain blocked"],
  },
  {
    sheet: "09_Operating_Expenses",
    purpose: "Present stakeholder operating expenses and shared modernization costs separately from incremental Payroll costs.",
    inputs: ["ODTI-001", "ODTI-002", "OPS-003", "CLD-001", "RB-002", "LIC-005", "OPS-001", "OPS-002"],
    outputs: ["ODTI payroll-specific costs", "DevOps direct recurring cost", "Rural Bank modernization costs", "Blocked Rural Bank internal support cost"],
    validation: ["Incremental and modernization costs remain separate", "CLD-001 remains a Rural Bank external outflow", "RB-002 remains blocked"],
  },
  {
    sheet: "15_Profit_and_Loss",
    purpose: "Present provisional management P&L views without implying GAAP/PFRS statements or final net income.",
    inputs: ["07_Revenue", "08_Cost_of_Sales", "09_Operating_Expenses", "10_Rural_Bank_View", "11_ODTI_View", "12_DevOps_View", "14_Consolidated_View"],
    outputs: ["Qualified Rural Bank P&L view", "ODTI pre-tax/pre-royalty P&L view", "DevOps contribution view", "Consolidated management contribution view"],
    validation: ["Tax line blocked by TAX-001", "Rural Bank true net result blocked by RB-002", "Formal accounting presentation not implied"],
  },
  {
    sheet: "16_Cash_Flow",
    purpose: "Separate cash timing from economic recognition and block unsupported working-capital outputs.",
    inputs: ["COL-001", "RISK-002", "07_Revenue", "08_Cost_of_Sales", "09_Operating_Expenses"],
    outputs: ["Cash-flow timing limitation rows", "Collections and payment timing placeholders", "Blocked ending cash and working-capital rows"],
    validation: ["Revenue is not assumed to equal cash receipt", "COL-001 remains blocked unless later authorized", "Ending cash remains blocked without beginning cash and financing assumptions"],
  },
  {
    sheet: "21_Checks",
    purpose: "Extend workbook integrity checks for cost classification, management P&L, and cash-flow limitations.",
    inputs: ["08_Cost_of_Sales", "09_Operating_Expenses", "15_Profit_and_Loss", "16_Cash_Flow"],
    outputs: ["Slice 4 check statuses", "ERROR count", "Blocked check count"],
    validation: ["No Slice 4 ERROR rows", "Known blocked rows marked Blocked, not zero or OK"],
  },
];

const slice4BlockedOutputs = [
  "Rural Bank true incremental net contribution after RB-002",
  "Tax-adjusted net income",
  "Post-royalty ODTI contribution",
  "NetBank-fee-adjusted results",
  "Formal GAAP/PFRS financial statements",
  "Full balance sheet",
  "Ending cash",
  "Working-capital roll-forward",
  "NPV and IRR",
];

const slice5SheetPlan = [
  {
    sheet: "17_Capital_Budgeting",
    purpose: "Define NPV, IRR, payback, and investment cash-flow gates without calculating returns from incomplete cash-flow support.",
    inputs: ["16_Cash_Flow", "COL-001", "FIN-001", "TAX-001", "RB-002", "Beginning cash and financing assumptions"],
    outputs: ["Rural Bank Modernization Investment gate", "ODTI Program Investment gate", "NPV status", "IRR status", "Payback status"],
    validation: ["NPV uses cash flows only", "IRR requires at least one negative and one positive cash flow", "Discount rate remains blocked until FIN-001 exists"],
  },
  {
    sheet: "18_Sensitivity",
    purpose: "Define formula-based sensitivity grids and block valuation sensitivities whose target outputs are unavailable.",
    inputs: ["ADP-002", "CUS-001", "EMP-002", "PRC-001", "RB-001", "ODTI-001", "OPS-003", "FIN-001"],
    outputs: ["Operating sensitivity map", "Blocked valuation sensitivity map", "Driver/output matrix"],
    validation: ["Sensitivity grids must reference model drivers", "No pasted static sensitivity outputs", "Discount-rate versus NPV blocked until NPV is available"],
  },
  {
    sheet: "21_Checks",
    purpose: "Extend workbook integrity checks for capital-budgeting prerequisites and sensitivity-table governance.",
    inputs: ["17_Capital_Budgeting", "18_Sensitivity"],
    outputs: ["Slice 5 check statuses", "ERROR count", "Blocked check count"],
    validation: ["No Slice 5 ERROR rows", "Known unavailable return metrics marked Blocked or Not meaningful"],
  },
];

const slice5Prerequisites = [
  "Authorized cash-flow timing through COL-001 or equivalent",
  "Beginning cash, investment, or financing basis",
  "Discount-rate assumption FIN-001 or equivalent",
  "Valid cash-flow series for each evaluated stakeholder",
  "Tax treatment if after-tax cash flows are requested",
  "Explicit exclusion of royalty and NetBank fees where still blocked",
];

const slice5BlockedOutputs = [
  "Rural Bank NPV",
  "Rural Bank IRR",
  "ODTI NPV",
  "ODTI IRR",
  "Consolidated NPV",
  "Consolidated IRR",
  "Discounted payback",
  "Discount-rate sensitivity",
  "Terminal value",
];

const slice6SheetPlan = [
  {
    sheet: "19_Scenarios",
    purpose: "Compare Conservative, Base, and Accelerated as coherent scenario states rather than isolated low/mid/high values.",
    inputs: ["04_Adoption", "05_Payroll_Activity", "07_Revenue", "14_Consolidated_View", "17_Capital_Budgeting"],
    outputs: ["Scenario comparison table", "Activity comparison", "Revenue comparison", "Contribution comparison", "Blocked return metric comparison"],
    validation: ["Scenario names controlled", "Scenario outputs consume model sheets", "Blocked return metrics remain blocked"],
  },
  {
    sheet: "20_Dashboard",
    purpose: "Provide executive-facing summary metrics, warnings, and chart-ready ranges derived from model outputs.",
    inputs: ["01_Control", "19_Scenarios", "14_Consolidated_View", "10_Rural_Bank_View", "11_ODTI_View", "12_DevOps_View", "21_Checks"],
    outputs: ["Executive KPI panel", "Core versus SMS summary", "Incremental versus full-cost summary", "Model status and error count"],
    validation: ["Dashboard uses linked outputs, not manual totals", "Warnings remain visible", "ERROR count surfaced"],
  },
  {
    sheet: "21_Checks",
    purpose: "Centralize all integrity checks from Slices 2 through 6 and provide one model-status row.",
    inputs: ["All workbook tabs"],
    outputs: ["Model status", "ERROR count", "Blocked count", "Check register"],
    validation: ["All known limitations marked Blocked", "No check treats blocked output as OK", "Model status fails if any ERROR exists"],
  },
  {
    sheet: "22_Source_Lineage",
    purpose: "Trace workbook items to source documents, canonical assumption IDs, provisional input IDs, and decision records.",
    inputs: ["Source documents", "02_Assumptions", "03_Assumption_Map", "Provisional input IDs"],
    outputs: ["Workbook item lineage table", "Assumption-to-sheet map", "Decision/source reference map"],
    validation: ["Every material workbook output has a source document", "Every numeric input has an assumption or provisional input ID", "No source row points to the workbook as source of truth"],
  },
];

const slice6DashboardMetrics = [
  "Selected scenario",
  "Active banks",
  "Active employers",
  "Annual successful payroll transactions",
  "Consolidated Core External Revenue",
  "Consolidated Core Contribution Before Blocked Items",
  "Rural Bank Contribution Before Internal Bank Payroll-Support Cost",
  "ODTI Pre-Tax/Pre-Royalty/NetBank-Fee-Blocked Contribution",
  "DevOps Contribution",
  "Optional SMS Increment",
  "Full-Cost Stand-Alone Stress Result",
  "Blocked-input count",
  "ERROR count",
];

const slice6LineageCategories = [
  "Adoption and activation",
  "Payroll activity",
  "Pricing and employer fees",
  "Stakeholder revenue splits",
  "Rural Bank contribution",
  "ODTI contribution",
  "DevOps economics",
  "Optional SMS economics",
  "Consolidated external revenue",
  "Cost classification",
  "Management P&L",
  "Cash-flow limitations",
  "Capital-budgeting gates",
  "Sensitivity grids",
  "Blocked assumptions and exclusions",
];

const slice7ReviewPlan = [
  {
    step: "Runtime dependency confirmation",
    purpose: "Confirm the approved workbook-generation runtime is available before any workbook export is attempted.",
    evidence: ["--exceljs-runtime-check output"],
    gate: "Workbook generation remains blocked if the approved workbook runtime is unavailable.",
  },
  {
    step: "Manifest parity checks",
    purpose: "Confirm all scaffold manifests match the builder before generation or review.",
    evidence: [
      "--manifest-check",
      "--slice-3-manifest-check",
      "--slice-4-manifest-check",
      "--slice-5-manifest-check",
      "--slice-6-manifest-check",
      "--slice-7-manifest-check",
    ],
    gate: "All manifest checks must pass.",
  },
  {
    step: "Workbook generation",
    purpose: "Generate the workbook only through the approved repository-local workbook builder.",
    evidence: [`${defaultWorkbookPath}`],
    gate: "No manual binary workbook editing is permitted.",
  },
  {
    step: "Workbook structural validation",
    purpose: "Open the generated workbook, confirm required sheets, scan formulas, and check blocked-output presentation.",
    evidence: ["workbook validation log", "formula error scan"],
    gate: "Formula-error scan must be clean except explicitly blocked outputs.",
  },
  {
    step: "Canonical parity review",
    purpose: "Compare workbook outputs to the canonical Level 1 Markdown model and five-year summary.",
    evidence: ["parity table", "source-lineage rows"],
    gate: "Core external revenue, contribution, ODTI, DevOps, and SMS sample points must tie.",
  },
  {
    step: "Visual QA",
    purpose: "Render workbook sheets or representative ranges to confirm readability, warnings, and dashboard layout.",
    evidence: ["rendered sheet previews", "visual QA notes"],
    gate: "Warnings, key outputs, source notes, and check statuses must be visible and unclipped.",
  },
  {
    step: "Review ZIP",
    purpose: "Package the workbook, builder, manifests, and design document for review.",
    evidence: ["~/Downloads review ZIP"],
    gate: "Review ZIP must be created in ~/Downloads.",
  },
  {
    step: "Freeze boundary",
    purpose: "Separate generated workbook review from future commercial-documentation changes.",
    evidence: ["git status", "commit boundary note"],
    gate: "No canonical commercial source document changes are hidden inside workbook freeze.",
  },
];

const slice7RequiredArtifacts = [
  defaultWorkbookPath,
  "docs/economics/offerings/rural-bank-payroll-starter/spreadsheet-financial-model.md",
  "scripts/finance/build_payroll_starter_model.mjs",
  "scripts/finance/payroll_starter_slice2_manifest.json",
  "scripts/finance/payroll_starter_slice2_export_manifest.json",
  "scripts/finance/payroll_starter_slice3_manifest.json",
  "scripts/finance/payroll_starter_slice3_export_manifest.json",
  "scripts/finance/payroll_starter_slice4_manifest.json",
  "scripts/finance/payroll_starter_slice5_manifest.json",
  "scripts/finance/payroll_starter_slice6_manifest.json",
  "scripts/finance/payroll_starter_slice7_manifest.json",
  "~/Downloads/x-commerce-payroll-starter-financial-model-review-<date>.zip",
];

const slice7FreezeChecks = [
  "All scaffold manifest validations pass",
  "Workbook generated only through the approved workbook builder",
  "All required sheets exist",
  "Formula-error scan is clean",
  "Dashboard ERROR count is zero except explicitly blocked checks",
  "Canonical parity table ties to Markdown model",
  "Stakeholder revenue remains non-additive",
  "Core Payroll and optional SMS remain separated",
  "Payroll funding remains pass-through",
  "Blocked tax, royalty, NetBank, investor, and partner outputs remain blocked or excluded",
  "Visual QA confirms warnings and key outputs are visible",
  "Review ZIP is placed in ~/Downloads",
  "No generated temporary files or office-suite metadata are committed",
];

const inputs = [
  vectorInput("PI-L1-001", "ADP-001", "Newly onboarded banks during year", {
    Conservative: [2, 3, 4, 4, 5],
    Base: [5, 7, 8, 10, 10],
    Accelerated: [10, 12, 15, 18, 20],
  }),
  vectorInput("PI-L1-002", "ADP-002", "Active banks during year", {
    Conservative: [1, 3, 6, 9, 12],
    Base: [3, 8, 14, 22, 32],
    Accelerated: [7, 16, 28, 42, 60],
  }),
  vectorInput("PI-L1-003", "ADP-003", "Weighted average active months per active bank", {
    Conservative: [4, 6, 7, 8, 8],
    Base: [5, 7, 8, 9, 10],
    Accelerated: [6, 8, 9, 10, 10],
  }),
  scalarInput("PI-L1-004", "CUS-001", "Payroll customers per active bank", {
    Conservative: 2,
    Base: 4,
    Accelerated: 6,
  }),
  scalarInput("PI-L1-005", "CUS-002", "Payroll runs per customer per month", {
    Conservative: 1,
    Base: 2,
    Accelerated: 2,
  }),
  scalarInput("PI-L1-006", "CUS-003", "Recipients per payroll run", {
    Conservative: 20,
    Base: 35,
    Accelerated: 60,
  }),
  scalarInput("PI-L1-007", "VOL-002", "Successful completion rate", {
    Conservative: 0.92,
    Base: 0.96,
    Accelerated: 0.98,
  }),
  derivedInput("PI-L1-008", "VOL-001", "Successful payroll transactions per active bank per month"),
  scalarInput("PI-L1-009", "EMP-001", "Employer onboarding fee", {
    Conservative: 1500,
    Base: 3000,
    Accelerated: 5000,
  }),
  scalarInput("PI-L1-010", "EMP-002", "Employer monthly payroll-service fee", {
    Conservative: 300,
    Base: 750,
    Accelerated: 1250,
  }),
  scalarInput("PI-L1-011", "LIC-004", "Rural-bank platform activation fee", {
    Conservative: 50000,
    Base: 50000,
    Accelerated: 50000,
  }),
  scalarInput("PI-L1-012", "LIC-005", "Annual platform subscription", {
    Conservative: 60000,
    Base: 60000,
    Accelerated: 60000,
  }),
  scalarInput("PI-L1-013", "PRC-001", "Fee per successful recipient disbursement", {
    Conservative: 1.0,
    Base: 1.5,
    Accelerated: 2.0,
  }),
  scalarInput("PI-L1-014", "RB-001", "Rural-bank retained amount per successful recipient disbursement", {
    Conservative: 0.4,
    Base: 0.5,
    Accelerated: 0.6,
  }),
  decisionInput("PI-L1-015", "Decision 0003", "EMP-001 split", {
    Conservative: { ruralBank: 0.4, odti: 0.6 },
    Base: { ruralBank: 0.4, odti: 0.6 },
    Accelerated: { ruralBank: 0.4, odti: 0.6 },
  }),
  decisionInput("PI-L1-016", "Decision 0003", "EMP-002 split", {
    Conservative: { ruralBank: 0.6, odti: 0.4 },
    Base: { ruralBank: 0.6, odti: 0.4 },
    Accelerated: { ruralBank: 0.6, odti: 0.4 },
  }),
  scalarInput("PI-L1-017", "ODTI-001", "Payroll-specific ODTI support cost per active bank-month", {
    Conservative: 3000,
    Base: 2500,
    Accelerated: 2000,
  }),
  scalarInput("PI-L1-018", "ODTI-002", "Payroll-specific ODTI implementation cost per newly onboarded bank", {
    Conservative: 20000,
    Base: 15000,
    Accelerated: 12000,
  }),
  scalarInput("PI-L1-019", "OPS-001", "DevOps setup fee per bank deployment", {
    Conservative: 50000,
    Base: 50000,
    Accelerated: 50000,
  }),
  scalarInput("PI-L1-020", "OPS-002", "DevOps monthly managed operations fee per active bank-month", {
    Conservative: 10000,
    Base: 10000,
    Accelerated: 10000,
  }),
  scalarInput("PI-L1-021", "OPS-003", "DevOps direct recurring cost per active bank-month", {
    Conservative: 8000,
    Base: 6000,
    Accelerated: 5000,
  }),
  scalarInput("PI-L1-022", "CLD-001", "Public-cloud cost per active bank-month", {
    Conservative: 4000,
    Base: 3000,
    Accelerated: 2500,
  }),
  scalarInput("PI-L1-023", "RISK-002", "Non-collection rate on employer commercial fees", {
    Conservative: 0.05,
    Base: 0.02,
    Accelerated: 0.01,
  }),
  scalarInput("PI-L1-024", "ATT-001", "SMS attachment rate", {
    Conservative: 0.25,
    Base: 0.5,
    Accelerated: 0.7,
  }),
  scalarInput("PI-L1-025", "VAS-001", "Customer-facing SMS price", {
    Conservative: 1,
    Base: 1,
    Accelerated: 1,
  }),
  scalarInput("PI-L1-026", "CST-001", "SMS wholesale provider price", {
    Conservative: 0.7,
    Base: 0.5,
    Accelerated: 0.4,
  }),
  scalarInput("PI-L1-027", "SMS-001", "SMS delivery success rate", {
    Conservative: 0.9,
    Base: 0.95,
    Accelerated: 0.97,
  }),
  textInput("PI-L1-028", "SMS-003", "Failed-message treatment", "Delivered-only billing; failed attempts excluded"),
  textInput("PI-L1-029", "SMS-004", "Privacy and consent readiness", "Internal modeling only; no external SMS use until privacy review"),
  textInput("PI-L1-030", "Decision 0003", "SMS margin split", "Rural Bank retains gross SMS margin; ODTI markup is 0"),
];

const blockedInputs = [
  ["TAX-001", "Blocked. No tax-adjusted results are produced."],
  ["ROY-001", "Blocked. No 3neti royalty revenue or ODTI post-royalty contribution is produced."],
  ["NET-001", "Blocked. No NetBank fee-adjusted results are produced."],
  ["NET-002", "Blocked. No NetBank cost or contribution view is produced."],
  ["PAR-001", "Excluded. No business-development partner allocation is included."],
  ["RB-002", "Blocked. Rural Bank true incremental contribution after internal bank payroll-support cost is not produced."],
  ["SMS-002", "Excluded. SMS provider internal margin is not calculated."],
  ["BAT-001", "Deferred. No payroll batch fee is included."],
  ["ALLOC-001", "Deferred until shared platform allocation is mature enough to govern."],
  ["ALLOC-002", "Deferred until shared platform allocation is mature enough to govern."],
  ["PLT-001", "Deferred until shared platform allocation is mature enough to govern."],
];

const canonicalActivity = {
  Conservative: {
    vol001: 36.8,
    annualTransactions: [147.2, 662.4, 1545.6, 2649.6, 3532.8],
  },
  Base: {
    vol001: 268.8,
    annualTransactions: [4032.0, 15052.8, 30105.6, 53222.4, 86016.0],
  },
  Accelerated: {
    vol001: 705.6,
    annualTransactions: [29635.2, 90316.8, 177811.2, 296352.0, 423360.0],
  },
};

const canonicalSlice3Samples = {
  Conservative: {
    "Year 1": {
      coreExternalRevenue: 8547.2,
      ruralBankCoreRevenue: 3703.94,
      odtiCoreRevenue: 124415.9,
      devOpsRevenue: 140000,
      consolidatedCoreContribution: -43880.16,
      smsMargin: 8.28,
    },
    "Year 5": {
      coreExternalRevenue: 76132.8,
      ruralBankCoreRevenue: 39874.46,
      odtiCoreRevenue: 762451.7,
      devOpsRevenue: 1210000,
      consolidatedCoreContribution: -315673.84,
      smsMargin: 198.72,
    },
  },
  Base: {
    "Year 1": {
      coreExternalRevenue: 111048,
      ruralBankCoreRevenue: 51955.68,
      odtiCoreRevenue: 381871.36,
      devOpsRevenue: 400000,
      consolidatedCoreContribution: -3672.96,
      smsMargin: 919.3,
    },
    "Year 5": {
      coreExternalRevenue: 1209024,
      ruralBankCoreRevenue: 653667.84,
      odtiCoreRevenue: 2631175.68,
      devOpsRevenue: 3700000,
      consolidatedCoreContribution: 234843.52,
      smsMargin: 19611.65,
    },
  },
  Accelerated: {
    "Year 1": {
      coreExternalRevenue: 674270.4,
      ruralBankCoreRevenue: 323513.31,
      odtiCoreRevenue: 1054014.39,
      devOpsRevenue: 920000,
      consolidatedCoreContribution: 463527.7,
      smsMargin: 11872.16,
    },
    "Year 5": {
      coreExternalRevenue: 5946720,
      ruralBankCoreRevenue: 3162075.84,
      odtiCoreRevenue: 6725176.96,
      devOpsRevenue: 7000000,
      consolidatedCoreContribution: 4447252.8,
      smsMargin: 169602.25,
    },
  },
};

function scalarInput(provisionalInputId, assumptionId, description, values) {
  return {
    provisionalInputId,
    assumptionId,
    description,
    inputType: "scalar",
    values,
    source: sourceDocuments.provisionalInputs,
  };
}

function vectorInput(provisionalInputId, assumptionId, description, values) {
  return {
    provisionalInputId,
    assumptionId,
    description,
    inputType: "yearVector",
    values,
    source: sourceDocuments.provisionalInputs,
  };
}

function derivedInput(provisionalInputId, assumptionId, description) {
  return {
    provisionalInputId,
    assumptionId,
    description,
    inputType: "derived",
    formula: "CUS-001 x CUS-002 x CUS-003 x VOL-002",
    source: sourceDocuments.provisionalInputs,
  };
}

function decisionInput(provisionalInputId, assumptionId, description, values) {
  return {
    provisionalInputId,
    assumptionId,
    description,
    inputType: "decision",
    values,
    source: "docs/decisions/0003-payroll-starter-economic-treatment.md",
  };
}

function textInput(provisionalInputId, assumptionId, description, value) {
  return {
    provisionalInputId,
    assumptionId,
    description,
    inputType: "text",
    values: Object.fromEntries(scenarios.map((scenario) => [scenario, value])),
    source: sourceDocuments.provisionalInputs,
  };
}

function valueFor(assumptionId, scenario) {
  const input = inputs.find((item) => item.assumptionId === assumptionId);
  if (!input) {
    throw new Error(`Missing input for ${assumptionId}`);
  }
  return input.values[scenario];
}

function valueForProvisionalInput(provisionalInputId, scenario) {
  const input = inputs.find((item) => item.provisionalInputId === provisionalInputId);
  if (!input) {
    throw new Error(`Missing provisional input ${provisionalInputId}`);
  }
  return input.values[scenario];
}

function vectorFor(assumptionId, scenario) {
  const value = valueFor(assumptionId, scenario);
  if (!Array.isArray(value)) {
    throw new Error(`${assumptionId} is not a year vector`);
  }
  return value;
}

function deriveVol001(scenario) {
  return (
    valueFor("CUS-001", scenario) *
    valueFor("CUS-002", scenario) *
    valueFor("CUS-003", scenario) *
    valueFor("VOL-002", scenario)
  );
}

function annualSuccessfulTransactions(scenario) {
  const activeBanks = vectorFor("ADP-002", scenario);
  const weightedMonths = vectorFor("ADP-003", scenario);
  const vol001 = deriveVol001(scenario);
  return years.map((_, index) => activeBanks[index] * weightedMonths[index] * vol001);
}

function roundCurrency(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function slice3Metrics(scenario, yearIndex) {
  const newBanks = vectorFor("ADP-001", scenario)[yearIndex];
  const activeBanks = vectorFor("ADP-002", scenario)[yearIndex];
  const activeMonths = vectorFor("ADP-003", scenario)[yearIndex];
  const customersPerBank = valueFor("CUS-001", scenario);
  const newlyOnboardedEmployers = newBanks * customersPerBank;
  const activeEmployers = activeBanks * customersPerBank;
  const transactions = annualSuccessfulTransactions(scenario)[yearIndex];
  const collectionFactor = 1 - valueFor("RISK-002", scenario);
  const employerOnboardingFee = valueFor("EMP-001", scenario);
  const employerMonthlyFee = valueFor("EMP-002", scenario);
  const recipientFee = valueFor("PRC-001", scenario);
  const ruralBankRetention = valueFor("RB-001", scenario);
  const onboardingSplit = valueForProvisionalInput("PI-L1-015", scenario);
  const monthlySplit = valueForProvisionalInput("PI-L1-016", scenario);

  const employerOnboardingRevenue = newlyOnboardedEmployers * employerOnboardingFee;
  const employerMonthlyRevenue = activeEmployers * activeMonths * employerMonthlyFee;
  const recipientFeeRevenue = transactions * recipientFee;
  const coreExternalRevenue = employerOnboardingRevenue + employerMonthlyRevenue + recipientFeeRevenue;

  const ruralBankCoreBeforeCollection =
    employerOnboardingRevenue * onboardingSplit.ruralBank +
    employerMonthlyRevenue * monthlySplit.ruralBank +
    transactions * ruralBankRetention;
  const ruralBankCoreRevenue = ruralBankCoreBeforeCollection * collectionFactor;

  const odtiEmployerAndTransactionRevenue =
    employerOnboardingRevenue * onboardingSplit.odti +
    employerMonthlyRevenue * monthlySplit.odti +
    transactions * (recipientFee - ruralBankRetention);
  const odtiCoreRevenue =
    newBanks * valueFor("LIC-004", scenario) +
    (activeBanks * activeMonths * valueFor("LIC-005", scenario)) / 12 +
    odtiEmployerAndTransactionRevenue * collectionFactor;

  const devOpsRevenue = newBanks * valueFor("OPS-001", scenario) + activeBanks * activeMonths * valueFor("OPS-002", scenario);
  const odtiPayrollSpecificCost =
    newBanks * valueFor("ODTI-002", scenario) + activeBanks * activeMonths * valueFor("ODTI-001", scenario);
  const odtiContribution = odtiCoreRevenue - odtiPayrollSpecificCost;
  const devOpsContribution = devOpsRevenue - activeBanks * activeMonths * valueFor("OPS-003", scenario);
  const consolidatedCoreContribution = coreExternalRevenue * collectionFactor - odtiPayrollSpecificCost;

  const smsDeliveredTransactions = transactions * valueFor("ATT-001", scenario) * valueFor("SMS-001", scenario);
  const smsCustomerRevenue = smsDeliveredTransactions * valueFor("VAS-001", scenario);
  const smsCollectedRevenue = smsCustomerRevenue * collectionFactor;
  const smsWholesaleCost = smsDeliveredTransactions * valueFor("CST-001", scenario);
  const smsMargin = smsCollectedRevenue - smsWholesaleCost;

  return {
    coreExternalRevenue: roundCurrency(coreExternalRevenue),
    ruralBankCoreRevenue: roundCurrency(ruralBankCoreRevenue),
    odtiCoreRevenue: roundCurrency(odtiCoreRevenue),
    devOpsRevenue: roundCurrency(devOpsRevenue),
    odtiContribution: roundCurrency(odtiContribution),
    devOpsContribution: roundCurrency(devOpsContribution),
    consolidatedCoreContribution: roundCurrency(consolidatedCoreContribution),
    smsDeliveredTransactions: roundCurrency(smsDeliveredTransactions),
    smsCustomerRevenue: roundCurrency(smsCustomerRevenue),
    smsCollectedRevenue: roundCurrency(smsCollectedRevenue),
    smsWholesaleCost: roundCurrency(smsWholesaleCost),
    smsMargin: roundCurrency(smsMargin),
    combinedExternalRevenue: roundCurrency(coreExternalRevenue + smsCustomerRevenue),
    combinedConsolidatedContribution: roundCurrency(consolidatedCoreContribution + smsMargin),
  };
}

function cumulative(values) {
  let running = 0;
  return values.map((value) => {
    running += value;
    return running;
  });
}

function nearlyEqual(a, b, tolerance = 0.000001) {
  return Math.abs(a - b) <= tolerance;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function runStructuralValidation() {
  const provisionalIds = new Set();
  for (const input of inputs) {
    assert(!provisionalIds.has(input.provisionalInputId), `Duplicate provisional input ID ${input.provisionalInputId}`);
    provisionalIds.add(input.provisionalInputId);
  }

  for (const scenario of scenarios) {
    const newBanks = vectorFor("ADP-001", scenario);
    const activeBanks = vectorFor("ADP-002", scenario);
    const cumulativeBanks = cumulative(newBanks);
    const weightedMonths = vectorFor("ADP-003", scenario);
    const vol001 = deriveVol001(scenario);

    assert(
      nearlyEqual(vol001, canonicalActivity[scenario].vol001),
      `${scenario} VOL-001 parity failed: ${vol001} != ${canonicalActivity[scenario].vol001}`,
    );

    for (const [index, year] of years.entries()) {
      assert(
        activeBanks[index] <= cumulativeBanks[index],
        `${scenario} ${year}: active banks exceed cumulative onboarded banks`,
      );
      assert(
        weightedMonths[index] >= 0 && weightedMonths[index] <= 12,
        `${scenario} ${year}: weighted active months outside 0-12`,
      );
    }

    const annualTransactions = annualSuccessfulTransactions(scenario);
    for (const [index, expected] of canonicalActivity[scenario].annualTransactions.entries()) {
      assert(
        nearlyEqual(annualTransactions[index], expected),
        `${scenario} ${years[index]} annual transaction parity failed: ${annualTransactions[index]} != ${expected}`,
      );
    }

    assert(
      valueFor("RB-001", scenario) <= valueFor("PRC-001", scenario),
      `${scenario}: Rural Bank retained amount exceeds recipient fee`,
    );

    const onboardingSplit = valueForProvisionalInput("PI-L1-015", scenario);
    const monthlyServiceSplit = valueForProvisionalInput("PI-L1-016", scenario);
    assert(
      nearlyEqual(onboardingSplit.ruralBank + onboardingSplit.odti, 1),
      `${scenario}: EMP-001 split does not sum to 100%`,
    );
    assert(
      nearlyEqual(monthlyServiceSplit.ruralBank + monthlyServiceSplit.odti, 1),
      `${scenario}: EMP-002 split does not sum to 100%`,
    );
  }

  return {
    scenarios: scenarios.length,
    years: years.length,
    inputs: inputs.length,
    blockedInputs: blockedInputs.length,
    sheets: workbookSheets.length,
  };
}

function runSlice2ScaffoldValidation() {
  const structural = runStructuralValidation();
  const plannedSheetNames = new Set(workbookSheets);
  const slice2Names = new Set(slice2Sheets);

  for (const sheetName of slice2Sheets) {
    assert(plannedSheetNames.has(sheetName), `Slice 2 sheet ${sheetName} is not in workbook sheet order`);
  }

  for (const plan of slice2SheetPlan) {
    assert(slice2Names.has(plan.sheet), `Sheet plan contains non-Slice 2 sheet ${plan.sheet}`);
    assert(plan.purpose.length > 0, `${plan.sheet} is missing a purpose`);
    assert(plan.outputs.length > 0, `${plan.sheet} is missing outputs`);
    assert(plan.validation.length > 0, `${plan.sheet} is missing validations`);
  }

  assert(
    slice2SheetPlan.length === slice2Sheets.length,
    `Slice 2 sheet plan count ${slice2SheetPlan.length} does not match Slice 2 sheet count ${slice2Sheets.length}`,
  );

  return {
    ...structural,
    slice2Sheets: slice2Sheets.length,
  };
}

function runSlice2ExportScaffoldValidation() {
  const structural = runSlice2ScaffoldValidation();
  const slice2Names = new Set(slice2Sheets);

  assert(
    slice2ExportPlan.length === slice2Sheets.length,
    `Slice 2 export plan count ${slice2ExportPlan.length} does not match Slice 2 sheet count ${slice2Sheets.length}`,
  );

  for (const plan of slice2ExportPlan) {
    assert(slice2Names.has(plan.sheet), `Slice 2 export plan contains non-Slice 2 sheet ${plan.sheet}`);
    assert(plan.tableAnchor.length > 0, `${plan.sheet} is missing a table anchor`);
    assert(plan.layout.length > 0, `${plan.sheet} is missing layout guidance`);
    assert(plan.formulaResponsibilities.length > 0, `${plan.sheet} is missing formula responsibilities`);
    assert(plan.formatting.length > 0, `${plan.sheet} is missing formatting guidance`);
    assert(plan.validation.length > 0, `${plan.sheet} is missing validation requirements`);
  }

  assert(
    slice2FormulaBlueprints.some((formula) => formula.includes("VOL-001 must equal CUS-001")),
    "Slice 2 formula blueprint must preserve component-derived VOL-001",
  );
  assert(
    slice2FormulaBlueprints.some((formula) => formula.includes("Annual successful payroll transactions")),
    "Slice 2 formula blueprint must include annual activity derivation",
  );
  assert(
    slice2NamedRangeStrategy.some(([name]) => name === "ScenarioSelected"),
    "Slice 2 named-range strategy must include ScenarioSelected",
  );
  assert(
    slice2VisualQaTargets.includes("21_Checks!A1:F20"),
    "Slice 2 visual QA targets must include 21_Checks",
  );

  return {
    ...structural,
    exportPlanRows: slice2ExportPlan.length,
    namedRanges: slice2NamedRangeStrategy.length,
    formulaBlueprints: slice2FormulaBlueprints.length,
    visualQaTargets: slice2VisualQaTargets.length,
  };
}

function runSlice3ScaffoldValidation() {
  const structural = runSlice2ScaffoldValidation();
  const plannedSheetNames = new Set(workbookSheets);
  const slice3Names = new Set(slice3Sheets);

  for (const sheetName of slice3Sheets) {
    assert(plannedSheetNames.has(sheetName), `Slice 3 sheet ${sheetName} is not in workbook sheet order`);
  }

  for (const plan of slice3SheetPlan) {
    assert(slice3Names.has(plan.sheet), `Sheet plan contains non-Slice 3 sheet ${plan.sheet}`);
    assert(plan.purpose.length > 0, `${plan.sheet} is missing a purpose`);
    assert(plan.outputs.length > 0, `${plan.sheet} is missing outputs`);
    assert(plan.validation.length > 0, `${plan.sheet} is missing validations`);
  }

  assert(
    slice3SheetPlan.length === slice3Sheets.length,
    `Slice 3 sheet plan count ${slice3SheetPlan.length} does not match Slice 3 sheet count ${slice3Sheets.length}`,
  );

  for (const scenario of scenarios) {
    for (const [yearLabel, expected] of Object.entries(canonicalSlice3Samples[scenario])) {
      const yearIndex = years.indexOf(yearLabel);
      const actual = slice3Metrics(scenario, yearIndex);
      for (const [metric, expectedValue] of Object.entries(expected)) {
        assert(
          nearlyEqual(actual[metric], expectedValue, 0.01),
          `${scenario} ${yearLabel} ${metric} parity failed: ${actual[metric]} != ${expectedValue}`,
        );
      }
    }
  }

  return {
    ...structural,
    slice3Sheets: slice3Sheets.length,
    paritySamples: Object.values(canonicalSlice3Samples).reduce((total, scenario) => total + Object.keys(scenario).length, 0),
  };
}

function runSlice3ExportScaffoldValidation() {
  const structural = runSlice3ScaffoldValidation();
  const slice3Names = new Set(slice3Sheets);

  assert(
    slice3ExportPlan.length === slice3Sheets.length,
    `Slice 3 export plan count ${slice3ExportPlan.length} does not match Slice 3 sheet count ${slice3Sheets.length}`,
  );

  for (const plan of slice3ExportPlan) {
    assert(slice3Names.has(plan.sheet), `Slice 3 export plan contains non-Slice 3 sheet ${plan.sheet}`);
    assert(plan.tableAnchor.length > 0, `${plan.sheet} is missing a table anchor`);
    assert(plan.layout.length > 0, `${plan.sheet} is missing layout guidance`);
    assert(plan.formulaResponsibilities.length > 0, `${plan.sheet} is missing formula responsibilities`);
    assert(plan.validation.length > 0, `${plan.sheet} is missing validation requirements`);
  }

  for (const dependency of slice3WorkbookDependencies) {
    assert(slice2Sheets.includes(dependency), `Slice 3 dependency ${dependency} is not produced by Slice 2`);
  }

  assert(
    slice3FormulaBlueprints.some((formula) => formula.includes("Core external revenue")),
    "Slice 3 formula blueprints must include core external revenue",
  );
  assert(
    slice3FormulaBlueprints.some((formula) => formula.includes("SMS margin")),
    "Slice 3 formula blueprints must include SMS margin",
  );
  assert(
    slice3FormulaBlueprints.some((formula) => formula.includes("internal transfers")),
    "Slice 3 formula blueprints must include internal-transfer elimination",
  );
  assert(
    slice3VisualQaTargets.includes("14_Consolidated_View!A1:H35"),
    "Slice 3 visual QA targets must include consolidated view",
  );

  return {
    ...structural,
    exportPlanRows: slice3ExportPlan.length,
    formulaBlueprints: slice3FormulaBlueprints.length,
    workbookDependencies: slice3WorkbookDependencies.length,
    visualQaTargets: slice3VisualQaTargets.length,
  };
}

function runSlice4ScaffoldValidation() {
  const structural = runSlice3ScaffoldValidation();
  const plannedSheetNames = new Set(workbookSheets);
  const slice4Names = new Set(slice4Sheets);

  for (const sheetName of slice4Sheets) {
    assert(plannedSheetNames.has(sheetName), `Slice 4 sheet ${sheetName} is not in workbook sheet order`);
  }

  for (const plan of slice4SheetPlan) {
    assert(slice4Names.has(plan.sheet), `Sheet plan contains non-Slice 4 sheet ${plan.sheet}`);
    assert(plan.purpose.length > 0, `${plan.sheet} is missing a purpose`);
    assert(plan.inputs.length > 0, `${plan.sheet} is missing inputs`);
    assert(plan.outputs.length > 0, `${plan.sheet} is missing outputs`);
    assert(plan.validation.length > 0, `${plan.sheet} is missing validations`);
  }

  assert(
    slice4SheetPlan.length === slice4Sheets.length,
    `Slice 4 sheet plan count ${slice4SheetPlan.length} does not match Slice 4 sheet count ${slice4Sheets.length}`,
  );

  assert(
    slice4BlockedOutputs.includes("Tax-adjusted net income"),
    "Slice 4 blocked outputs must include tax-adjusted net income",
  );
  assert(
    slice4BlockedOutputs.includes("Ending cash"),
    "Slice 4 blocked outputs must include ending cash",
  );
  assert(
    slice4BlockedOutputs.includes("NPV and IRR"),
    "Slice 4 blocked outputs must keep NPV and IRR out of cash-flow slice",
  );

  return {
    ...structural,
    slice4Sheets: slice4Sheets.length,
    blockedOutputs: slice4BlockedOutputs.length,
  };
}

function runSlice5ScaffoldValidation() {
  const structural = runSlice4ScaffoldValidation();
  const plannedSheetNames = new Set(workbookSheets);
  const slice5Names = new Set(slice5Sheets);

  for (const sheetName of slice5Sheets) {
    assert(plannedSheetNames.has(sheetName), `Slice 5 sheet ${sheetName} is not in workbook sheet order`);
  }

  for (const plan of slice5SheetPlan) {
    assert(slice5Names.has(plan.sheet), `Sheet plan contains non-Slice 5 sheet ${plan.sheet}`);
    assert(plan.purpose.length > 0, `${plan.sheet} is missing a purpose`);
    assert(plan.inputs.length > 0, `${plan.sheet} is missing inputs`);
    assert(plan.outputs.length > 0, `${plan.sheet} is missing outputs`);
    assert(plan.validation.length > 0, `${plan.sheet} is missing validations`);
  }

  assert(
    slice5SheetPlan.length === slice5Sheets.length,
    `Slice 5 sheet plan count ${slice5SheetPlan.length} does not match Slice 5 sheet count ${slice5Sheets.length}`,
  );

  assert(slice5Prerequisites.includes("Discount-rate assumption FIN-001 or equivalent"), "Slice 5 must require a discount-rate prerequisite");
  assert(slice5BlockedOutputs.includes("Rural Bank NPV"), "Slice 5 blocked outputs must include Rural Bank NPV");
  assert(slice5BlockedOutputs.includes("Discount-rate sensitivity"), "Slice 5 blocked outputs must include discount-rate sensitivity");

  return {
    ...structural,
    slice5Sheets: slice5Sheets.length,
    prerequisites: slice5Prerequisites.length,
    blockedOutputs: slice5BlockedOutputs.length,
  };
}

function runSlice6ScaffoldValidation() {
  const structural = runSlice5ScaffoldValidation();
  const plannedSheetNames = new Set(workbookSheets);
  const slice6Names = new Set(slice6Sheets);

  for (const sheetName of slice6Sheets) {
    assert(plannedSheetNames.has(sheetName), `Slice 6 sheet ${sheetName} is not in workbook sheet order`);
  }

  for (const plan of slice6SheetPlan) {
    assert(slice6Names.has(plan.sheet), `Sheet plan contains non-Slice 6 sheet ${plan.sheet}`);
    assert(plan.purpose.length > 0, `${plan.sheet} is missing a purpose`);
    assert(plan.inputs.length > 0, `${plan.sheet} is missing inputs`);
    assert(plan.outputs.length > 0, `${plan.sheet} is missing outputs`);
    assert(plan.validation.length > 0, `${plan.sheet} is missing validations`);
  }

  assert(
    slice6SheetPlan.length === slice6Sheets.length,
    `Slice 6 sheet plan count ${slice6SheetPlan.length} does not match Slice 6 sheet count ${slice6Sheets.length}`,
  );

  assert(slice6DashboardMetrics.includes("ERROR count"), "Slice 6 dashboard metrics must surface ERROR count");
  assert(
    slice6DashboardMetrics.includes("Consolidated Core External Revenue"),
    "Slice 6 dashboard metrics must include consolidated core external revenue",
  );
  assert(
    slice6LineageCategories.includes("Blocked assumptions and exclusions"),
    "Slice 6 lineage categories must include blocked assumptions and exclusions",
  );

  return {
    ...structural,
    slice6Sheets: slice6Sheets.length,
    dashboardMetrics: slice6DashboardMetrics.length,
    lineageCategories: slice6LineageCategories.length,
  };
}

function runSlice7ScaffoldValidation() {
  const structural = runSlice6ScaffoldValidation();

  assert(slice7ReviewPlan.length >= 8, "Slice 7 review plan must cover the full review and freeze gate");
  assert(
    slice7ReviewPlan.some((item) => item.step === "Runtime dependency confirmation"),
    "Slice 7 must include runtime dependency confirmation",
  );
  assert(
    slice7ReviewPlan.some((item) => item.step === "Canonical parity review"),
    "Slice 7 must include canonical parity review",
  );
  assert(
    slice7ReviewPlan.some((item) => item.step === "Visual QA"),
    "Slice 7 must include visual QA",
  );
  assert(
    slice7RequiredArtifacts.includes(defaultWorkbookPath),
    "Slice 7 required artifacts must include the generated workbook",
  );
  assert(
    slice7RequiredArtifacts.includes("scripts/finance/payroll_starter_slice7_manifest.json"),
    "Slice 7 required artifacts must include the Slice 7 manifest",
  );
  assert(
    slice7RequiredArtifacts.some((artifact) => artifact.startsWith("~/Downloads/")),
    "Slice 7 required artifacts must include a review ZIP in ~/Downloads",
  );
  assert(
    slice7FreezeChecks.includes("Workbook generated only through the approved workbook builder"),
    "Slice 7 freeze checks must require the approved workbook builder",
  );
  assert(
    slice7FreezeChecks.includes("Canonical parity table ties to Markdown model"),
    "Slice 7 freeze checks must require canonical parity",
  );

  return {
    ...structural,
    reviewSteps: slice7ReviewPlan.length,
    requiredArtifacts: slice7RequiredArtifacts.length,
    freezeChecks: slice7FreezeChecks.length,
  };
}



function printDryRunSummary() {
  const result = runStructuralValidation();
  console.log("Payroll Starter workbook scaffold validation: OK");
  console.log(`Scenarios: ${result.scenarios}`);
  console.log(`Years: ${result.years}`);
  console.log(`Level 1 input records: ${result.inputs}`);
  console.log(`Blocked/excluded records: ${result.blockedInputs}`);
  console.log(`Planned sheets: ${result.sheets}`);
  console.log("Workbook export is available through the approved builder path, including --build-slice-7-exceljs for the full review workbook.");
}

function printSlice2Plan() {
  const result = runSlice2ScaffoldValidation();
  console.log("Payroll Starter Slice 2 scaffold validation: OK");
  console.log(`Planned Slice 2 sheets: ${result.slice2Sheets}`);
  console.log(`Level 1 input records: ${result.inputs}`);
  console.log(`Blocked/excluded records: ${result.blockedInputs}`);
  console.log("");
  for (const plan of slice2SheetPlan) {
    console.log(`${plan.sheet}: ${plan.purpose}`);
    console.log(`  Inputs: ${plan.inputs.length > 0 ? plan.inputs.join(", ") : "None"}`);
    console.log(`  Outputs: ${plan.outputs.join("; ")}`);
    console.log(`  Validations: ${plan.validation.join("; ")}`);
  }
  console.log("");
  console.log("Workbook export is available through --build-slice-2-exceljs and later slice build commands.");
}

function printSlice2ExportPlan() {
  const result = runSlice2ExportScaffoldValidation();
  console.log("Payroll Starter Slice 2 export scaffold validation: OK");
  console.log(`Export sheet layouts: ${result.exportPlanRows}`);
  console.log(`Named-range strategy rows: ${result.namedRanges}`);
  console.log(`Formula blueprints: ${result.formulaBlueprints}`);
  console.log(`Visual QA targets: ${result.visualQaTargets}`);
  console.log("");
  for (const plan of slice2ExportPlan) {
    console.log(`${plan.sheet} @ ${plan.tableAnchor}: ${plan.layout}`);
    console.log(`  Formula responsibilities: ${plan.formulaResponsibilities.join("; ")}`);
    console.log(`  Formatting: ${plan.formatting.join("; ")}`);
    console.log(`  Validations: ${plan.validation.join("; ")}`);
  }
  console.log("");
  console.log("This export scaffold can be rendered through the approved repo-local exceljs path when the artifact runtime is unavailable.");
}

function printSlice3Plan() {
  const result = runSlice3ScaffoldValidation();
  console.log("Payroll Starter Slice 3 scaffold validation: OK");
  console.log(`Planned Slice 3 sheets: ${result.slice3Sheets}`);
  console.log(`Canonical parity sample points: ${result.paritySamples}`);
  console.log(`Level 1 input records: ${result.inputs}`);
  console.log(`Blocked/excluded records: ${result.blockedInputs}`);
  console.log("");
  for (const plan of slice3SheetPlan) {
    console.log(`${plan.sheet}: ${plan.purpose}`);
    console.log(`  Inputs: ${plan.inputs.join(", ")}`);
    console.log(`  Outputs: ${plan.outputs.join("; ")}`);
    console.log(`  Validations: ${plan.validation.join("; ")}`);
  }
  console.log("");
  console.log("Slice 3 is available as an exceljs workbook expansion with --build-slice-3-exceljs and --validate-slice-3-exceljs.");
}

function printSlice3ExportPlan() {
  const result = runSlice3ExportScaffoldValidation();
  console.log("Payroll Starter Slice 3 export scaffold validation: OK");
  console.log(`Export sheet layouts: ${result.exportPlanRows}`);
  console.log(`Formula blueprints: ${result.formulaBlueprints}`);
  console.log(`Workbook dependencies: ${result.workbookDependencies}`);
  console.log(`Visual QA targets: ${result.visualQaTargets}`);
  console.log(`Canonical parity sample points: ${result.paritySamples}`);
  console.log("");
  for (const plan of slice3ExportPlan) {
    console.log(`${plan.sheet} @ ${plan.tableAnchor}: ${plan.layout}`);
    console.log(`  Formula responsibilities: ${plan.formulaResponsibilities.join("; ")}`);
    console.log(`  Validations: ${plan.validation.join("; ")}`);
  }
  console.log("");
  console.log("This is the Slice 3 export scaffold. The next implementation step should extend the ExcelJS workbook generator.");
}

function printSlice4Plan() {
  const result = runSlice4ScaffoldValidation();
  console.log("Payroll Starter Slice 4 scaffold validation: OK");
  console.log(`Planned Slice 4 sheets: ${result.slice4Sheets}`);
  console.log(`Blocked outputs preserved: ${result.blockedOutputs}`);
  console.log(`Level 1 input records: ${result.inputs}`);
  console.log(`Blocked/excluded records: ${result.blockedInputs}`);
  console.log("");
  for (const plan of slice4SheetPlan) {
    console.log(`${plan.sheet}: ${plan.purpose}`);
    console.log(`  Inputs: ${plan.inputs.join(", ")}`);
    console.log(`  Outputs: ${plan.outputs.join("; ")}`);
    console.log(`  Validations: ${plan.validation.join("; ")}`);
  }
  console.log("");
  console.log("Slice 4 is available as an exceljs workbook expansion with --build-slice-4-exceljs and --validate-slice-4-exceljs.");
}

function printSlice5Plan() {
  const result = runSlice5ScaffoldValidation();
  console.log("Payroll Starter Slice 5 scaffold validation: OK");
  console.log(`Planned Slice 5 sheets: ${result.slice5Sheets}`);
  console.log(`Capital-budgeting prerequisites: ${result.prerequisites}`);
  console.log(`Blocked return outputs preserved: ${result.blockedOutputs}`);
  console.log(`Level 1 input records: ${result.inputs}`);
  console.log(`Blocked/excluded records: ${result.blockedInputs}`);
  console.log("");
  for (const plan of slice5SheetPlan) {
    console.log(`${plan.sheet}: ${plan.purpose}`);
    console.log(`  Inputs: ${plan.inputs.join(", ")}`);
    console.log(`  Outputs: ${plan.outputs.join("; ")}`);
    console.log(`  Validations: ${plan.validation.join("; ")}`);
  }
  console.log("");
  console.log("Slice 5 is available as an exceljs workbook expansion with --build-slice-5-exceljs and --validate-slice-5-exceljs.");
}

function printSlice6Plan() {
  const result = runSlice6ScaffoldValidation();
  console.log("Payroll Starter Slice 6 scaffold validation: OK");
  console.log(`Planned Slice 6 sheets: ${result.slice6Sheets}`);
  console.log(`Dashboard metrics: ${result.dashboardMetrics}`);
  console.log(`Lineage categories: ${result.lineageCategories}`);
  console.log(`Level 1 input records: ${result.inputs}`);
  console.log(`Blocked/excluded records: ${result.blockedInputs}`);
  console.log("");
  for (const plan of slice6SheetPlan) {
    console.log(`${plan.sheet}: ${plan.purpose}`);
    console.log(`  Inputs: ${plan.inputs.join(", ")}`);
    console.log(`  Outputs: ${plan.outputs.join("; ")}`);
    console.log(`  Validations: ${plan.validation.join("; ")}`);
  }
  console.log("");
  console.log("Slice 6 is available as an exceljs workbook expansion with --build-slice-6-exceljs and --validate-slice-6-exceljs.");
}

function printSlice7Plan() {
  const result = runSlice7ScaffoldValidation();
  console.log("Payroll Starter Slice 7 scaffold validation: OK");
  console.log(`Review/freeze steps: ${result.reviewSteps}`);
  console.log(`Required artifacts: ${result.requiredArtifacts}`);
  console.log(`Freeze checks: ${result.freezeChecks}`);
  console.log(`Planned workbook output: ${defaultWorkbookPath}`);
  console.log("");
  for (const item of slice7ReviewPlan) {
    console.log(`${item.step}: ${item.purpose}`);
    console.log(`  Evidence: ${item.evidence.join("; ")}`);
    console.log(`  Gate: ${item.gate}`);
  }
  console.log("");
  console.log("Slice 7 is a review/freeze gate. It is available through --build-slice-7-exceljs and --validate-slice-7-exceljs.");
}



async function loadSlice3Manifest() {
  const manifestText = await fs.readFile(slice3ManifestPath, "utf8");
  return JSON.parse(manifestText);
}

async function validateSlice3Manifest() {
  const manifest = await loadSlice3Manifest();
  runSlice3ScaffoldValidation();

  assert(manifest.model.offering === "OFR-RB-PAYROLL-STARTER", "Slice 3 manifest offering mismatch");
  assert(manifest.output.workbook === defaultWorkbookPath, "Slice 3 manifest workbook output path mismatch");
  assert(manifest.output.builder === "scripts/finance/build_payroll_starter_model.mjs", "Slice 3 manifest builder path mismatch");

  for (const sheetName of slice3Sheets) {
    assert(manifest.slice3Sheets.includes(sheetName), `Slice 3 manifest missing sheet ${sheetName}`);
  }
  assert(
    manifest.slice3Sheets.length === slice3Sheets.length,
    `Manifest Slice 3 sheet count ${manifest.slice3Sheets.length} does not match builder count ${slice3Sheets.length}`,
  );

  for (const [scenario, scenarioSamples] of Object.entries(canonicalSlice3Samples)) {
    const manifestScenario = manifest.canonicalParitySamples[scenario];
    assert(manifestScenario, `Slice 3 manifest missing parity samples for ${scenario}`);
    for (const [yearLabel, expected] of Object.entries(scenarioSamples)) {
      const manifestYear = manifestScenario[yearLabel];
      assert(manifestYear, `Slice 3 manifest missing ${scenario} ${yearLabel}`);
      for (const [metric, expectedValue] of Object.entries(expected)) {
        assert(
          nearlyEqual(manifestYear[metric], expectedValue, 0.01),
          `Slice 3 manifest ${scenario} ${yearLabel} ${metric} mismatch`,
        );
      }
    }
  }

  return {
    sheetCount: manifest.slice3Sheets.length,
    paritySamples: Object.values(manifest.canonicalParitySamples).reduce((total, scenario) => total + Object.keys(scenario).length, 0),
    requiredChecks: manifest.requiredChecks.length,
    runtimeChecks: manifest.runtimeChecks.length,
  };
}

async function loadSlice3ExportManifest() {
  const manifestText = await fs.readFile(slice3ExportManifestPath, "utf8");
  return JSON.parse(manifestText);
}

async function validateSlice3ExportManifest() {
  const manifest = await loadSlice3ExportManifest();
  runSlice3ExportScaffoldValidation();

  assert(manifest.model.offering === "OFR-RB-PAYROLL-STARTER", "Slice 3 export manifest offering mismatch");
  assert(manifest.output.workbook === defaultWorkbookPath, "Slice 3 export manifest workbook output path mismatch");
  assert(manifest.output.builder === "scripts/finance/build_payroll_starter_model.mjs", "Slice 3 export manifest builder path mismatch");

  for (const plan of slice3ExportPlan) {
    const manifestPlan = manifest.sheetLayouts.find((item) => item.sheet === plan.sheet);
    assert(manifestPlan, `Slice 3 export manifest missing sheet layout for ${plan.sheet}`);
    assert(manifestPlan.tableAnchor === plan.tableAnchor, `Slice 3 export manifest table anchor mismatch for ${plan.sheet}`);
  }
  assert(
    manifest.sheetLayouts.length === slice3ExportPlan.length,
    `Slice 3 export manifest layout count ${manifest.sheetLayouts.length} does not match builder count ${slice3ExportPlan.length}`,
  );

  for (const formula of slice3FormulaBlueprints) {
    assert(manifest.formulaBlueprints.includes(formula), `Slice 3 export manifest missing formula blueprint: ${formula}`);
  }

  for (const dependency of slice3WorkbookDependencies) {
    assert(manifest.workbookDependencies.includes(dependency), `Slice 3 export manifest missing dependency: ${dependency}`);
  }

  for (const target of slice3VisualQaTargets) {
    assert(manifest.visualQaTargets.includes(target), `Slice 3 export manifest missing visual QA target: ${target}`);
  }

  for (const [scenario, scenarioSamples] of Object.entries(canonicalSlice3Samples)) {
    const manifestScenario = manifest.canonicalParitySamples[scenario];
    assert(manifestScenario, `Slice 3 export manifest missing parity samples for ${scenario}`);
    for (const [yearLabel, expected] of Object.entries(scenarioSamples)) {
      const manifestYear = manifestScenario[yearLabel];
      assert(manifestYear, `Slice 3 export manifest missing ${scenario} ${yearLabel}`);
      for (const [metric, expectedValue] of Object.entries(expected)) {
        assert(
          nearlyEqual(manifestYear[metric], expectedValue, 0.01),
          `Slice 3 export manifest ${scenario} ${yearLabel} ${metric} mismatch`,
        );
      }
    }
  }

  return {
    sheetLayouts: manifest.sheetLayouts.length,
    formulaBlueprints: manifest.formulaBlueprints.length,
    workbookDependencies: manifest.workbookDependencies.length,
    visualQaTargets: manifest.visualQaTargets.length,
    paritySamples: Object.values(manifest.canonicalParitySamples).reduce((total, scenario) => total + Object.keys(scenario).length, 0),
    runtimeChecks: manifest.runtimeChecks.length,
  };
}

async function loadSlice4Manifest() {
  const manifestText = await fs.readFile(slice4ManifestPath, "utf8");
  return JSON.parse(manifestText);
}

async function validateSlice4Manifest() {
  const manifest = await loadSlice4Manifest();
  runSlice4ScaffoldValidation();

  assert(manifest.model.offering === "OFR-RB-PAYROLL-STARTER", "Slice 4 manifest offering mismatch");
  assert(manifest.output.workbook === defaultWorkbookPath, "Slice 4 manifest workbook output path mismatch");
  assert(manifest.output.builder === "scripts/finance/build_payroll_starter_model.mjs", "Slice 4 manifest builder path mismatch");

  for (const sheetName of slice4Sheets) {
    assert(manifest.slice4Sheets.includes(sheetName), `Slice 4 manifest missing sheet ${sheetName}`);
  }
  assert(
    manifest.slice4Sheets.length === slice4Sheets.length,
    `Manifest Slice 4 sheet count ${manifest.slice4Sheets.length} does not match builder count ${slice4Sheets.length}`,
  );

  for (const output of slice4BlockedOutputs) {
    assert(manifest.blockedOutputs.includes(output), `Slice 4 manifest missing blocked output: ${output}`);
  }

  return {
    sheetCount: manifest.slice4Sheets.length,
    blockedOutputs: manifest.blockedOutputs.length,
    requiredChecks: manifest.requiredChecks.length,
    runtimeChecks: manifest.runtimeChecks.length,
  };
}

async function loadSlice5Manifest() {
  const manifestText = await fs.readFile(slice5ManifestPath, "utf8");
  return JSON.parse(manifestText);
}

async function validateSlice5Manifest() {
  const manifest = await loadSlice5Manifest();
  runSlice5ScaffoldValidation();

  assert(manifest.model.offering === "OFR-RB-PAYROLL-STARTER", "Slice 5 manifest offering mismatch");
  assert(manifest.output.workbook === defaultWorkbookPath, "Slice 5 manifest workbook output path mismatch");
  assert(manifest.output.builder === "scripts/finance/build_payroll_starter_model.mjs", "Slice 5 manifest builder path mismatch");

  for (const sheetName of slice5Sheets) {
    assert(manifest.slice5Sheets.includes(sheetName), `Slice 5 manifest missing sheet ${sheetName}`);
  }
  assert(
    manifest.slice5Sheets.length === slice5Sheets.length,
    `Manifest Slice 5 sheet count ${manifest.slice5Sheets.length} does not match builder count ${slice5Sheets.length}`,
  );

  for (const prerequisite of slice5Prerequisites) {
    assert(manifest.capitalBudgetingPrerequisites.includes(prerequisite), `Slice 5 manifest missing prerequisite: ${prerequisite}`);
  }

  for (const output of slice5BlockedOutputs) {
    assert(manifest.blockedReturnOutputs.includes(output), `Slice 5 manifest missing blocked return output: ${output}`);
  }

  return {
    sheetCount: manifest.slice5Sheets.length,
    prerequisites: manifest.capitalBudgetingPrerequisites.length,
    blockedOutputs: manifest.blockedReturnOutputs.length,
    requiredChecks: manifest.requiredChecks.length,
    runtimeChecks: manifest.runtimeChecks.length,
  };
}

async function loadSlice6Manifest() {
  const manifestText = await fs.readFile(slice6ManifestPath, "utf8");
  return JSON.parse(manifestText);
}

async function validateSlice6Manifest() {
  const manifest = await loadSlice6Manifest();
  runSlice6ScaffoldValidation();

  assert(manifest.model.offering === "OFR-RB-PAYROLL-STARTER", "Slice 6 manifest offering mismatch");
  assert(manifest.output.workbook === defaultWorkbookPath, "Slice 6 manifest workbook output path mismatch");
  assert(manifest.output.builder === "scripts/finance/build_payroll_starter_model.mjs", "Slice 6 manifest builder path mismatch");

  for (const sheetName of slice6Sheets) {
    assert(manifest.slice6Sheets.includes(sheetName), `Slice 6 manifest missing sheet ${sheetName}`);
  }
  assert(
    manifest.slice6Sheets.length === slice6Sheets.length,
    `Manifest Slice 6 sheet count ${manifest.slice6Sheets.length} does not match builder count ${slice6Sheets.length}`,
  );

  for (const metric of slice6DashboardMetrics) {
    assert(manifest.dashboardMetrics.includes(metric), `Slice 6 manifest missing dashboard metric: ${metric}`);
  }

  for (const category of slice6LineageCategories) {
    assert(manifest.lineageCategories.includes(category), `Slice 6 manifest missing lineage category: ${category}`);
  }

  return {
    sheetCount: manifest.slice6Sheets.length,
    dashboardMetrics: manifest.dashboardMetrics.length,
    lineageCategories: manifest.lineageCategories.length,
    requiredChecks: manifest.requiredChecks.length,
    runtimeChecks: manifest.runtimeChecks.length,
  };
}

async function loadSlice7Manifest() {
  const manifestText = await fs.readFile(slice7ManifestPath, "utf8");
  return JSON.parse(manifestText);
}

async function validateSlice7Manifest() {
  const manifest = await loadSlice7Manifest();
  runSlice7ScaffoldValidation();

  assert(manifest.model.offering === "OFR-RB-PAYROLL-STARTER", "Slice 7 manifest offering mismatch");
  assert(manifest.output.workbook === defaultWorkbookPath, "Slice 7 manifest workbook output path mismatch");
  assert(manifest.output.builder === "scripts/finance/build_payroll_starter_model.mjs", "Slice 7 manifest builder path mismatch");

  for (const item of slice7ReviewPlan) {
    assert(
      manifest.reviewPlan.some((manifestItem) => manifestItem.step === item.step),
      `Slice 7 manifest missing review step: ${item.step}`,
    );
  }
  assert(
    manifest.reviewPlan.length === slice7ReviewPlan.length,
    `Manifest Slice 7 review step count ${manifest.reviewPlan.length} does not match builder count ${slice7ReviewPlan.length}`,
  );

  for (const artifact of slice7RequiredArtifacts) {
    assert(manifest.requiredArtifacts.includes(artifact), `Slice 7 manifest missing required artifact: ${artifact}`);
  }

  for (const check of slice7FreezeChecks) {
    assert(manifest.freezeChecks.includes(check), `Slice 7 manifest missing freeze check: ${check}`);
  }

  return {
    reviewSteps: manifest.reviewPlan.length,
    requiredArtifacts: manifest.requiredArtifacts.length,
    freezeChecks: manifest.freezeChecks.length,
    runtimeChecks: manifest.runtimeChecks.length,
  };
}



function oneColumnRows(values) {
  return values.map((value) => [value]);
}

function assumptionRows() {
  const rows = [
    [
      "Provisional Input ID",
      "Assumption ID or source",
      "Description",
      "Input Type",
      "Conservative",
      "Base",
      "Accelerated",
      "Source",
    ],
  ];

  for (const input of inputs) {
    rows.push([
      input.provisionalInputId,
      input.assumptionId,
      input.description,
      input.inputType,
      displayScenarioValue(input, "Conservative"),
      displayScenarioValue(input, "Base"),
      displayScenarioValue(input, "Accelerated"),
      input.source,
    ]);
  }

  for (const [assumptionId, treatment] of blockedInputs) {
    rows.push(["", assumptionId, treatment, "blocked", "Blocked", "Blocked", "Blocked", sourceDocuments.provisionalInputs]);
  }

  return rows;
}

function displayScenarioValue(input, scenario) {
  if (input.inputType === "derived") {
    return input.formula;
  }
  const value = input.values[scenario];
  if (Array.isArray(value)) {
    return value.map((entry, index) => `Y${index + 1} ${entry}`).join("; ");
  }
  if (typeof value === "object" && value !== null) {
    return Object.entries(value)
      .map(([key, entry]) => `${key} ${(entry * 100).toFixed(0)}%`)
      .join(" / ");
  }
  return value;
}

function adoptionRows() {
  const rows = [["Scenario", "Metric", ...years]];
  for (const scenario of scenarios) {
    const newBanks = vectorFor("ADP-001", scenario);
    const activeBanks = vectorFor("ADP-002", scenario);
    const cumulativeBanks = cumulative(newBanks);
    const weightedMonths = vectorFor("ADP-003", scenario);
    const customersPerBank = valueFor("CUS-001", scenario);
    rows.push([scenario, "Newly onboarded banks", ...newBanks]);
    rows.push([scenario, "Cumulative onboarded banks", ...cumulativeBanks]);
    rows.push([scenario, "Active banks", ...activeBanks]);
    rows.push([scenario, "Weighted average active months", ...weightedMonths]);
    rows.push([scenario, "Active employers", ...activeBanks.map((value) => value * customersPerBank)]);
    rows.push([scenario, "Newly onboarded employer relationships", ...newBanks.map((value) => value * customersPerBank)]);
  }
  return rows;
}

function payrollActivityRows() {
  const rows = [["Scenario", "Metric", ...years]];
  for (const scenario of scenarios) {
    const vol001 = deriveVol001(scenario);
    const annualTransactions = annualSuccessfulTransactions(scenario);
    const smsAttachment = valueFor("ATT-001", scenario);
    const smsDelivery = valueFor("SMS-001", scenario);
    rows.push([scenario, "Derived VOL-001", ...years.map(() => vol001)]);
    rows.push([scenario, "Annual successful payroll transactions", ...annualTransactions]);
    rows.push([
      scenario,
      "SMS-attached delivered transactions",
      ...annualTransactions.map((value) => value * smsAttachment * smsDelivery),
    ]);
  }
  return rows;
}

function assumptionMapRows() {
  return [
    ["Assumption ID", "Used By", "Formula / Role", "Output Tabs", "Status"],
    ["CUS-001", "VOL-001; Active employers", "Component input", "04_Adoption; 05_Payroll_Activity", "Provisional"],
    ["CUS-002", "VOL-001", "Component input", "05_Payroll_Activity", "Provisional"],
    ["CUS-003", "VOL-001", "Component input", "05_Payroll_Activity", "Provisional"],
    ["VOL-002", "VOL-001", "Component input", "05_Payroll_Activity", "Provisional"],
    ["VOL-001", "Annual successful payroll transactions", "Derived input only", "05_Payroll_Activity", "Derived"],
    ["ADP-001", "Cumulative banks; newly onboarded employer relationships", "Primitive input", "04_Adoption", "Provisional"],
    ["ADP-002", "Annual successful payroll transactions; active employers", "Primitive input", "04_Adoption; 05_Payroll_Activity", "Provisional"],
    ["ADP-003", "Annual successful payroll transactions", "Primitive input", "04_Adoption; 05_Payroll_Activity", "Provisional"],
    ["ATT-001", "SMS-attached delivered transactions", "Optional SMS input", "05_Payroll_Activity; 13_SMS_Variant", "Provisional"],
    ["SMS-001", "SMS-attached delivered transactions", "Optional SMS input", "05_Payroll_Activity; 13_SMS_Variant", "Provisional"],
    ["RB-002", "Rural Bank true contribution", "Blocked input", "10_Rural_Bank_View; 21_Checks", "Blocked"],
    ["TAX-001", "Tax-adjusted results", "Blocked input", "15_Profit_and_Loss; 21_Checks", "Blocked"],
    ["ROY-001", "3neti royalty", "Blocked input", "11_ODTI_View; 21_Checks", "Blocked"],
    ["NET-001", "NetBank fee-adjusted result", "Blocked input", "14_Consolidated_View; 21_Checks", "Blocked"],
  ];
}

function checkRows() {
  return [
    ["Check", "Expected status", "Notes"],
    ["Active banks <= cumulative onboarded banks", "OK", "Validated by scaffold; workbook formula to be added."],
    ["Weighted active months between 0 and 12", "OK", "Validated by scaffold; workbook formula to be added."],
    ["Active employers reconcile", "OK", "Active banks x CUS-001."],
    ["Newly onboarded employer relationships reconcile", "OK", "New banks x CUS-001."],
    ["VOL-001 equals component-derived formula", "OK", "CUS-001 x CUS-002 x CUS-003 x VOL-002."],
    ["No independent VOL-001 input in component-derived mode", "OK", "VOL-001 remains derived only."],
    ["Annual successful transactions match canonical model", "OK", "ADP-002 x ADP-003 x VOL-001."],
    ["RB-001 <= PRC-001", "OK", "Rural Bank retention cannot exceed recipient fee."],
    ["Blocked assumptions visibly blocked", "OK", "RB-002, TAX-001, ROY-001, NET-001, SMS-002, and others."],
    ["NPV cash-flow linkage", "Blocked", "Capital-budgeting prerequisites not yet implemented."],
    ["IRR sign pattern", "Blocked", "Capital-budgeting prerequisites not yet implemented."],
  ];
}

function readMeRows() {
  return [
    ["Payroll Starter Financial Model"],
    ["Level 1 Controlled Placeholder Model"],
    [""],
    [
      "Warning",
      "This workbook uses provisional management candidates and controlled placeholders. It is not an approved budget, forecast, provider quote, institutional commitment, contract, regulatory filing, investment representation, or factual operating result.",
    ],
    [
      "Revenue warning",
      "Stakeholder revenue figures include internal transfers and are not additive. Consolidated External Revenue counts external inflows once.",
    ],
    [""],
    ["Canonical sources"],
    ...Object.entries(sourceDocuments).map(([key, value]) => [key, value]),
    [""],
    ["Slice 2 sheets"],
    ...slice2Sheets.map((sheet) => [sheet]),
  ];
}

function controlRows() {
  return [
    ["Control", "Default", "Allowed values", "Notes"],
    ["Selected scenario", "Base", scenarios.join(", "), "Data validation to be added in workbook implementation."],
    ["Model start year", "Year 1", "Year 1", "Fixed for Level 1."],
    ["Projection horizon", 5, "5", "Fixed for Level 1."],
    ["Include optional SMS", "No", "Yes, No", "Core Payroll remains primary."],
    ["Cost view", "Incremental Payroll", "Incremental Payroll, Full-Cost Stress Test", "Shared allocation deferred."],
    ["Volume method", "Component-derived", "Component-derived", "Aggregate volume disabled until authorized."],
    ["Discount rate", "Blocked", "Blocked", "Future FIN-001 needed."],
    ["Model version", "Level 1", "Level 1", "Must match canonical documents."],
  ];
}

function columnLetter(columnNumber) {
  let dividend = columnNumber;
  let columnName = "";
  while (dividend > 0) {
    const modulo = (dividend - 1) % 26;
    columnName = String.fromCharCode(65 + modulo) + columnName;
    dividend = Math.floor((dividend - modulo) / 26);
  }
  return columnName;
}

function quotedSheetRef(sheetName, cellAddress) {
  return `'${sheetName}'!${cellAddress}`;
}

function formulaCell(formula, result) {
  return { formula, result };
}

function formatScenarioValue(value) {
  if (Array.isArray(value)) {
    return value.map((entry, index) => `Y${index + 1} ${entry}`).join("; ");
  }
  if (typeof value === "object" && value !== null) {
    return Object.entries(value)
      .map(([key, entry]) => `${key} ${(entry * 100).toFixed(0)}%`)
      .join(" / ");
  }
  return value;
}

function inputStatus(input) {
  return input.inputType === "derived" ? "Derived" : "Provisional";
}

function inputEvidenceStatus(input) {
  return input.inputType === "derived"
    ? "Calculated from component assumptions"
    : "Internal management candidate; not evidence-supported";
}

function inputClassification(input) {
  if (input.inputType === "derived") {
    return "Derived input";
  }
  if (input.inputType === "decision") {
    return "Decision-backed provisional input";
  }
  if (input.inputType === "text") {
    return "Governed policy input";
  }
  return "Controlled placeholder";
}

function buildExceljsAssumptionRows() {
  const rows = [
    [
      "Provisional Input ID",
      "Assumption ID or source",
      "Description",
      "Input Type",
      "Year",
      "Conservative",
      "Base",
      "Accelerated",
      "Selected Scenario Value",
      "Current Status",
      "Evidence Status",
      "Input Classification",
      "Source",
    ],
  ];
  const index = new Map();

  function addRow(input, yearLabel, conservative, base, accelerated) {
    const rowNumber = rows.length + 1;
    const selectedFormula = `CHOOSE(MATCH(${quotedSheetRef("01_Control", "$B$2")},$F$1:$H$1,0),F${rowNumber},G${rowNumber},H${rowNumber})`;
    rows.push([
      input.provisionalInputId,
      input.assumptionId,
      input.description,
      input.inputType,
      yearLabel,
      conservative,
      base,
      accelerated,
      formulaCell(selectedFormula, base),
      inputStatus(input),
      inputEvidenceStatus(input),
      inputClassification(input),
      input.source,
    ]);

    for (const [scenario, columnNumber] of [
      ["Conservative", 6],
      ["Base", 7],
      ["Accelerated", 8],
    ]) {
      index.set(`${input.assumptionId}:${scenario}:${yearLabel}`, `$${columnLetter(columnNumber)}$${rowNumber}`);
    }
    index.set(`${input.assumptionId}:Selected:${yearLabel}`, `$I$${rowNumber}`);
  }

  for (const input of inputs) {
    if (input.inputType === "yearVector") {
      for (const [indexNumber, year] of years.entries()) {
        addRow(
          input,
          year,
          input.values.Conservative[indexNumber],
          input.values.Base[indexNumber],
          input.values.Accelerated[indexNumber],
        );
      }
      continue;
    }

    if (input.inputType === "derived") {
      addRow(input, "All", input.formula, input.formula, input.formula);
      continue;
    }

    addRow(
      input,
      "All",
      formatScenarioValue(input.values.Conservative),
      formatScenarioValue(input.values.Base),
      formatScenarioValue(input.values.Accelerated),
    );
  }

  for (const [assumptionId, treatment] of blockedInputs) {
    rows.push([
      "",
      assumptionId,
      treatment,
      "blocked",
      "All",
      "Blocked",
      "Blocked",
      "Blocked",
      "Blocked",
      "Blocked",
      "Open",
      "Blocked or excluded",
      sourceDocuments.provisionalInputs,
    ]);
  }

  return { rows, index };
}

function assumptionCell(assumptionIndex, assumptionId, scenario, yearLabel = "All") {
  const cell = assumptionIndex.get(`${assumptionId}:${scenario}:${yearLabel}`);
  if (!cell) {
    throw new Error(`Missing assumption cell for ${assumptionId} ${scenario} ${yearLabel}`);
  }
  return quotedSheetRef("02_Assumptions", cell);
}

function buildExceljsAdoptionRows(assumptionIndex) {
  const rows = [["Scenario", "Metric", ...years]];

  for (const scenario of scenarios) {
    const newBanks = vectorFor("ADP-001", scenario);
    const activeBanks = vectorFor("ADP-002", scenario);
    const cumulativeBanks = cumulative(newBanks);
    const weightedMonths = vectorFor("ADP-003", scenario);
    const customersPerBank = valueFor("CUS-001", scenario);

    rows.push([
      scenario,
      "Newly onboarded banks",
      ...years.map((year, indexNumber) =>
        formulaCell(assumptionCell(assumptionIndex, "ADP-001", scenario, year), newBanks[indexNumber]),
      ),
    ]);
    rows.push([
      scenario,
      "Cumulative onboarded banks",
      ...years.map((year, indexNumber) => {
        const sourceCells = years
          .slice(0, indexNumber + 1)
          .map((sourceYear) => assumptionCell(assumptionIndex, "ADP-001", scenario, sourceYear));
        return formulaCell(`SUM(${sourceCells.join(",")})`, cumulativeBanks[indexNumber]);
      }),
    ]);
    rows.push([
      scenario,
      "Active banks",
      ...years.map((year, indexNumber) =>
        formulaCell(assumptionCell(assumptionIndex, "ADP-002", scenario, year), activeBanks[indexNumber]),
      ),
    ]);
    rows.push([
      scenario,
      "Weighted average active months",
      ...years.map((year, indexNumber) =>
        formulaCell(assumptionCell(assumptionIndex, "ADP-003", scenario, year), weightedMonths[indexNumber]),
      ),
    ]);
    rows.push([
      scenario,
      "Active employers",
      ...years.map((year, indexNumber) =>
        formulaCell(
          `${assumptionCell(assumptionIndex, "ADP-002", scenario, year)}*${assumptionCell(assumptionIndex, "CUS-001", scenario)}`,
          activeBanks[indexNumber] * customersPerBank,
        ),
      ),
    ]);
    rows.push([
      scenario,
      "Newly onboarded employer relationships",
      ...years.map((year, indexNumber) =>
        formulaCell(
          `${assumptionCell(assumptionIndex, "ADP-001", scenario, year)}*${assumptionCell(assumptionIndex, "CUS-001", scenario)}`,
          newBanks[indexNumber] * customersPerBank,
        ),
      ),
    ]);
  }

  return rows;
}

function buildExceljsPayrollActivityRows(assumptionIndex) {
  const rows = [["Scenario", "Metric", ...years]];

  for (const scenario of scenarios) {
    const vol001 = deriveVol001(scenario);
    const annualTransactions = annualSuccessfulTransactions(scenario);
    const smsAttachment = valueFor("ATT-001", scenario);
    const smsDelivery = valueFor("SMS-001", scenario);
    const volFormula = `${assumptionCell(assumptionIndex, "CUS-001", scenario)}*${assumptionCell(
      assumptionIndex,
      "CUS-002",
      scenario,
    )}*${assumptionCell(assumptionIndex, "CUS-003", scenario)}*${assumptionCell(assumptionIndex, "VOL-002", scenario)}`;

    rows.push([scenario, "Derived VOL-001", ...years.map(() => formulaCell(volFormula, vol001))]);
    rows.push([
      scenario,
      "Annual successful payroll transactions",
      ...years.map((year, indexNumber) =>
        formulaCell(
          `${assumptionCell(assumptionIndex, "ADP-002", scenario, year)}*${assumptionCell(
            assumptionIndex,
            "ADP-003",
            scenario,
            year,
          )}*(${volFormula})`,
          annualTransactions[indexNumber],
        ),
      ),
    ]);
    rows.push([
      scenario,
      "SMS-attached delivered transactions",
      ...annualTransactions.map((value) =>
        formulaCell(
          `${value}*${assumptionCell(assumptionIndex, "ATT-001", scenario)}*${assumptionCell(
            assumptionIndex,
            "SMS-001",
            scenario,
          )}`,
          value * smsAttachment * smsDelivery,
        ),
      ),
    ]);
  }

  return rows;
}

function yearColumnAddress(yearIndex) {
  return `$${columnLetter(yearIndex + 3)}`;
}

function scenarioIndex(scenario) {
  const index = scenarios.indexOf(scenario);
  if (index === -1) {
    throw new Error(`Unknown scenario ${scenario}`);
  }
  return index;
}

function adoptionCell(scenario, metricOffset, yearIndex) {
  return quotedSheetRef("04_Adoption", `${yearColumnAddress(yearIndex)}$${2 + scenarioIndex(scenario) * 6 + metricOffset}`);
}

function payrollActivityCell(scenario, metricOffset, yearIndex) {
  return quotedSheetRef("05_Payroll_Activity", `${yearColumnAddress(yearIndex)}$${2 + scenarioIndex(scenario) * 3 + metricOffset}`);
}

function metricCell(sheetName, scenario, blockSize, metricOffset, yearIndex) {
  return quotedSheetRef(sheetName, `${yearColumnAddress(yearIndex)}$${2 + scenarioIndex(scenario) * blockSize + metricOffset}`);
}

function buildExceljsPricingRows(assumptionIndex) {
  const rows = [["Scenario", "Pricing item", "Value", "Source", "Notes"]];
  const index = new Map();

  function addPricingRow(scenario, item, value, source, notes) {
    const rowNumber = rows.length + 1;
    rows.push([scenario, item, value, source, notes]);
    index.set(`${scenario}:${item}`, quotedSheetRef("06_Pricing", `$C$${rowNumber}`));
  }

  for (const scenario of scenarios) {
    addPricingRow(
      scenario,
      "EMP-001 Employer onboarding fee",
      formulaCell(assumptionCell(assumptionIndex, "EMP-001", scenario), valueFor("EMP-001", scenario)),
      "EMP-001 / provisional input",
      "Customer-facing employer onboarding price.",
    );
    addPricingRow(scenario, "EMP-001 Rural Bank share", 0.4, "Decision 0003 / PI-L1-015", "Decision-backed provisional split.");
    addPricingRow(scenario, "EMP-001 ODTI share", 0.6, "Decision 0003 / PI-L1-015", "Decision-backed provisional split.");
    addPricingRow(
      scenario,
      "EMP-002 Employer monthly payroll-service fee",
      formulaCell(assumptionCell(assumptionIndex, "EMP-002", scenario), valueFor("EMP-002", scenario)),
      "EMP-002 / provisional input",
      "Customer-facing recurring employer fee.",
    );
    addPricingRow(scenario, "EMP-002 Rural Bank share", 0.6, "Decision 0003 / PI-L1-016", "Decision-backed provisional split.");
    addPricingRow(scenario, "EMP-002 ODTI share", 0.4, "Decision 0003 / PI-L1-016", "Decision-backed provisional split.");
    addPricingRow(
      scenario,
      "PRC-001 Recipient disbursement fee",
      formulaCell(assumptionCell(assumptionIndex, "PRC-001", scenario), valueFor("PRC-001", scenario)),
      "PRC-001 / provisional input",
      "Customer-facing recipient disbursement fee.",
    );
    addPricingRow(
      scenario,
      "RB-001 Rural Bank retained transaction amount",
      formulaCell(assumptionCell(assumptionIndex, "RB-001", scenario), valueFor("RB-001", scenario)),
      "RB-001 / provisional input",
      "Must not exceed PRC-001.",
    );
    addPricingRow(
      scenario,
      "ODTI recipient transaction amount",
      formulaCell(
        `${index.get(`${scenario}:PRC-001 Recipient disbursement fee`)}-${index.get(`${scenario}:RB-001 Rural Bank retained transaction amount`)}`,
        valueFor("PRC-001", scenario) - valueFor("RB-001", scenario),
      ),
      "PRC-001 less RB-001",
      "Derived transaction-platform amount.",
    );
    addPricingRow(
      scenario,
      "LIC-004 Activation fee",
      formulaCell(assumptionCell(assumptionIndex, "LIC-004", scenario), valueFor("LIC-004", scenario)),
      "LIC-004 / provisional input",
      "Rural-bank platform access activation.",
    );
    addPricingRow(
      scenario,
      "LIC-005 Annual platform subscription",
      formulaCell(assumptionCell(assumptionIndex, "LIC-005", scenario), valueFor("LIC-005", scenario)),
      "LIC-005 / provisional input",
      "Annual subscription; monthly recognition uses active bank-months divided by 12.",
    );
    addPricingRow(
      scenario,
      "RISK-002 Collection loss rate",
      formulaCell(assumptionCell(assumptionIndex, "RISK-002", scenario), valueFor("RISK-002", scenario)),
      "RISK-002 / provisional input",
      "Applies to eligible employer commercial fees.",
    );
    addPricingRow(
      scenario,
      "VAS-001 SMS customer-facing price",
      formulaCell(assumptionCell(assumptionIndex, "VAS-001", scenario), valueFor("VAS-001", scenario)),
      "VAS-001 / provisional input",
      "Optional SMS price.",
    );
    addPricingRow(
      scenario,
      "CST-001 SMS wholesale provider price",
      formulaCell(assumptionCell(assumptionIndex, "CST-001", scenario), valueFor("CST-001", scenario)),
      "CST-001 / provisional input",
      "Wholesale provider cost remains payable under baseline.",
    );
  }

  return { rows, index };
}

function pricingCell(pricingIndex, scenario, item) {
  const cell = pricingIndex.get(`${scenario}:${item}`);
  if (!cell) {
    throw new Error(`Missing pricing cell for ${scenario}: ${item}`);
  }
  return cell;
}

function buildScenarioMetricRows(metrics) {
  const rows = [["Scenario", "Metric", ...years]];
  for (const scenario of scenarios) {
    for (const metric of metrics) {
      rows.push([scenario, metric.name, ...years.map((year, yearIndex) => metric.value(scenario, yearIndex))]);
    }
  }
  return rows;
}

function slice3FormulaContext(pricingIndex, scenario, yearIndex) {
  const metrics = slice3Metrics(scenario, yearIndex);
  const newEmployers = adoptionCell(scenario, 5, yearIndex);
  const activeEmployers = adoptionCell(scenario, 4, yearIndex);
  const activeBanks = adoptionCell(scenario, 2, yearIndex);
  const activeMonths = adoptionCell(scenario, 3, yearIndex);
  const transactions = payrollActivityCell(scenario, 1, yearIndex);
  const smsDeliveredTransactions = payrollActivityCell(scenario, 2, yearIndex);
  const collectionFactor = `(1-${pricingCell(pricingIndex, scenario, "RISK-002 Collection loss rate")})`;
  const onboardingRevenue = `${newEmployers}*${pricingCell(pricingIndex, scenario, "EMP-001 Employer onboarding fee")}`;
  const monthlyRevenue = `${activeEmployers}*${activeMonths}*${pricingCell(pricingIndex, scenario, "EMP-002 Employer monthly payroll-service fee")}`;
  const recipientRevenue = `${transactions}*${pricingCell(pricingIndex, scenario, "PRC-001 Recipient disbursement fee")}`;

  return {
    metrics,
    newEmployers,
    activeEmployers,
    activeBanks,
    activeMonths,
    transactions,
    smsDeliveredTransactions,
    collectionFactor,
    onboardingRevenue,
    monthlyRevenue,
    recipientRevenue,
  };
}

function buildExceljsRevenueRows(pricingIndex) {
  return buildScenarioMetricRows([
    {
      name: "Employer onboarding revenue",
      value: (scenario, yearIndex) => {
        const context = slice3FormulaContext(pricingIndex, scenario, yearIndex);
        return formulaCell(context.onboardingRevenue, context.metrics.employerOnboardingRevenue ?? roundCurrency(vectorFor("ADP-001", scenario)[yearIndex] * valueFor("CUS-001", scenario) * valueFor("EMP-001", scenario)));
      },
    },
    {
      name: "Employer monthly service revenue",
      value: (scenario, yearIndex) => {
        const context = slice3FormulaContext(pricingIndex, scenario, yearIndex);
        const activeEmployers = vectorFor("ADP-002", scenario)[yearIndex] * valueFor("CUS-001", scenario);
        const amount = activeEmployers * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("EMP-002", scenario);
        return formulaCell(context.monthlyRevenue, roundCurrency(amount));
      },
    },
    {
      name: "Recipient disbursement fee revenue",
      value: (scenario, yearIndex) => {
        const context = slice3FormulaContext(pricingIndex, scenario, yearIndex);
        return formulaCell(context.recipientRevenue, roundCurrency(annualSuccessfulTransactions(scenario)[yearIndex] * valueFor("PRC-001", scenario)));
      },
    },
    {
      name: "Core external revenue",
      value: (scenario, yearIndex) => {
        const context = slice3FormulaContext(pricingIndex, scenario, yearIndex);
        return formulaCell(`(${context.onboardingRevenue})+(${context.monthlyRevenue})+(${context.recipientRevenue})`, context.metrics.coreExternalRevenue);
      },
    },
    {
      name: "Rural Bank entity revenue - non-additive",
      value: (scenario, yearIndex) => formulaCell(`'10_Rural_Bank_View'!${yearColumnAddress(yearIndex)}$${2 + scenarioIndex(scenario) * 3}`, slice3Metrics(scenario, yearIndex).ruralBankCoreRevenue),
    },
    {
      name: "ODTI entity revenue - non-additive",
      value: (scenario, yearIndex) => formulaCell(`'11_ODTI_View'!${yearColumnAddress(yearIndex)}$${2 + scenarioIndex(scenario) * 3}`, slice3Metrics(scenario, yearIndex).odtiCoreRevenue),
    },
    {
      name: "DevOps entity revenue - non-additive",
      value: (scenario, yearIndex) => formulaCell(`'12_DevOps_View'!${yearColumnAddress(yearIndex)}$${2 + scenarioIndex(scenario) * 2}`, slice3Metrics(scenario, yearIndex).devOpsRevenue),
    },
  ]);
}

function buildExceljsRuralBankRows(pricingIndex) {
  return buildScenarioMetricRows([
    {
      name: "Rural Bank core revenue",
      value: (scenario, yearIndex) => {
        const context = slice3FormulaContext(pricingIndex, scenario, yearIndex);
        const formula = `((${context.onboardingRevenue})*${pricingCell(pricingIndex, scenario, "EMP-001 Rural Bank share")}+(${context.monthlyRevenue})*${pricingCell(pricingIndex, scenario, "EMP-002 Rural Bank share")}+${context.transactions}*${pricingCell(pricingIndex, scenario, "RB-001 Rural Bank retained transaction amount")})*${context.collectionFactor}`;
        return formulaCell(formula, context.metrics.ruralBankCoreRevenue);
      },
    },
    {
      name: "Rural Bank SMS margin",
      value: (scenario, yearIndex) => formulaCell(`'13_SMS_Variant'!${yearColumnAddress(yearIndex)}$${5 + scenarioIndex(scenario) * 5}`, slice3Metrics(scenario, yearIndex).smsMargin),
    },
    {
      name: "Rural Bank contribution before RB-002",
      value: (scenario, yearIndex) => formulaCell(`${yearColumnAddress(yearIndex)}${2 + scenarioIndex(scenario) * 3}`, slice3Metrics(scenario, yearIndex).ruralBankCoreRevenue),
    },
  ]);
}

function buildExceljsOdtiRows(pricingIndex, assumptionIndex) {
  return buildScenarioMetricRows([
    {
      name: "ODTI core revenue",
      value: (scenario, yearIndex) => {
        const context = slice3FormulaContext(pricingIndex, scenario, yearIndex);
        const newBanks = adoptionCell(scenario, 0, yearIndex);
        const formula = `${newBanks}*${pricingCell(pricingIndex, scenario, "LIC-004 Activation fee")}+(${context.activeBanks}*${context.activeMonths}*${pricingCell(pricingIndex, scenario, "LIC-005 Annual platform subscription")})/12+((${context.onboardingRevenue})*${pricingCell(pricingIndex, scenario, "EMP-001 ODTI share")}+(${context.monthlyRevenue})*${pricingCell(pricingIndex, scenario, "EMP-002 ODTI share")}+${context.transactions}*${pricingCell(pricingIndex, scenario, "ODTI recipient transaction amount")})*${context.collectionFactor}`;
        return formulaCell(formula, context.metrics.odtiCoreRevenue);
      },
    },
    {
      name: "ODTI contribution - pre-tax/pre-royalty/NetBank-fee-blocked",
      value: (scenario, yearIndex) => {
        const metrics = slice3Metrics(scenario, yearIndex);
        const formula = `${yearColumnAddress(yearIndex)}${2 + scenarioIndex(scenario) * 3}-(${adoptionCell(scenario, 0, yearIndex)}*${assumptionCell(assumptionIndex, "ODTI-002", scenario)}+${adoptionCell(scenario, 2, yearIndex)}*${adoptionCell(scenario, 3, yearIndex)}*${assumptionCell(assumptionIndex, "ODTI-001", scenario)})`;
        return formulaCell(formula, metrics.odtiContribution);
      },
    },
    {
      name: "Blocked exclusions",
      value: () => "TAX-001; ROY-001; NET-001 blocked",
    },
  ]);
}

function buildExceljsDevOpsRows(assumptionIndex) {
  return buildScenarioMetricRows([
    {
      name: "DevOps revenue",
      value: (scenario, yearIndex) => {
        const metrics = slice3Metrics(scenario, yearIndex);
        const formula = `${adoptionCell(scenario, 0, yearIndex)}*${assumptionCell(assumptionIndex, "OPS-001", scenario)}+${adoptionCell(scenario, 2, yearIndex)}*${adoptionCell(scenario, 3, yearIndex)}*${assumptionCell(assumptionIndex, "OPS-002", scenario)}`;
        return formulaCell(formula, metrics.devOpsRevenue);
      },
    },
    {
      name: "DevOps contribution",
      value: (scenario, yearIndex) => {
        const metrics = slice3Metrics(scenario, yearIndex);
        const formula = `${yearColumnAddress(yearIndex)}${2 + scenarioIndex(scenario) * 2}-${adoptionCell(scenario, 2, yearIndex)}*${adoptionCell(scenario, 3, yearIndex)}*${assumptionCell(assumptionIndex, "OPS-003", scenario)}`;
        return formulaCell(formula, metrics.devOpsContribution);
      },
    },
  ]);
}

function buildExceljsSmsRows(pricingIndex) {
  return buildScenarioMetricRows([
    {
      name: "SMS delivered transactions",
      value: (scenario, yearIndex) =>
        formulaCell(payrollActivityCell(scenario, 2, yearIndex), slice3Metrics(scenario, yearIndex).smsDeliveredTransactions),
    },
    {
      name: "SMS customer-facing revenue",
      value: (scenario, yearIndex) => {
        const context = slice3FormulaContext(pricingIndex, scenario, yearIndex);
        return formulaCell(`${context.smsDeliveredTransactions}*${pricingCell(pricingIndex, scenario, "VAS-001 SMS customer-facing price")}`, context.metrics.smsCustomerRevenue);
      },
    },
    {
      name: "Collected SMS revenue after non-collection",
      value: (scenario, yearIndex) => {
        const context = slice3FormulaContext(pricingIndex, scenario, yearIndex);
        return formulaCell(`${yearColumnAddress(yearIndex)}${3 + scenarioIndex(scenario) * 5}*${context.collectionFactor}`, context.metrics.smsCollectedRevenue);
      },
    },
    {
      name: "SMS wholesale provider cost",
      value: (scenario, yearIndex) => {
        const context = slice3FormulaContext(pricingIndex, scenario, yearIndex);
        return formulaCell(`${context.smsDeliveredTransactions}*${pricingCell(pricingIndex, scenario, "CST-001 SMS wholesale provider price")}`, context.metrics.smsWholesaleCost);
      },
    },
    {
      name: "Rural Bank SMS margin",
      value: (scenario, yearIndex) => {
        const metrics = slice3Metrics(scenario, yearIndex);
        return formulaCell(`${yearColumnAddress(yearIndex)}${4 + scenarioIndex(scenario) * 5}-${yearColumnAddress(yearIndex)}${5 + scenarioIndex(scenario) * 5}`, metrics.smsMargin);
      },
    },
  ]);
}

function buildExceljsConsolidatedRows(pricingIndex, assumptionIndex) {
  return buildScenarioMetricRows([
    {
      name: "Core external revenue",
      value: (scenario, yearIndex) =>
        formulaCell(`'07_Revenue'!${yearColumnAddress(yearIndex)}$${5 + scenarioIndex(scenario) * 7}`, slice3Metrics(scenario, yearIndex).coreExternalRevenue),
    },
    {
      name: "Core consolidated contribution before blocked items",
      value: (scenario, yearIndex) => {
        const odtiPayrollSpecificCost = `${adoptionCell(scenario, 0, yearIndex)}*${assumptionCell(
          assumptionIndex,
          "ODTI-002",
          scenario,
        )}+${adoptionCell(scenario, 2, yearIndex)}*${adoptionCell(scenario, 3, yearIndex)}*${assumptionCell(
          assumptionIndex,
          "ODTI-001",
          scenario,
        )}`;
        const formula = `'07_Revenue'!${yearColumnAddress(yearIndex)}$${5 + scenarioIndex(scenario) * 7}*(1-${pricingCell(
          pricingIndex,
          scenario,
          "RISK-002 Collection loss rate",
        )})-(${odtiPayrollSpecificCost})`;
        return formulaCell(formula, slice3Metrics(scenario, yearIndex).consolidatedCoreContribution);
      },
    },
    {
      name: "Optional SMS contribution",
      value: (scenario, yearIndex) =>
        formulaCell(`'13_SMS_Variant'!${yearColumnAddress(yearIndex)}$${6 + scenarioIndex(scenario) * 5}`, slice3Metrics(scenario, yearIndex).smsMargin),
    },
    {
      name: "Combined contribution before blocked items",
      value: (scenario, yearIndex) => {
        const metrics = slice3Metrics(scenario, yearIndex);
        return formulaCell(`${yearColumnAddress(yearIndex)}${3 + scenarioIndex(scenario) * 4}+${yearColumnAddress(yearIndex)}${4 + scenarioIndex(scenario) * 4}`, metrics.combinedConsolidatedContribution);
      },
    },
  ]);
}

function buildExceljsCostOfSalesRows(assumptionIndex) {
  return buildScenarioMetricRows([
    {
      name: "Core non-collection effect on employer commercial fees",
      value: (scenario, yearIndex) => {
        const coreRevenue = metricCell("07_Revenue", scenario, 7, 3, yearIndex);
        const formula = `${coreRevenue}*${assumptionCell(assumptionIndex, "RISK-002", scenario)}`;
        return formulaCell(formula, roundCurrency(slice3Metrics(scenario, yearIndex).coreExternalRevenue * valueFor("RISK-002", scenario)));
      },
    },
    {
      name: "SMS wholesale provider cost",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("13_SMS_Variant", scenario, 5, 3, yearIndex), slice3Metrics(scenario, yearIndex).smsWholesaleCost),
    },
    {
      name: "Payroll funding pass-through",
      value: () => "Excluded from cost of sales",
    },
    {
      name: "Other direct provider costs",
      value: () => "Blocked - NET-001",
    },
    {
      name: "Tax or government amounts",
      value: () => "Blocked - TAX-001",
    },
  ]);
}

function buildExceljsOperatingExpenseRows(assumptionIndex) {
  return buildScenarioMetricRows([
    {
      name: "ODTI implementation cost",
      value: (scenario, yearIndex) => {
        const formula = `${adoptionCell(scenario, 0, yearIndex)}*${assumptionCell(assumptionIndex, "ODTI-002", scenario)}`;
        return formulaCell(formula, roundCurrency(vectorFor("ADP-001", scenario)[yearIndex] * valueFor("ODTI-002", scenario)));
      },
    },
    {
      name: "ODTI recurring support cost",
      value: (scenario, yearIndex) => {
        const formula = `${adoptionCell(scenario, 2, yearIndex)}*${adoptionCell(scenario, 3, yearIndex)}*${assumptionCell(
          assumptionIndex,
          "ODTI-001",
          scenario,
        )}`;
        return formulaCell(
          formula,
          roundCurrency(vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("ODTI-001", scenario)),
        );
      },
    },
    {
      name: "ODTI payroll-specific operating cost",
      value: (scenario, yearIndex) =>
        formulaCell(
          `${yearColumnAddress(yearIndex)}${2 + scenarioIndex(scenario) * 10}+${yearColumnAddress(yearIndex)}${3 + scenarioIndex(scenario) * 10}`,
          roundCurrency(
            vectorFor("ADP-001", scenario)[yearIndex] * valueFor("ODTI-002", scenario) +
              vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("ODTI-001", scenario),
          ),
        ),
    },
    {
      name: "DevOps direct recurring cost",
      value: (scenario, yearIndex) => {
        const formula = `${adoptionCell(scenario, 2, yearIndex)}*${adoptionCell(scenario, 3, yearIndex)}*${assumptionCell(
          assumptionIndex,
          "OPS-003",
          scenario,
        )}`;
        return formulaCell(
          formula,
          roundCurrency(vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("OPS-003", scenario)),
        );
      },
    },
    {
      name: "Platform subscription modernization cost",
      value: (scenario, yearIndex) => {
        const formula = `(${adoptionCell(scenario, 2, yearIndex)}*${adoptionCell(scenario, 3, yearIndex)}*${assumptionCell(
          assumptionIndex,
          "LIC-005",
          scenario,
        )})/12`;
        return formulaCell(
          formula,
          roundCurrency((vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("LIC-005", scenario)) / 12),
        );
      },
    },
    {
      name: "DevOps setup modernization cost",
      value: (scenario, yearIndex) => {
        const formula = `${adoptionCell(scenario, 0, yearIndex)}*${assumptionCell(assumptionIndex, "OPS-001", scenario)}`;
        return formulaCell(formula, roundCurrency(vectorFor("ADP-001", scenario)[yearIndex] * valueFor("OPS-001", scenario)));
      },
    },
    {
      name: "DevOps recurring modernization cost",
      value: (scenario, yearIndex) => {
        const formula = `${adoptionCell(scenario, 2, yearIndex)}*${adoptionCell(scenario, 3, yearIndex)}*${assumptionCell(
          assumptionIndex,
          "OPS-002",
          scenario,
        )}`;
        return formulaCell(
          formula,
          roundCurrency(vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("OPS-002", scenario)),
        );
      },
    },
    {
      name: "Public-cloud modernization cost",
      value: (scenario, yearIndex) => {
        const formula = `${adoptionCell(scenario, 2, yearIndex)}*${adoptionCell(scenario, 3, yearIndex)}*${assumptionCell(
          assumptionIndex,
          "CLD-001",
          scenario,
        )}`;
        return formulaCell(
          formula,
          roundCurrency(vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("CLD-001", scenario)),
        );
      },
    },
    {
      name: "Shared modernization cost",
      value: (scenario, yearIndex) => {
        const rowBase = 2 + scenarioIndex(scenario) * 10;
        const formula = `${yearColumnAddress(yearIndex)}${rowBase + 4}+${yearColumnAddress(yearIndex)}${rowBase + 5}+${yearColumnAddress(
          yearIndex,
        )}${rowBase + 6}+${yearColumnAddress(yearIndex)}${rowBase + 7}`;
        const activeBankMonths = vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex];
        return formulaCell(
          formula,
          roundCurrency(
            (activeBankMonths * valueFor("LIC-005", scenario)) / 12 +
              vectorFor("ADP-001", scenario)[yearIndex] * valueFor("OPS-001", scenario) +
              activeBankMonths * valueFor("OPS-002", scenario) +
              activeBankMonths * valueFor("CLD-001", scenario),
          ),
        );
      },
    },
    {
      name: "Rural Bank payroll-specific internal support cost",
      value: () => "Blocked - RB-002",
    },
  ]);
}

function buildExceljsProfitAndLossRows() {
  return buildScenarioMetricRows([
    {
      name: "Rural Bank revenue",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("10_Rural_Bank_View", scenario, 3, 0, yearIndex), slice3Metrics(scenario, yearIndex).ruralBankCoreRevenue),
    },
    {
      name: "Rural Bank Contribution Before Internal Bank Payroll-Support Cost",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("10_Rural_Bank_View", scenario, 3, 2, yearIndex), slice3Metrics(scenario, yearIndex).ruralBankCoreRevenue),
    },
    {
      name: "Rural Bank true net contribution",
      value: () => "Blocked - RB-002",
    },
    {
      name: "ODTI revenue",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("11_ODTI_View", scenario, 3, 0, yearIndex), slice3Metrics(scenario, yearIndex).odtiCoreRevenue),
    },
    {
      name: "ODTI operating expenses",
      value: (scenario, yearIndex) => {
        const expected = roundCurrency(slice3Metrics(scenario, yearIndex).odtiCoreRevenue - slice3Metrics(scenario, yearIndex).odtiContribution);
        return formulaCell(metricCell("09_Operating_Expenses", scenario, 10, 2, yearIndex), expected);
      },
    },
    {
      name: "ODTI contribution - Pre-Tax, Pre-Royalty, NetBank-Fee-Blocked",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("11_ODTI_View", scenario, 3, 1, yearIndex), slice3Metrics(scenario, yearIndex).odtiContribution),
    },
    {
      name: "DevOps revenue",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("12_DevOps_View", scenario, 2, 0, yearIndex), slice3Metrics(scenario, yearIndex).devOpsRevenue),
    },
    {
      name: "DevOps direct cost",
      value: (scenario, yearIndex) => {
        const expected = roundCurrency(slice3Metrics(scenario, yearIndex).devOpsRevenue - slice3Metrics(scenario, yearIndex).devOpsContribution);
        return formulaCell(metricCell("09_Operating_Expenses", scenario, 10, 3, yearIndex), expected);
      },
    },
    {
      name: "DevOps contribution",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("12_DevOps_View", scenario, 2, 1, yearIndex), slice3Metrics(scenario, yearIndex).devOpsContribution),
    },
    {
      name: "Consolidated external revenue",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("14_Consolidated_View", scenario, 4, 0, yearIndex), slice3Metrics(scenario, yearIndex).coreExternalRevenue),
    },
    {
      name: "Consolidated contribution before blocked items",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("14_Consolidated_View", scenario, 4, 1, yearIndex), slice3Metrics(scenario, yearIndex).consolidatedCoreContribution),
    },
    {
      name: "Tax-adjusted net income",
      value: () => "Blocked - TAX-001",
    },
    {
      name: "Formal GAAP/PFRS net income",
      value: () => "Blocked - accounting treatment unresolved",
    },
  ]);
}

function buildExceljsCashFlowRows(assumptionIndex) {
  return buildScenarioMetricRows([
    {
      name: "Recognized core external revenue",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("07_Revenue", scenario, 7, 3, yearIndex), slice3Metrics(scenario, yearIndex).coreExternalRevenue),
    },
    {
      name: "Collected core commercial fees after non-collection",
      value: (scenario, yearIndex) => {
        const formula = `${metricCell("07_Revenue", scenario, 7, 3, yearIndex)}*(1-${assumptionCell(assumptionIndex, "RISK-002", scenario)})`;
        return formulaCell(formula, roundCurrency(slice3Metrics(scenario, yearIndex).coreExternalRevenue * (1 - valueFor("RISK-002", scenario))));
      },
    },
    {
      name: "ODTI payroll-specific cash cost before timing",
      value: (scenario, yearIndex) => {
        const expected = roundCurrency(slice3Metrics(scenario, yearIndex).odtiCoreRevenue - slice3Metrics(scenario, yearIndex).odtiContribution);
        return formulaCell(metricCell("09_Operating_Expenses", scenario, 10, 2, yearIndex), expected);
      },
    },
    {
      name: "External cloud cash payment before timing",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("09_Operating_Expenses", scenario, 10, 7, yearIndex), roundCurrency(vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("CLD-001", scenario))),
    },
    {
      name: "Employer collection timing",
      value: () => "Blocked - COL-001",
    },
    {
      name: "Working-capital roll-forward",
      value: () => "Blocked - COL-001 and balance-sheet prerequisites",
    },
    {
      name: "Ending cash",
      value: () => "Blocked - beginning cash and financing assumptions unavailable",
    },
  ]);
}

function buildExceljsCapitalBudgetingRows() {
  return buildScenarioMetricRows([
    {
      name: "Rural Bank modernization investment cash outflow before timing",
      value: (scenario, yearIndex) =>
        formulaCell(
          metricCell("09_Operating_Expenses", scenario, 10, 8, yearIndex),
          roundCurrency(
            (vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("LIC-005", scenario)) / 12 +
              vectorFor("ADP-001", scenario)[yearIndex] * valueFor("OPS-001", scenario) +
              vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("OPS-002", scenario) +
              vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex] * valueFor("CLD-001", scenario),
          ),
        ),
    },
    {
      name: "Rural Bank incremental cash contribution before RB-002",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("10_Rural_Bank_View", scenario, 3, 2, yearIndex), slice3Metrics(scenario, yearIndex).ruralBankCoreRevenue),
    },
    {
      name: "ODTI program contribution before blocked items",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("11_ODTI_View", scenario, 3, 1, yearIndex), slice3Metrics(scenario, yearIndex).odtiContribution),
    },
    {
      name: "DevOps contribution before blocked items",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("12_DevOps_View", scenario, 2, 1, yearIndex), slice3Metrics(scenario, yearIndex).devOpsContribution),
    },
    {
      name: "Consolidated contribution before blocked items",
      value: (scenario, yearIndex) =>
        formulaCell(metricCell("14_Consolidated_View", scenario, 4, 1, yearIndex), slice3Metrics(scenario, yearIndex).consolidatedCoreContribution),
    },
    {
      name: "Discount rate",
      value: () => "Blocked - FIN-001 not canonicalized",
    },
    {
      name: "NPV",
      value: () => "Blocked - cash-flow timing, discount rate, tax, RB-002, royalty, and NetBank prerequisites unresolved",
    },
    {
      name: "IRR",
      value: () => "Blocked - valid investment cash-flow sign pattern is not governed",
    },
    {
      name: "Simple payback",
      value: () => "Blocked - beginning investment and true cash-flow basis unavailable",
    },
  ]);
}

function selectedScenarioCellForMetric(sheetName, blockSize, metricOffset, yearIndex) {
  const refs = scenarios.map((scenario) => metricCell(sheetName, scenario, blockSize, metricOffset, yearIndex));
  return `CHOOSE(MATCH(${quotedSheetRef("01_Control", "$B$2")},{"Conservative","Base","Accelerated"},0),${refs.join(",")})`;
}

function buildExceljsSensitivityRows() {
  return [
    ["Sensitivity test", "Row driver", "Column driver", "Target output", "Current selected-scenario reference", "Status", "Notes"],
    [
      "Active banks versus employers per bank",
      "ADP-002 active banks",
      "CUS-001 payroll customers per active bank",
      "Year 5 consolidated contribution before blocked items",
      formulaCell(selectedScenarioCellForMetric("14_Consolidated_View", 4, 1, 4), slice3Metrics("Base", 4).consolidatedCoreContribution),
      "Ready as formula target",
      "Two-way grid remains a later implementation; this row locks the target output.",
    ],
    [
      "Employer monthly fee versus employer count",
      "EMP-002 employer monthly payroll-service fee",
      "Active employers",
      "Year 5 consolidated core external revenue",
      formulaCell(selectedScenarioCellForMetric("14_Consolidated_View", 4, 0, 4), slice3Metrics("Base", 4).coreExternalRevenue),
      "Ready as formula target",
      "Sensitivity must recalculate from assumptions, not paste static outputs.",
    ],
    [
      "Recipient fee versus transaction volume",
      "PRC-001 recipient disbursement fee",
      "Annual successful payroll transactions",
      "Year 5 ODTI contribution before blocked items",
      formulaCell(selectedScenarioCellForMetric("11_ODTI_View", 3, 1, 4), slice3Metrics("Base", 4).odtiContribution),
      "Ready as formula target",
      "Transaction-fee sensitivity remains secondary to employer recurring fee sensitivity.",
    ],
    [
      "Rural Bank retained amount versus volume",
      "RB-001 retained transaction amount",
      "Annual successful payroll transactions",
      "Year 5 Rural Bank Contribution Before Internal Bank Payroll-Support Cost",
      formulaCell(selectedScenarioCellForMetric("10_Rural_Bank_View", 3, 2, 4), slice3Metrics("Base", 4).ruralBankCoreRevenue),
      "Qualified",
      "True bank contribution remains blocked by RB-002.",
    ],
    [
      "ODTI support cost versus active banks",
      "ODTI-001 support cost",
      "ADP-002 active banks",
      "Year 5 ODTI contribution before blocked items",
      formulaCell(selectedScenarioCellForMetric("11_ODTI_View", 3, 1, 4), slice3Metrics("Base", 4).odtiContribution),
      "Ready as formula target",
      "Pre-tax, pre-royalty, NetBank-fee-blocked.",
    ],
    [
      "DevOps cost versus bank count",
      "OPS-003 direct DevOps cost",
      "ADP-002 active banks",
      "Year 5 DevOps contribution",
      formulaCell(selectedScenarioCellForMetric("12_DevOps_View", 2, 1, 4), slice3Metrics("Base", 4).devOpsContribution),
      "Ready as formula target",
      "Cloud remains outside DevOps under the Level 1 boundary.",
    ],
    [
      "Discount rate versus NPV",
      "FIN-001 discount rate",
      "Investment cash flow",
      "NPV",
      "Blocked",
      "Blocked",
      "FIN-001 and valid cash-flow basis are missing.",
    ],
    [
      "Shared modernization allocation versus Rural Bank contribution",
      "ALLOC-001 payroll share",
      "Shared modernization cost",
      "Full-cost stress-test result",
      "Blocked",
      "Blocked",
      "Shared allocation remains deferred until additional offerings are modeled.",
    ],
  ];
}

function resolvedModernizationCost(scenario, yearIndex) {
  const activeBankMonths = vectorFor("ADP-002", scenario)[yearIndex] * vectorFor("ADP-003", scenario)[yearIndex];
  return roundCurrency(
    (activeBankMonths * valueFor("LIC-005", scenario)) / 12 +
      vectorFor("ADP-001", scenario)[yearIndex] * valueFor("OPS-001", scenario) +
      activeBankMonths * valueFor("OPS-002", scenario) +
      activeBankMonths * valueFor("CLD-001", scenario),
  );
}

function buildExceljsScenarioRows() {
  const rows = [
    [
      "Metric",
      "Conservative Year 1",
      "Conservative Year 5",
      "Base Year 1",
      "Base Year 5",
      "Accelerated Year 1",
      "Accelerated Year 5",
      "Source / notes",
    ],
  ];

  function addRow(metric, sheetName, blockSize, metricOffset, getter, notes) {
    rows.push([
      metric,
      formulaCell(metricCell(sheetName, "Conservative", blockSize, metricOffset, 0), getter("Conservative", 0)),
      formulaCell(metricCell(sheetName, "Conservative", blockSize, metricOffset, 4), getter("Conservative", 4)),
      formulaCell(metricCell(sheetName, "Base", blockSize, metricOffset, 0), getter("Base", 0)),
      formulaCell(metricCell(sheetName, "Base", blockSize, metricOffset, 4), getter("Base", 4)),
      formulaCell(metricCell(sheetName, "Accelerated", blockSize, metricOffset, 0), getter("Accelerated", 0)),
      formulaCell(metricCell(sheetName, "Accelerated", blockSize, metricOffset, 4), getter("Accelerated", 4)),
      notes,
    ]);
  }

  addRow("Active banks", "04_Adoption", 6, 2, (scenario, yearIndex) => vectorFor("ADP-002", scenario)[yearIndex], "ADP-002.");
  addRow("Active employers", "04_Adoption", 6, 4, (scenario, yearIndex) => vectorFor("ADP-002", scenario)[yearIndex] * valueFor("CUS-001", scenario), "ADP-002 x CUS-001.");
  addRow("Annual successful payroll transactions", "05_Payroll_Activity", 3, 1, (scenario, yearIndex) => annualSuccessfulTransactions(scenario)[yearIndex], "ADP-002 x ADP-003 x derived VOL-001.");
  addRow("Consolidated Core External Revenue", "14_Consolidated_View", 4, 0, (scenario, yearIndex) => slice3Metrics(scenario, yearIndex).coreExternalRevenue, "External employer commercial fees counted once.");
  addRow("Consolidated Core Contribution Before Blocked Items", "14_Consolidated_View", 4, 1, (scenario, yearIndex) => slice3Metrics(scenario, yearIndex).consolidatedCoreContribution, "Pre-tax, pre-royalty, NetBank-fee-blocked.");
  addRow("Rural Bank Contribution Before Internal Bank Payroll-Support Cost", "10_Rural_Bank_View", 3, 2, (scenario, yearIndex) => slice3Metrics(scenario, yearIndex).ruralBankCoreRevenue, "Qualified by blocked RB-002.");
  addRow("ODTI Pre-Tax/Pre-Royalty/NetBank-Fee-Blocked Contribution", "11_ODTI_View", 3, 1, (scenario, yearIndex) => slice3Metrics(scenario, yearIndex).odtiContribution, "Final ODTI net result blocked.");
  addRow("DevOps Contribution", "12_DevOps_View", 2, 1, (scenario, yearIndex) => slice3Metrics(scenario, yearIndex).devOpsContribution, "Cloud remains outside DevOps.");
  addRow("Optional SMS Increment", "13_SMS_Variant", 5, 4, (scenario, yearIndex) => slice3Metrics(scenario, yearIndex).smsMargin, "Optional enhancement, excluded from Core Payroll headline.");
  rows.push(["NPV / IRR", "Blocked", "Blocked", "Blocked", "Blocked", "Blocked", "Blocked", "FIN-001, cash-flow timing, tax, RB-002, royalty, and NetBank prerequisites unresolved."]);
  return rows;
}

function buildExceljsDashboardRows() {
  return [
    ["Dashboard item", "Selected scenario value", "Source", "Status", "Notes"],
    ["Selected scenario", formulaCell(quotedSheetRef("01_Control", "$B$2"), "Base"), "01_Control", "OK", "Controlled scenario selector."],
    ["Active banks - Year 5", formulaCell(selectedScenarioCellForMetric("04_Adoption", 6, 2, 4), vectorFor("ADP-002", "Base")[4]), "04_Adoption / ADP-002", "OK", "Scenario-selected active banks."],
    ["Active employers - Year 5", formulaCell(selectedScenarioCellForMetric("04_Adoption", 6, 4, 4), vectorFor("ADP-002", "Base")[4] * valueFor("CUS-001", "Base")), "04_Adoption / CUS-001", "OK", "Active employers drive recurring service fees."],
    ["Annual successful payroll transactions - Year 5", formulaCell(selectedScenarioCellForMetric("05_Payroll_Activity", 3, 1, 4), annualSuccessfulTransactions("Base")[4]), "05_Payroll_Activity / VOL-001", "OK", "Component-derived volume."],
    ["Consolidated Core External Revenue - Year 5", formulaCell(selectedScenarioCellForMetric("14_Consolidated_View", 4, 0, 4), slice3Metrics("Base", 4).coreExternalRevenue), "14_Consolidated_View", "OK", "External customer inflows counted once."],
    ["Consolidated Core Contribution Before Blocked Items - Year 5", formulaCell(selectedScenarioCellForMetric("14_Consolidated_View", 4, 1, 4), slice3Metrics("Base", 4).consolidatedCoreContribution), "14_Consolidated_View", "OK", "Pre-tax, pre-royalty, NetBank-fee-blocked."],
    ["Rural Bank Contribution Before Internal Bank Payroll-Support Cost - Year 5", formulaCell(selectedScenarioCellForMetric("10_Rural_Bank_View", 3, 2, 4), slice3Metrics("Base", 4).ruralBankCoreRevenue), "10_Rural_Bank_View / RB-002", "Qualified", "True bank contribution remains blocked by RB-002."],
    ["ODTI Contribution - Year 5", formulaCell(selectedScenarioCellForMetric("11_ODTI_View", 3, 1, 4), slice3Metrics("Base", 4).odtiContribution), "11_ODTI_View", "Qualified", "Pre-tax, pre-royalty, NetBank-fee-blocked."],
    ["DevOps Contribution - Year 5", formulaCell(selectedScenarioCellForMetric("12_DevOps_View", 2, 1, 4), slice3Metrics("Base", 4).devOpsContribution), "12_DevOps_View", "OK", "Direct recurring cost only; cloud remains outside DevOps."],
    ["Optional SMS Increment - Year 5", formulaCell(selectedScenarioCellForMetric("13_SMS_Variant", 5, 4, 4), slice3Metrics("Base", 4).smsMargin), "13_SMS_Variant", "Optional", "SMS is not part of Core Payroll headline."],
    [
      "Full-Cost Stand-Alone Stress Result - Year 5",
      formulaCell(`${selectedScenarioCellForMetric("14_Consolidated_View", 4, 1, 4)}-${selectedScenarioCellForMetric("09_Operating_Expenses", 10, 8, 4)}`, roundCurrency(slice3Metrics("Base", 4).consolidatedCoreContribution - resolvedModernizationCost("Base", 4))),
      "14_Consolidated_View less 09_Operating_Expenses",
      "Stress test",
      "Payroll alone remains a stress-test view, not the primary operating view.",
    ],
    ["Blocked-input count", blockedInputs.length, "02_Assumptions / blocked input register", "Blocked visible", "Blocked items are visible rather than treated as zero."],
    ["ERROR count", formulaCell('COUNTIF(\'21_Checks\'!$E$2:$E$200,"ERROR")', 0), "21_Checks", "OK", "Dashboard surfaces model check failures."],
    ["NPV / IRR", "Blocked", "17_Capital_Budgeting", "Blocked", "FIN-001 and valid cash-flow series are unavailable."],
  ];
}

function buildExceljsSourceLineageRows() {
  return [
    ["Workbook item", "Assumption IDs", "Source document", "Workbook sheets", "Provisional input IDs / decisions", "Status"],
    ["Adoption and activation", "ADP-001; ADP-002; ADP-003", sourceDocuments.provisionalInputs, "02_Assumptions; 04_Adoption; 19_Scenarios; 20_Dashboard", "PI-L1-001; PI-L1-002; PI-L1-003", "Provisional"],
    ["Payroll activity", "CUS-001; CUS-002; CUS-003; VOL-002; VOL-001", sourceDocuments.provisionalInputs, "05_Payroll_Activity; 19_Scenarios", "PI-L1-004 through PI-L1-008", "Derived and provisional"],
    ["Pricing and employer fees", "EMP-001; EMP-002; PRC-001; RB-001", sourceDocuments.provisionalInputs, "06_Pricing; 07_Revenue", "PI-L1-009; PI-L1-010; PI-L1-013; PI-L1-014", "Provisional"],
    ["Stakeholder revenue splits", "Decision 0003", "docs/decisions/0003-payroll-starter-economic-treatment.md", "06_Pricing; 10_Rural_Bank_View; 11_ODTI_View", "PI-L1-015; PI-L1-016", "Decision-backed provisional"],
    ["Rural Bank contribution", "RB-001; RB-002; RISK-002", sourceDocuments.level1Model, "10_Rural_Bank_View; 15_Profit_and_Loss; 20_Dashboard", "PI-L1-014; RB-002 blocked; PI-L1-023", "Qualified / blocked"],
    ["ODTI contribution", "LIC-004; LIC-005; ODTI-001; ODTI-002; TAX-001; ROY-001; NET-001", sourceDocuments.level1Model, "11_ODTI_View; 15_Profit_and_Loss", "PI-L1-011; PI-L1-012; PI-L1-017; PI-L1-018", "Qualified / blocked"],
    ["DevOps economics", "OPS-001; OPS-002; OPS-003; CLD-001", sourceDocuments.level1Model, "12_DevOps_View; 09_Operating_Expenses", "PI-L1-019; PI-L1-020; PI-L1-021; PI-L1-022", "Provisional"],
    ["Optional SMS economics", "ATT-001; VAS-001; CST-001; SMS-001; SMS-002; SMS-003; SMS-004", sourceDocuments.level1Model, "13_SMS_Variant", "PI-L1-024 through PI-L1-030", "Optional / partially blocked"],
    ["Consolidated external revenue", "EMP-001; EMP-002; PRC-001; RISK-002", sourceDocuments.summary, "14_Consolidated_View; 19_Scenarios; 20_Dashboard", "PI-L1-009; PI-L1-010; PI-L1-013; PI-L1-023", "Provisional"],
    ["Cost classification", "CST-001; CLD-001; NET-001; TAX-001", sourceDocuments.specification, "08_Cost_of_Sales; 09_Operating_Expenses", "PI-L1-026; PI-L1-022; NET-001 blocked; TAX-001 blocked", "Qualified / blocked"],
    ["Management P&L", "RB-002; TAX-001; ROY-001; NET-001", sourceDocuments.specification, "15_Profit_and_Loss", "Blocked exclusions", "Management view only"],
    ["Cash-flow limitations", "COL-001; RISK-002", sourceDocuments.specification, "16_Cash_Flow", "COL-001 blocked; PI-L1-023", "Blocked where timing is required"],
    ["Capital-budgeting gates", "FIN-001; COL-001; TAX-001; RB-002", sourceDocuments.specification, "17_Capital_Budgeting", "Future FIN-001 required", "Blocked"],
    ["Sensitivity grids", "ADP-002; CUS-001; EMP-002; PRC-001; RB-001; ODTI-001; OPS-003", sourceDocuments.specification, "18_Sensitivity", "Existing provisional inputs", "Formula target scaffold"],
    ["Blocked assumptions and exclusions", blockedInputs.map(([assumptionId]) => assumptionId).join("; "), sourceDocuments.provisionalInputs, "02_Assumptions; 21_Checks; 22_Source_Lineage", "Blocked/excluded rows", "Blocked or excluded"],
  ];
}

function slice6CheckRows() {
  return [
    ["Scenario comparison consumes model outputs", "19_Scenarios", "Linked", 0, "OK", "Scenario table references existing workbook sheets."],
    ["Dashboard uses linked outputs", "20_Dashboard", "Linked", 0, "OK", "Dashboard rows reference model outputs and controls."],
    ["Dashboard ERROR count surfaced", "20_Dashboard", "Visible", 0, "OK", "ERROR count links to 21_Checks."],
    ["Warnings remain visible", "00_Read_Me; 20_Dashboard", "Visible", 0, "OK", "Workbook warning remains on Read Me; dashboard preserves blocked metrics."],
    ["Source lineage covers required categories", slice6LineageCategories.length, slice6LineageCategories.length, 0, "OK", "22_Source_Lineage maps the primary model areas."],
    ["No workbook-as-source-of-truth lineage", "22_Source_Lineage", "Repository documents", 0, "OK", "Lineage points to canonical documents and assumptions."],
    ["NPV and IRR remain blocked", "17_Capital_Budgeting", "Blocked", "", "Blocked", "No discount-rate or cash-flow authorization exists."],
    ["Stakeholder revenue remains non-additive", "07_Revenue warning", "Non-additive", 0, "OK", "Consolidated external revenue remains separate."],
    ["Core Payroll and SMS remain separated", "13_SMS_Variant optional", "Separated", 0, "OK", "Dashboard and scenarios keep SMS optional."],
    ["Model status", "No ERROR rows", "OK", 0, "OK", "Blocked rows are known limitations, not validation errors."],
  ];
}

function slice5CheckRows() {
  return [
    ["NPV uses cash flows only", "No NPV calculated", "Blocked", "", "Blocked", "FIN-001 and cash-flow prerequisites are unavailable."],
    ["IRR sign pattern valid", "No IRR calculated", "Blocked", "", "Blocked", "No governed investment cash-flow series exists."],
    ["Discount rate assumption exists", "FIN-001 missing", "Blocked", "", "Blocked", "Future assumptions-register update required."],
    ["Sensitivity targets link to model outputs", "18_Sensitivity", "Linked", 0, "OK", "Formula targets reference workbook outputs."],
    ["No pasted valuation outputs", "17_Capital_Budgeting", "Blocked rows", 0, "OK", "NPV and IRR are not hardcoded or forced."],
    ["Rural Bank NPV blocked", "RB-002; cash timing; FIN-001", "Blocked", "", "Blocked", "True Rural Bank cash flow remains unavailable."],
    ["ODTI NPV blocked", "Tax; royalty; NetBank; cash timing", "Blocked", "", "Blocked", "Final ODTI cash flow remains unavailable."],
    ["Discount-rate sensitivity blocked", "FIN-001 missing", "Blocked", "", "Blocked", "No discount-rate matrix is produced."],
  ];
}

function slice4CheckRows() {
  return [
    ["Payroll funding excluded from cost of sales", "Pass-through only", "Excluded", 0, "OK", "No payroll funding appears as revenue or cost of sales."],
    ["SMS wholesale cost remains unreduced", "13_SMS_Variant wholesale row", "Visible", 0, "OK", "Wholesale provider cost is separate from non-collection."],
    ["Incremental and modernization costs separate", "09_Operating_Expenses", "Separate rows", 0, "OK", "Shared modernization cost is not merged into incremental Payroll contribution."],
    ["CLD-001 remains outside DevOps", "Public-cloud modernization cost", "Rural Bank external outflow", 0, "OK", "Cloud remains outside DevOps contribution."],
    ["RB-002 remains blocked", "Rural Bank true net contribution", "Blocked", "", "Blocked", "Internal bank support cost has no authorized value."],
    ["TAX-001 remains blocked", "Tax-adjusted net income", "Blocked", "", "Blocked", "No tax-adjusted result is produced."],
    ["ROY-001 remains blocked", "Post-royalty ODTI contribution", "Blocked", "", "Blocked", "No 3neti royalty adjustment is included."],
    ["NET-001 remains blocked", "NetBank fee-adjusted results", "Blocked", "", "Blocked", "No NetBank fee basis is approved."],
    ["Management P&L is not GAAP/PFRS", "15_Profit_and_Loss", "Qualified", 0, "OK", "Formal accounting presentation remains blocked."],
    ["Revenue is not assumed to equal cash receipt", "16_Cash_Flow", "COL-001 blocked", "", "Blocked", "Cash timing remains unresolved."],
    ["Ending cash remains blocked", "16_Cash_Flow", "Blocked", "", "Blocked", "Beginning cash and financing assumptions are unavailable."],
    ["NPV and IRR remain outside Slice 4", "17_Capital_Budgeting", "Future slice", "", "Blocked", "Capital budgeting remains Slice 5."],
  ];
}

function slice3CheckRows() {
  return [
    ["RB-001 <= PRC-001", "All scenarios", "True", 0, "OK", "Pricing split remains valid."],
    ["EMP-001 split sums to 100%", "All scenarios", "100%", 0, "OK", "Decision 0003 split rows."],
    ["EMP-002 split sums to 100%", "All scenarios", "100%", 0, "OK", "Decision 0003 split rows."],
    ["External revenue counts employer fees once", "All scenarios", "True", 0, "OK", "Core external revenue is separated from entity revenue."],
    ["Stakeholder revenue is non-additive", "All scenarios", "Warning visible", 0, "OK", "Entity revenue rows remain non-additive."],
    ["Core Payroll excludes SMS", "All scenarios", "True", 0, "OK", "SMS appears only in 13_SMS_Variant and optional consolidated rows."],
    ["SMS margin formula", "Collected revenue less wholesale cost", "True", 0, "OK", "Wholesale provider cost is not reduced by non-collection."],
    ["ODTI qualifiers", "Pre-tax/pre-royalty/NetBank-fee-blocked", "Visible", 0, "OK", "Blocked qualifiers preserved."],
    ["Blocked exclusions", "TAX-001; ROY-001; NET-001", "Blocked", "", "Blocked", "Final net results remain unavailable."],
  ];
}

function exceljsCheckRows() {
  return [
    ["Check", "Actual", "Expected", "Difference", "Status", "Notes"],
    ["Active banks <= cumulative onboarded banks", "All scenarios", "True", 0, "OK", "Validated by scaffold and formulas."],
    ["Weighted active months between 0 and 12", "All scenarios", "0 to 12", 0, "OK", "Validated by scaffold and formulas."],
    ["Active employers reconcile", "All scenarios", "ADP-002 x CUS-001", 0, "OK", "Formula-backed on 04_Adoption."],
    ["Newly onboarded employer relationships reconcile", "All scenarios", "ADP-001 x CUS-001", 0, "OK", "Formula-backed on 04_Adoption."],
    ["VOL-001 equals component-derived formula", "All scenarios", "CUS-001 x CUS-002 x CUS-003 x VOL-002", 0, "OK", "Formula-backed on 05_Payroll_Activity."],
    ["No independent VOL-001 input in component-derived mode", "Component-derived", "Component-derived", 0, "OK", "VOL-001 is displayed as derived only."],
    ["Annual successful transactions match canonical model", "All scenarios", "Canonical Level 1 values", 0, "OK", "Formula results match canonical activity table."],
    ["RB-001 <= PRC-001", "All scenarios", "True", 0, "OK", "Rural Bank retention cannot exceed recipient fee."],
    ["Blocked assumptions visibly blocked", "11 rows", "Visible", 0, "OK", "Blocked rows appear on 02_Assumptions."],
    ["NPV cash-flow linkage", "Unavailable", "Blocked", "", "Blocked", "Capital-budgeting prerequisites not yet implemented."],
    ["IRR sign pattern", "Unavailable", "Blocked", "", "Blocked", "Capital-budgeting prerequisites not yet implemented."],
  ];
}

async function loadExcelJs() {
  try {
    const exceljs = await import("exceljs");
    return exceljs.default || exceljs;
  } catch (error) {
    throw new Error(
      [
        "Repo-local workbook dependency exceljs is not available.",
        "Run npm install in this repository before using the exceljs generator.",
        `Original error: ${error.message}`,
      ].join("\n"),
    );
  }
}

async function checkExceljsRuntime() {
  await loadExcelJs();
  return {
    status: "OK",
    dependency: "exceljs",
  };
}

async function loadArtifactTool() {
  try {
    return await import("@oai/artifact-tool");
  } catch (error) {
    throw new Error(
      [
        "Spreadsheet runtime dependency @oai/artifact-tool is not available in this shell.",
        "Run this command only inside the spreadsheet artifact runtime or after the approved dependency loader provides node_modules.",
        `Original error: ${error.message}`,
      ].join("\n"),
    );
  }
}

async function checkSpreadsheetRuntime() {
  await loadArtifactTool();
  return {
    status: "OK",
    dependency: "@oai/artifact-tool",
  };
}

function applyExceljsSheetStyle(worksheet) {
  worksheet.views = [{ state: "frozen", ySplit: 1 }];
  worksheet.properties.defaultRowHeight = 18;

  const header = worksheet.getRow(1);
  header.font = { bold: true, color: { argb: "FFFFFFFF" } };
  header.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1F4E78" } };
  header.alignment = { vertical: "middle", wrapText: true };

  worksheet.columns.forEach((column) => {
    let width = 12;
    column.eachCell({ includeEmpty: false }, (cell) => {
      const raw = cell.value && typeof cell.value === "object" && cell.value.formula ? cell.value.result : cell.value;
      const length = raw === null || raw === undefined ? 0 : String(raw).length;
      width = Math.max(width, Math.min(length + 2, 42));
      cell.alignment = { vertical: "top", wrapText: true };
      if (typeof raw === "number") {
        cell.numFmt = "#,##0.0";
      }
      cell.border = {
        bottom: { style: "thin", color: { argb: "FFE5E7EB" } },
      };
    });
    column.width = width;
  });
}

function applyStatusStyling(worksheet, statusColumnNumber) {
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      return;
    }
    const status = row.getCell(statusColumnNumber).value;
    if (status === "OK") {
      row.getCell(statusColumnNumber).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFD9EAD3" } };
    }
    if (status === "Blocked") {
      row.getCell(statusColumnNumber).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFFFF2CC" } };
    }
    if (status === "ERROR") {
      row.getCell(statusColumnNumber).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF4CCCC" } };
    }
  });
}

function addExceljsWorksheet(workbook, name, rows) {
  const worksheet = workbook.addWorksheet(name);
  worksheet.addRows(rows);
  applyExceljsSheetStyle(worksheet);
  return worksheet;
}

function addExceljsDefinedNames(workbook) {
  workbook.definedNames.add("'01_Control'!$B$2", "ScenarioSelected");
  workbook.definedNames.add("'01_Control'!$B$7", "VolumeMethod");
  workbook.definedNames.add("'02_Assumptions'!$A$1:$M$200", "AssumptionTable");
  workbook.definedNames.add("'05_Payroll_Activity'!$C$2:$G$2", "VOL_001_Derived");
  workbook.definedNames.add("'05_Payroll_Activity'!$C$3:$G$3", "AnnualSuccessfulTransactions");
}

function initializeExceljsWorkbook(ExcelJS) {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "x-commerce finance artifact generator";
  workbook.created = new Date("2026-07-13T00:00:00.000Z");
  workbook.modified = new Date("2026-07-13T00:00:00.000Z");
  workbook.calcProperties.fullCalcOnLoad = true;
  return workbook;
}

function populateSlice2WorkbookExceljs(workbook) {
  const { rows: assumptionExportRows, index: assumptionIndex } = buildExceljsAssumptionRows();

  addExceljsWorksheet(workbook, "00_Read_Me", readMeRows());
  const control = addExceljsWorksheet(workbook, "01_Control", controlRows());
  control.getCell("B2").dataValidation = {
    type: "list",
    allowBlank: false,
    formulae: ['"Conservative,Base,Accelerated"'],
  };
  control.getCell("B5").dataValidation = {
    type: "list",
    allowBlank: false,
    formulae: ['"Yes,No"'],
  };
  addExceljsWorksheet(workbook, "02_Assumptions", assumptionExportRows);
  addExceljsWorksheet(workbook, "03_Assumption_Map", assumptionMapRows());
  addExceljsWorksheet(workbook, "04_Adoption", buildExceljsAdoptionRows(assumptionIndex));
  addExceljsWorksheet(workbook, "05_Payroll_Activity", buildExceljsPayrollActivityRows(assumptionIndex));
  const checks = addExceljsWorksheet(workbook, "21_Checks", exceljsCheckRows());
  applyStatusStyling(checks, 5);
  addExceljsDefinedNames(workbook);

  return { assumptionIndex };
}

async function buildSlice2WorkbookExceljs(outputPath = defaultWorkbookPath) {
  runSlice2ExportScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = initializeExceljsWorkbook(ExcelJS);
  populateSlice2WorkbookExceljs(workbook);

  const outputDir = outputPath.includes("/") ? outputPath.split("/").slice(0, -1).join("/") : ".";
  await fs.mkdir(outputDir, { recursive: true });
  await workbook.xlsx.writeFile(outputPath);
  return outputPath;
}

function addSlice3WorkbookSheetsExceljs(workbook, assumptionIndex) {
  const { rows: pricingRows, index: pricingIndex } = buildExceljsPricingRows(assumptionIndex);
  addExceljsWorksheet(workbook, "06_Pricing", pricingRows);
  addExceljsWorksheet(workbook, "07_Revenue", buildExceljsRevenueRows(pricingIndex));
  addExceljsWorksheet(workbook, "10_Rural_Bank_View", buildExceljsRuralBankRows(pricingIndex));
  addExceljsWorksheet(workbook, "11_ODTI_View", buildExceljsOdtiRows(pricingIndex, assumptionIndex));
  addExceljsWorksheet(workbook, "12_DevOps_View", buildExceljsDevOpsRows(assumptionIndex));
  addExceljsWorksheet(workbook, "13_SMS_Variant", buildExceljsSmsRows(pricingIndex));
  addExceljsWorksheet(workbook, "14_Consolidated_View", buildExceljsConsolidatedRows(pricingIndex, assumptionIndex));

  const checks = workbook.getWorksheet("21_Checks");
  checks.addRows(slice3CheckRows());
  applyStatusStyling(checks, 5);
}

function addSlice4WorkbookSheetsExceljs(workbook, assumptionIndex) {
  addExceljsWorksheet(workbook, "08_Cost_of_Sales", buildExceljsCostOfSalesRows(assumptionIndex));
  addExceljsWorksheet(workbook, "09_Operating_Expenses", buildExceljsOperatingExpenseRows(assumptionIndex));
  addExceljsWorksheet(workbook, "15_Profit_and_Loss", buildExceljsProfitAndLossRows());
  addExceljsWorksheet(workbook, "16_Cash_Flow", buildExceljsCashFlowRows(assumptionIndex));

  const checks = workbook.getWorksheet("21_Checks");
  checks.addRows(slice4CheckRows());
  applyStatusStyling(checks, 5);
}

function addSlice5WorkbookSheetsExceljs(workbook) {
  addExceljsWorksheet(workbook, "17_Capital_Budgeting", buildExceljsCapitalBudgetingRows());
  const sensitivity = addExceljsWorksheet(workbook, "18_Sensitivity", buildExceljsSensitivityRows());
  applyStatusStyling(sensitivity, 6);

  const checks = workbook.getWorksheet("21_Checks");
  checks.addRows(slice5CheckRows());
  applyStatusStyling(checks, 5);
}

function addSlice6WorkbookSheetsExceljs(workbook) {
  addExceljsWorksheet(workbook, "19_Scenarios", buildExceljsScenarioRows());
  const dashboard = addExceljsWorksheet(workbook, "20_Dashboard", buildExceljsDashboardRows());
  applyStatusStyling(dashboard, 4);
  const lineage = addExceljsWorksheet(workbook, "22_Source_Lineage", buildExceljsSourceLineageRows());
  applyStatusStyling(lineage, 6);

  const checks = workbook.getWorksheet("21_Checks");
  checks.addRows(slice6CheckRows());
  applyStatusStyling(checks, 5);
}

async function buildSlice3WorkbookExceljs(outputPath = defaultWorkbookPath) {
  runSlice3ExportScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = initializeExceljsWorkbook(ExcelJS);
  const { assumptionIndex } = populateSlice2WorkbookExceljs(workbook);
  addSlice3WorkbookSheetsExceljs(workbook, assumptionIndex);

  const outputDir = outputPath.includes("/") ? outputPath.split("/").slice(0, -1).join("/") : ".";
  await fs.mkdir(outputDir, { recursive: true });
  await workbook.xlsx.writeFile(outputPath);
  return outputPath;
}

async function buildSlice4WorkbookExceljs(outputPath = defaultWorkbookPath) {
  runSlice4ScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = initializeExceljsWorkbook(ExcelJS);
  const { assumptionIndex } = populateSlice2WorkbookExceljs(workbook);
  addSlice3WorkbookSheetsExceljs(workbook, assumptionIndex);
  addSlice4WorkbookSheetsExceljs(workbook, assumptionIndex);

  const outputDir = outputPath.includes("/") ? outputPath.split("/").slice(0, -1).join("/") : ".";
  await fs.mkdir(outputDir, { recursive: true });
  await workbook.xlsx.writeFile(outputPath);
  return outputPath;
}

async function buildSlice5WorkbookExceljs(outputPath = defaultWorkbookPath) {
  runSlice5ScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = initializeExceljsWorkbook(ExcelJS);
  const { assumptionIndex } = populateSlice2WorkbookExceljs(workbook);
  addSlice3WorkbookSheetsExceljs(workbook, assumptionIndex);
  addSlice4WorkbookSheetsExceljs(workbook, assumptionIndex);
  addSlice5WorkbookSheetsExceljs(workbook);

  const outputDir = outputPath.includes("/") ? outputPath.split("/").slice(0, -1).join("/") : ".";
  await fs.mkdir(outputDir, { recursive: true });
  await workbook.xlsx.writeFile(outputPath);
  return outputPath;
}

async function buildSlice6WorkbookExceljs(outputPath = defaultWorkbookPath) {
  runSlice6ScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = initializeExceljsWorkbook(ExcelJS);
  const { assumptionIndex } = populateSlice2WorkbookExceljs(workbook);
  addSlice3WorkbookSheetsExceljs(workbook, assumptionIndex);
  addSlice4WorkbookSheetsExceljs(workbook, assumptionIndex);
  addSlice5WorkbookSheetsExceljs(workbook);
  addSlice6WorkbookSheetsExceljs(workbook);

  const outputDir = outputPath.includes("/") ? outputPath.split("/").slice(0, -1).join("/") : ".";
  await fs.mkdir(outputDir, { recursive: true });
  await workbook.xlsx.writeFile(outputPath);
  return outputPath;
}

async function buildSlice7WorkbookExceljs(outputPath = defaultWorkbookPath) {
  runSlice7ScaffoldValidation();
  return buildSlice6WorkbookExceljs(outputPath);
}

function resolvedExceljsValue(cell) {
  if (cell.value && typeof cell.value === "object" && "result" in cell.value) {
    return cell.value.result;
  }
  return cell.value;
}

function countExceljsFormulas(workbook) {
  let formulaCount = 0;
  for (const worksheet of workbook.worksheets) {
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        if (cell.value && typeof cell.value === "object" && "formula" in cell.value) {
          formulaCount += 1;
        }
      });
    });
  }
  return formulaCount;
}

function findExceljsFormulaReferenceErrors(workbook) {
  const errors = [];
  for (const worksheet of workbook.worksheets) {
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        if (cell.value && typeof cell.value === "object" && "formula" in cell.value) {
          const formula = cell.value.formula;
          if (/#REF!|#DIV\/0!|#VALUE!|#NAME\?|#N\/A/.test(formula)) {
            errors.push(`${worksheet.name}!${cell.address}: ${formula}`);
          }
        }
      });
    });
  }
  return errors;
}

function findMetricRow(worksheet, scenario, metric) {
  let found;
  worksheet.eachRow((row) => {
    if (row.getCell(1).value === scenario && row.getCell(2).value === metric) {
      found = row;
    }
  });
  if (!found) {
    throw new Error(`Missing row for ${scenario}: ${metric} on ${worksheet.name}`);
  }
  return found;
}

async function validateSlice2WorkbookExceljs(inputPath = defaultWorkbookPath) {
  runSlice2ExportScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(inputPath);

  const sheetNames = workbook.worksheets.map((worksheet) => worksheet.name);
  for (const sheetName of slice2Sheets) {
    assert(sheetNames.includes(sheetName), `Workbook is missing Slice 2 sheet ${sheetName}`);
  }

  const formulaCount = countExceljsFormulas(workbook);
  assert(formulaCount > 20, "Slice 2 workbook should contain formula-backed calculation cells");

  const readMe = workbook.getWorksheet("00_Read_Me");
  assert(
    String(readMe.getCell("B4").value).includes("not an approved budget"),
    "Read Me warning is missing or changed",
  );

  const activity = workbook.getWorksheet("05_Payroll_Activity");
  for (const scenario of scenarios) {
    const volRow = findMetricRow(activity, scenario, "Derived VOL-001");
    const annualRow = findMetricRow(activity, scenario, "Annual successful payroll transactions");
    assert(
      nearlyEqual(resolvedExceljsValue(volRow.getCell(3)), canonicalActivity[scenario].vol001, 0.01),
      `Workbook VOL-001 mismatch for ${scenario}`,
    );
    for (const [indexNumber, expected] of canonicalActivity[scenario].annualTransactions.entries()) {
      assert(
        nearlyEqual(resolvedExceljsValue(annualRow.getCell(indexNumber + 3)), expected, 0.01),
        `Workbook annual transaction mismatch for ${scenario} ${years[indexNumber]}`,
      );
    }
  }

  const checks = workbook.getWorksheet("21_Checks");
  const statuses = [];
  checks.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      statuses.push(row.getCell(5).value);
    }
  });
  assert(!statuses.includes("ERROR"), "Slice 2 workbook contains ERROR status rows");

  return {
    inputPath,
    sheetCount: sheetNames.length,
    requiredSlice2Sheets: slice2Sheets.length,
    formulaCount,
    statusRows: statuses.length,
  };
}

async function validateSlice3WorkbookExceljs(inputPath = defaultWorkbookPath) {
  runSlice3ExportScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(inputPath);

  const sheetNames = workbook.worksheets.map((worksheet) => worksheet.name);
  for (const sheetName of [...slice2Sheets, ...slice3Sheets.filter((sheetName) => sheetName !== "21_Checks")]) {
    assert(sheetNames.includes(sheetName), `Workbook is missing required sheet ${sheetName}`);
  }

  const formulaCount = countExceljsFormulas(workbook);
  assert(formulaCount > 250, "Slice 3 workbook should contain expanded formula-backed calculation cells");

  const revenue = workbook.getWorksheet("07_Revenue");
  const ruralBank = workbook.getWorksheet("10_Rural_Bank_View");
  const odti = workbook.getWorksheet("11_ODTI_View");
  const devOps = workbook.getWorksheet("12_DevOps_View");
  const sms = workbook.getWorksheet("13_SMS_Variant");
  const consolidated = workbook.getWorksheet("14_Consolidated_View");

  for (const [scenario, scenarioSamples] of Object.entries(canonicalSlice3Samples)) {
    for (const [yearLabel, expected] of Object.entries(scenarioSamples)) {
      const yearIndex = years.indexOf(yearLabel);
      assert(yearIndex !== -1, `Unknown year ${yearLabel}`);
      assert(
        nearlyEqual(resolvedExceljsValue(findMetricRow(revenue, scenario, "Core external revenue").getCell(yearIndex + 3)), expected.coreExternalRevenue, 0.01),
        `Slice 3 workbook core external revenue mismatch for ${scenario} ${yearLabel}`,
      );
      assert(
        nearlyEqual(resolvedExceljsValue(findMetricRow(ruralBank, scenario, "Rural Bank core revenue").getCell(yearIndex + 3)), expected.ruralBankCoreRevenue, 0.01),
        `Slice 3 workbook Rural Bank revenue mismatch for ${scenario} ${yearLabel}`,
      );
      assert(
        nearlyEqual(resolvedExceljsValue(findMetricRow(odti, scenario, "ODTI core revenue").getCell(yearIndex + 3)), expected.odtiCoreRevenue, 0.01),
        `Slice 3 workbook ODTI revenue mismatch for ${scenario} ${yearLabel}`,
      );
      assert(
        nearlyEqual(resolvedExceljsValue(findMetricRow(devOps, scenario, "DevOps revenue").getCell(yearIndex + 3)), expected.devOpsRevenue, 0.01),
        `Slice 3 workbook DevOps revenue mismatch for ${scenario} ${yearLabel}`,
      );
      assert(
        nearlyEqual(resolvedExceljsValue(findMetricRow(consolidated, scenario, "Core consolidated contribution before blocked items").getCell(yearIndex + 3)), expected.consolidatedCoreContribution, 0.01),
        `Slice 3 workbook consolidated contribution mismatch for ${scenario} ${yearLabel}`,
      );
      assert(
        nearlyEqual(resolvedExceljsValue(findMetricRow(sms, scenario, "Rural Bank SMS margin").getCell(yearIndex + 3)), expected.smsMargin, 0.01),
        `Slice 3 workbook SMS margin mismatch for ${scenario} ${yearLabel}`,
      );
    }
  }

  const checks = workbook.getWorksheet("21_Checks");
  const statuses = [];
  checks.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      statuses.push(row.getCell(5).value);
    }
  });
  assert(!statuses.includes("ERROR"), "Slice 3 workbook contains ERROR status rows");

  return {
    inputPath,
    sheetCount: sheetNames.length,
    requiredSheets: new Set([...slice2Sheets, ...slice3Sheets]).size,
    formulaCount,
    paritySamples: Object.values(canonicalSlice3Samples).reduce((total, scenario) => total + Object.keys(scenario).length, 0),
    statusRows: statuses.length,
  };
}

async function validateSlice4WorkbookExceljs(inputPath = defaultWorkbookPath) {
  runSlice4ScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(inputPath);

  const sheetNames = workbook.worksheets.map((worksheet) => worksheet.name);
  for (const sheetName of [
    ...slice2Sheets,
    ...slice3Sheets.filter((sheetName) => sheetName !== "21_Checks"),
    ...slice4Sheets.filter((sheetName) => sheetName !== "21_Checks"),
  ]) {
    assert(sheetNames.includes(sheetName), `Workbook is missing required sheet ${sheetName}`);
  }

  const formulaCount = countExceljsFormulas(workbook);
  assert(formulaCount > 700, "Slice 4 workbook should contain expanded cost, P&L, and cash-flow formulas");

  const costOfSales = workbook.getWorksheet("08_Cost_of_Sales");
  const operatingExpenses = workbook.getWorksheet("09_Operating_Expenses");
  const profitAndLoss = workbook.getWorksheet("15_Profit_and_Loss");
  const cashFlow = workbook.getWorksheet("16_Cash_Flow");

  for (const [scenario, scenarioSamples] of Object.entries(canonicalSlice3Samples)) {
    for (const [yearLabel, expected] of Object.entries(scenarioSamples)) {
      const yearIndex = years.indexOf(yearLabel);
      assert(yearIndex !== -1, `Unknown year ${yearLabel}`);
      assert(
        nearlyEqual(
          resolvedExceljsValue(findMetricRow(costOfSales, scenario, "SMS wholesale provider cost").getCell(yearIndex + 3)),
          slice3Metrics(scenario, yearIndex).smsWholesaleCost,
          0.01,
        ),
        `Slice 4 workbook SMS wholesale cost mismatch for ${scenario} ${yearLabel}`,
      );
      assert(
        nearlyEqual(
          resolvedExceljsValue(findMetricRow(operatingExpenses, scenario, "ODTI payroll-specific operating cost").getCell(yearIndex + 3)),
          slice3Metrics(scenario, yearIndex).odtiCoreRevenue - slice3Metrics(scenario, yearIndex).odtiContribution,
          0.01,
        ),
        `Slice 4 workbook ODTI operating cost mismatch for ${scenario} ${yearLabel}`,
      );
      assert(
        nearlyEqual(
          resolvedExceljsValue(findMetricRow(profitAndLoss, scenario, "Consolidated contribution before blocked items").getCell(yearIndex + 3)),
          expected.consolidatedCoreContribution,
          0.01,
        ),
        `Slice 4 workbook P&L consolidated contribution mismatch for ${scenario} ${yearLabel}`,
      );
      assert(
        nearlyEqual(
          resolvedExceljsValue(findMetricRow(cashFlow, scenario, "Recognized core external revenue").getCell(yearIndex + 3)),
          expected.coreExternalRevenue,
          0.01,
        ),
        `Slice 4 workbook cash-flow recognized revenue mismatch for ${scenario} ${yearLabel}`,
      );
    }
  }

  const checks = workbook.getWorksheet("21_Checks");
  const statuses = [];
  checks.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      statuses.push(row.getCell(5).value);
    }
  });
  assert(!statuses.includes("ERROR"), "Slice 4 workbook contains ERROR status rows");

  const blockedText = [];
  for (const worksheet of [costOfSales, operatingExpenses, profitAndLoss, cashFlow]) {
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        const value = resolvedExceljsValue(cell);
        if (typeof value === "string" && value.includes("Blocked")) {
          blockedText.push(value);
        }
      });
    });
  }
  assert(blockedText.length >= 10, "Slice 4 workbook should visibly preserve blocked outputs");

  return {
    inputPath,
    sheetCount: sheetNames.length,
    requiredSheets: new Set([...slice2Sheets, ...slice3Sheets, ...slice4Sheets]).size,
    formulaCount,
    paritySamples: Object.values(canonicalSlice3Samples).reduce((total, scenario) => total + Object.keys(scenario).length, 0),
    statusRows: statuses.length,
    blockedRows: blockedText.length,
  };
}

async function validateSlice5WorkbookExceljs(inputPath = defaultWorkbookPath) {
  runSlice5ScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(inputPath);

  const sheetNames = workbook.worksheets.map((worksheet) => worksheet.name);
  for (const sheetName of [
    ...slice2Sheets,
    ...slice3Sheets.filter((sheetName) => sheetName !== "21_Checks"),
    ...slice4Sheets.filter((sheetName) => sheetName !== "21_Checks"),
    ...slice5Sheets.filter((sheetName) => sheetName !== "21_Checks"),
  ]) {
    assert(sheetNames.includes(sheetName), `Workbook is missing required sheet ${sheetName}`);
  }

  const formulaCount = countExceljsFormulas(workbook);
  assert(formulaCount > 1000, "Slice 5 workbook should contain capital-budgeting and sensitivity formulas");

  const capitalBudgeting = workbook.getWorksheet("17_Capital_Budgeting");
  const sensitivity = workbook.getWorksheet("18_Sensitivity");

  for (const [scenario, scenarioSamples] of Object.entries(canonicalSlice3Samples)) {
    for (const [yearLabel, expected] of Object.entries(scenarioSamples)) {
      const yearIndex = years.indexOf(yearLabel);
      assert(yearIndex !== -1, `Unknown year ${yearLabel}`);
      assert(
        nearlyEqual(
          resolvedExceljsValue(findMetricRow(capitalBudgeting, scenario, "Consolidated contribution before blocked items").getCell(yearIndex + 3)),
          expected.consolidatedCoreContribution,
          0.01,
        ),
        `Slice 5 workbook capital-budgeting contribution mismatch for ${scenario} ${yearLabel}`,
      );
    }
  }

  const blockedRows = [];
  for (const worksheet of [capitalBudgeting, sensitivity]) {
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        const value = resolvedExceljsValue(cell);
        if (typeof value === "string" && value.includes("Blocked")) {
          blockedRows.push(value);
        }
      });
    });
  }
  assert(blockedRows.length >= 10, "Slice 5 workbook should visibly block unavailable return outputs");

  const checks = workbook.getWorksheet("21_Checks");
  const statuses = [];
  checks.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      statuses.push(row.getCell(5).value);
    }
  });
  assert(!statuses.includes("ERROR"), "Slice 5 workbook contains ERROR status rows");

  const sensitivityStatuses = [];
  sensitivity.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      sensitivityStatuses.push(row.getCell(6).value);
    }
  });
  assert(sensitivityStatuses.includes("Ready as formula target"), "Slice 5 sensitivity sheet should include linked formula targets");
  assert(sensitivityStatuses.includes("Blocked"), "Slice 5 sensitivity sheet should preserve blocked valuation sensitivities");

  return {
    inputPath,
    sheetCount: sheetNames.length,
    requiredSheets: new Set([...slice2Sheets, ...slice3Sheets, ...slice4Sheets, ...slice5Sheets]).size,
    formulaCount,
    paritySamples: Object.values(canonicalSlice3Samples).reduce((total, scenario) => total + Object.keys(scenario).length, 0),
    statusRows: statuses.length,
    blockedRows: blockedRows.length,
    sensitivityRows: sensitivityStatuses.length,
  };
}

async function validateSlice6WorkbookExceljs(inputPath = defaultWorkbookPath) {
  runSlice6ScaffoldValidation();
  const ExcelJS = await loadExcelJs();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(inputPath);

  const sheetNames = workbook.worksheets.map((worksheet) => worksheet.name);
  for (const sheetName of [
    ...slice2Sheets,
    ...slice3Sheets.filter((sheetName) => sheetName !== "21_Checks"),
    ...slice4Sheets.filter((sheetName) => sheetName !== "21_Checks"),
    ...slice5Sheets.filter((sheetName) => sheetName !== "21_Checks"),
    ...slice6Sheets.filter((sheetName) => sheetName !== "21_Checks"),
  ]) {
    assert(sheetNames.includes(sheetName), `Workbook is missing required sheet ${sheetName}`);
  }

  const formulaCount = countExceljsFormulas(workbook);
  assert(formulaCount > 1050, "Slice 6 workbook should contain dashboard and scenario formulas");

  const scenariosSheet = workbook.getWorksheet("19_Scenarios");
  const dashboard = workbook.getWorksheet("20_Dashboard");
  const lineage = workbook.getWorksheet("22_Source_Lineage");

  assert(
    nearlyEqual(resolvedExceljsValue(scenariosSheet.getRow(5).getCell(4)), slice3Metrics("Base", 0).coreExternalRevenue, 0.01),
    "Slice 6 scenario table Base Year 1 external revenue mismatch",
  );
  assert(
    nearlyEqual(resolvedExceljsValue(scenariosSheet.getRow(5).getCell(5)), slice3Metrics("Base", 4).coreExternalRevenue, 0.01),
    "Slice 6 scenario table Base Year 5 external revenue mismatch",
  );
  assert(
    nearlyEqual(resolvedExceljsValue(dashboard.getRow(6).getCell(2)), slice3Metrics("Base", 4).coreExternalRevenue, 0.01),
    "Slice 6 dashboard Year 5 external revenue mismatch",
  );
  assert(
    resolvedExceljsValue(dashboard.getRow(15).getCell(2)) === "Blocked",
    "Slice 6 dashboard must keep NPV / IRR blocked",
  );

  const lineageItems = [];
  lineage.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      lineageItems.push(row.getCell(1).value);
    }
  });
  for (const category of slice6LineageCategories) {
    assert(lineageItems.includes(category), `Slice 6 lineage sheet missing category ${category}`);
  }

  const checks = workbook.getWorksheet("21_Checks");
  const statuses = [];
  checks.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      statuses.push(row.getCell(5).value);
    }
  });
  assert(!statuses.includes("ERROR"), "Slice 6 workbook contains ERROR status rows");

  return {
    inputPath,
    sheetCount: sheetNames.length,
    requiredSheets: new Set([...slice2Sheets, ...slice3Sheets, ...slice4Sheets, ...slice5Sheets, ...slice6Sheets]).size,
    formulaCount,
    dashboardRows: dashboard.rowCount - 1,
    lineageRows: lineageItems.length,
    statusRows: statuses.length,
  };
}

async function validateSlice7WorkbookExceljs(inputPath = defaultWorkbookPath) {
  runSlice7ScaffoldValidation();
  const slice6Result = await validateSlice6WorkbookExceljs(inputPath);
  const ExcelJS = await loadExcelJs();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(inputPath);

  const sheetNames = workbook.worksheets.map((worksheet) => worksheet.name);
  for (const sheetName of workbookSheets) {
    assert(sheetNames.includes(sheetName), `Slice 7 freeze gate missing workbook sheet ${sheetName}`);
  }
  assert(sheetNames.length === workbookSheets.length, "Slice 7 freeze gate should include exactly the planned workbook sheets");

  const formulaReferenceErrors = findExceljsFormulaReferenceErrors(workbook);
  assert(formulaReferenceErrors.length === 0, `Slice 7 formula-reference scan found errors: ${formulaReferenceErrors.join("; ")}`);

  const readMe = workbook.getWorksheet("00_Read_Me");
  assert(String(readMe.getCell("B4").value).includes("not an approved budget"), "Slice 7 Read Me warning is missing");

  const dashboard = workbook.getWorksheet("20_Dashboard");
  const checks = workbook.getWorksheet("21_Checks");
  const errorStatuses = [];
  checks.eachRow((row, rowNumber) => {
    if (rowNumber > 1 && row.getCell(5).value === "ERROR") {
      errorStatuses.push(rowNumber);
    }
  });
  assert(errorStatuses.length === 0, "Slice 7 dashboard ERROR count should be zero");
  assert(
    dashboard.getCell("B14").value &&
      typeof dashboard.getCell("B14").value === "object" &&
      String(dashboard.getCell("B14").value.formula).includes("COUNTIF"),
    "Slice 7 dashboard ERROR count formula is missing",
  );
  assert(resolvedExceljsValue(dashboard.getCell("B15")) === "Blocked", "Slice 7 dashboard must keep NPV / IRR blocked");

  const scenariosSheet = workbook.getWorksheet("19_Scenarios");
  assert(
    nearlyEqual(resolvedExceljsValue(scenariosSheet.getRow(5).getCell(5)), slice3Metrics("Base", 4).coreExternalRevenue, 0.01),
    "Slice 7 scenario parity failed for Base Year 5 core external revenue",
  );
  assert(
    nearlyEqual(resolvedExceljsValue(scenariosSheet.getRow(6).getCell(5)), slice3Metrics("Base", 4).consolidatedCoreContribution, 0.01),
    "Slice 7 scenario parity failed for Base Year 5 consolidated contribution",
  );

  const revenue = workbook.getWorksheet("07_Revenue");
  const revenueLabels = [];
  revenue.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      revenueLabels.push(row.getCell(2).value);
    }
  });
  assert(
    revenueLabels.includes("Rural Bank entity revenue - non-additive") &&
      revenueLabels.includes("ODTI entity revenue - non-additive"),
    "Slice 7 stakeholder revenue non-additivity labels are missing",
  );

  const lineage = workbook.getWorksheet("22_Source_Lineage");
  const lineageStatuses = [];
  lineage.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      lineageStatuses.push(row.getCell(6).value);
    }
  });
  assert(lineageStatuses.includes("Blocked or excluded"), "Slice 7 lineage must preserve blocked/excluded status");

  const visualQaRows = workbook.worksheets.map((worksheet) => ({
    sheet: worksheet.name,
    rows: worksheet.rowCount,
    columns: worksheet.columnCount,
  }));
  for (const item of visualQaRows) {
    assert(item.rows > 0 && item.columns > 0, `Slice 7 visual-structure check found blank sheet ${item.sheet}`);
  }

  return {
    inputPath,
    sheetCount: sheetNames.length,
    formulaCount: slice6Result.formulaCount,
    formulaReferenceErrors: formulaReferenceErrors.length,
    dashboardRows: slice6Result.dashboardRows,
    lineageRows: slice6Result.lineageRows,
    statusRows: slice6Result.statusRows,
    visualQaSheets: visualQaRows.length,
    visualQaMode: "Structural workbook QA via exceljs; artifact render unavailable in this shell",
  };
}

async function loadSlice2Manifest() {
  const manifestText = await fs.readFile(slice2ManifestPath, "utf8");
  return JSON.parse(manifestText);
}

async function validateSlice2Manifest() {
  const manifest = await loadSlice2Manifest();
  runSlice2ScaffoldValidation();

  assert(manifest.model.offering === "OFR-RB-PAYROLL-STARTER", "Manifest offering mismatch");
  assert(manifest.output.workbook === defaultWorkbookPath, "Manifest workbook output path mismatch");
  assert(manifest.output.builder === "scripts/finance/build_payroll_starter_model.mjs", "Manifest builder path mismatch");

  for (const sheetName of slice2Sheets) {
    assert(manifest.slice2Sheets.includes(sheetName), `Manifest missing Slice 2 sheet ${sheetName}`);
  }
  assert(
    manifest.slice2Sheets.length === slice2Sheets.length,
    `Manifest Slice 2 sheet count ${manifest.slice2Sheets.length} does not match builder count ${slice2Sheets.length}`,
  );

  for (const scenario of scenarios) {
    const manifestScenario = manifest.canonicalActivity[scenario];
    assert(manifestScenario, `Manifest missing canonical activity for ${scenario}`);
    assert(
      nearlyEqual(manifestScenario.vol001, canonicalActivity[scenario].vol001),
      `Manifest VOL-001 mismatch for ${scenario}`,
    );
    for (const [index, expected] of canonicalActivity[scenario].annualTransactions.entries()) {
      assert(
        nearlyEqual(manifestScenario.annualTransactions[index], expected),
        `Manifest annual transaction mismatch for ${scenario} ${years[index]}`,
      );
    }
  }

  for (const [assumptionId] of blockedInputs) {
    assert(
      manifest.blockedOrExcludedInputs.includes(assumptionId),
      `Manifest missing blocked/excluded input ${assumptionId}`,
    );
  }

  return {
    sheetCount: manifest.slice2Sheets.length,
    blockedOrExcludedCount: manifest.blockedOrExcludedInputs.length,
    requiredChecks: manifest.requiredChecks.length,
    runtimeChecks: manifest.runtimeChecks.length,
  };
}

async function loadSlice2ExportManifest() {
  const manifestText = await fs.readFile(slice2ExportManifestPath, "utf8");
  return JSON.parse(manifestText);
}

async function validateSlice2ExportManifest() {
  const manifest = await loadSlice2ExportManifest();
  runSlice2ExportScaffoldValidation();

  assert(manifest.model.offering === "OFR-RB-PAYROLL-STARTER", "Slice 2 export manifest offering mismatch");
  assert(manifest.output.workbook === defaultWorkbookPath, "Slice 2 export manifest workbook output path mismatch");
  assert(manifest.output.builder === "scripts/finance/build_payroll_starter_model.mjs", "Slice 2 export manifest builder path mismatch");

  for (const plan of slice2ExportPlan) {
    const manifestPlan = manifest.sheetLayouts.find((item) => item.sheet === plan.sheet);
    assert(manifestPlan, `Slice 2 export manifest missing sheet layout for ${plan.sheet}`);
    assert(manifestPlan.tableAnchor === plan.tableAnchor, `Slice 2 export manifest table anchor mismatch for ${plan.sheet}`);
  }
  assert(
    manifest.sheetLayouts.length === slice2ExportPlan.length,
    `Slice 2 export manifest layout count ${manifest.sheetLayouts.length} does not match builder count ${slice2ExportPlan.length}`,
  );

  for (const [name] of slice2NamedRangeStrategy) {
    assert(
      manifest.namedRangeStrategy.some((item) => item.name === name),
      `Slice 2 export manifest missing named-range strategy for ${name}`,
    );
  }

  for (const formula of slice2FormulaBlueprints) {
    assert(manifest.formulaBlueprints.includes(formula), `Slice 2 export manifest missing formula blueprint: ${formula}`);
  }

  for (const target of slice2VisualQaTargets) {
    assert(manifest.visualQaTargets.includes(target), `Slice 2 export manifest missing visual QA target: ${target}`);
  }

  return {
    sheetLayouts: manifest.sheetLayouts.length,
    namedRanges: manifest.namedRangeStrategy.length,
    formulaBlueprints: manifest.formulaBlueprints.length,
    visualQaTargets: manifest.visualQaTargets.length,
    runtimeChecks: manifest.runtimeChecks.length,
  };
}

async function writeSheet(workbook, name, rows) {
  const sheet = workbook.worksheets.add(name);
  sheet.showGridLines = false;
  sheet.getRange("A1").writeValues(rows);
  const used = sheet.getUsedRange();
  used.format.wrapText = true;
  used.format.autofitColumns();
  used.format.autofitRows();
  return sheet;
}

async function buildSlice2Workbook(outputPath = defaultWorkbookPath) {
  runSlice2ScaffoldValidation();
  const { SpreadsheetFile, Workbook } = await loadArtifactTool();
  const workbook = Workbook.create();

  await writeSheet(workbook, "00_Read_Me", readMeRows());
  await writeSheet(workbook, "01_Control", controlRows());
  await writeSheet(workbook, "02_Assumptions", assumptionRows());
  await writeSheet(workbook, "03_Assumption_Map", assumptionMapRows());
  await writeSheet(workbook, "04_Adoption", adoptionRows());
  await writeSheet(workbook, "05_Payroll_Activity", payrollActivityRows());
  await writeSheet(workbook, "21_Checks", checkRows());

  const outputDir = outputPath.includes("/") ? outputPath.split("/").slice(0, -1).join("/") : ".";
  await fs.mkdir(outputDir, { recursive: true });
  const output = await SpreadsheetFile.exportXlsx(workbook);
  await output.save(outputPath);
  return outputPath;
}

function parseSheetNamesFromInspect(ndjson) {
  return ndjson
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .map((record) => record.name)
    .filter(Boolean);
}

async function validateSlice2Workbook(inputPath = defaultWorkbookPath) {
  runSlice2ScaffoldValidation();
  const { FileBlob, SpreadsheetFile } = await loadArtifactTool();
  const input = await FileBlob.load(inputPath);
  const workbook = await SpreadsheetFile.importXlsx(input);
  const sheetInspect = await workbook.inspect({ kind: "sheet", include: "name", maxChars: 6000 });
  const sheetNames = parseSheetNamesFromInspect(sheetInspect.ndjson);

  for (const sheetName of slice2Sheets) {
    assert(sheetNames.includes(sheetName), `Workbook is missing Slice 2 sheet ${sheetName}`);
  }

  const formulaErrors = await workbook.inspect({
    kind: "match",
    searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
    options: { useRegex: true, maxResults: 300 },
    summary: "Slice 2 formula error scan",
  });

  return {
    inputPath,
    sheetCount: sheetNames.length,
    requiredSlice2Sheets: slice2Sheets.length,
    formulaErrorScan: formulaErrors.ndjson,
  };
}

function printRuntimeHandoff() {
  console.log("Payroll Starter workbook runtime handoff");
  console.log("");
  console.log("1. Confirm spreadsheet runtime dependency:");
  console.log("   node scripts/finance/build_payroll_starter_model.mjs --runtime-check");
  console.log("");
  console.log("2. Confirm Slice 2 manifest and export-layout parity:");
  console.log("   node scripts/finance/build_payroll_starter_model.mjs --manifest-check");
  console.log("   node scripts/finance/build_payroll_starter_model.mjs --slice-2-export-manifest-check");
  console.log("   node scripts/finance/build_payroll_starter_model.mjs --slice-3-manifest-check");
  console.log("   node scripts/finance/build_payroll_starter_model.mjs --slice-3-export-manifest-check");
  console.log("   node scripts/finance/build_payroll_starter_model.mjs --slice-4-manifest-check");
  console.log("   node scripts/finance/build_payroll_starter_model.mjs --slice-5-manifest-check");
  console.log("   node scripts/finance/build_payroll_starter_model.mjs --slice-6-manifest-check");
  console.log("   node scripts/finance/build_payroll_starter_model.mjs --slice-7-manifest-check");
  console.log("");
  console.log("3. Build Slice 2 workbook:");
  console.log(`   node scripts/finance/build_payroll_starter_model.mjs --build-slice-2 --output ${defaultWorkbookPath}`);
  console.log(`   node scripts/finance/build_payroll_starter_model.mjs --build-slice-2-exceljs --output ${defaultWorkbookPath}`);
  console.log("");
  console.log("4. Validate generated workbook:");
  console.log(`   node scripts/finance/build_payroll_starter_model.mjs --validate-slice-2 --input ${defaultWorkbookPath}`);
  console.log(`   node scripts/finance/build_payroll_starter_model.mjs --validate-slice-2-exceljs --input ${defaultWorkbookPath}`);
  console.log("");
  console.log("5. Required manual/visual QA after export:");
  console.log("   - inspect representative formulas and sheet ranges;");
  console.log("   - render all Slice 2 sheets;");
  console.log("   - verify no clipped warnings, source notes, or important labels;");
  console.log("   - confirm activity parity with offering-economics-level-1.md.");
  console.log("");
  console.log("6. After Slice 2 workbook export is accepted, scaffolded Slice 3 formulas should consume the same activity and assumption sheets.");
  console.log("7. After Slice 3 workbook formulas are accepted, Slice 4 should add cost, P&L, and cash-flow sheets without treating blocked outputs as zero.");
  console.log("8. After Slice 4 cash-flow gates are accepted, Slice 5 should add capital-budgeting and sensitivity sheets with blocked return metrics where prerequisites remain unavailable.");
  console.log("9. After Slice 5 is accepted, Slice 6 should add scenario comparison, dashboard, source lineage, and final checks.");
  console.log("10. After Slice 6 is accepted, Slice 7 should run review/freeze gates, canonical parity, visual QA, and the ~/Downloads review ZIP.");
}

function printUsage() {
  console.log("Usage:");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --dry-run");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-2-plan");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-2-export-plan");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-3-plan");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-3-export-plan");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-4-plan");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-5-plan");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-6-plan");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-7-plan");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --manifest-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-2-export-manifest-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-3-manifest-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-3-export-manifest-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-4-manifest-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-5-manifest-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-6-manifest-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --slice-7-manifest-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --runtime-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --exceljs-runtime-check");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --build-slice-2 [--output artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --validate-slice-2 [--input artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --build-slice-2-exceljs [--output artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --validate-slice-2-exceljs [--input artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --build-slice-3-exceljs [--output artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --validate-slice-3-exceljs [--input artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --build-slice-4-exceljs [--output artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --validate-slice-4-exceljs [--input artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --build-slice-5-exceljs [--output artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --validate-slice-5-exceljs [--input artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --build-slice-6-exceljs [--output artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --validate-slice-6-exceljs [--input artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --build-slice-7-exceljs [--output artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --validate-slice-7-exceljs [--input artifacts/x-commerce-payroll-starter-financial-model.xlsx]");
  console.log("  node scripts/finance/build_payroll_starter_model.mjs --runtime-handoff");
  console.log("");
  console.log("Workbook export requires @oai/artifact-tool runtime dependencies.");
}

function optionValue(args, name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) {
    return fallback;
  }
  return args[index + 1] || fallback;
}

async function main() {
  const rawArgs = process.argv.slice(2);
  const args = new Set(rawArgs);
  if (args.has("--dry-run")) {
    printDryRunSummary();
    return;
  }
  if (args.has("--slice-2-plan")) {
    printSlice2Plan();
    return;
  }
  if (args.has("--slice-2-export-plan")) {
    printSlice2ExportPlan();
    return;
  }
  if (args.has("--slice-3-plan")) {
    printSlice3Plan();
    return;
  }
  if (args.has("--slice-3-export-plan")) {
    printSlice3ExportPlan();
    return;
  }
  if (args.has("--slice-4-plan")) {
    printSlice4Plan();
    return;
  }
  if (args.has("--slice-5-plan")) {
    printSlice5Plan();
    return;
  }
  if (args.has("--slice-6-plan")) {
    printSlice6Plan();
    return;
  }
  if (args.has("--slice-7-plan")) {
    printSlice7Plan();
    return;
  }
  if (args.has("--manifest-check")) {
    const result = await validateSlice2Manifest();
    console.log("Slice 2 manifest validation: OK");
    console.log(`Manifest sheets: ${result.sheetCount}`);
    console.log(`Blocked/excluded inputs: ${result.blockedOrExcludedCount}`);
    console.log(`Required checks: ${result.requiredChecks}`);
    console.log(`Runtime checks: ${result.runtimeChecks}`);
    return;
  }
  if (args.has("--slice-2-export-manifest-check")) {
    const result = await validateSlice2ExportManifest();
    console.log("Slice 2 export manifest validation: OK");
    console.log(`Sheet layouts: ${result.sheetLayouts}`);
    console.log(`Named ranges: ${result.namedRanges}`);
    console.log(`Formula blueprints: ${result.formulaBlueprints}`);
    console.log(`Visual QA targets: ${result.visualQaTargets}`);
    console.log(`Runtime checks: ${result.runtimeChecks}`);
    return;
  }
  if (args.has("--slice-3-manifest-check")) {
    const result = await validateSlice3Manifest();
    console.log("Slice 3 manifest validation: OK");
    console.log(`Manifest sheets: ${result.sheetCount}`);
    console.log(`Parity samples: ${result.paritySamples}`);
    console.log(`Required checks: ${result.requiredChecks}`);
    console.log(`Runtime checks: ${result.runtimeChecks}`);
    return;
  }
  if (args.has("--slice-3-export-manifest-check")) {
    const result = await validateSlice3ExportManifest();
    console.log("Slice 3 export manifest validation: OK");
    console.log(`Sheet layouts: ${result.sheetLayouts}`);
    console.log(`Formula blueprints: ${result.formulaBlueprints}`);
    console.log(`Workbook dependencies: ${result.workbookDependencies}`);
    console.log(`Visual QA targets: ${result.visualQaTargets}`);
    console.log(`Parity samples: ${result.paritySamples}`);
    console.log(`Runtime checks: ${result.runtimeChecks}`);
    return;
  }
  if (args.has("--slice-4-manifest-check")) {
    const result = await validateSlice4Manifest();
    console.log("Slice 4 manifest validation: OK");
    console.log(`Manifest sheets: ${result.sheetCount}`);
    console.log(`Blocked outputs: ${result.blockedOutputs}`);
    console.log(`Required checks: ${result.requiredChecks}`);
    console.log(`Runtime checks: ${result.runtimeChecks}`);
    return;
  }
  if (args.has("--slice-5-manifest-check")) {
    const result = await validateSlice5Manifest();
    console.log("Slice 5 manifest validation: OK");
    console.log(`Manifest sheets: ${result.sheetCount}`);
    console.log(`Prerequisites: ${result.prerequisites}`);
    console.log(`Blocked return outputs: ${result.blockedOutputs}`);
    console.log(`Required checks: ${result.requiredChecks}`);
    console.log(`Runtime checks: ${result.runtimeChecks}`);
    return;
  }
  if (args.has("--slice-6-manifest-check")) {
    const result = await validateSlice6Manifest();
    console.log("Slice 6 manifest validation: OK");
    console.log(`Manifest sheets: ${result.sheetCount}`);
    console.log(`Dashboard metrics: ${result.dashboardMetrics}`);
    console.log(`Lineage categories: ${result.lineageCategories}`);
    console.log(`Required checks: ${result.requiredChecks}`);
    console.log(`Runtime checks: ${result.runtimeChecks}`);
    return;
  }
  if (args.has("--slice-7-manifest-check")) {
    const result = await validateSlice7Manifest();
    console.log("Slice 7 manifest validation: OK");
    console.log(`Review/freeze steps: ${result.reviewSteps}`);
    console.log(`Required artifacts: ${result.requiredArtifacts}`);
    console.log(`Freeze checks: ${result.freezeChecks}`);
    console.log(`Runtime checks: ${result.runtimeChecks}`);
    return;
  }
  if (args.has("--runtime-check")) {
    const result = await checkSpreadsheetRuntime();
    console.log(`Spreadsheet runtime dependency ${result.dependency}: ${result.status}`);
    return;
  }
  if (args.has("--exceljs-runtime-check")) {
    const result = await checkExceljsRuntime();
    console.log(`Repo-local workbook dependency ${result.dependency}: ${result.status}`);
    return;
  }
  if (args.has("--build-slice-2")) {
    const outputPath = optionValue(rawArgs, "--output", defaultWorkbookPath);
    const builtPath = await buildSlice2Workbook(outputPath);
    console.log(`Workbook written: ${builtPath}`);
    return;
  }
  if (args.has("--build-slice-2-exceljs")) {
    const outputPath = optionValue(rawArgs, "--output", defaultWorkbookPath);
    const builtPath = await buildSlice2WorkbookExceljs(outputPath);
    console.log(`Workbook written with exceljs: ${builtPath}`);
    return;
  }
  if (args.has("--build-slice-3-exceljs")) {
    const outputPath = optionValue(rawArgs, "--output", defaultWorkbookPath);
    const builtPath = await buildSlice3WorkbookExceljs(outputPath);
    console.log(`Slice 3 workbook written with exceljs: ${builtPath}`);
    return;
  }
  if (args.has("--build-slice-4-exceljs")) {
    const outputPath = optionValue(rawArgs, "--output", defaultWorkbookPath);
    const builtPath = await buildSlice4WorkbookExceljs(outputPath);
    console.log(`Slice 4 workbook written with exceljs: ${builtPath}`);
    return;
  }
  if (args.has("--build-slice-5-exceljs")) {
    const outputPath = optionValue(rawArgs, "--output", defaultWorkbookPath);
    const builtPath = await buildSlice5WorkbookExceljs(outputPath);
    console.log(`Slice 5 workbook written with exceljs: ${builtPath}`);
    return;
  }
  if (args.has("--build-slice-6-exceljs")) {
    const outputPath = optionValue(rawArgs, "--output", defaultWorkbookPath);
    const builtPath = await buildSlice6WorkbookExceljs(outputPath);
    console.log(`Slice 6 workbook written with exceljs: ${builtPath}`);
    return;
  }
  if (args.has("--build-slice-7-exceljs")) {
    const outputPath = optionValue(rawArgs, "--output", defaultWorkbookPath);
    const builtPath = await buildSlice7WorkbookExceljs(outputPath);
    console.log(`Slice 7 workbook written with exceljs: ${builtPath}`);
    return;
  }
  if (args.has("--validate-slice-2")) {
    const inputPath = optionValue(rawArgs, "--input", defaultWorkbookPath);
    const result = await validateSlice2Workbook(inputPath);
    console.log(`Workbook validated: ${result.inputPath}`);
    console.log(`Workbook sheets detected: ${result.sheetCount}`);
    console.log(`Required Slice 2 sheets: ${result.requiredSlice2Sheets}`);
    console.log("Formula error scan:");
    console.log(result.formulaErrorScan || "No formula errors reported.");
    return;
  }
  if (args.has("--validate-slice-2-exceljs")) {
    const inputPath = optionValue(rawArgs, "--input", defaultWorkbookPath);
    const result = await validateSlice2WorkbookExceljs(inputPath);
    console.log(`Workbook validated with exceljs: ${result.inputPath}`);
    console.log(`Workbook sheets detected: ${result.sheetCount}`);
    console.log(`Required Slice 2 sheets: ${result.requiredSlice2Sheets}`);
    console.log(`Formula-backed cells: ${result.formulaCount}`);
    console.log(`Check status rows: ${result.statusRows}`);
    return;
  }
  if (args.has("--validate-slice-3-exceljs")) {
    const inputPath = optionValue(rawArgs, "--input", defaultWorkbookPath);
    const result = await validateSlice3WorkbookExceljs(inputPath);
    console.log(`Slice 3 workbook validated with exceljs: ${result.inputPath}`);
    console.log(`Workbook sheets detected: ${result.sheetCount}`);
    console.log(`Required sheets: ${result.requiredSheets}`);
    console.log(`Formula-backed cells: ${result.formulaCount}`);
    console.log(`Parity sample sets: ${result.paritySamples}`);
    console.log(`Check status rows: ${result.statusRows}`);
    return;
  }
  if (args.has("--validate-slice-4-exceljs")) {
    const inputPath = optionValue(rawArgs, "--input", defaultWorkbookPath);
    const result = await validateSlice4WorkbookExceljs(inputPath);
    console.log(`Slice 4 workbook validated with exceljs: ${result.inputPath}`);
    console.log(`Workbook sheets detected: ${result.sheetCount}`);
    console.log(`Required sheets: ${result.requiredSheets}`);
    console.log(`Formula-backed cells: ${result.formulaCount}`);
    console.log(`Parity sample sets: ${result.paritySamples}`);
    console.log(`Check status rows: ${result.statusRows}`);
    console.log(`Visible blocked rows: ${result.blockedRows}`);
    return;
  }
  if (args.has("--validate-slice-5-exceljs")) {
    const inputPath = optionValue(rawArgs, "--input", defaultWorkbookPath);
    const result = await validateSlice5WorkbookExceljs(inputPath);
    console.log(`Slice 5 workbook validated with exceljs: ${result.inputPath}`);
    console.log(`Workbook sheets detected: ${result.sheetCount}`);
    console.log(`Required sheets: ${result.requiredSheets}`);
    console.log(`Formula-backed cells: ${result.formulaCount}`);
    console.log(`Parity sample sets: ${result.paritySamples}`);
    console.log(`Check status rows: ${result.statusRows}`);
    console.log(`Visible blocked rows: ${result.blockedRows}`);
    console.log(`Sensitivity rows: ${result.sensitivityRows}`);
    return;
  }
  if (args.has("--validate-slice-6-exceljs")) {
    const inputPath = optionValue(rawArgs, "--input", defaultWorkbookPath);
    const result = await validateSlice6WorkbookExceljs(inputPath);
    console.log(`Slice 6 workbook validated with exceljs: ${result.inputPath}`);
    console.log(`Workbook sheets detected: ${result.sheetCount}`);
    console.log(`Required sheets: ${result.requiredSheets}`);
    console.log(`Formula-backed cells: ${result.formulaCount}`);
    console.log(`Dashboard rows: ${result.dashboardRows}`);
    console.log(`Lineage rows: ${result.lineageRows}`);
    console.log(`Check status rows: ${result.statusRows}`);
    return;
  }
  if (args.has("--validate-slice-7-exceljs")) {
    const inputPath = optionValue(rawArgs, "--input", defaultWorkbookPath);
    const result = await validateSlice7WorkbookExceljs(inputPath);
    console.log(`Slice 7 workbook freeze validation passed with exceljs: ${result.inputPath}`);
    console.log(`Workbook sheets detected: ${result.sheetCount}`);
    console.log(`Formula-backed cells: ${result.formulaCount}`);
    console.log(`Formula reference errors: ${result.formulaReferenceErrors}`);
    console.log(`Dashboard rows: ${result.dashboardRows}`);
    console.log(`Lineage rows: ${result.lineageRows}`);
    console.log(`Check status rows: ${result.statusRows}`);
    console.log(`Visual QA sheets: ${result.visualQaSheets}`);
    console.log(`Visual QA mode: ${result.visualQaMode}`);
    return;
  }
  if (args.has("--runtime-handoff")) {
    printRuntimeHandoff();
    return;
  }
  printUsage();
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
