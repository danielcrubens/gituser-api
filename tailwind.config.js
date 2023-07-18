const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',

  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'body-dark':'#141d2f',
        'info':'#0079ff',
        'dark-blue':'#1e2a47',
      },
      fontFamily:{
        'monospace': ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
}