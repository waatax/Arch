import Link from 'next/link';

export default function MathCPage() {
  const topics = [
    { title: '1. 三角函數與建築應用', desc: '正弦餘弦定理、正切值求屋頂坡度與樓梯階高比。' },
    { title: '2. 平面向量與力學分解', desc: '向量點積、叉積、向量分解與共點力合力求解。' },
    { title: '3. 代數與多項式', desc: '二項式定理、多項式因式分解與不等式求解。' },
    { title: '4. 函數與幾何圖形', desc: '直線方程式、圓方程式、拋物線（拱橋與雙曲面）。' },
    { title: '5. 機率與統計', desc: '排列組合、條件機率與統計抽樣品質管制。' },
    { title: '6. 微積分基礎', desc: '導數求切線斜率、極值問題（最大面積與最大體積）。' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block">統測共同科目</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          數學 C (Mathematics C)
        </h1>
        <p className="text-base text-(--color-ink-650)">
          工科統測數學 C。每個數學概念皆連結具體的建築與工程情境題，告別死記硬背。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((t, idx) => (
          <div key={idx} className="p-6 bg-(--color-paper-100) border border-(--color-concrete-300) rounded-xl hover:border-(--color-teal-700) transition-all">
            <h2 className="text-lg font-bold font-serif text-(--color-ink-900) mb-2">{t.title}</h2>
            <p className="text-sm text-(--color-ink-650) mb-4">{t.desc}</p>
            <span className="text-xs font-mono text-(--color-teal-700) font-medium">包含建築情境遷移題與公式卡</span>
          </div>
        ))}
      </div>
    </div>
  );
}
