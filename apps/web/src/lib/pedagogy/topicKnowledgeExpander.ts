export interface TopicDeepKnowledge {
  cnsAndCodes: {
    code: string;
    title: string;
    description: string;
  };
  bilingualTerms: {
    en: string;
    zh: string;
    abbr?: string;
    context: string;
  }[];
  decisionFlow: {
    step1: string;
    step2: string;
    step3: string;
  };
  examTrend: {
    frequency: '⭐⭐⭐⭐⭐ 每屆必考' | '⭐⭐⭐⭐ 高頻核心' | '⭐⭐⭐ 常見題型';
    keyQuestionTypes: string[];
    killerTrick: string;
  };
  landmarkCase: {
    name: string;
    location: string;
    structuralFeature: string;
    pedagogicalInsight: string;
  };
}

export function getTopicDeepKnowledge(subjectSlug: string, topicSlug: string): TopicDeepKnowledge {
  // === 1. Mechanics (基礎工程力學) ===
  if (subjectSlug === 'mechanics') {
    if (topicSlug.includes('vector') || topicSlug.includes('force')) {
      return {
        cnsAndCodes: {
          code: '建築技術規則建築構造編 第 1 條至第 10 條',
          title: '設計載重與力之傳遞規範',
          description: '建築物所有構造構件均應能承受垂直靜載重、活載重及側向風力、地震力之分力組合，確保力之傳遞路徑連續且不中斷。'
        },
        bilingualTerms: [
          { en: 'Force Vector Resolution', zh: '力向量分解', abbr: 'F_x, F_y', context: '將任意傾斜方向之合力依正交直角座標拆解為水平推力與垂直分力。' },
          { en: 'Coplanar Concurrent Forces', zh: '共面共點力系', context: '作用於同一平面且所有力的作用線交於同一點之力系統，合力可用力多邊形求解。' },
          { en: 'Equilibrium Equation', zh: '靜力平衡方程式', abbr: '∑F = 0', context: '物體處於靜止狀態時，水平分力總和為零且垂直分力總和為零。' },
          { en: 'Resultant Force', zh: '合力', abbr: 'R', context: '多個分力合成之單一等效作用力，大小等於平方和開根號 R = √(Fx² + Fy²)。' }
        ],
        decisionFlow: {
          step1: '【看受力圖】找出每個力的傾斜角度 θ，確認角度是與「水平線」還是「垂直線」夾角。',
          step2: '【正交分解】沿水平軸取 Fx = F·cosθ、沿垂直軸取 Fy = F·sinθ（以右為正、上為正）。',
          step3: '【合力驗算】計算 ∑Fx 與 ∑Fy，總合力 R = √(∑Fx² + ∑Fy²)，方向角 α = tan⁻¹(|∑Fy| / |∑Fx|)。'
        },
        examTrend: {
          frequency: '⭐⭐⭐⭐⭐ 每屆必考',
          keyQuestionTypes: ['三力共點平衡拉索求張力', '正交分解求未知分力', '多力合成與合力方向角'],
          killerTrick: '三力共點平衡且角度為 30°-60°-90° 或 45°-45°-90° 時，直接用國中直角三角形比例 (1:√3:2 或 1:1:√2) 秒殺，不需列長式！'
        },
        landmarkCase: {
          name: '淡江大橋主塔斜拉索系統',
          location: '新北市淡水區 / 八里區',
          structuralFeature: '單塔不對稱斜張橋，主塔呈流線型向上延伸，藉由數十條高強度斜拉鋼索將橋面載重傳遞至地基。',
          pedagogicalInsight: '每一根傾斜鋼索的巨大張力，都經由力向量正交分解拆解為支撐橋面垂直重力分力與平衡單塔推力之水平分力。'
        }
      };
    }

    if (topicSlug.includes('beam') || topicSlug.includes('moment') || topicSlug.includes('shear')) {
      return {
        cnsAndCodes: {
          code: '建築技術規則建築構造編 第 332 條',
          title: '樑構件容許撓度與抗彎剪力限制',
          description: '地板樑於全部載重作用下之最大撓度不得超過跨度 L/360，且構件各剖面之彎矩與剪力強度需滿足設計規範。'
        },
        bilingualTerms: [
          { en: 'Bending Moment Diagram', zh: '彎矩圖', abbr: 'BMD', context: '沿樑長度方向繪製各截面彎矩值之幾何圖形，最大彎矩點即剪力為零之處。' },
          { en: 'Shear Force Diagram', zh: '剪力圖', abbr: 'SFD', context: '各截面垂直錯動剪力之分佈圖，剪力圖之面積等於相應區間之彎矩增量 ΔM = ∫V dx。' },
          { en: 'Section Modulus', zh: '截面係數', abbr: 'Z / S', context: '截面對中性軸抵抗彎曲之幾何能力，矩形截面 Z = bh²/6，最大正應力 σ = M/Z。' },
          { en: 'Point of Contraflexure', zh: '反曲點 / 零彎矩點', context: '樑受彎變形時凸凹曲率轉向之位置，該截面彎矩為零 M = 0。' }
        ],
        decisionFlow: {
          step1: '【求支承反力】對左支點取力矩 ∑M_A = 0 求解右支點反力 R_B，再用 ∑Fy = 0 求出左支點反力 R_A。',
          step2: '【畫剪力圖 SFD】由左向右畫剪力，遇到向上反力向上跳、遇到向下載重向下跳或均佈向下斜率走。',
          step3: '【求最大彎矩 BMD】找出剪力過零點 (V = 0)，該位置即為樑之極限彎矩 M_max，用截面法或剪力面積法求值。'
        },
        examTrend: {
          frequency: '⭐⭐⭐⭐⭐ 每屆必考',
          keyQuestionTypes: ['簡支梁中央集中載重求最大彎矩 PL/4', '均佈載重簡支梁最大彎矩 wL²/8', '懸臂梁端點彎矩 -PL'],
          killerTrick: '剪力圖與零軸相交點（V = 0），對應之彎矩圖絕對是頂峰或谷底極大值！'
        },
        landmarkCase: {
          name: '國立自然科學博物館太空劇場懸臂挑簷',
          location: '台中市北區',
          structuralFeature: '大跨度懸臂樑挑出，無立柱支撐下方通透廣場空間。',
          pedagogicalInsight: '懸臂樑固定端承受最大負彎矩，鋼筋必須配置在樑的「上方受拉區」，與簡支梁鋼筋放下方恰好相反！'
        }
      };
    }

    return {
      cnsAndCodes: {
        code: '建築技術規則建築構造編 基礎構造篇',
        title: '靜力平衡與結構穩定性原則',
        description: '結構物必須具備足夠之抗傾覆安全係數 (FS ≥ 1.5) 與抗滑動安全係數，確保在極限載重下整體處於絕對靜止穩定。'
      },
      bilingualTerms: [
        { en: 'Free Body Diagram', zh: '自由體圖', abbr: 'FBD', context: '將研究構件自周遭環境隔離並標註所有已知與未知外力、反力之分析圖。' },
        { en: 'Center of Gravity / Centroid', zh: '形心與重心', abbr: 'C / G', context: '幾何圖形面積或物體重量之一階矩平衡中心，矩形位於中心、三角形位於 1/3 高度。' },
        { en: 'Moment of Inertia', zh: '截面二次矩 / 慣性矩', abbr: 'I', context: '矩形對形心水平軸 I = bh³/12，決定樑柱抵抗撓曲變形之抗彎剛度 EI。' }
      ],
      decisionFlow: {
        step1: '【繪製自由體圖 FBD】畫出構件完整外形，清楚標出支承型態（鉸支承 2 反力、滾支承 1 反力、固定端 3 反力）。',
        step2: '【建立平衡聯立方程式】依序列出 ∑Fx = 0、∑Fy = 0、∑M = 0。',
        step3: '【解方程式並檢驗】聯立求出所有未知反力，檢核反力方向正負號是否符合直覺重力平衡。'
      },
      examTrend: {
        frequency: '⭐⭐⭐⭐⭐ 每屆必考',
        keyQuestionTypes: ['桁架節點法求桿件軸力', '形心座標與平行軸定理求慣性矩', '複合截面抗彎應力計算'],
        killerTrick: '計算對稱結構之支承反力時，兩邊支點各分得一半總載重，可免去取力矩聯立之繁瑣計算！'
      },
      landmarkCase: {
        name: '台北 101 大樓 660 噸調諧質量阻尼器 (TMD)',
        location: '台北市信義區',
        structuralFeature: '由 41 層厚鋼板焊接成直徑 5.5 公尺的金屬球體，懸吊於 87 至 92 樓之間。',
        pedagogicalInsight: '當強風或地震使大樓向左晃動時，阻尼球因慣性產生反向擺動，產生反向慣性力將大樓拉回平衡位置，降低 40% 晃動幅度。'
      }
    };
  }

  // === 2. Materials (材料與試驗) ===
  if (subjectSlug === 'materials') {
    if (topicSlug.includes('concrete') || topicSlug.includes('slump') || topicSlug.includes('cement')) {
      return {
        cnsAndCodes: {
          code: 'CNS 1176 / CNS 3090',
          title: '混凝土坍度試驗法與預拌混凝土標準',
          description: '規範坍度錐尺寸（上口徑 10cm、底徑 20cm、高 30cm），分 3 層裝填每層各以搗棒插搗 25 次，於 5±2 秒內垂直提起測定坍落公分數。'
        },
        bilingualTerms: [
          { en: 'Slump Test', zh: '坍度試驗', context: '評估新鮮預拌混凝土工作性（Workability）與流動性之現場必做品管試驗。' },
          { en: 'Water-Cement Ratio', zh: '水灰比', abbr: 'W/C', context: '拌和水重量與水泥重量之比值，為決定硬化混凝土 28 天抗壓強度之最主要關鍵指標。' },
          { en: 'Compressive Strength at 28 Days', zh: '28天規定抗壓強度', abbr: "f'c", context: '標準養護 28 天圓柱試體（直徑 15cm×高 30cm 或 10cm×20cm）之抗壓強度，常用單位為 kgf/cm² 或 MPa。' },
          { en: 'Hydration of Cement', zh: '水泥水化反應', context: '水泥化合物（矽酸三鈣 C3S、矽酸二鈣 C2S 等）與水反應生成水化矽酸鈣（C-S-H 膠體）並放出大量水化熱之放熱結晶過程。' }
        ],
        decisionFlow: {
          step1: '【看坍度數值】一般建築樑柱構件坍度約 15~18 cm、自充填混凝土 (SCC) 坍流度需達 50~65 cm。',
          step2: '【判斷強度與耐久性】水灰比 W/C 越低，硬化後微孔隙越少，抗壓強度 f\'c 越高且抗滲耐磨越佳。',
          step3: '【養護關鍵檢核】澆置後 7~28 天需持續保濕養護，防止水分過早蒸發導致乾縮塑性龜裂。'
        },
        examTrend: {
          frequency: '⭐⭐⭐⭐⭐ 每屆必考',
          keyQuestionTypes: ['CNS 1176 坍度試驗每層插搗 25 次與高度尺寸', '水灰比定律與 28 天抗壓強度曲線', '水泥四種主要礦物（C3S, C2S, C3A, C4AF）水化特性'],
          killerTrick: '水化熱最高且最早凝結的是 C3A；早期強度貢獻最大的是 C3S；長期強度（28天以後持續成長）關鍵是 C2S！'
        },
        landmarkCase: {
          name: '台中清真寺與台中大巨蛋自充填混凝土結構',
          location: '台中市',
          structuralFeature: '採用高流動、抗粒料析離之自充填混凝土 (SCC)，在密集鋼筋網縫隙中靠自重填滿模具。',
          pedagogicalInsight: '高流動混凝土無須震動棒即可自動搗實，消除氣泡蜂窩孔洞，達成極高細緻度的清水混凝土建築表面。'
        }
      };
    }

    return {
      cnsAndCodes: {
        code: 'CNS 560 / CNS 2473',
        title: '鋼筋混凝土用鋼筋與一般結構用軋鋼規範',
        description: '規範 SD280（降伏強度 280 MPa）與 SD420（降伏強度 420 MPa）竹節鋼筋之降伏強度、抗拉極限強度及延伸率標號。'
      },
      bilingualTerms: [
        { en: 'Yield Strength', zh: '降伏強度', abbr: 'f_y', context: '金屬材料自彈性變形進入塑性永久變形之臨界應力值，建築結構設計主要依據。' },
        { en: 'Ultimate Tensile Strength', zh: '抗拉極限強度', abbr: 'UTS / f_u', context: '鋼材在拉伸試驗斷裂前所能承受之最大工程應力值。' },
        { en: 'Ductility & Elongation', zh: '延性與伸長率', abbr: 'ε', context: '鋼材在拉斷前吸收塑性變形之能量能力，高延性鋼筋能防止建築瞬間脆性崩塌。' }
      ],
      decisionFlow: {
        step1: '【看應力應變圖】0 到 A 為比例限度（彈性階段 σ = E·ε），A 到 B 為降伏高原。',
        step2: '【判斷強度等級】SD280 表示降伏強度 2800 kgf/cm² (280 MPa)，SD420 表示 4200 kgf/cm² (420 MPa)。',
        step3: '【檢核破壞形式】軟鋼具備明顯降伏階梯與頸縮現象，屬於安全預警之延性破壞；鑄鐵無降伏點，屬於危險之脆性破壞。'
      },
      examTrend: {
        frequency: '⭐⭐⭐⭐⭐ 每屆必考',
        keyQuestionTypes: ['鋼筋應力應變圖各特徵點名稱', '彈性模數 E = 2.04×10⁶ kgf/cm² (200 GPa)', '延性破壞 vs 脆性破壞辨識'],
        killerTrick: '所有碳鋼的彈性係數 E 都大約是 200 GPa（2.04×10⁶ kgf/cm²），強度高低只改變降伏點高低，彈性直線斜率幾乎不變！'
      },
      landmarkCase: {
        name: '高雄流行音樂中心六角珊瑚礁群結構鋼構',
        location: '高雄市愛河灣',
        structuralFeature: '採用大型高延性箱型鋼柱與抗彎鋼構架，幾何多面體造型具備優異耐震能力。',
        pedagogicalInsight: '鋼結構在強烈地震時透過鋼樑端部的塑性鉸消散能量，形成「強柱弱樑」之耐震生命保護機制。'
      }
    };
  }

  // === 3. Surveying (測量實習) ===
  if (subjectSlug === 'surveying') {
    if (topicSlug.includes('level') || topicSlug.includes('elevation')) {
      return {
        cnsAndCodes: {
          code: '國土測繪法規 水準測量作業手冊',
          title: '一、二、三等水準測量精度規範',
          description: '規範水準路線往返閉合差容許值，三等水準容許閉合差為 ±12√K mm（K 為路線單程公里數），儀器前後視距需保持相等以抵消視準軸偏差。'
        },
        bilingualTerms: [
          { en: 'Height of Instrument Method', zh: '視線高法 / 儀高法', abbr: 'HI Method', context: '視線高 HI = 基準點高程 BM + 後視讀數 BS，未知點高程 Elev_P = HI - 前視讀數 FS。' },
          { en: 'Backsight & Foresight', zh: '後視與前視', abbr: 'BS / FS', context: '向已知高程點照準觀測之標尺讀數為後視 (+BS)，向未知點或轉點觀測為前視 (-FS)。' },
          { en: 'Collimation Axis Error', zh: '視準軸誤差 / 指標差', abbr: 'i 角誤差', context: '望遠鏡視準線不水平所產生之系統誤差，前後視距保持相等 (D_BS = D_FS) 可完全抵消。' }
        ],
        decisionFlow: {
          step1: '【算視線高】HI = BM高程 + 後視讀數 BS（立尺在已知點上，望遠鏡視線高程等於地面加尺長）。',
          step2: '【算未知點高程】未知點高程 = HI - 前視讀數 FS（地面高程等於視線高減去標尺高度）。',
          step3: '【水準檢核驗算】∑BS - ∑FS 必須剛好等於 終點高程 - 起點高程（差值驗算法）。'
        },
        examTrend: {
          frequency: '⭐⭐⭐⭐⭐ 每屆必考',
          keyQuestionTypes: ['水準測量野外手簿填表計算未知高程', '∑BS - ∑FS = 終點高程 - 起點高程 數學檢核', '前後視距相等消減儀器 i 角誤差觀念題'],
          killerTrick: '記住「後加前減」四字口訣：後視 BS 永遠是相加 (+) 算儀高，前視 FS 永遠是相減 (-) 算地高！'
        },
        landmarkCase: {
          name: '台灣高鐵全線 350 公里軌道毫米級水準測量網',
          location: '台北至高雄左營全線',
          structuralFeature: '高速鐵路無碴軌道高低差容許值小於 2 mm，全線每 50 公尺設置一精密水準基準點。',
          pedagogicalInsight: '列車以時速 300 公里奔馳，任何 3 毫米之高程突起都會造成危險震動，全賴水準測量之極限精準度把關。'
        }
      };
    }

    return {
      cnsAndCodes: {
        code: '地籍測量實施規則 第 73 條至第 80 條',
        title: '導線測量與圖根點坐標反算作業規定',
        description: '都市地區閉合導線角度閉合差不得超過 ±30"√N（N 為站數），坐標閉合差之精度比值需優於 1/5000。'
      },
      bilingualTerms: [
        { en: 'Total Station', zh: '全測站電子速距儀', abbr: 'TS', context: '整合電子經緯儀（量測水平與垂直角）及紅外線光波測距儀 (EDM) 於一體之現代測量儀器。' },
        { en: 'Azimuth Angle', zh: '方位角', abbr: 'α / Azimuth', context: '由正北方向順時針量至目標方向線之夾角（0° 至 360°）。' },
        { en: 'Coordinate Increment', zh: '坐標差 / 縱橫增量', abbr: 'ΔX, ΔY', context: '橫坐標差 ΔX = S·sinα（向東為正），縱坐標差 ΔY = S·cosα（向北為正）。' }
      ],
      decisionFlow: {
        step1: '【求方位角】若已知前站方位角 α_AB 與測站右折角 β，前進方位角 α_BC = α_AB + β ± 180°。',
        step2: '【算坐標差】ΔX = 水平距離 S × sin(方位角)，ΔY = 水平距離 S × cos(方位角)。',
        step3: '【求終點新坐標】終點 X_C = 測站 X_B + ΔX，終點 Y_C = 測站 Y_B + ΔY。'
      },
      examTrend: {
        frequency: '⭐⭐⭐⭐⭐ 每屆必考',
        keyQuestionTypes: ['坐標正算（已知 A 點座標、距離 S、方位角 α 求 B 點座標）', '坐標反算（已知 A、B 兩點座標求距離 S 與方位角 α）', '多邊形導線內角和 (n-2)×180° 閉合差平差'],
        killerTrick: '坐標正算口訣「東正弦、北餘弦」：橫座標 ΔX 配 sin，縱座標 ΔY 配 cos，絕不搞混！'
      },
      landmarkCase: {
        name: '台北捷運信義線東延段潛盾隧道貫通測量',
        location: '台北市信義區廣慈博愛園區地底',
        structuralFeature: '雙孔潛盾隧道自兩端地底相向鑽掘，在地下 25 公尺深度精準交會。',
        pedagogicalInsight: '利用地表全測站儀閉合導線網配合鉛垂投點儀導入地底，讓長達數公里的潛盾機貫通橫向誤差小於 2 公分。'
      }
    };
  }

  // === 4. Drafting (製圖實習) ===
  if (subjectSlug === 'drafting') {
    return {
      cnsAndCodes: {
        code: 'CNS 11567 / CNS 3',
        title: '建築製圖符號圖例與工程製圖規範',
        description: '台灣與 CNS 標準一律採用第三角投影法 (Third Angle Projection)，圖紙採用 A 系列規格（A1 為 841×594 mm、A3 為 420×297 mm），比例尺依 1/100, 1/200, 1/500 繪製。'
      },
      bilingualTerms: [
        { en: 'Third Angle Projection', zh: '第三角投影法', context: '眼睛 → 投影面（透明玻璃） → 物體。俯視圖在正視圖上方、右側視圖在正視圖右方。' },
        { en: 'Orthographic Views', zh: '正投影正交視圖', context: '三視圖對齊原則「正俯長對正、正側高平齊、俯側寬相等（45度斜線轉折投影）」。' },
        { en: 'Hatching & Material Symbols', zh: '剖面線與材料圖例', context: '鋼筋混凝土 (RC) 粗實線 45° 雙斜線加黑點、紅磚 45° 等距細斜線、木材天然年輪紋。' }
      ],
      decisionFlow: {
        step1: '【看長寬高對齊】正視圖決定物體長度與高度、俯視圖決定長度與寬度、右側視圖決定寬度與高度。',
        step2: '【判斷可見面與隱藏面】外露實體輪廓用「粗實線」或「中實線」，被遮蔽看不見的邊緣用「虛線 (Hidden Line)」。',
        step3: '【45 度線旋轉寬度】自正視圖右上角作 45° 輔助斜線，將俯視圖之寬度精準折射至右側視圖，確保尺寸絕對吻合。'
      },
      examTrend: {
        frequency: '⭐⭐⭐⭐⭐ 每屆必考',
        keyQuestionTypes: ['三視圖補漏線或判斷正確第三角視圖', '建築平面圖、立面圖、剖面圖圖例材料識別', 'CNS 11567 標準線條粗細層級與比例尺換算'],
        killerTrick: '第三角投影就像把透明箱子切開攤平：俯視圖在上方、仰視圖在下方、右側視圖在右邊，位置與視線方向完全一致！'
      },
      landmarkCase: {
        name: '台中國家歌劇院 3D 曲牆曲面建築施工圖',
        location: '台中市西屯區',
        structuralFeature: '由建築師伊東豊雄設計之無樑無柱「曲牆結構」，由 58 面立體連續曲面幾何單元構成。',
        pedagogicalInsight: '工程師將 3D 曲面每隔 50 公分切割成一組正交二維剖面圖與空間坐標網，現場木模師傅才能依照二維圖紙組裝立體鋼筋網。'
      }
    };
  }

  // === Default for Academic / Humanities / Extensions ===
  return {
    cnsAndCodes: {
      code: '內政部國土管理署 建築技術規則',
      title: '建築環境、永續綠建築與都市空間規劃準則',
      description: '規範建築基地建蔽率、容積率、防火逃生避難距離、日照採光無障礙空間及 EEWH 綠建築節能評估標準。'
    },
    bilingualTerms: [
      { en: 'Building Coverage Ratio', zh: '建蔽率', abbr: 'BCR', context: '建築面積與基地面積之百分比，保留基地空地以維持良好通風採光與消防救援通道。' },
      { en: 'Floor Area Ratio', zh: '容積率', abbr: 'FAR', context: '各樓層總樓地板面積與基地面積之百分比，管制都市土地使用密度與人口容納量。' },
      { en: 'Green Building EEWH', zh: '綠建築評估系統', abbr: 'EEWH', context: '生態 (Ecology)、節能 (Energy Saving)、減廢 (Waste Reduction)、健康 (Health) 四大範疇九大指標。' }
    ],
    decisionFlow: {
      step1: '【確認核心法規與物理原理】如建蔽率控制建築面積、容積率控制總樓地板面積、煙囪效應控制熱對流。',
      step2: '【掌握空間邏輯與環境對話】日照方位向南開窗、夏季西南季風自然通風、冬季東北季風擋風。',
      step3: '【整合跨學科建築思維】結合工程科學計算、環境永續指標與人文空間脈絡，完成整體建築論述。'
    },
    examTrend: {
      frequency: '⭐⭐⭐⭐ 高頻核心',
      keyQuestionTypes: ['綠建築九大指標與節能計算', '建蔽率與容積率土地開發計算', '傳統聚落建築格局與風土調適機制'],
      killerTrick: '建蔽率管「平面多寬（投影面積）」、容積率管「立體多大（總樓地板）」，二者相除即可求出大樓最大合法建造樓層數！'
    },
    landmarkCase: {
      name: '北投市立圖書館木造綠建築',
      location: '台北市北投區北投公園內',
      structuralFeature: '台灣首座榮獲內政部綠建築「鑽石級」標章之木構造綠建築圖書館。',
      pedagogicalInsight: '深遮陽出簷與大面積向南落地窗引入自然光，斜屋頂設置太陽能光電板並收集雨水回收澆灌，達成空調節能 40% 的永續建築典範。'
    }
  };
}
