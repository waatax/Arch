import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');

const subjectExamples = {
  'materials.ts': {
    question: '【步驟化例題】混凝土配比計算：設計強度為 3000 psi 之混凝土，若水灰比 W/C = 0.5，水泥用量為 350 kg/m³，求需水量。',
    difficulty: '中等',
    steps: [
      '步驟 1：確認已知條件。W/C = 0.5, C = 350 kg/m³。',
      '步驟 2：代入公式 W/C。W / 350 = 0.5。',
      '步驟 3：計算需水量 W。W = 350 × 0.5 = 175 kg/m³。'
    ],
    answer: '需水量為 175 kg/m³ (或 175 公升)'
  },
  'surveying.ts': {
    question: '【步驟化例題】水準測量高程計算：已知 A 點高程 HA = 100.000m，後視讀數 BS = 1.523m，前視讀數 FS = 1.205m，求 B 點高程。',
    difficulty: '基礎',
    steps: [
      '步驟 1：計算儀器高 (HI)。HI = HA + BS = 100.000 + 1.523 = 101.523 m。',
      '步驟 2：計算前視點高程 (HB)。HB = HI - FS。',
      '步驟 3：代入數值求解。HB = 101.523 - 1.205 = 100.318 m。'
    ],
    answer: 'B點高程為 100.318 m'
  },
  'drafting.ts': {
    question: '【步驟化例題】比例尺換算：建築平面圖比例尺為 1:50，若圖面上某房間寬度量測為 8 cm，求實際寬度為何？',
    difficulty: '基礎',
    steps: [
      '步驟 1：理解比例尺定義。1:50 代表圖面 1 單位等於實際 50 單位。',
      '步驟 2：計算實際尺寸。實際尺寸 = 圖面尺寸 × 分母 = 8 cm × 50 = 400 cm。',
      '步驟 3：換算為公尺。400 cm = 4.0 m。'
    ],
    answer: '實際寬度為 4.0 公尺'
  },
  'chinese.ts': {
    question: '【步驟化例題】古典建築散文判讀：柳宗元《梓人傳》中，作者如何藉由木匠建造屋宇的過程，闡述宰相治國之理？',
    difficulty: '中等',
    steps: [
      '步驟 1：分析題幹核心。「梓人」即木匠，「宰相」指治國者。',
      '步驟 2：對照文中描述。木匠不自運斤斧，而是選材任能、指揮群匠；宰相亦同，不應陷於細務，而應知人善任、統御百官。',
      '步驟 3：歸納主旨。透過「運籌帷幄」的建築管理比喻治國的「分層負責」。'
    ],
    answer: '以梓人「不自運斤斧」而善於統御，比喻宰相應「知人善任、分層負責」的治國之道。'
  },
  'english.ts': {
    question: '【步驟化例題】建築專有名詞閱讀測驗：The "cantilever" is a rigid structural element, such as a beam, anchored at one end to a support from which it protrudes. What is the primary characteristic of a cantilever?',
    difficulty: '基礎',
    steps: [
      '步驟 1：找出關鍵字。cantilever (懸臂樑)、anchored at one end (一端固定)、protrudes (突出)。',
      '步驟 2：解析句意。懸臂樑是一種剛性結構元件，一端固定於支撐點，另一端則向外延伸無支撐。',
      '步驟 3：對應選項或總結。主要特徵為「單端固定，另一端懸空」。'
    ],
    answer: 'It is supported only at one end. (僅一端有支撐)'
  },
  'math-c.ts': {
    question: '【步驟化例題】三角函數與測高：從平地 A 點觀測大樓頂部，仰角為 30°；向大樓前進 100 公尺至 B 點，仰角變為 60°。求大樓高度 h。',
    difficulty: '困難',
    steps: [
      '步驟 1：建立直角三角形幾何模型。設大樓底為 C，高為 h。距離 BC = x，AC = x + 100。',
      '步驟 2：列出正切函數。tan(60°) = h / x ⇒ h = √3 x。tan(30°) = h / (x + 100) ⇒ 1/√3 = h / (x + 100)。',
      '步驟 3：解聯立方程式。x + 100 = √3 h = √3 (√3 x) = 3x。得到 2x = 100 ⇒ x = 50。',
      '步驟 4：求 h。h = 50√3 公尺。'
    ],
    answer: '大樓高度為 50√3 公尺'
  },
  'physics.ts': {
    question: '【步驟化例題】牛頓第二運動定律：一質量 1000 kg 的電梯，以 2 m/s² 的加速度向上起步，求電梯鋼纜之張力 T？ (g = 9.8 m/s²)',
    difficulty: '中等',
    steps: [
      '步驟 1：繪製自由體圖 (FBD)。電梯受向下重力 W = mg，向上張力 T。',
      '步驟 2：列出牛頓第二定律方程式。∑F = m a ⇒ T - mg = m a。',
      '步驟 3：代入數值求解。T = m(g + a) = 1000 × (9.8 + 2) = 11800 N。'
    ],
    answer: '鋼纜張力為 11800 N'
  },
  'chemistry.ts': {
    question: '【步驟化例題】化學計量與建築材料：鍛燒石灰石 (CaCO3) 製備生石灰 (CaO)，反應式為 CaCO3 → CaO + CO2。若鍛燒 100 公斤純碳酸鈣，可得生石灰多少公斤？(Ca=40, C=12, O=16)',
    difficulty: '基礎',
    steps: [
      '步驟 1：計算分子量。CaCO3 = 40+12+(16×3) = 100。CaO = 40+16 = 56。',
      '步驟 2：確認莫耳數。100 kg CaCO3 = 100,000 g / 100 = 1000 莫耳。',
      '步驟 3：由莫耳數比求質量。CaO 生成 1000 莫耳 = 1000 × 56 = 56,000 g = 56 kg。'
    ],
    answer: '可得生石灰 56 公斤'
  },
  'history.ts': {
    question: '【步驟化例題】台灣建築史：請問台灣傳統民居中，具有「防禦功能」且常見於客家聚落的建築型態稱為何者？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析關鍵字。「防禦功能」、「客家聚落」、「傳統民居」。',
      '步驟 2：回顧台灣建築史。閩南建築多三合院/四合院；客家建築則為了防禦盜匪或械鬥，常建構封閉式的防禦建築。',
      '步驟 3：連結專有名詞。最具代表性的為「圍龍屋」或單棟封閉的「圍屋」、「土樓」（台灣稱「圍龍屋」較為典型）。'
    ],
    answer: '圍龍屋 (或稱 客家圍屋)'
  },
  'geography.ts': {
    question: '【步驟化例題】都市熱島效應：在建築規劃時，為減緩「都市熱島效應 (Urban Heat Island Effect)」，下列何種設計策略最無效？',
    difficulty: '基礎',
    steps: [
      '步驟 1：理解熱島效應成因。市區不透水鋪面多、綠地少、人為廢熱排放高。',
      '步驟 2：分析減緩策略。有效策略包含：增加綠化率 (屋頂/垂直綠化)、使用高反射率/透水鋪面材料、增加建築間距引入通風。',
      '步驟 3：找出無效策略。增加大面積玻璃帷幕（會造成溫室效應及光害反射）、降低建築棟距（阻擋通風散熱）。'
    ],
    answer: '增加大面積玻璃帷幕與降低建築棟距'
  },
  'civics.ts': {
    question: '【步驟化例題】建築法規與勞安：依據《建築法》，建築物起造人應於何時申請建造執照？',
    difficulty: '基礎',
    steps: [
      '步驟 1：分析法定程序。建築行為包含設計、請照、施工、驗收。',
      '步驟 2：對應法規要求。未取得主管機關許可前，不得擅自施工。',
      '步驟 3：得出結論。必須在「開工前」備齊相關圖說向當地主管建築機關提出申請。'
    ],
    answer: '在建築物動工興建之前 (開工前)'
  },
  'extensions.ts': {
    question: '【步驟化例題】BIM 技術應用：BIM (Building Information Modeling) 中的 4D 與 5D 模擬，分別加入了哪兩個物理/管理維度的資訊？',
    difficulty: '基礎',
    steps: [
      '步驟 1：確認 3D 的意義。3D 指空間的長、寬、高幾何資訊。',
      '步驟 2：解析 4D。在 3D 模型上加上「時間 (Time)」進度，用於施工排程模擬。',
      '步驟 3：解析 5D。在 4D 基礎上加上「成本 (Cost)」或估價資訊，用於工程造價管控。'
    ],
    answer: '4D 加入了「時間(排程)」，5D 加入了「成本(造價)」'
  }
};

const allFiles = [
  'chinese.ts', 'civics.ts', 'drafting.ts', 'english.ts', 'extensions.ts',
  'history.ts', 'materials.ts', 'math-c.ts', 'physics.ts', 'chemistry.ts',
  'geography.ts', 'surveying.ts' // mechanics is already fully customized
];

for (const file of allFiles) {
  const filePath = path.join(subjectsDir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  const ex = subjectExamples[file];
  if (ex) {
    // Replace the dummy worked examples with realistic ones
    const searchRegex = /\{\s*"question":\s*'【V5\.1 新增步驟化例題】待補全，對應考點解析'[\s\S]*?"answer":\s*'待補全'\s*\}/g;
    
    content = content.replace(searchRegex, () => {
      return `{
          "question": '${ex.question}',
          "difficulty": '${ex.difficulty}',
          "steps": ${JSON.stringify(ex.steps)},
          "answer": '${ex.answer}'
        }`;
    });
  }

  // Update illustrations arrays for ALL files so they are appropriately prefixed
  const slugMatch = content.match(/"?slug"?:\s*['"]([^'"]+)['"]/);
  const subjectSlug = slugMatch ? slugMatch[1] : file.replace('.ts', '');
  
  content = content.replace(/"illustrations":\s*\['context\.webp', 'mechanism\.webp', 'comparison\.webp', 'step-by-step\.webp'\],/g, 
    `"illustrations": ['${subjectSlug}-context.webp', '${subjectSlug}-mechanism.webp', '${subjectSlug}-comparison.webp', '${subjectSlug}-step.webp'],`);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated examples in ${file}`);
}
