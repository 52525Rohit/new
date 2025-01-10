/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "fed-in": {
          "0%": { opacity: "0", transform: "translatey(20px)" },
          "100%": { opacity: "1", transform: "translatey(0)" },
        },
      },
      animation: {
        "fed-in": "fed-in 10s ease-in-out forwords",
      },
    },
  },
  plugins: [],
};
