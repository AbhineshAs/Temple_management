import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase";

// Calendar
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (d) => startOfWeek(d, { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    desc: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    onSnapshot(collection(db, "events"), (snap) => {
      setEvents(
        snap.docs.map((d) => {
          const e = d.data();
          return {
            id: d.id,
            title: e.title,
            desc: e.desc,
            start: e.start.toDate(),
            end: e.end.toDate(),
          };
        })
      );
    });
  }, []);

  const saveEvent = async (e) => {
    e.preventDefault();

    const data = {
      title: form.title,
      desc: form.desc,
      start: new Date(form.start),
      end: new Date(form.end),
      timestamp: new Date(),
    };

    if (editId) {
      await updateDoc(doc(db, "events", editId), data);
      alert("Event Updated");
    } else {
      await addDoc(collection(db, "events"), data);
      alert("Event Added");
    }

    setForm({ title: "", desc: "", start: "", end: "" });
    setEditId(null);
  };

  const editEvent = (ev) => {
    setEditId(ev.id);

    setForm({
      title: ev.title,
      desc: ev.desc,
      start: ev.start.toISOString().slice(0, 16),
      end: ev.end.toISOString().slice(0, 16),
    });
  };

  const deleteEvent = async (id) => {
    if (window.confirm("Delete this event?")) {
      await deleteDoc(doc(db, "events", id));
    }
  };

  return (
    <div className="page">
      <h1>Manage Events</h1>

      {/* Event Form */}
      <form
        onSubmit={saveEvent}
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 20,
          padding: 10,
          background: "#fff",
          borderRadius: 10,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
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
          placeholder="Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />

        <button className="btn primary">
          {editId ? "Update Event" : "Add Event"}
        </button>
      </form>

      {/* Events Table */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Start</th>
            <th>End</th>
            <th>Description</th>
            <th>Action</th>
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
                <button className="btn-edit" onClick={() => editEvent(ev)}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => deleteEvent(ev.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Calendar */}
      <div style={{ height: 600, marginTop: 20 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
}
