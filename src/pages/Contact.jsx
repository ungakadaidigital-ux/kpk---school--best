import PageHero from "../components/ui/PageHero.jsx";
import Ledger from "../components/ui/Ledger.jsx";
import ContactForm from "../components/forms/ContactForm.jsx";
import { SITE } from "../data/site.js";

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="We're happy to answer any question."
        subtitle="Reach the school office directly, or send a message using the form below."
        crumbLabel="Contact"
      />

      <section className="section-paper">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "flex-start" }}>
            <div>
              <span className="kicker">Reach Us</span>
              <h2 className="mt-0">School Office</h2>
              <Ledger
                style={{ marginBottom: 24 }}
                headers={["Field", "Detail"]}
                rows={[
                  ["Address", <>Tiruppur, Tamil Nadu, India <span className="placeholder-note">(add full address)</span></>],
                  ["Phone", <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>],
                  ["WhatsApp", <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>],
                  ["Email", <a href={`mailto:${SITE.email}`}>{SITE.email}</a>],
                  ["Office Hours", "Monday – Saturday, 9:00 AM – 4:00 PM"],
                ]}
              />
              <div className="photo-block paper-tone" style={{ aspectRatio: "16/9" }}>
                <div className="cap">MAP EMBED PLACEHOLDER — GOOGLE MAPS</div>
              </div>
            </div>
            <div className="form-card">
              <h3 className="mt-0">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
