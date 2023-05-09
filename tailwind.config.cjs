/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Saira", "sans-serif"],
      },
      backgroundImage: {
        snowboard: 'url("assets/bg/bg_snowboard.jpg")',
        soccer: 'url("assets/bg/bg_soccer.jpg")',
        basketball: 'url("assets/bg/bg_basketball.jpg")',
        football: 'url("assets/bg/bg_football.jpg")',
      },
    },
  },
  plugins: [],
};
