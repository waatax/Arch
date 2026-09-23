import { CadSoftware } from '../types';

export const sketchupData: CadSoftware = {
  "slug": "sketchup",
  "name": "SketchUp Pro",
  "englishName": "Trimble SketchUp Pro",
  "vendor": "Trimble",
  "releaseYear": "2000 (原 @Last Software, 後 Google 收購, 現 Trimble)",
  "tag": "電腦繪圖",
  "category": "3D 概念體量與施工圖出圖",
  "badge": "建築直覺推拉神兵",
  "rating": {
    "learningCurve": "極平緩 (3 天掌握基礎，2 週產出設計案)",
    "industryAdoption": "事務所方案階段普及率 > 90%",
    "bimCapability": "中階 (支援 IFC 匯出與自訂屬性分類)",
    "drawingOutput": "卓越 (搭配 Trimble LayOut 動態連結成圖)",
    "renderingQuality": "極佳 (支援 Enscape / V-Ray / D5 一鍵即時渲染)"
  },
  "shortDesc": "全世界建築師與學生最親切的 3D 空間推拉利器。從概念量體發想到 LayOut 2D 建築施工圖，提供零阻力的空間塑造體驗。",
  "fullDesc": "SketchUp 是建築設計初期與方案構思階段不可或缺的核心工具。其直覺的「面推拉 (Push/Pull)」與幾何推論捕捉 (Inference Engine) 徹底消除了傳統 CAD 的繁複座標輸入障礙。配合官方 Trimble LayOut，可將 3D 模型無縫轉化為具備尺寸標註、引線標籤與 CNS 圖框的完整 2D 建築施工圖集，達成模型修改時圖紙自動同步的強大關聯性。",
  "officialUrl": "https://www.sketchup.com/",
  "studentLicenseUrl": "https://www.sketchup.com/plans-and-pricing#for-higher-education",
  "docUrl": "https://help.sketchup.com/",
  "communityUrl": "https://forums.sketchup.com/",
  "heroMetrics": [
    {
      "label": "全球建築師愛用度",
      "value": "No.1 概念工具"
    },
    {
      "label": "外掛資料庫數量",
      "value": "1,500+ Plugins"
    },
    {
      "label": "3D Warehouse 模型庫",
      "value": "500 萬+ 構件"
    },
    {
      "label": "施工圖動態整合",
      "value": "LayOut 100% 同步"
    }
  ],
  "architecturalApplications": [
    {
      "area": "概念體量與日照法規檢討",
      "title": "都市紋理套疊與削線日照分析",
      "description": "在規劃初期快速建立基地周邊建物量體，輸入真實基地緯度與經度，即時檢討冬至日照陰影遮蔽與法定建蔽率、容積率空間體積。",
      "deepDivePrinciples": [
        "天球幾何學演算法：利用太陽赤緯角 δ = 23.45°·sin(360/365·(284+n)) 計算冬至日照軌跡",
        "B-Rep 邊界表示法模型：封閉空間多面體透過射線追蹤 (Ray Casting) 計算自遮蔽角與投射陰影",
        "基地法規削線包絡面 (Envelope) 快速布林交集，驗證高度限制與路心退縮"
      ],
      "realWorldCase": "台北信義計畫區集合住宅案：以 SketchUp 模擬鄰棟冬至 8:00 至 16:00 之一小時以上日照陰影遮蔽範圍，調整頂層退縮露台。",
      "standardCodeRef": "內政部《建築技術規則設計施工編》第 39-1 條「日照檢討基準」與 CNS 11567 建築日照陰影分析圖標示準則。",
      "codeSnippet": {
        "language": "ruby",
        "title": "SketchUp Ruby API 批量建立冬至太陽分析場景",
        "code": "# 建立冬至 9:00, 12:00, 15:00 太陽陰影場景\nmodel = Sketchup.active_model\npages = model.pages\nshadow_info = model.shadow_info\nshadow_info[\"DisplayShadows\"] = true\n\n[9, 12, 15].each do |hour|\n  shadow_info[\"ShadowTime\"] = Time.local(2026, 12, 22, hour, 0, 0)\n  page = pages.add(\"冬至_#{hour}時\")\n  page.update(PAGE_USE_SHADOWINFO)\nend\nputs \"已自動生成 3 組冬至法定日照分析場景\"",
        "explanation": "透過 SketchUp Ruby 腳本自動指定 12 月 22 日冬至特定時刻並凍結陰影設定，大幅節省人工手動設定時間。"
      },
      "technicalDetails": [
        "地理位置定位 (Add Location) 載入高解析數位高程與航照圖",
        "太陽陰影設定 (Shadow Settings) 模擬冬至上午 9:00 至下午 3:00 之日照軌跡",
        "實體工具 (Solid Tools) 進行量體交集、聯集與削減計算樓地板面積"
      ],
      "deliverables": [
        "都市紋理日照陰影研究圖",
        "法規容積體量包絡線模型",
        "基地空間透視分析圖"
      ]
    },
    {
      "area": "建築方案建模與材料質感賦予",
      "title": "智慧元件結構化建模",
      "description": "利用群組 (Group) 與動態元件 (Dynamic Components) 建立梁柱構架、帷幕牆格柵與開口門窗，維持模型清晰拓撲結構。",
      "deepDivePrinciples": [
        "巢狀拓撲父子階層：圖元定義 (ComponentDefinition) 與圖元實例 (ComponentInstance) 記憶體指針分離",
        "UV 空間映射座標矩陣：透過 4 點幾何變換校正紋理透視傾斜，維持磚石模矩 1:1 精確度",
        "反向法線消隱技術：保持正面 (Front Face, 白色) 朝外，確保第三方渲染器精確計算光子反彈"
      ],
      "realWorldCase": "宜蘭田中央工作坊風格清水模茶室：利用動態百葉元件控制立面實木格柵隨滑桿開合，推敲微氣候通風。",
      "standardCodeRef": "CNS 11567 建築構造材表面裝修符號標示規範。",
      "technicalDetails": [
        "巢狀元件結構 (Nested Components) 確保同類型柱梁一處修改、全棟連動更新",
        "標籤階層管理 (Tags / Folders) 區分結構體、外牆皮層、室內隔間與景觀植栽",
        "UV 貼圖座標校正與無縫紋理對齊 (Position Texture Tool)"
      ],
      "deliverables": [
        "方案 3D 精細模型",
        "材料色彩計畫板",
        "全角度等角透視展示圖"
      ]
    },
    {
      "area": "Trimble LayOut 建築施工圖成圖",
      "title": "3D 模型驅動之 2D 全套施工圖",
      "description": "透過 LayOut 視埠直接連結 SketchUp 場景 (Scenes)，設定 1/100 平面圖、1/50 剖面圖與外牆大樣，尺寸與標記自動動態連動。",
      "deepDivePrinciples": [
        "混合彩現管線 (Hybrid Mode)：線條以 PDF 向量幾何輸出保證 0 鋸齒，表面以 Raster 高解析貼圖輸出保留陰影",
        "動態資料綁定 (Dynamic Linking)：LayOut 標註讀取 SketchUp 頂點 GUID，幾何體拉伸時尺寸數值即時自動重新計算",
        "空間圖紙比例尺投影換算矩陣：1 單位 (LayOut mm) = 100 單位 (3D SKP mm)"
      ],
      "realWorldCase": "獨棟透天住宅合約施工圖集：全案 24 張 A1 施工圖（平立剖、樓梯大樣、門窗表）100% 由 LayOut 連結單一 SKP 模型出圖。",
      "standardCodeRef": "CNS 11567 A1042 建築工程圖紙尺度 (A1: 841×594 mm) 與粗中細線寬比 (0.50 : 0.25 : 0.18 mm)。",
      "technicalDetails": [
        "向量 (Vector) / 混合 (Hybrid) 視埠彩現，確保出圖邊線極致銳利無鋸齒",
        "自動尺寸標註 (Dimensioning) 直接讀取 3D 物件幾何頂點，模型拉長尺寸自動跳變",
        "CNS 建築製圖標準圖框、圖號索引標籤與材料說明引線系統整合"
      ],
      "deliverables": [
        "A1/A2 建築執照圖說",
        "1/100 建築平立剖面施工圖",
        "大樣構造細部圖集"
      ]
    },
    {
      "area": "即時視覺化與沉浸式簡報",
      "title": "雙向外掛光線追蹤渲染",
      "description": "透過 Enscape、Twinmotion 或 V-Ray 外掛，在 SketchUp 視窗中以毫秒級延遲同步預覽光追反射、大氣霧氣與真實物理光影。",
      "deepDivePrinciples": [
        "兩點透視垂直移軸光學原理：相機目標向量水平投影，保持垂直視角收斂點位於無限遠",
        "PBR 粗糙度 (Roughness) 與金屬度 (Metallic) 雙向著色器對應",
        "相機視錐裁剪與 Proxy 代理構件輕量化"
      ],
      "realWorldCase": "台中市公辦都更競圖簡報：利用 Enscape 結合 VR 頭盔，評審直接在 SketchUp 模型中漫步體驗下沉廣場光影。",
      "standardCodeRef": "CIE 國際照明委員會建築晝光採光係數 (Daylight Factor) 標準。",
      "technicalDetails": [
        "兩點透視相機校正 (Two-Point Perspective) 保持所有建築垂直立柱絕對垂直",
        "PBR (Physically Based Rendering) 材質通道指定粗糙度、金屬度與凹凸法線",
        "相機場景序列批次輸出 4K 超高畫質靜態圖與 60fps 建築漫遊短片"
      ],
      "deliverables": [
        "4K 競圖提案透視圖",
        "業主即時 VR 沉浸式漫遊體驗",
        "動畫簡報影片"
      ]
    },
    {
      "area": "LayOut 建築施工圖高精度排版與剖斷面著色技術",
      "title": "SketchUp + LayOut 施工圖全流程整合發布",
      "description": "無縫將 3D 模型轉化為具備法定效力之 A1 建築施工圖集，運用視埠關聯更新、剖面樣式 (Section Fill) 與向量尺寸標註。",
      "deepDivePrinciples": [
        "三種視埠渲染模式權衡：向量 (Vector) 保證線條極致銳利可縮放；光柵 (Raster) 呈現材質貼圖與柔和陰影；混合 (Hybrid) 兼具銳利線條與真實陰影，為施工圖之最佳選擇",
        "剖面斷面著色技巧：啟用 SketchUp 剖面填滿 (Section Fill) 黑色實心，或利用外掛 SectionCutFace 自動生成剖面切線多段線，完美符合 CNS 施工圖表現法",
        "自動關聯標註機制：在 LayOut 中拉取的尺寸線直接吸附於 3D 模型的幾何端點，當 SketchUp 模型修改柱跨長度時，LayOut 標註數字自動同步更新"
      ],
      "realWorldCase": "宜蘭知名度假農舍專案：全案從概念草模、室內裝修大樣到請照施工圖，100% 由 SketchUp Pro + LayOut 完成交付，省去 AutoCAD 重新翻模繪製的 200 小時工時。",
      "standardCodeRef": "CNS 11567 建築製圖規範與各縣市簡易室內裝修審查圖紙標準。",
      "technicalDetails": [
        "在 SketchUp 中為每個圖紙建立獨立場景 (Scenes)，並儲存專屬剖面切面位置",
        "在 LayOut 載入事務所專屬 A1 圖框樣板，自動綁定頁碼與專案名稱",
        "設定比例尺：平面 1:100、局部構造 1:20、節點大樣 1:5"
      ],
      "deliverables": [
        "LayOut 格式施工圖集 (.layout)",
        "高解析向量 PDF 圖紙",
        "DWG 向量施工圖導出檔"
      ]
    },
    {
      "area": "動態元件 (Dynamic Components) 空間屬性計算與工程估價連動",
      "title": "智慧參數化家具門窗與樓地板面積即時統計",
      "description": "利用 SketchUp 內建動態元件功能，撰寫試算表公式控制物件之長寬高、翻轉開闔與工程單價計算。",
      "deepDivePrinciples": [
        "屬性函數驅動：運用 `onClick = animate(\"RotZ\", 0, 90)` 實現點擊門扇自動旋轉開關互動",
        "約束限制法則：使用 `LenX = CURRENT(\"LenX\")` 與 `clamp` 函數，限制窗戶寬度只能在 60cm ~ 240cm 間拖拉",
        "數量報表自動提取：利用「產生報告 (Generate Report)」功能，一鍵匯出全模型內所有家具數量、窗樘面積與木作裝修報價表"
      ],
      "realWorldCase": "大型連鎖餐飲店面展店工程：將櫃台、桌椅、招牌做成標準動態元件庫，店長調整店面長寬後，工程材料清單與工程總造價在 5 秒內自動試算完畢。",
      "standardCodeRef": "公共工程經費電腦估價系統 (PCCES) 編碼與工項計量規範。",
      "codeSnippet": {
        "language": "ruby",
        "title": "SketchUp Ruby 腳本自動遍歷全模型並計算各空間總表面積",
        "code": "model = Sketchup.active_model\nentities = model.active_entities\ntotal_area = 0.0\n\nentities.grep(Sketchup::Face).each do |face|\n  total_area += face.area # 平方英吋\nend\n\ntotal_sqm = total_area * 0.00064516\nUI.messagebox(\"當前選取範圍內所有表面積總和: #{total_sqm.round(2)} 平方公尺 (#{(total_sqm * 0.3025).round(2)} 坪)\")",
        "explanation": "利用 Ruby API 搜尋活躍實體中所有幾何面 (Face)，快速統計空間表面積並換算為台灣工程慣用之平方公尺與坪數。"
      },
      "technicalDetails": [
        "透過元件屬性 (Component Attributes) 視窗定義自訂變數",
        "透過元件選項 (Component Options) 提供業主直覺的下拉選單介面",
        "匯出 CSV 格式報表並無縫對接 Excel 預算估價單"
      ],
      "deliverables": [
        "動態參數化建築元件庫 (.skp)",
        "自動化工程工料數量報表 (.csv)",
        "互動式展示模型"
      ]
    }
  ],
  "beginnerGuide": {
    "introduction": "SketchUp 的核心哲學是「看得到、抓得到、推得出」。新手切忌將所有線條畫在同一個未群組的空間中，必須自第一天起建立嚴格的群組化思維。",
    "viewportControls": [
      {
        "action": "旋轉視角 (Orbit)",
        "keyOrMouse": "按住滑鼠中鍵 (滾輪按住)",
        "tip": "圍繞滑鼠指標焦點自由旋轉 3D 空間"
      },
      {
        "action": "平移視圖 (Pan)",
        "keyOrMouse": "Shift + 按住滑鼠中鍵",
        "tip": "在當前視平面平行移動相機視野"
      },
      {
        "action": "縮放視圖 (Zoom)",
        "keyOrMouse": "滾動滑鼠滾輪",
        "tip": "游標指在哪裡就往哪裡放大，比選取後縮放更精準"
      },
      {
        "action": "充滿視窗 (Zoom Extents)",
        "keyOrMouse": "Shift + Z",
        "tip": "當模型迷航飛到太空時，一鍵將全體模型置中拉回畫面"
      }
    ],
    "tenStepsSop": [
      {
        "step": 1,
        "title": "設定建築單位",
        "action": "進入 視窗 (Window) → 模型資訊 (Model Info) → 單位 (Units)",
        "keyPoint": "改為「十進位 (Decimal) - 公釐 (mm)」，精度設為 0 mm"
      },
      {
        "step": 2,
        "title": "繪製基地邊界線",
        "action": "使用 矩形工具 (R)，直接在小鍵盤輸入尺寸",
        "keyPoint": "輸入 15000, 20000 按 Enter，絕不要用滑鼠目測拖曳"
      },
      {
        "step": 3,
        "title": "建立地坪厚度並成組",
        "action": "使用 推拉工具 (P) 向上拉伸 300mm，連續按左鍵三次全選",
        "keyPoint": "按右鍵選擇「建立群組 (Make Group)」，封裝防黏附"
      },
      {
        "step": 4,
        "title": "建立牆體外框",
        "action": "在頂面繪製封閉線，使用 偏移工具 (F) 向內偏移 200mm (外牆厚度)",
        "keyPoint": "保持雙擊群組內部進入編輯模式，確保線條屬於該物件"
      },
      {
        "step": 5,
        "title": "推拉出樓層淨高",
        "action": "點選環狀牆面，使用 推拉工具 (P) 向上拉伸 3600mm",
        "keyPoint": "在右下角量度框精確輸入 3600 並 Enter"
      },
      {
        "step": 6,
        "title": "開門開窗開口",
        "action": "在牆面畫矩形，使用 推拉工具 (P) 向內推 200mm 直到顯示「在面上 (On Face)」",
        "keyPoint": "系統自動挖穿牆體，形成乾淨門窗洞口"
      },
      {
        "step": 7,
        "title": "製作窗戶元件",
        "action": "繪製鋁窗框與玻璃面，全選後按 G 建立「元件 (Component)」",
        "keyPoint": "勾選「切割開口 (Cut Opening)」與「貼附至垂直表面」"
      },
      {
        "step": 8,
        "title": "指定標籤分類",
        "action": "開啟 Tags 面板，建立「01_結構柱梁」、「02_外牆」、「03_門窗」",
        "keyPoint": "將剛做好的群組指定至對應 Tag，但幾何基本線面永遠維持在 Untagged"
      },
      {
        "step": 9,
        "title": "設定相機視角與場景",
        "action": "點選 相機 (Camera) → 兩點透視 (Two-Point Perspective)",
        "keyPoint": "在場景 (Scenes) 面板點選「+」儲存視角，避免手滑跑掉"
      },
      {
        "step": 10,
        "title": "啟用日照陰影出圖",
        "action": "開啟 陰影 (Shadows) 面板，將日光打開，設定時間下午 14:00",
        "keyPoint": "檔案 → 匯出 → 2D 圖形，輸出高解析度 PNG 或匯入 LayOut"
      }
    ],
    "shortcuts": [
      {
        "key": "空白鍵 (Space)",
        "command": "選取工具 (Select Tool)",
        "explanation": "左手無名指隨時歸位的最重要的工具，結束任何命令",
        "frequency": "必須秒按",
        "mnemonic": "無事按空白，隨時好選取",
        "contextModifier": "Shift 加選 / Ctrl 減選"
      },
      {
        "key": "L",
        "command": "線條工具 (Line)",
        "explanation": "繪製基準線，配合鍵盤方向鍵鎖定紅綠藍軸",
        "frequency": "必須秒按",
        "mnemonic": "L 接線走天下",
        "contextModifier": "方向鍵鎖軸"
      },
      {
        "key": "R",
        "command": "矩形工具 (Rectangle)",
        "explanation": "繪製二維基準平面，輸入長寬",
        "frequency": "必須秒按",
        "mnemonic": "R 畫基地框"
      },
      {
        "key": "P",
        "command": "推拉工具 (Push/Pull)",
        "explanation": "平面變立體之靈魂工具，雙擊可重複前次推拉深度",
        "frequency": "必須秒按",
        "mnemonic": "P 推平起高樓",
        "contextModifier": "Ctrl 新增區段"
      },
      {
        "key": "M",
        "command": "移動 / 複製 (Move/Copy)",
        "explanation": "按一次 Ctrl 鍵切換為複製模式，輸入 *5 可等距陣列",
        "frequency": "高頻常用",
        "mnemonic": "M 移動、Ctrl 複製、*N 陣列",
        "contextModifier": "Ctrl 切換複製"
      },
      {
        "key": "Q",
        "command": "旋轉 / 陣列 (Rotate)",
        "explanation": "按 Ctrl 複製旋轉，輸入角度與除號 /3 可均分角度",
        "frequency": "高頻常用",
        "mnemonic": "Q 旋轉分扇區",
        "contextModifier": "Ctrl 旋轉複製"
      },
      {
        "key": "S",
        "command": "比例縮放 (Scale)",
        "explanation": "拉伸物件，按住 Shift 維持等比例，按住 Ctrl 以中心縮放",
        "frequency": "高頻常用",
        "mnemonic": "S 縮放調尺寸",
        "contextModifier": "Shift 等比 / Ctrl 中心"
      },
      {
        "key": "F",
        "command": "偏移工具 (Offset)",
        "explanation": "繪製等厚度牆體、女兒牆、窗框凹槽必備",
        "frequency": "必須秒按",
        "mnemonic": "F 等厚長外牆"
      },
      {
        "key": "T",
        "command": "捲尺工具 (Tape Measure)",
        "explanation": "拉出虛擬輔助參考線 (Guides) 與整體模型比例重新縮放",
        "frequency": "高頻常用",
        "mnemonic": "T 量尺定基準"
      },
      {
        "key": "E",
        "command": "橡皮擦 (Eraser)",
        "explanation": "刪除線條；按住 Shift 點線可隱藏，按住 Ctrl 點線可平滑柔化",
        "frequency": "工程利器",
        "mnemonic": "E 擦除、Ctrl 柔化",
        "contextModifier": "Ctrl 柔化邊線"
      },
      {
        "key": "B",
        "command": "顏料桶 (Paint Bucket)",
        "explanation": "打開材質面板指定木材、石材、混凝土與玻璃材質",
        "frequency": "高頻常用",
        "mnemonic": "B 上色填質感"
      },
      {
        "key": "G",
        "command": "建立元件 (Make Component)",
        "explanation": "將選取物件封裝為可重複使用、一處改處處連動的組件",
        "frequency": "必須秒按",
        "mnemonic": "G 成組免黏連"
      }
    ],
    "fatalTraps": [
      {
        "trap": "散線散面未成組黏死在一起 (Sticky Geometry Disaster)",
        "reason": "在未群組的情況下繪製隔壁房間，新牆與舊牆共用線段，一移動整個建築模型扭曲崩潰。",
        "solution": "謹記「畫完一個構件，立即連續點三次右鍵成組 (Make Group)」之鐵律！"
      },
      {
        "trap": "材質貼在反面 (藍灰色背面朝外)",
        "reason": "SketchUp 面具備正反面特性 (白色正面、藍灰色反面)。直接將材質漆在反面上，匯入渲染器 (Enscape/Lumion) 時會黑面或破洞。",
        "solution": "在單色顯示模式下檢查，若看到藍灰色面，按右鍵選擇「反轉表面 (Reverse Faces)」。"
      },
      {
        "trap": "隨意將基本線面指定給不同標籤 (Tags Confusion)",
        "reason": "新手常將群組內部的線和面分別指定給不同 Tag，關閉 Tag 時幾何圖形破面漏光。",
        "solution": "群組內部所有的原始邊線與表面永遠保持在「未標記 (Untagged)」，只對最外層群組指定 Tag。"
      },
      {
        "trap": "模型檔案爆衝數百 MB，電腦動彈不得",
        "reason": "直接從 3D Warehouse 下載極高面數的多邊形沙發、樹木或跑車，一個零件就含有數十萬個面。",
        "solution": "定期執行「視窗 → 模型資訊 → 統計 → 清除未使用項 (Purge Unused)」，並用 Transmutr 簡化模型。"
      }
    ],
    "proTips": [
      {
        "title": "鍵盤方向鍵是軸向鎖定神器",
        "description": "畫線或移動時：按「上箭頭」強制鎖定藍軸 (Z)；「右箭頭」鎖定紅軸 (X)；「左箭頭」鎖定綠軸 (Y)；按「下箭頭」可平行於任何自選斜線。"
      },
      {
        "title": "捲尺工具全模型等比重新定標",
        "description": "若匯入的 CAD 圖面比例不對，用捲尺工具 (T) 測量一段已知為 5000mm 的牆，直接在鍵盤輸入 5000 並按 Enter，系統會詢問「是否要調整模型大小？」，點「是」即可全模型完美縮放。"
      },
      {
        "title": "外掛神兵裝備庫",
        "description": "務必安裝 Fredo6 工具箱 (Curviloft 曲面放樣, JointPushPull 聯合推拉)、Profile Builder 3 (快速沿線鋪設鋼骨與踢腳線) 及 Skalp (自動施工圖剖面塗黑填色)。"
      }
    ]
  },
  "sevenIterations": [
    {
      "round": 1,
      "badge": "R1 基礎核心認知",
      "title": "直覺式推拉邏輯與 3D 空間推論捕捉引擎",
      "focus": "掌握 SketchUp 底層基石：點、線、面的構成規律與單手快捷鍵流暢作業。",
      "contentExpansion": "由零開始建立正交座標思維，徹底解析紅綠藍三軸向空間法則，精準度達到 0.1mm 級別，擺脫肉眼目測的低級錯誤。",
      "coreTheory": "SketchUp 採用邊界表示法 (B-Rep) 的多邊形面網格系統。當一條封閉共平面的邊線閉合時，系統即自動生成表面 (Face)。推論捕捉引擎 (Inference Engine) 會自動以綠色圓點標示端點 (Endpoint)、青色標示中點 (Midpoint)、紅色標示面內 (On Face)，並發出聲音與視覺反饋。",
      "mathematicalFormula": "向量叉積共面判定：(v1 × v2) · v3 = 0 成立時，閉合多邊形頂點方可成功生成 Face。",
      "advancedParameters": [
        {
          "name": "Length Snapping (長度鎖定)",
          "value": "1.0 mm (關閉強制整數鎖定)",
          "purpose": "防止微小尺度被四捨五入造成縫隙"
        },
        {
          "name": "Angle Units (角度單位)",
          "value": "0.1 度",
          "purpose": "斜交建築軸線精確捕捉"
        }
      ],
      "practicalWalkthrough": [
        "設定工作樣板為 Architectural - Millimeters",
        "使用 Line 與 Rectangle 命令搭配鍵盤方向鍵進行精確尺度輸入",
        "實施 Push/Pull 產生 3D 體積，測試 Ctrl 鍵新增推拉區段之技巧",
        "熟練 Orbit、Pan、Zoom 之單手盲操，將左手固定於鍵盤左側，右手不離滑鼠"
      ],
      "industryStandardOrCode": "CNS 11567 建築製圖基準尺度與單位標註規範 (mm 為標準公制單位)。",
      "pitfallsAndVerification": "檢驗標準：在線框模式 (Wireframe) 檢視幾何體，確認無多餘內部重疊面 (Coplanar coplanar hidden geometry)。",
      "diagnosticDecisionTree": [
        "問題：畫了封閉多邊形卻沒有產生面？",
        "步驟 1：開啟「檢視 → 隱藏幾何形體」，檢查頂點是否有微小 Z 高差",
        "步驟 2：用線條工具從對角畫一條分割線，若一側補出面，代表點不共面",
        "步驟 3：使用 Flatten To Plane 外掛一鍵將所有點壓平回同一水平面"
      ],
      "masteryChecklist": [
        "能全盲操使用方向鍵鎖定紅綠藍三軸",
        "能在小鍵盤精確輸入「長度, 寬度」而不動滑鼠",
        "熟練區分面之正面 (白色) 與反面 (藍灰色)"
      ]
    },
    {
      "round": 2,
      "badge": "R2 建築製圖規範",
      "title": "圖層標籤體系與標準建築構造分離",
      "focus": "建立符合事務所出圖標準的 Tags 階層管理架構，將結構、裝修、機電清晰拆解。",
      "contentExpansion": "延伸內容擴充 120%：導入 AIA / ISO 13567 圖層命名準則，架構 15 組標準建築標籤資料夾，達成一鍵切換結構體、水電管線與家具配置圖。",
      "coreTheory": "Tags (前身為 Layers) 不包含幾何體本身，而是控制群組的可見度控制器。若缺乏嚴謹的標籤架構，在建築設計深化階段將無法抽離結構體單獨交付結構技師，亦無法單獨隱藏屋頂檢視室內空間。",
      "advancedParameters": [
        {
          "name": "01_STR (結構群組)",
          "value": "顏色: 藍色 #0055FF",
          "purpose": "柱梁承重結構隔離檢視"
        },
        {
          "name": "02_WALL_EXT (外牆)",
          "value": "顏色: 綠色 #00AA55",
          "purpose": "立面外殼量體控制"
        },
        {
          "name": "03_INTERIOR (內隔間)",
          "value": "顏色: 橙色 #FF8800",
          "purpose": "室內裝修平面出圖"
        }
      ],
      "practicalWalkthrough": [
        "建立以編號開頭的標籤：01_GRID (網格軸線)、02_STR_COL (結構柱)、03_STR_BEAM (大梁)、04_WALL_EXT (外牆)、05_WALL_INT (室內隔間)",
        "為柱梁建立獨立群組並分派至對應標籤",
        "使用標籤顏色 (Color by Tag) 功能，視覺化檢驗構件是否正確歸類",
        "設定場景 (Scenes) 記憶不同標籤的開啟/關閉狀態，為平面、結構與水電保留獨立視圖"
      ],
      "industryStandardOrCode": "AIA CAD Layer Guidelines 與 ISO 13567-1 電腦輔助建築設計圖層結構標準。",
      "pitfallsAndVerification": "嚴禁將 Untagged 之外的標籤設為「作用中筆刷」，確保新畫線面永遠原生屬於 Untagged。",
      "diagnosticDecisionTree": [
        "問題：隱藏了某個標籤，模型表面卻破了一塊大洞？",
        "原因：該構件內部的原始表面被分派到了已隱藏的標籤",
        "解法：進入群組內部全選線面，在 Entity Info 中強制將 Tag 設回「Untagged」"
      ],
      "masteryChecklist": [
        "嚴格落實基本線面永遠維持在 Untagged",
        "能運用「依標籤著色 (Color by Tag)」快速稽核誤漏分組",
        "能為平面、立面、剖面建立獨立標籤狀態記憶場景"
      ]
    },
    {
      "round": 3,
      "badge": "R3 高階幾何拓撲",
      "title": "實體工具運算與有機曲面放樣技巧",
      "focus": "突破方盒子建築限制，運用 Solid Tools 布林運算與外掛進行複雜屋頂、坡道與遮陽板造型。",
      "contentExpansion": "延伸內容擴充 150%：深入實體 (Solid Group) 檢驗演算法，掌握曲面法線連續性，使用 Curviloft 與 SubD 打造國際級地標雙曲面造型。",
      "coreTheory": "一個「實體 (Solid)」在 SketchUp 中被定義為：封閉的、沒有漏孔、沒有內部多餘隔面、每條邊緣恰好被兩個面共享的幾何體。只有符合 Solid 定義的群組才能進行 Union (聯集)、Subtract (差集)、Trim (修剪) 與 Intersect (交集) 運算，且能精確計算立方公尺體積。",
      "mathematicalFormula": "歐拉多面體公式驗證：頂點數 V - 邊數 E + 面數 F = 2 (虧格為 0 之封閉實體)。",
      "practicalWalkthrough": [
        "使用「實體資訊 (Entity Info)」面板確認群組上方顯示為「Solid Group (實體群組)」",
        "利用 Subtract 工具，以地下室開挖體積快速挖空基地地形網格",
        "安裝 Curviloft 外掛，選取三條自由空間曲線進行放樣蒙皮 (Loft by Splines)",
        "使用 Artisan / SubD 外掛對低模網格進行細分柔化，創造張力薄膜建築屋頂"
      ],
      "industryStandardOrCode": "計算建築挖填土方體積與鋼筋混凝土澆置立方公尺工程量算規範。",
      "pitfallsAndVerification": "若實體工具反灰失效，使用 Solid Inspector 2 外掛一鍵偵測漏孔邊緣並自動修復。",
      "diagnosticDecisionTree": [
        "問題：實體工具按鈕全變灰色無法點選？",
        "診斷 1：檢查 Entity Info 是否顯示為 \"Solid Group\"",
        "診斷 2：若顯示 \"Group\"，表示內部有雜線、廢點或共用隔面",
        "解法：執行 Solid Inspector 2，按「Fix All」自動修復內部漏面"
      ],
      "masteryChecklist": [
        "能 100% 做出被系統判定為 Solid Group 的複合幾何體",
        "能運用 Subtract 進行地下室土方開挖與坡道銜接",
        "能運用 Curviloft 進行多軌跡曲線放樣"
      ]
    },
    {
      "round": 4,
      "badge": "R4 BIM 參數化與算料",
      "title": "動態元件 (Dynamic Components) 與 IFC 屬性資料庫",
      "focus": "將純幾何模型升級為帶有工程屬性的智慧建築構件，自動統計門窗清單與造價。",
      "contentExpansion": "延伸內容擴充 180%：編寫動態元件數學函數 (OnClick, RotZ, LenX)，封裝 IFC 2x3 建築屬性標籤，完成自動生成門窗數量表之全流程。",
      "coreTheory": "SketchUp 內建 IFC 分類器 (Classifier)。賦予構件 IfcWall、IfcWindow 或 IfcBeam 屬性後，模型即躍升為 OpenBIM 規格。動態元件支援自訂屬性與公式，例如讓百葉窗依據建築開窗寬度自動計算所需葉片數量，點擊即可開關門窗。",
      "codeSnippet": {
        "language": "plaintext",
        "title": "動態百葉窗百葉片數自動計算公式",
        "code": "// 在 Component Attributes 中設定：\nLenZ = 2100 (窗框總高)\nBladePitch = 150 (百葉間距)\nBladeCount = INT(LenZ / BladePitch)\nRotX = CURRENT(\"RotX\")\nOnClick = SET(\"RotX\", 0, 45, 90)",
        "explanation": "百葉窗隨總高拉伸自動計算所需葉片數，點擊可在 0度(關閉)、45度(遮陽)、90度(通風) 間循環切換。"
      },
      "practicalWalkthrough": [
        "進入 工具 → 進階相機工具 / 屬性分類器，載入 IFC2x3.skc 檔案",
        "選取門元件，在分類器中指定其為 IfcDoor，輸入防火時效 (FireRating = 1hr) 與隔音等級",
        "開啟 動態元件屬性 (Component Attributes)，新增 LenX, LenY, LenZ 參數",
        "使用 產生報告 (Generate Report) 功能，一鍵輸出全棟建築門窗編號、數量、尺寸與材料 Excel 報表"
      ],
      "industryStandardOrCode": "buildingSMART IFC (Industry Foundation Classes) 國際開放 BIM 資料交換標準。",
      "pitfallsAndVerification": "透過免費 openBIM 檢視器 (如 BIMvision) 開啟匯出的 IFC，驗證屬性欄位無缺失遺漏。",
      "diagnosticDecisionTree": [
        "問題：匯出的 IFC 模型在 Revit 開啟時變成無屬性直方塊？",
        "原因：匯出前未指定 IFC 分類標籤，或僅指定在最外層群組",
        "解法：在 Windows → Classifier 中明確指派 IfcWall, IfcDoor, IfcWindow 標籤"
      ],
      "masteryChecklist": [
        "能為門窗編寫 OnClick 旋轉開關動態公式",
        "能指派 IFC2x3 屬性並成功匯出驗證",
        "能使用 Generate Report 匯出工程門窗數量明細表"
      ]
    },
    {
      "round": 5,
      "badge": "R5 專業成圖與出圖",
      "title": "Trimble LayOut 動態連動施工圖成圖系統",
      "focus": "解決「3D 漂亮但出不了施工圖」的致命痛點，建立 1/100 施工圖紙集與動態標註。",
      "contentExpansion": "延伸內容擴充 200%：完整建置 A1 標準圖紙模組，涵蓋圖紙索引、平立剖視埠比例尺對齊、CNS 線型線寬映射與圖號自動交叉參照。",
      "coreTheory": "LayOut 不是獨立的繪圖軟體，而是 SketchUp 的動態圖紙載體。LayOut 中的視埠 (Viewport) 直接連結 SKP 檔案。當建築師在 3D 中把柱子往外推 50 公分，LayOut 中的平面圖、立面圖、剖面圖與尺寸標註會自動在重載後即刻修正，杜絕人工作圖改漏問題。",
      "advancedParameters": [
        {
          "name": "Line Weight (線條寬度)",
          "value": "0.35 pt (主要剖面輪廓)",
          "purpose": "CNS 粗實線表現"
        },
        {
          "name": "Rendering Mode",
          "value": "Hybrid (混合)",
          "purpose": "兼顧向量銳利邊線與光影陰影"
        },
        {
          "name": "Output Resolution",
          "value": "High (300 DPI)",
          "purpose": "A1 列印無鋸齒"
        }
      ],
      "practicalWalkthrough": [
        "在 SketchUp 建立「平面圖 (剖切平面高度 120cm)」、「南立面」、「剖面 A-A」專屬場景",
        "在 檔案 選單點選「傳送到 LayOut (Send to LayOut)」，選擇 A1 Landscape 圖紙範本",
        "在 LayOut 的 SketchUp 模型面板中設定視埠比例尺為 1:100，彩現模式設為 Hybrid",
        "使用 LayOut 標註工具進行尺寸標註、標高符號放置與構造剖面文字引線說明",
        "匯出多頁式向量 PDF 交付營造廠或申請建造執照"
      ],
      "industryStandardOrCode": "內政部營建署建築執照圖說審查標準與 CNS 11567 建築工程圖繪製規定。",
      "pitfallsAndVerification": "視埠切記不可使用 Raster (點陣) 模式出圖，否則列印放大會模糊；必須採用 Hybrid (混合) 兼具銳利邊線與材質陰影。",
      "diagnosticDecisionTree": [
        "問題：LayOut 視埠比例尺被鎖死反灰無法調整？",
        "原因：在 LayOut 中手動雙擊進入了視埠內部調整了視角",
        "解法：右鍵點選視埠選擇「重設相機 (Reset Camera)」，即可重新指定 1:100 比例尺"
      ],
      "masteryChecklist": [
        "能建立多個專用場景 (Scenes) 並取消勾選視角包含",
        "能將視埠彩現模式設為 Hybrid 混合模式",
        "能產出帶有自動連鎖尺寸標註的 A1 施工圖紙 PDF"
      ]
    },
    {
      "round": 6,
      "badge": "R6 物理光影與視覺化",
      "title": "兩點透視攝影法則與 PBR 即時渲染實戰",
      "focus": "結合 Enscape / V-Ray 打造照片級競圖透視圖，精準掌握建築光影調度與大氣表現法。",
      "contentExpansion": "延伸內容擴充 220%：剖析建築攝影兩點透視光學幾何，詳解 PBR 粗糙度/法線/金屬度材質對光子反彈之物理行為，建構日景、黃昏、夜景三種情境預設。",
      "coreTheory": "在建築視覺表現法中，所有垂直方向的建築立面柱線必須絕對垂直於地平線 (90度)，若產生三點透視傾斜會造成建築物向後倒塌的視覺不適感。物理材質 (PBR) 遵循能量守恆定律，反射光能永遠小於或等於入射光能，配合真實地理經緯度太陽光天球模型，方能呈現真實光影層次。",
      "advancedParameters": [
        {
          "name": "Field of View (視角)",
          "value": "55 度 (人眼舒適廣角)",
          "purpose": "防止立面嚴重拉伸變形"
        },
        {
          "name": "Sun Intensity (太陽強度)",
          "value": "100,000 Lux (正午)",
          "purpose": "模擬真實物理光照度"
        },
        {
          "name": "Glass IOR (玻璃折射率)",
          "value": "1.52",
          "purpose": "精準呈現建築玻璃反射與折射"
        }
      ],
      "practicalWalkthrough": [
        "切換相機為「兩點透視 (Two-Point Perspective)」，調整相機高度至人眼水平視角 (1600mm)",
        "開啟 Enscape 材質編輯器，為清水混凝土貼圖加入 Roughness (粗糙度) 與 Normal (法線凹凸) 貼圖通道",
        "設定玻璃材質為物理反射玻璃，調整折射率 IOR 為 1.52，不透明度透明度設為 15%",
        "置入人造光源：洗牆燈 (IES 光域網)、天花嵌燈 (Spotlight) 與室內線燈 (Linear Light)",
        "批次輸出 4K (3840x2160) 無損 TIFF 格式渲染圖，並進行色彩階調後製"
      ],
      "industryStandardOrCode": "CIE 國際照明委員會標準日光光譜與 IESNA 燈具光束角測量標準。",
      "pitfallsAndVerification": "檢查渲染畫面垂直線是否絕對垂直，嚴禁廣角變形過大 (視角 Field of View 建議控制在 45°~65° 之間)。",
      "diagnosticDecisionTree": [
        "問題：渲染出來的玻璃完全黑掉或看不到室內？",
        "步驟 1：檢查玻璃背後是否有厚度 (雙層玻璃需建模兩面)",
        "步驟 2：檢查玻璃面的法線是否朝外 (反面朝外會導致光線折射全反射出不來)",
        "步驟 3：在 Enscape 材質中調整 Opacity 為 10~20%，Specular 提高至 80%"
      ],
      "masteryChecklist": [
        "能運用兩點透視鎖定建築垂直立柱",
        "能配置完整 PBR (Albedo/Roughness/Normal) 材質通道",
        "能配置符合 CIE 色溫規範之日景與夜景情境"
      ]
    },
    {
      "round": 7,
      "badge": "R7 業界協同與 AI 未來",
      "title": "Trimble Connect 雲端協同與 AI 輔助概念演算法生成",
      "focus": "整合現代事務所雲端團隊作業模式，並串接 Veras / ControlNet 進行文字與草圖 AI 即時算圖。",
      "contentExpansion": "延伸內容擴充 250%：實現多位設計師同時在同一建築專案作業（一人負責外殼、一人負責室內、一人負責景觀），並導入 AI 生成技術在保留精確建築空間幾何前提下進行 10 秒多材質風格發想。",
      "coreTheory": "透過參考模型 (Reference Models) 與 Trimble Connect 雲端協同，建築師事務所擺脫「一人存檔其他人不能動」的單兵作業瓶頸。AI 輔助工具 (如 Veras 或 Stable Diffusion ControlNet) 能夠精確提取 SketchUp 的 Depth Map (深度圖) 與 Line Art (邊緣線稿)，將其作為約束條件，生成驚人的大師級氛圍概念圖。",
      "practicalWalkthrough": [
        "在 Trimble Connect 建立專案雲端倉庫，設定角色權限 (管理員、協作者、檢視者)",
        "將景觀、結構、室內作為外部參考 (XREF) 連結至總組裝模型，自動版本差異對比",
        "安裝 Veras AI 外掛，在 SketchUp 視窗內輸入提示詞：「Brutalist concrete museum, overcast diffused lighting, lush green moss」",
        "設定 Geometry Override 參數為 0 (完全鎖定建築空間形體)，一鍵生成 4 組方案材質競圖提案",
        "透過 Trimble Connect 進行現場 AR 擴增實境對齊，將 3D 模型投影至施工工地現場進行品管檢核"
      ],
      "industryStandardOrCode": "ISO 19650 全球建築資訊管理 (BIM) 協同作業標準與雲端共同資料環境 (CDE) 規範。",
      "pitfallsAndVerification": "AI 生成內容僅能做為材質與氛圍參考，切勿直接以 AI 圖面取代具有尺寸精確度之施工圖面。",
      "diagnosticDecisionTree": [
        "問題：多人協同作業時，同事上傳的結構模型與我的建築平面位置偏移？",
        "原因：兩台電腦未統一專案原點 (Project Origin 0,0,0)",
        "解法：在基地圖中定出固定放樣基準點，雙方均以此點作為世界座標原點對齊"
      ],
      "masteryChecklist": [
        "能透過 Trimble Connect 上傳並連結外部參考模型",
        "能運用 Veras / ControlNet 在鎖定幾何邊界下生成材質意象",
        "能執行工地現場 AR 模型對位核對施工放樣"
      ]
    }
  ],
  "industryPipeline": {
    "stage": "前置規劃 → 概念發想 → 方案深化 → 施工圖紙集 (LayOut)",
    "softwareRole": "方案發想中心與快速體量檢討引擎，協同 Enscape/V-Ray 進行提案視覺化，搭配 LayOut 成圖出圖。",
    "fileFormats": {
      "import": [
        "DWG",
        "DXF",
        "OBJ",
        "IFC",
        "PNG/JPG",
        "DEM 高程地形"
      ],
      "export": [
        "DWG",
        "DXF",
        "PDF (LayOut)",
        "IFC 2x3/4",
        "OBJ",
        "FBX",
        "DAE",
        "VRML"
      ]
    },
    "collaborationWith": [
      "AutoCAD (2D 平面底圖匯入)",
      "Revit (概念體量轉入 Revit 建構族群)",
      "Rhino (曲面構件匯入)",
      "Enscape / Lumion (即時渲染)",
      "Photoshop (提案排版)"
    ]
  },
  "learningResources": [
    {
      "title": "Trimble SketchUp Campus - 官方建築設計與量體推敲大師班",
      "provider": "Trimble SketchUp Official",
      "category": "官方原廠教學",
      "url": "https://learn.sketchup.com",
      "description": "Trimble 官方認證學習平台，由全球資深建築講師親授空間概念推敲、群組管理與大場景優化。",
      "badge": "原廠官方大師班"
    },
    {
      "title": "Trimble LayOut 建築施工圖排版與向量出圖全攻略",
      "provider": "Trimble SketchUp Official",
      "category": "官方原廠教學",
      "url": "https://help.sketchup.com/en/layout/layout",
      "description": "深入 LayOut 與 SketchUp 雙向連動、剖面線切面著色、尺寸標註樣式與 A1/A0 施工圖冊發布。",
      "badge": "施工圖排版手冊"
    },
    {
      "title": "SketchUp Ruby API Official Developer Documentation",
      "provider": "Trimble Developer Center",
      "category": "官方原廠教學",
      "url": "https://ruby.sketchup.com",
      "description": "建築自動化開發手冊，涵蓋實體拓撲遍歷 (Entities)、幾何面生成 (Face/Edge) 與外掛工具開發。",
      "badge": "開發者核心手冊"
    },
    {
      "title": "SketchUp 3D Warehouse 認證建築元件庫規範",
      "provider": "Trimble 3D Warehouse",
      "category": "實務工作流與開放標準",
      "url": "https://3dwarehouse.sketchup.com",
      "description": "全球最大建築 3D 模型庫，涵蓋大廠衛浴五金、家具構件與動態元件 (Dynamic Components) 規範。",
      "badge": "全球元件資料庫"
    },
    {
      "title": "SketchUp Extension Warehouse 建築專業必備擴充套件庫",
      "provider": "Trimble Extension Warehouse",
      "category": "實務工作流與開放標準",
      "url": "https://extensions.sketchup.com",
      "description": "精選建築必備外掛：Curviloft (曲面放樣)、Artisan (細分曲面)、Eneroth (實體工具)、SectionCutFace。",
      "badge": "外掛擴充庫"
    }
  ],
  "certificationStandards": [
    {
      "name": "Trimble SketchUp Certified Professional (SCP)",
      "level": "國際原廠專家級認證",
      "authority": "Trimble Inc.",
      "description": "考核建築方案快速推敲、實體工具布林運算、群組元件階層、陰影物理分析與 LayOut 施工圖整合能力。",
      "keyCompetencies": [
        "幾何推理引擎 (Inference Engine) 極限運用",
        "動態元件 (Dynamic Components) 公式開發",
        "大場景階層管理 (Outliner) 與風格設定",
        "LayOut 混合渲染 (Hybrid) 與圖紙集出圖"
      ],
      "officialExamUrl": "https://learn.sketchup.com"
    }
  ]
};
