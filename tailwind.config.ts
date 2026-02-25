import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alypios: {
          primary: "#1C1917",
          secondary: "#44403C",
          accent: "#CA8A04",
          bg: "#050505", // The canvas background takes priority here
          text: "#FAFAF9",
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-cormorant)'],
      }
    },
  },
  plugins: [],
};
export default config;
