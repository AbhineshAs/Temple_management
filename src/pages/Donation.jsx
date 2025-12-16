import { useState } from "react";
import QRCode from "react-qr-code";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Donation() {
  const [name, setName] = useState("");
  const [spouse, setSpouse] = useState("");
  const [amount, setAmount] = useState("");
  const [qr, setQr] = useState("");
  const [showModal, setShowModal] = useState(false); // 🔥 Modal state

  const handleGen = async (e) => {
    e.preventDefault();

    if (!name.trim()) return alert("Enter donor name");
    if (!amount || Number(amount) <= 0) return alert("Enter valid amount");

    const upiId = "110527913001199@cnrb";

    const upi = `upi://pay?pa=${encodeURIComponent(
      upiId
    )}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;

    setQr(upi);

    // Save to Firebase
    await addDoc(collection(db, "donations"), {
      name,
      spouse,
      amount: Number(amount),
      note: "Donation",
      timestamp: new Date(),
    });

    // Show custom modal popup
    setShowModal(true);
  };

  const handleWhatsAppRedirect = () => {
    const msg = `
🙏 *Temple Donation Confirmation* 🙏

👤 *Donor Name:* ${name}
👥 *Spouse:* ${spouse || "N/A"}
💰 *Amount:* ₹${amount}

⚠️ *Please attach your payment screenshot for verification.*
    `.trim();

    const whatsappURL = `https://wa.me/919746269438?text=${encodeURIComponent(
      msg
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="page" style={{ maxWidth: 720, margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Temple Donation</h2>

      {/* Donation Form */}
      <table
        style={{
          width: "100%",
          background: "#fff",
          padding: 20,
          borderRadius: 14,
          boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
        }}
      >
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }}>
              <form
                className="form"
                onSubmit={handleGen}
                style={{
                  margin: "auto",
                  width: "90%",
                  textAlign: "left",
                }}
              >
                <label>Donor Full Name</label>
                <input
                  type="text"
                  placeholder="Enter donor name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label>Spouse Full Name (Optional)</label>
                <input
                  type="text"
                  placeholder="Enter spouse name"
                  value={spouse}
                  onChange={(e) => setSpouse(e.target.value)}
                />

                <label>Donation Amount (₹)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />

                <div style={{ marginTop: 15, textAlign: "center" }}>
                  <button className="btn primary" type="submit">
                    Generate UPI QR & Save
                  </button>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>

      {/* QR SECTION */}
      {qr && (
        <div style={{ marginTop: 25, textAlign: "center" }}>
          <h3>Scan & Pay</h3>

          <div style={{ marginTop: 14 }}>
            <div style={{ background: "#fff", padding: 12, borderRadius: 8 }}>
              <QRCode value={qr} size={220} />
            </div>
            <p style={{ marginTop: 8, fontWeight: "bold" }}>Scan to Pay</p>

            <button
              onClick={handleWhatsAppRedirect}
              className="btn primary"
              style={{ marginTop: 20 }}
            >
              I HAVE PAID — Send Confirmation to WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* 🌟 BEAUTIFUL CUSTOM MODAL POPUP */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="warning-icon">⚠️</div>
            <h3>Important Notice</h3>
            <p>
              After completing the payment, please take a screenshot and send it
              to our WhatsApp number for verification. The receipt will be sent
              to your WhatsApp after confirmation.
            </p>

            <button className="modal-btn" onClick={() => setShowModal(false)}>
              OK, I Understand
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
