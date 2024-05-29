import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'prusian': '#003049',
      'fire': '#D62828',
      'orange': '#F77F00',
      'xanthous': '#FCBF49',
      'vanilla': '#EAE2B7',
    },
  },
  plugins: [],
};
export default config;
