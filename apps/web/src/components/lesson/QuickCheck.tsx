'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import MathText from '@/components/MathText';
import type { TopicContent } from '@/data/types';
import { stripMarkup } from '@/data/knowledgeFramework';
import { useStudentStore } from '@/lib/store/studentStore';

type JudgeItem = { kind: 'judge'; id: string; statement: string; isTrue: boolean; explanation: string; note?: string };
type RecallItem = { kind: 'recall'; id: string; prompt: string; answer: string; source: string };
type CheckItem = JudgeItem | RecallItem;

/**
 * 隨堂小測：完全由本章資料產生，不使用通用樣板題。
 * 1. 是非判斷：取自 fatalTraps 的「錯誤直覺」與「正確思路」。
 * 2. 回想卡：取自觀念表格的第一欄 → 第二欄，或觀念公式。
 */
export function buildQuickCheck(topic: TopicContent): CheckItem[] {
  const items: CheckItem[] = [];
  (topic.fatalTraps ?? []).slice(0, 3).forEach((trap, index) => {
    const showWrong = index % 2 === 0;
    items.push({
      kind: 'judge',
      id: `trap-${index}`,
      statement: showWrong ? trap.wrongThinking : trap.correctThinking,
      isTrue: !showWrong,
      explanation: trap.correctThinking,
      note: trap.trapDescription,
    });
  });

  for (const [conceptIndex, concept] of topic.concepts.entries()) {
    if (items.length >= 4) break;
    const table = concept.table;
    if (table && table.headers.length >= 2 && table.rows.length >= 2) {
      const row = table.rows[Math.min(1, table.rows.length - 1)];
      if (row[0] && row[1] && row[1].length <= 160) {
        items.push({
          kind: 'recall',
          id: `table-${conceptIndex}`,
          prompt: `「${stripMarkup(concept.heading)}」表格中，**${stripMarkup(row[0])}** 的「${stripMarkup(table.headers[1])}」是什麼？`,
          answer: row[1],
          source: `觀念 ${conceptIndex + 1}`,
        });
        continue;
      }
    }
    if (concept.formula && concept.formula.length <= 220) {
      items.push({
        kind: 'recall',
        id: `formula-${conceptIndex}`,
        prompt: `不看上文，寫出「${stripMarkup(concept.heading)}」的關鍵公式或關係式。`,
        answer: concept.formula,
        source: `觀念 ${conceptIndex + 1}`,
      });
    }
  }
  return items.slice(0, 4);
}

interface QuickCheckProps {
  topic: TopicContent;
  subjectTitle: string;
  topicRoute: string;
}

export default function QuickCheck({ topic, subjectTitle, topicRoute }: QuickCheckProps) {
  const items = useMemo(() => buildQuickCheck(topic), [topic]);
  const [answers, setAnswers] = useState<Record<string, 'correct' | 'wrong'>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const { addMistakeCard, updateAccuracy } = useStudentStore();

  if (!items.length) return null;

  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter((value) => value === 'correct').length;

  const record = (item: CheckItem, correct: boolean, prompt: string, correction: string) => {
    if (answers[item.id]) return;
    setAnswers((prev) => ({ ...prev, [item.id]: correct ? 'correct' : 'wrong' }));
    setRevealed((prev) => ({ ...prev, [item.id]: true }));
    updateAccuracy(correct);
    if (!correct) {
      addMistakeCard({
        id: `quick-${topicRoute}-${item.id}`,
        prompt: stripMarkup(prompt),
        correction: stripMarkup(correction),
        reason: 'K',
        subject: subjectTitle,
        topic: topic.title,
        lessonRoute: topicRoute,
      });
    }
  };

  return (
    <section id="quick-check" aria-labelledby="quick-check-title" className="scroll-mt-28 space-y-4 rounded-2xl border border-violet-200 bg-violet-50/40 p-5 dark:border-violet-900/60 dark:bg-violet-950/15 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-violet-700 dark:text-violet-300">讀完先自我檢測 · 約 2 分鐘</p>
          <h2 id="quick-check-title" className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">隨堂小測</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">題目取自本章內容。答錯的題目會自動放進錯題本，1、7、21 天後提醒你複習。</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold text-violet-800 dark:text-violet-200">
          <span className="rounded-full bg-white px-3 py-1 shadow-xs dark:bg-slate-900">
            {answeredCount}/{items.length} 題 · 答對 {correctCount}
          </span>
          {answeredCount > 0 ? (
            <button
              type="button"
              onClick={() => { setAnswers({}); setRevealed({}); }}
              className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-violet-700 hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-900/40"
            >
              <RotateCcw className="size-3.5" aria-hidden="true" /> 重做
            </button>
          ) : null}
        </div>
      </div>

      <ol className="space-y-3">
        {items.map((item, index) => {
          const result = answers[item.id];
          return (
            <li key={item.id} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:p-5">
              <p className="mb-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                第 {index + 1} 題 · {item.kind === 'judge' ? '是非判斷' : `回想（${item.source}）`}
              </p>
              {item.kind === 'judge' ? (
                <>
                  <p className="text-[15px] leading-relaxed text-slate-900 dark:text-slate-100">
                    「<MathText content={item.statement} />」這個說法正確嗎？
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[{ label: '正確', value: true }, { label: '錯誤', value: false }].map((option) => {
                      const chosen = result && (option.value === item.isTrue) === (result === 'correct');
                      return (
                        <button
                          key={option.label}
                          type="button"
                          disabled={Boolean(result)}
                          onClick={() => record(item, option.value === item.isTrue, item.statement, item.explanation)}
                          className={`min-h-10 rounded-lg border px-5 text-sm font-bold transition-colors disabled:cursor-default ${
                            result && option.value === item.isTrue
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200'
                              : chosen
                                ? 'border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200'
                                : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-violet-400 hover:bg-violet-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                  {result ? (
                    <div className={`mt-3 rounded-lg p-3 text-sm leading-relaxed ${result === 'correct' ? 'bg-emerald-50 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-100' : 'bg-rose-50 text-rose-950 dark:bg-rose-950/30 dark:text-rose-100'}`}>
                      <p className="mb-1 flex items-center gap-1.5 font-bold">
                        {result === 'correct' ? <CheckCircle2 className="size-4" aria-hidden="true" /> : <XCircle className="size-4" aria-hidden="true" />}
                        {result === 'correct' ? '答對了' : '答錯了，已加入錯題本'}：這個說法{item.isTrue ? '正確' : '是常見的錯誤直覺'}。
                      </p>
                      {!item.isTrue ? (
                        <p>
                          <strong>正確思路：</strong>
                          <MathText content={item.explanation} />
                        </p>
                      ) : null}
                      {item.note ? <p className="mt-1 text-xs opacity-80">為什麼重要：{stripMarkup(item.note)}</p> : null}
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  <p className="text-[15px] leading-relaxed text-slate-900 dark:text-slate-100">
                    <MathText content={item.prompt} />
                  </p>
                  {!revealed[item.id] ? (
                    <button
                      type="button"
                      onClick={() => setRevealed((prev) => ({ ...prev, [item.id]: true }))}
                      className="mt-3 min-h-10 rounded-lg border border-violet-300 bg-violet-50 px-4 text-sm font-bold text-violet-800 hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-200"
                    >
                      先在心裡想好，再看答案
                    </button>
                  ) : (
                    <div className="mt-3 space-y-3">
                      <div className="whitespace-pre-line rounded-lg bg-slate-50 p-3 text-sm leading-relaxed text-slate-800 dark:bg-slate-800/60 dark:text-slate-200">
                        <MathText content={item.answer} />
                      </div>
                      {result ? (
                        <p className={`text-sm font-bold ${result === 'correct' ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>
                          {result === 'correct' ? '很好，記住了。' : '沒關係，已加入錯題本，之後會提醒你複習。'}
                        </p>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          <button type="button" onClick={() => record(item, true, item.prompt, item.answer)} className="min-h-10 rounded-lg border border-emerald-400 bg-emerald-50 px-4 text-sm font-bold text-emerald-800 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
                            我想到了
                          </button>
                          <button type="button" onClick={() => record(item, false, item.prompt, item.answer)} className="min-h-10 rounded-lg border border-rose-300 bg-rose-50 px-4 text-sm font-bold text-rose-800 hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200">
                            沒想到
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
