interface CaseHeroProps {
  title: string;
  location: string;
  architect: string;
  year: string;
  question: string;
  description: string;
  category: string;
}

export default function CaseHero({ title, location, architect, year, question, description, category }: CaseHeroProps) {
  return (
    <section className="w-full bg-(--color-paper-100) border-b border-(--color-concrete-300) py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 text-xs font-mono text-(--color-teal-700) mb-4">
          <span className="bg-(--color-paper-50) border border-(--color-concrete-300) px-2 py-1 rounded">{category}</span>
          <span className="bg-(--color-paper-50) border border-(--color-concrete-300) px-2 py-1 rounded">{location}</span>
          <span className="bg-(--color-paper-50) border border-(--color-concrete-300) px-2 py-1 rounded">{architect} ({year})</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-(--color-ink-900) mb-6">
          {title}
        </h1>

        <div className="p-6 bg-(--color-paper-50) border-l-4 border-(--color-brick-700) rounded-r-lg mb-6 shadow-sm">
          <span className="text-xs font-mono font-bold text-(--color-brick-700) block mb-1 uppercase tracking-wider">
            引發好奇的核心問題
          </span>
          <p className="text-lg sm:text-xl font-medium text-(--color-ink-900)">
            "{question}"
          </p>
        </div>

        <p className="text-base sm:text-lg text-(--color-ink-650) leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
