import { SubjectData } from '../types';

export const physicsData: SubjectData = {
  slug: 'physics',
  "title": "🍎 物理",
  "category": "自然科學",
  "color": "blue-600",
  "topics": [
    {
      slug: 'mechanics-motion',
      "title": "1. ⚙️ 力學與運動 (Structural Kinematics & Static Equilibrium)",
      "desc": "建築運動學基礎、牛頓三大運動定律、<span className='text-rose-600 font-bold'>靜力平衡</span>條件、斜面摩擦、桁架與樑構件內力及高空落體防護。",
      "status": "done",
      "gradeLevel": 10,
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】牛頓第二運動定律與施工電梯張力：一總質量 1200 kg 之施工電梯載人升降機，以 2.0 m/s² 之加速度向上加速起動。求懸掛電梯之鋼纜張力 T 為多少牛頓？ (g = 9.8 m/s²)",
          "difficulty": "中等",
          "steps": [
            "**步驟 1**：進行力學受力分析（<span className='text-rose-600 font-bold'>自由體圖</span>）。電梯受向下重力 W = mg，向上鋼纜拉力 T。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 2**：列牛頓第二運動定律 ∑F = m·a。T - mg = m·a ⇒ T = m(g + a)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 3**：代入數值求解。T = 1200 kg × (9.8 + 2.0) m/s² = 1200 × 11.8 = 14160 N。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "鋼纜張力 T 為 14160 牛頓 (N)。",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "physics-context.webp",
        "physics-mechanism.webp",
        "physics-comparison.webp",
        "physics-step.webp",
        "physics-real-world.webp",
        "physics-concept-diagram.webp",
        "physics-formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "牛頓三大運動定律與建築地震<span className='text-rose-600 font-bold'>慣性力</span> (Newton's Laws & Seismic Inertia)",
          "body": "物體運動狀態的改變源於外力作用。在建築結構工程中，<span className='text-indigo-600 font-bold'>牛頓第二定律</span> F = m·a 是地震工程學的基礎：當地面發生地震加速度 a 時，建築物自重質量 m 會產生相對應的水平<span className='text-rose-600 font-bold'>慣性力</span> (Inertia Force)。台北101大樓頂層擺設的 660 公噸風阻尼器 (TMD)，即是利用慣性反向運動來吸收強風與地震造成的結構擺<span className='text-rose-600 font-bold'>動能</span>量。\n\n⚠️ **統測陷阱**：計算 F=ma 時，務必注意「質量」與「重量」的差別！質量 m 單位為 kg，重量 W = mg 單位為 N。題目給公噸(t)必須先換算為 kg。\n\n🔗 **跨領域連結**：與【數學 C：平面向量】連結，地震力與風力往往需要拆解為 X 與 Y 方向的向量正交分量，以分析結構柱的受力。\n\n| 定律 | 核心精神 | 建築應用範例 |\n| :--- | :--- | :--- |\n| 第一定律 (慣性) | 合力為零，靜者恆靜 | 建築結構靜力平衡，靜止不動 |\n| 第二定律 (F=ma) | 力產生加速度 | 地震水平慣性力計算 (基底剪力) |\n| 第三定律 (作用與反作用) | 力成對出現，大小相等方向相反 | 柱底傳遞至基礎的承載力與地盤反力 |",
          "formula": "<span className=\"text-indigo-600 font-bold\">F = m · a</span>\n<span className=\"text-indigo-600 font-bold\">F_inertia = - m · a_ground</span>",
          "steps": [
            "牛頓第一定律 (慣性定律)：若物體不受外力或受合力為零，靜者恆靜，動者恆作等速度直線運動。",
            "牛頓第二定律 (運動定律)：加速度與合力成正比，與質量成反比。結構力學中地表加速度 <span className='text-rose-600 font-bold'>PGA</span> (Peak Ground Acceleration) 直接決定地震力大小。",
            "牛頓第三定律 (作用力與反作用力)：兩物體間的作用力與反作用力大小相等、方向相反且作用於同一直線上。例如建築物柱腳對基礎施加壓力，基礎反施加等大向上之<span className='text-rose-600 font-bold'>支承反力</span>。"
          ]
        },
        {
          "heading": "剛體<span className='text-rose-600 font-bold'>靜力平衡</span>條件 (Static Equilibrium of Rigid Bodies)",
          "body": "建築結構物（如樑、柱、桁架、板）於靜止狀態下必須滿足三維或二維<span className='text-rose-600 font-bold'>靜力平衡</span>。若合力或合力矩不為零，結構將發生剛體位移或旋轉倒塌。二維平面力系下，<span className='text-rose-600 font-bold'>靜力平衡</span>條件包含三個獨立代數方程式。\n💡 **進階概念與實務**：\n- **靜定結構 (Statically Determinate)**：當未知支承反力的數量恰好等於平衡方程式數量 (二維為 3) 時，可直接解出所有反力，如簡支樑與懸臂樑。\n- **超靜定結構 (Statically Indeterminate)**：若支承反力數量超過方程式數量，需依賴材料變形協調條件才能求解，這類結構（如連續樑）在建築中更常見，因其具備多餘的冗餘度 (Redundancy)，遇局部破壞時不易產生連鎖崩塌。\n👷‍♂️ **專家提示**：在分析複雜構架時，善用「力矩平衡點選取法」能大幅簡化計算。將力矩中心選在最多未知力作用的節點，可直接消除這些未知力的力矩項，快速求得解答。",
          "formula": "<span className=\"text-indigo-600 font-bold\">ΣFx = 0 (水平合力為零)</span>\n<span className=\"text-indigo-600 font-bold\">ΣFy = 0 (垂直合力為零)</span>\n<span className=\"text-indigo-600 font-bold\">ΣM_O = 0 (對任意點 O 之合力矩為零)</span>",
          "steps": [
            "繪製結構體之<span className='text-rose-600 font-bold'>自由體圖</span> (Free Body Diagram, FBD)，明確標示所有外力、自重及<span className='text-rose-600 font-bold'>支承反力</span>。",
            "選定極點 (Pivot Point)，優先選擇未知力作用最多之節點計算矩平衡 ΣM = 0。",
            "解聯立方程求出未知<span className='text-rose-600 font-bold'>支承反力</span> (Support Reactions)，並檢查平衡狀況。"
          ]
        },
        {
          "heading": "運動學公式與建築高空施工落體防護 (Kinematics & Fall Protection)",
          "body": "等加速度直線運動為描述物體落體與減震運動的基本數學模型。建築施工現場高空作業時，防墜網與安全帶的減震緩衝長度計算，均依據運動學與加速度限制規範，以防止作業人員承受過大衝擊 <span className='text-rose-600 font-bold'>g 值</span>。",
          "formula": "<span className=\"text-indigo-600 font-bold\">v = v₀ + a · t</span>\n<span className=\"text-indigo-600 font-bold\">s = v₀ · t + ½ · a · t²</span>\n<span className=\"text-indigo-600 font-bold\">v² = v₀² + 2 · a · s</span>",
          "steps": [
            "自由落體運動 (v₀ = 0, a = g ≒ 9.8 m/s²)：物體由高度 h 墜落至地面時間 t = √(2h/g)，撞擊瞬間速度 v = √(2gh)。",
            "高空防墜緩衝吸收：緩衝繩拉伸過程施加反向減速加速度 a_net = a_buffer - g，使極限衝擊力小於人體安全承受上限 (通常為 6 kN)。"
          ]
        },
        {
          "heading": "摩擦力與建築斜面鋪面設計 (Friction Force & Ramp Safety)",
          "body": "摩擦力為兩接觸面阻止相對滑動之阻力。建築無障礙斜坡、地下停車場車道鋪面以及樓梯踏階，必須滿足法規規定的<span className='text-rose-600 font-bold'>靜摩擦係數</span> (μs)，以防止行人滑倒或車輛煞車失靈下滑。\n📐 **力學解析與臨界角**：\n當物體放置於傾角為 θ 的斜面上時，重力的下滑分力與靜摩擦力抗衡。當斜面傾角達到「臨界角」時，物體即將下滑，此時滿足關係式：tan(θ) = μs。這意味著坡道的最大安全坡度完全取決於材料表面的靜摩擦係數。\n🛠️ **防滑工程處理**：\n在實務上，為提升濕滑環境（如浴室、戶外車道）的安全性，常採用以下處理：\n1. **表面粗糙化**：洗石子、斬石子或拉毛處理。\n2. **防滑貼條與開槽**：在樓梯踏步前緣鑲嵌金屬或橡膠防滑條，或於車道表面切割橫向溝槽 (Grooving) 以增加咬合力並加速排水。",
          "formula": "<span className=\"text-indigo-600 font-bold\">f_s ≤ f_s,max = μ_s · N</span>\n<span className=\"text-indigo-600 font-bold\">f_k = μ_k · N</span>",
          "table": {
            "headers": [
              "接觸界面材料與狀態",
              "靜摩擦係數 (μs)",
              "動摩擦係數 (μk)",
              "建築防滑等級"
            ],
            "rows": [
              [
                "乾式木地板 / 橡膠鞋底",
                "0.60 - 0.70",
                "0.40 - 0.50",
                "優良 (室內居室)"
              ],
              [
                "乾式混凝土 / 橡膠胎皮",
                "0.80 - 0.90",
                "0.65 - 0.75",
                "極佳 (停車場斜坡)"
              ],
              [
                "濕式拋光花崗石 / 鞋底",
                "0.20 - 0.35",
                "0.15 - 0.25",
                "危險 (需防滑處理)"
              ],
              [
                "鋪設止滑條斜坡 (1:12)",
                "≥ 0.50 (規範值)",
                "≥ 0.40",
                "符合無障礙法規"
              ]
            ]
          }
        },
        {
          "heading": "力學物理量與工程單位換算表 (Mechanics Unit Conversions)",
          "body": "在建築結構計算中，常涉及國際標準單位 (SI) 與舊制工程單位 (公噸、公斤重) 之轉換。",
          "table": {
            "headers": [
              "物理量 (Physical Quantity)",
              "SI 國際單位",
              "工程常用單位",
              "精確換算關係"
            ],
            "rows": [
              [
                "力 (Force, F)",
                "N (牛頓)",
                "kgf (公斤重), kN (千牛)",
                "1 kgf = 9.80665 N ≒ 9.8 N; 1 kN = 1000 N"
              ],
              [
                "質量 (Mass, m)",
                "kg (公斤)",
                "t (公噸), g (克)",
                "1 t = 1000 kg = 10⁶ g"
              ],
              [
                "加速度 (Acceleration, a)",
                "m/s²",
                "g (標準重力加速度)",
                "1 g = 9.80665 m/s² ≒ 9.8 m/s²"
              ],
              [
                "力矩 (Moment, M)",
                "N·m (牛頓米)",
                "kN·m, kgf·m",
                "1 kN·m = 1000 N·m ≒ 102 kgf·m"
              ],
              [
                "壓強/<span className='text-rose-600 font-bold'>應力</span> (Stress, σ)",
                "Pa (N/m²)",
                "kPa, MPa, kgf/cm²",
                "1 MPa = 10⁶ Pa = 1 N/mm² ≒ 10.2 kgf/cm²"
              ]
            ]
          }
        },
        {
          "heading": "靜定樑與桁架內力分析 (Internal Forces in Beams & Trusses)",
          "body": "建築結構受外力作用時，構件內部會產生<span className='text-rose-600 font-bold'>剪力</span> V (Shear Force) 與<span className='text-rose-600 font-bold'>彎矩</span> M (Bending Moment)。微分關係方程 dV/dx = -w(x) 及 dM/dx = V(x) 是繪製<span className='text-rose-600 font-bold'>剪力</span>圖與<span className='text-rose-600 font-bold'>彎矩</span>圖的力學基礎。在平面桁架中，利用節點法 (Method of Joints) 與剖面法 (Method of Sections) 可快速求解各桿件軸力 (拉力與壓力)。",
          "formula": "<span className=\"text-indigo-600 font-bold\">dV / dx = - w(x)</span>\n<span className=\"text-indigo-600 font-bold\">dM / dx = V(x)</span>\n<span className=\"text-indigo-600 font-bold\">Σ F_x,joint = 0, Σ F_y,joint = 0</span>",
          "steps": [
            "**第一步（求解整體<span className='text-rose-600 font-bold'>支承反力</span>）**：選定整體結構作為<span className='text-rose-600 font-bold'>自由體圖</span>，運用 ΣFx=0, ΣFy=0, ΣM=0 解出各<span className='text-rose-600 font-bold'>支承反力</span>。",
            "**第二步（斷面法求構件內力）**：在構件任意位置 x 截開，繪製左端或右端<span className='text-rose-600 font-bold'>自由體圖</span>，寫出<span className='text-rose-600 font-bold'>剪力</span> V(x) 與<span className='text-rose-600 font-bold'>彎矩</span> M(x) 方程式。",
            "**第三步（繪製 V-M 圖）**：尋找<span className='text-rose-600 font-bold'>剪力</span>為零處 (V=0)，該處往往對應最大<span className='text-rose-600 font-bold'>彎矩</span> M_max，為樑斷面尺寸設計的最關鍵位置。"
          ]
        },
        {
          "heading": "虎克定律與材料<span className='text-rose-600 font-bold'>應力</span>應變關係 (Hooke's Law & Stress-Strain Dynamics)",
          "body": "在彈性限度內，材料受拉伸或壓縮時，<span className='text-rose-600 font-bold'>應力</span> σ (Stress) 與<span className='text-rose-600 font-bold'>應變</span> ε (Strain) 成正比，比例常數為<span className='text-rose-600 font-bold'>彈性模數</span> E (Young's Modulus)。材料受到軸向拉力時，橫向會發生收縮，橫向<span className='text-rose-600 font-bold'>應變</span>與縱向<span className='text-rose-600 font-bold'>應變</span>之比值即為<span className='text-rose-600 font-bold'>波松比</span> ν (Poisson's Ratio)。",
          "formula": "<span className=\"text-indigo-600 font-bold\">σ = E · ε</span>\n<span className=\"text-indigo-600 font-bold\">ε = ΔL / L₀</span>\n<span className=\"text-indigo-600 font-bold\">ν = - ε_transverse / ε_longitudinal</span>\n<span className=\"text-indigo-600 font-bold\">ΔL = (P · L₀) / (A · E)</span>",
          "table": {
            "headers": [
              "建築工程材料",
              "彈性模數 E (GPa)",
              "波松比 ν",
              "屈服強度 f_y (MPa)",
              "力學行為特徵"
            ],
            "rows": [
              [
                "結構鋼材 (SN490)",
                "200 GPa",
                "0.30",
                "325 - 490 MPa",
                "延展性極佳，韌性高，強抗拉與抗壓"
              ],
              [
                "普通混凝土 (C280)",
                "25 - 30 GPa",
                "0.18 - 0.20",
                "28 MPa (抗壓強度)",
                "抗壓性強但抗拉強度極低 (僅約抗壓 10%)"
              ],
              [
                "結構用木材 (花旗松)",
                "11 - 14 GPa",
                "0.35 - 0.40",
                "30 - 50 MPa",
                "輕質高強，具異向性 (順紋與橫紋差異大)"
              ],
              [
                "建築平板玻璃",
                "70 GPa",
                "0.22",
                "40 - 80 MPa",
                "完全彈性脆性材料，無塑性屈服段"
              ]
            ]
          }
        },
        {
          "heading": "剛體<span className='text-rose-600 font-bold'>轉動慣量</span>與斷面幾何特性 (Moment of Inertia & Section Modulus)",
          "body": "樑與柱構件抗彎與抗挫屈的能力不僅取決於材料強弱，更取決於斷面幾何形狀。斷面二次矩 / <span className='text-rose-600 font-bold'>轉動慣量</span> I (Moment of Inertia) 描述斷面面積對於中立軸的分布狀況。<span className='text-rose-600 font-bold'>斷面模數</span> Z = I / y_max 直接決定樑斷面彎曲<span className='text-rose-600 font-bold'>應力</span> σ_max = M / Z。",
          "formula": "<span className=\"text-indigo-600 font-bold\">I_x = ∫ y² dA</span>\n<span className=\"text-indigo-600 font-bold\">I_rectangle = (b · h³) / 12</span>\n<span className=\"text-indigo-600 font-bold\">Z = I / (h / 2) = (b · h²) / 6</span>\n<span className=\"text-indigo-600 font-bold\">σ_max = M / Z ≤ f_allowable</span>",
          "steps": [
            "**第一步（確定形心軸）**：計算複雜截面（如 H 型鋼、箱型鋼）的中立軸 (Neutral Axis) 位置。",
            "**第二步（平行軸定理）**：若次圖形形心軸不與整體形心軸重合，採用平行軸定理 I = I_g + A · d² 疊加總<span className='text-rose-600 font-bold'>轉動慣量</span>。",
            "**第三步（驗算彎曲<span className='text-rose-600 font-bold'>應力</span>）**：將最大<span className='text-rose-600 font-bold'>彎矩</span> M 代入 σ = M / Z，確保最大邊緣<span className='text-rose-600 font-bold'>應力</span>不超過材料允許抗彎<span className='text-rose-600 font-bold'>應力</span>。"
          ]
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "一棟總質量 m = 12000 kg 的輕量鋼骨結構渡假小屋，在強烈地震中受地表加速度 a = 2.5 m/s² 的水平作用。請問該建築物基座所承受的水平基底<span className='text-rose-600 font-bold'>剪力</span> (Base Shear Force) 為多少 kN？",
          "steps": [
            "找出物體質量 m = 12000 kg ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "找出加速度 a = 2.5 m/s² ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入牛頓第二運動定律公式 F = m · a 計算總水平地震力 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "F = 12000 kg × 2.5 m/s² = 30000 N ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "將單位 N 換算為 kN：30000 N / 1000 = 30 kN ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "30 kN",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "某一地下停車場坡道設計傾角為 15° (sin 15° ≈ 0.2588, cos 15° ≈ 0.9659)。一輛總重 1500 kg 的轎車停在斜坡上。若車輪與鋪面間的<span className='text-rose-600 font-bold'>靜摩擦係數</span> μs = 0.60，重力加速度 g = 9.8 m/s²。試計算：(1) 車輪受到的平行斜面向下重力分力；(2) 斜面能提供的最大靜摩擦力 f_s,max 為多少 N？車輛是否會沿斜坡下滑？",
          "steps": [
            "計算正向力 N = m · g · cos(15°) = 1500 kg × 9.8 m/s² × 0.9659 ≈ 14198.7 N。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算下滑重力分力 F_down = m · g · sin(15°) = 1500 kg × 9.8 m/s² × 0.2588 ≈ 3804.4 N。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算最大靜摩擦力 f_s,max = μs · N = 0.60 × 14198.7 N ≈ 8519.2 N。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "比較 F_down 與 f_s,max：因為 3804.4 N < 8519.2 N，下滑力遠小於最大靜摩擦力，車輛能安全停穩不下滑。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 下滑重力分力 ≈ 3804.4 N；(2) 最大靜摩擦力 ≈ 8519.2 N，車輛安全止滑不下滑",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一長度 L = 6 m 的外挑雨庇懸臂樑，受到樑端集中載重 P = 20 kN 及樑自重均佈載重 w = 5 kN/m 作用。試求解該懸臂樑固定端 A 點所承受的垂直<span className='text-rose-600 font-bold'>支承反力</span> R_Ay 及抗<span className='text-rose-600 font-bold'>彎矩</span>反力 M_A。",
          "steps": [
            "計算均佈載重 w 之等效集中力 W_eq = w × L = 5 kN/m × 6 m = 30 kN，作用點位於樑中點離 A 點 3 m 處。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "根據垂直<span className='text-rose-600 font-bold'>靜力平衡</span>方程式 ΣFy = 0：R_Ay - W_eq - P = 0 => R_Ay = 30 + 20 = 50 kN。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "根據對 A 點之矩平衡方程式 ΣM_A = 0 (設順時針方向為正)：M_A - (W_eq × 3m) - (P × 6m) = 0。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入數值：M_A = (30 kN × 3 m) + (20 kN × 6 m) = 90 + 120 = 210 kN·m。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "垂直反力 R_Ay = 50 kN (向上)，固定端<span className='text-rose-600 font-bold'>彎矩</span> M_A = 210 kN·m",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一簡支樑跨度 L = 8 m，受一跨中集中載重 P = 40 kN。若樑斷面為矩形 (寬度 b = 200 mm，高度 h = 400 mm)。試求解：(1) 樑內最大<span className='text-rose-600 font-bold'>彎矩</span> M_max；(2) 樑斷面之中立軸<span className='text-rose-600 font-bold'>轉動慣量</span> I 及<span className='text-rose-600 font-bold'>斷面模數</span> Z；(3) 樑內最大邊緣彎曲<span className='text-rose-600 font-bold'>應力</span> σ_max 為多少 MPa？",
          "steps": [
            "計算簡支樑跨中集中載重之最大<span className='text-rose-600 font-bold'>彎矩</span> M_max = (P · L) / 4 = (40 kN × 8 m) / 4 = 80 kN·m = 80 × 10⁶ N·mm。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算矩形斷面<span className='text-rose-600 font-bold'>轉動慣量</span> I = (b · h³) / 12 = (200 × 400³) / 12 = 1.0667 × 10⁹ mm⁴。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算<span className='text-rose-600 font-bold'>斷面模數</span> Z = (b · h²) / 6 = (200 × 400²) / 6 = 5.3333 × 10⁶ mm³。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入彎曲<span className='text-rose-600 font-bold'>應力</span>公式 σ_max = M_max / Z = (80 × 10⁶ N·mm) / (5.3333 × 10⁶ mm³) ≈ 15.0 MPa。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) M_max = 80 kN·m；(2) Z ≈ 5.33×10⁶ mm³；(3) 最大彎曲<span className='text-rose-600 font-bold'>應力</span> σ_max ≈ 15.0 MPa",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一施工人員在 45 公尺高的高樓頂層不慎將一質量 2 kg 的工具箱自靜止自由落體墜落。若不計空氣阻力，重力加速度 g = 9.8 m/s²。(1) 工具箱落至地面需時多少秒？(2) 落地的瞬間速度為多少 m/s（及 km/h）？",
          "steps": [
            "已知初速 v₀ = 0 m/s，高度 h = s = 45 m，加速度 a = g = 9.8 m/s²。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "利用位移公式 s = ½ g t² 求解時間 t：45 = ½ × 9.8 × t² => 4.9 t² = 45 => t² ≒ 9.184 => t ≒ 3.03 秒。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "利用速度公式 v = g t 計算落地速度：v = 9.8 × 3.03 ≒ 29.7 m/s。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "將 m/s 換算為 km/h：29.7 × 3.6 ≒ 106.9 km/h。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "落地時間約 3.03 秒，落地速度約 29.7 m/s (106.9 km/h)",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一鋼結構大樓的柱構件高度 L₀ = 4.0 m，截面積 A = 80 cm² (8000 mm²)，材料為結構鋼 (<span className='text-rose-600 font-bold'>彈性模數</span> E = 200 GPa = 200,000 MPa)。在地震受壓時承受軸向壓力 P = 1600 kN (1.6 × 10⁶ N)。試計算：(1) 鋼柱內受到的平均壓<span className='text-rose-600 font-bold'>應力</span> σ；(2) 鋼柱之軸向<span className='text-rose-600 font-bold'>應變</span> ε 與彈性縮短量 ΔL 為多少 mm？",
          "steps": [
            "計算平均壓<span className='text-rose-600 font-bold'>應力</span> σ = P / A = (1,600,000 N) / (8,000 mm²) = 200 N/mm² = 200 MPa。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算軸向<span className='text-rose-600 font-bold'>應變</span> ε = σ / E = 200 MPa / 200,000 MPa = 0.001 (或 0.1%)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算軸向彈性縮短量 ΔL = ε · L₀ = 0.001 × 4,000 mm = 4.0 mm。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "結論：在 1600 kN 壓重下，4m 高鋼柱彈性縮短 4.0 mm，<span className='text-rose-600 font-bold'>應力</span>未超過屈服強度 (325 MPa)，處於安全彈性範圍內。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 平均壓<span className='text-rose-600 font-bold'>應力</span> σ = 200 MPa；(2) <span className='text-rose-600 font-bold'>應變</span> ε = 0.001，鋼柱縮短量 ΔL = 4.0 mm",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "一棟總質量 m = 12000 kg 的輕量鋼骨結構渡假小屋，在強烈地震中受地表加速度 a = 2.5 m/s² 的水平作用。請問該建築物基座所承受的水平基底<span className='text-rose-600 font-bold'>剪力</span> (Base Shear Force) 為多少 kN？",
        "steps": [
          "找出物體質量 m = 12000 kg",
          "找出加速度 a = 2.5 m/s²",
          "代入牛頓第二運動定律公式 F = m · a 計算總水平地震力",
          "F = 12000 kg × 2.5 m/s² = 30000 N",
          "將單位 N 換算為 kN：30000 N / 1000 = 30 kN"
        ],
        "answer": "30 kN"
      },
      "step0Prerequisites": [
        "牛頓三大運動定律 (慣性、F=ma、作用與反作用力)",
        "向量合成與直角坐標正交分解",
        "等加速度直線運動公式 (v=v₀+at, s=v₀t+½at²)"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "物體運動速度越大，所受的合力必定越大。",
          "correctThinking": "加速度才正比於合力 (F=ma)，等速度運動時合力恆為 0。",
          "trapDescription": "混淆速度與加速度是力學概念最常見陷阱。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "隔離體受力圖分析法 (FBD)",
          "explanation": "將結構或物體從環境中隔離，畫出所有接觸力與超距力，列 ΣFx=0, ΣFy=0 平衡方程。"
        }
      ]
    },
    {
      slug: 'work-energy',
      "title": "2. 📐 功與能量 (Work, Energy & Green Building Thermodynamics)",
      "desc": "功與功率、<span className='text-rose-600 font-bold'>動能</span>與<span className='text-rose-600 font-bold'>重力位能</span>、<span className='text-indigo-600 font-bold'>能量守恆定律</span>、綠建築<span className='text-indigo-600 font-bold'>熱功當量</span>、水泵/風機定律與蓄能技術。",
      "status": "done",
      "gradeLevel": 10,
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】<span className=\"text-rose-600 font-bold\">重力位能</span>與<span className=\"text-rose-600 font-bold\">動能</span>轉換：一重 50 kg 之落錘打樁機錘頭，自距離地面 10 公尺高處自由落下打擊樁頭。若不計空氣阻力，求錘頭剛接觸樁頭瞬間之「<span className=\"text-rose-600 font-bold\">動能</span> Ek」與「速度 v」？ (g = 9.8 m/s²)",
          "difficulty": "基礎",
          "steps": [
            "**步驟 1**：依據<span className='text-indigo-600 font-bold'>能量守恆定律</span>。最高點<span className='text-rose-600 font-bold'>重力位能</span> Ep = mgh 轉換為最低點<span className='text-rose-600 font-bold'>動能</span> Ek。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 2**：計算<span className='text-rose-600 font-bold'>動能</span> Ek。Ek = mgh = 50 kg × 9.8 m/s² × 10 m = 4900 焦耳 (J)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 3**：計算速度 v。Ek = 1/2 m v² ⇒ 4900 = 1/2 (50) v² ⇒ 25 v² = 4900 ⇒ v² = 196 ⇒ v = 14 m/s。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "接觸瞬間<span className=\"text-rose-600 font-bold\">動能</span> Ek = 4900 J，速度 v = 14 m/s。",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "physics-context.webp",
        "physics-mechanism.webp",
        "physics-comparison.webp",
        "physics-step.webp",
        "physics-real-world.webp",
        "physics-concept-diagram.webp",
        "physics-formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "功與電力功率定義 (Work & Electric Power)",
          "body": "當力作用於物體並使其在力的方向上產生位移時，稱為對該物體作功 (W = F · d · cosθ)。功率 (Power, P) 則為單位時間內所作的功或能量消耗速率 (P = W / t)。在建築機電工程中，抽水馬達、電梯主機與空調水泵的規格均以功率 (kW 或 HP) 標示。",
          "formula": "<span className=\"text-indigo-600 font-bold\">W = F · d · cos(θ)</span>\n<span className=\"text-indigo-600 font-bold\">P = W / t = F · v</span>",
          "steps": [
            "若力與位移同向 (θ = 0°)，功 W = F · d (正功)。",
            "若力與位移垂直 (θ = 90°)，功 W = 0 (不作功，例如手提重物水平行走)。",
            "若力與位移反向 (θ = 180°)，功 W = -F · d (負功，例如摩擦阻力或煞車)。"
          ]
        },
        {
          "heading": "動能與<span className='text-rose-600 font-bold'>重力位能</span> (Kinetic & Gravitational Potential Energy)",
          "body": "物體因運動而具有的能量稱為<span className='text-rose-600 font-bold'>動能</span> (Ek = ½ m v²)；因位置高度而具有的能量稱為<span className='text-rose-600 font-bold'>重力位能</span> (Ep = m g h)。高層建築屋頂高位水塔儲存大量位能，向下給水時位能轉換為<span className='text-rose-600 font-bold'>動能</span>與水壓（每 10 公尺水頭產生約 1 kgf/cm² 或 0.1 MPa 靜水壓）。",
          "formula": "<span className=\"text-indigo-600 font-bold\">E_k = ½ · m · v²</span>\n<span className=\"text-indigo-600 font-bold\">E_p = m · g · h</span>"
        },
        {
          "heading": "能量守恆定律與建築力能回收 (Law of Conservation of Energy)",
          "body": "在封閉系統中，能量既不能被創造，也不能被消滅，只能從一種形式轉換為另一種形式，總能量保持恆定。現代綠建築電梯配備再生煞車電力回饋系統 (Regenerative Braking)，將電梯下行或重載上行時減速的<span className='text-rose-600 font-bold'>重力位能</span>轉化為電能供大樓照明使用。",
          "formula": "<span className=\"text-indigo-600 font-bold\">E_total = E_k + E_p + W_loss = Constant</span>"
        },
        {
          "heading": "熱功當量與綠建築節能 (Joule's Equivalent & Energy Conservation)",
          "body": "焦耳透過實驗證實機械功與熱能可以等量轉換，確立了<span className='text-indigo-600 font-bold'>熱功當量</span>：1 cal ≒ 4.186 J。建築空調冷凍噸 (Refrigeration Ton, RT) 與千瓦 (kW) 的換算，是計算建築外殼耗能 (ENVLOAD) 與選擇高效能變頻主機的理學依據。",
          "formula": "<span className=\"text-indigo-600 font-bold\">1 cal = 4.186 J</span>\n<span className=\"text-indigo-600 font-bold\">1 RT (美制冷凍噸) ≒ 3.517 kW ≒ 3024 kcal/h</span>"
        },
        {
          "heading": "能量與功率單位換算對照表 (Energy & Power Unit Conversions)",
          "body": "建築與機電常用之焦耳、度數 (kWh)、卡路里、馬力與冷凍噸單位換算關係。",
          "table": {
            "headers": [
              "物理量類別",
              "單位名稱",
              "符號",
              "相當於焦耳 (J) 或瓦特 (W) 之換算"
            ],
            "rows": [
              [
                "能量/功",
                "焦耳 (Joule)",
                "J",
                "1 J = 1 N·m = 1 W·s"
              ],
              [
                "能量/電能",
                "千瓦小時 (度)",
                "kWh",
                "1 kWh = 3.6 × 10⁶ J = 3600 kJ"
              ],
              [
                "能量/熱能",
                "卡路里 / 千卡",
                "cal / kcal",
                "1 cal = 4.186 J; 1 kcal = 4186 J = 4.186 kJ"
              ],
              [
                "功率/機電",
                "瓦特 / 千瓦",
                "W / kW",
                "1 kW = 1000 W = 1000 J/s"
              ],
              [
                "功率/馬力",
                "英制馬力 / 公制馬力",
                "HP / PS",
                "1 HP ≒ 746 W (0.746 kW); 1 PS ≒ 735.5 W"
              ],
              [
                "冷房能力",
                "美國冷凍噸",
                "RT (US)",
                "1 RT = 12000 BTU/h ≒ 3.517 kW ≒ 3024 kcal/h"
              ]
            ]
          }
        },
        {
          "heading": "流體機械功率與水泵/風機定律 (Pump & Fan Affinity Laws)",
          "body": "在 HVAC 空調冰水與冰膽系統中，水泵與風機是主要耗能設備。水泵水功率 P_water = Q · ΔP (流量乘以壓差)。當調整馬達轉速 N 時，遵循<span className='text-indigo-600 font-bold'>風機水泵比例定律</span> (Affinity Laws)：流量與轉速成正比，揚程與轉速平方成正比，而消耗功率與轉速立方成正比 (P ∝ N³)。變頻控制 (VFD) 因此具有極高的節能效益。",
          "formula": "<span className=\"text-indigo-600 font-bold\">Q₂ / Q₁ = N₂ / N₁</span>\n<span className=\"text-indigo-600 font-bold\">H₂ / H₁ = (N₂ / N₁)²</span>\n<span className=\"text-indigo-600 font-bold\">P₂ / P₁ = (N₂ / N₁)³</span>",
          "steps": [
            "**第一步（轉速調降）**：當空調負載降低時，將水泵轉速降至額定的 80% (N₂/N₁ = 0.8)。",
            "**第二步（流量響應）**：水流量降至 80% (Q₂/Q₁ = 0.8)。",
            "**第三步（功率驟降）**：水泵耗電功率降至 0.8³ = 0.512 (約原本的 51.2%)，節省近 49% 電能。"
          ]
        },
        {
          "heading": "建築電梯平衡配重與機械效率 (Elevator Counterweight Dynamics)",
          "body": "電梯系統利用對重塊 (Counterweight) 來抵銷客廂自重與部分載重。對重塊質量通常設計為：客廂空重 m_car + (0.4 ~ 0.5) × 額定載重 m_capacity。如此設計能使馬達在電梯半載運轉時所需提供的淨拉力幾乎為零，極大地降低了升降過程的能量消耗。",
          "formula": "<span className=\"text-indigo-600 font-bold\">m_counterweight = m_car + 0.45 · m_capacity</span>\n<span className=\"text-indigo-600 font-bold\">ΔF_net = (m_total_up - m_total_down) · g</span>\n<span className=\"text-indigo-600 font-bold\">P_motor = (ΔF_net · v) / η</span>",
          "table": {
            "headers": [
              "電梯運行狀況",
              "客廂側總重",
              "配重側總重",
              "馬達受力方向與能耗特徵"
            ],
            "rows": [
              [
                "滿載上行",
                "高 (m_car + m_cap)",
                "中 (m_car + 0.45 m_cap)",
                "馬達正向作功，消耗電能"
              ],
              [
                "空載上行",
                "低 (m_car)",
                "中 (m_car + 0.45 m_cap)",
                "配重重力下拉，馬達可再生發電 (Regeneration)"
              ],
              [
                "滿載下行",
                "高 (m_car + m_cap)",
                "中 (m_car + 0.45 m_cap)",
                "客廂重力下墜，馬達發電回饋電網"
              ],
              [
                "半載上/下行",
                "相當 (m_car + 0.45 m_cap)",
                "相當 (m_car + 0.45 m_cap)",
                "系統接近完美平衡，僅需克服摩擦阻力"
              ]
            ]
          }
        },
        {
          "heading": "冰蓄冷空調系統與<span className='text-rose-600 font-bold'>潛熱</span>儲能 (Thermal Energy Storage & Ice Storage)",
          "body": "冰蓄冷 (Ice Thermal Storage) 利用夜間離峰低價電力運轉冰水主機，將水結成冰儲存熔化<span className='text-rose-600 font-bold'>潛熱</span> (Latent Heat of Fusion L_f ≈ 334 kJ/kg)。日間尖峰時段關閉或低速運轉冰水主機，融冰釋放冷量供建築空調使用，達成電力「移峰填谷」與降低契約容量負擔。",
          "formula": "<span className=\"text-indigo-600 font-bold\">Q_storage = m_ice · L_f + m_water · c_w · ΔT</span>\n<span className=\"text-indigo-600 font-bold\">1 kg 冰融化可吸收 334 kJ <span className='text-rose-600 font-bold'>潛熱</span> (相當於將 1kg 水降溫 80°C)</span>",
          "steps": [
            "夜間蓄冰期 (22:00 ~ 06:00)：製冷主機提供 -6°C 乙二醇不凍液，將蓄冰槽內的水凍結成冰。",
            "白天融冰融冷期 (09:00 ~ 17:00)：循環乙二醇流經蓄冰槽融冰，提供 5°C 冰水給空調箱 (AHU)。",
            "效益：顯著降低日間高額尖峰電費與契約電價。"
          ]
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "一住宅大樓抽水馬達需將質量 2000 kg 的水由地下蓄水池抽至高 30 公尺的屋頂水塔。假設重力加速度 g = 9.8 m/s²，馬達整體效率為 80%。(1) 馬達對水所作的有效功為多少 J（或 kJ）？(2) 若抽水過程需時 10 分鐘，則馬達所需的實際輸入電功率為多少 kW？",
          "steps": [
            "計算增加的<span className='text-rose-600 font-bold'>重力位能</span> (即有效功 W_out)：W_out = m · g · h = 2000 kg × 9.8 m/s² × 30 m = 588,000 J = 588 kJ。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算有效輸出功率 P_out：時間 t = 10 分鐘 = 600 秒。P_out = W_out / t = 588,000 J / 600 s = 980 W = 0.98 kW。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "考量馬達效率 η = 80% = 0.8，計算實際輸入電功率 P_in：P_in = P_out / η = 0.98 kW / 0.8 = 1.225 kW。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "有效功 W = 588 kJ，馬達實際輸入電功率 P_in = 1.225 kW",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "高層建築屋頂高位水塔水面距離 1 樓住戶給水龍頭高度差 h = 40 公尺。假設重力加速度 g = 9.8 m/s²，水密度 ρ = 1000 kg/m³。(1) 求 1 樓管路端受到的靜水壓強 P 為多少 Pa (及 MPa)？(2) 若 1 樓打開水龍頭（不計管路摩擦阻力），水流噴出的最大流速 v 為多少 m/s？",
          "steps": [
            "計算靜水壓強 P = ρ · g · h = 1000 kg/m³ × 9.8 m/s² × 40 m = 392,000 Pa = 0.392 MPa (約 3.92 kgf/cm²)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "利用能量守恆（力學能轉換 mgh = ½ mv²）求最大流速 v： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "v = √(2 · g · h) = √(2 × 9.8 × 40) = √784 = 28 m/s。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 靜水壓強 P = 0.392 MPa；(2) 最大水流速 v = 28 m/s",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一載人電梯客廂質量 800 kg，配重塊 (Counterweight) 質量 1100 kg。當客廂載有 600 kg 乘客由 1 樓上升至 10 樓（總高度差 h = 36 m），且以等速度 v = 2 m/s 運行。(1) 電梯馬達需施加的淨拉力為多少 N？(2) 馬達运行的輸出電功率為多少 kW 及馬力 HP？(g = 9.8 m/s²)",
          "steps": [
            "計算客廂總質量 m_car = 800 + 600 = 1400 kg。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "配重塊質量 m_cw = 1100 kg。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "客廂向上運動時，配重向下運動。淨向下重力差 ΔF = (m_car - m_cw) · g = (1400 - 1100) × 9.8 = 300 × 9.8 = 2940 N。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "馬達克服重力差所需之輸出功率 P = ΔF · v = 2940 N × 2 m/s = 5880 W = 5.88 kW。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "換算為馬力 HP：5880 W / 746 W/HP ≒ 7.88 HP。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "淨拉力 ΔF = 2940 N，馬達輸出功率 P = 5.88 kW (7.88 HP)",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "某中央空調冰水水泵在滿載額定轉速 N₁ = 1750 RPM 時，水泵消耗電功率 P₁ = 15 kW。當建築空調負載降低，變頻器 (VFD) 將水泵轉速調降至 N₂ = 1400 RPM。試利用風機/水泵定律計算：(1) 轉速調降後的水泵消耗電功率 P₂ 為多少 kW？(2) 轉速調降後可節省百分之多少的電力？",
          "steps": [
            "計算轉速比 k = N₂ / N₁ = 1400 / 1750 = 0.80 (降至 80%)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "依據功率與轉速立方關係公式 P₂ / P₁ = (N₂ / N₁)³： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "P₂ = P₁ × (0.80)³ = 15 kW × 0.512 = 7.68 kW。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算節電百分比 = ((15 - 7.68) / 15) × 100% = (7.32 / 15) × 100% = 48.8%。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 調降後功率 P₂ = 7.68 kW；(2) 節省 48.8% 電能",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "某綠建築裝設峰值功率 10 kW 的太陽能光電板系統。若該地區每日平均有效日照時間為 4.5 小時，太陽能板發電轉換效率為 18%。(1) 該系統每日可產生多少度 (kWh) 電能？相當於多少百萬焦耳 (MJ)？(2) 若每度電可減少 0.5 kg CO₂ 排放，一年 (365 天) 可減碳多少公斤？",
          "steps": [
            "日發電量 E = 峰值容量 × 有效日照小時 = 10 kW × 4.5 h = 45 kWh (度)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "換算為焦耳：1 kWh = 3.6 MJ。故 45 kWh = 45 × 3.6 = 162 MJ。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算年減碳量：年發電量 = 45 kWh/天 × 365 天 = 16,425 kWh。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "年減碳量 = 16,425 kWh × 0.5 kg/kWh = 8,212.5 kg CO₂。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "每日發電 45 度 (162 MJ)，一年可減少約 8,212.5 kg CO₂ 排放",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一商業大樓採用冰蓄冷空調系統。蓄冰槽內含有 10 公噸 (10,000 kg) 的冰。日間空調尖峰時段將這些冰完全融化為 0°C 的水。(已知冰熔化<span className='text-rose-600 font-bold'>潛熱</span> L_f = 334 kJ/kg，美制冷凍噸 1 RT ≒ 3.517 kW = 3.517 kJ/s)。試計算：(1) 10 公噸冰完全融化可釋放的總冷量為多少 MJ？ (2) 若這批冰在 5 小時內均勻融解完畢，相當於提供多少美制冷凍噸 (RT) 的冷房能力？",
          "steps": [
            "計算釋放總冷量 Q = m · L_f = 10,000 kg × 334 kJ/kg = 3,340,000 kJ = 3,340 MJ。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算平均冷房功率 P = Q / t：時間 t = 5 小時 = 18,000 秒。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "P = 3,340,000 kJ / 18,000 s ≈ 185.56 kW。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "換算為美制冷凍噸 RT：RT = 185.56 kW / 3.517 kW/RT ≈ 52.76 RT。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 總融冰冷量 Q = 3,340 MJ；(2) 相當於提供約 52.76 RT 冷房能力",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "一住宅大樓抽水馬達需將質量 2000 kg 的水由地下蓄水池抽至高 30 公尺的屋頂水塔。假設重力加速度 g = 9.8 m/s²，馬達整體效率為 80%。(1) 馬達對水所作的有效功為多少 J（或 kJ）？(2) 若抽水過程需時 10 分鐘，則馬達所需的實際輸入電功率為多少 kW？",
        "steps": [
          "計算增加的<span className='text-rose-600 font-bold'>重力位能</span> (即有效功 W_out)：W_out = m · g · h = 2000 kg × 9.8 m/s² × 30 m = 588,000 J = 588 kJ。",
          "計算有效輸出功率 P_out：時間 t = 10 分鐘 = 600 秒。P_out = W_out / t = 588,000 J / 600 s = 980 W = 0.98 kW。",
          "考量馬達效率 η = 80% = 0.8，計算實際輸入電功率 P_in：P_in = P_out / η = 0.98 kW / 0.8 = 1.225 kW。"
        ],
        "answer": "有效功 W = 588 kJ，馬達實際輸入電功率 P_in = 1.225 kW"
      },
      "step0Prerequisites": [
        "功的定義 W = F · s · cos θ",
        "動能 Ek = ½mv² 與重力位能 Ep = mgh",
        "力學能守恆定律與能量轉換"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "只要有施力在物體上，就一定有對物體作功。",
          "correctThinking": "作功必須滿足力與位移同向或有分量 (W = F s cos θ)，若位移為 0 或力與位移垂直 (θ=90°)，作功為 0。",
          "trapDescription": "正向力與向心力不作功常被考生忽略。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "能量守恆收支平衡模型",
          "explanation": "初始總能量 ＋ 外力輸入功 ＝ 最終總能量 ＋ 摩擦損耗熱能，建立全系統能量收支表。"
        }
      ]
    },
    {
      slug: 'thermodynamics',
      "title": "3. 🌟 熱學與建築熱環境 (Building Thermodynamics & HVAC)",
      "desc": "熱傳導/對流/輻射、外牆<span className='text-rose-600 font-bold'>熱傳透率</span> U 值與<span className='text-rose-600 font-bold'>熱阻</span> R 值、<span className='text-rose-600 font-bold'>顯熱</span>與<span className='text-rose-600 font-bold'>潛熱</span>、<span className='text-rose-600 font-bold'>焓濕圖</span>與冰水主機 <span className='text-rose-600 font-bold'>COP</span> 性能係數。",
      "status": "done",
      "gradeLevel": 10,
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】建築牆體<span className=\"text-rose-600 font-bold\">熱傳導</span>率計算：一單層混凝土外牆厚度 d = 0.2 m，面積 A = 20 m²，混凝土<span className=\"text-rose-600 font-bold\">熱傳導</span>係數 k = 1.5 W/(m·K)。若室外氣溫 35°C，室內冷氣維持 25°C，求每小時透過該外牆傳入室內之熱量 Q（焦耳 J）？",
          "difficulty": "中等",
          "steps": [
            "**步驟 1**：利用傅立葉<span className='text-rose-600 font-bold'>熱傳導</span>定律。傳熱功率 P = k · A · (T1 - T2) / d。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 2**：代入數值求功率 P。P = 1.5 × 20 × (35 - 25) / 0.2 = 300 / 0.2 = 1500 W (J/s)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 3**：計算一小時 (3600秒) 總熱量 Q。Q = P × t = 1500 J/s × 3600 s = 5.4 × 10⁶ 焦耳 = 5.4 MJ。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "每小時傳入熱量 Q 為 5.4 × 10⁶ 焦耳 (5.4 MJ)。",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "physics-context.webp",
        "physics-mechanism.webp",
        "physics-comparison.webp",
        "physics-step.webp",
        "physics-real-world.webp",
        "physics-concept-diagram.webp",
        "physics-formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "熱傳遞三大機制 (Mechanisms of Heat Transfer)",
          "body": "熱量由高溫處傳向低溫處，共有傳導、對流與輻射三種途徑。建築外殼的隔熱設計即是在這三種傳遞途徑上加設阻礙（如真空層、Low-E 膜、反射塗料與低導熱材質）。",
          "formula": "<span className=\"text-indigo-600 font-bold\">Q_conduction / t = k · A · (T_hot - T_cold) / d</span>\n<span className=\"text-indigo-600 font-bold\">Q_convection / t = h · A · ΔT</span>\n<span className=\"text-indigo-600 font-bold\">Q_radiation / t = ε · σ · A · (T₁⁴ - T₂⁴)</span>",
          "steps": [
            "熱傳導 (Conduction)：經由物質分子碰撞傳遞熱能。傳導熱流與導熱係數 k 及溫差成正比，與厚度 d 成反比。",
            "熱對流 (Convection)：經由流體（空氣或水）流動帶走熱能。分為自然對流與強制對流 (如空調送風)。",
            "熱輻射 (Radiation)：不需介質，以電磁波 (紅外線) 形式輻射能量。Low-E 低輻射玻璃可反射 90% 以上遠紅外線<span className='text-rose-600 font-bold'>熱輻射</span>。"
          ]
        },
        {
          "heading": "熱阻 R 值與<span className='text-rose-600 font-bold'>熱傳透率</span> U 值 (Thermal Resistance & Transmittance)",
          "body": "建築外牆與屋頂由多層材料組合成。單一材料<span className='text-rose-600 font-bold'>熱阻</span> R = d / k (厚度除以<span className='text-rose-600 font-bold'>熱傳導</span>率)。多層構造之總<span className='text-rose-600 font-bold'>熱阻</span> ΣR 為各層<span className='text-rose-600 font-bold'>熱阻</span>與內外表面熱傳阻 (R_si, R_se) 之代數和。<span className='text-rose-600 font-bold'>熱傳透率</span> U 值則為總<span className='text-rose-600 font-bold'>熱阻</span>之倒數 (U = 1 / ΣR)。U 值越低，代表構造之隔熱性能越佳。",
          "formula": "<span className=\"text-indigo-600 font-bold\">R = d / k</span>\n<span className=\"text-indigo-600 font-bold\">ΣR = R_se + Σ(d_i / k_i) + R_si</span>\n<span className=\"text-indigo-600 font-bold\">U = 1 / ΣR</span>\n<span className=\"text-indigo-600 font-bold\">Q = U · A · ΔT</span>"
        },
        {
          "heading": "顯熱、<span className='text-rose-600 font-bold'>潛熱</span>與建築空調負荷 (Sensible Heat, Latent Heat & HVAC Load)",
          "body": "顯熱 (Sensible Heat) 會引致物質溫度改變而不改變其相態 (Q = m c ΔT)；<span className='text-rose-600 font-bold'>潛熱</span> (Latent Heat) 則在物質發生相變（如水蒸發為水蒸氣或冰熔化）時吸收或釋放熱量，溫度保持不變 (Q = m L)。台灣夏季氣候高溫高濕，建築空調總熱負荷中包含龐大的<span className='text-rose-600 font-bold'>潛熱</span>除濕負荷。",
          "formula": "<span className=\"text-indigo-600 font-bold\">Q_sensible = m · c · ΔT</span>\n<span className=\"text-indigo-600 font-bold\">Q_latent = m · L_v</span>"
        },
        {
          "heading": "建築外皮節能指標與 Thermal Mass 蓄熱效應",
          "body": "高熱容量材料（如厚重混凝土牆、水牆）具有熱滯後 (Thermal Lag) 效應，能延緩夏季白天的太陽輻射熱傳入室內，並於夜間降溫時慢慢釋放熱量。搭配外牆通氣層與遮陽板，可大幅降低 HVAC 空調冰水主機之尖峰負荷。"
        },
        {
          "heading": "熱學物理量與隔熱參數換算表 (Thermal Parameters & Units)",
          "body": "建築工程常見之<span className='text-rose-600 font-bold'>熱傳導</span>率 k、<span className='text-rose-600 font-bold'>熱阻</span> R、<span className='text-rose-600 font-bold'>熱傳透率</span> U 及空調能力單位。",
          "table": {
            "headers": [
              "熱物理參數",
              "國際標準單位 (SI)",
              "工程常用/美制單位",
              "單位定義與換算"
            ],
            "rows": [
              [
                "熱傳導率 (k)",
                "W/(m·K)",
                "kcal/(h·m·°C)",
                "1 W/(m·K) ≒ 0.86 kcal/(h·m·°C)"
              ],
              [
                "熱阻值 (R)",
                "m²·K/W",
                "h·ft²·°F/BTU (R-val)",
                "1 m²·K/W ≒ 5.678 h·ft²·°F/BTU"
              ],
              [
                "熱傳透率 (U)",
                "W/(m²·K)",
                "kcal/(h·m²·°C)",
                "1 W/(m²·K) ≒ 0.86 kcal/(h·m²·°C)"
              ],
              [
                "比熱 (c)",
                "J/(kg·K)",
                "kcal/(kg·°C)",
                "1 kcal/(kg·°C) = 4186 J/(kg·K)"
              ],
              [
                "蒸發<span className='text-rose-600 font-bold'>潛熱</span> (Lv)",
                "kJ/kg",
                "kcal/kg",
                "水之蒸發<span className='text-rose-600 font-bold'>潛熱</span> ≒ 2260 kJ/kg (540 kcal/kg)"
              ]
            ]
          }
        },
        {
          "heading": "濕空氣性質與<span className='text-rose-600 font-bold'>焓濕圖</span>分析 (Psychrometrics & Air Conditioning)",
          "body": "建築空調工程的核心在於濕空氣的狀態調節。空氣由乾空氣與水蒸氣組成。乾球溫度 (DBT)、濕球溫度 (WBT)、露點溫度 (DPT)、相對濕度 (RH%) 及含濕量 (Absolute Humidity x) 在<span className='text-rose-600 font-bold'>焓濕圖</span> (Psychrometric Chart) 上唯一確定空氣狀態。當空氣降溫至露點以下時，水蒸氣凝結成水滴，此即空調除濕原理。",
          "formula": "<span className=\"text-indigo-600 font-bold\">RH% = (P_v / P_vsat) × 100%</span>\n<span className=\"text-indigo-600 font-bold\">h = 1.006 · t + x · (2501 + 1.86 · t) (kJ/kg)</span>",
          "steps": [
            "**第一步（狀態定位）**：根據乾球溫度與相對濕度在<span className='text-rose-600 font-bold'>焓濕圖</span>查出空氣比焓 h (kJ/kg) 與含濕量 x (g/kg)。",
            "**第二步（冷卻除濕過程）**：空氣流經冰水盤管，乾球溫度降低，達露點後沿飽和線 (100% RH) 下降析出冷凝水。",
            "**第三步（送風焓差計算）**：冷房負荷 Q_total = m_air · (h_room - h_supply)。"
          ]
        },
        {
          "heading": "冷凍循環與冰水主機性能指標 <span className='text-rose-600 font-bold'>COP</span> / EER / kW/RT",
          "body": "蒸汽壓縮式冷凍循環包含壓縮機、凝結器、膨脹閥與蒸發器四大元件。冰水主機性能指標包括：性能係數 (<span className='text-rose-600 font-bold'>COP</span> = Q_cool / W_elect)、能源效率比 (EER, BTU/h·W) 以及耗電率 (kW/RT)。卡諾逆循環決定了理論最高 <span className='text-rose-600 font-bold'>COP</span> = T_L / (T_H - T_L)。",
          "formula": "<span className=\"text-indigo-600 font-bold\">COP = Q_cooling (kW) / W_power (kW)</span>\n<span className=\"text-indigo-600 font-bold\">kW / RT = 3.517 / COP</span>\n<span className=\"text-indigo-600 font-bold\">EER (W/W) = <span className='text-rose-600 font-bold'>COP</span> = 3.412 · EER (BTU/h·W)</span>",
          "table": {
            "headers": [
              "冰水主機類型",
              "冷卻方式",
              "典型 <span className='text-rose-600 font-bold'>COP</span> 範圍",
              "耗電指標 kW/RT",
              "適用建築規模"
            ],
            "rows": [
              [
                "氣冷式往復/渦卷主機",
                "風扇對流冷卻凝結器",
                "2.8 - 3.2",
                "1.10 - 1.25 kW/RT",
                "中小型商業大樓、精品店面"
              ],
              [
                "氣冷式螺桿主機",
                "風扇強制冷卻",
                "3.2 - 3.8",
                "0.92 - 1.10 kW/RT",
                "中型辦公大樓、醫院廠房"
              ],
              [
                "水冷式螺桿主機",
                "配合冷卻水塔 (Cooling Tower)",
                "4.5 - 5.5",
                "0.64 - 0.78 kW/RT",
                "大型商場、集合住宅公共區域"
              ],
              [
                "水冷式磁懸浮離心主機",
                "水冷 + 磁懸浮無油軸承",
                "6.5 - 8.0+",
                "0.44 - 0.54 kW/RT",
                "大型綠建築頂級辦公大樓、數據中心"
              ]
            ]
          }
        },
        {
          "heading": "自然通風熱壓 (<span className='text-rose-600 font-bold'>煙囪效應</span>) 計算 (Stack Effect & Thermal Buoyancy)",
          "body": "高層建築管道間、中庭 (Atrium) 與採光井中，室內外溫差會導致空氣密度差異。熱空氣密度低而上升，由頂部排氣窗逸出，底部引進室外涼爽空氣，此現象稱為熱壓通風或<span className='text-rose-600 font-bold'>煙囪效應</span> (Stack Effect)。",
          "formula": "<span className=\"text-indigo-600 font-bold\">ΔP_stack = ρ₀ · g · h · (1/T_out - 1/T_in) · T₀</span>\n<span className=\"text-indigo-600 font-bold\">Q_stack = C_d · A · √( 2 · g · h · ΔT / T_in )</span>",
          "steps": [
            "**第一步（求取熱壓差 ΔP）**：根據中庭開窗高度差 h 與室內外絕對溫度 (T_in, T_out, K) 計算驅動壓差。",
            "**第二步（計算通風量 Q）**：代入開窗有效面積 A 與流量係數 Cd (通常取 0.6~0.65) 求出自然換氣量 m³/s。"
          ]
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "某建築外牆構造由外至內依次為：15 cm 厚鋼筋混凝土牆 (k1 = 1.5 W/m·K)、5 cm 厚保麗龍隔熱板 (k2 = 0.035 W/m·K) 以及 1.5 cm 厚石膏板 (k3 = 0.15 W/m·K)。設室內表面熱傳阻 R_si = 0.11 m²·K/W，室外表面熱傳阻 R_se = 0.04 m²·K/W。(1) 求該外牆構造之總<span className='text-rose-600 font-bold'>熱阻</span> ΣR；(2) 求該外牆之<span className='text-rose-600 font-bold'>熱傳透率</span> U 值。",
          "steps": [
            "計算各材料層<span className='text-rose-600 font-bold'>熱阻</span> R = d / k： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "- 鋼筋混凝土層 R1 = 0.15 m / 1.5 = 0.10 m²·K/W ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "- 保麗龍隔熱層 R2 = 0.05 m / 0.035 ≒ 1.429 m²·K/W ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "- 石膏板層 R3 = 0.015 m / 0.15 = 0.10 m²·K/W ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算總<span className='text-rose-600 font-bold'>熱阻</span> ΣR = R_se + R1 + R2 + R3 + R_si = 0.04 + 0.10 + 1.429 + 0.10 + 0.11 = 1.779 m²·K/W。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算<span className='text-rose-600 font-bold'>熱傳透率</span> U 值：U = 1 / ΣR = 1 / 1.779 ≒ 0.562 W/(m²·K)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "總<span className='text-rose-600 font-bold'>熱阻</span> ΣR ≒ 1.779 m²·K/W，<span className='text-rose-600 font-bold'>熱傳透率</span> U ≒ 0.562 W/(m²·K)",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "一間面積 40 m²、高 3 m 的會議室 (體積 120 m³)，室內空氣密度 ρ = 1.2 kg/m³，空氣比熱 c = 1.005 kJ/(kg·K)。若空調系統欲在 15 分鐘內將室內空氣溫度由 32°C 降低至 22°C (降溫 ΔT = 10 K)。(1) 降溫過程需吸收之<span className='text-rose-600 font-bold'>顯熱</span>量 Q_sensible 為多少 kJ？(2) 空調冷房<span className='text-rose-600 font-bold'>顯熱</span>功率為多少 kW？",
          "steps": [
            "計算室內空氣總質量 m = ρ × V = 1.2 kg/m³ × 120 m³ = 144 kg。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算所需<span className='text-rose-600 font-bold'>顯熱</span> Q_sensible = m · c · ΔT = 144 kg × 1.005 kJ/(kg·K) × 10 K = 1447.2 kJ。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算冷房<span className='text-rose-600 font-bold'>顯熱</span>功率 P = Q / t：時間 t = 15 分鐘 = 900 秒。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "P = 1447.2 kJ / 900 s ≈ 1.608 kW。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) <span className='text-rose-600 font-bold'>顯熱</span>量 Q = 1447.2 kJ；(2) <span className='text-rose-600 font-bold'>顯熱</span>冷房功率 P ≈ 1.608 kW",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一西曬頂樓辦公室外牆面積 A = 50 m²，牆體 U 值為 1.8 W/(m²·K)。夏季下午室外外牆表面等效溫度為 40°C，室內空調設定溫度為 25°C。(1) 經由外牆傳入室內的熱流率 Q_wall 為多少瓦特 (W)？(2) 若此熱量完全由空調冰水主機移除，折合多少美制冷凍噸 (RT)？",
          "steps": [
            "計算溫差 ΔT = T_out - T_in = 40 - 25 = 15 K (或 °C)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入外牆傳熱公式 Q = U · A · ΔT：Q = 1.8 W/(m²·K) × 50 m² × 15 K = 1350 W = 1.35 kW。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "將瓦特換算為美制冷凍噸 RT (1 RT ≒ 3.517 kW = 3517 W)： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "RT 負荷 = 1350 W / 3517 W/RT ≒ 0.384 RT。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "外牆傳熱率 Q = 1350 W (1.35 kW)，空調負荷 ≒ 0.384 RT",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一間 100 m³ 之空間，空氣密度 ρ = 1.2 kg/m³，空氣比熱 c = 1.005 kJ/(kg·K)。若新風換氣引入 20°C 溫差之熱空氣。(1) 將室內空氣降溫 10°C 所需吸收之<span className='text-rose-600 font-bold'>顯熱</span>量 Q_sensible 為多少 kJ？(2) 若同時需將 2 kg 蒸發水蒸氣冷凝除濕（水凝結<span className='text-rose-600 font-bold'>潛熱</span> L_v = 2450 kJ/kg），則<span className='text-rose-600 font-bold'>潛熱</span>量 Q_latent 與總熱負荷 Q_total 為多少 kJ？",
          "steps": [
            "計算空氣質量 m = ρ × V = 1.2 kg/m³ × 100 m³ = 120 kg。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算<span className='text-rose-600 font-bold'>顯熱</span> Q_sensible = m · c · ΔT = 120 kg × 1.005 kJ/(kg·K) × 10 K = 120.6 kJ。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算<span className='text-rose-600 font-bold'>潛熱</span> Q_latent = m_water · L_v = 2 kg × 2450 kJ/kg = 4900 kJ。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算總熱負荷 Q_total = Q_sensible + Q_latent = 120.6 + 4900 = 5020.6 kJ。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "顯熱 Q_sensible = 120.6 kJ，<span className='text-rose-600 font-bold'>潛熱</span> Q_latent = 4900 kJ，總熱負荷 Q_total = 5020.6 kJ",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一商辦大樓選用一台額定冷凍能力 Q_cool = 100 RT (相當於 351.7 kW) 的水冷磁懸浮離心式冰水主機。已知該主機之 <span className='text-rose-600 font-bold'>COP</span> 性能係數為 6.50。(1) 該冰水主機全負載運轉時的輸入電功率 W_elect 為多少 kW？(2) 計算該主機的耗電率指標 (kW/RT) 為多少？",
          "steps": [
            "已知冷房能力 Q_cool = 351.7 kW，<span className='text-rose-600 font-bold'>COP</span> = 6.50。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "利用 <span className='text-rose-600 font-bold'>COP</span> 定義公式 <span className='text-rose-600 font-bold'>COP</span> = Q_cool / W_elect 求解輸入電功率 W_elect： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "W_elect = Q_cool / <span className='text-rose-600 font-bold'>COP</span> = 351.7 kW / 6.50 ≈ 54.11 kW。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算耗電率 kW/RT = W_elect / 冷動噸數 = 54.11 kW / 100 RT = 0.5411 kW/RT。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "或利用換算公式 kW/RT = 3.517 / <span className='text-rose-600 font-bold'>COP</span> = 3.517 / 6.50 ≈ 0.5411 kW/RT。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 輸入電功率 W_elect ≈ 54.11 kW；(2) 耗電率 ≈ 0.541 kW/RT (屬超一級節能主機)",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一挑高 12 公尺的綠建築中庭 (Atrium)，頂部排氣窗與底部進風口高度差 h = 10 m。夏季室內平均氣溫 T_in = 28°C (301.15 K)，室外氣溫 T_out = 34°C (307.15 K)。若中庭開窗有效面積 A = 4 m²，流量係數 Cd = 0.65，重力加速度 g = 9.8 m/s²。試利用<span className='text-rose-600 font-bold'>煙囪效應</span>公式計算此中庭自然熱壓通風量 Q (m³/s) 為多少？",
          "steps": [
            "計算溫差 ΔT = T_out - T_in = 34 - 28 = 6 K。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入<span className='text-rose-600 font-bold'>煙囪效應</span>熱壓通風量公式 Q = Cd · A · √( (2 · g · h · ΔT) / T_in )： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "Q = 0.65 × 4 m² × √( (2 × 9.8 × 10 × 6) / 301.15 ) ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "Q = 2.6 × √( 1176 / 301.15 ) = 2.6 × √( 3.905 ) = 2.6 × 1.976 ≈ 5.14 m³/s。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "換算每小時換氣量 = 5.14 m³/s × 3600 s/h ≈ 18,504 m³/h。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "自然熱壓通風量 Q ≈ 5.14 m³/s (相當於 18,504 m³/h 無動力自然通風)",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "某建築外牆構造由外至內依次為：15 cm 厚鋼筋混凝土牆 (k1 = 1.5 W/m·K)、5 cm 厚保麗龍隔熱板 (k2 = 0.035 W/m·K) 以及 1.5 cm 厚石膏板 (k3 = 0.15 W/m·K)。設室內表面熱傳阻 R_si = 0.11 m²·K/W，室外表面熱傳阻 R_se = 0.04 m²·K/W。(1) 求該外牆構造之總<span className='text-rose-600 font-bold'>熱阻</span> ΣR；(2) 求該外牆之<span className='text-rose-600 font-bold'>熱傳透率</span> U 值。",
        "steps": [
          "計算各材料層<span className='text-rose-600 font-bold'>熱阻</span> R = d / k：",
          "- 鋼筋混凝土層 R1 = 0.15 m / 1.5 = 0.10 m²·K/W",
          "- 保麗龍隔熱層 R2 = 0.05 m / 0.035 ≒ 1.429 m²·K/W",
          "- 石膏板層 R3 = 0.015 m / 0.15 = 0.10 m²·K/W",
          "計算總<span className='text-rose-600 font-bold'>熱阻</span> ΣR = R_se + R1 + R2 + R3 + R_si = 0.04 + 0.10 + 1.429 + 0.10 + 0.11 = 1.779 m²·K/W。",
          "計算<span className='text-rose-600 font-bold'>熱傳透率</span> U 值：U = 1 / ΣR = 1 / 1.779 ≒ 0.562 W/(m²·K)。"
        ],
        "answer": "總<span className='text-rose-600 font-bold'>熱阻</span> ΣR ≒ 1.779 m²·K/W，<span className='text-rose-600 font-bold'>熱傳透率</span> U ≒ 0.562 W/(m²·K)"
      },
      "step0Prerequisites": [
        "熱力學第零、第一與第二定律",
        "比熱容量公式 Q = m s ΔT",
        "熱傳導 (Fourier Law)、熱對流與熱輻射 (Stefan-Boltzmann Law)"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "熱量會自發性地由低溫物體傳遞到高溫物體。",
          "correctThinking": "熱力學第二定律規定熱量只能自發從高溫傳向低溫，逆向傳熱必須消耗外在功（如冷氣壓縮機）。",
          "trapDescription": "建築散熱與熱泵循環之方向性。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "建築外殼熱阻串聯模型",
          "explanation": "牆體總熱阻 R_total = Σ (厚度 / 導熱係數) ＋ 內外表面熱阻，傳熱係數 U = 1 / R_total。"
        }
      ]
    },
    {
      slug: 'waves-acoustics',
      "title": "4. 🏗️ 波動與建築聲學 (Building Waves & Acoustics)",
      "desc": "波動物理、聲速與<span className='text-rose-600 font-bold'>聲壓級</span> dB(A)、賽賓<span className='text-rose-600 font-bold'>殘響時間</span> RT60、隔音等級 <span className='text-rose-600 font-bold'>STC</span>、樓板衝擊音與交通噪音衰減。",
      "status": "done",
      "gradeLevel": 10,
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】建築聲學與分貝（dB）加總：施工現場兩台發電機同時運作，若單獨運作第一台時在量測點產生的<span className=\"text-rose-600 font-bold\">聲壓級</span>為 70 dB，第二台單獨運作時亦為 70 dB。求兩台同時運作時之總<span className=\"text-rose-600 font-bold\">聲壓級</span>為多少 dB？",
          "difficulty": "中等",
          "steps": [
            "**步驟 1**：理解對數分貝加總規則。兩相同分貝能量相加，總分貝增加 3 dB（10 · log10(2) ≒ 3）。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 2**：列分貝能量疊加公式。L_total = 10 · log10(10^(70/10) + 10^(70/10)) = 10 · log10(2 × 10^7)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 3**：計算結果。L_total = 70 + 10 · log10(2) = 70 + 3.01 ≒ 73 dB。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "兩台同時運作之總<span className=\"text-rose-600 font-bold\">聲壓級</span>為 73 dB。",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "physics-context.webp",
        "physics-mechanism.webp",
        "physics-comparison.webp",
        "physics-step.webp",
        "physics-real-world.webp",
        "physics-concept-diagram.webp",
        "physics-formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "聲波性質與空氣中聲速 (Sound Wave Speed & Frequency)",
          "body": "聲波為縱波（疏密波），在介質中傳播。波速 v 等於頻率 f 乘以波長 λ (v = f · λ)。空氣中聲速隨攝氏溫度 t 上升而增大。人耳可聽頻率範圍約為 20 Hz ~ 20,000 Hz，建築防音設計重點關注 125 Hz ~ 4000 Hz 音頻。",
          "formula": "<span className=\"text-indigo-600 font-bold\">v = 331 + 0.6 · t (m/s)</span>\n<span className=\"text-indigo-600 font-bold\">v = f · λ</span>"
        },
        {
          "heading": "聲強級與分貝 dB(A) 算術疊加 (Sound Level & Decibel Addition)",
          "body": "人耳對聲音強弱的感知呈對數關係。聲強級 L_p 以分貝 (dB) 標記。當多個獨立聲源同時發聲時，分貝數不能直接代數相加，必須將分貝轉換回能量強度相加後再求對數。兩個相同分貝的獨立聲源疊加，總<span className='text-rose-600 font-bold'>聲壓級</span>僅增加 3 dB。",
          "formula": "<span className=\"text-indigo-600 font-bold\">L_p = 10 · log₁₀(I / I₀) = 20 · log₁₀(P / P₀)</span>\n<span className=\"text-indigo-600 font-bold\">L_total = 10 · log₁₀( Σ 10^(L_i / 10) )</span>",
          "steps": [
            "基準聲強 I₀ = 10⁻¹² W/m² (人耳聽閾 0 dB)。",
            "兩等音量聲源合成：L₁ = L₂ = L，則 L_total = L + 10 log₁₀(2) ≒ L + 3.01 dB。",
            "若兩聲源分貝相差 10 dB 以上，較小者對總聲分貝影響可忽略不計 (如 70 dB + 50 dB ≒ 70.04 dB)。"
          ]
        },
        {
          "heading": "空間吸音與賽賓<span className='text-rose-600 font-bold'>殘響時間</span>公式 (Sabine's Reverberation Time RT60)",
          "body": "殘響時間 (RT60) 指聲源停止發聲後，室內聲能密度衰減 60 dB (至原能量之百萬分之一) 所需的時間。<span className='text-indigo-600 font-bold'>賽賓公式</span> (Sabine Formula) 為音樂廳、演講廳與教堂聲學設計的核心工具。<span className='text-rose-600 font-bold'>殘響時間</span>過長會降低言語清晰度，過短則使音樂顯得乾澀無生氣。",
          "formula": "<span className=\"text-indigo-600 font-bold\">RT₆₀ = 0.161 · V / A_total</span>\n<span className=\"text-indigo-600 font-bold\">A_total = Σ (S_i · α_i)</span>",
          "steps": [
            "V 為房間總體積 (m³)。",
            "A_total 為總吸音量 (m²-Sabine)。",
            "S_i 為各邊界表面積 (m²)，α_i 為材料在特定頻率 (通常為 500Hz) 之吸音係數 (0 ~ 1)。"
          ]
        },
        {
          "heading": "建築隔音與聲音透射損失 TL / <span className='text-rose-600 font-bold'>STC</span> rating",
          "body": "建築隔音主要阻止聲音穿透牆體或樓板。透射損失 (Transmission Loss, TL) 代表牆體減弱聲能的分貝數。單層牆體的隔音量遵循「<span className='text-rose-600 font-bold'>質量定律</span>」(Mass Law)：面密度 m (kg/m²) 或聲波頻率 f 增加一倍，隔音量約增加 6 dB。雙層分開構架隔音牆可突破<span className='text-rose-600 font-bold'>質量定律</span>限制。",
          "formula": "<span className=\"text-indigo-600 font-bold\">TL = 10 · log₁₀(1 / τ) (dB)</span>\n<span className=\"text-indigo-600 font-bold\">TL_MassLaw ≒ 20 · log₁₀(m · f) - 48 (dB)</span>"
        },
        {
          "heading": "聲學物理量與建築材料吸音/隔音參數對照表 (Acoustics Parameters)",
          "body": "建築常見聲學量度單位、吸音係數 α 與 <span className='text-rose-600 font-bold'>STC</span> 隔音等級對照。",
          "table": {
            "headers": [
              "聲學指標",
              "單位 / 符號",
              "典型數值範圍",
              "建築聲學意義與應用規範"
            ],
            "rows": [
              [
                "聲壓級 (Sound Level)",
                "dBA (A計權分貝)",
                "30 dBA ~ 100 dBA",
                "住宅夜間極限 ≤ 40 dBA; 辦公室 ≤ 50 dBA"
              ],
              [
                "吸音係數 (α)",
                "無因次 (0.0 ~ 1.0)",
                "鋼筋混凝土 0.02; 礦纖板 0.65",
                "1.0 代表完全吸音（無反射音）"
              ],
              [
                "降噪係數 (NRC)",
                "無因次",
                "0.05 ~ 0.95",
                "250, 500, 1000, 2000Hz 吸音係數平均值"
              ],
              [
                "殘響時間 (RT60)",
                "秒 (s)",
                "演講廳 0.8-1.1s; 音樂廳 1.8-2.2s",
                "決定空間之言語清晰度與音質餘韻"
              ],
              [
                "隔音等級 (<span className='text-rose-600 font-bold'>STC</span>)",
                "dB (分貝 rating)",
                "單磚牆 <span className='text-rose-600 font-bold'>STC</span> 45; 雙層石膏牆 <span className='text-rose-600 font-bold'>STC</span> 55",
                "隔間牆<span className='text-rose-600 font-bold'>STC</span> ≥ 50 為高等級住宅隔音"
              ]
            ]
          }
        },
        {
          "heading": "樓板衝擊音 (Impact Sound Insulation) 與浮動地板機制",
          "body": "樓板衝擊音源於腳步聲、物品墜落等直接撞擊結構引致的固體傳播聲 (Structure-borne Noise)。台灣建築法規規定分戶樓板連同鋪面衝擊音降低量需達 17 dB 以上 (或 L'n,w ≤ 58 dB)。浮動地板 (Floating Floor) 透過在結構樓板與水泥砂漿壓造型層之間鋪設高彈性防音墊 (如 EVA、橡膠防音墊)，阻斷振<span className='text-rose-600 font-bold'>動能</span>量傳遞。",
          "formula": "<span className=\"text-indigo-600 font-bold\">ΔL_w = L'n,w,bare - L'n,w,floating ≥ 17 dB</span>",
          "steps": [
            "**第一步（結構基底）**：RC 鋼筋混凝土樓板 (15 cm ~ 18 cm)。",
            "**第二步（隔音緩衝）**：全鋪設 8mm ~ 12mm 彈性隔音墊，並沿牆邊向上折起 5cm 形成防音杯底 (隔離側向傳聲)。",
            "**第三步（壓造型層）**：澆置 5cm 加勁水泥砂漿，上鋪木地板或地磚。"
          ]
        },
        {
          "heading": "戶外道路交通噪音距離衰減模型 (Noise Propagation & Distance Decay)",
          "body": "點聲源（如單一機械）與線聲源（如連續高速公路車流）的幾何擴散衰減特性不同。點聲源遵從球面積分，距離加倍衰減 6 dB；線聲源遵從圓柱面積分，距離加倍衰減 3 dB。建築退縮與臨路防音牆是都市抗噪的主要手段。",
          "formula": "<span className=\"text-indigo-600 font-bold\">L_p(r₂) = L_p(r₁) - 20 · log₁₀(r₂ / r₁) (點聲源)</span>\n<span className=\"text-indigo-600 font-bold\">L_p(r₂) = L_p(r₁) - 10 · log₁₀(r₂ / r₁) (無限長線聲源)</span>",
          "table": {
            "headers": [
              "聲源幾何類型",
              "波前幾何形狀",
              "距離加倍<span className='text-rose-600 font-bold'>聲壓級</span>衰減",
              "戶外聲場典型範例"
            ],
            "rows": [
              [
                "點聲源 (Point Source)",
                "球面波 (Spherical Wave)",
                "- 6.0 dB",
                "發電機、抽水馬達、冷卻水塔單機"
              ],
              [
                "線聲源 (Line Source)",
                "圓柱波 (Cylindrical Wave)",
                "- 3.0 dB",
                "高架道路車流、鐵路列車車流"
              ],
              [
                "面聲源 (Area Source)",
                "平面波 (Planar Wave)",
                "近場幾乎無衰減 (0 dB)",
                "大面積廠房外牆、大型冷卻水塔陣列面"
              ]
            ]
          }
        },
        {
          "heading": "聲波干涉、繞射與房間駐波共振 (Room Modes & Interference)",
          "body": "當聲波波長與房間尺寸相當（低頻音）時，反射波與入射波重疊會在平行牆面間形成駐波 (Standing Waves)，產生特定的房間簡正頻率 (Room Modes / Axials Modes)。這會導致室內某些位置低音異常過強（聲壓極大值），某些位置則幾乎聽不到低音（聲壓極小值）。",
          "formula": "<span className=\"text-indigo-600 font-bold\">f_mode = (v / 2) · √[ (n_x / L)² + (n_y / W)² + (n_z / H)² ]</span>",
          "steps": [
            "**第一步（頻率計算）**：對矩形房間求出一階軸向模態頻率 f = v / (2L)。",
            "**第二步（防範措施）**：避免房間長寬高呈簡單整數比 (如 1:1:1 或 1:2:4)。採用黃金比例 (如 1 : 1.14 : 1.39) 或設置低頻陷阱 (Bass Trap) 吸收低頻駐波能量。"
          ]
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "某道路邊施工現場有一台打樁機產生 85 dBA 噪音，同時旁邊有一台挖掘機產生 85 dBA 噪音。(1) 若兩台機器同時全速運作，臨街建築物接領處測得之總<span className='text-rose-600 font-bold'>聲壓級</span>為多少 dBA？(2) 若在 15°C 的空氣中（聲速 340 m/s），打樁機發出頻率 85 Hz 的低頻振動聲，其聲波波長 λ 為多少公尺？",
          "steps": [
            "兩相同分貝聲源相加公式：L_total = L + 10 log₁₀(2) = 85 + 3.01 = 88.01 dBA ≒ 88 dBA。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入波速公式 v = f · λ 求解波長：λ = v / f = 340 m/s / 85 Hz = 4.0 m。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "總<span className='text-rose-600 font-bold'>聲壓級</span>約 88 dBA，低頻聲波波長 λ = 4.0 m",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "某一厚度的單層防音玻璃牆對 500 Hz 聲波之聲波透射係數 τ = 0.001 (即只有 0.1% 的聲能穿透)。(1) 求解該玻璃牆對 500 Hz 聲波之透射損失 TL (dB)；(2) 若頻率增加一倍至 1000 Hz，依據<span className='text-rose-600 font-bold'>質量定律</span>，其透射損失 TL 理論上會增加多少 dB？",
          "steps": [
            "代入透射損失公式 TL = 10 · log₁₀(1 / τ)： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "TL = 10 × log₁₀(1 / 0.001) = 10 × log₁₀(1000) = 10 × 3 = 30 dB。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "依據<span className='text-rose-600 font-bold'>質量定律</span>，當頻率 f 增加一倍時，隔音量 TL 增加 20 · log₁₀(2) ≈ 6.02 dB ≈ 6 dB。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 透射損失 TL = 30 dB；(2) 頻率加倍後 TL 增加約 6 dB (達到 36 dB)",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一中學演講廳長 20 m、寬 10 m、高 5 m (體積 V = 1000 m³)。經量測室內總吸音面積 A_total = 200 m²-Sabine。(1) 該演講廳目前的<span className='text-rose-600 font-bold'>殘響時間</span> RT60 為多少秒？(2) 若理想演講廳之 RT60 應為 0.8 秒，則需額外增加多少 m²-Sabine 的總吸音量？",
          "steps": [
            "利用<span className='text-indigo-600 font-bold'>賽賓公式</span> RT60 = 0.161 · V / A_total 計算當前<span className='text-rose-600 font-bold'>殘響時間</span>： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "RT60 = 0.161 × 1000 / 200 = 161 / 200 = 0.805 秒。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算目標 RT60 = 0.8 秒時所需的總吸音量 A_target： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "0.8 = 0.161 × 1000 / A_target => A_target = 161 / 0.8 = 201.25 m²-Sabine。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "需額外增加之吸音量 ΔA = 201.25 - 200 = 1.25 m²-Sabine。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "當前 RT60 ≒ 0.805 秒，需額外增加 1.25 m²-Sabine 之吸音量",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "離一條繁忙高架橋公路（視為無限長線聲源）距離 r₁ = 10 公尺處的住宅大樓低樓層，測得車流交通噪音<span className='text-rose-600 font-bold'>聲壓級</span> L_p1 = 75 dBA。(1) 若新建大樓退縮至距離高架橋 r₂ = 40 公尺處，其高樓層測得的噪音<span className='text-rose-600 font-bold'>聲壓級</span> L_p2 為多少 dBA？(2) 若該高架橋附近有一台單一大型冷卻水塔（點聲源），在 10 公尺處亦為 75 dBA，則退縮至 40 公尺處時，水塔噪音降為多少 dBA？",
          "steps": [
            "對線聲源（車流），適用圓柱波擴散公式 L_p(r₂) = L_p(r₁) - 10 · log₁₀(r₂ / r₁)： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "L_p2 = 75 - 10 × log₁₀(40 / 10) = 75 - 10 × log₁₀(4) = 75 - 10 × 0.602 = 75 - 6.02 ≈ 68.98 dBA。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "對點聲源（水塔），適用球面波擴散公式 L_p(r₂) = L_p(r₁) - 20 · log₁₀(r₂ / r₁)： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "L_p2_point = 75 - 20 × log₁₀(4) = 75 - 20 × 0.602 = 75 - 12.04 ≈ 62.96 dBA。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 線聲源車流噪音降至約 69.0 dBA；(2) 點聲源水塔噪音降至約 63.0 dBA",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一輕質隔間牆之聲波透射係數 τ = 0.0001（即僅有萬分之一的聲能穿透牆體）。(1) 求該隔間牆之聲透射損失 TL 值為多少 dB？(2) 若相鄰會議室發出 85 dB 之談話聲，穿透該牆體後進入安靜辦公室之<span className='text-rose-600 font-bold'>聲壓級</span>為多少 dB？",
          "steps": [
            "代入透射損失公式 TL = 10 · log₁₀(1 / τ)： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "TL = 10 × log₁₀(1 / 0.0001) = 10 × log₁₀(10000) = 10 × 4 = 40 dB。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "穿透後之<span className='text-rose-600 font-bold'>聲壓級</span> L_passed = L_source - TL = 85 dB - 40 dB = 45 dB。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "透射損失 TL = 40 dB，穿透後<span className='text-rose-600 font-bold'>聲壓級</span>為 45 dB",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一琴房空間長 L = 5 m、寬 W = 4 m、高 H = 3 m (空氣聲速 v = 340 m/s)。(1) 試計算長度方向 (L=5m) 的一階軸向駐波簡正頻率 f₁ 為多少 Hz？(2) 若琴房內演奏鋼琴中央 A 音 (440 Hz)，其聲波在 15°C 空氣中的波長 λ 為多少公分？",
          "steps": [
            "一階軸向駐波頻率公式 f₁ = v / (2 · L) = 340 m/s / (2 × 5 m) = 340 / 10 = 34 Hz。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算鋼琴 440 Hz 的聲波波長 λ = v / f = 340 m/s / 440 Hz ≈ 0.7727 m = 77.27 cm。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 長度方向一階駐波頻率 f₁ = 34 Hz；(2) 440 Hz 聲波波長 λ ≈ 77.27 cm",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "某道路邊施工現場有一台打樁機產生 85 dBA 噪音，同時旁邊有一台挖掘機產生 85 dBA 噪音。(1) 若兩台機器同時全速運作，臨街建築物接領處測得之總<span className='text-rose-600 font-bold'>聲壓級</span>為多少 dBA？(2) 若在 15°C 的空氣中（聲速 340 m/s），打樁機發出頻率 85 Hz 的低頻振動聲，其聲波波長 λ 為多少公尺？",
        "steps": [
          "兩相同分貝聲源相加公式：L_total = L + 10 log₁₀(2) = 85 + 3.01 = 88.01 dBA ≒ 88 dBA。",
          "代入波速公式 v = f · λ 求解波長：λ = v / f = 340 m/s / 85 Hz = 4.0 m。"
        ],
        "answer": "總<span className='text-rose-600 font-bold'>聲壓級</span>約 88 dBA，低頻聲波波長 λ = 4.0 m"
      },
      "step0Prerequisites": [
        "波動基本關係式 v = f · λ",
        "聲音強度與分貝標度 (dB = 10 log(I/I₀))",
        "室內回音時間 Sabine 公式 (RT60 = 0.161 V / A)"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "分貝數值可以像普通數值一樣直接相加（如 60dB + 60dB = 120dB）。",
          "correctThinking": "分貝是對數標度，兩同強度聲源疊加只增加 3 dB (60dB + 60dB ≈ 63dB)。",
          "trapDescription": "分貝對數疊加是建築聲學必考計算陷阱。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "室內聲場直達聲與混響聲雙軌模型",
          "explanation": "直達聲依距離平方反比衰減；混響聲由吸音量 A = Σ (面積 × 吸音率) 決定 RT60。"
        }
      ]
    },
    {
      slug: 'optics',
      "title": "5. ✨ 光學與建築照明設計 (Optics & Architectural Lighting)",
      "desc": "光的折射與反射、照度距離平方反比定律、利用係數法燈具規劃、採光係數 DF 與防眩光 UGR。",
      "status": "done",
      "gradeLevel": 10,
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】建築照明照度計算：一正上方點光源發光強度為 I = 1600 燭光 (cd)，垂直照射下方距離 2 公尺處之書桌檯面。求該檯面上的「點照度 E」為多少勒克斯 (Lux)？",
          "difficulty": "基礎",
          "steps": [
            "**步驟 1**：利用平方反比定律照度公式。E = I / r²（當垂直照射 θ = 0° 時）。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 2**：代入強度 I = 1600 cd 與距離 r = 2 m。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 3**：計算照度。E = 1600 / (2)² = 1600 / 4 = 400 Lux。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "檯面點照度 E 為 400 Lux。",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "physics-context.webp",
        "physics-mechanism.webp",
        "physics-comparison.webp",
        "physics-step.webp",
        "physics-real-world.webp",
        "physics-concept-diagram.webp",
        "physics-formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "光的反射、折射與全反射 (Reflection, Refraction & Snell's Law)",
          "body": "光在不同介質界面會發生反射與折射。折射遵循折射定律 (Snell's Law: n₁ sinθ₁ = n₂ sinθ₂)。當光由光密介質（如玻璃 n=1.5）射向光疏介質（如空氣 n=1.0）且入射角大於臨界角 θc 時，會發生全反射。建築導光管系統 (Tubular Daylighting Device, TDD) 即利用光纖全反射將屋頂陽光引入無窗地下室。",
          "formula": "<span className=\"text-indigo-600 font-bold\">n₁ · sin(θ₁) = n₂ · sin(θ₂)</span>\n<span className=\"text-indigo-600 font-bold\">sin(θ_c) = n₂ / n₁ (當 n₁ > n₂)</span>"
        },
        {
          "heading": "核心光度學物理量：光通量、發光強度、照度與亮度 (Photometric Quantities)",
          "body": "照明設計四要素：光通量 Φ (Lumen, lm，光源發出的總光量)；發光強度 I (Candela, cd，特定方向之光通量密度)；照度 E (Lux, lx，受照面單位面積接受的光通量 E = Φ / A)；亮度 L (Nit 或 cd/m²，人眼感受到的表面發光或反射強度)。",
          "formula": "<span className=\"text-indigo-600 font-bold\">E = Φ / A</span>\n<span className=\"text-indigo-600 font-bold\">E = (I / r²) · cos(θ) (逐點照度與距離平方反比定律)</span>",
          "steps": [
            "點光源直射點照度 (θ = 0°)：E = I / r²。照度與距離 r 之平方成反比。",
            "傾斜受照面照度 (入射角 θ)：受照有效面積增大，照度隨 cosθ 遞減 (E = (I / r²) · cosθ)。"
          ]
        },
        {
          "heading": "室內平均照度計算：利用係數法 (Zonal Cavity Lumen Method)",
          "body": "建築室內整體照明設計採用利用係數法計算均勻照度。公式整合了燈具總光通量、房間利用係數 (Utilization Factor, UF，考慮牆面反射率與空間幾何比例) 以及維護係數 (Maintenance Factor, MF，考慮燈具老化與粉塵光衰)。",
          "formula": "<span className=\"text-indigo-600 font-bold\">E_avg = (N · n · Φ · UF · MF) / A</span>\n<span className=\"text-indigo-600 font-bold\">N = (E_avg · A) / (n · Φ · UF · MF)</span>",
          "steps": [
            "N：燈具總組數；n：每組燈具內之光源數量。",
            "Φ：單一光源之初始額定光通量 (lm)。",
            "UF (利用係數)：通常介於 0.4 ~ 0.7 之間；MF (維護係數)：LED 乾淨空間通常取 0.7 ~ 0.8。"
          ]
        },
        {
          "heading": "自然採光與採光係數 (Daylight Factor, DF)",
          "body": "採光係數 (DF) 指全陰天條件下，室內某一點的照度 E_in 與室外無遮蔽水平面總全天空照度 E_out 之百分比。台灣綠建築標章規定的居室採光標準，要求主要居住空間採光係數 DF ≥ 2%。Low-E 複層玻璃能在維持高可見光透射率 (VLT > 60%) 的同時，阻絕太陽<span className='text-rose-600 font-bold'>熱輻射</span> (SHGC < 0.4)。",
          "formula": "<span className=\"text-indigo-600 font-bold\">DF = (E_in / E_out) × 100%</span>"
        },
        {
          "heading": "光學與照明單位對照及 CNS 照度標準規範表 (Lighting Standards Table)",
          "body": "光度學單位換算與台灣國家標準 (CNS 12112) 各類建築空間建議照度。",
          "table": {
            "headers": [
              "空間類型 / 作業性質",
              "CNS 建議照度 (Lux)",
              "照明品質要點",
              "光學量度與國際單位"
            ],
            "rows": [
              [
                "精密繪圖 / 建築設計室",
                "750 ~ 1000 lx",
                "高顯色性 (CRI ≥ 80), 防眩光",
                "光通量 (Lumen, lm): 1 lm = 1 cd·sr"
              ],
              [
                "一般辦公室 / 教室桌面",
                "500 ~ 750 lx",
                "均勻度 ≥ 0.7, 避免螢幕反射",
                "照度 (Lux, lx): 1 lx = 1 lm/m²"
              ],
              [
                "會議室 / 住宅起居室",
                "200 ~ 300 lx",
                "可調光色溫 (3000K-5000K)",
                "發光強度 (Candela, cd): 1 cd"
              ],
              [
                "樓梯間 / 走廊通道",
                "100 ~ 150 lx",
                "安全指引與緊急照明",
                "輝度/亮度 (Nit): 1 nit = 1 cd/m²"
              ],
              [
                "停車場 / 倉庫儲藏室",
                "50 ~ 100 lx",
                "感應式節能控制",
                "發光效率 (Luminous Efficacy): lm/W"
              ]
            ]
          }
        },
        {
          "heading": "統一眩光指數 (UGR) 與人眼舒適度防眩設計",
          "body": "眩光 (Glare) 是指視野內過高之亮度或過大之亮度對比，引致眼睛不適或視力低下。統一眩光指數 (Unified Glare Rating, UGR) 為評估室內不舒適眩光的指標。國家標準規定辦公室與教室 UGR 必須 ≤ 19。",
          "formula": "<span className=\"text-indigo-600 font-bold\">UGR = 8 · log₁₀ [ (0.25 / L_b) · Σ (L² · Ω / p²) ]</span>",
          "steps": [
            "防眩技術一（燈具遮光角）：燈具遮光角 α 應 ≥ 30°，防止直接觀察到高亮度 LED 晶粒。",
            "防眩技術二（微晶格擴散板）：採用微結構擴散板 (Micro-prismatic Diffuser) 均勻打散光線。",
            "防眩技術三（間接照明）：利用天花板反射作間接照明 (Indirect Lighting)，提供極致柔和光場。"
          ]
        },
        {
          "heading": "演色性 (CRI / Ra) 與相關色溫 (CCT) 人因照明",
          "body": "光源之演色性指數 (CRI, Ra) 代表該光源照射下物體呈現真實色彩的能力 (太陽光 Ra = 100)。相關色溫 (CCT, K) 則代表光色的冷暖。人因照明 (Human Centric Lighting, HCL) 根據日夜節律調整色溫：白天高色溫 (5000K~6500K 藍光成分高) 抑制褪黑激素提升專注；夜間低色溫 (2700K~3000K 暖光) 促進放鬆睡眠。",
          "table": {
            "headers": [
              "色溫範圍 (CCT)",
              "光色感受",
              "演色性 (Ra) 要求",
              "最佳建築與空間應用"
            ],
            "rows": [
              [
                "2700K - 3000K",
                "暖白光 (Warm White)",
                "Ra ≥ 90 (高演色性)",
                "高級餐廳、住宅臥室、精品酒店大廳"
              ],
              [
                "3500K - 4000K",
                "自然白光 (Neutral White)",
                "Ra ≥ 80",
                "住宅客廳、圖書館閱覽區、醫院病房"
              ],
              [
                "5000K - 6500K",
                "日光色 / 冷白光 (Cool Daylight)",
                "Ra ≥ 80",
                "建築設計繪圖室、精密電子廠潔淨室、辦公室"
              ]
            ]
          }
        },
        {
          "heading": "照明功率密度 (LPD) 與晝光感應節能控制",
          "body": "照明功率密度 (Lighting Power Density, LPD, W/m²) 為綠建築指標 (EEWH / LEED) 的強制檢核項目。結合動態 DALI / 0-10V 調光驅動器與晝光感應器 (Daylight Sensor)，當靠窗區自然光充足時自動降低 LED 功率，節能可達 30%~50%。",
          "formula": "<span className=\"text-indigo-600 font-bold\">LPD = P_total_lighting (W) / A_floor (m²) ≤ LPD_baseline (如 9.0 W/m²)</span>"
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "一路燈高 4 公尺，發光強度 I = 1600 cd (假設為等向點光源)。(1) 正下方地面 A 點處的直射照度 E_A 為多少 Lux？(2) 離路燈正下方水平距離 3 公尺處的 B 點（距離路燈斜距 r = 5 公尺），其地面照度 E_B 為多少 Lux？",
          "steps": [
            "正下方 A 點距離 r = 4 m，入射角 θ = 0° (cos 0° = 1)。代入距離平方反比公式：E_A = I / r² = 1600 / 4² = 1600 / 16 = 100 lx。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "斜向 B 點距離 r = √(4² + 3²) = 5 m。入射角之餘弦值 cosθ = 鄰邊/斜邊 = 4 / 5 = 0.8。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入斜向照度公式：E_B = (I / r²) · cosθ = (1600 / 5²) × 0.8 = (1600 / 25) × 0.8 = 64 × 0.8 = 51.2 lx。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "正下方 A 點照度 E_A = 100 lx，斜向 B 點照度 E_B = 51.2 lx",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "某陰天午後，室外無遮蔽水平面之全天空照度 E_out 測得為 15,000 Lux。(1) 某辦公室靠窗工作桌測得室內照度 E_in = 450 Lux，求該處之採光係數 DF% 為多少？是否符合綠建築 DF ≥ 2% 之規範？(2) 若深處離窗 6 公尺處之桌面 DF 降至 0.8%，求該深處桌面之室內照度為多少 Lux？",
          "steps": [
            "代入採光係數公式 DF = (E_in / E_out) × 100%： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "DF = (450 / 15000) × 100% = 0.03 × 100% = 3.0%。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "因為 3.0% ≥ 2.0%，故符合綠建築標準規範。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "求深處桌面照度：E_in_deep = E_out × DF_deep = 15,000 lx × 0.8% = 15,000 × 0.008 = 120 lx。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "靠窗採光係數 DF = 3.0% (符合綠建築規範 ≥ 2%)，室內深處照度為 120 lx",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一建築設計事務所繪圖室長 12 m、寬 10 m (面積 A = 120 m²)，要求平均照度 E_avg = 750 Lux。預計採用平板 LED 燈具，每組燈具額定光通量 Φ = 4000 lm。若該空間之利用係數 UF = 0.60，維護係數 MF = 0.80。(1) 計算此繪圖室共需安裝多少組 LED 燈具？(2) 若每組燈具功率為 36 W，則該繪圖室之單位面積照明功率密度 (LPD) 為多少 W/m²？",
          "steps": [
            "利用利用係數法公式 N = (E_avg · A) / (Φ · UF · MF)： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "N = (750 lx × 120 m²) / (4000 lm × 0.60 × 0.80) = 90,000 / 1,920 = 46.875 組。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "無條件無損無進位取整數：需安裝 48 組燈具（採 6×8 陣列排列）。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算總照明功率 P_total = 48 組 × 36 W/組 = 1728 W。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算單位面積功率密度 LPD = P_total / A = 1728 W / 120 m² = 14.4 W/m²。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "需安裝 48 組 LED 燈具，照明功率密度 LPD = 14.4 W/m²",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一光纖導光管 (Tubular Daylighting Device) 核心玻璃材質折射率 n₁ = 1.50，外包覆透明保護介質折射率 n₂ = 1.00 (空氣)。(1) 求解光線在光纖內部發生全反射的臨界角 θ_c 為多少度？ (sin 41.81° ≈ 0.6667 = 1/1.5) (2) 若光線以高於臨界角的角度入射導光管內壁，光能傳播損耗狀況為何？",
          "steps": [
            "代入臨界角公式 sin(θ_c) = n₂ / n₁ = 1.00 / 1.50 = 2/3 ≈ 0.6667。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "求解臨界角 θ_c = arcsin(0.6667) ≈ 41.81°。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "當入射角 θ > 41.81° 時，光線發生 100% 全反射 (Total Internal Reflection)，無任何折射光漏出管外，可高效將陽光引領至深層室內。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 臨界角 θ_c ≈ 41.81°；(2) 高於臨界角時發生 100% 全反射，無光能滲漏損耗",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一廣場景觀投射燈安裝於高 H = 6 m 的燈柱頂端，發光強度 I = 10,000 cd。若投射燈光束中心向斜下方投射，目標點 C 離燈柱基座水平距離 d = 8 m (斜距 r = 10 m)。(1) 計算目標點 C 地面上產生的斜向照度 E_C 為多少 Lux？(2) 若欲使 C 點照度提升至原本的 2 倍，在不改變燈具發光強度的情況下，燈柱高度應調降或斜距應縮短為多少 m？",
          "steps": [
            "計算斜距 r = √(6² + 8²) = 10 m。入射角餘弦值 cosθ = H / r = 6 / 10 = 0.6。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入照度公式 E_C = (I / r²) · cosθ = (10000 / 10²) × 0.6 = 100 × 0.6 = 60 lx。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "若照度提升至 2 倍 (E_new = 120 lx)，保持角度比值不變時，根據距離平方反比 (E ∝ 1/r²)，距離 r_new = r / √2 = 10 / 1.414 ≈ 7.07 m。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) C 點斜向照度 E_C = 60 lx；(2) 斜距需縮短至約 7.07 m",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "某辦公室總面積 200 m²，基準照明功率密度 LPD = 10 W/m² (總開燈功率 2000 W)。大樓導入 DALI 晝光感應控制系統：白天靠窗 40% 區域之燈具完全關閉，其餘 60% 區域之燈具調光至 50% 功率輸出。若每日照明運轉時間為 10 小時，試計算：(1) 未裝設自動控制前每日照明耗電量 (kWh)；(2) 導入晝光調光控制後每日耗電量 (kWh) 及節能比率 (%)。",
          "steps": [
            "計算基準每日耗電量 E_base = 2.0 kW × 10 h = 20 kWh (度)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算控制後實時總功率：靠窗 40% 區域 (800W) 功率為 0W；其餘 60% 區域 (1200W) 功率為 1200W × 50% = 600W。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "控制後實時總功率 P_new = 0 + 600W = 600W = 0.6 kW。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "控制後每日耗電量 E_new = 0.6 kW × 10 h = 6.0 kWh。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算每日節能比率 = ((20 - 6.0) / 20) × 100% = (14 / 20) × 100% = 70.0%。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 未控制每日耗電 20 kWh；(2) 控制後耗電 6.0 kWh，大幅節電 70.0%",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "一路燈高 4 公尺，發光強度 I = 1600 cd (假設為等向點光源)。(1) 正下方地面 A 點處的直射照度 E_A 為多少 Lux？(2) 離路燈正下方水平距離 3 公尺處的 B 點（距離路燈斜距 r = 5 公尺），其地面照度 E_B 為多少 Lux？",
        "steps": [
          "正下方 A 點距離 r = 4 m，入射角 θ = 0° (cos 0° = 1)。代入距離平方反比公式：E_A = I / r² = 1600 / 4² = 1600 / 16 = 100 lx。",
          "斜向 B 點距離 r = √(4² + 3²) = 5 m。入射角之餘弦值 cosθ = 鄰邊/斜邊 = 4 / 5 = 0.8。",
          "代入斜向照度公式：E_B = (I / r²) · cosθ = (1600 / 5²) × 0.8 = (1600 / 25) × 0.8 = 64 × 0.8 = 51.2 lx。"
        ],
        "answer": "正下方 A 點照度 E_A = 100 lx，斜向 B 點照度 E_B = 51.2 lx"
      },
      "step0Prerequisites": [
        "光的反射定律與折射定律 (Snell's Law: n₁ sin θ₁ = n₂ sin θ₂)",
        "照度 (Illuminance, Lux) 與光通量 (Lumen) 關係",
        "採光係數 (Daylight Factor) 與人工照明眩光 UGR"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "光從空氣進入玻璃時，頻率與波長都改變。",
          "correctThinking": "介質改變時光速變慢、波長變短，但頻率 f 由光源決定保持恆定。",
          "trapDescription": "波動跨介質傳播之頻率守恆。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "點光源幾何反平方照度模型",
          "explanation": "法向照度 E = I / d²，傾斜時乘以 cos θ，迅速計算作業面 Lux 數值。"
        }
      ]
    },
    {
      slug: 'electricity',
      "title": "6. 🔍 電學基礎與建築配電系統 (Building Electrical & Circuits)",
      "desc": "歐姆定律、電功率與焦耳熱、交流電功率因數 cos φ、無熔絲開關 NFB、三相配電與接地保護。",
      "status": "done",
      "gradeLevel": 10,
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "【步驟化例題】建築配電負載與安全電流計算：某一建築工務所安裝一台額定功率 P = 2200 瓦特 (W) 之冷氣機，供電電壓 V = 110 伏特 (V)。求該冷氣運轉時之「工作電流 I」及「內部等效電阻 R」？",
          "difficulty": "基礎",
          "steps": [
            "**步驟 1**：利用電功率公式 P = V · I。求解電流 I = P / V = 2200 W / 110 V = 20 安培 (A)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 2**：利用歐姆定律 V = I · R。求解電阻 R = V / I = 110 V / 20 A = 5.5 歐姆 (Ω)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "**步驟 3**：確認結果。電流 20 A，電阻 5.5 Ω。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "工作電流 I = 20 安培 (A)，等效電阻 R = 5.5 歐姆 (Ω)。",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "illustrations": [
        "physics-context.webp",
        "physics-mechanism.webp",
        "physics-comparison.webp",
        "physics-step.webp",
        "physics-real-world.webp",
        "physics-concept-diagram.webp",
        "physics-formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "歐姆定律與串並聯電路分析 (Ohm's Law & Series-Parallel Circuits)",
          "body": "歐姆定律 (V = I · R) 為電路學核心。建築室內配電一律採用並聯電路 (Parallel Circuit)，確保各電器均承受額定標準電壓 (如 110V 或 220V)，且單一電器開關或故障不致影響其他迴路運作。",
          "formula": "<span className=\"text-indigo-600 font-bold\">V = I · R</span>\n<span className=\"text-indigo-600 font-bold\">R_series = R₁ + R₂ + ... + R_n</span>\n<span className=\"text-indigo-600 font-bold\">1 / R_parallel = 1/R₁ + 1/R₂ + ... + 1/R_n</span>",
          "steps": [
            "並聯電路特點：各分路電壓相等 (V₁ = V₂ = V_total)；總電流等於各分路電流之和 (I_total = Σ I_i)。",
            "並聯總等效電阻必然小於任一分路之電阻 (R_eq = (R₁·R₂) / (R₁ + R₂))。"
          ]
        },
        {
          "heading": "電功率與纜線焦耳熱損耗 (Electric Power & Joule Heating)",
          "body": "電器消耗電能的速率為電功率 (P = V · I = I² R)。電流通過具電阻的導線時會產生焦耳熱 (Q = I² R t)。若迴路電流超過電線載流量 (Ampacity)，導線絕緣層將因高溫熔毀引發走火。建築配電設計必須依照《用戶用電設備裝置規則》計算導線截面積與熱壓降。",
          "formula": "<span className=\"text-indigo-600 font-bold\">P = V · I = I² · R = V² / R</span>\n<span className=\"text-indigo-600 font-bold\">P_loss = I² · R_wire</span>"
        },
        {
          "heading": "交流電 (AC)、虛功率與功率因數 cos φ (AC Power & Power Factor)",
          "body": "建築電力系統為單相或三相交流電 (AC)。包含視在功率 S (kVA)、實功率 P (kW) 與虛功率 Q (kVAR)。功率因數 (Power Factor, cos φ = P / S) 代表電能有效利用的比例。電感性負載（如冷氣壓縮機、水泵馬達）會降低功率因數，需在配電箱加裝電容器 (Capacitor) 進行功率因數改善至 95% 以上，以避免台電罰款。",
          "formula": "<span className=\"text-indigo-600 font-bold\">S = V · I (單相視在功率, VA)</span>\n<span className=\"text-indigo-600 font-bold\">P = V · I · cos(φ) (單相實功率, W)</span>\n<span className=\"text-indigo-600 font-bold\">P_3phase = √3 · V_line · I_line · cos(φ) (三相實功率, W)</span>"
        },
        {
          "heading": "建築用電安全、NFB 無熔絲開關與接地保護 (Electrical Safety & Grounding)",
          "body": "建築幹線與分路配電箱設有無熔絲開關 (No-Fuse Breaker, NFB)，當迴路發生過載或短路時自動跳脫 (Trip) 斷電。浴室、陽台等潮濕場所依法必須加裝漏電斷路器 (ELCB)，動作敏感電流通常為 30 mA / 0.1 秒內。第 3 種接地系統要求接地電阻 R ≤ 50 Ω，防止設備漏電造成人體觸電。",
          "formula": "<span className=\"text-indigo-600 font-bold\">I_trip ≥ 1.25 · I_continuous (NFB 額定容量選擇原則)</span>"
        },
        {
          "heading": "電學單位與建築纜線規格對照表 (Electrical Parameters & Gauge)",
          "body": "電學常用單位、導線截面積與安全載流量規範表。",
          "table": {
            "headers": [
              "電學物理量 / 設備",
              "國際單位 (SI)",
              "建築常用規格 / 符號",
              "物理定義與工程安全規範"
            ],
            "rows": [
              [
                "電壓 (Voltage, V)",
                "伏特 (Volt, V)",
                "110V, 220V, 380V (AC)",
                "電位差；台灣家用單相 110V/220V"
              ],
              [
                "電流 (Current, I)",
                "安培 (Ampere, A)",
                "15A, 20A, 30A, 50A",
                "電荷流速；1 A = 1 C/s"
              ],
              [
                "電阻 (Resistance, R)",
                "歐姆 (Ohm, Ω)",
                "Ω, mΩ/m",
                "導電阻礙；R = ρ · L / A"
              ],
              [
                "視在功率 (S)",
                "伏安 (VA / kVA)",
                "kVA (變壓器容量)",
                "S = √(P² + Q²)"
              ],
              [
                "銅導線截面積 (AWG/mm²)",
                "平方公釐 (mm²)",
                "2.0 mm (實心), 3.5/5.5 mm²",
                "2.0mm 實心線安全載流量 ≒ 19A (15A NFB)"
              ]
            ]
          }
        },
        {
          "heading": "三相四線制配電系統 (3-Phase 4-Wire System)",
          "body": "商業與高層建築主幹線普遍採用三相四線制 380V / 220V 配電。三條火線 (L1, L2, L3) 之間相位角相差 120°。線電壓 V_line 為任意兩火線間電壓 (380V)；相電壓 V_phase 為任一火線對中性線 N 之電壓 (220V)。關係為 V_line = √3 · V_phase (380 ≈ 1.732 × 220)。",
          "formula": "<span className=\"text-indigo-600 font-bold\">V_line = √3 · V_phase</span>\n<span className=\"text-indigo-600 font-bold\">P_total_3phase = √3 · V_line · I_line · cos(φ)</span>",
          "steps": [
            "優勢一（動力與單相兼顧）：380V 用於大型冰水主機、電梯三相馬達；220V/110V 用於一般照明與插座。",
            "優勢二（節省銅材線徑）：高電壓傳輸能大幅降低輸電線路電流 I，進而減少導線截面積與線路發熱熱壓降。"
          ]
        },
        {
          "heading": "變壓器原理與配電變壓器效率 (Transformer & Power Distribution)",
          "body": "變壓器利用法拉第電磁感應定律 (Faraday's Law) 將高壓電降壓至建築使用電壓。變壓器一、二次側電壓比與線圈匝數成正比，電流比與匝數成反比。變壓器鐵心損耗 (鐵損) 與銅線電阻發熱 (銅損) 決定其總效率 (通常達 97%~99%)。",
          "formula": "<span className=\"text-indigo-600 font-bold\">V₁ / V₂ = N₁ / N₂ = I₂ / I₁</span>\n<span className=\"text-indigo-600 font-bold\">P_in = P_out + P_iron + P_copper</span>",
          "steps": [
            "**第一步（高壓進戶）**：台電 22.8 kV 高壓電力引入大樓配電室。",
            "**第二步（乾式變壓器）**：變壓器將 22.8 kV 降壓為 380V/220V 三相四線系統。"
          ]
        },
        {
          "heading": "不斷電系統 (UPS) 與緊急備用發電機容量規劃",
          "body": "建築消防設備（排煙風機、消防水泵、緊急電梯）與數據中心伺服器，依法必須配置緊急柴油發電機組與不斷電系統 (UPS)。UPS 提供毫秒級 (ms) 電源切換，備用發電機則在 10 秒內起動接管總負載。",
          "formula": "<span className=\"text-indigo-600 font-bold\">S_generator (kVA) = (Σ P_load / η) / cos(φ) · K_safety (K_safety ≒ 1.25)</span>",
          "table": {
            "headers": [
              "電力設備種類",
              "切換響應時間",
              "電力來源",
              "主要保護對象"
            ],
            "rows": [
              [
                "在線式 UPS (Online UPS)",
                "0 ms (零中斷)",
                "鋰電池組 / 蓄電池逆變器",
                "數據中心伺服器、醫療手術室設備"
              ],
              [
                "緊急柴油發電機組",
                "5 - 10 秒自動起動",
                "柴油發電機",
                "消防水泵、緊急電梯、排煙風機、避難照明"
              ],
              [
                "ATS 自動切換開關",
                "< 1 秒",
                "市電 / 發電機雙迴路切換",
                "配電箱幹線電源切換"
              ]
            ]
          }
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "某一單相 110V 家用廚房專用分路，同時啟動一台 1100W 的電熱水瓶及一台 880W 的微波爐。(1) 流經該迴路幹線的總電流 I_total 為多少安培？(2) 該分路若配置額定容量 20A 的 NFB 無熔絲開關，是否會發生過載跳脫？",
          "steps": [
            "計算電熱水瓶電流 I1 = P1 / V = 1100 W / 110 V = 10 A。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算微波爐電流 I2 = P2 / V = 880 W / 110 V = 8 A。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "兩電器並聯，總電流 I_total = I1 + I2 = 10 + 8 = 18 A。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "比對 NFB 額定容量：因為 18 A < 20 A，所以電流未超過 20A 額定值，NFB 不會跳脫，運作安全。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "總電流 I_total = 18 A，未超過 20A 額定值，不會跳脫",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "基礎",
          "question": "一單相降壓變壓器一次側線圈匝數 N₁ = 2200 匝，輸入電壓 V₁ = 2200V。若二次側輸出電壓 V₂ 需為 110V。(1) 計算二次側線圈匝數 N₂ 為多少匝？(2) 若二次側連接 11 kW 負載 (電流 I₂ = 100A)，在不計損耗下一次側電流 I₁ 為多少安培？",
          "steps": [
            "代入變壓比公式 V₁ / V₂ = N₁ / N₂： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "2200 / 110 = 2200 / N₂ => N₂ = 110 匝。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入電流比公式 V₁ · I₁ = V₂ · I₂ (或 N₁ · I₁ = N₂ · I₂)： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "2200V × I₁ = 110V × 100A => 2200 I₁ = 11000 => I₁ = 5 A。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 二次側匝數 N₂ = 110 匝；(2) 一次側電流 I₁ = 5 A",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一施工用臨時供電線路長度 L = 100 公尺，採用雙芯銅線 (往返總長度 200 公尺，導線總電阻 R_wire = 0.5 Ω)。當連接一台 220V、消耗電流 I = 20A 的抽水馬達時。(1) 導線上的電壓降 ΔV 及馬達端實際獲得的電壓 V_motor 為多少？(2) 導線上因焦耳熱浪費的電功率 P_loss 為多少瓦特 (W)？",
          "steps": [
            "計算導線總電壓降 ΔV = I × R_wire = 20 A × 0.5 Ω = 10 V。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "馬達端實際電壓 V_motor = 220 V - 10 V = 210 V (壓降率 = 10/220 = 4.55%)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "計算導線焦耳熱損耗功率 P_loss = I² × R_wire = (20)² × 0.5 = 400 × 0.5 = 200 W。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "導線壓降 ΔV = 10 V (馬達端 210V)，線路發熱耗損 P_loss = 200 W",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "進階",
          "question": "一商業大樓裝設一具三相 380V、額定功率 P = 30 kW 的空調水冷冰水主機，當前功率因數 cos φ = 0.75。(1) 主機在未改善功率因數前的全載線電流 I_line 為多少安培？(2) 若在主機端加裝進相電容器將功率因數提高至 cos φ' = 0.95，改善後的線電流降為多少安培？(√3 ≒ 1.732)",
          "steps": [
            "利用三相功率公式 P = √3 · V · I · cos(φ) 求解改善前線電流 I1： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "30,000 W = 1.732 × 380 V × I1 × 0.75 => 30,000 = 493.62 × I1 => I1 ≒ 60.77 A。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "求解功率因數提高至 0.95 後的線電流 I2： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "30,000 W = 1.732 × 380 V × I2 × 0.95 => 30,000 = 625.25 × I2 => I2 ≒ 47.98 A。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "線電流減少量 ΔI = 60.77 - 47.98 = 12.79 A (降低約 21%，有效降低變壓器負擔與線路損耗)。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "改善前電流 I1 ≒ 60.77 A，改善後電流 I2 ≒ 47.98 A (電流降低約 12.79 A)",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一資訊中心機房負載功率 P = 20 kW，配置 48V DC 電池組的在線式 UPS。若要求停電時 UPS 必須依靠電池組持續供電維持 2 小時。假設 UPS 逆變器轉換效率為 90%。(1) 電池組需輸出的總能量為多少 kWh？ (2) 電池組所需最小容量為多少安培小時 (Ah)？",
          "steps": [
            "計算負載 2 小時總消耗能量 E_load = 20 kW × 2 h = 40 kWh。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "考量逆變器效率 90%，電池組需儲存的能量 E_battery = 40 kWh / 0.9 = 44.44 kWh = 44,444 Wh。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "利用電池組額定電壓 48V 求解最小電量容量 (Ah)： ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "Capacity (Ah) = E_battery (Wh) / Voltage (V) = 44,444 Wh / 48 V ≈ 925.92 Ah。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 電池組總能量需求 ≈ 44.44 kWh；(2) 最小電池容量 ≈ 926 Ah",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        },
        {
          "difficulty": "實務應用",
          "question": "一三相四線制 380V / 220V 幹線配電箱，連接三組單相 220V 照明迴路。L1 相電流 I1 = 40A，L2 相電流 I2 = 30A，L3 相電流 I3 = 30A (假設負載功因均為 1.0)。(1) 利用三相向量和公式計算中性線 N 上流過的失衡電流 I_N 為多少安培？(2) 分析若中性線斷路會對單相電器造成的安全危害。",
          "steps": [
            "三相四線制中性線電流向量公式 I_N = √[ I1² + I2² + I3² - (I1·I2 + I2·I3 + I3·I1) ]。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "代入數值：I_N = √[ 40² + 30² + 30² - (40×30 + 30×30 + 30×40) ] ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "I_N = √[ 1600 + 900 + 900 - (1200 + 900 + 1200) ] = √[ 3400 - 3300 ] = √100 = 10 A。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。",
            "若中性線 N 斷路，不平衡的三相負載將失去中性點參考位，導致輕負載相電壓暴升至接近 380V，極易燒毀電器設備引電氣火災。 ｜為什麼：依據物理學科核心定理與邏輯因果推導。"
          ],
          "answer": "(1) 中性線失衡電流 I_N = 10 A；(2) 中性線斷路會致使不平衡相電壓暴升過壓，毀損電器引發火災",
          "hints": [
            "分析題目核心條件與物理原理",
            "比對選項關鍵字與題幹語境，排除干擾項"
          ],
          "commonMistake": "容易被字面直譯、表面形近字或直覺誤導，未嚴謹回歸基本定義與邏輯鏈條。",
          "eliteShortcut": "核心概念破題法：抓住題幹關鍵物理量、化學式或文法結構，直接鎖定正解！"
        }
      ],
      "practice": {
        "difficulty": "基礎",
        "question": "某一單相 110V 家用廚房專用分路，同時啟動一台 1100W 的電熱水瓶及一台 880W 的微波爐。(1) 流經該迴路幹線的總電流 I_total 為多少安培？(2) 該分路若配置額定容量 20A 的 NFB 無熔絲開關，是否會發生過載跳脫？",
        "steps": [
          "計算電熱水瓶電流 I1 = P1 / V = 1100 W / 110 V = 10 A。",
          "計算微波爐電流 I2 = P2 / V = 880 W / 110 V = 8 A。",
          "兩電器並聯，總電流 I_total = I1 + I2 = 10 + 8 = 18 A。",
          "比對 NFB 額定容量：因為 18 A < 20 A，所以電流未超過 20A 額定值，NFB 不會跳脫，運作安全。"
        ],
        "answer": "總電流 I_total = 18 A，未超過 20A 額定值，不會跳脫"
      },
      "step0Prerequisites": [
        "歐姆定律 V = I · R 與電功率 P = V · I = I²R",
        "基爾霍夫電壓與電流定律 (KVL & KCL)",
        "交流電有效值與建築三相四線制配電 (220V/380V 或 110V/220V)"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "並聯電路中電阻越大分得的電流越大。",
          "correctThinking": "並聯各支路電壓相同，由 I = V/R 知電阻越小電流越大。",
          "trapDescription": "串聯與並聯電流電壓規律混淆。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "電路節點電位法 (Nodal Analysis)",
          "explanation": "選定基準零電位 (接地 GND)，對各節點列 KCL 電流守恆方程式求解電壓。"
        }
      ]
    }
  ]
};
