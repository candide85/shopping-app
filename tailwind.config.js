/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'customColor1': '#d46955',
        'customColor2': '#3d1c49'
      }
    },
  },
  plugins: [],
}

