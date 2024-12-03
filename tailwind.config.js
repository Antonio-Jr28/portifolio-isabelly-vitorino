/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaria: "#BF9075",
        segundaria: "#8C5230",
        botao1: "#D9B29C",
        background: "#592F16",
        background2: "#402921",
      },
      fontSize: {
        "2xl": "1.75rem",
        "3xl": "2rem",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75,
      },
    },
  },
  plugins: [],
};
