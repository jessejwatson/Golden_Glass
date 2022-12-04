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
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-in-up': {
          '0%': {
              opacity: '0',
              transform: 'translateY(20px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out'
    }
    },
  },
  plugins: [],
}
