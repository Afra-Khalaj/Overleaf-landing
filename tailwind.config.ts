import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-playfair)', ...fontFamily.serif],
        sans: ['var(--font-source-serif)', ...fontFamily.serif],
        body: ['var(--font-source-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        overleafTheme: {
          "primary": "#098842",        // Green
          "primary-content": "#ffffff",

          "secondary": "#EAF6EF",      // Light green
          "secondary-content": "#1B222C",

          "accent": "#F4F5F6",         // Grey hover
          "accent-content": "#1B222C",

          "neutral": "#1B222C",        // Black
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",       // White background
          "base-content": "#1B222C",

          "base-300": "#495365", // Lighter grey
          "base-400": "#1B222C", // Darker grey

          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      }
    ],
  },
}
export default config
