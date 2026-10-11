'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertCircle, RotateCcw, Flame, Check } from 'lucide-react';
import type { TopicContent, SubjectData } from '@/data/types';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import { useStudentStore } from '@/lib/store/studentStore';
import { soundEngine } from '@/lib/audio/soundEffects';
import MathText from '@/components/MathText';

interface TopicInteractiveMicroQuizProps {
  subject: SubjectData;
  topic: TopicContent;
}

interface MicroQuestion {
  id: string;
  question: string;
  options: { label: string; text: string; correct: boolean; explanation: string }[];
}

export default function TopicInteractiveMicroQuiz({ subject, topic }: TopicInteractiveMicroQuizProps) {
  const { addExp, soundEnabled } = useGamificationStore();
  const { addMistakeCard } = useStudentStore();

  // Generate 2 structured micro-questions dynamically from topic concepts
  const microQuestions: MicroQuestion[] = React.useMemo(() => {
    const concepts = topic.concepts.slice(0, 3);
    const firstConcept = concepts[0] || { heading: topic.title, body: topic.desc };
    const secondConcept = concepts[1] || firstConcept;

    return [
      {
        id: `mq-${topic.slug}-1`,
        question: `關於【${firstConcept.heading}】的核心觀念判斷，下列何者正確？`,
        options: [
          {
            label: 'A',
            text: `適用此觀念時，必須滿足題幹隱含的物理因果與邊界限制條件。`,
            correct: true,
            explanation: `正確！108 課綱強調理解本質：${firstConcept.heading} 強調物理因果與邊界條件，而非死背算式。`,
          },
          {
            label: 'B',
            text: `只要公式看起來熟悉，數值代入即可，無需考慮量綱單位換算。`,
            correct: false,
            explanation: `錯誤！工程計算中最常發生的致命陷阱就是未進行量綱換算（如 N 與 kN、m 與 cm）。`,
          },
          {
            label: 'C',
            text: `此原理僅適用於理想狀況，營造現場完全無法派上用場。`,
            correct: false,
            explanation: `錯誤！高職建築科專業科目皆對齊 CNS 規範與現場施工實務，學理與實務高度契合。`,
          },
        ],
      },
      {
        id: `mq-${topic.slug}-2`,
        question: `若在工程分析或考試題幹中遇到【${secondConcept.heading}】，最佳解題思維是？`,
        options: [
          {
            label: 'A',
            text: `直接猜測最接近整數的選項，節省時間。`,
            correct: false,
            explanation: `錯誤！大考素養題型多具備精確誘答項，猜測易落入陷阱。`,
          },
          {
            label: 'B',
            text: `先畫自由體圖或示意草圖，理清受力/幾何關係，再列出平衡關係式求解。`,
            correct: true,
            explanation: `完全正確！名師解題 SOP：建構幾何圖 ➔ 抓關鍵線索 ➔ 列平衡式 ➔ 驗算單位。`,
          },
          {
            label: 'C',
            text: `放棄題幹文字，只看最後一句問什麼就直接套公式。`,
            correct: false,
            explanation: `錯誤！108 課綱題組往往在前面段落埋有重要限制前提，忽略題幹極易誤判。`,
          },
        ],
      },
    ];
  }, [topic]);

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [answeredStatus, setAnsweredStatus] = useState<Record<string, boolean>>({});
  const [taggedMistakes, setTaggedMistakes] = useState<Record<string, boolean>>({});

  const handleSelectOption = (q: MicroQuestion, optLabel: string) => {
    if (answeredStatus[q.id]) return; // already answered

    const chosen = q.options.find((o) => o.label === optLabel);
    if (!chosen) return;

    setSelectedAnswers((prev) => ({ ...prev, [q.id]: optLabel }));
    setAnsweredStatus((prev) => ({ ...prev, [q.id]: true }));

    if (chosen.correct) {
      if (soundEnabled) soundEngine.playCorrectChime();
      addExp(15);
    } else {
      if (soundEnabled) soundEngine.playClickBeep();
    }
  };

  const handleAddToMistakes = (q: MicroQuestion) => {
    addMistakeCard({
      id: q.id,
      prompt: q.question,
      correction: q.options.find((o) => o.correct)?.explanation || '請複習本章核心觀念',
      reason: 'K',
      subject: subject.title,
      topic: topic.title,
      userChoice: selectedAnswers[q.id] || '未作答',
      correctAnswer: q.options.find((o) => o.correct)?.label || 'A',
      lessonRoute: `/subjects/${subject.slug}/${topic.slug}`,
    });
    setTaggedMistakes((prev) => ({ ...prev, [q.id]: true }));
    if (soundEnabled) soundEngine.playClickBeep();
  };

  const handleReset = (qId: string) => {
    setSelectedAnswers((prev) => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
    setAnsweredStatus((prev) => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
    setTaggedMistakes((prev) => {
      const next = { ...prev };
      delete next[qId];
      return next;
    });
  };

  return (
    <section className="rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 p-6 sm:p-8 shadow-xs dark:border-blue-900/40 dark:from-blue-950/20 dark:via-slate-900 dark:to-indigo-950/20 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue-100 pb-4 dark:border-blue-900/40">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 font-mono text-xs font-bold text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
            <Sparkles className="size-3.5 text-amber-500" /> 30 秒觀念微檢測 · 即學即測
          </span>
          <h3 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            動動腦！你剛剛真的讀懂了嗎？
          </h3>
        </div>
        <span className="text-xs font-mono text-slate-500">答對每題獲得 +15 EXP</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {microQuestions.map((q, qIndex) => {
          const isAnswered = answeredStatus[q.id];
          const selected = selectedAnswers[q.id];
          const selectedOption = q.options.find((o) => o.label === selected);

          return (
            <div
              key={q.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900/90 space-y-4"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-600 dark:text-blue-400 mb-2">
                  <span>觀念檢測 #{qIndex + 1}</span>
                  {isAnswered && (
                    <button
                      type="button"
                      onClick={() => handleReset(q.id)}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer inline-flex items-center gap-1 text-[11px]"
                    >
                      <RotateCcw className="size-3" /> 重測
                    </button>
                  )}
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  <MathText content={q.question} />
                </p>

                {/* Option Buttons */}
                <div className="mt-4 space-y-2.5">
                  {q.options.map((opt) => {
                    const isChosen = selected === opt.label;
                    let style = 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:bg-slate-800';

                    if (isAnswered) {
                      if (opt.correct) {
                        style = 'border-emerald-400 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-bold';
                      } else if (isChosen && !opt.correct) {
                        style = 'border-rose-400 bg-rose-50 dark:border-rose-700 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200 font-bold';
                      } else {
                        style = 'border-slate-100 opacity-60 dark:border-slate-800';
                      }
                    }

                    return (
                      <button
                        key={opt.label}
                        type="button"
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(q, opt.label)}
                        className={`w-full flex items-start gap-2.5 rounded-xl border p-3 text-left text-xs transition-all cursor-pointer disabled:cursor-default ${style}`}
                      >
                        <span className="font-mono font-bold shrink-0">{opt.label}.</span>
                        <span className="flex-1 leading-relaxed">{opt.text}</span>
                        {isAnswered && opt.correct && (
                          <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                        )}
                        {isAnswered && isChosen && !opt.correct && (
                          <AlertCircle className="size-4 text-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Instant Feedback Panel */}
              {isAnswered && selectedOption && (
                <div
                  className={`rounded-xl p-3.5 text-xs leading-relaxed border space-y-2 animate-in fade-in duration-200 ${
                    selectedOption.correct
                      ? 'border-emerald-200 bg-emerald-50/70 text-emerald-900 dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-200'
                      : 'border-rose-200 bg-rose-50/70 text-rose-900 dark:border-rose-800/60 dark:bg-rose-950/30 dark:text-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>{selectedOption.correct ? '🎉 觀念正確！已獲 +15 EXP' : '💡 觀念盲點拆解'}</span>
                    {!selectedOption.correct && !taggedMistakes[q.id] && (
                      <button
                        type="button"
                        onClick={() => handleAddToMistakes(q)}
                        className="inline-flex items-center gap-1 rounded-md bg-rose-600 px-2 py-0.5 text-[10px] text-white hover:bg-rose-700 cursor-pointer"
                      >
                        <Flame className="size-3" /> 存入錯題本
                      </button>
                    )}
                    {taggedMistakes[q.id] && (
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold inline-flex items-center gap-0.5">
                        <Check className="size-3" /> 已存入複習本
                      </span>
                    )}
                  </div>
                  <p>{selectedOption.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
