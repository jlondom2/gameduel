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
        blue: "#1c95f3",
        pink: "#f30a5c",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#363636",
        "gray-light": "#d3dce6",
        purple: "#7442ce",
      },
    },
  },
  plugins: [],
};
