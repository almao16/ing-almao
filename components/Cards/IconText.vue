<template>
  <v-card class="icon-text">
    <div class="icon">
      <span :class="icon" />
    </div>
    <div class="more">
      <h6 class="name use-text-paragraph">
        {{ text }}
      </h6>
      <p class="desc use-text-paragraph">
        {{ desc }}
      </p>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './cards-style.scss';
</style>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
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
