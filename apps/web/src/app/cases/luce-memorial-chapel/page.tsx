import CaseHero from '@/components/CaseHero';
import CaseVisualStudy from '@/components/CaseVisualStudy';
import LensSwitcher from '@/components/LensSwitcher';
import Link from 'next/link';

export default function LuceChapelPage() {
  const lenses = [
    {
      id: 'structure',
      name: '1. 雙曲面薄殼結構',
      question: '為什麼牆面不需要任何樑柱，就能自己站立起來？',
      content: `路思義教堂由四片獨立的拋物雙曲面（Hyperbolic Paraboloid）薄殼組成。
      每片薄殼在底部最厚，越往上越薄。雙曲面的雙向彎曲幾何特性賦予了結構極大的面內剛度（In-plane Stiffness），使得牆面既是內外分隔的屏障，也是承載自身重量與風壓的結構主體。`,
      skillLink: { label: '基礎工程力學 · 曲面與薄殼', href: '/subjects/mechanics' },
    },
    {
      id: 'light',
      name: '2. 光與頂光天窗',
      question: '頂部的中央縫隙如何雕塑空間的精神性？',
      content: `四片分離的薄殼在頂部並不直接碰撞相連，而是留下了一條長條形的玻璃天窗。
      陽光從頂部垂直傾瀉而下，沿著內部格子樑（Grid Ribs）的線條柔和擴散。這不僅解決了深邃內部的採光問題，更創造了極具神聖感的光影體驗。`,
      skillLink: { label: '建築素養 · 環境採光設計', href: '/subjects/curriculum' },
    },
    {
      id: 'materials',
      name: '3. 面磚與耐候細節',
      question: '外牆的菱形黃色琉璃面磚除了美觀，還有什麼工程作用？',
      content: `外牆貼滿了菱形的面磚。黃色的琉璃面磚不僅回應了台灣中部的烈日光影，更形成了極佳的防水與耐候護層。
      面磚之間的勾縫細節考慮了熱脹冷縮，防止混凝土薄殼在長期暴露下產生微裂縫。`,
      skillLink: { label: '材料與試驗 · 瓷磚與面材裝修', href: '/subjects/materials' },
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      <CaseHero
        title="東海大學路思義教堂"
        location="台中市西屯區東海大學校區"
        architect="貝聿銘 (I.M. Pei) + 陳其寬"
        year="1963 年落成"
        question="為什麼四片牆既像屋頂又像結構？光從哪裡讓空間變莊嚴？"
        description="路思義教堂是台灣現代建築的里程碑。以四片雙曲面鋼筋混凝土薄殼立於大地，內部無任何柱子，展現力學結構與建築形式高度統一的極致美學。"
        category="結構與光 · 雙曲面薄殼"
        imageSrc={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/cases/luce-memorial-chapel-v2.webp`}
        imageAlt="路思義教堂橘色面磚雙曲薄殼、混凝土邊肋與頂部十字架的建築外觀"
      />

      <CaseVisualStudy
        title="從曲面外觀讀懂薄殼受力"
        photo="/cases/luce-memorial-chapel/photo.jpg"
        sketch="/cases/luce-memorial-chapel/sketch.png"
        photoAlt="由草地仰望路思義教堂的曲面薄殼、玻璃端牆與黃色面磚"
        sketchAlt="由實景照片衍生的路思義教堂建築工程草圖，呈現薄殼與基礎受力"
        observation="先比較照片與草圖的輪廓，再追蹤曲面如何把自重傳到地面；影像安排讓造型、材料與力流可以在同一視線中對讀。"
        readingGuide={[
          '看輪廓：四片曲面向上收束，端部玻璃讓殼體邊界更容易辨認。',
          '看表面：面磚保護混凝土，也把雙曲面的細微扭轉顯示出來。',
          '看落地：殼體在底部加厚並向外展開，把力導入連續基礎。',
        ]}
        credit={{
          label: 'Daderot／Wikimedia Commons',
          href: 'https://commons.wikimedia.org/wiki/File:Luce_Memorial_Chapel_-_Tunghai_University_-_DSC01696.JPG',
          license: 'CC0',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <LensSwitcher lenses={lenses} />

        <section className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mb-2">
            課綱連結與核心練習
          </h3>
          <p className="text-sm text-(--color-ink-650) mb-4">
            在統測專業科目（一）中，『自重與風壓力導引』是力學考試的常客。路思義教堂的形狀正是為了順應風壓與地心引力而生的幾何解答。
          </p>
          <Link
            href="/subjects/mechanics"
            className="inline-block px-4 py-2 bg-(--color-teal-700) text-(--color-paper-50) text-xs font-mono font-medium rounded hover:bg-opacity-90 transition-colors"
          >
            複習工程力學受力分析 →
          </Link>
        </section>
      </div>
    </div>
  );
}
