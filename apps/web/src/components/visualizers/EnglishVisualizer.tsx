'use client';

import React, { useState } from 'react';
import { 
  Compass, 
  Clock, 
  GitMerge, 
  Network, 
  Scale, 
  LayoutList, 
  BarChart3, 
  Volume2, 
  BookOpen
} from 'lucide-react';

interface EnglishVisualizerProps {
  topicSlug?: string;
}

export default function EnglishVisualizer({ topicSlug }: EnglishVisualizerProps) {
  // Determine initial tab based on current topic
  const initialTab = (() => {
    if (topicSlug?.includes('grammar-clauses')) return 'clauses';
    if (topicSlug?.includes('grammar-mastery')) return 'conditionals';
    if (topicSlug?.includes('reading-infographics')) return 'infographics';
    if (topicSlug?.includes('conversation') || topicSlug?.includes('workplace')) return 'phrasal-verbs';
    if (topicSlug?.includes('grammar-patterns')) return 'tenses';
    return 'prepositions';
  })();

  const [activeTab, setActiveTab] = useState<'prepositions' | 'tenses' | 'phrasal-verbs' | 'clauses' | 'conditionals' | 'sentence-patterns' | 'infographics'>(initialTab);

  // --- TTS Audio Playback Function ---
  const playTTS = (text: string, rate: number = 0.9) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  // ==========================================
  // 1. PREPOSITIONS SPATIAL & MOVEMENT STATE
  // ==========================================
  const [selectedPrep, setSelectedPrep] = useState<string>('in');

  const prepositionsData: Record<string, {
    name: string;
    type: 'place' | 'movement';
    zh: string;
    description: string;
    examTip: string;
    example: string;
    boxSvg: React.ReactNode;
  }> = {
    in: {
      name: 'in',
      type: 'place',
      zh: '在...裡面 (三度立體空間)',
      description: '用於封閉或有明確邊界的三維空間，如建築物內部、房間、箱子。',
      examTip: '統測常考：in the building (在建築內), in the office, in the foundation trench。',
      example: 'The structural engineer is inspecting the steel columns in the basement.',
      boxSvg: (
        <g>
          <rect x="50" y="50" width="100" height="100" fill="#3B82F6" opacity="0.2" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="16" fill="#2563EB" />
          <text x="100" y="104" fontSize="11" fill="#FFF" textAnchor="middle" fontWeight="bold">in</text>
        </g>
      )
    },
    on: {
      name: 'on',
      type: 'place',
      zh: '在...表面上 (二維接觸接觸面)',
      description: '表示接觸到物體或建築的表面（地板、牆面、屋頂、街道）。',
      examTip: '統測易錯點：on the roof (在屋頂上), on the construction site (在工地現場), on the second floor (在二樓)。',
      example: 'Solar panels were installed on the roof of the green library.',
      boxSvg: (
        <g>
          <rect x="50" y="80" width="100" height="70" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
          <line x1="30" y1="80" x2="170" y2="80" stroke="#3B82F6" strokeWidth="4" />
          <circle cx="100" cy="62" r="14" fill="#3B82F6" />
          <text x="100" y="66" fontSize="10" fill="#FFF" textAnchor="middle" fontWeight="bold">on</text>
        </g>
      )
    },
    at: {
      name: 'at',
      type: 'place',
      zh: '在...某精確地點 / 點狀位置',
      description: '用於特定精確坐標點、目標點或特定功能場所。',
      examTip: '統測必考對比：at the station (車站點), at the corner of the street (街角點)。',
      example: 'The surveyor is standing at the benchmark to measure elevation.',
      boxSvg: (
        <g>
          <rect x="40" y="60" width="120" height="80" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="140" cy="80" r="15" fill="#EF4444" />
          <text x="140" y="84" fontSize="10" fill="#FFF" textAnchor="middle" fontWeight="bold">at</text>
          <line x1="140" y1="30" x2="140" y2="65" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow)" />
        </g>
      )
    },
    above: {
      name: 'above',
      type: 'place',
      zh: '在...上方 (垂直或斜上方，無接觸)',
      description: '位置高於某基準面，但不一定在正上方，常指高度或水平標高。',
      examTip: '常與 over 辨析：above sea level (海拔高度固定用 above)。',
      example: 'The suspension bridge hangs 50 meters above the canyon river.',
      boxSvg: (
        <g>
          <rect x="60" y="110" width="80" height="40" fill="#CBD5E1" stroke="#475569" strokeWidth="2" />
          <circle cx="100" cy="45" r="14" fill="#10B981" />
          <text x="100" y="49" fontSize="9" fill="#FFF" textAnchor="middle" fontWeight="bold">above</text>
          <line x1="100" y1="65" x2="100" y2="105" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>
      )
    },
    over: {
      name: 'over',
      type: 'place',
      zh: '在...正上方 (或橫跨跨越)',
      description: '強調正上方覆蓋、跨越一端到另一端，或有遮蔽效果。',
      examTip: '統測常考：build a bridge over the river (橫跨河流), a helmet over your head。',
      example: 'They constructed a massive steel canopy over the railway platform.',
      boxSvg: (
        <g>
          <path d="M 40 120 Q 100 30 160 120" fill="none" stroke="#F59E0B" strokeWidth="4" />
          <rect x="80" y="100" width="40" height="40" fill="#94A3B8" />
          <circle cx="100" cy="55" r="12" fill="#F59E0B" />
          <text x="100" y="59" fontSize="8" fill="#FFF" textAnchor="middle" fontWeight="bold">over</text>
        </g>
      )
    },
    under: {
      name: 'under',
      type: 'place',
      zh: '在...正下方 (有遮蔽或緊鄰)',
      description: '受上方物體垂直覆蓋或遮擋。',
      examTip: '統測常考：under construction (施工中 - 必背片語！), under pressure (承受壓力)。',
      example: 'The new subway terminal is currently under construction.',
      boxSvg: (
        <g>
          <rect x="50" y="40" width="100" height="30" fill="#475569" />
          <circle cx="100" cy="115" r="14" fill="#8B5CF6" />
          <text x="100" y="119" fontSize="9" fill="#FFF" textAnchor="middle" fontWeight="bold">under</text>
          <line x1="100" y1="75" x2="100" y2="95" stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="3 3" />
        </g>
      )
    },
    between: {
      name: 'between',
      type: 'place',
      zh: '在兩者之間 (Between A and B)',
      description: '嚴格用於「兩者」之間，搭配 and 連接。',
      examTip: '統測陷阱：兩者用 between，三者或以上用 among！',
      example: 'There is a dynamic expansion joint between the two concrete towers.',
      boxSvg: (
        <g>
          <rect x="30" y="60" width="40" height="70" fill="#64748B" />
          <rect x="130" y="60" width="40" height="70" fill="#64748B" />
          <circle cx="100" cy="95" r="14" fill="#EC4899" />
          <text x="100" y="99" fontSize="7" fill="#FFF" textAnchor="middle" fontWeight="bold">between</text>
        </g>
      )
    },
    through: {
      name: 'through',
      type: 'movement',
      zh: '穿過 / 通過 (三維立體內部)',
      description: '從封閉或有深度、有密度的立體空間內部穿行而過（如隧道、森林、管道）。',
      examTip: '統測常考：walk through the tunnel (穿過隧道), through the pipe (流經水管)。',
      example: 'High-speed trains travel smoothly through the Xue-shan Mountain Tunnel.',
      boxSvg: (
        <g>
          <rect x="60" y="50" width="80" height="90" fill="#E2E8F0" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 20 95 L 180 95" stroke="#059669" strokeWidth="4" markerEnd="url(#arrowGreen)" />
          <circle cx="100" cy="95" r="12" fill="#059669" />
          <text x="100" y="99" fontSize="8" fill="#FFF" textAnchor="middle" fontWeight="bold">through</text>
        </g>
      )
    },
    across: {
      name: 'across',
      type: 'movement',
      zh: '橫越 / 穿過 (二維平面表面)',
      description: '從平面（馬路、河流、橋樑、田野）的一側橫越到對側。',
      examTip: '統測對比：穿過隧道用 through，橫越馬路/河流用 across！',
      example: 'Pedestrians must walk across the crosswalk for safety.',
      boxSvg: (
        <g>
          <rect x="30" y="40" width="140" height="100" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
          <line x1="100" y1="40" x2="100" y2="140" stroke="#CBD5E1" strokeWidth="4" strokeDasharray="6 6" />
          <path d="M 40 90 L 160 90" stroke="#D97706" strokeWidth="4" />
          <circle cx="100" cy="90" r="12" fill="#D97706" />
          <text x="100" y="94" fontSize="8" fill="#FFF" textAnchor="middle" fontWeight="bold">across</text>
        </g>
      )
    },
    into: {
      name: 'into',
      type: 'movement',
      zh: '進入...裡面 (由外往內的動態進入)',
      description: '強調穿越界線進入三維空間的動作過程。',
      examTip: '統測常考：pour concrete into the formwork (將混凝土澆置進入模板中)。',
      example: 'The workers poured wet concrete into the wooden formwork.',
      boxSvg: (
        <g>
          <rect x="70" y="50" width="90" height="90" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
          <path d="M 20 95 Q 60 95 110 95" stroke="#2563EB" strokeWidth="4" />
          <circle cx="115" cy="95" r="12" fill="#2563EB" />
          <text x="115" y="99" fontSize="8" fill="#FFF" textAnchor="middle" fontWeight="bold">into</text>
        </g>
      )
    },
  };

  // ==========================================
  // 2. 12 VERB TENSES TIMELINE STATE
  // ==========================================
  const [selectedTense, setSelectedTense] = useState<'pres_sim' | 'pres_cont' | 'pres_perf' | 'past_sim' | 'past_perf' | 'fut_sim'>('pres_perf');
  const [isPassiveVoice, setIsPassiveVoice] = useState<boolean>(false);

  const tensesData = {
    pres_sim: {
      name: '現在簡單式 (Simple Present)',
      timeFrame: '恆常真理、習慣動作、客觀工程事實',
      timeSignal: 'always, usually, every day, naturally, constantly',
      activeFormula: 'S + V / V-s',
      passiveFormula: 'S + am / is / are + V-pp',
      activeExample: 'Steel expands when heated.',
      passiveExample: 'Concrete is mixed according to strict standards.',
      examNote: '統測常考物理定律或材料特性，一律使用現在簡單式！',
    },
    pres_cont: {
      name: '現在進行式 (Present Continuous)',
      timeFrame: '此時此刻正在進行，或現階段暫時狀況',
      timeSignal: 'now, right now, at the moment, currently, Look!, Listen!',
      activeFormula: 'S + am / is / are + V-ing',
      passiveFormula: 'S + am / is / are + being + V-pp',
      activeExample: 'The foreman is inspecting the rebar spacing right now.',
      passiveExample: 'The bridge is being painted by the maintenance team.',
      examNote: '統測被動常考「is/are being V-pp」，代表「正在被...」！',
    },
    pres_perf: {
      name: '現在完成式 (Present Perfect)',
      timeFrame: '過去發生持續至今，或對現在造成影響/經驗',
      timeSignal: 'since + 過去時間點, for + 一段時間, already, yet, so far, recently',
      activeFormula: 'S + have / has + V-pp',
      passiveFormula: 'S + have / has + been + V-pp',
      activeExample: 'They have finished the foundation inspection.',
      passiveExample: 'The skyscraper has been built with earthquake-resistant technology.',
      examNote: '【統測大魔王】：since 後接過去式子句或過去年份，主要子句必用現在完成式！',
    },
    past_sim: {
      name: '過去簡單式 (Simple Past)',
      timeFrame: '在明確的過去時間點已結束的動作',
      timeSignal: 'yesterday, last year, in 2020, two days ago, when + 過去式',
      activeFormula: 'S + V-ed / 過去式不規則',
      passiveFormula: 'S + was / were + V-pp',
      activeExample: 'The architect drew the blueprint yesterday.',
      passiveExample: 'The historic arch bridge was constructed in 1935.',
      examNote: '看到具體過去年份（如 in 1999），絕不可填現在完成式，必選過去式！',
    },
    past_perf: {
      name: '過去完成式 (Past Perfect)',
      timeFrame: '過去的過去（比過去某時間點更早發生完成）',
      timeSignal: 'before, after, by the time + 過去式子句, had already',
      activeFormula: 'S + had + V-pp',
      passiveFormula: 'S + had + been + V-pp',
      activeExample: 'The workers had completed the roof before the typhoon hit.',
      passiveExample: 'The permit had been approved before construction began.',
      examNote: '【統測關鍵句型】：By the time + S + 過去式V, S + had + V-pp（在某事發生前，另一事已完成）。',
    },
    fut_sim: {
      name: '未來簡單式 (Simple Future)',
      timeFrame: '未來將會發生的事情、預測或計畫',
      timeSignal: 'tomorrow, next week, in the future, soon, by next month',
      activeFormula: 'S + will + V / is going to + V',
      passiveFormula: 'S + will + be + V-pp',
      activeExample: 'The contractor will deliver the materials tomorrow.',
      passiveExample: 'The new high-speed rail station will be opened next spring.',
      examNote: '在時間或條件副詞子句（if, when, as soon as）中，以現在式代替未來式！',
    },
  };

  // ==========================================
  // 3. PHRASAL VERBS COLLOCATION MATRIX STATE
  // ==========================================
  const [activeVerbRoot, setActiveVerbRoot] = useState<'look' | 'take' | 'put' | 'turn' | 'get' | 'break'>('turn');

  const phrasalVerbsMap = {
    turn: [
      { particle: 'on', meaning: '打開 (電源/設備)', example: 'Please turn on the ventilation fans in the tunnel.' },
      { particle: 'off', meaning: '關閉 (電源/引擎)', example: 'Always turn off the generator before maintenance.' },
      { particle: 'up', meaning: '調大 (音量/功率)；意外出現', example: 'He turned up at the construction site unexpectedly.' },
      { particle: 'down', meaning: '拒絕 (提議/邀請)；調小 (音量)', example: 'The client turned down our initial architectural proposal.' },
      { particle: 'into', meaning: '轉變成、化為', example: 'The brownfield was turned into a beautiful eco-park.' },
      { particle: 'out', meaning: '結果證明是；生產', example: 'The new concrete mix turned out to be extremely strong.' },
    ],
    look: [
      { particle: 'for', meaning: '尋找', example: 'The surveyor is looking for the hidden reference peg.' },
      { particle: 'into', meaning: '調查、深入研究', example: 'The safety team will look into the cause of the crane failure.' },
      { particle: 'after', meaning: '照顧、看管', example: 'The site manager looks after the daily safety procedures.' },
      { particle: 'forward to', meaning: '期待 (後接 V-ing / N)', example: 'We look forward to visiting the completed Luce Chapel.' },
      { particle: 'up to', meaning: '尊敬、效法', example: 'Young draftsmen look up to master architects.' },
      { particle: 'out for', meaning: '當心、注意危險', example: 'Look out for falling debris in the excavation pit!' },
    ],
    put: [
      { particle: 'on', meaning: '穿戴 (安全帽/護具)', example: 'Workers must put on hard hats and high-vis vests.' },
      { particle: 'off', meaning: '延期、推遲 (統測必考！)', example: 'They put off the outdoor concrete pour due to heavy rain.' },
      { particle: 'out', meaning: '撲滅 (火勢)', example: 'The firefighters put out the blaze in the warehouse.' },
      { particle: 'up with', meaning: '容忍、忍受', example: 'Residents can hardly put up with the pile-driving noise.' },
      { particle: 'together', meaning: '組裝、彙整', example: 'The team put together a comprehensive BIM model.' },
    ],
    take: [
      { particle: 'off', meaning: '起飛；脫下 (裝備)；暴增', example: 'Take off your muddy safety boots before entering the office.' },
      { particle: 'over', meaning: '接管、接手', example: 'The senior engineer will take over the highway project.' },
      { particle: 'part in', meaning: '參加、參與', example: 'All staff must take part in the emergency fire drill.' },
      { particle: 'place', meaning: '發生、舉行 (無被動)', example: 'The groundbreaking ceremony took place yesterday.' },
      { particle: 'care of', meaning: '處理、照顧', example: 'She will take care of the structural permit application.' },
    ],
    get: [
      { particle: 'on / off', meaning: '上下 (大型公共交通工具：火車/公車/飛機)', example: 'Inspectors got on the high-speed rail to Taichung.' },
      { particle: 'in / out of', meaning: '上下 (小型封閉車輛：轎車/計程車)', example: 'The project manager got out of the taxi at the site gate.' },
      { particle: 'along with', meaning: '與...相處融洽', example: 'Civil engineers must get along with subcontractors.' },
      { particle: 'over', meaning: '克服 (困難/疾病)', example: 'The team got over the technical soil settlement challenge.' },
      { particle: 'rid of', meaning: '去除、擺脫', example: 'We need to get rid of construction waste responsibly.' },
    ],
    break: [
      { particle: 'down', meaning: '故障 (機器/車輛)；情緒崩潰', example: 'The hydraulic excavator broke down on the job site.' },
      { particle: 'out', meaning: '突然爆發 (火災/戰爭/傳染病)', example: 'A fire broke out in the timber storage yard.' },
      { particle: 'into', meaning: '闖入、破門而入', example: 'Thieves broke into the site office and stole copper wire.' },
      { particle: 'through', meaning: '突破 (技術瓶頸)', example: 'Scientists broke through in ultra-high performance concrete.' },
    ],
  };

  // ==========================================
  // 4. CLAUSES & PARTICIPLES STATE
  // ==========================================
  const [selectedClauseType, setSelectedClauseType] = useState<'relative' | 'participle' | 'noun' | 'adverb'>('relative');

  // ==========================================
  // 5. CONDITIONALS & INVERSIONS STATE
  // ==========================================
  const [conditionalType, setConditionalType] = useState<'present' | 'past' | 'inversion'>('present');

  return (
    <div className="rounded-2xl border border-indigo-200/90 bg-white dark:border-indigo-900/50 dark:bg-slate-900 shadow-md p-5 sm:p-6 space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 dark:border-indigo-900/60 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-blue-600 text-white shadow-sm font-mono text-lg">
            📐
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                技高英語文 · 多維互動圖解實驗室 (TVE English Multi-Lab)
              </h3>
              <span className="rounded-full bg-blue-100 dark:bg-blue-950 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                108課綱 統測專屬
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              直觀透視介系詞空間方位、12時態座標軸、動詞片語網絡與素養圖表解密
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => playTTS('Welcome to the TVE English Multi-Dimensional Visualizer Lab. Explore prepositions, verb tenses, and sentence structures with audio guidance.')}
            className="flex items-center gap-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 px-3 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors cursor-pointer active:scale-95"
            title="導覽語音"
          >
            <Volume2 className="size-3.5" />
            <span>實驗室導覽發音</span>
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-mono">
        <button
          onClick={() => setActiveTab('prepositions')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
            activeTab === 'prepositions'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Compass className="size-3.5" />
          <span>1. 介系詞空間方位</span>
        </button>

        <button
          onClick={() => setActiveTab('tenses')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
            activeTab === 'tenses'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Clock className="size-3.5" />
          <span>2. 動詞12時態座標</span>
        </button>

        <button
          onClick={() => setActiveTab('phrasal-verbs')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
            activeTab === 'phrasal-verbs'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Network className="size-3.5" />
          <span>3. 動詞片語雷達</span>
        </button>

        <button
          onClick={() => setActiveTab('clauses')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
            activeTab === 'clauses'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <GitMerge className="size-3.5" />
          <span>4. 子句與分詞構句</span>
        </button>

        <button
          onClick={() => setActiveTab('conditionals')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
            activeTab === 'conditionals'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Scale className="size-3.5" />
          <span>5. 假設語氣天平</span>
        </button>

        <button
          onClick={() => setActiveTab('sentence-patterns')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
            activeTab === 'sentence-patterns'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <LayoutList className="size-3.5" />
          <span>6. 五大句型解構</span>
        </button>

        <button
          onClick={() => setActiveTab('infographics')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
            activeTab === 'infographics'
              ? 'bg-teal-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <BarChart3 className="size-3.5" />
          <span>7. 圖表判讀解密</span>
        </button>
      </div>

      {/* ==================================================== */}
      {/* MODULE 1: PREPOSITIONS SPATIAL & MOVEMENT LAB        */}
      {/* ==================================================== */}
      {activeTab === 'prepositions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold font-mono">點擊介系詞，觀察空間方位 2D 透視與統測實戰例句：</span>
            <span className="text-[11px] text-blue-600 dark:text-blue-400">藍點：目標物體 ｜ 實線：空間介面</span>
          </div>

          {/* Quick Preposition Select Chips */}
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(prepositionsData).map((key) => {
              const item = prepositionsData[key];
              const isSel = selectedPrep === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPrep(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSel
                      ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-300 dark:ring-blue-800'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{item.name}</span>
                  <span className={`text-[10px] px-1 rounded ${isSel ? 'bg-blue-700 text-blue-100' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'}`}>
                    {item.type === 'place' ? '靜態方位' : '動態路徑'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Preposition Visual Card */}
          {(() => {
            const data = prepositionsData[selectedPrep];
            return (
              <div className="grid md:grid-cols-12 gap-5 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/20 dark:bg-blue-950/20 p-5 items-center">
                {/* SVG Visual Stage */}
                <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 rounded-xl border border-blue-200 dark:border-blue-800/60 shadow-inner">
                  <svg viewBox="0 0 200 180" className="w-48 h-44 drop-shadow-xs">
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                      </marker>
                      <marker id="arrowGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#059669" />
                      </marker>
                    </defs>
                    {data.boxSvg}
                  </svg>
                  <div className="mt-2 text-center">
                    <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950">
                      介系詞核心圖示：{data.name}
                    </span>
                  </div>
                </div>

                {/* Explanation and Audio */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold font-serif text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{data.name}</span>
                        <span className="text-sm font-sans font-normal text-slate-500 dark:text-slate-400">({data.zh})</span>
                      </h4>
                    </div>
                    <button
                      onClick={() => playTTS(data.name)}
                      className="inline-flex items-center gap-1 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/60 dark:text-blue-300 px-2.5 py-1 text-xs font-bold transition-all active:scale-95 cursor-pointer"
                    >
                      <Volume2 className="size-3.5" />
                      <span>發音</span>
                    </button>
                  </div>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {data.description}
                  </p>

                  {/* Worked Example with TTS */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>統測實戰例句 (TVE Example)：</span>
                      <button
                        onClick={() => playTTS(data.example)}
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                      >
                        <Volume2 className="size-3" />
                        <span>整句朗讀</span>
                      </button>
                    </div>
                    <div className="font-serif text-sm font-semibold text-slate-900 dark:text-white italic">
                      &ldquo;{data.example}&rdquo;
                    </div>
                  </div>

                  {/* Exam Tip Alert */}
                  <div className="text-xs p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200">
                    💡 <strong>統測名師提醒：</strong> {data.examTip}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ==================================================== */}
      {/* MODULE 2: 12 VERB TENSES TIMELINE & VOICE MATRIX     */}
      {/* ==================================================== */}
      {activeTab === 'tenses' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold">選擇時態座標：</span>
            </div>

            {/* Active vs Passive Toggle Switch */}
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold">
              <span className="text-slate-500 px-1.5">語態切換：</span>
              <button
                onClick={() => setIsPassiveVoice(false)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  !isPassiveVoice ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                主動語態 (Active)
              </button>
              <button
                onClick={() => setIsPassiveVoice(true)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  isPassiveVoice ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                被動語態 (Passive)
              </button>
            </div>
          </div>

          {/* Tenses Switch Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs font-mono">
            {[
              { id: 'pres_sim', label: '現在簡單式' },
              { id: 'pres_cont', label: '現在進行式' },
              { id: 'pres_perf', label: '現在完成式' },
              { id: 'past_sim', label: '過去簡單式' },
              { id: 'past_perf', label: '過去完成式' },
              { id: 'fut_sim', label: '未來簡單式' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTense(t.id as 'pres_sim' | 'pres_cont' | 'pres_perf' | 'past_sim' | 'past_perf' | 'fut_sim')}
                className={`p-2.5 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                  selectedTense === t.id
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Tense Timeline Stage */}
          {(() => {
            const cur = tensesData[selectedTense];
            const currentFormula = isPassiveVoice ? cur.passiveFormula : cur.activeFormula;
            const currentExample = isPassiveVoice ? cur.passiveExample : cur.activeExample;

            return (
              <div className="rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-white dark:bg-slate-900 p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {isPassiveVoice ? '【被動語態模式】' : '【主動語態模式】'}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-slate-900 dark:text-white mt-0.5">
                      {cur.name}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      動詞公式：{currentFormula}
                    </span>
                  </div>
                </div>

                {/* Timeline Visual Graphic */}
                <div className="relative py-6 px-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>PAST (過去)</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">PRESENT (現在)</span>
                    <span>FUTURE (未來)</span>
                  </div>
                  
                  {/* Axis Line */}
                  <div className="h-1.5 w-full bg-slate-300 dark:bg-slate-700 rounded-full relative flex items-center">
                    {/* Time Indicator Marker */}
                    {selectedTense === 'past_perf' && (
                      <div className="absolute left-[15%] size-5 rounded-full bg-amber-500 border-4 border-white dark:border-slate-900 shadow-md animate-pulse" />
                    )}
                    {selectedTense === 'past_sim' && (
                      <div className="absolute left-[30%] size-5 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 shadow-md animate-pulse" />
                    )}
                    {selectedTense === 'pres_perf' && (
                      <div className="absolute left-[30%] right-[50%] h-3 bg-indigo-400/50 rounded-full flex items-center justify-end">
                        <div className="size-5 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 shadow-md animate-pulse" />
                      </div>
                    )}
                    {selectedTense === 'pres_sim' && (
                      <div className="absolute left-[50%] -translate-x-1/2 size-5 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900 shadow-md animate-pulse" />
                    )}
                    {selectedTense === 'pres_cont' && (
                      <div className="absolute left-[45%] w-[15%] h-3 bg-purple-400/50 rounded-full flex items-center justify-center">
                        <div className="size-5 rounded-full bg-purple-600 border-4 border-white dark:border-slate-900 shadow-md animate-pulse" />
                      </div>
                    )}
                    {selectedTense === 'fut_sim' && (
                      <div className="absolute right-[20%] size-5 rounded-full bg-rose-500 border-4 border-white dark:border-slate-900 shadow-md animate-pulse" />
                    )}
                  </div>

                  <div className="mt-4 text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
                    <span>時態時空特質：{cur.timeFrame}</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">高頻關鍵字：{cur.timeSignal}</span>
                  </div>
                </div>

                {/* Example sentence with instant Audio */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono text-slate-500 block mb-1">
                      {isPassiveVoice ? '【被動語態範例】' : '【主動語態範例】'}
                    </span>
                    <p className="text-base font-serif italic font-bold text-slate-900 dark:text-white">
                      &ldquo;{currentExample}&rdquo;
                    </p>
                  </div>
                  <button
                    onClick={() => playTTS(currentExample)}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer"
                  >
                    <Volume2 className="size-4" />
                    <span>播放例句發音</span>
                  </button>
                </div>

                {/* Note */}
                <div className="text-xs p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200">
                  🎯 <strong>統測考點直擊：</strong> {cur.examNote}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ==================================================== */}
      {/* MODULE 3: PHRASAL VERBS COLLOCATION MATRIX           */}
      {/* ==================================================== */}
      {activeTab === 'phrasal-verbs' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-bold font-mono">統測 8 大常考核心動詞心智雷達：</span>
            <span>點擊動詞切換介系詞搭配詞網絡</span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
            {(['turn', 'look', 'put', 'take', 'get', 'break'] as const).map((verb) => (
              <button
                key={verb}
                onClick={() => setActiveVerbRoot(verb)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeVerbRoot === verb
                    ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300 dark:ring-emerald-800'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {verb.toUpperCase()} + 介系詞
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {phrasalVerbsMap[activeVerbRoot].map((item, idx) => {
              const fullPhrase = `${activeVerbRoot} ${item.particle}`;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-emerald-100 dark:border-emerald-900/50 bg-white dark:bg-slate-900 p-4 space-y-2 shadow-2xs hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold font-mono text-emerald-700 dark:text-emerald-400">
                      {fullPhrase}
                    </span>
                    <button
                      onClick={() => playTTS(fullPhrase)}
                      className="text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 p-1 rounded transition-colors cursor-pointer"
                      title="朗讀片語"
                    >
                      <Volume2 className="size-4" />
                    </button>
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {item.meaning}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-serif italic bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                    &ldquo;{item.example}&rdquo;
                  </p>
                  <button
                    onClick={() => playTTS(item.example)}
                    className="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-mono cursor-pointer"
                  >
                    <span>🔊 聆聽例句</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* MODULE 4: CLAUSES & PARTICIPLES TREE                 */}
      {/* ==================================================== */}
      {activeTab === 'clauses' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
            <button
              onClick={() => setSelectedClauseType('relative')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${selectedClauseType === 'relative' ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
            >
              關係子句 (形容詞子句)
            </button>
            <button
              onClick={() => setSelectedClauseType('participle')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${selectedClauseType === 'participle' ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
            >
              分詞構句三步化簡 (Participles)
            </button>
            <button
              onClick={() => setSelectedClauseType('noun')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${selectedClauseType === 'noun' ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
            >
              名詞子句與間接問句
            </button>
            <button
              onClick={() => setSelectedClauseType('adverb')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${selectedClauseType === 'adverb' ? 'bg-purple-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
            >
              副詞子句與連接詞
            </button>
          </div>

          {selectedClauseType === 'relative' && (
            <div className="rounded-xl border border-purple-200 dark:border-purple-900 bg-purple-50/20 dark:bg-purple-950/20 p-5 space-y-4">
              <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                關係代名詞四大守則天平 (Relative Pronouns)
              </h4>
              <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-purple-100 dark:border-purple-800 space-y-1">
                  <span className="font-bold text-purple-700 dark:text-purple-300">先行詞是「人」</span>
                  <div>主格：who</div>
                  <div>受格：whom / who (可省略)</div>
                  <div>所有格：whose</div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-purple-100 dark:border-purple-800 space-y-1">
                  <span className="font-bold text-purple-700 dark:text-purple-300">先行詞是「物 / 動物」</span>
                  <div>主格：which / that</div>
                  <div>受格：which / that (可省略)</div>
                  <div>所有格：whose / of which</div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-purple-100 dark:border-purple-800 space-y-1">
                  <span className="font-bold text-rose-600 dark:text-rose-400">絕不可用 that 的兩大禁區</span>
                  <div>1. 逗號後面（非限定用法）</div>
                  <div>2. 介系詞後面 (at which, in whom)</div>
                </div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-between text-xs">
                <span className="font-serif italic">&ldquo;The architect <strong>who designed Taipei 101</strong> won global acclaim.&rdquo;</span>
                <button
                  onClick={() => playTTS('The architect who designed Taipei 101 won global acclaim.')}
                  className="text-purple-600 dark:text-purple-400 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Volume2 className="size-3.5" /> 播放
                </button>
              </div>
            </div>
          )}

          {selectedClauseType === 'participle' && (
            <div className="rounded-xl border border-purple-200 dark:border-purple-900 bg-purple-50/20 dark:bg-purple-950/20 p-5 space-y-4">
              <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                分詞構句三步化簡演繹法 (Participle Reduction SOP)
              </h4>
              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="font-bold text-purple-700 dark:text-purple-300 mb-1">步驟 1：省略連接詞與相同主詞</div>
                  <p className="text-slate-600 dark:text-slate-400">當前後兩句主詞一致時，省去副詞子句連接詞與主詞。</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="font-bold text-blue-700 dark:text-blue-300 mb-1">步驟 2A：主動動作改 V-ing</div>
                  <p className="text-slate-600 dark:text-slate-400">Because he <strong>saw</strong> the crack, he halted work. → <strong>Seeing</strong> the crack, he halted work.</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="font-bold text-emerald-700 dark:text-emerald-300 mb-1">步驟 2B：被動動作改 V-pp</div>
                  <p className="text-slate-600 dark:text-slate-400">Because it was <strong>built</strong> on rock, the tower remained stable. → <strong>Built</strong> on rock, the tower remained stable.</p>
                </div>
              </div>
            </div>
          )}

          {selectedClauseType === 'noun' && (
            <div className="rounded-xl border border-purple-200 dark:border-purple-900 bg-white dark:bg-slate-900 p-4 space-y-2 text-xs">
              <div className="font-bold text-slate-800 dark:text-slate-200">間接問句語序核心：疑問詞 + 主詞 + 動詞 (Wh- + S + V)</div>
              <p className="text-slate-600 dark:text-slate-400">統測常考陷阱：間接問句內嚴禁倒裝，不能出現 do/does/did 助動詞！</p>
              <div className="font-serif italic p-2 bg-slate-50 dark:bg-slate-800 rounded">
                &ldquo;I wonder <strong>where the site supervisor is</strong>.&rdquo; (不可寫成 where is the site supervisor)
              </div>
            </div>
          )}

          {selectedClauseType === 'adverb' && (
            <div className="rounded-xl border border-purple-200 dark:border-purple-900 bg-white dark:bg-slate-900 p-4 space-y-2 text-xs">
              <div className="font-bold text-slate-800 dark:text-slate-200">四大副詞子句常見連接詞</div>
              <div className="grid sm:grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded">讓步：although, even though, while (不可與 but 連用)</div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded">原因：because, since, as (不可與 so 連用)</div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded">條件：if, unless (= if...not), as long as</div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded">時間：when, while, as soon as, before, after</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==================================================== */}
      {/* MODULE 5: CONDITIONALS & INVERSIONS                  */}
      {/* ==================================================== */}
      {activeTab === 'conditionals' && (
        <div className="space-y-4">
          <div className="flex gap-2 text-xs font-mono font-bold">
            <button
              onClick={() => setConditionalType('present')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${conditionalType === 'present' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}
            >
              與現在相反 (退一步過去式)
            </button>
            <button
              onClick={() => setConditionalType('past')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${conditionalType === 'past' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}
            >
              與過去相反 (退兩步過去完成式)
            </button>
            <button
              onClick={() => setConditionalType('inversion')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer ${conditionalType === 'inversion' ? 'bg-amber-600 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}
            >
              省略 If 之三大倒裝句
            </button>
          </div>

          {conditionalType === 'present' && (
            <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/20 dark:bg-amber-950/20 space-y-3">
              <div className="font-mono text-xs font-bold text-amber-800 dark:text-amber-300">
                公式：If + S + were / 過去式V, S + would / could / might + 原形V
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-between text-xs">
                <span className="font-serif italic font-bold">
                  &ldquo;If the foundation <strong>were</strong> deeper, the building <strong>would be</strong> safer.&rdquo;
                </span>
                <button
                  onClick={() => playTTS('If the foundation were deeper, the building would be safer.')}
                  className="text-amber-600 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Volume2 className="size-3.5" /> 播放
                </button>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                💡 統測要訣：條件句 be 動詞一律優先使用 <strong>were</strong>，主要子句必帶假設助動詞 would/could/might！
              </p>
            </div>
          )}

          {conditionalType === 'past' && (
            <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50/20 dark:bg-amber-950/20 space-y-3">
              <div className="font-mono text-xs font-bold text-amber-800 dark:text-amber-300">
                公式：If + S + had + V-pp, S + would / could / might + have + V-pp
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-between text-xs">
                <span className="font-serif italic font-bold">
                  &ldquo;If they <strong>had checked</strong> the blueprint, the error <strong>would have been avoided</strong>.&rdquo;
                </span>
                <button
                  onClick={() => playTTS('If they had checked the blueprint, the error would have been avoided.')}
                  className="text-amber-600 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Volume2 className="size-3.5" /> 播放
                </button>
              </div>
            </div>
          )}

          {conditionalType === 'inversion' && (
            <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-white dark:bg-slate-900 space-y-3 text-xs">
              <div className="font-bold text-amber-900 dark:text-amber-200">省略 If 的倒裝天平公式：</div>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  1. 過去相反：If they had known... → <strong>Had they known</strong> the soil condition, they would have reinforced it.
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  2. 現在相反：If he were here... → <strong>Were he here</strong> today, he could approve the drawings.
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded">
                  3. 未來萬一：If you should need help... → <strong>Should you need</strong> any assistance, contact the site office.
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ==================================================== */}
      {/* MODULE 6: FIVE SENTENCE PATTERNS LAB                 */}
      {/* ==================================================== */}
      {activeTab === 'sentence-patterns' && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-5 gap-2 text-xs font-mono">
            {[
              { type: 'S+V', label: '第1類：S + V' },
              { type: 'S+V+O', label: '第2類：S + V + O' },
              { type: 'S+V+C', label: '第3類：S + V + C' },
              { type: 'S+V+IO+DO', label: '第4類：S + V + IO + DO' },
              { type: 'S+V+O+OC', label: '第5類：S + V + O + OC' },
            ].map((p, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-800 text-center font-bold">
                <span className="text-rose-600 dark:text-rose-400 block">{p.type}</span>
                <span className="text-[10px] text-slate-500">{p.label}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-rose-50/30 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-3">
            <h4 className="font-serif text-sm font-bold text-rose-900 dark:text-rose-200">
              特別收錄：使役動詞與感官動詞受詞補語（OC）規則表
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-rose-100 dark:border-rose-900/50 space-y-1">
                <div className="font-bold text-rose-700 dark:text-rose-300">使役動詞 (make / have / let)</div>
                <div>• 主動接<strong>原形動詞 (V)</strong>：The foreman made him <strong>wear</strong> a helmet.</div>
                <div>• 被動接<strong>過去分詞 (V-pp)</strong>：I will have the plan <strong>revised</strong>.</div>
                <div>• get 當使役時接 <strong>to + V</strong> (主動) 或 <strong>V-pp</strong> (被動)。</div>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-rose-100 dark:border-rose-900/50 space-y-1">
                <div className="font-bold text-rose-700 dark:text-rose-300">感官動詞 (see / hear / watch / feel)</div>
                <div>• 強調整個過程接<strong>原形動詞 (V)</strong>：I saw the crane <strong>lift</strong> the beam.</div>
                <div>• 強調正在進行接 <strong>V-ing</strong>：We heard the siren <strong>ringing</strong>.</div>
                <div>• 受詞被動接 <strong>V-pp</strong>：He saw the wall <strong>demolished</strong>.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* MODULE 7: READING INFOGRAPHICS & MULTI-TEXT LAB      */}
      {/* ==================================================== */}
      {activeTab === 'infographics' && (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-teal-200 dark:border-teal-800 space-y-2">
              <div className="font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1.5">
                <BarChart3 className="size-4" />
                <span>折線圖趨勢關鍵字 (Trends)</span>
              </div>
              <ul className="space-y-1 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                <li>• 上升：surge, climb, soar, rise, increase</li>
                <li>• 下降：plunge, drop, decline, decrease</li>
                <li>• 波動/平穩：fluctuate, level off, remain steady</li>
                <li>• 達到巔峰：reach a peak at...</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-teal-200 dark:border-teal-800 space-y-2">
              <div className="font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1.5">
                <BarChart3 className="size-4" />
                <span>圓餅圖與長條圖比例 (Proportions)</span>
              </div>
              <ul className="space-y-1 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                <li>• 佔比：account for, make up, consist of</li>
                <li>• 多數/少數：majority, minority</li>
                <li>• 兩倍/三倍：double, triple, twice as much</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-teal-200 dark:border-teal-800 space-y-2">
              <div className="font-bold text-teal-700 dark:text-teal-300 flex items-center gap-1.5">
                <BookOpen className="size-4" />
                <span>工程日程與公告掃讀法 (Scanning)</span>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
                <li>• <strong>先看題目關鍵字</strong>（時間、地點、人名、費用）</li>
                <li>• 定位標題 (Notice, Schedule, Safety Rules)</li>
                <li>• 注意星號附註與星號但書 (*Note, Exception)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
