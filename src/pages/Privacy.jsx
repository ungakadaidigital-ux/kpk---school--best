import PageHero from "../components/ui/PageHero.jsx";

export default function Privacy() {
  return (
    <>
      <PageHero
        kicker="Privacy Policy"
        title="Privacy Policy & Terms of Use"
        subtitle="How information submitted through this website is collected and used."
        crumbLabel="Privacy Policy"
      />

      <section className="section-paper">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <h2>Privacy Policy</h2>
          <p>
            KPK National Matriculation School collects information
            submitted through the Admission Inquiry and Contact forms on
            this website &mdash; including parent/guardian name, student
            name, phone number, email address, and class applied for
            &mdash; solely to respond to admission and general inquiries.
          </p>
          <p>
            This information is stored securely and is not sold or
            shared with third parties. It is used only by the
            school&rsquo;s admissions office and administrative staff.
          </p>
          <p className="placeholder-note">
            This is a starting template. Have the school&rsquo;s
            management review and finalise this policy &mdash; including
            data retention period and any references to the Digital
            Personal Data Protection Act, 2023 &mdash; before launch.
          </p>

          <h2 id="terms" style={{ marginTop: 44 }}>
            Terms of Use
          </h2>
          <p>
            This website is provided for informational purposes by KPK
            National Matriculation School. Submitting an inquiry form
            does not guarantee admission; all admissions are subject to
            the school&rsquo;s standard process and seat availability.
          </p>
          <p className="placeholder-note">
            Have the school&rsquo;s management review and finalise these
            terms before launch.
          </p>
        </div>
      </section>
    </>
  );
}
