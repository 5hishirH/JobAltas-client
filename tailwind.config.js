/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "prime": "#29648A",
        "sec": "#2E8CCA",
        "tert": "#AAABBB"
      },
    },
  },
  plugins: [require("daisyui")],
}

