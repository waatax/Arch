import Link from 'next/link';

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
    <Link
      href={href}
      className="group card-lift block p-5 sm:p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-teal-700)/60 transition-all duration-300"
    >
      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
        <span className="text-[11px] font-mono text-(--color-ink-650) uppercase tracking-widest">
          {category}
        </span>
        {tag && (
          <span className="text-[11px] bg-(--color-brick-700) text-(--color-paper-50) px-2.5 py-0.5 rounded-full font-sans font-medium">
            {tag}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-(--color-ink-900) group-hover:text-(--color-teal-700) transition-colors duration-200 mb-2 font-serif">
        {title}
      </h3>
      <p className="text-sm text-(--color-ink-650) mb-4 sm:line-clamp-2 leading-relaxed">
        {description}
      </p>
      <div className="text-xs font-mono text-(--color-teal-700) font-medium flex items-center justify-between pt-3 border-t border-(--color-concrete-300)/50">
        <span>{topicsCount} 個核心主題</span>
        <span className="group-hover:translate-x-1.5 transition-transform duration-200">
          探索 →
        </span>
      </div>
    </Link>
  );
}
