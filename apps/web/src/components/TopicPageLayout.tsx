'use client';
import Link from 'next/link';
import Image from 'next/image';
import { SubjectData, TopicContent } from '@/data/types';

interface TopicPageLayoutProps {
  subject: SubjectData;
  topic: TopicContent;
}

export default function TopicPageLayout({ subject, topic }: TopicPageLayoutProps) {
  const currentIndex = subject.topics.findIndex(t => t.slug === topic.slug);
  const prevTopic = currentIndex > 0 ? subject.topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < subject.topics.length - 1 ? subject.topics[currentIndex + 1] : null;
  const visualConcept = topic.concepts.find((concept) => concept.formula) ?? topic.concepts[0];
  const visualSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/${subject.slug}/${topic.slug}.webp`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-7 sm:space-y-10">
      {/* Header */}
      <div>
        <div className="mobile-scroll flex items-center gap-2 overflow-x-auto pb-2 text-xs font-mono mb-1 whitespace-nowrap" style={{ color: `var(--color-${subject.color})` }} aria-label="目前位置">
          <Link href="/curriculum" className="hover:underline">課程總覽</Link>
          <span>/</span>
          <Link href={`/subjects/${subject.slug}`} className="hover:underline">{subject.title}</Link>
          <span>/</span>
          <span>章節 {String(currentIndex + 1).padStart(2, '0')}</span>
        </div>
        <h1 className="text-[1.75rem] leading-tight sm:text-4xl font-bold font-serif text-(--color-ink-900) mb-4">
          {topic.title}
        </h1>
        <p className="text-base text-(--color-ink-650) leading-relaxed">
          {topic.desc}
        </p>
      </div>

      {/* OpenAI-generated concept visual */}
      <figure className="overflow-hidden rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) shadow-sm">
        <div className="relative aspect-square min-[420px]:aspect-[4/3] sm:aspect-[16/9] bg-(--color-paper-50)">
          <Image
            src={visualSrc}
            alt={`${topic.title}：${visualConcept.heading}的教學圖解`}
            className="h-full w-full object-contain"
            width={960}
            height={720}
            priority
          />
        </div>
        <figcaption className="border-t border-(--color-concrete-300) px-5 py-4 sm:flex sm:items-start sm:justify-between sm:gap-6">
          <div>
            <span className="mb-1 block text-[11px] font-mono uppercase tracking-widest text-(--color-teal-700)">
              Visual Concept · OpenAI generated
            </span>
            <p className="text-sm font-bold text-(--color-ink-900)">{visualConcept.heading}</p>
            <p className="mt-1 text-xs leading-relaxed text-(--color-ink-650)">
              先觀察圖中的方向、比例與因果關係，再回到下方概念逐步驗證。
            </p>
          </div>
          {visualConcept.formula && (
            <div className="mt-3 shrink-0 rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-4 py-3 font-mono text-sm text-(--color-ink-900) sm:mt-0 sm:max-w-[48%]">
              {visualConcept.formula.split('\n').slice(0, 3).map((line, index) => (
                <div key={index} className="whitespace-normal">{line}</div>
              ))}
            </div>
          )}
        </figcaption>
      </figure>

      {/* Concept Cards */}
      {topic.concepts.map((concept, index) => (
        <section key={index} className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold font-serif text-(--color-ink-900)">
            {index + 1}. {concept.heading}
          </h2>
          <p className="text-sm text-(--color-ink-650) leading-relaxed whitespace-pre-line">
            {concept.body}
          </p>

          {/* Optional Steps */}
          {concept.steps && concept.steps.length > 0 && (
            <div className="bg-(--color-paper-50) p-4 rounded-lg border border-(--color-concrete-300) space-y-2 text-sm text-(--color-ink-900)">
              {concept.steps.map((step, stepIdx) => (
                <div key={stepIdx} className="flex gap-2">
                  <span className="font-mono font-bold" style={{ color: `var(--color-${subject.color})` }}>Step {stepIdx + 1}:</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          )}

          {/* Optional Formula */}
          {concept.formula && (
            <div className="mobile-scroll overflow-x-auto p-4 sm:p-6 bg-(--color-paper-50) border-l-4 rounded-r-lg font-mono text-left sm:text-center text-sm min-[380px]:text-base sm:text-xl text-(--color-ink-900)" style={{ borderColor: `var(--color-${subject.color})` }} role="note" aria-label="公式">
              {concept.formula.split('\n').map((line, i) => <div key={i}>{line}</div>)}
            </div>
          )}

          {/* Optional Table */}
          {concept.table && (
             <div className="mobile-scroll mobile-scroll-hint overflow-x-auto mt-4" tabIndex={0} role="region" aria-label={`${concept.heading}資料表`}>
               <table className="min-w-[40rem] text-sm text-left border-collapse">
                 <thead className="bg-(--color-concrete-300)/30 font-mono text-(--color-ink-900)">
                   <tr>
                     {concept.table.headers.map((th, i) => (
                       <th key={i} className="px-4 py-2 border border-(--color-concrete-300)">{th}</th>
                     ))}
                   </tr>
                 </thead>
                 <tbody className="text-(--color-ink-650)">
                   {concept.table.rows.map((row, i) => (
                     <tr key={i} className="hover:bg-(--color-paper-50)">
                       {row.map((td, j) => (
                         <td key={j} className="px-4 py-2 border border-(--color-concrete-300) whitespace-pre-line">{td}</td>
                       ))}
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          )}
        </section>
      ))}

      {/* Practice Exam Question */}
      {((topic.practices && topic.practices.length > 0) || topic.practice) && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif text-(--color-ink-900)">隨堂練習與考題演練</h2>
          {((topic.practices && topic.practices.length > 0) ? topic.practices : (topic.practice ? [topic.practice] : [])).map((p, index) => (
            <section key={index} className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8 space-y-6">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <span className="text-xs font-mono text-(--color-paper-50) px-2.5 py-1 rounded" style={{ backgroundColor: `var(--color-${subject.color})` }}>
                  隨堂練習 {topic.practices && topic.practices.length > 1 ? `#${index + 1}` : ''}
                </span>
                <span className="text-xs font-mono text-(--color-ink-650)">難度: {p.difficulty}</span>
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-bold text-(--color-ink-900) whitespace-pre-line">
                  [題目] {p.question}
                </h3>

                <div className="bg-(--color-paper-50) p-4 rounded-lg border border-(--color-concrete-300) space-y-3 text-sm">
                  <div className="font-bold" style={{ color: `var(--color-${subject.color})` }}>【詳細解題步驟】</div>
                  <ul className="list-disc pl-5 font-mono text-xs space-y-2 text-(--color-ink-650)">
                    {p.steps.map((step, i) => <li key={i} className="pl-1 whitespace-pre-line">{step}</li>)}
                  </ul>
                  <p>答案： <strong className="font-mono text-base" style={{ color: `var(--color-${subject.color})` }}>{p.answer}</strong></p>
                </div>
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Navigation */}
      <nav className="pt-8 border-t border-(--color-concrete-300) grid grid-cols-1 sm:grid-cols-3 items-stretch sm:items-center gap-3 text-sm font-mono" aria-label="章節導覽">
        {prevTopic ? (
          <Link href={`/subjects/${subject.slug}/${prevTopic.slug}`} className="flex min-h-11 items-center rounded-lg border border-(--color-concrete-300) px-3 py-2 hover:underline sm:border-0 sm:px-0" style={{ color: `var(--color-${subject.color})` }}>
            ← {prevTopic.title}
          </Link>
        ) : <div />}
        
        <Link href={`/subjects/${subject.slug}`} className="flex min-h-11 items-center justify-center rounded-lg border border-(--color-concrete-300) px-3 py-2 hover:underline sm:border-0 sm:px-0">
          返回 {subject.title} 目錄
        </Link>
        
        {nextTopic ? (
           <Link href={`/subjects/${subject.slug}/${nextTopic.slug}`} className="flex min-h-11 items-center justify-end rounded-lg border border-(--color-concrete-300) px-3 py-2 text-right hover:underline sm:border-0 sm:px-0" style={{ color: `var(--color-${subject.color})` }}>
             {nextTopic.title} →
           </Link>
        ) : <div />}
      </nav>
    </div>
  );
}
