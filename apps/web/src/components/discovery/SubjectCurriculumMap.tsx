import Link from 'next/link';
import { ScrollText } from 'lucide-react';
import type { SubjectData } from '@/data/types';
import { OFFICIAL_OUTLINES } from '@/data/curriculum/officialOutlines';

/** 科目頁的課綱地圖：每個官方單元由哪些主題涵蓋、條目涵蓋率多少（伺服器元件，不需前端 JS） */
export default function SubjectCurriculumMap({ subject }: { subject: SubjectData }) {
  const outline = OFFICIAL_OUTLINES[subject.slug];
  if (!outline) return null;

  const coverage = new Map<string, Set<string>>();
  for (const topic of subject.topics) {
    for (const concept of topic.concepts) {
      for (const code of concept.outlineRefs ?? []) {
        const set = coverage.get(code) ?? new Set<string>();
        set.add(topic.slug);
        coverage.set(code, set);
      }
    }
  }
  const topicTitle = new Map(subject.topics.map((t) => [t.slug, t.title.replace(/^[\d.A-Z]+\s*/, '')]));

  const rows = outline.units.map((unit) => {
    const covered = unit.items.filter((item) => coverage.has(item.code));
    const topics = new Set(unit.items.flatMap((item) => [...(coverage.get(item.code) ?? [])]));
    return { unit, covered: covered.length, total: unit.items.length, topics: [...topics] };
  });
  const totalItems = rows.reduce((n, r) => n + r.total, 0);
  const coveredItems = rows.reduce((n, r) => n + r.covered, 0);

  return (
    <section className="rounded-3xl border border-emerald-200 bg-emerald-50/30 p-5 shadow-xs dark:border-emerald-900/60 dark:bg-emerald-950/10 sm:p-7" aria-labelledby="subject-curriculum-map">
      <div className="flex flex-col gap-2 border-b border-emerald-200/70 pb-4 dark:border-emerald-900/50 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
            <ScrollText className="size-5" aria-hidden="true" />
          </div>
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">{outline.shortLabel}</span>
            <h2 id="subject-curriculum-map" className="font-serif text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">課綱地圖：每個單元在哪裡學</h2>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{outline.examName}</p>
          </div>
        </div>
        <p className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300">
          官方條目涵蓋 {coveredItems} / {totalItems}
        </p>
      </div>
      <ul className="mt-4 grid gap-2.5 lg:grid-cols-2">
        {rows.map(({ unit, covered, total, topics }) => (
          <li key={unit.code} className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                <span className="font-mono text-emerald-700 dark:text-emerald-300">{unit.code}</span>　{unit.title}
              </p>
              <span className="shrink-0 font-mono text-[11px] text-slate-500 dark:text-slate-400">{covered} / {total}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800" role="img" aria-label={`${unit.title}：條目涵蓋 ${covered} / ${total}`}>
              <div className="h-full rounded-full bg-emerald-500 dark:bg-emerald-400" style={{ width: `${Math.round((covered / total) * 100)}%` }} />
            </div>
            {topics.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {topics.map((slug) => (
                  <Link
                    key={slug}
                    href={`/subjects/${subject.slug}/${slug}`}
                    className="rounded-md border border-slate-200 px-2 py-0.5 text-[11px] text-slate-700 transition-colors hover:border-emerald-400 hover:bg-emerald-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-emerald-950/40"
                  >
                    {topicTitle.get(slug)}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">本群科選修項目（未列入本站主修）</p>
            )}
          </li>
        ))}
      </ul>
      {outline.notes.length ? (
        <p className="mt-3 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">{outline.notes[outline.notes.length - 1]}</p>
      ) : null}
    </section>
  );
}
