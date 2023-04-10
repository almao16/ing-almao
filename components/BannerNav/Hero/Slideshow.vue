<template>
  <div class="animation-slider">
    <div class="slideshow">
      <slick ref="slick" :options="slickOptions">
        <div v-for="(item, index) in images" :key="index" class="slide-item">
          <div class="img" :style="'background-image: url('+item+')'" />
        </div>
      </slick>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './hero-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      images: [
        imgAPI.photo[1],
        imgAPI.photo[2],
        imgAPI.photo[3],
        imgAPI.photo[4],
        imgAPI.photo[5]
      ],
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 700,
        autoplaySpeed: 5000,
        autoplay: true,
        slidesToShow: 1,
        arrows: false,
        fade: true
      }
    }
  }
}
</script>
