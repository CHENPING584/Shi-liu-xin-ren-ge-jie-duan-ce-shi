/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4ADE80', // Green for buttons
        secondary: '#A855F7', // Purple for headers
        background: '#F3F4F6',
      }
    },
  },
  plugins: [],
}
