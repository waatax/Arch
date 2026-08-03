import { SubjectData } from '../types';

export const mechanicsData: SubjectData = {
  slug: 'mechanics',
  title: '基礎工程力學',
  category: '專業科目（一）',
  color: 'teal-700',
  topics: [
    {
      slug: 'units-vectors',
      title: '1. 單位與向量',
      desc: '力學 SI 單位制、因次分析、向量加減法與分力合成。',
      status: 'done',
      concepts: [
        {
          heading: 'SI 單位制 (SI Units)',
          body: '在國際單位制中，力學的基礎物理量包含長度、質量與時間。其餘為導出單位。',
          table: {
            headers: ['物理量', '符號', 'SI 單位', '備註'],
            rows: [
              ['長度 (Length)', 'L', 'm (公尺)', '基礎單位'],
              ['質量 (Mass)', 'm', 'kg (公斤)', '基礎單位'],
              ['時間 (Time)', 't', 's (秒)', '基礎單位'],
              ['力 (Force)', 'F', 'N (牛頓)', '1 N = 1 kg·m/s²']
            ]
          }
        },
        {
          heading: '向量的分解與合成',
          body: '在平面中，一個力向量 F 可以分解為水平的 X 分量與垂直的 Y 分量，也可以從兩分量合成其大小與方向。',
          formula: 'Fx = F · cos(θ)\nFy = F · sin(θ)\nF = √(Fx² + Fy²)\nθ = tan⁻¹(Fy / Fx)',
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '有一力向量 F，其水平分量 Fx = 30 N，垂直分量 Fy = 40 N。求此力的大小 F 為何？',
        steps: [
          '利用畢氏定理求力的大小',
          'F = √(Fx² + Fy²)',
          'F = √(30² + 40²)',
          'F = √(900 + 1600) = √2500'
        ],
        answer: 'F = 50 N'
      }
    },
    {
      slug: 'force-equilibrium',
      title: '2. 力系與共點力平衡',
      desc: '自由體圖 (FBD) 畫法、二力構件與三力平衡、拉密定理應用。',
      status: 'done',
      concepts: [
        {
          heading: '自由體圖 (Free Body Diagram, FBD) 畫法三步驟',
          body: '在解任何力學題目之前，必須先把研究對象從周圍環境中『隔離』出來，並畫出所有作用在其上的已知與未知力。',
          steps: [
            '選擇隔離體（例如一個節點、一根樑或整座橋樑）。',
            '畫出隔離體的外形輪廓，並標明已知的主動載重（如 W = 500 N）。',
            '移除接觸物體與支承（如鉸支承、滾支承），替換為對應的反力（Reactions）。'
          ]
        },
        {
          heading: '平面共點力平衡方程式',
          body: '當作用於同一點的所有力落在同一平面內（2D 平面共點力系），平衡條件為合力等於零：',
          formula: '∑ Fx = 0  （水平方向合力為零）\n∑ Fy = 0  （垂直方向合力為零）'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '一物體重 W = 100 N，由兩根繩索 A 與 B 懸掛於天花板。繩索 A 與水平面成 30° 角，繩索 B 與水平面成 60° 角。求繩索 A 的張力 TA 為多少？',
        steps: [
          '繪製節點平衡之自由體圖，建立以懸掛點為原點的 x-y 座標系。',
          '將張力分解為 x 與 y 分量：\n- TAx = -TA · cos(30°), TAy = TA · sin(30°)\n- TBx = TB · cos(60°), TBy = TB · sin(60°)\n- Wy = -100 N',
          '由 ∑ Fx = 0 ⇒ TA · cos(30°) = TB · cos(60°) ⇒ TB = TA · (√3 / 1) = √3 TA。',
          '代入 ∑ Fy = 0 ⇒ TA · sin(30°) + TB · sin(60°) = 100',
          'TA · (0.5) + (√3 TA) · (√3 / 2) = 100 ⇒ 0.5 TA + 1.5 TA = 100 ⇒ 2 TA = 100'
        ],
        answer: 'TA = 50 N'
      }
    },
    {
      slug: 'centroid',
      title: '3. 重心與形心',
      desc: '組合幾何圖形之形心座標計算、帕普斯 (Pappus) 定理。',
      status: 'done',
      concepts: [
        {
          heading: '形心定義與公式',
          body: '形心代表一個面積的幾何中心。對於組合圖形，可以將其拆分為數個基本圖形，利用面積一次矩來求總形心。',
          formula: 'X = (∑ Ai · xi) / ∑ Ai\nY = (∑ Ai · yi) / ∑ Ai'
        },
        {
          heading: '常見圖形的面積與形心',
          body: '計算時常需要記憶基本圖形的性質。',
          table: {
            headers: ['圖形', '面積 (A)', '形心 (相對於底邊)'],
            rows: [
              ['矩形 (寬 b, 高 h)', 'b·h', 'h / 2'],
              ['三角形 (底 b, 高 h)', '(b·h)/2', 'h / 3'],
              ['半圓形 (半徑 r)', 'π·r²/2', '4r / 3π']
            ]
          }
        }
      ],
      practice: {
        difficulty: '中等',
        question: '一個 T 型斷面，頂部翼板為寬 100 mm、厚 20 mm，腹板為寬 20 mm、高 80 mm。求此 T 型斷面距底部之 Y 形心位置。',
        steps: [
          '將圖形分為兩塊矩形：\n1. 翼板 (上)：面積 A1 = 100 × 20 = 2000 mm²\n2. 腹板 (下)：面積 A2 = 20 × 80 = 1600 mm²',
          '設定底部為 y = 0，求各塊形心的 y 座標：\n- y1 = 80 + (20/2) = 90 mm\n- y2 = 80 / 2 = 40 mm',
          '計算總面積 A = A1 + A2 = 2000 + 1600 = 3600 mm²',
          '計算面積一次矩 ∑(A·y) = (2000 × 90) + (1600 × 40) = 180000 + 64000 = 244000 mm³',
          'Y = 244000 / 3600 = 67.78 mm'
        ],
        answer: 'Y = 67.78 mm'
      }
    },
    {
      slug: 'friction',
      title: '4. 摩擦力',
      desc: '靜摩擦係數、臨界滑動與傾倒判斷、斜面摩擦受力。',
      status: 'done',
      concepts: [
        {
          heading: '靜摩擦與動摩擦',
          body: '當物體有滑動趨勢時，接觸面會產生反抗滑動的摩擦力。達到即將滑動的臨界狀態時，靜摩擦力達最大值。一旦滑動，則變為動摩擦力。',
          formula: '最大靜摩擦力：fs_max = μs · N\n動摩擦力：fk = μk · N\n(N為正向力，μs與μk分別為靜/動摩擦係數)'
        },
        {
          heading: '摩擦角 (Friction Angle)',
          body: '在臨界狀態下，摩擦力與正向力的合力與接觸面法線方向所夾的角稱為摩擦角 φ。',
          formula: 'tan(φ) = fs_max / N = μs'
        }
      ],
      practice: {
        difficulty: '中等',
        question: '一個重 500 N 的木塊放在水平面上，木塊與水平面的靜摩擦係數為 0.4。求要推動木塊所需的最小水平力 P。',
        steps: [
          '畫出木塊的自由體圖，垂直方向有重力 W 與正向力 N，水平方向有推力 P 與摩擦力 fs。',
          '由 ∑ Fy = 0 可得 N - W = 0，因此 N = 500 N。',
          '計算最大靜摩擦力 fs_max = μs · N = 0.4 × 500。',
          '要推動木塊，推力 P 必須大於等於最大靜摩擦力。'
        ],
        answer: 'P = 200 N'
      }
    },
    {
      slug: 'truss',
      title: '5. 平面桁架分析',
      desc: '節點法 (Method of Joints) 與剖面法 (Method of Sections) 求解軸力。',
      status: 'done',
      concepts: [
        {
          heading: '桁架的基本假設',
          body: '為了簡化分析，理想桁架建立在三個主要假設上，使得每根桿件都成為二力構件，僅受軸向拉力或壓力。',
          steps: [
            '所有桿件兩端皆為無摩擦之鉸接 (Pin-connected)。',
            '所有外載重與支承反力皆作用於節點上。',
            '桿件本身的重量相較於外載重極小，可忽略不計，或平分至兩端節點。'
          ]
        },
        {
          heading: '零桿判別 (Zero-Force Members)',
          body: '在特定條件下，某些桿件不受內力，稱為零桿。找出零桿可大幅簡化計算。常見判別：\n1. 某節點僅有兩根不共線的桿件交會，且無外力作用，則此兩桿皆為零桿。\n2. 某節點有三根桿件交會，其中兩根共線，且無外力，則第三根桿件為零桿。'
        }
      ],
      practice: {
        difficulty: '困難',
        question: '有一個 L 型的三桿桁架，節點 C 為直角，受到水平向右 10 kN 的外力。AC桿長 3m (直立)，BC桿長 4m (水平)。求斜桿 AB 的軸力 (拉力或壓力)？',
        steps: [
          'AB桿為斜桿，長度 L_AB = √(3² + 4²) = 5m。',
          '觀察受力節點 C，外力 10 kN 向右。AC桿在 y 方向，BC桿在 x 方向。',
          '在此例題中，假設A、B為鉸支承。若直接以剖面法或節點法，需先求反力。',
          '簡化情境：若節點 C 僅受水平力，由 ∑ Fx = 0，BC 桿軸力為 10 kN (拉)。由 ∑ Fy = 0，AC 桿為零桿。若要求 AB 桿，需回到整座桁架的支承反力計算。'
        ],
        answer: '視支承條件而定，通常需先解反力再用節點法推導各桿內力。'
      }
    },
    {
      slug: 'beam',
      title: '6. 靜定樑之受力',
      desc: '剪力圖 (V-diagram) 與彎矩圖 (M-diagram) 繪製與最大彎矩。',
      status: 'done',
      concepts: [
        {
          heading: '支承反力類型',
          body: '樑的支承種類決定了可提供的反力數量，是繪製自由體圖的關鍵。',
          table: {
            headers: ['支承種類', '圖示', '反力數量', '說明'],
            rows: [
              ['滾支承 (Roller)', '○', '1', '僅提供垂直於接觸面的反力'],
              ['鉸支承 (Pin)', '△', '2', '提供水平與垂直反力'],
              ['固定端 (Fixed)', '|=', '3', '提供水平、垂直反力與抵抗彎矩']
            ]
          }
        },
        {
          heading: '載重、剪力與彎矩的關係',
          body: '分佈載重 w(x)、剪力 V(x) 與彎矩 M(x) 之間存在微積分的幾何關係。',
          formula: 'dV/dx = -w(x)  (剪力圖的斜率 = 載重集度)\ndM/dx = V(x)   (彎矩圖的斜率 = 剪力值)'
        }
      ],
      practice: {
        difficulty: '中等',
        question: '一根長度 L = 4m 的簡支樑，在中央處受到一集中載重 P = 100 kN。求該樑的最大彎矩 M_max。',
        steps: [
          '由於載重在中央，兩端支承對稱，兩端垂直反力 R_A = R_B = P / 2 = 50 kN。',
          '繪製剪力圖 (V)：從左端點上升 50 kN，到中央時下降 100 kN 變為 -50 kN，到右端點再上升 50 kN 回到 0。',
          '繪製彎矩圖 (M)：彎矩圖面積為剪力圖的積分。左半邊的剪力面積 = 50 kN × 2 m = 100 kN·m。',
          '最大彎矩發生在剪力為零的位置 (樑的中央)。'
        ],
        answer: 'M_max = 100 kN·m'
      }
    },
    {
      slug: 'stress-strain',
      title: '7. 應力與應變',
      desc: '法向應力、剪應力、虎克定律 (Hooke\'s Law) 與彈性模數 E。',
      status: 'done',
      concepts: [
        {
          heading: '應力與應變的定義',
          body: '應力 (Stress, σ) 是單位面積上的內力；應變 (Strain, ε) 是單位長度的變形量。',
          formula: 'σ = P / A  (P: 軸向力, A: 截面積)\nε = δ / L  (δ: 伸長量, L: 原長度)'
        },
        {
          heading: '虎克定律 (Hooke\'s Law)',
          body: '在彈性限度內，材料的應力與應變成正比。比例常數稱為彈性模數 (或楊氏模數, Young\'s Modulus, E)。',
          formula: 'σ = E · ε\n推導可得變形量公式： δ = (P · L) / (A · E)'
        }
      ],
      practice: {
        difficulty: '中等',
        question: '一根長 2 m、截面積 500 mm² 的鋼條，受到 100 kN 的軸向拉力。若鋼的彈性模數 E = 200 GPa，求該鋼條的伸長量 δ。',
        steps: [
          '統一單位至 N 與 mm。',
          'P = 100 kN = 100,000 N',
          'L = 2 m = 2,000 mm',
          'A = 500 mm²',
          'E = 200 GPa = 200,000 MPa = 200,000 N/mm²',
          '代入公式：δ = (P · L) / (A · E)',
          'δ = (100,000 × 2,000) / (500 × 200,000) = 200,000,000 / 100,000,000 = 2 mm'
        ],
        answer: 'δ = 2 mm'
      }
    }
  ]
};
