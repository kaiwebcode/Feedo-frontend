// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff8901",
        secondary: "#fb923c",
        //  sky: {
        //   400: '#00c6ff', // You can adjust this if you want a different sky blue
        // },
      },
      container: {
        center: true,
        padding : {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem"
        }
      }
    },
  },
  plugins: [],
}
