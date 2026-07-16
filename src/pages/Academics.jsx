import PageHero from "../components/ui/PageHero.jsx";
import Card from "../components/ui/Card.jsx";
import Ledger from "../components/ui/Ledger.jsx";

export default function Academics() {
  return (
    <>
      <PageHero
        kicker="Academics"
        title="A curriculum built for depth, not just coverage."
        subtitle="From foundational literacy in Kindergarten to focused board-exam preparation in Class X."
        crumbLabel="Academics"
      />

      <section className="section-paper">
        <div className="wrap">
          <span className="kicker">Structure</span>
          <h2>How the curriculum progresses</h2>
          <Ledger
            headers={["Stage", "Classes", "Focus"]}
            rows={[
              ["Primary", "Kindergarten – V", "Literacy, numeracy, and curiosity-led foundational learning"],
              ["Middle School", "VI – VIII", "Subject specialisation, introductory science labs, project-based work"],
              ["Secondary", "IX – X", "Full State Board syllabus with structured board-exam preparation"],
            ]}
          />
        </div>
      </section>

      <div className="ruled"></div>

      <section className="section-dim">
        <div className="wrap">
          <span className="kicker">Departments</span>
          <h2>Core subject areas</h2>
          <div className="grid-3">
            <Card tag="LANGUAGES" title="English & Tamil">
              Language proficiency built alongside the State Board
              syllabus, with attention to both.
            </Card>
            <Card tag="SCIENCES" title="Physics, Chemistry, Biology">
              Lab-based learning from Class VI onward, building toward
              board-exam readiness.
            </Card>
            <Card tag="MATHEMATICS" title="Mathematics">
              Concept-first teaching, with regular practice assessments
              through the term.
            </Card>
            <Card tag="SOCIAL" title="Social Science">
              History, geography, and civics taught to build context, not
              just recall.
            </Card>
            <Card tag="COMPUTING" title="Computer Science">
              Practical computer literacy from middle school, in the
              computer lab.
            </Card>
            <Card tag="CO-CURRICULAR" title="Arts, Sports & Clubs">
              Structured time for sports, arts, and interest-based clubs
              every week.
            </Card>
          </div>
        </div>
      </section>

      <section className="section-paper">
        <div className="wrap">
          <span className="kicker">Recognition</span>
          <h2>Achievements</h2>
          <p className="small" style={{ marginBottom: 20 }}>
            This section is designed to hold real results as they come in
            &mdash; board exam toppers, competition wins, and sports
            achievements.
          </p>
          <div className="grid-3">
            <Card tag="ACADEMIC" title="Board exam results">
              <span className="placeholder-note">Add each year&rsquo;s top performers here.</span>
            </Card>
            <Card tag="SPORTS" title="District & state sports">
              <span className="placeholder-note">Add tournament results and student names here.</span>
            </Card>
            <Card tag="CULTURAL" title="Competitions & events">
              <span className="placeholder-note">Add inter-school competition results here.</span>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
