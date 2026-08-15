export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Newsreader", "Georgia", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        canvas: "#f4f3ee",
        "canvas-raised": "#f7f5f0",
        ink: "#0f1b2d",
        "ink-soft": "#475569",
        "ink-muted": "#64748b",
        "image-dark": "#0b1622",
        accent: "#c0492f",
        hairline: "#e2e8f0",
        // Tertiary premium accent — legal/evidence + footer wordmark only.
        gold: "#b58a3d",
      },
    },
  },
  plugins: [],
};
