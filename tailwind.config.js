/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',   // Galaxy S8, very small phones
      'sm': '375px',   // iPhone SE, standard phones
      'md': '425px',   // Large phones (landscape)
      'lg': '768px',   // Tablets
      'xl': '1024px',  // Laptops
      '2xl': '1440px',  // Large desktops
    },
    extend: {
      colors: {
        accent: "#CCFF00",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
