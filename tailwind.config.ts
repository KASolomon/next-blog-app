import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0c22",
        bgSoft: "#2d2b42",
        textSoft: "#e5e5e5",
        btn: "#3673fd",
      },
    },
  },
  plugins: [],
};
export default config;
