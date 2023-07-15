/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'udni-teal-100': '#EDFBFD',
        'udni-teal-200': '#91E7F2',
        'udni-teal-400': '#48D7EA',
        'udni-teal': '#18B6CC',
        'udni-purple': '#A6418E',
      },
    },
  },
  plugins: [],
  mode: "jit"
}

