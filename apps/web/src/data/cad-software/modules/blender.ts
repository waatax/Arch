import { CadSoftware } from '../types';

export const blenderData: CadSoftware = {
  "slug": "blender",
  "name": "Blender 4.x",
  "englishName": "Blender Open Source 3D Creation Suite",
  "vendor": "Blender Foundation",
  "releaseYear": "1994 (原 NeoGeo, 2002 轉為 GPL 開源專案)",
  "tag": "電腦繪圖",
  "category": "開源全能 3D / 幾何節點與 OpenBIM 生態",
  "badge": "免費開源自由三維怪獸",
  "rating": {
    "learningCurve": "陡峭 (快捷鍵體系龐大，但 4.0 後介面大幅標準化)",
    "industryAdoption": "建築表現圖與外商設計部飆升 (中小事務所首選)",
    "bimCapability": "頂級 OpenBIM (搭配 Bonsai/BlenderBIM 插件原生編輯 IFC)",
    "drawingOutput": "中高 (搭配 Freestyle / MeasureIt / Bonsai SVG 出圖)",
    "renderingQuality": "電影級頂級 (Cycles 物理光線追蹤與 EEVEE Next 即時著色)"
  },
  "shortDesc": "完全免費且開源的全功能 3D 創作軟體。結合 Geometry Nodes 參數化幾何與 Bonsai (原 BlenderBIM)，躍升為次世代 OpenBIM 與前衛建築表現核心。",
  "fullDesc": "Blender 不僅是影視動畫與遊戲開發的巨擘，更在近年藉由 Bonsai (BlenderBIM) 插件徹底顛覆了封閉專有格式的傳統 BIM 市場。它允許建築師在開源環境下原生讀取、修改並寫入 IFC4 與 IFC2x3 檔案，完全擺脫昂貴商業授權枷鎖。結合 Geometry Nodes（幾何節點）的強大圖形化程式設計與內建 Cycles 物理光追引擎，Blender 實現了從參數化立面生成、OpenBIM 資訊分類編碼到電影級寫實彩現的一站式工作管線。",
  "officialUrl": "https://www.blender.org/",
  "studentLicenseUrl": "https://www.blender.org/download/",
  "docUrl": "https://docs.blender.org/manual/en/latest/",
  "communityUrl": "https://blenderartists.org/c/artwork/architecture/26",
  "heroMetrics": [
    {
      "label": "軟體授權成本",
      "value": "$0 完全免費永久開源"
    },
    {
      "label": "OpenBIM 認證標準",
      "value": "IFC4 / ISO 16739 支援"
    },
    {
      "label": "物理光追核心",
      "value": "Cycles 4.x 光譜真實感"
    },
    {
      "label": "參數化幾何引擎",
      "value": "Geometry Nodes 節點運算"
    }
  ],
  "architecturalApplications": [
    {
      "area": "OpenBIM 原生 IFC 建築資訊塑模",
      "title": "Bonsai 原生非破壞性 IFC 編輯",
      "description": "直接載入與儲存標準 buildingSMART IFC4 檔案，建築構件具備完整 pset 屬性與分層分類，無商業軟體專有格式鎖定問題。",
      "deepDivePrinciples": [
        "IFC STEP 實體資料模型：直接解析 ISO 10303-21 檔案語法，建立 IfcWall, IfcBeam, IfcSlab 實體",
        "IfcOpenShell 底層 C++ 引擎：幾何幾何轉換透過 Open CASCADE 技術轉譯為 B-Rep 與 CSG 多面體",
        "ISO 19650 資訊容器與 GUID 全域唯一識別碼追蹤，達成不同軟體間無損協同"
      ],
      "realWorldCase": "歐洲跨國公有社會住宅專案：全案摒棄專有商業格式，100% 透過 Bonsai 產出 IFC4 檔案並進行 BCF 議題追蹤與法規檢核。",
      "standardCodeRef": "ISO 16739-1:2018 (IFC4) 產業基礎類別標準與 ISO 19650 建築資產資訊管理準則。",
      "codeSnippet": {
        "language": "python",
        "title": "Blender Python (bpy) 批量提取 IFC 牆體面積並輸出報告",
        "code": "import bpy\nimport bonsai.tool as tool\n\nifc_file = tool.Ifc.get()\nwalls = ifc_file.by_type(\"IfcWall\")\nprint(f\"專案內總計 IfcWall 數量: {len(walls)}\")\n\nfor wall in walls:\n    # 讀取 Qto_WallBaseQuantities 物理量算\n    for rel in wall.IsDefinedBy:\n        if rel.is_a(\"IfcRelDefinesByProperties\"):\n            pset = rel.RelatingPropertyDefinition\n            if pset.Name == \"Qto_WallBaseQuantities\":\n                for prop in pset.Quantities:\n                    if prop.Name == \"NetSideArea\":\n                        print(f\"牆體 [{wall.Name}] 淨表面積: {prop.AreaValue:.2f} m²\")",
        "explanation": "利用 Blender 內嵌 Python 直譯器直接調用 ifcopenshell，遍歷全專案構件並自動萃取法定工程估驗數量。"
      },
      "technicalDetails": [
        "Bonsai 構件類型定義 (IfcWallType, IfcWindowStyle)",
        "分類系統對應 (Uniclass 2015, OmniClass, MasterFormat)",
        "BCF (BIM Collaboration Format) 雲端議題同步與視角還原"
      ],
      "deliverables": [
        "原生 IFC4 建築構件模型",
        "COBie 營運維護資訊表",
        "OpenBIM 結構碰撞檢核報告"
      ]
    },
    {
      "area": "Geometry Nodes 參數化建築立面生成",
      "title": "幾何節點立面遮陽與模矩帷幕",
      "description": "利用節點網路將數值、日照向量與基地曲線驅動為成千上萬個動態旋轉百葉、異型穿孔板或模矩化預鑄混凝土立面單元。",
      "deepDivePrinciples": [
        "欄位計算 (Field Evaluation) 記憶體連續陣列：平行處理數萬個實例 (Instances) 之仿射矩陣變換",
        "曲線取樣與再分割 (Sample Curve & Resample Curve)：將自由手繪建築軸線轉化為等間距結構模格",
        "內積投影遮陽角計算：cos θ = N · L，依立面法線與太陽天頂角自動決定格柵開闔角度"
      ],
      "realWorldCase": "中東阿布達比綠建築研發中心：立面 4,800 塊陶管遮陽板利用幾何節點根據全年輻射熱分析圖動態調整百葉角度，有效減少 32% 空調負荷。",
      "standardCodeRef": "ASHRAE 90.1 建築節能標準與台灣《綠建築評估手冊》外殼耗能量 (ENVLOAD) 評估法。",
      "technicalDetails": [
        "網格轉曲線與幾何布林運算 (Mesh to Curve & Mesh Boolean)",
        "依距離衰減 (Proximity) 動態縮放立面開口大小",
        "實例化至點 (Instance on Points) 大幅節省記憶體開銷"
      ],
      "deliverables": [
        "參數化自適應建築立面",
        "立面開孔率分析數據雲圖",
        "工廠預鑄開模施工清冊"
      ]
    },
    {
      "area": "Cycles 電影級物理光學渲染",
      "title": "真實光線追蹤與材料光學特性",
      "description": "利用 Cycles 物理路徑追蹤著色器 (Path Tracer)，以真實光學單位 (Lux / Lumen) 模擬室內外採光、玻璃色散、粗糙微表面與夜景間接光漫射。",
      "deepDivePrinciples": [
        "GGX 微表面 BRDF 雙向反射分佈函數：精確模擬金屬粗糙度與菲涅耳效應 (Fresnel Schlick 近似法)",
        "多重重要性取樣 (Multiple Importance Sampling, MIS)：消除小光源與粗糙鏡面反射交界處的噪點螢火蟲 (Fireflies)",
        "開放圖像降噪 (Intel Open Image Denoise, OIDN)：基於深度學習卷積神經網路以極少採樣數還原無暇畫面"
      ],
      "realWorldCase": "國家交響樂團音樂廳室內競圖：全案燈光嚴格依照菲利浦 IES 光域網配光曲線設定流明，精確呈現胡桃木吸音擴散板之漫反射質感。",
      "standardCodeRef": "CIE 117-1995 建築室內不舒適眩光 (UGR) 評估標準與 IESNA LM-63-02 測光數據格式。",
      "technicalDetails": [
        "Principled BSDF 著色器通道配置 (Base Color, Roughness, Normal, Metallic)",
        "IES 實體燈光配光曲線貼圖匯入 (Photometric Lights)",
        "Cryptomatte 物件與材質 ID 自動遮罩通道輸出，供 Photoshop / Nuke 後期合成"
      ],
      "deliverables": [
        "8K 超高畫質建築外觀競圖透視",
        "室內物理人工光照照度熱圖",
        "晝光採光係數 (DF) 視覺化圖面"
      ]
    },
    {
      "area": "歷史建築古蹟修復與數位雙生",
      "title": "高精度無損點雲逆向工程與 SubD 重建",
      "description": "將空拍空照點雲與地面光達 (LiDAR) 檔案匯入 Blender，利用重拓撲 (Retopology) 與細分曲面重現歷史遺構雕花與石造拱圈。",
      "deepDivePrinciples": [
        "Catmull-Clark 細分曲面演算法：極限表面具備 C² 連續性，精確擬合古蹟歷史殘損變形",
        "多解析度幾何雕刻 (Multiresolution Sculpting)：百萬級高模烘焙法線貼圖至低模遊戲資產",
        "空間烘焙 (Baking) 將環境遮蔽 (AO) 與風化水漬光影固定於頂點色彩 (Vertex Colors)"
      ],
      "realWorldCase": "巴黎聖母院屋架數位修復案：學者利用 Blender 處理雷射掃描之數億個點雲，建立 1:1 精確修復木構榫接數位模型。",
      "standardCodeRef": "威尼斯憲章 (Venice Charter 1964) 歷史古蹟修復原則與文化部文化資產保存法古蹟修復圖說標準。",
      "technicalDetails": [
        "點雲外掛 (Point Cloud Visualizer) 即時預覽數千萬點真實世界坐標",
        "Shrinkwrap (收縮包裝) 修改器貼合不規則風化表面",
        "微多邊形置換 (Adaptive Subdivision Displacement) 展現雕刻石材細節"
      ],
      "deliverables": [
        "古蹟數位孿生模型 (LOD 400)",
        "榫接解構動態爆炸分解圖",
        "歷史建築立面正投影展開圖說"
      ]
    },
    {
      "area": "Bonsai BIM (BlenderBIM) 原生 IFC4 建築資訊模型建構與發布",
      "title": "開源原生 OpenBIM 施工圖與屬性集直接創作",
      "description": "直接在 Blender 中讀取、編輯與儲存純原生 IFC4 檔案，無需任何專利格式轉換，完整保留所有建築元件屬性。",
      "deepDivePrinciples": [
        "原生 IFC 物件架構：Blender 物件直接對應 IfcWallStandardCase, IfcBeam, IfcSlab，非幾何資訊以 Psets (Property Sets) 緊密綁定",
        "2D 施工圖動態切片：透過 IfcConvert 與 Blender 攝影機切片，直接生成向量 SVG 格式平面圖與剖面圖，線條清晰銳利",
        "Git 版本控制友善：搭配 IfcOpenShell，實現對建築工程模型進行行級 (Line-by-line) 的 Git 差異比較與協同合併"
      ],
      "realWorldCase": "歐洲公共住宅綠建築競圖：團隊完全捨棄昂貴專利商業軟體，100% 採用 Blender + Bonsai BIM 產出符合國際標準之 IFC4 交付檔與全套 2D 圖紙，節省數十萬軟體購置費用。",
      "standardCodeRef": "ISO 16739-1 (IFC4) 國際標準與 buildingSMART BCF 規範。",
      "technicalDetails": [
        "利用 Bonsai BIM 專案範本建立空間階層：IfcProject > IfcSite > IfcBuilding > IfcBuildingStorey",
        "綁定各縣市建築法規屬性，如容積建蔽率與防火分區代碼",
        "直接匯出嚴格驗證通過之 .ifc 檔案，可直接於 Solibri / Navisworks 中檢核"
      ],
      "deliverables": [
        "原生 IFC4 建築資訊模型檔 (.ifc)",
        "SVG 向量建築平立剖面圖",
        "建築材料體積與面積統計表"
      ]
    },
    {
      "area": "幾何節點 (Geometry Nodes) 程序化建築立面與桁架結構生成器",
      "title": "節點式非破壞性建築外皮與動態開窗率調控系統",
      "description": "運用 Blender Geometry Nodes 建立可重用之程序化建築生成工具，以單一曲線輪廓即時生長出具備細節之高層大樓。",
      "deepDivePrinciples": [
        "場 (Fields) 與屬性 (Attributes) 拓撲計算：以幾何頂點之 Z 軸高度即時計算樓層編號，並自適應生成挑空大廳與頂層露台",
        "實例化集合 (Instances on Points)：將窗框、遮陽隔柵、空調格柵以 Instance 形式散布於牆體頂點上，場景幾何萬面卻不消耗額外記憶體",
        "數學函數控制立面凹凸：利用 Math (Sine / Voronoi) 節點驅動立面遮陽板角度，產生波動律動感之現代建築立面"
      ],
      "realWorldCase": "大型都市設計規劃案：設計師使用自製 Geometry Nodes 大樓生成器，只需拉伸地塊多邊形，系統自動沿道路退縮並在 3 秒內生成 40 棟不同樓層高度與細部的概念量體。",
      "standardCodeRef": "都市計畫土地使用分區管制規則與建築物外觀造形設計準則。",
      "codeSnippet": {
        "language": "python",
        "title": "Blender Python (bpy) 批次建立多樓層標準柱網結構",
        "code": "import bpy\n\ndef create_column_grid(rows, cols, spacing_x, spacing_y, height):\n    for i in range(rows):\n        for j in range(cols):\n            x = i * spacing_x\n            y = j * spacing_y\n            bpy.ops.mesh.primitive_cube_add(size=1, location=(x, y, height / 2.0))\n            col = bpy.context.active_object\n            col.scale = (0.6, 0.6, height) # 60x60cm 柱\n            col.name = f\"Column_{i}_{j}\"\n            \ncreate_column_grid(5, 4, 8.0, 8.0, 4.0)\nprint(\"標準 8mx8m 柱網結構建立完成！\")",
        "explanation": "透過 bpy 腳本自動生成指定跨距與柱斷面之結構柱網，為後續幾何節點牆體與樓版生成提供精確幾何骨架。"
      },
      "technicalDetails": [
        "在修改器面板 (Modifier Panel) 暴露建築參數：樓層高度、開窗比例、隔柵間距",
        "支援即時布林運算切除門窗開孔並自動貼合窗框五金",
        "將程序化模型一鍵烘焙 (Bake) 為標準 Mesh 供其他軟體使用"
      ],
      "deliverables": [
        "可重用建築幾何節點資產庫 (.blend)",
        "動態即時演示動畫檔",
        "多方案快速比選量體報告"
      ]
    }
  ],
  "beginnerGuide": {
    "introduction": "Blender 4.x 已經全面現代化，只要記住左手掌握 G/R/S 三大變換鍵，右手點擊確認，搭配 Tab 鍵穿梭物體與編輯模式，即可快速進入建築三維殿堂。",
    "viewportControls": [
      {
        "action": "旋轉視角 (Orbit)",
        "keyOrMouse": "按住滑鼠中鍵 (MMB) 拖曳",
        "tip": "圍繞當前選取物件或場景中心旋轉"
      },
      {
        "action": "平移視圖 (Pan)",
        "keyOrMouse": "Shift + 按住滑鼠中鍵",
        "tip": "水平或垂直平移當前工作視窗"
      },
      {
        "action": "縮放視圖 (Zoom)",
        "keyOrMouse": "滾動滑鼠滾輪 或 Ctrl + 按住滑鼠中鍵",
        "tip": "平滑推進或遠離模型細節"
      },
      {
        "action": "正交三視圖切換",
        "keyOrMouse": "數字小鍵盤 1(前), 3(右), 7(頂), 9(相反視角)",
        "tip": "數字小鍵盤 5 切換正交投影與透視投影"
      }
    ],
    "tenStepsSop": [
      {
        "step": 1,
        "title": "設定公制單位與比例",
        "action": "進入 屬性 (Properties) → 場景 (Scene) → 單位 (Units)",
        "keyPoint": "Unit System 設為 Metric，長度設為 Millimeters，Unit Scale 設為 0.001"
      },
      {
        "step": 2,
        "title": "刪除預設立方體並歸零",
        "action": "按 A 全選預設相機、立方體與光源，按 X 鍵確認刪除",
        "keyPoint": "保持 Shift + C 將 3D 游標歸零至 (0,0,0) 絕對原點"
      },
      {
        "step": 3,
        "title": "建立平面並輸入尺寸",
        "action": "按 Shift + A 選擇 Mesh → Plane，在左下角展開面板輸入尺寸",
        "keyPoint": "輸入 X: 12000mm, Y: 8000mm 建立建築地基"
      },
      {
        "step": 4,
        "title": "進入編輯模式 (Edit Mode)",
        "action": "選中地基網格，按鍵盤 Tab 鍵切換至編輯模式",
        "keyPoint": "上方切換頂點 (1)、邊緣 (2)、表面 (3) 選取模式"
      },
      {
        "step": 5,
        "title": "擠出牆體高度 (Extrude)",
        "action": "選取地基面，按 I (Inset) 向內偏移 240mm 形成外牆輪廓，選中環狀面按 E 鍵擠出",
        "keyPoint": "按 E 後直接輸入 3600 並 Enter，牆體瞬間拔起 3.6 公尺"
      },
      {
        "step": 6,
        "title": "環切開門窗開口 (Loop Cut)",
        "action": "按 Ctrl + R 滑鼠移至牆體，滾動滾輪新增分割線，定位門窗頂底標高",
        "keyPoint": "按 G + G 可沿著邊線平滑滑動切割線而不變形"
      },
      {
        "step": 7,
        "title": "橋接挖洞 (Bridge Edge Loops)",
        "action": "選中內外牆對應的兩個矩形面，按滑鼠右鍵選擇「Bridge Faces」",
        "keyPoint": "系統自動挖空並縫合厚度面，產生乾淨門窗洞口"
      },
      {
        "step": 8,
        "title": "套用倒角修改器 (Bevel)",
        "action": "切回物體模式，在修改器面板新增 Bevel 修改器",
        "keyPoint": "Amount 設為 5mm，Segments 設為 2，使建築棱角反射真實高光"
      },
      {
        "step": 9,
        "title": "配置天空陽光與相機",
        "action": "在 World 面板 Surface 選擇 Sky Texture (Nishita 天空模型)",
        "keyPoint": "按 Ctrl + Alt + 小鍵盤 0 將當前透視視角綁定給相機"
      },
      {
        "step": 10,
        "title": "啟動 Cycles 物理渲染",
        "action": "在 Render 面板將 Engine 改為 Cycles，Device 改為 GPU Compute",
        "keyPoint": "開啟 Denoise (OpenImageDenoise)，按 F12 產出第一張照片級建築效果圖"
      }
    ],
    "shortcuts": [
      {
        "key": "Tab",
        "command": "切換物體/編輯模式 (Toggle Edit Mode)",
        "explanation": "在全體宏觀與網格微觀頂點之間切換的靈魂鍵",
        "frequency": "必須秒按",
        "mnemonic": "Tab 進出編輯核心"
      },
      {
        "key": "G",
        "command": "平移抓取 (Grab/Move)",
        "explanation": "按 G 後接 X/Y/Z 可限定特定軸向移動，輸入數值精準定位",
        "frequency": "必須秒按",
        "mnemonic": "G 移動抓取",
        "contextModifier": "按 X/Y/Z 鎖軸，Shift+Z 鎖定水平面"
      },
      {
        "key": "R",
        "command": "旋轉 (Rotate)",
        "explanation": "按兩次 R 進入自由軌跡球旋轉模式",
        "frequency": "必須秒按",
        "mnemonic": "R 旋轉視角",
        "contextModifier": "連續按兩次 R 進入軌跡球旋轉"
      },
      {
        "key": "S",
        "command": "縮放 (Scale)",
        "explanation": "調整構件大小，按 S 鍵後輸入 0 可將頂點對齊至同一直線",
        "frequency": "必須秒按",
        "mnemonic": "S 縮放大小",
        "contextModifier": "按 S + Z + 0 頂點水平拉齊"
      },
      {
        "key": "E",
        "command": "擠出幾何體 (Extrude Region)",
        "explanation": "拉出新頂點、邊線或面的空間延展關鍵指令",
        "frequency": "必須秒按",
        "mnemonic": "E 擠出立體"
      },
      {
        "key": "I",
        "command": "內嵌面 (Inset Faces)",
        "explanation": "在平面內向內收縮生成等厚度邊界（畫外牆與窗框必備）",
        "frequency": "必須秒按",
        "mnemonic": "I 內嵌成厚度"
      },
      {
        "key": "Ctrl + R",
        "command": "環狀切割 (Loop Cut and Slide)",
        "explanation": "在柱梁與牆面上新增結構分割環線",
        "frequency": "高頻常用",
        "mnemonic": "Ctrl+R 環形切開",
        "contextModifier": "滾動滾輪增加切割段數"
      },
      {
        "key": "Shift + A",
        "command": "新增圖元選單 (Add Object/Node)",
        "explanation": "呼喚所有網格、曲線、燈光、相機與材質節點的起手式",
        "frequency": "必須秒按",
        "mnemonic": "Shift+A 召喚萬物"
      },
      {
        "key": "Ctrl + B",
        "command": "邊緣倒角 (Bevel)",
        "explanation": "為建築模型銳利的邊緣增加物理真實倒角圓角",
        "frequency": "高頻常用",
        "mnemonic": "Ctrl+B 倒角微反光"
      },
      {
        "key": "Alt + D",
        "command": "關聯複製 (Linked Duplicate)",
        "explanation": "複製構件但共享網格資料，一處修改所有實例全面連動",
        "frequency": "高頻常用",
        "mnemonic": "Alt+D 實例連動複製"
      },
      {
        "key": "Ctrl + A",
        "command": "套用變換 (Apply All Transforms)",
        "explanation": "將目前縮放、旋轉數值凍結為 1.0，防止修改器計算扭曲",
        "frequency": "工程利器",
        "mnemonic": "Ctrl+A 歸一化比例"
      },
      {
        "key": "M",
        "command": "移至集合 (Move to Collection)",
        "explanation": "將構件放入不同集合（等同建築標籤/圖層群組分類）",
        "frequency": "高頻常用",
        "mnemonic": "M 收納進圖層集合"
      }
    ],
    "fatalTraps": [
      {
        "trap": "未套用縮放比例導致修改器變形 (Unapplied Scale Disaster)",
        "reason": "在物體模式下直接按 S 放大物件，物件 Scale 變成 (2.5, 2.5, 2.5)。此時加 Bevel 修改器，倒角會被不均勻拉伸成扁橢圓。",
        "solution": "建模後務必在物體模式按「Ctrl + A → Apply All Transforms」，將 Scale 歸位為 (1.0, 1.0, 1.0)。"
      },
      {
        "trap": "內部重疊面與多餘頂點 (Non-Manifold Non-Planar Geometry)",
        "reason": "擠出時取消了移動但未取消擠出，導致同一個位置有兩組完全重疊的頂點，Cycles 渲染時產生黑色閃爍斑點 (Z-fighting)。",
        "solution": "全選網格後按「M → By Distance (依距離合併頂點)」，並檢查 Shift + N (重新計算外側法線)。"
      },
      {
        "trap": "忘記切換 GPU 彩現導致 CPU 滿載熱當",
        "reason": "全新安裝的 Blender 預設採用 CPU 計算 Cycles，算一張圖耗時 45 分鐘且風扇狂飆。",
        "solution": "進入「Edit → Preferences → System」，在 Cycles Render Devices 勾選 OptiX (NVIDIA) 或 HIP (AMD)，並在渲染面板選擇 GPU Compute。"
      },
      {
        "trap": "直接匯入百萬面點雲或樹木模型導致視埠凍結",
        "reason": "外部 high-poly 模型直接拖入未經優化，單一場景頂點突破 2000 萬點，視埠幀率降至 1fps。",
        "solution": "利用 Collection Instance、幾何節點 Point Instance，或開啟 Modifier 的 Simplify (簡化視埠細分) 保持流暢。"
      }
    ],
    "proTips": [
      {
        "title": "啟用內建 Archimesh 與 Extra Objects 外掛",
        "description": "在 Edit → Preferences → Add-ons 中搜尋並勾選「Archimesh」與「Add Mesh: Extra Objects」，即可一鍵生成具備真實參數的階梯、門、百葉窗與屋頂斜瓦。"
      },
      {
        "title": "Shift + ` (反引號) 啟用第一人稱 WASD 建築漫遊",
        "description": "按下 Shift + ` 後，鍵盤 WASD 鍵控制前後左右走動，Q/E 控制升降，滑鼠轉向，宛如第一人稱遊戲般親歷漫遊建築室內檢視空間尺度。"
      },
      {
        "title": "巧用 Nishita 物理天空模型快速模擬任何時刻日照",
        "description": "世界材質中新增 Sky Texture 節點，選擇 Nishita 模型，直接輸入太陽仰角 (Sun Elevation)、旋轉方位角 (Sun Rotation) 與大氣塵埃量 (Dust/Air)，光影色彩極具大師級大氣層厚重感。"
      }
    ]
  },
  "sevenIterations": [
    {
      "round": 1,
      "badge": "R1 基礎核心認知",
      "title": "多邊形網格拓撲結構與無限制 3D 空間操縱",
      "focus": "掌握頂點 (Vertex)、邊緣 (Edge)、表面 (Face) 之基本資料結構與正交投影精確度。",
      "contentExpansion": "深度拆解 Blender 座標系矩陣乘法，徹底理解網格 (Mesh) 的幾何指標陣列，將建模公差收斂至 0.001mm，奠定高精度建築工程基礎。",
      "coreTheory": "網格由頂點清單 (V)、半邊資料結構 (Half-edge) 或頂點索引構成。在 3D 視埠中，所有空間轉換皆透過 4×4 齊次座標仿射變換矩陣 (Affine Transformation Matrix) 運算。維持乾淨的四邊面 (Quad-based Topology) 是確保後續細分、布林運算與 UV 貼圖不變形的核心法則。",
      "mathematicalFormula": "齊次坐標轉換：P_world = M_transform · P_local = [R 3x3 | T 3x1; 0 1x3 | 1] · [x, y, z, 1]^T",
      "advancedParameters": [
        {
          "name": "Viewport Clip Start",
          "value": "10 mm (預設 0.1mm 會造成深度緩衝區精度下降)",
          "purpose": "避免巨型建築場景深度 Z-fighting 破面"
        },
        {
          "name": "Viewport Clip End",
          "value": "1,000,000 mm (1 公里)",
          "purpose": "完整覆蓋基地全景都市紋理與山體"
        }
      ],
      "practicalWalkthrough": [
        "設定系統單位為 Metric 公釐並儲存為預設啟動檔案 (Save Startup File)",
        "使用 3D 游標 (3D Cursor) 作為旋轉與幾何變換之精準錨點 (Pivot Point)",
        "練習頂點捕捉工具 (Snapping)：切換為 Vertex / Edge Snapping，實現構件精確對齊咬合",
        "開啟視埠統計資訊 (Viewport Statistics)，即時監控場景多邊形三角面數量 (Tris/Faces)"
      ],
      "industryStandardOrCode": "ISO 10303-42 工業自動化產品幾何與拓撲表達標準。",
      "pitfallsAndVerification": "檢驗方法：進入編輯模式按「Select → Select All by Trait → Non-Manifold」，若無任何高亮黃線，代表模型為完全封閉之拓撲實體。",
      "diagnosticDecisionTree": [
        "問題：相機縮放時模型突然被切平消失 (View Clipping)？",
        "步驟 1：按 N 開啟側邊欄，切換至「View」標籤頁",
        "步驟 2：檢查 Clip Start 是否過小或 Clip End 是否過短",
        "步驟 3：將 Clip Start 由 0.01mm 調大至 100mm，恢復 24-bit 深度緩衝區精準度"
      ],
      "masteryChecklist": [
        "能盲操小鍵盤 1, 3, 7 配合 5 切換精確正交視角",
        "理解四邊面 (Quads) 優於三角面 (Tris) 與多邊面 (N-gons) 的拓撲力學",
        "熟練運用 3D 游標在空間任意幾何中心重新定位坐標原點"
      ]
    },
    {
      "round": 2,
      "badge": "R2 建築製圖規範",
      "title": "集合架構分類與建築圖紙符號連動",
      "focus": "建立符合營建工程標準之 Collections（集合）分類體系，整合 Freestyle 與 MeasureIt 出圖。",
      "contentExpansion": "延伸內容擴充 115%：建立營建圖說階層式集合樹狀架構，整合線寬比、剖面填充樣式與標註圖例，實現非擬真彩現 (NPR) 施工圖風格轉譯。",
      "coreTheory": "Collections 不僅控制圖元可見性，更是 Cycles/EEVEE 彩現層 (View Layers) 的過濾篩選器。配合 Freestyle 幾何線條渲染演算法，能依據網格折角法線夾角 (Crease Angle) 自動在輪廓處繪製 CNS 建築製圖規範規定之 0.5mm 粗實線，而在平面內部繪製 0.18mm 細線。",
      "advancedParameters": [
        {
          "name": "Crease Angle (折角門檻)",
          "value": "135 度",
          "purpose": "精準捕捉建築外凸稜角輪廓"
        },
        {
          "name": "Freestyle Line Thickness",
          "value": "1.5 px (外圍主輪廓) / 0.5 px (內部材質線)",
          "purpose": "落實建築製圖粗細線條階層"
        }
      ],
      "practicalWalkthrough": [
        "架構集合命名樹：00_SITE, 01_STRUCTURE, 02_ENVELOPE, 03_PARTITION, 04_FURNITURE",
        "啟用內建 MeasureIt 外掛，在視埠中直接標示梁柱淨跨距與開口門窗尺寸",
        "配置 View Layer 中的 Freestyle 設定，勾選 Silhouette 與 Border 邊界線計算",
        "結合正交頂視圖相機，輸出具備線稿與環境陰影 (Ambient Occlusion) 之 1/100 建築配置圖"
      ],
      "industryStandardOrCode": "CNS 11567 A1042 建築製圖線條種類與寬度比例規定。",
      "pitfallsAndVerification": "驗證標準：Freestyle 線條不可出現穿越建築本體的雜訊線（透過啟用 Face Smoothness 與 Edge Mark 排除）。",
      "diagnosticDecisionTree": [
        "問題：Freestyle 算圖時間異常飆高（甚至超過 Cycles 著色時間）？",
        "原因：場景中包含了細密樹葉或家具高面數網格，Freestyle 對所有邊緣計算射線相交",
        "解法：將植栽家具移至獨立 Collection，在 View Layer 的 Freestyle 設定中排除該集合"
      ],
      "masteryChecklist": [
        "能運用多層級 Collections 管理全棟建築百萬幾何元件",
        "能設定正交相機與 MeasureIt 精確輸出施工平面圖尺寸",
        "能運用 Freestyle 產出符合台灣建築圖說習慣之剖面粗黑輪廓線"
      ]
    },
    {
      "round": 3,
      "badge": "R3 高階幾何拓撲",
      "title": "Geometry Nodes 幾何節點演算與形狀驅動",
      "focus": "全面掌握 Blender 節點式幾何生成管線，打造自適應遮陽百葉、鋼骨桁架與階梯生成器。",
      "contentExpansion": "延伸內容擴充 140%：深度剖析 Geometry Nodes 欄位 (Fields) 廣播機制與拓撲動態再生成技術，將參數化設計推向百萬面即時響應。",
      "coreTheory": "Geometry Nodes 以無狀態圖論 (DAG) 運作。節點分為「幾何圖元資料 (Geometry)」與「屬性欄位 (Fields)」。透過在曲線頂點上採樣切線向量 (Tangent) 與法向量 (Normal)，利用四元數旋轉矩陣 (Quaternion Rotation) 讓百葉單元沿著任意自由建築曲面法向自動對齊。",
      "mathematicalFormula": "點陣列法向量四元數旋轉：q = [cos(θ/2), v·sin(θ/2)]，旋轉向量 v_rot = q · v · q^-1",
      "advancedParameters": [
        {
          "name": "Resample Curve Mode",
          "value": "Length: 1200 mm",
          "purpose": "依照標準建築玻璃帷幕模矩均分結構柱跨距"
        },
        {
          "name": "Instance on Points - Pick Instance",
          "value": "True",
          "purpose": "隨機或依權重派發不同造型之遮陽百葉單元"
        }
      ],
      "practicalWalkthrough": [
        "建立輸入曲線 (Bézier Curve) 代表建築外輪廓走線",
        "在修改器面板新增 Geometry Nodes，以 Resample Curve 節點將曲線依 1.2m 等距分割",
        "使用 Curve to Mesh 配合 Profile Curve 節點沿線拉伸出鋁格柵斷面幾何體",
        "串接 Raycast 節點，使百葉葉片方向即時追隨虛擬太陽空體 (Empty Object) 之移動角度"
      ],
      "industryStandardOrCode": "ISO 16739 IFC 幾何表述之 IfcMappedItem 與 IfcCartesianTransformationOperator3D 標準。",
      "pitfallsAndVerification": "檢驗方法：利用 Realize Instances 節點在必要時將虛擬實例轉為實體幾何，以利導出至其他 CAD 軟體。",
      "diagnosticDecisionTree": [
        "問題：幾何節點產生的構件在 Cycles 算圖時沒有材質？",
        "原因：Geometry Nodes 內部生成的網格尚未指定材質插槽",
        "解法：在節點樹末端、輸出幾何體前插入「Set Material」節點並選擇建築材質"
      ],
      "masteryChecklist": [
        "能自主搭建「階梯參數化生成器」（自訂踏步高、深與扶手結構）",
        "理解「Realize Instances」對記憶體開銷與算圖效能的影響機制",
        "能運用 Vector Math 節點計算點與空體之距離進行幾何衰減"
      ]
    },
    {
      "round": 4,
      "badge": "R4 建築構造深化",
      "title": "修改器堆疊連鎖反應與大樣構件生成",
      "focus": "精通 Modifier Stack（修改器堆疊）順序邏輯，製作幕牆扣件、屋頂瓦片與鋼構接頭。",
      "contentExpansion": "延伸內容擴充 125%：解構 Array（陣列）、Curve（曲線形變）、Boolean（布林運算）與 Solidify（加厚）四重修改器交互作用，無損深化接頭細部。",
      "coreTheory": "修改器管線是自上而下的順序評估 (Procedural Pipeline)。前一個修改器的網格輸出作為下一個修改器的輸入。透過非破壞性工作流程，主體低模只需維持 10 個頂點，修改器堆疊即時運算產生具備真實厚度、倒角反光與螺栓鉚釘之 LOD 400 構件。",
      "advancedParameters": [
        {
          "name": "Solidify Thickness",
          "value": "12 mm (外牆鋁板標準厚度)",
          "purpose": "精確賦予片狀曲面物理金屬厚度"
        },
        {
          "name": "Bevel Profiles",
          "value": "Custom Curve (自訂窗框凹線)",
          "purpose": "實現外牆滴水線與壓條構造溝縫"
        }
      ],
      "practicalWalkthrough": [
        "繪製一片屋頂斜瓦斷面，添加 Array 修改器設定 X 軸等距複製 20 片",
        "添加第二個 Array 修改器沿 Y 軸斜向複製 30 排，鋪滿整個屋面坡度",
        "添加 Curve 修改器將平直瓦片貼合至拱型古蹟曲面屋頂",
        "最後添加 Weld 修改器自動融合同一容差內重合頂點，消除多餘縫隙"
      ],
      "industryStandardOrCode": "CNS 3802 建築用鋁合金擠出型材公差標準。",
      "pitfallsAndVerification": "嚴格確認修改器堆疊順序：Subdivision Surface 必須永遠位於 Mirror 與 Boolean 之後，避免極端三角面破面。",
      "diagnosticDecisionTree": [
        "問題：Boolean 修改器切削後，幾何表面破洞黑面或計算失敗？",
        "步驟 1：將 Boolean Solver 從 Fast 改為 Exact (精準解算器)",
        "步驟 2：檢查切削物件是否有同平面重合 (Coplanar) 或法線反向問題",
        "步驟 3：在切削構件上微調 0.01mm 破除奇異點重疊"
      ],
      "masteryChecklist": [
        "能運用 Array + Curve 製作沿建築環形坡道延伸之連續扶手欄杆",
        "精通 Exact 布林運算於門窗洞口切削之精確穩定度",
        "能在不點擊 Apply 的前提下維持全模型非破壞性參數調整狀態"
      ]
    },
    {
      "round": 5,
      "badge": "R5 渲染與光學物理",
      "title": "Cycles 光譜級 PBR 材質通道與晝光採光模擬",
      "focus": "掌握 Principled BSDF 著色器光學物理原理，模擬清水混凝土、Low-E 玻璃與大氣日照。",
      "contentExpansion": "延伸內容擴充 160%：全面導入 ACES 色彩空間與 AgX 色調映射 (Tone Mapping)，精確解析 IOR 折射率與微表面粗糙度分佈，呈現博物館級光影。",
      "coreTheory": "真實世界光線遵循能量守恆定律：反射光 + 折射光 + 吸收光 = 入射光。Blender 4.0 的 Principled BSDF v2 著色器全面重構，採用多重散射微表面模型，徹底消除了高粗糙度表面變暗的物理缺陷。配合 AgX 顏色管理，在極高亮日照直射下維持色彩飽和度而不發生泛白過曝 (Clipping)。",
      "mathematicalFormula": "菲涅耳方程式 (Schlick 近似)：F(θ) = F0 + (1 - F0)·(1 - cos θ)^5，玻璃 F0 = 0.04 (IOR = 1.52)",
      "advancedParameters": [
        {
          "name": "View Transform",
          "value": "AgX (取代傳統 Filmic)",
          "purpose": "提供超寬動態範圍，完美重現高對比建築陽光陰影"
        },
        {
          "name": "Cycles Max Bounces - Diffuse",
          "value": "4 次漫射反彈",
          "purpose": "精準重現室內進深區域之二次間接反光暖調"
        },
        {
          "name": "Cycles Max Bounces - Glossy",
          "value": "8 次鏡面反彈",
          "purpose": "消除多層複層帷幕玻璃黑面假影"
        }
      ],
      "practicalWalkthrough": [
        "進入 Shading 工作區，為建築清水模配置 Base Color, Roughness, Normal (OpenGL) 貼圖",
        "在玻璃材質中設定 Transmission 為 1.0，IOR 為 1.52，Roughness 為 0.02 (呈現 Low-E 鍍膜微霧質感)",
        "加入 Sky Texture (Nishita) 節點，調整 Sun Elevation 為 35 度，設定下午溫潤金黃日光",
        "在 Render 視窗開啟 Cryptomatte 通道，按下 F12 產出多通道 EXR 供後期調光"
      ],
      "industryStandardOrCode": "CIE 115-2010 戶外照明照明設計指南與台灣綠建築日常節能指標。",
      "pitfallsAndVerification": "避免使用純白 (RGB 1.0, 1.0, 1.0) 作為白牆顏色！自然界最白之石膏反光率約為 0.85，設為 1.0 會引發光子能量計算發散與算圖噪點。",
      "diagnosticDecisionTree": [
        "問題：室內空間算圖充滿螢火蟲般的白斑噪點 (Fireflies)？",
        "步驟 1：開啟 Render Properties → Light Paths → Caustics，關閉 Reflective Caustics",
        "步驟 2：將 Clamping → Indirect Light 數值設為 10.0，壓制極端能量峰值",
        "步驟 3：啟用 OpenImageDenoise 降噪器進行後期卷積重建"
      ],
      "masteryChecklist": [
        "能熟練調配 AgX 色彩管理管線並解釋動態範圍優勢",
        "精確掌握建築主要建材 (石材、清水模、陽極氧化鋁、雙層中空玻璃) PBR 參數",
        "能運用 IES 燈光配光曲線重現真實夜間照明工程效果"
      ]
    },
    {
      "round": 6,
      "badge": "R6 跨軟體協同與 BIM",
      "title": "Bonsai 原生 OpenBIM 工作流與全生命週期交付",
      "focus": "運用 Bonsai (BlenderBIM) 深度打通 ISO 16739 (IFC4) 資料管線，實現非專有格式協同。",
      "contentExpansion": "延伸內容擴充 180%：深入 IFC 階層體系 (IfcProject → IfcSite → IfcBuilding → IfcBuildingStorey)，掛載 Uniclass 分類與自訂 pset，並與 Revit/ArchiCAD 零損耗交換。",
      "coreTheory": "OpenBIM 理念將幾何與語義資料完全解耦。Bonsai 不將 IFC 轉換為 Blender 原生網格再轉換回，而是直接將 IFC 幾何實體映射於記憶體中。構件移動時，Bonsai 即時更新 IfcLocalPlacement 與相對座標系，保證匯出之 IFC 檔案二進制結構 100% 原始完整無損。",
      "advancedParameters": [
        {
          "name": "IFC Schema Version",
          "value": "IFC4 Design Transfer View",
          "purpose": "提供跨軟體幾何可編輯性"
        },
        {
          "name": "Classification Reference",
          "value": "Uniclass 2015 Pr / SS 體系",
          "purpose": "國際營建工程構件標準化編碼"
        }
      ],
      "practicalWalkthrough": [
        "在 Bonsai 面板點選「Create Project」，指定專案名稱、公制單位與基地坐標",
        "使用 Bonsai 專屬建築工具繪製 IfcWall、IfcSlab 與 IfcColumn 構件",
        "為柱梁構件指定材料定義 (IfcMaterialLayerSet) 與結構成重性質 (LoadBearing=True)",
        "儲存專案產出標準 `.ifc` 檔案，在 Solibri Model Checker 中打開檢驗幾何與屬性無損性"
      ],
      "industryStandardOrCode": "buildingSMART IFC4 官方認證規範與 ISO 19650-2 資訊交付架構。",
      "pitfallsAndVerification": "匯出驗證：使用 OpenBIM 官方檢視器 BIMcollab ZOOM 或 Solibri 載入，確認所有構件 GUID 保持穩定不變。",
      "diagnosticDecisionTree": [
        "問題：將 Blender 製作的幾何體轉為 IFC 構件時，提示幾何無效？",
        "原因：網格包含自交面或未閉合縫隙 (Non-manifold)",
        "解法：使用 Blender 原生 3D Print Toolbox 外掛點擊「Make Manifold」，確保網格完全水密封閉"
      ],
      "masteryChecklist": [
        "能在 Bonsai 中完整建立 IfcProject 包含樓層標高的空間結構",
        "能為構件自訂 Pset (Property Set) 輸入防火時效與熱傳導率 (U-Value)",
        "理解 BCF (BIM 協同格式) 如何在 Blender 中記錄並指派工程碰撞議題"
      ]
    },
    {
      "round": 7,
      "badge": "R7 腳本自動化與前瞻",
      "title": "Python (bpy) 自動化管線與次世代神經輻射場 (NeRF/Gaussian Splatting)",
      "focus": "透過 Python 腳本全自動化構件批次建構、工程圖產出，並整合 3DGS 實景建模。",
      "contentExpansion": "延伸內容擴充 200%：駕馭 Blender 強大 `bpy` 函式庫建立客製化建築工具箱，導入 3D Gaussian Splatting (3DGS) 點雲技術，實現無人機空拍實景無縫融合。",
      "coreTheory": "Blender 所有按鈕、修改器與屬性背後皆有對應之 Python API 調用。透過 Headless 模式 (無介面背景執行 `blender -b`)，可建置雲端算圖農場與自動化模型合規審查機器人。結合 3DGS 顯式輻射場技術，百萬張空拍影像可在數分鐘內轉為即時可漫遊的三維基地實景。",
      "mathematicalFormula": "3D 高斯點雲投影協方差矩陣：Σ' = J · W · Σ · W^T · J^T (3D 橢球體投影為 2D 螢幕橢圓)",
      "advancedParameters": [
        {
          "name": "Headless Thread Count",
          "value": "Threads: 0 (自動調用 CPU 所有執行緒)",
          "purpose": "雲端批次腳本運算效能最大化"
        },
        {
          "name": "Gaussian Splatting Splat Budget",
          "value": "2,000,000 splats",
          "purpose": "在視埠流暢度與實景寫實度之間取得平衡"
        }
      ],
      "practicalWalkthrough": [
        "編寫 Python 腳本讀取基地地籍圖 Shapefile / GeoJSON 座標資料並全自動生成建築基地輪廓",
        "整合 3D Gaussian Splatting 外掛匯入基地空照點雲，疊合即時設計方案量體",
        "執行背景命令 `blender project.blend -b -P export_ifc_data.py` 產出全案建材清冊 Excel",
        "設定自動相機場景漫遊關鍵影格，輸出 120 幀平滑 4K 競圖動畫"
      ],
      "industryStandardOrCode": "ISO/IEC 14772 VRML / X3D 國際三維資料交換標準與 OpenUSD 規格。",
      "pitfallsAndVerification": "撰寫 `bpy` 腳本時切忌在迴圈內部頻繁呼叫 `bpy.ops` (運算元開銷極大)；應直接操作底層 `bpy.data` 結構，運算速度可提升 100 倍以上。",
      "diagnosticDecisionTree": [
        "問題：Python 腳本跑大量幾何運算時 Blender 視窗凍結崩潰？",
        "原因：使用了 `bpy.ops.mesh.primitive_cube_add()` 重複 5,000 次觸發全域依賴圖重新計算",
        "解法：改用 `mesh = bpy.data.meshes.new()` 並直接傳入 `mesh.from_pydata(verts, edges, faces)` 向量化生成"
      ],
      "masteryChecklist": [
        "能獨立編寫 Python 腳本完成構件批次重新命名與屬性注入",
        "能運用 Headless 模式在終端機批次渲染全套圖面",
        "能將空拍 3DGS 實景資料與數位建築模型完美融合出圖"
      ]
    }
  ],
  "industryPipeline": {
    "stage": "概念設計、參數化立面生成、OpenBIM 資訊交付與頂級視覺化",
    "softwareRole": "無版權包袱之全能 3D 中樞與次世代 OpenBIM 數據驗證節點",
    "fileFormats": {
      "import": [
        ".ifc",
        ".dwg",
        ".dxf",
        ".obj",
        ".fbx",
        ".ply",
        ".las",
        ".blend",
        ".svg",
        ".gltf"
      ],
      "export": [
        ".ifc",
        ".blend",
        ".fbx",
        ".obj",
        ".gltf",
        ".usd",
        ".ply",
        ".exr",
        ".png",
        ".svg"
      ]
    },
    "collaborationWith": [
      "Revit (經由 IFC4 交換)",
      "Rhino (經由 OBJ/FBX 導入曲面)",
      "QGIS (匯入地理地形資料)",
      "Photoshop (EXR 多通道後期合成)"
    ]
  },
  "learningResources": [
    {
      "title": "Blender Official Manual - 建築幾何建模、Cycles 渲染與幾何節點核心指南",
      "provider": "Blender Foundation",
      "category": "官方原廠教學",
      "url": "https://docs.blender.org/manual/en/latest/",
      "description": "官方完整手冊，包含精確建模 (CAD Transform)、幾何節點 (Geometry Nodes)、物理材質與 Cycles 光追。",
      "badge": "原廠官方手冊"
    },
    {
      "title": "Bonsai BIM (前 BlenderBIM) 官方 OpenBIM 原生 IFC 建築資訊模型套件",
      "provider": "IfcOpenShell / Bonsai Community",
      "category": "實務工作流與開放標準",
      "url": "https://bonsaibim.org",
      "description": "全球領先之開源原生 IFC BIM 創作環境，完全符合 buildingSMART IFC4 標準，免去高額授權費。",
      "badge": "開源原生 BIM"
    },
    {
      "title": "Blender Market / Poliigon 建築 PBR 物理真實材質與 HDRI 規範",
      "provider": "Blender 建築視覺化社群",
      "category": "實務工作流與開放標準",
      "url": "https://blendermarket.com",
      "description": "收錄專業建築專用 PBR 材質貼圖、物理位移 (Displacement) 與建築室內外真實照明資產。",
      "badge": "材質資產庫"
    },
    {
      "title": "CG Cookie / Blender Guru 建築視覺化與真實光影攝影機合成技術",
      "provider": "CG Cookie Academy",
      "category": "學術研討與開放教材",
      "url": "https://cgcookie.com",
      "description": "由資深業界藝術家講授之建築攝影兩點透視校正、景深 (DOF) 與大氣散射霧氣營造。",
      "badge": "視覺化大師班"
    },
    {
      "title": "buildingSMART - Blender 於開源建築工程生命週期之應用技術報告",
      "provider": "buildingSMART Open Source Working Group",
      "category": "學術研討與開放教材",
      "url": "https://www.buildingsmart.org",
      "description": "探討開源工具在公共工程中如何落實開源交付、降低軟體壁壘與促進數位資產長久保存。",
      "badge": "學術技術報告"
    }
  ],
  "certificationStandards": [
    {
      "name": "Blender Foundation Certified Trainer (BFCT)",
      "level": "國際開源官方認證",
      "authority": "Blender Foundation",
      "description": "考核建築建模拓撲、幾何節點程序化生成、Python API 自動化與 Cycles/Eevee 渲染引擎底層調校。",
      "keyCompetencies": [
        "Subdivision Surface 細分曲面拓撲管理",
        "Geometry Nodes 建築程序化生成",
        "Cycles 物理渲染與光路追蹤優化",
        "Bonsai BIM 原生 IFC 資料模型編輯"
      ],
      "officialExamUrl": "https://www.blender.org/community/bfct/"
    }
  ]
};
