import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root='apps/web/out',pages=[];
for(const section of ['learn','subjects'])for(const group of fs.readdirSync(path.join(root,section),{withFileTypes:true}).filter(d=>d.isDirectory())){
  const dir=path.join(root,section,group.name);
  for(const item of fs.readdirSync(dir,{withFileTypes:true}).filter(d=>d.isDirectory())){
    const file=path.join(dir,item.name,'index.html');if(fs.existsSync(file))pages.push(file);
  }
}
let referenceCount=0,captionCount=0;
for(const file of pages){
  // Check initial export HTML, excluding serialized RSC data.
  const html=fs.readFileSync(file,'utf8').split('<script>self.__next_f')[0],ids=new Set();
  for(const match of html.matchAll(/\sid="([^"]+)"/g)){
    assert(!ids.has(match[1]),`${file}: duplicate id ${match[1]}`);ids.add(match[1]);
  }
  for(const match of html.matchAll(/\s(?:aria-labelledby|aria-describedby|aria-controls|for)="([^"]+)"/g))for(const id of match[1].split(/\s+/)){
    assert(ids.has(id),`${file}: unresolved label/control reference ${id}`);referenceCount++;
  }
  if(file.includes(path.sep+'learn'+path.sep))assert(ids.has('handout-title'),`${file}: missing handout title`);
  captionCount+=(html.match(/<caption>/g)||[]).length;
}
assert.equal(pages.length,181);
console.log(`Reading output passed: ${pages.length} pages, unique IDs, ${referenceCount} valid label/control references, ${captionCount} semantic table captions.`);
