import type { TopicContent } from '../types';

const quiz = (question: string, steps: string[], answer: string, difficulty = '統測核心') => ({
  question,
  difficulty,
  steps,
  answer,
});

const checks = (topic: string, invariant: string, unit: string) => [
  quiz(`${topic}解題時，第一個必須確認的模型條件是什麼？`, [`辨識題目屬於${topic}，先畫圖或整理已知量。`, `確認${invariant}成立後再代公式。`], invariant, '觀念'),
  quiz(`${topic}計算完成後，最直接的量綱檢核為何？`, [`逐項檢查輸入單位。`, `結果應以${unit}表達；不符時不可只改單位符號。`], unit, '觀念'),
  quiz(`${topic}結果出現負號時，正確處理方式為何？`, ['回到原先設定的正方向或轉向。', '負號表示實際方向與假設相反，不代表答案必然錯誤。'], '保留大小並依符號修正實際方向', '易錯題'),
  quiz(`${topic}最可靠的最後驗算策略為何？`, ['使用未參與主要求解的獨立關係重新計算。', '同時檢查極端情況、方向與有效數字。'], '以獨立關係複核並檢查方向、量綱與合理性', '進階'),
];

const lessonIllustrations = ['professional-scope-overview.webp', 'context.webp', 'step-by-step.webp'];

export const mechanicsGapTopics: TopicContent[] = [
  {
    slug: 'parallel-force-systems',
    title: '2A. 平面平行力系',
    desc: '把分布載重換成等值集中力，利用合力與力矩定位作用線，並反推支承反力。',
    status: 'done',
    illustrations: lessonIllustrations,
    covered_question_ids: [],
    concepts: [
      { heading: '等值合力與作用點', body: '同向平行力的合力為各力代數和；作用線位置由「對任一點的總力矩相等」決定。分布載重的合力等於載重圖面積，作用於載重圖形心。', formula: 'R = ΣF；x_R = Σ(F_i x_i) / ΣF；R = ∫w(x)dx' },
      { heading: '均布與三角形載重', body: '均布載重 w 作用長度 L，等值力為 wL，作用於中點。由零線性增加到 w₀ 的三角形載重，等值力為 w₀L/2，作用於大端起算 L/3。' },
      { heading: '平衡與驗算', body: '先畫自由體圖，再列 ΣF_y=0 與 ΣM=0。最後用另一取矩點複核；反力為負表示實際方向與假設相反。' },
    ],
    worked_examples: [quiz('簡支梁跨距 6 m，全跨受 4 kN/m 均布載重，兩端反力各為多少？', ['等值集中力 W=4×6=24 kN，作用於跨中。', '系統左右對稱，所以 R_A=R_B。', 'R_A+R_B=24 kN。'], 'R_A=R_B=12 kN')],
    practices: [
      quiz('長 3 m 的三角形載重由左端 0 線性增至右端 12 kN/m。等值力與作用位置為何？', ['載重圖面積 R=12×3/2=18 kN。', '三角形形心距大端 L/3。'], '18 kN，距右端 1 m（距左端 2 m）'),
      quiz('兩向下平行力 10 kN、20 kN 分別位於 x=1 m、x=4 m，合力位置為何？', ['R=10+20=30 kN。', 'x_R=(10×1+20×4)/30=3 m。'], 'x=3 m', '進階'),
      ...checks('平面平行力系', '合力與原力系的總力及總力矩等值', '力用 kN、位置用 m、力矩用 kN·m'),
    ],
  },
  {
    slug: 'nonconcurrent-force-systems',
    title: '2B. 共面非共點非平行力系',
    desc: '同時處理水平力、垂直力與力偶，以三個獨立平衡方程求解剛體未知反力。',
    status: 'done',
    illustrations: lessonIllustrations,
    covered_question_ids: [],
    concepts: [
      { heading: '三個獨立平衡條件', body: '平面剛體平衡必須同時滿足水平力、垂直力及任一點總力矩為零。取矩點宜穿過最多未知力作用線。', formula: 'ΣF_x=0；ΣF_y=0；ΣM_O=0' },
      { heading: '力的移轉與力偶', body: '把力平移到另一點時，必須附加 M=Fd 的力偶。力偶矩與取矩點無關，只具有轉向。', formula: 'M = F d_⊥' },
      { heading: '支承反力辨識', body: '滾支承一個法向反力、鉸支承兩個分力、固定端有兩個分力與一個反力矩；未知數超過獨立方程即屬靜不定。' },
    ],
    worked_examples: [quiz('鉸支承 A 與滾支承 B 相距 4 m，跨中受向下 8 kN，求反力。', ['ΣM_A=0：4B_y-8×2=0，得 B_y=4 kN。', 'ΣF_y=0：A_y+B_y-8=0。', '無水平外力，A_x=0。'], 'A_x=0，A_y=4 kN，B_y=4 kN')],
    practices: [quiz('一剛體受向右 6 kN、向上 8 kN，兩力交於同點。合力大小與方向為何？', ['R=√(6²+8²)=10 kN。', 'θ=tan⁻¹(8/6)=53.13°。'], '10 kN，向右上 53.13°'), ...checks('非共點非平行力系', 'ΣF_x、ΣF_y、ΣM 三式同時成立', '力用 kN、力矩用 kN·m')],
  },
  {
    slug: 'shear-properties',
    title: '7A. 剪力與剪應力',
    desc: '區分直接剪力、平均剪應力與梁中橫向剪應力，避免把 V、τ 與剪力圖混為一談。',
    status: 'done',
    illustrations: lessonIllustrations,
    covered_question_ids: [],
    concepts: [
      { heading: '直接剪應力', body: '鉚釘、螺栓或沖孔面常先以平均剪應力計算。雙剪有兩個剪切面，有效面積是單剪的兩倍。', formula: 'τ_avg = V / A_s；A_s = n(πd²/4)' },
      { heading: '梁的橫向剪應力', body: '梁截面剪應力由自由表面零值增至中性軸附近最大；矩形截面最大值為平均值 1.5 倍。', formula: 'τ = VQ/(It)；矩形：τ_max = 3V/(2A)' },
      { heading: '剪力圖符號與跳躍', body: '集中力使剪力圖瞬間跳躍；分布載重是剪力圖斜率，剪力則是彎矩圖斜率。', formula: 'dV/dx = -w；dM/dx = V' },
    ],
    worked_examples: [quiz('直徑 10 mm 鉚釘承受 12 kN 單剪，平均剪應力為何？', ['剪切面積 A=π(10²)/4=78.54 mm²。', 'τ=12000/78.54=152.8 N/mm²。'], '約 153 MPa')],
    practices: [quiz('同一支直徑 10 mm 鉚釘改為雙剪並承受 12 kN，平均剪應力為何？', ['雙剪有效面積為 2A。', 'τ=12000/(2×78.54)。'], '約 76.4 MPa'), ...checks('剪力與剪應力', '先分辨剪力 V、剪切面數與有效面積', '剪力用 N 或 kN、剪應力用 MPa')],
  },
];

export const surveyingGapTopics: TopicContent[] = [
  {
    slug: 'surveying-fundamentals',
    title: '0. 測量總論與誤差基礎',
    desc: '建立測量基準、單位、精度、有效數字、誤差與工作倫理的完整起點。',
    status: 'done',
    illustrations: lessonIllustrations,
    covered_question_ids: [],
    concepts: [
      { heading: '測量工作與基準', body: '測量以距離、角度與高差觀測建立點位。小區域可採平面測量假設；範圍擴大時必須考慮地球曲率、坐標系與高程基準。' },
      { heading: '誤差、錯誤與精度', body: '錯誤應查明剔除；系統誤差依規律改正；偶然誤差以重複觀測及統計降低。精密度描述彼此接近，準確度描述接近真值。' },
      { heading: '有效數字與單位', body: '中間計算保留至少一位保護位，最後依觀測精度修約；角度的度分秒與十進位度不可直接混算。', formula: '1°=60′=3600″；相對精度 = |誤差|/測線長' },
    ],
    worked_examples: [quiz('距離量得 100.02、99.98、100.00 m，最或是值為何？', ['等精度觀測以算術平均作最或是值。', '(100.02+99.98+100.00)/3=100.00 m。'], '100.00 m')],
    practices: [quiz('閉合差 0.020 m、測線總長 200 m，相對閉合精度為何？', ['相對誤差=0.020/200=1/10000。'], '1/10,000'), ...checks('測量總論', '基準、單位、精度與觀測條件已交代', '依觀測量使用 m、度分秒或無因次比值')],
  },
  {
    slug: 'indirect-distance-elevation',
    title: '4A. 間接距離與高程測量',
    desc: '整合視距、三角高程與不可達距離，從觀測量判斷該用水平距離、高差或斜距公式。',
    status: 'done',
    illustrations: lessonIllustrations,
    covered_question_ids: [],
    concepts: [
      { heading: '視距測量', body: '標尺垂直且視線有垂直角 α 時，水平距離包含乘常數項與加常數項；題目若只給上下絲讀數，視距間隔 s 為兩者之差。', formula: 'H = K s cos²α + C cosα' },
      { heading: '三角高程', body: '由已知點儀器高、垂直角與水平距離推求未知點高程；必須把目標高納入，並統一仰角正、俯角負。', formula: 'H_B = H_A + i + D tanα - v' },
      { heading: '不可達距離策略', body: '先建立可量基線，再觀測角度形成三角形，以正弦定理求不可直接丈量的邊；先畫幾何圖可避免角與對邊錯配。', formula: 'a/sin A = b/sin B = c/sin C' },
    ],
    worked_examples: [quiz('K=100、C=0，視距間隔 s=1.50 m、α=30°，水平距離為何？', ['cos²30°=0.75。', 'H=100×1.50×0.75。'], '112.5 m')],
    practices: [quiz('A 點高程 20.000 m，儀器高 1.500 m；至 B 的水平距離 40 m、仰角 5°，目標高 1.800 m。B 高程約為何？', ['高差項=40tan5°≈3.500 m。', 'H_B=20+1.5+3.5-1.8。'], '約 23.200 m', '進階'), ...checks('間接距離與高程', '斜距、水平距離、垂直角與儀器高定義一致', '距離與高程用 m、角度用度分秒或度')],
  },
];

export const draftingGapTopics: TopicContent[] = [
  {
    slug: 'drafting-fundamentals',
    title: '0. 製圖基本觀念與圖紙管理',
    desc: '補齊圖紙規格、標題欄、折疊、圖面種類、版本管理與標準化判讀。',
    status: 'done',
    illustrations: lessonIllustrations,
    covered_question_ids: [],
    concepts: [
      { heading: '工程圖的溝通功能', body: '工程圖以標準化線條、符號、尺度與註記傳遞設計及施工資訊；清晰、一致、可追溯比藝術化表現更重要。' },
      { heading: 'A 系列圖紙與折疊', body: 'A 系列長寬比為 √2:1，對半裁切仍保持同一比例。折疊歸檔後應讓標題欄位於正面右下並可直接識別。', formula: 'A0 面積 = 1 m²；長寬比 = √2 : 1' },
      { heading: '圖面階段與版本', body: '概念圖說明構想，設計圖確立方案，施工圖提供尺寸與做法，竣工圖反映完成現況；修訂需留下日期、版次與修訂內容。' },
    ],
    worked_examples: [quiz('A1 圖紙折成 A4 歸檔時，標題欄應呈現在哪裡？', ['折疊目的之一是免展開即可辨識圖名與版次。', '標題欄原位於圖紙右下角。'], '折後正面右下方')],
    practices: [quiz('需要表達鋼筋型號、數量、位置與接頭細部，應使用哪類圖？', ['資訊直接供施工與查核使用，精度高於概念圖或草圖。'], '詳圖或施工圖'), ...checks('製圖基本觀念', '圖名、圖號、比例與版次可追溯', '圖紙尺寸用 mm、比例為無因次')],
  },
  {
    slug: 'civil-architectural-drawings',
    title: '12. 土木與建築製圖整合判讀',
    desc: '把基地、平面、立面、剖面、結構與施工詳圖串成同一套圖說的交叉查核流程。',
    status: 'done',
    illustrations: lessonIllustrations,
    covered_question_ids: [],
    concepts: [
      { heading: '圖說之間如何互證', body: '平面圖確認水平位置，立面圖確認外觀與高度，剖面圖確認垂直構造，詳圖放大接合做法；同一構件的編號、尺寸與高程必須一致。' },
      { heading: '建築圖與結構圖', body: '建築圖重空間、門窗、裝修與法規；結構圖重柱梁版牆、配筋與基礎。判讀時先用軸線與樓層定位，再比對構件編號。' },
      { heading: '施工圖查核順序', body: '先讀圖名、比例、北向與版次，再查軸線及高程，接著追索剖面索引與詳圖索引，最後檢查尺寸閉合及跨圖衝突。' },
    ],
    worked_examples: [quiz('平面圖門編號 D03，但門窗表沒有 D03，應如何處理？', ['這是跨圖索引不一致，不能自行猜測尺寸。', '先查最新版次與修訂雲線，再提出圖說疑義。'], '記錄衝突並依正式程序釐清，不可逕自施工')],
    practices: [
      quiz('要確認樓梯淨高，至少應交叉檢查哪些圖？', ['平面圖確認梯段與洞口位置。', '剖面圖確認垂直高度；必要時再查樓梯詳圖。'], '平面圖、剖面圖及樓梯詳圖'),
      quiz('基地圖標高 +0.00 與剖面圖一樓完成面標高不一致，第一步為何？', ['先比較圖號、版次與修訂日期。', '以最新版圖說釐清，仍衝突則提出 RFI。'], '先做版本與修訂核對，再正式提出疑義', '進階'),
      ...checks('土木與建築製圖整合判讀', '平面、立面、剖面與詳圖的索引及版次一致', '圖面長度依標註用 mm 或 cm、高程用 m'),
    ],
  },
];
