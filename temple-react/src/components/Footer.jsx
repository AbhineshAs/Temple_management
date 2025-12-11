import React from "react";
import { 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaYoutube,
  FaEnvelope 
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-column">
          <h3 className="footer-title">കാവിൽ ഭഗവതി</h3>
          <p className="footer-sub">A centre of devotion and community</p>

          <div className="footer-social">
            <a href="https://www.facebook.com/groups/pangodesreekavilbhagavathy/"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* MIDDLE – QUICK LINKS */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Temple</a></li>
            <li><a href="/festival">Festivals</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* RIGHT SIDE – CONTACT */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>

          <p className="footer-contact">
            <FaPhoneAlt /> &nbsp;
            <a href="tel:+919746269438">+91 97462 69438</a>
          </p>

          <p className="footer-contact">
            <FaEnvelope /> &nbsp;
            <a href="mailto:pangodkavilbhagavathitempletru@gmail.com">
              pangodkavilbhagavathitempletru@gmail.com
            </a>
          </p>

          <p className="footer-contact">
            <FaMapMarkerAlt /> &nbsp;
            Pangodu Kavil Bhagavathy Temple<br />
            Pangodu, Thiruvananthapuram, Kerala
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* COPYRIGHT ROW */}
      <div className="footer-bottom">
        <p>© {year} കാവിൽ ഭഗവതി — All Rights Reserved</p>
      </div>
    </footer>
  );
}
