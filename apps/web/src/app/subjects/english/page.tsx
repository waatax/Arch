export default function EnglishPage() {
  const topics = [
    {
      title: '1. 字彙與片語',
      desc: '統測高頻 2000～4500 字彙、常用片語搭配與字根字首拆解學習法。',
      tags: ['統測必考', '基礎'],
    },
    {
      title: '2. 文法句型',
      desc: '五大基本句型、時態語態、關係子句、分詞構句與假設語氣。',
      tags: ['統測必考'],
    },
    {
      title: '3. 閱讀測驗',
      desc: '主旨大意、推論判斷、指代關係、圖表閱讀與跨領域文本理解。',
      tags: ['統測必考', '素養題'],
    },
    {
      title: '4. 對話與日常應用',
      desc: '情境會話、旅遊住宿餐飲用語、電話書信與職場基礎英語。',
      tags: ['統測必考'],
    },
    {
      title: '5. 克漏字與篇章結構',
      desc: '文意選填、轉折連接詞判斷、段落邏輯排列與篇章結構還原。',
      tags: ['統測必考'],
    },
    {
      title: '6. 翻譯與寫作基礎',
      desc: '中翻英句型練習、看圖寫作、簡短書信寫作與引導式作文。',
      tags: ['統測必考', '寫作'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-blueprint-700) uppercase tracking-widest block">
          統測共同科目 · 一般科目
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          英語文 (English)
        </h1>
        <p className="text-base text-(--color-ink-650) max-w-3xl leading-relaxed">
          英語文為統測共同科目之一。108 課綱強調溝通式教學與素養導向，考試題型涵蓋字彙、文法、閱讀理解及寫作能力評量。
        </p>
      </div>

      {/* 考試重點提示 */}
      <div className="p-5 bg-(--color-paper-100) border-l-4 border-(--color-blueprint-700) rounded-r-xl mb-8">
        <span className="text-xs font-mono font-bold text-(--color-blueprint-700) block mb-1 uppercase tracking-wider">
          統測配分
        </span>
        <p className="text-sm text-(--color-ink-900)">
          統測英文佔 100 分，全部為選擇題（字彙與片語、對話、綜合測驗、閱讀測驗）。重視生活情境應用與跨文本閱讀能力。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((t, idx) => (
          <div
            key={idx}
            className="card-lift p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-blueprint-700)/60 transition-all duration-300"
          >
            <h2 className="text-lg font-bold font-serif text-(--color-ink-900) mb-2">{t.title}</h2>
            <p className="text-sm text-(--color-ink-650) mb-4 leading-relaxed">{t.desc}</p>
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono bg-(--color-blueprint-700)/10 text-(--color-blueprint-700) px-2 py-0.5 rounded-full"
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
