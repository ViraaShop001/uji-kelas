/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        astro: {
          bg: "#020617",
          primary: "#6366f1",
          glow: "#818cf8",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(99,102,241,0.35)",
      },
    },
  },
  plugins: [],
}
