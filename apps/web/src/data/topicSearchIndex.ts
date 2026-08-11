export interface TopicSearchItem {
  subjectSlug: string;
  subjectTitle: string;
  topicSlug: string;
  topicTitle: string;
  desc: string;
}

// Deliberately metadata-only: importing this in the global Navbar must never pull
// concepts, worked examples, practices or exam content into every page bundle.
export const topicSearchIndex = [
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "matter-composition",
    "topicTitle": "1. 物質的組成與分類",
    "desc": "純物質與混合物、原子結構與化學鍵結、塗料/樹脂高分子化學分類、VOCs 揮發機制與光觸媒空氣淨化。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "chemical-reactions",
    "topicTitle": "2. 化學反應與混凝土水化化學",
    "desc": "化學反應式平衡、莫耳數與化學計量、波特蘭水泥水化反應 (Concrete Hydration)、波左蘭反應與絕熱溫升。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "acids-bases-salts",
    "topicTitle": "3. 酸鹼化學與混凝土中性化",
    "desc": "酸鹼理論與 pH 值計算、混凝土碳化/中性化機制、酸雨石材腐蝕、硫酸鹽侵蝕與鋼筋鈍化膜。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "redox",
    "topicTitle": "4. 氧化還原與金屬腐蝕防蝕",
    "desc": "氧化數與電化學反應、鋼筋濕腐蝕化學機制、犧牲陽極防蝕、熱浸鍍鋅與電化學脫鹽 ECE 技術。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "organic-chemistry",
    "topicTitle": "5. 有機化學與建築高分子樹脂塗料",
    "desc": "有機化合物分類、高分子樹脂 (Epoxy, PU, Acrylic, Silicone) 化學、VOCs 逸散與高分子光降解/水解老化。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "environmental-chemistry",
    "topicTitle": "6. 環境化學與建材碳足跡",
    "desc": "大氣與水體環境化學、溫室效應、建材碳足跡 LCA、固碳混凝土、低碳水泥與室內空氣品質 IAQ。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "classical-literature",
    "topicTitle": "1. 古典文學選讀與建築空間散文",
    "desc": "深入賞析先秦諸子、唐宋八大家古典散文、漢賦駢文及建築論述經典（如〈嶽陽樓記〉、〈醉翁亭記〉、〈阿房宮賦〉），掌握體裁流變與古典建築空間意象。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "modern-literature",
    "topicTitle": "2. 現代文學與應用文實務",
    "desc": "研析現代詩、散文、小說之美學風格與空間意象，並精通公文（函）、書信、題辭、柬帖及建築工程應用文規範。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "linguistics",
    "topicTitle": "3. 語文知識與修辭應用",
    "desc": "系統化掌握字音字形辨正、成語典故來源、修辭法（譬喻、轉化、借代、層遞、映襯等）及其於建築與文學文本中之表現技巧。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "reading-comprehension",
    "topicTitle": "4. 閱讀理解與建築論述判讀",
    "desc": "培養長篇文本快速略讀、主題句擷取、跨文本對比、非連續性文本（圖表與空間邏輯圖）判讀及現代建築思想論述之分析能力。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "writing-expression",
    "topicTitle": "5. 作文與表達（含建築空間論述）",
    "desc": "精通論說文與抒情文之構思、起承轉合篇章架構、修辭造句、空間意象融入及建築空間評析作文實戰技巧。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "cultural-knowledge",
    "topicTitle": "6. 文化常識與園林建築思潮",
    "desc": "涵蓋國學常識、年齡代稱、天干地支與時辰、傳統節慶民俗、古代度量衡與中國傳統園林美學思潮（計成《園冶》與文人造園觀）。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "citizenship-community",
    "topicTitle": "1. 公民身分與社群",
    "desc": "探討公民權利發展、社群結構、社區營造、都市計畫公聽會與公民參與機制在建築空間中的實踐。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "law-life",
    "topicTitle": "2. 建築法規與公民生活空間",
    "desc": "深入解析《建築法》、《都市計畫法》、《區域計畫法》與《國土計畫法》法律體系，掌握建蔽率與容積率管制計算、無障礙避難規範、日照權防護及《公寓大廈管理條例》。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "economy-sustainability",
    "topicTitle": "3. 經濟發展與永續建築環境",
    "desc": "探討綠建築 EEWH 九大指標評估體系、循環經濟與綠色建材、歐盟 CBAM 碳邊境調整與建築碳足跡、ESG 企業永續與不動產經濟。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "society-culture",
    "topicTitle": "4. 多元社會與包容性空間設計",
    "desc": "探討高齡少子化社會空間調適、通用設計七大原則、多元族群文化空間、性別平權空間友善及社會住宅包容性設計。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "labor-ethics",
    "topicTitle": "5. 勞工權益與建築職業倫理",
    "desc": "深入剖析《職業安全衛生法》工地安全防護、建築師與營造業職業道德規範、《勞動基準法》營建勞工權益、工程採購倫理與反弊端。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "environment-policy",
    "topicTitle": "6. 環境政策與氣候變遷因應",
    "desc": "探討《氣候變遷因應法》2050 淨零排放路徑、《環境影響評估法》公民參與、國土韌性防災、都市熱島減緩與水資源循環。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "lines-and-lettering",
    "topicTitle": "1. 線條種類與字法",
    "desc": "深入掌握 CNS 11567 建築與工程製圖規範，包含線條分類、線寬階級、工程字體級距、圖紙圖頭規格與 CAD 線型管理。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "scale",
    "topicTitle": "2. 比例與尺度",
    "desc": "掌握圖面比例換算、三稜比例尺讀取、建築工程常用比例選用表 (1/100, 1/50, 1/20) 及 CAD 出圖比例設定。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "orthographic-projection",
    "topicTitle": "3. 正投影視圖",
    "desc": "理解正投影原理、第一角法與第三角法嚴格比較、三視圖「長對正、高平齊、寬相等」與輔助視圖繪製。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "sectional-views",
    "topicTitle": "4. 剖面圖判讀",
    "desc": "掌握剖面圖切割原理、割面線符號、五大剖面類型、CNS 45° 剖面線規範及實心軸與螺栓「不剖」標準。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "architectural-plan",
    "topicTitle": "5. 建築平面圖",
    "desc": "掌握建築平面圖水平切面高、牆體構造與厚度標示、門窗編號圖例、建築設備及 CAD 高效繪圖指令。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "architectural-elevation",
    "topicTitle": "6. 建築立面圖",
    "desc": "掌握立面圖正投影原理、方位與軸線命名法、高程系統符號 (GL, FL, RF, PAR)、外牆材質圖例與陰影表現。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "dimensioning-and-symbols",
    "topicTitle": "7. 尺寸標註與圖例",
    "desc": "掌握 CNS 11567 尺寸標註四大要素、符號前綴 (R, Ø, t, □)、建築外圍三階層標註原則、標準圖頭規格與 CAD 標註管理。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "cad-basics",
    "topicTitle": "8. CAD 繪圖基礎",
    "desc": "掌握 AutoCAD 座標系統、圖層管理 (ByLayer)、狀態列關鍵功能鍵 (OSNAP, ORTHO)、常用 20 大快捷鍵指令及 Viewport 出圖設定。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "vocabulary-phrases",
    "topicTitle": "1. 字彙與片語",
    "desc": "深入掌握構詞法、建築與工程專業字彙 (Architectural Terminology)、高頻動詞片語與空間位置介系詞。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "grammar-patterns",
    "topicTitle": "2. 文法句型",
    "desc": "五大基本句型、時態與被動語態、關係子句、分詞構句與假設語氣。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "reading-comprehension",
    "topicTitle": "3. 閱讀測驗",
    "desc": "略讀與掃讀技巧、綠建築與建築結構技術短文閱讀、上下文推論與文章主旨分析。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "conversation-daily-use",
    "topicTitle": "4. 對話與日常應用",
    "desc": "建築工地溝通、事務所設計會議、社交與生活英語、職場對話習慣用語。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "cloze-passage-structure",
    "topicTitle": "5. 克漏字與篇章結構",
    "desc": "篇章銜接、轉折語與邏輯連接詞、克漏字實戰解題策略與篇章結構重建。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "translation-writing",
    "topicTitle": "6. 翻譯與寫作基礎",
    "desc": "中譯英技巧、句型結構重組、建築與技術段落寫作結構、標點符號與寫作修辭。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "spatial-design",
    "topicTitle": "1. 空間設計與觀察",
    "desc": "人體工學與空間尺度、空間機能與動線規劃、基地微氣候觀察分析、無障礙通用設計規範與空間型態學。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "construction-methods",
    "topicTitle": "2. 營造工法與建築構造細部",
    "desc": "詳細剖析鋼筋混凝土 (RC)、鋼骨 (SC) 與鋼骨鋼筋混凝土 (SRC) 構造體系比較，開挖與基礎工法、軀體防水隔熱、門窗帷幕牆細部與裝配式預製工法。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "cad-bim",
    "topicTitle": "3. 電腦輔助設計與 BIM 應用",
    "desc": "掌握 AutoCAD 2D 製圖圖層與 CNS 標準、Revit BIM 建築資訊模型建立、3D 視覺化渲染、BIM 4D/5D 專案管理與參數化設計。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "portfolio-models",
    "topicTitle": "4. 作品集製作與模型表達",
    "desc": "作品集視覺排版與敘事邏輯、建築實體模型製作技巧與材料運用、圖表 Diagramming 視覺表達、透視圖攝影與簡報評圖術。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "certification",
    "topicTitle": "5. 建築科升學與證照檢定",
    "desc": "建築製圖應用丙/乙級檢定攻防、統測專一專二備考策略、科大/大學建築系選填與面試作品集輔導、建築師國考與技師職涯規劃。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理與建築風土選址",
    "topicSlug": "environment-terrain",
    "topicTitle": "1. 地理環境與地形建築選址",
    "desc": "探討內外營力地形、順向坡、土壤液化、斷層退縮、喀斯特溶洞及山坡地開發之地質評估與建築安全選址策略。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理與建築風土選址",
    "topicSlug": "climate-environment",
    "topicTitle": "2. 氣候環境與氣候應答建築",
    "desc": "分析氣候要素與控制因子、被動式太陽能、遮陽深寬比、微氣候通風、都市熱島減熱與太陽軌跡遮陽幾何。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理與建築風土選址",
    "topicSlug": "population-urban",
    "topicTitle": "3. 人口結構與都市空間結構",
    "desc": "探討人口轉型、高齡化通用設計、中心地方理論、都市內部空間結構模型、TOD 大眾運輸導向開發與土地競價理論。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理與建築風土選址",
    "topicSlug": "regional-development",
    "topicTitle": "4. 區域發展與產業區位選址",
    "desc": "分析韋伯工業區位理論、區位商數 LQ、成長極理論、生態工業園區與半導體科技廊帶選址。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理與建築風土選址",
    "topicSlug": "environmental-issues",
    "topicTitle": "5. 環境議題與災害防救工程",
    "desc": "探討全球氣候變遷、淹水高程計算、土石流防災退縮、土壤液化防護、海綿城市 LID 與環境影響評估 EIA。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理與建築風土選址",
    "topicSlug": "gis",
    "topicTitle": "6. 地理資訊系統與空間分析",
    "desc": "介紹向量/網格/BIM 整合、疊圖與環域選址演算、視域與日照權分析、網路路徑、IDW/Kriging 內插與數位雙生 3D GIS。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "taiwan-history",
    "topicTitle": "1. 台灣史：建築環境演變與本土樣式",
    "desc": "深入探索台灣歷史發展脈絡、南島語族聚落、荷西明鄭堡壘、清領漢人傳統合院與寺廟、日治近代西洋歷史式樣與市區改正，以及戰後地域現代主義轉型。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "chinese-history",
    "topicTitle": "2. 中國史：古代建築形制、工藝與《營造法式》",
    "desc": "詳細剖析中國古代建築發展脈絡，從先秦夯土高台、唐代大木作氣魄、北宋《營造法式》材分制模組化，到明清紫禁城宮殿禮制與江南文人園林造景哲學。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "world-history",
    "topicTitle": "3. 西洋史：從古典、哥德、文藝復興到現代主義與當代建築",
    "desc": "縱覽西洋建築史發展脈絡，從古希臘羅馬柱式與拱券突破、中世紀哥德飛扶壁與光影神聖空間、文藝復興人文主義理性、巴洛克動態戲劇張力、十九世紀工業革命新材料，到現代主義四位大師與當代數位參數化建築。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "architectural-history",
    "topicTitle": "4. 建築思潮與歷史理論演變",
    "desc": "深入剖析歷史主義與復古思潮、機能主義「形隨機能」、有機建築與自然融和、結構主義與解構主義哲學，以及當代批判地域主義與現象學場所精神。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "cultural-heritage",
    "topicTitle": "5. 文化資產保存與古蹟修復工程",
    "desc": "深入研析文化資產保存法規體系、《威尼斯憲章》國際保存原則、古蹟調查研究與非破壞檢測、傳統木構與磚石修復工法、舊建築再利用以及古蹟防災加固工程。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "social-change",
    "topicTitle": "6. 社會變遷與都市形貌變革",
    "desc": "探討工業革命與都市化潮、19世紀巴黎奧斯曼大改造、霍華德花園城市運動、台灣日治市區改正至戰後都市更新、權利變換、社區權益以及高齡化與智慧韌性都市。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "basic-properties",
    "topicTitle": "1. 材料與試驗概論與基本性質",
    "desc": "材料分類規格、真密度/體積密度/孔隙率、吸水率與含水率、應力應變關係、泊松比、硬度與衝擊韌性。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-composition",
    "topicTitle": "2.1 卜特蘭水泥水化化學成分",
    "desc": "深入解析卜特蘭水泥的四大主要化學成分 (C3S, C2S, C3A, C4AF) 及其水化反應機制、釋放熱量與強度貢獻。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-types",
    "topicTitle": "2.2 CNS 61 卜特蘭水泥五大類型比較",
    "desc": "詳解中華民國國家標準 (CNS 61) 劃分之五種基本卜特蘭水泥特性與其適合之工程應用場景。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-vicat",
    "topicTitle": "2.3 維卡儀 (Vicat) 凝結時間試驗",
    "desc": "介紹測定水泥水化過程初凝 (Initial Set) 與終凝 (Final Set) 時間之國家標準步驟。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-strength",
    "topicTitle": "2.4 水泥砂漿抗壓強度試驗",
    "desc": "評估水泥品質與強度的標準砂漿試體 (5 × 5 × 5 cm 立方體) 製作與抗壓測試。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-storage",
    "topicTitle": "2.5 水泥儲存與假凝 (False Set) 現象",
    "desc": "水泥包裝、工地儲存管理規範，以及與「閃凝」不同的「假凝」現象之原理與處置。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "concrete",
    "topicTitle": "3. 混凝土構造與配比設計",
    "desc": "混凝土組成、水灰比 (W/C) 與強度關係 (Abrams Law)、絕對體積法配比設計步驟、坍度試驗、抗壓試驗與 SCC/HPC 特種混凝土。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "stone-ceramics-glass",
    "topicTitle": "4. 石材、陶瓷製品與玻璃",
    "desc": "火成岩/堆積岩/變質岩分類與花崗岩/大理石應用、普通磚與面磚試驗、吸水率與抗壓強度、平板玻璃/強化玻璃/複層低輻射 (Low-E) 玻璃與膠合玻璃。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "wood",
    "topicTitle": "5. 木材構造與品質試驗",
    "desc": "木材年輪構造、纖維飽和點 (FSP)、含水率與強度關係、集成材 (Glulam) 與 CLT 技術規格、木材防腐防蟻壓力注入法與抗灣試驗。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "polymers-asphalt",
    "topicTitle": "6. 高分子、瀝青與防水塗料",
    "desc": "石油瀝青 (Asphalt) 物理性質與針入度/軟化點試驗、塑膠 (熱塑性 vs 熱固性)、合成樹脂 (Epoxy, PU, Silicone) 與建築防水材料規範。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "metals",
    "topicTitle": "7. 金屬材料與防蝕試驗",
    "desc": "鋼材化學成分與碳含量效應、結構鋼規格 (SS400, SN490, SD280, SD420)、鋼筋拉伸試驗 (CNS 2111)、金屬電化學腐蝕與熱浸鍍鋅/陰極防蝕技術。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "green-materials",
    "topicTitle": "8. 綠建材與永續材料發展",
    "desc": "綠建材標章四大分類 (生態、健康、高性能、再生)、TVOC 與甲醛小型釋放腔檢測、飛灰/爐石低碳水泥、再生骨材與 LCA 碳足跡。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "trigonometry",
    "topicTitle": "1. 三角函數與建築應用",
    "desc": "深入掌握正弦定理、餘弦定理、無障礙坡道切線、和差角公式推導與極座標系統，應用於建築基地測量、屋頂斜率與聲學週期變化。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "vectors",
    "topicTitle": "2. 平面向量與力學分解",
    "desc": "深入掌握向量正交分解、內積證明與夾角、外積與行列式面積、拉米定理靜力平衡及正交投影，應用於結構受力分析與樑柱接頭幾何。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "algebra",
    "topicTitle": "3. 代數與多項式",
    "desc": "深入掌握二次多項式配方法頂點式推導、餘式與因式定理證明、克拉瑪公式、線性規劃可行域極值及對數尺度，應用於拱門幾何與材料預算最佳化。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "geometry",
    "topicTitle": "4. 函數與幾何圖形",
    "desc": "深入掌握橢圓標準式證明與聲學畫廊焦跡、雙曲線與雙曲拋物面薄殼、拋物線反射光學證明、3D 空間平面方程式及點到平面距離公式。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "probability",
    "topicTitle": "5. 機率與統計",
    "desc": "深入掌握排列組合原理證明、貝氏定理與風險評估、隨機變數期望值與變異數、常態分佈品質管制及 PERT 三點估算法工期評估。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "calculus",
    "topicTitle": "6. 微積分基礎",
    "desc": "深入掌握微商極限定義與微分公式推導、一二階導數極值最佳化、微積分基本定理 (FTC) 證明、定積分計算地形面積土方及樑剪力彎矩積分導引。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "units-vectors",
    "topicTitle": "1. 單位與向量",
    "desc": "力學 SI 單位制、因次同性原理、純量與向量性質、向量拉密與三角分解、平面與空間分力合成法。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "force-equilibrium",
    "topicTitle": "2. 力系與共點力平衡",
    "desc": "自由體圖 (FBD) 畫法、二力構件與三力平衡、拉密定理 (Lami's Theorem)、平面一般力系平衡條件。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "centroid",
    "topicTitle": "3. 重心與形心",
    "desc": "一次矩 (First Moment of Area)、組合圖形形心計算、二次矩 (Moment of Inertia)、平行軸定理與帕普斯 (Pappus) 定理。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "friction",
    "topicTitle": "4. 摩擦力",
    "desc": "靜摩擦與動摩擦機制、最大靜摩擦力 (fs_max = μs N)、摩擦角與自鎖條件、塊體滑動與翻覆傾倒臨界競爭判斷。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "truss",
    "topicTitle": "5. 平面桁架分析",
    "desc": "桁架靜定性判別 (m + r vs. 2j)、零桿判別法則 (Zero-Force Members)、節點法 (Method of Joints) 與剖面法 (Method of Sections) 求解桿件軸力。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "beam",
    "topicTitle": "6. 靜定樑之受力",
    "desc": "支承反力類型、載重集度 w(x)、剪力 V(x) 與彎矩 M(x) 微積分關係、剪力圖與彎矩圖繪製及最大彎矩 M_max 位置判斷。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "stress-strain",
    "topicTitle": "7. 應力與應變",
    "desc": "正應力 (σ) 與剪應力 (τ)、正應變 (ε) 與剪應變 (γ)、虎克定律 (Hooke's Law)、彈性模數 (E/G/ν) 及軸向桿件變形量 (δ = PL/AE)。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "mechanics-motion",
    "topicTitle": "1. 力學與運動 (Structural Kinematics & Static Equilibrium)",
    "desc": "建築運動學基礎、牛頓三大運動定律、靜力平衡條件、斜面摩擦、桁架與樑構件內力及高空落體防護。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "work-energy",
    "topicTitle": "2. 功與能量 (Work, Energy & Green Building Thermodynamics)",
    "desc": "功與功率、動能與重力位能、能量守恆定律、綠建築熱功當量、水泵/風機定律與蓄能技術。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "thermodynamics",
    "topicTitle": "3. 熱學與建築熱環境 (Building Thermodynamics & HVAC)",
    "desc": "熱傳導/對流/輻射、外牆熱傳透率 U 值與熱阻 R 值、顯熱與潛熱、焓濕圖與冰水主機 COP 性能係數。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "waves-acoustics",
    "topicTitle": "4. 波動與建築聲學 (Building Waves & Acoustics)",
    "desc": "波動物理、聲速與聲壓級 dB(A)、賽賓殘響時間 RT60、隔音等級 STC、樓板衝擊音與交通噪音衰減。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "optics",
    "topicTitle": "5. 光學與建築照明設計 (Optics & Architectural Lighting)",
    "desc": "光的折射與反射、照度距離平方反比定律、利用係數法燈具規劃、採光係數 DF 與防眩光 UGR。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "electricity",
    "topicTitle": "6. 電學基礎與建築配電系統 (Building Electrical & Circuits)",
    "desc": "歐姆定律、電功率與焦耳熱、交流電功率因數 cos φ、無熔絲開關 NFB、三相配電與接地保護。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "distance-and-angle",
    "topicTitle": "1. 距離與角度測量",
    "desc": "鋼卷尺距離修正量計算法則、光電測距 (EDM) 原理、經緯儀角度測量與正倒鏡觀測消除儀器系統誤差。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "elevation-and-leveling",
    "topicTitle": "2. 高程測量與水準儀",
    "desc": "水準測量幾何原理、視線高法 (HI) 與高差法 (Rise & Fall) 水準表記錄規範、地球曲率與大氣折光修正、水準儀兩點法檢驗與校正。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "instrument-setup",
    "topicTitle": "3. 儀器操作與整置",
    "desc": "經緯儀/全測站儀與水準儀之光學/雷射對中、腳架調整、三螺絲/兩螺絲精平操作 SOP 與儀器三軸檢核。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "traverse-surveying",
    "topicTitle": "4. 導線測量",
    "desc": "導線佈設型式與幾何條件、多邊形內角和與外角和閉合差、正反方位角推算 SOP、角度閉合差分配。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "coordinate-computation",
    "topicTitle": "5. 座標計算與閉合差",
    "desc": "縱橫距計算、位置閉合差與相對精度、羅盤儀法則 (Bowditch Rule) 與經緯儀法則平差、導線計算表。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "area-and-error",
    "topicTitle": "6. 面積計算與誤差處理",
    "desc": "座標斜乘法/鞋帶公式 (Shoelace Formula)、倍經距法 (DMD)、測量誤差三大分類、最妥值與中誤差、誤差傳播定律。"
  }
] as const satisfies readonly TopicSearchItem[];
