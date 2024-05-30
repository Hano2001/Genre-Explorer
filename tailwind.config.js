/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Georgia"],
    },
    colors: {
      black:"#000000",
      orange: "#fc8803",
      gray: "#85827f",
      lightyellow: "#f0d965",
      light: "#f7f4e1",
      white: "#FFFFFF"
    },
  },

  plugins: [],
};
