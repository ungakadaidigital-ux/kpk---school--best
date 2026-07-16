import PageHero from "../components/ui/PageHero.jsx";
import AdmissionForm from "../components/forms/AdmissionForm.jsx";

export default function Admissions() {
  return (
    <>
      <PageHero
        kicker="Admissions"
        title="Admissions are open for the new academic year."
        subtitle="Submit an inquiry below and our admissions office will contact you within 1–2 working days."
        crumbLabel="Admissions"
      />

      <section className="section-paper" id="process">
        <div className="wrap">
          <div className="grid-2">
            <div>
              <span className="kicker">How It Works</span>
              <h2 className="mt-0">Admission Process</h2>
              <ul className="tick-list">
                <li>Submit an online inquiry using the form, or visit the school office directly.</li>
                <li>Our admissions office contacts you to confirm class availability.</li>
                <li>Submit required documents (birth certificate, transfer certificate if applicable, previous mark sheets).</li>
                <li>Meet with the admissions team / attend a brief assessment, where applicable.</li>
                <li>Confirm the seat by completing enrolment formalities.</li>
              </ul>
            </div>
            <div id="fees">
              <span className="kicker">Fee Enquiry</span>
              <h2 className="mt-0">Fee Structure</h2>
              <p>
                Fee details vary by class and are shared directly with
                families during the inquiry process.{" "}
                <span className="placeholder-note">
                  Decide with school management whether to publish exact
                  fees here or keep this inquiry-only, per the Master
                  Architecture content checklist.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="ruled"></div>

      <section className="section-dim">
        <div className="wrap">
          <div className="grid-2" style={{ alignItems: "flex-start" }}>
            <div>
              <span className="kicker">Apply Online</span>
              <h2 className="mt-0">Admission Inquiry Form</h2>
              <p>
                Fields marked <span className="req">*</span> are required.
                Submitting this form does not confirm a seat &mdash; our
                office will follow up to complete the process.
              </p>
            </div>
            <div className="form-card">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
