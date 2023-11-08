/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#131415",
        darkCream: "#f5e1c4",
        lightCream: "fef9eb",
      },
      boxShadow: {
        lightShadow: "0 4px 3px -1px rgba(245, 245, 220, 0.4)", // For light mode
        darkShadow: "0 4px 3px -1px rgba(0, 0, 0, 0.4)", // For dark mode
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
