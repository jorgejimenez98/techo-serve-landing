import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '480px',
        sm: '800px',
        '3xl': '1921px'
      },
      colors: {
        primary: '#004d80',
      },
    },
  },

  daisyui: {
    themes: ['light'],
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}
export default config
