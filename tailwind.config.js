/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  experimental: {
    darkModeVariant: true,
  },
  dark: "class",
  theme: {
    extend: {
      spacing: {
        80: "20rem",
        108: "27rem",
      },
      borderWidth: {
        14: "14px",
      },
    },
    container: {
      padding: "1rem",
    },
    colors: {
      background: {
        primary: "var(--bg-background-primary)",
        secondary: "var(--bg-background-secondary)",
        tertiary: "var(--text-copy-secondary)",
      },
      copy: {
        primary: "var(--text-copy-primary)",
        secondary: "var(--text-copy-secondary)",
        tertiary: "var(--bg-background-primary)",
      },
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Fira Code",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "800px",
          },
          "@screen xl": {
            maxWidth: "1040px",
          },
        },
        ".blog": {
          maxWidth: "750px",
          "@screen sm": {
            maxWidth: "500px",
          },
          "@screen md": {
            maxWidth: "550px",
          },
          "@screen lg": {
            maxWidth: "600px",
          },
          "@screen xl": {
            maxWidth: "750px",
          },
        },
      });
    },
  ],
};
