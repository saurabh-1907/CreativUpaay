/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(37 99 235)",
          hover: "rgb(29 78 216)",
        }
      }
    },
  },
  plugins: [],
}