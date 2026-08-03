import CaseHero from './CaseHero';
import CaseVisualStudy from './CaseVisualStudy';
import LensSwitcher from './LensSwitcher';

interface CaseStudyPageProps {
  hero: React.ComponentProps<typeof CaseHero>;
  visual: React.ComponentProps<typeof CaseVisualStudy>;
  lenses: React.ComponentProps<typeof LensSwitcher>['lenses'];
  takeaway: string;
}

export default function CaseStudyPage({ hero, visual, lenses, takeaway }: CaseStudyPageProps) {
  return (
    <div className="space-y-12 pb-16">
      <CaseHero {...hero} />
      <CaseVisualStudy {...visual} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <LensSwitcher lenses={lenses} />
        <section className="rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5 sm:p-8">
          <span className="text-xs font-mono uppercase tracking-wider text-(--color-teal-700)">Learning takeaway</span>
          <h2 className="mt-1 mb-3 text-xl font-bold font-serif text-(--color-ink-900)">把觀察轉成建築判讀</h2>
          <p className="text-sm leading-relaxed text-(--color-ink-650)">{takeaway}</p>
        </section>
      </div>
    </div>
  );
}
