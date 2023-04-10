<template>
  <v-container>
    <div class="counter-wrap">
      <div id="watched_counter" />
      <v-container class="max-md">
        <v-row
          align="center"
          justify="center"
          class="root spacing6"
        >
          <v-col md="4" class="pa-6">
            <div class="counter-item">
              <div class="text" v-if="loaded">
                <i class="ion-ios-briefcase-outline" />
                <h4 class="use-text-title">
                  <span
                    v-countUp:onWindowScroll.once="{
                      watchedElId: 'watched_counter',
                      startValue: 0,
                      endValue: 123,
                      options: { duration: 1 }
                    }"
                  />
                </h4>
              </div>
              <h6 class="use-text-subtitle2">
                {{ $t('profileLanding.counter_completed') }}
              </h6>
            </div>
          </v-col>
          <v-col md="4" class="pa-6">
            <div class="counter-item">
              <div class="text" v-if="loaded">
                <i class="ion-ios-time-outline" />
                <h4 class="use-text-title">
                  <span
                    v-countUp:onWindowScroll.once="{
                      watchedElId: 'watched_counter',
                      startValue: 0,
                      endValue: 4567,
                      options: { duration: 1 }
                    }"
                  />
                </h4>
              </div>
              <h6 class="use-text-subtitle2">
                {{ $t('profileLanding.counter_hour') }}
              </h6>
            </div>
          </v-col>
          <v-col md="4" class="pa-6">
            <div class="counter-item">
              <div class="text" v-if="loaded">
                <i class="ion-ios-heart-outline" />
                <h4 class="use-text-title">
                  <span
                    v-countUp:onWindowScroll.once="{
                      watchedElId: 'watched_counter',
                      startValue: 0,
                      endValue: 89,
                      options: { duration: 1 }
                    }"
                  />
                </h4>
              </div>
              <h6 class="use-text-subtitle2">
                {{ $t('profileLanding.counter_happy') }}
              </h6>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
