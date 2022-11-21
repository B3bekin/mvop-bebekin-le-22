/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#62bbda",
        "main-dark": "#0083B0",
      },
    },
  },
  plugins: [],
};
