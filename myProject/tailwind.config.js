/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      }
    },
  },
  plugins: [],
}
