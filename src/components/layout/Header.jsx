import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, SITE } from "../../data/site.js";

// Matches the approved static markup/classes exactly (header.site-header,
// .nav-inner, .brand, .crest, nav.tabs, .nav-cta) — do not rename classes,
// the CSS in styles/style.css targets these selectors directly.
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="crest">KPK</span>
          <span className="brand-text">
            <span className="name">KPK National Matric.</span>
            <span className="tag">Tiruppur, Tamil Nadu</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={open ? "tabs open" : "tabs"}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="btn btn-outline-dark" href={`tel:${SITE.phone}`}>
            Call Office
          </a>
          <Link className="btn btn-marigold" to="/admissions">
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}
