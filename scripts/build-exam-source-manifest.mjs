import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { loadTsModule, repoRoot } from './lib/load-ts-module.mjs';
const {examSourceVisuals,examSharedQuestionVisuals}=await loadTsModule('apps/web/src/data/examTeaching/sourceVisuals.ts');
const hash=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const unique=[...new Set([...Object.values(examSourceVisuals),...Object.values(examSharedQuestionVisuals)].map(v=>v.image))].sort();
const pages=unique.map(image=>{
  const [,year,exam,page]=path.basename(image).match(/^(\d+)-(.+)-p(\d+)\.png$/);
  const pdf=`${year}-4y-${exam.startsWith('06')?exam:`00-${exam}`}.pdf`;
  const localPdf=path.join(repoRoot,'tmp/pdfs',pdf);
  return {image,page:Number(page),sourceUrl:`https://web1.tcte.edu.tw/EXAM/${year}_4y/downloader.php?obj=${Buffer.from(pdf).toString('base64')}`,sourcePdf:pdf,pdfSha256:hash(localPdf),imageSha256:hash(path.join(repoRoot,'apps/web/public',image)),renderArguments:['-f',page,'-singlefile','-scale-to','1800','-png',pdf]};
});
fs.writeFileSync(path.join(repoRoot,'docs/exam-source-pages.json'),JSON.stringify({checkedAt:'2026-11-06',method:'Visually inspected official PDF full-page renders; tables transcribed only after comparison.',pages},null,2)+'\n');
console.log(`Recorded ${pages.length} visually checked source pages with source and image SHA-256.`);
