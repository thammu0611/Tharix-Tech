"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Count-up used in the stats band.
 *
 * The initial render is always `0` so the server and client markup agree;
 * under reduced motion the effect jumps straight to the final value instead
 * of animating. The accessible value is exposed to assistive technology
 * immediately either way.
 */
export function Counter({
  to,
  suffix = "",
  duration = 1.6,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // A zero-duration animation resolves on the next frame, so reduced-motion
    // users get the final value immediately without a bespoke code path.
    const controls = animate(0, to, {
      duration: reduce ? 0 : duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>{value}</span>
      <span className="sr-only">{to}</span>
      {suffix}
    </span>
  );
}
