export default interface ProductCardQueryType {
  collectionByHandle: {
    handle: string
    products: {
      edges: {
        node: {
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
      }[]
    }
  }
}
