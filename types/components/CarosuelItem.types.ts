export interface CarouselItem<T = Record<string, unknown>> {
  component: Component<T>
  props: T
}
