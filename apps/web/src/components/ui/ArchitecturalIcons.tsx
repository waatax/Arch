import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

/**
 * ══════════════════════════════════════════════════════════════
 * ARCHITECTURAL ICONS (信達雅建築與土木工程專業向量圖示庫)
 * ══════════════════════════════════════════════════════════════
 * 信 (Faithful): 嚴格遵循 CNS 11567 建築製圖與結構力學符號標準
 * 達 (Expressive): 線條純粹、特徵鮮明、微縮至 16px/24px 依舊一目了然
 * 雅 (Elegant): 包浩斯與現代主義建築線稿美學，比例優雅、細節講究
 */

// 1. 桁架與簡支梁結構 (Truss & Beam Moment): 鉸支座 △、滾支座 ◯、上弦桿、下弦桿與受拉壓腹桿
export function IconTrussBeam({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 桁架上弦與下弦 */}
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="2" y1="15" x2="22" y2="15" />
      {/* 垂直與斜向腹桿 (網狀力流) */}
      <line x1="2" y1="9" x2="2" y2="15" />
      <line x1="22" y1="9" x2="22" y2="15" />
      <line x1="8" y1="9" x2="8" y2="15" />
      <line x1="16" y1="9" x2="16" y2="15" />
      <line x1="2" y1="15" x2="8" y2="9" />
      <line x1="8" y1="9" x2="16" y2="15" />
      <line x1="16" y1="15" x2="22" y2="9" />
      {/* 左側鉸支座 (Pin Support) */}
      <polygon points="2,15 0.5,18.5 3.5,18.5" fill="none" />
      <line x1="0" y1="19.5" x2="4" y2="19.5" />
      {/* 右側滾支座 (Roller Support) */}
      <circle cx="22" cy="17" r="1.5" />
      <line x1="20" y1="19.5" x2="24" y2="19.5" />
    </svg>
  );
}

// 2. 莫爾應力圓與主應力軸 (Mohr's Stress Circle): 正應力 σ - 剪應力 τ 坐標與圓弧破壞面
export function IconMohrCircle({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 坐標軸: 水平 σ 軸、垂直 τ 軸 */}
      <line x1="2" y1="12" x2="22" y2="12" />
      <polyline points="20,10 22,12 20,14" />
      <line x1="12" y1="22" x2="12" y2="2" />
      <polyline points="10,4 12,2 14,4" />
      {/* 莫爾應力圓 */}
      <circle cx="13" cy="12" r="7" strokeDasharray="100" />
      {/* 主應力點與轉角半徑 (σ1, τmax) */}
      <line x1="13" y1="12" x2="18" y2="7" strokeDasharray="2 2" />
      <circle cx="18" cy="7" r="1.5" fill="currentColor" />
      <circle cx="6" cy="12" r="1.2" fill="currentColor" />
      <circle cx="20" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

// 3. 建築製圖工具組 (Drafting T-Square & Set Squares): 丁字尺與 30°-60° 三角板
export function IconDraftingTools({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 丁字尺橫尺身與刻度 */}
      <rect x="2" y="18" width="20" height="4" rx="0.5" />
      <line x1="6" y1="18" x2="6" y2="20" />
      <line x1="10" y1="18" x2="10" y2="20" />
      <line x1="14" y1="18" x2="14" y2="20" />
      <line x1="18" y1="18" x2="18" y2="20" />
      {/* 丁字尺頭部 (左側凸出基準) */}
      <rect x="0.5" y="16" width="3" height="7.5" rx="0.5" />
      {/* 30°-60° 三角板 (外框) */}
      <polygon points="6,18 20,18 20,3" />
      {/* 三角板內部鏤空透視區 */}
      <polygon points="10,16 17,16 17,8" strokeDasharray="30" />
      {/* 圓規定位微調圓孔 */}
      <circle cx="14" cy="13" r="1" />
    </svg>
  );
}

// 4. 光學水準儀與水準尺 (Surveying Optical Level & Staff): 望遠鏡筒、調平螺旋與三腳架
export function IconSurveyingLevel({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 望遠鏡筒與物鏡罩 */}
      <path d="M4 6h12l2 2H20a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2l-2 2H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
      <line x1="7" y1="6" x2="7" y2="13" />
      {/* 水準氣泡管與照準軸 */}
      <rect x="7" y="3.5" width="6" height="2.5" rx="1" />
      <circle cx="10" cy="4.75" r="0.6" fill="currentColor" />
      {/* 儀器基座與腳螺旋 */}
      <rect x="6" y="13" width="8" height="2" rx="0.5" />
      <circle cx="7.5" cy="16" r="1" />
      <circle cx="12.5" cy="16" r="1" />
      {/* 三腳架 (Tripod) */}
      <line x1="8" y1="17" x2="4" y2="22.5" />
      <line x1="10" y1="17" x2="10" y2="22.5" />
      <line x1="12" y1="17" x2="16" y2="22.5" />
    </svg>
  );
}

// 5. 全測站經緯儀 (Total Station Theodolite): 電子對中、激光測距軸與高精度導線
export function IconTotalStation({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 經緯儀支架 (U-Frame) */}
      <path d="M7 14V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8" />
      {/* 中央望遠鏡迴轉筒 */}
      <rect x="5.5" y="8" width="13" height="4" rx="1" />
      <circle cx="12" cy="10" r="1.5" />
      {/* 螢幕面板與按鍵區 */}
      <rect x="8" y="14" width="8" height="3" rx="0.5" />
      {/* 儀器底盤與三腳架 */}
      <line x1="6" y1="17.5" x2="18" y2="17.5" />
      <line x1="8" y1="18" x2="3" y2="23" />
      <line x1="12" y1="18" x2="12" y2="23" />
      <line x1="16" y1="18" x2="21" y2="23" />
    </svg>
  );
}

// 6. 混凝土坍度錐試驗 (Concrete Slump Test): 截頭圓錐坍度筒 (30cm)、搗棒與坍落弧線
export function IconSlumpCone({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 截頭圓錐坍度筒 (上口 10cm, 下底 20cm, 高 30cm) */}
      <ellipse cx="12" cy="5" rx="3.5" ry="1.2" />
      <ellipse cx="12" cy="19" rx="7.5" ry="2" />
      <line x1="8.5" y1="5" x2="4.5" y2="19" />
      <line x1="15.5" y1="5" x2="19.5" y2="19" />
      {/* 提手握把 (兩側 Handles) */}
      <path d="M7.5" y="9.5" />
      <path d="M5.5 10c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5" />
      <path d="M18.5 10c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5" />
      {/* 標準 16mm 圓頭搗棒 */}
      <line x1="19" y1="3" x2="10" y2="17" strokeWidth={strokeWidth * 1.1} />
      <circle cx="9.5" cy="17.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

// 7. 鋼筋混凝土斷面與耐震箍筋 (RC Column & Seismic Ties): 四角主筋與 135° 彎鉤封閉繫筋
export function IconRebarSection({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 混凝土柱外輪廓 (保護層 4cm) */}
      <rect x="2.5" y="2.5" width="19" height="19" rx="1.5" />
      {/* 耐震封閉箍筋 (Ties with 135° Hooks) */}
      <rect x="5.5" y="5.5" width="13" height="13" rx="1" />
      {/* 耐震 135° 繫鉤交疊端 */}
      <polyline points="7,5.5 4,8.5" />
      <polyline points="5.5,7 8.5,4" />
      {/* 四角主筋 (Main Longitudinal Bars) */}
      <circle cx="8" cy="8" r="1.6" fill="currentColor" />
      <circle cx="16" cy="8" r="1.6" fill="currentColor" />
      <circle cx="8" cy="16" r="1.6" fill="currentColor" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" />
      {/* 輔助中央主筋 */}
      <circle cx="12" cy="8" r="1.1" fill="currentColor" />
      <circle cx="12" cy="16" r="1.1" fill="currentColor" />
    </svg>
  );
}

// 8. 第三角正投影展開箱 (Orthographic Projection 3D Box): 展開玻璃箱與正視/俯視/側視圖
export function IconOrthographicBox({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 展開之投影三視圖十字架框 */}
      {/* 俯視圖 (Top Plan) */}
      <rect x="8" y="2" width="7" height="6" rx="0.5" />
      {/* 前視圖 (Front Elevation) */}
      <rect x="8" y="9" width="7" height="6" rx="0.5" />
      {/* 右側視圖 (Right Profile) */}
      <rect x="16" y="9" width="6" height="6" rx="0.5" />
      {/* 45 度投影轉折輔助斜線 */}
      <line x1="15" y1="8" x2="16" y2="9" strokeDasharray="1.5 1.5" />
      <line x1="8" y1="8" x2="8" y2="9" strokeDasharray="1.5 1.5" />
      <line x1="15" y1="9" x2="16" y2="9" strokeDasharray="1.5 1.5" />
      {/* 底座與摺痕基準標記 */}
      <line x1="3" y1="19" x2="21" y2="19" strokeDasharray="3 2" />
      <polyline points="10,12 11.5,13.5 13.5,10.5" />
    </svg>
  );
}

// 9. 古典神殿柱式與門廊 (Classical Architectural Order): 柱頭托梁、柱身與山牆，象徵建築史與建築之路
export function IconClassicalOrder({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 經典山牆 (Pediment) */}
      <polygon points="12,2 2,7.5 22,7.5" />
      {/* 楣梁與額枋 (Entablature) */}
      <rect x="3" y="7.5" width="18" height="2.5" />
      {/* 四根多立克排柱 (Colonnade Columns) */}
      <line x1="5.5" y1="10" x2="5.5" y2="20" />
      <line x1="9.5" y1="10" x2="9.5" y2="20" />
      <line x1="14.5" y1="10" x2="14.5" y2="20" />
      <line x1="18.5" y1="10" x2="18.5" y2="20" />
      {/* 三層台基 (Stereobate & Stylobate) */}
      <line x1="3" y1="20" x2="21" y2="20" />
      <line x1="1.5" y1="22" x2="22.5" y2="22" />
    </svg>
  );
}

// 10. BIM 3D 智慧構件軸測模型 (BIM Parametric Axonometric Model): 3D 體量與參數層次
export function IconBIMModel({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 等角軸測立方體 (Axonometric Cube) */}
      <polygon points="12,2 21,7 12,12 3,7" />
      <polygon points="3,7 12,12 12,21.5 3,16.5" />
      <polygon points="12,12 21,7 21,16.5 12,21.5" />
      {/* BIM 內部參數剖分網格線 (Floor Slabs & Grid) */}
      <line x1="3" y1="11.8" x2="12" y2="16.8" strokeDasharray="2 1.5" />
      <line x1="12" y1="16.8" x2="21" y2="11.8" strokeDasharray="2 1.5" />
      <line x1="12" y1="7" x2="12" y2="12" />
    </svg>
  );
}

// 11. 營造現場安全帽與水準尺 (Construction Safety & Quality Inspection)
export function IconFieldSafety({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 工地主任安全帽帽體 */}
      <path d="M4 14c0-5 3.5-9 8-9s8 4 8 9z" />
      {/* 安全帽帽簷突出部 (Brim) */}
      <path d="M2 15h20c0 1.5-1.5 2-3 2H5c-1.5 0-3-.5-3-2z" />
      {/* 帽頂加強筋與透氣孔條 */}
      <path d="M12 5v5" />
      <path d="M8.5 7.5v3" />
      <path d="M15.5 7.5v3" />
      {/* 下方懸掛垂直鉛錘 (Plumb Bob) */}
      <line x1="12" y1="17" x2="12" y2="19.5" />
      <polygon points="12,23 10.5,19.5 13.5,19.5" />
    </svg>
  );
}

// 12. 敷地指北針與方位角 (Compass Rose & Site Orientation): 建築總配置專用正北標記
export function IconCompassRose({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 外環度數圈 */}
      <circle cx="12" cy="12" r="9" />
      {/* 4 方刻度短線 */}
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      {/* 指北主箭頭 (陰影實心與空心切分) */}
      <polygon points="12,4 14.5,12 12,10.5 9.5,12" />
      <polygon points="12,20 14.5,12 12,13.5 9.5,12" fill="none" />
      <text x="12" y="8" fontSize="4" fontWeight="bold" textAnchor="middle" fill="currentColor">
        N
      </text>
    </svg>
  );
}

// 13. 台北 101 調質阻尼器 (Tuned Mass Damper TMD): 懸吊抗風球與液壓抗震系統
export function IconDamperTMD({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 上方結構吊頂鋼梁 */}
      <line x1="3" y1="3" x2="21" y2="3" />
      {/* 4 條高張力懸吊鋼纜 */}
      <line x1="6" y1="3" x2="10" y2="10" />
      <line x1="18" y1="3" x2="14" y2="10" />
      {/* TMD 黃金阻尼球體 (660 公噸) */}
      <circle cx="12" cy="13" r="5" />
      <circle cx="12" cy="13" r="3" strokeDasharray="3 2" />
      {/* 底部斜向液壓緩衝阻尼桿 (Hydraulic Dampers) */}
      <line x1="8" y1="16" x2="4" y2="21" />
      <line x1="16" y1="16" x2="20" y2="21" />
      <line x1="2" y1="21" x2="22" y2="21" />
    </svg>
  );
}

// 14. 專技高考建築師/技師國考印信 (Architectural Licensure Seal): 官方鋼印與建築圓規
export function IconExamLicense({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 國考認證八角/菱形鋼印基座 */}
      <polygon points="12,2 19,5 22,12 19,19 12,22 5,19 2,12 5,5" />
      {/* 內同心圓 */}
      <circle cx="12" cy="12" r="6" />
      {/* 中央建築師分規 (Architect's Caliper) */}
      <path d="M12 8v3m0 0l-2.5 4m2.5-4l2.5 4" />
      <circle cx="12" cy="8" r="0.8" fill="currentColor" />
      <line x1="10" y1="13.5" x2="14" y2="13.5" />
    </svg>
  );
}

// 15. 幾何名築大師工坊 (Parametric Studio Forge): 雙曲拋物線曲面與網格結構
export function IconStudioForge({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 路思義教堂薄殼雙曲幾何 (Hyperbolic Paraboloid) */}
      <path d="M12 2C8 9 4 17 3 21h18c-1-4-5-12-9-19z" />
      {/* 中央屋脊菱形採光窗 */}
      <line x1="12" y1="2" x2="12" y2="21" />
      {/* 預力水平與傾斜結構肋條 */}
      <path d="M7 16c2-1 4-1 5-1s3 0 5 1" />
      <path d="M9 11c1.5-.7 2-.7 3-.7s1.5 0 3 .7" />
      <line x1="3" y1="21.5" x2="21" y2="21.5" />
    </svg>
  );
}

// 16. 建築大師技能星空 (Skill Constellation Graph): 技能樹節點連線與星芒
export function IconConstellationMap({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 主星節點連線網絡 */}
      <line x1="5" y1="17" x2="10" y2="9" strokeDasharray="2 1.5" />
      <line x1="10" y1="9" x2="19" y2="6" strokeDasharray="2 1.5" />
      <line x1="10" y1="9" x2="14" y2="18" strokeDasharray="2 1.5" />
      <line x1="14" y1="18" x2="19" y2="15" strokeDasharray="2 1.5" />
      {/* 5 顆恆星節點 */}
      <circle cx="5" cy="17" r="2.2" fill="currentColor" />
      <circle cx="10" cy="9" r="2.8" />
      <circle cx="10" cy="9" r="1.2" fill="currentColor" />
      <circle cx="19" cy="6" r="2" fill="currentColor" />
      <circle cx="14" cy="18" r="2.5" />
      <circle cx="19" cy="15" r="1.5" fill="currentColor" />
      {/* 星芒閃爍光暈 */}
      <path d="M10 3v2M10 13v2M4 9h2M14 9h2" strokeWidth={1} />
    </svg>
  );
}

// 17. 考點速查公式卡 (Formula & Equations Cheatsheet): 算式根號、積分與矩陣
export function IconFastFormula({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 卡片本體外框 */}
      <rect x="3" y="3" width="18" height="18" rx="2" />
      {/* 根號 √ 符號 */}
      <polyline points="6,12 7.5,15 10,8 14,8" />
      {/* 分數線與代數 x, y */}
      <line x1="14" y1="12" x2="18" y2="12" />
      <text x="16" y="10.5" fontSize="3" fontWeight="bold" textAnchor="middle" fill="currentColor">
        M
      </text>
      <text x="16" y="16" fontSize="3" fontWeight="bold" textAnchor="middle" fill="currentColor">
        I
      </text>
      {/* 閃電⚡高頻速查符號 */}
      <polygon points="7,19 9,16 6.5,16 8.5,13" fill="currentColor" />
    </svg>
  );
}

// 18. 綠建築與生態永續 EEWH (Eco Green Architecture): 通風百葉、遮陽隔熱與綠意
export function IconGreenBuilding({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 建築立面外框 */}
      <rect x="3" y="6" width="12" height="15" rx="1" />
      {/* 節能遮陽百葉 (Louvers) */}
      <line x1="6" y1="10" x2="12" y2="10" />
      <line x1="6" y1="13" x2="12" y2="13" />
      <line x1="6" y1="16" x2="12" y2="16" />
      {/* 綠建築生態葉片 (Eco Leaf wrapping facade) */}
      <path d="M15 4c3 0 6 3 6 8-3 0-6-3-6-8z" />
      <path d="M15 12c4 1 6 4 6 8-4-1-6-4-6-8z" />
      <line x1="15" y1="12" x2="19" y2="8" />
    </svg>
  );
}

// 19. 建築透視投影與視平線 (Perspective Projection & Vanishing Point): 地平線與消失點
export function IconPerspective({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 視平線 (Horizon Line HL) */}
      <line x1="2" y1="10" x2="22" y2="10" strokeDasharray="3 2" />
      {/* 消失點 (Vanishing Point VP) */}
      <circle cx="12" cy="10" r="1.5" fill="currentColor" />
      {/* 兩點透視向消點輻射之建築體量 */}
      <line x1="12" y1="10" x2="4" y2="21" />
      <line x1="12" y1="10" x2="20" y2="21" />
      <line x1="12" y1="10" x2="12" y2="18" />
      {/* 立面垂直線 */}
      <line x1="8" y1="14" x2="8" y2="19" />
      <line x1="16" y1="14" x2="16" y2="19" />
      <line x1="8" y1="19" x2="16" y2="19" />
    </svg>
  );
}

// 20. 主題探索與興趣羅盤 (Topic Discovery Radar Compass): 智能導航與主題探索
export function IconTopicDiscovery({ className, size = 24, strokeWidth = 1.75, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* 探索雷達同心環 */}
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" strokeDasharray="2 2" />
      {/* 十字照準軸 */}
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="12" x2="21" y2="12" />
      {/* 45 度掃描引導扇形標記 */}
      <polygon points="12,12 18,6 15,4" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Helper 函式：依據 subject slug 取得最符合「信達雅」精神之專業建築圖示
export function getSubjectArchitecturalIcon(slug: string): React.ComponentType<IconProps> {
  switch (slug) {
    case 'mechanics':
      return IconTrussBeam;
    case 'materials':
      return IconSlumpCone;
    case 'surveying':
      return IconSurveyingLevel;
    case 'drafting':
      return IconDraftingTools;
    case 'extensions':
      return IconClassicalOrder;
    case 'math-c':
      return IconMohrCircle;
    case 'chinese':
    case 'history':
    case 'civics':
    case 'geography':
      return IconClassicalOrder;
    case 'english':
      return IconTopicDiscovery;
    case 'physics':
    case 'chemistry':
      return IconDamperTMD;
    default:
      return IconClassicalOrder;
  }
}

// Helper 函式：依據 pathway subject 或 pillar id 取得對應之專業建築圖示
export function getPathwayArchitecturalIcon(id: string): React.ComponentType<IconProps> {
  switch (id) {
    case 'studio':
      return IconStudioForge;
    case 'history':
      return IconClassicalOrder;
    case 'construction':
      return IconRebarSection;
    case 'environment':
      return IconGreenBuilding;
    case 'structure':
      return IconDamperTMD;
    case 'site':
      return IconCompassRose;
    case 'codes':
      return IconExamLicense;
    case 'digital':
      return IconBIMModel;
    default:
      return IconStudioForge;
  }
}

// 模組層級元件封裝：完全合規 React 19 與 React Compiler 靜態組件約束
export function ArchitecturalSubjectIcon({ slug, ...props }: IconProps & { slug: string }) {
  switch (slug) {
    case 'mechanics':
      return <IconTrussBeam {...props} />;
    case 'materials':
      return <IconSlumpCone {...props} />;
    case 'surveying':
      return <IconSurveyingLevel {...props} />;
    case 'drafting':
      return <IconDraftingTools {...props} />;
    case 'cad-software':
      return <IconBIMModel {...props} />;
    case 'extensions':
      return <IconClassicalOrder {...props} />;
    case 'math-c':
      return <IconMohrCircle {...props} />;
    case 'physics':
    case 'chemistry':
      return <IconDamperTMD {...props} />;
    case 'chinese':
    case 'history':
    case 'civics':
    case 'geography':
      return <IconClassicalOrder {...props} />;
    case 'english':
      return <IconTopicDiscovery {...props} />;
    default:
      return <IconClassicalOrder {...props} />;
  }
}

export function ArchitecturalPathwayIcon({ id, ...props }: IconProps & { id: string }) {
  switch (id) {
    case 'studio':
      return <IconStudioForge {...props} />;
    case 'history':
      return <IconClassicalOrder {...props} />;
    case 'construction':
      return <IconRebarSection {...props} />;
    case 'environment':
      return <IconGreenBuilding {...props} />;
    case 'structure':
      return <IconDamperTMD {...props} />;
    case 'site':
      return <IconCompassRose {...props} />;
    case 'codes':
      return <IconExamLicense {...props} />;
    case 'digital':
      return <IconBIMModel {...props} />;
    default:
      return <IconStudioForge {...props} />;
  }
}

