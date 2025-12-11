import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const locales = {};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (d) => startOfWeek(d, { weekStartsOn: 1 }),
  getDay,
  locales,
});

export default function EventsUser() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snap) => {
      setEvents(
        snap.docs.map((d) => {
          const e = d.data();
          return {
            id: d.id,
            title: e.title,
            start: e.start.toDate ? e.start.toDate() : new Date(e.start),
            end: e.end.toDate ? e.end.toDate() : new Date(e.end),
            desc: e.desc,
          };
        })
      );
    });

    return () => unsub();
  }, []);

  return (
    <div className="page">
      <h2>Temple Events Calendar</h2>

      <div style={{ height: 600, marginTop: 30 }}>
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
