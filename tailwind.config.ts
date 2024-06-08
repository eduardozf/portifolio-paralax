import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        lines: "url('/assets/lines.svg')",
        "img-third": "url('/assets/third_bg.webp')",
        "extra-blur": "radial-gradient(rgba(0,0,0,0.2) 40%, transparent 70%)",
      },
      fontSize: {
        sm: "14px",
        md: "18px",
        lg: "24px",
        xl: "42px",
        xxl: "64px",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        passionOne: ["var(--font-passion)", "sans-serif"],
      },
      colors: {
        black: "#111111",
        green: "#73884E",
        "green-d": "#3F4B2A",
        "blue-macaw": "#01A8CC",
      },
      transitionProperty: {
        smoothT: "all",
      },
      transitionDuration: {
        smoothT: "500ms",
      },
      transitionTimingFunction: {
        smoothT: "ease-in",
      },
      animation: {
        walk: "walk linear 30s infinite",
      },
      keyframes: {
        walk: {
          "0%": { transform: "translateX(0) rotate(110deg)" },
          "10%": { transform: "translateX(5px) rotate(10deg)" },
          "30%": { transform: "translateX(15px) rotateY(20deg)" },
          "50%": { transform: "translateX(25px) rotateY(30deg)" },
          "70%": { transform: "translateX(15px) rotateY(20deg)" },
          "90%": { transform: "translateX(5px) rotateY(10deg)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
