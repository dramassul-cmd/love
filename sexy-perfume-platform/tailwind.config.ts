import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#121212',
        'accent-gold': '#DAA520',
        'highlight-red': '#DC143C',
      },
      fontFamily: {
        sans: ['var(--font-cormorant)'],
        serif: ['var(--font-cinzel)'],
      },
    },
  },
  plugins: [],
};
export default config;
