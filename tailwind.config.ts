import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./docs/**/*.md", "./README.md"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#F8F7F2",
        clay: "#B84A34",
        meadow: "#2F6B4F",
        gold: "#D8A33D",
        night: "#20293A"
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      boxShadow: {
        sharp: "8px 8px 0 #171717"
      }
    }
  },
  plugins: []
};

export default config;
