import Link from 'next/link';

export default function MechanicsPage() {
  const topics = [
    {
      slug: 'units-vectors',
      title: '1. 單位與向量',
      desc: '力學 SI 單位制、因次分析、向量加減法與分力合成。',
    },
    {
      slug: 'force-equilibrium',
      title: '2. 力系與共點力平衡',
      desc: '自由體圖 (FBD) 畫法、二力構件與三力平衡、拉密定理應用。',
      featured: true,
    },
    {
      slug: 'centroid',
      title: '3. 重心與形心',
      desc: '組合幾何圖形之形心座標計算、帕普斯 (Pappus) 定理。',
    },
    {
      slug: 'friction',
      title: '4. 摩擦力',
      desc: '靜摩擦係數、臨界滑動與傾倒判斷、斜面摩擦受力。',
    },
    {
      slug: 'truss',
      title: '5. 平面桁架分析',
      desc: '節點法 (Method of Joints) 與剖面法 (Method of Sections) 求解軸力。',
    },
    {
      slug: 'beam',
      title: '6. 靜定樑之受力',
      desc: '剪力圖 (V-diagram) 與彎矩圖 (M-diagram) 繪製與最大彎矩。',
    },
    {
      slug: 'stress-strain',
      title: '7. 應力與應變',
      desc: '法向應力、剪應力、虎克定律 (Hooke\'s Law) 與彈性模數 E。',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-xs font-mono text-(--color-teal-700) uppercase tracking-wider block">統測專業科目（一）</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-(--color-ink-900) mt-1 mb-4">
          基礎工程力學 (Engineering Mechanics)
        </h1>
        <p className="text-base text-(--color-ink-650)">
          工程力學是所有建築結構設計的基石。學習如何將真實建築結構抽象化為自由體圖，並求解外力與內力傳遞關係。
        </p>
      </div>

      <div className="space-y-4">
        {topics.map((t) => (
          <div
            key={t.slug}
            className={`p-6 border rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all ${
              t.featured
                ? 'bg-(--color-paper-100) border-(--color-teal-700) shadow-sm'
                : 'bg-(--color-paper-50) border-(--color-concrete-300)'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-bold font-serif text-(--color-ink-900)">{t.title}</h2>
                {t.featured && (
                  <span className="text-xs bg-(--color-brick-700) text-(--color-paper-50) px-2 py-0.5 rounded font-mono">
                    精選模組
                  </span>
                )}
              </div>
              <p className="text-sm text-(--color-ink-650)">{t.desc}</p>
            </div>
            <Link
              href={`/subjects/mechanics/${t.slug}`}
              className="px-4 py-2 bg-(--color-teal-700) text-(--color-paper-50) text-xs font-mono font-medium rounded hover:bg-opacity-90 transition-colors whitespace-nowrap"
            >
              進入學習 →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
