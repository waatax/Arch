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
