<template>
  <div class="title" :class="{ dark: dark }">
    <h4>
      <slot />
    </h4>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style.scss';
</style>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
