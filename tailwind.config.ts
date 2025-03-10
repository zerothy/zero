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
        toryBlue: '#105099',
        cream: '#FEF0C5',
        teaGreen: '#DCF0CF',
        palePink: '#FFE9F3',
      },
    },
    fontFamily: {
      'open-sans': ['"Open Sans"', 'sans-serif'],
      'geist': ['"Geist"', 'sans-serif'],
      'neue-montreal': ['"Neue Montreal"', 'sans-serif'],
    }
  },
  plugins: [],
} satisfies Config;