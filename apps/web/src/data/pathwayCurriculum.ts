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
      }
    ]
  }
];
