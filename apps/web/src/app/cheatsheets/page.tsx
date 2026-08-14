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
    examTips: '統測常考「複合斷面鋼桿」或「串聯不同直徑桿件」之總變形量（逐段疊加 $\Delta L_{\text{total}} = \sum \frac{P_i L_i}{E_i A_i}$）。',
    caution: '單位統一為標準大坑：必須全部轉為 N 與 mm，方可直接與 MPa ($1\text{ MPa} = 1\text{ N/mm}^2$) 運算。',
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
    examTips: '矩形截面 $b \times h$ 之斷面模數 $S = \frac{bh^2}{6}$；最大應力發生於距中性軸最遠之頂底外緣。',
    caution: '彎矩 $M$ 題目通常給 $\text{kN}\cdot\text{m}$，運算時代入公式前務必乘上 $10^6$ 轉為 $\text{N}\cdot\text{mm}$。',
    latexCopy: '\\sigma_{\\max} = \\frac{M \\cdot y_{\\max}}{I} = \\frac{M}{S}',
  },
  {
    id: 'm4',
    category: 'mechanics',
    subjectName: '專業（一）工程力學',
    title: '矩形梁之最大橫向剪應力 (Beam Shear Stress)',
    formula: 'τ_max = 1.5 · (V / A)',
    variables: [
      { symbol: 'τ_max', meaning: '矩形斷面中性軸處之最大剪應力', unit: 'MPa' },
      { symbol: 'V', meaning: '該截面承受之總剪力', unit: 'N' },
      { symbol: 'A', meaning: '橫截面總面積 (b × h)', unit: 'mm²' },
      { symbol: 'V/A', meaning: '平均剪應力 τ_avg', unit: 'MPa' },
    ],
    examFrequency: 4,
    examTips: '矩形截面剪應力為拋物線分佈：上下外緣 $\tau = 0$，中性軸處最大且恰為平均剪應力的 1.5 倍 (3/2)。圓形截面則為 $4/3 \approx 1.33$ 倍。',
    caution: '切勿將彎曲正應力（外緣最大、中性軸為零）與剪應力（中性軸最大、外緣為零）混淆。',
    latexCopy: '\\tau_{\\max} = 1.5 \\cdot \\frac{V}{A} = \\frac{3V}{2bh}',
  },
  {
    id: 'm5',
    category: 'mechanics',
    subjectName: '專業（一）工程力學',
    title: '尤拉長柱臨界挫屈載重 (Euler Buckling Load)',
    formula: 'P_cr = (π² · E · I) / Le²',
    variables: [
      { symbol: 'P_cr', meaning: '細長受壓柱發生側向挫屈之臨界軸向載重', unit: 'N 或 kN' },
      { symbol: 'E', meaning: '柱材料彈性模數', unit: 'MPa' },
      { symbol: 'I', meaning: '柱截面之弱軸慣性矩 (取較小者 I_min)', unit: 'mm⁴' },
      { symbol: 'Le', meaning: '有效長度 (Effective Length, Le = k · L)', unit: 'mm' },
    ],
    examFrequency: 4,
    examTips: '支承條件係數 $k$：兩端鉸接 $k=1.0$；一端固定一端自由 $k=2.0$；一端固定一端鉸接 $k=0.7$；兩端固定 $k=0.5$。',
    caution: '挫屈永遠沿著「弱軸（慣性矩 $I$ 較小之方向）」發生，計算時必須代入 $I_{\min}$。',
    latexCopy: 'P_{cr} = \\frac{\\pi^2 E I}{L_e^2}',
  },

  // --- Materials ---
  {
    id: 'mat1',
    category: 'materials',
    subjectName: '專業（一）材料與試驗',
    title: '水灰比與強度法則 (Abram\'s Law)',
    formula: 'W/C 比值越小，混凝土 28 天抗壓強度越高',
    variables: [
      { symbol: 'W', meaning: '單位體積混凝土用水量', unit: 'kg/m³' },
      { symbol: 'C', meaning: '單位體積水泥用量', unit: 'kg/m³' },
      { symbol: 'f\'c', meaning: '28 天標準圓柱抗壓強度', unit: 'kgf/cm² 或 MPa' },
    ],
    examFrequency: 5,
    examTips: '在完全密實與標準養護前提下，水灰比是決定硬化混凝土強度與耐久水密性的最關鍵因素。',
    caution: '水灰比過低（如 $<0.35$）雖強度潛力高，但工作性差易蜂窩；需搭配強塑劑（流化劑）使用。',
    latexCopy: '\\frac{W}{C} \\downarrow \\implies f\'_c \\uparrow',
  },
  {
    id: 'mat2',
    category: 'materials',
    subjectName: '專業（一）材料與試驗',
    title: '骨材細度模數 (Fineness Modulus, FM)',
    formula: 'FM = ∑(標準篩累積保留百分比) / 100',
    variables: [
      { symbol: 'FM', meaning: '骨材粗細程度之無因次指標', unit: '無單位' },
      { symbol: '標準篩', meaning: '細骨材 7 號篩：4.75mm (No.4) 至 0.15mm (No.100)', unit: 'mm' },
    ],
    examFrequency: 4,
    examTips: 'CNS 規範混凝土用細骨材 (砂) 之 FM 標準範圍為 2.3 ~ 3.1。FM 數值越大代表骨材平均顆粒越粗。',
    caution: '計算時使用「累積保留百分比 (Cumulative % Retained)」，而非「各篩單獨保留百分比」。',
    latexCopy: 'FM = \\frac{\\sum (\\text{Cumulative } \\% \\text{ Retained})}{100}',
  },
  {
    id: 'mat3',
    category: 'materials',
    subjectName: '專業（一）材料與試驗',
    title: '木材含水率公式 (Moisture Content)',
    formula: 'MC = [(W_w - W_d) / W_d] · 100%',
    variables: [
      { symbol: 'MC', meaning: '木材含水率 (Moisture Content)', unit: '%' },
      { symbol: 'W_w', meaning: '木材濕重 (試驗前質量)', unit: 'g' },
      { symbol: 'W_d', meaning: '木材烘乾後絕對乾重 (103±2°C 恆重)', unit: 'g' },
    ],
    examFrequency: 4,
    examTips: '纖維飽和點 (FSP, Fiber Saturation Point) 約為 25~30%。當含水率由 FSP 以下繼續降低時，木材方開始發生乾縮變形與強度提升。',
    caution: '分母是「絕對乾重 $W_d$」，絕非濕重 $W_w$。',
    latexCopy: 'MC = \\frac{W_w - W_d}{W_d} \\times 100\\%',
  },

  // --- Surveying ---
  {
    id: 's1',
    category: 'surveying',
    subjectName: '專業（二）測量實習',
    title: '水準測量儀高法與高差法 (Leveling Computations)',
    formula: 'HI = Elev_A + BS, Elev_B = HI - FS, ΔH = BS - FS',
    variables: [
      { symbol: 'HI', meaning: '視線高 (Height of Instrument)', unit: 'm' },
      { symbol: 'BS', meaning: '後視讀數 (Back Sight，已知點讀數)', unit: 'm' },
      { symbol: 'FS', meaning: '前視讀數 (Fore Sight，未知點讀數)', unit: 'm' },
      { symbol: 'ΔH', meaning: '兩點間之高程差 (升降高差)', unit: 'm' },
    ],
    examFrequency: 5,
    examTips: '計算檢核鐵律：$\sum BS - \sum FS = \text{末點高程} - \text{起點高程}$。',
    caution: '視準軸誤差可透過「前後視距等長 ($S_{BS} = S_{FS}$)」在計算高差時完全自動消除。',
    latexCopy: 'HI = Elev_A + BS, \\quad Elev_B = HI - FS, \\quad \\Delta H = BS - FS',
  },
  {
    id: 's2',
    category: 'surveying',
    subjectName: '專業（二）測量實習',
    title: '閉合多邊形導線內角和公式 (Polygon Angles Sum)',
    formula: '∑內角 = (n - 2) · 180°',
    variables: [
      { symbol: 'n', meaning: '閉合多邊形之邊數 (或頂點測站數)', unit: '邊' },
      { symbol: '∑外角', meaning: '閉合多邊形外角總和 = (n + 2) · 180°', unit: '度' },
    ],
    examFrequency: 4,
    examTips: '角度閉合差 $f_\beta = \sum \beta_{\text{實測}} - (n-2)\times 180^\circ$。配賦原則：將誤差反號平均分配至各內角。',
    caution: '注意題幹為「內角」或「外角」；若測量外角應使用 $(n+2)\times 180^\circ$。',
    latexCopy: '\\sum \\text{Interior Angles} = (n - 2) \\times 180^\\circ',
  },
  {
    id: 's3',
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
    caution: '改正數正負號永遠與閉合差符號相反（即 $- W$）。',
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
    examFrequency: 4,
    examTips: '由 A0 至 A4，每次沿長邊對折即可得到下一級尺寸，長寬比例保持不變。施工圖最常採用 A1 與 A3。',
    caution: '長度尺寸記牢：A0 (841×1189) → A1 (594×841) → A2 (420×594) → A3 (297×420) → A4 (210×297)。',
    latexCopy: 'A_n : \\text{Aspect Ratio } \\sqrt{2} : 1, \\quad A_0 = 841 \\times 1189\\text{ mm}',
  },
];

export default function CheatsheetsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCards = cheatsheetData.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
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
          Arch V7.3 統測高頻考點與速查指南
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
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 text-xs font-mono">
            {[
              { id: 'all', label: '全部公式卡' },
              { id: 'mechanics', label: '專業（一）力學' },
              { id: 'materials', label: '專業（一）材料' },
              { id: 'surveying', label: '專業（二）測量' },
              { id: 'drafting', label: '專業（二）製圖' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-sm'
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
                  <code className="font-mono text-sm sm:text-base font-bold text-amber-950 dark:text-amber-200 tracking-wide">
                    {card.formula}
                  </code>
                  <button
                    onClick={() => handleCopyLatex(card.latexCopy, card.id)}
                    className="shrink-0 p-2 rounded-lg bg-white/80 dark:bg-slate-900/80 hover:bg-white text-slate-700 dark:text-slate-300 border border-amber-300 dark:border-amber-800 transition-colors"
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
                href={`/subjects/${card.category === 'mechanics' ? 'mechanics' : card.category === 'materials' ? 'materials' : card.category === 'surveying' ? 'surveying' : 'drafting'}`}
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
