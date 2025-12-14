import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.css";

// User Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Donation from "./pages/Donation";
import PoojaBooking from "./pages/PoojaBooking";
import EventsUser from "./pages/EventsUser";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminBookings from "./pages/AdminBookings";
import AdminDonations from "./pages/AdminDonations";
import AdminEvents from "./pages/AdminEvents";

// Firebase
import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";

function AdminRoute({ children }) {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      if (!user) return setAllowed(false);

      const snap = await getDoc(doc(db, "admins", user.uid));
      setAllowed(snap.exists());
    });

    return () => unsub();
  }, []);

  if (allowed === null)
    return <h2 style={{ textAlign: "center" }}>Checking admin…</h2>;
  if (!allowed)
    return <h2 style={{ textAlign: "center" }}>Access Denied</h2>;

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Routes>

          {/* USER ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/book-pooja" element={<PoojaBooking />} />
          <Route path="/events" element={<EventsUser />} />

          {/* ADMIN LOGIN */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* ADMIN DASHBOARD */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          {/* ADMIN PANELS */}
          <Route
            path="/admin/bookings"
            element={
              <AdminRoute>
                <AdminBookings />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/donations"
            element={
              <AdminRoute>
                <AdminDonations />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/events"
            element={
              <AdminRoute>
                <AdminEvents />
              </AdminRoute>
            }
          />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
