import React, { useState } from "react";
import QRCode from "react-qr-code";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

// ------------------------------------------------------------
//  FULL TEMPLE POOJA LIST (Grouped)
// ------------------------------------------------------------
const NAKSHATRAS = [
  "അശ്വതി",
  "ഭരണി",
  "കാർത്തിക",
  "രോഹിണി",
  "മകയിരം",
  "തിരുവാതിര",
  "പുണർതം",
  "പൂയം",
  "ആയില്ല്യം",
  "മകം",
  "പൂരം",
  "ഉത്രം",
  "അത്തം",
  "ചിത്തിര",
  "ചോതി",
  "വിശാഖം",
  "അനിഴം",
  "തൃക്കേട്ട",
  "മൂലം",
  "പൂരാടം",
  "ഉത്രാടം",
  "തിരുവോണം",
  "അവിട്ടം",
  "ചതയം",
  "പൂരുരുട്ടാതി",
  "ഉത്രട്ടാതി",
  "രേവതി",
];
const poojaGroups = {
  "Sree Bhadraa Devi": [
    { name: "Janmanakshathra Archana (ജൻമ നക്ഷത്രാർച്ചന)", price: 151 },
    { name: "Devimahathmya Archana (ശത്രുസംഹാരം)", price: 50 },
    { name: "Purushasooktha Archana (പുരുഷസൂക്തം)", price: 30 },
    { name: "Kumkumarchana (കുങ്കുമാർച്ചന)", price: 30 },
    { name: "Bhagyasooktha Archana (ഭാഗ്യസൂക്തം)", price: 30 },
    { name: "Ikkyamathya Sooktha Archana", price: 30 },
    { name: "Swayamvara Archana", price: 30 },
    { name: "Vidhya Sooktha Archana", price: 30 },
    { name: "Sahasranama Archana", price: 100 },
    { name: "Ashtothara Archana", price: 20 },
    { name: "Ishtasooktha Archana", price: 30 },
    { name: "Rekthapushpa Archana", price: 30 },
    { name: "Guruthi Pushpanjali", price: 50 },
    { name: "Bhadra Devi Sooktham", price: 50 },
    { name: "Bhadra Devi Kavacham", price: 50 },
    { name: "Karya Sidhi", price: 300 },
  ],

  "Sree Durga Devi": [
    { name: "Janmanakshathra Archana", price: 151 },
    { name: "Devimahathmya Archana", price: 50 },
    { name: "Purushasooktha Archana", price: 30 },
    { name: "Kumkumarchana", price: 30 },
    { name: "Bhagyasooktha Archana", price: 30 },
    { name: "Ikkyamathya Sooktha Archana", price: 30 },
    { name: "Swayamvara Archana", price: 30 },
    { name: "Vidhya Sooktha Archana", price: 30 },
    { name: "Sahasranama Archana", price: 100 },
    { name: "Ashtothara Archana", price: 20 },
    { name: "Ishtasooktha Archana", price: 30 },
    { name: "Rekthapushpa Archana", price: 30 },
    { name: "Guruthi Pushpanjali", price: 50 },
    { name: "Karya Sidhi", price: 300 },
    { name: "Drishti Manthra Archana + Guruthi Pushpanjali", price: 50 },
  ],

  Ganapathi: [
    { name: "Ganapathi Homam", price: 600 },
    { name: "Karuka Homam", price: 750 },
    { name: "Koottu Ganapathi Homam", price: 50 },
    { name: "Ganapathi Sooktham", price: 20 },
    { name: "Unniyappam", price: 500 },
    { name: "Modakam", price: 500 },
  ],

  Nagaraja: [
    { name: "Ayilya Pooja", price: 50 },
    { name: "Nagaroottu", price: 3000 },
    { name: "Nurum Palum", price: 50 },
    { name: "Ayilya Archana", price: 20 },
    { name: "Naga Sooktham Archana", price: 30 },
    { name: "Ashta Naga Manthra Archana", price: 30 },
  ],

  Mahadevan: [
    { name: "Mrithyunjaya Archana", price: 50 },
    { name: "Ayu Sooktha Archana", price: 50 },
    { name: "Sarppasooktha Archana", price: 30 },
    { name: "Purushasooktha Archana (Shiva)", price: 30 },
    { name: "Pancha Brahma Archana", price: 30 },
    { name: "Bhagyasooktha Archana (Shiva)", price: 30 },
    { name: "Sree Rudra Archana", price: 30 },
    { name: "Rudra Sooktha Archana", price: 30 },
    { name: "Sahasranama Archana (Shiva)", price: 30 },
    { name: "Ashtothara Archana (Shiva)", price: 20 },
    { name: "Koottu Mrithyunjaya Homam", price: 200 },
    { name: "Mrithyunjaya Homam", price: 8000 },
    { name: "Jaladhara (1 pot)", price: 50 },
    { name: "Jaladhara (9 pots)", price: 300 },
    { name: "Jaladhara (108 pots)", price: 1500 },
  ],

  "Special Poojas": [
    { name: "Aiswarya Pooja (Pournami)", price: 50 },
    { name: "Bhagavathi Seva", price: 1250 },
    { name: "Kadum Payasam", price: 150 },
    { name: "Pal Payasam", price: 150 },
    { name: "Kunjoonu", price: 251 },
    { name: "Mugha Charthu", price: 500 },
    { name: "Munvilakku", price: 500 },
    { name: "Vahana Pooja (Two Wheeler)", price: 101 },
    { name: "Vahana Pooja (Four Wheeler)", price: 250 },
    { name: "Wedding Pooja", price: 1001 },
    { name: "Navakalasham", price: 5000 },
    { name: "Ashtadravya Kalasham", price: 5000 },
    { name: "Kalabhishekam", price: 6000 },
    { name: "NIRAPARA", price: 101 },
    { name: "One Day Pooja", price: 5000 },
    { name: "Kalyana Kuri", price: 101 },
    { name: "Single Kalasham", price: 500 },
    { name: "Devi Mahatmya Parayanam", price: 2000 },
  ],
  Elankam: [
    { name: "Thatta pooja ", price: 0 },
    { name: "Bhasama ideel", price: 0 },
    { name: "Padukka pooja ", price: 0 },
  ],
};

// ---------- Temple UPI & WhatsApp (use country code for wa.me) ----------
const TEMPLE_UPI_ID = "110527913001199@cnrb";
const TEMPLE_WHATSAPP = "9746269438"; // include country code

// ------------------------------------------------------------
//  MAIN COMPONENT
// ------------------------------------------------------------
export default function PoojaBooking() {
  const [selectedPooja, setSelectedPooja] = useState(null);
  const [qrValue, setQrValue] = useState("");
  const [bookingId, setBookingId] = useState(null);
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [error, setError] = useState("");

  const [showModal, setShowModal] = useState(false); // modal state

  // ---------- Create UPI payment string ----------
  const createUpiPaymentString = ({ amount, note }) => {
    return `upi://pay?pa=${encodeURIComponent(
      TEMPLE_UPI_ID
    )}&pn=Sree%20Dev%20Temple&am=${amount}&cu=INR&tn=${encodeURIComponent(
      note
    )}`;
  };

  // ------------------------------------------------------------
  //  HANDLE SUBMIT
  // ------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPaymentConfirmed(false);

    const name = e.target.name.value.trim();
    const nakshatra = e.target.nakshatra.value.trim();
    const category = e.target.category.value;
    const poojaType = e.target.type.value;
    const date = e.target.date.value || "";
    const message = e.target.message.value.trim() || "";

    if (!category) return setError("Please select a category.");
    if (!poojaType) return setError("Please select a pooja.");

    const pooja = poojaGroups[category].find((p) => p.name === poojaType);

    try {
      setLoading(true);

      const docRef = await addDoc(collection(db, "poojaBookings"), {
        name,
        nakshatra,
        category,
        poojaType,
        date,
        message,
        amount: pooja.price,
        status: "payment-pending",
        timestamp: new Date(),
      });

      const booking = {
        id: docRef.id,
        name,
        nakshatra,
        category,
        poojaType,
        date,
        amount: pooja.price,
      };

      setBookingId(docRef.id);
      setBookingData(booking);

      const upiString = createUpiPaymentString({
        amount: pooja.price,
        note: `${poojaType} - ${name}`,
      });
      setQrValue(upiString);

      // show modal warning after QR generated
      setShowModal(true);
    } catch (err) {
      console.error(err);
      setError("Error creating booking!");
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------------------
  //  PAYMENT CONFIRM → WhatsApp Redirect + Firestore update
  // ------------------------------------------------------------
  const handlePaymentConfirm = async () => {
    if (!bookingId || !bookingData) return;

    try {
      setLoading(true);

      await updateDoc(doc(db, "poojaBookings", bookingId), {
        status: "approved",
        paymentReceived: true,
        paymentConfirmedAt: new Date(),
      });

      setPaymentConfirmed(true);

      const msg =
        `🕉️ *Pooja Booking Confirmed*\n\n` +
        `👤 *Name:* ${bookingData.name}\n` +
        `🌟 *Nakshatra:* ${bookingData.nakshatra}\n` +
        `🙏 *Pooja:* ${bookingData.poojaType}\n` +
        `💰 *Amount:* ₹${bookingData.amount}\n` +
        `📅 *Date:* ${bookingData.date || "Not Selected"}\n` +
        `🆔 *Booking ID:* ${bookingId}\n\n` +
        `📷 Please attach the payment screenshot for verification.`;

      // open WhatsApp with pre-filled message
      window.open(
        `https://wa.me/${TEMPLE_WHATSAPP}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    } catch (err) {
      console.error(err);
      setError("Failed to confirm payment!");
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------------------
  //  RESET
  // ------------------------------------------------------------
  const handleReset = () => {
    setSelectedPooja(null);
    setQrValue("");
    setBookingId(null);
    setBookingData(null);
    setPaymentConfirmed(false);
    setError("");
  };

  // ------------------------------------------------------------
  //  UI
  // ------------------------------------------------------------
  return (
    <div className="page" style={{ maxWidth: 750, margin: "auto" }}>
      {/* Embedded modal CSS so this file is standalone */}
      <style>{`
        /* Modal overlay */
        .pb-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .pb-modal-box {
          width: 92%;
          max-width: 420px;
          background: #fff;
          padding: 26px;
          border-radius: 14px;
          box-shadow: 0 14px 48px rgba(0,0,0,0.3);
          text-align: center;
          animation: pbPopup 0.28s ease;
        }
        .pb-warning-icon {
          font-size: 48px;
          margin-bottom: 8px;
          color: #d9830f;
        }
        .pb-modal-box h3 {
          margin: 6px 0 8px;
          color: #d9830f;
          font-size: 20px;
          font-weight: 800;
        }
        .pb-modal-box p {
          color: #333;
          font-size: 15px;
          line-height: 1.6;
        }
        .pb-modal-btn {
          margin-top: 18px;
          padding: 10px 22px;
          background: linear-gradient(135deg,#d4af37,#b8860b);
          border: none;
          color: #fff;
          border-radius: 9px;
          font-weight: 700;
          cursor: pointer;
          transition: transform .12s;
        }
        .pb-modal-btn:hover { transform: scale(1.02); }
        @keyframes pbPopup {
          from { transform: scale(.86); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Book a Pooja Online
      </h2>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="form"
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 14,
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        }}
      >
        <label>Full Name</label>
        <input name="name" required placeholder="Enter Full Name" />

        {/* ✅ ONLY CORRECTION HERE */}
        <label style={{ marginTop: 10 }}>Nakshatra</label>
        <select name="nakshatra" required>
          <option value="">Select Category</option>
          {NAKSHATRAS.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        {/* CATEGORY */}
        <label style={{ marginTop: 10 }}>Select Category</label>
        <select
          name="category"
          required
          onChange={() => setSelectedPooja(null)}
        >
          <option value="">-- Select Category --</option>
          {Object.keys(poojaGroups).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* POOJA */}
        <label style={{ marginTop: 10 }}>Select Pooja</label>
        <select
          name="type"
          required
          onChange={(e) => {
            const cat = e.target.form.category.value;
            const pooja = poojaGroups[cat]?.find(
              (p) => p.name === e.target.value
            );
            setSelectedPooja(pooja);
          }}
        >
          <option value="">-- Select Pooja --</option>
          {Object.entries(poojaGroups).map(([cat, items]) => (
            <optgroup key={cat} label={cat}>
              {items.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name} — ₹{p.price}
                </option>
              ))}
            </optgroup>
          ))}
        </select>

        {selectedPooja && (
          <p style={{ marginTop: 10, fontWeight: 700, color: "#b35a00" }}>
            Selected Pooja Fee — ₹{selectedPooja.price}
          </p>
        )}

        <label style={{ marginTop: 10 }}>Date of pooja</label>
        <input type="date" name="date" />

        <label style={{ marginTop: 10 }}>Special Request</label>
        <textarea
          name="message"
          rows="3"
          placeholder="Add any special request..."
        />

        <div style={{ marginTop: 15, display: "flex", gap: 10 }}>
          <button className="btn primary" disabled={loading}>
            {loading ? "Processing..." : "Generate QR"}
          </button>

          <button type="button" className="btn ghost" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {/* ERROR */}
      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: 12 }}>
          {error}
        </p>
      )}

      {/* QR SECTION */}
      {qrValue && bookingData && (
        <div style={{ marginTop: 30, textAlign: "center" }}>
          <h3>Scan & Pay (UPI)</h3>

          <div
            style={{
              marginTop: 15,
              display: "flex",
              gap: 20,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ background: "#fff", padding: 12, borderRadius: 8 }}>
              <QRCode value={qrValue} size={200} />
            </div>

            <div style={{ textAlign: "left" }}>
              <p>
                <b>Name:</b> {bookingData.name}
              </p>
              <p>
                <b>Pooja:</b> {bookingData.poojaType}
              </p>
              <p>
                <b>Amount:</b> ₹{bookingData.amount}
              </p>

              <button
                className="btn primary"
                style={{ marginTop: 12 }}
                onClick={handlePaymentConfirm}
                disabled={paymentConfirmed}
              >
                {paymentConfirmed ? "Payment Confirmed ✓" : "I Have Paid"}
              </button>
            </div>
          </div>
        </div>
      )}

     

      {/* IMPORTANT NOTES BOX */}
      <div
        style={{
          marginTop: 40,
          background: "#fff8e6",
          padding: 20,
          borderRadius: 14,
          lineHeight: 1.7,
          maxHeight: 280,
          overflowY: "auto",
          boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
          whiteSpace: "pre-line",
        }}
      >
        <h3 style={{ color: "#b35a00" }}>ക്ഷേത്രത്തിന്റെ പ്രധാന കുറിപ്പുകൾ</h3>

        {`
വിശേഷ പൂജകൾ  

• എല്ലാ മാസവും വെളുത്തവാവ് (പൗർണമി) ദിവസങ്ങളിൽ ഐശ്വര്യപൂജയും ഭഗവതി സേവയും നടത്തിവരുന്നു..

• തിരുവാതിര നാളിൽ മഹാദേവന് പ്രത്യേക മൃത്യുഞ്ജയ ഹോമം നടത്തപ്പെടുന്നു

• മകം നാളിൽ കലശപൂജയും, ആയില്ല്യം നാളിൽ പ്രത്യേക ആയില്ല്യപൂജയും നൂറും പാലും നടത്തിവരുന്നു.

• മലയാള മാസത്തിലെ ഒന്നാം തീയതി ഗണപതി ഭഗവാനു പ്രത്യേക ഗണപതി ഹോമം നടത്തപ്പെടുന്നു.

• മലയാള മാസത്തിലെ അവസാന വെള്ളിയാഴ്ച സഹസ്രനാമാർച്ചന നടത്തിവരുന്നു.
        `}
      </div>

      {/* BEAUTIFUL CUSTOM MODAL POPUP */}
      {showModal && (
        <div className="pb-modal-overlay" aria-modal="true" role="dialog">
          <div className="pb-modal-box">
            <div className="pb-warning-icon">⚠️</div>
            <h3>Important Notice</h3>
            <p style={{ marginTop: 8 }}>
              After completing the payment, please take a screenshot and send it
              to our WhatsApp number for verification. The receipt will be sent
              to your WhatsApp after confirmation.
            </p>
            <button
              className="pb-modal-btn"
              onClick={() => setShowModal(false)}
            >
              OK, I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
