import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allSubjects } from '@/data/subjects';

export function generateStaticParams() {
  return allSubjects.map((subject) => ({ subject: subject.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const subject = allSubjects.find((item) => item.slug === slug);
  if (!subject) return { title: 'Not Found' };
  return {
    title: `${subject.title} 完整課程與考點導覽 | Arch V6.17`,
    description: `從生活直覺、圖像拆解到統測解題，深入掌握 108 課綱技術型高中建築科 ${subject.title} 核心觀念。`,
  };
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const subject = allSubjects.find((item) => item.slug === slug);
  if (!subject) notFound();

  const doneCount = subject.topics.filter((topic) => topic.status === 'done').length;
  const totalConcepts = subject.topics.reduce((acc, t) => acc + t.concepts.length, 0);
  const totalWorked = subject.topics.reduce((acc, t) => acc + (t.worked_examples?.length ?? 0), 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 space-y-10">
      {/* Subject Hero Header */}
      <header className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-600/20">
              {subject.category}
            </span>
            <span className="rounded-full bg-emerald-600/10 px-2.5 py-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
              108 課綱技術高中建築科
            </span>
            <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-mono text-slate-600 dark:text-slate-400">
              {doneCount} / {subject.topics.length} 章全上線
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            {subject.title}
          </h1>

          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
            每一章都依循「生活直覺 → 概念圖解 → 白話定義 → 公式速查 → 步驟化例題 → 統測驗證」六步架構。建立扎實的專業底子，不靠死背也能融會貫通。
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 pt-2 max-w-md font-mono text-xs">
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">核心章節</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white">{subject.topics.length} 章</span>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">知識點精講</span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{totalConcepts} 個</span>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">步驟化例題</span>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{totalWorked} 題</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={`/subjects/${subject.slug}/${subject.topics[0]?.slug}`}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-3 transition-colors shadow-sm"
            >
              🚀 從第 1 章開始學習 →
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold px-5 py-3 transition-colors border border-slate-200 dark:border-slate-700"
            >
              🎯 進入本科統測模擬題庫
            </Link>
          </div>
        </div>
      </header>

      {/* Topics Syllabus Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block">
              Curriculum Progression
            </span>
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              章節學習進程與考點列表
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            共 {subject.topics.length} 個教學節點
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {subject.topics.map((topic, index) => {
            const href = `/subjects/${subject.slug}/${topic.slug}`;
            const visualSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/${subject.slug}/${topic.slug}.webp`;

            return (
              <article
                key={topic.slug}
                className={`group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 ${
                  topic.status === 'done' ? 'card-lift' : 'opacity-70'
                }`}
              >
                <Link
                  href={topic.status === 'done' ? href : '#'}
                  className="grid h-full grid-cols-[7.5rem_1fr] sm:grid-cols-[9.5rem_1fr]"
                  aria-disabled={topic.status !== 'done'}
                >
                  <div className="image-wash relative min-h-48 overflow-hidden border-r border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                    <Image
                      src={visualSrc}
                      alt={`${topic.title}觀念插圖`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 120px, 160px"
                    />
                    <span className="absolute left-3 top-3 rounded-lg bg-black/70 px-2.5 py-1 text-xs font-mono font-bold text-white backdrop-blur-md">
                      第 {index + 1} 章
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-col justify-between p-4 sm:p-5 space-y-3">
                    <div>
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className="rounded bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300">
                          {topic.concepts.length} 個核心觀念
                        </span>
                        {topic.worked_examples?.length ? (
                          <span className="rounded bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
                            {topic.worked_examples.length} 道步驟化例題
                          </span>
                        ) : null}
                      </div>

                      <h3 className="font-serif text-lg font-bold leading-snug text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {topic.title}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {topic.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs font-bold text-blue-600 dark:text-blue-400">
                      <span>看圖開始學習</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
