/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom_blue': '#2272FF',
      },
      gridTemplateColumns: {
        
      },
      spacing: {
        '136': '136px',
        '155': '155px',
        '280': '280px',
        '75': '75px',
        '372': '372px',
        
      },
    },
  },
  plugins: [],
}

