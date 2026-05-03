import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`back-to-top${visible ? " btt-visible" : ""}`}
      onClick={scrollUp}
      aria-label="Back to top"
    >
      <FiArrowUp />
    </button>
  );
}

export default BackToTop;
