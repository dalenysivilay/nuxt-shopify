import type ProductCarouselQueryType from '~/types/graphql/queries/productCarouselQuery.type'

const productCarouselQuery = gql`
  query collection ($handle: String! $first: Int!) {
    collectionByHandle(handle: $handle) {
      handle
      products(sortKey: RELEVANCE, first: $first) {
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
export async function getProductCarousel(collectionHandle?: string, showNumberOfItems?: number) {
  try {
    const { data, error } = await useAsyncQuery<ProductCarouselQueryType>(productCarouselQuery, {
      handle: collectionHandle,
      first: showNumberOfItems,
    })

    if (error.value)
      logError(error as Error, 'GraphQL Error: Failed to fetch product carousel data')

    return data
  }
  catch (error) {
    logError(error as Error, 'Network Error: Failed to fetch product carousel data')
  }
}

export default getProductCarousel
