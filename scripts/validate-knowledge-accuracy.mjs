import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
import {loadTsModule} from './lib/load-ts-module.mjs';

const require=createRequire(new URL('../apps/web/package.json',import.meta.url));
const katex=require('katex');
const {allSubjects}=await loadTsModule('apps/web/src/data/subjects.ts');
const {chemistryVisuals}=await loadTsModule('apps/web/src/data/conceptVisuals/chemistry.ts');
const topic=(s,t)=>allSubjects.find(subject=>subject.slug===s).topics.find(topic=>topic.slug===t);
const materials=topic('materials','basic-properties');
const stats=materials.concepts.find(c=>c.heading.startsWith('測定值'));
const measurements=[28,29.5,30.5];
const mean=measurements.reduce((a,b)=>a+b,0)/measurements.length;
const variance=measurements.reduce((a,x)=>a+(x-mean)**2,0)/(measurements.length-1);
const sd=Math.sqrt(variance),cv=sd/mean*100;
assert(Math.abs(variance-19/12)<1e-12);
assert(stats.table.rows[1][2].includes(sd.toFixed(2)), 'displayed standard deviation must match unrounded data');
assert(stats.table.rows[2][2].includes(cv.toFixed(2)), 'displayed coefficient of variation must match data');
assert(!stats.table.rows.flat().join(' ').includes('1.7²'));
assert(stats.body.includes('σ/√n') && stats.body.includes('不能單獨證明'));

const chemistry=topic('chemistry','matter-composition');
assert(chemistry.practices[3].question.includes('0.005 mol'), 'preserve the separate stoichiometry exercise');
assert(chemistry.practices[4].question.includes('沒有持續逸散源'));
assert(chemistry.practices[5].question.includes('TVOC及其他要求尚未檢驗'));
assert(Math.abs(8*Math.exp(-1.55*2)-0.3603936191484624)<1e-10);
assert(Math.abs(-Math.log(0.6/8)/1.55-1.671140106739243)<1e-10);
assert.equal(0.05*1*1/1,0.05);
const decay=chemistryVisuals['matter-composition'].find(v=>v.title.includes('不同移除率'));
let checkedCells=0;
for(const row of decay.table.rows){
  const day=Number(row[0].match(/\d+/)[0]);
  for(const [index,rate] of [0.055,0.16,0.28].entries()){
    assert.equal(row[index+1],(2.4*Math.exp(-rate*day)).toFixed(3));checkedCells++;
  }
}
assert(decay.caption.includes('不能取代') && decay.caption.includes('不代表'));
const failure=topic('mechanics','structural-failures');
assert(failure.practices[2].question.includes('強柱弱梁'), 'preserve the separate seismic design exercise');
assert(failure.practices[3].answer.includes('自激振動'));
assert(failure.fatalTraps[0].correctThinking.includes('與EI成正比'));
assert(failure.concepts[0].formula.includes('π²E/(KL/r)²'));
assert(!failure.concepts[0].formula.includes('≥ 1.5'));

let formulaFields=0,latexBlocks=0;
for(const subject of allSubjects)for(const t of subject.topics)for(const c of t.concepts){
  if(!c.formula)continue;formulaFields++;
  for(const m of c.formula.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\$)\$([^$]+)\$(?!\$)|\\\[([\s\S]*?)\\\]|\\\(([\s\S]*?)\\\)/g)){
    katex.renderToString(m[1]??m[2]??m[3]??m[4],{throwOnError:true,strict:'ignore'});latexBlocks++;
  }
}

// Check actual theme tokens used by the shared reading surfaces, not screenshots.
const css=fs.readFileSync('apps/web/src/app/globals.css','utf8');
const luminance=hex=>{
 const rgb=hex.match(/[\da-f]{2}/gi).map(h=>parseInt(h,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);
 return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;
};
const contrast=(a,b)=>{const x=luminance(a),y=luminance(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
const themes={};
for(const selector of [':root',':root.dark',':root.theme-sepia',':root.dark.theme-oled']){
 const block=css.slice(css.indexOf(selector+' {')).split('}')[0];
 const token=name=>block.match(new RegExp('--color-'+name+':\\s*(#[\\da-fA-F]{6})'))[1];
 const paper=token('paper-50');
 themes[selector]=Object.fromEntries(['ink-900','ink-650','teal-700'].map(name=>[name,Number(contrast(token(name),paper).toFixed(2))]));
 for(const [name,ratio] of Object.entries(themes[selector]))assert(ratio>=4.5,`${selector} ${name}: ${ratio}`);
}
const result={subjects:allSubjects.length,formulaFields,delimitedLatexBlocksValidated:latexBlocks,decayTableCellsIndependentlyRecomputed:checkedCells,sample:{mean,sd,cv},readingThemeContrast:themes,scope:'Targeted scientific regressions, delimited formula syntax and theme token contrast; not a complete semantic or browser visual audit.'};
if(process.argv.includes('--write'))fs.writeFileSync('docs/knowledge-accuracy-10.1.0.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
