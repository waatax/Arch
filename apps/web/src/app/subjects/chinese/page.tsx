export default function ChinesePage() {
  const topics = [
    {
      title: '1. 古典文學選讀',
      desc: '先秦諸子散文、唐宋古文八大家、韻文選讀與經典篇章背誦。',
      tags: ['統測必考', '閱讀理解'],
    },
    {
      title: '2. 現代文學與應用文',
      desc: '現代散文、小說選讀、書信公文格式與便條啟事寫作。',
      tags: ['統測必考', '寫作'],
    },
    {
      title: '3. 語文知識',
      desc: '字形字音辨正、成語典故、修辭技巧（譬喻排比映襯）與文法句型。',
      tags: ['統測必考'],
    },
    {
      title: '4. 閱讀理解與判讀',
      desc: '文章主旨分析、推論判讀、圖表資訊擷取與長文閱讀策略。',
      tags: ['統測必考', '素養題'],
    },
    {
      title: '5. 作文與表達',
      desc: '引導式寫作、論說文架構、描寫技巧與統測寫作評分指標分析。',
      tags: ['統測必考', '寫作'],
    },
    {
      title: '6. 文化常識',
      desc: '歲時節慶、書信稱謂、年齡代稱、對聯題辭與古典文化常識。',
      tags: ['統測必考'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-brick-700) uppercase tracking-widest block">
          統測共同科目 · 一般科目
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          國語文 (Chinese)
        </h1>
        <p className="text-base text-(--color-ink-650) max-w-3xl leading-relaxed">
          國語文為統測共同科目之一，涵蓋古典與現代文學選讀、語文知識、閱讀理解及寫作能力。108 課綱強調素養導向，著重文本判讀與跨領域應用。
        </p>
      </div>

      {/* 考試重點提示 */}
      <div className="p-5 bg-(--color-paper-100) border-l-4 border-(--color-brick-700) rounded-r-xl mb-8">
        <span className="text-xs font-mono font-bold text-(--color-brick-700) block mb-1 uppercase tracking-wider">
          統測配分
        </span>
        <p className="text-sm text-(--color-ink-900)">
          統測國文佔 100 分，含選擇題（語文知識、閱讀理解）與非選擇題（寫作測驗）。108 課綱新增素養導向題型，強調圖表判讀與跨文本比較。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((t, idx) => (
          <div
            key={idx}
            className="card-lift p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-brick-700)/60 transition-all duration-300"
          >
            <h2 className="text-lg font-bold font-serif text-(--color-ink-900) mb-2">{t.title}</h2>
            <p className="text-sm text-(--color-ink-650) mb-4 leading-relaxed">{t.desc}</p>
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono bg-(--color-brick-700)/10 text-(--color-brick-700) px-2 py-0.5 rounded-full"
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
