module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ["12px", "14px"],
      s: ["14px", "17px"],
      m: ["16px", "20px"],
      l: ["18px", "22px"],
      xl: ["24px", "30px"],
      "2xl": ["28px", "26px"],
      "3xl": ["38px", "46px"],
      "4xl": ["48px", "60px"],
    },
    colors: {
      transparent: "transparent",

      dark: "#1F2021",
      blue: { primary: "#6EBBD3" },
      red: { sale: "#E52D2D" },
      white: "#FFFFFF",
      white50: "#FFFFFF80",
      grey: "#F3F3F3",
    },
    screens: {
      laptop: { max: "1100px" },
      tablet: { max: "920px" },

      // 'laptop': '110rem',
    },
    maxWidth: {
      main: "144rem",
    },
    container: {
      center: true,
      // padding: {
      //   DEFAULT: "13rem",
      //   laptop: "6rem",
      // },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
