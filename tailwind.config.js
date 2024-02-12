const options = require("./config"); //options from config.js
const { scopedPreflightStyles } = require("tailwindcss-scoped-preflight");

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    scopedPreflightStyles({
      cssSelector: ".twp", // or .tailwind-preflight or even [data-twp=true] - any valid CSS selector of your choice
      mode: "matched only", // it's the default
    }),
  ],
  // prefix: 'tw-',
  corePlugins: {
    container: false,
    visibility: false
  },
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "0px",
      // => @media (min-width: 300px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",

      fs12: "0.75rem" /* 12px */,
      fs14: "0.875rem" /* 14px */,
      fs16: "1rem" /* 16px */,
      fs18: "1.125rem" /* 18px */,
      fs20: "1.25rem" /* 20px */,
      fs22: "1.375rem" /* 22px */,
      fs24: "1.5rem" /* 24px */,
      fs25: "1.563rem" /* 25px */,
      fs26: "1.625rem" /* 26px */,
      fs28: "1.75rem" /* 28px */,
      fs30: "1.875rem" /* 30px */,
      fs32: "2rem" /* 32px */,
      fs35: "2.188rem" /* 35px */,
      fs36: "2.25rem" /* 36px */,
      fs40: "2.5rem" /* 40px */,
      fs42: "2.625rem" /* 42px */,
      fs48: "3rem" /* 48px */,
      fs50: "3.125rem" /* 50px */,
      fs55: "3.438rem" /* 55px */,
      fs60: "3.75rem" /* 60px */,
      fs68: "4.25rem" /* 68px */,
      fs90: "5.625rem" /* 90px */,
    },
    lineHeight: {
      none: "1",
      tight: "1.25rem",
      bp: "1.3333",
      6: "1.5rem",
      7: "1.75rem",
      9: "2.25rem",
      12: "3rem",
      13: "3.25rem",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      damion: ["Damion", "cursive"],
    },
    container: {
      center: true,
    },
    extend: {
      brightness: {
        86: ".86",
      },
      backgroundImage: {
        meca2: "url('../img/principal/meca2.webp?$staticlink$')",
        meca2nl: "url('../img/principal/meca2-nl.webp?$staticlink$')",
      },
    },
    animation: {
      gradient: "gradient 8s linear infinite",
    },
    keyframes: {
      gradient: {
        to: { "background-position": "200% center" },
      },
    },
  },
};
