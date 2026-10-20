'use client';

import React, { useState, useMemo } from 'react';
import { 
  allPeriodicExamPlans, 
  GradeLevel, 
  ExamPeriod 
} from '@/data/periodicExams';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  Award, 
  AlertTriangle, 
  Sparkles, 
  Printer, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Compass, 
  Layers, 
  Target, 
  Trophy
} from 'lucide-react';

export default function PeriodicExamHub() {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(11);
  const [selectedPeriod, setSelectedPeriod] = useState<ExamPeriod | 'all'>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedExamIds, setExpandedExamIds] = useState<Record<string, boolean>>({});
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    if (typeof window === 'undefined') return {};
    try {
      const saved = localStorage.getItem('arch_periodic_exam_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [activeViewMode, setActiveViewMode] = useState<'all' | 'handout' | 'cross-exam' | 'formulas'>('all');

  const toggleCheckItem = (id: string) => {
    const next = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(next);
    try {
      localStorage.setItem('arch_periodic_exam_checklist', JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedExamIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter plans
  const filteredPlans = useMemo(() => {
    return allPeriodicExamPlans.filter((plan) => {
      if (plan.grade !== selectedGrade) return false;
      if (selectedPeriod !== 'all' && plan.period !== selectedPeriod) return false;
      if (selectedSubject !== 'all' && plan.subjectSlug !== selectedSubject) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = plan.subjectName.toLowerCase().includes(q) || plan.periodName.toLowerCase().includes(q);
        const matchesScope = plan.examScope.toLowerCase().includes(q) || plan.handoutSummary.toLowerCase().includes(q);
        const matchesPoints = plan.knowledgePoints.some((p) => 
          p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q)
        );
        return matchesName || matchesScope || matchesPoints;
      }
      return true;
    });
  }, [selectedGrade, selectedPeriod, selectedSubject, searchQuery]);

  // Overall statistics for current grade
  const gradePlans = allPeriodicExamPlans.filter((p) => p.grade === selectedGrade);
  const totalKnowledgePoints = gradePlans.reduce((acc, p) => acc + p.knowledgePoints.length, 0);
  const totalFormulaCards = gradePlans.reduce((acc, p) => acc + p.cramFormulaCards.length, 0);
  const totalQuestions = gradePlans.reduce((acc, p) => acc + p.crossReferencedQuestions.length, 0);
  const totalChecklistCount = gradePlans.reduce((acc, p) => acc + p.preExamChecklist.length, 0);
  
  const checkedCount = Object.keys(checkedItems).filter(
    (k) => checkedItems[k] && gradePlans.some((p) => p.preExamChecklist.some((_, idx) => `${p.id}-check-${idx}` === k))
  ).length;

  const masteryPercent = totalChecklistCount > 0 ? Math.round((checkedCount / totalChecklistCount) * 100) : 0;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* ── RPDCA 研究規劃與實踐導引面板 ── */}
      <section className="rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/50 dark:from-indigo-950/30 dark:via-slate-900 dark:to-blue-950/20 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-indigo-100 dark:border-indigo-900/40 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-mono font-bold text-white shadow-xs">
                RPDCA 閉環自律學習系統
              </span>
              <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
                108 課綱與各大高工段考真題交叉比對
              </span>
              <span className="rounded-full bg-amber-600/10 px-3 py-1 text-xs font-mono font-bold text-amber-700 dark:text-amber-300 border border-amber-600/20">
                均一教育平台階梯技能樹
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              高工各科段考衝刺預備講義與真題對照庫
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              聚焦 <strong>高一至高三</strong>，特別深化 <strong>高二（國立台中高工建築科指標進度）</strong> 之第一次段考、第二次段考與期末考。完整編列教材章節知識點、考前 10 分鐘公式卡、名校考卷真題交叉剖析與均一階梯精熟檢核。
            </p>
          </div>

          {/* 列印與快速操作 */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-2xl bg-white dark:bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-xs transition-colors"
            >
              <Printer className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span>列印 A4 段考複習手冊</span>
            </button>
          </div>
        </div>

        {/* RPDCA 五大階段卡片 */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6 font-mono text-xs">
          <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 p-3.5 border border-indigo-100 dark:border-indigo-900/40">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold block text-[11px]">R · Research 研究</span>
            <span className="text-xs text-slate-700 dark:text-slate-300 font-sans mt-0.5 block">108課綱與教科書大綱</span>
          </div>
          <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 p-3.5 border border-blue-100 dark:border-blue-900/40">
            <span className="text-blue-600 dark:text-blue-400 font-bold block text-[11px]">P · Plan 計畫</span>
            <span className="text-xs text-slate-700 dark:text-slate-300 font-sans mt-0.5 block">高工三次段考範圍排程</span>
          </div>
          <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 p-3.5 border border-emerald-100 dark:border-emerald-900/40">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold block text-[11px]">D · Do 實踐</span>
            <span className="text-xs text-slate-700 dark:text-slate-300 font-sans mt-0.5 block">預備講義與考卷真題剖析</span>
          </div>
          <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 p-3.5 border border-amber-100 dark:border-amber-900/40">
            <span className="text-amber-600 dark:text-amber-400 font-bold block text-[11px]">C · Check 檢核</span>
            <span className="text-xs text-slate-700 dark:text-slate-300 font-sans mt-0.5 block">均一風格階梯掌握度追蹤</span>
          </div>
          <div className="rounded-2xl bg-white/80 dark:bg-slate-800/80 p-3.5 border border-rose-100 dark:border-rose-900/40">
            <span className="text-rose-600 dark:text-rose-400 font-bold block text-[11px]">A · Action 精進</span>
            <span className="text-xs text-slate-700 dark:text-slate-300 font-sans mt-0.5 block">避坑口訣與滿分衝刺</span>
          </div>
        </div>

        {/* 均一風格熟練度儀表板 */}
        <div className="mt-6 rounded-2xl bg-indigo-900/5 dark:bg-indigo-950/40 p-4 border border-indigo-200/60 dark:border-indigo-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-600 p-2.5 text-white">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                高{selectedGrade === 11 ? '二' : selectedGrade === 10 ? '一' : '三'}段考戰力整備指數
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{checkedCount} / {totalChecklistCount} 個檢核點達成</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                  {masteryPercent}% 完成率
                </span>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-64 space-y-1.5">
            <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${masteryPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              <span>{totalKnowledgePoints} 核心知識點</span>
              <span>{totalQuestions} 題真題對照</span>
              <span>{totalFormulaCards} 張公式卡</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 篩選過濾列 ── */}
      <section className="space-y-4">
        {/* 年級選擇標籤 */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="text-xs font-mono font-bold text-slate-500 mr-2 flex items-center gap-1">
            <Layers className="h-3.5 w-3.5" /> 年級配當:
          </span>
          <button
            onClick={() => setSelectedGrade(11)}
            className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              selectedGrade === 11
                ? 'bg-blue-600 text-white shadow-xs scale-105'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            ⭐ 高二（國立台中高工建築科指標專案）
          </button>
          <button
            onClick={() => setSelectedGrade(10)}
            className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              selectedGrade === 10
                ? 'bg-blue-600 text-white shadow-xs scale-105'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            高一（力學、製圖、數C、共同）
          </button>
          <button
            onClick={() => setSelectedGrade(12)}
            className={`rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              selectedGrade === 12
                ? 'bg-blue-600 text-white shadow-xs scale-105'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            高三（統測全模考、建築設計實務）
          </button>
        </div>

        {/* 段考期別與科目過濾列 */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* 段考期別 */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-xs font-mono text-slate-400 mr-1">段考別:</span>
            {[
              { id: 'all', label: '全部考期' },
              { id: 'midterm-1', label: '第一次段考（期中一）' },
              { id: 'midterm-2', label: '第二次段考（期中二）' },
              { id: 'final', label: '第三次段考（期末考）' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPeriod(p.id as ExamPeriod | 'all')}
                className={`rounded-xl px-3 py-1.5 font-medium transition-colors ${
                  selectedPeriod === p.id
                    ? 'bg-indigo-600 text-white font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* 視角切換 */}
          <div className="flex items-center gap-1 text-xs bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
            <button
              onClick={() => setActiveViewMode('all')}
              className={`rounded-xl px-2.5 py-1 transition-colors ${
                activeViewMode === 'all' ? 'bg-white dark:bg-slate-900 font-bold text-blue-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              全部總覽
            </button>
            <button
              onClick={() => setActiveViewMode('handout')}
              className={`rounded-xl px-2.5 py-1 transition-colors ${
                activeViewMode === 'handout' ? 'bg-white dark:bg-slate-900 font-bold text-blue-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              📖 預備講義
            </button>
            <button
              onClick={() => setActiveViewMode('cross-exam')}
              className={`rounded-xl px-2.5 py-1 transition-colors ${
                activeViewMode === 'cross-exam' ? 'bg-white dark:bg-slate-900 font-bold text-blue-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              📝 考卷真題比對
            </button>
            <button
              onClick={() => setActiveViewMode('formulas')}
              className={`rounded-xl px-2.5 py-1 transition-colors ${
                activeViewMode === 'formulas' ? 'bg-white dark:bg-slate-900 font-bold text-blue-600 shadow-xs' : 'text-slate-600'
              }`}
            >
              ⚡ 考前公式卡
            </button>
          </div>
        </div>

        {/* 搜尋與科目快速標籤 */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋段考知識點、公式、考題..."
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pl-9 pr-4 py-2 text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full text-xs">
            <span className="text-slate-400 font-mono text-[11px] mr-1">科目:</span>
            {[
              { slug: 'all', name: '全科' },
              { slug: 'materials', name: '材料與試驗 (專一)' },
              { slug: 'surveying', name: '測量實習 (專二)' },
              { slug: 'math-c', name: '數學 C' },
              { slug: 'english', name: '英語文' },
              { slug: 'chinese', name: '國語文' },
              { slug: 'mechanics', name: '工程力學' },
              { slug: 'drafting', name: '製圖實習' },
            ].map((sub) => (
              <button
                key={sub.slug}
                onClick={() => setSelectedSubject(sub.slug)}
                className={`rounded-xl px-2.5 py-1 text-[11px] transition-colors ${
                  selectedSubject === sub.slug
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 段考講義卡片清單 ── */}
      <div className="space-y-8">
        {filteredPlans.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 p-12 text-center text-slate-500">
            查無符合條件的段考講義或知識點，請調整上方篩選條件。
          </div>
        ) : (
          filteredPlans.map((plan) => {
            const isExpanded = expandedExamIds[plan.id] !== false; // 預設展開

            return (
              <article
                key={plan.id}
                id={plan.id}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs hover:border-blue-400/50 transition-all"
              >
                {/* 卡片標題頂部 */}
                <header className="border-b border-slate-100 dark:border-slate-800/80 p-5 sm:p-6 bg-slate-50/50 dark:bg-slate-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-[11px] font-mono font-bold text-white">
                        {plan.subjectName}
                      </span>
                      <span className="rounded-full bg-slate-200 dark:bg-slate-700 px-2.5 py-0.5 text-[11px] font-mono text-slate-800 dark:text-slate-200">
                        {plan.semesterTitle} · {plan.periodName}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        進度: {plan.weekRange} ｜ {plan.scoreWeight}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {plan.subjectName} {plan.periodName} 衝刺預備講義
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      📍 範圍：{plan.examScope}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-xl border border-indigo-200 dark:border-indigo-800/60">
                      {plan.targetSchool}
                    </span>
                    <button
                      onClick={() => toggleExpand(plan.id)}
                      className="rounded-xl p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
                      aria-label="展開或收合"
                    >
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </button>
                  </div>
                </header>

                {/* 展開之完整講義與真題對照內容 */}
                {isExpanded && (
                  <div className="p-5 sm:p-7 space-y-8">
                    {/* 講義核心導言與學校實務說明 */}
                    <div className="rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 p-4 border border-blue-100 dark:border-blue-900/40 text-xs text-blue-950 dark:text-blue-200 space-y-2">
                      <div className="font-bold flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span>本次段考預備講義核心導引與學校進度特點：</span>
                      </div>
                      <p className="leading-relaxed">
                        {plan.handoutSummary}
                      </p>
                      <div className="text-[11px] text-blue-700 dark:text-blue-300/80 pt-1 border-t border-blue-200/40 dark:border-blue-800/40">
                        🏫 台中高工實務：{plan.schoolContextNotes}
                      </div>
                    </div>

                    {/* 1. 知識點精講清單 */}
                    {(activeViewMode === 'all' || activeViewMode === 'handout') && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                          <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                            <span>108 課綱段考知識點預備講義精解</span>
                          </h3>
                          <span className="text-xs font-mono text-slate-400">
                            共 {plan.knowledgePoints.length} 個核心單元
                          </span>
                        </div>

                        <div className="space-y-4">
                          {plan.knowledgePoints.map((point) => (
                            <div
                              key={point.id}
                              className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-3 bg-white dark:bg-slate-900/70"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <span className="rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-mono text-[10px] font-bold px-2 py-0.5 border border-indigo-200 dark:border-indigo-800/50">
                                    {point.curriculumCode}
                                  </span>
                                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                                    {point.title}
                                  </h4>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-mono">
                                  <span className="text-amber-500">
                                    {'★'.repeat(point.importance)}{'☆'.repeat(5 - point.importance)}
                                  </span>
                                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] text-slate-500">
                                    {point.textbookChapter}
                                  </span>
                                </div>
                              </div>

                              {/* 觀念精講本文 */}
                              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {point.summary}
                              </p>

                              {/* 公式或核心法則卡 */}
                              {point.keyFormulaOrRule && (
                                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 font-mono text-xs text-blue-700 dark:text-blue-300 border border-slate-200/80 dark:border-slate-700/80">
                                  <span className="text-slate-400 text-[10px] block font-sans">核心公式／定理：</span>
                                  <code className="font-bold text-xs">{point.keyFormulaOrRule}</code>
                                </div>
                              )}

                              {/* 考前速記口訣與致命陷阱避坑 */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                                <div className="rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 p-3 border border-emerald-200/50 dark:border-emerald-900/40 space-y-1.5">
                                  <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                                    <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                                    <span>考前 30 秒秒殺速記口訣</span>
                                  </div>
                                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300">
                                    {point.cramTips.map((tip, i) => (
                                      <li key={i}>{tip}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="rounded-xl bg-rose-50/70 dark:bg-rose-950/30 p-3 border border-rose-200/50 dark:border-rose-900/40 space-y-1.5">
                                  <div className="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                                    <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
                                    <span>段考致命扣分陷阱（老師挖坑）</span>
                                  </div>
                                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {point.trapWarning}
                                  </p>
                                </div>
                              </div>

                              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 pt-1">
                                <span>均一對應精熟指標：</span>
                                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{point.junyiMasterySkill}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 2. 考前 10 分鐘速記公式卡 */}
                    {(activeViewMode === 'all' || activeViewMode === 'formulas') && plan.cramFormulaCards.length > 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                          <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Compass className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                            <span>考前 10 分鐘速記公式卡與記憶口訣</span>
                          </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {plan.cramFormulaCards.map((card, i) => (
                            <div
                              key={i}
                              className="rounded-2xl border border-amber-200/70 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/20 p-4 space-y-2"
                            >
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="font-bold text-slate-900 dark:text-white">{card.title}</span>
                                {card.unit && <span className="text-amber-700 dark:text-amber-300 font-bold">{card.unit}</span>}
                              </div>
                              <div className="rounded-xl bg-white dark:bg-slate-900 p-2.5 font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-800 overflow-x-auto">
                                {card.formula}
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                {card.notes}
                              </p>
                              {card.memoryMnemonic && (
                                <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-md">
                                  💡 記憶訣竅：{card.memoryMnemonic}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 3. 名校段考考卷真題交叉比對 */}
                    {(activeViewMode === 'all' || activeViewMode === 'cross-exam') && plan.crossReferencedQuestions.length > 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                          <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Target className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                            <span>名校段考真題考卷題目交叉比對（含 SOP 詳解）</span>
                          </h3>
                        </div>

                        <div className="space-y-4">
                          {plan.crossReferencedQuestions.map((q) => (
                            <div
                              key={q.id}
                              className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 space-y-4 bg-slate-50/40 dark:bg-slate-800/20"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                                <span className="rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 text-xs font-mono font-bold px-2 py-0.5">
                                  {q.sourceExam}
                                </span>
                                <span className="text-xs font-mono text-slate-400">
                                  標準解答: <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{q.answer}</strong>
                                </span>
                              </div>

                              {/* 題幹 */}
                              <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 font-medium leading-relaxed">
                                {q.questionStem}
                              </div>

                              {/* 四個選項 */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                                  <div
                                    key={opt}
                                    className={`rounded-xl p-2.5 border transition-colors ${
                                      opt === q.answer
                                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 font-bold'
                                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                                    }`}
                                  >
                                    <span className="font-mono mr-2">{opt}.</span>
                                    <span>{q.options[opt]}</span>
                                  </div>
                                ))}
                              </div>

                              {/* SOP 詳解 */}
                              <div className="rounded-xl bg-white dark:bg-slate-900 p-3.5 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                                  <Award className="h-4 w-4 text-emerald-600" />
                                  <span>解題 SOP 步驟詳解：</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {q.detailedExplanation}
                                </p>
                                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-rose-600 dark:text-rose-400">
                                  ⚠️ 命題教師常設陷阱解析：{q.examTrickAnalysis}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 4. 均一風格段考前階梯自我檢核清單 */}
                    <div className="rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 p-4 sm:p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          <h4 className="font-serif font-bold text-slate-900 dark:text-white text-sm">
                            均一階梯精熟檢核點（考前劃勾確認）
                          </h4>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          點擊勾選記錄你的掌握度
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {plan.preExamChecklist.map((check, idx) => {
                          const checkKey = `${plan.id}-check-${idx}`;
                          const isDone = !!checkedItems[checkKey];

                          return (
                            <button
                              key={idx}
                              onClick={() => toggleCheckItem(checkKey)}
                              className={`flex items-start gap-2.5 text-left p-2.5 rounded-xl border transition-all ${
                                isDone
                                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 font-medium'
                                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                              }`}
                            >
                              <div className="mt-0.5 flex-shrink-0">
                                {isDone ? (
                                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                ) : (
                                  <Circle className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                                )}
                              </div>
                              <span className="leading-snug">{check}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
