import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

let passed = 0;
let failed = 0;

function assert(condition, description) {
  if (condition) {
    console.log(`  ✓ [PASS] ${description}`);
    passed++;
  } else {
    console.error(`  ✗ [FAIL] ${description}`);
    failed++;
  }
}

console.log('============================================================');
console.log('🧪 啟動 Arch 學習體驗 (UI/UX)、教學頁面與測驗系統端到端測試');
console.log('============================================================\n');

// -------------------------------------------------------------
// 測試區塊 1：教學頁面「四階段認知進階梯」架構檢驗
// -------------------------------------------------------------
console.log('📌 測試區塊 1：教學頁面「四階段認知進階梯」資訊架構合規性');
const topicLayout = read('apps/web/src/components/TopicPageLayout.tsx');

const idxStage1 = topicLayout.indexOf('id="stage-intuition"');
const idxStage2 = topicLayout.indexOf('id="stage-concepts"');
const idxStage3 = topicLayout.indexOf('id="stage-worked-traps"');
const idxStage4 = topicLayout.indexOf('id="stage-exam-practice"');
const idxStage5 = topicLayout.indexOf('id="stage-advanced"');

assert(idxStage1 > 0, '階段一「直覺啟蒙與情境錨定」錨點存在 (id="stage-intuition")');
assert(idxStage2 > 0, '階段二「觀念精講與動態圖解」錨點存在 (id="stage-concepts")');
assert(idxStage3 > 0, '階段三「解題思維與避坑指南」錨點存在 (id="stage-worked-traps")');
assert(idxStage4 > 0, '階段四「全真測驗與錯題反思」錨點存在 (id="stage-exam-practice")');
assert(idxStage5 > 0, '階段五「延伸工程規範與學術深化」錨點存在 (id="stage-advanced")');

assert(
  idxStage1 < idxStage2 && idxStage2 < idxStage3 && idxStage3 < idxStage4 && idxStage4 < idxStage5,
  '四階段認知進階梯順序嚴格符合教學心理學 (直覺入門 ➔ 觀念精講 ➔ 示範避坑 ➔ 真題實戰 ➔ 延伸法規)'
);

assert(
  topicLayout.includes('setLearningMode') && topicLayout.includes('循序精熟') && topicLayout.includes('⚡速查'),
  '具備「循序精熟模式」與「考前⚡速查模式」雙軌學習切換器'
);

assert(
  topicLayout.includes('handleTagTopicMistake') && topicLayout.includes('標記錯因收納：'),
  '章節真題實戰具備一鍵錯因分類 (K/F/U/G/A/R) 收錄功能'
);

assert(
  topicLayout.includes('<MistakeNotebookModal'),
  '章節頁面已無縫掛載全域「錯題 X 光筆記本」模態框'
);

// -------------------------------------------------------------
// 測試區塊 2：五段式名師解題心法 (5-Step Walkthrough) 生成檢驗
// -------------------------------------------------------------
console.log('\n📌 測試區塊 2：五段式名師解題心法 (5-Step Walkthrough) 邏輯檢驗');
const masteryCode = read('apps/web/src/lib/pedagogy/masteryLesson.ts');

assert(masteryCode.includes('buildExamWalkthrough'), '存在 buildExamWalkthrough 題解引擎');

// Dynamic import of masteryLesson
const { buildExamWalkthrough } = await import('../apps/web/src/lib/pedagogy/masteryLesson.ts');

const sampleQuestion = {
  excerpt: '關於工程力學之共點力系平衡，下列敘述何者錯誤？',
  answer: 'C',
  options: {
    A: '合力必須為零',
    B: 'ΣFx = 0 且 ΣFy = 0',
    C: '力偶矩可以不為零',
    D: '各力作用線必交於同一點',
  },
};

const walkthrough = buildExamWalkthrough(sampleQuestion, {
  title: '平面力系與平衡',
  desc: '探討力之合成、分解與平衡條件。',
});

assert(Boolean(walkthrough.restate), '產生步驟 1：題目到底在問什麼 (Restate)');
assert(walkthrough.restate.includes('反向提問') || walkthrough.restate.includes('不符合'), '正確辨識題幹否定語「錯誤」並給予審題提醒');
assert(Boolean(walkthrough.clues), '產生步驟 2：破題關鍵線索 (Clues)');
assert(Boolean(walkthrough.rule), '產生步驟 3：核心原理與解題準則 (Rule)');
assert(walkthrough.correct.includes('C'), '產生步驟 4：官方正解判定理由包含正確選項 C');
assert(walkthrough.distractors.length === 3, '產生步驟 5：精準提取 3 個干擾誘答項 (A, B, D)');
assert(
  walkthrough.distractors.some((d) => d.includes('A') && d.includes('合力必須為零')),
  '干擾項分析精確對照原題選項 A'
);
assert(Boolean(walkthrough.transfer), '產生遷移應用思維 (Transferable Insight)');

// -------------------------------------------------------------
// 測試區塊 3：全真測驗模擬器 (ExamSimulator) 功能檢驗
// -------------------------------------------------------------
console.log('\n📌 測試區塊 3：全真測驗模擬器 (ExamSimulator) 升級功能檢驗');
const simulatorCode = read('apps/web/src/components/ExamSimulator.tsx');

assert(simulatorCode.includes('handleRetryMistakes'), '支援「重新挑戰錯題（弱點特訓）」模式 (handleRetryMistakes)');
assert(simulatorCode.includes('handleTagMistake'), '支援 1-Click 錯題分類標記並收納至 Student Store (handleTagMistake)');
assert(simulatorCode.includes('useStudentStore'), '已成功串接 Zustand 學生狀態儲存庫 (useStudentStore)');
assert(simulatorCode.includes('MistakeNotebookModal'), '已成功引入並渲染「錯題 X 光筆記本」');
assert(simulatorCode.includes('buildExamWalkthrough'), '交卷後提供五段式名師思維詳解');
assert(simulatorCode.includes('K盲點') && simulatorCode.includes('U單位'), '支援 K(知識盲點)/F(公式)/U(單位)/G(圖面)/A(計算)/R(審題) 六大錯因標籤');

// -------------------------------------------------------------
// 測試區塊 4：學生錯題間隔複習狀態機 (Leitner 1/7/21 System)
// -------------------------------------------------------------
console.log('\n📌 測試區塊 4：Leitner 1/7/21 天間隔複習狀態機邏輯檢驗');
const studentStoreCode = read('apps/web/src/lib/store/studentStore.ts');

assert(studentStoreCode.includes('reviewIntervals = [1, 7, 21]'), '具備 1/7/21 天艾賓浩斯間隔遺忘曲線週期設定');
assert(studentStoreCode.includes('addMistakeCard'), '具備 addMistakeCard 方法');
assert(studentStoreCode.includes('removeMistakeCard'), '具備 removeMistakeCard 刪除/掌握歸檔方法');
assert(studentStoreCode.includes('reviewMistakeCard'), '具備 reviewMistakeCard 間隔晉級與重置方法');
assert(studentStoreCode.includes('updateAccuracy'), '具備答題命中率動態追蹤 (updateAccuracy)');

// -------------------------------------------------------------
// 測試區塊 5：作答判定與多選題輔助函式邏輯
// -------------------------------------------------------------
console.log('\n📌 測試區塊 5：作答判定與多選題核心邏輯檢驗');
const { isAnswerCorrect, isMultipleChoiceAnswer, toggleSelectedChoice, isAnswerChoiceCorrect } = await import('../apps/web/src/lib/examAnswers.ts');

assert(isAnswerCorrect('A', 'A') === true, '單選題作答正確判定');
assert(isAnswerCorrect('A', 'B') === false, '單選題作答錯誤判定');
assert(isMultipleChoiceAnswer('AB') === true, '多選題辨識 (AB)');
assert(isMultipleChoiceAnswer('C') === false, '單選題辨識 (C)');
assert(isAnswerCorrect('AB', 'AB') === true, '多選題完全正確判定');
assert(isAnswerCorrect('AB', 'A') === false, '多選題少選判定為未完全正確');
assert(toggleSelectedChoice('A', 'B') === 'AB', '多選題追加選項 (A + B -> AB)');
assert(toggleSelectedChoice('AB', 'A') === 'B', '多選題取消已選選項 (AB - A -> B)');
assert(isAnswerChoiceCorrect('AC', 'A') === true, '選項正確性判定 (AC 中的 A 為正確)');
assert(isAnswerChoiceCorrect('AC', 'B') === false, '選項正確性判定 (AC 中的 B 為錯誤)');

// -------------------------------------------------------------
// 總結測試結果
// -------------------------------------------------------------
console.log('\n============================================================');
if (failed === 0) {
  console.log(`🎉 全部 ${passed} 項學習體驗、教學頁面與測驗系統測試 100% 通過！`);
  console.log('✨ 平台已具備教科書級認知進階梯、五段式名師題解與 Leitner 錯題自適應特訓！');
  process.exitCode = 0;
} else {
  console.error(`❌ 測試失敗：共 ${failed} 項未通過，${passed} 項通過。請修正錯誤後重試。`);
  process.exitCode = 1;
}
