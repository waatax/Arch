export default function ChemistryPage() {
  const topics = [
    {
      title: '1. 物質的組成與分類',
      desc: '元素週期表、原子結構、化學鍵結與物質三態變化。',
      tags: ['基礎'],
    },
    {
      title: '2. 化學反應',
      desc: '化學反應式平衡、莫耳概念、反應速率與化學平衡。',
      tags: ['基礎'],
    },
    {
      title: '3. 酸鹼與鹽',
      desc: 'pH 值與酸鹼中和、混凝土鹼骨材反應(AAR)與鋼筋腐蝕化學。',
      tags: ['建築應用'],
    },
    {
      title: '4. 氧化還原',
      desc: '氧化還原反應、電化學腐蝕、金屬防蝕鍍鋅與陰極保護。',
      tags: ['建築應用'],
    },
    {
      title: '5. 有機化學基礎',
      desc: '有機化合物分類、高分子聚合物（塑膠/環氧樹脂）與建材塗料。',
      tags: ['建材相關'],
    },
    {
      title: '6. 環境化學',
      desc: '空氣汙染與 VOC、水質檢測、綠建材甲醛釋出標準與碳足跡。',
      tags: ['綠建築', '永續'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-moss-700) uppercase tracking-widest block">
          一般科目 · 自然科學
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          化學 (Chemistry)
        </h1>
        <p className="text-base text-(--color-ink-650) max-w-3xl leading-relaxed">
          化學知識是理解建築材料性質的關鍵。從混凝土水化反應到鋼筋腐蝕防護，化學概念貫穿整個建築材料科學。
        </p>
      </div>

      <div className="p-5 bg-(--color-paper-100) border-l-4 border-(--color-moss-700) rounded-r-xl mb-8">
        <span className="text-xs font-mono font-bold text-(--color-moss-700) block mb-1 uppercase tracking-wider">
          與建築科的連結
        </span>
        <p className="text-sm text-(--color-ink-900)">
          化學直接關聯「材料與試驗」科目，理解水泥水化、混凝土劣化、金屬腐蝕等化學機制，才能做出正確的建材選用與維護決策。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((t, idx) => (
          <div
            key={idx}
            className="card-lift p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-moss-700)/60 transition-all duration-300"
          >
            <h2 className="text-lg font-bold font-serif text-(--color-ink-900) mb-2">{t.title}</h2>
            <p className="text-sm text-(--color-ink-650) mb-4 leading-relaxed">{t.desc}</p>
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono bg-(--color-moss-700)/10 text-(--color-moss-700) px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
