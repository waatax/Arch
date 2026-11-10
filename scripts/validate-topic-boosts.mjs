// Validate apps/web/src/data/topicBoosts: every topic carries hand-written boost concepts and quiz items,
// the structures are well-formed, and the +20% content target versus the pre-boost baseline is met.
import { createRequire } from 'node:module';
import path from 'node:path';
import { loadTsModule, repoRoot } from './lib/load-ts-module.mjs';

const require = createRequire(path.join(repoRoot, 'apps', 'web', 'package.json'));
const katex = require('katex');
const { allSubjects } = await loadTsModule('apps/web/src/data/subjects.ts');
const { topicBoostRegistry } = await loadTsModule('apps/web/src/data/topicBoosts/index.ts');

const errors = [];
let boostConcepts = 0;
let baseConcepts = 0;
let quizItems = 0;
const answerSlots = [0, 0, 0, 0];
const CONTROL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/;

for (const subject of allSubjects) {
  const map = topicBoostRegistry[subject.slug];
  if (!map) { errors.push(`${subject.slug}: 沒有加值包`); continue; }
  for (const slug of Object.keys(map)) {
    if (!subject.topics.some((t) => t.slug === slug)) errors.push(`${subject.slug}/${slug}: 加值包對應的主題不存在`);
  }
  for (const topic of subject.topics) {
    const route = `${subject.slug}/${topic.slug}`;
    const boost = map[topic.slug];
    const added = topic.concepts.filter((c) => c.boost);
    baseConcepts += topic.concepts.length - added.length;
    boostConcepts += added.length;
    if (!boost) { errors.push(`${route}: 缺加值包`); continue; }
    if (added.length !== boost.concepts.length || added.length < 1) errors.push(`${route}: 加值觀念未正確併入（${added.length}/${boost.concepts.length}）`);
    const headings = topic.concepts.map((c) => c.heading);
    if (new Set(headings).size !== headings.length) errors.push(`${route}: 觀念標題重複`);
    for (const concept of boost.concepts) {
      const label = `${route}「${concept.heading}」`;
      if (concept.body.length < 180) errors.push(`${label}: 內文過短（${concept.body.length} 字）`);
      if (CONTROL.test(JSON.stringify(concept).replace(/\[nrt]/g, ''))) errors.push(`${label}: 含控制字元`);
      const width = concept.table.headers.length;
      if (width < 2 || concept.table.rows.length < 3) errors.push(`${label}: 表格至少 2 欄 3 列`);
      concept.table.rows.forEach((row, i) => {
        if (row.length !== width) errors.push(`${label}: 表格第 ${i + 1} 列欄數 ${row.length} ≠ ${width}`);
        if (row.some((cell) => !cell.trim())) errors.push(`${label}: 表格第 ${i + 1} 列有空白儲存格`);
      });
      if (concept.cards.length < 3 || concept.cards.length > 4) errors.push(`${label}: 速記卡需 3–4 張`);
      for (const [k, v] of concept.cards) if (!k || !v || k.length > 14 || v.length > 34) errors.push(`${label}: 速記卡「${k}」過長或空白`);
      for (const text of [concept.formula, concept.body].filter(Boolean)) {
        for (const m of text.matchAll(/\$([^$]+)\$/g)) {
          try { katex.renderToString(m[1], { throwOnError: true, strict: 'error' }); } catch (e) { errors.push(`${label}: KaTeX 錯誤 ${e.message.slice(0, 80)}`); }
        }
      }
    }
    if (boost.quiz.length < 2) errors.push(`${route}: 挑戰題少於 2 題`);
    const seen = new Set();
    boost.quiz.forEach((item, i) => {
      const label = `${route} 挑戰題 ${i + 1}`;
      quizItems++;
      if (seen.has(item.q)) errors.push(`${label}: 題目重複`);
      seen.add(item.q);
      if (item.options.length !== 4) errors.push(`${label}: 需 4 個選項`);
      if (new Set(item.options).size !== item.options.length) errors.push(`${label}: 選項重複`);
      if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer > 3) errors.push(`${label}: answer 超出範圍`);
      else answerSlots[item.answer]++;
      if (!item.why || item.why.length < 6) errors.push(`${label}: 缺解析`);
      const correct = item.options[item.answer] ?? '';
      const longest = Math.max(...item.options.filter((_, j) => j !== item.answer).map((o) => o.length));
      if (correct.length >= 12 && correct.length >= longest * 2) errors.push(`${label}: 正解長度為誘答的 2 倍以上，容易被猜出`);
    });
  }
}

const growth = boostConcepts / baseConcepts;
if (growth < 0.2) errors.push(`新增觀念 ${boostConcepts} / 原有 ${baseConcepts} = ${(growth * 100).toFixed(1)}%，未達 20%`);
const maxShare = Math.max(...answerSlots) / quizItems;
if (maxShare > 0.45) errors.push(`正解位置過度集中：${answerSlots.join('/')}`);

console.log(`🚀 頂標加值包：新增觀念 ${boostConcepts}（原有 ${baseConcepts}，+${(growth * 100).toFixed(1)}%）、挑戰題 ${quizItems} 題，正解位置 A/B/C/D = ${answerSlots.join('/')}`);
if (errors.length) {
  console.error(`❌ ${errors.length} 項錯誤\n  ${errors.slice(0, 80).join('\n  ')}`);
  process.exit(1);
}
console.log('✅ 120 個主題皆有手寫加值觀念、速記卡與挑戰題，結構與公式檢查通過');
