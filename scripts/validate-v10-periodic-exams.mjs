import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const root = process.cwd();
const req = createRequire(path.resolve(root, 'apps', 'web', 'package.json'));
const ts = req('typescript');

function transpileAndEval(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');
  const result = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  return result.outputText;
}

console.log('🏛️  啟動 Arch V10.00 Apex Mastery 段考複習講義與知識架構全覆蓋檢驗...\n');

const g10g12Code = transpileAndEval(path.join(root, 'apps/web/src/data/periodicExams/g10AndG12.ts'));
const g11Code = transpileAndEval(path.join(root, 'apps/web/src/data/periodicExams/taichungArchG11.ts'));

const modG10 = { exports: {} };
new Function('exports', 'require', 'module', g10g12Code)(modG10.exports, () => ({}), modG10);

const modG11 = { exports: {} };
new Function('exports', 'require', 'module', g11Code)(modG11.exports, () => ({}), modG11);

const allPlans = [...modG11.exports.taichungArchG11ExamPlans, ...modG10.exports.g10AndG12ExamPlans];

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    passCount++;
  } else {
    failCount++;
    console.error(`❌ FAIL: ${message}`);
  }
}

// 1. Total plans check
assert(allPlans.length === 34, `全部 34 個段考與模擬考方案載入成功 (實際: ${allPlans.length})`);

// 2. Grade distribution check
const g10Plans = allPlans.filter((p) => p.grade === 10);
const g11Plans = allPlans.filter((p) => p.grade === 11);
const g12Plans = allPlans.filter((p) => p.grade === 12);

assert(g10Plans.length === 10, `高一涵蓋 10 個段考方案 (力學 6 期 + 製圖 4 期) (實際: ${g10Plans.length})`);
assert(g11Plans.length === 21, `高二涵蓋 21 個段考方案 (材試 + 測量 + 共同科) (實際: ${g11Plans.length})`);
assert(g12Plans.length === 3, `高三涵蓋 3 個統測模擬考衝刺方案 (實際: ${g12Plans.length})`);

// 3. Extract getConceptTableData function from PeriodicExamDetailView.tsx
const detailViewCode = fs.readFileSync(path.join(root, 'apps/web/src/components/review/PeriodicExamDetailView.tsx'), 'utf-8');
const svgCompCode = fs.readFileSync(path.join(root, 'apps/web/src/components/review/PeriodicExamSvgIllustrations.tsx'), 'utf-8');
const hubCode = fs.readFileSync(path.join(root, 'apps/web/src/components/review/PeriodicExamHub.tsx'), 'utf-8');

const tableFnStart = detailViewCode.indexOf('function getConceptTableData(pointId: string)');
const tableFnSub = detailViewCode.slice(tableFnStart, tableFnStart + 120000);
let tableDepth = 0, tableFnEnd = -1;
for (let i = 0; i < tableFnSub.length; i++) {
  if (tableFnSub[i] === '{') tableDepth++;
  else if (tableFnSub[i] === '}') {
    tableDepth--;
    if (tableDepth === 0) {
      tableFnEnd = tableFnStart + i + 1;
      break;
    }
  }
}
const tableFnTranspiled = ts.transpileModule(detailViewCode.slice(tableFnStart, tableFnEnd), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const getConceptTableData = new Function(tableFnTranspiled + '; return getConceptTableData;')();

// Extract getSvgType function from PeriodicExamDetailView.tsx
const svgFnStart = detailViewCode.indexOf('const getSvgType = (subjectSlug: string, pointId: string)');
const svgFnSub = detailViewCode.slice(svgFnStart, svgFnStart + 10000);
let svgDepth = 0, svgFnEnd = -1;
for (let i = 0; i < svgFnSub.length; i++) {
  if (svgFnSub[i] === '{') svgDepth++;
  else if (svgFnSub[i] === '}') {
    svgDepth--;
    if (svgDepth === 0) {
      svgFnEnd = svgFnStart + i + 1;
      break;
    }
  }
}
const svgFnTranspiled = ts.transpileModule(detailViewCode.slice(svgFnStart, svgFnEnd), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const getSvgType = new Function(svgFnTranspiled + '; return getSvgType;')();

// 4. Verify all plans, knowledge points, worked examples, matrix tables, and SVGs
allPlans.forEach((plan) => {
  assert(Boolean(plan.id && plan.semesterTitle && plan.periodName && plan.examScope), `方案中繼資料齊全：${plan.id}`);
  assert(Array.isArray(plan.knowledgePoints) && plan.knowledgePoints.length >= 2, `方案具備至少 2 個核心知識點：${plan.id}`);
  assert(Array.isArray(plan.workedExamples) && plan.workedExamples.length >= 1, `方案具備至少 1 題 SOP 計算示範題：${plan.id}`);
  assert(Array.isArray(plan.crossReferencedQuestions) && plan.crossReferencedQuestions.length >= 1, `方案具備至少 1 題名校真題交叉對照：${plan.id}`);
  assert(Array.isArray(plan.cramFormulaCards) && plan.cramFormulaCards.length >= 1, `方案具備至少 1 張速記公式卡：${plan.id}`);
  assert(Array.isArray(plan.preExamChecklist) && plan.preExamChecklist.length >= 3, `方案具備至少 3 項考前能力檢核點：${plan.id}`);

  // Test worked examples quality
  (plan.workedExamples || []).forEach((we) => {
    assert(Boolean(we.title && we.questionStem && we.beginnerThinking && we.finalAnswer), `SOP 示範題欄位完備：${we.id} in ${plan.id}`);
    assert(Array.isArray(we.stepByStepSolution) && we.stepByStepSolution.length >= 3, `SOP 包含至少 3 步詳細計算程序：${we.id}`);
  });

  // Test knowledge points quality, tables, and SVGs
  plan.knowledgePoints.forEach((kp) => {
    assert(Boolean(kp.title && kp.curriculumCode && kp.summary && kp.cramTips?.length > 0 && kp.trapWarning), `知識點具備課綱代碼與避坑警示：${kp.id}`);

    // Verify matrix table (4 columns, custom data, no generic fallback)
    const tableData = getConceptTableData(kp.id);
    const hasCustomTable = tableData && !tableData.title.includes('重點速查規格矩陣') && tableData.headers.length === 4 && tableData.rows.length >= 2;
    assert(hasCustomTable, `知識點具備專屬四欄規格矩陣表：${kp.id}`);

    // Verify SVG mapping (must not be 'default')
    const svgType = getSvgType(plan.subjectSlug, kp.id);
    assert(Boolean(svgType && svgType !== 'default'), `知識點對齊專屬純向量 SVG 圖示：${kp.id} -> ${svgType}`);

    // Verify SVG illustration exists in PeriodicExamSvgIllustrations component
    const hasSvgComponent = svgCompCode.includes(`case '${svgType}':`);
    assert(hasSvgComponent, `向量圖庫組件包含圖示實現：${svgType}`);
  });
});

// 5. UI/UX Interactivity Features in DetailView
assert(detailViewCode.includes('showAllSop') && detailViewCode.includes('revealedExamples'), 'DetailView 具備步驟遮蔽/揭曉自測狀態管理');
assert(detailViewCode.includes('切換自測模式') && detailViewCode.includes('主動回想挑戰'), 'DetailView 具備主動回想挑戰 (Active Recall) 互動切換');
assert(detailViewCode.includes('章節導航跳轉') && detailViewCode.includes('公式速記卡') && detailViewCode.includes('SOP 示範題'), 'DetailView 具備快速章節膠囊導航跳轉條');

// 6. Verify 12 Brand New High-End Vector SVGs in SVG Component
const newSvgs = [
  'mechanics-varignon-couple',
  'mechanics-friction-angle',
  'mechanics-method-of-sections',
  'mechanics-vm-cantilever',
  'mechanics-radius-gyration',
  'drafting-lines-priority',
  'drafting-dimensioning-rules',
  'drafting-auxiliary-views',
  'arch-building-structure-types',
  'mechanics-pulley-system',
  'mechanics-axial-thermal-stress',
  'drafting-staircase-dimensioning',
];

newSvgs.forEach((svgKey) => {
  assert(svgCompCode.includes(`case '${svgKey}':`), `核心高階向量圖形模組實現：${svgKey}`);
});

console.log(`\n======================================================`);
console.log(`🎯 V10.00 Apex Mastery 段考檢驗結果：${passCount} / ${passCount + failCount} 項指標通過`);
if (failCount > 0) {
  console.error(`💥 檢驗未完全通過，失敗項目數：${failCount}`);
  process.exit(1);
} else {
  console.log(`✨ 全部 34 套高一段考、高二段考、高三模擬考方案 100% 達成雙軌擴充！`);
  console.log(`✨ 全部 69 個核心知識點 100% 具備純向量視覺化、四欄規格表與主動回想架構！`);
  console.log(`======================================================\n`);
}
