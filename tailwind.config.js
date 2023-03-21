/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      backgroundImage: {
        HomeBackGround: "url(/Assets/bg-home.png)",
      },
    },
  },
  plugins: [],
}
