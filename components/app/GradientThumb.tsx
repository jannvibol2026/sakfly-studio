/**
 * Deterministic local gradient "image" placeholder used by the Image
 * Generator demo. No network requests — purely an inline SVG gradient
 * seeded by a string so the same prompt/id always renders the same look.
 */
const palettes = [
  ["#7C3AED", "#1E293B"],
  ["#A78BFA", "#0B1220"],
  ["#4C1D95", "#7C3AED"],
  ["#312E81", "#7C3AED"],
  ["#0EA5E9", "#7C3AED"],
  ["#DB2777", "#4C1D95"],
];

function seedIndex(seed: string, mod: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 1000003;
  }
  return Math.abs(hash) % mod;
}

export function GradientThumb({
  seed,
  className,
  rounded = "rounded-xl",
}: {
  seed: string;
  className?: string;
  rounded?: string;
}) {
  const [from, to] = palettes[seedIndex(seed, palettes.length)];
  const angle = 45 + seedIndex(seed, 6) * 30;
  return (
    <div
      className={`${rounded} ${className ?? ""}`}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})`,
      }}
    />
  );
}
