import type { ChartData } from '../data/types';

export default function ChartRenderer({ data }: { data: ChartData }) {
  if (data.type === 'line' || data.type === 'bar') {
    return <SvgAxisChart data={data} />;
  }
  return <div className="p-4 border rounded">Chart type {data.type} not implemented.</div>;
}

function SvgAxisChart({ data }: { data: ChartData }) {
  const width = 600;
  const height = 300;
  const padding = { top: 40, right: 30, bottom: 50, left: 50 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  let min = 0;
  let max = 0;
  data.datasets.forEach(ds => {
    ds.data.forEach(val => {
      if (val > max) max = val;
      if (val < min) min = val;
    });
  });

  // Add some padding to max y-axis
  if (max > 0) max = Math.ceil(max * 1.1 / 10) * 10;
  const range = max - min || 1;

  const getX = (index: number) => padding.left + (index * (innerWidth / Math.max(1, data.labels.length - 1)));
  const getBarX = (index: number, dsIndex: number, totalDs: number) => {
    const sectionWidth = innerWidth / data.labels.length;
    const barWidth = (sectionWidth * 0.8) / totalDs;
    const startX = padding.left + (index * sectionWidth) + (sectionWidth * 0.1);
    return startX + (dsIndex * barWidth);
  };
  const getBarWidth = (totalDs: number) => ((innerWidth / data.labels.length) * 0.8) / totalDs;

  const getY = (val: number) => padding.top + innerHeight - ((val - min) / range) * innerHeight;

  const yTicks = 5;
  const yTickValues = Array.from({ length: yTicks + 1 }).map((_, i) => min + (i * range) / yTicks);

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-(--color-concrete-300) bg-white shadow-sm">
      {data.title && (
        <div className="border-b border-(--color-concrete-300) bg-(--color-paper-50) px-4 py-3 text-sm font-bold text-(--color-ink-900)">
          {data.title}
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-w-[500px] h-auto font-sans text-xs">
          {/* Grid & Y Axis */}
          {yTickValues.map((val, i) => (
            <g key={i}>
              <line 
                x1={padding.left} y1={getY(val)} 
                x2={width - padding.right} y2={getY(val)} 
                stroke="#e2e8f0" strokeWidth="1" 
              />
              <text x={padding.left - 8} y={getY(val) + 4} textAnchor="end" fill="#64748b">
                {val.toFixed(0)}
              </text>
            </g>
          ))}
          {data.yAxisLabel && (
            <text x={padding.left} y={padding.top - 15} fill="#64748b" fontSize="10">
              {data.yAxisLabel}
            </text>
          )}

          {/* X Axis */}
          <line 
            x1={padding.left} y1={height - padding.bottom} 
            x2={width - padding.right} y2={height - padding.bottom} 
            stroke="#94a3b8" strokeWidth="2" 
          />
          {data.labels.map((label, i) => (
            <g key={i}>
              {data.type === 'line' ? (
                <text x={getX(i)} y={height - padding.bottom + 20} textAnchor="middle" fill="#64748b">
                  {label}
                </text>
              ) : (
                <text x={padding.left + (i + 0.5) * (innerWidth / data.labels.length)} y={height - padding.bottom + 20} textAnchor="middle" fill="#64748b">
                  {label}
                </text>
              )}
            </g>
          ))}

          {/* Datasets */}
          {data.datasets.map((ds, i) => {
            const color = ds.color || `hsl(${(i * 137.5) % 360}, 70%, 50%)`;
            
            if (data.type === 'line') {
              const points = ds.data.map((val, j) => `${getX(j)},${getY(val)}`).join(' ');
              return (
                <g key={i}>
                  <polyline points={points} fill="none" stroke={color} strokeWidth="3" strokeLinejoin="round" />
                  {ds.data.map((val, j) => (
                    <circle key={j} cx={getX(j)} cy={getY(val)} r="4" fill={color} stroke="#fff" strokeWidth="2" />
                  ))}
                </g>
              );
            } else if (data.type === 'bar') {
              return (
                <g key={i}>
                  {ds.data.map((val, j) => {
                    const barH = ((val - min) / range) * innerHeight;
                    const barY = getY(val);
                    const barX = getBarX(j, i, data.datasets.length);
                    const barW = getBarWidth(data.datasets.length);
                    return (
                      <rect key={j} x={barX} y={barY} width={barW} height={barH} fill={color} rx="2" />
                    );
                  })}
                </g>
              );
            }
            return null;
          })}

          {/* Legend */}
          <g transform={`translate(${padding.left}, ${height - 15})`}>
            {data.datasets.map((ds, i) => (
              <g key={i} transform={`translate(${i * 100}, 0)`}>
                <rect width="12" height="12" fill={ds.color || `hsl(${(i * 137.5) % 360}, 70%, 50%)`} rx="2" />
                <text x="20" y="10" fill="#64748b">{ds.label}</text>
              </g>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
