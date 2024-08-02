/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstBlue: "#072A6C",
        firstYellow: "#FFCB04",
        primaryPurple: "#060DD9",
        primaryGray:"#F3F3F3",
        primaryColor:"#593FE4",
        primaryTextColor:"#1E1E1E",
        secondaryTextColor:"#8E8E93",
        tertiaryTextColor: "#B3B3B3",
        tertiaryTextColor2: "#F3F3F3"
      },
    },
  },
  plugins: [],
}