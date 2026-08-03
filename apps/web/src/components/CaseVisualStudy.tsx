import Image from 'next/image';

export interface CaseVisualStudyProps {
  title: string;
  photo: string;
  sketch: string;
  photoAlt: string;
  sketchAlt: string;
  observation: string;
  readingGuide: string[];
  credit: {
    label: string;
    href: string;
    license: string;
  };
}

export default function CaseVisualStudy({
  title,
  photo,
  sketch,
  photoAlt,
  sketchAlt,
  observation,
  readingGuide,
  credit,
}: CaseVisualStudyProps) {
  return (
    <section aria-labelledby="case-visual-study" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
        <div>
          <span className="block text-xs font-mono uppercase tracking-[0.18em] text-(--color-teal-700)">
            Photo → Drawing · 觀察到圖解
          </span>
          <h2 id="case-visual-study" className="mt-1 text-2xl sm:text-3xl font-bold font-serif text-(--color-ink-900)">
            {title}
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-(--color-ink-650)">{observation}</p>
      </div>

      <div className="grid overflow-hidden rounded-2xl border border-(--color-concrete-300) bg-(--color-paper-100) shadow-sm lg:grid-cols-2">
        <figure className="relative min-w-0 border-b border-(--color-concrete-300) lg:border-b-0 lg:border-r">
          <div className="relative aspect-[3/2] overflow-hidden bg-(--color-concrete-300)">
            <Image src={photo} alt={photoAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[11px] font-mono tracking-wider text-white backdrop-blur">
              01 · 實景觀察
            </span>
          </div>
          <figcaption className="px-4 py-3 text-xs leading-relaxed text-(--color-ink-650)">
            實景照片：先辨識尺度、材料接縫與結構如何落地。{' '}
            <a className="underline underline-offset-2 hover:text-(--color-teal-700)" href={credit.href} target="_blank" rel="noreferrer">
              {credit.label} · {credit.license}
            </a>
          </figcaption>
        </figure>

        <figure className="relative min-w-0">
          <div className="relative aspect-[3/2] overflow-hidden bg-[#e8dfcf]">
            <Image src={sketch} alt={sketchAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-(--color-teal-700)/90 px-3 py-1 text-[11px] font-mono tracking-wider text-white backdrop-blur">
              02 · AI 工程圖解
            </span>
          </div>
          <figcaption className="px-4 py-3 text-xs leading-relaxed text-(--color-ink-650)">
            AI 依實景照片轉繪的教學示意；用於理解構造概念，不作施工圖或尺寸依據。
          </figcaption>
        </figure>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {readingGuide.map((item, index) => (
          <div key={item} className="rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) p-4">
            <span className="mb-2 block text-xs font-mono text-(--color-brick-700)">0{index + 1}</span>
            <p className="text-sm leading-relaxed text-(--color-ink-900)">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
