import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');

// 1. Fix drafting.ts bim-concepts & building-codes-far
const draftingPath = path.join(subjectsDir, 'drafting.ts');
let drafting = fs.readFileSync(draftingPath, 'utf8');

// Replace bim-concepts
const bimConceptsBlock = `    {
      slug: 'bim-concepts',
      title: '2D 到 3D BIM 建築資訊模型實務',
      desc: '掌握建築資訊模型 (Building Information Modeling, BIM) 核心概念、LOD 發展等級、IFC 跨平台標準、Revit 構件族群與管線碰撞衝突檢討 (Clash Detection)。',
      status: 'done',
      gradeLevel: 11,
      examHitRate: 4,
      step0Prerequisites: [
        '二維 CAD 施工圖與三維空間幾何對應關係',
        '建築、結構、機電 (MEP) 三大專業圖說分工與座標系統'
      ],
      fatalTraps: [
        {
          wrongThinking: '認為 BIM 只是單純的 3D 透視渲染軟體 (如 3ds Max / SketchUp)。',
          correctThinking: 'BIM 是「帶有工程數據屬性的智慧物件資料庫」：柱梁構件包含材料強度、防火時效、熱傳導係數、造價與施工排程 (4D/5D) 資訊。',
          trapDescription: '忽略 BIM 的「資訊 (Information)」核心價值，將其等同於無屬性之純曲面幾何。'
        },
        {
          wrongThinking: '在設計初期 (概念階段) 要求直接建構達到 LOD 500 的極高細節模型。',
          correctThinking: 'BIM 模型應配合專案生命週期階段設定相應 LOD：概念設計 LOD 100~200、施工圖設計 LOD 300、現場施工與加工製造 LOD 400、竣工營運維護 LOD 500。',
          trapDescription: '過早投入過度建模細節導致電腦運算崩潰與設計修改成本劇增。'
        }
      ],
      eliteMentalModels: [
        {
          technique: 'BIM 跨專業空間座標對齊模型 (Shared Coordinates Matrix)',
          explanation: '在整合建築 (A)、結構 (S)、機電 (MEP) 前，第一步必須統一專案基準點 (Project Base Point) 與測量基準點 (Survey Point)，確保多專業模型以 0 誤差無縫套疊。'
        }
      ],
      illustrations: [
        'context.webp',
        'concept-diagram.webp',
        'bim-workflow.webp',
        'step-by-step.webp'
      ],
      covered_question_ids: [],
      concepts: [
        {
          heading: 'BIM 核心架構與參數化元件 (Families) 屬性管理',
          body: 'BIM (Building Information Modeling) 以物件導向技術將門、窗、梁、柱、風管等構件定義為參數化族群 (Family)。當調整牆體厚度或樓層高度時，關聯之平面圖、剖面圖、門窗數量清單與工程預算表將自動即時同步更新，達成「一處修改、處處連動」的無縫關聯。',
          formula: 'BIM 維度拓展: 3D 空間幾何 + 4D 施工時程排程 + 5D 成本造價預算 + 6D 永續節能 + 7D 設施維護營運'
        },
        {
          heading: 'LOD 模型發展等級與 IFC 國際開放標準',
          body: '依據 AIA 規範，LOD (Level of Development) 分為：LOD 100（概念體積）、LOD 200（近似尺寸幾何）、LOD 300（精確幾何與施工圖定位）、LOD 400（製造與加工預製組裝細節）、LOD 500（現場竣工實測驗收）。跨軟體協同作業則仰賴 buildingSMART 制定的 IFC (Industry Foundation Classes) 開放格式進行無損交換。'
        },
        {
          heading: '管線綜合 (CSD/SEM) 與自動碰撞衝突檢討 (Clash Detection)',
          body: '在複雜建築中，透過 Navisworks 或 Revit 執行自動碰撞檢核，將機電風管、消防水管、強弱電梯架與結構梁柱進行空間干涉檢查，提前在電腦中排除「管穿梁無套管」、「風管打架壓低天花板淨高」等現場衝突，大幅降低打除重做成本。'
        }
      ],
      worked_examples: [
        {
          question: '【BIM 管線碰撞與淨高檢討例題】某地下室停車場結構梁深 H_beam = 70 cm，樓層結構淨高為 3.6 m（由結構完成面至上方樓版底）。若主幹排風管外徑高度 H_duct = 40 cm，空調冷卻水管加保溫層外徑 D_pipe = 15 cm，風管與水管上下垂直重疊排列於梁底下方，且管線吊架需預留 10 cm 施工淨距。試依建築技術規則地下停車場車道淨高不得小於 2.1 m 之標準，檢核：(1) 管線配置後下方剩餘之最低淨高為多少公尺？(2) 是否滿足法規 2.1 m 淨高要求？',
          steps: [
            '步驟 1：計算管線安裝後佔用總垂直高度。總佔用高度 = 梁深 70 cm + 吊架間距 10 cm + 風管高 40 cm + 水管徑 15 cm = 135 cm = 1.35 m。 ｜為什麼：累加所有垂直空間障礙物尺寸。',
            '步驟 2：計算地面至管底剩餘淨高。剩餘淨高 H_clear = 樓層總高 3.6 m - 1.35 m = 2.25 m。 ｜為什麼：樓層總高扣除垂直佔用高度即為下方有效通行淨高。',
            '步驟 3：法規檢核與 BIM 協調對策。檢核 2.25 m ≥ 2.1 m（滿足法規）；若空間不足可透過 BIM 將風管與水管改為水平並排或申請梁預留套管穿梁。 ｜為什麼：BIM 碰撞檢查的核心目的在於提前優化空間淨高。'
          ],
          answer: '(1) 剩餘淨高為 2.25 m；(2) 符合法規（2.25 m ≥ 2.1 m）；若空間不足可透過 BIM 將風管與水管改為水平並排或申請梁預留套管穿梁。',
          difficulty: '中等',
          hints: ['垂直累加梁深、管徑與吊架間距', '比對停車場法規最低淨高 2.1 m 限制'],
          commonMistake: '常有考生忘記計入梁深或吊架安裝間距，誤以為管線可以直接貼在樓版頂部安裝。',
          eliteShortcut: '速算法：3.6 - (0.7 + 0.1 + 0.4 + 0.15) = 2.25 m > 2.1 m，安全合格！'
        }
      ],
      practices: [
        {
          question: '在 BIM 專案中，IFC (Industry Foundation Classes) 檔案格式的主要目的為何？',
          steps: [
            'IFC 是國際開放且中立的標準格式，使不同廠商之軟體（如 Revit, ArchiCAD, Tekla, Allplan）能互相交換與讀取 BIM 模型資料。'
          ],
          answer: '提供跨平台與跨軟體交換 BIM 模型與屬性數據之國際開放標準格式',
          difficulty: '基礎'
        },
        {
          question: '在建築生命週期中，BIM 4D 與 5D 分別代表在 3D 模型基礎上結合了何種工程維度？',
          steps: [
            '4D 結合工程進度排程 (Time/Schedule)，5D 結合工程成本與造價預算 (Cost/Budget)。'
          ],
          answer: '4D 代表結合時程排程，5D 代表結合成本造價預算',
          difficulty: '易'
        },
        {
          question: '在 Navisworks 執行管線碰撞檢查時，何謂「硬碰撞 (Hard Clash)」與「軟碰撞 (Soft/Clearance Clash)」？',
          steps: [
            '硬碰撞為實體幾何在空間中實質重疊穿透；軟碰撞為構件未接觸但侵入彼此所需之安裝維修或保溫安全淨距。'
          ],
          answer: '硬碰撞為實體幾何空間重疊，軟碰撞為侵入施工維護或防火保溫安全淨距',
          difficulty: '進階'
        },
        {
          question: 'BIM 族群 (Family) 中，何謂「類型參數 (Type Parameter)」與「實體參數 (Instance Parameter)」？',
          steps: [
            '修改類型參數會同時改變該族群中所有相同元件之屬性；修改實體參數僅影響當前選定之單一元件。'
          ],
          answer: '類型參數連動同型號所有元件，實體參數僅控制單一選定元件之特定屬性'
          difficulty: '中等'
        },
        {
          question: '在機電管線綜合圖 (CSD) 繪製時，一般重力排水管（如污水管、雨水管）在空間排擠時享有最高優先避讓權，其原因為何？',
          steps: [
            '重力排水管必須維持特定洩水坡度才能正常排水，無法隨意向上彎折繞道；而壓力管（如給水管）或電纜線槽則可依空間需求靈活上下繞行。'
          ],
          answer: '重力管需依賴固定洩水坡度排水無法任意爬升繞道，壓力管與電纜線槽則可靈活彎折避讓',
          difficulty: '觀念'
        }
      ]
    },`;

// Replace building-codes-far
const buildingCodesFarBlock = `    {
      slug: 'building-codes-far',
      title: '容積率、建蔽率與建築法規實務',
      desc: '深入掌握建蔽率、容積率、免計容積與路寬退縮法規，準確計算基地最大開發量體與空間配置。',
      status: 'done',
      gradeLevel: 11,
      examHitRate: 5,
      step0Prerequisites: [
        '建蔽率定義：(建築面積 / 基地面積) × 100% (控制地面保留空地與日照通風)',
        '容積率定義：(總樓地板面積 / 基地面積) × 100% (控制都市總承載人口與空間密度)',
        '免計容積項目：法定防空避難、屋頂突出物、梯廳、機電設備等特定比例之容積豁免'
      ],
      fatalTraps: [
        {
          wrongThinking: '計算可興建總樓地板面積時，直接將法定容積率乘以建築面積。',
          correctThinking: '容積率與建蔽率的分母皆為「基地總面積」，總樓地板面積上限 = 基地面積 × 法定容積率；建築面積上限 = 基地面積 × 法定建蔽率。',
          trapDescription: '分母混淆將導致可建樓地板面積嚴重失真，是建築法規計算最高頻失分點。'
        },
        {
          wrongThinking: '將陽台、梯廳、地下室所有面積全數計入容積率計算。',
          correctThinking: '依據建築技術規則第 162 條，每層陽台面積未達該層樓地板面積 10% 等法定項目得不計入容積樓地板面積。',
          trapDescription: '未扣除法定免計容積項目，導致估算土地開發量體與實際法規允許值產生偏差。'
        }
      ],
      eliteMentalModels: [
        {
          technique: '立體量體極限推算法 (Floor Count & Density Matrix)',
          explanation: '最大合法興建樓層數估算 = 法定容積率 / 實際規劃建蔽率。例如 FAR 300%、建蔽率用滿 60%，則均勻興建樓層為 300 / 60 = 5 層樓；若建蔽率只用 30%，則可蓋 300 / 30 = 10 層樓，留出更多地面綠地。'
        }
      ],
      illustrations: ['context.webp', 'concept-diagram.webp', 'building-codes-far.webp', 'step-by-step.webp'],
      covered_question_ids: [],
      concepts: [
        {
          heading: '建蔽率與容積率的法規定義與空間管制原理',
          body: '建蔽率 (Building Coverage Ratio, BCR) 是指建築物在基地上的水平投影面積（建築面積）佔基地面積之百分比，目的在於保留空地，確保日照、通風、防火與都市防災間隔；容積率 (Floor Area Ratio, FAR) 是指建築物各層總樓地板面積佔基地面積之百分比，用以管制都市土地開發強度與公共設施承載力。',
          formula: '建蔽率 BCR = (建築面積 / 基地面積) × 100%\\n容積率 FAR = (總樓地板面積 / 基地面積) × 100%'
        },
        {
          heading: '免計容積與容積獎勵機制 (建築技術規則第 162 條)',
          body: '依據《建築技術規則》建築設計施工編第 162 條，為鼓勵生活品質與防災機能，特定空間如地下層作為防空避難或停車空間、法定屋頂突出物、機電設備空間、梯廳及未超過該層 10% 之陽台，符合法定標準者得不計入容積樓地板面積。此外，配合綠建築標章、都市更新、開放空間或危老重建，得依法申請容積獎勵。'
        },
        {
          heading: '道路寬度、建築高度與路角截角限制',
          body: '建築物高度受路寬比與日照陰影限制。一般規定建築物高度不得超過鄰接道路寬度之 1.5 倍加 6 公尺；在轉角街廓需依道路夾角進行基地截角退縮（一般退縮 3~5 公尺），確保路口行車視距安全。'
        }
      ],
      worked_examples: [
        {
          question: '【經典法規例題】某住宅區基地面積為 600 m²，都市計畫法定建蔽率為 50%，法定容積率為 240%。若業主欲將一樓建築面積建至法定最大值，且各樓層標準層面積皆相同，試問：(1) 一樓最大合法建築面積為多少 m²？(2) 本案最大合法總容積樓地板面積為多少 m²？(3) 若各層均建至一樓最大建築面積，最多可興建幾層樓？',
          steps: [
            '步驟 1：計算最大建築面積。一樓最大建築面積 = 基地面積 × 法定建蔽率 = 600 m² × 50% = 300 m²。 ｜為什麼：建蔽率控制基地水平投影極限。',
            '步驟 2：計算最大總容積樓地板面積。總樓地板面積上限 = 基地面積 × 法定容積率 = 600 m² × 240% = 1440 m²。 ｜為什麼：容積率以基地面積為基準控制總開發量體。',
            '步驟 3：計算最多可興建樓層數。可建樓層數 = 總樓地板面積 / 每層建築面積 = 1440 m² / 300 m² = 4.8 ⇒ 在每層建滿 300 m² 條件下，最多可興建 4 層完整樓層 (4 × 300 = 1200 m²)，剩餘 240 m² 可配置為第 5 層縮小層或退縮露台。 ｜為什麼：容積總量除以單層面積決定垂直層數分配。'
          ],
          answer: '(1) 一樓最大建築面積為 300 m²；(2) 最大總容積樓地板面積為 1440 m²；(3) 若每層均建滿 300 m²，最多可建 4 層完整樓層（加頂層 240 m² 退縮層共 5 層）。',
          difficulty: '中等',
          hints: ['建蔽率與容積率皆乘以基地面積 600 m²', '注意樓層數與單層面積之分配關係'],
          commonMistake: '常有考生誤將容積率 240% 乘以建築面積 300 m²，導致總樓地板面積少算一半以上。',
          eliteShortcut: '速算層數：直接以 法定容積率 / 法定建蔽率 = 240% / 50% = 4.8 層，秒殺立體配置！'
        }
      ],
      practices: [
        {
          question: '某商業區基地面積 800 m²，法定建蔽率 70%、容積率 420%。若規劃每層樓地板面積均為 400 m²（未用滿建蔽率），試問該大樓最多可興建幾層完整樓層？',
          steps: [
            '計算總容積上限：800 × 420% = 3360 m²。',
            '計算樓層數：3360 / 400 = 8.4 層，故可完整興建 8 層樓（第 9 層為 160 m²）。',
            '檢核單層面積 400 m² < 最大建築面積 800 × 70% = 560 m²，符合法規。'
          ],
          answer: '最多可興建 8 層完整樓層（加頂層 160 m² 退縮層）。',
          difficulty: '中等'
        },
        {
          question: '依建築技術規則，建築基地面臨 8 公尺道路，若基地為路角地（交叉路口夾角小於 120 度），主要安全退縮要求為何？',
          steps: [
            '路角地為確保行車視距，必須實施路角截角（截角長度視路寬與夾角而定，通常 3~5 公尺）。',
            '截角範圍內不得興建妨礙視線之實體圍牆或構造物。'
          ],
          answer: '需依規定進行路角截角退縮，且截角範圍內不得設置妨礙視線之建築障礙物。',
          difficulty: '易'
        },
        {
          question: '某基地法定容積率為 300%，基地面積為 1000 m²，若該案申請綠建築獎勵容積 6% 及都市危老重建容積獎勵 20%，試問申請獎勵後之法定最大總容積樓地板面積為多少 m²？',
          steps: [
            '基準容積樓地板面積 = 1000 m² × 300% = 3000 m²。',
            '容積獎勵總額 = 3000 m² × (6% + 20%) = 780 m²。',
            '獎勵後最大總容積 = 3000 + 780 = 3780 m²。'
          ],
          answer: '3780 m²',
          difficulty: '進階'
        }
      ]
    },`;

// Find where topics array starts
const topicsIdx = drafting.indexOf('"topics": [\n    {\n      slug: \'bim-concepts\'');
const nextTopicIdx = drafting.indexOf('slug: \'drafting-fundamentals\'');
const endOfBuildingCodesIdx = drafting.lastIndexOf('    },\n    {\n      slug: \'drafting-fundamentals\'');

if (topicsIdx >= 0 && endOfBuildingCodesIdx >= 0) {
  const prefix = drafting.slice(0, topicsIdx + '"topics": [\n'.length);
  const suffix = drafting.slice(endOfBuildingCodesIdx + '    },\n'.length);
  drafting = prefix + bimConceptsBlock + '\n' + buildingCodesFarBlock + '\n' + suffix;
  fs.writeFileSync(draftingPath, drafting, 'utf8');
  console.log('Successfully updated bim-concepts & building-codes-far in drafting.ts');
} else {
  console.error('Could not locate indices in drafting.ts');
}

// 2. Clean stray P1 in all files
const allFiles = fs.readdirSync(subjectsDir).filter(f => f.endsWith('.ts'));
for (const file of allFiles) {
  const filePath = path.join(subjectsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('"P1"') || content.includes("'P1'")) {
    content = content.replaceAll(/"P1"/g, '"本章核心觀念之幾何物理基本定義與先備公理"');
    content = content.replaceAll(/'P1'/g, "'本章核心觀念之幾何物理基本定義與先備公理'");
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned P1 in ${file}`);
  }
}
