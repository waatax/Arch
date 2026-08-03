export default function PhysicsPage() {
  const topics = [
    {
      title: '1. 力學與運動',
      desc: '牛頓三大運動定律、等加速度運動、拋體運動與圓周運動。',
      tags: ['建築應用'],
    },
    {
      title: '2. 功與能量',
      desc: '功與功率、動能位能守恆、彈性碰撞與能量轉換應用。',
      tags: ['建築應用'],
    },
    {
      title: '3. 熱學',
      desc: '溫度與熱量、比熱與熱容量、熱傳導對流輻射與建築隔熱。',
      tags: ['建築應用', '綠建築'],
    },
    {
      title: '4. 波動與聲學',
      desc: '波的基本性質、聲波傳播、共振現象與建築隔音設計原理。',
      tags: ['建築應用'],
    },
    {
      title: '5. 光學',
      desc: '光的反射折射、透鏡成像、光強度與建築採光設計基礎。',
      tags: ['建築應用'],
    },
    {
      title: '6. 電學基礎',
      desc: '電流電壓電阻、歐姆定律、電功率與建築用電安全計算。',
      tags: ['實務應用'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-moss-700) uppercase tracking-widest block">
          一般科目 · 自然科學
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          物理 (Physics)
        </h1>
        <p className="text-base text-(--color-ink-650) max-w-3xl leading-relaxed">
          物理是理解建築結構行為的科學基礎。從力的分析到熱學光學，每個概念都能連結到建築設計與施工實務。
        </p>
      </div>

      <div className="p-5 bg-(--color-paper-100) border-l-4 border-(--color-moss-700) rounded-r-xl mb-8">
        <span className="text-xs font-mono font-bold text-(--color-moss-700) block mb-1 uppercase tracking-wider">
          與建築科的連結
        </span>
        <p className="text-sm text-(--color-ink-900)">
          物理概念直接應用於工程力學（力系分析）、建築物理環境（隔熱、隔音、採光）以及綠建築設計。理解物理有助於掌握專業科目核心原理。
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
