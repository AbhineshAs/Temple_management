// src/components/FestivalTimeline.jsx
import React from "react";

export default function FestivalTimeline() {
  const festivals = [
    { date: "2025-12-24", title: "Navaratri Celebrations", desc: "Nine days of devotional events & homams." },
    { date: "2026-01-14", title: "Makara Vilakku", desc: "Special bhajans and abhishekams." },
    { date: "2026-02-15", title: "Kumbhabhishekam", desc: "Temple anniversary & consecration rites." }
  ];

  return (
    <div className="festival-timeline">
      {festivals.map((f, i) => (
        <div className="f-item" key={i}>
          <h4>{f.title} — <small style={{color:"#333",fontWeight:600}}>{f.date}</small></h4>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
