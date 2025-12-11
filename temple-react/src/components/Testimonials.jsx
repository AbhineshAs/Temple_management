// src/components/Testimonials.jsx
import React, { useEffect, useRef } from "react";

export default function Testimonials({ items = [] }) {
  const idx = useRef(0);
  const el = useRef();
  useEffect(() => {
    const t = setInterval(() => {
      idx.current = (idx.current + 1) % items.length;
      if (el.current) {
        el.current.style.transform = `translateX(-${idx.current * 100}%)`;
      }
    }, 3500);
    return () => clearInterval(t);
  }, [items.length]);

  return (
    <div style={{overflow:"hidden", borderRadius:12, boxShadow:"0 10px 30px rgba(0,0,0,0.08)"}}>
      <div style={{display:"flex", width:`${items.length * 100}%`, transition:"transform .6s ease"}} ref={el}>
        {items.map((t, i) => (
          <div key={i} style={{minWidth:"100%", padding:24, background:"#fff"}}>
            <p style={{fontSize:18, fontWeight:600, color:"#333"}}>"{t.text}"</p>
            <div style={{marginTop:12, color:"#777"}}>— {t.who}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
