/**
 * ARCHIVE — Automated Studio Verification & Quality Gate Suite
 * 
 * Runs automated checks across data models, research corpus integrity,
 * 500 UI inspirations database, documentation completeness, and component architecture.
 */

const fs = require('fs');
const path = require('path');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, failureDetail) {
  if (condition) {
    console.log(`  ✓ [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`  ✗ [FAIL] ${testName} — ${failureDetail}`);
    failedTests++;
  }
}

console.log('\n======================================================');
console.log('🏛️  ARCHIVE — Automated Quality Assurance & Verification');
console.log('======================================================\n');

// --- Suite 1: Research Corpus Integrity (510 items) ---
console.log('📦 SUITE 1: Research Corpus & 510-Reference Inventory');

const jsonPath = path.join(__dirname, '..', 'research', 'references.json');
const csvPath = path.join(__dirname, '..', 'research', 'references.csv');

assert(fs.existsSync(jsonPath), 'references.json exists', 'research/references.json not found');
assert(fs.existsSync(csvPath), 'references.csv exists', 'research/references.csv not found');

if (fs.existsSync(jsonPath)) {
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  assert(data.length === 510, 'Reference Count matches 510 exact target', `Found ${data.length} records instead of 510`);
}

// --- Suite 1B: 500 UI Design Inspirations Database ---
console.log('\n🎨 SUITE 1B: 500 UI Design Inspirations (Dribbble, Behance, Pinterest, Awwwards)');
const uiJsonPath = path.join(__dirname, '..', 'research', 'ui-design-inspirations-500', 'ui-inspirations.json');
const uiCsvPath = path.join(__dirname, '..', 'research', 'ui-design-inspirations-500', 'ui-inspirations.csv');
const uiReadmePath = path.join(__dirname, '..', 'research', 'ui-design-inspirations-500', 'README.md');
const uiColorReportPath = path.join(__dirname, '..', 'research', 'ui-design-inspirations-500', 'color-analysis-report.md');

assert(fs.existsSync(uiJsonPath), 'ui-inspirations.json exists', 'File not found');
assert(fs.existsSync(uiCsvPath), 'ui-inspirations.csv exists', 'File not found');
assert(fs.existsSync(uiReadmePath), 'ui-inspirations README.md exists', 'File not found');
assert(fs.existsSync(uiColorReportPath), 'color-analysis-report.md exists', 'File not found');

if (fs.existsSync(uiJsonPath)) {
  const uiData = JSON.parse(fs.readFileSync(uiJsonPath, 'utf8'));
  assert(uiData.length === 500, 'UI Inspiration Count matches 500 exact target', `Found ${uiData.length} records instead of 500`);
}

// --- Suite 2: Product Documentation Verification ---
console.log('\n📄 SUITE 2: Product Discovery & Specification Documents');
const productFiles = [
  'vision.md',
  'audience-personas.md',
  'product-requirements.md',
  'experience-strategy.md',
  'content-strategy.md',
  'acceptance-criteria.md',
  'decision-log.md',
];
productFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'product', file);
  assert(fs.existsSync(p), `Product file: /docs/product/${file}`, `Missing ${file}`);
});

// --- Suite 3: Design Direction Documents ---
console.log('\n🎨 SUITE 3: Senior Product Design Documents');
const designFiles = [
  'art-direction.md',
  'concept-explorations.md',
  'design-system.md',
  'typography.md',
  'color-system.md',
  'layout-specification.md',
  'responsive-behavior.md',
  'asset-direction.md',
  'design-qa.md',
];
designFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'design', file);
  assert(fs.existsSync(p), `Design file: /docs/design/${file}`, `Missing ${file}`);
});

// --- Suite 4: Motion & Interaction Documents ---
console.log('\n🎬 SUITE 4: Motion & Interaction Documents');
const motionFiles = [
  'motion-direction.md',
  'interaction-inventory.md',
  'animation-tokens.md',
  'scroll-storyboard.md',
  'reduced-motion-spec.md',
  'performance-validation.md',
];
motionFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'motion', file);
  assert(fs.existsSync(p), `Motion file: /docs/motion/${file}`, `Missing ${file}`);
});

// --- Suite 5: Engineering Documents & Quality Reports ---
console.log('\n⚙️  SUITE 5: Engineering Documents & Quality Reports');
const engineeringFiles = [
  'architecture.md',
  'component-map.md',
  'implementation-plan.md',
  'performance-report.md',
  'accessibility-report.md',
  'test-results.md',
  'deployment.md',
];
engineeringFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'engineering', file);
  assert(fs.existsSync(p), `Engineering file: /docs/engineering/${file}`, `Missing ${file}`);
});

// --- Suite 6: Agent Handoffs Audit ---
console.log('\n🤝 SUITE 6: Cross-Agent Sequential Handoff Ledger');
const handoffFiles = [
  '01-product-to-research-and-design.md',
  '02-research-to-design.md',
  '03-design-to-motion-and-engineering.md',
  '04-motion-to-engineering.md',
  '05-engineering-to-qa.md',
  '06-final-delivery.md',
];
handoffFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'agent-handoffs', file);
  assert(fs.existsSync(p), `Handoff file: /docs/agent-handoffs/${file}`, `Missing ${file}`);
});

// --- Suite 7: Component Implementation & Landing Page Architecture ---
console.log('\n💻 SUITE 7: Component Implementation & Landing Page Architecture');
const sectionComponents = [
  'HeroSection.tsx',
  'ManifestoSection.tsx',
  'DisciplinesSection.tsx',
  'FeaturedStorySection.tsx',
  'TimelineSection.tsx',
  'CollectionSection.tsx',
  'ContinuitySection.tsx',
  'ClosingSection.tsx',
];
sectionComponents.forEach((file) => {
  const p = path.join(__dirname, '..', 'src', 'components', 'sections', file);
  assert(fs.existsSync(p), `Section component: ${file}`, `Missing ${file}`);
});

const uiComponents = [
  'AudioController.tsx',
  'ArtifactModal.tsx',
  'SubmissionModal.tsx',
  'ComparisonSlider.tsx',
  'ColorPaletteInspector.tsx',
];
uiComponents.forEach((file) => {
  const p = path.join(__dirname, '..', 'src', 'components', 'ui', file);
  assert(fs.existsSync(p), `UI component: ${file}`, `Missing ${file}`);
});

console.log('\n======================================================');
console.log(`TOTAL TESTS: ${passedTests + failedTests}`);
console.log(`PASSED:      ${passedTests}`);
console.log(`FAILED:      ${failedTests}`);
console.log('======================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL AUTOMATED QUALITY GATES PASSED SUCCESSFULLY.\n');
  process.exit(0);
}
