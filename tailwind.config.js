/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        customShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        warm: "#fff199",
        warmLight: "#fff7e1",
        warmOrange: "#ffb37b",
        warmPurple: "#4a304d",
        ash: "#545c5a",
        cream: "#fef9f3",
        black: "#101820FF",
        blazingYellow: "#FEE715FF",
        charcoal: "#030e12",
        cold: "#D2E8E3",
        coldDark: "#151716",
        dustyBeige: "#E8D4BC",
        mint: "#ADEFD1FF",
        neonBlue: "#3f8eac",
        sailorBlue: "#00203FFF",
        slateBlue: "#5b7c99",
        teal: "#0F6466",
        soda: {
          light: "#fff8cc",
          saturation: "#FBB034",
        },
        navy: {
          700: "#34394C",
          800: "#10162F",
        },
      },
    },
    screens: {
      mini: "315px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "5rem",
        xl: "6rem",
      },
    },
  },
  plugins: [],
}
