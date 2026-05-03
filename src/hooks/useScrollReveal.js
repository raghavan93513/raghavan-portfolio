import { useEffect, useRef } from "react";

function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          if (options.once !== false) observer.unobserve(el);
        }
      },
      { threshold: options.threshold || 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.once]);

  return ref;
}

export default useScrollReveal;
