/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#1e3a8a',
        'coral': '#ff7f50',
        'light-blue': '#e6f3ff',
      },
    },
  },
  plugins: [],
}