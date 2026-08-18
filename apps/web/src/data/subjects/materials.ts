import { SubjectData } from '../types';

export const materialsData: SubjectData = {
  slug: 'materials',
  title: '材料與試驗',
  category: '專業科目（一）',
  color: 'orange-700',
  topics: [
    {
      slug: 'basic-properties',
      title: '1. 材料與試驗概論與基本性質',
      desc: '材料分類規格、真密度/體積密度/孔隙率、吸水率與含水率、應力應變關係、泊松比、硬度與衝擊韌性。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：materials之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-1-23', '111-1-24', '111-1-27', '111-1-28', '111-1-31', '111-1-36', '112-1-21', '112-1-24', '112-1-29', '112-1-31', '112-1-33', '112-1-39', '113-1-21', '113-1-23', '113-1-27', '113-1-32', '113-1-39', '114-1-21', '114-1-26', '114-1-33', '114-1-35', '115-1-22', '115-1-28', '115-1-33', '115-1-39', '110-1-5', '110-1-13', '110-1-21', '110-1-29', '110-1-37'],
      worked_examples: [
        {
          question: '【步驟化例題】材料密度與孔隙率計算：某石材試體乾燥後質量為 500 公克，完全密實無孔隙時之絕對體積為 200 立方公分。若該試體之外觀體積（含孔隙）為 250 立方公分，求該石材之「表觀密度」與「孔隙率」？',
          difficulty: '中等',
          steps: [ "步驟 1：計算表觀密度 (Apparent Density)。ρ = 乾燥質量 / 外觀體積 = 500 g / 250 cm³ = 2.0 g/cm³。", "步驟 2：計算絕對真密度 (True Density)。ρ0 = 500 g / 200 cm³ = 2.5 g/cm³。", "步驟 3：計算孔隙率 (Porosity n)。n = (1 - ρ/ρ0) × 100% = (1 - 2.0/2.5) × 100% = (1 - 0.8) × 100% = 20%。" ], 
          answer: '表觀密度為 2.0 g/cm³，孔隙率為 20%。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '材料與試驗總論與品質管理體系',
          body: '土木與建築材料為工程結構之根本。材料品質管制作業遵循 <span className="text-indigo-600 font-bold">CNS</span> (中華民國國家標準) 與 <span className="text-indigo-600 font-bold">ASTM</span> (美國材料與試驗協會) 規範。試驗數據管理需進行測定值精度計算、離群值剔除與數據圖表化分析（如正態分布與標準差 s 控管）。',
          steps: [
            '試體抽樣 (Sampling)：依批量隨機抽樣，確保試體具備統計代表性。',
            '環境條件控制：試體需於**標準養護室** (溫度 23 ± 2°C，相對濕度 ≥ 95%) 養護。',
            '數據處理與判定：求算平均值 x_bar、標準差 s 與變異係數 CV (CV = s / x_bar × 100%)。'
          ]
        },
        {
          heading: '物理性質指標與密度體系',
          body: '建築材料的物理性質由密實度、<span className="text-rose-600 font-bold">孔隙率</span> (Porosity)、<span className="text-rose-600 font-bold">含水率</span> (Moisture Content) 及比重 (Specific Gravity) 決定。材料密度劃分為真密度 (True Density)、<span className="text-rose-600 font-bold">表觀密度</span> (Apparent Density) 與體積密度 (Bulk Density)。',
          formula: '<span className="text-rose-600 font-bold">體積密度</span> ρb = W / V\n孔隙率 n = (Vv / V) × 100% = [1 - (ρb / ρs)] × 100%\n含水率 w = [(Ww - Wd) / Wd] × 100%',
          table: {
            headers: ['密度類別', '體積計算範圍', '量測方法', '主要工程應用'],
            rows: [
              ['真密度 (True Density, ρs)', '僅算固體骨架體積 (扣除全部孔隙)', '研磨成細粉後以比重瓶量測', '分析礦物結晶密實度'],
              ['表觀密度 (Apparent Density)', '包含固體骨架與封閉孔隙體積', '排開液體體積法量測', '計算材料顆粒實質比重'],
              ['體積密度 (Bulk Density, ρb)', '包含固體、封閉孔隙與開放孔隙總外觀體積', '直接量測幾何外形尺寸與重量', '計算結構體自重與堆積容重']
            ]
          }
        },
        {
          heading: '力學性質與應力-應變關係 (Stress-Strain Diagram)',
          body: '材料受外力作用時呈現應力與應變的變化關係。經典拉伸曲線包含比例限度 (Proportional Limit)、彈性限度 (Elastic Limit)、降伏點 (Yield Point)、抗拉極限強度 (Ultimate Tensile Strength, UTS) 與斷裂破壞點。',
          formula: '正應力 σ = P / A₀\n正應變 ε = ΔL / L₀\n虎克定律 σ = E × ε (E為彈性模數)\n泊松比 ν = - (橫向應變 εy / 軸向應變 εx)'
        },
        {
          heading: '比重與吸水率試驗步驟 (<span className="text-indigo-600 font-bold">CNS</span> 486 / <span className="text-indigo-600 font-bold">ASTM</span> C127)',
          body: '測量粗粒料或固體建材之**面乾內飽和** (**SSD**) 比重與吸水率之國家標準試驗程序。',
          steps: [
            '試樣準備：將樣品完全浸泡於 23 ± 2°C 清水中 24 ± 4 小時使其孔隙達到水分吸附飽和。',
            '測量 **SSD** 重量：自水中取出樣品，用濕布快速擦乾表面水膜，於天平秤得**面乾內飽和**重量 B。',
            '水中秤重：將樣品置入水中吊籃中，淹沒於水面下秤得水中懸浮重量 C。',
            '**烘乾**秤重：將樣品置入 110 ± 5°C 烘箱中**烘乾**至恆重，於乾燥器中冷卻後秤得**絕乾**重量 A。',
            '計算指標：表觀比重 Bulk SG (SSD) = B / (B - C)；吸水率 Abs (%) = [(B - A) / A] × 100%。'
          ]
        },
        {
          heading: '材料韌性、硬度與疲勞 (Toughness & Fatigue)',
          body: '韌性 (Toughness) 代表材料衝擊破壞前吸收能量的能力，常以夏比衝擊試驗 (Charpy Impact Test) 測量吸能焦耳值 (J)；硬度 (Hardness) 係指抗刮擦或壓痕侵入能力 (如勃氏 HB、洛氏 HR、維氏 HV)；疲勞 (Fatigue) 係指材料在反覆循環應力作用下發生的突然脆性破壞。這些動態與表面力學性質對於承受反覆載重與磨耗的橋樑或路面工程至關重要。',
          table: {
            headers: ['力學性質', '定義與物理意義', '常用試驗方法與指標', '工程應用範例'],
            rows: [
              ['韌性 (Toughness)', '材料受外力至破壞前所能吸收的總能量', '夏比衝擊試驗 (吸收能量 J)、應力應變曲線下面積', '抗震結構鋼材、橋樑防撞護欄'],
              ['硬度 (Hardness)', '材料表面抵抗局部塑性變形 (刮痕或壓痕) 的能力', '勃氏 (HB)、洛氏 (HR)、維氏 (HV)', '耐磨地坪表面、鋼結構連接構件'],
              ['疲勞 (Fatigue)', '材料在低於降伏強度的反覆交變應力下發生的延遲性破壞', '疲勞試驗 (S-N 曲線，疲勞極限)', '高速公路橋梁鋼梁、鐵路軌道']
            ]
          }
        },
        {
          heading: '粒料含水狀態與表面含水率修正公式 (Moisture States & Water Correction)',
          body: '在混凝土與瀝青配比設計中，粒料包含**絕乾** (OD)、空氣乾燥 (AD)、**面乾內飽和** (**SSD**) 及濕潤 (Wet) 四種含水狀態。計算拌和水時，必須根據表面含水率 (Surface Moisture) 調整實際加水量。',
          formula: '總含水率 p (%) = [ (W_wet - W_od) / W_od ] × 100%\n吸水率 Abs (%) = [ (W_ssd - W_od) / W_od ] × 100%\n表面含水率 SM (%) = 總含水率 p - <span className="text-rose-600 font-bold">吸水率</span> Abs = [ (W_wet - W_ssd) / W_ssd ] × 100%\n拌和水調整量：當 SM > 0 時應扣減加水量；當 SM < 0 (空氣乾燥) 時應增加加水量。',
          table: {
            headers: ['含水狀態', '內部孔隙水', '表面水膜', '配比計算與拌和水修正依據'],
            rows: [
              ['絕乾狀態 (O.D.)', '無水', '無水', '混凝土基準配合設計比重計算基礎'],
              ['空氣乾燥 (A.D.)', '部分含水', '無水', '工地現場堆置狀態，需吸收加水'],
              ['面乾內飽和 (S.S.D.)', '充滿水', '無水', '拌和水計算之理想標準平衡狀態'],
              ['濕潤狀態 (Wet)', '充滿水', '有游離水膜', '工地現場狀態，需扣除游離水膜重量']
            ]
          }
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '某塊建築石材樣品的烘乾重量 (絕乾重 A) 為 500 g，浸水飽和後表面擦乾 (面乾內飽和重 B) 為 520 g，將其懸浮於水中秤重 (水中重 C) 為 310 g。試計算該樣品之面乾內飽和表觀比重 (Bulk SG SSD) 與吸水率。',
          steps: [
            '計算排水體積 V_displaced = B - C = 520 - 310 = 210 cm³。',
            'Bulk SG (**SSD**) = B / (B - C) = 520 / 210 ≈ 2.476 ≈ 2.48。',
            '吸水率 Abs (%) = [(B - A) / A] × 100% = [(520 - 500) / 500] × 100% = 4.0%。'
          ],
          answer: 'Bulk SG (SSD) ≈ 2.48，吸水率 = 4.0%'
        },
        {
          difficulty: '高頻統測題',
          question: '一紅磚試體在外觀尺寸為 20 cm × 10 cm × 5 cm，烘乾絕乾重 A = 1800 g。已知該紅磚之真密度 (實質密度) ρs = 2.5 g/cm³。試求：(1) 體積密度 ρb；(2) 該紅磚之孔隙率 n (%)。',
          steps: [
            '計算外觀總體積 V = 20 × 10 × 5 = 1000 cm³。',
            '<span className="text-rose-600 font-bold">體積密度</span> ρb = A / V = 1800 / 1000 = 1.80 g/cm³。',
            '孔隙率 n = [1 - (ρb / ρs)] × 100% = [1 - (1.80 / 2.50)] × 100% = [1 - 0.72] × 100% = 28.0%。'
          ],
          answer: '體積密度 ρb = 1.80 g/cm³，孔隙率 n = 28.0%'
        },
        {
          difficulty: '進階',
          question: '一圓柱形鋼筋試體，原始標距 L₀ = 200 mm，直徑 d₀ = 16 mm。拉伸試驗測得降伏載重 80 kN，最大載重 120 kN，斷後標距 L1 = 240 mm，斷口直徑 11.31 mm。求解降伏強度、抗拉強度、伸長率與斷面收縮率。',
          steps: [
            'A₀ = (π / 4) × 16² ≈ 201.06 mm²；A1 = (π / 4) × (11.31)² ≈ 100.46 mm²。',
            'σy = 80,000 / 201.06 ≈ 397.89 MPa。',
            'σu = 120,000 / 201.06 ≈ 596.84 MPa。',
            '伸長率 E.L. = [(240 - 200) / 200] × 100% = 20.0%。',
            '斷面收縮率 R.A. = [(201.06 - 100.46) / 201.06] × 100% ≈ 50.0%。'
          ],
          answer: 'σy ≈ 398 MPa，σu ≈ 597 MPa，伸長率 = 20.0%，斷面收縮率 ≈ 50.0%'
        },
        {
          difficulty: '高頻統測題',
          question: '某土質或粗骨材樣品，其濕重為 220 g，經 110°C 烘箱烘乾至恆重後為 200 g。求該樣品之含水率 w (%)。若材料之面乾內飽和重為 210 g，求其自由含水率與吸水率。',
          steps: [
            '含水率 w (%) = [(濕重 - 絕乾重) / 絕乾重] × 100% = [(220 - 200) / 200] × 100% = 10.0%。',
            '吸水率 Abs (%) = [(SSD重 - 絕乾重) / 絕乾重] × 100% = [(210 - 200) / 200] × 100% = 5.0%。',
            '有效自由含水率 = 總含水率 - 吸水率 = 10.0% - 5.0% = 5.0%。'
          ],
          answer: '含水率 w = 10.0%，吸水率 = 5.0%，自由含水率 = 5.0%'
        }
      ]
    },
    {
      slug: 'cement-composition',
      title: '2.1 卜特蘭水泥水化化學成分',
      desc: '深入解析卜特蘭水泥的四大主要化學成分 (C3S, C2S, C3A, C4AF) 及其水化反應機制、釋放熱量與強度貢獻。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：cement-composition之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: [],
      worked_examples: [
        {
          question: '【步驟化例題】卜特蘭水泥水化化合物分析：水泥四大核心化合物成分中，何者水化反應最快且水化熱最高？何者決定水泥之長期（28天以上）強度發展？',
          difficulty: '中等',
          steps: [ "步驟 1：分析 C3S, C2S, C3A, C4AF 特性。", "步驟 2：C3A (鋁酸三鈣) 水化最快、發熱量最大（造成快凝）；C3S (矽酸三鈣) 提供早期（1~7天）強度。", "步驟 3：C2S (矽酸二鈣) 水化極慢，持續提供後期（28天至數年）強度的穩定增長。" ], 
          answer: '水化最快且水化熱最高者為「C3A (鋁酸三鈣)」；決定長期強度者為「C2S (矽酸二鈣)」。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '卜特蘭水泥水化化學成分 (Mineral Compositions)',
          body: '水泥熟料經高溫 1450°C 燒結而成，主要四大部分為：\n- 矽酸三鈣 (<span className="text-rose-600 font-bold">C3S</span>)：水化極快，提供混凝土早期強度。\n- 矽酸二鈣 (<span className="text-rose-600 font-bold">C2S</span>)：水化緩慢，提供後期強度。\n- 鋁酸三鈣 (<span className="text-rose-600 font-bold">C3A</span>)：水化最快，釋放極高**水化熱**。\n- 鐵鋁酸四鈣 (<span className="text-rose-600 font-bold">C4AF</span>)：主要影響水泥外觀與抗硫能力。\n\n*備註：石膏 (CaSO₄·2H₂O) 之添加旨在調節 <span className="text-rose-600 font-bold">C3A</span> 之反應，避免發生「<span className="text-rose-600 font-bold">閃凝</span> (Flash Set)」。',
          table: {
            headers: ['化合物名稱', '簡寫代號', '水化反應速率', '水化熱釋放量', '對強度的貢獻'],
            rows: [
              ['矽酸三鈣 (Tricalcium Silicate)', 'C3S', '快速 (數天內)', '中高 (500 J/g)', '主要提供 28 天前之早期強度'],
              ['矽酸二鈣 (Dicalcium Silicate)', 'C2S', '緩慢 (數週至數月)', '低 (250 J/g)', '提供 28 天後之後期長期強度'],
              ['鋁酸三鈣 (Tricalcium Aluminates)', 'C3A', '極快 (數小時內)', '極高 (850 J/g)', '對強度貢獻低，易引發溫差裂縫'],
              ['鐵鋁酸四鈣 (Tetracalcium Aluminoferrite)', 'C4AF', '中等', '中低 (420 J/g)', '決定水泥外觀顏色與耐硫酸鹽性']
            ]
          }
        },
        {
          heading: '**水化熱**與體積變化控制',
          body: '水泥在水化過程中會釋放大量熱能（稱為**水化熱**）。在巨積混凝土（Mass Concrete）中，若內部散熱不良，會導致內外溫差過大而產生嚴重裂縫。因此，控制**水化熱**是大型工程的關鍵：通常透過降低 <span className="text-rose-600 font-bold">C3S</span> 與 <span className="text-rose-600 font-bold">C3A</span> 比例，或使用卜特蘭低熱水泥 (Type IV)。',
          steps: [
            '【選用低熱水泥】：使用 Type IV 低熱卜特蘭水泥或 Type II 中熱水泥，從源頭降低發熱量。',
            '【添加飛灰或爐石】：以卜索蘭材料取代部分水泥，可顯著延緩水化反應並降低溫度峰值。',
            '【預冷拌合材料】：在拌合過程中使用冰水或液態氮預冷卻拌合水與粒料（如翡翠水庫施工法）。',
            '【內部冷卻管線】：在巨積混凝土內部預埋冷卻水管，澆置後持續通水帶走內部熱量。'
          ]
        },
        {
          heading: '成分、齡期與強度的判讀順序',
          body: '判讀配比時先看 <span className="text-rose-600 font-bold">C3S</span> 與 <span className="text-rose-600 font-bold">C2S</span> 對早、後期強度的分工，再檢查 <span className="text-rose-600 font-bold">C3A</span> 對**水化熱**與硫酸鹽耐久性的影響，最後確認石膏是否足以控制凝結。'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '在水泥水化過程中，哪一個化合物是提供混凝土「28天前早期強度」的主要來源？哪一個化合物提供「28天後後期強度」？若要防止水泥加水後發生閃凝 (Flash Set)，必須添加何種調節劑？',
          steps: [
            '早期強度來源：矽酸三鈣 (<span className="text-rose-600 font-bold">C3S</span>)，其反應快速，在數天內迅速釋放強度。',
            '後期強度來源：矽酸二鈣 (<span className="text-rose-600 font-bold">C2S</span>)，其水化反應緩慢，持續數週至數月提供長期強度。',
            '閃凝調節劑：石膏 (CaSO₄·2H₂O)，可與 <span className="text-rose-600 font-bold">C3A</span> 反應生成**鈣礬石**膜層，延緩 <span className="text-rose-600 font-bold">C3A</span> 之劇烈水化。'
          ],
          answer: '早期強度：C3S；後期強度：C2S；閃凝調節劑：石膏。'
        },
        {
          difficulty: '高頻統測題',
          question: '卜特蘭水泥熟料四主要化合物中，水化熱釋放量最高的是哪一個？其水化熱數值約為多少 J/g？在水壩等巨積混凝土工程中，應大幅降低哪兩個化合物的比例？',
          steps: [
            '**水化熱**最高者為鋁酸三鈣 (<span className="text-rose-600 font-bold">C3A</span>)，**水化熱**高達約 850 J/g。',
            '巨積混凝土為避免內部**溫差裂縫**，必須降低**水化熱**高的 <span className="text-rose-600 font-bold">C3A</span> 與 <span className="text-rose-600 font-bold">C3S</span> 比例，增加 <span className="text-rose-600 font-bold">C2S</span> 比例 (如 Type IV 低熱水泥)。'
          ],
          answer: '最高水化熱：C3A (約 850 J/g)；巨積混凝土應降低 C3A 與 C3S。'
        },
        {
          difficulty: '進階',
          question: '詳述石膏 (CaSO₄·2H₂O) 控制水泥「閃凝 (Flash Set)」之化學機制。若石膏添加過量 (超過 5%)，會對硬化後的混凝土造成何種不良影響？',
          steps: [
            '防閃凝機制：加水初期石膏與 <span className="text-rose-600 font-bold">C3A</span> 快速反應生成微細的「**鈣礬石** (Ettringite)」包覆在 <span className="text-rose-600 font-bold">C3A</span> 顆粒表面，形成保護膜阻絕水分，使 <span className="text-rose-600 font-bold">C3A</span> 反應減緩，獲得 1-2 小時工作時間。',
            '過量危害：若石膏過量，當混凝土硬化後內部仍有剩餘石膏與未反應 <span className="text-rose-600 font-bold">C3A</span> 在硬化體中持續生成**鈣礬石**，導致體積膨脹破壞 (崩裂破壞)。'
          ],
          answer: '石膏與 C3A 生成鈣礬石膜延緩反應；過量會引發硬化後延遲性體積膨脹破壞。'
        },
        {
          difficulty: '高頻統測題',
          question: '關於 C4AF (鐵鋁酸四鈣) 在卜特蘭水泥中的主要功能與特性，下列敘述何者正確？ (A) 提供主要 28 天抗壓強度 (B) 決定水泥之灰色外觀並提供良好抗硫酸鹽能力 (C) 釋放最高水化熱 (D) 引發假凝現象。',
          steps: [
            '<span className="text-rose-600 font-bold">C4AF</span> 含鐵離子，賦予水泥經典的灰色外觀，且水化產物對抗硫酸鹽能力優於 <span className="text-rose-600 font-bold">C3A</span>，強度貢獻中等。故 (B) 正確。'
          ],
          answer: '(B) 決定水泥灰色外觀並提供良好抗硫酸鹽能力'
        }
      ]
    },
    {
      slug: 'cement-types',
      title: '2.2 CNS 61 卜特蘭水泥五大類型比較',
      desc: '詳解中華民國國家標準 (CNS 61) 劃分之五種基本卜特蘭水泥特性與其適合之工程應用場景。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：cement-types之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-1-22', '111-1-32', '111-1-33', '111-1-40', '112-1-26', '112-1-30', '112-1-37', '112-1-40', '113-1-25', '113-1-33', '113-1-36', '114-1-22', '114-1-28', '114-1-31', '114-1-34', '115-1-21', '115-1-23', '115-1-29', '115-1-34', '115-1-38'],
      worked_examples: [
        {
          question: '【步驟化例題】CNS 61 卜特蘭水泥類型選用：某工程欲興建大型水庫大壩結構（巨積混凝土），為防止內部水化熱積聚導致溫差裂縫，應優先選用 CNS 61 規範中之哪一種型號水泥？',
          difficulty: '基礎',
          steps: [ "步驟 1：分析巨積混凝土工程痛點。水化熱過高引發熱應力裂縫。", "步驟 2：查考 CNS 61 五大水泥分類：I 型普通、II 型中熱、III 型早強、IV 型低熱、V 型抗硫。", "步驟 3：選用最適水泥。第 IV 型低熱卜特蘭水泥 (Type IV Low-Heat Cement)。" ], 
          answer: '應優先選用「第 IV 型（低熱）卜特蘭水泥」。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '<span className="text-indigo-600 font-bold">CNS</span> 61 卜特蘭水泥五大類型規格比較',
          body: '針對不同工程需求，水泥廠商會透過調整熟料中四大礦物的比例（尤其是 <span className="text-rose-600 font-bold">C3A</span> 與 <span className="text-rose-600 font-bold">C3S</span> 的含量）以及研磨粗細度，生產出五種標準卜特蘭水泥。',
          table: {
            headers: ['水泥類型', '名稱與特性', '主要化學成分調整', '主要工程應用場合'],
            rows: [
              ['Type I (普通水泥)', '最廣泛使用之標準水泥', '標準成分比例', '一般建築、梁柱、路面、預鑄構件'],
              ['Type II (中熱/抗硫水泥)', '中等水化熱與中等抗硫酸鹽侵蝕', '降低 C3A (≤ 8%)、降低 C3S', '地下室連續壁、大體積結構、水庫'],
              ['Type III (早強水泥)', '極高早期強度 (3天達到 Type I 7天強度)', '高 C3S 含量、微細研磨粒徑', '緊急搶修工程、寒冷氣候施工、預力梁拆模'],
              ['Type IV (低熱水泥)', '極低水化熱，硬化過程極為緩慢', '大幅降低 C3S 與 C3A，提高 C2S', '巨積混凝土 (Mass Concrete) 如水壩'],
              ['Type V (高抗硫水泥)', '極高抗硫酸鹽化學侵蝕', '限制 C3A ≤ 5%', '港灣工程、海水構造物、高鹽鹼土壤']
            ]
          }
        },
        {
          heading: '**硫酸鹽侵蝕**機制 (Sulfate Attack)',
          body: '在海水或鹼性土壤中，環境中的硫酸鹽 (SO₄²⁻) 會滲入混凝土，與水泥水化產物及未反應的 <span className="text-rose-600 font-bold">C3A</span> 作用，生成體積龐大的**鈣礬石** (Ettringite) 或石膏。這會導致內部產生巨大的膨脹應力，進而使混凝土龜裂崩解。Type V 水泥嚴格限制 <span className="text-rose-600 font-bold">C3A</span> 含量不大於 5% 便是為了解決此問題。'
        },
        {
          heading: '依工程條件選型',
          body: '選水泥類型應同時核對施工速度、構件尺寸、環境硫酸鹽濃度與養護溫度；沒有單一類型能在所有工程條件下都最佳。'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '某港灣工程需打設深海碼頭鋼管樁外包混凝土，且工程位於高鹽鹼土壤區。試解答：應優先選用 CNS 61 何種水泥？其化學成分有何特別限制？',
          steps: [
            '應選用 Type V (高抗硫水泥)。',
            '化學成分特別限制鋁酸三鈣 <span className="text-rose-600 font-bold">C3A</span> ≤ 5%，以防海水或土壤中之硫酸鹽 (SO₄²⁻) 與 <span className="text-rose-600 font-bold">C3A</span> 作用生成體積膨脹之**鈣礬石**而引起龜裂。'
          ],
          answer: 'Type V 高抗硫水泥，限制 C3A ≤ 5%'
        },
        {
          difficulty: '高頻統測題',
          question: '在冬期低溫施工或道路緊急搶修工程中，欲使混凝土在 3 天內迅速達到拆模強度，應優先採用 CNS 61 何種水泥？其製造工法上有何特徵？',
          steps: [
            '應採用 Type III (早強水泥)。',
            '特徵：提高了矽酸三鈣 (<span className="text-rose-600 font-bold">C3S</span>) 含量，且將水泥熟料研磨得極為微細 (比表面積高)，大幅增加水化接觸面積。'
          ],
          answer: 'Type III 早強水泥，高 C3S 且極微細研磨。'
        },
        {
          difficulty: '進階',
          question: '翡翠水庫大壩或石門水庫大體積混凝土施工時，若誤用 Type III 早強水泥會產生何種嚴重後果？應選用何種水泥？',
          steps: [
            '誤用 Type III 會因 <span className="text-rose-600 font-bold">C3S</span> 高且細度高導致**水化熱**劇烈累積爆發，巨積內部溫度可高達 70°C 以上，與表面形成巨大溫差引發嚴重貫穿性張裂縫。',
            '正確應選用 Type IV (低熱水泥) 或 Type II (中熱水泥)，並配合冰水拌合與冷卻水管散熱。'
          ],
          answer: '誤用 Type III 會引發劇烈溫差裂縫崩塌；應選用 Type IV 低熱水泥。'
        },
        {
          difficulty: '高頻統測題',
          question: '下列何種卜特蘭水泥適用於地下室連續壁、箱涵及排水溝等具有中等抗硫酸鹽與中等水化熱需求之工程？ (A) Type I (B) Type II (C) Type III (D) Type IV。',
          steps: [
            'Type II 中熱/中抗硫水泥專門設計用於中等**水化熱**與中等抗硫酸鹽場合。故 (B) 正確。'
          ],
          answer: '(B) Type II (中熱/抗硫水泥)'
        }
      ]
    },
    {
      slug: 'cement-vicat',
      title: '2.3 維卡儀 (Vicat) 凝結時間試驗',
      desc: '介紹測定水泥水化過程初凝 (Initial Set) 與終凝 (Final Set) 時間之國家標準步驟。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：cement-vicat之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-1-29', '112-1-28', '113-1-22', '114-1-23', '114-1-24', '114-1-38', '114-1-39'],
      worked_examples: [
        {
          question: '【步驟化例題】維卡儀水泥凝結時間規範：依據 CNS 水泥試驗標準，採用維卡儀 (Vicat Needle) 測定卜特蘭水泥之「初凝時間」與「終凝時間」，法定限制分別不得小於與大於多少分鐘？',
          difficulty: '基礎',
          steps: [ "步驟 1：瞭解維卡儀試驗目的。確定水泥漿由可塑狀態轉為固態之時間點。", "步驟 2：查考初凝規範限制。初凝時間不得少於 45 分鐘（確保施工拌合與運輸時間）。", "步驟 3：查考終凝規範限制。終凝時間不得大於 375 分鐘 (6.25小時)。" ], 
          answer: '初凝時間不得小於 45 分鐘；終凝時間不得大於 375 分鐘。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '<span className="text-indigo-600 font-bold">維卡儀</span> (Vicat Apparatus) 凝結時間試驗步驟 (<span className="text-indigo-600 font-bold">CNS</span> 786)',
          body: '為確保混凝土在運輸、澆置及修飾過程中具備足夠的施工時間，規範要求測定其初凝與終凝時間。',
          steps: [
            '標準稠度水膏調配 (<span className="text-indigo-600 font-bold">CNS</span> 788)：調整拌合水量，使維卡儀 10mm 沉降桿在 30 秒內沉入水泥膏 10 ± 1 mm 處。',
            '初凝時間測定：將水膏填入試模，每隔 15 分鐘以 1mm 針頭自由落入試體。當針頭沉入深度停在底板上方 25 mm 處時，記錄自加水起算之時間為「<span className="text-rose-600 font-bold">初凝時間</span>」(<span className="text-indigo-600 font-bold">CNS</span> 規範 Type I 需 ≥ 45 分鐘)。',
            '終凝時間測定：換上帶環狀附件之 1mm 針頭，當針頭能在試體表面留下針痕但環狀附件不再留下圓形印痕時，記錄時間為「<span className="text-rose-600 font-bold">終凝時間</span>」(<span className="text-indigo-600 font-bold">CNS</span> 規範 Type I 需 ≤ 375 分鐘)。'
          ]
        },
        {
          heading: '初凝與終凝的工程意義',
          body: '初凝時間確保有足夠的操作時間進行拌合、運輸與澆置；若初凝過快會導致無法順利澆置。終凝時間則代表水泥膏已具備足夠的硬度承受外力，此後可進行拆模及後續施工養護。'
        },
        {
          heading: '試驗誤差控制',
          body: '水泥膏溫度、拌合起算時間、針頭清潔度與自由落針方式都會影響讀值；每次觀測必須避開前一次針孔並保持固定間隔。'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '根據 CNS 規範，第一型 (Type I) 卜特蘭水泥的初凝時間不得少於多少分鐘？終凝時間不得超過多少分鐘？',
          steps: [
            '查閱規範標準，Type I 水泥初凝時間須大於或等於 45 分鐘。',
            '終凝時間須小於或等於 375 分鐘 (約 6.25 小時)。'
          ],
          answer: '初凝 ≥ 45 分鐘；終凝 ≤ 375 分鐘'
        },
        {
          difficulty: '高頻統測題',
          question: '進行維卡儀 (Vicat) 水泥凝結時間試驗前，必須先進行何種預備試驗？該預備試驗之合格判定標準為何？',
          steps: [
            '預備試驗：水泥膏「標準稠度試驗」(<span className="text-indigo-600 font-bold">CNS</span> 788)。',
            '合格標準：調整加水量後，10 mm 直徑之試針放鬆 30 秒時，沉入試棒下落停在底板上方 10 ± 1 mm 處 (或距頂面 30 ± 1 mm)。'
          ],
          answer: '水泥膏標準稠度試驗；試棒沉入停於底板上方 10 ± 1 mm。'
        },
        {
          difficulty: '進階',
          question: '在預拌混凝土工地施工中，若預拌車因交通壅塞延遲到達工地，水泥已超過「初凝時間」。現場主任強行要求往預拌車內大量加水重新拌合進行澆置。試評估此作法對混凝土結構強度與品質之影響。',
          steps: [
            '嚴重破壞強度與品質。超過初凝時間代表水泥水化晶網已開始形成。',
            '此時強行加水會破壞剛生成的 C-S-H 晶格網絡，且大幅提高水灰比 (W/C)，導致硬化後孔隙率暴增，抗壓強度劇烈下降 50% 以上，並造成嚴重的耐久性劣化與龜裂。此批混凝土應作廢退回！'
          ],
          answer: '嚴禁加水澆置！會破壞已生成晶格並暴增水灰比，導致強度暴跌廢棄。'
        },
        {
          difficulty: '高頻統測題',
          question: '維卡儀試驗中，用以測定「初凝時間」與「終凝時間」之針頭直徑規格分別為何？ (A) 初凝 10mm，終凝 1mm (B) 初凝 1mm，終凝 1mm (帶環) (C) 初凝 5mm，終凝 1mm (D) 初凝 1mm，終凝 10mm。',
          steps: [
            '初凝使用 1 mm 平頭針；終凝使用 1 mm 帶環狀附件針。故 (B) 正確。'
          ],
          answer: '(B) 初凝 1mm，終凝 1mm (帶環)'
        }
      ]
    },
    {
      slug: 'cement-strength',
      title: '2.4 水泥砂漿抗壓強度試驗',
      desc: '評估水泥品質與強度的標準砂漿試體 (5 × 5 × 5 cm 立方體) 製作與抗壓測試。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：cement-strength之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-1-26', '112-1-35', '112-1-38', '113-1-28'],
      worked_examples: [
        {
          question: '【步驟化例題】水泥砂漿抗壓強度計算：製作 50 mm × 50 mm × 50 mm 之標準水泥砂漿立方體試體，於 28 天養護後進行抗壓試驗。若試體破壞時壓力機讀數為 75.0 kN，求該水泥砂漿之抗壓強度（MPa）？',
          difficulty: '中等',
          steps: [ "步驟 1：計算受壓截面積 A。A = 50 mm × 50 mm = 2500 mm²。", "步驟 2：將破壞載重轉換為牛頓 N。P = 75.0 kN = 75,000 N。", "步驟 3：計算抗壓強度 f_c = P / A。f_c = 75,000 N / 2500 mm² = 30 N/mm² = 30 MPa。" ], 
          answer: '抗壓強度為 30 MPa (N/mm²)。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '水泥砂漿抗壓強度試驗步驟 (<span className="text-indigo-600 font-bold">CNS</span> 1010)',
          body: '利用標準級配的石英砂與指定比例製作試體，消除骨材變異的影響，純粹檢驗水泥膠體的強度發展潛能。',
          steps: [
            '配比拌合：水泥與**標準砂** (Standard Ottawa Sand) 重量比為 1 : 2.75，<span className="text-rose-600 font-bold">水灰比</span> W/C 固定為 0.485。',
            '試體鑄造：分兩層填入 50 mm 金屬試模中，每層以鋼製搗棒均勻搗實 32 次。',
            '標準養護：於養護箱內靜置 24 小時後拆模，浸泡於 23 ± 2°C 飽和石灰水槽中養護至 3, 7, 28 天。',
            '抗壓強度測試：以 900 ~ 1800 N/s 速率連續加壓至試體破壞，<span className="text-rose-600 font-bold">抗壓強度</span> fc = P / 25 cm²。'
          ]
        },
        {
          heading: '為何使用**標準砂**？',
          body: '試驗中使用「渥太華**標準砂** (Ottawa Sand)」是為了控制骨材的變因（例如粒徑分布、形狀、吸水率皆一致）。如此一來，抗壓強度的差異就能完全反映出「水泥本身」的品質好壞，而非受砂石雜質所影響。'
        },
        {
          heading: '載重速率與受壓面',
          body: '試體需以規定速率連續加載，並確保受壓面平整且置中；偏心或速率過快都可能使量得的抗壓強度失真。'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '進行 CNS 1010 水泥砂漿試驗時，試體受壓面積為何？若 28 天破壞載重 P = 100 kN，其抗壓強度為多少 MPa？',
          steps: [
            '試體尺寸為 50 × 50 × 50 mm 立方體。',
            '試體受壓面積 A = 50 mm × 50 mm = 2,500 mm²。',
            '<span className="text-rose-600 font-bold">抗壓強度</span> fc = P / A = 100,000 N / 2,500 mm² = 40 N/mm² = 40 MPa。'
          ],
          answer: '受壓面積 2,500 mm²；抗壓強度 40 MPa。'
        },
        {
          difficulty: '高頻統測題',
          question: 'CNS 1010 水泥砂漿試體製作時，水泥與標準砂之重量比例為何？標準固定水灰比 (W/C) 為多少？',
          steps: [
            '水泥與**標準砂**重量比為 1 : 2.75。',
            '標準固定水灰比 W/C = 0.485。'
          ],
          answer: '水泥:砂 = 1:2.75；水灰比 W/C = 0.485'
        },
        {
          difficulty: '進階',
          question: '某水泥砂漿試驗小組製作了一組 3 個 50mm 立方體試體，養護 7 天後進行抗壓測試，測得破壞載重分別為 62.5 kN, 65.0 kN, 63.5 kN。試計算該組 7 天抗壓強度之平均值 (MPa)。',
          steps: [
            '受壓面積 A = 5 cm × 5 cm = 25 cm² = 2,500 mm²。',
            '試體 1 強度 σ1 = 62,500 / 2500 = 25.0 MPa。',
            '試體 2 強度 σ2 = 65,000 / 2500 = 26.0 MPa。',
            '試體 3 強度 σ3 = 63,500 / 2500 = 25.4 MPa。',
            '平均強度 σ_avg = (25.0 + 26.0 + 25.4) / 3 = 76.4 / 3 ≒ 25.47 MPa。'
          ],
          answer: '7天平均抗壓強度 ≒ 25.47 MPa'
        },
        {
          difficulty: '高頻統測題',
          question: '在水泥砂漿抗壓試驗中，養護水槽中必須添加何種物質使水達到飽和，以防止試體中之氫氧化鈣 Ca(OH)₂ 溶出而影響強度？ (A) 氯化鈉 (B) 氫氧化鈣 (石灰) (C) 硫酸銅 (D) 碳酸鈉。',
          steps: [
            '養護水槽需為「飽和石灰水 (氫氧化鈣飽和水)」，防止試體內部 Ca(OH)₂ 晶體浸水溶出。故 (B) 正確。'
          ],
          answer: '(B) 氫氧化鈣 (石灰)'
        }
      ]
    },
    {
      slug: 'cement-storage',
      title: '2.5 水泥儲存與假凝 (False Set) 現象',
      desc: '水泥包裝、工地儲存管理規範，以及與「閃凝」不同的「假凝」現象之原理與處置。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：cement-storage之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: [],
      worked_examples: [
        {
          question: '【步驟化例題】水泥受潮與假凝現象處置：水泥工地倉庫若通風不良導致水泥受潮產生「假凝 (False Set)」現象，其特徵與應變處置方式為何？',
          difficulty: '中等',
          steps: [ "步驟 1：分析假凝特徵。拌合後數分鐘內迅速變硬，但「不放出大量水化熱」。", "步驟 2：區分假凝與快凝 (Flash Set)。快凝係 C3A 過高放出劇熱且無法恢復；假凝係石膏結晶析出。", "步驟 3：確定處置方式。假凝試體「未加水重新拌合」即可恢復可塑性，不影響最終強度。" ], 
          answer: '特徵為快速硬化但不發熱；處置方式為「不加水重新強制拌合」即可恢復可塑性。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '水泥包裝與工地儲存防潮',
          body: '台灣市售水泥包裝每袋標準重量為 50 kg。水泥具有極強的吸濕性，若於空氣中吸收水分會產生預先水化並結塊（風化現象），導致活性降低與強度折損。',
          steps: [
            '墊高儲存：現場儲存需置於棧板上，墊高離地至少 30 cm 以上，防止吸收地面濕氣。',
            '堆疊限制：堆疊高度不宜超過 10 包，以防底層水泥因長時間重壓而產生壓結硬化。',
            '先進先出：遵守「先進先出」原則，儲存時間不宜過久（最好不超過三個月）。'
          ]
        },
        {
          heading: '<span className="text-rose-600 font-bold">假凝</span> (False Set) vs <span className="text-rose-600 font-bold">閃凝</span> (Flash Set)',
          body: '這兩種現象皆會導致水泥膏在加水後快速變硬，但原理與處置方式截然不同。',
          table: {
            headers: ['比較項目', '假凝 (False Set)', '閃凝 (Flash Set)'],
            rows: [
              ['發生原因', '水泥研磨時溫度過高，石膏脫水變成半水石膏，加水後快速結晶', '熟料中 C3A 含量過高且未加足夠的石膏調節'],
              ['伴隨現象', '幾乎不釋放水化熱，溫度不升高', '釋放大量水化熱，溫度急遽升高'],
              ['處置方式', '持續用力拌合即可破壞結晶網絡，恢復塑性', '無法恢復，強行加水拌合會嚴重破壞結構強度'],
              ['影響程度', '施工困擾但對最終強度影響不大', '嚴重影響施工與最終強度']
            ]
          }
        },
        {
          heading: '進場驗收與批次管理',
          body: '水泥進場應核對製造日期、批號與包裝完整性；發現受潮硬塊、袋重異常或超期儲存時，需隔離並依規定重新試驗，不可直接投入拌合。'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '工地水泥加水後迅速變硬，但沒有明顯升溫，持續拌合後又恢復塑性。這是假凝還是閃凝？現場應如何處理？',
          steps: [
            '1. 分析伴隨現象：現場觀察到沒有明顯**水化熱**與升溫，先排除會劇烈放熱升溫的閃凝。',
            '2. 依據恢復能力：持續用力拌合後可破壞石膏結晶網絡並恢復塑性，符合假凝 (False Set) 的經典物理特徵。',
            '3. 現場處置規範：嚴禁任意額外加水；應持續用力拌合恢復工作塑性後正常澆置，並記錄水泥進場批號。'
          ],
          answer: '屬於假凝 (False Set)；現場應持續用力拌合恢復塑性，嚴禁任意加水。'
        },
        {
          difficulty: '高頻統測題',
          question: '依據 CNS 與施工規範，袋裝卜特蘭水泥在工地現場儲存時，下列何者符合標準規範？ (A) 直接置於泥土地面 (B) 棧板離地至少 30 cm (C) 堆疊高度可高達 25 包 (D) 無限制儲存期限。',
          steps: [
            '1. 離地防潮要求：現場儲存必須放置於木棧板上，離地高度至少 30 cm 以上，防止地面濕氣滲入造成風化結塊。故 (B) 正確。',
            '2. 堆疊限制：堆疊高度不得超過 10 包，防止底部水泥因重壓壓結硬化。',
            '3. 期限限制：儲存超過三個月的水泥需重新採樣試驗品質。'
          ],
          answer: '(B) 棧板離地至少 30 cm'
        },
        {
          difficulty: '高頻統測題',
          question: '關於水泥假凝 (False Set) 與閃凝 (Flash Set) 之成因對比，下列敘述何者正確？ (A) 假凝係因 C3A 含量過高 (B) 閃凝係因研磨溫度過高使石膏脫水 (C) 假凝不釋放大量水化熱 (D) 閃凝可透過持續拌合恢復塑性。',
          steps: [
            '1. 假凝成因：水泥磨細過程溫度過高，致使二水石膏脫水形成半水石膏，加水後快速結晶硬化，但不釋放大量**水化熱**。故 (C) 正確。',
            '2. 閃凝成因：熟料中 <span className="text-rose-600 font-bold">C3A</span> 含量過高且石膏未加足，加水後劇烈水化並釋放大量**水化熱**，無法透過拌合恢復。'
          ],
          answer: '(C) 假凝不釋放大量水化熱'
        },
        {
          difficulty: '進階',
          question: '一營造工地儲放之 500 包水泥，因梅雨季在庫房存放超過 4 個月。部分包裝外觀有輕微結塊。試說明：(1) 該批水泥進場與防潮儲存規範；(2) 對於存放超過 3 個月且輕微結塊水泥之檢驗與處置步驟。',
          steps: [
            '1. 防潮儲存規範：每袋標準重 50kg，需置於離地至少 30cm 棧板上、靠牆保留至少 30cm 通風間隙、堆疊不得超過 10 包。',
            '2. 存放超期與結塊處置步驟：',
            '  - 步驟 A：立即封存該批水泥，停止直接投入拌合樓生產。',
            '  - 步驟 B：檢視結塊硬度。若可用手指輕捏成粉末，代表僅為物理壓結；若硬如石頭，則已產生化學風化，必須作廢剔除。',
            '  - 步驟 C：依規定重新抽樣進行費開氏針凝結時間與抗壓強度試驗，重新評定其強度等級並調整混凝土配比。'
          ],
          answer: '(1) 離地≥30cm、離牆≥30cm、堆高≤10包；(2) 輕捏能成粉末者重新抽樣試驗抗壓強度與凝結時間，否則剔除作廢。'
        }
      ]
    },
    {
      slug: 'concrete',
      title: '3. 混凝土構造與配比設計',
      desc: '混凝土組成、水灰比 (W/C) 與強度關係 (Abrams Law)、絕對體積法配比設計步驟、坍度試驗、抗壓試驗與 SCC/HPC 特種混凝土。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：concrete之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-1-38', '112-1-27', '112-1-34', '113-1-26', '113-1-30', '113-1-37', '113-1-40', '114-1-29', '114-1-30', '115-1-24', '115-1-25', '115-1-26', '115-1-31', '115-1-35', '115-1-37', '115-1-40', '110-1-6', '110-1-14', '110-1-22', '110-1-30', '110-1-38'],
      worked_examples: [
        {
          question: '【步驟化例題】混凝土配比計算：設計一立方公尺 (1 m³) 混凝土，要求水灰比 W/C = 0.50。若經配比計算所需單位用水量 W = 175 kg/m³，求所需水泥用量 C 為多少公斤？',
          difficulty: '基礎',
          steps: [ "步驟 1：已知公式 W / C = 0.50。", "步驟 2：代入 W = 175 kg。175 / C = 0.50。", "步驟 3：求解 C。C = 175 / 0.50 = 350 kg。" ], 
          answer: '水泥用量 C 為 350 公斤 (kg)。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '混凝土組成與水化反應 (Hydration)',
          body: '混凝土由卜特蘭水泥、拌合水、粗粒料 (石子)、細粒料 (砂) 及化學摻劑組成。水化反應生成物主要為矽酸鈣水合物 (C-S-H 膠體) 與氫氧化鈣 Ca(OH)₂ 結晶。',
          table: {
            headers: ['混凝土組成成分', '體積占比 (%)', '重量占比 (%)', '主要功能與控制重點'],
            rows: [
              ['粗骨材 (Coarse Agg.)', '35% ~ 45%', '40% ~ 50%', '構成主要骨架，抵抗壓縮載重'],
              ['細骨材 (Fine Agg.)', '25% ~ 35%', '25% ~ 35%', '填補粗骨材間隙，傳遞漿體潤滑'],
              ['水泥膠體 (Cement)', '7% ~ 15%', '10% ~ 20%', '黏結粒料，水化產生強度'],
              ['拌合水 (Water)', '14% ~ 21%', '5% ~ 10%', '引發水化反應，提供流動工作性'],
              ['空氣 (Air)', '1% ~ 8%', '< 1%', '影響工作性與抗凍融耐久性']
            ]
          }
        },
        {
          heading: '水灰比理論 (Abrams\' Law) 與耐久性',
          body: '<span className="text-indigo-600 font-bold">亞伯拉罕法則</span> (Abrams\' Law) 指出，在**完全密實**的條件下，混凝土強度僅由水膠比 (W/C 或 W/B) 決定。水灰比越低，毛細孔隙率越低，抗壓強度越高。',
          formula: 'fc\' = A / (B^(W/C))\nACI 規範：一般結構 W/C ≤ 0.60；受凍融或防蝕要求 W/C ≤ 0.45'
        },
        {
          heading: '<span className="text-indigo-600 font-bold">絕對體積法</span> (Absolute Volume Method) 配比設計步驟 (ACI 211.1)',
          body: '配比設計旨在確保 1 m³ (1,000 L) 新鮮混凝土中，水泥、水、粒料與空氣之絕對體積總和精確等於 1 m³。',
          steps: [
            '選擇目標強度 fcr\'：依設計強度 fc\' 與標準差 s 計算 fcr\' = fc\' + 1.34s。',
            '選擇坍度與最大粒料尺寸 Dmax：依構件鋼筋淨距與工法決定坍度與 Dmax。',
            '估計拌合水量 (W) 與空氣含量：由坍度與 Dmax 查表求得每 m³ 水量 W (kg)。',
            '選擇水灰比 (W/C) 求水泥量 (C)：由 fcr\' 查表求得水灰比，計算 C = W / (W/C)。',
            '計算粗粒料重量 G：依細粒料 F.M. 與 Dmax 查表求乾鬆體積比例，乘以乾鬆單位重求 G。',
            '絕對體積法求細粒料 S：計算水、水泥、粗粒料與空氣絕對體積和，用 1.0 m³ 減去體積和求細粒料絕對體積，乘以比重求 S 重量。'
          ]
        },
        {
          heading: '坍度試驗與抗壓強度試驗 (<span className="text-indigo-600 font-bold">CNS</span> 1176 / <span className="text-indigo-600 font-bold">CNS</span> 1232)',
          body: '評估新鮮混凝土工作性 (Workability) 與 28 天設計抗壓強度 (fc\') 之標準檢測程序。',
          steps: [
            '坍度圓錐筒填裝 (<span className="text-indigo-600 font-bold">CNS</span> 1176)：頂直徑 10cm、底直徑 20cm、高 30cm。分 3 層填入試樣，每層搗實 25 次。平穩提筒後量測頂面降落高度 (cm)。',
            '抗壓試驗 (<span className="text-indigo-600 font-bold">CNS</span> 1232)：製作 15ψ × 30cm 或 10ψ × 20cm 標準圓柱試體，養護 28 天後蓋頂加壓至破壞，計算 fc\' = P / A。'
          ]
        },
        {
          heading: '特種混凝土比較：SCC vs HPC vs 輕質混凝土 vs 透水混凝土',
          body: '現代高品質建築工程常用特殊性能混凝土之配比特點與應用領域比較。',
          table: {
            headers: ['混凝土類型', '主要配比特點', '坍度/流展度', '主要工程優點與應用'],
            rows: [
              ['自密實混凝土 (SCC)', '高粉體量、低水膠比、添加強塑劑', '流展度 60 ~ 75 cm', '不需震動棒打設，自動填滿密集鋼筋間隙'],
              ['高性能混凝土 (HPC)', '極低水膠比 (<0.30)、添加矽灰', '高坍度 18 ~ 25 cm', '超高抗壓強度 (>70 MPa)、極高抗氯離子滲透性'],
              ['輕質粒料混凝土', '採用人造輕骨材或火山灰骨材', '坍度 7.5 ~ 15 cm', '單位重僅 1400~1850 kg/m³，減輕結構自重'],
              ['透水混凝土 (Pervious)', '無細粒料或極少砂，粗粒料點對點黏結', '零坍度 (開級配)', '孔隙率 15~25%，具備極佳透水性與降溫功能']
            ]
          }
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '某工程設計混凝土 28 天抗壓強度 fc\' = 28 MPa。若每立方公尺混凝土設計拌合用水量 W = 180 kg，指定水灰比 W/C = 0.45。求解每立方公尺混凝土所需水泥量。若私自加水 20 kg，新水灰比為多少？',
          steps: [
            '水泥用量 C = W / 0.45 = 180 / 0.45 = 400 kg。',
            '私自加水 20 kg 後總水量 W\' = 180 + 20 = 200 kg。',
            '新水灰比 (W/C)\' = 200 / 400 = 0.50，導致強度降低與耐久性劣化。'
          ],
          answer: '水泥量 = 400 kg；新水灰比 = 0.50'
        },
        {
          difficulty: '高頻統測題',
          question: '進行混凝土坍度試驗 (CNS 1176) 時，坍度圓錐筒之高度、頂直徑與底直徑分別為何？填裝混凝土時需分幾層搗實？每層搗實幾次？',
          steps: [
            '圓錐筒尺寸：高 30 cm，頂直徑 10 cm，底直徑 20 cm。',
            '填裝規範：分 3 層填入，每層均勻搗實 25 次。'
          ],
          answer: '高 30cm, 頂直徑 10cm, 底直徑 20cm；分 3 層，每層搗實 25 次。'
        },
        {
          difficulty: '進階',
          question: '進行 1 m³ 混凝土絕對體積法配比設計：水 W = 175 kg (比重 1.0)、水泥 C = 350 kg (比重 3.15)、粗骨材 G 重量 1060 kg (SSD 比重 2.65)、空氣含量 2.0%。細骨材 SSD 比重為 2.60。求解細骨材所需 SSD 重量。',
          steps: [
            'Vw = 175 / 1000 = 0.175 m³。',
            'Vc = 350 / (3.15 × 1000) ≈ 0.1111 m³。',
            'Vg = 1060 / (2.65 × 1000) ≈ 0.4000 m³。',
            'Vair = 0.0200 m³。',
            '已已知體積和 = 0.175 + 0.1111 + 0.4000 + 0.0200 = 0.7061 m³。',
            '細骨材體積 Vs = 1.0000 - 0.7061 = 0.2939 m³。',
            '細骨材重量 Ws = 0.2939 × 2.60 × 1000 ≈ 764.1 kg。'
          ],
          answer: '細骨材 SSD 重量 ≈ 764.1 kg'
        },
        {
          difficulty: '高頻統測題',
          question: '一標準混凝土圓柱試體直徑 15 cm，長 30 cm。28 天抗壓試驗時，試體在破壞載重 P = 530 kN 時破壞。求該混凝土之 28 天抗壓強度 fc\' (MPa)。',
          steps: [
            '試體受壓截面積 A = (π / 4) × (150 mm)² = (π / 4) × 22500 ≈ 17,671.46 mm²。',
            '破壞載重 P = 530 kN = 530,000 N。',
            'fc\' = P / A = 530,000 / 17,671.46 ≈ 29.99 MPa ≒ 30 MPa。'
          ],
          answer: 'fc\' ≒ 30.0 MPa'
        }
      ]
    },
    {
      slug: 'stone-ceramics-glass',
      title: '4. 石材、陶瓷製品與玻璃',
      desc: '火成岩/堆積岩/變質岩分類與花崗岩/大理石應用、普通磚與面磚試驗、吸水率與抗壓強度、平板玻璃/強化玻璃/複層低輻射 (Low-E) 玻璃與膠合玻璃。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：stone-ceramics-glass之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['112-1-25', '113-1-38', '114-1-36'],
      worked_examples: [
        {
          question: '【步驟化例題】建築石材性能比較：建築外牆貼飾石材中，花崗石 (Granite) 與大理石 (Marble) 在耐酸雨與耐候性上有何根本差異？外牆應選用何者？',
          difficulty: '基礎',
          steps: [ "步驟 1：分析花崗石成分。主要為火成岩（石英、長石），耐酸鹼、硬度高、耐候性極佳。", "步驟 2：分析大理石成分。主要為變質岩（碳酸鈣 CaCO3），易受酸雨侵蝕發黃剝落。", "步驟 3：確定選用原則。外牆應選用花崗石，大理石適用於室內牆面。" ], 
          answer: '花崗石耐酸鹼與耐候性極佳，適合外牆；大理石含碳酸鈣易受酸雨侵蝕，適用於室內。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '建築石材地質三大分類與物理特性',
          body: '天然石材按地質生成原因分為火成岩 (Igneous)、沉積岩 (Sedimentary) 與變質岩 (Metamorphic)。花崗岩硬度高、耐酸鹼，適合外牆與高磨耗地坪；大理石紋理美觀但不耐酸雨，適用於室內牆面；板岩具天然頁理，常用於屋頂與景觀步道。',
          table: {
            headers: ['地質類別', '代表石材名稱', '主要礦物成分', '物理/化學特性', '主要建築應用場合'],
            rows: [
              ['火成岩 (Igneous)', '花崗岩 (Granite)、玄武岩', '石英、長石、雲母', '莫氏硬度 6~7，低吸水率 (<0.5%)，耐酸鹼風化', '建築外牆乾掛帷幕、戶外廣場地坪、基座'],
              ['沉積岩 (Sedimentary)', '砂岩 (Sandstone)、石灰岩', '石英顆粒、碳酸鈣', '質地較軟，吸水率較高 (1~5%)，易吸污', '建築外牆雕飾、室內特色景觀牆'],
              ['變質岩 (Metamorphic)', '大理石 (Marble)、蛇紋石、板岩', '結晶方解石 (CaCO₃)', '莫氏硬度 3~4，質感高雅，極不耐酸雨侵蝕', '室內大樓大廳牆面、地坪、奢華檯面'],
              ['變質岩 (Metamorphic)', '板岩 (Slate)', '黏土礦物、水雲母', '具良好天然板理，易剝離成薄片，耐候性佳', '斜屋頂瓦片、原住民石板屋、景觀牆面']
            ]
          }
        },
        {
          heading: '陶瓷製品分類與普通紅磚品質試驗 (<span className="text-indigo-600 font-bold">CNS</span> 382)',
          body: '陶瓷製品由黏土經成型高溫燒結而成。按燒結程度分為土器、陶器、炻器 (Stoneware) 與瓷器 (Porcelain)。普通紅磚 (Red Clay Bricks, <span className="text-indigo-600 font-bold">CNS</span> 382) 劃分為一等磚與二等磚，試驗項目包含外觀尺寸、吸水率與抗壓強度。',
          steps: [
            '普通紅磚標準尺寸：200 mm (長) × 95 mm (寬) × 53 mm (厚)。',
            '吸水率試驗：將試體置於 110°C 烘箱中烘乾至恆重 (Wd)，浸泡於 24 小時常溫水或 5 小時沸水煮沸，秤得飽和重 (Ws)，吸水率 Abs = [(Ws - Wd) / Wd] × 100% (一等磚吸水率應 ≤ 15%)。',
            '抗壓強度試驗：將紅磚切半疊合或直接平放受壓，抗壓強度 fc = P / A (一等磚抗壓強度應 ≥ 15 MPa 或 150 kgf/cm²)。'
          ]
        },
        {
          heading: '面磚 (Tiles) 分類與 <span className="text-indigo-600 font-bold">CNS</span> 3299 檢測規範',
          body: '建築面磚按吸水率分為 I 類 (瓷質，<span className="text-rose-600 font-bold">吸水率</span> ≤ 1.0%)、II 類 (炻質，<span className="text-rose-600 font-bold">吸水率</span> ≤ 3.0%) 及 III 類 (陶質，<span className="text-rose-600 font-bold">吸水率</span> ≤ 50.0%)。外牆面磚必須採用 I 類或 II 類，並通過耐凍融性試驗與 <span className="text-indigo-600 font-bold">CNS</span> 12611 搬移拉拔防脫落試驗 (拉拔強度應 ≥ 0.6 MPa)。'
        },
        {
          heading: '建築玻璃種類與安全性能比較',
          body: '玻璃由矽砂 (SiO₂)、純鹼 (Na₂CO₃) 與石灰石經 1500°C 熔融製成。現代建築帷幕牆廣泛採用功能性安全玻璃。',
          table: {
            headers: ['玻璃種類', '製造工法與熱處理特點', '破壞狀態與安全特徵', '主要建築應用場合'],
            rows: [
              ['清平板玻璃 (Float Glass)', '退火冷卻之普通平板玻璃', '破壞呈大塊尖銳飛散碎片，極危險', '一般室內窗戶、門窗'],
              ['強化玻璃 (Tempered Glass)', '加熱至 600°C 後急冷，表面形成高壓應力層', '強度為普通玻璃 4~5 倍，破壞碎成鈍角小顆粒', '無框玻璃門、欄杆、高風壓窗'],
              ['膠合玻璃 (Laminated Glass)', '兩片玻璃中間夾入 PVB 或 SGP 樹脂膜高壓結合', '破壞時碎片黏附於夾層膜上不掉落，具防盜防墜', '天窗、採光罩、玻璃步道、高層帷幕牆'],
              ['複層低輻射玻璃 (Low-E IGU)', '兩片玻璃間留中空層 (充填氬氣)，鍍低輻射金屬膜', '遮陽係數 SC 低，極高遮熱隔熱節能效果', '綠建築外牆帷幕、冷氣房高省能窗']
            ]
          }
        },
        {
          heading: '石材乾掛工法 (Dry-Hanging System) 與防污處理',
          body: '高層建築外牆石材嚴禁採用傳統水泥砂漿濕貼工法（易引發白華 Efflorescence 及掉落危險），必須採用不銹鋼掛件乾掛工法。石材安裝前六面需塗刷滲透型防護劑 (Silane/Siloxane)，阻絕水分與污染物深入石材毛細孔。'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '建築外牆帷幕設計時，為什麼花崗岩適合用於戶外外牆，而大理石通常僅建議用於室內牆面與大廳地坪？普通紅磚 (CNS 382) 一等磚的吸水率上限規範為何？',
          steps: [
            '石材材質比較：',
            '花崗岩屬於火成岩，主要成分為石英與長石，硬度高 (莫氏硬度 6~7)，密度高且吸水率極低 (<0.5%)，對大氣中的酸雨 (二氧化硫/氮氧化物) 具備極佳耐腐蝕性與耐候性。',
            '大理石屬於變質岩，主要成分為碳酸鈣 (CaCO₃)，質地較軟 (莫氏硬度 3~4)，極易與酸雨反應生成可溶性硫酸鈣而發生表面蝕損、失光與褪色，故僅適合室內。',
            '普通紅磚規範：<span className="text-indigo-600 font-bold">CNS</span> 382 規定一等紅磚之吸水率應在 15% 以下。'
          ],
          answer: '花崗岩耐酸鹼且硬度高適合戶外；大理石主成分為 CaCO₃ 易受酸雨腐蝕僅適合室內；一等紅磚吸水率 ≤ 15%。'
        },
        {
          difficulty: '高頻統測題',
          question: '外牆貼飾面磚時，規範對面磚之吸水率有嚴格限制。依 CNS 3299 規範，瓷質面磚 (I 類) 之吸水率上限為何？外牆拉拔試驗防脫落之最小拉拔強度需達到多少 MPa？',
          steps: [
            '瓷質面磚 (I 類) 吸水率應在 1.0% 以下。',
            '外牆面磚現場拉拔強度應 ≥ 0.6 MPa (或 6 kgf/cm²)。'
          ],
          answer: '瓷質面磚吸水率 ≤ 1.0%；外牆拉拔強度 ≥ 0.6 MPa。'
        },
        {
          difficulty: '進階',
          question: '某高層辦公大樓之採光天窗與外牆帷幕擬進行玻璃選材。試解答：\n(1) 頂層採光天窗 (Skylight) 在安全性考慮下，規範強制要求必須採用何種安全玻璃？為什麼？\n(2) 綠建築外牆帷幕採用「複層低輻射玻璃 (Low-E Double Glazing)」時，其構造如何達到優異的節能隔熱效果？',
          steps: [
            '(1) 天窗玻璃選用：',
            '天窗必須採用「膠合玻璃 (Laminated Glass)」或「膠合強化玻璃」。',
            '原因：採光天窗位於人體頭頂下方，若遭受落石或冰雹擊碎時，普通強化玻璃破壞後顆粒仍會受重力整體塌落砸傷下方人員；膠合玻璃中間夾有高韌性 PVB/SGP 膜，即便玻璃碎裂，碎片仍會牢牢黏附於膜上不掉落，保障防墜安全。',
            '(2) Low-E 複層玻璃隔熱機制：',
            '構造包含兩片玻璃，中間夾有 12mm 厚之乾燥空氣或氬氣 (Ar) 中空層。',
            '玻璃內側鍍有極薄的銀金屬低輻射塗層 (Low-E Coating)。',
            '中空層可有效阻隔「熱傳導」與「熱對流」；Low-E 金屬膜可反射太陽光中的遠紅外線熱輻射 (Infrared Radiation)，將太陽熱能阻擋於室外，同時保持高可見光穿透率。'
          ],
          answer: '(1) 強制採用膠合玻璃，破壞時碎片黏附夾層膜防墜落；(2) 中空層阻絕傳導對流，Low-E 鍍膜反射紅外線熱輻射達成節能。'
        },
        {
          difficulty: '高頻統測題',
          question: '強化玻璃 (Tempered Glass) 的強度約為同厚度普通平板玻璃的幾倍？強化玻璃經切裁或打孔加工後有何後果？',
          steps: [
            '強化玻璃強度約為普通平板玻璃的 4 至 5 倍。',
            '強化玻璃表面具有高壓應力層，加工完成後「絕對不可進行任何切裁、鑽孔或磨邊」，否則會打破應力平衡導致整片玻璃碎裂成顆粒！'
          ],
          answer: '強度為普通玻璃 4-5 倍；裁切或打孔會引發整片玻璃即刻碎裂。'
        }
      ]
    },
    {
      slug: 'wood',
      title: '5. 木材構造與品質試驗',
      desc: '木材年輪構造、纖維飽和點 (FSP)、含水率與強度關係、集成材 (Glulam) 與 CLT 技術規格、木材防腐防蟻壓力注入法與抗灣試驗。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：wood之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-1-25', '111-1-34', '111-1-35', '113-1-24', '113-1-29', '114-1-27', '115-1-27', '115-1-30', '110-1-7', '110-1-15', '110-1-23', '110-1-31', '110-1-39'],
      worked_examples: [
        {
          question: '【步驟化例題】木材含水率與纖維飽和點 (FSP)：當木材乾燥過程含水率降低至「纖維飽和點 (FSP, 約 30%)」以下時，木材之物理強度與尺寸體積會產生何種變化？',
          difficulty: '中等',
          steps: [ "步驟 1：理解自由水與結合水。FSP 以上減少的是細胞腔內的自由水，不影響體積與強度。", "步驟 2：FSP 以下蒸發結合水。細胞壁內的結合水開始蒸發，導致木材開始「乾縮變形」。", "步驟 3：強度變化。隨著含水率降至 FSP 以下，木材之抗壓與抗彎強度顯著增加。" ], 
          answer: '尺寸體積開始產生「乾縮變形」；物理強度（抗壓/抗彎）則顯著增加。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '木材微觀構造與年輪組織',
          body: '樹木橫斷面由內向外包含髓心、木質部 (心材與邊材)、形成層與樹皮。年輪由春材 (早材，細胞壁薄、細胞腔大、顏色淺) 與夏材 (晚材，細胞壁厚、密實度高、顏色深) 構成。心材水分少且耐腐性佳；邊材含水率高易受蟲蛀。'
        },
        {
          heading: '<span className="text-rose-600 font-bold">含水率</span> (Moisture Content) 與纖維飽和點 (<span className="text-rose-600 font-bold">FSP</span>)',
          body: '木材水分分為細胞腔內的**自由水**與細胞壁內的**結合水**。**自由水**排空而**結合水**飽和時，稱為纖維飽和點 (<span className="text-rose-600 font-bold">FSP</span>，約 25%~30%)。',
          formula: 'w = [(W - Wd) / Wd] × 100%\nw > <span className="text-rose-600 font-bold">FSP</span>：水分增減不影響強度與體積\nw < <span className="text-rose-600 font-bold">FSP</span>：**結合水**蒸發，含水率每降 1%，強度提升且發生乾縮'
        },
        {
          heading: '木材之**異向性**與濕脹乾縮',
          body: '木材三個主方向乾縮率：縱向 (順紋) 最小 (0.1~0.3%)，徑向次之 (3~6%)，弦向最大 (6~12%)。弦向乾縮率約為徑向的 1.5~2 倍，為開裂翹曲主因。'
        },
        {
          heading: '工程木材規格：集成材 (Glulam) 與直交集成板 (CLT)',
          body: '集成材 (<span className="text-indigo-600 font-bold">CNS</span> 14630) 膠合木板同向疊合；直交集成板 (CLT) 各層正交 90° 堆疊，大幅克服**異向性**缺陷。',
          table: {
            headers: ['木材製品類型', '製造工法技術特點', '異向性表現', '主要結構應用'],
            rows: [
              ['製材 (Sawn Lumber)', '原木直接鋸切，保留天然木節', '極高 (弦向乾縮比徑向大 2 倍)', '小木屋柱梁、家具、模板底稿'],
              ['集成材 (Glulam)', '膠合木板同向平行疊合，分散木節', '順紋抗拉與抗壓強度極高', '大跨距大梁、拱結構、體育館'],
              ['直交集成板 (CLT)', '各層膠合木板呈 90° 交叉正交壓合', '近乎雙向均質，維度穩定性高', '高層木造建築牆板、樓板'],
              ['結構合板 (Plywood)', '薄木單板奇數層正交膠合', '平面內均質，防裂防翹', '結構牆體底板、混凝土模板']
            ]
          }
        },
        {
          heading: '木材防腐防蟻處理與試驗步驟 (<span className="text-indigo-600 font-bold">CNS</span> 3000 / <span className="text-indigo-600 font-bold">CNS</span> 453)',
          body: '水溶性防腐劑 (ACQ 銅氨季胺鹽) 壓力注入法步驟與靜曲抗灣強度 (MOR/MOE) 試驗步驟。',
          steps: [
            '前處理乾燥：**烘乾**至含水率 ≤ 19%。',
            '前真空抽氣：於加壓釜內抽真空至 -0.08 MPa 保持 30 分鐘。',
            '壓力注入：導入 ACQ 藥液加壓至 1.0~1.5 MPa 保持 1~2 小時。',
            '後真空固化：再次抽真空清除表面多餘藥液後出釜固化。',
            '靜曲抗灣試驗 (<span className="text-indigo-600 font-bold">CNS</span> 453)：三分點載重測試，計算破壞抗灣強度 MOR 與彈性模數 MOE。'
          ]
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '新伐木材烘乾前重 130g，烘乾後重 100g。求含水率。若 FSP 為 30%，含水率自 30% 降至 15% 時強度與體積有何變化？',
          steps: [
            '含水率 w = [(130 - 100) / 100] × 100% = 30%。',
            '當含水率由 30% (FSP) 降至 15% 時，細胞壁結合水脫去，木材體積發生乾縮，強度顯著提升。'
          ],
          answer: '含水率 = 30%；體積乾縮，強度提升。'
        },
        {
          difficulty: '高頻統測題',
          question: '木材順紋 (縱向)、徑向與弦向三個方向中，乾縮率最大的是哪一個方向？乾縮率最小的是哪一個方向？',
          steps: [
            '乾縮率最大：弦向 (6% ~ 12%)，約為徑向的 1.5~2 倍。',
            '乾縮率最小：順紋/縱向 (0.1% ~ 0.3%)。'
          ],
          answer: '最大：弦向；最小：順紋 (縱向)'
        },
        {
          difficulty: '進階',
          question: '松木原木直徑 320 mm、長度 4000 mm (含水率 35%)。氣乾 (15%) 時徑向乾縮率 4.0%、弦向乾縮率 7.5%、縱向乾縮率 0.2%。求乾燥至 15% 時之平行弦向直徑與長度。',
          steps: [
            '直徑 d1 = 320 × (1 - 0.075) = 296.0 mm。',
            '長度 L1 = 4000 × (1 - 0.002) = 3992.0 mm。'
          ],
          answer: '乾燥後直徑 = 296 mm，長度 = 3992 mm'
        },
        {
          difficulty: '高頻統測題',
          question: '關於集成材 (Glulam) 與直交集成板 (CLT) 的結構特質比較，下列何者正確？ (A) 集成材為木板 90° 正交膠合 (B) CLT 各層木板方向呈 90° 垂直交叉疊合 (C) 集成材僅能作為非承重隔間牆 (D) CLT 順紋抗拉強度低於普通原木。',
          steps: [
            'CLT (Cross-Laminated Timber) 核心技術即為相鄰木板層呈 90° 正交疊合膠壓。故 (B) 正確。'
          ],
          answer: '(B) CLT 各層木板方向呈 90° 垂直交叉疊合'
        }
      ]
    },
    {
      slug: 'polymers-asphalt',
      title: '6. 高分子、瀝青與防水塗料',
      desc: '石油瀝青 (Asphalt) 物理性質與針入度/軟化點試驗、塑膠 (熱塑性 vs 熱固性)、合成樹脂 (Epoxy, PU, Silicone) 與建築防水材料規範。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：polymers-asphalt之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-1-30', '112-1-22', '112-1-23', '113-1-31', '114-1-37', '115-1-36'],
      worked_examples: [
        {
          question: '【步驟化例題】瀝青針入度試驗物理意義：瀝青材料進行標準針入度試驗（25°C, 100g 針, 5秒），測得針入度數值為 60（單位為 0.1 mm）。試說明此數值之物理意義及高低溫環境之選用原則。',
          difficulty: '中等',
          steps: [ "步驟 1：換算貫入深度。60 代表針貫入深度為 60 × 0.1 mm = 6.0 mm。", "步驟 2：分析軟硬度。針入度越大代表瀝青越軟。", "步驟 3：環境選用原則。炎熱地區應選用較硬瀝青（針入度小如 60/70）防軟化車轍；寒冷地區選用較軟瀝青（85/100）防開裂。" ], 
          answer: '針入度 60 代表貫入深度 6.0 mm；炎熱地區應選用針入度較小（較硬）之瀝青。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '石油瀝青 (Asphalt) 分類與膠體學性質',
          body: '瀝青為石油煉製過程殘留之黑褐色高分子烴類混合物。由瀝青質 (Asphaltenes，提供黏結性與硬度)、膠質 (Resins) 與油分 (Oils，提供流動性) 組成。建築工程常採用直吹瀝青 (Straight Asphalt) 做路面鋪設，氧化瀝青 (Blown Asphalt) 作防水層。'
        },
        {
          heading: '瀝青三大基本性質試驗 (<span className="text-indigo-600 font-bold">CNS</span> 2260 / <span className="text-indigo-600 font-bold">CNS</span> 2261)',
          body: '評估瀝青硬度、感溫性與延展性之標準試驗。',
          steps: [
            '針入度試驗 (Penetration Test, <span className="text-indigo-600 font-bold">CNS</span> 2260)：在 25°C 條件下，以 100g 重之標準鋼針貫入瀝青試體 5 秒鐘，貫入深度 0.1 mm 定義為 1 度 (例如 60/70 級分瀝青代表針入度為 60~70 度)。針入度越大，瀝青越軟。',
            '軟化點試驗 (Ring and Ball Softening Point, <span className="text-indigo-600 font-bold">CNS</span> 2261)：採用環球法，將瀝青填入銅環中，上置 3.5g 鋼珠，置於水浴或甘油浴中以 5°C/min 速率升溫。當瀝青受熱軟化下垂觸及底板時之溫度即為軟化點 (°C)。',
            '延展性試驗 (Ductility Test, <span className="text-indigo-600 font-bold">CNS</span> 2262)：將八字形瀝青試體置於 25°C 水浴中，以 5 cm/min 速率拉伸，記錄拉斷時之拉伸長度 (cm)。'
          ]
        },
        {
          heading: '高分子塑膠分類：熱塑性 (Thermoplastic) vs 熱固性 (Thermosetting)',
          body: '建築高分子材料按加熱行為分為熱塑性塑膠與熱固性塑膠。',
          table: {
            headers: ['塑膠類別', '分子鏈結構特徵', '受熱行為與可逆性', '常見建築材料產品'],
            rows: [
              ['熱塑性塑膠 (Thermoplastic)', '線狀或枝狀分子鏈，分子間為凡德瓦力', '加熱軟化熔融，冷卻硬化，過程可逆可回收', 'PVC 水管、PE 膜、PP 板、PMMA 壓克力、Polymer 窗框'],
              ['熱固性塑膠 (Thermosetting)', '網狀交聯 (Cross-linked) 聚合物', '初次加熱固化後不再軟化，高溫直接焦化，不可回收', 'Epoxy 環氧樹脂地坪、FRP 玻璃纖維、PU 泡棉、酚醛樹脂']
            ]
          }
        },
        {
          heading: '塑膠資源回收標籤號碼 (Plastic Recycling Codes 1~7) 與工程特性',
          body: '國際通用塑膠資源回收編碼由 1 至 7 號組成，不同材質具備獨特之耐熱性、耐衝擊性與耐腐蝕性，常見於工程與日常生活。',
          table: {
            headers: ['編碼號碼', '材質英文縮寫', '中文學名', '耐熱度與主要物理特性', '典型工程與日常生活應用'],
            rows: [
              ['1 號', 'PET (PETE)', '聚乙烯對苯二甲酸酯', '耐熱約 60~85°C，透明度高、耐酸鹼', '寶特瓶、塑膠瓶、紡織纖維'],
              ['2 號', 'HDPE', '高密度聚乙烯', '耐熱約 90~110°C，耐腐蝕、高強度硬度', '牛奶瓶、清潔劑瓶、塑膠管道'],
              ['3 號', 'PVC', '聚氯乙烯', '耐熱約 60~80°C，耐磨性高、阻燃性好', 'PVC 給排水管、電線外皮、塑膠地板'],
              ['4 號', 'LDPE', '低密度聚乙烯', '耐熱約 70~90°C，柔韌性佳、耐延伸', '塑膠袋、保鮮膜、工地防塵遮蔽膜'],
              ['5 號', 'PP', '聚丙烯', '耐熱達 100~140°C，耐衝擊、韌性極佳', '微波餐盒、紐澤西護欄、汽車保險桿'],
              ['6 號', 'PS', '聚苯乙烯', '耐熱約 70~90°C，發泡後具多孔隔熱性', '發泡保麗龍板 (隔音隔熱)、免洗餐具'],
              ['7 號', 'OTHER', '其他類 (含 PC, ABS, Nylon)', '耐衝擊強度極高，結構硬度大', '工地安全帽、車燈罩、ABS工程塑膠']
            ]
          }
        },
        {
          heading: '建築三大防水樹脂與塗料比較：Epoxy vs PU vs Silicone',
          body: '建築屋頂、地下室與外牆防水工程常用高分子合成樹脂特性對比。',
          table: {
            headers: ['高分子樹脂名稱', '化學特質與塗膜特點', '耐候/耐紫外線性', '主要建築防水/地坪應用'],
            rows: [
              ['環氧樹脂 (Epoxy)', '高雙組分反應，塗膜極硬，耐磨耐化學酸鹼', '極差 (戶外易黃變粉化)', '室內停車場地坪、無塵室、結構裂縫灌注'],
              ['聚氨酯 (PU 防水材)', '具高彈性與高延伸率 (>400%)，可跨越結構微裂縫', '中等 (須加塗耐候 Topcoat)', '屋頂防水層、中庭防水、外牆填縫膠'],
              ['矽利康 (Silicone)', '有機矽聚合物，極高耐候性、耐 UV 與高低溫', '極佳 (戶外壽命 > 20年)', '帷幕牆玻璃填縫、伸縮縫、填縫膠']
            ]
          }
        },
        {
          heading: '建築防水工法：瀝青油毛氈 (Asphalt Felt) vs 高分子防水單層膜',
          body: '傳統熱瀝青油毛氈工法 (<span className="text-indigo-600 font-bold">CNS</span> 10145) 利用 3 鋪 4 塗鋪設油毛氈與熔融瀝青；現代工法採用 TPO / EPDM 高分子防水單層膜或熱熔式 APP/SBS 改質瀝青防水捲材，具備高施工效率與低空氣污染特點。'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '在道路鋪設與建築防水工程中，瀝青材料常進行「針入度試驗」與「軟化點試驗」。試說明：\n(1) 針入度值 60/70 代表何種物理意義？\n(2) 在炎熱的台灣夏季路面工程中，應選擇軟化點較高還是較低的瀝青？為什麼？',
          steps: [
            '(1) 針入度意義：',
            '代表在 25°C、100g 載重、5秒試驗條件下，標準鋼針貫入瀝青試體的深度介於 6.0 mm 至 7.0 mm 之間 (1度 = 0.1 mm)。針入度越小代表瀝青越硬。',
            '(2) 軟化點選擇：',
            '應選擇軟化點較高之瀝青。',
            '原因：夏季路面受太陽暴曬溫度可達 60°C 以上，若瀝青軟化點過低，瀝青易高溫軟化流動產生車轍 (Rutting) 與推擠變形。高軟化點瀝青具備優良之高溫抗變形能力。'
          ],
          answer: '(1) 代表 25°C 下貫入深度為 6.0~7.0 mm；(2) 應選擇高軟化點瀝青，以防止夏季高溫路面軟化產生車轍與變形。'
        },
        {
          difficulty: '高頻統測題',
          question: '下列何者屬於「熱固性塑膠 (Thermosetting Plastic)」？受熱後有何反應？ (A) PVC 聚氯化乙烯水管 (B) PE 聚乙烯膜 (C) Epoxy 環氧樹脂 (D) PMMA 壓克力板。',
          steps: [
            'Epoxy 環氧樹脂具備網狀交聯結構，屬於熱固性塑膠。初次受熱反應固化後，再次加熱不會熔融軟化，溫度過高會直接焦化分解。故 (C) 正確。'
          ],
          answer: '(C) Epoxy 環氧樹脂；受熱不可熔融，高溫直接焦化分解。'
        },
        {
          difficulty: '進階',
          question: '某大樓地下室停車場地坪與頂樓露天屋頂擬進行防水與地面工程。設計師規劃：停車場地坪採用 Epoxy (環氧樹脂)，屋頂防水層採用 PU (聚氨酯防水材)。試分析此種材料配置的力學與耐候合理性。',
          steps: [
            '(1) 地下室停車場採用 Epoxy 之合理性：',
            '地下室停車場需頻繁承受車輛重壓與輪胎摩擦，且接觸汽油與機油。Epoxy 固化後形成高硬度、高耐磨且耐油類酸鹼化學品侵蝕的緻密塗膜。此外地下室無太陽直射，避開了 Epoxy 易受 UV 黃變粉化的缺點。',
            '(2) 屋頂採用 PU 之合理性：',
            '屋頂直接承受晝夜溫差變化，混凝土樓板易產生熱脹冷縮之微細裂縫。PU 塗膜具備極高之彈性與伸長率 (>400%)，能有效「跨越裂縫」維持防水連續性。塗佈後外層再加上耐候 Topcoat 即可抵禦 UV 照射。'
          ],
          answer: '配置極為合理。Epoxy 高硬耐磨適合室內車道；PU 高彈性可跨越屋頂熱脹裂縫。'
        },
        {
          difficulty: '高頻統測題',
          question: '建築帷幕牆玻璃填縫與金屬伸縮縫工程中，常用耐候性最優異、可耐太陽紫外線 (UV) 長達 20 年以上的填縫膠材為何？ (A) PU 膠 (B) 環氧樹脂 (C) 矽利康 (Silicone) (D) 瀝青膏。',
          steps: [
            '矽利康 (Silicone 矽酮) 具備主鏈 Si-O 鍵，極具抗 UV 氧化能力，為帷幕牆耐候填縫首選。故 (C) 正確。'
          ],
          answer: '(C) 矽利康 (Silicone)'
        }
      ]
    },
    {
      slug: 'metals',
      title: '7. 金屬材料與防蝕試驗',
      desc: '鋼材化學成分與碳含量效應、結構鋼規格 (SS400, SN490, SD280, SD420)、鋼筋拉伸試驗 (CNS 2111)、金屬電化學腐蝕與熱浸鍍鋅/陰極防蝕技術。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：metals之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-1-21', '111-1-39', '112-1-32', '112-1-36', '113-1-34', '113-1-35', '114-1-32', '114-1-40', '115-1-32', '110-1-8', '110-1-16', '110-1-24', '110-1-32', '110-1-40'],
      worked_examples: [
        {
          question: '【步驟化例題】鋼筋拉伸試驗與降伏強度計算：一根標稱直徑為 16 mm (截面積 A = 200 mm²) 之竹節鋼筋進行拉伸試驗。若試體到達降伏點時壓力機拉力為 56.0 kN，求該鋼筋之「降伏強度 fy」為多少 MPa？',
          difficulty: '中等',
          steps: [ "步驟 1：轉換拉力單位。P = 56.0 kN = 56,000 N。", "步驟 2：計算降伏應力 fy = P / A。fy = 56,000 N / 200 mm² = 280 N/mm²。", "步驟 3：單位轉換。280 N/mm² = 280 MPa (此即 SD280 鋼筋)。" ], 
          answer: '降伏強度 fy 為 280 MPa (N/mm²)。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '鋼材化學成分與碳含量效應',
          body: '鋼材由鐵 (Fe) 與碳 (C) 構成，碳含量增加時，珠光體比例上升，<span className="text-rose-600 font-bold">抗拉強度</span>、降伏強度與硬度提高；但延展性、衝擊韌性與銲接性能劇烈下降。'
        },
        {
          heading: '結構用鋼材規格與 <span className="text-indigo-600 font-bold">CNS</span> 標準',
          body: '建築鋼結構常用規格：SS400 一般結構鋼、SN490B/C 建築耐震結構鋼 (限制降伏比 fy/fu ≤ 0.80) 及 SD280W/SD420W 銲接級鋼筋。',
          table: {
            headers: ['鋼材規格與名稱', 'CNS 規範代號', '最小降伏強度 (MPa)', '抗拉強度範圍 (MPa)', '主要規定與工程應用'],
            rows: [
              ['SS400 (一般結構鋼)', 'CNS 2473', '245 MPa', '400 ~ 510 MPa', '用於一般次要鋼構件、工作台'],
              ['SN490B (耐震結構鋼)', 'CNS 13812', '325 ~ 445 MPa', '490 ~ 610 MPa', '限制降伏比 fy/fu ≤ 0.80，主梁主柱耐震結構'],
              ['SD280W (銲接級鋼筋)', 'CNS 560', '280 MPa', '≥ 420 MPa', '限制碳當量 Ceq，用於一般 RC 牆版、箍筋'],
              ['SD420W (高強銲接鋼筋)', 'CNS 560', '420 MPa', '≥ 560 MPa', '高強度耐震鋼筋，用於高層建築柱筋']
            ]
          }
        },
        {
          heading: '鋼筋拉伸試驗步驟 (<span className="text-indigo-600 font-bold">CNS</span> 2111 / <span className="text-indigo-600 font-bold">ASTM</span> A370)',
          body: '測定鋼筋降伏強度 (σy)、<span className="text-rose-600 font-bold">抗拉強度</span> (σu) 與伸長率之標準程序。',
          steps: [
            '標點標記：標距長度 L₀ (L₀ = 5d 或 200 mm)。',
            '萬能試驗機夾持：裝上延伸計精確記錄應變。',
            '加壓至降伏：記錄降伏載重 Py，計算 σy = Py / A₀。',
            '拉斷至最大載重：記錄最大載重 Pu，計算 σu = Pu / A₀ 及伸長率 E.L. = [(L1 - L₀) / L₀] × 100%。'
          ]
        },
        {
          heading: '鋼筋與鋼結構電化學腐蝕機制',
          body: '陽極反應：Fe → Fe²⁺ + 2e⁻；陰極反應：O₂ + 2H₂O + 4e⁻ → 4OH⁻。生成鐵鏽 Fe₂O₃·nH₂O 體積膨脹 2~6 倍，導致混凝土開裂剝落。'
        },
        {
          heading: '金屬防蝕與陰極保護技術',
          body: '**熱浸鍍鋅** (Hot-Dip Galvanizing，提供物理隔離與犧牲陽極)、陰極防蝕 (Cathodic Protection)、環氧樹脂塗裝鋼筋與耐候鋼 (SPA-H)。'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: 'SN490B 鋼材名稱中「SN」與「490」含義為何？為何耐震結構強調限制降伏比 (fy/fu)？',
          steps: [
            'SN 代表 <span className="text-indigo-600 font-bold">CNS</span> 13812 建築結構用鋼；490 代表最小抗拉強度 490 MPa。',
            '降伏比上限 fy/fu ≤ 0.80 可確保鋼材在降伏後具備巨大塑性變形儲備與耗能能力，防止結構突然脆斷。'
          ],
          answer: 'SN 為建築耐震鋼，490 為最小抗拉強度 490 MPa；降伏比 ≤ 0.80 可確保耐震延性耗能。'
        },
        {
          difficulty: '高頻統測題',
          question: '鋼材中當「碳含量 (Carbon Content)」增加時，下列哪幾種力學性質會隨之提高？哪幾種會隨之下降？ (1) 抗拉強度 (2) 延展性 (3) 硬度 (4) 可銲性 (5) 衝擊韌性。',
          steps: [
            '碳含量增加：(1) 抗拉強度與 (3) 硬度提高。',
            '但 (2) 延展性、(4) 可銲性與 (5) 衝擊韌性大幅下降。'
          ],
          answer: '提高：抗拉強度、硬度；下降：延展性、可銲性、衝擊韌性。'
        },
        {
          difficulty: '進階',
          question: 'SD420W D25 鋼筋 (公稱面積 506.7 mm²，L₀ = 200 mm) 測得 Py = 240 kN, Pu = 330 kN, L1 = 236 mm。計算 σy, σu 及伸長率並判定是否符合 CNS 560 (σy ≥ 420 MPa, σu ≥ 560 MPa, E.L. ≥ 14%)。',
          steps: [
            'σy = 240,000 / 506.7 ≈ 473.7 MPa ≥ 420 MPa (合格)。',
            'σu = 330,000 / 506.7 ≈ 651.3 MPa ≥ 560 MPa (合格)。',
            'E.L. = [(236 - 200) / 200] × 100% = 18.0% ≥ 14% (合格)。'
          ],
          answer: 'σy ≈ 473.7 MPa, σu ≈ 651.3 MPa, 伸長率 = 18.0%，判定完全合格。'
        },
        {
          difficulty: '高頻統測題',
          question: '鋼結構戶外防蝕常用「熱浸鍍鋅 (Hot-Dip Galvanizing)」工法。金屬鋅 (Zn) 覆蓋於鐵 (Fe) 表面時，具備何種電化學保護機制？',
          steps: [
            '鋅的金屬活性大於鐵，當鍍層發生破損劃傷時，鋅優先作陽極失去電子氧化腐蝕，從而保護陰極鐵不被腐蝕。',
            '此機制稱為「**犧牲陽極防蝕** (Sacrificial Anodic Protection)」。'
          ],
          answer: '犧牲陽極防蝕機制 (鋅優先氧化保護鐵)'
        }
      ]
    },
    {
      slug: 'green-materials',
      title: '8. 綠建材與永續材料發展',
      desc: '綠建材標章四大分類 (生態、健康、高性能、再生)、TVOC 與甲醛小型釋放腔檢測、飛灰/爐石低碳水泥、再生骨材與 LCA 碳足跡。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: ["本章核心基礎：green-materials之關鍵定義與物理幾何直覺","解題前置檢核：確認題型情境、已知條件量與求解目標"],
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-1-37', '114-1-25'],
      worked_examples: [
        {
          question: '【步驟化例題】綠建材標章評定體系：我國「綠建材標章 (Green Building Material)」分為四大類別，包含生態綠建材、健康綠建材、高性能綠建材與何者？',
          difficulty: '基礎',
          steps: [ "步驟 1：回顧綠建材四大分類體系。1. 生態 (Ecological), 2. 健康 (Healthy, 低 TVOC/甲醛), 3. 高性能 (High Performance, 隔音/透水), 4. 再生 (Recycled)。", "步驟 2：識別第四類。再生綠建材 (Recycled Green Building Materials)。", "步驟 3：總結。第四類為「再生綠建材」。" ], 
          answer: '第四類為「再生綠建材 (Recycled Green Building Material)」。'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'materials-real-world.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '綠建材標章四大分類體系 (Green Building Material)',
          body: '依據內政部建築研究所綠建材標章評估體系劃分。',
          table: {
            headers: ['綠建材分類', '主要評估範疇與定義', '標準與指標要求', '典型代表性產品'],
            rows: [
              ['生態綠建材 (Ecological)', '採用無匱乏危機之天然材料，減少加工耗能', '天然植物/礦物原料 ≥ 90%', '天然木材、竹材、天然泥土塗料'],
              ['健康綠建材 (Healthy)', '低 TVOC 及低甲醛逸散，保障健康', '甲醛逸散率 E1/E0 級，低 TVOC 逸散', '水性乳膠漆、無甲醛系統板材'],
              ['高性能綠建材 (High Performance)', '具備高防音、高隔熱、高透水或抗震', '遮陽係數 SC, 隔音 Rw, 降噪 NRC', '複層中空 Low-E 玻璃、隔音樓板墊'],
              ['再生綠建材 (Recycled)', '利用廢棄物回收再利用製造', '回收廢料摻配比率 (如廢玻璃 ≥ 50%)', '再生高爐石水泥、回收廢塑木 (WPC)']
            ]
          }
        },
        {
          heading: '健康綠建材**甲醛**與 **TVOC** 檢測步驟 (<span className="text-indigo-600 font-bold">CNS</span> 16053)',
          body: '採用小型釋放腔法 (Environment Chamber Method) 檢測建材污染物逸散率。',
          steps: [
            '試樣採集：非測試邊緣用不銹鋼箔密封，留單面逸散。',
            '測試環境腔：置於 23 ± 1°C、濕度 50 ± 5%、換氣率 0.5 次/hr 之腔體。',
            '採樣分析：採集 DNPH 採樣管，以高效液相層析儀 (HPLC) 分析**甲醛**與 **TVOC** 逸散速率。'
          ]
        },
        {
          heading: '綠色低碳混凝土：飛灰與水淬高爐石粉 (PoZZolanic Materials)',
          body: '飛灰 (<span className="text-indigo-600 font-bold">CNS</span> 3036) 具圓球形微觀顆粒 (滾珠效應)，提升工作性並具波佐蘭反應；水淬高爐石粉 (<span className="text-indigo-600 font-bold">CNS</span> 12549) 具潛在水硬性，提高抗氯離子與抗硫酸鹽能力。',
          formula: '<span className="text-rose-600 font-bold">波佐蘭反應</span>：SiO₂ + Ca(OH)₂ + H₂O → C-S-H 膠體\nCO₂ 減碳量 ≈ 水泥替代重量 (kg) × 0.85 kg-CO₂/kg'
        },
        {
          heading: '再生骨材與再生粒料應用分級',
          body: '廢混凝土塊加工之再生骨材 (RCA) 結構性混凝土限用 A 級 (<span className="text-rose-600 font-bold">吸水率</span> < 3%)，非結構性面層可用 B/C 級。'
        },
        {
          heading: '綠建築**生命週期評估** (LCA) 與碳足跡',
          body: '建材環境衝擊由 LCA 衡量，包含原料開採、加工、施工、使用至拆除回收。建築物蘊含碳 (Embodied Carbon) 控制為 Net-zero 淨零目標核心。'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '健康綠建材主要管制哪兩種有害物質？混凝土中加入飛灰替代部分水泥有何生態與工程效益？',
          steps: [
            '健康綠建材管制游離**甲醛**與總揮發性有機化合物 (**TVOC**)。',
            '生態上去化廢棄物並節能減碳 (1噸水泥約排 0.85噸 CO₂)；工程上產生滾珠效應改善工作性，並經波佐蘭反應提升後期強度與緻密性。'
          ],
          answer: '管制甲醛與 TVOC；生態上減碳去化廢料，工程上改善工作性與後期耐久性。'
        },
        {
          difficulty: '高頻統測題',
          question: '採用廢棄玻璃瓶研磨細粉替代 50% 骨材製成之面磚，屬於內政部綠建材標章四大分類中之哪一類？隔音樓板墊與 Low-E 複層玻璃屬於哪一類？',
          steps: [
            '回收廢棄玻璃製成面磚：屬於「再生綠建材」。',
            '隔音樓板墊與 Low-E 玻璃：屬於「高性能綠建材」。'
          ],
          answer: '廢玻璃面磚：再生綠建材；隔音墊/Low-E玻璃：高性能綠建材。'
        },
        {
          difficulty: '進階',
          question: '1,000 m³ 混凝土原每 m³ 需水泥 400 kg。現以 40% 水淬高爐石粉替代水泥。已知生產 1 噸水泥碳排 0.85 t-CO₂e，高爐石粉碳排 0.05 t-CO₂e。求解水泥節約量與總減碳量。',
          steps: [
            '原水泥用量 = 1,000 × 400 = 400,000 kg = 400 噸。',
            '高爐石粉替代量 = 400 × 40% = 160 噸 (即節約 160 噸水泥)。',
            '原碳排 = 400 × 0.85 = 340 t-CO₂e。',
            '新碳排 = (240 × 0.85) + (160 × 0.05) = 204 + 8 = 212 t-CO₂e。',
            '減碳量 = 340 - 212 = 128 t-CO₂e。'
          ],
          answer: '節約水泥 160 噸 (160,000 kg)；總減碳量 = 128 t-CO₂e。'
        },
        {
          difficulty: '高頻統測題',
          question: '在低碳波佐蘭反應中，飛灰或矽灰本身無水硬性，但能與卜特蘭水泥水化產生的何種副產物反應，進而生成具備強度的 C-S-H 膠體？ (A) 硫酸鈣 (B) 氫氧化鈣 Ca(OH)₂ (C) 氧化鎂 (D) 碳酸鈣。',
          steps: [
            '<span className="text-rose-600 font-bold">波佐蘭反應</span> (PoZZolanic reaction) 係反應中矽酸 (SiO₂) 與水泥水化產物「氫氧化鈣 Ca(OH)₂」反應生成額外 C-S-H 膠體。故 (B) 正確。'
          ],
          answer: '(B) 氫氧化鈣 Ca(OH)₂'
        }
      ]
    }
  ]
};
