import Link from 'next/link';

export default function CasesPage() {
  const cases = [
    {
      slug: 'taichung-national-theater',
      title: '臺中國家歌劇院',
      region: '台中',
      category: '形與建造',
      question: '沒有平牆的建築，58 面曲牆如何作為結構主體？',
      architect: '伊東豊雄 Toyo Ito + ARUP',
    },
    {
      slug: 'luce-memorial-chapel',
      title: '東海大學路思義教堂',
      region: '台中',
      category: '結構與光',
      question: '為什麼四片牆既像屋頂又像結構？光從哪裡讓空間變莊嚴？',
      architect: '貝聿銘 + 陳其寬',
    },
    {
      slug: '921-earthquake-museum',
      title: '921 地震教育園區',
      region: '台中',
      category: '安全與記憶',
      question: '建築能不能不掩蓋傷痕，反而幫大家讀懂斷層錯動？',
      architect: '莊學能 / 栗生明',
    },
    {
      slug: 'taipei-101',
      title: '台北 101',
      region: '台北',
      category: '風與結構',
      question: '風看不見，為什麼大樓內部要懸掛巨大的黃色風阻尼器？',
      architect: '李祖原聯合建築師事務所',
    },
    {
      slug: 'beitou-library',
      title: '臺北市立圖書館北投分館',
      region: '台北',
      category: '木構造與綠建築',
      question: '深遮陽、木格柵與綠屋頂如何讓建築降溫並留住雨水？',
      architect: '九典聯合建築師事務所',
    },
    {
      slug: 'tpac',
      title: '臺北表演藝術中心',
      region: '台北',
      category: '空間組合與動線',
      question: '三個劇場塞進一個方盒，如何做到獨立運作又可合體？',
      architect: 'OMA 庫哈斯 Rem Koolhaas',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-10 max-w-3xl">
        <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block">Taiwan Architecture Case Lab</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          台灣建築案例實驗室
        </h1>
        <p className="text-base text-(--color-ink-650) leading-relaxed">
          用真實台灣建築反覆練習可遷移的閱讀方法。從好奇提問、六鏡頭剖析、圖面數據驗證到手作微任務，帶你看懂每一棟建築背後的科學與取捨。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((item) => (
          <div key={item.slug} className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-(--color-teal-700) transition-all">
            <div>
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <span className="text-xs font-mono bg-(--color-paper-50) px-2 py-0.5 border border-(--color-concrete-300) rounded text-(--color-ink-650)">
                  {item.region} · {item.category}
                </span>
              </div>
              <h2 className="text-xl font-bold font-serif text-(--color-ink-900) mb-2">
                {item.title}
              </h2>
              <p className="text-xs text-(--color-ink-650) mb-3 font-mono">
                {item.architect}
              </p>
              <p className="text-sm text-(--color-ink-900) mb-6 bg-(--color-paper-50) p-3 border-l-2 border-(--color-brick-700) rounded-r">
                「{item.question}」
              </p>
            </div>

            <Link
              href={`/cases/${item.slug}`}
              className="inline-block text-center w-full py-2.5 bg-(--color-teal-700) text-(--color-paper-50) text-xs font-mono font-medium rounded hover:bg-opacity-90 transition-colors"
            >
              進入六鏡頭解密 →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
