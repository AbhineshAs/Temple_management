import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="page" style={{ maxWidth: 900, margin: "auto" }}>
      <h1 style={{ marginBottom: 20, textAlign: "center" }}>
        Admin Dashboard
      </h1>

      <div className="admin-grid">
        <div className="admin-card">
          <h2>Pooja Bookings</h2>
          <p>Approve / Reject Pooja Requests</p>
          <Link to="/admin/bookings">
            <button className="btn primary">Manage Bookings</button>
          </Link>
        </div>

        <div className="admin-card">
          <h2>Donations</h2>
          <p>View Donation Records</p>
          <Link to="/admin/donations">
            <button className="btn primary">Manage Donations</button>
          </Link>
        </div>

        <div className="admin-card">
          <h2>Temple Events</h2>
          <p>Add, Edit, Delete Events</p>
          <Link to="/admin/events">
            <button className="btn primary">Manage Events</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
