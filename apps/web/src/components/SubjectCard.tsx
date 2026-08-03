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
    <Link href={href} className="group block p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-lg hover:border-(--color-teal-700) transition-all">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-mono text-(--color-ink-650) uppercase tracking-wider">{category}</span>
        {tag && <span className="text-xs bg-(--color-brick-700) text-(--color-paper-50) px-2 py-0.5 rounded font-sans">{tag}</span>}
      </div>
      <h3 className="text-xl font-bold text-(--color-ink-900) group-hover:text-(--color-teal-700) transition-colors mb-2 font-serif">
        {title}
      </h3>
      <p className="text-sm text-(--color-ink-650) mb-4 line-clamp-2">{description}</p>
      <div className="text-xs font-mono text-(--color-teal-700) font-medium flex items-center justify-between pt-3 border-t border-(--color-concrete-300)/50">
        <span>{topicsCount} 個核心主題</span>
        <span className="group-hover:translate-x-1 transition-transform">探索 →</span>
      </div>
    </Link>
  );
}
