import { SubjectData } from '../types';

export const physicsData: SubjectData = {
  slug: 'physics',
  title: '物理',
  category: '自然科學',
  color: 'blue-600',
  topics: [
    {
      slug: 'mechanics-motion',
      title: '1. 力學與運動',
      desc: '運動學基礎、牛頓運動定律與建築結構受力。',
      status: 'done',
      concepts: [
        {
          heading: '牛頓第二運動定律',
          body: '物體的加速度與所受淨力成正比，與質量成反比。在建築結構中，地震造成的加速度會對建築物產生巨大的慣性力。',
          formula: 'F = m · a'
        },
        {
          heading: '靜力平衡條件',
          body: '建築結構必須處於靜力平衡狀態，確保安全穩定。所有外力的向量和及力矩和都必須為零。',
          steps: [
            '確認所有作用於結構的外力',
            '計算所有力的向量和 (ΣF = 0)',
            '計算所有力對任一點的力矩和 (ΣM = 0)'
          ]
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '一棟質量為 5000 kg 的小型建築模型，在地震測試中承受了水平方向 2 m/s² 的加速度。請問該模型承受的水平地震力為多少？',
        steps: [
          '找出質量 m = 5000 kg',
          '找出加速度 a = 2 m/s²',
          '代入牛頓第二定律公式 F = m · a'
        ],
        answer: 'F = 5000 × 2 = 10000 N'
      }
    },
    {
      slug: 'work-energy',
      title: '2. 功與能量',
      desc: '功的定義、動能與位能、能量守恆與綠建築節能。',
      status: 'done',
      concepts: [
        {
          heading: '重力位能',
          body: '物體因位置高度而具有的能量。在建築中，水塔的水或懸掛的建材都具有重力位能。',
          formula: 'U = m · g · h'
        },
        {
          heading: '能量守恆定律',
          body: '在一個孤立系統中，總能量保持不變，只能從一種形式轉換為另一種形式。綠建築設計常利用此原理進行熱能回收。'
        }
      ],
      practice: {
        difficulty: '中等',
        question: '將 500 kg 的水抽至高 20 公尺的屋頂水塔，需要作多少功？(假設 g = 9.8 m/s²)',
        steps: [
          '找出質量 m = 500 kg，高度 h = 20 m',
          '使用重力位能公式 U = mgh 計算所需的功'
        ],
        answer: 'U = 500 × 9.8 × 20 = 98000 J (或 98 kJ)'
      }
    },
    {
      slug: 'thermodynamics',
      title: '3. 熱學',
      desc: '熱傳導、熱對流、熱輻射與建築隔熱設計。',
      status: 'done',
      concepts: [
        {
          heading: '熱傳導與隔熱',
          body: '熱量經由物質從高溫區傳向低溫區的現象。建築外牆常使用低熱傳導係數的材料來達到隔熱效果。',
          table: {
            headers: ['材料', '熱傳導係數 (W/m·K)', '隔熱效果'],
            rows: [
              ['混凝土', '1.4', '差'],
              ['玻璃纖維', '0.04', '優'],
              ['空氣 (靜止)', '0.024', '極優']
            ]
          }
        },
        {
          heading: '熱傳透率 (U值)',
          body: 'U值代表熱量穿透建築構造的能力。U值越低，代表隔熱性能越好，對降低空調耗能越有幫助。'
        }
      ],
      practice: {
        difficulty: '進階',
        question: '若某建築外牆的面積為 10 m²，其U值為 2.0 W/(m²·K)，室內外溫差為 5 K，請問該外牆的熱傳遞率為多少？',
        steps: [
          '找出面積 A = 10 m²，U值 = 2.0，溫差 ΔT = 5 K',
          '熱傳遞率公式 Q = U · A · ΔT'
        ],
        answer: 'Q = 2.0 × 10 × 5 = 100 W'
      }
    },
    {
      slug: 'waves-acoustics',
      title: '4. 波動與聲學',
      desc: '波的性質、聲音的傳播與建築音效控制。',
      status: 'done',
      concepts: [
        {
          heading: '聲波的反射與吸音',
          body: '聲音在空間中遇到障礙物會產生反射。音樂廳設計需要精確計算聲波的反射路徑並配置吸音材料。',
          steps: [
            '分析聲源位置',
            '計算首次反射音的延遲時間',
            '配置適當吸音係數的材料減少殘響'
          ]
        },
        {
          heading: '波速公式',
          body: '波速等於波長乘以頻率。聲音在空氣中的傳播速度與溫度有關。',
          formula: 'v = f · λ'
        }
      ],
      practice: {
        difficulty: '中等',
        question: '在 15°C 的空氣中（聲速約為 340 m/s），一個頻率為 170 Hz 的低頻噪音，其波長為多少？',
        steps: [
          '找出波速 v = 340 m/s',
          '找出頻率 f = 170 Hz',
          '代入波速公式 v = f · λ，得到 λ = v / f'
        ],
        answer: 'λ = 340 / 170 = 2 m'
      }
    },
    {
      slug: 'optics',
      title: '5. 光學',
      desc: '光的反射、折射、照度與自然採光設計。',
      status: 'done',
      concepts: [
        {
          heading: '照度與距離平方反比定律',
          body: '照度表示單位面積上接受到的光通量。點光源造成的照度與距離的平方成反比。',
          formula: 'E = I / r²'
        },
        {
          heading: '自然採光',
          body: '利用窗戶或採光罩引入自然光，能有效減少照明用電。需同時考慮眩光與太陽熱能的進入。'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '一個發光強度為 400 cd 的燈泡，在距離其 2 公尺處的桌面所產生的直射照度為多少？',
        steps: [
          '找出發光強度 I = 400 cd',
          '距離 r = 2 m',
          '代入照度公式 E = I / r²'
        ],
        answer: 'E = 400 / 2² = 100 lux'
      }
    },
    {
      slug: 'electricity',
      title: '6. 電學基礎',
      desc: '歐姆定律、電功率與建築物配電系統。',
      status: 'done',
      concepts: [
        {
          heading: '歐姆定律',
          body: '在固定溫度下，導體兩端的電壓與流過的電流成正比。',
          formula: 'V = I · R'
        },
        {
          heading: '電功率',
          body: '電器消耗電能的速率。建築物配電設計必須計算所有設備的總電功率，以決定無熔絲開關的容量。',
          formula: 'P = V · I'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '一台 110V 的微波爐，運作時消耗 1100W 的電功率。請問流經該微波爐的電流為多少安培？',
        steps: [
          '找出電壓 V = 110V，電功率 P = 1100W',
          '代入電功率公式 P = V · I',
          '計算 I = P / V'
        ],
        answer: 'I = 1100 / 110 = 10 A'
      }
    }
  ]
};
