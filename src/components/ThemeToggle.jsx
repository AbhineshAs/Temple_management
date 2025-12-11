import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <button className="theme-btn" onClick={() => setDark((d) => !d)}>
      {dark ? "🌞" : "🌙"}
    </button>
  );
}
