import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const goalsPath = path.join(root, 'apps/web/src/app/goals/page.tsx');
const homePath = path.join(root, 'apps/web/src/app/page.tsx');
const navPath = path.join(root, 'apps/web/src/components/Navbar.tsx');
const footerPath = path.join(root, 'apps/web/src/components/Footer.tsx');

const read = (file) => fs.readFileSync(file, 'utf8');
const goals = read(goalsPath);
const home = read(homePath);
const nav = read(navPath);
const footer = read(footerPath);

const checks = [
  ['goals page exists', fs.existsSync(goalsPath)],
  ['three professions', ['建築師', '結構工程技師', '土木工程技師'].every((text) => goals.includes(text))],
  ['architect six subjects', ['建築計畫與設計', '敷地計畫與都市設計', '營建法規與實務', '建築結構', '建築構造與施工', '建築環境控制'].every((text) => goals.includes(text))],
  ['structural PE six subjects', ['材料力學', '結構學', '鋼筋混凝土設計與預力混凝土設計', '鋼結構設計', '土壤力學與基礎設計', '結構動力分析與耐震設計'].every((text) => goals.includes(text))],
  ['civil PE six subjects', ['結構分析', '結構設計', '大地工程學', '工程測量', '施工法', '營建管理'].every((text) => goals.includes(text))],
  ['eligibility and credit routes', ['18 學分', '至少 5 科', '至少 7 科', '20 學分'].every((text) => goals.includes(text))],
  ['passing systems distinguished', ['科別及格制', '保留 3 年', '全程到考人數 16%', '缺考視為零分'].every((text) => goals.includes(text))],
  ['current exam dates', ['115 年考試現況', '8/4–8/13', '11/14–11/16', '11/14–11/15'].every((text) => goals.includes(text))],
  ['certificate and practice separated', ['考試及格證書', '建築師證書', '技師證書', '開業證書', '執業執照'].every((text) => goals.includes(text))],
  ['practice experience', (goals.match(/二年以上/g) ?? []).length >= 3],
  ['practice scope and civil limit', ['法定工作範圍', '36 公尺以下'].every((text) => goals.includes(text))],
  ['official authorities', ['考選部', '內政部國土管理署', '公共工程委員會'].every((text) => goals.includes(text))],
  ['official source links', (goals.match(/https:\/\//g) ?? []).length >= 7],
  ['legal update warning', goals.includes('以當年度應考須知與主管機關審查結果為準')],
  ['learning links', ['/subjects/mechanics', '/subjects/materials', '/subjects/surveying', '/subjects/drafting'].every((text) => goals.includes(text))],
  ['home entry', home.includes('href="/goals"') && home.includes('終極目標')],
  ['navigation entry', nav.includes("href: '/goals'") && nav.includes("label: '終極目標'")],
  ['footer entry', footer.includes('href="/goals"')],
  ['version 7.2', goals.includes('版本 V7.2') && nav.includes('V7.2') && footer.includes('V7.2')],
  ['light and dark text pairing', goals.includes('text-slate-950 dark:text-white') && goals.includes('text-slate-600 dark:text-slate-300')],
];

let failures = 0;
for (const [name, passed] of checks) {
  console.log(`${passed ? 'PASS' : 'FAIL'}  ${name}`);
  if (!passed) failures += 1;
}

console.log(`\nV7.2 goals: ${checks.length - failures}/${checks.length} checks passed.`);
if (failures > 0) process.exit(1);
