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
  return { title: `${subject.title} | Arch V5`, description: `從圖像、白話觀念到統測練習，學會 ${subject.title}。` };
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: slug } = await params;
  const subject = allSubjects.find((item) => item.slug === slug);
  if (!subject) notFound();
  const doneCount = subject.topics.filter((topic) => topic.status === 'done').length;

  return <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
    <header className="blueprint-grid relative mb-10 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-6 sm:p-10">
      <div className="accent-orbit" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl"><p className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: `var(--color-${subject.color})` }}>{subject.category} · Visual syllabus</p><h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">{subject.title}</h1><p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400">每一章都從一張觀念圖開始：先看懂形狀、方向與關係，再學名詞、公式或操作步驟，最後用統測題驗證。</p><div className="mt-6 flex flex-wrap gap-2 text-xs font-mono"><span className="rounded-full bg-(--color-ink-900) px-3 py-1.5 text-white">{doneCount} / {subject.topics.length} 章上線</span><Link href="/practice" className="rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3 py-1.5 font-bold text-blue-600 dark:text-blue-400">前往模擬練習 →</Link></div></div>
    </header>

    <div className="grid gap-5 md:grid-cols-2">
      {subject.topics.map((topic, index) => {
        const href = `/subjects/${subject.slug}/${topic.slug}`;
        const visualSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/${subject.slug}/${topic.slug}.webp`;
        return <article key={topic.slug} className={`group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm transition duration-300 ${topic.status === 'done' ? 'card-lift' : 'opacity-65'}`}>
          <Link href={topic.status === 'done' ? href : '#'} className="grid h-full grid-cols-[7.5rem_1fr] sm:grid-cols-[10rem_1fr]" aria-disabled={topic.status !== 'done'}>
            <div className="image-wash relative min-h-44 overflow-hidden border-r border-slate-200 dark:border-slate-800"><Image src={visualSrc} alt={`${topic.title}觀念插圖`} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" sizes="(max-width: 640px) 120px, 160px" /><span className="absolute left-3 top-3 rounded-full bg-slate-50 dark:bg-slate-900/90 px-2 py-1 text-[10px] font-mono font-bold text-slate-900 dark:text-white backdrop-blur">{String(index + 1).padStart(2, '0')}</span></div>
            <div className="flex min-w-0 flex-col justify-between p-4 sm:p-5"><div><div className="mb-2 flex flex-wrap items-center gap-2"><span className="h-1.5 w-8 rounded-full" style={{ backgroundColor: `var(--color-${subject.color})` }} /><span className="text-[10px] font-mono uppercase tracking-widest text-slate-600 dark:text-slate-400">{topic.status === 'done' ? 'Ready to learn' : 'Coming soon'}</span></div><h2 className="font-serif text-lg font-bold leading-7 text-slate-900 dark:text-white group-hover:text-blue-600 dark:text-blue-400">{topic.title}</h2><p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{topic.desc}</p></div><span className="mt-4 text-xs font-bold" style={{ color: `var(--color-${subject.color})` }}>{topic.status === 'done' ? '看圖開始學習 →' : '內容建置中'}</span></div>
          </Link>
        </article>;
      })}
    </div>
  </div>;
}
