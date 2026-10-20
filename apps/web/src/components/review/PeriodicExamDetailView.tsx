'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PeriodicExamPlan } from '@/data/periodicExams';
import PeriodicExamSvgIllustration from './PeriodicExamSvgIllustrations';
import { 
  ArrowLeft, 
  FileDown, 
  BookOpen, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Circle, 
  Compass, 
  Target, 
  Award, 
  HelpCircle,
  Clock,
  Eye,
  School
} from 'lucide-react';

interface Props {
  plan: PeriodicExamPlan;
}

export default function PeriodicExamDetailView({ plan }: Props) {
  const [isPreviewPaperMode, setIsPreviewPaperMode] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    if (typeof window === 'undefined') return {};
    try {
      const saved = localStorage.getItem(`arch_exam_${plan.id}_checklist`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleCheck = (idx: number) => {
    const key = `check-${idx}`;
    const next = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(next);
    try {
      localStorage.setItem(`arch_exam_${plan.id}_checklist`, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = plan.preExamChecklist.length > 0 
    ? Math.round((completedCount / plan.preExamChecklist.length) * 100) 
    : 0;

  // 映射 SVG 圖解類型
  const getSvgType = (subjectSlug: string, pointId: string): string => {
    if (subjectSlug === 'materials') {
      if (pointId.includes('01')) return 'materials-porosity';
      if (pointId.includes('02')) return 'materials-clinker';
      return 'materials-slump';
    }
    if (subjectSlug === 'surveying') {
      if (pointId.includes('01')) return 'surveying-level-balance';
      return 'surveying-level-balance';
    }
    if (subjectSlug === 'math-c') {
      if (pointId.includes('s2')) return 'math-parabola-geometry';
      return 'math-space-projection';
    }
    if (subjectSlug === 'english') {
      return 'english-relative-pronoun';
    }
    return 'default';
  };

  return (
    <div className={`space-y-10 transition-colors ${isPreviewPaperMode ? 'max-w-4xl mx-auto bg-white text-slate-900 p-8 shadow-2xl rounded-3xl border border-slate-300' : ''}`}>
      {/* ── 列印專用 A4 考前講義封面資訊欄（紙本列印時自動出現在第一頁最上方） ── */}
      <div className="print-cover print-only" aria-hidden="true">
        <div className="print-cover-kicker">
          108 課綱技術型高中各科段考衝刺預備講義 ｜ {plan.category} ｜ {plan.subjectName}
        </div>
        <div className="print-cover-title">
          {plan.subjectName} {plan.periodName} 考前衝刺講義 ({plan.semesterTitle})
        </div>
        <div className="print-cover-meta">
          指標對照：{plan.targetSchool} ｜ 範圍：{plan.examScope} ｜ 配分權重：{plan.scoreWeight}
        </div>
        <div className="print-cover-meta">
          本講義收錄 <strong>{plan.knowledgePoints.length}</strong> 個核心觀念圖解、
          <strong>{plan.cramFormulaCards.length}</strong> 張考前速記公式卡、
          <strong>{plan.crossReferencedQuestions.length}</strong> 道名校段考真題逐步 SOP 詳解
        </div>
        <div className="print-cover-fields">
          <span>學校：_____________</span>
          <span>班級：_____________</span>
          <span>座號：_______</span>
          <span>姓名：_____________</span>
          <span>段考得分：_______</span>
        </div>
      </div>

      {/* ── 頂部導航與列印工具列 (螢幕檢視時顯示，列印時自動隱藏) ── */}
      <header className="print:hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/review/periodic-exams"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>返回高工段考講義總覽</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPreviewPaperMode(!isPreviewPaperMode)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold border transition-all ${
                isPreviewPaperMode
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-700 dark:bg-indigo-950 dark:border-indigo-800 dark:text-indigo-200'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <Eye className="h-4 w-4 text-indigo-600" />
              <span>{isPreviewPaperMode ? '關閉 A4 紙張預覽' : 'A4 紙張列印預覽模式'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold font-mono transition-all shadow-sm"
            >
              <FileDown className="h-4 w-4" />
              <span>🖨️ 下載 / 列印 A4 PDF</span>
            </button>
          </div>
        </div>

        {/* 標題橫幅卡 */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-mono font-bold text-white">
              {plan.subjectName}
            </span>
            <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {plan.semesterTitle} · {plan.periodName}
            </span>
            <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
              {plan.targetSchool}
            </span>
            <span className="rounded-full bg-amber-50 dark:bg-amber-950/60 px-3 py-1 text-xs font-mono font-bold text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
              {plan.scoreWeight}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {plan.subjectName} {plan.periodName} 預備講義與名校真題對照手冊
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {plan.handoutSummary}
            </p>
          </div>

          {/* 考試範圍與進度提示 */}
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>進度：<strong>{plan.weekRange}</strong> ｜ 考試範圍：<strong>{plan.examScope}</strong></span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
              <School className="h-3.5 w-3.5 text-indigo-600" />
              <span>{plan.schoolContextNotes}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── 第 1 部分：零基礎攻頂指引與破題心態 ── */}
      <section className="print-avoid-break rounded-3xl border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30 dark:from-indigo-950/30 dark:via-slate-900 dark:to-blue-950/20 p-6 sm:p-7 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
          <Sparkles className="h-5 w-5" />
          <h2 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
            第一階段：零基礎也能懂的段考破題心法
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {plan.beginnerMindset || `即使在此之前從未碰過這個科目，只要掌握「核心物理定義」與「題目破題第一眼」，段考題目 80% 都是標準基本分的變形。本講義特別為每位初學者設計了生活化比喻、清晰的向量工程圖解、逐步 SOP 解題步驟以及避開命題老師的扣分地雷，只要依序閱讀並完成例題，即可在段考穩拿高分。`}
        </p>

        {/* 熟練度即時進度條 */}
        <div className="pt-2 border-t border-indigo-100 dark:border-indigo-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-mono text-slate-500">
            考前自律精熟達成度：<strong className="text-indigo-600 dark:text-indigo-400">{completedCount}</strong> / {plan.preExamChecklist.length} 項精熟
          </span>
          <div className="w-full sm:w-48 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* ── 第 2 部分：核心知識點精講 + 零基礎直覺比喻 + 高清向量圖示 ── */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              第二階段：108 課綱知識點精講與直覺圖解
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            共 {plan.knowledgePoints.length} 個必考概念
          </span>
        </div>

        <div className="space-y-8">
          {plan.knowledgePoints.map((point, idx) => {
            const svgType = getSvgType(plan.subjectSlug, point.id);

            return (
              <article
                key={point.id}
                className="print-avoid-break rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-xs"
              >
                {/* 知識點頭部 */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200 font-mono text-xs font-bold px-2 py-0.5">
                        單元 {idx + 1} ｜ {point.curriculumCode}
                      </span>
                      <span className="text-amber-500 text-xs">
                        {'★'.repeat(point.importance)}{'☆'.repeat(5 - point.importance)}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                      {point.title}
                    </h3>
                  </div>

                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs text-slate-500 font-mono">
                    {point.textbookChapter}
                  </span>
                </div>

                {/* 零基礎直覺生活化比喻卡 */}
                <div className="rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 p-4 border border-amber-200/60 dark:border-amber-900/50 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                    <span>【零基礎秒懂直覺比喻】</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {point.intuitiveAnalogy || `想像把生活中的經驗具體化：面對這個概念，先不要去死背枯燥的代數符號，而是抓住它的「物理本質」。就像蓋房子一樣，先看懂骨架支撐，細節數字自然水到渠成。`}
                  </p>
                </div>

                {/* 高清向量教學圖示 */}
                <div className="my-4 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-950/50 p-2">
                  <PeriodicExamSvgIllustration type={svgType} />
                  <div className="text-center text-[11px] font-mono text-slate-500 dark:text-slate-400 py-2 border-t border-slate-200 dark:border-slate-800">
                    ▲ 圖 {idx + 1}：{point.title} 核心幾何構造與規範圖解
                  </div>
                </div>

                {/* 教科書級觀念精解本文 */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    觀念精講分析
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {point.summary}
                  </p>
                </div>

                {/* 核心公式定理卡 */}
                {point.keyFormulaOrRule && (
                  <div className="rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 p-4 font-mono text-xs text-blue-900 dark:text-blue-200 border border-blue-200/80 dark:border-blue-800/80 space-y-1">
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold block uppercase tracking-wider">
                      核心公式 / 判別定理
                    </span>
                    <code className="text-xs sm:text-sm font-bold block">{point.keyFormulaOrRule}</code>
                  </div>
                )}

                {/* 考前速記口訣與老師挖坑地雷 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 p-4 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                    <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      <span>考前 30 秒秒殺速記口訣</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                      {point.cramTips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 p-4 border border-rose-200 dark:border-rose-900/40 space-y-2">
                    <div className="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                      <AlertTriangle className="h-4 w-4 text-rose-600" />
                      <span>段考致命扣分陷阱（老師挖坑避雷）</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {point.trapWarning}
                    </p>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <span>均一教育平台能力指標技能：</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">{point.junyiMasterySkill}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── 第 3 部分：段考示範題逐步精解 (Step-by-Step SOP) ── */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-emerald-600" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              第三階段：典型段考示範題逐步精解（零基礎 SOP）
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            手把手帶練解題
          </span>
        </div>

        <div className="space-y-6">
          {plan.crossReferencedQuestions.map((q, idx) => (
            <div
              key={q.id}
              className="print-avoid-break rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 space-y-5 shadow-xs"
            >
              {/* 題號與來源 */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 text-xs font-mono font-bold px-2.5 py-1">
                  示範例題 {idx + 1} ｜ {q.sourceExam}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  標準答案：<strong className="text-emerald-600 dark:text-emerald-400 text-sm">{q.answer}</strong>
                </span>
              </div>

              {/* 題目題幹 */}
              <div className="text-sm sm:text-base font-medium text-slate-900 dark:text-white leading-relaxed">
                {q.questionStem}
              </div>

              {/* 四個選項卡片 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                  <div
                    key={opt}
                    className={`rounded-2xl p-3 border transition-colors ${
                      opt === q.answer
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 font-bold'
                        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="font-mono font-bold mr-2">{opt}.</span>
                    <span>{q.options[opt]}</span>
                  </div>
                ))}
              </div>

              {/* 零基礎破題思考脈絡 */}
              <div className="rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 p-4 border border-indigo-200/60 dark:border-indigo-900/50 space-y-1.5 text-xs">
                <div className="font-bold text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
                  <HelpCircle className="h-4 w-4 text-indigo-600" />
                  <span>【小白破題思考導引：拿到考卷先看哪裡？】</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  先圈出題目給出的關鍵字與已知條件數值。思考本題考核的是哪一個物理量或法規限值，並在草稿紙上迅速寫下對應公式，檢查是否有單位換算（公尺/公分、公克/公斤）或正負符號的常見陷阱。
                </p>
              </div>

              {/* 步驟化詳細解答 SOP */}
              <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-5 border border-slate-200 dark:border-slate-700 space-y-3 text-xs sm:text-sm">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Compass className="h-4 w-4 text-blue-600" />
                  <span>Step-by-Step 詳細步驟計算過程：</span>
                </div>
                <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                  {q.detailedExplanation}
                </div>
                
                {/* 老師挖坑避雷 */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs text-rose-600 dark:text-rose-400 flex items-start gap-1.5">
                  <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>命題教師誘答陷阱解析：{q.examTrickAnalysis}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 第 4 部分：考前 10 分鐘速記公式卡 ── */}
      <section className="print-avoid-break space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <Compass className="h-5 w-5 text-amber-600" />
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            第四階段：考前 10 分鐘速記公式卡與記憶口訣
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {plan.cramFormulaCards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 p-5 space-y-2.5 shadow-xs"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-slate-900 dark:text-white text-sm">{card.title}</span>
                {card.unit && <span className="text-amber-800 dark:text-amber-200 font-bold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/60">{card.unit}</span>}
              </div>
              <div className="rounded-xl bg-white dark:bg-slate-900 p-3 font-mono text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-800 overflow-x-auto">
                {card.formula}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {card.notes}
              </p>
              {card.memoryMnemonic && (
                <div className="text-xs font-mono text-emerald-800 dark:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40">
                  💡 記憶秘訣：{card.memoryMnemonic}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── 第 5 部分：均一階梯精熟檢核清單 ── */}
      <section className="print-avoid-break rounded-3xl border border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 p-6 sm:p-7 space-y-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-100 dark:border-indigo-900/40 pb-3">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-indigo-600" />
            <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
              第五階段：均一階梯精熟能力檢核（考前逐條劃勾）
            </h3>
          </div>
          <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold">
            進度：{completedCount} / {plan.preExamChecklist.length} 完成 ({progressPercent}%)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          {plan.preExamChecklist.map((item, idx) => {
            const isDone = !!checkedItems[`check-${idx}`];

            return (
              <button
                key={idx}
                type="button"
                onClick={() => toggleCheck(idx)}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
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
                <span className="leading-relaxed">{item}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── 第 6 部分：列印專用手寫筆記與考後錯題回顧欄 (紙本列印時自動出現在講義底端) ── */}
      <div className="print-note-lines print-only" aria-hidden="true">
        <div className="print-cover-kicker" style={{ marginBottom: '8px' }}>
          考後錯題檢討與自主修正筆記 (Post-Exam Reflection & Notes)
        </div>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}
