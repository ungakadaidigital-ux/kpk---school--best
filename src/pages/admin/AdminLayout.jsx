import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient.js";
import "../../styles/admin.css";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="admin-shell">
      <div className="admin-topbar">
        <div className="brand">
          <span className="crest">KPK</span>
          <span>Admin Dashboard</span>
        </div>
        <button className="btn btn-outline-light" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
