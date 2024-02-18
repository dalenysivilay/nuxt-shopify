export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    isNavSliderOpen: false,
    isCartSliderOpen: false,
  }),
  actions: {
    toggleNavSlider() {
      this.isNavSliderOpen = !this.isNavSliderOpen
    },
    toggleCartSlider() {
      this.isCartSliderOpen = !this.isCartSliderOpen
    },
  },
})

export default useNavigationStore
