import { useState } from "react";
import { supabase } from "../../lib/supabaseClient.js";

const CLASS_OPTIONS = [
  "Kindergarten",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
];

const EMPTY_FORM = {
  parent_name: "",
  student_name: "",
  phone: "",
  email: "",
  class_applying: "",
  academic_year: "",
  message: "",
};

/**
 * Admission Inquiry form. On submit, inserts a row into the
 * `admission_inquiries` table in Supabase (see db/schema.sql).
 * A database webhook/Edge Function is the recommended place to trigger
 * the MSG91 WhatsApp/SMS + email alert described in the Master
 * Architecture document — keeping that server-side avoids exposing
 * MSG91 credentials in the browser.
 */
export default function AdmissionForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const required = ["parent_name", "student_name", "phone", "class_applying"];
    const missing = required.some((field) => !form[field].trim());
    if (missing) {
      setStatus({
        type: "err",
        message: "Please fill in all required fields before submitting.",
      });
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, message: "" });

    const { error } = await supabase.from("admission_inquiries").insert([
      {
        parent_name: form.parent_name.trim(),
        student_name: form.student_name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        class_applying: form.class_applying,
        academic_year: form.academic_year.trim() || null,
        message: form.message.trim() || null,
        status: "new",
      },
    ]);

    setSubmitting(false);

    if (error) {
      // eslint-disable-next-line no-console
      console.error("admission_inquiries insert failed:", error);
      setStatus({
        type: "err",
        message:
          "Something went wrong submitting your inquiry. Please try again, or call the school office directly.",
      });
      return;
    }

    setStatus({
      type: "ok",
      message:
        "Thank you — your inquiry has been received. Our admissions office will contact you within 1–2 working days.",
    });
    setForm(EMPTY_FORM);
  };

  return (
    <form id="admission-form" noValidate onSubmit={handleSubmit}>
      <div className="form-two">
        <div className="form-row">
          <label htmlFor="parent-name">
            Parent / Guardian Name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="parent-name"
            name="parent_name"
            value={form.parent_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="student-name">
            Student Name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="student-name"
            name="student_name"
            value={form.student_name}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-two">
        <div className="form-row">
          <label htmlFor="phone">
            Phone Number <span className="req">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-two">
        <div className="form-row">
          <label htmlFor="class">
            Class Applying For <span className="req">*</span>
          </label>
          <select
            id="class"
            name="class_applying"
            value={form.class_applying}
            onChange={handleChange}
            required
          >
            <option value="">Select class</option>
            {CLASS_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="year">Academic Year</label>
          <input
            type="text"
            id="year"
            name="academic_year"
            placeholder="e.g., 2026–27"
            value={form.academic_year}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="message">Message (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-marigold" disabled={submitting}>
        {submitting ? "Submitting…" : "Submit Inquiry"}
      </button>

      {status.type && (
        <div className={`form-status show ${status.type}`}>{status.message}</div>
      )}
    </form>
  );
}
