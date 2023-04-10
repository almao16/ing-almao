<template>
  <div class="root">
    <v-container :class="[isMobile ? 'max-sm' : 'max-lg']">
      <v-row>
        <v-col lg="2" cols="12" class="pa-0" />
        <v-col lg="9" cols="12" class="pa-0">
          <div class="about">
            <div class="reward">
              <div class="item">
                <div>
                  <figure>
                    <img src="/images/femine/reward1.svg" alt="badge" />
                  </figure>
                  <p class="use-text-paragraph">Special Mention</p>
                  <h5>Awards</h5>
                </div>
              </div>
              <div class="item">
                <div>
                  <figure>
                    <img src="/images/femine/reward2.svg" alt="badge" />
                  </figure>
                  <p class="use-text-paragraph">100k videos</p>
                  <h5>Subscribers</h5>
                </div>
              </div>
              <div class="item">
                <div>
                  <figure>
                    <img src="/images/femine/reward3.svg" alt="badge" />
                  </figure>
                  <p class="use-text-paragraph">Best Filmography</p>
                  <h5>Footage</h5>
                </div>
              </div>
            </div>
            <hidden point="mdUp">
              <div class="socmed">
                <v-btn icon small class="margin">
                  <i class="ion-logo-facebook" />
                </v-btn>
                <v-btn icon small class="margin">
                  <i class="ion-logo-twitter " />
                </v-btn>
                <v-btn icon small class="margin">
                  <i class="ion-logo-instagram" />
                </v-btn>
                <v-btn icon small class="margin">
                  <i class="ion-logo-linkedin" />
                </v-btn>
              </div>
            </hidden>
            <hidden point="mdUp">
              <h5>
                {{ $t('profileLanding.banner_desc') }}
              </h5>
            </hidden>  
            <v-card class="photo">
              <figure>
                <img :src="brand.femine.avatar" alt="avatar" />
              </figure>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
import Hidden from '../Hidden'
import brand from '~/static/text/brand'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      brand: brand
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
