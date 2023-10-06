import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'green': '#4bbd99',
      'blue-dark': '#161529',
      'blue-light': '#2a2842',
      'grey': '#cccccc',
      'grey-dark': '#555555',
      'white': '#FFFFFF'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeInFast: 'fadeInAnimation 0.5s ease-in',
        fadeIn: 'fadeInAnimation 1s ease-in',
        fadeInSlow: 'fadeInAnimation 2s ease-in',
      },
      keyframes: {
        fadeInAnimation: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
    },
    delay: { // Add these delays if you don't have them yet
      '100': '100ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
  },
  plugins: [],
}
export default config
