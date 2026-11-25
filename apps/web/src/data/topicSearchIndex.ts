// ⚠️ 由 scripts/build-topic-index.mjs 自動產生，請勿手動修改。
// 內容取自 data/subjects.ts（已依知識框架排序並清理標題）。
export interface TopicSearchItem {
  subjectSlug: string;
  subjectTitle: string;
  topicSlug: string;
  topicTitle: string;
  /** 依知識框架推導的章節序號（1 起算） */
  chapter?: number;
  unitTitle?: string;
  desc: string;
}

// Deliberately metadata-only: importing this in the global Navbar must never pull
// concepts, worked examples, practices or exam content into every page bundle.
export const topicSearchIndex = [
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "units-vectors",
    "topicTitle": "1. 單位與向量",
    "chapter": 1,
    "unitTitle": "力與共點力系基礎",
    "desc": "力學 SI 單位制、因次同性原理、純量與向量性質、向量拉密與三角分解、平面與空間分力合成法。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "force-equilibrium",
    "topicTitle": "2. 力系與共點力平衡",
    "chapter": 2,
    "unitTitle": "力與共點力系基礎",
    "desc": "自由體圖 (FBD) 畫法、二力構件與三力平衡、拉密定理 (Lami's Theorem)、平面一般力系平衡條件。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "parallel-force-systems",
    "topicTitle": "3. 平面平行力系",
    "chapter": 3,
    "unitTitle": "平面與空間力系",
    "desc": "把分布載重換成等值集中力，利用合力與力矩定位作用線，並反推支承反力。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "nonconcurrent-force-systems",
    "topicTitle": "4. 共面非共點非平行力系",
    "chapter": 4,
    "unitTitle": "平面與空間力系",
    "desc": "同時處理水平力、垂直力與力偶，以三個獨立平衡方程求解剛體未知反力。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "spatial-force-systems",
    "topicTitle": "5. 空間力系與空間平衡",
    "chapter": 5,
    "unitTitle": "平面與空間力系",
    "desc": "掌握三維空間力之笛卡兒向量表示法、方向餘弦、空間共點與平行力系之合成分解，以及空間三維六個靜力平衡方程之應用。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "truss",
    "topicTitle": "6. 平面桁架分析",
    "chapter": 6,
    "unitTitle": "桁架與摩擦力",
    "desc": "桁架靜定性判別 (m + r vs. 2j)、零桿判別法則 (Zero-Force Members)、節點法 (Method of Joints) 與剖面法 (Method of Sections) 求解桿件軸力。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "friction",
    "topicTitle": "7. 摩擦力",
    "chapter": 7,
    "unitTitle": "桁架與摩擦力",
    "desc": "靜摩擦與動摩擦機制、最大靜摩擦力 (fs_max = μs N)、摩擦角與自鎖條件、塊體滑動與翻覆傾倒臨界競爭判斷。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "centroid",
    "topicTitle": "8. 重心與形心",
    "chapter": 8,
    "unitTitle": "斷面性質、應力應變與剪力",
    "desc": "一次矩 (First Moment of Area)、組合圖形形心計算、二次矩 (Moment of Inertia)、平行軸定理與帕普斯 (Pappus) 定理。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "stress-strain",
    "topicTitle": "9. 應力與應變",
    "chapter": 9,
    "unitTitle": "斷面性質、應力應變與剪力",
    "desc": "正應力 (σ) 與剪應力 (τ)、正應變 (ε) 與剪應變 (γ)、虎克定律 (Hooke's Law)、彈性模數 (E/G/ν) 及軸向桿件變形量 (δ = PL/AE)。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "shear-properties",
    "topicTitle": "10. 剪力與剪應力",
    "chapter": 10,
    "unitTitle": "斷面性質、應力應變與剪力",
    "desc": "區分直接剪力、平均剪應力與梁中橫向剪應力，避免把 V、τ 與剪力圖混為一談。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "beam",
    "topicTitle": "11. 靜定樑之受力",
    "chapter": 11,
    "unitTitle": "靜定梁、梁內應力與莫爾圓",
    "desc": "支承反力類型、載重集度 w(x)、剪力 V(x) 與彎矩 M(x) 微積分關係、剪力圖與彎矩圖繪製及最大彎矩 M_max 位置判斷。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "plane-stress",
    "topicTitle": "12. 平面應力與莫耳圓圖解",
    "chapter": 12,
    "unitTitle": "靜定梁、梁內應力與莫爾圓",
    "desc": "深入解析平面應力狀態、斜面正交應力與剪應力轉換公式、主平面與主應力求法，以及莫耳圓 (Mohr's Circle) 圖解幾何法。"
  },
  {
    "subjectSlug": "mechanics",
    "subjectTitle": "基礎工程力學",
    "topicSlug": "structural-failures",
    "topicTitle": "13. 真實結構災難與生命財產安全",
    "chapter": 13,
    "unitTitle": "結構安全與破壞案例",
    "desc": "以工程實例辨認材料強度、構件失穩與風致振動的不同破壞機制，從塔科馬吊橋扭轉顫振、地震軟弱層與短柱效應，學習安全係數及設計適用條件。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "basic-properties",
    "topicTitle": "1. 材料與試驗概論與基本性質",
    "chapter": 1,
    "unitTitle": "材料與試驗總論",
    "desc": "材料分類規格、真密度/體積密度/孔隙率、吸水率與含水率、應力應變關係、泊松比、硬度與衝擊韌性。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-composition",
    "topicTitle": "2. 卜特蘭水泥水化化學成分",
    "chapter": 2,
    "unitTitle": "卜特蘭水泥與標準試驗",
    "desc": "深入解析卜特蘭水泥的四大主要化學成分 (C3S, C2S, C3A, C4AF) 及其水化反應機制、釋放熱量與強度貢獻。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-types",
    "topicTitle": "3. CNS 61 卜特蘭水泥五大類型比較",
    "chapter": 3,
    "unitTitle": "卜特蘭水泥與標準試驗",
    "desc": "詳解中華民國國家標準 (CNS 61) 劃分之五種基本卜特蘭水泥特性與其適合之工程應用場景。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-vicat",
    "topicTitle": "4. 維卡儀 (Vicat) 凝結時間試驗",
    "chapter": 4,
    "unitTitle": "卜特蘭水泥與標準試驗",
    "desc": "介紹測定水泥水化過程初凝 (Initial Set) 與終凝 (Final Set) 時間之國家標準步驟。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-strength",
    "topicTitle": "5. 水泥砂漿抗壓強度試驗",
    "chapter": 5,
    "unitTitle": "卜特蘭水泥與標準試驗",
    "desc": "評估水泥品質與強度的標準砂漿試體 (5 × 5 × 5 cm 立方體) 製作與抗壓測試。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "cement-storage",
    "topicTitle": "6. 水泥儲存與假凝 (False Set) 現象",
    "chapter": 6,
    "unitTitle": "卜特蘭水泥與標準試驗",
    "desc": "水泥包裝、工地儲存管理規範，以及與「閃凝」不同的「假凝」現象之原理與處置。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "concrete",
    "topicTitle": "7. 混凝土構造與配比設計",
    "chapter": 7,
    "unitTitle": "混凝土與配比品管",
    "desc": "混凝土組成、水灰比 (W/C) 與強度關係 (Abrams Law)、絕對體積法配比設計步驟、坍度試驗、抗壓試驗與 SCC/HPC 特種混凝土。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "stone-ceramics-glass",
    "topicTitle": "8. 石材、陶瓷製品與玻璃",
    "chapter": 8,
    "unitTitle": "無機、有機與金屬建材",
    "desc": "火成岩/堆積岩/變質岩分類與花崗岩/大理石應用、普通磚與面磚試驗、吸水率與抗壓強度、平板玻璃/強化玻璃/複層低輻射 (Low-E) 玻璃與膠合玻璃。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "wood",
    "topicTitle": "9. 木材構造與品質試驗",
    "chapter": 9,
    "unitTitle": "無機、有機與金屬建材",
    "desc": "木材年輪構造、纖維飽和點 (FSP)、含水率與強度關係、集成材 (Glulam) 與 CLT 技術規格、木材防腐防蟻壓力注入法與抗彎試驗。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "polymers-asphalt",
    "topicTitle": "10. 高分子、瀝青與防水塗料",
    "chapter": 10,
    "unitTitle": "無機、有機與金屬建材",
    "desc": "石油瀝青 (Asphalt) 物理性質與針入度/軟化點試驗、塑膠 (熱塑性 vs 熱固性)、合成樹脂 (Epoxy, PU, Silicone) 與建築防水材料規範。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "metals",
    "topicTitle": "11. 金屬材料與防蝕試驗",
    "chapter": 11,
    "unitTitle": "無機、有機與金屬建材",
    "desc": "鋼材化學成分與碳含量效應、結構鋼規格 (SS400, SN490, SD280, SD420)、鋼筋拉伸試驗 (CNS 2111)、金屬電化學腐蝕與熱浸鍍鋅/陰極防蝕技術。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "green-materials",
    "topicTitle": "12. 綠建材與永續材料發展",
    "chapter": 12,
    "unitTitle": "綠建材與永續材料創新",
    "desc": "綠建材標章四大分類 (生態、健康、高性能、再生)、TVOC 與甲醛小型釋放腔檢測、飛灰/爐石低碳水泥、再生骨材與 LCA 碳足跡。"
  },
  {
    "subjectSlug": "materials",
    "subjectTitle": "材料與試驗",
    "topicSlug": "green-building-materials",
    "topicTitle": "13. 綠建材、低碳水泥與循環經濟",
    "chapter": 13,
    "unitTitle": "綠建材與永續材料創新",
    "desc": "掌握台灣綠建材四大標章體系（生態、健康、高性能、再生）、低碳水泥（PLC/高爐水泥/飛灰）與循環營建材料評估標準。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "surveying-fundamentals",
    "topicTitle": "1. 測量總論與誤差基礎",
    "chapter": 1,
    "unitTitle": "高一上：測量總論、距離與水準測量",
    "desc": "建立測量基準、單位、精度、有效數字、誤差與工作倫理的完整起點。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "distance-and-angle",
    "topicTitle": "2. 距離與角度測量",
    "chapter": 2,
    "unitTitle": "高一上：測量總論、距離與水準測量",
    "desc": "鋼卷尺距離修正量計算法則、光電測距 (EDM) 原理、經緯儀角度測量與正倒鏡觀測消除儀器系統誤差。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "elevation-and-leveling",
    "topicTitle": "3. 高程測量與水準儀",
    "chapter": 3,
    "unitTitle": "高一上：測量總論、距離與水準測量",
    "desc": "水準測量幾何原理、視線高法 (HI) 與高差法 (Rise & Fall) 水準表記錄規範、地球曲率與大氣折光修正、水準儀兩點法檢驗與校正。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "instrument-setup",
    "topicTitle": "4. 儀器操作與整置",
    "chapter": 4,
    "unitTitle": "高一下：經緯儀測角與間接測距高程",
    "desc": "經緯儀/全測站儀與水準儀之光學/雷射對中、腳架調整、三螺絲/兩螺絲精平操作 SOP 與儀器三軸檢核。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "indirect-distance-elevation",
    "topicTitle": "5. 間接距離與高程測量",
    "chapter": 5,
    "unitTitle": "高一下：經緯儀測角與間接測距高程",
    "desc": "整合視距、三角高程與不可達距離，從觀測量判斷該用水平距離、高差或斜距公式。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "traverse-surveying",
    "topicTitle": "6. 導線測量",
    "chapter": 6,
    "unitTitle": "綜合應用測量：導線、座標與面積誤差",
    "desc": "導線佈設型式與幾何條件、多邊形內角和與外角和閉合差、正反方位角推算 SOP、角度閉合差分配。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "coordinate-computation",
    "topicTitle": "7. 座標計算與閉合差",
    "chapter": 7,
    "unitTitle": "綜合應用測量：導線、座標與面積誤差",
    "desc": "縱橫距計算、位置閉合差與相對精度、羅盤儀法則 (Bowditch Rule) 與經緯儀法則平差、導線計算表。"
  },
  {
    "subjectSlug": "surveying",
    "subjectTitle": "測量實習",
    "topicSlug": "area-and-error",
    "topicTitle": "8. 面積計算與誤差處理",
    "chapter": 8,
    "unitTitle": "綜合應用測量：導線、座標與面積誤差",
    "desc": "座標斜乘法/鞋帶公式 (Shoelace Formula)、倍經距法 (DMD)、測量誤差三大分類、最妥值與中誤差、誤差傳播定律。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "drafting-fundamentals",
    "topicTitle": "1. 製圖基本觀念與圖紙管理",
    "chapter": 1,
    "unitTitle": "高一上：製圖基礎、儀器、線字法與幾何作圖",
    "desc": "補齊圖紙規格、標題欄、折疊、圖面種類、版本管理與標準化判讀。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "drafting-instruments",
    "topicTitle": "2. 製圖儀器之使用與維護",
    "chapter": 2,
    "unitTitle": "高一上：製圖基礎、儀器、線字法與幾何作圖",
    "desc": "熟練掌握工程製圖板、鉛筆與筆芯硬度階級、平行尺、三角板、圓規、分規與比例尺之正確使用技巧與儀器維護注意事項。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "lines-and-lettering",
    "topicTitle": "3. 線條種類與字法",
    "chapter": 3,
    "unitTitle": "高一上：製圖基礎、儀器、線字法與幾何作圖",
    "desc": "深入掌握 CNS 11567 建築與工程製圖規範，包含線條分類、線寬階級、工程字體級距、圖紙圖頭規格與 CAD 線型管理。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "scale",
    "topicTitle": "4. 比例與尺度",
    "chapter": 4,
    "unitTitle": "高一上：製圖基礎、儀器、線字法與幾何作圖",
    "desc": "掌握圖面比例換算、三稜比例尺讀取、建築工程常用比例選用表 (1/100, 1/50, 1/20) 及 CAD 出圖比例設定。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "geometric-constructions",
    "topicTitle": "5. 幾何畫法與平面幾何應用",
    "chapter": 5,
    "unitTitle": "高一上：製圖基礎、儀器、線字法與幾何作圖",
    "desc": "深入掌握平面幾何基本圖形繪製、垂直線與平行線作圖、切線與切點求法、線段與角度等分法、正多邊形畫法及建築常用幾何曲線。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "orthographic-projection",
    "topicTitle": "6. 正投影視圖",
    "chapter": 6,
    "unitTitle": "高一下：正投影、輔助視圖與建築剖視尺度",
    "desc": "理解正投影原理、第一角法與第三角法嚴格比較、三視圖「長對正、高平齊、寬相等」與輔助視圖繪製。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "auxiliary-views",
    "topicTitle": "7. 輔助視圖與斜面真形圖法",
    "chapter": 7,
    "unitTitle": "高一下：正投影、輔助視圖與建築剖視尺度",
    "desc": "掌握單斜面與複斜面之輔助視圖繪製原理、輔助基準線（Reference Line/Fold Line）畫法、斜面實大形與線段實長（True Length and True Shape）求法。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "sectional-views",
    "topicTitle": "8. 剖面圖判讀",
    "chapter": 8,
    "unitTitle": "高一下：正投影、輔助視圖與建築剖視尺度",
    "desc": "掌握剖面圖切割原理、割面線符號、五大剖面類型、CNS 45° 剖面線規範及實心軸與螺栓「不剖」標準。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "dimensioning-and-symbols",
    "topicTitle": "9. 尺寸標註與圖例",
    "chapter": 9,
    "unitTitle": "高一下：正投影、輔助視圖與建築剖視尺度",
    "desc": "掌握 CNS 11567 尺寸標註四大要素、符號前綴 (R, Ø, t, □)、建築外圍三階層標註原則、標準圖頭規格與 CAD 標註管理。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "architectural-plan",
    "topicTitle": "10. 建築平面圖",
    "chapter": 10,
    "unitTitle": "建築平立剖整合與透視陰影",
    "desc": "掌握建築平面圖水平切面高、牆體構造與厚度標示、門窗編號圖例、建築設備及 CAD 高效繪圖指令。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "architectural-elevation",
    "topicTitle": "11. 建築立面圖",
    "chapter": 11,
    "unitTitle": "建築平立剖整合與透視陰影",
    "desc": "掌握立面圖正投影原理、方位與軸線命名法、高程系統符號 (GL, FL, RF, PAR)、外牆材質圖例與陰影表現。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "civil-architectural-drawings",
    "topicTitle": "12. 土木與建築製圖整合判讀",
    "chapter": 12,
    "unitTitle": "建築平立剖整合與透視陰影",
    "desc": "把基地、平面、立面、剖面、結構與施工詳圖串成同一套圖說的交叉查核流程。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "perspective-projection",
    "topicTitle": "13. 透視圖投影與陰影求法",
    "chapter": 13,
    "unitTitle": "建築平立剖整合與透視陰影",
    "desc": "深入研習透視圖投影原理、畫面 PP、視點 EP、消失點 VP 幾何關係、一點/兩點/三點透視作圖法及透視陰影繪製技巧。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "building-codes-far",
    "topicTitle": "14. 容積率、建蔽率與建築法規實務",
    "chapter": 14,
    "unitTitle": "高二進階：建照法規面積、CAD 與 BIM",
    "desc": "深入掌握建蔽率、容積率、免計容積與路寬退縮法規，準確計算基地最大開發量體與空間配置。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "cad-basics",
    "topicTitle": "15. CAD 繪圖基礎",
    "chapter": 15,
    "unitTitle": "高二進階：建照法規面積、CAD 與 BIM",
    "desc": "掌握 AutoCAD 座標系統、圖層管理 (ByLayer)、狀態列關鍵功能鍵 (OSNAP, ORTHO)、常用 20 大快捷鍵指令及 Viewport 出圖設定。"
  },
  {
    "subjectSlug": "drafting",
    "subjectTitle": "製圖實習",
    "topicSlug": "bim-concepts",
    "topicTitle": "16. 2D 到 3D BIM 建築資訊模型實務",
    "chapter": 16,
    "unitTitle": "高二進階：建照法規面積、CAD 與 BIM",
    "desc": "掌握建築資訊模型 (Building Information Modeling, BIM) 核心概念、LOD 發展等級、IFC 跨平台標準、Revit 構件族群與管線碰撞衝突檢討 (Clash Detection)。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "classical-literature",
    "topicTitle": "1. 古典文學選讀與建築空間散文",
    "chapter": 1,
    "unitTitle": "文學選讀",
    "desc": "深入賞析先秦諸子、唐宋八大家古典散文、漢賦駢文及建築論述經典（如〈嶽陽樓記〉、〈醉翁亭記〉、〈阿房宮賦〉），掌握體裁流變與古典建築空間意象。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "modern-literature",
    "topicTitle": "2. 現代文學與應用文實務",
    "chapter": 2,
    "unitTitle": "文學選讀",
    "desc": "研析現代詩、散文、小說之美學風格與空間意象，並精通公文（函）、書信、題辭、柬帖及建築工程應用文規範。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "linguistics",
    "topicTitle": "3. 語文知識與修辭應用",
    "chapter": 3,
    "unitTitle": "語文知識",
    "desc": "系統化掌握字音字形辨正、成語典故來源、修辭法（譬喻、轉化、借代、層遞、映襯等）及其於建築與文學文本中之表現技巧。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "reading-comprehension",
    "topicTitle": "4. 閱讀理解與建築論述判讀",
    "chapter": 4,
    "unitTitle": "閱讀與寫作",
    "desc": "培養長篇文本快速略讀、主題句擷取、跨文本對比、非連續性文本（圖表與空間邏輯圖）判讀及現代建築思想論述之分析能力。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "writing-expression",
    "topicTitle": "5. 作文與表達（含建築空間論述）",
    "chapter": 5,
    "unitTitle": "閱讀與寫作",
    "desc": "精通論說文與抒情文之構思、起承轉合篇章架構、修辭造句、空間意象融入及建築空間評析作文實戰技巧。"
  },
  {
    "subjectSlug": "chinese",
    "subjectTitle": "國語文",
    "topicSlug": "cultural-knowledge",
    "topicTitle": "6. 文化常識與園林建築思潮",
    "chapter": 6,
    "unitTitle": "文化常識",
    "desc": "涵蓋國學常識、年齡代稱、天干地支與時辰、傳統節慶民俗、古代度量衡與中國傳統園林美學思潮（計成《園冶》與文人造園觀）。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "vocabulary-phrases",
    "topicTitle": "1. 基礎字彙與片語",
    "chapter": 1,
    "unitTitle": "高一：基礎能力",
    "desc": "掌握統測核心2000字，包含字首字根字尾分析、日常實用片語、情緒字彙與生活常見單字，為英文打下堅實基礎。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "grammar-patterns",
    "topicTitle": "2. 基礎文法句型",
    "chapter": 2,
    "unitTitle": "高一：基礎能力",
    "desc": "掌握英文五大基本句型、12時態（特重現在完成式）、基礎被動語態、助動詞、不定詞與動名詞之差異、比較級最高級及虛主詞 it 的應用。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "conversation-daily-use",
    "topicTitle": "3. 日常對話與社交情境",
    "chapter": 3,
    "unitTitle": "高一：基礎能力",
    "desc": "本章節涵蓋日常問候、校園生活、購物餐飲、電話預約等實用會話情境，並介紹英語口語中的連音與弱化現象，最後提供統測對話題的解題策略，幫助同學在考試中快速掌握語意。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "reading-comprehension",
    "topicTitle": "4. 閱讀理解與策略",
    "chapter": 4,
    "unitTitle": "高一：基礎能力",
    "desc": "掌握閱讀四大核心策略：略讀(Skimming)、掃讀(Scanning)、上下文猜字義(Context Clues[TTS:Context Clues])及段落結構分析。有效破解統測英文閱讀測驗中的主旨題、細節題與推論題。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "vocabulary-professional",
    "topicTitle": "5. 專業與工程字彙",
    "chapter": 5,
    "unitTitle": "高二：進階應用",
    "desc": "關於 PVQC 土木與建築類專業英文詞彙 (ESP)，涵蓋材料、結構、圖學、測量、施工與工安等常見統測與實務字彙。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "grammar-clauses",
    "topicTitle": "6. 複合句型與子句",
    "chapter": 6,
    "unitTitle": "高二：進階應用",
    "desc": "本章節涵蓋統測必考的關係子句(形容詞子句)、名詞子句、副詞子句，以及分詞構句與使役/感官動詞的進階用法，幫助你掌握複雜句型結構，精準解讀建築與工程規範文件。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "reading-infographics",
    "topicTitle": "7. 實用文本與圖表判讀",
    "chapter": 7,
    "unitTitle": "高二：進階應用",
    "desc": "掌握統測素養導向實用文本判讀策略，涵蓋資訊圖表、統計折線與長條圖、工程安全標示、商務電子郵件、公告與操作手冊之快速檢索與推理。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "cloze-passage-structure",
    "topicTitle": "8. 克漏字與篇章結構",
    "chapter": 8,
    "unitTitle": "高二：進階應用",
    "desc": "精熟統測綜合測驗（克漏字）四大解題關鍵：轉折連接詞邏輯、代名詞前後指涉、慣用動詞片語搭配（Collocations）與上下文語意連貫分析。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "grammar-mastery",
    "topicTitle": "9. 高階文法與統測常考句型",
    "chapter": 9,
    "unitTitle": "高三：統測衝刺",
    "desc": "統測衝刺高頻進階句型總整理：涵蓋與現在／過去事實相反之假設語氣、獨立分詞構句、否定副詞句首倒裝、分裂強調句與意志動詞（insist/suggest）句型。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "workplace-communication",
    "topicTitle": "10. 職場溝通與工程商務",
    "chapter": 10,
    "unitTitle": "高三：統測衝刺",
    "desc": "本章節涵蓋工地現場溝通、設計簡報、材料詢價與商務 Email、RFI 釋疑單、工程驗收缺失單（snag list），以及跨文化工作倫理等商務與實務應用英文。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "reading-advanced",
    "topicTitle": "11. 高階閱讀與多文本分析",
    "chapter": 11,
    "unitTitle": "高三：統測衝刺",
    "desc": "強化長篇與跨文本整合閱讀能力，訓練雙篇對讀比較、作者立場與語氣推論、SDGs 永續綠建築與科技議題文本解析及考場配速技巧。"
  },
  {
    "subjectSlug": "english",
    "subjectTitle": "英語文",
    "topicSlug": "translation-writing",
    "topicTitle": "12. 統測非選實戰：翻譯與寫作",
    "chapter": 12,
    "unitTitle": "高三：統測衝刺",
    "desc": "針對統測非選擇題型（如翻譯填空、句子重組、中譯英）與段落寫作提供實戰策略，包含語序轉換、意群拆解、寫作架構及標點符號的精準應用。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "functions-graphs",
    "topicTitle": "1. 坐標系與函數圖形",
    "chapter": 1,
    "unitTitle": "函數與三角",
    "desc": "對應統測數學(C)大綱「一、坐標系與函數圖形」：實數與根式、絕對值與絕對值不等式、平面坐標系的距離與分點，以及 108 課綱併入本單元的二次函數配方法與一元二次不等式。111–115 年統測共 8 題直接考本單元。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "trigonometry",
    "topicTitle": "2. 三角函數",
    "chapter": 2,
    "unitTitle": "函數與三角",
    "desc": "對應統測數學(C)大綱「二、三角函數」：有向角與弧度、銳角三角函數、基本關係式、任意角的三角函數與象限正負、圖形與週期，以及正弦定理、餘弦定理與三角形面積。這是 111–115 年統測出題最多的單元（共 17 題）；和差角公式、極式與三角測量屬於第 8 章「三角函數的應用」。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "vectors",
    "topicTitle": "3. 平面向量",
    "chapter": 3,
    "unitTitle": "向量與式的運算",
    "desc": "對應統測數學(C)大綱「三、平面向量」：向量的表示、加減與係數積、分點與線性組合、內積的坐標計算與夾角、正射影與點到直線距離，以及內積在三角形面積（二階行列式）與柯西不等式的應用。111–115 年統測共 6 題；空間中的向量見第 10 章。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "algebra",
    "topicTitle": "4. 式的運算",
    "chapter": 4,
    "unitTitle": "向量與式的運算",
    "desc": "對應統測數學(C)大綱「四、式的運算」：多項式四則運算與綜合除法、餘式定理與因式定理、多項式方程式（根與係數、虛根與複數四則運算），以及分式、部分分式與根式運算。111–115 年統測共 11 題，部分分式在 111、113、115 年都出現。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "lines-circles",
    "topicTitle": "5. 直線與圓",
    "chapter": 5,
    "unitTitle": "直線與圓",
    "desc": "對應統測數學(C)大綱「五、直線與圓」：斜率與斜角、直線方程式的各種形式、兩直線的平行與垂直、點到直線距離與角平分線、圓的標準式與一般式，以及圓與直線的相交、相切、相離判斷。111–115 年統測共 9 題。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "sequences-series",
    "topicTitle": "6. 數列與級數",
    "chapter": 6,
    "unitTitle": "數列與排列組合",
    "desc": "對應統測數學(C)大綱「六、數列與級數」：等差數列與等差級數、等比數列與等比級數、Σ 符號與規律建模，以及複利、成長率與材料堆疊等應用。108 課綱把本單元聚焦在等差與等比兩類；111–115 年統測共 6 題，常以薪資成長、複利與火柴棒圖形包裝。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "permutations-combinations",
    "topicTitle": "7. 排列組合",
    "chapter": 7,
    "unitTitle": "數列與排列組合",
    "desc": "對應統測數學(C)大綱「七、排列組合」：樹狀圖與加法、乘法原理，直線排列、重複排列與含相同物的排列，組合的意義與性質，以及「先選後排、限制優先、扣除法」的綜合計數策略。111–115 年統測每年 1 題（共 5 題）。108 課綱數學 C 已刪除機率與統計、環狀排列、重複組合與二項式定理。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "trig-applications",
    "topicTitle": "8. 三角函數的應用",
    "chapter": 8,
    "unitTitle": "三角應用與指對數",
    "desc": "對應統測數學(C)大綱「八、三角函數的應用」：和角、差角與二倍角公式，正弦與餘弦的疊合求最大最小值，複數平面與極式的乘除，極坐標與直角坐標的互換，以及仰角、俯角與不可到達距離的三角測量。111–115 年統測共 5 題；108 課綱已刪除棣美弗定理與複數方根。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "exponents-logarithms",
    "topicTitle": "9. 指數與對數",
    "chapter": 9,
    "unitTitle": "三角應用與指對數",
    "desc": "對應統測數學(C)大綱「九、指數與對數」：指數律與有理數指數、指數函數圖形與成長衰退模型、對數的定義與運算性質、對數函數圖形與指對數方程式，以及常用對數在科學記號、位數估算、pH 值、地震規模與分貝上的應用。111–115 年統測共 9 題。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "space-vectors",
    "topicTitle": "10. 空間向量",
    "chapter": 10,
    "unitTitle": "空間向量與矩陣",
    "desc": "對應統測數學(C)大綱「十、空間向量」：空間概念（直線與平面的位置關係、三垂線定理）、空間坐標系與距離公式、空間向量的加減、內積、夾角與正射影，以及平面的法向量與方程式。111–115 年統測共 9 題，情境題（空拍機、黑盒子、營繩）占多數。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "matrices",
    "topicTitle": "11. 一次聯立方程式與矩陣",
    "chapter": 11,
    "unitTitle": "空間向量與矩陣",
    "desc": "對應統測數學(C)大綱「十一、一次聯立方程式與矩陣」：三元一次方程組的消去法、增廣矩陣與列運算（高斯消去法）、矩陣的加減、係數積、乘法與二階反方陣，以及用反方陣解方程組。111–115 年統測共 10 題，是出題最密集的單元之一。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "linear-programming",
    "topicTitle": "12. 二元一次不等式與線性規劃",
    "chapter": 12,
    "unitTitle": "線性規劃與二次曲線",
    "desc": "對應統測數學(C)大綱「十二、二元一次不等式與線性規劃」：二元一次不等式的圖形（半平面）、聯立不等式的可行解區域、由圖形寫出不等式組，以及用頂點法求目標函數的最大值、最小值與範圍。111–115 年統測共 5 題，常結合資料分類、生產規劃等情境。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "geometry",
    "topicTitle": "13. 二次曲線",
    "chapter": 13,
    "unitTitle": "線性規劃與二次曲線",
    "desc": "對應統測數學(C)大綱「十三、二次曲線」：拋物線、橢圓、雙曲線的幾何定義、標準式、焦點、頂點、正焦弦與漸近線，以及配方平移後的判讀。111–115 年統測共 5 題，常以牛繩、裝飾品、雷射反射等情境呈現。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "calculus",
    "topicTitle": "14. 微分",
    "chapter": 14,
    "unitTitle": "微積分",
    "desc": "對應統測數學(C)大綱「十四、微分」：函數的極限與連續、導數的定義與幾何意義（切線斜率）、多項式函數的導函數與微分公式，以及微分在切線、遞增遞減、極值與最佳化問題上的應用。111–115 年統測共 10 題，是分數占比最高的單元之一。"
  },
  {
    "subjectSlug": "math-c",
    "subjectTitle": "數學 C",
    "topicSlug": "integration",
    "topicTitle": "15. 積分",
    "chapter": 15,
    "unitTitle": "微積分",
    "desc": "對應統測數學(C)大綱「十五、積分」：數列的極限與無窮等比級數、以分割逼近面積的積分概念、多項式函數的不定積分與定積分（微積分基本定理），以及積分在面積、位移與距離上的應用。111–115 年統測共 10 題。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "mechanics-motion",
    "topicTitle": "1. 力學與運動",
    "chapter": 1,
    "unitTitle": "力學與能量",
    "desc": "建築運動學基礎、牛頓三大運動定律、靜力平衡條件、斜面摩擦、桁架與樑構件內力及高空落體防護。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "work-energy",
    "topicTitle": "2. 功與能量",
    "chapter": 2,
    "unitTitle": "力學與能量",
    "desc": "功與功率、動能與重力位能、能量守恆定律、綠建築熱功當量、水泵/風機定律與蓄能技術。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "thermodynamics",
    "topicTitle": "3. 熱學與建築熱環境",
    "chapter": 3,
    "unitTitle": "熱學",
    "desc": "熱傳導/對流/輻射、外牆熱傳透率 U 值與熱阻 R 值、顯熱與潛熱、焓濕圖與冰水主機 COP 性能係數。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "waves-acoustics",
    "topicTitle": "4. 波動與建築聲學",
    "chapter": 4,
    "unitTitle": "波動、聲學與光學",
    "desc": "波動物理、聲速與聲壓級 dB(A)、賽賓殘響時間 RT60、隔音等級 STC、樓板衝擊音與交通噪音衰減。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "optics",
    "topicTitle": "5. 光學與建築照明設計",
    "chapter": 5,
    "unitTitle": "波動、聲學與光學",
    "desc": "光的折射與反射、照度距離平方反比定律、利用係數法燈具規劃、採光係數 DF 與防眩光 UGR。"
  },
  {
    "subjectSlug": "physics",
    "subjectTitle": "物理",
    "topicSlug": "electricity",
    "topicTitle": "6. 電學基礎與建築配電系統",
    "chapter": 6,
    "unitTitle": "電學",
    "desc": "歐姆定律、電功率與焦耳熱、交流電功率因數 cos φ、無熔絲開關 NFB、三相配電與接地保護。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "matter-composition",
    "topicTitle": "1. 物質的組成與分類",
    "chapter": 1,
    "unitTitle": "物質與化學反應",
    "desc": "純物質與混合物、原子結構與化學鍵結、塗料/樹脂高分子化學分類、VOCs 揮發機制與光觸媒空氣淨化。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "chemical-reactions",
    "topicTitle": "2. 化學反應與混凝土水化化學",
    "chapter": 2,
    "unitTitle": "物質與化學反應",
    "desc": "化學反應式平衡、莫耳數與化學計量、波特蘭水泥水化反應 (Concrete Hydration)、波左蘭反應與絕熱溫升。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "acids-bases-salts",
    "topicTitle": "3. 酸鹼化學與混凝土中性化",
    "chapter": 3,
    "unitTitle": "酸鹼與氧化還原",
    "desc": "酸鹼理論與 pH 值計算、混凝土碳化/中性化機制、酸雨石材腐蝕、硫酸鹽侵蝕與鋼筋鈍化膜。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "redox",
    "topicTitle": "4. 氧化還原與金屬腐蝕防蝕",
    "chapter": 4,
    "unitTitle": "酸鹼與氧化還原",
    "desc": "氧化數與電化學反應、鋼筋濕腐蝕化學機制、犧牲陽極防蝕、熱浸鍍鋅與電化學脫鹽 ECE 技術。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "organic-chemistry",
    "topicTitle": "5. 有機化學與建築高分子樹脂塗料",
    "chapter": 5,
    "unitTitle": "有機與環境化學",
    "desc": "有機化合物分類、高分子樹脂 (Epoxy, PU, Acrylic, Silicone) 化學、VOCs 逸散與高分子光降解/水解老化。"
  },
  {
    "subjectSlug": "chemistry",
    "subjectTitle": "化學",
    "topicSlug": "environmental-chemistry",
    "topicTitle": "6. 環境化學與建材碳足跡",
    "chapter": 6,
    "unitTitle": "有機與環境化學",
    "desc": "大氣與水體環境化學、溫室效應、建材碳足跡 LCA、固碳混凝土、低碳水泥與室內空氣品質 IAQ。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "taiwan-history",
    "topicTitle": "1. 台灣史：建築環境演變與本土樣式",
    "chapter": 1,
    "unitTitle": "台灣與中國",
    "desc": "深入探索台灣歷史發展脈絡、南島語族聚落、荷西明鄭堡壘、清領漢人傳統合院與寺廟、日治近代西洋歷史式樣與市區改正，以及戰後地域現代主義轉型。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "chinese-history",
    "topicTitle": "2. 中國史：古代建築形制、工藝與《營造法式》",
    "chapter": 2,
    "unitTitle": "台灣與中國",
    "desc": "詳細剖析中國古代建築發展脈絡，從先秦夯土高台、唐代大木作氣魄、北宋《營造法式》材分制模組化，到明清紫禁城宮殿禮制與江南文人園林造景哲學。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "world-history",
    "topicTitle": "3. 西洋史：從古典、哥德、文藝復興到現代主義與當代建築",
    "chapter": 3,
    "unitTitle": "世界與建築思潮",
    "desc": "縱覽西洋建築史發展脈絡，從古希臘羅馬柱式與拱券突破、中世紀哥德飛扶壁與光影神聖空間、文藝復興人文主義理性、巴洛克動態戲劇張力、十九世紀工業革命新材料，到現代主義四位大師與當代數位參數化建築。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "architectural-history",
    "topicTitle": "4. 建築思潮與歷史理論演變",
    "chapter": 4,
    "unitTitle": "世界與建築思潮",
    "desc": "深入剖析歷史主義與復古思潮、機能主義「形隨機能」、有機建築與自然融和、結構主義與解構主義哲學，以及當代批判地域主義與現象學場所精神。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "cultural-heritage",
    "topicTitle": "5. 文化資產保存與古蹟修復工程",
    "chapter": 5,
    "unitTitle": "文化資產與社會變遷",
    "desc": "深入研析文化資產保存法規體系、《威尼斯憲章》國際保存原則、古蹟調查研究與非破壞檢測、傳統木構與磚石修復工法、舊建築再利用以及古蹟防災加固工程。"
  },
  {
    "subjectSlug": "history",
    "subjectTitle": "歷史",
    "topicSlug": "social-change",
    "topicTitle": "6. 社會變遷與都市形貌變革",
    "chapter": 6,
    "unitTitle": "文化資產與社會變遷",
    "desc": "探討工業革命與都市化潮、19世紀巴黎奧斯曼大改造、霍華德花園城市運動、台灣日治市區改正至戰後都市更新、權利變換、社區權益以及高齡化與智慧韌性都市。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理",
    "topicSlug": "environment-terrain",
    "topicTitle": "1. 地理環境與地形建築選址",
    "chapter": 1,
    "unitTitle": "自然環境",
    "desc": "探討內外營力地形、順向坡、土壤液化、斷層退縮、喀斯特溶洞及山坡地開發之地質評估與建築安全選址策略。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理",
    "topicSlug": "climate-environment",
    "topicTitle": "2. 氣候環境與氣候應答建築",
    "chapter": 2,
    "unitTitle": "自然環境",
    "desc": "分析氣候要素與控制因子、被動式太陽能、遮陽深寬比、微氣候通風、都市熱島減熱與太陽軌跡遮陽幾何。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理",
    "topicSlug": "population-urban",
    "topicTitle": "3. 人口結構與都市空間結構",
    "chapter": 3,
    "unitTitle": "人口、都市與區域",
    "desc": "探討人口轉型、高齡化通用設計、中心地方理論、都市內部空間結構模型、TOD 大眾運輸導向開發與土地競價理論。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理",
    "topicSlug": "regional-development",
    "topicTitle": "4. 區域發展與產業區位選址",
    "chapter": 4,
    "unitTitle": "人口、都市與區域",
    "desc": "分析韋伯工業區位理論、區位商數 LQ、成長極理論、生態工業園區與半導體科技廊帶選址。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理",
    "topicSlug": "environmental-issues",
    "topicTitle": "5. 環境議題與災害防救工程",
    "chapter": 5,
    "unitTitle": "環境議題與 GIS",
    "desc": "探討全球氣候變遷、淹水高程計算、土石流防災退縮、土壤液化防護、海綿城市 LID 與環境影響評估 EIA。"
  },
  {
    "subjectSlug": "geography",
    "subjectTitle": "地理",
    "topicSlug": "gis",
    "topicTitle": "6. 地理資訊系統與空間分析",
    "chapter": 6,
    "unitTitle": "環境議題與 GIS",
    "desc": "介紹向量/網格/BIM 整合、疊圖與環域選址演算、視域與日照權分析、網路路徑、IDW/Kriging 內插與數位雙生 3D GIS。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "citizenship-community",
    "topicTitle": "1. 公民身分與社群",
    "chapter": 1,
    "unitTitle": "公民身分與法律",
    "desc": "探討公民權利發展、社群結構、社區營造、都市計畫公聽會與公民參與機制在建築空間中的實踐。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "law-life",
    "topicTitle": "2. 建築法規與公民生活空間",
    "chapter": 2,
    "unitTitle": "公民身分與法律",
    "desc": "深入解析《建築法》、《都市計畫法》、《區域計畫法》與《國土計畫法》法律體系，掌握建蔽率與容積率管制計算、無障礙避難規範、日照權防護及《公寓大廈管理條例》。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "economy-sustainability",
    "topicTitle": "3. 經濟發展與永續建築環境",
    "chapter": 3,
    "unitTitle": "經濟與多元社會",
    "desc": "探討綠建築 EEWH 九大指標評估體系、循環經濟與綠色建材、歐盟 CBAM 碳邊境調整與建築碳足跡、ESG 企業永續與不動產經濟。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "society-culture",
    "topicTitle": "4. 多元社會與包容性空間設計",
    "chapter": 4,
    "unitTitle": "經濟與多元社會",
    "desc": "探討高齡少子化社會空間調適、通用設計七大原則、多元族群文化空間、性別平權空間友善及社會住宅包容性設計。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "labor-ethics",
    "topicTitle": "5. 勞工權益與建築職業倫理",
    "chapter": 5,
    "unitTitle": "職業倫理與環境政策",
    "desc": "深入剖析《職業安全衛生法》工地安全防護、建築師與營造業職業道德規範、《勞動基準法》營建勞工權益、工程採購倫理與反弊端。"
  },
  {
    "subjectSlug": "civics",
    "subjectTitle": "公民與社會",
    "topicSlug": "environment-policy",
    "topicTitle": "6. 環境政策與氣候變遷因應",
    "chapter": 6,
    "unitTitle": "職業倫理與環境政策",
    "desc": "探討《氣候變遷因應法》2050 淨零排放路徑、《環境影響評估法》公民參與、國土韌性防災、都市熱島減緩與水資源循環。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "construction-methods",
    "topicTitle": "1. 營造工法與建築構造細部",
    "chapter": 1,
    "unitTitle": "部定專業與營建實習基礎",
    "desc": "詳細剖析鋼筋混凝土 (RC)、鋼骨 (SC) 與鋼骨鋼筋混凝土 (SRC) 構造體系比較，開挖與基礎工法、軀體防水隔熱、門窗帷幕牆細部與裝配式預製工法。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "spatial-design",
    "topicTitle": "2. 空間設計與觀察",
    "chapter": 2,
    "unitTitle": "部定專業與營建實習基礎",
    "desc": "人體工學與空間尺度、空間機能與動線規劃、基地微氣候觀察分析、無障礙通用設計規範與空間型態學。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "cad-bim",
    "topicTitle": "3. 電腦輔助設計與 BIM 應用",
    "chapter": 3,
    "unitTitle": "基本與專業製圖技能領域",
    "desc": "掌握 AutoCAD 2D 製圖圖層與 CNS 標準、Revit BIM 建築資訊模型建立、3D 視覺化渲染、BIM 4D/5D 專案管理與參數化設計。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "parametric-design-and-ai-assisted-competition",
    "topicTitle": "4. 參數化設計與 AI 輔助競圖",
    "chapter": 4,
    "unitTitle": "基本與專業製圖技能領域",
    "desc": "掌握 Rhino / Grasshopper 演算法幾何生成、BIM 參數化族群、多目標空間最佳化與 AI 輔助建築競圖之全流程工作坊。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "portfolio-models",
    "topicTitle": "5. 作品集製作與模型表達",
    "chapter": 5,
    "unitTitle": "高三專題、作品集與證照升學",
    "desc": "作品集視覺排版與敘事邏輯、建築實體模型製作技巧與材料運用、圖表 Diagramming 視覺表達、透視圖攝影與簡報評圖術。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "portfolio-and-design-discourse",
    "topicTitle": "6. 作品集建構與設計論述",
    "chapter": 6,
    "unitTitle": "高三專題、作品集與證照升學",
    "desc": "解析建築與室內設計作品集 (Portfolio) 編排邏輯、空間設計論述寫作、視覺階層傳達與競圖排版 SOP。"
  },
  {
    "subjectSlug": "extensions",
    "subjectTitle": "建築科延伸與作品集",
    "topicSlug": "certification",
    "topicTitle": "7. 建築科升學與證照檢定",
    "chapter": 7,
    "unitTitle": "高三專題、作品集與證照升學",
    "desc": "建築製圖應用丙/乙級檢定攻防、統測專一專二備考策略、科大/大學建築系選填與面試作品集輔導、建築師國考與技師職涯規劃。"
  }
] as const;
