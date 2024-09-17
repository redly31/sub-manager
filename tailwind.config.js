/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-color": "var(--theme-color)",
        "theme-color-hover": "var(--theme-color-hover)",
        "secondary": "rgb(70, 70, 70)"
      },
    },
  },
  plugins: [],
}