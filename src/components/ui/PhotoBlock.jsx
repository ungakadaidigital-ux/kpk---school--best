/**
 * Stands in for a real photograph until campus photography is supplied
 * (see content checklist in the Master Architecture document).
 * tone: "green" (default) | "gold" | "paper"
 */
export default function PhotoBlock({ caption, tone = "green", style }) {
  const toneClass = tone === "gold" ? " gold" : tone === "paper" ? " paper-tone" : "";
  return (
    <div className={`photo-block${toneClass}`} style={style}>
      <div className="cap">{caption}</div>
    </div>
  );
}
