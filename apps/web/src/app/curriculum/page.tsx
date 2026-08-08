'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { allSubjects } from '@/data/subjects';

export default function CurriculumPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const totalTopics = allSubjects.reduce((acc, curr) => acc + curr.topics.length, 0);
  const doneTopics = allSubjects.reduce(
    (acc, curr) => acc + curr.topics.filter((t) => t.status === 'done').length,
    0
  );
  const progressPercent = Math.round((doneTopics / totalTopics) * 100);

  const categories = [
    { id: 'all', label: '全部科目 (13科)' },
    { id: 'pro1', label: '統測專一 (力學·材料)' },
    { id: 'pro2', label: '統測專二 (測量·製圖)' },
    { id: 'common', label: '統測共同 (國·英·數)' },
    { id: 'science', label: '自然科學 (物理·化學)' },
    { id: 'social', label: '社會領域 (歷史·地理·公民)' },
    { id: 'ext', label: '建築科延伸實務' },
  ];

  const getFilteredSubjects = useMemo(() => {
    return allSubjects.filter((subject) => {
      let matchesCategory = true;
      if (activeCategory === 'pro1') matchesCategory = ['mechanics', 'materials'].includes(subject.slug);
      else if (activeCategory === 'pro2') matchesCategory = ['surveying', 'drafting'].includes(subject.slug);
      else if (activeCategory === 'common') matchesCategory = ['chinese', 'english', 'math-c'].includes(subject.slug);
      else if (activeCategory === 'science') matchesCategory = ['physics', 'chemistry'].includes(subject.slug);
      else if (activeCategory === 'social') matchesCategory = ['history', 'geography', 'civics'].includes(subject.slug);
      else if (activeCategory === 'ext') matchesCategory = ['extensions'].includes(subject.slug);

      if (!matchesCategory) return false;

      if (searchKeyword.trim()) {
        const q = searchKeyword.toLowerCase().trim();
        const matchesSubject = subject.title.toLowerCase().includes(q);
        const matchesAnyTopic = subject.topics.some(
          (t) => t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)
        );
        return matchesSubject || matchesAnyTopic;
      }
      return true;
    });
  }, [activeCategory, searchKeyword]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header & Title */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          <div>
            <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest block font-bold">
              Arch V5.0 Curriculum Map
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-slate-900 dark:text-white mt-1">
              台灣高工建築科 · 全科學習地圖
            </h1>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 sm:px-5 sm:py-3 shadow-xs">
            <div className="text-xs font-mono text-slate-500 mb-1 flex justify-between">
              <span>全站章節建置進度</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">{progressPercent}%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-32 h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                {doneTopics} / {totalTopics} 章
              </span>
            </div>
          </div>
        </div>

        <p className="text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          完全對齊 108 課綱技術型高級中等學校建築科課程綱要。涵蓋四技二專統測專業科目（一／二）、共同科目與自然、社會必修領域，提供最完整的知識路徑。
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="space-y-3">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 border-b border-slate-200 dark:border-slate-800 pb-3 text-xs font-mono">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Realtime Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="🔍 依關鍵字即時篩選（如：向量、水準儀、剪力彎矩、混凝土、第三角投影、101阻尼器）..."
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:outline-hidden"
          />
          {searchKeyword && (
            <button
              onClick={() => setSearchKeyword('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕ 清除
            </button>
          )}
        </div>
      </div>

      {/* Subject Cards Grid */}
      <div className="space-y-8">
        {getFilteredSubjects.length > 0 ? (
          getFilteredSubjects.map((subject) => {
            const topicList = searchKeyword.trim()
              ? subject.topics.filter(
                  (t) =>
                    t.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                    t.desc.toLowerCase().includes(searchKeyword.toLowerCase())
                )
              : subject.topics;

            return (
              <div
                key={subject.slug}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="size-3.5 rounded-full"
                      style={{ backgroundColor: `var(--color-${subject.color})` }}
                    />
                    <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                      <Link href={`/subjects/${subject.slug}`} className="hover:underline">
                        {subject.title}
                      </Link>
                    </h2>
                    <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-400">
                      {subject.category}
                    </span>
                  </div>

                  <Link
                    href={`/subjects/${subject.slug}`}
                    className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    查看科目大綱 ({subject.topics.length} 章) →
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {topicList.map((topic, idx) => (
                    <Link
                      key={topic.slug}
                      href={`/subjects/${subject.slug}/${topic.slug}`}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 p-4 hover:border-blue-500 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all shadow-2xs"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                          <span>第 {idx + 1} 章</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                            {topic.concepts.length} 觀念
                          </span>
                        </div>
                        <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {topic.title}
                        </h3>
                        <p className="line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                          {topic.desc}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                        <span>開始學習</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center text-slate-500">
            沒有找到符合條件的科目或章節。
          </div>
        )}
      </div>
    </div>
  );
}
