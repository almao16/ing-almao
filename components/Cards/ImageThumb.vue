<template>
  <v-card class="img-thumb" :class="size">
    <a v-ripple @click="showImg">
      <div class="figure">
        <div class="img" :style="'background-image: url(' + img + ')'" />
      </div>
      <div class="detail">
        <h6 class="use-text-subtitle">
          {{ title }}
        </h6>
        <a href="#">{{ link }}</a>
      </div>
    </a>
  </v-card>
</template>

<style lang="scss" scoped>
@import './cards-style.scss';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    showImg: {
      type: Function,
      default: function() {
        return false
      }
    }
  }
}
</script>
