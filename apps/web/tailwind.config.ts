import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#729F28",
        secondary: "#EEE100",
        accent: "#729F28",
        dark: {
          green: "#0B3D2C",
        },
        text: "#414141",
        light: {
          green: "#E9F2EA",
          gray: "#D9D9D9",
        },
        muted: {
          gray: "#A7A7A7",
          dark: "#787878",
        },
        near: {
          black: "#292929",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1140px",
      },
      borderRadius: {
        pill: "30px",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
