export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    isNavSliderOpen: false,
    isCartSliderOpen: false,
  }),
  actions: {
    toggleNavSlider() {
      this.isNavSliderOpen = !this.isNavSliderOpen
      console.log('toggleNavSlider', this.isNavSliderOpen)
    },
    toggleCartSlider() {
      this.isCartSliderOpen = !this.isCartSliderOpen
      console.log('toggleCartSlider', this.isCartSliderOpen)
    },
  },
})

export default useNavigationStore
