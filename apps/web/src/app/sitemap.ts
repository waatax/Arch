import { MetadataRoute } from 'next';
import { topicSearchIndex } from '@/data/topicSearchIndex';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://waatax.github.io/Arch';

  // 1. Static Hubs and Major Pages
  const staticRoutes = [
    '',
    '/curriculum',
    '/visualizers',
    '/field-guide',
    '/cheatsheets',
    '/practice',
    '/cases',
    '/goals',
    '/exam-116',
    '/exams',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.85,
  }));

  // 2. Case Study Pages
  const caseRoutes = [
    '/cases/taichung-national-theater',
    '/cases/luce-memorial-chapel',
    '/cases/921-earthquake-museum',
    '/cases/taipei-101',
    '/cases/beitou-library',
    '/cases/kaohsiung-main-station',
    '/cases/national-library-public-information',
    '/cases/tpac',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3. Subject Hub Pages
  const subjectSlugs = [
    'mechanics',
    'materials',
    'surveying',
    'drafting',
    'chinese',
    'english',
    'math-c',
    'physics',
    'chemistry',
    'history',
    'geography',
    'civics',
    'extensions',
  ];

  const subjectRoutes = subjectSlugs.map((slug) => ({
    url: `${baseUrl}/subjects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 4. Topic Lessons (99 topics)
  const topicRoutes = topicSearchIndex.map((topic) => ({
    url: `${baseUrl}/subjects/${topic.subjectSlug}/${topic.topicSlug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...caseRoutes, ...subjectRoutes, ...topicRoutes];
}
