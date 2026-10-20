'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PeriodicExamPlan } from '@/data/periodicExams';
import PeriodicExamSvgIllustration from './PeriodicExamSvgIllustrations';
import { 
  ArrowLeft, 
  Printer, 
  Download, 
  BookOpen, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Circle, 
  Compass, 
  Target, 
  Award, 
  Clock,
  Eye,
  School,
  FileText,
  Info,
  Check,
  Table as TableIcon
} from 'lucide-react';

interface Props {
  plan: PeriodicExamPlan;
}

// 知識點結構化規格對照表資料庫
function getConceptTableData(pointId: string) {
  if (pointId.includes('mat-g11-s1-m1-01')) {
    return {
      title: '材料體積、密度與比重計算標準對照表',
      headers: ['物理指標名稱', '計算定義與公式', '標準單位', '段考命題重點與陷阱'],
      rows: [
        ['真實比重 (True S.G.)', '乾燥質量 / 絕對真實體積 Vs', '無單位', '數值最大；完全排除任何開孔與閉孔體積'],
        ['表觀比重 (Apparent S.G.)', '乾燥質量 / (Vs + Vc 閉孔)', '無單位', '排除開口孔隙；CNS 486 骨材比重試驗標準'],
        ['總體比重 (Bulk S.G.)', '乾燥質量 / (Vs + Vc + Vo)', '無單位', '數值最小；包含顆粒全部開口與閉口孔隙'],
        ['孔隙率 (Porosity n)', '1 - (總體密度 ÷ 真實密度)', '%', '開孔主導吸水性，閉孔主導保溫隔熱與抗凍融性'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-m1-02')) {
    return {
      title: '波特蘭水泥四大主要熟料礦物特性矩陣表',
      headers: ['熟料名稱與代號', '化學組成與佔比', '水化發熱量 (J/g)', '主要工程貢獻與特性'],
      rows: [
        ['矽酸三鈣 (C3S)', '3CaO·SiO2 (50~70%)', '502 J/g (中高)', '水化反應快，主導 7~28 天早期強度與凝結'],
        ['矽酸二鈣 (C2S)', '2CaO·SiO2 (15~30%)', '260 J/g (最低)', '水化緩慢發熱低，主導 1 年以上晚期強度超越'],
        ['鋁酸三鈣 (C3A)', '3CaO·Al2O3 (5~10%)', '867 J/g (最高)', '初期急劇放熱；最不耐硫酸鹽；磨粉必加石膏緩凝'],
        ['鐵鋁酸四鈣 (C4AF)', '4CaO·Al2O3·Fe2O3 (5~15%)', '419 J/g (中等)', '賦予水泥深灰色；耐硫酸鹽性佳，強度貢獻最低'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-m1-03')) {
    return {
      title: '骨材四種含水狀態與拌合水修正對照表',
      headers: ['含水狀態名稱', '孔隙含水特徵', '表面水膜狀況', '配合設計拌合水量校正原則'],
      rows: [
        ['烘乾狀態 (Oven-dry)', '內部孔隙完全乾燥無水', '表面無水', '需額外補足「全部吸水量」至拌合水中'],
        ['氣乾狀態 (Air-dry)', '內部孔隙部分含水', '表面乾燥無水', '需補足「有效吸水量」(吸水率 - 氣乾含水率)'],
        ['面乾內飽和 (SSD)', '毛細孔完全飽和充滿水', '表面乾燥無水膜', '★ 所有配合設計配比之標準計算基準點！'],
        ['濕潤狀態 (Wet)', '內部孔隙完全飽和充滿水', '表面覆蓋游離水膜', '★ 拌合水量「必須扣除」骨材表面水重量！'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-m2-01')) {
    return {
      title: 'CNS 61 卜特蘭水泥五大類型與工程適用表',
      headers: ['水泥類型', '熟料成分特徵', '硬化特性與水化熱', '標準適用工程與環境'],
      rows: [
        ['第 I 型 (普通)', '標準基準配比', '標準水化發熱', '一般建築、梁柱板牆、道路鋪面'],
        ['第 II 型 (中度耐硫酸鹽)', 'C3A < 8%, C3S 中等', '中度水化熱', '港灣碼頭、重力擋土牆、地下基樁'],
        ['第 III 型 (早強)', 'C3S > 60%, 研磨極細', '早期發熱高、凝結快', '緊急搶修、寒冬施工、預力預鑄構件'],
        ['第 IV 型 (低熱)', 'C3S < 35%, C3A < 7%', '發熱極低且緩慢', '水庫大壩、巨積厚度基礎、大體積結構'],
        ['第 V 型 (抗硫酸鹽)', '嚴限 C3A < 5%', '抗化學侵蝕最強', '溫泉硫磺區、化工廠地面、海港碼頭'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-m2-02')) {
    return {
      title: 'CNS 786 維卡儀三項試驗標準規格對照表',
      headers: ['試驗項目', '採用附件規格', 'CNS 判定合格標準', '工程意義與防護重點'],
      rows: [
        ['標準稠度試驗', '直徑 10 mm 平頭滑桿', '下沉至底板上方 10±1 mm', '測定後續初凝終凝水灰比基準水量'],
        ['初凝時間試驗', '直徑 1 mm 圓平針', '針入度達 25 mm 處', '≧ 45 分鐘；混凝土澆置振動壓實之時效極限'],
        ['終凝時間試驗', '針端附加圓形金屬環', '圓針刺入但圓環無壓痕', '≦ 375 分鐘；試體具備初步硬化形狀支撐力'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-final-01')) {
    return {
      title: 'CNS 3090 混凝土氯離子容許含量限值對照表',
      headers: ['工程結構類別', '氯離子限值 (kg/m³)', '檢驗標準依據', '預防措施與耐久性維護'],
      rows: [
        ['一般鋼筋混凝土 (現行)', '≦ 0.15 kg/m³', 'CNS 3090 最新版', '嚴格禁用海砂，定期抽驗拌合水與洗砂氯含量'],
        ['預力混凝土 (PC 構件)', '≦ 0.15 kg/m³', '高張力鋼絞線防護', '防範高應力鋼材應力腐蝕破壞 (SCC)'],
        ['純無筋混凝土', '≦ 0.60 kg/m³', '無鋼筋銹蝕疑慮', '容許上限較寬，但仍需防止鹼骨材反應'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-final-02')) {
    return {
      title: 'CNS 486 骨材標準 9 號篩與細度模數計算表',
      headers: ['標準篩號', '篩孔尺寸 (mm)', '細骨材通過規定', '細度模數 (FM) 計算角色'],
      rows: [
        ['No. 4 (4 號篩)', '4.75 mm', '95 ~ 100%', '粗骨材與細骨材之法定分界門檻篩'],
        ['No. 8 / No. 16', '2.36 mm / 1.18 mm', '80~100% / 50~85%', '中等粒徑主幹，提供密實堆積骨架'],
        ['No. 50 / No. 100', '0.30 mm / 0.15 mm', '10~30% / 2~10%', '極細粒料，提供保水性與工作度避免泌水'],
        ['細度模數 (FM)', '指定 9 號篩累加 ÷ 100', '砂標準 2.3 ~ 3.1', 'FM 越小顆粒越細 (需水量多)，FM 越大顆粒越粗'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s2-m1-01')) {
    return {
      title: 'CNS 1176 混凝土坍度試驗操作規範表',
      headers: ['操作程序步驟', '標準規格與動作', '試驗時間限制', '異常現象與合格判定'],
      rows: [
        ['試模裝料充填', '分 3 層填入，每層插搗 25 次', '每層約等體積', '搗棒平頭圓端，末層料料高出模頂'],
        ['刮平與垂直提錐', '刮平頂部，雙手平穩垂直提起', '提錐耗時 5±2 秒', '全程需在 2.5 分鐘內完成量測'],
        ['落差量測判定', '倒置坍度錐橫置鋼尺量中心沉陷', '量測精度至 5 mm', '剪力坍度或崩塌坍度需重新拌合試驗'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s2-m2-01')) {
    return {
      title: 'ACI 配合設計絕對體積法計算七步表',
      headers: ['計算步驟', '核心決定參數', '查表與計算依據', '體積累加檢核'],
      rows: [
        ['步驟 1~2：坍度與骨材最大粒徑', '工作度與鋼筋淨間距', '結構斷面尺度 3/4 限制', '決定骨材級配與施工性'],
        ['步驟 3~4：拌合水量與水灰比', '設計抗壓強度 f&apos;c', 'Abrams 定律反比曲線', '計算得水泥量 Wc = 水量 ÷ W/C'],
        ['步驟 5~6：粗骨材量與空氣量', '粗骨材乾擣密度與細度模數', 'ACI 標準體積查表', '粗骨材重 Wca = 查表體積 × 乾擣密度'],
        ['步驟 7：細骨材絕對體積', '1.0 m³ - 所有材料體積', '水+水泥+空氣+粗骨材', '砂重 W_fa = V_砂 × 砂比重 × 1000'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s2-final-01')) {
    return {
      title: '木材乾縮異向性與水分狀態比較表',
      headers: ['收縮方向 / 水分狀態', '收縮率範圍 (%)', '相對比例', '建築構造變形防範'],
      rows: [
        ['弦向收縮 (Tangential)', '6.0 ~ 10.0%', '約 20', '最大！造成木板表面瓦凹裂翹曲變形'],
        ['徑向收縮 (Radial)', '3.0 ~ 5.0%', '約 10', '沿年輪直徑輻射方向，變形量為弦向之半'],
        ['縱向收縮 (Longitudinal)', '0.1 ~ 0.3%', '約 1', '最小！順紋方向尺寸極為穩定不易收縮'],
        ['纖維飽和點 (FSP ≈ 30%)', '細胞壁飽和但細胞腔空', '力學臨界點', '含水量 &lt; FSP 時，強度才開始上升並產生乾縮'],
      ]
    };
  }
  // 測量科
  if (pointId.includes('sur-g11-s1-m1-01')) {
    return {
      title: '測量誤差分類與消除對策比較表',
      headers: ['誤差類型', '產生原因', '數值規律與特徵', '消除與減弱對策'],
      rows: [
        ['系統誤差 (Systematic)', '儀器製造缺陷、物理環境規律', '具固定正負號與累積性', '檢校儀器、對稱觀測、公式改正'],
        ['偶然誤差 (Accidental)', '觀測者感官極限、微小氣流擾動', '符合常態分佈鐘形曲線', '增加觀測次數取算術平均值'],
        ['粗差 (Gross Error / Blunder)', '看錯讀數、記錯數字、立尺傾倒', '數值巨大無規律', '雙人覆核、閉合條件檢核、重測剔除'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s1-m1-02')) {
    return {
      title: '鋼卷尺四項標準物理改正公式與正負號表',
      headers: ['改正項目名稱', '計算公式', '正負號判定規則', '考前 30 秒記憶口訣'],
      rows: [
        ['尺長改正 (Cl)', 'Cl = (l - l₀) × L / l₀', '名義長 l > 標準長 l₀ ➜ 正號', '尺太長加、尺太短減'],
        ['溫度改正 (Ct)', 'Ct = α × (T - T₀) × L', '量測溫度 T > 標準溫 T₀ ➜ 正號', '熱脹加、冷縮減 (α=0.0000115)'],
        ['拉力改正 (Cp)', 'Cp = (P - P₀) × L / (A·E)', '施加拉力 P > 標準拉力 P₀ ➜ 正號', '拉力過大加、拉力不足減'],
        ['懸垂垂度改正 (Cs)', 'Cs = - w²·L³ / (24·P²)', '★ 恆為「負號」(-)', '下垂讀數必偏大，改正一律減！'],
      ]
    };
  }
  // 數學 C
  if (pointId.includes('math-g11-s2-m1-01')) {
    return {
      title: '拋物線四大標準式幾何特性對照表',
      headers: ['拋物線標準式', '對稱軸與開口方向', '焦點坐標 F', '準線方程式 L'],
      rows: [
        ['y² = 4cx (c > 0)', 'x 軸 (y=0)，開口向右', 'F(c, 0)', 'L: x = -c (正焦弦長 = 4c)'],
        ['y² = -4cx (c > 0)', 'x 軸 (y=0)，開口向左', 'F(-c, 0)', 'L: x = c (正焦弦長 = 4c)'],
        ['x² = 4cy (c > 0)', 'y 軸 (x=0)，開口向上', 'F(0, c)', 'L: y = -c (正焦弦長 = 4c)'],
        ['x² = -4cy (c > 0)', 'y 軸 (x=0)，開口向下', 'F(0, -c)', 'L: y = c (正焦弦長 = 4c)'],
      ]
    };
  }
  if (pointId.includes('math-g11-s2-m2-01')) {
    return {
      title: '橢圓 vs 雙曲線核心幾何性質對照表',
      headers: ['圓錐曲線幾何項', '橢圓 (Ellipse)', '雙曲線 (Hyperbola)', '記憶與解題神技'],
      rows: [
        ['幾何軌跡定義', '動點到兩焦點距離「和」固定 (2a)', '動點到兩焦點距離「差之絕對值」固定 (2a)', '和為橢圓，差為雙曲'],
        ['三常數 abc 關係', 'a² ＝ b² ＋ c² (a 最長)', 'c² ＝ a² ＋ b² (c 最長)', '橢圓長軸 a 最大，雙曲焦點 c 最大'],
        ['正焦弦長公式', '2b² / a', '2b² / a', '兩者公式形式完全相同！'],
        ['漸近線方程式', '無漸近線', '把標準式右邊常數項「1」改為「0」', '因式分解立即得到兩漸近線！'],
      ]
    };
  }
  // 通用結構化對照表
  return {
    title: '核心觀念規範指標與歷屆考點對照表',
    headers: ['核心評量維度', '課綱規範要求', '名校常見考查題型', '應考防護關鍵'],
    rows: [
      ['物理/幾何定義', '108 課綱技術型高中部定標準', '基本概念選擇題 (佔比 40%)', '熟記物理定義，避開符號混淆'],
      ['公式與計算法則', '標準 CNS 國家規範及統測大綱', '手算 SOP 計算題 (佔比 30%)', '注意單位換算與正負號陷阱'],
      ['工程應用與判別', '現場實務情境與施工法規', '情境式素養題 (佔比 30%)', '依據工址環境條件精準選用'],
    ]
  };
}

export default function PeriodicExamDetailView({ plan }: Props) {
  const [viewMode, setViewMode] = useState<'paper' | 'digital'>('paper');
  const [showPrintTips, setShowPrintTips] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    if (typeof window === 'undefined') return {};
    try {
      const saved = localStorage.getItem(`arch_exam_${plan.id}_checklist`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheck = (idx: number) => {
    const key = `check-${idx}`;
    const next = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(next);
    try {
      localStorage.setItem(`arch_exam_${plan.id}_checklist`, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // 一鍵下載獨立離線可列印講義 HTML 文件
  const handleDownloadOfflineHandout = () => {
    const filename = `${plan.targetSchool}_${plan.subjectName}_${plan.periodName}_衝刺講義.html`;
    
    const htmlContent = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${plan.subjectName} ${plan.periodName} 考前衝刺預備講義 - ${plan.targetSchool}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 10mm 12mm 10mm;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.5;
      font-size: 10pt;
      margin: 0;
      padding: 16px;
      max-width: 860px;
      margin: 0 auto;
    }
    .print-header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 10px;
      margin-bottom: 14px;
    }
    .kicker {
      font-size: 8.5pt;
      font-weight: 700;
      color: #2563eb;
      letter-spacing: 0.05em;
    }
    .title {
      font-size: 18pt;
      font-weight: 800;
      color: #0f172a;
      margin: 4px 0;
      line-height: 1.25;
    }
    .meta {
      font-size: 9pt;
      color: #475569;
      margin-bottom: 3px;
    }
    .student-fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 8px 12px;
      margin-top: 10px;
      font-size: 9.5pt;
      font-weight: bold;
    }
    .section-title {
      font-size: 12pt;
      font-weight: 800;
      color: #1e3a8a;
      border-left: 4px solid #2563eb;
      padding-left: 8px;
      margin: 18px 0 10px 0;
    }
    .card {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 12px;
      margin-bottom: 12px;
      background: #ffffff;
    }
    .table-container {
      width: 100%;
      border-collapse: collapse;
      margin: 8px 0;
      font-size: 9pt;
    }
    .table-container th {
      background: #eff6ff;
      border: 1px solid #cbd5e1;
      padding: 6px 8px;
      text-align: left;
      font-weight: bold;
      color: #1e3a8a;
    }
    .table-container td {
      border: 1px solid #cbd5e1;
      padding: 5px 8px;
      color: #1e293b;
    }
    .analogy-box {
      background: #fffbeb;
      border-left: 3px solid #f59e0b;
      padding: 8px 10px;
      margin: 8px 0;
      font-size: 9.5pt;
      color: #78350f;
      border-radius: 4px;
    }
    .formula-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      padding: 6px 10px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 10pt;
      color: #1e40af;
      font-weight: bold;
      margin: 6px 0;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 8px;
    }
    .badge-tip {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 9pt;
      color: #065f46;
    }
    .badge-trap {
      background: #fef2f2;
      border: 1px solid #fecaca;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 9pt;
      color: #991b1b;
    }
    .notes-lines {
      border: 1.5px dashed #94a3b8;
      border-radius: 6px;
      padding: 12px;
      margin-top: 18px;
    }
    .line-slot {
      height: 24px;
      border-bottom: 1px dashed #cbd5e1;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="background: #2563eb; color: #fff; padding: 10px; border-radius: 6px; margin-bottom: 16px; text-align: center;">
    <strong>🖨️ 離線可列印講義已準備就緒！</strong> 請按 <strong>Ctrl + P</strong> 立即列印或存為 PDF（建議勾選「背景圖形」以獲得最佳效果）。
  </div>

  <header class="print-header">
    <div class="kicker">108 課綱技術型高中各科段考衝刺預備講義 ｜ ${plan.category} ｜ ${plan.subjectName}</div>
    <h1 class="title">${plan.subjectName} ${plan.periodName} 考前衝刺預備講義</h1>
    <div class="meta"><strong>學校指標：</strong>${plan.targetSchool} ｜ <strong>學期考期：</strong>${plan.semesterTitle} ｜ <strong>配分：</strong>${plan.scoreWeight}</div>
    <div class="meta"><strong>考試進度範圍：</strong>${plan.examScope}</div>
    <div class="student-fields">
      <span>學校：_________________</span>
      <span>班級：_________________</span>
      <span>座號：_______</span>
      <span>姓名：_________________</span>
      <span>得分：_______</span>
      <span>教師簽名：_______</span>
    </div>
  </header>

  <h2 class="section-title">壹、段考命題重點與考前 10 分鐘速讀速記 (Page 1 考前攻頂)</h2>
  <div class="card">
    <p style="margin: 0 0 8px 0; color: #334155;"><strong>破題心法：</strong>${plan.beginnerMindset || '掌握核心幾何定義與物理本質，避開公式代數死記硬背，掌握破題關鍵。'}</p>
    <div style="font-weight: bold; margin-bottom: 6px; color: #1e3a8a;">考前 10 分鐘速記公式卡：</div>
    <div class="grid-2">
      ${plan.cramFormulaCards.map(c => `
        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 4px; padding: 6px 8px;">
          <strong style="color: #92400e;">${c.title}</strong>
          <div style="font-family: monospace; font-weight: bold; color: #1e40af; margin: 2px 0;">${c.formula}</div>
          <div style="font-size: 8.5pt; color: #78350f;">${c.notes}</div>
        </div>
      `).join('')}
    </div>
  </div>

  <h2 class="section-title">貳、核心知識點精講與直覺圖解 (含結構化規格對照表)</h2>
  ${plan.knowledgePoints.map((p, i) => {
    const tableData = getConceptTableData(p.id);
    return `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px;">
        <strong style="font-size: 11pt; color: #0f172a;">${i + 1}. ${p.title}</strong>
        <span style="font-size: 8.5pt; color: #64748b; font-family: monospace;">${p.curriculumCode} ｜ ${p.textbookChapter}</span>
      </div>
      <div class="analogy-box">
        <strong>💡 零基礎秒懂比喻：</strong>${p.intuitiveAnalogy || '先看清事物本質，再帶入數字公式。'}
      </div>
      <p style="margin: 6px 0; color: #1e293b;">${p.summary}</p>
      
      <!-- 知識點對照表格 -->
      <table class="table-container">
        <thead>
          <tr>
            ${tableData.headers.map(h => `<th>${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${tableData.rows.map(row => `
            <tr>
              ${row.map(cell => `<td>${cell}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>

      ${p.keyFormulaOrRule ? `<div class="formula-box">核心公式：${p.keyFormulaOrRule}</div>` : ''}
      <div class="grid-2">
        <div class="badge-tip">
          <strong>✓ 考前秒殺口訣：</strong>
          <ul style="margin: 2px 0 0 14px; padding: 0;">
            ${p.cramTips.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
        <div class="badge-trap">
          <strong>⚠️ 命題扣分陷阱：</strong>
          <p style="margin: 2px 0 0 0;">${p.trapWarning}</p>
        </div>
      </div>
    </div>
  `;
  }).join('')}

  <h2 class="section-title">參、典型段考示範題逐步精解 (Step-by-Step SOP)</h2>
  ${plan.crossReferencedQuestions.map((q, idx) => `
    <div class="card">
      <div style="font-weight: bold; margin-bottom: 4px; color: #047857;">
        例題 ${idx + 1} ｜ ${q.sourceExam} (標準答案: ${q.answer})
      </div>
      <div style="margin-bottom: 8px;">${q.questionStem}</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 8px; font-size: 9pt;">
        <div><strong>(A)</strong> ${q.options.A}</div>
        <div><strong>(B)</strong> ${q.options.B}</div>
        <div><strong>(C)</strong> ${q.options.C}</div>
        <div><strong>(D)</strong> ${q.options.D}</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 8px; font-size: 9pt;">
        <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 2px;">SOP 計算解析步驟：</div>
        <div style="white-space: pre-line; color: #334155;">${q.detailedExplanation}</div>
        <div style="color: #b91c1c; margin-top: 4px; font-size: 8.5pt;"><strong>陷阱提示：</strong>${q.examTrickAnalysis}</div>
      </div>
    </div>
  `).join('')}

  <h2 class="section-title">肆、均一階梯能力精熟自主檢核</h2>
  <div class="card">
    <div class="grid-2">
      ${plan.preExamChecklist.map((item) => `
        <div style="display: flex; gap: 6px; font-size: 9pt; align-items: flex-start;">
          <span style="display: inline-block; width: 12px; height: 12px; border: 1.5px solid #64748b; border-radius: 2px; flex-shrink: 0; margin-top: 2px;"></span>
          <span>${item}</span>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="notes-lines">
    <strong style="color: #475569; font-size: 10pt; display: block; margin-bottom: 6px;">伍、考後錯題檢討與自主修正筆記 (Post-Exam Reflection)</strong>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = plan.preExamChecklist.length > 0 
    ? Math.round((completedCount / plan.preExamChecklist.length) * 100) 
    : 0;

  // 映射高解析純向量 SVG 圖解類型
  const getSvgType = (subjectSlug: string, pointId: string): string => {
    if (subjectSlug === 'materials') {
      if (pointId.includes('wood') || pointId.includes('fsp') || pointId.includes('s2-final-01')) return 'materials-wood-fsp';
      if (pointId.includes('mix') || pointId.includes('aci') || pointId.includes('s2-m2-01')) return 'materials-aci-mix';
      if (pointId.includes('slump') || pointId.includes('1176') || pointId.includes('s2-m1-01')) return 'materials-slump';
      if (pointId.includes('sieve') || pointId.includes('aggregate') || pointId.includes('s1-final-02')) return 'materials-aggregate-sieve';
      if (pointId.includes('chloride') || pointId.includes('3090') || pointId.includes('s1-final-01')) return 'materials-chloride-limits';
      if (pointId.includes('vicat') || pointId.includes('786') || pointId.includes('s1-m2-02')) return 'materials-vicat-test';
      if (pointId.includes('cns61') || pointId.includes('types') || pointId.includes('s1-m2-01')) return 'materials-cement-types';
      if (pointId.includes('moisture') || pointId.includes('water') || pointId.includes('s1-m1-03')) return 'materials-moisture-states';
      if (pointId.includes('clinker') || pointId.includes('s1-m1-02')) return 'materials-clinker';
      return 'materials-porosity';
    }
    if (subjectSlug === 'surveying') {
      if (pointId.includes('shoelace') || pointId.includes('area') || pointId.includes('s2-final-01')) return 'surveying-shoelace-area';
      if (pointId.includes('traverse') || pointId.includes('loop') || pointId.includes('s2-m2-01')) return 'surveying-traverse-loop';
      if (pointId.includes('theodolite') || pointId.includes('axes') || pointId.includes('s2-m1-01')) return 'surveying-theodolite-axes';
      if (pointId.includes('level') || pointId.includes('balance') || pointId.includes('s1-final-01')) return 'surveying-level-balance';
      if (pointId.includes('tape') || pointId.includes('correction') || pointId.includes('s1-m1-02')) return 'surveying-tape-corrections';
      return 'surveying-error-normal';
    }
    if (subjectSlug === 'math-c') {
      if (pointId.includes('ellipse') || pointId.includes('hyperbola') || pointId.includes('s2-m2-01')) return 'math-ellipse-hyperbola';
      if (pointId.includes('parabola') || pointId.includes('s2-m1-01')) return 'math-parabola-geometry';
      if (pointId.includes('cross') || pointId.includes('plane') || pointId.includes('s1-m2-01')) return 'math-cross-product-plane';
      return 'math-space-projection';
    }
    if (subjectSlug === 'english') {
      if (pointId.includes('inversion') || pointId.includes('s2-m2-01')) return 'english-inversion-grammar';
      if (pointId.includes('subjunctive') || pointId.includes('s2-m1-01')) return 'english-subjunctive-mood';
      return 'english-relative-pronoun';
    }
    if (subjectSlug === 'chinese') {
      if (pointId.includes('xiangjixuan') || pointId.includes('s2-m1-01')) return 'chinese-xiangjixuan-space';
      if (pointId.includes('shishuo') || pointId.includes('s1-m2-01')) return 'chinese-shishuo-contrasts';
      return 'chinese-chibi-philosophy';
    }
    return 'default';
  };

  return (
    <div className="space-y-6">
      {/* ── 頂部導航與列印 / 下載工具橫幅 (螢幕顯示，列印時自動隱藏) ── */}
      <header className="print:hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/review/periodic-exams/"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>返回高工段考講義總覽</span>
          </Link>

          {/* 視角與操作切換列 */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setViewMode('paper')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                  viewMode === 'paper'
                    ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>📄 A4 出版講義排版</span>
              </button>
              <button
                onClick={() => setViewMode('digital')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                  viewMode === 'digital'
                    ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>💻 數位卡片檢視</span>
              </button>
            </div>

            {/* 下載獨立離線講義 HTML 檔 */}
            <button
              onClick={handleDownloadOfflineHandout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 text-xs font-bold transition-all shadow-xs"
              title="下載單一獨立 HTML 檔案，包含全部排版樣式與向量圖，離線可直接雙擊開啟並轉存 PDF"
            >
              {downloadSuccess ? <Check className="h-4 w-4" /> : <Download className="h-4 w-4" />}
              <span>{downloadSuccess ? '已下載離線講義！' : '📥 下載離線講義 HTML'}</span>
            </button>

            {/* 一鍵列印 / 另存為 A4 PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold font-mono transition-all shadow-xs"
            >
              <Printer className="h-4 w-4" />
              <span>🖨️ 立即列印 / 存為 A4 PDF</span>
            </button>

            {/* 列印提示按鈕 */}
            <button
              onClick={() => setShowPrintTips(!showPrintTips)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="查看 A4 PDF 列印技巧"
            >
              <Info className="h-4 w-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* 列印指引提示橫幅 */}
        {showPrintTips && (
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/40 p-4 border border-blue-200 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 space-y-2 animate-in fade-in">
            <div className="font-bold flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span>💡 A4 PDF 最佳列印與轉存技巧（瀏覽器列印設定）：</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li><strong>印表機目的地</strong>：選擇「另存為 PDF (Save as PDF)」。</li>
              <li><strong>邊界設定</strong>：請選擇「預設 (Default)」或「無邊界 (None)」。</li>
              <li><strong>選項設定</strong>：務必勾選<strong>「背景圖形 (Background graphics)」</strong>，以確保向量圖示與精緻重點顏色完整呈現。</li>
              <li><strong>直接下載</strong>：若不想設定瀏覽器列印，可點選上方「📥 下載離線講義 HTML」，下載後在任何電腦/手機都能離線開啟並隨時列印！</li>
            </ul>
          </div>
        )}
      </header>

      {/* ── 核心主體：出版級 A4 紙張容器 (去除列印時的灰色外框與留白) ── */}
      <div 
        className={`transition-all duration-300 ${
          viewMode === 'paper' 
            ? 'max-w-4xl mx-auto bg-white text-slate-900 p-6 sm:p-10 shadow-2xl rounded-3xl border-2 border-slate-300/80 print:border-0 print:p-0 print:shadow-none print:max-w-full space-y-6 font-sans' 
            : 'space-y-8'
        }`}
      >
        {/* ── 頁面頂部：出版級 A4 考前講義封面資訊欄 ── */}
        <section className="border-b-2 border-slate-900 pb-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500 border-b border-slate-200 pb-1.5">
            <span className="font-bold text-blue-700 tracking-wider">
              108 課綱技術型高中各科段考衝刺預備講義 ｜ {plan.category} ｜ {plan.subjectName}
            </span>
            <span>編號: {plan.id.toUpperCase()}</span>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-blue-600 px-2 py-0.5 text-xs font-mono font-bold text-white">
                {plan.subjectName}
              </span>
              <span className="rounded-md bg-slate-100 text-slate-800 px-2 py-0.5 text-xs font-mono font-bold border border-slate-300">
                {plan.semesterTitle} · {plan.periodName}
              </span>
              <span className="rounded-md bg-emerald-50 text-emerald-800 px-2 py-0.5 text-xs font-mono font-bold border border-emerald-300">
                {plan.targetSchool}
              </span>
              <span className="rounded-md bg-amber-50 text-amber-800 px-2 py-0.5 text-xs font-mono font-bold border border-amber-300">
                {plan.scoreWeight}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-1">
              {plan.subjectName} {plan.periodName} 考前衝刺預備講義
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
              {plan.handoutSummary}
            </p>
          </div>

          <div className="text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-0.5">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              <span>進度：<strong>{plan.weekRange}</strong> ｜ 考試範圍：<strong>{plan.examScope}</strong></span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px] text-indigo-700">
              <School className="h-3.5 w-3.5" />
              <span>{plan.schoolContextNotes}</span>
            </div>
          </div>

          {/* 學生個人手寫資料填寫欄 */}
          <div className="rounded-xl bg-slate-50 border border-slate-300 p-2.5 text-xs font-mono font-bold text-slate-800 flex flex-wrap items-center justify-between gap-2 shadow-2xs">
            <div className="flex items-center gap-1">
              <span>學校：</span>
              <span className="border-b border-slate-400 min-w-[110px] inline-block text-slate-700">
                {plan.targetSchool.replace('指標對照', '')}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>班級：</span>
              <span className="border-b border-slate-400 min-w-[80px] inline-block text-center">建築二甲</span>
            </div>
            <div className="flex items-center gap-1">
              <span>座號：</span>
              <span className="border-b border-slate-400 min-w-[45px] inline-block text-center">_____</span>
            </div>
            <div className="flex items-center gap-1">
              <span>姓名：</span>
              <span className="border-b border-slate-400 min-w-[85px] inline-block text-center">_________</span>
            </div>
            <div className="flex items-center gap-1">
              <span>段考得分：</span>
              <span className="border-b border-slate-400 min-w-[55px] inline-block text-center text-rose-600 font-extrabold">_____</span>
            </div>
            <div className="flex items-center gap-1">
              <span>教師簽名：</span>
              <span className="border-b border-slate-400 min-w-[65px] inline-block text-center">_____</span>
            </div>
          </div>
        </section>

        {/* ── 第一階段：零基礎也能懂的段考破題心法 + 考前 10 分鐘必背公式卡 (填充 Page 1，徹底消除空白) ── */}
        <section className="space-y-4">
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/50 p-4 sm:p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-indigo-800 font-bold text-sm">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <h2 className="font-serif text-base font-bold text-slate-900">
                壹、零基礎段考破題心法與高分攻略
              </h2>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {plan.beginnerMindset || `掌握核心物理定義與題目破題第一眼，段考題目 80% 都是標準基本分的變形。本講義特別為初學者設計了生活化比喻、純向量工程圖解、逐步 SOP 解題步驟以及避開命題老師的扣分地雷，只要依序閱讀並完成例題，即可在段考穩拿高分。`}
            </p>
          </div>

          {/* 段考命題單元與配分權重總覽表 */}
          <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
            <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <TableIcon className="h-3.5 w-3.5 text-blue-600" />
                <span>本次段考命題單元結構與配分權重表</span>
              </span>
              <span className="font-mono text-[11px] text-slate-500">共 {plan.knowledgePoints.length} 個考點單元</span>
            </div>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[11px]">
                  <th className="p-2">單元代碼</th>
                  <th className="p-2">段考核心考點名稱</th>
                  <th className="p-2">教材章節</th>
                  <th className="p-2 text-center">命題重要度</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {plan.knowledgePoints.map((point) => (
                  <tr key={point.id} className="hover:bg-slate-50/50">
                    <td className="p-2 font-mono font-bold text-blue-700">{point.curriculumCode}</td>
                    <td className="p-2 font-medium text-slate-900">{point.title}</td>
                    <td className="p-2 text-slate-500 font-mono text-[11px]">{point.textbookChapter}</td>
                    <td className="p-2 text-center text-amber-500 text-xs">
                      {'★'.repeat(point.importance)}{'☆'.repeat(5 - point.importance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 考前 10 分鐘速記公式卡 */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
              <Compass className="h-4 w-4 text-amber-600" />
              <span>考前 10 分鐘速記公式卡（考前必刷核心定理）</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {plan.cramFormulaCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-amber-200 bg-amber-50/50 p-3 space-y-1 shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-900">{card.title}</span>
                    {card.unit && <span className="text-amber-800 font-bold px-1.5 py-0.2 rounded bg-amber-100 text-[10px]">{card.unit}</span>}
                  </div>
                  <div className="rounded-lg bg-white p-2 font-mono text-xs font-bold text-indigo-700 border border-slate-200 overflow-x-auto">
                    {card.formula}
                  </div>
                  <p className="text-[11px] text-slate-600">
                    {card.notes}
                  </p>
                  {card.memoryMnemonic && (
                    <div className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      💡 口訣：{card.memoryMnemonic}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 均一階梯能力精熟自我檢核清單 */}
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-3.5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5 text-indigo-600" />
                <span>均一階梯精熟檢核點（考前逐條劃勾）</span>
              </span>
              <span className="font-mono text-indigo-700 font-bold text-[11px]">
                {completedCount} / {plan.preExamChecklist.length} 完成 ({progressPercent}%)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {plan.preExamChecklist.map((item, idx) => {
                const isDone = !!checkedItems[`check-${idx}`];
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleCheck(idx)}
                    className={`print-keep flex items-start gap-2 p-2 rounded-lg border text-left transition-all cursor-pointer ${
                      isDone
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-medium'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {isDone ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 text-slate-300" />
                      )}
                    </div>
                    <span className="leading-snug text-[11px]">{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 第二階段：108 課綱知識點精講與直覺圖解 (不設大外框 break-inside-avoid，讓分頁自然順暢) ── */}
        <section className="space-y-6 pt-2">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                貳、108 課綱段考知識點精講與直覺圖解 (含規格對照表)
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              共 {plan.knowledgePoints.length} 個必考核心單元
            </span>
          </div>

          <div className="space-y-8">
            {plan.knowledgePoints.map((point, idx) => {
              const svgType = getSvgType(plan.subjectSlug, point.id);
              const tableData = getConceptTableData(point.id);

              return (
                <article
                  key={point.id}
                  className="rounded-2xl border border-slate-300 bg-white p-5 sm:p-6 space-y-4 shadow-xs"
                >
                  {/* 知識點頭部 */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-blue-100 text-blue-800 font-mono text-xs font-bold px-2 py-0.5">
                          單元 {idx + 1} ｜ {point.curriculumCode}
                        </span>
                        <span className="text-amber-500 text-xs">
                          {'★'.repeat(point.importance)}{'☆'.repeat(5 - point.importance)}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-slate-900">
                        {point.title}
                      </h3>
                    </div>

                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 font-mono">
                      {point.textbookChapter}
                    </span>
                  </div>

                  {/* 零基礎直覺生活化比喻卡 */}
                  <div className="rounded-xl bg-amber-50 p-3.5 border border-amber-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                      <span>【零基礎秒懂直覺比喻】</span>
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      {point.intuitiveAnalogy || `先抓住概念的「物理本質」。就像蓋房子一樣，先看懂骨架支撐，細節數字自然水到渠成。`}
                    </p>
                  </div>

                  {/* 高清純向量教學圖示 */}
                  <div className="my-2 rounded-xl border border-slate-200 overflow-hidden bg-slate-50 p-2 text-center break-inside-avoid">
                    <PeriodicExamSvgIllustration type={svgType} />
                    <div className="text-[11px] font-mono text-slate-500 py-1 border-t border-slate-200 mt-2">
                      ▲ 圖 {idx + 1}：{point.title} 核心幾何構造與規範圖解
                    </div>
                  </div>

                  {/* 結構化規格對照表 (每個知識點必配) */}
                  <div className="rounded-xl border border-slate-200 overflow-hidden bg-white break-inside-avoid">
                    <div className="bg-blue-50/70 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-blue-900">
                      <span className="flex items-center gap-1.5">
                        <TableIcon className="h-3.5 w-3.5 text-blue-600" />
                        <span>{tableData.title}</span>
                      </span>
                    </div>
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-700 font-bold text-[11px]">
                          {tableData.headers.map((h, i) => (
                            <th key={i} className="p-2 border-r last:border-r-0 border-slate-200">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/40">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`p-2 border-r last:border-r-0 border-slate-100 ${cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* 教科書級觀念精解本文 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      觀念精講分析
                    </h4>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      {point.summary}
                    </p>
                  </div>

                  {/* 核心公式定理卡 */}
                  {point.keyFormulaOrRule && (
                    <div className="rounded-xl bg-blue-50 p-3 font-mono text-xs text-blue-900 border border-blue-200 space-y-0.5 break-inside-avoid">
                      <span className="text-[10px] text-blue-600 font-bold block uppercase tracking-wider">
                        核心公式 / 判別定理
                      </span>
                      <code className="text-xs sm:text-sm font-bold block">{point.keyFormulaOrRule}</code>
                    </div>
                  )}

                  {/* 考前速記口訣與老師挖坑地雷 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs break-inside-avoid">
                    <div className="rounded-xl bg-emerald-50 p-3 border border-emerald-200 space-y-1">
                      <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        <span>考前 30 秒秒殺速記口訣</span>
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                        {point.cramTips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-rose-50 p-3 border border-rose-200 space-y-1">
                      <div className="font-bold text-rose-800 flex items-center gap-1.5">
                        <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
                        <span>段考致命扣分陷阱（老師挖坑避雷）</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-[11px]">
                        {point.trapWarning}
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1 pt-1 border-t border-slate-100">
                    <span>均一教育平台能力指標技能：</span>
                    <span className="text-indigo-700 font-bold">{point.junyiMasterySkill}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── 第三階段：典型段考示範題逐步精解 (Step-by-Step SOP) ── */}
        <section className="space-y-6 pt-2">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                參、典型段考示範題逐步精解（零基礎 SOP）
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              名校考卷真題手把手帶練
            </span>
          </div>

          <div className="space-y-6">
            {plan.crossReferencedQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="rounded-2xl border border-slate-300 bg-white p-5 sm:p-6 space-y-3.5 shadow-xs break-inside-avoid"
              >
                {/* 題號與來源 */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                  <span className="rounded-md bg-emerald-100 text-emerald-900 text-xs font-mono font-bold px-2 py-0.5">
                    示範例題 {idx + 1} ｜ {q.sourceExam}
                  </span>
                  <span className="text-xs font-mono text-slate-600">
                    標準答案：<strong className="text-emerald-700 text-sm font-bold">{q.answer}</strong>
                  </span>
                </div>

                {/* 題目題幹 */}
                <div className="text-sm font-medium text-slate-900 leading-relaxed">
                  {q.questionStem}
                </div>

                {/* 四個選項卡片 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                    <div
                      key={opt}
                      className={`rounded-xl p-2.5 border transition-colors ${
                        opt === q.answer
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="font-mono font-bold mr-2">{opt}.</span>
                      <span>{q.options[opt]}</span>
                    </div>
                  ))}
                </div>

                {/* 步驟化詳細解答 SOP */}
                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Compass className="h-4 w-4 text-blue-600" />
                    <span>Step-by-Step 詳細步驟計算過程：</span>
                  </div>
                  <div className="text-slate-800 leading-relaxed whitespace-pre-line font-sans text-xs">
                    {q.detailedExplanation}
                  </div>
                  
                  {/* 老師挖坑避雷 */}
                  <div className="pt-2 border-t border-slate-200 text-xs text-rose-700 flex items-start gap-1.5">
                    <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                    <span>命題教師誘答陷阱解析：{q.examTrickAnalysis}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 第四階段：實體手寫錯題檢討與自主修正筆記欄 ── */}
        <section className="rounded-2xl border-2 border-dashed border-slate-400 p-5 space-y-2.5 break-inside-avoid bg-slate-50/50">
          <div className="flex items-center justify-between border-b border-slate-300 pb-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-600" />
              <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                肆、考後錯題檢討與自主修正筆記 (Post-Exam Reflection & Error Correction)
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">列印後手寫記錄</span>
          </div>

          <p className="text-[11px] text-slate-500">
            請記錄本次段考出錯的題目原因（如：公式帶錯、單位未換算、審題陷阱），並寫下一句修正承諾：
          </p>

          <div className="space-y-3.5 pt-1">
            {[1, 2, 3, 4, 5].map((line) => (
              <div key={line} className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-400 w-6">0{line}.</span>
                <div className="flex-1 border-b border-slate-300 h-5"></div>
              </div>
            ))}
          </div>
        </section>

        {/* 底部行動工具列 */}
        <div className="print:hidden pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-mono">
            國立台中高工建築科段考衝刺專用 ｜ 108 課綱推薦講義
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadOfflineHandout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 text-xs font-bold transition-all border border-slate-300"
            >
              <Download className="h-3.5 w-3.5" />
              <span>下載離線 HTML</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-xs font-bold transition-all shadow-xs"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>立即列印 A4 講義</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
