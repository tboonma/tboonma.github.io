/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        clay: '#232e35',
        'gray-alto': '#D9D9D9',
        'gray-cod': '#1e1e1e',
        'gray-nevada': '#656D72',
        'gray-shark': '#242526',
        'gray-woodsmoke': '#18191A',
        'white-seashell': '#f1f1f1',
        'blue-dark': '#2e89ff',
        'blue-light': '#1876f2'
      },
      letterSpacing: {
        extrawide: '7.5px'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
