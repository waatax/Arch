'use client';

import React from 'react';
import Link from 'next/link';
import { ArchitecturalSubjectIcon } from '@/components/ui/ArchitecturalIcons';
import { allSubjects } from '@/data/subjects';

interface SubjectQuickSwitcherProps {
  currentSubjectSlug: string;
}

interface SubjectGroup {
  id: string;
  name: string;
  slugs: string[];
}

const GROUPS: SubjectGroup[] = [
  {
    id: 'prof',
    name: '工程專一/專二',
    slugs: ['mechanics', 'materials', 'surveying', 'drafting'],
  },
  {
    id: 'common',
    name: '統測共同',
    slugs: ['math-c', 'english', 'chinese'],
  },
  {
    id: 'science',
    name: '自然科學',
    slugs: ['physics', 'chemistry'],
  },
  {
    id: 'humanities',
    name: '人文史論',
    slugs: ['history', 'geography', 'civics'],
  },
  {
    id: 'ext',
    name: '前瞻科技',
    slugs: ['extensions'],
  },
];

export default function SubjectQuickSwitcher({ currentSubjectSlug }: SubjectQuickSwitcherProps) {
  return (
    <nav aria-label="13 科快速切換導覽" className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-3 sm:p-4 backdrop-blur-md shadow-2xs">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800/80 text-xs">
        <span className="font-mono font-bold text-slate-500 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-blue-500 animate-pulse" />
          13 科學群直達導航 · 跨科無縫切換
        </span>
        <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
          點擊直接跳轉科目
        </span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-none">
        {GROUPS.map((group) => {
          const groupSubjects = allSubjects.filter((s) => group.slugs.includes(s.slug));
          return (
            <div key={group.id} className="flex items-center gap-1.5 shrink-0">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md shrink-0">
                {group.name}
              </span>

              <div className="flex items-center gap-1">
                {groupSubjects.map((sub) => {
                  const isCurrent = sub.slug === currentSubjectSlug;
                  return (
                    <Link
                      key={sub.slug}
                      href={`/subjects/${sub.slug}`}
                      className={`inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-bold transition-all shrink-0 cursor-pointer ${
                        isCurrent
                          ? 'bg-blue-600 text-white shadow-xs scale-102 ring-2 ring-blue-500/20'
                          : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-300'
                      }`}
                    >
                      <ArchitecturalSubjectIcon slug={sub.slug} size={15} />
                      <span>{sub.title}</span>
                      <span className={`text-[10px] font-mono px-1 rounded ${
                        isCurrent ? 'bg-blue-700 text-blue-100' : 'text-slate-400 bg-slate-200/60 dark:bg-slate-700/60'
                      }`}>
                        {sub.topics.length}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
