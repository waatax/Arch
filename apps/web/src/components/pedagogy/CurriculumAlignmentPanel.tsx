'use client';

import { useMemo, useState } from 'react';
import { BadgeCheck, BookMarked, ChevronDown, ChevronUp, ExternalLink, ScrollText, Telescope, Compass, Target, CheckCircle2 } from 'lucide-react';
import type { SubjectData, TopicContent } from '@/data/types';
import { OFFICIAL_OUTLINES, SUBJECT_108_COMPETENCIES, type OfficialOutline, type OutlineItem, type OutlineUnit } from '@/data/curriculum/officialOutlines';

const KIND_LABEL: Record<OfficialOutline['kind'], string> = {
  exam: '統測考試大綱',
  curriculum: '108 課綱學習內容',
  group: '群科課綱科目對照',
};

function itemIndex(outline: OfficialOutline): Map<string, { unit: OutlineUnit; item: OutlineItem }> {
  const map = new Map<string, { unit: OutlineUnit; item: OutlineItem }>();
  for (const unit of outline.units) for (const item of unit.items) map.set(item.code, { unit, item });
  return map;
}

/** 觀念標題下的課綱代碼徽章；outlineRefs 為空陣列時顯示「延伸」 */
export function ConceptOutlineChips({ subjectSlug, refs }: { subjectSlug: string; refs?: string[] }) {
  const outline = OFFICIAL_OUTLINES[subjectSlug];
  const index = useMemo(() => (outline ? itemIndex(outline) : null), [outline]);
  if (!outline || !index || !refs) return null;
  if (refs.length === 0) {
    return (
      <div className="flex flex-wrap items-center gap-1.5">
        <span
          className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-slate-50 px-2 py-0.5 text-[11px] font-bold text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
          title="本觀念為課綱外的情境應用或工程延伸，可依興趣與時間選讀"
        >
          <Telescope className="size-3" aria-hidden="true" />
          延伸補充（課綱外）
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap items-center gap-1.5" aria-label={`${outline.shortLabel}對應條目`}>
      {refs.map((code) => {
        const hit = index.get(code);
        const label = hit?.item.label.replace(/^[^：]+：/, '') ?? '';
        return (
          <span
            key={code}
            className="inline-flex max-w-full items-center gap-1 rounded-md border border-emerald-300/80 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200"
            title={`${outline.shortLabel}｜${hit ? `${hit.unit.no}、${hit.unit.title}｜` : ''}${hit?.item.label ?? code}`}
          >
            <BookMarked className="size-3 shrink-0" aria-hidden="true" />
            <span className="font-mono font-bold">{code}</span>
            <span className="truncate max-w-[16rem]">{label}</span>
            {hit?.item.advanced ? <span className="rounded bg-amber-100 px-1 text-[10px] font-bold text-amber-800 dark:bg-amber-900/60 dark:text-amber-200">進階</span> : null}
          </span>
        );
      })}
    </div>
  );
}

/** 主題頁上方的課綱對照面板：列出本主題涵蓋的官方單元與條目，並可跳到對應觀念 */
export default function CurriculumAlignmentPanel({ subject, topic }: { subject: SubjectData; topic: TopicContent }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'outlines' | 'competencies'>('outlines');
  const outline = OFFICIAL_OUTLINES[subject.slug];
  const competency = SUBJECT_108_COMPETENCIES[subject.slug];
  const data = useMemo(() => {
    if (!outline) return null;
    const index = itemIndex(outline);
    const byUnit = new Map<string, { unit: OutlineUnit; items: Map<string, { item: OutlineItem; concepts: number[] }> }>();
    let extensions = 0;
    topic.concepts.forEach((concept, ci) => {
      const refs = concept.outlineRefs ?? [];
      if (concept.outlineRefs && refs.length === 0) extensions++;
      for (const code of refs) {
        const hit = index.get(code);
        if (!hit) continue;
        const group = byUnit.get(hit.unit.code) ?? { unit: hit.unit, items: new Map() };
        const entry = group.items.get(code) ?? { item: hit.item, concepts: [] };
        entry.concepts.push(ci);
        group.items.set(code, entry);
        byUnit.set(hit.unit.code, group);
      }
    });
    const units = outline.units.filter((u) => byUnit.has(u.code)).map((u) => byUnit.get(u.code)!);
    const itemTotal = units.reduce((n, g) => n + g.items.size, 0);
    return { units, extensions, itemTotal };
  }, [outline, topic]);

  if (!outline || !data) return null;

  const jumpTo = (index: number) => {
    document.getElementById(`concept-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 p-4 shadow-xs dark:border-emerald-900/60 dark:from-emerald-950/20 dark:via-slate-900 dark:to-teal-950/20 sm:p-5"
      aria-labelledby="curriculum-alignment-title"
    >
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-2.5">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
            <ScrollText className="size-5" aria-hidden="true" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded bg-emerald-100 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                {outline.shortLabel}
              </span>
              <span className="text-[11px] text-slate-600 dark:text-slate-400">{KIND_LABEL[outline.kind]}</span>
              {competency && (
                <span className="rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 px-2 py-0.2 text-[10px] font-mono text-blue-700 dark:text-blue-300">
                  108 核心素養 A/B/C 對齊
                </span>
              )}
            </div>
            <h2 id="curriculum-alignment-title" className="mt-0.5 font-serif text-sm font-bold text-slate-900 dark:text-white sm:text-base">
              課綱對照：本主題涵蓋 {data.units.length} 個單元、{data.itemTotal} 個官方條目
              {data.extensions > 0 ? `，另有 ${data.extensions} 個延伸觀念` : ''}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {open && competency && (
            <div className="flex rounded-lg bg-slate-100 p-0.5 text-xs font-bold dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('outlines')}
                className={`rounded-md px-2.5 py-1 transition-colors cursor-pointer ${
                  activeTab === 'outlines'
                    ? 'bg-white text-emerald-800 shadow-2xs dark:bg-slate-700 dark:text-emerald-200'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
                }`}
              >
                官方條目
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('competencies')}
                className={`rounded-md px-2.5 py-1 transition-colors cursor-pointer ${
                  activeTab === 'competencies'
                    ? 'bg-white text-blue-800 shadow-2xs dark:bg-slate-700 dark:text-blue-200'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
                }`}
              >
                108 核心素養
              </button>
            </div>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer"
          >
            {open ? '收合面板' : '展開課綱條目與素養對照'}
            {open ? <ChevronUp className="size-3.5" aria-hidden="true" /> : <ChevronDown className="size-3.5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* 單元涵蓋條：每個單元顯示本主題涵蓋的條目數 / 該單元條目總數 */}
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {data.units.map(({ unit, items }) => {
          const ratio = Math.round((items.size / unit.items.length) * 100);
          return (
            <div key={unit.code} className="rounded-xl border border-slate-200/80 bg-white/80 px-3 py-2 dark:border-slate-800 dark:bg-slate-950/50">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-100">
                  <span className="font-mono text-emerald-700 dark:text-emerald-300">{unit.code}</span>　{unit.title}
                </span>
                <span className="shrink-0 font-mono text-[11px] text-slate-500 dark:text-slate-400">{items.size} / {unit.items.length}</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800" role="img" aria-label={`${unit.title}：本主題涵蓋 ${items.size} / ${unit.items.length} 條目`}>
                <div className="h-full rounded-full bg-emerald-500 dark:bg-emerald-400" style={{ width: `${ratio}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      {open ? (
        activeTab === 'outlines' ? (
          <div className="mt-3 space-y-3">
            {data.units.map(({ unit, items }) => (
              <div key={unit.code} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-xs font-bold text-slate-900 dark:text-white">{unit.no}、{unit.title}</p>
                <ul className="mt-2 space-y-1.5">
                  {[...items.values()].map(({ item, concepts }) => (
                    <li key={item.code} className="flex flex-wrap items-start gap-x-2 gap-y-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      <BadgeCheck className="mt-0.5 size-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <span className="font-mono font-bold text-emerald-800 dark:text-emerald-300">{item.code}</span>
                      <span className="min-w-0 flex-1">{item.label}{item.advanced ? '（進階）' : ''}</span>
                      <span className="flex flex-wrap gap-1">
                        {concepts.map((ci) => (
                          <button
                            key={ci}
                            type="button"
                            onClick={() => jumpTo(ci)}
                            className="rounded border border-slate-300 px-1.5 text-[10px] font-bold text-slate-600 hover:bg-emerald-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-emerald-950/40 cursor-pointer"
                          >
                            觀念 {ci + 1}
                          </button>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="flex flex-wrap items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
              資料來源：
              {outline.sources.map((src) => (
                <a key={src.url} href={src.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 underline-offset-2 hover:underline">
                  {src.label}
                  <ExternalLink className="size-3" aria-hidden="true" />
                </a>
              ))}
            </p>
            {outline.notes.length ? (
              <ul className="list-disc space-y-0.5 pl-5 text-[11px] text-slate-500 dark:text-slate-400">
                {outline.notes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            ) : null}
          </div>
        ) : competency ? (
          <div className="mt-3 space-y-3.5">
            <div className="rounded-xl border border-blue-200/80 bg-blue-50/40 p-3.5 dark:border-blue-900/60 dark:bg-blue-950/20">
              <div className="flex items-center gap-2">
                <Compass className="size-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <h3 className="font-serif text-xs font-bold text-blue-900 dark:text-blue-200">
                  {competency.subjectTitle}｜108 課綱探究定位：{competency.inquiryRole}
                </h3>
              </div>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                {competency.aspects.map((asp) => (
                  <div key={asp.code} className="rounded-lg bg-white p-2.5 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                    <span className="rounded bg-blue-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-blue-800 dark:bg-blue-900/60 dark:text-blue-200">
                      面向 {asp.code} · {asp.title}
                    </span>
                    <ul className="mt-2 space-y-1.5 text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                      {asp.items.map((it) => (
                        <li key={it.code}>
                          <strong className="font-mono text-blue-700 dark:text-blue-300">{it.code} {it.label}</strong>：{it.application}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-200/80 bg-white p-3.5 dark:border-emerald-900/60 dark:bg-slate-900">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 className="size-4" aria-hidden="true" />
                  <h4>108 課綱學習表現能力標準</h4>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {competency.learningPerformances.map((perf, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="font-mono text-emerald-600 font-bold shrink-0">{i + 1}.</span>
                      <span>{perf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-amber-200/80 bg-white p-3.5 dark:border-amber-900/60 dark:bg-slate-900">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
                  <Target className="size-4" aria-hidden="true" />
                  <h4>統測素養導向命題焦點</h4>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {competency.evaluationFocus.map((foc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="font-mono text-amber-600 font-bold shrink-0">🎯</span>
                      <span>{foc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null
      ) : null}
    </section>
  );
}
