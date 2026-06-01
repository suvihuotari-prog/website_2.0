"use client";

import { motion } from "framer-motion";

/**
 * Word-by-word headline reveal using clipPath curtain effect.
 * Each word slides up from behind a mask with staggered timing.
 */
export function AnimatedHeadline({ text, delay = 0.2, staggerMs = 60, style = {} }) {
  const words = text.split(" ");

  return (
    <h1
      className="dd-hero-h1"
      style={{
        fontSize: 64, fontWeight: 400, lineHeight: 1.1,
        letterSpacing: "-0.025em", maxWidth: 840,
        ...style,
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            marginRight: "0.28em",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: delay + i * (staggerMs / 1000),
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
