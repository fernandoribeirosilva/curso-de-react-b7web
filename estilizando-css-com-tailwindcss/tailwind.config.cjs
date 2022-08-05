/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sx': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
  },
  plugins: [],
}
