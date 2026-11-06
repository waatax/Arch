type VisualLesson = {
  title: string;
  columns: [string, string, string];
  rows: [string, string, string][];
  check: string;
};
const visuals: Record<string, VisualLesson> = {
  '113-1-7': {
    title: '同心挖孔與原點偏移',
    columns: ['區域', '面積（cm²）', '形心高度（cm）'],
    rows: [['外方板', '+100', '1＋10÷2＝6'], ['同心圓孔', '−19.6', '6'], ['剩餘板', '80.4', '(100×6−19.6×6)÷80.4＝6']],
    check: '孔與外板中心重合，保留對稱性。原點向下移 1 cm，所有高度也要加 1 cm。',
  },
  '113-1-8': {
    title: '先移到同一軸，再扣除孔洞',
    columns: ['區域', '形心軸 I（cm⁴）', '題示 x 軸 I（cm⁴）'],
    rows: [['外方板', '833.333', '833.333＋100×6²＝4433.333'], ['圓孔', '30.625', '30.625＋19.6×6²＝736.225'], ['剩餘板', '逐區移軸後相減', '4433.333−736.225≈3697.1']],
    check: '平行軸項 A d² 的 d 是兩條平行軸之間的垂直距離。面積單位是 cm²，慣性矩單位是 cm⁴。',
  },
  '113-1-19': {
    title: '節點 g 的分量與正負號',
    columns: ['平衡方向', '關係式', '解讀'],
    rows: [['垂直', '−3Fcg/5−3Fge/5＝0', '兩斜桿力互為相反數'], ['水平', '50−4Fcg/5＋4Fge/5＝0', '已知右推力為 50 kN'], ['聯立', '50−8Fcg/5＝0', 'Fcg＝31.25 kN，拉力']],
    check: '先假設兩桿皆受拉，箭頭由節點向外。負值表示實際受壓。3/5 與 4/5 來自垂直高差及水平距離對斜桿長度的比值。',
  },
  '113-1-20': {
    title: '斷面選擇的門檻表',
    columns: ['桿件', '|N|（kN）', '判斷'],
    rows: [['cf、eh', '各 100', '超過甲上限，改用乙'], ['cd、ac、eb', '75、81.25、118.75', '超過甲上限，改用乙'], ['ab、fg', '各 50', '可用甲'], ['ad、db', '各 62.5', '可用甲'], ['cg、ge、de、gh', '31.25、31.25、25、0', '可用甲']],
    check: '甲要求 |N|＜70 kN，乙要求 |N|＜140 kN。題目是嚴格小於，因此剛好 70 kN 也不能選甲。',
  },
  '111-2-32': {
    title: '基地、建築與總樓地板面積',
    columns: ['限制', '分母／計算基準', '本題結果'],
    rows: [['基地面積', '60×60', '3600 m²'], ['建築面積', '40×30', '1200 m²'], ['建蔽率', '1200÷3600', '33.33%'], ['360% 容積上限', '3600×3.6', '12960 m²'], ['完整樓層數', '12960÷1200＝10.8', '向下取整為 10 層']],
    check: '每層面積固定且不計其他限制時，完整樓層數向下取整。基地面積、建築面積與總樓地板面積分別列表，能避免分母混淆。',
  },
  '113-english-29': {
    title: '時刻、時長與行駛日分開核對',
    columns: ['查核項目', '原表證據', '結論'],
    rows: [['1510 行車時間', '07:12 → 08:21', '69 分鐘'], ['1202 行車時間', '07:21 → 08:07', '46 分鐘'], ['606 行駛日', 'Sat', '星期六行駛'], ['606 桃園時刻', '08:38', '選項 08:30 相差 8 分鐘']],
    check: '先定位列，再確認欄名。NOT true 題要選與資料矛盾的一項，不能把行車時間當成到站時刻。',
  },
  '114-english-35': {
    title: '先計次，再核對整組資料',
    columns: ['年度', '表列事件個數', '讀圖要求'],
    rows: [['2021', '5', '類別與數值配對'], ['2022', '3', '不可與 2023 對調'], ['2023', '6', '最高值應對到 2023']],
    check: '正確數列為 5、3、6。圓餅圖、長條圖、折線圖均須逐項檢查類別與數值，不能只憑圖形種類選答案。',
  },
};

export default function ExamConceptTable({id}: {id: string}) {
  const visual = visuals[id];
  if (!visual) return null;
  return <figure className="my-5 space-y-3 rounded-xl border border-teal-600/40 p-4">
    <figcaption className="font-bold">{visual.title}</figcaption>
    <div role="region" aria-label={visual.title} tabIndex={0} className="overflow-x-auto">
      <table className="w-full min-w-[440px] text-left text-sm">
        <thead><tr>{visual.columns.map(title => <th scope="col" className="border-b p-3" key={title}>{title}</th>)}</tr></thead>
        <tbody>{visual.rows.map(([name,value,result]) => <tr key={name}><th scope="row" className="border-b p-3 font-medium">{name}</th><td className="border-b p-3">{value}</td><td className="border-b p-3">{result}</td></tr>)}</tbody>
      </table>
    </div>
    {id === '113-1-19' && <svg viewBox="0 0 360 200" role="img" aria-label="三四五方向三角形，水平四公尺，垂直三公尺，斜長五公尺" className="mx-auto w-full max-w-md">
      <path d="M65 145H265V35Z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M248 145V128H265" fill="none" stroke="currentColor"/>
      <g fill="currentColor" fontSize="16"><text x="145" y="174">4 m</text><text x="278" y="98">3 m</text><text x="130" y="77">5 m</text></g>
    </svg>}
    {id === '113-1-7' && <svg viewBox="0 0 360 240" role="img" aria-label="正方板底邊 y 等於一，中心高度六，同心圓孔保持對稱" className="mx-auto w-full max-w-md">
      <path d="M35 215H325M65 225V15" stroke="currentColor" fill="none"/>
      <rect x="65" y="25" width="170" height="170" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="150" cy="110" r="42.5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M45 110H255M150 15V205" stroke="currentColor" strokeDasharray="4 4"/>
      <g fill="currentColor" fontSize="13"><text x="240" y="114">中心 y＝6 cm</text><text x="95" y="190">底邊 y＝1 cm</text><text x="270" y="235">x 軸</text></g>
    </svg>}
    <p className="text-sm leading-7">{visual.check}</p>
  </figure>;
}
