'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { SubjectData, TopicContent } from '@/data/types';

interface TopicPageLayoutProps {
  subject: SubjectData;
  topic: TopicContent;
}

export default function TopicPageLayout({ subject, topic }: TopicPageLayoutProps) {
  const currentIndex = subject.topics.findIndex((item) => item.slug === topic.slug);
  const prevTopic = currentIndex > 0 ? subject.topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < subject.topics.length - 1 ? subject.topics[currentIndex + 1] : null;
  const visualConcept = topic.concepts.find((concept) => concept.formula) ?? topic.concepts[0];
  const visualSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/${subject.slug}/${topic.slug}.webp`;
  const practices = topic.practices?.length ? topic.practices : topic.practice ? [topic.practice] : [];
  const isExamSubject = ['mechanics', 'materials', 'surveying', 'drafting'].includes(subject.slug);

  return (
    <article className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
      <header className="space-y-5">
        <nav className="mobile-scroll flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 text-xs font-mono" aria-label="麵包屑導覽">
          <Link href="/curriculum" className="hover:underline">課程地圖</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/subjects/${subject.slug}`} className="hover:underline">{subject.title}</Link>
          <span aria-hidden="true">/</span>
          <span>第 {currentIndex + 1} 章</span>
        </nav>
        <div>
          <p className="mb-2 text-xs font-mono uppercase tracking-[0.18em]" style={{ color: `var(--color-${subject.color})` }}>
            從生活直覺開始，再走到統測解題
          </p>
          <h1 className="font-serif text-3xl font-bold leading-tight text-(--color-ink-900) sm:text-4xl">{topic.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-(--color-ink-650)">{topic.desc}</p>
        </div>
        <aside className="grid gap-3 rounded-xl border border-(--color-concrete-300) bg-(--color-paper-50) p-5 sm:grid-cols-3" aria-label="本章學習指引">
          <div><strong className="block text-sm text-(--color-ink-900)">先看懂</strong><span className="text-sm leading-6 text-(--color-ink-650)">{visualConcept.heading}</span></div>
          <div><strong className="block text-sm text-(--color-ink-900)">再做得到</strong><span className="text-sm leading-6 text-(--color-ink-650)">用自己的話說明觀念，並照步驟完成一題。</span></div>
          <div><strong className="block text-sm text-(--color-ink-900)">最後會檢查</strong><span className="text-sm leading-6 text-(--color-ink-650)">核對單位、正負號與答案是否符合常識。</span></div>
        </aside>
      </header>

      <figure className="overflow-hidden rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) shadow-sm">
        <div className="relative aspect-[4/3] bg-(--color-paper-50) sm:aspect-[16/9]">
          <Image src={visualSrc} alt={`${topic.title}：${visualConcept.heading}概念圖`} className="h-full w-full object-contain" width={960} height={720} priority />
        </div>
        <figcaption className="border-t border-(--color-concrete-300) px-5 py-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-(--color-teal-700)">先觀察，再閱讀</span>
          <p className="mt-1 text-sm font-bold text-(--color-ink-900)">{visualConcept.heading}</p>
          <p className="mt-1 text-xs leading-6 text-(--color-ink-650)">先指出圖中的已知條件與變化方向，再對照下方文字；不用急著背公式。</p>
        </figcaption>
      </figure>

      {topic.concepts.map((concept, index) => (
        <section key={concept.heading} className="space-y-5 rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5 sm:p-8">
          <div className="flex items-start gap-3">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-(--color-paper-50)" style={{ backgroundColor: `var(--color-${subject.color})` }}>{index + 1}</span>
            <div><p className="text-xs text-(--color-ink-650)">核心觀念</p><h2 className="font-serif text-xl font-bold text-(--color-ink-900)">{concept.heading}</h2></div>
          </div>
          <p className="whitespace-pre-line text-[15px] leading-8 text-(--color-ink-650)">{concept.body}</p>
          {concept.steps?.length ? (
            <ol className="space-y-3 rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) p-4">
              {concept.steps.map((step, stepIndex) => <li key={step} className="flex gap-3 text-sm leading-7 text-(--color-ink-900)"><span className="font-mono font-bold" style={{ color: `var(--color-${subject.color})` }}>{stepIndex + 1}.</span><span>{step}</span></li>)}
            </ol>
          ) : null}
          {concept.formula ? (
            <div className="space-y-4 rounded-r-lg border-l-4 bg-(--color-paper-50) p-5" style={{ borderColor: `var(--color-${subject.color})` }} role="note" aria-label="公式與使用提醒">
              <p className="text-xs font-bold uppercase tracking-widest text-(--color-ink-650)">公式怎麼用</p>
              <div className="mobile-scroll overflow-x-auto whitespace-pre-line font-mono text-base leading-8 text-(--color-ink-900) sm:text-lg">{concept.formula}</div>
              <p className="text-sm leading-7 text-(--color-ink-650)"><strong>解題順序：</strong>先寫已知與未知 → 統一單位 → 選公式 → 代入數值 → 檢查正負號、單位與合理性。符號代表什麼，以本節文字與圖示為準。</p>
            </div>
          ) : null}
          {concept.table ? (
            <div className="mobile-scroll overflow-x-auto" tabIndex={0} role="region" aria-label={`${concept.heading}整理表`}>
              <table className="min-w-[40rem] border-collapse text-left text-sm">
                <thead><tr>{concept.table.headers.map((header) => <th key={header} className="border border-(--color-concrete-300) bg-(--color-paper-50) px-4 py-3 text-(--color-ink-900)">{header}</th>)}</tr></thead>
                <tbody>{concept.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex} className="whitespace-pre-line border border-(--color-concrete-300) px-4 py-3 leading-6 text-(--color-ink-650)">{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
          ) : null}
        </section>
      ))}

      <section className="space-y-5" aria-labelledby="practice-title">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div><p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">Try it</p><h2 id="practice-title" className="font-serif text-2xl font-bold text-(--color-ink-900)">跟著做，再自己做</h2></div>
          {isExamSubject ? <Link href={`/exams#${subject.slug}`} className="text-sm font-bold text-(--color-teal-700) hover:underline">查看近五年統測對應題庫 →</Link> : null}
        </div>
        {practices.length ? practices.map((practice, index) => (
          <details key={index} className="group rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5 sm:p-7">
            <summary className="cursor-pointer list-none font-bold leading-7 text-(--color-ink-900)"><span className="mr-2 rounded bg-(--color-teal-700) px-2 py-1 text-xs text-(--color-paper-50)">練習 {index + 1}</span>{practice.question}<span className="ml-2 text-xs font-normal text-(--color-ink-650)">（點開看解析）</span></summary>
            <div className="mt-5 space-y-4 border-t border-(--color-concrete-300) pt-5">
              <p className="text-xs font-mono text-(--color-ink-650)">難度：{practice.difficulty}</p>
              <ol className="space-y-2 pl-5 text-sm leading-7 text-(--color-ink-650)">{practice.steps.map((step) => <li key={step} className="list-decimal">{step}</li>)}</ol>
              <p className="rounded-lg bg-(--color-paper-50) p-4 text-sm text-(--color-ink-900)"><strong>答案：</strong>{practice.answer}</p>
            </div>
          </details>
        )) : <div className="rounded-xl border border-dashed border-(--color-concrete-300) bg-(--color-paper-50) p-5 text-sm leading-7 text-(--color-ink-650)">本章先完成「用自己的話說明」與「找出圖中已知條件」兩項口頭練習；可接著到題庫專區選擇相同主題的歷屆題目。</div>}
      </section>

      <nav className="grid gap-3 border-t border-(--color-concrete-300) pt-8 text-sm sm:grid-cols-3" aria-label="章節導覽">
        {prevTopic ? <Link href={`/subjects/${subject.slug}/${prevTopic.slug}`} className="rounded-lg border border-(--color-concrete-300) p-4 hover:border-(--color-teal-700)">← 上一章<br /><strong>{prevTopic.title}</strong></Link> : <div />}
        <Link href={`/subjects/${subject.slug}`} className="rounded-lg border border-(--color-concrete-300) p-4 text-center hover:border-(--color-teal-700)">回到<br /><strong>{subject.title}</strong></Link>
        {nextTopic ? <Link href={`/subjects/${subject.slug}/${nextTopic.slug}`} className="rounded-lg border border-(--color-concrete-300) p-4 text-right hover:border-(--color-teal-700)">下一章 →<br /><strong>{nextTopic.title}</strong></Link> : <div />}
      </nav>
    </article>
  );
}
