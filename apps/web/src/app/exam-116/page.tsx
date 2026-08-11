import type { Metadata } from 'next';
import Link from 'next/link';
import {
  SOURCES,
  CHANGES,
  RED_LINES,
  GROUP_06_SUBJECTS,
  EXAM_SCOPE,
  TIMELINE,
  FEES,
  DECISION_STEPS
} from '@/data/exam116';

export const metadata: Metadata = {
  title: '116 統測自主選考 × 06 土木與建築群重點摘錄 | Arch',
  description:
    '116 學年度四技二專統測改為自主選考。土木與建築群考生的選考規則、資格紅線、官方考試大綱逐章重點，以及 Arch 平台的覆蓋落差揭露。'
};

const sourceById = (id: string) => SOURCES.find((s) => s.id === id);

function SourceTag({ id }: { id: string }) {
  const s = sourceById(id);
  if (!s) return null;
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-blue-300 transition-colors align-middle"
    >
      來源 {id}
    </a>
  );
}

export default function Exam116Page() {
  const allChapters = EXAM_SCOPE.flatMap((p) => p.chapters);
  const missingChapters = allChapters.filter((c) => c.coverageStatus === 'missing' || c.archTopics.length === 0);
  const partialChapters = allChapters.filter((c) => c.coverageStatus === 'partial');

  return (
    <div className="mx-auto w-full min-w-0 max-w-6xl space-y-10 px-3 py-6 sm:space-y-12 sm:px-6 sm:py-12 lg:px-8">
      {/* ── Header ─────────────────────────────── */}
      <header className="space-y-4">
        <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-bold">
          TVET 116 · Self-Selected Subjects
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 dark:text-white leading-tight">
          116 統測改「自主選考」
          <span className="block text-blue-600 dark:text-blue-400 mt-1">建築科考生重點摘錄</span>
        </h1>
        <p className="max-w-3xl text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          116 學年度起，四技二專統測不再是 5 科全考，考生可以自己決定考哪幾科。這對 06 土木與建築群的學生是
          機會，也是<strong className="text-slate-900 dark:text-white">陷阱</strong>——因為「考幾科」其實
          不是你決定的，是你的目標校系決定的。
        </p>
        <div className="flex flex-wrap gap-2 text-[11px] font-mono">
          <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1 text-emerald-700 dark:text-emerald-300">
            資料查核日 2026-08-10
          </span>
          <span className="rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 text-slate-600 dark:text-slate-300">
            全部內容附官方來源
          </span>
        </div>
      </header>

      {/* ── 一句話結論 ─────────────────────────── */}
      <section
        aria-labelledby="tldr-heading"
        className="rounded-2xl border-2 border-blue-500/40 bg-blue-50/60 dark:bg-blue-950/30 p-5 sm:p-7"
      >
        <h2 id="tldr-heading" className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
          先看這一段就好
        </h2>
        <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
          你最少可以只考 <strong>2 科</strong>（其中至少 1 科是專業科目）。但只要你目標校系採計的科目裡，
          <strong className="text-red-600 dark:text-red-400">有任何一科你沒報考，你就直接失去那個校系的資格</strong>
          ——不是分數低，是連篩選都進不去。
        </p>
        <p className="mt-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          所以正確順序是：<strong>先查校系採計哪些科目 → 再決定自己考哪幾科</strong>。查詢系統 115 年 6 月 16 日
          上午 10 時開放。在那之前，把專一、專二讀好永遠不會錯。
        </p>
      </section>

      {/* ── 資格紅線 ───────────────────────────── */}
      <section aria-labelledby="redline-heading" className="space-y-4">
        <h2 id="redline-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          ⛔ 兩條資格紅線
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          這兩條和分數無關，是「有沒有資格」的問題。減科之前必須先看懂。
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {RED_LINES.map((r) => (
            <div
              key={r.channel}
              className="rounded-2xl border border-red-300 dark:border-red-900/70 bg-red-50/70 dark:bg-red-950/25 p-5 space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-red-600 px-2.5 py-1 text-xs font-bold text-white">{r.channel}</span>
                <SourceTag id={r.sourceId} />
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{r.trigger}</p>
              <p className="text-base font-bold text-red-700 dark:text-red-400">→ {r.consequence}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 制度變革 ───────────────────────────── */}
      <section aria-labelledby="changes-heading" className="space-y-4">
        <h2 id="changes-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          新制到底改了什麼
        </h2>
        <div className="grid gap-3 sm:hidden">
          {CHANGES.map((c) => (
            <article
              key={c.id}
              className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex min-w-0 flex-wrap items-start justify-between gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
                <h3 className="min-w-0 flex-1 font-bold text-slate-900 dark:text-white">
                  {c.scope} <SourceTag id={c.sourceId} />
                </h3>
                <span className="shrink-0 rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
                  {c.effectiveFrom}
                </span>
              </div>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-bold text-slate-500 dark:text-slate-400">原制度</dt>
                  <dd className="mt-1 text-slate-500 line-through decoration-slate-400/60 dark:text-slate-400">{c.before}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold text-slate-500 dark:text-slate-400">新制度</dt>
                  <dd className="mt-1 text-slate-800 dark:text-slate-100">{c.after}</dd>
                </div>
              </dl>
              {c.principle && (
                <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-2 text-xs text-amber-800 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
                  原則：{c.principle}
                </p>
              )}
            </article>
          ))}
        </div>
        <div className="hidden overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 sm:block">
          <table className="w-full min-w-[720px] text-sm">
            <caption className="sr-only">116 及 117 學年度四技二專入學考招制度調整對照表</caption>
            <thead className="bg-slate-100 dark:bg-slate-800/80">
              <tr>
                <th scope="col" className="px-4 py-3 text-left font-bold text-slate-700 dark:text-slate-200">項目</th>
                <th scope="col" className="px-4 py-3 text-left font-bold text-slate-700 dark:text-slate-200">原制度</th>
                <th scope="col" className="px-4 py-3 text-left font-bold text-slate-700 dark:text-slate-200">新制度</th>
                <th scope="col" className="px-4 py-3 text-left font-bold text-slate-700 dark:text-slate-200">實施</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
              {CHANGES.map((c) => (
                <tr key={c.id} className="align-top">
                  <th scope="row" className="px-4 py-4 text-left font-bold text-slate-900 dark:text-white">
                    {c.scope}
                    <SourceTag id={c.sourceId} />
                  </th>
                  <td className="px-4 py-4 text-slate-500 dark:text-slate-400 line-through decoration-slate-400/60">
                    {c.before}
                  </td>
                  <td className="px-4 py-4 text-slate-800 dark:text-slate-100">
                    {c.after}
                    {c.principle && (
                      <span className="mt-2 block rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 px-2.5 py-1.5 text-xs text-amber-800 dark:text-amber-200">
                        原則：{c.principle}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
                      {c.effectiveFrom}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 06 群五科 ──────────────────────────── */}
      <section aria-labelledby="subjects-heading" className="space-y-4">
        <h2 id="subjects-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          06 土木與建築群的五科
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GROUP_06_SUBJECTS.map((s) => (
            <div
              key={s.code}
              className={`rounded-2xl border p-5 space-y-3 ${
                s.kind === 'professional'
                  ? 'border-teal-300 dark:border-teal-800 bg-teal-50/60 dark:bg-teal-950/25'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="min-w-0 flex-1 font-serif text-lg font-bold text-slate-900 dark:text-white">{s.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold ${
                    s.kind === 'professional'
                      ? 'bg-teal-600 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {s.kind === 'professional' ? '專業' : '共同'}
                </span>
              </div>
              {s.contains && (
                <p className="text-sm text-slate-600 dark:text-slate-300">{s.contains.join('　＋　')}</p>
              )}
              <div className="flex flex-wrap gap-1.5">
                {s.archSubjectSlugs.map((slug) => (
                  <Link
                    key={slug}
                    href={`/subjects/${slug}`}
                    className="rounded-lg border border-slate-200 dark:border-slate-700 px-2 py-1 text-xs text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors"
                  >
                    前往教材 →
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          數學為<strong>數學（C）</strong>，非數學（A）或（B）；讀錯版本等於白讀。
        </p>
      </section>

      {/* ── 決策步驟 ───────────────────────────── */}
      <section aria-labelledby="decide-heading" className="space-y-4">
        <h2 id="decide-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          怎麼決定自己考哪幾科
        </h2>
        <ol className="space-y-3">
          {DECISION_STEPS.map((d) => (
            <li
              key={d.step}
              className="flex min-w-0 gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:gap-4 sm:p-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-mono text-base font-bold text-white">
                {d.step}
              </span>
              <div className="min-w-0 space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white">{d.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{d.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 官方考試大綱逐章 ───────────────────── */}
      <section aria-labelledby="scope-heading" className="space-y-5">
        <div className="space-y-2">
          <h2 id="scope-heading" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            官方考試大綱逐章 · 專業科目
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
            以下是入學測驗中心公告的 06 群專業科目命題範圍，逐章列出並標示 Arch 平台的對應教材。
            標成 <span className="font-bold text-red-700 dark:text-red-400">沒有章級對應</span> 的章節目前沒有教材路由；
            <span className="font-bold text-amber-700 dark:text-amber-400">部分涵蓋</span> 代表內容散落於既有章節，仍待逐細目、例題與練習驗收。
          </p>
        </div>

        <div className="rounded-2xl border border-amber-300 dark:border-amber-900/70 bg-amber-50/70 dark:bg-amber-950/25 p-5">
          <p className="text-sm text-slate-800 dark:text-slate-100">
            <strong className="font-mono text-lg text-amber-700 dark:text-amber-400">
              {missingChapters.length} / {allChapters.length}
            </strong>{' '}
            個官方章節沒有章級對應；另有 {partialChapters.length} 章僅部分涵蓋。
            <span className="mt-2 block font-medium">
              未對應：{missingChapters.map((c) => `${c.no}、${c.title}`).join('　·　')}
            </span>
            <span className="mt-1 block font-medium">
              部分涵蓋：{partialChapters.map((c) => `${c.no}、${c.title}`).join('　·　')}
            </span>
          </p>
        </div>

        {EXAM_SCOPE.map((paper) => (
          <article key={paper.subject} className="space-y-3">
            <div className="flex flex-wrap items-baseline gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">{paper.subject}</h3>
              <span className="rounded-full bg-teal-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-teal-700 dark:text-teal-300">
                {paper.paper}
              </span>
              <span className="text-xs text-slate-500">共 {paper.chapters.length} 章</span>
              <SourceTag id={paper.sourceId} />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {paper.chapters.map((ch) => {
                const isMissing = ch.coverageStatus === 'missing' || ch.archTopics.length === 0;
                const isPartial = ch.coverageStatus === 'partial';
                return (
                  <div
                    key={`${paper.subject}-${ch.no}`}
                    className={`rounded-2xl border p-4 space-y-2.5 ${
                      isMissing
                        ? 'border-red-300 dark:border-red-900/70 bg-red-50/50 dark:bg-red-950/20'
                        : isPartial
                        ? 'border-amber-300 dark:border-amber-900/70 bg-amber-50/50 dark:bg-amber-950/20'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="min-w-0 flex-1 font-bold text-slate-900 dark:text-white">
                        <span className="font-mono text-slate-400 mr-1.5">{ch.no}</span>
                        {ch.title}
                      </h4>
                      {(isMissing || isPartial) && (
                        <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold text-white ${isMissing ? 'bg-red-600' : 'bg-amber-500'}`}>
                          {isMissing ? '沒有章級對應' : '部分涵蓋'}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      {ch.items.map((it) => (
                        <li key={it} className="flex gap-1.5">
                          <span aria-hidden="true" className="text-slate-400">
                            ·
                          </span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    {!isMissing && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {ch.archTopics.map((t) => (
                          <Link
                            key={`${t.subject}-${t.slug}`}
                            href={`/subjects/${t.subject}/${t.slug}`}
                            className="rounded-lg bg-blue-600/10 px-2 py-1 text-[11px] font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-600/20 transition-colors"
                          >
                            {t.title}
                          </Link>
                        ))}
                      </div>
                    )}
                    {ch.coverageNote ? (
                      <p className="rounded-lg bg-white/70 px-2.5 py-2 text-[11px] leading-5 text-slate-600 dark:bg-slate-900/70 dark:text-slate-300">
                        查核說明：{ch.coverageNote}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </article>
        ))}

        <p className="text-xs text-slate-500 dark:text-slate-400 rounded-xl bg-slate-100 dark:bg-slate-800/60 p-4">
          官方備註：「表列考試大綱為考試命題範圍之例示，惟實際試題並不完全以此為限，仍可命擬相關之綜合性試題。」
          「試題測驗目標參考課程綱要之學習表現內涵。」上表依 115 學年度考試大綱（114.08.12 公告）整理；
          116 學年度考試大綱公告後必須重新核對。
        </p>
      </section>

      {/* ── 時程與費用 ─────────────────────────── */}
      <section aria-labelledby="timeline-heading" className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 id="timeline-heading" className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
            重要時程
          </h2>
          <ul className="space-y-3">
            {TIMELINE.map((t) => (
              <li
                key={t.event}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-1.5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-sm font-bold text-blue-700 dark:text-blue-300">{t.date}</span>
                  {t.status === 'tentative' && (
                    <span className="rounded-full bg-slate-200 dark:bg-slate-700 px-2 py-0.5 text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      暫定
                    </span>
                  )}
                  <SourceTag id={t.sourceId} />
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-200">{t.event}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">報名費用結構</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-sm">
              <caption className="sr-only">統測自主選考報名費用項目</caption>
              <thead className="bg-slate-100 dark:bg-slate-800/80">
                <tr>
                  <th scope="col" className="px-4 py-2.5 text-left font-bold text-slate-700 dark:text-slate-200">
                    項目
                  </th>
                  <th scope="col" className="px-4 py-2.5 text-right font-bold text-slate-700 dark:text-slate-200">
                    金額
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {FEES.map((f) => (
                  <tr key={f.item}>
                    <th scope="row" className="px-4 py-2.5 text-left font-normal text-slate-700 dark:text-slate-200">
                      {f.item}
                    </th>
                    <td className="px-4 py-2.5 text-right font-mono text-slate-900 dark:text-white">{f.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            費用 = 基本作業費 + 各選考科目測驗費。實際金額以當年度簡章與官方試算系統為準。
            <SourceTag id="S2" />
          </p>
        </div>
      </section>

      {/* ── 來源 ───────────────────────────────── */}
      <section aria-labelledby="sources-heading" className="space-y-4">
        <h2 id="sources-heading" className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
          官方來源
        </h2>
        <ul className="space-y-2">
          {SOURCES.map((s) => (
            <li
              key={s.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="rounded bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300">
                  {s.id}
                </span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 dark:text-blue-300 hover:underline"
                >
                  {s.label}
                </a>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {s.publisher}
                {s.note ? `｜${s.note}` : ''}｜查核日 {s.checkedAt}
              </p>
              {s.documentSha256 ? (
                <p className="mt-1 break-all font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  PDF SHA-256：{s.documentSha256}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
        <p className="text-xs text-slate-500 dark:text-slate-400 rounded-xl bg-slate-100 dark:bg-slate-800/60 p-4 leading-relaxed">
          本頁為整理與摘錄，不是官方公告。報名資格、採計科目、日期與費用一律以技專校院入學測驗中心與各校系
          當年度正式公告為準。若你發現本頁與官方公告不符，請以官方為準並回報我們更正。
        </p>
      </section>
    </div>
  );
}
