/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translate(0, 0) rotate(0deg)',
          },
          '50%': {
            transform: 'translate(50px, -50px) rotate(180deg)',
          },
          '100%': {
            transform: 'translate(0, 0) rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}