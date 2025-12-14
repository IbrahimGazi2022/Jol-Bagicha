// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px', // This will add the 'xs' breakpoint to the existing ones
      },
    },
  },
  plugins: [],
}
export default config