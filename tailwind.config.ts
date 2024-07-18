import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ivory": "#9E9C92",
        "yellow-canary": "#EDCA85",
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-medium': 'spin 8s linear infinite',
        'spin-reverse': 'spinreverse 15s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        spinreverse: {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(calc(-100% - 1rem))' }
        },
      }
    },
  },
  plugins: [],
};
export default config;
