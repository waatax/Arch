export default function HistoryPage() {
  const topics = [
    {
      title: '1. 台灣史',
      desc: '原住民文化、荷西清治時期、日治近代化建設、戰後政治經濟發展與民主化。',
      tags: ['108課綱'],
    },
    {
      title: '2. 中國史',
      desc: '先秦至清代政經文化發展、近代變局、民國建立與兩岸關係。',
      tags: ['108課綱'],
    },
    {
      title: '3. 世界史',
      desc: '文藝復興、工業革命、兩次世界大戰、冷戰與全球化發展。',
      tags: ['108課綱'],
    },
    {
      title: '4. 建築史連結',
      desc: '台灣傳統建築（三合院、廟宇）、日治建築（巴洛克牌樓）、現代主義建築脈絡。',
      tags: ['建築素養', '跨領域'],
    },
    {
      title: '5. 文化資產保存',
      desc: '古蹟分級制度、歷史建築登錄、文化景觀與聚落保存再利用。',
      tags: ['建築素養', '實務'],
    },
    {
      title: '6. 社會變遷與空間',
      desc: '都市發展史、住宅政策演變、公共建設與社會正義的空間面向。',
      tags: ['跨領域'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-sun-500) uppercase tracking-widest block">
          一般科目 · 社會領域
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          歷史 (History)
        </h1>
        <p className="text-base text-(--color-ink-650) max-w-3xl leading-relaxed">
          歷史是理解建築文化脈絡的基礎。從台灣傳統聚落到現代都市發展，歷史視角讓建築設計不僅是技術，更是文化回應。
        </p>
      </div>

      <div className="p-5 bg-(--color-paper-100) border-l-4 border-(--color-sun-500) rounded-r-xl mb-8">
        <span className="text-xs font-mono font-bold text-(--color-sun-500) block mb-1 uppercase tracking-wider">
          與建築科的連結
        </span>
        <p className="text-sm text-(--color-ink-900)">
          建築是歷史的具體載體。學習歷史有助於理解不同時代的建築風格演變、文化資產保存的意義，以及城市規劃背後的社會因素。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((t, idx) => (
          <div
            key={idx}
            className="card-lift p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-sun-500)/60 transition-all duration-300"
          >
            <h2 className="text-lg font-bold font-serif text-(--color-ink-900) mb-2">{t.title}</h2>
            <p className="text-sm text-(--color-ink-650) mb-4 leading-relaxed">{t.desc}</p>
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono bg-(--color-sun-500)/10 text-(--color-sun-500) px-2 py-0.5 rounded-full"
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
