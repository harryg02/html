/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        grayWhite: '#f8f8f8',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        LightGray: '#EEEEEE',
        veryLightGray: '#F8F8F8',
        menu:'#000',
        darkGray: '#777',
        themeRed:'#be1d28',
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
      letterSpacing: {
        wider: '.25em',
        widest: '.35em',
      },
      fontSize: {
        xs: '0.77rem',
        sm: '0.9rem',
      },
      keyframes: {
        'open-menu': {
          '0%': {  opacity: 0 },
          '100%': {  opacity: 1 },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s',
      },
    },
  },
  plugins: [],
}