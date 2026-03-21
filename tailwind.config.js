/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'hack-green': "#00ff41",
        'hack-blue': "#00e5ff",
        'hack-yellow': "#fbbf24",
      },
      boxShadow: {
        'neo': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '4px 4px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}