import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.vue'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#0a0a0a',
        brandPrimaryDark: '#000000',
        brandPrimaryLight: '#333333',
        // brandPrimary: '#1a9964',
        // brandPrimaryDark: '#0d6f4b',
        // brandPrimaryLight: '#77deac',
      },
    },
  },
} satisfies Config
