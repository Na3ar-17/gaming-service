import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-pink': '#8A5CD4',
        'primary-background': '#1E1E20',
        'sidebar-bg': '#171717',
        'input-bg-1': '#323A3D',
        'input-bg-2': '#1B1B1D',
        'input-bg-search': '#313234',
        'side-bar-el': '#4F4F5A',
        'side-bar-el-active': '#89A8B6',
        'text-common': '#4C5A63',
        'button-v1': '#30373F',
        'card-bg': '#202835',
        'card-bg2': '#27262C',
        'bg-form-auth': '#1A1B1D',
        'bg-variant1': '#23262D',
        'stats-text': '#47545A',
        'footer-bg': '#28292B',
      },
    },
  },
  plugins: [],
}
export default config
