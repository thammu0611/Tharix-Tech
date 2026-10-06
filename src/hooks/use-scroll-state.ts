"use client";

import { useEffect, useState } from "react";

interface ScrollState {
  /** Past the threshold — used to condense and tint the navigation bar. */
  scrolled: boolean;
  /** Past one viewport — used to reveal the back-to-top control. */
  deep: boolean;
}

export function useScrollState(threshold = 24): ScrollState {
  const [state, setState] = useState<ScrollState>({ scrolled: false, deep: false });

  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const y = window.scrollY;
      setState((prev) => {
        const scrolled = y > threshold;
        const deep = y > window.innerHeight * 0.9;
        if (prev.scrolled === scrolled && prev.deep === deep) return prev;
        return { scrolled, deep };
      });
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold]);

  return state;
}
