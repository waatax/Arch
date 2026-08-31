'use client';

import React, { useState } from 'react';
import { HardHat, AlertTriangle, CheckCircle2, X, Building2 } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

interface InspectorCase {
  id: string;
  title: string;
  location: string;
  situation: string;
  question: string;
  options: Array<{ id: string; text: string; isCorrect: boolean; feedback: string }>;
  corePrinciple: string;
}

const inspectorCases: Record<string, InspectorCase> = {
  case_vector_grounding: {
    id: 'case_vector_grounding',
    title: '【探案委託 01】路思義教堂斜向薄殼反力檢核',
    location: '台中市西屯區 · 東海大學路思義教堂工區',
    situation: '現場監造工程師發現，教堂兩側雙曲拋物面薄殼以 60° 傾角交會於地表基礎，垂直自重與風力合力為 500 kN。',
    question: '身為現場駐地助理，若要檢核地基正向承壓與水平推力，應如何進行向量分解？',
    options: [
      {
        id: 'A',
        text: '垂直承壓 N = 500 × sin(60°) ≈ 433 kN，水平推力 H = 500 × cos(60°) = 250 kN，基礎需設繫梁抗推。',
        isCorrect: true,
        feedback: '精準！薄殼結構傳力至拱腳時會產生巨大的水平向外推力，必須由地下預力地梁（Tie Beam）拉住以防開裂！',
      },
      {
        id: 'B',
        text: '薄殼完全沒有水平推力，所有力量直接垂直入地。',
        isCorrect: false,
        feedback: '錯誤！斜向受力構件必產生水平分力推動支承，若無地梁抵抗將導致拱腳滑移。',
      },
      {
        id: 'C',
        text: '力量會被空氣吸收，不需檢算基礎。',
        isCorrect: false,
        feedback: '完全錯誤，力必須由基礎與地盤承載。',
      },
    ],
    corePrinciple: '向量分解原理：斜向合力 F 在直角坐標系中分解為 F_x = F·cosθ 與 F_y = F·sinθ。',
  },
  case_truss_zero_force: {
    id: 'case_truss_zero_force',
    title: '【探案委託 02】台北 101 外伸桁架吊裝檢驗',
    location: '台北市信義區 · 台北 101 高空外伸桁架層',
    situation: '吊裝施工時，工程師在八組外伸桁架（Outrigger Truss）節點中發現數根無豎向外力的 T 型垂直相交短桿。',
    question: '主任工程師詢問：「在目前施工階段，這些桿件的受力狀態為何？」',
    options: [
      {
        id: 'A',
        text: '該節點無外力且兩橫弦共線，垂直相交之第三桿在目前階段受力為零（零力桿），但強風時將提供側向支撐防挫屈。',
        isCorrect: true,
        feedback: '太棒了！零力桿在特定靜態載重下雖內力為零，但在整體空間穩定與防挫屈上扮演關鍵防護角色！',
      },
      {
        id: 'B',
        text: '這些桿件受超大拉力，隨時可能斷裂。',
        isCorrect: false,
        feedback: '判斷錯誤。依零力桿原則二，三桿中兩桿共線且節點無外力時，第三桿內力必為零。',
      },
      {
        id: 'C',
        text: '直接拆除不需安裝。',
        isCorrect: false,
        feedback: '錯誤！零力桿可減小長細比（L/r），防止受壓主管發生側向挫屈。',
      },
    ],
    corePrinciple: '桁架零力桿第二原則：共線兩桿平衡內力，垂直相交之第三桿內力為零。',
  },
  case_slump_quality: {
    id: 'case_slump_quality',
    title: '【探案委託 03】台中國家歌劇院曲牆混凝土澆置突發事件',
    location: '台中市西屯區 · 台中國家歌劇院曲牆施工現場',
    situation: '預拌混凝土車抵達現場，抽測坍度試驗發現坍度高達 26 cm 且試體呈扁平崩塌（Collapse Slump）。',
    question: '此時作為監造工程師，你的正確處置程序為何？',
    options: [
      {
        id: 'A',
        text: '判定水灰比 (W/C) 過高或加水過量，造成抗壓強度嚴重折減與粒料析離，應立即判定不合格並退車拒收！',
        isCorrect: true,
        feedback: '完全正確！依施工規範，私自加水或坍度超標將破壞混凝土水化結晶密實度，絕不可澆置於結構體！',
      },
      {
        id: 'B',
        text: '很好流動，剛好方便灌入曲牆，直接澆置。',
        isCorrect: false,
        feedback: '嚴重違規！過高水灰比會導致嚴重蜂窩、乾縮裂縫與 28 天抗壓強度不合格。',
      },
      {
        id: 'C',
        text: '加點沙子攪拌一下即可。',
        isCorrect: false,
        feedback: '現場嚴禁任意擅改預拌廠標準配比。',
      },
    ],
    corePrinciple: 'CNS 1176 與亞伯郎法則：水灰比 W/C 決定硬化混凝土強度，坍度崩塌為嚴重品管異常。',
  },
};

interface QuestInspectorModalProps {
  caseId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuestInspectorModal({ caseId, isOpen, onClose }: QuestInspectorModalProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { recordInspectorSolved, soundEnabled } = useGamificationStore();

  if (!isOpen || !caseId) return null;

  const currentCase = inspectorCases[caseId] || inspectorCases.case_vector_grounding;
  const chosenOpt = currentCase.options.find((o) => o.id === selectedOption);

  const handleSubmit = () => {
    if (!chosenOpt) return;
    setIsSubmitted(true);
    if (chosenOpt.isCorrect) {
      if (soundEnabled) soundEngine.playCorrectChime();
      recordInspectorSolved(currentCase.id);
    } else {
      if (soundEnabled) soundEngine.playClickBeep();
    }
  };

  const handleModalClose = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl border border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleModalClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 px-3 py-1 text-xs font-mono font-bold text-amber-700 dark:text-amber-300">
              <HardHat className="size-3.5" /> 營造現場工程探案 (SITE INSPECTOR CASE)
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white pt-1">
            {currentCase.title}
          </h3>
          <p className="text-xs text-slate-500 font-mono flex items-center gap-1">
            <Building2 className="size-3.5" /> {currentCase.location}
          </p>
        </div>

        {/* Situation Brief */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs sm:text-sm">
          <span className="font-bold text-slate-700 dark:text-slate-300 block font-mono">
            📋 現場事態報告：
          </span>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
            {currentCase.situation}
          </p>
        </div>

        {/* Question */}
        <div className="space-y-3 font-mono text-xs sm:text-sm">
          <label className="font-bold text-slate-900 dark:text-white block font-sans">
            ❓ {currentCase.question}
          </label>

          <div className="space-y-2">
            {currentCase.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              let style = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 hover:border-blue-500';

              if (isSubmitted && isSelected) {
                style = opt.isCorrect
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-100'
                  : 'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-100';
              } else if (isSelected) {
                style = 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    if (!isSubmitted) setSelectedOption(opt.id);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${style}`}
                >
                  <span className="font-bold font-mono shrink-0">{opt.id}.</span>
                  <span className="font-sans leading-relaxed text-xs sm:text-sm">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feedback after submission */}
        {isSubmitted && chosenOpt && (
          <div
            className={`p-4 rounded-2xl border space-y-1 animate-fadeIn ${
              chosenOpt.isCorrect
                ? 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                : 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm font-mono">
              {chosenOpt.isCorrect ? (
                <>
                  <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-800 dark:text-emerald-200">處置判定正確！獲得 +100 EXP</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="size-4 text-rose-600 dark:text-rose-400" />
                  <span className="text-rose-800 dark:text-rose-200">處置不當，存在工程安全隱患</span>
                </>
              )}
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
              {chosenOpt.feedback}
            </p>
            <p className="text-[11px] text-blue-700 dark:text-blue-300 font-mono pt-1">
              🔑 核心公理：{currentCase.corePrinciple}
            </p>
          </div>
        )}

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3 pt-2">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedOption}
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm transition cursor-pointer"
            >
              送出監造處置裁決
            </button>
          ) : (
            <button
              onClick={handleModalClose}
              className="px-6 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm transition cursor-pointer"
            >
              完成探案並返回戰役
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
