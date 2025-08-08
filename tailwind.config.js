/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealbrand: "#1abc9c", // or your custom brand color
      },
    },
  },
  plugins: [],
};