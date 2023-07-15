/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        420: "420px",
      },
      maxWidth: {
        1600: "1600px",
        350:"350px"
      },
    },
  },
  plugins: [],
};