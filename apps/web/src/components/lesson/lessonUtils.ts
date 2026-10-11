import type { TopicContent } from '@/data/types';

/** 依內容量估算研讀時間（分鐘，取 5 的倍數，10–60） */
export function estimateStudyMinutes(topic: TopicContent): number {
  const text = topic.concepts.reduce((sum, concept) => {
    const table = concept.table ? concept.table.rows.flat().join('').length : 0;
    return sum + concept.body.length + (concept.formula?.length ?? 0) + (concept.steps?.join('').length ?? 0) + table * 0.5;
  }, 0);
  const readMinutes = text / 350; // 中文教材含公式約每分鐘 350 字
  const problemMinutes = (topic.worked_examples?.length ?? 0) * 4 + (topic.practices?.length ?? 0) * 2;
  const total = readMinutes + problemMinutes;
  return Math.min(60, Math.max(10, Math.round(total / 5) * 5));
}

export function gradeLabel(gradeLevel?: number): string | null {
  if (gradeLevel === 10) return '高一';
  if (gradeLevel === 11) return '高二';
  if (gradeLevel === 12) return '高三';
  return null;
}

/** 統測重要度（資料中的 examHitRate 為編輯依考綱與歷屆題分布的評估，不是統計數字） */
export function importanceLabel(rate?: number): { stars: string; label: string } | null {
  if (!rate) return null;
  const label = rate >= 5 ? '高頻必考' : rate === 4 ? '常考' : rate === 3 ? '基礎考點' : '延伸理解';
  return { stars: '★'.repeat(rate) + '☆'.repeat(5 - rate), label };
}

export const LESSON_SECTIONS = [
  { id: 'lesson-hook', label: '導入' },
  { id: 'principles', label: '觀念' },
  { id: 'quick-check', label: '小測' },
  { id: 'traps', label: '易錯' },
  { id: 'worked', label: '例題' },
  { id: 'practice', label: '練習' },
  { id: 'exam-questions-section', label: '真題' },
  { id: 'mastery-checklist', label: '檢核' },
  { id: 'lesson-extras', label: '延伸' },
] as const;

export type LessonSectionId = (typeof LESSON_SECTIONS)[number]['id'];

/** 把段落 id 轉成人看得懂的位置描述（繼續上次學習用） */
export function describeSection(section: string | undefined, conceptHeadings: string[]): string | null {
  if (!section) return null;
  const conceptMatch = section.match(/^concept-(\d+)$/);
  if (conceptMatch) {
    const index = Number(conceptMatch[1]);
    const heading = conceptHeadings[index];
    return heading ? `觀念 ${index + 1}：${heading.replace(/<[^>]+>|\*\*/g, '')}` : `觀念 ${index + 1}`;
  }
  return LESSON_SECTIONS.find((item) => item.id === section)?.label ?? null;
}
