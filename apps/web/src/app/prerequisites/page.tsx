'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  ArrowLeft,
  BookMarked,
  Lightbulb,
  Printer
} from 'lucide-react';

export default function PrerequisitesHubPage() {
  const englishPrerequisites = [
    {
      id: 'vocab-1200',
      title: '國中基礎 1200 單字',
      enTitle: 'Junior High Core 1200 Vocabulary',
      desc: '國中會考 C 級無痛逆襲必備！12 大生活與校園實用情境分類，全單字美式真人發音、自然發音拆音節技巧與直覺隨堂測驗。',
      href: '/prerequisites/english/vocab-1200',
      tag: '單字基礎',
      tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
      border: 'hover:border-amber-400 dark:hover:border-amber-500',
      icon: '📖',
      stats: '12 大主題 · 100% 真人發音 · 互動檢測'
    },
    {
      id: 'basic-tenses-passive',
      title: '基本時態與被動語態',
      enTitle: 'Basic Tenses & Passive Voice',
      desc: '現在簡單式、進行式、過去式、未來式、現在完成式（since/for）與被動語態（be + p.p.）全景時間軸圖解與易錯地雷解析。',
      href: '/prerequisites/english/basic-tenses-passive',
      tag: '動詞核心',
      tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      border: 'hover:border-blue-400 dark:hover:border-blue-500',
      icon: '⏰',
      stats: '6 大時態模組 · 時間軸圖解 · 100% 發音'
    },
    {
      id: 'complex-sentences',
      title: '主從複合句型與連接詞',
      enTitle: 'Complex & Compound Sentences',
      desc: '對等連接詞 (and/but/or/so)、從屬副詞子句 (because/although/if/when)、名詞子句 that 與初階關係代名詞 (who/which) 積木拆解法。',
      href: '/prerequisites/english/complex-sentences',
      tag: '句構進階',
      tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800',
      border: 'hover:border-purple-400 dark:hover:border-purple-500',
      icon: '🧩',
      stats: '4 大句型支柱 · 積木圖解 · 扣分地雷剖析'
    },
    {
      id: 'parts-of-speech',
      title: '基本八大詞性觀念',
      enTitle: 'The 8 Parts of Speech & Sentence Architecture',
      desc: '為什麼單字看懂了克漏字依然頻繁失分？5 分鐘搞懂「句子積木列車」！掌握名詞、動詞、形容詞、副詞位置與統測高頻字尾秒殺技巧。',
      href: '/prerequisites/english/parts-of-speech',
      tag: '詞性架構',
      tagColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
      border: 'hover:border-indigo-400 dark:hover:border-indigo-500',
      icon: '🧱',
      stats: '8 大詞性 · 句子積木圖 · 字尾秒殺表 · 實戰題庫'
    },
    {
      id: 'phonetics-dictionary',
      title: '英文字典音標與詞條查閱能力',
      enTitle: 'KK Phonetic Symbols & Dictionary Entry Lookup',
      desc: '擺脫字母死背地獄！完整 38+ KK 音標聲音互動板、名詞動詞重音轉移口訣，以及 [C], [U], [T], [I] 權威字典密碼解讀 SOP。',
      href: '/prerequisites/english/phonetics-dictionary',
      tag: '終身自學外掛',
      tagColor: 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800',
      border: 'hover:border-teal-400 dark:hover:border-teal-500',
      icon: '🔊',
      stats: '38+ KK 音標 · 聲音互動板 · 字典解密 SOP'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/subjects/english"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            <ArrowLeft className="size-4" /> 返回技高統測英文
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 px-3 py-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="以 A4 紙本格式列印或另存為 PDF"
            >
              <Printer className="size-3.5 text-slate-600 dark:text-slate-300" />
              <span>列印跳板總表 (A4)</span>
            </button>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              <Sparkles className="size-3.5" /> 零痛先備跨領域跳板
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
            如果在閱讀任何單元時感到吃力，90% 的原因在於先備常識尚未形成直覺反射。
            利用專門研發的 5~10 分鐘零痛跳板，建立直覺大腦迴路，無痛攻克統測核心！
          </p>
        </div>

        {/* English Prerequisites Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🇬🇧</span>
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  技高統測共同科目：英文先備五大核心支柱 (含 1200 單字、基本時態、被動語態與複合句型)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  對應統測英文各單元 Step-0 標籤與「其實你不是從零開始」，點擊直接展開沈浸式微教學
                </p>
              </div>
            </div>
            <Link
              href="/subjects/english"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              進入英文學科主頁 <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {englishPrerequisites.map((card) => (
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
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${card.tagColor}`}>
                      {card.tag}
                    </span>
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
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px] font-mono">
                    {card.stats}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                    進入學習 <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Philosophy Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200/80 dark:border-amber-900/60 space-y-4">
          <div className="flex items-center gap-2.5 text-amber-900 dark:text-amber-200 font-extrabold text-base">
            <Lightbulb className="size-5 text-amber-600 dark:text-amber-400" />
            <span>為什麼需要 Step-0 先備跳板？（教育專家與名師設計理念）</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/60 space-y-1">
              <div className="font-bold text-amber-800 dark:text-amber-300">1. 零挫折起步</div>
              <p>傳統教材常預設學生已經精通所有國中內容。Step-0 拆解最關鍵的先備微技能，不再讓基礎不足成為放棄學習的理由。</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/60 space-y-1">
              <div className="font-bold text-amber-800 dark:text-amber-300">2. 即時真人語音</div>
              <p>所有英文單字、例句、音標均配有瀏覽器原生即時 TTS 語音朗讀，眼到、耳到、口到，打造母語級語感反射。</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/60 space-y-1">
              <div className="font-bold text-amber-800 dark:text-amber-300">3. 隨堂回饋閉環</div>
              <p>每個先備頁面均附設 6 題名師實戰測驗，附詳細觀念剖析，確認掌握後再出發，學習成就感滿分！</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
