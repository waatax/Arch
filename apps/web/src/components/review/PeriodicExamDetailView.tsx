'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PeriodicExamPlan } from '@/data/periodicExams';
import PeriodicExamSvgIllustration from './PeriodicExamSvgIllustrations';
import { 
  ArrowLeft, 
  Printer, 
  Download, 
  BookOpen, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Circle, 
  Compass, 
  Target, 
  Award, 
  Clock,
  Eye,
  School,
  FileText,
  Info,
  Check,
  Table as TableIcon
} from 'lucide-react';

interface Props {
  plan: PeriodicExamPlan;
}

// 知識點結構化規格對照表資料庫
function getConceptTableData(pointId: string) {
  if (pointId.includes('mat-g11-s1-m1-01')) {
    return {
      title: '材料體積、密度與比重計算標準對照表',
      headers: ['物理指標名稱', '計算定義與公式', '標準單位', '段考命題重點與陷阱'],
      rows: [
        ['真實比重 (True S.G.)', '乾燥質量 / 絕對真實體積 Vs', '無單位', '數值最大；完全排除任何開孔與閉孔體積'],
        ['表觀比重 (Apparent S.G.)', '乾燥質量 / (Vs + Vc 閉孔)', '無單位', '排除開口孔隙；CNS 486 骨材比重試驗標準'],
        ['總體比重 (Bulk S.G.)', '乾燥質量 / (Vs + Vc + Vo)', '無單位', '數值最小；包含顆粒全部開口與閉口孔隙'],
        ['孔隙率 (Porosity n)', '1 - (總體密度 ÷ 真實密度)', '%', '開孔主導吸水性，閉孔主導保溫隔熱與抗凍融性'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-m1-02')) {
    return {
      title: '波特蘭水泥四大主要熟料礦物特性矩陣表',
      headers: ['熟料名稱與代號', '化學組成與佔比', '水化發熱量 (J/g)', '主要工程貢獻與特性'],
      rows: [
        ['矽酸三鈣 (C3S)', '3CaO·SiO2 (50~70%)', '502 J/g (中高)', '水化反應快，主導 7~28 天早期強度與凝結'],
        ['矽酸二鈣 (C2S)', '2CaO·SiO2 (15~30%)', '260 J/g (最低)', '水化緩慢發熱低，主導 1 年以上晚期強度超越'],
        ['鋁酸三鈣 (C3A)', '3CaO·Al2O3 (5~10%)', '867 J/g (最高)', '初期急劇放熱；最不耐硫酸鹽；磨粉必加石膏緩凝'],
        ['鐵鋁酸四鈣 (C4AF)', '4CaO·Al2O3·Fe2O3 (5~15%)', '419 J/g (中等)', '賦予水泥深灰色；耐硫酸鹽性佳，強度貢獻最低'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-m1-03')) {
    return {
      title: '骨材四種含水狀態與拌合水修正對照表',
      headers: ['含水狀態名稱', '孔隙含水特徵', '表面水膜狀況', '配合設計拌合水量校正原則'],
      rows: [
        ['烘乾狀態 (Oven-dry)', '內部孔隙完全乾燥無水', '表面無水', '需額外補足「全部吸水量」至拌合水中'],
        ['氣乾狀態 (Air-dry)', '內部孔隙部分含水', '表面乾燥無水', '需補足「有效吸水量」(吸水率 - 氣乾含水率)'],
        ['面乾內飽和 (SSD)', '毛細孔完全飽和充滿水', '表面乾燥無水膜', '★ 所有配合設計配比之標準計算基準點！'],
        ['濕潤狀態 (Wet)', '內部孔隙完全飽和充滿水', '表面覆蓋游離水膜', '★ 拌合水量「必須扣除」骨材表面水重量！'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-m2-01')) {
    return {
      title: 'CNS 61 卜特蘭水泥五大類型與工程適用表',
      headers: ['水泥類型', '熟料成分特徵', '硬化特性與水化熱', '標準適用工程與環境'],
      rows: [
        ['第 I 型 (普通)', '標準基準配比', '標準水化發熱', '一般建築、梁柱板牆、道路鋪面'],
        ['第 II 型 (中度耐硫酸鹽)', 'C3A < 8%, C3S 中等', '中度水化熱', '港灣碼頭、重力擋土牆、地下基樁'],
        ['第 III 型 (早強)', 'C3S > 60%, 研磨極細', '早期發熱高、凝結快', '緊急搶修、寒冬施工、預力預鑄構件'],
        ['第 IV 型 (低熱)', 'C3S < 35%, C3A < 7%', '發熱極低且緩慢', '水庫大壩、巨積厚度基礎、大體積結構'],
        ['第 V 型 (抗硫酸鹽)', '嚴限 C3A < 5%', '抗化學侵蝕最強', '溫泉硫磺區、化工廠地面、海港碼頭'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-m2-02')) {
    return {
      title: 'CNS 786 維卡儀三項試驗標準規格對照表',
      headers: ['試驗項目', '採用附件規格', 'CNS 判定合格標準', '工程意義與防護重點'],
      rows: [
        ['標準稠度試驗', '直徑 10 mm 平頭滑桿', '下沉至底板上方 10±1 mm', '測定後續初凝終凝水灰比基準水量'],
        ['初凝時間試驗', '直徑 1 mm 圓平針', '針入度達 25 mm 處', '≧ 45 分鐘；混凝土澆置振動壓實之時效極限'],
        ['終凝時間試驗', '針端附加圓形金屬環', '圓針刺入但圓環無壓痕', '≦ 375 分鐘；試體具備初步硬化形狀支撐力'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-final-01')) {
    return {
      title: 'CNS 3090 混凝土氯離子容許含量限值對照表',
      headers: ['工程結構類別', '氯離子限值 (kg/m³)', '檢驗標準依據', '預防措施與耐久性維護'],
      rows: [
        ['一般鋼筋混凝土 (現行)', '≦ 0.15 kg/m³', 'CNS 3090 最新版', '嚴格禁用海砂，定期抽驗拌合水與洗砂氯含量'],
        ['預力混凝土 (PC 構件)', '≦ 0.15 kg/m³', '高張力鋼絞線防護', '防範高應力鋼材應力腐蝕破壞 (SCC)'],
        ['純無筋混凝土', '≦ 0.60 kg/m³', '無鋼筋銹蝕疑慮', '容許上限較寬，但仍需防止鹼骨材反應'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s1-final-02')) {
    return {
      title: 'CNS 486 骨材標準 9 號篩與細度模數計算表',
      headers: ['標準篩號', '篩孔尺寸 (mm)', '細骨材通過規定', '細度模數 (FM) 計算角色'],
      rows: [
        ['No. 4 (4 號篩)', '4.75 mm', '95 ~ 100%', '粗骨材與細骨材之法定分界門檻篩'],
        ['No. 8 / No. 16', '2.36 mm / 1.18 mm', '80~100% / 50~85%', '中等粒徑主幹，提供密實堆積骨架'],
        ['No. 50 / No. 100', '0.30 mm / 0.15 mm', '10~30% / 2~10%', '極細粒料，提供保水性與工作度避免泌水'],
        ['細度模數 (FM)', '指定 9 號篩累加 ÷ 100', '砂標準 2.3 ~ 3.1', 'FM 越小顆粒越細 (需水量多)，FM 越大顆粒越粗'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s2-m1-01')) {
    return {
      title: 'CNS 1176 混凝土坍度試驗操作規範表',
      headers: ['操作程序步驟', '標準規格與動作', '試驗時間限制', '異常現象與合格判定'],
      rows: [
        ['試模裝料充填', '分 3 層填入，每層插搗 25 次', '每層約等體積', '搗棒平頭圓端，末層料料高出模頂'],
        ['刮平與垂直提錐', '刮平頂部，雙手平穩垂直提起', '提錐耗時 5±2 秒', '全程需在 2.5 分鐘內完成量測'],
        ['落差量測判定', '倒置坍度錐橫置鋼尺量中心沉陷', '量測精度至 5 mm', '剪力坍度或崩塌坍度需重新拌合試驗'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s2-m1-02')) {
    return {
      title: '亞伯蘭水灰比定律 (Abrams\' Law) 與 7/28 天養護強度成長表',
      headers: ['水灰比 (W/C) / 養護天數', '抗壓強度關係 (fc)', '孔隙率與密實度', '工程實務控制標準'],
      rows: [
        ['水灰比 W/C 降低 (如 0.40)', '強度顯著提升 (反比曲線 fc = A/B^(W/C))', '水化凝膠密實，毛細孔隙率極低', '高強度混凝土 (HPC) 採用；流動性需強塑劑補足'],
        ['水灰比 W/C 升高 (如 0.65)', '強度大幅劣化衰減', '自由水蒸發形成連通孔洞與滲水通道', '嚴格禁止工地為圖好施工任意現場加水！'],
        ['養護 7 天強度 (f\'c7)', '達到 28 天規定強度之 65% ~ 70%', '初期 C3S 快速水化放熱結晶', '早期拆模強度判定依據 (側模及非承重構件)'],
        ['養護 28 天標準 (f\'c28)', '結構驗收與配合設計法定基準強度 (100%)', 'C2S 接續水化填塞微孔持續增強', 'CNS 1232 標準圓柱試體水中養護 28 天抗壓試驗'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s2-m2-01')) {
    return {
      title: 'ACI 配合設計絕對體積法計算七步表',
      headers: ['計算步驟', '核心決定參數', '查表與計算依據', '體積累加檢核'],
      rows: [
        ['步驟 1~2：坍度與骨材最大粒徑', '工作度與鋼筋淨間距', '結構斷面尺度 3/4 限制', '決定骨材級配與施工性'],
        ['步驟 3~4：拌合水量與水灰比', '設計抗壓強度 f&apos;c', 'Abrams 定律反比曲線', '計算得水泥量 Wc = 水量 ÷ W/C'],
        ['步驟 5~6：粗骨材量與空氣量', '粗骨材乾擣密度與細度模數', 'ACI 標準體積查表', '粗骨材重 Wca = 查表體積 × 乾擣密度'],
        ['步驟 7：細骨材絕對體積', '1.0 m³ - 所有材料體積', '水+水泥+空氣+粗骨材', '砂重 W_fa = V_砂 × 砂比重 × 1000'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s2-m2-02')) {
    return {
      title: 'CNS 560 鋼筋力學分級與竹節鋼筋標記規範表',
      headers: ['鋼筋牌號與代號', '降伏強度基準 (fy)', '抗拉強度 (fu)', '外觀竹節滾印標記與建築用途'],
      rows: [
        ['SD 280 (低碳鋼筋)', '≧ 280 N/mm² (2800 kgf/cm²)', '≧ 440 N/mm²', '標記代號「28」或無標記；用於樑柱箍筋、樓板剪力筋'],
        ['SD 420 (高拉力鋼筋)', '≧ 420 N/mm² (4200 kgf/cm²)', '≧ 560 N/mm²', '標記代號「42」或「●●」；用於樑柱主要受拉主筋'],
        ['SD 420W (耐震焊接鋼筋)', '420 ~ 540 N/mm² (設上限！)且 fu/fy ≧ 1.25', '≧ 560 N/mm²', '標記「42W」；具備高延展韌性，強震區樑柱抗震首選'],
        ['竹節鋼筋標記 (CNS)', '廠標 (如 T)+規格 (D25)+鋼種 (W)', 'D25 公稱直徑 25.4 mm (8號筋)', '三項標記依次滾印於鋼筋表面，每米連續重複'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s2-final-01')) {
    return {
      title: '木材乾縮異向性與水分狀態比較表',
      headers: ['收縮方向 / 水分狀態', '收縮率範圍 (%)', '相對比例', '建築構造變形防範'],
      rows: [
        ['弦向收縮 (Tangential)', '6.0 ~ 10.0%', '約 20', '最大！造成木板表面瓦凹裂翹曲變形'],
        ['徑向收縮 (Radial)', '3.0 ~ 5.0%', '約 10', '沿年輪直徑輻射方向，變形量為弦向之半'],
        ['縱向收縮 (Longitudinal)', '0.1 ~ 0.3%', '約 1', '最小！順紋方向尺寸極為穩定不易收縮'],
        ['纖維飽和點 (FSP ≈ 30%)', '細胞壁飽和但細胞腔空', '力學臨界點', '含水量 &lt; FSP 時，強度才開始上升並產生乾縮'],
      ]
    };
  }
  if (pointId.includes('mat-g11-s2-final-02')) {
    return {
      title: 'CNS 2260 瀝青三大物性試驗與屋頂五層防水工法對照表',
      headers: ['物性指標 / 防水層級', '試驗標準與物理定義', '合格標準與工程特徵', '建築工程防水防護要點'],
      rows: [
        ['針入度 (Penetration)', '100g 荷重標柱、25°C、5 秒下陷深度', '以 0.1 mm 為 1 單位 (如 60/70 號瀝青)', '數值越大代表瀝青越軟；台灣常溫多選 60-70 或 85-100'],
        ['軟化點 (Softening Point)', '環球法試驗鋼珠下墜 25.4 mm 之溫度', '一般實用標準 45°C ~ 65°C', '軟化點過低時夏日屋頂瀝青易產生流淌融變'],
        ['延度 (Ductility)', '25°C、拉伸速度 5 cm/min 之延伸長度', '標準要求 ≧ 100 cm 不斷裂', '低溫變形不脆裂之重要低溫抗變指標'],
        ['屋頂五層瀝青油毛氈工法', '底漆 ➜ 熱瀝青 ➜ 油毛氈 ➜ 熱瀝青 ➜ 覆蓋保護層', 'CNS 油毛氈交錯搭接 ≧ 10 cm', '各層間熱瀝青塗佈需均勻飽滿無氣泡起鼓'],
      ]
    };
  }
  // 測量科
  if (pointId.includes('sur-g11-s1-m1-01')) {
    return {
      title: '測量誤差分類與消除對策比較表',
      headers: ['誤差類型', '產生原因', '數值規律與特徵', '消除與減弱對策'],
      rows: [
        ['系統誤差 (Systematic)', '儀器製造缺陷、物理環境規律', '具固定正負號與累積性', '檢校儀器、對稱觀測、公式改正'],
        ['偶然誤差 (Accidental)', '觀測者感官極限、微小氣流擾動', '符合常態分佈鐘形曲線', '增加觀測次數取算術平均值'],
        ['粗差 (Gross Error / Blunder)', '看錯讀數、記錯數字、立尺傾倒', '數值巨大無規律', '雙人覆核、閉合條件檢核、重測剔除'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s1-m1-02')) {
    return {
      title: '鋼卷尺四項標準物理改正公式與正負號表',
      headers: ['改正項目名稱', '計算公式', '正負號判定規則', '考前 30 秒記憶口訣'],
      rows: [
        ['尺長改正 (Cl)', 'Cl = (l - l₀) × L / l₀', '名義長 l > 標準長 l₀ ➜ 正號', '尺太長加、尺太短減'],
        ['溫度改正 (Ct)', 'Ct = α × (T - T₀) × L', '量測溫度 T > 標準溫 T₀ ➜ 正號', '熱脹加、冷縮減 (α=0.0000115)'],
        ['拉力改正 (Cp)', 'Cp = (P - P₀) × L / (A·E)', '施加拉力 P > 標準拉力 P₀ ➜ 正號', '拉力過大加、拉力不足減'],
        ['懸垂垂度改正 (Cs)', 'Cs = - w²·L³ / (24·P²)', '★ 恆為「負號」(-)', '下垂讀數必偏大，改正一律減！'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s1-final-01')) {
    return {
      title: '水準儀兩差平衡與檢校順序表',
      headers: ['兩差項目 / 檢校項目', '產生原因與公式', '消除對策與消除能力', '檢校順序與幾何鐵律'],
      rows: [
        ['地球曲率差 (C)', '地面為曲面使視線抬高，C = 0.0785·K² (m)', '★ 前後視距等長 (d_BS = d_FS) 完全消除', '檢校第一步：圓盒水準器軸 // 垂直軸'],
        ['大氣折光差 (R)', '大氣密度垂直遞減光線下彎，R = 0.011·K²', '★ 前後視距等長完全消除', '檢校第二步：十字絲十字交點十字線調整'],
        ['兩差總合 (C - R)', '兩差綜合影響 Δh = 0.0675·K² (m)', '只要前後視距相等，兩差自動抵消！', '檢校第三步：水準管軸 // 視準軸 (i 角檢校)'],
        ['轉點 (TP) 選定', '兩腳架前後距盡量維持 30~50m 等距', '立尺於堅硬固定點避免下陷', '閉合水準路線往返觀測消減單向累積偏差'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s1-final-02')) {
    return {
      title: '水準測量計算法則（儀高法 vs 高差法）與閉合差容許限值表',
      headers: ['水準計算維度', '儀高法 (HI Method)', '高差法 (Rise and Fall Method)', '計算驗算與平差準則'],
      rows: [
        ['基本計算法則', '視線高 HI = 基準點高程 + 後視 BS', '前後點高差 Δh = 後視 BS - 前視 FS', 'ΣBS - ΣFS = 終點高程 - 起點高程 (算術檢核)'],
        ['中視點 (IS) 高程求法', '高程 = HI - 中視讀數 IS', '高程 = 前點高程 ± 逐點高差 Δh', '儀高法求多個中間地面高程速度極快！'],
        ['算術檢核能力', '僅能檢核轉點 (TP)，漏檢中視點 (IS)', '能完整檢核所有中視點與轉點高差', '儀高法中視點算錯不會影響後續轉點高程'],
        ['閉合差容許公差', '一般工程水準：±20 mm √K (K 為公里數)', '高精度精密水準：±4 mm √K', '閉合差在容許值內依距離或測站數反號等比分配'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s2-m1-01')) {
    return {
      title: '光學經緯儀四軸幾何關係與檢校條件表',
      headers: ['四軸名稱與符號', '正確幾何條件', '未滿足時之誤差名稱', '盤左盤右 (正倒鏡) 消除效果'],
      rows: [
        ['垂直軸 (VV) 與水準管軸 (LL)', '水準管軸 ⊥ 垂直軸 (LL ⊥ VV)', '垂直軸傾斜誤差 (v 誤差)', '★ 盤左盤右「無法消除」！必先調平！'],
        ['水平軸 (HH) 與垂直軸 (VV)', '水平軸 ⊥ 垂直軸 (HH ⊥ VV)', '水平軸誤差 (i 誤差)', '取正倒鏡平均可完全消除 (仰角大時顯著)'],
        ['視準軸 (CC) 與水平軸 (HH)', '視準軸 ⊥ 水平軸 (CC ⊥ HH)', '視準軸誤差 (c 誤差)', '取正倒鏡平均可完全消除'],
        ['光學對點器軸與垂直軸', '對點器視準線與垂直軸同軸重合', '對中偏差粗差', '轉動照準部 180° 檢查分劃圈對準基準點'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s2-m1-02')) {
    return {
      title: '經緯儀測回法盤左盤右三軸誤差消減特徵矩陣表',
      headers: ['經緯儀儀器誤差項目', '三軸空間幾何缺陷', '盤左 (正鏡) / 盤右 (倒鏡) 觀測效果', '誤差消減與計算抵消特徵'],
      rows: [
        ['視準軸誤差 (c 誤差)', '視準軸不垂直於水平軸', '盤左偏角 +c / 盤右偏角 -c', '★ 取盤左盤右平均值 (L+R±180°)/2 可「完全消除」'],
        ['水平軸誤差 (i 誤差)', '水平軸不垂直於垂直軸', '盤左傾角 +i / 盤右傾角 -i', '★ 取盤左盤右平均值可「完全消除」；觀測仰角越高影響越大'],
        ['度盤偏心差 (e 誤差)', '度盤分度中心與照準儀旋轉中心不重合', '兩對徑讀數差 180°+e 與 180°-e', '★ 讀取兩對稱對徑游標 (或雙側度盤) 取平均可消除'],
        ['垂直軸傾斜誤差 (v 誤差)', '水準管軸未整平使垂直軸傾斜', '隨照準方向不同而改變', '★ 無法藉由盤左盤右平均消減！必由精密水準管校平！'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s2-m2-01')) {
    return {
      title: '閉合導線角度閉合差平差與坐標計算六步表',
      headers: ['計算步驟', '公式與計算法則', '精度檢核標準', '考前防護要點'],
      rows: [
        ['步序 1：角度內角和檢核', '理論內角和 = (n - 2) × 180°', '閉合差 fβ = Σ觀測角 - 理論和', '閉合差容許限值 ±f_tol = ±60" √n'],
        ['步序 2：角度閉合差平差', '各角改正數 v = -fβ / n', '反號平均分配至各內角', '改正後各內角代數和必嚴格等於理論和'],
        ['步序 3~4：推算方位角與增量', '前邊方位角 = 後邊方位角 ± 180° + 改正角', '緯距 ΔX = D·cosθ, 經距 ΔY = D·sinθ', '南北向為緯距 (cos)，東西向為經距 (sin)'],
        ['步序 5~6：導線平差與坐標推求', 'fx = ΣΔX, fy = ΣΔY ➜ 導線精度 K = D_sum / √(fx²+fy²)', 'Bowditch 羅盤儀法按邊長比反號分配', '逐站累加改正後經緯距即得各測點精密坐標'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s2-m2-02')) {
    return {
      title: '閉合導線坐標閉合差、容許限值與精度等級評定標準表',
      headers: ['導線精度等級', '閉合差容許限值 (ftol)', '導線精度 (1/K)', '工程適用範圍與平差準則'],
      rows: [
        ['一級導線 (特等工程)', '角度閉合差 ±10" √n', '精度 ≧ 1 / 10000 (0.01%)', '市區高精度控制網、捷運與高鐵基準線'],
        ['二級導線 (常規建築)', '角度閉合差 ±20" √n', '精度 ≧ 1 / 5000 (0.02%)', '建築工程放樣、土木基地主要控制網'],
        ['三級導線 (簡易測量)', '角度閉合差 ±30" √n', '精度 ≧ 1 / 3000 (0.033%)', '簡易碎部測量、農地界址地籍測量'],
        ['羅盤儀平差分配律', 'C_xi = -fx · (di / ΣD)', 'C_yi = -fy · (di / ΣD)', '改正數與邊長成正比，反號等比平差'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s2-final-01')) {
    return {
      title: '多邊形坐標測量與鞋帶公式面積計算法則表',
      headers: ['坐標面積項目', '數學表達式 / 演算法', '幾何意義', '計算注意與防錯技巧'],
      rows: [
        ['鞋帶公式 (Gauss)', '2A = |Σ(xi·y_{i+1} - x_{i+1}·yi)|', '多邊形向坐標軸梯形投影代數疊加', '第一點坐標在最後一列必須「重複抄寫一次」！'],
        ['頂點排列方向', '依逆時鐘方向 (CCW) 排列頂點', '代數和為「正值 (+)」', '若依順時鐘 (CW) 排列，算得面積值為「負值 (-)」取絕對值即可'],
        ['三邊形公式特例', '2A = |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|', '行列式展開三階降階', '三點共線時面積恰好為 0'],
        ['土地分割應用', '由總面積推算特定分割線位置', '坐標反算法', '將待定邊視為未知數列出二次或一次方程求解'],
      ]
    };
  }
  if (pointId.includes('sur-g11-s2-final-02')) {
    return {
      title: '土方計算方法（平均端面法 vs 稜台公式 vs 方格網法）對照表',
      headers: ['土方計算方法', '數學計算公式', '適用工況與地形特徵', '土石方體積計算誤差傾向'],
      rows: [
        ['平均端面法 (End Area)', 'V = (A1 + A2) / 2 × L', '相鄰兩斷面面積相差不大之道路鐵路', '計算極為簡便，但體積計算值「恆偏大」！'],
        ['稜台公式 (Prismoidal / Simpson)', 'V = L / 6 × (A1 + 4·Am + A2)', '斷面形狀變化劇烈、高精度土石方驗收', 'Am 為中斷面面積 (非兩端面積平均)；精確無誤差'],
        ['端面法修正量 (Prismoidal Cor.)', 'Cp = L / 12 × (c1 - c2)(w1 - w2)', 'V_true = V_end_area - Cp', '驗算端面法與稜台法之偏差量，恆減去修正數'],
        ['方格網法 (Grid Method)', 'V = a² / 4 × (Σh1 + 2Σh2 + 3Σh3 + 4Σh4)', '大面積建築基地平整、球場或停車場', '按每個角點被 1~4 個方格共用次數加權累加'],
      ]
    };
  }
  // 數學 C
  if (pointId.includes('math-g11-s1-m1-01')) {
    return {
      title: '空間坐標系兩點距離與對稱投影特徵表',
      headers: ['投影或對稱項目', '坐標變化特徵 (以 P(x, y, z) 為例)', '幾何距離計算公式', '考前 10 秒速記口訣'],
      rows: [
        ['投射至 xy 平面', '(x, y, 0)', '投影點距離原點 √(x² + y²)', '投射到誰，誰保留，其餘變 0'],
        ['投射至 x 軸', '(x, 0, 0)', '點到 x 軸垂直距離 d = √(y² + z²)', '求軸距，開根號另外兩坐標平方和'],
        ['對 xy 平面對稱點', '(x, y, -z)', '空間鏡射變換', '對稱誰，誰不變，另一軸變號'],
        ['對原點對稱點', '(-x, -y, -z)', '中心對稱', '三坐標全部變相反數'],
      ]
    };
  }
  if (pointId.includes('math-g11-s1-m1-02')) {
    return {
      title: '空間球面標準式與平面相交圓幾何特徵表',
      headers: ['幾何方程式 / 關係', '標準代數表達式', '幾何條件判定', '解題關鍵步序'],
      rows: [
        ['球面標準方程式', '(x - h)² + (y - k)² + (z - l)² = R²', '球心 C(h, k, l)，半徑 R', '配方法化簡一般式 x²+y²+z²+dx+ey+fz+g=0'],
        ['球與平面相割 (相交一圓)', '圓心即球心向平面所作垂足', '球心到平面距離 d < R', '截圓半徑 r = √(R² - d²) (勾股定理)'],
        ['球與平面相切', '切點為唯一交點', '球心到平面距離 d = R', '平面法向量平行於切點與球心連線'],
        ['球與平面相離', '無交點', '球心到平面距離 d > R', '點面距離大於半徑'],
      ]
    };
  }
  if (pointId.includes('math-g11-s1-m2-01')) {
    return {
      title: '空間向量外積右手定則與平面積體積計算法則表',
      headers: ['外積幾何項目', '公式與行列式表達式', '幾何物理意義', '運算法則特點'],
      rows: [
        ['外積向量 u × v', '|i j k; u1 u2 u3; v1 v2 v3|', '同時正交於向量 u 與 v 之公垂向量', '反交換律：u × v = - (v × u)！'],
        ['平行四邊形面積', 'Area = |u × v|', 'u 與 v 兩向量張出之平面積', '三角形面積即為 |u × v| / 2'],
        ['平行六面體體積', 'Volume = |(u × v) · w| (純量三重積)', 'u, v, w 三向量張出之立體體積', '三向量共平面時體積為 0 (三重積為 0)'],
        ['平面的法向量 n', 'n = AB × AC', '平面上相異兩向量外積即為法向量', '得平面式 ax + by + cz + d = 0'],
      ]
    };
  }
  if (pointId.includes('math-g11-s1-m2-02')) {
    return {
      title: '空間外積公垂向量與兩歪斜線距離計算法則表',
      headers: ['空間解析幾何維度', '公垂向量外積法 (Cross Product)', '平行平面距離法 (Parallel Planes)', '投影長度與行列式公式'],
      rows: [
        ['公垂向量方向 n', 'n = v1 × v2 (外積)', '平面方程式法向量法', '公垂向量 n 同時垂直於兩歪斜線之方向向量'],
        ['距離計算標量公式', 'd = |AB · n| / |n|', 'd = |ax0 + by0 + cz0 + d| / √(a²+b²+c²)', '以點 A, B 連線向量向單位法向量投影'],
        ['平行六面體純量三重積', '體積 Vol = |[v1, v2, AB]| = |(v1 × v2) · AB|', '底面積 Area = |v1 × v2|', '柱體高即兩線距離 d = 體積 ÷ 底面積'],
        ['公垂線段兩端點求法', '參數式設 P(t) on L1, Q(s) on L2', 'PQ · v1 = 0 且 PQ · v2 = 0', '解聯立二元一次方程組求得參數 t 與 s 即得兩垂足'],
      ]
    };
  }
  if (pointId.includes('math-g11-s2-m1-01')) {
    return {
      title: '拋物線四大標準式幾何特性對照表',
      headers: ['拋物線標準式', '對稱軸與開口方向', '焦點坐標 F', '準線方程式 L'],
      rows: [
        ['y² = 4cx (c > 0)', 'x 軸 (y=0)，開口向右', 'F(c, 0)', 'L: x = -c (正焦弦長 = 4c)'],
        ['y² = -4cx (c > 0)', 'x 軸 (y=0)，開口向左', 'F(-c, 0)', 'L: x = c (正焦弦長 = 4c)'],
        ['x² = 4cy (c > 0)', 'y 軸 (x=0)，開口向上', 'F(0, c)', 'L: y = -c (正焦弦長 = 4c)'],
        ['x² = -4cy (c > 0)', 'y 軸 (x=0)，開口向下', 'F(0, -c)', 'L: y = c (正焦弦長 = 4c)'],
      ]
    };
  }
  if (pointId.includes('math-g11-s2-m1-02')) {
    return {
      title: '拋物線光學性質、切線方程式與焦半徑幾何對照表',
      headers: ['幾何力學指標', '數學公式 / 表達式', '幾何物理意義', '解題破題神技'],
      rows: [
        ['切線方程式 (代入法)', 'y·y0 = 2c(x + x0) (在 P 點切線)', '二次項變乘積、一次項變平均', '任何在曲線上的點 P(x0, y0) 秒求切線'],
        ['斜率 m 之切線式', 'y = mx + c/m (m ≠ 0)', '判別式 D = 0 推導所得', '已知切線斜率求切點坐標之專用公式'],
        ['焦半徑定理 (PF)', 'r = PF = |x0 + c| (左右開口)', '等於動點到準線之垂直距離 d(P, L)', '避開開根號兩點距離，直接用準線距秒殺'],
        ['光學性質反射定律', '平行軸射入 ➜ 必穿過焦點 F', '焦點射出 ➜ 必平行對稱軸射出', '探照燈、汽車車燈反射面、微波天線原理'],
      ]
    };
  }
  if (pointId.includes('math-g11-s2-m2-01')) {
    return {
      title: '橢圓 vs 雙曲線核心幾何性質對照表',
      headers: ['圓錐曲線幾何項', '橢圓 (Ellipse)', '雙曲線 (Hyperbola)', '記憶與解題神技'],
      rows: [
        ['幾何軌跡定義', '動點到兩焦點距離「和」固定 (2a)', '動點到兩焦點距離「差之絕對值」固定 (2a)', '和為橢圓，差為雙曲'],
        ['三常數 abc 關係', 'a² ＝ b² ＋ c² (a 最長)', 'c² ＝ a² ＋ b² (c 最長)', '橢圓長軸 a 最大，雙曲焦點 c 最大'],
        ['正焦弦長公式', '2b² / a', '2b² / a', '兩者公式形式完全相同！'],
        ['漸近線方程式', '無漸近線', '把標準式右邊常數項「1」改為「0」', '因式分解立即得到兩漸近線！'],
      ]
    };
  }
  if (pointId.includes('math-g11-s2-m2-02')) {
    return {
      title: '雙曲線漸近線、共軛雙曲線與等軸雙曲線判別表',
      headers: ['雙曲線特殊類型', '方程式標準式', '幾何漸近線特徵', '段考常考焦點與陷阱'],
      rows: [
        ['兩條漸近線方程式', '(x-h)²/a² - (y-k)²/b² = 0', 'y - k = ± (b/a)(x - h)', '直接將右側常數項 1 改為 0 因式分解'],
        ['共軛雙曲線 (Conjugate)', '(y-k)²/b² - (x-h)²/a² = 1', '貫軸與共軛軸互換，共用漸近線！', '四個焦點共圓 (半徑 R = c)，c² = a² + b²'],
        ['等軸雙曲線 (Rectangular)', 'x² - y² = a² (a = b)', '兩漸近線互相垂直正交 (夾角 90°)', '離心率 e 恆等於 √2！建築雙曲薄殼屋頂'],
        ['直角雙曲線反比例', 'xy = k (k ≠ 0)', '坐標軸 x, y 即為兩漸近線', '旋轉 45° 變換之等軸雙曲線'],
      ]
    };
  }
  // 英文科
  if (pointId.includes('eng-g11-s1-m1-01')) {
    return {
      title: '關係代名詞四大類型與限定非限定子句比較表',
      headers: ['關係代名詞', '先行詞性質與格位', '限定用法 (無逗號)', '非限定用法 (有逗號 ,)'],
      rows: [
        ['who / whom', '先行詞為「人」(主格 / 受格)', 'The architect who designed this...', ', who designed this (補充說明)'],
        ['which', '先行詞為「事物」或前述整件事', 'The tower which was built in 1990...', ', which was built... 或指稱前述整個句子'],
        ['that', '先行詞為人或事物；最高級/序數', '★ 只能用於限定子句！', '★ 嚴格禁止加在逗號後面！禁接在介系詞後！'],
        ['whose', '表示所有格 (……的)', 'The building whose roof is curved...', ', whose roof is curved...'],
      ]
    };
  }
  if (pointId.includes('eng-g11-s1-m1-02')) {
    return {
      title: '關係代名詞 vs 關係副詞 (where / when / why) 與 what 轉換表',
      headers: ['關係詞項目', '先行詞特徵', '子句結構完整度', '介系詞等價代換公式'],
      rows: [
        ['where (地點關係副詞)', '地點名詞 (the building, the city)', '★ 後面為「完整子句」！', 'where = in / at / on which'],
        ['when (時間關係副詞)', '時間名詞 (the day, the year)', '★ 後面為「完整子句」！', 'when = at / on / in which'],
        ['why (理由關係副詞)', '理由名詞 (the reason)', '★ 後面為「完整子句」！', 'why = for which'],
        ['what (複合關係代名詞)', '★ 前面「絕對沒有先行詞」！', '後面子句缺主詞或受詞', 'what = the thing(s) which'],
      ]
    };
  }
  if (pointId.includes('eng-g11-s2-m1-01')) {
    return {
      title: '假設語氣三大經典句型與時態倒退規則表',
      headers: ['假設情境類型', 'If 從屬子句動詞時態', '主要子句動詞時態', '省略 If 倒裝句型結構'],
      rows: [
        ['與現在事實相反', '動詞過去式 (be 動詞一律用 were)', 'would / could / should / might + 原形動詞 V', 'Were I the architect, I would...'],
        ['與過去事實相反', '動詞過去完成式 (had + p.p.)', 'would / could / should / might + have + p.p.', 'Had we used SD420, it wouldn\'t have collapsed.'],
        ['與未來可能相反', 'were to + 原形動詞 / should + V', 'would + 原形動詞 / 祈使句', 'Should it rain tomorrow, the pouring will stop.'],
        ['but for / without', 'Without rebar, concrete would crack.', '等同 If it were not for / If it had not been for', '名詞片語代換條件子句之高頻統測題型'],
      ]
    };
  }
  if (pointId.includes('eng-g11-s2-m1-02')) {
    return {
      title: '分詞構句三大簡化原則與主動 V-ing / 被動 p.p. 判別表',
      headers: ['文法簡化維度', '主動分詞構句 (Present Participle)', '被動分詞構句 (Past Participle)', '三大考點 SOP 步驟與陷阱防護'],
      rows: [
        ['步驟 1：省略連接詞', '省略 When, Because, Although, If...', '省略 When, Because, Although, If...', '保留連接詞時（如 While driving）強調時間或讓步語意'],
        ['步驟 2：主詞同一性檢核', '從屬子句主詞與主句主詞相同 ➜ 省略', '從屬子句主詞與主句主詞相同 ➜ 省略', '★ 主詞不同時不可省略！保留獨立主詞稱為「獨立分詞構句」'],
        ['步驟 3：動詞轉換為分詞', '動詞為主動關係 ➜ 改為「V-ing」', '動詞為被動 (be + p.p.) ➜ 省略 be 改為「p.p.」', '動詞否定時，否定詞 Not/Never 恆置於分詞「最前方」'],
        ['完成分詞 (Having p.p.)', 'Having finished the drawing, he slept.', 'Having been repaired, the bridge opened.', '從屬子句動作「早於主句動作發生」時必須使用 Having p.p.'],
      ]
    };
  }
  if (pointId.includes('eng-g11-s2-m2-01')) {
    return {
      title: '否定副詞置於句首之倒裝句結構對照表',
      headers: ['否定副詞 / 片語', '倒裝句文法公式', '正常直述句結構', '語氣與建築考題範例'],
      rows: [
        ['Not only ... but also', 'Not only + 助動詞/be + S + V, but also...', 'S + not only + V..., but also...', 'Not only did the beam fail, but the slab cracked.'],
        ['Never / Seldom / Rarely', 'Never + have/has/did + S + p.p./V', 'S + never/seldom + V', 'Seldom has our team seen such precision.'],
        ['Under no circumstances', 'Under no circumstances + should + S + V', 'S + should under no circumstances...', '★ 絕不、在任何情況下都不 (統測常考法規禁令)'],
        ['Hardly ... when / No sooner ... than', 'No sooner + had + S + p.p. than + S + V-ed', '剛……就…… (時間先後倒裝)', 'No sooner had the cement cured than the load arrived.'],
      ]
    };
  }
  if (pointId.includes('eng-g11-s2-m2-02')) {
    return {
      title: '完全倒裝 (Full) vs 部分倒裝 (Partial) 句型結構對照表',
      headers: ['倒裝句類型', '觸發條件 / 置首詞', '語序結構公式', '必考考題範例與例外陷阱'],
      rows: [
        ['完全倒裝 (地方副詞)', '地方副詞 (Here, There) / 介系詞片語', '地方詞 + 全部動詞 (V) + 名詞主詞 (S)', 'On the corner stands a museum.'],
        ['★ 完全倒裝陷阱', '主詞為「代名詞 (he, she, it)」時', '★ 絕對不倒裝！仍為 S + V！', 'Here it comes! (代名詞 it 嚴禁倒裝)'],
        ['部分倒裝 (否定副詞)', 'Never, Seldom, Not only, Little, Scarcely', '否定詞 + 助動詞 (Aux) + S + 原形 V', 'Seldom do we see such modern architecture.'],
        ['So / Neither 簡答倒裝', '表附和亦然 (也/也不)', 'So + 助動詞 + S / Neither + 助動詞 + S', 'She likes design, and so do I.'],
      ]
    };
  }
  // 國文科
  if (pointId.includes('chi-g11-s1-m1-01')) {
    return {
      title: '蘇軾〈赤壁賦〉主客問答與宇宙人生哲理對照表',
      headers: ['哲理思維維度', '客人之悲 (消極虛無視角)', '蘇子之達 (超脫豁達視角)', '建築心靈與文學審美意境'],
      rows: [
        ['變的觀點 (時間流逝)', '「寄蜉蝣於天地，渺滄海之一粟」', '「逝者如斯，而未嘗往也」', '從變的角度看，天地不能以一瞬，萬物皆無常'],
        ['不變的觀點 (本質永恆)', '「哀吾生之須臾，羨長江之無窮」', '「盈虛者如彼，而卒莫消長也」', '從不變的角度看，物與我皆無盡，無須羨慕造化'],
        ['物各其主的處世', '「知不可乎驟得，託遺響於悲風」', '「天地之間，物各有主，苟非吾之所有，雖一毫而莫取」', '隨遇而安，安分守己，不貪求非分外物'],
        ['江山風月之共享', '英雄消逝，功業成空 (曹操固一世之雄，而今安在哉)', '「江上之清風，山間之明月，耳得之而為聲，目遇之而成色」', '造物者之無盡藏，取之無禁用之不竭之天人合一境'],
      ]
    };
  }
  if (pointId.includes('chi-g11-s1-m1-02')) {
    return {
      title: '中國歷代賦體（騷賦/漢賦/俳賦/文賦/律賦）特徵與音律演變表',
      headers: ['賦體流派類別', '時代代表作品', '句式音律形式特徵', '文學內容核心取向'],
      rows: [
        ['騷賦 (楚辭體)', '戰國屈原〈離騷〉、〈九歌〉', '多用「兮」字，句式長短錯落', '抒情言志、託物寄懷之浪漫主義'],
        ['古賦 (漢大賦)', '漢代司馬相如〈子虛賦〉、〈上林賦〉', '鋪採摛文、堆砌典故生僻字', '勸百諷一、潤色鴻業、歌頌宮廷壯麗'],
        ['俳賦 (駢賦)', '六朝鮑照〈蕪城賦〉、庾信〈哀江南賦〉', '講究四六駢偶、音律對仗苛刻', '重形式聲律、藻飾綺麗、情思偏狹'],
        ['文賦 (散文賦)', '唐宋杜牧〈阿房宮賦〉、蘇軾〈赤壁賦〉', '★ 駢散相間、化賦為文、押韻自由', '融入古文筆法與深厚哲理，思想深度最高'],
        ['律賦', '唐代科舉考試試帖賦', '嚴格限制字數、對仗與用韻', '專為科舉應試、內容空洞缺乏真情'],
      ]
    };
  }
  if (pointId.includes('chi-g11-s1-m2-01')) {
    return {
      title: '韓愈〈師說〉三大正反對比論證對照表',
      headers: ['對比論證組別', '古之聖人 / 賢者作為', '今之眾人 / 鄙者作為', '韓愈嚴正批判結論'],
      rows: [
        ['第一組：聖人 vs 眾人', '古之聖人，其出人也遠矣，猶且從師而問焉', '今之眾人，其下聖人也亦遠矣，而恥學於師', '「是故聖益聖，愚益愚，其皆出於此乎！」'],
        ['第二組：擇師教子 vs 自身恥師', '愛其子，擇師而教之', '於其身也，則恥師焉，惑矣！', '「小學而大遺，吾未見其明也」 (因小失大)'],
        ['第三組：巫醫樂師百工 vs 士大夫', '巫醫樂師百工之人，不恥相師', '士大夫之族，曰師曰弟子者，則群聚而笑之', '「師道之不復，可知矣！巫醫樂師百工之人，君子不齒，今其智乃反不能及」'],
        ['全篇核心論點', '「無貴無賤，無長無少，道之所存，師之所存也」', '弟子不必不如師，師不必賢於弟子', '打破階級年齡成見，提倡以「道」為依歸之求學精神'],
      ]
    };
  }
  if (pointId.includes('chi-g11-s1-m2-02')) {
    return {
      title: '荀子〈勸學〉連珠設喻推論架構與正反對比象徵表',
      headers: ['篇章論證維度', '正面喻體與論述意象', '反面喻體與對照意象', '建築與學思修持深刻寓意'],
      rows: [
        ['第一層：學習之意義與轉變', '青出於藍、冰寒於水、木受繩則直', '金就礪則利、知明而行無過', '人工淬鍊勝過天賦自然；規矩準繩塑造方正材木'],
        ['第二層：學習之功效與善假', '登高而招 (見者遠)、順風而呼 (聞者彰)', '假輿馬 (致千里)、假舟楫 (絕江河)', '「君子生非異也，善假於物也」；善用建築工法工具器物'],
        ['第三層：學習之累積與堅持', '積土成山 (風雨興)、積水成淵 (蛟龍生)', '不積跬步 (無以至千里)、不積小流', '建築基礎由每一粒砂石水泥凝聚；量變引起質變'],
        ['第四層：學習之專注與對比', '騏驥一躍 (不能十步) vs 駑馬十駕 (功在不舍)', '蚓無爪牙之利 (用心一也) vs 蟹六跪二螯 (用心躁也)', '心無旁騖方能成就巨匠神工；批判心浮氣躁'],
      ]
    };
  }
  if (pointId.includes('chi-g11-s2-m1-01')) {
    return {
      title: '歸有光〈項脊軒志〉空間變遷與深情意象表',
      headers: ['項脊軒空間變遷階段', '室內外環境光影與營建特徵', '涉及親情人物與生活細節', '「多可喜，亦多可悲」情感主軸'],
      rows: [
        ['修葺前：荒蕪破敗', '「室僅方丈，可容一人居；雨澤下注，泥濘無處下足」', '百年老屋，塵泥滲漉，陰暗閉塞', '家道衰落之縮影，生活環境極度艱困'],
        ['修葺後：清雅明亮', '「借書滿架，偃仰嘯歌，冥然兀坐，萬籟有聲」', '闢牖開窗通風採光，修葺粉刷，植竹雜花', '讀書志向之寄託，心境澄澈平靜之樂'],
        ['家族分崩離析', '諸父異爨，內外多置小門牆往往而是', '客踰庖而宴，雞棲於廳，犬吠客舟', '庭院空間被零碎切割，感嘆宗族瓦解親情淡漠'],
        ['深情悼亡回憶', '先妣扣門叩問、老嫗述說先母撫愛、祖母持象笏勉勵', '「吾兒，久不見若影，何竟日默默在此」', '枇杷樹亭亭如蓋矣；將深沉思念寄託於草木永生'],
      ]
    };
  }
  if (pointId.includes('chi-g11-s2-m1-02')) {
    return {
      title: '明代散文流派（前後七子 vs 唐宋派 vs 公安派）思想與寫作特色表',
      headers: ['明代文學流派', '代表宗師人物', '文論主張口號', '寫作風格特色與歷史地位'],
      rows: [
        ['前後七子 (擬古派)', '李夢陽、何景明 (前七子)；李攀龍、王世貞 (後七子)', '「文必秦漢，詩必盛唐」', '重形式摹擬、剽竊古人字句，缺乏真情實感'],
        ['唐宋派 (歸有光)', '歸有光 (震川先生)、唐順之、茅坤', '宗韓柳歐三蘇，文以載道情真意切', '「不事雕琢而自有風致」，擅寫家庭生活瑣事，開桐城派先河'],
        ['公安派 (性靈派)', '袁宗道、袁宏道、袁中道 (公安三袁)', '「獨抒性靈，不拘格套」', '反抗古文教條、清新活潑，晚明小品文代表'],
      ]
    };
  }

  // 高一力學與高三模考力學
  if (pointId.includes('mec-g10-s1-m1-01')) {
    return {
      title: '平面共點力系平衡條件與拉密定理速算對照表',
      headers: ['力系法則項目', '數學表達式 / 充要條件', '幾何向量圖特徵', '解題關鍵與適用邊界'],
      rows: [
        ['合力為零條件', 'ΣFx = 0, ΣFy = 0 (R = 0)', '所有外力分解正交投影代數和為零', '剛體維持靜止之最通用平衡準則'],
        ['拉密定理 (Lami)', 'P/sinα = Q/sinβ = R/sinγ', '三力首尾相接形成封閉三角形', '★ 嚴格限定「僅適用三力共點平衡」！'],
        ['30°-60°-90° 三角形', '邊長比 1 : √3 : 2', '30° 對應邊長 1，60° 對應 √3', '繩索張力直角平衡之 10 秒秒殺技巧'],
        ['45°-45°-90° 三角形', '邊長比 1 : 1 : √2', '等腰直角三角形，分力大小相等', '兩正交繩張力相等等效對稱結構'],
      ]
    };
  }
  if (pointId.includes('mec-g10-s1-m2-01')) {
    return {
      title: '伐里農力矩定理與力偶特性矩陣表',
      headers: ['力矩力偶維度', '公式定理與物理本質', '向量空間自由度', '段考命題重點與陷阱'],
      rows: [
        ['力矩 (Moment)', 'Mo = F × d (垂直臂長)', '滑動向量 (對特定轉動點有效)', '右手定則逆時鐘為正；斜力先正交分解'],
        ['伐里農定理', 'Mo = Σ(分力之矩) = Fy·x - Fx·y', '坐標正交投影等效轉化', '避開計算傾斜力臂，直接用正交坐標算'],
        ['力偶 (Couple)', 'M = F × d (二平行反向等值力)', '★ 自由向量 (全場等效！)', '對平面任意點之力矩均相同；單力無法平衡'],
        ['支承反力取矩點', 'ΣM_鉸點 = 0', '消除通過該點之全部未知力', '優先選擇未知反力最多之鉸支承取矩'],
      ]
    };
  }
  if (pointId.includes('mec-g10-s1-final-01')) {
    return {
      title: '截面形心加權與摩擦滑動傾覆臨界判定表',
      headers: ['幾何力學指標', '計算公式與數值極限', '物理幾何意涵', '常見考查題型與扣分防護'],
      rows: [
        ['組合形心 ȳ', 'Σ(Ai · yi) / ΣAi', '截面幾何面積之平衡加權中心', '挖孔開洞一律以「負面積 (-A)」代入計算'],
        ['最大靜摩擦力 fs', 'fs = μs · N (正向正壓力)', '物體即將產生滑動之極限臨界值', '未滑動時摩擦力「等於外加推力 P」！'],
        ['斜面自鎖角 φs', 'tan(φs) = μs (臨界傾角)', '斜面傾角 θ ≤ φs 時物體自鎖不滑', '滑動臨界 tanθ = μs，與物體重量 W 無關'],
        ['滑動 vs 傾覆', 'Pslide = fs vs Ptip: ΣMcorner=0', '臨界推力取「較小者」為實際破壞', '正向力反力 N 移至支承邊緣點即為傾覆臨界'],
      ]
    };
  }
  if (pointId.includes('mec-g10-s2-m1-01')) {
    return {
      title: '桁架分析方法 (節點法 vs 截面法) 與零力桿速判表',
      headers: ['分析方法與法則', '適用情境與計算步序', '獨立平衡方程式數', '解題關鍵速度秘訣'],
      rows: [
        ['靜定判定準則', 'm = 2j - 3 (簡支桁架 r=3)', 'm 桿數, j 節點數', 'm+r=2j 靜定；>2j 靜不定；<2j 不穩定'],
        ['節點法 (Nodes)', '求「整座桁架所有桿件」內力', '每個節點 2 式 (ΣFx=0, ΣFy=0)', '從僅有 2 未知數之邊界支承節點推進'],
        ['截面法 (Sections)', '求「特定 1~3 根跨中桿件」內力', '整個隔離體 3 式 (ΣFx, ΣFy, ΣM)', '一刀切開 (≤3桿)，對另外兩桿交點取矩'],
        ['零力桿兩大鐵律', '兩桿不共線無外力 / 三桿兩共線無外力', '幾何視圖 5 秒秒殺', '劃除已確認零力桿後「遞迴尋找次一節點」'],
      ]
    };
  }
  if (pointId.includes('mec-g10-s2-m2-01')) {
    return {
      title: '梁載重、剪力圖 (SFD) 與彎矩圖 (BMD) 微分面積幾何表',
      headers: ['幾何曲線特徵', '載重 (Load w)', '剪力 (Shear V)', '彎矩 (Moment M)'],
      rows: [
        ['無載重區段 (w=0)', '水平零線', '水平直線 (V = 常數 C)', '一階斜直線 (斜率等於 V)'],
        ['均佈載重區段 (w)', '水平直線 w', '一階斜直線 (斜率 = -w)', '二次拋物線 (開口向下)'],
        ['微分幾何鐵律', 'dV/dx = -w', 'dM/dx = V (剪力為彎矩斜率)', '★ 剪力為零 (V=0) 處 ➜ 彎矩達極值 Mmax'],
        ['面積累積定理', 'ΔV = -∫w dx (載重圖面積)', 'ΔM = ∫V dx (剪力圖面積)', '集中力偶只在 BMD 垂直突變，SFD 不變'],
      ]
    };
  }
  if (pointId.includes('mec-g10-s2-final-01')) {
    return {
      title: '標準截面慣性矩與平行軸移軸計算規格表',
      headers: ['斷面幾何形狀', '形心軸慣性矩 Ixo', '基準邊緣慣性矩 I_base', '平行軸定理移軸法則'],
      rows: [
        ['矩形 (寬 b, 高 h)', 'b·h³ / 12', 'b·h³ / 3 (底邊，大 4 倍)', 'Ix = Ixo + A·d² (必由形心向外移)'],
        ['圓形 (直徑 d)', 'π·d⁴ / 64', '極慣性矩 J = π·d⁴ / 32', 'J = Ix + Iy (垂直截面二軸之和)'],
        ['工字型 (對稱斷面)', '外包大矩形 - 兩側空白矩形', '共用同一水平形心軸', '對稱斷面無需平行軸定理，直接相減秒殺'],
        ['迴轉半徑 (k)', 'k = √(I / A)', '單位長度 cm 或 mm', '反映斷面抵抗壓潰挫屈 (Buckling) 能力'],
      ]
    };
  }
  // 製圖科
  if (pointId.includes('dra-g10-s1-m1-01')) {
    return {
      title: 'CNS 3 圖紙 A 系列尺度規格與三級線型對照表',
      headers: ['規格項目', 'CNS 標準尺寸 (mm)', '對應工程線型粗細', '標準使用工程圖面範圍'],
      rows: [
        ['A0 規格', '841 × 1189 mm (面積 1 m²)', '粗線 (0.7~1.0 mm)', '全區配置圖、都市計畫圖、外形輪廓線'],
        ['A1 規格', '594 × 841 mm', '中線 (0.35~0.5 mm)', '建築平面圖、立面剖面圖、隱藏虛線'],
        ['A2 規格', '420 × 594 mm', '細線 (0.18~0.25 mm)', '結構配筋圖、水電大樣圖、尺寸線/中心線'],
        ['A3 / A4 規格', '297×420 / 210×297 mm', '鉛筆硬度 H~2H 畫底稿', '施工說明書、A4 講義規範、HB 尺寸字體'],
      ]
    };
  }
  if (pointId.includes('dra-g10-s1-m2-01')) {
    return {
      title: '第三角法正投影展開與線型重疊優先順序表',
      headers: ['圖學投影層級', '第三角投影法規範', '線條重疊繪出優先權', '審題扣分防護要點'],
      rows: [
        ['空間排列相對位置', '觀測者 ➜ 投影面 ➜ 物體', '1. 外形輪廓粗實線 (最優先)', '物體在投影面後方，直覺展開'],
        ['前視與俯視關係', '長對正 (長度相等，垂直對齊)', '2. 隱藏中虛線 (第二優先)', '俯視圖在前視圖正上方'],
        ['前視與側視關係', '高平齊 (高度相等，水平平齊)', '3. 中心軸線細鏈線 (第三)', '右側視圖在前視圖正右方'],
        ['俯視與側視關係', '寬相等 (以 45° 反射輔助線投射)', '4. 尺寸界線剖面線 (最後)', '45° 折轉線起點對齊前視圖右上角延長'],
      ]
    };
  }
  if (pointId.includes('dra-g10-s1-final-01')) {
    return {
      title: 'CNS 剖面圖四大類型與剖切繪製規範表',
      headers: ['剖面圖類型', '幾何割面切法', 'CNS 圖學繪製鐵律', '縱向一律不劃剖面線之機件'],
      rows: [
        ['全剖面圖 (Full Section)', '假想割面完全切過物體全長全寬', '適用於不對稱之複雜內部構造', '螺栓 (Bolts)、螺帽 (Nuts)'],
        ['半剖面圖 (Half Section)', '割去四分之一，中心細鏈線為界', '★ 外觀半側一律省略所有隱藏虛線！', '實心軸 (Shafts)、銷 (Pins)'],
        ['局部剖面 (Broken-out)', '以徒手波浪破斷線局部顯示內部', '波浪線不應超出輪廓亦不可重疊', '鉚釘 (Rivets)、滾珠 (Balls)'],
        ['旋轉剖面 (Revolved)', '在原圖處將橫斷面原地旋轉 90°', '薄板 (<2mm) 可直接塗黑填滿', '肋條 (Ribs)、輪輻 (Spokes)'],
      ]
    };
  }
  // 建築概論與綠建築
  if (pointId.includes('con-g10-s2-m1-01')) {
    return {
      title: '台灣綠建築 EEWH 四大範疇九大指標評估基準表',
      headers: ['EEWH 範疇名稱', '所屬評估指標名稱', '評等門檻要求', '現代三大結構系統特徵 (RC/SC/SRC)'],
      rows: [
        ['生態 (Ecology)', '生物多樣性、綠化量、基地保水', '營造基地微氣候與多孔滲水', 'RC: 剛度大防火佳、自重大、施工慢'],
        ['節能 (Energy Saving)', '★ 日常節能指標 (外殼/空調/照明)', '★ 絕對通過門檻 (佔能耗核心)', 'SC: 韌性佳抗震優、施工快、★必做防火被覆'],
        ['減廢 (Waste Reduction)', 'CO2 減量指標、廢棄物減量指標', '減少高耗能建材生命週期碳', 'SRC: 鋼骨+鋼筋混凝土，超高層建築主力'],
        ['健康 (Health)', '室內環境、★ 水資源指標、污水垃圾', '★ 水資源為省水器具必過門檻', '評等分五級：鑽石、黃金、銀、銅、合格'],
      ]
    };
  }
  // 高三模考
  if (pointId.includes('g12-mock-01')) {
    return {
      title: '桁架零力桿兩大速判鐵律與節點掃描表',
      headers: ['零力桿判別定律', '節點匯交桿件特徵', '外載重條件', '解題判定結果'],
      rows: [
        ['第一鐵律 (兩桿節點)', '僅有兩桿匯交，且兩桿不共線', '節點上無任何外載重或支承反力', '★ 兩桿內力「皆為零 (零力桿)」！'],
        ['第二鐵律 (三桿節點)', '三桿匯交，其中兩桿共線，第三桿斜交', '節點上無任何外載重或支承反力', '★ 不共線之第三斜桿「必為零桿」！'],
        ['對稱載重衍生律', '對稱桁架對稱載重，跨中垂直桿', '中心對稱軸上剪力為零', '跨中無垂向載重時中心垂直桿為零桿'],
        ['遞迴劃除神技', '確認零桿後以紅筆劃除視為不存在', '相鄰節點桿數減少可能滿足新鐵律', '循環掃描直到全桁架無滿足節點為止'],
      ]
    };
  }
  if (pointId.includes('g12-mock-02-01')) {
    return {
      title: '莫爾圓 (Mohr\'s Circle) 應力圓幾何與主應力換算表',
      headers: ['應力轉換幾何項', '計算公式與幾何坐標', '物理力學意義', '統測考前速記口訣'],
      rows: [
        ['莫爾圓圓心 C', 'C = ((σx + σy) / 2, 0) = (σavg, 0)', '平面應力之平均正應力坐標', '圓心即平均，相加除以二'],
        ['莫爾圓半徑 R', 'R = √[ ((σx - σy)/2)² + τxy² ]', '勾股定理斜邊；★ 剛好等於 τmax！', '相減除二平方向，加剪力平方開根號'],
        ['兩大主應力 σ1, σ2', 'σ1,2 = σavg ± R', '構件能承受之最大與最小正應力', '圓心加減半徑得主應，主平面剪應恆為零'],
        ['不變量鐵律', 'σ1 + σ2 = σx + σy', '正應力總和隨旋轉角度保持定值', '正應力和守恆，驗算最佳工具'],
      ]
    };
  }
  if (pointId.includes('g12-mock-sur-01')) {
    return {
      title: '閉合導線羅盤儀平差法與建築技術規則樓梯法規表',
      headers: ['法規與工程科目', '標準計算法則 / 規範公式', '限制數值與標準', '常考陷阱與扣分防護'],
      rows: [
        ['導線羅盤儀平差 (Bowditch)', '各邊改正數 = -閉合差 × (邊長 / 全長)', '改正數與「邊長比例」成正比', '緯距用 cos (南北向)，經距用 sin (東西向)'],
        ['住宅專用樓梯 (法規 33 條)', '級高 R ≤ 20 cm ｜ 級深 T ≥ 24 cm', '室內住宅專用走道標準', 'R 只要超過 20 cm 即屬違章設計！'],
        ['公用建築樓梯 (法規 33 條)', '級高 R ≤ 16 cm ｜ 級深 T ≥ 26 cm', '學校、醫院、劇院公用標準', '公共樓梯寬度不得小於 120 cm'],
        ['人體工學步幅公式', '58 cm ≤ 2R + T ≤ 64 cm', '常規最佳化以 60~62 cm 為基準', '★ 單跑水平踏面數「永遠少踢面一階 (N-1)」！'],
      ]
    };
  }

  // 通用結構化對照表
  return {
    title: '核心觀念規範指標與歷屆考點對照表',
    headers: ['核心評量維度', '課綱規範要求', '名校常見考查題型', '應考防護關鍵'],
    rows: [
      ['物理/幾何定義', '108 課綱技術型高中部定標準', '基本概念選擇題 (佔比 40%)', '熟記物理定義，避開符號混淆'],
      ['公式與計算法則', '標準 CNS 國家規範及統測大綱', '手算 SOP 計算題 (佔比 30%)', '注意單位換算與正負號陷阱'],
      ['工程應用與判別', '現場實務情境與施工法規', '情境式素養題 (佔比 30%)', '依據工址環境條件精準選用'],
    ]
  };
}

export default function PeriodicExamDetailView({ plan }: Props) {
  const [viewMode, setViewMode] = useState<'paper' | 'digital'>('paper');
  const [showPrintTips, setShowPrintTips] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    if (typeof window === 'undefined') return {};
    try {
      const saved = localStorage.getItem(`arch_exam_${plan.id}_checklist`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheck = (idx: number) => {
    const key = `check-${idx}`;
    const next = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(next);
    try {
      localStorage.setItem(`arch_exam_${plan.id}_checklist`, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // 一鍵下載獨立離線可列印講義 HTML 文件
  const handleDownloadOfflineHandout = () => {
    const filename = `${plan.targetSchool}_${plan.subjectName}_${plan.periodName}_衝刺講義.html`;
    
    const htmlContent = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${plan.subjectName} ${plan.periodName} 考前衝刺預備講義 - ${plan.targetSchool}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 10mm 12mm 10mm;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.5;
      font-size: 10pt;
      margin: 0;
      padding: 16px;
      max-width: 860px;
      margin: 0 auto;
    }
    .print-header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 10px;
      margin-bottom: 14px;
    }
    .kicker {
      font-size: 8.5pt;
      font-weight: 700;
      color: #2563eb;
      letter-spacing: 0.05em;
    }
    .title {
      font-size: 18pt;
      font-weight: 800;
      color: #0f172a;
      margin: 4px 0;
      line-height: 1.25;
    }
    .meta {
      font-size: 9pt;
      color: #475569;
      margin-bottom: 3px;
    }
    .student-fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 8px 12px;
      margin-top: 10px;
      font-size: 9.5pt;
      font-weight: bold;
    }
    .section-title {
      font-size: 12pt;
      font-weight: 800;
      color: #1e3a8a;
      border-left: 4px solid #2563eb;
      padding-left: 8px;
      margin: 18px 0 10px 0;
    }
    .card {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 12px;
      margin-bottom: 12px;
      background: #ffffff;
    }
    .table-container {
      width: 100%;
      border-collapse: collapse;
      margin: 8px 0;
      font-size: 9pt;
    }
    .table-container th {
      background: #eff6ff;
      border: 1px solid #cbd5e1;
      padding: 6px 8px;
      text-align: left;
      font-weight: bold;
      color: #1e3a8a;
    }
    .table-container td {
      border: 1px solid #cbd5e1;
      padding: 5px 8px;
      color: #1e293b;
    }
    .analogy-box {
      background: #fffbeb;
      border-left: 3px solid #f59e0b;
      padding: 8px 10px;
      margin: 8px 0;
      font-size: 9.5pt;
      color: #78350f;
      border-radius: 4px;
    }
    .formula-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      padding: 6px 10px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 10pt;
      color: #1e40af;
      font-weight: bold;
      margin: 6px 0;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 8px;
    }
    .badge-tip {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 9pt;
      color: #065f46;
    }
    .badge-trap {
      background: #fef2f2;
      border: 1px solid #fecaca;
      padding: 6px 8px;
      border-radius: 4px;
      font-size: 9pt;
      color: #991b1b;
    }
    .notes-lines {
      border: 1.5px dashed #94a3b8;
      border-radius: 6px;
      padding: 12px;
      margin-top: 18px;
    }
    .line-slot {
      height: 24px;
      border-bottom: 1px dashed #cbd5e1;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="background: #2563eb; color: #fff; padding: 10px; border-radius: 6px; margin-bottom: 16px; text-align: center;">
    <strong>🖨️ 離線可列印講義已準備就緒！</strong> 請按 <strong>Ctrl + P</strong> 立即列印或存為 PDF（建議勾選「背景圖形」以獲得最佳效果）。
  </div>

  <header class="print-header">
    <div class="kicker">108 課綱技術型高中各科段考衝刺預備講義 ｜ ${plan.category} ｜ ${plan.subjectName}</div>
    <h1 class="title">${plan.subjectName} ${plan.periodName} 考前衝刺預備講義</h1>
    <div class="meta"><strong>學校指標：</strong>${plan.targetSchool} ｜ <strong>學期考期：</strong>${plan.semesterTitle} ｜ <strong>配分：</strong>${plan.scoreWeight}</div>
    <div class="meta"><strong>考試進度範圍：</strong>${plan.examScope}</div>
    <div class="student-fields">
      <span>學校：_________________</span>
      <span>班級：_________________</span>
      <span>座號：_______</span>
      <span>姓名：_________________</span>
      <span>得分：_______</span>
      <span>教師簽名：_______</span>
    </div>
  </header>

  <h2 class="section-title">壹、段考命題重點與考前 10 分鐘速讀速記 (Page 1 考前攻頂)</h2>
  <div class="card">
    <p style="margin: 0 0 8px 0; color: #334155;"><strong>破題心法：</strong>${plan.beginnerMindset || '掌握核心幾何定義與物理本質，避開公式代數死記硬背，掌握破題關鍵。'}</p>
    <div style="font-weight: bold; margin-bottom: 6px; color: #1e3a8a;">考前 10 分鐘速記公式卡：</div>
    <div class="grid-2">
      ${plan.cramFormulaCards.map(c => `
        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 4px; padding: 6px 8px;">
          <strong style="color: #92400e;">${c.title}</strong>
          <div style="font-family: monospace; font-weight: bold; color: #1e40af; margin: 2px 0;">${c.formula}</div>
          <div style="font-size: 8.5pt; color: #78350f;">${c.notes}</div>
        </div>
      `).join('')}
    </div>
  </div>

  <h2 class="section-title">貳、核心知識點精講與直覺圖解 (含結構化規格對照表)</h2>
  ${plan.knowledgePoints.map((p, i) => {
    const tableData = getConceptTableData(p.id);
    return `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px;">
        <strong style="font-size: 11pt; color: #0f172a;">${i + 1}. ${p.title}</strong>
        <span style="font-size: 8.5pt; color: #64748b; font-family: monospace;">${p.curriculumCode} ｜ ${p.textbookChapter}</span>
      </div>
      <div class="analogy-box">
        <strong>💡 零基礎秒懂比喻：</strong>${p.intuitiveAnalogy || '先看清事物本質，再帶入數字公式。'}
      </div>
      <p style="margin: 6px 0; color: #1e293b;">${p.summary}</p>
      
      <!-- 知識點對照表格 -->
      <table class="table-container">
        <thead>
          <tr>
            ${tableData.headers.map(h => `<th>${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${tableData.rows.map(row => `
            <tr>
              ${row.map(cell => `<td>${cell}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>

      ${p.keyFormulaOrRule ? `<div class="formula-box">核心公式：${p.keyFormulaOrRule}</div>` : ''}
      <div class="grid-2">
        <div class="badge-tip">
          <strong>✓ 考前秒殺口訣：</strong>
          <ul style="margin: 2px 0 0 14px; padding: 0;">
            ${p.cramTips.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
        <div class="badge-trap">
          <strong>⚠️ 命題扣分陷阱：</strong>
          <p style="margin: 2px 0 0 0;">${p.trapWarning}</p>
        </div>
      </div>
    </div>
  `;
  }).join('')}

  <h2 class="section-title">參、典型段考示範題逐步精解 (Step-by-Step SOP)</h2>
  ${plan.crossReferencedQuestions.map((q, idx) => `
    <div class="card">
      <div style="font-weight: bold; margin-bottom: 4px; color: #047857;">
        例題 ${idx + 1} ｜ ${q.sourceExam} (標準答案: ${q.answer})
      </div>
      <div style="margin-bottom: 8px;">${q.questionStem}</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 8px; font-size: 9pt;">
        <div><strong>(A)</strong> ${q.options.A}</div>
        <div><strong>(B)</strong> ${q.options.B}</div>
        <div><strong>(C)</strong> ${q.options.C}</div>
        <div><strong>(D)</strong> ${q.options.D}</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 8px; font-size: 9pt;">
        <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 2px;">SOP 計算解析步驟：</div>
        <div style="white-space: pre-line; color: #334155;">${q.detailedExplanation}</div>
        <div style="color: #b91c1c; margin-top: 4px; font-size: 8.5pt;"><strong>陷阱提示：</strong>${q.examTrickAnalysis}</div>
      </div>
    </div>
  `).join('')}

  <h2 class="section-title">肆、均一階梯能力精熟自主檢核</h2>
  <div class="card">
    <div class="grid-2">
      ${plan.preExamChecklist.map((item) => `
        <div style="display: flex; gap: 6px; font-size: 9pt; align-items: flex-start;">
          <span style="display: inline-block; width: 12px; height: 12px; border: 1.5px solid #64748b; border-radius: 2px; flex-shrink: 0; margin-top: 2px;"></span>
          <span>${item}</span>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="notes-lines">
    <strong style="color: #475569; font-size: 10pt; display: block; margin-bottom: 6px;">伍、考後錯題檢討與自主修正筆記 (Post-Exam Reflection)</strong>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = plan.preExamChecklist.length > 0 
    ? Math.round((completedCount / plan.preExamChecklist.length) * 100) 
    : 0;

  // 映射高解析純向量 SVG 圖解類型
  const getSvgType = (subjectSlug: string, pointId: string): string => {
    if (subjectSlug === 'mechanics') {
      if (pointId.includes('mohr') || pointId.includes('mock-02')) return 'mechanics-mohr-circle';
      if (pointId.includes('inertia') || pointId.includes('parallel') || pointId.includes('s2-final')) return 'mechanics-inertia-parallel';
      if (pointId.includes('vm') || pointId.includes('shear-moment') || pointId.includes('s2-m2')) return 'mechanics-vm-diagram';
      if (pointId.includes('truss') || pointId.includes('zeroforce') || pointId.includes('s2-m1') || pointId.includes('mock-01')) return 'mechanics-truss-zeroforce';
      if (pointId.includes('centroid') || pointId.includes('friction') || pointId.includes('s1-final')) return 'mechanics-centroid-friction';
      if (pointId.includes('moment') || pointId.includes('varignon') || pointId.includes('s1-m2')) return 'mechanics-moment-varignon';
      return 'mechanics-coplanar-forces';
    }
    if (subjectSlug === 'drafting') {
      if (pointId.includes('stair') || pointId.includes('code')) return 'drafting-staircase-code';
      if (pointId.includes('section') || pointId.includes('s1-final')) return 'drafting-section-views';
      if (pointId.includes('third-angle') || pointId.includes('s1-m2')) return 'drafting-third-angle-proj';
      return 'drafting-cns-sheets-lines';
    }
    if (subjectSlug === 'construction') {
      return 'arch-eewh-green-building';
    }
    if (subjectSlug === 'materials') {
      if (pointId.includes('asphalt') || pointId.includes('s2-final-02')) return 'materials-asphalt-penetration';
      if (pointId.includes('rebar') || pointId.includes('s2-m2-02')) return 'materials-rebar-tensile';
      if (pointId.includes('abrams') || pointId.includes('s2-m1-02')) return 'materials-abrams-law';
      if (pointId.includes('wood') || pointId.includes('fsp') || pointId.includes('s2-final-01')) return 'materials-wood-fsp';
      if (pointId.includes('mix') || pointId.includes('aci') || pointId.includes('s2-m2-01')) return 'materials-aci-mix';
      if (pointId.includes('slump') || pointId.includes('1176') || pointId.includes('s2-m1-01')) return 'materials-slump';
      if (pointId.includes('sieve') || pointId.includes('aggregate') || pointId.includes('s1-final-02')) return 'materials-aggregate-sieve';
      if (pointId.includes('chloride') || pointId.includes('3090') || pointId.includes('s1-final-01')) return 'materials-chloride-limits';
      if (pointId.includes('vicat') || pointId.includes('786') || pointId.includes('s1-m2-02')) return 'materials-vicat-test';
      if (pointId.includes('cns61') || pointId.includes('types') || pointId.includes('s1-m2-01')) return 'materials-cement-types';
      if (pointId.includes('moisture') || pointId.includes('water') || pointId.includes('s1-m1-03')) return 'materials-moisture-states';
      if (pointId.includes('clinker') || pointId.includes('s1-m1-02')) return 'materials-clinker';
      return 'materials-porosity';
    }
    if (subjectSlug === 'surveying') {
      if (pointId.includes('mock-sur') || pointId.includes('stair')) return 'drafting-staircase-code';
      if (pointId.includes('precision') || pointId.includes('s2-m2-02')) return 'surveying-traverse-precision';
      if (pointId.includes('earthwork') || pointId.includes('simpson') || pointId.includes('s2-final-02')) return 'surveying-earthwork-simpson';
      if (pointId.includes('repetition') || pointId.includes('s2-m1-02')) return 'surveying-theodolite-repetition';
      if (pointId.includes('collimation') || pointId.includes('hi') || pointId.includes('s1-final-02')) return 'surveying-level-collimation';
      if (pointId.includes('shoelace') || pointId.includes('area') || pointId.includes('s2-final-01')) return 'surveying-shoelace-area';
      if (pointId.includes('traverse') || pointId.includes('loop') || pointId.includes('s2-m2-01')) return 'surveying-traverse-loop';
      if (pointId.includes('theodolite') || pointId.includes('axes') || pointId.includes('s2-m1-01')) return 'surveying-theodolite-axes';
      if (pointId.includes('level') || pointId.includes('balance') || pointId.includes('s1-final-01')) return 'surveying-level-balance';
      if (pointId.includes('tape') || pointId.includes('correction') || pointId.includes('s1-m1-02')) return 'surveying-tape-corrections';
      return 'surveying-error-normal';
    }
    if (subjectSlug === 'math-c') {
      if (pointId.includes('asymptote') || pointId.includes('s2-m2-02')) return 'math-hyperbola-asymptote';
      if (pointId.includes('reflection') || pointId.includes('tangent') || pointId.includes('s2-m1-02')) return 'math-parabola-reflection';
      if (pointId.includes('skew') || pointId.includes('distance') || pointId.includes('s1-m2-02')) return 'math-skew-lines-distance';
      if (pointId.includes('ellipse') || pointId.includes('hyperbola') || pointId.includes('s2-m2-01')) return 'math-ellipse-hyperbola';
      if (pointId.includes('parabola') || pointId.includes('s2-m1-01')) return 'math-parabola-geometry';
      if (pointId.includes('cross') || pointId.includes('plane') || pointId.includes('s1-m2-01')) return 'math-cross-product-plane';
      return 'math-space-projection';
    }
    if (subjectSlug === 'english') {
      if (pointId.includes('full-inversion') || pointId.includes('s2-m2-02')) return 'english-full-inversion';
      if (pointId.includes('adverbs') || pointId.includes('s1-m1-02')) return 'english-relative-adverbs';
      if (pointId.includes('participle') || pointId.includes('s2-m1-02')) return 'english-participle-clauses';
      if (pointId.includes('inversion') || pointId.includes('s2-m2-01')) return 'english-inversion-grammar';
      if (pointId.includes('subjunctive') || pointId.includes('s2-m1-01')) return 'english-subjunctive-mood';
      return 'english-relative-pronoun';
    }
    if (subjectSlug === 'chinese') {
      if (pointId.includes('tangsang') || pointId.includes('s2-m1-02')) return 'chinese-tangsang-prose';
      if (pointId.includes('fu-evolution') || pointId.includes('s1-m1-02')) return 'chinese-fu-evolution';
      if (pointId.includes('quanxue') || pointId.includes('s1-m2-02')) return 'chinese-quanxue-structure';
      if (pointId.includes('xiangjixuan') || pointId.includes('s2-m1-01')) return 'chinese-xiangjixuan-space';
      if (pointId.includes('shishuo') || pointId.includes('s1-m2-01')) return 'chinese-shishuo-contrasts';
      return 'chinese-chibi-philosophy';
    }
    return 'default';
  };

  return (
    <div className="space-y-6">
      {/* ── 頂部導航與列印 / 下載工具橫幅 (螢幕顯示，列印時自動隱藏) ── */}
      <header className="print:hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/review/periodic-exams/"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>返回高工段考講義總覽</span>
          </Link>

          {/* 視角與操作切換列 */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setViewMode('paper')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                  viewMode === 'paper'
                    ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>📄 A4 出版講義排版</span>
              </button>
              <button
                onClick={() => setViewMode('digital')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                  viewMode === 'digital'
                    ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>💻 數位卡片檢視</span>
              </button>
            </div>

            {/* 下載獨立離線講義 HTML 檔 */}
            <button
              onClick={handleDownloadOfflineHandout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 text-xs font-bold transition-all shadow-xs"
              title="下載單一獨立 HTML 檔案，包含全部排版樣式與向量圖，離線可直接雙擊開啟並轉存 PDF"
            >
              {downloadSuccess ? <Check className="h-4 w-4" /> : <Download className="h-4 w-4" />}
              <span>{downloadSuccess ? '已下載離線講義！' : '📥 下載離線講義 HTML'}</span>
            </button>

            {/* 一鍵列印 / 另存為 A4 PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold font-mono transition-all shadow-xs"
            >
              <Printer className="h-4 w-4" />
              <span>🖨️ 立即列印 / 存為 A4 PDF</span>
            </button>

            {/* 列印提示按鈕 */}
            <button
              onClick={() => setShowPrintTips(!showPrintTips)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="查看 A4 PDF 列印技巧"
            >
              <Info className="h-4 w-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* 列印指引提示橫幅 */}
        {showPrintTips && (
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/40 p-4 border border-blue-200 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 space-y-2 animate-in fade-in">
            <div className="font-bold flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span>💡 A4 PDF 最佳列印與轉存技巧（瀏覽器列印設定）：</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li><strong>印表機目的地</strong>：選擇「另存為 PDF (Save as PDF)」。</li>
              <li><strong>邊界設定</strong>：請選擇「預設 (Default)」或「無邊界 (None)」。</li>
              <li><strong>選項設定</strong>：務必勾選<strong>「背景圖形 (Background graphics)」</strong>，以確保向量圖示與精緻重點顏色完整呈現。</li>
              <li><strong>直接下載</strong>：若不想設定瀏覽器列印，可點選上方「📥 下載離線講義 HTML」，下載後在任何電腦/手機都能離線開啟並隨時列印！</li>
            </ul>
          </div>
        )}
      </header>

      {/* ── 核心主體：出版級 A4 紙張容器 (去除列印時的灰色外框與留白) ── */}
      <div 
        className={`transition-all duration-300 ${
          viewMode === 'paper' 
            ? 'max-w-4xl mx-auto bg-white text-slate-900 p-6 sm:p-10 shadow-2xl rounded-3xl border-2 border-slate-300/80 print:border-0 print:p-0 print:shadow-none print:max-w-full space-y-6 font-sans' 
            : 'space-y-8'
        }`}
      >
        {/* ── 頁面頂部：出版級 A4 考前講義封面資訊欄 ── */}
        <section className="border-b-2 border-slate-900 pb-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500 border-b border-slate-200 pb-1.5">
            <span className="font-bold text-blue-700 tracking-wider">
              108 課綱技術型高中各科段考衝刺預備講義 ｜ {plan.category} ｜ {plan.subjectName}
            </span>
            <span>編號: {plan.id.toUpperCase()}</span>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-blue-600 px-2 py-0.5 text-xs font-mono font-bold text-white">
                {plan.subjectName}
              </span>
              <span className="rounded-md bg-slate-100 text-slate-800 px-2 py-0.5 text-xs font-mono font-bold border border-slate-300">
                {plan.semesterTitle} · {plan.periodName}
              </span>
              <span className="rounded-md bg-emerald-50 text-emerald-800 px-2 py-0.5 text-xs font-mono font-bold border border-emerald-300">
                {plan.targetSchool}
              </span>
              <span className="rounded-md bg-amber-50 text-amber-800 px-2 py-0.5 text-xs font-mono font-bold border border-amber-300">
                {plan.scoreWeight}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-1">
              {plan.subjectName} {plan.periodName} 考前衝刺預備講義
            </h1>
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
              {plan.handoutSummary}
            </p>
          </div>

          <div className="text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-0.5">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-blue-600" />
              <span>進度：<strong>{plan.weekRange}</strong> ｜ 考試範圍：<strong>{plan.examScope}</strong></span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px] text-indigo-700">
              <School className="h-3.5 w-3.5" />
              <span>{plan.schoolContextNotes}</span>
            </div>
          </div>

          {/* 學生個人手寫資料填寫欄 */}
          <div className="rounded-xl bg-slate-50 border border-slate-300 p-2.5 text-xs font-mono font-bold text-slate-800 flex flex-wrap items-center justify-between gap-2 shadow-2xs">
            <div className="flex items-center gap-1">
              <span>學校：</span>
              <span className="border-b border-slate-400 min-w-[110px] inline-block text-slate-700">
                {plan.targetSchool.replace('指標對照', '')}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span>班級：</span>
              <span className="border-b border-slate-400 min-w-[80px] inline-block text-center">建築二甲</span>
            </div>
            <div className="flex items-center gap-1">
              <span>座號：</span>
              <span className="border-b border-slate-400 min-w-[45px] inline-block text-center">_____</span>
            </div>
            <div className="flex items-center gap-1">
              <span>姓名：</span>
              <span className="border-b border-slate-400 min-w-[85px] inline-block text-center">_________</span>
            </div>
            <div className="flex items-center gap-1">
              <span>段考得分：</span>
              <span className="border-b border-slate-400 min-w-[55px] inline-block text-center text-rose-600 font-extrabold">_____</span>
            </div>
            <div className="flex items-center gap-1">
              <span>教師簽名：</span>
              <span className="border-b border-slate-400 min-w-[65px] inline-block text-center">_____</span>
            </div>
          </div>
        </section>

        {/* ── 快速章節導覽跳轉膠囊 (螢幕專用，列印自動隱藏) ── */}
        <nav className="print:hidden flex flex-wrap items-center gap-2 py-2 border-b border-slate-200">
          <span className="text-xs font-mono font-bold text-slate-400 mr-1">快捷導覽：</span>
          <a href="#section-overview" className="rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1 text-xs font-mono font-bold transition-colors">
            壹、命題分析與公式
          </a>
          <a href="#section-concepts" className="rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 px-3 py-1 text-xs font-mono font-bold transition-colors">
            貳、知識點圖解與規格表
          </a>
          <a href="#section-examples" className="rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-mono font-bold transition-colors">
            參、逐步示範與真題對照
          </a>
          <a href="#section-reflection" className="rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 px-3 py-1 text-xs font-mono font-bold transition-colors">
            肆、考後檢討筆記欄
          </a>
        </nav>

        {/* ── 第一階段：零基礎也能懂的段考破題心法 + 考前 10 分鐘必背公式卡 (填充 Page 1，徹底消除空白) ── */}
        <section id="section-overview" className="space-y-4">
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/50 p-4 sm:p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-indigo-800 font-bold text-sm">
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <h2 className="font-serif text-base font-bold text-slate-900">
                壹、零基礎段考破題心法與高分攻略
              </h2>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {plan.beginnerMindset || `掌握核心物理定義與題目破題第一眼，段考題目 80% 都是標準基本分的變形。本講義特別為初學者設計了生活化比喻、純向量工程圖解、逐步 SOP 解題步驟以及避開命題老師的扣分地雷，只要依序閱讀並完成例題，即可在段考穩拿高分。`}
            </p>
          </div>

          {/* 段考命題單元與配分權重總覽表 */}
          <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
            <div className="bg-slate-100 px-3 py-2 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <TableIcon className="h-3.5 w-3.5 text-blue-600" />
                <span>本次段考命題單元結構與配分權重表</span>
              </span>
              <span className="font-mono text-[11px] text-slate-500">共 {plan.knowledgePoints.length} 個考點單元</span>
            </div>
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-mono text-[11px]">
                  <th className="p-2">單元代碼</th>
                  <th className="p-2">段考核心考點名稱</th>
                  <th className="p-2">教材章節</th>
                  <th className="p-2 text-center">命題重要度</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {plan.knowledgePoints.map((point) => (
                  <tr key={point.id} className="hover:bg-slate-50/50">
                    <td className="p-2 font-mono font-bold text-blue-700">{point.curriculumCode}</td>
                    <td className="p-2 font-medium text-slate-900">{point.title}</td>
                    <td className="p-2 text-slate-500 font-mono text-[11px]">{point.textbookChapter}</td>
                    <td className="p-2 text-center text-amber-500 text-xs">
                      {'★'.repeat(point.importance)}{'☆'.repeat(5 - point.importance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 考前 10 分鐘速記公式卡 */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
              <Compass className="h-4 w-4 text-amber-600" />
              <span>考前 10 分鐘速記公式卡（考前必刷核心定理）</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {plan.cramFormulaCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-amber-200 bg-amber-50/50 p-3 space-y-1 shadow-2xs"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-900">{card.title}</span>
                    {card.unit && <span className="text-amber-800 font-bold px-1.5 py-0.2 rounded bg-amber-100 text-[10px]">{card.unit}</span>}
                  </div>
                  <div className="rounded-lg bg-white p-2 font-mono text-xs font-bold text-indigo-700 border border-slate-200 overflow-x-auto">
                    {card.formula}
                  </div>
                  <p className="text-[11px] text-slate-600">
                    {card.notes}
                  </p>
                  {card.memoryMnemonic && (
                    <div className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      💡 口訣：{card.memoryMnemonic}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 均一階梯能力精熟自我檢核清單 */}
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/40 p-3.5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5 text-indigo-600" />
                <span>均一階梯精熟檢核點（考前逐條劃勾）</span>
              </span>
              <span className="font-mono text-indigo-700 font-bold text-[11px]">
                {completedCount} / {plan.preExamChecklist.length} 完成 ({progressPercent}%)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {plan.preExamChecklist.map((item, idx) => {
                const isDone = !!checkedItems[`check-${idx}`];
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleCheck(idx)}
                    className={`print-keep flex items-start gap-2 p-2 rounded-lg border text-left transition-all cursor-pointer ${
                      isDone
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-medium'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300'
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {isDone ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      ) : (
                        <Circle className="h-3.5 w-3.5 text-slate-300" />
                      )}
                    </div>
                    <span className="leading-snug text-[11px]">{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 第二階段：108 課綱知識點精講與直覺圖解 (不設大外框 break-inside-avoid，讓分頁自然順暢) ── */}
        <section id="section-concepts" className="space-y-6 pt-2">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                貳、108 課綱段考知識點精講與直覺圖解 (含規格對照表)
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              共 {plan.knowledgePoints.length} 個必考核心單元
            </span>
          </div>

          <div className="space-y-8">
            {plan.knowledgePoints.map((point, idx) => {
              const svgType = getSvgType(plan.subjectSlug, point.id);
              const tableData = getConceptTableData(point.id);

              return (
                <article
                  key={point.id}
                  className="rounded-2xl border border-slate-300 bg-white p-5 sm:p-6 space-y-4 shadow-xs"
                >
                  {/* 知識點頭部 */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-blue-100 text-blue-800 font-mono text-xs font-bold px-2 py-0.5">
                          單元 {idx + 1} ｜ {point.curriculumCode}
                        </span>
                        <span className="text-amber-500 text-xs">
                          {'★'.repeat(point.importance)}{'☆'.repeat(5 - point.importance)}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-slate-900">
                        {point.title}
                      </h3>
                    </div>

                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 font-mono">
                      {point.textbookChapter}
                    </span>
                  </div>

                  {/* 零基礎直覺生活化比喻卡 */}
                  <div className="rounded-xl bg-amber-50 p-3.5 border border-amber-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                      <span>【零基礎秒懂直覺比喻】</span>
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      {point.intuitiveAnalogy || `先抓住概念的「物理本質」。就像蓋房子一樣，先看懂骨架支撐，細節數字自然水到渠成。`}
                    </p>
                  </div>

                  {/* 高清純向量教學圖示 */}
                  <div className="my-2 rounded-xl border border-slate-200 overflow-hidden bg-slate-50 p-2 text-center break-inside-avoid">
                    <PeriodicExamSvgIllustration type={svgType} />
                    <div className="text-[11px] font-mono text-slate-500 py-1 border-t border-slate-200 mt-2">
                      ▲ 圖 {idx + 1}：{point.title} 核心幾何構造與規範圖解
                    </div>
                  </div>

                  {/* 結構化規格對照表 (每個知識點必配) */}
                  <div className="rounded-xl border border-slate-200 overflow-hidden bg-white break-inside-avoid">
                    <div className="bg-blue-50/70 px-3 py-1.5 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-blue-900">
                      <span className="flex items-center gap-1.5">
                        <TableIcon className="h-3.5 w-3.5 text-blue-600" />
                        <span>{tableData.title}</span>
                      </span>
                    </div>
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-700 font-bold text-[11px]">
                          {tableData.headers.map((h, i) => (
                            <th key={i} className="p-2 border-r last:border-r-0 border-slate-200">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/40">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`p-2 border-r last:border-r-0 border-slate-100 ${cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* 教科書級觀念精解本文 */}
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      觀念精講分析
                    </h4>
                    <p className="text-xs text-slate-800 leading-relaxed">
                      {point.summary}
                    </p>
                  </div>

                  {/* 核心公式定理卡 */}
                  {point.keyFormulaOrRule && (
                    <div className="rounded-xl bg-blue-50 p-3 font-mono text-xs text-blue-900 border border-blue-200 space-y-0.5 break-inside-avoid">
                      <span className="text-[10px] text-blue-600 font-bold block uppercase tracking-wider">
                        核心公式 / 判別定理
                      </span>
                      <code className="text-xs sm:text-sm font-bold block">{point.keyFormulaOrRule}</code>
                    </div>
                  )}

                  {/* 考前速記口訣與老師挖坑地雷 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs break-inside-avoid">
                    <div className="rounded-xl bg-emerald-50 p-3 border border-emerald-200 space-y-1">
                      <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        <span>考前 30 秒秒殺速記口訣</span>
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                        {point.cramTips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-rose-50 p-3 border border-rose-200 space-y-1">
                      <div className="font-bold text-rose-800 flex items-center gap-1.5">
                        <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
                        <span>段考致命扣分陷阱（老師挖坑避雷）</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed text-[11px]">
                        {point.trapWarning}
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1 pt-1 border-t border-slate-100">
                    <span>均一教育平台能力指標技能：</span>
                    <span className="text-indigo-700 font-bold">{point.junyiMasterySkill}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── 第三階段：典型段考示範題逐步精解 (Step-by-Step SOP) ── */}
        <section id="section-examples" className="space-y-6 pt-2">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                參、典型段考示範題逐步精解（零基礎 SOP）
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              名校考卷真題手把手帶練
            </span>
          </div>

          {/* 若有名師零基礎逐步示範題 (workedExamples) */}
          {plan.workedExamples && plan.workedExamples.length > 0 && (
            <div className="space-y-5">
              <div className="text-xs font-mono font-bold text-emerald-900 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-300 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  <span>【名師示範】零基礎破題思維與逐步計算大題（共 {plan.workedExamples.length} 題）</span>
                </div>
                <span className="text-[11px] font-normal text-emerald-700">循序精熟教學</span>
              </div>

              {plan.workedExamples.map((ex, exIdx) => (
                <div
                  key={ex.id}
                  className="rounded-2xl border-2 border-emerald-300/80 bg-white p-5 sm:p-6 space-y-4 shadow-xs break-inside-avoid"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-100 pb-2.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-emerald-700 text-white text-xs font-mono font-bold px-2.5 py-0.5">
                        示範題 {exIdx + 1}
                      </span>
                      <span className="rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono px-2 py-0.5 font-bold">
                        {ex.difficulty}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900">
                        {ex.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      目標觀念：<strong className="text-blue-700">{ex.targetConcept}</strong>
                    </span>
                  </div>

                  {/* 題目題幹 */}
                  <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 text-sm font-medium text-slate-900 leading-relaxed">
                    {ex.questionStem}
                  </div>

                  {/* 零基礎破題思維 */}
                  <div className="rounded-xl bg-amber-50/90 p-3.5 border border-amber-200 space-y-1">
                    <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <Compass className="h-3.5 w-3.5 text-amber-600" />
                      <span>【零基礎破題思維：從哪裡看起？】</span>
                    </div>
                    <p className="text-xs text-amber-950 leading-relaxed">
                      {ex.beginnerThinking}
                    </p>
                  </div>

                  {/* 逐步詳細 SOP 計算過程 */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Target className="h-4 w-4 text-blue-600" />
                      <span>SOP 逐步詳細解答步驟：</span>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {ex.stepByStepSolution.map((s) => (
                        <div key={s.stepNo} className="rounded-xl bg-blue-50/60 border border-blue-200 p-3 space-y-1">
                          <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                            <span className="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-mono flex-shrink-0">
                              {s.stepNo}
                            </span>
                            <span>{s.title}</span>
                          </div>
                          <p className="text-xs text-slate-800 leading-relaxed pl-7">
                            {s.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 老師扣分陷阱與秒殺口訣 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="rounded-xl bg-rose-50 p-3 border border-rose-200 space-y-1">
                      <div className="font-bold text-rose-800 flex items-center gap-1">
                        <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
                        <span>命題老師扣分地雷：</span>
                      </div>
                      <p className="text-[11px] text-slate-700 leading-relaxed">{ex.examinerTrapWarning}</p>
                    </div>

                    <div className="rounded-xl bg-emerald-50 p-3 border border-emerald-200 space-y-1">
                      <div className="font-bold text-emerald-800 flex items-center gap-1">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                        <span>考前 30 秒秒殺口訣：</span>
                      </div>
                      <p className="text-[11px] text-slate-800 font-bold">{ex.quickMnemonic}</p>
                    </div>
                  </div>

                  {/* 最終解答 */}
                  <div className="rounded-xl bg-slate-900 text-white p-3 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-slate-300">本題標準正解：</span>
                    <strong className="text-emerald-400 font-bold text-sm">{ex.finalAnswer}</strong>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 名校真題對照 */}
          <div className="space-y-6">
            <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <School className="h-4 w-4 text-blue-600" />
                <span>【真題對照】歷屆名校段考真題解析與誘答陷阱（共 {plan.crossReferencedQuestions.length} 題）</span>
              </div>
              <span className="text-[11px] font-normal text-slate-500">指標學校考題比對</span>
            </div>

            {plan.crossReferencedQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="rounded-2xl border border-slate-300 bg-white p-5 sm:p-6 space-y-3.5 shadow-xs break-inside-avoid"
              >
                {/* 題號與來源 */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                  <span className="rounded-md bg-emerald-100 text-emerald-900 text-xs font-mono font-bold px-2 py-0.5">
                    示範例題 {idx + 1} ｜ {q.sourceExam}
                  </span>
                  <span className="text-xs font-mono text-slate-600">
                    標準答案：<strong className="text-emerald-700 text-sm font-bold">{q.answer}</strong>
                  </span>
                </div>

                {/* 題目題幹 */}
                <div className="text-sm font-medium text-slate-900 leading-relaxed">
                  {q.questionStem}
                </div>

                {/* 四個選項卡片 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                    <div
                      key={opt}
                      className={`rounded-xl p-2.5 border transition-colors ${
                        opt === q.answer
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="font-mono font-bold mr-2">{opt}.</span>
                      <span>{q.options[opt]}</span>
                    </div>
                  ))}
                </div>

                {/* 步驟化詳細解答 SOP */}
                <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 space-y-2 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Compass className="h-4 w-4 text-blue-600" />
                    <span>Step-by-Step 詳細步驟計算過程：</span>
                  </div>
                  <div className="text-slate-800 leading-relaxed whitespace-pre-line font-sans text-xs">
                    {q.detailedExplanation}
                  </div>
                  
                  {/* 老師挖坑避雷 */}
                  <div className="pt-2 border-t border-slate-200 text-xs text-rose-700 flex items-start gap-1.5">
                    <AlertTriangle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                    <span>命題教師誘答陷阱解析：{q.examTrickAnalysis}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 第四階段：實體手寫錯題檢討與自主修正筆記欄 ── */}
        <section id="section-reflection" className="rounded-2xl border-2 border-dashed border-slate-400 p-5 space-y-2.5 break-inside-avoid bg-slate-50/50">
          <div className="flex items-center justify-between border-b border-slate-300 pb-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-600" />
              <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                肆、考後錯題檢討與自主修正筆記 (Post-Exam Reflection & Error Correction)
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">列印後手寫記錄</span>
          </div>

          <p className="text-[11px] text-slate-500">
            請記錄本次段考出錯的題目原因（如：公式帶錯、單位未換算、審題陷阱），並寫下一句修正承諾：
          </p>

          <div className="space-y-3.5 pt-1">
            {[1, 2, 3, 4, 5].map((line) => (
              <div key={line} className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-400 w-6">0{line}.</span>
                <div className="flex-1 border-b border-slate-300 h-5"></div>
              </div>
            ))}
          </div>
        </section>

        {/* 底部行動工具列 */}
        <div className="print:hidden pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-mono">
            國立台中高工建築科段考衝刺專用 ｜ 108 課綱推薦講義
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadOfflineHandout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 text-xs font-bold transition-all border border-slate-300"
            >
              <Download className="h-3.5 w-3.5" />
              <span>下載離線 HTML</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-xs font-bold transition-all shadow-xs"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>立即列印 A4 講義</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
