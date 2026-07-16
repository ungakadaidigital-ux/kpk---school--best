import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient.js";
import { useAuth } from "../../lib/AuthContext.jsx";
import "../../styles/admin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { session } = useAuth();

  // Already signed in — skip straight to the dashboard.
  if (session) {
    const redirectTo = location.state?.from?.pathname ?? "/admin/dashboard";
    navigate(redirectTo, { replace: true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setSubmitting(false);

    if (signInError) {
      setError("Incorrect email or password. Please try again.");
      return;
    }

    navigate("/admin/dashboard", { replace: true });
  };

  return (
    <div className="admin-login-wrap">
      <div className="admin-login-card">
        <h1>KPK Admin</h1>
        <p className="sub">Sign in to view admission inquiries.</p>

        {error && <div className="admin-error">{error}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="admin-email">Email</label>
            <input
              type="email"
              id="admin-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />
          </div>
          <div className="form-row">
            <label htmlFor="admin-password">Password</label>
            <input
              type="password"
              id="admin-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="btn btn-marigold" style={{ width: "100%", justifyContent: "center" }} disabled={submitting}>
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>
        <p className="small" style={{ marginTop: 18 }}>
          Admin accounts are created in the Supabase Dashboard under
          Authentication → Users. There is no public sign-up.
        </p>
      </div>
    </div>
  );
}

