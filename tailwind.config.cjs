/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      red: " #F55A5A",
      white: "#FFFFFF",
      grey: "#918E9B"
  
    },
    fontFamily:{
      inter: "'Inter', sans-serif;"
    },
    letterSpacing:{
      wide: '0.17em'
    },
    extend: {
      width:{
        
      },
      spacing:{
        '120': "420px" 
      },
    },
  },
  plugins: [],
}
