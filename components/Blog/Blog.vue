<template>
  <div class="root">
    <div class="floating-title">
      <title-main>
        {{ $t('profileLanding.blog_title') }}
        <strong>
          {{ $t('profileLanding.blog_titlebold') }}
        </strong>
      </title-main>
      <p class="mb-0 use-text-paragraph">
        {{ $t('profileLanding.blog_desc') }}
      </p>
      <v-btn text class="link" color="primary" href="#">luxi-theme.blog.com</v-btn>
    </div>
    <div class="slider-wrap">
      <div class="carousel" v-if="loaded">
        <v-btn
          icon
          fab
          class="nav prev"
          @click="prev()"
        >
          <i class="ion-ios-arrow-back" />
        </v-btn>
        <slick ref="slick" :options="slickOptions">
          <div class="item item-props-first">
            <div />
          </div>
          <div
            v-for="(item, index) in blogData"
            :key="index"
            class="item"
          >
            <blog-post-card
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
            />
          </div>
          <div class="item item-props-last">
            <div />
          </div>
        </slick>
        <v-btn
          icon
          fab
          class="nav next"
          @click="next()"
        >
          <i class="ion-ios-arrow-forward" />
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script>
import Title from '../Title'
import BlogPostCard from '../Cards/BlogPost'
import imgApi from '~/static/images/imgAPI'

const blogData = [
  {
    img: imgApi.photo[0],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[1],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[2],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[3],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[4],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgApi.photo[5],
    title: 'Vivamus sit amet interdum elit',
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  }
]

export default {
  components: {
    'title-main': Title,
    BlogPostCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      blogData: blogData,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        arrows: false,
        pauseOnHover: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        const lastSlide = Math.floor(this.blogData.length - 2)
        this.$refs.slick.goTo(lastSlide)
      }
    }, 200)
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    }
  }
}
</script>
