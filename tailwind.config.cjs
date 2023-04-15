/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        snowboard: 'url("assets/bg/bg_snowboard.jpg")',
        soccer: 'url("assets/bg/bg_soccer.jpg")',
      },
    },
  },
  plugins: [],
};
