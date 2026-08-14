import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  ExternalLink,
  GraduationCap,
  HardHat,
  Landmark,
  Map,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '終極目標｜建築師、結構工程技師、土木工程技師',
  description: '從高工建築科出發，理解台灣建築師、結構工程技師與土木工程技師的應考資格、考科、及格制度、執業流程與學習路線。',
};

type Profession = {
  id: string;
  short: string;
  title: string;
  english: string;
  icon: typeof Building2;
  tone: string;
  oneLine: string;
  analogy: string;
  scope: string;
  eligibility: string[];
  subjects: { name: string; note?: string }[];
  examRule: string;
  afterExam: string[];
  fit: string[];
  courseLinks: { label: string; href: string }[];
};

const professions: Profession[] = [
  {
    id: 'architect',
    short: '建築師',
    title: '建築師',
    english: 'ARCHITECT',
    icon: DraftingCompass,
    tone: 'blue',
    oneLine: '把人的生活、空間、法規、構造與環境，整合成能被建造的建築。',
    analogy: '如果建築是一部電影，建築師像導演：不是每個鏡頭都親自拍，卻要讓空間、結構、設備、預算與法規一起完成同一個故事。',
    scope: '受委託辦理建築物及其實質環境的調查、測量、設計、監造、估價、檢查與鑑定，也可代辦建築許可、招標、施工契約及工程接洽。',
    eligibility: [
      '主要直達路徑：專科以上建築、建築及都市設計、建築與都市計劃相關科系畢業。',
      '建築研究所路徑：建築研究所畢業，並修習建築設計 18 學分以上。',
      '相當科系路徑：修習建築設計 18 學分以上，另在法規、結構、構造、環境、都市設計等指定學科中至少 5 科、合計 15 學分以上。',
      '科系名稱與學分採認由考選部審查；選校前應保留課程大綱與成績單，不能只看校系名稱相似。',
    ],
    subjects: [
      { name: '建築計畫與設計', note: '8 小時申論／製圖' },
      { name: '敷地計畫與都市設計', note: '4 小時申論／製圖' },
      { name: '營建法規與實務', note: '測驗題' },
      { name: '建築結構', note: '申論＋測驗' },
      { name: '建築構造與施工', note: '測驗題' },
      { name: '建築環境控制', note: '申論＋測驗' },
    ],
    examRule: '採科別及格制：每科 60 分及格；已及格科目自該次榜示日起保留 3 年，且各科分別滾動計算。保留期間內重考同科，以最後一次成績為準。',
    afterExam: [
      '六科在有效期限內全部及格，取得考試及格證書。',
      '向內政部申請建築師證書。',
      '累積二年以上建築工程經驗後，向所在地主管機關申請開業證書。',
      '完成開業登記並依規定執業；開業證書有效期間為 6 年，換發須提出研習證明。',
    ],
    fit: ['喜歡空間設計，也願意面對細節與法規', '能整合不同專業並清楚溝通', '願意長時間畫圖、推敲與修正'],
    courseLinks: [
      { label: '製圖實習', href: '/subjects/drafting' },
      { label: '工程力學', href: '/subjects/mechanics' },
      { label: '材料與試驗', href: '/subjects/materials' },
      { label: '建築延伸', href: '/subjects/extensions' },
    ],
  },
  {
    id: 'structural',
    short: '結構技師',
    title: '結構工程技師',
    english: 'STRUCTURAL ENGINEER',
    icon: ShieldCheck,
    tone: 'teal',
    oneLine: '把風、地震與重量化成數字，設計出可靠的骨架與基礎。',
    analogy: '如果建築是一個人，結構技師就是研究骨骼的人：要知道力量從哪裡進來、經過哪些梁柱，最後怎麼安全傳到土地。',
    scope: '橋梁、壩、建築與道路系統等結構物及基礎的調查、規劃、設計、研究、分析、評價、鑑定、施工、監造與養護。',
    eligibility: [
      '主要直達路徑：專科以上土木工程、結構相關科系畢業。',
      '相當科系路徑：在材料力學、結構學、鋼筋混凝土、鋼結構、結構動力、基礎工程等指定學科中至少 7 科、合計 20 學分以上。',
      '相當科系的指定必備內容包含基礎工程、結構學、結構動力學、結構矩陣分析。',
      '實際採認仍由考選部依畢業證書、成績單與課程內容審查。',
    ],
    subjects: [
      { name: '材料力學' },
      { name: '結構學' },
      { name: '鋼筋混凝土設計與預力混凝土設計' },
      { name: '鋼結構設計' },
      { name: '土壤力學與基礎設計' },
      { name: '結構動力分析與耐震設計' },
    ],
    examRule: '六科均為申論式。各科平均滿 60 分為及格；若及格人數未達全程到考人數 16%，依法按總成績排序調整，但須總成績達 50 分且沒有任一科零分。缺考視為零分。',
    afterExam: [
      '考試及格後，由考試院發給考試及格證書。',
      '向公共工程委員會登記並請領技師證書。',
      '取得該科二年以上服務年資，再申請技師執業執照。',
      '依技師事務所、工程技術顧問機構，或依法須聘技師的機構等法定方式執業；執業執照有效期間為 6 年。',
    ],
    fit: ['喜歡追問「為什麼不會倒」', '享受數學、力學與模型驗證', '重視安全、證據與計算責任'],
    courseLinks: [
      { label: '工程力學', href: '/subjects/mechanics' },
      { label: '材料與試驗', href: '/subjects/materials' },
      { label: '數學 C', href: '/subjects/math-c' },
      { label: '物理', href: '/subjects/physics' },
    ],
  },
  {
    id: 'civil',
    short: '土木技師',
    title: '土木工程技師',
    english: 'CIVIL ENGINEER',
    icon: HardHat,
    tone: 'amber',
    oneLine: '把道路、橋梁、工地、地盤與工程管理，變成城市能長久運作的基礎。',
    analogy: '如果城市是一個大型樂園，土木技師不只設計一座設施，而是同時關心道路、橋梁、排水、土地、施工順序與維護，讓整個系統真的能運轉。',
    scope: '涵蓋混凝土、鋼架、隧道、橋梁、道路、鐵路、港灣、機場、土方、地盤、基礎、土地開發、防洪、灌溉、施工、監造、養護及營建管理等廣泛土木工程。建築物結構的規劃、設計、研究與分析，原則限高度 36 公尺以下。',
    eligibility: [
      '主要直達路徑：專科以上土木工程、營建工程相關科系畢業。',
      '相當科系路徑：在材料力學、結構、測量、土壤、材料、水利、運輸、施工、管理等指定學科中至少 7 科、合計 20 學分以上。',
      '相當科系的指定必備內容包含結構學、測量學、土壤力學、工程材料。',
      '選大專科系時，應同時核對系名與實際學分，不要假設「建築相關」都能直接報考。',
    ],
    subjects: [
      { name: '結構分析', note: '含材料力學與結構學' },
      { name: '結構設計', note: '含鋼筋混凝土與鋼結構' },
      { name: '大地工程學', note: '含土壤、基礎與工程地質' },
      { name: '工程測量', note: '含平面與施工測量' },
      { name: '施工法', note: '含土木、建築施工與材料' },
      { name: '營建管理' },
    ],
    examRule: '六科均為申論式。各科平均滿 60 分為及格；若及格人數未達全程到考人數 16%，依法按總成績排序調整，但須總成績達 50 分且沒有任一科零分。缺考視為零分。',
    afterExam: [
      '考試及格後，由考試院發給考試及格證書。',
      '向公共工程委員會登記並請領技師證書。',
      '取得該科二年以上服務年資，再申請技師執業執照。',
      '依法定方式執業並持續接受專業訓練；執業執照有效期間為 6 年。',
    ],
    fit: ['喜歡把設計落實到工地與城市', '願意跨結構、測量、土壤與管理', '擅長協調現場條件與工程進度'],
    courseLinks: [
      { label: '工程力學', href: '/subjects/mechanics' },
      { label: '材料與試驗', href: '/subjects/materials' },
      { label: '測量實習', href: '/subjects/surveying' },
      { label: '製圖實習', href: '/subjects/drafting' },
    ],
  },
];

const officialSources = [
  { label: '115 年建築師、技師考試專區', org: '考選部', href: 'https://wwwc.moex.gov.tw/Main/Exam/wFrmExamDetail.aspx?c=115180', use: '當年度報名、日期、簡章與考科表' },
  { label: '建築師、技師考試應考須知', org: '考選部', href: 'https://wwwc.moex.gov.tw/Main/exam/../../main/controls/wHandEditorExtend_File.ashx?Fun=Property&file_id=20509&item_id=7970&menu_id=335', use: '應考資格、及格標準與題型' },
  { label: '技師考試規則（115.03.30）', org: '考選部', href: 'https://wwwc.moex.gov.tw/main/controls/wHandEditorExtend_File.ashx?Fun=Menu&file_id=1664&item_id=235&menu_id=235', use: '兩類科技師的完整資格與六科名稱' },
  { label: '建築師法', org: '內政部國土管理署', href: 'https://www.nlma.gov.tw/ch/legislation/regsearch/183', use: '建築師開業條件、業務與責任' },
  { label: '技師法', org: '公共工程委員會', href: 'https://www.pcc.gov.tw/content/index?eid=2708&type=C', use: '技師證書、年資、執照與執業方式' },
  { label: '各科技師執業範圍', org: '公共工程委員會', href: 'https://www.pcc.gov.tw/content/index?eid=2704&type=C', use: '土木與結構工程技師法定工作邊界' },
  { label: '技師證照申請', org: '公共工程委員會', href: 'https://www.pcc.gov.tw/content/cp.aspx?n=E8F1E8874A083F47', use: '實際請領、換發與應備文件' },
];

const toneClasses: Record<string, { top: string; icon: string; soft: string; border: string }> = {
  blue: { top: 'bg-blue-700', icon: 'text-blue-700 dark:text-blue-300', soft: 'bg-blue-50 dark:bg-blue-950/35', border: 'border-blue-200 dark:border-blue-800' },
  teal: { top: 'bg-teal-600', icon: 'text-teal-700 dark:text-teal-300', soft: 'bg-teal-50 dark:bg-teal-950/35', border: 'border-teal-200 dark:border-teal-800' },
  amber: { top: 'bg-amber-600', icon: 'text-amber-700 dark:text-amber-300', soft: 'bg-amber-50 dark:bg-amber-950/35', border: 'border-amber-200 dark:border-amber-800' },
};

function SectionTitle({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="v7-kicker">{kicker}</p>
      <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{copy}</p>}
    </div>
  );
}

export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 dark:bg-[#071720] dark:text-slate-100">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f4f1e9] dark:border-slate-800 dark:bg-[#0c202c]">
        <div className="v7-measure" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-[1.12fr_.88fr]">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[.16em]">
                <span className="rounded-full bg-[#b93f2f] px-3 py-1.5 text-white">終極目標</span>
                <span className="text-slate-600 dark:text-slate-300">PROFESSIONAL LICENSE ROADMAP</span>
              </div>
              <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,7vw,6.2rem)] font-bold leading-[1.08] tracking-[-.055em] text-slate-950 dark:text-white sm:leading-[1.02]">
                今天學的每一章，<span className="v7-outline-text mt-2 block sm:mt-3">通往哪一張證照？</span>
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-700 dark:text-slate-200 sm:text-lg">
                建築師、結構工程技師、土木工程技師不是三個模糊的「工程工作」，而是三套不同的國家考試與專業責任。先看懂全貌，再決定未來的大專科系與學習深度。
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8">
              <p className="font-mono text-[10px] tracking-[.2em] text-cyan-300">FIRST, KNOW THE NAME</p>
              <h2 className="mt-3 font-serif text-2xl font-bold">這不是「公務人員高考」</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                三者皆屬「專門職業及技術人員高等考試」。考試及格是取得專業資格的起點；若要依法對外執業，還要完成主管機關的領證、年資與開業／執業登記。
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/15 pt-5 text-center">
                {professions.map(({ short, icon: Icon }) => <div key={short}><Icon className="mx-auto size-5 text-cyan-300" /><strong className="mt-2 block text-xs">{short}</strong></div>)}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-3 text-xs text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/60"><ClipboardCheck className="size-4" />資料查核：2026-08-14</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/60"><Landmark className="size-4" />考選部、內政部國土署、工程會</span>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div className="flex gap-3">
              <CalendarDays className="mt-1 size-6 shrink-0 text-[#b93f2f]" />
              <div><p className="font-serif text-xl font-bold text-slate-950 dark:text-white">115 年考試現況</p><p className="mt-1 text-xs leading-6 text-slate-500 dark:text-slate-400">已依考選部 115/07/30 更新資料核對；年度日期每年會改變。</p></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800"><p className="font-mono text-[10px] font-bold tracking-wider text-slate-500 dark:text-slate-400">報名</p><p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">8/4–8/13 · 已截止</p></div>
              <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/40"><p className="font-mono text-[10px] font-bold tracking-wider text-blue-700 dark:text-blue-300">建築師</p><p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">11/14–11/16</p></div>
              <div className="rounded-xl bg-teal-50 p-4 dark:bg-teal-950/40"><p className="font-mono text-[10px] font-bold tracking-wider text-teal-700 dark:text-teal-300">土木／結構技師</p><p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">11/14–11/15</p></div>
            </div>
          </div>
          <a href="https://wwwc.moex.gov.tw/Main/Exam/wFrmExamDetail.aspx?c=115180" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100">查看考區、簡章與最新公告 <ExternalLink className="size-3.5" /></a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionTitle kicker="THREE PROFESSIONS" title="先用一句話，分清楚三條路" copy="同一棟建築會需要三種專業合作；差別不在誰比較厲害，而在誰對哪一類決策負最後的專業責任。" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {professions.map(({ icon: Icon, ...profession }) => {
            const tone = toneClasses[profession.tone];
            return (
              <a key={profession.id} href={`#${profession.id}`} className={`group relative overflow-hidden rounded-[1.75rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:bg-slate-900 sm:p-8 ${tone.border}`}>
                <span className={`absolute inset-x-0 top-0 h-1.5 ${tone.top}`} />
                <div className="flex items-start justify-between gap-4"><Icon className={`size-10 ${tone.icon}`} strokeWidth={1.5} /><span className="font-mono text-[10px] tracking-widest text-slate-400">{profession.english}</span></div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-slate-950 dark:text-white">{profession.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-800 dark:text-slate-200">{profession.oneLine}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{profession.analogy}</p>
                <span className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${tone.icon}`}>查看完整路徑 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/65 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionTitle kicker="COMPARE AT A GLANCE" title="同一個工程，三種視角" />
          <div className="mobile-scroll mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
            <table className="min-w-[800px] w-full text-left text-sm">
              <thead className="bg-slate-950 text-white"><tr><th className="p-5">比較</th><th className="p-5">建築師</th><th className="p-5">結構工程技師</th><th className="p-5">土木工程技師</th></tr></thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr><th className="p-5 text-slate-900 dark:text-white">核心問題</th><td className="p-5 text-slate-600 dark:text-slate-300">人如何安全、舒適地使用空間？</td><td className="p-5 text-slate-600 dark:text-slate-300">骨架如何承受重量、風與地震？</td><td className="p-5 text-slate-600 dark:text-slate-300">工程如何從地盤、設計到施工運作？</td></tr>
                <tr><th className="p-5 text-slate-900 dark:text-white">代表成果</th><td className="p-5 text-slate-600 dark:text-slate-300">建築與敷地設計圖、監造</td><td className="p-5 text-slate-600 dark:text-slate-300">結構計算、耐震設計與鑑定</td><td className="p-5 text-slate-600 dark:text-slate-300">橋路、基礎、施工、測量與管理</td></tr>
                <tr><th className="p-5 text-slate-900 dark:text-white">考試特色</th><td className="p-5 text-slate-600 dark:text-slate-300">設計製圖＋法規＋技術整合</td><td className="p-5 text-slate-600 dark:text-slate-300">高強度力學與結構設計申論</td><td className="p-5 text-slate-600 dark:text-slate-300">結構、大地、測量、施工、管理申論</td></tr>
                <tr><th className="p-5 text-slate-900 dark:text-white">最適合先累積</th><td className="p-5 text-slate-600 dark:text-slate-300">設計觀察、製圖、構造與表達</td><td className="p-5 text-slate-600 dark:text-slate-300">數學、物理、力學與驗算習慣</td><td className="p-5 text-slate-600 dark:text-slate-300">力學、測量、材料與現場理解</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <main>
        {professions.map(({ icon: Icon, ...profession }, index) => {
          const tone = toneClasses[profession.tone];
          return (
            <section id={profession.id} key={profession.id} className={`scroll-mt-24 ${index < professions.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''}`}>
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
                  <div className="lg:sticky lg:top-24 lg:self-start">
                    <div className={`inline-flex size-14 items-center justify-center rounded-2xl ${tone.soft} ${tone.icon}`}><Icon className="size-7" /></div>
                    <p className="mt-6 font-mono text-[10px] font-bold tracking-[.2em] text-slate-500">0{index + 1} / {profession.english}</p>
                    <h2 className="mt-2 font-serif text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">{profession.title}</h2>
                    <p className="mt-5 text-base font-semibold leading-8 text-slate-800 dark:text-slate-200">{profession.oneLine}</p>
                    <div className={`mt-7 rounded-2xl border p-5 ${tone.soft} ${tone.border}`}>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">法定工作範圍，用白話讀</p>
                      <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{profession.scope}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 sm:p-8">
                      <div className="flex items-center gap-3"><GraduationCap className={`size-6 ${tone.icon}`} /><h3 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">誰可以報考？</h3></div>
                      <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">以下是給學生規劃用的重點摘要，不取代考選部個案資格審查。</p>
                      <ul className="mt-5 space-y-3">
                        {profession.eligibility.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-300"><CheckCircle2 className={`mt-1 size-4 shrink-0 ${tone.icon}`} />{item}</li>)}
                      </ul>
                    </article>

                    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 sm:p-8">
                      <div className="flex items-center gap-3"><BookOpenCheck className={`size-6 ${tone.icon}`} /><h3 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">要考哪些科目？</h3></div>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {profession.subjects.map((subject, subjectIndex) => (
                          <div key={subject.name} className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                            <span className={`font-mono text-xs font-bold ${tone.icon}`}>{String(subjectIndex + 1).padStart(2, '0')}</span>
                            <div><p className="text-sm font-bold text-slate-900 dark:text-white">{subject.name}</p>{subject.note && <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{subject.note}</p>}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 rounded-xl border-l-4 border-[#b93f2f] bg-[#fff4f1] p-4 dark:bg-[#351c1a]">
                        <p className="text-sm font-bold text-slate-950 dark:text-white">及格方式</p><p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{profession.examRule}</p>
                      </div>
                    </article>

                    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 sm:p-8">
                      <div className="flex items-center gap-3"><Route className={`size-6 ${tone.icon}`} /><h3 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">考過之後，還有哪幾步？</h3></div>
                      <ol className="mt-6 space-y-0">
                        {profession.afterExam.map((step, stepIndex) => (
                          <li key={step} className="grid grid-cols-[2.25rem_1fr] gap-3">
                            <div className="flex flex-col items-center"><span className={`flex size-8 items-center justify-center rounded-full text-xs font-bold text-white ${tone.top}`}>{stepIndex + 1}</span>{stepIndex < profession.afterExam.length - 1 && <span className="h-full min-h-10 w-px bg-slate-300 dark:bg-slate-700" />}</div>
                            <p className="pb-6 text-sm leading-7 text-slate-700 dark:text-slate-300">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </article>

                    <div className="grid gap-5 md:grid-cols-2">
                      <article className={`rounded-[1.75rem] border p-6 ${tone.soft} ${tone.border}`}>
                        <div className="flex items-center gap-3"><Sparkles className={`size-5 ${tone.icon}`} /><h3 className="font-serif text-xl font-bold text-slate-950 dark:text-white">你可能適合，如果…</h3></div>
                        <ul className="mt-4 space-y-3">{profession.fit.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"><CheckCircle2 className={`mt-1 size-4 shrink-0 ${tone.icon}`} />{item}</li>)}</ul>
                      </article>
                      <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
                        <div className="flex items-center gap-3"><Map className={`size-5 ${tone.icon}`} /><h3 className="font-serif text-xl font-bold text-slate-950 dark:text-white">現在就能打的地基</h3></div>
                        <div className="mt-4 flex flex-wrap gap-2">{profession.courseLinks.map((course) => <Link key={course.href} href={course.href} className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-blue-500 hover:text-blue-700 dark:border-slate-600 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300">{course.label}<ArrowRight className="size-3" /></Link>)}</div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      <section className="border-y border-slate-200 bg-slate-100/65 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionTitle kicker="FROM TODAY TO LICENSE" title="現在不用選死，先建立共同底座" copy="三條路在高中階段有很大的交集。真正需要做的，是讓每次升學選擇都保留下一階段的資格。" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', '高中現在', '學好力學、材料、測量、製圖；用案例確認自己更喜歡空間、結構或工程現場。'],
              ['02', '選大專科系', '先查考選部應考資格，再比較校系課程；不要只看學校名稱或招生文宣。'],
              ['03', '大學期間', '保存歷年成績單與課程大綱，建立設計／計算／現場作品，逐年補齊指定學分。'],
              ['04', '畢業之後', '依當年度簡章報考；及格後再完成領證、實務年資、開業或執業登記。'],
            ].map(([number, title, copy]) => <article key={number} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"><span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300">{number}</span><h3 className="mt-5 font-serif text-xl font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{copy}</p></article>)}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-amber-300 bg-amber-50 p-5 dark:border-amber-700 dark:bg-amber-950/30 sm:flex-row sm:items-center">
            <div className="flex gap-3"><Scale className="mt-1 size-5 shrink-0 text-amber-700 dark:text-amber-300" /><div><p className="font-bold text-slate-950 dark:text-white">最重要的選校檢查</p><p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300">把想報考的職業名稱、學校科系、預計修課表三者一起交叉比對。若科系不在直接採認名單，就要逐科確認指定學分。</p></div></div>
            <a href="https://wwwc.moex.gov.tw/Main/exam/qual/wfrmExamQual.aspx?menu_id=153" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-700 px-5 py-3 text-sm font-bold text-white hover:bg-amber-800">查應考資格 <ExternalLink className="size-4" /></a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SectionTitle kicker="MYTH CHECK" title="三個最容易誤會的地方" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            ['考過就能馬上開業？', '不是。考試及格後還要請領專業證書；建築師與技師都另有二年以上相關經驗與開業／執業證照程序。'],
            ['建築科畢業就一定能報？', '高中建築科是很好的起點，但三項都是專科以上學歷路徑。大專校系名稱與指定學分仍要符合考選部規則。'],
            ['土木與結構做的事一樣？', '有交集但責任範圍不同。結構技師集中在結構物與基礎；土木技師跨道路、橋梁、地盤、施工、測量與管理，建築結構設計另有高度限制。'],
          ].map(([question, answer]) => <article key={question} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 sm:p-8"><Target className="size-6 text-[#b93f2f]" /><h3 className="mt-5 font-serif text-xl font-bold text-slate-950 dark:text-white">{question}</h3><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{answer}</p></article>)}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 text-white dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[.2em] text-cyan-300">OFFICIAL SOURCES</p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">所有關鍵結論，都回到官方。</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">法規、考期與表件可能更新。本站協助你讀懂制度；實際報名前，仍須以當年度應考須知與主管機關審查結果為準。</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {officialSources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="group rounded-xl border border-white/15 bg-white/5 p-4 transition hover:border-cyan-300/60 hover:bg-white/10"><div className="flex items-start justify-between gap-3"><div><p className="text-[10px] font-bold tracking-wider text-cyan-300">{source.org}</p><h3 className="mt-1 text-sm font-bold text-white">{source.label}</h3></div><ExternalLink className="size-4 shrink-0 text-slate-400 group-hover:text-cyan-300" /></div><p className="mt-2 text-xs leading-5 text-slate-400">{source.use}</p></a>)}
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
            <div><p className="inline-flex items-center gap-2 text-sm font-bold"><BadgeCheck className="size-5 text-cyan-300" />下一步不是決定一輩子，而是先把共同基礎學紮實。</p><p className="mt-2 text-xs text-slate-400">版本 V7.3 · 資料查核日期 2026-08-14</p></div>
            <Link href="/curriculum" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:scale-[1.02]">回到課程地圖 <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
