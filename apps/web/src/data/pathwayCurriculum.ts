export interface PathwayStep {
  stepNumber: string;
  title: string;
  content: string;
  rationale: string;
}

export interface PathwayWorkedExample {
  title: string;
  scenario: string;
  question: string;
  difficulty: '基礎養成' | '進階推敲' | '高考建築師' | '大師實戰';
  steps: PathwayStep[];
  answer: string;
  eliteInsight: string;
}

export interface PathwayVisualHighlight {
  label: string;
  desc: string;
  badge?: string;
}

export interface PathwayIllustration {
  title: string;
  diagramDescription: string;
  svgType: 'spatial' | 'structure' | 'physics' | 'detailing' | 'site' | 'codes' | 'digital' | 'history';
  visualHighlights: PathwayVisualHighlight[];
}

export interface PathwayKnowledgePoint {
  id: string;
  term: string;
  englishTerm: string;
  category: string;
  definition: string;
  coreConcepts: string[];
  illustration: PathwayIllustration;
  workedExample: PathwayWorkedExample;
  relatedLessonLink: {
    subjectSlug: string;
    topicSlug: string;
    title: string;
  };
  licensureExamCode: string;
}

export interface PathwaySubject {
  id: string;
  code: string;
  title: string;
  englishTitle: string;
  credits: string;
  academicYear: string;
  iconName: string;
  badge: string;
  themeColor: string;
  summary: string;
  licensureMapping: string;
  recommendedBooks: string[];
  knowledgePoints: PathwayKnowledgePoint[];
}

export const pathwaySubjects: PathwaySubject[] = [
  // =========================================================================
  // 1. 建築設計與空間論述 (Architectural Design & Spatial Theory)
  // =========================================================================
  {
    id: 'studio',
    code: 'ARCH-101~502',
    title: '建築設計與空間論述 (Design Studio & Spatial Theory)',
    englishTitle: 'Architectural Design Studio I ~ X & Graduation Thesis',
    credits: '共 52 學分 (10 學期必修)',
    academicYear: '大一至大五貫穿',
    iconName: 'Building2',
    badge: '核心命脈',
    themeColor: 'blue',
    summary: '建築系 5 年每學期 5-6 學分的核心命脈。透過每週兩次「一對一桌評 (Desk Crit)」與定期「大評 (Jury)」，從人體尺度走入宏觀都市。',
    licensureMapping: '專技高考科目一：建築計畫與設計 (6小時申論繪圖)',
    recommendedBooks: [
      '《建築：形式、空間與秩序》— Francis D.K. Ching',
      '《建築的空間與形構》— Bernard Leupen',
      '《大師之作的解析》— Geoffrey H. Baker'
    ],
    knowledgePoints: [
      {
        id: 'studio-concept-narrative',
        term: '概念發想與空間敘事 (Concept Generation & Spatial Narrative)',
        englishTerm: 'Concept Generation & Spatial Narrative',
        category: '空間設計基礎',
        definition: '將社會議題、場所歷史或空間體驗提煉為強而有力的空間核心論述，杜絕空洞無意義的純視覺造型。透過「實體白模 (Massing Model)」與「空間計畫泡泡圖 (Bubble Diagram)」將抽象哲思轉化為嚴密的空間序列。',
        coreConcepts: [
          '議題提煉：將社會人口老化、微氣候多雨或歷史斷代轉換為空間矛盾焦點。',
          '泡泡圖機能分區：公共動線、半私密教學區與服務動線（機電/廁所/庫房）嚴格垂直與水平分離。',
          '幾何對位與軸線：以主要自然景觀視野、基地既有古樹或都市端景建立控制軸線。'
        ],
        illustration: {
          title: '空間敘事與機能泡泡圖對位拓撲圖解',
          diagramDescription: '展示由「抽象概念焦點」延伸至「空間泡泡圖分區 (Program Bubble Diagram)」，進而投影至「1:200 空間量體塊體模型 (Massing Blocks)」之三階段形態生成拓撲。',
          svgType: 'spatial',
          visualHighlights: [
            { label: '主次動線分離', desc: '主要公眾大廳貫穿全區，後勤與裝卸貨專用動線完全隱蔽', badge: 'Circulation' },
            { label: '空間高潮節點', desc: '於視線轉折處設置雙層挑高中庭，引入自然天光形成場所焦點', badge: 'Spatial Climax' },
            { label: '虛實量體穿透', desc: '實體機能方塊間留設通風綠廊，消除大體量對都市街區之壓迫感', badge: 'Void & Solid' }
          ]
        },
        workedExample: {
          title: '【Studio 評圖實戰】水岸社區活動中心空間計畫與動線配置',
          scenario: '大二 Studio 題目要求於淡水河畔規劃一座總樓地板面積 1200 m² 之社區活動中心，基地西側臨河、東側臨 12m 主要幹道。包含 300 m² 多功能展演廳、200 m² 里民圖書室與 150 m² 景觀咖啡廳。',
          question: '試擬定該專案之空間計畫配置原則，並說明如何利用剖面高差與水平動線化解水岸防汛與公眾通行之衝突。',
          difficulty: '進階推敲',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '基地環境與方位視線分析',
              content: '西側淡水河夕照具有極佳視覺景觀但伴隨午後西曬熱負荷；東側道路為主要人流車流入口。因此將景觀咖啡廳與展演廳大廳置於西側迎河面，外層配置 1.8m 深進深陽台與格柵垂直遮陽。',
              rationale: '景觀價值最大化同時以建築自體構造阻絕西曬眩光與熱量。'
            },
            {
              stepNumber: '步驟 2',
              title: '空間泡泡圖分區與垂直高差配置',
              content: '因應河岸防汛高程要求，將 1F 基地局部架空 (Pilotis) 作為半戶外透水穿堂，避免百年洪水浸淹；2F 設置高人流之多功能展演廳與咖啡廳，透過室外大階梯由地面層直接引導里民漫步登上觀景平台；3F 最安靜層設置圖書閱覽室。',
              rationale: '利用垂直機能分層界定動態公眾活動與靜態閱讀私密空間。'
            },
            {
              stepNumber: '步驟 3',
              title: '評圖防衛檢核與無障礙動線覆核',
              content: '檢核法規：大階梯旁必須配置坡度 1:12 之緩衝無障礙景觀坡道或景觀無障礙電梯直達 2F 觀景平台；消防車輛救災動線停靠於東側 12m 幹道，避開西側生態泥灘地。',
              rationale: '確保前瞻美學空間方案 100% 符合台灣建築技術規則與人本通用設計。'
            }
          ],
          answer: '透過「地面層架空防汛、二層水岸觀景平台、三層靜態閱覽」之三階垂直配置，搭配戶外大階梯與 1:12 景觀無障礙坡道，完美串聯都市幹道與河岸水岸生態。',
          eliteInsight: '評圖秒殺心法：永遠先畫「剖面圖 (Section)」！評審最看重空間高差變化與視線穿越，單純平鋪直敘的平面圖無法打動 Jury！'
        },
        relatedLessonLink: {
          subjectSlug: 'extensions',
          topicSlug: 'spatial-design',
          title: '空間設計基礎與機能泡泡圖'
        },
        licensureExamCode: '專技高考科目一：建築計畫與設計'
      },
      {
        id: 'studio-section-perspective',
        term: '透視剖面圖與空間縱深 (Perspective Section & Tectonic Depth)',
        englishTerm: 'Perspective Section & Tectonic Depth',
        category: '圖面表現技法',
        definition: '透視剖面圖 (Perspective Section) 是建築系表現空間靈魂的終極武器。結合工程剖面之「垂直構造切面 (Tectonic Cut)」與透視圖之「三維空間縱深 (Spatial Depth)」，同時展現結構骨架、光影穿透與人體活動尺度。',
        coreConcepts: [
          '割切位置選擇：剖切線必須切過建築最具挑戰之空間（如挑空天井、大跨度梁、複層樓梯）。',
          '線寬階級層次：割到之結構樓板與外牆使用最粗墨線 (0.7mm) 填黑，未切到之後退牆面使用細線 (0.18mm)。',
          '光線與空氣感：標註自然光入射角、熱壓通風路徑與人體剪影 (Scale Figures) 賦予真實生機。'
        ],
        illustration: {
          title: '透視剖面圖結構與空間光影透視圖解',
          diagramDescription: '剖析透視剖面之三大核心層次：前景厚重黑實結構切面、中景人體活動空間挑空、遠景淡化消失點幾何線條。',
          svgType: 'spatial',
          visualHighlights: [
            { label: '結構切面填黑', desc: '割切到之 RC 樓板與基樁塗黑，彰顯構造承載力流', badge: 'Poché' },
            { label: '空間挑空高差', desc: '錯層中庭形成垂直視線交流，打破水平樓板隔離', badge: 'Void Connection' },
            { label: '自然採光天井', desc: '斜屋頂高側窗引入均勻漫射北向天光，消除室內陰暗死角', badge: 'Clerestory Light' }
          ]
        },
        workedExample: {
          title: '【大評圖面示範】高差 4.5 米錯層圖書館之透視剖面表達',
          scenario: '學生於 Studio 設計一棟依山坡而建之社區圖書館，內部規劃有高差 4.5m 之錯層 (Split-level) 閱讀階梯中庭，屋頂為鋸齒形天窗 (Sawtooth Roof)。',
          question: '試說明如何繪製此專案之透視剖面圖，以精準向評審說明結構梁柱尺寸、採光天窗角度與讀者在階梯上的微型活動。',
          difficulty: '進階推敲',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '定位剖切面與視平線 (Eye Level)',
              content: '選擇正切過鋸齒天窗頂點與階梯中庭中央的縱向剖切線；視平線設定在二樓平台人眼高度 (+1.6m)，使讀者能同時俯瞰一樓閱覽區與仰望屋頂結構梁。',
              rationale: '視平線位置直接決定圖面的空間包覆感與戲劇張力。'
            },
            {
              stepNumber: '步驟 2',
              title: '構築結構厚度與材質構造 Poché',
              content: '繪製 40cm 厚之鋼筋混凝土斜屋頂板與 60×40cm 主結構梁，割切面以深灰色剖面填充；天窗玻璃帷幕繪出金屬扣件與雙層中空 Low-E 玻璃節點。',
              rationale: '展現建築系三年級以上必備之真實落地施工尺度掌控力。'
            },
            {
              stepNumber: '步驟 3',
              title: '置入人體尺度人偶與光影氛圍',
              content: '在階梯式閱覽座位上繪入坐姿、站姿、交談之不同人偶 (Scale Figures)，配合天窗射入之 45° 淡黃色光柱與地面陰影，直觀呈現生動場所氛圍。',
              rationale: '人體比例是評審檢視空間尺度是否合理的最直接尺規。'
            }
          ],
          answer: '以切過天窗與中央階梯之縱向切面為基準，建立 +1.6m 視平線，配合真實構造厚度填黑與 45° 採光光柱及活動人偶，完整傳達空間震撼力。',
          eliteInsight: '評圖口訣：「Section is King（剖面為王）」。平面圖只解決動線分配，唯有透視剖面能證明你真正掌握了三維空間的靈魂！'
        },
        relatedLessonLink: {
          subjectSlug: 'extensions',
          topicSlug: 'portfolio-and-design-discourse',
          title: '作品集排版與設計論述'
        },
        licensureExamCode: '專技高考科目一：建築計畫與設計'
      },
      {
        id: 'studio-tectonic-model-making',
        term: '構造尺度模型與空間媒材推演 (Scale Modeling & Tectonic Study)',
        englishTerm: 'Architectural Scale Modeling & Material Tectonics',
        category: '實體模型與空間推敲',
        definition: '建築設計 Studio 強調「手腦並用（Thinking through Making）」。從初期 1:500 敷地量體白模、中期 1:100 空間光影工作草模（Study Model）到後期 1:20 構造節點大比例剖面模型，不同比例尺對應嚴格的抽象化取捨（Level of Abstraction），是檢驗光影、重力與空間比例最真實的實驗場。',
        coreConcepts: [
          '比例尺抽象化階層：1:500 檢討都市天際線與退縮；1:200/1:100 檢討空間序列與版牆虛實；1:50/1:20 檢討梁柱接頭與遮陽表皮構造。',
          '媒材語彙轉譯：以灰卡紙／博物館卡紙表現清水混凝土量體，以椴木條表現集成材木構架，以噴砂壓克力表現半透明 U 型玻璃光盒。',
          '人眼視角模型攝影：將微距鏡頭降至模型基地 +1.6m 高程，搭配單向平行強光模擬冬夏太陽仰角，真實預演室內光影變化。'
        ],
        illustration: {
          title: '多尺度建築模型推演（1:500 量體 → 1:100 空間 → 1:20 構造剖面）圖解',
          diagramDescription: '展示三個不同設計階段之實體模型焦點演進：基地都市紋理量體模、可拆卸屋頂之空間動線草模、以及展現木鋼混構接頭與天窗遮陽細部之 1:20 剖面模型。',
          svgType: 'spatial',
          visualHighlights: [
            { label: '1:500 基地量體模', desc: '嵌合周邊街廓等高線底盤，檢驗量體高度、壓迫感與都市風廊開口', badge: 'Site Massing' },
            { label: '1:100 空間光影草模', desc: '可掀開式屋頂與樓板，直接以單向光源測試中庭漫射採光與動線序列', badge: 'Study Model' },
            { label: '1:20 構造大樣剖模', desc: '真實呈現梁柱斷面比例、外牆雙層表皮腔體與遮陽百葉構造邏輯', badge: 'Tectonic Section' }
          ]
        },
        workedExample: {
          title: '【Studio 評圖實戰】大三美術館設計之三階段模型推演與雷切圖檔規劃',
          scenario: '大三建築設計期末大評要求繳交一座「山林當代工藝美術館」之全套實體模型（含 1:500 敷地模型、1:100 全棟空間模型與 1:30 展廳採光天窗局部剖面模型）。',
          question: '試規劃這三座模型在媒材選擇、雷射切割圖層設定與大評現場展示時的敘事分工策略。',
          difficulty: '進階推敲',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '1:500 敷地等高線底盤與量體群落設定',
              content: '以 2mm 灰卡紙雷射切割疊合出每 1m 高差之山坡等高線地形；美術館量體使用實心椴木塊切削，直觀凸顯建築嵌入等高線之挖填平衡關係與周遭森林步道動線。',
              rationale: '小比例模型切忌雕琢窗框細節，應以單純材質對比呈現「基地紋理 vs. 建築量體」。'
            },
            {
              stepNumber: '步驟 2',
              title: '1:100 空間模型之雷切圖層清理與可拆式設計',
              content: '於 AutoCAD 執行 OVERKILL 清除重疊線並以 PEDIT 封閉聚合線，區分紅線（切斷）與藍線（雕刻柱網與地坪分割）。將屋頂桁架層與二樓主展廳設計為「可抽換卡榫模組」，方便評委在桌評時打開屋頂俯視室內動線。',
              rationale: '可拆卸式結構讓評審能一眼看穿垂直挑空與服務核心筒（Core）的配置合理性。'
            },
            {
              stepNumber: '步驟 3',
              title: '1:30 局部構造剖面模型與自然光影實測',
              content: '截取主展廳最關鍵的「北向鋸齒採光天窗＋清水混凝土雙T梁＋浮動木地板」一跨距（Bay），以 1:30 大比例製作剖面模型。以手電筒模擬夏至 80° 與冬至 43° 太陽入射角，拍攝模型內部無眩光漫射照片並排版於主展板中央。',
              rationale: '以實體大比例模型的光影實測照片佐證建築物理性能，說服力遠勝電腦渲染假圖。'
            }
          ],
          answer: '透過「1:500 灰卡椴木敷地模定調環境關係 → 1:100 可拆式白模檢證動線空間 → 1:30 展廳剖面大模實測天窗漫射光影」之三階模型矩陣，建立無懈可擊的評圖防線。',
          eliteInsight: '桌評黃金法則：去跟指導老師 Desk Crit 時，桌上永遠要擺「3 個不同方案的手作草模」！老師能直接動手幫你拔掉一塊量體或切開一個天井，互動效率比看筆電螢幕高十倍！'
        },
        relatedLessonLink: {
          subjectSlug: 'extensions',
          topicSlug: 'portfolio-models',
          title: '作品集製作與實體模型表達'
        },
        licensureExamCode: '專技高考科目一：建築計畫與設計'
      }
    ]
  },

  // =========================================================================
  // 2. 建築歷史與理論批判 (History & Theory)
  // =========================================================================
  {
    id: 'history',
    code: 'ARCH-111~312',
    title: '建築歷史與理論批判 (History & Theory of Architecture)',
    englishTitle: 'History of Western, Eastern & Contemporary Architecture',
    credits: '共 12 學分 (4 學期必修)',
    academicYear: '大一至大三',
    iconName: 'BookOpen',
    badge: '思維底蘊',
    themeColor: 'amber',
    summary: '建築不是憑空捏造，而是數千年人類文明思想與技術的結晶。掌握古典、現代至當代思潮，為設計注入深邃靈魂。',
    licensureMapping: '專技高考科目三：建築歷史與理論思潮 (融合於設計申論)',
    recommendedBooks: [
      '《現代建築史：一部批判性的歷史》— Kenneth Frampton',
      '《建築的詩學：十九與二十世紀建築的形構》— Kenneth Frampton',
      '《台灣建築史綱》— 傅朝卿'
    ],
    knowledgePoints: [
      {
        id: 'history-modernist-masters',
        term: '現代主義建築思潮與科比意新建築五點',
        englishTerm: 'Modernist Movement & Le Corbusier\'s Five Points',
        category: '近現代建築史',
        definition: '20 世紀初工業革命與鋼筋混凝土 (RC) 技術成熟，現代主義大師科比意 (Le Corbusier) 於 1926 年提出著名的「新建築五點 (Five Points of Architecture)」，徹底宣告承重牆時代結束，解放了建築形體自由。',
        coreConcepts: [
          '底層架空 (Pilotis)：利用 RC 柱將地面層架空，土地還給花園與行人流通。',
          '屋頂花園 (Roof Garden)：平屋頂恢復被建築佔據的綠地，兼具隔熱防漏功能。',
          '自由平面 (Free Plan)：框架柱梁承重，內部隔間牆可隨機能任意自由劃分。',
          '橫向長窗 (Ribbon Window)：外牆不承重，開窗可沿水平向全面連續展開獲得充足採光。',
          '自由立面 (Free Facade)：外皮如同獨立帷幕懸掛於柱列外側，形塑自由造型。'
        ],
        illustration: {
          title: '科比意薩伏伊別墅新建築五點立體透視圖解',
          diagramDescription: '圖解傳統磚石承重牆結構與現代 RC 骨架 (Dom-Ino System) 結構之本質差異，視覺化呈現底層架空、屋頂花園、自由平面、帶狀長窗與自由立面。',
          svgType: 'history',
          visualHighlights: [
            { label: '多米諾系統 (Dom-Ino)', desc: '六根細柱、三塊樓板與一座樓梯構成的最簡工業化鋼筋混凝土骨架', badge: 'Prototype' },
            { label: '帶狀橫向長窗', desc: '連續水平無立柱開窗，引進 180 度全景自然光線', badge: 'Ribbon Window' },
            { label: '屋頂日光浴室', desc: '平屋頂設置弧形防風牆與日光花園，象徵現代衛生與陽光崇拜', badge: 'Solarium' }
          ]
        },
        workedExample: {
          title: '【歷史理論考題】論現代主義多米諾 (Dom-Ino) 系統對自由平面的革命意義',
          scenario: '專技高考建築師申論題：「試分析 1914 年科比意提出之 Dom-Ino 結構原型，如何推動傳統磚石建築轉變為現代建築自由平面與自由立面？」',
          question: '請從力學力流傳遞、牆體功能分離與空間劃分三個面向進行深度申論。',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '結構力學力流傳遞之根本轉移',
              content: '傳統磚石構造中，牆體同時扮演「承受垂直荷載」與「空間分隔外皮」的雙重角色，開口受限於磚石拱券跨度。Dom-Ino 系統將垂直載重全數集中於少數細柱，使牆體徹底卸去承重負擔。',
              rationale: '力學傳力構件（柱梁）與空間圍合構件（牆板）在物理上徹底解耦。'
            },
            {
              stepNumber: '步驟 2',
              title: '空間平面劃分的自由度解放',
              content: '在承重牆時代，上下樓層牆體必須嚴格上下對齊重疊以防壓潰；而在 Dom-Ino 框架下，室內隔間成為二次輕質構件，每層平面可依據機能獨立配置（自由平面 Free Plan），甚至可在空間內部創造挑空與流動空間。',
              rationale: '功能決定形式 (Form Follows Function) 在空間布局上的真實落地。'
            },
            {
              stepNumber: '步驟 3',
              title: '外立面表情與採光邊界的解放',
              content: '柱列由外牆向內退縮 (Cantilever Slab)，外牆外皮成為懸掛於樓板邊緣的非承重帷幕（自由立面 Free Facade），因而能開闢連續無柱阻擋之水平橫向帶狀長窗 (Ribbon Window)。',
              rationale: '現代主義核心價值：光線、空氣、衛生與工業預製標準化之實踐。'
            }
          ],
          answer: 'Dom-Ino 系統透過將承重結構集中於少數點狀柱，使牆體從沉重荷載中徹底解放，從而實現了上下層機能獨立的自由平面，以及水平全景開窗的自由立面，奠定現代建築百年基礎。',
          eliteInsight: '歷史答題要訣：切忌只背五個名詞！評審想看的是「構造技術進步如何催生新的空間美學形式」的因果邏輯鏈條！'
        },
        relatedLessonLink: {
          subjectSlug: 'history',
          topicSlug: 'architectural-history',
          title: '建築歷史與世界思潮'
        },
        licensureExamCode: '專技高考科目三：營建法規與實務 (含建築歷史思潮)'
      },
      {
        id: 'history-classical-timber-module',
        term: '東方古典大木作與北宋《營造法式》材分模矩 (Classical Timber Tectonics)',
        englishTerm: 'East Asian Timber Frame, Dougong & Yingzao Fashi Modular System',
        category: '東方古典建築史',
        definition: '東亞傳統木構建築以「抬梁式」與「穿斗式」為兩大結構原型，透過「榫卯柔性接頭、斗拱懸挑減震、柱礎隔震與舉折反宇大屋頂」抵抗強震與豪雨。北宋李誡於 1103 年編修《營造法式》，首創以斗拱拱身斷面「材（八等材，高15分、寬10分）」作為全棟梁柱開間與構件預製的標準化模矩（Module），比西方現代標準化預製早八百年。',
        coreConcepts: [
          '材分制模矩（Module）：將建築等級分為八等材，單材高 15 分、寬 10 分，加上 6 分栔合稱「足材（21分）」，一切柱高、梁跨皆以「分」為比例基準。',
          '斗拱結構演變：唐宋斗拱碩大（達柱高 1/3~1/2），具出檐懸臂支撐與地震摩擦消能實效；明清斗拱縮小為柱高 1/10，改由深挑檐檁承重並以「斗口制」計量。',
          '抗震三道防線：① 台基柱礎「浮擱」平擺隔震；② 梁柱榫卯與斗拱群「半剛性摩擦耗能」；③ 厚重瓦頂壓重提供「重力復位力矩」。'
        ],
        illustration: {
          title: '傳統大木作三段式抗震架構與《營造法式》材栔斗拱分解圖解',
          diagramDescription: '剖析傳統殿堂「台基、屋身柱網斗拱、舉折反宇屋頂」三段式垂直傳力機制，以及單材（15×10分）與足材（21×10分）之標準模矩比例。',
          svgType: 'history',
          visualHighlights: [
            { label: '八等材分模矩', desc: '拱斷面高寬比恆為 15:10 (3:2)，實現木構件跨地域標準化預製與工料精算', badge: '15:10 Module' },
            { label: '斗拱懸挑消能', desc: '由斗、升、拱、昂層層出跳，如彈簧支座般吸收水平地震剪力並支撐深遠出檐', badge: 'Dougong Bracket' },
            { label: '側腳與生起', desc: '外圈檐柱向內微傾（側腳）並往角柱遞增柱高（生起），大幅強化木構架向心穩定度', badge: 'Inward Tilt' }
          ]
        },
        workedExample: {
          title: '【建築史比較申論】唐宋與明清大木作結構特徵演變及傳統木構耐震機理解析',
          scenario: '研究所與高考建築史經典試題：「試從北宋《營造法式》至清代《工程做法則例》的演變，比較唐宋與明清官式木構建築在斗拱機能、屋頂曲線與空間構造上的差異，並闡述傳統木構屹立千年不倒之耐震力學原理。」',
          question: '請由「模矩制度」、「斗拱與梁架關係」及「三階段耐震減震機制」分點論述。',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '比較宋「材分制」與清「斗口制」模矩演進',
              content: '北宋《營造法式》採「八等材分制」，以拱高 15 分、寬 10 分為基準；清代《工程做法則例》則簡化為十一等「斗口制」，直接以坐斗開口寬度（即材厚 10 分）為 1 斗口作為全棟模數，反映官式營造更趨定型化與工料速算化。',
              rationale: '模矩單位由二維（材高＋材厚）簡化為一維（斗口寬），加速明清皇家大規模營建效率。'
            },
            {
              stepNumber: '步驟 2',
              title: '剖析唐宋至明清斗拱退化與屋頂舉折／舉架差異',
              content: '唐宋大木作採「草栿與明栿」雙層架構，斗拱碩大（約柱高 1/2~1/3），直接承托深遠出檐，屋頂採「先定總舉高、由上而下折算」之《舉折法》，屋坡舒緩優美；明清廢除草栿改為單一推山架梁，斗拱萎縮至柱高 1/10 淪為裝飾墊塊，屋頂採「由下而上步架加高」之《舉架法》，屋頂更為陡峭高聳。',
              rationale: '大徑原木資源枯竭促使明清放棄巨型斗拱，改以大梁直接挑檐。'
            },
            {
              stepNumber: '步驟 3',
              title: '論證傳統木構架之現代耐震力學對應',
              content: '傳統木構對應現代耐震三大科技：① 柱腳浮擱於石柱礎上不插栓＝現代「摩擦擺隔震支承」，地震過大時微幅滑移截斷地震波；② 萬千榫卯與斗拱摩擦變形＝現代「黏彈阻尼消能器」，吸收大量地震能量；③ 柱列「側腳、生起」加上數十噸屋頂瓦作壓重＝提供強大「搖擺自復位（Rocking Self-Centering）」機制。',
              rationale: '以現代結構動力學（隔震、消能、自復位）詮釋古典營造智慧，展現跨學科整合深度。'
            }
          ],
          answer: '唐宋木構以碩大斗拱承重、八等材分制與舒緩舉折屋頂展現結構真實性；明清則轉為斗口制、小斗拱密排與高聳舉架。其千年抗震核心在於「柱礎滑移隔震、榫卯斗拱摩擦消能、側腳生起與重頂壓重自復位」三大力學機制。',
          eliteInsight: '申論高分關鍵：答中國與台灣建築史時，畫出一張「唐宋大斗拱緩屋頂 vs. 明清小斗拱陡屋頂」的剖面對照簡圖，並標上「側腳、生起、材分 15:10」，閱卷教授直接給滿分！'
        },
        relatedLessonLink: {
          subjectSlug: 'history',
          topicSlug: 'chinese-history',
          title: '中國建築史：形制、工藝與《營造法式》'
        },
        licensureExamCode: '專技高考科目三/五：建築歷史思潮與傳統構造'
      },
      {
        id: 'history-taiwan-adaptive-reuse',
        term: '台灣近代建築史脈絡與文化資產保存再利用 (Taiwan Heritage & Adaptive Reuse)',
        englishTerm: 'Taiwan Architectural History, Venice Charter & Adaptive Reuse',
        category: '台灣建築史與文資保存',
        definition: '台灣建築史是多重政權與風土交織的立體史書：從南島語族氣候調適屋宅、荷西棱堡、清領閩客傳統合院與紅磚洋樓、日治時期市區改正與西洋歷史式樣（辰野式、馬薩式、折衷主義、現代主義萌芽），到戰後粗獷主義與地域主義。當代建築師面對古蹟與歷史建築時，必須遵循《威尼斯憲章》與《文化資產保存法》之「原真性、可逆性、最小干預與新舊可辨識」四大原則進行空間活化再利用（Adaptive Reuse）。',
        coreConcepts: [
          '日治近代建築譜系：初期外廊殖民式 → 中期辰野金吾式（紅磚＋白色水平飾帶，如總統府）與馬薩雙折屋頂 → 1930年代折衷主義、裝飾藝術（Art Deco）與現代主義水平流線窗。',
          '《威尼斯憲章》修復四鐵律：① 真實性（Authenticity，保留各時代歷史疊加，不憑空臆測假造）；② 最小干預；③ 可逆性（Reversibility，現代補強鋼構未來可無損卸除）；④ 新舊可辨識（新構件具當代印記，不魚目混珠）。',
          '舊建築適應性再利用（Adaptive Reuse）：以「盒中盒（Box-in-Box）」或脫開式輕鋼構置入新機能與無障礙空調管線，既保護古蹟磚木本體又賦予當代公共生命。'
        ],
        illustration: {
          title: '日治歷史建築「新舊共構（可逆性鋼構置入與原真性磚拱保存）」剖面圖解',
          diagramDescription: '圖解一座日治紅磚辰野式產業遺產改造為當代設計展館：外圍保留紅磚拱牆與木桁架（原真性），內部以脫開 30cm 之自承重輕鋼構玻璃空橋置入二樓展廊與空調風管（可逆性與可辨識性）。',
          svgType: 'history',
          visualHighlights: [
            { label: '原真性保存 (Authenticity)', desc: '完整保留日治辰野式紅磚牆、白灰泥飾帶與芬克式木洋小屋桁架，不塗抹假新漆', badge: 'Heritage Fabric' },
            { label: '可逆性鋼構盒 (Reversible Insert)', desc: '新設黑色H型鋼夾層採用獨立微型基樁與螺栓接合，與古蹟磚牆脫開 30cm 不傳遞荷載', badge: 'Reversible Steel' },
            { label: '新舊可辨識對話', desc: '現代極簡黑鋼玻璃與百年溫潤紅磚形成清晰時代對話，杜絕仿古造假', badge: 'Tectonic Dialogue' }
          ]
        },
        workedExample: {
          title: '【古蹟再利用設計實戰】日治紅磚倉庫群（歷史建築）轉型社區青創圖書館方案',
          scenario: '大四 Studio 與高考敷地設計題目：基地內有一座 1920 年代日治時期紅磚砂糖倉庫（已登錄為歷史建築，牆體為承重紅磚造、屋頂為大跨度木造洋小屋桁架）。業主欲將其活化再利用為「複合式青創基地與社區圖書館」，並需增設二樓夾層、電梯與現代空調照明。',
          question: '試依據《文化資產保存法》與國際《威尼斯憲章》，擬定結構補強、新機能置入與設備管線整合之三大空間操作策略。',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '非破壞檢測與古蹟本體「最小干預」修復',
              content: '施工前先以 3D 雷射掃描建立點雲 BIM 模型，並以應力波與紅外線熱像儀檢測木桁架腐朽與磚牆裂縫。磚牆採低壓環氧樹脂／無收縮灰漿灌注修補並以傳統白灰勾縫；木桁架損壞處採「墩接（局部抽換）」保留 80% 以上原木構件。',
              rationale: '落實原真性（Authenticity）與最小干預原則，最大化保存歷史材料與工藝證據。'
            },
            {
              stepNumber: '步驟 2',
              title: '「盒中盒（Box-in-Box）」獨立輕鋼構夾層置入',
              content: '嚴禁將新設二樓夾層的梁直接鑿入古蹟紅磚承重牆！改於室內地板設置獨立淺基礎與細長黑色H型鋼柱網，距離古蹟紅磚內牆退縮 45cm，打造一座自承重的「懸浮鋼構書架夾層」與透明無障礙電梯塔。',
              rationale: '完全符合《威尼斯憲章》之「可逆性（未來可全數拆移除而不傷古蹟分毫）」與「新舊材質清晰可辨識」。'
            },
            {
              stepNumber: '步驟 3',
              title: '高架地板管線整合與屋頂木桁架視覺解放',
              content: '一樓全面鋪設 25cm 高之架空木地板，將空調冰水管、送風箱與電力弱電管線全數隱藏於高架地板下方，由地面出風口上送冷氣；彻底解放上方日治木造洋小屋桁架，不懸掛任何雜亂風管，並以溫暖洗牆燈烘托百年木構之美。',
              rationale: '解決古蹟再利用最棘手的機電空調管線視覺破壞問題，兼顧熱舒適度與歷史空間莊嚴感。'
            }
          ],
          answer: '採「非破壞檢測與木構局部墩接保原真 → 室內退縮 45cm 置入獨立自承重黑鋼夾層保可逆與可辨識 → 架空地板下置空調管線解放百年木桁架視野」三部曲，完美實現文資保存與當代活化雙贏。',
          eliteInsight: '建築師高考大設計必考趨勢：近年高考與各校競圖極愛考「基地內含一棟歷史建築／老樹／舊倉庫」的再利用題目！只要畫出「新鋼構夾層與舊磚牆脫開 45cm 挑空縫隙＋架空地板藏管線」的剖面大樣，就是穩拿高分的標準答案！'
        },
        relatedLessonLink: {
          subjectSlug: 'history',
          topicSlug: 'cultural-heritage',
          title: '文化資產保存與古蹟修復工程'
        },
        licensureExamCode: '專技高考科目一/五：舊建築再利用設計與古蹟修復規範'
      }
    ]
  },

  // =========================================================================
  // 3. 建築構造與細部設計 (Tectonics & Detailing)
  // =========================================================================
  {
    id: 'construction',
    code: 'ARCH-221~422',
    title: '建築構造與細部設計 (Tectonics & Construction Detailing)',
    englishTitle: 'Building Construction, Detailing & Materials Tectonics',
    credits: '共 16 學分 (4 學期必修)',
    academicYear: '大二至大四',
    iconName: 'Layers',
    badge: '實體落地',
    themeColor: 'teal',
    summary: '好設計死在爛細部！大師如密斯凡德羅曾言「上帝藏在細部之中 (God is in the details)」。學習建築材料如何精確接合與防水抗風。',
    licensureMapping: '專技高考科目五：建築構造與施工 (選擇50% + 申論大樣50%)',
    recommendedBooks: [
      '《建築構造圖解》— Francis D.K. Ching',
      '《建築細部大樣設計手冊 (Detail)》— Christian Schittich',
      '《建築材料與施工法》— 內政部國土署編著'
    ],
    knowledgePoints: [
      {
        id: 'construction-rc-detailing',
        term: '鋼筋混凝土梁柱接頭與耐震配筋大樣 (RC Joint Detailing)',
        englishTerm: 'Reinforced Concrete Beam-Column Joint Detailing',
        category: '結構構造細部',
        definition: '鋼筋混凝土 (RC) 建築在地震中的主要破壞點多發生在梁柱接頭 (Beam-Column Joint)。依據台灣耐震設計規範與 CNS 規範，接頭核心區必須配置緊密之封閉式剪力箍筋，並嚴格遵循主筋 135° 耐震彎鉤與搭接長度，以確保「強柱弱梁、強剪弱彎」之延展性破壞模式。',
        coreConcepts: [
          '強柱弱梁原則：柱的抗彎容量總和必須大於梁的抗彎容量總和（ΣMc ≥ 1.2 ΣMb），避免樓層整體瞬間軟弱坍塌。',
          '核心區箍筋加密：接頭內部剪力極大，箍筋間距縮減至 10-15cm，且端點必須具備 135° 耐震彎折（伸入核心區至少 6db 或 7.5cm）。',
          '鋼筋搭接位置避開塑性鉸區：柱鋼筋搭接嚴禁設於梁底或柱腳等最大彎矩區，必須設於柱高中間 1/2 區域。'
        ],
        illustration: {
          title: 'RC 梁柱接頭 1:10 標準耐震配筋大樣剖面圖解',
          diagramDescription: '展示 RC 邊柱與主梁交會接頭內部：梁主筋錨定 90° 彎折向內勾入柱心、柱核心區封閉密排箍筋、135° 防震耐震鉤與混凝土保護層厚度標示。',
          svgType: 'detailing',
          visualHighlights: [
            { label: '135° 耐震彎鉤', desc: '保護層混凝土剝落時，箍筋仍緊密錨定在核心混凝土內部不爆開', badge: '135° Hook' },
            { label: '核心區密排箍筋', desc: '限制內部混凝土側向膨脹，提供極佳塑性變形延展能力', badge: 'Confining Steel' },
            { label: '梁筋錨定長度 (Ldh)', desc: '主筋端點以 90° 標準彎鉤勾入柱核心深處，防止地震拉拔脫落', badge: 'Development Length' }
          ]
        },
        workedExample: {
          title: '【專技高考建築師大樣題】繪製 RC 邊梁與外柱交接之 1:20 耐震配筋施工剖面大樣',
          scenario: '國家考試試題：一棟 7 層樓 RC 住宅，外柱斷面 60×60 cm，主梁斷面 40×70 cm。試繪製邊柱梁接頭剖面大樣，標明主筋、箍筋配置與耐震錨定要求。',
          question: '請列出三項關鍵耐震細部法規要求，並計算梁上層主筋錨定入柱心之最小長度原則。',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '審查規範幾何與斷面配置',
              content: '柱尺寸 60×60 cm，主筋配置 12-D25；梁尺寸 40×70 cm，上層主筋 4-D25，下層主筋 3-D25，剪力箍筋 D13。混凝土規定抗壓強度 fc\' = 280 kgf/cm²，鋼筋降伏強度 fy = 4200 kgf/cm²。',
              rationale: '依據台灣建築物耐震設計規範與 ACI 318 建立標準設計條件。'
            },
            {
              stepNumber: '步驟 2',
              title: '梁主筋錨定與 90° 彎鉤計算',
              content: '梁上層負彎矩筋受拉拔力，進入柱心後延伸至柱外側鋼筋內側，向下折彎 90°，彎折後延伸長度不得小於 12db = 12 × 2.54 = 30.5 cm。受拉標準彎鉤伸展長度 Ldh 需大於 8db 且不小於 15cm。',
              rationale: '確保在極限地震載重下，鋼筋能達到降伏強度而不致產生拔出破壞。'
            },
            {
              stepNumber: '步驟 3',
              title: '接頭核心區箍筋密排配置檢核',
              content: '梁柱接頭淨高範圍內，垂直柱箍筋間距不得大於柱最小寬度之 1/4 (60/4 = 15cm)、8 倍主筋直徑 (8 × 2.54 = 20.3cm) 或 10cm。故接頭內部採用 D13 @ 10cm 密排箍筋，每根箍筋均具 135° 耐震鉤。',
              rationale: '核心區密排圍束可提供混凝土側向三軸圍束應力，大幅提升抗壓極限應變。'
            }
          ],
          answer: '梁主筋延伸至柱外側向內彎折 90° (尾端延伸 ≥ 12db)，梁柱接頭淨區內配置 D13 @ 10cm 具 135° 耐震鉤之密排箍筋，搭接位置固定於柱身中段 1/2 淨高區。',
          eliteInsight: '建築師高考得分密碼：考大樣圖時，「標示尺寸、鋼筋號數、保護層 4cm、135° 彎鉤」缺一不可！畫圖比寫字更能決定是否拿到 40 分以上及格高分！'
        },
        relatedLessonLink: {
          subjectSlug: 'extensions',
          topicSlug: 'construction-methods',
          title: '建築構造與先進工法實務'
        },
        licensureExamCode: '專技高考科目五：建築構造與施工'
      },
      {
        id: 'construction-envelope-waterproofing',
        term: '平屋頂倒置式防水隔熱與外牆滴水線收頭大樣 (Roof Waterproofing & Drip Edge)',
        englishTerm: 'Inverted Roof Waterproofing, Thermal Insulation & Drip Edge Detailing',
        category: '防水與隔熱細部',
        definition: '台灣高溫多雨且日夜溫差大，建築漏水與壁癌 90% 源於收頭細部失敗。現代標準「倒置式平屋頂（Inverted Roof）」將耐水高密度 XPS 隔熱板置於防水層「上方」，保護防水膜免受紫外線降解與劇烈熱脹冷縮；女兒牆隅角則須加做 45° 八字角（Cant Strip）、防水層上翻 ≥ 30cm 並於壓頂向內洩水設滴水線（Drip Groove）。',
        coreConcepts: [
          '倒置式屋頂五層次（由下而上）：RC 結構樓板 → 1:50~1:100 輕質水泥砂漿洩水坡度找平層 → 複合防水層（PU／改質瀝青毯）→ XPS 擠塑隔熱板 → 不織布隔離層與壓重保護面磚（四周留伸縮縫）。',
          '女兒牆防水收頭四寶：牆角 5×5cm 水泥砂漿八字角防直角折裂、防水層沿牆上翻 ≥ 30cm、金屬壓條加矽利康封邊、女兒牆頂蓋板向內傾斜 1:10 並刻 1.5cm 滴水溝槽。',
          '外牆開口滴水線原理：於陽台挑檐、窗楣與窗台下緣距外緣 2~3cm 處凹設 1.5×1.5cm 滴水線（或裝設滴水鋁條），利用重力切斷雨水表面張力毛細逆流，根絕外牆黑斑水痕與窗框滲水。'
        ],
        illustration: {
          title: '平屋頂女兒牆 1:10 倒置式防水隔熱收頭與滴水線大樣圖解',
          diagramDescription: '詳細繪製 RC 屋頂板、1/50 洩水層、八字角緩和轉折、防水層上翻 30cm 壓條固定、XPS 隔熱板、伸縮縫泡沫棒與女兒牆頂向內斜水加滴水線之完整構造節點。',
          svgType: 'detailing',
          visualHighlights: [
            { label: '倒置式 XPS 護膜', desc: '將 XPS 保溫板鋪於防水層上方，阻絕紫外線與 60°C 溫差熱應力，延長防水壽命 3 倍', badge: 'Inverted Roof' },
            { label: '八字角與上翻 30cm', desc: '牆角 45° 抹平避免防水毯直角撕裂，上翻 30cm 高於颱風暴雨瞬時積水線', badge: '30cm Turn-up' },
            { label: '斷水滴水溝 (Drip Groove)', desc: '檐口與窗台下緣 15×15mm 凹槽強制水滴脫離牆面墜落，切斷表面張力回流', badge: 'Surface Tension Cut' }
          ]
        },
        workedExample: {
          title: '【建築製圖乙級＆建築師高考大樣】1:10 平屋頂女兒牆與落水頭防水收頭施工圖繪製',
          scenario: '建築製圖應用乙級術科與建築師高考必考大樣題：試繪製 RC 平屋頂與女兒牆交接處（含排水溝與高腳落水頭）之 1:10 構造大樣圖，並標註所有層次材料名稱與法定關鍵尺寸。',
          question: '請說明由結構層至面層之正確施工順序，並解釋為何泡沫混凝土壓重保護層每隔 3~4m 必須留設伸縮縫。',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '基底處理、八字角與洩水坡度層施作',
              content: '於 15cm RC 屋頂結構板上先以 1:3 水泥砂漿粉刷出 1/50~1/100 朝向落水頭之洩水坡度；在屋頂板與女兒牆垂直交角處，以水泥砂漿抹出 5×5cm 之 45° 八字角（或圓弧角），並在排水溝旁預埋鑄鐵或高腳不鏽鋼落水頭。',
              rationale: '防水毯或 PU 塗膜在 90° 尖銳直角處極易因結構微裂或應力集中而拉裂穿孔。'
            },
            {
              stepNumber: '步驟 2',
              title: '複合防水層塗佈、上翻收頭與試水檢驗',
              content: '塗刷底油（Primer）後施作 3mm 厚聚氨酯（PU）或烘烤改質瀝青防水毯，隅角加貼抗裂玻纖網；防水層必須順著女兒牆立面向上延伸至少 30cm（高於最高積水位），頂端以鋁合金壓條鎖固並打耐候矽利康封口，完成後進行 48~72 小時蓄水試驗。',
              rationale: '上翻 30cm 搭配金屬壓條機械固定，可防止防水層邊緣受熱捲曲剝離及雨水從背後竄流。'
            },
            {
              stepNumber: '步驟 3',
              title: 'XPS 隔熱層、伸縮縫留設與女兒牆頂滴水線',
              content: '於防水層上方鋪設 50mm 厚 XPS 隔熱板與透水不織布，再澆置 5~6cm 輕質泡沫混凝土與貼隔熱面磚。面層與女兒牆根部須留設 20mm 寬伸縮縫（內填發泡 PE 背填棒＋彈性密封膠），且屋頂面每隔 3m×3m 設分割伸縮縫；女兒牆壓頂向屋頂內側做 1/10 洩水坡度，內外側下緣皆刻 15×15mm 滴水線。',
              rationale: '若面層水泥無伸縮縫直接頂死女兒牆，夏季高溫熱膨脹推力將把女兒牆根部推裂導致嚴重漏水。'
            }
          ],
          answer: '施工順序為：RC 樓板＋5cm 八字角 → 1/50 洩水坡度層 → 複合防水層（上翻女兒牆 ≥ 30cm 壓條封口）→ 50mm XPS 隔熱板 → 不織布 → 保護面層（距牆邊留 20mm 伸縮縫，每 3m 分割）。女兒牆壓頂向內斜水並設 1.5cm 滴水線。',
          eliteInsight: '大樣圖閱卷秒殺點：閱卷委員看屋頂女兒牆大樣只抓四個地方：① 牆角有沒有畫 45° 八字角？② 防水層有沒有往上翻 30cm 並畫出收頭壓條？③ 保護層跟女兒牆之間有沒有留 2cm 伸縮縫？④ 女兒牆頂蓋有沒有往內斜＋畫滴水線？四點全中直接拿滿分！'
        },
        relatedLessonLink: {
          subjectSlug: 'materials',
          topicSlug: 'admixtures-waterproofing',
          title: '摻料、防水隔熱材料與軀體防護'
        },
        licensureExamCode: '專技高考科目五：建築構造與施工'
      },
      {
        id: 'construction-unitized-curtain-wall',
        term: '超高層單元式玻璃帷幕牆與等壓排水細部 (Unitized Curtain Wall Systems)',
        englishTerm: 'Unitized Curtain Wall, Rainscreen Pressure Equalization & Seismic Drift Joint',
        category: '現代外牆帷幕系統',
        definition: '超高層建築外牆普遍採用「單元式玻璃帷幕牆（Unitized Curtain Wall）」，在工廠恆溫環境下將雙層 Low-E 複層玻璃、斷熱鋁擠型框與結構矽利康組裝為單層高之完整板塊，運至工地直接以樓層吊機掛裝於結構樓板邊梁之三維可調式預埋鐵件（Anchor）。其防水核心並非僅靠表面打膠堵水，而是運用「雨幕等壓原理（Rainscreen Pressure Equalization）」消除內外風壓差，並透過公母料伸縮縫吸收地震層間變位。',
        coreConcepts: [
          '單元式（Unitized）vs. 直欞式（Stick）：單元式於工廠完成 100% 組立打膠、現場免外鷹架快速吊掛，品質與抗震變位能力遠優於現場散件組裝的直欞式。',
          '雨幕等壓腔原理（Pressure-Equalized Rainscreen）：外層膠條僅擋大水並留設通氣排水孔，使鋁框內部「等壓腔（Air Chamber）」氣壓瞬間等於室外強風風壓（ΔP = 0），水滴失去向內推擠的壓力差而由重力自然排向室外。',
          '層間變位吸收與層間防火塞：上下左右單元板塊透過公母鋁料（Mullion & Transom）插接並留設 15~25mm 變位縫，地震時板塊可微幅滑動錯位而不擠碎玻璃；樓板與帷幕牆空隙則必須填塞 2 小時防火時效之高密度岩棉與防火泥（Firestop）。'
        ],
        illustration: {
          title: '單元式帷幕牆樓板預埋錨固、公母料等壓腔與層間防火塞 1:5 大樣圖解',
          diagramDescription: '剖面與水平節點圖解：RC/SRC 邊梁預埋槽鋼（Cast-in Channel）、三向可調鋁合金托架、上下單元橫料疊接等壓排水腔、雙層中空 Low-E 玻璃與樓板邊緣岩棉防火阻絕層。',
          svgType: 'detailing',
          visualHighlights: [
            { label: '等壓排水腔 (Equalized Chamber)', desc: '引入室外風壓平衡腔體壓力 (ΔP=0)，徹底消除颱風負壓將雨水吸入室內的物理動力', badge: 'ΔP = 0 Rainscreen' },
            { label: '三維可調錨固鐵件 (3D Anchor)', desc: '透過齒狀墊片與長橢圓孔吸收現場結構施工 ±25mm 誤差，並容許地震層間變位', badge: 'Seismic Drift Anchor' },
            { label: '層間岩棉防火塞 (Perimeter Firestop)', desc: '於樓板外緣與帷幕背板間緊密填塞高密度防火岩棉並噴塗防火彈性膠，阻斷垂直竄火煙囪效應', badge: '2-Hr Firestop' }
          ]
        },
        workedExample: {
          title: '【超高層構造實務】颱風正負風壓下之帷幕牆等壓防水機制與層間變位檢核',
          scenario: '某樓高 160m 之 40 層鋼骨（SC）辦公大樓採用單元式玻璃帷幕牆，標準層高 H = 4.2m。依據耐震規範，地震時容許層間相對側位移角（Story Drift Ratio）為 Δ/H = 0.005；且面臨台灣夏季十七級強颱之超大風壓與豪雨。',
          question: '試計算：(1) 單層帷幕牆單元橫料接縫至少需容許多少公釐（mm）之地震水平層間變位？(2) 解釋為何傳統「全密封堵水法」在颱風下必然漏水，而「等壓雨幕腔設計」能達成滴水不漏？',
          difficulty: '大師實戰',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '計算地震層間相對側位移量 Δ',
              content: '已知標準層高 H = 4.2 m = 4,200 mm，容許層間變位角 θ = 0.005。\n單層最大相對水平位移 Δ = H × θ = 4,200 mm × 0.005 = 21 mm。\n因此，單元式帷幕牆之公母直欞與上下橫料插接伸縮縫（含EPDM膠條壓縮裕度）至少須設計容許 ±25 mm 以上之剪切與水平滑移變形量，確保強震時鋁框滑動吸收變位而不傳遞剪力至脆性玻璃。',
              rationale: '玻璃為完全脆性材料，一旦鋁框鎖死無變位裕度，21mm 層間位移將使整棟大樓玻璃瞬間爆裂下玻璃雨。'
            },
            {
              stepNumber: '步驟 2',
              title: '剖析傳統單層打膠堵水法之毛細與風壓差失效機制',
              content: '颱風吹襲大樓表面時，室外風壓高達 +3,000~5,000 Pa，室內空調氣壓僅約 +50 Pa，內外存在巨大壓力差（ΔP > 4,000 Pa）。傳統單層矽利康打膠只要因紫外線老化或地震變位出現 0.1mm 微裂縫，巨大風壓差就會像針筒抽水般將雨水高速噴入室內。',
              rationale: '滲水三要素為「水、縫隙、壓力差（力）」，想靠外皮 100% 零縫隙在長期風震下是不可能的。'
            },
            {
              stepNumber: '步驟 3',
              title: '設計三道密封與等壓排水腔（Rainscreen）構造',
              content: '單元式公母料接縫採用三道防線：① 外側設「雨幕擋水膠條（Rain Screen Gasket）」，阻擋 95% 直射動能雨水，並在橫料下方開設通氣排水孔；② 中間形成「等壓空氣腔（Pressure Equalization Chamber）」，室外強風由通氣孔進入腔內使腔壓 P_chamber = P_outside（內外壓差 ΔP = 0）；③ 內側設連續「氣密膠條（Air Seal Gasket）」阻絕室內外空氣流動。任何滲過第一道膠條的殘餘水滴因無壓力差推擠，直接受重力沿橫料洩水孔排回室外。',
              rationale: '「外擋雨、中平衡氣壓排水、內絕對氣密」是現代帷幕牆水密氣密試驗（ASTM E331）過關之鐵律。'
            }
          ],
          answer: '(1) 單層水平層間變位量 Δ = 4200 × 0.005 = 21 mm（接縫須留 ±25mm 滑移裕度）；(2) 等壓雨幕設計透過「外層擋雨＋中層通氣平衡風壓（ΔP=0）＋內層絕對氣密」，抽除雨水向內滲透的氣壓差動力，實現超高層風雨防護。',
          eliteInsight: '帷幕牆構造口訣：「防水靠等壓（外擋雨、中通氣排流、內氣密），抗震靠公母料滑移（吸收 H×0.005 層間變位），防火靠樓板邊緣 2 小時岩棉防火塞」！這三點寫出來就是頂級構造專家水準！'
        },
        relatedLessonLink: {
          subjectSlug: 'extensions',
          topicSlug: 'construction-methods',
          title: '營造工法與玻璃帷幕牆構造細部'
        },
        licensureExamCode: '專技高考科目五：建築構造與施工'
      }
    ]
  },

  // =========================================================================
  // 4. 建築物理與環境控制 (Building Physics & EEWH)
  // =========================================================================
  {
    id: 'environment',
    code: 'ARCH-231~432',
    title: '建築物理、環境控制與 EEWH 綠建築 (Building Physics & EEWH)',
    englishTitle: 'Building Physics, Architectural Acoustics & EEWH Green Building',
    credits: '共 12 學分 (4 學期必修)',
    academicYear: '大二至大四',
    iconName: 'Sun',
    badge: '永續科技',
    themeColor: 'emerald',
    summary: '掌控熱、光、聲、氣四大物理環境，打造冬暖夏涼、節能低碳且舒適宜人的智慧健康建築。',
    licensureMapping: '專技高考科目六：建築環境控制 (選擇50% + 申論計算50%)',
    recommendedBooks: [
      '《建築物理環境概論》— 陳啟仁 / 賴榮平',
      '《綠建築九大評估指標與實例詳解》— 內政部建築研究所',
      '《建築設備工程》— 楊欽富'
    ],
    knowledgePoints: [
      {
        id: 'env-thermal-u-value',
        term: '外殼節能與熱傳透率 U 值計算 (Thermal Physics & U-Value)',
        englishTerm: 'Building Envelope Thermodynamics & U-Value Calculation',
        category: '建築熱環境',
        definition: '建築外殼熱傳透率 (U 值，單位 W/m²·K) 代表室內外溫差 1°C 時，每秒穿過每平方公尺牆體之熱量。U 值越小，隔熱保溫性能越好。台灣建築技術規則對屋頂規定 U ≤ 0.8 W/m²·K，外牆規定 U ≤ 3.5 W/m²·K，以阻絕夏季巨大太陽輻射熱負荷。',
        coreConcepts: [
          '熱阻疊加原理：多層複合構造之總熱阻 R_total = R_si (內表面熱阻) + Σ(d_i / k_i) (各材料熱阻) + R_se (外表面熱阻)。',
          'U 值與熱阻倒數關係：U = 1 / R_total。厚度 d 越厚、導熱係數 k 越小之材料，提供之隔熱貢獻越大。',
          '熱橋防制 (Thermal Bridge)：金屬扣件、梁柱外露處若未連續包覆隔熱層，會形成熱流高速通道導致冷凝發霉與能耗爆增。'
        ],
        illustration: {
          title: '複合外牆七層熱阻串聯模型與等效溫度降剖面圖解',
          diagramDescription: '圖解室外表面空氣層、外掛飾板、通風空氣層、擠塑聚苯板 (XPS)、RC 結構外牆、室內粉刷層與室內空氣層之熱阻遞減斜率。',
          svgType: 'physics',
          visualHighlights: [
            { label: '通風空氣層 (Ventilated Cavity)', desc: '外牆帷幕背後留設 25-50mm 垂直風道，靠浮力熱壓排走 60% 太陽輻射熱', badge: 'Rainscreen Cavity' },
            { label: '連續保溫板 (Continuous Insulation)', desc: '阻斷 RC 結構外圍之熱橋效應，使整體牆體 U 值大幅降低至 0.6 以下', badge: 'XPS / PIR' },
            { label: '低輻射 Low-E 鍍膜', desc: '反射 80% 遠紅外線熱輻射，維持 65% 可見光高透射率', badge: 'Low-E Coating' }
          ]
        },
        workedExample: {
          title: '【建築師計算題】輕質隔熱複合屋頂總熱傳透率 U 值驗證演算',
          scenario: '專技高考考題：某綠建築屋頂構造由外至內依次為：(1) 30mm 磨石子隔熱磚 (k = 1.2 W/m·K)；(2) 50mm 擠塑保溫板 XPS (k = 0.030 W/m·K)；(3) 雙層防水毯 (忽略熱阻)；(4) 150mm 鋼筋混凝土板 (k = 1.74 W/m·K)；(5) 15mm 水泥砂漿粉刷 (k = 0.87 W/m·K)。已知內表面熱阻 R_si = 0.11 m²·K/W，外表面熱阻 R_se = 0.04 m²·K/W。',
          question: '試計算該複合屋頂之總熱阻 R_total 及總熱傳透率 U 值，並檢核是否符合法規屋頂 U ≤ 0.8 W/m²·K 之嚴格門檻。',
          difficulty: '進階推敲',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '計算各單一構造層材料熱阻 (R = d / k)',
              content: '各層熱阻分別為：\n- 磨石子磚：R1 = 0.030 / 1.2 = 0.025 m²·K/W\n- XPS 保溫板：R2 = 0.050 / 0.030 = 1.667 m²·K/W\n- RC 樓板：R3 = 0.150 / 1.74 = 0.086 m²·K/W\n- 水泥砂漿：R4 = 0.015 / 0.87 = 0.017 m²·K/W',
              rationale: '材料熱阻等於材料厚度 (m) 除以導熱係數 k (W/m·K)。'
            },
            {
              stepNumber: '步驟 2',
              title: '加總各層熱阻與內外表面熱阻',
              content: '總熱阻 R_total = R_se + R1 + R2 + R3 + R4 + R_si = 0.04 + 0.025 + 1.667 + 0.086 + 0.017 + 0.11 = 1.945 m²·K/W。',
              rationale: '各構造層串聯受熱時，總熱阻為各層阻抗之代數和。'
            },
            {
              stepNumber: '步驟 3',
              title: '計算熱傳透率 U 值並進行法規檢核',
              content: '總熱傳透率 U = 1 / R_total = 1 / 1.945 ≒ 0.514 W/m²·K。\n法規標準為屋頂 U ≤ 0.8 W/m²·K。因為 0.514 < 0.8，判定「合規且性能卓越（節能裕度達 35%）」。',
              rationale: 'U 值小於法定上限，符合建築技術規則節約能源專章標準。'
            }
          ],
          answer: '總熱阻 R_total ≒ 1.945 m²·K/W，熱傳透率 U ≒ 0.514 W/m²·K，符合台灣建築技術規則屋頂 U ≤ 0.8 W/m²·K 之要求。',
          eliteInsight: '公式核心速記：整道牆有 85% 以上的隔熱貢獻全來自那一層 5cm 的 XPS 保溫板！如果沒有保溫板，單純 15cm RC 樓板的 U 值會高達 3.6，夏天室內會如火爐般高溫！'
        },
        relatedLessonLink: {
          subjectSlug: 'physics',
          topicSlug: 'thermal-physics',
          title: '建築熱物理與熱傳分析'
        },
        licensureExamCode: '專技高考科目六：建築環境控制'
      },
      {
        id: 'env-solar-shading-daylight',
        term: '太陽軌跡幾何、外遮陽深寬比與晝光率採光控制 (Solar Geometry & Daylighting)',
        englishTerm: 'Solar Altitude/Azimuth, Shading Projection Ratio & Daylight Factor',
        category: '建築光環境與被動節能',
        definition: '在台灣亞熱帶氣候中，開窗玻璃是建築外殼熱負荷（ENVLOAD / AWSG）最大的破口（日射透過熱高達混凝土牆的 10~20 倍）。建築師必須精確掌握冬夏太陽仰角（H = 90° - |φ - δ|）與方位角軌跡，依方位配置外遮陽（南向水平遮陽、東西向垂直遮陽或格子遮陽），並搭配導光板（Light Shelf）將直射眩光轉化為天花板均勻漫射晝光，使室內晝光率（Daylight Factor, DF）維持在 2%~5% 的視覺舒適區間。',
        coreConcepts: [
          '正午太陽仰角公式：H = 90° - |所在地緯度 φ - 太陽赤緯 δ|（春分秋分 δ = 0°、夏至 δ = +23.5°、冬至 δ = -23.5°）。水平遮陽出簷深度 D 與遮蔽窗高 W 滿足 W = D · tan(H)。',
          '方位別外遮陽選型鐵律：南向太陽仰角高，採「水平遮陽板」；東、西向晨昏太陽仰角極低（< 30°），水平遮陽無效，必須採「垂直遮陽板、可調式垂直百葉或深格子遮陽」；北向僅需防夏季清晨傍晚微斜射之短垂直翼板。',
          '導光板（Light Shelf）與高側窗（Clerestory）：於窗戶中上段設置高反射水平導光板，既能遮擋靠窗座位區的直射強光（防眩光），又能將光線反射至室內深處天花板，拉平室內照度均齊度。'
        ],
        illustration: {
          title: '北緯 25° 冬夏太陽仰角軌跡、水平出簷遮陽與導光板漫射採光剖面圖解',
          diagramDescription: '剖面圖解台北（25°N）南向開窗：夏至正午仰角 88.5° 被水平遮陽板 100% 阻絕於窗外；冬至正午仰角 41.5° 溫暖陽光越過遮陽板經由中段導光板反射至室內 8m 深處天花板。',
          svgType: 'physics',
          visualHighlights: [
            { label: '夏至全遮蔽 (H=88.5°)', desc: '水平出簷精準截斷夏季高仰角直射日射，降低空調尖峰冷房負荷達 35%', badge: 'Summer Cutoff' },
            { label: '冬至引暖陽 (H=41.5°)', desc: '冬季低仰角陽光穿透遮陽板下緣，搭配被動式蓄熱地坪提升冬季室溫', badge: 'Passive Solar' },
            { label: '高反射導光板 (Light Shelf)', desc: '壓低窗邊過亮峰值並將自然光二次反射至室內深處，提升採光均齊度', badge: 'Daylight Bounce' }
          ]
        },
        workedExample: {
          title: '【建築環境控制計算題】台北（25°N）南向教室春分正午 100% 遮陽出簷深度與冬夏太陽仰角演算',
          scenario: '專技高考建築環境控制試題：台北市（約北緯 25°）某高中新建教學大樓，南向教室開窗高度 W = 1.80 公尺（窗台至窗頂），窗頂緊貼水平外遮陽板下緣。已知太陽赤緯 δ：夏至 +23.5°、春分／秋分 0°、冬至 -23.5°。（參考值：tan 65° ≒ 2.145，tan 41.5° ≒ 0.885）',
          question: '試求：(1) 台北夏至、春分與冬至正午之太陽仰角 H 各為多少度？(2) 若欲在「春分至秋分整個夏季半年」的正午時段讓南向窗戶獲得 100% 完整遮陰（直射光完全不進窗），水平遮陽板最小出簷深度 D 應設計為多少公尺？',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '計算台北（φ = 25°N）三節氣正午太陽仰角 H',
              content: '套用正午太陽仰角公式 H = 90° - |φ - δ|：\n- 夏至（δ = +23.5°）：H_summer = 90° - |25° - 23.5°| = 90° - 1.5° = 88.5°（正午太陽幾乎在頭頂偏南）\n- 春分／秋分（δ = 0°）：H_equinox = 90° - |25° - 0°| = 65.0°\n- 冬至（δ = -23.5°）：H_winter = 90° - |25° - (-23.5°)| = 90° - 48.5° = 41.5°',
              rationale: '冬至時太陽直射南回歸線，與北緯 25° 緯度差達 48.5°，故正午太陽仰角最低。'
            },
            {
              stepNumber: '步驟 2',
              title: '建立水平遮陽幾何三角關係求最小出簷深度 D',
              content: '欲使春分至秋分（仰角 H ≥ 65°）正午直射陽光完全不射入高 W = 1.80m 之窗面，臨界條件為 H = 65° 時遮陽板端點陰影剛好投射至窗台底緣：\n由直角三角形關係：tan(H) = 窗高 W / 出簷深度 D\n⇒ D = W / tan(65°) = 1.80 m / 2.145 ≒ 0.839 m（約 84 公分）。',
              rationale: '只要在仰角 65° 時能 100% 遮住 1.8m 高窗戶，整個春分到秋分（65° ≤ H ≤ 88.5°）正午都必定 100% 遮陰！'
            },
            {
              stepNumber: '步驟 3',
              title: '檢核冬至正午日照穿透深度與導光優化',
              content: '當出簷深度 D = 0.84 m 時，冬至正午（H = 41.5°）遮陽板在窗面上僅能遮住上方 W_shaded = D · tan(41.5°) = 0.84 × 0.885 ≒ 0.74 m，下方仍有 1.80 - 0.74 = 1.06 m 高的窗面能引入溫暖冬陽與充足漫射光，完美達成「夏遮烈日、冬迎暖陽」之被動式氣候調適設計！',
              rationale: '驗證遮陽尺寸不會過度犧牲冬季自然採光與日照獲熱。'
            }
          ],
          answer: '(1) 正午太陽仰角：夏至 88.5°、春分／秋分 65.0°、冬至 41.5°；(2) 水平遮陽板最小出簷深度 D ≒ 0.84 公尺（外遮陽深寬比 D/W ≒ 0.47）。',
          eliteInsight: '環控計算黃金公式：「H = 90° - |φ - δ|」搭配「出簷深度 D = 窗高 W / tan(H)」！切記：外遮陽阻擋 80% 熱量在玻璃外側，隔熱效率是室內百葉窗簾（熱量已穿過玻璃產生溫室效應）的 3 倍以上！'
        },
        relatedLessonLink: {
          subjectSlug: 'geography',
          topicSlug: 'climate-environment',
          title: '氣候環境與太陽軌跡遮陽應答建築'
        },
        licensureExamCode: '專技高考科目六：建築環境控制'
      },
      {
        id: 'env-acoustics-reverberation',
        term: '室內聲學、賽賓餘響時間公式與隔音減震構造 (Architectural Acoustics & RT60)',
        englishTerm: 'Sabine Reverberation Time (RT60), Mass Law & Floating Floor Acoustics',
        category: '建築聲環境與噪音控制',
        definition: '建築聲學分為兩大戰場：① 「室內音質設計（Room Acoustics）」：透過賽賓公式（Sabine\'s Formula: RT60 = 0.161 · V / A）精確調控空間容積 V 與總吸音力 A，使演講廳餘響時間控制在 0.8~1.2 秒（語音清晰）、交響音樂廳控制在 1.8~2.2 秒（樂音豐潤飽滿），並消除凹曲面聲聚焦與平行牆顫動回聲；② 「建築隔音防振（Sound Insulation）」：以混凝土質量定律（Mass Law）阻絕空氣傳音，並以浮動地板切斷固體樓板衝擊音（ΔLw ≥ 17 dB）。',
        coreConcepts: [
          '賽賓餘響時間公式（Sabine Formula）：RT60 = 0.161 × V / A，其中 V 為室容積 (m³)，總吸音力 A = Σ(S_i · α_i) + 4mV（單位 m²-Sabin，S_i 為各表面積，α_i 為吸音係數）。容積越大餘響越長，吸音力越大餘響越短。',
          '吸音材料（Sound Absorption）vs. 隔音材料（Sound Insulation）：多孔質吸音棉／穿孔板（質輕多孔）用於吸收室內反射音、縮短 RT60，但無法隔絕隔壁噪音；隔音必須依靠「高密度大質量牆體（質量定律：面密度每增加一倍，隔音損失 TL 提升約 5~6 dB）」或「雙層輕隔間夾空氣層＋吸音棉」。',
          '固體衝擊音與浮動地板（Floating Floor）：樓上腳步與掉物屬於「固體傳音」，加厚地毯或鋪橡膠隔音墊（四周牆角向上回捲 5cm 切斷聲橋）才能符合台灣《建築技術規則》分界樓板衝擊音降低量 ΔLw ≥ 17 dB 之強制規定。'
        ],
        illustration: {
          title: '音樂廳幾何聲線反射（前次反射音 vs. 凹面聚焦缺陷）與賽賓餘響調控剖面圖解',
          diagramDescription: '剖面圖解音樂廳天花折板將舞台直達音與一次反射音（延遲 < 30ms）均勻投射至觀眾席、後牆多孔穿孔吸音板消除長延遲回聲（Echo），以及最佳餘響時間 RT60 頻率曲線。',
          svgType: 'physics',
          visualHighlights: [
            { label: '天花反射折板 (Reflector)', desc: '利用入射角等於反射角幾何，將舞台聲能均勻補強至後排觀眾席，消弭音壓衰減', badge: 'Early Reflection' },
            { label: '後牆穿孔吸音構造', desc: '消除大於 50ms 之路徑差長回聲 (Echo)，避免舞台演奏者遭受回音干擾', badge: 'Echo Elimination' },
            { label: '浮動隔音機房底板', desc: '空調主機房採防振彈簧基座與雙層隔音牆，截斷低頻結構振動傳入音樂廳', badge: 'Vibration Isolation' }
          ]
        },
        workedExample: {
          title: '【建築師高考環控計算題】多功能視聽講堂之賽賓餘響時間（RT60）計算與吸音裝修改善',
          scenario: '專技高考建築環境控制計算題：某大學視聽演講廳長 20m、寬 15m、平均淨高 6m。改善前室內各表面（地板、天花、牆面及座椅）之總等效吸音力 A₁ = 180 m²-Sabin。為使語音清晰度達標，音響顧問要求將滿場餘響時間 RT60 縮短至 0.90 秒。',
          question: '試求：(1) 該視聽演講廳改善前之餘響時間 RT60 為多少秒？(2) 若欲在後牆與側牆改貼高吸音穿孔木絲吸音板（其吸音係數比原粉刷牆面淨增加 Δα = 0.60），至少需要改貼多少平方公尺（m²）之吸音板才能使 RT60 降至 0.90 秒？',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '計算視聽演講廳室容積 V 與改善前餘響時間 RT₁',
              content: '室容積 V = 長 × 寬 × 高 = 20 × 15 × 6 = 1,800 m³。\n代入賽賓公式 RT60 = 0.161 × V / A：\n改善前餘響時間 RT₁ = (0.161 × 1,800) / 180 = 289.8 / 180 = 1.61 秒。\n（檢討：1.61 秒對於演講廳過長，會導致前後字音重疊混濁、語音清晰度 D50 不佳。）',
              rationale: '賽賓公式中分子 0.161 × V 為室容積常數項，與總吸音力 A 成反比。'
            },
            {
              stepNumber: '步驟 2',
              title: '反推目標餘響時間 RT₂ = 0.90 秒所需之目標總吸音力 A₂',
              content: '設改善後目標餘響時間 RT₂ = 0.90 秒：\nA₂ = (0.161 × V) / RT₂ = 289.8 / 0.90 = 322.0 m²-Sabin。\n因此需要額外增加之淨吸音力 ΔA = A₂ - A₁ = 322.0 - 180.0 = 142.0 m²-Sabin。',
              rationale: '透過目標餘響時間反推總吸音力缺口 ΔA。'
            },
            {
              stepNumber: '步驟 3',
              title: '計算需改貼穿孔吸音板之面積 S_panel',
              content: '注意：在原有牆面上改貼吸音板時，每 1 m² 面積所增加之「淨吸音力」為新舊吸音係數差 Δα = α_new - α_old = 0.60。\n由 ΔA = S_panel × Δα：\nS_panel = 142.0 / 0.60 ≒ 236.67 m²（約 237 平方公尺）。\n配置策略：優先鋪設於最容易產生長延遲回聲之「觀眾席後背牆」與「平行側牆中後段」，保留舞台前段側牆作為有利的早期反射面。',
              rationale: '改貼材料時必須扣除原牆面既有吸音係數（用 Δα 計算），且吸音材應置於後場防回聲、前場留反射。'
            }
          ],
          answer: '(1) 改善前餘響時間 RT₁ = 1.61 秒；(2) 目標總吸音力 A₂ = 322 m²-Sabin（需淨增 ΔA = 142 m²-Sabin），至少需於後牆與中後側牆改貼 236.7 m² 之穿孔吸音板。',
          eliteInsight: '建築師高考聲學兩大必考陷阱：① 算改貼吸音材面積時，千萬要記得用「新舊吸音係數差 (α_new - α_old)」而不是直接除以 α_new！② 吸音棉「吸音不隔音」，想擋隔壁 KTV 空氣噪音要靠厚重 RC 牆或雙層隔音牆（質量定律），想擋樓上跑步聲要靠浮動地板（ΔLw ≥ 17 dB）！'
        },
        relatedLessonLink: {
          subjectSlug: 'physics',
          topicSlug: 'wave-acoustics-optics',
          title: '波動、建築聲學與光學照明設計'
        },
        licensureExamCode: '專技高考科目六：建築環境控制'
      }
    ]
  },

  // =========================================================================
  // 5. 建築結構系統與耐震科技 (Structural Systems & Seismic)
  // =========================================================================
  {
    id: 'structure',
    code: 'ARCH-241~442',
    title: '建築結構系統與耐震科技 (Structural Systems & Seismic Engineering)',
    englishTitle: 'Structural Systems, Seismic Mechanics & Long-Span Typologies',
    credits: '共 16 學分 (4 學期必修)',
    academicYear: '大二至大四',
    iconName: 'ShieldCheck',
    badge: '安全基石',
    themeColor: 'sky',
    summary: '建築師不能只畫好看外殼！必須理解力流路徑 (Load Paths)，與結構技師攜手實現大跨度懸挑與地震防衛。',
    licensureMapping: '專技高考科目四：建築結構 (選擇50% + 申論計算50%)',
    recommendedBooks: [
      '《建築結構系統》— 許茂雄 / 蔡益超',
      '《結構形態與空間美學》— Mario Salvadori',
      '《耐震設計規範與解說》— 內政部國土署'
    ],
    knowledgePoints: [
      {
        id: 'struct-lateral-force-path',
        term: '抗側力耐震系統與力流路徑 (Load Paths & Seismic Resistance)',
        englishTerm: 'Lateral Force Resisting Systems & Load Paths',
        category: '結構系統總論',
        definition: '地震作用在建築物上的實質是「地表加速度引發之巨大水平慣性力 (F = m · a)」。建築結構必須建立自屋頂至基盤毫無中斷的連續水平與垂直力流路徑 (Continuous Load Paths)。常見抗側力系統包含：鋼筋混凝土抗剪牆 (Shear Wall)、韌性抗彎矩構架 (SMRF) 與挫屈束制斜撐 (BRB)。',
        coreConcepts: [
          '水平隔樓板膜作用 (Diaphragm)：剛性樓板如同深梁，將各處地震慣性力均勻傳遞至各個抗剪構件。',
          '剪力牆剛度極大優勢：抗剪牆水平剛度為純柱構架之數十倍，能有效控制樓層側位移角 (Story Drift ≤ 0.005)。',
          '偏心扭轉陷阱 (Torsion)：建築平面重心 (Center of Mass, CM) 與剛心 (Center of Rigidity, CR) 若未重疊，會產生龐大平面扭轉力矩，導致邊角柱過早剪斷破壞。'
        ],
        illustration: {
          title: '建築垂直與水平抗側力流路徑三維分解圖解',
          diagramDescription: '三維透視圖解：樓板受慣性力分配 → 剪力牆與斜撐抗側力變形 → 轉換桁架 → 地下室連續壁與筏式基礎基樁受壓反力。',
          svgType: 'structure',
          visualHighlights: [
            { label: '剛心 (CR) 與 重心 (CM)', desc: '兩心間距稱為偏心距 e，設計應追求偏心距最小化以消除致命扭矩', badge: 'Center of Rigidity' },
            { label: '弱層/軟層避免 (Soft Story)', desc: '地面層挑高或拔柱會造成剛度突變，地震時變形集中於一樓引發整體下陷', badge: 'Soft Story Trap' },
            { label: '挫屈束制斜撐 (BRB)', desc: '鋼核心受壓不挫屈，拉壓雙向均能展現優異塑性消能阻尼特性', badge: 'BRB Damper' }
          ]
        },
        workedExample: {
          title: '【專技高考結構計算】建築物基底總剪力 V 與樓層地震力分配計算',
          scenario: '專技高考考題：一棟位於台北市第三類地盤之 5 層樓 RC 商辦大樓，各樓層重量均為 W = 400 tf，建築物總重量 W_total = 2000 tf。經規範公式求得之基底剪力係數 C = 0.12，無頂層集中外力 (Ft = 0)。',
          question: '試計算該大樓之基底總剪力 V，並使用等效側力分析法 (Equivalent Lateral Force Procedure) 計算頂樓 (5F) 所分得之設計水平地震力 F5。',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '計算建築物基底總剪力 V',
              content: '依據台灣耐震設計規範，基底總剪力公式為：V = C · W_total。\n代入數據：V = 0.12 × 2000 tf = 240 tf (公噸重) = 2352 kN。',
              rationale: '基底總剪力為整座建築承受水平慣性地震力之總合基準。'
            },
            {
              stepNumber: '步驟 2',
              title: '展開各樓層高度與重量乘積 (wi · hi)',
              content: '設各層高度均為 h = 3.6m（1F=3.6m, 2F=7.2m, 3F=10.8m, 4F=14.4m, 5F=18.0m）。\n- w1·h1 = 400 × 3.6 = 1,440\n- w2·h2 = 400 × 7.2 = 2,880\n- w3·h3 = 400 × 10.8 = 4,320\n- w4·h4 = 400 × 14.4 = 5,760\n- w5·h5 = 400 × 18.0 = 7,200\n總和 Σ(wi · hi) = 1440 + 2880 + 4320 + 5760 + 7200 = 21,600 tf·m。',
              rationale: '倒三角形側力分布假定各層加速度與其離地高度呈線性正比。'
            },
            {
              stepNumber: '步驟 3',
              title: '計算頂層 (5F) 承擔之水平地震側力 F5',
              content: '樓層分配比例公式：F5 = V × (w5 · h5) / Σ(wi · hi)。\n代入數值：F5 = 240 tf × (7,200 / 21,600) = 240 tf × (1/3) = 80 tf (約 784 kN)。',
              rationale: '頂樓因高度最高，分配到之地震加速度最大，承擔三分之一總基底剪力。'
            }
          ],
          answer: '建築物基底總剪力 V = 240 tf (約 2352 kN)，頂層 (5F) 分得之水平地震設計側力 F5 = 80 tf (約 784 kN)。',
          eliteInsight: '直覺速算法：等高、等重之均質建築，第 N 層所分擔之側力比率正好是其層數在「1+2+...+N」總和中的比例！5 樓就是 5 / (1+2+3+4+5) = 5/15 = 1/3，一眼秒殺！'
        },
        relatedLessonLink: {
          subjectSlug: 'mechanics',
          topicSlug: 'structural-failures',
          title: '結構破壞機制與安全防衛'
        },
        licensureExamCode: '專技高考科目四：建築結構'
      },
      {
        id: 'struct-long-span-truss-arch',
        term: '大跨度空間桁架、拱結構與懸索張力系統 (Long-Span Truss, Arch & Cable Systems)',
        englishTerm: 'Long-Span Spatial Trusses, Funicular Arches & Cable-Stayed Structures',
        category: '大跨度結構系統',
        definition: '當體育館、機場航廈或展覽館跨度超過 30~100 公尺時，傳統實腹梁（彎矩 M = wL²/8 隨跨度平方暴增）將因自重過大而失效。建築師必須轉向「軸力傳力系統（形態抵抗結構 Form-Active & Vector-Active）」：利用空間桁架（Space Truss）將彎矩分解為上弦桿壓應力與下弦桿拉應力、利用拋物線拱（Arch）將均布載重轉為純軸向壓力，或利用高強度懸索與薄膜（Cable & Membrane）承受純拉力。',
        coreConcepts: [
          '桁架（Truss）軸力分解原理：桁架節點假設為鉸接，外力作用於節點時各桿件僅受「純軸向拉力或壓力（無彎矩）」。簡支桁架受向下荷載時，「上弦桿受壓、下弦桿受拉」，桁架有效深度 h 通常取跨度 L 之 1/10~1/15。',
          '拱結構（Arch）與水平推力 H：拱將鉛垂荷載轉為沿拱軸之純壓力，但拱腳會產生巨大向外水平推力 H = wL² / (8f)（f 為拱矢高）。必須設置「地梁拉桿（Tie-rod）」或堅固飛扶壁／岩盤基礎平衡推力。',
          '薄殼（Shell）與懸索網（Cable Net）：雙曲拋物面（HP 殼／馬鞍面）與球面薄殼透過曲面薄膜內力（Membrane Force）以極薄厚度（8~15cm）跨越百米無柱空間。'
        ],
        illustration: {
          title: '大跨度空間桁架（上壓下拉）、拋物線拱（拱腳拉桿平衡水平推力）與雙曲薄殼力流圖解',
          diagramDescription: '三維結構力流對比：立體空間桁架上弦紅線受壓、下弦藍線受拉；三鉸拱結構拱冠矢高 f 與底部地梁拉桿平衡水平推力 H = wL²/(8f)。',
          svgType: 'structure',
          visualHighlights: [
            { label: '桁架上弦壓／下弦拉', desc: '將跨中巨大彎矩 M 轉化為上下弦桿力偶 (C = T = M/h)，大幅減輕構件自重', badge: 'Axial Force Couple' },
            { label: '三鉸拱與水平拉桿', desc: '拱軸承受純壓力，底部設置高強度預力鋼索拉桿自平衡拱腳水平推力 H', badge: 'Tied Arch' },
            { label: '零桿判讀與挫屈控制', desc: '受壓弦桿與斜腹桿須檢核長細比 λ = KL/r 防止歐拉彈性挫屈 (Euler Buckling)', badge: 'Slenderness Ratio' }
          ]
        },
        workedExample: {
          title: '【專技高考建築結構計算】60米大跨度體育館三鉸拱屋頂之拱腳水平推力與拉桿斷面設計',
          scenario: '專技高考建築結構試題：某大學新建體育館採用跨度 L = 60 m 之大跨度三鉸拋物線鋼拱屋頂，拱冠矢高（Rise）f = 10 m。屋頂傳遞至單榀鋼拱之均布靜載重與活載重合計 w = 4.0 tf/m。為避免基礎承受水平側推力，於兩側拱腳間設置一條水平高強度鋼拉桿（Tie-rod，容許拉應力 σ_allow = 2,000 kgf/cm²）。',
          question: '試求：(1) 兩側拱腳之鉛垂反力 V_A、V_B 與向外水平推力 H 各為多少公噸重（tf）？(2) 底部水平鋼拉桿所需之最小截面積 A_req 為多少平方公分（cm²）？',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '由整體靜力平衡求拱腳鉛垂反力 V_A、V_B',
              content: '因三鉸拱對稱且承受均布載重 w = 4.0 tf/m，總鉛垂載重 W = w × L = 4.0 × 60 = 240 tf。\n由對稱性 ΣF_y = 0：\nV_A = V_B = W / 2 = 240 / 2 = 120 tf（向上）。',
              rationale: '鉛垂支承反力與一般簡支梁完全相同，各分擔總重之一半。'
            },
            {
              stepNumber: '步驟 2',
              title: '取左半拱對拱冠鉸接點 C 取力矩 ΣM_C = 0 求水平推力 H',
              content: '三鉸拱拱冠 C 點（x = L/2 = 30m, y = f = 10m）為內部鉸接點，彎矩 M_C = 0。\n取左半拱（0 ~ 30m）自由體圖，對 C 點取力矩 ΣM_C = 0：\n(V_A × 30m) - (H × 10m) - (4.0 tf/m × 30m) × (30m / 2) = 0\n3,600 - 10H - 1,800 = 0 ⇒ 10H = 1,800 ⇒ H = 180 tf。\n（亦可直接套用拋物線拱水平推力公式：H = wL² / (8f) = 4.0 × 60² / (8 × 10) = 14,400 / 80 = 180 tf。）',
              rationale: '拱矢高 f 越低扁，水平推力 H 越大；當 f = L/6 時，水平推力 H (180 tf) 甚至大於鉛垂反力 V (120 tf)。'
            },
            {
              stepNumber: '步驟 3',
              title: '計算拱腳水平鋼拉桿所需最小截面積 A_req',
              content: '拱腳向外水平推力 H = 180 tf = 180,000 kgf 全數由底部水平鋼拉桿承受（拉桿軸拉力 T = H = 180,000 kgf）。\n已知鋼拉桿容許拉應力 σ_allow = 2,000 kgf/cm²：\nA_req = T / σ_allow = 180,000 / 2,000 = 90 cm²。',
              rationale: '設置水平拉桿（Tied-Arch）能將拱的水平推力在結構內部自平衡，使下部柱位僅受純垂直力。'
            }
          ],
          answer: '(1) 拱腳鉛垂反力 V_A = V_B = 120 tf，拱腳水平推力 H = 180 tf；(2) 底部水平鋼拉桿最小所需截面積 A_req = 90 cm²。',
          eliteInsight: '大跨度結構秒殺公式：簡支梁最大彎矩是「M₀ = wL²/8」；無論是桁架上下弦桿軸力還是三鉸拱水平推力，全部都是「H (或 C, T) = M₀ / 高度 (f 或 h) = wL² / (8f)」！記住這條母公式，桁架、拱與懸索計算一秒鐘全破！'
        },
        relatedLessonLink: {
          subjectSlug: 'mechanics',
          topicSlug: 'trusses',
          title: '桁架結構分析（節點法與截面法）'
        },
        licensureExamCode: '專技高考科目四：建築結構'
      },
      {
        id: 'struct-foundation-excavation',
        term: '軟弱地盤基礎選型、土壤液化防制與深開挖連續壁力學 (Foundations & Excavation)',
        englishTerm: 'Raft/Pile Foundations, Soil Liquefaction Mitigation & Diaphragm Wall Mechanics',
        category: '基礎工程與大地力學',
        definition: '建築一切荷載最終皆須傳遞至地球岩土層。面對台北盆地或西南沿海之軟弱沖積黏土與高地下水位疏鬆細砂層（土壤液化高潛勢區），建築師必須整合大地工程：採用「地下室筏式基礎（Raft Foundation）利用挖土重量補償建築載重（浮力平衡原理）」或「摩擦／端承基樁（Pile Foundation）貫入堅硬礫石岩盤」；深開挖期間則以 60~120cm 厚之鋼筋混凝土「連續壁（Diaphragm Wall）」搭配內支撐或逆打工法，防範管湧（Piping）、砂湧與隆起破壞。',
        coreConcepts: [
          '筏式基礎載重補償原理（Compensated Foundation）：開挖地下室所移除之土壤總重量 W_soil = γ_soil · A · D_f，可抵銷上部結構傳下之總載重，大幅減少軟弱黏土層之長期壓密沉陷與差異沉陷。',
          '土壤液化（Soil Liquefaction）三要件與對策：要件為「疏鬆飽和細砂（SPT-N 值低）＋高地下水位＋強烈地震反覆剪應力（超額孔隙水壓飆升使有效應力 σ\' = σ - u 歸零）」。對策包含：打設基樁至非液化承載層、連續壁圍封、振動擠壓砂樁／低壓灌漿地盤改良。',
          '深開挖四大破壞模式檢核：① 砂性土滲流引發之「砂湧／管湧（Boiling / Piping，水力坡降 i > i_cr）」；② 黏性土開挖底面之「塑性隆起（Heave）」；③ 開挖面下有承壓水層之「上浮破壞（Uplift）」；④ 擋土壁變形過大導致鄰房傾斜沉陷。'
        ],
        illustration: {
          title: '都會區深開挖連續壁內支撐系統、筏式基礎箱體與基樁貫入岩盤剖面圖解',
          diagramDescription: '大地工程剖面圖解：地下連續壁貫入不透水黏土層截斷地下水流線網、H型鋼水平內支撐抵抗朗金（Rankine）主動土壓力與水壓力、筏式基礎底板抵抗地下水浮力以及大口徑反循環基樁支承於堅硬岩盤。',
          svgType: 'structure',
          visualHighlights: [
            { label: '地下連續壁 (Diaphragm Wall)', desc: '貫入開挖面下深度 D 延長滲流路徑，防止開挖底面發生管湧與砂湧崩坍', badge: 'Seepage Cutoff' },
            { label: '筏式補償基礎 (Raft Box)', desc: '結合地下室底板、地梁與外牆形成高剛度空心箱體，以挖土重量補償大樓載重', badge: 'Weight Compensation' },
            { label: '有效應力與抗液化', desc: '透過礫石排水樁或灌漿改良提升砂土 SPT-N 值，防止地震超額孔隙水壓 u 導致液化', badge: 'σ\' = σ - u' }
          ]
        },
        workedExample: {
          title: '【專技高考結構＆構造綜合題】地下室開挖載重補償率與抗上浮安全係數檢核計算',
          scenario: '專技高考建築結構與構造考題：某新建 10 層樓辦公大樓基地面積 A = 1,000 m²，全區開挖地下 3 層（開挖深度 D_f = 10.0 m）採用筏式基礎。已知原地面下土壤平均單位重 γ_s = 1.9 tf/m³，地下水位位於地表下 2.0 m 處（水單位重 γ_w = 1.0 tf/m³）。大樓完工後包含地下室結構與上部 10 層之總靜載重 W_dead = 13,500 tf，總活載重 W_live = 2,500 tf。',
          question: '試計算：(1) 開挖 10m 深地下室所移除之土壤總重量 W_excav 為多少公噸重（tf）？其對大樓總載重（靜＋活）之「載重補償率」為多少？(2) 在豪雨季節地下水位維持於地表下 2.0m 時，作用於筏基底板（深 10.0m）之總水浮力 U 為多少 tf？若抗浮檢核僅計靜載重 W_dead，其抗上浮安全係數 FS_uplift = W_dead / U 是否滿足法定 FS ≥ 1.2 之要求？',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '計算開挖移除土方總重 W_excav 與載重補償率',
              content: '開挖土方體積 V = 基地面積 A × 開挖深度 D_f = 1,000 m² × 10.0 m = 10,000 m³。\n移除之原土總重 W_excav = V × γ_s = 10,000 × 1.9 tf/m³ = 19,000 tf。\n大樓完工後總設計載重 W_total = W_dead + W_live = 13,500 + 2,500 = 16,000 tf。\n載重補償率 = W_excav / W_total = 19,000 / 16,000 = 118.75%（大於 100%，屬「超補償基礎 Over-compensated Foundation」，深層地基所受淨附加應力 Δσ < 0，幾乎不會產生額外壓密沉陷！）。',
              rationale: '挖掉 19,000 噸的土、蓋上去 16,000 噸的房子，對深層軟弱黏土而言反而減輕了 3,000 噸負擔。'
            },
            {
              stepNumber: '步驟 2',
              title: '計算作用於筏基底板（-10.0m）之地下水總浮力 U',
              content: '地下水位位於地表下 -2.0 m，筏基底板位於地表下 -10.0 m，故底板承受之靜水頭高度 h_w = 10.0 - 2.0 = 8.0 m。\n底板單位面積水浮壓力 u = γ_w × h_w = 1.0 tf/m³ × 8.0 m = 8.0 tf/m²。\n全基地總上浮水壓力 U = u × A = 8.0 tf/m² × 1,000 m² = 8,000 tf（向上推舉）。',
              rationale: '阿基米德浮力原理：浸入地下水面以下 8m 之地下室箱體將承受每平方公尺 8 公噸的向上水浮力。'
            },
            {
              stepNumber: '步驟 3',
              title: '檢核抗上浮安全係數 FS_uplift',
              content: '抗上浮檢核時，因活載重（人員家具）不一定永遠存在，規範要求僅能以永久「靜載重 W_dead」抵抗水浮力 U：\nFS_uplift = W_dead / U = 13,500 tf / 8,000 tf = 1.6875 ≒ 1.69。\n因為 1.69 ≥ 法定門檻 1.20（注意：施工期間上部 10 層尚未蓋好前 W_dead 較小，仍須維持抽水降水直到上部樓層重量壓過浮力為止），故完工期抗浮安全合規！',
              rationale: '許多工地地下室上浮頂裂意外都發生在「結構尚未蓋到足夠樓層壓重，就太早停止抽水機降水」的施工交接期。'
            }
          ],
          answer: '(1) 移除土總重 W_excav = 19,000 tf，載重補償率達 118.8%（超補償基礎）；(2) 筏基底板總水浮力 U = 8,000 tf，完工靜載重抗上浮安全係數 FS = 13,500 / 8,000 = 1.69 ≥ 1.2，符合規範要求。',
          eliteInsight: '大地基礎心法：「軟弱黏土怕沉陷 → 挖地下室做筏式基礎（用挖掉的土重抵銷房重）；高水位疏鬆細砂怕地震液化與上浮 → 打基樁／地盤改良，且施工期絕對不能在靜載重壓過水浮力（FS ≥ 1.2）前貿然停抽地下水！」'
        },
        relatedLessonLink: {
          subjectSlug: 'mechanics',
          topicSlug: 'moment-of-inertia',
          title: '截面幾何性質、應力分布與基礎穩定'
        },
        licensureExamCode: '專技高考科目四/五：建築結構與基礎施工'
      }
    ]
  },

  // =========================================================================
  // 6. 敷地計畫、景觀與都市設計 (Site Planning & Urban Design)
  // =========================================================================
  {
    id: 'site',
    code: 'ARCH-351~452',
    title: '敷地計畫、景觀與都市設計 (Site Planning & Urban Design)',
    englishTitle: 'Site Planning, Grading Topography & Urban Design Systems',
    credits: '共 12 學分 (3 學期必修)',
    academicYear: '大三至大四',
    iconName: 'Compass',
    badge: '宏觀視野',
    themeColor: 'indigo',
    summary: '建築不是孤島，而是都市空間的拼圖。學習等高線整地、道路人車分流、都市紋理與永續生態地景。',
    licensureMapping: '專技高考科目二：敷地計畫與都市設計 (4小時申論繪圖)',
    recommendedBooks: [
      '《敷地計畫》— Kevin Lynch (凱文·林區)',
      '《都市意象 (The Image of the City)》— Kevin Lynch',
      '《偉大城市的誕生與衰亡》— Jane Jacobs (珍·雅各)'
    ],
    knowledgePoints: [
      {
        id: 'site-grading-cut-fill',
        term: '等高線整地與土方挖填就地平衡 (Contour Grading & Cut-and-Fill)',
        englishTerm: 'Site Grading, Contours & Earthwork Balance',
        category: '地貌與敷地工程',
        definition: '山坡地建築設計的核心在於「順應自然等高線」。透過等高線修改進行階梯式平台整地，計算挖方量 (Cut) 與填方量 (Fill) 並追求就地土方平衡（Cut ≒ Fill），大幅降低擋土牆造價、減少廢土外運碳排放，杜絕邊坡滑動與土石流災害。',
        coreConcepts: [
          '等高線間距與坡度公式：坡度 S (%) = (垂直高差 H / 水平距離 L) × 100%。S < 5% 適合停車活動，5-15% 建築坡，> 30% 為不可開發保育坡。',
          '等高線移動規律：等高線往高處凹入代表「挖方 (Cut)」形成山凹平台；等高線往低處凸出代表「填方 (Fill)」形成外凸邊坡。',
          '截水溝與邊坡排水：整地平台上方必須留設頂部截水溝，將地表逕流導向雨水沉沙池，嚴禁雨水直接沖刷裸露邊坡。'
        ],
        illustration: {
          title: '山坡地階梯式平台等高線修改與土方挖填剖面圖解',
          diagramDescription: '對比原始地形線與整地後平台剖面：上側挖方填入下側、階梯擋土牆排水盲管、平台 1% 洩水坡度與道路人行車行等高銜接。',
          svgType: 'site',
          visualHighlights: [
            { label: '土方挖方區 (Cut)', desc: '削平上方斜坡獲得開闊建築基底，土石暫存於工地待回填', badge: 'Excavation' },
            { label: '土方填方區 (Fill)', desc: '填平下方低窪處，分層壓實（壓實度 ≥ 95%）防止日後沉陷', badge: 'Compaction' },
            { label: '重力式擋土牆 (Retaining Wall)', desc: '設置洩水孔 (Weep Holes) 與碎石濾層，消除牆後孔隙水壓力', badge: 'Retaining Wall' }
          ]
        },
        workedExample: {
          title: '【建築師繪圖實戰】斜坡基地 20×30 米平台網格法土方計算與擋土牆配置',
          scenario: '敷地考試試題：一處平均坡度 10% 之斜坡建地，長 30m、寬 20m。欲整出一座標高 +15.0m 之水平平坦建築平台。原始地表由東側 +16.5m 傾斜至西側 +13.5m。',
          question: '試說明如何使用網格法 (Grid Method) 估算挖填土方量，並擬定邊坡擋土與截水溝配置計畫。',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '劃分方格網並標示各角點挖填深度',
              content: '將 20×30m 基地劃分為 10×10m 之 6 個方格網。中央基準線標高剛好等於原始地表 +15.0m（挖填平衡線零線 Zero Line）；東側三方格角點地表均高於 +15.0m，最大挖深 +1.5m；西側三方格角點地表均低於 +15.0m，最大填深 -1.5m。',
              rationale: '零線將基地均分為東半部挖方區與西半部填方區。'
            },
            {
              stepNumber: '步驟 2',
              title: '計算挖方體積與填方體積',
              content: '東半部挖方區面積 A = 20 × 15 = 300 m²，平均挖深 h_cut = 0.75m，挖方體積 V_cut = 300 × 0.75 = 225 m³。\n西半部填方區面積 A = 300 m²，平均填深 h_fill = 0.75m，填方體積 V_fill = 300 × 0.75 = 225 m³。\n兩者相等，達到 100% 完美「土方就地平衡」！',
              rationale: '土方就地平衡免除昂貴之剩餘土石方外運與購買客土回填成本。'
            },
            {
              stepNumber: '步驟 3',
              title: '配置排水與擋土構造保護地盤',
              content: '在東側挖方邊坡頂部設置 U 型 RC 截水溝阻擋山坡逕流；西側填方邊緣設置高 1.8m 之加勁擋土牆 (Reinforced Earth Wall)，牆後鋪設不織布與透水級配盲管，基底打設微型樁固著於岩盤。',
              rationale: '消除水土流失與邊坡滑動風險，確保暴雨期間地盤絕對安全。'
            }
          ],
          answer: '藉由將整地基準面設於原始坡面中點 (+15.0m)，達成 225 m³ 挖方與 225 m³ 填方之完美就地平衡，搭配東側山頂截水溝與西側加勁擋土牆，徹底解決水土安全。',
          eliteInsight: '敷地考試大忌：千萬不要把整座山挖成一個大懸崖！評審最痛恨破壞自然地貌的大開大挖。善用階梯錯層 (Terraced Platform)，既美觀又省下數百萬擋土牆工程款！'
        },
        relatedLessonLink: {
          subjectSlug: 'surveying',
          topicSlug: 'topographic-mapping',
          title: '等高線判讀與地形測量實習'
        },
        licensureExamCode: '專技高考科目二：敷地計畫與都市設計'
      },
      {
        id: 'site-sponge-city-runoff',
        term: '海綿城市低衝擊開發 (LID) 與基地保水出流管制計算 (Sponge City & Runoff Control)',
        englishTerm: 'Low Impact Development (LID), Rational Formula & Retention Pond Sizing',
        category: '永續敷地與水文防災',
        definition: '氣候變遷帶來極端短延時強降雨，傳統都市將地表全數封死為不透水混凝土（逕流係數 C 高達 0.90），導致暴雨逕流瞬間灌爆都市排水系統。當代敷地計畫強制導入「海綿城市與低衝擊開發（LID）」及《水利法》「出流管制」：透過透水鋪面、植生草溝（Bioswale）、雨水花園（Rain Garden）與微滯洪池落實「滲、滯、蓄、淨、用、排」，確保基地開發後之洪峰出流量不得大於開發前之自然逕流量（零增洪原則）。',
        coreConcepts: [
          '合理化洪峰流量公式（Rational Formula）：Q = (1 / 360) · C · I · A，其中 Q 為尖峰逕流量 (m³/s)，C 為綜合逕流係數（森林草地約 0.20，柏油水泥屋頂約 0.90），I 為重現期降雨強度 (mm/hr)，A 為集水面積 (公頃 ha)。',
          '綜合逕流係數加權平均：C_avg = Σ(C_i · A_i) / A_total。提高綠覆率與透水鋪面面積比例，能直接壓低 C_avg 與洪峰流量 Q。',
          'EEWH 基地保水指標與滯洪量計算：開發後新增之洪峰流量差 ΔQ = Q_post - Q_pre，必須於基地內設置生態滯洪池或地下雨水貯集槽予以攔蓄（最小滯洪體積 V_detention ≥ ΔQ × 降雨延時 t_d），再以小流量重力或抽水排放。'
        ],
        illustration: {
          title: '海綿校園低衝擊開發（LID：綠屋頂 → 透水步道 → 植生滯洪草溝）水文循環剖面圖解',
          diagramDescription: '敷地剖面與水文歷線對比圖：建築薄層綠屋頂截留 30% 雨水、停車場透水連鎖磚碎石底層入滲地下水、地表餘水匯入下凹式雨水花園滯洪淨化，將尖銳洪峰歷線削平延後。',
          svgType: 'site',
          visualHighlights: [
            { label: '透水鋪面與碎石儲水層', desc: '面層透水磚搭配下方 30cm 級配碎石空隙儲水，直接入滲涵養地下水並降溫', badge: 'Pervious Pavement' },
            { label: '下凹式雨水花園 (Bioretention)', desc: '結合耐淹原生水生植栽與砂質過濾土層，攔蓄初期高污染逕流並微氣候降溫', badge: 'Rain Garden' },
            { label: '削峰延時出流管制', desc: '使開發後基地外排洪峰 Q_out ≤ 開發前自然流量 Q_pre，實踐零增洪韌性敷地', badge: 'Zero Peak Increase' }
          ]
        },
        workedExample: {
          title: '【敷地計畫＆環控計算題】2公頃科技園區開發前後之洪峰逕流量與法定最小滯洪池容量計算',
          scenario: '專技高考敷地計畫與環境控制跨科考題：某面積 A = 2.0 公頃（20,000 m²）之郊區草地（開發前自然逕流係數 C_pre = 0.25）欲開發為智慧科技園區。開發後園區配置包含：建築屋頂與不透水車道佔 1.2 公頃（C₁ = 0.90）、透水鋪面廣場佔 0.4 公頃（C₂ = 0.50）、生態綠地草坡佔 0.4 公頃（C₃ = 0.20）。當地 25 年重現期設計暴雨強度 I = 180 mm/hr。',
          question: '試求：(1) 開發前之尖峰逕流量 Q_pre 與開發後之綜合逕流係數 C_post、尖峰逕流量 Q_post 各為多少 m³/s？(2) 若法規要求「開發後外排洪峰不得大於開發前（零增洪）」，且按連續 1 小時（3,600 秒）設計暴雨延時簡易估算，園區內至少需規劃多少立方公尺（m³）之生態滯洪池容量？',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '計算開發前自然草地之尖峰逕流量 Q_pre',
              content: '套用合理化公式 Q = (1 / 360) × C × I × A（其中 A = 2.0 ha，I = 180 mm/hr，C_pre = 0.25）：\nQ_pre = (1 / 360) × 0.25 × 180 × 2.0 = 0.25 m³/s。',
              rationale: '注意 (1/360) × 180 × 2.0 剛好約分等於 1.0，故 Q 直接等於 C 值（0.25 m³/s）。'
            },
            {
              stepNumber: '步驟 2',
              title: '計算開發後園區之加權綜合逕流係數 C_post 與尖峰逕流量 Q_post',
              content: '按各分區面積加權平均求 C_post：\nC_post = (1.2 × 0.90 + 0.4 × 0.50 + 0.4 × 0.20) / 2.0 = (1.08 + 0.20 + 0.08) / 2.0 = 1.36 / 2.0 = 0.68。\n代入合理化公式求開發後尖峰流量 Q_post：\nQ_post = (1 / 360) × 0.68 × 180 × 2.0 = 0.68 m³/s。',
              rationale: '開發後因不透水面積增加，尖峰逕流量由 0.25 m³/s 暴增至 0.68 m³/s（增加 2.72 倍）。'
            },
            {
              stepNumber: '步驟 3',
              title: '計算零增洪出流管制所需之最小生態滯洪池容量 V_req',
              content: '每秒需攔截於基地內部之超額逕流量 ΔQ = Q_post - Q_pre = 0.68 - 0.25 = 0.43 m³/s。\n在持續 t_d = 1 小時 = 3,600 秒之設計暴雨下，所需最小滯洪池儲水體積：\nV_req = ΔQ × t_d = 0.43 m³/s × 3,600 s = 1,548 m³。\n敷地設計對策：於園區西側低窪綠地規劃一座面積約 1,050 m²、有效蓄水深度 1.5 m（容量 1,575 m³ > 1,548 m³）之「下凹式景觀生態滯洪池」，平時作為親水綠茵草坪，暴雨時蓄水削峰。',
              rationale: '將工程滯洪池轉化為平日可親近之微氣候景觀生態水塘，是敷地計畫申論拿高分的核心手法。'
            }
          ],
          answer: '(1) 開發前 Q_pre = 0.25 m³/s；開發後綜合逕流係數 C_post = 0.68，尖峰逕流量 Q_post = 0.68 m³/s；(2) 1 小時暴雨延時下至少需設置 1,548 m³ 之生態滯洪空間。',
          eliteInsight: '敷地計畫繪圖加分必殺技：不管考公園、校園還是集合住宅敷地，永遠在基地地勢最低的角落畫一個「下凹式生態滯洪雨水花園（標註：海綿城市 LID 透水鋪面＋植生草溝＋微滯洪池）」，既解決暴雨排水又賺到 EEWH 基地保水與生物多樣性雙指標！'
        },
        relatedLessonLink: {
          subjectSlug: 'geography',
          topicSlug: 'environmental-issues',
          title: '環境議題、洪峰逕流與海綿城市防災工程'
        },
        licensureExamCode: '專技高考科目二/六：敷地計畫與基地保水環境控制'
      },
      {
        id: 'site-lynch-urban-image-tod',
        term: '凱文・林區《都市意象》五元素與 TOD 人本都市設計 (Urban Image & TOD)',
        englishTerm: 'Kevin Lynch\'s 5 Elements of Urban Image, TOD & Complete Streets',
        category: '都市設計理論與實務',
        definition: '建築師在面對街廓與城市尺度的都市設計時，必須建立清晰可讀的場所結構。麻省理工學院教授凱文・林區（Kevin Lynch）於經典名著《都市意象（The Image of the City）》提出構成市民空間心智地圖（Mental Map）的五大元素：「通道（Paths）、邊緣（Edges）、區域（Districts）、節點（Nodes）、地標（Landmarks）」。當代都市設計更結合「大眾運輸導向開發（TOD, Transit-Oriented Development）」與珍・雅各（Jane Jacobs）「街道之眼（Eyes on the Street）」，打造 500m 步行生活圈、人車分流、住商混合與騎樓開放空間串聯之低碳活力城市。',
        coreConcepts: [
          '凱文・林區都市意象五元素：① 通道（Paths：林蔭步行街、捷運廊道）；② 邊緣（Edges：河岸水際線、綠帶與城牆界線）；③ 區域（Districts：具共同紋理特徵之歷史街區或文創園區）；④ 節點（Nodes：動線交會之車站廣場、轉運核心）；⑤ 地標（Landmarks：具視覺方向指引性之鐘樓、高塔或古樹）。',
          'TOD 大眾運輸導向開發（5D 原則）：以捷運／鐵路場站為核心節點（Node），在半徑 400~800m（步行 5~10 分鐘）範圍內實施高密度（Density）、高強度混合使用（Diversity：商辦＋社宅＋公托）、人性化步行動線設計（Design），減少私人汽車依賴。',
          '珍・雅各「街道之眼」與積極街廓介面（Active Frontage）：反對封閉死寂的超級街廓圍牆；主張建築底層沿街面應退縮留設連續遮陽避雨騎樓／帶狀開放空間，並配置透明商業櫥窗、咖啡座與全天候活動，透過市民自然守望（Natural Surveillance）保障街道治安與生機。'
        ],
        illustration: {
          title: 'TOD 捷運場站街廓之「林區都市意象五元素」與人本退縮綠廊立體配置圖解',
          diagramDescription: '都市街廓鳥瞰與街道斷面圖解：捷運站下沉廣場作為核心節點（Node）、視覺軸線端點設置文化地標塔（Landmark）、沿街建築退縮 6m 留設雙排喬木林蔭步行通道（Path）與沿河岸親水邊緣（Edge）。',
          svgType: 'site',
          visualHighlights: [
            { label: '林區五元素整合', desc: '以林蔭綠廊 (Path) 串聯捷運廣場 (Node) 與水岸邊界 (Edge)，對準端景地標 (Landmark)', badge: '5 Urban Elements' },
            { label: 'TOD 高密度混合核心', desc: '場站 400m 核心區結合共構商場、社會住宅與轉運站，落實零碳步行生活圈', badge: 'TOD 400m Core' },
            { label: '積極街廓與街道之眼', desc: '一樓沿街面取消實牆改為連續透明店面與戶外咖啡座，形成 24 小時自然治安守望', badge: 'Eyes on the Street' }
          ]
        },
        workedExample: {
          title: '【專技高考敷地與都市設計申論繪圖】捷運站旁 3 公頃舊工業區轉型 TOD 混合住商街廓規劃',
          scenario: '專技高考科目二（敷地計畫與都市設計 4 小時繪圖題）：某直轄市捷運站東側有一塊面積 3.0 公頃之完整街廓（原為廢棄紡織廠，北臨 20m 林蔭大道、南臨生態河岸公園、西側緊鄰捷運站出口廣場）。市政府擬透過都市更新將其轉型為「TOD 智慧低碳住商混合生活園區（含商業辦公、青銀共居社會住宅、社區托育中心與歷史煙囪地標廣場）」。',
          question: '試運用凱文・林區《都市意象》五元素與 TOD 大眾運輸導向設計原則，擬定該街廓之「開放空間軸線、人車分流系統、量體天際線配置與沿街面退縮斷面」四大規劃策略。',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '建構林區《都市意象》五元素空間骨架',
              content: '① 節點（Node）：於基地西側正對捷運站出口處留設 50×50m 之「入口迎賓廣場」並銜接二樓立體空橋；② 地標（Landmark）：原地保留舊紡織廠百年紅磚大煙囪與老榕樹群，作為全區中央視覺地標；③ 通道（Path）：開闢一條由西側捷運站廣場斜向貫穿中央煙囪地標、直通南側河岸公園之 15m 寬「對角線徒步綠廊」；④ 邊緣（Edge）：南側沿河岸退縮 10m 打造階梯式親水生態綠帶；⑤ 區域（District）：西側高強度商業辦公區與東側寧靜青銀社宅區分區明確。',
              rationale: '在敷地配置圖上直接標註 Path / Edge / District / Node / Landmark 五大英文標籤，結構一目了然。'
            },
            {
              stepNumber: '步驟 2',
              title: '落實 TOD 分圈層量體天際線與微氣候風廊',
              content: '遵循 TOD 強度梯度與「北高南低、西高東低」天際線原則：緊鄰西側捷運站與北側 20m 大道配置 18 層商辦大樓（阻擋冬季東北季風）；東側配置 8~12 層青銀共居社會住宅（一樓設置托嬰與日照中心）；南側臨河岸全面壓低為 2~3 層穿透式文創餐飲 pavilion，確保夏季西南季風與河岸景觀視線（View Corridor）無礙吹入街廓深處。',
              rationale: '量體配置同時滿足 TOD 容積分配、日照陰影退縮與夏季西南風引風入城三大物理目標。'
            },
            {
              stepNumber: '步驟 3',
              title: '100% 人車分流與「街道之眼」積極沿街面斷面設計',
              content: '汽車地下停車場出入口（Ramp）集中設於北側次要道路邊緣，實現地面層「100% 無車徒步園區（Pedestrian-Only Ground Plane）」，僅保留緊急消防車雲梯救災通道（寬 ≥ 4m、轉彎半徑 ≥ 12m）。沿街建築一樓全面退縮 6m（含 2m 植栽設施帶＋4m 連續無障礙遮陽騎樓），底層配置透明商店與共享大廳，實踐珍・雅各「街道之眼」安全活力街道。',
              rationale: '人車徹底分流（車行截流於外圈入地下、地面層全留給行人與消防動線）是敷地考試必拿高分的鐵律。'
            }
          ],
          answer: '以「西側捷運迎賓節點 (Node) → 中央古煙囪地標 (Landmark) → 南側親水河岸邊界 (Edge)」之對角線徒步綠廊 (Path) 為空間主軸；量體採西高東低、北高南低之 TOD 梯度並留設西南夏季風廊；交通採外圍截流下地之 100% 地面人車分流與 6m 退縮積極沿街面設計。',
          eliteInsight: '敷地與都市設計 4 小時手繪拿分公式：版面一定要畫出三張關鍵小圖：①「林區五元素與人車動線分離 Diagram（紅線行人、藍線車行入地下、橘虛線消防車道）」；②「北高南低天際線與西南季風日照大剖面」；③「沿街退縮 6m 人行道＋植栽帶＋騎樓之 1:100 街道橫斷面」！'
        },
        relatedLessonLink: {
          subjectSlug: 'geography',
          topicSlug: 'population-urban',
          title: '都市空間結構、中心地與 TOD 大眾運輸導向開發'
        },
        licensureExamCode: '專技高考科目二：敷地計畫與都市設計'
      }
    ]
  },

  // =========================================================================
  // 7. 營建法規、技術規則與事務所實務 (Codes & Practice)
  // =========================================================================
  {
    id: 'codes',
    code: 'ARCH-361~562',
    title: '營建法規、技術規則與執業實務 (Codes, Regulations & Practice)',
    englishTitle: 'Building Codes, Fire Safety Regulations & Professional Practice',
    credits: '共 10 學分 (3 學期必修)',
    academicYear: '大三至大五',
    iconName: 'FileText',
    badge: '執業門檻',
    themeColor: 'rose',
    summary: '合法是一切設計的前提！精熟建築法規、建蔽容積檢討、防火避難設施與建築師事務所執業合約與監造責任。',
    licensureMapping: '專技高考科目三：營建法規與實務 (選擇50% + 申論50%)',
    recommendedBooks: [
      '《建築技術規則解說與實務圖例》— 內政部國土署',
      '《營建法規解析》— 潘冀聯合建築師事務所顧問團隊',
      '《建築師執業手冊》— 中華民國全國建築師公會'
    ],
    knowledgePoints: [
      {
        id: 'codes-fire-safety-egress',
        term: '建築技術規則：防火區劃與雙向避難安全梯檢討',
        englishTerm: 'Fire Compartmentation & Egress Stairs Compliance',
        category: '法規與生命安全',
        definition: '台灣《建築技術規則》建築設計施工編規定：各樓層樓地板面積超過 1500 m²（高層建築 100 m²）必須以具 1 小時以上防火時效之防火門窗與防火牆劃分為獨立「防火區劃 (Fire Compartment)」。避難動線必須保證「雙向避難原則」，任一點至直通樓梯之步行距離不得超過法定限值（一般 30m，具自動滅火與耐火構造得放寬至 50m）。',
        coreConcepts: [
          '防火區劃目的：將火勢、濃煙與高溫局限於單一防火單元內至少 60 分鐘，為人員爭取疏散黃金時間。',
          '特別安全梯 (Pressurized Smoke-proof Stairs)：樓高超過 15 層或地下 3 層以下必須設置，進入樓梯間前需經過具排煙設備之「排煙室」或室外陽台。',
          '雙向逃生夾角檢討：兩座安全梯出入口距離不得太近，其直線距離應大於該防火區劃最大對角線長度之三分之一以上，防止火災同時封死兩座逃生口。'
        ],
        illustration: {
          title: '商業大樓防火區劃與雙向逃生動線法規檢討圖解',
          diagramDescription: '平面檢討圖解：1500m² 甲種防火門防火區劃線、特別安全梯排煙室動線、最大步行距離 30m/50m 測量路徑與無障礙避難等候平台。',
          svgType: 'codes',
          visualHighlights: [
            { label: '甲種防火門 (Fire Door)', desc: '具備 1 小時以上阻熱性與遮焰性，常閉並附設順序自動關閉器', badge: '60A Fire Door' },
            { label: '排煙室 (Smoke Vestibule)', desc: '正壓送風或機械排煙，形成氣壓屏障徹底阻絕致命濃煙侵入樓梯', badge: 'Smoke Evacuation' },
            { label: '雙向逃生路線', desc: '任何辦公室出口皆可往左或往右通往不同安全梯，無死巷 (Dead-end)', badge: 'Two-way Egress' }
          ]
        },
        workedExample: {
          title: '【建築師法規實務】商場各層避難步行距離與樓梯總寬度檢討計算',
          scenario: '執業建築師審查案例：某 5 層樓商場百貨，每層樓地板面積 2400 m²，內部全區設置自動灑水滅火設備與耐火構造。商場最遠專櫃角落距離最近安全梯 42 公尺，至另一座安全梯 68 公尺。',
          question: '試依據《建築技術規則》設計施工編第 93 條與第 98 條，檢核：(1) 其避難步行距離是否合法？(2) 若每層預估避難人數為 800 人，其逃生樓梯總寬度至少需多少公尺？',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '檢討防火避難步行距離',
              content: '建築技術規則第 93 條規定：商場供公眾使用建築物，室內任一點至直通樓梯之步行距離通常不得超過 30 公尺。但本案全棟採用耐火構造且裝設自動灑水設備，法定步行距離得放寬至 50 公尺。\n檢核：最遠點至最近樓梯為 42 公尺 ≤ 50 公尺，故「第一道避難路徑合法」！但至第二座樓梯 68m 超標，必須在中段增設第三座安全梯以避免死角。',
              rationale: '自動滅火設施具備降溫與抑火功能，法規允許放寬步行距離。'
            },
            {
              stepNumber: '步驟 2',
              title: '計算樓梯避難寬度需求',
              content: '法規第 98 條規定：商場及娛樂場所，每層避難人數每 100 人，樓梯總寬度不得小於 0.6 公尺。\n計算：800 人 ÷ 100 × 0.6m = 4.8 公尺。\n且每座直通樓梯之淨寬度不得小於 1.4 公尺。',
              rationale: '樓梯寬度決定人群在驚慌疏散時的單位時間人流通過率 (Flow Rate)。'
            },
            {
              stepNumber: '步驟 3',
              title: '配置安全梯座數與各梯淨寬',
              content: '總寬度需 ≥ 4.8m，若設置 3 座特別安全梯，各梯寬度配置為 1.6m (1.6m × 3 = 4.8m ≥ 4.8m，且每座 1.6m > 1.4m 滿足單梯下限)。同時調整位置使全區任一點至兩座不同樓梯距離均 ≤ 50m。',
              rationale: '均勻分配疏散人流，兼顧法規寬度與逃生步行幾何極限。'
            }
          ],
          answer: '在配備自動灑水之耐火商場中，最大步行距離 42m ≤ 50m 放寬值；800 人所需樓梯總寬度為 4.8 公尺，配置 3 座淨寬 1.6 公尺之特別安全梯即可全數合規。',
          eliteInsight: '事務所生存法寶：建築法規是死穴！如果方案過了大評才被建管處退件說「步行距離超標 2 米」，整個方案平面與結構柱網得全拆重畫！做設計第一天就要先把「安全梯紅線」定死！'
        },
        relatedLessonLink: {
          subjectSlug: 'extensions',
          topicSlug: 'certification',
          title: '專業證照、法規與建築師執業倫理'
        },
        licensureExamCode: '專技高考科目三：營建法規與實務'
      },
      {
        id: 'codes-zoning-far-bcr-skyexposure',
        term: '都市計畫建蔽率、容積率、面前道路削線與冬至日照陰影檢討 (Zoning, FAR/BCR & Daylight Envelope)',
        englishTerm: 'Building Coverage Ratio (BCR), Floor Area Ratio (FAR), Setback Planes & Solar Rights',
        category: '都市計畫與建築量體法規',
        definition: '建築物的最大三維量體包絡線（Building Envelope）是由土地使用分區管制與《建築技術規則》共同雕刻而成：「建蔽率（BCR）」限制一樓最大水平投影面積以留設法定空地透水採光；「容積率（FAR）」結合免計容積項目（機電、安全梯、陽台、地下防空避難停車）決定總樓地板面積；「面前道路高度比與陰影面積限制（3.6:1 斜率）」以及「住宅區冬至有效日照 ≥ 1 小時」則決定了高樓層的階梯退縮剖面。',
        coreConcepts: [
          '建蔽率（BCR）與容積率（FAR）核心公式：最大建築面積 A_build ≤ 基地面積 A_site × 法定建蔽率；基準容積樓地板面積 A_FAR ≤ A_site × 法定容積率（若加上都更、危老或開放空間容積獎勵，須受各該法規上限約束）。',
          '免計容積與陽台規定：屋頂突出物（小於建築面積 1/8 或 25m²）、依法設置之地下防空避難室與停車空間、每層不超過該層樓地板面積 10% 之陽台（與梯廳合計不超過 15%）及機電設備空間，得依《建築技術規則》第 162 條免計入容積總樓地板面積。',
          '高度限制與冬至日照權（第 40-1 條）：新建或增建建築物高度超過 21 公尺（約 7 層樓）部分，在冬至日（12月22日）真太陽時上午 9 時至下午 3 時之間，應使鄰近住宅區基地有一小時以上之有效日照。'
        ],
        illustration: {
          title: '建築量體法規包絡線（建蔽率留設法定空地、面前道路削線與北向冬至日照退縮）剖面圖解',
          diagramDescription: '法規量體三維包絡剖面圖解：基地境界線、建蔽率 60% 留設 40% 透水法定空地、面前道路對側境界線起算之高度削線（3.6:1 陰影限制）以及高於 21m 處向南階梯退縮以保障北側鄰地冬至 1 小時日照權。',
          svgType: 'codes',
          visualHighlights: [
            { label: '建蔽率與法定空地', desc: '限制建築最大水平投影佔比，確保都市街廓微氣候通風、採光與基地保水綠覆率', badge: 'BCR & Open Space' },
            { label: '面前道路高度削線', desc: '確保街道高寬比 (H/W) 不致過度壓迫，維持道路天空開闊率與火災雲梯車作業空間', badge: 'Sky Exposure Plane' },
            { label: '冬至 1 小時日照權', desc: '樓高超過 21m 部分須檢討冬至 9:00~15:00 等時間日影圖，向南退縮保障北側住宅日照', badge: 'Winter Solstice Sun' }
          ]
        },
        workedExample: {
          title: '【建築師高考法規＆大設計必算】集合住宅基地之建蔽率、容積率、開放空間獎勵與最大可建樓層試算',
          scenario: '專技高考建築計畫與設計／營建法規實戰題：某住三基地面積 A_site = 1,000 m²，法定建蔽率 BCR = 50%，法定基準容積率 FAR = 240%。建築師擬將一樓實際設計建蔽率壓低至 40%（每層主建物基準面積 400 m²）以留設大面積沿街開放空間廣場，並依法獲得基準容積 15% 之容積獎勵；另每層規劃有依第 162 條規定上限 15% 之免計容積面積（陽台＋梯廳）及免計容積之機電空間。',
          question: '試求：(1) 該基地之「法定最大建築面積」與「法定空地最小面積」各為多少 m²？(2) 計入 15% 容積獎勵後之「總容積樓地板面積上限」為多少 m²？(3) 若每層計入容積之標準層面積固定為 360 m²，該大樓地上層可興建幾層？',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '計算最大法定建築面積與最小法定空地面積',
              content: '法定最大建築面積 A_max_build = 基地面積 A_site × 法定建蔽率 = 1,000 m² × 50% = 500 m²。\n法定最小空地面積 A_min_open = A_site - A_max_build = 1,000 - 500 = 500 m²。\n（本案實際設計一樓建築面積僅 1,000 × 40% = 400 m² ≤ 500 m²，實際留設空地達 600 m²，合規且創造優質街角廣場！）',
              rationale: '建蔽率控管的是水平投影面積上限，實際設計建蔽率低於法定值才能拉高樓層並騰出地面綠地。'
            },
            {
              stepNumber: '步驟 2',
              title: '計算基準容積與含 15% 獎勵後之總容積樓地板面積',
              content: '基準容積樓地板面積 A_base_FAR = A_site × FAR = 1,000 m² × 240% = 2,400 m²。\n開放空間獎勵容積 ΔA_bonus = A_base_FAR × 15% = 2,400 × 0.15 = 360 m²。\n合計總容積樓地板面積上限 A_total_FAR = 2,400 + 360 = 2,760 m²。',
              rationale: '容積獎勵係以「基準容積（2,400 m²）」為基數乘以獎勵百分比。'
            },
            {
              stepNumber: '步驟 3',
              title: '推算地上可興建樓層數並檢核 21m 日照權門檻',
              content: '若每層計入容積之標準層面積為 360 m²（另加 15% 免計容積陽台梯廳 54 m²，單層實際施工面積約 414 m²）：\n可興建地上樓層數 N = A_total_FAR / 360 = 2,760 / 360 = 7.67 層 ⇒ 可規劃為「地上 8 層樓」（其中第 8 層局部退縮為 240 m² 露台戶）。\n法規提醒：8 層樓總高約 26m > 21m，故第 7、8 層北側量體必須退縮以符合冬至日北側鄰地 1 小時有效日照規定！',
              rationale: '在頂層做局部退縮露台戶（Setback Penthouse），既能剛好用完剩餘容積（240 m²），又能一併通過北向冬至日照檢討！'
            }
          ],
          answer: '(1) 法定最大建築面積 500 m²、法定最小空地 500 m²；(2) 含 15% 獎勵後總容積樓地板面積為 2,760 m²；(3) 標準層容積面積 360 m² 時可興建地上 8 層（第 8 層退縮為 240 m² 並符合 21m 以上冬至日照退縮）。',
          eliteInsight: '建築師大設計破題第一件事：拿到考卷前 15 分鐘，立刻在草稿紙算出「A_build = 基地 × 建蔽率」與「A_FAR = 基地 × 容積率」，決定你要蓋幾層樓、單層面積多大！沒算容積就憑感覺亂畫平面，面積差一倍直接不及格！'
        },
        relatedLessonLink: {
          subjectSlug: 'civics',
          topicSlug: 'law-life',
          title: '建築法規、建蔽容積管制與公民生活空間'
        },
        licensureExamCode: '專技高考科目三：營建法規與實務'
      },
      {
        id: 'codes-universal-design-accessibility',
        term: '建築物無障礙設施設計規範與全齡通用空間檢核 (Accessibility & Universal Design Codes)',
        englishTerm: 'Accessible Ramp Slope (1:12), 150cm Wheelchair Turning Circle & Universal Restrooms',
        category: '人本法規與通用設計',
        definition: '隨著台灣邁入超高齡社會（65歲以上人口佔比逾 20%），《建築物無障礙設施設計規範》已成為所有公共建築與集合住宅建照審查的必考鐵律。建築師必須將「通用設計（Universal Design）七大原則」內化為精準的空間幾何：從室外引導通路、1:12 雙扶手無障礙坡道、零門檻自動門／橫拉門、150cm 輪椅 360° 迴轉圓，到無障礙廁所盥洗室與昇降機點字鏡面配置，確保輪椅使用者、視障者、高齡長者與推嬰兒車家庭皆能尊嚴自主地使用建築。',
        coreConcepts: [
          '無障礙通路與坡道黃金尺寸：室外無障礙通路淨寬 ≥ 130 cm、室內通路走廊淨寬 ≥ 120 cm（單扇門通過淨寬 ≥ 80 cm 或 90 cm）；坡道坡度不得大於 1:12（高差 ≤ 20cm 得放寬至 1:10，高差 ≤ 5cm 為 1:5），且每垂直上升 75 cm 必須設置長度 ≥ 150 cm 之水平中繼休息平台。',
          '坡道防護三套件：坡道兩側需設連續雙層扶手（高 75 cm 與 85 cm，端部水平延伸 30 cm 防勾撞）、兩側邊緣設高度 ≥ 5 cm 之防護緣（防止輪椅前輪滑出墜落），起終點設 30 cm 深之警示導盲磚。',
          '無障礙廁所與昇降機硬指標：無障礙廁所內部必須保留直徑 ≥ 150 cm 之完整輪椅迴轉空間、採用橫拉門或外開門（淨寬 ≥ 80 cm，嚴禁向內開卡死輪椅）、馬桶兩側設可動式與L型扶手及緊急求助鈴（離地 35cm 與 90cm 雙高度按鈕）。'
        ],
        illustration: {
          title: '法定無障礙坡道（1:12 坡度、75cm 高差中繼平台、雙層扶手防護緣）與 150cm 迴轉廁所詳圖',
          diagramDescription: '工程法規檢核圖解：左側為高差 1.2m 之折返式 1:12 無障礙坡道（含 150×150cm 轉折休息平台、75/85cm 雙層扶手與 5cm 防護緣）；右側為無障礙廁所平面（含 Ø150cm 輪椅迴轉虛線圓、橫拉門與雙高度求助鈴）。',
          svgType: 'codes',
          visualHighlights: [
            { label: '1:12 坡道與中繼平台', desc: '每爬升 75cm 高差強制設 150cm 平坦休息段，兩側配 75/85cm 雙層連續扶手與 5cm 防護緣', badge: '1:12 Slope & Landing' },
            { label: 'Ø150cm 輪椅迴轉圓', desc: '梯廳、坡道轉折處與無障礙廁所內部必留直徑 150cm 無障礙淨空圓，供輪椅 360° 原地迴轉', badge: 'Ø150cm Turning' },
            { label: '雙高度緊急求助鈴', desc: '廁所牆面同時配置離地 90cm (坐姿可及) 與離地 35cm (跌倒趴地可及) 之連動蜂鳴求助按鈕', badge: 'Dual Emergency Call' }
          ]
        },
        workedExample: {
          title: '【建築師法規＆施工大樣實戰】高差 1.35 公尺入口大廳之雙折無障礙坡道幾何與扶手細部設計',
          scenario: '專技高考科目三／科目五跨科考題：某社區日間照顧中心一樓室內大廳地坪標高為 +1.35 m，戶外人行道標高為 ±0.00 m。受限於前院深度，建築師決定設計一座「180° 雙折返式（U-turn）無障礙坡道」連接戶外人行道與一樓大廳玄關。',
          question: '試依據《建築物無障礙設施設計規範》計算：(1) 該坡道至少需分為幾段斜坡（需設幾處中繼轉折平台）？每段斜坡之水平投影長度與平台深度各為多少公尺？(2) 列出該坡道在「淨寬、扶手高度、端部延伸與邊緣防護」之四項法定強制尺寸。',
          difficulty: '高考建築師',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '檢核垂直爬升高差（≤ 75cm）並切分坡道段數',
              content: '已知總高差 H = 1.35 m = 135 cm。\n法規規定：坡道每垂直上升高差超過 75 cm 時，必須設置一處中繼休息／轉折平台。\n因為 75 cm < 135 cm ≤ 150 cm（2 × 75 cm），故將坡道均分為「2 段斜坡（每段爬升 H₁ = H₂ = 67.5 cm ≤ 75 cm）」，中間設 1 處 180° 轉折中繼平台！',
              rationale: '每段爬升 67.5 cm 低於法定上限 75 cm，輪椅推行者在半途平台可安全喘息轉向。'
            },
            {
              stepNumber: '步驟 2',
              title: '計算各段斜坡水平長度與起點、轉折、終點平台尺寸',
              content: '按法定最大坡度 S = 1:12：\n- 第一段斜坡水平長 L₁ = 0.675 m × 12 = 8.10 m（由 ±0.00m 升至 +0.675m）；\n- 中間 180° 雙折轉向平台：淨深至少 1.50 m、淨寬至少 1.80~2.00 m（配合兩道並排斜坡總寬）；\n- 第二段斜坡水平長 L₂ = 0.675 m × 12 = 8.10 m（由 +0.675m 升至 +1.35m）；\n- 起點與終點（玄關門前）各留設 1.50 m × 1.50 m 以上之水平輪椅迴轉平台。\n因此，採用 180° 雙折配置後，前院所需總水平縱深僅需：起點平台 1.5m + 斜坡長 8.1m + 轉折平台 1.5m = 11.10 公尺（比單直跑 16.2+4.5=20.7m 節省近一半基地深度！）。',
              rationale: '180° 雙折坡道（Switchback Ramp）是基地前院深度有限時最經典的空間緊湊化解法。'
            },
            {
              stepNumber: '步驟 3',
              title: '標註無障礙坡道四大法定構造細部尺寸',
              content: '① 坡道淨寬：扶手內側有效淨寬度 ≥ 90 cm（雙折坡道建議每段淨寬 100~120 cm）；\n② 雙層連續扶手：高度分別為距坡面 75 cm（兒童／矮小者）與 85 cm（成人），握把直徑 3.2~4.0 cm，與牆壁保持 5 cm 淨間隙；\n③ 端部水平延伸：坡道起點與終點扶手須水平延伸 ≥ 30 cm 並向下或向牆面彎入收頭（防勾破衣物），且加裝點字標示牌；\n④ 邊緣防護緣：未臨牆之臨空側邊緣必須設置高度 ≥ 5 cm 之混凝土或金屬防護緣（Curb）。',
              rationale: '這四組數字（淨寬 90、扶手 75/85、延伸 30、防護緣 5）是營建法規選擇題與構造大樣圖年年必考的送分題。'
            }
          ],
          answer: '(1) 分為 2 段斜坡（每段爬升 67.5cm、水平長 8.10m），中間設 1 處深 1.50m 之 180° 轉折平台，加計起終點 1.50m 平台後總縱深為 11.10m；(2) 法定細部：淨寬 ≥ 90cm、雙層扶手高 75cm/85cm、端部水平延伸 ≥ 30cm、邊緣防護緣高 ≥ 5cm。',
          eliteInsight: '無障礙法規必背數字口訣：「坡度 1 比 12、高差 75 設 150 平台、淨寬 90 迴轉 150、雙扶手 75 與 85、端頭延伸 30 防護緣 5、廁所求助鈴 35 與 90」！這串數字背熟，統測與建築師國考法規直接穩拿 10 分！'
        },
        relatedLessonLink: {
          subjectSlug: 'civics',
          topicSlug: 'society-culture',
          title: '多元社會、通用設計七原則與無障礙空間規範'
        },
        licensureExamCode: '專技高考科目三/五：營建法規與無障礙構造細部'
      }
    ]
  },

  // =========================================================================
  // 8. 數位運算、BIM 與前瞻建築科技 (Computation & BIM)
  // =========================================================================
  {
    id: 'digital',
    code: 'ARCH-271~572',
    title: '數位運算、BIM 與前瞻建築科技 (Computation, BIM & AI Tech)',
    englishTitle: 'Computational Design, BIM Modeling & Advanced AI Workflows',
    credits: '共 14 學分 (4 學期必修/選修)',
    academicYear: '大二至大五',
    iconName: 'Cpu',
    badge: '未來前沿',
    themeColor: 'purple',
    summary: '邁向數位孿生 (Digital Twin)！掌握 Rhino/Grasshopper 演算法幾何、BIM 智慧模型協同與 AI 生成前瞻工具。',
    licensureMapping: '專技高考科目一/二：前瞻數位空間論述與 BIM 施工圖整合作業',
    recommendedBooks: [
      '《Grasshopper 參數化設計教程》— Arturo Tedeschi',
      '《BIM 建築資訊模型導論》— 謝尚賢 (台大 BIM 中心)',
      '《數位構築與未來建築》— Branko Kolarevic'
    ],
    knowledgePoints: [
      {
        id: 'digital-grasshopper-parametric',
        term: 'Grasshopper 節點式運算與性能驅動動態遮陽 (Rhino + GH Parametric Design)',
        englishTerm: 'Algorithmic Form-Finding & Performance-Driven Shading',
        category: '參數化演算法',
        definition: '參數化設計 (Parametric Design) 透過節點與連線建立數學幾何因果網絡。在 Grasshopper 中，設計師定義吸引子點 (Attractor Point) 或日照分析數據，直接驅動建築立面百葉開孔率與旋轉角度，達成「夏季阻絕熱射、冬季導入採光、全年外觀立面動態流動」之高性能前瞻建築。',
        coreConcepts: [
          '資料結構樹狀管理 (Data Trees)：Graft（分支）、Flatten（扁平化）與 Simplify 掌控數萬個構件之陣列關係。',
          '吸引子幾何變換：利用曲線或點至網格各面中心之距離 (Distance)，映射 (Remap) 為旋轉角 θ 或縮放比例 Scale。',
          'Ladybug 環境外掛聯動：導入台灣氣象局 EPW 氣候資料，計算建築表面即時日射量 (Solar Radiation kWh/m²)，以真實物理數據自動調控開孔。'
        ],
        illustration: {
          title: 'Grasshopper 動態吸引子運算與立面雙曲面板展開圖解',
          diagramDescription: '視覺化圖解：Grasshopper 畫布節點連線流向（Point Grid → Distance → Remap Domain → Rotate 3D）與立面金屬遮陽板由密至疏漸層開孔三維模型。',
          svgType: 'digital',
          visualHighlights: [
            { label: '數值重映射 (Remap)', desc: '將 0~50m 之幾何距離，映射為遮陽板 0°~75° 最佳阻熱旋轉角度', badge: 'Remap Component' },
            { label: '雷射切割製造展開', desc: '演算法一鍵將 3D 雙曲面外牆拍扁為 2D 帶編號之鋁板線稿，無縫銜接工廠 CNC', badge: 'Unroll Surfaces' },
            { label: '多目標最佳化 (Galapagos)', desc: '以遺傳演算法搜尋兼顧最小室內熱負荷與最大視野之立面參數', badge: 'Evolutionary Solver' }
          ]
        },
        workedExample: {
          title: '【競圖演算法工作坊】撰寫 Grasshopper 腳本實現太陽方位動態追蹤遮陽板',
          scenario: '國際建築競圖專案：某南向挑高玻璃帷幕大樓，需設計 100 樘垂直旋轉木格柵遮陽百葉。要求遮陽板角度需即時垂直於夏至上午 10:00 (太陽方位角 95°、仰角 62°) 之太陽光線入射向量。',
          question: '試規劃 Grasshopper 核心節點邏輯工作流，說明如何由「太陽向量 Vector」轉換為各樘百葉之「幾何平面旋轉角 θ」。',
          difficulty: '大師實戰',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '建立立面基準網格與旋轉軸心',
              content: '使用 Divide Curve 將南向 30m 長之梁線等分為 100 個點 (Divide Count = 100)。在每個點上建立一條平行於 Z 軸之垂直線 (Line SDL, Vector Z, Length = 4.0m) 作為旋轉軸心。',
              rationale: '確定所有構件在三維笛卡兒坐標系中之空間定位與旋轉幾何自由度。'
            },
            {
              stepNumber: '步驟 2',
              title: '向量投影與夾角運算 (Vector Angle)',
              content: '將太陽入射向量 (Vector 3D: x, y, z) 投影至 XY 水平基準面，得到水平投影向量 V_sun。計算南向外牆法線向量 (0, -1, 0) 與 V_sun 之間的水平夾角 α。透過 Angle 運算組件求出方位差。',
              rationale: '垂直遮陽板主要阻絕水平方位角射入之斜射日光。'
            },
            {
              stepNumber: '步驟 3',
              title: '幾何旋轉與碰撞邊界約束',
              content: '使用 Rotate (Geometry, Angle = α, Axis = Z_line) 旋轉板寬 0.45m 之截面曲線。加入 Minimum/Maximum 約束組件將旋轉角度鎖定在 -75° 至 +75° 之間，防止相鄰百葉旋轉過大互相碰撞打架。最後 Extrude 拉伸出 3D 實體。',
              rationale: '將純數學角轉換為工程上可製造、無干涉衝突的實體金屬/木構件。'
            }
          ],
          answer: '透過「點列分佈 → 太陽光水平向量投影 → 向量夾角求解 → 旋轉角度邊界約束 (-75°~+75°) → 實體擠出」之五步節點鏈，達成 100 樘遮陽百葉自動對位之性能驅動參數化立面。',
          eliteInsight: '競圖殺手鐧：不要只給評審一張靜態渲染圖！在簡報時現場拖動 Grasshopper 太陽時間滑桿，展示立面百葉如向日葵般隨時間優雅轉動，直接拿下競圖首獎！'
        },
        relatedLessonLink: {
          subjectSlug: 'extensions',
          topicSlug: 'parametric-design-and-ai-assisted-competition',
          title: '參數化設計與 AI 輔助競圖'
        },
        licensureExamCode: '專技高考科目一/二：前瞻數位空間論述'
      },
      {
        id: 'digital-bim-clash-lod-cde',
        term: 'BIM 模型發展程度 (LOD 100~500)、管線衝突檢測與 OpenBIM 協同 (BIM & Clash Detection)',
        englishTerm: 'BIM Level of Development (LOD), MEP Clash Detection & OpenBIM IFC/CDE',
        category: '建築資訊模型與營建協同',
        definition: '建築資訊模型（BIM, Building Information Modeling）是貫穿建築全生命週期的「單一真實資訊源（Single Source of Truth）」。從概念量體（LOD 100）、基本設計（LOD 200）、細部施工圖發包（LOD 300）、跨專業介面整合（LOD 350）、工廠預製加工（LOD 400）到竣工營運維護（LOD 500），建築師與結構、機電（MEP）技師在共通資料環境（CDE）中透過國際開放標準 IFC（ISO 16739）與 BCF 進行 3D 碰撞檢測（Clash Detection），在動工前徹底消弭數千處管線穿梁與淨空不足之工程錯誤。',
        coreConcepts: [
          'LOD（Level of Development）五級演進：LOD 100 概念體積算量 → LOD 200 近似尺寸系統配置 → LOD 300 精確幾何尺寸與屬性（建照／施工圖標準）→ LOD 350 含支吊架預埋件跨系統整合 → LOD 400 施工製造加工大樣 → LOD 500 竣工驗收與 7D 設施管理（FM）。',
          '三類碰撞檢測（Clash Detection）：① 硬衝突（Hard Clash：空調風管直接撞穿 RC 大梁）；② 軟衝突／間隙衝突（Soft / Clearance Clash：高壓配電盤前未留 90cm 維修空間或管線保溫棉干涉）；③ 4D 時間工作流衝突（兩台塔吊迴轉半徑或吊裝動線於同日重疊）。',
          'OpenBIM 與共通資料環境（CDE）：以 ISO 19650 規範之雲端 CDE（分 WIP 工作區 → Shared 共享區 → Published 正式發行區 → Archive 歸檔區）管理圖模版本，並透過中立格式 IFC 無損交換模型、以 BCF 傳遞衝突座標視角。'
        ],
        illustration: {
          title: 'BIM 多專業聯邦模型（建築 ARC ＋ 結構 STR ＋ 機電 MEP）3D 衝突檢測與管線穿梁避讓圖解',
          diagramDescription: '3D BIM 剖面透視圖解：Navisworks 紅黃高光標示空調排煙大風管與 RC 大梁之硬衝突點，並展示「梁腹非剪力區預埋不鏽鋼穿梁套管（補強筋加密）」與「管線分層高程避讓（重力排水管優先、有壓風管繞行）」之 CSD/SEM 整合方案。',
          svgType: 'digital',
          visualHighlights: [
            { label: '硬衝突與軟衝突檢出', desc: '動工前自動掃描全棟數萬支 MEP 管線與結構梁柱之幾何相交與檢修淨空干涉', badge: 'Hard & Soft Clash' },
            { label: '穿梁套管結構規範', desc: '穿梁孔洞限設於梁跨中央 1/3 低剪力區、孔徑 ≤ 梁深 1/3，並加設斜向補強鋼筋', badge: 'Beam Penetration' },
            { label: 'OpenBIM (IFC + BCF)', desc: '跨軟體（Revit / ArchiCAD / Tekla）以 ISO 16739 IFC 交換模型、BCF 派工追蹤修正', badge: 'ISO 16739 OpenBIM' }
          ]
        },
        workedExample: {
          title: '【BIM 工程協同實戰】地下室停車場機電管線（MEP）撞梁衝突解決與穿梁套管結構檢核',
          scenario: '某大型醫院地下一樓（層高 3.8m，梁深 90cm，梁下淨高僅 2.9m）進行 LOD 350 BIM 管線綜合套繪（CSD / SEM）時，Navisworks 檢出「60×40cm 防排煙主風管、Ø150mm 污廢水重力排水管、消防灑水主管與電纜架」在主走道上方與 60×90cm RC 大梁發生嚴重硬衝突，若全部走梁下將使走道淨高剩 1.95m（低於法定車道與逃生淨高 2.1m）。',
          question: '試依據 BIM 管線綜合排布優先順序與 RC 結構穿梁開孔規範，擬定：(1) 四大管線之避讓優先權順序；(2) RC 梁腹預埋穿梁套管之法定結構安全位置與尺寸上限（跨度 L = 9.0m、梁深 D = 90cm）。',
          difficulty: '大師實戰',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '確立 MEP 管線衝突避讓三大黃金優先順序',
              content: '在 BIM CSD 管線高程整合中，避讓鐵律為：\n①「重力排水管（污廢水／雨水）絕對優先」：因其必須維持 1/50~1/100 固定自然洩水坡度，不可隨意上下彎折（彎折會阻塞）；\n②「大斷面剛性管（大型防排煙風管、匯流排）次之」：因其斷面龐大、轉彎半徑大，應貼梁底或走梁間高處；\n③「有壓小管與柔性電纜架（給水管、消防管、弱電橋架）讓路」：有壓水管與電纜可靈活做立體翻彎（Offset）繞過大管。',
              rationale: '先定死不可轉折的重力流排水坡度線，再排大風管，最後讓有壓小管翻彎繞行。'
            },
            {
              stepNumber: '步驟 2',
              title: '檢核 RC 大梁預埋穿梁套管之結構安全區間（跨中 1/3、梁深 1/3）',
              content: '為確保走道淨高 ≥ 2.3m，決定將 Ø150mm 排水管與消防主管改由「穿梁套管」穿過深 90cm 之 RC 大梁。依據結構規範：\n- 水平位置：梁兩端支承處剪力最大（嚴禁開大孔），穿梁孔必須設於「梁跨度中央 1/3 至 1/2 低剪力區」（本案跨度 9.0m，應設於距柱面 3.0m ~ 6.0m 區段）；\n- 垂直位置與孔徑：孔洞應設於梁斷面中性軸附近（避開上下緣主筋受拉受壓區），且最大孔徑 d_hole ≤ 梁深 D 之 1/3 = 90 / 3 = 30 cm（Ø150mm = 15cm ≤ 30cm，合規！）；兩孔淨距須 ≥ 3 倍孔徑（45cm），並於套管四周加配 45° 斜向補強筋與密排箍筋。',
              rationale: '梁端承受最大剪力、梁上下緣承受最大彎矩拉壓應力，唯有「跨中腹板中性軸區」剪力與彎矩正應力皆最小，適合預埋套管。'
            },
            {
              stepNumber: '步驟 3',
              title: '輸出 BCF 議題與 LOD 350 軀體預留圖（SEM）',
              content: '於 Revit / Navisworks 將核准之穿梁套管位置轉出 BCF 碰撞解決報告傳予結構技師簽認，並自動生成「LOD 350 結構軀體預留套管施工圖（SEM）」與全站儀放樣座標表，在現場綁紮梁鋼筋階段即精準預埋鋼套管，杜絕完工後事後洗洞切斷主筋！',
              rationale: '將設計衝突解決在混凝土澆置之前，省下現場敲打洗洞與結構補強之巨額成本。'
            }
          ],
          answer: '(1) 管線優先權：重力污廢水管（維持洩水坡度）＞ 大斷面防排煙風管 ＞ 有壓給水消防小管與電纜架（靈活翻彎讓路）；(2) 穿梁套管規範：限設於梁跨中央 1/3 低剪力區及梁深中性軸處，孔徑 ≤ 梁深 1/3（90/3 = 30cm），兩孔間距 ≥ 3 倍孔徑並加配補強斜筋。',
          eliteInsight: '建築師高考構造與施工實務常考題：「管線穿梁開孔原則」！背下十二字真言：「跨中三分之一、梁高三分之一、避開上下主筋、周邊斜筋補強」！無論考選擇題或申論畫圖直接秒殺！'
        },
        relatedLessonLink: {
          subjectSlug: 'extensions',
          topicSlug: 'cad-bim',
          title: '電腦輔助設計、BIM 維度與衝突檢測應用'
        },
        licensureExamCode: '專技高考科目五：建築構造與 BIM 施工管理'
      },
      {
        id: 'digital-gis-3d-digital-twin',
        term: '3D GIS 城市數位孿生、空間疊圖選址與生成式 AI 競圖工作流 (3D GIS & AI Workflow)',
        englishTerm: '3D GIS CityGML Digital Twin, Spatial Overlay Analysis & ControlNet AI Pipeline',
        category: '智慧城市與 AI 建築科技',
        definition: '當代建築科技已跨越單棟建築邊界，將單棟「BIM 模型（IFC）」與宏觀城市「3D GIS 地理資訊系統（CityGML / DEM 數值高程模型）」融合為「城市數位孿生（Urban Digital Twin）」。在專案前端，建築師運用 GIS「環域（Buffer）、視域（Viewshed）、坡度（Slope）與疊圖分析（Overlay）」科學化篩選最佳防救災與日照基地；在概念設計端，則以 3D 白模匯出之精確「深度圖（Depth Map）與邊緣線稿（Canny）」約束生成式 AI（Stable Diffusion + ControlNet），在嚴格鎖定建築透視幾何與比例尺的前提下，高速探索百種材質構造與光影方案。',
        coreConcepts: [
          'GIS 向量（Vector）與網格（Raster）疊圖選址管線：對斷層／捷運站跑「向量環域分析（Buffer）」→ 對 DEM 數值高程跑「網格坡度（Slope < 15%）與視域分析（Viewshed）」→ 執行「布林交集疊圖（Overlay: AND / NOT）」鎖定合法最優基地。',
          'BIM + 3D GIS 數位孿生（Digital Twin）：將微觀建築內部構件資訊（BIM IFC）對位掛載至宏觀大地坐標系（TWD97 3D GIS），實現都市尺度之日照陰影權模擬、都市風廊 CFD 分析、淹水預警與全城淨零碳排監控。',
          '3D 幾何約束之 AI 建築工作流（Geometry-Constrained AI）：純文字 Prompt 無法控制空間尺度；專業工作流必須由 Rhino / Revit 輸出「同視角 Canny 線稿＋Depth 深度圖＋Segmentation 語意分色圖」輸入 ControlNet，確保 AI 生成之立面材質與原 3D 結構柱網 100% 嚴絲合縫。'
        ],
        illustration: {
          title: '3D GIS 空間疊圖選址（環域＋DEM 坡度＋日照視域）與 ControlNet 幾何約束 AI 渲染管線圖解',
          diagramDescription: '雙聯數位工作流圖解：左半部展示 GIS 三圖層布林交集疊圖篩出最佳基地；右半部展示 Rhino 3D 量體白模導出 Depth 深度圖與 Canny 線稿，經 ControlNet 鎖定透視結構後生成高擬真清水混凝土與木格柵競圖透視圖。',
          svgType: 'digital',
          visualHighlights: [
            { label: 'GIS 環域與疊圖交集', desc: '結合斷層退縮 Buffer、DEM 坡度網格與地籍分區圖層，秒級篩選零災害風險建地', badge: 'Buffer & Overlay' },
            { label: 'BIM + GIS 數位孿生', desc: '整合 TWD97 城市地形與 BIM 建築能源模型，模擬街廓熱島風場與冬至日影遮蔽', badge: 'CityGML + IFC' },
            { label: 'ControlNet 幾何鎖定', desc: '以 3D 模型導出之 Depth 深度與 Canny 線稿約束 AI，杜絕透視變形與結構懸浮錯誤', badge: 'Depth + Canny AI' }
          ]
        },
        workedExample: {
          title: '【前瞻數位建築實戰】運用 GIS 空間分析選址與 Rhino + ControlNet AI 競圖提案全流程設計',
          scenario: '大五畢業設計與國際青年建築競圖題目：某山城縣市欲選址興建一座「山林韌性防災避難中心暨生態博物館」，選址條件須同時滿足：① 距離活動斷層帶 300m 以上；② 位於主要幹道兩側 500m 救援圈內；③ 基地平均坡度小於 15% 且非土石流潛勢溪流影響範圍。選定基地後需在 48 小時內產出兼具精確空間尺度與高質感材質光影之競圖展板。',
          question: '試規劃：(1) 在 QGIS / ArcGIS 中完成此基地篩選之四步空間分析指令流程與資料模式（向量 vs. 網格）；(2) 在 Rhino 建立 3D 量體後，如何結合 ControlNet 與圖面後製完成「幾何零失真」之 AI 輔助競圖版面？',
          difficulty: '大師實戰',
          steps: [
            {
              stepNumber: '步驟 1',
              title: '執行 GIS 向量環域分析（Buffer）劃定安全與交通邊界',
              content: '載入 TWD97 坐標系之向量圖層（Vector）：① 對「活動斷層線」與「土石流潛勢溪流」執行環域分析（Buffer = 300m），標記為禁建排除區（Exclusion Zone）；② 對「主要救援幹道線」執行環域分析（Buffer = 500m），標記為交通可及區（Inclusion Zone）。',
              rationale: '線狀地物的距離擴張範圍必須使用向量環域分析（Buffer）產生多邊形（Polygon）邊界。'
            },
            {
              stepNumber: '步驟 2',
              title: '執行 DEM 網格坡度分析（Slope）與多圖層疊圖交集（Overlay）',
              content: '載入 5m 解析度之「數值高程模型（DEM，網格資料 Raster）」，執行地勢分析求出全區「坡度圖層（Slope）」，並以重分類（Reclassify）篩出坡度 < 15% 之平緩網格轉為向量多邊形。最後執行「疊圖分析（Overlay）」，取【道路 500m 環域 AND 坡度 < 15% NOT 斷層與土石流 300m 環域】，並利用 DEM「視域分析（Viewshed）」確認瞭望塔視野無遮蔽，精準鎖定最優基地！',
              rationale: '結合向量環域與網格地形衍生圖層之布林疊圖，是 GIS 空間決策最核心的標準管線。'
            },
            {
              stepNumber: '步驟 3',
              title: 'Rhino 3D 白模導出 Canny/Depth 圖層驅動 ControlNet 與向量圖表整合',
              content: '將 GIS 選定之基地等高線匯入 Rhino 建立符合結構跨度與無障礙坡道尺度之 3D 建築模型。固定兩點透視相機視角（垂直線絕對垂直），一鍵導出三張底圖：① `Make2D` 向量線稿（供 Illustrator 繪製爆炸軸測 Diagram）；② `Canny` 邊緣線稿與 `Z-Depth` 景深灰階圖（送入 Stable Diffusion ControlNet 鎖定空間幾何與柱網比例，以 Prompt 渲染在地木構與清水混凝土雨林光影）；③ 於 Photoshop 對齊視平線（Horizon Line）合成尺度人偶與剖面光柱，完成兼具科學嚴謹度與視覺震撼力之競圖總圖。',
              rationale: '以 3D 實體模型之 Depth/Canny 硬約束 AI，徹底克服純文字算圖「平立剖對不上、結構反重力」之致命缺陷。'
            }
          ],
          answer: '(1) GIS 選址流程：斷層與道路向量環域分析 (Buffer) → DEM 網格坡度分析與重分類 (Slope < 15%) → 布林疊圖交集差集 (Overlay: AND/NOT) → 視域分析 (Viewshed) 驗證；(2) AI 競圖流程：Rhino 兩點透視鎖定視角 → 同步導出 Make2D 向量圖與 Depth/Canny 約束圖 → ControlNet 鎖定幾何生成材質光影 → PS 視平線人偶合成與 InDesign 12 欄網格排版。',
          eliteInsight: '當代青年建築師最強競爭力：左手用「GIS + Ladybug/Galapagos」拿出無可辯駁的環境選址與微氣候物理數據，右手用「Rhino/BIM + ControlNet + Make2D 爆炸軸測圖」在極短時間內產出大師級圖面！理性數據＋感性空間雙劍合璧，在升學面試與國際競圖無往不利！'
        },
        relatedLessonLink: {
          subjectSlug: 'geography',
          topicSlug: 'gis',
          title: '地理資訊系統 (GIS) 空間分析與 3D 數位孿生'
        },
        licensureExamCode: '專技高考科目二：敷地計畫、GIS 選址與前瞻數位工具'
      }
    ]
  }
];
