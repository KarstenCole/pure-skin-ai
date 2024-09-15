/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        "resort-sans": ['"Resort Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
