/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
    },
  },
  plugins: [],
}

