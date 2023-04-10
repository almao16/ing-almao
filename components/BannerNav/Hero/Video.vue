<template>
  <div class="video">
    <youtube
      :video-id="videoId"
      :player-vars="playerVars"
      :width= "1080"
      :height="720"
      ref="youtube"
      @playing="playing"
      @ended="ended"
    />
  </div>
</template>

<style lang="scss" scoped>
@import './hero-style.scss';
</style>

<script>
export default {
  data() {
    return {
      videoId: 'Yjgh6keboFw',
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
        origin: 'http://localhost:8001'
      },
      play: false
    }
  },
  methods: {
    playing() {
      this.play = true
    },
    ended() {
      this.player.playVideo()
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>
