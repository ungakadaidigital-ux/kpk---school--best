import { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabaseClient.js";

const STATUSES = ["new", "contacted", "enrolled", "closed"];

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  async function fetchInquiries() {
    setLoading(true);
    setError("");
    const { data, error: fetchError } = await supabase
      .from("admission_inquiries")
      .select("*")
      .order("created_at", { ascending: false });

    setLoading(false);

    if (fetchError) {
      setError(
        "Could not load inquiries. Make sure the admission_inquiries table exists and this account has read access (see db/schema.sql)."
      );
      // eslint-disable-next-line no-console
      console.error(fetchError);
      return;
    }
    setInquiries(data ?? []);
  }

  async function updateStatus(id, newStatus) {
    setUpdatingId(id);
    const { error: updateError } = await supabase
      .from("admission_inquiries")
      .update({ status: newStatus })
      .eq("id", id);
    setUpdatingId(null);

    if (updateError) {
      // eslint-disable-next-line no-console
      console.error(updateError);
      return;
    }
    setInquiries((rows) =>
      rows.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  }

  const stats = useMemo(() => {
    const total = inquiries.length;
    const newCount = inquiries.filter((i) => i.status === "new").length;
    const contacted = inquiries.filter((i) => i.status === "contacted").length;
    return { total, newCount, contacted };
  }, [inquiries]);

  return (
    <>
      <div className="admin-toolbar">
        <h2 className="mt-0" style={{ margin: 0 }}>Admission Inquiries</h2>
        <button className="btn btn-outline-dark" onClick={fetchInquiries} disabled={loading}>
          {loading ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="n">{stats.total}</div>
          <div className="l">Total Inquiries</div>
        </div>
        <div className="admin-stat-card">
          <div className="n">{stats.newCount}</div>
          <div className="l">Awaiting Follow-up</div>
        </div>
        <div className="admin-stat-card">
          <div className="n">{stats.contacted}</div>
          <div className="l">Contacted</div>
        </div>
      </div>

      {error && <div className="admin-error">{error}</div>}

      {!error && !loading && inquiries.length === 0 && (
        <p className="small">No admission inquiries yet.</p>
      )}

      {!error && inquiries.length > 0 && (
        <div className="ledger-wrap">
          <table className="ledger">
            <thead>
              <tr>
                <th>Received</th>
                <th>Parent / Guardian</th>
                <th>Student</th>
                <th>Class</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((row) => (
                <tr key={row.id}>
                  <td>{formatDate(row.created_at)}</td>
                  <td>{row.parent_name}</td>
                  <td>{row.student_name}</td>
                  <td>{row.class_applying}</td>
                  <td><a href={`tel:${row.phone}`}>{row.phone}</a></td>
                  <td>{row.email ? <a href={`mailto:${row.email}`}>{row.email}</a> : "—"}</td>
                  <td>
                    <select
                      className="status-select"
                      value={row.status ?? "new"}
                      disabled={updatingId === row.id}
                      onChange={(e) => updateStatus(row.id, e.target.value)}
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

function formatDate(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
