import Link from 'next/link';

export default function CurriculumPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block">Curriculum Map</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          台灣高工建築科 · 全科學習地圖
        </h1>
        <p className="text-base text-(--color-ink-650)">
          完全對齊 108 課綱與四技二專統測（土木與建築群）。每個技能節點均連結真實建築情境與作品任務。
        </p>
      </div>

      <div className="space-y-10">
        {/* Section 1 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-brick-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded">統測專一</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">專業科目（一）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-(--color-teal-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/mechanics" className="hover:text-(--color-teal-700)">基礎工程力學</Link>
              </h3>
              <ul className="text-sm space-y-2 text-(--color-ink-650)">
                <li>• 單位與向量 (Units & Vectors)</li>
                <li>• <Link href="/subjects/mechanics/force-equilibrium" className="text-(--color-teal-700) underline font-medium">力系與共點力平衡 (Equilibrium)</Link></li>
                <li>• 重心與形心計算 (Centroid)</li>
                <li>• 靜摩擦力與極限摩擦 (Friction)</li>
                <li>• 平面桁架分析 (Truss)</li>
                <li>• 靜定樑剪力圖與彎矩圖 (Beam)</li>
                <li>• 應力、應變與虎克定律 (Stress & Strain)</li>
              </ul>
            </div>

            <div className="border-l-2 border-(--color-teal-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/materials" className="hover:text-(--color-teal-700)">材料與試驗</Link>
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

        {/* Section 2 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-blueprint-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded">統測專二</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">專業科目（二）</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-2 border-(--color-blueprint-700) pl-4">
              <h3 className="font-bold text-lg text-(--color-ink-900) mb-2">
                <Link href="/subjects/surveying" className="hover:text-(--color-blueprint-700)">測量實習</Link>
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
                <Link href="/subjects/drafting" className="hover:text-(--color-blueprint-700)">製圖實習</Link>
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

        {/* Section 3 */}
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-(--color-teal-700) text-(--color-paper-50) font-mono text-xs px-2.5 py-1 rounded">共同與延伸</span>
            <h2 className="text-2xl font-serif font-bold text-(--color-ink-900)">共同科目與建築素養</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-base text-(--color-ink-900) mb-2">數學 C</h3>
              <p className="text-xs text-(--color-ink-650) leading-relaxed">三角函數屋頂坡度、向量力學分解、面積幾何與微積分極值問題。</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-(--color-ink-900) mb-2">建築素養與觀察</h3>
              <p className="text-xs text-(--color-ink-650) leading-relaxed">人體尺度、採光通風、台灣建築史與都市公共空間思維。</p>
            </div>
            <div>
              <h3 className="font-bold text-base text-(--color-ink-900) mb-2">作品集與生涯</h3>
              <p className="text-xs text-(--color-ink-650) leading-relaxed">製圖丙檢、測量檢定、模型製作與四技二專甄選備審資料建立。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
