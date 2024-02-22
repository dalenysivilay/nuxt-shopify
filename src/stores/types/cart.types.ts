export interface CartState {
  checkoutUrl: string
  cost: number
  lines: {
    edges: Array<unknown>
  }
  id: string
  totalQuantity: number
  loading: boolean
}
