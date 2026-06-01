import { C } from "@/lib/tokens";

export function CheckmarkIcon({ color = C.seawave, size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: size <= 13 ? 3 : 2 }}>
      <path d="M2 7l3.5 3.5L12 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
