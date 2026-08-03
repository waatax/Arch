import Link from 'next/link';
import SubjectCard from '@/components/SubjectCard';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="hero-gradient border-b border-(--color-concrete-300) py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center sm:text-left">
          <div className="animate-fade-in-up inline-block bg-(--color-teal-700) text-(--color-paper-50) text-xs px-3.5 py-1 rounded-full font-mono tracking-wider mb-6">
            台灣高工建築科學習平台 · 108 課綱
          </div>
          <h1
            className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-(--color-ink-900) tracking-tight mb-6 leading-[1.2]"
            style={{ animationDelay: '0.1s' } as React.CSSProperties}
          >
            看懂設計、學會概念、<br className="hidden sm:inline"/>
            動手做出屬於你的建築作品。
          </h1>
          <p
            className="animate-fade-in-up text-lg sm:text-xl text-(--color-ink-650) max-w-3xl leading-relaxed mb-10"
            style={{ animationDelay: '0.2s' } as React.CSSProperties}
          >
            免登入即可學習。從一棟真實台灣建築或一道統測考點開始，帶你由「我可能不會」走到「我能做出來，而且我想成為其中的一員」。
          </p>

          <div
            className="animate-fade-in-up flex flex-wrap gap-4"
            style={{ animationDelay: '0.3s' } as React.CSSProperties}
          >
            <Link
              href="/curriculum"
              className="px-7 py-3.5 bg-(--color-teal-700) text-(--color-paper-50) font-medium rounded-xl hover:shadow-lg hover:shadow-(--color-teal-700)/20 transition-all duration-300 shadow-sm"
            >
              瀏覽完整課程地圖
            </Link>
            <Link
              href="/cases/taichung-national-theater"
              className="px-7 py-3.5 bg-(--color-paper-50) text-(--color-ink-900) border border-(--color-concrete-300) font-medium rounded-xl hover:border-(--color-teal-700) hover:shadow-md transition-all duration-300"
            >
              探索首發案例：臺中國家歌劇院
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Architecture Case */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-widest block mb-1">
              Taiwan Architecture Case Lab
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-(--color-ink-900)">
              台灣建築案例實驗室
            </h2>
          </div>
          <Link href="/cases" className="hidden sm:inline-flex items-center gap-1 text-sm font-mono text-(--color-teal-700) hover:underline underline-offset-4">
            查看全部案例 →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              location: '台中 · 形與建造',
              title: '臺中國家歌劇院',
              desc: '沒有平牆的建築，58 面曲牆如何作為結構主體？',
              href: '/cases/taichung-national-theater',
            },
            {
              location: '台中 · 結構與光',
              title: '東海路思義教堂',
              desc: '四片薄殼如何既像屋頂又像結構？自然光如何雕塑空間？',
              href: '/cases/luce-memorial-chapel',
            },
            {
              location: '台中 · 安全與記憶',
              title: '921 地震教育園區',
              desc: '建築如何面對地層錯動，以結構針縫合斷層與歷史傷痕？',
              href: '/cases/921-earthquake-museum',
            },
          ].map((c, i) => (
            <div
              key={c.href}
              className="card-lift bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 flex flex-col justify-between animate-fade-in-up"
              style={{ animationDelay: `${0.1 * i}s` } as React.CSSProperties}
            >
              <div>
                <span className="text-[11px] font-mono bg-(--color-paper-50) px-2.5 py-1 border border-(--color-concrete-300) rounded-full text-(--color-ink-650)">
                  {c.location}
                </span>
                <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mt-3 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-(--color-ink-650) mb-4 leading-relaxed">{c.desc}</p>
              </div>
              <Link
                href={c.href}
                className="text-xs font-mono text-(--color-teal-700) font-bold hover:underline underline-offset-4 inline-flex items-center gap-1 group"
              >
                進入案例閱讀
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:hidden text-center">
          <Link href="/cases" className="text-sm font-mono text-(--color-teal-700) hover:underline underline-offset-4">
            查看全部案例 →
          </Link>
        </div>
      </section>

      {/* ── 專業科目 Curriculum Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-widest block mb-1">
            108 課綱 · 統測專業科目
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-(--color-ink-900)">
            專業科目與實習模組
          </h2>
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
            title="建築科延伸與作品集"
            category="生涯與實作"
            description="空間觀察、建築構造、CAD/BIM繪圖、模型製作與升學作品集。"
            href="/subjects/extensions"
            topicsCount={5}
          />
        </div>
      </section>

      {/* ── 一般科目 ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono text-(--color-brick-700) uppercase tracking-widest block mb-1">
            108 課綱 · 統測共同 / 一般科目
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-(--color-ink-900)">
            一般科目
          </h2>
          <p className="text-sm text-(--color-ink-650) mt-2 max-w-2xl">
            統測共同科目（國、英、數）與部定必修一般科目（自然、社會領域），每科都與建築設計實務連結。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SubjectCard
            title="國語文"
            category="統測共同科目"
            description="古典與現代文學選讀、語文知識、閱讀理解判讀與作文寫作。"
            href="/subjects/chinese"
            topicsCount={6}
            tag="統測必考"
          />
          <SubjectCard
            title="英語文"
            category="統測共同科目"
            description="字彙片語、文法句型、閱讀測驗、會話應用與翻譯寫作基礎。"
            href="/subjects/english"
            topicsCount={6}
            tag="統測必考"
          />
          <SubjectCard
            title="數學 C"
            category="統測共同科目"
            description="三角函數、向量與平面力學、代數、函數圖形與微積分基礎。"
            href="/subjects/math-c"
            topicsCount={6}
            tag="統測必考"
          />
          <SubjectCard
            title="物理"
            category="自然科學"
            description="力學運動、熱學隔熱、聲學隔音、光學採光與電學安全計算。"
            href="/subjects/physics"
            topicsCount={6}
          />
          <SubjectCard
            title="化學"
            category="自然科學"
            description="混凝土水化反應、金屬腐蝕防護、高分子塗料與綠建材標準。"
            href="/subjects/chemistry"
            topicsCount={6}
          />
          <SubjectCard
            title="歷史"
            category="社會領域"
            description="台灣史、建築史脈絡、文化資產保存與都市發展的歷史面向。"
            href="/subjects/history"
            topicsCount={6}
          />
          <SubjectCard
            title="地理"
            category="社會領域"
            description="地形地質選址、氣候回應設計、都市規劃與 GIS 空間分析。"
            href="/subjects/geography"
            topicsCount={6}
          />
          <SubjectCard
            title="公民與社會"
            category="社會領域"
            description="建築法規基礎、工安倫理、居住正義、都更政策與環境評估。"
            href="/subjects/civics"
            topicsCount={6}
          />
        </div>
      </section>
    </div>
  );
}
