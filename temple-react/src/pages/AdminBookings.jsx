// src/pages/AdminBookings.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const q = query(
      collection(db, "poojaBookings"),
      orderBy("timestamp", "desc")
    );

    const snap = await getDocs(q);
    setBookings(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const updateStatus = async (id, status) => {
    await updateDoc(doc(db, "poojaBookings", id), { status });
    loadBookings();
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Are you sure you want to delete this booking?")) return;

    await deleteDoc(doc(db, "poojaBookings", id));
    loadBookings();
  };

  return (
    <div className="page" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Pooja Bookings</h2>

      {/* RESPONSIVE TABLE WRAPPER */}
      <div
        style={{
          overflowX: "auto",
          background: "#fff",
          padding: 16,
          borderRadius: 12,
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <table className="admin-table" style={{ width: "100%", minWidth: 700 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Nakshatra</th>
              <th>Pooja</th>
              <th>Date</th>
              <th>Status</th>
              <th style={{ width: 240 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.nakshatra}</td>
                <td>{b.poojaType}</td>
                <td>{b.date || "-"}</td>

                <td style={{ textTransform: "capitalize" }}>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: 6,
                      fontWeight: 600,
                      color:
                        b.status === "approved"
                          ? "#0b6e22"
                          : b.status === "rejected"
                          ? "#8a0b0b"
                          : "#444",
                      background:
                        b.status === "approved"
                          ? "#d2f5d8"
                          : b.status === "rejected"
                          ? "#f7d2d2"
                          : "#eaeaea",
                    }}
                  >
                    {b.status}
                  </span>
                </td>

                <td style={{ whiteSpace: "nowrap" }}>
                  {b.status !== "approved" && (
                    <button
                      className="btn primary"
                      style={{
                        padding: "6px 10px",
                        marginRight: 6,
                        fontSize: 13,
                      }}
                      onClick={() => updateStatus(b.id, "approved")}
                    >
                      Approve
                    </button>
                  )}

                  {b.status !== "rejected" && (
                    <button
                      className="btn ghost"
                      style={{
                        padding: "6px 10px",
                        marginRight: 6,
                        fontSize: 13,
                      }}
                      onClick={() => updateStatus(b.id, "rejected")}
                    >
                      Reject
                    </button>
                  )}

                  <button
                    className="btn delete"
                    style={{
                      padding: "6px 10px",
                      background: "#ffefef",
                      border: "1px solid #ffbcbc",
                      color: "#d60000",
                      fontSize: 13,
                    }}
                    onClick={() => deleteBooking(b.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: 22 }}>
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MOBILE FRIENDLY NOTE */}
      <p
        style={{
          textAlign: "center",
          marginTop: 15,
          opacity: 0.8,
          fontSize: 14,
        }}
      >
        
      </p>
    </div>
  );
}
