import colors from 'vuetify/lib/util/colors'

let darkMode = 'true'
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || 'true'
}

const palette = {
  femine: {
    primary: colors.pink.lighten1, // primary main
    primarylight: colors.pink.lighten4, // primary light
    primarydark: colors.pink.darken4, // primary dark
    secondary: colors.deepOrange.lighten1, // secondary main
    secondarylight: colors.deepOrange.lighten4, // secondary light
    secondarydark: colors.deepOrange.darken4, // secondary dark
    anchor: colors.pink.base // link
  }
}

export const theme = {
  ...palette.femine
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
