import { SubjectData } from '../types';

export const chemistryData: SubjectData = {
  "slug": "chemistry",
  "title": "🧪 化學",
  "category": "自然科學",
  "color": "indigo-600",
  "topics": [
    {
      "slug": "matter-composition",
      "title": "1. 📚 物質的組成與分類",
      "desc": "純物質與混合物、原子結構與化學鍵結、塗料/樹脂高分子化學分類、VOCs 揮發機制與光觸媒空氣淨化。",
      "status": "done",
      "gradeLevel": 10,
      "curriculumCode": "108-CAa",
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】塗料高分子與 **<span className=\"text-rose-600 font-bold\">VOCs</span>** 揮發機制：某水性乳膠漆標示總**<span className=\"text-indigo-600 font-bold\">揮發性有機化合物</span>** (**<span className=\"text-indigo-600 font-bold\">TVOC</span>**) 含量為 20 g/L。若一室內牆面塗刷 50 公升該乳膠漆，求施工過程可能散發之最大 **<span className=\"text-indigo-600 font-bold\">TVOC</span>** 重量（克 g）為多少？",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：分析 **<span className='text-indigo-600 font-bold'>TVOC</span>** 單位定義。20 g/L 表示每公升塗料含 20 克 **<span className='text-rose-600 font-bold'>VOCs</span>**。",
            "步驟 2：列計算式。總 **<span className='text-rose-600 font-bold'>VOCs</span>** 重量 = 塗料體積 × 單位 **<span className='text-indigo-600 font-bold'>TVOC</span>** 含量 = 50 L × 20 g/L。",
            "步驟 3：計算解答。50 × 20 = 1000 g (或 1.0 kg)。"
          ],
          "answer": "最大散發 **<span className=\"text-indigo-600 font-bold\">TVOC</span>** 重量為 1000 公克 (1.0 kg)。",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "chemistry-context.webp",
        "chemistry-mechanism.webp",
        "chemistry-comparison.webp",
        "chemistry-step.webp",
        "chemistry-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "物質的分類與建築材料相態 (純物質與混合物)",
          "outlineRefs": ["CAb-V.2-2"],
          "body": "💡 **核心概念解析**：\n物質根據組成成分的均勻性與固定性可劃分為**<span className='text-rose-600 font-bold'>純物質</span>**與**<span className='text-rose-600 font-bold'>混合物</span>**。\n- **<span className='text-rose-600 font-bold'>純物質</span>** (Pure Substance)：具有固定的化學組成與特定物理常數 (如熔點、沸點、密度)。分為元素 (Element，如金屬鐵 Fe、銅 Cu) 與化合物 (Compound，如水 H₂O、二氧化矽 SiO₂)。\n- **<span className='text-rose-600 font-bold'>混合物</span>** (Mixture)：由兩種或兩種以上的**<span className='text-rose-600 font-bold'>純物質</span>**混合而成，成分比例可變。分為均相**<span className='text-rose-600 font-bold'>混合物</span>** (Homogeneous Mixture，如合金、鹽水) 與非均相**<span className='text-rose-600 font-bold'>混合物</span>** (Heterogeneous Mixture，如混凝土、乳化漆、泥水)。\n在建築工程中，大多數建材如混凝土、塗料、高分子防護劑皆屬於非均相高分子複合**<span className='text-rose-600 font-bold'>混合物</span>**。",
          "steps": [
            "🔹 **第一步**（成分確定）：判斷物質是否有單一固定化學式 (如 CaCO₃ 為**<span className='text-rose-600 font-bold'>純物質</span>**化合物)。",
            "🔹 **第二步**（相態分析）：混凝土由水泥石、砂石與水相混合，屬非均相懸浮膠體**<span className='text-rose-600 font-bold'>混合物</span>**。"
          ]
        },
        {
          "heading": "微觀原子結構與化學鍵結 (Atomic Structure & Chemical Bonding)",
          "outlineRefs": ["CAa-V.2-3", "CCb-V.2-3"],
          "body": "💡 **核心概念解析**：\n原子為化學元素的最小基元，由帶正電的原子核（質子與中子）以及核外帶負電的電子構成。\n- **<span className='text-rose-600 font-bold'>質量數</span>** (A) = **<span className='text-rose-600 font-bold'>質子數</span>** (Z) + **<span className='text-rose-600 font-bold'>中子數</span>** (N)。\n- 價電子與化學鍵：原子的最外層電子決定其化學性質。建築材料的物理強度與耐候性取決於內部的化學鍵結型態：\n  1. **<span className='text-rose-600 font-bold'>離子鍵</span>** (Ionic Bond)：如陶瓷、石灰石 (CaCO₃)，硬度高但具脆性。\n  2. **<span className='text-rose-600 font-bold'>共價鍵</span>** (Covalent Bond)：如金剛石、矽酸鹽礦物與高分子骨架，鍵結極強。\n  3. **<span className='text-rose-600 font-bold'>金屬鍵</span>** (Metallic Bond)：金屬自由電子形成金屬膠泥，賦予鋼材優異的延展性與導電性。\n\n⚠️ **統測陷阱**：考試常考「分子晶體」與「網狀共價晶體」的差別！冰塊是分子晶體（氫鍵），熔點低；石英(SiO₂)是網狀共價晶體，熔點極高。\n\n🔗 **跨領域連結**：與【物理：力學】連結，金屬鍵中的自由電子海，是鋼材具備「高延展性」能吸收地震能量（塑性變形）的微觀原因。",
          "formula": "$$\\text{質量數 } A = \\text{質子數 } Z + \\text{中子數 } N$$\\n$$E_{\\text{bond}}(\\text{共價鍵}) \\gg E_{\\text{bond}}(\\text{氫鍵}) > E_{\\text{bond}}(\\text{凡得瓦力})$$",
          "table": {
            "headers": ["鍵結類型", "組成粒子", "硬度", "熔沸點", "導電性 (固態/熔融態)"],
            "rows": [
              ["離子鍵", "陰陽離子", "高 (脆)", "高", "無 / 有"],
              ["共價鍵", "原子", "極高", "極高", "無 / 無 (除石墨)"],
              ["金屬鍵", "金屬陽離子+自由電子", "中至高 (延展性佳)", "中至高", "有 / 有"]
            ]
          }
        },
        {
          "heading": "塗料、樹脂高分子與揮發性有機化合物 (VOCs) 基礎",
          "outlineRefs": ["CMc-V.2-4"],
          "body": "💡 **核心概念解析**：\n塗料與樹脂 (Paints & Resins) 為建築裝修與結構防蝕的重要化學材料。\n- 塗料組成：主要由基料 (Binder/Resin)、溶劑 (Solvent)、顏填料 (Pigment & Extender) 及添加劑 (Additives) 四大部分組成。基料決定塗膜的物理及化學性質，溶劑則影響施工性與乾燥速度。\n- **<span className='text-rose-600 font-bold'>VOCs</span>** (Volatile Organic Compounds，**<span className='text-indigo-600 font-bold'>揮發性有機化合物</span>**)：指在常溫常壓下飽和蒸氣壓大於 133.32 Pa 的有機化合物 (如苯、甲苯、二甲苯、游離甲醛)。\n⚠️ **健康危害與實務考量**：\n塗料施工與固化過程中，溶劑的揮發是室內 **<span className='text-rose-600 font-bold'>VOCs</span>** 污染的主要來源。長期暴露於高濃度 **<span className='text-rose-600 font-bold'>VOCs</span>** 環境中可能引發「病態建築症候群」(SBS, Sick Building Syndrome)，造成頭痛、呼吸道刺激、甚至有致癌風險。因此，在室內裝修中，選擇水性塗料或低 **<span className='text-rose-600 font-bold'>VOC</span>** 綠建材，並配合施工後充分通風，是確保居住安全的關鍵。"
        },
        {
          "heading": "建築塗料與樹脂材料之化學分類比較",
          "outlineRefs": ["CMc-V.2-4"],
          "body": "💡 **核心概念解析**：\n比較常見建築塗料與樹脂基材的化學組成、溶劑類型、固化機制與環境揮發性 (**<span className='text-rose-600 font-bold'>VOCs</span>**)。",
          "table": {
            "headers": [
              "塗料/樹脂種類",
              "主要化學成分",
              "成膜/固化機制",
              "**<span className='text-rose-600 font-bold'>VOCs</span>** 排放位準",
              "建築主要用途"
            ],
            "rows": [
              [
                "溶劑型環氧樹脂 (Epoxy)",
                "雙酚 A 型環氧樹脂 + 聚胺固化劑 + 二甲苯溶劑",
                "交聯化學反應固化",
                "高 (高 **<span className='text-rose-600 font-bold'>VOCs</span>** 逸散)",
                "地坪漆、鋼構重防蝕塗層"
              ],
              [
                "無溶劑型環氧樹脂",
                "液態環氧樹脂 + 低粘度脂肪胺",
                "100% 固含量交聯固化",
                "極低 (~0 **<span className='text-rose-600 font-bold'>VOCs</span>**)",
                "無縫地坪、結構灌注膠"
              ],
              [
                "水性丙烯酸漆 (Acrylic)",
                "丙烯酸酯共聚物乳液 + 水",
                "水分蒸發後高分子粒子融合",
                "低 (低 **<span className='text-rose-600 font-bold'>VOCs</span>**)",
                "內外牆水性乳膠漆"
              ],
              [
                "聚氨酯漆 (PU Paint)",
                "異氰酸酯 (NCO) + 多多元醇 (OH)",
                "**<span className='text-rose-600 font-bold'>加成聚合</span>**與濕氣固化反應",
                "中至高 (需使用有機稀釋劑)",
                "木器漆、防水彈性單體塗膜"
              ],
              [
                "無機矽酸鹽塗料",
                "水玻璃 (K₂SiO₃/Na₂SiO₃) + 無機顏料",
                "與混凝土石灰基質發生矽化反應",
                "零 **<span className='text-rose-600 font-bold'>VOCs</span>**",
                "古蹟修復、高耐候無機外牆漆"
              ]
            ]
          }
        },
        {
          "heading": "綠色建材認證與 VOC 逸散控制化學",
          "outlineRefs": ["CMe-V.2-2"],
          "body": "💡 **核心概念解析**：\n為保障室內空氣品質 (IAQ) 與健康居住環境，現代建築法規對建材的 **<span className='text-indigo-600 font-bold'>TVOC</span>** (總**<span className='text-indigo-600 font-bold'>揮發性有機化合物</span>**) 與甲醛逸散率有嚴格限制。\n- 測試標準：常採用氣候箱法 (Chamber Method，CNS 16000 / ISO 16000)，測量塗料塗刷後 28 天內的揮發量，確保建材在實際使用環境下的逸散濃度符合安全規範。\n- 低 VOC 化學技術：\n  1. **水性化 (Waterborne)**：利用水取代大部分有機溶劑，大幅降低施工與乾燥過程的有害揮發物。\n  2. **無溶劑高固含量 (High Solids)**：提高樹脂含量，減少揮發性溶劑比例，適用於重防腐與工業地坪。\n  3. **無機矽酸鹽化學**：完全無有機溶劑，利用化學矽化反應與基底結合，達到零 **<span className='text-rose-600 font-bold'>VOCs</span>** 的環保標準。\n🛠️ **工程實務應用**：\n在選擇「健康綠建材」時，不僅要關注產品包裝上的標章，還需確認其 **<span className='text-indigo-600 font-bold'>TVOC</span>** 與甲醛逸散率檢測報告，避免多種建材在密閉空間中產生「疊加效應」而導致總濃度超標。"
        },
        {
          "heading": "奈米二氧化鈦 (TiO₂) 光觸媒催化空氣淨化與自潔化學",
          "outlineRefs": ["CMc-V.2-7"],
          "body": "💡 **核心概念解析**：\n奈米級銳鈦礦型**<span className='text-rose-600 font-bold'>二氧化鈦</span>** (TiO₂) 在波長 < 387 nm 的近紫外光照射下，電子由價帶躍遷至導帶形成電子-電洞對 (e⁻/h⁺)。電洞水解生成具有強氧化性的羥基自由基 (·OH)，能將空氣中的**<span className='text-indigo-600 font-bold'>甲醛 (HCHO)</span>** 與苯系物降解為二氧化碳與水，同能賦予塗膜超親水性 (Super-hydrophilicity) 達成雨水自潔效應。",
          "formula": "$$TiO_2 + h\\nu (\\text{UV}) \\longrightarrow e^- + h^+$$\\n$$h^+ + H_2O \\longrightarrow \\cdot OH + H^+$$\\n$$HCHO + 4\\cdot OH \\longrightarrow CO_2 + 3H_2O$$",
          "steps": [
            "🔹 **第一步**（光子吸收）：紫外光光子激發奈米 TiO₂ 電子躍遷。",
            "🔹 **第二步**（自由基生成）：電洞氧化吸附的水分子產生超強氧化劑 ·OH 自由基。",
            "🔹 **第三步**（污染物礦化）：·OH 自由基無差別氧化有機 **<span className='text-rose-600 font-bold'>VOCs</span>**，最終產物為無毒的 CO₂ 與 H₂O。"
          ]
        },
        {
          "heading": "氣體擴散與室內 TVOC 濃度隨時間衰減一階動力學模型",
          "outlineRefs": ["CJe-V.2-1"],
          "body": "💡 **核心概念解析**：\n建築塗料施工後，室內 **<span className='text-indigo-600 font-bold'>TVOC</span>** 氣體濃度遵循**<span className='text-rose-600 font-bold'>一階衰減動力學</span>** (First-Order Decay Kinetics)。濃度衰減速率取決於塗料化學成分揮發常數 k 與建築通風換氣率 (ACH, Air Changes per Hour)。",
          "formula": "$$C(t) = C_0 \\cdot e^{-(k + \\text{ACH})\\cdot t}$$",
          "table": {
            "headers": [
              "建材與塗料類別",
              "主要 **<span className='text-indigo-600 font-bold'>TVOC</span>** 化學逸散源",
              "初始揮發常數 k (h⁻¹)",
              "建議安全封閉通風天數"
            ],
            "rows": [
              [
                "傳統油性硝基漆 (NC)",
                "乙酸乙酯、二甲苯、酮類",
                "0.15 - 0.25",
                "14 - 28 天 (需強制機械抽風)"
              ],
              [
                "水性丙烯酸乳膠漆",
                "微量成膜助劑 (醇醚類)",
                "0.03 - 0.05",
                "3 - 7 天"
              ],
              [
                "綠建材認證低 VOC 漆",
                "水性極低揮發高分子",
                "< 0.01",
                "1 - 2 天即可入住"
              ]
            ]
          }
        },
        {
          "heading": "原子結構、電子排列與元素週期表 (Atomic Structure & Periodic Table)",
          "outlineRefs": ["CAa-V.2-3", "CAa-V.2-4", "CAa-V.2-5", "CAa-V.2-6"],
          "body": "**原子結構**：原子由原子核（質子 + 中子）與核外電子組成。原子序 = 質子數；質量數 = 質子數 + 中子數。質子數相同而中子數不同者互為**同位素**，如碳-12 與碳-14。\n**電子排列**：電子依殼層 K、L、M、N… 由內向外排列，第 n 層最多容納 2n² 個電子（2、8、18…）。最外層電子稱**價電子**，決定元素的化學性質。\n**元素週期表**：依原子序排列。\n• 同族（直行）：價電子數相同，化學性質相似。第 1 族鹼金屬很活潑；第 17 族鹵素易得電子；第 18 族惰性氣體最外層填滿，非常穩定。\n• 同週期（橫列）：由左而右金屬性減弱、非金屬性增強。\n**建築常見元素**：Ca（石灰、水泥）、Si（石英、玻璃）、Fe（鋼）、Al（鋁窗）、O（氧化物與水）。\n⚠️ 易錯：週期表的「週期」數等於電子殼層數，「族」數（主族）與價電子數有關；不要把兩者弄反。",
          "table": {
            "headers": ["元素", "原子序", "電子排列", "族", "建築材料中的角色"],
            "rows": [
              ["氧 O", "8", "2, 6", "16", "氧化物、水、空氣"],
              ["鈉 Na", "11", "2, 8, 1", "1", "海砂中的 NaCl"],
              ["鋁 Al", "13", "2, 8, 3", "13", "鋁門窗、帷幕框"],
              ["矽 Si", "14", "2, 8, 4", "14", "石英砂、玻璃、水泥熟料"],
              ["鈣 Ca", "20", "2, 8, 8, 2", "2", "石灰石、水泥、石膏"]
            ]
          }
        },
        {
          "heading": "物質的三相圖與分離、鑑定方法 (Phase Diagram & Separation)",
          "outlineRefs": ["CAb-V.2-1", "CCa-V.2-1"],
          "body": "**三相圖**：以壓力為縱軸、溫度為橫軸，三條曲線把平面分成固、液、氣三個區域。**三相點**是固、液、氣三相共存的溫度與壓力；**臨界點**以上無法區分液、氣，稱超臨界流體。\n**水的特殊性**：水的固液平衡線斜率為負，加壓會使冰熔化；冰的密度比水小，結冰時體積約膨脹 9%，這就是水管凍裂與混凝土**凍融破壞**的原因。\n**物質的分離**：過濾（分離不溶固體）、蒸發與結晶（取出溶解的固體）、蒸餾（分離沸點不同的液體，如石油分餾）、萃取、層析、傾析、磁選。\n**物質的鑑定**：熔點、沸點、密度等物理性質，或以焰色反應（Na 黃色、K 紫色、Ca 磚紅色、Cu 藍綠色）、指示劑等化學方法判斷。\n⚠️ 易錯：純物質有固定的熔點與沸點，混合物則在一個溫度範圍內熔化或沸騰，可用來判斷純度。",
          "table": {
            "headers": ["分離方法", "依據的性質差異", "例子"],
            "rows": [
              ["過濾", "顆粒大小（溶解與否）", "分離泥沙與水"],
              ["蒸發、結晶", "溶質不揮發", "海水曬鹽"],
              ["蒸餾", "沸點不同", "石油分餾、製造蒸餾水"],
              ["層析", "在固定相上移動速率不同", "分離色素"],
              ["磁選", "磁性", "自廢料中分離鐵屑"]
            ]
          }
        },
        {
          "heading": "化學式與分子模型：實驗式、分子式、結構式 (Chemical Formulas & Molecular Models)",
          "outlineRefs": ["CCb-V.2-1", "CCb-V.2-3", "CCb-V.2-4"],
          "body": "**化學式種類**：\n• 實驗式（簡式）：各原子的最簡整數比，如葡萄糖的實驗式為 CH₂O。\n• 分子式：分子中各原子的實際數目，如葡萄糖 C₆H₁₂O₆。\n• 結構式：表示原子間的鍵結方式。\n• 示性式：突顯官能基，如乙醇 C₂H₅OH。\n**分子模型**：球棒模型能看出鍵角與鍵結方向；填充模型能看出原子的相對大小與分子外形。\n**分子形狀**：甲烷 CH₄ 為正四面體（鍵角約 109.5°）、水 H₂O 為角形（約 104.5°）、二氧化碳 CO₂ 為直線形、氨 NH₃ 為角錐形。\n**建築材料的化學式**：石英 SiO₂、方解石（石灰石）CaCO₃、石膏 CaSO₄·2H₂O、熟石灰 Ca(OH)₂、生石灰 CaO。離子化合物與網狀固體（如 NaCl、SiO₂）沒有獨立分子，只能寫實驗式。\n⚠️ 易錯：SiO₂ 不代表「一個分子含 1 個 Si 和 2 個 O」，而是網狀固體中 Si 與 O 的原子數比為 1 : 2。",
          "table": {
            "headers": ["物質", "實驗式", "分子式", "分子形狀或結構"],
            "rows": [
              ["甲烷", "CH₄", "CH₄", "正四面體"],
              ["水", "H₂O", "H₂O", "角形"],
              ["葡萄糖", "CH₂O", "C₆H₁₂O₆", "環狀結構"],
              ["二氧化矽（石英）", "SiO₂", "無獨立分子", "三維網狀共價固體"]
            ]
          }
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "下列何者屬於**<span className='text-rose-600 font-bold'>純物質</span>**？\n(A) 鹽水\n(B) 空氣\n(C) 蒸餾水\n(D) 水性漆 (包含樹脂、顏料與水)",
          "steps": [
            "分析各選項的化學成分組成。",
            "鹽水為氯化鈉溶於水，屬均相**<span className='text-rose-600 font-bold'>混合物</span>**。",
            "空氣包含氮氣、氧氣、氬氣與二氧化碳等多種氣體，屬**<span className='text-rose-600 font-bold'>混合物</span>**。",
            "水性漆含有高分子樹脂乳液、顏料、助劑與水，屬於多相懸浮**<span className='text-rose-600 font-bold'>混合物</span>**。",
            "蒸餾水化學式為固定之 H₂O，由氫與氧結合而成之化合物，屬於**<span className='text-rose-600 font-bold'>純物質</span>**。"
          ],
          "answer": "(C) 蒸餾水",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "某建材所含鋼筋組件化學元素分析顯示：鐵原子核內含有 26 個質子與 30 個中子。(1) 該鐵原子的原子序 Z 與**<span className='text-rose-600 font-bold'>質量數</span>** A 分別為何？ (2) 鐵金屬原子之間主要依靠何種化學鍵結合，因而具備優良延展性？",
          "steps": [
            "原子序 Z 等於**<span className='text-rose-600 font-bold'>質子數</span>**，故 Z = 26 (代表第 26 號元素 鐵 Fe)。",
            "**<span className='text-rose-600 font-bold'>質量數</span>** A = **<span className='text-rose-600 font-bold'>質子數</span>** Z + **<span className='text-rose-600 font-bold'>中子數</span>** N = 26 + 30 = 56。",
            "鐵金屬內部金屬原子釋放出價電子形成自由電子海 (Sea of Electrons)，與金屬陽離子間形成「**<span className='text-rose-600 font-bold'>金屬鍵</span>** (Metallic Bond)」，賦予鋼材高強度與延展性。"
          ],
          "answer": "(1) 原子序 Z = 26，**<span className='text-rose-600 font-bold'>質量數</span>** A = 56；(2) 主要依靠「**<span className='text-rose-600 font-bold'>金屬鍵</span>**」結合",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "某室內塗料樣品含 45% 丙烯酸樹脂、40% 水及 15% 揮發性有機溶劑（以甲苯 C7H8 計）。若於封閉 50 m³ 房間內刷塗 2 kg 此塗料，且溶劑完全揮發至空氣中。已知甲苯分子量為 92 g/mol，在 25°C、1 atm 下氣體莫耳體積為 24.5 L/mol。求：(1) 完全揮發後房間內甲苯的揮發質量 (g)；(2) 空氣中甲苯的體積濃度 (ppmv)。",
          "steps": [
            "計算塗料中甲苯的揮發質量：塗料總重 = 2 kg = 2000 g。甲苯質量 = 2000 g × 15% = 300 g。",
            "計算甲苯**<span className='text-rose-600 font-bold'>莫耳數</span>**：n = 300 g / 92 g/mol ≈ 3.261 mol。",
            "計算甲苯於 25°C、1 atm 下的氣體體積：V_toluene = 3.261 mol × 24.5 L/mol ≈ 79.89 L = 0.07989 m³。",
            "計算體積 ppm 濃度：ppmv = (氣體體積 / 總空間體積) × 10⁶ = (0.07989 m³ / 50 m³) × 10⁶ = 1,597.8 ppmv ≈ 1598 ppmv。"
          ],
          "answer": "(1) 甲苯質量 = 300 g；(2) 體積濃度 ≈ 1598 ppmv (遠超過室內安全標準，需強制通風)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一面積 30 m² 的牆面塗佈奈米**<span className='text-rose-600 font-bold'>光觸媒</span>** TiO₂ 塗層。若**<span className='text-rose-600 font-bold'>光觸媒</span>**受紫外光照射後，每小時可催化分解 0.005 mol 的游離甲醛 (HCHO，莫耳質量 30 g/mol)。完全反應化學式為：HCHO + O₂ → CO₂ + H₂O。(1) 運轉 10 小時可分解多少公克甲醛？ (2) 反應將生成多少 L 的 CO₂ 氣體 (25°C, 1 atm 下每莫耳 24.5 L)？",
          "steps": [
            "計算 10 小時內分解的甲醛總**<span className='text-rose-600 font-bold'>莫耳數</span>**：n = 0.005 mol/h × 10 h = 0.05 mol。",
            "計算分解甲醛質量 m = 0.05 mol × 30 g/mol = 1.50 克。",
            "根據反應式係數比 1:1，1 mol HCHO 生成 1 mol CO₂，故生成 CO₂ **<span className='text-rose-600 font-bold'>莫耳數</span>** n(CO₂) = 0.05 mol。",
            "計算生成 CO₂ 氣體體積 V = 0.05 mol × 24.5 L/mol = 1.225 L。"
          ],
          "answer": "(1) 分解甲醛 1.50 克；(2) 生成 1.225 L 二氧化碳",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一間 100 m³ 之剛裝修辦公室，剛刷完漆時測得 **<span className='text-indigo-600 font-bold'>TVOC</span>** 初始濃度 C₀ = 8.0 mg/m³。若開啟機械通風換氣系統，使換氣率 ACH = 1.5 h⁻¹ (即每小時換氣 1.5 次)。假設塗料氣體揮發常數 k = 0.05 h⁻¹。利用一階衰減公式 C(t) = C₀ · e^(-(k+ACH)t)，求：(1) 通風運轉 2 小時後，室內 **<span className='text-indigo-600 font-bold'>TVOC</span>** 濃度降低為多少 mg/m³？ (2) 室內 **<span className='text-indigo-600 font-bold'>TVOC</span>** 濃度若要降至綠建築健康標準 0.6 mg/m³ 以下，需持續通風約幾小時？(ln(0.075) ≈ -2.59)",
          "steps": [
            "總衰減常數 K_total = k + ACH = 0.05 + 1.5 = 1.55 h⁻¹。",
            "計算 2 小時後濃度：C(2) = 8.0 × e^(-1.55 × 2) = 8.0 × e^(-3.10)。",
            "因為 e^(-3.10) ≈ 0.04505，故 C(2) = 8.0 × 0.04505 ≈ 0.36 mg/m³。",
            "計算降至 0.6 mg/m³ 所需時間 t：0.6 = 8.0 × e^(-1.55 · t) => e^(-1.55 · t) = 0.6 / 8.0 = 0.075。",
            "兩邊取對數：-1.55 · t = ln(0.075) ≈ -2.59 => t = 2.59 / 1.55 ≈ 1.67 小時。"
          ],
          "answer": "(1) 通風 2 小時後降至約 0.36 mg/m³；(2) 約需持續通風 1.67 小時 (約 100 分鐘) 即可達標",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "某實驗室採用氣候箱法 (CNS 16000) 測試一塊 1 m² 建築夾板的甲醛逸散率。氣候箱體積 1 m³，換氣率 1.0 h⁻¹。測試 28 天後箱內甲醛穩定濃度為 0.05 mg/m³。(1) 求該夾板樣品的甲醛單位面積逸散率 SER (mg/m²·h)；(2) 對照綠建材等級規範（E1 級 SER ≤ 0.08 mg/m²·h，E0 級 SER ≤ 0.005 mg/m²·h），該夾板屬於哪一等級？",
          "steps": [
            "氣候箱穩定狀態下，逸散率公式 SER = (C_steady × V_chamber × ACH) / A_sample。",
            "代入數值：SER = (0.05 mg/m³ × 1 m³ × 1.0 h⁻¹) / 1 m² = 0.05 mg/m²·h。",
            "比對等級：因為 0.05 mg/m²·h ≤ 0.08 mg/m²·h 且 > 0.005 mg/m²·h，故符合 E1 級綠建材標準。"
          ],
          "answer": "(1) 甲醛逸散率 SER = 0.05 mg/m²·h；(2) 符合 E1 級健康綠建材標準",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "下列何者屬於**<span className='text-rose-600 font-bold'>純物質</span>**？\n(A) 鹽水\n(B) 空氣\n(C) 蒸餾水\n(D) 水性漆 (包含樹脂、顏料與水)",
        "steps": [
          "分析各選項的化學成分組成。",
          "鹽水為氯化鈉溶於水，屬均相**<span className='text-rose-600 font-bold'>混合物</span>**。",
          "空氣包含氮氣、氧氣、氬氣與二氧化碳等多種氣體，屬**<span className='text-rose-600 font-bold'>混合物</span>**。",
          "水性漆含有高分子樹脂乳液、顏料、助劑與水，屬於多相懸浮**<span className='text-rose-600 font-bold'>混合物</span>**。",
          "蒸餾水化學式為固定之 H₂O，由氫與氧結合而成之化合物，屬於**<span className='text-rose-600 font-bold'>純物質</span>**。"
        ],
        "answer": "(C) 蒸餾水"
      },
      "step0Prerequisites": [
        "基本化學元素符號",
        "莫耳數與化學計量"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "化學反應式未平衡即進行莫耳數計算。",
          "correctThinking": "計算前必先平衡方程式係數。",
          "trapDescription": "化學計量係數遺漏。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "化學反應本質推理模型",
          "explanation": "由原子核外電子轉移或共享推論反應路徑。"
        }
      ]
    },
    {
      "slug": "chemical-reactions",
      "title": "2. 🔍 化學反應與混凝土水化化學",
      "desc": "化學反應式平衡、莫耳數與化學計量、波特蘭水泥水化反應 (Concrete Hydration)、波左蘭反應與絕熱溫升。",
      "status": "done",
      "gradeLevel": 10,
      "curriculumCode": "108-CJa",
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】石灰石鍛燒熱化學反應：煅燒石灰石反應 CaCO3(s) → CaO(s) + CO2(g)，其反應熱 ∆H = +178 kJ/mol。若製造 56 公斤生石灰 (CaO, 分子量 56)，需吸收多少千焦耳 (kJ) 的熱量？",
          "difficulty": "中等",
          "steps": [
            "步驟 1：計算 CaO **<span className='text-rose-600 font-bold'>莫耳數</span>**。56 kg = 56,000 g。n = 56,000 g / 56 g/mol = 1000 mol。",
            "步驟 2：列熱化學計算。每生成 1 mol CaO 需吸收 178 kJ。",
            "步驟 3：求總吸熱量。Q = 1000 mol × 178 kJ/mol = 178,000 kJ (178 MJ)。"
          ],
          "answer": "需吸收 178,000 kJ (178 MJ) 的熱量。",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "chemistry-context.webp",
        "chemistry-mechanism.webp",
        "chemistry-comparison.webp",
        "chemistry-step.webp",
        "chemistry-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "化學反應平衡與質量守恆定律",
          "outlineRefs": ["CAa-V.2-1", "CJa-V.2-1"],
          "body": "💡 **核心概念解析**：\n化學反應遵守**<span className='text-rose-600 font-bold'>質量守恆定律</span>** (Law of Conservation of Mass)，即反應前反應物的原子種類與總個數，必須等於反應後生成物的原子種類與總個數。\n平衡化學反應式時，需調整反應物與生成物化學式前的最簡整數係數。化學反應式的係數代表化學反應中各粒子間的「**<span className='text-rose-600 font-bold'>莫耳數</span>**比」，而非質量比。"
        },
        {
          "heading": "莫耳與化學計量計算 (Stoichiometry)",
          "outlineRefs": ["CAa-V.2-2", "CJa-V.2-2"],
          "body": "💡 **核心概念解析**：\n莫耳 (Mole, mol) 是化學計量巨量物質與微觀粒子的橋樑。1 莫耳包含 6.02 × 10²³ 個粒子 (亞佛加厥常數 NA)。\n- **<span className='text-rose-600 font-bold'>莫耳數</span>** (n) = 物質質量 (m, g) / 莫耳質量 (M, g/mol)。\n- 在氣體標準狀況 (STP, 0°C, 1 atm) 下，1 莫耳理想氣體體積為 22.4 L；在常溫常壓 (NTP, 25°C, 1 atm) 下約為 24.5 L。",
          "formula": "$$n = \\frac{m}{M} = \\frac{N}{N_A}$$"
        },
        {
          "heading": "波特蘭水泥之化學水化反應 (Concrete Hydration)",
          "outlineRefs": ["CJa-V.2-1"],
          "body": "💡 **核心概念解析**：\n混凝土強度發展源自卜特蘭水泥熟料礦物與水的交聯化學反應 (Concrete Hydration)。\n- 主要熟料化學成分：\n  1. 矽酸三鈣（Tricalcium silicate，簡稱 $C_3S$，化學式為 $Ca_3SiO_5$，水泥化學式 $3CaO\\cdot SiO_2$）：含量約 50~70%，水化反應快且放熱高，負責 1~7 天早期強度發展。水化生成 C-S-H 凝膠與氫氧化鈣 $Ca(OH)_2$。\n  2. 矽酸二鈣（Dicalcium silicate，簡稱 $C_2S$，化學式為 $Ca_2SiO_4$，水泥化學式 $2CaO\\cdot SiO_2$）：含量約 15~30%，水化速率慢且放熱低，負責後期 (28 天後至數年) 強度穩定增長。\n  3. 鋁酸三鈣（Tricalcium aluminate，簡稱 $C_3A$，化學式為 $Ca_3Al_2O_6$，水泥化學式 $3CaO\\cdot Al_2O_3$）：反應極劇烈，放熱量最高，需加入石膏 ($CaSO_4\\cdot 2H_2O$) 調節凝結時間，防止快凝。\n  4. 鐵鋁酸四鈣（Tetracalcium aluminoferrite，簡稱 $C_4AF$，化學式為 $Ca_4Al_2Fe_2O_{10}$，水泥化學式 $4CaO\\cdot Al_2O_3\\cdot Fe_2O_3$）：水化速度中等，耐硫酸鹽性佳，賦予水泥深灰色。",
          "formula": "$$2Ca_3SiO_5 + 6H_2O \\longrightarrow 3CaO\\cdot 2SiO_2\\cdot 3H_2O \\text{ (C-S-H 凝膠)} + 3Ca(OH)_2$$\\n$$2Ca_2SiO_4 + 4H_2O \\longrightarrow 3CaO\\cdot 2SiO_2\\cdot 3H_2O \\text{ (C-S-H 凝膠)} + Ca(OH)_2$$"
        },
        {
          "heading": "波特蘭水泥四大熟料礦物水化特性比較",
          "outlineRefs": ["CMc-V.2-6"],
          "body": "💡 **核心概念解析**：\n比較**<span className='text-rose-600 font-bold'>波特蘭水泥</span>**中四大熟料成分的水化反應速度、水化發熱量與強度貢獻。",
          "table": {
            "headers": [
              "熟料化學成分",
              "化學簡寫",
              "水化反應速度",
              "水化發熱量 (J/g)",
              "主要強度貢獻時期"
            ],
            "rows": [
              [
                "矽酸三鈣（Tricalcium silicate，化學式為 Ca₃SiO₅）",
                "C₃S (3CaO·SiO₂)",
                "快",
                "高 (~500 J/g)",
                "早期強度 (1 ~ 7 天)"
              ],
              [
                "矽酸二鈣（Dicalcium silicate，化學式為 Ca₂SiO₄）",
                "C₂S (2CaO·SiO₂)",
                "慢",
                "低 (~250 J/g)",
                "後期強度 (28 天至數年)"
              ],
              [
                "鋁酸三鈣（Tricalcium aluminate，化學式為 Ca₃Al₂O₆）",
                "C₃A (3CaO·Al₂O₃)",
                "極快 (需石膏延凝)",
                "極高 (~850 J/g)",
                "初始凝結與 1 天內發熱"
              ],
              [
                "鐵鋁酸四鈣（Tetracalcium aluminoferrite，化學式為 Ca₄Al₂Fe₂O₁₀）",
                "C₄AF (4CaO·Al₂O₃·Fe₂O₃)",
                "中等",
                "中低 (~400 J/g)",
                "對強度貢獻較小，賦予水泥灰色"
              ]
            ]
          }
        },
        {
          "heading": "水化熱控制與卜特嵐礦物摻和料 (Fly Ash & Slag) 之波左蘭反應",
          "outlineRefs": ["CBa-V.2-1"],
          "body": "💡 **核心概念解析**：\n水化反應為強烈放熱反應。在巨體積混凝土 (Mass Concrete，如大壩、厚基礎版) 中，內部累積的**<span className='text-indigo-600 font-bold'>水化熱</span>**易導致內外溫差開裂。\n- **<span className='text-rose-600 font-bold'>波左蘭反應</span>** (Pozzolanic Reaction)：加入飛灰 (Fly Ash) 或爐石粉 (GGBS)，其活性矽 (SiO₂) 可與水泥水化產生的 Ca(OH)₂ 發生二次**<span className='text-rose-600 font-bold'>波左蘭反應</span>**，生成額外的 C-S-H 膠體，能顯著降低水化放熱峰值並提高混凝土緻密性與耐久性。",
          "formula": "$$Ca(OH)_2 + \\text{活性 } SiO_2 + H_2O \\longrightarrow \\text{C-S-H 凝膠 (二次水化反應)}$$"
        },
        {
          "heading": "石膏 (CaSO₄·2H₂O) 調節凝結化學與鈣礬石 (Ettringite) 形成",
          "outlineRefs": ["CJa-V.2-1"],
          "body": "💡 **核心概念解析**：\n未添加石膏的水泥在加水時，C₃A 會在幾分鐘內迅速水化並結晶，導致混凝土發生「快凝 (Flash Set)」無法施工。研磨水泥時摻入約 3%~5% 石膏，石膏中的硫酸根 SO₄²⁻ 與 C₃A 及水反應在顆粒表面覆蓋一層緻密的鈣礬石 (Ettringite, 3CaO·Al₂O₃·3CaSO₄·32H₂O) 薄膜，可延緩 C₃A 水化達到適當的施工工作時間 (1~2 小時)。",
          "formula": "$$Ca_3Al_2O_6 + 3(CaSO_4\\cdot 2H_2O) + 26H_2O \\longrightarrow 3CaO\\cdot Al_2O_3\\cdot 3CaSO_4\\cdot 32H_2O \\text{ (鈣礬石 Ettringite)}$$"
        },
        {
          "heading": "巨體積混凝土絕熱溫升 ΔT_adiab 化學計算與溫差裂縫預防",
          "outlineRefs": ["CBa-V.2-1"],
          "body": "💡 **核心概念解析**：\n每克普通卜特蘭水泥完全水化放熱約 350~500 J。混凝土比熱 c ≈ 1.0 kJ/(kg·K)。在大體積混凝土中，內部累積的水化放熱幾乎無法散逸，**<span className='text-rose-600 font-bold'>絕熱溫升</span>** ΔT 升幅可達 30°C~50°C。若內部與表面溫差 ΔT > 20°C，熱應力將超過混凝土拉伸強度，導致裂縫 (Thermal Cracking)。",
          "formula": "$$\\Delta T_{\\text{adiab}} = \\frac{m_{\\text{cement}} \\cdot Q_{\\text{hydration}}}{m_{\\text{total}} \\cdot c_{\\text{concrete}}}$$",
          "steps": [
            "🔹 **第一步**（低熱水泥選配）：採用低熱 I/II 型水泥或以 40% 爐石粉替代水泥熟料。",
            "🔹 **第二步**（預冷拌合水）：拌合時使用冰水或加入碎冰塊，降低混凝土預澆置初溫。",
            "🔹 **第三步**（管道冷卻）：在厚版內部預埋冷卻水管通水循環散熱。"
          ]
        },
        {
          "heading": "氣體的性質與氣體定律：波以耳、查理、亞佛加厥 (Gas Laws)",
          "outlineRefs": ["CEc-V.2-1", "CEc-V.2-2", "CEc-V.2-3", "CEc-V.2-4"],
          "body": "**氣體的性質**：可以壓縮、會擴散、能充滿整個容器。\n**波以耳定律**：定溫時，一定量氣體的壓力與體積成反比，P₁V₁ = P₂V₂。\n**查理定律**：定壓時，一定量氣體的體積與絕對溫度成正比，V₁ / T₁ = V₂ / T₂。\n**亞佛加厥定律**：同溫同壓下，同體積的氣體含有相同的分子數；在 STP（0 ℃、1 atm）下，1 mol 氣體約占 22.4 L。\n**理想氣體方程式**（進階）：PV = nRT，R = 0.082 atm·L/(mol·K)。**分壓定律**（進階）：混合氣體總壓等於各成分氣體分壓的和。\n例：27 ℃、1 atm 的空氣 10 L，在定壓下加熱到 127 ℃，V = 10 × (127 + 273) / (27 + 273) = 10 × 400 / 300 ≈ 13.3 L。\n⚠️ 易錯：氣體定律中的溫度一定要換算成絕對溫度 K；直接用 ℃ 計算會得到錯誤答案。",
          "formula": "波以耳：P₁V₁ = P₂V₂\n查理：V₁ / T₁ = V₂ / T₂\n理想氣體：PV = nRT",
          "table": {
            "headers": ["定律", "固定條件", "關係式", "生活例子"],
            "rows": [
              ["波以耳定律", "溫度、氣體量", "PV = 定值", "打氣筒壓縮空氣"],
              ["查理定律", "壓力、氣體量", "V / T = 定值", "夏天輪胎膨脹"],
              ["亞佛加厥定律", "溫度、壓力", "V ∝ n", "氣球充氣越多越大"]
            ]
          }
        },
        {
          "heading": "反應速率與影響因素 (Reaction Rate)",
          "outlineRefs": ["CJe-V.2-1", "CJe-V.2-3", "CJe-V.2-4"],
          "body": "**反應速率**：單位時間內反應物濃度的減少量或生成物濃度的增加量（單位 M/s）。\n**碰撞學說**（進階）：反應物粒子必須以足夠的能量（大於活化能）且方向適當地碰撞，才會發生反應。\n**影響反應速率的因素**：\n• 反應物本性：離子間的反應通常比需要斷裂共價鍵的反應快。\n• 濃度：濃度越高，碰撞頻率越高，速率越快。\n• 溫度：溫度升高，具有足夠能量的粒子比例增加；粗略估計溫度每升高 10 ℃，速率約增為 2–3 倍。\n• 接觸面積：粉末比塊狀反應快，如粉塵爆炸；水泥磨得越細，水化越快。\n• 催化劑：降低活化能、加快反應，本身在反應前後不改變，如 TiO₂ 光觸媒。\n🏗️ 情境：夏季高溫使混凝土凝結加快，需加緩凝劑或降低拌合水溫；冬季低溫則需保溫養護。第 III 型早強水泥就是把熟料磨得更細、增加接觸面積。\n⚠️ 易錯：催化劑只改變反應速率，不改變反應的產量與平衡位置。",
          "table": {
            "headers": ["因素", "改變", "速率變化", "營建實例"],
            "rows": [
              ["溫度", "升高", "加快", "夏季混凝土凝結快"],
              ["接觸面積", "增大（磨細）", "加快", "早強水泥細度高"],
              ["濃度", "增加", "加快", "酸雨濃度越高侵蝕越快"],
              ["催化劑", "加入", "加快", "TiO₂ 光觸媒分解污染物"]
            ]
          }
        },
        {
          "heading": "可逆反應、動態平衡與勒沙特列原理 (Chemical Equilibrium)",
          "outlineRefs": ["CJe-V.2-5", "CJe-V.2-6", "CJe-V.2-7", "CJe-V.2-8"],
          "body": "**可逆反應**：正反應與逆反應同時進行，以「⇌」表示。\n**動態平衡**：正反應速率等於逆反應速率時，各物質濃度不再改變，但反應並沒有停止。\n**勒沙特列原理**（進階）：處於平衡的系統受到改變時，平衡會向「**減弱該改變**」的方向移動。\n• 濃度：加入反應物 → 平衡向右；移除生成物 → 平衡向右。\n• 壓力：加壓 → 平衡向氣體分子數較少的一方移動。\n• 溫度：升溫 → 平衡向吸熱方向移動。\n• 催化劑：不改變平衡位置，只加快達到平衡。\n🏗️ 情境：石灰石煅燒 CaCO₃ ⇌ CaO + CO₂ 為吸熱反應，高溫且把 CO₂ 不斷排出窯外，有利於生石灰的生成。\n**平衡常數**（進階）：aA + bB ⇌ cC + dD，Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)；只受溫度影響。\n⚠️ 易錯：達到平衡時反應物與生成物的濃度「不再改變」，不代表兩者濃度「相等」。",
          "formula": "aA + bB ⇌ cC + dD\nKc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)",
          "table": {
            "headers": ["改變條件", "平衡移動方向", "以 CaCO₃ ⇌ CaO + CO₂（吸熱）為例"],
            "rows": [
              ["升高溫度", "向吸熱方向", "向右，生石灰增加"],
              ["移除 CO₂", "向生成 CO₂ 的方向", "向右，分解更完全"],
              ["增加壓力", "向氣體分子數少的一方", "向左，不利分解"],
              ["加入催化劑", "不移動", "只加快達到平衡"]
            ]
          }
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "在化學反應 2H₂ + O₂ → 2H₂O 中，若有 8 克的氫氣完全反應，需要多少克的氧氣？（原子量：H=1, O=16）",
          "steps": [
            "計算 H₂ 分子量 = 1×2 = 2 g/mol。8 g 氫氣**<span className='text-rose-600 font-bold'>莫耳數</span>** n(H₂) = 8 / 2 = 4 mol。",
            "由平衡化學反應式 2H₂ + O₂ → 2H₂O 可知，H₂ 與 O₂ 莫耳消耗比為 2 : 1。",
            "所需 O₂ **<span className='text-rose-600 font-bold'>莫耳數</span>** n(O₂) = 4 mol / 2 = 2 mol。",
            "O₂ 分子量 = 16×2 = 32 g/mol。",
            "氧氣質量 m = 2 mol × 32 g/mol = 64 克。"
          ],
          "answer": "64 克",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "石灰石 (主要成分碳酸鈣 CaCO₃，莫耳質量 100 g/mol) 於高溫水泥窯中煅燒分解為生石灰 (CaO，56 g/mol) 與二氧化碳 (CO₂，44 g/mol)。反應式：CaCO₃ → CaO + CO₂↑。(1) 100 kg 的純碳酸鈣高溫完全分解，可生成多少 kg 的生石灰 CaO？ (2) 釋出多少 kg 的二氧化碳 CO₂？",
          "steps": [
            "計算 CaCO₃ **<span className='text-rose-600 font-bold'>莫耳數</span>**：質量 m = 100 kg = 100,000 g。n = 100,000 g / 100 g/mol = 1000 mol。",
            "根據化學反應式係數比 1:1:1，生成 1000 mol CaO 與 1000 mol CO₂。",
            "生成 CaO 質量 = 1000 mol × 56 g/mol = 56,000 g = 56 kg。",
            "生成 CO₂ 質量 = 1000 mol × 44 g/mol = 44,000 g = 44 kg。"
          ],
          "answer": "(1) 生成生石灰 CaO = 56 kg；(2) 釋出 CO₂ = 44 kg",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "矽酸三鈣 (C₃S，化學式 Ca₃SiO₅，莫耳質量 228.3 g/mol) 是**<span className='text-rose-600 font-bold'>波特蘭水泥</span>**早期強度的主要成分，其完全水化反應式為：2 Ca₃SiO₅ + 11 H₂O → 3CaO·2SiO₂·8H₂O (C-S-H 膠體) + 3 Ca(OH)₂。若有 114.15 kg 之純 C₃S 完全水化：(1) 需消耗多少 kg 的水 (H₂O，莫耳質量 18 g/mol)？ (2) 反應將生成多少 kg 的氫氧化鈣 Ca(OH)₂ (莫耳質量 74.1 g/mol)？",
          "steps": [
            "計算 C₃S 的**<span className='text-rose-600 font-bold'>莫耳數</span>**：質量 m = 114.15 kg = 114,150 g。n(C₃S) = 114,150 g / 228.3 g/mol = 500 mol。",
            "根據反應式係數比，2 mol C₃S 消耗 11 mol H₂O 並生成 3 mol Ca(OH)₂。",
            "(1) 所需 H₂O **<span className='text-rose-600 font-bold'>莫耳數</span>** n(H₂O) = 500 mol × (11 / 2) = 2750 mol。消耗水質量 = 2750 mol × 18 g/mol = 49,500 g = 49.5 kg。",
            "(2) 生成 Ca(OH)₂ **<span className='text-rose-600 font-bold'>莫耳數</span>** n(Ca(OH)₂) = 500 mol × (3 / 2) = 750 mol。生成氫氧化鈣質量 = 750 mol × 74.1 g/mol = 55,575 g = 55.58 kg。"
          ],
          "answer": "(1) 消耗水 = 49.5 kg；(2) 生成 Ca(OH)₂ = 55.58 kg",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "混凝土中加入飛灰 (Fly Ash) 進行二次**<span className='text-rose-600 font-bold'>波左蘭反應</span>**：Ca(OH)₂ (74.1 g/mol) + SiO₂ (60.1 g/mol) + H₂O → C-S-H 膠體。若水泥水化產生了 37.05 kg 的氫氧化鈣 Ca(OH)₂，理論上需多少 kg 的活性二氧化矽 SiO₂ 才能將其完全反應轉化為 C-S-H 膠體？",
          "steps": [
            "計算 Ca(OH)₂ **<span className='text-rose-600 font-bold'>莫耳數</span>**：n = 37,050 g / 74.1 g/mol = 500 mol。",
            "**<span className='text-rose-600 font-bold'>波左蘭反應</span>**中，Ca(OH)₂ 與活性 SiO₂ 莫耳消耗比為 1 : 1。",
            "需要活性 SiO₂ **<span className='text-rose-600 font-bold'>莫耳數</span>** n(SiO₂) = 500 mol。",
            "計算所需 SiO₂ 質量 = 500 mol × 60.1 g/mol = 30,050 g = 30.05 kg。"
          ],
          "answer": "需要 30.05 kg 的活性二氧化矽 SiO₂",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一高樓筏基厚 2.0 公尺的巨體積混凝土澆置工程，每立方米混凝土含有 350 kg 的水泥。假設水泥累計水化放熱量 Q = 360 J/g (360 kJ/kg)，混凝土比熱 c = 1.0 kJ/(kg·K)，混凝土密度 ρ = 2400 kg/m³。若在絕熱狀態下，(1) 每立方米混凝土水化累積釋放總熱量為多少 kJ？ (2) 該巨體積混凝土內部的**<span className='text-rose-600 font-bold'>絕熱溫升</span>** ΔT 為多少 °C (K)？",
          "steps": [
            "計算 1 m³ 混凝土中水泥放熱量 Q_total = 350 kg × 360 kJ/kg = 126,000 kJ。",
            "計算 1 m³ 混凝土總質量 m_total = 2400 kg。",
            "利用溫升公式 ΔT = Q_total / (m_total × c)：",
            "ΔT = 126,000 kJ / (2400 kg × 1.0 kJ/kg·K) = 126,000 / 2400 = 52.5 °C (K)。",
            "結論：若無降溫對策，內部將急劇升溫 52.5°C，易引發強烈熱應力開裂。"
          ],
          "answer": "(1) 釋放總熱量 = 126,000 kJ/m³；(2) **<span className='text-rose-600 font-bold'>絕熱溫升</span>** ΔT = 52.5 °C",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "在高性能混凝土 (HPC) 調配中，拌合水灰比 W/C = 0.35。若使用了 400 kg 的 Portland 水泥，已知水泥完全水化所需的理論最小化學結合水灰比約為 0.23，其餘水份留存於孔隙中。(1) 400 kg 水泥完全水化需消耗多少 kg 的化學結合水？ (2) 剩餘的蒸發毛細孔隙水為多少 kg？",
          "steps": [
            "總拌水量 W_total = 水泥量 × 拌合水灰比 = 400 kg × 0.35 = 140 kg。",
            "化學結合水 W_bound = 水泥量 × 理論結合水灰比 = 400 kg × 0.23 = 92 kg。",
            "剩餘毛細孔隙水 W_capillary = W_total - W_bound = 140 kg - 92 kg = 48 kg。",
            "結論：剩餘 48 kg 水會在硬化過程中形成毛細孔隙，降低水灰比能有效減少毛細孔，提升強度與緻密性。"
          ],
          "answer": "(1) 化學結合水 = 92 kg；(2) 剩餘毛細孔隙水 = 48 kg",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "在化學反應 2H₂ + O₂ → 2H₂O 中，若有 8 克的氫氣完全反應，需要多少克的氧氣？（原子量：H=1, O=16）",
        "steps": [
          "計算 H₂ 分子量 = 1×2 = 2 g/mol。8 g 氫氣**<span className='text-rose-600 font-bold'>莫耳數</span>** n(H₂) = 8 / 2 = 4 mol。",
          "由平衡化學反應式 2H₂ + O₂ → 2H₂O 可知，H₂ 與 O₂ 莫耳消耗比為 2 : 1。",
          "所需 O₂ **<span className='text-rose-600 font-bold'>莫耳數</span>** n(O₂) = 4 mol / 2 = 2 mol。",
          "O₂ 分子量 = 16×2 = 32 g/mol。",
          "氧氣質量 m = 2 mol × 32 g/mol = 64 克。"
        ],
        "answer": "64 克"
      },
      "step0Prerequisites": [
        "化學方程式平衡與莫耳數 (Mole) 概念",
        "化學計量質量守恆定律",
        "放熱反應 (ΔH < 0) 與吸熱反應 (ΔH > 0) 之熱化學方程式"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "化學反應平衡時，反應物與生成物濃度必須相等。",
          "correctThinking": "化學平衡指正逆反應速率相等，各物質濃度維持恆定，而非濃度相等。",
          "trapDescription": "動態平衡本質概念常考陷阱。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "莫耳數中樞橋樑法",
          "explanation": "質量 (g) ÷ 分子量 ＝ 莫耳數 (mol) ＝ 氣體體積 (L) ÷ 22.4 (STP) ＝ 粒子數 ÷ 6.02×10²³。"
        }
      ]
    },
    {
      "slug": "acids-bases-salts",
      "title": "3. ⚡ 酸鹼化學與混凝土中性化",
      "desc": "酸鹼理論與 pH 值計算、混凝土碳化/中性化機制、酸雨石材腐蝕、硫酸鹽侵蝕與鋼筋鈍化膜。",
      "status": "done",
      "gradeLevel": 10,
      "curriculumCode": "108-CJd",
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】**<span className=\"text-rose-600 font-bold\">酸雨</span>**侵蝕大理石化學計算：大理石主成分為碳酸鈣 (CaCO3)。若**<span className=\"text-rose-600 font-bold\">酸雨</span>**中含有 0.05 M 之稀硫酸 (H2SO4)，反應式為 CaCO3 + H2SO4 → CaSO4 + H2O + CO2。10 公升該**<span className=\"text-rose-600 font-bold\">酸雨</span>**最多可溶解多少公克碳酸鈣？(Ca=40, C=12, O=16)",
          "difficulty": "中等",
          "steps": [
            "步驟 1：計算 H2SO4 **<span className='text-rose-600 font-bold'>莫耳數</span>**。n = M × V = 0.05 mol/L × 10 L = 0.5 mol。",
            "步驟 2：由**<span className='text-rose-600 font-bold'>莫耳數</span>**比 (1:1) 求溶解之 CaCO3 **<span className='text-rose-600 font-bold'>莫耳數</span>** = 0.5 mol。",
            "步驟 3：**<span className='text-rose-600 font-bold'>莫耳數</span>**換算質量。CaCO3 分子量 100。m = 0.5 mol × 100 g/mol = 50 g。"
          ],
          "answer": "最多可溶解 50 公克碳酸鈣。",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "chemistry-context.webp",
        "chemistry-mechanism.webp",
        "chemistry-comparison.webp",
        "chemistry-step.webp",
        "chemistry-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "酸鹼定義 (阿瑞尼斯與布忍斯特-勞里學說)",
          "outlineRefs": ["CJd-V.2-1"],
          "body": "💡 **核心概念解析**：\n酸鹼化學是化學與材料腐蝕的核心。\n- **<span className='text-rose-600 font-bold'>阿瑞尼斯</span>**學說 (Arrhenius)：酸是在水中能解離產生 H⁺ 的物質 (如 HCl, HNO₃, H₂SO₄)；鹼是在水中能解離產生 OH⁻ 的物質 (如 NaOH, Ca(OH)₂)。\n- **<span className='text-rose-600 font-bold'>布忍斯特-勞里</span>**學說 (Brønsted-Lowry)：酸是質子 (H⁺) 的提供者 (Proton Donor)；鹼是質子的接受者 (Proton Acceptor)。"
        },
        {
          "heading": "溶液 pH 值計算與水的離子積 (Kw)",
          "outlineRefs": ["CJb-V.2-1", "CJd-V.2-1"],
          "body": "💡 **核心概念解析**：\n純水會發生極微量的自體解離：H₂O ⇌ H⁺ + OH⁻。\n- 在 25°C 時，水之離子積常數 Kw = [H⁺] × [OH⁻] = 1.0 × 10⁻¹⁴ M²。\n- pH = -log[H⁺]，pOH = -log[OH⁻]，且 pH + pOH = 14。\n- 中性溶液：pH = 7；酸性溶液：pH < 7；鹼性溶液：pH > 7。\n新拌與硬化混凝土內部孔隙液含有大量 Ca(OH)₂ 與 KOH/NaOH，強鹼性使 **<span className='text-rose-600 font-bold'>pH 值</span>**高達 12.5 ~ 13.5，能使鋼筋表面形成極薄的鈍化保護膜 (Passivation Film, Fe₂O₃)。",
          "formula": "$$\\text{pH} = -\\log_{10}[\\text{H}^+], \\quad K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14} \\text{ (at } 25^\\circ\\text{C)}$$"
        },
        {
          "heading": "混凝土中性化（碳化反應）化學與鋼筋防護失效",
          "outlineRefs": ["CJd-V.2-1"],
          "body": "💡 **核心概念解析**：\n大氣中的二氧化碳 (CO₂) 擴散進入混凝土孔隙中，溶解於孔隙水形成碳酸，並與混凝土中的氫氧化鈣 Ca(OH)₂ 發生反應，稱為**<span className='text-rose-600 font-bold'>中性化</span>**或**<span className='text-rose-600 font-bold'>碳化作用</span>** (Carbonation)。\n- 化學反應：Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O。\n- 碳化危害：當混凝土**<span className='text-rose-600 font-bold'>中性化</span>**深抵鋼筋表面時，孔隙液 **<span className='text-rose-600 font-bold'>pH 值</span>**將降至 9.0 以下，致使鋼筋表面的鹼性鈍化膜溶解破壞，一旦遇到水分與氧氣便會引發鋼筋劇烈電化學銹蝕。",
          "formula": "$$Ca(OH)_2 + CO_2 \\longrightarrow CaCO_3\\downarrow + H_2O$$"
        },
        {
          "heading": "常用建築材料對酸鹼化學環境之耐蝕性比較",
          "outlineRefs": ["CJd-V.2-1"],
          "body": "💡 **核心概念解析**：\n建築物長年暴露於大氣酸雨（二氧化硫與氮氧化物轉化之硫酸與硝酸）或工業化學環境中，各類建材之離子鍵與共價鍵結構決定其耐腐蝕性。評估混凝土中性化、石灰岩溶蝕與金屬鈍化膜行為，是工程防護與耐久性設計之基石。",
          "table": {
            "headers": [
              "建築材料類型",
              "對強酸 (如 HCl/H₂SO₄) 耐性",
              "對弱酸/**<span className='text-rose-600 font-bold'>酸雨</span>** (pH 4-5) 耐性",
              "對強鹼 (如 NaOH/Ca(OH)₂) 耐性",
              "主要化學破壞機制"
            ],
            "rows": [
              [
                "波特蘭混凝土",
                "極差 (劇烈侵蝕破壞)",
                "差 (表面微質溶蝕與**<span className='text-rose-600 font-bold'>中性化</span>**)",
                "極佳 (內固強鹼環境)",
                "酸置換 Ca(OH)₂ 生成可溶性鈣鹽"
              ],
              [
                "天然大理石/石灰石",
                "極差 (劇烈冒泡溶解)",
                "差 (產生溶蝕雨痕與退化)",
                "佳",
                "CaCO₃ + 2H⁺ → Ca²⁺ + CO₂↑ + H₂O"
              ],
              [
                "花崗岩 (Granite)",
                "優良 (高矽含量)",
                "極佳",
                "佳",
                "主要成分為共價 SiO₂/長石，耐酸"
              ],
              [
                "耐酸磚 (Acid Bricks)",
                "極佳 (抗濃酸腐蝕)",
                "極佳",
                "佳",
                "高鋁矽酸鹽高溫燒結，結構極緻密"
              ],
              [
                "316 不銹鋼",
                "佳 (除高濃度氯離子外)",
                "極佳",
                "極佳",
                "表面高鉻氧化物 (Cr₂O₃) 鈍化膜防護"
              ]
            ]
          }
        },
        {
          "heading": "酸雨 (Acid Rain) 的化學成因與建築石材溶蝕",
          "outlineRefs": ["CMe-V.2-2"],
          "body": "💡 **核心概念解析**：\n正常未受污染雨水因溶解大氣中 CO₂ 呈弱酸性 (pH ≈ 5.6)。當雨水 **<span className='text-rose-600 font-bold'>pH 值</span>**低於 5.0 時即定義為**<span className='text-rose-600 font-bold'>酸雨</span>**。\n- 成因：化石燃料燃燒排放之 SO₂ 與 NOx 在大氣中氧化並溶於水滴，形成硫酸 (H₂SO₄) 與硝酸 (HNO₃)。\n- 石材侵蝕：**<span className='text-rose-600 font-bold'>酸雨</span>**降落至碳酸鹽類建築石材 (如大理石 CaCO₃) 表面時，發生反應：CaCO₃ + H₂SO₄ → CaSO₄ + CO₂↑ + H₂O，生成的石膏 (CaSO₄) 溶解度較高且易剝落，造成古蹟與石材外牆嚴重毀損。"
        },
        {
          "heading": "地下水硫酸鹽侵蝕 (Sulfate Attack) 與結晶膨脹破壞",
          "outlineRefs": ["CJb-V.2-1"],
          "body": "💡 **核心概念解析**：\n土壤與地下水中的硫酸鹽離子 (SO₄²⁻) 滲入混凝土內部，與水泥水化產生的 Ca(OH)₂ 及水化鋁酸鈣 (C-S-A) 反應，生成遲延型鈣礬石 (Delayed Ettringite) 或石膏 (Gypsum)。結晶生成過程伴隨 2~3 倍的固體體積膨脹，引發混凝土內部產生巨大張應力，導致混凝土開裂崩解。",
          "formula": "$$Ca(OH)_2 + SO_4^{2-} + 2H_2O \\longrightarrow CaSO_4\\cdot 2H_2O \\text{ (石膏結晶膨脹)}$$\\n$$3CaO\\cdot Al_2O_3\\cdot CaSO_4\\cdot 12H_2O + 2SO_4^{2-} + 2Ca^{2+} + 20H_2O \\longrightarrow 3CaO\\cdot Al_2O_3\\cdot 3CaSO_4\\cdot 32H_2O \\text{ (遲延鈣礬石膨脹)}$$"
        },
        {
          "heading": "混凝土碳化深度擴散模型 (Fick's Diffusion Law & Carbonation Depth)",
          "outlineRefs": [],
          "body": "💡 **核心概念解析**：\n二氧化碳在混凝土孔隙中的擴散過程符合費克第一定律 (Fick's First Law)。**<span className='text-rose-600 font-bold'>中性化</span>**碳化深度 x 與大氣暴露時間 t 的平方根成正比 (x = k · √t)。碳化速率係數 k 受水灰比 (W/C)、環境相對濕度 (RH 50%~70% 時碳化最快) 及保護層緻密性控制。",
          "formula": "$$x = k \\sqrt{t}, \\quad k = f(\\text{W/C}, \\text{RH}, [\\text{CO}_2])$$",
          "steps": [
            "🔹 **第一步**（酚酞指示劑測試）：於新鮮混凝土切面噴灑 1% 酚酞試液，未碳化強鹼區呈紫色，已碳化**<span className='text-rose-600 font-bold'>中性化</span>**區不變色 (無色)。",
            "🔹 **第二步**（壽命推算）：利用 x = k · √t 代入已知保護層厚度 x_cover (如 40 mm)，計算鋼筋周圍被碳化破壞所需的年限 t。"
          ]
        },
        {
          "heading": "水的性質、硬水軟化與水質淨化 (Water Quality & Treatment)",
          "outlineRefs": ["CFa-V.2-2", "CFa-V.2-3", "CJb-V.2-1"],
          "body": "**水的性質**：水是極性分子，分子間有氫鍵，因此比熱大、沸點高，而且是很好的溶劑。水在 4 ℃ 時密度最大，結冰時體積約膨脹 9%。\n**水溶液濃度**：重量百分率、ppm（稀薄水溶液中 1 ppm ≈ 1 mg/L）、體積莫耳濃度 M = 溶質莫耳數 / 溶液體積（L）。\n**硬水**：含較多 Ca²⁺、Mg²⁺ 的水。\n• 暫時硬水：含碳酸氫鹽，煮沸即可軟化：Ca(HCO₃)₂ → CaCO₃↓ + H₂O + CO₂↑（熱水器與水壺的水垢）。\n• 永久硬水：含硫酸鹽或氯化物，需加碳酸鈉或用離子交換樹脂軟化。\n• 硬水會使肥皂不易起泡、管線與熱水器結垢。\n**淨化與純化**：自來水廠流程為混凝（加入明礬或多元氯化鋁）→ 沉澱 → 過濾 → 消毒（加氯）。純化可用蒸餾、離子交換、逆滲透（RO）。\n⚠️ 易錯：煮沸只能去除暫時硬度，不能去除永久硬度；逆滲透與蒸餾則可同時去除大部分離子。",
          "table": {
            "headers": ["處理步驟", "方法", "目的"],
            "rows": [
              ["混凝", "加入明礬、多元氯化鋁", "使細小懸浮微粒凝聚成較大顆粒"],
              ["沉澱", "靜置", "讓凝聚的顆粒沉降"],
              ["過濾", "砂濾、活性碳", "去除殘餘懸浮物與異味"],
              ["消毒", "加氯或臭氧", "殺滅細菌與病原體"],
              ["軟化／純化", "離子交換、逆滲透、蒸餾", "降低硬度或製造純水"]
            ]
          }
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "若 25°C 時某水溶液中 [H⁺] 濃度為 1.0 × 10⁻⁴ M，試計算該溶液的 **<span className='text-rose-600 font-bold'>pH 值</span>**與 [OH⁻] 離子濃度。",
          "steps": [
            "代入 pH 計算公式：pH = -log[H⁺] = -log(1.0 × 10⁻⁴) = 4.0。",
            "利用 25°C 下水之離子積常數 Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴。",
            "解出 [OH⁻] = 1.0 × 10⁻¹⁴ / 1.0 × 10⁻⁴ = 1.0 × 10⁻¹⁰ M。",
            "溶液 pH < 7，呈酸性。"
          ],
          "answer": "pH = 4.0，[OH⁻] = 1.0 × 10⁻¹⁰ M",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "將 0.1 M 的鹽酸 (HCl) 水溶液 100 mL 與 0.1 M 的氫氧化鈉 (NaOH) 水溶液 50 mL 混合。(1) 混合後剩餘的 H⁺ **<span className='text-rose-600 font-bold'>莫耳數</span>**為多少 mol？ (2) 混合溶液總體積為 150 mL 時，溶液的 **<span className='text-rose-600 font-bold'>pH 值</span>**大約為何？(已知 log 3 ≈ 0.48)",
          "steps": [
            "計算初始 H⁺ **<span className='text-rose-600 font-bold'>莫耳數</span>** n(H⁺) = 0.1 M × 0.1 L = 0.01 mol。",
            "計算初始 OH⁻ **<span className='text-rose-600 font-bold'>莫耳數</span>** n(OH⁻) = 0.1 M × 0.05 L = 0.005 mol。",
            "發生酸鹼中和反應 H⁺ + OH⁻ → H₂O，剩餘 H⁺ **<span className='text-rose-600 font-bold'>莫耳數</span>** = 0.01 - 0.005 = 0.005 mol。",
            "計算混合後 H⁺ 莫耳濃度 [H⁺] = 0.005 mol / 0.15 L = 1/30 M ≈ 0.0333 M。",
            "計算 pH = -log(1/30) = log(30) = log(3 × 10) = 1 + log 3 ≈ 1 + 0.48 = 1.48。"
          ],
          "answer": "(1) 剩餘 H⁺ = 0.005 mol；(2) 混合溶液 pH ≈ 1.48 (呈酸性)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "混凝土保護層厚度為 40 mm。在大氣環境下 CO₂ 滲入混凝土發生碳化**<span className='text-rose-600 font-bold'>中性化</span>**反應：Ca(OH)₂ + CO₂ → CaCO₃ + H₂O。若已知混凝土硬化體中包含 5% 重量的游離 Ca(OH)₂ (以每 m³ 混凝土含 300 kg 水泥計算，即含 15 kg/m³ 的 Ca(OH)₂，莫耳質量 74.1 g/mol)。(1) 每立方米混凝土完全**<span className='text-rose-600 font-bold'>中性化</span>**需吸收多少 kg 之 CO₂ (莫耳質量 44 g/mol)？ (2) 若將 1.0 M 的 HCl 100 mL 滴入含有 0.01 mol Ca(OH)₂ 的萃取液中，完全**<span className='text-rose-600 font-bold'>中性化</span>**反應後溶液的 **<span className='text-rose-600 font-bold'>pH 值</span>**為何？",
          "steps": [
            "(1) 計算每 m³ 混凝土中 Ca(OH)₂ 的**<span className='text-rose-600 font-bold'>莫耳數</span>**：n = 15,000 g / 74.1 g/mol ≈ 202.43 mol。",
            "根據化學反應 Ca(OH)₂ + CO₂ → CaCO₃ + H₂O，1 mol Ca(OH)₂ 吸收 1 mol CO₂。",
            "需要 CO₂ **<span className='text-rose-600 font-bold'>莫耳數</span>** = 202.43 mol。CO₂ 質量 = 202.43 mol × 44 g/mol ≈ 8,906.9 g ≈ 8.91 kg。",
            "(2) 計算 HCl 中 H⁺ **<span className='text-rose-600 font-bold'>莫耳數</span>**：0.1 L × 1.0 M = 0.1 mol H⁺。",
            "0.01 mol Ca(OH)₂ 含有 0.02 mol OH⁻。",
            "中和反應 H⁺ + OH⁻ → H₂O，H⁺ 過量：剩餘 H⁺ = 0.1 - 0.02 = 0.08 mol。",
            "混合後假設溶液總體積約為 0.1 L，則 [H⁺] = 0.08 mol / 0.1 L = 0.8 M。",
            "pH = -log(0.8) = -log(8/10) = -(3log2 - 1) = 1 - 3(0.301) = 1 - 0.903 = 0.097 ≈ 0.10。"
          ],
          "answer": "(1) 每 m³ 吸收 CO₂ ≈ 8.91 kg；(2) 中和後溶液 pH ≈ 0.10 (強酸性)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "古蹟建築大理石雕刻外牆 (主要成分 CaCO₃ 100 g/mol) 長年受**<span className='text-rose-600 font-bold'>酸雨</span>** (含 H₂SO₄ 98 g/mol) 侵蝕，發生化學反應：CaCO₃ + H₂SO₄ → CaSO₄ + CO₂↑ + H₂O。若某一地區每年降下**<span className='text-rose-600 font-bold'>酸雨</span>**帶給該外牆 9.8 kg 的純 H₂SO₄。(1) 每年因**<span className='text-rose-600 font-bold'>酸雨</span>**侵蝕損耗的大理石 CaCO₃ 質量為多少 kg？ (2) 每年反應釋放出的 CO₂ 氣體在 25°C, 1 atm 下為多少 L (莫耳體積 24.5 L/mol)？",
          "steps": [
            "計算 H₂SO₄ 的**<span className='text-rose-600 font-bold'>莫耳數</span>**：n(H₂SO₄) = 9,800 g / 98 g/mol = 100 mol。",
            "根據反應式係數比 1:1，消耗 100 mol CaCO₃ 並生成 100 mol CO₂。",
            "損耗大理石質量 m(CaCO₃) = 100 mol × 100 g/mol = 10,000 g = 10.0 kg。",
            "生成 CO₂ 氣體體積 V = 100 mol × 24.5 L/mol = 2450 L = 2.45 m³。"
          ],
          "answer": "(1) 每年損耗大理石 10.0 kg；(2) 釋放 CO₂ 氣體 2450 L (2.45 m³)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "某一沿海建築梁構件保護層厚度 x_cover = 35 mm (3.5 cm)。實測經過 9 年的大氣暴露後，酚酞測試顯示碳化深度已達到 x₁ = 15 mm (1.5 cm)。假設碳化遵從平方根公式 x = k · √t。(1) 求解該混凝土之碳化速率係數 k (mm/年^0.5)；(2) 預估再過多少年，**<span className='text-rose-600 font-bold'>中性化</span>**碳化界面會接觸到鋼筋表面 (即 x = 35 mm)？",
          "steps": [
            "代入 x₁ = 15 mm, t₁ = 9 年，求 k：15 = k · √9 => 15 = k · 3 => k = 5.0 mm/年^0.5。",
            "求解碳化達到 35 mm 所需的總時間 t_total：",
            "35 = 5.0 · √t_total => √t_total = 7 => t_total = 49 年。",
            "計算還需經過的年數 Δt = t_total - t₁ = 49 - 9 = 40 年。"
          ],
          "answer": "(1) 碳化速率係數 k = 5.0 mm/年^0.5；(2) 約再過 40 年後碳化深抵鋼筋表面",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "某一化工廠廢水池混凝土牆受到 0.05 M 的硫酸 (H₂SO₄) 廢水侵蝕。已知硫酸解離出 H⁺ 離子與 SO₄²⁻ 離子。(1) 試計算該 0.05 M H₂SO₄ 水溶液的 **<span className='text-rose-600 font-bold'>pH 值</span>** (假設完全解離)；(2) 分析其對混凝土結構雙重化學破壞機制。",
          "steps": [
            "H₂SO₄ 為強二元酸，完全解離式：H₂SO₄ → 2 H⁺ + SO₄²⁻。",
            "[H⁺] = 2 × 0.05 M = 0.10 M。",
            "代入 pH 公式：pH = -log(0.10) = 1.0 (強酸性)。",
            "雙重化學破壞機制：",
            "1. 酸性破壞：H⁺ 與骨架中的 Ca(OH)₂ 及 C-S-H 膠體反應，溶解極為強固的鈣離子，結構鬆散。",
            "2. 硫酸鹽膨脹：SO₄²⁻ 與水泥中鋁酸鹽反應生成 Ettringite 結晶膨脹，引發混凝土崩裂。"
          ],
          "answer": "(1) 水溶液 pH = 1.0 (強酸)；(2) 兼具 H⁺ 酸蝕溶出膠體與 SO₄²⁻ 結晶膨脹爆裂雙重破壞",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "若 25°C 時某水溶液中 [H⁺] 濃度為 1.0 × 10⁻⁴ M，試計算該溶液的 **<span className='text-rose-600 font-bold'>pH 值</span>**與 [OH⁻] 離子濃度。",
        "steps": [
          "代入 pH 計算公式：pH = -log[H⁺] = -log(1.0 × 10⁻⁴) = 4.0。",
          "利用 25°C 下水之離子積常數 Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴。",
          "解出 [OH⁻] = 1.0 × 10⁻¹⁴ / 1.0 × 10⁻⁴ = 1.0 × 10⁻¹⁰ M。",
          "溶液 pH < 7，呈酸性。"
        ],
        "answer": "pH = 4.0，[OH⁻] = 1.0 × 10⁻¹⁰ M"
      },
      "step0Prerequisites": [
        "基本化學元素符號",
        "莫耳數與化學計量"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "化學反應式未平衡即進行莫耳數計算。",
          "correctThinking": "計算前必先平衡方程式係數。",
          "trapDescription": "化學計量係數遺漏。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "化學反應本質推理模型",
          "explanation": "由原子核外電子轉移或共享推論反應路徑。"
        }
      ]
    },
    {
      "slug": "redox",
      "title": "4. 🌟 氧化還原與金屬腐蝕防蝕",
      "desc": "氧化數與電化學反應、鋼筋濕腐蝕化學機制、犧牲陽極防蝕、熱浸鍍鋅與電化學脫鹽 ECE 技術。",
      "status": "done",
      "gradeLevel": 10,
      "curriculumCode": "108-CJc",
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】鋼筋電化學腐蝕與陰極防蝕法：在混凝土中鋼筋發生電化學鏽蝕時，鐵原子失去電子發生氧化反應：Fe → Fe²⁺ + 2e⁻。防蝕工程中採用「外加電流陰極防護 (ICCP)」，其化學原理為何？",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：識別鋼筋鏽蝕本質。鋼筋陽極反應失去電子溶解形成鐵鏽。",
            "步驟 2：分析陰極防護原理。外加直流電源強制將被保護的鋼筋變成「陰極 (Cathode)」。",
            "步驟 3：總結作用。使鋼筋獲得電子抑制鐵之陽極溶解，達到永久防蝕效果。"
          ],
          "answer": "將被保護之鋼筋強制設為「陰極」，透過外加直流電子流抑制鐵之氧化溶解反應。",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "chemistry-context.webp",
        "chemistry-mechanism.webp",
        "chemistry-comparison.webp",
        "chemistry-step.webp",
        "chemistry-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "氧化還原 Reactions 與氧化數 (Oxidation Number)",
          "outlineRefs": ["CJc-V.2-1"],
          "body": "💡 **核心概念解析**：\n**<span className='text-rose-600 font-bold'>氧化還原</span>**反應伴隨電子的轉移。\n- 氧化 (Oxidation)：物質失去電子，氧化數上升；發生氧化的物質為還原劑 (Reducing Agent)。\n- 還原 (Reduction)：物質獲得電子，氧化數下降；發生還原的物質為氧化劑 (Oxidizing Agent)。\n- 氧化數判定：自由元素為 0 (如 Fe, O₂)；單原子離子等於其電荷 (如 Fe²⁺ 氧化數為 +2)；化合物中 H 通常為 +1，O 通常為 -2。"
        },
        {
          "heading": "鋼筋與建築金屬之電化學腐蝕化學 (Metal Corrosion)",
          "outlineRefs": ["CJc-V.2-1"],
          "body": "💡 **核心概念解析**：\n金屬腐蝕 (Metal Corrosion) 本質上為局部微小伏打電池的電化學**<span className='text-rose-600 font-bold'>氧化還原</span>**反應。\n- 鋼筋濕腐蝕三要素：鐵金屬、水分 (電解質)、氧氣 (O₂)。\n- 陽極反應 (Anode)：鐵金屬失去電子解離溶出：Fe → Fe²⁺ + 2e⁻ (金屬損耗)。\n- 陰極反應 (Cathode)：溶解氧在鹼性/中性環境下接受電子：O₂ + 2H₂O + 4e⁻ → 4OH⁻。\n- 鐵銹生成：Fe²⁺ 與 OH⁻ 結合生成 Fe(OH)₂，進一步被氧化生成水合三氧化二鐵 (Fe₂O₃·nH₂O，紅銹)，體積膨脹 2~6 倍，導致混凝土開裂剝落。",
          "formula": "$$\\text{陽極反應 (Anode): } Fe \\longrightarrow Fe^{2+} + 2e^-$$\\n$$\\text{陰極反應 (Cathode): } O_2 + 2H_2O + 4e^- \\longrightarrow 4OH^-$$\\n$$\\text{水合氧化鐵銹生成: } Fe^{2+} + 2OH^- \\to Fe(OH)_2 \\xrightarrow{O_2, H_2O} Fe_2O_3\\cdot nH_2O \\text{ (體積膨脹 2}\\sim 6\\text{ 倍)}$$"
        },
        {
          "heading": "金屬防蝕化學方法：犧牲陽極法與電化學防護",
          "outlineRefs": ["CJc-V.2-1", "CNc-V.2-4"],
          "body": "💡 **核心概念解析**：\n防止金屬腐蝕化學主要措施：\n1. **<span className='text-rose-600 font-bold'>犧牲陽極</span>**陰極防蝕法 (Sacrificial Anode Cathodic Protection)：利用活性高於鐵的金屬 (如鋅 Zn、鎂 Mg、鋁 Al) 與鋼材電氣連接。鋅金屬優先氧化失去電子 (Zn → Zn²⁺ + 2e⁻)，將電子供給鋼筋，使鋼筋維持在陰極保護狀態 (如**<span className='text-rose-600 font-bold'>熱浸鍍鋅</span>**鋼管)。\n2. 陰極外加電流防護法 (ICCP)：利用外加直流電源，將負極接至被保護鋼筋，正極接至不惰性陽極。\n3. 防蝕塗層：如環氧樹脂塗層鋼筋 (Epoxy-Coated Rebar)，隔絕水與氧氣到達鐵金屬表面。"
        },
        {
          "heading": "常用建築金屬之活性序列、標準電位與防蝕特性比較",
          "outlineRefs": ["CAa-V.2-5", "CJc-V.2-1"],
          "body": "💡 **核心概念解析**：\n比較常見建築金屬材料的標準還原電位 (E°)、金屬活性與工程防蝕策略。",
          "table": {
            "headers": [
              "金屬名稱",
              "元素符號",
              "標準還原電位 E° (V)",
              "化學活性與耐蝕機制",
              "建築工程典型防蝕應用"
            ],
            "rows": [
              [
                "鎂 (Magnesium)",
                "Mg",
                "-2.37 V",
                "活性極高，極易氧化",
                "埋地鋼管**<span className='text-rose-600 font-bold'>犧牲陽極</span>**塊"
              ],
              [
                "鋅 (Zinc)",
                "Zn",
                "-0.76 V",
                "活性高於鐵，氧化生成緻密 ZnO/ZnCO₃ 保護膜",
                "鋼構**<span className='text-rose-600 font-bold'>熱浸鍍鋅</span>** (Galvanized Steel)"
              ],
              [
                "碳鋼/鐵 (Iron)",
                "Fe",
                "-0.44 V (Fe²⁺/Fe)",
                "活性中等，表面銹斑疏鬆多孔無保護力",
                "主結構鋼筋、鋼骨 (需防蝕漆護層)"
              ],
              [
                "鋁 (Aluminum)",
                "Al",
                "-1.66 V",
                "活性高但表面極易形成緻密 Al₂O₃ 鈍化膜",
                "鋁合金門窗幕牆 (陽極處理 Anodizing)"
              ],
              [
                "銅 (Copper)",
                "Cu",
                "+0.34 V",
                "活性低，大氣中生成綠色鹼性碳酸銅 (綠銹)",
                "屋頂排水板、古典建築屋頂帷幕"
              ]
            ]
          }
        },
        {
          "heading": "電解與鋼筋電化學脫鹽防蝕 (Electrochemical Chloride Extraction)",
          "outlineRefs": ["CJc-V.2-1"],
          "body": "💡 **核心概念解析**：\n當海砂或鹽害導致氯離子 (Cl⁻) 滲入混凝土內部破壞鋼筋鈍化膜時，可採用電化學脫鹽技術 (ECE)。\n- 原理：利用外加電場，將混凝土內鋼筋接為陰極 (負極)，外部設置陽極網與電解質溶液。帶負電的氯離子 (Cl⁻) 在電場作用下受陰極排斥並向外部陽極遷移排出混凝土，同時陰極反應產生 OH⁻，可重新補足鋼筋周圍的鹼性保護環境。"
        },
        {
          "heading": "異種金屬電位差腐蝕 (Galvanic Corrosion) 與工程隔離對策",
          "outlineRefs": ["CNc-V.2-4"],
          "body": "💡 **核心概念解析**：\n當兩種標準電位差異較大的金屬（如鋁與碳鋼、銅與鐵）在電解質（如雨水、潮濕空氣）存在下直接接觸時，電位較負的活潑金屬將成為陽極並發生急劇加速腐蝕，此現象稱為**<span className='text-rose-600 font-bold'>電位差腐蝕</span>** (Galvanic Corrosion)。",
          "formula": "$$\\Delta E^\\circ = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} \\quad (\\Delta E^\\circ > 0 \\text{ 驅動自發腐蝕)}$$",
          "steps": [
            "防護一（絕緣隔離）：在異種金屬鎖固接觸面裝設氯丁橡膠墊圈或 Teflon 絕緣套管。",
            "防護二（塗層防護）：在陰極與陽極界面同時塗佈防腐蝕環氧塗料。",
            "防護三（面積比控制）：避免「大陰極-小陽極」的極危險組合 (如以鐵螺絲鎖固銅板)。"
          ]
        },
        {
          "heading": "鋼構熱浸鍍鋅 (Hot-Dip Galvanizing) 雙重化學保護機制",
          "outlineRefs": ["CJc-V.2-1"],
          "body": "💡 **核心概念解析**：\n**<span className='text-rose-600 font-bold'>熱浸鍍鋅</span>**是將鋼構件浸入 450°C 熔融鋅液中。鋅與鐵表面發生擴散反應生成多層鋅鐵合金層 (Gamma, Delta, Zeta 相) 及純鋅外層 (Eta 相)。",
          "table": {
            "headers": [
              "鍍鋅保護層階段",
              "保護化學機制",
              "作用過程與防蝕壽命"
            ],
            "rows": [
              [
                "第一層保護：屏障隔離 (Barrier)",
                "緻密鋅鐵合金層隔絕水與氧氣",
                "鋅大氣中氧化生成偏鹼性碳酸鋅 ZnCO₃ 緻密保護膜"
              ],
              [
                "第二層保護：**<span className='text-rose-600 font-bold'>犧牲陽極</span>** (Sacrificial)",
                "當鍍層劃傷露出鐵基材時發生",
                "鋅電位 (-0.76V) 較鐵 (-0.44V) 更負，鋅優先腐蝕保護鐵"
              ],
              [
                "大氣耐候年限",
                "腐蝕速率 1 ~ 3 μm/年",
                "標準 85 μm 鍍鋅層在大氣環境可防銹 30 ~ 50 年以上"
              ]
            ]
          }
        },
        {
          "heading": "化學電池原理與常見電池 (Electrochemical Cells)",
          "outlineRefs": ["CNc-V.2-4", "CNc-V.2-5", "CNc-V.2-6"],
          "body": "**化學電池**把化學能轉換成電能。活性較大的金屬當**負極**（陽極），發生氧化而放出電子；活性較小者當**正極**（陰極），發生還原。電子經外電路由負極流向正極，**鹽橋**則讓離子移動、維持兩杯溶液的電中性。\n**鋅銅電池**：負極 Zn → Zn²⁺ + 2e⁻；正極 Cu²⁺ + 2e⁻ → Cu；標準狀態電壓約 1.10 V。\n**常見電池**：乾電池（鋅錳電池，約 1.5 V）、鹼性電池（以 KOH 為電解質，約 1.5 V，容量較大）、鉛蓄電池（汽車用，每格約 2 V，可充電）、鋰離子電池（約 3.6–3.7 V，可充電，用於手機與建築儲能系統）、燃料電池（H₂ 與 O₂ 反應生成水並發電）。\n**與腐蝕的關係**：鋼筋生鏽其實就是在混凝土中「意外形成」的小電池；犧牲陽極法則是刻意用活性大的鋅、鎂當負極保護鋼材。\n**實驗**：以鹽水或檸檬汁為電解質，插入銅片與鋅片，即可組成電池點亮 LED。\n⚠️ 易錯：電池中「陽極」發生氧化，在原電池中是負極；不要把「陽極」和「正極」混為一談。",
          "formula": "負極（陽極）：Zn → Zn²⁺ + 2e⁻\n正極（陰極）：Cu²⁺ + 2e⁻ → Cu\n全反應：Zn + Cu²⁺ → Zn²⁺ + Cu（約 1.10 V）",
          "table": {
            "headers": ["電池", "電壓（約）", "可否充電", "用途"],
            "rows": [
              ["乾電池（鋅錳）", "1.5 V", "否", "遙控器、手電筒"],
              ["鹼性電池", "1.5 V", "否", "耗電量較大的小家電"],
              ["鉛蓄電池", "2 V／格", "可", "汽車、緊急照明"],
              ["鋰離子電池", "3.6–3.7 V", "可", "手機、電動車、建築儲能"],
              ["燃料電池", "依堆疊", "持續供應燃料", "備用電源、氫能車"]
            ]
          }
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "在化學反應式 Zn + Cu²⁺ → Zn²⁺ + Cu 中，(1) 何者為還原劑？ (2) 發生氧化反應的元素氧化數如何改變？",
          "steps": [
            "分析各物質氧化數：Zn (單質) 氧化數為 0，變為 Zn²⁺ (氧化數 +2)；Cu²⁺ (氧化數 +2) 變為 Cu (單質，氧化數 0)。",
            "Zn 失去 2 個電子，氧化數由 0 增加至 +2，發生氧化反應。",
            "使他物還原且自身氧化的物質稱為還原劑，故 Zn 為還原劑。",
            "Cu²⁺ 獲得電子發生還原反應，為氧化劑。"
          ],
          "answer": "(1) 還原劑為 Zn（鋅金屬）；(2) 氧化數由 0 增加至 +2",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "一伏打電池由鋅半電池 (Zn²⁺/Zn, E° = -0.76 V) 與銅半電池 (Cu²⁺/Cu, E° = +0.34 V) 組成。(1) 哪一個金屬電極為陽極 (Anode)？ (2) 該電池的標準電動勢 E°cell 為多少伏特 (V)？",
          "steps": [
            "標準還原電位較負者易失去電子發生氧化反應，故 Zn 極為陽極 (Anode)；Cu 極為陰極 (Cathode)。",
            "代入標準電池電位公式 E°cell = E°cathode - E°anode：",
            "E°cell = (+0.34 V) - (-0.76 V) = 0.34 + 0.76 = +1.10 V。"
          ],
          "answer": "(1) 陽極為 Zn (鋅極)；(2) 標準電池電位 E°cell = +1.10 V",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "鋼筋在含氯離子 (Cl⁻) 海水環境下的電化學腐蝕中，陽極鐵金屬溶解反應為 Fe → Fe²⁺ + 2e⁻。若某地下結構鋼筋網因腐蝕作用每小時損失 55.85 g 的鐵 (Fe，原子量 55.85 g/mol)。(1) 此腐蝕過程產生的總腐蝕電流 I 約為多少安培 (A)？（法拉第常數 F = 96,500 C/mol）(2) 若採用外加陰極防蝕法 (CP)，欲完全抵銷此腐蝕電流，需提供多少 A 的反向保護電流？",
          "steps": [
            "計算每小時溶解的鐵**<span className='text-rose-600 font-bold'>莫耳數</span>**：n(Fe) = 55.85 g / 55.85 g/mol = 1.0 mol/h。",
            "每溶解 1 mol Fe 會釋放 2 mol 電子 (n_e = 2 × 1.0 = 2.0 mol e⁻/h)。",
            "計算每小時流過的電量 Q：Q = 2.0 mol × 96,500 C/mol = 193,000 庫侖 (C)。",
            "時間 t = 1 小時 = 3600 秒。",
            "(1) 計算腐蝕電流 I = Q / t = 193,000 C / 3600 s ≈ 53.61 A。",
            "(2) 陰極防護電流必須至少等於或大於陽極腐蝕電流才能完全阻止金屬溶解，故需提供 ≥ 53.61 A 的保護電流。"
          ],
          "answer": "(1) 腐蝕電流 I ≈ 53.61 A；(2) 需提供至少 53.61 A 的外加陰極保護電流",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一地下鋼管採用鎂塊 (Magnesium Anode，原子量 24.31 g/mol) 作為**<span className='text-rose-600 font-bold'>犧牲陽極</span>**。鎂在電化學保護過程中發生氧化解離：Mg → Mg²⁺ + 2e⁻。若保護系統維持 0.50 A 的保護電流持續運行 1 年 (365 天 = 31,536,000 秒)。(已知法拉第常數 F = 96,500 C/mol)。求：(1) 1 年內鎂陽極流過總電量 Q (C)；(2) 1 年內消耗的鎂金屬質量為多少 kg？",
          "steps": [
            "計算 1 年流過總電量 Q = I × t = 0.50 A × 31,536,000 s = 15,768,000 庫侖 (C)。",
            "計算釋放電子的**<span className='text-rose-600 font-bold'>莫耳數</span>** n(e⁻) = Q / F = 15,768,000 / 96,500 ≈ 163.40 mol e⁻。",
            "由反應式可知 1 mol Mg 釋放 2 mol e⁻，故消耗 Mg **<span className='text-rose-600 font-bold'>莫耳數</span>** n(Mg) = 163.40 / 2 = 81.70 mol。",
            "計算消耗 Mg 質量 m = 81.70 mol × 24.31 g/mol ≈ 1986.1 g ≈ 1.986 kg。"
          ],
          "answer": "(1) 總電量 Q = 15,768,000 C；(2) 1 年內消耗鎂金屬約 1.986 kg",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一幕牆工程中，施工人員誤將鋁合金板 (Al, E° = -1.66V) 直接使用碳鋼螺絲 (Fe, E° = -0.44V) 鎖固，且未放置絕緣墊片。雨水滲入後形成局部電池。(1) 哪一種金屬會作為陽極發生快速腐蝕溶解爆裂？ (2) 寫出陽極與陰極的電化學半反應式。",
          "steps": [
            "鋁合金 (E° = -1.66V) 還原電位比碳鋼螺絲 (-0.44V) 更負，故鋁合金成為陽極 (Anode)，碳鋼螺絲成為陰極 (Cathode)。",
            "陽極反應 (鋁金屬溶解)：Al → Al³⁺ + 3e⁻。",
            "陰極反應 (雨水溶解氧接受電子)：O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻。",
            "結論：鋁板在螺絲孔周圍會迅速腐蝕穿孔失效，必須加裝 EPDM 絕緣墊片隔絕。"
          ],
          "answer": "(1) 鋁合金板成為陽極發生急劇腐蝕；(2) 陽極 Al → Al³⁺ + 3e⁻，陰極 O₂ + 2H₂O + 4e⁻ → 4OH⁻",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "某一鋼結構廠房塗佈**<span className='text-rose-600 font-bold'>熱浸鍍鋅</span>**層，鍍鋅量為 600 g/m² (雙面，單面厚度約 85 μm)。若在工業污染大氣環境下，鋅金屬腐蝕速率為每 m² 每年損失 15 g 鋅 (相當於約 2.1 μm/年)。(1) 該**<span className='text-rose-600 font-bold'>熱浸鍍鋅</span>**層理論上可在該環境下防銹保護多少年？ (2) 鍍鋅層保護鋼材的主要化學機制為何？",
          "steps": [
            "計算單面鍍鋅量 m_single = 600 / 2 = 300 g/m²。",
            "計算保護年限 t = 300 (g/m²) / 15 (g/m²·年) = 20 年。",
            "鍍鋅層化學機制：兼具屏障隔離 (生成緻密 ZnCO₃ 絕緣膜) 與**<span className='text-rose-600 font-bold'>犧牲陽極</span>** (鋅電位較負，優先腐蝕供給電子供給鋼材) 雙重保護。"
          ],
          "answer": "(1) 可理論防銹保護 20 年；(2) 兼具「屏障隔離」與「**<span className='text-rose-600 font-bold'>犧牲陽極</span>**陰極保護」雙重化學機制",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "在化學反應式 Zn + Cu²⁺ → Zn²⁺ + Cu 中，(1) 何者為還原劑？ (2) 發生氧化反應的元素氧化數如何改變？",
        "steps": [
          "分析各物質氧化數：Zn (單質) 氧化數為 0，變為 Zn²⁺ (氧化數 +2)；Cu²⁺ (氧化數 +2) 變為 Cu (單質，氧化數 0)。",
          "Zn 失去 2 個電子，氧化數由 0 增加至 +2，發生氧化反應。",
          "使他物還原且自身氧化的物質稱為還原劑，故 Zn 為還原劑。",
          "Cu²⁺ 獲得電子發生還原反應，為氧化劑。"
        ],
        "answer": "(1) 還原劑為 Zn（鋅金屬）；(2) 氧化數由 0 增加至 +2"
      },
      "step0Prerequisites": [
        "基本化學元素符號",
        "莫耳數與化學計量"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "化學反應式未平衡即進行莫耳數計算。",
          "correctThinking": "計算前必先平衡方程式係數。",
          "trapDescription": "化學計量係數遺漏。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "化學反應本質推理模型",
          "explanation": "由原子核外電子轉移或共享推論反應路徑。"
        }
      ]
    },
    {
      "slug": "organic-chemistry",
      "title": "5. ⚡ 有機化學與建築高分子樹脂塗料",
      "desc": "有機化合物分類、高分子樹脂 (Epoxy, PU, Acrylic, Silicone) 化學、VOCs 逸散與高分子光降解/水解老化。",
      "status": "done",
      "gradeLevel": 10,
      "curriculumCode": "108-CJf",
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】高分子建材環氧樹脂 (Epoxy) 固化化學：環氧樹脂由環氧單體與胺類固化劑 (Amine Hardener) 混合，其分子間形成網狀交聯結構之反應類型屬於何者？固化後是否可再次加熱熔融？",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：辨析高分子固化類型。環氧官能基與胺基發生交聯**<span className='text-rose-600 font-bold'>加成聚合</span>**反應。",
            "步驟 2：區分**<span className='text-rose-600 font-bold'>熱塑性</span>**與**<span className='text-rose-600 font-bold'>熱固性</span>**。網狀交聯高分子屬於「**<span className='text-rose-600 font-bold'>熱固性</span>**高分子 (Thermosetting Polymer)」。",
            "步驟 3：判定受熱行為。**<span className='text-rose-600 font-bold'>熱固性</span>**高分子受熱不熔融只會在高溫下炭化分解。"
          ],
          "answer": "屬於交聯**<span className=\"text-rose-600 font-bold\">加成聚合</span>**反應；固化後屬於「**<span className=\"text-rose-600 font-bold\">熱固性</span>**高分子」，無法再次加熱熔融。",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "chemistry-context.webp",
        "chemistry-mechanism.webp",
        "chemistry-comparison.webp",
        "chemistry-step.webp",
        "chemistry-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "有機烴類分類、命名與同分異構物",
          "outlineRefs": ["CJf-V.2-1", "CJf-V.2-2", "CJf-V.2-3"],
          "body": "💡 **核心概念解析**：\n有機化學以碳骨架為核心。\n- 烴類 (Hydrocarbons)：僅由碳與氫組成的化合物。\n  1. 烷類 (Alkane)：全單鍵飽和烴，通式 CnH₂n⁺₂ (如甲烷 CH₄、丙烷 C₃H₈)。\n  2. 烯類 (Alkene)：含 C=C 雙鍵不飽和烴，通式 CnH₂n (如乙烯 C₂H₄)。\n  3. 炔類 (Alkyne)：含 C≡C 三鍵不飽和烴，通式 CnH₂n⁻₂ (如乙炔 C₂H₂，用於氣切焊接)。\n  4. 芳香烴 (Aromatic Hydrocarbons)：含苯環結構 (如苯 C₆H₆、甲苯 C₇H₈)，為傳統油性塗料主要溶劑，具毒性與揮發性。",
          "formula": "$$\\text{烷類 (Alkane): } C_n H_{2n+2} \\quad|\\quad \\text{烯類 (Alkene): } C_n H_{2n} \\quad|\\quad \\text{炔類 (Alkyne): } C_n H_{2n-2}$$"
        },
        {
          "heading": "建築高分子塗料與樹脂 (Paints & Resins) 的化學合成與結構",
          "outlineRefs": ["CJf-V.2-6", "CMc-V.2-4"],
          "body": "💡 **核心概念解析**：\n高分子化合物由小分子單體 (Monomer) 經聚合反應 (Polymerization) 形成巨量分子。\n- **<span className='text-rose-600 font-bold'>加成聚合</span>** (Addition Polymerization)：單體含雙鍵開環加成，無副產物 (如聚氯乙烯 PVC、聚乙烯 PE、丙烯酸樹脂 Acrylics)。\n- **<span className='text-rose-600 font-bold'>縮合聚合</span>** (Condensation Polymerization)：單體官能基反應釋放小分子如水或醇 (如聚酯 Polyester、酚酚樹脂)。\n- **<span className='text-rose-600 font-bold'>熱塑性</span>** (Thermoplastic) vs **<span className='text-rose-600 font-bold'>熱固性</span>** (Thermosetting)：\n  1. **<span className='text-rose-600 font-bold'>熱塑性</span>**：線狀或支鏈結構，加熱可軟化重複加工 (如 PVC 水管、PE 膜)。\n  2. **<span className='text-rose-600 font-bold'>熱固性</span>**：高交聯三維網狀結構，加熱不軟化，化學強度高 (如環氧樹脂 Epoxy、聚氨酯 PU 防水材)。"
        },
        {
          "heading": "塗料中揮發性有機化合物 (VOCs) 的化學逸散與環境健康影響",
          "outlineRefs": ["CMe-V.2-2"],
          "body": "💡 **核心概念解析**：\n塗料與膠粘劑施工後，有機溶劑經由擴散與蒸發作用釋放至室內空間。\n- 常見有害 **<span className='text-rose-600 font-bold'>VOCs</span>** 化學成分：\n  1. **<span className='text-indigo-600 font-bold'>甲醛 (HCHO)</span>**：來自尿醛樹脂 (UF) 膠合板、木工膠，具刺激性與致癌性。\n  2. 苯、甲苯、二甲苯 (BTEX)：油性漆稀釋劑，損害中樞神經與造血機能。\n  3. 游離異氰酸酯 (TDI/MDI)：低品質 PU 塗料殘留單體，具強烈呼吸道誘發過敏性。"
        },
        {
          "heading": "常用建築樹脂塗料 (Epoxy, PU, Acrylic, Silicone) 之化學與物理比較",
          "outlineRefs": ["CMc-V.2-4"],
          "body": "💡 **核心概念解析**：\n比較建築常用四種高分子樹脂塗料的化學結構特徵、力學彈性、耐候性與建築應用場合。",
          "table": {
            "headers": [
              "樹脂塗料種類",
              "主要官能基/結構",
              "伸長率與彈性",
              "耐紫外光 (UV) 性能",
              "最佳建築應用場域"
            ],
            "rows": [
              [
                "環氧樹脂 (Epoxy)",
                "環氧基 (-CHOCH₂) + 胺基",
                "極低 (硬脆，拉伸伸長率 < 5%)",
                "差 (戶外易粉化黃變)",
                "室內停車場地坪、結構耐磨灌注膠"
              ],
              [
                "聚氨酯 (PU)",
                "胺基甲酸酯基 (-NHCOO-)",
                "極高 (高彈性，伸長率 200~500%)",
                "中等 (需耐黃變型 aliphatic PU)",
                "屋頂頂樓防水膜、伸縮縫填縫膠"
              ],
              [
                "丙烯酸樹脂 (Acrylic)",
                "丙烯酸酯基 (-COOR)",
                "中等 (彈性乳膠漆具微裂縫遮蓋力)",
                "極佳 (不易黃變或光化學降解)",
                "外牆耐候水性乳膠漆、防水底漆"
              ],
              [
                "矽酮 (Silicone / 矽利康)",
                "矽氧烷主鏈 (-Si-O-Si-)",
                "高彈性與高耐溫差性",
                "極佳 (高健結能，超強耐候)",
                "帷幕牆玻璃填縫膠、外牆石材撥水劑"
              ]
            ]
          }
        },
        {
          "heading": "有機高分子材料的高分子老化（UV 紫外光降解與水解）機制",
          "outlineRefs": ["CMc-V.2-4"],
          "body": "💡 **核心概念解析**：\n建築高分子外牆漆與防水膜在戶外陽光與雨水作用下易發生**<span className='text-rose-600 font-bold'>光化學老化</span>**與水解降解。\n- 光降解 (Photo-degradation)：太陽光中 UV 紫外光子能量高於碳-碳單鍵 (C-C) 鍵能，引發高分子自由基斷鏈化學反應，導致塗膜開裂、粉化 (Chalking) 與變色。\n- 水解作用 (Hydrolysis)：聚酯或酯類高分子在酸鹼水溶液作用下發生酯鍵斷裂，導致彈性結構破壞。"
        },
        {
          "heading": "建築塑膠管材 (PVC, CPVC, PEX, HDPE) 化學結構與工程特徵",
          "outlineRefs": ["CMc-V.2-4"],
          "body": "💡 **核心概念解析**：\n現代建築給排水與地暖系統廣泛採用塑膠高分子管材替代傳統金屬管，以防範生銹與結垢。",
          "table": {
            "headers": [
              "管材名稱",
              "化學結構與名稱",
              "耐溫與耐壓範圍",
              "主要建築給排水用途"
            ],
            "rows": [
              [
                "PVC-U 管",
                "未增塑聚氯乙烯",
                "耐溫 < 60°C，耐化學腐蝕",
                "冷水管、排水管、電線配線管"
              ],
              [
                "CPVC 管",
                "氯化聚氯乙烯 (高含氯量)",
                "耐溫可達 95°C，阻燃性高",
                "熱水給水管、消防撒水塑膠幹管"
              ],
              [
                "PEX 管",
                "交聯聚乙烯 (三維網狀)",
                "耐溫 -40°C ~ 110°C，極高柔韌性",
                "冷熱水管、地板輻射採暖管 (地暖)"
              ],
              [
                "HDPE 管",
                "高密度聚乙烯",
                "耐韌衝擊、耐地層錯動",
                "市政大口徑給水管、地下雨水排水管"
              ]
            ]
          }
        },
        {
          "heading": "阻燃劑化學 (Flame Retardants) 與建築高分子防火等級",
          "outlineRefs": [],
          "body": "💡 **核心概念解析**：\n有機高分子建材具易燃性。添加**<span className='text-rose-600 font-bold'>阻燃劑</span>**可提高極限氧指數 (LOI > 26)。阻燃化學機制包括：\n1. 吸熱冷凝機制：氫氧化鋁 Al(OH)₃ 或氫氧化鎂 Mg(OH)₂ 受熱分解釋放水蒸氣並吸收大量熱能。\n2. 膨脹炭化層機制：磷氮系**<span className='text-rose-600 font-bold'>阻燃劑</span>**受熱形成緻密多孔焦炭層 (Char Layer)，隔絕氧氣與熱量傳導。",
          "formula": "$$2Al(OH)_3 \\xrightarrow{\\Delta \\ge 200^\\circ\\text{C}} Al_2O_3 + 3H_2O\\uparrow \\quad (\\Delta H = +1050 \\text{ J/g 吸熱阻燃)}$$"
        },
        {
          "heading": "生活中的化學：肥皂與清潔劑、衣料纖維、食品與藥物 (Chemistry in Daily Life)",
          "outlineRefs": ["CMc-V.2-1", "CMc-V.2-2", "CMc-V.2-3", "CMc-V.2-5", "CMc-V.2-8"],
          "body": "**肥皂**：油脂與氫氧化鈉作用生成脂肪酸鈉（肥皂）與甘油，稱為**皂化反應**。肥皂分子一端親水、一端親油，在水中形成**微胞**把油污包住而洗去。合成清潔劑在硬水中仍能去污，但部分成分不易被微生物分解。\n**衣料纖維**：天然纖維包括棉、麻（纖維素）與羊毛、蠶絲（蛋白質）；合成纖維如耐綸、聚酯，強度高、易乾。工地防護衣常使用阻燃或高強度纖維。\n**食品與化學**：醣類、蛋白質、油脂提供能量與身體所需材料，維生素與礦物質調節生理機能；食品添加物必須依法定種類與用量使用。\n**藥物與化學**：阿斯匹靈可止痛退燒，抗生素可抑制細菌；藥物須依醫囑使用，濫用抗生素會產生抗藥性。\n**鼻涕蟲實驗**：在聚乙烯醇（PVA）膠水中加入硼砂溶液，分子鏈之間形成交聯，變成黏彈性的高分子，說明「交聯」會使高分子變稠、變有彈性。\n⚠️ 易錯：肥皂在硬水中會與 Ca²⁺、Mg²⁺ 生成不溶的沉澱（皂垢），因此去污力下降。",
          "formula": "油脂 + 3NaOH → 3 脂肪酸鈉（肥皂） + 甘油",
          "table": {
            "headers": ["主題", "關鍵化學觀念", "生活例子"],
            "rows": [
              ["肥皂", "皂化反應、微胞", "洗手去油污"],
              ["合成清潔劑", "硬水中仍可去污", "洗衣精、洗碗精"],
              ["纖維", "纖維素、蛋白質、合成高分子", "棉 T 恤、羊毛衣、聚酯防護衣"],
              ["高分子交聯", "PVA 與硼砂形成交聯", "鼻涕蟲實驗"],
              ["藥物", "有效成分、劑量與抗藥性", "止痛藥、抗生素"]
            ]
          }
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "化學式為 C₄H₁₀ 的烴類化合物：(1) 名稱為何？屬於烷、烯、炔中的哪一類？ (2) 它共有幾種同分異構物？",
          "steps": [
            "將碳數 n = 4 代入通式：2n + 2 = 2(4) + 2 = 10。符合 CnH₂n⁺₂ 通式，屬於「烷類」。",
            "碳數為 4 的烷類稱為「丁烷」。",
            "繪製同分異構物結構：",
            "- 正丁烷 (n-butane)：CH₃-CH₂-CH₂-CH₃ (直鏈)",
            "- 異丁烷 / 2-甲基丙烷 (isobutane)：CH(CH₃)₃ (支鏈)",
            "故共有 2 種同分異構物。"
          ],
          "answer": "(1) 丁烷，屬於飽和烷類；(2) 共有 2 種同分異構物 (正丁烷、異丁烷)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "聚氯乙烯 (PVC，單體為氯乙烯 C₂H₃Cl，莫耳質量 62.5 g/mol) 是常用排水管材料。(1) 氯乙烯合成 PVC 的反應屬於**<span className='text-rose-600 font-bold'>加成聚合</span>**還是**<span className='text-rose-600 font-bold'>縮合聚合</span>**？ (2) 若某一 PVC 排水管片段平均聚合度 n = 2000，則該高分子鏈的平均莫耳質量為多少 g/mol (及 kg/mol)？",
          "steps": [
            "氯乙烯單體含 C=C 雙鍵，開環加成結合形成高分子，反應過程無小分子脫去，屬於「**<span className='text-rose-600 font-bold'>加成聚合</span>**反應」。",
            "計算平均莫耳質量 M = n × M_monomer = 2000 × 62.5 g/mol = 125,000 g/mol = 125 kg/mol。"
          ],
          "answer": "(1) 屬於**<span className='text-rose-600 font-bold'>加成聚合</span>**反應；(2) 平均莫耳質量 M = 125,000 g/mol (125 kg/mol)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "雙酚 A 型環氧樹脂 (Epoxy Resin) 常用於地坪與鋼筋防蝕。若某雙酚 A (C₁₅H₁₆O₂，莫耳質量 228.29 g/mol) 與環氧氯丙烷 (C₃H₅ClO，莫耳質量 92.53 g/mol) 進行**<span className='text-rose-600 font-bold'>縮合聚合</span>**反應，理論上 228.29 kg 雙酚 A 與 185.06 kg 環氧氯丙烷完全反應可生成 340.4 kg 環氧樹脂低聚物並脫去 73 kg 的 HCl。試計算：(1) 該反應的原子經濟性 (Atom Economy %)；(2) 若以此環氧樹脂塗布於鋼筋，其抗 **<span className='text-rose-600 font-bold'>VOCs</span>** 逸散主要原因為何？",
          "steps": [
            "(1) 原子經濟性公式 = (期望產物的莫耳質量 / 所有反應物莫耳質量總和) × 100%。",
            "反應物總質量 = 228.29 kg (雙酚 A) + 185.06 kg (環氧氯丙烷) = 413.35 kg。",
            "期望產物 (環氧樹脂) 質量 = 340.4 kg。",
            "計算 Atom Economy = (340.4 kg / 413.35 kg) × 100% ≈ 82.35%。",
            "(2) 環氧樹脂為雙組份開環交聯固化高分子，固化後形成三維**<span className='text-rose-600 font-bold'>熱固性</span>**網狀結構，無揮發性溶劑添加，故 **<span className='text-rose-600 font-bold'>VOCs</span>** 逸散極低。"
          ],
          "answer": "(1) 原子經濟性 ≈ 82.35%；(2) 固化形成高交聯密度之**<span className='text-rose-600 font-bold'>熱固性</span>**三維網狀結構且無溶劑成分，故 VOC 逸散極低",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "聚氨酯 (PU) 防水塗料由二異氰酸酯 (TDI，化學式 C₉H₆N₂O₂，莫耳質量 174 g/mol) 與聚二醇 (Polyol，莫耳質量 2000 g/mol) **<span className='text-rose-600 font-bold'>加成聚合</span>**而成。已知 174 kg TDI 與 2000 kg Polyol 恰好完加成反應生成 2174 kg PU 彈性體。(1) 計算此**<span className='text-rose-600 font-bold'>加成聚合</span>**反應的原子經濟性 (Atom Economy %)；(2) 若 PU 防水膜施工中遇水，TDI 會與水發生產生 CO₂ 氣泡發泡，寫出反應危害。",
          "steps": [
            "**<span className='text-rose-600 font-bold'>加成聚合</span>**反應無任何副產物生成，期望產物質量等於所有反應物質量之和 (2174 kg / 2174 kg)。",
            "原子經濟性 Atom Economy = (2174 / 2174) × 100% = 100%。",
            "TDI 與水反應化學式：R-NCO + H₂O → R-NH₂ + CO₂↑。釋放出的 CO₂ 氣體會留在 PU 防水膜內形成針孔與氣泡，大幅降低防水破壞強度。"
          ],
          "answer": "(1) 原子經濟性 = 100% (完美加成)；(2) 與水反應釋放 CO₂ 氣體會致使防水膜起泡穿孔失效",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一有機外牆防水膜塗層受太陽光中 300 nm 紫外光 (UV) 照射。已知 300 nm 光子的能量約為 398 kJ/mol。若該高分子主鏈中的 C-C 單鍵鍵能為 348 kJ/mol，C-O 單鍵鍵能為 358 kJ/mol。(1) 說明為何 300 nm 紫外光能造成高分子塗膜開裂粉化；(2) 建築工程上應添加何種化學添加劑以抑制此老化？",
          "steps": [
            "比較能量：300 nm 紫外光光子能量 (398 kJ/mol) 顯著高於高分子 C-C 單鍵 (348 kJ/mol) 及 C-O 單鍵 (358 kJ/mol) 之化學鍵能。",
            "當高分子吸收 UV 光子後，光子能量足以直接打斷 C-C 主鏈形成高活性自由基，引發自由基連鎖斷鏈分解，使塗膜粉化剝落。",
            "工程防護：添加「紫外光吸收劑 (UVA，如二苯甲酮類)」及「受阻胺光穩定劑 (HALS)」，捕捉自由基並將光能轉化為無害熱能。"
          ],
          "answer": "(1) 紫外光光子能量 (398 kJ/mol) 大於高分子 C-C 鍵能 (348 kJ/mol)，直接打斷高分子主鏈；(2) 應添加 UVA 紫外光吸收劑與 HALS 光穩定劑",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "某防火高分子隔熱板中添加了 39% 重量的氫氧化鋁 Al(OH)₃ (莫耳質量 78 g/mol) 作為無煙**<span className='text-rose-600 font-bold'>阻燃劑</span>**。當火災發生達 250°C 時，Al(OH)₃ 發生熱分解：2 Al(OH)₃ → Al₂O₃ + 3 H₂O↑ (每分解 1 mol 吸收 105 kJ 熱量)。若 10 kg 的此防火板受熱分解：(1) 板內含有多少 kg 的 Al(OH)₃ (及**<span className='text-rose-600 font-bold'>莫耳數</span>**)？ (2) 完全分解可吸收多少 kJ 的火場熱量？",
          "steps": [
            "計算板內 Al(OH)₃ 質量 m = 10 kg × 39% = 3.9 kg = 3,900 g。",
            "計算 Al(OH)₃ **<span className='text-rose-600 font-bold'>莫耳數</span>** n = 3,900 g / 78 g/mol = 50 mol。",
            "根據反應式 2 mol Al(OH)₃ 吸收 105 kJ 熱量，故每 mol 吸收 52.5 kJ。",
            "總吸收熱量 Q = 50 mol × 52.5 kJ/mol = 2,625 kJ。",
            "結論：吸收 2,625 kJ 熱量並釋放 1.35 kg 水蒸氣稀釋氧氣，具強大阻燃效果。"
          ],
          "answer": "(1) 含有 3.9 kg Al(OH)₃ (50 mol)；(2) 完全分解可吸收 2,625 kJ 火場熱量",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "化學式為 C₄H₁₀ 的烴類化合物：(1) 名稱為何？屬於烷、烯、炔中的哪一類？ (2) 它共有幾種同分異構物？",
        "steps": [
          "將碳數 n = 4 代入通式：2n + 2 = 2(4) + 2 = 10。符合 CnH₂n⁺₂ 通式，屬於「烷類」。",
          "碳數為 4 的烷類稱為「丁烷」。",
          "繪製同分異構物結構：",
          "- 正丁烷 (n-butane)：CH₃-CH₂-CH₂-CH₃ (直鏈)",
          "- 異丁烷 / 2-甲基丙烷 (isobutane)：CH(CH₃)₃ (支鏈)",
          "故共有 2 種同分異構物。"
        ],
        "answer": "(1) 丁烷，屬於飽和烷類；(2) 共有 2 種同分異構物 (正丁烷、異丁烷)"
      },
      "step0Prerequisites": [
        "基本化學元素符號",
        "莫耳數與化學計量"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "化學反應式未平衡即進行莫耳數計算。",
          "correctThinking": "計算前必先平衡方程式係數。",
          "trapDescription": "化學計量係數遺漏。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "化學反應本質推理模型",
          "explanation": "由原子核外電子轉移或共享推論反應路徑。"
        }
      ]
    },
    {
      "slug": "environmental-chemistry",
      "title": "6. 📚 環境化學與建材碳足跡",
      "desc": "大氣與水體環境化學、溫室效應、建材碳足跡 LCA、固碳混凝土、低碳水泥與室內空氣品質 IAQ。",
      "status": "done",
      "gradeLevel": 10,
      "curriculumCode": "108-CMe",
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】**<span className=\"text-rose-600 font-bold\">光觸媒</span>** TiO2 降解室內甲醛化學：奈米**<span className=\"text-rose-600 font-bold\">二氧化鈦</span>** (TiO2) **<span className=\"text-rose-600 font-bold\">光觸媒</span>**在紫外光照射下產生羥基自由基 (·OH)，將室內**<span className=\"text-indigo-600 font-bold\">甲醛 (HCHO)</span>** 催化氧化為無害產物。請寫出甲醛完全催化氧化的化學反應產物。",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：分析甲醛化學元素成分。甲醛分子式為 HCHO (含 C, H, O)。",
            "步驟 2：了解強氧化劑 ·OH 作用。將碳水化合物完全氧化。",
            "步驟 3：確定完全氧化產物。最終轉化為水 (H2O) 與二氧化碳 (CO2)。"
          ],
          "answer": "完全氧化產物為「二氧化碳 (CO2)」與「水 (H2O)」。",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "chemistry-context.webp",
        "chemistry-mechanism.webp",
        "chemistry-comparison.webp",
        "chemistry-step.webp",
        "chemistry-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "溫室效應 (Greenhouse Effect) 與大氣化學",
          "outlineRefs": ["CMe-V.2-2", "CNb-V.2-1"],
          "body": "💡 **核心概念解析**：\n大氣層中部分氣體能吸收地表反射的長波紅外線輻射，阻止熱量散逸至外太空，維繫地表平均溫度，此現象稱為**<span className='text-rose-600 font-bold'>溫室效應</span>**。\n- 主要溫室氣體與全球暖化潛勢 (GWP, 以 CO₂ = 1 為基準)：\n  1. 二氧化碳 (CO₂)：GWP = 1，大氣中總量最大，主要源自化石燃料燃燒與水泥煅燒。\n  2. 甲烷 (CH₄)：GWP ≈ 28~36，源自有機廢棄物堆肥、天然氣開採與畜牧。\n  3. 氧化亞氮 (N₂O)：GWP ≈ 265~298，源自化肥使用與工業排放。\n  4. 氟氯碳化物 (CFCs / HFCs)：GWP 可高達數千至上萬，源自冷氣空調制冷劑與保溫發泡劑。"
        },
        {
          "heading": "建築材料碳足跡 (Carbon Footprint of Building Materials) 與化學排放",
          "outlineRefs": ["CNa-V.2-1"],
          "body": "💡 **核心概念解析**：\n建築產業碳排放占全球總碳排約 39%，其中建材製造階段的「**<span className='text-rose-600 font-bold'>隱含碳</span>** (Embodied Carbon)」占極大比例。\n- 建材**<span className='text-rose-600 font-bold'>碳足跡</span>** (Carbon Footprint)：指產品在整個生命週期 (LCA) 或「搖籃到大門 (Cradle-to-Gate)」階段產生的溫室氣體排放總量 (以 kg CO₂e 表示)。\n- 水泥製造的化學碳排放：在石灰石煅燒過程中發生分解反應：CaCO₃ (石灰石) → CaO (生石灰) + CO₂↑。此化學脫碳反應產生的 CO₂ 占水泥生產總碳排的 60% 以上，其餘 40% 源自煅燒高溫 (1450°C) 燃料燃燒。",
          "formula": "$$\\text{碳排放量 (kg CO}_2\\text{e)} = \\text{活動數據 (Activity Data)} \\times \\text{碳排放係數 (Emission Factor)}$$"
        },
        {
          "heading": "低碳水泥、固碳混凝土 (Carbon-Curing) 與地質聚合物 (Geopolymer)",
          "outlineRefs": ["CNa-V.2-1"],
          "body": "💡 **核心概念解析**：\n建築界為達成淨零碳排 (Net Zero) 推出的綠色化學減碳技術：\n1. 卜特蘭混合水泥：以水粹爐石粉 (GGBS) 或飛灰 (Fly Ash) 替代部分水泥熟料，可直接減少石灰石煅燒的 CO₂ 化學排放。\n2. 固碳混凝土 (Carbon Capture & Mineralization)：在混凝土拌和過程中注入二氧化碳氣體，CO₂ 與水泥中的鈣離子化學結合生成奈米級 CaCO₃ 晶體，既能固碳封存又能提高早期強度。\n3. **<span className='text-rose-600 font-bold'>地質聚合物</span>** (Geopolymer)：利用鹼激發劑 (如水玻璃 K₂SiO₃ + KOH) 激發富含矽鋁的工業副產品 (爐石/飛灰)，完全不使用**<span className='text-rose-600 font-bold'>波特蘭水泥</span>**熟料，減碳幅度可達 70~80%。"
        },
        {
          "heading": "常見建築結構與裝修材料之碳足跡與環境效應比較",
          "outlineRefs": ["CNa-V.2-1"],
          "body": "💡 **核心概念解析**：\n比較常見建築材料在製造階段的**<span className='text-rose-600 font-bold'>碳足跡</span>**排放強度、主要碳排放來源與減碳潛力。",
          "table": {
            "headers": [
              "建築材料種類",
              "單位**<span className='text-rose-600 font-bold'>碳足跡</span>**強度 (kg CO₂e / kg)",
              "主要化學/工程碳排放來源",
              "主要減碳與永續策略"
            ],
            "rows": [
              [
                "傳統**<span className='text-rose-600 font-bold'>波特蘭水泥</span>** (OPC)",
                "0.80 ~ 0.90 kg CO₂e/kg",
                "石灰石 CaCO₃ 高溫化學煅燒脫碳 + 1450°C 燃料燃燒",
                "添加爐石/飛灰混合、使用替代燃料"
              ],
              [
                "新造碳鋼 (Virgin Steel)",
                "1.80 ~ 2.20 kg CO₂e/kg",
                "高爐以焦炭還原鐵礦石 (Fe₂O₃ + 3C → 2Fe + 3CO)",
                "電弧爐 (EAF) 採用 100% 廢鋼重熔、氫能還原鐵 (DRI)"
              ],
              [
                "原生鋁材 (Primary Al)",
                "8.00 ~ 12.00 kg CO₂e/kg",
                "鋁土礦冰晶石熔鹽高耗電電解 (Hall-Héroult Process)",
                "推動再生鋁 (Recycled Al) 重熔 (減碳 95%)"
              ],
              [
                "**<span className='text-rose-600 font-bold'>地質聚合物</span>**混凝土 (Geopolymer)",
                "0.15 ~ 0.25 kg CO₂e/kg",
                "僅來自鹼激發劑 (NaOH/Na₂SiO₃) 化學合成",
                "完全替代水泥熟料，封存工業廢渣"
              ],
              [
                "結構用膠合木 (Glulam/CLT)",
                "-0.80 ~ -1.20 kg CO₂e/kg (負碳)",
                "樹木光合作用固定大氣 CO₂ (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂)",
                "永續森林營林 (FSC 認證)，替代高碳鋼筋混凝土"
              ]
            ]
          }
        },
        {
          "heading": "室內空氣品質 (IAQ) 化學：甲醛 (HCHO)、苯系物與氡氣控制",
          "outlineRefs": ["CFa-V.2-5", "CMe-V.2-2"],
          "body": "💡 **核心概念解析**：\n室內化學污染物治理是綠色建築重要一環。\n- 甲醛 (Formaldehyde, HCHO)：游離甲醛刺鼻且致癌，源自木作板材脲甲醛樹脂膠。防護方法包括採用 E0/F1 級板材與水性**<span className='text-rose-600 font-bold'>光觸媒</span>** (TiO₂) 催化分解反應 (HCHO + O₂ → CO₂ + H₂O)。\n- 氡氣 (Radon-222, ²²²Rn)：無色無味的放射性惰性氣體，源自花崗岩、磚石建材中微量鈾元素 (²³⁸U) 衰變鏈。防護方法為強化地下室與室內機械通風。"
        },
        {
          "heading": "臭氧層破壞化學與空調低 GWP 環保冷媒演進",
          "outlineRefs": ["CMe-V.2-2"],
          "body": "💡 **核心概念解析**：\n傳統氟氯碳化物 (CFCs / HCFCs 如 R-22) 逸散至平流層後，受紫外光照射釋放氯自由基 (Cl·)，強烈催化破壞臭氧層 (Cl· + O₃ → ClO· + O₂)。現代綠建築空調全面改用臭氧破壞潛勢 ODP = 0 且全球暖化潛勢低 (Low GWP) 的新一代冷媒 (如 R-32, R-1234yf)。",
          "table": {
            "headers": [
              "冷媒代號",
              "化學成分與類型",
              "臭氧破壞潛勢 (ODP)",
              "全球暖化潛勢 (GWP)",
              "國際蒙特婁/基加利法規趨勢"
            ],
            "rows": [
              [
                "R-22",
                "HCFC 二氟一氯甲烷",
                "0.055 (破壞臭氧層)",
                "1810",
                "全面禁產與淘汰"
              ],
              [
                "R-410A",
                "HFC **<span className='text-rose-600 font-bold'>混合物</span>** (R-32 + R-125)",
                "0 (不破壞臭氧)",
                "2088 (高 GWP)",
                "基加利修正案列入逐步削減清單"
              ],
              [
                "R-32",
                "HFC 二氟甲烷",
                "0",
                "675 (較 R-410A 降低 67%)",
                "主流家用與輕型商用空調冷媒"
              ],
              [
                "R-1234yf",
                "HFO 氫氟烯烴",
                "0",
                "< 1 (極低 GWP)",
                "新世代車用空調與冰水主機冷媒"
              ]
            ]
          }
        },
        {
          "heading": "建築生命週期評估 (LCA) 雙指標：隱含碳 (Embodied) vs 營運碳 (Operational)",
          "outlineRefs": ["CNa-V.2-1"],
          "body": "💡 **核心概念解析**：\n建築總生命週期碳排放包含興建階段的「**<span className='text-rose-600 font-bold'>隱含碳</span>**」與數十年使用期的「**<span className='text-rose-600 font-bold'>營運碳</span>**」。隨著空調與照明能源效率提升，**<span className='text-rose-600 font-bold'>隱含碳</span>**佔建築全生命週期碳排的比重已由原本的 20% 升至 50% 以上。推動低碳建材與預鑄工法 (Off-site Construction) 成為建築減碳關鍵。",
          "formula": "$$\\text{Carbon}_{\\text{LCA}} = \\text{Embodied (Material+Transport+Const)} + \\text{Operational (Energy+Water)} \\times \\text{Years}$$"
        },
        {
          "heading": "化石燃料、石油分餾與汽油辛烷值 (Fossil Fuels)",
          "outlineRefs": ["CNc-V.2-1", "CNc-V.2-2", "CNc-V.2-3"],
          "body": "**化石燃料**：煤、石油、天然氣、頁岩油，由古代生物遺骸在地層中經長時間高溫高壓形成，屬於**不可再生能源**。\n**石油分餾**：利用各成分沸點不同，在分餾塔中分離。由塔頂到塔底（沸點由低到高、碳數由少到多）依序為：石油氣（液化石油氣）、汽油、煤油（航空燃油）、柴油、重油，塔底殘餘物為**瀝青**，用於鋪路與屋頂防水。\n**烴的燃燒**：完全燃燒生成 CO₂ 與 H₂O；氧氣不足時不完全燃燒會產生**一氧化碳 CO**（劇毒），所以瓦斯熱水器必須安裝在通風良好的位置。\n**辛烷值**：汽油抗震爆能力的指標，以異辛烷為 100、正庚烷為 0。95 無鉛汽油代表抗震爆性能相當於含 95% 異辛烷、5% 正庚烷的混合物。\n⚠️ 易錯：辛烷值是「抗震爆能力」的指標，不代表汽油中真的含有 95% 的異辛烷，也不代表熱值較高。",
          "formula": "完全燃燒：CₓHᵧ + (x + y/4) O₂ → x CO₂ + (y/2) H₂O",
          "table": {
            "headers": ["分餾產物", "碳數（約）", "沸點範圍（約）", "用途"],
            "rows": [
              ["石油氣", "C1–C4", "< 40 ℃", "液化石油氣（桶裝瓦斯）"],
              ["汽油", "C5–C12", "40–200 ℃", "汽機車燃料"],
              ["煤油", "C12–C16", "150–275 ℃", "航空燃油"],
              ["柴油", "C15–C18", "250–350 ℃", "柴油車、施工機具、發電機"],
              ["重油", "C18 以上", "> 350 ℃", "船舶與工業燃料"],
              ["瀝青", "殘餘物", "—", "道路鋪面、屋頂防水"]
            ]
          }
        },
        {
          "heading": "替代能源與臺灣的再生能源 (Alternative Energy in Taiwan)",
          "outlineRefs": ["CNc-V.2-7", "CNc-V.2-8"],
          "body": "**替代能源**：太陽能（太陽光電、太陽熱水器）、風力（陸域、離岸風電）、水力、地熱、生質能、氫能與燃料電池、海洋能（潮汐、波浪、溫差、海流）。\n**臺灣的條件**：\n• 日照充足，適合屋頂型與地面型太陽光電。\n• 臺灣海峽冬季東北季風強勁，是發展**離岸風電**的優良場址。\n• 地熱資源集中於大屯火山群與宜蘭等地。\n• 黑潮流經東部外海，具有海流發電潛力。\n**建築應用**：屋頂太陽光電、建築整合型光電（BIPV，把光電板當外牆或採光罩）、太陽能熱水器，搭配儲能電池與智慧電網。\n**限制與配套**：再生能源多具**間歇性**（日夜、季風），且涉及土地使用與生態影響，需要搭配儲能、電網調度與節能一起推動。\n⚠️ 易錯：再生能源也有環境衝擊，例如光電板廢棄回收、風機對鳥類與漁業的影響；評估時要看全生命週期。",
          "table": {
            "headers": ["能源", "臺灣的優勢", "主要限制", "建築或都市應用"],
            "rows": [
              ["太陽光電", "日照充足", "日夜與天氣變化", "屋頂光電、BIPV"],
              ["離岸風電", "臺灣海峽季風強", "施工與維運成本、生態影響", "供電給城市電網"],
              ["地熱", "火山與溫泉地區", "區位受限", "區域供熱、溫泉建築"],
              ["生質能", "農林廢棄物", "收集運輸成本", "沼氣發電"]
            ]
          }
        },
        {
          "heading": "水汙染、土壤汙染與自然界的物質循環 (Pollution & Material Cycles)",
          "outlineRefs": ["CMe-V.2-1", "CMe-V.2-3", "CFa-V.2-1", "CFa-V.2-4", "CFa-V.2-6"],
          "body": "**物質循環**：碳循環（光合作用吸收 CO₂，呼吸、燃燒與分解釋放 CO₂；混凝土碳化也會緩慢吸收 CO₂）、氮循環、水循環。\n**土壤**：岩石風化並混合有機質形成，成分包含礦物、有機質、水與空氣。黏土是製造磚、瓦、陶瓷的原料。\n**海洋資源**：食鹽、鎂、溴、深層海水，以及海洋能源。\n**水汙染**：\n• 有機物分解耗氧，BOD（生化需氧量）越高代表汙染越嚴重。\n• 優養化：氮、磷過多使藻類大量繁殖，水中缺氧。\n• 重金屬：鎘、汞、鉛等會累積在生物體內。\n• 工地廢水含高鹼性水泥漿與泥沙，須沉澱、中和後才能排放。\n**土壤汙染**：重金屬、油品洩漏、廢棄物不當掩埋。整治方法有客土、翻轉稀釋、化學淋洗、生物復育；土地開發前應調查土壤與地下水汙染。\n⚠️ 易錯：BOD 是「被微生物分解有機物所需的氧量」，數值越大表示水中有機汙染越多，而不是水中含氧越多。",
          "table": {
            "headers": ["汙染類型", "主要來源", "指標或影響", "防治方法"],
            "rows": [
              ["有機物汙染", "生活汙水、畜牧廢水", "BOD 升高、水中缺氧", "汙水處理廠、截流"],
              ["優養化", "肥料、清潔劑中的氮磷", "藻類大量繁殖", "減少氮磷排放"],
              ["重金屬", "工業廢水、廢棄物", "生物累積、危害健康", "源頭管制、土壤整治"],
              ["工地廢水", "水泥漿、泥沙", "pH 偏高、混濁", "沉澱池、中和後排放"]
            ]
          }
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "下列何者不是造成大氣**<span className='text-rose-600 font-bold'>溫室效應</span>**的主要氣體？\n(A) 二氧化碳 CO₂\n(B) 甲烷 CH₄\n(C) 氧化亞氮 N₂O\n(D) 氮氣 N₂",
          "steps": [
            "溫室氣體指能吸收地表長波紅外線輻射並將熱量保留於大氣中的氣體。",
            "主要溫室氣體包含水氣 (H₂O)、二氧化碳 (CO₂)、甲烷 (CH₄)、氧化亞氮 (N₂O) 及氟氯碳化物 (CFCs)。",
            "氮氣 (N₂) 為大氣中含量最多 (約 78%) 的雙原子氣體，不吸收紅外線輻射，非溫室氣體。"
          ],
          "answer": "(D) 氮氣 N₂",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "某空調系統洩漏了 10 kg 的 R-410A 冷媒 (GWP = 2088)。求這批洩漏冷媒相當於排放多少 kg (及 ton) 的二氧化碳當量 (CO₂e)？",
          "steps": [
            "代入二氧化碳當量計算公式：CO₂e = 質量 × GWP。",
            "CO₂e = 10 kg × 2088 = 20,880 kg CO₂e = 20.88 公噸 (ton) CO₂e。",
            "結論：僅洩漏 10 kg 冷媒，其暖化影響相當於燃燒數千公升汽油的碳排放。"
          ],
          "answer": "相當於排放 20,880 kg CO₂e (20.88 ton CO₂e)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "某新建辦公大樓需使用 1,000 公噸的水泥。若傳統**<span className='text-rose-600 font-bold'>波特蘭水泥</span>** (OPC) 每一公噸生產過程的**<span className='text-rose-600 font-bold'>碳足跡</span>**排放係數為 0.82 ton CO₂e/ton。若改用含有 40% 爐石粉 (Slag) 的低碳混合水泥，爐石粉的**<span className='text-rose-600 font-bold'>碳足跡</span>**排放係數僅為 0.08 ton CO₂e/ton。試計算：(1) 使用傳統水泥的總**<span className='text-rose-600 font-bold'>碳足跡</span>** (ton CO₂e)；(2) 改用低碳混合水泥後的總**<span className='text-rose-600 font-bold'>碳足跡</span>** (ton CO₂e)；(3) 該工程因材料替換所產生的減碳率 (%) 與減碳總量 (ton CO₂e)。",
          "steps": [
            "(1) 傳統**<span className='text-rose-600 font-bold'>波特蘭水泥</span>****<span className='text-rose-600 font-bold'>碳足跡</span>** = 1,000 ton × 0.82 ton CO₂e/ton = 820 ton CO₂e。",
            "(2) 低碳混合水泥排放係數 = (60% OPC × 0.82) + (40% Slag × 0.08) = 0.492 + 0.032 = 0.524 ton CO₂e/ton。",
            "低碳水泥總**<span className='text-rose-600 font-bold'>碳足跡</span>** = 1,000 ton × 0.524 ton CO₂e/ton = 524 ton CO₂e。",
            "(3) 減碳總量 = 820 ton CO₂e - 524 ton CO₂e = 296 ton CO₂e。",
            "減碳率 = (296 / 820) × 100% ≈ 36.10%。"
          ],
          "answer": "(1) 傳統水泥**<span className='text-rose-600 font-bold'>碳足跡</span>** = 820 ton CO₂e；(2) 低碳水泥**<span className='text-rose-600 font-bold'>碳足跡</span>** = 524 ton CO₂e；(3) 減碳量 = 296 ton CO₂e (減碳率約 36.1%)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "某一固碳混凝土 (Carbon-Curing) 工廠在混凝土拌和過程中注入高純度 CO₂ 氣體，將 CO₂ 礦化封存為奈米級 CaCO₃ 晶體。若每立方米混凝土可固定 12 kg 的 CO₂。某一大型工程使用了 5,000 m³ 的此種固碳混凝土。(1) 該工程共直接礦化封存了多少公噸的 CO₂？ (2) 若該混凝土因 CO₂ 礦化促進早期強度發展，使水泥用量由 320 kg/m³ 減少至 300 kg/m³ (水泥排放係數 0.80 kg CO₂/kg)。求減少水泥產生的間接減碳量 (ton CO₂e)？",
          "steps": [
            "(1) 直接固碳量 = 5,000 m³ × 12 kg/m³ = 60,000 kg CO₂ = 60 ton CO₂。",
            "(2) 每 m³ 節省水泥量 = 320 - 300 = 20 kg 水泥。",
            "總節省水泥量 = 5,000 m³ × 20 kg/m³ = 100,000 kg 水泥 = 100 ton 水泥。",
            "間接減碳量 = 100,000 kg × 0.80 kg CO₂/kg = 80,000 kg CO₂ = 80 ton CO₂。",
            "總減碳效益 = 60 + 80 = 140 ton CO₂。"
          ],
          "answer": "(1) 直接礦化封存 60 ton CO₂；(2) 減少水泥間接減碳 80 ton CO₂ (綜合減碳 140 ton CO₂)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一間剛完工的辦公室使用水性**<span className='text-rose-600 font-bold'>光觸媒</span>** (TiO₂) 塗料進行空氣淨化。已知塗料中含有 50 g 的奈米 TiO₂ 顆粒。若**<span className='text-rose-600 font-bold'>光觸媒</span>**在日照下可穩定將甲醛催化分解：HCHO (30 g/mol) + O₂ → CO₂ + H₂O。若室內每天源源不絕釋放出 0.60 g 的甲醛氣體，理論上每天需要**<span className='text-rose-600 font-bold'>光觸媒</span>**分解多少莫耳的甲醛？",
          "steps": [
            "計算每天釋放甲醛**<span className='text-rose-600 font-bold'>莫耳數</span>** n(HCHO) = 0.60 g / 30 g/mol = 0.02 mol/天。",
            "**<span className='text-rose-600 font-bold'>光觸媒</span>**本身作為催化劑，在反應前後質量不變且不被消耗 (50g 顆粒維持不變)。",
            "只要提供足夠的紫外光/可見光照射，每天催化分解 0.02 mol 即可維持室內空氣清潔。"
          ],
          "answer": "每天需催化分解 0.02 mol 甲醛 (**<span className='text-rose-600 font-bold'>光觸媒</span>**催化劑本身不被消耗)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "某一總建築面積 10,000 m² 的商辦大樓進行 LCA 全生命週期**<span className='text-rose-600 font-bold'>碳足跡</span>**評估。(1) 若建材興建階段**<span className='text-rose-600 font-bold'>隱含碳</span>**強度為 500 kg CO₂e/m²，求總**<span className='text-rose-600 font-bold'>隱含碳</span>**為多少 ton CO₂e？ (2) 若該大樓年營運耗電量為每 m² 100 kWh (電力碳排係數 0.50 kg CO₂e/kWh)，求該大樓營運 50 年的總**<span className='text-rose-600 font-bold'>營運碳</span>**為多少 ton CO₂e？隠含碳佔 50 年總碳排的百分之幾？",
          "steps": [
            "計算總**<span className='text-rose-600 font-bold'>隱含碳</span>** Embodied Carbon = 10,000 m² × 500 kg CO₂e/m² = 5,000,000 kg = 5,000 ton CO₂e。",
            "計算年**<span className='text-rose-600 font-bold'>營運碳</span>** = 10,000 m² × 100 kWh/m²·年 × 0.50 kg/kWh = 500,000 kg = 500 ton CO₂e/年。",
            "計算 50 年總**<span className='text-rose-600 font-bold'>營運碳</span>** Operational Carbon = 500 ton CO₂e/年 × 50 年 = 25,000 ton CO₂e。",
            "計算 50 年生命週期總碳排 = 5,000 + 25,000 = 30,000 ton CO₂e。",
            "計算**<span className='text-rose-600 font-bold'>隱含碳</span>**佔比 = (5,000 / 30,000) × 100% ≈ 16.67%。"
          ],
          "answer": "(1) 總**<span className='text-rose-600 font-bold'>隱含碳</span>** = 5,000 ton CO₂e；(2) 50 年總**<span className='text-rose-600 font-bold'>營運碳</span>** = 25,000 ton CO₂e (**<span className='text-rose-600 font-bold'>隱含碳</span>**佔比約 16.67%)",
          "hints": [
            "分析題目核心條件與化學原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "下列何者不是造成大氣**<span className='text-rose-600 font-bold'>溫室效應</span>**的主要氣體？\n(A) 二氧化碳 CO₂\n(B) 甲烷 CH₄\n(C) 氧化亞氮 N₂O\n(D) 氮氣 N₂",
        "steps": [
          "溫室氣體指能吸收地表長波紅外線輻射並將熱量保留於大氣中的氣體。",
          "主要溫室氣體包含水氣 (H₂O)、二氧化碳 (CO₂)、甲烷 (CH₄)、氧化亞氮 (N₂O) 及氟氯碳化物 (CFCs)。",
          "氮氣 (N₂) 為大氣中含量最多 (約 78%) 的雙原子氣體，不吸收紅外線輻射，非溫室氣體。"
        ],
        "answer": "(D) 氮氣 N₂"
      },
      "step0Prerequisites": [
        "基本化學元素符號",
        "莫耳數與化學計量"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "化學反應式未平衡即進行莫耳數計算。",
          "correctThinking": "計算前必先平衡方程式係數。",
          "trapDescription": "化學計量係數遺漏。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "化學反應本質推理模型",
          "explanation": "由原子核外電子轉移或共享推論反應路徑。"
        }
      ]
    }
  ]
};
