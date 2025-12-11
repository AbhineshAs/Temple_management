import React from "react";

export default function BackgroundGlobal() {
  return (
    <div className="background-layers">

      {/* Global Video Background */}
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/home.mp4" type="video/mp4" />
      </video>

      {/* Mandala */}
      <div className="mandala-bg"></div>

      {/* Gold Dust */}
      <div className="gold-dust"></div>

      {/* Saffron Overlay */}
      <div className="saffron-overlay"></div>

      {/* Floating Diyas */}
      <div className="diya"></div>
      <div className="diya"></div>
      <div className="diya"></div>
      <div className="diya"></div>
      <div className="diya"></div>
    </div>
  );
}
