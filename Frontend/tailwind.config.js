/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 darkMode: "class",
 theme: {
  extend: {
   colors: {
    primary: {
     50: "#eff6ff",
     100: "#dbeafe",
     200: "#bfdbfe",
     300: "#93c5fd",
     400: "#60a5fa",
     500: "#3b82f6",
     600: "#2563eb",
     700: "#1d4ed8",
     800: "#1e40af",
     900: "#1e3a8a",
     950: "#172554",
    },
   },
   fontFamily: {
    sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
   },
   keyframes: {
    cursor: {
     "0%, 100%": { opacity: 0 },
     "50%": { opacity: 1 },
    },
   },
  },
 },
 plugins: [],
};
