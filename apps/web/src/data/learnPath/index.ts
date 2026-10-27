/**
 * 闖關學習資料入口（只給 Server Component 與驗證腳本使用）
 *
 * 用戶端元件不要直接 import 這支檔案：全部題庫約數千題，應由頁面在建置時
 * 只把「該門課程」的單元序列化成 props，避免整包題庫進入瀏覽器 bundle。
 */
import { COURSE_CATALOG, SEMESTERS } from './catalog';
import { parseCourseDsl } from './dsl';
import type { CourseSummary, LearnCourse, SemesterId } from './types';
import { buildCoursePath } from '@/lib/learn/engine';
import { PRO_G10 } from './content/pro-g10';
import { PRO_G11_MECH_MAT } from './content/pro-g11-mech-mat';
import { PRO_G11_PRACTICE } from './content/pro-g11-practice';
import { PRO_G12 } from './content/pro-g12';
import { CHINESE } from './content/chinese';
import { ENGLISH } from './content/english';
import { MATH } from './content/math';
import { SCIENCE } from './content/science';
import { SOCIAL } from './content/social';
import { ARTS_LIFE } from './content/arts-life';
import { HEALTH_PE } from './content/health-pe';

export { SEMESTERS, COURSE_CATALOG } from './catalog';

const CONTENT: Record<string, string> = {
  ...PRO_G10,
  ...PRO_G11_MECH_MAT,
  ...PRO_G11_PRACTICE,
  ...PRO_G12,
  ...CHINESE,
  ...ENGLISH,
  ...MATH,
  ...SCIENCE,
  ...SOCIAL,
  ...ARTS_LIFE,
  ...HEALTH_PE,
};

let cache: LearnCourse[] | null = null;

export function getAllCourses(): LearnCourse[] {
  if (cache) return cache;
  cache = COURSE_CATALOG.map((meta) => {
    // 缺題庫的課程以空單元呈現「建置中」；scripts/validate-learn-path.mjs 會讓 CI 擋下
    const source = CONTENT[meta.id];
    return { ...meta, units: source ? parseCourseDsl(meta.id, source) : [] };
  });
  const orphan = Object.keys(CONTENT).filter((id) => !COURSE_CATALOG.some((c) => c.id === id));
  if (orphan.length) throw new Error(`[learnPath] 題庫沒有對應課程：${orphan.join(', ')}`);
  return cache;
}

export function getCourse(id: string): LearnCourse | undefined {
  return getAllCourses().find((c) => c.id === id);
}

export function getCourseSummaries(): CourseSummary[] {
  return getAllCourses().map(({ units, ...meta }) => ({
    ...meta,
    unitCount: units.length,
    itemCount: units.reduce((n, u) => n + u.items.length, 0),
    nodeIds: buildCoursePath({ ...meta, units }).map((n) => n.id),
    unitTitles: units.map((u) => u.title),
  }));
}

export function coursesBySemester(semester: SemesterId) {
  return getAllCourses().filter((c) => c.semester === semester);
}

export function learnStaticParams() {
  return COURSE_CATALOG.map((c) => ({ semester: c.semester, course: c.key }));
}

export const SEMESTER_LIST = SEMESTERS;
