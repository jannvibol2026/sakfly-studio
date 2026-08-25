import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0B1220",
          light: "#1E293B",
        },
        accent: {
          DEFAULT: "#7C3AED",
          light: "#A78BFA",
          dark: "#5B21B6",
        },
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.15), transparent 45%), radial-gradient(circle at 50% 100%, rgba(59,130,246,0.12), transparent 40%)",
        "aurora-gradient":
          "linear-gradient(135deg, #7C3AED 0%, #4C1D95 45%, #0B1220 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.35)",
        card: "0 8px 32px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
