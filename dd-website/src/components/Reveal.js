"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VARIANTS = {
  up: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
};

export function Reveal({ children, delay = 0, direction = "up", style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const v = VARIANTS[direction] || VARIANTS.up;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={v}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* Keep the hook export for any components that use it directly */
export { useInView } from "framer-motion";
