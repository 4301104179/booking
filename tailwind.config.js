/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'booking-blue': '#003580',
        'booking-button': '#0071c2',
        'booking-button-hover': '#005a9c',
        'booking-promo': '#005ea2',
      },
    },
  },
  plugins: [],
}