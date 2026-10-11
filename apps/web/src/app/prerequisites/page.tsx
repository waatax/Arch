'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ArrowLeft,
  BookMarked,
  Lightbulb,
  Printer,
  Search,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';

const professionalPrerequisites = [
    {
      id: 'mechanics-vectors',
      title: '向量分解與直角三角幾何',
      enTitle: 'Vector Decomposition & Right Triangle Geometry',
      category: 'professional',
      subject: '工程力學',
      desc: '力學求解最大障礙！直角三角形 3:4:5、1:2:√3 與 sin 30° / cos 60° 記憶心法，平面任意力向水平 (Fx = F cosθ) 與垂直 (Fy = F sinθ) 投影標準拆解 SOP。',
      href: '/subjects/mechanics/units-and-vectors',
      tag: '工程力學 Step-0',
      tagColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800',
      border: 'hover:border-rose-400 dark:hover:border-rose-500',
      icon: '📐',
      stats: '三角函數直覺表 · 向量投影分解 · 零力桿判別基礎',
      painPoint: '為什麼反力計算正負號總是搞反？角度不知道該代 sin 還是 cos？',
      solutionTip: '口訣：鄰邊 cos、對邊 sin；向右向上定為正，逆時針力矩定為正！',
    },
    {
      id: 'drafting-projection',
      title: '正投影展開與空間三視圖對正',
      enTitle: 'Orthographic Projection & Glass Box Unfolding',
      category: 'professional',
      subject: '建築製圖',
      desc: '空間立體感不足？透明玻璃箱展開模型拆解！搞懂「第三角法」俯視、前視、側視圖對應位置，掌握「長對正、高平齊、寬相等」九字繪圖鐵律與 CNS 剖面線圖例。',
      href: '/subjects/drafting/orthographic-projection',
      tag: '建築製圖 Step-0',
      tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      border: 'hover:border-blue-400 dark:hover:border-blue-500',
      icon: '🏛️',
      stats: '透明玻璃箱模型 · 三視圖對正鐵律 · CNS 建築圖例',
      painPoint: '看等角透視圖懂，但投影到二維平面時虛線與實線分不清？',
      solutionTip: '口訣：人在箱外看、投影在眼前；可見畫實線、遮蔽畫虛線！',
    },
    {
      id: 'surveying-angles-level',
      title: '角度六十進制與水準視線高高程',
      enTitle: 'Sexagesimal Angles & Leveling Line of Collimation',
      category: 'professional',
      subject: '測量學',
      desc: '度分秒 36°24\'18" 如何精準換算為小數度數？搞清水準儀水準尺讀數、後視 BS、前視 FS、視線高 IH 與基準面 BM 計算公式，告別閉合差與坡度混淆。',
      href: '/subjects/surveying/leveling',
      tag: '測量學 Step-0',
      tagColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
      border: 'hover:border-emerald-400 dark:hover:border-emerald-500',
      icon: '🔭',
      stats: '度分秒除60速換算 · IH 視線高法 · 水準閉合差容許值',
      painPoint: '到底什麼時候該加後視、什麼時候該減前視？',
      solutionTip: '口訣：已知高程加後視得視線高 (IH = BM + BS)；視線高減前視得未知高程 (Elev = IH - FS)！',
    },
    {
      id: 'materials-cement-hydration',
      title: '波特蘭水泥水化熱與鋼筋保護層',
      enTitle: 'Portland Cement Hydration & Rebar Cover Clearance',
      category: 'professional',
      subject: '建築材料與施工',
      desc: '矽酸三鈣 C3S（早強）vs 矽酸二鈣 C2S（晚強）水化反應化學式直覺解密！坍度筒 30cm 搗實 25 次三層試驗標準，以及梁、柱、基礎鋼筋保護層最小規定。',
      href: '/subjects/materials/cement-types',
      tag: '建築材料 Step-0',
      tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      border: 'hover:border-amber-400 dark:hover:border-amber-500',
      icon: '🧱',
      stats: '水化時間軸 · 坍度 30cm 試驗 · 鋼筋保護層防護規範',
      painPoint: '為什麼夏天灌漿要防早乾裂縫？柱接頭為什麼最容易出現爆米花蜂窩？',
      solutionTip: '口訣：水化發熱需養護、粗細骨材緊密配、保護層足防鏽蝕！',
    },
    {
      id: 'math-c-coordinate-slopes',
      title: '平面直角坐標、直線斜率與二次極值',
      enTitle: 'Cartesian Coordinates, Slopes & Parabola Extremes',
      category: 'general',
      subject: '數學 C',
      desc: '坐標斜率 m = Δy/Δx 與兩直線垂直斜率乘積等於 -1！二次配方法求頂點坐標，為簡支梁剪力彎矩圖求最大彎矩 Mmax 與跨中撓度奠定最扎實數學基石。',
      href: '/subjects/math-c/coordinate-geometry',
      tag: '數學 C Step-0',
      tagColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      border: 'hover:border-indigo-400 dark:hover:border-indigo-500',
      icon: '📈',
      stats: '坐標斜率公式 · 垂直條件 m1*m2=-1 · 配方法求彎矩極值',
      painPoint: '力學剪力為零處即為彎矩極值，看到微分公式就害怕？',
      solutionTip: '口訣：幾何剪力面積即為彎矩累積，拋物線切線斜率為零即為最大極值！',
    },
  ];

  const englishPrerequisites = [
    {
      id: 'vocab-1200',
      title: '國中基礎 1200 單字',
      enTitle: 'Junior High Core 1200 Vocabulary',
      category: 'general',
      subject: '統測英文',
      desc: '國中會考 C 級無痛逆襲必備！12 大生活與校園實用情境分類，全單字美式真人發音、自然發音拆音節技巧與直覺隨堂測驗。',
      href: '/prerequisites/english/vocab-1200',
      tag: '英文 Step-0',
      tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      border: 'hover:border-amber-400 dark:hover:border-amber-500',
      icon: '📖',
      stats: '12 大主題 · 100% 真人發音 · 互動檢測',
      painPoint: '背了後面忘了前面，看到長單字不知道怎麼發音拆音節？',
      solutionTip: '口訣：母音切音節、自然發音法；情境聯想法，單字不死背！',
    },
    {
      id: 'basic-tenses-passive',
      title: '基本時態與被動語態',
      enTitle: 'Basic Tenses & Passive Voice',
      category: 'general',
      subject: '統測英文',
      desc: '現在簡單式、進行式、過去式、未來式、現在完成式（since/for）與被動語態（be + p.p.）全景時間軸圖解與易錯地雷解析。',
      href: '/prerequisites/english/basic-tenses-passive',
      tag: '英文 Step-0',
      tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      border: 'hover:border-blue-400 dark:hover:border-blue-500',
      icon: '⏰',
      stats: '6 大時態模組 · 時間軸圖解 · 100% 發音',
      painPoint: '現在完成式到底何時用 since、何時用 for？被動語態常常漏掉 be 動詞？',
      solutionTip: '口訣：點用 since、段用 for；主詞受動加上 be，過去分詞少不了！',
    },
    {
      id: 'complex-sentences',
      title: '主從複合句型與連接詞',
      enTitle: 'Complex & Compound Sentences',
      category: 'general',
      subject: '統測英文',
      desc: '對等連接詞 (and/but/or/so)、從屬副詞子句 (because/although/if/when)、名詞子句 that 與初階關係代名詞 (who/which) 積木拆解法。',
      href: '/prerequisites/english/complex-sentences',
      tag: '英文 Step-0',
      tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      border: 'hover:border-purple-400 dark:hover:border-purple-500',
      icon: '🧩',
      stats: '4 大句型支柱 · 積木圖解 · 扣分地雷剖析',
      painPoint: '長句子又臭又長，到底哪裡是主詞、哪裡是動詞？',
      solutionTip: '口訣：一主一動為一車廂；連接詞如掛鉤，有掛鉤才能多拉一節車廂！',
    },
    {
      id: 'parts-of-speech',
      title: '基本八大詞性觀念',
      enTitle: 'The 8 Parts of Speech & Sentence Architecture',
      category: 'general',
      subject: '統測英文',
      desc: '為什麼單字看懂了克漏字依然頻繁失分？5 分鐘搞懂「句子積木列車」！掌握名詞、動詞、形容詞、副詞位置與統測高頻字尾秒殺技巧。',
      href: '/prerequisites/english/parts-of-speech',
      tag: '英文 Step-0',
      tagColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      border: 'hover:border-indigo-400 dark:hover:border-indigo-500',
      icon: '🧱',
      stats: '8 大詞性 · 句子積木圖 · 字尾秒殺表 · 實戰題庫',
      painPoint: '克漏字四個選項字長得很像，不知道該選形容詞還是副詞？',
      solutionTip: '口訣：-tion 名詞、-ate 動詞、-ful 形容詞、-ly 副詞，字尾秒殺！',
    },
    {
      id: 'phonetics-dictionary',
      title: '英文字典音標與詞條查閱能力',
      enTitle: 'KK Phonetic Symbols & Dictionary Entry Lookup',
      category: 'general',
      subject: '統測英文',
      desc: '擺脫字母死背地獄！完整 38+ KK 音標聲音互動板、名詞動詞重音轉移口訣，以及 [C], [U], [T], [I] 權威字典密碼解讀 SOP。',
      href: '/prerequisites/english/phonetics-dictionary',
      tag: '英文 Step-0',
      tagColor: 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800',
      border: 'hover:border-teal-400 dark:hover:border-teal-500',
      icon: '🔊',
      stats: '38+ KK 音標 · 聲音互動板 · 字典解密 SOP',
      painPoint: '字典裡寫 [C] 和 [U] 到底代表什麼意思？查了還是不會用？',
      solutionTip: '口訣：[C] 可數能加 s、[U] 不可數不能加 a；前名後動重音移，查字典如虎添翼！',
    },
  ];

const allPrerequisites = [...professionalPrerequisites, ...englishPrerequisites];

export default function PrerequisitesHubPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'professional' | 'general'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPrerequisites = useMemo(() => {
    return allPrerequisites.filter((item) => {
      if (activeTab === 'professional' && item.category !== 'professional') return false;
      if (activeTab === 'general' && item.category !== 'general') return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDesc = item.desc.toLowerCase().includes(q);
        const matchesSubject = item.subject.toLowerCase().includes(q);
        const matchesPain = item.painPoint.toLowerCase().includes(q);
        return matchesTitle || matchesDesc || matchesSubject || matchesPain;
      }
      return true;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            <ArrowLeft className="size-4" /> 返回三年學習地圖
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 px-3.5 py-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="以 A4 紙本格式列印或另存為 PDF"
            >
              <Printer className="size-3.5 text-slate-600 dark:text-slate-300" />
              <span>列印先備跳板手冊 (A4)</span>
            </button>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Sparkles className="size-3.5" /> 10 大零痛先備跨領域跳板
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 shadow-xl border border-indigo-500/20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
            <BookMarked className="size-3.5" /> Step-0 Prerequisites Jumpboard Center
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Step-0 零痛先備跳板中心
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            無論你現在的英文或專業基礎在哪個階段，在這裡<strong>沒有任何門檻</strong>。
            如果在閱讀工程力學、圖學、測量、材料或英文時感到吃力，90% 的原因在於國中到技高之間的關鍵先備常識尚未形成直覺反射。
            利用專門研發的 5~10 分鐘零痛跳板，建立直覺大腦神經迴路，無痛攻克統測核心！
          </p>
        </div>

        {/* Category Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
          {/* Tab Switcher */}
          <div className="flex items-center gap-2 p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              全部先備跳板 (10)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('professional')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'professional'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              專一/專二專業核心 (5)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('general')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'general'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              共同科目 (英/數C) (5)
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋先備痛點、公式或學科..."
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>
        </div>

        {/* Prerequisites Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrerequisites.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className={`group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm ${card.border} hover:shadow-lg transition-all flex flex-col justify-between space-y-4 cursor-pointer`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className="text-3xl p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                    {card.icon}
                  </span>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${card.tagColor}`}>
                      {card.tag}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {card.subject}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400">
                    {card.enTitle}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.desc}
                </p>

                {/* Pain point callout */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800 text-[11px] space-y-1">
                  <div className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                    <HelpCircle className="size-3" />
                    <span>學習常遇痛點：</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 italic">
                    {card.painPoint}
                  </p>
                  <div className="pt-1 text-emerald-700 dark:text-emerald-400 font-medium">
                    ✓ {card.solutionTip}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[10px] font-mono line-clamp-1 max-w-[180px]">
                  {card.stats}
                </span>
                <span className="inline-flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                  進入跳板 <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Philosophy Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200/80 dark:border-amber-900/60 space-y-4">
          <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-200 font-extrabold text-base">
            <Lightbulb className="size-5 text-amber-600 dark:text-amber-400" />
            <span>為什麼需要 Step-0 先備跳板？（教育心理學與名師設計理念）</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/60 space-y-1">
              <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                <CheckCircle2 className="size-3.5 text-emerald-600" />
                <span>1. 零挫折起步無痛銜接</span>
              </div>
              <p>傳統高職教科書常預設學生已經精通所有國中理化幾何與單字。Step-0 拆解關鍵微技能，不再讓基礎不足成為放棄建築夢想的藉口。</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/60 space-y-1">
              <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                <CheckCircle2 className="size-3.5 text-emerald-600" />
                <span>2. 多重表徵與直覺口訣</span>
              </div>
              <p>力學向量看三角形、空間投影看透明玻璃箱、水準測量看視線高。透過生活直覺與易記口訣，將抽象公式化為具象畫面。</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/60 space-y-1">
              <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                <CheckCircle2 className="size-3.5 text-emerald-600" />
                <span>3. 雙向回憶與閉環回饋</span>
              </div>
              <p>每個先備頁面均附設名師隨堂實戰測驗與名師思路解剖，確認掌握後一鍵跳轉核心課綱，學習成就感滿分！</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
