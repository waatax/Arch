import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadTsModule} from './lib/load-ts-module.mjs';
const report=JSON.parse(fs.readFileSync('docs/question-content-audit.json','utf8'));
const {canonicalExamQuestions:questions}=await loadTsModule('apps/web/src/lib/pedagogy/canonicalExams.ts');
const {getHandoutLinks}=await loadTsModule('apps/web/src/lib/pedagogy/handoutLinks.ts');
const {getAllCourses}=await loadTsModule('apps/web/src/data/learnPath/index.ts');
const courses=getAllCourses();
const validAnchors=new Set(courses.flatMap(course=>course.units.map(unit=>`/learn/${course.semester}/${course.key}/#handout-${unit.id}`)));
assert.equal(report.total,questions.length);
assert.equal(new Set(report.questions.map(q=>q.id)).size,questions.length);
assert.equal(report.questions.filter(q=>q.wasPending).length,748);
assert.equal(report.unresolved,questions.filter(q=>!q.teaching).length);
for(const question of questions){
  const row=report.questions.find(row=>row.id===question.id);
  assert(row&&row.source&&row.chapter,question.id);
  assert.equal(row.answer,question.answer,question.id);
  assert.equal(row.reviewStatus==='authored-solution',Boolean(question.teaching),question.id);
  assert.deepEqual(row.options,question.options,question.id);
  const links=getHandoutLinks([question.lessonRoute]);
  assert(links.length,question.id+': no handout');
  for(const link of links)assert(validAnchors.has(link.href),question.id+': bad handout '+link.href);
}
for(const year of [111,112,113,114,115]){
 for(let n=1;n<=25;n++){
  const q=questions.find(q=>q.id===`${year}-math-c-${n}`);
  assert(q.teaching&&q.figureImage.startsWith(`/exams/source-pages/${year}-mc-`),q.id);
 }
 for(let n=1;n<=42;n++)assert(questions.find(q=>q.id===`${year}-english-${n}`)?.teaching,`${year} English ${n}`);
 for(let n=1;n<=20;n++){
  const q=questions.find(q=>q.id===`${year}-2-${n}`);
  assert(q.teaching&&q.figureImage.startsWith(`/exams/source-pages/${year}-06-2-`),q.id);
 }
}
assert.equal(questions.find(q=>q.id==='111-english-30').options.D,'look for');
assert(questions.find(q=>q.id==='113-english-8').excerpt.includes('<u>skillfully</u>'));
assert(questions.find(q=>q.id==='113-english-10').excerpt.includes('<u>against the law</u>'));
const bonus=questions.find(q=>q.id==='111-2-4');
assert.equal(bonus.answer,'送分');
assert(bonus.teaching.reviewNote.includes('不指定A～D為唯一正解'));
const incompleteStem=questions.find(q=>q.id==='115-2-17');
assert(incompleteStem.excerpt.includes('b1=1.222m')&&incompleteStem.excerpt.includes('f2=1.345m'));
const transfer=questions.find(q=>q.id==='111-math-c-2').teaching.transfer;
assert.equal(transfer.answer,'5。');
assert(3**4-1<=100&&3**5-1>100);
console.log(`${questions.length} question records and handout links consistent; ${748-report.unresolved}/748 newly authored, ${report.unresolved} still pending.`);
if(process.argv.includes('--require-complete'))assert.equal(report.unresolved,0,'Incomplete content must not be published as a completed 748-question review');
