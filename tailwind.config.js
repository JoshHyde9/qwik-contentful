/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        coral: "#b56a66",
        "global-warming": "#f0d8d2",
      },
    },
  },
  darkMode: ["class", '[data-mode="dark"]'],
  plugins: [],
};
