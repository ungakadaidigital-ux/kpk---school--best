import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section-paper" style={{ minHeight: "50vh" }}>
      <div className="wrap center">
        <span className="kicker">404</span>
        <h1>Page not found</h1>
        <p style={{ marginBottom: 24 }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or may
          have moved.
        </p>
        <Link className="btn btn-marigold" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
