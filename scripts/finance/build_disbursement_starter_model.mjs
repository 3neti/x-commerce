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
