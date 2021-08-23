module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#106976',
        'primary-light': '#57969F',
        'secondary': '#0D0F0E',
      },
      fontFamily: {
        'allison': ['"Allison"', 'cursive']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
