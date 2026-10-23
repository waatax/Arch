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
            <path d="M 0,50 Q 30,55 40,75 Q 20,95 0,90 Z" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.5" />
            <text x="22" y="72" fontSize="9" fontWeight="bold" fill="#1e40af">開孔 (Vo)</text>
            <circle cx="95" cy="65" r="18" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="95" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#475569">閉孔 (Vc)</text>
            <circle cx="65" cy="105" r="12" fill="#3b82f6" />
            <text x="65" y="109" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff">實體 Vs</text>
          </g>

          {/* 中間：箭頭與定義 */}
          <g transform="translate(195, 45)">
            <path d="M 0,65 L 30,65 M 22,58 L 30,65 L 22,72" stroke="#64748b" strokeWidth="2" fill="none" />
            <text x="45" y="30" fontSize="12" fontWeight="bold" fill="#0f172a">三種體積與比重層級</text>
            
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

    // 3. 骨材四種含水狀態圖解
    case 'materials-moisture-states':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="骨材四種含水狀態與表面水率圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 四態排列 */}
          {/* 1. 烘乾態 */}
          <g transform="translate(35, 30)">
            <rect x="0" y="0" width="105" height="120" fill="#fef2f2" stroke="#f87171" rx="6" />
            <circle cx="52" cy="45" r="32" fill="#d6d3d1" stroke="#78716c" strokeWidth="2" />
            <text x="52" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">① 烘乾狀態</text>
            <text x="52" y="48" textAnchor="middle" fontSize="9" fill="#57534e">內部無水</text>
            <text x="52" y="95" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">需吸水最多</text>
            <text x="52" y="110" textAnchor="middle" fontSize="8" fill="#78716c">105~110℃ 恆重</text>
          </g>

          {/* 2. 氣乾態 */}
          <g transform="translate(155, 30)">
            <rect x="0" y="0" width="105" height="120" fill="#fffbeb" stroke="#fcd34d" rx="6" />
            <circle cx="52" cy="45" r="32" fill="#e7e5e4" stroke="#78716c" strokeWidth="2" />
            <circle cx="52" cy="45" r="16" fill="#bfdbfe" opacity="0.6" />
            <text x="52" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">② 氣乾狀態</text>
            <text x="52" y="48" textAnchor="middle" fontSize="9" fill="#1e40af">部分孔隙含水</text>
            <text x="52" y="95" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#d97706">有有效吸水量</text>
            <text x="52" y="110" textAnchor="middle" fontSize="8" fill="#78716c">室內常溫存放</text>
          </g>

          {/* 3. 面乾內飽和 (SSD) - 基準 */}
          <g transform="translate(275, 25)">
            <rect x="0" y="0" width="115" height="130" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" rx="6" />
            <circle cx="57" cy="50" r="34" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
            <text x="57" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">★ ③ 面乾內飽和</text>
            <text x="57" y="48" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">內部毛細孔全滿</text>
            <text x="57" y="60" textAnchor="middle" fontSize="9" fill="#1e3a8a">表面無水膜</text>
            <rect x="8" y="92" width="100" height="18" fill="#d1fae5" rx="3" />
            <text x="57" y="105" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#047857">配合設計黃金零點</text>
            <text x="57" y="122" textAnchor="middle" fontSize="8" fill="#065f46">SSD 基準</text>
          </g>

          {/* 4. 濕潤態 */}
          <g transform="translate(405, 30)">
            <rect x="0" y="0" width="105" height="120" fill="#eff6ff" stroke="#60a5fa" rx="6" />
            <circle cx="52" cy="45" r="32" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
            <circle cx="52" cy="45" r="38" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="3 2" />
            <text x="52" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">④ 濕潤狀態</text>
            <text x="52" y="48" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff">表面有游離水膜</text>
            <text x="52" y="95" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">具備表面含水率</text>
            <text x="52" y="110" textAnchor="middle" fontSize="8" fill="#1d4ed8">拌合水必須扣除！</text>
          </g>

          {/* 底部總結 */}
          <rect x="35" y="172" width="475" height="22" fill="#eff6ff" stroke="#bfdbfe" rx="4" />
          <text x="272" y="187" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">
            配合設計鐵則：濕潤態扣表面水（防水灰比失控）、氣乾態補有效吸水量（防水泥乾渴）！
          </text>
        </svg>
      );

    // 4. CNS 61 水泥五大類型配比圖
    case 'materials-cement-types':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="CNS 61 水泥五大類型特性長條圖">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 五大類型條列 */}
          <g transform="translate(40, 30)" fontSize="10">
            <text x="0" y="18" fontWeight="bold" fill="#1e293b">第 I 型 普通水泥：一般土木建築（標準熟料比例 C3S: 55%, C2S: 20%, C3A: 10%）</text>
            <rect x="0" y="24" width="460" height="10" fill="#e2e8f0" rx="2" />
            <rect x="0" y="24" width="250" height="10" fill="#3b82f6" rx="2" />

            <text x="0" y="52" fontWeight="bold" fill="#1e293b">第 II 型 中度抗硫酸鹽及中水化熱：大型橋墩、重力擋土牆、港灣碼頭</text>
            <rect x="0" y="58" width="460" height="10" fill="#e2e8f0" rx="2" />
            <rect x="0" y="58" width="210" height="10" fill="#0284c7" rx="2" />

            <text x="0" y="86" fontWeight="bold" fill="#dc2626">第 III 型 早強水泥：C3S &gt; 60% 磨至極細（比表面積大）➜ 緊急搶修、寒冬施工</text>
            <rect x="0" y="92" width="460" height="10" fill="#e2e8f0" rx="2" />
            <rect x="0" y="92" width="380" height="10" fill="#ef4444" rx="2" />

            <text x="0" y="120" fontWeight="bold" fill="#059669">第 IV 型 低熱水泥：嚴限 C3S &lt; 35%, C3A &lt; 7%，C2S 大增 ➜ 水庫大壩巨積工程</text>
            <rect x="0" y="126" width="460" height="10" fill="#e2e8f0" rx="2" />
            <rect x="0" y="126" width="140" height="10" fill="#10b981" rx="2" />

            <text x="0" y="154" fontWeight="bold" fill="#7c3aed">第 V 型 抗硫酸鹽水泥：嚴限 C3A &lt; 5% ➜ 溫泉區、化工廠地面、海港碼頭</text>
            <rect x="0" y="160" width="460" height="10" fill="#e2e8f0" rx="2" />
            <rect x="0" y="160" width="100" height="10" fill="#8b5cf6" rx="2" />
          </g>

          <text x="270" y="198" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
            口訣：一普、二中、三早強、四低水化五抗鹽！
          </text>
        </svg>
      );

    // 5. CNS 786 維卡儀標準稠度與初終凝試驗
    case 'materials-vicat-test':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="CNS 786 維卡儀標準稠度與初終凝試驗">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 左側：維卡儀構造線圖 */}
          <g transform="translate(60, 30)">
            <rect x="20" y="130" width="80" height="12" fill="#64748b" rx="2" />
            {/* 圓錐模與水泥漿 */}
            <polygon points="35,130 85,130 80,90 40,90" fill="#cbd5e1" stroke="#334155" strokeWidth="1.5" />
            <text x="60" y="112" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e293b">水泥漿試體</text>
            {/* 滑桿與刻度盤 */}
            <rect x="57" y="15" width="6" height="75" fill="#e2e8f0" stroke="#334155" strokeWidth="1.5" />
            <rect x="68" y="25" width="22" height="40" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
            <line x1="72" y1="35" x2="85" y2="35" stroke="#dc2626" strokeWidth="1.5" />
            <text x="79" y="55" textAnchor="middle" fontSize="7" fill="#64748b">刻度 0~50</text>
          </g>

          {/* 右側：三大測試標準數值 */}
          <g transform="translate(195, 30)">
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#0f172a">維卡儀三大必考判定標準</text>

            <rect x="0" y="26" width="300" height="34" fill="#eff6ff" stroke="#bfdbfe" rx="4" />
            <text x="10" y="42" fontSize="10" fontWeight="bold" fill="#1e40af">1. 標準稠度試驗（直徑 10mm 圓柱試棒）</text>
            <text x="10" y="54" fontSize="9" fill="#1d4ed8">以試棒下沉至底板上方 10 ± 1 mm 處之含水量為準</text>

            <rect x="0" y="68" width="300" height="34" fill="#ecfdf5" stroke="#a7f3d0" rx="4" />
            <text x="10" y="84" fontSize="10" fontWeight="bold" fill="#065f46">2. 初凝時間試驗（直徑 1mm 圓針）</text>
            <text x="10" y="96" fontSize="9" fill="#047857">針入度達 25 mm 時所需時間 ➜ CNS 規範 ≧ 45 分鐘</text>

            <rect x="0" y="110" width="300" height="34" fill="#fef2f2" stroke="#fecaca" rx="4" />
            <text x="10" y="126" fontSize="10" fontWeight="bold" fill="#991b1b">3. 終凝時間試驗（附圓形金屬環針入端）</text>
            <text x="10" y="138" fontSize="9" fill="#b91c1c">圓針刺入但環狀附屬物「完全無壓痕」時 ➜ CNS ≦ 375 分鐘</text>
          </g>

          <rect x="35" y="178" width="470" height="18" fill="#fef3c7" rx="3" />
          <text x="270" y="191" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
            ★ 考試陷阱：初凝標準稠度看 10±1mm，初凝時間看針入 25mm，終凝看圓環無壓痕！
          </text>
        </svg>
      );

    // 6. CNS 3090 混凝土氯離子限值與海砂防制
    case 'materials-chloride-limits':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="CNS 3090 混凝土氯離子限值與鋼筋防蝕圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 左圖：鋼筋電化學腐蝕圖解 */}
          <g transform="translate(45, 30)">
            <text x="70" y="15" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">氯離子破壞鈍化膜機制</text>
            {/* 混凝土基質 */}
            <rect x="0" y="25" width="140" height="100" fill="#f1f5f9" stroke="#94a3b8" rx="4" />
            {/* 鋼筋棒 */}
            <rect x="20" y="55" width="100" height="40" fill="#64748b" stroke="#334155" strokeWidth="2" rx="4" />
            <text x="70" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">鋼筋 (Fe)</text>
            {/* 氧化鐵銹斑膨脹 */}
            <path d="M 60,55 Q 70,40 80,55 Z" fill="#ea580c" stroke="#c2410c" />
            <text x="70" y="45" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#c2410c">體積膨脹 2~6 倍</text>
            {/* 混凝土保護層開裂裂縫 */}
            <line x1="70" y1="40" x2="70" y2="25" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 1" />
            <text x="70" y="20" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">裂縫剝落</text>
          </g>

          {/* 右側：CNS 3090 水溶性氯離子含量限值階梯 */}
          <g transform="translate(205, 30)">
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#0f172a">CNS 3090 氯離子含量法規限值</text>

            <rect x="0" y="26" width="290" height="34" fill="#fee2e2" stroke="#ef4444" rx="4" />
            <text x="10" y="42" fontSize="10" fontWeight="bold" fill="#991b1b">一般鋼筋混凝土 (現行最新標準)</text>
            <text x="10" y="54" fontSize="10" fontWeight="bold" fill="#dc2626">≦ 0.15 kg/m³（舊規範為 0.3 kg/m³）</text>

            <rect x="0" y="68" width="290" height="34" fill="#dbeafe" stroke="#3b82f6" rx="4" />
            <text x="10" y="84" fontSize="10" fontWeight="bold" fill="#1e40af">預力混凝土 (PC) / 嚴苛乾濕交替環境</text>
            <text x="10" y="96" fontSize="10" fontWeight="bold" fill="#2563eb">≦ 0.15 kg/m³（嚴禁海砂）</text>

            <rect x="0" y="110" width="290" height="34" fill="#f0fdf4" stroke="#86efac" rx="4" />
            <text x="10" y="126" fontSize="10" fontWeight="bold" fill="#166534">無筋混凝土 (純混凝土)</text>
            <text x="10" y="138" fontSize="10" fontWeight="bold" fill="#15803d">≦ 0.60 kg/m³</text>
          </g>

          <rect x="35" y="178" width="470" height="18" fill="#fef2f2" rx="3" />
          <text x="270" y="191" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">
            ★ 統測段考首選陷阱：現行鋼筋混凝土一律以 0.15 kg/m³ 為驗收不合格上限！
          </text>
        </svg>
      );

    // 7. CNS 486 骨材篩分析試驗與細度模數
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

    // 8. CNS 1176 混凝土坍度試驗錐與量測
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

    // 9. ACI 配合設計絕對體積法 1 立方米堆疊
    case 'materials-aci-mix':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="ACI 配合設計絕對體積法體積組成圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 1 立方米堆疊長條圖 */}
          <g transform="translate(45, 45)">
            <text x="0" y="-12" fontSize="12" fontWeight="bold" fill="#0f172a">1.0 m³ 混凝土絕對體積分配組成</text>

            <rect x="0" y="0" width="450" height="42" fill="#f1f5f9" stroke="#334155" strokeWidth="2" rx="4" />
            {/* 水 ~0.18 */}
            <rect x="0" y="0" width="80" height="42" fill="#60a5fa" />
            <text x="40" y="26" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">拌合水 18%</text>
            {/* 水泥 ~0.11 */}
            <rect x="80" y="0" width="55" height="42" fill="#94a3b8" />
            <text x="107" y="26" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ffffff">水泥 11%</text>
            {/* 空氣 ~0.02 */}
            <rect x="135" y="0" width="25" height="42" fill="#e2e8f0" />
            <text x="147" y="26" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#334155">氣2%</text>
            {/* 細骨材 (砂) ~0.27 */}
            <rect x="160" y="0" width="130" height="42" fill="#fcd34d" />
            <text x="225" y="26" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350f">細骨材 (砂) 27%</text>
            {/* 粗骨材 (石) ~0.42 */}
            <rect x="290" y="0" width="160" height="42" fill="#9ca3af" />
            <text x="370" y="26" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#111827">粗骨材 (碎石) 42%</text>
          </g>

          {/* 公式卡 */}
          <g transform="translate(45, 115)">
            <rect x="0" y="0" width="450" height="45" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="15" y="20" fontSize="11" fontWeight="bold" fontFamily="monospace" fill="#1e40af">
              V_水 + (W_c / ρ_c) + V_氣 + (W_ca / ρ_ca) + V_砂 ＝ 1.0 m³ (1000 公升)
            </text>
            <text x="15" y="36" fontSize="9" fill="#1d4ed8">
              ★ 砂體積 V_砂 ＝ 1.0 － (水 + 水泥 + 粗骨材 + 空氣體積之和)
            </text>
          </g>

          <text x="270" y="193" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#15803d">
            七步 SOP 核心：先定坍度水灰比，查石算砂湊一米！
          </text>
        </svg>
      );

    // 10. 木材纖維飽和點 (FSP) 與異向收縮
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

            <path d="M 75,30 Q 110,35 125,65" stroke="#dc2626" strokeWidth="2" fill="none" />
            <text x="130" y="50" fontSize="9" fontWeight="bold" fill="#dc2626">弦向 (T)</text>

            <line x1="75" y1="85" x2="25" y2="85" stroke="#2563eb" strokeWidth="2" />
            <text x="15" y="80" textAnchor="end" fontSize="9" fontWeight="bold" fill="#2563eb">徑向 (R)</text>

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

    // 11. 測量誤差與常態分佈鐘形曲線
    case 'surveying-error-normal':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="測量誤差常態分佈曲線圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 高斯鐘形曲線 */}
          <g transform="translate(60, 45)">
            <line x1="0" y1="120" x2="240" y2="120" stroke="#334155" strokeWidth="2" />
            <line x1="120" y1="120" x2="120" y2="10" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M 10,118 Q 70,115 100,45 Q 120,5 140,45 Q 170,115 230,118" fill="none" stroke="#2563eb" strokeWidth="3" />
            <circle cx="120" cy="18" r="4" fill="#2563eb" />
            <text x="120" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">誤差 0 (最高頻)</text>
            {/* 中誤差 ±σ */}
            <line x1="90" y1="70" x2="150" y2="70" stroke="#e11d48" strokeWidth="1.5" />
            <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#e11d48">中誤差 ±σ (68.3%)</text>
            <text x="120" y="135" textAnchor="middle" fontSize="9" fill="#64748b">偶然誤差 Δ</text>
          </g>

          {/* 右側：四大特性對照 */}
          <g transform="translate(320, 35)">
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#0f172a">偶然誤差四大特性</text>
            <g>
              <text x="0" y="35" fontSize="10" fill="#1e293b">① 聚中性：絕對值小之誤差比大者更常出現</text>
              <text x="0" y="55" fontSize="10" fill="#1e293b">② 對稱性：正負大小相等之誤差出現機率相等</text>
              <text x="0" y="75" fontSize="10" fill="#1e293b">③ 有界性：誤差絕對值不會超過一定界限 (3σ)</text>
              <text x="0" y="95" fontSize="10" fontWeight="bold" fill="#1e40af">④ 補償性：無限多次觀測，誤差總和趨近於零</text>
            </g>
            <rect x="0" y="110" width="190" height="26" fill="#eff6ff" stroke="#bfdbfe" rx="4" />
            <text x="95" y="127" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">中誤差 m ＝ √[∑(vv) / (n - 1)]</text>
          </g>

          <text x="270" y="196" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">
            系統誤差可藉由「檢校儀器與改正公式」完全消除；偶然誤差只能藉由「多次觀測取平均」降低！
          </text>
        </svg>
      );

    // 12. 鋼卷尺距離測量四項物理改正幾何
    case 'surveying-tape-corrections':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="鋼卷尺距離測量四項物理改正圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 四大改正卡排成 2x2 格點 */}
          <g transform="translate(35, 25)">
            {/* 1. 尺長改正 */}
            <rect x="0" y="0" width="230" height="65" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="12" y="18" fontSize="10" fontWeight="bold" fill="#1e40af">① 尺長改正 (Cl ＝ (l - l₀) × L / l₀)</text>
            <text x="12" y="34" fontSize="9" fill="#1e293b">尺太長 ➜ 讀數偏小 ➜ 距離需「加」改正</text>
            <text x="12" y="48" fontSize="9" fontWeight="bold" fill="#dc2626">口訣：尺長加、尺短減！</text>

            {/* 2. 溫度改正 */}
            <rect x="240" y="0" width="230" height="65" fill="#fef2f2" stroke="#fecaca" rx="6" />
            <text x="252" y="18" fontSize="10" fontWeight="bold" fill="#991b1b">② 溫度改正 (Ct ＝ α × (T - T₀) × L)</text>
            <text x="252" y="34" fontSize="9" fill="#1e293b">鋼膨脹係數 α ＝ 0.0000115 / ℃</text>
            <text x="252" y="48" fontSize="9" fontWeight="bold" fill="#b91c1c">口訣：熱脹尺長加、冷縮尺短減！</text>

            {/* 3. 拉力改正 */}
            <rect x="0" y="75" width="230" height="65" fill="#ecfdf5" stroke="#a7f3d0" rx="6" />
            <text x="12" y="93" fontSize="10" fontWeight="bold" fill="#065f46">③ 拉力改正 (Cp ＝ (P - P₀) × L / (A·E))</text>
            <text x="12" y="109" fontSize="9" fill="#1e293b">拉力大於標準拉力 P₀ ➜ 彈性伸長</text>
            <text x="12" y="123" fontSize="9" fontWeight="bold" fill="#047857">口訣：拉力過大加、拉力不足減！</text>

            {/* 4. 懸垂垂度改正 */}
            <rect x="240" y="75" width="230" height="65" fill="#fffbeb" stroke="#fde68a" rx="6" />
            <text x="252" y="93" fontSize="10" fontWeight="bold" fill="#92400e">④ 垂度改正 (Cs ＝ - w²·L³ / (24·P²))</text>
            <text x="252" y="109" fontSize="9" fill="#1e293b">自重下垂呈懸鏈線 ➜ 尺讀數必定偏大</text>
            <text x="252" y="123" fontSize="9" fontWeight="bold" fill="#b45309">★ 垂度改正永遠為「負號」(-Cs)！</text>
          </g>

          <rect x="35" y="172" width="470" height="22" fill="#f8fafc" stroke="#cbd5e1" rx="4" />
          <text x="270" y="187" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">
            綜合計算真長：L_真 ＝ L_測 ＋ Cl ＋ Ct ＋ Cp ＋ Cs ｜ 傾斜改正 Cg 亦恆為負！
          </text>
        </svg>
      );

    // 13. 水準測量前後等距消差幾何
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

    // 14. 經緯儀三軸幾何關係與正倒鏡消差
    case 'surveying-theodolite-axes':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="經緯儀三軸幾何關係與正倒鏡消差">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 左圖：三軸正交立體構圖 */}
          <g transform="translate(130, 110)">
            <line x1="0" y1="-80" x2="0" y2="70" stroke="#2563eb" strokeWidth="2.5" />
            <text x="5" y="-75" fontSize="10" fontWeight="bold" fill="#2563eb">垂直軸 VV (旋轉軸)</text>

            <line x1="-90" y1="0" x2="90" y2="0" stroke="#e11d48" strokeWidth="2.5" />
            <text x="85" y="-6" fontSize="10" fontWeight="bold" fill="#e11d48">橫軸 HH</text>

            <line x1="-60" y1="40" x2="60" y2="-40" stroke="#059669" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="65" y="-40" fontSize="10" fontWeight="bold" fill="#059669">視準軸 CC</text>

            <rect x="-45" y="30" width="90" height="12" fill="#fed7aa" stroke="#c2410c" rx="3" />
            <text x="0" y="40" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9a3412">水準管軸 LL</text>
          </g>

          {/* 右側：四大幾何條件與消差法 */}
          <g transform="translate(260, 35)">
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#0f172a">經緯儀三大必考軸線關係</text>

            <g>
              <text x="0" y="35" fontSize="10" fontWeight="bold" fill="#1e40af">① LL ⟂ VV：水準管軸 應垂直 垂直軸 (定平)</text>
              <text x="0" y="55" fontSize="10" fontWeight="bold" fill="#b91c1c">② CC ⟂ HH：視準軸 應垂直 橫軸 (視準誤差)</text>
              <text x="0" y="75" fontSize="10" fontWeight="bold" fill="#065f46">③ HH ⟂ VV：橫軸 應垂直 垂直軸 (橫軸誤差)</text>
            </g>

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

    // 15. 閉合導線測量與閉合差計算
    case 'surveying-traverse-loop':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="閉合導線測量坐標增量與閉合差向量">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 閉合五邊形導線環 */}
          <g transform="translate(60, 40)">
            <polygon points="40,110 90,30 200,20 230,100 150,130" fill="none" stroke="#2563eb" strokeWidth="2.5" />
            <circle cx="40" cy="110" r="5" fill="#1e40af" /><text x="25" y="115" fontSize="11" fontWeight="bold" fill="#1e40af">A</text>
            <circle cx="90" cy="30" r="5" fill="#1e40af" /><text x="85" y="20" fontSize="11" fontWeight="bold" fill="#1e40af">B</text>
            <circle cx="200" cy="20" r="5" fill="#1e40af" /><text x="210" y="20" fontSize="11" fontWeight="bold" fill="#1e40af">C</text>
            <circle cx="230" cy="100" r="5" fill="#1e40af" /><text x="240" y="105" fontSize="11" fontWeight="bold" fill="#1e40af">D</text>
            <circle cx="150" cy="130" r="5" fill="#1e40af" /><text x="150" y="148" fontSize="11" fontWeight="bold" fill="#1e40af">E</text>

            <line x1="150" y1="130" x2="48" y2="114" stroke="#e11d48" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="48" cy="114" r="4" fill="#e11d48" />
            <text x="55" y="130" fontSize="9" fontWeight="bold" fill="#e11d48">閉合差 W</text>
          </g>

          {/* 右側：坐標增量與改正公式 */}
          <g transform="translate(300, 35)">
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#0f172a">導線計算核心公式</text>
            
            <g>
              <text x="0" y="35" fontSize="10" fill="#334155">縱坐標增量：ΔX ＝ S × sin(方位角 φ)</text>
              <text x="0" y="52" fontSize="10" fill="#334155">橫坐標增量：ΔY ＝ S × cos(方位角 φ)</text>
              <text x="0" y="70" fontSize="10" fontWeight="bold" fill="#e11d48">位置閉合差：W ＝ √(wx² + wy²)</text>
              <text x="0" y="88" fontSize="10" fontWeight="bold" fill="#2563eb">導線精度：K ＝ 1 / (周長 ∑S ÷ W)</text>
            </g>

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

    // 16. 鞋帶公式多邊形面積計算
    case 'surveying-shoelace-area':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="鞋帶公式坐標法多邊形面積計算">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 坐標鞋帶陣列圖 */}
          <g transform="translate(60, 45)">
            <text x="80" y="10" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f172a">坐標列矩陣 (順時針/逆時針)</text>
            <g transform="translate(20, 25)" fontSize="11" fontFamily="monospace" fontWeight="bold">
              <text x="0" y="20" fill="#2563eb">X1</text><text x="60" y="20" fill="#059669">Y1</text>
              <text x="0" y="45" fill="#2563eb">X2</text><text x="60" y="45" fill="#059669">Y2</text>
              <text x="0" y="70" fill="#2563eb">X3</text><text x="60" y="70" fill="#059669">Y3</text>
              <text x="0" y="95" fill="#2563eb">X1</text><text x="60" y="95" fill="#059669">Y1 (回到起點)</text>

              <line x1="20" y1="18" x2="55" y2="42" stroke="#dc2626" strokeWidth="2" />
              <line x1="20" y1="43" x2="55" y2="67" stroke="#dc2626" strokeWidth="2" />
              <line x1="20" y1="68" x2="55" y2="92" stroke="#dc2626" strokeWidth="2" />

              <line x1="55" y1="18" x2="20" y2="42" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="55" y1="43" x2="20" y2="67" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="55" y1="68" x2="20" y2="92" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2" />
            </g>
          </g>

          {/* 右側：計算步驟與公式 */}
          <g transform="translate(260, 45)">
            <text x="0" y="10" fontSize="12" fontWeight="bold" fill="#0f172a">鞋帶公式 (Shoelace Formula)</text>
            <g>
              <rect x="0" y="20" width="245" height="32" fill="#fee2e2" stroke="#fca5a5" rx="4" />
              <text x="8" y="40" fontSize="10" fontWeight="bold" fill="#991b1b">
                2 × 面積 ＝ | ∑(Xi · Yi+1) － ∑(Xi+1 · Yi) |
              </text>
              <rect x="0" y="60" width="245" height="32" fill="#dbeafe" stroke="#93c5fd" rx="4" />
              <text x="8" y="80" fontSize="10" fontWeight="bold" fill="#1e40af">
                最終面積 A ＝ | 交叉積之差 | ÷ 2
              </text>
              <text x="0" y="108" fontSize="9" fill="#64748b">
                ★ 首尾必須封閉（重複第一點坐標），交叉相減後除以 2！
              </text>
            </g>
          </g>

          <rect x="40" y="180" width="460" height="18" fill="#fef3c7" rx="3" />
          <text x="270" y="193" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
            適用於任意多邊形地籍面積計算 ｜ 手算速度比傳統梯形法快 3 倍且不易出錯！
          </text>
        </svg>
      );

    // 17. 空間坐標系與正射影向量
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
            <text x="0" y="0" fontSize="12" fontWeight="bold" fill="#0f172a">空間點與向量投影幾何</text>
            
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

    // 18. 空間向量外積與空間平面方程式
    case 'math-cross-product-plane':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="空間向量外積右手定則與平面方程式圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 左圖：外積法向量立體圖 */}
          <g transform="translate(110, 130)">
            {/* 平行四邊形基底平面 */}
            <polygon points="0,0 80,-10 130,20 50,30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
            {/* 向量 a */}
            <line x1="0" y1="0" x2="80" y2="-10" stroke="#2563eb" strokeWidth="2.5" />
            <polygon points="84,-10 74,-15 75,-5" fill="#2563eb" />
            <text x="45" y="-14" fontSize="10" fontWeight="bold" fill="#2563eb">向量 a</text>
            {/* 向量 b */}
            <line x1="0" y1="0" x2="50" y2="30" stroke="#059669" strokeWidth="2.5" />
            <polygon points="53,32 42,28 47,21" fill="#059669" />
            <text x="15" y="30" fontSize="10" fontWeight="bold" fill="#059669">向量 b</text>
            {/* 法向量 n = a x b (垂直向上) */}
            <line x1="0" y1="0" x2="0" y2="-80" stroke="#dc2626" strokeWidth="3" />
            <polygon points="0,-85 -5,-73 5,-73" fill="#dc2626" />
            <text x="8" y="-75" fontSize="11" fontWeight="bold" fill="#dc2626">法向量 n ＝ a × b</text>
            {/* 垂直符號 */}
            <rect x="0" y="-12" width="10" height="10" fill="none" stroke="#dc2626" strokeWidth="1.2" />
          </g>

          {/* 右側：公式與幾何意義 */}
          <g transform="translate(260, 35)">
            <text x="0" y="15" fontSize="12" fontWeight="bold" fill="#0f172a">向量外積與空間平面核心</text>

            <rect x="0" y="26" width="245" height="32" fill="#eff6ff" stroke="#bfdbfe" rx="4" />
            <text x="10" y="42" fontSize="10" fontWeight="bold" fill="#1e40af">1. 平行四邊形面積 ＝ | a × b |</text>
            <text x="10" y="52" fontSize="9" fill="#1d4ed8">三角形面積 ＝ (1/2) × | a × b |</text>

            <rect x="0" y="65" width="245" height="34" fill="#ecfdf5" stroke="#a7f3d0" rx="4" />
            <text x="10" y="80" fontSize="10" fontWeight="bold" fill="#065f46">2. 空間點法式平面方程式</text>
            <text x="10" y="93" fontSize="9" fontWeight="bold" fill="#047857">E: a(x - x₀) + b(y - y₀) + c(z - z₀) ＝ 0</text>

            <rect x="0" y="106" width="245" height="32" fill="#fef2f2" stroke="#fecaca" rx="4" />
            <text x="10" y="122" fontSize="9" fontWeight="bold" fill="#991b1b">★ 外積反交換律：b × a ＝ - (a × b)</text>
          </g>

          <text x="270" y="194" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
            求過不共線三點 A, B, C 之平面：先算 AB × AC 求得法向量 n，再套點法式秒殺！
          </text>
        </svg>
      );

    // 19. 拋物線幾何定義與正焦弦長
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

    // 20. 橢圓與雙曲線幾何對比
    case 'math-ellipse-hyperbola':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="橢圓與雙曲線幾何特性對照圖">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          {/* 左側：橢圓 (距離和固定) */}
          <g transform="translate(45, 30)">
            <text x="90" y="15" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">1. 橢圓：PF1 + PF2 ＝ 2a (距離和)</text>
            <ellipse cx="90" cy="75" rx="75" ry="45" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <circle cx="45" cy="75" r="4" fill="#dc2626" /><text x="45" y="92" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">F1</text>
            <circle cx="135" cy="75" r="4" fill="#dc2626" /><text x="135" y="92" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">F2</text>
            <circle cx="115" cy="40" r="3" fill="#0f172a" /><text x="125" y="38" fontSize="8" fontWeight="bold">P</text>
            <line x1="45" y1="75" x2="115" y2="40" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="135" y1="75" x2="115" y2="40" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
            <text x="90" y="135" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">a² ＝ b² ＋ c² (a 最大)</text>
          </g>

          {/* 右側：雙曲線 (距離差固定 + 漸近線) */}
          <g transform="translate(295, 30)">
            <text x="90" y="15" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">2. 雙曲線：|PF1 - PF2| ＝ 2a (距離差)</text>
            {/* 漸近線 */}
            <line x1="20" y1="115" x2="160" y2="35" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="20" y1="35" x2="160" y2="115" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* 兩雙曲線分支 */}
            <path d="M 40,35 Q 65,75 40,115" stroke="#dc2626" strokeWidth="2" fill="none" />
            <path d="M 140,35 Q 115,75 140,115" stroke="#dc2626" strokeWidth="2" fill="none" />
            <circle cx="25" cy="75" r="4" fill="#dc2626" /><text x="25" y="90" textAnchor="middle" fontSize="8" fontWeight="bold">F1</text>
            <circle cx="155" cy="75" r="4" fill="#dc2626" /><text x="155" y="90" textAnchor="middle" fontSize="8" fontWeight="bold">F2</text>
            <text x="90" y="135" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#991b1b">c² ＝ a² ＋ b² (c 最大)</text>
          </g>

          <rect x="35" y="175" width="470" height="20" fill="#fef3c7" stroke="#fcd34d" rx="4" />
          <text x="270" y="189" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
            漸近線公式神技：將雙曲線標準式常數項「1」直接改寫為「0」，立刻分解得到兩條漸近線！
          </text>
        </svg>
      );

    // 21. 英文關代 that 禁忌決策樹
    case 'english-relative-pronoun':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="關係代名詞 that 禁忌與選用決策樹">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="20" width="500" height="180" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          <text x="270" y="42" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            關係代名詞「that」三大禁忌與必用時機判斷樹
          </text>

          <g transform="translate(45, 65)">
            <rect x="0" y="0" width="135" height="60" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" rx="6" />
            <text x="67" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">禁忌 ① 逗號後</text>
            <text x="67" y="38" textAnchor="middle" fontSize="9" fill="#7f1d1d">, _____ 禁用 that！</text>
            <text x="67" y="50" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">改用 who / which</text>
          </g>

          <g transform="translate(202, 65)">
            <rect x="0" y="0" width="135" height="60" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" rx="6" />
            <text x="67" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">禁忌 ② 介系詞後</text>
            <text x="67" y="38" textAnchor="middle" fontSize="9" fill="#7f1d1d">prep. _____ 禁用 that！</text>
            <text x="67" y="50" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">改用 in which / whom</text>
          </g>

          <g transform="translate(360, 65)">
            <rect x="0" y="0" width="135" height="60" fill="#dcfce7" stroke="#10b981" strokeWidth="1.5" rx="6" />
            <text x="67" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">★ 強制必用 that</text>
            <text x="67" y="36" textAnchor="middle" fontSize="9" fill="#064e3b">先行詞「人 ＋ 物/動物」</text>
            <text x="67" y="48" textAnchor="middle" fontSize="9" fill="#064e3b">最高級、the only/first</text>
          </g>

          <rect x="45" y="145" width="450" height="35" fill="#f1f5f9" stroke="#94a3b8" rx="6" />
          <text x="270" y="162" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">
            3 秒秒殺口訣：見逗號不用 that、見介系詞不用 that！
          </text>
          <text x="270" y="174" textAnchor="middle" fontSize="9" fill="#64748b">
            子句缺主詞或受詞選「關代」；子句結構完整選「關副 (where/when/why)」！
          </text>
        </svg>
      );

    // 22. 英文假設語氣時態降格時間軸
    case 'english-subjunctive-mood':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="假設語氣時態降格時間軸圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          <text x="270" y="36" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">
            假設語氣核心定理：真實事實 vs 假設退格時態對照
          </text>

          {/* 兩大主幹對照卡 */}
          <g transform="translate(35, 50)">
            {/* 1. 與現在事實相反 */}
            <rect x="0" y="0" width="230" height="90" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="12" y="20" fontSize="11" fontWeight="bold" fill="#1e40af">1. 與「現在」事實相反</text>
            <text x="12" y="38" fontSize="9" fill="#1e293b">If 子句：動詞用「過去式 (V-ed / were)」</text>
            <text x="12" y="54" fontSize="9" fill="#1e293b">主句：would / should / could / might + 原形 V</text>
            <rect x="10" y="64" width="210" height="20" fill="#dbeafe" rx="3" />
            <text x="115" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1d4ed8">If I were you, I would study now.</text>

            {/* 2. 與過去事實相反 */}
            <rect x="240" y="0" width="230" height="90" fill="#ecfdf5" stroke="#a7f3d0" rx="6" />
            <text x="252" y="20" fontSize="11" fontWeight="bold" fill="#065f46">2. 與「過去」事實相反</text>
            <text x="252" y="38" fontSize="9" fill="#1e293b">If 子句：動詞用「過去完成式 (had + p.p.)」</text>
            <text x="252" y="54" fontSize="9" fill="#1e293b">主句：would / should / could / might + have + p.p.</text>
            <rect x="250" y="64" width="210" height="20" fill="#d1fae5" rx="3" />
            <text x="355" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#047857">If he had known, he would have called.</text>
          </g>

          <rect x="35" y="155" width="470" height="38" fill="#fef2f2" stroke="#fecaca" rx="4" />
          <text x="270" y="170" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">
            黃金規律：假設語氣時態一律比真實時間「向過去退一格 (Past Shift)」！
          </text>
          <text x="270" y="184" textAnchor="middle" fontSize="9" fill="#7f1d1d">
            現在的事實 ➜ 降格用過去式 (were) ｜ 過去的事實 ➜ 降格用過去完成式 (had p.p.)
          </text>
        </svg>
      );

    // 23. 英文倒裝句五大核心結構
    case 'english-inversion-grammar':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="英文倒裝句五大結構圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          <text x="270" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f172a">
            高工段考必考兩大倒裝句核心結構
          </text>

          {/* 1. if 省略倒裝 */}
          <g transform="translate(35, 50)">
            <rect x="0" y="0" width="230" height="85" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="12" y="20" fontSize="11" fontWeight="bold" fill="#1e40af">① If 省略倒裝（助動詞搬到主詞前）</text>
            <text x="12" y="38" fontSize="9" fill="#1e293b">If I had studied ➜ Had I studied...</text>
            <text x="12" y="54" fontSize="9" fill="#1e293b">If I were rich ➜ Were I rich...</text>
            <text x="12" y="70" fontSize="9" fill="#1e293b">If it should rain ➜ Should it rain...</text>
          </g>

          {/* 2. 否定副詞置首倒裝 */}
          <g transform="translate(275, 50)">
            <rect x="0" y="0" width="230" height="85" fill="#fef2f2" stroke="#fecaca" rx="6" />
            <text x="12" y="20" fontSize="11" fontWeight="bold" fill="#991b1b">② 否定副詞置首（疑問句語序）</text>
            <text x="12" y="38" fontSize="9" fill="#1e293b">Never / Seldom / Rarely / Hardly + 助動詞 + S</text>
            <text x="12" y="54" fontSize="9" fill="#1e293b">Not only A but also B 置首倒裝前句</text>
            <text x="12" y="70" fontSize="9" fontWeight="bold" fill="#dc2626">Never have I seen such a tall tower!</text>
          </g>

          <rect x="35" y="150" width="470" height="42" fill="#fffbeb" stroke="#fcd34d" rx="4" />
          <text x="270" y="167" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
            口訣：見 Had / Were / Should 置首就是 if 偷偷被省略！
          </text>
          <text x="270" y="182" textAnchor="middle" fontSize="9" fill="#78350f">
            見否定副詞置首，後面「必須像問句一樣」將 do / does / did / be / have 搬到主詞前方！
          </text>
        </svg>
      );

    // 24. 國文 蘇軾〈赤壁賦〉水月思辨哲理圖
    case 'chinese-chibi-philosophy':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="蘇軾赤壁賦水月思辨圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          <text x="270" y="36" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            蘇軾〈赤壁賦〉主客問答與「水月之辨」哲思架構
          </text>

          {/* 兩大視角對照 */}
          <g transform="translate(35, 50)">
            {/* 客之悲觀視角 (變者) */}
            <rect x="0" y="0" width="230" height="95" fill="#f8fafc" stroke="#94a3b8" rx="6" />
            <text x="12" y="22" fontSize="11" fontWeight="bold" fill="#475569">【客之悲嘆 · 著眼於「變」】</text>
            <text x="12" y="42" fontSize="9" fill="#334155">逝者如斯，而未嘗往也；盈虛如彼，而卒莫消長</text>
            <text x="12" y="60" fontSize="9" fill="#dc2626">哀吾生之須臾，羨長江之無窮</text>
            <text x="12" y="78" fontSize="9" fill="#64748b">寄蜉蝣於天地，渺滄海之一粟 ➜ 悲愴空虛</text>

            {/* 蘇軾之達觀視角 (不變者) */}
            <rect x="240" y="0" width="230" height="95" fill="#ecfdf5" stroke="#10b981" rx="6" />
            <text x="252" y="22" fontSize="11" fontWeight="bold" fill="#065f46">【蘇軾之豁達 · 著眼於「不變」】</text>
            <text x="252" y="42" fontSize="9" fill="#064e3b">自其變者而觀之，則天地曾不能以一瞬</text>
            <text x="252" y="60" fontSize="9" fontWeight="bold" fill="#047857">自其不變者而觀之，則物與我皆無盡也！</text>
            <text x="252" y="78" fontSize="9" fill="#15803d">江上清風、山間明月 ➜ 取之無禁，用之不竭</text>
          </g>

          <rect x="35" y="160" width="470" height="32" fill="#eff6ff" stroke="#93c5fd" rx="4" />
          <text x="270" y="175" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">
            段考考點：由「水月」起興，先悲後喜，融儒、道、佛思想於一爐之曠達人生觀！
          </text>
          <text x="270" y="186" textAnchor="middle" fontSize="9" fill="#1d4ed8">
            客從時間有限看「短暫與渺小」；蘇軾從宇宙造化看「共享與無盡」！
          </text>
        </svg>
      );

    // 25. 國文 韓愈〈師說〉三層對比論證圖
    case 'chinese-shishuo-contrasts':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="韓愈師說三層對比論證架構圖">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          <text x="270" y="35" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            韓愈〈師說〉三大正反對比論證架構
          </text>

          {/* 三層對比卡 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="470" height="34" fill="#eff6ff" stroke="#bfdbfe" rx="4" />
            <text x="12" y="16" fontSize="10" fontWeight="bold" fill="#1e40af">第一層【古聖 vs 今愚】</text>
            <text x="12" y="28" fontSize="9" fill="#1e293b">古之聖人（其智益遠）猶且從師問焉 ⟷ 今之眾人（其智益下）而恥學於師 ➜ 聖益聖、愚益愚</text>

            <rect x="0" y="40" width="470" height="34" fill="#fffbeb" stroke="#fde68a" rx="4" />
            <text x="12" y="56" fontSize="10" fontWeight="bold" fill="#92400e">第二層【愛子 vs 於其身】</text>
            <text x="12" y="68" fontSize="9" fill="#1e293b">愛其子，擇師而教之 ⟷ 於其身也，則恥師焉 ➜ 小學而大遺，吾未見其明也！</text>

            <rect x="0" y="80" width="470" height="34" fill="#fef2f2" stroke="#fecaca" rx="4" />
            <text x="12" y="96" fontSize="10" fontWeight="bold" fill="#991b1b">第三層【巫醫樂師百工 vs 士大夫】</text>
            <text x="12" y="108" fontSize="9" fill="#1e293b">百工之人不恥相師 ⟷ 士大夫之族曰師曰弟子則群聚而笑之 ➜ 師道之不復，士大夫之智反不如百工！</text>
          </g>

          <rect x="35" y="168" width="470" height="24" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="270" y="184" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">
            核心宗旨在於重振「師道」：師者，所以傳道、受業、解惑也 ｜ 無貴無賤，無長無少，道之所存，師之所存！
          </text>
        </svg>
      );

    // 26. 國文 歸有光〈項脊軒志〉空間場域演變圖
    case 'chinese-xiangjixuan-space':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="歸有光項脊軒志空間演變與象徵圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />

          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            歸有光〈項脊軒志〉建築空間場域轉變與家族寄情
          </text>

          {/* 三大空間階段 */}
          <g transform="translate(35, 48)">
            {/* 1. 修葺前 */}
            <rect x="0" y="0" width="150" height="95" fill="#f8fafc" stroke="#94a3b8" rx="6" />
            <text x="75" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#475569">階段 ①：老屋破敗</text>
            <text x="75" y="36" textAnchor="middle" fontSize="8" fill="#64748b">室僅方丈，可容一人居</text>
            <text x="75" y="52" textAnchor="middle" fontSize="8" fill="#64748b">百年老屋，塵泥滲漉</text>
            <text x="75" y="68" textAnchor="middle" fontSize="8" fill="#64748b">雨澤下注，每移案顧視</text>
            <text x="75" y="84" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e293b">不能得日，日過午已昏</text>

            {/* 2. 修葺後 */}
            <rect x="160" y="0" width="150" height="95" fill="#eff6ff" stroke="#3b82f6" rx="6" />
            <text x="235" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">階段 ②：雅致書齋</text>
            <text x="235" y="36" textAnchor="middle" fontSize="8" fill="#1e40af">闢三方牖，明月半牆</text>
            <text x="235" y="52" textAnchor="middle" fontSize="8" fill="#1e40af">雜植蘭桂竹木於庭</text>
            <text x="235" y="68" textAnchor="middle" fontSize="8" fill="#1e40af">桂影斑駁，風移影動</text>
            <text x="235" y="84" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#2563eb">借書滿架，偃仰嘯歌</text>

            {/* 3. 分家與亡妻 */}
            <rect x="320" y="0" width="150" height="95" fill="#fef2f2" stroke="#ef4444" rx="6" />
            <text x="395" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">階段 ③：分家與悼亡</text>
            <text x="395" y="36" textAnchor="middle" fontSize="8" fill="#7f1d1d">諸父異爨，內外多置小門</text>
            <text x="395" y="52" textAnchor="middle" fontSize="8" fill="#7f1d1d">牆往往而是，東犬西吠</text>
            <text x="395" y="68" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b91c1c">庭有枇杷樹，吾妻死之年</text>
            <text x="395" y="84" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">所手植也，今已亭亭如蓋</text>
          </g>

          <rect x="35" y="160" width="470" height="32" fill="#fffbeb" stroke="#fcd34d" rx="4" />
          <text x="270" y="174" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400e">
            建築空間變遷象徵家族興衰與至情：以「小軒」為經、家族親情為緯，多用「托物寄情」手法！
          </text>
          <text x="270" y="186" textAnchor="middle" fontSize="9" fill="#78350f">
            末段「枇杷樹」神來之筆，將深摯思念化為空間靜默風景，是段考非選鑑賞最高頻題型！
          </text>
        </svg>
      );

    // 27. 力學 共點力平衡與拉密定理
    case 'mechanics-coplanar-forces':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="共點力系平衡與拉密定理圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            平面共點力系平衡條件與拉密定理 (Lami&apos;s Theorem)
          </text>

          {/* 左圖：三力匯交於 O 點 */}
          <g transform="translate(45, 55)">
            <circle cx="80" cy="65" r="5" fill="#0f172a" />
            <text x="80" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">O (共點)</text>
            
            {/* 力 P (向上偏右) */}
            <path d="M 80,65 L 125,15" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrow-red)" />
            <text x="135" y="20" fontSize="11" fontWeight="bold" fill="#b91c1c">P</text>

            {/* 力 Q (向左上) */}
            <path d="M 80,65 L 20,40" stroke="#3b82f6" strokeWidth="2.5" />
            <text x="10" y="40" fontSize="11" fontWeight="bold" fill="#1d4ed8">Q</text>

            {/* 力 R (向下偏右) */}
            <path d="M 80,65 L 95,125" stroke="#10b981" strokeWidth="2.5" />
            <text x="105" y="130" fontSize="11" fontWeight="bold" fill="#047857">R</text>

            {/* 夾角弧線標示 */}
            <path d="M 100,45 A 25 25 0 0 0 55,50" fill="none" stroke="#64748b" strokeWidth="1.2" strokeDasharray="2 2" />
            <text x="80" y="42" textAnchor="middle" fontSize="9" fill="#475569">γ</text>

            <path d="M 50,55 A 30 30 0 0 0 85,95" fill="none" stroke="#64748b" strokeWidth="1.2" strokeDasharray="2 2" />
            <text x="55" y="85" textAnchor="middle" fontSize="9" fill="#475569">β</text>

            <path d="M 90,95 A 30 30 0 0 0 110,45" fill="none" stroke="#64748b" strokeWidth="1.2" strokeDasharray="2 2" />
            <text x="110" y="85" textAnchor="middle" fontSize="9" fill="#475569">α</text>
          </g>

          {/* 右圖：首尾相接封閉三角形 */}
          <g transform="translate(230, 50)">
            <rect x="0" y="0" width="270" height="105" fill="#f1f5f9" stroke="#cbd5e1" rx="6" />
            <text x="135" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b">三力平衡向量三角形必封閉</text>
            
            <path d="M 40,80 L 100,25 L 140,80 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            <text x="60" y="45" fontSize="10" fontWeight="bold" fill="#1e40af">Q</text>
            <text x="125" y="50" fontSize="10" fontWeight="bold" fill="#ef4444">P</text>
            <text x="90" y="95" fontSize="10" fontWeight="bold" fill="#10b981">R</text>

            <rect x="155" y="30" width="105" height="60" fill="#ffffff" stroke="#93c5fd" rx="4" />
            <text x="207" y="48" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">拉密定理公式</text>
            <text x="207" y="65" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b91c1c">P / sin α</text>
            <text x="207" y="78" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">= Q / sin β = R / sin γ</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">
            充要條件：合力 R = 0 (ΣFx = 0, ΣFy = 0) ｜ 剛體受三力平衡時，三力作用線必「共點」或「互相平行」！
          </text>
        </svg>
      );

    // 28. 力學 伐里農力矩定理與力偶特性
    case 'mechanics-moment-varignon':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="伐里農力矩定理與力偶圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            力矩 Mo = F·d、伐里農定理與力偶矩之自由向量特性
          </text>

          {/* 左側：伐里農分力取矩 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">伐里農定理：分力之矩代數和</text>

            <line x1="30" y1="90" x2="195" y2="90" stroke="#94a3b8" strokeWidth="1" />
            <line x1="30" y1="90" x2="30" y2="25" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="30" cy="90" r="4" fill="#0f172a" />
            <text x="20" y="102" fontSize="9" fontWeight="bold" fill="#0f172a">O</text>

            {/* 斜力 F 及分力 */}
            <line x1="30" y1="90" x2="160" y2="40" stroke="#cbd5e1" strokeDasharray="3 3" />
            <path d="M 160,40 L 195,20" stroke="#ef4444" strokeWidth="2.5" />
            <text x="180" y="18" fontSize="10" fontWeight="bold" fill="#ef4444">F (斜向)</text>

            <path d="M 160,40 L 195,40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="2 2" />
            <text x="175" y="52" fontSize="9" fontWeight="bold" fill="#2563eb">Fx</text>

            <path d="M 160,40 L 160,20" stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" />
            <text x="145" y="30" fontSize="9" fontWeight="bold" fill="#059669">Fy</text>

            <rect x="35" y="65" width="165" height="36" fill="#ffffff" stroke="#93c5fd" rx="4" />
            <text x="117" y="80" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">Mo = Fy · x - Fx · y</text>
            <text x="117" y="93" textAnchor="middle" fontSize="8" fill="#475569">分力乘正交坐標，避免算斜臂 d！</text>
          </g>

          {/* 右側：純力偶之自由向量 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9333ea">力偶矩 M = F · d (全場等效)</text>

            <path d="M 40,40 L 110,40" stroke="#8b5cf6" strokeWidth="2.5" />
            <text x="115" y="44" fontSize="10" fontWeight="bold" fill="#7c3aed">F</text>

            <path d="M 110,80 L 40,80" stroke="#8b5cf6" strokeWidth="2.5" />
            <text x="25" y="84" fontSize="10" fontWeight="bold" fill="#7c3aed">F</text>

            <line x1="75" y1="40" x2="75" y2="80" stroke="#64748b" strokeWidth="1.2" strokeDasharray="2 2" />
            <text x="82" y="63" fontSize="9" fontWeight="bold" fill="#64748b">臂長 d</text>

            {/* 旋轉指示箭頭 */}
            <path d="M 155,50 A 20 20 0 1 1 155,75" fill="none" stroke="#ec4899" strokeWidth="2" />
            <text x="185" y="65" fontSize="10" fontWeight="bold" fill="#db2777">M = F·d</text>

            <rect x="20" y="92" width="185" height="15" fill="#f3e8ff" rx="3" />
            <text x="112" y="103" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#6b21a8">自由向量：對平面任意點之力矩均相同！</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#eff6ff" stroke="#bfdbfe" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">
            右手定則：逆時鐘力矩為正 (+) ｜ 剛架求支承反力：優先對「未知力交點」取矩 (ΣM = 0) 一式秒殺！
          </text>
        </svg>
      );

    // 29. 力學 組合截面形心與摩擦自鎖
    case 'mechanics-centroid-friction':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="截面形心與摩擦角自鎖圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            組合截面形心幾何法 (ȳ = ΣAy/ΣA) 與摩擦自鎖角臨界
          </text>

          {/* 左圖：T型截面形心加權 */}
          <g transform="translate(45, 48)">
            <rect x="0" y="0" width="205" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="102" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">T 型梁組合截面形心</text>

            {/* 翼緣 */}
            <rect x="40" y="25" width="125" height="20" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="102" y="38" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e3a8a">翼緣 A2 (y2=45)</text>

            {/* 腹板 */}
            <rect x="80" y="45" width="45" height="50" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
            <text x="102" y="73" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#9a3412">腹板 A1 (y1=20)</text>

            {/* 形心紅線 */}
            <line x1="25" y1="60" x2="180" y2="60" stroke="#dc2626" strokeWidth="1.8" strokeDasharray="4 2" />
            <circle cx="102" cy="60" r="3.5" fill="#dc2626" />
            <text x="145" y="56" fontSize="9" fontWeight="bold" fill="#dc2626">形心 C (ȳ=30.7)</text>
            <text x="102" y="103" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#334155">ȳ = (A1·y1 + A2·y2) / (A1 + A2)</text>
          </g>

          {/* 右圖：斜面摩擦自鎖 */}
          <g transform="translate(275, 48)">
            <rect x="0" y="0" width="230" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="115" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">斜面摩擦角與自鎖條件</text>

            {/* 斜坡 */}
            <path d="M 30,95 L 170,95 L 170,35 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
            <text x="55" y="90" fontSize="9" fill="#475569">θ (傾角)</text>

            {/* 滑塊與受力 */}
            <rect x="90" y="50" width="35" height="20" transform="rotate(-23 90 50)" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <line x1="95" y1="50" x2="95" y2="80" stroke="#dc2626" strokeWidth="2" />
            <text x="100" y="75" fontSize="8" fontWeight="bold" fill="#dc2626">W (重力)</text>

            <rect x="135" y="30" width="85" height="65" fill="#ffffff" stroke="#86efac" rx="4" />
            <text x="177" y="45" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#15803d">摩擦力三大律</text>
            <text x="177" y="60" textAnchor="middle" fontSize="8" fill="#1e293b">fs = μs · N (極限)</text>
            <text x="177" y="73" textAnchor="middle" fontSize="8" fill="#1e293b">tan φs = μs (摩擦角)</text>
            <text x="177" y="87" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b91c1c">θ ≤ φs ➜ 自鎖不滑</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef2f2" stroke="#fecaca" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">
            挖空開孔一律以「負面積 (-A)」代入 ｜ 靜止未動時摩擦力 f 永遠等於「外加推力 P」！
          </text>
        </svg>
      );

    // 30. 力學 桁架分析與零力桿速判
    case 'mechanics-truss-zeroforce':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="桁架分析與零力桿圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            桁架靜定判別 (m = 2j - 3)、截面法一刀切與零力桿速判兩鐵律
          </text>

          {/* 零力桿兩鐵律 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#eff6ff" stroke="#93c5fd" rx="6" />
            <text x="112" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">零力桿 (Zero-Force) 兩大速判鐵律</text>

            {/* 鐵律一：兩桿不共線無外力 */}
            <g transform="translate(15, 28)">
              <circle cx="20" cy="25" r="4" fill="#ef4444" />
              <line x1="20" y1="25" x2="60" y2="10" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
              <line x1="20" y1="25" x2="20" y2="60" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
              <text x="65" y="30" fontSize="8" fontWeight="bold" fill="#991b1b">鐵律 ①：兩桿不共線無外力</text>
              <text x="65" y="45" fontSize="8" fill="#1e293b">➜ 兩桿內力「皆為零」！</text>
            </g>

            {/* 鐵律二：三桿兩共線無外力 */}
            <g transform="translate(15, 70)">
              <line x1="5" y1="25" x2="65" y2="25" stroke="#2563eb" strokeWidth="2" />
              <circle cx="35" cy="25" r="4" fill="#0f172a" />
              <line x1="35" y1="25" x2="35" y2="0" stroke="#dc2626" strokeWidth="2" strokeDasharray="3 2" />
              <text x="75" y="18" fontSize="8" fontWeight="bold" fill="#1e40af">鐵律 ②：三桿兩共線無外力</text>
              <text x="75" y="32" fontSize="8" fill="#1e293b">➜ 獨立斜桿「必為零桿」！</text>
            </g>
          </g>

          {/* 截面法一刀切平衡 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">截面法 (Method of Sections)</text>

            <path d="M 20,85 L 70,30 L 120,85 L 170,30 L 205,85" fill="none" stroke="#64748b" strokeWidth="2" />
            <line x1="20" y1="85" x2="205" y2="85" stroke="#64748b" strokeWidth="2" />
            <line x1="70" y1="30" x2="170" y2="30" stroke="#64748b" strokeWidth="2" />

            {/* 紅色切面線 */}
            <line x1="90" y1="15" x2="105" y2="95" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
            <text x="115" y="25" fontSize="9" fontWeight="bold" fill="#dc2626">一刀切開 (≤3桿)</text>

            <rect x="25" y="88" width="175" height="18" fill="#dcfce7" rx="3" />
            <text x="112" y="100" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">
              對另外兩桿交點取矩 (ΣM=0)，一式秒殺！
            </text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">
            符號鐵律：背離節點為拉力 (+T)，指向節點為壓力 (-C) ｜ 理想桁架無彎矩剪力，僅承受軸向力！
          </text>
        </svg>
      );

    // 31. 力學 梁剪力彎矩 V-M 圖微分幾何關係
    case 'mechanics-vm-diagram':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="梁剪力與彎矩圖圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="32" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            簡支梁載重、剪力圖 (SFD) 與彎矩圖 (BMD) 微分面積幾何
          </text>

          {/* 三層圖解架構 */}
          <g transform="translate(50, 42)">
            {/* 1. 簡支梁載重 */}
            <rect x="40" y="0" width="240" height="6" fill="#64748b" />
            {/* 均佈載重向下箭頭 */}
            <path d="M 40,-8 L 280,-8 M 60,-8 L 60,-1 M 110,-8 L 110,-1 M 160,-8 L 160,-1 M 210,-8 L 210,-1 M 260,-8 L 260,-1" stroke="#ef4444" strokeWidth="1.5" />
            <text x="160" y="-12" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ef4444">均佈載重 w (kN/m)</text>
            <circle cx="40" cy="8" r="4" fill="#0f172a" />
            <circle cx="280" cy="8" r="4" fill="#0f172a" />
            <text x="30" y="20" fontSize="8" fontWeight="bold" fill="#0f172a">RA=wL/2</text>
            <text x="275" y="20" fontSize="8" fontWeight="bold" fill="#0f172a">RB=wL/2</text>

            {/* 2. 剪力圖 SFD */}
            <line x1="40" y1="45" x2="280" y2="45" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
            <polygon points="40,30 160,45 40,45" fill="#bfdbfe" />
            <polygon points="160,45 280,60 280,45" fill="#fecaca" />
            <line x1="40" y1="30" x2="280" y2="60" stroke="#2563eb" strokeWidth="2" />
            <text x="5" y="38" fontSize="8" fontWeight="bold" fill="#2563eb">SFD (+)</text>
            <text x="5" y="58" fontSize="8" fontWeight="bold" fill="#ef4444">SFD (-)</text>
            <circle cx="160" cy="45" r="3" fill="#dc2626" />
            <text x="160" y="40" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">V = 0 點</text>

            {/* 3. 彎矩圖 BMD */}
            <line x1="40" y1="95" x2="280" y2="95" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 2" />
            <path d="M 40,95 Q 160,65 280,95 Z" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
            <text x="5" y="85" fontSize="8" fontWeight="bold" fill="#15803d">BMD</text>
            <text x="160" y="78" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#15803d">Mmax = wL² / 8</text>
          </g>

          {/* 右側：微分定理與面積法 */}
          <g transform="translate(370, 48)">
            <rect x="0" y="0" width="135" height="105" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="67" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e293b">核心微分定律</text>
            <text x="12" y="38" fontSize="9" fontWeight="bold" fill="#2563eb">① dV/dx = -w</text>
            <text x="12" y="55" fontSize="9" fontWeight="bold" fill="#16a34a">② dM/dx = V</text>
            <text x="12" y="72" fontSize="8" fill="#475569">剪力面積 = 彎矩差</text>
            <rect x="8" y="80" width="120" height="20" fill="#fef3c7" rx="3" />
            <text x="67" y="93" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#854d0e">V=0 處 ➜ M 最大！</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#f0fdf4" stroke="#bbf7d0" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">
            集中載重處剪力產生「垂直跳躍」｜ 集中力偶在 SFD 無反應，僅在 BMD 產生跳變！
          </text>
        </svg>
      );

    // 32. 力學 截面慣性矩與平行軸定理
    case 'mechanics-inertia-parallel':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="截面慣性矩與平行軸定理圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            矩形截面二次軸矩 (Ixo = bh³/12) 與平行軸定理 (Ix = Ixo + A·d²)
          </text>

          {/* 左圖：矩形慣性矩與抗彎剛度 */}
          <g transform="translate(45, 48)">
            <rect x="0" y="0" width="215" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="107" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">矩形立放 vs 臥放慣性矩</text>

            <rect x="30" y="25" width="35" height="70" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="47" y="63" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">立放</text>
            <text x="47" y="103" textAnchor="middle" fontSize="8" fill="#475569">h 大 ➜ 剛度大</text>

            <rect x="110" y="55" width="75" height="20" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
            <text x="147" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9a3412">臥放</text>
            <text x="147" y="90" textAnchor="middle" fontSize="8" fill="#475569">h 小 ➜ 易凹陷</text>

            <line x1="15" y1="60" x2="80" y2="60" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="22" y="55" fontSize="8" fontWeight="bold" fill="#dc2626">xc</text>
          </g>

          {/* 右圖：平行軸定理移軸幾何 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">平行軸定理 (移軸加 Ad²)</text>

            {/* 形心軸與平行軸 */}
            <line x1="20" y1="35" x2="205" y2="35" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
            <text x="180" y="30" fontSize="8" fontWeight="bold" fill="#ef4444">形心軸 xo</text>

            <line x1="20" y1="80" x2="205" y2="80" stroke="#2563eb" strokeWidth="2" />
            <text x="180" y="75" fontSize="8" fontWeight="bold" fill="#2563eb">平行軸 x</text>

            <line x1="60" y1="35" x2="60" y2="80" stroke="#0f172a" strokeWidth="1.5" />
            <text x="68" y="60" fontSize="9" fontWeight="bold" fill="#0f172a">距離 d</text>

            <rect x="90" y="45" width="125" height="48" fill="#f3e8ff" stroke="#c084fc" rx="4" />
            <text x="152" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6b21a8">Ix = Ixo + A · d²</text>
            <text x="152" y="73" textAnchor="middle" fontSize="8" fill="#1e293b">底邊軸: bh³/3 (4倍大)</text>
            <text x="152" y="85" textAnchor="middle" fontSize="8" fill="#1e293b">極慣性矩: J = Ix + Iy</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#eff6ff" stroke="#bfdbfe" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">
            移軸鐵律：中繼站必為「形心軸」，由形心移外必定加上 A·d²，慣性矩永遠越移越大！
          </text>
        </svg>
      );

    // 33. 力學 莫爾圓 (Mohr's Circle) 平面應力轉換
    case 'mechanics-mohr-circle':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="莫爾圓應力轉換圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            平面應力狀態與莫爾圓 (Mohr&apos;s Circle) 幾何主應力速解
          </text>

          {/* 莫爾圓幾何大圖 */}
          <g transform="translate(60, 48)">
            {/* 坐標軸 */}
            <line x1="20" y1="65" x2="260" y2="65" stroke="#64748b" strokeWidth="1.5" />
            <text x="265" y="68" fontSize="10" fontWeight="bold" fill="#0f172a">σ (正應力)</text>

            <line x1="120" y1="10" x2="120" y2="105" stroke="#64748b" strokeWidth="1.5" />
            <text x="120" y="5" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">τ (剪應力)</text>

            {/* 圓體 */}
            <circle cx="160" cy="65" r="45" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
            <circle cx="160" cy="65" r="3" fill="#dc2626" />
            <text x="160" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">C(σavg, 0)</text>

            {/* 最大主應力 σ1 與最小主應力 σ2 */}
            <circle cx="205" cy="65" r="3" fill="#16a34a" />
            <text x="215" y="60" fontSize="9" fontWeight="bold" fill="#15803d">σ1 (最大)</text>

            <circle cx="115" cy="65" r="3" fill="#16a34a" />
            <text x="95" y="60" fontSize="9" fontWeight="bold" fill="#15803d">σ2</text>

            {/* 最大剪應力頂點 */}
            <circle cx="160" cy="20" r="3" fill="#9333ea" />
            <line x1="160" y1="65" x2="160" y2="20" stroke="#9333ea" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="180" y="25" fontSize="9" fontWeight="bold" fill="#7e22ce">τmax = 半徑 R</text>
          </g>

          {/* 右側：計算公式卡 */}
          <g transform="translate(345, 48)">
            <rect x="0" y="0" width="160" height="105" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="80" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">莫爾圓速算三公式</text>
            <text x="10" y="34" fontSize="8" fontWeight="bold" fill="#dc2626">圓心: σavg = (σx+σy)/2</text>
            <text x="10" y="50" fontSize="8" fontWeight="bold" fill="#7e22ce">半徑: R = √[((σx-σy)/2)² + τ²]</text>
            <text x="10" y="66" fontSize="8" fontWeight="bold" fill="#15803d">主應力: σ1,2 = σavg ± R</text>
            <text x="10" y="82" fontSize="8" fontWeight="bold" fill="#b45309">最大剪: τmax = R</text>
            <text x="10" y="98" fontSize="8" fill="#475569">主平面上剪應力恆為 0！</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fdf4ff" stroke="#f0abfc" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#a21caf">
            不變量鐵律：正應力總和恆定 σ1 + σ2 = σx + σy ｜ 莫爾圓上旋轉 2θ 對應實體旋轉 θ！
          </text>
        </svg>
      );

    // 34. 製圖 CNS 3 圖紙尺度與線型規範
    case 'drafting-cns-sheets-lines':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="CNS 3 圖紙與標準線型圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            CNS 3 建築圖紙 A 系列對折比例 (1:√2) 與工程標準線型層級
          </text>

          {/* 左圖：A 系列圖紙對折 */}
          <g transform="translate(45, 48)">
            <rect x="0" y="0" width="190" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="95" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">A0~A4 圖紙對折體系</text>

            <rect x="25" y="25" width="140" height="75" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
            <text x="95" y="45" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e40af">A1 (594 × 841)</text>

            {/* 對折線 */}
            <line x1="95" y1="25" x2="95" y2="100" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
            <rect x="95" y="25" width="70" height="75" fill="#dbeafe" opacity="0.6" />
            <text x="130" y="65" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1d4ed8">A2 (420×594)</text>

            <line x1="95" y1="62" x2="165" y2="62" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="130" y="85" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#b91c1c">A3 ➜ A4 (210×297)</text>
          </g>

          {/* 右圖：線型重疊優先序 */}
          <g transform="translate(255, 48)">
            <rect x="0" y="0" width="250" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="125" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">同一直線重疊繪出優先順序</text>

            <line x1="20" y1="35" x2="90" y2="35" stroke="#0f172a" strokeWidth="3" />
            <text x="100" y="38" fontSize="8" fontWeight="bold" fill="#0f172a">1. 外形輪廓線 (粗實線) ★最優先</text>

            <line x1="20" y1="55" x2="90" y2="55" stroke="#2563eb" strokeWidth="2" strokeDasharray="4 2" />
            <text x="100" y="58" fontSize="8" fontWeight="bold" fill="#2563eb">2. 隱藏線 (中虛線)</text>

            <line x1="20" y1="75" x2="90" y2="75" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="8 2 2 2" />
            <text x="100" y="78" fontSize="8" fontWeight="bold" fill="#ef4444">3. 中心線/軸心線 (細鏈線)</text>

            <line x1="20" y1="95" x2="90" y2="95" stroke="#64748b" strokeWidth="1" />
            <text x="100" y="98" fontSize="8" fill="#475569">4. 尺寸界線/剖面線 (細實線)</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">
            A4 尺度 210 × 297 mm ｜ 粗細比 4 : 2 : 1 (粗 0.7mm, 中 0.35mm, 細 0.18mm) ｜ 實線壓虛線，虛線壓中心！
          </text>
        </svg>
      );

    // 35. 製圖 第三角法三視圖與 45° 投射
    case 'drafting-third-angle-proj':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="第三角法正投影三視圖展開圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            第三角投影法三視圖展開與「長對正、高平齊、寬相等」投射
          </text>

          {/* 三視圖排列 */}
          <g transform="translate(60, 48)">
            {/* 俯視圖 (左上) */}
            <rect x="30" y="0" width="80" height="40" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="70" y="24" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">俯視圖 (Top)</text>

            {/* 前視圖 (左下) */}
            <rect x="30" y="60" width="80" height="45" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <text x="70" y="87" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">前視圖 (Front)</text>

            {/* 右側視圖 (右下) */}
            <rect x="150" y="60" width="40" height="45" fill="#fed7aa" stroke="#ea580c" strokeWidth="1.5" />
            <text x="170" y="87" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#9a3412">右側視圖</text>

            {/* 45° 投射線 (右上) */}
            <line x1="110" y1="0" x2="150" y2="40" stroke="#ef4444" strokeWidth="2" />
            <text x="135" y="15" fontSize="8" fontWeight="bold" fill="#dc2626">45° 線</text>

            {/* 對正輔助線 */}
            <line x1="30" y1="40" x2="30" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="110" y1="40" x2="110" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
            <text x="70" y="53" textAnchor="middle" fontSize="8" fill="#64748b">長對正 ↕</text>

            <line x1="110" y1="80" x2="150" y2="80" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
            <text x="130" y="75" textAnchor="middle" fontSize="8" fill="#64748b">高平齊 ⟷</text>
          </g>

          {/* 右側：三大鐵律 */}
          <g transform="translate(320, 48)">
            <rect x="0" y="0" width="180" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="90" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e3a8a">第三角法三大準則</text>

            <rect x="15" y="30" width="150" height="20" fill="#eff6ff" rx="3" />
            <text x="90" y="44" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">長對正：前視圖與俯視圖</text>

            <rect x="15" y="55" width="150" height="20" fill="#f0fdf4" rx="3" />
            <text x="90" y="69" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">高平齊：前視圖與右側圖</text>

            <rect x="15" y="80" width="150" height="20" fill="#fff7ed" rx="3" />
            <text x="90" y="94" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#ea580c">寬相等：俯視圖與右側圖 (45°)</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef2f2" stroke="#fecaca" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">
            空間相對關係：人 ➜ 投影面 ➜ 物體 ｜ 台灣 CNS 建築製圖一律採用「第三角法」！
          </text>
        </svg>
      );

    // 36. 製圖 剖面圖分類與割面線符號
    case 'drafting-section-views':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="剖面圖種類與割面線圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            CNS 剖面圖分類（全剖/半剖/局部剖）與割面線剖面線規範
          </text>

          {/* 半剖面圖實例 */}
          <g transform="translate(45, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">半剖面圖 (對稱機件專用)</text>

            {/* 左側外觀 */}
            <rect x="30" y="30" width="45" height="60" fill="#ffffff" stroke="#0f172a" strokeWidth="1.8" />
            <text x="52" y="65" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#475569">外觀半側</text>
            <text x="52" y="78" textAnchor="middle" fontSize="7" fill="#ef4444">(省略虛線)</text>

            {/* 中央中心線 */}
            <line x1="75" y1="20" x2="75" y2="100" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 2 2 2" />

            {/* 右側剖面實體 */}
            <rect x="75" y="30" width="45" height="60" fill="#ffffff" stroke="#0f172a" strokeWidth="1.8" />
            {/* 45° 剖面線 */}
            <line x1="75" y1="50" x2="95" y2="30" stroke="#2563eb" strokeWidth="1.2" />
            <line x1="75" y1="70" x2="115" y2="30" stroke="#2563eb" strokeWidth="1.2" />
            <line x1="75" y1="90" x2="120" y2="45" stroke="#2563eb" strokeWidth="1.2" />
            <line x1="90" y1="90" x2="120" y2="60" stroke="#2563eb" strokeWidth="1.2" />
            <text x="160" y="55" fontSize="8" fontWeight="bold" fill="#1d4ed8">剖面實體</text>
            <text x="160" y="68" fontSize="8" fill="#475569">45° 細實線</text>
          </g>

          {/* 割面線符號與局部剖 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b45309">割面線與不剖構件</text>

            {/* 割面線 */}
            <line x1="20" y1="40" x2="40" y2="40" stroke="#0f172a" strokeWidth="3" />
            <line x1="40" y1="40" x2="140" y2="40" stroke="#64748b" strokeWidth="1.2" strokeDasharray="8 2" />
            <line x1="140" y1="40" x2="160" y2="40" stroke="#0f172a" strokeWidth="3" />
            <path d="M 20,40 L 20,25" stroke="#0f172a" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <path d="M 160,40 L 160,25" stroke="#0f172a" strokeWidth="2.5" />
            <text x="25" y="22" fontSize="9" fontWeight="bold" fill="#0f172a">A</text>
            <text x="165" y="22" fontSize="9" fontWeight="bold" fill="#0f172a">A</text>
            <text x="90" y="32" textAnchor="middle" fontSize="7" fill="#64748b">箭頭指示視向</text>

            <rect x="15" y="55" width="195" height="45" fill="#fef3c7" stroke="#fde047" rx="4" />
            <text x="112" y="70" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#92400e">縱向剖面「一律不打剖面線」之構件：</text>
            <text x="112" y="85" textAnchor="middle" fontSize="8" fill="#78350f">實心螺栓、螺帽、鉚釘、實心軸、肋條、鍵</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#f0fdf4" stroke="#bbf7d0" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">
            半剖面圖外側省略所有虛線 ｜ 局部剖面使用「徒手波浪線」破斷 ｜ 剖面線間距約 1.5~3 mm！
          </text>
        </svg>
      );

    // 37. 建築概論 綠建築 EEWH 四範疇九指標
    case 'arch-eewh-green-building':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="台灣綠建築 EEWH 指標圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            台灣綠建築標章 (EEWH) 四大範疇、九大評估指標與五大等級
          </text>

          {/* 四大範疇卡片 */}
          <g transform="translate(35, 48)">
            {/* 1. 生態 Ecology */}
            <rect x="0" y="0" width="112" height="105" fill="#f0fdf4" stroke="#86efac" rx="6" />
            <text x="56" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">E · 生態 (Ecology)</text>
            <text x="10" y="38" fontSize="8" fill="#15803d">1. 生物多樣性</text>
            <text x="10" y="55" fontSize="8" fill="#15803d">2. 綠化量指標</text>
            <text x="10" y="72" fontSize="8" fill="#15803d">3. 基地保水指標</text>
            <text x="56" y="94" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#047857">營造戶外生態系</text>

            {/* 2. 節能 Energy */}
            <rect x="120" y="0" width="112" height="105" fill="#eff6ff" stroke="#93c5fd" rx="6" />
            <text x="176" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">E · 節能 (Energy)</text>
            <rect x="125" y="28" width="102" height="30" fill="#bfdbfe" rx="3" />
            <text x="176" y="42" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e3a8a">4. 日常節能指標 ★</text>
            <text x="176" y="52" textAnchor="middle" fontSize="7" fill="#1e40af">(外殼/空調/照明)</text>
            <text x="176" y="80" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">【絕對必要門檻】</text>
            <text x="176" y="94" textAnchor="middle" fontSize="7" fill="#64748b">佔節能比重最高</text>

            {/* 3. 減廢 Waste */}
            <rect x="240" y="0" width="112" height="105" fill="#fef3c7" stroke="#fde047" rx="6" />
            <text x="296" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">W · 減廢 (Waste)</text>
            <text x="250" y="42" fontSize="8" fill="#92400e">5. CO2 減量指標</text>
            <text x="250" y="60" fontSize="8" fill="#92400e">6. 廢棄物減量指標</text>
            <text x="296" y="94" textAnchor="middle" fontSize="7" fill="#78350f">減少建材生命週期碳</text>

            {/* 4. 健康 Health */}
            <rect x="360" y="0" width="112" height="105" fill="#faf5ff" stroke="#d8b4fe" rx="6" />
            <text x="416" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6b21a8">H · 健康 (Health)</text>
            <text x="370" y="38" fontSize="8" fill="#7e22ce">7. 室內環境指標</text>
            <rect x="365" y="46" width="102" height="20" fill="#e9d5ff" rx="3" />
            <text x="416" y="60" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#581c87">8. 水資源指標 ★</text>
            <text x="370" y="80" fontSize="8" fill="#7e22ce">9. 污水垃圾改善</text>
            <text x="416" y="96" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#dc2626">省水器具必過門檻</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#f1f5f9" stroke="#cbd5e1" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
            五大評定等級：鑽石級 (最高) ➜ 黃金級 ➜ 銀級 ➜ 銅級 ➜ 合格級 ｜ 絕無「白金級」！
          </text>
        </svg>
      );

    // 38. 建築製圖 樓梯尺度構造法規剖面
    case 'drafting-staircase-code':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="建築技術規則樓梯構造圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            建築技術規則第 33 條樓梯級高 (R)、踏面 (T) 法規與人體工學剖面
          </text>

          {/* 樓梯剖面構造圖 */}
          <g transform="translate(50, 48)">
            <path d="M 20,95 L 60,95 L 60,70 L 100,70 L 100,45 L 140,45 L 140,20 L 180,20" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M 20,110 L 75,110 L 195,35 L 205,35" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 2" />

            {/* 踏面 T 與 級高 R 標註 */}
            <line x1="60" y1="65" x2="100" y2="65" stroke="#2563eb" strokeWidth="1.8" />
            <text x="80" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">踏面 T ≥ 24 cm</text>

            <line x1="105" y1="70" x2="105" y2="45" stroke="#ef4444" strokeWidth="1.8" />
            <text x="125" y="60" fontSize="9" fontWeight="bold" fill="#dc2626">R ≤ 20 cm</text>

            {/* 樓梯淨高 */}
            <line x1="80" y1="70" x2="80" y2="10" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="80" y="5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#166534">淨高 H ≥ 2.1 m</text>
          </g>

          {/* 右側：法規數值矩陣 */}
          <g transform="translate(265, 48)">
            <rect x="0" y="0" width="240" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="120" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">建築技術規則第 33 條標準</text>

            <rect x="10" y="25" width="220" height="22" fill="#eff6ff" rx="3" />
            <text x="20" y="40" fontSize="8" fontWeight="bold" fill="#1e40af">一般住宅：級高 R ≤ 20 cm ｜ 踏面 T ≥ 24 cm</text>

            <rect x="10" y="50" width="220" height="22" fill="#f0fdf4" rx="3" />
            <text x="20" y="65" fontSize="8" fontWeight="bold" fill="#166534">公用建築：級高 R ≤ 16 cm ｜ 踏面 T ≥ 26 cm</text>

            <rect x="10" y="75" width="220" height="30" fill="#fef3c7" stroke="#fde047" rx="3" />
            <text x="120" y="89" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#854d0e">步幅工學黃金公式：58 ≤ 2R + T ≤ 64 cm</text>
            <text x="120" y="100" textAnchor="middle" fontSize="7" fill="#b45309">★ 踏面塊數 (Treads) 永遠等於 階數 (Risers) 減 1！</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef2f2" stroke="#fecaca" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">
            樓梯寬度 ≥ 90 cm (住宅) / 120 cm (公共) ｜ 樓梯平台深度不得小於樓梯寬度！
          </text>
        </svg>
      );

    // 39. 材料 混凝土波羅米水灰比強度定律 (Abrams' Law)
    case 'materials-abrams-law':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="波羅米水灰比強度定律圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            波羅米水灰比強度定律 (Abrams&apos; Law) 與混凝土 7/28 天強度發展曲線
          </text>
          
          {/* 左圖：反比曲線圖 */}
          <g transform="translate(45, 48)">
            <line x1="30" y1="95" x2="200" y2="95" stroke="#64748b" strokeWidth="1.5" />
            <text x="205" y="98" fontSize="9" fontWeight="bold" fill="#0f172a">W/C (水灰比)</text>

            <line x1="30" y1="95" x2="30" y2="15" stroke="#64748b" strokeWidth="1.5" />
            <text x="30" y="10" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0f172a">fc (抗壓強度)</text>

            {/* 波羅米曲線 */}
            <path d="M 45,25 Q 75,70 190,88" fill="none" stroke="#2563eb" strokeWidth="2.5" />
            <circle cx="75" cy="55" r="3.5" fill="#16a34a" />
            <text x="85" y="52" fontSize="8" fontWeight="bold" fill="#15803d">常規 W/C 0.45</text>

            <circle cx="150" cy="82" r="3.5" fill="#ef4444" />
            <text x="140" y="75" fontSize="8" fontWeight="bold" fill="#b91c1c">W/C &gt; 0.65 (多孔弱化)</text>

            <rect x="40" y="102" width="160" height="14" fill="#eff6ff" rx="2" />
            <text x="120" y="112" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#1d4ed8">fc = A / B^(1.5·W/C) 強度與水灰比成反比</text>
          </g>

          {/* 右圖：齡期強度發展條形圖 */}
          <g transform="translate(265, 48)">
            <rect x="0" y="0" width="240" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="120" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">標準養護齡期強度矩陣 (23±2°C)</text>

            {/* 7 天 */}
            <rect x="20" y="30" width="130" height="18" fill="#93c5fd" rx="3" />
            <text x="25" y="43" fontSize="8" fontWeight="bold" fill="#1e3a8a">7 天齡期強度 ≈ 65~70% f&apos;c</text>

            {/* 28 天 */}
            <rect x="20" y="55" width="190" height="18" fill="#3b82f6" rx="3" />
            <text x="25" y="68" fontSize="8" fontWeight="bold" fill="#ffffff">28 天齡期強度 ＝ 100% f&apos;c (設計標準)</text>

            {/* 90 天 */}
            <rect x="20" y="80" width="205" height="18" fill="#1d4ed8" rx="3" />
            <text x="25" y="93" fontSize="8" fontWeight="bold" fill="#ffffff">90 天~1 年晚期強度 (C2S 水化超越)</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">
            金科玉律：水灰比決定「強度」，用水量決定「坍度 (工作性)」 ｜ 工地嚴禁私自加水！
          </text>
        </svg>
      );

    // 40. 材料 CNS 560 鋼筋拉伸應力應變與標記
    case 'materials-rebar-tensile':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="鋼筋應力應變與軋印圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            CNS 560 鋼筋拉伸應力應變曲線 (σ-ε) 與竹節鋼筋表面軋印標記
          </text>

          {/* 左圖：應力應變曲線 */}
          <g transform="translate(45, 48)">
            <line x1="25" y1="95" x2="200" y2="95" stroke="#64748b" strokeWidth="1.5" />
            <text x="205" y="98" fontSize="8" fontWeight="bold" fill="#0f172a">ε (應變)</text>

            <line x1="25" y1="95" x2="25" y2="15" stroke="#64748b" strokeWidth="1.5" />
            <text x="25" y="10" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0f172a">σ (應力)</text>

            {/* 曲線本體 */}
            <path d="M 25,95 L 60,45 L 85,45 Q 130,20 160,25 Q 180,30 190,55" fill="none" stroke="#dc2626" strokeWidth="2.5" />
            <circle cx="60" cy="45" r="3" fill="#2563eb" />
            <text x="40" y="40" fontSize="7.5" fontWeight="bold" fill="#1d4ed8">降伏 fy</text>

            <circle cx="160" cy="25" r="3" fill="#16a34a" />
            <text x="155" y="18" fontSize="7.5" fontWeight="bold" fill="#15803d">抗拉極限 fu</text>

            <line x1="25" y1="45" x2="60" y2="45" stroke="#2563eb" strokeDasharray="2 2" />
            <text x="10" y="48" fontSize="7" fill="#2563eb">fy</text>
          </g>

          {/* 右圖：竹節鋼筋軋印 */}
          <g transform="translate(265, 48)">
            <rect x="0" y="0" width="240" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="120" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">竹節鋼筋表面 CNS 標示</text>

            {/* 鋼筋外形 */}
            <rect x="20" y="28" width="200" height="30" fill="#e2e8f0" stroke="#475569" strokeWidth="2" rx="4" />
            {/* 竹節肋紋 */}
            <line x1="45" y1="28" x2="55" y2="58" stroke="#334155" strokeWidth="3" />
            <line x1="75" y1="28" x2="85" y2="58" stroke="#334155" strokeWidth="3" />
            <line x1="105" y1="28" x2="115" y2="58" stroke="#334155" strokeWidth="3" />
            <line x1="135" y1="28" x2="145" y2="58" stroke="#334155" strokeWidth="3" />
            <line x1="165" y1="28" x2="175" y2="58" stroke="#334155" strokeWidth="3" />
            <line x1="195" y1="28" x2="205" y2="58" stroke="#334155" strokeWidth="3" />

            <text x="60" y="47" fontSize="11" fontWeight="bold" fill="#b91c1c">T</text>
            <text x="90" y="47" fontSize="11" fontWeight="bold" fill="#1e3a8a">W</text>
            <text x="120" y="47" fontSize="11" fontWeight="bold" fill="#047857">D25</text>

            <rect x="15" y="68" width="210" height="34" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="120" y="80" textAnchor="middle" fontSize="8" fill="#1e3a8a">廠標 (T) ｜ 鋼種 (W:可銲, S:耐震) ｜ 號數 (D25)</text>
            <text x="120" y="94" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">耐震結構要求：實測 fu / 實測 fy ≥ 1.25！</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#eff6ff" stroke="#bfdbfe" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">
            結構設計唯一基準：降伏強度 (SD280: 280 N/mm² ｜ SD420: 420 N/mm²) ｜ 冷彎無裂紋為合格！
          </text>
        </svg>
      );

    // 41. 材料 瀝青針入度 CNS 2260 與防水工法
    case 'materials-asphalt-penetration':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="瀝青針入度與防水層圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            CNS 2260 瀝青針入度試驗條件 (25°C/100g/5s) 與屋頂多層防水工法
          </text>

          {/* 左圖：針入度試驗儀示意 */}
          <g transform="translate(45, 48)">
            <rect x="0" y="0" width="210" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="105" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">針入度測定 (0.1 mm = 1度)</text>

            {/* 瀝青皿 */}
            <rect x="55" y="70" width="100" height="30" fill="#1e293b" rx="2" />
            <text x="105" y="88" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff">瀝青試樣 (25°C 水浴)</text>

            {/* 標準針與配重 */}
            <rect x="95" y="25" width="20" height="15" fill="#f59e0b" stroke="#d97706" />
            <text x="105" y="36" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ffffff">100g</text>
            <line x1="105" y1="40" x2="105" y2="76" stroke="#ef4444" strokeWidth="2.5" />
            <text x="125" y="60" fontSize="8" fontWeight="bold" fill="#dc2626">貫入 5 秒</text>

            <text x="105" y="105" textAnchor="middle" fontSize="7.5" fill="#475569">針入度數值大 ➜ 瀝青愈軟</text>
          </g>

          {/* 右圖：五層防水油氈構造剖面 */}
          <g transform="translate(275, 48)">
            <rect x="0" y="0" width="230" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="115" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">屋頂多層瀝青油氈防水剖面</text>

            <rect x="25" y="26" width="180" height="8" fill="#475569" />
            <text x="115" y="33" textAnchor="middle" fontSize="6.5" fill="#ffffff">面層：碎石保護層 / 隔熱磚</text>

            <rect x="25" y="37" width="180" height="6" fill="#1e293b" />
            <text x="115" y="42" textAnchor="middle" fontSize="6.5" fill="#ffffff">熱瀝青塗層 ＋ 第二層防水油氈</text>

            <rect x="25" y="46" width="180" height="6" fill="#1e293b" />
            <text x="115" y="51" textAnchor="middle" fontSize="6.5" fill="#ffffff">熱瀝青塗層 ＋ 第一層防水油氈</text>

            <rect x="25" y="55" width="180" height="5" fill="#d97706" />
            <text x="115" y="59" textAnchor="middle" fontSize="6.5" fill="#ffffff">底層：透水瀝青底油 Primer</text>

            <rect x="25" y="63" width="180" height="15" fill="#cbd5e1" />
            <text x="115" y="73" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#334155">RC 結構樓地板層 (洩水坡度 ≥ 1/100)</text>

            <rect x="20" y="85" width="190" height="18" fill="#fef3c7" rx="3" />
            <text x="115" y="97" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#92400e">油氈搭接規範：長向 ≥ 10 cm ｜ 短向 ≥ 15 cm</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#f1f5f9" stroke="#cbd5e1" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">
            瀝青三大試驗：針入度 (稠度) ｜ 軟化點 (環球法耐熱) ｜ 延度 (低溫拉伸不斷)
          </text>
        </svg>
      );

    // 42. 測量 水準測量儀高法與高差法 (消視準軸誤差)
    case 'surveying-level-collimation':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="水準測量儀高法與等距消差圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            水準測量儀高法 (IH = Elev + BS)、高差法與前後視等距消差幾何
          </text>

          {/* 幾何測站圖 */}
          <g transform="translate(45, 48)">
            {/* 地面起伏線 */}
            <path d="M 10,95 Q 120,105 240,75 T 460,50" fill="none" stroke="#64748b" strokeWidth="2" />
            <text x="25" y="108" fontSize="8" fontWeight="bold" fill="#0f172a">基準點 A (已知高程)</text>
            <text x="430" y="65" fontSize="8" fontWeight="bold" fill="#0f172a">前測點 B</text>

            {/* 水準儀與視線 */}
            <rect x="220" y="45" width="25" height="15" fill="#3b82f6" rx="2" />
            <line x1="232" y1="60" x2="225" y2="85" stroke="#1e293b" strokeWidth="2" />
            <line x1="232" y1="60" x2="240" y2="85" stroke="#1e293b" strokeWidth="2" />

            {/* 水平視線 (紅虛線) */}
            <line x1="30" y1="48" x2="445" y2="48" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
            <text x="232" y="40" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">水平視線 (儀高 IH)</text>

            {/* 後視標尺 BS */}
            <rect x="25" y="35" width="8" height="60" fill="#e2e8f0" stroke="#0f172a" />
            <line x1="15" y1="48" x2="25" y2="48" stroke="#ef4444" strokeWidth="2" />
            <text x="12" y="42" fontSize="8" fontWeight="bold" fill="#2563eb">BS (後視加)</text>

            {/* 前視標尺 FS */}
            <rect x="440" y="15" width="8" height="40" fill="#e2e8f0" stroke="#0f172a" />
            <line x1="440" y1="48" x2="455" y2="48" stroke="#ef4444" strokeWidth="2" />
            <text x="410" y="42" fontSize="8" fontWeight="bold" fill="#16a34a">FS (前視減)</text>

            {/* 等距箭頭 */}
            <line x1="30" y1="115" x2="230" y2="115" stroke="#64748b" strokeWidth="1" markerEnd="url(#arrow)" />
            <text x="130" y="112" textAnchor="middle" fontSize="8" fill="#475569">後視距 D_bs</text>

            <line x1="235" y1="115" x2="445" y2="115" stroke="#64748b" strokeWidth="1" />
            <text x="340" y="112" textAnchor="middle" fontSize="8" fill="#475569">前視距 D_fs</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#f0fdf4" stroke="#bbf7d0" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">
            消除 i 角誤差鐵律：前後視距保持相等 (D_bs = D_fs) ｜ 檢核式：ΣBS － ΣFS ＝ 終點高程 － 起點高程！
          </text>
        </svg>
      );

    // 43. 測量 經緯儀測回法盤左盤右與消差機制
    case 'surveying-theodolite-repetition':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="經緯儀測回法圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            經緯儀測回法 (Repetition Method) 正倒鏡幾何與三軸誤差消除矩陣
          </text>

          {/* 左圖：測回法操作 */}
          <g transform="translate(45, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">半測回正倒鏡操作</text>

            <circle cx="50" cy="55" r="16" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="50" y="58" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e40af">盤左 (L)</text>
            <text x="50" y="85" textAnchor="middle" fontSize="7.5" fill="#475569">順時針照準 A➜B</text>

            <path d="M 75,55 L 120,55" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="98" y="48" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">倒鏡 180°</text>

            <circle cx="150" cy="55" r="16" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
            <text x="150" y="58" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b45309">盤右 (R)</text>
            <text x="150" y="85" textAnchor="middle" fontSize="7.5" fill="#475569">逆時針照準 B➜A</text>

            <rect x="15" y="93" width="190" height="14" fill="#eff6ff" rx="2" />
            <text x="110" y="103" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1d4ed8">一測回角值 β ＝ (β_盤左 ＋ β_盤右) ÷ 2</text>
          </g>

          {/* 右圖：消差清單 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">正倒鏡平均消差成果對照</text>

            <rect x="15" y="26" width="195" height="20" fill="#dcfce7" rx="3" />
            <text x="25" y="39" fontSize="8" fontWeight="bold" fill="#15803d">✔ 視準軸誤差 (c 誤差) ➜ 完全消除！</text>

            <rect x="15" y="49" width="195" height="20" fill="#dcfce7" rx="3" />
            <text x="25" y="62" fontSize="8" fontWeight="bold" fill="#15803d">✔ 橫軸傾斜誤差 (i 誤差) ➜ 完全消除！</text>

            <rect x="15" y="72" width="195" height="20" fill="#fee2e2" stroke="#fca5a5" rx="3" />
            <text x="25" y="85" fontSize="8" fontWeight="bold" fill="#b91c1c">✖ 豎軸傾斜誤差 (v 誤差) ➜ 【絕對無法消除】！</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef2f2" stroke="#fecaca" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">
            考題地雷：豎軸傾斜誤差無法靠盤左盤右平均消除，唯一解法為「水準氣泡嚴格居中」！
          </text>
        </svg>
      );

    // 44. 測量 土方計算平均端面法 vs 辛普森稜鏡擬柱體公式
    case 'surveying-earthwork-simpson':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="土方計算公式圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            土方體積計算：平均端面法 (偏大) vs 辛普森稜鏡擬柱體公式 (精準)
          </text>

          {/* 左圖：土方擬柱體幾何立體 */}
          <g transform="translate(45, 48)">
            <path d="M 30,30 L 15,90 L 70,90 L 75,30 Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="45" y="65" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">端面 A1</text>

            <path d="M 170,20 L 140,95 L 210,95 L 220,20 Z" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
            <text x="180" y="65" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">端面 A2</text>

            {/* 中間斷面 Am */}
            <path d="M 100,25 L 80,92 L 140,92 L 148,25 Z" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
            <text x="115" y="55" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">中間斷面 Am</text>

            {/* 跨距 L */}
            <line x1="50" y1="102" x2="175" y2="102" stroke="#64748b" strokeWidth="1.5" />
            <text x="115" y="112" textAnchor="middle" fontSize="8" fill="#475569">距離長度 L</text>
          </g>

          {/* 右圖：兩大公式對比 */}
          <g transform="translate(275, 48)">
            <rect x="0" y="0" width="230" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="115" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">土方兩大計算法則對比</text>

            <rect x="10" y="26" width="210" height="34" fill="#eff6ff" rx="3" />
            <text x="15" y="38" fontSize="8" fontWeight="bold" fill="#1e40af">1. 平均端面法：V = (A1 + A2) · L / 2</text>
            <text x="15" y="52" fontSize="7.5" fill="#64748b">計算簡便但體積「恆偏大 (高估土方)」</text>

            <rect x="10" y="65" width="210" height="38" fill="#f0fdf4" stroke="#86efac" rx="3" />
            <text x="15" y="78" fontSize="8" fontWeight="bold" fill="#15803d">2. 稜鏡公式：V = (L / 6) · (A1 + 4Am + A2)</text>
            <text x="15" y="93" fontSize="7.5" fontWeight="bold" fill="#b91c1c">★ Am 是中間幾何尺度算出的截面積！</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">
            重要陷阱：Am 絕不是 (A1+A2)/2！若把面積平均代入，公式直接退化為平均端面法！
          </text>
        </svg>
      );

    // 45. 數學 C 空間兩歪斜線公垂線距離與體積
    case 'math-skew-lines-distance':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="空間歪斜線距離圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            空間兩歪斜線公垂向量 (n = v1 × v2) 與最短距離公式幾何
          </text>

          {/* 左圖：歪斜線與平行六面體 */}
          <g transform="translate(50, 48)">
            {/* 直線 L1 */}
            <line x1="20" y1="35" x2="160" y2="35" stroke="#2563eb" strokeWidth="2.5" />
            <text x="165" y="38" fontSize="9" fontWeight="bold" fill="#1d4ed8">L1 (方向 v1)</text>
            <circle cx="60" cy="35" r="3.5" fill="#2563eb" />
            <text x="55" y="28" fontSize="8" fontWeight="bold" fill="#1e40af">P</text>

            {/* 直線 L2 */}
            <line x1="30" y1="95" x2="180" y2="65" stroke="#16a34a" strokeWidth="2.5" />
            <text x="185" y="70" fontSize="9" fontWeight="bold" fill="#15803d">L2 (方向 v2)</text>
            <circle cx="120" cy="78" r="3.5" fill="#16a34a" />
            <text x="125" y="90" fontSize="8" fontWeight="bold" fill="#166534">Q</text>

            {/* 公垂線 (垂直雙方) */}
            <line x1="90" y1="35" x2="90" y2="83" stroke="#ef4444" strokeWidth="2.5" />
            <text x="96" y="62" fontSize="9" fontWeight="bold" fill="#dc2626">公垂線 d</text>
            <rect x="85" y="35" width="5" height="5" fill="none" stroke="#dc2626" />
            <rect x="85" y="78" width="5" height="5" fill="none" stroke="#dc2626" />
          </g>

          {/* 右圖：外積公式卡 */}
          <g transform="translate(275, 48)">
            <rect x="0" y="0" width="230" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="115" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">公垂線距離兩大公式</text>

            <rect x="10" y="26" width="210" height="34" fill="#f3e8ff" rx="3" />
            <text x="15" y="38" fontSize="8" fontWeight="bold" fill="#6b21a8">歪斜線最短距離 d：</text>
            <text x="15" y="52" fontSize="8" fontWeight="bold" fill="#1e3a8a">d = |PQ · (v1 × v2)| ÷ |v1 × v2|</text>

            <rect x="10" y="65" width="210" height="38" fill="#eff6ff" rx="3" />
            <text x="15" y="78" fontSize="8" fontWeight="bold" fill="#1d4ed8">點到平面距離：</text>
            <text x="15" y="93" fontSize="8" fill="#1e3a8a">d = |ax0 + by0 + cz0 + d| ÷ √(a² + b² + c²)</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fdf4ff" stroke="#f0abfc" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#a21caf">
            幾何意義：以向量 PQ, v1, v2 張成之平行六面體體積除以底面平行四邊形面積！
          </text>
        </svg>
      );

    // 46. 國文 荀子〈勸學〉連珠設喻立論架構
    case 'chinese-quanxue-structure':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="荀子勸學架構圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            荀子〈勸學〉「學不可以已」立論架構與四大連珠設喻系統
          </text>

          {/* 四大設喻階段 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="112" height="105" fill="#eff6ff" stroke="#93c5fd" rx="6" />
            <text x="56" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">① 質性轉化</text>
            <text x="8" y="38" fontSize="7.5" fill="#1e3a8a">青出於藍而青於藍</text>
            <text x="8" y="55" fontSize="7.5" fill="#1e3a8a">冰水為之而寒於水</text>
            <text x="8" y="72" fontSize="7.5" fill="#1e3a8a">木受繩則直金就礪</text>
            <text x="56" y="93" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#2563eb">後天改造天性</text>

            <rect x="120" y="0" width="112" height="105" fill="#f0fdf4" stroke="#86efac" rx="6" />
            <text x="176" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">② 善假於物</text>
            <text x="128" y="38" fontSize="7.5" fill="#15803d">吾嘗終日而思矣</text>
            <text x="128" y="55" fontSize="7.5" fill="#15803d">登高而招順風而呼</text>
            <text x="128" y="72" fontSize="7.5" fill="#15803d">假輿馬致千里</text>
            <text x="176" y="93" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#16a34a">藉外在工具助益</text>

            <rect x="240" y="0" width="112" height="105" fill="#fef3c7" stroke="#fde047" rx="6" />
            <text x="296" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#854d0e">③ 積漸堅持</text>
            <text x="248" y="38" fontSize="7.5" fill="#92400e">積土成山風雨興</text>
            <text x="248" y="55" fontSize="7.5" fill="#92400e">不積跬步無以千里</text>
            <text x="248" y="72" fontSize="7.5" fill="#92400e">騏驥一躍駑馬十駕</text>
            <text x="296" y="93" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ea580c">成功在於不舍</text>

            <rect x="360" y="0" width="112" height="105" fill="#faf5ff" stroke="#d8b4fe" rx="6" />
            <text x="416" y="18" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#6b21a8">④ 專心致志</text>
            <text x="368" y="38" fontSize="7.5" fill="#7e22ce">蚓無爪牙用心一也</text>
            <text x="368" y="55" fontSize="7.5" fill="#7e22ce">蟹六跪螯用心躁也</text>
            <text x="368" y="72" fontSize="7.5" fill="#7e22ce">正反鮮明強烈對比</text>
            <text x="416" y="93" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#9333ea">專注勝於浮躁</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#f0fdf4" stroke="#bbf7d0" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">
            全篇核心文眼：君子博學而日參省乎己，則知明而行無過矣 ｜ 性惡論之學習救贖！
          </text>
        </svg>
      );

    // 47. 英文 分詞構句 (Participle Clauses) 簡化規則
    case 'english-participle-clauses':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="分詞構句圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            分詞構句 (Participle Clauses) 簡化三步驟與主動 V-ing / 被動 p.p. 判定
          </text>

          {/* 簡化步序流程 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#eff6ff" stroke="#93c5fd" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">簡化子句三大 SOP</text>

            <rect x="10" y="26" width="205" height="22" fill="#ffffff" stroke="#bfdbfe" rx="3" />
            <text x="15" y="40" fontSize="8" fontWeight="bold" fill="#1e3a8a">步驟 1：刪除從屬連接詞 (When, Because)</text>

            <rect x="10" y="52" width="205" height="22" fill="#ffffff" stroke="#bfdbfe" rx="3" />
            <text x="15" y="66" fontSize="8" fontWeight="bold" fill="#1e3a8a">步驟 2：主詞相同時，刪除從屬子句主詞</text>

            <rect x="10" y="78" width="205" height="24" fill="#ffffff" stroke="#bfdbfe" rx="3" />
            <text x="15" y="90" fontSize="8" fontWeight="bold" fill="#dc2626">步驟 3：動詞改分詞 (主動 V-ing / 被動 p.p.)</text>
          </g>

          {/* 實戰範例對照 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">主動 vs 被動真題對照</text>

            <rect x="10" y="26" width="205" height="34" fill="#f0fdf4" rx="3" />
            <text x="15" y="38" fontSize="8" fontWeight="bold" fill="#166534">【主動 V-ing】Seeing the police, he ran away.</text>
            <text x="15" y="51" fontSize="7" fill="#64748b">(原: When he saw the police, he ran away.)</text>

            <rect x="10" y="65" width="205" height="36" fill="#fef2f2" stroke="#fecaca" rx="3" />
            <text x="15" y="78" fontSize="8" fontWeight="bold" fill="#991b1b">【被動 p.p.】Built in 1980, the bridge is old.</text>
            <text x="15" y="91" fontSize="7" fill="#64748b">(原: Because it was built in 1980, the bridge ...)</text>
          </g>

          <rect x="35" y="165" width="470" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">
            秒殺鐵律：看主要子句主詞！做動作選 V-ing，被動受格選 p.p. ｜ 嚴防懸垂分詞 (Dangling Participle)！
          </text>
        </svg>
      );

    // 48. 測量實習：導線閉合差精度評定與羅盤儀平差向量幾何圖
    case 'surveying-traverse-precision':
      return (
        <svg viewBox="0 0 540 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="導線閉合差精度評定圖解">
          <rect width="540" height="200" fill="#f8fafc" rx="10" />
          <rect x="12" y="12" width="516" height="176" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" rx="8" />

          {/* 標題橫幅 */}
          <rect x="12" y="12" width="516" height="28" fill="#ecfdf5" rx="8" />
          <text x="270" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065f46">
            閉合導線坐標閉合差直角幾何向量與精度比 (1/K) 評定矩陣
          </text>

          {/* 左圖：閉合差向量分解 */}
          <g transform="translate(30, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f0fdf4" stroke="#bbf7d0" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#166534">總位置閉合差向量分解</text>

            {/* 導線路徑 */}
            <path d="M 25,90 L 70,35 L 140,40 L 180,85" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="3,3" />
            <circle cx="25" cy="90" r="3.5" fill="#2563eb" />
            <text x="25" y="103" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e40af">起點 A</text>

            <circle cx="180" cy="85" r="3.5" fill="#dc2626" />
            <text x="180" y="98" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#991b1b">推算 A&apos;</text>

            {/* 閉合差直角三角形 */}
            <line x1="25" y1="90" x2="180" y2="90" stroke="#059669" strokeWidth="1.5" strokeDasharray="2,2" />
            <line x1="180" y1="90" x2="180" y2="85" stroke="#059669" strokeWidth="1.5" strokeDasharray="2,2" />
            <line x1="25" y1="90" x2="180" y2="85" stroke="#dc2626" strokeWidth="2" />

            <rect x="40" y="65" width="120" height="18" fill="#ffffff" stroke="#cbd5e1" rx="3" />
            <text x="100" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">K = √(fx² + fy²)</text>
          </g>

          {/* 右圖：精度評等與平差規則 */}
          <g transform="translate(265, 48)">
            <rect x="0" y="0" width="245" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="122" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e3a8a">工程導線精度等級規範 (K / ΣD)</text>

            <rect x="10" y="26" width="225" height="22" fill="#eff6ff" stroke="#bfdbfe" rx="3" />
            <text x="16" y="40" fontSize="8" fontWeight="bold" fill="#1e40af">一級導線：精度 ≧ 1/10000 ｜ 城市高精度網</text>

            <rect x="10" y="52" width="225" height="22" fill="#f0fdf4" stroke="#bbf7d0" rx="3" />
            <text x="16" y="66" fontSize="8" fontWeight="bold" fill="#15803d">二級導線：精度 ≧ 1/5000 ｜ 一般建築工程控制網</text>

            <rect x="10" y="78" width="225" height="24" fill="#fffbeb" stroke="#fde68a" rx="3" />
            <text x="16" y="94" fontSize="7.5" fontWeight="bold" fill="#92400e">平差分配律：C_xi = -fx × (di / ΣD) (邊長反號正比)</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#166534">
            記憶神技：精度分數分母越大越精密！閉合差反號！原和為正，改正數必為負！
          </text>
        </svg>
      );

    // 49. 數學 C：拋物線光學性質反射定律與切線幾何圖
    case 'math-parabola-reflection':
      return (
        <svg viewBox="0 0 540 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="拋物線光學性質與切線幾何圖解">
          <rect width="540" height="200" fill="#f8fafc" rx="10" />
          <rect x="12" y="12" width="516" height="176" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" rx="8" />

          {/* 標題橫幅 */}
          <rect x="12" y="12" width="516" height="28" fill="#eff6ff" rx="8" />
          <text x="270" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e40af">
            拋物線光學性質（反射定律）、切線方程式與焦半徑幾何
          </text>

          {/* 左圖：光學性質幾何光路 */}
          <g transform="translate(30, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="110" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">光學反射性質（探照燈與天線）</text>

            {/* 拋物線 */}
            <path d="M 190,20 Q 50,60 190,100" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
            {/* 對稱軸 */}
            <line x1="20" y1="60" x2="200" y2="60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />

            {/* 焦點 F */}
            <circle cx="95" cy="60" r="3.5" fill="#dc2626" />
            <text x="95" y="52" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#b91c1c">焦點 F(c,0)</text>

            {/* 射入光線與反射光線 */}
            <line x1="190" y1="35" x2="115" y2="35" stroke="#eab308" strokeWidth="1.5" />
            <line x1="115" y1="35" x2="95" y2="60" stroke="#eab308" strokeWidth="1.5" />
            <line x1="190" y1="85" x2="115" y2="85" stroke="#eab308" strokeWidth="1.5" />
            <line x1="115" y1="85" x2="95" y2="60" stroke="#eab308" strokeWidth="1.5" />

            <text x="110" y="103" textAnchor="middle" fontSize="7.5" fill="#64748b">平行對稱軸射入光線 ➜ 100% 反射匯聚於焦點！</text>
          </g>

          {/* 右圖：焦半徑與切線公式 */}
          <g transform="translate(265, 48)">
            <rect x="0" y="0" width="245" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="122" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#047857">標準式切線公式與焦半徑</text>

            <rect x="10" y="24" width="225" height="24" fill="#eff6ff" rx="3" />
            <text x="16" y="38" fontSize="8" fontWeight="bold" fill="#1e40af">標準切線式：y² = 4cx 上一點 P(x0, y0)</text>
            <text x="16" y="47" fontSize="7.5" fill="#2563eb">➜ 切線方程式：y·y0 = 2c(x + x0)</text>

            <rect x="10" y="52" width="225" height="24" fill="#f0fdf4" rx="3" />
            <text x="16" y="66" fontSize="8" fontWeight="bold" fill="#15803d">焦半徑定理：動點 P 到焦點距離</text>
            <text x="16" y="74" fontSize="7.5" fill="#166534">➜ r = |x0 + c|（等於到準線距離 d(P, L)）</text>

            <rect x="10" y="80" width="225" height="22" fill="#fffbeb" rx="3" />
            <text x="16" y="95" fontSize="7.5" fontWeight="bold" fill="#92400e">斜率 m 切線式：y = mx + c/m (m ≠ 0)</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#eff6ff" stroke="#93c5fd" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e40af">
            秒殺口訣：二次拆乘積、一次拆平均！焦半徑等於準線距，探照天線全靠焦點！
          </text>
        </svg>
      );

    // 50. 數學 C：雙曲線漸近線、焦點矩形與共軛雙曲線圖
    case 'math-hyperbola-asymptote':
      return (
        <svg viewBox="0 0 540 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="雙曲線漸近線與共軛矩形圖解">
          <rect width="540" height="200" fill="#f8fafc" rx="10" />
          <rect x="12" y="12" width="516" height="176" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" rx="8" />

          {/* 標題橫幅 */}
          <rect x="12" y="12" width="516" height="28" fill="#fdf2f8" rx="8" />
          <text x="270" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9d174d">
            雙曲線中央矩形 (2a × 2b)、兩條對角漸近線與等軸雙曲線
          </text>

          {/* 左圖：中央矩形與漸近線幾何 */}
          <g transform="translate(30, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#fdf2f8" stroke="#fbcfe8" rx="6" />
            <text x="110" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#be185d">中央矩形與漸近線幾何骨架</text>

            {/* 坐標軸 */}
            <line x1="20" y1="60" x2="200" y2="60" stroke="#94a3b8" strokeWidth="1" />
            <line x1="110" y1="18" x2="110" y2="102" stroke="#94a3b8" strokeWidth="1" />

            {/* 中央矩形 2a x 2b */}
            <rect x="75" y="35" width="70" height="50" fill="none" stroke="#db2777" strokeWidth="1.2" strokeDasharray="2,2" />

            {/* 兩漸近線 */}
            <line x1="45" y1="15" x2="175" y2="105" stroke="#e11d48" strokeWidth="1.5" />
            <line x1="45" y1="105" x2="175" y2="15" stroke="#e11d48" strokeWidth="1.5" />

            {/* 雙曲線 */}
            <path d="M 60,25 Q 75,60 60,95" fill="none" stroke="#2563eb" strokeWidth="2" />
            <path d="M 160,25 Q 145,60 160,95" fill="none" stroke="#2563eb" strokeWidth="2" />

            <circle cx="75" cy="60" r="2.5" fill="#2563eb" />
            <circle cx="145" cy="60" r="2.5" fill="#2563eb" />
            <text x="110" y="103" textAnchor="middle" fontSize="7.5" fill="#475569">漸近線: y = ± (b/a)x ｜ c² = a² + b²</text>
          </g>

          {/* 右圖：漸近線速求神技與等軸雙曲 */}
          <g transform="translate(265, 48)">
            <rect x="0" y="0" width="245" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="122" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">漸近線速算法與共軛雙曲</text>

            <rect x="10" y="24" width="225" height="24" fill="#eff6ff" rx="3" />
            <text x="16" y="38" fontSize="8" fontWeight="bold" fill="#1e40af">令常數 1 變 0 神技：</text>
            <text x="16" y="46" fontSize="7.5" fill="#2563eb">x²/a² - y²/b² = 0 ➜ (x/a - y/b)(x/a + y/b) = 0</text>

            <rect x="10" y="52" width="225" height="24" fill="#fdf2f8" rx="3" />
            <text x="16" y="66" fontSize="8" fontWeight="bold" fill="#be185d">共軛雙曲線：右側常數換成 -1</text>
            <text x="16" y="74" fontSize="7.5" fill="#9d174d">共用同一組漸近線！四焦點共圓！</text>

            <rect x="10" y="80" width="225" height="22" fill="#fffbeb" rx="3" />
            <text x="16" y="95" fontSize="7.5" fontWeight="bold" fill="#92400e">等軸雙曲線：a = b，漸近線正交 (垂直相交 90°)</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#fdf2f8" stroke="#f472b6" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#9d174d">
            秒殺口訣：雙曲漸近令右為零，貫軸共軛對角延伸，等軸 a=b 漸近垂直！
          </text>
        </svg>
      );

    // 51. 英文：關係代名詞 vs 關係副詞轉換文法圖
    case 'english-relative-adverbs':
      return (
        <svg viewBox="0 0 540 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="關係代名詞與關係副詞圖解">
          <rect width="540" height="200" fill="#f8fafc" rx="10" />
          <rect x="12" y="12" width="516" height="176" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" rx="8" />

          {/* 標題橫幅 */}
          <rect x="12" y="12" width="516" height="28" fill="#eff6ff" rx="8" />
          <text x="270" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1d4ed8">
            關係代名詞 (who/which) vs 關係副詞 (where/when/why) 結構判定天平
          </text>

          {/* 左圖：子句完整性天平 */}
          <g transform="translate(30, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="110" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">子句完整度速判天平</text>

            <rect x="10" y="24" width="200" height="36" fill="#eff6ff" stroke="#bfdbfe" rx="3" />
            <text x="16" y="38" fontSize="8" fontWeight="bold" fill="#1e40af">【缺主詞 / 受詞 ➜ 選關係代名詞】</text>
            <text x="16" y="50" fontSize="7" fill="#2563eb">The site which we visited (缺 visited 受詞)</text>

            <rect x="10" y="66" width="200" height="36" fill="#ecfdf5" stroke="#a7f3d0" rx="3" />
            <text x="16" y="80" fontSize="8" fontWeight="bold" fill="#065f46">【主受完整 ➜ 選關係副詞 / 介+which】</text>
            <text x="16" y="92" fontSize="7" fill="#059669">The site where we worked (完整子句)</text>
          </g>

          {/* 右圖：等價轉換公式 */}
          <g transform="translate(265, 48)">
            <rect x="0" y="0" width="245" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="122" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#047857">關係副詞 ＝ 介系詞 ＋ which</text>

            <rect x="10" y="24" width="225" height="22" fill="#f0fdf4" rx="3" />
            <text x="16" y="38" fontSize="8" fontWeight="bold" fill="#166534">地點：where ＝ in / at / on which</text>

            <rect x="10" y="48" width="225" height="22" fill="#eff6ff" rx="3" />
            <text x="16" y="62" fontSize="8" fontWeight="bold" fill="#1e40af">時間：when ＝ at / in / on which</text>

            <rect x="10" y="72" width="225" height="22" fill="#fffbeb" rx="3" />
            <text x="16" y="86" fontSize="8" fontWeight="bold" fill="#92400e">理由：why ＝ for which</text>

            <text x="122" y="103" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#dc2626">★ 複合關代 what ＝ the thing which (前無先行詞！)</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#eff6ff" stroke="#93c5fd" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e40af">
            秒殺口訣：缺主受是關代，完整句子選關副；前面已有先行詞，絕對嚴禁選 what！
          </text>
        </svg>
      );

    // 52. 英文：完全倒裝 vs 部分倒裝句型結構圖
    case 'english-full-inversion':
      return (
        <svg viewBox="0 0 540 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="英文倒裝句型圖解">
          <rect width="540" height="200" fill="#f8fafc" rx="10" />
          <rect x="12" y="12" width="516" height="176" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" rx="8" />

          {/* 標題橫幅 */}
          <rect x="12" y="12" width="516" height="28" fill="#fef2f2" rx="8" />
          <text x="270" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">
            完全倒裝 (Full Inversion) vs 部分倒裝 (Partial Inversion) 雙軌語序
          </text>

          {/* 左圖：完全倒裝 (動詞全搬) */}
          <g transform="translate(30, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#fef2f2" stroke="#fecaca" rx="6" />
            <text x="110" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b91c1c">完全倒裝：地方副詞置首 (V + S)</text>

            <rect x="10" y="24" width="200" height="34" fill="#ffffff" stroke="#fca5a5" rx="3" />
            <text x="16" y="37" fontSize="7.5" fontWeight="bold" fill="#991b1b">地方副詞/介系詞片語 + 動詞 + 名詞主詞</text>
            <text x="16" y="49" fontSize="7" fill="#64748b">Ex: On the hill stands a wooden house.</text>

            <rect x="10" y="64" width="200" height="38" fill="#fff1f2" stroke="#fecdd3" rx="3" />
            <text x="16" y="78" fontSize="7.5" fontWeight="bold" fill="#e11d48">★ 致命陷阱：代名詞不倒裝！</text>
            <text x="16" y="90" fontSize="7" fill="#be123c">Here comes the bus (O) vs Here it comes (O, 不倒裝)</text>
          </g>

          {/* 右圖：部分倒裝 (助動詞搬移) */}
          <g transform="translate(265, 48)">
            <rect x="0" y="0" width="245" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="122" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">部分倒裝：否定詞置首 (Aux + S + V)</text>

            <rect x="10" y="24" width="225" height="34" fill="#eff6ff" stroke="#bfdbfe" rx="3" />
            <text x="16" y="37" fontSize="7.5" fontWeight="bold" fill="#1e40af">否定詞 + 助動詞 (do/did/have) + 主詞 + 原形動詞</text>
            <text x="16" y="49" fontSize="7" fill="#2563eb">Ex: Never did he imagine such structure.</text>

            <rect x="10" y="64" width="225" height="38" fill="#f0fdf4" stroke="#bbf7d0" rx="3" />
            <text x="16" y="78" fontSize="7.5" fontWeight="bold" fill="#15803d">So / Neither 附和簡答倒裝：</text>
            <text x="16" y="90" fontSize="7" fill="#166534">A loves architecture. ➜ So do I. / Neither do I.</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#fef2f2" stroke="#fca5a5" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#991b1b">
            秒殺口訣：地方副詞全倒裝（名詞倒、代名詞不倒）；否定置首疑問句排（助動搬前動還原）！
          </text>
        </svg>
      );

    // 53. 國語文：中國歷代賦體演變時序軸
    case 'chinese-fu-evolution':
      return (
        <svg viewBox="0 0 540 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="賦體文學流變圖解">
          <rect width="540" height="200" fill="#f8fafc" rx="10" />
          <rect x="12" y="12" width="516" height="176" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" rx="8" />

          {/* 標題橫幅 */}
          <rect x="12" y="12" width="516" height="28" fill="#fffbeb" rx="8" />
          <text x="270" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">
            中國歷代賦體演變光譜（古賦 ➜ 漢賦 ➜ 俳賦 ➜ 文賦 ➜ 律賦）
          </text>

          {/* 時間軸進階 */}
          <g transform="translate(30, 48)">
            <rect x="0" y="0" width="480" height="110" fill="#fefce8" stroke="#fef08a" rx="6" />

            {/* 5 階段階梯 */}
            <g transform="translate(10, 16)">
              {/* 騷賦 */}
              <rect x="0" y="0" width="85" height="75" fill="#ffffff" stroke="#eab308" rx="4" />
              <text x="42" y="16" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#854d0e">① 騷賦 (戰國)</text>
              <text x="42" y="32" textAnchor="middle" fontSize="7" fill="#64748b">屈原〈離騷〉</text>
              <text x="42" y="46" textAnchor="middle" fontSize="7" fill="#713f12">多「兮」字</text>
              <text x="42" y="60" textAnchor="middle" fontSize="7" fill="#713f12">主抒情言志</text>

              {/* 箭頭 */}
              <text x="92" y="40" fontSize="11" fill="#ca8a04">→</text>

              {/* 漢大賦 */}
              <rect x="100" y="0" width="85" height="75" fill="#ffffff" stroke="#eab308" rx="4" />
              <text x="142" y="16" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#854d0e">② 古賦 (漢大賦)</text>
              <text x="142" y="32" textAnchor="middle" fontSize="7" fill="#64748b">司馬相如〈子虛〉</text>
              <text x="142" y="46" textAnchor="middle" fontSize="7" fill="#713f12">鋪採摛文</text>
              <text x="142" y="60" textAnchor="middle" fontSize="7" fill="#713f12">勸百諷一</text>

              <text x="192" y="40" fontSize="11" fill="#ca8a04">→</text>

              {/* 俳賦 */}
              <rect x="200" y="0" width="85" height="75" fill="#ffffff" stroke="#eab308" rx="4" />
              <text x="242" y="16" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#854d0e">③ 俳賦 (六朝)</text>
              <text x="242" y="32" textAnchor="middle" fontSize="7" fill="#64748b">鮑照〈蕪城賦〉</text>
              <text x="242" y="46" textAnchor="middle" fontSize="7" fill="#713f12">講究四六駢偶</text>
              <text x="242" y="60" textAnchor="middle" fontSize="7" fill="#713f12">對仗聲律嚴苛</text>

              <text x="292" y="40" fontSize="11" fill="#ca8a04">→</text>

              {/* 文賦 */}
              <rect x="300" y="0" width="85" height="75" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" rx="4" />
              <text x="342" y="16" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#15803d">④ 文賦 (唐宋)</text>
              <text x="342" y="32" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#166534">蘇軾〈赤壁賦〉</text>
              <text x="342" y="46" textAnchor="middle" fontSize="7" fill="#166534">★ 化賦為文</text>
              <text x="342" y="60" textAnchor="middle" fontSize="7" fill="#166534">駢散相間哲理深</text>

              <text x="392" y="40" fontSize="11" fill="#ca8a04">→</text>

              {/* 律賦 */}
              <rect x="400" y="0" width="65" height="75" fill="#ffffff" stroke="#94a3b8" rx="4" />
              <text x="432" y="16" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#475569">⑤ 律賦</text>
              <text x="432" y="32" textAnchor="middle" fontSize="7" fill="#64748b">科舉考試</text>
              <text x="432" y="46" textAnchor="middle" fontSize="7" fill="#64748b">限制韻腳</text>
              <text x="432" y="60" textAnchor="middle" fontSize="7" fill="#64748b">僵化束縛</text>
            </g>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#fffbeb" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#854d0e">
            必考核心：蘇軾〈赤壁賦〉絕非駢賦或律賦，而是突破聲律拘束、吸納古文筆調之「宋代文賦」！
          </text>
        </svg>
      );

    // 54. 國語文：明代散文流派與歸有光借物抒情心智圖
    case 'chinese-tangsang-prose':
      return (
        <svg viewBox="0 0 540 200" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="明代散文流派與項脊軒志圖解">
          <rect width="540" height="200" fill="#f8fafc" rx="10" />
          <rect x="12" y="12" width="516" height="176" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" rx="8" />

          {/* 標題橫幅 */}
          <rect x="12" y="12" width="516" height="28" fill="#f0fdf4" rx="8" />
          <text x="270" y="30" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#166534">
            明代散文流派論爭與歸有光「不事雕琢、自有風致」借物抒情技法
          </text>

          {/* 左圖：明代散文三大流派對比 */}
          <g transform="translate(30, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="110" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">明代三大散文流派對壘</text>

            <rect x="10" y="24" width="200" height="24" fill="#fef2f2" stroke="#fecaca" rx="3" />
            <text x="16" y="38" fontSize="7.5" fontWeight="bold" fill="#991b1b">前後七子：文必秦漢、詩必盛唐 (擬古剽竊)</text>

            <rect x="10" y="52" width="200" height="26" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" rx="3" />
            <text x="16" y="66" fontSize="8" fontWeight="bold" fill="#065f46">★ 唐宋派 (歸有光)：宗韓柳歐三蘇、重真情</text>
            <text x="16" y="74" fontSize="7" fill="#047857">「不事雕琢而自有風致，開清代桐城派先河」</text>

            <rect x="10" y="82" width="200" height="22" fill="#eff6ff" stroke="#bfdbfe" rx="3" />
            <text x="16" y="96" fontSize="7.5" fontWeight="bold" fill="#1e40af">公安派 (三袁)：獨抒性靈、不拘格套</text>
          </g>

          {/* 右圖：項脊軒托物寄情三大意象 */}
          <g transform="translate(265, 48)">
            <rect x="0" y="0" width="245" height="110" fill="#f0fdf4" stroke="#bbf7d0" rx="6" />
            <text x="122" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">項脊軒四大托物寄情意象</text>

            <rect x="10" y="24" width="225" height="24" fill="#ffffff" stroke="#86efac" rx="3" />
            <text x="16" y="38" fontSize="8" fontWeight="bold" fill="#15803d">① 方丈之室 ➜ 修葺借天光植蘭桂 (讀書清樂)</text>

            <rect x="10" y="52" width="225" height="24" fill="#ffffff" stroke="#86efac" rx="3" />
            <text x="16" y="66" fontSize="8" fontWeight="bold" fill="#15803d">② 小門隔牆 ➜ 牆往往而是客踰庖 (家族分崩)</text>

            <rect x="10" y="80" width="225" height="24" fill="#ffffff" stroke="#86efac" rx="3" />
            <text x="16" y="94" fontSize="8" fontWeight="bold" fill="#15803d">③ 庭前枇杷 ➜ 亭亭如蓋手植樹 (悼念亡妻)</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#166534">
            秒殺口訣：歸有光屬唐宋派，借生活瑣事寄深情，枇杷手植悼亡妻，開桐城派雅正先聲！
          </text>
        </svg>
      );


    // 55. 力學 力偶矩之自由向量特性與平行力系等效化
    case 'mechanics-varignon-couple':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="力偶矩與等效力系圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            力偶矩 (Couples) 之幾何特性與力的平行移動等效系
          </text>

          {/* 左圖：力偶 M = F * d 自由向量 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">力偶 (Couples) 自由向量性質</text>

            {/* 兩平行反向力 */}
            <line x1="45" y1="35" x2="165" y2="35" stroke="#94a3b8" strokeDasharray="3,3" strokeWidth="1" />
            <line x1="45" y1="85" x2="165" y2="85" stroke="#94a3b8" strokeDasharray="3,3" strokeWidth="1" />

            {/* 力 +F 向右 */}
            <line x1="60" y1="35" x2="140" y2="35" stroke="#ef4444" strokeWidth="2.5" />
            <polygon points="140,31 150,35 140,39" fill="#ef4444" />
            <text x="155" y="39" fontSize="11" fontWeight="bold" fill="#ef4444">+F</text>

            {/* 力 -F 向左 */}
            <line x1="140" y1="85" x2="60" y2="85" stroke="#ef4444" strokeWidth="2.5" />
            <polygon points="60,81 50,85 60,89" fill="#ef4444" />
            <text x="32" y="89" fontSize="11" fontWeight="bold" fill="#ef4444">-F</text>

            {/* 臂距 d */}
            <line x1="100" y1="35" x2="100" y2="85" stroke="#2563eb" strokeWidth="1.5" />
            <circle cx="100" cy="35" r="2.5" fill="#2563eb" />
            <circle cx="100" cy="85" r="2.5" fill="#2563eb" />
            <text x="110" y="64" fontSize="10" fontWeight="bold" fill="#2563eb">d (臂長)</text>

            {/* 旋轉方向箭頭 */}
            <path d="M 175,50 A 18 18 0 1 1 175,70" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="2,1" />
            <text x="200" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">M=F·d</text>
          </g>

          {/* 右圖：力平移加力偶等效簡化 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="112" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">力的平行移動原理 (等效系)</text>

            <rect x="25" y="30" width="80" height="30" fill="#ffffff" stroke="#93c5fd" rx="4" />
            <text x="65" y="45" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e3a8a">點 A 受力 F</text>
            <path d="M 65,48 L 65,22" stroke="#ef4444" strokeWidth="2" />
            <polygon points="62,22 65,16 68,22" fill="#ef4444" />

            <text x="115" y="50" fontSize="12" fontWeight="bold" fill="#64748b">等效</text>
            <text x="115" y="65" fontSize="12" fontWeight="bold" fill="#64748b">══➜</text>

            <rect x="135" y="30" width="80" height="65" fill="#ffffff" stroke="#3b82f6" rx="4" />
            <text x="175" y="45" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1e40af">平移至點 O</text>
            <path d="M 155,75 L 155,48" stroke="#ef4444" strokeWidth="2" />
            <polygon points="152,48 155,42 158,48" fill="#ef4444" />
            <text x="160" y="58" fontSize="9" fontWeight="bold" fill="#ef4444">同力 F</text>

            <path d="M 190,65 A 10 10 0 1 1 180,55" fill="none" stroke="#7c3aed" strokeWidth="2" />
            <text x="195" y="85" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#7c3aed">+ 附加 Mo=F·d</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#854d0e">
            口訣：力偶純轉動無移動合力為零；力平移加附加力偶，大小不變主矩相隨！
          </text>
        </svg>
      );

    // 56. 力學 摩擦角與斜面滑動傾覆分析
    case 'mechanics-friction-angle':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="摩擦角與滑動傾覆臨界圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            庫侖摩擦定律、摩擦角 (Friction Angle) 與滑動 vs 傾覆臨界判定
          </text>

          {/* 左側：斜面摩擦錐與摩擦角 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">摩擦角 φ 與斜面自鎖臨界</text>

            {/* 斜面底座 */}
            <polygon points="20,95 190,95 190,40" fill="#e2e8f0" stroke="#94a3b8" />
            <text x="45" y="90" fontSize="9" fontWeight="bold" fill="#475569">θ (傾角)</text>

            {/* 斜面上之木塊 */}
            <g transform="translate(95, 60) rotate(-18)">
              <rect x="-20" y="-18" width="40" height="26" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5" rx="2" />
              {/* 正向力 N */}
              <line x1="0" y1="0" x2="0" y2="-28" stroke="#2563eb" strokeWidth="2" />
              <polygon points="-3,-28 0,-34 3,-28" fill="#2563eb" />
              <text x="5" y="-22" fontSize="9" fontWeight="bold" fill="#2563eb">N</text>

              {/* 摩擦力 fs */}
              <line x1="0" y1="8" x2="26" y2="8" stroke="#ef4444" strokeWidth="2" />
              <polygon points="26,5 32,8 26,11" fill="#ef4444" />
              <text x="12" y="20" fontSize="9" fontWeight="bold" fill="#ef4444">fs</text>

              {/* 總反力 R 與法線夾角 φ */}
              <line x1="0" y1="8" x2="16" y2="-26" stroke="#059669" strokeWidth="1.8" strokeDasharray="3,2" />
              <text x="18" y="-14" fontSize="9" fontWeight="bold" fill="#059669">R</text>
            </g>

            <text x="120" y="32" fontSize="8.5" fontWeight="bold" fill="#059669">tan φ = μs = fs/N</text>
            <text x="110" y="85" fontSize="8" fill="#b91c1c">自鎖：θ ≦ φ (靜止不動)</text>
          </g>

          {/* 右側：推力箱體滑動 vs 傾覆 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#fef2f2" stroke="#fecaca" rx="6" />
            <text x="112" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#b91c1c">箱體受水平推力：滑動 vs 傾覆</text>

            {/* 箱體 */}
            <rect x="50" y="28" width="55" height="70" fill="#ffffff" stroke="#dc2626" strokeWidth="1.5" rx="3" />
            <text x="77" y="65" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#991b1b">寬 b</text>

            {/* 推力 P 在高度 h 處 */}
            <line x1="15" y1="42" x2="50" y2="42" stroke="#2563eb" strokeWidth="2.5" />
            <polygon points="46,39 52,42 46,45" fill="#2563eb" />
            <text x="22" y="36" fontSize="10" fontWeight="bold" fill="#2563eb">P (推力)</text>
            <text x="15" y="70" fontSize="8.5" fill="#64748b">高度 h</text>

            {/* 傾覆樞紐點 O */}
            <circle cx="105" cy="98" r="3.5" fill="#dc2626" />
            <text x="115" y="102" fontSize="9" fontWeight="bold" fill="#dc2626">樞紐 O</text>

            <rect x="125" y="32" width="90" height="62" fill="#ffffff" stroke="#f87171" rx="4" />
            <text x="170" y="47" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#991b1b">臨界高度 hcrit</text>
            <text x="170" y="62" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">hcrit = b / (2·μs)</text>
            <text x="170" y="76" textAnchor="middle" fontSize="7.5" fill="#475569">h &gt; hcrit ➜ 先傾覆</text>
            <text x="170" y="87" textAnchor="middle" fontSize="7.5" fill="#475569">h &lt; hcrit ➜ 先滑動</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#166534">
            速算訣竅：斜面自鎖角等於摩擦角；高推容易翻、低推容易滑，臨界比值看寬度與兩倍摩擦係數！
          </text>
        </svg>
      );

    // 57. 力學 桁架截面法快速求解
    case 'mechanics-method-of-sections':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="桁架截面法解題圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            桁架分析：截面法 (Method of Sections) 虛擬切剖與單式速算
          </text>

          {/* 華倫桁架圖示 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="280" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="140" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">虛擬截面 1-1 切斷三桿</text>

            {/* 下弦桿 */}
            <line x1="30" y1="85" x2="90" y2="85" stroke="#334155" strokeWidth="2.5" />
            <line x1="90" y1="85" x2="150" y2="85" stroke="#334155" strokeWidth="2.5" />
            <line x1="150" y1="85" x2="210" y2="85" stroke="#334155" strokeWidth="2.5" />
            <line x1="210" y1="85" x2="270" y2="85" stroke="#334155" strokeWidth="2.5" />

            {/* 上弦桿 */}
            <line x1="60" y1="35" x2="120" y2="35" stroke="#334155" strokeWidth="2.5" />
            <line x1="120" y1="35" x2="180" y2="35" stroke="#334155" strokeWidth="2.5" />
            <line x1="180" y1="35" x2="240" y2="35" stroke="#334155" strokeWidth="2.5" />

            {/* 腹桿 */}
            <line x1="30" y1="85" x2="60" y2="35" stroke="#334155" strokeWidth="1.8" />
            <line x1="60" y1="35" x2="90" y2="85" stroke="#334155" strokeWidth="1.8" />
            <line x1="90" y1="85" x2="120" y2="35" stroke="#334155" strokeWidth="1.8" />
            <line x1="120" y1="35" x2="150" y2="85" stroke="#334155" strokeWidth="1.8" />
            <line x1="150" y1="85" x2="180" y2="35" stroke="#334155" strokeWidth="1.8" />
            <line x1="180" y1="35" x2="210" y2="85" stroke="#334155" strokeWidth="1.8" />
            <line x1="210" y1="85" x2="240" y2="35" stroke="#334155" strokeWidth="1.8" />
            <line x1="240" y1="35" x2="270" y2="85" stroke="#334155" strokeWidth="1.8" />

            {/* 截面 1-1 剖切線 */}
            <path d="M 105,20 C 110,50 100,70 105,100" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2" />
            <text x="100" y="15" fontSize="10" fontWeight="bold" fill="#ef4444">1</text>
            <text x="100" y="108" fontSize="10" fontWeight="bold" fill="#ef4444">1</text>

            {/* 切出桿件內力箭頭 */}
            <line x1="85" y1="35" x2="105" y2="35" stroke="#2563eb" strokeWidth="2" />
            <polygon points="105,32 112,35 105,38" fill="#2563eb" />
            <text x="110" y="30" fontSize="8" fontWeight="bold" fill="#2563eb">F_top</text>

            <line x1="102" y1="62" x2="115" y2="72" stroke="#16a34a" strokeWidth="2" />
            <polygon points="115,68 120,76 112,74" fill="#16a34a" />
            <text x="122" y="70" fontSize="8" fontWeight="bold" fill="#16a34a">F_diag</text>

            <line x1="120" y1="85" x2="135" y2="85" stroke="#9333ea" strokeWidth="2" />
            <polygon points="135,82 142,85 135,88" fill="#9333ea" />
            <text x="135" y="98" fontSize="8" fontWeight="bold" fill="#9333ea">F_bot</text>
          </g>

          {/* 右側：SOP 三大原則 */}
          <g transform="translate(330, 48)">
            <rect x="0" y="0" width="175" height="110" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="87" y="18" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e40af">截面法解題 3 步 SOP</text>

            <rect x="10" y="26" width="155" height="24" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="16" y="38" fontSize="7.5" fontWeight="bold" fill="#1e3a8a">① 虛擬切剖：切斷 ≦ 3 根未知桿</text>
            <text x="16" y="46" fontSize="6.5" fill="#64748b">取受力較少之一側為隔離體 (FBD)</text>

            <rect x="10" y="54" width="155" height="24" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="16" y="66" fontSize="7.5" fontWeight="bold" fill="#1e3a8a">② 找交點取矩：ΣMo = 0 一式搞定</text>
            <text x="16" y="74" fontSize="6.5" fill="#64748b">另兩未知桿交於 O 點，取 Mo 即出</text>

            <rect x="10" y="82" width="155" height="22" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="16" y="94" fontSize="7.5" fontWeight="bold" fill="#1e3a8a">③ 垂直投影：ΣFy = 0 求斜腹桿</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#854d0e">
            黃金法則：求跨中單桿桿力用截面法最快，切剖不超過三桿，兩桿交點取力矩一式秒殺！
          </text>
        </svg>
      );

    // 58. 力學 外伸梁與懸臂梁 V-M 圖特徵
    case 'mechanics-vm-cantilever':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="外伸梁與懸臂梁VM圖圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            梁內力圖解：外伸梁、懸臂梁與 V-M 圖微分面積特徵 (dV/dx=-w, dM/dx=V)
          </text>

          {/* 外伸梁載重與內力圖 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="235" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="117" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">外伸梁載重與剪力圖 (V-Diagram)</text>

            {/* 梁身與支承 */}
            <line x1="20" y1="28" x2="215" y2="28" stroke="#334155" strokeWidth="3" />
            {/* 鉸支承 A */}
            <polygon points="45,28 38,40 52,40" fill="#2563eb" />
            <text x="45" y="49" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#2563eb">A (RA)</text>

            {/* 滾支承 B */}
            <circle cx="155" cy="34" r="5" fill="#2563eb" />
            <text x="155" y="49" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#2563eb">B (RB)</text>

            {/* 懸臂端集中力 P */}
            <line x1="205" y1="10" x2="205" y2="26" stroke="#dc2626" strokeWidth="2" />
            <polygon points="202,24 205,28 208,24" fill="#dc2626" />
            <text x="210" y="18" fontSize="8.5" fontWeight="bold" fill="#dc2626">P</text>

            {/* 剪力圖 V */}
            <line x1="20" y1="75" x2="215" y2="75" stroke="#94a3b8" strokeWidth="1" />
            <path d="M 45,75 L 45,58 L 155,70 L 155,95 L 205,95 L 205,75" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5" />
            <text x="25" y="66" fontSize="8" fontWeight="bold" fill="#2563eb">+V</text>
            <text x="175" y="105" fontSize="8" fontWeight="bold" fill="#dc2626">-V</text>
            <circle cx="105" cy="75" r="3" fill="#ef4444" />
            <text x="105" y="68" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#ef4444">V=0 (Mmax)</text>
          </g>

          {/* 右側：彎矩圖 M 與微分關係 */}
          <g transform="translate(285, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e40af">彎矩圖 (M-Diagram) 與極值規律</text>

            {/* 基準線 */}
            <line x1="15" y1="65" x2="205" y2="65" stroke="#94a3b8" strokeWidth="1" />
            {/* 拋物線向正彎矩 + 懸臂負彎矩 */}
            <path d="M 35,65 Q 85,30 145,65 L 145,85 Q 175,80 195,65" fill="none" stroke="#7c3aed" strokeWidth="2" />
            <circle cx="88" cy="47" r="3" fill="#059669" />
            <text x="88" y="42" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#059669">+Mmax (跨中正彎矩)</text>

            <circle cx="145" cy="85" r="3" fill="#dc2626" />
            <text x="155" y="98" fontSize="8" fontWeight="bold" fill="#dc2626">-M支承負彎矩 (拉力在上)</text>

            <rect x="15" y="18" width="190" height="20" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="110" y="32" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1e3a8a">微積分關係：dM/dx = V,  ΔM = ∫ V dx</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#166534">
            記憶核心：剪力零點必為彎矩極值點！集中力處剪力突變、均布載重剪力傾斜線彎矩拋物線！
          </text>
        </svg>
      );

    // 59. 力學 迴轉半徑、極慣性矩與截面係數
    case 'mechanics-radius-gyration':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="迴轉半徑與截面係數圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            斷面幾何性質：極慣性矩 J、迴轉半徑 r = √(I/A) 與截面模數 Z = I/y
          </text>

          {/* 左圖：迴轉半徑幾何模型 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">迴轉半徑 (Radius of Gyration) 概念</text>

            {/* 任意斷面 A */}
            <path d="M 35,45 Q 55,25 75,45 Q 85,85 55,85 Q 25,75 35,45 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
            <text x="55" y="60" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0369a1">面積 A</text>

            <text x="95" y="60" fontSize="12" fontWeight="bold" fill="#64748b">等效</text>
            <text x="95" y="72" fontSize="12" fontWeight="bold" fill="#64748b">══➜</text>

            {/* 等效條狀面積在 r 處 */}
            <line x1="130" y1="90" x2="205" y2="90" stroke="#0f172a" strokeWidth="2" />
            <text x="210" y="93" fontSize="8" fontWeight="bold" fill="#0f172a">X 軸</text>

            <line x1="140" y1="45" x2="195" y2="45" stroke="#ef4444" strokeWidth="4" />
            <text x="167" y="40" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ef4444">集中面積 A</text>

            <line x1="167" y1="45" x2="167" y2="90" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="2,2" />
            <text x="175" y="70" fontSize="9" fontWeight="bold" fill="#2563eb">r = √(I/A)</text>
          </g>

          {/* 右圖：三公式對照 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e40af">三大斷面幾何核心指標</text>

            <rect x="10" y="24" width="205" height="24" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="15" y="38" fontSize="8" fontWeight="bold" fill="#1e3a8a">極慣性矩：J = Ix + Iy (垂直軸定理)</text>
            <text x="15" y="45" fontSize="7" fill="#64748b">圓形 J = π·d⁴ / 32；抗扭矩剛度核心指標</text>

            <rect x="10" y="52" width="205" height="24" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="15" y="66" fontSize="8" fontWeight="bold" fill="#1e3a8a">迴轉半徑：r = √(I / A) (長柱抗挫曲)</text>
            <text x="15" y="73" fontSize="7" fill="#64748b">細長比 λ = L / r；細長比越大越容易失穩</text>

            <rect x="10" y="80" width="205" height="24" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="15" y="94" fontSize="8" fontWeight="bold" fill="#1e3a8a">截面模數：Z = I / y_max (抗彎能力)</text>
            <text x="15" y="101" fontSize="7" fill="#64748b">最大彎曲應力 σ_max = M / Z；矩形 Z = bh² / 6</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#854d0e">
            秒殺公式：矩形 Ix=bh³/12、Zx=bh²/6、rx=h/√12；同面積下 I 型鋼截面係數遠高於矩形！
          </text>
        </svg>
      );

    // 60. 製圖 線型優先順序與虛線交接標準
    case 'drafting-lines-priority':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="製圖線型優先順序與交接規範圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            CNS 工程製圖：線型重疊優先順序與隱藏虛線 (Dashed Lines) 交接畫法
          </text>

          {/* 左圖：線型優先階層金字塔 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">線型重疊優先順序 (從高到低)</text>

            <rect x="15" y="24" width="195" height="18" fill="#dcfce7" stroke="#86efac" rx="3" />
            <text x="22" y="36" fontSize="8" fontWeight="bold" fill="#166534">① 粗實線：外形輪廓線 (優先度最高！)</text>

            <rect x="15" y="45" width="195" height="18" fill="#eff6ff" stroke="#93c5fd" rx="3" />
            <text x="22" y="57" fontSize="8" fontWeight="bold" fill="#1e40af">② 中虛線：隱藏線 (次優先)</text>

            <rect x="15" y="66" width="195" height="18" fill="#fef3c7" stroke="#fde047" rx="3" />
            <text x="22" y="78" fontSize="8" fontWeight="bold" fill="#854d0e">③ 割面線：剖切位置兩端特粗鏈線</text>

            <rect x="15" y="87" width="195" height="18" fill="#f1f5f9" stroke="#cbd5e1" rx="3" />
            <text x="22" y="99" fontSize="8" fontWeight="bold" fill="#475569">④ 細鏈線：中心線 ＞ 細實線：尺度/引出線</text>
          </g>

          {/* 右圖：虛線交接對與錯 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#fff7ed" stroke="#fed7aa" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#c2410c">CNS 隱藏虛線交接標準畫法</text>

            {/* 正確：L角相接 */}
            <g transform="translate(25, 28)">
              <text x="35" y="10" fontSize="8" fontWeight="bold" fill="#166534">✔ L角交角實點相接</text>
              <line x1="10" y1="35" x2="35" y2="35" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,2" />
              <line x1="35" y1="35" x2="35" y2="12" stroke="#16a34a" strokeWidth="2" strokeDasharray="5,2" />
            </g>

            {/* 錯誤：L角留空 */}
            <g transform="translate(130, 28)">
              <text x="35" y="10" fontSize="8" fontWeight="bold" fill="#dc2626">✘ 轉角留空隙 (錯)</text>
              <line x1="10" y1="35" x2="30" y2="35" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3" />
              <line x1="35" y1="30" x2="35" y2="12" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,3" />
            </g>

            <rect x="15" y="75" width="195" height="28" fill="#ffffff" stroke="#fb923c" rx="3" />
            <text x="22" y="88" fontSize="7.5" fontWeight="bold" fill="#9a3412">實線延伸虛線：起點「必須留空隙」！</text>
            <text x="22" y="97" fontSize="7" fill="#64748b">避免誤認虛線為實線之一部分 (實虛交界留 1~1.5mm 空隙)</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#166534">
            標註口訣：輪廓壓隱藏、隱藏壓中心；角相交相接、實延伸留隙！
          </text>
        </svg>
      );

    // 61. 製圖 建築尺度標註規則與比例尺換算
    case 'drafting-dimensioning-rules':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="建築尺度標註規則圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            CNS 建築製圖：尺度標註四要素、起迄符號與比例尺 (Scale) 換算
          </text>

          {/* 左圖：尺度標註四要素 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">尺度標註 (Dimensioning) 四要素</text>

            {/* 被標註物體 */}
            <rect x="35" y="55" width="140" height="35" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
            <text x="105" y="76" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#334155">實體構件</text>

            {/* 尺度界線 (Extension lines) */}
            <line x1="35" y1="50" x2="35" y2="28" stroke="#2563eb" strokeWidth="1.5" />
            <line x1="175" y1="50" x2="175" y2="28" stroke="#2563eb" strokeWidth="1.5" />
            <text x="18" y="42" fontSize="7.5" fill="#2563eb">尺度界線</text>

            {/* 尺度線 (Dimension line) */}
            <line x1="35" y1="35" x2="175" y2="35" stroke="#ef4444" strokeWidth="1.5" />
            {/* 45度斜線建築箭頭 */}
            <line x1="31" y1="39" x2="39" y2="31" stroke="#dc2626" strokeWidth="2.5" />
            <line x1="171" y1="39" x2="179" y2="31" stroke="#dc2626" strokeWidth="2.5" />

            {/* 尺度數字 (文字在尺度線上方) */}
            <text x="105" y="32" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">3600 (mm)</text>
            <text x="105" y="100" textAnchor="middle" fontSize="7" fill="#64748b">建築製圖以「毫米 (mm)」為法定標準單位，不標註單位符號</text>
          </g>

          {/* 右圖：比例尺換算矩陣 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e40af">三稜比例尺六種比例換算表</text>

            <rect x="15" y="24" width="195" height="20" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="22" y="37" fontSize="8" fontWeight="bold" fill="#1e3a8a">1:100 ➜ 圖上 1 cm ＝ 現場 100 cm (1.0 m)</text>

            <rect x="15" y="47" width="195" height="20" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="22" y="60" fontSize="8" fontWeight="bold" fill="#1e3a8a">1:30   ➜ 圖上 1 cm ＝ 現場 30 cm (0.3 m)</text>

            <rect x="15" y="70" width="195" height="20" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="22" y="83" fontSize="8" fontWeight="bold" fill="#1e3a8a">1:200 ➜ 圖上 1 cm ＝ 現場 200 cm (2.0 m)</text>

            <text x="112" y="102" textAnchor="middle" fontSize="7.5" fill="#475569">公式：現場實際長度 ＝ 圖上測量長度 × 比例分母</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#854d0e">
            記憶守則：建築數字恆在線上方，文字由下向右看；圖紙縮小標真實尺寸，比例分母除算圖上長度！
          </text>
        </svg>
      );

    // 62. 製圖 單斜面輔助視圖投影求實形
    case 'drafting-auxiliary-views':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="單斜面輔助視圖圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            單斜面投影：輔助視圖 (Auxiliary Views) 投影求真實大小與形狀 (True Shape)
          </text>

          {/* 前視圖中之斜面邊緣視圖 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">前視圖：斜面呈邊緣視圖 (Edge View)</text>

            <polygon points="40,85 140,85 140,40 80,40" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
            {/* 斜面斜線 */}
            <line x1="40" y1="85" x2="80" y2="40" stroke="#ef4444" strokeWidth="3" />
            <text x="45" y="58" fontSize="8.5" fontWeight="bold" fill="#ef4444">斜面 (邊緣視)</text>

            {/* 垂直投影引導線 */}
            <line x1="40" y1="85" x2="15" y2="60" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3,2" />
            <line x1="80" y1="40" x2="55" y2="15" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3,2" />

            <text x="110" y="98" textAnchor="middle" fontSize="7.5" fill="#475569">常規正投影 (俯視/右側視) 中斜面皆產生縮形 (Fore-shortened)</text>
          </g>

          {/* 右圖：平行基準面求得之實形 */}
          <g transform="translate(280, 48)">
            <rect x="0" y="0" width="225" height="110" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="112" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e40af">輔助基準面 RP 平行展開得「真實形狀」</text>

            {/* 基準線 RP */}
            <line x1="25" y1="35" x2="195" y2="35" stroke="#7c3aed" strokeWidth="1.8" strokeDasharray="6,2" />
            <text x="205" y="38" fontSize="8.5" fontWeight="bold" fill="#7c3aed">RP (基準線)</text>

            {/* 展開之斜面真實四邊形 */}
            <polygon points="45,45 175,45 175,85 45,85" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <text x="110" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">真實形狀 (True Shape)</text>
            <text x="110" y="78" textAnchor="middle" fontSize="8" fill="#b45309">寬度 W (取自俯視圖深度) × 實長 L</text>
            <text x="110" y="102" textAnchor="middle" fontSize="7.5" fill="#1e40af">投射線必須垂直於斜面邊緣線 (90° 正交！)</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#166534">
            解題口訣：斜面求實形，投射必垂直；基準線取深度，真實大小立現！
          </text>
        </svg>
      );

    // 63. 建築構造 RC / SC / SRC 耐震韌性結構比較
    case 'arch-building-structure-types':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="RC SC SRC 結構比較圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            建築結構系統：RC 鋼筋混凝土、SC 鋼骨構造、SRC 鋼骨鋼筋混凝土抗震性能
          </text>

          {/* 三大結構斷面柱圖 */}
          <g transform="translate(35, 48)">
            {/* RC 柱 */}
            <rect x="0" y="0" width="145" height="110" fill="#f1f5f9" stroke="#cbd5e1" rx="6" />
            <text x="72" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0f172a">RC 鋼筋混凝土</text>
            <rect x="35" y="26" width="75" height="50" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" rx="4" />
            {/* 箍筋與主筋 */}
            <rect x="42" y="32" width="61" height="38" fill="none" stroke="#2563eb" strokeWidth="1.5" />
            <circle cx="42" cy="32" r="3" fill="#dc2626" />
            <circle cx="103" cy="32" r="3" fill="#dc2626" />
            <circle cx="42" cy="70" r="3" fill="#dc2626" />
            <circle cx="103" cy="70" r="3" fill="#dc2626" />
            <text x="72" y="90" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#475569">自重大、剛度高、防火佳</text>
            <text x="72" y="100" textAnchor="middle" fontSize="7" fill="#64748b">適用 15 樓以下低中樓層</text>
          </g>

          <g transform="translate(195, 48)">
            {/* SC 鋼骨柱 */}
            <rect x="0" y="0" width="145" height="110" fill="#eff6ff" stroke="#93c5fd" rx="6" />
            <text x="72" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e40af">SC 純鋼骨構造</text>
            <path d="M 45,30 L 100,30 M 72,30 L 72,72 M 45,72 L 100,72" stroke="#dc2626" strokeWidth="6" strokeLinecap="square" />
            <text x="72" y="90" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1d4ed8">自重輕、延性韌性極佳</text>
            <text x="72" y="100" textAnchor="middle" fontSize="7" fill="#64748b">強風易晃、必做防火被覆</text>
          </g>

          <g transform="translate(355, 48)">
            {/* SRC 柱 */}
            <rect x="0" y="0" width="150" height="110" fill="#f0fdf4" stroke="#86efac" rx="6" />
            <text x="75" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">SRC 鋼骨鋼筋混凝土</text>
            {/* 內鋼骨 + 外 RC 包覆 */}
            <rect x="30" y="26" width="90" height="50" fill="#e2e8f0" stroke="#16a34a" strokeWidth="2" rx="4" />
            <path d="M 55,36 L 95,36 M 75,36 L 75,66 M 55,66 L 95,66" stroke="#dc2626" strokeWidth="4" />
            <text x="75" y="90" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#15803d">雙重優勢：剛韌並濟！</text>
            <text x="75" y="100" textAnchor="middle" fontSize="7" fill="#047857">超高層建築耐震抗風首選</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#854d0e">
            比較心訣：RC 笨重便宜怕脆斷、SC 輕盈柔軟需防火、SRC 鋼骨穿鎧甲耐震頂級高造價！
          </text>
        </svg>
      );

    // 64. 力學 複式滑輪組機械利益與繩索平衡
    case 'mechanics-pulley-system':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="複式滑輪組機械利益圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            複式滑輪組：機械利益 (MA)、施力與重物平衡關係 (T = W / n,  S = n·h)
          </text>

          {/* 滑輪系統圖解 */}
          <g transform="translate(45, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">雙定雙動 4 段繩滑輪組</text>

            {/* 天花板 */}
            <line x1="40" y1="24" x2="180" y2="24" stroke="#475569" strokeWidth="3" />

            {/* 定滑輪組 (固定於天花板) */}
            <circle cx="80" cy="38" r="12" fill="#e2e8f0" stroke="#0284c7" strokeWidth="2" />
            <circle cx="130" cy="38" r="12" fill="#e2e8f0" stroke="#0284c7" strokeWidth="2" />

            {/* 動滑輪組 (掛重物 W) */}
            <circle cx="80" cy="80" r="12" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="130" cy="80" r="12" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />

            {/* 重物 W */}
            <rect x="90" y="94" width="30" height="16" fill="#64748b" rx="2" />
            <text x="105" y="106" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ffffff">W</text>

            {/* 穿繞繩索 4 股向上 */}
            <line x1="68" y1="38" x2="68" y2="80" stroke="#ef4444" strokeWidth="1.8" />
            <line x1="92" y1="38" x2="92" y2="80" stroke="#ef4444" strokeWidth="1.8" />
            <line x1="118" y1="38" x2="118" y2="80" stroke="#ef4444" strokeWidth="1.8" />
            <line x1="142" y1="38" x2="142" y2="80" stroke="#ef4444" strokeWidth="1.8" />

            {/* 施力端 F */}
            <line x1="142" y1="38" x2="180" y2="75" stroke="#ef4444" strokeWidth="2" />
            <polygon points="178,70 185,78 174,77" fill="#ef4444" />
            <text x="195" y="80" fontSize="9" fontWeight="bold" fill="#ef4444">F (施力)</text>
          </g>

          {/* 右圖：機械利益公式 */}
          <g transform="translate(285, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e40af">滑輪組速算公式與物理鐵律</text>

            <rect x="15" y="24" width="190" height="24" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="22" y="38" fontSize="8.5" fontWeight="bold" fill="#1e3a8a">機械利益 MA ＝ 承擔重物之繩數 n</text>
            <text x="22" y="45" fontSize="7" fill="#64748b">若有 4 股繩索吊著動滑輪，MA = 4</text>

            <rect x="15" y="52" width="190" height="24" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="22" y="66" fontSize="8.5" fontWeight="bold" fill="#1e3a8a">施力公式：F ＝ W / n (省力 n 倍！)</text>
            <text x="22" y="73" fontSize="7" fill="#64748b">繩索張力 T 在整條連續輕繩上處處相等</text>

            <rect x="15" y="80" width="190" height="24" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="22" y="94" fontSize="8.5" fontWeight="bold" fill="#1e3a8a">拉繩距離：S ＝ n × h (費時費距離)</text>
            <text x="22" y="101" fontSize="7" fill="#64748b">功不省定律：W·h = F·S (忽略摩擦)</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#166534">
            滑輪秒殺口訣：算算動滑輪掛幾股繩，幾股就省幾倍力；省力必定費距離，功的總量恆守恆！
          </text>
        </svg>
      );

    // 65. 力學 軸向變形胡克定律與熱應力約束
    case 'mechanics-axial-thermal-stress':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="軸向變形與熱應力圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            材料力學：軸向變形 ΔL = PL/AE 與兩端剛性拘束熱應力 (Thermal Stress)
          </text>

          {/* 左圖：軸向拉伸變形 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">胡克定律軸向伸縮形變</text>

            {/* 固定端牆壁 */}
            <rect x="15" y="30" width="10" height="55" fill="#64748b" />
            <line x1="25" y1="25" x2="25" y2="90" stroke="#334155" strokeWidth="2" />

            {/* 圓桿 */}
            <rect x="25" y="45" width="120" height="25" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" rx="2" />
            <text x="85" y="61" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#0369a1">長 L, 斷面 A, 模數 E</text>

            {/* 伸長量 ΔL */}
            <rect x="145" y="45" width="25" height="25" fill="#fed7aa" stroke="#f97316" strokeDasharray="3,2" />
            <text x="157" y="61" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#c2410c">ΔL</text>

            {/* 拉力 P */}
            <line x1="170" y1="57" x2="205" y2="57" stroke="#ef4444" strokeWidth="2.5" />
            <polygon points="202,54 208,57 202,60" fill="#ef4444" />
            <text x="202" y="48" fontSize="9" fontWeight="bold" fill="#ef4444">P</text>

            <rect x="30" y="80" width="160" height="20" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="110" y="94" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#1e3a8a">伸長量：ΔL ＝ P·L / (A·E)</text>
          </g>

          {/* 右圖：兩端拘束熱應力 */}
          <g transform="translate(285, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#fef2f2" stroke="#fecaca" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#b91c1c">兩端固定拘束：溫升 ΔT 引發熱應力</text>

            {/* 左右兩端剛性不可動牆壁 */}
            <rect x="15" y="32" width="10" height="50" fill="#dc2626" />
            <rect x="195" y="32" width="10" height="50" fill="#dc2626" />

            <rect x="25" y="42" width="170" height="30" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
            <text x="110" y="58" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#991b1b">熱膨脹受阻 ➜ 產生巨大壓應力</text>

            {/* 反力 R */}
            <polygon points="32,57 38,54 38,60" fill="#dc2626" />
            <polygon points="188,57 182,54 182,60" fill="#dc2626" />
            <text x="45" y="58" fontSize="8" fontWeight="bold" fill="#dc2626">R</text>
            <text x="170" y="58" fontSize="8" fontWeight="bold" fill="#dc2626">R</text>

            <rect x="15" y="78" width="190" height="24" fill="#ffffff" stroke="#f87171" rx="3" />
            <text x="110" y="90" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#991b1b">熱應力 σ ＝ E · α · ΔT</text>
            <text x="110" y="98" textAnchor="middle" fontSize="7" fill="#64748b">★ 熱應力大小與長度 L 完全無關！</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#fef3c7" stroke="#fde047" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#854d0e">
            高頻陷阱：溫升自由膨脹應力為零；兩端卡死熱應力等於 E·α·ΔT，長度消掉不用算！
          </text>
        </svg>
      );

    // 66. 製圖 建築技術規則樓梯人體工學規範
    case 'drafting-staircase-dimensioning':
      return (
        <svg viewBox="0 0 540 220" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="建築技術規則樓梯規範圖解">
          <rect width="540" height="220" fill="#f8fafc" rx="12" />
          <rect x="20" y="15" width="500" height="190" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" rx="8" />
          <text x="270" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f172a">
            建築技術規則：樓梯人體工學 (2R + T = 60~64 cm)、淨高與製圖剖面尺寸
          </text>

          {/* 左圖：踏步幾何級高級深 */}
          <g transform="translate(35, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#f8fafc" stroke="#cbd5e1" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#0369a1">級高 R 與級深 T 步幅公式</text>

            {/* 鋸齒階梯 */}
            <path d="M 30,95 L 70,95 L 70,68 L 110,68 L 110,40 L 150,40 L 150,22" fill="none" stroke="#334155" strokeWidth="2.5" />

            {/* 級深 T 標註 */}
            <line x1="70" y1="62" x2="110" y2="62" stroke="#2563eb" strokeWidth="1.5" />
            <text x="90" y="57" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#2563eb">級深 T ≧ 24cm</text>

            {/* 級高 R 標註 */}
            <line x1="116" y1="40" x2="116" y2="68" stroke="#ef4444" strokeWidth="1.5" />
            <text x="145" y="56" fontSize="9" fontWeight="bold" fill="#ef4444">級高 R ≦ 20cm</text>

            {/* 鼻端 nosing */}
            <text x="50" y="104" textAnchor="middle" fontSize="7.5" fill="#64748b">踏板前端鼻端突起 1.5~2.5 cm</text>
          </g>

          {/* 右圖：法規限制矩陣 */}
          <g transform="translate(285, 48)">
            <rect x="0" y="0" width="220" height="110" fill="#eff6ff" stroke="#bfdbfe" rx="6" />
            <text x="110" y="16" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#1e40af">建築技術規則設計施工編第 33 條</text>

            <rect x="15" y="24" width="190" height="20" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="22" y="37" fontSize="8" fontWeight="bold" fill="#1e3a8a">步幅公式：2R ＋ T ＝ 60 ～ 64 cm</text>

            <rect x="15" y="47" width="190" height="20" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="22" y="60" fontSize="8" fontWeight="bold" fill="#1e3a8a">垂直淨高：天花板到踏面 ≧ 190 (210) cm</text>

            <rect x="15" y="70" width="190" height="20" fill="#ffffff" stroke="#93c5fd" rx="3" />
            <text x="22" y="83" fontSize="8" fontWeight="bold" fill="#1e3a8a">中間平台：每爬升 3m 必設深度 ≧ 寬度平台</text>

            <text x="110" y="102" textAnchor="middle" fontSize="7.5" fill="#475569">住宅樓梯淨寬 ≧ 75~90 cm；扶手高度 ≧ 75~85 cm</text>
          </g>

          <rect x="30" y="165" width="480" height="26" fill="#f0fdf4" stroke="#86efac" rx="4" />
          <text x="270" y="182" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#166534">
            製圖口訣：兩級高加一級深剛好六十，三公尺要設平台歇腳，梯間淨高不碰頭留兩米一！
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
