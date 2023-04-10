<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <section id="home">
        <banner-nav />
      </section>
      <section id="about">
        <about />
        <timeline />
        <counter />
      </section>
      <div class="grey-bg">
        <div class="deco-wrap">
          <decoration />
          <section id="services">
            <services />
          </section>
          <section id="my-work" class="space-top-short space-bottom-short">
            <gallery />
          </section>
        </div>
        <section id="testimonials">
          <testimonials />
        </section>
        <div class="deco-wrap bottom">
          <decoration />
          <section id="blog" class="space-top-short">
            <blog />
          </section>
          <section id="contact" class="space-top">
            <main-footer />
          </section>
        </div>
      </div>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles';

@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  @include palette-text-primary;
  .theme--dark & {
    background-color: $dark-background-default;
  }
  .theme--light & {
    background-color: $light-background-paper;
  }
}
.grey-bg {
  padding-top: $spacing10;
}
.space-bottom {
  margin-bottom: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-bottom: section-margin($spacing1 * 0.5);
  }
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top {
  margin-top: section-margin(6px);
  @include breakpoints-down(sm) {
    margin-top: section-margin(3px);
  }
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  margin-top: -40px;
  > section {
    position: relative;
  }
}
.deco-wrap {
  position: relative;
  &.bottom ::v-deep .inner-parallax {
    top: -1500px;
  }
}
.bottom-deco {
  top: -200px;
  position: absolute;
  width: 100%;
  height: calc(100% + 200px);
}
</style>

<script>
import Header from '~/components/Header'
import BannerNav from '~/components/BannerNav'
import About from '~/components/About'
import Timeline from '~/components/Timeline'
import Decoration from '~/components/Parallax/Decoration'
import Services from '~/components/Services'
import Gallery from '~/components/Gallery'
import Counter from '~/components/Counter'
import Testimonials from '~/components/Testimonials'
import Blog from '~/components/Blog'
import Footer from '~/components/Footer'
import Hidden from '~/components/Hidden'
import PageNav from '~/components/PageNav'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    About,
    BannerNav,
    Timeline,
    Counter,
    Decoration,
    Services,
    Gallery,
    Testimonials,
    Blog,
    'main-footer': Footer,
    PageNav,
    Hidden,
    Notification
  },
  head() {
    return {
      title: brand.femine.name + ' -  Iluxi Theme Profile',
      script: [
        { src: '/scripts/vanta/three.r121.min.js' },
        { src: '/scripts/vanta/vanta.birds.min.js' },
        { src: '/scripts/particles/particles.min.js' },
        { src: '/scripts/particles/stats.min.js' }
      ]
    }
  }
}
</script>
