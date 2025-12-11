import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  orderBy,
  query,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

export default function AdminDonations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    loadDonations();
  }, []);

  const loadDonations = async () => {
    const q = query(collection(db, "donations"), orderBy("timestamp", "desc"));
    const snap = await getDocs(q);

    setDonations(
      snap.docs.map((d) => ({ id: d.id, ...d.data() }))
    );
  };

  const deleteDonation = async (id) => {
    if (!window.confirm("Are you sure you want to delete this donation?")) return;

    await deleteDoc(doc(db, "donations", id));
    loadDonations();
  };

  return (
    <div className="page">
      <h1>Donations</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Spouse</th>
            <th>Amount</th>
            <th>Date</th>
            <th style={{ width: "140px" }}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {donations.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>
              <td>{d.spouse || "-"}</td>
              <td>₹{d.amount}</td>
              <td>{d.timestamp?.toDate().toLocaleString()}</td>

              <td>
                <button
                  className="btn-delete"
                  onClick={() => deleteDonation(d.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {donations.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center", padding: 20 }}>
                No donation records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
