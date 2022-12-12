/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#24293d",
        secondary: "#8e84ff",
        white: "#d9d9d9",
        blue: "#4f7c8a",
        primaryhover: "#2a2d45",
        // primary: "#00040f",
        // secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        name: [
          "5rem",
          {
            lineHeight: "5rem",
            letterSpacing: ".08em",
          },
        ],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
