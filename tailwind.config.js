/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.handlebars",
    "./app.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

