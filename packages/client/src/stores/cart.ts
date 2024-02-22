import type { CartState } from './types/cart.types'

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    checkoutUrl: '',
    cost: 0,
    lines: {
      edges: [],
    },
    id: '',
    totalQuantity: 0,
    loading: false,
  }),
  actions: {
  },
})

export default useCartStore
