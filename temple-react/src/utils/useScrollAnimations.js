    // src/utils/useScrollAnimations.js
import { useEffect } from "react";

export default function useScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-ani]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
