import PageHero from "../components/ui/PageHero.jsx";
import PhotoBlock from "../components/ui/PhotoBlock.jsx";

export default function About() {
  return (
    <>
      <PageHero
        kicker="About the School"
        title="A school built on attention, not just infrastructure."
        subtitle="Our history, our purpose, and a note from the people who run the school day to day."
        crumbLabel="About"
      />

      <section className="section-paper">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="kicker">Our Story</span>
              <h2 className="mt-0">History</h2>
              <p>
                KPK National Matriculation School was founded to give
                children in Tiruppur access to a disciplined,
                English-medium education without losing the personal
                attention of a smaller institution.{" "}
                <span className="placeholder-note">
                  Replace with the school&rsquo;s actual founding year and
                  history.
                </span>
              </p>
            </div>
            <PhotoBlock caption="CAMPUS PHOTOGRAPH — PLACEHOLDER" />
          </div>
        </div>
      </section>

      <div className="ruled"></div>

      <section className="section-dim">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="kicker">Our Purpose</span>
              <h2 className="mt-0">Vision</h2>
              <p>
                To be a school every family in Tiruppur trusts &mdash;
                academically rigorous, personally attentive, and genuinely
                preparing children for life beyond the classroom.
              </p>
            </div>
            <div>
              <span className="kicker">How We Get There</span>
              <h2 className="mt-0">Mission</h2>
              <ul className="tick-list">
                <li>Keep class sizes small enough that every child is known by name.</li>
                <li>Teach the full State Board curriculum with an emphasis on understanding.</li>
                <li>Build a campus culture of discipline and warmth in equal measure.</li>
                <li>Keep parents genuinely informed, not just notified.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="wrap">
          <div className="grid-2">
            <div className="quote-block">
              &ldquo;A school is judged not by its brochure but by how a
              child feels walking in on a Monday morning. That is what we
              build toward, every year.&rdquo;
              <span className="quote-attr">
                &mdash; Chairman&rsquo;s Message{" "}
                <span className="placeholder-note">(replace with actual message)</span>
              </span>
            </div>
            <div className="quote-block">
              &ldquo;Our staff room&rsquo;s first conversation every
              morning is about individual students, not just the
              syllabus. That is deliberate.&rdquo;
              <span className="quote-attr">
                &mdash; Principal&rsquo;s Message{" "}
                <span className="placeholder-note">(replace with actual message)</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
