'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Compass, Sparkles } from 'lucide-react';
import type { SubjectData, TopicContent } from '@/data/types';
import { allSubjects } from '@/data/subjects';
import { ArchitecturalSubjectIcon } from '@/components/ui/ArchitecturalIcons';

interface RelatedTopicConnectionsProps {
  subject: SubjectData;
  topic: TopicContent;
  currentIndex: number;
}

export default function RelatedTopicConnections({
  subject,
  topic,
  currentIndex,
}: RelatedTopicConnectionsProps) {
  const prevTopic = currentIndex > 0 ? subject.topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < subject.topics.length - 1 ? subject.topics[currentIndex + 1] : null;

  // 跨領域推薦規則矩陣 (Cross-Disciplinary Recommendations)
  const crossRecommendations = React.useMemo(() => {
    const list: { subjectSlug: string; topicSlug: string; title: string; reason: string }[] = [];

    if (subject.slug === 'mechanics') {
      list.push(
        { subjectSlug: 'math-c', topicSlug: 'vectors', title: '向量運算與力的分解', reason: '力學自由體圖必備的幾何與向量基底' },
        { subjectSlug: 'physics', topicSlug: 'forces-newton', title: '牛頓運動定律與重力', reason: '古典物理力系平衡的本質來源' },
      );
    } else if (subject.slug === 'materials') {
      list.push(
        { subjectSlug: 'chemistry', topicSlug: 'chemical-reactions', title: '化學反應與水泥水化', reason: '混凝土凝結硬化的微觀化學機制' },
        { subjectSlug: 'extensions', topicSlug: 'green-building-eewh', title: 'EEWH 綠建築評估系統', reason: '低碳建材與永續營造的國家規範' },
      );
    } else if (subject.slug === 'surveying') {
      list.push(
        { subjectSlug: 'math-c', topicSlug: 'trigonometry', title: '廣義三角函數與測量', reason: '視距差、高程角與橫縱距坐標推導核心' },
        { subjectSlug: 'drafting', topicSlug: 'cad-basics', title: 'CAD 電腦繪圖坐標系', reason: '測量導線點匯入電腦繪圖放樣' },
      );
    } else if (subject.slug === 'drafting') {
      list.push(
        { subjectSlug: 'mechanics', topicSlug: 'centroid', title: '形心與斷面慣性矩', reason: '圖面剖面幾何形心與工程圖對照' },
        { subjectSlug: 'surveying', topicSlug: 'instrument-setup', title: '儀器定心整平與放樣', reason: '施工圖實地放樣與座標檢核' },
      );
    } else if (subject.slug === 'math-c') {
      list.push(
        { subjectSlug: 'mechanics', topicSlug: 'beam', title: '簡支梁剪力與彎矩方程', reason: '二次函數與微積分在結構內力的實戰' },
        { subjectSlug: 'surveying', topicSlug: 'traverse-surveying', title: '導線測量與閉合差計算', reason: '三角函數與解析幾何的工程應用' },
      );
    } else {
      // 通用跨學科推薦
      list.push(
        { subjectSlug: 'mechanics', topicSlug: 'stress-strain', title: '應力與應變分析', reason: '工程建築核心支柱' },
        { subjectSlug: 'drafting', topicSlug: 'orthographic-projection', title: '第三角正投影展開', reason: '空間思維與圖形想像能力' },
      );
    }

    // 驗證推薦的 topicSlug 是否真實存在
    return list.filter((item) => {
      const s = allSubjects.find((sub) => sub.slug === item.subjectSlug);
      return s?.topics.some((t) => t.slug === item.topicSlug);
    });
  }, [subject.slug]);

  return (
    <section className="lesson-deferred-section mt-10 space-y-6 rounded-3xl border border-slate-200/90 bg-white p-6 dark:border-slate-800/90 dark:bg-slate-900 sm:p-8 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 font-mono text-xs font-bold text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300">
            <Compass className="size-3.5" /> 知識節點星系聯動 · 推薦下一站
          </span>
          <h3 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            學完「{topic.title}」，接下來探索哪裡？
          </h3>
        </div>
        <span className="text-xs text-slate-500">融會貫通 · 跨學科建構知識網</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 本科系順序流轉 (本章 ➔ 下一章) */}
        <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-5 dark:border-blue-900/40 dark:bg-blue-950/20 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              進程推薦 · 循序漸進
            </span>
            {nextTopic ? (
              <div className="mt-2 space-y-1.5">
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  下一章：{nextTopic.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {nextTopic.desc}
                </p>
              </div>
            ) : (
              <div className="mt-2 space-y-1.5">
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  恭喜完成本科末章！
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  你已經學完了【{subject.title}】全部核心章節，前往題庫驗收實力吧。
                </p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Link
              href={nextTopic ? `/subjects/${subject.slug}/${nextTopic.slug}` : '/practice'}
              className="inline-flex w-full items-center justify-between rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 text-xs font-bold shadow-xs transition-colors cursor-pointer"
            >
              <span>{nextTopic ? '前往下一章學習' : '前往題庫模擬測驗'}</span>
              <ArrowRight className="size-4" />
            </Link>

            {prevTopic && (
              <div className="pt-1">
                <Link
                  href={`/subjects/${subject.slug}/${prevTopic.slug}`}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
                >
                  <ArrowLeft className="size-3" />
                  <span>上一章：{prevTopic.title}</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* 跨學科關聯知識卡片 */}
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 dark:border-indigo-900/40 dark:bg-indigo-950/20 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-amber-500" /> 跨學科星系關聯 · 深度理解
            </span>
            <div className="mt-3 space-y-3">
              {crossRecommendations.map((item) => (
                <Link
                  key={item.topicSlug}
                  href={`/subjects/${item.subjectSlug}/${item.topicSlug}`}
                  className="group flex items-start gap-3 rounded-xl bg-white p-3 shadow-2xs border border-slate-100 hover:border-indigo-300 dark:bg-slate-850 dark:border-slate-800 transition-all cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 shrink-0">
                    <ArchitecturalSubjectIcon slug={item.subjectSlug} size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-between">
                      <span className="truncate">{item.title}</span>
                      <ArrowRight className="size-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                    <p className="text-[11px] text-slate-500 leading-normal mt-0.5">
                      {item.reason}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
            <span>打破學科藩籬 · 建構完整工程直覺</span>
            <Link href="/constellation" className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
              檢視星空圖 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
