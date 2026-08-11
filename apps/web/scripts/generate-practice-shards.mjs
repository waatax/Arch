import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDirectory, '..');
const repositoryRoot = path.resolve(webRoot, '..', '..');
const registryRoot = path.join(repositoryRoot, 'data', 'registry');
const outputRoot = path.join(webRoot, 'public', 'practice-data');
const shardRoot = path.join(outputRoot, 'shards');

const common = JSON.parse(
  fs.readFileSync(path.join(registryRoot, 'common-exam-questions.json'), 'utf8'),
);
const professional = JSON.parse(
  fs.readFileSync(path.join(registryRoot, 'exam-coverage.json'), 'utf8'),
);
const pageMap = JSON.parse(
  fs.readFileSync(path.join(registryRoot, 'exam-page-map.json'), 'utf8'),
);
const appVersion = JSON.parse(
  fs.readFileSync(path.join(webRoot, 'package.json'), 'utf8'),
).version;

const years = [115, 114, 113, 112, 111];
const exams = [
  ['chinese', '國文'],
  ['english', '英文'],
  ['math-c', '數學(C)'],
  ['professional-1', '專業科目（一）'],
  ['professional-2', '專業科目（二）'],
];
const professionalNames = { 1: '專業科目（一）', 2: '專業科目（二）' };

function compactQuestion(question) {
  const compact = {
    id: question.id,
    year: question.year,
    exam: question.exam,
    subjectName: question.subjectName,
    questionNo: question.questionNo,
    answer: question.answer,
    excerpt: question.excerpt,
    options: question.options,
    requiresOfficialFigure: question.requiresOfficialFigure,
    corruptedOcr: question.corruptedOcr,
    figureImage: question.figureImage,
    visualData: question.visualData,
    originalPage: question.originalPage,
    groupId: question.groupId,
    groupTitle: question.groupTitle,
    passage: question.passage,
    sourceLabel: question.sourceLabel,
    lessonRoute: question.lessonRoute,
    sourceUrl: question.sourceUrl,
    subject: question.subject,
    topic: question.topic,
  };
  return Object.fromEntries(Object.entries(compact).filter(([, value]) => value !== undefined));
}

const questions = [
  ...common.questions,
  ...professional.questions.map((question) => ({
    ...question,
    exam: `professional-${question.paper}`,
    subjectName: professionalNames[question.paper],
    ...pageMap[question.id],
  })),
]
  .filter((question) => years.includes(question.year))
  .map(compactQuestion);

fs.mkdirSync(shardRoot, { recursive: true });

const catalog = {
  version: appVersion,
  total: questions.length,
  years: years.map((year) => {
    const shards = exams.map(([exam, label]) => {
      const shardQuestions = questions.filter(
        (question) => question.year === year && question.exam === exam,
      );
      const fileName = `${year}-${exam}.json`;
      fs.writeFileSync(
        path.join(shardRoot, fileName),
        `${JSON.stringify({ version: appVersion, year, exam, questions: shardQuestions })}\n`,
      );
      return {
        exam,
        label,
        count: shardQuestions.length,
        href: `/practice-data/shards/${fileName}`,
      };
    });
    return {
      year,
      count: shards.reduce((total, shard) => total + shard.count, 0),
      shards,
    };
  }),
};

fs.writeFileSync(path.join(outputRoot, 'index.json'), `${JSON.stringify(catalog)}\n`);

if (catalog.total !== 925) {
  throw new Error(`Expected 925 practice questions, generated ${catalog.total}`);
}

console.log(`Practice shards generated: ${catalog.total} questions in ${years.length * exams.length} files.`);
