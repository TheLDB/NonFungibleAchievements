/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#090909',
        'gradient-red': '#c0392b',
        'gradient-purple': '#8e44ad',
      },
      dropShadow: {
        '2xl-white': '0 8px 6px rgba(255, 255, 255, 0.10)'
      }
    },
  },
  plugins: [],
}