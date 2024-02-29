export interface AccordionProps {
  id?: string
  content: AccordionContent
}

export interface AccordionContent {
  label: string
  content: string
}

export interface HeroBannerProps {
  id?: string
  content?: HeroBannerContent
}

export interface HeroBannerContent {
  title?: string
  subtitle?: string
  backgroundImage?: string
  productImage?: string
}

export interface CarouselItemType<T = Record<string, unknown>> {
  component: Component<T>
  props: T
}

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
