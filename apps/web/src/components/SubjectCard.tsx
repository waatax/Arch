import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ArchitecturalSubjectIcon, IconProps } from '@/components/ui/ArchitecturalIcons';

interface SubjectCardProps {
  title: string;
  category: string;
  description: string;
  href: string;
  topicsCount: number;
  tag?: string;
  icon?: React.ComponentType<IconProps>;
}

export default function SubjectCard({
  title,
  category,
  description,
  href,
  topicsCount,
  tag,
  icon: CustomIcon,
}: SubjectCardProps) {
  // 自動依路徑或傳入圖示提取信達雅專業建築圖示
  const slug = href.replace('/subjects/', '').split('/')[0];

  return (
    <Link href={href} className="group block">
      <GlassCard hoverEffect className="p-5 sm:p-6 h-full flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">
              {category}
            </span>
            <div className="flex items-center gap-2">
              {tag && (
                <span className="text-[11px] bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 border border-emerald-600/20 px-2.5 py-0.5 rounded-full font-mono font-bold shadow-xs">
                  {tag}
                </span>
              )}
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40 group-hover:scale-105 transition-transform">
                {CustomIcon ? (
                  <CustomIcon size={20} strokeWidth={1.75} />
                ) : (
                  <ArchitecturalSubjectIcon slug={slug} size={20} strokeWidth={1.75} />
                )}
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2 font-serif">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 sm:line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-slate-800/80 mt-auto">
          <span>{topicsCount} 核心主題</span>
          <span className="group-hover:translate-x-1.5 transition-transform duration-200 flex items-center gap-1">
            進入學習 &rarr;
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}
