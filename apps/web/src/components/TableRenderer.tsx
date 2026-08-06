import type { TableData } from '../data/types';

export default function TableRenderer({ data }: { data: TableData }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-(--color-concrete-300) bg-white shadow-sm">
      {data.title && (
        <div className="border-b border-(--color-concrete-300) bg-(--color-paper-50) px-4 py-3 text-sm font-bold text-(--color-ink-900)">
          {data.title}
        </div>
      )}
      <table className="w-full text-sm text-(--color-ink-900)">
        {data.headers && data.headers.length > 0 && (
          <thead className="bg-(--color-paper-50) font-bold">
            <tr>
              {data.headers.map((header, i) => {
                const align = data.alignments?.[i] ?? 'left';
                return (
                  <th key={i} className={`border-b border-(--color-concrete-300) p-3 text-${align}`}>
                    {header}
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} className="border-b border-(--color-concrete-300) last:border-0 hover:bg-(--color-paper-50)/50">
              {row.map((cell, j) => {
                const align = data.alignments?.[j] ?? 'left';
                // Use a simple heuristic for multi-line cells or bolding if needed, but for now just raw text.
                return (
                  <td key={j} className={`p-3 text-${align} whitespace-pre-line`}>
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
