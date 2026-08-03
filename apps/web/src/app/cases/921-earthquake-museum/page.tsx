import CaseHero from '@/components/CaseHero';
import LensSwitcher from '@/components/LensSwitcher';
import Link from 'next/link';

export default function EarthquakeMuseumPage() {
  const lenses = [
    {
      id: 'site',
      name: '1. 基地與地層錯動',
      question: '當基地被車籠埔斷層直接穿過，建築該如何回應？',
      content: `921 地震教育園區原為光復國中校區。車籠埔斷層的隆起將跑道硬生生撕裂擡升數公尺。
      建築設計並沒有抹去這個毀滅性的痕跡，而是採用淡灰色的膜結構雨棚沿著斷層線下方延伸，宛如『建築的針腳（Stitches）』縫合地貌，形成一條引導參觀者走過地震斷層遺址的廊道。`,
      skillLink: { label: '測量實習 · 基地高程與測繪', href: '/subjects/surveying' },
    },
    {
      id: 'structure-safety',
      name: '2. 結構破壞與保留',
      question: '損毀的校舍樑柱為什麼沒有坍塌？如何進行結構補強？',
      content: `展館保留了被剪力（Shear Force）與壓屈破壞的毀損教室結構。
      為了防止殘存樑柱繼續倒塌，工程團隊使用了鋼索拉接與半透明的預力防護結構進行微創式補強（Micro-intervention）。學生可以親眼看見『柱箍筋間距過大』導致的爆裂破壞範例。`,
      skillLink: { label: '基礎工程力學 · 剪力與壓屈', href: '/subjects/mechanics' },
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      <CaseHero
        title="921 地震教育園區"
        location="台中市霧峰區"
        architect="莊學能 + 栗生明"
        year="2004 年開館"
        question="建築能不能不掩蓋傷痕，反而幫大家讀懂斷層錯動？"
        description="園區保存了 921 大地震斷層錯動與校舍毀損的原址現場。建築以極低調的膜結構與金屬鋼架穿插其中，將災害現場轉化為極具震撼力的防災教育與歷史場所。"
        category="安全與記憶 · 斷層縫合與構造保存"
        imageSrc={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/cases/921-earthquake-museum.webp`}
        imageAlt="921地震教育園區的膜結構與斷層錯動遺跡"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <LensSwitcher lenses={lenses} />

        <section className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mb-2">
            實務教學對接
          </h3>
          <p className="text-sm text-(--color-ink-650) mb-4">
            在統測『材料與試驗』與『基礎工程力學』中，混凝土柱的箍筋（Ties）彎鉤角度（135度）與間距規定是耐震結構的核心考點。在這裡你可以看到缺乏箍筋約束的實體破壞過程。
          </p>
          <Link
            href="/subjects/materials"
            className="inline-block px-4 py-2 bg-(--color-teal-700) text-(--color-paper-50) text-xs font-mono font-medium rounded hover:bg-opacity-90 transition-colors"
          >
            學習混凝土與金屬材料試驗 →
          </Link>
        </section>
      </div>
    </div>
  );
}
