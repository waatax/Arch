'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ArchitecturalSubjectIcon } from '@/components/ui/ArchitecturalIcons';
import { allSubjects } from '@/data/subjects';

interface SubjectCategoryGroup {
  id: string;
  title: string;
  badge: string;
  desc: string;
  slugs: string[];
}

const CATEGORY_GROUPS: SubjectCategoryGroup[] = [
  {
    id: 'all',
    title: '全站 13 科大系',
    badge: '120 章全收錄',
    desc: '從專業核心、共同科目到自然人文與前瞻科技，建構完整的建築工程知識樹。',
    slugs: allSubjects.map((s) => s.slug),
  },
  {
    id: 'professional',
    title: '建築工程核心 (專一/專二)',
    badge: '統測專業考科 · 4 科 50 章',
    desc: '高工建築科最關鍵四大支柱：結構力學、營造材料、測量技術與標準製圖。',
    slugs: ['mechanics', 'materials', 'surveying', 'drafting'],
  },
  {
    id: 'common',
    title: '統測共同科目',
    badge: '基礎核心 · 3 科 24 章',
    desc: '技術型高中建築考科共同必備：數學 C、工程專業英文與信達雅國文素養。',
    slugs: ['math-c', 'english', 'chinese'],
  },
  {
    id: 'science',
    title: '工程自然科學',
    badge: '科學底蘊 · 2 科 15 章',
    desc: '連結古典物理力學定律與建築材料化學反應，為工程直覺打底。',
    slugs: ['physics', 'chemistry'],
  },
  {
    id: 'humanities',
    title: '人文社會與建築史',
    badge: '空間與文明 · 3 科 21 章',
    desc: '全球建築文明演進、地理風土氣候調適與營建法律公民社會。',
    slugs: ['history', 'geography', 'civics'],
  },
  {
    id: 'extensions',
    title: '前瞻科技與新興領域',
    badge: '未來趨勢 · 1 科 10 章',
    desc: 'EEWH 綠建築評估、BIM 建築資訊模型、隔減震耐震新工法與永續韌性。',
    slugs: ['extensions'],
  },
];

export default function AllSubjectsDirectory() {
  const [activeGroup, setActiveGroup] = useState('all');

  const currentGroup = CATEGORY_GROUPS.find((g) => g.id === activeGroup) || CATEGORY_GROUPS[0];
  const displayedSubjects = allSubjects.filter((s) => currentGroup.slugs.includes(s.slug));

  return (
    <div className="space-y-8">
      {/* 標題與說明 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Comprehensive 13-Subject Taxonomy
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            13 科完整分類知識框架
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            每個科目皆配備「生活直覺 → 概念圖解 → 快速公式 → 步驟例題 → 統測真題」五段學習梯架，無死角串聯高工與大學建築教育。
          </p>
        </div>

        <Link
          href="/curriculum"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
        >
          <span>查看三學年完整課程地圖 →</span>
        </Link>
      </div>

      {/* 分類群組 Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-mono">
        {CATEGORY_GROUPS.map((group) => {
          const isActive = activeGroup === group.id;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveGroup(group.id)}
              className={`shrink-0 px-3.5 py-2 rounded-2xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300'
              }`}
            >
              <span>{group.title}</span>
            </button>
          );
        })}
      </div>

      {/* 當前分類描述小卡 */}
      <div className="rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong className="text-blue-700 dark:text-blue-300 font-bold mr-1">【{currentGroup.title}】</strong>
          {currentGroup.desc}
        </p>
        <span className="font-mono font-bold text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-xl border border-blue-200/60 dark:border-blue-800 shrink-0">
          {currentGroup.badge}
        </span>
      </div>

      {/* 科目卡片網格 */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {displayedSubjects.map((subject) => {
          const firstTopic = subject.topics[0];
          const totalConcepts = subject.topics.reduce((acc, t) => acc + t.concepts.length, 0);

          return (
            <div
              key={subject.slug}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
            >
              <div>
                {/* 頂部標籤與圖示 */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40">
                    <ArchitecturalSubjectIcon slug={subject.slug} size={28} strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                      {subject.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 mt-1">
                      {subject.topics.length} 個章節 · {totalConcepts} 個觀念
                    </span>
                  </div>
                </div>

                {/* 標題與簡介 */}
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {subject.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                  涵蓋 {subject.topics.slice(0, 3).map(t => t.title).join('、')} 等精選篇章，搭配實體圖解與歷屆考題。
                </p>
              </div>

              {/* 底部操作按鈕 */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold">
                <Link
                  href={`/subjects/${subject.slug}`}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  章節導覽 →
                </Link>

                {firstTopic && (
                  <Link
                    href={`/subjects/${subject.slug}/${firstTopic.slug}`}
                    className="inline-flex items-center gap-1 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-600 hover:text-white text-blue-600 dark:text-blue-300 px-3 py-1.5 transition-all text-xs font-mono font-bold"
                  >
                    <span>第 1 章開始</span>
                    <ArrowRight className="size-3" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
