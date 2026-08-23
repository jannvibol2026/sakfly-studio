import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * Geometric SAKFLY Studio mark — a stylized "S" formed from overlapping
 * angular facets, reminiscent of a spark / flight path. Uses currentColor
 * so it inherits text color everywhere (Navbar, Footer, Sidebar, favicons).
 * Renders crisply at small sizes (16px+) thanks to simple vector shapes.
 */
export function Logo({ className, size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="SAKFLY Studio logo"
    >
      <defs>
        <linearGradient id="sakfly-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="10" fill="url(#sakfly-grad)" fillOpacity="0.15" />
      <path
        d="M28 8L12 20L22 22L12 32L28 22L18 20L28 8Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
