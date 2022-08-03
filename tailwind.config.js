/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx}", "./src/pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2-max": "repeat(2, minmax(0, max-content))",
        "3-max": "repeat(3, minmax(0, max-content))",
        "4-max": "repeat(4, minmax(0, max-content))",
      },
    },
  },
  plugins: [],
};
