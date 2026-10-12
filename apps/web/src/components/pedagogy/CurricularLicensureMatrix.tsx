'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  FileCheck2,
  GraduationCap,
  Scale,
  Sparkles,
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
  weight: '高頻必考 ★★★★★' | '核心專業 ★★★★☆' | '重要關聯 ★★★☆☆';
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
          weight: '高頻必考 ★★★★★',
          focusSummary: '簡支梁剪力彎矩圖、靜不定結構分析、桁架零力桿與基本耐震結構行為。',
        },
        {
          code: 'PE-STR-MEC',
          profession: '結構技師',
          examSubject: '結構力學與動力學 (Structural Analysis)',
          weight: '高頻必考 ★★★★★',
          focusSummary: '平面剛架內力、傾角撓度法、莫爾圓主應力旋轉與挫屈臨界載重。',
        },
        {
          code: 'PE-CIV-MEC',
          profession: '土木技師',
          examSubject: '工程力學與結構學 (Mechanics & Structures)',
          weight: '高頻必考 ★★★★★',
          focusSummary: '三力平衡、梁撓度計算、影響線、截面慣性矩與剪力中心。',
        },
      ];
    case 'materials':
      return [
        {
          code: 'ARCH-MAT',
          profession: '建築師',
          examSubject: '建築構造與施工 (Construction & Detailing)',
          weight: '高頻必考 ★★★★★',
          focusSummary: 'CNS 3090 混凝土品管、坍度試驗、鋼筋保護層與防水填縫工程。',
        },
        {
          code: 'PE-CIV-CON',
          profession: '土木技師',
          examSubject: '施工法與營建管理 (Construction Methods)',
          weight: '高頻必考 ★★★★★',
          focusSummary: '水泥水化放熱控制、大體積混凝土溫控、高抗拉鋼絞線試驗規範。',
        },
        {
          code: 'PE-STR-RC',
          profession: '結構技師',
          examSubject: '鋼筋混凝土結構設計 (RC Structures)',
          weight: '核心專業 ★★★★☆',
          focusSummary: '混凝土極限抗壓強度 f\'c 規定、骨材級配與保護層防蝕力學。',
        },
      ];
    case 'surveying':
      return [
        {
          code: 'PE-CIV-SURV',
          profession: '土木技師',
          examSubject: '測量學 (Surveying & Geomatics)',
          weight: '高頻必考 ★★★★★',
          focusSummary: '水準視線高高程平差、閉合導線計算、誤差傳播定律與 GNSS 定位。',
        },
        {
          code: 'ARCH-SITE',
          profession: '建築師',
          examSubject: '敷地計畫與都市設計 (Site Planning)',
          weight: '核心專業 ★★★★☆',
          focusSummary: '等高線地形判讀、基地排水坡度、土方挖填平衡計算與放樣基準點。',
        },
      ];
    case 'drafting':
      return [
        {
          code: 'ARCH-PLAN',
          profession: '建築師',
          examSubject: '建築計畫與設計 (Architectural Planning & Design)',
          weight: '高頻必考 ★★★★★',
          focusSummary: 'CNS 建築製圖規範剖面標註、第三角投影三視圖展開、平面配置尺度法規。',
        },
        {
          code: 'PE-CIV-DRAW',
          profession: '土木技師',
          examSubject: '施工圖說判讀與放樣實務',
          weight: '核心專業 ★★★★☆',
          focusSummary: '鋼筋配筋圖配條圖例、結構剖面圖長度對齊與 CNS 材料線條規範。',
        },
      ];
    case 'math-c':
      return [
        {
          code: 'PE-EXAM-MATH',
          profession: '結構技師 / 土木技師',
          examSubject: '工程數學與結構數值分析基礎',
          weight: '核心專業 ★★★★☆',
          focusSummary: '解析幾何、斜率垂直幾何條件、三角函數正餘弦定理與極值求解。',
        },
      ];
    case 'english':
      return [
        {
          code: 'GLOBAL-PRAC',
          profession: '建築師',
          examSubject: '國際建築事務所實務與合約規範',
          weight: '核心專業 ★★★★☆',
          focusSummary: 'FIDIC 國際工程合約、AIA 建築工程術語、綠建築 LEED/EEWH 國際規範解讀。',
        },
      ];
    default:
      return [
        {
          code: 'FOUNDATION',
          profession: '建築師',
          examSubject: '建築通識素養與環境學科',
          weight: '重要關聯 ★★★☆☆',
          focusSummary: '自然科學、環境永續、人文歷史脈絡與現代建築前瞻科技跨領域融通。',
        },
      ];
  }
}

// 根據學科提供教育部 108 課綱專業領域核心素養代碼
function getCurriculumCompetency(subjectSlug: string): { code: string; title: string; desc: string } {
  switch (subjectSlug) {
    case 'mechanics':
      return {
        code: '108-土木建-專-1',
        title: '力系平衡與結構耐震力學分析素養',
        desc: '能熟練應用向量力系、力的平衡條件、斷面幾何性質及材料應力應變關係，分析工程梁與桁架系統之承載行為。',
      };
    case 'materials':
      return {
        code: '108-土木建-專-2',
        title: '營建材料檢驗與現場施工品質管理素養',
        desc: '能了解波特蘭水泥水化、混凝土新拌與硬固性質，熟悉 CNS 國家標準檢驗試驗標準，具備品質查核思維。',
      };
    case 'surveying':
      return {
        code: '108-土木建-專-3',
        title: '幾何空間測量與工程平差演算素養',
        desc: '能熟練水準儀、經緯儀與全測站操作原理，精確計算視線高高程、閉合差平差及高程坡度工程應用。',
      };
    case 'drafting':
      return {
        code: '108-土木建-專-4',
        title: '空間正投影展開與建築圖說判讀素養',
        desc: '能掌握第三角法正投影原理、CNS 建築製圖規範標準，正確繪製並判讀施工圖說與材料符號。',
      };
    case 'math-c':
      return {
        code: '108-技高數-C-1',
        title: '坐標解析幾何與三角函數空間應用素養',
        desc: '能運用平面直角坐標、斜率幾何性質與三角函數公式，銜接工程力學向量運算與結構內力推導。',
      };
    case 'english':
      return {
        code: '108-技高英-B-1',
        title: '職場技術英文閱讀與語法架構素養',
        desc: '能理解時態被動語態與複合句型，掌握建築工程情境高頻詞彙，具備閱讀技術規範之基本能力。',
      };
    default:
      return {
        code: '108-跨領域素養',
        title: '自然與人文科技整合素養',
        desc: '具備觀察環境現象、跨領域探究實作與批判思考能力，能將基礎科學與人文社會知識應用於生活情境。',
      };
  }
}

export default function CurricularLicensureMatrix({ subject, topic }: CurricularLicensureMatrixProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const mappings = getLicensureMappings(subject.slug);
  const competency = getCurriculumCompetency(subject.slug);

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
                研經級考綱對齊
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                教育部 108 課綱 × 考選部專技高考
              </span>
            </div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
              【{topic.title}】國家考試權重與課綱素養對齊矩陣
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

      {/* Curriculum Competency Strip */}
      <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 font-mono">
          <GraduationCap className="size-4 text-blue-600 dark:text-blue-400 shrink-0" />
          <strong className="text-slate-900 dark:text-white font-bold">{competency.code}：</strong>
          <span className="text-slate-700 dark:text-slate-300">{competency.title}</span>
        </div>
        <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono font-bold shrink-0 flex items-center gap-1">
          <FileCheck2 className="size-3.5" /> 官方課綱完整對齊
        </span>
      </div>

      {/* Expanded Licensure Mapping Cards */}
      {isExpanded && (
        <div className="pt-2 space-y-3 animate-in fade-in-50 duration-200">
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            本單元核心知識點不仅直擊技術型高級中等學校統測大考，更完全奠定未來報考考選部建築師、結構工程技師與土木工程技師高等考試之核心學門理論基礎：
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

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>科目代碼：{map.code}</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1">
                    <Sparkles className="size-3" /> 高考直通
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-slate-50 dark:bg-slate-900/60 p-3 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800 font-mono">
            🏛️ <strong>國家專技人員高等考試制度提示：</strong>
            依專門職業及技術人員高等考試建築師、技師考試規則，建築師採科別及格制（保留三年及格科目），結構與土木技師採總成績滿 60 分且排名前 16% 及格制。穩健打牢高職與高中基礎力學與圖學，是通過國考的最高效途徑！
          </div>
        </div>
      )}
    </div>
  );
}
