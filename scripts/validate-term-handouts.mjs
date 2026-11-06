import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {loadTsModule,repoRoot} from './lib/load-ts-module.mjs';
const root=path.join(repoRoot,'apps/web/out'),cache=new Map();
function html(route){if(!cache.has(route))cache.set(route,fs.readFileSync(path.join(root,route,'index.html'),'utf8').split('<script>self.__next_f')[0]);return cache.get(route);}
const routes=[...new Set([...html('review').matchAll(/href="\/Arch\/(learn\/[^"#]+?)\/?#handout"/g)].map(m=>m[1]))];
assert.equal(routes.length,61,'semester course handouts');
let units=0,examples=0,links=0;const terms=new Set(),ids=new Set();
for(const route of routes){
 const page=html(route);terms.add(route.split('/')[1]);assert(page.includes('id="handout"'),route);
 const body=page.split('id="handout"')[1];units+=(body.match(/建議單元/g)||[]).length;examples+=(body.match(/核對答案與理由/g)||[]).length;
 for(const match of body.matchAll(/href="\/Arch\/(subjects\/[^"#]+?)\/?#(bridge-([^"]+))"/g)){
  assert(html(match[1]).includes('id="'+match[2]+'"'),route+' missing lesson anchor '+match[2]);ids.add(match[3]);links++;
 }
}
assert.equal(terms.size,6);assert.equal(units,265);assert.equal(examples,530);
const{canonicalExamQuestions:qs}=await loadTsModule('apps/web/src/lib/pedagogy/canonicalExams.ts');
for(const q of qs)assert(ids.has(q.id),q.id+' absent from rendered semester handouts');
assert.equal(ids.size,925);
console.log(`Semester handouts passed: ${routes.length} courses, ${terms.size} terms, ${units} units, ${examples} self-tests; ${links} exact lesson links covering all ${ids.size} questions.`);
