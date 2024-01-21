import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    // colors: {
    //   'navbar': '#004DD3',
    //   'avatar': '#DCB100',
    //   'button-action': 'bg-green-500',
    // }
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
export default config
