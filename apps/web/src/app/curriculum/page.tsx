import Link from 'next/link';

export default function CurriculumPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-widest block">Curriculum Map</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          台灣高工建築科 · 全科學習地圖
        </h1>
        <p className="text-base text-(--color-ink-650) max-w-3xl leading-relaxed">
          完全對齊 108 課綱與四技二專統測（土木與建築群）。涵蓋統測考科（國、英、數、專一、專二）與部定必修一般科目（自然、社會領域）。
        </p>
      </div>

      <div className="space-y-10">
        {/* ════════════════ 統測專業科目 ════════════════ */}

        {/* Section 1: 專一 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-brick-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">統測專一</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">專業科目（一）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-(--color-teal-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/mechanics" className="hover:text-(--color-teal-700) transition-colors">基礎工程力學</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 單位與向量 (Units & Vectors)</li>
                <li>• <Link href="/subjects/mechanics/force-equilibrium" className="text-(--color-teal-700) underline underline-offset-2 font-medium">力系與共點力平衡 (Equilibrium)</Link></li>
                <li>• 重心與形心計算 (Centroid)</li>
                <li>• 靜摩擦力與極限摩擦 (Friction)</li>
                <li>• 平面桁架分析 (Truss)</li>
                <li>• 靜定樑剪力圖與彎矩圖 (Beam)</li>
                <li>• 應力、應變與虎克定律 (Stress & Strain)</li>
              </ul>
            </div>

            <div className="border-l-2 border-(--color-teal-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/materials" className="hover:text-(--color-teal-700) transition-colors">材料與試驗</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 材料基本物理與力學性質</li>
                <li>• 木材分類、含水率與構造應用</li>
                <li>• 混凝土配比設計與抗壓試驗</li>
                <li>• 水泥水化反應與粒料篩析</li>
                <li>• 金屬材料拉伸試驗與防蝕</li>
                <li>• 綠建材與永續建築材料評估</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: 專二 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-blueprint-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">統測專二</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">專業科目（二）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-(--color-blueprint-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/surveying" className="hover:text-(--color-blueprint-700) transition-colors">測量實習</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 距與角度測量基本原理</li>
                <li>• 水準儀整置與高程計算表</li>
                <li>• 經緯儀度盤讀數與方位角</li>
                <li>• 導線測量外業與閉合差調整</li>
                <li>• 縱橫座標計算與面積剖分</li>
                <li>• 測量誤差來源與中誤差評估</li>
              </ul>
            </div>

            <div className="border-l-2 border-(--color-blueprint-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/drafting" className="hover:text-(--color-blueprint-700) transition-colors">製圖實習</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• CNS 建築製圖線條種類與字法</li>
                <li>• 比例尺使用與圖框尺寸</li>
                <li>• 第一角與第三角正投影</li>
                <li>• 正交剖面圖判讀與剖面線</li>
                <li>• 建築平面圖圖例與牆線繪製</li>
                <li>• 建築立面圖與外觀材料標註</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ════════════════ 統測共同科目 ════════════════ */}

        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-brick-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">統測共同</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">共同科目（國·英·數）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-(--color-brick-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/chinese" className="hover:text-(--color-brick-700) transition-colors">國語文</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 古典文學選讀</li>
                <li>• 現代文學與應用文</li>
                <li>• 語文知識（字音字形修辭）</li>
                <li>• 閱讀理解與判讀</li>
                <li>• 作文與表達</li>
                <li>• 文化常識</li>
              </ul>
            </div>

            <div className="border-l-2 border-(--color-brick-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/english" className="hover:text-(--color-brick-700) transition-colors">英語文</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 字彙與片語</li>
                <li>• 文法句型</li>
                <li>• 閱讀測驗</li>
                <li>• 對話與日常應用</li>
                <li>• 克漏字與篇章結構</li>
                <li>• 翻譯與寫作基礎</li>
              </ul>
            </div>

            <div className="border-l-2 border-(--color-brick-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/math-c" className="hover:text-(--color-brick-700) transition-colors">數學 C</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 三角函數與建築應用</li>
                <li>• 平面向量與力學分解</li>
                <li>• 代數與多項式</li>
                <li>• 函數與幾何圖形</li>
                <li>• 機率與統計</li>
                <li>• 微積分基礎</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ════════════════ 自然科學 ════════════════ */}

        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-moss-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">自然科學</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">自然科學領域</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-(--color-moss-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/physics" className="hover:text-(--color-moss-700) transition-colors">物理</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 力學與運動（牛頓定律）</li>
                <li>• 功與能量守恆</li>
                <li>• 熱學（建築隔熱）</li>
                <li>• 波動與聲學（隔音設計）</li>
                <li>• 光學（採光設計）</li>
                <li>• 電學基礎（用電安全）</li>
              </ul>
            </div>

            <div className="border-l-2 border-(--color-moss-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/chemistry" className="hover:text-(--color-moss-700) transition-colors">化學</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 物質組成與分類</li>
                <li>• 化學反應</li>
                <li>• 酸鹼與混凝土鹼骨材反應</li>
                <li>• 氧化還原與金屬防蝕</li>
                <li>• 有機化學（塗料/樹脂）</li>
                <li>• 環境化學（VOC/碳足跡）</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ════════════════ 社會領域 ════════════════ */}

        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-sun-500) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">社會領域</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">社會領域</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-(--color-sun-500) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/history" className="hover:text-(--color-sun-500) transition-colors">歷史</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 台灣史</li>
                <li>• 中國史</li>
                <li>• 世界史</li>
                <li>• 建築史連結</li>
                <li>• 文化資產保存</li>
                <li>• 社會變遷與空間</li>
              </ul>
            </div>

            <div className="border-l-2 border-(--color-sun-500) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/geography" className="hover:text-(--color-sun-500) transition-colors">地理</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 地形與地質（建築選址）</li>
                <li>• 氣候與環境回應設計</li>
                <li>• 人口與都市化</li>
                <li>• 區域發展</li>
                <li>• 環境議題與防災</li>
                <li>• 地理資訊系統 (GIS)</li>
              </ul>
            </div>

            <div className="border-l-2 border-(--color-sun-500) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/civics" className="hover:text-(--color-sun-500) transition-colors">公民與社會</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 公民素養與法治</li>
                <li>• 建築法規基礎</li>
                <li>• 經濟與永續 (SDGs)</li>
                <li>• 社會文化與居住正義</li>
                <li>• 勞動法規與工安倫理</li>
                <li>• 環境評估與公共政策</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: 建築素養與生涯 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-teal-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded-full">延伸</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">建築素養與生涯發展</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-base text-(--color-ink-900) mb-2">建築素養與觀察</h3>
              <p className="text-xs text-(--color-ink-650) leading-relaxed">人體尺度、採光通風、台灣建築史與都市公共空間思維。</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-(--color-ink-900) mb-2">作品集與升學</h3>
              <p className="text-xs text-(--color-ink-650) leading-relaxed">製圖丙檢、測量檢定、模型製作與四技二專甄選備審資料建立。</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-(--color-ink-900) mb-2">CAD / BIM 繪圖</h3>
              <p className="text-xs text-(--color-ink-650) leading-relaxed">AutoCAD 基本操作、Revit BIM 建模概念與數位設計工具。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
