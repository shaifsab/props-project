/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'poppins' : ['Poppins', 'sans-serif'],
      'slab' : ['Roboto Slab', 'serif']
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class", 
}