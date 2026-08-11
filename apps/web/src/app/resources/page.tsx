import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '統測學習資源導航｜Arch V6.18',
  description: '整理四技二專統測官方制度、歷屆題、06 土木與建築群考綱、學校公開詳解與補充題型分析。',
};

interface Resource {
  title: string;
  url: string;
  provider: string;
  subjects: string;
  description: string;
  howToUse: string;
  level: '官方一級來源' | '學校／教師公開資源' | '補充解題研究' | '社群題庫';
  note?: string;
}

interface ResourceGroup {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
}

const groups: ResourceGroup[] = [
  {
    id: 'official-exam',
    title: '官方制度、簡章與歷屆題',
    description: '先用這一區確認考試規則、命題範圍與標準答案。其他網站若有衝突，一律以官方為準。',
    resources: [
      {
        title: '四技二專統測資訊總入口',
        url: 'https://www.tcte.edu.tw/index.php?mod=TVETest/info4y',
        provider: '技專校院入學測驗中心',
        subjects: '五科全適用',
        description: '集中提供重要日程、考試科目表、考科大綱、簡章與應考資訊，是查核統測事實的第一站。',
        howToUse: '每學年開始與報名前各核對一次；下載當年度簡章與考綱，不沿用補習班整理表推定規則。',
        level: '官方一級來源',
      },
      {
        title: '115 學年度官方試題與標準答案',
        url: 'https://web1.tcte.edu.tw/EXAM/115_4y/',
        provider: '技專校院入學測驗中心',
        subjects: '國文、英文、數學(C)、專一、專二',
        description: '提供各科正式題本、標準答案、疑義說明與成績統計；Arch 題庫的最終答案依據。',
        howToUse: '先限時作答，再對官方答案；錯題回到 Arch 對應知識頁，不用只背選項字母。',
        level: '官方一級來源',
      },
      {
        title: '116 統測自主選考宣導專區',
        url: 'https://www.tcte.edu.tw/index.php?mod=TVETest/SelfSelectSubject',
        provider: '技專校院入學測驗中心',
        subjects: '116 學年度選考與報名',
        description: '說明單群至少選考科數、專業科目限制、跨群規則與校系採計查詢入口。',
        howToUse: '先查目標校系採計，再決定個人優先科目；不要把「可以少考」誤讀為「平台可少教」。',
        level: '官方一級來源',
      },
      {
        title: '四技二專多元入學進路指南',
        url: 'https://www.techadmi.edu.tw/page.php?gid=967&pid=1014',
        provider: '技專校院招生策略委員會',
        subjects: '甄選、聯登與升學管道',
        description: '用較易讀的方式說明統測與四技二專各入學管道，並連回簡章及歷屆題。',
        howToUse: '用來建立升學全貌；資格、日期與採計仍回正式簡章逐條確認。',
        level: '官方一級來源',
      },
    ],
  },
  {
    id: 'official-syllabus',
    title: '06 土木與建築群考綱與課程',
    description: '用考綱逐章建立複習清單，避免只刷熱門題而漏掉製圖儀器、幾何畫法、透視或近代測繪。',
    resources: [
      {
        title: '專業科目（一）官方考試大綱',
        url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-1-range.pdf',
        provider: '技專校院入學測驗中心',
        subjects: '基礎工程力學、材料與試驗',
        description: '列出力學 13 章與材料 8 章的正式命題內容，是專一知識覆蓋的驗收表。',
        howToUse: '每完成一章就用細目反查：能否說明定義、畫圖、列式、計算並處理常見錯法。',
        level: '官方一級來源',
      },
      {
        title: '專業科目（二）官方考試大綱',
        url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-2-range.pdf',
        provider: '技專校院入學測驗中心',
        subjects: '測量實習、製圖實習',
        description: '涵蓋測量 6 章與製圖 11 章，包括儀器、誤差、雙高法、投影、輔助視圖與透視。',
        howToUse: '把細目轉成操作題與判讀題；測量要保留方向與單位，製圖要能從圖面規則排除錯項。',
        level: '官方一級來源',
      },
      {
        title: '土木與建築群課程手冊',
        url: 'https://stv.naer.edu.tw/data/course_manual/B/%E5%9C%9F%E6%9C%A8%E8%88%87%E5%BB%BA%E7%AF%89%E7%BE%A4%E8%AA%B2%E7%A8%8B%E6%89%8B%E5%86%8A%EF%BC%88111%E5%B9%B47%E6%9C%88%E6%9B%B4%E6%96%B0%EF%BC%89.pdf',
        provider: '教育部／國家教育研究院',
        subjects: '土木與建築群專業及實習課程',
        description: '提供 108 課綱學習表現、學習內容與課程架構，適合查「為什麼要學」及實作能力要求。',
        howToUse: '考綱決定統測範圍，課程手冊補足技能與素養脈絡；兩者交叉閱讀。',
        level: '官方一級來源',
      },
      {
        title: '108 課綱命題精進專區',
        url: 'https://www.tcte.edu.tw/doc/108Improve/',
        provider: '技專校院入學測驗中心',
        subjects: '命題方向與素養題',
        description: '整理新課綱考招變動、試題示例與命題說明，有助理解近年情境整合題的設計方向。',
        howToUse: '讀完概念後用示例檢查是否能將知識放入工地、圖說或數據情境，而非只記名詞。',
        level: '官方一級來源',
      },
    ],
  },
  {
    id: 'open-solutions',
    title: '學校與教師公開題解',
    description: '適合補足計算推導與歷屆練習。網站可能改版，下載後仍應保留來源與年度。',
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
    ],
  },
  {
    id: 'analysis',
    title: '補教解析與題型研究',
    description: '這一區用來學拆題順序、觀察常見陷阱，不作為官方答案或最新制度的唯一依據。',
    resources: [
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
  '官方一級來源': 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200',
  '學校／教師公開資源': 'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-200',
  '補充解題研究': 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200',
  '社群題庫': 'border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200',
};

export default function ResourcesPage() {
  const resourceCount = groups.reduce((sum, group) => sum + group.resources.length, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <header className="overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-950 via-slate-900 to-emerald-950 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">TVET Learning Resource Directory</p>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-bold leading-tight sm:text-6xl">統測學習資源導航</h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">不是連結農場，而是一條有優先順序的查證路徑：先官方制度與答案，再看考綱與課程，接著用學校公開題解練推導，最後才用補教與社群資料找不同解法。</p>
        <div className="mt-7 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">{resourceCount} 個已查核資源</span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">最後查核 2026-08-11</span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">官方答案優先</span>
        </div>
      </header>

      <nav aria-label="資源分類" className="my-8 flex flex-wrap gap-2">
        {groups.map((group) => <a key={group.id} href={`#${group.id}`} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:border-blue-500 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">{group.title}</a>)}
      </nav>

      <aside className="mb-10 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-7 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
        <strong>使用原則：</strong>第三方詳解可以教你怎麼想，但不能取代官方標準答案、正式簡章與當年度考綱。遇到內容衝突，先記錄題號與差異，再回測驗中心來源核對。
      </aside>

      <div className="space-y-14">
        {groups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-24" aria-labelledby={`${group.id}-title`}>
            <div className="mb-5">
              <h2 id={`${group.id}-title`} className="font-serif text-3xl font-bold text-slate-950 dark:text-white">{group.title}</h2>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-400">{group.description}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {group.resources.map((resource) => (
                <article key={resource.url} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${levelStyles[resource.level]}`}>{resource.level}</span>
                    <span className="text-xs font-mono text-slate-500">{resource.subjects}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-bold text-slate-950 dark:text-white">{resource.title}</h3>
                  <p className="mt-1 text-xs font-bold text-blue-700 dark:text-blue-300">提供者：{resource.provider}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">{resource.description}</p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-4 text-xs leading-6 text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">建議用法：</strong>{resource.howToUse}
                    {resource.note ? <p className="mt-1 text-amber-700 dark:text-amber-300">注意：{resource.note}</p> : null}
                  </div>
                  <a href={resource.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center self-start rounded-xl bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700">開啟資源 ↗</a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-100 p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <h2 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">建議的一次 25 分鐘使用流程</h2>
        <ol className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300 md:grid-cols-4">
          <li className="rounded-xl bg-white p-4 dark:bg-slate-800"><strong className="block text-blue-700 dark:text-blue-300">1．官方題 8 分鐘</strong>限時完成一小組題目，不先查解析。</li>
          <li className="rounded-xl bg-white p-4 dark:bg-slate-800"><strong className="block text-blue-700 dark:text-blue-300">2．Arch 回鏈 7 分鐘</strong>回知識頁定位原理與同型例題。</li>
          <li className="rounded-xl bg-white p-4 dark:bg-slate-800"><strong className="block text-blue-700 dark:text-blue-300">3．外部詳解 5 分鐘</strong>比較不同拆法，只記新增的關鍵一步。</li>
          <li className="rounded-xl bg-white p-4 dark:bg-slate-800"><strong className="block text-blue-700 dark:text-blue-300">4．閉卷重做 5 分鐘</strong>不看答案重建推導，寫入錯題回收。</li>
        </ol>
      </section>
    </div>
  );
}
