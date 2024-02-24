import { antfu, combine, perfectionist } from '@antfu/eslint-config'

export default combine(
  perfectionist(),
  antfu(),
)
