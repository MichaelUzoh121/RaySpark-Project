/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        apple: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        lucida: ['"Lucida Sans"', '"Lucida Sans Regular"', '"Lucida Grande"', '"Lucida Sans Unicode"', 'Geneva', 'Verdana', 'sans-serif'],
        segoe: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        verdana: ['Verdana, Geneva, Tahoma, sans-serif'],
        'goudy': ['Goudy Old Style', 'serif'],
      },
    },
    // screens:{
    //   'se':'375px'
    // }
  },
  plugins: [],
}

