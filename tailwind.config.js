/* eslint-env node */

const plugin = require("tailwindcss/plugin");
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100-100': '100% 100%',
      '16': '4rem',
    },
    asideScrollbars: {
      light: "light",
      gray: "gray",
    },
    extend: {
      zIndex: {
        "-1": "-1",
        "-2": "-2",
      },
      flexGrow: {
        5: "5",
      },
      maxHeight: {
        "screen-menu": "calc(100vh - 3.5rem)",
        modal: "calc(100vh - 160px)",
      },
      transitionProperty: {
        position: "right, left, top, bottom, margin, padding",
        textColor: "color",
      },
      keyframes: {
        "fade-out": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "fade-out": "fade-out 250ms ease-in-out",
        "fade-in": "fade-in 250ms ease-in-out",
      },
      lineHeight: {
        "72": "72px",
        "60": "60px"
      }
    },
    backgroundImage: {
      'bulk-email': 'url("@/assets/images/home/bulk-email/bg.png")',
      'semi-blue': '#A6D3F1',
      'semil-red': '#DDB1F0',
      'pricing-card-bg': "linear-gradient(180deg, #A6D3F1 0%, #DDB1F0 100%)"

    },
    fontFamily: {
      'primary': ['Montserrat']
    },
    textColor: {
      'header-secondary': '#A6A6A6',
      'header-selected': '#000',
      'primary': '#000',
      'hover': '#E24949',
      'white': 'rgb(255 255 255)',
      'purple': '#BB6BD9',
      'blue': '#2078BE',
      'badge': '#E24949',
      'card-subtitle': '#2F2F2F'
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "aside-scrollbars": (value) => {
            const track = value === "light" ? "100" : "900";
            const thumb = value === "light" ? "300" : "600";
            const color = value === "light" ? "gray" : value;

            return {
              scrollbarWidth: "thin",
              scrollbarColor: `${theme(`colors.${color}.${thumb}`)} ${theme(
                `colors.${color}.${track}`
              )}`,
              "&::-webkit-scrollbar": {
                width: "8px",
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: theme(`colors.${color}.${track}`),
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "0.25rem",
                backgroundColor: theme(`colors.${color}.${thumb}`),
              },
            };
          },
        },
        { values: theme("asideScrollbars") }
      );
    }),
  ],
};
