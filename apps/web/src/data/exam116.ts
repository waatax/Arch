/**
 * 116 學年度四技二專入學考招制度調整 — 06 土木與建築群重點摘錄
 *
 * 資料來源全部為官方一級來源，逐項登錄 URL 與查核日（依 V6-Core §11 證據規則）。
 * 任何未經官方文件確認的推論一律標記 assumption = true，不得以事實呈現。
 */

export interface Source {
  id: string;
  label: string;
  url: string;
  publisher: string;
  note?: string;
  checkedAt: string;
  /** SHA-256 of the downloaded document bytes; dynamic HTML sources intentionally omit this. */
  documentSha256?: string;
}

export const SOURCES: Source[] = [
  {
    id: 'S1',
    label: '116 學年度起四技二專入學考招制度調整說明',
    url: 'https://www.techadmi.edu.tw/downloadfile.php?gid=1453',
    publisher: '技專校院招生策略委員會',
    note: '教育部 115 年 1 月 8 日臺教技（一）字第 1140136358 號函備查',
    checkedAt: '2026-08-10',
    documentSha256: '263CDF053F616A12BAADEF34771C907DE5CE61A1D97A2438330E08E876E7BE13'
  },
  {
    id: 'S2',
    label: '116 學年度四技二專統一入學測驗自主選考專區',
    url: 'https://www.tcte.edu.tw/index.php?mod=TVETest/SelfSelectSubject',
    publisher: '技專校院入學測驗中心',
    checkedAt: '2026-08-10'
  },
  {
    id: 'S3',
    label: '115 學年度考試大綱：06 土木與建築群 專業科目（一）',
    url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-1-range.pdf',
    publisher: '技專校院入學測驗中心',
    note: '114.08.12 公告，共 4 頁',
    checkedAt: '2026-08-10',
    documentSha256: 'EC1A373623F18A6E9791FAF6280C6BCA16D1531642B89A1D23C81EE1C75B7097'
  },
  {
    id: 'S4',
    label: '115 學年度考試大綱：06 土木與建築群 專業科目（二）',
    url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-2-range.pdf',
    publisher: '技專校院入學測驗中心',
    note: '114.08.12 公告，共 4 頁',
    checkedAt: '2026-08-10',
    documentSha256: '8A70E2595B7D94FA5B55CF295D2B41003AB3ABD355D7F985E790118987CABACB'
  },
  {
    id: 'S5',
    label: '四技二專資訊（考試科目表、簡章、試題）',
    url: 'https://www.tcte.edu.tw/index.php?mod=TVETest/info4y',
    publisher: '技專校院入學測驗中心',
    checkedAt: '2026-08-10'
  }
];

/** 新制三大變革 */
export interface Change {
  id: string;
  scope: string;
  before: string;
  after: string;
  principle?: string;
  effectiveFrom: string;
  sourceId: string;
}

export const CHANGES: Change[] = [
  {
    id: 'C1',
    scope: '統測應試科目',
    before: '5 科全考',
    after: '單群（類）考生【01–20】自主選考至少 2 科，須包含專業科目至少 1 科；跨群（類）考生【51–56】至少 3 科，各群專業科目（二）為必考',
    effectiveFrom: '116 學年度',
    sourceId: 'S1'
  },
  {
    id: 'C2',
    scope: '甄選入學第一階段參採科目數',
    before: '1 至 5 科',
    after: '1 至 4 科；第一階段與第二階段可採計不同科目，惟兩者合計至多 4 項科目',
    principle: '大倍率篩選共同科目、小倍率篩選專業科目',
    effectiveFrom: '116 學年度',
    sourceId: 'S1'
  },
  {
    id: 'C3',
    scope: '聯合登記分發採計科目數',
    before: '5 科全採',
    after: '採計 2 至 5 科',
    principle: '專業科目總權重須大於共同科目總權重',
    effectiveFrom: '116 學年度',
    sourceId: 'S1'
  },
  {
    id: 'C4',
    scope: '甄選入學一般組第一階段篩選倍率上限',
    before: '3 倍',
    after: '4 倍',
    effectiveFrom: '117 學年度',
    sourceId: 'S1'
  }
];

/** 資格紅線 —— 少考一科可能直接失去資格 */
export interface RedLine {
  channel: string;
  trigger: string;
  consequence: string;
  sourceId: string;
}

export const RED_LINES: RedLine[] = [
  {
    channel: '甄選入學',
    trigger: '欲報考的校系科（組）、學程所參採的統測科目，有任 1 科目未報考，或有 2 科以上為 0 分（缺考成績亦以 0 分計）',
    consequence: '無法進入第一階段篩選',
    sourceId: 'S1'
  },
  {
    channel: '聯合登記分發',
    trigger: '報考之校系科（組）、學程所採計的任一統測科目未報考，或有 2 科以上成績為 0 分（缺考成績亦以 0 分計）',
    consequence: '不具分發資格',
    sourceId: 'S1'
  }
];

/** 06 土木與建築群五科 */
export interface GroupSubject {
  code: string;
  name: string;
  contains?: string[];
  kind: 'common' | 'professional';
  archSubjectSlugs: string[];
}

export const GROUP_06_SUBJECTS: GroupSubject[] = [
  { code: '國文', name: '國文', kind: 'common', archSubjectSlugs: ['chinese'] },
  { code: '英文', name: '英文', kind: 'common', archSubjectSlugs: ['english'] },
  { code: '數學(C)', name: '數學（C）', kind: 'common', archSubjectSlugs: ['math-c'] },
  {
    code: '專一',
    name: '專業科目（一）',
    contains: ['基礎工程力學', '材料與試驗'],
    kind: 'professional',
    archSubjectSlugs: ['mechanics', 'materials']
  },
  {
    code: '專二',
    name: '專業科目（二）',
    contains: ['測量實習', '製圖實習'],
    kind: 'professional',
    archSubjectSlugs: ['surveying', 'drafting']
  }
];

/**
 * 官方考試大綱逐章（06 群），並標註 Arch 平台對應主題。
 * coverageStatus 區分「已有章級對應」「內容散落、待補深度」「完全沒有對應」。
 */
export interface ScopeChapter {
  no: string;
  title: string;
  items: string[];
  archTopics: { subject: string; slug: string; title: string }[];
  coverageStatus?: 'mapped' | 'partial' | 'missing';
  coverageNote?: string;
}

export interface ScopePaper {
  paper: '專業科目（一）' | '專業科目（二）';
  subject: string;
  archSubjectSlug: string;
  sourceId: string;
  chapters: ScopeChapter[];
}

export const EXAM_SCOPE: ScopePaper[] = [
  {
    paper: '專業科目（一）',
    subject: '基礎工程力學',
    archSubjectSlug: 'mechanics',
    sourceId: 'S3',
    chapters: [
      {
        no: '一',
        title: '力學基本觀念',
        items: ['質點與剛體', '力與力系', '向量與純量', '牛頓三大運動定律', '力的國際單位', '力之外效應與可傳性'],
        archTopics: [{ subject: 'mechanics', slug: 'units-vectors', title: '1. 單位與向量' }]
      },
      {
        no: '二',
        title: '平面共點力系',
        items: ['力之分解', '共線力系之合成', '共點力系之合成與分解', '自由體圖', '二力與三力之平衡', '共點力系平衡之分析'],
        archTopics: [{ subject: 'mechanics', slug: 'force-equilibrium', title: '2. 力系與共點力平衡' }]
      },
      {
        no: '三',
        title: '平面平行力系',
        items: ['力矩與力矩原理', '力偶及其特性', '力之平移', '平行力系之合成與分解', '平行力系平衡之分析'],
        archTopics: [{ subject: 'mechanics', slug: 'force-equilibrium', title: '2. 力系與共點力平衡' }]
      },
      {
        no: '四',
        title: '共面非共點非平行力系',
        items: ['力系之合成與分解', '力系平衡之分析'],
        archTopics: [{ subject: 'mechanics', slug: 'force-equilibrium', title: '2. 力系與共點力平衡' }]
      },
      {
        no: '五',
        title: '空間力系',
        items: [
          '空間單力 X、Y、Z 軸分力',
          '共點力系之合成與分解',
          '共點力系之平衡分析',
          '平行力系之合成與分解',
          '平行力系之平衡分析',
          '非共點非平行力系的認識'
        ],
        archTopics: [{ subject: 'mechanics', slug: 'spatial-force-systems', title: '8. 空間力系與空間平衡' }],
        coverageStatus: 'mapped'
      },
      {
        no: '六',
        title: '桁架',
        items: ['桁架的認識', '節點法與截面法'],
        archTopics: [{ subject: 'mechanics', slug: 'truss', title: '5. 平面桁架分析' }]
      },
      {
        no: '七',
        title: '摩擦力',
        items: ['摩擦之定義', '摩擦角及靜止角', '平面與斜面滑動摩擦'],
        archTopics: [{ subject: 'mechanics', slug: 'friction', title: '4. 摩擦力' }]
      },
      {
        no: '八',
        title: '重心、形心及慣性矩',
        items: ['重心與形心', '組合面之形心', '慣性矩', '平行軸定理', '組合形之慣性矩', '極慣性矩與斷面模數'],
        archTopics: [{ subject: 'mechanics', slug: 'centroid', title: '3. 重心與形心' }]
      },
      {
        no: '九',
        title: '應力與應變',
        items: ['應力與應變的認識', '虎克定律', '楊氏係數', '應力應變圖', '蒲松比', '多向應力之應變相互影響', '體積應變與體積模數'],
        archTopics: [{ subject: 'mechanics', slug: 'stress-strain', title: '7. 應力與應變' }]
      },
      {
        no: '十',
        title: '剪力',
        items: ['剪應力、剪應變與剛性模數', '剛性模數與彈性係數之關係', '三種彈性係數之關係'],
        archTopics: [{ subject: 'mechanics', slug: 'stress-strain', title: '7. 應力與應變' }]
      },
      {
        no: '十一',
        title: '梁之剪力與彎曲力矩',
        items: ['梁之剪力與彎曲力矩的認識', '剪力與彎曲力矩', '剪力圖與彎曲力矩圖', '荷重、剪力與彎曲力矩之關係', '危險斷面'],
        archTopics: [{ subject: 'mechanics', slug: 'beam', title: '6. 靜定樑之受力' }]
      },
      {
        no: '十二',
        title: '梁內應力',
        items: ['中立面、中立軸與彈性曲線', '梁內彎曲應力', '梁內剪應力'],
        archTopics: [{ subject: 'mechanics', slug: 'stress-strain', title: '7. 應力與應變' }]
      },
      {
        no: '十三',
        title: '平面應力',
        items: ['平面應力的認識', '剪應力與正交應力', '主平面、主應力', '合成應力', '莫爾圓圖解法'],
        archTopics: [{ subject: 'mechanics', slug: 'plane-stress', title: '9. 平面應力與莫耳圓圖解' }],
        coverageStatus: 'mapped'
      }
    ]
  },
  {
    paper: '專業科目（一）',
    subject: '材料與試驗',
    archSubjectSlug: 'materials',
    sourceId: 'S3',
    chapters: [
      {
        no: '一',
        title: '材料與試驗',
        items: [
          '材料的分類、規格',
          '材料性質與對應之試驗項目',
          '材料試驗儀器、試體、試驗製作以及試驗方法',
          '測定值與精度試驗',
          '試驗結果之表示、圖表化與品管運用',
          '強度、耐久性、耐候性、吸水性、熱傳試驗'
        ],
        archTopics: [{ subject: 'materials', slug: 'basic-properties', title: '1. 材料與試驗概論與基本性質' }]
      },
      {
        no: '二',
        title: '水泥',
        items: ['水泥的定義與分類', '波特蘭水泥之種類', '水泥硬化、水泥性質及試驗（含水泥砂漿抗壓測定）', '水泥之包裝及貯存'],
        archTopics: [
          { subject: 'materials', slug: 'cement-composition', title: '2.1 卜特蘭水泥水化化學成分' },
          { subject: 'materials', slug: 'cement-types', title: '2.2 CNS 61 五大類型比較' },
          { subject: 'materials', slug: 'cement-vicat', title: '2.3 維卡儀凝結時間試驗' },
          { subject: 'materials', slug: 'cement-strength', title: '2.4 水泥砂漿抗壓強度試驗' },
          { subject: 'materials', slug: 'cement-storage', title: '2.5 水泥儲存與假凝現象' }
        ]
      },
      {
        no: '三',
        title: '混凝土',
        items: [
          '混凝土的定義',
          '混凝土的粒料、拌合用水',
          '混凝土性質及試驗（細骨材篩分析、氯離子試驗、抗壓強度試驗、坍度試驗、粒料含水率試驗等）',
          '混凝土摻料'
        ],
        archTopics: [{ subject: 'materials', slug: 'concrete', title: '3. 混凝土構造與配比設計' }]
      },
      {
        no: '四',
        title: '石材、陶瓷製品及玻璃',
        items: [
          '石材的定義、分類、性質、規格、材積計算及維護',
          '陶瓷製品、黏土分類與性質、普通磚性質及試驗（紅磚吸水率、抗壓強度）、瓦片、瓷磚',
          '玻璃的定義、分類、性質與應用'
        ],
        archTopics: [{ subject: 'materials', slug: 'stone-ceramics-glass', title: '4. 石材、陶瓷製品與玻璃' }]
      },
      {
        no: '五',
        title: '木材',
        items: [
          '木材的定義、分類及組織',
          '木材性質及試驗（含水量試驗、比重試驗、縱橫向壓力及拉力試驗等）',
          '木材品質之辨識',
          '木構造、木模板、裝潢材之應用'
        ],
        archTopics: [{ subject: 'materials', slug: 'wood', title: '5. 木材構造與品質試驗' }]
      },
      {
        no: '六',
        title: '高分子材料',
        items: ['瀝青的定義、性質及試驗、規格及用途', '塑膠之認識、種類及應用', '塗料之認識、種類及應用'],
        archTopics: [{ subject: 'materials', slug: 'polymers-asphalt', title: '6. 高分子、瀝青與防水塗料' }]
      },
      {
        no: '七',
        title: '金屬材料',
        items: ['金屬材料的定義', '土木與建築之應用', '金屬防蝕法', '金屬材料性質及試驗（含鋼筋抗拉試驗）'],
        archTopics: [{ subject: 'materials', slug: 'metals', title: '7. 金屬材料與防蝕試驗' }]
      },
      {
        no: '八',
        title: '未來發展趨勢',
        items: ['朝向環保、節能、永續與健康等高性能綠建材之演進及發展', '土木與建築材料之創新'],
        archTopics: [{ subject: 'materials', slug: 'green-materials', title: '8. 綠建材與永續材料發展' }]
      }
    ]
  },
  {
    paper: '專業科目（二）',
    subject: '測量實習',
    archSubjectSlug: 'surveying',
    sourceId: 'S4',
    chapters: [
      {
        no: '一',
        title: '測量',
        items: [
          '測量工作內容與性質',
          '任務編組、工作安全與注意事項',
          '測量學之定義、分類、外業與內業',
          '基本單位、測量基準及座標系統',
          '測量誤差與精度',
          '測量作業之基本程序',
          '基本觀測量與相關測量儀器',
          '基本測量數學（三角幾何、三角函數、直角坐標、極坐標）',
          '基本計算工具使用（計算器、試算表）'
        ],
        archTopics: [{ subject: 'surveying', slug: 'area-and-error', title: '6. 面積計算與誤差處理' }]
      },
      {
        no: '二',
        title: '距離測量',
        items: ['距離測量之認識', '分類及量距工具', '捲尺距離測量', '電子測距', '應用距離測量測算角度'],
        archTopics: [{ subject: 'surveying', slug: 'distance-and-angle', title: '1. 距離與角度測量' }]
      },
      {
        no: '三',
        title: '水準儀測量',
        items: [
          '高程測量之認識',
          '水準儀種類、配件與構造',
          '水準儀之操作與讀數',
          '基本原理及誤差',
          '逐差水準測量（閉合、附合、路線）',
          '水準儀之檢點與校正',
          '對向水準測量',
          '方格水準測量',
          '旋轉雷射儀、雷射墨線儀原理及應用'
        ],
        archTopics: [{ subject: 'surveying', slug: 'elevation-and-leveling', title: '2. 高程測量與水準儀' }]
      },
      {
        no: '四',
        title: '角度測量',
        items: [
          '角度測量之認識',
          '直線定向（磁北、真北、製圖北之關係與轉換）',
          '角度測量儀器之發展、構造及原理',
          '經緯儀之整置與讀數',
          '水平角測量原理及方法',
          '垂直角測量原理及計算',
          '經緯儀的檢點與校正',
          '角度觀測之誤差'
        ],
        archTopics: [{ subject: 'surveying', slug: 'instrument-setup', title: '3. 儀器操作與整置' }]
      },
      {
        no: '五',
        title: '間接距離與高程測量',
        items: ['視距測量與視角測量原理', '視距法測量', '雙高法測量', '三角高程測量'],
        archTopics: [{ subject: 'surveying', slug: 'distance-and-angle', title: '1. 距離與角度測量' }]
      },
      {
        no: '六',
        title: '綜合應用測量',
        items: [
          '座標系統於測量上之應用',
          '測量之數值法計算',
          '控制點於工程上之應用（控制點佈設、平面圖測量、點位測設）',
          '近代測繪技術（全站儀之應用、旋轉雷射儀與雷射墨線儀操作、稜鏡加常數之測定）'
        ],
        archTopics: [
          { subject: 'surveying', slug: 'traverse-surveying', title: '4. 導線測量' },
          { subject: 'surveying', slug: 'coordinate-computation', title: '5. 座標計算與閉合差' }
        ]
      }
    ]
  },
  {
    paper: '專業科目（二）',
    subject: '製圖實習',
    archSubjectSlug: 'drafting',
    sourceId: 'S4',
    chapters: [
      {
        no: '一',
        title: '製圖基本觀念',
        items: ['工程圖學之意義', '工程圖之種類', '圖紙規格及折摺法', '工程圖之比例大小', '圖框、標題欄之規格'],
        archTopics: [{ subject: 'drafting', slug: 'scale', title: '2. 比例與尺度' }]
      },
      {
        no: '二',
        title: '製圖儀器之使用',
        items: [
          '製圖板及製圖桌椅',
          '鉛筆、平行尺、三角板之使用方法',
          '圓規、分規使用方法',
          '曲線板、曲線規使用方法',
          '比例尺及模板之使用方法',
          '儀器使用時應注意事項'
        ],
        archTopics: [{ subject: 'drafting', slug: 'drafting-instruments', title: '8. 製圖儀器之使用與維護' }],
        coverageStatus: 'mapped'
      },
      {
        no: '三',
        title: '線法與字法之應用',
        items: ['基本線法', '線之種類', '製圖線條之畫法', '建築圖上線條之應用', '字法的一般通則', '中文字法', '英文字母及數字', '筆觸及軌線之應用'],
        archTopics: [{ subject: 'drafting', slug: 'lines-and-lettering', title: '1. 線條種類與字法' }]
      },
      {
        no: '四',
        title: '幾何畫法應用',
        items: [
          '幾何圖形之基本要素',
          '直線、平行線及垂直線之畫法',
          '畫圓及求圓心',
          '切線與切點之畫法',
          '線段、角度、圓弧等分法',
          '多邊形畫法',
          '圖形的遷移',
          '與圓弧等長之線段',
          '土木與建築常用曲線幾何之畫法'
        ],
        archTopics: [{ subject: 'drafting', slug: 'geometric-constructions', title: '9. 幾何畫法與平面幾何應用' }],
        coverageStatus: 'mapped'
      },
      {
        no: '五',
        title: '投影畫法應用',
        items: ['圖面投影之意涵', '投影之分類及常用名詞', '象限之規定', '點投影', '直線投影', '平面投影', '第一象限正視圖', '第三象限正視圖'],
        archTopics: [{ subject: 'drafting', slug: 'orthographic-projection', title: '3. 正投影視圖' }]
      },
      {
        no: '六',
        title: '正投影視圖繪製',
        items: [
          '正投影原理與練習',
          '側投影',
          '線條優先順序',
          '正投影視圖相關位置與選擇',
          '正投影製圖步驟',
          '立體圖、立體正投影、斜投影',
          '徒手畫',
          '視圖在工程圖中所傳達的角色'
        ],
        archTopics: [{ subject: 'drafting', slug: 'orthographic-projection', title: '3. 正投影視圖' }]
      },
      {
        no: '七',
        title: '建築剖視圖繪製',
        items: ['剖視圖之意義及種類', '建築剖視圖之畫法', '建築剖面圖中各種慣用表示法', '剖面圖在工程圖中之角色'],
        archTopics: [{ subject: 'drafting', slug: 'sectional-views', title: '4. 剖面圖判讀' }]
      },
      {
        no: '八',
        title: '建築圖尺度標註',
        items: ['尺度標註之意涵', '標註內容及原則', '其他尺度標註', '主要工業國家之尺度標註差異', '尺度標註及註解之重要性'],
        archTopics: [{ subject: 'drafting', slug: 'dimensioning-and-symbols', title: '7. 尺寸標註與圖例' }]
      },
      {
        no: '九',
        title: '輔助視圖之使用',
        items: [
          '輔助視圖之意涵與種類',
          '單斜面之法線視圖與旋轉視圖',
          '單斜面法線與旋轉視圖之實物求法',
          '複斜面之法線視圖與旋轉視圖',
          '複斜面之法線視圖與旋轉視圖之實物求法'
        ],
        archTopics: [{ subject: 'drafting', slug: 'auxiliary-views', title: '10. 輔助視圖與斜面真形圖法' }],
        coverageStatus: 'mapped'
      },
      {
        no: '十',
        title: '透視圖投影',
        items: ['透視投影之意涵', '透視投影之名詞及種類', '透視原理', '透視圖法', '光源之性質', '透視陰影求法'],
        archTopics: [{ subject: 'drafting', slug: 'perspective-projection', title: '11. 透視圖投影與陰影求法' }],
        coverageStatus: 'mapped'
      },
      {
        no: '十一',
        title: '土木與建築製圖繪製',
        items: ['土木與建築圖各種相關符號之意義', '三視圖應用於平面圖', '三視圖應用於立面圖', '三視圖應用於剖面繪製應用'],
        archTopics: [
          { subject: 'drafting', slug: 'architectural-plan', title: '5. 建築平面圖' },
          { subject: 'drafting', slug: 'architectural-elevation', title: '6. 建築立面圖' }
        ]
      }
    ]
  }
];

/** 重要時程；status 標示是否已由官方確定 */
export interface TimelineItem {
  date: string;
  event: string;
  status: 'confirmed' | 'tentative';
  sourceId: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    date: '115 年 6 月 16 日 10:00',
    event: '「甄選入學及聯合登記分發各校系統測科目查詢系統」開放查詢',
    status: 'confirmed',
    sourceId: 'S2'
  },
  {
    date: '115 年 6 月',
    event: '各系科於 116 學年度甄選入學及聯合登記分發所採計之統測科目提前公告（往年為每年 10 月底前）',
    status: 'confirmed',
    sourceId: 'S1'
  },
  { date: '116 年 4 月底週末', event: '116 學年度統一入學測驗（暫定）', status: 'tentative', sourceId: 'S2' }
];

/** 報名費用結構（依自主選考專區試算說明） */
export const FEES = [
  { item: '基本作業費（集體報名）', amount: '200 元' },
  { item: '基本作業費（個別報名）', amount: '250 元' },
  { item: '單一科目測驗費', amount: '170 元／科' },
  { item: '外語群英語類 專業科目（二）', amount: '200 元' },
  { item: '設計群 專業科目（二）', amount: '340 元' }
];

/** 給 06 群考生的選考決策步驟 */
export const DECISION_STEPS = [
  {
    step: 1,
    title: '先查校系，不要先決定科目',
    body: '115 年 6 月 16 日 10 時起，用官方查詢系統列出你所有目標校系（甄選＋分發）採計哪些統測科目。'
  },
  {
    step: 2,
    title: '取「聯集」當作必考下限',
    body: '把所有目標校系採計的科目取聯集。只要其中任一科你沒報考，該校系你就直接失去資格——這是規則，不是分數高低問題。'
  },
  {
    step: 3,
    title: '平台五科全備，不替學生押注',
    body: 'Arch 會完整準備國文、英文、數學(C)、專一與專二，不因校系採計差異刪減教材。報考時仍以所有目標校系採計科目的聯集決定；若希望保留最大志願彈性，可選擇五科全考。'
  },
  {
    step: 4,
    title: '想清楚再減科，並在報名時逐項確認',
    body: '減科省的是準備時間與 170 元／科，付出的是志願彈性。報名系統送出前會列出已選與未選科目，務必逐科核對；未選考之科目會加註於准考證與成績單。'
  }
];
