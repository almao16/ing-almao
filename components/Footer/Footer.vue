<template>
  <div class="root">
    <v-container class="max-lg" tag="footer">
      <u-animate-container>
        <v-row :class="{ 'column-reverse': isMobile }">
          <v-col cols="12" md="5">
            <u-animate
              :offset="100"
              name="fadeInLeftShort"
              delay="0.2s"
              duration="0.3s"
            >
              <div>
                <div class="logo">
                  <img :src="logo" alt="logo" />
                  <h3 class="use-text-title">
                    {{ brand.femine.name }}
                  </h3>
                  <h4 class="use-text-subtitle">
                    {{ brand.femine.title }}
                  </h4>
                  <v-btn color="primary" outlined elevation="0" class="download" to="#">Download CV</v-btn>
                </div>
                <div class="socmed">
                  <v-btn icon small class="margin">
                    <i class="ion-logo-facebook fb" />
                  </v-btn>
                  <v-btn icon small class="margin">
                    <i class="ion-logo-linkedin id" />
                  </v-btn>
                  <v-btn icon small class="margin">
                     <i class="ion-logo-twitter tw" />
                  </v-btn>
                  <v-btn icon small class="margin">
                    <i class="ion-logo-instagram ig" />
                  </v-btn>
                </div>
                <div class="contact">
                  <p class="use-text-paragraph">
                    {{ $t('profileLanding.footer_contact') }}
                    <br />
                    +12 345 678 90
                  </p>
                  <v-divider class="divider" />
                  <p class="use-text-paragraph">
                    {{ $t('profileLanding.footer_hello') }}
                    <br />
                    jenadoe.skype
                  </p>
                </div>
              </div>
            </u-animate>
          </v-col>
          <v-col cols="12" md="7">
            <u-animate
              :offset="100"
              name="fadeInRightShort"
              delay="0.2s"
              duration="0.3s"
            >
              <div>
                <ContactForm />
              </div>
            </u-animate>
          </v-col>
        </v-row>
      </u-animate-container>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import logo from '~/static/images/femine-logo.svg'
import brand from '~/static/text/brand'
import ContactForm from '../Contact/Form'

export default {
  components: {
    ContactForm
  },
  data: () => ({
    logo: logo,
    brand: brand
  }),
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
