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

        // Custom colors
        newPrimary: "#353736",
        newSecondary: "#1C1E1D",
        newThird: "#1D1F1E",
        newFourth: "#828484",
        newFifth: "#939594",
        newText: "#FBFDFC",

        newButton: "#323433",
      },
    },
  },
  plugins: [],
}