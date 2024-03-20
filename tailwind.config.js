/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    mode: "jit",
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        white: "var(--white-color)",
        black: "var(--black-color)",
        "black-navbar": "var(--black-navbar-color)",
      },
      backgroundImage: {
        "black-transparent-90deg": "var(--black-transparent-90deg-gradient)",
        "black-transparent-180deg": "var(--black-transparent-180deg-gradient)",
      },
      transitionDuration: {
        125: "125ms",
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      height: {
        screen: "100dvh",
        "half-screen": "50dvh",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
