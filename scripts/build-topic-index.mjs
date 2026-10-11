// Regenerates apps/web/src/data/topicSearchIndex.ts from the normalized subject data
// (allSubjects) and the knowledge framework, so search, home cards and "continue
// learning" always show the same clean titles and chapter order as the lesson pages.
//   node scripts/build-topic-index.mjs          → write the file
//   node scripts/build-topic-index.mjs --check  → exit 1 if the file is stale
import fs from 'node:fs';
import path from 'node:path';
import { loadTsModule, repoRoot } from './lib/load-ts-module.mjs';

const { allSubjects } = await loadTsModule('apps/web/src/data/subjects.ts');
const { getTopicPlacement } = await loadTsModule('apps/web/src/data/knowledgeFramework.ts');

const items = allSubjects.flatMap((subject) =>
  subject.topics.map((topic) => {
    const placement = getTopicPlacement(subject.slug, topic.slug);
    return {
      subjectSlug: subject.slug,
      subjectTitle: subject.title,
      topicSlug: topic.slug,
      topicTitle: topic.title,
      chapter: placement?.chapter ?? 0,
      unitTitle: placement?.unit.title ?? '',
      desc: topic.desc.replace(/\s+/g, ' ').slice(0, 140),
    };
  }),
);

const output = `// ⚠️ 由 scripts/build-topic-index.mjs 自動產生，請勿手動修改。
// 內容取自 data/subjects.ts（已依知識框架排序並清理標題）。
export interface TopicSearchItem {
  subjectSlug: string;
  subjectTitle: string;
  topicSlug: string;
  topicTitle: string;
  /** 依知識框架推導的章節序號（1 起算） */
  chapter: number;
  unitTitle: string;
  desc: string;
}

// Deliberately metadata-only: importing this in the global Navbar must never pull
// concepts, worked examples, practices or exam content into every page bundle.
export const topicSearchIndex: TopicSearchItem[] = ${JSON.stringify(items, null, 2)};
`;

const target = path.join(repoRoot, 'apps/web/src/data/topicSearchIndex.ts');
if (process.argv.includes('--check')) {
  const current = fs.existsSync(target) ? fs.readFileSync(target, 'utf8').replace(/\r\n/g, '\n') : '';
  if (current !== output) {
    console.error('✗ topicSearchIndex.ts is out of date. Run: node scripts/build-topic-index.mjs');
    process.exit(1);
  }
  console.log(`✓ topicSearchIndex.ts is up to date (${items.length} topics)`);
} else {
  fs.writeFileSync(target, output);
  console.log(`Wrote ${items.length} topics to ${path.relative(repoRoot, target)}`);
}
