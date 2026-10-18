import type { TopicVisualMap } from './types';
import { arrow, barChart, box, circle, dim, flow, hatchRect, line, lineChart, polygon, rect, svg, text, type Pt } from './kit';

/** 由下而上的階梯（參與階梯、控制階層用） */
function ladder(x: number, y: number, w: number, step: number, items: [string, 'blue' | 'green' | 'amber' | 'red' | 'violet' | 'muted'][]): string {
  return items.map(([label, tone], i) => box(x + i * 10, y - (i + 1) * step, w - i * 20, step - 6, label, { tone, size: 11.5 })).join('');
}

export const civicsVisuals: TopicVisualMap = {
  'citizenship-community': [
    {
      concept: '七、國家主權、多元身分認同',
      kind: 'diagram',
      title: '國家四要素與主權在日常生活中的體現',
      caption: '人民、領土、政府、主權缺一不可；護照、貨幣、關稅、海關檢疫與國防，都是主權在日常生活中的具體表現。',
      svg: (() => {
        let s = '';
        s += circle(160, 115, 52, { tone: 'red', fill: 'red', soft: true, w: 2 });
        s += text(160, 112, '國家', { anchor: 'middle', weight: 'bold', size: 15 });
        s += text(160, 132, '四要素', { anchor: 'middle', size: 12 });
        const ring: [number, number, string][] = [[160, 30, '人民'], [270, 115, '領土'], [160, 200, '政府'], [50, 115, '主權']];
        ring.forEach(([x, y, n]) => { s += box(x - 40, y - 18, 80, 36, n, { tone: 'blue', size: 13 }); s += line(160, 115, x, y, { tone: 'muted', w: 1, dash: 'dash' }); });
        s += box(330, 30, 210, 170, ['主權與日常生活', '護照與出入境', '貨幣與關稅', '海關檢疫', '國防與外交承認'], { tone: 'violet', size: 12 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '每個人同時具有國民、族群、性別、宗教、職業等多重身分，國家應保障平等並尊重差異。',
        '我國公民投票年齡為 18 歲，選舉投票年齡仍為 20 歲。',
      ],
    },
    {
      concept: '八、選舉與政治參與',
      kind: 'diagram',
      title: '立法委員選舉：單一選區兩票制',
      caption: '第一票投區域立委（每選區選出一人），第二票投政黨；政黨得票率達 5% 才能分配不分區席次。',
      svg: (() => {
        let s = '';
        s += box(200, 12, 160, 40, '選民（兩張選票）', { tone: 'ink', size: 13 });
        s += arrow(240, 52, 140, 84, { tone: 'muted', w: 1.6 }) + arrow(320, 52, 420, 84, { tone: 'muted', w: 1.6 });
        s += box(40, 86, 200, 56, ['第一票：區域立委', '單一選區，最高票當選'], { tone: 'blue', size: 12 });
        s += box(320, 86, 200, 56, ['第二票：政黨票', '依得票率分配不分區席次'], { tone: 'green', size: 12 });
        s += box(320, 160, 200, 44, '門檻：政黨得票率 ≥ 5%', { tone: 'red', size: 12 });
        s += box(40, 160, 200, 44, ['選舉原則', '普通、平等、直接、無記名'], { tone: 'violet', size: 11.5 });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '選舉以外，公民投票、請願、陳情、遊說、公聽會與網路連署也是政治參與的管道。',
        '公共政策網路參與平臺的提議在 60 天內獲 5,000 人附議，主管機關須回應。',
      ],
    },
    {
      concept: '九、媒體、社群網路與公共意見',
      kind: 'diagram',
      title: '媒體識讀五問：轉傳前先查證',
      caption: '依序檢查來源、時間、多方報導、事實與意見的區分，以及事實查核平台的結論，可以大幅降低被假訊息誤導的機會。',
      svg: (() => {
        let s = '';
        s += flow(10, 40, [['① 來源', '誰發布？'], ['② 時間', '是否舊聞？'], ['③ 比對', '其他媒體？'], ['④ 證據', '事實或意見？'], ['⑤ 查核', '查核平台？']], { w: 100, h: 58, gap: 10, tones: ['blue', 'blue', 'green', 'amber', 'red'], size: 12 });
        s += box(60, 130, 440, 54, ['議題設定、框架、演算法同溫層會影響公共意見；', '媒體近用權讓民眾能投書、要求更正與答辯'], { tone: 'violet', size: 11.5 });
        return svg(560, 200, s);
      })(),
      takeaways: [
        '媒體對族群、性別、身心障礙者的刻板再現，會強化偏見與不平等。',
        '轉傳未經查證的訊息也可能散布不實資訊，甚至觸法。',
      ],
    },
    {
      concept: '二、社區營造、參與式設計與空間民主',
      kind: 'diagram',
      title: '公民參與的層次：從告知到共同決策',
      caption: '參考 Arnstein 公民參與階梯的概念：由下而上依序為告知、諮詢、協力、共同決策；社區營造追求的是讓居民真正分享決策權。',
      svg: (() => {
        let s = '';
        s += ladder(60, 210, 300, 46, [['告知：說明會發布資訊', 'muted'], ['諮詢：問卷、公聽會徵詢意見', 'blue'], ['協力：工作坊共同設計', 'green'], ['共同決策：參與式預算、居民主導', 'red']]);
        s += arrow(400, 200, 400, 30, { tone: 'red', w: 2 });
        s += text(410, 120, '居民決策權', { tone: 'red', weight: 'bold', size: 12 });
        s += text(410, 140, '逐步提高', { tone: 'red', size: 12 });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '由上而下的專家決策容易忽略居民需求；參與式設計讓居民的生活經驗轉化為空間設計。',
        '建築師在社區營造中扮演溝通促成者（facilitator）的角色。',
      ],
    },
  ],
  'law-life': [
    {
      concept: '一、國土規劃與建築法規四階法律體系',
      kind: 'diagram',
      title: '空間規劃與建築管理的四階法律體系',
      caption: '由上而下：《國土計畫法》→《都市計畫法》與《區域計畫法》→《建築法》→《建築技術規則》；下位法規不得牴觸上位法規。',
      svg: (() => {
        let s = '';
        s += polygon([[280, 16], [500, 206], [60, 206]], { tone: 'muted', fill: 'muted', soft: true, w: 1.4 });
        const tiers: [number, string, string][] = [[56, '國土計畫法', '國土功能分區'], [100, '都市計畫法・區域計畫法', '土地使用分區、建蔽率、容積率'], [144, '建築法', '建造、使用、拆除與安全'], [188, '建築技術規則', '防火避難、無障礙、構造、綠建築']];
        tiers.forEach(([y, n, d], i) => {
          s += text(280, y, n, { anchor: 'middle', weight: 'bold', size: 12.5, tone: (['red', 'violet', 'blue', 'green'] as const)[i] });
          s += text(280, y + 15, d, { anchor: 'middle', size: 10.5, tone: 'muted' });
          if (i < 3) s += line(60 + (i + 1) * 55, y + 24, 500 - (i + 1) * 55, y + 24, { tone: 'muted', w: 1, dash: 'dash' });
        });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '法律位階：憲法 ＞ 法律 ＞ 命令；下位規範牴觸上位規範者無效。',
        '建築技術規則是建築法授權訂定的技術規範，屬於命令層級。',
      ],
    },
    {
      concept: '二、建蔽率、容積率與免計容積精確計算原理',
      kind: 'diagram',
      title: '建蔽率與容積率計算例：基地 500 m²、建蔽率 60%、容積率 240%',
      caption: '建築面積上限 = 500 × 60% = 300 m²；總樓地板面積上限 = 500 × 240% = 1200 m²。若每層 300 m²，約可蓋 4 層（未計免計容積與獎勵）。',
      svg: (() => {
        let s = '';
        s += rect(30, 150, 250, 60, { tone: 'green', fill: 'green', soft: true, w: 1.6 });
        s += rect(60, 158, 150, 44, { tone: 'blue', fill: 'blue', soft: true, w: 1.8 });
        s += hatchRect(60, 158, 150, 44, { spacing: 8, tone: 'blue' });
        s += text(155, 228, '平面：基地 500 m²', { anchor: 'middle', size: 12, weight: 'bold' });
        s += text(135, 140, '建築面積 300 m²（60%）', { anchor: 'middle', size: 11.5, tone: 'blue', weight: 'bold' });
        for (let k = 0; k < 4; k++) s += rect(340, 170 - k * 36, 150, 32, { tone: 'violet', fill: 'violet', soft: true, w: 1.4 }) + text(415, 191 - k * 36, `${k + 1}F　300 m²`, { anchor: 'middle', size: 11.5 });
        s += text(415, 28, '總樓地板 1200 m²（240%）', { anchor: 'middle', size: 12, weight: 'bold', tone: 'violet' });
        s += line(320, 206, 510, 206, { w: 1.6, tone: 'muted' });
        s += text(280, 64, '建蔽率 = 建築面積 / 基地面積', { anchor: 'middle', size: 12 });
        s += text(280, 84, '容積率 = 總樓地板面積 / 基地面積', { anchor: 'middle', size: 12 });
        return svg(560, 236, s);
      })(),
      takeaways: [
        '建蔽率管「蓋多滿」（地面留多少空地），容積率管「蓋多大」（總開發強度）。',
        '免計容積項目（如部分陽台、梯廳、機電設備空間）與容積獎勵會使實際可建樓地板面積增加。',
      ],
    },
    {
      concept: '七、憲法基本權與行政救濟',
      kind: 'diagram',
      title: '行政救濟流程：行政處分 → 訴願 → 行政訴訟',
      caption: '收到違法或不當的行政處分，於送達次日起 30 日內向原處分機關的上級機關提起訴願；不服訴願決定，再向行政法院提起行政訴訟。',
      svg: (() => {
        let s = '';
        s += flow(14, 40, [['行政處分', '如建照駁回'], ['訴願', '30 日內，上級機關'], ['訴願決定', '撤銷或駁回'], ['行政訴訟', '行政法院']], { w: 118, h: 58, gap: 22, tones: ['muted', 'blue', 'amber', 'red'], size: 12 });
        s += box(60, 130, 440, 52, ['限制人民權利須符合法律保留與比例原則（憲法第 23 條）；', '公務員違法致損害，可另請求國家賠償'], { tone: 'violet', size: 11.5 });
        return svg(560, 196, s);
      })(),
      takeaways: [
        '訴願是向原處分機關的上級機關提出，不是直接向法院起訴。',
        '比例原則：手段適當、必要，且限制與所欲達成的公益相衡平。',
      ],
    },
    {
      concept: '九、犯罪成立要件、程序正義',
      kind: 'diagram',
      title: '犯罪成立三階段：構成要件 → 違法性 → 有責性',
      caption: '三個階段都成立才構成犯罪：行為符合法條描述、沒有阻卻違法事由（如正當防衛）、行為人具責任能力（未滿 14 歲不罰）。',
      svg: (() => {
        let s = '';
        s += flow(20, 40, [['構成要件該當', '行為符合法條'], ['違法性', '無正當防衛等事由'], ['有責性', '具責任能力']], { w: 150, h: 60, gap: 30, tones: ['blue', 'amber', 'red'], size: 12 });
        s += box(150, 130, 260, 40, '三者皆成立 → 犯罪成立，依法科刑', { tone: 'ink', size: 12 });
        s += text(280, 196, '程序正義：無罪推定、緘默權、辯護權、令狀原則、證據裁判', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 210, s);
      })(),
      takeaways: [
        '罪刑法定主義：行為時法律有明文規定才能處罰。',
        '少年事件以保護優先，12 歲以上未滿 18 歲由少年法院（庭）處理，審理不公開。',
      ],
    },
  ],
  'economy-sustainability': [
    {
      concept: '一、台灣綠建築評估體系 (EEWH)',
      kind: 'diagram',
      title: 'EEWH 四大範疇九大指標',
      caption: '生態（生物多樣性、綠化量、基地保水）、節能（日常節能）、減廢（CO₂ 減量、廢棄物減量）、健康（室內環境、水資源、污水垃圾改善）。',
      svg: (() => {
        let s = '';
        const groups: [string, string[], 'green' | 'amber' | 'blue' | 'violet'][] = [
          ['生態 E', ['生物多樣性', '綠化量', '基地保水'], 'green'], ['節能 E', ['日常節能'], 'amber'], ['減廢 W', ['CO₂ 減量', '廢棄物減量'], 'blue'], ['健康 H', ['室內環境', '水資源', '污水垃圾改善'], 'violet'],
        ];
        groups.forEach(([n, items, tone], i) => {
          const x = 14 + i * 136;
          s += box(x, 16, 126, 36, n, { tone, size: 13 });
          items.forEach((it, k) => { s += box(x + 6, 62 + k * 44, 114, 36, it, { tone, size: 11.5 }); });
        });
        s += text(280, 220, '等級：鑽石級、黃金級、銀級、銅級、合格級', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 234, s);
      })(),
      takeaways: [
        'EEWH 是由生態（Ecology）、節能（Energy saving）、減廢（Waste reduction）、健康（Health）四字首組成。',
        '公有建築與容積獎勵常要求取得綠建築標章，這是政府以「誘因」引導行為的例子。',
      ],
    },
    {
      concept: '七、資源有限：機會成本、誘因與政府政策',
      kind: 'chart',
      title: '生產可能曲線：資源有限下的取捨與機會成本（示意）',
      caption: '以一塊公有地的使用為例：多規劃一些停車位，就必須放棄一部分公園綠地；曲線上的點都是有效率的選擇，曲線外則做不到。',
      svg: lineChart({
        w: 520,
        h: 260,
        legend: 'none',
        x: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: '停車位（相對量）' },
        y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: '公園綠地（相對量）' },
        series: [{ name: '生產可能曲線', tone: 'blue', points: [0, 20, 40, 60, 80, 90, 100].map((x) => [x, Math.round(Math.sqrt(10000 - x * x) * 10) / 10] as Pt), smooth: true }],
        overlay: (f) => text(f.X(60) + 8, f.Y(80) - 8, 'A (60, 80)', { tone: 'red', size: 11, weight: 'bold' }) +
          text(f.X(80) + 6, f.Y(60) - 8, 'B (80, 60)', { tone: 'red', size: 11, weight: 'bold' }) +
          text(f.X(30), f.Y(30), '曲線內：資源未充分利用', { tone: 'muted', size: 11, anchor: 'middle' }) +
          line(f.X(60), f.Y(80), f.X(80), f.Y(60), { tone: 'red', w: 1.2, dash: 'dash' }),
      }),
      takeaways: [
        '由 A 移到 B，多 20 單位停車位的機會成本，是放棄的 20 單位綠地。',
        '政府以補助、獎勵（正向誘因）或課稅、罰款（負向誘因）影響人們的選擇。',
      ],
    },
    {
      concept: '八、專業分工、比較利益與國際貿易',
      kind: 'chart',
      title: '比較利益例題：甲、乙兩國生產 1 單位商品所需工時',
      caption: '甲國兩種商品都較有效率（絕對利益），但甲國生產鋼的機會成本為 0.5 單位布、乙國為 1 單位布，所以甲國專業生產鋼、乙國專業生產布，雙方交易都能獲利。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['生產 1 單位鋼', '生產 1 單位布'],
        series: [
          { name: '甲國（小時）', tone: 'blue', values: [2, 4] },
          { name: '乙國（小時）', tone: 'amber', values: [6, 6] },
        ],
        y: { max: 8, ticks: [0, 2, 4, 6, 8], label: '所需工時' },
        values: true,
      }),
      table: {
        headers: ['國家', '鋼的機會成本', '布的機會成本', '比較利益'],
        rows: [['甲國', '2 / 4 = 0.5 單位布', '4 / 2 = 2 單位鋼', '鋼'], ['乙國', '6 / 6 = 1 單位布', '6 / 6 = 1 單位鋼', '布']],
      },
      takeaways: [
        '即使一國每樣商品都較有效率，仍可依比較利益分工並從貿易中獲利。',
        '貿易自由化有利出口產業與消費者，但進口競爭產業可能受損，需轉型與補償措施。',
      ],
    },
    {
      concept: '三、建築全生命週期碳足跡與 CBAM 碳邊境機制',
      kind: 'diagram',
      title: '建築全生命週期四階段與碳足跡來源',
      caption: '建材生產與運輸施工產生隱含碳，使用階段的空調照明產生營運碳，拆除與回收則決定循環減碳的效益。',
      svg: (() => {
        let s = '';
        s += flow(10, 40, [['建材生產', '水泥、鋼材'], ['運輸施工', '機具、運輸'], ['使用維運', '空調、照明'], ['拆除回收', '再生骨材']], { w: 120, h: 58, gap: 20, tones: ['red', 'amber', 'blue', 'green'], size: 12 });
        s += line(10, 120, 270, 120, { tone: 'red', w: 2 }) + text(140, 140, '隱含碳（完工前已排放）', { anchor: 'middle', size: 12, tone: 'red', weight: 'bold' });
        s += line(290, 120, 410, 120, { tone: 'blue', w: 2 }) + text(350, 140, '營運碳', { anchor: 'middle', size: 12, tone: 'blue', weight: 'bold' });
        s += text(280, 186, 'CBAM：歐盟對進口高碳產品（如鋼鐵、水泥）依碳含量收取費用', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 200, s);
      })(),
      takeaways: [
        '減碳要同時處理隱含碳（低碳材料、木構造）與營運碳（外殼節能、高效設備、再生能源）。',
        '碳邊境機制使出口產業必須掌握產品碳足跡，影響國際貿易競爭力。',
      ],
    },
  ],
  'society-culture': [
    {
      concept: '一、超高齡社會來臨與通用設計',
      kind: 'diagram',
      title: '通用設計七大原則',
      caption: '由 Ronald Mace 提出：空間與產品不需改裝就能讓所有人使用，包含高齡者、幼童、身心障礙者與孕婦。',
      svg: (() => {
        let s = '';
        const items = ['1 公平使用', '2 彈性使用', '3 簡單易懂', '4 明顯資訊', '5 容錯性', '6 省力', '7 適宜尺寸與空間'];
        items.forEach((n, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          s += box(14 + col * 136 + (row === 1 ? 68 : 0), 30 + row * 74, 124, 56, n, { tone: (['blue', 'green', 'amber', 'violet', 'red', 'blue', 'green'] as const)[i], size: 12.5 });
        });
        s += text(280, 196, '例：無高低差坡道、高低雙層洗手台、語音報樓電梯、150 cm 輪椅迴轉空間', { anchor: 'middle', size: 11.5, tone: 'muted' });
        return svg(560, 210, s);
      })(),
      takeaways: [
        '通用設計是「一開始就為所有人設計」，不同於事後加裝的無障礙改造。',
        '臺灣已進入超高齡社會（65 歲以上人口超過 20%），通用設計的需求快速增加。',
      ],
    },
    {
      concept: '九、社會安全制度',
      kind: 'diagram',
      title: '社會安全三大支柱：社會保險、社會救助、福利服務',
      caption: '社會保險靠保費自助互助；社會救助由稅收支應、需資格審查；福利服務提供照顧與住宅等非現金服務。',
      svg: (() => {
        let s = '';
        s += polygon([[40, 60], [280, 14], [520, 60]], { tone: 'red', fill: 'red', soft: true, w: 1.6 });
        s += text(280, 50, '社會安全網', { anchor: 'middle', weight: 'bold', size: 14 });
        const pillars: [number, string, string[], 'blue' | 'amber' | 'green'][] = [
          [60, '社會保險', ['健保、勞保', '國民年金、就業保險', '財源：保費'], 'blue'],
          [220, '社會救助', ['低收入戶扶助', '急難救助', '財源：稅收'], 'amber'],
          [380, '福利服務', ['長照 2.0', '社會住宅、兒少照顧', '財源：稅收、補助'], 'green'],
        ];
        pillars.forEach(([x, n, items, tone]) => { s += box(x, 70, 120, 130, [n, ...items], { tone, size: 11.5 }); });
        s += rect(40, 200, 480, 14, { tone: 'muted', fill: 'muted', soft: true, w: 1.2 });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '社會保險要先繳保費才有給付；社會救助不需繳費，但必須符合資格。',
        '社會住宅、無障礙設施與長照據點，是社會安全政策在空間上的落實。',
      ],
    },
    {
      concept: '七、親密關係、性別刻板印象與性別分工',
      kind: 'diagram',
      title: '健康與不健康的親密關係界線',
      caption: '尊重身體界線與「同意」、彼此保有自主，是健康關係的基礎；控制、跟蹤、騷擾與暴力都是不當甚至違法的行為。',
      svg: (() => {
        let s = '';
        s += box(20, 20, 250, 170, ['健康的關係', '彼此尊重、可以說「不」', '保有個人自主與朋友圈', '衝突時理性溝通', '尊重身體界線與同意'], { tone: 'green', size: 12 });
        s += box(290, 20, 250, 170, ['需要警覺的關係', '要求隨時回報行蹤', '查看手機、限制交友', '情緒勒索、反覆跟蹤', '言語或肢體暴力'], { tone: 'red', size: 12 });
        s += text(280, 212, '求助：113 保護專線、跟蹤騷擾防制法、家庭暴力防治法保護令', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '沉默不等於同意；對方說「不」就是不。',
        '性別刻板印象會限制職涯選擇，例如「女生不適合營建工作」並沒有根據。',
      ],
    },
    {
      concept: '八、全球化下的本土文化產業',
      kind: 'diagram',
      title: '本土文化產業的調適與創新路徑',
      caption: '把傳統文化資產與在地特色，結合設計、科技與觀光，轉化為新的產品、空間與內容，同時保有文化認同。',
      svg: (() => {
        let s = '';
        s += flow(14, 40, [['文化資產', '工藝、老屋、戲曲'], ['設計轉化', '品牌、體驗'], ['科技加值', '數位影音、電商'], ['市場與交流', '觀光、國際展演']], { w: 118, h: 58, gap: 20, tones: ['amber', 'violet', 'blue', 'green'], size: 12 });
        s += box(60, 130, 440, 50, ['例：鶯歌陶瓷與竹藝品牌化、老屋活化為文創空間、布袋戲數位影音'], { tone: 'muted', size: 11.5 });
        return svg(560, 196, s);
      })(),
      takeaways: [
        '保存本土文化不是排斥外來文化，而是在交流中保有特色並創新轉化。',
        '臺灣以 WTO、APEC 會員身分參與國際經貿，也透過民間交流拓展國際空間。',
      ],
    },
  ],
  'labor-ethics': [
    {
      concept: '一、《職業安全衛生法》與建築工地安全管理',
      kind: 'diagram',
      title: '危害控制的優先順序：消除最優先，個人防護具最後',
      caption: '職業安全衛生管理依「消除 → 取代 → 工程控制 → 管理控制 → 個人防護具」的順序思考，越上層的對策越根本有效。',
      svg: (() => {
        let s = '';
        const levels: [string, string, 'green' | 'blue' | 'amber' | 'violet' | 'red'][] = [
          ['消除', '改變工法，不在高處作業', 'green'], ['取代', '以低危害材料或機具取代', 'blue'], ['工程控制', '護欄、安全網、擋土支撐', 'amber'], ['管理控制', '教育訓練、作業許可、警示', 'violet'], ['個人防護具', '安全帽、全身式安全帶', 'red'],
        ];
        levels.forEach(([n, d, tone], i) => { s += box(40 + i * 18, 14 + i * 40, 300 - i * 36, 34, [`${n}：${d}`], { tone, size: 11.5 }); });
        s += arrow(400, 30, 400, 200, { tone: 'muted', w: 1.6 });
        s += text(412, 110, '有效性遞減', { size: 12, tone: 'muted', weight: 'bold' });
        s += text(412, 130, '依賴人遵守遞增', { size: 12, tone: 'muted' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '工地三大災害：墜落、倒塌崩塌、感電；高差 2 公尺以上開口需設護欄與安全網。',
        '個人防護具是最後一道防線，不能取代護欄等工程控制。',
      ],
    },
    {
      concept: '七、勞動市場的薪資決定',
      kind: 'chart',
      title: '勞動市場供需與最低工資（示意）',
      caption: '供給與需求交點決定均衡薪資；若最低工資訂在均衡之上，願意工作的人數多於雇主想僱用的人數，可能出現失業，但在職低薪者所得提高。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: '勞動量（人）' },
        y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: '薪資（相對）' },
        series: [
          { name: '勞動需求 D', tone: 'blue', points: [[10, 90], [90, 10]] },
          { name: '勞動供給 S', tone: 'red', points: [[10, 10], [90, 90]] },
        ],
        overlay: (f) => line(f.box.left, f.Y(60), f.box.left + f.box.width, f.Y(60), { tone: 'green', w: 1.6, dash: 'dash' }) +
          text(f.box.left + f.box.width - 4, f.Y(60) - 6, '最低工資', { tone: 'green', size: 11, anchor: 'end', weight: 'bold' }) +
          text(f.X(50) + 8, f.Y(50) + 14, '均衡點', { tone: 'ink', size: 11, weight: 'bold' }) +
          dim(f.X(40), f.Y(60) + 18, f.X(60), f.Y(60) + 18, '可能失業', { offset: 0, size: 11 }),
      }),
      takeaways: [
        '需求增加或供給減少，薪資上升；引進移工增加供給、自動化改變需求結構。',
        '最低工資的實際效果取決於調整幅度與產業狀況，並非只有「造成失業」一種結果。',
      ],
    },
    {
      concept: '八、自主勞動關係',
      kind: 'diagram',
      title: '勞動三權與勞動三法',
      caption: '團結權、協商權、爭議權分別由《工會法》《團體協約法》《勞資爭議處理法》保障，讓勞工能集體與雇主平等協商。',
      svg: (() => {
        let s = '';
        const rows: [string, string, string, 'blue' | 'green' | 'red'][] = [['團結權', '組織、加入工會', '工會法', 'blue'], ['協商權', '團體協商、簽訂團體協約', '團體協約法', 'green'], ['爭議權', '依法罷工等爭議行為', '勞資爭議處理法', 'red']];
        rows.forEach(([r, d, law, tone], i) => {
          const y = 22 + i * 62;
          s += box(30, y, 120, 48, r, { tone, size: 13 });
          s += arrow(152, y + 24, 192, y + 24, { tone: 'muted', w: 1.4 });
          s += box(194, y, 180, 48, d, { tone, size: 12 });
          s += arrow(376, y + 24, 416, y + 24, { tone: 'muted', w: 1.4 });
          s += box(418, y, 120, 48, law, { tone, size: 12 });
        });
        return svg(560, 214, s);
      })(),
      takeaways: [
        '個別勞工與雇主力量懸殊，透過工會集體協商才能較平等地談判。',
        '團體協約的條件優於個別勞動契約時，以團體協約為準。',
      ],
    },
    {
      concept: '五、工程倫理三首要責任與環境永續責任',
      kind: 'diagram',
      title: '工程倫理的責任優先順序',
      caption: '第一是公眾的安全、健康與福祉，第二是雇主與客戶，第三是專業同儕；當客戶要求與公共安全衝突時，必須以公眾安全為先。',
      svg: (() => {
        let s = '';
        s += box(140, 14, 280, 52, ['第一優先：公眾安全、健康與福祉'], { tone: 'red', size: 13 });
        s += box(170, 82, 220, 48, ['第二優先：雇主與客戶'], { tone: 'amber', size: 12.5 });
        s += box(200, 146, 160, 44, ['第三優先：專業同儕'], { tone: 'blue', size: 12 });
        s += text(280, 212, '例：客戶要求隱瞞結構裂縫 → 拒絕並依法通報', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '專業人員的忠誠義務以合法與安全為前提。',
        '工程倫理也延伸到環境永續責任，例如減少碳排與資源浪費。',
      ],
    },
  ],
  'environment-policy': [
    {
      concept: '一、《氣候變遷因應法》與 2050 淨零排放建築路徑',
      kind: 'diagram',
      title: '淨零排放的政策工具：法制、碳定價、建築節能與再生能源',
      caption: '2023 年《溫室氣體減量及管理法》修正為《氣候變遷因應法》，確立 2050 淨零目標並授權徵收碳費；建築部門則推動建築能效評估與近零碳建築。',
      svg: (() => {
        let s = '';
        s += circle(280, 112, 56, { tone: 'green', fill: 'green', soft: true, w: 2 });
        s += text(280, 108, '2050', { anchor: 'middle', weight: 'bold', size: 16 });
        s += text(280, 128, '淨零排放', { anchor: 'middle', weight: 'bold', size: 12 });
        const tools: [number, number, string[], 'blue' | 'red' | 'amber' | 'violet'][] = [
          [70, 40, ['法制', '氣候變遷因應法'], 'blue'], [490, 40, ['碳定價', '碳費（負向誘因）'], 'red'], [70, 184, ['建築節能', '能效評估、近零碳建築'], 'amber'], [490, 184, ['能源轉型', '再生能源、儲能'], 'violet'],
        ];
        tools.forEach(([x, y, label, tone]) => { s += box(x - 70, y - 26, 140, 52, label, { tone, size: 11.5 }); s += line(x, y, 280, 112, { tone: 'muted', w: 1, dash: 'dash' }); });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '碳費是透過「負向誘因」讓排放者減少溫室氣體的政策工具。',
        '建築減碳需兼顧隱含碳（材料）與營運碳（使用能耗）。',
      ],
    },
    {
      concept: '二、《環境影響評估法》審查程序與公民參與機制',
      kind: 'diagram',
      title: '環境影響評估的兩階段程序與公民參與',
      caption: '第一階段審查開發是否有重大影響之虞；需要時進入第二階段，進行範疇界定、公開展覽、公聽會與現場勘查，公民與環保團體可提出意見。',
      svg: (() => {
        let s = '';
        s += flow(14, 30, [['開發計畫', '提出說明書'], ['第一階段', '專案小組審查'], ['第二階段', '範疇界定、公聽會'], ['審查結論', '通過／有條件／不通過']], { w: 118, h: 58, gap: 20, tones: ['muted', 'blue', 'amber', 'green'], size: 11.5 });
        s += box(90, 120, 380, 64, ['公民參與：書面意見、列席發言、公聽會辯論', '主管機關違法審查時，可依法提起公民訴訟'], { tone: 'violet', size: 11.5 });
        return svg(560, 198, s);
      })(),
      takeaways: [
        '環評的核心是在開發前預測並減輕環境衝擊，公民參與能補足在地資訊。',
        '公聽會與公開展覽是政策形成前的重要參與管道。',
      ],
    },
    {
      concept: '六、低衝擊開發 (LID) 與海綿都市水文重構',
      kind: 'diagram',
      title: '低衝擊開發（LID）：讓雨水就地入滲、滯留與再利用',
      caption: '以透水鋪面、雨水花園、綠屋頂與滯洪設施，模擬開發前的水文狀態，降低洪峰流量並補注地下水。',
      svg: (() => {
        let s = '';
        s += line(20, 160, 540, 160, { tone: 'muted', w: 1.6 });
        s += rect(40, 70, 120, 90, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        s += rect(40, 62, 120, 8, { tone: 'green', fill: 'green', w: 1.2 }) + text(100, 54, '綠屋頂', { anchor: 'middle', size: 12, tone: 'green', weight: 'bold' });
        s += rect(200, 152, 140, 8, { tone: 'blue', fill: 'blue', soft: true, w: 1.2 }) + text(270, 144, '透水鋪面', { anchor: 'middle', size: 12, tone: 'blue', weight: 'bold' });
        s += polygon([[380, 160], [400, 175], [470, 175], [490, 160]], { tone: 'green', fill: 'green', soft: true, w: 1.4 }) + text(435, 144, '雨水花園', { anchor: 'middle', size: 12, tone: 'green', weight: 'bold' });
        for (let i = 0; i < 6; i++) s += arrow(80 + i * 80, 14, 80 + i * 80 - 14, 40, { tone: 'blue', w: 1.2, head: 6 });
        for (let i = 0; i < 4; i++) s += arrow(220 + i * 35, 164, 220 + i * 35, 196, { tone: 'blue', w: 1.2, head: 6, dash: 'dash' });
        s += text(280, 214, '雨水入滲補注地下水，降低洪峰與都市內澇', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '海綿城市的目標是讓城市像海綿一樣吸水、蓄水、滲水與淨水。',
        'LID 設施分散在基地各處，與大型滯洪池互補。',
      ],
    },
    {
      concept: '七、科技發展的倫理與法律',
      kind: 'diagram',
      title: '公平正義的不同面向',
      caption: '形式平等一律相同對待，實質平等依需求差別對待；另有分配正義、程序正義與矯正正義，不同群體重視的面向不同，因而產生爭議。',
      svg: (() => {
        let s = '';
        s += box(20, 20, 250, 76, ['形式平等', '所有人一律相同對待'], { tone: 'blue', size: 12.5 });
        s += box(290, 20, 250, 76, ['實質平等', '依需求差別對待（如無障礙、保障名額）'], { tone: 'green', size: 11.5 });
        s += box(20, 116, 160, 70, ['分配正義', '資源如何分配'], { tone: 'amber', size: 12 });
        s += box(200, 116, 160, 70, ['程序正義', '過程是否公正'], { tone: 'violet', size: 12 });
        s += box(380, 116, 160, 70, ['矯正正義', '如何彌補不公'], { tone: 'red', size: 12 });
        s += text(280, 212, '科技爭議例：人臉辨識（安全 vs. 隱私）、AI 作品（創作者權利 vs. 創新）', { anchor: 'middle', size: 11.5, tone: 'muted' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '實質平等的差別待遇必須有合理理由，否則可能構成歧視。',
        '面對價值衝突，需要民主審議、資訊公開與司法救濟尋求共識。',
      ],
    },
  ],
};
