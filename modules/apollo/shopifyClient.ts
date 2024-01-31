import { processEnv } from '../../utils/processEnv'
import type { ApolloClient } from '~~/types/apollo'

export default function shopifyClient(): ApolloClient {
  const baseUrl = processEnv('SHOPIFY_BASE_URL')
  const apiVersion = processEnv('SHOPIFY_API_VERSION')
  const storefrontAccessToken = processEnv('SHOPIFY_STOREFRONT_ACCESS_TOKEN')

  const url = `https://${baseUrl}/api/${apiVersion}/graphql.json`
  const headers = { 'X-Shopify-Storefront-Access-Token': storefrontAccessToken }

  return { url, headers }
}
