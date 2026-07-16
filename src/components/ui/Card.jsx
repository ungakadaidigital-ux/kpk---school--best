export default function Card({ tag, title, children }) {
  return (
    <div className="card">
      {tag && <span className="num-tag">{tag}</span>}
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

