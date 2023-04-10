export const state = () => ({
  navigation: 'icon', /* available: icon, text */
  bannerHero: 'image' /* available: image, animation, slideshow, animation-slideshow, video */
})

export const mutations = {
  set_navigation(state, type) {
    state.navigation = type
  },
  set_banner(state, type) {
    state.bannerHero = type
  }
}
