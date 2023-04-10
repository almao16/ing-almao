<template>
  <v-app>
    <div class="dedicated-page">
      <Error
        :error-code="this.error.statusCode"
        :text="$t('common.404')"
      />
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.dedicated-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-default;
  }
}
</style>

<script>
import brand from '~/static/text/brand'
import Error from '../components/Error'

export default {
  components: {
    Error
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404
        ? brand.femine.name + ' - ' + this.pageNotFound
        : brand.femine.name + ' - ' + this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>
