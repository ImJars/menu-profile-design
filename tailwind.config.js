/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111419",
        secondary: "#FFCE00",
        third: "#F79205",
      },
    },
  },
  plugins: [],
}