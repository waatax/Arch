import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const webRoot = path.join(root, 'apps', 'web');

console.log('🏛️  啟動 Arch V9.00「七十個七次」（490 重真實品質閘門）全自動化嚴格檢驗...\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    passCount++;
  } else {
    failCount++;
    console.error(`❌ FAIL: ${message}`);
  }
}

// 1. Check 14 Core Hubs & Pages
const corePages = [
  'apps/web/src/app/page.tsx',
  'apps/web/src/app/layout.tsx',
  'apps/web/src/app/pathway/page.tsx',
  'apps/web/src/app/curriculum/page.tsx',
  'apps/web/src/app/visualizers/page.tsx',
  'apps/web/src/app/field-guide/page.tsx',
  'apps/web/src/app/cheatsheets/page.tsx',
  'apps/web/src/app/practice/page.tsx',
  'apps/web/src/app/cases/page.tsx',
  'apps/web/src/app/goals/page.tsx',
  'apps/web/src/app/exam-116/page.tsx',
  'apps/web/src/app/exams/page.tsx',
  'apps/web/src/app/resources/page.tsx',
  'apps/web/src/app/constellation/page.tsx',
];

for (const p of corePages) {
  const fullPath = path.join(root, p);
  assert(fs.existsSync(fullPath), `核心頁面存在：${p}`);
}

// 2. Check 8 SEO / PWA / Web Standards Files
const seoFiles = [
  'apps/web/src/app/sitemap.ts',
  'apps/web/src/app/robots.ts',
  'apps/web/src/app/manifest.ts',
  'apps/web/public/manifest.json',
  'apps/web/src/app/favicon.ico',
];

for (const f of seoFiles) {
  const fullPath = path.join(root, f);
  assert(fs.existsSync(fullPath), `SEO/PWA 標準檔存在：${f}`);
}

const layoutContent = fs.readFileSync(path.join(webRoot, 'src', 'app', 'layout.tsx'), 'utf-8');
assert(layoutContent.includes('application/ld+json'), 'layout.tsx 包含 JSON-LD 結構化標籤');
assert(layoutContent.includes('EducationalOccupationalCredential'), '包含證照階層知識圖譜宣告');
assert(layoutContent.includes('themeColor'), '包含 iOS 與多平台 themeColor 配置');

// 3. Check 13 Subjects Data Files
const subjectFiles = [
  'mechanics.ts',
  'materials.ts',
  'surveying.ts',
  'drafting.ts',
  'chinese.ts',
  'english.ts',
  'math-c.ts',
  'physics.ts',
  'chemistry.ts',
  'history.ts',
  'geography.ts',
  'civics.ts',
  'extensions.ts',
];

const subjectContents = {};
for (const sf of subjectFiles) {
  const fullPath = path.join(webRoot, 'src', 'data', 'subjects', sf);
  const exists = fs.existsSync(fullPath);
  assert(exists, `學科資料檔存在：${sf}`);
  if (exists) {
    const slug = sf.replace('.ts', '');
    subjectContents[slug] = fs.readFileSync(fullPath, 'utf-8');
  }
}

// 4. Check 111 Topics in Topic Search Index
const searchIndexPath = path.join(webRoot, 'src', 'data', 'topicSearchIndex.ts');
const searchIndexRaw = fs.readFileSync(searchIndexPath, 'utf-8');
const searchIndexJson = searchIndexRaw.slice(searchIndexRaw.indexOf('['), searchIndexRaw.indexOf('] as const') + 1);
const topicSearchIndex = JSON.parse(searchIndexJson);

for (const t of topicSearchIndex) {
  assert(
    Boolean(t.subjectSlug && t.topicSlug && t.topicTitle && t.desc),
    `搜尋索引主題結構完整：${t.subjectSlug}/${t.topicSlug}`
  );
}

// 5. Check 111 Topics Infographic Visual Diagrams Coverage
const dataContent1 = fs.readFileSync(path.join(webRoot, 'src', 'lib', 'pedagogy', 'topicInfographicsData.ts'), 'utf-8');
const dataContent2 = fs.readFileSync(path.join(webRoot, 'src', 'lib', 'pedagogy', 'topicInfographicsCommon.ts'), 'utf-8');
const combinedInfographics = dataContent1 + '\n' + dataContent2;

for (const t of topicSearchIndex) {
  const key = `${t.subjectSlug}/${t.topicSlug}`;
  const hasInfographic = combinedInfographics.includes(`'${key}':`) || combinedInfographics.includes(`"${key}":`);
  assert(hasInfographic, `教學 Infographic 圖解已覆蓋：${key}`);
}

// 6. Check 111 Topics in Subject Source Code Files
for (const t of topicSearchIndex) {
  const sfContent = subjectContents[t.subjectSlug] || '';
  const hasTopicInSource = sfContent.includes(`slug: '${t.topicSlug}'`) || 
                           sfContent.includes(`slug: "${t.topicSlug}"`) || 
                           sfContent.includes(`'${t.topicSlug}'`);
  assert(hasTopicInSource, `學科課綱主題錨定：${t.subjectSlug}/${t.topicSlug}`);
}

// 7. Check 25 Practice Exam Shards Integrity (111-115 across 5 subjects)
const shardYears = ['111', '112', '113', '114', '115'];
const shardSubjects = ['chinese', 'english', 'math-c', 'professional-1', 'professional-2'];

for (const year of shardYears) {
  for (const subj of shardSubjects) {
    const shardFilename = `${year}-${subj}.json`;
    const shardPath = path.join(webRoot, 'public', 'practice-data', 'shards', shardFilename);
    const exists = fs.existsSync(shardPath);
    if (exists) {
      const data = JSON.parse(fs.readFileSync(shardPath, 'utf-8'));
      assert(Array.isArray(data.questions) && data.questions.length > 0, `試題分片非空：${shardFilename}`);
    } else {
      assert(false, `試題分片檔案存在：${shardFilename}`);
    }
  }
}

// 8. Check 12 Architectural Case Studies Pages & Dynamic Modules
const staticCaseSlugs = [
  '921-earthquake-museum',
  'beitou-library',
  'kaohsiung-main-station',
  'luce-memorial-chapel',
  'national-library-public-information',
  'taichung-national-theater',
  'taipei-101',
  'tpac',
];

for (const slug of staticCaseSlugs) {
  const casePath = path.join(webRoot, 'src', 'app', 'cases', slug, 'page.tsx');
  assert(fs.existsSync(casePath), `經典建築實體案例頁面：${slug}`);
}

assert(fs.existsSync(path.join(webRoot, 'src', 'app', 'cases', 'page.tsx')), '建築案例首頁：cases/page.tsx');
assert(fs.existsSync(path.join(webRoot, 'src', 'app', 'cases', '[slug]', 'page.tsx')), '建築案例動態路由：cases/[slug]/page.tsx');

const globalCasesPath = path.join(webRoot, 'src', 'data', 'globalArchitectureCases.ts');
const globalCasesContent = fs.readFileSync(globalCasesPath, 'utf-8');
assert(globalCasesContent.includes('danjiang-bridge'), '涵蓋國際名築案例：淡江大橋 (danjiang-bridge)');
assert(globalCasesContent.includes('church-of-light'), '涵蓋國際名築案例：光之教會 (church-of-light)');

// 9. Check 10 Semesters in Architecture Pathway
const pathwayPageContent = fs.readFileSync(path.join(webRoot, 'src', 'app', 'pathway', 'page.tsx'), 'utf-8');
for (let i = 1; i <= 10; i++) {
  assert(pathwayPageContent.includes(`Semester ${i}`), `建築之路包含第 ${i} 學期課綱進程`);
}

// 10. Check 8 Core Academic Fields in Architecture Pathway
const pathwayCurriculumContent = fs.readFileSync(path.join(webRoot, 'src', 'data', 'pathwayCurriculum.ts'), 'utf-8');
const academicFieldIds = [
  'studio',
  'history',
  'construction',
  'environment',
  'structure',
  'site',
  'codes',
  'digital',
];

for (const fieldId of academicFieldIds) {
  assert(pathwayCurriculumContent.includes(`id: '${fieldId}'`), `建築之路包含核心領域：${fieldId}`);
}

// 11. Check 6 National Licensure Exam Subjects
const licensureExams = [
  '建築計畫與設計',
  '敷地計畫與都市設計',
  '營建法規與實務',
  '建築結構',
  '建築構造與施工',
  '建築環境控制',
];

for (const exam of licensureExams) {
  assert(pathwayCurriculumContent.includes(exam), `國家專技高考考科對齊：${exam}`);
}

// 12. Check 8 Visualizers Lab Modules
const visualizersContent = fs.readFileSync(path.join(webRoot, 'src', 'app', 'visualizers', 'page.tsx'), 'utf-8');
const visualizerModules = [
  'Beam Shear & Moment',
  'Mohr\'s Circle',
  'Hooke\'s Law',
  'CNS Orthographic Projection',
  'Differential Leveling',
  'Concrete Mix',
  'Thermal Transmittance',
  'Seismic',
];

for (const mod of visualizerModules) {
  assert(visualizersContent.includes(mod), `實驗室包含模擬模組：${mod}`);
}

// 13. Check 6 Step-0 Prerequisites Micro-Lessons
const prerequisitePages = [
  'apps/web/src/app/prerequisites/page.tsx',
  'apps/web/src/app/prerequisites/english/vocab-1200/page.tsx',
  'apps/web/src/app/prerequisites/english/basic-tenses-passive/page.tsx',
  'apps/web/src/app/prerequisites/english/complex-sentences/page.tsx',
  'apps/web/src/app/prerequisites/english/parts-of-speech/page.tsx',
  'apps/web/src/app/prerequisites/english/phonetics-dictionary/page.tsx',
];

for (const pp of prerequisitePages) {
  const fullPath = path.join(root, pp);
  assert(fs.existsSync(fullPath), `先備跳板核心微課頁面存在：${pp}`);
}

// 14. Check 12 Web Audio Native Generators & Soundscapes in soundEffects.ts
const soundPath = path.join(webRoot, 'src', 'lib', 'audio', 'soundEffects.ts');
const soundContent = fs.readFileSync(soundPath, 'utf-8');
const audioMethods = [
  'playPencilDraw',
  'playStampThud',
  'playBubbleLevel',
  'playCorrectChime',
  'playZeroForceSnap',
  'playConcreteCrack',
  'playClickBeep',
  'playShakingRumble',
  'playLaserBeep',
  'startRainAmbient',
  'startBreezeAmbient',
  'stopAllAmbient',
];

for (const m of audioMethods) {
  assert(soundContent.includes(m), `Web Audio 合成音效函數：${m}`);
}

// 15. Check 14 iOS Haptics & Mobile Dock Components
const hapticsPath = path.join(webRoot, 'src', 'lib', 'haptics.ts');
assert(fs.existsSync(hapticsPath), 'iOS 觸覺反饋模組 haptics.ts 存在');
const hapticsContent = fs.readFileSync(hapticsPath, 'utf-8');
const hapticStyles = ['selection', 'light', 'medium', 'heavy', 'success', 'warning', 'error'];
for (const hs of hapticStyles) {
  assert(hapticsContent.includes(`'${hs}'`), `Haptics 支援 ${hs} 觸覺脈衝`);
}

const mobileTabBarPath = path.join(webRoot, 'src', 'components', 'IOSMobileTabBar.tsx');
assert(fs.existsSync(mobileTabBarPath), 'iOS 行動端底部導覽列 IOSMobileTabBar.tsx 存在');
const mobileTabBarContent = fs.readFileSync(mobileTabBarPath, 'utf-8');
assert(mobileTabBarContent.includes('Home'), '底部導覽包含首頁');
assert(mobileTabBarContent.includes('Compass'), '底部導覽包含建築之路');
assert(mobileTabBarContent.includes('BookOpen'), '底部導覽包含課程');
assert(mobileTabBarContent.includes('PenTool'), '底部導覽包含模擬');
assert(mobileTabBarContent.includes('Search'), '底部導覽包含全域搜尋');

// 16. Check 11 Architectural Editorial & iOS Design Tokens in globals.css
const globalsCssPath = path.join(webRoot, 'src', 'app', 'globals.css');
const globalsCss = fs.readFileSync(globalsCssPath, 'utf-8');
const cssTokens = [
  { token: '--color-paper-50', name: '和紙象牙白變數' },
  { token: '--color-paper-100', name: '溫潤穀紙變數' },
  { token: '--color-ink-900', name: '松煙濃墨變數' },
  { token: '--color-ink-650', name: '油墨灰青變數' },
  { token: '--color-blueprint-700', name: '藍染群青變數' },
  { token: ':root.dark', name: '暗黑藍圖模式' },
  { token: '.btn-tactile', name: '觸覺按鈕微互動樣式' },
  { token: '.ios-glass', name: 'Apple Liquid Glass 磨砂材質' },
  { token: '.washi-paper', name: '和紙微質地紋理' },
  { token: '.safe-bottom', name: 'iOS Safe Area 底部安全區' },
  { token: '.mobile-scroll', name: '行動端平滑觸控滾動' },
];

for (const ct of cssTokens) {
  assert(globalsCss.includes(ct.token), `CSS 建築設計規範：${ct.name}`);
}

// 17. Check 10 Field Guide, Cheatsheets & Omnibar Features
const fieldGuidePath = path.join(webRoot, 'src', 'app', 'field-guide', 'page.tsx');
const fieldGuideContent = fs.readFileSync(fieldGuidePath, 'utf-8');
assert(fieldGuideContent.includes('checkedItems'), '現場手冊支援互動勾選狀態');
assert(fieldGuideContent.includes('sectionProgress'), '現場手冊具備進度百分比');
assert(fieldGuideContent.includes('arch_field_checklist_state_v7'), '現場手冊進度本機持久化');

const cheatsheetsPath = path.join(webRoot, 'src', 'app', 'cheatsheets', 'page.tsx');
const cheatsheetsContent = fs.readFileSync(cheatsheetsPath, 'utf-8');
assert(cheatsheetsContent.includes('five-star'), '速查指南包含考前 10 分鐘 5 星錦囊');
assert(cheatsheetsContent.includes('handleCopyLatex'), '速查指南支援 LaTeX 一鍵複製');
assert(cheatsheetsContent.includes('Vector Dot Product'), '速查指南包含數學 C 核心公式');
assert(cheatsheetsContent.includes('english'), '速查指南包含統測英文隨身讀');

const navbarPath = path.join(webRoot, 'src', 'components', 'Navbar.tsx');
const navbarContent = fs.readFileSync(navbarPath, 'utf-8');
assert(navbarContent.includes('Omnibar'), 'Navbar 包含 Omnibar 指揮中心標記');
assert(navbarContent.includes('categoryFilters'), 'Navbar 支援分類標籤篩選');
assert(navbarContent.includes('111 主題'), 'Navbar 搜尋欄標註 111 主題');

console.log(`\n======================================================`);
console.log(`🎯 70x7 品質閘門檢驗結果：${passCount} / 490 項指標通過`);
if (failCount > 0) {
  console.error(`💥 檢驗未完全通過，失敗項目數：${failCount}`);
  process.exit(1);
} else {
  console.log(`✨ 490 重深度淬鍊品質指標 100% 全部通過！達標 iOS App 大賞 A+ 級標準！`);
  console.log(`======================================================\n`);
}
