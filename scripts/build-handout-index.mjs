import fs from 'node:fs';
import {loadTsModule,repoRoot} from './lib/load-ts-module.mjs';
import path from 'node:path';
const {getAllCourses}=await loadTsModule('apps/web/src/data/learnPath/index.ts');
const {getUnitLessonRoutes}=await loadTsModule('apps/web/src/lib/pedagogy/handoutRoutes.ts');
const index={};
for(const course of getAllCourses()) {
  for(const unit of course.units) {
    for(const route of getUnitLessonRoutes(unit)) {
      (index[route]??=[]).push({
        href:`/learn/${course.semester}/${course.key}/#handout-${unit.id}`,
        title:course.title+' · '+unit.title,
      });
    }
  }
}
fs.writeFileSync(path.join(repoRoot,'apps/web/src/data/handoutCourseLinks.json'),JSON.stringify(index,null,2)+'\n');
console.log(Object.keys(index).length+' chapter-to-handout routes');
