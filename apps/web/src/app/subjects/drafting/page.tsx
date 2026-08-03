import Link from 'next/link';

export default function DraftingPage() {
  const topics = [
    { title: '1. 線條種類與字法', desc: '粗實線、中實線、虛線、中心線、剖面線粗細規範與工程字體。' },
    { title: '2. 比例與尺度', desc: '1/100, 1/50, 1/20 比例尺運用與圖框號數 (A1, A2, A3)。' },
    { title: '3. 正投影視圖', desc: '第一角法與第三角法比較、前視圖、上視圖與右側視圖繪製。' },
    { title: '4. 剖面圖判讀', desc: '全剖面、半剖面、局部剖面與切面線標註符號。' },
    { title: '5. 建築平面圖', desc: '門窗圖例、牆體剖切線、柱網座標與房間名稱標註。' },
    { title: '6. 建築立面圖', desc: '地坪線 (GL)、樓層線 (FL)、外牆材料標註與人體高度比例。' },
    { title: '7. 尺寸標註與圖例', desc: 'CNS 建築製圖規範尺寸線、界限線、圓點與斜線標註法。' },
    { title: '8. CAD 繪圖基礎', desc: 'AutoCAD 圖層設定 (Layer)、標註型式 (Dimstyle) 與出圖比例。' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-blueprint-700) uppercase tracking-wider block">統測專業科目（二）</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          製圖實習 (Architectural Drafting Practice)
        </h1>
        <p className="text-base text-(--color-ink-650)">
          圖面是建築人的通用語言。精通 CNS 製圖規範，學習從三維空間轉換為精確的二維施工圖面。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((t, idx) => (
          <div key={idx} className="p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-blueprint-700) transition-all">
            <h2 className="text-lg font-bold font-serif text-(--color-ink-900) mb-2">{t.title}</h2>
            <p className="text-sm text-(--color-ink-650) mb-4">{t.desc}</p>
            <span className="text-xs font-mono text-(--color-blueprint-700) font-medium">包含自評 Rubric 與圖面範例</span>
          </div>
        ))}
      </div>
    </div>
  );
}
