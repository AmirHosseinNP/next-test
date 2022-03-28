const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: {
          main: "#1976d2",
          light: "#42a5f5",
          dark: "#1565c0",
        },
        secondary: {
          main: "#9c27b0",
          light: "#ba68c8",
          dark: "#7b1fa2",
        },
      },
    },
  },
  plugins: [],
};
