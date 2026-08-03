import CaseHero from '@/components/CaseHero';
import CaseVisualStudy from '@/components/CaseVisualStudy';
import LensSwitcher from '@/components/LensSwitcher';
import Link from 'next/link';

export default function TaichungTheaterPage() {
  const lenses = [
    {
      id: 'purpose',
      name: '1. 人與目的',
      question: '這座歌劇院如何打破傳統封閉劇院的藩籬，讓任何人都能自由穿梭？',
      content: `歌劇院傳統上是極度封閉且階級分明的空間。伊東豊雄提出「洞窟（Sound Cave）」的概念，將一樓穿堂完全打通為公共無牆空間。民眾不必買票就能進入曲牆涵洞中感受聲音、光影與微風。
      在無障礙細節上，因曲牆沒有垂直牆面，所有的告示標誌、消防開關與座椅都經過特殊的特殊角度訂製，讓高矮身障者都能安全使用。`,
      skillLink: { label: '空間觀察與動線規劃', href: '/subjects/extensions' },
    },
    {
      id: 'structure',
      name: '2. 結構與建造',
      question: '沒有任何一根垂直樑柱，58 面曲牆如何支撐全館結構？',
      content: `臺中國家歌劇院採用世界首創的「連續雙曲面牆（Catoid）」結構。整體由 58 面曲牆單元組合而成。
      施工時採用鋼筋網綁紮與數位 3D 噴凝土（Shotcrete）技術，牆體厚度約在 40 至 80 公分之間。曲牆既是牆面、也是柱子、更是樓板的延伸，形成一個完美的自體受力殼體系統（Shell Structure）。`,
      skillLink: { label: '基礎工程力學 · 殼體與曲面力學', href: '/subjects/mechanics' },
    },
    {
      id: 'light-materials',
      name: '3. 形式與光',
      question: '牆上的「呼吸孔」與光線如何相互引導？',
      content: `曲牆上分佈著圓形的「呼吸孔（Breathing Holes）」，白天將自然的陽光引入室內洞窟，夜晚則將室內的溫暖燈光透過孔洞散發至外側七期重劃區的都市公園中。
      牆面塗料採用具有吸音與自然質感的特殊粉刷材料，減少巨大室內洞窟產生的迴音，讓聲音能在洞穴中順暢流動。`,
      skillLink: { label: '材料與試驗 · 吸音與表面塗料', href: '/subjects/materials' },
    },
    {
      id: 'drawing',
      name: '4. 製圖與投影',
      question: '三維雙曲面在二維平圖與剖面圖上該如何標註與剖切？',
      content: `傳統的正投影（平面圖、立面圖、剖面圖）很難精確表達歌劇院的曲牆幾何。
      建築團隊必須建立完整的 3D BIM（建築資訊模型）座標網格，並在二維施工圖上以「等高線（Contour Lines）」的方式標註曲牆在不同高度的切面變化，這打破了傳統建築製圖的規則。`,
      skillLink: { label: '製圖實習 · 剖面圖與 3D 幾何', href: '/subjects/drafting' },
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      <CaseHero
        title="臺中國家歌劇院"
        location="台中市西屯區"
        architect="伊東豊雄 (Toyo Ito) + 永峻工程"
        year="2016 年落成"
        question="沒有平牆的建築，樓板和門窗怎麼接上去？"
        description="臺中國家歌劇院以『美聲涵洞』為設計核心，放棄傳統的樑柱結構，改以 58 面連續曲牆支撐整體三座劇院空間，被譽為全球最難興建的建築之一。"
        category="形與建造 · 雙曲面結構"
        imageSrc={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/cases/taichung-national-theater.webp`}
        imageAlt="臺中國家歌劇院 (Taichung National Theater) 連續雙曲面牆的 3D 結構剖析圖"
      />

      <CaseVisualStudy
        title="從城市界面追蹤曲牆與洞穴空間"
        photo="/cases/taichung-national-theater/photo-v2.jpg"
        sketch="/cases/taichung-national-theater/sketch.png"
        photoAlt="臺中國家歌劇院外部水景與周邊高層都市環境的夜間實景"
        sketchAlt="由實景衍生的臺中國家歌劇院工程草圖，呈現曲牆、開口與殼體受力概念"
        observation="照片交代歌劇院與水景、廣場和高層街廓的關係；草圖放大曲牆與孔洞，讓學生從城市尺度逐步讀到結構尺度。"
        readingGuide={[
          '看基地：水景與廣場形成前景，拉開觀看曲面立面的距離。',
          '看開口：不規則洞口並非貼附裝飾，而是連續曲牆的一部分。',
          '看力流：曲面把樓板與牆整合，受力沿殼體向下傳到基礎。',
        ]}
        credit={{
          label: 'Xiquinho Silva／Wikimedia Commons',
          href: 'https://commons.wikimedia.org/wiki/File:2017-10-29_National_Taichung_Theater.jpg',
          license: 'CC BY 2.0',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Six Lenses Component */}
        <LensSwitcher lenses={lenses} />

        {/* Worked Example / Concept Bridge */}
        <section className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block mb-1">Concept Bridge · 概念橋</span>
          <h3 className="text-2xl font-bold font-serif text-(--color-ink-900) mb-4">
            從歌劇院曲牆看「殼體結構（Shell Structure）」
          </h3>
          <p className="text-sm text-(--color-ink-650) leading-relaxed mb-6">
            為什麼雞蛋殼那麼薄卻不容易壓破？因為當力量作用於曲面上時，力量會沿著表面方向以『薄膜拉應力與壓應力』均勻傳遞，而不產生極端的彎矩（Bending Moment）。歌劇院的曲牆就是利用這個力學原理！
          </p>

          <div className="bg-(--color-paper-50) border border-(--color-concrete-300) p-4 rounded-lg flex flex-col min-[440px]:flex-row min-[440px]:items-center min-[440px]:justify-between gap-4">
            <div>
              <span className="font-bold text-sm text-(--color-ink-900) block">關聯考點練習</span>
              <span className="text-xs text-(--color-ink-650)">基礎工程力學：應力應變與張力受力分析</span>
            </div>
            <Link
              href="/subjects/mechanics/force-equilibrium"
              className="inline-flex min-h-11 w-full min-[440px]:w-auto items-center justify-center px-4 py-2 bg-(--color-teal-700) text-(--color-paper-50) text-center text-xs font-mono font-medium rounded hover:bg-opacity-90 transition-colors"
            >
              練一題平衡題目 →
            </Link>
          </div>
        </section>

        {/* Studio Task */}
        <section className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-4 min-[380px]:p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono bg-(--color-brick-700) text-(--color-paper-50) px-2.5 py-1 rounded">20 分鐘微實作</span>
            <span className="text-xs font-mono text-(--color-ink-650)">材料：圖畫紙 2 張、剪刀、膠帶</span>
          </div>
          <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mb-2">
            手作任務：用平面紙張打造一個可站立的曲面洞窟
          </h3>
          <ol className="text-sm text-(--color-ink-650) space-y-3 list-decimal list-inside mb-6">
            <li>將一張 A4 紙裁成 4 條長條紙帶。</li>
            <li>嘗試將紙帶彎曲成拱形（Vault），並在兩端用膠帶固定於底板上。</li>
            <li>觀察：當你用手指從上方按壓拱頂時，力量是如何傳導至底部的？底座如果沒有固定會發生什麼事？</li>
            <li>反思：紀錄下當你加入第二個交叉拱時，整體的結構剛度（Rigidity）發生了什麼變化。</li>
          </ol>
          <div className="text-xs font-mono text-(--color-teal-700) bg-(--color-paper-50) p-3 rounded border border-(--color-concrete-300)">
            💡 拍照並將心得紀錄於你的『作品歷程』中，可作為四技二專甄選入學備審資料。
          </div>
        </section>
      </div>
    </div>
  );
}
