import { Link } from "react-router-dom";
import Card from "../components/ui/Card.jsx";
import PhotoBlock from "../components/ui/PhotoBlock.jsx";
import StatRow from "../components/ui/StatRow.jsx";

const STATS = [
  { value: "[XX]+", label: "Years of Teaching" },
  { value: "[X,XXX]+", label: "Students" },
  { value: "[XX]%", label: "Class X Pass Rate" },
  { value: "[XX]+", label: "Teaching Faculty" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="eyebrow">Est. Tiruppur · English Medium · KG–X</span>
            <h1>
              Where Tiruppur&rsquo;s children learn to{" "}
              <span className="chalk">think for themselves</span>.
            </h1>
            <p className="lead">
              KPK National Matriculation School blends a disciplined
              academic foundation with the room every child needs to ask
              questions, build things, and find what they&rsquo;re good at.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-marigold" to="/admissions">
                Apply for Admission
              </Link>
              <Link className="btn btn-outline-light" to="/academics">
                Explore Academics
              </Link>
            </div>
          </div>
          <div className="hero-badge">
            <div className="badge-title">Report Card &mdash; At a Glance</div>
            <div className="grade-row"><span>Board</span><span>State Matriculation</span></div>
            <div className="grade-row"><span>Medium</span><span>English</span></div>
            <div className="grade-row"><span>Classes</span><span>KG &ndash; X</span></div>
            <div className="grade-row"><span>Class size</span><span>&le; 35 students</span></div>
            <div className="grade-row"><span>Campus</span><span>Tiruppur, Tamil Nadu</span></div>
          </div>
        </div>
      </section>

      <StatRow stats={STATS} />

      <section className="section-paper">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Why Families Choose KPK</span>
            <h2>
              A school run the way a good classroom is &mdash; with
              attention, not just infrastructure.
            </h2>
            <p>
              Every decision, from class size to the way homework is set,
              is made to keep a teacher&rsquo;s attention on each child
              rather than the average of the room.
            </p>
          </div>
          <div className="grid-3">
            <Card tag="01 — TEACHING" title="Small, attentive classrooms">
              Class sizes kept deliberately small so no student goes a
              week unnoticed.
            </Card>
            <Card tag="02 — CURRICULUM" title="State board, taught with depth">
              Full State Matriculation syllabus, taught with an emphasis
              on understanding over rote memorisation.
            </Card>
            <Card tag="03 — ENVIRONMENT" title="Safe, disciplined, warm">
              A campus culture that takes both discipline and a
              child&rsquo;s comfort seriously &mdash; not one at the cost
              of the other.
            </Card>
          </div>
        </div>
      </section>

      <div className="ruled"></div>

      <section className="section-dim">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Academics</span>
            <h2>
              A curriculum built for the board exam &mdash; and for what
              comes after it.
            </h2>
          </div>
          <div className="grid-3">
            <Card tag="PRIMARY" title="KG – Class V">
              Foundational literacy, numeracy, and curiosity-led learning.
            </Card>
            <Card tag="MIDDLE" title="Class VI – VIII">
              Subject specialisation begins; science labs and project
              work introduced.
            </Card>
            <Card tag="SECONDARY" title="Class IX – X">
              Focused board-exam preparation with regular assessments and
              mentoring.
            </Card>
          </div>
          <p className="center" style={{ marginTop: 32 }}>
            <Link className="btn btn-outline-dark" to="/academics">
              View Full Academics &rarr;
            </Link>
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">Campus</span>
            <h2>Facilities built for how children actually learn.</h2>
            <p>
              Classrooms, labs, and grounds designed so learning isn&rsquo;t
              confined to a textbook.
            </p>
          </div>
          <div className="grid-3">
            <PhotoBlock caption="SMART CLASSROOMS" tone="green" />
            <PhotoBlock caption="SCIENCE & COMPUTER LABS" tone="gold" />
            <PhotoBlock caption="LIBRARY & SPORTS GROUNDS" tone="paper" />
          </div>
          <p className="center" style={{ marginTop: 32 }}>
            <Link className="btn btn-outline-light" to="/facilities">
              See All Facilities &rarr;
            </Link>
          </p>
        </div>
      </section>

      <section className="section-paper">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div>
              <span className="kicker">Latest from the School</span>
              <h2 className="mt-0">News &amp; Circulars</h2>
              <ul className="tick-list" style={{ marginTop: 20 }}>
                <li>
                  Admissions for the new academic year are now open &mdash;
                  apply online.
                </li>
                <li>
                  Annual Day and Sports Day schedules to be announced
                  shortly.
                </li>
                <li>Circulars are posted here as the school office issues them.</li>
              </ul>
              <p style={{ marginTop: 20 }}>
                <Link className="btn btn-outline-dark" to="/news">
                  View All News &rarr;
                </Link>
              </p>
            </div>
            <div className="quote-block">
              &ldquo;What we want for every child who walks through our
              gates is simple &mdash; that they leave more curious than
              they arrived.&rdquo;
              <span className="quote-attr">&mdash; Principal&rsquo;s Desk</span>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="wrap">
          <h2>Admissions are open for the new academic year</h2>
          <p>
            Submit an inquiry and our admissions office will get back to
            you within 1&ndash;2 working days.
          </p>
          <Link
            className="btn"
            style={{ background: "var(--chalk-green-deep)", color: "var(--paper)" }}
            to="/admissions"
          >
            Start Your Application
          </Link>
        </div>
      </div>
    </>
  );
}
