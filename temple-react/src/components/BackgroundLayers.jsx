// src/components/BackgroundLayers.jsx
import React from "react";
import "./../style.css";

export default function BackgroundLayers() {
  return (
    <div className="background-layers" aria-hidden>
      <div className="mandala-bg"></div>
      <div className="vignette"></div>
      <div className="gold-dust"></div>
      <div className="saffron-overlay"></div>

      <div className="diya" style={{left: "8%", bottom: "-20px"}}></div>
      <div className="diya" style={{left: "28%", bottom: "-30px", animationDelay: "2s"}}></div>
      <div className="diya" style={{left: "50%", bottom: "-20px", animationDelay: "1s"}}></div>
      <div className="diya" style={{left: "72%", bottom: "-18px", animationDelay: "3s"}}></div>
      <div className="diya" style={{left: "90%", bottom: "-26px", animationDelay: "4s"}}></div>
    </div>
  );
}
