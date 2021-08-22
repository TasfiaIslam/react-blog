module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 'primary': '#0E4763',
        'primary': '#0D0F0E',
        'primary-dark': '#C06582',
        'primary-light': '#FBF5F7',
        'secondary': '#D9E7E2',
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
