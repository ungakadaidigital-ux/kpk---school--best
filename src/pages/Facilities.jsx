import PageHero from "../components/ui/PageHero.jsx";
import PhotoBlock from "../components/ui/PhotoBlock.jsx";

const FACILITIES = [
  { caption: "SMART CLASSROOMS", tone: "green", title: "Smart Classrooms", desc: "Digital teaching aids in every classroom, used alongside — not instead of — the blackboard." },
  { caption: "SCIENCE LABORATORIES", tone: "gold", title: "Science Laboratories", desc: "Dedicated Physics, Chemistry, and Biology labs for hands-on learning from Class VI." },
  { caption: "COMPUTER LAB", tone: "paper", title: "Computer Lab", desc: "A dedicated lab for practical computer literacy classes." },
  { caption: "LIBRARY", tone: "green", title: "Library", desc: "A quiet reading space stocked for every reading level, from KG picture books to board-exam reference texts." },
  { caption: "SPORTS GROUNDS", tone: "gold", title: "Sports & Play Grounds", desc: "Outdoor grounds for athletics and team sports, part of the weekly timetable." },
  { caption: "ARTS & ACTIVITY ROOMS", tone: "paper", title: "Arts & Activity Rooms", desc: "Dedicated space for art, music, and club activities outside the core timetable." },
];

export default function Facilities() {
  return (
    <>
      <PageHero
        kicker="Facilities"
        title="A campus built for how children actually learn."
        subtitle="Classrooms, labs, library, sports grounds, and the spaces in between."
        crumbLabel="Facilities"
      />

      <section className="section-paper">
        <div className="wrap">
          <div className="grid-3">
            {FACILITIES.map((f) => (
              <div key={f.title}>
                <PhotoBlock caption={f.caption} tone={f.tone} />
                <h3 style={{ marginTop: 14 }}>{f.title}</h3>
                <p className="small">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="placeholder-note" style={{ marginTop: 30 }}>
            Replace each placeholder block above with real campus
            photography before launch (see content checklist in the
            Master Architecture document).
          </p>
        </div>
      </section>
    </>
  );
}
