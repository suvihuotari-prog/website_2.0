"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { useInView } from "framer-motion";

/**
 * Animated counter that counts from 0 to target when scrolled into view.
 * Supports numbers with prefixes (€) and suffixes (+, M, %).
 * Falls back to static display for non-numeric values like "Weeks".
 */
export function CountUp({ value, duration = 1.6, style = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(null);

  // Parse the value: extract prefix, number, suffix (memoized to avoid re-triggering effect)
  const parsed = useMemo(() => parseValue(value), [value]);

  useEffect(() => {
    if (!isInView || !parsed) return;

    const { prefix, number, suffix, decimals } = parsed;
    const start = 0;
    const end = number;
    const startTime = performance.now();
    const dur = duration * 1000;

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / dur, 1);
      // EaseOut with slight overshoot for spring feel
      const eased = progress < 1
        ? 1 - Math.pow(1 - progress, 3.5)
        : 1;

      const current = start + (end - start) * eased;
      setDisplay(`${prefix}${decimals > 0 ? current.toFixed(decimals) : Math.round(current)}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        // Ensure we land exactly on the target
        setDisplay(value);
      }
    }

    requestAnimationFrame(tick);
  }, [isInView, parsed, value, duration]);

  return (
    <span ref={ref} style={style}>
      {display !== null ? display : (isInView ? value : (parsed ? `${parsed.prefix}0${parsed.suffix}` : value))}
    </span>
  );
}

function parseValue(val) {
  if (!val || typeof val !== "string") return null;

  // Match optional prefix (€, $), then number (with optional decimals), then suffix (+, M, %, etc.)
  const match = val.match(/^([€$]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const prefix = match[1];
  const number = parseFloat(match[2]);
  const suffix = match[3];
  const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;

  if (isNaN(number)) return null;

  return { prefix, number, suffix, decimals };
}
