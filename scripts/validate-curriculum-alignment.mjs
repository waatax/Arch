// Validate that every teaching page is aligned to its official outline (115 統測考試大綱 / 108 課綱學習內容):
//   - every topic has a curriculumCode, every concept declares outlineRefs (empty array = 延伸內容)
//   - every outlineRef resolves to a real item of that subject's outline
//   - every required outline item is taught by at least one concept
import { loadTsModule } from './lib/load-ts-module.mjs';

const { allSubjects } = await loadTsModule('apps/web/src/data/subjects.ts');
const { OFFICIAL_OUTLINES } = await loadTsModule('apps/web/src/data/curriculum/officialOutlines.ts');

// Units the curriculum lets teachers skip for 土木與建築群 (documented in each outline's notes).
const OPTIONAL_UNITS = {
  history: new Set(['歷B', '歷C']),
};

const errors = [];
const report = [];
let totalConcepts = 0;
let extensionConcepts = 0;

for (const subject of allSubjects) {
  const outline = OFFICIAL_OUTLINES[subject.slug];
  if (!outline) { errors.push(`${subject.slug}: 缺少官方大綱／課綱對照`); continue; }
  const items = new Map(outline.units.flatMap((u) => u.items.map((i) => [i.code, { ...i, unit: u.code }])));
  const covered = new Map();
  for (const topic of subject.topics) {
    const route = `${subject.slug}/${topic.slug}`;
    if (!/^(TCTE115|108|108GR)-/.test(topic.curriculumCode ?? '')) errors.push(`${route}: curriculumCode 缺漏或格式不符 (${topic.curriculumCode ?? '—'})`);
    topic.concepts.forEach((concept, index) => {
      totalConcepts++;
      if (!Array.isArray(concept.outlineRefs)) { errors.push(`${route} 觀念 ${index + 1}: 缺 outlineRefs（延伸內容請標 []）`); return; }
      if (concept.outlineRefs.length === 0) extensionConcepts++;
      for (const code of concept.outlineRefs) {
        if (!items.has(code)) errors.push(`${route} 觀念 ${index + 1}: outlineRefs 代碼 ${code} 不在 ${outline.shortLabel}`);
        else (covered.get(code) ?? covered.set(code, []).get(code)).push(`${topic.slug}#${index + 1}`);
      }
    });
  }
  const optional = OPTIONAL_UNITS[subject.slug] ?? new Set();
  const required = [...items.values()].filter((i) => outline.kind === 'exam' || (!i.advanced && !optional.has(i.unit)));
  const missing = required.filter((i) => !covered.has(i.code));
  const advancedCovered = [...items.values()].filter((i) => i.advanced && covered.has(i.code)).length;
  report.push(`${subject.slug.padEnd(11)} ${outline.shortLabel.padEnd(12)} 必修條目 ${required.length - missing.length}/${required.length}` +
    (outline.kind === 'curriculum' ? `（進階 * 已涵蓋 ${advancedCovered}）` : ''));
  for (const i of missing) errors.push(`${subject.slug}: 課綱條目 ${i.code}「${i.label}」沒有任何觀念涵蓋`);
}

console.log('📚 課綱／統測大綱對齊檢核');
console.log(report.map((r) => `  ${r}`).join('\n'));
console.log(`  觀念 ${totalConcepts} 個，其中延伸內容 ${extensionConcepts} 個（${((extensionConcepts / totalConcepts) * 100).toFixed(1)}%）`);
if (errors.length) {
  console.error(`❌ ${errors.length} 項未對齊\n  ${errors.slice(0, 200).join('\n  ')}`);
  process.exit(1);
}
console.log('✅ 13 科所有必修條目皆有對應觀念，所有 outlineRefs 皆可追溯到官方條目');
