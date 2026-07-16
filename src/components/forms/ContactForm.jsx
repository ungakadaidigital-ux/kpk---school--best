import { useState } from "react";
import { supabase } from "../../lib/supabaseClient.js";

const EMPTY = { name: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus({ type: "err", message: "Please fill in all required fields." });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert([
      {
        name: form.name.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      },
    ]);
    setSubmitting(false);

    if (error) {
      // eslint-disable-next-line no-console
      console.error("contact_messages insert failed:", error);
      setStatus({
        type: "err",
        message: "Something went wrong sending your message. Please try calling the office instead.",
      });
      return;
    }

    setStatus({ type: "ok", message: "Thank you — your message has been sent to the school office." });
    setForm(EMPTY);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="c-name">
          Name <span className="req">*</span>
        </label>
        <input type="text" id="c-name" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="form-row">
        <label htmlFor="c-phone">
          Phone <span className="req">*</span>
        </label>
        <input type="tel" id="c-phone" name="phone" value={form.phone} onChange={handleChange} required />
      </div>
      <div className="form-row">
        <label htmlFor="c-message">
          Message <span className="req">*</span>
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-marigold" disabled={submitting}>
        {submitting ? "Sending…" : "Send Message"}
      </button>
      {status.type && <div className={`form-status show ${status.type}`}>{status.message}</div>}
    </form>
  );
}

