import { CadSoftware } from '../types';

export const autocadData: CadSoftware = {
  "slug": "autocad",
  "name": "AutoCAD",
  "englishName": "Autodesk AutoCAD",
  "vendor": "Autodesk",
  "releaseYear": "1982 (由 John Walker 等人創立，歷史最悠久之 CAD 工業標準)",
  "tag": "電腦繪圖",
  "category": "產業標準 2D/3D 電腦輔助設計與建築施工圖出圖",
  "badge": "全球建築工程製圖基準法典",
  "rating": {
    "learningCurve": "平緩至中等 (指令簡潔直接，但精通出圖與系統變數需長期磨練)",
    "industryAdoption": "統包工程、營造廠與公部門執照審查普及率 99%",
    "bimCapability": "傳統 CAD (需外掛或轉換為 DWG 幾何傳遞，非原生 BIM)",
    "drawingOutput": "業界標竿 No.1 (出圖樣式表 CTB/STB 與線寬層級極致精準)",
    "renderingQuality": "基礎級 (具備基本光追，但業界通常導出至 3ds Max/Blender)"
  },
  "shortDesc": "全球建築工程領域通用之通用語言。以 DWG 格式為基石，統御 40 年營造工程施工圖、執照圖、大樣節點與跨工種套圖協同。",
  "fullDesc": "AutoCAD 是現代電腦輔助建築設計的奠基石。無論 BIM 技術如何演進，營造工地現場所流轉的施工圖、台灣各縣市政府都發局之建照審查電子圖檔，以及結構、水電、空調、消防跨領域套圖，DWG 格式依然是不可撼動的法律級標準。透過極致精準的動態圖塊 (Dynamic Blocks)、外部參考 (XREF)、圖紙集管理器 (Sheet Set Manager) 與 AutoLISP 腳本擴充，AutoCAD 賦予建築師無可匹敵的精確出圖控制力。",
  "officialUrl": "https://www.autodesk.com/products/autocad/overview",
  "studentLicenseUrl": "https://www.autodesk.com/education/edu-software/overview",
  "docUrl": "https://help.autodesk.com/view/ACD/2025/ENU/",
  "communityUrl": "https://forums.autodesk.com/t5/autocad-forum/bd-p/706",
  "heroMetrics": [
    {
      "label": "全球工程普及率",
      "value": "99% 產業通用標準"
    },
    {
      "label": "專利檔案格式",
      "value": "DWG/DXF 跨世代相容"
    },
    {
      "label": "國家出圖標準",
      "value": "CNS 11567 100% 吻合"
    },
    {
      "label": "二次開發語言",
      "value": "AutoLISP / Visual LISP"
    }
  ],
  "architecturalApplications": [
    {
      "area": "全套建築執照與施工圖集成圖",
      "title": "CNS 11567 標準建築平立剖面圖與大樣圖",
      "description": "設定標準線寬比 (粗/中/細)、文字樣式、多重引線標籤與圖框，產出具備法定審查效力之全套建築施工圖紙。",
      "deepDivePrinciples": [
        "CTB 顏色相依出圖樣式表 (Color-Dependent Plot Styles)：將 AutoCAD 255 色彩索引 (ACI) 嚴格映射至 0.09mm ~ 0.70mm 實體出圖線寬",
        "模型空間 (Model Space, 1:1 真實比例) 與配置圖紙空間 (Paper Space, 比例尺視埠 Viewports) 解耦架構",
        "註解比例 (Annotation Scale) 自動適配：單一文字與標註圖元在 1/100 平面與 1/30 局部大樣視埠中自動維持 2.5mm 印刷高度"
      ],
      "realWorldCase": "新北市板橋高層集合住宅建照申請案：全套 120 張 A1 申請圖說（平立剖、防空避難室、停車空間計算）皆由 AutoCAD 配置圖紙空間輸出向量 PDF 審查。",
      "standardCodeRef": "經濟部標準檢驗局 CNS 11567 (A1042)《建築製圖》與內政部營建署《建築物使用執照電子化審查圖說規範》。",
      "codeSnippet": {
        "language": "lisp",
        "title": "AutoLISP 快速計算封閉多段線面積並自動寫入文字標記",
        "code": "(defun c:CalRoomArea ( / ent areaVal pt)\n  (vl-load-com)\n  (setq ent (car (entsel \"\\n請選取封閉多段線房間輪廓 (LWPOLYLINE): \")))\n  (if ent\n    (progn\n      (setq areaVal (/ (vlax-curve-getArea ent) 1000000.0)) ; mm² 換算為 m²\n      (setq pt (getpoint \"\\n請指定文字放置位置: \"))\n      (command \"_TEXT\" pt 250 0 (strcat (rtos areaVal 2 2) \" m² (\" (rtos (* areaVal 0.3025) 2 2) \" 坪)\"))\n      (princ (strcat \"\\n已成功標註面積: \" (rtos areaVal 2 2) \" m²\"))\n    )\n  )\n  (princ)\n)",
        "explanation": "利用 Visual LISP 取得多段線曲線面積，一鍵將平方公尺與台灣習慣之坪數自動寫入圖面，杜絕人工計算錯誤。"
      },
      "technicalDetails": [
        "WCS 與 UCS 旋轉矩陣變換，精準處理基地斜交軸線配置",
        "動態圖塊 (Dynamic Block) 製作多規格鋁門窗與雙向推開門符號",
        "圖紙集管理器 (Sheet Set Manager) 實現多頁 PDF 批次發布與目錄圖號自動連動"
      ],
      "deliverables": [
        "CNS 標準 A1/A0 建築執照圖集",
        "1/50 樓梯大樣與外牆斷面圖",
        "全區水電瓦斯套繪圖說"
      ]
    },
    {
      "area": "跨工種外部參考協同套圖",
      "title": "XREF 多工種建築、結構、機電整合套圖",
      "description": "利用外部參考 (External References) 作為多人分工核心，建築底圖一處更新，結構工程師與水電配管工程師圖面即刻連動警示。",
      "deepDivePrinciples": [
        "Overlay (覆疊) vs Attachment (附加) 引用拓撲：使用 Overlay 徹底斬斷 A→B→A 的循環參照死結 (Circular Reference)",
        "相對路徑 (Relative Path) 連結機制：確保伺服器目錄或專案雲端同步時圖檔永遠不遺失",
        "圖層覆寫 (Layer Viewport Overrides)：在建築配置視埠中將結構圖層淡化為 8 號淺灰，凸顯室內機電管路"
      ],
      "realWorldCase": "高雄港埠旅運中心跨領域整合：營造統包團隊將 14 個專業工種（鋼構、帷幕、消防、空調、強弱電）以 XREF 疊合於統一世界坐標系 (0,0,0)，抓出 230 處梁穿越管線衝突。",
      "standardCodeRef": "ISO 13567-1 CAD 圖層架構標準與 AIA CAD Layer Guidelines。",
      "technicalDetails": [
        "指令 XATTACH 與 CLASSICXREF 進行背景靜態參照載入",
        "剪裁視窗 (XCLIP) 局部隱藏非本區段之鄰棟外參資訊",
        "外部參考比較工具 (XREF Compare) 自動以紅綠顏色高亮顯示版本間之線條差異"
      ],
      "deliverables": [
        "多工種綜合管線套圖 (CSD/SEM 圖面)",
        "結構穿越開孔預留圖",
        "營造工程施工排程干涉圖說"
      ]
    },
    {
      "area": "動態圖塊與參數化營建構件庫",
      "title": "具備幾何約束與查閱表之智慧建築圖元",
      "description": "將門窗、鋼骨型鋼 (H/I/C 型)、逃生梯踏面封裝為單一動態圖塊，可任意拉伸寬度、翻轉方向並自動查閱型鋼標準斷面尺寸。",
      "deepDivePrinciples": [
        "參數與動作解耦架構 (Parameters & Actions)：Linear Parameter 驅動 Stretch Action 達成等比例或增量拉伸",
        "查閱表 (Lookup Tables) 字典映射：綁定 CNS 鋼鐵規範尺寸，選擇型號「H 300x150x6.5x9」自動切換幾何外輪廓",
        "圖塊屬性定義 (Attribute Definition) 與欄位 (Field) 動態連結，實現圖元自動計算標高與面積"
      ],
      "realWorldCase": "大型工業廠房鋼構專案：設計團隊使用單一動態型鋼圖塊替代過去 180 個獨立 DWG 零件檔，圖檔體積減少 75%，出圖標註失誤率歸零。",
      "standardCodeRef": "CNS 2473 一般結構用軋鋼料與 CNS 11567 建築圖塊標準。",
      "technicalDetails": [
        "可見性狀態 (Visibility States) 切換單開門、雙開門與防火鐵捲門符號",
        "對齊參數 (Alignment Parameter) 讓家具與門窗碰觸牆體時自動吸附並旋轉同向",
        "屬性資料提取 (DATAEXTRACTION) 一鍵將全圖門窗編號匯出為 Excel 施工估價單"
      ],
      "deliverables": [
        "事務所標準動態圖塊構件庫 (.dwg / .dwl)",
        "自動化門窗五金明細清單",
        "結構型鋼幾何斷面標準手冊"
      ]
    },
    {
      "area": "地籍測量座標套繪與都市計畫審查",
      "title": "高斯克呂格二度分帶與 TWD97 基地定位",
      "description": "精確對齊地政事務所之地籍圖、都市計畫樁位圖與現況地形等高線圖，校正圖紙經緯度與真北偏差。",
      "deepDivePrinciples": [
        "橫麥卡托投影 (Transverse Mercator) 二度分帶坐標投影幾何計算",
        "單位換算與公差校正：地籍公尺 (m) 與建築製圖公釐 (mm) 之 1000 倍縮放矩陣處理",
        "真北 (True North) 與磁北 (Magnetic North) 之角度修正偏角矩陣"
      ],
      "realWorldCase": "台中水湳經貿園區公有地標競圖：透過 TWD97 坐標直接將地政地籍電子圖與 Google Earth KML 衛星套繪，精確鎖定退縮建築線與綠化保護帶。",
      "standardCodeRef": "地籍測量實施規則、內政部國土測繪中心 TWD97 坐標系統規範。",
      "technicalDetails": [
        "指令 BASE 與 INSBASE 設定精確插入基準點",
        "指令 ALIGN (對齊) 透過兩組控制點同時完成 2D 平移、旋轉與比例尺縮放",
        "地籍宗地線段多段線閉合性核算與淨基地面積複核"
      ],
      "deliverables": [
        "地籍地號套繪分析圖",
        "現況地形高程整地剖面圖",
        "都市計畫道路建築線指示圖"
      ]
    },
    {
      "area": "CSD/SEM 營造管線整合與結構穿梁避讓套圖",
      "title": "CSD 機電整合與 SEM 結構開孔預留套繪圖法",
      "description": "在 AutoCAD 中以不同色彩與圖層精準套疊建築、結構、給排水、消防與空調圖說，標記碰撞衝突並產出符合力學開孔規範之 SEM 圖紙。",
      "deepDivePrinciples": [
        "管線避讓力學優先級：重力排水管 (固定 1/50~1/100 坡度) > 大型風管 > 消防幹管 > 給水壓力管 > 弱電纜線槽",
        "結構穿梁開孔安全限制：開孔直徑 D <= 梁深 h / 3，開孔中心必須位於梁高中央 1/3 範圍內，且距離柱面淨距不得小於梁深 h (避開最大剪力區與塑性鉸區)",
        "相鄰兩穿孔水平淨距不得小於 3 倍較大孔徑，禁止於梁上切斷主筋或箍筋"
      ],
      "realWorldCase": "台中大型捷運聯開地下商場案：機電管線密集穿越地下室 RC 梁，透過 AutoCAD 建立 SEM 綜合套圖，提前檢出 85 處穿梁衝突並設定預埋套管，避免二次敲除混凝土破壞結構抗震力。",
      "standardCodeRef": "公共工程委員會《建築水電工程界面整合施工指引》與 ACI 318 結構混凝土梁開孔規範。",
      "codeSnippet": {
        "language": "lisp",
        "title": "AutoLISP 快速檢驗穿梁開孔安全間距與繪製預埋套管",
        "code": "(defun c:DrawSleeve ( / pt dia h r pt1 pt2)\n  (setq pt (getpoint \"\\n指定穿孔梁中心坐標點: \"))\n  (setq dia (getdist \"\\n輸入預埋套管管徑 (mm): \"))\n  (setq h (getdist \"\\n輸入主梁梁深 (mm): \"))\n  (if (> dia (/ h 3.0))\n    (alert (strcat \"【警告】開孔直徑 \" (rtos dia 2 0) \"mm 超過梁深 1/3 (\" (rtos (/ h 3.0) 2 0) \"mm)，違反結構安全規範！\"))\n    (progn\n      (command \"_CIRCLE\" pt (/ dia 2.0))\n      (command \"_RECTANG\" (list (- (car pt) 30) (- (cadr pt) (/ dia 2.0))) (list (+ (car pt) 30) (+ (cadr pt) (/ dia 2.0))))\n      (princ \"\\n已成功繪製安全範圍內之預留套管符號。\")\n    )\n  )\n  (princ)\n)",
        "explanation": "自動檢查預留開孔直徑是否超過梁深之 1/3 安全極限，若超標即發出彈跳警告，確保土建結構安全。"
      },
      "technicalDetails": [
        "以 XREF 疊合給排水 (P)、電氣 (E)、消防 (F) 與空調 (M) 四大工種圖層",
        "利用外觀顏色索引 (ACI) 區分系統：排水 (綠)、排氣 (洋紅)、冰水 (藍)、消防 (紅)",
        "產出標註預留套管頂高 (BOP) 與底高 (COP) 絕對高程之施工 SEM 圖面"
      ],
      "deliverables": [
        "綜合機電管線 CSD 平面圖",
        "結構預留開孔套管 SEM 圖紙",
        "管線垂直衝突高程斷面大樣圖"
      ]
    },
    {
      "area": "國家技能檢定 180 分鐘高分標準出圖體系",
      "title": "建築製圖應用 (電腦繪圖項) 乙/丙級檢定實作 SOP 與防雷體系",
      "description": "拆解勞動部技能檢定規範，建立從開檔、圖層配置、比例尺對齊到出圖之 180 分鐘無失誤排程，杜絕任何扣分與 0 分判定。",
      "deepDivePrinciples": [
        "零分陷阱規避天條：圖紙未依指定比例出圖判定為 0 分、主要圖面漏繪一項即不予計分、圖紙超出指定圖框範圍即視為不及格",
        "圖層線寬層級規範：剖切粗線 (0.50~0.70mm)、看見中線 (0.35mm)、細線 (標註、中心線、材質填充 0.18~0.25mm)",
        "標註三大紀律：尺寸數字永遠朝上或朝左、不可穿過圖形實體線、第一道連續尺寸起點線距輪廓 10~15mm"
      ],
      "realWorldCase": "全國技術士檢定考場：超過 35% 考生因未關閉列印比例自動縮放 (Fit to Paper) 導致實體輸出比例變成 1:103 而被判定 0 分；依本 SOP 檢核則可確保 100% 正確 1:100 出圖。",
      "standardCodeRef": "勞動部勞動力發展署《建築製圖應用職類技能檢定規範》與評審評分細則。",
      "technicalDetails": [
        "排程配速：前 15 分鐘建立樣板與圖框、60 分鐘完成主要建築平立剖面、45 分鐘標註尺度與門窗圖例、30 分鐘構造大樣、後 30 分鐘複核出圖",
        "利用 QSELECT 與 FILTER 快速篩選未設定 ByLayer 之孤兒圖元",
        "在 Layout 視埠中鎖定顯示 (Display Locked = Yes) 避免滾輪縮放破壞視埠比例"
      ],
      "deliverables": [
        "檢定標準 A3/A1 出圖 PDF/紙本",
        "合規圖層模板檔 (.dwt)",
        "180 分鐘自我模擬測試評量表"
      ]
    }
  ],
  "beginnerGuide": {
    "introduction": "AutoCAD 是建築工程師的右手。核心心法是「看指令行、左手鍵盤代碼、右手滑鼠確認、空白鍵隨時 Enter」。永遠保持 1:1 在模型空間畫真實建築尺寸。",
    "viewportControls": [
      {
        "action": "平移圖面 (Pan)",
        "keyOrMouse": "按住滑鼠滾輪不放拖曳 (或輸入 P 按空白鍵)",
        "tip": "在無限延伸的模型空間中任意平行游移"
      },
      {
        "action": "縮放視窗 (Zoom)",
        "keyOrMouse": "滾動滑鼠滾輪 (或輸入 Z 空白鍵後輸入 E)",
        "tip": "滾動滾輪以游標為中心即時放大縮小"
      },
      {
        "action": "全圖充滿畫面 (Zoom Extents)",
        "keyOrMouse": "滑鼠滾輪快速點擊兩次 (Double Click MMB)",
        "tip": "迷路時最神聖救星，立即將全圖所有物件置中拉滿畫面"
      },
      {
        "action": "框選方向差異 (Window vs Crossing)",
        "keyOrMouse": "由左往右拉 (藍框實線) vs 由右往左拉 (綠框虛線)",
        "tip": "藍框必須「完全包覆」才選取；綠框「只要碰到邊緣」就全選"
      }
    ],
    "tenStepsSop": [
      {
        "step": 1,
        "title": "設定繪圖單位與精確度",
        "action": "在指令列輸入 UNITS 並按空白鍵",
        "keyPoint": "長度類型設為「十進位 (Decimal)」，精確度設為「0.0」，插入比例設為「公釐 (Millimeters)」"
      },
      {
        "step": 2,
        "title": "建立 CNS 建築圖層系統",
        "action": "輸入 LA (LAYER) 開啟圖層管理員",
        "keyPoint": "建立 WALL (紅/0.5mm)、BEAM (黃/0.35mm)、DOOR (綠/0.25mm)、TEXT (青/0.25mm)、DIM (灰/0.18mm)"
      },
      {
        "step": 3,
        "title": "開啟精確物件鎖定 (OSNAP)",
        "action": "按下鍵盤 F3 (切換 OSNAP) 與 F8 (切換正交 Ortho)",
        "keyPoint": "輸入 OSNAP 設定勾選：端點、中點、中心點、交點、垂直點與延伸點"
      },
      {
        "step": 4,
        "title": "繪製結構柱網基準軸線",
        "action": "輸入 XL (XLINE 構造線) 或 L (LINE) 繪製第一條軸線",
        "keyPoint": "輸入 O (OFFSET) 依序偏移 6000, 7200, 6000 建立柱網網格"
      },
      {
        "step": 5,
        "title": "放置標準結構柱",
        "action": "輸入 REC (RECTANGLE) 畫 600×600 矩形柱，輸入 H (HATCH) 填入 SOLID 剖面實心色",
        "keyPoint": "全選按 B (BLOCK) 將柱建立為圖塊「COL-600x600」，利用 CO (COPY) 派發至所有軸線交點"
      },
      {
        "step": 6,
        "title": "繪製雙線外牆與內隔間",
        "action": "輸入 ML (MLINE 複線) 或繪製單線後用 O (OFFSET) 偏移 150mm 或 200mm",
        "keyPoint": "輸入 TR (TRIM) 修剪十字交會處牆體，保持牆體貫通無雜線"
      },
      {
        "step": 7,
        "title": "切開門窗洞口並插入門扇",
        "action": "在牆面畫輔助線，使用 O 偏移 900mm (門寬)，TR 修剪出洞口",
        "keyPoint": "插入動態門圖塊，利用弧線標明開啟半徑與方向"
      },
      {
        "step": 8,
        "title": "標註建築尺寸與標高",
        "action": "輸入 DLI (DIMLINEAR 線性標註) 標出開間軸線尺寸",
        "keyPoint": "接著輸入 DCO (DIMCONTINUE 連續標註) 一氣呵成拉完所有連續門窗洞口尺寸"
      },
      {
        "step": 9,
        "title": "切換至配置圖紙空間 (Layout)",
        "action": "點選左下角「配置 1 (Layout1)」標籤頁",
        "keyPoint": "按右鍵選擇「頁面設定管理員」，設定印表機為 DWG to PDF.pc3，圖紙設為 ISO A1 (841×594 mm)"
      },
      {
        "step": 10,
        "title": "開視埠並設定 1/100 比例尺出圖",
        "action": "輸入 MV (MVIEW) 拉出矩形視埠，雙擊進入視埠調整視角",
        "keyPoint": "在右下角將比例尺鎖定為「1:100」，載入事務所 monchrome.ctb 輸出完美 PDF"
      }
    ],
    "shortcuts": [
      {
        "key": "L",
        "command": "LINE (直線)",
        "explanation": "繪製兩點間之基礎線段",
        "frequency": "必須秒按",
        "mnemonic": "L 拉線最快"
      },
      {
        "key": "PL",
        "command": "PLINE (聚合線/多段線)",
        "explanation": "繪製具備寬度與連續面積之封閉多段線（算面積必備）",
        "frequency": "必須秒按",
        "mnemonic": "PL 封閉算面積"
      },
      {
        "key": "REC",
        "command": "RECTANGLE (矩形)",
        "explanation": "指定兩對角點或長寬數值生成矩形框",
        "frequency": "必須秒按",
        "mnemonic": "REC 框出梁柱"
      },
      {
        "key": "C",
        "command": "CIRCLE (圓形)",
        "explanation": "指定圓心與半徑繪製正圓形",
        "frequency": "高頻常用",
        "mnemonic": "C 畫圓柱圓洞"
      },
      {
        "key": "O",
        "command": "OFFSET (偏移複製)",
        "explanation": "指定距離將線條平行複製（畫牆厚之生命工具）",
        "frequency": "必須秒按",
        "mnemonic": "O 偏移長出牆厚"
      },
      {
        "key": "TR",
        "command": "TRIM (修剪)",
        "explanation": "點擊交線自動剪除多餘突出線段；按住 Shift 切換為延伸 (EXTEND)",
        "frequency": "必須秒按",
        "mnemonic": "TR 剪去雜線、Shift 延伸",
        "contextModifier": "按住 Shift 鍵直接切換為延伸 (Extend)"
      },
      {
        "key": "EX",
        "command": "EXTEND (延伸)",
        "explanation": "將選定線條精確延伸至特定邊界目標",
        "frequency": "高頻常用",
        "mnemonic": "EX 延伸碰頭"
      },
      {
        "key": "M",
        "command": "MOVE (移動)",
        "explanation": "選取基準點將物件平移至目標座標點",
        "frequency": "必須秒按",
        "mnemonic": "M 移動位置"
      },
      {
        "key": "CO / CP",
        "command": "COPY (複製)",
        "explanation": "多重複製圖元，輸入精確間距可連打陣列",
        "frequency": "必須秒按",
        "mnemonic": "CO 複製不斷"
      },
      {
        "key": "RO",
        "command": "ROTATE (旋轉)",
        "explanation": "選取旋轉中心點，輸入角度或利用 R 參考角度精準旋轉",
        "frequency": "必須秒按",
        "mnemonic": "RO 旋轉角度",
        "contextModifier": "輸入 R 可進行已知斜邊角度參考旋轉"
      },
      {
        "key": "F",
        "command": "FILLET (圓角/倒角)",
        "explanation": "將半徑設為 0 (R=0) 時，兩條不平行的折線瞬間精準修剪成尖角",
        "frequency": "必須秒按",
        "mnemonic": "F 圓角、R=0 尖角收邊"
      },
      {
        "key": "MA",
        "command": "MATCHPROP (性質複製)",
        "explanation": "營造界刷子神鍵，一鍵將目標物件圖層、顏色、線型同步",
        "frequency": "必須秒按",
        "mnemonic": "MA 屬性刷複製"
      }
    ],
    "fatalTraps": [
      {
        "trap": "在配置圖紙空間中縮放滾輪破壞比例尺 (Viewport Scale Corruption)",
        "reason": "雙擊進入 Layout 視埠後隨手滾動滾輪，原先精確設定的 1/100 施工圖比例尺瞬間變成 1:94.321，列印圖說完全失效。",
        "solution": "調好比例尺後，點擊視埠外框，在狀態列右下角點擊「掛鎖圖示 (Lock Viewport)」，將視埠鎖定禁止縮放。"
      },
      {
        "trap": "所有圖元畫在圖層 0 (Layer 0) 導致無法分層出圖",
        "reason": "圖層 0 是系統保留圖層，若將全圖線條皆畫在 0 層，無法單獨關閉水電管線或調整梁柱線寬，整張圖報廢。",
        "solution": "落實圖層管理，圖層 0 僅用於製作「通用動態圖塊」，實際圖元一律依建築系統分派至指定圖層。"
      },
      {
        "trap": "外部參考 (XREF) 採用絕對路徑導致發給業主全數遺失",
        "reason": "引用外部圖檔時預設為「絕對路徑 (C:\\Users\\Desktop\\...)」，寄給客戶或換台電腦開啟時全變為「找不到參照」。",
        "solution": "載入外部參考時一律選擇「相對路徑 (Relative Path)」，並使用 eTransmit (電子傳送) 自動打包所有關聯附檔。"
      },
      {
        "trap": "圖檔體積膨脹至數百 MB 且複製貼上極度卡頓 (Scale List Bloat)",
        "reason": "不同協力廠商多次複製貼上，將成千上萬組隱形註解比例尺與無用註冊應用程式 (RegApps) 感染進專案。",
        "solution": "定期輸入「-PURGE → R (清除 RegApps)」，並輸入 SCALELISTEDIT 重設為標準比例尺清單。"
      }
    ],
    "proTips": [
      {
        "title": "多善用 F8 (正交) 與 F10 (極座標追蹤) 快速切換",
        "description": "繪製建築開間正交線時常駐 F8；遇到 45 度或 30/60 度斜切屋頂時切換為 F10，極速捕捉特定斜交射線。"
      },
      {
        "title": "F 圓角指令 R=0 是最神速的兩線修剪收頭法",
        "description": "兩條線沒有相交或互相穿透時，不用按 Trim 慢慢剪；直接按 F 空白鍵 (確保 Radius=0) 點兩條線，系統自動以光速將兩端修剪閉合為完美轉角。"
      },
      {
        "title": "文字遮罩 (WIPEOUT / 標註背景遮罩) 拯救繁雜圖面",
        "description": "尺寸標註或文字穿越柱梁剖面線時，切勿手動剪斷剖面線！在標註性質中勾選「填入顏色 → 背景」，標註文字會自動壓住背景線條，保持底圖完整。"
      }
    ]
  },
  "sevenIterations": [
    {
      "round": 1,
      "badge": "R1 基礎核心認知",
      "title": "笛卡兒世界座標系統與向量推論幾何底層",
      "focus": "徹底掌握 WCS 與 UCS 數學空間模型、物件鎖定幾何演算法與單手鍵盤盲操。",
      "contentExpansion": "延伸內容擴充 100%：解析 AutoCAD 64 位元雙精度浮點數座標極限，推導 WCS (World Coordinate System) 與 UCS (User Coordinate System) 的 4×4 矩陣變換，徹底消除微小空間公差。",
      "coreTheory": "AutoCAD 之核心幾何資料庫完全基於歐幾里得幾何學與齊次座標系。任何一條直線皆由起始向量 P1(X1, Y1, Z1) 與終止向量 P2(X2, Y2, Z2) 定義。當繪製非正交建築軸線時，透過 UCS 旋轉命令，使 X 軸與斜邊平行，將複雜的三角幾何投影簡化為簡單的正交整數輸入。",
      "mathematicalFormula": "2D 旋轉坐標變換矩陣：[X', Y']^T = [cos θ, -sin θ; sin θ, cos θ] · [X - X0, Y - Y0]^T",
      "advancedParameters": [
        {
          "name": "OSMODE (鎖定模式旗標碼)",
          "value": "16383 (開啟全功能鎖定) 或 4287 (建築推薦設定)",
          "purpose": "精準二進制控制端點、交點與垂直點捕捉"
        },
        {
          "name": "ANGBASE (角度基準方向)",
          "value": "0.0 (東向 3 點鐘方向為 0 度)",
          "purpose": "符合標準數學角度定義"
        },
        {
          "name": "ANGDIR (角度旋轉方向)",
          "value": "0 (逆時針為正角度)",
          "purpose": "統一全事務所旋轉計算標準"
        }
      ],
      "practicalWalkthrough": [
        "輸入 UCS 指令，指定斜向建築牆面兩端點建立全新施工工作平面",
        "輸入 PLAN 指令並選擇 C (Current)，讓工作視窗旋轉正對斜向軸線進行正交繪圖",
        "繪製完畢後輸入 UCS 指令選擇 W (World)，一鍵恢復世界絕對座標系",
        "使用 ID 指令查詢任一點之絕對坐標，驗證點位公差在 0.001mm 以內"
      ],
      "industryStandardOrCode": "CNS 11567 A1042 建築製圖基準坐標原點標定準則。",
      "pitfallsAndVerification": "切忌在離坐標原點 (0,0,0) 數百萬公里遠處繪製模型！會導致 OpenGL 顯示卡深度緩衝區精度耗盡，引發滑鼠鎖定漂移與弧線變多邊形之異常。",
      "diagnosticDecisionTree": [
        "問題：圓形或弧線在螢幕上看起來像粗糙多邊形折線？",
        "原因：AutoCAD 為提升顯示速度，顯示解析度快取降階",
        "解法：輸入 RE (REGEN) 全圖重新生成向量緩衝區；或將 VIEWRES 設為 20000 永久保持極致圓滑"
      ],
      "masteryChecklist": [
        "能運用 UCS 與 PLAN 任意在斜向建築立面正向繪圖",
        "精確掌握二進制 OSMODE 數值開關常用鎖定點",
        "理解模型空間中 1 繪圖單位 = 1 公釐 (mm) 的神聖不變性"
      ]
    },
    {
      "round": 2,
      "badge": "R2 建築製圖規範",
      "title": "CNS 11567 國家標準線寬圖層與 CTB 樣式表架構",
      "focus": "建立嚴謹的建築圖層顏色、線寬、線型 (Linetype) 與出圖樣式表對應法則。",
      "contentExpansion": "延伸內容擴充 125%：建立涵蓋 36 組國家標準建築圖層分類表，制定 0.70 / 0.50 / 0.35 / 0.25 / 0.18 / 0.09 mm 六級線寬階層，達成施工圖主次分明極致美感。",
      "coreTheory": "建築製圖是以線條粗細傳達空間深度的藝術。剖切到的結構體（外牆、柱、梁、樓板）必須以 0.50mm 粗實線表現；投影可見的立面線條以 0.25mm 中線表現；材質鋪面、填色網底與尺寸標註線則以 0.18mm 或 0.09mm 極細線表現。透過 CTB (Color-dependent Plot Table)，可將螢幕上的醒目顏色 (Color 1-7) 於列印時全面轉譯為黑白純墨與特定磅數。",
      "advancedParameters": [
        {
          "name": "LTSCALE (全域線型比例)",
          "value": "1.0 (模型空間) 搭配 PSLTSCALE=1",
          "purpose": "確保虛線與中心線在任何比例視埠中長度一致"
        },
        {
          "name": "CELTSCALE (目前物件線型比例)",
          "value": "1.0 (禁止隨意更改個別圖元)",
          "purpose": "維護圖面線型風格全案統一"
        }
      ],
      "practicalWalkthrough": [
        "載入 CNS 國家標準線型：CENTER (軸線中心點劃線)、HIDDEN (隱藏線/虛線)、PHANTOM (投影雙點劃線)",
        "依構造分類設定圖層：A-WALL-STR (紅/0.5mm)、A-WALL-PART (綠/0.35mm)、A-GLAZ (青/0.25mm)、A-ANNO-DIMS (8號灰/0.18mm)",
        "在出圖樣式表編輯器中，將 Color 1~7 輸出顏色設定為「Black (黑色)」，抖動 (Dithering) 設為開啟",
        "將 8 號與 9 號淺灰色圖層的淡化度 (Screening) 設為 50%，使結構背景柔和退後"
      ],
      "industryStandardOrCode": "經濟部 CNS 11567《建築製圖》第 2 章圖線規範與美國 AIA CAD Layer Guidelines。",
      "pitfallsAndVerification": "嚴禁將圖元物件顏色手動強制指定為特定色碼！所有物件顏色必須永遠設定為「ByLayer (隨層)」，才能在圖層面板全域一鍵掌控。",
      "diagnosticDecisionTree": [
        "問題：在配置圖紙空間中，中心線 (CENTER) 看起來像一整條實線沒有斷點？",
        "步驟 1：輸入 PSLTSCALE 並將其數值設定為 1 (圖紙空間比例驅動)",
        "步驟 2：輸入 LTSCALE 調整全圖基準係數 (一般建議設為 10 或 15)",
        "步驟 3：輸入 REA (REGENALL) 強制重新整理所有配置視埠線型緩衝區"
      ],
      "masteryChecklist": [
        "能一眼辨識並手動調校 CTB 顏色與列印線寬之對照表",
        "所有圖元嚴格遵守 Color: ByLayer, Linetype: ByLayer, Lineweight: ByLayer",
        "能運用 PSLTSCALE 解決跨視埠比例線型不一致之難題"
      ]
    },
    {
      "round": 3,
      "badge": "R3 高階幾何拓撲",
      "title": "動態圖塊 (Dynamic Blocks) 幾何約束與資料查閱矩陣",
      "focus": "將靜態符號升級為具備拉伸、可見性、翻轉與查閱行為之參數化智慧圖塊。",
      "contentExpansion": "延伸內容擴充 150%：深入 Block Editor (圖塊編輯器) 內部參數與動作之多重依賴網路，建立單一圖塊支援 50 種門窗尺度與鋼骨型鋼自動切換。",
      "coreTheory": "動態圖塊本質為受約束圖論圖元。參數 (Parameters) 定義自變數，動作 (Actions) 定義受驅動圖元與變換係數。結合幾何約束 (Geometric Constraints: 水平、垂直、相切、同心) 與尺寸約束 (Dimensional Constraints)，可建構類似 Revit 族群 (Families) 的參數化幾何驅動體系。",
      "mathematicalFormula": "圖塊屬性變換矩陣：P_block = T(x,y) · R(θ) · S(sx, sy) · P_local",
      "advancedParameters": [
        {
          "name": "Visibility States (可見性狀態)",
          "value": "單開門 / 雙開門 / 子母門 / 推拉門",
          "purpose": "單一圖塊集合整併同類構件"
        },
        {
          "name": "Linear Parameter - Number of Grips",
          "value": "1 (單側握柄拉伸)",
          "purpose": "固定門鉸鏈端點僅允許門片拉伸"
        }
      ],
      "practicalWalkthrough": [
        "選取鋁窗幾何圖形，輸入 B (BLOCK) 並點擊「在圖塊編輯器中開啟」",
        "新增「線性參數 (Linear Parameter)」於窗寬兩端，設定最小寬度 600mm、最大寬度 2400mm，增量 100mm",
        "新增「拉伸動作 (Stretch Action)」，框選右側窗框與玻璃線條，綁定至線性參數右端點",
        "新增「翻轉參數 (Flip Parameter)」與翻轉動作，使門窗可隨時依牆體朝向向內/向外翻轉"
      ],
      "industryStandardOrCode": "CNS 11567 建築門窗圖例與開啟方向標準記號。",
      "pitfallsAndVerification": "驗證方法：利用「測試圖塊 (Test Block)」按鈕直接在沙盒視窗拖動拉伸握把與翻轉箭頭，確保玻璃格線不會脫離窗框。",
      "diagnosticDecisionTree": [
        "問題：拖曳動態圖塊握把拉伸時，圖形幾何錯位扭曲或跑位？",
        "原因：Stretch Action 的框架選取區域包含了未預期移動的基準端點",
        "解法：重新進入圖塊編輯器，右鍵點擊 Stretch Action 選擇「修改動作選取集」，重新精確框選受動頂點"
      ],
      "masteryChecklist": [
        "能獨立製作包含「拉伸、翻轉、可見性」三重動作的標準動態雙開門圖塊",
        "能運用查閱表 (Lookup) 綁定特定鋼構尺寸型號",
        "能利用 BATTMAN (屬性管理員) 同步更新全圖所有已插入圖塊之屬性欄位"
      ]
    },
    {
      "round": 4,
      "badge": "R4 建築構造深化",
      "title": "大樣構造剖面節點與填充線 (Hatch) 進階拓撲運算",
      "focus": "精準繪製 1/20 ~ 1/5 建築構造大樣圖、外牆滴水壓條、屋頂防水層與膨脹螺栓剖面。",
      "contentExpansion": "延伸內容擴充 140%：解析 AutoCAD HATCH 射線穿透演算法，掌握非封閉島嶼偵測，客製符合 CNS 規範之鋼筋混凝土、保溫材與木紋填充剖面。",
      "coreTheory": "大樣圖是建築施工的合約技術依據。剖面填充線 (Hatch) 由點集與特定角度斜線週期函數計算而成。利用關聯式剖面線 (Associative Hatch)，當梁深由 600mm 調整為 700mm 時，混凝土斜線與砂礫填充網底會自動跟隨邊界頂點延伸，無需手動刪除重填。",
      "advancedParameters": [
        {
          "name": "HPGAPTOL (剖面線間隙容差)",
          "value": "1.0 mm (容許微小公差閉合)",
          "purpose": "避免微小開口導致無法生成填充線"
        },
        {
          "name": "HPORIGIN (剖面線原點定位)",
          "value": "手動指定磁磚交點起算",
          "purpose": "精確檢討地壁磚施工起磚點與計畫縫"
        }
      ],
      "practicalWalkthrough": [
        "繪製 RC 外牆與鋁門窗崁縫大樣輪廓",
        "使用 H 指令選擇 AR-CONC (混凝土) 圖樣，填入梁柱核心區域",
        "使用 ANSI31 (45度斜剖面線) 填入鋁擠型截面，設定比例尺適配 1/10 視埠",
        "利用多重引線 (MLEADER) 加入材料標籤：如「1:3 水泥砂漿刷防裂纖維網」、「矽利康填縫防水膠」"
      ],
      "industryStandardOrCode": "CNS 11567 A1042 建築材料剖面圖樣表示法 (混凝土、木材、磚石、金屬、保溫材)。",
      "pitfallsAndVerification": "嚴禁在剖面線邊界之外任意炸開 (EXPLODE) 填充線！炸開會產生數萬個微小線段，瞬間癱瘓圖檔處理速度。",
      "diagnosticDecisionTree": [
        "問題：點選 HATCH 時系統跳出「未找到有效的封閉邊界」錯誤？",
        "步驟 1：檢查邊界轉角是否有放大才看得到的微小交叉或缺口",
        "步驟 2：利用 BO (BOUNDARY) 指令測試是否能自動生成封閉多段線 (LWPOLYLINE)",
        "步驟 3：微幅調高 HPGAPTOL 數值 (如設為 2mm) 容許自動縫合公差"
      ],
      "masteryChecklist": [
        "能繪製符合防水工法與斷熱橋規範之 1/10 鋁門窗防水嵌縫大樣圖",
        "精通關聯式填充線 (Associative) 與原點重設技巧",
        "能客製建立事務所專屬 .pat 剖面填充圖樣檔案"
      ]
    },
    {
      "round": 5,
      "badge": "R5 渲染與光學物理",
      "title": "外部參考 (XREF) 協同套圖與圖紙集管理器 (SSM)",
      "focus": "架構跨多人多工種的 XREF 套圖體系，並運用 Sheet Set Manager 實現全案百張圖紙一鍵發布。",
      "contentExpansion": "延伸內容擴充 170%：建立事務所大型專案標準目錄樹，剖析 Overlay 參照之圖形相依有向無環圖 (DAG)，打通跨卷冊圖號自動編碼索引。",
      "coreTheory": "圖紙集管理器 (SSM) 是 AutoCAD 的專案管理心臟。它將散落在硬碟各處的數十個 DWG 檔案虛擬化為一個統一的「專案圖集 (.dst)」。透過系統欄位 (Fields) 連結圖紙集自訂屬性 (如專案名稱、建照字號、修正版次 Rev-03)，全案 100 張圖紙圖框資訊在 0.1 秒內全面同步更新。",
      "advancedParameters": [
        {
          "name": "XREFTYPE (外部參考預設類型)",
          "value": "1 (Overlay 覆疊參照)",
          "purpose": "徹底根絕嵌套參照引發的循環死結"
        },
        {
          "name": "XLOADCTL (隨選載入控制)",
          "value": "2 (開啟隨選載入並複製檔案)",
          "purpose": "允許多人同時唯讀檢視同一個外參檔案"
        }
      ],
      "practicalWalkthrough": [
        "輸入 SSM 開啟「圖紙集管理器」，點擊新建圖紙集，指向專案根目錄",
        "將各分層平面圖 DWG 依序拖入 SSM 樹狀目錄，自動編列圖號 A101, A102, A201...",
        "在圖框中插入 Field 欄位，綁定「當前圖紙編號 (CurrentSheetNumber)」與「圖名 (SheetTitle)」",
        "在 SSM 根節點按右鍵，點擊「發布為多頁 PDF (Publish to Multi-Sheet PDF)」，全案自動批次出圖"
      ],
      "industryStandardOrCode": "ISO 19650-2 協同生產資訊架構與全生命週期圖說編碼準則。",
      "pitfallsAndVerification": "發布驗證：檢查輸出的多頁 PDF，確認目錄索引跳轉書籤 (Bookmarks) 與各圖紙之圖號連結 100% 正確可點擊。",
      "diagnosticDecisionTree": [
        "問題：開啟圖檔時提示「外部參考遺失未解析 (Unresolved XREF)」？",
        "原因：協同作業同仁更改了資料夾名稱或移動了底圖位置",
        "解法：開啟 XREF 面板，選取遺失圖檔，在下方「已儲存路徑」按「...」重新指向正確相對路徑"
      ],
      "masteryChecklist": [
        "能從零建置完整的 Sheet Set (.dst) 專案管理圖集架構",
        "能運用欄位 (Field) 實現全案工程圖號、審查日期自動化聯動",
        "精通 XATTACH 與 XCLIP 進行高效率多人分工底圖套疊"
      ]
    },
    {
      "round": 6,
      "badge": "R6 跨軟體協同與 BIM",
      "title": "DWG/DXF 跨平台雙向映射與 Revit/BIM 模型導入導出",
      "focus": "打通 AutoCAD 與 Revit / Rhino / SketchUp 之間的精確向量轉換管線。",
      "contentExpansion": "延伸內容擴充 190%：深度剖析 DXF ASCII 檔案結構規格，解決 3D 匯出 2D 時圖元飛散、Z 軸非零標高與編碼文字亂碼等宿疾。",
      "coreTheory": "DWG 與 BIM 軟體的交換痛點在於「幾何與物件特徵之轉換耗損」。Revit 將 DWG 匯入時若未清理乾淨，會帶來數百個未知的雜亂圖層。透過編寫淨化腳本，將 3D 模型壓平 (FLATTEN) 至 Z=0 水平面，消除微小高差，方能確保 BIM 軟體能精準識別牆體邊緣並一鍵翻模。",
      "advancedParameters": [
        {
          "name": "FLATTEN (壓平指令容差)",
          "value": "隱藏 3D 實體保留正交 2D 投影",
          "purpose": "消除所有圖元殘留的微小 Z 座標"
        },
        {
          "name": "EXPORTTOAUTOCAD 版本",
          "value": "AutoCAD 2018/2013 DWG 格式",
          "purpose": "向下相容公部門與營造廠老舊審查機台"
        }
      ],
      "practicalWalkthrough": [
        "執行 OVERKILL 指令，自動融合圖面上所有重合之重複線段與共線多段線",
        "執行 FLATTEN 指令，將所有可能帶有 Z 高差之線條強制投影回 Z=0 基底平面",
        "執行 AUDIT (檢查) 與 PURGE (清除)，修復潛在損壞指標並壓縮檔案體積",
        "將淨化後的 DWG 連結至 Revit 作為底圖，透過拾取線條一鍵生成 3D 結構柱梁"
      ],
      "industryStandardOrCode": "buildingSMART 建築資訊模型與 2D CAD 幾何交換協定。",
      "pitfallsAndVerification": "匯出 Revit 前務必確認 DWG 原點位於 (0,0,0) 且緊鄰建築本體，切勿讓圖元飄移至距離原點數公里外，導致 Revit 報出「範圍過大」警告。",
      "diagnosticDecisionTree": [
        "問題：將 DWG 匯入 Revit 後，無法正確捕捉交點且模型嚴重破面？",
        "原因：DWG 線段帶有極微小 Z 軸高差 (如 Z=0.0000431 mm)",
        "解法：在 AutoCAD 全選圖元，在性質面板中將「起點 Z」與「端點 Z」手動統一強制輸入為 0.0"
      ],
      "masteryChecklist": [
        "能在 3 分鐘內完成外來雜亂圖檔之 OVERKILL + PURGE + FLATTEN 淨化 SOP",
        "理解 Revit 與 AutoCAD 座標系統連結模式 (原點對原點 vs 依共用坐標)",
        "能運用 DXF 格式修復損壞打不開的嚴重受損 DWG 圖檔"
      ]
    },
    {
      "round": 7,
      "badge": "R7 腳本自動化與前瞻",
      "title": "AutoLISP / Visual LISP / .NET 二次開發與圖面自動化審查",
      "focus": "掌握 AutoLISP 語法結構，編寫客製化批次處理腳本與建築面積法規自動化計算工具。",
      "contentExpansion": "延伸內容擴充 220%：從 S-Expression 表達式深入 Visual LISP ActiveX COM 物件模型，開發全自動房間面積計算、門窗編號批次填寫與法規避難走廊路徑計算插件。",
      "coreTheory": "AutoLISP 是基於 LISP 語言之嵌入式函數式程式語言。AutoCAD 所有內部圖元皆以關聯清單 (Association List) 形式儲存在資料庫中 (DXF Group Codes: 0 表示圖元類型, 10 表示起點坐標, 8 表示圖層)。透過操作資料庫指標與圖元定義 (entget / entmod)，程式能以毫秒級速度全圖批次搜尋並修改數萬個圖元。",
      "mathematicalFormula": "多邊形面積格林公式 (Green's Theorem)：Area = 1/2 · |∑(x_i · y_{i+1} - x_{i+1} · y_i)|",
      "advancedParameters": [
        {
          "name": "ACADLSPASDOC (LISP 載入行為)",
          "value": "1 (每個開啟的圖檔皆自動載入 acaddoc.lsp)",
          "purpose": "常駐事務所專屬客製化功能巨集"
        },
        {
          "name": "FIELDDISPLAY (欄位背景灰底)",
          "value": "0 (關閉列印灰底顯示)",
          "purpose": "保持圖紙輸出乾淨清爽"
        }
      ],
      "practicalWalkthrough": [
        "在 VS Code 安裝 AutoCAD AutoLISP Extension 進行語法高亮與除錯",
        "編寫 `(ssget '((0 . \"LWPOLYLINE\") (8 . \"A-AREA-*\")))` 快速過濾所有法定面積線",
        "調用 ActiveX `(vla-get-Area ...)` 批次累加各分區樓地板面積",
        "將計算結果自動格式化生成符合內政部建管處格式之「建築物面積計算總表」"
      ],
      "industryStandardOrCode": "內政部營建署《建築物無紙化審查作業規範》與 CNS 11567 數位圖檔格式。",
      "pitfallsAndVerification": "撰寫 AutoLISP 時務必將區域變數宣告在函式定義標頭 `(defun c:MyCommand ( / var1 var2 ...))` 之斜線後方，防止全域變數汙染引發不可預期之錯誤。",
      "diagnosticDecisionTree": [
        "問題：載入 LISP 腳本後執行跳出「error: bad argument type: stringp nil」？",
        "原因：腳本讀取圖元屬性時，遇到了某個圖元未定義該屬性或回傳值為空 (nil)",
        "解法：在讀取函式前加入防呆判斷式 `(if (not (null myVal)) ...)` 確保資料有效性"
      ],
      "masteryChecklist": [
        "能獨立撰寫 AutoLISP 腳本實現「一鍵自動建立全套標準圖層與設定」",
        "理解 DXF 群組碼 (Group Codes 0, 8, 10, 40) 的本質含義",
        "能運用 Script (.scr) 批次對數百張圖紙執行無人值守出圖與清理"
      ]
    }
  ],
  "industryPipeline": {
    "stage": "法規報審、施工圖繪製、跨工種套圖整合與工地營造現場施作依據",
    "softwareRole": "全球工程法規與營造現場合約圖紙無可撼動之終極交付標準",
    "fileFormats": {
      "import": [
        ".dwg",
        ".dxf",
        ".dgn",
        ".sat",
        ".pdf",
        ".tif",
        ".jpg",
        ".png"
      ],
      "export": [
        ".dwg",
        ".dxf",
        ".dwf",
        ".pdf",
        ".wmf",
        ".sat",
        ".eps"
      ]
    },
    "collaborationWith": [
      "Revit (匯入底圖或匯出施工大樣)",
      "SketchUp (匯入 CAD 平面放樣)",
      "3ds Max (匯入 DWG 樣條線建模)",
      "Excel (雙向動態資料連結表格)"
    ]
  },
  "learningResources": [
    {
      "title": "全國技術士技能檢定 - 建築製圖應用職類 (電腦繪圖項) 丙級/乙級測試參考資料與標準圖框",
      "provider": "勞動部勞動力發展署技能檢定中心",
      "category": "國家檢定與法規",
      "url": "https://skill.tcte.edu.tw",
      "description": "官方公告之建築製圖應用 (21100) 術科試題、A1/A2/A3 標準標題欄圖框、評分評審表及出圖檢定要點。",
      "badge": "國家法定技術士證照"
    },
    {
      "title": "CNS 11567 (A1042)《建築製圖》國家標準檢索與工程製圖規範",
      "provider": "經濟部標準檢驗局國家標準檢索系統",
      "category": "國家檢定與法規",
      "url": "https://www.cnsonline.com.tw",
      "description": "台灣營建工程法定製圖規範，明訂線條粗中細比例 (4:2:1)、18 種法定比例尺、三層尺寸標註法與構造圖例。",
      "badge": "CNS 國家標準"
    },
    {
      "title": "建築物建造執照無紙化電子審查作業手冊與圖說規範",
      "provider": "內政部國土管理署 (前營建署)",
      "category": "國家檢定與法規",
      "url": "https://law.moj.gov.tw",
      "description": "全台各縣市都發局建造執照電子化審查上傳規範，涵蓋 DWG 圖層分類、配置圖紙空間審查與防空避難室面積核算。",
      "badge": "建管法規"
    },
    {
      "title": "Autodesk Official AutoCAD 建築設計與施工製圖全功能技術手冊",
      "provider": "Autodesk Official Documentation",
      "category": "官方原廠教學",
      "url": "https://help.autodesk.com/view/ACD/2025/ENU/",
      "description": "AutoCAD 原廠官方最新技術手冊，完整解析動態圖塊 (Dynamic Blocks)、圖紙集管理器 (SSM)、AutoLISP 與 CTB 出圖。",
      "badge": "原廠官方手冊"
    },
    {
      "title": "Autodesk Certified Professional (ACP) - AutoCAD for Design and Drafting 考試指南",
      "provider": "Autodesk Certification Portal",
      "category": "官方原廠教學",
      "url": "https://www.autodesk.com/certification",
      "description": "國際業界認可之專業 CAD 繪圖工程師認證標準與實機技能指標大綱。",
      "badge": "國際原廠認證"
    },
    {
      "title": "建築與機電 CSD/SEM 綜合管線套繪與界面協調實務指南",
      "provider": "臺北市建築師公會 / 台灣營建研究院",
      "category": "實務工作流與開放標準",
      "url": "https://www.arch.org.tw",
      "description": "公共工程與大型建案必備之 CSD (機電整合圖) 與 SEM (結構機電整合圖) 2D 疊合查驗規範與穿梁開孔限制。",
      "badge": "營造實務準則"
    }
  ],
  "certificationStandards": [
    {
      "name": "建築製圖應用 (電腦繪圖項) 丙級技術士",
      "level": "中華民國技術士證照 (代號 21101)",
      "authority": "勞動部勞動力發展署技能檢定中心",
      "description": "考核建築基本圖樣 (平、立、剖面圖、樓梯大樣與結構平面圖) 之精確繪製、圖層規範、尺寸標註與 180 分鐘內出圖實作能力。",
      "keyCompetencies": [
        "平面圖/立面圖/總剖面圖繪製",
        "CNS 11567 粗中細線寬與圖層設定",
        "樓梯大樣與踏階高寬尺度計算",
        "出圖配置視埠比例尺與 A3/A1 出圖"
      ],
      "officialExamUrl": "https://skill.tcte.edu.tw"
    },
    {
      "name": "建築製圖應用 (電腦繪圖項) 乙級技術士",
      "level": "中華民國技術士證照 (代號 21100)",
      "authority": "勞動部勞動力發展署技能檢定中心",
      "description": "考核專業工程施工圖樣繪製、地下室排水分區、全區昇降機道剖面大樣、帷幕牆節點大樣與外部參考協同系統規劃能力。",
      "keyCompetencies": [
        "地下室排水分區與坡道放樣圖",
        "高層全剖面構造泛水與梁柱配筋大樣",
        "複雜外部參考與圖紙集組織管理",
        "全套施工圖出圖與專業法規檢討"
      ],
      "officialExamUrl": "https://skill.tcte.edu.tw"
    },
    {
      "name": "Autodesk Certified Professional: AutoCAD for Design and Drafting",
      "level": "國際專家級認證 (ACP)",
      "authority": "Autodesk Inc.",
      "description": "國際通行之 AutoCAD 專業技能證照，評測進階幾何約束、動態圖塊參數表、屬性資料萃取 (Data Extraction) 與圖紙集發布。",
      "keyCompetencies": [
        "動態圖塊 (Dynamic Blocks) 與查閱表製作",
        "XREF 外部參考進階拓撲架構",
        "圖紙集 (SSM) 多頁出版與屬性欄位連動",
        "標註型式 (DIMSTYLE) 與註解比例尺度精算"
      ],
      "officialExamUrl": "https://www.autodesk.com/certification"
    }
  ]
};
