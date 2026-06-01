/** Extract up to 2 initials from a name string, e.g. "Mika Aho" → "MA" */
export function getInitials(name) {
  if (!name) return "";
  return name.split(" ").map(w => w[0]).join("").slice(0, 2);
}
