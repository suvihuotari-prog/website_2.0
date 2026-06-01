"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Wrapper that offsets children at a different scroll speed,
 * creating a subtle parallax depth effect.
 *
 * Props:
 *   speed: multiplier (0.9 = slower / lags behind, 1.1 = faster / leads)
 *          default 0.95
 *   style: additional styles on the wrapper
 */
export function ParallaxCard({ children, speed = 0.95, style = {} }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress [0,1] to a pixel offset based on speed deviation
  const deviation = (speed - 1) * 120; // e.g. 0.95 → -6px range, 1.05 → +6px range
  const y = useTransform(scrollYProgress, [0, 1], [deviation, -deviation]);

  return (
    <motion.div ref={ref} style={{ y, ...style }}>
      {children}
    </motion.div>
  );
}
