const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

// const primary = colors.indigo
const primary = "#13294C";
// const secondary = colors.pink
const secondary = "#E94A28";
const info = colors.sky;
const warning = colors.amber;
const success = colors.emerald;
const error = colors.red;

module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./server/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/windplus/styles/**/*.{vue,js,css}",
    "./node_modules/windplus/styles/*.{vue,js,css}",
    "./node_modules/windplus/styles/main.css",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        primary,
        secondary,
        info,
        warning,
        success,
        error,
        "blue-zodiac": {
          50: "#eff9ff",
          100: "#daf0ff",
          200: "#bde5ff",
          300: "#90d6ff",
          400: "#5cbefe",
          500: "#36a0fb",
          600: "#2082f0",
          700: "#186bdd",
          800: "#1a56b3",
          900: "#1b4b8d",
          950: "#13294c", // primary color
        },
        pomegranate: {
          50: "#fef3ee",
          100: "#fce5d8",
          200: "#f8c6b0",
          300: "#f39f7e",
          400: "#ed6d4a",
          500: "#e94a28", // secondary color
          600: "#da311c",
          700: "#b52219",
          800: "#901e1c",
          900: "#741c1a",
          950: "#3f0b0c",
        },
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          active: "var(--color-text-active)",
          hover: "var(--color-text-hover)",
          icon: "var(--color-text-icon)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "fill-active": "var(--color-fill-active)",
          "fill-hover": "var(--color-fill-hover)",
          "icon-fill": "var(--color-icon-fill)",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
