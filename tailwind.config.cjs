/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
