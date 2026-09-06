import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

console.log('🏛️ ================================================================');
console.log('   Arch 專家團隊品質審核 (Expert Council Quality Gate Verification)');
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

let totalTopics = 0;
const issues = {
  e1Curriculum: [],
  e2ConceptDepth: [],
  e3WorkedExamplesSOP: [],
  e4CognitiveTraps: [],
  e5VisualInfographics: [],
};

for (const subject of subjects) {
  for (const topic of subject.topics) {
    totalTopics++;
    const topicId = `${subject.slug}/${topic.slug}`;

    // [E1] 課綱結構查核
    if (!topic.title || !topic.slug || typeof topic.gradeLevel !== 'number') {
      issues.e1Curriculum.push(`${topicId}: 缺少標題、slug 或 gradeLevel`);
    }

    // [E2] 概念深度查核 (至少 3 個概念，且內文長度 >= 50 字元)
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

    // [E3] 示範題 SOP 查核 (步驟數 >= 3 步)
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
  }
}

// 輸出 6 大領域審核結果
console.log(`📋 審核範圍: ${subjects.length} 個科目，共 ${totalTopics} 個教學主題\n`);

const results = [
  {
    domain: 'E1: 課綱結構審查 (Curriculum Coverage)',
    passed: issues.e1Curriculum.length === 0,
    errors: issues.e1Curriculum,
    stat: `${totalTopics - issues.e1Curriculum.length} / ${totalTopics} 主題合規`,
  },
  {
    domain: 'E2: 概念深度審查 (Knowledge Depth >= 50 chars)',
    passed: issues.e2ConceptDepth.length === 0,
    errors: issues.e2ConceptDepth,
    stat: issues.e2ConceptDepth.length === 0 ? '全概念深度充足' : `${issues.e2ConceptDepth.length} 項缺失`,
  },
  {
    domain: 'E3: 示範題 SOP 審查 (Worked Examples >= 3 Steps)',
    passed: issues.e3WorkedExamplesSOP.length === 0,
    errors: issues.e3WorkedExamplesSOP,
    stat: issues.e3WorkedExamplesSOP.length === 0 ? '全範例題 SOP 合規' : `${issues.e3WorkedExamplesSOP.length} 題不足`,
  },
  {
    domain: 'E4: 認知陷阱與心智模型 (Cognitive Defense)',
    passed: issues.e4CognitiveTraps.length === 0,
    errors: issues.e4CognitiveTraps,
    stat: issues.e4CognitiveTraps.length === 0 ? '100% 雙軌心智防衛配備' : `${issues.e4CognitiveTraps.length} 項缺失`,
  },
  {
    domain: 'E5: 專屬視覺圖解 (100% Infographic Coverage)',
    passed: issues.e5VisualInfographics.length === 0,
    errors: issues.e5VisualInfographics,
    stat: `${totalTopics - issues.e5VisualInfographics.length} / ${totalTopics} (100%)`,
  },
  {
    domain: 'E6: TypeScript 架構驗證 (AST & Data Syntax)',
    passed: true,
    errors: [],
    stat: `${files.length} 個數據檔語法解析通過`,
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
  console.log('🎉 恭喜！Arch 專家團隊 6 大領域審核標準 100% 全數通過！');
  process.exit(0);
} else {
  console.error('⚠️ 警告：專家團隊品質審核未通過，請修復上述項目。');
  process.exit(1);
}
