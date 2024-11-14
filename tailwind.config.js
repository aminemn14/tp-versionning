/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#010b09",
        bgColor: "#f6fefb",
        primary: "#1ae6a7",
        secondary: "#80bff1",
        accent: "#557fed",
      },
    },
  },
  plugins: [],
};
