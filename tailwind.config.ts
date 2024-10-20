import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkTheme: "#F98585",
        bluish: "#21243D",
        secondary: "#F4E2E2"
      },
      fontFamily: {
        inter: ['Inter', 'serif'],
        heebo: ['Heebo', 'serif'],
       },
    },
  },
  plugins: [],
};
export default config;
