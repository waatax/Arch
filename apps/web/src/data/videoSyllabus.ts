import { allSubjects } from './subjects';
import { pathwaySubjects, PathwayKnowledgePoint, PathwaySubject } from './pathwayCurriculum';
import { SubjectData, TopicContent } from './types';

export interface VideoStoryboardPart {
  partNumber: number;
  timeRange: string;
  durationSec: number;
  stageTitle: string;
  visualCue: string;
  narrationFocus: string;
  keyElements: string[];
}

export interface VideoEpisodeOutline {
  episodeCode: string;
  subjectSlug: string;
  subjectTitle: string;
  topicSlug: string;
  topicTitle: string;
  gradeLevel: number;
  curriculumCode: string;
  targetDuration: string;
  tcteQuestionCount: number;
  sampleQuestionIds: string[];
  hookQuestion: string;
  coreConceptHeadings: string[];
  keyFormulas: string[];
  fatalTrapSummary: string;
  mentalModelSummary: string;
  workedExampleTitle: string;
  storyboardParts: VideoStoryboardPart[];
}

export interface SubjectVideoSyllabus {
  subjectSlug: string;
  subjectTitle: string;
  category: string;
  episodePrefix: string;
  totalEpisodes: number;
  totalMinutes: number;
  episodes: VideoEpisodeOutline[];
}

export interface PathwayVideoEpisode {
  episodeCode: string;
  domainId: string;
  domainTitle: string;
  academicYear: string;
  licensureExamCode: string;
  kpId: string;
  title: string;
  englishTitle: string;
  targetDuration: string;
  svgType: string;
  storyboardParts: VideoStoryboardPart[];
}

export const VIDEO_PRODUCTION_SPEC = {
  totalHighSchoolEpisodes: 120,
  totalUniversityEpisodes: 24,
  totalEpisodes: 144,
  targetEpisodeDuration: '10:00 (600 秒)',
  resolution: '1920 × 1080 (Full HD 1080p, 30 fps)',
  audioSpec: 'zh-TW-HsiaoChenNeural (台灣自然教學語音 +3% 語速, -16 LUFS 廣播級響度)',
  visualStyle: '深色工程藍圖底稿 (Blueprint Dark) + 高對比 SVG 向量動態力流／投影幾何拆解 + 雙行時間軸繁中字幕',
  goldenParts: [
    {
      partNumber: 1,
      timeRange: '0:00 – 0:50',
      durationSec: 50,
      title: 'Part 1｜開場破題 × 統測考情雷達',
      goal: '以真實建築工地／空間設計案例破題，標示 108 課綱代碼與歷年統測命題頻率，30 秒內建立學習動機。',
    },
    {
      partNumber: 2,
      timeRange: '0:50 – 5:30',
      durationSec: 280,
      title: 'Part 2｜核心知識點 × SVG 動態圖解精講',
      goal: '將章節核心觀念拆解為 20~30 秒一個視覺節拍，從物理／空間直覺推導至公式與 CNS／建築技術規則規範。',
    },
    {
      partNumber: 3,
      timeRange: '5:30 – 6:45',
      durationSec: 75,
      title: 'Part 3｜考場致命陷阱 × 名師秒殺心智模型',
      goal: '紅綠雙欄對照考生最常踩雷的錯誤直覺（Fatal Traps），植入一句話秒殺心法（Elite Mental Model）。',
    },
    {
      partNumber: 4,
      timeRange: '6:45 – 9:25',
      durationSec: 160,
      title: 'Part 4｜歷年統測真題 × 三步驟 SOP 實戰',
      goal: '帶練代表性步驟化例題與歷屆統測真題，逐行浮現「審題抓關鍵字 → 列式／畫圖 → 驗算防呆」。',
    },
    {
      partNumber: 5,
      timeRange: '9:25 – 10:00',
      durationSec: 35,
      title: 'Part 5｜30 秒考前懶人包 × 闖關行動召喚',
      goal: '濃縮一頁高清公式／規範速查圖卡供截圖複習，並引導回 Arch 線上講義與題庫即時演練。',
    },
  ],
};

const SUBJECT_PREFIX_MAP: Record<string, string> = {
  mechanics: 'MECH',
  materials: 'MATL',
  surveying: 'SURV',
  drafting: 'DRFT',
  chinese: 'CHIN',
  english: 'ENGL',
  'math-c': 'MTHC',
  physics: 'PHYS',
  chemistry: 'CHEM',
  history: 'HIST',
  geography: 'GEOG',
  civics: 'CIVC',
  extensions: 'EXTN',
};

function stripHtml(raw: string): string {
  return raw.replace(/<[^>]+>/g, '').replace(/\*\*([^*]+)\*\*/g, '$1').trim();
}

export function buildTopicVideoEpisode(
  subject: SubjectData,
  topic: TopicContent,
  chapterIndex: number
): VideoEpisodeOutline {
  const prefix = SUBJECT_PREFIX_MAP[subject.slug] || subject.slug.toUpperCase().slice(0, 4);
  const epNum = String(chapterIndex + 1).padStart(2, '0');
  const episodeCode = `EP-${prefix}-${epNum}`;

  const cleanTitle = stripHtml(topic.title);
  const coreConceptHeadings = topic.concepts.map((c) => stripHtml(c.heading));
  const keyFormulas = topic.concepts
    .map((c) => (c.formula ? stripHtml(c.formula).split('\n')[0] : ''))
    .filter(Boolean)
    .slice(0, 3);

  const firstTrap = topic.fatalTraps?.[0];
  const fatalTrapSummary = firstTrap
    ? `❌ 誤區：${stripHtml(firstTrap.wrongThinking)} → ✅ 正解：${stripHtml(firstTrap.correctThinking)}`
    : '釐清單位換算與規範邊界條件，避免直覺誤判。';

  const firstModel = topic.eliteMentalModels?.[0];
  const mentalModelSummary = firstModel
    ? `【${stripHtml(firstModel.technique)}】${stripHtml(firstModel.explanation)}`
    : '運用圖像化結構拆解與三步驟檢核法快速破題。';

  const firstExample = topic.worked_examples?.[0];
  const workedExampleTitle = firstExample
    ? stripHtml(firstExample.question).slice(0, 72) + (stripHtml(firstExample.question).length > 72 ? '…' : '')
    : `${cleanTitle}標準統測實戰例題`;

  const qIds = topic.covered_question_ids || [];
  const prerequisites = topic.step0Prerequisites?.slice(0, 2) || ['基礎工程圖學與單位換算'];

  const storyboardParts: VideoStoryboardPart[] = [
    {
      partNumber: 1,
      timeRange: '0:00 – 0:50',
      durationSec: 50,
      stageTitle: '開場破題 × 統測考情雷達',
      visualCue: `【片頭動態藍圖】顯示集數 ${episodeCode}、課綱代碼 ${topic.curriculumCode || '108-CORE'} 與歷屆統測命題熱度雷達圖（收錄 ${qIds.length} 題歷屆真題對應）。`,
      narrationFocus: `以建築現場實務提問切入：「為什麼在工程與統測考場上，${cleanTitle}總是決定高下？」同步檢核先備知識：${prerequisites.join('、')}。`,
      keyElements: [
        `課綱代碼：${topic.curriculumCode || '108 課綱核心單元'}`,
        `先備起點：${prerequisites.join(' ／ ')}`,
        `歷屆統測關聯：${qIds.length > 0 ? `涵蓋 ${qIds.slice(0, 3).join(', ')} 等 ${qIds.length} 題真題` : '核心必考觀念與跨章節綜合題型'}`,
      ],
    },
    {
      partNumber: 2,
      timeRange: '0:50 – 5:30',
      durationSec: 280,
      stageTitle: '核心知識點 × SVG 動態圖解精講',
      visualCue: `【分鏡節拍 1~${Math.min(coreConceptHeadings.length, 6)}】依序展開 ${coreConceptHeadings.length} 大核心觀念 SVG 圖解與比較表格，高亮關鍵公式與法定基準值。`,
      narrationFocus: `逐一拆解本章核心觀念（${coreConceptHeadings.slice(0, 4).join(' → ')}），由物理與幾何直覺推導至定量公式。`,
      keyElements: [
        ...coreConceptHeadings.slice(0, 4).map((h, i) => `節拍 2.${i + 1}：${h}`),
        ...(keyFormulas.length > 0 ? [`核心公式高亮：${keyFormulas.join(' ； ')}`] : []),
      ],
    },
    {
      partNumber: 3,
      timeRange: '5:30 – 6:45',
      durationSec: 75,
      stageTitle: '考場致命陷阱 × 名師秒殺心智模型',
      visualCue: '【紅綠雙欄 X 光對照卡】左側紅框閃爍考生常見錯誤直覺，右側綠框浮現正確推導與名師秒殺模型圖卡。',
      narrationFocus: `直接點破考場最高頻失分陷阱，並傳授「${firstModel ? stripHtml(firstModel.technique) : '結構化秒殺心智模型'}」。`,
      keyElements: [
        fatalTrapSummary,
        `💡 名師心法：${mentalModelSummary}`,
      ],
    },
    {
      partNumber: 4,
      timeRange: '6:45 – 9:25',
      durationSec: 160,
      stageTitle: '歷年統測真題 × 三步驟 SOP 實戰',
      visualCue: '【互動解題白板】題幹關鍵字螢光筆自動畫線 → 步驟 1、2、3 逐行動畫展開 → 標示易錯防呆點與秒殺捷徑。',
      narrationFocus: `帶練經典例題：「${workedExampleTitle}」，示範如何在 60 秒內完成審題、列式與驗算。`,
      keyElements: [
        `實戰例題：${workedExampleTitle}`,
        ...(firstExample?.steps?.slice(0, 3).map((s) => stripHtml(s)) || []),
        ...(firstExample?.eliteShortcut ? [`⚡ 秒殺捷徑：${stripHtml(firstExample.eliteShortcut)}`] : []),
      ],
    },
    {
      partNumber: 5,
      timeRange: '9:25 – 10:00',
      durationSec: 35,
      stageTitle: '30 秒考前懶人包 × 闖關行動召喚',
      visualCue: `【一頁式全螢幕重點速查卡】匯總 ${cleanTitle} 必背公式、規範數據與口訣，附 QR/連結導流至 Arch 線上練習室。`,
      narrationFocus: `30 秒快速複誦本章 3 大得分關鍵，提醒同學立即前往 Arch 平台完成本章 ${topic.practices?.length || 5} 題隨堂實戰測驗！`,
      keyElements: [
        `截圖速查卡：${cleanTitle} ${coreConceptHeadings.length} 大觀念與核心公式總整理`,
        `課後演練：銜接 Arch 本章 ${topic.practices?.length || 5} 題精選練習與歷屆統測題庫`,
      ],
    },
  ];

  return {
    episodeCode,
    subjectSlug: subject.slug,
    subjectTitle: stripHtml(subject.title),
    topicSlug: topic.slug,
    topicTitle: cleanTitle,
    gradeLevel: topic.gradeLevel || 11,
    curriculumCode: topic.curriculumCode || '108-CORE',
    targetDuration: '10:00',
    tcteQuestionCount: qIds.length,
    sampleQuestionIds: qIds.slice(0, 5),
    hookQuestion: `在建築工程與統測實戰中，如何徹底掌握「${cleanTitle}」的原理、規範與計算？`,
    coreConceptHeadings,
    keyFormulas,
    fatalTrapSummary,
    mentalModelSummary,
    workedExampleTitle,
    storyboardParts,
  };
}

export function getAllSubjectVideoSyllabi(): SubjectVideoSyllabus[] {
  return allSubjects.map((subject) => {
    const prefix = SUBJECT_PREFIX_MAP[subject.slug] || subject.slug.toUpperCase().slice(0, 4);
    const episodes = subject.topics.map((topic, idx) =>
      buildTopicVideoEpisode(subject, topic, idx)
    );
    return {
      subjectSlug: subject.slug,
      subjectTitle: stripHtml(subject.title),
      category: subject.category,
      episodePrefix: `EP-${prefix}`,
      totalEpisodes: episodes.length,
      totalMinutes: episodes.length * 10,
      episodes,
    };
  });
}

export function getTopicVideoEpisode(
  subjectSlug: string,
  topicSlug: string
): VideoEpisodeOutline | null {
  const subject = allSubjects.find((s) => s.slug === subjectSlug);
  if (!subject) return null;
  const idx = subject.topics.findIndex((t) => t.slug === topicSlug);
  if (idx === -1) return null;
  return buildTopicVideoEpisode(subject, subject.topics[idx], idx);
}

export function buildPathwayVideoEpisode(
  domain: PathwaySubject,
  kp: PathwayKnowledgePoint,
  kpIndex: number
): PathwayVideoEpisode {
  const domainCode = domain.id.toUpperCase().slice(0, 6);
  const episodeCode = `EP-BARCH-${domainCode}-0${kpIndex + 1}`;

  const storyboardParts: VideoStoryboardPart[] = [
    {
      partNumber: 1,
      timeRange: '0:00 – 1:00',
      durationSec: 60,
      stageTitle: 'Studio 評圖與建築師國考破題',
      visualCue: `【大學建築系 × 專技高考導視卡】顯示 ${episodeCode}、對應考科「${kp.licensureExamCode}」與核心定義。`,
      narrationFocus: `從大學建築系設計課評圖（Jury）與建築師高考實務切入，點明「${kp.term}」的核心價值。`,
      keyElements: [
        `國考對應：${kp.licensureExamCode}`,
        `核心定義：${kp.definition}`,
      ],
    },
    {
      partNumber: 2,
      timeRange: '1:00 – 5:30',
      durationSec: 270,
      stageTitle: '三維建築圖解 × 核心構造／法規拆解',
      visualCue: `【SVG 動態建築剖面／軸測圖解 (${kp.illustration.svgType.toUpperCase()})】${kp.illustration.title} — ${kp.illustration.diagramDescription}`,
      narrationFocus: '結合建築平立剖面與三維構造大樣，逐條剖析三大核心觀念與視覺焦點。',
      keyElements: [
        ...kp.coreConcepts,
        ...kp.illustration.visualHighlights.map((vh) => `圖解亮點【${vh.label}】：${vh.desc}`),
      ],
    },
    {
      partNumber: 3,
      timeRange: '5:30 – 8:45',
      durationSec: 195,
      stageTitle: '建築師高考／Studio 大評實戰範例推演',
      visualCue: `【三步驟標準作圖／申論 SOP】展開「${kp.workedExample.title}」之完整推導步驟與構造法規依據。`,
      narrationFocus: `情境案例：${kp.workedExample.scenario}。依序拆解三大步驟並強調每個步驟背後的力學／法規理由。`,
      keyElements: kp.workedExample.steps.map(
        (s) => `${s.stepNumber}（${s.title}）：${s.content}`
      ),
    },
    {
      partNumber: 4,
      timeRange: '8:45 – 10:00',
      durationSec: 75,
      stageTitle: '大師評圖秒殺心法 × 高工先備知識連結',
      visualCue: `【大師洞察金句卡】高亮顯示 Elite Insight，並標示對應高工建築科先備單元「${kp.relatedLessonLink.title}」。`,
      narrationFocus: kp.workedExample.eliteInsight,
      keyElements: [
        `標準結論：${kp.workedExample.answer}`,
        `💡 大師心法：${kp.workedExample.eliteInsight}`,
        `🔗 高工先備銜接：/subjects/${kp.relatedLessonLink.subjectSlug}/${kp.relatedLessonLink.topicSlug}（${kp.relatedLessonLink.title}）`,
      ],
    },
  ];

  return {
    episodeCode,
    domainId: domain.id,
    domainTitle: domain.title,
    academicYear: domain.academicYear,
    licensureExamCode: kp.licensureExamCode,
    kpId: kp.id,
    title: kp.term,
    englishTitle: kp.englishTerm,
    targetDuration: '10:00',
    svgType: kp.illustration.svgType,
    storyboardParts,
  };
}

export function getPathwayVideoSyllabi(): PathwayVideoEpisode[] {
  const list: PathwayVideoEpisode[] = [];
  for (const domain of pathwaySubjects) {
    domain.knowledgePoints.forEach((kp, idx) => {
      list.push(buildPathwayVideoEpisode(domain, kp, idx));
    });
  }
  return list;
}
