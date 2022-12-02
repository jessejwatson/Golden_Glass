/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'c-charcoal': '#221D23',
      'c-blue': '#294051',
      'c-green': '#5AC494',
      'c-white': '#D3D4D9',
      'c-grey': '#B3B4BD'
    },
    extend: {
      fontFamily: {
        FiraCode: ["Fira Code"],
      }
    },
  },
  plugins: [],
}
