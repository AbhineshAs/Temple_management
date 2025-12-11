// src/pages/EventsAdmin.jsx

import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

import "react-big-calendar/lib/css/react-big-calendar.css";

import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase";

// Calendar localization
const locales = {};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function EventsAdmin() {
  const [events, setEvents] = useState([]);

  const [form, setForm] = useState({
    title: "",
    start: "",
    end: "",
    desc: "",
  });

  const [editId, setEditId] = useState(null);

  // Load events from Firestore
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snap) => {
      const arr = snap.docs.map((d) => {
        const data = d.data();

        return {
          id: d.id,
          title: data.title,
          desc: data.desc || "",
          start: data.start?.toDate
            ? data.start.toDate()
            : new Date(data.start),
          end: data.end?.toDate ? data.end.toDate() : new Date(data.end),
        };
      });
      setEvents(arr);
    });

    return () => unsub();
  }, []);

  // Add or Update event
  async function saveEvent(e) {
    e.preventDefault();

    const payload = {
      title: form.title,
      desc: form.desc,
      start: new Date(form.start),
      end: new Date(form.end),
      timestamp: new Date(),
    };

    if (editId) {
      // UPDATE EVENT
      await updateDoc(doc(db, "events", editId), payload);
      alert("Event updated successfully");
    } else {
      // NEW EVENT
      await addDoc(collection(db, "events"), payload);
      alert("Event added successfully");
    }

    setForm({ title: "", start: "", end: "", desc: "" });
    setEditId(null);
  }

  // Edit event
  function handleEdit(ev) {
    setEditId(ev.id);
    setForm({
      title: ev.title,
      desc: ev.desc,
      start: ev.start.toISOString().slice(0, 16),
      end: ev.end.toISOString().slice(0, 16),
    });
  }

  // Delete event
  async function handleDelete(id) {
    if (!window.confirm("Delete this event?")) return;

    await deleteDoc(doc(db, "events", id));
  }

  return (
    <div className="page" data-aos="fade-up">
      <h2>Admin – Manage Temple Events</h2>

      {/* FORM */}
      <form
        onSubmit={saveEvent}
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          marginTop: 12,
        }}
      >
        <input
          required
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          required
          type="datetime-local"
          value={form.start}
          onChange={(e) => setForm({ ...form, start: e.target.value })}
        />

        <input
          required
          type="datetime-local"
          value={form.end}
          onChange={(e) => setForm({ ...form, end: e.target.value })}
        />

        <input
          placeholder="Short desc"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />

        <button className="btn primary" type="submit">
          {editId ? "Update Event" : "Add Event"}
        </button>
      </form>

      {/* EVENT TABLE */}
      <table className="admin-table" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start</th>
            <th>End</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {events.map((ev) => (
            <tr key={ev.id}>
              <td>{ev.title}</td>
              <td>{ev.start.toLocaleString()}</td>
              <td>{ev.end.toLocaleString()}</td>
              <td>{ev.desc}</td>

              <td>
                <button className="btn-edit" onClick={() => handleEdit(ev)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(ev.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CALENDAR */}
      <div style={{ height: 600, marginTop: 20 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
        />
      </div>
    </div>
  );
}
