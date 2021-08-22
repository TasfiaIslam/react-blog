module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 'primary': '#0E4763',
        'primary': '#0D0F0E',
        'primary-light': '#FBF5F7',
        'secondary': '#106976',
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
