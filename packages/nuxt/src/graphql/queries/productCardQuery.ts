import type ProductCardQueryType from '~/types/graphql/queries/productCardQuery.type'

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
export async function getProductCard(productHandle?: string) {
  try {
    const { data, error } = await useAsyncQuery<ProductCardQueryType>(productCardQuery, {
      handle: productHandle,
    })

    if (error)
      logError(error as Error, 'GraphQL Error: Failed to fetch product card data')

    return data
  }
  catch (error) {
    logError(error as Error, 'Network Error: Failed to fetch product card data')
  }
}

export default getProductCard
