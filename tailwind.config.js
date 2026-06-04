/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f7fb",
          100: "#e4edf6",
          700: "#12365a",
          800: "#0d2845",
          900: "#081b30",
        },
        gold: {
          400: "#d6a940",
          500: "#bf8f21",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(8, 27, 48, 0.10)",
      },
    },
  },
  plugins: [],
};
