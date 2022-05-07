module.exports = {
  content: [
  './pages/**/*.{html,js,tsx}',
  './components/**/*.{html,js,tsx}',
  './src/*.tsx',
  './src/**/*.tsx',
  "./src/**/*.tsx",
],  
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257E6',

        }
      },
      borderRadius:{
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ]
}
