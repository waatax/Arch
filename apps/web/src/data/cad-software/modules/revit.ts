import { CadSoftware } from '../types';

export const revitData: CadSoftware = {
  "slug": "revit",
  "name": "Autodesk Revit",
  "englishName": "Autodesk Revit Architecture & BIM Suite",
  "vendor": "Autodesk",
  "releaseYear": "2000 (原 Revit Technology Corporation, 2002 由 Autodesk 收購)",
  "tag": "電腦繪圖",
  "category": "產業標準 BIM 建築資訊模型與多專業整合平台",
  "badge": "全生命週期建築資訊模型霸主",
  "rating": {
    "learningCurve": "陡峭 (需翻轉 2D 畫線習慣，建立嚴格資料庫邏輯思維)",
    "industryAdoption": "大型事務所、統包營造廠與公部門標案規定普及率 95%",
    "bimCapability": "全能旗艦 (原生參數化族群、多工種協同與資料提取最高峰)",
    "drawingOutput": "卓越 (平立剖、明細表與大樣圖 100% 雙向關聯同步)",
    "renderingQuality": "高階 (內建雲端渲染，主流無縫對接 Enscape / Twinmotion)"
  },
  "shortDesc": "全球建築工程與統包營造業最核心的 BIM 旗艦。將幾何、構造層次、材料屬性與工程時程整合於單一資料庫，實現改一處處處更新。",
  "fullDesc": "Autodesk Revit 是現代建築營建工程從傳統 2D 圖說邁向數位化建造的核心樞紐。不同於傳統 CAD 的「描繪幾何」，Revit 是以「虛擬構造 (Virtual Construction)」的方式組裝真實建築：每一道牆都包含實體混凝土核心、斷熱層與表面裝修層，並承載著 U 值、防火時效與工程造價。透過中央工作集 (Worksharing) 協同架構、強大的參數化族群 (Families) 與 Dynamo 運算邏輯，Revit 徹底消除了傳統平立剖面不一致之致命人為失誤。",
  "officialUrl": "https://www.autodesk.com/products/revit/overview",
  "studentLicenseUrl": "https://www.autodesk.com/education/edu-software/overview",
  "docUrl": "https://help.autodesk.com/view/RVT/2025/ENU/",
  "communityUrl": "https://forums.autodesk.com/t5/revit-architecture-forum/bd-p/133",
  "heroMetrics": [
    {
      "label": "全球 BIM 標案市占率",
      "value": "No.1 旗艦標準"
    },
    {
      "label": "平立剖關聯同調性",
      "value": "100% 雙向即時連動"
    },
    {
      "label": "參數化程式設計",
      "value": "Dynamo 內建引擎"
    },
    {
      "label": "多專業整合涵蓋",
      "value": "Arch / Str / MEP 全覆蓋"
    }
  ],
  "architecturalApplications": [
    {
      "area": "全生命週期參數化建築模型建置",
      "title": "複合構造牆體與智慧樓層空間架構",
      "description": "設定具備真實物理多層構造之牆體、樓板與屋頂，精準控制核心邊界 (Core Boundary)、結構層與斷熱裝修層之優先級收頭。",
      "deepDivePrinciples": [
        "複合構造收頭優先級 (Compound Structure Join Priority)：從結構層 [1] 至飾面 2 [5] 之整數權重演算法，低層級構造自動退讓高層級構造",
        "視景範圍 (View Range) 光學截面機制：Top (頂)、Cut plane (剖切面)、Bottom (底) 與 View Depth (視景深度) 四平面射線投射拓撲",
        "四級資料架構體系：種類 (Category) → 族群 (Family) → 類型 (Type) → 實體 (Instance) 嚴格樹狀繼承"
      ],
      "realWorldCase": "台中某醫學中心醫療大樓新建工程：全案建立超過 40 種複合牆體，將鉛板防輻射層、抗菌醫療板與防火棉構造精確建模，平立剖出圖時材料收頭自動吻合無需手工修線。",
      "standardCodeRef": "內政部建築研究所《建築資訊模型應用指南》與 ISO 19650-1 建築資產資訊管理標準。",
      "codeSnippet": {
        "language": "python",
        "title": "Revit Dynamo Python 腳本批量檢核梁柱與風管穿梁開孔",
        "code": "import clr\nclr.AddReference('RevitAPI')\nfrom Autodesk.Revit.DB import *\n\n# 獲取當前文件與選取的梁實體\ndoc = IN[0]\nbeams = IN[1]\nducts = IN[2]\nclash_openings = []\n\nfor beam in beams:\n    beam_solid = beam.get_Geometry(Options())\n    for duct in ducts:\n        duct_solid = duct.get_Geometry(Options())\n        # 透過布林交集演算法計算實體干涉體積\n        intersection = BooleanOperationsUtils.ExecuteBooleanOperation(\n            beam_solid, duct_solid, BooleanOperationsType.Intersect\n        )\n        if intersection.Volume > 0.0001: # 單位立方英呎\n            clash_openings.append({\n                \"BeamID\": beam.Id.IntegerValue,\n                \"DuctID\": duct.Id.IntegerValue,\n                \"ClashVolume\": intersection.Volume * 0.0283168 # 轉為立方公尺\n            })\nOUT = clash_openings",
        "explanation": "在 Dynamo 節點中透過 Revit API 調用底層幾何布林交集計算，自動在百萬坪專案中毫秒級掃描所有結構穿梁衝突。"
      },
      "technicalDetails": [
        "房間與面積 (Room and Area) 邊界運算與容積率、法定建蔽率即時明細表計算",
        "材質資產 (Thermal & Structural Assets) 指定熱傳導率與抗壓強度以利能源模擬",
        "相位設定 (Phasing) 控制「現況拆除」、「新建工程」與「未來擴建」之可見性圖形覆寫"
      ],
      "deliverables": [
        "高精度 LOD 350 建築施工模型",
        "法定樓地板與容積檢討明細表",
        "自動化平立剖面施工圖紙集"
      ]
    },
    {
      "area": "參數化族群 (Family Editor) 設計開發",
      "title": "高自適應性建築構件與動態尺寸約束",
      "description": "利用參考平面 (Reference Planes)、尺寸標註參數與三角函數條件判斷式，建立可隨任意開孔尺寸自適應調整之幕牆窗、自動遮陽板與預鑄樓梯。",
      "deepDivePrinciples": [
        "參數約束驅動網路 (Constraint Solving Network)：以弱/強參考平面為拓撲基準，防止「過度約束 (Over-constrained)」致命錯誤",
        "共用參數 (Shared Parameters) GUID 全域追蹤：確保族群內部自訂之「防火時效 (Fire Rating)」能穿透進入全案明細表與標記符號",
        "巢狀族群 (Nested Families) 與型式關聯：將把手、玻璃五金作為獨立子族群載入，達成細部零組件模組化替換"
      ],
      "realWorldCase": "桃園國際機場第三航廈波浪造型天花板：設計團隊開發自適應點族群 (Adaptive Component)，依據屋架雙曲面幾何向量，自動縮放 12,000 片鋁質花瓣天花單元。",
      "standardCodeRef": "National BIM Standard-United States (NBIMS-US) 構件幾何與非幾何資訊等級規範。",
      "technicalDetails": [
        "建立包含條件邏輯之公式：如 `寬度 = if(高度 > 2000 mm, 1200 mm, 900 mm)`",
        "幾何形體類型：實體拉伸 (Extrusion)、融合 (Blend)、旋轉 (Revolve)、放樣 (Sweep) 與放樣融合 (Swept Blend)",
        "空心幾何剪裁主體 (Void Cut Host) 實現族群自動在牆面切出階梯式排水槽"
      ],
      "deliverables": [
        "事務所標準參數化門窗族群庫 (.rfa)",
        "自適應帷幕單元樣板",
        "智慧型電梯與逃生梯核心筒族群"
      ]
    },
    {
      "area": "中央工作集 (Worksets) 多人即時協同",
      "title": "大型專案多人即時協作與權限鎖定機制",
      "description": "將大型專案建立為中央模型 (Central Model)，團隊成員在各自本地端 (Local Copy) 分工建模，並將變更即時同步至雲端中心檔案。",
      "deepDivePrinciples": [
        "工作集借用機制 (Element Borrowing)：鎖定使用者所操作之圖元 GUID，防止兩人同時編輯同一道外牆產生衝突",
        "差異增量同步 (Incremental Synchronization)：僅上傳變更之差異字元與幾何指針，節省大型專案頻寬開銷",
        "Autodesk Construction Cloud (ACC / BIM 360) 雲端雲端模型即時雲原生協作與權限分級"
      ],
      "realWorldCase": "台北信義區 50 層超高層複合商辦：由 3 家跨國事務所 25 位建築師同步在雲端 ACC Central Model 協同作業，每週進行模型審查，設計衝突減少 80%。",
      "standardCodeRef": "ISO 19650-2 共通資料環境 (CDE, Common Data Environment) 規範。",
      "technicalDetails": [
        "工作集嚴格劃分：01_建築外殼、02_室內隔間、03_景觀基地、04_連結結構、05_連結MEP",
        "設定圖形覆寫 (Worksharing Display Mode)，直觀以顏色辨識「誰正在編輯哪個構件」",
        "每日離線工作模型清理與可壓縮性還原 (Compact Central Model)"
      ],
      "deliverables": [
        "雲端中央整合專案檔 (.rvt)",
        "協同衝突歷史審查紀錄表",
        "工種模型劃分拆分架構書"
      ]
    },
    {
      "area": "機電結構 CSD / SEM 碰撞檢討與施工模擬",
      "title": "跨專業綜合管線與結構穿梁碰撞干涉分析",
      "description": "將結構鋼筋、預力梁與風管、消防水管、強弱電線架精確整合，自動生成三維干涉清單並出具穿梁開孔補強圖。",
      "deepDivePrinciples": [
        "碰撞檢測演算法 (Clash Detection Matrix)：區分硬碰撞 (Hard Clash, 實體體積相交) 與軟碰撞 (Soft Clash / Clearance, 工法施工淨空不合)",
        "公差容許值設定：排除微小表面貼齊之假性碰撞，聚焦大於 10mm 之致命穿透",
        "Navisworks 與 BCF (BIM Collaboration Format) 議題指派即時跳轉視角閉環"
      ],
      "realWorldCase": "高雄捷運地下三層車站月台層：整合 18,000 支機電管線，檢討出 450 處消防幹管穿越預力大梁衝突，在澆置混凝土前 3 個月全面完成設計變更。",
      "standardCodeRef": "內政部消防署《各類場所消防安全設備設置標準》與中華民國結構工程學會穿梁開孔加強準則。",
      "technicalDetails": [
        "Revit 內建干涉檢查 (Interference Check) 與 Navisworks Manage 深度整合",
        "視圖篩選器 (View Filters) 依據管線系統分類（冰水管、排水管、排煙風管）自動著色",
        "明細表公式計算各管段長度、保溫材體積與閥件五金清冊"
      ],
      "deliverables": [
        "CSD 綜合機電圖說 (Combined Services Drawing)",
        "SEM 結構留孔套圖 (Structural & Electrical / Mechanical)",
        "BCF 衝突議題指派報告書"
      ]
    },
    {
      "area": "台灣建照法規電子審查與 BIM 竣工模型交付",
      "title": "臺北市都發局標準之 BIM 模型屬性建置與法規自動查核",
      "description": "在 Revit 中建置符合台北市與新北市府建照無紙化審查要求之 BIM 模型，綁定土地使用分區、無障礙空間、防火避難區劃屬性。",
      "deepDivePrinciples": [
        "台北市府 BIM 竣工標準屬性欄位：構件必須掛載標準 COBie 或市府規定之 Pset_TPE_BuildingElements 屬性集，包含施工廠商、出廠序號與維護週期",
        "防火區劃與避難走廊自動查驗：利用 Revit 房間 (Rooms) 與邊界元素計算防火時效區劃牆長度與步行逃生距離 (不得超過 30m 或 50m)",
        "無障礙斜坡與電梯淨寬參數化檢核：設定門扇淨寬不得小於 90cm、坡道坡度不得大於 1:12 且每段高差不超過 75cm 之設計防呆約束"
      ],
      "realWorldCase": "南港公辦都更社會住宅案：設計團隊以 Revit 建置全案 LOD 350 BIM 模型，透過屬性集自動提取無障礙停車位數量與容積免計面積，使建造執照電子審查時間由過去 45 天大幅縮減至 12 天。",
      "standardCodeRef": "《臺北市政府主辦建築工程建築資訊建模 (BIM) 竣工模型屬性資料作業規範》與《建築技術規則》防空避難與無障礙專章。",
      "codeSnippet": {
        "language": "python",
        "title": "pyRevit (Python) 自動檢查全案防火門淨寬與阻熱性能屬性",
        "code": "from Autodesk.Revit.DB import FilteredElementCollector, BuiltInCategory\ndoc = __revit__.ActiveUIDocument.Document\n\ndoors = FilteredElementCollector(doc).OfCategory(BuiltInCategory.OST_Doors).WhereElementIsNotElementType().ToElements()\nwarning_count = 0\nfor door in doors:\n    fire_rating = door.LookupParameter(\"Fire Rating\")\n    width_param = door.LookupParameter(\"Width\")\n    if fire_rating and fire_rating.AsString() == \"1hr\":\n        if width_param and width_param.AsDouble() * 304.8 < 900.0:\n            print(\"【違規警告】門編號 {} 寬度不足 900mm (實際: {:.0f}mm)，違反法規逃生淨寬！\".format(door.Id, width_param.AsDouble() * 304.8))\n            warning_count += 1\nprint(\"防火門法規檢查完畢，共檢出 {} 處違規。\".format(warning_count))",
        "explanation": "利用 pyRevit 自動巡檢圖中所有 1 小時防火時效門扇，確認淨開口寬度大於法定 900mm，違規者即時輸出 Element ID。"
      },
      "technicalDetails": [
        "建立共用參數檔 (Shared Parameters.txt) 並批次綁定至全案專案參數",
        "利用視圖篩選器 (View Filters) 將未填寫法規屬性之構件高亮顯示為紅色警告",
        "匯出符合 buildingSMART 驗證之 IFC4 Design Transfer View 模型"
      ],
      "deliverables": [
        "台北市標準審查 IFC4 檔案",
        "法規避難距離與面積核算明細表",
        "無障礙空間合規檢核報告"
      ]
    },
    {
      "area": "Navisworks 跨工種碰撞檢討矩陣與 CSD/SEM 輸出",
      "title": "跨專業 MEP 管線與結構梁柱 3D 實體碰撞協同排解",
      "description": "將建築、結構與 MEP 模型整合至 Navisworks Manage，執行硬碰撞 (Hard Clash) 與間隙碰撞 (Clearance Clash) 分級運算，產出 BCF 議題追蹤清單。",
      "deepDivePrinciples": [
        "碰撞檢討分級法則：第 1 級為結構梁柱與大型風管 (致命衝突，必須修改管路高程)；第 2 級為重力排水管與其他管路；第 3 級為電纜線槽與小管徑壓力管",
        "保溫層與施工淨空公差 (Clearance Tolerance)：冷凍水管必須納入 50mm 保溫保冷材厚度，高壓電纜槽上方必須保留 300mm 施工拉線淨空",
        "BCF (BIM Collaboration Format) 數位議題閉環：碰撞報告不發放 2D 紙本，而是輸出 .bcfzip 檔案，各專業工程師在 Revit 點擊議題即自動跳轉至碰撞 3D 視角"
      ],
      "realWorldCase": "桃園國際機場第三航廈工程：透過 Revit + Navisworks 進行多達 18 個專業系統套繪，在施工前排除超過 14,000 處空間管線干涉，節省現場敲除與變更設計成本逾數億元。",
      "standardCodeRef": "ISO 19650-2 共通資訊環境協同規範與 CIBSE Guide B 暖通管路空間配置指引。",
      "technicalDetails": [
        "在 Revit 中設置共用座標系統 (Shared Coordinates)，確保各專業模型 0 誤差對齊",
        "利用 Navisworks Clash Detective 設定公差為 10mm 進行批次運算",
        "將碰撞點反向生成 SEM 預埋套管族群並自動切除 RC 梁開孔"
      ],
      "deliverables": [
        "BCF 2.1 碰撞協同議題追蹤報告",
        "機電綜合管路 CSD 3D 模型",
        "結構開孔留洞 SEM 施工圖紙"
      ]
    }
  ],
  "beginnerGuide": {
    "introduction": "學習 Revit 必須先忘記 AutoCAD 的「手動畫線」思維！在 Revit 裡你不是在繪圖，而是在電腦裡「蓋房子」。你放置的是有厚度、有材料、有名稱的「實體建築構件」。",
    "viewportControls": [
      {
        "action": "平移視圖 (Pan)",
        "keyOrMouse": "按住滑鼠滾輪不放並拖曳",
        "tip": "平移任何 2D 平面或 3D 視圖"
      },
      {
        "action": "3D 視角旋轉 (Orbit)",
        "keyOrMouse": "Shift + 按住滑鼠滾輪不放拖曳",
        "tip": "圍繞當前選取物件或模型幾何中心旋轉視角"
      },
      {
        "action": "快速縮放至充滿視窗",
        "keyOrMouse": "鍵盤連按兩次 Z + A (Zoom All) 或滑鼠雙擊滾輪",
        "tip": "一鍵讓視圖內所有模型元件置中滿版"
      },
      {
        "action": "定向至視圖 (Orient to View)",
        "keyOrMouse": "在 3D ViewCube 上按右鍵 → 轉向視圖 → 樓層平面",
        "tip": "在 3D 模式下一鍵切成該樓層的 3D 剖切盒透視！極具震撼感"
      }
    ],
    "tenStepsSop": [
      {
        "step": 1,
        "title": "設定專案單位與標註格式",
        "action": "在鍵盤直接輸入 UN (UNITS)",
        "keyPoint": "長度改為「公釐 (Millimeters)」，面積改為「平方公尺 (m²)」，捨入取至小數點後 2 位"
      },
      {
        "step": 2,
        "title": "建立建築標高 (Levels)",
        "action": "在專案瀏覽器雙擊開啟「南向立面圖 (South Elevation)」",
        "keyPoint": "輸入 LL (LEVEL)，建立 1F (0 mm), 2F (3600 mm), 3F (7200 mm), RF (10800 mm)"
      },
      {
        "step": 3,
        "title": "建立結構柱網軸線 (Grids)",
        "action": "雙擊開啟「1F 平面視圖」，輸入 GR (GRID)",
        "keyPoint": "依序繪製 X 軸 (1, 2, 3...) 與 Y 軸 (A, B, C...)，軸線交點即為結構落柱基準"
      },
      {
        "step": 4,
        "title": "放置結構柱 (Structural Columns)",
        "action": "切換至「結構」標籤頁，點選「柱」或輸入 CL",
        "keyPoint": "在選項列確認深度改為「高度」，頂部約束設定為「2F」，直接放置於軸網交點"
      },
      {
        "step": 5,
        "title": "繪製複合外牆 (Walls)",
        "action": "切換至「建築」標籤頁，輸入 WA (WALL)",
        "keyPoint": "選擇「RC 200mm + 外牆粉刷」，定位線設為「核心面: 外部」，底部 1F、頂部約束至 2F"
      },
      {
        "step": 6,
        "title": "放置建築地坪樓板 (Floors)",
        "action": "輸入 SB 或點選「樓板 (Floor)」，利用拾取牆體 (Pick Walls) 圍閉輪廓",
        "keyPoint": "完成編輯打綠色勾勾，系統會貼心詢問是否將牆延伸至樓板底"
      },
      {
        "step": 7,
        "title": "插入門窗構件 (Doors & Windows)",
        "action": "輸入 DR (Door) 或 WN (Window)，滑鼠直接靠近牆體",
        "keyPoint": "門窗會自動吸附於牆體並自動挖穿牆身，按空白鍵可切換開啟方向與內外側"
      },
      {
        "step": 8,
        "title": "繪製樓梯與天井洞口 (Stairs)",
        "action": "點選「樓梯 (Stair)」，設定底部 1F、頂部 2F，系統自動計算級高與級深",
        "keyPoint": "使用「豎板工具 (Shaft Opening)」一次穿透所有樓層樓板開出樓梯間天井"
      },
      {
        "step": 9,
        "title": "標註房間名稱與計算面積 (Rooms)",
        "action": "輸入 RM (ROOM) 點選每個房間，自動識別牆體邊界",
        "keyPoint": "給予房間名稱「客廳」、「主臥」、「陽台」，立即產出全自動著色分區圖"
      },
      {
        "step": 10,
        "title": "拖曳至圖紙並出圖 (Sheets)",
        "action": "專案瀏覽器在「圖紙 (Sheets)」按右鍵新建 A1 圖紙",
        "keyPoint": "將 1F 平面圖從左側瀏覽器直接拖入圖紙，設定 1/100 比例，雙向關聯施工圖大功告成"
      }
    ],
    "shortcuts": [
      {
        "key": "WA",
        "command": "WALL (牆體)",
        "explanation": "啟動繪製建築或結構牆體命令",
        "frequency": "必須秒按",
        "mnemonic": "WA 牆體圍空間"
      },
      {
        "key": "DR",
        "command": "DOOR (門)",
        "explanation": "在任何現有牆體上插入門族群並自動開洞",
        "frequency": "必須秒按",
        "mnemonic": "DR 門扉開啟"
      },
      {
        "key": "WN",
        "command": "WINDOW (窗)",
        "explanation": "在牆體上插入鋁門窗或帷幕天窗",
        "frequency": "必須秒按",
        "mnemonic": "WN 窗明几淨"
      },
      {
        "key": "CL",
        "command": "COLUMN (柱)",
        "explanation": "放置建築裝修柱或承重結構柱",
        "frequency": "必須秒按",
        "mnemonic": "CL 柱立天地"
      },
      {
        "key": "CM",
        "command": "COMPONENT (元件/族群)",
        "explanation": "放置家具、衛生設備、機電五金等各種三維族群",
        "frequency": "必須秒按",
        "mnemonic": "CM 元件隨手放"
      },
      {
        "key": "AL",
        "command": "ALIGN (對齊)",
        "explanation": "將一個物件的邊緣與另一個物件完美平齊，並可上一把鎖永久固定",
        "frequency": "必須秒按",
        "mnemonic": "AL 對齊上鎖",
        "contextModifier": "按對齊後點擊藍色鎖頭可鎖定間距"
      },
      {
        "key": "TR",
        "command": "TRIM / EXTEND (修剪/延伸至角)",
        "explanation": "點選想要保留的兩道牆，自動交會修剪收邊（跟 CAD 點多餘線不同！）",
        "frequency": "必須秒按",
        "mnemonic": "TR 點保留、自動接角"
      },
      {
        "key": "SL",
        "command": "SPLIT ELEMENT (分割圖元)",
        "explanation": "將一道長牆在某點切斷為兩段獨立牆體",
        "frequency": "高頻常用",
        "mnemonic": "SL 一刀兩斷"
      },
      {
        "key": "CS",
        "command": "CREATE SIMILAR (建立類似物件)",
        "explanation": "點選畫面上任何柱子或窗戶按 CS，立即進入繪製同類型物件命令",
        "frequency": "必須秒按",
        "mnemonic": "CS 複製屬性立刻畫"
      },
      {
        "key": "BX",
        "command": "SELECTION BOX (框選剖切盒)",
        "explanation": "在 2D 平面選中某個複雜節點按 BX，3D 視角瞬間自動剖切出該細部！",
        "frequency": "必須秒按",
        "mnemonic": "BX 3D 局部剖切"
      },
      {
        "key": "VV / VG",
        "command": "VISIBILITY / GRAPHICS (可見性/圖形覆寫)",
        "explanation": "控制當前視圖中所有建築分類的顯示、隱藏、線條顏色與填充樣式",
        "frequency": "必須秒按",
        "mnemonic": "VV 控制圖元外觀"
      },
      {
        "key": "UN",
        "command": "PROJECT UNITS (專案單位)",
        "explanation": "隨時切換專案為公釐、公尺或英制單位",
        "frequency": "高頻常用",
        "mnemonic": "UN 單位自由轉"
      }
    ],
    "fatalTraps": [
      {
        "trap": "搞混「視景範圍 (View Range)」導致新畫的牆壁窗戶看不見",
        "reason": "畫了牆體或地坪卻跳出「沒有任何建立的圖元在樓層平面中可見」，通常是切面高 (Cut Plane) 設錯，或者頂部約束穿透了切面。",
        "solution": "在視圖性質中點擊「View Range」，將 Cut Plane 設在地面上 1200mm (眼睛剖切高)，Top 設為 2300mm，View Depth 設為 0。"
      },
      {
        "trap": "中央檔案協同作業時忘記放棄所有權 (Relinquish All Mine)",
        "reason": "下班關閉軟體時未同步並放棄工作集所有權，隔天同事要修改你碰過的梁柱時全數被系統鎖定跳出「權限已被佔用」。",
        "solution": "養成下班前按「與中央檔案同步 (Synchronize with Central)」並勾選「放棄已借用的所有權」之良好衛生習慣。"
      },
      {
        "trap": "在專案中載入極度肥大的第三方家具族群 (Heavy Family Bloat)",
        "reason": "從網上下載包含數萬面三角網格的精細沙發，載入十張專案檔案從 50MB 暴增至 800MB，視埠旋轉卡死。",
        "solution": "族群嚴格控制面數，進入族群編輯器中利用可見性設定 (Visibility Settings)，讓高面數模型僅在「精細 (Fine)」模式下顯示。"
      },
      {
        "trap": "圖元重疊放置卻忽略警告提示 (Overlapping Elements Ignored)",
        "reason": "重複點擊放置了兩道完全重疊的牆，Revit 跳出黃色警告卻直接關閉，導致後續明細表數量計算翻倍、算圖破面。",
        "solution": "定期點擊「管理 (Manage) → 檢視警告 (Review Warnings)」，將所有幾何重疊與空間重合警告清除為 0。"
      }
    ],
    "proTips": [
      {
        "title": "善用暫時隱藏/隔離快捷鍵 HH 與 HR",
        "description": "選取擋住視線的屋頂或外牆，按兩次 H (HH) 立即暫時隱藏；按 HR (Reset) 立即解除隔離恢復原貌，排查內部管線超級靈活。"
      },
      {
        "title": "鍵盤空白鍵 (Spacebar) 是族群旋轉吸附神器",
        "description": "放置門、窗、家具或衛生設備時，按空白鍵可旋轉 90 度；若游標靠近一條斜向牆體按空白鍵，物件會自動旋轉至與該斜牆完全平行！"
      },
      {
        "title": "在立面圖中對齊上鎖可實現全棟窗戶同步調高",
        "description": "在外牆立面用 AL (Align) 對齊窗台高度並點下「藍色掛鎖」，未來只要修改其中一扇窗的高度，全棟該立面所有窗台立即連鎖同步。"
      }
    ]
  },
  "sevenIterations": [
    {
      "round": 1,
      "badge": "R1 基礎核心認知",
      "title": "物件導向建築資料庫本質與四大階層架構",
      "focus": "徹底領悟 Revit 資料庫運作哲學，掌握 Category → Family → Type → Instance 繼承邏輯。",
      "contentExpansion": "延伸內容擴充 100%：解構 Revit 底層實體關聯模型 (E-R Model)，分析專案檔案 (.rvt) 作為封裝關聯式資料庫的記憶體鏡像結構，擺脫傳統向量繪圖思維。",
      "coreTheory": "Revit 不是繪圖軟體，而是具備 3D 視圖渲染前端的關聯式資料庫管理系統。Category (品類，如牆、門、梁) 由系統硬性規範；Family (族群) 是幾何與演算法容器；Type (類型) 是共享屬性集合；Instance (實體) 是空間中的具體物件。當你在平面圖刪除一扇門，實際上是從資料庫中執行了一筆 SQL 級別的 `DELETE WHERE GUID = ...`，立面、剖面、明細表自然同步消失。",
      "mathematicalFormula": "資料庫圖元約束求解公式：F(x) = 0 且 G(x) ≤ 0，透過牛頓-拉弗森法 (Newton-Raphson) 求解幾何連鎖方程式。",
      "advancedParameters": [
        {
          "name": "Detail Level (詳細程度)",
          "value": "粗略 (Coarse) / 中等 (Medium) / 精細 (Fine)",
          "purpose": "控制複合構造剖切時顯示為單色或各層材料"
        },
        {
          "name": "Model In-Place (現地模型)",
          "value": "僅限異形造型，禁止大量濫用",
          "purpose": "維持資料庫快取效能與明細表關聯性"
        }
      ],
      "practicalWalkthrough": [
        "建立包含 1F, 2F, 3F, RF 的標準專案標高系統",
        "建立橫向 (1-6) 與縱向 (A-E) 柱網，並鎖定 3D 範圍範圍 Extents",
        "使用類型屬性 (Type Properties) 複製並建立「RC 250mm 剪力牆」類型",
        "在平面圖放置牆體，並在 3D 視圖與南向立面圖中實時觀察幾何連鎖生成"
      ],
      "industryStandardOrCode": "ISO 19650-1 建築資訊模型概念與原則與 buildingSMART bSDD (資料字典) 標準。",
      "pitfallsAndVerification": "嚴禁在專案中大量使用「現地模型 (Model In-Place)」來代替標準族群！現地模型無法進行類型全域修改，且會急遽拖慢專案存檔效能。",
      "diagnosticDecisionTree": [
        "問題：修改了某個窗戶的寬度，結果全棟所有同款窗戶尺寸全跟著變動？",
        "原因：在「類型屬性 (Type Properties)」中直接修改了共享參數",
        "解法：修改前務必點擊「複製 (Duplicate)」，給予全新類型名稱 (如 W-1500x1800) 再調整尺寸"
      ],
      "masteryChecklist": [
        "能精確闡述 Category, Family, Type, Instance 之繼承關係",
        "精通 View Range 之四大平面幾何光學投射切面原理",
        "熟練操作屬性面板 (Properties) 與專案瀏覽器 (Project Browser) 導航"
      ]
    },
    {
      "round": 2,
      "badge": "R2 建築製圖規範",
      "title": "複合構造 (Compound Structure) 分層與施工圖圖形覆寫",
      "focus": "精確配置外牆、平屋頂、地坪之多層構造材料厚度與核心邊界收頭。",
      "contentExpansion": "延伸內容擴充 130%：深入 5 種結構功能分層 (Structure 1, Substrate 2, Thermal 3, Finish 1 4, Finish 2 5)，建立符合台灣營造規範之 1:50 建築施工平立剖面圖。",
      "coreTheory": "複合構造的交叉清理完全遵循層級權重演算法。高層級材料 (如編號 1 的結構承重 RC) 會無情穿透低層級材料 (如編號 4 的粉刷層)。只有當兩道相交牆體的構造層具有相同功能編號與相同材質時，交會處的材料填充線才會自動融合為一體，達成 100% 正確的施工大樣圖。",
      "advancedParameters": [
        {
          "name": "Core Boundary (核心邊界)",
          "value": "將 RC 結構層包裹於核心層內部",
          "purpose": "定義結構尺寸標註與樓板承托基準線"
        },
        {
          "name": "Wrapping at Ends (端點收頭)",
          "value": "Exterior (由外層面材包覆端頭)",
          "purpose": "精確模擬開口與外牆轉角磁磚收頭"
        }
      ],
      "practicalWalkthrough": [
        "編輯外牆結構：Exterior Finish (磁磚 15mm) → Substrate (水泥砂漿 20mm) → Core (RC 200mm) → Interior Finish (油漆批土 15mm)",
        "設定樓板與牆體的連接幾何圖形 (Join Geometry)，使樓板結構貫入外牆但被面材包裹",
        "配置視圖圖形覆寫 (Visibility/Graphic Overrides)，將 RC 切面統一指定為標準 45 度斜剖面線",
        "建立標準 CNS 圖框圖紙，放置自動化指北針、圖名標籤與比例尺"
      ],
      "industryStandardOrCode": "CNS 11567 A1042 建築構造剖面圖表示規範與內政部建築技術規則施工編。",
      "pitfallsAndVerification": "檢查牆角相交處是否有白線阻斷結構核心；若有，使用「牆接合 (Wall Joins)」工具切換接頭為「斜接 (Miter)」或「斜角 (Butt)」。",
      "diagnosticDecisionTree": [
        "問題：柱子與牆面相交時，柱子切面被外牆裝修層切成碎塊？",
        "原因：牆體材料優先級或幾何接合順序錯誤",
        "解法：點選「修改 → 結合幾何圖形 (Join Geometry)」，先點擊柱子、再點擊牆體，將柱子結構層設為主導"
      ],
      "masteryChecklist": [
        "能獨立建立包含防水層、斷熱保溫層之六層複合屋頂構造",
        "掌握「結合幾何圖形 (Join Geometry)」之優先級置換技術",
        "能輸出符合 CNS 粗中細線條標準之 1/50 建築剖面圖"
      ]
    },
    {
      "round": 3,
      "badge": "R3 高階幾何拓撲",
      "title": "參數化族群開發 (Parametric Families) 與公式驅動",
      "focus": "深入族群編輯器，運用三角函數、條件邏輯判斷式製作高度自適應建築構件。",
      "contentExpansion": "延伸內容擴充 160%：掌握強/弱參考平面 (Reference Planes)、尺寸標註鎖定、陣列參數化與條件判斷公式，開發支援百種開口規格的智慧外遮陽與鋁格柵。",
      "coreTheory": "Revit 族群本質是參數幾何約束系統。在族群編輯器中，所有的立體幾何必須「依附於參考平面」，而「絕不能直接約束幾何邊緣」。尺寸標註給予參數名稱 (Label)，幾何實體鎖定在參考平面上。當參數改變時，參考平面移動，進而帶動三維實體變形。",
      "mathematicalFormula": "格柵等距排布公式：`陣列數量 = round((總寬度 - 2 * 端距) / 間距)`，`實際間距 = (總寬度 - 2 * 端距) / (陣列數量 - 1)`",
      "advancedParameters": [
        {
          "name": "IsReference (參考性質)",
          "value": "Strong Reference (優先捕捉對齊)",
          "purpose": "使專案中標註尺寸時能瞬間吸附到族群中心線"
        },
        {
          "name": "Shared Parameter (共用參數)",
          "value": "GUID 全域綁定",
          "purpose": "允許族群內部參數被載入明細表進行工料分析"
        }
      ],
      "practicalWalkthrough": [
        "新建族群，選擇「公制常規模型 (Metric Generic Model.rft)」或「基於牆的公制窗」樣板",
        "利用 RP 指令繪製對稱參考平面，加入 EQ (等距) 標註約束保持中心對稱",
        "在長度與寬度標註上指定類型參數，測試 Family Types 對話框數值「彈性測試 (Flexing)」",
        "使用放樣 (Sweep) 沿窗框路徑拉出斷面，並使用「空心拉伸」切除牆體洞口"
      ],
      "industryStandardOrCode": "AIA Document G202-2013 建築資訊模型協議規範構件 LOD 定義標準。",
      "pitfallsAndVerification": "族群測試鐵律：在族群內部輸入極端數值 (如寬度 100mm 或 10,000mm) 進行「Flex 壓力測試」，若出現「約束不滿足」需及時拆解過度約束。",
      "diagnosticDecisionTree": [
        "問題：族群載入專案後，一修改尺寸就跳出「無法建立類型」或幾何崩潰？",
        "原因：三維實體的幾何邊線直接鎖到了另一條實體邊線，造成雙重循環約束",
        "解法：進入族群編輯器，刪除幾何鎖定，重新將實體鎖定到「參考平面 (Ref Plane)」"
      ],
      "masteryChecklist": [
        "能運用 `if(條件, 成立值, 不成立值)` 撰寫百葉開闔邏輯公式",
        "精通巢狀共用族群 (Nested Shared Families) 與元件排程統計",
        "能獨立建立無報錯、支援彈性縮放之雙曲面造型自適應板塊"
      ]
    },
    {
      "round": 4,
      "badge": "R4 建築構造深化",
      "title": "帷幕牆系統 (Curtain Walls) 與自適應嵌板劃分",
      "focus": "精通帷幕網格 (Curtain Grids)、豎框 (Mullions) 與嵌板 (Panels) 之三維拓撲控制。",
      "contentExpansion": "延伸內容擴充 145%：從平面網格推演至體量放樣 (Massing) 表面細分 (Divided Surfaces)，設計可扭轉、漸變開孔之雙曲面玻璃帷幕大樓。",
      "coreTheory": "帷幕牆是 Revit 最強大的特殊牆體系統。它由三個獨立層級構成：Curtain Wall (容器) → Curtain Grids (UV 空間座標網格) → Panels / Mullions (三維嵌板與金屬豎框)。透過體量表面有理化 (Rationalization)，可將自由曲面劃分為完全共平面的四邊形或三角形玻璃單元，降低工程造價。",
      "advancedParameters": [
        {
          "name": "Vertical Grid Layout",
          "value": "Fixed Distance: 1500 mm",
          "purpose": "符合標準玻璃原板經濟裁切模矩"
        },
        {
          "name": "Horizontal Grid Layout",
          "value": "Fixed Number: 依樓層均分",
          "purpose": "對齊各樓層梁底結構淨高"
        }
      ],
      "practicalWalkthrough": [
        "繪製帷幕牆體，在類型屬性中設定預設垂直與水平網格間距",
        "手動使用「帷幕網格 (Curtain Grid)」指令加入非對稱局部造型切線",
        "使用 Tab 鍵選中個別玻璃嵌板，解除圖釘 (Pin) 替換為百葉嵌板或金屬實心板",
        "利用「豎框 (Mullion)」指令，一鍵在全網格上鋪設 50×150mm 斷面鋁合金框料"
      ],
      "industryStandardOrCode": "CNS 10207 建築帷幕牆構造設計規範與氣密、水密、抗風壓試驗準則。",
      "pitfallsAndVerification": "選取嵌板時必須善用「Tab 鍵」連按進行深度物件循環選取，切忌誤點整面帷幕牆本體。",
      "diagnosticDecisionTree": [
        "問題：在轉角兩道帷幕牆交會處，轉角豎框重疊干涉破面？",
        "原因：使用了標準矩形豎框而非轉角專用豎框",
        "解法：載入「L 型轉角豎框」或「V 型轉角豎框」，指定給交會邊界自動乾淨收角"
      ],
      "masteryChecklist": [
        "能在體量模式下對自由有機曲面進行 UV 表面細分與板塊化",
        "精通客製化帷幕嵌板族群開發 (含內嵌可開啟通風氣窗)",
        "能運用轉角豎框完美收納 90 度與任意鈍角交會帷幕外牆"
      ]
    },
    {
      "round": 5,
      "badge": "R5 渲染與光學物理",
      "title": "相位管理 (Phasing)、設計選項 (Design Options) 與明細表量算",
      "focus": "掌控建築時間維度 (歷史拆除與新建) 與方案對比，自動萃取法定工程數量清單。",
      "contentExpansion": "延伸內容擴充 180%：深入 Revit 資料庫關聯表運算，產出材料起算 (Material Takeoff)、容積率檢討、門窗五金表與各工期土方挖填方平衡表。",
      "coreTheory": "時間與方案是建築資訊不可或缺的維度。Phasing 賦予每個圖元「建立的階段 (Phase Created)」與「拆除的階段 (Phase Demolished)」。結合階段過濾器 (Phase Filters)，同一模型可在 1 秒內分別顯示「現況既有圖」、「拆除平面圖」與「新建完工圖」，徹底消滅翻修工程跨圖重複繪製之惡夢。",
      "mathematicalFormula": "土方挖填方平衡公式：V_net = ∑ V_cut - ∑ V_fill，透過地形表面 (Toposurface/Toposolid) 漸層網格體積微積分求得。",
      "advancedParameters": [
        {
          "name": "Phase Filter",
          "value": "Show Previous + New (顯示既有與新建)",
          "purpose": "標準室內裝修與舊屋翻新圖說"
        },
        {
          "name": "Material: As Area",
          "value": "計算扣除門窗洞口之淨牆面泥作面積",
          "purpose": "精確工程預算估驗"
        }
      ],
      "practicalWalkthrough": [
        "建立「明細表/數量 (Schedules/Quantities)」，選擇「房間 (Rooms)」品類",
        "加入欄位：名稱、樓層、周長、面積、裝修材料，並設定「合計」與「格式」計算總計",
        "新增計算欄位 (Calculated Field)：`空調噸數 = 面積 / 15`，實現設備概算連動",
        "在「設計選項 (Design Options)」中建立 Option A (開放式中庭) 與 Option B (雙核心筒)，一鍵切換簡報"
      ],
      "industryStandardOrCode": "行政院公共工程委員會《公共工程公共工程施工綱要規範》與預算編列標準。",
      "pitfallsAndVerification": "驗證明細表總樓地板面積是否與各分區房間加總一致；若有「未放置」或「未封閉」房間，需在明細表中選取並一鍵隔離修復。",
      "diagnosticDecisionTree": [
        "問題：明細表中的房間面積顯示為「Not Enclosed (未封閉)」？",
        "原因：周圍牆體的「房間邊界 (Room Bounding)」性質被關閉，或門窗處有微小縫隙",
        "解法：選取邊界牆體確認勾選「Room Bounding」，或使用「房間分隔線 (Room Separator)」封閉缺口"
      ],
      "masteryChecklist": [
        "能熟練建立舊建築整建翻修之三階段 (既有/拆除/新建) 圖紙集",
        "精通運用 Design Options 讓主模型維持單一資料庫的前提下展示多套競圖方案",
        "能產出完全扣除開口孔洞之高精確度混凝土與粉刷層工程預算明細表"
      ]
    },
    {
      "round": 6,
      "badge": "R6 跨軟體協同與 BIM",
      "title": "中央工作集協同、雲端 ACC 平台與 IFC/COBie 標準交付",
      "focus": "架構多工種即時協作的工作集拓撲，打通 OpenBIM IFC4 與設施管理 COBie 資料鏈。",
      "contentExpansion": "延伸內容擴充 200%：解析 Revit Worksharing 檔案鎖定協定與 Delta Sync 增量傳輸，配置 IFC 匯出器分類對照表，達成公共工程最高規格數位交付。",
      "coreTheory": "在中央模型 (Central Model) 架構下，圖元的所有權被細分至最小 GUID。當使用者 A 嘗試修改使用者 B 正在移動的梁柱時，系統透過點對點 TCP 訊息發出「借用請求 (Borrow Request)」。結合 buildingSMART IFC 匯出架構，Revit 內部品類透過 Mapping Text File 精確轉譯為 IfcWallStandardCase、IfcSpace 等標準 OpenBIM 實體。",
      "advancedParameters": [
        {
          "name": "IFC Export MVD",
          "value": "IFC4 Reference View 1.2",
          "purpose": "國際公共工程 OpenBIM 審查合規版本"
        },
        {
          "name": "COBie Extension Setup",
          "value": "空間分類與資產設備序號映射",
          "purpose": "銜接營運維護階段 CAFM 系統"
        }
      ],
      "practicalWalkthrough": [
        "點選「協同作業 (Collaborate)」→「在內部網路中」，將專案轉為工作共用中央檔案",
        "建立「工作集 (Worksets)」：01_建築外殼、02_室內隔間、03_結構外參、04_MEP外參",
        "團隊成員開啟「本端複本 (Local File)」，執行「與中央檔案同步」並勾選放棄所有權",
        "設定 IFC 匯出選項，自訂屬性集 (Property Sets)，將營建署指定之建材編碼匯出為標準 IFC"
      ],
      "industryStandardOrCode": "ISO 19650-2 共通資料環境資訊管理標準與 COBie (Construction-Operations Building Information Exchange)。",
      "pitfallsAndVerification": "嚴禁直接雙擊中央檔案 (.rvt) 進行作業！必須永遠透過 Revit 首頁點選「建立新的本端複本」進入專案，保護中央檔案不被意外鎖死。",
      "diagnosticDecisionTree": [
        "問題：開啟中央檔案時跳出「本檔案已被其他使用者鎖定，無法同步」？",
        "原因：某位同仁非正常斷線或正在進行大型同步但連線中斷",
        "解法：由 BIM Manager 進入專案，以管理員權限進入工作集面板「強制放棄 (Force Relinquish)」被佔用之圖元"
      ],
      "masteryChecklist": [
        "能在 ACC (Autodesk Construction Cloud) 配置跨國專案協同作業架構",
        "精通自訂 `exportlayers-ifc-IAI.txt` 檔案實現 Revit 品類到 IFC Class 之 100% 精確映射",
        "能運用 Navisworks Manage 執行跨專業硬碰撞與工法淨空審查"
      ]
    },
    {
      "round": 7,
      "badge": "R7 腳本自動化與前瞻",
      "title": "Dynamo 視覺化運算程式設計與 Revit API 二次開發",
      "focus": "運用 Dynamo 節點與 Python 打造全自動穿梁開孔、自動房間門窗編號與法規合規審查。",
      "contentExpansion": "延伸內容擴充 240%：深度剖析 Revit API .NET 物件模型 (Document, Element, Transaction, FilteredElementCollector)，編寫百倍提效之建築自動化外掛。",
      "coreTheory": "Revit API 採用交易機制 (Transaction Model)。所有對模型的修改都必須包裹在一個 Transaction 之中，確保資料庫 ACID 特性。Dynamo 作為視覺化前端，調用底層 GeometryEngine 與 RevitAPI.dll。透過 Python Script 節點，可繞過 UI 限制作出極端拓撲分析，例如依照基地日照軌跡自動調整帷幕百葉旋轉角。",
      "mathematicalFormula": "視線穿透干涉判定：`RayIntersection(P_origin, V_direction) ∩ Geometry_Surfaces ≠ ∅`",
      "advancedParameters": [
        {
          "name": "Dynamo Run Type",
          "value": "Manual (手動執行，嚴禁在百萬面模型設為 Automatic)",
          "purpose": "防止隨意連線引發背景死鎖崩潰"
        },
        {
          "name": "Revit TransactionGroup",
          "value": "Assimilation (融合多重步驟為單一步驟)",
          "purpose": "維持 Undo 歷程乾淨清晰"
        }
      ],
      "practicalWalkthrough": [
        "開啟「管理 → Dynamo」，新增工作區，設定執行模式為「手動 (Manual)」",
        "使用 `Categories → All Elements of Category` 節點選取全專案所有「門 (Doors)」",
        "使用 `Element.GetParameterValueByName` 讀取門所屬之房間編號 (如 302)",
        "使用 Python Script 節點結合字串運算格式化為「D-302-01」，並以 `SetParameterByName` 自動批次寫入全案門編號"
      ],
      "industryStandardOrCode": "buildingSMART 運算化設計規範與 OpenBIM 演算法交付協議。",
      "pitfallsAndVerification": "在大型專案執行 Dynamo 時，務必先另存測試模型；所有批次寫入腳本必須先輸出到 Watch 節點核對數值無誤後，再連入 SetParameter 節點。",
      "diagnosticDecisionTree": [
        "問題：Dynamo 執行時報出「Starting a transaction from an external application running outside of API context is not allowed」？",
        "原因：Python 腳本試圖在非 Revit 主執行緒直接修改模型資料庫",
        "解法：使用 `TransactionManager.Instance.EnsureInTransaction(doc)` 包裹修改指令，完成後呼叫 `TransactionDone()`"
      ],
      "masteryChecklist": [
        "能自主搭建「全棟門窗編號自動依房間連鎖重編」Dynamo 腳本",
        "能運用 Dynamo 讀取 Excel 房間規劃書一鍵在 Revit 中生成所有標高與房間",
        "理解 C# / .NET Revit 外掛開發之 IExternalCommand 接口與部署管線"
      ]
    }
  ],
  "industryPipeline": {
    "stage": "初步設計、施工圖出圖、多工種碰撞檢討、營造施工管理與物業營運維護",
    "softwareRole": "全球現代建築營造工程資訊統合中樞與法定 BIM 交付旗艦",
    "fileFormats": {
      "import": [
        ".rvt",
        ".rfa",
        ".ifc",
        ".dwg",
        ".dxf",
        ".dgn",
        ".skp",
        ".sat",
        ".nwd",
        ".pdf"
      ],
      "export": [
        ".rvt",
        ".ifc",
        ".dwg",
        ".dxf",
        ".nwc",
        ".fbx",
        ".gbxml",
        ".pdf",
        ".txt (明細表)"
      ]
    },
    "collaborationWith": [
      "AutoCAD (雙向匯入出圖大樣)",
      "Navisworks (碰撞衝突與 4D 時程檢討)",
      "Rhino/Grasshopper (經由 Rhino.Inside.Revit 無縫對接)",
      "Twinmotion/Enscape (即時渲染)"
    ]
  },
  "learningResources": [
    {
      "title": "我國 BIM 協同作業指南與公共工程資訊交付手冊",
      "provider": "內政部建築研究所",
      "category": "國家檢定與法規",
      "url": "https://www.abri.gov.tw",
      "description": "台灣官方發布之 BIM 作業指南、元件建置格式規範、設計與施工階段資訊交付標準 (EIR/BEP)。",
      "badge": "官方推動指南"
    },
    {
      "title": "臺北市主辦建築工程建築資訊建模 (BIM) 竣工模型屬性資料作業規範",
      "provider": "臺北市政府都市發展局",
      "category": "國家檢定與法規",
      "url": "https://dba.gov.taipei",
      "description": "公有建築與集合住宅執照審查之 BIM 元件屬性表、IFC 格式要求與無紙化建照審查檢驗標準。",
      "badge": "建管標準規範"
    },
    {
      "title": "Autodesk Official Revit 建築資訊模型原廠核心技術指南",
      "provider": "Autodesk Official Documentation",
      "category": "官方原廠教學",
      "url": "https://help.autodesk.com/view/RVT/2025/ENU/",
      "description": "Revit 原廠官方手冊，涵蓋參數化族群 (Families)、專案參數、明細表數量計算與工作集 (Worksharing)。",
      "badge": "原廠官方手冊"
    },
    {
      "title": "Autodesk Certified Professional (ACP) - Revit for Architectural Design 認證指南",
      "provider": "Autodesk Certification Portal",
      "category": "官方原廠教學",
      "url": "https://www.autodesk.com/certification",
      "description": "全球營建業最普遍採納之 BIM 建築設計師專業認證標準與實務測驗指標。",
      "badge": "國際原廠認證"
    },
    {
      "title": "buildingSMART International OpenBIM IFC4 建築構件標準",
      "provider": "buildingSMART International",
      "category": "實務工作流與開放標準",
      "url": "https://www.buildingsmart.org",
      "description": "跨平台建築資訊模型交換標準，包含 IfcWall, IfcBeam, IfcColumn 與 IfcSpace 之屬性定義集 (Psets)。",
      "badge": "國際 OpenBIM 標準"
    },
    {
      "title": "BIMForum Level of Development (LOD) 構件細部發展規範手冊",
      "provider": "BIMForum / AIA",
      "category": "實務工作流與開放標準",
      "url": "https://bimforum.org/lod/",
      "description": "定義從概念體量 (LOD 100) 到竣工營運 (LOD 500) 各階段建築構件之幾何精度與非幾何資訊需求。",
      "badge": "全球 LOD 標準"
    }
  ],
  "certificationStandards": [
    {
      "name": "Autodesk Certified Professional: Revit for Architectural Design",
      "level": "國際專家級認證 (ACP)",
      "authority": "Autodesk Inc.",
      "description": "考核複雜建築族群製作、施工圖視圖過濾器 (Filters)、明細表算量、協同工作集 (Worksets) 與相位拆除管理。",
      "keyCompetencies": [
        "參數化族群 (Parametric Families) 開發",
        "階段 (Phasing) 與設計選項 (Design Options)",
        "明細表 (Schedules) 數量算量與公式計算",
        "Navisworks / IFC 匯出與座標共享矩陣"
      ],
      "officialExamUrl": "https://www.autodesk.com/certification"
    },
    {
      "name": "台灣 BIM 建模師 / BIM 管理師認證",
      "level": "台灣專業營建產業認證",
      "authority": "台灣建築資訊模型協會 (Taiwan BIM Task Group)",
      "description": "結合台灣營建法規、公共工程採購與施工圖出圖習慣，評測實務專案中之 BIM 協同與界面整合能力。",
      "keyCompetencies": [
        "台灣建照圖紙樣板符合度",
        "機電結構碰撞檢討與 BCF 流程",
        "LOD 300 施工圖模型交付標準",
        "施工進度 (4D) 與成本 (5D) 資訊整合"
      ],
      "officialExamUrl": "https://www.taiwanim.org"
    },
    {
      "name": "buildingSMART International openBIM Professional Certification",
      "level": "國際 openBIM 專業認證",
      "authority": "buildingSMART International",
      "description": "考核 ISO 19650 共通資訊環境 (CDE)、IFC 資料綱要、IDM 資訊交付手冊與 BCF 議題追蹤協同作業標準。",
      "keyCompetencies": [
        "ISO 19650 資訊生命週期管理流程",
        "IFC4 實體與屬性集映射結構",
        "BCF (BIM Collaboration Format) 協同作業",
        "跨軟體 openBIM 資料互通性查驗"
      ],
      "officialExamUrl": "https://education.buildingsmart.org"
    }
  ]
};
