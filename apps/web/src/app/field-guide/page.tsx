'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HardHat, 
  ShieldCheck, 
  CheckSquare, 
  Layers, 
  AlertTriangle, 
  Building2, 
  FileText, 
  ClipboardCheck, 
  ChevronDown, 
  ChevronUp, 
  RotateCcw
} from 'lucide-react';

interface GuideSection {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge: string;
  overview: string;
  standards: string[];
  keyPoints: Array<{
    title: string;
    description: string;
    fieldAction: string;
    mistakeTrap: string;
  }>;
  checklist: string[];
}

const guideSections: GuideSection[] = [
  {
    id: 'rc-quality',
    title: '鋼筋混凝土 (RC) 結構品管與試驗',
    subtitle: '公共工程施工綱要第 03310 章 · 現場抽樣、坍度、氯離子與試體強度驗收',
    icon: Layers,
    badge: '結構安全核心',
    overview: '鋼筋混凝土是台灣最普及的建築構造。從預拌車抵達工地進場驗收、泵送澆置、振動密實到拆模養護，每一道工序均有嚴格的國家標準 (CNS) 與公共工程檢驗頻率規定。',
    standards: ['CNS 3090 預拌混凝土', 'CNS 1176 混凝土坍度試驗法', 'CNS 1232 圓柱試體抗壓強度試驗法', '公共工程施工綱要第 03310 章'],
    keyPoints: [
      {
        title: '1. 坍度試驗 (Slump Test) 與現場嚴禁任意加水',
        description: '預拌混凝土車到達現場後，必須在卸料前進行坍度試驗。標準坍度模高 30cm，分三層裝填，每層以搗棒均勻插搗 25 次。提模後量測頂部下陷高度。',
        fieldAction: '泵送澆置梁柱一般要求坍度 15~18 cm。若坍度不足（如塞車導致坍度損失），應依配比添加流化劑（減水劑），絕對禁止現場司機直接加水。',
        mistakeTrap: '常犯陷阱：工人為求好推好抹任意加水，導致水灰比 (W/C) 飆高，28 天抗壓強度嚴重不足，並引發乾縮龜裂與鋼筋銹蝕。',
      },
      {
        title: '2. 水溶性氯離子含量檢測 (Chloride Content)',
        description: '為防止海砂屋與鋼筋加速銹蝕，新拌混凝土每車或每 100 m³ 必須取樣檢測水溶性氯離子含量。',
        fieldAction: '現行台灣 CNS 3090 標準嚴格規定：鋼筋混凝土之水溶性氯離子最大含量不得超過 0.15 kg/m³。檢驗合格後方可指示開始澆置。',
        mistakeTrap: '常犯陷阱：僅依賴出廠證明而未作現場即時滴定檢測；一旦超標澆置入模，將面臨敲除重做的巨額損失。',
      },
      {
        title: '3. 圓柱抗壓試體取樣與養護 (Compressive Test)',
        description: '每 100 m³ 或每層樓至少取樣一組（5 顆 15cm×30cm 或 10cm×20cm 圓柱試體），置於現場防日曬震動 24 小時後送實驗室標準水中養護 (23±2°C)。',
        fieldAction: '通常於 7 天破壞 1~2 顆（預估達設計強度 f\'c 之 65~70% 作為拆模參考），28 天破壞 3 顆取平均值評定是否合格。',
        mistakeTrap: '常犯陷阱：試體養護條件不合規範（如放在工地風吹日曬乾裂），導致試體強度低於結構體實際強度而造成爭議。',
      },
      {
        title: '4. 鋼筋保護層墊塊與綁紮錨定規範',
        description: '保護層厚度提供混凝土握裹力並保護鋼筋免受高溫與碳化銹蝕。基礎 7.5cm、梁柱 4.0cm、室內樓板 1.5~2.0cm。',
        fieldAction: '梁柱接頭圍束區箍筋必須採用 135° 耐震彎鉤，平直段長度 ≥ 6db 且不小於 7.5cm；柱主筋搭接位置應錯開於受力最小的柱中段。',
        mistakeTrap: '常犯陷阱：使用易吸水碎磚塊代替高強度水泥砂漿墊塊，導致保護層破損透水銹蝕鋼筋。',
      },
    ],
    checklist: [
      '檢查每車預拌混凝土出廠時間（拌和後至澆置完成不得超過 90 分鐘）',
      '落實坍度與氯離子檢驗，記錄每盤數據並拍照留存',
      '檢查柱梁接頭箍筋間距（圍束區間距通常 ≤ 10cm 或 d/4）',
      '檢查開口部（門窗角隅）是否配置 45° 補強斜筋各 2 支以防剪裂',
      '澆置時落料高度不宜超過 1.5m，配合高頻振動棒（插點間距 ≤ 45cm，直插快拔）',
      '拆模後立即展開灑水或覆蓋養護至少 7 天（乾硬性水泥至少 3 天）',
    ],
  },
  {
    id: 'steel-quality',
    title: '鋼結構工程 (SS/SRC) 施工與檢驗實務',
    subtitle: '公共工程施工綱要第 05120 章 · 鋼構吊裝、高張力螺栓與銲道非破壞檢驗',
    icon: Building2,
    badge: '高層與大跨距必備',
    overview: '鋼結構具備高強度、韌性好、施工快速與大跨距優勢。現場施工核心在於構件吊裝校正、高張力螺栓鎖固扭矩以及全滲透銲道的非破壞檢驗 (NDT)。',
    standards: ['CNS 4220 結構用高張力六角螺栓', 'AWS D1.1 鋼結構銲接規範', '公共工程施工綱要第 05120 章'],
    keyPoints: [
      {
        title: '1. 高張力螺栓 (High-Strength Bolts) 鎖固實務',
        description: '常用等級為 F10T (JIS) 或 ASTM A325 / A490。摩擦型接頭依靠螺栓預拉力產生的摩擦力傳遞剪力。',
        fieldAction: '接合面必須噴砂除銹（摩擦係數 μ ≥ 0.45），嚴禁沾染油漆、油脂或泥土。鎖固採「初鎖（60~70% 扭矩）→ 劃線標記 → 本鎖（扭斷梅花頭或轉角法 120°）」二階段作業。',
        mistakeTrap: '常犯陷阱：螺栓鎖固順序混亂，未由中央向外圍群組螺栓對稱施鎖，導致鋼板翹曲受力不均。',
      },
      {
        title: '2. 銲道非破壞檢驗 (NDT / Non-Destructive Testing)',
        description: '梁柱對接與電熱熔渣銲等全滲透銲道 (CJP)，必須依設計比例抽檢非破壞試驗以確保無內部裂紋、未熔合或氣孔。',
        fieldAction: '超音波探傷 (UT) 為現場最主要檢驗法（檢驗深層缺陷）；表面缺陷則配合磁粒檢驗 (MT) 或液體滲透檢驗 (PT)。',
        mistakeTrap: '常犯陷阱：銲接前未落實母材預熱（低溫時易產生氫裂），或銲條受潮未烘乾即施銲。',
      },
      {
        title: '3. 鋼柱垂直度校正與灌漿 (Column Grouting)',
        description: '鋼柱吊裝就位後，以經緯儀從兩相互垂直方向進行垂直度觀測（垂直度容許偏差 1/500 且 ≤ 25mm）。',
        fieldAction: '底板下方使用高流動無收縮水泥砂漿 (Non-shrink Grout) 進行充填灌漿，厚度一般 3~5cm，必須充填飽滿無孔洞。',
        mistakeTrap: '常犯陷阱：無收縮灌漿前底板下方垃圾未清理或未預先濕潤，導致灌漿脫層浮空。',
      },
    ],
    checklist: [
      '檢查高張力螺栓出廠證明、扭矩係數試驗報告及表面防銹處理',
      '檢查銲接技工合格證照（AWS / CNS 檢定合格證在有效期限內）',
      '落實初鎖後劃線（確認本鎖轉角角度）與本鎖扭斷梅花頭檢查',
      '全滲透銲道抽驗 UT 超音波探傷，檢驗記錄由合格檢驗員簽署',
      '吊裝鋼構防墜安全網、母索及防墜器落實檢查',
    ],
  },
  {
    id: 'excavation-safety',
    title: '基礎開挖與擋土安全監測 (Excavation & Safety)',
    subtitle: '連續壁、微型樁、地錨與安全監測系統（水壓計、傾度管、沉陷點）',
    icon: HardHat,
    badge: '工地防災防坍必讀',
    overview: '地下室深開挖是建築工程風險最高的階段。台北、台中等都會區周邊鄰房密集，必須透過連續壁或擋土排樁配合型鋼支撐，並以即時儀器監測確保擋土結構與鄰房安全。',
    standards: ['建築物基礎構造設計規範', '公共工程施工綱要第 02260 章 擋土支撐'],
    keyPoints: [
      {
        title: '1. 安全監測系統 (Safety Instrumentation)',
        description: '開挖期間必須佈設：壁體傾度管 (Inclinometer)、鄰房沉陷釘、地下水位計 (Piezometer) 與型鋼支撐荷重計 (Load Cell)。',
        fieldAction: '設定三級預警管理值：「預警值 (Alert) → 行動值 (Action) → 停工極限值 (Limit)」。當觀測值達行動值時，必須立即加設預力地錨或回填土方。',
        mistakeTrap: '常犯陷阱：監測頻率不足（如開挖快到底時僅每週量一次），未及時察覺湧水砂湧前兆。',
      },
      {
        title: '2. 砂湧 (Quick Sand) 與管湧 (Piping) 防治',
        description: '在粉砂透水層或高水頭差開挖時，水流向上滲透動水壓力大於土壤有效重量，導致底面土壤沸騰破壞。',
        fieldAction: '採用深導水井點降水 (Dewatering)、深層攪拌樁止水帷幕，或在開挖面施作地盤改良注漿 (Grouting)。',
        mistakeTrap: '常犯陷阱：抽水降水過快導致周邊鄰房地下水位驟降、地層壓密沉陷龜裂。',
      },
    ],
    checklist: [
      '檢查連續壁母單元與子單元接頭清洗與止水條安裝狀況',
      '各階開挖後立即施加型鋼支撐預加荷重 (Pre-load)，並以扭力扳手鎖固',
      '開挖前全面對周邊鄰房進行現況鑑定並拍照建檔留存',
      '每日定時讀取監測儀器數據，繪製位移-時間歷時曲線',
    ],
  },
  {
    id: 'drawing-review',
    title: '建築圖說判讀與施工衝突排查 (Drawing Review)',
    subtitle: '平面圖、立面剖面詳圖、結構梁柱配筋與水電 MEP 介面協調',
    icon: FileText,
    badge: '避免敲除重做',
    overview: '營造現場最常發生的工期延誤與返工，80% 來自「圖面矛盾與專業介面衝突」。施工前落實建築 (A)、結構 (S)、機電水電 (MEP) 的套圖檢討 (BIM Coordination) 是現代工程管理的核心能力。',
    standards: ['CNS 11567 建築製圖標準', '各專業介面衝突協調準則'],
    keyPoints: [
      {
        title: '1. 尺寸閉合與圖面階層檢討',
        description: '由大尺度至小尺度依序比對：地籍配置圖 → 平面柱網軸線圖 → 各層平面圖 → 門窗圖 → 剖面詳圖。',
        fieldAction: '檢核各分段尺寸總和是否等於外圍總尺寸；比對建築平面外牆線與結構柱梁外緣是否齊平（出挑或退縮詳圖）。',
        mistakeTrap: '常犯陷阱：裝修完成面厚度（粉刷 2cm、磁磚 1.5cm）未計入結構淨距，導致電梯井或管道間淨尺寸不足。',
      },
      {
        title: '2. 結構梁穿孔位置規範 (Beam Penetrations)',
        description: '排水管、消防管與通風風管穿過結構梁時，會直接削弱梁的剪力與彎矩承載力。',
        fieldAction: '嚴格遵守規範：孔徑不得大於梁深 D/3；孔中心必須位於梁高中央 1/3 範圍內；孔邊距支承端必須大於 2D（避開高剪力區）；相鄰兩孔淨距 ≥ 3 倍孔徑。',
        mistakeTrap: '常犯陷阱：水電廠商未經結構技師計算同意，擅自於梁端高剪力區或梁底拉力主筋處洗孔截斷主筋。',
      },
      {
        title: '3. 防水與收邊細部 (Waterproofing Details)',
        description: '窗框四周、女兒牆頂、外牆層間接縫與陽台降板是建築滲漏水的高風險區域。',
        fieldAction: '窗框四周須留設 1.5cm 嵌縫並施作高分子防水塗膜；窗台外側做洩水坡度（≥ 1/50）；女兒牆與梁底做「滴水線槽 (Drip edge)」以防雨水倒吸。',
        mistakeTrap: '常犯陷阱：外牆磁磚未留伸縮縫（每 3~5m 一道彈性矽利康縫），導致熱脹冷縮磁磚膨拱掉落。',
      },
    ],
    checklist: [
      '套圖比對建築門窗表開口尺寸與結構牆開口尺寸是否一致',
      '檢查樓梯梯級尺寸：2R + G = 60~65cm（級高 R ≤ 18cm，級深 G ≥ 26cm）',
      '核對天花板淨高與大梁底、消防風管底部的碰撞淨空',
      '檢查衛浴降板區結構高程是否預留管線坡度空間（通常降板 15~20cm）',
      '出圖前確認圖面版次 (Rev) 與施工圖審查戳章',
    ],
  },
  {
    id: 'eewh-green',
    title: '綠建築與環境控制實務 (EEWH / Passive Design)',
    subtitle: '台灣氣候特性 · 外殼節能 (ENVLOAD)、遮陽採光與健康綠建材',
    icon: HardHat,
    badge: '永續建築前瞻',
    overview: '台灣地處亞熱帶高溫高濕氣候區，綠建築 (EEWH) 核心在於「被動式節能設計」——利用自然遮陽、深出簷、誘導通風與屋頂隔熱，大幅減少空調依賴，並兼顧基地保水與生態多樣性。',
    standards: ['內政部建築研究所 綠建築評估手冊 (EEWH)', '建築技術規則建築節能專章'],
    keyPoints: [
      {
        title: '1. 外殼耗能量指標 (ENVLOAD) 與遮陽係數',
        description: 'ENVLOAD 評估建築外殼（窗戶、外牆、屋頂）進入室內的總熱量。在台灣，窗戶日射輻射熱占整體熱負荷 60% 以上。',
        fieldAction: '優先採用水平/垂直外遮陽（遮陽深出比 ≥ 0.5），搭配 Low-E 雙層玻璃（熱傳透率 U ≤ 2.0 W/m²·K，日射熱得 SHGC ≤ 0.4）。',
        mistakeTrap: '常犯陷阱：只做室內百葉窗而無外遮陽；太陽熱能穿透玻璃後即被困在室內形成溫室效應。',
      },
      {
        title: '2. 屋頂隔熱與通風誘導 (Roof Insulation & Ventilation)',
        description: '頂樓受日照最劇烈，屋頂熱傳透率規定 U ≤ 0.8 W/m²·K。',
        fieldAction: '構造推薦：RC 版上鋪設 5cm XPS 隔熱板 + 磨石子隔熱磚（架空雙層屋頂）；立面設置浮力通風天井，利用熱空氣上升原理帶走廢熱。',
        mistakeTrap: '常犯陷阱：防水層直接暴露於日曬下未加保護層，幾年內即因紫外線與高溫老化脆裂漏水。',
      },
      {
        title: '3. 健康綠建材與室內環境品質',
        description: '室內裝修材料（塗料、木板、天花板）常釋放甲醛與揮發性有機物 (VOC)，影響人體健康。',
        fieldAction: '台灣綠建築規範：室內裝修材料總面積中，必須採用「綠建材標章」產品達 60% 以上；塗料選用低 VOC 水性乳膠漆。',
        mistakeTrap: '常犯陷阱：使用劣質合板黏著劑，導致完工後室內甲醛濃度長期超標無法驗收。',
      },
    ],
    checklist: [
      '檢查主要朝向開窗面是否配置適當深度之遮陽板（南向水平、東西向垂直）',
      '檢查屋頂隔熱構造與洩水坡度（≥ 1/50）配置',
      '核對綠建材標章證書與現場進場材料型號、批號是否相符',
      '確認基地保水滲透側溝、透水鋪面與雨水回收沉砂池連通管路',
    ],
  },
];

export default function FieldGuidePage() {
  const [activeSectionId, setActiveSectionId] = useState<string>('rc-quality');
  const [expandedKeyPoint, setExpandedKeyPoint] = useState<number | null>(0);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('arch_field_checklist_state_v7') : null;
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheckItem = (key: string) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem('arch_field_checklist_state_v7', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const resetSectionChecklist = (sectionId: string) => {
    const section = guideSections.find((s) => s.id === sectionId);
    if (!section) return;
    setCheckedItems((prev) => {
      const next = { ...prev };
      section.checklist.forEach((_, idx) => {
        delete next[`${sectionId}-${idx}`];
      });
      try {
        localStorage.setItem('arch_field_checklist_state_v7', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const currentSection = guideSections.find((s) => s.id === activeSectionId) ?? guideSections[0];

  const sectionCheckedCount = currentSection.checklist.filter((_, idx) => checkedItems[`${currentSection.id}-${idx}`]).length;
  const sectionProgress = Math.round((sectionCheckedCount / Math.max(1, currentSection.checklist.length)) * 100);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 space-y-10">
      {/* Header */}
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 dark:border-teal-900/80 bg-teal-50/80 dark:bg-teal-950/40 px-3.5 py-1 text-xs font-mono font-bold text-teal-700 dark:text-teal-300">
          <HardHat className="size-3.5 text-teal-600 dark:text-teal-400" />
          Arch V8.01 建築工程現場實務百科 (Field Inspection Guide)
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          走進工地現場：營造工程品管與施工檢驗全手冊
        </h1>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          連結技術型高中建築科課堂理論與台灣營造現場規範（公共工程施工綱要、CNS 標準、監造查核清單）。
          看懂每一張圖面、每一道試驗與每一處關鍵收邊。
        </p>
      </header>

      {/* Main Layout */}
      <div className="grid gap-8 lg:grid-cols-4 items-start">
        {/* Left Navigation Sidebar */}
        <aside className="lg:col-span-1 space-y-2 sticky top-20">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider px-2 block">
            工程類別主題索引 ({guideSections.length})
          </span>
          <nav className="space-y-1.5" aria-label="現場手冊主題導覽">
            {guideSections.map((sec) => {
              const Icon = sec.icon;
              const isActive = sec.id === activeSectionId;
              const checkedInSec = sec.checklist.filter((_, idx) => checkedItems[`${sec.id}-${idx}`]).length;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActiveSectionId(sec.id);
                    setExpandedKeyPoint(0);
                  }}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                    isActive
                      ? 'bg-teal-700 text-white border-teal-800 shadow-md shadow-teal-950/20'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`size-5 shrink-0 mt-0.5 ${isActive ? 'text-teal-200' : 'text-teal-600 dark:text-teal-400'}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-sm truncate">{sec.title.split(' ')[0]}</span>
                      {checkedInSec > 0 && (
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300'}`}>
                          {checkedInSec}/{sec.checklist.length}
                        </span>
                      )}
                    </div>
                    <span className={`text-[11px] block mt-0.5 line-clamp-1 ${isActive ? 'text-teal-100' : 'text-slate-500'}`}>
                      {sec.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Right Main Guide Content */}
        <main className="lg:col-span-3 space-y-8">
          {/* Section Hero Banner */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 px-3 py-1 text-xs font-mono font-bold">
                {currentSection.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                施工現場必備規範
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {currentSection.title}
            </h2>

            <p className="text-xs font-mono text-teal-700 dark:text-teal-300">
              {currentSection.subtitle}
            </p>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
              {currentSection.overview}
            </p>

            {/* Applicable Standards Tags */}
            <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono">
              <span className="text-slate-400 self-center">依循標準：</span>
              {currentSection.standards.map((std) => (
                <span key={std} className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  📜 {std}
                </span>
              ))}
            </div>
          </div>

          {/* Key Points Deep Dive */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="size-5 text-teal-600 dark:text-teal-400" />
              核心工序與現場驗收重點
            </h3>

            <div className="space-y-4">
              {currentSection.keyPoints.map((kp, index) => {
                const isExpanded = expandedKeyPoint === index;
                return (
                  <article
                    key={kp.title}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      onClick={() => setExpandedKeyPoint(isExpanded ? null : index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <div className="space-y-1 min-w-0 flex-1">
                        <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {kp.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {kp.description}
                        </p>
                      </div>
                      <span className="shrink-0 text-slate-400">
                        {isExpanded ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 dark:border-slate-800 space-y-4 text-xs leading-relaxed animate-fadeIn">
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          {kp.description}
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2 pt-2">
                          <div className="rounded-xl bg-teal-50/70 dark:bg-teal-950/40 p-4 border border-teal-200 dark:border-teal-900/50 space-y-1.5">
                            <strong className="text-teal-900 dark:text-teal-200 flex items-center gap-1.5 font-bold font-mono">
                              <CheckSquare className="size-4 text-teal-600 dark:text-teal-400" />
                              監造工程師現場執行方針
                            </strong>
                            <p className="text-slate-700 dark:text-slate-300 font-sans">
                              {kp.fieldAction}
                            </p>
                          </div>

                          <div className="rounded-xl bg-amber-50/70 dark:bg-amber-950/40 p-4 border border-amber-200 dark:border-amber-900/50 space-y-1.5">
                            <strong className="text-amber-900 dark:text-amber-200 flex items-center gap-1.5 font-bold font-mono">
                              <AlertTriangle className="size-4 text-amber-600 dark:text-amber-400" />
                              工地常見致命疏失與陷阱
                            </strong>
                            <p className="text-slate-700 dark:text-slate-300 font-sans">
                              {kp.mistakeTrap}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>

          {/* Interactive Inspection Checklist */}
          <div className="rounded-3xl border border-teal-200 dark:border-teal-900/60 bg-gradient-to-br from-teal-50/50 via-white to-sky-50/40 dark:from-teal-950/30 dark:via-slate-900 dark:to-sky-950/20 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ClipboardCheck className="size-6 text-teal-700 dark:text-teal-400" />
                <h3 className="font-serif text-xl font-bold text-slate-950 dark:text-white">
                  工地主任與監造人員 · 查驗自主檢查表 (Interactive Checklist)
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-teal-700 dark:text-teal-300 font-bold">
                  進度：{sectionCheckedCount}/{currentSection.checklist.length} ({sectionProgress}%)
                </span>
                {sectionCheckedCount > 0 && (
                  <button
                    onClick={() => resetSectionChecklist(currentSection.id)}
                    className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                    title="重設本區勾選"
                  >
                    <RotateCcw className="size-3.5" /> 重設
                  </button>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all duration-300 rounded-full"
                style={{ width: `${sectionProgress}%` }}
              />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              點擊項目進行自主檢驗勾選（進度自動儲存於本機裝置）：
            </p>

            <div className="grid gap-2.5 sm:grid-cols-2 pt-2">
              {currentSection.checklist.map((item, idx) => {
                const itemKey = `${currentSection.id}-${idx}`;
                const isChecked = !!checkedItems[itemKey];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheckItem(itemKey)}
                    className={`flex items-start gap-3 rounded-xl p-3.5 border transition-all cursor-pointer select-none text-xs font-mono ${
                      isChecked
                        ? 'bg-teal-100/70 dark:bg-teal-950/60 border-teal-400 dark:border-teal-700 shadow-xs'
                        : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-teal-300'
                    }`}
                  >
                    <span className={`size-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 transition-colors ${
                      isChecked ? 'bg-teal-600 text-white' : 'border border-slate-300 dark:border-slate-600 text-transparent'
                    }`}>
                      ✓
                    </span>
                    <span className={`leading-snug font-sans ${isChecked ? 'text-slate-900 dark:text-white font-bold line-through opacity-80' : 'text-slate-800 dark:text-slate-200'}`}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-500">
              <span>查閱公式考點？</span>
              <span className="font-bold text-slate-900 dark:text-white ml-1">力學公式卡 · 測量口訣 · 構造量綱</span>
            </div>
            <div className="flex gap-2">
              <Link
                href="/cheatsheets"
                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-700 hover:bg-blue-800 px-4 py-2 text-xs font-mono font-bold text-white transition-colors"
              >
                查看統測高頻考點速查指南 →
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
