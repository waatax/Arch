import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { loadTsModule, repoRoot } from './lib/load-ts-module.mjs';
const {canonicalExamQuestions:qs,rawExamQuestions:raw,getTopicTeachingCases} = await loadTsModule('apps/web/src/lib/pedagogy/canonicalExams.ts');
const {examTeachingCases:cases} = await loadTsModule('apps/web/src/data/examTeaching/index.ts');
const {allSubjects} = await loadTsModule('apps/web/src/data/subjects.ts');
const {isOfficialSingleChoiceCorrect:correct} = await loadTsModule('apps/web/src/lib/examAnswers.ts');
const {buildDetailedSolution} = await loadTsModule('apps/web/src/lib/pedagogy/solutionSteps.ts');
const routes = new Set(allSubjects.flatMap(s=>s.topics.map(t=>`/subjects/${s.slug}/${t.slug}`)));
assert.equal(qs.length,925); assert.equal(raw.length-qs.length,185); assert.equal(new Set(qs.map(q=>q.id)).size,qs.length);
assert.equal(new Set(cases.map(c=>c.questionId)).size,cases.length);
for(const q of qs) {assert(q.year>=111&&q.year<=115&&!q.quarantined&&q.evidenceLevel!=='E0',q.id);assert(routes.has(q.lessonRoute),`${q.id}: invalid route ${q.lessonRoute}`);if(q.figureImage)assert(fs.existsSync(path.join(repoRoot,'apps/web/public',q.figureImage)),`${q.id}: missing image`);}
let numeric=0;
for(const c of cases){const q=qs.find(q=>q.id===c.questionId);assert(q,`${c.questionId}: missing canonical source`);assert(q.teaching,`${c.questionId}: missing question feedback`);assert(c.steps.length>=4);assert(c.reasons.length===4&&c.reasons.every(r=>r.length>=12));assert(c.knowledge.length&&c.knowledge.every(([t,b])=>t&&b.length>=30));assert(c.transfer.prompt&&c.transfer.answer&&c.transfer.steps.length>=3);assert(c.routes.includes(q.lessonRoute),`${q.id}: primary chapter must include its guide`);for(const r of c.routes)assert(routes.has(r),`${q.id}: guide route ${r}`);for(const [expr,expected] of c.numericChecks??[]){const actual=Function(`"use strict";return (${expr})`)();assert(Math.abs(actual-expected)<=1e-8*Math.max(1,Math.abs(expected)),`${c.questionId}: ${expr}: ${actual} != ${expected}`);numeric++;}}
assert(correct('CD','C'));assert(correct('CD','D'));assert(!correct('CD','CD'));assert(!correct('CD','B'));assert(!correct('送分','A'));assert(correct('A','A'));assert(!correct('A',undefined));
const forceSolution=buildDetailedSolution({question:'求水平反力',answer:'3 kN',steps:['由水平平衡 ∑Fx = 0 求反力為 3 kN。']});
assert(forceSolution.some(s=>s.includes('合力是否為零')));
assert(!forceSolution.some(s=>s.includes('先統一量尺')));
for(const q of qs.filter(q=>q.teaching)){for(const match of q.teaching.steps.join(' ').matchAll(/選\s*([ABCD])/g))assert(q.answer.includes(match[1]),`${q.id}: solution contradicts source answer`);}
const passages=qs.filter(q=>q.passage);assert(passages.length>100);assert(qs.find(q=>q.id==='115-english-21').passage);
const shardDir=path.join(repoRoot,'apps/web/public/practice-data/shards');
const shardQuestions=fs.readdirSync(shardDir).filter(f=>f.endsWith('.json')).flatMap(f=>JSON.parse(fs.readFileSync(path.join(shardDir,f),'utf8')).questions);
assert.equal(shardQuestions.length,925);assert.equal(shardQuestions.filter(q=>q.teaching).length,cases.length);
for(const q of shardQuestions){const canonical=qs.find(c=>c.id===q.id);assert(canonical);assert.equal(q.lessonRoute,canonical.lessonRoute,`${q.id}: simulator chapter drift`);assert.equal(q.excerpt,canonical.excerpt,`${q.id}: simulator stem drift`);}
const report={scope:'111–115 official sources; semantic explanations cover only authored cases',canonical:qs.length,excluded:raw.length-qs.length,explained:cases.length,pending:qs.length-cases.length,routeCorrections:qs.filter(q=>q.previousRoute).length,numericChecks:numeric,chapters:[...routes].map(route=>({route,questions:qs.filter(q=>q.lessonRoute===route).length,types:getTopicTeachingCases(route).map(({guide:g})=>({id:g.questionId,type:g.kind}))})),requiresOriginal:qs.filter(q=>q.needsOriginal).map(q=>q.id)};
if(process.argv.includes('--write'))fs.writeFileSync(path.join(repoRoot,'docs/exam-teaching-audit.json'),JSON.stringify(report,null,2)+'\n');
if(process.argv.includes('--built')){const out=path.join(repoRoot,'apps/web/out');const audit=fs.readFileSync(path.join(out,'exam-evidence/index.html'),'utf8');assert(audit.includes('逐章題型與缺口'));for(const c of cases)for(const route of c.routes){const html=fs.readFileSync(path.join(out,route,'index.html'),'utf8');assert(html.includes(`bridge-${c.questionId}`),`${route}: missing rendered guide ${c.questionId}`);assert(html.includes(c.kind),`${route}: missing type`);}const friction=fs.readFileSync(path.join(out,'subjects/mechanics/friction/index.html'),'utf8');assert(!friction.includes('110 年統測'));assert(friction.includes('52.5'));}
console.log(`Exam teaching passed: ${qs.length} real sources, ${cases.length} worked + transfer cases, ${report.routeCorrections} route fixes, ${numeric} numeric checks, ${passages.length} passage-bearing questions. Pending ${report.pending}; original needed: ${report.requiresOriginal.join(', ')}.`);
