import React, { useEffect, useState, useCallback, useRef } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const COLORS = ["#c770f0", "#00d4ff", "#ff006e", "#39ff14", "#ffbe0b", "#ffffff"];

function createConfettiParticle(canvas) {
  const ctx = canvas.getContext("2d");
  const x = Math.random() * canvas.width;
  const y = -10;
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const size = Math.random() * 8 + 4;
  const speedX = (Math.random() - 0.5) * 6;
  const speedY = Math.random() * 4 + 2;
  const rotation = Math.random() * 360;
  const rotSpeed = (Math.random() - 0.5) * 8;
  const shape = Math.random() < 0.5 ? "rect" : "circle";
  return { ctx, x, y, color, size, speedX, speedY, rotation, rotSpeed, shape, alpha: 1 };
}

function drawParticle(p) {
  p.ctx.save();
  p.ctx.globalAlpha = p.alpha;
  p.ctx.fillStyle = p.color;
  p.ctx.translate(p.x, p.y);
  p.ctx.rotate((p.rotation * Math.PI) / 180);
  if (p.shape === "rect") {
    p.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
  } else {
    p.ctx.beginPath();
    p.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
    p.ctx.fill();
  }
  p.ctx.restore();
}

function EasterEgg() {
  const [, setSequence] = useState([]);
  const [activated, setActivated] = useState(false);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  const launchConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 180 }, () =>
      createConfettiParticle(canvas)
    );

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedY += 0.08; // gravity
        p.rotation += p.rotSpeed;
        if (p.y > canvas.height * 0.8) p.alpha -= 0.02;
        if (p.alpha > 0) {
          alive = true;
          drawParticle(p);
        }
      });
      if (alive) rafRef.current = requestAnimationFrame(animate);
      else ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const triggerEasterEgg = useCallback(() => {
    setActivated(true);
    launchConfetti();
    setTimeout(() => setActivated(false), 4500);
  }, [launchConfetti]);

  useEffect(() => {
    const handleKey = (e) => {
      setSequence((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (next.join(",") === KONAMI.join(",")) triggerEasterEgg();
        return next;
      });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [triggerEasterEgg]);

  useEffect(() => {
    const handleRvDoubleClick = () => triggerEasterEgg();
    window.addEventListener("rv-easter-egg", handleRvDoubleClick);
    return () => window.removeEventListener("rv-easter-egg", handleRvDoubleClick);
  }, [triggerEasterEgg]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Confetti canvas — always rendered, only visible during easter egg */}
      <canvas
        ref={canvasRef}
        className="confetti-canvas"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 199999,
          pointerEvents: "none",
          opacity: activated ? 1 : 0,
        }}
      />
      {activated && (
        <div
          className="easter-egg-overlay"
          onClick={() => setActivated(false)}
          role="dialog"
          aria-label="Easter egg activated"
        >
          <div className="easter-egg-content">
            <span className="easter-egg-emoji">🎉</span>
            <h2>EASTER EGG UNLOCKED!</h2>
            <p>You found the secret! Raghavan approves! 🚀</p>
            <span className="easter-egg-sparkles">✨ 🌟 💫 ⭐ 🌟 ✨</span>
            <p className="easter-egg-hint">
              Tip: double-click the RV button any time.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default EasterEgg;
