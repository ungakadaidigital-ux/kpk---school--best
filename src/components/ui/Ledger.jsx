/**
 * Report-card styled table. Wrapped in .ledger-wrap so it scrolls
 * horizontally on narrow screens instead of breaking the layout.
 * headers: string[]
 * rows: string[][] (or React nodes)
 */
export default function Ledger({ headers, rows, style }) {
  return (
    <div className="ledger-wrap">
      <table className="ledger" style={style}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
