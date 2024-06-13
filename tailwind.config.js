/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: "#512b12",
        "white-coffee": "#f8daa2"
      }
    },
  },
  plugins: [],
}