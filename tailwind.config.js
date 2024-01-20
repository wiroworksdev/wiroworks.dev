/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      brand: ["Jost", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
