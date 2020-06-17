module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "#f3c614",
        secondary: "#353535",
      },
      height: {
        "80": "20rem",
        "100": "25rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
    backgroundColor: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
