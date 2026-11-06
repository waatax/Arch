import type { TableData } from '../data/types';
import MathText from './MathText';

export default function TableRenderer({ data }: { data: TableData }) {
  return (
    <div className="study-table">
      <div role="region" aria-label={data.title || '資料表，可左右捲動'} tabIndex={0} className="study-table-scroll">
      <table style={{minWidth:(data.headers?.length??0)>5?'45rem':(data.headers?.length??0)>2?'32rem':undefined}}>
        {data.title && <caption>{data.title}</caption>}
        {data.headers && data.headers.length > 0 && (
          <thead>
            <tr>
              {data.headers.map((header, i) => {
                const align = data.alignments?.[i] ?? 'left';
                return (
                  <th scope="col" key={i} style={{textAlign:align}}>
                    <MathText content={header} />
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => {
                const align = data.alignments?.[j] ?? 'left';
                return (
                  <td key={j} style={{textAlign:align}} className="whitespace-pre-line">
                    <MathText content={cell} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {(data.headers?.length ?? 0) > 2 && <p className="study-table-hint">表格可左右滑動，請對照欄名閱讀。</p>}
    </div>
  );
}
