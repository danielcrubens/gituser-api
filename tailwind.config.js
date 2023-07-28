const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        bodyDark:'#141d2f',
        bodyLight:'#F6F8FF',
        info:'#0079ff',
        darkBlue:'#1e2a47',
        lightWhite:'#fefefe',
        textDark:'#4b6a9b',
        blackDark:'#222731',
 
      },
      fontFamily:{
        'monospace': ['Space Mono', 'monospace']
      }
    },
  },
  plugins: [],
}