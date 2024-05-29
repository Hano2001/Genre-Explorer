/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      sans:[
        "Georgia"
      ]
    },
    colors:{
      "orange": "#fc8803",
      "gray" : "#85827f",
      "lightyellow":"#f0d965"
    }
  },
  
  plugins: [],
}

