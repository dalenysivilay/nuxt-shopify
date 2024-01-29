import shopifyClient from '../modules/apollo/shopifyClient'

export const apollo = {
  clients: {
    default: {
      httpEndpoint: shopifyClient().url,
      httpLinkOptions: {
        headers: shopifyClient().headers,
      },
    },
  },
}

export default apollo
