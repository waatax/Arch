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
            {/* 固體實體部分 */}
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
            {/* 梯形錐身 */}
            <polygon points="65,30 115,30 140,155 40,155" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
            {/* 頂徑 10cm */}
            <line x1="65" y1="26" x2="115" y2="26" stroke="#2563eb" strokeWidth="1.5" />
            <text x="90" y="22" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">頂徑 10 cm</text>
            {/* 底徑 20cm */}
            <line x1="40" y1="162" x2="140" y2="162" stroke="#2563eb" strokeWidth="1.5" />
            <text x="90" y="172" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">底徑 20 cm</text>
            {/* 高度 30cm */}
            <line x1="150" y1="30" x2="150" y2="155" stroke="#e11d48" strokeWidth="1.5" />
            <text x="165" y="95" fontSize="10" fontWeight="bold" fill="#e11d48">高 30 cm</text>
            {/* 三層標示 */}
            <line x1="48" y1="113" x2="132" y2="113" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="56" y1="72" x2="124" y2="72" stroke="#64748b" strokeWidth="1" strokeDasharray="3 2" />
            <text x="90" y="138" textAnchor="middle" fontSize="8" fill="#475569">第1層 (25下)</text>
            <text x="90" y="96" textAnchor="middle" fontSize="8" fill="#475569">第2層 (25下)</text>
            <text x="90" y="55" textAnchor="middle" fontSize="8" fill="#475569">第3層 (25下)</text>
          </g>

          {/* 右側：提錐後坍度量測 */}
          <g transform="translate(290, 25)">
            <text x="100" y="15" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">2. 垂直提錐與坍度量測</text>
            {/* 倒置坍度錐在旁邊當基準 */}
            <polygon points="175,30 205,30 215,155 165,155" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2" />
            {/* 水平鋼尺橫跨頂部 */}
            <line x1="50" y1="30" x2="215" y2="30" stroke="#334155" strokeWidth="3" />
            {/* 沉陷後的混凝土試體 */}
            <path d="M 40,155 Q 70,80 100,80 Q 130,80 160,155 Z" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
            {/* 中心點標註與垂直落差鋼尺 */}
            <circle cx="100" cy="80" r="3" fill="#e11d48" />
            <line x1="100" y1="30" x2="100" y2="80" stroke="#e11d48" strokeWidth="2" strokeDasharray="3 2" />
            <polygon points="100,30 96,38 104,38" fill="#e11d48" />
            <polygon points="100,80 96,72 104,72" fill="#e11d48" />
            
            {/* 坍度文字標籤 */}
            <rect x="115" y="45" width="85" height="22" fill="#fee2e2" stroke="#ef4444" rx="4" />
            <text x="157" y="60" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">坍度 (Slump)</text>
            <text x="100" y="172" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0f172a">以「中心點」垂直落差為準</text>
          </g>
        </svg>
      );

    // 4. 水準測量前後等距消差幾何
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
            {/* 腳架 */}
            <line x1="0" y1="10" x2="-25" y2="65" stroke="#334155" strokeWidth="2" />
            <line x1="0" y1="10" x2="25" y2="65" stroke="#334155" strokeWidth="2" />
            <line x1="0" y1="10" x2="0" y2="65" stroke="#334155" strokeWidth="2" />
            {/* 望遠鏡鏡筒 */}
            <rect x="-20" y="-8" width="40" height="16" fill="#3b82f6" stroke="#1d4ed8" rx="2" />
            <text x="0" y="-12" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">水準儀</text>
          </g>

          {/* 視線不平行 (i角誤差) 射線 */}
          {/* 水平真視線 (虛線綠) */}
          <line x1="85" y1="110" x2="455" y2="110" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="270" y="98" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#059669">真水平視線</text>

          {/* 傾斜視準軸 (實線紅) */}
          <line x1="85" y1="80" x2="455" y2="80" stroke="#e11d48" strokeWidth="2" />
          <text x="270" y="73" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#e11d48">視準軸傾斜視線 (i 角)</text>

          {/* 兩端等距與誤差對稱 */}
          <line x1="85" y1="80" x2="85" y2="110" stroke="#e11d48" strokeWidth="1.5" />
          <text x="100" y="98" fontSize="9" fontWeight="bold" fill="#e11d48">+e1</text>
          
          <line x1="455" y1="80" x2="455" y2="110" stroke="#e11d48" strokeWidth="1.5" />
          <text x="440" y="98" fontSize="9" fontWeight="bold" fill="#e11d48">+e2</text>

          {/* 等距標註 */}
          <line x1="85" y1="140" x2="270" y2="140" stroke="#2563eb" strokeWidth="1.5" />
          <text x="175" y="135" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2563eb">後視距 d1</text>

          <line x1="270" y1="140" x2="455" y2="140" stroke="#2563eb" strokeWidth="1.5" />
          <text x="365" y="135" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2563eb">前視距 d2 (d1 = d2)</text>

          {/* 結論條 */}
          <rect x="40" y="175" width="460" height="20" fill="#fef2f2" stroke="#f87171" rx="4" />
          <text x="270" y="189" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">
            前後視距等長時：高低差 Δh = (BS + e1) - (FS + e2) ＝ BS - FS ➜ i 角誤差與球折差全數自動抵消！
          </text>
        </svg>
      );

    // 5. 空間坐標與向量正射影
    case 'math-space-projection':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="空間坐標系與正射影向量幾何圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 3D 坐標軸 */}
          <g transform="translate(130, 140)">
            {/* Z 軸向上 */}
            <line x1="0" y1="0" x2="0" y2="-110" stroke="#334155" strokeWidth="2" />
            <polygon points="0,-115 -4,-105 4,-105" fill="#334155" />
            <text x="8" y="-105" fontSize="11" fontWeight="bold" fill="#334155">z 軸</text>

            {/* Y 軸向右 */}
            <line x1="0" y1="0" x2="140" y2="0" stroke="#334155" strokeWidth="2" />
            <polygon points="145,0 135,-4 135,4" fill="#334155" />
            <text x="140" y="16" fontSize="11" fontWeight="bold" fill="#334155">y 軸</text>

            {/* X 軸斜向前下 */}
            <line x1="0" y1="0" x2="-80" y2="50" stroke="#334155" strokeWidth="2" />
            <polygon points="-85,53 -74,48 -78,41" fill="#334155" />
            <text x="-95" y="60" fontSize="11" fontWeight="bold" fill="#334155">x 軸</text>

            {/* 空間點 P(a, b, c) */}
            <circle cx="60" cy="-60" r="5" fill="#e11d48" />
            <text x="70" y="-65" fontSize="11" fontWeight="bold" fill="#e11d48">P(a, b, c)</text>

            {/* 投影到 xy 平面 */}
            <line x1="60" y1="-60" x2="60" y2="25" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="60" cy="25" r="4" fill="#2563eb" />
            <text x="68" y="32" fontSize="9" fontWeight="bold" fill="#2563eb">投影到 xy 平面: (a, b, 0)</text>

            {/* 點到 xy 平面之距離 = |c| */}
            <text x="25" y="-15" fontSize="9" fontWeight="bold" fill="#d97706">距離 = |c|</text>
          </g>

          {/* 右側：正射影向量幾何 */}
          <g transform="translate(320, 60)">
            <text x="0" y="0" fontSize="12" fontWeight="bold" fill="#0f172a">向量正射影幾何意義</text>
            
            {/* 被投影向量 b */}
            <line x1="0" y1="80" x2="160" y2="80" stroke="#334155" strokeWidth="2.5" />
            <polygon points="165,80 155,76 155,84" fill="#334155" />
            <text x="165" y="95" fontSize="11" fontWeight="bold" fill="#334155">向量 b</text>

            {/* 向量 a */}
            <line x1="0" y1="80" x2="100" y2="15" stroke="#2563eb" strokeWidth="2.5" />
            <polygon points="103,13 93,17 99,24" fill="#2563eb" />
            <text x="45" y="40" fontSize="11" fontWeight="bold" fill="#2563eb">向量 a</text>

            {/* 垂線 */}
            <line x1="100" y1="15" x2="100" y2="80" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* 直角符號 */}
            <rect x="90" y="70" width="10" height="10" fill="none" stroke="#e11d48" strokeWidth="1.2" />

            {/* 正射影向量長度 */}
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

    // 6. 拋物線幾何定義與正焦弦長
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

          {/* 頂點到焦點焦距 c 標註 */}
          <line x1="100" y1="145" x2="200" y2="145" stroke="#64748b" strokeWidth="1.2" />
          <text x="150" y="140" textAnchor="middle" fontSize="9" fill="#475569">距離 c</text>
          <line x1="200" y1="145" x2="300" y2="145" stroke="#64748b" strokeWidth="1.2" />
          <text x="250" y="140" textAnchor="middle" fontSize="9" fill="#475569">焦距 c</text>
        </svg>
      );

    // 7. 英文關代 that 禁忌決策樹
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
