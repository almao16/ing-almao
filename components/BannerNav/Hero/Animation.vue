<template>
  <div class="illustration" id="vanta_art" />
</template>

<style lang="scss" scoped>
@import './hero-style.scss';
</style>

<script>
export default {
  mounted() {
    setTimeout(() => {
      window.VANTA.BIRDS({
        el: '#vanta_art',
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 500,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1
      })
    }, 1000)
  }
}
</script>
