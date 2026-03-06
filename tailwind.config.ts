import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
      colors: {
        'liberty-gold': '#D4AF37',
        'liberty-cream': '#F5F5DC',
        'liberty-dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
};

export default config;
