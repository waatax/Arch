import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allSubjects } from '@/data/subjects';

export default function SubjectPage() {
  const subject = allSubjects.find(s => s.slug === 'surveying');
  
  if (!subject) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono uppercase tracking-wider block" style={{ color: `var(--color-${subject.color})` }}>
          {subject.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          {subject.title}
        </h1>
        <p className="text-base text-(--color-ink-650)">
          {/* We can use the first topic's desc or a general desc if we add it to SubjectData */}
          選擇下方章節開始學習。
        </p>
      </div>

      <div className="space-y-4">
        {subject.topics.map((t) => (
          <div
            key={t.slug}
            className={`p-6 border rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all ${
              t.status === 'done'
                ? 'bg-(--color-paper-100) shadow-sm hover:border-(--color-ink-900)'
                : 'bg-(--color-paper-50) border-(--color-concrete-300) opacity-70'
            }`}
            style={t.status === 'done' ? { borderColor: `var(--color-${subject.color})` } : {}}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-bold font-serif text-(--color-ink-900)">{t.title}</h2>
                {t.status === 'done' && (
                  <span className="text-xs text-(--color-paper-50) px-2 py-0.5 rounded font-mono" style={{ backgroundColor: `var(--color-${subject.color})` }}>
                    已上線
                  </span>
                )}
                {t.status !== 'done' && (
                  <span className="text-xs bg-(--color-concrete-300) text-(--color-ink-650) px-2 py-0.5 rounded font-mono">
                    建置中
                  </span>
                )}
              </div>
              <p className="text-sm text-(--color-ink-650)">{t.desc}</p>
            </div>
            
            {t.status === 'done' ? (
              <Link
                href={`/subjects/${subject.slug}/${t.slug}`}
                className="px-4 py-2 text-(--color-paper-50) text-xs font-mono font-medium rounded hover:bg-opacity-90 transition-colors whitespace-nowrap"
                style={{ backgroundColor: `var(--color-${subject.color})` }}
              >
                進入學習 →
              </Link>
            ) : (
              <button
                disabled
                className="px-4 py-2 bg-(--color-concrete-300) text-(--color-ink-650) text-xs font-mono font-medium rounded cursor-not-allowed whitespace-nowrap"
              >
                即將推出
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
