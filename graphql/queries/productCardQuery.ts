export const productCardQuery = gql`
  query product($handle: String!) {
    productByHandle(handle: $handle) {
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
`

export default productCardQuery
