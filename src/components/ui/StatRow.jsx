/**
 * The dark "mark-sheet" stat band on the homepage.
 * stats: [{ value: "[XX]+", label: "Years of Teaching" }, ...]
 */
export default function StatRow({ stats }) {
  return (
    <div className="markrow">
      <div className="wrap">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="num">{s.value}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
