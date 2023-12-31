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
        "tert": "#51a488",
        "bute": "#022140"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

