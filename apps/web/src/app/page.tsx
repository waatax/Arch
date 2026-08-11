import Link from 'next/link';
import SubjectCard from '@/components/SubjectCard';

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16 sm:pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xs font-mono px-3.5 py-1 font-bold shadow-xs">
              <span className="size-2 rounded-full bg-white animate-pulse" />
              108 課綱技術型高中 · 建築科自主學習平台
            </span>
            <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
              V6.20 正式版全上線
            </span>
          </div>

          <h1 className="text-3xl min-[390px]:text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            看懂設計、學會力學與測量、<br className="hidden sm:inline" />
            動手做出屬於你的建築作品。
          </h1>

          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            免登入、無廣告、本機優先。從一棟真實台灣建築或一道統測考點出發，以「生活直覺 → 概念圖解 → 白話定義 → 步驟化例題 → 統測驗證」六步架構，帶你從初學者穩步走到專業高分。
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 pt-2">
            <Link
              href="/curriculum"
              className="flex min-h-12 w-full sm:w-auto items-center justify-center px-6 py-3.5 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-all duration-200"
            >
              🗺️ 探索完整 86 章課程地圖
            </Link>
            <Link
              href="/practice"
              className="flex min-h-12 w-full sm:w-auto items-center justify-center px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 font-bold rounded-xl transition-all duration-200 shadow-2xs"
            >
              🎯 歷屆統測模擬練習 (925題)
            </Link>
            <Link
              href="/cases/taichung-national-theater"
              className="flex min-h-12 w-full sm:w-auto items-center justify-center px-6 py-3.5 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium rounded-xl transition-all duration-200"
            >
              🏛️ 首發案例：臺中國家歌劇院
            </Link>
            <Link
              href="/resources"
              className="flex min-h-12 w-full sm:w-auto items-center justify-center px-6 py-3.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800 hover:border-emerald-500 font-bold rounded-xl transition-all duration-200"
            >
              🔗 優質統測學習網站
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-slate-800/80 font-mono text-xs">
            <div className="rounded-xl bg-white dark:bg-slate-800/50 p-3 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">統測考科</span>
              <span className="text-base font-bold text-slate-900 dark:text-white">專一·專二·共同</span>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-800/50 p-3 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">全站教學節點</span>
              <span className="text-base font-bold text-blue-600 dark:text-blue-400">86 章正式課程</span>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-800/50 p-3 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">歷屆試題對照</span>
              <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">111–115 五年 925 題</span>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-800/50 p-3 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 block text-[10px]">互動模擬器</span>
              <span className="text-base font-bold text-amber-600 dark:text-amber-400">向量·梁·水準·投影</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6-Step Pedagogical Methodology Showcase ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1 font-bold">
            Pedagogical Standard
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white">
            專為初學者設計的六步學習法
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            打破「背公式」與「抽象符號」的學習挫折，讓每個建築與結構考點都能看得懂、做得出。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { step: '01', title: '生活情境與直覺提問', desc: '以 101 阻尼器、歌劇院曲牆或工地現場提出問題，激發真實好奇心。', color: 'blue' },
            { step: '02', title: '先看圖解與儀器視圖', desc: '觀察力向量箭頭、水準標尺或正投影圖面，建立直觀空間幾何概念。', color: 'teal' },
            { step: '03', title: '白話觀念與名詞精講', desc: '用生活日常語言完整解釋，首次出現的新術語立即給予清晰定義。', color: 'emerald' },
            { step: '04', title: '符號小卡與公式速查', desc: '每個符號標明定義、標準 SI 單位、正負號慣例與 1 鍵複製功能。', color: 'amber' },
            { step: '05', title: '步驟化示範題 (SOP)', desc: '已知 → 求解 → 單位統一 → 選公式 → 代入運算 → 物理常識檢核。', color: 'sky' },
            { step: '06', title: '統測對應與避坑指南', desc: '近五年統測考題實戰演練，對比常見易錯盲點，確保考場不失分。', color: 'indigo' },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-2 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                  STEP {item.step}
                </span>
                <span className="size-2 rounded-full bg-blue-500" />
              </div>
              <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Architecture Case Lab */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-1 font-bold">
              Taiwan Architecture Case Lab
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white">
              台灣建築案例實驗室
            </h2>
          </div>
          <Link
            href="/cases"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-mono text-teal-600 dark:text-teal-400 hover:underline font-bold"
          >
            查看全部 8 棟案例 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              location: '台中 · 形與建造',
              title: '臺中國家歌劇院',
              desc: '沒有平牆的建築，58 面曲牆如何作為結構主體？曲面鋼筋網架如何灌漿？',
              href: '/cases/taichung-national-theater',
            },
            {
              location: '台中 · 結構與光',
              title: '東海路思義教堂',
              desc: '四片雙曲薄殼如何兼具屋頂與結構受力？一線天頂光如何雕塑神聖空間？',
              href: '/cases/luce-memorial-chapel',
            },
            {
              location: '台中 · 安全與記憶',
              title: '921 地震教育園區',
              desc: '地層錯動隆起如何完整保留？斜拉鋼索膜結構如何保護斷層傷痕？',
              href: '/cases/921-earthquake-museum',
            },
          ].map((c) => (
            <div
              key={c.href}
              className="card-lift bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-teal-500 transition-all"
            >
              <div>
                <span className="text-[11px] font-mono bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full text-slate-600 dark:text-slate-400">
                  {c.location}
                </span>
                <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-3 mb-2">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {c.desc}
                </p>
              </div>
              <Link
                href={c.href}
                className="text-xs font-mono text-teal-600 dark:text-teal-400 font-bold hover:underline inline-flex items-center gap-1 group"
              >
                進入案例閱讀
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── 統測專業科目 ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-1 font-bold">
            108 課綱 · 統測專業核心考科
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white">
            專業科目（一）與專業科目（二）
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <SubjectCard
            title="基礎工程力學"
            category="專業科目（一）"
            description="力系平衡、自由體圖、桁架分析、簡支梁剪力與彎矩圖 (SFD/BMD) 與應力應變。"
            href="/subjects/mechanics"
            topicsCount={7}
            tag="統測必考"
          />
          <SubjectCard
            title="材料與試驗"
            category="專業科目（一）"
            description="水泥水化反應、骨材篩分析、混凝土坍度與抗壓強度試驗 (CNS/ASTM) 及鋼材拉伸。"
            href="/subjects/materials"
            topicsCount={12}
            tag="統測必考"
          />
          <SubjectCard
            title="測量實習"
            category="專業科目（二）"
            description="水準儀前後視高程計算 (HI法/高差法)、經緯儀測角消差、全測站 EDM 坐標正反算。"
            href="/subjects/surveying"
            topicsCount={6}
            tag="實作/計算"
          />
          <SubjectCard
            title="製圖實習"
            category="專業科目（二）"
            description="第三角投影法三視圖展開、剖面圖判讀、CNS 建築材料圖例、尺寸標註與 CAD 圖層規範。"
            href="/subjects/drafting"
            topicsCount={8}
            tag="術科/讀圖"
          />
        </div>
      </section>

      {/* ── 統測共同與基礎科目 ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono text-brick-700 uppercase tracking-widest block mb-1 font-bold">
            108 課綱 · 統測共同與基礎領域
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 dark:text-white">
            共同科目與自然、社會領域
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <SubjectCard
            title="國語文"
            category="統測共同科目"
            description="古典與現代文學選讀、語文知識修辭、空間論述判讀與寫作表達。"
            href="/subjects/chinese"
            topicsCount={6}
            tag="統測必考"
          />
          <SubjectCard
            title="英語文"
            category="統測共同科目"
            description="建築與工程專業字彙片語、文法句型、閱讀測驗與篇章結構。"
            href="/subjects/english"
            topicsCount={6}
            tag="統測必考"
          />
          <SubjectCard
            title="數學 C"
            category="統測共同科目"
            description="三角函數、向量幾何、空間力學數學模型與微積分基礎。"
            href="/subjects/math-c"
            topicsCount={6}
            tag="統測必考"
          />
          <SubjectCard
            title="物理"
            category="自然科學"
            description="結構運動力學、熱學隔熱傳導、光學自然採光與聲學吸音。"
            href="/subjects/physics"
            topicsCount={6}
          />
          <SubjectCard
            title="化學"
            category="自然科學"
            description="混凝土水化化學反應、鋼材防蝕電化學、聚合物塗料與綠建材。"
            href="/subjects/chemistry"
            topicsCount={6}
          />
          <SubjectCard
            title="建築科延伸與作品集"
            category="實務與升學"
            description="空間觀察、建築構造法規、BIM 電腦繪圖、模型製作與升學作品集指導。"
            href="/subjects/extensions"
            topicsCount={5}
          />
        </div>
      </section>
    </div>
  );
}
