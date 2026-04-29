/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { 
      colors: {

        /* identidade da logo */
        primary: "#ff5a00",
        "primary-light": "#ff7a1a",
        "primary-dark": "#cc4700",

        /* glow da logo */
        accent: "#ff8c42",

        /* fundos */
        "background-light": "#0f0f10",
        "background-dark": "#050507",

        /* superfícies */
        "surface-dark": "#111114",

      },

      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        full: "9999px",
      },

      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #ff5a0010 1px, transparent 1px), linear-gradient(to bottom, #ff5a0010 1px, transparent 1px)",
      },

    },
  },
  plugins: [],
}