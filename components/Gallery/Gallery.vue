<template>
  <fragment>
    <vue-easy-lightbox
      v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
    <div class="root">
      <v-container>
        <title-main>
          {{ $t('profileLanding.gallery_title') }}
          <strong>
            {{ $t('profileLanding.gallery_titleBold') }}
          </strong>
        </title-main>
        <div class="filter">
          <v-btn
            @click="filterChildren('all')"
            :class="{ selected: filter === 'all' }"
          >
            All
          </v-btn>
          <v-btn
            @click="filterChildren('cat1')"
            :class="{ selected: filter === 'cat1' }"
          >
            Category 1
          </v-btn>
          <v-btn
            @click="filterChildren('cat2')"
            :class="{ selected: filter === 'cat2' }"
          >
            Category 2
          </v-btn>
          <v-btn
            @click="filterChildren('cat3')"
            :class="{ selected: filter === 'cat3' }"
          >
            Category 3
          </v-btn>
          <v-btn
            @click="filterChildren('cat4')"
            :class="{ selected: filter === 'cat4' }"
          >
            Category 4
          </v-btn>
          <v-btn
            @click="filterChildren('cat5')"
            :class="{ selected: filter === 'cat5' }"
          >
            Category 5
          </v-btn>
        </div>
        <hidden point="xsDown">
          <div class="massonry">
            <u-animate-container>
              <div
                v-for="(item, index) in data"
                :key="index"
                class="item"
              >
                <u-animate
                  :offset="-200"
                  :delay="0.2 + (0.1 * index) + 's'"
                  name="fadeInUpShort"
                  duration="0.3s"
                >
                  <image-thumb-card
                    :img="item.img"
                    :title="item.title"
                    :link="item.link"
                    :size="item.size"
                    :show-img="() => showImg(index)"
                  />
                </u-animate>
              </div>
            </u-animate-container>
          </div>
          <p v-if="data.length < 1" class="overline text-center">
            {{ $t('profileLanding.gallery_nodata') }}
          </p>
        </hidden>
        <hidden v-if="loaded" point="smUp">
          <Fragment>
            <p v-if="data.length < 1" class="overline text-center">
              {{ $t('profileLanding.gallery_nodata') }}
            </p>
            <slick v-if="data.length > 0" ref="slick" :options="slickOptions">
              <div
                v-for="(item, index) in data"
                :key="index"
                class="item-carousel"
              >
                <image-thumb-card
                  :img="item.img"
                  :title="item.title"
                  :link="item.link"
                  :size="item.size"
                  :show-img="() => showImg(index)"
                />
              </div>
            </slick>
          </Fragment>
        </hidden>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './gallery-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import ImageThumbCard from '../Cards/ImageThumb'
import Title from '../Title'
import Hidden from '../Hidden'

const portfolio = [
  {
    img: imgAPI.femine[6],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.femine[7],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat2'
  },
  {
    img: imgAPI.femine[8],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat3'
  },
  {
    img: imgAPI.femine[9],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat1'
  },
  {
    img: imgAPI.femine[10],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat2'
  },
  {
    img: imgAPI.femine[11],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat3'
  },
  {
    img: imgAPI.femine[12],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat1'
  },
  {
    img: imgAPI.femine[14],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'short',
    category: 'cat2'
  },
  {
    img: imgAPI.femine[13],
    title: 'Aenean facilisis vitae purus',
    link: 'linkofthisitem.com',
    size: 'long',
    category: 'cat2'
  }
]

export default {
  components: {
    ImageThumbCard,
    'title-main': Title,
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      visible: false,
      index: 0,
      data: [],
      loaded: false,
      filter: 'all',
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        arrows: false
      }
    }
  },
  mounted() {
    this.data = portfolio
    this.loaded = true
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    filterChildren(name) {
      if (this.isDesktop) {
        this.data = [];
      }
      setTimeout(() => {
        if (name !== 'all') {
          const filteredData = portfolio.filter(item => item.category === name)
          this.data = filteredData
          this.filter = name
        } else {
          this.data = portfolio
          this.filter = 'all'
        }
      }, 100)

      // re-init slick carousel for mobile
      if (this.isMobile) {
        this.$nextTick(() => {
          this.$refs.slick.reSlick()
        })
      }
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    imgs() {
      const arr = []
      this.data.map(item => {
        arr.push(item.img)
      })
      return arr
    }
  }
}
</script>
