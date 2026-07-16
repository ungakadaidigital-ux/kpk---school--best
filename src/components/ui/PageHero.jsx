import { Link } from "react-router-dom";

/**
 * Dark chalkboard header used at the top of every interior page.
 * Mirrors the .page-hero markup from the approved static design.
 */
export default function PageHero({ kicker, title, subtitle, crumbLabel }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp; {crumbLabel}
        </div>
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
