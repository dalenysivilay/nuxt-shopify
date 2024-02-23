import { antfu, combine, perfectionist } from '@antfu/eslint-config'
import eslintPluginReadableTailwind from 'eslint-plugin-readable-tailwind'
import tailwindcss from 'eslint-plugin-tailwindcss'
import vitest from 'eslint-plugin-vitest'

export default combine(
  perfectionist(),
  antfu({
    plugins: {
      vitest,
      tailwindcss,
      'readable-tailwind': eslintPluginReadableTailwind,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
      'readable-tailwind/multiline': ['warn'],
      'readable-tailwind/no-unnecessary-whitespace': ['warn'],
    },
  }),
)
