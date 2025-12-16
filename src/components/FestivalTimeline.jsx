// src/components/FestivalTimeline.jsx
import React from "react";

export default function FestivalTimeline() {
  const festivals = [
    { date: "2026-03-26 to 2026-03-29 ", title: "കൊട മഹോത്സവം 2026 ", desc: "മാർച്ച്‌ 26 മുതൽ 29 വരെ" },
    
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
