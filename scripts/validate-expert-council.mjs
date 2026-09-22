import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

function loadTypeScript() {
  const candidates = [
    path.join(root, 'apps', 'web', 'package.json'),
    path.join(root, 'package.json'),
  ];
  for (const base of candidates) {
    try {
      return createRequire(base)('typescript');
    } catch {
      /* try next */
    }
  }
  return null;
}

const ts = loadTypeScript();

console.log('🏛️ ================================================================');
console.log('   Arch 7大領域專家團隊品質審核與 7x7（49重）全頁深度迭代驗收');
console.log('   (Expert Council 7-Domain & 7x7 Matrix Quality Gate Verification)');
console.log('================================================================\n');

// 1. Load subjects exactly like validate-course-data.mjs
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');
const files = fs.readdirSync(subjectsDir).filter((file) => file.endsWith('.ts') && file !== 'professional-gap-topics.ts').sort();

const gapSource = fs.readFileSync(path.join(subjectsDir, 'professional-gap-topics.ts'), 'utf8')
  .replace(/^import[^\n]*\n/gm, '')
  .replace(/: string\[\]/g, '')
  .replace(/: string/g, '')
  .replace(/: TopicContent\[\]/g, '')
  .replace(/export const /g, 'const ');
const gapTopics = new Function(`${gapSource}\nreturn { mechanicsGapTopics, surveyingGapTopics, draftingGapTopics };`)();

const subjects = [];
for (const file of files) {
  const filename = path.join(subjectsDir, file);
  const source = fs.readFileSync(filename, 'utf8');
  const exportMatch = source.match(/export const (\w+): SubjectData =/);
  if (!exportMatch) continue;

  const executable = source
    .replace(/^import[^\n]*\n/gm, '')
    .replace(`export const ${exportMatch[1]}: SubjectData =`, `const ${exportMatch[1]} =`);
  
  try {
    const subject = new Function(
      'mechanicsGapTopics', 
      'surveyingGapTopics', 
      'draftingGapTopics', 
      `${executable}\nreturn ${exportMatch[1]};`
    )(gapTopics.mechanicsGapTopics, gapTopics.surveyingGapTopics, gapTopics.draftingGapTopics);

    if (subject && Array.isArray(subject.topics)) {
      subjects.push(subject);
    }
  } catch (err) {
    console.error(`❌ 解析 ${file} 失敗:`, err.message);
  }
}

// 2. Load Infographics Data
const dataContent1 = fs.readFileSync(path.join(root, 'apps/web/src/lib/pedagogy/topicInfographicsData.ts'), 'utf-8');
const dataContent2 = fs.readFileSync(path.join(root, 'apps/web/src/lib/pedagogy/topicInfographicsCommon.ts'), 'utf-8');
const combinedInfographics = dataContent1 + '\n' + dataContent2;

// 3. Load 7x7 Expert Council Matrix Engine
const councilSource = fs.readFileSync(path.join(root, 'apps/web/src/lib/pedagogy/expertCouncil7x7.ts'), 'utf-8');
let councilEngine;

if (ts) {
  const transpiled = ts.transpileModule(councilSource, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  }).outputText;
  const cExports = {};
  new Function('exports', transpiled)(cExports);
  councilEngine = cExports;
} else {
  const cleanSource = councilSource
    .replace(/^\uFEFF/, '')
    .replace(/^import[^\n]*\n/gm, '')
    .replace(/export interface [^}]+}/g, '')
    .replace(/export const /g, 'const ')
    .replace(/export function /g, 'function ');
  councilEngine = new Function(`${cleanSource}\nreturn { EXPERT_COUNCIL_MEMBERS, getExpertCouncil7x7Data };`)();
}

let totalTopics = 0;
let totalMatrixPoints = 0;
const issues = {
  e1Curriculum: [],
  e2ConceptDepth: [],
  e3WorkedExamplesSOP: [],
  e4CognitiveTraps: [],
  e5VisualInfographics: [],
  e6Matrix7x7: [],
  e7LicensureAlignment: [],
};

for (const subject of subjects) {
  for (const topic of subject.topics) {
    totalTopics++;
    const topicId = `${subject.slug}/${topic.slug}`;

    // [E1] 課綱結構與素養審查
    if (!topic.title || !topic.slug || typeof topic.gradeLevel !== 'number') {
      issues.e1Curriculum.push(`${topicId}: 缺少標題、slug 或 gradeLevel`);
    }

    // [E2] 概念深度與工程規範審查 (至少 3 個概念，且內文長度 >= 50 字元)
    if (!topic.concepts || topic.concepts.length < 3) {
      issues.e2ConceptDepth.push(`${topicId}: 概念數不足 (${topic.concepts?.length || 0} < 3)`);
    } else {
      topic.concepts.forEach((concept, cIdx) => {
        const bodyLen = (concept.body || '').trim().length;
        if (bodyLen < 50) {
          issues.e2ConceptDepth.push(`${topicId} (概念 #${cIdx + 1}): 內文過短 (${bodyLen} 字 < 50)`);
        }
      });
    }

    // [E3] 示範題 SOP 審查 (步驟數 >= 3 步)
    const workedExamples = topic.worked_examples || [];
    workedExamples.forEach((we, weIdx) => {
      const stepsCount = Array.isArray(we.steps) ? we.steps.length : 0;
      if (stepsCount < 3) {
        issues.e3WorkedExamplesSOP.push(`${topicId} (範例 #${weIdx + 1}): 步驟過簡 (${stepsCount} 步 < 3 步)`);
      }
    });

    // [E4] 認知陷阱與心智模型查核
    const traps = topic.fatalTraps || [];
    const models = topic.eliteMentalModels || [];
    if (traps.length === 0) {
      issues.e4CognitiveTraps.push(`${topicId}: 缺少致命盲點 (fatalTraps)`);
    }
    if (models.length === 0) {
      issues.e4CognitiveTraps.push(`${topicId}: 缺少心智模型 (eliteMentalModels)`);
    }

    // [E5] 視覺圖解覆蓋查核
    const hasInfographic = combinedInfographics.includes(`'${topicId}':`) || combinedInfographics.includes(`"${topicId}":`);
    if (!hasInfographic) {
      issues.e5VisualInfographics.push(`${topicId}: 缺失專屬視覺圖解項目`);
    }

    // [E6] 7x7 (49重) 專家深度迭代矩陣查核
    try {
      const matrix = councilEngine.getExpertCouncil7x7Data(subject.slug, topic);
      if (!matrix || !Array.isArray(matrix.cycles) || matrix.cycles.length !== 7) {
        issues.e6Matrix7x7.push(`${topicId}: 7 大循環不足 (${matrix?.cycles?.length || 0}/7)`);
      } else {
        let cycleChecks = 0;
        for (const cycle of matrix.cycles) {
          if (!Array.isArray(cycle.dimensions) || cycle.dimensions.length !== 7) {
            issues.e6Matrix7x7.push(`${topicId} (Cycle ${cycle.cycleIndex}): 維度不足 (${cycle.dimensions?.length || 0}/7)`);
          } else {
            cycleChecks += cycle.dimensions.length;
          }
        }
        totalMatrixPoints += cycleChecks;
        if (cycleChecks !== 49) {
          issues.e6Matrix7x7.push(`${topicId}: 49 項指標未滿額 (${cycleChecks}/49)`);
        }
      }
    } catch (mErr) {
      issues.e6Matrix7x7.push(`${topicId}: 矩陣生成異常 - ${mErr.message}`);
    }

    // [E7] 專技高考與生涯執照銜接查核
    if (!topic.desc || topic.desc.length < 10) {
      issues.e7LicensureAlignment.push(`${topicId}: 缺少主題說明與學用定位`);
    }
  }
}

// 輸出 7 大領域審核結果
console.log(`📋 審核範圍: ${subjects.length} 個科目，共 ${totalTopics} 個教學主題`);
const expectedMatrixPoints = totalTopics * 49;
console.log(`🔬 7x7 迭代指標審驗總數: ${totalMatrixPoints} 項檢驗點 (${totalTopics} 主題 × 49 重指標)\n`);

const results = [
  {
    domain: 'E1: 課綱結構與素養命題審查 (Curriculum Coverage)',
    passed: issues.e1Curriculum.length === 0,
    errors: issues.e1Curriculum,
    stat: `${totalTopics - issues.e1Curriculum.length} / ${totalTopics} 主題合規`,
  },
  {
    domain: 'E2: 工程規範與概念深度審查 (Knowledge Depth >= 50 chars)',
    passed: issues.e2ConceptDepth.length === 0,
    errors: issues.e2ConceptDepth,
    stat: issues.e2ConceptDepth.length === 0 ? '全概念深度充足' : `${issues.e2ConceptDepth.length} 項缺失`,
  },
  {
    domain: 'E3: 示範題 SOP 因果解題審查 (Worked Examples >= 3 Steps)',
    passed: issues.e3WorkedExamplesSOP.length === 0,
    errors: issues.e3WorkedExamplesSOP,
    stat: issues.e3WorkedExamplesSOP.length === 0 ? '全範例題 SOP 合規' : `${issues.e3WorkedExamplesSOP.length} 題不足`,
  },
  {
    domain: 'E4: 認知陷阱與心智模型審查 (Cognitive Defense)',
    passed: issues.e4CognitiveTraps.length === 0,
    errors: issues.e4CognitiveTraps,
    stat: issues.e4CognitiveTraps.length === 0 ? '100% 雙軌心智防衛配備' : `${issues.e4CognitiveTraps.length} 項缺失`,
  },
  {
    domain: 'E5: 專屬視覺圖解與空間表徵 (100% Infographic Coverage)',
    passed: issues.e5VisualInfographics.length === 0,
    errors: issues.e5VisualInfographics,
    stat: `${totalTopics - issues.e5VisualInfographics.length} / ${totalTopics} (100%)`,
  },
  {
    domain: `E6: 7x7 專家深度迭代矩陣審定 (Full 49 Dimensions across ${totalTopics} Topics)`,
    passed: issues.e6Matrix7x7.length === 0 && totalMatrixPoints === expectedMatrixPoints,
    errors: issues.e6Matrix7x7,
    stat: `${totalMatrixPoints} / ${expectedMatrixPoints} 點全面驗收 (100% 覆蓋)`,
  },
  {
    domain: 'E7: 專技高考與生涯執照銜接 (Licensure & B.Arch Alignment)',
    passed: issues.e7LicensureAlignment.length === 0,
    errors: issues.e7LicensureAlignment,
    stat: `${totalTopics - issues.e7LicensureAlignment.length} / ${totalTopics} 主題完成學用對接`,
  },
];

let allPassed = true;

for (const res of results) {
  if (res.passed) {
    console.log(`✅ [通過] ${res.domain} -> ${res.stat}`);
  } else {
    allPassed = false;
    console.log(`❌ [未通過] ${res.domain} -> ${res.stat}`);
    res.errors.slice(0, 5).forEach((e) => console.log(`   - ${e}`));
    if (res.errors.length > 5) {
      console.log(`   ... 及其餘 ${res.errors.length - 5} 個項目`);
    }
  }
}

console.log('\n----------------------------------------------------------------');
if (allPassed) {
  console.log(`🎉 恭喜！Arch 7 大領域專家委員會 100% 審定通過！`);
  console.log(`✨ 全站 ${totalTopics} 主題共 ${totalMatrixPoints} 項 7x7 深度迭代指標無一遺漏！`);
  process.exit(0);
} else {
  console.error('⚠️ 警告：專家團隊品質審核未通過，請修復上述項目。');
  process.exit(1);
}
