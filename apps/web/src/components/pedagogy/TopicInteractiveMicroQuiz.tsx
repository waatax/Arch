'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Flame, RotateCcw, Star, Target, Trophy, XCircle } from 'lucide-react';
import type { TopicContent, SubjectData } from '@/data/types';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import { useStudentStore } from '@/lib/store/studentStore';
import { soundEngine } from '@/lib/audio/soundEffects';
import MathText from '@/components/MathText';

interface TopicInteractiveMicroQuizProps {
  subject: SubjectData;
  topic: TopicContent;
}

type QuizItem = NonNullable<TopicContent['boostQuiz']>[number];

interface StoredRecord {
  /** 最佳一次的「第一次就答對」題數 */
  best: number;
  total: number;
  /** 已領過探索值的題目索引，避免重複刷分 */
  rewarded: number[];
}

const STORE_KEY = 'arch:boost-challenge:v1';
const LABELS = ['A', 'B', 'C', 'D'];
const EXP_PER_ITEM = 15;

function readStore(): Record<string, StoredRecord> {
  try {
    return JSON.parse(window.localStorage.getItem(STORE_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function writeRecord(route: string, record: StoredRecord) {
  try {
    const all = readStore();
    all[route] = record;
    window.localStorage.setItem(STORE_KEY, JSON.stringify(all));
  } catch {
    /* 無法儲存時仍可正常作答 */
  }
}

function starsFor(correct: number, total: number): number {
  if (total === 0) return 0;
  if (correct === total) return 3;
  if (correct / total >= 0.6) return 2;
  return correct > 0 ? 1 : 0;
}

/**
 * 頂標挑戰：每個主題的手寫四選一題組。
 * 一次一題、答錯不扣分；錯題自動進入錯題本，並可在結算後只重練錯題。
 */
export default function TopicInteractiveMicroQuiz({ subject, topic }: TopicInteractiveMicroQuizProps) {
  const { addExp, soundEnabled } = useGamificationStore();
  const { addMistakeCard } = useStudentStore();
  const route = `/subjects/${subject.slug}/${topic.slug}`;
  const items: QuizItem[] = useMemo(() => topic.boostQuiz ?? [], [topic.boostQuiz]);

  /** 目前這一輪要作答的題目索引 */
  const [queue, setQueue] = useState<number[]>(() => items.map((_, i) => i));
  const [cursor, setCursor] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [roundResults, setRoundResults] = useState<Record<number, boolean>>({});
  const [combo, setCombo] = useState(0);
  const [bestCombo, setBestCombo] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isFullRound, setIsFullRound] = useState(true);
  const [record, setRecord] = useState<StoredRecord | null>(null);
  const [gained, setGained] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = readStore()[route];
      if (saved) setRecord(saved);
    }, 0);
    return () => clearTimeout(timer);
  }, [route]);

  if (items.length === 0) return null;

  const currentIndex = queue[cursor];
  const current = items[currentIndex];
  const answered = picked !== null;
  const isCorrect = answered && picked === current.answer;
  const correctCount = Object.values(roundResults).filter(Boolean).length;
  const wrongIndexes = queue.filter((i) => roundResults[i] === false);

  const choose = (optionIndex: number) => {
    if (answered) return;
    setPicked(optionIndex);
    const right = optionIndex === current.answer;
    setRoundResults((prev) => ({ ...prev, [currentIndex]: right }));
    if (right) {
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      setBestCombo((value) => Math.max(value, nextCombo));
      if (soundEnabled) soundEngine.playCorrectChime(nextCombo);
      const rewarded = record?.rewarded ?? [];
      if (!rewarded.includes(currentIndex)) {
        addExp(EXP_PER_ITEM);
        setGained((value) => value + EXP_PER_ITEM);
        const next: StoredRecord = {
          best: record?.best ?? 0,
          total: items.length,
          rewarded: [...rewarded, currentIndex],
        };
        setRecord(next);
        writeRecord(route, next);
      }
    } else {
      setCombo(0);
      if (soundEnabled) soundEngine.playSoftWrong();
      addMistakeCard({
        id: `boost-${subject.slug}-${topic.slug}-${currentIndex}`,
        prompt: current.q,
        correction: `${LABELS[current.answer]}. ${current.options[current.answer]}｜${current.why}`,
        reason: 'K',
        subject: subject.title,
        topic: topic.title,
        userChoice: `${LABELS[optionIndex]}. ${current.options[optionIndex]}`,
        correctAnswer: LABELS[current.answer],
        lessonRoute: route,
      });
    }
  };

  const goNext = () => {
    if (cursor + 1 < queue.length) {
      setCursor(cursor + 1);
      setPicked(null);
      return;
    }
    setFinished(true);
    if (soundEnabled) soundEngine.playLessonFanfare();
    if (isFullRound) {
      const next: StoredRecord = {
        best: Math.max(record?.best ?? 0, correctCount),
        total: items.length,
        rewarded: record?.rewarded ?? [],
      };
      setRecord(next);
      writeRecord(route, next);
    }
  };

  const restart = (indexes: number[], full: boolean) => {
    setQueue(indexes);
    setCursor(0);
    setPicked(null);
    setRoundResults({});
    setCombo(0);
    setBestCombo(0);
    setFinished(false);
    setIsFullRound(full);
    setGained(0);
  };

  const bestStars = record ? starsFor(record.best, record.total) : 0;
  const roundStars = starsFor(correctCount, queue.length);

  return (
    <section id="boost-challenge" className="boost-quiz scroll-mt-24" aria-label="頂標挑戰題組">
      <header className="boost-quiz__head">
        <div className="min-w-0">
          <span className="boost-quiz__eyebrow">
            <Target className="size-3.5" aria-hidden="true" /> 頂標挑戰 · 手寫 {items.length} 題
          </span>
          <h3 className="boost-quiz__title">讀完了嗎？用 {items.length} 題確認你真的會</h3>
          <p className="boost-quiz__hint">答錯不扣分，錯題會自動收進錯題本；第一次答對每題 +{EXP_PER_ITEM} 探索值。</p>
        </div>
        <div className="boost-quiz__best" aria-label={record ? `最佳紀錄 ${record.best} / ${record.total}` : '尚未挑戰'}>
          <span className="boost-quiz__stars" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <Star key={i} className={`size-5 ${i < bestStars ? 'is-on' : ''}`} />
            ))}
          </span>
          <span className="boost-quiz__best-text">{record && record.best > 0 ? `最佳 ${record.best}/${record.total}` : '尚未挑戰'}</span>
        </div>
      </header>

      {!finished ? (
        <div className="boost-quiz__body">
          <div className="boost-quiz__progress">
            <ol className="boost-quiz__dots" aria-label={`第 ${cursor + 1} 題，共 ${queue.length} 題`}>
              {queue.map((itemIndex, position) => {
                const result = roundResults[itemIndex];
                const state = result === true ? 'is-right' : result === false ? 'is-wrong' : position === cursor ? 'is-current' : '';
                return <li key={itemIndex} className={state} />;
              })}
            </ol>
            <span className="boost-quiz__count">
              {cursor + 1} / {queue.length}
            </span>
            {combo >= 2 && (
              <span className="boost-quiz__combo">
                <Flame className="size-3.5" aria-hidden="true" /> 連對 {combo}
              </span>
            )}
          </div>

          <div className="boost-quiz__stage">
            <div className="boost-quiz__question">
              <p className="boost-quiz__qno">第 {cursor + 1} 題</p>
              <div className="boost-quiz__qtext">
                <MathText content={current.q} />
              </div>
            </div>

            <div className="boost-quiz__answers">
              <div className="boost-quiz__options" role="group" aria-label="選項">
                {current.options.map((option, optionIndex) => {
                  let state = '';
                  if (answered) {
                    if (optionIndex === current.answer) state = 'is-right';
                    else if (optionIndex === picked) state = 'is-wrong';
                    else state = 'is-dim';
                  }
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={answered}
                      onClick={() => choose(optionIndex)}
                      className={`boost-quiz__option ${state}`}
                    >
                      <span className="boost-quiz__label">{LABELS[optionIndex]}</span>
                      <span className="boost-quiz__option-text">
                        <MathText content={option} />
                      </span>
                      {answered && optionIndex === current.answer && <CheckCircle2 className="size-5 shrink-0" aria-label="正確答案" />}
                      {answered && optionIndex === picked && optionIndex !== current.answer && <XCircle className="size-5 shrink-0" aria-label="你的選擇" />}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className={`boost-quiz__feedback ${isCorrect ? 'is-right' : 'is-wrong'}`} role="status">
                  <p className="boost-quiz__verdict">{isCorrect ? '答對了' : '這題先記下來，已收進錯題本'}</p>
                  <div className="boost-quiz__why">
                    <MathText content={current.why} />
                  </div>
                  <button type="button" onClick={goNext} className="boost-quiz__next">
                    {cursor + 1 < queue.length ? '下一題' : '看結果'}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="boost-quiz__result" role="status">
          <div className="boost-quiz__result-main">
            <Trophy className="size-9 boost-quiz__trophy" aria-hidden="true" />
            <div>
              <p className="boost-quiz__score">
                答對 {correctCount} / {queue.length} 題
              </p>
              <span className="boost-quiz__stars is-large" aria-label={`${roundStars} 顆星`}>
                {[0, 1, 2].map((i) => (
                  <Star key={i} className={`size-7 ${i < roundStars ? 'is-on' : ''}`} />
                ))}
              </span>
            </div>
          </div>
          <ul className="boost-quiz__stats">
            <li>
              <strong>{bestCombo}</strong>
              <span>最長連對</span>
            </li>
            <li>
              <strong>+{gained}</strong>
              <span>本輪探索值</span>
            </li>
            <li>
              <strong>{wrongIndexes.length}</strong>
              <span>待修正題數</span>
            </li>
          </ul>
          <p className="boost-quiz__advice">
            {wrongIndexes.length === 0
              ? '全部答對。隔幾天再回來挑戰一次，確認不是短期記憶。'
              : '先回到上方對應的觀念與速記卡看一遍，再只重練答錯的題目。'}
          </p>
          <div className="boost-quiz__actions">
            {wrongIndexes.length > 0 && (
              <button type="button" className="boost-quiz__next" onClick={() => restart(wrongIndexes, false)}>
                只重練錯題（{wrongIndexes.length}）
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            )}
            <button type="button" className="boost-quiz__ghost" onClick={() => restart(items.map((_, i) => i), true)}>
              <RotateCcw className="size-4" aria-hidden="true" /> 全部重新挑戰
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
