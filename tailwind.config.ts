import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unna: ["Unna", "serif"],
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        sbp: {
          primary: "#D3C7AD",
          secondary: "#EEE8D4",
          accent: "#472D1D",
          "accent-secondary": "#604937",
          "base-content": "#604937",
          "neutral-content": "604937",
          fontFamily: "unna",
          fontSize: "1.1em",
        },
      },
    ],
  },
};
export default config;
