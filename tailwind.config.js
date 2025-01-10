/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/hero-bg.jpg')",
      },
      colors: {
        main: {
          900: '#202C36',  //Dark mode Background
          // 700: 'hsl(318, 82%, 44%)',
          200: 'hsl(0, 0%, 98%)',  // Light mode backgroud
          100: 'hsl(0, 0%, 100%)',  // Dark Mode Text & Light Mode Elements
          400: 'hsl(0, 0%, 52%)',  // Light mode input
          600: '#2B3844', // light mode text
        }
      },
    },
  },
  plugins: [],
}