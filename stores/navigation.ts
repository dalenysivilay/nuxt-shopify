export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navSliderOpen: false,
    cartSliderOpen: false,
  }),
  actions: {
    toggleSlider() {
      this.navSliderOpen = !this.navSliderOpen
      this.cartSliderOpen = !this.cartSliderOpen
    },
    closeSlider() {
      this.navSliderOpen = false
      this.cartSliderOpen = false
    },
  },
})

export default useNavigationStore
