module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      
      backgroundImage: {
        'ctaMobile': "url('/images/bg-simplify-section-mobile.svg')",
        'ctaDesktop': "url('/images/bg-simplify-section-desktop.svg')",
      },

      boxShadow: {
        'lightRed': '0 7px 6px -1px rgb(246 134 106 / 0.5), 0 2px 4px -2px rgb(246 134 106 / 0.5);',
      }
    },
  },
  plugins: [],
}
