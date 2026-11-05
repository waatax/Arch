import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { loadTsModule } from './lib/load-ts-module.mjs';

const { studioLessons: lessons, CONTENT_BASELINE, SUBJECT_LABELS, EXAM_SUBJECTS } = await loadTsModule('apps/web/src/data/studyStudio/index.ts');
const { allSubjects } = await loadTsModule('apps/web/src/data/subjects.ts');
const { recordAnswer, buildPlan, validDay } = await loadTsModule('apps/web/src/lib/studyStudio/engine.ts');
const baseline = allSubjects.reduce((sum, s) => sum + s.topics.length, 0);
assert.equal(baseline, CONTENT_BASELINE.topicUnits, 'Baseline must match the real topic catalog');
assert.ok(lessons.length / baseline >= 0.2, 'At least 20% additional standalone teaching units');
assert.equal(new Set(lessons.map((l) => l.slug)).size, lessons.length);
assert.equal(new Set(lessons.map((l) => l.subject)).size, 13);
assert.equal(lessons.filter((l) => EXAM_SUBJECTS.includes(l.subject)).length, 24);
const stems = new Set();
const answers = [0, 0, 0, 0];
for (const lesson of lessons) {
  assert.match(lesson.slug, /^[a-z0-9-]+$/);
  assert.ok(SUBJECT_LABELS[lesson.subject]);
  assert.ok(lesson.outline.length >= 8);
  assert.equal(lesson.concepts.length, 3);
  assert.ok(lesson.concepts.every(([title, text]) => title.length >= 4 && text.length >= 35), lesson.slug);
  assert.ok(lesson.example.question.length >= 15, lesson.slug);
  assert.equal(lesson.example.steps.length, 3);
  assert.ok(lesson.example.answer.length >= 10, lesson.slug);
  assert.equal(lesson.comparison.length, 3);
  assert.equal(lesson.questions.length, 2);
  for (const q of lesson.questions) {
    assert.ok(!stems.has(q.stem), `Duplicate stem: ${q.stem}`); stems.add(q.stem);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4);
    assert.ok(q.explanation.length >= 20, lesson.slug);
    answers[q.answer]++;
  }
}
assert.ok(answers.every((n) => n >= 10), 'Answer positions should not be predictable');

// Independent arithmetic checks against the authored correct option, not a snapshot of the implementation.
const numericChecks = [
  ['beam-check', 0, 12 * 2 / 6], ['beam-check', 1, 12 / 2],
  ['friction-limit', 0, 30], ['stress-units', 0, 20 * 1000 / 100], ['stress-units', 1, 100 / 200000],
  ['section-orientation', 0, 2 ** 3], ['water-cement', 0, 180 / 360], ['water-cement', 1, 160 - 15],
  ['concrete-test', 1, 300 * 1000 / 10000], ['wood-moisture', 0, (150 - 120) / 120 * 100],
  ['steel-ductility', 0, (118 - 100) / 100 * 100], ['level-book', 0, 20 + 1.8 - 2.3],
  ['level-adjustment', 0, -(-8)], ['level-adjustment', 1, -2 - 4], ['azimuth-coordinate', 0, -20],
  ['slope-distance', 0, 0], ['slope-distance', 1, 1.5 + 10 - 2.5], ['scale-dimensions', 0, 6 * 100 / 100],
  ['section-reading', 0, 7.2 - 3.6], ['trig-roof', 0, 1 / 5 * 100], ['vector-dot', 0, 3 * 2 + 2 * -1],
  ['function-cost', 0, 60], ['physics-work', 0, 0], ['physics-work', 1, 200 / 4], ['geography-site', 1, 5 / 50 * 100],
];
for (const [slug, index, expected] of numericChecks) {
  const q = lessons.find((l) => l.slug === slug).questions[index];
  const actual = Number(q.options[q.answer].replace('−', '-').match(/[+-]?\d*\.?\d+/)?.[0]);
  assert.ok(Math.abs(actual - expected) < 1e-9, `${slug}: expected ${expected}, got ${actual}`);
}
assert.equal(60_000 / 300, 200); // axial stress worked example, MPa
assert.ok(Math.abs(235620 / (3.1416 * 100 ** 2 / 4) - 30) < 1e-9);
assert.equal((20 * 60 ** 3) / (60 * 20 ** 3), 9);
assert.ok(Math.abs(1.5 + 50 * Math.sin(Math.PI / 6) - 2 - 24.5) < 1e-9);

let record = recordAnswer(undefined, false, '2026-11-05');
assert.equal(record.due, '2026-11-05'); assert.equal(record.earned, false);
record = recordAnswer(record, true, '2026-11-05');
assert.equal(record.due, '2026-11-06'); assert.equal(record.earned, true);
record = recordAnswer(record, true, '2026-11-05');
assert.equal(record.streak, 1); assert.equal(record.due, '2026-11-06');
record = recordAnswer(record, true, '2026-11-06');
assert.equal(record.streak, 2); assert.equal(record.due, '2026-11-09');
record = recordAnswer(record, true, '2026-11-09');
assert.equal(record.due, '2026-11-16');
record = recordAnswer(record, true, '2026-11-16');
assert.equal(record.due, '2026-11-30');
record = recordAnswer(record, false, '2026-11-30');
assert.equal(record.streak, 0); assert.equal(record.earned, true); assert.equal(record.due, '2026-11-30');
assert.equal(validDay('2026-02-30'), false); assert.equal(validDay('bad'), false); assert.equal(validDay('2028-02-29'), true);
const sample = lessons.slice(0, 5).map((l) => ({ id: l.slug, title: l.title, subject: l.subject, href: `/study-studio/${l.slug}` }));
const plan = buildPlan(sample, '2026-11-07', 20, '2026-11-05');
assert.equal(plan.capacity, 2); assert.equal(plan.days, 2); assert.equal(plan.overflow, 1);
assert.deepEqual(plan.rows.map((r) => r.day), ['2026-11-05', '2026-11-05', '2026-11-06', '2026-11-06', '2026-11-07']);
assert.equal(buildPlan(sample, '2026-11-05', 10, '2026-11-05').overflow, 5);
assert.equal(buildPlan([], '2026-12-01', 20, '2026-11-05').rows.length, 0);

if (process.argv.includes('--built')) {
  const output = path.resolve('apps/web/out');
  const files = ['study-studio', ...lessons.map((l) => `study-studio/${l.slug}`)];
  for (const route of files) {
    const html = fs.readFileSync(path.join(output, route, 'index.html'), 'utf8');
    assert.ok(html.includes('考前建築所'), `Missing static page: ${route}`);
    if (process.env.GITHUB_ACTIONS) {
      assert.ok(html.includes('/Arch/_next/'), 'GitHub Pages basePath must be included');
      for (const [, target] of html.matchAll(/href="(\/Arch\/[^"?#]*)/g)) {
        if (target.includes('/_next/') || /\.[a-z0-9]+$/i.test(target)) continue;
        const local = target.slice('/Arch/'.length);
        assert.ok(fs.existsSync(path.join(output, local, 'index.html')), `Broken internal route: ${target}`);
      }
    } else {
      assert.ok(html.includes('/_next/'), 'Next.js build assets must be included');
    }
  }
}
console.log(`考前建築所通過：${baseline} 原有主題 + ${lessons.length} 短課（+${lessons.length / baseline * 100}% 單元）、90 段觀念、30 個圖解例題、60 題；25 組計算交叉核對、複習排程與容量邊界驗證${process.argv.includes('--built') ? '、31 頁靜態路徑與 /Arch 基底驗證' : ''}。`);
