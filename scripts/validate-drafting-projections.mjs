import assert from 'node:assert/strict';
import fs from 'node:fs';
import {loadTsModule,repoRoot} from './lib/load-ts-module.mjs';
import path from 'node:path';
const model=JSON.parse(fs.readFileSync(path.join(repoRoot,'scripts/fixtures/drafting-projection-models.json'),'utf8'));
const sum=matrix=>matrix.flat().reduce((a,b)=>a+b,0);
const front=matrix=>[0,1,2].map(x=>Math.max(...matrix.map(row=>row[x])));
const rows=matrix=>matrix.map(row=>Math.max(...row));
const matches=matrix=>JSON.stringify(front(matrix))===JSON.stringify(model.frontMaximum)&&JSON.stringify(rows(matrix))===JSON.stringify(model.rowMaximumBackToFront);
assert(matches(model.attainableMinimum));
assert.equal(sum(model.attainableMinimum),model.minimumCubes);
assert.deepEqual(model.attainableMinimum.map(row=>row.map(h=>Number(h>0))),model.footprint);
// Exhaust every supported column height (1..3) for the eight occupied cells.
// This independently proves the minimum, rather than merely checking 27-12.
const cells=model.footprint.flatMap((row,y)=>row.flatMap((v,x)=>v?[[y,x]]:[]));
let minimum=Infinity,valid=0;
for(let mask=0;mask<3**cells.length;mask++){
 let value=mask;const heights=Array.from({length:3},()=>[0,0,0]);
 for(const[y,x]of cells){heights[y][x]=value%3+1;value=Math.floor(value/3);}
 if(matches(heights)){valid++;minimum=Math.min(minimum,sum(heights));}
}
assert(valid>0);assert.equal(minimum,model.minimumCubes);
assert.equal(model.initialCubes-minimum,model.droppedCubes);
for(const fixture of model.layerModels){
 assert.equal(sum(fixture.heights),fixture.volume,fixture.id);
 assert.deepEqual([1,2,3].map(z=>fixture.heights.flat().filter(h=>h>=z).length),fixture.layers,fixture.id);
}
const{canonicalExamQuestions:qs}=await loadTsModule('apps/web/src/lib/pedagogy/canonicalExams.ts');
for(const q of qs.filter(q=>['mechanics','materials','surveying','drafting'].includes(q.subject)))assert(q.figureImage?.startsWith('/exams/source-pages/'),q.id+' missing checked official page');
const rope=qs.find(q=>q.id==='114-1-11').teaching;
assert(rope.steps.some(s=>s.includes('30/2=15')));
assert(rope.numericChecks.some(([e,n])=>e==='2*(30/2)*20*4/5'&&n===480));
assert(qs.find(q=>q.id==='114-1-14').teaching.reasons[3].includes('箭頭反向'));
assert.equal(qs.find(q=>q.id==='112-2-27').answer,'CD');
assert.equal(qs.find(q=>q.id==='114-2-40').answer,'送分');
console.log(`Drafting projections passed: ${3**cells.length} supported configurations searched, minimum ${minimum}; ${valid} matching models; two layer counts and corrected mechanics verified.`);
