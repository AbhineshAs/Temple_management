import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const nav = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await signInWithEmailAndPassword(auth, email, pass);
      const snap = await getDoc(doc(db, "admins", res.user.uid));

      if (snap.exists()) {
        nav("/admin/dashboard");
      } else {
        setError("You are not an admin");
      }
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="page"
      style={{
        maxWidth: 420,
        margin: "auto",
        padding: 20,
        marginTop: 40,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 25 }}>Admin Login</h2>

      <div
        style={{
          background: "#ffffffdd",
          padding: 25,
          borderRadius: 14,
          boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
        }}
      >
        <form className="form" onSubmit={login}>
          <label>Admin Email</label>
          <input
            type="email"
            placeholder="Enter Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <button
            className="btn primary"
            type="submit"
            style={{ marginTop: 10, width: "100%" }}
          >
            Login
          </button>
        </form>
      </div>

      {error && (
        <p style={{ color: "red", marginTop: 12, textAlign: "center" }}>
          {error}
        </p>
      )}
    </div>
  );
}
