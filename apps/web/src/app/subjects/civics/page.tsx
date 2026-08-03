export default function CivicsPage() {
  const topics = [
    {
      title: '1. 公民身分與社群',
      desc: '公民素養、民主制度、法治觀念與公共參與的基本概念。',
      tags: ['108課綱'],
    },
    {
      title: '2. 法律與生活',
      desc: '民法（契約、物權）、建築相關法規（建築法、都市計畫法）基礎認識。',
      tags: ['建築應用', '法規'],
    },
    {
      title: '3. 經濟與永續',
      desc: '供需原理、市場機制、經濟發展與永續發展目標 (SDGs) 的建築面向。',
      tags: ['108課綱'],
    },
    {
      title: '4. 社會與文化',
      desc: '社會變遷、文化多元性、社會階層與居住正義議題探討。',
      tags: ['跨領域'],
    },
    {
      title: '5. 勞動與職業倫理',
      desc: '勞動基準法、職業安全衛生法、營造業工安規範與職業倫理。',
      tags: ['建築應用', '實務'],
    },
    {
      title: '6. 環境與公共政策',
      desc: '環境影響評估、都市更新條例、社會住宅政策與公共建設決策。',
      tags: ['建築應用', '都市規劃'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-sun-500) uppercase tracking-widest block">
          一般科目 · 社會領域
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          公民與社會 (Civics & Society)
        </h1>
        <p className="text-base text-(--color-ink-650) max-w-3xl leading-relaxed">
          公民與社會是培養法治素養與社會參與能力的核心科目。建築專業涉及大量法規、契約與公共政策，公民素養是進入職場的必備能力。
        </p>
      </div>

      <div className="p-5 bg-(--color-paper-100) border-l-4 border-(--color-sun-500) rounded-r-xl mb-8">
        <span className="text-xs font-mono font-bold text-(--color-sun-500) block mb-1 uppercase tracking-wider">
          與建築科的連結
        </span>
        <p className="text-sm text-(--color-ink-900)">
          建築法、都市計畫法、營造安全衛生、契約與工程倫理——公民與社會的知識是建築專業人員必備的法律與倫理基礎。
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
