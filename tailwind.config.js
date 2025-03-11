/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'fredoka': ['Fredoka', 'sans-serif'],
      'firago': ['FiraGo', 'sans-serif'],
    },
    colors:{
      'purple': '#8338EC'
    },
    extend: {},
  },
  plugins: [],
}