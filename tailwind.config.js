/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Montserrat",
      },
      colors: {
        "purple-brand": "#8C82FC",
        "gray-brand": "#22293E",
        "gray-brand-2": "#222831",
      },
      gridTemplateColumns: {
        footer: "2fr 3fr",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
