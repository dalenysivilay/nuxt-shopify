export const productCarouselCarouselQuery = gql`
  query collection ($handle: String!) {
    collectionByHandle(handle: $handle) {
      handle
      products(sortKey: RELEVANCE, first: 4) {
        edges {
          node {
            title
            handle
            featuredImage {
              src
              altText
            }
            availableForSale
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
        }
      }
    }
  }
}
`
export default productCarouselCarouselQuery
