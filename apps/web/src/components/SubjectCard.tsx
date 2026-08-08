import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';

interface SubjectCardProps {
  title: string;
  category: string;
  description: string;
  href: string;
  topicsCount: number;
  tag?: string;
}

export default function SubjectCard({ title, category, description, href, topicsCount, tag }: SubjectCardProps) {
  return (
    <Link href={href} className="group block">
      <GlassCard hoverEffect className="p-5 sm:p-6 h-full flex flex-col">
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {category}
          </span>
          {tag && (
            <span className="text-[11px] bg-emerald-500 text-white px-2.5 py-0.5 rounded-full font-sans font-medium shadow-sm shadow-emerald-500/20">
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2 font-serif">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 sm:line-clamp-2 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800/50 mt-auto">
          <span>{topicsCount} 核心主題</span>
          <span className="group-hover:translate-x-1.5 transition-transform duration-200 flex items-center gap-1">
            探索 &rarr;
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}
