// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../style.css";

// Assets
import heroVideo from "../assets/home.mp4";
import img2 from "../assets/goddess1.jpg";
import img3 from "../assets/goddess2.jpg";

// Components
import BackgroundLayers from "../components/BackgroundLayers";
import FestivalTimeline from "../components/FestivalTimeline";
import PriestCard from "../components/PriestCard";
import Testimonials from "../components/Testimonials";

export default function Home() {
  // Scroll animation
  useEffect(() => {
    const items = Array.from(document.querySelectorAll("[data-ani]"));
    function onScroll() {
      const top = window.innerHeight * 0.85;
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < top) el.classList.add("show");
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Priest data
  const priests = [
    {
      name: "ശ്രീ. ഹരിദാസ് പണ്ടാരത്തിൽ",
      experience: "18 വർഷങ്ങൾ",
      desc: "നെടുമൺ മഠം",
    },
    {
      name: "ക്ഷേത്ര മേൽശാന്തി ",
      experience: "ശ്രീ. ഹരികൃഷ്ണൻ പൊറ്റി",
      
    },
    {
      name: "രക്ഷാദികാരി ",
      experience: "ശ്രീ.  ജി. സുഗതൻ ",
      desc : "ശ്രീ. ആർ. ശ്രീധരൻ ",
     
    },
    

  ];

  // Testimonials
  const testimonials = [
    { who: "Sajith", text: "Calm, traditional and spiritual atmosphere." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Satheesh Kumar", text: "Beautiful place, well maintained." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
    { who: "Renjith", text: "Blessings for health, wealth & protection." },
  ];

  // Temple Timing (NEW SECTION)
  const templeTiming = [
    {
      day: "SUNDAY",
      time1: "05:30 AM – 10:00 AM",
      time2: "05:30 PM – 08:00 PM",
    },
    {
      day: "MONDAY",
      time1: "05:30 AM – 10:00 AM",
      time2: "05:30 PM – 08:00 PM",
    },
    {
      day: "TUESDAY",
      time1: "05:30 AM – 10:00 AM",
      time2: "05:30 PM – 08:00 PM",
    },
    {
      day: "WEDNESDAY",
      time1: "05:30 AM – 10:00 AM",
      time2: "05:30 PM – 08:00 PM",
    },
    {
      day: "THURSDAY",
      time1: "05:30 AM – 10:00 AM",
      time2: "05:30 PM – 08:00 PM",
    },
    {
      day: "FRIDAY",
      time1: "05:30 AM – 10:00 AM",
      time2: "05:30 PM – 08:00 PM",
    },
    {
      day: "SATURDAY",
      time1: "05:30 AM – 10:00 AM",
      time2: "05:30 PM – 08:00 PM",
    },
  ];

  return (
    <div className="home-premium">
      {/* Background Video */}
      <div className="about-video-bg">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <BackgroundLayers />

      <div className="container page-container">
        {/* HERO */}
        <section className="hero-banner" aria-label="hero">
          <div className="hero-content" data-ani="zoom">
            <div className="hero-left">
              <h1 className="hero-title">
                <b>Welcome to</b> കാവിൽ ഭഗവതി
              </h1>
              <p className="hero-sub">
                Experience peace, divinity and the blessings of Devi.
              </p>

              <div className="hero-buttons">
                <Link to="/book-pooja" className="btn-primary">
                  Book Pooja
                </Link>
                <Link to="/donate" className="btn-primary">
                  Donate
                </Link>
              </div>
              <br />
            </div>

            <div className="hero-right">
              <div className="hero-card responsive-images">
                <img src={img2} alt="Temple" className="hero-img" />
                <img src={img3} alt="Temple" className="hero-img" />
              </div>
            </div>
          </div>
        </section>

        <div className="Back">
          {/* SERVICES */}
          <section className="services-container" data-ani="left">
            <h3 className="section-title">Popular Poojas & Services</h3>

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

          {/* TEMPLE TIMINGS (NEW) */}
          <section className="services-container" data-ani="zoom">
            <h3 className="section-title">Temple Timings</h3>

            <div className="timing-grid">
              {templeTiming.map((t) => (
                <div key={t.day} className="timing-card gold-card">
                  <h4>{t.day}</h4>
                  <p>{t.time1}</p>
                  <p>{t.time2}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FESTIVAL + PRIEST */}
          <div className="festival-priest-layout" style={{ marginTop: 26 }}>
            <div data-ani="left">
              <h3 className="section-title">Upcoming Festivals</h3>
              <FestivalTimeline />
            </div>

            <aside data-ani="right">
              <h3 className="section-title">ക്ഷേത്ര തന്ത്രി</h3>

              <div className="priest-list">
                {priests.map((p) => (
                  <PriestCard key={p.name} {...p} />
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* TESTIMONIALS */}
      <section style={{ marginTop: 20 }} data-ani="zoom">
        <h3 className="section-title">Testimonials</h3>
        <Testimonials items={testimonials} />
      </section>
      {/* TEMPLE MAP SECTION */}
      <section className="map-section" data-ani="zoom">
        <h3 className="section-title">Temple Location</h3>

        <div className="map-card gold-card">
          <p style={{ marginBottom: 10, color: "#000000ff" }}>
            Visit Pangodu Kavil Sree Bhagavathy Temple and receive Devi's divine
            blessings.
          </p>

          <div className="map-wrapper">
            <iframe
              title="temple-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8137696934835!2d76.96906587445977!3d8.50469259383659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ba49dfce3c8d%3A0x3d7e90c9c9d6dd72!2sPangodu%20Kavil%20Sree%20Bhagavathy%20Temple!5e0!3m2!1sen!2sin!4v1733748502001!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p style={{ marginTop: 10, color: "#000000ff" }}>
            <b>Address:</b> Pangodu, Kerala, India
          </p>

          {/* OPTIONAL: Directions Button */}
          <a
            href="https://maps.app.goo.gl/DnwcwLyyjQVRETkW6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: 12, display: "inline-block" }}
          >
            📍 Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
