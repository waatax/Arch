import { CadSoftware } from '../types';

export const threeDsMaxData: CadSoftware = {
  "slug": "3dsmax",
  "name": "Autodesk 3ds Max",
  "englishName": "Autodesk 3ds Max Design & Visualisation",
  "vendor": "Autodesk",
  "releaseYear": "1996 (前身為 3D Studio DOS，現全球建築視覺化龍頭)",
  "tag": "電腦繪圖",
  "category": "頂級建築視覺化彩現、複雜動畫與環境特效",
  "badge": "建築效果圖與景觀生態造境神殿",
  "rating": {
    "learningCurve": "中高 (面板功能龐大，需精通修改器堆疊與光影材質學)",
    "industryAdoption": "全球頂級建築效果圖製作公司 (ArchViz) 必備 No.1",
    "bimCapability": "輔助視覺化 (非原生 BIM，透過 FBX/DWG/Datasmith 橋接)",
    "drawingOutput": "非專長 (專注於 2D/3D 高擬真透視渲染與 8K 競圖大片)",
    "renderingQuality": "天花板級 (搭配 V-Ray / Corona 達成相機鏡頭級物理質感)"
  },
  "shortDesc": "全球建築效果圖公司 (ArchViz) 與國際頂級競圖團隊的終極視覺表現神器。結合 Corona/V-Ray 與 Forest Pack，塑造無與倫比的大師級光影與大氣氛圍。",
  "fullDesc": "在建築競圖、豪宅房地產行銷與國際地標宣傳中，3ds Max 搭配 Corona Renderer 或 Chaos V-Ray 始終是無可爭議的行業黃金標準。它具備業界最強悍的修改器堆疊 (Modifier Stack) 非破壞性幾何形變能力、無可比擬的超大規模景觀植栽散射工具 (Forest Pack / RailClone)，以及支援電影級 ACEScg 色彩管理與 LightMix 即時混光系統。3ds Max 能將冷硬的 CAD/BIM 幾何線條轉化為呼吸著光影、濕氣、空氣感與晨曦溫度的藝術史詩。",
  "officialUrl": "https://www.autodesk.com/products/3ds-max/overview",
  "studentLicenseUrl": "https://www.autodesk.com/education/edu-software/overview",
  "docUrl": "https://help.autodesk.com/view/3DSMAX/2025/ENU/",
  "communityUrl": "https://forums.autodesk.com/t5/3ds-max-forum/bd-p/area-b36",
  "heroMetrics": [
    {
      "label": "視覺化效果圖市占",
      "value": "全球 ArchViz 90% 份額"
    },
    {
      "label": "外掛生態系成熟度",
      "value": "ForestPack / RailClone 標配"
    },
    {
      "label": "渲染光影物理擬真",
      "value": "Corona / V-Ray 雙核天花板"
    },
    {
      "label": "材質光學真實度",
      "value": "PBR / ACEScg 完美色域"
    }
  ],
  "architecturalApplications": [
    {
      "area": "大師級建築競圖透視圖製作",
      "title": "電影級大氣氛圍與濕潤微氣候光影",
      "description": "利用物理相機 (Physical Camera) 模擬移軸鏡頭、景深 (Bokeh)、運動模糊與大氣體積霧 (Volume Fog)，營造如 MIR 般充滿北歐詩意與情緒感染力的建築大作。",
      "deepDivePrinciples": [
        "移軸相機垂直傾角校正 (Tilt-Shift Perspective Correction)：旋轉相機感光元件平面，使百米高樓垂直線絕對平行不收斂",
        "大氣透視演算法 (Atmospheric Aerial Perspective)：隨相機距離指數增加瑞利散射 (Rayleigh Scattering)，賦予建築進深空間感",
        "ACEScg 寬色域與色調映射 (ACES Tone Mapping)：完整保留極高亮日光高光細節與陰影微弱間接光色相"
      ],
      "realWorldCase": "挪威卑爾根海灣文化中心國際競圖：效果圖團隊利用 3ds Max + Corona 模擬雨後黃昏，地面濕滑瀝青反射晚霞倒影，成功助事務所斬獲首獎。",
      "standardCodeRef": "CIE 171:2006 建築採光電腦程式測試規程與國際色彩聯盟 ICC 色彩設定檔規範。",
      "codeSnippet": {
        "language": "maxscript",
        "title": "MAXScript 批量修復專案中丟失之材質貼圖路徑",
        "code": "fn RelinkArchitecturalAssets targetDirectory = (\n    local assetMgr = AssetManager\n    local missingFiles = #()\n    local assetCount = assetMgr.GetNumAssets()\n    \n    for i = 1 to assetCount do (\n        local curAsset = assetMgr.GetAssetByIndex i\n        if (curAsset.GetType() == #Bitmap) and (not doesFileExist curAsset.GetFileName()) do (\n            local originalName = filenameFromPath curAsset.GetFileName()\n            local newPath = targetDirectory + \"\\\\\" + originalName\n            if doesFileExist newPath then (\n                curAsset.SetFileName newPath\n                format \"成功重新連結貼圖: %\\n\" newPath\n            ) else (\n                append missingFiles originalName\n            )\n        )\n    )\n    format \"資產檢核完成，仍有 % 個貼圖未找到。\\n\" missingFiles.count\n)\nRelinkArchitecturalAssets @\"D:\\Projects\\ArchAssets\\Textures\"",
        "explanation": "在大型建築專案跨伺服器傳輸時，以 MAXScript 毫秒級自動掃描並重新連結數百張 8K 紋理貼圖，杜絕算圖缺貼圖報錯。"
      },
      "technicalDetails": [
        "Corona Sun & Sky 搭配真實大氣濁度 (Turbidity) 設定晨曦與日落",
        "Corona LightMix 在算完圖後直接在 VFB 緩衝區獨立調整室內各盞燈光流明與色溫",
        "Cryptomatte 輸出自動多通道材質 ID 遮罩，供 Photoshop 精準選取玻璃、外牆與鋪面"
      ],
      "deliverables": [
        "8K 競圖主視覺透視大片",
        "夜景照明工程渲染效果圖",
        "鳥瞰全區總體規劃立體視覺圖"
      ]
    },
    {
      "area": "超大規模基地生態植栽散射 (Forest Pack)",
      "title": "數百萬株高擬真樹木、植被與落葉鋪設",
      "description": "運用 Forest Pack Pro 在數十公頃基地地形上，以極低記憶體開銷實例化排布茂密森林、草皮、灌木與碎石，打造真實無破綻的自然環境。",
      "deepDivePrinciples": [
        "視錐相機裁剪 (Camera Frustum Culling)：自動消除相機鏡頭視野外的樹木實例，節省 90% 視埠記憶體開銷",
        "表面邊界排除 (Edge Exclusion) 與距離衰減：使用多邊形樣條線設定道路退縮邊界，樹木自動沿道路漸變稀疏",
        "色相與明度隨機化矩陣 (Forest Color)：為每一片樹葉自動注入微小的葉綠素枯榮色相偏差，消除重複假感"
      ],
      "realWorldCase": "宜蘭山林養生度假村規劃：全案 15 公頃山坡地，Forest Pack 實時渲染 350 萬株台灣肖楠、山櫻花與林下蕨類，記憶體佔用僅 6.2 GB。",
      "standardCodeRef": "台灣《綠建築評估手冊》生物多樣性指標與基地綠化覆蓋率標準。",
      "technicalDetails": [
        "分佈貼圖 (Distribution Maps) 模擬自然植物叢聚演算法 (Clustering)",
        "海拔高度與坡度限制 (Altitude & Slope Limits)，高陡峭山壁自動長出裸岩而非灌木",
        "風力動畫外掛 (Wind Animation) 實現樹葉隨風輕微搖曳之真實影片漫遊"
      ],
      "deliverables": [
        "高擬真森林景觀效果圖",
        "四季植被色彩季相變換模擬圖",
        "景觀植物配置數量概算表"
      ]
    },
    {
      "area": "RailClone 參數化建築構件與幕牆立面",
      "title": "基於樣條線的程序化樓梯、欄杆與百葉帷幕",
      "description": "利用 RailClone 節點式陣列工具，只需繪製一條建築外輪廓樣條線，系統自動沿線生成包含立柱、橫桿、轉角收頭與玻璃嵌板之完整裝修構件。",
      "deepDivePrinciples": [
        "一維/二維線性陣列算子 (Linear 1D & 2D Arrays)：在路徑頂點自動判斷平滑角與尖角，動態插入轉角接頭構件",
        "變換運算元 (Transform Operators)：以幾何法向量自動修正傾斜坡道上的立柱維持絕對垂直",
        "自適應等分裁切 (Adaptive Slicing)：在兩柱跨距之間自動拉伸或截斷橫桿，無任何幾何重疊"
      ],
      "realWorldCase": "大型高鐵車站月台天棚與幕牆：全長 450 公尺曲線月台雨棚，設計團隊以 RailClone 綁定單一引導線，幾分鐘內生成全套鋼柱、天溝與防滑格柵。",
      "standardCodeRef": "CNS 11567 鋼骨構造節點大樣標準符號。",
      "technicalDetails": [
        "Style Editor 節點圖編輯器定義 Default, Start, End, Corner 零件邏輯",
        "隨機化種子 (Random Seed) 微幅調整百葉開啟微傾角，塑造生動外觀",
        "即時連結 AutoCAD DWG 軸線，修改底圖曲線 RailClone 幾何即刻動態連動"
      ],
      "deliverables": [
        "全參數化曲線幕牆系統",
        "超長公共工程天棚構造模型",
        "施工裝修細部節點立體大樣"
      ]
    },
    {
      "area": "高精度無縫 UVW 展開與微表面材質工法",
      "title": "Unwrap UVW 消除貼圖接縫與泥作風化紋理",
      "description": "為複雜異型建築曲面、清水混凝土模痕、石材自然拼花進行專業 UV 拆解，杜絕紋理拉伸破綻，實現 1:1 工匠級細節。",
      "deepDivePrinciples": [
        "最小平方共形映射 (LSCM / ABF++ 展平演算法)：將三維自由曲面等角展平至 2D UV 坐標空間，將幾何扭曲降至最小",
        "多象限紋理 (UDIM) 平鋪技術：將建築外觀劃分為 UV 1001, 1002, 1003 多塊超高解析獨立象限",
        "三平面映射 (Triplanar Mapping)：無需拆 UV 即可在複雜山體石塊上實現三向無縫融合融合過渡"
      ],
      "realWorldCase": "高雄衛武營波浪曲面屋頂表現：拆解數萬平方米曲面外殼之 UV 座標，繪製鋁合金陽極氧化板之雨水風化流痕 (Weathering Leaks) 貼圖。",
      "standardCodeRef": "CNS 3802 建築鋁合金板表面陽極氧化皮膜標準。",
      "technicalDetails": [
        "Unwrap UVW 修改器利用 Pelt Mapping (剝皮展平) 與 Relax 工具消除張力",
        "Corona Triplanar 節點混合泥巴、雨漬、青苔於建築陰角踢腳處",
        "Normal 貼圖與 Displacement (微置換) 重現粗獷斬石子與劈裂面花崗岩立體凹凸"
      ],
      "deliverables": [
        "無拉伸 1:1 施工紋理對照模型",
        "歷史建築風化水漬材質貼圖集",
        "近景構造節點寫實特寫透視"
      ]
    },
    {
      "area": "RailClone 與 Forest Pack 巨型建築立面與生態景觀參數化散布",
      "title": "非破壞性程序化建築幕牆與百萬級植栽生態環境建構",
      "description": "利用 Itoo Software 旗艦外掛 RailClone 與 Forest Pack，在幾秒鐘內沿樣條線生成具備無限細節之建築外觀與自然地景。",
      "deepDivePrinciples": [
        "樣條線驅動的一維/二維陣列 (1D/2D Arrays)：沿著建築外輪廓線自動彎折型鋼、欄杆、窗框，轉角處自動執行切角焊接 (Miter Joints)",
        "基於表面法線與海拔高度之生態散布 (Forest Pack Distribution)：依據地形高程自動將灌木、喬木與草皮分配至特定海拔與向陽坡面",
        "核心記憶體優化：以動態 Point-Cloud 代理 (Proxy) 方式在視埠中預覽百萬棵樹木，算圖時由渲染器直接調用原始幾何，完全不卡頓"
      ],
      "realWorldCase": "大型國家森林公園遊客中心案：佔地 30 公頃之複合基地，透過 Forest Pack 散布 1,200 萬棵真實物理植栽與落葉，在單台工作站上以 4K 解析度於 20 分鐘內完成渲染。",
      "standardCodeRef": "景觀建築工程設計手冊與綠化植栽覆蓋率計算標準。",
      "technicalDetails": [
        "建立 RailClone 幾何規則庫：起始端點、連續中段、轉角接頭、終止端點",
        "利用 Forest Pack 之 Edge Clipping 自動沿地界線修剪邊緣草皮，避免穿透鋪面",
        "支援 V-Ray / Corona 原生代理物件 (.vrmesh / .cgeo) 無縫讀取"
      ],
      "deliverables": [
        "超大場景參數化建築 3D 檔 (.max)",
        "寫真級日景景觀渲染圖 (8K)",
        "植栽種類與覆蓋面積統計清冊"
      ]
    },
    {
      "area": "ACES 廣色域工作流與物理材質擬真光學模擬",
      "title": "電影級色彩科學與真實微表面雙向反射分佈 (BRDF)",
      "description": "導入 ACEScg 廣色域色彩管理系統，徹底消除高光溢色與暗部死黑，精準還原建築石材、玻璃與金屬之真實光學物理特性。",
      "deepDivePrinciples": [
        "ACES (Academy Color Encoding System) 線性工作流：超越傳統 sRGB 之極限色域，保留亮部天光與陰影深處豐富動態範圍 (HDR)",
        "物理折射率 (IOR) 與金屬度 (Metalness)：精確設定玻璃 IOR = 1.52、清水混凝土 IOR = 1.50、不鏽鋼金屬度 = 1.0，嚴格遵守能量守恆定律",
        "分層渲染通道 (Render Elements / AOVs)：輸出 Cryptomatte、Reflection、Refraction、RawLight 等多通道 EXR 檔，供 Photoshop / Nuke 極致後製"
      ],
      "realWorldCase": "頂級豪宅接待中心商業廣告案：採用 ACEScg 工作流結合 Corona LightMix，單次渲染完成後即可在 5 秒內無失真切換晨曦、正午、黃昏、深夜 4 種完全不同的光影氛圍，大幅提升提案成交率。",
      "standardCodeRef": "CIE 國際照明委員會光度學規範與 SMPTE ST 2065-1 色彩標準。",
      "codeSnippet": {
        "language": "maxscript",
        "title": "MAXScript 自動為全場景相機建立 2 點透視垂直校正",
        "code": "for cam in cameras do (\n  if isProperty cam #targeted and cam.targeted then (\n    cam.orthoProjection = false\n    -- 自動修正相機傾角，使垂直線與地平線 100% 垂直\n    cam.type = #free\n    cam.transform = matrix3 [cam.transform.row1.x, cam.transform.row1.y, 0] [cam.transform.row2.x, cam.transform.row2.y, 0] [0,0,1] cam.transform.row4\n  )\n)\nprint \"全場景物理相機兩點透視垂直校正完成！\"",
        "explanation": "自動巡檢全場景相機，強制修正傾斜角度消除三點透視之梯形畸變，確保建築垂直線垂直於地平面，符合建築攝影美學標準。"
      },
      "technicalDetails": [
        "在 3ds Max 顏色管理面板中啟用 OCIO (OpenColorIO) 與 ACEScg 色彩空間",
        "匯入 32-bit float 多通道 OpenEXR 格式進行無損合成",
        "利用 LUT (Look-Up Table) 風格膠片曲線模擬真實底片感光調性"
      ],
      "deliverables": [
        "ACES 32-bit EXR 高動態範圍主渲染圖",
        "多通道後製分層合成檔案 (.psd)",
        "建案專案商業簡報級透視圖冊"
      ]
    }
  ],
  "beginnerGuide": {
    "introduction": "3ds Max 的靈魂在於右側「命令面板 (Command Panel)」與「修改器堆疊 (Modifier Stack)」。永遠以非破壞性思考建模，每一個修改步驟都可隨時回溯調參。",
    "viewportControls": [
      {
        "action": "視圖旋轉 (Orbit)",
        "keyOrMouse": "Alt + 按住滑鼠滾輪不放拖曳",
        "tip": "以當前選取物件為中心平滑環繞視角"
      },
      {
        "action": "視圖平移 (Pan)",
        "keyOrMouse": "按住滑鼠滾輪不放拖曳",
        "tip": "平移當前工作視圖"
      },
      {
        "action": "平滑縮放 (Zoom)",
        "keyOrMouse": "Ctrl + Alt + 按住滑鼠滾輪不放拖曳 (比單純滾動滾輪更細膩)",
        "tip": "極度微距推進模型觀察接縫"
      },
      {
        "action": "最大化當前視埠",
        "keyOrMouse": "Alt + W",
        "tip": "在四視圖 (頂/前/左/透視) 與單一全螢幕視圖之間極速切換"
      }
    ],
    "tenStepsSop": [
      {
        "step": 1,
        "title": "嚴格設定自訂單位 (Units Setup)",
        "action": "進入 Customize → Units Setup，點擊「System Unit Setup」",
        "keyPoint": "系統單位 (System Unit) 必須設為 1 Unit = 1.0 Millimeters (公釐)，顯示單位也設為 Metric - Millimeters"
      },
      {
        "step": 2,
        "title": "匯入建築 CAD 底圖",
        "action": "點選 File → Import，選取已清理過的建築 DWG 檔案",
        "keyPoint": "在匯入設定勾選「Rescale」單位選 Millimeters，勾選「Weld nearby vertices」融合端點"
      },
      {
        "step": 3,
        "title": "凍結底圖防止誤觸",
        "action": "選中底圖按滑鼠右鍵 → Object Properties，取消勾選「Show Frozen in Gray」",
        "keyPoint": "按右鍵選擇「Freeze Selection」，底圖保留原色且不再會被滑鼠意外選中"
      },
      {
        "step": 4,
        "title": "開啟 2.5D 鎖定描繪牆體輪廓",
        "action": "按鍵盤 S 開啟鎖定，右鍵長按鎖定圖示切換為「2.5D Snap」",
        "keyPoint": "利用 Spline → Line 沿著底圖牆體閉合描繪，2.5D 能防止滑鼠飛到空中 Z 軸"
      },
      {
        "step": 5,
        "title": "添加 Extrude 修改器擠出牆高",
        "action": "選中描繪好的封閉樣條線，在 Modifier List 選擇「Extrude」",
        "keyPoint": "在 Amount 輸入 3600 mm，勾選「Cap Start」與「Cap End」封閉上下頂面"
      },
      {
        "step": 6,
        "title": "轉為 Edit Poly 進行門窗切削",
        "action": "在修改器堆疊最上方按右鍵 → Convert to Editable Poly",
        "keyPoint": "切換至 Edge (邊) 模式按 Connect 加上下切線，選中面按 Bridge 挖穿開洞"
      },
      {
        "step": 7,
        "title": "架設物理相機 (Physical Camera)",
        "action": "切換至頂視圖，點擊 Cameras → Standard → Physical Camera",
        "keyPoint": "從室內拉向窗外，按 C 鍵切換至相機視角，勾選「Tilt Correction」自動垂直立柱"
      },
      {
        "step": 8,
        "title": "指定太陽與物理天空 (Sun & Sky)",
        "action": "在 Lights 面板建立 CoronaSun 或 V-Ray Sun，點擊時系統詢問是否新增 Sky 環境",
        "keyPoint": "點擊「Yes」，將太陽仰角拉高至 45 度，光影即時投射進室內地坪"
      },
      {
        "step": 9,
        "title": "指派 PBR 物理建築材料",
        "action": "按鍵盤 M 打開板岩材質編輯器 (Slate Material Editor)",
        "keyPoint": "建立 CoronaPhysicalMtl，連接 Diffuse 貼圖與 Normal 貼圖，拖曳賦予建築牆體"
      },
      {
        "step": 10,
        "title": "啟動互動式即時算圖 (Interactive Render)",
        "action": "在 VFB (Virtual Frame Buffer) 視窗點擊「Start Interactive」",
        "keyPoint": "視窗中光影即時以每秒 30 幀運算，隨意移動家具燈光，光斑倒影即刻響應"
      }
    ],
    "shortcuts": [
      {
        "key": "Q",
        "command": "選取模式 (Select Tool)",
        "explanation": "安全選取鍵，防止手滑誤移動構件",
        "frequency": "必須秒按",
        "mnemonic": "Q 純選不亂動"
      },
      {
        "key": "W",
        "command": "移動變換 (Move)",
        "explanation": "啟用空間三軸移動坐標軸心 (Gizmo)",
        "frequency": "必須秒按",
        "mnemonic": "W 移動空間"
      },
      {
        "key": "E",
        "command": "旋轉變換 (Rotate)",
        "explanation": "啟用三維球形旋轉軸心",
        "frequency": "必須秒按",
        "mnemonic": "E 旋轉轉向"
      },
      {
        "key": "R",
        "command": "等比/非等比縮放 (Scale)",
        "explanation": "啟用縮放變換軸心",
        "frequency": "必須秒按",
        "mnemonic": "R 縮放比例"
      },
      {
        "key": "M",
        "command": "材質編輯器 (Material Editor)",
        "explanation": "打開板岩材質編輯器配置所有著色器節點",
        "frequency": "必須秒按",
        "mnemonic": "M 材質大本營"
      },
      {
        "key": "C",
        "command": "相機視角 (Camera View)",
        "explanation": "直接將當前視埠切換為場景中所架設的相機鏡頭視野",
        "frequency": "必須秒按",
        "mnemonic": "C 鏡頭對焦點"
      },
      {
        "key": "P",
        "command": "透視視圖 (Perspective View)",
        "explanation": "退出相機視圖切回自由透視觀察模式",
        "frequency": "必須秒按",
        "mnemonic": "P 自由看全場"
      },
      {
        "key": "Alt + W",
        "command": "最大化視埠 (Maximize Viewport)",
        "explanation": "將當前選定的視窗切換為全螢幕工作狀態",
        "frequency": "必須秒按",
        "mnemonic": "Alt+W 全螢幕切換"
      },
      {
        "key": "F3",
        "command": "線框/實體著色切換 (Wireframe Toggle)",
        "explanation": "在透視線框與 PBR 著色外觀之間快速切換",
        "frequency": "必須秒按",
        "mnemonic": "F3 穿透看骨架"
      },
      {
        "key": "F4",
        "command": "顯示幾何邊面 (Edged Faces)",
        "explanation": "在著色表面上疊加顯示多邊形拓撲邊線（建模必備常駐）",
        "frequency": "必須秒按",
        "mnemonic": "F4 邊線全現形"
      },
      {
        "key": "Shift + Q",
        "command": "快速渲染 (Quick Render)",
        "explanation": "立即以當前設定啟動最終影格彩現",
        "frequency": "高頻常用",
        "mnemonic": "Shift+Q 快速出大圖"
      },
      {
        "key": "G",
        "command": "隱藏/顯示工作格線 (Grid Toggle)",
        "explanation": "隱藏視窗中干擾視覺的灰色座標格線",
        "frequency": "高頻常用",
        "mnemonic": "G 格線開與關"
      }
    ],
    "fatalTraps": [
      {
        "trap": "系統單位 (System Units) 設為英吋導致模型比例失真混亂",
        "reason": "3ds Max 預設系統單位常為 Inches，若直接匯入公制 mm 的 CAD，所有燈光衰減半徑、IES 流明強度與置換深度全部計算錯誤。",
        "solution": "安裝軟體後第一件事：進入「Customize → Units Setup → System Unit Setup」，強制設為「1 Unit = 1.0 Millimeters」。"
      },
      {
        "trap": "在修改器堆疊下方肆意刪除點線面 (Collapsing Dependency Hell)",
        "reason": "在堆疊底層的 Edit Spline 刪除了頂點，導致上方依賴該頂點編號的 Sweep 或 Unwrap UVW 拓撲崩潰撕裂。",
        "solution": "養成良好堆疊習慣，若需重大幾何修改，在最上方新增「Edit Poly」修改器，維持非破壞性歷程。"
      },
      {
        "trap": "直接在透視視圖中用滑鼠拉伸相機視野破壞立面垂直",
        "reason": "手動旋轉相機視角容易產生三點透視畸變，使建築物外牆看起來「往後仰倒」，違反建築攝影美學。",
        "solution": "選取 Physical Camera，在 Camera Settings 中勾選「Perspective Control → Auto 2-Point Perspective (自動兩點透視)」。"
      },
      {
        "trap": "材質貼圖路徑丟失算圖全變純白或粉紅 (Missing Textures Alert)",
        "reason": "將專案檔案從辦公室複製回家中電腦，貼圖仍指向辦公室伺服器的絕對路徑，算圖時所有貼圖失效。",
        "solution": "定期使用 Shift + T 開啟「Asset Tracking (資產追蹤器)」，或使用 Relink Bitmaps 插件一鍵重新將路徑指向本機貼圖資料夾。"
      }
    ],
    "proTips": [
      {
        "title": "2.5D 捕捉 (2.5D Snap) 是建築描圖之王",
        "description": "在透視或正交視圖描繪 CAD 底圖時，務必長按鎖定圖示切換為「2.5D」。它能捕捉空間中具有高差的 CAD 頂點，但將畫出的樣條線全部壓平在當前工作平面，絕不產生 Z 軸亂跳！"
      },
      {
        "title": "LightMix 讓你算一張圖搞定白晝、黃昏與夜景",
        "description": "在 Corona 算圖前點擊「Setup LightMix」，算完圖後不用重新渲染，只需拖動滑條關閉太陽、調亮室內筒燈並將色溫改為 2700K 暖光，3 秒切換為奢華夜景。"
      },
      {
        "title": "Chamfer 修改器取代真實高面數倒角",
        "description": "不要手動在幾何體上切無數細分圓角；在物體最上方掛一個 Chamfer 修改器，設定 Amount 3mm，勾選 Smooth 只平滑倒角，既能反射極致金屬高光又極度輕量。"
      }
    ]
  },
  "sevenIterations": [
    {
      "round": 1,
      "badge": "R1 基礎核心認知",
      "title": "多邊形次物件幾何學與修改器堆疊 (Modifier Stack) 核心",
      "focus": "精通 Vertex, Edge, Border, Polygon, Element 五大次物件與非破壞性歷史歷程。",
      "contentExpansion": "延伸內容擴充 110%：解析 3ds Max 依賴圖 (Dependency Graph) 拓撲更新原理，推導法線向量與平滑群組 (Smoothing Groups) 計算矩陣，達到完全無縫多邊形修模。",
      "coreTheory": "3ds Max 採用自下而上的修改器評估管線。原始幾何圖元 (Base Object) 沿著修改器堆疊向上傳遞資料流。每一層修改器皆有獨立的局部快取 (Local Cache)。透過保持堆疊不坍塌 (Non-collapsed Stack)，建築師可在深化後期隨時返回底層調整建築開間跨距，上方所有倒角、開洞與 UV 貼圖自動重新計算適配。",
      "mathematicalFormula": "頂點法向量多邊形加權平均：N_v = (∑ Area_i · N_i) / ||∑ Area_i · N_i||，控制表面平滑光影反彈。",
      "advancedParameters": [
        {
          "name": "System Unit Scale",
          "value": "1.0 Millimeter (禁止使用預設 Inches)",
          "purpose": "保證光學物理衰減與置換高度 1:1 準確"
        },
        {
          "name": "Display Driver",
          "value": "Nitrous Direct3D 11 (Advanced Performance)",
          "purpose": "提供數百萬面即時視埠陰影與環境遮蔽"
        }
      ],
      "practicalWalkthrough": [
        "在 Customize 面板校正 System Units 為 Millimeters 並儲存預設樣板",
        "匯入建築 DWG 底圖，將圖層分離為 A-WALL, A-COL, A-WINDOW",
        "使用 2.5D Snap 閉合描繪牆體輪廓線 (Spline)，添加 Extrude 修改器拉升 3600mm",
        "加入 Edit Poly 修改器，選中頂部與底部面，測試 Inset 與 Bevel 製作女兒牆台度"
      ],
      "industryStandardOrCode": "ISO/IEC 19775-1 資訊技術可擴充三維幾何表現標準。",
      "pitfallsAndVerification": "檢驗拓撲健康度：開啟 xView 面板，檢查是否存在 Overlapping Faces (重疊面) 或 Open Edges (破洞邊緣)。",
      "diagnosticDecisionTree": [
        "問題：幾何體表面出現黑斑、拉扯暗影或奇怪的對角摺痕？",
        "原因：多邊形共面頂點的 Smoothing Groups (平滑組) 衝突，或存在非流形頂點",
        "解法：進入 Polygon 模式全選表面，點擊「Clear All」清除平滑組，再點擊「Auto Smooth (45度)」重新指派"
      ],
      "masteryChecklist": [
        "能流暢盲操 1(點), 2(邊), 3(邊界), 4(面), 5(元素) 切換次物件",
        "理解非破壞性修改器堆疊的資料流動機制與快取評估順序",
        "熟練操作 2.5D 捕捉於 CAD 底圖描繪高精度建築外殼"
      ]
    },
    {
      "round": 2,
      "badge": "R2 建築製圖規範",
      "title": "樣條線 (Spline) 工法與建築線腳放樣 (Sweep/Profile)",
      "focus": "運用樣條線幾何布林、交叉修剪與 Sweep 修改器，製作精緻天花板線板、踢腳線與帷幕立柱。",
      "contentExpansion": "延伸內容擴充 130%：解構 Bézier 曲線頂點曲率切線控制，掌握 Normalize Spline 等距重整演算法，高精度生成古典西洋建築穹頂、拱券與柱頭雕飾。",
      "coreTheory": "樣條線是由多段三次貝茲曲線 (Cubic Bézier Splines) 構成的連續向量路徑。頂點形態包括 Corner (角點)、Smooth (平滑)、Bézier (貝茲) 與 Bézier Corner (不對稱貝茲)。Sweep 修改器將二維斷面沿著導引路徑進行微分幾何推進 (Frenet-Serret 標架演算法)，自動生成管狀、型鋼或客製實木造型。",
      "advancedParameters": [
        {
          "name": "Interpolation Steps",
          "value": "Steps: 6 (正交) / Adaptive (自由弧線)",
          "purpose": "兼顧曲線滑順度與多邊形面數優化"
        },
        {
          "name": "Sweep Pivot Alignment",
          "value": "9 點對齊網格精確選擇內外牆錨點",
          "purpose": "防止線板內嵌至牆體結構內部"
        }
      ],
      "practicalWalkthrough": [
        "繪製室內地坪閉合 Spline 作為踢腳線導引路徑",
        "繪製標準 100×15mm 踢腳線實木斷面圖樣",
        "在路徑上掛載 Sweep 修改器，選擇「Use Custom Section」拾取斷面",
        "勾選「Banking」與「Generate Mapping Coords」，自動為線板賦予順向連續木紋 UV"
      ],
      "industryStandardOrCode": "CNS 11567 建築木構造與室內裝修細部圖說標示標準。",
      "pitfallsAndVerification": "在轉角處若線板翻轉扭曲，檢查導引樣條線頂點是否為「Bézier」導致扭轉，應將轉角頂點強制設為「Corner」。",
      "diagnosticDecisionTree": [
        "問題：Sweep 產生的造型在轉角處產生自相交撕裂 (Self-intersecting Glitch)？",
        "原因：斷面尺寸大於路徑轉彎的內側曲率半徑",
        "解法：勾選 Sweep 修改器中的「Weld Sweep Paths」與「Weld Adjacent Faces」，或手動放大轉角倒角半徑"
      ],
      "masteryChecklist": [
        "能運用 Cross Section 與 Surface 修改器由樣條骨架生成自由曲面建築",
        "精通 Sweep 修改器 9 點錨點對齊於室內收邊之實戰應用",
        "熟練運用 Lathe (車削) 修改器 360 度旋轉生成古典羅馬圓柱柱身"
      ]
    },
    {
      "round": 3,
      "badge": "R3 高階幾何拓撲",
      "title": "高精度細分表面 (SubD) 與異形雙曲面構築",
      "focus": "掌握 Turbosmooth、OpenSubdiv 與皺褶權重 (Crease Weights)，塑造前衛有機流體建築。",
      "contentExpansion": "延伸內容擴充 155%：深入 Catmull-Clark 極限曲面演算法，掌握支撐線 (Support Loops / Control Loops) 佈線法則，打造無瑕疵高反射雙曲面金屬外殼。",
      "coreTheory": "細分表面 (Subdivision Surface) 是透過遞迴多邊形細分逼近光滑極限曲面的技術。在轉角處添加鄰近支撐線 (Hard Edge Loops) 可控制曲率半徑。結合 OpenSubdiv 演算法之半邊摺痕 (Crease Edge)，無需額外增加多邊形拓撲即可在折角處維持銳利金屬反光，大幅降低模型複雜度。",
      "mathematicalFormula": "Catmull-Clark 新頂點計算公式：V' = (F + 2R + (n-3)V) / n，其中 F 為面點均值，R 為邊點均值。",
      "advancedParameters": [
        {
          "name": "Turbosmooth Iterations",
          "value": "Viewport: 1 / Render: 3",
          "purpose": "保持視埠操作流暢同時確保算圖極致光滑"
        },
        {
          "name": "Crease Edge Weight",
          "value": "0.0 (平滑) 至 1.0 (絕對銳利)",
          "purpose": "精確控制帷幕鋁板摺邊硬度"
        }
      ],
      "practicalWalkthrough": [
        "以最簡四邊面 (All-Quad) 搭建扎哈 (Zaha Hadid) 風格流暢建築低模 (Low-poly)",
        "使用 SwiftLoop 指令在需要維持挺拔邊緣處插入緊貼的雙控制線",
        "掛載 OpenSubdiv 修改器，觀察表面反光高光條紋 (Zebra Stripes) 是否連續無扭曲",
        "利用 FFD 4x4x4 (自由形變晶格) 全域微調建築量體之俯仰與向背姿態"
      ],
      "industryStandardOrCode": "ISO 10303 自由曲面幾何描述標準。",
      "pitfallsAndVerification": "嚴禁在細分曲面網格中使用五星點 (超過 5 條邊交會的頂點) 放置於高曲率反光面，否則會產生難以消除的凹陷光斑 (Pinching)。",
      "diagnosticDecisionTree": [
        "問題：加了 Turbosmooth 後，平整的外牆表面產生了不均勻的凹凸波浪暗影？",
        "原因：表面包含未三點共面的 N-gon (多邊形面) 或凹多邊形",
        "解法：使用 Cut 工具將所有五邊以上的多邊形手工切分成乾淨的四邊面 (Quads)"
      ],
      "masteryChecklist": [
        "能運用純 Quad 網格佈線構建無破面的自由有機建築開口",
        "精通支撐線間距與細分後圓角半徑之精確數學比例對應",
        "熟練操作 FFD 與 Bend 修改器進行建築量體動態扭轉與律動推敲"
      ]
    },
    {
      "round": 4,
      "badge": "R4 建築構造深化",
      "title": "Unwrap UVW 專業展開與 PBR 多層貼圖紋理管線",
      "focus": "精通 Pelt Mapping、LSCM 展平與縫合，繪製 8K 清水模、劈裂石材與金屬氟碳烤漆材質。",
      "contentExpansion": "延伸內容擴充 170%：建立標準物理基礎渲染 (PBR) 工作流，解析微表面粗糙度 (Roughness)、凹凸法線 (Normal DirectX/OpenGL 軸向) 與置換 (Displacement) 深度微積分。",
      "coreTheory": "UVW 坐標是將 3D 模型頂點映射至 2D 紋理空間的雙射函數 (Bijective Map)。未展開 UV 的幾何體會出現嚴重的貼圖拉伸與拼貼接縫。透過 Unwrap UVW 中的 Peel (剝皮) 與 Relax (鬆弛) 演算法，網格邊緣長度變形能被收斂至 1% 以內，使清水混凝土模板接縫與螺栓穿孔精確對齊結構軸線。",
      "advancedParameters": [
        {
          "name": "Texel Density (紋素密度)",
          "value": "10.24 px/cm (保證 4K 算圖近景不模糊)",
          "purpose": "全場景模型材質解析度統一標準化"
        },
        {
          "name": "Normal Map Flip Green (Y)",
          "value": "根據渲染器切換 DirectX (-Y) 或 OpenGL (+Y)",
          "purpose": "避免磚牆凹凸反向變成突起"
        }
      ],
      "practicalWalkthrough": [
        "選取異型外牆，添加 Unwrap UVW 修改器，點擊「Open UV Editor」",
        "使用 Point-to-Point Seam 標記接縫於建築背面或陰角收頭處",
        "點擊「Pelt」展開並執行「Relax (by Face Angles)」消除表面拉伸扭曲",
        "使用 Texel Density 工具將全案所有構件之紋素密度統一設定為 2048 px / 2m"
      ],
      "industryStandardOrCode": "CNS 11567 建築材料外觀質地表示準則與 ASTM C119 天然建築石材標準。",
      "pitfallsAndVerification": "檢查 UV 棋盤格 (Checker Map)：若方格在建築表面維持正方形且大小一致，代表 UV 展開極度完美無任何幾何拉伸。",
      "diagnosticDecisionTree": [
        "問題：渲染時磁磚凹凸貼圖看起來是「凹陷變成凸出、光影完全相反」？",
        "原因：Normal 貼圖的綠色通道 (Green Channel / Y 軸) 倒置 (DirectX vs OpenGL 格式衝突)",
        "解法：在材質節點中將 Normal Map 的「Flip Green (Y)」勾選或取消勾選"
      ],
      "masteryChecklist": [
        "能獨立完成大型異型體量之無縫 UV 拆解與紋素密度一致化校正",
        "精通 PBR 材質全通道 (Diffuse, Roughness, Normal, Metallic, Displacement) 配置",
        "能運用 Corona Triplanar 節點免拆 UV 解決巨大山體岩石無縫貼圖難題"
      ]
    },
    {
      "round": 5,
      "badge": "R5 渲染與光學物理",
      "title": "Corona / V-Ray 物理相機光學與室內外大氣光影",
      "focus": "掌握光線追蹤 (Path Tracing)、IES 配光曲線、體積散亂 (Volume Scattering) 與色彩科學。",
      "contentExpansion": "延伸內容擴充 190%：深入 ACEScg 色彩編碼空間，精調真實太陽天頂角照度、室內混光色溫平衡，產出具備極致膠片質感的相機直出效果。",
      "coreTheory": "真實感源於光子物理模擬。Corona Sun & Sky 基於真實物理大氣模型 (Hosek-Wilkie / PRG Clear Sky)。物理相機模擬單眼相機光學系統：曝光值 EV = log2(N² / t · 100 / S)，其中光圈 N、快門速度 t 與感光度 S 共同決定曝光量。結合兩點透視垂直移軸控制，保證建築垂直立柱絕對鉛直。",
      "mathematicalFormula": "相機曝光值計算公式：EV = log2(f_stop² / shutter_speed) - log2(ISO / 100)",
      "advancedParameters": [
        {
          "name": "Corona Pass Limit",
          "value": "150 - 250 passes (或 Noise Threshold: 3%)",
          "purpose": "平衡算圖時間與無噪點畫面純淨度"
        },
        {
          "name": "Color Space",
          "value": "ACEScg (寬色域色彩管理)",
          "purpose": "消除強烈陽光直射處的高光死白泛黃"
        }
      ],
      "practicalWalkthrough": [
        "建立 Corona Physical Camera，焦距設為 24mm (大廣角) 或 50mm (人文視角)",
        "勾選 Perspective Control → Automatic Vertical Tilt Correction",
        "架設 Corona Sun，設定大小 (Size) 為 2.0 (產生柔和日照邊緣陰影)",
        "在室內天花筒燈載入真實廠商提供之 IES 測光檔案，設定流明與 3000K 暖白色溫"
      ],
      "industryStandardOrCode": "IESNA LM-63-02 光學配光資料標準與 CIE 國際照明學會晝光規範。",
      "pitfallsAndVerification": "嚴禁在室內空間中依賴調高相機曝光來強行照亮房間！應先校正外部太陽真實流明，再補設室內輔助跳燈或反射反光板。",
      "diagnosticDecisionTree": [
        "問題：玻璃窗戶在室內看出去全黑，或玻璃外觀反射不出天空？",
        "原因：玻璃材質厚度未封閉或法線反向，亦或是未開啟 Thin (no refraction) 模式",
        "解法：為玻璃模型加上 8mm 的 Shell 修改器給予實體厚度，或在材質勾選 Thin 模式"
      ],
      "masteryChecklist": [
        "能運用 LightMix 在單張渲染圖中無損輸出「白晝、傍晚、深宵」三套燈光計畫",
        "精通兩點透視相機光學移軸與構圖黃金比例法則",
        "能調配真實體積霧 (Corona Volume Mtl) 營造陽光穿透森林丁達爾現象 (God Rays)"
      ]
    },
    {
      "round": 6,
      "badge": "R6 跨軟體協同與 BIM",
      "title": "BIM/CAD 幾何資產管線與 Datasmith 即時引擎串流",
      "focus": "架構從 Revit / Rhino 到 3ds Max 的高精度資產導入管線，對接 Unreal Engine 5。",
      "contentExpansion": "延伸內容擴充 210%：深入 FBX、DWG 與 Epic Datasmith 幾何中繼資料轉換協定，保留 BIM 構件命名、材質指派與實體層次架構。",
      "coreTheory": "跨平台轉換的最大瓶頸是幾何拓撲破面與材質遺失。Revit 原生導出的 FBX 常包含碎片化的三角面與未熔接頂點。透過編寫批次清理指令，自動依據材質合併圖元 (Attach by Material)，並一鍵將 Revit 專有材質轉譯為高階 Corona Physical Materials，模型效能提升 500%。",
      "advancedParameters": [
        {
          "name": "Datasmith Import Filter",
          "value": "Geometry + Materials + Lights",
          "purpose": "無損同步建築模型結構"
        },
        {
          "name": "Mesh Weld Threshold",
          "value": "0.1 mm",
          "purpose": "自動縫合 BIM 構件微小縫隙消除漏光"
        }
      ],
      "practicalWalkthrough": [
        "從 Revit 匯出 FBX 或直接使用 3ds Max 的「Link Revit File」建立動態關聯",
        "使用 3ds Max 內建 Scene Converter (場景轉換器) 一鍵將通用材質批次轉為 Corona 材質",
        "利用 Forest Pack 讀取 CAD 景觀圖層點位，全自動在指定座標種植百萬灌木",
        "完成高階精修後，透過 Datasmith 匯出至 Unreal Engine 5 進行即時互動 VR 漫遊"
      ],
      "industryStandardOrCode": "Epic Games Datasmith 跨軟體即時管線規範與 OpenUSD 規格。",
      "pitfallsAndVerification": "重新連結 (Relink) Revit 模型前，切勿在 3ds Max 中手動修改被連結圖元的幾何頂點，否則模型同步時會被覆蓋還原。",
      "diagnosticDecisionTree": [
        "問題：從 Revit 匯入 3ds Max 的曲面牆體呈現鋸齒多邊形破面？",
        "原因：Revit 匯出 DWG/FBX 時的曲線細分公差設得過低",
        "解法：在 Revit 匯出選項中將「DWG 幾何外觀」設為 ACIS 實體，或在 3ds Max 匯入面板調高 Curve Steps 至 16"
      ],
      "masteryChecklist": [
        "能搭建「Revit 施工模型 → 3ds Max 效果圖精修」無縫雙向連動工作流",
        "熟練使用 Scene Converter 自訂轉譯規則批次更換全案材質",
        "能將 3ds Max 複雜場景輕量化烘焙導出至 UE5 / Twinmotion 虛擬實境"
      ]
    },
    {
      "round": 7,
      "badge": "R7 腳本自動化與前瞻",
      "title": "MAXScript / Python 自動化渲染農場與 AI 神經後製合成",
      "focus": "編寫 MAXScript 批次算圖與場景修復腳本，並結合 Stable Diffusion 深度圖 (ControlNet) AI 增強。",
      "contentExpansion": "延伸內容擴充 250%：架構 Deadline 雲端算圖農場派發架構，掌握 ControlNet Depth / Normal 誘導式 AI 生成，實現 5 分鐘快速概念風格迭代。",
      "coreTheory": "現代頂級 ArchViz 已進入「3D 精準幾何 + AI 紋理神經增強」的融合時代。3ds Max 產出的高精度深度圖 (Z-Depth) 與表面法線圖 (Normal Pass)，能作為 ControlNet 的絕對空間幾何引導約束。配合 MAXScript 背景執行命令，可全自動在深夜批次渲染多個相機機位，並透過 AI 擴展細微植被與真實雨漬。",
      "mathematicalFormula": "相機深度圖歸一化矩陣：Z_norm = (Z_depth - Z_near) / (Z_far - Z_near)",
      "advancedParameters": [
        {
          "name": "Batch Render Output",
          "value": "32-bit OpenEXR (Multichannel: RGB, Alpha, Depth, Normal, Cryptomatte)",
          "purpose": "提供合成後期極致無損動態範圍"
        },
        {
          "name": "ControlNet Depth Weight",
          "value": "1.0 (絕對幾何約束鎖定)",
          "purpose": "確保 AI 生成風格時建築梁柱形體絲毫不形變"
        }
      ],
      "practicalWalkthrough": [
        "編寫 MAXScript 自動尋找場景中所有 Physical Camera 並加入 Batch Render 佇列",
        "在 Render Elements 勾選 Z-Depth, CoronaNormal, Cryptomatte",
        "背景執行無介面算圖輸出多通道 EXR 影像序列",
        "將 EXR 深度通道匯入 ControlNet，透過 Prompt「architectural photography, overcast, wet ground, photorealistic」進行 AI 紋理深化"
      ],
      "industryStandardOrCode": "OpenEXR 國際高動態範圍影像格式標準與 ACES 影像色彩工作流。",
      "pitfallsAndVerification": "使用 AI 輔助時嚴格確認建築承重柱與開口尺寸未被 AI 隨意塗抹變形；幾何邊緣必須與 3ds Max 輸出之原始線框 100% 疊合。",
      "diagnosticDecisionTree": [
        "問題：MAXScript 批次渲染中途因彈出「遺失外掛」或「貼圖遺失」對話框而掛起中斷？",
        "原因：未關閉背景互動式警告視窗",
        "解法：在腳本開頭加入 `SetQuietMode true`，強制系統在安靜模式下略過非致命警告繼續渲染"
      ],
      "masteryChecklist": [
        "能獨立編寫 MAXScript 腳本完成全場景構件批次命名、貼圖路徑重新指定",
        "精通 32-bit Multichannel EXR 在 Photoshop / After Effects 中的多層合成技巧",
        "能將 3ds Max 渲染通道與 ControlNet AI 完美結合提速提案流程"
      ]
    }
  ],
  "industryPipeline": {
    "stage": "概念競圖主視覺、房地產行銷大片、夜間照明工程展示與頂級動畫製作",
    "softwareRole": "全球建築效果圖與視覺氛圍表現無可爭議之天花板旗艦",
    "fileFormats": {
      "import": [
        ".max",
        ".3ds",
        ".dwg",
        ".dxf",
        ".fbx",
        ".obj",
        ".sat",
        ".skp",
        ".abc",
        ".step"
      ],
      "export": [
        ".max",
        ".fbx",
        ".obj",
        ".abc (Alembic)",
        ".datasmith",
        ".exr",
        ".png",
        ".tif"
      ]
    },
    "collaborationWith": [
      "AutoCAD (匯入線條放樣)",
      "Revit (經由 FBX/Datasmith 匯入建築)",
      "Photoshop (EXR 多通道合成調光)",
      "Unreal Engine 5 (即時光追遊戲級漫遊)"
    ]
  },
  "learningResources": [
    {
      "title": "Chaos Group V-Ray Academy - 建築擬真渲染與物理攝影機大師課",
      "provider": "Chaos Official Academy",
      "category": "官方原廠教學",
      "url": "https://www.chaos.com/learn",
      "description": "Chaos 原廠認證大師課，深入 V-Ray 物理日光天穹 (Sun & Sky)、燈光快取 (Light Cache) 與次表面散射。",
      "badge": "原廠官方大師課"
    },
    {
      "title": "Chaos Corona Academy - 建築室內外即時光影與材質物理表現手冊",
      "provider": "Chaos Corona Team",
      "category": "官方原廠教學",
      "url": "https://corona-renderer.com/resources",
      "description": "Corona 原廠手冊，解析超直覺物理算圖設定、交互式即時渲染 (Interactive Rendering) 與 LightMix 混光。",
      "badge": "原廠技術手冊"
    },
    {
      "title": "Autodesk 3ds Max Learning Channel 建築大場景管理與資產發布",
      "provider": "Autodesk Official Documentation",
      "category": "官方原廠教學",
      "url": "https://help.autodesk.com/view/3DSMAX/2025/ENU/",
      "description": "3ds Max 建築設計專區，涵蓋百萬多邊形場景組織、外參物件 (XRef Objects) 與資產追蹤器 (Asset Tracker)。",
      "badge": "原廠官方手冊"
    },
    {
      "title": "Ronen Bekerman Architectural Visualization Blog 國際頂尖效果圖技法分享",
      "provider": "Ronen Bekerman Community",
      "category": "學術研討與開放教材",
      "url": "https://www.ronenbekerman.com",
      "description": "全球最權威之建築視覺化專業部落格，拆解國際頂級建案渲染案場拆解、材質紋理與後製合成。",
      "badge": "國際頂級社群"
    },
    {
      "title": "台灣建築透視圖同業交流社群 - 商業競圖與建案促銷效果圖實務規範",
      "provider": "台灣建築視覺化從業協會 (籌)",
      "category": "實務工作流與開放標準",
      "url": "https://www.facebook.com/groups/archviztaiwan/",
      "description": "台灣建案行銷廣告與公共工程競圖必備之透視圖視角挑選、日夜景燈光情境與色彩美學標準。",
      "badge": "商業實務準則"
    }
  ],
  "certificationStandards": [
    {
      "name": "Autodesk Certified Professional (ACP) - 3ds Max",
      "level": "國際專家級認證",
      "authority": "Autodesk Inc.",
      "description": "考核多邊形建模精確度、物理攝影機暴光設定、複合材質映射、動畫關鍵影格與場景狀態管理。",
      "keyCompetencies": [
        "Editable Poly 高階多邊形建模技巧",
        "UVW Mapping 與複合材質 (Multi/Sub-Object)",
        "物理相機視角校正與曝光值 (EV) 控制",
        "狀態集 (State Sets) 與分層渲染通道 (Render Elements)"
      ],
      "officialExamUrl": "https://www.autodesk.com/certification"
    }
  ]
};
