// @ts-check

const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const gray = colors.zinc;

const pogsystems = plugin(({ addUtilities }) => {
  addUtilities({
    ".bg-pattern": {
      "background-image": "radial-gradient(#ffffff10 1.5px, transparent 0)",
      "background-size": "25px 25px",
    },
  });
});

/** @type {import('tailwindcss').Config} */
const tailwindCssConfig = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [pogsystems],
  theme: {
    colors: {
      amber: colors.amber,
      "amber-muted": "#5c4d28",
      black: colors.black,
      current: colors.current,
      gray,
      orange: colors.orange,
      transparent: colors.transparent,
      yellow: colors.yellow,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

module.exports = tailwindCssConfig;
