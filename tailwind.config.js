/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundSize: {
        "size-150": "150% 150%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      animation: {
        "gradient-x-5": "gradient-x 5s ease infinite",
        "gradient-x-10": "gradient-x 10s ease infinite",
        "gradient-y-10": "gradient-y 10s ease infinite",
        "gradient-xy-5": "gradient-xy 5s ease infinite",
        "gradient-xy-10": "gradient-xy 10s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "150% 150%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "150% 150%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "150% 150%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "150% 150%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "150% 150%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
