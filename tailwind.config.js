/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette based on your chosen design system
        background: {
          light: "#FAFAFA",
          dark: "#1A1A1A",
        },
        foreground: {
          light: "#1A1A1A",
          dark: "#F5F5F5",
        },
        surface: {
          light: "#F5F5F5",
          dark: "#2A2A2A",
        },
        sage: {
          50:  "#f1f5f2",
          100: "#dfe8e2",
          200: "#c0d1c6",
          300: "#a1b9aa",
          400: "#86a592",
          500: "#6E8F7A",   // your chosen accent
          600: "#587362",
          700: "#455a4d",
          800: "#334238",
          900: "#232e26",
        },
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
      },

      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
