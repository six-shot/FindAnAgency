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
        play_fair:['var(--font-play_fair)'],
        poppins:['var(--font-poppins)']
      },
    },
  },
  plugins: [],
}
export default config
