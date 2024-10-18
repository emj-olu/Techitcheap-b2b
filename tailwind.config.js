/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        primaryColor: "#2454FF",
        secColor: "#ECF1FF",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
