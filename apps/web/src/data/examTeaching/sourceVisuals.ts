import type { TableData } from '../types';

export interface ExamSourceVisual { image: string; page: number; caption: string; table?: TableData }
const source = (year: number, exam: string, page: number, table?: TableData): ExamSourceVisual => ({
  image: `/exams/source-pages/${year}-${exam}-p${page}.png`, page, table,
  caption: `${year} 年官方題本第 ${page} 頁原始題組；保留原圖、圖例及註腳。點圖可放大。`,
});

/** Transcribed against the rendered official PDF. Never reuse illustrative data as exam evidence. */
export const examSourceVisuals: Record<string, ExamSourceVisual> = {
  '111-english-g31-32': source(111,'e',5),
  '112-english-g31-32': source(112,'e',6),
  '112-english-g33-35': source(112,'e',7),
  '112-english-g36-37': source(112,'e',8),
  '113-english-g29-30': source(113,'e',6,{
    title:'Timetable · 113 年官方原表',
    headers:['Train No.','Operation Day','Taichung','Miaoli','Hsinchu','Taoyuan','Banqiao','Taipei','Nangang'],
    rows:[
      ['1510','Mon ~ Fri','07:12','07:31','07:45','07:58','08:10','08:21','08:30'],
      ['802','Daily','07:25','07:45','07:58','08:10','08:22','08:32','08:40'],
      ['1202','Mon ~ Fri','07:21','—','—','—','—','08:07','08:15'],
      ['1602','Mon ~ Fri','07:40','—','08:05','08:18','08:31','08:42','08:50'],
      ['1302','Mon ~ Fri','07:53','—','—','08:27','—','08:47','08:55'],
      ['204','Daily','07:48','—','—','—','08:27','08:37','08:45'],
      ['606','Sat','08:00','—','08:25','08:38','08:51','09:02','09:10'],
    ],
  }),
  '113-english-g31-32': source(113,'e',7,{
    title:'University Student Sports Clubs · 113 年官方原表',headers:['Club','How to play','Practice time'],
    rows:[
      ['Badminton','Two or four people hit a shuttlecock over a high net.','Evening on Fridays'],
      ['Basketball','Two teams score points by throwing a large ball through an open net.','Evening on Tuesdays and Saturdays'],
      ['Cycling','An individual rides a bicycle.','Morning on Thursdays'],
      ['Rugby','Two teams score points by carrying an oval ball across a particular line.','Evening on Saturdays'],
      ['Swimming','An individual moves through water by moving the body.','Evening on Mondays'],
      ['Weightlifting','An individual lifts heavy objects as a sport.','Evening on Tuesdays and Fridays'],
    ],
  }),
  '113-english-g33-35': source(113,'e',8,{
    title:'Hotel comparison · 113 年官方原表',headers:['','Cruise Hotel','Universe Hotel'],
    rows:[
      ['Facilities','Fitness center\nIndoor car parking\nRestaurants','Business center\nOutdoor pool\nGift shop'],
      ['Services','Free airport shuttle\nLaundry service\nFree Wi-Fi','24-hour room service\nFree Wi-Fi\nCar rental service'],
      ['Distance from tourist attractions','Sunset Beach (1 km)\nTheme Park (6 km)\nArt Museum (8 km)','Art Museum (2 km)\nTheme Park (16 km)\nSunset Beach (20 km)'],
      ['Room rates','Single: NT$2,700\nDouble: NT$3,600\nTriple: NT$5,200','Single: NT$1,800\nDouble: NT$2,400\nTriple: NT$3,500'],
    ],
  }),
  '114-english-g31-32': source(114,'e',7,{
    title:'Horizon Mobile Data Plans · *Special discounts for students only',headers:['Plan','Fee / Month','Data / Month'],
    rows:[['A*','NT$399','10 GB'],['B','NT$599','20 GB'],['C*','NT$699','unlimited'],['D','NT$999','unlimited']],
  }),
  '114-english-g33-35': source(114,'e',8,{
    title:'Typhoons · 114 年官方原表',headers:['Year','Typhoon Name','Warning Period (Dates)','Intensity near Taiwan'],
    rows:[
      ['2023','KOINU','2023-10-02 ~ 2023-10-06','Moderate Intensity'],['2023','HAIKUI','2023-09-01 ~ 2023-09-05','Moderate Intensity'],
      ['2023','SAOLA','2023-08-28 ~ 2023-08-31','Intense Intensity'],['2023','KHANUN','2023-08-01 ~ 2023-08-04','Moderate Intensity'],
      ['2023','DOKSURI','2023-07-24 ~ 2023-07-28','Moderate Intensity'],['2023','MAWAR','2023-05-29 ~ 2023-05-31','Moderate Intensity'],
      ['2022','NESAT','2022-10-15 ~ 2022-10-16','Moderate Intensity'],['2022','MUIFA','2022-09-11 ~ 2022-09-13','Moderate Intensity'],
      ['2022','HINNAMNOR','2022-09-02 ~ 2022-09-04','Intense Intensity'],['2021','KOMPASU','2021-10-10 ~ 2021-10-12','Severe tropical storm'],
      ['2021','CHANTHU','2021-09-10 ~ 2021-09-13','Intense Intensity'],['2021','LUPIT','2021-08-04 ~ 2021-08-05','Severe tropical storm'],
      ['2021','IN-FA','2021-07-21 ~ 2021-07-24','Moderate Intensity'],['2021','CHOI-WAN','2021-06-03 ~ 2021-06-04','Severe tropical storm'],
    ],
  }),
  '115-chinese-g35-38': source(115,'c',11,{
    title:'表（一）銷售量（單位：冊）· 115 年官方原表',headers:['作品（發行年）','累積至 2023 年','破億所需時間'],
    rows:[['鬼滅之刃（2016）','約 1.5 億','4 年 7 個月'],['進擊的巨人（2009）','約 1.4 億','10 年 3 個月'],['火影忍者（1999）','約 2.5 億','10 年 6 個月'],['航海王（1997）','約 5.0 億','7 年 5 個月'],['名偵探柯南（1994）','約 2.7 億','11 年 4 個月']],
  }),
  '115-english-g31-32': source(115,'e',7),
  '115-english-g33-35': source(115,'e',8,{
    title:'Revenue per store · 題本所列資料（Million USD）',headers:['US restaurant chain','Revenue per store'],
    rows:[['Nobu Restaurant','10.1'],['The Cheesecake Factory','12.4'],['Smith and Wollensky','13.4'],["Del Frisco’s Double Eagle Steak House",'13.8'],["Mastro’s Restaurants",'14.5'],['Din Tai Fung','27.4']],
  }),
};
export const examSharedQuestionVisuals: Record<string,ExamSourceVisual> = Object.fromEntries(
  [
    ...[1,2,3,4].map(n=>[`112-2-${n}`,source(112,'06-2',2)]),
    ...[7,8].map(n=>[`113-1-${n}`,source(113,'06-1',3)]),
    ...[18,19,20].map(n=>[`113-1-${n}`,source(113,'06-1',6)]),
    ...[31,32].map(n=>[`111-2-${n}`,source(111,'06-2',9)]),
  ],
);
