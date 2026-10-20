import React from 'react';

interface SvgProps {
  type: string;
  className?: string;
}

export default function PeriodicExamSvgIllustration({ type, className = 'w-full h-auto max-w-lg mx-auto' }: SvgProps) {
  switch (type) {
    // 1. 材料孔隙率與體積定義
    case 'materials-porosity':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="材料孔隙率與體積定義圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          
          {/* 左圖：多孔顆粒剖面 */}
          <g transform="translate(40, 45)">
            <rect x="0" y="0" width="130" height="130" fill="#e2e8f0" stroke="#475569" strokeWidth="2" rx="6" />
            <text x="65" y="25" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">多孔建材顆粒剖面</text>
            {/* 開口孔隙 (連接外部) */}
            <path d="M 0,50 Q 30,55 40,75 Q 20,95 0,90 Z" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />
            <text x="22" y="72" fontSize="9" fontWeight="bold" fill="#1e40af">開孔 (Vo)</text>
            {/* 閉口孔隙 (內部密封) */}
            <circle cx="95" cy="65" r="18" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="95" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#475569">閉孔 (Vc)</text>
            {/* 固體實體 */}
            <circle cx="65" cy="105" r="12" fill="#3b82f6" />
            <text x="65" y="109" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff">實體 Vs</text>
          </g>

          {/* 中間：箭頭與定義 */}
          <g transform="translate(195, 45)">
            <path d="M 0,65 L 30,65 M 22,58 L 30,65 L 22,72" stroke="#64748b" strokeWidth="2" fill="none" />
            <text x="45" y="30" fontSize="12" fontWeight="bold" fill="#0f172a">三種體積與比重層級</text>
            
            {/* 條狀對比 */}
            <rect x="45" y="45" width="260" height="22" fill="#dbeafe" stroke="#3b82f6" rx="4" />
            <text x="55" y="60" fontSize="10" fontWeight="bold" fill="#1e40af">真實體積 Vs ➜ 真實比重 (最大，無孔隙)</text>

            <rect x="45" y="75" width="260" height="22" fill="#e0f2fe" stroke="#0284c7" rx="4" />
            <text x="55" y="90" fontSize="10" fontWeight="bold" fill="#0369a1">表觀體積 (Vs + Vc) ➜ 表觀比重 (排除開孔)</text>

            <rect x="45" y="105" width="260" height="22" fill="#f1f5f9" stroke="#64748b" rx="4" />
            <text x="55" y="120" fontSize="10" fontWeight="bold" fill="#334155">總體體積 (Vs + Vc + Vo) ➜ 總體比重 (最小)</text>
          </g>

          {/* 底部總結 */}
          <rect x="40" y="185" width="460" height="22" fill="#fef3c7" stroke="#f59e0b" rx="4" />
          <text x="270" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">
            ★ 鐵律：真實比重 ＞ 表觀比重 ＞ 總體比重 ｜ 孔隙率 n ＝ 1 － (總體密度 ÷ 真實密度)
          </text>
        </svg>
      );

    // 2. 水泥四大熟料水化熱與強度
    case 'materials-clinker':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="波特蘭水泥四大熟料特性圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 坐標軸 */}
          <line x1="60" y1="160" x2="480" y2="160" stroke="#334155" strokeWidth="2" />
          <line x1="60" y1="160" x2="60" y2="40" stroke="#334155" strokeWidth="2" />
          <text x="480" y="175" textAnchor="end" fontSize="11" fill="#475569">水化齡期 (天數)</text>
          <text x="55" y="35" textAnchor="start" fontSize="11" fill="#475569">抗壓強度貢獻 / 放熱量</text>

          {/* C3A 曲線：迅速爆發 */}
          <path d="M 60,150 Q 80,45 130,45 L 470,50" stroke="#e11d48" strokeWidth="2.5" fill="none" />
          <text x="135" y="42" fontSize="10" fontWeight="bold" fill="#e11d48">C3A (發熱最高、初期急放、最不耐硫酸鹽)</text>

          {/* C3S 曲線：早期強度主力 */}
          <path d="M 60,155 Q 110,65 240,65 L 470,68" stroke="#2563eb" strokeWidth="2.5" fill="none" strokeDasharray="5 2" />
          <text x="245" y="65" fontSize="10" fontWeight="bold" fill="#2563eb">C3S (主導 7~28 天早期強度)</text>

          {/* C2S 曲線：後期持續攀升 */}
          <path d="M 60,158 Q 180,150 320,80 T 470,55" stroke="#059669" strokeWidth="3" fill="none" />
          <text x="360" y="95" fontSize="10" fontWeight="bold" fill="#059669">C2S (晚期 1 年以上強度超越)</text>

          {/* C4AF 曲線：平緩 */}
          <path d="M 60,158 Q 120,135 240,135 L 470,135" stroke="#64748b" strokeWidth="2" fill="none" />
          <text x="245" y="132" fontSize="10" fontWeight="bold" fill="#64748b">C4AF (灰色來源、強度貢獻最低)</text>

          {/* 口訣卡 */}
          <rect x="75" y="178" width="390" height="18" fill="#eff6ff" rx="3" />
          <text x="270" y="191" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">
            口訣：三大 (C3S) 快、二大 (C2S) 慢；大壩巨積防熱裂，低熱水泥少三大！
          </text>
        </svg>
      );

    // 3. CNS 1176 混凝土坍度試驗錐與量測
    case 'materials-slump':
      return (
        <svg viewBox="0 0 540 230" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="CNS 1176 混凝土坍度試驗圖解">
          <rect width="540" height="230" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="200" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 剛性底板 */}
          <rect x="40" y="180" width="460" height="10" fill="#64748b" rx="2" />
          <text x="50" y="202" fontSize="10" fill="#475569">剛性水平金屬底板</text>

          {/* 左側：未提錐前尺度標註 */}
          <g transform="translate(60, 25)">
            <text x="90" y="15" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">1. 坍度錐標準規格</text>
            <polygon points="65,30 115,30 140,155 40,155" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
            <line x1="65" y1="26" x2="115" y2="26" stroke="#2563eb" strokeWidth="1.5" />
            <text x="90" y="22" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">頂徑 10 cm</text>
            <line x1="40" y1="162" x2="140" y2="162" stroke="#2563eb" strokeWidth="1.5" />
            <text x="90" y="172" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">底徑 20 cm</text>
            <line x1="150" y1="30" x2="150" y2="155" stroke="#e11d48" strokeWidth="1.5" />
            <text x="165" y="95" fontSize="10" fontWeight="bold" fill="#e11d48">高 30 cm</text>
            <line x1="48" y1="113" x2="132" y2="113" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="56" y1="72" x2="124" y2="72" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
            <text x="90" y="138" textAnchor="middle" fontSize="8" fill="#475569">第1層 (25下)</text>
            <text x="90" y="96" textAnchor="middle" fontSize="8" fill="#475569">第2層 (25下)</text>
            <text x="90" y="55" textAnchor="middle" fontSize="8" fill="#475569">第3層 (25下)</text>
          </g>

          {/* 右側：提錐後坍度量測 */}
          <g transform="translate(290, 25)">
            <text x="100" y="15" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">2. 垂直提錐與坍度量測</text>
            <polygon points="175,30 205,30 215,155 165,155" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" />
            <line x1="50" y1="30" x2="215" y2="30" stroke="#334155" strokeWidth="3" />
            <path d="M 40,155 Q 70,80 100,80 Q 130,80 160,155 Z" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
            <circle cx="100" cy="80" r="3" fill="#e11d48" />
            <line x1="100" y1="30" x2="100" y2="80" stroke="#e11d48" strokeWidth="2" strokeDasharray="3 2" />
            <polygon points="100,30 96,38 104,38" fill="#e11d48" />
            <polygon points="100,80 96,72 104,72" fill="#e11d48" />
            
            <rect x="115" y="45" width="85" height="22" fill="#fee2e2" stroke="#ef4444" rx="4" />
            <text x="157" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">坍度 (Slump)</text>
            <text x="100" y="172" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0f172a">以「中心點」垂直落差為準</text>
          </g>
        </svg>
      );

    // 4. 水灰比與抗壓強度曲線 (Abrams 定律)
    case 'materials-water-cement':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="水灰比與混凝土強度反比曲線">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 坐標軸 */}
          <line x1="70" y1="160" x2="480" y2="160" stroke="#334155" strokeWidth="2" />
          <line x1="70" y1="160" x2="70" y2="40" stroke="#334155" strokeWidth="2" />
          <text x="480" y="175" textAnchor="end" fontSize="11" fill="#475569">水灰比 W/C (%)</text>
          <text x="65" y="32" textAnchor="start" fontSize="11" fill="#475569">28 天抗壓強度 f&apos;c (kgf/cm²)</text>

          {/* Abrams 曲線：下彎反比 */}
          <path d="M 90,55 Q 160,85 240,115 T 460,150" stroke="#2563eb" strokeWidth="3" fill="none" />
          <circle cx="150" cy="80" r="5" fill="#2563eb" />
          <text x="160" y="78" fontSize="10" fontWeight="bold" fill="#1e40af">W/C = 0.40 ➜ 強度高達 350 kgf/cm²</text>

          <circle cx="280" cy="125" r="5" fill="#e11d48" />
          <text x="290" y="125" fontSize="10" fontWeight="bold" fill="#b91c1c">W/C = 0.60 ➜ 強度驟降至 180 kgf/cm²</text>

          {/* 提示方塊 */}
          <rect x="90" y="175" width="410" height="20" fill="#eff6ff" rx="4" />
          <text x="295" y="189" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">
            ★ Abrams 水灰比定律：fc = A / B^(W/C) ｜ 水灰比每增加 0.05，抗壓強度大幅下滑！
          </text>
        </svg>
      );

    // 5. 木材纖維飽和點 (FSP) 與異向收縮
    case 'materials-wood-fsp':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="木材纖維飽和點與異向乾縮比例圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 左側：木材年輪剖面 */}
          <g transform="translate(50, 40)">
            <text x="75" y="15" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">木材三方向異向性</text>
            <circle cx="75" cy="85" r="55" fill="#fed7aa" stroke="#c2410c" strokeWidth="2" />
            <circle cx="75" cy="85" r="38" fill="none" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="75" cy="85" r="20" fill="none" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="75" cy="85" r="6" fill="#9a3412" />

            {/* 弦向箭頭 (切線) */}
            <path d="M 75,30 Q 110,35 125,65" stroke="#dc2626" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
            <text x="130" y="50" fontSize="9" fontWeight="bold" fill="#dc2626">弦向 (T)</text>

            {/* 徑向箭頭 (輻射) */}
            <line x1="75" y1="85" x2="25" y2="85" stroke="#2563eb" strokeWidth="2" />
            <text x="15" y="80" textAnchor="end" fontSize="9" fontWeight="bold" fill="#2563eb">徑向 (R)</text>

            {/* 縱向箭頭 (順紋垂直紙面) */}
            <text x="75" y="155" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#15803d">縱向 (L, 順紋軸向)</text>
          </g>

          {/* 右側：收縮比例與 FSP 門檻 */}
          <g transform="translate(230, 45)">
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#0f172a">纖維飽和點 (FSP ≈ 28~30%) 鐵律</text>
            
            <rect x="0" y="30" width="270" height="24" fill="#fee2e2" stroke="#ef4444" rx="4" />
            <text x="10" y="46" fontSize="10" fontWeight="bold" fill="#991b1b">弦向收縮 (Tangential) ➜ 最大 (約 6~10%)</text>

            <rect x="0" y="62" width="270" height="24" fill="#dbeafe" stroke="#3b82f6" rx="4" />
            <text x="10" y="78" fontSize="10" fontWeight="bold" fill="#1e40af">徑向收縮 (Radial) ➜ 次之 (約 3~5%)</text>

            <rect x="0" y="94" width="270" height="24" fill="#dcfce7" stroke="#10b981" rx="4" />
            <text x="10" y="110" fontSize="10" fontWeight="bold" fill="#065f46">縱向收縮 (Longitudinal) ➜ 最小 (約 0.1~0.3%)</text>

            <rect x="0" y="130" width="270" height="22" fill="#fef3c7" stroke="#f59e0b" rx="4" />
            <text x="135" y="145" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
              收縮比約為 弦向 : 徑向 : 縱向 ＝ 20 : 10 : 1
            </text>
          </g>

          <text x="270" y="202" textAnchor="middle" fontSize="10" fill="#475569">
            ★ 含水量降到 FSP 以下時，細胞壁吸著水開始逸散，木材才開始產生乾縮變形與強度提升！
          </text>
        </svg>
      );

    // 6. 骨材篩分析與級配曲線
    case 'materials-aggregate-sieve':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="骨材篩分析試驗與級配曲線">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 坐標軸 */}
          <line x1="70" y1="160" x2="480" y2="160" stroke="#334155" strokeWidth="2" />
          <line x1="70" y1="160" x2="70" y2="40" stroke="#334155" strokeWidth="2" />
          <text x="480" y="175" textAnchor="end" fontSize="10" fill="#475569">篩號 (對數尺度: #100 ➜ #50 ➜ #16 ➜ #4 ➜ 3/8&quot; ➜ 3/4&quot;)</text>
          <text x="65" y="32" textAnchor="start" fontSize="10" fill="#475569">通過累積百分比 (%)</text>

          {/* 規範上限與下限包絡線 */}
          <path d="M 80,155 Q 160,135 280,75 L 470,45" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
          <text x="475" y="45" fontSize="8" fill="#64748b">規範上限</text>

          <path d="M 80,158 Q 200,150 330,120 L 470,75" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
          <text x="475" y="78" fontSize="8" fill="#64748b">規範下限</text>

          {/* 良好級配曲線 (S 型位於中間) */}
          <path d="M 80,156 Q 180,145 300,98 L 470,60" stroke="#2563eb" strokeWidth="3" fill="none" />
          <circle cx="300" cy="98" r="4" fill="#2563eb" />
          <text x="310" y="95" fontSize="10" fontWeight="bold" fill="#1e40af">良好連續級配曲線 (Well-Graded)</text>

          {/* 細度模數 FM 說明框 */}
          <rect x="75" y="175" width="410" height="20" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="280" y="189" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">
            細度模數 FM ＝ (指定 9 號篩之「累積停留百分比總和」) ÷ 100 ｜ 砂之標準 FM ＝ 2.3 ~ 3.1
          </text>
        </svg>
      );

    // 7. 水準測量前後等距消差幾何
    case 'surveying-level-balance':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="水準測量前後等距消差幾何原理">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 地面曲線 */}
          <path d="M 40,170 Q 270,185 500,170" stroke="#64748b" strokeWidth="2" fill="none" />
          <text x="50" y="195" fontSize="10" fill="#64748b">地面 (Ground)</text>

          {/* 後視標尺 A */}
          <rect x="75" y="50" width="10" height="120" fill="#e2e8f0" stroke="#334155" strokeWidth="1.5" />
          <text x="80" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">後視尺 A</text>

          {/* 前視標尺 B */}
          <rect x="455" y="50" width="10" height="120" fill="#e2e8f0" stroke="#334155" strokeWidth="1.5" />
          <text x="460" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">前視尺 B</text>

          {/* 中間水準儀 */}
          <g transform="translate(270, 110)">
            <line x1="0" y1="10" x2="-25" y2="65" stroke="#334155" strokeWidth="2" />
            <line x1="0" y1="10" x2="25" y2="65" stroke="#334155" strokeWidth="2" />
            <line x1="0" y1="10" x2="0" y2="65" stroke="#334155" strokeWidth="2" />
            <rect x="-20" y="-8" width="40" height="16" fill="#3b82f6" stroke="#1d4ed8" rx="2" />
            <text x="0" y="-12" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">水準儀</text>
          </g>

          {/* 視線不平行 (i角誤差) 射線 */}
          <line x1="85" y1="110" x2="455" y2="110" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="270" y="98" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#059669">真水平視線</text>

          <line x1="85" y1="80" x2="455" y2="80" stroke="#e11d48" strokeWidth="2" />
          <text x="270" y="73" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#e11d48">視準軸傾斜視線 (i 角)</text>

          <line x1="85" y1="80" x2="85" y2="110" stroke="#e11d48" strokeWidth="1.5" />
          <text x="100" y="98" fontSize="9" fontWeight="bold" fill="#e11d48">+e1</text>
          
          <line x1="455" y1="80" x2="455" y2="110" stroke="#e11d48" strokeWidth="1.5" />
          <text x="440" y="98" fontSize="9" fontWeight="bold" fill="#e11d48">+e2</text>

          {/* 等距標註 */}
          <line x1="85" y1="140" x2="270" y2="140" stroke="#2563eb" strokeWidth="1.5" />
          <text x="175" y="135" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2563eb">後視距 d1</text>

          <line x1="270" y1="140" x2="455" y2="140" stroke="#2563eb" strokeWidth="1.5" />
          <text x="365" y="135" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2563eb">前視距 d2 (d1 = d2)</text>

          <rect x="40" y="175" width="460" height="20" fill="#fef2f2" stroke="#f87171" rx="4" />
          <text x="270" y="189" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">
            前後視距等長時：高低差 Δh = (BS + e1) - (FS + e2) ＝ BS - FS ➜ i 角誤差與球折差全數自動抵消！
          </text>
        </svg>
      );

    // 8. 經緯儀三軸幾何關係與正倒鏡消差
    case 'surveying-theodolite-axes':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="經緯儀三軸幾何關係與正倒鏡消差">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 左圖：三軸正交立體構圖 */}
          <g transform="translate(130, 110)">
            {/* 垂直軸 VV */}
            <line x1="0" y1="-80" x2="0" y2="70" stroke="#2563eb" strokeWidth="2.5" />
            <text x="5" y="-75" fontSize="10" fontWeight="bold" fill="#2563eb">垂直軸 VV (旋轉軸)</text>

            {/* 橫軸 HH (水平軸) */}
            <line x1="-90" y1="0" x2="90" y2="0" stroke="#e11d48" strokeWidth="2.5" />
            <text x="85" y="-6" fontSize="10" fontWeight="bold" fill="#e11d48">橫軸 HH</text>

            {/* 視準軸 CC (望遠鏡照準線) */}
            <line x1="-60" y1="40" x2="60" y2="-40" stroke="#059669" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="65" y="-40" fontSize="10" fontWeight="bold" fill="#059669">視準軸 CC</text>

            {/* 水準管軸 LL */}
            <rect x="-45" y="30" width="90" height="12" fill="#fed7aa" stroke="#c2410c" rx="3" />
            <text x="0" y="40" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9a3412">水準管軸 LL</text>
          </g>

          {/* 右側：四大幾何條件與消差法 */}
          <g transform="translate(260, 35)">
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#0f172a">經緯儀三大必考軸線關係</text>

            <div className="space-y-1">
              <text x="0" y="35" fontSize="10" fontWeight="bold" fill="#1e40af">① LL ⟂ VV：水準管軸 應垂直 垂直軸 (定平)</text>
              <text x="0" y="55" fontSize="10" fontWeight="bold" fill="#b91c1c">② CC ⟂ HH：視準軸 應垂直 橫軸 (視準誤差)</text>
              <text x="0" y="75" fontSize="10" fontWeight="bold" fill="#065f46">③ HH ⟂ VV：橫軸 應垂直 垂直軸 (橫軸誤差)</text>
            </div>

            <rect x="0" y="90" width="245" height="48" fill="#fef3c7" stroke="#f59e0b" rx="4" />
            <text x="10" y="106" fontSize="10" fontWeight="bold" fill="#92400e">★ 段考必考：正倒鏡觀測平均法！</text>
            <text x="10" y="122" fontSize="9" fill="#78350f">可消除：視準軸誤差 (c)、橫軸誤差 (i)、盤度偏心差</text>
            <text x="10" y="132" fontSize="9" fontWeight="bold" fill="#dc2626">「無法消除」：垂直軸傾斜誤差 (需靠定平消除)</text>
          </g>

          <rect x="40" y="180" width="460" height="18" fill="#eff6ff" rx="3" />
          <text x="270" y="193" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1d4ed8">
            水平角觀測：角值 ＝ 倒鏡讀數 ± 180° 與 正鏡讀數 取平均值
          </text>
        </svg>
      );

    // 9. 閉合導線測量與閉合差計算
    case 'surveying-traverse-loop':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="閉合導線測量坐標增量與閉合差向量">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 閉合五邊形導線環 */}
          <g transform="translate(60, 40)">
            <polygon points="40,110 90,30 200,20 230,100 150,130" fill="none" stroke="#2563eb" strokeWidth="2.5" />
            
            {/* 各點圓圈 */}
            <circle cx="40" cy="110" r="5" fill="#1e40af" />
            <text x="25" y="115" fontSize="11" fontWeight="bold" fill="#1e40af">A (起點)</text>

            <circle cx="90" cy="30" r="5" fill="#1e40af" />
            <text x="85" y="20" fontSize="11" fontWeight="bold" fill="#1e40af">B</text>

            <circle cx="200" cy="20" r="5" fill="#1e40af" />
            <text x="210" y="20" fontSize="11" fontWeight="bold" fill="#1e40af">C</text>

            <circle cx="230" cy="100" r="5" fill="#1e40af" />
            <text x="240" y="105" fontSize="11" fontWeight="bold" fill="#1e40af">D</text>

            <circle cx="150" cy="130" r="5" fill="#1e40af" />
            <text x="150" y="148" fontSize="11" fontWeight="bold" fill="#1e40af">E</text>

            {/* 閉合差向量放大顯現 (A' 不重合 A) */}
            <line x1="150" y1="130" x2="48" y2="114" stroke="#e11d48" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="48" cy="114" r="4" fill="#e11d48" />
            <text x="55" y="130" fontSize="9" fontWeight="bold" fill="#e11d48">閉合差 W</text>
          </g>

          {/* 右側：坐標增量與改正公式 */}
          <g transform="translate(300, 35)">
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#0f172a">導線計算核心公式</text>
            
            <div className="space-y-1.5 pt-2">
              <text x="0" y="35" fontSize="10" fill="#334155">縱坐標增量：ΔX ＝ S × sin(方位角 φ)</text>
              <text x="0" y="52" fontSize="10" fill="#334155">橫坐標增量：ΔY ＝ S × cos(方位角 φ)</text>
              <text x="0" y="70" fontSize="10" fontWeight="bold" fill="#e11d48">位置閉合差：W ＝ √(wx² + wy²)</text>
              <text x="0" y="88" fontSize="10" fontWeight="bold" fill="#2563eb">導線精度：K ＝ 1 / (周長 ∑S ÷ W)</text>
            </div>

            <rect x="0" y="102" width="215" height="40" fill="#eff6ff" stroke="#93c5fd" rx="4" />
            <text x="8" y="118" fontSize="9" fontWeight="bold" fill="#1e40af">羅盤儀法則 (Bowditch)：</text>
            <text x="8" y="132" fontSize="9" fill="#1e3a8a">邊長改正數 ＝ - (該邊邊長 ÷ 總周長) × 閉合差</text>
          </g>

          <rect x="40" y="180" width="460" height="18" fill="#fef2f2" rx="3" />
          <text x="270" y="193" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">
            理想要件：閉合導線 ∑ΔX ＝ 0, ∑ΔY ＝ 0 ｜ 若不等於 0 則產生閉合差需平差分配！
          </text>
        </svg>
      );

    // 10. 鞋帶公式 (Gauss 坐標法計算任意多邊形面積)
    case 'surveying-shoelace-area':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="鞋帶公式坐標法多邊形面積計算">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 坐標鞋帶陣列圖 */}
          <g transform="translate(60, 45)">
            <text x="80" y="10" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">坐標列矩陣 (順時針/逆時針)</text>
            
            {/* 兩排坐標 X 與 Y */}
            <g transform="translate(20, 25)" fontSize="11" fontFamily="monospace" fontWeight="bold">
              <text x="0" y="20" fill="#2563eb">X1</text><text x="60" y="20" fill="#059669">Y1</text>
              <text x="0" y="45" fill="#2563eb">X2</text><text x="60" y="45" fill="#059669">Y2</text>
              <text x="0" y="70" fill="#2563eb">X3</text><text x="60" y="70" fill="#059669">Y3</text>
              <text x="0" y="95" fill="#2563eb">X1</text><text x="60" y="95" fill="#059669">Y1 (回到起點)</text>

              {/* 右下斜線 (正項) */}
              <line x1="20" y1="18" x2="55" y2="42" stroke="#dc2626" strokeWidth="2" />
              <line x1="20" y1="43" x2="55" y2="67" stroke="#dc2626" strokeWidth="2" />
              <line x1="20" y1="68" x2="55" y2="92" stroke="#dc2626" strokeWidth="2" />

              {/* 左下斜線 (負項) */}
              <line x1="55" y1="18" x2="20" y2="42" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="55" y1="43" x2="20" y2="67" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="55" y1="68" x2="20" y2="92" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
            </g>
          </g>

          {/* 右側：計算步驟與公式 */}
          <g transform="translate(260, 45)">
            <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#0f172a">鞋帶公式 (Shoelace Formula)</text>

            <div className="space-y-2 pt-2">
              <rect x="0" y="20" width="245" height="32" fill="#fee2e2" stroke="#fca5a5" rx="4" />
              <text x="8" y="40" fontSize="10" fontWeight="bold" fill="#991b1b">
                2 × 面積 ＝ | ∑(Xi · Yi+1) － ∑(Xi+1 · Yi) |
              </text>

              <rect x="0" y="60" width="245" height="32" fill="#dbeafe" stroke="#93c5fd" rx="4" />
              <text x="8" y="80" fontSize="10" fontWeight="bold" fill="#1e40af">
                最終面積 A ＝ | 交叉積之差 | ÷ 2
              </text>

              <p className="text-[10px] text-slate-500 pt-2 leading-relaxed">
                ★ 命題陷阱：首尾必須封閉（最後一行必須重複寫下第一點坐標 X1, Y1），算完交叉相乘相減後「務必除以 2」！
              </p>
            </div>
          </g>

          <rect x="40" y="180" width="460" height="18" fill="#fef3c7" rx="3" />
          <text x="270" y="193" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
            適用於任意多邊形地籍面積計算 ｜ 手算速度比傳統梯形法快 3 倍且不易出錯！
          </text>
        </svg>
      );

    // 11. 空間坐標與向量正射影
    case 'math-space-projection':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="空間坐標系與正射影向量幾何圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 3D 坐標軸 */}
          <g transform="translate(130, 140)">
            <line x1="0" y1="0" x2="0" y2="-110" stroke="#334155" strokeWidth="2" />
            <polygon points="0,-115 -4,-105 4,-105" fill="#334155" />
            <text x="8" y="-105" fontSize="11" fontWeight="bold" fill="#334155">z 軸</text>

            <line x1="0" y1="0" x2="140" y2="0" stroke="#334155" strokeWidth="2" />
            <polygon points="145,0 135,-4 135,4" fill="#334155" />
            <text x="140" y="16" fontSize="11" fontWeight="bold" fill="#334155">y 軸</text>

            <line x1="0" y1="0" x2="-80" y2="50" stroke="#334155" strokeWidth="2" />
            <polygon points="-85,53 -74,48 -78,41" fill="#334155" />
            <text x="-95" y="60" fontSize="11" fontWeight="bold" fill="#334155">x 軸</text>

            <circle cx="60" cy="-60" r="5" fill="#e11d48" />
            <text x="70" y="-65" fontSize="11" fontWeight="bold" fill="#e11d48">P(a, b, c)</text>

            <line x1="60" y1="-60" x2="60" y2="25" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="60" cy="25" r="4" fill="#2563eb" />
            <text x="68" y="32" fontSize="9" fontWeight="bold" fill="#2563eb">投影到 xy 平面: (a, b, 0)</text>
            <text x="25" y="-15" fontSize="9" fontWeight="bold" fill="#d97706">距離 = |c|</text>
          </g>

          {/* 右側：正射影向量幾何 */}
          <g transform="translate(320, 60)">
            <text x="0" y="0" fontSize="12" fontWeight="bold" fill="#0f172a">向量正射影幾何意義</text>
            
            <line x1="0" y1="80" x2="160" y2="80" stroke="#334155" strokeWidth="2.5" />
            <polygon points="165,80 155,76 155,84" fill="#334155" />
            <text x="165" y="95" fontSize="11" fontWeight="bold" fill="#334155">向量 b</text>

            <line x1="0" y1="80" x2="100" y2="15" stroke="#2563eb" strokeWidth="2.5" />
            <polygon points="103,13 93,17 99,24" fill="#2563eb" />
            <text x="45" y="40" fontSize="11" fontWeight="bold" fill="#2563eb">向量 a</text>

            <line x1="100" y1="15" x2="100" y2="80" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="3 2" />
            <rect x="90" y="70" width="10" height="10" fill="none" stroke="#e11d48" strokeWidth="1.2" />

            <rect x="0" y="78" width="100" height="4" fill="#e11d48" />
            <text x="50" y="105" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#e11d48">
              正射影向量 proj_b(a)
            </text>
            <text x="50" y="120" textAnchor="middle" fontSize="9" fill="#64748b">
              公式：[ (a·b) ÷ |b|² ] × b
            </text>
          </g>
        </svg>
      );

    // 12. 拋物線幾何定義與正焦弦長
    case 'math-parabola-geometry':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="拋物線焦點準線與正焦弦長圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 準線 L (x = -c) */}
          <line x1="100" y1="35" x2="100" y2="185" stroke="#e11d48" strokeWidth="2.5" />
          <text x="95" y="40" textAnchor="end" fontSize="10" fontWeight="bold" fill="#e11d48">準線 L: x = -c</text>

          {/* 對稱軸 (x 軸) */}
          <line x1="70" y1="110" x2="480" y2="110" stroke="#334155" strokeWidth="1.5" />
          <polygon points="485,110 477,106 477,114" fill="#334155" />
          <text x="475" y="125" fontSize="10" fill="#334155">對稱軸</text>

          {/* 頂點 V(0, 0) */}
          <circle cx="200" cy="110" r="4" fill="#0f172a" />
          <text x="195" y="125" textAnchor="end" fontSize="10" fontWeight="bold" fill="#0f172a">頂點 V(0,0)</text>

          {/* 焦點 F(c, 0) */}
          <circle cx="300" cy="110" r="5" fill="#2563eb" />
          <text x="305" y="125" fontSize="10" fontWeight="bold" fill="#2563eb">焦點 F(c, 0)</text>

          {/* 拋物線曲線 y² = 4cx */}
          <path d="M 450,40 Q 200,110 450,180" stroke="#2563eb" strokeWidth="2.5" fill="none" />

          {/* 正焦弦 AB */}
          <line x1="300" y1="52" x2="300" y2="168" stroke="#059669" strokeWidth="2.5" />
          <circle cx="300" cy="52" r="3" fill="#059669" />
          <circle cx="300" cy="168" r="3" fill="#059669" />
          <text x="310" y="60" fontSize="10" fontWeight="bold" fill="#059669">A (2c)</text>
          <text x="310" y="165" fontSize="10" fontWeight="bold" fill="#059669">B (2c)</text>
          
          <rect x="340" y="70" width="150" height="30" fill="#dcfce7" stroke="#10b981" rx="4" />
          <text x="415" y="88" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065f46">
            正焦弦長 ＝ |4c|
          </text>

          <line x1="100" y1="145" x2="200" y2="145" stroke="#64748b" strokeWidth="1.2" />
          <text x="150" y="140" textAnchor="middle" fontSize="9" fill="#475569">距離 c</text>
          <line x1="200" y1="145" x2="300" y2="145" stroke="#64748b" strokeWidth="1.2" />
          <text x="250" y="140" textAnchor="middle" fontSize="9" fill="#475569">焦距 c</text>
        </svg>
      );

    // 13. 工程力學拉密定理 (Lami's Theorem) 三力共點平衡
    case 'mechanics-lami-forces':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="工程力學拉密定理三力共點平衡圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 左側：三力共點示意圖 */}
          <g transform="translate(130, 110)">
            <circle cx="0" cy="0" r="5" fill="#0f172a" />
            <text x="-8" y="16" fontSize="11" fontWeight="bold" fill="#0f172a">O</text>

            {/* 力 P (向上偏右) */}
            <line x1="0" y1="0" x2="50" y2="-70" stroke="#2563eb" strokeWidth="2.5" />
            <polygon points="53,-74 43,-68 49,-62" fill="#2563eb" />
            <text x="55" y="-72" fontSize="11" fontWeight="bold" fill="#2563eb">P</text>

            {/* 力 Q (向上偏左) */}
            <line x1="0" y1="0" x2="-65" y2="-45" stroke="#e11d48" strokeWidth="2.5" />
            <polygon points="-70,-47 -58,-48 -63,-40" fill="#e11d48" />
            <text x="-82" y="-45" fontSize="11" fontWeight="bold" fill="#e11d48">Q</text>

            {/* 力 R (垂直向下) */}
            <line x1="0" y1="0" x2="10" y2="70" stroke="#059669" strokeWidth="2.5" />
            <polygon points="11,75 5,65 15,64" fill="#059669" />
            <text x="18" y="75" fontSize="11" fontWeight="bold" fill="#059669">R</text>

            {/* 對角弧度 */}
            <path d="M -20,-15 A 25 25 0 0 1 18,-25" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="0" y="-30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#64748b">γ</text>

            <path d="M 22,-15 A 25 25 0 0 1 5,30" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="25" y="15" fontSize="10" fontWeight="bold" fill="#64748b">β</text>

            <path d="M 0,28 A 25 25 0 0 1 -25,-10" fill="none" stroke="#64748b" strokeWidth="1.5" />
            <text x="-25" y="20" fontSize="10" fontWeight="bold" fill="#64748b">α</text>
          </g>

          {/* 右側：拉密公式與口訣 */}
          <g transform="translate(260, 45)">
            <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#0f172a">拉密定理 (Lami&apos;s Theorem)</text>
            <p className="text-[10px] text-slate-500 pt-1">
              當三力平衡且共點時，各力與其對角之正弦 (sin) 成正比：
            </p>

            <rect x="0" y="32" width="245" height="42" fill="#eff6ff" stroke="#93c5fd" rx="4" />
            <text x="122" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fontFamily="monospace" fill="#1e40af">
              P/sin(α) ＝ Q/sin(β) ＝ R/sin(γ)
            </text>

            <rect x="0" y="85" width="245" height="38" fill="#fef3c7" stroke="#f59e0b" rx="4" />
            <text x="8" y="100" fontSize="10" fontWeight="bold" fill="#92400e">
              適用前提：恰好 3 力 ＋ 共點 ＋ 剛體平衡！
            </text>
            <text x="8" y="114" fontSize="9" fill="#78350f">
              若超過 3 力或不共點，則必須改用 ∑Fx=0, ∑Fy=0, ∑M=0 解聯立！
            </text>
          </g>

          <rect x="40" y="180" width="460" height="18" fill="#f0fdf4" rx="3" />
          <text x="270" y="193" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">
            高工段考力學必刷秒殺法：遇斜桿吊繩重物，畫出三力對角立即秒殺！
          </text>
        </svg>
      );

    // 14. 建築製圖第三角投影箱展開圖
    case 'drafting-third-angle-box':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="建築製圖第三角法展開圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 三視圖十字排列展開 */}
          <g transform="translate(60, 35)">
            {/* 上視圖 (俯視圖) */}
            <rect x="80" y="10" width="80" height="40" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" rx="3" />
            <text x="120" y="34" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">上視圖 (Top)</text>

            {/* 前視圖 (正視圖) */}
            <rect x="80" y="65" width="80" height="50" fill="#e2e8f0" stroke="#334155" strokeWidth="2" rx="3" />
            <text x="120" y="94" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">正視圖 (Front)</text>

            {/* 右側視圖 */}
            <rect x="175" y="65" width="50" height="50" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" rx="3" />
            <text x="200" y="94" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400e">右側視圖</text>

            {/* 45 度投影折射輔助線 */}
            <line x1="160" y1="50" x2="175" y2="50" stroke="#94a3b8" strokeDasharray="3 2" />
            <line x1="175" y1="50" x2="225" y2="10" stroke="#e11d48" strokeWidth="1.5" />
            <line x1="225" y1="10" x2="225" y2="65" stroke="#94a3b8" strokeDasharray="3 2" />
            <text x="200" y="35" fontSize="8" fontWeight="bold" fill="#e11d48">45° 轉折線</text>

            {/* 對正標註線 */}
            <line x1="80" y1="50" x2="80" y2="65" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="160" y1="50" x2="160" y2="65" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
            <text x="120" y="60" textAnchor="middle" fontSize="8" fill="#64748b">長對正</text>

            <line x1="160" y1="80" x2="175" y2="80" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
            <text x="168" y="75" textAnchor="middle" fontSize="8" fill="#64748b">高平齊</text>
          </g>

          {/* 右側：CNS 規範口訣 */}
          <g transform="translate(310, 45)">
            <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#0f172a">CNS 3 建築第三角法金科玉律</text>

            <div className="space-y-2 pt-2">
              <rect x="0" y="20" width="200" height="26" fill="#eff6ff" stroke="#93c5fd" rx="4" />
              <text x="10" y="37" fontSize="10" fontWeight="bold" fill="#1e40af">① 長對正：正視圖與上視圖長度相等</text>

              <rect x="0" y="52" width="200" height="26" fill="#f0fdf4" stroke="#86efac" rx="4" />
              <text x="10" y="69" fontSize="10" fontWeight="bold" fill="#166534">② 高平齊：正視圖與側視圖高度水平</text>

              <rect x="0" y="84" width="200" height="26" fill="#fef3c7" stroke="#fcd34d" rx="4" />
              <text x="10" y="101" fontSize="10" fontWeight="bold" fill="#92400e">③ 寬相等：上視圖寬度 ＝ 側視圖寬度</text>
            </div>
          </g>

          <rect x="40" y="180" width="460" height="18" fill="#f8fafc" stroke="#cbd5e1" rx="3" />
          <text x="270" y="193" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">
            第三角法觀念：人 ➜ 投影面 ➜ 物體（透明箱原則） ｜ 台灣與美國工程圖一律採第三角法！
          </text>
        </svg>
      );

    // 15. 英文關代 that 禁忌決策樹
    case 'english-relative-pronoun':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="關係代名詞 that 禁忌與選用決策樹">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 標題 */}
          <text x="270" y="42" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            關係代名詞「that」三大禁忌與必用時機判斷樹
          </text>

          {/* 禁忌 1 */}
          <g transform="translate(45, 65)">
            <rect x="0" y="0" width="135" height="60" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" rx="6" />
            <text x="67" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">禁忌 ① 逗號後</text>
            <text x="67" y="38" textAnchor="middle" fontSize="9" fill="#7f1d1d">, _____ 禁用 that！</text>
            <text x="67" y="50" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">改用 who / which</text>
          </g>

          {/* 禁忌 2 */}
          <g transform="translate(202, 65)">
            <rect x="0" y="0" width="135" height="60" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" rx="6" />
            <text x="67" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">禁忌 ② 介系詞後</text>
            <text x="67" y="38" textAnchor="middle" fontSize="9" fill="#7f1d1d">prep. _____ 禁用 that！</text>
            <text x="67" y="50" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">改用 in which / whom</text>
          </g>

          {/* 必用時機 */}
          <g transform="translate(360, 65)">
            <rect x="0" y="0" width="135" height="60" fill="#dcfce7" stroke="#10b981" strokeWidth="1.5" rx="6" />
            <text x="67" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">★ 強制必用 that</text>
            <text x="67" y="36" textAnchor="middle" fontSize="9" fill="#064e3b">先行詞「人 ＋ 物/動物」</text>
            <text x="67" y="48" textAnchor="middle" fontSize="9" fill="#064e3b">最高級、the only/first</text>
          </g>

          {/* 底部口訣 */}
          <rect x="45" y="145" width="450" height="35" fill="#f1f5f9" stroke="#94a3b8" rx="6" />
          <text x="270" y="162" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">
            3 秒秒殺口訣：見逗號不用 that、見介系詞不用 that！
          </text>
          <text x="270" y="174" textAnchor="middle" fontSize="9" fill="#64748b">
            子句缺主詞或受詞選「關代」；子句結構完整選「關副 (where/when/why)」！
          </text>
        </svg>
      );

    // 預設幾何框
    default:
      return (
        <svg viewBox="0 0 540 180" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="工程概念圖解">
          <rect width="540" height="180" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="140" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <circle cx="270" cy="80" r="30" fill="#3b82f6" opacity="0.15" />
          <path d="M 255,80 L 285,80 M 270,65 L 270,95" stroke="#2563eb" strokeWidth="2.5" />
          <text x="270" y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155">
            108 課綱技術型高中工程與學科專業圖解
          </text>
        </svg>
      );
  }
}
