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
              <div className="service-card">Bhagavathi Seva</div>
              <div className="service-card">Kalasha Pooja</div>
              <div className="service-card">Ayillya Pooja</div>
              <div className="service-card">Ganapathi Homam</div>
              <div className="service-card">Mrithunjaya Homam</div>
              <div className="service-card">Nagaroott</div>
              <div className="service-card">Jaladhara</div>
              <div className="service-card">Valiya Pudukka</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
