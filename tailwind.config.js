/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        exo: ["Exo", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
      fontSize: {
        sm: ["0.8125em", "22x"],
        base: ["14px", "24px"],
        lg: ["18px", "28px"],
        xl: ["24px", "32px"],
        "2xl": ["1.563rem", "3rem"],
        "3xl": ["1.953rem", "3.8rem"],
        "4xl": ["2.441rem", "3.5rem"],
        "5xl": ["3.052rem", "4rem"],
      },
      colors: {
        blue: {
          100: "#1c95f3",
          200: "#0270c5",
        },
        pink: {
          100: "#f30a5c",
          200: "#bd0244",
        },
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#363636",
        "gray-light": "#dbdbdb",
        purple: {
          100: "#7442ce",
          200: "#4d2498",
        },
      },
    },
  },
  plugins: [],
};
