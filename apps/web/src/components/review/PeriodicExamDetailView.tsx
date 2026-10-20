'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PeriodicExamPlan } from '@/data/periodicExams';
import PeriodicExamSvgIllustration from './PeriodicExamSvgIllustrations';
import { 
  ArrowLeft, 
  Printer, 
  Download, 
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
  School,
  FileText,
  Info,
  Check
} from 'lucide-react';

interface Props {
  plan: PeriodicExamPlan;
}

export default function PeriodicExamDetailView({ plan }: Props) {
  // 預設開啟 A4 實體講義紙張版型模式 (Paper Booklet Mode)
  const [viewMode, setViewMode] = useState<'paper' | 'digital'>('paper');
  const [showPrintTips, setShowPrintTips] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  
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

  // 一鍵下載獨立離線可列印講義 HTML/PDF 文件
  const handleDownloadOfflineHandout = () => {
    const filename = `${plan.targetSchool}_${plan.subjectName}_${plan.periodName}_衝刺講義.html`;
    
    // 構造乾淨、自包含、支援直接雙擊離線開啟並直接 Ctrl+P 列印的單一 HTML 講義
    const htmlContent = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${plan.subjectName} ${plan.periodName} 考前衝刺預備講義 - ${plan.targetSchool}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 15mm 12mm 15mm 12mm;
    }
    *, *::before, *::after {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang TC", "Microsoft JhengHei", sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.6;
      font-size: 11pt;
      margin: 0;
      padding: 24px;
      max-width: 860px;
      margin: 0 auto;
    }
    .print-header {
      border-bottom: 2.5px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 20px;
    }
    .kicker {
      font-size: 9pt;
      font-weight: 700;
      color: #2563eb;
      letter-spacing: 0.05em;
    }
    .title {
      font-size: 20pt;
      font-weight: 800;
      color: #0f172a;
      margin: 6px 0;
      line-height: 1.3;
    }
    .meta {
      font-size: 9.5pt;
      color: #475569;
      margin-bottom: 4px;
    }
    .student-fields {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
      background: #f8fafc;
      border: 1.5px solid #cbd5e1;
      border-radius: 6px;
      padding: 10px 14px;
      margin-top: 12px;
      font-size: 10pt;
      font-weight: bold;
    }
    .section-title {
      font-size: 13pt;
      font-weight: 800;
      color: #1e3a8a;
      border-left: 5px solid #2563eb;
      padding-left: 10px;
      margin: 24px 0 12px 0;
      break-after: avoid;
    }
    .card {
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 14px;
      margin-bottom: 16px;
      background: #ffffff;
      break-inside: avoid;
    }
    .analogy-box {
      background: #fffbeb;
      border-left: 4px solid #f59e0b;
      padding: 10px 12px;
      margin: 10px 0;
      font-size: 10pt;
      color: #78350f;
      border-radius: 4px;
    }
    .formula-box {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      padding: 8px 12px;
      border-radius: 6px;
      font-family: monospace;
      font-size: 11pt;
      color: #1e40af;
      font-weight: bold;
      margin: 8px 0;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 10px;
    }
    .badge-tip {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      padding: 8px 10px;
      border-radius: 6px;
      font-size: 9.5pt;
      color: #065f46;
    }
    .badge-trap {
      background: #fef2f2;
      border: 1px solid #fecaca;
      padding: 8px 10px;
      border-radius: 6px;
      font-size: 9.5pt;
      color: #991b1b;
    }
    .notes-lines {
      border: 1.5px dashed #94a3b8;
      border-radius: 8px;
      padding: 16px;
      margin-top: 24px;
      break-inside: avoid;
    }
    .line-slot {
      height: 28px;
      border-bottom: 1px dashed #cbd5e1;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="background: #2563eb; color: #fff; padding: 12px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
    <strong>🖨️ 離線可列印講義已準備就緒！</strong> 請按 <strong>Ctrl + P</strong> (Mac: <strong>Cmd + P</strong>) 立即列印或存為 PDF（建議勾選「背景圖形」以獲得最佳印刷效果）。
  </div>

  <header class="print-header">
    <div class="kicker">108 課綱技術型高中各科段考衝刺預備講義 ｜ ${plan.category} ｜ ${plan.subjectName}</div>
    <h1 class="title">${plan.subjectName} ${plan.periodName} 考前衝刺預備講義</h1>
    <div class="meta"><strong>學校進度對照：</strong>${plan.targetSchool} ｜ <strong>學期考期：</strong>${plan.semesterTitle} ｜ <strong>配分：</strong>${plan.scoreWeight}</div>
    <div class="meta"><strong>考試進度範圍：</strong>${plan.examScope}</div>
    <div class="student-fields">
      <span>學校：_________________</span>
      <span>班級：_________________</span>
      <span>座號：_______</span>
      <span>姓名：_________________</span>
      <span>得分：_______</span>
      <span>教師簽名：_______</span>
    </div>
  </header>

  <h2 class="section-title">壹、零基礎段考破題心法</h2>
  <div class="card">
    <p style="margin: 0; color: #334155;">${plan.beginnerMindset || '掌握核心幾何定義與物理本質，避開公式代數死記硬背，掌握破題關鍵。'}</p>
  </div>

  <h2 class="section-title">貳、核心知識點精講與直覺圖解</h2>
  ${plan.knowledgePoints.map((p, i) => `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 8px;">
        <strong style="font-size: 11.5pt; color: #0f172a;">${i + 1}. ${p.title}</strong>
        <span style="font-size: 9pt; color: #64748b; font-family: monospace;">${p.curriculumCode} ｜ ${p.textbookChapter}</span>
      </div>
      <div class="analogy-box">
        <strong>💡 零基礎秒懂比喻：</strong>${p.intuitiveAnalogy || '先看清事物本質，再帶入數字公式。'}
      </div>
      <p style="margin: 6px 0; color: #1e293b;">${p.summary}</p>
      ${p.keyFormulaOrRule ? `<div class="formula-box">核心公式：${p.keyFormulaOrRule}</div>` : ''}
      <div class="grid-2">
        <div class="badge-tip">
          <strong>✓ 考前秒殺口訣：</strong>
          <ul style="margin: 4px 0 0 16px; padding: 0;">
            ${p.cramTips.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>
        <div class="badge-trap">
          <strong>⚠️ 命題扣分陷阱：</strong>
          <p style="margin: 4px 0 0 0;">${p.trapWarning}</p>
        </div>
      </div>
    </div>
  `).join('')}

  <h2 class="section-title">參、典型段考示範題逐步精解 (Step-by-Step SOP)</h2>
  ${plan.crossReferencedQuestions.map((q, idx) => `
    <div class="card">
      <div style="font-weight: bold; margin-bottom: 6px; color: #047857;">
        例題 ${idx + 1} ｜ ${q.sourceExam} (標準答案: ${q.answer})
      </div>
      <div style="margin-bottom: 10px;">${q.questionStem}</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px; font-size: 9.5pt;">
        <div><strong>(A)</strong> ${q.options.A}</div>
        <div><strong>(B)</strong> ${q.options.B}</div>
        <div><strong>(C)</strong> ${q.options.C}</div>
        <div><strong>(D)</strong> ${q.options.D}</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px; font-size: 9.5pt;">
        <div style="font-weight: bold; color: #1e3a8a; margin-bottom: 4px;">SOP 計算解析步驟：</div>
        <div style="white-space: pre-line; color: #334155;">${q.detailedExplanation}</div>
        <div style="color: #b91c1c; margin-top: 6px; font-size: 9pt;"><strong>陷阱提示：</strong>${q.examTrickAnalysis}</div>
      </div>
    </div>
  `).join('')}

  <h2 class="section-title">肆、考前 10 分鐘速記公式卡</h2>
  <div class="grid-2">
    ${plan.cramFormulaCards.map(c => `
      <div class="card" style="margin: 0;">
        <strong style="color: #0f172a;">${c.title}</strong>
        <div class="formula-box" style="margin: 6px 0;">${c.formula}</div>
        <div style="font-size: 9pt; color: #64748b;">${c.notes}</div>
        ${c.memoryMnemonic ? `<div style="font-size: 9pt; color: #047857; margin-top: 4px;"><strong>記憶訣竅：</strong>${c.memoryMnemonic}</div>` : ''}
      </div>
    `).join('')}
  </div>

  <h2 class="section-title">伍、均一階梯能力精熟自主檢核</h2>
  <div class="card">
    <div class="grid-2">
      ${plan.preExamChecklist.map((item) => `
        <div style="display: flex; gap: 8px; font-size: 9.5pt; align-items: flex-start;">
          <span style="display: inline-block; width: 14px; height: 14px; border: 1.5px solid #64748b; border-radius: 3px; flex-shrink: 0; margin-top: 3px;"></span>
          <span>${item}</span>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="notes-lines">
    <strong style="color: #475569; font-size: 10.5pt; display: block; margin-bottom: 8px;">陸、考後錯題檢討與自主修正筆記 (Post-Exam Reflection & Notes)</strong>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
    <div class="line-slot"></div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = plan.preExamChecklist.length > 0 
    ? Math.round((completedCount / plan.preExamChecklist.length) * 100) 
    : 0;

  // 映射高解析純向量 SVG 圖解類型
  const getSvgType = (subjectSlug: string, pointId: string): string => {
    if (subjectSlug === 'materials') {
      if (pointId.includes('wood') || pointId.includes('fsp')) return 'materials-wood-fsp';
      if (pointId.includes('water') || pointId.includes('cement-ratio') || pointId.includes('04')) return 'materials-water-cement';
      if (pointId.includes('sieve') || pointId.includes('aggregate') || pointId.includes('03')) return 'materials-aggregate-sieve';
      if (pointId.includes('01')) return 'materials-porosity';
      if (pointId.includes('02')) return 'materials-clinker';
      return 'materials-slump';
    }
    if (subjectSlug === 'surveying') {
      if (pointId.includes('theodolite') || pointId.includes('angle') || pointId.includes('s2-m1')) return 'surveying-theodolite-axes';
      if (pointId.includes('traverse') || pointId.includes('loop') || pointId.includes('s2-m2')) return 'surveying-traverse-loop';
      if (pointId.includes('area') || pointId.includes('shoelace')) return 'surveying-shoelace-area';
      return 'surveying-level-balance';
    }
    if (subjectSlug === 'math-c') {
      if (pointId.includes('parabola') || pointId.includes('s2')) return 'math-parabola-geometry';
      return 'math-space-projection';
    }
    if (subjectSlug === 'mechanics') {
      return 'mechanics-lami-forces';
    }
    if (subjectSlug === 'drafting') {
      return 'drafting-third-angle-box';
    }
    if (subjectSlug === 'english') {
      return 'english-relative-pronoun';
    }
    return 'default';
  };

  return (
    <div className="space-y-6">
      {/* ── 頂部導航與列印 / 下載工具橫幅 (螢幕顯示，列印時自動隱藏) ── */}
      <header className="print:hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/review/periodic-exams"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>返回高工段考講義總覽</span>
          </Link>

          {/* 視角與操作切換列 */}
          <div className="flex flex-wrap items-center gap-2">
            {/* 視角切換：A4 出版紙張排版 vs 數位互動排版 */}
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setViewMode('paper')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                  viewMode === 'paper'
                    ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>📄 A4 出版講義排版</span>
              </button>
              <button
                onClick={() => setViewMode('digital')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                  viewMode === 'digital'
                    ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
                <span>💻 數位卡片檢視</span>
              </button>
            </div>

            {/* 下載獨立離線講義 HTML 檔 */}
            <button
              onClick={handleDownloadOfflineHandout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 text-xs font-bold transition-all shadow-xs"
              title="下載單一獨立 HTML 檔案，包含全部排版樣式與向量圖，離線可直接雙擊開啟並轉存 PDF"
            >
              {downloadSuccess ? <Check className="h-4 w-4" /> : <Download className="h-4 w-4" />}
              <span>{downloadSuccess ? '已下載離線講義！' : '📥 下載離線講義 HTML'}</span>
            </button>

            {/* 一鍵列印 / 另存為 A4 PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs font-bold font-mono transition-all shadow-xs"
            >
              <Printer className="h-4 w-4" />
              <span>🖨️ 立即列印 / 存為 A4 PDF</span>
            </button>

            {/* 列印提示按鈕 */}
            <button
              onClick={() => setShowPrintTips(!showPrintTips)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="查看 A4 PDF 列印技巧"
            >
              <Info className="h-4 w-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* 列印指引提示橫幅 (點擊展開或收合) */}
        {showPrintTips && (
          <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/40 p-4 border border-blue-200 dark:border-blue-900/60 text-xs text-blue-900 dark:text-blue-200 space-y-2 animate-in fade-in">
            <div className="font-bold flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span>💡 A4 PDF 最佳列印與轉存技巧（瀏覽器列印設定）：</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li><strong>印表機目的地</strong>：選擇「另存為 PDF (Save as PDF)」。</li>
              <li><strong>邊界設定</strong>：請選擇「預設 (Default)」或「無邊界 (None)」。</li>
              <li><strong>選項設定</strong>：務必勾選<strong>「背景圖形 (Background graphics)」</strong>，以確保向量圖示與精緻重點顏色完整呈現。</li>
              <li><strong>直接下載</strong>：若不想設定瀏覽器列印，可點選上方「📥 下載離線講義 HTML」，下載後在任何電腦/手機都能離線開啟並隨時列印！</li>
            </ul>
          </div>
        )}
      </header>

      {/* ── 核心主體：出版級 A4 紙張容器 (Paper Booklet Layout) ── */}
      <div 
        className={`transition-all duration-300 ${
          viewMode === 'paper' 
            ? 'max-w-4xl mx-auto bg-white text-slate-900 p-6 sm:p-12 shadow-2xl rounded-3xl border-2 border-slate-300/80 space-y-8 font-sans' 
            : 'space-y-10'
        }`}
      >
        {/* ── 出版級 A4 考前講義封面資訊欄 (螢幕與紙本列印時皆以高質感印刷風格呈現) ── */}
        <section className="border-b-2 border-slate-900 pb-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500 border-b border-slate-200 pb-2">
            <span className="font-bold text-blue-700 tracking-wider">
              108 課綱技術型高中各科段考衝刺預備講義 ｜ {plan.category} ｜ {plan.subjectName}
            </span>
            <span>編號: {plan.id.toUpperCase()}</span>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-blue-600 px-2.5 py-0.5 text-xs font-mono font-bold text-white">
                {plan.subjectName}
              </span>
              <span className="rounded-md bg-slate-100 text-slate-800 px-2.5 py-0.5 text-xs font-mono font-bold border border-slate-300">
                {plan.semesterTitle} · {plan.periodName}
              </span>
              <span className="rounded-md bg-emerald-50 text-emerald-800 px-2.5 py-0.5 text-xs font-mono font-bold border border-emerald-300">
                {plan.targetSchool}
              </span>
              <span className="rounded-md bg-amber-50 text-amber-800 px-2.5 py-0.5 text-xs font-mono font-bold border border-amber-300">
                {plan.scoreWeight}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-2">
              {plan.subjectName} {plan.periodName} 考前衝刺預備講義
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              {plan.handoutSummary}
            </p>
          </div>

          {/* 考試範圍與學校進度 */}
          <div className="text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>進度：<strong>{plan.weekRange}</strong> ｜ 考試範圍：<strong>{plan.examScope}</strong></span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[11px] text-indigo-700">
              <School className="h-3.5 w-3.5" />
              <span>{plan.schoolContextNotes}</span>
            </div>
          </div>

          {/* ── 學生個人手寫資料填寫欄（實體出版講義必備） ── */}
          <div className="rounded-xl bg-slate-50 border-2 border-slate-300 p-3.5 text-xs font-mono font-bold text-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-1.5">
              <span>學校：</span>
              <span className="border-b border-slate-500 min-w-[120px] inline-block text-slate-700">
                {plan.targetSchool.replace('指標對照', '')}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>班級：</span>
              <span className="border-b border-slate-500 min-w-[90px] inline-block text-center">建築二甲</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>座號：</span>
              <span className="border-b border-slate-500 min-w-[50px] inline-block text-center">_____</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>姓名：</span>
              <span className="border-b border-slate-500 min-w-[90px] inline-block text-center">_________</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>段考得分：</span>
              <span className="border-b border-slate-500 min-w-[60px] inline-block text-center text-rose-600 font-extrabold">_____</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>教師簽名：</span>
              <span className="border-b border-slate-500 min-w-[70px] inline-block text-center">_____</span>
            </div>
          </div>
        </section>

        {/* ── 第一階段：零基礎也能懂的段考破題心法 ── */}
        <section className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/50 p-5 sm:p-6 space-y-3 break-inside-avoid">
          <div className="flex items-center gap-2 text-indigo-800 font-bold text-sm">
            <Sparkles className="h-5 w-5 text-indigo-600" />
            <h2 className="font-serif text-lg font-bold text-slate-900">
              壹、零基礎也能懂的段考破題心法與高分攻略
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {plan.beginnerMindset || `即使在此之前從未碰過這個科目，只要掌握「核心物理定義」與「題目破題第一眼」，段考題目 80% 都是標準基本分的變形。本講義特別為每位初學者設計了生活化比喻、清晰的向量工程圖解、逐步 SOP 解題步驟以及避開命題老師的扣分地雷，只要依序閱讀並完成例題，即可在段考穩拿高分。`}
          </p>

          {/* 熟練度進度追蹤 (列印時可勾選) */}
          <div className="pt-2 border-t border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <span className="font-mono text-slate-600">
              考前自律精熟達成度：<strong className="text-indigo-700 font-bold">{completedCount}</strong> / {plan.preExamChecklist.length} 項精熟
            </span>
            <div className="w-full sm:w-48 h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </section>

        {/* ── 第二階段：108 課綱知識點精講與直覺圖解 ── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                貳、108 課綱段考知識點精講與直覺圖解
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              共 {plan.knowledgePoints.length} 個必考核心單元
            </span>
          </div>

          <div className="space-y-8">
            {plan.knowledgePoints.map((point, idx) => {
              const svgType = getSvgType(plan.subjectSlug, point.id);

              return (
                <article
                  key={point.id}
                  className="rounded-2xl border border-slate-300 bg-white p-5 sm:p-7 space-y-5 shadow-xs break-inside-avoid"
                >
                  {/* 知識點頭部 */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-blue-100 text-blue-800 font-mono text-xs font-bold px-2 py-0.5">
                          單元 {idx + 1} ｜ {point.curriculumCode}
                        </span>
                        <span className="text-amber-500 text-xs">
                          {'★'.repeat(point.importance)}{'☆'.repeat(5 - point.importance)}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                        {point.title}
                      </h3>
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 font-mono">
                      {point.textbookChapter}
                    </span>
                  </div>

                  {/* 零基礎直覺生活化比喻卡 */}
                  <div className="rounded-xl bg-amber-50 p-4 border border-amber-200 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <Sparkles className="h-4 w-4 text-amber-600" />
                      <span>【零基礎秒懂直覺比喻】</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      {point.intuitiveAnalogy || `想像把生活中的經驗具體化：面對這個概念，先不要去死背枯燥的代數符號，而是抓住它的「物理本質」。就像蓋房子一樣，先看懂骨架支撐，細節數字自然水到渠成。`}
                    </p>
                  </div>

                  {/* 高清純向量教學圖示 */}
                  <div className="my-3 rounded-xl border border-slate-200 overflow-hidden bg-slate-50 p-2 text-center">
                    <PeriodicExamSvgIllustration type={svgType} />
                    <div className="text-[11px] font-mono text-slate-500 py-1.5 border-t border-slate-200 mt-2">
                      ▲ 圖 {idx + 1}：{point.title} 核心幾何構造與規範圖解
                    </div>
                  </div>

                  {/* 教科書級觀念精解本文 */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      觀念精講分析
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      {point.summary}
                    </p>
                  </div>

                  {/* 核心公式定理卡 */}
                  {point.keyFormulaOrRule && (
                    <div className="rounded-xl bg-blue-50 p-3.5 font-mono text-xs text-blue-900 border border-blue-200 space-y-1">
                      <span className="text-[10px] text-blue-600 font-bold block uppercase tracking-wider">
                        核心公式 / 判別定理
                      </span>
                      <code className="text-xs sm:text-sm font-bold block">{point.keyFormulaOrRule}</code>
                    </div>
                  )}

                  {/* 考前速記口訣與老師挖坑地雷 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl bg-emerald-50 p-3.5 border border-emerald-200 space-y-1.5">
                      <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        <span>考前 30 秒秒殺速記口訣</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                        {point.cramTips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-rose-50 p-3.5 border border-rose-200 space-y-1.5">
                      <div className="font-bold text-rose-800 flex items-center gap-1.5">
                        <AlertTriangle className="h-4 w-4 text-rose-600" />
                        <span>段考致命扣分陷阱（老師挖坑避雷）</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {point.trapWarning}
                      </p>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <span>均一教育平台能力指標技能：</span>
                    <span className="text-indigo-700 font-bold">{point.junyiMasterySkill}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── 第三階段：典型段考示範題逐步精解 (Step-by-Step SOP) ── */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-600" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                參、典型段考示範題逐步精解（零基礎 SOP）
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              名校考卷真題手把手帶練
            </span>
          </div>

          <div className="space-y-6">
            {plan.crossReferencedQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="rounded-2xl border border-slate-300 bg-white p-5 sm:p-7 space-y-4 shadow-xs break-inside-avoid"
              >
                {/* 題號與來源 */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <span className="rounded-md bg-emerald-100 text-emerald-900 text-xs font-mono font-bold px-2.5 py-1">
                    示範例題 {idx + 1} ｜ {q.sourceExam}
                  </span>
                  <span className="text-xs font-mono text-slate-600">
                    標準答案：<strong className="text-emerald-700 text-sm font-bold">{q.answer}</strong>
                  </span>
                </div>

                {/* 題目題幹 */}
                <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
                  {q.questionStem}
                </div>

                {/* 四個選項卡片 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {(['A', 'B', 'C', 'D'] as const).map((opt) => (
                    <div
                      key={opt}
                      className={`rounded-xl p-2.5 border transition-colors ${
                        opt === q.answer
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="font-mono font-bold mr-2">{opt}.</span>
                      <span>{q.options[opt]}</span>
                    </div>
                  ))}
                </div>

                {/* 零基礎破題思考脈絡 */}
                <div className="rounded-xl bg-indigo-50 p-3.5 border border-indigo-200 space-y-1 text-xs">
                  <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                    <HelpCircle className="h-4 w-4 text-indigo-600" />
                    <span>【小白破題思考導引：拿到考卷先看哪裡？】</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    先圈出題目給出的關鍵字與已知條件數值。思考本題考核的是哪一個物理量或法規限值，並在草稿紙上迅速寫下對應公式，檢查是否有單位換算（公尺/公分、公克/公斤）或正負符號的常見陷阱。
                  </p>
                </div>

                {/* 步驟化詳細解答 SOP */}
                <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Compass className="h-4 w-4 text-blue-600" />
                    <span>Step-by-Step 詳細步驟計算過程：</span>
                  </div>
                  <div className="text-slate-800 leading-relaxed whitespace-pre-line font-sans">
                    {q.detailedExplanation}
                  </div>
                  
                  {/* 老師挖坑避雷 */}
                  <div className="pt-2 border-t border-slate-200 text-xs text-rose-700 flex items-start gap-1.5">
                    <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>命題教師誘答陷阱解析：{q.examTrickAnalysis}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 第四階段：考前 10 分鐘速記公式卡 ── */}
        <section className="space-y-4 break-inside-avoid">
          <div className="flex items-center gap-2 border-b-2 border-slate-900 pb-2">
            <Compass className="h-5 w-5 text-amber-600" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              肆、考前 10 分鐘速記公式卡與記憶口訣
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {plan.cramFormulaCards.map((card, i) => (
              <div
                key={i}
                className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 space-y-2 shadow-xs"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-slate-900 text-sm">{card.title}</span>
                  {card.unit && <span className="text-amber-800 font-bold px-2 py-0.5 rounded-md bg-amber-100">{card.unit}</span>}
                </div>
                <div className="rounded-xl bg-white p-3 font-mono text-xs sm:text-sm font-bold text-indigo-700 border border-slate-200 overflow-x-auto">
                  {card.formula}
                </div>
                <p className="text-xs text-slate-600">
                  {card.notes}
                </p>
                {card.memoryMnemonic && (
                  <div className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    💡 記憶秘訣：{card.memoryMnemonic}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── 第五階段：均一階梯能力精熟自我檢核清單 ── */}
        <section className="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-5 sm:p-6 space-y-4 shadow-xs break-inside-avoid">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-indigo-200 pb-3">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-indigo-600" />
              <h3 className="font-serif text-lg font-bold text-slate-900">
                伍、均一階梯精熟能力檢核（考前逐條劃勾）
              </h3>
            </div>
            <span className="text-xs font-mono text-indigo-700 font-bold">
              進度：{completedCount} / {plan.preExamChecklist.length} 完成 ({progressPercent}%)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
            {plan.preExamChecklist.map((item, idx) => {
              const isDone = !!checkedItems[`check-${idx}`];

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleCheck(idx)}
                  className={`print-keep flex items-start gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isDone
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-medium'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300'
                  }`}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {isDone ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Circle className="h-4 w-4 text-slate-300" />
                    )}
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── 第六階段：實體手寫錯題檢討與自主修正筆記欄 (螢幕與紙本皆呈現) ── */}
        <section className="rounded-2xl border-2 border-dashed border-slate-400 p-5 sm:p-6 space-y-3 break-inside-avoid bg-slate-50/50">
          <div className="flex items-center justify-between border-b border-slate-300 pb-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-slate-600" />
              <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                陸、考後錯題檢討與自主修正筆記 (Post-Exam Reflection & Error Correction)
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">列印後手寫記錄</span>
          </div>

          <p className="text-[11px] text-slate-500">
            請記錄本次段考出錯的題目原因（如：公式帶錯、單位未換算、審題陷阱），並寫下一句修正承諾：
          </p>

          <div className="space-y-4 pt-1">
            {[1, 2, 3, 4, 5].map((line) => (
              <div key={line} className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-400 w-6">0{line}.</span>
                <div className="flex-1 border-b border-slate-300 h-6"></div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 底部列印與下載行動呼籲（免滾回最頂部） ── */}
        <div className="print:hidden pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500 font-mono">
            國立台中高工建築科段考衝刺專用 ｜ 108 課綱推薦講義
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadOfflineHandout}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 text-xs font-bold transition-all border border-slate-300"
            >
              <Download className="h-3.5 w-3.5" />
              <span>下載離線 HTML</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-xs font-bold transition-all shadow-xs"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>立即列印 A4 講義</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
