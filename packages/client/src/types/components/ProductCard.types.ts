export interface ProductCardType {
  title: string
  handle: string
  featuredImage: {
    src: string
    altText: string
  }
  availableForSale: boolean
  priceRange: {
    minVariantPrice: {
      amount: number
      currencyCode: string
    }
    maxVariantPrice: {
      amount: number
      currencyCode: string
    }
  }
}
