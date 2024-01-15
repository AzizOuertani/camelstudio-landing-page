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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        thrashand: ["var(--font-thrashand)"],
        raleway: ["var(--font-raleway)"],
      },
      colors: {
        white: "#ffffff",
        primary: {
          50: "#E0EEFF",
          100: "#B0CCFF",
          200: "#7FAAFF",
          300: "#4D89FF",
          400: "#1E67FE",
          500: "#074DE5",
          600: "#003CB3",
          700: "#002B81",
          800: "#000920",
        },
        secondary: {
          50: "#FFF8DA",
          100: "#FFEAAD",
          200: "#FFDC7D",
          300: "#FFCD4B",
          400: "#FFB800",
          500: "#E6A600",
          600: "#B38100",
          700: "#805C00",
          800: "#4E3700",
        },
      },
    },
  },
  plugins: [],
};
export default config;
