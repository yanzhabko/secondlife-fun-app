import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        1: "14px",
        2: "16px",
        3: "18px",
        4: "24px",
        5: "28px",
        6: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
