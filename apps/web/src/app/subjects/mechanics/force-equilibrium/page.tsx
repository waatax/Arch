import Link from 'next/link';

export default function ForceEquilibriumPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-(--color-teal-700) mb-2">
          <Link href="/subjects/mechanics" className="hover:underline">基礎工程力學</Link>
          <span>/</span>
          <span>章節 02</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mb-4">
          力系與共點力平衡 (Force Systems & Equilibrium)
        </h1>
        <p className="text-base text-(--color-ink-650) leading-relaxed">
          建築物之所以能穩定靜止立於地面，是因為作用於其上的所有外力（自重、活載重、風壓）達到了動態平衡。
        </p>
      </div>

      {/* Concept Card 1: FBD */}
      <section className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold font-serif text-(--color-ink-900)">
          1. 自由體圖 (Free Body Diagram, FBD) 畫法三步驟
        </h2>
        <p className="text-sm text-(--color-ink-650) leading-relaxed">
          在解任何力學題目之前，必須先把研究對象從周圍環境中『隔離』出來，並畫出所有作用在其上的已知與未知力。
        </p>
        <div className="bg-(--color-paper-50) p-4 rounded-lg border border-(--color-concrete-300) space-y-2 text-sm text-(--color-ink-900)">
          <div className="flex gap-2">
            <span className="font-mono text-(--color-brick-700) font-bold">Step 1:</span>
            <span>選擇隔離體（例如一個節點、一根樑或整座橋樑）。</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono text-(--color-brick-700) font-bold">Step 2:</span>
            <span>畫出隔離體的外形輪廓，並標明已知的主動載重（如 W = 500 N）。</span>
          </div>
          <div className="flex gap-2">
            <span className="font-mono text-(--color-brick-700) font-bold">Step 3:</span>
            <span>移除接觸物體與支承（如鉸支承、滾支承），替換為對應的反力（Reactions）。</span>
          </div>
        </div>
      </section>

      {/* Concept Card 2: Equations */}
      <section className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold font-serif text-(--color-ink-900)">
          2. 平面共點力平衡方程式
        </h2>
        <p className="text-sm text-(--color-ink-650)">
          當作用於同一點的所有力落在同一平面內（2D 平面共點力系），平衡條件為合力等於零：
        </p>
        <div className="p-6 bg-(--color-paper-50) border-l-4 border-(--color-teal-700) rounded-r-lg font-mono text-center text-lg sm:text-xl text-(--color-ink-900) space-y-2">
          <div>∑ Fx = 0  （水平方向合力為零）</div>
          <div>∑ Fy = 0  （垂直方向合力為零）</div>
        </div>
      </section>

      {/* Practice Exam Question */}
      <section className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-xs font-mono bg-(--color-brick-700) text-(--color-paper-50) px-2.5 py-1 rounded">統測歷屆模擬題</span>
          <span className="text-xs font-mono text-(--color-ink-650)">難度: Core (b=1.0)</span>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-bold text-(--color-ink-900)">
            [題目] 一物體重 W = 100 N，由兩根繩索 A 與 B 懸掛於天花板。繩索 A 與水平面成 30° 角，繩索 B 與水平面成 60° 角。求繩索 A 的張力 TA 為多少？
          </h3>

          <div className="bg-(--color-paper-50) p-4 rounded-lg border border-(--color-concrete-300) space-y-3 text-sm">
            <div className="font-bold text-(--color-teal-700)">【詳細解題步驟】</div>
            <p>1. 繪製節點平衡之自由體圖，建立以懸掛點為原點的 x-y 座標系。</p>
            <p>2. 將張力分解為 x 與 y 分量：</p>
            <ul className="list-disc list-inside pl-4 font-mono text-xs space-y-1 text-(--color-ink-650)">
              <li>TAx = -TA · cos(30°), TAy = TA · sin(30°)</li>
              <li>TBx = TB · cos(60°), TBy = TB · sin(60°)</li>
              <li>Wy = -100 N</li>
            </ul>
            <p>3. 由 ∑ Fx = 0 ⇒ TA · cos(30°) = TB · cos(60°) ⇒ TB = TA · (√3 / 1) = √3 TA。</p>
            <p>4. 代入 ∑ Fy = 0 ⇒ TA · sin(30°) + TB · sin(60°) = 100</p>
            <p>5. TA · (0.5) + (√3 TA) · (√3 / 2) = 100 ⇒ 0.5 TA + 1.5 TA = 100 ⇒ 2 TA = 100 ⇒ <strong className="text-(--color-brick-700) font-mono text-base">TA = 50 N</strong>。</p>
          </div>
        </div>

        <div className="pt-4 border-t border-(--color-concrete-300) flex justify-between items-center text-xs font-mono">
          <span className="text-(--color-ink-650)">已完成提取練習證據</span>
          <Link href="/subjects/mechanics" className="text-(--color-teal-700) font-bold hover:underline">
            返回工程力學章節目錄 →
          </Link>
        </div>
      </section>
    </div>
  );
}
