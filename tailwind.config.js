/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js}",
  ],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'thasadith': ['Thasadith', 'sans-serif']
      },
      fontSize: {
        'logo-size': '2.5rem',
      },
      screens: {
        'header-content': '900px'
      },
      colors: {
        'kamilcraft-green': 'rgb(var(--color-kamilcraft-green) / <alpha-value>)'
      }
    },
  },
  plugins: [],
}
