import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.vue'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#1a9964',
        brandPrimaryDark: '#0d6f4b',
        brandPrimaryLight: '#77deac',
      },
    },
  },
} satisfies Config
