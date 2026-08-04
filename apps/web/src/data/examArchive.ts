export const examYears = [
  { year: 115, date: '2026', url: 'https://web1.tcte.edu.tw/EXAM/115_4y/' },
  { year: 114, date: '2025', url: 'https://web1.tcte.edu.tw/EXAM/114_4y/' },
  { year: 113, date: '2024', url: 'https://web1.tcte.edu.tw/EXAM/113_4y/' },
  { year: 112, date: '2023', url: 'https://web1.tcte.edu.tw/EXAM/112_4y/' },
  { year: 111, date: '2022', url: 'https://web1.tcte.edu.tw/EXAM/111_4y/' },
] as const;

export const examCoverage = [
  { id: 'mechanics', paper: '專業科目（一）', title: '基礎工程力學', subject: 'mechanics', topics: [['units-vectors', '單位、向量與力的表示'], ['force-equilibrium', '力系與平衡'], ['centroid', '形心、重心與慣性矩'], ['friction', '摩擦'], ['truss', '桁架'], ['beam', '梁與內力'], ['stress-strain', '應力、應變與材料力學']] },
  { id: 'materials', paper: '專業科目（一）', title: '材料與試驗', subject: 'materials', topics: [['basic-properties', '材料基本性質'], ['cement-composition', '水泥組成'], ['cement-types', '水泥種類與用途'], ['cement-vicat', '水泥稠度與凝結試驗'], ['cement-strength', '水泥強度試驗'], ['concrete', '混凝土'], ['stone-ceramics-glass', '石材、陶瓷與玻璃'], ['wood', '木材'], ['polymers-asphalt', '瀝青與高分子材料'], ['metals', '金屬材料'], ['green-materials', '綠建材與材料選用']] },
  { id: 'surveying', paper: '專業科目（二）', title: '測量實習', subject: 'surveying', topics: [['instrument-setup', '儀器架設與整平'], ['distance-and-angle', '距離與角度測量'], ['elevation-and-leveling', '高程與水準測量'], ['traverse-surveying', '導線測量'], ['coordinate-computation', '坐標計算'], ['area-and-error', '面積、誤差與精度']] },
  { id: 'drafting', paper: '專業科目（二）', title: '製圖實習', subject: 'drafting', topics: [['lines-and-lettering', '線條、字法與圖紙規範'], ['scale', '比例尺'], ['orthographic-projection', '正投影與三視圖'], ['sectional-views', '剖視圖'], ['dimensioning-and-symbols', '尺度標註與符號'], ['architectural-plan', '建築平面圖'], ['architectural-elevation', '建築立面圖'], ['cad-basics', '電腦輔助製圖']] },
] as const;
