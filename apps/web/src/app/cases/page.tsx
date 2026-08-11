'use client';

import Link from 'next/link';
import Image from 'next/image';
import { globalArchitectureCases } from '@/data/globalArchitectureCases';

export default function CasesPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const cases = [
    {
      slug: 'taichung-national-theater',
      title: '臺中國家歌劇院',
      region: '台中',
      category: '形與建造',
      question: '沒有平牆的建築，58 面曲牆如何作為結構主體？',
      architect: '伊東豊雄 Toyo Ito + ARUP',
      image: '/cases/taichung-national-theater/photo-v2.jpg',
      regionGroup: '台灣',
    },
    {
      slug: 'luce-memorial-chapel',
      title: '東海大學路思義教堂',
      region: '台中',
      category: '結構與光',
      question: '為什麼四片牆既像屋頂又像結構？光從哪裡讓空間變莊嚴？',
      architect: '貝聿銘 + 陳其寬',
      image: '/cases/luce-memorial-chapel/photo.jpg',
      regionGroup: '台灣',
    },
    {
      slug: '921-earthquake-museum',
      title: '921 地震教育園區',
      region: '台中',
      category: '安全與記憶',
      question: '建築能不能不掩蓋傷痕，反而幫大家讀懂斷層錯動？',
      architect: '莊學能 / 栗生明',
      image: '/cases/921-earthquake-museum/photo.jpg',
      regionGroup: '台灣',
    },
    {
      slug: 'taipei-101',
      title: '台北 101',
      region: '台北',
      category: '風與結構',
      question: '風看不見，為什麼大樓內部要懸掛巨大的黃色風阻尼器？',
      architect: '李祖原聯合建築師事務所',
      image: '/cases/taipei-101/photo.jpg',
      regionGroup: '台灣',
    },
    {
      slug: 'beitou-library',
      title: '臺北市立圖書館北投分館',
      region: '台北',
      category: '木構造與綠建築',
      question: '深遮陽、木格柵與綠屋頂如何讓建築降溫並留住雨水？',
      architect: '九典聯合建築師事務所',
      image: '/cases/beitou-library/photo.jpg',
      regionGroup: '台灣',
    },
    {
      slug: 'tpac',
      title: '臺北表演藝術中心',
      region: '台北',
      category: '空間組合與動線',
      question: '三個劇場塞進一個方盒，如何做到獨立運作又可合體？',
      architect: 'OMA 庫哈斯 Rem Koolhaas',
      image: '/cases/tpac/photo.jpg',
      regionGroup: '台灣',
    },
    {
      slug: 'national-library-public-information',
      title: '國立公共資訊圖書館',
      region: '台中',
      category: '資訊流與曲面立面',
      question: '曲面外殼如何同時組織採光、樓層與閱讀動線？',
      architect: '九典聯合建築師事務所',
      image: '/cases/national-library-public-information/photo.jpg',
      regionGroup: '台灣',
    },
    {
      slug: 'kaohsiung-main-station',
      title: '高雄車站新站',
      region: '高雄',
      category: '交通建築與城市縫合',
      question: '雲朵天棚與綠之丘如何把鐵路兩側重新連在一起？',
      architect: 'Mecanoo',
      image: '/cases/kaohsiung-main-station/hero-v2.webp',
      regionGroup: '台灣',
    },
    ...globalArchitectureCases.map((item) => ({
      slug: item.slug,
      title: item.title,
      region: item.region,
      category: item.category.replace('空間現構', '空間網格'),
      question: item.question.replace('為何麼', '為何'),
      architect: item.architect,
      image: `/cases/${item.slug}/photo.jpg`,
      regionGroup: item.regionGroup,
    })),
  ];
  const regionOrder = ['台灣', '日本', '中國', '世界'] as const;
  const regionDescriptions = {
    '台灣': '從在地氣候、地震、城市與工藝讀懂我們身邊的建築。',
    '日本': '從光、透明性到大跨距，讀懂結構與空間的精準整合。',
    '中國': '從傳統木構禮制到當代超高層，比較不同時代的營造邏輯。',
    '世界': '透過現代建築經典，練習將自然、幾何、結構與設備連成系統。',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-10 max-w-3xl">
        <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block">Architecture Case Lab · Taiwan to the World</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          建築案例實驗室
        </h1>
        <p className="text-base text-(--color-ink-650) leading-relaxed">
          從台灣出發，延伸至日本、中國與世界經典，用真實建築反覆練習可遷移的閱讀方法。從好奇提問、實景觀察、工程圖解到學科連結，看懂建築背後的科學與取捨。
        </p>
      </div>

      <div className="space-y-14">
      {regionOrder.map((regionGroup) => {
        const regionCases = cases.filter((item) => item.regionGroup === regionGroup);
        return <section key={regionGroup} aria-labelledby={`region-${regionGroup}`}>
          <div className="mb-5 flex flex-col gap-1 border-b border-(--color-concrete-300) pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div><span className="text-xs font-mono uppercase tracking-wider text-(--color-brick-700)">{regionCases.length} cases</span><h2 id={`region-${regionGroup}`} className="font-serif text-2xl font-bold text-(--color-ink-900)">{regionGroup}代表建築</h2></div>
            <p className="max-w-2xl text-sm leading-relaxed text-(--color-ink-650)">{regionDescriptions[regionGroup]}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regionCases.map((item) => (
          <div key={item.slug} className="overflow-hidden bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl flex flex-col justify-between hover:border-(--color-teal-700) transition-all">
            <div>
              <Link
                href={`/cases/${item.slug}`}
                aria-label={`查看${item.title}案例`}
                className="group relative block aspect-[16/10] overflow-hidden bg-(--color-concrete-300) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-teal-700)"
              >
                <Image src={`${basePath}${item.image}`} alt={`${item.title}實景照片`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]" />
              </Link>
              <div className="p-5 sm:p-6 pb-0">
              <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.title + ' ' + item.region)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-(--color-paper-50) px-2 py-0.5 border border-(--color-concrete-300) rounded text-(--color-ink-650) hover:bg-(--color-concrete-200) transition-colors z-10 relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {item.region}
                  </a>
                  <span className="bg-(--color-paper-50) px-2 py-0.5 border border-(--color-concrete-300) rounded text-(--color-ink-650)">
                    {item.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-(--color-ink-650) mb-3 font-mono">
                {item.architect}
              </p>
              <p className="text-sm text-(--color-ink-900) mb-6 bg-(--color-paper-50) p-3 border-l-2 border-(--color-brick-700) rounded-r">
                「{item.question}」
              </p>
              </div>
            </div>

            <Link
              href={`/cases/${item.slug}`}
              className="m-5 sm:m-6 mt-0 inline-block text-center py-2.5 bg-(--color-teal-700) text-(--color-paper-50) text-xs font-mono font-medium rounded hover:bg-opacity-90 transition-colors"
            >
              進入案例解密 →
            </Link>
          </div>
        ))}
          </div>
        </section>;
      })}
      </div>
    </div>
  );
}
