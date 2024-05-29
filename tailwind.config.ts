import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'france': '#3083DC',
      'blue': '#016FB9',
      'wine': '#773344',
      'utorange': '#FF8811',
      'gray': '#CAD2C5',
      'lightCoral': '#E98686',
      'licorice': '#140200',
      'transparent': 'transparent'
    },
  },
  plugins: [],
};
export default config;
