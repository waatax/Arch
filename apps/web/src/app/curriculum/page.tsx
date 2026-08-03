import Link from 'next/link';
import { allSubjects } from '@/data/subjects';
import type { SubjectData, TopicContent } from '@/data/types';

export default function CurriculumPage() {
  const getSubject = (slug: string) => allSubjects.find(s => s.slug === slug);
  const getGroup = (slugs: string[]) =>
    slugs.map(getSubject).filter((subject): subject is SubjectData => Boolean(subject));

  const group1 = getGroup(['mechanics', 'materials']);
  const group2 = getGroup(['surveying', 'drafting']);
  const group3 = getGroup(['chinese', 'english', 'math-c']);
  const group4 = getGroup(['physics', 'chemistry']);
  const group5 = getGroup(['history', 'geography', 'civics']);
  const group6 = getGroup(['extensions']);
  
  // Progress computation
  const totalTopics = allSubjects.reduce((acc, curr) => acc + curr.topics.length, 0);
  const doneTopics = allSubjects.reduce((acc, curr) => acc + curr.topics.filter(t => t.status === 'done').length, 0);
  const progressPercent = Math.round((doneTopics / totalTopics) * 100);

  const renderSubjectColumn = (subject: SubjectData) => (
    <div key={subject.slug} className={`border-l-2 pl-4`} style={{ borderColor: `var(--color-${subject.color})` }}>
      <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
        <Link href={`/subjects/${subject.slug}`} className="hover:opacity-80 transition-opacity" style={{ color: `var(--color-${subject.color})` }}>
          {subject.title}
        </Link>
      </h3>
      <ul className="text-sm space-y-2 text-(--color-ink-650)">
        {subject.topics.map((t: TopicContent) => (
          <li key={t.slug} className="flex items-start gap-1">
            <span className="shrink-0">•</span>
            {t.status === 'done' ? (
              <Link href={`/subjects/${subject.slug}/${t.slug}`} className="hover:underline underline-offset-2 transition-colors">
                {t.title}
              </Link>
            ) : (
              <span className="opacity-70">{t.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-4">
          <div>
            <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-widest block">Curriculum Map</span>
            <h1 className="text-[1.8rem] leading-tight sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1">
              台灣高工建築科 · 全科學習地圖
            </h1>
          </div>
          
          <div className="hidden sm:block text-right">
            <div className="text-xs font-mono text-(--color-ink-650) mb-1">內容建置進度</div>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-(--color-concrete-300) rounded-full overflow-hidden">
                <div className="h-full bg-(--color-teal-700) transition-all duration-500" style={{ width: `${progressPercent}%` }} />
              </div>
              <span className="font-mono text-sm font-bold text-(--color-teal-700)">{doneTopics}/{totalTopics}</span>
            </div>
          </div>
        </div>
        <p className="text-base text-(--color-ink-650) max-w-3xl leading-relaxed">
          完全對齊 108 課綱與四技二專統測（土木與建築群）。涵蓋統測考科（國、英、數、專一、專二）與部定必修一般科目（自然、社會領域）。
        </p>
      </div>

      <div className="space-y-10">
        {/* Section 1: 專一 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-teal-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">統測專一</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">專業科目（一）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {group1.map(renderSubjectColumn)}
          </div>
        </div>

        {/* Section 2: 專二 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-blueprint-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">統測專二</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">專業科目（二）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {group2.map(renderSubjectColumn)}
          </div>
        </div>

        {/* 統測共同 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-brick-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">統測共同</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">共同科目（國·英·數）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {group3.map(renderSubjectColumn)}
          </div>
        </div>

        {/* 自然科學 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-moss-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">自然科學</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">自然科學領域</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {group4.map(renderSubjectColumn)}
          </div>
        </div>

        {/* 社會領域 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-sun-500) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">社會領域</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">社會領域</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {group5.map(renderSubjectColumn)}
          </div>
        </div>

        {/* 延伸 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-ink-900) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">延伸</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">建築素養與生涯發展</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {group6.map(renderSubjectColumn)}
          </div>
        </div>
      </div>
    </div>
  );
}
