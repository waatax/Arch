import Image from 'next/image';

interface CaseHeroProps {
  title: string;
  location: string;
  architect: string;
  year: string;
  question: string;
  description: string;
  category: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export default function CaseHero({ title, location, architect, year, question, description, category, imageSrc, imageAlt, imageCaption = 'AI Generated Visualization' }: CaseHeroProps) {
  return (
    <section className="w-full bg-(--color-paper-100) border-b border-(--color-concrete-300) py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 text-xs font-mono text-(--color-teal-700) mb-4">
          <span className="bg-(--color-paper-50) border border-(--color-concrete-300) px-2 py-1 rounded">{category}</span>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title + ' ' + location)}`} target="_blank" rel="noopener noreferrer" className="bg-(--color-paper-50) border border-(--color-concrete-300) px-2 py-1 rounded hover:bg-(--color-concrete-200) transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            {location}
          </a>
          <span className="bg-(--color-paper-50) border border-(--color-concrete-300) px-2 py-1 rounded">{architect} ({year})</span>
        </div>

        <h1 className="text-[1.85rem] leading-tight sm:text-5xl font-bold font-serif text-(--color-ink-900) mb-5 sm:mb-6">
          {title}
        </h1>

        <div className="p-4 sm:p-6 bg-(--color-paper-50) border-l-4 border-(--color-brick-700) rounded-r-lg mb-6 shadow-sm">
          <span className="text-xs font-mono font-bold text-(--color-brick-700) block mb-1 uppercase tracking-wider">
            引發好奇的核心問題
          </span>
          <p className="text-lg sm:text-xl font-medium text-(--color-ink-900)">
            「{question}」
          </p>
        </div>

        <p className="text-base sm:text-lg text-(--color-ink-650) leading-relaxed mb-8">
          {description}
        </p>

        {imageSrc && (
          <figure className="overflow-hidden rounded-xl border border-(--color-concrete-300) shadow-sm bg-(--color-paper-50)">
            <div className="relative aspect-video w-full">
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                className="object-cover"
                fill
                priority
              />
            </div>
            <figcaption className="px-4 py-2 text-xs font-mono text-(--color-ink-650) border-t border-(--color-concrete-300) text-right">
              {imageCaption}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
