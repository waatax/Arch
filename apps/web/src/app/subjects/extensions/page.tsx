import Link from 'next/link';

export default function ExtensionsPage() {
  const topics = [
    { title: '1. 空間設計與觀察', desc: '人體工學尺度（握手、步幅、桌高）、採光通風、動線評估與空間速寫。' },
    { title: '2. 建築構造與營建常識', desc: '獨立基礎與連續基礎、RC 鋼筋混凝土構造、S 鋼骨構造、牆體與門窗防水。' },
    { title: '3. 電腦輔助繪圖 (CAD/BIM)', desc: 'AutoCAD 快捷鍵、SketchUp 3D 建模、Revit BIM 專案檢視。' },
    { title: '4. 模型製作與升學作品集', desc: '風保紙板模型切割技巧、草圖掃描數位化、四技二專甄選備審資料排版。' },
    { title: '5. 證照與技能檢定', desc: '建築製圖應用丙級/乙級術科題庫拆解、測量技術士丙級檢定流程。' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block">校內與升學延伸</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          建築科專屬延伸與升學作品集
        </h1>
        <p className="text-base text-(--color-ink-650)">
          從手作模型到數位 BIM 繪圖，幫助學生建立可驗證的能力證據與優質的升學作品集。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((t, idx) => (
          <div key={idx} className="p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-teal-700) transition-all">
            <h2 className="text-lg font-bold font-serif text-(--color-ink-900) mb-2">{t.title}</h2>
            <p className="text-sm text-(--color-ink-650) mb-4">{t.desc}</p>
            <span className="text-xs font-mono text-(--color-teal-700) font-medium">包含作品歷程模範指標與實作 Rubric</span>
          </div>
        ))}
      </div>
    </div>
  );
}
