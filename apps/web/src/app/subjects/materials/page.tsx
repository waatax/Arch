import Link from 'next/link';

export default function MaterialsPage() {
  const topics = [
    { title: '1. 材料基本物理與力學性質', desc: '密度、孔隙率、含水率、吸水率、抗壓/抗拉強度與硬度比較。' },
    { title: '2. 木材構造與應用', desc: '邊材與心材、含水率對強度與收縮影響、集成材 (Glulam) 與木構設計。' },
    { title: '3. 混凝土構造與配比設計', desc: '水灰比 (W/C)、坍度試驗、圓柱試體抗壓試驗與養護天數。' },
    { title: '4. 水泥與粒料試驗', desc: '波特蘭水泥分類、細度模數 (FM)、細粒料與粗粒料篩析曲線。' },
    { title: '5. 金屬材料與防蝕', desc: '建築鋼材 (SS400, SN490)、屈伏點、拉伸試驗與熱浸鍍鋅防蝕處理。' },
    { title: '6. 綠建材與永續材料', desc: '健康綠建材、低 VOC 塗料、再生骨材與綠建築評估九大指標 (EEWH)。' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block">統測專業科目（一）</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          材料與試驗 (Building Materials & Testing)
        </h1>
        <p className="text-base text-(--color-ink-650)">
          從微觀的孔隙與水化反應，到宏觀的結構強度與綠建築標章。理解建築材料的物理與力學行為。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((t, idx) => (
          <div key={idx} className="p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-teal-700) transition-all">
            <h2 className="text-lg font-bold font-serif text-(--color-ink-900) mb-2">{t.title}</h2>
            <p className="text-sm text-(--color-ink-650) mb-4">{t.desc}</p>
            <span className="text-xs font-mono text-(--color-teal-700) font-medium">包含考點整理與試驗步驟圖解</span>
          </div>
        ))}
      </div>
    </div>
  );
}
