'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  GraduationCap, 
  Compass, 
  BookOpen, 
  Layers, 
  Sun, 
  ShieldCheck, 
  Cpu, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Ruler, 
  Search,
  ArrowRight,
  BookMarked
} from 'lucide-react';
import { pathwaySubjects } from '@/data/pathwayCurriculum';
import PathwayIllustrationViewer from '@/components/pathway/PathwayIllustrationViewer';
import PathwayWorkedExampleCard from '@/components/pathway/PathwayWorkedExampleCard';

// 5-Year B.Arch Progression Data
const bArchYears = [
  {
    year: 'Year 1',
    yearName: '一年級：感知、形態與空間初構',
    englishTitle: 'Foundation: Spatial Perception, Form & Scale',
    focus: '打破既定框架，建立人體尺度感知、幾何空間思維與手作模型推敲能力。',
    semesters: [
      {
        sem: '大一上 (Semester 1)',
        courses: [
          { name: '基本設計 (一) Studio I', credits: '4-5 學分', desc: '二維點線面構成、空間質理與操作、人體工學與微型活動空間探索。' },
          { name: '建築圖學與手繪表現法', credits: '2 學分', desc: '手繪正投影、軸側圖、透視圖法、墨線表現與光影調子。' },
          { name: '建築概論與空間體驗', credits: '2 學分', desc: '大師案例參訪導讀、場所觀察日記、建築美學基本原理。' },
          { name: '模型製作與材料感知', credits: '2 學分', desc: '木料、石膏、金屬網、瓦楞紙等實體材料加工與接合工法。' },
        ],
      },
      {
        sem: '大一下 (Semester 2)',
        courses: [
          { name: '基本設計 (二) Studio II', credits: '4-5 學分', desc: '身體、構築與地景裝置、微型庇護所 (Pavilion) 與空間序列設計。' },
          { name: '電腦輔助建築繪圖 (2D/3D)', credits: '2 學分', desc: 'AutoCAD 精確圖面規範、Rhino 空間幾何形體建模基礎。' },
          { name: '建築史導論 (一)', credits: '2 學分', desc: '古埃及、希臘三柱式、羅馬拱券、中世紀哥德與文藝復興空間哲學。' },
          { name: '微積分與工程力學基礎', credits: '3 學分', desc: '向量分解、力系平衡、力矩與微積分在建築結構中的初步直覺。' },
        ],
      },
    ],
    milestone: '🏆 大一期末成果展：個人空間裝置／微型 Pavilion 1:1 或 1:10 實體構造模型。',
  },
  {
    year: 'Year 2',
    yearName: '二年級：空間、場所與構造本質',
    englishTitle: 'Intermediate: Tectonics, Site Context & Dwelling',
    focus: '從抽象空間過渡到真實機能與基地紋理，掌握住宅設計與構造材料本質。',
    semesters: [
      {
        sem: '大二上 (Semester 3)',
        courses: [
          { name: '建築設計 (一) Studio III', credits: '5 學分', desc: '獨棟與集合住宅設計 (Single & Multi-family Housing)、家庭成員生活模式與私密/公共領域界定。' },
          { name: '建築史 (二)：近現代建築思潮', credits: '2 學分', desc: '包浩斯運動、現代主義四大家（柯比意、密斯、萊特、葛羅培斯）思想解析。' },
          { name: '建築材料與構造 (一)', credits: '3 學分', desc: '木構造、砌體構造與鋼筋混凝土 (RC) 基礎施工與配筋邏輯。' },
          { name: '基地分析與景觀概論', credits: '2 學分', desc: '等高線判讀、日照軌跡、風向分析與植栽景觀規劃。' },
        ],
      },
      {
        sem: '大二下 (Semester 4)',
        courses: [
          { name: '建築設計 (二) Studio IV', credits: '5 學分', desc: '小型公共建築（社區圖書館、幼兒園、藝廊）、基地紋理與場所精神 (Genius Loci) 應答。' },
          { name: '建築史 (三)：台灣與東亞建築史', credits: '2 學分', desc: '台灣原住民石板屋/竹構、傳統漢人合院、日治現代化折衷樣式與戰後現代主義。' },
          { name: '材料力學與結構分析', credits: '3 學分', desc: '應力應變、梁之剪力彎矩圖 (SFD/BMD)、截面慣性矩與莫耳圓。' },
          { name: '數位運算與參數化設計 (Grasshopper)', credits: '2 學分', desc: '節點式演算法建模、NURBS 數學曲面與參數化立面生成。' },
        ],
      },
    ],
    milestone: '🏆 大二評圖重點：完整 1:50 住宅平立剖面施工初圖與全區環境模型。',
  },
  {
    year: 'Year 3',
    yearName: '三年級：環境、社會與結構跨度',
    englishTitle: 'Advanced: Environmental Systems, Civic Scale & Structure',
    focus: '面對中型公共建築與複合機能，深度整合建築物理環境控制與空間結構系統。',
    semesters: [
      {
        sem: '大三上 (Semester 5)',
        courses: [
          { name: '建築設計 (三) Studio V', credits: '5 學分', desc: '中型公共文化設施（博物館、青年活動中心）、空間流線與多重使用機能組織。' },
          { name: '建築物理與環境控制 (一)：熱、光、聲', credits: '3 學分', desc: '日照遮陽係數、採光係數 (DF)、室內建材吸音與殘響時間 (RT60) 計算。' },
          { name: '建築結構系統 (一)', credits: '3 學分', desc: '抗側力系統（剪力牆、抗彎矩構架、斜撐）、結構力流傳遞與抗震防衛。' },
          { name: '都市設計導論與空間紋理', credits: '2 學分', desc: '都市形態學 (Morphology)、街道空間尺度、行人動線與公共空間營造 (Placemaking)。' },
        ],
      },
      {
        sem: '大三下 (Semester 6)',
        courses: [
          { name: '建築設計 (四) Studio VI', credits: '5 學分', desc: '校園建築或複合社區再造、結合大跨度結構與綠建築物理環境模擬。' },
          { name: '建築環境控制 (二)：建築設備與 EEWH', credits: '3 學分', desc: '給排水、電氣系統、HVAC 暖通空調與台灣 EEWH 綠建築九大指標評估。' },
          { name: '建築構造與細部設計 (Detailing)', credits: '3 學分', desc: '1:1~1:10 建築大樣圖（外牆帷幕、屋頂防水隔熱、伸縮縫、樓梯踏階節點）。' },
          { name: 'BIM 建築資訊模型 (Revit / ArchiCAD)', credits: '2 學分', desc: 'BIM 3D 族群建構、2D 圖紙聯動出圖與機電/結構碰撞檢查 (Clash Detection)。' },
        ],
      },
    ],
    milestone: '🏆 大三里程碑：具備獨立完成完整中型公共建築全套圖面（含細部大樣與環控綠建築分析）能力。',
  },
  {
    year: 'Year 4',
    yearName: '四年級：都市、法規與複合系統',
    englishTitle: 'Synthesis: Urban Scale, Complex Typologies & Professional Practice',
    focus: '大尺度都市再造、大跨度與高層建築，直面台灣建築法規與事務所實務實習。',
    semesters: [
      {
        sem: '大四上 (Semester 7)',
        courses: [
          { name: '建築設計 (五) Studio VII', credits: '5 學分', desc: '高層商務/複合多功能大樓 (Mixed-Use Tower) 或大跨度體育/交通轉運樞紐。' },
          { name: '敷地計畫與景觀生態', credits: '3 學分', desc: '大基地整地排水 (Cut & Fill)、等高線土方平衡、微氣候風廊與暴雨滯洪池。' },
          { name: '建築法規與技術規則實務', credits: '3 學分', desc: '建築法、都市計畫法、建築技術規則（設計施工編：建蔽/容積/防火避難/無障礙）。' },
          { name: '大跨度與前瞻結構專案', credits: '2 學分', desc: '空間桁架、薄殼結構、懸索結構、張拉膜結構與木構 CLT 耐震評估。' },
        ],
      },
      {
        sem: '大四下 (Semester 8)',
        courses: [
          { name: '建築設計 (六) Studio VIII', credits: '5 學分', desc: '都市更新 (Urban Regeneration)、歷史街區再生與 TOD 大眾運輸導向開發。' },
          { name: '營建管理與施工估價', credits: '2 學分', desc: '工程估驗計價、甘特圖要徑法 (CPM)、監造計畫與工程合約風險管控。' },
          { name: '專業實習 (Professional Internship)', credits: '2 學分', desc: '進入合法立案建築師事務所或營造工程顧問公司進行實務實習（至少 320 小時）。' },
          { name: '畢業設計前置專題研討 (Thesis Seminar)', credits: '2 學分', desc: '確立畢業設計選題、社會脈絡調研、理論論述架構與基地選址評估。' },
        ],
      },
    ],
    milestone: '🏆 大四核心收穫：取得事務所實習證明，通過畢業設計前置提案審查 (Thesis Proposal Defense)。',
  },
  {
    year: 'Year 5',
    yearName: '五年級：畢業設計、獨立論述與大師終極淬鍊',
    englishTitle: 'Mastery: B.Arch Thesis, Defense & Licensure Blueprint',
    focus: '一生一次的獨立畢業設計 (Thesis)，全心投入個人空間哲學論述與國家建築師高考備考。',
    semesters: [
      {
        sem: '大五上 (Semester 9)',
        courses: [
          { name: '畢業設計 (一) Graduation Thesis I', credits: '6 學分', desc: '深度場地調研、社會/環境/文化議題論述、空間計畫 Program 擬定與 1:500~1:200 量體概念模型。' },
          { name: '建築專題批判與當代思潮', credits: '2 學分', desc: '批判地域主義、現象學空間體驗、後數位時代建築哲學專題研讀。' },
          { name: '建築師執照備考專案 (一)', credits: '2 學分', desc: '專技高考考科攻防：建築計畫與設計快速草圖 (Fast Sketch) 與敷地計畫實戰。' },
        ],
      },
      {
        sem: '大五下 (Semester 10)',
        courses: [
          { name: '畢業設計 (二) Graduation Thesis II', credits: '6 學分', desc: '完整全套 1:100~1:20 平立剖大樣圖、1:50~1:20 實體細部大模型、動畫渲染與最終公開評圖答辯 (Final Defense)。' },
          { name: '建築執業倫理與事務所法務', credits: '2 學分', desc: '建築師法、著作權法、政府採購法、監造簽證責任與工程災害法律賠償判例。' },
          { name: '建築師執照備考專案 (二)', credits: '2 學分', desc: '專技高考筆試衝刺：營建法規、建築構造與施工、建築結構、建築環境控制考題精解。' },
        ],
      },
    ],
    milestone: '🎓 終極榮耀：取得 5 年制建築學士 (B.Arch) 學位、全國畢業設計聯展參展資格，並具備專技高考建築師報考資格！',
  },
];

// 8 Core Academic Pillars Data
const corePillars = [
  {
    id: 'studio',
    icon: Building2,
    tag: '領域 01',
    title: '建築設計工作坊 (Design Studio I ~ X & 畢業設計)',
    badge: '核心命脈',
    color: 'border-blue-500 bg-blue-50/40 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400',
    summary: '建築系 5 年每學期 5-6 學分的核心命脈。透過每週兩次「一對一桌評 (Desk Crit)」與定期「大評 (Jury)」，從人體尺度走入宏觀都市。',
    keyConcepts: [
      { term: '概念發想 (Concept & Narrative)', desc: '將社會議題、場所歷史或空間體驗提煉為強而有力的空間核心論述，杜絕空洞造型。' },
      { term: '空間計畫與動線 (Program & Circulation)', desc: '精確計算使用面積、泡泡圖 (Bubble Diagram) 分區、主次動線分離與空間序列高潮。' },
      { term: '基地紋理與場所精神 (Genius Loci)', desc: '深入分析日照、盛行風、周邊歷史建築、地勢高差與都市節點，使建築宛如自土地生長。' },
      { term: '實體模型推敲 (Physical Study Model)', desc: '以 1:500 基地白模、1:100 空間塊體模與 1:20 構造剖面模，驗證三維空間光影與視線穿透。' },
    ],
    classicBooks: ['《建築：形式、空間與秩序》— Francis D.K. Ching', '《建築的空間與形構》— Bernard Leupen', '《大師之作的解析》— Geoffrey H. Baker'],
    studioProjects: ['大一：1:1 身體空間庇護所', '大二：獨棟與合院住宅', '大三：水岸社區圖書館', '大四：都市複合交通轉運站', '大五：畢業設計獨立專案'],
  },
  {
    id: 'history',
    icon: BookOpen,
    tag: '領域 02',
    title: '建築史論與批判理論 (History & Theory)',
    badge: '思維底蘊',
    color: 'border-amber-500 bg-amber-50/40 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400',
    summary: '建築不是憑空捏造，而是數千年人類文明思想與技術的結晶。掌握古典、現代至當代思潮，為設計注入深邃靈魂。',
    keyConcepts: [
      { term: '古典建築語彙 (Classical Orders)', desc: '多立克 (Doric)、愛奧尼 (Ionic)、科林斯 (Corinthian) 柱式比例與神廟對稱平衡。' },
      { term: '現代主義四大家 (Modernist Masters)', desc: '柯比意（新建築五點）、密斯（少即是多/流動空間）、萊特（有機建築/草原學派）、包浩斯工藝整合。' },
      { term: '後現代與解構主義 (Postmodern & Deconstruction)', desc: '文丘里《建築中的複雜與矛盾》、Zaha Hadid 流體幾何、Frank Gehry 雕塑性鈦金屬曲面。' },
      { term: '批判地域主義 (Critical Regionalism)', desc: 'Kenneth Frampton 理論：抵抗全球化均質抹平，強調微氣候、在地構造光影與觸覺體驗。' },
      { term: '台灣建築歷史脈絡', desc: '原住民住居、明清合院與營造法式、日治官署折衷主義、戰後王大閎/漢寶德/修澤蘭現代建築到當代黃聲遠宜蘭田中央。' },
    ],
    classicBooks: ['《現代建築史：一部批判性的歷史》— Kenneth Frampton', '《建築的詩學：十九與二十世紀建築的形構》— Kenneth Frampton', '《台灣建築史綱》— 傅朝卿'],
    studioProjects: ['大師名作平立剖紅描與幾何比例分析', '古典柱式手繪水彩渲染', '台灣戰後代表性歷史建築現地踏勘報告'],
  },
  {
    id: 'construction',
    icon: Layers,
    tag: '領域 03',
    title: '建築構造、細部與構造型態學 (Tectonics & Detailing)',
    badge: '實體落地',
    color: 'border-teal-500 bg-teal-50/40 dark:bg-teal-950/20 text-teal-700 dark:text-teal-400',
    summary: '好設計死在爛細部！大師如密斯凡德羅曾言「上帝藏在細部之中 (God is in the details)」。學習建築材料如何精確接合與防水抗風。',
    keyConcepts: [
      { term: '鋼筋混凝土 (RC) 與配筋細部', desc: '梁柱節點 (Beam-Column Joint) 剪力箍筋密合、搭接長度 (La)、保護層厚度與施工縫防水止水條。' },
      { term: '鋼結構 (SS/SRC) 與帷幕牆 (Curtain Wall)', desc: 'H型鋼梁柱剛接接頭、高張力螺栓扭矩檢驗、單元式帷幕牆防風雨氣密/水密層設計。' },
      { term: '現代低碳木構造 (CLT & Glulam)', desc: '直交集成板 (CLT) 預製拼裝、鋼木接頭金屬件五金、木材防火炭化層與防潮通風細部。' },
      { term: '建築防水與伸縮縫 (Expansion Joint)', desc: '平屋頂七層防水隔熱工法、女兒牆泛水收頭大樣、地下室外牆複壁與沉陷縫構造。' },
      { term: '1:10~1:1 建築大樣圖 (Architectural Detailing)', desc: '外牆開窗剖面、地坪收邊、樓梯扶手欄杆、天花吊頂與乾式施工吊掛系統。' },
    ],
    classicBooks: ['《建築構造圖解》— Francis D.K. Ching', '《建築細部大樣設計手冊 (Detail)》— Christian Schittich', '《建築材料與施工法》— 內政部營建署/國土署編著'],
    studioProjects: ['繪製一套 1:20 完整建築外牆剖面大樣圖', '1:5 實體木構造榫卯或鋼構螺栓接頭手工模型', '現場工地施工大樣與竣工圖比對調研'],
  },
  {
    id: 'environment',
    icon: Sun,
    tag: '領域 04',
    title: '建築物理、環境控制與 EEWH 綠建築 (Building Physics & EEWH)',
    badge: '永續科技',
    color: 'border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400',
    summary: '掌控熱、光、聲、氣四大物理環境，打造冬暖夏涼、節能低碳且舒適宜人的智慧健康建築。',
    keyConcepts: [
      { term: '熱環境與外殼耗能 (Envelope Thermodynamics)', desc: '建築外殼熱傳透率 U 值 (W/m²·K)、遮陽係數 SC、等效熱阻 R 值與太陽輻射熱負荷。' },
      { term: '光環境與自然採光 (Daylighting & Lighting)', desc: '採光係數 (Daylight Factor, DF ≥ 2%)、眩光防制、導光管 (Light Pipe) 與 LED 演色性 (CRI)。' },
      { term: '聲環境與音響學 (Architectural Acoustics)', desc: '吸音係數 (NRC)、隔音等級 (STC ≥ 50 dB)、賽賓公式 (Sabine) 計算殘響時間 RT60。' },
      { term: '通風氣流與 HVAC 暖通設備', desc: '熱壓浮力通風 (Stack Effect)、風壓穿堂通風、CFD 氣流模擬與變頻多聯式空調 (VRF) 機電配置。' },
      { term: '台灣綠建築 EEWH 九大指標評估體系', desc: '生態（生物多樣性、綠化量、基地保水）／節能（日常節能）／減廢（CO2減量、廢棄物減量）／健康（室內環境、水資源、污水垃圾）。' },
    ],
    classicBooks: ['《建築物理環境概論》— 陳啟仁 / 賴榮平', '《綠建築九大評估指標與實例詳解》— 內政部建築研究所', '《建築設備工程》— 楊欽富'],
    studioProjects: ['使用 Ladybug / Honeybee 進行建築全年日照與採光熱負荷模擬', '設計一間混響時間 1.2 秒的小型音樂廳聲學模型', '評估個人 Studio 設計之 EEWH 綠建築鑽石級得分'],
  },
  {
    id: 'structure',
    icon: ShieldCheck,
    tag: '領域 05',
    title: '建築結構系統與耐震科技 (Structural Systems & Seismic)',
    badge: '安全基石',
    color: 'border-sky-500 bg-sky-50/40 dark:bg-sky-950/20 text-sky-700 dark:text-sky-400',
    summary: '建築師不能只畫好看外殼！必須理解力流路徑 (Load Paths)，與結構技師攜手實現大跨度懸挑與地震防衛。',
    keyConcepts: [
      { term: '結構力流路徑 (Load Paths)', desc: '樓板載重 → 小梁 → 主梁 → 柱 → 基礎 → 地層地盤之垂直與水平完整力流傳遞。' },
      { term: '抗側力耐震系統 (Seismic Resisting Systems)', desc: '鋼筋混凝土抗剪牆 (Shear Wall)、韌性抗彎矩構架 (SMRF)、同心/偏心斜撐 (CBF/EBF)。' },
      { term: '隔震與制震阻尼器 (Base Isolation & Dampers)', desc: '鉛心橡膠隔震墊 (LRB)、調諧質量阻尼器 (TMD 如台北101)、挫屈束制斜撐 (BRB)。' },
      { term: '大跨度空間結構 (Long-Span Space Structures)', desc: '三維空間桁架 (Space Truss)、大地穹頂 (Geodesic Dome)、懸索張拉結構 (Cable Truss) 與薄膜結構。' },
      { term: '薄殼結構與形態生成 (Shell & Form Finding)', desc: '雙曲拋物面 (Hypar)、懸垂線 (Catenary) 反轉拱（高第聖家堂）、清水模薄殼（路思義教堂）。' },
    ],
    classicBooks: ['《建築結構系統》— 許茂雄 / 蔡益超', '《結構形態與空間美學》— Mario Salvadori', '《耐震設計規範與解說》— 內政部國土署'],
    studioProjects: ['1:50 義大利麵／巴沙木大跨度橋梁抗壓載重破壞競賽', '利用 Karamba 進行 Studio 建築桁架應力有限元分析 (FEA)', '台北101調諧質量阻尼器 (TMD) 動態振動台模擬'],
  },
  {
    id: 'site',
    icon: Compass,
    tag: '領域 06',
    title: '敷地計畫、景觀與都市設計 (Site Planning & Urban Design)',
    badge: '宏觀視野',
    color: 'border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400',
    summary: '建築不是孤島，而是都市空間的拼圖。學習等高線整地、道路人車分流、都市紋理與永續生態地景。',
    keyConcepts: [
      { term: '等高線與整地土方平衡 (Contour & Cut-and-Fill)', desc: '坡度分析（0-5% 緩坡、5-15% 建築坡、>30% 保育林地）、土方挖填平衡計算與擋土牆配置。' },
      { term: '微氣候與水文景觀 (Site Microclimate & Hydrology)', desc: '透水鋪面、雨水花園 (Rain Garden)、生態草溝 (Bioswale)、滯洪沉沙池與基地保水指標。' },
      { term: '人車動線與無障礙敷地配置', desc: '消防車救災操作空間 (6m 寬通路、8m×20m 救災雲梯車空間)、貨物裝卸動線、1:12 無障礙坡道。' },
      { term: '都市形態學與大眾運輸導向 (TOD)', desc: '捷運場站周邊 500m 徒步生活圈、天際線管制、公共騎樓退縮與開放空間容積獎勵。' },
      { term: '場所營造 (Placemaking) 與街道家具', desc: '人本街道設計、街道家具配置、夜間景觀照明與口袋公園 (Pocket Park)。' },
    ],
    classicBooks: ['《敷地計畫》— Kevin Lynch (凱文·林區)', '《都市意象 (The Image of the City)》— Kevin Lynch', '《偉大城市的誕生與衰亡》— Jane Jacobs (珍·雅各)'],
    studioProjects: ['1:1000 都市基地紋理與圖底關係 (Figure-Ground) 繪製', '斜坡基地 1:200 等高線整地挖填土方剖面圖', '捷運站周邊 500m 徒步街區空間改造計畫'],
  },
  {
    id: 'codes',
    icon: FileText,
    tag: '領域 07',
    title: '建築法規、技術規則與執業實務 (Codes & Practice)',
    badge: '執業門檻',
    color: 'border-rose-500 bg-rose-50/40 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400',
    summary: '合法是一切設計的前提！精熟建築法規、建蔽容積檢討、防火避難設施與建築師事務所執業合約與監造責任。',
    keyConcepts: [
      { term: '三法體系與都市計畫土地使用分區', desc: '建築法、都市計畫法、區域計畫法；住一至住四、商一至商四之建蔽率 (BCR) 與容積率 (FAR) 計算。' },
      { term: '建築技術規則：設計施工編核心章節', desc: '防火區劃（1500m²、高層建築 100m²）、雙向安全梯與特別安全梯動線步行距離（30m/50m）、排煙室。' },
      { term: '無障礙生活環境與綠建築專章', desc: '無障礙電梯、無障礙廁所坡度與迴轉空間 (150cm)、綠化量與基地保水強制法規檢討。' },
      { term: '建築師執照考試（專技高考 6 科）', desc: '建築計畫與設計 (申論繪圖)、敷地計畫與都市設計 (申論繪圖)、營建法規與實務、建築結構、建築構造與施工、建築環境控制。' },
      { term: '事務所執業倫理與工程監造責任', desc: '建築師法、合約書（委託設計與監造契約）、工程發包投標、施工抽驗簽證責任與營建法務判例。' },
    ],
    classicBooks: ['《建築技術規則解說與實務圖例》— 內政部國土署', '《營建法規解析》— 潘冀聯合建築師事務所顧問團隊', '《建築師執業手冊》— 中華民國全國建築師公會'],
    studioProjects: ['為大三 Studio 設計案編製一份合法之「法規檢討報告書」（含建蔽容積/防火避難/無障礙）', '模擬建築師事務所委任合約撰寫與工程估驗進度排程'],
  },
  {
    id: 'digital',
    icon: Cpu,
    tag: '領域 08',
    title: '數位運算、BIM 與前瞻建築科技 (Computation & BIM)',
    badge: '未來前沿',
    color: 'border-purple-500 bg-purple-50/40 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400',
    summary: '邁向數位孿生 (Digital Twin)！掌握 Rhino/Grasshopper 演算法幾何、BIM 智慧模型協同與 AI 生成前瞻工具。',
    keyConcepts: [
      { term: '參數化幾何與節點式運算 (Rhino + GH)', desc: '數列 (Series)、區間 (Domain)、向量運算、Voronoi 圖形分割、自由曲面面板劃分 (Panels)。' },
      { term: '性能驅動最佳化 (Performance-Driven Optimization)', desc: 'Ladybug 日照輻射模擬、Karamba 結構應力、Galapagos 遺傳演算法自動搜尋最佳立面遮陽角度。' },
      { term: 'BIM 建築資訊模型 (Revit / ArchiCAD)', desc: 'Level of Development (LOD 100~400)、智慧參數化族群 (Families)、2D/3D 自動關聯、明細表算料與碰撞檢測。' },
      { term: '數位製造與機器人構築 (Digital Fabrication)', desc: '3D 混凝土列印、CNC 數控曲面切削、雷射切割五金接件與機械手臂砌磚。' },
      { term: '生成式 AI 輔助競圖與空間生成', desc: 'ControlNet 深度圖約束渲染、空間文字轉 3D 白模、建築碳盤查演算法與智慧建築物聯網 (IoT)。' },
    ],
    classicBooks: ['《Grasshopper 參數化設計教程》— Arturo Tedeschi', '《BIM 建築資訊模型導論》— 謝尚賢 (台大 BIM 中心)', '《數位構築與未來建築》— Branko Kolarevic'],
    studioProjects: ['編寫 Grasshopper 腳本自動生成隨太陽軌跡變化的動態遮陽立面', '使用 Revit 完成一棟 5 層樓圖書館完整 BIM 模型並產出無衝突碰撞報告', '3D 列印 1:20 複雜雙曲面薄殼實體模型'],
  },
];

// High School to University Bridge Tips
const bridgeTips = [
  {
    category: '製圖與工具優勢',
    strength: '高工建築科同學已熟練手繪儀器、CNS 工程字法、第三角正投影與 AutoCAD/Sketchup 基礎。',
    advise: '大一進大學後，不要只停留在工具熟練！要將繪圖技巧轉化為「設計表達論述」的武器，主動進階學習 Rhino + Grasshopper 與 Adobe 排版工具。',
  },
  {
    category: '力學與材料底蘊',
    strength: '高工已扎實打下工程力學（SFD/BMD、靜定平衡）、材料與試驗（CNS 混凝土、木材 FSP、鋼材應力應變）。',
    advise: '普高生常在大二大三被力學與結構系統擊垮，高工生在此科目擁有極大優勢！應將力學直覺融入 Studio 設計中，大膽挑戰大跨度懸挑與結構美學。',
  },
  {
    category: '設計思維轉型',
    strength: '手作模型速度快、工法概念清楚、不怕熬夜切模型。',
    advise: '大學建築系最看重「概念 (Concept)」與「批判性 (Critical Thinking)」。要戒除「只畫標準平面」的直覺，多閱讀哲學、社會學、多去田野調查，學習講出動人的設計故事。',
  },
  {
    category: '評圖應答心態',
    strength: '技術問題回答精準，施工可行性高。',
    advise: '面對評審老師（評圖 Jury）的嚴厲質疑時，不要害怕被批評！評圖是討論如何讓設計更好的平台。冷靜說明你的設計邏輯與前提假設，虛心吸收建議。',
  },
];

// Crit / Jury Survival Guide
const critRules = [
  { step: '01', title: '圖面說故事，不要讓評審找圖', desc: '展板排版必須有清楚的視覺動線：概念大圖 (Concept) → 基地分析 (Site) → 平立剖面 (Plans/Sections) → 1:20 細部大樣 → 實體模型。所有圖面比例標尺必須精準。' },
  { step: '02', title: '開場黃金 3 分鐘 Pitch 決定生死', desc: '不要一開場就念平面圖「這裡是客廳、這裡是走廊」！開場直接拋出你的核心提問：「本案試圖解決基隆多雨氣候下，如何創造全年無阻的公共流動空間？」' },
  { step: '03', title: '剖面圖是建築系的靈魂 (Section is King)', desc: '平面圖是機能，剖面圖才是空間！畫出精彩的空間高差、採光天窗、結構梁位與人體視線關係，是拿下評圖高分的關鍵殺手鐧。' },
  { step: '04', title: '面對評審攻擊，用「是的，而且... (Yes, and...)」化解', desc: '當評審說「你的樓梯逃生動線有問題」，不要直接反駁。回答：「謝謝老師指正，我目前考量的是視覺穿透，但我可以在後側增設另一道封閉安全梯以符合法規。」' },
];

export default function ArchitecturePathwayPage() {
  const [activeTab, setActiveTab] = useState<'progression' | 'curriculum-hub' | 'pillars' | 'bridge' | 'crit'>('curriculum-hub');
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [selectedPillar, setSelectedPillar] = useState<string>('studio');
  const [selectedPathwaySubjectId, setSelectedPathwaySubjectId] = useState<string>('studio');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const currentPillarData = corePillars.find((p) => p.id === selectedPillar) || corePillars[0];
  const currentPathwaySubject = pathwaySubjects.find((s) => s.id === selectedPathwaySubjectId) || pathwaySubjects[0];

  const filteredPillars = corePillars.filter(p => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return p.title.toLowerCase().includes(q) || 
           p.summary.toLowerCase().includes(q) || 
           p.keyConcepts.some(c => c.term.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
  });

  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-slate-950 pb-24 text-slate-800 dark:text-slate-100 transition-colors">
      {/* ── Top Hero Header ── */}
      <section className="relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-blue-50/50 via-slate-50 to-transparent dark:from-blue-950/30 dark:via-slate-950 dark:to-transparent pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="v7-measure" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold tracking-wider mb-4">
            <span className="rounded-full bg-blue-700 px-3 py-1 text-white shadow-xs">
              ARCH V9.00
            </span>
            <span className="text-blue-700 dark:text-blue-400">
              從高工建築科到 5 年制 B.Arch 建築學士與國家建築師
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 items-end">
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                建築之路 <br />
                <span className="text-blue-700 dark:text-blue-400">大學 5 年制完整課綱與大師養成</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                統測考高分只是通往建築殿堂的第一步。在這裡，我們為你完整揭開成大、東海、陽明交大、台科大、北科大等頂尖大學建築系 5 年制（B.Arch）10 學期課程體系、8 大核心學術領域、評圖文化生存心法與高工銜接攻略。
              </p>
            </div>

            {/* Quick Stats Banner */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-6 shadow-sm space-y-4">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                B.Arch 五年制養成架構全覽
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40">
                  <span className="block font-serif text-2xl font-bold text-blue-700 dark:text-blue-400">10</span>
                  <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400">學期 Studio</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40">
                  <span className="block font-serif text-2xl font-bold text-emerald-700 dark:text-emerald-400">8</span>
                  <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400">核心領域</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/40">
                  <span className="block font-serif text-2xl font-bold text-amber-700 dark:text-amber-400">160+</span>
                  <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400">畢業總學分</span>
                </div>
              </div>
              <div className="text-[11px] font-mono text-slate-500 text-center flex items-center justify-center gap-1">
                <CheckCircle2 className="size-3.5 text-emerald-500" />
                對齊考選部專技高考建築師六科應考學分要求
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-12 flex overflow-x-auto mobile-scroll gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            {([
              { id: 'curriculum-hub', label: '📚 大學核心科目教學庫 (8 大領域)', desc: '專屬插畫圖示 · 範例 SOP · 直通教學頁' },
              { id: 'progression', label: '📅 5 年 10 學期進程時間軸', desc: '大一至大五課程里程碑' },
              { id: 'pillars', label: '🏛️ 8 大核心學術領域課綱', desc: '設計、史論、構造、環控、結構、法規' },
              { id: 'bridge', label: '🚀 高工升大學銜接指南', desc: '發揮高職優勢，克服設計盲點' },
              { id: 'crit', label: '🎙️ 大學評圖文化生存手冊', desc: '大評/草評應對與 Pitch 技巧' },
            ] as const).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-start px-5 py-3 rounded-2xl transition-all cursor-pointer whitespace-nowrap text-left border ${
                  activeTab === tab.id
                    ? 'bg-blue-700 text-white border-blue-700 shadow-md scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                <span className="font-serif font-bold text-sm">{tab.label}</span>
                <span className={`text-[10px] font-mono mt-0.5 ${activeTab === tab.id ? 'text-blue-100' : 'text-slate-400'}`}>
                  {tab.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        {/* TAB 0: University Architecture Core Curriculum Hub */}
        {activeTab === 'curriculum-hub' && (
          <div className="space-y-12 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-700 text-white font-mono text-[10px] font-bold px-2.5 py-0.5">
                    B.Arch 核心科目教學庫
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400">
                    8 大領域 · 專屬插畫 · 三步 SOP · 直通教學頁
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1.5">
                  大學建築系完整核心科目課綱與知識點教學
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
                  點選下方科目，即可檢閱大學 5 年制建築學士 (B.Arch) 各科目的核心理論、專屬空間幾何插畫、標準 3 步 SOP 範例演繹與高考建築師考題破解。
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 p-3 text-xs font-mono font-bold text-blue-900 dark:text-blue-200 shrink-0">
                <BookMarked className="size-4 text-blue-600 dark:text-blue-400" />
                <span>8 大科目 · 24+ 深度知識點</span>
              </div>
            </div>

            {/* Subject Selector Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {pathwaySubjects.map((subj, sIdx) => {
                const isSelected = selectedPathwaySubjectId === subj.id;
                return (
                  <button
                    key={subj.id}
                    type="button"
                    onClick={() => setSelectedPathwaySubjectId(subj.id)}
                    className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/90 dark:bg-blue-950/70 shadow-md ring-2 ring-blue-600/30 scale-[1.02]'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        科目 0{sIdx + 1}
                      </span>
                      <span className={`rounded-md px-1.5 py-0.2 text-[9px] font-mono font-bold ${
                        isSelected 
                          ? 'bg-blue-700 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {subj.badge}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1">
                      {subj.title.split('(')[0]}
                    </h3>
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 mt-0.5 line-clamp-1">
                      {subj.code}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Subject Showcase Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-9 shadow-sm space-y-8">
              {/* Subject Hero Metadata */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-blue-700 text-white font-mono text-xs font-bold px-2.5 py-1">
                      {currentPathwaySubject.code}
                    </span>
                    <span className="rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-mono text-xs font-bold px-2.5 py-1">
                      {currentPathwaySubject.credits}
                    </span>
                    <span className="rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-mono text-xs font-bold px-2.5 py-1">
                      📅 {currentPathwaySubject.academicYear}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {currentPathwaySubject.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                    {currentPathwaySubject.englishTitle}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans pt-1">
                    {currentPathwaySubject.summary}
                  </p>
                </div>

                {/* Licensure & Books Box */}
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 p-5 space-y-3 w-full lg:w-80 shrink-0">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">
                      國家考試對齊 (Licensure Mapping)
                    </span>
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 block">
                      {currentPathwaySubject.licensureMapping}
                    </span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-slate-800 pt-2 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold block">
                      推薦名師經典書目
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                      {currentPathwaySubject.recommendedBooks.map((book, bIdx) => (
                        <li key={bIdx} className="line-clamp-1">• {book}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Knowledge Points Detailed Stream */}
              <div className="space-y-10">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="size-5 text-blue-600 dark:text-blue-400" />
                    完整知識點教學、插畫圖示與 SOP 範例解析
                  </h4>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    共 {currentPathwaySubject.knowledgePoints.length} 個高階知識點
                  </span>
                </div>

                {currentPathwaySubject.knowledgePoints.map((kp, kpIdx) => (
                  <div
                    key={kp.id}
                    className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-gradient-to-b from-slate-50/40 via-white to-white dark:from-slate-950/40 dark:via-slate-900 dark:to-slate-950 p-6 sm:p-8 shadow-xs space-y-6"
                  >
                    {/* Knowledge Point Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="flex size-6 items-center justify-center rounded-lg bg-blue-700 text-white font-mono text-xs font-bold">
                            {kpIdx + 1}
                          </span>
                          <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-600 dark:text-slate-400">
                            {kp.category}
                          </span>
                          <span className="rounded-md bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-300">
                            {kp.licensureExamCode}
                          </span>
                        </div>
                        <h5 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {kp.term}
                        </h5>
                        <p className="text-xs font-mono text-slate-400 mt-0.5">
                          {kp.englishTerm}
                        </p>
                      </div>

                      {/* Direct Teaching Page Navigation Button */}
                      <Link
                        href={`/subjects/${kp.relatedLessonLink.subjectSlug}/${kp.relatedLessonLink.topicSlug}`}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/80 dark:bg-blue-950/60 px-3.5 py-2 text-xs font-bold text-blue-700 dark:text-blue-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition shadow-xs shrink-0 self-start group"
                      >
                        <span>進入《{kp.relatedLessonLink.title}》完整教學頁</span>
                        <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* Definition & Core Concepts */}
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                        {kp.definition}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                        {kp.coreConcepts.map((concept, cIdx) => (
                          <li
                            key={cIdx}
                            className="rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-sans shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                          >
                            <span className="text-blue-600 font-bold mr-1.5">•</span>
                            {concept}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Part 1: Visual Illustration Component */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                        <span>【插畫圖示】專屬空間與工程架構幾何剖面</span>
                      </div>
                      <PathwayIllustrationViewer illustration={kp.illustration} />
                    </div>

                    {/* Part 2: 3-Step SOP Worked Example Component */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                        <span>【範例解析】評圖與高考國家考試 SOP 解題演算</span>
                      </div>
                      <PathwayWorkedExampleCard example={kp.workedExample} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: 5-Year Progression Timeline */}
        {activeTab === 'progression' && (
          <div className="space-y-10 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  大學 5 年制建築學士 (B.Arch) 10 學期學習地圖
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  點選下方年級切換，細讀每個學期的必修課程配當與期末評圖里程碑。
                </p>
              </div>

              {/* Year Selector Pills */}
              <div className="flex gap-1.5 overflow-x-auto mobile-scroll p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                {bArchYears.map((y, idx) => (
                  <button
                    key={y.year}
                    type="button"
                    onClick={() => setSelectedYear(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      selectedYear === idx
                        ? 'bg-blue-700 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {y.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Year Detailed Card */}
            {(() => {
              const current = bArchYears[selectedYear];
              return (
                <div className="space-y-8">
                  <div className="rounded-3xl border border-blue-100 dark:border-blue-900/50 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40 p-6 sm:p-8 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="rounded-md bg-blue-700 text-white font-mono text-xs font-bold px-2.5 py-1 uppercase">
                          {current.year} 階段重點
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2">
                          {current.yearName}
                        </h3>
                        <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mt-0.5">
                          {current.englishTitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      {current.focus}
                    </p>

                    <div className="mt-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 p-4 text-xs text-amber-900 dark:text-amber-200 font-mono font-bold flex items-center gap-2">
                      <Award className="size-4 shrink-0 text-amber-600 dark:text-amber-400" />
                      <span>{current.milestone}</span>
                    </div>
                  </div>

                  {/* 2 Semesters Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {current.semesters.map((sem, sIdx) => (
                      <div
                        key={sem.sem}
                        className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs space-y-5"
                      >
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                          <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="flex size-7 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 font-mono text-xs font-bold text-blue-700 dark:text-blue-400">
                              {sIdx + 1}
                            </span>
                            {sem.sem}
                          </h4>
                          <span className="text-xs font-mono text-slate-400">
                            {sem.courses.length} 門核心課程
                          </span>
                        </div>

                        <div className="space-y-3.5">
                          {sem.courses.map((course) => (
                            <div
                              key={course.name}
                              className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors space-y-1.5"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <h5 className="font-serif font-bold text-sm text-slate-900 dark:text-white">
                                  {course.name}
                                </h5>
                                <span className="rounded bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-0.5 text-[10px] font-mono font-bold shrink-0">
                                  {course.credits}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                                {course.desc}
                              </p>
                              {(course.name.includes('電腦') || course.name.includes('BIM') || course.name.includes('參數化') || course.desc.includes('AutoCAD') || course.desc.includes('Revit')) && (
                                <Link
                                  href="/cad-software"
                                  className="inline-flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-mono font-bold pt-1"
                                >
                                  <span>🖥️ 建築電腦繪圖 (CAD/BIM) 專屬教學頁面 →</span>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 2: 8 Core Academic Pillars */}
        {activeTab === 'pillars' && (
          <div className="space-y-10 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  大學建築系 8 大核心學術領域深度解析
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  對齊考選部專技高考建築師六科大綱，掌握每一門學問的底層邏輯、公式與代表名作。
                </p>
              </div>

              {/* Search / Filter Input */}
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-2.5 size-4 text-slate-400" />
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder="搜尋領域知識點..."
                  className="w-full rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
                />
              </div>
            </div>

            {/* Pillar Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {filteredPillars.map((p) => {
                const IconComponent = p.icon;
                const isSelected = selectedPillar === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPillar(p.id)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/60 shadow-md ring-2 ring-blue-600/30'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                      <IconComponent className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block font-bold uppercase">{p.tag}</span>
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                        {p.title.split('(')[0]}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Detailed View */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-xs space-y-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-blue-700 text-white font-mono text-xs font-bold px-2.5 py-1 uppercase">
                      {currentPillarData.tag}
                    </span>
                    <span className="rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-mono text-xs font-bold px-2.5 py-1">
                      {currentPillarData.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {currentPillarData.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                    {currentPillarData.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPathwaySubjectId(currentPillarData.id);
                    setActiveTab('curriculum-hub');
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 shadow-sm transition shrink-0 cursor-pointer self-start lg:self-center"
                >
                  <BookMarked className="size-4" />
                  <span>進入本科目專屬教學庫（含插畫圖示與 SOP 範例）→</span>
                </button>
              </div>

              {/* Core Concepts Breakdown */}
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="size-5 text-blue-600 dark:text-blue-400" />
                  領域核心觀念與必備知識點 (Core Knowledge Points)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPillarData.keyConcepts.map((c, i) => (
                    <div
                      key={c.term}
                      className="rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 p-4 space-y-1.5"
                    >
                      <div className="flex items-center gap-2 font-serif font-bold text-sm text-slate-900 dark:text-white">
                        <span className="flex size-5 items-center justify-center rounded-full bg-blue-700 text-white font-mono text-[10px]">
                          {i + 1}
                        </span>
                        {c.term}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans pl-7">
                        {c.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Classic Literature & Studio Exercises */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                {/* Classic Books */}
                <div className="rounded-2xl border border-amber-200/50 dark:border-amber-900/30 bg-amber-50/30 dark:bg-amber-950/10 p-5 space-y-3">
                  <h5 className="font-serif font-bold text-sm text-amber-900 dark:text-amber-300 flex items-center gap-2">
                    <BookOpen className="size-4 text-amber-600" />
                    建築大師必讀經典教科書 (Essential Books)
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-sans">
                    {currentPillarData.classicBooks.map((book) => (
                      <li key={book} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{book}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Studio Projects */}
                <div className="rounded-2xl border border-blue-200/50 dark:border-blue-900/30 bg-blue-50/30 dark:bg-blue-950/10 p-5 space-y-3">
                  <h5 className="font-serif font-bold text-sm text-blue-900 dark:text-blue-300 flex items-center gap-2">
                    <Ruler className="size-4 text-blue-600" />
                    大學設計課典型訓練專案 (Studio Projects)
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-sans">
                    {currentPillarData.studioProjects.map((proj) => (
                      <li key={proj} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{proj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: High School to University Bridge */}
        {activeTab === 'bridge' && (
          <div className="space-y-10 animate-fade-in">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                高工建築科同學的「降維打擊」與「升維修練」指南
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                高職建築科畢業生在製圖、力學、材料與模型上擁有普高生望塵莫及的優勢。如何將技術優勢轉化為頂尖設計力？
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bridgeTips.map((tip, idx) => (
                <div
                  key={tip.category}
                  className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-blue-700 text-white font-mono text-sm font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                      {tip.category}
                    </h3>
                  </div>

                  {/* Your Strength */}
                  <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 p-4 space-y-1">
                    <div className="text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5" />
                      你的天然優勢 (Your Strength)
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      {tip.strength}
                    </p>
                  </div>

                  {/* Strategic Advice */}
                  <div className="rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 p-4 space-y-1">
                    <div className="text-[11px] font-mono font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                      <Sparkles className="size-3.5" />
                      大師級升階建議 (Upgrade Strategy)
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      {tip.advise}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* University Architecture Departments in Taiwan Overview */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="size-5 text-blue-600" />
                台灣頂尖大學建築學系所特色與技優/統測選才偏好
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { school: '國立成功大學 建築學系 (5年制)', feat: '歷史最悠久、結構構造與歷史理論底蘊極深、各界建築巨擘校友網絡遍佈。' },
                  { school: '東海大學 建築學系 (5年制)', feat: '設計批判評圖文化極具開創性、人本自由學風、路思義教堂地標與大師搖籃。' },
                  { school: '國立陽明交通大學 建築研究所', feat: '數位運算、前瞻構築、BIM 與智慧科技建築領航者。' },
                  { school: '國立臺灣科技大學 建築系 (4+1年)', feat: '技職體系最高殿堂！兼具國際競圖爆發力與營造工程施工實務。' },
                  { school: '國立臺北科技大學 建築系 (4年制)', feat: '百年工科名校！結合理論與實務，營建實務與專技建築師高考及格率極高。' },
                  { school: '淡江大學 / 逢甲大學 / 中原大學 (5年制)', feat: '私立建築三強！歷史悠久、校友人脈極強、評圖嚴謹且國際交流頻繁。' },
                ].map((item) => (
                  <div key={item.school} className="p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800 space-y-1.5">
                    <div className="font-serif font-bold text-sm text-slate-900 dark:text-white">{item.school}</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">{item.feat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: University Critique / Jury Survival Guide */}
        {activeTab === 'crit' && (
          <div className="space-y-10 animate-fade-in">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                大學評圖文化（Desk Crit & Final Jury）生存全攻略
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                建築系獨有的「評圖文化」是鍛造大師思維的熔爐。掌握 4 大黃金準則，在評審老師面前自信陳述！
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {critRules.map((rule) => (
                <div
                  key={rule.step}
                  className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-2xl bg-amber-500 text-white font-mono text-sm font-bold shadow-xs">
                      {rule.step}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Licensure Exam Six Subjects Matrix */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Award className="size-5 text-amber-500" />
                    專技高考建築師六大考科與大學課程對照矩陣
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    考選部國家考試採 60 分科別及格制（保留 3 年），大學 5 年打好地基，畢業即可從容過關。
                  </p>
                </div>
                <Link
                  href="/goals"
                  className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  查看完整專技三大證照地圖 →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { code: '科目一', name: '建築計畫與設計 (申論繪圖)', time: '6 小時實作', map: '對應大學 5 年 Architectural Design Studio I ~ X' },
                  { code: '科目二', name: '敷地計畫與都市設計 (申論繪圖)', time: '4 小時實作', map: '對應大學 敷地計畫、景觀生態與都市設計' },
                  { code: '科目三', name: '營建法規與實務 (選擇+申論)', time: '2 小時筆試', map: '對應大學 建築法、技術規則與事務所實務' },
                  { code: '科目四', name: '建築結構 (選擇+申論)', time: '2 小時筆試', map: '對應大學 工程力學、材料力學與結構系統' },
                  { code: '科目五', name: '建築構造與施工 (選擇+申論)', time: '2 小時筆試', map: '對應大學 建築構造、材料試驗與施工大樣' },
                  { code: '科目六', name: '建築環境控制 (選擇+申論)', time: '2 小時筆試', map: '對應大學 建築物理 (熱/光/聲/氣) 與 EEWH 綠建築' },
                ].map((exam) => (
                  <div key={exam.code} className="p-4 rounded-2xl bg-slate-50/60 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="rounded bg-slate-200 dark:bg-slate-800 px-2 py-0.5 font-bold text-slate-700 dark:text-slate-300">
                        {exam.code}
                      </span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold">{exam.time}</span>
                    </div>
                    <div className="font-serif font-bold text-sm text-slate-900 dark:text-white">{exam.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-sans">{exam.map}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Fast Action Callouts */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/curriculum"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors group space-y-1"
          >
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">前進統測起點</span>
            <span className="font-serif font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 flex items-center justify-between">
              高職 13 科課程地圖 →
            </span>
            <span className="text-xs text-slate-500 line-clamp-1">99 個先備知識點與五段式詳解</span>
          </Link>

          <Link
            href="/goals"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 transition-colors group space-y-1"
          >
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">國家考試頂層視野</span>
            <span className="font-serif font-bold text-base text-slate-900 dark:text-white group-hover:text-amber-600 flex items-center justify-between">
              三大專技高考證照地圖 →
            </span>
            <span className="text-xs text-slate-500 line-clamp-1">建築師、結構技師、土木技師</span>
          </Link>

          <Link
            href="/studio"
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-colors group space-y-1"
          >
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">動手實踐名築</span>
            <span className="font-serif font-bold text-base text-slate-900 dark:text-white group-hover:text-purple-600 flex items-center justify-between">
              台灣經典名築工坊 →
            </span>
            <span className="text-xs text-slate-500 line-clamp-1">路思義、歌劇院、101 幾何畫布</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
