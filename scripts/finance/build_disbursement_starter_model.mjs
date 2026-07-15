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
  console.log("  --build-scaffold-xlsx [--output artifacts/x-commerce-disbursement-starter-financial-model.xlsx]");
  console.log("  --validate-scaffold-xlsx [--input artifacts/x-commerce-disbursement-starter-financial-model.xlsx]");
  for (const command of Object.keys(slicePlans)) {
    console.log(`  ${command}`);
  }
  for (const command of Object.keys(sliceManifestPaths)) {
    console.log(`  ${command}`);
  }
  console.log("  --build");
  console.log("");
  console.log("--build is intentionally blocked until canonical numeric inputs are authorized.");
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
