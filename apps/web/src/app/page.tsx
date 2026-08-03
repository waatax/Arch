import Link from 'next/link';
import SubjectCard from '@/components/SubjectCard';

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-(--color-paper-100) border-b border-(--color-concrete-300) py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center sm:text-left">
          <div className="inline-block bg-(--color-teal-700) text-(--color-paper-50) text-xs px-3 py-1 rounded font-mono mb-4">
            台灣高工建築科學習平台 · v3.0
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-serif text-(--color-ink-900) tracking-tight mb-6">
            看懂設計、學會概念、<br className="hidden sm:inline"/>
            動手做出屬於你的建築作品。
          </h1>
          <p className="text-lg sm:text-xl text-(--color-ink-650) max-w-3xl leading-relaxed mb-8">
            免登入即可學習。從一棟真實台灣建築或一道統測考點開始，帶你由「我可能不會」走到「我能做出來，而且我想成為其中的一員」。
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/curriculum"
              className="px-6 py-3 bg-(--color-teal-700) text-(--color-paper-50) font-medium rounded-lg hover:bg-opacity-90 transition-all shadow-sm"
            >
              瀏覽完整課程地圖
            </Link>
            <Link
              href="/cases/taichung-national-theater"
              className="px-6 py-3 bg-(--color-paper-50) text-(--color-ink-900) border border-(--color-concrete-300) font-medium rounded-lg hover:border-(--color-teal-700) transition-all"
            >
              探索首發案例：臺中國家歌劇院
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Architecture Case */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block">Taiwan Architecture Case Lab</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-(--color-ink-900)">台灣建築案例實驗室</h2>
          </div>
          <Link href="/cases" className="text-sm font-mono text-(--color-teal-700) hover:underline">
            查看全部 12 個案例 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono bg-(--color-paper-50) px-2 py-0.5 border border-(--color-concrete-300) rounded text-(--color-ink-650)">台中 · 形與建造</span>
              <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mt-3 mb-2">臺中國家歌劇院</h3>
              <p className="text-sm text-(--color-ink-650) mb-4">沒有平牆的建築，58 面曲牆如何作為結構主體？</p>
            </div>
            <Link href="/cases/taichung-national-theater" className="text-xs font-mono text-(--color-teal-700) font-bold hover:underline">
              進入案例閱讀 →
            </Link>
          </div>

          <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono bg-(--color-paper-50) px-2 py-0.5 border border-(--color-concrete-300) rounded text-(--color-ink-650)">台中 · 結構與光</span>
              <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mt-3 mb-2">東海路思義教堂</h3>
              <p className="text-sm text-(--color-ink-650) mb-4">四片薄殼如何既像屋頂又像結構？自然光如何雕塑空間？</p>
            </div>
            <Link href="/cases/luce-memorial-chapel" className="text-xs font-mono text-(--color-teal-700) font-bold hover:underline">
              進入案例閱讀 →
            </Link>
          </div>

          <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono bg-(--color-paper-50) px-2 py-0.5 border border-(--color-concrete-300) rounded text-(--color-ink-650)">台中 · 安全與記憶</span>
              <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mt-3 mb-2">921 地震教育園區</h3>
              <p className="text-sm text-(--color-ink-650) mb-4">建築如何面對地層錯動，以結構針縫合斷層與歷史傷痕？</p>
            </div>
            <Link href="/cases/921-earthquake-museum" className="text-xs font-mono text-(--color-teal-700) font-bold hover:underline">
              進入案例閱讀 →
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block">108 課綱與統測考科</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-(--color-ink-900)">核心學科與實習模組</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SubjectCard
            title="基礎工程力學"
            category="專業科目（一）"
            description="力系平衡、自由體圖、桁架分析、樑之剪力彎矩圖與應力應變概念。"
            href="/subjects/mechanics"
            topicsCount={7}
            tag="統測必考"
          />
          <SubjectCard
            title="材料與試驗"
            category="專業科目（一）"
            description="木材、混凝土、水泥粒料、金屬與綠建材之物理力學性質與檢驗法。"
            href="/subjects/materials"
            topicsCount={6}
            tag="統測必考"
          />
          <SubjectCard
            title="測量實習"
            category="專業科目（二）"
            description="距離角度高程測量、水準儀經緯儀操作、導線座標計算與閉合差處理。"
            href="/subjects/surveying"
            topicsCount={6}
            tag="術科/實作"
          />
          <SubjectCard
            title="製圖實習"
            category="專業科目（二）"
            description="線條字法、正投影、剖面圖判讀、建築平立剖面圖與尺寸標註圖例。"
            href="/subjects/drafting"
            topicsCount={8}
            tag="術科/實作"
          />
          <SubjectCard
            title="數學 C"
            category="統測共同科目"
            description="三角函數、向量與平面力學、代數、函數圖形與微積分基礎。"
            href="/subjects/math-c"
            topicsCount={6}
          />
          <SubjectCard
            title="建築科延伸與作品集"
            category="生涯與實作"
            description="空間觀察、建築構造、CAD/BIM繪圖、模型製作與升學作品集。"
            href="/subjects/extensions"
            topicsCount={5}
          />
        </div>
      </section>
    </div>
  );
}
