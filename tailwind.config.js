/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          400: '#8f95a5',
        },
        blue: {
          600: '#0079fe',
          700: '#1d56a6',
        },
        indigo: {
          800: '#1f2a48',
          900: '#141c2f',
        },
      },
    },
  },
  plugins: [],
};
