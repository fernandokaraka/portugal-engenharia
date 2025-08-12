// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1D6E3C",
        support: "#F59E0B",
        ink: "#0F172A",
        surface: "#F7F7F7",
      },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
} satisfies Config;
