import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');
const files = fs.readdirSync(subjectsDir).filter((file) => file.endsWith('.ts') && file !== 'professional-gap-topics.ts').sort();
const gapSource = fs.readFileSync(path.join(subjectsDir, 'professional-gap-topics.ts'), 'utf8')
  .replace(/^import[^\n]*\n/gm, '')
  .replace(/: string\[\]/g, '')
  .replace(/: string/g, '')
  .replace(/: TopicContent\[\]/g, '')
  .replace(/export const /g, 'const ');
const gapTopics = new Function(`${gapSource}\nreturn { mechanicsGapTopics, surveyingGapTopics, draftingGapTopics };`)();
const expectedCategories = new Map([
  ['mechanics', '專業科目（一）'],
  ['materials', '專業科目（一）'],
  ['surveying', '專業科目（二）'],
  ['drafting', '專業科目（二）'],
  ['chinese', '共同科目'],
  ['english', '共同科目'],
  ['math-c', '共同科目'],
  ['physics', '自然科學'],
  ['chemistry', '自然科學'],
  ['history', '社會領域'],
  ['geography', '社會領域'],
  ['civics', '社會領域'],
  ['extensions', '實習與實務'],
]);

const subjects = [];
const errors = [];
const seenRoutes = new Set();
const topicsByRoute = new Map();
const visualsDir = path.join(root, 'apps', 'web', 'public', 'learning-visuals');
const sharedLessonVisuals = [
  path.join(visualsDir, 'framework', 'concept-modeling.png'),
  path.join(visualsDir, 'framework', 'solution-verification.png'),
];

function readStaticInterestDetails(file) {
  if (!fs.existsSync(file)) {
    errors.push(`缺少逐頁引趣文案資料：${path.relative(root, file)}`);
    return {};
  }

  const source = fs.readFileSync(file, 'utf8');
  const assignmentIndex = source.indexOf('=');
  const literalStart = source.indexOf('{', assignmentIndex);
  const literalEnd = source.lastIndexOf('} satisfies');
  if (assignmentIndex < 0 || literalStart < 0 || literalEnd < literalStart) {
    errors.push(`${path.relative(root, file)}: 無法解析逐頁引趣文案物件`);
    return {};
  }

  try {
    return new Function(`return (${source.slice(literalStart, literalEnd + 1)});`)();
  } catch (error) {
    errors.push(`${path.relative(root, file)}: 引趣文案語法錯誤（${error.message}）`);
    return {};
  }
}

for (const visual of sharedLessonVisuals) {
  if (!fs.existsSync(visual)) errors.push(`缺少全課程共用 OpenAI 教學圖：${path.relative(root, visual)}`);
}

for (const file of files) {
  const filename = path.join(subjectsDir, file);
  const source = fs.readFileSync(filename, 'utf8');
  const exportMatch = source.match(/export const (\w+): SubjectData =/);
  if (!exportMatch) {
    errors.push(`${file}: 找不到 SubjectData export`);
    continue;
  }
  const executable = source
    .replace(/^import[^\n]*\n/gm, '')
    .replace(`export const ${exportMatch[1]}: SubjectData =`, `const ${exportMatch[1]} =`);
  const subject = new Function('mechanicsGapTopics', 'surveyingGapTopics', 'draftingGapTopics', `${executable}\nreturn ${exportMatch[1]};`)(gapTopics.mechanicsGapTopics, gapTopics.surveyingGapTopics, gapTopics.draftingGapTopics);

  if (!subject) {
    errors.push(`${file}: 找不到 SubjectData export`);
    continue;
  }

  subjects.push(subject);
  if (expectedCategories.get(subject.slug) !== subject.category) {
    errors.push(`${subject.slug}: category 應為「${expectedCategories.get(subject.slug)}」，目前為「${subject.category}」`);
  }
  if (!Array.isArray(subject.topics) || subject.topics.length === 0) {
    errors.push(`${subject.slug}: 沒有課程主題`);
    continue;
  }

  for (const topic of subject.topics) {
    const route = `/subjects/${subject.slug}/${topic.slug}`;
    if (seenRoutes.has(route)) errors.push(`${route}: 重複路由`);
    seenRoutes.add(route);
    topicsByRoute.set(route, topic);
    if (!topic.title?.trim() || !topic.desc?.trim()) errors.push(`${route}: 缺少標題或摘要`);
    if (topic.status !== 'done') errors.push(`${route}: 尚未完成（${topic.status}）`);
    if (!Array.isArray(topic.concepts) || topic.concepts.length < 3) errors.push(`${route}: 概念卡少於 3 張`);
    const practices = topic.practices?.length ? topic.practices : topic.practice ? [topic.practice] : [];
    const teachingQuestions = [...(topic.worked_examples ?? []), ...practices];
    const uniqueTeachingQuestions = new Map(teachingQuestions.map((item) => [item.question?.trim(), item]));
    if (uniqueTeachingQuestions.size < 5) {
      errors.push(`${route}: 完整教學題少於 5 題（目前 ${uniqueTeachingQuestions.size} 題）`);
    }
    if (practices.length === 0) errors.push(`${route}: 沒有練習題`);
    const topicVisual = path.join(visualsDir, subject.slug, `${topic.slug}.webp`);
    if (!fs.existsSync(topicVisual)) {
      errors.push(`${route}: 缺少 OpenAI 教學圖解`);
    } else {
      const bytes = fs.readFileSync(topicVisual);
      const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
      const isPng = bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
      const isWebp = bytes.subarray(0, 4).toString('ascii') === 'RIFF' && bytes.subarray(8, 12).toString('ascii') === 'WEBP';
      if (!isJpeg && !isPng && !isWebp) errors.push(`${route}: 主題插圖不是瀏覽器支援的 JPEG、PNG 或 WebP`);
    }
    for (const [index, practice] of practices.entries()) {
      if (!practice.question?.trim() || !practice.answer?.trim() || !practice.steps?.length) {
        errors.push(`${route}: 第 ${index + 1} 題缺少題幹、步驟或答案`);
      }
    }
    for (const [question, item] of uniqueTeachingQuestions) {
      if (!question || !item.answer?.trim() || !item.steps?.length) {
        errors.push(`${route}: 教學題缺少題幹、原始推導或答案`);
      }
    }
    if (!topic.covered_question_ids || !Array.isArray(topic.covered_question_ids)) {
      errors.push(`${route}: 缺少 covered_question_ids 陣列`);
    }
    if (!topic.worked_examples || topic.worked_examples.length === 0) {
      errors.push(`${route}: 缺少 worked_examples (至少需 1 題步驟化例題)`);
    }
    if (!topic.illustrations || topic.illustrations.length < 3) {
      errors.push(`${route}: 缺少 3 張以上之 Nanobanana 圖解`);
    }
  }
}

const topicSearchIndexFile = path.join(root, 'apps', 'web', 'src', 'data', 'topicSearchIndex.ts');
if (!fs.existsSync(topicSearchIndexFile)) {
  errors.push('缺少 Navbar 輕量主題搜尋索引');
} else {
  const searchIndexSource = fs.readFileSync(topicSearchIndexFile, 'utf8');
  const searchIndexMatch = searchIndexSource.match(/export const topicSearchIndex = (\[[\s\S]*\]) as const/);
  if (!searchIndexMatch) {
    errors.push('無法解析 Navbar 輕量主題搜尋索引');
  } else {
    const searchIndex = JSON.parse(searchIndexMatch[1]);
    const indexedRoutes = new Set(searchIndex.map((item) => `/subjects/${item.subjectSlug}/${item.topicSlug}`));
    if (searchIndex.length !== seenRoutes.size || indexedRoutes.size !== seenRoutes.size) {
      errors.push(`Navbar 搜尋索引應有 ${seenRoutes.size} 個唯一主題，目前為 ${searchIndex.length} 筆／${indexedRoutes.size} 路由`);
    }
    for (const route of seenRoutes) {
      if (!indexedRoutes.has(route)) errors.push(`${route}: 未列入 Navbar 輕量搜尋索引`);
    }
  }
}

// 每一頁都必須有「重要性／應用／幽默記憶梗」三段精確文案，禁止泛用 fallback。
const interestDetails = Object.assign(
  {},
  ...[
    'interestHookEngineering.ts',
    'interestHookCore.ts',
    'interestHookHumanities.ts',
  ].map((file) => readStaticInterestDetails(path.join(root, 'apps', 'web', 'src', 'lib', 'pedagogy', file))),
);
const expectedInterestKeys = new Set(
  [...topicsByRoute.keys()].map((route) => route.replace(/^\/subjects\//, '')),
);
const interestFieldValues = {
  importance: new Map(),
  application: new Map(),
  hook: new Map(),
};

for (const routeKey of expectedInterestKeys) {
  const detail = interestDetails[routeKey];
  if (!detail) {
    errors.push(`${routeKey}: 缺少逐頁精確引趣文案`);
    continue;
  }

  for (const field of Object.keys(interestFieldValues)) {
    const value = detail[field]?.trim();
    if (!value || [...value].length < 28) {
      errors.push(`${routeKey}: ${field} 文案少於 28 字或為空`);
      continue;
    }
    if (interestFieldValues[field].has(value)) {
      errors.push(`${routeKey}: ${field} 與 ${interestFieldValues[field].get(value)} 重複，未逐頁客製`);
    } else {
      interestFieldValues[field].set(value, routeKey);
    }
  }
}

for (const routeKey of Object.keys(interestDetails)) {
  if (!expectedInterestKeys.has(routeKey)) errors.push(`${routeKey}: 引趣文案沒有對應的教學頁`);
}

// 以終為始：每一道歷屆統測題都必須正向連到已發布教學頁，教學頁也必須
// 反向登錄該題，且具備核心知識點、步驟化例題與練習。
const examRegistries = [
  JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'common-exam-questions.json'), 'utf8')),
  JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'exam-coverage.json'), 'utf8')),
];
const allExamQuestions = examRegistries.flatMap((registry) => registry.questions);

// /practice must ship only a tiny catalog in its initial RSC payload. The 925
// selectable questions live in year-by-subject public shards and load on start.
const practiceCatalogPath = path.join(root, 'apps', 'web', 'public', 'practice-data', 'index.json');
if (!fs.existsSync(practiceCatalogPath)) {
  errors.push('/practice 缺少輕量題庫索引 public/practice-data/index.json');
} else {
  const practiceCatalog = JSON.parse(fs.readFileSync(practiceCatalogPath, 'utf8'));
  const expectedPracticeQuestions = allExamQuestions.filter(
    (question) => question.year >= 111 && question.year <= 115,
  );
  const expectedPracticeIds = new Set(expectedPracticeQuestions.map((question) => question.id));
  const loadedPracticeQuestions = [];
  const shardDescriptors = practiceCatalog.years?.flatMap((entry) => entry.shards ?? []) ?? [];

  if (practiceCatalog.total !== 925 || practiceCatalog.years?.length !== 5) {
    errors.push(`/practice 輕量索引應涵蓋 111–115 年共 925 題，目前為 ${practiceCatalog.total ?? 0} 題`);
  }
  if (Buffer.byteLength(JSON.stringify(practiceCatalog)) > 12 * 1024) {
    errors.push('/practice 首屏索引超過 12 KiB，不可夾帶完整題目');
  }
  if (shardDescriptors.length !== 25) {
    errors.push(`/practice 應有 25 個年度×科目分片，目前為 ${shardDescriptors.length}`);
  }

  for (const yearEntry of practiceCatalog.years ?? []) {
    for (const shard of yearEntry.shards ?? []) {
      const relativeShard = shard.href?.replace(/^\//, '');
      const shardPath = relativeShard
        ? path.join(root, 'apps', 'web', 'public', ...relativeShard.split('/'))
        : '';
      if (!shardPath || !fs.existsSync(shardPath)) {
        errors.push(`/practice 分片不存在：${shard.href ?? '(missing href)'}`);
        continue;
      }
      const payload = JSON.parse(fs.readFileSync(shardPath, 'utf8'));
      if (payload.year !== yearEntry.year || payload.exam !== shard.exam) {
        errors.push(`${shard.href}: 年度或科目與索引不一致`);
      }
      if (payload.questions?.length !== shard.count) {
        errors.push(`${shard.href}: 題數與索引不一致`);
      }
      loadedPracticeQuestions.push(...(payload.questions ?? []));
    }
  }

  const loadedPracticeIds = new Set(loadedPracticeQuestions.map((question) => question.id));
  if (loadedPracticeQuestions.length !== 925 || loadedPracticeIds.size !== 925) {
    errors.push(`/practice 分片應有 925 題且不得重複，目前為 ${loadedPracticeQuestions.length} 題／${loadedPracticeIds.size} 個 ID`);
  }
  for (const questionId of expectedPracticeIds) {
    if (!loadedPracticeIds.has(questionId)) errors.push(`/practice 分片遺漏 ${questionId}`);
  }
}

for (const question of allExamQuestions) {
  const topic = topicsByRoute.get(question.lessonRoute);
  if (!topic) {
    errors.push(`${question.id}: 無對應的完整教學頁 ${question.lessonRoute ?? '(missing route)'}`);
    continue;
  }
  if (!topic.covered_question_ids?.includes(question.id)) {
    errors.push(`${question.id}: 教學頁 ${question.lessonRoute} 未反向登錄此題`);
  }
  const practices = topic.practices?.length ? topic.practices : topic.practice ? [topic.practice] : [];
  if (topic.concepts.length < 3 || !topic.worked_examples?.length || !practices.length) {
    errors.push(`${question.id}: 對應教學頁缺少核心知識點、步驟化例題或練習`);
  }
}

const topicLayout = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'components', 'TopicPageLayout.tsx'),
  'utf8',
);
const solutionSteps = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'lib', 'pedagogy', 'solutionSteps.ts'),
  'utf8',
);
const learningSources = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'lib', 'pedagogy', 'learningSources.ts'),
  'utf8',
);
const interestHooks = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'lib', 'pedagogy', 'interestHooks.ts'),
  'utf8',
);
const resourcesPage = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'app', 'resources', 'page.tsx'),
  'utf8',
);
const navbar = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'components', 'Navbar.tsx'),
  'utf8',
);
const rootLayout = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'app', 'layout.tsx'),
  'utf8',
);
const deferredPomodoro = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'components', 'DeferredPomodoro.tsx'),
  'utf8',
);
const globalStyles = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'app', 'globals.css'),
  'utf8',
);
const practicePage = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'app', 'practice', 'page.tsx'),
  'utf8',
);
const examSimulator = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'components', 'ExamSimulator.tsx'),
  'utf8',
);
const nextConfig = fs.readFileSync(
  path.join(root, 'apps', 'web', 'next.config.ts'),
  'utf8',
);
const sevenIterationSource = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'lib', 'pedagogy', 'sevenIterationEnrichment.ts'),
  'utf8',
);
if (!topicLayout.includes('buildDetailedSolution(we)') || !topicLayout.includes('buildDetailedSolution(practice)')) {
  errors.push('所有例題與練習必須套用五段式詳細解析');
}
if (!solutionSteps.includes('while (unique.length < 5)')) {
  errors.push('詳細解析器未保證每題至少 5 個可重現步驟');
}
if (!topicLayout.includes('getLearningSources(subject.slug)') || !learningSources.includes('官方命題依據')) {
  errors.push('所有教學頁必須呈現官方命題依據與研究來源');
}
if (!resourcesPage.includes('官方一級來源') || !resourcesPage.includes('補充解題研究') || !resourcesPage.includes('最後查核 2026-08-11')) {
  errors.push('統測學習資源專區缺少來源分級、補充解析或查核日期');
}
for (const requiredVisual of ['concept-modeling.png', 'solution-verification.png']) {
  if (!topicLayout.includes(requiredVisual)) {
    errors.push(`所有學習頁必須實際呈現 OpenAI 教學圖：${requiredVisual}`);
  }
}
const interestHookIndex = topicLayout.indexOf('id="interest-hook"');
const progressIndex = topicLayout.indexOf('Chapter Learning Progress Bar');
const interestLeadIndex = topicLayout.indexOf('data-interest-lead', interestHookIndex);
const interestVisualIndex = topicLayout.indexOf('id="observable"', interestHookIndex);
const interestImportanceIndex = topicLayout.indexOf('{interestHook.importance}', interestHookIndex);
if (
  interestHookIndex < 0
  || progressIndex < 0
  || interestHookIndex > progressIndex
  || !topicLayout.includes('data-topic-interest-hook')
  || !topicLayout.includes('alt={interestHook.imageAlt}')
  || !topicLayout.includes('src={visualSrc}')
  || !topicLayout.includes('{interestHook.importance}')
  || !topicLayout.includes('{interestHook.application}')
  || !topicLayout.includes('{interestHook.hook}')
) {
  errors.push('每個教學頁最前方必須實際呈現逐頁重要性、應用、幽默引導與專屬插圖');
}
if (
  interestLeadIndex < interestHookIndex
  || interestVisualIndex < interestLeadIndex
  || interestImportanceIndex < interestVisualIndex
) {
  errors.push('手機 DOM 必須在引趣 lead 後立即呈現專屬插圖，再進入重要性與應用卡');
}
if (
  !topicLayout.includes('role="dialog"')
  || !topicLayout.includes('aria-modal="true"')
  || !topicLayout.includes("event.key === 'Escape'")
  || !topicLayout.includes('lightboxCloseButtonRef.current?.focus()')
) {
  errors.push('教學插圖燈箱必須具備 dialog 語意、Esc 關閉與焦點管理');
}
for (const subjectSlug of expectedCategories.keys()) {
  if (!interestHooks.includes(`${subjectSlug}: {`) && !interestHooks.includes(`'${subjectSlug}': {`)) {
    errors.push(`${subjectSlug}: 缺少科目引趣語氣設定`);
  }
}
if (!interestHooks.includes('throw new Error(`Missing topic interest hook for ${routeKey}`)')) {
  errors.push('逐頁引趣文案不可使用未揭露的泛用 fallback');
}
if (navbar.includes("from '@/data/subjects'") || !navbar.includes("from '@/data/topicSearchIndex'")) {
  errors.push('Navbar 不可載入 13 科完整教學資料，必須使用輕量主題索引');
}
if (
  topicLayout.includes('exam-coverage.json')
  || topicLayout.includes('common-exam-questions.json')
  || !topicLayout.includes('mappedExamQuestions.slice(0, visibleExamQuestionCount)')
  || !topicLayout.includes('useState(5)')
) {
  errors.push('教學頁 client 不可載入完整題庫，且歷屆題必須每次最多增量顯示 5 題');
}
if (
  !topicLayout.includes('loading="lazy"')
  || !topicLayout.includes('decoding="async"')
  || !topicLayout.includes('lesson-deferred-section')
  || !topicLayout.includes('navigator.clipboard?.writeText')
) {
  errors.push('教學長頁缺少題圖延遲解碼、後半內容延遲繪製或安全剪貼簿降級');
}
if (
  !rootLayout.includes('ArchLowRam')
  || !rootLayout.includes('<DeferredPomodoro />')
  || globalStyles.includes('html.arch-lite') === false
  || !deferredPomodoro.includes("import('@/components/quiz/PomodoroTimer')")
  || !deferredPomodoro.includes('.catch(() =>')
) {
  errors.push('全站缺少 Android 低記憶體模式，或 Pomodoro 延遲載入未安全處理 chunk 失敗');
}
if (
  practicePage.includes('exam-coverage.json')
  || practicePage.includes('common-exam-questions.json')
  || practicePage.includes('questions={')
  || !practicePage.includes('catalog={catalogData as PracticeCatalog}')
  || !examSimulator.includes('fetch(`${basePath}${shard.href}?v=${encodeURIComponent(catalog.version)}`')
  || !examSimulator.includes('payload.version !== catalog.version')
  || !examSimulator.includes("const [loading, setLoading] = useState(false)")
  || !nextConfig.includes('publicExcludes: ["!practice-data/shards/**/*.json"]')
) {
  errors.push('/practice 首屏不可序列化完整題庫，必須按開始後以 basePath 安全路徑載入分片並排除預快取');
}
for (const requiredInterestField of ['topicSummary', 'imageAlt', 'imageCaption', 'cleanTopicDescription(topicDescription)']) {
  if (!interestHooks.includes(requiredInterestField)) {
    errors.push(`逐頁引趣生成器缺少 ${requiredInterestField}`);
  }
}

if (
  !topicLayout.includes('getSevenIterationPacks(')
  || !topicLayout.includes('iterationPacks.map((pack)')
  || !topicLayout.includes('id="seven-iterations"')
) {
  errors.push('所有教學頁必須呈現七輪深化內容與可操作導覽');
}
for (let iteration = 1; iteration <= 7; iteration += 1) {
  if (!sevenIterationSource.includes(`pack(${iteration},`)) errors.push(`七輪深化缺少第 ${iteration} 輪內容`);
}
for (const subject of subjects) {
  for (const topic of subject.topics) {
    const baselineUnits = topic.concepts.length
      + (topic.worked_examples?.length ?? 0)
      + (topic.practices?.length ?? (topic.practice ? 1 : 0));
    const requiredAddedUnits = Math.max(1, Math.ceil(baselineUnits * 0.1));
    if (requiredAddedUnits > 6) {
      errors.push(`/subjects/${subject.slug}/${topic.slug}: 每輪 6 個新增教學單元未達基線 10%（門檻 ${requiredAddedUnits}）`);
    }
  }
}
for (const qualityToken of ['目標更清楚', '資訊更易讀', '認知負荷更低', '回饋更具體', '課綱與題目更緊密']) {
  if (!sevenIterationSource.includes(qualityToken)) errors.push(`七輪深化缺少品質校正：${qualityToken}`);
}

if (subjects.length !== expectedCategories.size) {
  errors.push(`科目數應為 ${expectedCategories.size}，目前為 ${subjects.length}`);
}

const topicCount = subjects.reduce((total, subject) => total + subject.topics.length, 0);
if (errors.length) {
  console.error(`課程資料驗證失敗（${errors.length} 項）`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`課程資料驗證通過：${subjects.length} 科、${topicCount} 個主題、${Object.keys(interestDetails).length} 組逐頁引趣圖文、每頁至少 5 題五段式詳解、${seenRoutes.size} 條學習路由。`);
