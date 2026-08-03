'use client';
import Link from 'next/link';
import { SubjectData, TopicContent } from '@/data/types';

interface TopicPageLayoutProps {
  subject: SubjectData;
  topic: TopicContent;
}

export default function TopicPageLayout({ subject, topic }: TopicPageLayoutProps) {
  const currentIndex = subject.topics.findIndex(t => t.slug === topic.slug);
  const prevTopic = currentIndex > 0 ? subject.topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < subject.topics.length - 1 ? subject.topics[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: `var(--color-${subject.color})` }}>
          <Link href="/curriculum" className="hover:underline">課程總覽</Link>
          <span>/</span>
          <Link href={`/subjects/${subject.slug}`} className="hover:underline">{subject.title}</Link>
          <span>/</span>
          <span>章節 {String(currentIndex + 1).padStart(2, '0')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mb-4">
          {topic.title}
        </h1>
        <p className="text-base text-(--color-ink-650) leading-relaxed">
          {topic.desc}
        </p>
      </div>

      {/* Concept Cards */}
      {topic.concepts.map((concept, index) => (
        <section key={index} className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8 space-y-4">
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
            <div className="p-6 bg-(--color-paper-50) border-l-4 rounded-r-lg font-mono text-center text-lg sm:text-xl text-(--color-ink-900)" style={{ borderColor: `var(--color-${subject.color})` }}>
              {concept.formula.split('\n').map((line, i) => <div key={i}>{line}</div>)}
            </div>
          )}

          {/* Optional Table */}
          {concept.table && (
             <div className="overflow-x-auto mt-4">
               <table className="min-w-full text-sm text-left border-collapse">
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
      {topic.practice && (
        <section className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-(--color-paper-50) px-2.5 py-1 rounded" style={{ backgroundColor: `var(--color-${subject.color})` }}>隨堂練習</span>
            <span className="text-xs font-mono text-(--color-ink-650)">難度: {topic.practice.difficulty}</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-(--color-ink-900) whitespace-pre-line">
              [題目] {topic.practice.question}
            </h3>

            <div className="bg-(--color-paper-50) p-4 rounded-lg border border-(--color-concrete-300) space-y-3 text-sm">
              <div className="font-bold" style={{ color: `var(--color-${subject.color})` }}>【詳細解題步驟】</div>
              <ul className="list-disc list-inside pl-4 font-mono text-xs space-y-1 text-(--color-ink-650)">
                {topic.practice.steps.map((step, i) => <li key={i}>{step}</li>)}
              </ul>
              <p>答案： <strong className="font-mono text-base" style={{ color: `var(--color-${subject.color})` }}>{topic.practice.answer}</strong></p>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <div className="pt-8 border-t border-(--color-concrete-300) flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-mono">
        {prevTopic ? (
          <Link href={`/subjects/${subject.slug}/${prevTopic.slug}`} className="hover:underline flex items-center gap-1" style={{ color: `var(--color-${subject.color})` }}>
            ← {prevTopic.title}
          </Link>
        ) : <div />}
        
        <Link href={`/subjects/${subject.slug}`} className="hover:underline flex items-center gap-1 text-(--color-ink-650)">
          返回 {subject.title} 目錄
        </Link>
        
        {nextTopic ? (
           <Link href={`/subjects/${subject.slug}/${nextTopic.slug}`} className="hover:underline flex items-center gap-1" style={{ color: `var(--color-${subject.color})` }}>
             {nextTopic.title} →
           </Link>
        ) : <div />}
      </div>
    </div>
  );
}
