'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Copy, 
  Check, 
  Search, 
  Star,
  Zap
} from 'lucide-react';

interface FormulaCard {
  id: string;
  category: 'mechanics' | 'materials' | 'surveying' | 'drafting' | 'math';
  subjectName: string;
  title: string;
  formula: string;
  variables: Array<{ symbol: string; meaning: string; unit: string }>;
  examFrequency: number; // 1-5
  examTips: string;
  caution: string;
  latexCopy: string;
}

const cheatsheetData: FormulaCard[] = [
  // --- Mechanics ---
  {
    id: 'm1',
    category: 'mechanics',
    subjectName: '專業（一）工程力學',
    title: '靜力平衡方程式 (Equilibrium Equations)',
    formula: '∑Fx = 0, ∑Fy = 0, ∑M = 0',
    variables: [
      { symbol: '∑Fx', meaning: '水平方向所有外力與反力代數和', unit: 'kN 或 N' },
      { symbol: '∑Fy', meaning: '垂直方向所有外力與反力代數和', unit: 'kN 或 N' },
      { symbol: '∑Mo', meaning: '對任一特定參考點 O 的力矩代數和', unit: 'kN·m 或 N·mm' },
    ],
    examFrequency: 5,
    examTips: '所有靜力學與桁架解題的根基。若為非平行平面力系，最多可解 3 個獨立未知反力。',
    caution: '取力矩點時，優先選擇「未知力交會最多之處」，可直接消去該點未知力一次求出另一支承反力。',
    latexCopy: '\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0',
  },
  {
    id: 'm2',
    category: 'mechanics',
    subjectName: '專業（一）工程力學',
    title: '虎克定律與軸向桿件伸長量 (Axial Deformation)',
    formula: 'ΔL = (P · L) / (E · A)',
    variables: [
      { symbol: 'ΔL', meaning: '桿件受軸向拉伸或壓縮之變形量', unit: 'mm' },
      { symbol: 'P', meaning: '桿件承受之軸向內力', unit: 'N (牛頓)' },
      { symbol: 'L', meaning: '桿件原始長度', unit: 'mm' },
      { symbol: 'E', meaning: '材料彈性模數 (楊氏模數)', unit: 'MPa (N/mm²)' },
      { symbol: 'A', meaning: '桿件橫截面面積', unit: 'mm²' },
    ],
    examFrequency: 5,
    examTips: '統測常考「複合斷面鋼桿」或「串聯不同直徑桿件」之總變形量（逐段疊加 ΔL = ∑ (Pi·Li / Ei·Ai)）。',
    caution: '單位統一為標準大坑：必須全部轉為 N 與 mm，方可直接與 MPa (1 MPa = 1 N/mm²) 運算。',
    latexCopy: '\\Delta L = \\frac{P \\cdot L}{E \\cdot A}',
  },
  {
    id: 'm3',
    category: 'mechanics',
    subjectName: '專業（一）工程力學',
    title: '梁之最大彎曲正應力 (Flexural Stress Formula)',
    formula: 'σ_max = (M · y) / I = M / S',
    variables: [
      { symbol: 'σ', meaning: '梁截面距中性軸 y 處之彎曲正應力', unit: 'MPa (N/mm²)' },
      { symbol: 'M', meaning: '該截面承受之彎矩大小', unit: 'N·mm' },
      { symbol: 'y', meaning: '計算點至中性軸 (形心軸) 之垂直距離', unit: 'mm' },
      { symbol: 'I', meaning: '截面對中性軸之斷面二次矩 (慣性矩)', unit: 'mm⁴' },
      { symbol: 'S', meaning: '斷面模數 (Section Modulus, S = I / c)', unit: 'mm³' },
    ],
    examFrequency: 5,
    examTips: '矩形截面 b × h 之斷面模數 S = bh²/6；最大應力發生於距中性軸最遠之頂底外緣。',
    caution: '彎矩 M 題目通常給 kN·m，運算時代入公式前務必乘上 10⁶ 轉為 N·mm。',
    latexCopy: '\\sigma_{\\max} = \\frac{M \\cdot y_{\\max}}{I} = \\frac{M}{S}',
  },
  {
    id: 'm4',
    category: 'mechanics',
    subjectName: '專業（一）工程力學',
    title: '矩形梁之最大橫向剪應力 (Beam Shear Stress)',
    formula: 'τ_max = 1.5 · (V / A) = 3V / 2bh',
    variables: [
      { symbol: 'τ_max', meaning: '矩形斷面中性軸處之最大剪應力', unit: 'MPa' },
      { symbol: 'V', meaning: '該截面承受之總剪力', unit: 'N' },
      { symbol: 'A', meaning: '橫截面總面積 (b × h)', unit: 'mm²' },
      { symbol: 'V/A', meaning: '平均剪應力 τ_avg', unit: 'MPa' },
    ],
    examFrequency: 5,
    examTips: '矩形截面剪應力為拋物線分佈：上下外緣 τ = 0，中性軸處最大且恰為平均剪應力的 1.5 倍 (3/2)。圓形截面則為 4/3 ≈ 1.33 倍。',
    caution: '切勿將彎曲正應力（外緣最大、中性軸為零）與剪應力（中性軸最大、外緣為零）混淆。',
    latexCopy: '\\tau_{\\max} = 1.5 \\cdot \\frac{V}{A} = \\frac{3V}{2bh}',
  },
  {
    id: 'm5',
    category: 'mechanics',
    subjectName: '專業（一）工程力學',
    title: '尤拉長柱挫屈臨界載重 (Euler Column Buckling)',
    formula: 'P_cr = (π² · E · I) / (K · L)²',
    variables: [
      { symbol: 'P_cr', meaning: '長柱受壓發生挫屈的臨界軸力', unit: 'N' },
      { symbol: 'E', meaning: '材料彈性模數', unit: 'MPa' },
      { symbol: 'I', meaning: '截面弱軸之最小斷面二次矩 (I_min)', unit: 'mm⁴' },
      { symbol: 'K', meaning: '有效長度係數 (依兩端支承條件而定)', unit: '無單位' },
      { symbol: 'L', meaning: '柱未受支撐之實際長度', unit: 'mm' },
    ],
    examFrequency: 4,
    examTips: '有效長度係數 K：兩端鉸接 K=1.0；兩端固定 K=0.5；一端固定一端鉸接 K=0.7；一端固定一端自由 K=2.0。',
    caution: '挫屈永遠沿「慣性矩最小的弱軸」方向發生，計算必須取 I_min。',
    latexCopy: 'P_{cr} = \\frac{\\pi^2 E I}{(K L)^2}',
  },

  // --- Materials ---
  {
    id: 'mat1',
    category: 'materials',
    subjectName: '專業（一）材料與試驗',
    title: '混凝土水灰比與強度法則 (Abrams Water-Cement Ratio)',
    formula: 'W/C = 水重量 / 水泥重量, fc\' ∝ 1 / (W/C)',
    variables: [
      { symbol: 'W/C', meaning: '水灰比（水膠比）', unit: '重量比 (無單位)' },
      { symbol: 'fc\'', meaning: '混凝土 28 天標準圓柱試體抗壓強度', unit: 'kgf/cm² 或 MPa' },
    ],
    examFrequency: 5,
    examTips: '水灰比是決定混凝土抗壓強度、緻密度與抗滲耐久性的第一主因。水灰比越低，硬化後強度越高。',
    caution: '現場施工為提升流動性若任意加水，水灰比飆高將造成強度劇降與乾縮龜裂。',
    latexCopy: '\\text{W/C} = \\frac{W_{\\text{water}}}{W_{\\text{cement}}}, \\quad f\'_c = \\frac{A}{B^{\\text{W/C}}}',
  },
  {
    id: 'mat2',
    category: 'materials',
    subjectName: '專業（一）材料與試驗',
    title: '骨材細度模數 (Fineness Modulus, FM)',
    formula: 'FM = ∑(各號標準篩累積留存百分率) / 100',
    variables: [
      { symbol: 'FM', meaning: '細度模數 (指數越大代表顆粒平均越粗)', unit: '無單位' },
      { symbol: '累積留存 %', meaning: '由大孔徑至小孔徑各標準篩殘留重量總和百分比', unit: '%' },
    ],
    examFrequency: 4,
    examTips: '標準細骨材（砂）之 FM 值規範通常介於 2.3 ~ 3.1 之間；粗骨材 FM 通常在 6.0 ~ 8.0 之間。',
    caution: '計算時包含 7 個標準篩（不含底盤），務必注意是「累積留存」而非各篩單獨留存。',
    latexCopy: '\\text{FM} = \\frac{\\sum (\\text{Cumulative Retained \\%})}{100}',
  },

  // --- Surveying ---
  {
    id: 's1',
    category: 'surveying',
    subjectName: '專業（二）測量實習',
    title: '水準測量儀高法與高差法 (Leveling HI & Rise/Fall)',
    formula: 'HI = Elev_A + BS, Elev_B = HI - FS, ΔH = BS - FS',
    variables: [
      { symbol: 'HI', meaning: '視線高 (Height of Instrument)', unit: 'm' },
      { symbol: 'BS', meaning: '後視讀數 (Back Sight，加至前點高程)', unit: 'm' },
      { symbol: 'FS', meaning: '前視讀數 (Fore Sight，自視線高減去)', unit: 'm' },
      { symbol: 'ΔH', meaning: '兩測點間高程差 (前高後低或後高前低)', unit: 'm' },
    ],
    examFrequency: 5,
    examTips: '野外計算口訣：「後視加、前視減」。連續水準檢核：∑BS - ∑FS = 終點高程 - 起點高程。',
    caution: '水準尺氣泡未居中、水準儀視準軸未校正或前後視距不相等將導致累積誤差。',
    latexCopy: '\\text{HI} = \\text{Elev}_A + \\text{BS}, \\quad \\text{Elev}_B = \\text{HI} - \\text{FS}',
  },
  {
    id: 's2',
    category: 'surveying',
    subjectName: '專業（二）測量實習',
    title: '羅盤儀平差法 (Bowditch Compass Rule)',
    formula: 'Δx 改正數 = - (Lx / ∑L) · Wx, Δy 改正數 = - (Ly / ∑L) · Wy',
    variables: [
      { symbol: 'Lx, Ly', meaning: '該測線之緯距 (縱距) 或經距 (橫距) 長度', unit: 'm' },
      { symbol: '∑L', meaning: '導線總周長', unit: 'm' },
      { symbol: 'Wx, Wy', meaning: '導線閉合差之縱橫分量', unit: 'm' },
    ],
    examFrequency: 4,
    examTips: '羅盤儀法則假設「測角與量距之精度相當」，各邊之坐標改正量與「該邊邊長佔總周長之比例」成正比。',
    caution: '改正數正負號永遠與閉合差符號相反（即 - W）。',
    latexCopy: 'C_{\\Delta x_i} = - \\frac{L_i}{\\sum L} W_x, \\quad C_{\\Delta y_i} = - \\frac{L_i}{\\sum L} W_y',
  },

  // --- Drafting ---
  {
    id: 'd1',
    category: 'drafting',
    subjectName: '專業（二）製圖實習',
    title: 'CNS 11567 建築製圖線型與線寬階層 (Line Hierarchy)',
    formula: '粗線 (0.5mm) : 中線 (0.35mm) : 細線 (0.25mm) : 極細線 (0.18mm)',
    variables: [
      { symbol: '粗實線 (0.5)', meaning: '主要結構輪廓（如剖切牆、柱、梁輪廓）、地界線', unit: 'mm' },
      { symbol: '中實線 (0.35)', meaning: '次要輪廓、門窗框、家具、樓梯踏步', unit: 'mm' },
      { symbol: '細虛線 (0.25)', meaning: '不可見輪廓線（隱藏線）、上方突出梁線', unit: 'mm' },
      { symbol: '細單點鏈線 (0.18)', meaning: '中心線、建築定位軸線 (Grid Lines)', unit: 'mm' },
    ],
    examFrequency: 5,
    examTips: '線條優先順序：實線 (可見輪廓) > 虛線 (隱藏線) > 鏈線 (中心線) > 輔助線。交會處實線不可中斷。',
    caution: '虛線與實線相交時應接觸；虛線若為實線之延長線，交界處應留微小空隙。',
    latexCopy: '\\text{Line Ratio: } 0.5\\text{mm (Heavy)} : 0.35\\text{mm (Medium)} : 0.25\\text{mm (Light)}',
  },
  {
    id: 'd2',
    category: 'drafting',
    subjectName: '專業（二）製圖實習',
    title: 'CNS ISO 建築圖紙尺寸規格 (Drawing Sheet Sizes)',
    formula: 'A0 = 841×1189mm, A1 = 594×841mm, A2 = 420×594mm, A3 = 297×420mm',
    variables: [
      { symbol: 'A0 面積', meaning: '標準正一平方公尺 (1.0 m²)', unit: 'm²' },
      { symbol: '長寬比', meaning: '長邊比短邊恆為 √2 : 1 (約 1.414 : 1)', unit: '無單位' },
    ],
    examFrequency: 5,
    examTips: '由 A0 至 A4，每次沿長邊對折即可得到下一級尺寸，長寬比例保持不變。施工圖最常採用 A1 與 A3。',
    caution: '長度尺寸記牢：A0 (841×1189) → A1 (594×841) → A2 (420×594) → A3 (297×420) → A4 (210×297)。',
    latexCopy: 'A_n : \\text{Aspect Ratio } \\sqrt{2} : 1, \\quad A_0 = 841 \\times 1189\\text{ mm}',
  },

  // --- Mathematics C ---
  {
    id: 'math1',
    category: 'math',
    subjectName: '統測共同科目 數學（C）',
    title: '平面向量內積與夾角 (Vector Dot Product)',
    formula: 'u · v = |u| |v| cos θ = ux·vx + uy·vy',
    variables: [
      { symbol: 'u · v', meaning: '兩向量之純量積 (內積)', unit: '純量' },
      { symbol: 'θ', meaning: '兩向量之夾角 (0° ≤ θ ≤ 180°)', unit: '度或弧度' },
      { symbol: '垂直條件', meaning: 'u ⊥ v ⇔ u · v = 0', unit: '充要條件' },
    ],
    examFrequency: 5,
    examTips: '統測每年必考：利用內積求兩直線夾角或判定正交（力學力的分解與投影完全相通）。',
    caution: '內積計算結果為「數值 (純量)」，不是向量。',
    latexCopy: '\\vec{u} \\cdot \\vec{v} = |\\vec{u}||\\vec{v}| \\cos\\theta = u_x v_x + u_y v_y',
  },
  {
    id: 'math2',
    category: 'math',
    subjectName: '統測共同科目 數學（C）',
    title: '二次曲線標準式與頂點焦距 (Conic Sections)',
    formula: '拋物線: (y-k)² = 4c(x-h), 橢圓: (x-h)²/a² + (y-k)²/b² = 1',
    variables: [
      { symbol: '(h,k)', meaning: '中心點或頂點坐標', unit: '坐標' },
      { symbol: 'c', meaning: '頂點至焦點之焦距 (4c 為正焦弦長)', unit: '長度' },
      { symbol: 'a, b, c', meaning: '橢圓關係式: a² = b² + c² (長軸 2a, 焦點 2c)', unit: '長度' },
    ],
    examFrequency: 4,
    examTips: '建築拱圈、懸臂曲面最常用幾何模型。統測重點在於由方程式快速讀出對稱軸與頂點。',
    caution: '雙曲線與橢圓焦距關係式勿混淆：橢圓 a² = b² + c²，雙曲線 c² = a² + b²。',
    latexCopy: '\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1, \\quad a^2 = b^2 + c^2',
  },
];

export default function CheatsheetsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCards = cheatsheetData.filter((item) => {
    let matchesCat = true;
    if (activeCategory === 'five-star') {
      matchesCat = item.examFrequency === 5;
    } else if (activeCategory !== 'all') {
      matchesCat = item.category === activeCategory;
    }

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      item.title.toLowerCase().includes(q) || 
      item.formula.toLowerCase().includes(q) ||
      item.examTips.toLowerCase().includes(q) ||
      item.subjectName.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const handleCopyLatex = async (latex: string, id: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(latex);
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 space-y-10">
      {/* Header */}
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 dark:border-amber-900/80 bg-amber-50/80 dark:bg-amber-950/40 px-3.5 py-1 text-xs font-mono font-bold text-amber-700 dark:text-amber-300">
          <Zap className="size-3.5 text-amber-600 dark:text-amber-400" />
          Arch V8.02 統測考點高頻速查指南 (Cheatsheets)
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          考前衝刺必備：全科目高頻公式卡與圖例大全
        </h1>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          精選歷屆統測出題率最高之核心公式、變數物理量綱、記憶口訣與常犯陷阱警示。
          支援一鍵複製標準 LaTeX 算式。
        </p>
      </header>

      {/* Filter & Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 text-xs font-mono mobile-scroll">
            {[
              { id: 'all', label: '全部公式卡' },
              { id: 'five-star', label: '🔥 考前10分鐘必背 (5星)', highlight: true },
              { id: 'mechanics', label: '專業（一）力學' },
              { id: 'materials', label: '專業（一）材料' },
              { id: 'surveying', label: '專業（二）測量' },
              { id: 'drafting', label: '專業（二）製圖' },
              { id: 'math', label: '數學（C）' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? cat.id === 'five-star'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'bg-amber-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="搜尋公式、關鍵字或考點..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-mono placeholder:text-slate-400 focus:outline-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Formula Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredCards.map((card) => (
          <article
            key={card.id}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Card Meta & Star Rating */}
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400">
                  {card.subjectName}
                </span>
                <div className="flex items-center gap-1 text-amber-500" title={`出題頻率：${card.examFrequency} 顆星`}>
                  {Array.from({ length: card.examFrequency }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Title & Formula Display Box */}
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-950 dark:text-white">
                  {card.title}
                </h3>
                <div className="mt-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 p-4 border border-amber-200/80 dark:border-amber-900/50 flex items-center justify-between gap-3">
                  <code className="font-mono text-sm sm:text-base font-bold text-amber-950 dark:text-amber-200 tracking-wide overflow-x-auto">
                    {card.formula}
                  </code>
                  <button
                    onClick={() => handleCopyLatex(card.latexCopy, card.id)}
                    className="shrink-0 p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 hover:bg-white text-slate-700 dark:text-slate-300 border border-amber-300 dark:border-amber-800 transition-colors cursor-pointer"
                    title="複製 LaTeX 算式"
                    aria-label={`複製 ${card.title} 的 LaTeX 算式`}
                  >
                    {copiedId === card.id ? (
                      <Check className="size-4 text-emerald-600" />
                    ) : (
                      <Copy className="size-4 text-slate-500" />
                    )}
                  </button>
                </div>
              </div>

              {/* Variables breakdown */}
              <div className="space-y-2 text-xs font-mono">
                <span className="text-slate-400 text-[11px] font-bold block">符號物理意義與 SI 單位量綱：</span>
                <div className="grid gap-1.5 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  {card.variables.map((v) => (
                    <div key={v.symbol} className="flex justify-between items-start gap-2">
                      <strong className="text-blue-600 dark:text-blue-400 shrink-0">{v.symbol}</strong>
                      <span className="text-slate-600 dark:text-slate-300 flex-1">{v.meaning}</span>
                      <span className="text-slate-400 shrink-0">[{v.unit}]</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exam Tips & Pitfalls */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-slate-700 dark:text-slate-300">
                  <strong className="text-blue-800 dark:text-blue-300 font-mono block mb-1">🎯 統測實戰精要：</strong>
                  <p className="font-sans leading-relaxed">{card.examTips}</p>
                </div>
                <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 text-slate-700 dark:text-slate-300">
                  <strong className="text-rose-800 dark:text-rose-300 font-mono block mb-1">⚠️ 考生易錯陷阱：</strong>
                  <p className="font-sans leading-relaxed">{card.caution}</p>
                </div>
              </div>
            </div>

            {/* Link to full lesson */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-mono">
              <span className="text-slate-400">完整章節推導詳解</span>
              <Link
                href={`/subjects/${card.category === 'mechanics' ? 'mechanics' : card.category === 'materials' ? 'materials' : card.category === 'surveying' ? 'surveying' : card.category === 'math' ? 'math-c' : 'drafting'}`}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1"
              >
                進入章節學習 →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Footer Navigation */}
      <section className="rounded-3xl bg-slate-950 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-serif text-2xl font-bold">隨時帶著走，全站支援離線使用</h3>
          <p className="text-slate-400 text-sm max-w-lg">
            Arch 採本機優先設計，免登入、無廣告，公式卡與模擬器隨時隨地為您助攻。
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/practice"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 hover:bg-amber-500 px-5 py-3 font-mono text-xs font-bold text-white transition-colors"
          >
            進入歷屆統測模擬練習 →
          </Link>
        </div>
      </section>
    </div>
  );
}
