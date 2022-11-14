/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#00B4DB",
        "main-dark": "#0083B0",
      },
    },
  },
  plugins: [],
};
