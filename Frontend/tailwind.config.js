/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 defaultTheme: "light",
 theme: {
  extend: {
   fontFamily: {
    sans: ['"Lato"', ...defaultTheme.fontFamily.sans]
   },
  },
 },
 plugins: [],
};
