'use client';

import { useState } from 'react';
import { Check, Flame, Lightbulb } from 'lucide-react';
import MathText from '@/components/MathText';
import type { TopicContent } from '@/data/types';
import type { MappedExamQuestion } from './types';
import { buildExamWalkthrough } from '@/lib/pedagogy/masteryLesson';
import { isAnswerChoiceCorrect, isAnswerCorrect, isMultipleChoiceAnswer, toggleSelectedChoice } from '@/lib/examAnswers';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import { useStudentStore, type MistakeReason } from '@/lib/store/studentStore';
import { soundEngine } from '@/lib/audio/soundEffects';

const REASONS: { id: MistakeReason; label: string; hint: string }[] = [
  { id: 'K', label: '觀念不熟', hint: '觀念盲點' },
  { id: 'F', label: '公式記錯', hint: '公式' },
  { id: 'U', label: '單位換算', hint: '單位' },
  { id: 'G', label: '看錯圖', hint: '圖面' },
  { id: 'A', label: '計算失誤', hint: '計算' },
  { id: 'R', label: '審題不清', hint: '審題' },
];

interface ExamQuestionCardProps {
  question: MappedExamQuestion;
  index: number;
  topic: TopicContent;
  subjectTitle: string;
  topicRoute: string;
}

export default function ExamQuestionCard({ question: q, index, topic, subjectTitle, topicRoute }: ExamQuestionCardProps) {
  const [userChoice, setUserChoice] = useState<string>('');
  const { soundEnabled, addExp } = useGamificationStore();
  const { mistakeCards, addMistakeCard, updateAccuracy } = useStudentStore();

  const isAnswered = Boolean(userChoice);
  const isCorrect = isAnswered && isAnswerCorrect(q.answer, userChoice);
  const isMultiple = isMultipleChoiceAnswer(q.answer);
  const walkthrough = isAnswered ? buildExamWalkthrough(q, topic) : null;
  const isSaved = mistakeCards.some((card) => card.id === q.id);

  const choose = (choice: 'A' | 'B' | 'C' | 'D') => {
    const next = isMultiple ? toggleSelectedChoice(userChoice, choice) : choice;
    const first = !userChoice;
    setUserChoice(next);
    const right = isAnswerChoiceCorrect(q.answer, next);
    if (first && !isMultiple) updateAccuracy(right);
    if (right) {
      if (soundEnabled) soundEngine.playCorrectChime();
      addExp(15);
    } else if (soundEnabled) {
      soundEngine.playClickBeep();
    }
  };

  const saveMistake = (reason: MistakeReason) => {
    const detail = buildExamWalkthrough(q, topic);
    addMistakeCard({
      id: q.id,
      prompt: q.excerpt,
      correction: `【官方答案 ${q.answer}】${detail.correct}`,
      reason,
      subject: subjectTitle,
      topic: topic.title,
      userChoice: userChoice || '未作答',
      correctAnswer: q.answer,
      lessonRoute: topicRoute,
    });
  };

  return (
    <article
      className={`space-y-4 rounded-2xl border p-5 shadow-xs transition-colors sm:p-6 ${
        isAnswered
          ? isCorrect
            ? 'border-emerald-300 bg-emerald-50/25 dark:border-emerald-800 dark:bg-emerald-950/20'
            : 'border-rose-300 bg-rose-50/25 dark:border-rose-800 dark:bg-rose-950/20'
          : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-lg bg-indigo-600 px-2.5 py-1 font-mono text-xs font-bold text-white shadow-2xs">
          {q.sourceLabel || `${q.year} 年統測`} · 第 {q.questionNo || index + 1} 題
        </span>
        {q.sourceUrl ? (
          <a href={q.sourceUrl} target="_blank" rel="noreferrer" className="text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400">
            官方題本 ↗
          </a>
        ) : null}
      </div>

      <div className="text-base font-bold leading-relaxed text-slate-900 dark:text-white">
        <MathText content={q.excerpt} />
      </div>

      {q.figureImage ? (
        <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${q.figureImage}`}
            alt={`第 ${q.questionNo} 題圖`}
            loading="lazy"
            decoding="async"
            className="mx-auto max-h-80 w-auto object-contain"
          />
        </figure>
      ) : null}

      {isMultiple ? <p className="text-xs font-bold text-amber-700 dark:text-amber-300">本題為多選題，可選擇多個選項。</p> : null}

      <div className="exam-choice-grid grid gap-2 text-sm sm:grid-cols-2">
        {(['A', 'B', 'C', 'D'] as const).map((choice) => {
          const isSelected = userChoice.includes(choice);
          const isRightChoice = isAnswered && isAnswerChoiceCorrect(q.answer, choice);
          return (
            <button
              key={choice}
              type="button"
              onClick={() => choose(choice)}
              aria-pressed={isSelected}
              className={`print-keep exam-choice flex min-h-11 items-start gap-2.5 rounded-xl border p-3 text-left transition-colors ${
                isSelected
                  ? isRightChoice
                    ? 'border-emerald-600 bg-emerald-100/70 font-bold text-emerald-950 dark:bg-emerald-900/60 dark:text-emerald-100'
                    : 'border-rose-600 bg-rose-100/70 font-bold text-rose-950 dark:bg-rose-900/60 dark:text-rose-100'
                  : isRightChoice
                    ? 'border-emerald-500 bg-emerald-50 font-bold text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-200'
                    : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              <span className="shrink-0 font-mono font-bold">{choice}.</span>
              <span>
                <MathText content={q.options?.[choice] || `選項 ${choice}`} />
              </span>
            </button>
          );
        })}
      </div>

      {isAnswered && walkthrough ? (
        <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm text-slate-800 dark:border-slate-700/50 dark:bg-slate-800/70 dark:text-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 dark:border-slate-700">
            <p className={`font-bold ${isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-amber-800 dark:text-amber-300'}`}>
              {isCorrect ? '答對了！' : `你選 ${userChoice}，官方答案是 ${q.answer}。`}
            </p>
            {isSaved ? (
              <span className="inline-flex items-center gap-1 rounded-lg border border-emerald-300 bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                <Check className="size-3" aria-hidden="true" /> 已加入錯題本
              </span>
            ) : (
              <div className="flex flex-wrap items-center gap-1 text-xs">
                <span className="flex items-center gap-1 font-bold text-slate-500">
                  <Flame className="size-3 text-rose-500" aria-hidden="true" /> 錯在哪裡？
                </span>
                {REASONS.map((reason) => (
                  <button
                    key={reason.id}
                    type="button"
                    onClick={() => saveMistake(reason.id)}
                    className="rounded-md border border-rose-200 bg-rose-50/70 px-2 py-1 font-bold text-rose-700 transition-colors hover:bg-rose-600 hover:text-white dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300"
                    title={`標記為「${reason.label}」並加入 1／7／21 天間隔複習`}
                  >
                    {reason.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-3">
            <h3 className="flex items-center gap-2 font-bold text-blue-900 dark:text-blue-100">
              <Lightbulb className="size-4 text-amber-500" aria-hidden="true" /> 解題思路
            </h3>
            <ol className="space-y-3 leading-relaxed text-slate-700 dark:text-slate-300">
              <li><strong className="text-blue-700 dark:text-blue-300">1. 題目在問什麼：</strong>{walkthrough.restate}</li>
              <li><strong className="text-blue-700 dark:text-blue-300">2. 關鍵線索：</strong>{walkthrough.clues}</li>
              <li><strong className="text-blue-700 dark:text-blue-300">3. 用到的觀念：</strong><MathText content={walkthrough.rule} /></li>
              <li><strong className="text-blue-700 dark:text-blue-300">4. 為什麼是這個答案：</strong><MathText content={walkthrough.correct} /></li>
            </ol>
            {walkthrough.distractors.length ? (
              <div className="rounded-xl border border-amber-100 bg-amber-50/80 p-4 dark:border-amber-900/30 dark:bg-amber-950/20">
                <p className="font-bold text-amber-900 dark:text-amber-200">其他選項錯在哪裡</p>
                <ul className="mt-2 space-y-1.5 leading-relaxed text-amber-900/85 dark:text-amber-100/85">
                  {walkthrough.distractors.map((item) => <li key={item}>• <MathText content={item} /></li>)}
                </ul>
              </div>
            ) : null}
            <p className="rounded-xl border border-emerald-100 bg-emerald-50/80 p-4 leading-relaxed text-emerald-900 dark:border-emerald-900/30 dark:bg-emerald-950/20 dark:text-emerald-100">
              <strong>換個情境也會：</strong>{walkthrough.transfer}
            </p>
          </div>
          <a href="#principles" className="inline-block rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-white hover:text-blue-600 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800">
            回到觀念重讀 ↑
          </a>
        </div>
      ) : null}
    </article>
  );
}
