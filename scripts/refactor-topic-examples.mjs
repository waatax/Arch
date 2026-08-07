import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');

const topicExamples = {
  // === chemistry.ts ===
  'matter-composition': {
    question: '【步驟化例題】塗料高分子與 VOCs 揮發機制：某水性乳膠漆標示總揮發性有機化合物 (TVOC) 含量為 20 g/L。若一室內牆面塗刷 50 公升該乳膠漆，求施工過程可能散發之最大 TVOC 重量（克 g）為多少？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析 TVOC 單位定義。20 g/L 表示每公升塗料含 20 克 VOCs。',
      '步驟 2：列計算式。總 VOCs 重量 = 塗料體積 × 單位 TVOC 含量 = 50 L × 20 g/L。',
      '步驟 3：計算解答。50 × 20 = 1000 g (或 1.0 kg)。'
    ],
    answer: '最大散發 TVOC 重量為 1000 公克 (1.0 kg)。'
  },
  'chemical-reactions': {
    question: '【步驟化例題】石灰石鍛燒熱化學反應：煅燒石灰石反應 CaCO3(s) → CaO(s) + CO2(g)，其反應熱 ∆H = +178 kJ/mol。若製造 56 公斤生石灰 (CaO, 分子量 56)，需吸收多少千焦耳 (kJ) 的熱量？',
    difficulty: '中等',
    steps: [
      '步驟 1：計算 CaO 莫耳數。56 kg = 56,000 g。n = 56,000 g / 56 g/mol = 1000 mol。',
      '步驟 2：列熱化學計算。每生成 1 mol CaO 需吸收 178 kJ。',
      '步驟 3：求總吸熱量。Q = 1000 mol × 178 kJ/mol = 178,000 kJ (178 MJ)。'
    ],
    answer: '需吸收 178,000 kJ (178 MJ) 的熱量。'
  },
  'acids-bases-salts': {
    question: '【步驟化例題】酸雨侵蝕大理石化學計算：大理石主成分為碳酸鈣 (CaCO3)。若酸雨中含有 0.05 M 之稀硫酸 (H2SO4)，反應式為 CaCO3 + H2SO4 → CaSO4 + H2O + CO2。10 公升該酸雨最多可溶解多少公克碳酸鈣？(Ca=40, C=12, O=16)',
    difficulty: '中等',
    steps: [
      '步驟 1：計算 H2SO4 莫耳數。n = M × V = 0.05 mol/L × 10 L = 0.5 mol。',
      '步驟 2：由莫耳數比 (1:1) 求溶解之 CaCO3 莫耳數 = 0.5 mol。',
      '步驟 3：莫耳數換算質量。CaCO3 分子量 100。m = 0.5 mol × 100 g/mol = 50 g。'
    ],
    answer: '最多可溶解 50 公克碳酸鈣。'
  },
  'redox': {
    question: '【步驟化例題】鋼筋電化學腐蝕與陰極防蝕法：在混凝土中鋼筋發生電化學鏽蝕時，鐵原子失去電子發生氧化反應：Fe → Fe²⁺ + 2e⁻。防蝕工程中採用「外加電流陰極防護 (ICCP)」，其化學原理為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：識別鋼筋鏽蝕本質。鋼筋陽極反應失去電子溶解形成鐵鏽。',
      '步驟 2：分析陰極防護原理。外加直流電源強制將被保護的鋼筋變成「陰極 (Cathode)」。',
      '步驟 3：總結作用。使鋼筋獲得電子抑制鐵之陽極溶解，達到永久防蝕效果。'
    ],
    answer: '將被保護之鋼筋強制設為「陰極」，透過外加直流電子流抑制鐵之氧化溶解反應。'
  },
  'organic-chemistry': {
    question: '【步驟化例題】高分子建材環氧樹脂 (Epoxy) 固化化學：環氧樹脂由環氧單體與胺類固化劑 (Amine Hardener) 混合，其分子間形成網狀交聯結構之反應類型屬於何者？固化後是否可再次加熱熔融？',
    difficulty: '基礎',
    steps: [
      '步驟 1：辨析高分子固化類型。環氧官能基與胺基發生交聯加成聚合反應。',
      '步驟 2：區分熱塑性與熱固性。網狀交聯高分子屬於「熱固性高分子 (Thermosetting Polymer)」。',
      '步驟 3：判定受熱行為。熱固性高分子受熱不熔融只會在高溫下炭化分解。'
    ],
    answer: '屬於交聯加成聚合反應；固化後屬於「熱固性高分子」，無法再次加熱熔融。'
  },
  'environmental-chemistry': {
    question: '【步驟化例題】光觸媒 TiO2 降解室內甲醛化學：奈米二氧化鈦 (TiO2) 光觸媒在紫外光照射下產生羥基自由基 (·OH)，將室內甲醛 (HCHO) 催化氧化為無害產物。請寫出甲醛完全催化氧化的化學反應產物。',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析甲醛化學元素成分。甲醛分子式為 HCHO (含 C, H, O)。',
      '步驟 2：了解強氧化劑 ·OH 作用。將碳水化合物完全氧化。',
      '步驟 3：確定完全氧化產物。最終轉化為水 (H2O) 與二氧化碳 (CO2)。'
    ],
    answer: '完全氧化產物為「二氧化碳 (CO2)」與「水 (H2O)」。'
  },

  // === civics.ts ===
  'citizenship-community': {
    question: '【步驟化例題】社區營造與公共空間權益：某老舊社區推動「社區綠花園」營造計畫，部分居民主張應劃設為私人停車格。依據公民參與原則，何者為最適當的溝通與決策程序？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析爭議焦點。私人停車需求（私益） vs 社區綠化與公共活動空間（公益）。',
      '步驟 2：對應公民參與機制。應透過社區審議式民主、公聽會或居民大會進行對話討論。',
      '步驟 3：評估最適方案。尋求兼顧停車需求與公共綠化的折衷方案（如透水鋪面綠美化），而非強行私有化。'
    ],
    answer: '辦理社區公聽會與審議大會，透過公共對話尋求兼顧社區綠化與停車需求的方案。'
  },
  'law-life': {
    question: '【步驟化例題】建築法規與基地容積計算：一塊基地位於住宅區，面積為 500 平方公尺。當地法定建蔽率為 60%，法定容積率為 220%。求該基地之「最大建築面積」與「最大建築總樓地板面積」？',
    difficulty: '中等',
    steps: [
      '步驟 1：計算最大建築面積。建築面積 = 基地面積 × 建蔽率 = 500 m² × 60% = 300 m²。',
      '步驟 2：計算最大建築總樓地板面積。總樓地板面積 = 基地面積 × 容積率 = 500 m² × 220% = 1100 m²。',
      '步驟 3：確認結果與法規限制。建築面積不可超過 300 m²，總樓地板面積不可超過 1100 m²。'
    ],
    answer: '最大建築面積為 300 m²，最大建築總樓地板面積為 1100 m²。'
  },
  'economy-sustainability': {
    question: '【步驟化例題】外部效應與碳費政策：鋼鐵與水泥等高碳排建材生產時會排放大量二氧化碳，造成全球氣候變遷。在經濟學上此現象屬於何種「外部性」？政府課徵碳費之主要目的為何？',
    difficulty: '中等',
    steps: [
      '步驟 1：分析經濟學外部性分類。生產過程造成社會其他人未獲補償的損害，稱為「負外部性 (Negative Externality)」。',
      '步驟 2：理解政府干預手段。課徵碳費是將環境污染社會成本納入企業生產成本中（外部成本內部化）。',
      '步驟 3：總結政策影響。促使建材業者研發低碳水泥與再生材料，轉型永續建築。'
    ],
    answer: '屬於「負外部性」；課徵碳費目的在於「外部成本內部化」，誘發業者減碳與綠色創新。'
  },
  'society-culture': {
    question: '【步驟化例題】通用設計與無障礙坡道規範：依據《建築物無障礙設施設計規範》，無障礙通路坡道之高差為 0.5 公尺，若無設置機械昇降設備，則該坡道所需之「最小水平長度」為多少公尺？（法定最大坡度限制為 1:12）',
    difficulty: '基礎',
    steps: [
      '步驟 1：確認坡度公式。坡度 = 高差 / 水平長度 ≤ 1 / 12。',
      '步驟 2：列出方程式。 0.5 / L ≤ 1 / 12 ⇒ L ≥ 0.5 × 12。',
      '步驟 3：計算結果。L ≥ 6 公尺。'
    ],
    answer: '無障礙坡道之最小水平長度為 6 公尺。'
  },
  'labor-ethics': {
    question: '【步驟化例題】職業安全衛生法與施工防護：在建築高空作業施工現場（高處作業高差達 2 公尺以上），雇主依法應提供何種安全防護設施以防止施工人員墜落？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析高空作業危害。2公尺以上高處作業存在高度墜落風險。',
      '步驟 2：查考職安法規要求。應設置適當之護欄、握把、安全網或配戴背負式安全帶。',
      '步驟 3：總結雇主防護責任。提供符合國家標準 CNS 之防墜設備並落實安全檢查。'
    ],
    answer: '設置符合標準之安全護欄、安全網，並強制施工人員配戴背負式安全帶與防墜器。'
  },
  'environment-policy': {
    question: '【步驟化例題】淨零碳排與建築能效標示：我國宣告「2050 淨零排放」目標，其中對於新建建築物之能效評估標示（PERS），最高等級之能效標章為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：了解建築能效標示制度。將建築節能效率分為 1 至 7 級。',
      '步驟 2：識別最高能效等級。超越 1 級且採用綠能與近零碳設計者，頒予「1+ 級 (近零碳建築近零標章)」或「近零碳建築 (Zero Carbon Building)」。',
      '步驟 3：總結極致目標。達到「1+ 級 近零碳建築」。'
    ],
    answer: '最高等級為「1+ 級 (近零碳建築 Near Zero Carbon Building)」。'
  },

  // === drafting.ts ===
  'lines-and-lettering': {
    question: '【步驟化例題】CNS 建築製圖線條層次與線寬規範：在 1:100 建築平面圖中，若粗實線（表示剖切牆體輪廓）線寬設定為 0.5 mm，則中實線（傢俱與門窗圖例）與細線（尺寸標註線）之建議線寬比例為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：回顧 CNS 11567 建築製圖標準。線寬比例通常遵循 4:2:1 或 2:1:0.5 之階梯原則。',
      '步驟 2：計算各線寬。粗線 (0.5 mm) : 中線 (0.25 mm) : 細線 (0.13 mm 或 0.18 mm)。',
      '步驟 3：確定線條層次原則。剖切結構用粗線、未剖切輪廓用中線、輔助尺寸線用細線。'
    ],
    answer: '線寬比例約為 4:2:1，中實線約為 0.25 mm，細線約為 0.13~0.18 mm。'
  },
  'scale': {
    question: '【步驟化例題】比例尺縮放與實地長度換算：一張建築平面圖之比例尺標示為 1:100。若設計者使用直尺在圖面上量得客廳總長度為 6.8 公分，請問該客廳之實際長度為多少公尺？',
    difficulty: '基礎',
    steps: [
      '步驟 1：理解比例尺定義。1:100 代表圖上 1 cm 等於實際 100 cm (1 m)。',
      '步驟 2：計算實際公分高度。實際長度 = 6.8 cm × 100 = 680 cm。',
      '步驟 3：單位換算為公尺。680 cm = 6.8 公尺。'
    ],
    answer: '實際長度為 6.8 公尺。'
  },
  'orthographic-projection': {
    question: '【步驟化例題】第三角法正投影視圖：在我國 CNS 建築製圖採用的「第三角法」正投影中，俯視圖（Plan View）與前視圖（Elevation View）的相對置放位置為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：釐清第三角法投影原理。觀察者在最前/上方，投影面介於觀察者與物體之間（「人→面→物」）。',
      '步驟 2：判定視圖位置。上視圖（俯視圖）放置於前視圖的正上方。',
      '步驟 3：對比第一角法。第一角法上視圖放置於前視圖的正下方；第三角法符合直覺習慣。'
    ],
    answer: '俯視圖（上視圖）位於前視圖的正上方。'
  },
  'sectional-views': {
    question: '【步驟化例題】建築全剖面圖判讀與剖面線：當割面線（Cutting Plane Line）割過鋼筋混凝土柱與梁時，依據 CNS 標準，被剖切到的結構體截面應如何表示？',
    difficulty: '中等',
    steps: [
      '步驟 1：區分被剖切物與未剖切物。被切割到的承重結構體（柱、梁、牆）需加重顯示。',
      '步驟 2：採用塗黑或剖面線表示。混凝土結構通常填滿塗黑，或繪製 45° 等間隔細斜線（剖面線 Hatching）。',
      '步驟 3：確認未剖切物件。後方可見之牆面或背景則以中實線或細實線繪製立面。'
    ],
    answer: '被剖切到的柱梁結構截面需以粗實線框邊，並塗黑或繪製 45° 細斜剖面線表示。'
  },
  'architectural-plan': {
    question: '【步驟化例題】建築平面圖雙線牆體標註：在 1:50 建築平面圖中，若一外牆厚度為 20 公分，則在圖面上該雙線牆體兩外側線條之間距應為多少公釐（mm）？',
    difficulty: '基礎',
    steps: [
      '步驟 1：將實際尺寸換算為 mm。20 cm = 200 mm。',
      '步驟 2：代入比例尺 1:50。圖上距離 = 實際距離 / 50 = 200 mm / 50。',
      '步驟 3：計算圖上距離。200 / 50 = 4 mm。'
    ],
    answer: '圖面上雙線牆體間距應為 4 mm。'
  },
  'architectural-elevation': {
    question: '【步驟化例題】建築立面圖地平線與高程標註：在繪製建築外觀立面圖時，代表地表面的地平線（Ground Line, GL）應採用何種線型與線寬繪製？',
    difficulty: '基礎',
    steps: [
      '步驟 1：理解 GL 線的工程意義。GL 為整座建築物座落之基準地表面。',
      '步驟 2：選擇線型與線寬。GL 線必須比建築物外輪廓更粗，採用特粗實線（如 0.7~1.0 mm）繪製。',
      '步驟 3：標註高程符號。於 GL 旁標註高程 ±0.00m 基準符號。'
    ],
    answer: '應採用特粗實線（線寬 0.7~1.0 mm）繪製地平線 GL。'
  },
  'dimensioning-and-symbols': {
    question: '【步驟化例題】建築尺寸標註規範：在 CNS 11567 建築圖面尺寸標註中，除非另有註明，否則預設之長度尺寸單位為何？是否需要加註單位符號？',
    difficulty: '基礎',
    steps: [
      '步驟 1：查考 CNS 建築製圖規範。建築平面圖與構造圖預設尺寸單位為「公釐 (mm)」。',
      '步驟 2：確認單位加註規則。全圖尺寸均為公釐時，數字旁「不需」另外加註 mm 符號；若採用公尺則須註明 m。',
      '步驟 3：總結解答。單位為公釐 (mm)，不需加註符號。'
    ],
    answer: '預設單位為「公釐 (mm)」，數字旁不需加註 mm 符號。'
  },
  'cad-basics': {
    question: '【步驟化例題】Computer-Aided Design (CAD) 繪圖指令應用：在 AutoCAD 中，若欲將一已知之軸線向兩側各偏移 12.5 cm 以繪製 25 cm 厚之牆體，應使用何種指令？',
    difficulty: '基礎',
    steps: [
      '步驟 1：識別偏移複製指令。AutoCAD 中用於按指定距離平行複製物件之指令為「OFFSET (縮寫 O)」。',
      '步驟 2：輸入偏移距離。輸入距離值 12.5。',
      '步驟 3：點選物件與方向。選取中心軸線，分別向左/右或上/下點選複製出雙線牆體。'
    ],
    answer: '應使用「OFFSET (偏移)」指令，偏移距離設定為 12.5。'
  },

  // === english.ts ===
  'vocabulary-phrases': {
    question: '【步驟化例題】建築英文專有名詞辨析：Read the sentence: "The architect specified \\"reinforced concrete\\" for the structural frame to withstand seismic forces." What does the term "reinforced concrete" mean in Chinese?',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析單字結構。concrete 意為「混凝土」，reinforced 為 reinforce（加強/強化）之過去分詞。',
      '步驟 2：結合工程上下文。withstand seismic forces (抵禦地震力)，內部加入鋼筋（rebar）抗拉之混凝土。',
      '步驟 3：確定專業中文譯名。即為「鋼筋混凝土 (RC)」。'
    ],
    answer: '「鋼筋混凝土 (Reinforced Concrete, RC)」'
  },
  'grammar-patterns': {
    question: '【步驟化例題】施工規範說明書被動語態句型：Convert the active sentence into a passive sentence used in technical specifications: "The contractor must compact the soil backfill in layers."',
    difficulty: '中等',
    steps: [
      '步驟 1：找出主詞、動詞與受詞。Subject: The contractor, Verb: must compact, Object: the soil backfill.',
      '步驟 2：將受詞移至句首作為被動主詞。The soil backfill...',
      '步驟 3：動詞改為被動態 "must be + p.p."。must be compacted in layers (by the contractor).',
    ],
    answer: '"The soil backfill must be compacted in layers by the contractor."'
  },
  'reading-comprehension': {
    question: '【步驟化例題】建築設計英文閱讀主旨擷取：Passage: "Biophilic design integrates natural elements—such as daylight, indoor plants, and natural ventilation—into built environments to improve human health and well-being." What is the main idea of biophilic design?',
    difficulty: '基礎',
    steps: [
      '步驟 1：找出核心關鍵字。Biophilic design (親自然設計), natural elements (自然元素), built environments (建築環境).',
      '步驟 2：分析目的與作法。將採光、綠植、通風等自然元素融入建築，改善人體健康。',
      '步驟 3：歸納主旨。親自然設計旨在透過融入自然元素提升建築使用者的健康與福祉。'
    ],
    answer: 'Connecting humans with nature inside built environments to enhance health and well-being.'
  },
  'conversation-daily-use': {
    question: '【步驟化例題】工地安全檢查情境對話：Complete the dialogue between a safety officer and a worker: \nOfficer: "You must wear a ________ before entering the construction zone."\nWorker: "Yes, sir. I have my hard hat right here."',
    difficulty: '基礎',
    steps: [
      '步驟 1：解析上下文意。工人回答 "I have my hard hat right here"（我的安全帽就在這）。',
      '步驟 2：對應安全防護配備單字。hard hat / safety helmet 指的是施工安全帽。',
      '步驟 3：填入正確單字。hard hat 或 safety helmet。'
    ],
    answer: 'hard hat (或 safety helmet)'
  },
  'cloze-passage-structure': {
    question: '【步驟化例題】建築節能文章克漏字介詞選填：Choose the correct preposition: "Green buildings are designed to minimize their impact _____ the natural environment."',
    difficulty: '基礎',
    steps: [
      '步驟 1：識別慣用搭配片語。have an impact / effect / influence + 介詞 + 對象。',
      '步驟 2：判定介詞用法。固定搭配介詞為 "on"（對……產生影響）。',
      '步驟 3：完成句子。impact on the natural environment。'
    ],
    answer: 'on'
  },
  'translation-writing': {
    question: '【步驟化例題】建築工程句子中譯英：請將下列句子翻譯成正確的英文工程說明：「這座博物館採用鋼骨結構以實現大跨距空間。」',
    difficulty: '中等',
    steps: [
      '步驟 1：翻譯核心單字。博物館 (museum)、鋼骨結構 (steel structure)、大跨距空間 (large-span space / long-span space)。',
      '步驟 2：建構句型結構。The museum uses/adopts a steel structure to achieve a long-span space.',
      '步驟 3：檢查文法與專業度。This museum utilizes a steel structure to create long-span spaces.'
    ],
    answer: '"This museum utilizes a steel structure to achieve a long-span space."'
  },

  // === extensions.ts ===
  'spatial-design': {
    question: '【步驟化例題】人體工學與走道尺寸規劃：依據建築空間人體工學規範，雙人交錯通行之室內主要走道，其「最小淨寬度」應規劃為多少公分？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析單人肩寬與通行需求。單人肩寬約 55~60 cm，單人通行走道最小 75~90 cm。',
      '步驟 2：計算雙人交錯通行淨寬。兩人之肩寬與避讓安全距離合計約需 120 cm 以上。',
      '步驟 3：確定標準規範。雙人交錯通行走道最小淨寬為 120 cm。'
    ],
    answer: '最小淨寬度應規劃為 120 公分 (cm)。'
  },
  'construction-methods': {
    question: '【步驟化例題】RC 構造 vs. SS 鋼骨構造特點比較：在超高層大樓（如台北 101）結構設計中，採用鋼骨構造 (Steel Structure, SS) 相較於傳統鋼筋混凝土 (RC)，其最主要之結構優點為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析自重與強度。鋼材強度高，斷面尺寸小，能大幅減輕建築物結構自重。',
      '步驟 2：分析韌性與抗震。鋼骨具備優異之延展性與韌性（Ductility），能吸收大量地震能量。',
      '步驟 3：總結優勢。自重輕、韌性高、施工速度快。'
    ],
    answer: '自重輕、韌性佳（抗震能力強），且構件斷面小、施工速度快。'
  },
  'cad-bim': {
    question: '【步驟化例題】BIM 建築資訊模型維度分析：在 BIM (Building Information Modeling) 應用中，所謂的「4D BIM」與「5D BIM」分別代表在 3D 幾何模型中加入了哪兩個維度的管理資訊？',
    difficulty: '基礎',
    steps: [
      '步驟 1：定義 3D BIM。3D 指 X, Y, Z 三維幾何空間模型。',
      '步驟 2：解析 4D BIM。加入「時間 (Time / Schedule)」維度，用於施工進度模擬。',
      '步驟 3：解析 5D BIM。加入「成本 (Cost / Budget)」維度，用於工程造價與數量估算。'
    ],
    answer: '4D 加入了「時間（施工進度）」，5D 加入了「成本（工程造價）」。'
  },
  'portfolio-models': {
    question: '【步驟化例題】1:100 建築概念模型製作比例換算：若要製作一座實際高度為 15 公尺之建築模型（比例尺 1:100），模型之實際切削高度應為多少公分？選用何種材料最適宜表示玻璃帷幕？',
    difficulty: '基礎',
    steps: [
      '步驟 1：計算模型高度。15 m = 1500 cm。模型高度 = 1500 cm / 100 = 15 cm。',
      '步驟 2：選擇透明材料表現玻璃。透明壓克力板或透明賽璐珞片 (PET/PVC 膠片)。',
      '步驟 3：得出解答。高度 15 cm，採用透明壓克力或透明膠片。'
    ],
    answer: '模型切削高度為 15 公分；採用透明壓克力板或透明賽璐珞片表現玻璃帷幕。'
  },
  'certification': {
    question: '【步驟化例題】建築製圖應用乙級檢定三視圖補線考題：在正投影三視圖中，若前視圖與俯視圖均為完整矩形，則該物體的立體幾何形狀可能為何？',
    difficulty: '中等',
    steps: [
      '步驟 1：分析前視圖與俯視圖。前視圖矩形說明正面為直立平面，俯視圖矩形說明頂面為水平平面。',
      '步驟 2：推導可能形體。最典型者為「正方體或長方體 (Rectangular Prism)」；若右側視圖為圓形，則為「圓柱體 (Cylinder) 水平放置」。',
      '步驟 3：總結可能結果。長方體或水平放置之圓柱體。'
    ],
    answer: '可能為「長方體」或「水平放置之圓柱體」（需檢視右側視圖確定）。'
  },

  // === geography.ts ===
  'environment-terrain': {
    question: '【步驟化例題】等高線圖坡度計算與山坡地開發：在一張 1:5000 地形圖上，兩點間之圖上距離為 2 公分，等高線高程差為 50 公尺。求兩點間之「平均坡度 (Slope)」為百分之多少？是否符合山坡地開發限制？（山坡地坡度 > 30% 限制開發）',
    difficulty: '中等',
    steps: [
      '步驟 1：計算實際水平距離。圖上 2 cm × 5000 = 10000 cm = 100 公尺。',
      '步驟 2：計算坡度百分比。坡度 = 高程差 / 水平距離 = 50 m / 100 m = 0.5 = 50%。',
      '步驟 3：判定開發限制。坡度 50% > 30%，依規定不得作為建築基地開發。'
    ],
    answer: '平均坡度為 50%；超過 30% 限額，依法限制開發。'
  },
  'climate-environment': {
    question: '【步驟化例題】太陽軌跡與遮陽板設計：臺灣位於北半球亞熱帶（北緯 23.5° 附近），夏季正午太陽仰角極高，冬季正午太陽偏南。對於南向窗戶，最適宜安裝何種形式的遮陽設施？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析太陽方位與仰角。南向窗戶在夏季受高仰角陽光直射，冬季受低仰角陽光照射。',
      '步驟 2：匹配遮陽板形式。水平遮陽板（Horizontal Shading）能有效阻擋夏季高仰角陽光，同時允許冬季低仰角陽光射入室內採暖。',
      '步驟 3：得出結論。安裝水平遮陽板。'
    ],
    answer: '適宜安裝「水平遮陽板 (Horizontal Louver)」。'
  },
  'population-urban': {
    question: '【步驟化例題】都市地租與同心元模型：依據伯吉斯 (Burgess) 的「同心圓模型 (Concentric Zone Model)」，都市空間結構的最核心區域稱為何者？其土地利用特徵為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：回顧同心圓模型結構。由內向外分為：1. 中央商業區 (CBD), 2. 邊緣過渡帶, 3. 勞工住宅區, 4. 高級住宅區, 5. 通勤者帶。',
      '步驟 2：分析第一環特徵。第 1 環為「中央商業區 (CBD)」，地租最高、交通最便利、摩天大樓與商業金融機構密集。',
      '步驟 3：得出結論。中央商業區 CBD。'
    ],
    answer: '稱為「中央商業區 (CBD)」，其地租最高、商業活動最密集、建築密度最高。'
  },
  'regional-development': {
    question: '【步驟化例題】韋伯工業區位論與原料指數：某建材廠生產磚塊，所需原料黏土重量為 150 公噸，成品磚塊重量為 100 公噸。求其「原料指數 (Weight Triangle / Material Index)」為何？該工廠應選擇何種區位？',
    difficulty: '中等',
    steps: [
      '步驟 1：定義原料指數公式。原料指數 (MI) = 局限原料重量 / 成品重量。',
      '步驟 2：代入數值計算。MI = 150 / 100 = 1.5。',
      '步驟 3：判定區位指向。MI = 1.5 > 1（屬於失重原料），運輸成本考量下應選擇「原料區位指向」（設廠於黏土採掘地）。'
    ],
    answer: '原料指數為 1.5；應選擇「原料區位指向」（靠近原料產地設廠）。'
  },
  'environmental-issues': {
    question: '【步驟化例題】都市熱島效應成因與減緩對策：下列何者非造成現代都市「熱島效應 (Urban Heat Island)」的主要原因？\n(A) 人工不透水鋪面比熱小吸收大量輻射\n(B) 冷氣與汽機車排放大量人為廢熱\n(C) 都市中建築物高密度密集阻擋通風\n(D) 綠地與公園水體大量蒸發帶走熱量',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析熱島效應成因。(A)、(B)、(C) 均會導致都市氣溫顯著高於周圍郊區。',
      '步驟 2：檢視選項 (D)。綠地與水體具有高比熱及蒸發散熱作用，是「減緩」熱島效應的對策，而非成因。',
      '步驟 3：確定答案為 (D)。'
    ],
    answer: '(D) 綠地與公園水體大量蒸發帶走熱量（此為減緩熱島之對策，非成因）。'
  },
  'gis': {
    question: '【步驟化例題】GIS 空間分析工具在建築選址之應用：若欲尋找符合「海拔小於 500m、坡度小於 15%、距離斷層帶 500m 以上」之建築基地，在 GIS 中應採用何種分析功能？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析圖層疊加需求。包含 DEM 高程圖層、坡度圖層與斷層緩衝區 (Buffer) 圖層。',
      '步驟 2：匹配 GIS 分析模組。將多個條件圖層進行交集布林運算，稱為「空間疊置分析 (Overlay Analysis)」。',
      '步驟 3：得出解答。疊置分析與環域分析 (Buffer Analysis)。'
    ],
    answer: '應採用「環域分析 (Buffer)」建立斷層避讓區，再以「疊置分析 (Overlay Analysis)」篩選符合條件之基地。'
  },

  // === history.ts ===
  'taiwan-history': {
    question: '【步驟化例題】台灣客家圍龍屋防禦構造分析：台灣傳統客家「圍龍屋」與「圍屋」建築，其外牆常開有極小之孔洞，此孔洞在傳統防禦上稱為何者？其主要功能為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：回顧客家移民歷史背景。清代台灣族群械鬥頻繁，客家聚落極注重防衛堡壘化。',
      '步驟 2：識別建築防衛構件。外牆開口極小，外寬內窄，稱為「銃眼（槍孔）」。',
      '步驟 3：總結功能。防範盜匪入侵，同時可由內部向外觀察與架槍射擊。'
    ],
    answer: '稱為「銃眼 (槍孔)」，主要功能為防禦敵襲與內向外射擊。'
  },
  'chinese-history': {
    question: '【步驟化例題】宋代《營造法式》材份制：宋代官方建築規範《營造法式》中，將木構架之「材」分為八等。請問「材份制」在中國古代建築標準化上有何重大意義？',
    difficulty: '中等',
    steps: [
      '步驟 1：理解「材」的定義。「材」為斗拱拱截面之高與厚，以此作為整座建築構件比例之模數 (Module)。',
      '步驟 2：分析材份制的作用。根據建築等級選擇材等，所有梁柱斗拱之尺寸均為「材」的倍數（分）。',
      '步驟 3：總結歷史意義。實現了中國古代木結構建築之模數化、標準化與預製化設計。'
    ],
    answer: '建立以「材」為模數的標準化制度，使建築構件具備預製化、比例嚴謹與等級規範。'
  },
  'world-history': {
    question: '【步驟化例題】哥德式教堂結構力學解析：西洋中世紀「哥德式教堂（如巴黎聖母院）」能開闢巨大彩色玻璃花窗並建造高聳穹頂，主要依賴哪兩項結構力學創新？',
    difficulty: '基礎',
    steps: [
      '步驟 1：對比羅馬式建築。羅馬式採用半圓拱與厚重牆體，開窗極小。',
      '步驟 2：識別哥德式結構突破。1. 尖拱 (Pointed Arch) 減少側向推力；2. 飛扶壁 (Flying Buttress) 將穹頂側推力引導至室外獨立墩柱。',
      '步驟 3：得出結論。尖拱與飛扶壁。'
    ],
    answer: '「尖拱 (Pointed Arch)」與「飛扶壁 (Flying Buttress)」。'
  },
  'architectural-history': {
    question: '【步驟化例題】現代主義建築大師科比意「新建築五點」：現代建築大師科比意 (Le Corbusier) 於 1926 年提出著名的「新建築五點 (Five Points of Architecture)」，包含柱子底層獨立（底層架空）、屋頂花園、自由平面、自由立面，以及哪一種窗戶形式？',
    difficulty: '基礎',
    steps: [
      '步驟 1：回顧新建築五點英文與中文名稱：1. Pilotis (底層架空柱), 2. Roof Garden (屋頂花園), 3. Free Plan (自由平面), 4. Free Facade (自由立面)。',
      '步驟 2：識別第五點。Ribbon Window / Horizontal Window（橫向帶狀長窗）。',
      '步驟 3：分析帶狀長窗力學前提。得益於 RC 框架結構，牆體不再承重，故可開全橫向長窗採光。'
    ],
    answer: '「橫向帶狀長窗 (Horizontal Ribbon Window)」。'
  },
  'cultural-heritage': {
    question: '【步驟化例題】文化資產保存法修復原則：依據《文化資產保存法》與國際《威尼斯憲章》，在進行古蹟修復工程時，對於新補強構件與歷史原物的處理，應遵循何種重要原則？',
    difficulty: '中等',
    steps: [
      '步驟 1：瞭解文化資產保存核心哲學。強調「真實性 (Authenticity)」與「可逆性 (Reversibility)」。',
      '步驟 2：規範新舊構件識別。新添加之補強構件應與古蹟原物「可識別（不可偽造古貌）」，且未來可安全拆卸（可逆性）。',
      '步驟 3：總結原則。遵循「最小干預、可識別性與可逆性原則」。'
    ],
    answer: '遵循「真實性、可識別性（新舊可辨）與可逆性（未來可拆卸且不傷原物）」原則。'
  },
  'social-change': {
    question: '【步驟化例題】工業革命與水晶宮建築：1851 年倫敦世界博覽會展覽館「水晶宮 (Crystal Palace)」在建築史上被視為現代建築的開端，其採用的突破性建造工法為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析水晶宮設計者與材料。由約瑟夫·帕克斯頓 (Joseph Paxton) 設計，大量採用鑄鐵 (Cast Iron) 與玻璃。',
      '步驟 2：解析施工工法。採用工廠預製構件（Pre-fabrication），現場快速組裝（Dry Assembly）。',
      '步驟 3：總結建築史意義。開啟了預製構件與鐵骨玻璃預製建築之新時代。'
    ],
    answer: '採用「預製鐵骨構件與玻璃」於現場快速裝配，開啟建築預製化與工業化生產之先河。'
  },

  // === materials.ts ===
  'basic-properties': {
    question: '【步驟化例題】材料密度與孔隙率計算：某石材試體乾燥後質量為 500 公克，完全密實無孔隙時之絕對體積為 200 立方公分。若該試體之外觀體積（含孔隙）為 250 立方公分，求該石材之「表觀密度」與「孔隙率」？',
    difficulty: '中等',
    steps: [
      '步驟 1：計算表觀密度 (Apparent Density)。ρ = 乾燥質量 / 外觀體積 = 500 g / 250 cm³ = 2.0 g/cm³。',
      '步驟 2：計算絕對真密度 (True Density)。ρ0 = 500 g / 200 cm³ = 2.5 g/cm³。',
      '步驟 3：計算孔隙率 (Porosity n)。n = (1 - ρ/ρ0) × 100% = (1 - 2.0/2.5) × 100% = (1 - 0.8) × 100% = 20%。'
    ],
    answer: '表觀密度為 2.0 g/cm³，孔隙率為 20%。'
  },
  'cement-composition': {
    question: '【步驟化例題】卜特蘭水泥水化化合物分析：水泥四大核心化合物成分中，何者水化反應最快且水化熱最高？何者決定水泥之長期（28天以上）強度發展？',
    difficulty: '中等',
    steps: [
      '步驟 1：分析 C3S, C2S, C3A, C4AF 特性。',
      '步驟 2：C3A (鋁酸三鈣) 水化最快、發熱量最大（造成快凝）；C3S (矽酸三鈣) 提供早期（1~7天）強度。',
      '步驟 3：C2S (矽酸二鈣) 水化極慢，持續提供後期（28天至數年）強度的穩定增長。'
    ],
    answer: '水化最快且水化熱最高者為「C3A (鋁酸三鈣)」；決定長期強度者為「C2S (矽酸二鈣)」。'
  },
  'cement-types': {
    question: '【步驟化例題】CNS 61 卜特蘭水泥類型選用：某工程欲興建大型水庫大壩結構（巨積混凝土），為防止內部水化熱積聚導致溫差裂縫，應優先選用 CNS 61 規範中之哪一種型號水泥？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析巨積混凝土工程痛點。水化熱過高引發熱應力裂縫。',
      '步驟 2：查考 CNS 61 五大水泥分類：I 型普通、II 型中熱、III 型早強、IV 型低熱、V 型抗硫。',
      '步驟 3：選用最適水泥。第 IV 型低熱卜特蘭水泥 (Type IV Low-Heat Cement)。'
    ],
    answer: '應優先選用「第 IV 型（低熱）卜特蘭水泥」。'
  },
  'cement-vicat': {
    question: '【步驟化例題】維卡儀水泥凝結時間規範：依據 CNS 水泥試驗標準，採用維卡儀 (Vicat Needle) 測定卜特蘭水泥之「初凝時間」與「終凝時間」，法定限制分別不得小於與大於多少分鐘？',
    difficulty: '基礎',
    steps: [
      '步驟 1：瞭解維卡儀試驗目的。確定水泥漿由可塑狀態轉為固態之時間點。',
      '步驟 2：查考初凝規範限制。初凝時間不得少於 45 分鐘（確保施工拌合與運輸時間）。',
      '步驟 3：查考終凝規範限制。終凝時間不得大於 375 分鐘 (6.25小時)。'
    ],
    answer: '初凝時間不得小於 45 分鐘；終凝時間不得大於 375 分鐘。'
  },
  'cement-strength': {
    question: '【步驟化例題】水泥砂漿抗壓強度計算：製作 50 mm × 50 mm × 50 mm 之標準水泥砂漿立方體試體，於 28 天養護後進行抗壓試驗。若試體破壞時壓力機讀數為 75.0 kN，求該水泥砂漿之抗壓強度（MPa）？',
    difficulty: '中等',
    steps: [
      '步驟 1：計算受壓截面積 A。A = 50 mm × 50 mm = 2500 mm²。',
      '步驟 2：將破壞載重轉換為牛頓 N。P = 75.0 kN = 75,000 N。',
      '步驟 3：計算抗壓強度 f_c = P / A。f_c = 75,000 N / 2500 mm² = 30 N/mm² = 30 MPa。'
    ],
    answer: '抗壓強度為 30 MPa (N/mm²)。'
  },
  'cement-storage': {
    question: '【步驟化例題】水泥受潮與假凝現象處置：水泥工地倉庫若通風不良導致水泥受潮產生「假凝 (False Set)」現象，其特徵與應變處置方式為何？',
    difficulty: '中等',
    steps: [
      '步驟 1：分析假凝特徵。拌合後數分鐘內迅速變硬，但「不放出大量水化熱」。',
      '步驟 2：區分假凝與快凝 (Flash Set)。快凝係 C3A 過高放出劇熱且無法恢復；假凝係石膏結晶析出。',
      '步驟 3：確定處置方式。假凝試體「未加水重新拌合」即可恢復可塑性，不影響最終強度。'
    ],
    answer: '特徵為快速硬化但不發熱；處置方式為「不加水重新強制拌合」即可恢復可塑性。'
  },
  'concrete': {
    question: '【步驟化例題】混凝土配比計算：設計一立方公尺 (1 m³) 混凝土，要求水灰比 W/C = 0.50。若經配比計算所需單位用水量 W = 175 kg/m³，求所需水泥用量 C 為多少公斤？',
    difficulty: '基礎',
    steps: [
      '步驟 1：已知公式 W / C = 0.50。',
      '步驟 2：代入 W = 175 kg。175 / C = 0.50。',
      '步驟 3：求解 C。C = 175 / 0.50 = 350 kg。'
    ],
    answer: '水泥用量 C 為 350 公斤 (kg)。'
  },
  'stone-ceramics-glass': {
    question: '【步驟化例題】建築石材性能比較：建築外牆貼飾石材中，花崗石 (Granite) 與大理石 (Marble) 在耐酸雨與耐候性上有何根本差異？外牆應選用何者？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析花崗石成分。主要為火成岩（石英、長石），耐酸鹼、硬度高、耐候性極佳。',
      '步驟 2：分析大理石成分。主要為變質岩（碳酸鈣 CaCO3），易受酸雨侵蝕發黃剝落。',
      '步驟 3：確定選用原則。外牆應選用花崗石，大理石適用於室內牆面。'
    ],
    answer: '花崗石耐酸鹼與耐候性極佳，適合外牆；大理石含碳酸鈣易受酸雨侵蝕，適用於室內。'
  },
  'wood': {
    question: '【步驟化例題】木材含水率與纖維飽和點 (FSP)：當木材乾燥過程含水率降低至「纖維飽和點 (FSP, 約 30%)」以下時，木材之物理強度與尺寸體積會產生何種變化？',
    difficulty: '中等',
    steps: [
      '步驟 1：理解自由水與結合水。FSP 以上減少的是細胞腔內的自由水，不影響體積與強度。',
      '步驟 2：FSP 以下蒸發結合水。細胞壁內的結合水開始蒸發，導致木材開始「乾縮變形」。',
      '步驟 3：強度變化。隨著含水率降至 FSP 以下，木材之抗壓與抗彎強度顯著增加。'
    ],
    answer: '尺寸體積開始產生「乾縮變形」；物理強度（抗壓/抗彎）則顯著增加。'
  },
  'polymers-asphalt': {
    question: '【步驟化例題】瀝青針入度試驗物理意義：瀝青材料進行標準針入度試驗（25°C, 100g 針, 5秒），測得針入度數值為 60（單位為 0.1 mm）。試說明此數值之物理意義及高低溫環境之選用原則。',
    difficulty: '中等',
    steps: [
      '步驟 1：換算貫入深度。60 代表針貫入深度為 60 × 0.1 mm = 6.0 mm。',
      '步驟 2：分析軟硬度。針入度越大代表瀝青越軟。',
      '步驟 3：環境選用原則。炎熱地區應選用較硬瀝青（針入度小如 60/70）防軟化車轍；寒冷地區選用較軟瀝青（85/100）防開裂。'
    ],
    answer: '針入度 60 代表貫入深度 6.0 mm；炎熱地區應選用針入度較小（較硬）之瀝青。'
  },
  'metals': {
    question: '【步驟化例題】鋼筋拉伸試驗與降伏強度計算：一根標稱直徑為 16 mm (截面積 A = 200 mm²) 之竹節鋼筋進行拉伸試驗。若試體到達降伏點時壓力機拉力為 56.0 kN，求該鋼筋之「降伏強度 fy」為多少 MPa？',
    difficulty: '中等',
    steps: [
      '步驟 1：轉換拉力單位。P = 56.0 kN = 56,000 N。',
      '步驟 2：計算降伏應力 fy = P / A。fy = 56,000 N / 200 mm² = 280 N/mm²。',
      '步驟 3：單位轉換。280 N/mm² = 280 MPa (此即 SD280 鋼筋)。'
    ],
    answer: '降伏強度 fy 為 280 MPa (N/mm²)。'
  },
  'green-materials': {
    question: '【步驟化例題】綠建材標章評定體系：我國「綠建材標章 (Green Building Material)」分為四大類別，包含生態綠建材、健康綠建材、高性能綠建材與何者？',
    difficulty: '基礎',
    steps: [
      '步驟 1：回顧綠建材四大分類體系。1. 生態 (Ecological), 2. 健康 (Healthy, 低 TVOC/甲醛), 3. 高性能 (High Performance, 隔音/透水), 4. 再生 (Recycled)。',
      '步驟 2：識別第四類。再生綠建材 (Recycled Green Building Materials)。',
      '步驟 3：總結。第四類為「再生綠建材」。'
    ],
    answer: '第四類為「再生綠建材 (Recycled Green Building Material)」。'
  },

  // === math-c.ts ===
  'trigonometry': {
    question: '【步驟化例題】三角函數與建築測高：從平地 A 點觀測大樓頂端仰角為 30°；朝大樓方向水平前進 100 公尺到達 B 點，測得仰角變為 60°。求大樓之高度 h 為多少公尺？',
    difficulty: '中等',
    steps: [
      '步驟 1：建立直角三角形。設大樓高 h，B 點距大樓底 C 為 x，A 點距大樓底為 x + 100。',
      '步驟 2：列正切方程式。tan(60°) = h / x ⇒ h = √3 x；tan(30°) = h / (x + 100) ⇒ h = (x + 100) / √3。',
      '步驟 3：解聯立方程式。√3 x = (x + 100) / √3 ⇒ 3x = x + 100 ⇒ 2x = 100 ⇒ x = 50 m。',
      '步驟 4：求大樓高度 h。h = 50 × √3 = 50√3 ≒ 86.6 公尺。'
    ],
    answer: '大樓高度為 50√3 公尺 (約 86.6 m)。'
  },
  'vectors': {
    question: '【步驟化例題】平面向量內積與夾角計算：已知作用於結構節點之兩力向量向量 A = (3, 4) 與 向量 B = (5, 12)。試求兩向量之「內積 A·B」及兩向量夾角之餘弦值 cosθ？',
    difficulty: '中等',
    steps: [
      '步驟 1：計算向量內積。A · B = (3 × 5) + (4 × 12) = 15 + 48 = 63。',
      '步驟 2：計算兩向量之長度（模）。|A| = √(3² + 4²) = 5；|B| = √(5² + 12²) = 13。',
      '步驟 3：利用內積公式求 cosθ。cosθ = (A · B) / (|A| · |B|) = 63 / (5 × 13) = 63 / 65 ≒ 0.969。'
    ],
    answer: '內積 A·B = 63，夾角餘弦值 cosθ = 63/65 (約 0.969)。'
  },
  'algebra': {
    question: '【步驟化例題】二次函數與最大建築面積求解：某建築師欲用總長 40 公尺之圍籬圍成一矩形庭院。設矩形寬度為 x 公尺，求該庭院能圍成之「最大面積」為多少平方公尺？',
    difficulty: '基礎',
    steps: [
      '步驟 1：建立長度與寬度關係。周長 2(長 + 寬) = 40 ⇒ 長度 = 20 - x。',
      '步驟 2：建立面積函數 A(x)。A(x) = x · (20 - x) = -x² + 20x。',
      '步驟 3：配方法求極值。A(x) = -(x² - 20x + 100) + 100 = -(x - 10)² + 100。',
      '步驟 4：當 x = 10 時，最大面積為 100 m²。'
    ],
    answer: '最大庭院面積為 100 平方公尺。'
  },
  'geometry': {
    question: '【步驟化例題】解析幾何與平行直線方程式：在建築施工圖面座標系中，有一管道線路 L1 之方程式為 3x - 4y + 12 = 0。若要設計一平行管道 L2 且通過點 P(4, 1)，求 L2 之直線方程式？',
    difficulty: '基礎',
    steps: [
      '步驟 1：設平行線方程式。兩直線平行故 x, y 係數相同，設 L2 為 3x - 4y + k = 0。',
      '步驟 2：代入點 P(4, 1) 求解 k。3(4) - 4(1) + k = 0 ⇒ 12 - 4 + k = 0 ⇒ 8 + k = 0 ⇒ k = -8。',
      '步驟 3：寫出方程式。3x - 4y - 8 = 0。'
    ],
    answer: 'L2 直線方程式為 3x - 4y - 8 = 0。'
  },
  'probability': {
    question: '【步驟化例題】工程品管檢驗機率計算：某批磁磚抽樣檢驗，10 片磁磚中含有 2 片瑕疵品。若品管人員隨機抽取 2 片進行檢驗（不放回），求抽到的 2 片「均為良品」的機率為何？',
    difficulty: '中等',
    steps: [
      '步驟 1：確定良品與瑕疵品數量。良品 8 片，瑕疵品 2 片，總數 10 片。',
      '步驟 2：計算總組合數 C(10, 2)。C(10, 2) = (10 × 9) / (2 × 1) = 45。',
      '步驟 3：計算全取良品組合數 C(8, 2)。C(8, 2) = (8 × 7) / (2 × 1) = 28。',
      '步驟 4：計算機率 P = 28 / 45 ≒ 0.622 (62.2%)。'
    ],
    answer: '均為良品之機率為 28/45 (約 62.2%)。'
  },
  'calculus': {
    question: '【步驟化例題】微積分極值在樑彎矩分析之應用：一簡支梁長度 6m，受分佈載重作用其彎矩函數為 M(x) = 15x - 2.5x² (kN·m)。試利用微商（導數）求該梁之「最大彎矩值 M_max」位於何處？最大彎矩為多少？',
    difficulty: '中等',
    steps: [
      '步驟 1：對 M(x) 求一階導數 dM/dx（即剪力 V(x)）。dM/dx = 15 - 5x。',
      '步驟 2：令導數等於 0 求解駐點。15 - 5x = 0 ⇒ 5x = 15 ⇒ x = 3m（即梁中央截面）。',
      '步驟 3：代入 x = 3 求 M_max。M(3) = 15(3) - 2.5(3)² = 45 - 22.5 = 22.5 kN·m。'
    ],
    answer: '最大彎矩位於 x = 3m 處，最大彎矩值 M_max = 22.5 kN·m。'
  },

  // === physics.ts ===
  'mechanics-motion': {
    question: '【步驟化例題】牛頓第二運動定律與施工電梯張力：一總質量 1200 kg 之施工電梯載人升降機，以 2.0 m/s² 之加速度向上加速起動。求懸掛電梯之鋼纜張力 T 為多少牛頓？ (g = 9.8 m/s²)',
    difficulty: '中等',
    steps: [
      '步驟 1：進行力學受力分析（自由體圖）。電梯受向下重力 W = mg，向上鋼纜拉力 T。',
      '步驟 2：列牛頓第二運動定律 ∑F = m·a。T - mg = m·a ⇒ T = m(g + a)。',
      '步驟 3：代入數值求解。T = 1200 kg × (9.8 + 2.0) m/s² = 1200 × 11.8 = 14160 N。'
    ],
    answer: '鋼纜張力 T 為 14160 牛頓 (N)。'
  },
  'work-energy': {
    question: '【步驟化例題】重力位能與動能轉換：一重 50 kg 之落錘打樁機錘頭，自距離地面 10 公尺高處自由落下打擊樁頭。若不計空氣阻力，求錘頭剛接觸樁頭瞬間之「動能 Ek」與「速度 v」？ (g = 9.8 m/s²)',
    difficulty: '基礎',
    steps: [
      '步驟 1：依據能量守恆定律。最高點重力位能 Ep = mgh 轉換為最低點動能 Ek。',
      '步驟 2：計算動能 Ek。Ek = mgh = 50 kg × 9.8 m/s² × 10 m = 4900 焦耳 (J)。',
      '步驟 3：計算速度 v。Ek = 1/2 m v² ⇒ 4900 = 1/2 (50) v² ⇒ 25 v² = 4900 ⇒ v² = 196 ⇒ v = 14 m/s。'
    ],
    answer: '接觸瞬間動能 Ek = 4900 J，速度 v = 14 m/s。'
  },
  'thermodynamics': {
    question: '【步驟化例題】建築牆體熱傳導率計算：一單層混凝土外牆厚度 d = 0.2 m，面積 A = 20 m²，混凝土熱傳導係數 k = 1.5 W/(m·K)。若室外氣溫 35°C，室內冷氣維持 25°C，求每小時透過該外牆傳入室內之熱量 Q（焦耳 J）？',
    difficulty: '中等',
    steps: [
      '步驟 1：利用傅立葉熱傳導定律。傳熱功率 P = k · A · (T1 - T2) / d。',
      '步驟 2：代入數值求功率 P。P = 1.5 × 20 × (35 - 25) / 0.2 = 300 / 0.2 = 1500 W (J/s)。',
      '步驟 3：計算一小時 (3600秒) 總熱量 Q。Q = P × t = 1500 J/s × 3600 s = 5.4 × 10⁶ 焦耳 = 5.4 MJ。'
    ],
    answer: '每小時傳入熱量 Q 為 5.4 × 10⁶ 焦耳 (5.4 MJ)。'
  },
  'waves-acoustics': {
    question: '【步驟化例題】建築聲學與分貝（dB）加總：施工現場兩台發電機同時運作，若單獨運作第一台時在量測點產生的聲壓級為 70 dB，第二台單獨運作時亦為 70 dB。求兩台同時運作時之總聲壓級為多少 dB？',
    difficulty: '中等',
    steps: [
      '步驟 1：理解對數分貝加總規則。兩相同分貝能量相加，總分貝增加 3 dB（10 · log10(2) ≒ 3）。',
      '步驟 2：列分貝能量疊加公式。L_total = 10 · log10(10^(70/10) + 10^(70/10)) = 10 · log10(2 × 10^7)。',
      '步驟 3：計算結果。L_total = 70 + 10 · log10(2) = 70 + 3.01 ≒ 73 dB。'
    ],
    answer: '兩台同時運作之總聲壓級為 73 dB。'
  },
  'optics': {
    question: '【步驟化例題】建築照明照度計算：一正上方點光源發光強度為 I = 1600 燭光 (cd)，垂直照射下方距離 2 公尺處之書桌檯面。求該檯面上的「點照度 E」為多少勒克斯 (Lux)？',
    difficulty: '基礎',
    steps: [
      '步驟 1：利用平方反比定律照度公式。E = I / r²（當垂直照射 θ = 0° 時）。',
      '步驟 2：代入強度 I = 1600 cd 與距離 r = 2 m。',
      '步驟 3：計算照度。E = 1600 / (2)² = 1600 / 4 = 400 Lux。'
    ],
    answer: '檯面點照度 E 為 400 Lux。'
  },
  'electricity': {
    question: '【步驟化例題】建築配電負載與安全電流計算：某一建築工務所安裝一台額定功率 P = 2200 瓦特 (W) 之冷氣機，供電電壓 V = 110 伏特 (V)。求該冷氣運轉時之「工作電流 I」及「內部等效電阻 R」？',
    difficulty: '基礎',
    steps: [
      '步驟 1：利用電功率公式 P = V · I。求解電流 I = P / V = 2200 W / 110 V = 20 安培 (A)。',
      '步驟 2：利用歐姆定律 V = I · R。求解電阻 R = V / I = 110 V / 20 A = 5.5 歐姆 (Ω)。',
      '步驟 3：確認結果。電流 20 A，電阻 5.5 Ω。'
    ],
    answer: '工作電流 I = 20 安培 (A)，等效電阻 R = 5.5 歐姆 (Ω)。'
  },

  // === surveying.ts ===
  'distance-and-angle': {
    question: '【步驟化例題】鋼捲尺溫度改正計算：使用名義長度 30m 之鋼捲尺於 35°C 現場量測一建築軸線，量得距離為 90.000m。若鋼捲尺檢定標準溫度為 20°C，鋼材熱膨脹係數 α = 1.2 × 10⁻⁵ /°C，求溫度改正後之實際正確距離？',
    difficulty: '中等',
    steps: [
      '步驟 1：計算溫差 ∆T。∆T = 35°C - 20°C = +15°C。',
      '步驟 2：計算長度溫度改正量 Ct。Ct = L × α × ∆T = 90.000 m × (1.2 × 10⁻⁵) × 15 = +0.0162 m = +16.2 mm。',
      '步驟 3：計算實際正確距離。D = 90.000 + 0.0162 = 90.0162 公尺。'
    ],
    answer: '正確距離為 90.0162 公尺 (90.016 m)。'
  },
  'elevation-and-leveling': {
    question: '【步驟化例題】水準測量點位高程計算：已知水準點 A 之高程 HA = 120.500m。水準儀整置後，觀測 A 點後視讀數 BS = 1.620m，觀測未知點 B 之前視讀數 FS = 1.120m。求水準儀視線高程 (HI) 與 B 點高程 (HB)？',
    difficulty: '基礎',
    steps: [
      '步驟 1：計算儀器高程 HI。HI = HA + BS = 120.500 m + 1.620 m = 122.120 m。',
      '步驟 2：計算前視點 B 高程 HB。HB = HI - FS = 122.120 m - 1.120 m = 121.000 m。',
      '步驟 3：驗算高低差 ∆h = BS - FS = 1.620 - 1.120 = +0.500 m。HB = 120.500 + 0.500 = 121.000 m。'
    ],
    answer: '視線高程 HI = 122.120 m，B 點高程 HB = 121.000 m。'
  },
  'instrument-setup': {
    question: '【步驟化例題】經緯儀/全站儀三腳架架設與定心整平：操作經緯儀進行測站整平時，使用「腳螺旋 (Leveling Screws)」調整圓水準器氣泡與長氣泡柱，其轉動兩腳螺旋之方向法則為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：將管水準器平行於任意兩腳螺旋（設為 A、B）。',
      '步驟 2：同時轉動 A、B 兩腳螺旋，遵循「雙拇指同時向內或向外」相對旋轉原則。',
      '步驟 3：氣泡移動方向與左手大拇指旋轉方向一致，調至中央後旋轉 90° 調整第三腳螺旋。'
    ],
    answer: '遵循「雙拇指同時向內或向外」相對轉動原則，氣泡移動方向與左手大拇指旋轉方向一致。'
  },
  'traverse-surveying': {
    question: '【步驟化例題】閉合導線角度閉合差計算：一 5 邊形閉合導線（n = 5），實測 5 個內角和為 540°01\'30"。求該導線之「理論內角和」及「角度閉合差 W_θ」？',
    difficulty: '基礎',
    steps: [
      '步驟 1：計算理論內角和公式。∑θ_理論 = (n - 2) × 180° = (5 - 2) × 180° = 3 × 180° = 540°00\'00"。',
      '步驟 2：計算角度閉合差 W_θ。W_θ = 實測和 - 理論和 = 540°01\'30" - 540°00\'00" = +1\'30" (+90")。',
      '步驟 3：總結閉合差。+1\'30"（平均每個角應扣除 18" 進行平差）。'
    ],
    answer: '理論內角和為 540°00\'00"；角度閉合差 W_θ 為 +1\'30" (或 +90")。'
  },
  'coordinate-computation': {
    question: '【步驟化例題】導線點座標增量計算：已知測站 A 點座標為 (X_A, Y_A) = (100.00m, 200.00m)。測得 AB 邊長 S_AB = 100.00m，方位角 φ_AB = 30°。求 B 點之座標 (X_B, Y_B)？',
    difficulty: '中等',
    steps: [
      '步驟 1：計算東距增量 ∆X (經差)。∆X = S · sin(φ) = 100.00 × sin(30°) = 100.00 × 0.5 = +50.00 m。',
      '步驟 2：計算北距增量 ∆Y (緯差)。∆Y = S · cos(φ) = 100.00 × cos(30°) = 100.00 × 0.866 = +86.60 m。',
      '步驟 3：計算 B 點座標。X_B = 100.00 + 50.00 = 150.00 m；Y_B = 200.00 + 86.60 = 286.60 m。'
    ],
    answer: 'B 點座標為 (150.00 m, 286.60 m)。'
  },
  'area-and-error': {
    question: '【步驟化例題】座標法計算多邊形基地面積：某一四邊形基地四頂點座標分別為 A(0, 0)、B(20, 0)、C(20, 15)、D(0, 15)（單位為公尺）。利用倍橫距或雙斜乘座標法求該基地面積（m²）？',
    difficulty: '基礎',
    steps: [
      '步驟 1：列表順時針頂點座標：A(0,0), B(20,0), C(20,15), D(0,15)。',
      '步驟 2：使用交叉相乘公式。2A = (X_A Y_B - Y_A X_B) + (X_B Y_C - Y_B X_C) + (X_C Y_D - Y_C X_D) + (X_D Y_A - Y_D X_A)。',
      '步驟 3：計算交叉乘積之和。2A = (0-0) + (300-0) + (300-0) + (0-0) = 600。',
      '步驟 4：求面積 A。A = 600 / 2 = 300 m²（亦即長 20m 寬 15m 矩形）。'
    ],
    answer: '基地面積為 300 平方公尺 (m²)。'
  }
};

const allFiles = [
  'chemistry.ts', 'civics.ts', 'drafting.ts', 'english.ts', 'extensions.ts',
  'geography.ts', 'history.ts', 'materials.ts', 'math-c.ts',
  'physics.ts', 'surveying.ts'
];

function findClosingBracket(str, openPos) {
  let depth = 0;
  for (let i = openPos; i < str.length; i++) {
    if (str[i] === '[') depth++;
    else if (str[i] === ']') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

let updatedTopicsCount = 0;

for (const file of allFiles) {
  const filePath = path.join(subjectsDir, file);
  if (!fs.existsSync(filePath)) continue;

  let source = fs.readFileSync(filePath, 'utf8');

  // Load module to inspect topic structure
  const exportMatch = source.match(/export const (\w+): SubjectData =/);
  if (!exportMatch) continue;

  const varName = exportMatch[1];
  const executable = source
    .replace(/^import[^\n]*\n/gm, '')
    .replace(`export const ${varName}: SubjectData =`, `const ${varName} =`);
  
  const subject = new Function(`${executable}; return ${varName};`)();

  for (const topic of subject.topics) {
    const exData = topicExamples[topic.slug];
    if (!exData) continue;

    // Find topic slug position in source
    let topicSlugPos = source.indexOf(`slug: '${topic.slug}'`);
    if (topicSlugPos === -1) {
      topicSlugPos = source.indexOf(`"slug": "${topic.slug}"`);
    }

    if (topicSlugPos === -1) continue;

    // Find worked_examples label in this topic (handling optional quotes)
    let workedExPos = source.indexOf('worked_examples:', topicSlugPos);
    if (workedExPos === -1) {
      workedExPos = source.indexOf('"worked_examples":', topicSlugPos);
    }
    if (workedExPos === -1) continue;

    const bracketStart = source.indexOf('[', workedExPos);
    if (bracketStart === -1) continue;

    const bracketEnd = findClosingBracket(source, bracketStart);
    if (bracketEnd === -1) continue;

    // Safely format question with double quotes or properly escaped single quotes
    const safeQuestion = exData.question.replace(/'/g, "\\'").replace(/\n/g, '\\n');
    const safeAnswer = exData.answer.replace(/'/g, "\\'").replace(/\n/g, '\\n');

    const newWorkedExamplesBlock = `[\n        {\n          question: '${safeQuestion}',\n          difficulty: '${exData.difficulty}',\n          steps: ${JSON.stringify(exData.steps, null, 12).replace(/\n\s*/g, ' ')}, \n          answer: '${safeAnswer}'\n        }\n      ]`;

    source = source.slice(0, bracketStart) + newWorkedExamplesBlock + source.slice(bracketEnd + 1);
    updatedTopicsCount++;
  }

  fs.writeFileSync(filePath, source, 'utf8');
  console.log(`Refactored topic worked examples in ${file}`);
}

console.log(`Successfully refactored ${updatedTopicsCount} topic worked examples across all subjects.`);
