import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { loadTsModule, repoRoot } from './lib/load-ts-module.mjs';
const {canonicalExamQuestions:qs,rawExamQuestions:raw,getTopicTeachingCases} = await loadTsModule('apps/web/src/lib/pedagogy/canonicalExams.ts');
const {examTeachingCases:cases} = await loadTsModule('apps/web/src/data/examTeaching/index.ts');
const {allSubjects} = await loadTsModule('apps/web/src/data/subjects.ts');
const {isOfficialSingleChoiceCorrect:correct} = await loadTsModule('apps/web/src/lib/examAnswers.ts');
const {buildDetailedSolution} = await loadTsModule('apps/web/src/lib/pedagogy/solutionSteps.ts');
const {examSourceVisuals,examSharedQuestionVisuals} = await loadTsModule('apps/web/src/data/examTeaching/sourceVisuals.ts');
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
for(const q of qs.filter(q=>q.teaching)){for(const match of q.teaching.steps.join(' ').matchAll(/選\s*([ABCD])(?![A-Za-z])/g))assert(q.answer.includes(match[1]),`${q.id}: solution contradicts source answer`);}
const passages=qs.filter(q=>q.passage);assert(passages.length>100);assert(qs.find(q=>q.id==='115-english-21').passage);
// Independently recompute answers from the visually checked original tables.
const originalVisualQuestions=raw.filter(q=>q.visualData);
assert.equal(originalVisualQuestions.length,30);
for(const old of originalVisualQuestions){const q=qs.find(q=>q.id===old.id);assert(examSourceVisuals[old.groupId],`${old.id}: unreviewed reconstructed visual`);assert(q.figureImage?.startsWith('/exams/source-pages/'));assert(q.figureCaption);assert(!q.visualData?.chart,'Unverified chart approximation must not replace the original');}
const train=examSourceVisuals['113-english-g29-30'].table;
const minutes=t=>{const[h,m]=t.split(':').map(Number);return h*60+m;};
const row=no=>train.rows.find(r=>r[0]===no);
assert.equal(row('606')[1],'Sat');assert.equal(row('606')[5],'08:38');
assert.equal(minutes(row('1510')[7])-minutes(row('1510')[2]),69);
assert.equal(minutes(row('1202')[7])-minutes(row('1202')[2]),46);
assert.deepEqual(train.rows.filter(r=>['Daily','Sat'].includes(r[1])&&r[4]!=='—'&&minutes(r[7])<=minutes('08:50')).map(r=>r[0]),['802']);
const plans=examSourceVisuals['114-english-g31-32'].table;
assert.deepEqual(plans.rows.find(r=>r[1]==='NT$699'),['C*','NT$699','unlimited']);
const typhoons=examSourceVisuals['114-english-g33-35'].table.rows;
assert.deepEqual([2021,2022,2023].map(y=>typhoons.filter(r=>r[0]===String(y)).length),[5,3,6]);
assert.equal(typhoons.filter(r=>r[0]==='2023'&&r[2].startsWith('2023-08')).length,2);
const clubs=examSourceVisuals['113-english-g31-32'].table.rows;
assert.deepEqual(clubs.filter(r=>r[1].startsWith('Two teams')).map(r=>r[0]),['Basketball','Rugby']);
const revenues=examSourceVisuals['115-english-g33-35'].table.rows;
assert.equal(Number(revenues.find(r=>r[0]==='Din Tai Fung')[1]),27.4);
for(const [id,visual] of Object.entries(examSharedQuestionVisuals))assert.equal(qs.find(q=>q.id===id).figureImage,visual.image);
const truss=JSON.parse(fs.readFileSync(path.join(repoRoot,'scripts/fixtures/113-truss-equilibrium.json'),'utf8'));
const residual=Object.fromEntries(Object.keys(truss.nodes).map(n=>[n,[...(truss.external[n]??[0,0])]]));
for(const[a,b,force]of truss.members){const dx=truss.nodes[b][0]-truss.nodes[a][0],dy=truss.nodes[b][1]-truss.nodes[a][1],length=Math.hypot(dx,dy);for(const[node,sign]of [[a,1],[b,-1]]){residual[node][0]+=sign*force*dx/length;residual[node][1]+=sign*force*dy/length;}}
for(const[node,[fx,fy]]of Object.entries(residual))assert(Math.abs(fx)<1e-9&&Math.abs(fy)<1e-9,`${node}: unbalanced truss node`);
assert.equal(truss.members.filter(([, ,n])=>Math.abs(n)>=70).length,5);
assert.equal(truss.members.find(([a,b])=>a==='c'&&b==='g')[2],31.25);
const sourceManifest=JSON.parse(fs.readFileSync(path.join(repoRoot,'docs/exam-source-pages.json'),'utf8'));
const sourceImages=new Set([...Object.values(examSourceVisuals),...Object.values(examSharedQuestionVisuals)].map(v=>v.image));
assert.equal(sourceManifest.pages.length,sourceImages.size);
for(const p of sourceManifest.pages){assert(sourceImages.has(p.image));const bytes=fs.readFileSync(path.join(repoRoot,'apps/web/public',p.image));assert.equal(createHash('sha256').update(bytes).digest('hex'),p.imageSha256,`${p.image}: source image changed without review`);}
const shardDir=path.join(repoRoot,'apps/web/public/practice-data/shards');
const shardQuestions=fs.readdirSync(shardDir).filter(f=>f.endsWith('.json')).flatMap(f=>JSON.parse(fs.readFileSync(path.join(shardDir,f),'utf8')).questions);
assert.equal(shardQuestions.length,925);assert.equal(shardQuestions.filter(q=>q.teaching).length,cases.length);
for(const q of shardQuestions){const canonical=qs.find(c=>c.id===q.id);assert(canonical);assert.equal(q.lessonRoute,canonical.lessonRoute,`${q.id}: simulator chapter drift`);assert.equal(q.excerpt,canonical.excerpt,`${q.id}: simulator stem drift`);assert.deepEqual(q.visualData,canonical.visualData,`${q.id}: simulator visual drift`);assert.equal(q.figureImage,canonical.figureImage,`${q.id}: simulator source image drift`);assert.equal(q.figureCaption,canonical.figureCaption);}
const report={scope:'111–115 official sources; semantic explanations cover only authored cases',canonical:qs.length,excluded:raw.length-qs.length,explained:cases.length,pending:qs.length-cases.length,routeCorrections:qs.filter(q=>q.previousRoute).length,numericChecks:numeric,sourcePages:sourceManifest.pages.length,recoveredVisualQuestions:originalVisualQuestions.length,sharedContextQuestions:Object.keys(examSharedQuestionVisuals).length,readableSourceTables:Object.values(examSourceVisuals).filter(v=>v.table).length,chapters:[...routes].map(route=>({route,questions:qs.filter(q=>q.lessonRoute===route).length,types:getTopicTeachingCases(route).map(({guide:g})=>({id:g.questionId,type:g.kind}))})),requiresOriginal:qs.filter(q=>q.needsOriginal).map(q=>q.id)};
if(process.argv.includes('--write')){
  fs.writeFileSync(path.join(repoRoot,'docs/exam-teaching-audit.json'),JSON.stringify(report,null,2)+'\n');
  const docPath=path.join(repoRoot,'docs/course-coverage.md');
  const doc=fs.readFileSync(docPath,'utf8');
  const table=`<!-- EXAM-AUDIT:START -->\n| 層次 | 範圍 | 此次結果 |\n| --- | --- | --- |\n| 來源篩選 | 111–115 年五科 | ${report.canonical} 題，排除 ${report.excluded} 筆合成紀錄 |\n| 題目歸章 | 有效路由 | ${report.routeCorrections} 筆歸章修正；不等同逐題語意審定 |\n| 已編寫精講 | 實題與原創遷移題 | 各 ${report.explained} 道，含必要知識、推導與選項辨析 |\n| 待補解析 | 未編寫逐題推導 | ${report.pending} 題${report.pending?'，僅提供讀題提示':'，此批全數已補精講'} |\n| 原始圖表 | 已目視校對原頁 | ${report.sourcePages} 頁、${report.recoveredVisualQuestions} 題圖表與 ${report.sharedContextQuestions} 道共用條件 |\n| 出版社版本逐頁對照 | 所有出版社 | 尚未完成審定，不宣稱全版本完備 |\n<!-- EXAM-AUDIT:END -->`;
  assert(doc.includes('<!-- EXAM-AUDIT:START -->'));
  fs.writeFileSync(docPath,doc.replace(/<!-- EXAM-AUDIT:START -->[\s\S]*?<!-- EXAM-AUDIT:END -->/,table));
}
if(process.argv.includes('--built')){const out=path.join(repoRoot,'apps/web/out');const audit=fs.readFileSync(path.join(out,'exam-evidence/index.html'),'utf8');assert(audit.includes('逐章題型與缺口'));for(const c of cases)for(const route of c.routes){const html=fs.readFileSync(path.join(out,route,'index.html'),'utf8');assert(html.includes(`bridge-${c.questionId}`),`${route}: missing rendered guide ${c.questionId}`);assert(html.includes(c.kind),`${route}: missing type`);}const friction=fs.readFileSync(path.join(out,'subjects/mechanics/friction/index.html'),'utf8');assert(!friction.includes('110 年統測'));assert(friction.includes('52.5'));}
if(process.argv.includes('--built')){
  const out=path.join(repoRoot,'apps/web/out');
  for(const p of sourceManifest.pages){assert.equal(createHash('sha256').update(fs.readFileSync(path.join(out,p.image))).digest('hex'),p.imageSha256);}
  const exported=JSON.parse(fs.readFileSync(path.join(out,'practice-data/shards/113-english.json'),'utf8'));
  assert.deepEqual(exported.questions.find(q=>q.id==='113-english-29').visualData.table,train);
  const sw=path.join(out,'sw.js');if(fs.existsSync(sw))assert(!fs.readFileSync(sw,'utf8').includes('113-e-p6.png'),'Source pages must stay out of initial precache');
}
console.log(`Exam teaching passed: ${qs.length} sources, ${cases.length} worked + transfer cases, ${report.routeCorrections} route fixes, ${numeric} numeric checks; ${report.sourcePages} original pages, ${report.readableSourceTables} checked tables, all truss nodes balanced. Pending ${report.pending}.`);
