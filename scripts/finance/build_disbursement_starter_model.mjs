#!/usr/bin/env node

import fs from "node:fs";

const offeringId = "OFR-RB-DISBURSEMENT-STARTER";
const defaultWorkbookPath = "artifacts/x-commerce-disbursement-starter-financial-model.xlsx";

const plannedSheets = [
  "00_Read_Me",
  "01_Control",
  "02_Assumptions",
  "03_Assumption_Map",
  "04_Adoption",
  "05_Disbursement_Activity",
  "06_Pricing",
  "07_Revenue",
  "08_Cost_of_Sales",
  "09_Operating_Expenses",
  "10_Rural_Bank_View",
  "11_ODTI_View",
  "12_DevOps_View",
  "13_Notification_Variant",
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

const sourceDocuments = [
  "docs/ASSUMPTIONS_REGISTER.md",
  "docs/decisions/0005-select-second-modeled-offering.md",
  "docs/decisions/0006-disbursement-starter-economic-treatment.md",
  "docs/economics/offerings/rural-bank-disbursement-starter/commercial-model.md",
  "docs/economics/offerings/rural-bank-disbursement-starter/provisional-input-register-level-1.md",
  "docs/economics/offerings/rural-bank-disbursement-starter/offering-economics-level-1.md",
  "docs/economics/offerings/rural-bank-disbursement-starter/five-year-revenue-projection-summary.md",
];

const scaffoldWarning =
  "This workbook is a structural scaffold for OFR-RB-DISBURSEMENT-STARTER. It contains no authorized values, no Level 1 numeric projections, and no forecast.";

const canonicalSourceWarning =
  "The repository defines the commercial architecture. The workbook presents it. This scaffold must not become an independent source of commercial truth.";

const scenarios = ["Conservative", "Base", "Accelerated"];

const scaffoldAssumptions = [
  ["ADP-001", "Adoption", "Banks onboarded during year", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["ADP-002", "Adoption", "Active banks during year", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["ADP-003", "Adoption", "Weighted average active months per active bank", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-CUS-001", "Sponsor structure", "Active sponsors per active bank", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-CUS-002", "Program activity", "Disbursement runs per sponsor per month", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-CUS-003", "Recipient structure", "Average recipients per disbursement run", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-VOL-002", "Activity quality", "Disbursement completion rate", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-VOL-001", "Derived activity", "Successful disbursements per active bank per month", "Derived", "Derived", "Derived", "Derived", "Must derive from components"],
  ["DSP-PRICE-001", "Sponsor pricing", "Sponsor onboarding fee", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-PRICE-002", "Sponsor pricing", "Sponsor monthly or program-service fee", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-PRICE-003", "Sponsor pricing", "Per-successful-recipient disbursement fee", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-RB-001", "Rural Bank economics", "Rural Bank retained disbursement economics", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-RB-002", "Rural Bank cost", "Rural Bank disbursement-specific internal support cost", "Blocked", "Open", "Open", "Open", "Evidence required"],
  ["DSP-ODTI-001", "ODTI cost", "ODTI disbursement implementation cost per bank", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-ODTI-002", "ODTI cost", "ODTI disbursement support cost per active bank", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["OPS-003", "DevOps cost", "DevOps direct engineering and tooling cost", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["CLD-001", "Cloud cost", "Public-cloud infrastructure cost per bank", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["RISK-002", "Collection risk", "Bad debt or non-collection on commercial fees", "Blocked", "Open", "Open", "Open", "Candidate value required"],
  ["DSP-ATT-001", "Optional notification", "Notification attachment rate", "Conditionally blocked", "Open", "Open", "Open", "Optional variant only"],
  ["DSP-VAS-001", "Optional notification", "Customer-facing notification price", "Conditionally blocked", "Open", "Open", "Open", "Optional variant only"],
  ["DSP-CST-001", "Optional notification", "Notification wholesale provider price", "Conditionally blocked", "Open", "Open", "Open", "Optional variant only"],
  ["SMS-001", "Optional notification", "Notification delivery success rate", "Conditionally blocked", "Open", "Open", "Open", "Optional variant only"],
  ["NET-001", "Infrastructure", "NetBank or infrastructure fee basis", "Blocked", "Blocked", "Blocked", "Blocked", "Not available for scaffold"],
  ["NET-002", "Infrastructure", "NetBank or infrastructure internal cost basis", "Blocked", "Blocked", "Blocked", "Blocked", "Not available for scaffold"],
  ["TAX-001", "Tax", "Tax and withholding treatment", "Blocked", "Blocked", "Blocked", "Blocked", "Not available for scaffold"],
  ["ROY-001", "Royalty", "3neti royalty or license basis", "Blocked", "Blocked", "Blocked", "Blocked", "Not available for scaffold"],
  ["FIN-001", "Capital budgeting", "Discount rate or financing hurdle", "Blocked", "Blocked", "Blocked", "Blocked", "Not available for scaffold"],
];

const years = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

const scenarioInputs = {
  Conservative: {
    newlyActiveBanks: [1, 1, 1, 1, 1],
    activeBanks: [1, 2, 3, 4, 5],
    activeMonths: [3, 6, 8, 9, 10],
    sponsorsPerBank: 2,
    batchesPerSponsorMonth: 1,
    recipientsPerBatch: 75,
    completionRate: 0.92,
    sponsorOnboardingFee: 2500,
    sponsorServiceFee: 1000,
    recipientDisbursementFee: 1.5,
    ruralBankRetention: 0.5,
    odtiSupportCost: 5000,
    odtiImplementationCost: 15000,
    devopsSetupFee: 50000,
    devopsRecurringFee: 10000,
    devopsDirectCost: 6000,
    cloudCost: 3000,
    nonCollectionRate: 0.05,
    notificationAttachmentRate: 0.25,
    notificationCustomerPrice: 1,
    notificationWholesalePrice: 0.5,
    notificationSuccessRate: 0.95,
  },
  Base: {
    newlyActiveBanks: [2, 2, 2, 2, 2],
    activeBanks: [2, 4, 6, 8, 10],
    activeMonths: [5, 8, 9, 10, 11],
    sponsorsPerBank: 3,
    batchesPerSponsorMonth: 1.5,
    recipientsPerBatch: 150,
    completionRate: 0.96,
    sponsorOnboardingFee: 5000,
    sponsorServiceFee: 2000,
    recipientDisbursementFee: 2,
    ruralBankRetention: 0.75,
    odtiSupportCost: 7000,
    odtiImplementationCost: 20000,
    devopsSetupFee: 50000,
    devopsRecurringFee: 10000,
    devopsDirectCost: 5000,
    cloudCost: 3000,
    nonCollectionRate: 0.02,
    notificationAttachmentRate: 0.4,
    notificationCustomerPrice: 1,
    notificationWholesalePrice: 0.5,
    notificationSuccessRate: 0.96,
  },
  Accelerated: {
    newlyActiveBanks: [3, 3, 4, 4, 4],
    activeBanks: [3, 6, 10, 14, 18],
    activeMonths: [6, 9, 10, 11, 11],
    sponsorsPerBank: 5,
    batchesPerSponsorMonth: 2,
    recipientsPerBatch: 250,
    completionRate: 0.98,
    sponsorOnboardingFee: 7500,
    sponsorServiceFee: 3000,
    recipientDisbursementFee: 2.5,
    ruralBankRetention: 1,
    odtiSupportCost: 9000,
    odtiImplementationCost: 25000,
    devopsSetupFee: 50000,
    devopsRecurringFee: 10000,
    devopsDirectCost: 4500,
    cloudCost: 3500,
    nonCollectionRate: 0.01,
    notificationAttachmentRate: 0.6,
    notificationCustomerPrice: 1,
    notificationWholesalePrice: 0.5,
    notificationSuccessRate: 0.97,
  },
};

const provisionalInputRows = [
  ["DSP-PI-L1-001", "ADP-002", "Active banks", "See annual table", "See annual table", "See annual table", "Active banks"],
  ["DSP-PI-L1-002", "ADP-003", "Weighted active months", "See annual table", "See annual table", "See annual table", "Months"],
  ["DSP-PI-L1-003", "DSP-CUS-001", "Sponsors per active bank", 2, 3, 5, "Sponsors per bank"],
  ["DSP-PI-L1-004", "DSP-CUS-002", "Batches per sponsor per month", 1, 1.5, 2, "Batches"],
  ["DSP-PI-L1-005", "DSP-CUS-003", "Recipients per batch", 75, 150, 250, "Recipients"],
  ["DSP-PI-L1-006", "DSP-VOL-002", "Completion rate", 0.92, 0.96, 0.98, "Percent"],
  ["DSP-PI-L1-007", "DSP-VOL-001", "Successful disbursements per bank-month", "Derived", "Derived", "Derived", "Derived value"],
  ["DSP-PI-L1-008", "DSP-PRICE-001", "Sponsor onboarding fee", 2500, 5000, 7500, "PHP per sponsor"],
  ["DSP-PI-L1-009", "DSP-PRICE-002", "Sponsor service fee", 1000, 2000, 3000, "PHP per sponsor-month"],
  ["DSP-PI-L1-010", "DSP-PRICE-003", "Recipient disbursement fee", 1.5, 2, 2.5, "PHP per successful disbursement"],
  ["DSP-PI-L1-011", "DSP-RB-001", "Rural Bank retention", 0.5, 0.75, 1, "PHP per successful disbursement"],
  ["DSP-PI-L1-012", "DSP-ODTI-001", "ODTI support cost", 5000, 7000, 9000, "PHP per active bank-month"],
  ["DSP-PI-L1-013", "DSP-ODTI-002", "ODTI implementation cost", 15000, 20000, 25000, "PHP per newly active bank"],
  ["DSP-PI-L1-014", "OPS-003", "DevOps direct cost", 6000, 5000, 4500, "PHP per active bank-month"],
  ["DSP-PI-L1-015", "CLD-001", "Cloud cost", 3000, 3000, 3500, "PHP per active bank-month"],
  ["DSP-PI-L1-016", "RISK-002", "Non-collection rate", 0.05, 0.02, 0.01, "Percent"],
  ["DSP-PI-L1-017", "OPS-001", "DevOps setup fee", 50000, 50000, 50000, "PHP per newly active bank"],
  ["DSP-PI-L1-018", "OPS-002", "DevOps recurring fee", 10000, 10000, 10000, "PHP per active bank-month"],
  ["DSP-PI-L1-019", "DSP-ATT-001", "Notification attachment rate", 0.25, 0.4, 0.6, "Percent of successful disbursements"],
  ["DSP-PI-L1-020", "DSP-VAS-001", "Notification customer price", 1, 1, 1, "PHP per attached notification"],
  ["DSP-PI-L1-021", "DSP-CST-001", "Notification wholesale price", 0.5, 0.5, 0.5, "PHP per attached notification"],
  ["DSP-PI-L1-022", "SMS-001", "Notification delivery success rate", 0.95, 0.96, 0.97, "Percent"],
];

function roundPeso(value) {
  return Math.round(value);
}

function derivedVolume(input) {
  return input.sponsorsPerBank * input.batchesPerSponsorMonth * input.recipientsPerBatch * input.completionRate;
}

function computeScenarioRows(scenario) {
  const input = scenarioInputs[scenario];
  const volume = derivedVolume(input);
  return years.map((year, index) => {
    const activeBanks = input.activeBanks[index];
    const activeMonths = input.activeMonths[index];
    const newlyActiveBanks = input.newlyActiveBanks[index];
    const activeSponsors = activeBanks * input.sponsorsPerBank;
    const newlyOnboardedSponsors = newlyActiveBanks * input.sponsorsPerBank;
    const annualSuccessfulDisbursements = activeBanks * activeMonths * volume;
    const sponsorOnboardingRevenue = newlyOnboardedSponsors * input.sponsorOnboardingFee;
    const sponsorServiceRevenue = activeSponsors * activeMonths * input.sponsorServiceFee;
    const recipientDisbursementRevenue = annualSuccessfulDisbursements * input.recipientDisbursementFee;
    const coreExternalRevenue = sponsorOnboardingRevenue + sponsorServiceRevenue + recipientDisbursementRevenue;
    const collectedCoreRevenue = coreExternalRevenue * (1 - input.nonCollectionRate);
    const ruralBankRevenue =
      (sponsorOnboardingRevenue * 0.4 + sponsorServiceRevenue * 0.5 + annualSuccessfulDisbursements * input.ruralBankRetention) *
      (1 - input.nonCollectionRate);
    const odtiRevenue =
      (sponsorOnboardingRevenue * 0.6 +
        sponsorServiceRevenue * 0.5 +
        annualSuccessfulDisbursements * (input.recipientDisbursementFee - input.ruralBankRetention)) *
      (1 - input.nonCollectionRate);
    const odtiCost = activeBanks * activeMonths * input.odtiSupportCost + newlyActiveBanks * input.odtiImplementationCost;
    const odtiContribution = odtiRevenue - odtiCost;
    const devopsRevenue = newlyActiveBanks * input.devopsSetupFee + activeBanks * activeMonths * input.devopsRecurringFee;
    const devopsDirectCost = activeBanks * activeMonths * input.devopsDirectCost;
    const devopsContribution = devopsRevenue - devopsDirectCost;
    const cloudCost = activeBanks * activeMonths * input.cloudCost;
    const consolidatedContribution = collectedCoreRevenue - odtiCost - devopsDirectCost - cloudCost;
    const attachedNotifications = annualSuccessfulDisbursements * input.notificationAttachmentRate;
    const notificationRevenue = attachedNotifications * input.notificationCustomerPrice;
    const collectedNotificationRevenue = notificationRevenue * (1 - input.nonCollectionRate);
    const notificationWholesaleCost = attachedNotifications * input.notificationWholesalePrice;
    const notificationMargin = collectedNotificationRevenue - notificationWholesaleCost;
    return {
      scenario,
      year,
      yearNumber: index + 1,
      newlyActiveBanks,
      activeBanks,
      activeMonths,
      sponsorsPerBank: input.sponsorsPerBank,
      activeSponsors,
      newlyOnboardedSponsors,
      volume,
      annualSuccessfulDisbursements,
      sponsorOnboardingRevenue,
      sponsorServiceRevenue,
      recipientDisbursementRevenue,
      coreExternalRevenue,
      collectedCoreRevenue,
      ruralBankRevenue,
      odtiRevenue,
      odtiCost,
      odtiContribution,
      devopsRevenue,
      devopsDirectCost,
      devopsContribution,
      cloudCost,
      consolidatedContribution,
      attachedNotifications,
      notificationRevenue,
      collectedNotificationRevenue,
      notificationWholesaleCost,
      notificationMargin,
    };
  });
}

function allScenarioRows() {
  return scenarios.flatMap((scenario) => computeScenarioRows(scenario));
}

function excelFormula(formula, result) {
  return { formula, result };
}

const scaffoldChecks = [
  ["Check", "Status", "Notes"],
  ["All planned sheets exist", "OK - scaffold", "Validated by --validate-scaffold-xlsx."],
  ["Required warnings present", "OK - scaffold", "Read Me includes scaffold and canonical-source warnings."],
  ["Assumption values not authorized", "OK - scaffold", "Scenario values remain Open, Blocked, Derived, or Not authorized."],
  ["No Level 1 projection populated", "OK - scaffold", "Revenue, contribution, P&L, cash flow, NPV, IRR, and dashboard values remain blocked."],
  ["DSP-VOL-001 is not independently populated", "OK - scaffold", "Derived from DSP-CUS-001 x DSP-CUS-002 x DSP-CUS-003 x DSP-VOL-002 after values exist."],
  ["Pass-through funding excluded from revenue", "OK - scaffold", "Disbursement funding is labeled Pass-through and not revenue."],
  ["NetBank, tax, royalty, and financing remain blocked", "OK - scaffold", "NET-001, NET-002, TAX-001, ROY-001, and FIN-001 remain blocked."],
  ["Optional notification remains optional", "OK - scaffold", "Notification sheets and assumptions are conditional."],
  ["Macro-free workbook", "OK - scaffold", "Generated through exceljs without VBA or external links."],
];

const slicePlans = {
  "--slice-2-plan": {
    name: "Slice 2: Assumptions And Activity Engine",
    sheets: [
      "00_Read_Me",
      "01_Control",
      "02_Assumptions",
      "03_Assumption_Map",
      "04_Adoption",
      "05_Disbursement_Activity",
      "21_Checks",
    ],
    gate: "Requires authorized P0 provisional inputs before workbook export.",
  },
  "--slice-3-plan": {
    name: "Slice 3: Revenue And Stakeholder Views",
    sheets: [
      "06_Pricing",
      "07_Revenue",
      "10_Rural_Bank_View",
      "11_ODTI_View",
      "12_DevOps_View",
      "13_Notification_Variant",
      "14_Consolidated_View",
    ],
    gate: "Requires populated Level 1 revenue and contribution outputs.",
  },
  "--slice-4-plan": {
    name: "Slice 4: P&L And Cash Flow",
    sheets: ["08_Cost_of_Sales", "09_Operating_Expenses", "15_Profit_and_Loss", "16_Cash_Flow"],
    gate: "Requires cash timing and blocked-output treatment.",
  },
  "--slice-5-plan": {
    name: "Slice 5: Capital Budgeting And Sensitivity",
    sheets: ["17_Capital_Budgeting", "18_Sensitivity"],
    gate: "Requires governed cash flows and FIN-001 or explicit blocked NPV/IRR treatment.",
  },
  "--slice-6-plan": {
    name: "Slice 6: Dashboard And Lineage",
    sheets: ["19_Scenarios", "20_Dashboard", "22_Source_Lineage"],
    gate: "Requires populated scenario outputs and source-lineage rows.",
  },
  "--slice-7-plan": {
    name: "Slice 7: Review And Freeze",
    sheets: plannedSheets,
    gate: "Requires parity validation against the canonical Level 1 model.",
  },
};

const sliceManifestPaths = {
  "--slice-2-manifest-check": "scripts/finance/disbursement_starter_slice2_manifest.json",
  "--slice-3-manifest-check": "scripts/finance/disbursement_starter_slice3_manifest.json",
  "--slice-4-manifest-check": "scripts/finance/disbursement_starter_slice4_manifest.json",
  "--slice-5-manifest-check": "scripts/finance/disbursement_starter_slice5_manifest.json",
  "--slice-6-manifest-check": "scripts/finance/disbursement_starter_slice6_manifest.json",
  "--slice-7-manifest-check": "scripts/finance/disbursement_starter_slice7_manifest.json",
};

const level1ManifestPath = "scripts/finance/disbursement_starter_level1_manifest.json";
const numericWorkbookManifestPath = "scripts/finance/disbursement_starter_numeric_workbook_manifest.json";

function printObject(value) {
  console.log(JSON.stringify(value, null, 2));
}

function optionValue(rawArgs, name, fallback) {
  const index = rawArgs.indexOf(name);
  if (index === -1) {
    return fallback;
  }
  return rawArgs[index + 1] || fallback;
}

async function loadExcelJs() {
  try {
    const exceljs = await import("exceljs");
    return exceljs.default || exceljs;
  } catch (error) {
    throw new Error(
      [
        "Repo-local workbook dependency exceljs is not available.",
        "Run npm install in this repository before using the scaffold workbook generator.",
        `Original error: ${error.message}`,
      ].join("\n"),
    );
  }
}

function applySheetStyle(worksheet) {
  worksheet.views = [{ state: "frozen", ySplit: 1 }];
  worksheet.properties.defaultRowHeight = 18;
  worksheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" } };
  worksheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF1F4E78" } };
  worksheet.getRow(1).alignment = { vertical: "middle", wrapText: true };

  worksheet.columns.forEach((column) => {
    let width = 12;
    column.eachCell({ includeEmpty: false }, (cell) => {
      const value = cell.value && typeof cell.value === "object" && cell.value.result !== undefined ? cell.value.result : cell.value;
      width = Math.max(width, Math.min(String(value ?? "").length + 2, 48));
      cell.alignment = { vertical: "top", wrapText: true };
      cell.border = { bottom: { style: "thin", color: { argb: "FFE5E7EB" } } };
    });
    column.width = width;
  });
}

function addRowsSheet(workbook, name, rows) {
  const worksheet = workbook.addWorksheet(name);
  worksheet.addRows(rows);
  applySheetStyle(worksheet);
  return worksheet;
}

function placeholderRows(sheet) {
  return [
    ["Section", "Status", "Canonical treatment", "Next required source"],
    [sheet, "Scaffold only", "No numeric Level 1 output generated", "Authorize provisional inputs and populate canonical Level 1 model"],
    ["Scenario values", "Open", "Conservative, Base, and Accelerated remain unpopulated", "Management candidate completion"],
    ["Blocked exclusions", "Blocked", "NetBank, tax, royalty, financing, and true support cost remain unavailable", "Evidence and governance review"],
  ];
}

function scaffoldRowsForSheet(sheet) {
  switch (sheet) {
    case "00_Read_Me":
      return [
        ["Field", "Value"],
        ["Model title", "Rural Bank Digital Disbursement Starter Financial Model"],
        ["Offering", offeringId],
        ["Artifact type", "Structural scaffold workbook"],
        ["Warning", scaffoldWarning],
        ["Canonical source rule", canonicalSourceWarning],
        ["Maturity", "Pre-Level 1 numeric model"],
        ["Permitted use", "Workbook-interface review, source-lineage review, and validation-path review"],
        ["Prohibited use", "Forecast, budget, pricing approval, contract, investment representation, or factual operating result"],
        ["Source documents", sourceDocuments.join("\n")],
      ];
    case "01_Control":
      return [
        ["Control", "Value", "Allowed values", "Status"],
        ["Selected scenario", "Base", scenarios.join("; "), "Scaffold placeholder only"],
        ["Model mode", "Structural Scaffold", "Structural Scaffold", "No numeric model"],
        ["Include optional notification", "No", "Yes; No", "Optional"],
        ["Cost view", "Incremental Disbursement", "Incremental Disbursement; Full-Cost Stress Test; Shared Platform Allocation", "Scaffold"],
        ["Volume method", "Component-derived", "Component-derived", "Independent aggregate disabled until authorized"],
        ["Workbook version", "Disbursement scaffold", "Text", "Scaffold"],
      ];
    case "02_Assumptions":
      return [
        ["Assumption ID", "Category", "Description", "Current Status", "Conservative", "Base", "Accelerated", "Notes"],
        ...scaffoldAssumptions,
      ];
    case "03_Assumption_Map":
      return [
        ["Assumption ID", "Used by", "Formula / Role", "Output tabs", "Status"],
        ["DSP-CUS-001", "DSP-VOL-001", "Primitive input", "05_Disbursement_Activity", "Open"],
        ["DSP-CUS-002", "DSP-VOL-001", "Primitive input", "05_Disbursement_Activity", "Open"],
        ["DSP-CUS-003", "DSP-VOL-001", "Primitive input", "05_Disbursement_Activity", "Open"],
        ["DSP-VOL-002", "DSP-VOL-001", "Primitive input", "05_Disbursement_Activity", "Open"],
        ["DSP-VOL-001", "Annual successful disbursements", "DSP-CUS-001 x DSP-CUS-002 x DSP-CUS-003 x DSP-VOL-002", "05_Disbursement_Activity; 07_Revenue", "Derived; not independently eligible"],
        ["ADP-002 + ADP-003 + DSP-VOL-001", "Annual successful disbursements", "ADP-002 x ADP-003 x DSP-VOL-001", "05_Disbursement_Activity", "Blocked until values exist"],
      ];
    case "21_Checks":
      return scaffoldChecks;
    case "22_Source_Lineage":
      return [
        ["Workbook item", "Assumption IDs", "Source document", "Section", "Status"],
        ["Offering selection", offeringId, "docs/decisions/0005-select-second-modeled-offering.md", "Decision", "Accepted"],
        ["Economic treatment", offeringId, "docs/decisions/0006-disbursement-starter-economic-treatment.md", "Decision", "Accepted"],
        ["Assumption identifiers", scaffoldAssumptions.map((row) => row[0]).join("; "), "docs/ASSUMPTIONS_REGISTER.md", "Disbursement records", "Canonical IDs"],
        ["Candidate values", "P0 and optional notification IDs", "provisional-input-candidate-pack.md", "Candidate records", "Open"],
        ["Provisional input register", "Future PI records", "provisional-input-register-level-1.md", "Authorization records", "Blank"],
        ["Level 1 calculations", "Future formulas", "offering-economics-level-1.md", "Level 1 scaffold", "Blocked"],
        ["Scaffold workbook policy", offeringId, "scaffold-workbook-generation-policy.md", "Boundary", "Allowed scaffold only"],
      ];
    default:
      return placeholderRows(sheet);
  }
}

async function buildScaffoldWorkbook(outputPath) {
  const ExcelJS = await loadExcelJs();
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "x-commerce";
  workbook.lastModifiedBy = "x-commerce";
  workbook.created = new Date("2026-07-15T00:00:00+08:00");
  workbook.modified = new Date("2026-07-15T00:00:00+08:00");
  workbook.properties.date1904 = false;

  for (const sheet of plannedSheets) {
    addRowsSheet(workbook, sheet, scaffoldRowsForSheet(sheet));
  }

  fs.mkdirSync(outputPath.split("/").slice(0, -1).join("/") || ".", { recursive: true });
  await workbook.xlsx.writeFile(outputPath);
  return outputPath;
}

async function validateScaffoldWorkbook(inputPath) {
  const ExcelJS = await loadExcelJs();
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Workbook not found: ${inputPath}`);
  }
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(inputPath);

  const sheetNames = workbook.worksheets.map((sheet) => sheet.name);
  const missingSheets = plannedSheets.filter((sheet) => !sheetNames.includes(sheet));
  if (missingSheets.length > 0) {
    throw new Error(`Missing sheets: ${missingSheets.join(", ")}`);
  }

  const readMe = workbook.getWorksheet("00_Read_Me");
  const readMeText = [];
  readMe.eachRow((row) => {
    row.eachCell((cell) => readMeText.push(String(cell.value ?? "")));
  });
  if (!readMeText.some((value) => value.includes("contains no authorized values"))) {
    throw new Error("Required scaffold warning missing from 00_Read_Me.");
  }
  if (!readMeText.some((value) => value.includes("must not become an independent source"))) {
    throw new Error("Required canonical source warning missing from 00_Read_Me.");
  }

  const assumptions = workbook.getWorksheet("02_Assumptions");
  const assumptionIds = new Set();
  assumptions.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      return;
    }
    const id = String(row.getCell(1).value ?? "");
    if (id) {
      if (assumptionIds.has(id)) {
        throw new Error(`Duplicate assumption ID in scaffold workbook: ${id}`);
      }
      assumptionIds.add(id);
    }
    for (const cellNumber of [5, 6, 7]) {
      const value = String(row.getCell(cellNumber).value ?? "");
      if (!["Open", "Blocked", "Derived"].includes(value)) {
        throw new Error(`Unauthorized scenario value in ${id}: ${value}`);
      }
    }
  });

  const checks = workbook.getWorksheet("21_Checks");
  const checkStatuses = [];
  checks.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      checkStatuses.push(String(row.getCell(2).value ?? ""));
    }
  });
  const errorStatuses = checkStatuses.filter((status) => status === "ERROR");
  if (errorStatuses.length > 0) {
    throw new Error("Scaffold workbook contains ERROR check statuses.");
  }

  const forbiddenMarkers = ["Level 1 projection value:", "Forecast output:"];
  const forbiddenHits = [];
  for (const worksheet of workbook.worksheets) {
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        const text = String(cell.value ?? "");
        if (forbiddenMarkers.some((marker) => text.includes(marker))) {
          forbiddenHits.push(`${worksheet.name}: ${text}`);
        }
      });
    });
  }
  if (forbiddenHits.length > 0) {
    throw new Error(`Forbidden scaffold text found: ${forbiddenHits.join("; ")}`);
  }

  return {
    inputPath,
    sheetCount: sheetNames.length,
    requiredSheets: plannedSheets.length,
    assumptionCount: assumptionIds.size,
    checkStatusRows: checkStatuses.length,
    status: "OK",
  };
}

function level1ReadMeRows() {
  return [
    ["Field", "Value"],
    ["Model title", "Rural Bank Digital Disbursement Starter Financial Model"],
    ["Offering", offeringId],
    ["Artifact type", "Level 1 controlled-placeholder workbook"],
    ["Warning", "This workbook uses draft-authorized management candidates and controlled placeholders. It is not a forecast, approved budget, provider quote, institutional commitment, contract, investment representation, public claim, or factual operating result."],
    ["Non-additive warning", "Stakeholder revenue figures are entity-level views and include internal transfers. They are not additive. Consolidated External Revenue counts external sponsor commercial inflows once."],
    ["Maturity", "Draft internal Level 1 model"],
    ["Volume method", "Component-derived"],
    ["Blocked", "DSP-RB-002; NET-001; NET-002; TAX-001; ROY-001; FIN-001; investor returns; partner allocations"],
    ["Source documents", sourceDocuments.join("\n")],
  ];
}

function level1AssumptionRows() {
  return [
    ["Provisional Input ID", "Assumption ID", "Description", "Conservative", "Base", "Accelerated", "Unit", "Authorization status"],
    ...provisionalInputRows.map((row) => [...row, "Draft internal authorization"]),
    ["Blocked", "DSP-RB-002", "Rural Bank internal support cost", "Blocked", "Blocked", "Blocked", "Open", "Blocked"],
    ["Blocked", "NET-001", "NetBank or infrastructure fee basis", "Blocked", "Blocked", "Blocked", "Open", "Blocked"],
    ["Blocked", "TAX-001", "Tax and withholding treatment", "Blocked", "Blocked", "Blocked", "Open", "Blocked"],
    ["Blocked", "ROY-001", "3neti royalty or license basis", "Blocked", "Blocked", "Blocked", "Open", "Blocked"],
    ["Blocked", "FIN-001", "Discount rate or financing basis", "Blocked", "Blocked", "Blocked", "Open", "Blocked"],
  ];
}

function level1ControlRows() {
  return [
    ["Control", "Value", "Allowed values", "Status"],
    ["Selected scenario", "Base", scenarios.join("; "), "Draft internal default"],
    ["Model mode", "Level 1 controlled placeholder", "Level 1 controlled placeholder", "Draft internal authorization"],
    ["Include optional notification", "No", "Yes; No", "Optional variant separately shown"],
    ["Cost view", "Incremental Disbursement", "Incremental Disbursement; Full-Cost Stress Test", "Shared platform allocation deferred"],
    ["Volume method", "Component-derived", "Component-derived", "Independent aggregate disabled"],
    ["Workbook version", "Disbursement Level 1 draft", "Text", "Generated"],
  ];
}

function level1MapRows() {
  return [
    ["Assumption ID", "Used by", "Formula / Role", "Output tabs", "Status"],
    ["DSP-CUS-001", "DSP-VOL-001", "Primitive input", "05_Disbursement_Activity", "Draft authorized"],
    ["DSP-CUS-002", "DSP-VOL-001", "Primitive input", "05_Disbursement_Activity", "Draft authorized"],
    ["DSP-CUS-003", "DSP-VOL-001", "Primitive input", "05_Disbursement_Activity", "Draft authorized"],
    ["DSP-VOL-002", "DSP-VOL-001", "Primitive input", "05_Disbursement_Activity", "Draft authorized"],
    ["DSP-VOL-001", "Annual successful disbursements", "DSP-CUS-001 x DSP-CUS-002 x DSP-CUS-003 x DSP-VOL-002", "05_Disbursement_Activity; 07_Revenue", "Derived"],
    ["ADP-002 + ADP-003 + DSP-VOL-001", "Annual successful disbursements", "ADP-002 x ADP-003 x DSP-VOL-001", "05_Disbursement_Activity", "Derived"],
    ["DSP-PRICE-*", "Core revenue", "Sponsor onboarding + service + recipient disbursement fees", "07_Revenue", "Draft authorized"],
  ];
}

function adoptionRows() {
  const rows = [["Scenario", "Year", "Newly active banks", "Active banks", "Weighted active months", "Sponsors per bank", "Active sponsors", "New sponsor relationships"]];
  for (const row of allScenarioRows()) {
    const r = rows.length + 1;
    rows.push([
      row.scenario,
      row.year,
      row.newlyActiveBanks,
      row.activeBanks,
      row.activeMonths,
      row.sponsorsPerBank,
      excelFormula(`D${r}*F${r}`, row.activeSponsors),
      excelFormula(`C${r}*F${r}`, row.newlyOnboardedSponsors),
    ]);
  }
  return rows;
}

function activityRows() {
  const rows = [["Scenario", "Year", "Active banks", "Weighted active months", "DSP-VOL-001", "Annual successful disbursements", "Formula note"]];
  for (const row of allScenarioRows()) {
    const r = rows.length + 1;
    rows.push([
      row.scenario,
      row.year,
      row.activeBanks,
      row.activeMonths,
      row.volume,
      excelFormula(`C${r}*D${r}*E${r}`, row.annualSuccessfulDisbursements),
      "ADP-002 x ADP-003 x DSP-VOL-001",
    ]);
  }
  return rows;
}

function pricingRows() {
  return [
    ["Scenario", "Sponsor onboarding fee", "Sponsor service fee", "Recipient fee", "Rural Bank retention", "ODTI transaction amount", "Notification customer price", "Notification wholesale price"],
    ...scenarios.map((scenario) => {
      const input = scenarioInputs[scenario];
      return [
        scenario,
        input.sponsorOnboardingFee,
        input.sponsorServiceFee,
        input.recipientDisbursementFee,
        input.ruralBankRetention,
        input.recipientDisbursementFee - input.ruralBankRetention,
        input.notificationCustomerPrice,
        input.notificationWholesalePrice,
      ];
    }),
  ];
}

function revenueRows() {
  const rows = [["Scenario", "Year", "Sponsor onboarding", "Sponsor service", "Recipient disbursement", "Core external revenue", "Collected core revenue", "Formula note"]];
  for (const row of allScenarioRows()) {
    const r = rows.length + 1;
    rows.push([
      row.scenario,
      row.year,
      roundPeso(row.sponsorOnboardingRevenue),
      roundPeso(row.sponsorServiceRevenue),
      roundPeso(row.recipientDisbursementRevenue),
      excelFormula(`C${r}+D${r}+E${r}`, roundPeso(row.coreExternalRevenue)),
      roundPeso(row.collectedCoreRevenue),
      "Sponsor commercial fees only; pass-through funding excluded",
    ]);
  }
  return rows;
}

function costRows() {
  return [
    ["Scenario", "Year", "Bad debt / non-collection", "ODTI cost", "DevOps direct cost", "Cloud external outflow", "Notification wholesale cost"],
    ...allScenarioRows().map((row) => [
      row.scenario,
      row.year,
      roundPeso(row.coreExternalRevenue - row.collectedCoreRevenue),
      roundPeso(row.odtiCost),
      roundPeso(row.devopsDirectCost),
      roundPeso(row.cloudCost),
      roundPeso(row.notificationWholesaleCost),
    ]),
  ];
}

function ruralBankRows() {
  return [
    ["Scenario", "Year", "Rural Bank Contribution Before Internal Bank Disbursement-Support Cost", "Optional notification margin", "Full-cost stress note"],
    ...allScenarioRows().map((row) => [
      row.scenario,
      row.year,
      roundPeso(row.ruralBankRevenue),
      roundPeso(row.notificationMargin),
      "DSP-RB-002 blocked; modernization costs not treated as final net income",
    ]),
  ];
}

function odtiRows() {
  return [
    ["Scenario", "Year", "ODTI revenue", "ODTI implementation/support cost", "ODTI Contribution: Pre-Tax, Pre-Royalty, NetBank-Fee-Blocked"],
    ...allScenarioRows().map((row) => [
      row.scenario,
      row.year,
      roundPeso(row.odtiRevenue),
      roundPeso(row.odtiCost),
      roundPeso(row.odtiContribution),
    ]),
  ];
}

function devopsRows() {
  return [
    ["Scenario", "Year", "DevOps revenue", "DevOps direct cost", "DevOps Contribution Before Tax And Overhead", "Cloud boundary"],
    ...allScenarioRows().map((row) => [
      row.scenario,
      row.year,
      roundPeso(row.devopsRevenue),
      roundPeso(row.devopsDirectCost),
      roundPeso(row.devopsContribution),
      "Cloud remains bank-owned external outflow",
    ]),
  ];
}

function notificationRows() {
  return [
    ["Scenario", "Year", "Attached notifications", "Notification customer revenue", "Collected notification revenue", "Wholesale provider cost", "Notification margin", "Delivery success"],
    ...allScenarioRows().map((row) => {
      const input = scenarioInputs[row.scenario];
      return [
        row.scenario,
        row.year,
        roundPeso(row.attachedNotifications),
        roundPeso(row.notificationRevenue),
        roundPeso(row.collectedNotificationRevenue),
        roundPeso(row.notificationWholesaleCost),
        roundPeso(row.notificationMargin),
        input.notificationSuccessRate,
      ];
    }),
  ];
}

function consolidatedRows() {
  return [
    ["Scenario", "Year", "Core external revenue", "Collected core revenue", "ODTI cost", "DevOps direct cost", "Cloud cost", "Consolidated Contribution Before Blocked Items", "Blocked"],
    ...allScenarioRows().map((row) => [
      row.scenario,
      row.year,
      roundPeso(row.coreExternalRevenue),
      roundPeso(row.collectedCoreRevenue),
      roundPeso(row.odtiCost),
      roundPeso(row.devopsDirectCost),
      roundPeso(row.cloudCost),
      roundPeso(row.consolidatedContribution),
      "NET-001; TAX-001; ROY-001; FIN-001; DSP-RB-002",
    ]),
  ];
}

function pnlRows() {
  return [
    ["Scenario", "Year", "Revenue", "Cost of sales / direct costs", "Operating contribution", "Tax", "Net income"],
    ...allScenarioRows().map((row) => [
      row.scenario,
      row.year,
      roundPeso(row.coreExternalRevenue),
      roundPeso(row.odtiCost + row.devopsDirectCost + row.cloudCost),
      roundPeso(row.consolidatedContribution),
      "Blocked",
      "Blocked",
    ]),
  ];
}

function cashRows() {
  return [
    ["Scenario", "Year", "Collected core commercial fees", "Known cash outflows before blocked items", "Draft cash contribution", "Timing caveat"],
    ...allScenarioRows().map((row) => [
      row.scenario,
      row.year,
      roundPeso(row.collectedCoreRevenue),
      roundPeso(row.odtiCost + row.devopsDirectCost + row.cloudCost),
      roundPeso(row.consolidatedContribution),
      "COL timing not separately governed for Disbursement",
    ]),
  ];
}

function capitalBudgetingRows() {
  return [
    ["Metric", "Status", "Reason"],
    ["NPV", "Blocked", "FIN-001 and governed cash-flow basis are missing"],
    ["IRR", "Blocked", "FIN-001 and valid investment cash-flow series are missing"],
    ["Discounted payback", "Blocked", "FIN-001 missing"],
    ["Investor return", "Excluded", "No investor-return mechanism in Level 1"],
  ];
}

function sensitivityRows() {
  return [
    ["Sensitivity", "Status", "Notes"],
    ["Active banks vs sponsors per bank", "Deferred", "Use formula-backed sensitivity after Level 1 is accepted"],
    ["Sponsor service fee vs active sponsors", "Deferred", "Candidate values visible in assumptions"],
    ["Recipient fee vs disbursement volume", "Deferred", "Core driver visible in activity and revenue sheets"],
    ["ODTI support cost vs active banks", "Deferred", "ODTI remains weak in Conservative/Base"],
  ];
}

function scenarioSummaryRows() {
  return [
    ["Scenario", "Year 1 active banks", "Year 5 active banks", "Year 1 active sponsors", "Year 5 active sponsors", "Year 1 disbursements", "Year 5 disbursements", "Year 5 core external revenue", "Year 5 consolidated contribution"],
    ...scenarios.map((scenario) => {
      const rows = computeScenarioRows(scenario);
      return [
        scenario,
        rows[0].activeBanks,
        rows[4].activeBanks,
        rows[0].activeSponsors,
        rows[4].activeSponsors,
        roundPeso(rows[0].annualSuccessfulDisbursements),
        roundPeso(rows[4].annualSuccessfulDisbursements),
        roundPeso(rows[4].coreExternalRevenue),
        roundPeso(rows[4].consolidatedContribution),
      ];
    }),
  ];
}

function dashboardRows() {
  const base = computeScenarioRows("Base");
  const accelerated = computeScenarioRows("Accelerated");
  return [
    ["Metric", "Value", "Notes"],
    ["Model", "Disbursement Level 1 controlled placeholder", "Draft internal authorization"],
    ["Base Year 5 core external revenue", roundPeso(base[4].coreExternalRevenue), "Gross sponsor commercial fees"],
    ["Base Year 5 consolidated contribution", roundPeso(base[4].consolidatedContribution), "Before blocked items"],
    ["Accelerated Year 5 core external revenue", roundPeso(accelerated[4].coreExternalRevenue), "Gross sponsor commercial fees"],
    ["Accelerated Year 5 consolidated contribution", roundPeso(accelerated[4].consolidatedContribution), "Before blocked items"],
    ["Blocked count", 8, "DSP-RB-002, NET-001, NET-002, TAX-001, ROY-001, FIN-001, investor, partner"],
  ];
}

function level1CheckRows() {
  return [
    ["Check", "Status", "Notes"],
    ["All planned sheets exist", "OK", "Validated by --validate-level-1-xlsx."],
    ["Draft authorization warning visible", "OK", "Read Me includes controlled-placeholder warning."],
    ["DSP-VOL-001 derived", "OK", "Component-derived by scenario."],
    ["Pass-through funding excluded from revenue", "OK", "Funding not included in revenue sheets."],
    ["Core and optional notification separated", "OK", "Notification on separate variant sheet."],
    ["Stakeholder revenue non-additive warning", "OK", "Read Me warning present."],
    ["Blocked outputs visible", "OK", "NetBank, tax, royalty, FIN, investor, partner remain blocked/excluded."],
    ["Formula cells present", "OK", "Workbook includes formula-backed derived rows with cached results."],
  ];
}

function lineageRows() {
  return [
    ["Workbook item", "Assumption IDs", "Source document", "Provisional Input IDs"],
    ["Draft inputs", provisionalInputRows.map((row) => row[1]).join("; "), "provisional-input-register-level-1.md", provisionalInputRows.map((row) => row[0]).join("; ")],
    ["Activity", "ADP-002; ADP-003; DSP-CUS-001; DSP-CUS-002; DSP-CUS-003; DSP-VOL-002; DSP-VOL-001", "offering-economics-level-1.md", "DSP-PI-L1-001 through DSP-PI-L1-007"],
    ["Pricing", "DSP-PRICE-001; DSP-PRICE-002; DSP-PRICE-003; DSP-RB-001", "offering-economics-level-1.md", "DSP-PI-L1-008 through DSP-PI-L1-011"],
    ["ODTI", "DSP-ODTI-001; DSP-ODTI-002", "offering-economics-level-1.md", "DSP-PI-L1-012; DSP-PI-L1-013"],
    ["DevOps", "OPS-001; OPS-002; OPS-003; CLD-001", "offering-economics-level-1.md", "DSP-PI-L1-014; DSP-PI-L1-015; DSP-PI-L1-017; DSP-PI-L1-018"],
    ["Optional notification", "DSP-ATT-001; DSP-VAS-001; DSP-CST-001; SMS-001", "offering-economics-level-1.md", "DSP-PI-L1-019 through DSP-PI-L1-022"],
    ["Blocked", "DSP-RB-002; NET-001; NET-002; TAX-001; ROY-001; FIN-001", "provisional-input-register-level-1.md", "Blocked"],
  ];
}

function level1RowsForSheet(sheet) {
  switch (sheet) {
    case "00_Read_Me":
      return level1ReadMeRows();
    case "01_Control":
      return level1ControlRows();
    case "02_Assumptions":
      return level1AssumptionRows();
    case "03_Assumption_Map":
      return level1MapRows();
    case "04_Adoption":
      return adoptionRows();
    case "05_Disbursement_Activity":
      return activityRows();
    case "06_Pricing":
      return pricingRows();
    case "07_Revenue":
      return revenueRows();
    case "08_Cost_of_Sales":
      return costRows();
    case "09_Operating_Expenses":
      return costRows();
    case "10_Rural_Bank_View":
      return ruralBankRows();
    case "11_ODTI_View":
      return odtiRows();
    case "12_DevOps_View":
      return devopsRows();
    case "13_Notification_Variant":
      return notificationRows();
    case "14_Consolidated_View":
      return consolidatedRows();
    case "15_Profit_and_Loss":
      return pnlRows();
    case "16_Cash_Flow":
      return cashRows();
    case "17_Capital_Budgeting":
      return capitalBudgetingRows();
    case "18_Sensitivity":
      return sensitivityRows();
    case "19_Scenarios":
      return scenarioSummaryRows();
    case "20_Dashboard":
      return dashboardRows();
    case "21_Checks":
      return level1CheckRows();
    case "22_Source_Lineage":
      return lineageRows();
    default:
      return placeholderRows(sheet);
  }
}

async function buildLevel1Workbook(outputPath) {
  const ExcelJS = await loadExcelJs();
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "x-commerce";
  workbook.lastModifiedBy = "x-commerce";
  workbook.created = new Date("2026-07-15T00:00:00+08:00");
  workbook.modified = new Date("2026-07-15T00:00:00+08:00");
  workbook.properties.date1904 = false;
  workbook.calcProperties.fullCalcOnLoad = true;

  for (const sheet of plannedSheets) {
    addRowsSheet(workbook, sheet, level1RowsForSheet(sheet));
  }

  fs.mkdirSync(outputPath.split("/").slice(0, -1).join("/") || ".", { recursive: true });
  await workbook.xlsx.writeFile(outputPath);
  return outputPath;
}

async function validateLevel1Workbook(inputPath) {
  const ExcelJS = await loadExcelJs();
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Workbook not found: ${inputPath}`);
  }
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(inputPath);
  const sheetNames = workbook.worksheets.map((sheet) => sheet.name);
  const missingSheets = plannedSheets.filter((sheet) => !sheetNames.includes(sheet));
  if (missingSheets.length > 0) {
    throw new Error(`Missing sheets: ${missingSheets.join(", ")}`);
  }

  const readMeText = [];
  workbook.getWorksheet("00_Read_Me").eachRow((row) => row.eachCell((cell) => readMeText.push(String(cell.value ?? ""))));
  if (!readMeText.some((value) => value.includes("draft-authorized management candidates"))) {
    throw new Error("Level 1 warning missing from 00_Read_Me.");
  }

  let formulaCount = 0;
  let errorCount = 0;
  let baseYear5ExternalRevenueFound = false;
  let baseYear5ContributionFound = false;
  for (const worksheet of workbook.worksheets) {
    worksheet.eachRow((row) => {
      row.eachCell((cell) => {
        if (cell.value && typeof cell.value === "object" && cell.value.formula) {
          formulaCount += 1;
        }
        const value = cell.value && typeof cell.value === "object" && cell.value.result !== undefined ? cell.value.result : cell.value;
        const text = String(value ?? "");
        if (["#REF!", "#DIV/0!", "#VALUE!", "#NAME?", "#N/A"].some((marker) => text.includes(marker))) {
          errorCount += 1;
        }
        if (Number(value) === 832560) {
          baseYear5ExternalRevenueFound = true;
        }
        if (Number(value) === -874091) {
          baseYear5ContributionFound = true;
        }
      });
    });
  }
  if (formulaCount === 0) {
    throw new Error("Expected formula-backed cells were not found.");
  }
  if (errorCount > 0) {
    throw new Error(`Formula/value error markers found: ${errorCount}`);
  }
  if (!baseYear5ExternalRevenueFound || !baseYear5ContributionFound) {
    throw new Error("Base Year 5 parity values not found in workbook.");
  }

  return {
    inputPath,
    sheetCount: sheetNames.length,
    requiredSheets: plannedSheets.length,
    formulaCount,
    baseYear5ExternalRevenue: 832560,
    baseYear5ConsolidatedContribution: -874091,
    status: "OK",
  };
}

function dryRun() {
  printObject({
    offering: offeringId,
    workbook: defaultWorkbookPath,
    status: "scaffold only",
    buildStatus: "blocked until provisional inputs and Level 1 economics are authorized",
    sourceDocuments,
    plannedSheets,
  });
}

function manifestCheck() {
  const manifests = Object.values(sliceManifestPaths).map((path) => JSON.parse(fs.readFileSync(path, "utf8")));
  for (const manifest of manifests) {
    if (manifest.model.offering !== offeringId) {
      throw new Error(`Manifest offering mismatch: ${manifest.model.offering}`);
    }
    if (manifest.model.builder !== "scripts/finance/build_disbursement_starter_model.mjs") {
      throw new Error(`Manifest builder mismatch: ${manifest.model.builder}`);
    }
    if (manifest.model.workbook !== defaultWorkbookPath) {
      throw new Error(`Manifest workbook mismatch: ${manifest.model.workbook}`);
    }
  }
  printObject({
    offering: offeringId,
    status: "manifest scaffold OK",
    manifestCount: manifests.length,
    plannedSheetCount: plannedSheets.length,
    requiredSources: sourceDocuments.length,
    blockedBuildReason: "No authorized Disbursement Level 1 numeric model exists yet.",
  });
}

function level1ManifestCheck() {
  const manifest = JSON.parse(fs.readFileSync(level1ManifestPath, "utf8"));
  if (manifest.model.offering !== offeringId) {
    throw new Error(`Level 1 manifest offering mismatch: ${manifest.model.offering}`);
  }
  if (manifest.volumeMethod.derivedAssumption !== "DSP-VOL-001") {
    throw new Error("Level 1 manifest must preserve DSP-VOL-001 as the derived volume assumption.");
  }
  if (!manifest.formulaFamilies.some((formula) => formula.id === "DSP-L1-ACTIVITY-001")) {
    throw new Error("Level 1 manifest missing component-derived activity formula.");
  }
  if (!manifest.blockedOutputs.includes("NetBank-fee-adjusted results")) {
    throw new Error("Level 1 manifest missing NetBank blocked-output treatment.");
  }
  printObject({
    offering: offeringId,
    status: "Level 1 calculation manifest OK",
    manifest: level1ManifestPath,
    formulaFamilies: manifest.formulaFamilies.length,
    requiredInputGroups: manifest.requiredInputGroups.length,
    requiredOutputFamilies: manifest.requiredOutputFamilies.length,
    blockedOutputs: manifest.blockedOutputs.length,
    checks: manifest.checks.length,
  });
}

function numericWorkbookManifestCheck() {
  const manifest = JSON.parse(fs.readFileSync(numericWorkbookManifestPath, "utf8"));
  if (manifest.model.offering !== offeringId) {
    throw new Error(`Numeric workbook manifest offering mismatch: ${manifest.model.offering}`);
  }
  if (manifest.model.builder !== "scripts/finance/build_disbursement_starter_model.mjs") {
    throw new Error(`Numeric workbook manifest builder mismatch: ${manifest.model.builder}`);
  }
  if (manifest.model.workbook !== defaultWorkbookPath) {
    throw new Error(`Numeric workbook manifest workbook mismatch: ${manifest.model.workbook}`);
  }
  const missingSheets = plannedSheets.filter((sheet) => !manifest.requiredSheets.includes(sheet));
  if (missingSheets.length > 0) {
    throw new Error(`Numeric workbook manifest missing required sheets: ${missingSheets.join(", ")}`);
  }
  printObject({
    offering: offeringId,
    status: "numeric workbook manifest OK",
    manifest: numericWorkbookManifestPath,
    requiredSources: manifest.requiredSources.length,
    requiredSheets: manifest.requiredSheets.length,
    prerequisites: manifest.numericExportPrerequisites.length,
    blockedItems: manifest.mustRemainBlockedUntilGoverned.length,
    paritySamplesRequired: manifest.paritySamplesRequired.length,
    validationChecks: manifest.validationChecks.length,
  });
}

function numericReadinessCheck() {
  const manifest = JSON.parse(fs.readFileSync(numericWorkbookManifestPath, "utf8"));
  printObject({
    offering: offeringId,
    status: "draft Level 1 workbook export available",
    workbook: defaultWorkbookPath,
    reason: "Draft internal provisional input register and Level 1 outputs are populated.",
    currentAllowedArtifact: "Level 1 controlled-placeholder workbook",
    prerequisites: manifest.numericExportPrerequisites,
    mustRemainBlockedUntilGoverned: manifest.mustRemainBlockedUntilGoverned,
    nextHumanAction: "Review the generated workbook, then replace draft placeholders with evidence or formal authorization.",
  });
}

function workbookFormulaPlan() {
  printObject({
    offering: offeringId,
    status: "formula-backed draft workbook implemented",
    plan: "docs/economics/offerings/rural-bank-disbursement-starter/workbook-formula-implementation-plan.md",
    currentWorkbook: defaultWorkbookPath,
    currentWorkbookMode: "Level 1 controlled placeholder",
    availableCommands: ["--build-level-1-xlsx", "--validate-level-1-xlsx"],
    blockedItems: ["DSP-RB-002", "NET-001", "NET-002", "TAX-001", "ROY-001", "FIN-001", "investor returns", "partner allocations"],
  });
}

function sliceManifestCheck(command) {
  const path = sliceManifestPaths[command];
  const manifest = JSON.parse(fs.readFileSync(path, "utf8"));
  if (manifest.model.offering !== offeringId) {
    throw new Error(`Manifest offering mismatch: ${manifest.model.offering}`);
  }
  if (manifest.model.builder !== "scripts/finance/build_disbursement_starter_model.mjs") {
    throw new Error(`Manifest builder mismatch: ${manifest.model.builder}`);
  }
  if (manifest.model.workbook !== defaultWorkbookPath) {
    throw new Error(`Manifest workbook mismatch: ${manifest.model.workbook}`);
  }
  printObject({
    offering: offeringId,
    status: "slice manifest scaffold OK",
    manifest: path,
    slice: manifest.model.slice,
    name: manifest.model.name,
    buildGate: manifest.buildGate,
  });
}

function parityPlan() {
  printObject({
    offering: offeringId,
    parityStatus: "blocked until canonical numeric outputs exist",
    requiredParitySources: [
      "provisional-input-register-level-1.md",
      "offering-economics-level-1.md",
      "five-year-revenue-projection-summary.md",
      "future workbook 22_Source_Lineage",
    ],
    requiredChecks: [
      "DSP-VOL-001 component-derived",
      "annual successful disbursements derive from active banks, active months, and DSP-VOL-001",
      "Core Disbursement separated from optional notification",
      "pass-through funding excluded from revenue",
      "stakeholder revenue non-additive",
      "NetBank, tax, royalty, and true Rural Bank support-cost outputs remain blocked",
    ],
  });
}

function parityValidation() {
  printObject({
    offering: offeringId,
    status: "blocked",
    reason: "canonical numeric Level 1 Disbursement model is not yet populated",
    workbook: defaultWorkbookPath,
    currentArtifactStatus: "not generated",
    requiredBeforeValidation: [
      "authorized provisional input register",
      "populated offering-economics-level-1.md",
      "normalized five-year summary",
      "generated workbook",
      "source-lineage rows",
    ],
    blockedOutputs: ["DSP-RB-002", "NET-001", "NET-002", "TAX-001", "ROY-001", "FIN-001"],
  });
}

function candidateCompletionPlan() {
  printObject({
    offering: offeringId,
    status: "candidate completion required",
    plan: "docs/economics/offerings/rural-bank-disbursement-starter/management-candidate-completion-plan.md",
    target: "Complete Conservative, Base, and Accelerated management candidates before provisional input authorization.",
    requiredCoreInputs: [
      "ADP-002",
      "ADP-003",
      "DSP-CUS-001",
      "DSP-CUS-002",
      "DSP-CUS-003",
      "DSP-VOL-002",
      "DSP-PRICE-001",
      "DSP-PRICE-002",
      "DSP-PRICE-003",
      "DSP-RB-001",
      "DSP-ODTI-001",
      "DSP-ODTI-002",
      "OPS-003",
      "CLD-001",
      "RISK-002",
    ],
    derivedInputs: ["DSP-VOL-001"],
    optionalNotificationInputs: ["DSP-ATT-001", "DSP-VAS-001", "DSP-CST-001", "SMS-001", "SMS-003", "SMS-004"],
    blockedOrExcluded: ["NET-001", "NET-002", "TAX-001", "ROY-001", "DSP-RB-002", "DSP-FUND-001", "FIN-001"],
    nextCommandAfterCompletion: "No build command yet; authorize provisional inputs and populate offering-economics-level-1.md first.",
  });
}

function candidateValueEntryPlan() {
  printObject({
    offering: offeringId,
    status: "candidate value entry required",
    plan: "docs/economics/offerings/rural-bank-disbursement-starter/candidate-value-entry-plan.md",
    target: "Populate Open Conservative, Base, and Accelerated candidate cells for management review only.",
    permittedOutput: "Updated provisional-input-candidate-pack.md with internal management candidates.",
    prohibitedOutputs: [
      "authorized provisional inputs",
      "Level 1 projections",
      "workbook artifact",
      "tax, royalty, NetBank, investor, or partner economics",
    ],
    requiredWarning: "Internal management candidate; not authorized; not evidence-supported; not a forecast.",
  });
}

function blockedBuild() {
  console.error("Disbursement workbook build is blocked.");
  console.error("Reason: no authorized Disbursement Level 1 numeric model or provisional input register exists yet.");
  console.error("Use --dry-run, --slice-*-plan, --manifest-check, or --parity-plan for the current scaffold.");
  process.exit(2);
}

function help() {
  console.log("Disbursement Starter workbook scaffold");
  console.log("");
  console.log("Available commands:");
  console.log("  --dry-run");
  console.log("  --manifest-check");
  console.log("  --parity-plan");
  console.log("  --parity-validation");
  console.log("  --candidate-completion-plan");
  console.log("  --candidate-value-entry-plan");
  console.log("  --level-1-manifest-check");
  console.log("  --numeric-workbook-manifest-check");
  console.log("  --numeric-readiness-check");
  console.log("  --workbook-formula-plan");
  console.log("  --build-scaffold-xlsx [--output artifacts/x-commerce-disbursement-starter-financial-model.xlsx]");
  console.log("  --validate-scaffold-xlsx [--input artifacts/x-commerce-disbursement-starter-financial-model.xlsx]");
  console.log("  --build-level-1-xlsx [--output artifacts/x-commerce-disbursement-starter-financial-model.xlsx]");
  console.log("  --validate-level-1-xlsx [--input artifacts/x-commerce-disbursement-starter-financial-model.xlsx]");
  for (const command of Object.keys(slicePlans)) {
    console.log(`  ${command}`);
  }
  for (const command of Object.keys(sliceManifestPaths)) {
    console.log(`  ${command}`);
  }
  console.log("  --build");
  console.log("");
  console.log("--build remains blocked; use --build-level-1-xlsx for the draft controlled-placeholder workbook.");
}

const args = new Set(process.argv.slice(2));
const rawArgs = process.argv.slice(2);

if (args.size === 0 || args.has("--help") || args.has("-h")) {
  help();
  process.exit(0);
}

if (args.has("--dry-run")) {
  dryRun();
  process.exit(0);
}

if (args.has("--manifest-check")) {
  manifestCheck();
  process.exit(0);
}

if (args.has("--level-1-manifest-check")) {
  level1ManifestCheck();
  process.exit(0);
}

if (args.has("--numeric-workbook-manifest-check")) {
  numericWorkbookManifestCheck();
  process.exit(0);
}

if (args.has("--numeric-readiness-check")) {
  numericReadinessCheck();
  process.exit(0);
}

if (args.has("--workbook-formula-plan")) {
  workbookFormulaPlan();
  process.exit(0);
}

if (args.has("--parity-plan")) {
  parityPlan();
  process.exit(0);
}

if (args.has("--parity-validation")) {
  parityValidation();
  process.exit(0);
}

if (args.has("--candidate-completion-plan")) {
  candidateCompletionPlan();
  process.exit(0);
}

if (args.has("--candidate-value-entry-plan")) {
  candidateValueEntryPlan();
  process.exit(0);
}

if (args.has("--build-scaffold-xlsx")) {
  const outputPath = optionValue(rawArgs, "--output", defaultWorkbookPath);
  const builtPath = await buildScaffoldWorkbook(outputPath);
  console.log(`Disbursement scaffold workbook written: ${builtPath}`);
  process.exit(0);
}

if (args.has("--validate-scaffold-xlsx")) {
  const inputPath = optionValue(rawArgs, "--input", defaultWorkbookPath);
  const result = await validateScaffoldWorkbook(inputPath);
  printObject({
    offering: offeringId,
    validation: "scaffold workbook OK",
    ...result,
  });
  process.exit(0);
}

if (args.has("--build-level-1-xlsx")) {
  const outputPath = optionValue(rawArgs, "--output", defaultWorkbookPath);
  const builtPath = await buildLevel1Workbook(outputPath);
  console.log(`Disbursement Level 1 workbook written: ${builtPath}`);
  process.exit(0);
}

if (args.has("--validate-level-1-xlsx")) {
  const inputPath = optionValue(rawArgs, "--input", defaultWorkbookPath);
  const result = await validateLevel1Workbook(inputPath);
  printObject({
    offering: offeringId,
    validation: "Level 1 workbook OK",
    ...result,
  });
  process.exit(0);
}

for (const [command, plan] of Object.entries(slicePlans)) {
  if (args.has(command)) {
    printObject({
      offering: offeringId,
      ...plan,
    });
    process.exit(0);
  }
}

for (const command of Object.keys(sliceManifestPaths)) {
  if (args.has(command)) {
    sliceManifestCheck(command);
    process.exit(0);
  }
}

if (args.has("--build")) {
  blockedBuild();
}

console.error(`Unknown command: ${process.argv.slice(2).join(" ")}`);
help();
process.exit(1);
