/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          sage: "#6E8F7A",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "translateY(10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        },
        animation: {
          fadeIn: "fadeIn 0.6s ease-out forwards",
        },
      },
    },
    plugins: [],
  };
  