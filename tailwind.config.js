const constants = require('./src/ui/constants.json')

module.exports = {
  content: ['./src/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: constants.breakpoints.sm + 'px',
      md: constants.breakpoints.md + 'px',
      lg: constants.breakpoints.lg + 'px',
      xl: constants.breakpoints.xl + 'px',
      '2xl': constants.breakpoints['2xl'] + 'px',
    },
  },
  plugins: [],
}
