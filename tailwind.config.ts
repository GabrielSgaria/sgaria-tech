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
      colors: {
        'cami-agencia': '#a76243',
        'maceno-films-company': '#0a0a0a',
        'm2-agencia': '#0369a1',
        'grupo-fp-sinais': '#15803d',
        'dra-mariana-pereira' : '#9d174d'

      },
    },
  },
  plugins: [],
};
export default config;
