import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B655F",
        secondary: "#D2CBC3",
        terniary: "#130E0A",
        fourth: "#79736D",
        background: "#FAF4EE",
      },
    },
  },
  plugins: [],
} satisfies Config;