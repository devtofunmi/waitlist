/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx}',
    ],
  
  theme: {
    extend: {
      
      screens: {
        'custom-sm': '200px',
        'card-sm': '370px'
      }
    },
  },
  plugins: [],
}

