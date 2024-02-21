/**
 * Formats a price with two decimal places and adds the currency symbol based on the currency code.
 * @param price The price to be formatted.
 * @param currencyCode The ISO 4217 currency code (e.g., 'USD', 'EUR').
 * @param callback A function to further format the price.
 * @returns The formatted price string, potentially further formatted by the callback.
 */
export function formatPrice(
  price: number,
  currencyCode: string,
  callback: (formattedPrice: string) => string = formattedPrice => formattedPrice,
): string {
  try {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    const formattedPrice = formatter.format(price)
    return callback(formattedPrice)
  }
  catch (error) {
    logError(error as Error, 'Failed to format the price.')
    throw error
  }
}

/**
 * Formats the price as a whole number if it only has zeroes after the decimal.
 * @param formattedPrice The price string formatted by the `formatPrice` function.
 * @returns The formatted price string as a whole number if applicable.
 */
export function formatWholeNumberPrice(formattedPrice: string): string {
  const regex = /(\.\d*?)0+\b/
  return formattedPrice.replace(regex, '')
}
