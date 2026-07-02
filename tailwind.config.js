/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffe135',
        secondary: '#c9870d',
        dark: '#1a1200',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
