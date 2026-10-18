'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Scale,
} from 'lucide-react';
import type { SubjectData, TopicContent } from '@/data/types';

interface CurricularLicensureMatrixProps {
  subject: SubjectData;
  topic: TopicContent;
}

interface LicensureSubjectMapping {
  code: string;
  profession: '建築師' | '結構技師' | '土木技師' | '結構技師 / 土木技師';
  examSubject: string;
  weight: '直接相關' | '核心相關' | '延伸相關';
  focusSummary: string;
}

// 根據學科 slug 映射專技高考權威考科與重點
function getLicensureMappings(subjectSlug: string): LicensureSubjectMapping[] {
  switch (subjectSlug) {
    case 'mechanics':
      return [
        {
          code: 'ARCH-STR',
          profession: '建築師',
          examSubject: '建築結構 (Architectural Structures)',
          weight: '直接相關',
          focusSummary: '簡支梁剪力彎矩圖、靜不定結構分析、桁架零力桿與基本耐震結構行為。',
        },
        {
          code: 'PE-STR-MEC',
          profession: '結構技師',
          examSubject: '結構力學與動力學 (Structural Analysis)',
          weight: '直接相關',
          focusSummary: '平面剛架內力、傾角撓度法、莫爾圓主應力旋轉與挫屈臨界載重。',
        },
        {
          code: 'PE-CIV-MEC',
          profession: '土木技師',
          examSubject: '工程力學與結構學 (Mechanics & Structures)',
          weight: '直接相關',
          focusSummary: '三力平衡、梁撓度計算、影響線、截面慣性矩與剪力中心。',
        },
      ];
    case 'materials':
      return [
        {
          code: 'ARCH-MAT',
          profession: '建築師',
          examSubject: '建築構造與施工 (Construction & Detailing)',
          weight: '直接相關',
          focusSummary: 'CNS 3090 混凝土品管、坍度試驗、鋼筋保護層與防水填縫工程。',
        },
        {
          code: 'PE-CIV-CON',
          profession: '土木技師',
          examSubject: '施工法與營建管理 (Construction Methods)',
          weight: '直接相關',
          focusSummary: '水泥水化放熱控制、大體積混凝土溫控、高抗拉鋼絞線試驗規範。',
        },
        {
          code: 'PE-STR-RC',
          profession: '結構技師',
          examSubject: '鋼筋混凝土結構設計 (RC Structures)',
          weight: '核心相關',
          focusSummary: '混凝土極限抗壓強度 f\'c 規定、骨材級配與保護層防蝕力學。',
        },
      ];
    case 'surveying':
      return [
        {
          code: 'PE-CIV-SURV',
          profession: '土木技師',
          examSubject: '測量學 (Surveying & Geomatics)',
          weight: '直接相關',
          focusSummary: '水準視線高高程平差、閉合導線計算、誤差傳播定律與 GNSS 定位。',
        },
        {
          code: 'ARCH-SITE',
          profession: '建築師',
          examSubject: '敷地計畫與都市設計 (Site Planning)',
          weight: '核心相關',
          focusSummary: '等高線地形判讀、基地排水坡度、土方挖填平衡計算與放樣基準點。',
        },
      ];
    case 'drafting':
      return [
        {
          code: 'ARCH-PLAN',
          profession: '建築師',
          examSubject: '建築計畫與設計 (Architectural Planning & Design)',
          weight: '直接相關',
          focusSummary: 'CNS 建築製圖規範剖面標註、第三角投影三視圖展開、平面配置尺度法規。',
        },
        {
          code: 'PE-CIV-DRAW',
          profession: '土木技師',
          examSubject: '施工圖說判讀與放樣實務',
          weight: '核心相關',
          focusSummary: '鋼筋配筋圖配條圖例、結構剖面圖長度對齊與 CNS 材料線條規範。',
        },
      ];
    case 'math-c':
      return [
        {
          code: 'PE-EXAM-MATH',
          profession: '結構技師 / 土木技師',
          examSubject: '工程數學與結構數值分析基礎',
          weight: '核心相關',
          focusSummary: '解析幾何、斜率垂直幾何條件、三角函數正餘弦定理與極值求解。',
        },
      ];
    case 'english':
      return [
        {
          code: 'GLOBAL-PRAC',
          profession: '建築師',
          examSubject: '國際建築事務所實務與合約規範',
          weight: '核心相關',
          focusSummary: 'FIDIC 國際工程合約、AIA 建築工程術語、綠建築 LEED/EEWH 國際規範解讀。',
        },
      ];
    default:
      return [
        {
          code: 'FOUNDATION',
          profession: '建築師',
          examSubject: '建築通識素養與環境學科',
          weight: '延伸相關',
          focusSummary: '自然科學、環境永續、人文歷史脈絡與現代建築前瞻科技跨領域融通。',
        },
      ];
  }
}

export default function CurricularLicensureMatrix({ subject, topic }: CurricularLicensureMatrixProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const mappings = getLicensureMappings(subject.slug);

  return (
    <div className="rounded-2xl border border-blue-200/90 dark:border-blue-900/60 bg-gradient-to-r from-blue-50/40 via-white to-indigo-50/30 dark:from-blue-950/20 dark:via-slate-900 dark:to-indigo-950/20 p-4 sm:p-5 shadow-xs space-y-3">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-xs shrink-0">
            <Scale className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/60 px-2 py-0.5 rounded">
                職涯延伸
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                與考選部專技高考考科的關聯
              </span>
            </div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
              【{topic.title}】與專技高考考科的知識關聯
            </h4>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <span>{isExpanded ? '收合研經矩陣' : '展開完整考科對齊'}</span>
          {isExpanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
        </button>
      </div>

      {/* Expanded Licensure Mapping Cards */}
      {isExpanded && (
        <div className="pt-2 space-y-3 animate-in fade-in-50 duration-200">
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            本單元的知識也是未來報考考選部建築師、結構工程技師與土木工程技師等專技高考時的基礎（下列為知識關聯，非考試配分）：
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mappings.map((map) => (
              <div
                key={map.code}
                className="p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs space-y-2 flex flex-col justify-between text-xs"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded font-mono font-bold text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {map.profession}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                      {map.weight}
                    </span>
                  </div>
                  <h5 className="font-serif font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    {map.examSubject}
                  </h5>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {map.focusSummary}
                  </p>
                </div>

              </div>
            ))}
          </div>

          <div className="rounded-xl bg-slate-50 dark:bg-slate-900/60 p-3 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800 font-mono">
            🏛️ <strong>國家專技人員高等考試制度提示：</strong>
            依《專門職業及技術人員高等考試建築師考試規則》，建築師考試採科別及格制：各科滿 60 分及格，及格科目成績保留三年。技師考試的及格方式依各類科考試規則，以考選部公告為準。
          </div>
        </div>
      )}
    </div>
  );
}
