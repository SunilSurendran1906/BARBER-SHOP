/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lalezar: ["Lalezar", "sans-serif"],
        ptSerif: ["'PT Serif Caption'", "serif"], // Add PT Serif Caption
      },
      colors: {
        customRed: "#EB1616",
        customRedHover: "#C81010",
        subRed: "#FF0000",
      },
    },
  },
  plugins: [],
};
