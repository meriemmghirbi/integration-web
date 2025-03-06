/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.{html,scss}", "./public/**/*.{html,js}", "./src/**/*.{html,js}"], // Vérifie tous les fichiers HTML et SCSS
  theme: {
    extend: {
      colors: {
        primary: "#137C8B",
        secondary: "#7A90A4",
        tertiary: "#6e757a",
      },
      fontFamily: {
        body: ["Work Sans"],
      },
      fontSize: {
        navSize: "24px",
        heroSize: "74px",
        pSize: "18px",
      },
    },
  },
  plugins: [],
};
