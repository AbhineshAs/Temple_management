// src/pages/Services.jsx
import React from "react";
import useScrollAnimations from "../utils/useScrollAnimations";
import BackgroundLayers from "../components/BackgroundLayers";

export default function Services() {
  useScrollAnimations();

  return (
    <>
      <BackgroundLayers />

      <div className="page-container">
        <h2 className="section-title" data-ani="zoom">
          Temple Services & Poojas
        </h2>

        <div className="services-grid">

           <section className="services-container" data-ani="left">
           

            <div className="services-grid">
             <div className="service-card">ഭഗവതി സേവ</div>
              <div className="service-card">കലശപൂജ</div>
              <div className="service-card">അയില്യപൂജ</div>
              <div className="service-card">ഗണപതി ഹോമം</div>
              <div className="service-card">മൃത്യുഞ്ജയ ഹോമം</div>
              <div className="service-card">നാഗാരൂട്ട്</div>
              <div className="service-card">ജലധാര</div>
              <div className="service-card">വലിയ പുടുക്ക</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
