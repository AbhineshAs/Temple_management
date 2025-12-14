import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="nav-container">

      <div className="nav-inner">

        {/* LOGO */}
        <div className="nav-logo">
          <span className="logo-icon">🕉</span>
          <div>
            <div className="logo-main"><b>കാവിൽ ഭഗവതി</b></div><br></br>
            
          </div>
        </div>

        {/* DESKTOP MENU */}
        <nav className="nav-links">
          <Link className={loc.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/book-pooja">Book Pooja</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/donate">Donate</Link>
          <Link to="/events">Events</Link>
          <Link to="/admin-login">Admin</Link>

          <a href="tel:+919746269438" className="btn small-btn">Call</a>
          <Link to="/book-pooja" className="btn primary-btn">Book Now</Link>
        </nav>

        {/* MOBILE TOGGLE BUTTON */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/book-pooja" onClick={() => setOpen(false)}>Book Pooja</Link>
        <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
        <Link to="/donate" onClick={() => setOpen(false)}>Donate</Link>
        <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
        <Link to="/admin-login" onClick={() => setOpen(false)}>Admin</Link>

        <a href="tel:+919746269438" className="mobile-btn-call">📞 Call</a>
        <Link to="/book-pooja" className="mobile-btn-book">Book Now</Link>
      </div>

    </header>
  );
}
