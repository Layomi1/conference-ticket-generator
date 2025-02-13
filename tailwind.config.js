/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "midnight-teal": "#197686",
        "light-teal": "#0e464f",
        "text-teal": "#24a0b5",
        gray: "#FAFAFA",
      },
      backgroundColor: {
        "midnight-teal": "#197686",
        "light-teal": "#0e464f",
        "text-teal": "#24a0b5",
      },
      borderRadius: {
        lg: "48px",
        md: "24px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jejuMyeongjo: ["JejuMyeongjo", "sans-serif"],
        roadRage: ["Road Rage", "sans-serif"],
        alatsi: ["Alatsi", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
