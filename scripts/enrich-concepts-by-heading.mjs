import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');

const conceptExpansions = {
  'materials.ts': [
    {
      headingMatch: '面乾內飽和',
      newBody: '粗粒料與固體建材在不同含水狀態下的密度計算標準不同：(1) 絕對乾燥（烘乾）狀態：排除所有水分，測得真密度；(2) 面乾內飽和 (SSD) 狀態：內部孔隙吸飽水分但表面完全乾燥，此時測得之 SSD 比重為混凝土配合設計之計算基準；(3) 濕潤狀態：表面附著自由水；(4) 氣乾狀態：內部部分乾燥。'
    },
    {
      headingMatch: '凝結時間試驗',
      newBody: '依據 CNS 61 規範，卜特蘭水泥之凝結時間採用維卡儀 (Vicat) 測定：初凝時間不得少於 45 分鐘（確保攪拌、輸送與澆置振動過程中維持工作性）；終凝時間不得超過 375 分鐘（確保硬化過程如期發展，便於拆模與表面修飾作業）。'
    },
    {
      headingMatch: '水泥砂漿抗壓試體製作',
      newBody: '水泥砂漿抗壓試驗採用標準規範之 50 mm (2 英吋) 立方體試體，以水泥與標準石英砂按 1:2.75 之重量比配製，水膠比控制在 0.485，經標準養護箱與飽和石灰水養護至 3 天、7 天、28 天後進行加載破壞測試，以客觀量化水泥熟料之水化膠結強度。'
    },
    {
      headingMatch: '加載試驗與強度計算',
      newBody: '立方體試體受壓加載速率需嚴格控制在每秒 900 至 1800 N (牛頓)，且試體上下受壓面必須保持絕對平整垂直並對準加壓盤中心球座；任何偏心或加載速率過快皆會造成應力集中，導致強度測定值失真偏低。'
    },
    {
      headingMatch: '假凝與急凝',
      newBody: '水泥異常凝結包含兩類：(1) 假凝 (False Set)：因水泥研磨過程溫度過高使二水石膏脫水成半水石膏，加水後迅速結晶發硬，但不釋放大量水化熱，經重新劇烈攪拌即可恢復塑性繼續使用；(2) 急凝 (Flash Set)：因缺乏石膏抑制 C3A 之劇烈水化，加水後數分鐘內劇烈放熱並永久硬化，不可再加水或攪拌。'
    },
    {
      headingMatch: '特殊性能混凝土',
      newBody: '現代工程廣泛應用特殊性能混凝土：自充填混凝土 (SCC) 具備高流動性與抗粒料析離性，無需震動即可填滿高密度鋼筋間隙；輕質骨材混凝土減輕自重適用於超高層建築樓版；超高性能混凝土 (UHPC) 抗壓強度超過 150 MPa 且緻密抗滲，常用於薄殼結構與大跨距橋梁。'
    },
    {
      headingMatch: '小型釋放腔',
      newBody: '健康綠建材依據 CNS 16000 系列標準，將建材置於小型釋放氣候箱 (Environment Chamber) 內，在 25°C、50% RH、換氣率 0.5 次/小時條件下持續測定，甲醛逸散率必須 ≤ 0.05 mg/(m²·h)，總揮發性有機化合物 TVOC 逸散率必須 ≤ 0.19 mg/(m²·h)。'
    }
  ],
  'mechanics.ts': [
    {
      headingMatch: '零桿判定',
      newBody: '桁架零桿判定兩大黃金準則：(1) 二桿節點：若無外力作用於節點上，且兩桿不共線，則此兩桿必皆為零桿；(2) 三桿節點：若無外力作用於節點上，且其中兩桿共線，則不共線之第三桿必為零桿。熟練零桿心算可省去 80% 的節點方程式聯立運算。'
    },
    {
      headingMatch: '常見載重閉合公式',
      newBody: '工程常用簡支梁與懸臂梁經典公式：(1) 簡支梁均布載重 q：最大彎矩 M_max = qL²/8（跨中），最大撓度 δ_max = 5qL⁴/(384EI)；(2) 簡支梁集中力 P：最大彎矩 M_max = PL/4（跨中），最大撓度 δ_max = PL³/(48EI)；(3) 懸臂梁均布載重 q：固定端最大彎矩 M_max = qL²/2，自由端最大撓度 δ_max = qL⁴/(8EI)。'
    }
  ],
  'surveying.ts': [
    {
      headingMatch: '方位角推算',
      newBody: '導線邊方位角推算公式為：前測線方位角 = 前一測線方位角 + 左折轉角 ± 180°（若為右折轉角則為 - 右角 ± 180°）；推算結果若大於 360° 需減去 360°，若小於 0° 需加上 360°，確保方位角始終維持在 0° 至 360° 區間。'
    },
    {
      headingMatch: '角度閉合差分配',
      newBody: '角度閉合差分配原則：當觀測角度閉合差 wθ 未超過法定容許限差 Wmax = ±c√n 時，將閉合差反符號均勻分配給各觀測角（每角改正數 v = -wθ / n），使閉合多邊形內角和嚴格等於 (n - 2) × 180°。'
    }
  ],
  'drafting.ts': [
    {
      headingMatch: '虛線交接規則',
      newBody: 'CNS 11567 線條交接標準：虛線與實線相交且幾何上有連接關係時，虛線的線段應與實線相接（不可留空隙）；若虛線為實線之延伸線，則交接處應留空隙以示區別；兩條虛線垂直相交或轉角時，兩虛線段必須直接交接相交，不可在空隙處相碰。'
    },
    {
      headingMatch: '三視圖對應關係',
      newBody: '正投影三視圖遵循三大幾何規律：正視圖與俯視圖「長對正」；正視圖與側視圖「高平齊」；俯視圖與側視圖「寬相等」（常利用 45° 輔助投影線傳遞寬度尺寸），三者精確對齊構成完整的空間形體描述。'
    },
    {
      headingMatch: 'CAD 輔助正投影',
      newBody: 'CAD 正投影繪製工作流：利用 XLINE (建構線) 繪製水平與垂直基準線，搭配 OFFSET (偏移) 建立特徵輪廓，利用 45 度斜射輔助線完成俯視圖至側視圖之寬度映射，最後使用 TRIM (修剪) 指令快速生成精確三視圖。'
    },
    {
      headingMatch: '牆體厚度與材質表達',
      newBody: '建築平面圖牆體厚度標準：鋼筋混凝土 (RC) 外牆與承重牆標準厚度為 15 cm 或 20 cm（圖面以粗實線繪製並可塗黑或填充剖面線）；室內 1/2B 磚隔間牆厚度為 12 cm；1B 磚牆厚度為 24 cm；輕隔間牆（石膏板/矽酸鈣板）一般厚度為 10 cm 至 12 cm。'
    },
    {
      headingMatch: '門窗、樓梯與設備標註',
      newBody: '建築平面圖空間標註要素：樓梯需標示箭頭指向上樓 (UP) 或下樓 (DN) 方向並註明踏步數與級高級深；門窗需依 CNS 標註編號（如 D1, W1）；衛浴與廚房需依標準圖例畫出馬桶、面盆、洗滌槽；各空間地坪需標註完成面高程符號（如 FL ±0.00, FL +1.50）。'
    },
    {
      headingMatch: '立面垂直高度與樓層線標註',
      newBody: '建築立面圖垂直高度標註系統：外側應設置連續標註線標明各層樓層高度、梁底淨高、窗台高、門窗頂高及女兒牆壓頂高；兩側需標註標準水平高程標高符號（GL 地盤線、1FL 一樓地坪、2FL 二樓地坪、RFL 屋頂地坪、PHFL 屋突地坪）。'
    },
    {
      headingMatch: '平面對線與立面圖生成',
      newBody: '由平面圖延伸繪製立面圖之標準作業：將平面圖旋轉至對應朝向置於上方，利用 RAY 或 XLINE 射線由平面圖之柱軸線、牆角、門窗開口邊界垂直向下投射引線，再由水平樓層基準線截取各層高度，確保平立面構件定位百分之百吻合。'
    },
    {
      headingMatch: '尺寸標註四大要素',
      newBody: '工程尺寸標註四大構成要素：(1) 尺寸界線 (Extension Line)：由輪廓線引出之細實線，起點留空隙 1~2 mm，尾端突出 2~3 mm；(2) 尺寸線 (Dimension Line)：與測量方向平行之細實線；(3) 尺寸起訖點符號：CNS 採用實心箭頭、細斜線 (45°) 或黑圓點；(4) 尺寸數字：標註於尺寸線上方中央，字頭朝上或朝左。'
    },
    {
      headingMatch: '三道尺寸標註體系',
      newBody: '建築平面圖外圍三道尺寸標註標準階層：第一道（最外層）：總尺寸 (Overall Dimension)，標示建築物總長度與總寬度；第二道（中間層）：軸線尺寸 (Grid/Column Center Dimension)，標明結構柱心與主牆中心線間距；第三道（最內層）：細部尺寸 (Detail Dimension)，標註牆厚、門窗開口寬度及垛寬。'
    },
    {
      headingMatch: '標題欄 (圖頭) 規範',
      newBody: 'CNS 11567 標題欄（圖頭）規範：圖頭應固定設置於圖紙的「右下角」，內容必須包含：工程專案名稱、圖名（如一層平面圖）、圖號（如 A-01）、比例尺（如 1/100）、設計建築師事務所簽章、繪圖/審核人員姓名、繪圖日期及最新版次編號 (Revision No.)。'
    },
    {
      headingMatch: 'CAD 尺寸標註型式設定',
      newBody: 'AutoCAD 標註型式 (DIMSTYLE) 標準設定：設定標註線與延伸線顏色為 Color 8（細線）；文字字高配合出圖比例設為可註解 (Annotative) 或圖紙高度 2.5~3.0 mm；箭頭大小設為 2.0 mm 建築斜線 (Architectural Tick)；起點偏移設為 1.5 mm，延伸線超越尺寸線設為 2.0 mm。'
    },
    {
      headingMatch: 'CAD 座標系統與輸入方式',
      newBody: 'AutoCAD 座標輸入系統：(1) 絕對直角坐標 (X,Y)：相對於世界座標原點 (0,0)；(2) 相對直角坐標 (@ΔX,ΔY)：相對於前一點之位移量；(3) 相對極坐標 (@距離<角度)：相對於前一點之距離與逆時針夾角；(4) 正交與極軸追蹤：直接沿光標方向鍵入精確長度數值。'
    },
    {
      headingMatch: '常用功能鍵',
      newBody: 'AutoCAD 常用功能鍵快速切換：F1 說明；F2 指令視窗歷史文字切換；F3 物件鎖點 (OSNAP) 開關；F7 格線顯示；F8 正交模式 (ORTHO) 強制鎖定水平垂直；F9 鎖點捕捉；F10 極軸追蹤；F11 物件鎖點追蹤；F12 動態輸入 (DYNMODE) 開關。'
    }
  ],
  'physics.ts': [
    {
      headingMatch: '單位換算與工程常用單位',
      newBody: '建築結構常用力學單位換算：重力加速度 g ≈ 9.8 m/s²，1 kgf (公斤力) ≈ 9.8 N (牛頓)；壓力應力單位 1 Pa = 1 N/m²，1 MPa = 1 N/mm² = 10⁶ Pa ≈ 10.197 kgf/cm² ≈ 10 kgf/cm²；工程計算中 1 tf (公噸力) ≈ 9.8 kN ≈ 10 kN。'
    },
    {
      headingMatch: '能量與功率常用單位',
      newBody: '建築能源與熱力學單位換算：1 J (焦耳) = 1 W·s；1 kWh (度電) = 3.6 × 10⁶ J = 860 kcal；1 cal ≈ 4.184 J；1 馬力 (HP) ≈ 746 W；空調制冷量 1 台灣冷凍噸 (1 RT) = 3024 kcal/h ≈ 3.517 kW (千瓦)，為綠建築空調節能容量計算之基準單位。'
    },
    {
      headingMatch: '光度學單位與建築照明標準',
      newBody: '光學度量與建築照明 CNS 12112 標準：光通量單位為流明 (lm，光源總發光能量)；發光強度單位為坎德拉 (cd = lm/sr)；照度單位為勒克斯 (lx = lm/m²，受照面明亮程度)；亮度單位為 cd/m² (人眼感受之表面輝度)。辦公室與教室標準照度要求為 500~750 lx，製圖室為 750~1000 lx，走廊為 100~150 lx。'
    }
  ]
};

for (const [filename, rules] of Object.entries(conceptExpansions)) {
  const filePath = path.join(subjectsDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  let replaced = 0;

  for (const rule of rules) {
    // Regex to match { ... heading: "...headingMatch...", ... body: "...", ... }
    // Or we can find heading line and then replace the adjacent body line.
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('heading') && lines[i].includes(rule.headingMatch)) {
        // Find body within next 5 lines
        for (let j = i + 1; j < Math.min(lines.length, i + 8); j++) {
          if (lines[j].includes('"body":') || lines[j].includes('body:')) {
            const indent = lines[j].match(/^\s*/)[0];
            const isDoubleQuote = lines[j].includes('"body":');
            const quoteKey = isDoubleQuote ? '"body":' : 'body:';
            lines[j] = `${indent}${quoteKey} "${rule.newBody}",`;
            replaced++;
            break;
          }
        }
      }
    }
    content = lines.join('\n');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${replaced} headings in ${filename}`);
}
