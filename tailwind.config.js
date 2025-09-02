// tailwind.config.js

const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Here you are telling Tailwind to use the CSS variable '--font-montserrat'
        // as the primary font for the 'sans' category.
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};