<template>
  <v-card class="post">
    <figure>
      <img :src="img" alt="thumb" />
    </figure>
    <div class="text">
      <h5 class="use-text-subtitle2">
        {{ title }}
      </h5>
      <p class="use-text-paragraph">
        {{ desc }}
      </p>
    </div>
    <v-btn
      href="#"
      text
      color="primary"
      class="readmore"
    >
      {{ $t('profileLanding.read_more') }}
    </v-btn>
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
    desc: {
      type: String,
      required: true
    }
  }
}
</script>
