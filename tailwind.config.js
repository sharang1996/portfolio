module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or false
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b1e",
          200: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0e0c, -5px -5px 10px #14161c",
    },
  },
  variants: {
    extend: { boxShadow: ["dark"] },
  },
  plugins: [],
};
