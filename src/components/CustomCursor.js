import React, { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = -200;
    let mouseY = -200;
    let followerX = -200;
    let followerY = -200;
    let rafId;

    cursor.style.opacity = "0";
    follower.style.opacity = "0";

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
      cursor.style.opacity = "1";
      follower.style.opacity = "1";
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    const onInteractEnter = () => {
      cursor.classList.add("cursor-hover");
      follower.classList.add("follower-hover");
    };
    const onInteractLeave = () => {
      cursor.classList.remove("cursor-hover");
      follower.classList.remove("follower-hover");
    };

    const bindHovers = () => {
      document
        .querySelectorAll("a, button, [role='button']")
        .forEach((el) => {
          el.addEventListener("mouseenter", onInteractEnter);
          el.addEventListener("mouseleave", onInteractLeave);
        });
    };
    bindHovers();

    const observer = new MutationObserver(bindHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}

export default CustomCursor;
