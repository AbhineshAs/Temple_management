// src/components/PriestCard.jsx
import React from "react";

export default function PriestCard({ name, experience, specialization, desc }) {
  return (
    <div className="admin-card" style={{textAlign:"left", marginBottom: 14}}>
      <div style={{fontSize:18, fontWeight:800, color:"#c66d00"}}>{name}</div>
      <div style={{fontSize:13, color:"#666", marginTop:6}}>{specialization} • {experience}</div>
      <p style={{marginTop:8, color:"#333"}}>{desc}</p>
      <div style={{marginTop:10, display:"flex", gap:8}}>
        
      </div>
    </div>
  );
}
