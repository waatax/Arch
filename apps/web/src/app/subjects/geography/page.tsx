export default function GeographyPage() {
  const topics = [
    {
      title: '1. 地理環境與地形',
      desc: '台灣地形特徵、板塊運動與地震帶分布、地質構造與建築選址。',
      tags: ['建築應用'],
    },
    {
      title: '2. 氣候與環境',
      desc: '台灣氣候類型、季風降雨特性、都市熱島效應與建築氣候回應設計。',
      tags: ['建築應用', '綠建築'],
    },
    {
      title: '3. 人口與都市',
      desc: '人口分布與遷移、都市化過程、都市機能分區與土地使用規劃。',
      tags: ['都市規劃'],
    },
    {
      title: '4. 區域發展',
      desc: '台灣區域發展差異、產業空間分布、交通運輸網與區域計畫。',
      tags: ['108課綱'],
    },
    {
      title: '5. 環境議題',
      desc: '自然災害（颱風、地震、土石流）、環境衝擊評估與防災建築規劃。',
      tags: ['建築應用', '防災'],
    },
    {
      title: '6. 地理資訊系統',
      desc: 'GIS 基本概念、地圖判讀、遙測技術與都市空間分析應用。',
      tags: ['跨領域', '數位工具'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-sun-500) uppercase tracking-widest block">
          一般科目 · 社會領域
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          地理 (Geography)
        </h1>
        <p className="text-base text-(--color-ink-650) max-w-3xl leading-relaxed">
          地理是建築選址與環境回應設計的知識基礎。從地震帶認知到氣候回應設計，地理素養讓建築師做出因地制宜的設計決策。
        </p>
      </div>

      <div className="p-5 bg-(--color-paper-100) border-l-4 border-(--color-sun-500) rounded-r-xl mb-8">
        <span className="text-xs font-mono font-bold text-(--color-sun-500) block mb-1 uppercase tracking-wider">
          與建築科的連結
        </span>
        <p className="text-sm text-(--color-ink-900)">
          地理知識直接影響建築設計：了解地質構造才能做好基礎設計、了解氣候才能規劃通風採光、了解都市紋理才能做出好的都市設計。
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
