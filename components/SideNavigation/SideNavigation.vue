<template>
  <div class="navigation">
    <v-container class="fixed-width">
      <nav class="nav-menu">
        <scrollactive v-if="loaded" tag="span">
          <a href="#home" class="logo anchor-link scrollactive-item">
            <img :src="logo" alt="logo">
          </a>
        </scrollactive>
        <v-list nav class="menu">
          <scrollactive
            v-if="loaded"
            :offset="navOffset"
            active-class="active"
            tag="ul"
          >
            <v-list-item-group>
              <v-list-item
                v-for="(item, index) in menuList"
                :key="index"
                :href="item.url"
		        class="link anchor-link scrollactive-item"
                @click="setOffset(item.offset)"
              >
                <v-list-item-title class="text">
                  {{ $t('profileLanding.header_' + item.name) }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </scrollactive>
        </v-list>
      </nav>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './sidenav-style.scss';
</style>

<script>
import logo from '~/static/images/femine-logo.svg'
import navMenu from '../SideNavigation/menu'

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  data() {
    return {
      logo: logo,
      loaded: false,
      navOffset: 20,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1], -100),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4]),
        createData(navMenu[5], '#' + navMenu[5]),
        createData(navMenu[6], '#' + navMenu[6])
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    setOffset: function(offset) {
      this.navOffset = offset
    }
  }
}
</script>
