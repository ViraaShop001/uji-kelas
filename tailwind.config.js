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
          pink: "#ec4899",
          cyan: "#22d3ee",
          glass: "rgba(255,255,255,0.12)",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(99,102,241,0.35)",
        glass: "0 8px 40px rgba(0,0,0,0.35)",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
}
