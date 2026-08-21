'use client';

import React, { useState } from 'react';

interface HumanitiesVisualizerProps {
  subjectSlug: string;
  topicSlug?: string;
}

export default function HumanitiesVisualizer({ subjectSlug }: HumanitiesVisualizerProps) {
  // === 1. Chinese Classical Rhythm State ===
  const [poetryType, setPoetryType] = useState<'seven-lv' | 'five-jue' | 'pianwen'>('seven-lv');
  const [showRhythmRules, setShowRhythmRules] = useState<boolean>(true);

  // === 2. English Grammar Tree State ===
  const [patternType, setPatternType] = useState<'sv' | 'svo' | 'svc' | 'svoo' | 'svoc'>('svoc');

  // === 3. Taiwan Architecture History State ===
  const [historyEra, setHistoryEra] = useState<'indigenous' | 'ming-qing' | 'japanese' | 'postwar' | 'contemporary'>('ming-qing');

  // === 4. Urban Geography Model State ===
  const [geoModel, setGeoModel] = useState<'concentric' | 'sector' | 'multinuclei' | 'bidrent'>('concentric');

  // === 5. Civic EIA & Spatial Justice State ===
  const [eiaStep, setEiaStep] = useState<number>(2);

  // --- Chinese Poetry Data ---
  const sevenLvPattern = [
    { line: 1, text: '仄仄平平仄仄平', tones: [2, 2, 1, 1, 2, 2, 1], rhyme: true, note: '首句入韻（仄起）' },
    { line: 2, text: '平平仄仄仄平平', tones: [1, 1, 2, 2, 2, 1, 1], rhyme: true, note: '對句（平仄相反，押韻）' },
    { line: 3, text: '平平仄仄平平仄', tones: [1, 1, 2, 2, 1, 1, 2], rhyme: false, note: '頷聯出句（黏：平平起）' },
    { line: 4, text: '仄仄平平仄仄平', tones: [2, 2, 1, 1, 2, 2, 1], rhyme: true, note: '頷聯對句（對仗，押韻）' },
    { line: 5, text: '仄仄平平平仄仄', tones: [2, 2, 1, 1, 1, 2, 2], rhyme: false, note: '頸聯出句（黏：仄仄起）' },
    { line: 6, text: '平平仄仄仄平平', tones: [1, 1, 2, 2, 2, 1, 1], rhyme: true, note: '頸聯對句（對仗，押韻）' },
    { line: 7, text: '平平仄仄平平仄', tones: [1, 1, 2, 2, 1, 1, 2], rhyme: false, note: '尾聯出句（黏：平平起）' },
    { line: 8, text: '仄仄平平仄仄平', tones: [2, 2, 1, 1, 2, 2, 1], rhyme: true, note: '尾聯對句（收尾押韻）' },
  ];

  // --- English Sentence Pattern Data ---
  const patterns = {
    sv: {
      name: '第 1 類：S + V (主詞 + 不及物動詞)',
      formula: 'Subject + Intransitive Verb',
      example: 'The foundation settles naturally over time.',
      breakdown: [
        { part: 'Subject (主詞)', word: 'The foundation', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200' },
        { part: 'Verb (動詞)', word: 'settles', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200' },
        { part: 'Adverbial (副詞修飾)', word: 'naturally over time', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
      ],
      examTip: '統測常考陷阱：不可受詞，若要接名詞必須加介系詞（如 listen to, wait for）。'
    },
    svo: {
      name: '第 2 類：S + V + O (主詞 + 及物動詞 + 受詞)',
      formula: 'Subject + Transitive Verb + Direct Object',
      example: 'Civil engineers calculate structural loads accurately.',
      breakdown: [
        { part: 'Subject (主詞)', word: 'Civil engineers', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200' },
        { part: 'Verb (及物動詞)', word: 'calculate', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200' },
        { part: 'Object (受詞)', word: 'structural loads', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200' },
        { part: 'Modifier (修飾語)', word: 'accurately', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
      ],
      examTip: '被動語態轉化：Structural loads are calculated by civil engineers.'
    },
    svc: {
      name: '第 3 類：S + V + C (主詞 + 連綴動詞 + 主詞補語)',
      formula: 'Subject + Linking Verb + Subject Complement',
      example: 'The reinforced concrete beam remains intact.',
      breakdown: [
        { part: 'Subject (主詞)', word: 'The RC beam', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200' },
        { part: 'Linking Verb (連綴)', word: 'remains', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200' },
        { part: 'Complement (補語)', word: 'intact (形容詞/名詞)', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200' },
      ],
      examTip: '補語說明主詞狀態，不可填副詞（常見連綴動詞：seem, appear, remain, look, sound, taste, smell, feel）。'
    },
    svoo: {
      name: '第 4 類：S + V + IO + DO (主詞 + 授與動詞 + 間接/直接受詞)',
      formula: 'Subject + Dative Verb + Indirect Object (人) + Direct Object (物)',
      example: 'The architect gave the client a sustainable blueprint.',
      breakdown: [
        { part: 'Subject (主詞)', word: 'The architect', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200' },
        { part: 'Verb (授與動詞)', word: 'gave', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200' },
        { part: 'Indirect Object (人)', word: 'the client', color: 'bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-200' },
        { part: 'Direct Object (物)', word: 'a sustainable blueprint', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200' },
      ],
      examTip: '介系詞轉換：S + V + DO + to/for + IO（give...to, buy/make...for）。'
    },
    svoc: {
      name: '第 5 類：S + V + O + OC (主詞 + 動詞 + 受詞 + 受詞補語)',
      formula: 'Subject + Verb + Object + Object Complement',
      example: 'The committee appointed her chief structural inspector.',
      breakdown: [
        { part: 'Subject (主詞)', word: 'The committee', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200' },
        { part: 'Verb (動詞)', word: 'appointed', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200' },
        { part: 'Object (受詞)', word: 'her', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200' },
        { part: 'Object Complement (受補)', word: 'chief inspector', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200' },
      ],
      examTip: '受詞補語補充說明受詞動作或身分狀態（使役動詞 make/let/have 後接原形 V，感官動詞接 V/Ving/Vpp）。'
    },
  };

  // --- Taiwan History Data ---
  const historyData = {
    indigenous: {
      title: '原住民族傳統建築（南島氣候因應）',
      features: ['平埔與高山族干欄式高架建築（防潮、避蛇害）', '排灣/魯凱族石板屋（板岩疊砌、冬暖夏涼、防颱風地震）', '雅美(達悟)族半穴居（適應強勁東北季風與海島氣候）'],
      svgShape: (
        <g>
          <rect x="50" y="80" width="100" height="50" fill="#78350F" opacity="0.3" />
          <polygon points="40,80 100,30 160,80" fill="#92400E" stroke="#78350F" strokeWidth="2" />
          <line x1="60" y1="130" x2="60" y2="160" stroke="#78350F" strokeWidth="4" />
          <line x1="90" y1="130" x2="90" y2="160" stroke="#78350F" strokeWidth="4" />
          <line x1="120" y1="130" x2="120" y2="160" stroke="#78350F" strokeWidth="4" />
          <line x1="140" y1="130" x2="140" y2="160" stroke="#78350F" strokeWidth="4" />
          <line x1="30" y1="160" x2="170" y2="160" stroke="#64748B" strokeWidth="2" />
          <text x="75" y="110" fontSize="10" fill="#FFF" className="font-bold">干欄式</text>
        </g>
      )
    },
    'ming-qing': {
      title: '明清時期（閩南合院與傳統木構木雕）',
      features: ['一條龍、三合院、四合院、多進多護龍家族聚落', '屋脊形制：燕尾脊（官宦/舉人）、馬背（五行水木金火土形狀）', '抬梁式與穿斗式大木作木構造、斗栱出挑'],
      svgShape: (
        <g>
          <path d="M 30 70 Q 70 85 100 85 Q 130 85 170 70" fill="none" stroke="#DC2626" strokeWidth="4" />
          <path d="M 25 65 L 35 73 M 175 65 L 165 73" stroke="#DC2626" strokeWidth="3" />
          <rect x="45" y="85" width="110" height="65" fill="#EF4444" opacity="0.2" stroke="#B91C1C" strokeWidth="2" />
          <rect x="85" y="110" width="30" height="40" fill="#78350F" />
          <line x1="20" y1="150" x2="180" y2="150" stroke="#64748B" strokeWidth="2" />
          <text x="80" y="75" fontSize="9" fill="#B91C1C" className="font-bold font-mono">燕尾脊屋頂</text>
          <text x="88" y="102" fontSize="9" fill="#78350F" className="font-bold">正身大廳</text>
        </g>
      )
    },
    japanese: {
      title: '日治時期（西洋歷史主義與辰野式紅白磚）',
      features: ['辰野式紅白相間帶狀磚石立面（如總統府、台大醫院舊館）', '巴洛克式山牆、希臘羅馬柱式、圓頂與鐘樓', '日式木造官舍（黑瓦、雨淋板、外廓抬高床架）'],
      svgShape: (
        <g>
          <rect x="40" y="50" width="120" height="100" fill="#DC2626" opacity="0.15" stroke="#DC2626" strokeWidth="2" />
          <line x1="40" y1="70" x2="160" y2="70" stroke="#FFF" strokeWidth="4" />
          <line x1="40" y1="95" x2="160" y2="95" stroke="#FFF" strokeWidth="4" />
          <line x1="40" y1="120" x2="160" y2="120" stroke="#FFF" strokeWidth="4" />
          <polygon points="40,50 100,20 160,50" fill="#64748B" stroke="#334155" strokeWidth="2" />
          <text x="65" y="42" fontSize="9" fill="#334155" className="font-bold">山牆 / 勳章飾</text>
          <text x="65" y="140" fontSize="9" fill="#DC2626" className="font-bold">紅白水平橫帶</text>
        </g>
      )
    },
    postwar: {
      title: '戰後現代主義與中國北方古典宮殿式風格',
      features: ['結構理性主義、清水混凝土與薄殼構造（路思義教堂、聖心女中）', '北方宮殿古典復興式（圓山大飯店、國父紀念館、國家音樂廳）', '遮陽板、花格磚與洗石子/斬石子工藝'],
      svgShape: (
        <g>
          <path d="M 50 150 Q 100 20 150 150 Z" fill="rgba(245, 158, 11, 0.2)" stroke="#D97706" strokeWidth="3" />
          <line x1="100" y1="20" x2="100" y2="150" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="30" y1="150" x2="170" y2="150" stroke="#64748B" strokeWidth="2" />
          <text x="60" y="90" fontSize="9" fill="#D97706" className="font-bold">雙曲拋物面薄殼</text>
          <text x="75" y="140" fontSize="9" fill="#78350F" className="font-bold">路思義教堂</text>
        </g>
      )
    },
    contemporary: {
      title: '當代台灣綠建築與數位地景',
      features: ['綠建築 EEWH 九大指標評估體系全面融入建築技術規則', '數位參數化設計、BIM 建築資訊模型與預鑄工法', '在地風土材料與地景共生（北投綠色圖書館、台南市圖新總館）'],
      svgShape: (
        <g>
          <rect x="40" y="80" width="120" height="70" fill="rgba(16, 185, 129, 0.15)" stroke="#059669" strokeWidth="2" />
          <polygon points="35,80 100,50 165,80" fill="#059669" opacity="0.3" stroke="#059669" strokeWidth="2" />
          <line x1="45" y1="95" x2="155" y2="95" stroke="#78350F" strokeWidth="3" />
          <line x1="45" y1="120" x2="155" y2="120" stroke="#78350F" strokeWidth="3" />
          <text x="65" y="70" fontSize="9" fill="#059669" className="font-bold">太陽能木格柵深遮陽</text>
          <text x="70" y="140" fontSize="9" fill="#059669" className="font-bold">EEWH 鑽石級</text>
        </g>
      )
    },
  };

  return (
    <div className="rounded-xl border border-indigo-200/80 bg-indigo-50/20 dark:border-indigo-800/60 dark:bg-indigo-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-200/60 dark:border-indigo-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-mono font-bold">
            🏛️
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              {subjectSlug === 'chinese' ? '國文領域 · 詩文格律與對仗章法圖解實驗室' :
               subjectSlug === 'english' ? '英文領域 · 五大句型與子句天平樹狀圖解' :
               subjectSlug === 'history' ? '歷史領域 · 台灣建築時空演進與形制光譜' :
               subjectSlug === 'geography' ? '地理領域 · 都市空間結構模型與地租梯度圖解' :
               subjectSlug === 'civics' ? '公民領域 · 空間正義與環境影響評估法制流程' :
               '人文社會學科 · 核心概念多維圖解實驗室'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              直觀掌握統測必考核心框架、結構視覺表徵與思維脈絡
            </p>
          </div>
        </div>
        <span className="rounded-full bg-indigo-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-600/20">
          統測跨學科圖解
        </span>
      </div>

      {subjectSlug === 'chinese' ? (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex rounded-lg bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 text-xs font-mono">
              <button
                onClick={() => setPoetryType('seven-lv')}
                className={`px-3 py-1 rounded transition-colors ${poetryType === 'seven-lv' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}
              >
                七言律詩平仄黏對
              </button>
              <button
                onClick={() => setPoetryType('pianwen')}
                className={`px-3 py-1 rounded transition-colors ${poetryType === 'pianwen' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}
              >
                四六駢文對仗天平
              </button>
            </div>

            <label className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={showRhythmRules}
                onChange={(e) => setShowRhythmRules(e.target.checked)}
                className="accent-indigo-600 rounded"
              />
              <span>高亮「一三五不論、二四六分明」</span>
            </label>
          </div>

          {poetryType === 'seven-lv' ? (
            <div className="space-y-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span>七律標準仄起首句入韻格式</span>
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><span className="size-2.5 rounded-full bg-blue-500 inline-block"></span> 平聲 (1)</span>
                  <span className="flex items-center gap-1"><span className="size-2.5 rounded-full bg-amber-500 inline-block"></span> 仄聲 (2)</span>
                  <span className="flex items-center gap-1"><span className="size-2.5 rounded-full bg-emerald-500 inline-block"></span> 押韻 (Rhyme)</span>
                </span>
              </div>

              <div className="grid gap-2">
                {sevenLvPattern.map((p) => (
                  <div key={p.line} className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-xs font-mono gap-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 text-slate-400 font-bold">第{p.line}句</span>
                      <div className="flex gap-1">
                        {p.tones.map((t, idx) => {
                          const isEven = (idx + 1) % 2 === 0;
                          const isKey = isEven;
                          return (
                            <span
                              key={idx}
                              className={`size-6 flex items-center justify-center rounded font-bold ${
                                t === 1 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'
                              } ${showRhythmRules && isKey ? 'ring-2 ring-indigo-500 font-black scale-105' : ''}`}
                            >
                              {t === 1 ? '平' : '仄'}
                            </span>
                          );
                        })}
                      </div>
                      {p.rhyme && (
                        <span className="rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-1.5 py-0.5 text-[10px] font-bold">
                          韻
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500">{p.note}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 p-3 bg-indigo-50/50 dark:bg-indigo-950/30 rounded-lg space-y-1">
                <div>💡 <strong>格律判讀口訣：</strong>「一三五不論，二四六分明；同聯平仄對，相鄰兩聯黏」。</div>
                <div>頷聯（3、4 句）與頸聯（5、6 句）<strong>必須對仗</strong>（詞性相同、平仄相反）。</div>
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3 text-xs">
              <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 block">
                駢文四六對仗天平模型 (Parallel Prose Structure)
              </span>
              <div className="grid sm:grid-cols-2 gap-3 font-mono">
                <div className="rounded-lg bg-blue-50 dark:bg-blue-950/40 p-3 border border-blue-200 dark:border-blue-800">
                  <div className="font-bold text-blue-900 dark:text-blue-200 mb-1">出句 (上聯：四六句)</div>
                  <div className="p-2 rounded bg-white dark:bg-slate-900 mb-1 font-serif text-sm">「檣傾楫摧，商旅不行」</div>
                  <div className="text-[10px] text-slate-500">主謂對主謂、名詞對名詞（船桅傾倒、船槳摧折）</div>
                </div>
                <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/40 p-3 border border-emerald-200 dark:border-emerald-800">
                  <div className="font-bold text-emerald-900 dark:text-emerald-200 mb-1">對句 (下聯：四六句)</div>
                  <div className="p-2 rounded bg-white dark:bg-slate-900 mb-1 font-serif text-sm">「日星隱曜，山岳潛形」</div>
                  <div className="text-[10px] text-slate-500">日月星辰隱藏光芒，山峰巨岳掩沒形體</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                💡 <strong>統測閱讀要訣：</strong> 四六駢體句式講究「句式兩兩相對、詞性嚴格對稱、聲律平仄調和、藻飾大量用典」。
              </p>
            </div>
          )}
        </div>
      ) : subjectSlug === 'english' ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1 rounded-lg bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            {(['sv', 'svo', 'svc', 'svoo', 'svoc'] as const).map((pat) => (
              <button
                key={pat}
                onClick={() => setPatternType(pat)}
                className={`px-3 py-1 rounded transition-colors ${patternType === pat ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}
              >
                {pat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 space-y-4">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                {patterns[patternType].name}
              </span>
              <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white mt-1">
                {patterns[patternType].formula}
              </h4>
            </div>

            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="text-sm font-serif italic text-slate-900 dark:text-white font-bold">
                &ldquo;{patterns[patternType].example}&rdquo;
              </div>
              <div className="flex flex-wrap gap-2">
                {patterns[patternType].breakdown.map((item, idx) => (
                  <div key={idx} className={`px-3 py-1.5 rounded-lg text-xs font-mono ${item.color}`}>
                    <div className="text-[10px] opacity-75">{item.part}</div>
                    <div className="font-bold text-sm">{item.word}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 p-3 rounded-lg border border-amber-200 dark:border-amber-800/60 font-mono">
              💡 <strong>{patterns[patternType].examTip}</strong>
            </div>
          </div>
        </div>
      ) : subjectSlug === 'history' ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1 rounded-lg bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            {(['indigenous', 'ming-qing', 'japanese', 'postwar', 'contemporary'] as const).map((era) => (
              <button
                key={era}
                onClick={() => setHistoryEra(era)}
                className={`px-3 py-1 rounded transition-colors ${historyEra === era ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}
              >
                {era === 'indigenous' ? '1. 原住民族' :
                 era === 'ming-qing' ? '2. 明清傳統' :
                 era === 'japanese' ? '3. 日治近代' :
                 era === 'postwar' ? '4. 戰後現代' : '5. 當代永續'}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-inner">
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-2 flex items-center justify-center">
              <svg viewBox="0 0 200 180" className="w-full h-full">
                {historyData[historyEra].svgShape}
              </svg>
            </div>

            <div className="space-y-3 text-xs">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {historyData[historyEra].title}
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                {historyData[historyEra].features.map((feat, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-indigo-600 font-bold font-mono">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : subjectSlug === 'geography' ? (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1 rounded-lg bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            <button
              onClick={() => setGeoModel('concentric')}
              className={`px-3 py-1 rounded transition-colors ${geoModel === 'concentric' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              同心圓模式 (Burgess)
            </button>
            <button
              onClick={() => setGeoModel('sector')}
              className={`px-3 py-1 rounded transition-colors ${geoModel === 'sector' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              扇形模式 (Hoyt)
            </button>
            <button
              onClick={() => setGeoModel('bidrent')}
              className={`px-3 py-1 rounded transition-colors ${geoModel === 'bidrent' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              地租競標梯度 (Bid-Rent)
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5">
            <div className="relative aspect-square max-h-[240px] rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-2 flex items-center justify-center">
              {geoModel === 'concentric' ? (
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="90" fill="rgba(147, 197, 253, 0.2)" stroke="#3B82F6" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="70" fill="rgba(167, 139, 250, 0.2)" stroke="#8B5CF6" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="50" fill="rgba(244, 114, 182, 0.2)" stroke="#EC4899" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="30" fill="rgba(251, 146, 60, 0.3)" stroke="#F97316" strokeWidth="1.5" />
                  <circle cx="100" cy="100" r="14" fill="#EF4444" />
                  <text x="90" y="103" fontSize="8" fill="#FFF" className="font-bold">CBD</text>
                  <text x="100" y="60" fontSize="7" fill="#F97316" className="font-mono">過渡帶</text>
                  <text x="100" y="40" fontSize="7" fill="#EC4899" className="font-mono">低級住宅</text>
                  <text x="100" y="22" fontSize="7" fill="#3B82F6" className="font-mono">通勤帶</text>
                </svg>
              ) : geoModel === 'sector' ? (
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="85" fill="none" stroke="#CBD5E1" strokeWidth="1" />
                  <path d="M 100 100 L 170 50 A 85 85 0 0 1 185 100 Z" fill="rgba(239, 68, 68, 0.3)" stroke="#DC2626" />
                  <path d="M 100 100 L 100 185 A 85 85 0 0 1 40 160 Z" fill="rgba(59, 130, 246, 0.3)" stroke="#2563EB" />
                  <circle cx="100" cy="100" r="16" fill="#DC2626" />
                  <text x="90" y="104" fontSize="8" fill="#FFF" className="font-bold">CBD</text>
                  <text x="125" y="75" fontSize="8" fill="#DC2626" className="font-mono font-bold">高地價扇區</text>
                  <text x="45" y="145" fontSize="8" fill="#2563EB" className="font-mono font-bold">沿交通軸發展</text>
                </svg>
              ) : (
                <svg viewBox="0 0 200 160" className="w-full h-full">
                  <line x1="30" y1="130" x2="180" y2="130" stroke="#94A3B8" strokeWidth="1" />
                  <line x1="30" y1="130" x2="30" y2="20" stroke="#94A3B8" strokeWidth="1" />
                  <text x="140" y="145" fontSize="8" fill="#64748B">距 CBD 距離</text>
                  <text x="15" y="25" fontSize="8" fill="#64748B">地租</text>
                  <line x1="30" y1="30" x2="90" y2="130" stroke="#DC2626" strokeWidth="2.5" />
                  <line x1="30" y1="60" x2="130" y2="130" stroke="#F59E0B" strokeWidth="2" />
                  <line x1="30" y1="90" x2="170" y2="130" stroke="#10B981" strokeWidth="2" />
                  <text x="35" y="38" fontSize="8" fill="#DC2626" className="font-bold">商業 (Retail)</text>
                  <text x="75" y="70" fontSize="8" fill="#F59E0B" className="font-bold">工業</text>
                  <text x="115" y="100" fontSize="8" fill="#10B981" className="font-bold">住宅</text>
                </svg>
              )}
            </div>

            <div className="space-y-2 text-xs">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {geoModel === 'concentric' ? '同心圓模式 (Burgess Concentric Zone)' :
                 geoModel === 'sector' ? '扇形模式 (Hoyt Sector Model)' : '地租競標理論 (Bid-Rent Theory)'}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {geoModel === 'concentric' ? '以芝加哥為藍本：中央商業區 (CBD) 位於核心，向外依序形成過渡帶、勞工住宅區、高級住宅區與郊區通勤帶。' :
                 geoModel === 'sector' ? '考慮鐵路與幹道交通走廊：高收入住宅區與重工業區沿主要交通幹線呈現放射扇形擴展。' :
                 '商業活動對市中心可及性最敏感，願意支付最高地租；隨距離增加，工業與住宅競標曲線相繼勝出，形成土地利用同心分帶。'}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-slate-700 dark:text-slate-300">環境影響評估 (EIA) 法定審查四階段：</span>
            <span className="text-indigo-600">階段 {eiaStep} / 4</span>
          </div>

          <div className="grid grid-cols-4 gap-2 text-xs font-mono text-center">
            {[
              { id: 1, name: '1. 第一階段審查', desc: '開發單位自評說明書' },
              { id: 2, name: '2. 範疇界定', desc: '界定關鍵環境因子' },
              { id: 3, name: '3. 公眾參與聽證', desc: '在地居民與專家公聽會' },
              { id: 4, name: '4. 環評大會審決', desc: '通過/附條件/否決' },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setEiaStep(st.id)}
                className={`p-2 rounded-lg border transition-all ${eiaStep === st.id ? 'bg-indigo-600 text-white font-bold border-indigo-600 shadow-xs' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`}
              >
                <div className="font-bold">{st.name}</div>
                <div className="text-[10px] opacity-80 mt-0.5">{st.desc}</div>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <h4 className="font-bold text-sm text-indigo-900 dark:text-indigo-200">
              {eiaStep === 1 ? '第一階段環境影響說明書 (EIA Screening)' :
               eiaStep === 2 ? '第二階段範疇界定 (Scoping & Baseline Survey)' :
               eiaStep === 3 ? '正當法律程序與公眾參與 (Public Participation)' :
               '環境影響評估審查委員會最終決議 (Final Decision)'}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {eiaStep === 1 ? '開發單位向目的事業主管機關提出申請，由環保機關審查是否對環境有重大影響。無重大影響者通過一階審查；有重大影響之虞者進入第二階段環評。' :
               eiaStep === 2 ? '邀集專家學者、環保團體及相關機關，針對空氣品質、水質、地質水文、文化資產、噪音振動等界定調查範疇與替代方案。' :
               eiaStep === 3 ? '公開環評報告書初稿，於開發基地鄰近鄉鎮舉行現場勘察與公聽會，落實資訊公開與憲法空間正義正當行政程序。' :
               '由官方代表與外部學者專家組成的環評委員會進行合議制審查，作成「通過」、「附帶條件通過」或「不應開發」之終局行政處分。'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
