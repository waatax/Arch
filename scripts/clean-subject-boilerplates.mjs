import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');

// 1. Clean surveying.ts
const surveyingPath = path.join(subjectsDir, 'surveying.ts');
let surveying = fs.readFileSync(surveyingPath, 'utf8');

surveying = surveying.replaceAll(
  '容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。',
  '容易在後視與前視正負符號 (後加前減)、角度度分秒六十進位換算、或坐標縱橫增量 (ΔX=S·sinα, ΔY=S·cosα) 代入時產生計算失誤。'
);
surveying = surveying.replaceAll(
  '工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！',
  '測量實務破題法：熟記『後加前減算高程、東正弦北餘弦算坐標』口訣，快速秒殺核心數據！'
);
surveying = surveying.replaceAll(
  '分析題目核心條件與工程力學規範/定理',
  '分析題目已知點高程、方位角、測站讀數或地籍幾何條件'
);
surveying = surveying.replaceAll(
  '80% 考生在概念題中因粗心忽略前提假設而失分。',
  '考生常混淆系統誤差（具規律可計算改正）與偶然誤差（隨機遵循常態分佈），或將粗差誤作誤差平差。'
);

fs.writeFileSync(surveyingPath, surveying, 'utf8');

// 2. Clean drafting.ts
const draftingPath = path.join(subjectsDir, 'drafting.ts');
let drafting = fs.readFileSync(draftingPath, 'utf8');

drafting = drafting.replaceAll(
  '容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。',
  '容易在第三角投影視圖對齊、粗細線型層級、比例尺縮放 (如 1/100 換算實物尺寸) 或虛線相交交點時產生繪圖與判讀失誤。'
);
drafting = drafting.replaceAll(
  '工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！',
  '製圖實務破題法：緊扣『正俯長對正、正側高平齊、俯側寬相等』三視圖投影規律，快速鎖定正確視圖！'
);
drafting = drafting.replaceAll(
  '分析題目核心條件與工程力學規範/定理',
  '分析題目投影幾何條件、視圖方位或 CNS 11567 建築製圖規範要求'
);
drafting = drafting.replaceAll(
  '80% 考生在概念題中因粗心忽略前提假設而失分。',
  '考生常忽略第三角投影法中正視、俯視、右側視圖之相對位置，或混淆建築剖面線方向與材料圖例。'
);

fs.writeFileSync(draftingPath, drafting, 'utf8');

// 3. Clean materials.ts
const materialsPath = path.join(subjectsDir, 'materials.ts');
let materials = fs.readFileSync(materialsPath, 'utf8');

materials = materials.replaceAll(
  '容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。',
  '容易在試體受壓面積換算 (如 15×30cm 圓柱試體)、含水率與吸水率分母基準 (乾重 vs 濕重)、或標準養護天數與強度折減判定時產生計算失誤。'
);
materials = materials.replaceAll(
  '工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！',
  '材料實務破題法：掌握『水灰比定強度、坍度看工作性、低溫延凝高溫速凝』核心通則，快速秒殺考點！'
);
materials = materials.replaceAll(
  '分析題目核心條件與力學幾何定理演算。',
  '分析題目材料試驗條件與 CNS 國家標準規範嚴密推導。'
);
materials = materials.replaceAll(
  '分析題目核心條件與材料與試驗規範/定理',
  '分析材料試驗條件、CNS 國家標準規範要求或水灰比強度定律'
);
materials = materials.replaceAll(
  '80% 考生在概念題中因粗心忽略前提假設而失分。',
  '考生常混淆材料物理性質之基準條件（如面乾內飽和 SSD 狀態與絕對乾燥烘乾狀態之差異）。'
);

fs.writeFileSync(materialsPath, materials, 'utf8');

// 4. Clean mechanics.ts
const mechanicsPath = path.join(subjectsDir, 'mechanics.ts');
let mechanics = fs.readFileSync(mechanicsPath, 'utf8');

mechanics = mechanics.replaceAll(
  '80% 考生在概念題中因粗心忽略前提假設而失分。',
  '考生常因忽略正負號約定（如拉力為正/壓力為負、逆時針為正力矩）或未確認自由體圖支承反力完整性而失分。'
);
mechanics = mechanics.replaceAll(
  '直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。',
  '直覺套用公式而忽略先決條件（如桁架節點無外力才能判定零桿、或構件必須受阻才會產生熱應力）。'
);

fs.writeFileSync(mechanicsPath, mechanics, 'utf8');

console.log('Successfully cleaned boilerplates across surveying, drafting, materials, and mechanics!');
