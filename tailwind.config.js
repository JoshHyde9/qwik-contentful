/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        coral: "#b56a66",
        tradewind: {
          normal: "#66b1b5",
          light: "#84c0c3",
        },
      },
    },
  },
  plugins: [],
};
