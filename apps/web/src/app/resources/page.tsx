import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  ExternalLink,
  HardHat,
  Landmark,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '資格考試資源彙整｜Arch V8.02',
  description: '一站式彙整考選部專門職業及技術人員高等考試（建築師、結構工程技師、土木工程技師）、考試院、行政院公共工程委員會、技術士技能檢定、四技二專統測官方考綱與各大專業公會權威資源。',
};

interface Resource {
  title: string;
  url: string;
  provider: string;
  subjects: string;
  description: string;
  howToUse: string;
  level: '國家考試一級來源' | '專業公會／法定機構' | '官方教育／考綱來源' | '學校／教師公開資源' | '補充解題研究' | '社群題庫';
  note?: string;
}

interface ResourceGroup {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  highlight?: string;
  badgeTone: 'purple' | 'teal' | 'blue' | 'amber' | 'emerald' | 'slate';
  resources: Resource[];
}

const groups: ResourceGroup[] = [
  {
    id: 'architect-exam',
    title: '🏛️ 建築師專技高考與專業機構（考選部／建築師公會／國土署／建研所）',
    shortTitle: '建築師專區',
    description: '中華民國建築師執業唯一法定國家考試。採「科別及格制」，每科滿 60 分為及格，單科及格成績自該次榜示日起保留 3 年且各科滾動計算。在學階段即可對照考綱建立選課與實作目標。',
    highlight: '6 大核心考科：建築計畫與設計 (8H) · 敷地計畫與都市設計 (4H) · 營建法規與實務 · 建築結構 · 建築構造與施工 · 建築環境控制',
    badgeTone: 'purple',
    resources: [
      {
        title: '專門職業及技術人員高等考試建築師考試專區與命題大綱',
        url: 'https://wwwc.moex.gov.tw/main/exam/wFrmExamDetail.aspx?menu=156&menu2=198',
        provider: '考選部專技考試司',
        subjects: '建築師 6 大專業考科大綱細目',
        description: '考選部官方發布之建築師高等考試命題大綱與法規規範，明確定義各考科的核心考核範圍與命題重點。',
        howToUse: '以官方大綱為骨幹建立長期研讀清單；在學階段可對照「製圖實習、材料、力學、建築法規」規劃大學或研究所的修課順序。',
        level: '國家考試一級來源',
      },
      {
        title: '建築師歷屆考畢試題與測驗題標準答案平臺',
        url: 'https://wwwc.moex.gov.tw/main/ExamQues/wFrmExamQuesSearch.aspx',
        provider: '考選部',
        subjects: '建築師歷年申論、圖面與測驗題全部試卷 (PDF)',
        description: '官方歷年試題資料庫，提供建築師高考全部試題 PDF 下載與選擇題標準解答，具最高法定公信力。',
        howToUse: '下載近 10 年敷地計畫與建築設計圖面題目限時演練；法規、構造與環控測驗題以官方標準答案為準。',
        level: '國家考試一級來源',
      },
      {
        title: '中華民國全國建築師公會 (NAA)',
        url: 'https://www.naa.org.tw/',
        provider: '中華民國全國建築師公會',
        subjects: '建築實務、執業規範、法規研究、公會會訊',
        description: '全國建築師法定專業公會組織，推動建築法制改革、工程鑑定標準、建築師雜誌專刊及國際建築學術交流。',
        howToUse: '閱讀公會發布之建築法令研討專題與實務判例，理解實務現場的設計權責、監造責任與簽證規範。',
        level: '專業公會／法定機構',
      },
      {
        title: '內政部國土管理署 建築管理組（全國建築法規與開業管理）',
        url: 'https://www.nlma.gov.tw/',
        provider: '內政部國土管理署',
        subjects: '建築法、建築技術規則、建築師開業登記與管理',
        description: '國家建築中央主管機關，主管全國建築技術規則（設計施工編、構造編、設備編）最新修正條文、法令函釋與建築師開業證書核發。',
        howToUse: '即時查閱最新修訂之建築技術規則（耐震、防水分區、日照、無障礙規範），確保不使用已廢止之舊條文。',
        level: '專業公會／法定機構',
      },
      {
        title: '內政部建築研究所 (ABRI)',
        url: 'https://www.abri.gov.tw/',
        provider: '內政部建築研究所',
        subjects: '綠建築 (EEWH)、耐震補強、智慧建築、淨零碳排建築、BIM 規範',
        description: '國家級建築科技研發核心，主導台灣綠建築評估手冊、淨零建築節能路徑、防火避難及建築資訊模型 (BIM) 技術指引。',
        howToUse: '研讀官方出版之綠建築評估手冊與智慧建築手冊，掌握當代建築環境控制與永續科技最前線考點。',
        level: '專業公會／法定機構',
      },
    ],
  },
  {
    id: 'structural-exam',
    title: '🏗️ 結構工程技師專技高考與耐震研究（考選部／結構技師公會／國震中心）',
    shortTitle: '結構工程技師',
    description: '專職各類建築物、橋梁、高架與基礎之受力平衡、結構耐震安全計算與動力分析之最高國家技師執照。為建築生命安全之最關鍵骨幹。',
    highlight: '6 大核心考科：材料力學 · 結構學 · 鋼筋混凝土設計與預力混凝土設計 · 鋼結構設計 · 土壤力學與基礎設計 · 結構動力分析與耐震設計',
    badgeTone: 'teal',
    resources: [
      {
        title: '專門職業及技術人員高等考試結構工程技師考試專區',
        url: 'https://www.moex.gov.tw/',
        provider: '考選部專技考試司',
        subjects: '結構技師 6 大專業科目命題大綱',
        description: '結構工程技師國家高考主管專區，規定力學推導、RC/SC/SRC 規範計算條文及結構動力分析之考核範疇。',
        howToUse: '依 6 大考科深度演練材料力學與結構學推導，熟記混凝土與鋼結構最新設計規範之強度折減係數與承載力計算式。',
        level: '國家考試一級來源',
      },
      {
        title: '中華民國結構工程技師公會全國聯合會',
        url: 'http://www.ncsea.org.tw/',
        provider: '中華民國結構工程技師公會全國聯合會',
        subjects: '耐震標章審查、結構設計準則、結構法規研討',
        description: '結構技師全國法定聯合會，執行耐震標章特別審查、耐震設計規範研議與重大公共結構安全技術論證。',
        howToUse: '參考公會發布之結構計算準則與耐震審查案例，掌握結構力學在實際建築骨架中的具體實踐。',
        level: '專業公會／法定機構',
      },
      {
        title: '臺灣省結構工程技師公會',
        url: 'https://www.tsea.org.tw/',
        provider: '臺灣省結構工程技師公會',
        subjects: '耐震詳細評估、受損建築物鑑定、結構補強工法專刊',
        description: '提供公有及私有建築物耐震能力初步與詳細評估技術指引、結構補強工法（包板、斜撐、剪力牆、阻尼器）專刊。',
        howToUse: '研讀耐震評估報告實例，理解靜力非線性分析（Pushover）與結構耐震安全餘裕之評估原理。',
        level: '專業公會／法定機構',
      },
      {
        title: '國家地震工程研究中心 (NCREE)',
        url: 'https://www.ncree.narl.org.tw/',
        provider: '國家實驗研究院國家地震工程研究中心',
        subjects: '建築物耐震設計規範、震損勘災調查、振動台試驗、隔減震元件',
        description: '台灣防震耐震研發之國家級核心智庫，負責國家建築物耐震設計規範研擬、震後災損調查與韌性防災科技。',
        howToUse: '詳讀 NCREE 歷年強震勘災報告與耐震設計指引，深刻理解結構破壞模式與抗震設計哲學。',
        level: '專業公會／法定機構',
      },
    ],
  },
  {
    id: 'civil-exam',
    title: '🌉 土木工程技師專技高考與工程管理（考選部／土木技師公會／工程會）',
    shortTitle: '土木工程技師',
    description: '涵蓋基礎建設、深開挖、道路橋梁、隧道水利、施工法與營建管理之國家最高土木專業技師執照。是將設計落實為堅固工程的總負責人。',
    highlight: '6 大核心考科：結構分析 (材力+結構) · 結構設計 (RC+鋼構) · 大地工程學 (土力+基工+地質) · 工程測量 · 施工法 · 營建管理',
    badgeTone: 'blue',
    resources: [
      {
        title: '專門職業及技術人員高等考試土木工程技師考試專區',
        url: 'https://www.moex.gov.tw/',
        provider: '考選部專技考試司',
        subjects: '土木技師 6 大專業科目命題大綱',
        description: '土木工程技師國家高考主管專區，涵蓋結構、大地、測量、施工與營建管理等全方位工程專業。',
        howToUse: '將高工奠定之測量、力學、材料基石，延伸整合大學大地力學、施工法與營建管理課程進行全盤演練。',
        level: '國家考試一級來源',
      },
      {
        title: '中華民國土木技師公會全國聯合會',
        url: 'http://www.cupcea.org.tw/',
        provider: '中華民國土木技師公會全國聯合會',
        subjects: '土木工程實務、技師法規、工程鑑定、國家公共工程政策',
        description: '台灣最具代表性之工程技師團體，主責技師權益維護、工程爭議仲裁、公共工程技術規範建言。',
        howToUse: '追蹤政府採購法、技師法規及公共工程施工品質管理機制。',
        level: '專業公會／法定機構',
      },
      {
        title: '臺灣省土木技師公會 &「技師報」工程知識庫',
        url: 'https://www.twce.org.tw/',
        provider: '臺灣省土木技師公會',
        subjects: '技師報工程週刊、深開挖擋土、地盤改良、基樁載重試驗、混凝土品質',
        description: '台灣工程界極具公信力與歷史的每週專業工程刊物，刊載第一線工程師實務計算、施工工法檢討與失敗案例解析。',
        howToUse: '善用技師報線上檢索系統，查詢「連續壁抓掘」、「水準測量平差」、「自充填混凝土」等實務深度專文。',
        level: '專業公會／法定機構',
      },
      {
        title: '行政院公共工程委員會 技師與工程顧問管理系統',
        url: 'https://eng.pcc.gov.tw/',
        provider: '行政院公共工程委員會 (PCC)',
        subjects: '技師執業執照申請、換發、積分管理、技師法規',
        description: '國家技師主管最高行政機關，主管技師法規、執業執照審查、繼續教育積分核定與工程技術顧問公司登記。',
        howToUse: '查閱考取技師後取得 2 年工程資歷要求、執照申請流程與每 6 年換照之繼續教育積分規定。',
        level: '國家考試一級來源',
      },
    ],
  },
  {
    id: 'moex-core',
    title: '⚖️ 考選部與考試院一級官方平臺（試題查詢／網路報名／命題大綱）',
    shortTitle: '考選部與考試院',
    description: '國家考試制度與法規源頭。查詢各類專技高考最新應考須知、簡章、報名系統、減免科目申請與全部考畢試題 PDF。',
    badgeTone: 'purple',
    resources: [
      {
        title: '考選部 國家考試歷屆考畢試題與解答查詢平臺',
        url: 'https://wwwc.moex.gov.tw/main/ExamQues/wFrmExamQuesSearch.aspx',
        provider: '考選部',
        subjects: '專技高考、公務員高考、普考、特考全科目試題',
        description: '官方唯一國家考試歷屆試題庫，提供歷年試卷原始 PDF、測驗題標準答案與試題疑義說明。',
        howToUse: '限時作答歷屆試題，並以考選部公布之官方解答為最終驗證標準。',
        level: '國家考試一級來源',
      },
      {
        title: '考選部 國家考試網路報名資訊系統 (Online Registration)',
        url: 'https://register.moex.gov.tw/',
        provider: '考選部',
        subjects: '國家考試線上報名、減免科目申請、成績與及格通知',
        description: '專技高考（建築師、技師）報名唯一官方管道，提供應考資格線上查驗與減免科目線上申請。',
        howToUse: '每年 8 月留意報名簡章日程，及早備妥修業成績單、學位證書與專科以上學分證明。',
        level: '國家考試一級來源',
      },
      {
        title: '考選部 專門職業及技術人員考試命題大綱總覽專區',
        url: 'https://wwwc.moex.gov.tw/main/exam/wFrmExamDetail.aspx?menu=156&menu2=198',
        provider: '考選部',
        subjects: '專技高考各類科詳細命題大綱與法規例示',
        description: '公告建築師、結構工程技師、土木工程技師等 24 類技師考試科目的官方考核核心。',
        howToUse: '作為複習驗收清單，確保各科目章節無遺漏。',
        level: '國家考試一級來源',
      },
      {
        title: '考試院 全球資訊網（國家考選政策與及格制度法規）',
        url: 'https://www.exam.gov.tw/',
        provider: '考試院',
        subjects: '考選制度法規、專技考試改革、及格制滾動年限法案',
        description: '國家最高考試機關，發布專技人員及格制度變革、考試法規修正公報與考選策略報告。',
        howToUse: '掌握專技高考法規與及格制變更的第一手正式政策。',
        level: '國家考試一級來源',
      },
    ],
  },
  {
    id: 'skills-cert',
    title: '🛠️ 國家技術士技能檢定與專業技術證（建築製圖應用／工程測量／營造工地主任）',
    shortTitle: '國家技術士檢定',
    description: '勞動部技檢中心技術士證照（乙/丙級）與營造業工地主任執照，銜接高工實作、在校技能檢定與現場工程管理。',
    badgeTone: 'amber',
    resources: [
      {
        title: '勞動部勞動力發展署技能檢定中心 (WDA)',
        url: 'https://www.wdasec.gov.tw/',
        provider: '勞動部勞動力發展署',
        subjects: '建築製圖應用（乙/丙級）、工程測量（甲/乙/丙級）、營建防水、混凝土',
        description: '辦理全國技術士技能檢定與在校生專案技能檢定，核發國家技術士證照。',
        howToUse: '下載學科試題庫與術科測試參考資料，作為高工技術實作訓練與檢定合格之指引。',
        level: '國家考試一級來源',
      },
      {
        title: '技能檢定測驗試題與答案查詢系統',
        url: 'https://tech.tcte.edu.tw/',
        provider: '勞動部技檢中心 / 技專測驗中心',
        subjects: '歷屆技術士學科測驗試題與答案',
        description: '集中收錄各梯次技術士學科試題與標準答案，適合高一高二在校練習測量與製圖丙級。',
        howToUse: '搭配 Arch「速查指南」與「現場手冊」進行實作細節與規範重點核對。',
        level: '官方教育／考綱來源',
      },
      {
        title: '內政部國土管理署 營造業工地主任評定與執業專區',
        url: 'https://www.nlma.gov.tw/',
        provider: '內政部國土管理署',
        subjects: '營造業法、工地主任職能培訓與評定考試',
        description: '營造業工地主任法定證照，負責現場施工計畫、品質管制、勞工安全與工程日誌簽署。',
        howToUse: '了解工程現場施工負責人之法定資格路徑與營造業管理法規。',
        level: '專業公會／法定機構',
      },
    ],
  },
  {
    id: 'official-exam',
    title: '📐 四技二專統測官方制度、考綱與歷屆題（測驗中心／教育部課綱手冊）',
    shortTitle: '統測官方考綱',
    description: '技專校院入學測驗中心（TCTE）官方發布之 06 土木與建築群考綱、試題與 116 自主選考指引。',
    badgeTone: 'emerald',
    resources: [
      {
        title: '四技二專統測資訊總入口',
        url: 'https://www.tcte.edu.tw/index.php?mod=TVETest/info4y',
        provider: '技專校院入學測驗中心',
        subjects: '五科全適用',
        description: '集中提供重要日程、考試科目表、考科大綱、簡章與應考資訊，是查核統測事實的第一站。',
        howToUse: '每學年開始與報名前各核對一次；下載當年度簡章與考綱，不沿用補習班整理表推定規則。',
        level: '官方教育／考綱來源',
      },
      {
        title: '115 學年度官方試題與標準答案',
        url: 'https://web1.tcte.edu.tw/EXAM/115_4y/',
        provider: '技專校院入學測驗中心',
        subjects: '國文、英文、數學(C)、專一、專二',
        description: '提供各科正式題本、標準答案、疑義說明與成績統計；Arch 題庫的最終答案依據。',
        howToUse: '先限時作答，再對官方答案；錯題回到 Arch 對應知識頁，不用只背選項字母。',
        level: '官方教育／考綱來源',
      },
      {
        title: '專業科目（一）官方考試大綱',
        url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-1-range.pdf',
        provider: '技專校院入學測驗中心',
        subjects: '基礎工程力學、材料與試驗',
        description: '列出力學 13 章與材料 8 章的正式命題內容，是專一知識覆蓋的驗收表。',
        howToUse: '每完成一章就用細目反查：能否說明定義、畫圖、列式、計算並處理常見錯法。',
        level: '官方教育／考綱來源',
      },
      {
        title: '專業科目（二）官方考試大綱',
        url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-2-range.pdf',
        provider: '技專校院入學測驗中心',
        subjects: '測量實習、製圖實習',
        description: '涵蓋測量 6 章與製圖 11 章，包括儀器、誤差、雙高法、投影、輔助視圖與透視。',
        howToUse: '把細目轉成操作題與判讀題；測量要保留方向與單位，製圖要能從圖面規則排除錯項。',
        level: '官方教育／考綱來源',
      },
      {
        title: '116 統測自主選考宣導專區',
        url: 'https://www.tcte.edu.tw/index.php?mod=TVETest/SelfSelectSubject',
        provider: '技專校院入學測驗中心',
        subjects: '116 學年度選考與報名',
        description: '說明單群至少選考科數、專業科目限制、跨群規則與校系採計查詢入口。',
        howToUse: '先查目標校系採計，再決定個人優先科目；掌握最新 116 自主選考新規範。',
        level: '官方教育／考綱來源',
      },
      {
        title: '土木與建築群課程手冊',
        url: 'https://stv.naer.edu.tw/data/course_manual/B/%E5%9C%9F%E6%9C%A8%E8%88%87%E5%BB%BA%E7%AF%89%E7%BE%A4%E8%AA%B2%E7%A8%8B%E6%89%8B%E5%86%8A%EF%BC%88111%E5%B9%B47%E6%9C%88%E6%9B%B4%E6%96%B0%EF%BC%89.pdf',
        provider: '教育部／國家教育研究院',
        subjects: '土木與建築群專業及實習課程',
        description: '提供 108 課綱學習表現、學習內容與課程架構，適合查「為什麼要學」及實作能力要求。',
        howToUse: '考綱決定統測範圍，課程手冊補足技能與素養脈絡；兩者交叉閱讀。',
        level: '官方教育／考綱來源',
      },
      {
        title: '108 課綱命題精進專區',
        url: 'https://www.tcte.edu.tw/doc/108Improve/',
        provider: '技專校院入學測驗中心',
        subjects: '命題方向與素養題',
        description: '整理新課綱考招變動、試題示例與命題說明，有助理解近年情境整合題的設計方向。',
        howToUse: '讀完概念後用示例檢查是否能將知識放入工地、圖說或數據情境，而非只記名詞。',
        level: '官方教育／考綱來源',
      },
      {
        title: '四技二專多元入學進路指南',
        url: 'https://www.techadmi.edu.tw/page.php?gid=967&pid=1014',
        provider: '技專校院招生策略委員會',
        subjects: '甄選、聯登與升學管道',
        description: '用較易讀的方式說明統測與四技二專各入學管道，並連回簡章及歷屆題。',
        howToUse: '用來建立升學全貌；資格、日期與採計仍回正式簡章逐條確認。',
        level: '官方教育／考綱來源',
      },
    ],
  },
  {
    id: 'open-solutions',
    title: '📚 學校公開題解與解題研究（歷屆詳解／題型拆解）',
    shortTitle: '學校題解與研究',
    description: '學校教師公開題解與補教題型拆解，作為公式推導驗證與錯題歸納之輔助參考。',
    badgeTone: 'slate',
    resources: [
      {
        title: '數學 C 歷屆題與部分詳解',
        url: 'https://learn.hshs.tyc.edu.tw/ischool/publish_page/31/?cid=15208',
        provider: '新興高中數學科教學研究會',
        subjects: '數學(C)',
        description: '彙整多年度統測數學 C 題本、答案與部分年份詳解，適合按年度進行限時演練。',
        howToUse: '每題寫出公式、代入、化簡與驗算；只對答案但不重建算式，不算完成。',
        level: '學校／教師公開資源',
      },
      {
        title: '升學歷屆考題連結彙整',
        url: 'https://ischool.fhvs.ntpc.edu.tw/ischool/widget/main_menu/show.php?cid=11496',
        provider: '新北市立豐珠中學／校務公開頁',
        subjects: '共同科與各群類題本入口',
        description: '整理統測與其他升學考試歷屆題入口，適合作為官方站之外的快速導航。',
        howToUse: '僅當作索引；下載題本及答案時確認網址、年度與考科，最終回官方站覆核。',
        level: '學校／教師公開資源',
      },
      {
        title: '115 統測各科試題解答與分析索引',
        url: 'https://www.tck.com.tw/sites/exam/115_4g/115_4g_index.html',
        provider: '建功補習班',
        subjects: '共同科、土建專一與專二',
        description: '集中整理各群試題與教師解答／分析，適合比較不同科目的拆題方法與錯項說明。',
        howToUse: '先自己完成，再閱讀解析找出漏掉的判斷步驟；若答案不同，以測驗中心標準答案為準。',
        level: '補充解題研究',
        note: '網站也明示重新排版可能誤植。',
      },
      {
        title: '114 土建群專二題型與考點分析',
        url: 'https://exam-match.1111.com.tw/blog/c6ddf83a-f53b-49d4-9904-a5bbb9b0b9bb',
        provider: '1111 統測落點',
        subjects: '測量實習、製圖實習',
        description: '按題號歸納誤差控制、三角高程、圖面整合、線型、比例與實務情境等命題重點。',
        howToUse: '用來安排複習順序與建立錯題標籤，不可用「熱門」理由跳過官方大綱其他章節。',
        level: '補充解題研究',
      },
      {
        title: '115 土建群專二線上題庫',
        url: 'https://yamol.tw/exam-%E7%84%A1%E5%B9%B4%E5%BA%A6%2B%2B115%2B%E5%9B%9B%E6%8A%80%E4%BA%8C%E5%B0%88%E7%B5%B1%E6%B8%AC_%E5%9C%9F%E6%9C%A8%E8%88%87%E5%BB%BA%E7%AF%89%E7%BE%A4_%E5%B0%88%E6%A5%AD%E7%A7%91%E7%9B%AE%28%E4%BA%8C%29%EF%BC%9A%E6%B8%AC%E9%87%8F%E5%AF%A6%E7%BF%92%E3%80%81%E8%A3%BD%E5%9C%96%E5%AF%A6%E7%BF%92-139358.htm',
        provider: '阿摩線上測驗',
        subjects: '測量實習、製圖實習',
        description: '提供線上逐題作答與社群討論，方便手機零碎練習及觀察其他考生的解題疑問。',
        howToUse: '只把社群解析當提示；題幹、圖面與答案都回官方 PDF 核對，避免投票答案或留言誤導。',
        level: '社群題庫',
        note: '部分功能可能需要登入。',
      },
    ],
  },
];

const levelStyles: Record<Resource['level'], string> = {
  '國家考試一級來源': 'border-purple-300 bg-purple-50 text-purple-800 dark:border-purple-800 dark:bg-purple-950/50 dark:text-purple-200',
  '專業公會／法定機構': 'border-teal-300 bg-teal-50 text-teal-800 dark:border-teal-800 dark:bg-teal-950/50 dark:text-teal-200',
  '官方教育／考綱來源': 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200',
  '學校／教師公開資源': 'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-200',
  '補充解題研究': 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200',
  '社群題庫': 'border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200',
};

const topNavBadges = [
  { id: 'architect-exam', label: '🏛️ 建築師高考', desc: '6科滾動保留 · 設計/敷地/法規/結構' },
  { id: 'structural-exam', label: '🏗️ 結構工程技師', desc: '耐震與動力 · 骨架安全核心' },
  { id: 'civil-exam', label: '🌉 土木工程技師', desc: '大地/測量/施工 · 總合工程實務' },
  { id: 'moex-core', label: '⚖️ 考選部與考試院', desc: '試題檢索 · 命題大綱 · 報名系統' },
  { id: 'skills-cert', label: '🛠️ 國家技術士檢定', desc: '建築製圖 · 工程測量乙丙級' },
  { id: 'official-exam', label: '📐 統測官方考綱', desc: '06土建考綱 · 116自主選考' },
  { id: 'open-solutions', label: '📚 學校題解與研究', desc: '歷屆詳解 · 題型拆解' },
];

export default function ResourcesPage() {
  const totalResourceCount = groups.reduce((sum, group) => sum + group.resources.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Header Banner */}
      <header className="overflow-hidden rounded-3xl border border-blue-200/50 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-14">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/60 px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            National Professional Qualification Directory
          </span>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3 py-1 text-xs font-bold text-emerald-300">
            考選部 · 考試院 · 公會權威一級來源
          </span>
        </div>

        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-6xl text-white">
          資格考試資源彙整
        </h1>
        
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
          一站式彙整考選部專門職業及技術人員高等考試（<strong>建築師</strong>、<strong>結構工程技師</strong>、<strong>土木工程技師</strong>）、考試院、行政院公共工程委員會、國家地震工程研究中心、各大法定技師公會、勞動部技術士技能檢定與技專校院統測官方考綱。
        </p>

        <div className="mt-7 flex flex-wrap gap-3 text-xs font-bold">
          <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur">
            {totalResourceCount} 個已核實官方與專業資源
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur">
            三大專技高考證照置頂
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur">
            科別及格滾動保留 3 年
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur">
            最後查核 2026-08-21
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur">
            官方答案與最新法規優先
          </span>
        </div>
      </header>

      {/* Hero Quick Jump Cards (3 Major Professions) */}
      <section className="my-10" aria-label="三大國家專技證照導航">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">
              🏛️ 建築與土木三大國家專門職業及技術人員證照
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              從高工建築科延伸至大學與執業，點擊可直接跳轉至考選部大綱、公會權威與試題庫專區
            </p>
          </div>
          <Link
            href="/goals"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            查看終極目標證照地圖 →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="#architect-exam"
            className="group relative flex flex-col justify-between rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50/80 to-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-md dark:border-purple-900/50 dark:from-purple-950/30 dark:to-slate-900"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-purple-100 p-2 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300">
                  <DraftingCompassIcon className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-purple-300 bg-purple-100/70 px-2 py-0.5 font-mono text-[11px] font-bold text-purple-800 dark:border-purple-700 dark:bg-purple-950 dark:text-purple-200">
                  專技高考
                </span>
              </div>
              <h3 className="mt-3 font-serif text-xl font-bold text-purple-950 dark:text-purple-100 group-hover:text-purple-600">
                建築師 (Architect)
              </h3>
              <p className="mt-2 text-xs leading-5 text-purple-900/80 dark:text-purple-300/90">
                空間、法規、構造與環境整合。6 科滾動及格制（保留 3 年）。
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-purple-100 pt-3 text-xs font-bold text-purple-700 dark:border-purple-900/40 dark:text-purple-300">
              <span>考選部大綱 · 歷屆題 · 全國公會</span>
              <span className="transition-transform group-hover:translate-x-1">↓</span>
            </div>
          </a>

          <a
            href="#structural-exam"
            className="group relative flex flex-col justify-between rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/80 to-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-400 hover:shadow-md dark:border-teal-900/50 dark:from-teal-950/30 dark:to-slate-900"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-teal-100 p-2 text-teal-700 dark:bg-teal-900/60 dark:text-teal-300">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-teal-300 bg-teal-100/70 px-2 py-0.5 font-mono text-[11px] font-bold text-teal-800 dark:border-teal-700 dark:bg-teal-950 dark:text-teal-200">
                  專技高考
                </span>
              </div>
              <h3 className="mt-3 font-serif text-xl font-bold text-teal-950 dark:text-teal-100 group-hover:text-teal-600">
                結構工程技師 (Structural)
              </h3>
              <p className="mt-2 text-xs leading-5 text-teal-900/80 dark:text-teal-300/90">
                骨架承載、耐震分析與動力計算。掌握大樓與橋梁生命安全。
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-teal-100 pt-3 text-xs font-bold text-teal-700 dark:border-teal-900/40 dark:text-teal-300">
              <span>考選部大綱 · 結構公會 · 國震中心</span>
              <span className="transition-transform group-hover:translate-x-1">↓</span>
            </div>
          </a>

          <a
            href="#civil-exam"
            className="group relative flex flex-col justify-between rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/80 to-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md dark:border-blue-900/50 dark:from-blue-950/30 dark:to-slate-900"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-blue-100 p-2 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                  <HardHat className="h-5 w-5" />
                </span>
                <span className="rounded-full border border-blue-300 bg-blue-100/70 px-2 py-0.5 font-mono text-[11px] font-bold text-blue-800 dark:border-blue-700 dark:bg-blue-950 dark:text-blue-200">
                  專技高考
                </span>
              </div>
              <h3 className="mt-3 font-serif text-xl font-bold text-blue-950 dark:text-blue-100 group-hover:text-blue-600">
                土木工程技師 (Civil)
              </h3>
              <p className="mt-2 text-xs leading-5 text-blue-900/80 dark:text-blue-300/90">
                結構、大地、測量、施工法與營管。國家基礎建設總樞紐。
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-blue-100 pt-3 text-xs font-bold text-blue-700 dark:border-blue-900/40 dark:text-blue-300">
              <span>考選部大綱 · 技師報 · 工程會</span>
              <span className="transition-transform group-hover:translate-x-1">↓</span>
            </div>
          </a>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav
        aria-label="資源分類快速導航"
        className="sticky top-16 z-30 -mx-4 my-8 flex gap-2 overflow-x-auto border-y border-slate-200 bg-slate-50/95 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 sm:mx-0 sm:rounded-2xl sm:border sm:px-3"
      >
        {topNavBadges.map((badge) => (
          <a
            key={badge.id}
            href={`#${badge.id}`}
            className="shrink-0 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:border-blue-500 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {badge.label}
          </a>
        ))}
      </nav>

      {/* Core Principle Alert */}
      <aside className="mb-10 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-7 text-amber-950 shadow-sm dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
        <div className="flex items-start gap-3">
          <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 dark:text-amber-400" />
          <div>
            <strong className="font-bold">國家考試與資格證照查核原則：</strong>
            第三方解析或坊間講義可用於理解解題邏輯與結構破壞思路，但<strong>不能取代考選部、考試院與測驗中心公告之標準答案、最新法規修正與正式命題大綱</strong>。建築技術規則與耐震規範時有更新，研讀歷屆考古題時務必回官方最新公報核對條文。
          </div>
        </div>
      </aside>

      {/* Resource Sections */}
      <div className="space-y-16">
        {groups.map((group) => (
          <section
            key={group.id}
            id={group.id}
            className="scroll-mt-24"
            aria-labelledby={`${group.id}-title`}
          >
            <div className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2
                  id={`${group.id}-title`}
                  className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white"
                >
                  {group.title}
                </h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {group.resources.length} 個已查核項目
                </span>
              </div>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                {group.description}
              </p>
              {group.highlight && (
                <div className="mt-2 inline-block rounded-lg bg-blue-50/70 px-3 py-1.5 text-xs font-bold text-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
                  📌 {group.highlight}
                </div>
              )}
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {group.resources.map((resource) => (
                <article
                  key={resource.url}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-6"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${levelStyles[resource.level]}`}
                      >
                        {resource.level}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {resource.subjects}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-xl font-bold text-slate-950 dark:text-white leading-snug">
                      {resource.title}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-blue-700 dark:text-blue-300">
                      主管／提供單位：{resource.provider}
                    </p>
                    <p className="mt-3.5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                      {resource.description}
                    </p>

                    <div className="mt-4 rounded-xl bg-slate-50 p-4 text-xs leading-6 text-slate-600 dark:bg-slate-800/70 dark:text-slate-300 border border-slate-100 dark:border-slate-800">
                      <strong className="text-slate-900 dark:text-white">建議用法：</strong>
                      {resource.howToUse}
                      {resource.note && (
                        <p className="mt-1 text-amber-700 dark:text-amber-300">
                          注意：{resource.note}
                        </p>
                      )}
                    </div>
                  </div>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-11 items-center justify-center gap-1.5 self-start rounded-xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition"
                  >
                    <span>開啟官方資源</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Suggested 4-Step Learning Workflow */}
      <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-100 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h2 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">
            從技職奠基到國家專技高考的 4 階段研讀路徑
          </h2>
        </div>
        <ol className="mt-5 grid gap-4 text-sm leading-6 text-slate-700 dark:text-slate-300 md:grid-cols-4">
          <li className="rounded-xl bg-white p-4 dark:bg-slate-800 shadow-sm border border-slate-200/60 dark:border-slate-700/60">
            <strong className="block font-serif text-base text-blue-700 dark:text-blue-300 mb-1">
              1．高工基礎與技術士
            </strong>
            扎實掌握工程力學、材料試驗、工程測量與建築製圖規範，取得建築製圖應用與工程測量丙級/乙級技術士。
          </li>
          <li className="rounded-xl bg-white p-4 dark:bg-slate-800 shadow-sm border border-slate-200/60 dark:border-slate-700/60">
            <strong className="block font-serif text-base text-blue-700 dark:text-blue-300 mb-1">
              2．四技二專統測驗收
            </strong>
            以 TCTE 官方 06 土木與建築群考綱為範圍，限時刷題並在 Arch 知識頁深究公式推導，確保滿分觀念無死角。
          </li>
          <li className="rounded-xl bg-white p-4 dark:bg-slate-800 shadow-sm border border-slate-200/60 dark:border-slate-700/60">
            <strong className="block font-serif text-base text-blue-700 dark:text-blue-300 mb-1">
              3．大學專科修課審查
            </strong>
            對照考選部建築師或技師指定學分（建築設計 18 學分、結構動力、大地工程等指定必修），提早完成報考資格審定。
          </li>
          <li className="rounded-xl bg-white p-4 dark:bg-slate-800 shadow-sm border border-slate-200/60 dark:border-slate-700/60">
            <strong className="block font-serif text-base text-blue-700 dark:text-blue-300 mb-1">
              4．專技高考滾動攻頂
            </strong>
            善用考選部歷屆試題與公會「技師報」，以「滾動式科別及格制（保留 3 年）」逐科攻克，取得國家建築師與專業技師執照。
          </li>
        </ol>
      </section>
    </div>
  );
}

function DraftingCompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="2" />
      <path d="m3.5 21 8-14" />
      <path d="m20.5 21-8-14" />
      <path d="M5.5 15.5h13" />
    </svg>
  );
}
