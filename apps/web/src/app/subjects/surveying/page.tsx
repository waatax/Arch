import Link from 'next/link';

export default function SurveyingPage() {
  const topics = [
    { title: '1. 距離與角度測量', desc: '捲尺測距、光學測距、水平角與垂直角觀測原理。' },
    { title: '2. 高程測量與水準儀', desc: '水準儀視準軸校正、後視與前視、高程計算表（高視高法與前後視法）。' },
    { title: '3. 儀器操作與整置', desc: '腳架架設、定心、整平、對光與消視差四步驟。' },
    { title: '4. 導線測量', desc: '閉合導線、附合導線、方位角推算與外業觀測注意事項。' },
    { title: '5. 座標計算與閉合差', desc: '緯距與經距計算、閉合比 (1/N) 評估與配賦修正。' },
    { title: '6. 面積計算與誤差處理', desc: '座標法求面積、海龍公式、系統誤差與隨機誤差（中誤差）計算。' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-blueprint-700) uppercase tracking-wider block">統測專業科目（二）</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          測量實習 (Surveying Practice)
        </h1>
        <p className="text-base text-(--color-ink-650)">
          將空間地理幾何化。學習精確使用儀器量測地表相對位置，並進行嚴密的數學計算與誤差調整。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((t, idx) => (
          <div key={idx} className="p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-blueprint-700) transition-all">
            <h2 className="text-lg font-bold font-serif text-(--color-ink-900) mb-2">{t.title}</h2>
            <p className="text-sm text-(--color-ink-650) mb-4">{t.desc}</p>
            <span className="text-xs font-mono text-(--color-blueprint-700) font-medium">包含計算範例與外業表格範本</span>
          </div>
        ))}
      </div>
    </div>
  );
}
