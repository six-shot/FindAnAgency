import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito:['var(--font-nunito)'],
        playfair:['var(--font-playfair)'],
        poppins:['var(--font-poppins)'],
        opensans:['var(--font-opensans)']
      },
    },
  },
  plugins: [],
}
export default config
