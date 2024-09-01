import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      fontSize: {
        1: "14px",
        2: "16px",
        3: "18px",
        4: "24px",
        5: "28px",
        6: "32px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          sm: "20px",
          lg: "40px",
          xl: "80px",
        },
      },
      scale: {
        "102": "1.02",
      },
    },
  },
  plugins: [],
};
export default config;
