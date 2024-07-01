/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#4A90E2",
        secondary: "#50E3C2",
        background: "#F5F7FA",
        surface: "#FFFFFF",
        accent: "#D0021B",
        textPrimary: "#333333",
        textSecondary: "#7F8C8D",
      },
      screens: {
        sm: "420px",
      },
    },
  },
  plugins: [],
};
