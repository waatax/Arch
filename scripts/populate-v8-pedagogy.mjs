import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const subjectsDir = path.join(rootDir, 'apps', 'web', 'src', 'data', 'subjects');

// Curated domain pedagogy data for mechanics & surveying topics
const PEDAGOGY_MAP = {
  // Mechanics
  'units-vectors': {
    examHitRate: 5,
    step0Prerequisites: ['國中幾何：直角三角形畢氏定理 a²+b²=c²', '國中三角比：sin 30°=0.5, cos 30°=0.866, tan 45°=1', '因次轉換：長度 (m/mm)、力 (N/kN)、應力 (MPa)'],
    fatalTraps: [
      {
        wrongThinking: '誤將角度對邊當成 cos，如張力 T 與水平夾 30° 時寫成 Fx = T·sin(30°)',
        correctThinking: '「鄰邊 cos、對邊 sin」。與水平夾角 θ 時，水平分力 Fx = T·cos(θ)，垂直分力 Fy = T·sin(θ)。',
        trapDescription: '80% 考生在角度參考軸（與水平 vs 與垂直夾角）混淆時失分。'
      },
      {
        wrongThinking: '直接將 MPa 與 kN 相除而未做因次換算 (1 MPa = 1 N/mm² = 10⁶ N/m²)',
        correctThinking: '運算前先將所有量轉換為基本 SI 單位 (N, m, Pa) 或標準工程單位 (N, mm, MPa)。',
        trapDescription: '單位混用導致計算結果偏差 10³ 或 10⁶ 倍。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '極端值投影檢驗法 (Boundary Value Inspection)',
        explanation: '令夾角 θ → 0°（水平），若公式得 Fy = 0, Fx = T 則表示 sin/cos 沒有放反；令 θ → 90°（垂直）驗證垂直分力。3 秒內完成防呆。'
      },
      {
        technique: '量綱同性速推法 (Dimensional Invariance)',
        explanation: '等式兩邊因次必須嚴格一致。力 (N) = 應力 (N/mm²) × 面積 (mm²)，永遠先檢核單位量綱再進行數字運算。'
      }
    ]
  },
  'concurrent-force-systems': {
    examHitRate: 5,
    step0Prerequisites: ['拉密定理 (Lami Theorem)：P/sinα = Q/sinβ = R/sinγ', '共點力系平衡條件：ΣFx=0, ΣFy=0'],
    fatalTraps: [
      {
        wrongThinking: '使用拉密定理時，將力的夾角取為力本身與坐標軸之夾角，而非「另外兩力之夾角」。',
        correctThinking: '拉密定理的分母 sin 角，必須是「所求力所對應的另外兩力之間之夾角」。',
        trapDescription: '拉密定理夾角認錯是統測共點力系最常見的致命失誤。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '封閉力多邊形法 (Closed Force Polygon)',
        explanation: '三力平衡必成首尾相接的封閉三角形。直接畫出幾何三角形，利用特殊角 (30°-60°-90° 或 3-4-5) 快速秒殺比例，省去繁瑣代數列式。'
      }
    ]
  },
  'moments-couples': {
    examHitRate: 4,
    step0Prerequisites: ['力矩基本定義：M = F × d (力 × 垂直力臂)', '力偶矩特性：力偶在平面任意點之取矩值皆相等'],
    fatalTraps: [
      {
        wrongThinking: '計算傾斜力的力矩時，直接將力的大小乘以作用點到取矩點的直線距離。',
        correctThinking: '力臂必須是「取矩點到力之作用線的垂直距離 (d_⊥)」；或先將力分解為水平與垂直分力，再分別乘上各自之垂直距離（瓦里農定理 Varignon Theorem）。',
        trapDescription: '忽略「垂直距離」定義，誤用斜邊距離直接相乘。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '分力力矩和定理 (Varignon Superposition)',
        explanation: '將斜向力分解為水平 Fx 與垂直 Fy，直接沿軸線計算垂直力臂，把複雜三角幾何降維為兩個簡單矩形乘積。'
      }
    ]
  },
  'parallel-force-systems': {
    examHitRate: 4,
    step0Prerequisites: ['等值集中力計算：W = 載重圖面積', '形心位置：矩形在中點，三角形在距大端 1/3 處'],
    fatalTraps: [
      {
        wrongThinking: '將三角形分布載重的等值集中力位置放在三角形中點 (L/2)。',
        correctThinking: '三角形載重形心位於距大端 (最大載重處) L/3，即距尖端 2L/3 處。',
        trapDescription: '三角形載重形心位置記反，導致支承反力全錯。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '對稱分解法 (Symmetric Superposition)',
        explanation: '對稱載重下兩端反力必各分一半；非對稱載重可拆解為對稱均布 + 反對稱三角形，心算即可直接寫出反力。'
      }
    ]
  },
  'nonconcurrent-force-systems': {
    examHitRate: 5,
    step0Prerequisites: ['平面剛體平衡三方程：ΣFx=0, ΣFy=0, ΣMo=0', '支承約束反力特徵（滾支承 1、鉸支承 2、固定端 3）'],
    fatalTraps: [
      {
        wrongThinking: '固定端支承只列水平與垂直反力，漏掉反力矩 Mo。',
        correctThinking: '固定端 (Fixed Support) 限制了所有移動與轉動，必須包含垂直反力 Ay、水平反力 Ax 及固定端力矩 Ma。',
        trapDescription: '固定端支承漏算力矩反力，導致未知數不足無法求解。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '最佳取矩點消去法 (Pivot Point Elimination)',
        explanation: '取矩點永遠選在「最多未知力交會之支承點」，直接令 2 個未知數的力臂為零，一條方程式即可解出第 3 個未知數。'
      }
    ]
  },
  'truss-analysis': {
    examHitRate: 5,
    step0Prerequisites: ['節點法 (Method of Joints)：每個節點都是共點力系 (ΣFx=0, ΣFy=0)', '截面法 (Method of Sections)：切斷不超過 3 根桿件求內力', '零力桿件 (Zero-Force Members) 判別原則'],
    fatalTraps: [
      {
        wrongThinking: '截面法切過 4 根未知桿件，導致 3 個獨立方程無法求解。',
        correctThinking: '截面法一刀最多只能切斷 3 根未知內力的桿件，因為平面任意力系只有 3 個平衡方程。',
        trapDescription: '切斷過多桿件造成靜不定假象而卡關。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '零力桿一眼秒殺術 (Zero-Force Inspection)',
        explanation: '無外力作用下：1. 兩非共線桿件結點，兩桿皆為零力桿；2. 三桿結點兩桿共線，第三桿必為零力桿。考前 10 秒先圈出所有零力桿，大幅簡化桁架。'
      }
    ]
  },
  'friction': {
    examHitRate: 4,
    step0Prerequisites: ['最大靜摩擦力：Fmax = μs · N', '正向力 N 必須由自由體圖 ΣFy=0 求出，不一定等於重量 W'],
    fatalTraps: [
      {
        wrongThinking: '不論物體是否運動，一律帶入摩擦力 F = μ · N 計算。',
        correctThinking: '物體靜止未達臨界時，摩擦力由靜力平衡決定 (F = 外力)；只有在「即將滑動」臨界狀態下才達到最大靜摩擦力 Fmax = μs · N。',
        trapDescription: '混淆靜摩擦力與最大靜摩擦力，題目問物體受力時直接代入公式算錯。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '滑動與傾倒雙重檢驗 (Slide vs. Tip Dual Check)',
        explanation: '剛體置於粗糙面受推力時，先檢驗滑動臨界推力 F_slide = μW，再檢驗繞角點傾倒推力 F_tip = W(b/2h)，兩者取較小值即為破壞機制。'
      }
    ]
  },
  'center-of-gravity': {
    examHitRate: 4,
    step0Prerequisites: ['組合圖形形心公式：X̄ = Σ(Ai·xi) / ΣAi, Ȳ = Σ(Ai·yi) / ΣAi', '負面積法（挖孔圖形面積取負值）'],
    fatalTraps: [
      {
        wrongThinking: '計算挖空截面（如箱型梁或工字梁孔洞）時，孔洞面積仍當成正面積相加。',
        correctThinking: '挖空或開孔區域的面積必須代入「負面積 (-A)」，其形心座標依原基準點計算。',
        trapDescription: '開孔面積未代負值，導致組合形心嚴重偏位。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '對稱軸直接降維 (Symmetry Axis Shortcut)',
        explanation: '若圖形具對稱軸，形心必落在對稱軸上，直接令該座標等於對稱中心值，省去一半計算量。'
      }
    ]
  },
  'stress-strain': {
    examHitRate: 5,
    step0Prerequisites: ['正應力與正應變：σ = P/A, ε = δ/L', '虎克定律：σ = E·ε 故變形量 δ = PL/(AE)', '剪應力與剪應變：τ = V/As, γ = τ/G'],
    fatalTraps: [
      {
        wrongThinking: '算變形量 δ = PL/(AE) 時，L 用公尺 m，A 用 mm²，E 用 GPa，數值直接相乘除未換算。',
        correctThinking: '全數統一為 N 與 mm：P(N), L(mm), A(mm²), E(MPa = N/mm²)，算出的變形量 δ 單位即為標準 mm。',
        trapDescription: '長度與彈性模數單位未統一，導致變形量結果小數點差 10³ 或 10⁶ 倍。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '剛度法比值秒殺 (Stiffness Proportionality)',
        explanation: '階梯軸或並聯桿受力，內力與剛度 (AE/L) 成正比分配，變形量與柔度 (L/AE) 成正比，直接用比值心算免解聯立方程。'
      }
    ]
  },
  'shear-properties': {
    examHitRate: 4,
    step0Prerequisites: ['單剪與雙剪有效剪切面積區分', '矩形梁截面最大剪應力 τmax = 1.5 · (V/A)'],
    fatalTraps: [
      {
        wrongThinking: '雙剪螺栓計算剪應力時，誤用單個截面積 A 代入 τ = V/A。',
        correctThinking: '雙剪有兩個剪切面承載剪力，有效面積為 2A，故平均剪應力 τ = V / (2A)。',
        trapDescription: '漏乘雙剪截面係數 2，算出的剪應力為真實值的兩倍。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '剪力形狀係數倍率法 (Shape Factor Multiplier)',
        explanation: '記住三大常用截面最大剪應力公式：矩形 τmax = 1.5 V/A；實心圓 τmax = (4/3) V/A；薄壁圓管 τmax = 2 V/A，統測直接套倍率。'
      }
    ]
  },
  // Surveying
  'surveying-fundamentals': {
    examHitRate: 4,
    step0Prerequisites: ['測量誤差分類：系統誤差（規律可改正）vs 偶然誤差（隨機遵循常態分佈）', '相對精度表示法：1/M (以分子為 1 之分數表達)'],
    fatalTraps: [
      {
        wrongThinking: '將「人為粗差（錯誤）」歸類為偶然誤差並進行平差計算。',
        correctThinking: '粗差 (Blunder) 必須透過檢核觀測直接剔除重測，絕不可混入平差計算中。',
        trapDescription: '統測名詞觀念題中最常見的混淆陷阱。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '誤差傳播根號 N 定律 (Root-N Law of Propagation)',
        explanation: '獨立等精度觀測總和之偶然誤差與 √N 成正比，平均值之偶然誤差與 1/√N 成反比。統測必考測次與精度關係。'
      }
    ]
  },
  'distance-measurement': {
    examHitRate: 4,
    step0Prerequisites: ['捲尺量距各項改正：尺長改正、溫度改正、垂曲改正、拉力改正', '溫度改正公式：Ct = α · L · (T - T₀)'],
    fatalTraps: [
      {
        wrongThinking: '捲尺標稱 30 m 實際長 30.01 m（名實不符），量得 120 m 誤以為要扣除多出的長度。',
        correctThinking: '「尺長則量得短（讀數偏小需加改正），尺短則量得長（讀數偏大需扣改正）」。尺長 30.01 m 每尺多 0.01 m，量 4 尺實際距離為 120 + 0.04 = 120.04 m。',
        trapDescription: '尺長改正正負號記反是全台測量考生第一大失分死穴。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '名實比對口訣法 (Nominal vs True Mnemonic)',
        explanation: '「真長 = 讀數 × (實長 / 名長)」。直接用比值乘除，永遠不會搞錯正負號。'
      }
    ]
  },
  'leveling': {
    examHitRate: 5,
    step0Prerequisites: ['水準測量基本原理：後視 (BS) 與前視 (FS)', '高程計算公式：儀器高 HI = 已知點高程 + BS；未知點高程 = HI - FS', '前後視距等長可消除之誤差項（地球曲率、大氣折光、視準軸不平行水準管軸）'],
    fatalTraps: [
      {
        wrongThinking: '誤將前視讀數當成加項，寫成 高程 = HI + FS。',
        correctThinking: '「後視永遠是加項（借已知點把視線抬高），前視永遠是減項（從視線往下探求未知點）」。',
        trapDescription: '連續水準測量記錄表計算時正負號填反，整張水準平差全錯。'
      }
    ],
    eliteMentalModels: [
      {
        technique: 'ΣBS - ΣFS 總檢核驗算法 (Cumulative Difference Check)',
        explanation: '終點高程 - 起點高程 恆等於 Σ(後視讀數) - Σ(前視讀數)。每張水準觀測表交卷前 5 秒必做此總和檢查。'
      }
    ]
  },
  'angle-measurement': {
    examHitRate: 4,
    step0Prerequisites: ['經緯儀構造與幾何軸線關係', '正倒鏡觀測可消除之儀器誤差（視準軸誤差、橫軸誤差、照準部偏心差）'],
    fatalTraps: [
      {
        wrongThinking: '誤以為正倒鏡觀測可以消除「垂直軸傾斜誤差（水準氣泡未居中）」。',
        correctThinking: '正倒鏡取平均「無法」消除垂直軸傾斜誤差，必須在觀測前嚴格整平儀器。',
        trapDescription: '統測試題中最常出現的儀器誤差多選陷阱。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '水平角對向半周平差 (Opposite Face Symmetry)',
        explanation: '倒鏡讀數理論上等於正鏡 ± 180°。直接看分秒差值，若超過容許誤差即知人為讀數粗差。'
      }
    ]
  },
  'traverse-surveying': {
    examHitRate: 5,
    step0Prerequisites: ['方位角 (Azimuth, φ) 與縱橫座標增量：ΔX = D · sin(φ), ΔY = D · cos(φ)', '導線閉合差計算：fx = ΣΔX, fy = ΣΔY, f = √(fx² + fy²)', '羅盤儀法則 (Bowditch Rule) 依邊長比例配賦誤差'],
    fatalTraps: [
      {
        wrongThinking: '將測量坐標系與數學笛卡兒坐標系搞混，把 ΔX 寫成 D·cos(φ)，ΔY 寫成 D·sin(φ)。',
        correctThinking: '測量坐標系以「北向為 Y 軸（0° 方位），東向為 X 軸（90° 方位）」，因此 ΔX(東) = D·sin(φ)，ΔY(北) = D·cos(φ)。',
        trapDescription: '測量與數學坐標軸向顛倒，導致所有導線座標計算 X/Y 互換。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '象限角象限正負速判定 (Quadrant Sign Matrix)',
        explanation: '第一象限 (NE: +ΔX, +ΔY)、第二象限 (SE: +ΔX, -ΔY)、第三象限 (SW: -ΔX, -ΔY)、第四象限 (NW: -ΔX, +ΔY)。先定正負號再算絕對值。'
      }
    ]
  },
  'indirect-distance-elevation': {
    examHitRate: 4,
    step0Prerequisites: ['視距測量水平距公式：H = K · s · cos²(α)', '視距測量高差公式：V = (1/2) · K · s · sin(2α)'],
    fatalTraps: [
      {
        wrongThinking: '計算視距水平距離時，將公式平方項漏掉，寫成 H = K·s·cos(α)。',
        correctThinking: '標尺直立時水平距為 H = K·s·cos²(α)，因視線傾斜有兩個 cos 因子（標尺投影與水平投影）。',
        trapDescription: '視距公式中 cos 平方漏乘是統測計算高頻失分點。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '水平視線極端值簡化 (Zero Zenith Angle Check)',
        explanation: '當垂直角 α = 0°（水平視線）時，cos(0°)=1，公式自動退化為 H = K·s (通常 K=100，H = 100 × 尺間隔)，可快速心算驗算。'
      }
    ]
  }
};

function getPedagogyForTopic(slug, subjectSlug, title) {
  if (PEDAGOGY_MAP[slug]) {
    return PEDAGOGY_MAP[slug];
  }
  // Default hit rate based on subject and title
  const isEngineering = ['mechanics', 'materials', 'surveying', 'drafting', 'math-c'].includes(subjectSlug);
  return {
    examHitRate: isEngineering ? 4 : 3,
    step0Prerequisites: isEngineering ? [
      `本章核心基礎：${title}之關鍵定義與物理幾何直覺`,
      '解題前置檢核：確認題型情境、已知條件量與求解目標'
    ] : undefined,
    fatalTraps: [
      {
        wrongThinking: `直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。`,
        correctThinking: `回歸核心公理與基本定義，逐項檢核題幹條件與反例。`,
        trapDescription: `80% 考生在概念題中因粗心忽略前提假設而失分。`
      }
    ],
    eliteMentalModels: [
      {
        technique: '第一性原理拆解法 (First Principles Breakdown)',
        explanation: '不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。'
      }
    ]
  };
}

// 1. Process professional-gap-topics.ts
const gapTopicsPath = path.join(subjectsDir, 'professional-gap-topics.ts');
if (fs.existsSync(gapTopicsPath)) {
  let content = fs.readFileSync(gapTopicsPath, 'utf-8');
  // Clean up any existing injected V8 fields
  content = content.replace(/\n\s*examHitRate: \d+,/g, '');
  content = content.replace(/\n\s*step0Prerequisites: \[[\s\S]*?\],/g, '');
  content = content.replace(/\n\s*fatalTraps: \[[\s\S]*?\],/g, '');
  content = content.replace(/\n\s*eliteMentalModels: \[[\s\S]*?\],/g, '');

  // Inject into each topic object in gap topics
  const topicRegex = /(slug:\s*['"]([^'"]+)['"][\s\S]*?gradeLevel:\s*\d+,)/g;
  content = content.replace(topicRegex, (match, prefix, slug) => {
    const ped = getPedagogyForTopic(slug, 'mechanics', slug);
    let injection = `\n      examHitRate: ${ped.examHitRate},`;
    if (ped.step0Prerequisites) {
      injection += `\n      step0Prerequisites: ${JSON.stringify(ped.step0Prerequisites)},`;
    }
    if (ped.fatalTraps) {
      injection += `\n      fatalTraps: ${JSON.stringify(ped.fatalTraps)},`;
    }
    if (ped.eliteMentalModels) {
      injection += `\n      eliteMentalModels: ${JSON.stringify(ped.eliteMentalModels)},`;
    }
    return `${prefix}${injection}`;
  });

  fs.writeFileSync(gapTopicsPath, content, 'utf-8');
  console.log('✅ 已更新 professional-gap-topics.ts');
}

// 2. Process all 13 subject files
const files = fs.readdirSync(subjectsDir).filter((file) => file.endsWith('.ts') && file !== 'professional-gap-topics.ts');

for (const file of files) {
  const filePath = path.join(subjectsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const subjectSlug = file.replace('.ts', '');

  // Clean up any existing injected V8 fields
  content = content.replace(/\n\s*examHitRate: \d+,/g, '');
  content = content.replace(/\n\s*step0Prerequisites: \[[\s\S]*?\],/g, '');
  content = content.replace(/\n\s*fatalTraps: \[[\s\S]*?\],/g, '');
  content = content.replace(/\n\s*eliteMentalModels: \[[\s\S]*?\],/g, '');

  const topicRegex = /(slug:\s*['"]([^'"]+)['"][\s\S]*?gradeLevel:\s*\d+,)/g;
  content = content.replace(topicRegex, (match, prefix, slug) => {
    const ped = getPedagogyForTopic(slug, subjectSlug, slug);
    let injection = `\n      examHitRate: ${ped.examHitRate},`;
    if (ped.step0Prerequisites) {
      injection += `\n      step0Prerequisites: ${JSON.stringify(ped.step0Prerequisites)},`;
    }
    if (ped.fatalTraps) {
      injection += `\n      fatalTraps: ${JSON.stringify(ped.fatalTraps)},`;
    }
    if (ped.eliteMentalModels) {
      injection += `\n      eliteMentalModels: ${JSON.stringify(ped.eliteMentalModels)},`;
    }
    return `${prefix}${injection}`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ 已更新 ${file}`);
}

console.log('🎉 所有科目 V8 教學引擎資料批次擴充完成！');
